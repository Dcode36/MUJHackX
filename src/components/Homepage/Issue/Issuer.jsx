import React, { useState, useEffect } from 'react';
import Navbar from '../../essentials/Navbar';
import axios from 'axios';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography,
    Box, Chip, CircularProgress
} from '@mui/material';

const Issuer = () => {
    const [students, setStudents] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('https://t83s14q4-8888.inc1.devtunnels.ms/users'); // Replace with your API endpoint
                setStudents(response.data);
                console.log(response.data);
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    const handleOpen = (student) => {
        setSelectedStudent(student);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedStudent(null);
    };

    const handleIssue = (status) => {
        if (selectedStudent) {
            // Update the status of the selected student's course
            const updatedStudents = students.map((student) =>
                student.id === selectedStudent.id
                    ? {
                        ...student, courses: student.courses.map(course =>
                            course.id === selectedStudent.courses[0].id ? { ...course, status: status } : course
                        )
                    }
                    : student
            );
            setStudents(updatedStudents);
        }
        handleClose();
    };

    if (loading) return (
        <>
            <div className='contianer d-flex justify-content-center align-items-center my-5'>
                <CircularProgress />
            </div>
        </>
    );
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <>
            <Navbar />
            <div className="container">
                <h4 className='py-3'>Enrolled Students</h4>
                <Box sx={{ padding: 2 }}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Index</TableCell>
                                    <TableCell>Student Name</TableCell>
                                    <TableCell>Course Name</TableCell>
                                    <TableCell>Duration</TableCell>
                                    <TableCell>Status</TableCell>
                                    {/* <TableCell>Issue</TableCell> */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {students.map((student, index) => (
                                    <TableRow key={student.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{student.user.fullName}</TableCell>
                                        <TableCell>{student.courses[0].id.title}</TableCell>
                                        <TableCell>{student.courses[0].id.duration}</TableCell>
                                        <TableCell>
                                            <Chip
                                                label={student.courses[0].status}
                                                color={student.courses[0].status === 'complete' ? 'success' : student.courses[0].status === 'Incomplete' ? 'error' : 'warning'}
                                            />
                                        </TableCell>
                                        {/* <TableCell>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => handleOpen(student)}
                                                disabled={student.courses[0].status === 'complete' || student.courses[0].status === 'Incomplete'}
                                            >
                                                {student.courses[0].status === 'complete' || student.courses[0].status === 'Incomplete' ? student.courses[0].status : 'Issue Certificate'}
                                            </Button>
                                        </TableCell> */}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* Confirmation Dialog */}
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Issue Certificate</DialogTitle>
                        <DialogContent>
                            <Typography>
                                Are you sure you want to {selectedStudent?.courses[0].status === 'Incomplete' ? 'issue' : 'revoke'} the certificate for {selectedStudent?.user.fullName} for the course {selectedStudent?.courses[0].id.title}?
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => handleIssue('complete')} color="success">
                                Yes
                            </Button>
                            <Button onClick={() => handleIssue('Incomplete')} color="error">
                                No
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </div>
        </>
    );
};

export default Issuer;

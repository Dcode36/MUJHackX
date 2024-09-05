import React, { useState } from 'react';
import Navbar from '../../essentials/Navbar';
import { TextField, MenuItem, Select, Button, FormControl, InputLabel, Box } from '@mui/material';
import axios from 'axios';

const courseOptions = [
    { id: "66d9e93afd36e9f00f4613af", title: "Introduction to JavaScript", description: "Learn the basics of JavaScript, including variables, data types, and functions.", duration: 10 },
    { id: "66d9e93afd36e9f00f4613b0", title: "Advanced Node.js", description: "Dive deep into Node.js, focusing on event-driven architecture and asynchronous programming.", duration: 20 },
    { id: "66d9e93afd36e9f00f4613b1", title: "React for Beginners", description: "Learn the fundamentals of React, including JSX, components, and state management.", duration: 15 }
];

const Verify = () => {
    const [studentId, setStudentId] = useState('');
    const [course, setCourse] = useState('');
    const [showCertificate, setShowCertificate] = useState(false);
    const [certificateData, setCertificateData] = useState({});

    const handleStudentIdChange = (e) => {
        setStudentId(e.target.value);
    };

    const handleCourseChange = (e) => {
        setCourse(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://t83s14q4-8888.inc1.devtunnels.ms/verify-certificate', { name: studentId, course, issueDate: new Date().toISOString() });
            if (response.status === 200) {
                setCertificateData({ studentId, course });
                setShowCertificate(true);
            }
        } catch (error) {
            console.error('Error verifying certificate:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <Box sx={{ padding: 2 }}>
                    <h4 className='py-2'>Verify Course Enrollment</h4>
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ mb: 2 }}>
                            <TextField
                                label="Student ID"
                                variant="outlined"
                                value={studentId}
                                onChange={handleStudentIdChange}
                                fullWidth
                                required
                            />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <FormControl fullWidth required>
                                <InputLabel>Course</InputLabel>
                                <Select
                                    value={course}
                                    onChange={handleCourseChange}
                                    label="Course"
                                >
                                    <MenuItem value="">Select a course</MenuItem>
                                    {courseOptions.map((option) => (
                                        <MenuItem key={option.id} value={option.title}>
                                            {option.title}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                        <Button type="submit" variant="contained" color="primary">
                            Verify
                        </Button>
                    </form>
                    {showCertificate && (
                        <div style={{
                            border: '10px solid black',
                            backgroundImage: 'url(https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-background-template-design-36d583574422245c0d33c5d2f5a1bb58_screen.jpg?ts=1692768955)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: "center",
                            padding: '20px',
                            marginTop: '30px',
                            textAlign: 'center',
                            position: 'relative',
                            width: '80%',
                            margin: 'auto',
                            height: "500px",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            borderRadius: '2px'
                        }}>
                            <h2 style={{ fontWeight: 'bold' }}>Certificate of Completion</h2>
                            <p style={{ fontSize: '18px', margin: '10px 0' }}>
                                This is to certify that <strong>{certificateData.studentId}</strong> has successfully completed the course
                                <strong> {certificateData.course}</strong> on <strong>{new Date().toLocaleDateString()}</strong>.
                            </p>
                            <p style={{ fontSize: '16px', marginBottom: '20px' }}>
                                This certification acknowledges the successful completion of all course requirements and demonstrates proficiency in the subject matter.
                            </p>
                            <div style={{
                                position: 'absolute',
                                top: '40px',
                                left: '40px',
                                fontSize: '16px'
                            }}>
                                Student ID: {certificateData.studentId}
                            </div>
                            <div style={{
                                position: 'absolute',
                                bottom: '40px',
                                right: '40px',
                                fontSize: '16px'
                            }}>
                                Digital Signature
                            </div>
                        </div>
                    )}
                </Box>
            </div >
        </div >
    );
};

export default Verify;

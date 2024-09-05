import React, { useState } from 'react';
import Navbar from '../../essentials/Navbar';
import { TextField, MenuItem, Select, Button, FormControl, InputLabel, Box } from '@mui/material';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
const courseOptions = [
    "DSA",
    "LLD",
    "Introduction to JavaScript",
    "Frontend",
    "C++",
    "Java"
];

const Verify = () => {
    const { user } = useUser();
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [showCertificate, setShowCertificate] = useState(false);
    const [certificateData, setCertificateData] = useState({});

    const handleStudentIdChange = (e) => {
        setName(e.target.value);
    };

    const handleCourseChange = (e) => {
        setCourse(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://t83s14q4-8888.inc1.devtunnels.ms/verify-certificate', { certificateId: name, course, issueDate: Date.now() });
            setCertificateData(response.data);
            setShowCertificate(true);
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
                                value={name}
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
                                    {courseOptions.map((option, index) => (
                                        <MenuItem key={index} value={option}>
                                            {option}
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
                        < div style={{
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
                                This is to certify that <strong>{certificateData.certificate.userName}</strong> has successfully completed the course
                                <strong> {certificateData.certificate.course}</strong> on <strong>{certificateData.certificate.issueDate.slice(0, 10)}</strong>.
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
                                Student ID: {certificateData.certificate.studentId}
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

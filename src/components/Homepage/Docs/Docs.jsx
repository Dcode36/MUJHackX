import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../../essentials/Navbar';

const Docs = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Box sx={{ padding: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        API Documentation
                    </Typography>

                    {/* Verify Certificate API */}
                    <Box sx={{ marginBottom: 4 }}>
                        <Typography variant="h5" gutterBottom>
                            Verify Certificate API
                        </Typography>
                        <Typography variant="body1">
                            <strong>Endpoint:</strong> <code>POST /verify-certificate</code>
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: 1 }}>
                            <strong>Description:</strong> Verifies whether a student has successfully completed a course and returns the certificate details if valid.
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                            <strong>Request Body:</strong>
                        </Typography>
                        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
                            {`{
  "studentId": "12345",
  "course": "React for Beginners"
}`}
                        </pre>
                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                            <strong>Response (200 - Success):</strong>
                        </Typography>
                        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
                            {`{
  "isValid": true,
  "certificate": {
    "userName": "John Doe",
    "studentId": "12345",
    "course": "React for Beginners",
    "issueDate": "2023-09-10",
    "duration": 15
  }
}`}
                        </pre>
                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                            <strong>Response (400 - Invalid Certificate):</strong>
                        </Typography>
                        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
                            {`{
  "isValid": false,
  "message": "The certificate is not valid"
}`}
                        </pre>
                    </Box>

                    {/* Additional API Documentation for Courses */}
                    <Box sx={{ marginBottom: 4 }}>
                        <Typography variant="h5" gutterBottom>
                            Get All Courses API
                        </Typography>
                        <Typography variant="body1">
                            <strong>Endpoint:</strong> <code>GET /courses</code>
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: 1 }}>
                            <strong>Description:</strong> Retrieves the list of all available courses.
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                            <strong>Response (200 - Success):</strong>
                        </Typography>
                        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
                            {`{
  "courses": [
    {
      "_id": "66d9e93afd36e9f00f4613af",
      "title": "Introduction to JavaScript",
      "description": "Learn the basics of JavaScript, including variables, data types, and functions.",
      "courseContent": [...],
      "duration": 10,
      "createdAt": "2023-09-01T10:00:00Z"
    },
    {
      "_id": "66d9e93afd36e9f00f4613b0",
      "title": "Advanced Node.js",
      "description": "Dive deep into Node.js, focusing on event-driven architecture and asynchronous programming.",
      "courseContent": [...],
      "duration": 20,
      "createdAt": "2023-09-10T11:30:00Z"
    }
    ...
  ]
}`}
                        </pre>
                    </Box>

                    {/* Example API for Enrolling in a Course */}
                    <Box sx={{ marginBottom: 4 }}>
                        <Typography variant="h5" gutterBottom>
                            Enroll in a Course API
                        </Typography>
                        <Typography variant="body1">
                            <strong>Endpoint:</strong> <code>POST /enroll</code>
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: 1 }}>
                            <strong>Description:</strong> Enrolls a student in a specific course by student ID and course ID.
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                            <strong>Request Body:</strong>
                        </Typography>
                        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
                            {`{
  "studentId": "12345",
  "courseId": "66d9e93afd36e9f00f4613b1"
}`}
                        </pre>
                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                            <strong>Response (200 - Success):</strong>
                        </Typography>
                        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
                            {`{
  "message": "Enrollment successful",
  "enrollment": {
    "studentId": "12345",
    "courseId": "66d9e93afd36e9f00f4613b1",
    "enrolledAt": "2023-09-15T10:00:00Z"
  }
}`}
                        </pre>
                    </Box>
                </Box>
            </div>
        </>

    );
};

export default Docs;

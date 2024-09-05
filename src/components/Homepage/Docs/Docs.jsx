import React from 'react';
import Navbar from '../../essentials/Navbar';
import { Container, Typography, Box } from '@mui/material';

const apiDocs = [
    {
        method: 'POST',
        endpoint: '/login',
        description: 'Authenticate a user and obtain a token.'
    },
    {
        method: 'GET',
        endpoint: '/courses',
        description: 'Retrieve a list of all courses.'
    },
    {
        method: 'GET',
        endpoint: '/courses/:userId',
        description: 'Get all courses for a specific user.'
    },
    {
        method: 'PUT',
        endpoint: '/courses/:userId/:courseId',
        description: 'Update the status of a course for a specific user.'
    }
];

const Docs = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <Typography variant="h4" className="fw-bold py-2" gutterBottom >
                    API Documentation
                </Typography>
                {apiDocs.map((api, index) => (
                    <Box key={index} sx={{ mb: 4, p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            {api.method} {api.endpoint}
                        </Typography>
                        <Typography variant="body1">
                            {api.description}
                        </Typography>
                    </Box>
                ))}
            </Container>
        </div>
    );
};

export default Docs;

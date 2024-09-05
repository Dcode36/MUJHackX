import React, { useState, useEffect } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Button, Checkbox, Typography, Card, CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../../essentials/Navbar';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react'; // Assuming Clerk is being used for user management

const Course = () => {
    const [checkedItems, setCheckedItems] = useState({});  // State to track checked items
    const [allCourses, setAllCourses] = useState([]);  // State to store all courses
    const [userCourses, setUserCourses] = useState([]);  // State to store user-specific courses
    const [certificateData, setCertificateData] = useState(null); // State to store certificate data
    const { user, isSignedIn } = useUser();  // Get user information from Clerk
    const userId = user?.id;

    // Fetch all courses and user-specific courses on page load
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                // Fetch all courses
                const allCoursesResponse = await axios.get("https://t83s14q4-8888.inc1.devtunnels.ms/courses");
                setAllCourses(allCoursesResponse.data);

                // Fetch user-specific courses
                const userCoursesResponse = await axios.get(`https://t83s14q4-8888.inc1.devtunnels.ms/courses/${userId}`);
                setUserCourses(userCoursesResponse.data);
                console.log(userCoursesResponse.data);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourses();
    }, [userId]);

    const handleCheckboxChange = (courseId, index) => {
        if (userCourses.find(course => course.id === courseId)?.status === 'complete') {
            return; // Do nothing if the course is complete
        }

        setCheckedItems(prev => ({
            ...prev,
            [`${courseId}-${index}`]: !prev[`${courseId}-${index}`],
        }));
    };

    const handleCompleteCourse = async (courseId) => {
        try {
            // Call the API to update course status and generate certificate
            const response = await axios.put(`https://t83s14q4-8888.inc1.devtunnels.ms/courses/${userId}/${courseId}`, { status: "complete" });

            // Update the local state to mark the course as completed
            setUserCourses(prevCourses =>
                prevCourses.map(course =>
                    course.id === courseId ? { ...course, status: "complete" } : course
                )
            );

            // Store the certificate data from the API response
            setCertificateData(response.data.certificate);

            // Clear the checked items after course completion
            setCheckedItems(prev => {
                const newCheckedItems = { ...prev };
                Object.keys(newCheckedItems).forEach(key => {
                    if (key.startsWith(courseId)) {
                        delete newCheckedItems[key];
                    }
                });
                return newCheckedItems;
            });

            alert("Course status updated!");
            // Optionally reload the page or perform other actions here
            window.location.reload();
        } catch (error) {
            alert("Error updating course status:", error);
        }
    };

    const areAllCheckboxesChecked = (course) => {
        const totalCheckboxes = course.id.courseContent.length;
        const checkedCheckboxes = Object.keys(checkedItems).filter(key => key.startsWith(course.id)).length;
        return totalCheckboxes === checkedCheckboxes;
    };

    return (
        <>
            <Navbar />
            <div className="container">
                {/* User-Specific Courses */}
                <Typography variant="h6" style={{ marginTop: '20px' }}>Your Courses</Typography>
                {
                    isSignedIn ? (
                        userCourses.length > 0 ? (
                            userCourses.map((course) => (
                                <div key={course.id} style={{ margin: '20px' }}>
                                    <Typography
                                        className='fw-bold py-2 mt-2'
                                        variant="h5"
                                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                                    >
                                        {course.id.title}

                                        {course.status === 'complete' ? (
                                            <div className='d-flex'>
                                                <span style={{ height: '12px', width: '12px', backgroundColor: 'green', borderRadius: '50%' }}></span>
                                                <Typography variant="caption" style={{ marginLeft: '8px' }}>Course Completed</Typography>
                                            </div>
                                        ) : (
                                            <div className='d-flex'>
                                                <span style={{ height: '12px', width: '12px', backgroundColor: 'gray', borderRadius: '50%' }}></span>
                                                <Typography variant="caption" style={{ marginLeft: '8px' }}>Course Incomplete</Typography>
                                            </div>
                                        )}
                                    </Typography>

                                    <Typography variant="h6" className='mb-2'>
                                        Duration: {course.id.duration} hours
                                    </Typography>

                                    <Accordion>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography>Course Content</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div>
                                                {course.id.courseContent.map((val, index) => (
                                                    <div style={{ display: 'flex', alignItems: 'center' }} key={index}>
                                                        <Checkbox
                                                            checked={!!checkedItems[`${course.id}-${index}`]}
                                                            onChange={() => handleCheckboxChange(course.id, index)}
                                                            disabled={course.status === 'complete'} // Disable checkbox if course is complete
                                                        />
                                                        <Typography>{val}</Typography>
                                                    </div>
                                                ))}
                                            </div>

                                            <Button
                                                variant="contained"
                                                color="primary"
                                                disabled={!areAllCheckboxesChecked(course) || course.status === 'complete'}
                                                onClick={() => handleCompleteCourse(course.id._id)}
                                                style={{ marginTop: '10px' }}
                                            >
                                                Complete Course
                                            </Button>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            ))
                        ) : (
                            <Typography>No courses found for this user.</Typography>
                        )
                    ) : (
                        <Typography>Please sign in to view your courses.</Typography>
                    )
                }


                {/* All Other Courses */}
                <Typography variant="h6" className='my-2' style={{ marginTop: '40px' }}>All Available Courses</Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {allCourses.length > 0 ? allCourses.map((course) => (
                        <Card key={course.id} style={{ width: '300px' }}>
                            <CardContent>
                                <Typography variant="h6">{course.title}</Typography>
                                <Typography variant="body2">Duration: {course.duration} hours</Typography>
                            </CardContent>
                        </Card>
                    )) : (
                        <Typography>No courses available at the moment.</Typography>
                    )}
                </div>

                {/* Certificate Display */}
                {certificateData && (
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
                            This is to certify that <strong>{user?.firstName} {user?.lastName}</strong> has successfully completed the course
                            <strong> {certificateData.courseTitle}</strong> on <strong>{certificateData.issueDate}</strong>.
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
                            Student ID: {userId}
                        </div>
                        <div style={{
                            position: 'absolute',
                            bottom: '40px',
                            right: '40px',
                            fontSize: '16px'
                        }}>
                            <strong>Signature</strong>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Course;

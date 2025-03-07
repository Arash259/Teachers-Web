import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Dashboard = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await api.get('/courses/');
                setCourses(response.data);
            } catch (error) {
                console.error('Failed to fetch courses', error);
            }
        };
        fetchCourses();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>{course.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
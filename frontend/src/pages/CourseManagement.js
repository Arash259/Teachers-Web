import React, { useEffect, useState } from 'react';
import api from '../services/api';

const CourseManagement = () => {
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        const fetchChapters = async () => {
            try {
                const response = await api.get('/chapters/');
                setChapters(response.data);
            } catch (error) {
                console.error('Failed to fetch chapters', error);
            }
        };
        fetchChapters();
    }, []);

    return (
        <div>
            <h1>Course Management</h1>
            <ul>
                {chapters.map(chapter => (
                    <li key={chapter.id}>{chapter.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default CourseManagement;
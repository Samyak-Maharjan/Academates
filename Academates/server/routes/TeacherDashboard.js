import express from 'express';
import { teacherDashboard } from '../controllers/TeacherDashboard.js';

const router= express.Router;

router.get('/teacher-dashboard', teacherDashboard)

export default router;
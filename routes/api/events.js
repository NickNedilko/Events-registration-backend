import express from "express";
import eventsControllers from '../../controllers/events.js';

const router = express.Router();


router.get('/', eventsControllers.getEvents);

export default router;
import express from "express";
import eventsControllers from '../../controllers/events.js';

const router = express.Router();


router.get('/', eventsControllers.getEvents);
router.post('/:id/registration', eventsControllers.eventRegistration);


export default router;
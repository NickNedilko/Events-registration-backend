import Event from "../models/event.js";


export const getAllEvents = () => Event.find();
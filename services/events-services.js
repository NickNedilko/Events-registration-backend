import Event from "../models/event.js";


export const getEventsPagination = (page) => {
   return Event.find().skip((page-1)*6).limit(6)
};

export const getAllEvents = () => {
   return Event.find()
};
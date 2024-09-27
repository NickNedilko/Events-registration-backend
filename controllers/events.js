import ctrlWrapper from "../decorators/ctrl-wrapper.js";
import Event from "../models/event.js";
import Participant from "../models/participant.js";
import * as eventsServices from "../services/events-services.js";

const getEvents = async (req, res) => {
    const page = parseInt(req.query.page);
    const events = await eventsServices.getEventsPagination(page);
    const allEvents = await eventsServices.getAllEvents()
    const quantity = allEvents.length + 1
   return  res.status(200).json({
       events,
       quantity
    });
}

const eventRegistration = async (req, res) => {
    const {id} = req.params;
   
    const newEventParticipant = {
        owner: id,
        ...req.body
    }
    console.log(newEventParticipant)
    const newParticipant = await Participant.create(newEventParticipant);

     res.status(200).json({
      newParticipant
  });
}


export const getEventParticipants = async (req, res) => {
    const{ id: owner }= req.params;
    const participants = await Participant.find({owner}, "-createdAt -updatedAt")
    res.status(200).json({participants});
    
}

export default {
    getEvents: ctrlWrapper(getEvents),
    eventRegistration: ctrlWrapper(eventRegistration),
    getEventParticipants: ctrlWrapper(getEventParticipants)

   
}
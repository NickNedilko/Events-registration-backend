import ctrlWrapper from "../decorators/ctrl-wrapper.js";
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
    const id = req.params;
    console.log(id)

    const event = await Event.find(id);
    const newEventParticipant = {
        owner: event.id,
        ...req.body
    }
    const newParticipant = await Participant.create(newEventParticipant);

     res.status(200).json({
      newParticipant
  });
}

export default {
    getEvents: ctrlWrapper(getEvents),
    eventRegistration: ctrlWrapper(eventRegistration)
   
}
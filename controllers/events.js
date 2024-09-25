import ctrlWrapper from "../decorators/ctrl-wrapper.js";
import * as eventsServices from "../services/events-services.js";

const getEvents = async (_, res) => {

    const events = await eventsServices.getAllEvents();
     res.status(200).json({
        events,
    });
}

export default {
    getEvents: ctrlWrapper(getEvents),
   
}
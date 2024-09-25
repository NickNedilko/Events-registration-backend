import {Schema, model} from "mongoose";

const participantSchema = new Schema( {
  name: {
      type: String,
      required:  [true, 'Name is required'],
  },
  email: {
      type: String,
      required: [true, 'Email is required'],
  },
  birthdate: {
    type: Date,
    },
  info: {
      type: String,
      enum: ['social media', 'friends', 'found myself'],
      required: [true, 'Please choose the data'],
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "Event",
    },
},
);

const Participant = model('participant', participantSchema);

export default Participant;
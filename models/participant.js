import mongoose, {Schema, model} from "mongoose";

const participantSchema = new Schema( {
  fullName: {
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
      enum: ['Social media', 'Friends', 'Found myself'],
      required: [true, 'Please choose the data'],
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "Event",
    },
},
  {
    versionKey: false,
    timestamps: true
}
);

const Participant = model('participant', participantSchema);

export default Participant;
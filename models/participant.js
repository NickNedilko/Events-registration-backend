import mongoose, {Schema, model} from "mongoose";
import crypto from 'crypto';

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
  avatar: {
    type: String
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
participantSchema.pre('save', async function (next) {
    if (this.isNew) {
        const emailHash = crypto.createHash('md5').update(this.email).digest('hex');
        this.avatar = `https://www.gravatar.com/avatar/${emailHash}?d=monsterid`
    }
    next();
})

const Participant = model('participant', participantSchema);

export default Participant;
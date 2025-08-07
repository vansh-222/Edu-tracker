import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  progress: {
    type: Number,
    default: 0,
  },
  topics: [
    {
      title: {
        type: String,
        required: true,
      },
      isCompleted: {
        type: Boolean,
        default: false,
      }
    }
  ]
}, { timestamps: true });

const Subject = mongoose.model('Subject', subjectSchema);

export default Subject;

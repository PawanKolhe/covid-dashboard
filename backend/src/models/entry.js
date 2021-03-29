import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const EntrySchema = new Schema(
  {
    num_cases: {
      type: Number,
      trim: true,
      required: false,
    },
    current_status: {
      type: String,
      trim: true,
      required: false,
    },
    date_announced: {
      type: String,
      trim: true,
      required: false,
    },
  },
  {
    collection: 'entries',
  }
);

EntrySchema.plugin(timestamps);

EntrySchema.index({ createdAt: 1, updatedAt: 1 });

export const Entry = mongoose.model('Entry', EntrySchema);
export const EntryTC = composeWithMongoose(Entry);

import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const EntrySchema = new Schema(
  {
    entry_id: {
      type: String,
      trim: true,
      required: false,
    },
    state_patient_number: {
      type: String,
      trim: true,
      required: false,
    },
    date_announced: {
      type: String,
      trim: true,
      required: false,
    },
    age_bracket: {
      type: String,
      trim: true,
      required: false,
    },
    gender: {
      type: String,
      trim: true,
      required: false,
    },
    detected_city: {
      type: String,
      trim: true,
      required: false,
    },
    detected_district: {
      type: String,
      trim: true,
      required: false,
    },
    detected_state: {
      type: String,
      trim: true,
      required: false,
    },
    state_code: {
      type: String,
      trim: true,
      required: false,
    },
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
    contracted_patient: {
      type: String,
      trim: true,
      required: false,
    },
    notes: {
      type: String,
      trim: true,
      required: false,
    },
    source_1: {
      type: String,
      trim: true,
      required: false,
    },
    nationality: {
      type: String,
      trim: true,
      required: false,
    },
    type_of_transmission: {
      type: String,
      trim: true,
      required: false,
    },
    patient_number: {
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

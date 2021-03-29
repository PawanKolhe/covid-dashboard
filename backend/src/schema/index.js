import { SchemaComposer } from 'graphql-compose';

import db from '../utils/db'; // eslint-disable-line no-unused-vars

const schemaComposer = new SchemaComposer();

import { UserQuery, UserMutation } from './user';
import { EntryQuery, EntryMutation } from './entry';

schemaComposer.Query.addFields({
  ...UserQuery,
  ...EntryQuery,
});

schemaComposer.Mutation.addFields({
  ...UserMutation,
  ...EntryMutation,
});

export default schemaComposer.buildSchema();

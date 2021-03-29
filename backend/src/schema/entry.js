import { Entry, EntryTC } from '../models/entry';

EntryTC.addResolver({
  name: 'activeCases',
  type: 'Int',
  resolve: async () => {
    const result = await Entry.aggregate([
      {
        $match: { 'current_status': { $eq: 'Hospitalized' } }
      },
      {
        $group: {
          _id: null,
          sum: { $sum: '$num_cases'}
        }
      },
      {
        $project: {
          _id: 0,
          sum: 1
        }
      }
    ]);
    console.log('RESULT', result);
    return result;
  },
});

EntryTC.addResolver({
  name: 'deceasedCases',
  type: 'Int',
  resolve: async () => {
    return await Entry.count({ current_status: { $eq: 'Deceased' } });
  },
});

EntryTC.addResolver({
  name: 'recoveredCases',
  type: 'Int',
  resolve: async () => {
    return await Entry.count({ current_status: { $eq: 'Recovered' } });
  },
});

const EntryQuery = {
  entryById: EntryTC.getResolver('findById'),
  entryByIds: EntryTC.getResolver('findByIds'),
  entryOne: EntryTC.getResolver('findOne'),
  entryMany: EntryTC.getResolver('findMany'),
  entryCount: EntryTC.getResolver('count'),
  entryConnection: EntryTC.getResolver('connection'),
  entryPagination: EntryTC.getResolver('pagination'),
  entryCountActiveCases: EntryTC.getResolver('activeCases'),
  entryCountDeceasedCases: EntryTC.getResolver('deceasedCases'),
  entryCountRecoveredCases: EntryTC.getResolver('recoveredCases'),
};

const EntryMutation = {
  entryCreateOne: EntryTC.getResolver('createOne'),
  entryCreateMany: EntryTC.getResolver('createMany'),
  entryUpdateById: EntryTC.getResolver('updateById'),
  entryUpdateOne: EntryTC.getResolver('updateOne'),
  entryUpdateMany: EntryTC.getResolver('updateMany'),
  entryRemoveById: EntryTC.getResolver('removeById'),
  entryRemoveOne: EntryTC.getResolver('removeOne'),
  entryRemoveMany: EntryTC.getResolver('removeMany'),
};

export { EntryQuery, EntryMutation };

exports.seed = async function (knex) {
  await knex('cafes').insert([
    {
      id: 1,
      name: 'Thunderbird Cafe',
      address: '154 Featherston Street, CBD, Wellington 6011',
      city: 'Wellington',
      roaster_id: 1,
    },
    {
      id: 2,
      name: 'Meshino',
      address: '75 Rutland Street, St Albans, Chirstchurch, 8014',
      city: 'Christchurch',
      roaster_id: 2,
    },
    {
      id: 3,
      name: 'Shore Road Cafe',
      address: '13 Shore Road, Remuera, Auckland, 1050',
      city: 'Auckland',
      roaster_id: 2,
    },
    {
      id: 4,
      name: 'Kokako Roastery Roller Door',
      address: '9 Charles Street, Mount Eden, Auckland',
      city: 'Auckland',
      roaster_id: 3,
    },
    {
      id: 5,
      name: 'Ozone Coffee',
      address: '1/18 Westmoreland Street West, Grey Lynn, Auckland 1021',
      city: 'Auckland',
      roaster_id: 8,
    },
    {
      id: 6,
      name: 'Flight Coffee',
      address: '8 Wyndham Street, Auckland CBD, Auckland 1010',
      city: 'Auckland',
      roaster_id: 6,
    },
    {
      id: 7,
      name: 'The Hangar',
      address: '119 Dixon Street, Te Aro, Wellington 6011',
      city: 'Wellington',
      roaster_id: 6,
    },
  ])
}

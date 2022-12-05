exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('reviews').del()
  await knex('reviews').insert([
    {
      id: 1,
      auth_user_id: 1,
      roaster_id: 2,
      cafe_id: 201,
      bean_id: 1001,
      date: new Date(Date.now()),
      comment: 'I had a lovely coffee here',
      rating: 4,
    },
    {
      id: 2,
      auth_user_id: 2,
      roaster_id: 4,
      cafe_id: 204,
      bean_id: 1008,
      date: new Date(Date.now()),
      comment: 'Great coffee',
      rating: 5,
    },
  ])
}

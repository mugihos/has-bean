exports.seed = async function (knex) {
  await knex('beans').insert([
    {
      id: 1,
      roaster_id: 1,
      region: 'Central American',
      process: 'Washed',
      roast_degree: 'value',
      flavour_profile: 'Milk Chocolate & Citrus | Sweet & Complex',
    },
  ])
}

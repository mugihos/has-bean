exports.seed = async (knex) => {
  await knex('cafes').del()
  await knex('roasters').del()
  await knex('beans').del()
}

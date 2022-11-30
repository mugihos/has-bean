/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('beans', (table) => {
    table.increments('id')
    table.integer('roaster_id').references('roasters.id')
    table.string('region')
    table.string('process')
    table.string('roast_degree')
    table.string('flavour_profile')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('beans')
}

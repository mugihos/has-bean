/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('cafes', (table) => {
    table.increments('id')
    table.string('name')
    table.string('address')
    table.string('city')
    table.integer('roaster_id').references('roasters.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('cafes')
}

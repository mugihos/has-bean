/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('roasters', (table) => {
    table.increments('id')
    table.string('name')
    table.string('location')
    table.text('details')
    table.string('url')
    table.string('image_url')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('roasters')
}

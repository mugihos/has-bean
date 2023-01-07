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
    table.string('lat')
    table.string('lng')
    table.string('image_url')
    table
      .integer('roaster_id')
      .references('roasters.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('cafes')
}

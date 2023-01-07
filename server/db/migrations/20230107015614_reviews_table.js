/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments('id')
    table.string('auth_user_id')
    table.integer('roaster_id')
    table.integer('cafe_id')
    table.integer('bean_id')
    table.dateTime('date')
    table.string('comment')
    table.integer('rating')
    table.integer('flavour')
    table.integer('aroma')
    table.integer('acidity')
    table.integer('body')
    table.integer('aftertaste')
    table.string('coffee_type')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('reviews')
}

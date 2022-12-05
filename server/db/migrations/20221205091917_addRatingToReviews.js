/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table('reviews', (table) => {
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
  return knex.schema.table('reviews', (table) => {
    table.dropColumn('flavour')
    table.dropColumn('aroma')
    table.dropColumn('acidity')
    table.dropColumn('body')
    table.dropColumn('aftertaste')
    table.dropColumn('coffee_type')
  })
}

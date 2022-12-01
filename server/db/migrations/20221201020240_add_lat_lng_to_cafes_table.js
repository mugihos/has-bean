/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table('cafes', (table) => {
    table.string('lat')
    table.string('lng')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table('cafes', (table) => {
    table.dropColumn('lat')
    table.dropColumn('lng')
  })
}

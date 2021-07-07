
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      //creates id
      tbl.increments();
      //creates VIN field and makes it required and unique
      tbl.text('VIN', 17).unique().notNullable();
      //creates make field and makes it required
      tbl.text('make').notNullable();
      //creates model field and makes it required
      tbl.text('model').notNullable();
      //creates mileage field and makes it required
      tbl.text('mileage').notNullable();
      //creates transmission type field
      tbl.text('transmission')
      //creates title status field
      tbl.text('title'); 
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};

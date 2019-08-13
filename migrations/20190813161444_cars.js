exports.up = function(knex) {
    return knex.schema.createTable("carsTable", tbl => {
      tbl.increments();
      tbl.string("VIN", 16).notNullable();
      tbl.string("make", 16).notNullable();
      tbl.string("model", 16).notNullable();
      tbl.integer("mileage", 16).notNullable();
      tbl.string("Transmission Type", 16);
      tbl.string("Status of Title");
    });
  };
  
  exports.down = function(knex) {
  
      return knex.schema.dropTableIfExists("carsTable")
  };
  
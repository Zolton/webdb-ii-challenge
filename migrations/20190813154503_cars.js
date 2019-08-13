exports.up = function(knex) {
  return knex.schema.createTable("carsTable", tbl => {
    tbl.increments();
    tbl.text("VIN", 16).notNullable();
    tbl.text("make", 16).notNullable();
    tbl.text("model", 16).notNullable();
    tbl.integer("mileage", 16).notNullable();
    tbl.text("Transmission Type", 16);
    tbl.text("Status of Title");
  });
};

exports.down = function(knex) {

    return knex.schema.dropTableIfExists("carsTable")
};

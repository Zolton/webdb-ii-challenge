
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars3').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars3').insert([
        {VIN: 'as22', make: 'Jeep', model: 'Wrangler', mileage: 123456},
        {VIN: 'ass33', make: 'Jeep', model: 'Wrangler', mileage: 123456},
      ]);
    });
};

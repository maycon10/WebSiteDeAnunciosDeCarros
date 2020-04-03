
exports.up = function(knex) {
    return knex.schema.createTable('adverts', function(table){
        table.increments();
        table.string('caryear').notNullable();
        table.string('carbrand').notNullable();
        table.string('carmodel').notNullable();
        table.string('carcolor').notNullable();
        table.string('carprice').notNullable();
        table.string('cardescriptioncondition').notNullable();
        table.string('advertiser_id').notNullable();
        table.foreign('advertiser_id').references('id').inTable('advertiser');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('adverts');
  
};
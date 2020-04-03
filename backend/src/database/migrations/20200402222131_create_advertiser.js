exports.up = function(knex) {

    return knex.schema.createTable('advertiser', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('surname').notNullable();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('confirmpassword').notNullable();
        table.string('birthday').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('typeprofile').notNullable();
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('advertiser');
    
};
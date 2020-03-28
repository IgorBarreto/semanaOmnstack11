
exports.up = function(knex) {
 knex.schema.createTable('ongs',function (table){
    table.string('id').primary();
    table.string('name').notNUllable(); 
    table.string('email').notNUllable(); 
    table.string('whatsapp').notNUllable(); 
    table.string('city').notNUllable(); 
    table.string('uf',2).notNUllable();  
  })
};

exports.down = function(knex) {
  knex.schema.dropTable('ongs')
};


exports.up = function(knex) {
  knex.schema.createTable('incidents',function (table){
     table.increments();
     table.string('title').notNUllable(); 
     table.string('description').notNUllable(); 
     table.decimal('value').notNUllable(); 
     
     table.string('ong_id').notNUllable(); 
     table.foreign('ong_id').referencies('id').inTable('ongs')
    })
 };
 
 exports.down = function(knex) {
   knex.schema.dropTable('incidents')
 };
 
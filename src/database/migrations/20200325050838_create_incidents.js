
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable(); // Criando relacionamento com tabela ongs pelo id
        table.foreign('ong_id').references('id').inTable('ongs'); // criar chave estrangeira - toda vez que a ong id tiver preenchido tem que ter na tabela ong
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
  };
  
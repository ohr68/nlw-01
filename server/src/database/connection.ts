import knex from 'knex';

const connection = knex({
    client: 'mssql',
    connection: {
        server: 'OTAVIO',
        user: 'sa',
        password: 'Senha@123',
        database: 'NLWEcoleta',
        options: {
            instanceName: 'HELL'
        },
    }
});

export default connection;
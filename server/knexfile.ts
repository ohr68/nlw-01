import path from 'path';

module.exports = {
    client: 'mssql',
    connection: {
        server: 'OTAVIO',
        user: 'sa',
        password: 'Senha@123',
        database: 'NLWEcoleta',
        options: {
            instanceName: 'HELL'
        },
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
};
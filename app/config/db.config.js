module.exports = {
    HOST: 'ep-orange-forest-aiomizxz-pooler.c-4.us-east-1.aws.neon.tech',
    USER: 'neondb_owner',
    PASSWORD: 'npg_h5P2wXMAIBef',
    DB: 'neondb',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
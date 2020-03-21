db.auth('root', 'Aa123456')

db = db.getSiblingDB('mydb')

db.createUser({
    user: 'root',
    pwd: 'Aa123456',
    roles: [
        {
            role: 'root',
            db: 'mydb',
        },
    ],
});
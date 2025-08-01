const db = require('../connection')

const fetchUsers = () => {
    return db.query(`SELECT * FROM users`)
    .then(({rows: users}) => {
        return users
    })
}

module.exports = fetchUsers
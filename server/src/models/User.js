module.exports = (sequelize, Datatypes) => sequelize.define("User", {
    email: {
        type: Datatypes.STRING,
        unique: true
    },
    password: {
        type: Datatypes.STRING
    }
})
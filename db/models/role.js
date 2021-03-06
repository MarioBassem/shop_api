const {DataTypes} = require('sequelize');
const db = require('../connection');
const User = require('./user');

const Role = db.define('role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            len: {
                args: [1, 20],
                msg: 'Role title length must be within 1 and 20',
            }
        }
    }
});

Role.hasMany(User, {
    sourceKey: 'id',
    foreignKey: 'role_id',
    onDelete: 'SET DEFAULT',
    onUpdate: 'SET DEFAULT'
});

module.exports = Role;
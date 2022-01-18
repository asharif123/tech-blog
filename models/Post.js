const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model{}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: Datatypes.STRING
        },
        content: {
            type: Datatypes.TEXT
        },
        post_date: {
            type: Datatypes.DATE
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
          },
    },
        {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: "post",
          }
    
    )

module.exports = Post;
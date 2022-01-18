const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model{}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_title: {
            type: Datatypes.STRING
        },
        comment_content: {
            type: Datatypes.TEXT
        },
        comment_date: {
            type: Datatypes.DATE
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
          },

        post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'post',
            key: 'id'
        }
        },
    },
        {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: "comment",
          }
    
    )

    
module.exports = Comment;
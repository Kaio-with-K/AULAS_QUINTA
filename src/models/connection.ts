import mysql from 'mysql2/promise'
import {config} from 'dotenv'

config()

export const connection = mysql.createPool(
     {
          host: 'localhost', //process.env.HOST,
          user: 'root', //process.env.USER
          password: '5282', //process.env.PASSWORD
          database: 'tolist' //process.env.DATABASE
     }
)
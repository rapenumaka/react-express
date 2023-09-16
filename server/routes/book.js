const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = require('../config/db');
const connectionPool = require('../database/connection-pool');

connectionPool.init();


console.log(db.user, db.password);

/* GET users listing. */
router.get('/', function(req, res, next) {



    console.log("connected to mysql database");

    const book1 = {
      'author' : 'Harper Lee',
      'title' : 'To Kill a MockingBird',
      'published' : '1960-02-02',
      'sold' : 156245
    }
    

    const book2 = {
      'author' : 'George Orwell',
      'title' : '1984',
      'published' : '1949-08-12',
      'sold' : 18585
    }


    const book3 = {
      'author' : 'J.R.R. Tolkien',
      'title' : 'The Hobbit',
      'published' : '1937-03-07',
      'sold' : 158522
    }

    const book4 = {
      'author' : 'J.D. Salinger',
      'title' : 'The Catcher in the Rye',
      'published' : '1951-04-17',
      'sold' : 185825
    }

    connectionPool.getPool().query('insert into books set ?', book4, (err, result) =>{
      if(err) throw err
      console.log(result);
    });
    
    




  res.send('Book book book :)');

});

module.exports = router;
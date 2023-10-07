const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'sql720.main-hosting.eu',
    user: 'u289680877_fpauli',
    password: 'Minha$3nh@',
    database: 'u289680877_movies_control'
})

// Connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

module.exports = Connection;

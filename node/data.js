const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const { Pool } = require('pg');
const cors = require('cors')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost', 
  database: 'reactdb', 
  password: '123456', 
  port: 5432, 
});

app.use(express.json());
app.use(cors({
  origin:"*"
}))

app.post('/api/storedata', (req, res) => {
  const { firstName, lastName, email } = req.body;
console.log(req.body)
  pool.query(
    'INSERT INTO filedata (firstname, lastname, email) VALUES ($1, $2, $3)',
    [firstName, lastName, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send('Data added to the database');
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/node", (req, res) => {
  res.send("welcome");
});


















// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5000;
// const { Pool } = require('pg');


// const pool = new Pool({
//   user: 'prasan.shivarapu@gmail.com',
//   host: 'localhost',
//   database: 'your_database',
//   password: '123456',
//   port: 5432,
// });

// app.use(express.json());


// app.post('http://localhost:5000/api/storedata', (req, res) => {
//   const { firstName, lastName, email } = req.body;
// console.log(req.body)

//   // pool.query(
//   //   'INSERT INTO your_table_name (first_name, last_name, email) VALUES ($1, $2, $3)',
//   //   [firstName, lastName, email],
//   //   (error, results) => {
//   //     if (error) {
//   //       throw error;
//   //     }
//   //     res.status(201).send('Data added to the database');
//   //   }
//   // );
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// app.get("/node", (req,res)=> {
//   res.send("welcome")
// })

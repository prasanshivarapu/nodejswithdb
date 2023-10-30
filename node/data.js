const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const { Pool } = require('pg');
const cors = require('cors')
const jwt = require('jsonwebtoken');

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
let a 
let b  
app.post('/storedata', (req, res) => {
  const { firstName, lastName, email ,password} = req.body;
console.log(req.body)
  pool.query(
    'INSERT INTO filedata (firstname, lastname, email,password) VALUES ($1, $2, $3,$4)',
    [firstName, lastName, email,password],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send('Data added to the database');
    }
  );
});


app.post('/employedata', (req, res) => {
  const { firstname, lastname, email, disignation, ssn, dob, state, town, gender, address} = req.body;
  const jwtToken = req.headers.authorization
  const token = jwtToken.replace('Bearer ', '');
  jwt.verify(token, 'jt', (error, decoded) => {
    if (error) {
      return res.status(401).json({ error: 'JWT token is invalid or expired' });
    }
    console.log('Decoded JWT payload:', decoded,a,b);
  })
  console.log(jwtToken) 
  pool.query(
    'INSERT INTO employee (firstname, lastname, email, disignation, ssn, dob, state, town, gender, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
    [firstname, lastname, email, disignation, ssn, dob, state, town, gender, address],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send('Data added to the database');
    }
  );
});



app.get('/getdata',(req,res)=>{
  const query = 'SELECT * FROM filedata'
  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
   
    res.status(200).json(results.rows);
  });
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;

  pool.query(
    'SELECT * FROM filedata WHERE email = $1 AND password = $2',
    [email, password],
    (error, results) => {
      if (error) {
        throw error;
      }

      if (results.rows.length === 0) {
        res.status(401).json({ message: ' Invalid email or password.' });
      } else {
        
        const user = results.rows[0];
        a =  user.firstname
        b=  user.email
        const token = jwt.sign({firstName:user.firstname,  email: user.email }, 'jt');
console.log(token)
        res.status(200).json({ message: 'Login successful', token: token });
      }
    }
  );
});




// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   pool.query(
//     'SELECT * FROM filedata WHERE email = $1 AND password = $2',
//     [email, password],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }

//       if (results.rows.length === 0) {
//         res.status(401).json({ message: 'Login failed. Invalid email or password.' });
//       } else {
//         res.status(200).json({ message: 'Login successful' });
//       }
//     }
//   );
// });


app.listen(port,  () => {
  console.log(`Server is running on port ${port}`);
});

// app.get("/node", (req, res) => {
//   res.send("welcome");
// });


















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

import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import db from './db/db-connection.js';

//routes from db
import studentsRouter from "./routes/students.js"
import contactRouter from "./routes/contact.js"
import joinedListRouter from "./routes/joinedlist.js"


const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.use('/students', studentsRouter);
app.use('/contact', contactRouter);
app.use('/joinedList', joinedListRouter);

// creates an endpoint for the route /api
app.get('/', (req, res) => {
  res.json({ message: 'student contact list' });
});

// // create the get request for students
// app.get('/api/students', cors(), async (req, res) => {
//   try {
//     const { rows: students } = await db.query('SELECT * FROM students');
//     res.send(students);
//   } catch (e) {
//     return res.status(400).json({ e });
//   }
// });

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

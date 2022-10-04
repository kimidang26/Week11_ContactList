import express from "express";
import db from "../db/db-connection.js";
const router = express.Router();

// **********GET REQUEST*******************

router.get('/', async (req, res) => {
    try {
      const joinedList = await db.query('SELECT student.id, student.first_name, student.last_name, contact.parentfirst_name, contact.parentlast_name, contact.cell_phone FROM student JOIN contact ON student.id=contact.student_id');
      res.send(joinedList);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });



export default router;
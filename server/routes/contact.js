import express from "express";
import db from "../db/db-connection.js";
const router = express.Router();

// **********GET REQUEST*******************

router.get('/', async (req, res) => {
    try {
      const contact = await db.query('SELECT * FROM contact ORDER BY id');
      res.send(contact);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });


  // ***********************create the POST request (update)****************************
  router.post('/', async (req, res) => {
    const newContact = {
      id: req.body.id,
      parentfirst_name: req.body.parentfirst_name,
      parentlast_name: req.body.parentlast_name,
      cell_phone: req.body.cell_phone,
      email: req.body.email,
 
  
    }
    console.log([newContact.parentfirst_name, newContact.parentlast_name, newContact.cell_phone, newContact.email ]);
    try {
    const updateContact = await db.query(
      'INSERT INTO contact(parentfirst_name, parentlast_name, cell_phone, email) VALUES($1, $2, $3, $4) RETURNING *',
      [ newContact.parentfirst_name, newContact.parentlast_name , newContact.cell_phone, newContact.email ],
    );
    console.log(req.body);
    res.json(updateContact);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });



export default router;
const router = require('express').Router();
const Message = require("../../models/Message")

router.post('/', (req, res) => {
    const messageToPost = new Message({ 
      name: req.body.name,
      email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
    
    }); 
    messageToPost.save() 
      .then(item => 
        res.json(item)) 
  })

const router = require('express').Router();
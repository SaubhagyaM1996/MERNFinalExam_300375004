const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://riligalak:quiz2@cluster0.uzxptk7.mongodb.net/BookStorage";

mongoose.connect(uri, { useNewUrlParser: true}
);
    const connection = mongoose.connection;
    connection.once('open', () => {
    console.log("Mongoose connected successfully!");
})

//---CRUD Operations---
let Book = require('./models/bookmodel');

//get all
app.get('/', (req, res) => {
    Book.find()
      .then((record) => res.json(record))
      .catch((err) => res.status(500).json("Error: " + err));
});


//get by id
app.get('/:id', (req, res) => {
    Book.findById(req.params.id)
      .then((record) => res.json(record))
      .catch((err) => res.status(500).json("Error: " + err));
});

app.post('/', (req, res) => {
  
    title = req.body.title;
    author = req.body.author;
    description = req.body.description;
  
    const record = new Book({
      title,
      author,
      description
    });
  
    record
      .save()
      .then(() => res.send(record))
      .catch((err) => res.status(500).json("Error: " + err));
});

app.put("/:id", (req, res) => {
  
    Book.findById(req.params.id)
      .then((books) => {
        books.title = req.body.title;
        books.author = req.body.author;
        books.description = req.body.description;
  
        books
          .save()
          .then(() => res.json("Book updated!"))
          .catch((err) => res.status(500).json("Error: " + err));
      })
      .catch((err) => res.status(500).json("Error: " + err));
});

app.delete("/:id",(req, res) => {
    Book.findByIdAndDelete(req.params.id)
      .then(() => res.json("Book deleted."))
      .catch((err) => res.status(500).json("Error: " + err));
  });



app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
  });
  

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    })
  });


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
import React, { useState } from 'react';
import axios from 'axios';

export default function CreateBook() {
  const [title, setOnChangeTitle] = useState(``);
  const [author, setOnChangeAuthor] = useState(``);
  const [description, setOnChangeDecription] = useState(``);


  const onSubmit = (e) => {
    e.preventDefault();

    let book = {title: title , author: author, description: description};
    // const url = "https://mern-test2-api.vercel.app/"
    const url = "http://localhost:5000/";
    axios
      .post(url, book)
      .then((res) => {
        window.location = '/';
      });
  };

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br /><a className="btn btn-info float-left" href="/">Show BooK List</a>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">Create new book</p>
            <form  onSubmit={onSubmit} noValidate="">
              
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  value={title}
                  spellCheck="false"
                  data-ms-editor="true"
                  onChange={(e) => setOnChangeTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={author}
                  spellCheck="false"
                  data-ms-editor="true"
                  onChange={(e) => setOnChangeAuthor(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={description}
                  spellCheck="false"
                  data-ms-editor="true"
                  onChange={(e) => setOnChangeDecription(e.target.value)}
                />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

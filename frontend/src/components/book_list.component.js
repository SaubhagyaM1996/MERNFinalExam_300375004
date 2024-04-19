import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Book = (props) => (
  <div className="card-container">
    <img
      src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
      alt="Books"
      height="200"
    />
    <div className="desc">
      <h2>
        <Link to="/create" className="nav-link">
          {props.title}
        </Link>
      </h2>
      <di>
        {props.count}
      </di>
      <h3>{props.author}</h3>
      <div className="bttomline">
        <p>{props.description}</p>
      <input
        type="button"
        value="X"
        onClick={() => {
          props.deleteBook(props.keyt);
        }}
      />
      </div>
    </div>
  </div>
);

export default function BooksList() {
  const [books, setBookList] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000";
    // const url = "https://mern-test2-api.vercel.app/"
    console.log("url : ", url);
    axios
      .get(url)
      .then((response) => {
        setBookList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteBook = (id) => {
    const url = "http://localhost:5000";
    // const url = "https://mern-test2-api.vercel.app"
    axios.delete(url + "/" + id).then((response) => {
      //console.log(response.data);
      setBookList(books.filter((el) => el._id !== id));
    });

   
  };

  return (
    <div className='BookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
            <div className='countdiv'>4</div>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create'
              className='btn btn-info float-right'
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className="list">
        {books.map((book) => {
          return (
            <Book
              title={book.title}
              author={book.author}
              description={book.description}
              key={book._id}
              keyt={book._id}
              deleteBook={deleteBook}

            />
          );
        })}
      </div>
      </div>
    </div>
  );
}

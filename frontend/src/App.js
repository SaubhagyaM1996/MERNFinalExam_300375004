import './styles.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import BooksList from "./components/book_list.component";
import CreateBook from "./components/create_book.compenent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BooksList />} exact />
        <Route path="/create" element={<CreateBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



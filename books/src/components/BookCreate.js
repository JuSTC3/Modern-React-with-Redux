import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookCreate() {
    const [title, setTitle] = useState('');
    const { createBook } = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    };

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={onSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Create</button>
            </form>
        </div>
    );
}

export default BookCreate;
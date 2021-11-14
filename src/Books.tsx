import React, {useState, useEffect, useReducer } from 'react'
import axios from 'axios';
import {BookList} from './components/BooksList';
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';

const initialState = {

}
const ejReducer = (state: any, action: any) => {
    return state;
}

const Books = (props: any) => {
    const [books, setBooks] = useState<Array<BookList>>([]);
    const [listState, dispatchState] = useReducer(ejReducer, [])
    console.log(useLocation);
    console.log(useParams);
    
    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get(
                `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=hnlwaKq3JgG8kFoP8ltAlrmSKAIi4ADH`
            )
            setBooks(res.data.results.books);
            console.log(res.data.results.books);
        }
        fetchBooks();
    }, [])

    const getEspecificBok = (id: number) => {

    }

    const incrementarLikes = (title: string, cantidad: number) => {

    }
    const decrementarLikes = (title: string, cantidad: number) => {
        
    }
    return (
        <div>
            <h1 className="font-bold text-center text-4xl py-10">Ranking de los 15 mejores libros</h1>
            <section className="grid grid-cols-1 gap-10 px-5 text-center">
                {books.map((book: BookList) => {
                    const {
                        author, 
                        book_image, 
                        buy_links, 
                        description, 
                        price, 
                        primary_isbn10, 
                        publisher, 
                        rank, 
                        title
                    } = book;

                    return (
                        <article key={rank}>
                            <div>
                                <img src={book_image} alt={title}
                                className="block mx-auto"
                                />
                            </div>

                            <h3 
                                className="font-bold mt-2">{title}</h3>
                            <p>{description}</p>
                            <p>{author}</p>
                        
                        <ul className="mb-4">
                            <li>Publicado por: {publisher}</li>
                        </ul>
                 
                            <Link to={`/books/${title}`} onClick={() => console.log("btn a libro")}> Ver más</Link>
             
                        <br />
                        {/* <button onClick={() => incrementarLikes(title)}>+1</button>
                        <button onClick={() => decrementarLikes(title)}>-1</button> */}
                        </article>
                    )
                })}
            </section>
        </div>
    )
}

export default Books;

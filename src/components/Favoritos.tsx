import React, {useState, useEffect, useReducer } from 'react'
import axios from 'axios';
import {BookList} from './BooksList';
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';

import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerTypes } from '../redux/BookReducer';
import { State } from '../redux/initialState';


const Favoritos = (props: any) => {
    const [books, setBooks] = useState<Array<BookList>>([]);
    const dispatch = useDispatch();
    
    const appStore = useSelector((state: State) => state.favorites);
    console.log(appStore);

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get(
                `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=hnlwaKq3JgG8kFoP8ltAlrmSKAIi4ADH`
            )
            setBooks(res.data.results.books);
            //dispatchState({type: "set_list", payload: res.data});
            console.log(res.data.results.books);
        }
        fetchBooks();
    }, [])

    const getEspecificBok = (id: number) => {

    }

    const addFav = (title: string) => {
        console.log(title);
        dispatch({type: ReducerTypes.ADD, payload: title});
    
    }
    const removeFav = (title: string) => {
        console.log(title);
        dispatch({type: ReducerTypes.BORRAR, payload: title});
    
    }
    return (
        <div>
            <h1 className="font-bold text-center text-4xl py-10">Favoritos</h1>
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
                        title,
                        likes,
                        dislikes
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
                         {appStore.findIndex((book: BookList) => title === title) === -1 ?
                            <Button
                            onClick={() => addFav(title)}
                         >Favoritos</Button>
                         :
                         <Button
                            onClick={() => removeFav(title)}
                         >sacar de FAvoritos</Button>
                        }
                        </article>
                    )
                })}
            </section>
        </div>
    )
}

export default Favoritos;

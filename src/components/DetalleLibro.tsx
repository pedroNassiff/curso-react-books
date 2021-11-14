import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { BookList } from './BooksList';


export const DetalleLibro = (book: BookList) => {
    console.log(useLocation);
    console.log(useParams);
    const { title, description }: {title: string | undefined, description: string | undefined} = useParams();
    const [state, setState] = useState({});

    return (
        <div>
            <h1>titulo: {title}</h1>
            <p>Descripcion: {description}</p>
     {/*        <p>{author}</p> */}
        </div>
    )
}

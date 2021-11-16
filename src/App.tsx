import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Register} from './auth/register';
import Login from './auth/login';
import Favoritos from './components/Favoritos';
import {DetalleLibro} from './components/DetalleLibro';
import {VotaLibro} from './components/VotaLibro';

import React, { useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import  Books from "./Books";
import { UserContext } from './context/UserContext'
import LoginContext from './context/LoginContext'
import LogoutContext from './context/LogoutContext'
import {AuthProvider} from "./auth/index.js";
import PrivateRoute from "./auth/PrivateRoute.js";
const useStyles = makeStyles({
  container: {
    padding: '20px',
  }
});


function DetalleLibroPage() {
  // Get the userId param from the URL.
  let { bookId } = useParams();
  // ...
}

const App = () => {
  const classes = useStyles();
  const [user, setUser] = useState({})
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <UserContext.Provider value={{user, setUser}}>
        <Navbar />
      <Routes>
          <Route path='/' element={<Books/>} />
          <Route path='/favoritos' element={<Favoritos/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/registrarse' element={<Register/>} />
          <PrivateRoute path='/votar' component={<VotaLibro author={''} book_image={''} buy_links={''} description={''} price={0} primary_isbn10={''} publisher={''} rank={0} title={''} likes={0} dislikes={0} />} />
          <Route path='/books/:title' element={<DetalleLibro author={''} book_image={''} buy_links={''} description={''} price={0} primary_isbn10={''} publisher={''} rank={0} title={''} likes={0} dislikes={0}/>} />
        </Routes>  
        </UserContext.Provider>
     
      </Router>
      </AuthProvider>
    </div>
  );
}
export default App;

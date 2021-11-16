import React, { useState } from 'react'
import { withRouter } from "react-router-dom";
import { Button, Checkbox, Form, Input } from 'antd';
import { auth } from 'firebase';
import { Link, useNavigate } from 'react-router-dom';
import firebaseConfig from "../firebase/FirebaseConfig";
import { Card, CardBody, CardHeader, Col, Container, FormGroup, Row } from 'reactstrap';

const Login = () => {
    const [autenticating, setAutenticating] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');
    const [error, setError] = useState<string>('');

    const navigate = useNavigate();

    const signInWithEmailAndPassword = () => {
        if (error !== '') setError('');

        setAutenticating(true);

        auth().signInWithEmailAndPassword(email, password) 
        .then(result => {
            console.log(result);
            navigate('/votar');
        }).catch(error => {
            console.log(error);
            setAutenticating(false);
        })
    }

    return (
       <div>
           <h1>Login</h1>
           <Container className='m-1 text-center'>
            <Row>
                <Col 
                    xs={{ size: 10, offset: 1 }} 
                    sm={{ size: 8, offset: 2 }} 
                    md={{ size: 6, offset: 3 }} 
                    lg={{ size: 4, offset: 4 }}
                >
                    <Card className='mt-5'>
                        <CardHeader className="bg-primary text-white">
                            Registro
                        </CardHeader>
                        <CardBody>
                        <FormGroup>
                <Input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                />
            </FormGroup>
            <FormGroup>
                <Input 
                    autoComplete="new-password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                />
            </FormGroup>
            <Button
                disabled={autenticating}
                color="success"
                block
                onClick={() => signInWithEmailAndPassword()}
            >
                Sign Up
            </Button>
            <small>
                <p className='m-1 text-center'>¿No tenés cuenta? <Link to="/registrarse">Registrate.</Link></p>
            </small>
            
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
       </div>
    )
}

export default Login;
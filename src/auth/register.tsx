import { Button, Checkbox, Form, Input } from 'antd';
import { auth } from 'firebase';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { Card, CardBody, CardHeader, Col, Container, FormGroup, Row } from 'reactstrap';
export const Register = () => {
    const [registering, setRegistering] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');
    const [error, setError] = useState<string>('');

    const navigate = useNavigate();

    const signUpWithEmailAndPassword = () => {
        if (password !== confirm) setError('Mirá que onda tu clave way');
        if (error !== '') setError('');

        setRegistering(true);

        auth().createUserWithEmailAndPassword(email, password)
        .then(result => {
            console.log(result);
            navigate('/login');
        }).catch(error => {
            console.log(error);
            setRegistering(false);
        })
    }


    return (
       <div>
           <h1>Registro</h1>
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
            <FormGroup>
                <Input 
                    autoComplete="new-password"
                    type="password"
                    name="confirm"
                    id="confirm"
                    placeholder="Confirm Password"
                    onChange={event => setConfirm(event.target.value)}
                    value={confirm}
                />
            </FormGroup>
            <Button
                disabled={registering}
                color="success"
                block
                onClick={() => signUpWithEmailAndPassword()}
            >
                Sign Up
            </Button>
            <small>
            <p className='m-1 text-center'>Ya tenés cuenta?<Link to="/login">Logueate.</Link></p>
            </small>
            <small className="text-danger">
            {error}
            </small>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
       </div>
    )
}
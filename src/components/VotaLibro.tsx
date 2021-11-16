import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { BookList } from './BooksList';
import { Card, CardBody, CardHeader, Col, Container, FormGroup, Row } from 'reactstrap';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Form, Input, Button, Checkbox, List } from 'antd';

import {db} from'../firebase/FirebaseConfig';

export const VotaLibro = (book: BookList) => {
    const [firebaseDocuments, setFirebaseDocuments] = useState<Array<any>>([]);

    useEffect(() => {
        getAll();
    }, [])

    const { title, description }: {title: string | undefined, description: string | undefined} = useParams();
    const [state, setState] = useState({});

    const onFinish = (values: any) => {
        console.log('Success:', values, title);
        values.finished = values.finished !== undefined ? values.finished : false;
        db.collection("pedidos").doc().set({values});
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

      const getAll = () => {
          return db.collection("pedidos").onSnapshot(querySnapshot => {
            const firebaseCollectionData : Array<any> = [];
            querySnapshot.forEach(firebaseDoc => {
                firebaseCollectionData.push({...firebaseDoc.data(), id: firebaseDoc.id});
            });
            setFirebaseDocuments(firebaseCollectionData);
          });
      };

    return (
        <div>
         
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
<br />

<h1>¿Cual es tu libro favorito?</h1>
            <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
        <Form.Item
            label="Libro"
            name="libro"
            rules={[{ required: true, message: 'Por favor ingresá el lugar donde te mandamos el libro!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Autor"
            name="autor"
            rules={[{ required: true, message: 'Por favor ingresá un telefono para comunicarnos con vos ' }]}
        >
            <Input />
        </Form.Item>


        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Guardar</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
            Enviar
            </Button>
        </Form.Item>
        </Form>
        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        <List 
        dataSource={firebaseDocuments}
        renderItem={(item) => 
            <List.Item>
                {JSON.stringify(item)}
            </List.Item>}>
        </List>
        </div>
    )
}

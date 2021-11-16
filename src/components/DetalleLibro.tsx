import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { BookList } from './BooksList';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Form, Input, Button, Checkbox, List } from 'antd';

import {db} from'../firebase/FirebaseConfig';

export const DetalleLibro = (book: BookList) => {
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
            <h1>titulo: {title}</h1>

            <br />

            <h1>COMPRAR</h1>
           
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
            label="Dirección"
            name="direccion"
            rules={[{ required: true, message: 'Por favor ingresá el lugar donde te mandamos el libro!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Tel"
            name="telefono"
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

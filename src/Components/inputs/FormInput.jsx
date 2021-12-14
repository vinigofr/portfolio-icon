import React from 'react';
import { Form, Button } from 'react-bootstrap';

const FormInput = function () {
  return (
    <Form>
      <Form.Group className="mb-2" controlId="formBasicText">
        <Form.Label>Nomeie o ícone</Form.Label>
        <Form.Control type="text" placeholder="Digite o conteúdo do ícone" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicText">
        <Form.Label>Digite o nome da ferramenta</Form.Label>
        <Form.Control type="text" placeholder="Digite o nome da ferramenta ou tecnologia" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicText">
        <Form.Label>Cor em hexadecimal da fonte</Form.Label>
        <Form.Control type="color" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicText">
        <Form.Label>Cor de fundo</Form.Label>
        <Form.Control type="color" placeholder="Digite o nome da ferramenta ou tecnologia" />
      </Form.Group>
      <Button variant="primary" type="button">
        Gerar ícone
      </Button>
    </Form>
  );
};

export default FormInput;

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./UserForm.css";

const UserForm = () => {

  return (
    <Form className='form'>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Escriba su nombre</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su nombre" />
        <Form.Text className="text-muted">
          Lo necesitaremos para entregarle correctamente el pedido.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="phone" placeholder="coloque su telefono, ej para BS AS (1145080365)" />
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su mail" />
        <Form.Text className="text-muted">
          No compartiremos sus datos, solo se usarán para procesar la compra.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Finalizar compra
      </Button>
    </Form>
  );
}

export default UserForm;
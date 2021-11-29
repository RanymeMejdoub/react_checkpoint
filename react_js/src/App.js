import {Navbar,Container,Form,Button} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
 <Navbar>
  <Container>
    <Navbar.Collapse className="justify-content-end">
     
    </Navbar.Collapse>
  </Container>
</Navbar>

<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

<div className="d-grid gap-2">
  <Button variant="primary" size="lg">
   Envoyer
  </Button>
  <Button variant="secondary" size="lg">
  Annuler
  </Button>
</div>

    </div>
  );
}

export default App;
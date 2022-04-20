import { Input, Form, FormGroup, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

export function FormEdit({ recipes }) {
  return (
    <Form>
      <h1>{recipes.title}</h1>
      <button display="flex" color="success">
        <Link to="/recipe/:slug/edit">Upravit</Link>
      </button>

      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="with a placeholder"
          type="email"
        />
      </FormGroup>
    </Form>
  );
}

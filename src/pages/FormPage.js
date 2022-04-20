import { useState, useEffect } from 'react/cjs/react.production.min';
import { Input, FormGroup, Label, Spinner, Alert } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
import { FormEdit } from '../components/FormEdit';

import { api } from '../api';

export function FormPage() {
  const { slug } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);

    api
      .get(`/recipes/${slug}`)
      .then((res) => setRecipes(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [slug]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert color="danger">Vyskytla se chyba při načítání dat</Alert>;
  }
  console.log(recipes);
  return (
    <FormEdit>
      <h1>{recipes.title}</h1>
      <button display="flex" color="success">
        <Link to="/recipe/:slug/edit">Upravit</Link>
      </button>

      <FormGroup>
        <Label for="Název receptu">Název</Label>
        <Input
          id="/recipes"
          name="email"
          placeholder="with a placeholder"
          type="email"
        />
      </FormGroup>
    </FormEdit>
  );
}

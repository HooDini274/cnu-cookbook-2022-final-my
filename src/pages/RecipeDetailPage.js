import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Spinner, Alert, Row, Col, List } from 'reactstrap';
import { getPrepTime } from '../components/TimerOfRecipe';

import { api } from '../api';

export function RecipeDetailPage() {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);

    api
      .get(`/recipes/${slug}`)
      .then((res) => setRecipe(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [slug]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert color="danger">Vyskytla se chyba při načítání dat</Alert>;
  }
  const prepTime = getPrepTime();

  return (
    <Container>
      <h1>{recipe.title}</h1>
      <button>
        <Link
          to="/recipe/:slug/edit"
          style={{ color: 'black', textDecoration: 'none' }}
        >
          Upravit
        </Link>
      </button>
      <button className="recipe_deletebutton">
        <Link
          to="/recipe/:slug/edit"
          style={{ color: 'black', textDecoration: 'none' }}
        >
          Vymazat
        </Link>
      </button>
      <Row>
        <Col lg={4}>
          <h5> {prepTime}</h5>
          <List type="unstyled">
            {recipe.ingredients?.map((ingredient) => (
              <li key={ingredient._id}>
                {ingredient.amount} {ingredient.amountUnit} - {ingredient.name}
              </li>
            ))}
          </List>
        </Col>
        <Col lg={8}>
          <p>{recipe.directions}</p>
        </Col>
      </Row>
    </Container>
  );
}

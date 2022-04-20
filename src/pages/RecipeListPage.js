import { useEffect, useState } from 'react';
import { Container, Spinner, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

import { api } from '../api';
import { SearchInput } from '../components/SearchInput';
import { RecipesList } from '../components/RecipesList';

export function RecipeListPage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [searchValue, setSearchValue] = useState('');

  const filterredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  useEffect(() => {
    setLoading(true);

    api
      .get('/recipes')
      .then((res) => setRecipes(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  console.log(recipes);
  return (
    <Container>
      <h1>Recepty</h1>
      <button>
        <Link
          to="/recipe/:slug/edit"
          style={{ color: 'black', textDecoration: 'none' }}
        >
          Nový recept
        </Link>
      </button>
      <SearchInput
        className="mb-4"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      {isLoading && <Spinner className="mb-4" />}
      {error && (
        <Alert color="danger">Vyskytla se chyba při načítání dat</Alert>
      )}
      <RecipesList recipes={filterredRecipes} />
    </Container>
  );
}

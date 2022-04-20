import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getPrepTime } from './TimerOfRecipe';

import placeholder from '../images/food-placeholder.png';

export function RecipeCard({ title, preparationTime, sidedish, slug }) {
  const prepTime = getPrepTime(preparationTime);
  return (
    <Link
      to={`/recipe/${slug}`}
      style={{ color: 'black', textDecoration: 'none' }}
    >
      <Card className="h-100">
        <Link to={`/recipe/${slug}`}>
          <CardImg src={placeholder} alt="Preview" top />
        </Link>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle>
            {prepTime} {sidedish}
          </CardSubtitle>
        </CardBody>
      </Card>
    </Link>
  );
}

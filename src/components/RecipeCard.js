import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

import placeholder from '../images/food-placeholder.png';

export function RecipeCard({ title, preparationTime, slug }) {
  return (
    <Card className="h-100">
      <Link to={`/recipe/${slug}`}>
        <CardImg src={placeholder} alt="Preview" top />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle>{Math.floor(preparationTime / 60)} h</CardSubtitle>
        </CardBody>
      </Link>
    </Card>
  );
}

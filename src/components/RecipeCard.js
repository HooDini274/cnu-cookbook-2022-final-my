import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

import placeholder from '../images/food-placeholder.png';

export function RecipeCard({ title, preparationTime, sidedish, slug }) {
  const hours = Math.floor(preparationTime / 60);
  const minutes = Math.floor(preparationTime % 60);
  const showMinutes = minutes !== 0;
  const showHours = hours !== 0;
  const preparationTimeInHours = `${hours} h`;
  const preparationTimeInMinutes = `${minutes} min`;

  const prepTime = `${showHours ? preparationTimeInHours : ''}  ${
    showMinutes ? preparationTimeInMinutes : ''
  }`;
  return (
    <Card className="h-100">
      <Link to={`/recipe/${slug}`}>
        <CardImg src={placeholder} alt="Preview" top />
      </Link>
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle>
          {prepTime}
          {sidedish}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
}

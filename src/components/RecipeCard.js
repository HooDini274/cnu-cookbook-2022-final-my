import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

import placeholder from '../images/food-placeholder.png';
//preparationTime is expected in minutes
export function RecipeCard({ title, preparationTime, sidedish, slug }) {
  const hours = Math.floor(preparationTime / 60);
  const minutes = Math.floor(preparationTime % 60);
  const showMinutes = minutes !== 0;
  //if (minutes == 0) {
  //  showMinutes = false;
  //}
  //else {
  //  showMinutes = true
  //};
  const showHours = hours !== 0;
  const preparationTimeInHours = `${hours} h`;
  const preparationTimeInMinutes = `${minutes} min`;
  //if showHours {preparationTimeInHours}
  //else {''}
  const prepTime = `${showHours ? preparationTimeInHours : ''}${
    showMinutes ? preparationTimeInMinutes : ''
  }`;
  //var desctription = '';
  //if (prepTime.length > 0) {
  //  desctription = prepTime;
  //} else {
  //  desctription = 'Hned';
  //}
  //for (var x of sidedish) {
  //  desctription += ' ' + x;
  //}
  //const d = desctription; // + typeof sidedish;

  //console.log(Object.entries(sidedish));

  return (
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
  );
}

export function getPrepTime(preparationTime) {
  var prepTime = 'Čas nezadán';
  if (typeof preparationTime !== 'undefined') {
    const hours = Math.floor(preparationTime / 60);
    const minutes = preparationTime % 60;
    const showMinutes = minutes !== 0;
    const showHours = hours !== 0;
    const preparationTimeInHours = `${hours} h`;
    const preparationTimeInMinutes = `${minutes} min`;
    prepTime = `${showHours ? preparationTimeInHours : ''} ${
      showMinutes ? preparationTimeInMinutes : ''
    } `;
  }
  return prepTime;
}

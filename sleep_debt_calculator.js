const getSleepHours = day => {
  day = day.toLowerCase();
  if (day === 'sunday') {
    return 8; //replace 8 with your sleep hours actual amount
  } else if (day === 'monday') {
      return 8; //same as above
  } else if (day === 'tuesday') {
      return 8; //same as above
  } else if (day === 'wednesday') {
      return 8; //same as above
  } else if (day === 'thursday') {
      return 8; //same as above
  } else if (day === 'friday') {
      return 8; //same as above
  } else if (day === 'saturday') {
      return 8; //same as above
  } else if (day === 'friday') {
      return 8; //same as above
  }
};

const getActualSleepHours = () => getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday');

const getIdealSleepHours = () => {
  const idealHours = 10; //insert your ideal daily sleep hours amount
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  let sleepHours = actualSleepHours - idealSleepHours;
  if (sleepHours === 0) {
    console.log('Lovely, you got the perfect amount of sleep!')
  } else if (sleepHours > 0) {
    console.log('Got ' + (sleepHours) + ' hour(s) more sleep than needed, you dormouse!')
  } else {
    sleepHours = Math.abs(sleepHours);
    console.log('Should get '+ (sleepHours) + ' hour(s) rest mate!')
  }
};

calculateSleepDebt();

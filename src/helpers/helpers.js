export const createArrayWithMinutes = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const array = createArrayWithMinutes(0, 540, 30);

const timeArray = [
  '8:00 ',
  '8:30 ',
  '9:00',
  '9:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
];

export const objWithTimeAndValues = array.reduce(
  (acc, el, i) => acc.concat({ time: timeArray[i], valueMinutes: el }),
  []
);

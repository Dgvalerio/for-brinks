import { differenceInDays, getDaysInMonth, sub } from 'date-fns';

const calcIG = (dum: string, data: string) => {
  const DUM = new Date(dum.split('/').reverse().join('-'));
  const DATA = new Date(data.split('/').reverse().join('-'));

  const dayDiff = differenceInDays(DATA, DUM);
  const weeks = Math.floor(dayDiff / 7);
  const days = dayDiff - weeks * 7;

  return `${weeks} semanas e ${days} dias`;
};

const calcDPP = (dum: string) => {
  const [day, month, year] = dum.split('/');

  let d = Number(day) + 7;
  let m = Number(month) > 4 ? Number(month) - 3 : Number(month) + 9;
  const y = Number(month) > 4 ? Number(year) + 1 : Number(year);

  const daysInMonth = getDaysInMonth(new Date(y, m - 1));

  if (d > daysInMonth) {
    m += 1;
    d = d - daysInMonth;
  }

  return `${('0' + d).slice(-2)}/${('0' + m).slice(-2)}/${y}`;
};

const q = (n: number, dum: string, date: string): void => {
  console.log(`
Q${n}:
  IG: ${calcIG(dum, date)}
  DPP: ${calcDPP(dum)}`);
};

const q11 = () => {
  const date = '22/07/2023';
  const usg = '03/03/2023';

  const igDate = sub(new Date(usg.split('/').reverse().join('-')), {
    weeks: 18,
  });

  const dum = igDate.toISOString().split('T')[0].split('-').reverse().join('/');

  q(11, dum, date);
};

const q12 = () => {
  const date = '22/07/2023';
  const usg = '02/05/2023';

  const igDate = sub(new Date(usg.split('/').reverse().join('-')), {
    weeks: 21,
    days: 6,
  });

  const dum = igDate.toISOString().split('T')[0].split('-').reverse().join('/');

  q(12, usg, date);
  q(12, dum, date);
};

const q13 = () => {
  const date = '03/06/2023';
  const dum = '27/03/2023';

  q(13, dum, date);

  const imc = 55 / (1.62 * 1.62);

  console.log(`  IMC: ${imc.toFixed(2)}`);
};

(() => {
  q(1, '22/07/2022', '14/03/2023'); // OK
  q(2, '12/10/2022', '15/01/2023'); // OK
  q(3, '31/10/2022', '01/04/2023'); // OK
  q(4, '27/10/2022', '10/02/2023'); // OK
  q(5, '23/05/2012', '14/09/2012'); // OK
  q(6, '23/03/2012', '10/06/2012'); // OK
  q(7, '08/02/2012', '22/04/2012'); // OK (Bissexto)
  q(8, '13/01/2023', '22/07/2023'); // OK
  q(9, '28/09/2022', '10/02/2023'); // OK
  q(10, '20/12/2022', '22/07/2023'); // OK
  q11();
  q12();
  q13();
})();

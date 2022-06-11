// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const createDate = (dates, i) => {
  const arr =[];
  let result;
  
  const xi = i && i == 0;
  
  if (xi){
    result = (Date.parse(dates[p]) / 1000);
    return result.toString();
  } 
  for (let j of dates){
    arr.push(Date.parse(j) / 1000);
  }
  result = arr.sort().join("-");
  return result;
}
// const createDate = (dates, i) => {
//   if (i != null){
//     const time = (Date.parse(dates[i]))/1000;
//     return time.toString();
//   }
//   else {
//     let arr =[];
//     for(let i of dates){
//       let time = (Date.parse(dates[i]))/1000;
//       arr.push(time);
//     }

//     const hasil = (date.sort()).join("-");
//     return date2;
//   }
// };


// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};

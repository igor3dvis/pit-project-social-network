// const date = new Date();
// const currentData = date.getDate();
// const currentMonth = date.getMonth();
// const currentYear = date.getFullYear();
// const currentHour = date.getHours();
// const currentMinutes = date.getMinutes();
// const currentSecundes = date.getSeconds();

// let consoleDate = () => {
//   console.log("date: " + date);
//   console.log("Year: " + currentYear);
//   console.log("Month: " + currentMonth);
//   console.log("Data: " + currentData);
//   console.log("Hour: " + currentHour);
//   console.log("Minutes: " + currentMinutes);
//   console.log("Secundes: " + currentSecundes);
// };

const unicId = () => {
   // let id = '';
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const currentData = date.getDate();
    const currentHour = date.getHours();
    const currentMinutes = date.getMinutes();
    const currentSecundes = date.getSeconds();
    return (
        // id = `${currentYear}`
        `${currentYear}${currentMonth}${currentData}-${currentHour}${currentMinutes}${currentSecundes}`
    )
}


export { unicId };

window.onload = function () {
  const today = new Date();
  let selectedDate = document.getElementById("datePick");

  let now = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  document.getElementById("today").innerHTML = now;

  selectedDate.addEventListener("change", function () {
    let setDate = new Date(selectedDate.value);
    calculateDate(today, setDate);
  });

  function calculateDate(today, setDate) {
    let resultDay = setDate - today;
    resultDay = parseInt(resultDay / 1000 / 60 / 60 / 24);
    resultDay = identity(resultDay);
    printDay(result);
  }

  function identity(resultDay) {
    resultDay = resultDay *  -1;
    printDay(resultDay);
 }

  function printDay(resultDay){
    const Day = document.getElementById("Day");
    let year, month, day;
    
    year = parseInt(resultDay/365);
    month = parseInt((resultDay-(year*365))/30);
    day = resultDay - (year*365) - (month*30);
    
    Day.innerText = `${year}년 ${month}개월 ${day}일`;
  }
};
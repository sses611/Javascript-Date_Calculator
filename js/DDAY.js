window.onload = function () {
  const today = new Date();
  let selectedDate = document.getElementById("datePick");

  let now =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  document.getElementById("today").innerHTML = now;

  selectedDate.addEventListener("change", function () {
    let setDate = new Date(selectedDate.value);
    calculateDate(today, setDate);
  });

  function calculateDate(today, setDate) {
    let resultDay = setDate - today;
    resultDay = parseInt(resultDay / 1000 / 60 / 60 / 24);
    identity(resultDay);
  }

  function identity(resultDay) {
    let Day = document.getElementById("Day");
    if (resultDay > 0) {
      resultDay = resultDay + 1;
      Day.innerHTML = "D - " + resultDay;
    } else if (resultDay < 0) {
      Day.innerText = "D + " + -1 * resultDay;
    } else {
      Day.innerText = resultDay;
    }
  }
};
// $(document).ready(function () {
//   const today = new Date();
//   let datePick = "";

//   let now = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
//   console.log(now);
//   $("#today").eq(0).text(now);

//   $("#datepicker2").change(function () {
//     datePick = new Date($("#datepicker2").val());
//     // alert(datePick);

//       let cal = datePick - today;

//       cal = parseInt(cal / 1000 / 60 / 60 / 24);
//       // cal = Math.abs(cal); // 양수로 변환

//       if (cal > 0) {
//         cal = cal + 1;
//         $(".dDay").eq(0).text('D - ' + cal);
//       } else if (cal < 0) {
//         $(".dDay").eq(0).text('D + ' + (-1 * cal));
//       } else {
//         $(".dDay").eq(0).text(0);
//       }
//     });
//   });

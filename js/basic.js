$(document).ready(function () {
  const today = new Date();
  let datePick = "";

  let now =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  $("#today").eq(0).text(now);

  $("#datepicker2").change(function () {
    datePick = new Date($("#datepicker2").val());
    // alert(datePick);

    $("button").click(function () {
      let cal = datePick - today;

      cal = parseInt(cal / 1000 / 60 / 60 / 24);
      // cal = Math.abs(cal); // 양수로 변환

      if (cal > 0) {
        cal = cal + 1;
        $(".dDay").eq(0).text(cal+"일");
      } else if (cal < 0) {
        alert(cal);
        $(".dDay").eq(0).text(cal+"일");
      } else {
        $(".dDay").eq(0).text(0+"일");
      }
    });
  });
});

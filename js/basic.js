$(document).ready(function () {
  const today = new Date();
  let datePick = "";

  let now = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  $("#today").eq(0).text(now);

  
  $("#datepicker22").change(function () {
    datePick = new Date($("#datepicker2").val());

    $("button").click(function () {
      let cal = datePick - today;

      // while (true) {
      //   if (cal != 0 && cal < 0) {
      //     alert("이미 지난 날짜로 디데이 계산을 할 수 없습니다.");
      //     break;
      //   } if(cal > 0) {
      //     cal = Math.abs(cal);
      //     cal = parseInt(cal / 1000 / 60 / 60 / 24) + 1;

      //     $(".dDay").eq(0).text(cal);
      //     break;
      //   }
        cal = parseInt(cal / 1000 / 60 / 60 / 24);
        // cal = Math.abs(cal); // 양수로 변환
       
       
      if ( cal > 0) {
        cal = cal + 1;
         $(".dDay").eq(0).text(cal);
      }else if(cal < 0){
        alert(cal);
        $(".dDay").eq(0).text(cal);
      }else{
        $(".dDay").eq(0).text(0);
      }

      
    });
  });
});

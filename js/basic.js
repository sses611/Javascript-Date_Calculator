  // window.addEventListener("load", function () {
  //   let date = new Date();

  //   let year = date.getFullYear();
  //   let month = date.getMonth() + 1;
  //   let day = date.getDate();

  //   let today = document.getElementById("today");
  //   today.innerText = year + " - " + month + " - " + day;

  //   // alert(PREMONTH);
  //   // // PREMONTH.addEventListener("click", showinfo);
  //   // // function showinfo() {
  //   // //   alert(PREMONTH.innerText);
  //   // // }
  // });

  let CDate = new Date();
  let today = new Date();

  buildCalendar();

  function buildCalendar() {
    let preLast = new Date(CDate.getFullYear(), CDate.getMonth(), 0); // 현재기준 이전 달
    let thisFirst = new Date(CDate.getFullYear(), CDate.getMonth(), 1); // 현재기준 이번달
    let thisLast = new Date(CDate.getFullYear(), CDate.getMonth()+1, 0);
    console.log(preLast);
    console.log(thisFirst);
    console.log(thisLast);

    let dates = [];
    if(thisFirst.getDay() == 0){ //
      for(let i=0; i<thisFirst.getDay(); i++){
        dates.unshift(thisFirst.getDate() - i);
        console.log(dates, i);
      }
    }for( let i=1; i<=thisLast.getDate(); i++){
      console.log(dates.push(i));
    }
  }


  // let PREMONTH = document.getElementById("preMonth");
  // let NEXTMONTH = document.getElementById("nextMonth");

  // PREMONTH.addEventListener("click", function () {
  //   alert(month--);
  // });

  // NEXTMONTH.addEventListener("click", function () {
  //   alert(month++);
  // });

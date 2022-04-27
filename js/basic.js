  // window.addEventListener("load", function () {
  //   let date = new Date();




  //   // alert(PREMONTH);
  //   // // PREMONTH.addEventListener("click", showinfo);
  //   // // function showinfo() {
  //   // //   alert(PREMONTH.innerText);
  //   // // }
  // });

  let CDate = new Date(); // 현재기준
  let today = new Date(); // 현재기준

  let year = CDate.getFullYear();
  let month = CDate.getMonth() + 1;
  let day = CDate.getDate();


  let now = document.getElementById("today").innerText = (year + " - " + month + " - " + day);
  buildCalendar(year, month);

function buildCalendar(year, month) {
  
  let prevLast = new Date( CDate.getFullYear(), CDate.getMonth(), 0); // 현재기준 이전 달 마지막 일
  let thisFirst = new Date( CDate.getFullYear(), CDate.getMonth()+ 1); // 현재기준 달 첫 일
  let thisLast = new Date( CDate.getFullYear(), CDate.getMonth()+1, 0); // 현재기준 달 마지막 일;
  
  let dates = []; // 해당 달 저장 배열
  if(thisFirst.getDay() != 0){   // 만약 이번 월의 첫째 날이 일요일이 아니라면 
    for(let i=0; i<thisFirst.getDay(); i++){ //일요일부터 이번 월의 요일까지 날짜를 구한다. 
      dates.unshift(prevLast.getDate() - i); // 이전 월의 마지낙 날짜부터 1씩 빼가며 배열 앞에 값을 넣는다.
    } 
  }
  for(let i = 1; i<=thisLast.getDate(); i++){ //thisLast.getDate(); : 30
    dates.push(i);
  }
  for(let i = 1; i<= 13 - thisLast.getDay(); i++){ // ?
    dates.push(i);
  }
  let htmlDates = ' ';
  for(let i=0; i<35; i++){
    if(today.getDate()==dates[i] && today.getMonth() == CDate.getMonth() && today.getFullYear() == CDate.getFullYear()){ 
      htmlDates += `<div class="date today">${dates[i]}</div>`; // 오늘 날짜 표기
    }
    else{
      htmlDates += `<div class="date">${dates[i]}</div>`;
    }

  }
  document.querySelector(".dates").innerHTML = htmlDates;

}
  
  function preMonth(){
    alert(CDate.setMonth(CDate.getMonth() -1));
    buildCalendar();
  }

  function nextMonth(){
    CDate.setMonth(CDate.getMonth() + 1);
    alert(CDate.setMonth(CDate.getMonth() + 1));
    buildCalendar();
  }

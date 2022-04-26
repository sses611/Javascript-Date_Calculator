$(document).ready(function () {
  $("body").css({ padding: "0", margin: "0" /* 화면 꽉차게*/ });
  $('button').css({ 'border' : 'none'});

  // $(".wrap").css({ "background-color": "#f00", "text-align": "center" });

  $(".calender").css({
    "background-color": "pink",
    "text-align": "center",
    "display" : "flex",
    "flex-direction": "column",
  });

  $(".daies").css({ "display": "flex", "flex-wrap": "wrap", "width": "100%", "justify-content": "space-around" });

  $(".dates").css({
    "background-color": "yellow",
    "flex-wrap" : 'wrap',
    "width": "100%",
    "display": "flex",
    "border" : "1px solid red",
  });

  // $(".dates", "day").css({"text-align": "center", "width": "(100%/7)",});

});

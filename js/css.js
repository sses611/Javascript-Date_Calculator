$(document).ready(function () {
  $("body").css({ padding: "0", margin: "0" /* 화면 꽉차게*/ });
  $("button").css({ "border": "none",
    "padding": "10px"
  });

  // $(".wrap").css({ "background-color": "#f00", "text-align": "center" });
  $(".header").css({"text-align" : "center"});

  $(".main").css({
    "background-color": "#fff",
    "text-align": "center",
    "display": "flex",
    "flex-direction": "column",
  });

  $(".week").css({
    "display": "flex",
    "flex-wrap": "wrap",
    "width": "100%",
    "justify-content": "space-around",
  });

  $(".dates").css({
    "display": "flex",
    "flex-wrap": "wrap",
    "width": "100%",
  });

  $(".date, .day").css({
    "text-align": "center",
    "width": "calc(100%/7)",
    "height": "100px",
    "padding": "16px 0 16px 0",
    "box-sizing": "border-box",
    "border" : "2px solid #e0e0e0",
    
  });
  
  $(".date:nth-child(7n), .day:nth-child(7n)").css({
    "color": "blue",
  });

  $(".date:nth-child(7n+1), .day:nth-child(7n+1)").css({
    "color": "#f00",
  });

  $(".today").css({ boder: "2px solid" });
});

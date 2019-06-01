setInterval(function () {
  let dateObj = new Date();

  let hh = dateObj.getHours();
  let mm = dateObj.getMinutes();
  let ss = dateObj.getSeconds();

  //by default, the time is in 24 hr format. convert to 12 hrs
  let amPm = "am";
  if (hh > 12) {
    hh = hh - 12;
    amPm = "pm";
  }

  /*
      if(hh<=9){
          hh = '0' + hh;
      }else{
          hh = hh;
      }
      */
  hh <= 9
    ? (hh = "0" + hh)
    : (hh = hh);
  mm <= 9
    ? (mm = "0" + mm)
    : (mm = mm);
  ss <= 9
    ? (ss = "0" + ss)
    : (ss = ss);

  let time = hh + " : " + mm + " : " + ss + " " + amPm;
  document.querySelector("#digital-clock").innerHTML = time;
}, 1000);
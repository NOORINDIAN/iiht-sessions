(function () {
  const monthDays = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ];

  const dateObj = new Date();
  const currentMonth = dateObj.getMonth();

  const currentMonthDays = monthDays[currentMonth];

  const currentDay = dateObj.getDay();

  const dateFirstThisMonthDay = new Date(dateObj.getFullYear(), dateObj.getMonth(), 1).getDay();

  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ];
  var calDivs = "";

  for (var j = 0; j < days.length; j++) {
    calDivs += "<div>" + days[j] + "</div>";
  }
  for (var i = 0; i <= currentMonthDays; i++) {
    if (i === 0) {
      var y = 1;
      while (y < dateFirstThisMonthDay) {
        calDivs += "<div></div>";
        y++;
      }
    }

    calDivs += "<div>" + i + "</div>";
  }
  document.querySelector("#calendar").innerHTML = calDivs;
})();
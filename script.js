function updateDateTime() {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const day = currentDate.getDay();
  const currentDay = dayNames[day];
  const currentUTCTime = currentDate.getTime();

  document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
    currentDay;
  document.querySelector('[data-testid="currentUTCTime"]').textContent =
    currentUTCTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);

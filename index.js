const formatDate = (basicTime) => {
  const seconds = basicTime % 60;
  const minutes = Math.floor(basicTime / 60) % 60;
  const hours = Math.floor(basicTime / 3600);

  let secondsResult = (seconds === 0) ? '' : `${seconds}s`;
  let minutesResult = (minutes === 0) ? '' : `${minutes}m `;
  let hoursResult = (hours === 0) ? '' : `${hours}h `;

  let result = (basicTime === undefined || basicTime === 0) ? `0s` : `${hoursResult}${minutesResult}${secondsResult}`;

  return result.trim();
};


module.exports = formatDate;

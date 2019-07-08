const formatDate = (timeInSeconds) => {
  const seconds = timeInSeconds % 60;
  const minutes = (timeInSeconds - seconds) / 60;
  const hours = (minutes - (minutes % 60)) / 60;

  if (timeInSeconds === undefined) {
    return `0s`;
  }
  else if ((timeInSeconds > 60) && (timeInSeconds < 3600) && (seconds !== 0)) {
    return `${minutes}m ${seconds}s`;
  }
  else if ((timeInSeconds > 60) && (timeInSeconds < 3600) && (seconds === 0)) {
    return `${minutes}m`;
  }
  else if ((timeInSeconds > 3600) && ((minutes % 60) !== 0) && (seconds !== 0)) {
    return `${hours}h ${minutes % 60}m ${seconds}s`;
  }
  else if ((timeInSeconds > 3600) && ((minutes % 60) !== 0) && (seconds === 0)) {
    return `${hours}h ${minutes % 60}m`;
  }
  else if ((timeInSeconds > 3600) && ((minutes % 60) === 0) && (seconds === 0)) {
    return `${hours}h`;
  }
  else if ((timeInSeconds > 3600) && ((minutes % 60) === 0) && (seconds !== 0)) {
    return `${hours}h ${seconds}s`;
  }
    return `${timeInSeconds}s`;
  }

module.exports = formatDate;

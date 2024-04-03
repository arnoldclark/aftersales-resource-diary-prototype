const formatTime = (time) => {
  return (Math.round(time * 100) / 100).toFixed(2);
}

export default formatTime;
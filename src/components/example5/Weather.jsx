const Weather = ({temp}) => {

  if (temp < 15) {
    return <div>
        外面很冷！
    </div>;
  } else if (temp >= 15 && temp <= 25) {
    return <div>外面温度合适！</div>;
  } else if (temp > 25) {
    return <div>外面很热</div>;
  }
};

export default Weather;
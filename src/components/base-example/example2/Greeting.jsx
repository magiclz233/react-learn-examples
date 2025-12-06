const Greeting = () => {
    const name = "张三";
    const date = new Date();
    const multiply = (a, b) => a + b;
      const specialClass = "simple-class";
    return <div>
        <h1>{name}</h1>
        <p>{date.getMonth()}, {date.getDate()}</p>
      {/* Rendering Expression */}
      <p>2 + 2 = {2 + 2}</p>
      {/* Rendering Variable Value */}
      <h1>{name}</h1>
      {/* Rendering Array */}
      <p>My Friends List: {["Alex", "John", "Waheed", "Jordan"]}</p>
      {/* Rendering Function Value */}
      <p>2 * 2 = {multiply(2, 2)}</p>
      {/* Rendering Class */}
      <p className={specialClass}>This is special class</p>
    </div>
}

export default Greeting;
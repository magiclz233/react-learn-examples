const OnClick = () => {
    return (
        <div>
            <Button/>
            <Copy/>
            <Move/>
        </div>
    );
};

const Button = () => {
    const handleClick = () => {
        console.log(Math.round(Math.random() * 100));
    }
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

const Copy = () => {
    function copyHandler() {
        console.log("Copy to clipboard");
    }
    return (
        <div>
            <p onCopy={copyHandler}>
                随便说一段中文
                复制这里的内容会触发事件
            </p>
        </div>
    );
}

const Move = () => {
    function moveHandler() {
        console.log("鼠标移动事件已触发");
    }
    return (
        <div>
            <p onMouseOver={moveHandler}>
                随便说一段中文
                鼠标移动到这里会触发事件
            </p>
        </div>
    );
}
export default OnClick;
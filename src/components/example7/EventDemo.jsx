import { useState } from 'react';

const EventDemo = () => {
    const [str, setStr] = useState("");
    const [str1, setStr1] = useState("");
    const [str2, setStr2] = useState("");
    const handleClick = () => {
        setStr(str + "按钮1被点击了 ");
    }
    return (
        <div>
            <button onClick={handleClick}>按钮1</button>
            <p>
                文字： {str}
            </p>
            <p onCopy={() => setStr1("复制了文字1111")}>
                文字1111： {str1}
            </p>
            <p onMouseOver={() => setStr2("鼠标移动到了文字1111")} onMouseOut={() => setStr2("")}>
                文字1111： {str2}
            </p>
        </div>
    );
};

export default EventDemo;
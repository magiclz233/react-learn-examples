const ValidPassWord = () => <div style={styles}> 密码有效 </div>
const InvalidPassWord = () => {
    return (
        <div>
            密码无效
        </div>
    );
}

const styles = {color: "white", backgroundColor: "teal", padding: "2rem"}
const PassWord = ({isValid}) => {
    return (
        <div>
            {isValid ? <ValidPassWord /> : <InvalidPassWord />}
        </div>
    );
};

export default PassWord;
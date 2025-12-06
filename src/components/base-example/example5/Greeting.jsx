import "./index.css";

const Greeting = (props) => {
    let timeOfDay = props.timeOfDay;
    return timeOfDay === "morning" ? (
        <div className="greeting">早上好！</div>
    ) : timeOfDay === "afternoon" ? (
        <div className="greeting">下午好！</div>
    ) : (
        <div className="greeting">晚上好！</div>
    )
};

export default Greeting;
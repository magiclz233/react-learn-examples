const User = () => {
    return <div>
        <OneUser
            img="https://avatars.githubusercontent.com/u/85052811?v=4"
            name="magic"
            age={18}
            isMarried={false}
            hobbies={["Coding", "Reading", "Sleeping"]}
        />
    </div>
}

const OneUser = (props) => {
    return <section>
        <img src={props.img} alt={props.name} width={200} />
        <h1>Name: {props.name}</h1>
        <h2>Age: {props.age}</h2>
        <h3>Is married: {props.isMarried}</h3>
        <h4>Hobbies: {props.hobbies} </h4>
    </section>
}

export default User;
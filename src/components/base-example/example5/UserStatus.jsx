const UserStatus = (props) => {
    if (props.loggedIn && props.isAdmin) {
        return <div>Welcome Admin</div>;
    } else if (props.loggedIn && !props.isAdmin) {
        return <div>Welcome User!</div>
    } else {
        return <div>Please Login!</div>
    }
};

export default UserStatus;
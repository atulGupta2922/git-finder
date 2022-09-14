import React from "react";
import UserItem from "./UserItem";

const Users = (props) => {
    return (
        <div className="container" style={userStyle}>
            {props.userData.map(user => (
                <UserItem userData={user} />
            ))}
        </div>
    )
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
}

export default Users;
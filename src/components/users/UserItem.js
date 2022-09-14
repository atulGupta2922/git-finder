import React from "react";

const UserItem = (props) => {
    const { login, id, avatar_url, html_url } = props.userData;
    return (
        <div className='card text-center' key={id} >
            <img src={avatar_url} className='round-img' style={{ width: '60px' }} alt='avatar' />
            <h3>{login}</h3>
            <div>
                <a className='btn btn-dark btn-sm my-1' href={html_url}>More</a>
            </div>
        </div>
    )
}
export default UserItem;

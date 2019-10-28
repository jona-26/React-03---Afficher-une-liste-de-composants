import React from 'react';
import "./Contact.css";

const Contact = ({ name, avatar, online }) => {
    return (
        <div className="Contact">
            <img className="avatar" src={avatar} />
            <div className="name status">
                <p>{name}</p>
                <p className="status-text">{online ? <span className=" status-online">

                </span> : <span className="status-offline">
                </span>} {online ? "online" : "offline"}</p>
            </div>

        </div>
    );
}

export default Contact;
import React from "react"
// import "./Message.css"

export const MessageCard = ({message, handleDeleteMessage}) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-sendername">
                </span></h3>
                <p>{message.senderName}</p>
                <h3>Body</h3>
                <h4>{message.title}</h4>
                <p>{message.message}</p>
                <button type="button" onClick={() => handleDeleteMessage(message.id)}>X</button>
            </div>
        </div>
    )
}
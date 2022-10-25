import React from "react";
import { MessengerChat } from "react-messenger-chat-plugin";

function MessengerChatDemo() {
    return (
        <MessengerChat
            pageId="100002209368394"
            language="en_US"
            themeColor={"#000"}
            bottomSpacing={500}
            loggedInGreeting="loggedInGreeting"
            loggedOutGreeting="loggedOutGreeting"
            greetingDialogDisplay={"show"}
            debugMode={true}
            onMessengerShow={() => {
                console.log("onMessengerShow");
            }}
            onMessengerHide={() => {
                console.log("onMessengerHide");
            }}
            onMessengerDialogShow={() => {
                console.log("onMessengerDialogShow");
            }}
            onMessengerDialogHide={() => {
                console.log("onMessengerDialogHide");
            }}
            onMessengerMounted={() => {
                console.log("onMessengerMounted");
            }}
            onMessengerLoad={() => {
                console.log("onMessengerLoad");
            }}
        />
    )
}

export default MessengerChatDemo
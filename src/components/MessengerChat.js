import React from "react";
import { MessengerChat } from "react-messenger-chat-plugin";

function MessengerChatDemo() {
    return (
        <MessengerChat
            pageId="102129152707425"
            language="en_US"
            bottomSpacing={50}
            loggedInGreeting="loggedInGreeting"
            loggedOutGreeting="loggedOutGreeting"
            greetingDialogDisplay={"hide"}
            debugMode={false}
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
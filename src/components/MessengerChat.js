import React from "react";
import { MessengerChat } from "react-messenger-chat-plugin";

function MessengerChatDemo() {
    return (
        <MessengerChat
            pageId="104636611547795"
            language="en_US"
            themeColor={"#000"}
            bottomSpacing={300}
            loggedInGreeting="loggedInGreeting"
            loggedOutGreeting="loggedOutGreeting"
            greetingDialogDisplay={"show"}
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
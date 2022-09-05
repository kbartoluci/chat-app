import "./ChatPage.styles.css";

import { useContext } from "react";
import { Messages } from "../../components/Messages";
import { MessageForm } from "../../components/MessageForm";
import { UserContext } from "../../contexts/UserContext";
import { Button } from "../../components/Button";

export function ChatPage(props) {
  const userContext = useContext(UserContext);

  if (!props.joinedRoom) {
    return (
      <div className="chat-page alert">
        Entering to the Pokemon World, please wait...
      </div>
    );
  }

  if (props.error !== null) {
    return (
      <div className="chat-page alert">Failed to connect to chat room.</div>
    );
  }

  return (
    <div className="chat-page">
      <div className="chat-page__header">
        <span className="chat-page__title">Poké Fan Chat</span>
        <Button
          className="chat-page__log-out"
          onClick={() => userContext.logOut()}
        >
          Log out
        </Button>
      </div>
      {props.user && <Messages messages={props.messages} user={props.user} />}
      <div className="chat-page__message-form-container">
        <MessageForm onSendMessage={props.onSendMessage} />
      </div>
    </div>
  );
}

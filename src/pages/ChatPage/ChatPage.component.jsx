import "./ChatPage.styles.css";

import { useContext } from "react";
import { Messages } from "../../components/Messages";
import { MessageForm } from "../../components/MessageForm";
import { UserContext } from "../../contexts/UserContext";
import { Button } from "../../components/Button";

export function ChatPage(props) {
  // if (props.error !== null) {
  //   return <div className="chat-page">Failed to connect to chat room.</div>;
  // }

  const userContext = useContext(UserContext);

  // useEffect(() => {
  //   if (!userContext.isLoggedIn()) {
  //     navigate("/");
  //   }
  // }, [navigate, userContext, userContext.isLoggedIn]);

  if (!props.joinedRoom) {
    return (
      <div className="chat-page">
        Entering to the Pokemon World, please wait...
      </div>
    );
  }

  return (
    <div className="chat-page">
      <div className="chat-page__title">Poké Fan Chat</div>
      <Button
        className="chat-page__log-out"
        onClick={() => userContext.logOut()}
      >
        Log out
      </Button>
      {props.user && <Messages messages={props.messages} user={props.user} />}
      <div className="chat-page__message-form">
        <MessageForm onSendMessage={props.onSendMessage} />
      </div>
    </div>
  );
}

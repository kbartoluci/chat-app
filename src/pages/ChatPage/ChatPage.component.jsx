import { Messages } from "../../components/Messages";
import { MessageForm } from "../../components/MessageForm";

export function ChatPage(props) {
  // if (props.error !== null) {
  //   return <div className="chat-page">Failed to connect to chat room.</div>;
  // }

  // if (!props.joinedRoom) {
  //   return <div className="chat-page">Joining room, please wait...</div>;
  // }

  return (
    <div className="chat-page">
      <div className="chat-page__title">Chat with friends</div>
      <Messages messages={props.messages} user={props.user} />
      <MessageForm onSendMessage={props.onSendMessage} />
    </div>
  );
}

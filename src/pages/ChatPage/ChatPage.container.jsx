import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ChatPage as Component } from "./ChatPage.component";

export function ChatPage() {
  const { user, drone } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [joinedRoom, setJoinedRoom] = useState(false);
  // const [messages, setMessages] = useState([{
  //   id: 11,
  //   text: 'hello',
  //   member: {
  //     id: 25,
  //     username: 'petar',
  //     userAvatarColor: 'red',
  //   }}]);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const room = drone.subscribe("observable-room");

    room.on("open", (error) => {
      if (error) {
        return setError(error);
      }
      setJoinedRoom(true);
    });

    room.on("message", (message) => {
      console.log("Message received", message);

      setMessages((messages) => [
        ...messages,
        {
          id: message.id,
          text: message.data,
          member: {
            id: message.member.id,
            username: message.member.clientData.username,
            avatarColor: message.member.clientData.userAvatarColor,
          },
        },
      ]);
    });
  }, [drone]);

  const onSendMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message,
    });
  };

  return (
    <Component
      messages={messages}
      user={user}
      onSendMessage={onSendMessage}
      error={error}
      joinedRoom={joinedRoom}
    />
  );
}

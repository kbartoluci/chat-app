import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { ChatPage as Component } from "./ChatPage.component";

export function ChatPage() {
  const { user, drone } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [joinedRoom, setJoinedRoom] = useState(false);
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  useEffect(() => {
    if (drone !== null && drone !== undefined) {
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
            time: new Date(message.timestamp * 1000).toLocaleString(),
            member: {
              id: message.member.id,
              username: message.member.clientData.username,
              profilePictureUrl: message.member.clientData.profilePictureUrl,
            },
          },
        ]);
      });
    }
  }, [drone]);

  useEffect(() => {
    if (!userContext.isLoggedIn()) {
      navigate("/");
    }
  }, [navigate, userContext, userContext.isLoggedIn]);

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

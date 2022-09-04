import "./Messages.styles.css";

export function Messages(props) {
  const { messages } = props;

  const renderMessage = (message) => {
    const { id, text, time, member } = message;
    const { user } = props;
    const messageFromUser = member.id === user.id;
    const className = messageFromUser
      ? "message-content currentMember"
      : "message-content";
    return (
      <li key={id} className="messages-list__li">
        <div className={className}>
          <span className="username">{member.username}</span>
          <span className="timestamp">{time}</span>
        </div>
        <div className={className}>
          <img
            src={member.profilePictureUrl}
            alt="profile_picture"
          />
          <div className="text">{text}</div>
        </div>
      </li>
    );
  };

  return (
    <ul className="messages-list">{messages.map((m) => renderMessage(m))}</ul>
  );
}

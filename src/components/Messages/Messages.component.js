import "./Messages.styles.css";

export function Messages(props) {
  const { messages } = props;

  const renderMessage = (message) => {
    const { id, text, member } = message;
    const { user } = props;
    const messageFromUser = member.id === user.id;
    const className = messageFromUser
      ? "Messages-message currentMember"
      : "Messages-message";
    return (
      <li key={id} className={className}>
        <span
          className="avatar"
          style={{ backgroundColor: member.userAvatarColor }}
        />
        <div className="Message-content">
          <div className="username">{member.username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  };

  return (
    <ul className="Messages-list">
      {messages.map((m) => renderMessage(m))}
    </ul>
  );
}
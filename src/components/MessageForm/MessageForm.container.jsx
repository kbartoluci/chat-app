import { useState } from "react";
import { MessageForm as Component } from "./MessageForm.component";

export function MessageForm(props) {
  const [messageContent, setMessageContent] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setMessageContent(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSendMessage(messageContent);
    setMessageContent('');
  };

  return (
    <Component
      onSubmit={handleSubmit}
      onChange={handleChange}
      messageContent={messageContent}
    />
  );
}

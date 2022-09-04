import "./MessageForm.styles.css"

import { Input } from "../Input";
import { Button } from "../Button";

export function MessageForm(props) {
  return (
    <form className="message-form" onSubmit={props.onSubmit}>
      <Input
        type="text"
        name="message"
        placeholder="Type a new message"
        onChange={props.onChange}
        value={props.messageContent}
        autoComplete="off"
        className="message-form__input"
      />
      <Button type="submit">Send</Button>
    </form>
  );
}

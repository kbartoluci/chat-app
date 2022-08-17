import { Input } from "../Input";
import { Button } from "../Button";

export function MessageForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <Input
        type="text"
        name="message"
        placeholder="Type a new message"
        onChange={props.onChange}
        value={props.messageContent}
      />
      <Button type="submit">Send</Button>
    </form>
  );
}

import { Button } from "../Button";
import { Input } from "../Input";

export function LoginForm(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Enter a username"
          onChange={props.onChangeUsername}
        />
        <Input
          type="text"
          name="pokemon_name"
          placeholder="Enter pokemon name to get avatar"
          onChange={props.onChangePokemonName}
        />
        <Button type="submit">Log in</Button>
      </form>
    </div>
  );
}

import "./LoginForm.styles.css";

import { Button } from "../Button";
import { Input } from "../Input";

export function LoginForm(props) {
  return (
    <div className="login-form-background">
      <div className="login-form-container">
        {props.profilePictureUrl != null &&
        props.profilePictureUrl != undefined ? (
          <img
            className="profile-picture"
            src={props.profilePictureUrl}
            alt="pokemon profile picture"
          />
        ) : (
          <img
            className="profile-picture"
            src={require("../../assets/images/whos_that_pokemon.png")}
            alt="Who's that pokemon?"
          />
        )}
        <form onSubmit={props.onSubmit}>
          <div className="login-form-input">
            <Input
              type="text"
              name="pokemon_name"
              placeholder="Enter pokemon"
              onChange={props.onChangePokemonName}
            />
          </div>
          <div className="login-form-input">
            <Input
              type="text"
              name="username"
              placeholder="Enter a nickname"
              onChange={props.onChangeUsername}
            />
          </div>
          <Button type="submit">Go</Button>
        </form>
      </div>
    </div>
  );
}

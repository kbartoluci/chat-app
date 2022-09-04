import "./LoginForm.styles.css";

import { Button } from "../Button";
import { Input } from "../Input";

export function LoginForm(props) {
  return (
    <div className="login-form-background">
      {/* <div className="chat-page__title">Poké Fan Chat</div> */}
      <div className="login-form-container">
        {props.profilePictureUrl !== null &&
        props.profilePictureUrl !== undefined ? (
          <img
            className="profile-picture"
            src={props.profilePictureUrl}
            alt="pokemon profile"
          />
        ) : (
          <img
            className="profile-picture"
            src={require("../../assets/images/whos_that_pokemon.png")}
            alt="Who's that pokémon?"
          />
        )}
        <form onSubmit={props.onSubmit}>
          <div className="login-form-input">
            <Input
              type="text"
              name="pokemon_name"
              placeholder="Enter Pokémon"
              onChange={props.onChangePokemonName}
            />
          </div>
          <div className="error-message">{props.pokemonError}</div>
          <br />
          <div className="login-form-input">
            <Input
              type="text"
              name="username"
              placeholder="Enter nickname"
              onChange={props.onChangeUsername}
            />
          </div>
          <div className="error-message">{props.usernameError}</div>
          <br />
          <Button type="submit">Go</Button>
        </form>
      </div>
    </div>
  );
}

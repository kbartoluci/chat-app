import "./LoginForm.styles.css";

import { Button } from "../Button";
import { Input } from "../Input";

export function LoginForm(props) {
  return (
    <div className="login-form__container">
      {props.profilePictureUrl !== null &&
      props.profilePictureUrl !== undefined ? (
        <img
          className="login-form__profile-picture"
          src={props.profilePictureUrl}
          alt="pokemon_profile_picure"
        />
      ) : (
        <img
          className="login-form__profile-picture"
          src={require("../../assets/images/whos_that_pokemon.png")}
          alt="Who's that pokémon?"
        />
      )}
      <form className="login-form" onSubmit={props.onSubmit}>
        <Input
          type="text"
          name="pokemon_name"
          placeholder="Enter Pokémon"
          onChange={props.onChangePokemonName}
        />
        <div className="login-form__error-message">{props.pokemonError}</div>
        <br />
        <Input
          type="text"
          name="username"
          placeholder="Enter nickname"
          onChange={props.onChangeUsername}
        />
        <div className="login-form__error-message">{props.usernameError}</div>
        <br />
        <Button type="submit">Go</Button>
      </form>
    </div>
  );
}

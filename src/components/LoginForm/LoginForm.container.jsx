import { useContext, useState, useEffect } from "react";
import { LoginForm as Component } from "./LoginForm.component";
import { UserContext } from "../../contexts/UserContext";

export function LoginForm(props) {
  const userContext = useContext(UserContext);
  const [username, setUsername] = useState(null);
  const [pokemonName, setPokemonName] = useState(null);
  const [profilePictureUrl, setprofilePictureUrl] = useState(null);
  const [pokemonError, setPokemonError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (pokemonName !== null && pokemonName !== undefined) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => {
          console.log(response);
          if (response.ok) {
            setPokemonError("");
            return response.json();
          }
        })
        .then((json) => {
          //console.log(json);
          setprofilePictureUrl(json.sprites.front_default);
        })
        .catch((error) => setError(error));
    } else {
      // setUserInfo(null);
      // setUserRepositories(null);
    }
  }, [pokemonName]);

  // if (error !== null) {
  //   return <div>Error</div>;
  // }

  // if (userInfo === null) {
  //   return <div></div>;
  // }

  const handleChangeUsername = (event) => {
    const value = event.target.value;
    setUsername(value);
    setUsernameError("");
  };

  const handleChangePokemonName = (event) => {
    const value = event.target.value.toLowerCase();
    setPokemonName(value);
    setPokemonError("");
    setprofilePictureUrl(null);
  };

  const handleSubmit = (event) => {
    let nameAndPokemonEntered = false;
    let hasProfile = false;

    event.preventDefault();

    if (
      (pokemonName === undefined ||
        pokemonName === null ||
        pokemonName === "") &&
      (username === undefined || username === null || username === "")
    ) {
      setPokemonError("Please enter a Pokémon!");
      setUsernameError("Please enter a username!");
    } else if (
      pokemonName === undefined ||
      pokemonName === null ||
      pokemonName === ""
    ) {
      setPokemonError("Please enter a Pokémon!");
    } else if (username === undefined || username === null || username === "") {
      setUsernameError("Please enter a username!");
    } else {
      nameAndPokemonEntered = true;
    }

    if (
      pokemonName !== undefined &&
      pokemonName !== null &&
      pokemonName !== "" &&
      (profilePictureUrl === undefined || profilePictureUrl === null)
    ) {
      setPokemonError("Couldn't find the Pokémon, please enter a new one!");
    } else {
      hasProfile = true;
    }

    if (nameAndPokemonEntered && hasProfile) {
      userContext.logIn(username, profilePictureUrl);
    }
  };

  return (
    <Component
      onSubmit={handleSubmit}
      onChangeUsername={handleChangeUsername}
      onChangePokemonName={handleChangePokemonName}
      profilePictureUrl={profilePictureUrl}
      pokemonError={pokemonError}
      usernameError={usernameError}
    />
  );
}

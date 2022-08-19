import { useContext, useState, useEffect } from "react";
import { LoginForm as Component } from "./LoginForm.component";
import { UserContext } from "../../contexts/UserContext";

export function LoginForm(props) {
  const userContext = useContext(UserContext);
  const [username, setUsername] = useState(null);
  const [pokemonName, setPokemonName] = useState(null);
  const [profilePictureUrl, setprofilePictureUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (pokemonName !== null && pokemonName !== undefined) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
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
  };

  const handleChangePokemonName = (event) => {
    const value = event.target.value;
    setPokemonName(value);
    setprofilePictureUrl(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    userContext.logIn(username, profilePictureUrl);
  };

  return (
    <Component
      onSubmit={handleSubmit}
      onChangeUsername={handleChangeUsername}
      onChangePokemonName={handleChangePokemonName}
      profilePictureUrl={profilePictureUrl}
    />
  );
}

import { useContext, useState } from "react";
import { LoginForm as Component } from "./LoginForm.component";
import { UserContext } from "../../contexts/UserContext";

export function LoginForm(props) {
  const userContext = useContext(UserContext);
  const [username, setUsername] = useState(null);

  const handleChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    userContext.logIn(username);
  };

  return <Component onSubmit={handleSubmit} onChange={handleChange} />;
}
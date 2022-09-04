import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  const [user, setUser] = useState(null);
  const [drone, setDrone] = useState(null);

  const logIn = (username, profilePictureUrl) => {
    const drone = new window.Scaledrone("V2fekSOXB8TIBD1f", {
      data: { username, profilePictureUrl },
    });
    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      setDrone(drone);
      setUser({
        id: drone.clientId,
        username: username,
        profilePictureUrl: profilePictureUrl,
      });
    });
  };

  const logOut = () => {
    setUser(null);
    drone.close();
    setDrone(null);
  };
  const isLoggedIn = () => user !== null;

  const value = {
    user,
    drone,
    logIn,
    logOut,
    isLoggedIn,
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}

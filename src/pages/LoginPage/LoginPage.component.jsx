import "./LoginPage.styles.css";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm";
import { UserContext } from "../../contexts/UserContext";

export function LoginPage() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  useEffect(() => {
    if (userContext.isLoggedIn()) {
      navigate("/chatPage");
    }
  }, [navigate, userContext, userContext.isLoggedIn]);

  return (
    <div className="login-page">
      <div className="login-page__title">Poké Fan Chat</div>
      <LoginForm />
    </div>
  );
}

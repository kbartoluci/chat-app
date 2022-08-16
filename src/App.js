import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { ChatPage } from "./pages/ChatPage";

export function App() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="chatPage" element={<ChatPage />} />
    </Routes>
  );
}

import "./App.css";
import { AuthProvider } from "./components/authentication/AuthContext";
import LoginForm from "./components/authentication/LoginForm";
import ProtectedPage from "./components/authentication/ProtectedPage";

function App() {
  return (
    <AuthProvider>
      <LoginForm />
      <ProtectedPage />
    </AuthProvider>
  );
}

export default App;

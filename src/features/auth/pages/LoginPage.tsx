import { useAuth } from "hooks/useAuth";

const LoginPage = () => {
  const { handleLogin } = useAuth();

  return (
    <div>
      <button onClick={handleLogin} type="button">
        Log in
      </button>
    </div>
  );
};

export default LoginPage;

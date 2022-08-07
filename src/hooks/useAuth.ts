import { useAppDispatch, useAppSelector } from "app/hooks";
import { login } from "features/auth/authSlice";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(login({ username: "", password: "" }));
  };

  return {
    handleLogin,
  };
};

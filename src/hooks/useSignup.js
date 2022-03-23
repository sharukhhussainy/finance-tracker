import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (!res) {
        throw Error("Could not complete signup");
      }

      // We can't create user directly with displayname so after user
      // creation update the user profile and update the display name.

      await res.user.updateProfile({ displayName });

      dispatch({ type: "SIGN_UP", payload: res.user });
      if (!isCancelled) {
        setError(null);
        setIsPending(false);
        console.log(res.user);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
        console.log(err.message);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return {
    signup,
    error,
    isPending,
  };
};

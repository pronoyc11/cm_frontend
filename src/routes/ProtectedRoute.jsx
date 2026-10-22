import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getToken } from "../utils/auth";
import { getMe } from "../services/auth.api";

export default function ProtectedRoute({ children }) {
  const token = getToken();
  const getInitialState = () => {
    if (!token) return false;
    return null; // Needs async verification
  };
  const [isValid, setIsValid] = useState(getInitialState());

  useEffect(() => {

    if (!token) return;

    let isCancelled = false;
    // Verify token is valid
   getMe()
      .then(() => {
        if (!isCancelled) setIsValid(true);
      })
      .catch(() => {
        if (!isCancelled) setIsValid(false);
      });

    // 3. Cleanup to prevent state updates on unmounted components
    return () => {
      isCancelled = true;
    };
  }, [token]);

  if (isValid === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!isValid) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

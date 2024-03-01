"use client";

import { Button } from "@/components/ui/button";
import { FaDiscord } from "react-icons/fa";

const Login = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:3001/api/auth/discord";
  };

  return (
    <div className="">
      <Button
        variant="ghost"
        size="lg"
        className="py-1.5 px-4 flex items-center border border-black border-opacity-25 dark:border-white dark:border-opacity-25  justify-between "
        onClick={handleLogin}
      >
        <FaDiscord size="30" color="#7289DA" className="mr-2" />
        <span>Login with Discord</span>
      </Button>
    </div>
  );
};

export default Login;

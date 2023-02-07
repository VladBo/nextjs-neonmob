"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/Button";

export const SignInButton = () => {
  return <Button onClick={() => signIn()}>Login</Button>;
};

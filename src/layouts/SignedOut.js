import React from "react";
import { Button, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function SignedOut() {
  return (
    <div>
        <Button inverted color="red" as={NavLink} to="/signup">
          Sign Up
        </Button>
        <Button color="red" as={NavLink} to="/login">
          Log In
        </Button>
    </div>
  );
}

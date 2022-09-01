import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Label, Icon, Segment } from "semantic-ui-react";

export default function LogIn() {
  return (
    <div className="loginpage">
      <div className="loginForm">
        <form>
          <h1>Log In</h1>
          <Label size="large" className="loginLabel">Email</Label>
              <input class="loginInput"
              placeholder="Enter your email"
              />
          <Label size="large" className="loginLabel">Password</Label>
              <input class="loginInput"
              placeholder="Enter your password"
              />
          <button type="submit" class="loginButton">
                Log In
              </button>
              <h3>Don't have an account?</h3>
              <Button inverted color="red" as={NavLink} to="/signup">Register</Button>
        </form>
      </div>
    </div>
  );
}

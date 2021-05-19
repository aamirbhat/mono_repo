import React from "react";
import Button from "@material-ui/core/Button";

export default Button = ({ label }) => (
  <Button variant="text" color="default">
    {label}
  </Button>
);

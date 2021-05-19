import React from "react";
import Button from "@material-ui/core/Button";

const CusButton = ({ label }) => (
  <Button variant="text" color="default">
    {label}
  </Button>
);

export default CusButton;

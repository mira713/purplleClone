import React from "react";
import { Grid } from "@chakra-ui/react";
import { ABSOLUTE, CENTER, FILL_PARENT, FIXED, WHITE } from "../constants/typography";
import "./Loading.css"; // Import the CSS file for loading animation styles

export default function Loading() {
  return (
    <Grid
      placeItems={CENTER}
      bg={WHITE}
      w={FILL_PARENT}
      h={"100vh"}
    >
      <div className="loading-container">
        <div className="circle"></div>
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>
        <div className="dot dot4"></div>
      </div>
    </Grid>
  );
}
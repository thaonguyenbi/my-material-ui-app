import * as React from "react";
import { Typography, LinearProgress } from "@mui/material";

export default function Progress() {
  return (
    <div style={{ position: "relative" }}>
      <LinearProgress
        value={60}
        variant="determinate"
        sx={{ minHeight: "30px", borderRadius: "5px" }}
      ></LinearProgress>
      <Typography
        sx={{
          position: "absolute",
          color: "white",
          top: 0,
          left: "5%",
        }}
      >
        Đã bán 600sp
      </Typography>
    </div>
  );
}

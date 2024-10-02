import * as React from "react";
import Rating from "@mui/material/Rating";
import { Stack, useMediaQuery } from "@mui/material";

export default function ProductRating() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      {isMobile && (
        <Stack
          direction="column"
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>Đánh giá: 1 lượt</p>
          <Rating name="simple-controlled" value={4} />
        </Stack>
      )}
      {!isMobile && (
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>Đánh giá: 1 lượt</p>
          <Rating name="simple-controlled" value={4} />
        </Stack>
      )}
    </div>
  );
}

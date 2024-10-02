import * as React from "react";
import { Badge } from "@mui/material";
import DiscountIcon from '@mui/icons-material/Discount';

export default function DiscountBadge() {
  return (
    <Badge badgeContent="10%" color="primary">
        <DiscountIcon sx={{color: "red"}}/>
    </Badge>
  );
}

import * as React from "react";
import {
  Stack,
  styled,
  createTheme,
  Paper,
  Box,
  Typography,
  Card,
  Button,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f26f33",
    },
    secondary: {
      main: "#005f69",
    },
  },
  typography: {
    color: "white",
    backgroundColor: "#f26f33",
    padding: "20px",
    fontWeightBold: "bold",
    borderRadius: "5px",
    textShadow: "1px 1px green",
    margin: "20px 0",
  },
  button: {
    color: "white",
    backgroundColor: "#f26f33",
    padding: "20px",
    borderRadius: "5px",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#F6F7A8",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  border: "1px solid #005f69",
  borderRadius: "5px",
  textAlign: "center",
  margin: "10px 0",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Discount() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Item>
        <Box sx={{ width: "100%" }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{xs: 2, sm: 2, md: 5}}
            sx={{
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <img
              width="750px"
              height="auto"
              src="https://tiki.vn/blog/wp-content/uploads/2023/09/thumb-discount-la-gi.jpg"
              alt="km.png"
            ></img>
            {isMobile && (
              <Stack
                direction="column"
                spacing={2}
                sx={{
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Typography variant="h3">Giảm 10%</Typography>
                <p>Đơn tối thiểu 200.000d</p>
                <p>Có hiệu lực từ 30/10/2024 - 9/11/2024</p>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Button sx={theme.button}>Xóa</Button>
                  <Button sx={theme.button}>Sửa</Button>
                </Stack>
              </Stack>
            )}
            {!isMobile && (
              <Stack
              direction="column"
              spacing={2}
              sx={{
                justifyContent: "space-around",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h3">Giảm 10%</Typography>
              <p>Đơn tối thiểu 200.000d</p>
              <p>Có hiệu lực từ 30/10/2024 - 9/11/2024</p>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Button sx={theme.button}>Xóa</Button>
                <Button sx={theme.button}>Sửa</Button>
              </Stack>
            </Stack>
            )}
          </Stack>
        </Box>
      </Item>
    </div>
  );
}

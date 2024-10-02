import React from "react";
import { Typography, Stack, Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import styled from "@emotion/styled/macro";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f26f33",
    },
    secondary: {
      main: "#005f69",
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function PersonalInfoCard() {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        spacing={4}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          margin: "50px",
        }}
      >
        <Typography
          variant="h4"
          bgcolor={theme.palette.primary.main}
          sx={{
            color: "white",
            padding: "20px",
            borderRadius: "5px",
            textShadow: "2px 2px green",
            textWrap: "nowrap",
          }}
        >
          THÔNG TIN CÁ NHÂN
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/65/65581.png"
            alt="Avatar"
            width="30%"
            height="auto"
          />
          <Stack
            spacing={2}
            sx={{
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            <Typography align="left">Mã AD: AD1 </Typography>
            <Typography align="left">Họ và tên: Võ Thị Bích Ngọc </Typography>
            <Typography align="left">Giới tính: Nữ</Typography>
            <Typography align="left">Email: admin1@gmail.com </Typography>
            <Typography align="left">Mật khẩu: ***** </Typography>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

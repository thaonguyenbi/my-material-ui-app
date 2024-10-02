import * as React from "react";
import {
  Box,
  Paper,
  Stack,
  Typography,
  experimentalStyled as styled,
  createTheme,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ThemeProvider } from "@emotion/react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

//import components nè
import Progress from "./Progress";
import ProductRating from "./Rating";
import ProductButton from "./ProductButton";
import DiscountBadge from "./DiscountBadge";

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

export default function Product() {
  return (
    <ThemeProvider theme={theme}>
      <ProductButton />

      <Stack
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography textTransform={"uppercase"} sx={theme.typography}>
          Sách
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Array.from(Array(3)).map((_, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <Item>
                  <Box sx={{ width: "100%" }}>
                    <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
                      <img
                        width="100%"
                        height="auto"
                        src="https://megaweb.vn/blog/uploads/images/anybook-la-gi-su-khac-nhau-giau-any-book-va-any-books.jpg"
                        alt="sp.png"
                      ></img>
                      <h2>Sách Toán cao cấp</h2>

                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                        sx={{
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Stack
                          spacing={{ xs: 1, sm: 2, md: 4 }}
                          sx={{
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <p>Mã SP: SP1</p>
                          <p>Mã Loại: L1</p>
                        </Stack>

                        <Stack
                          direction={{ xs: "column", sm: "row" }}
                          spacing={{ xs: 1, sm: 2, md: 4 }}
                        >
                          <h3 style={{ color: "red" }}>60.000d</h3>
                          <Button>
                            <RemoveCircleIcon
                              sx={{
                                color: "green",
                                alignSelf: { xs: "center" },
                              }}
                            />
                          </Button>
                        </Stack>
                      </Stack>

                      <Progress />

                      <ProductRating />
                    </Stack>
                  </Box>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </ThemeProvider>
  );
}

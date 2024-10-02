import React from "react";
import { Button, ThemeProvider, createTheme, Paper, Stack, styled} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  flexGrow: 1,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

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

function ProductButton() {
  const buttonStyles = {
    backgroundColor: "#f26f33",
    color: "white",
    border: "1px solid white",
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="contained" color="primary" sx={buttonStyles}>
            <AddCircleIcon />
          </Button>
          <Button variant="contained" color="primary" sx={buttonStyles}>
            <EditIcon />
          </Button>
        </Stack>

        <Button>
          <AddCircleIcon
            textAlign="center"
            sx={{
              backgroundColor: "#F6F7A8",
              width: "100px",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #005f69",
              borderRadius: "3px",
            }}
          />
        </Button>
      </Stack>
    </ThemeProvider>
  );
}

export default ProductButton;

import * as React from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

//import components nè
import Product from "./SanPham/Product";
import Discount from "./KhuyenMai/Discount";

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function CenteredTabs(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyles = {
    backgroundColor: "#f26f33",
    color: "white",
    border: "1px solid white",
    borderRadius: "5px",
    padding: "10px",
    margin: "auto",
    maxWidth: "20%",
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
      color: '#005f69' // Add hover effect
    },
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: '#005f69', // Customize indicator color
          }, margin: "10px"
        }}>
          <Tab label="Thống Kê" {...a11yProps(0)} sx={tabStyles} />
          <Tab label="Sản Phẩm" {...a11yProps(1)} sx={tabStyles} />
          <Tab label="Khuyến Mãi" {...a11yProps(2)} sx={tabStyles} />
          <Tab label="Thành Viên" {...a11yProps(3)} sx={tabStyles} />
        </Tabs>

        <TabPanel value={value} index={0} dir={theme.direction}>
          Dashboard ở đây
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Product/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Discount/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Thành viên ở đây
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
}

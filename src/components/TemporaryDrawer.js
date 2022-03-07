import * as React from "react";
import {
  Box,
  Drawer,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// css
import "../App.css";

const anchor = "left";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "About", "How it works", "Get Started", "Past programs"].map(
          (text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <List>
        {["Help", "Rules", "Terms"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='random'>
      <AppBar position="static" sx = {{width: 'auto', height: '100vh'}}>
        <Toolbar variant="dense" sx={{  marginRight: 'auto', flexDirection: "column" }}>
          <IconButton
            edge="start"
            aria-label="menu"
            sx={{ mr: 0 }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ writingMode: "sideways-lr", transform: "rotate(-90deg", justifyContent: 'center' }}
          >
            Google Summer of Code
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        sx={{ width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            marginLeft: 10,
            boxSizing: 'border-box'}}}
      >
        {list(anchor)}
      </Drawer>
      <div>
        Find me
      </div>
    </div>
  );
}

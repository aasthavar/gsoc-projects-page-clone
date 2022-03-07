import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function SideBar() {
    const [text, setText] = React.useState('Google Summer of Code');

    const handleClick = () => {
        setText('GSOC 2022');
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }} onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div">
                    {text}
                </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default SideBar;
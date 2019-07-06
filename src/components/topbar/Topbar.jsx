import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = {
    navbar:{
        marginBottom: '1em'
    },
    title: {
        flexGrow: 1,
        textOverflow: 'ellipsis'
    }
}

export default class Topbar extends Component {

    state = {
        open: false
    }

    openMenu = (e) => {
        this.setState({ open: true });
    }

    closeMenu = (e) => {
        this.setState({ open: false });
    }

    render(){
        const { title, auth } = this.props;
        const { open } = this.state;
        return (<>
            <AppBar position="static" style={styles.navbar}>
                <Toolbar>
                    <Typography variant="h6" style={styles.title}>
                        {title}
                    </Typography>
                {auth && (
                    <div>
                    <IconButton
                        aria-label="Account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={this.openMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={open}
                        onClose={this.closeMenu}
                    >
                        <MenuItem onClick={this.closeMenu}>Profile</MenuItem>
                        <MenuItem onClick={this.closeMenu}>My account</MenuItem>
                    </Menu>
                    </div>
                )}
                </Toolbar>
            </AppBar>
        </>);
    }
}











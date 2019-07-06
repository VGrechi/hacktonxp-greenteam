import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ArrowBack from '@material-ui/icons/ArrowBack';

const styles = {
    navbar:{
        marginBottom: '1em',
        color: 'white'
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

    // handleBackArrow = () => {
    //     this.props.history.pop();
    // }

    render(){
        const { title, auth, back } = this.props;
        const { open } = this.state;
        return (<>
            <AppBar position="static" style={styles.navbar}>
                <Toolbar>
                    {/* {back && <ArrowBack onClick={this.handleBackArrow} />} */}
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
                        <MenuItem onClick={this.closeMenu}>Perfil</MenuItem>
                        <MenuItem onClick={this.closeMenu}>Minha Conta</MenuItem>
                    </Menu>
                    </div>
                )}
                </Toolbar>
            </AppBar>
        </>);
    }
}











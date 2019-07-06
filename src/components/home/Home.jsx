import React, { Component } from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Feed from '../feed/Feed';
import Learning from '../learning/Learning';
import Simulator from '../simulator/Simulator';

import './Home.css';

const styles = {
    content: {
      marginBottom: '56px'  
    },
    tabbar: {
        position: 'fixed',
        bottom: 0,
        width: '100%'
    }
}

export default class Home extends Component {

    state = { 
        position: 1
    };

    handleChange = (e, newValue) => {
        this.setState({ position: newValue });
    }

    render(){
        const { position } = this.state;
        return (<>
            <div style={styles.content}>
            {position === 0 && <Feed></Feed>}
            {position === 1 && <Learning></Learning>}
            {position === 2 && <Simulator></Simulator>}
            </div>
            <BottomNavigation
            value={position}
            onChange={this.handleChange}
            style={styles.tabbar}
            >
                <BottomNavigationAction label="Feed" showLabel />
                <BottomNavigationAction label="Learning" showLabel />
                <BottomNavigationAction label="Simulator" showLabel />
            </BottomNavigation>
            
        </>);
    }
}
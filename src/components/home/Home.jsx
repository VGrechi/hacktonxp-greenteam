import React, { Component } from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Feed from '../feed/Feed';
import Learning from '../learning/Learning';
import Simulator from '../simulator/Simulator';

import './Home.css';

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
            {position === 0 && <Feed></Feed>}
            {position === 1 && <Learning></Learning>}
            {position === 2 && <Simulator></Simulator>}
            <BottomNavigation
            value={position}
            onChange={this.handleChange}
            style={{ position: 'fixed', bottom: 0, width: '100%'}}
            >
                <BottomNavigationAction label="Feed" showLabel />
                <BottomNavigationAction label="Learning" showLabel />
                <BottomNavigationAction label="Simulator" showLabel />
            </BottomNavigation>
            
        </>);
    }
}
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Feed from '../feed/Feed';
import Learning from '../learning/Learning';
import Simulator from '../simulator/Simulator';

const styles = {
    content: {
      marginBottom: '56px'  
    },
    tabbar: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        display: 'flex',
        backgroundColor: '#ddd',
        color: 'white'
    },
    tab: {
        flewGrow: 1
    }
}

export class Home extends Component {

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
            showLabels
            style={styles.tabbar}>
                <BottomNavigationAction label="Notícias" style={styles.tab} />
                <BottomNavigationAction label="Aprendizado" style={styles.tab} />
                <BottomNavigationAction label="Simulado" style={styles.tab} />
            </BottomNavigation>
        </>);
    }
}

export default withRouter(Home);
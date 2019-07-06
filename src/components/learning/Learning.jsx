import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, CardContent, LinearProgress, Typography, CardActions, Button } from '@material-ui/core';

import Topbar from '../topbar/Topbar';

const trails = [{
    trailId: 1,
    title: 'Noções Básicas de Economia',
    progress: 100
},{
    trailId: 2,
    title: 'Poupança',
    progress: 75
},{
    trailId: 3,
    title: 'Previdência Privada',
    progress: 0
},{
    trailId: 4,
    title: 'Tesouro Direto',
    progress: 0
},{
    trailId: 5,
    title: 'Títulos de Renda Fixa',
    progress: 0
},{
    trailId: 6,
    title: 'Fundos de Renda Fixa',
    progress: 0
},{
    trailId: 7,
    title: 'Fundos Multimercado',
    progress: 0
},{
    trailId: 8,
    title: 'Fundos de Ações',
    progress: 0
},{
    trailId: 9,
    title: 'Fundos Imobiliários',
    progress: 0
},{
    trailId: 10,
    title: 'Fundos de Previdência Privada',
    progress: 0
},{
    trailId: 11,
    title: 'Ações',
    progress: 0
},{
    trailId: 12,
    title: 'Mercado Futuro',
    progress: 0
},{
    trailId: 13,
    title: 'Derivativos',
    progress: 0
}]

const styles = {
    card: {
        marginBottom: '1em'
    },
    cardTitle: {
        textOverflow: 'ellipsis'
    },
    actions: {
        display: 'flex', 
        justifyContent: 'flex-end'
    }
}

export class Learning extends Component {

    handleLabel = (progress) => {
        switch(progress){
            case 100: return 'Revisar';
            case 0: return 'Iniciar';
            default: return 'Continuar';
        }
    }

    selectTrail = (trailId) => {
        this.props.history.push(`/trail/${trailId}`);
    }

    render(){
        return (<>
            <Topbar title="Learning" auth></Topbar>
            <Container fluid>
                <Row>
                    {trails.map(t => {
                        return <Col key={t.trailId} lg={{ span: 3 }} md={{ span: 4 }} sm={{ span: 12 }} style={styles.card}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h2" style={styles.cardTitle}>{t.title}</Typography>
                                    <LinearProgress variant="determinate"
                                        color="secondary"
                                        value={t.progress}/>
                                </CardContent>
                                <CardActions style={styles.actions}>
                                    <Button size="small" 
                                        onClick={() => this.selectTrail(t.trailId)}
                                        disabled={t.progress === 0}>
                                        {this.handleLabel(t.progress)}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Col>
                    })}
                </Row>
            </Container>
        </>);
    }
}

export default withRouter(Learning);
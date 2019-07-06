import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, CardContent, LinearProgress, Typography, CardActions, Button } from '@material-ui/core';

import Topbar from '../topbar/Topbar';

const trails = [{
    trailId: 1,
    title: 'Noções Básicas de Economia',
    progress: 100,
    courses: [{
        courseId: 1,
        title: 'O que é um Investimento?',
        progress: 100
    },{
        courseId: 2,
        title: 'Juros Compostos',
        progress: 100
    },{
        courseId: 3,
        title: 'O porquê de se preocupar com a inflação',
        progress: 100
    },{
        courseId: 4,
        title: 'Taxa Selic',
        progress: 85
    },{
        courseId: 5,
        title: 'IPCA',
        progress: 0
    },{
        courseId: 6,
        title: 'FGC (Fundo Garantidor de Crédito)',
        progress: 0
    }]
},{
    trailId: 2,
    title: 'Poupança',
    progress: 75,
    courses: []
},{
    trailId: 3,
    title: 'Previdência Privada',
    progress: 0,
    courses: []
},{
    trailId: 4,
    title: 'Tesouro Direto',
    progress: 0,
    courses: []
},{
    trailId: 5,
    title: 'Títulos de Renda Fixa',
    progress: 0,
    courses: []
},{
    trailId: 6,
    title: 'Fundos de Renda Fixa',
    progress: 0,
    courses: []
},{
    trailId: 7,
    title: 'Fundos Multimercado',
    progress: 0,
    courses: []
},{
    trailId: 8,
    title: 'Fundos de Ações',
    progress: 0,
    courses: []
},{
    trailId: 9,
    title: 'Fundos Imobiliários',
    progress: 0,
    courses: []
},{
    trailId: 10,
    title: 'Fundos de Previdência Privada',
    progress: 0,
    courses: []
},{
    trailId: 11,
    title: 'Ações',
    progress: 0,
    courses: []
},{
    trailId: 12,
    title: 'Mercado Futuro',
    progress: 0,
    courses: []
},{
    trailId: 13,
    title: 'Derivativos',
    progress: 0,
    courses: []
}]

const styles = {
    container: {
        width: '100%'
    },
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

export class Trail extends Component {

    findTrail = (trailId) => {
        return trails.find(t => t.trailId === Number(trailId));
    }

    selectCourse = (trailId, courseId) => {
        this.props.history.push(`/trail/${trailId}/course/${courseId}`);
    }

    render(){
        const trail = this.findTrail(this.props.match.params.id);
        return (<>
            <Topbar title={trail.title} auth></Topbar>
            <Container style={styles.container}>
                <Row style={{maxWidth: '100%'}}>
                    {trail.courses.map(c => {
                        return <Col key={c.courseId} lg={{ span: 3 }} md={{ span: 4 }} sm={{ span: 12 }} style={styles.card}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h2" style={styles.cardTitle}>{c.title}</Typography>
                                    <LinearProgress variant="determinate"
                                        color="secondary"
                                        value={c.progress}/>
                                </CardContent>
                                <CardActions style={styles.actions}>
                                    <Button size="small" 
                                        onClick={() => this.selectCourse(trail.trailId, c.courseId)}>
                                        APRENDER
                                    </Button>
                                    <Button size="small" 
                                        onClick={() => this.selectCourse(trail.trailId, c.courseId)}>
                                        QUIZ
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

export default withRouter(Trail);
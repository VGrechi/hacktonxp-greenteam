import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import Topbar from '../topbar/Topbar';

const news = [{
    id: 1,
    title: 'Reajuste na Taxa Selic',
    description: 'COPOM reajustará Taxa Selic no próximo mês.'
}, {
    id: 2,
    title: 'Titulo 2',
    description: 'Descricao 2'
}, {
    id: 3,
    title: 'Titulo 3',
    description: 'Descricao 3'
}]

const styles = {
    card: {
        marginBottom: '1em'
    },
    actions: {
        display: 'flex', 
        justifyContent: 'flex-end'
    }
}

export default class Feed extends Component {

    render() {
        return (<>
            <Topbar title="Feed" auth></Topbar>
            <Container fluid>
                <Row>
                    {news.map(n => {
                        return <Col lg={{ span: 3 }} md={{ span: 4 }} sm={{ span: 12 }} style={styles.card}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h2">{n.title}</Typography>
                                    <Typography variant="body2" component="h6">{n.description}</Typography>
                                </CardContent>
                                <CardActions style={styles.actions}>
                                    <Button size="small">Leia Mais</Button>
                                </CardActions>
                            </Card>
                        </Col>
                    })}
                </Row>
            </Container>
        </>);
    }
}
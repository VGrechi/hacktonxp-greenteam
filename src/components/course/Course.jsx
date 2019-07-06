import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, CardContent, LinearProgress, Typography, CardActions, Button } from '@material-ui/core';
import SkipNext from '@material-ui/icons/SkipNext';
import SkipPrevious from '@material-ui/icons/SkipPrevious';

import Topbar from '../topbar/Topbar';

const courses = [{
    courseId: 1,
    title: 'O que é um Investimento?',
    progress: 100,
    stageCount: 3,
    stages: [{
        stageId: 1,
        content: '1'
    },{
        stageId: 2,
        content: '2'
    },{
        stageId: 3,
        content: '3'
    }]
}, {
    courseId: 2,
    title: 'Juros Compostos',
    progress: 100
}, {
    courseId: 3,
    title: 'O porquê de se preocupar com a inflação',
    progress: 100
}, {
    courseId: 4,
    title: 'Taxa Selic',
    progress: 85
}, {
    courseId: 5,
    title: 'IPCA',
    progress: 0
}, {
    courseId: 6,
    title: 'FGC (Fundo Garantidor de Crédito)',
    progress: 0
}]

const styles = {
    container: {
        width: '100%'
    },
    progressCard: {
        marginBottom: '1em'
    } 
}

export default class Course extends Component {

    state = {
        currentStage: 1
    }

    findCourse = (courseId) => {
        return courses.find(caches => caches.courseId === Number(courseId));
    }

    render() {
        const course = this.findCourse(this.props.match.params.id);
        const { currentStage, stageCount } = this.state;
        const progress = (currentStage) / stageCount * 100;
        return (<>
            <Topbar title={course.title} auth></Topbar>
            <Container style={styles.container}>
                <Row>
                    <Col>
                        <Card style={styles.progressCard}>
                            <CardContent>
                                <LinearProgress variant="determinate"
                                    color="secondary"
                                    value={progress} />
                            </CardContent>
                        </Card>

                        {course.stages.filter(s => s.stageId === currentStage)
                            .map(s => (<Card>
                                <CardContent>
                                    <Typography variant="h5" component="h2">{s.content}</Typography>
                                </CardContent>
                            </Card>))}

                        <div>
                            <SkipPrevious></SkipPrevious>               
                            <SkipNext></SkipNext> 
                        </div>
                    </Col>
                </Row>
            </Container>


        </>);
    }
}
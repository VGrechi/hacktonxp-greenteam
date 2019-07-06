import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, CardContent, LinearProgress, Typography, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SkipNext from '@material-ui/icons/SkipNext';
import SkipPrevious from '@material-ui/icons/SkipPrevious';

import Topbar from '../topbar/Topbar';

const courses = [{
    courseId: 1,
    title: 'O que é um Investimento?',
    questions: [{
        questionId: 1,
        content: 'Investimento é:',
        a: 'Guardar dinheiro',
        b: 'Aplicar recursos e torcer para ganhar mais',
        c: 'Aplicar recursos depois de uma análise para produzir retorno futuro',
        d: 'Todas as alternativas'
    },{
        questionId: 2,
        content: 'Para investir, é preciso:' +
            '1 - Poupar dinheiro' + 
            '2 - Ser um especialista em finanças' + 
            '3 - Analisar a aplicação e entender os riscosEstão corretas as alternativas:',
        a: 'Somente 3;',
        b: '1 e 2',
        c: '1, 2 e 3',
        d: '1 e 3'
    },{
        questionId: 3,
        content: 'Quais são os tipos de investimentos:',
        a: 'Renda fixa e renda especulativa',
        b: 'Apostas e jogos de azar',
        c: 'Renda especulativa e renda variável',
        d: 'Renda fixa e renda variável.'
    }]
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
        currentQuestion: 1
    }

    findCourse = (courseId) => {
        return courses.find(caches => caches.courseId === Number(courseId));
    }

    handlePreviousStep = () => {
        let newStage = this.state.currentQuestion;
        newStage--;
        if(newStage < 1){
            newStage = 1;
        }
        this.setState({ currentQuestion: newStage });
    }

    handleNextStep = (size) => {
        let newStage = this.state.currentQuestion;
        newStage++;
        console.log(newStage, size);
        if(newStage > size){
            // TODO Congragts
        }else{
            this.setState({ currentQuestion: newStage });
        }
    }

    render() {
        const course = this.findCourse(this.props.match.params.id);
        const { currentQuestion } = this.state;
        const progress = (currentQuestion) / course.questions.length * 100;
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

                        {course.questions.filter(q => q.questionId === currentQuestion)
                            .map(q => (<Card key={q.questionId}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">{q.content}</Typography>
                                    <RadioGroup>
                                        <FormControlLabel value={q.a} control={<Radio />} label={q.a} />
                                        <FormControlLabel value={q.b} control={<Radio />} label={q.b} />
                                        <FormControlLabel value={q.c} control={<Radio />} label={q.c} />
                                        <FormControlLabel value={q.d} control={<Radio />} label={q.d} />
                                    </RadioGroup>
                                </CardContent>
                            </Card>))}

                        <div style={{ display: 'flex', justifyContent: 'center'}}>
                            <IconButton>
                                <SkipPrevious onClick={() => this.handlePreviousStep(course.questions.length)}></SkipPrevious>                
                            </IconButton>
                            <IconButton>
                                <SkipNext onClick={() => this.handleNextStep(course.questions.length)}></SkipNext> 
                            </IconButton>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>);
    }
}
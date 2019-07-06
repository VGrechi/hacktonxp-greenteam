import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, CardContent, LinearProgress, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SkipNext from '@material-ui/icons/SkipNext';
import SkipPrevious from '@material-ui/icons/SkipPrevious';

import Topbar from '../topbar/Topbar';

const courses = [{
    courseId: 1,
    title: 'O que é um Investimento?',
    progress: 100,
    stages: [{
        stageId: 1,
        content: 'Quando se trata de dinheiro, é muito comum ver pessoas em dúvida sobre como cuidar melhor dele. Muitos querem alcançar metas que envolvem recursos financeiros, mas não sabem muito bem por onde começar. Nesse sentido, entender o que é investimento é algo fundamental. Mas você verá ao longo deste curso que o conceito não se trata somente de aplicações financeiras.'
    },{
        stageId: 2,
        content: 'Investimento é qualquer gasto ou aplicação de recursos que produza um retorno futuro. Esse conceito envolve tanto dinheiro quanto capital intelectual, social ou natural. E acredite: desvendar seus significados pode ser bem mais simples do que parece.'
    },{
        stageId: 3,
        content: 'Não é preciso ser um especialista em finanças para investir, mas é importante ter uma noção do que é investimento porque esse conceito faz parte da vida da maioria das pessoas. Afinal, a nossa relação com o dinheiro nos afeta diretamente.'
    },{
        stageId: 4,
        content: 'Infelizmente, em muitos casos essa relação é conflituosa — principalmente para quem não tem conhecimento de como lidar com o dinheiro. Para não passar por isso, faça esse curso e entenda, de forma simples, o que é investimento e como ele pode ajudá-lo a realizar seus objetivos.'
    },{
        stageId: 5,
        content: 'De maneira ampla, o conceito de investimento é um desembolso em que há a expectativa de certo ganho ou resultado futuro. A partir desse raciocínio, vários itens podem ser considerados como capital para investir: tempo, energia, estudos, atenção e assim por diante.'
    },{
        stageId: 6,
        content: 'Quando se fala de finanças, o que é investimento financeiro? Basicamente é aplicar dinheiro para que ele produza rendimentos no futuro. Muito simples: investir significa colocar seu dinheiro para trabalhar para você.'
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

    handlePreviousStep = () => {
        let newStage = this.state.currentStage;
        newStage--;
        if(newStage < 1){
            newStage = 1;
        }
        this.setState({ currentStage: newStage });
    }

    handleNextStep = (size) => {
        let newStage = this.state.currentStage;
        newStage++;
        if(newStage > size){
            const { trailId, id } = this.props.match.params;
            this.props.history.push(`/trail/${trailId}/course/${id}/quiz`)
        }else{
            this.setState({ currentStage: newStage });
        }
    }

    render() {
        const course = this.findCourse(this.props.match.params.id);
        const { currentStage } = this.state;
        const progress = (currentStage) / course.stages.length * 100;
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
                            .map(s => (<Card key={s.stageId}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">{s.content}</Typography>
                                </CardContent>
                            </Card>))}

                        <div style={{ display: 'flex', justifyContent: 'center'}}>
                            <IconButton>
                                <SkipPrevious onClick={() => this.handlePreviousStep(course.stages.length)}></SkipPrevious>                
                            </IconButton>
                            <IconButton>
                                <SkipNext onClick={() => this.handleNextStep(course.stages.length)}></SkipNext> 
                            </IconButton>
                        </div>
                    </Col>
                </Row>
            </Container>


        </>);
    }
}
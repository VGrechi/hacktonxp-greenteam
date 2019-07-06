import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import Topbar from '../topbar/Topbar';

const news = [{
    id: 1,
    title: 'Dólar deve cair para R$ 3,60 com fator Previdência e exterior será decisivo para queda maior',
    description: 'COPOM reajustará Taxa Selic no próximo mês.',
    link: 'https://www.infomoney.com.br/mercados/cambio/noticia/8466132/dolar-deve-cair-para-r-360-com-fator-previdencia-e-exterior-sera-decisivo-para-queda-maior'
}, {
    id: 2,
    title: 'Banco Central aponta maior conforto com a inflação, mas vê reforma da Previdência como preponderante',
    description: 'Presidente do Banco Central, Roberto Campos Neto participou hoje da Expert XP 2009, em São Paulo',
    link: 'https://www.infomoney.com.br/mercados/politica/noticia/8464884/banco-central-aponta-maior-conforto-com-a-inflacao-mas-ve-reforma-da-previdencia-como-preponderante'
}, {
    id: 3,
    title: 'Ibovespa fecha em alta de 0,44% e volta a bater recorde',
    description: '',
    link: 'https://br.investing.com/news/stock-market-news/ibovespa-fecha-em-alta-de-044-e-volta-a-bater-recorde-667716'
},{
    id: 4,
    title: 'O que ganha mais: fundo DI sem taxa de administração ou Tesouro Selic?',
    description: '',
    link: 'https://economia.uol.com.br/financas-pessoais/noticias/redacao/2019/07/04/o-que-ganha-mais-fundo-di-sem-taxa-de-administracao-ou-tesouro-selic.htm'
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
            <Topbar title="Notícias" auth></Topbar>
            <Container fluid>
                <Row>
                    {news.map(n => {
                        return <Col lg={{ offset: 2, span: 8 }} style={styles.card}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5">{n.title}</Typography>
                                    <Typography>{n.description}</Typography>
                                </CardContent>
                                <CardActions style={styles.actions}>
                                    <Button size="small" href={n.link}>Leia Mais</Button>
                                </CardActions>
                            </Card>
                        </Col>
                    })}
                </Row>
            </Container>
        </>);
    }
}
import React, { Component } from 'react';
import Card from '@material-ui/core/Card'; 
import { CardContent, Typography, CardActions, Button } from '@material-ui/core';

const news = [{
    title: 'Titulo 1',
    description: 'Descricao 1'
},{
    title: 'Titulo 2',
    description: 'Descricao 2'
},{
    title: 'Titulo 3',
    description: 'Descricao 3'
}]

export default class Feed extends Component {

    render(){
        return (<>
            {news.map(n => {
                return <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">{n.title}</Typography>
                        <Typography variant="h6" component="h6">{n.description}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Leia Mais</Button>
                    </CardActions>
                </Card>;
            })}
        </>);
    }
}
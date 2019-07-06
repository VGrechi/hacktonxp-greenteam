import React, { Component } from 'react';

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

export default class Trail extends Component {

    findTrail = (trailId) => {
        return trails.find(t => t.trailId = trailId);
    }

    render(){
        const trail = this.findTrail(this.props.match.params.id);
        return (<>
            <Topbar title={trail.title} auth></Topbar>
        </>);
    }
}
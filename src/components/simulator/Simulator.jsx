import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Topbar from '../topbar/Topbar';
import { Bar, Line, Pie } from "react-chartjs-2";
import { Typography } from '@material-ui/core';

export default class Simulator extends Component {

    state = {
        chartData: {
            labels: [
                "2009",
                "2010",
                "2011",
                "2012",
                "2013",
                "2014",
                "2015",
                "2016",
                "2017",
                "2018",
                "2019"
            ],
            datasets: [
                {
                    label: "poupança",
                    data: [
                        2.63,
                        3.57,
                        4.51,
                        6.05,
                        6.48,
                        7.19,
                        4.85,
                        2.51,
                        6.13,
                        7.25,
                        8.05
                    ],
                    fill: false,
                    borderColor: "rgb(102, 120, 210)"
                },
                {
                    label: "CDI",
                    data: [
                        0,
                        8.06,
                        18.7,
                        32.52,
                        43.38,
                        55.16,
                        71.67,
                        94,
                        121.71,
                        143.84,
                        159.3
                    ],
                    fill: false,
                    borderColor: "rgb(190, 90, 120)"
                }
            ]
        },
        pieData: {
            labels: ["Variável", "fixa", "reserva"],
            datasets: [
                {
                    data: [1230, 563, 457],
                    backgroundColor: [
                        "rgb(90, 210, 30)",
                        "rgb(210, 90, 210)",
                        "rgb(90, 210, 150)"
                    ]
                }
            ]
        },
        barData: {
            labels: ["Poupança", "COI", "Tesouro"],
            datasets: [
                {
                    label: "ROI",
                    data: [1300, 2110, 1500],
                    backgroundColor: [
                        "rgb(124, 169, 235)",
                        "rgb(124, 235, 12)",
                        "rgb(169, 73, 60)"
                    ]
                }
            ]
        },

        legend: {
            display: true
        }
    };

    render() {
        return (<>
            <Topbar title="Simulador" auth></Topbar>
            <Container>
                <Row>
                    <Col>
                        <Typography>Indicador Poupança X CDI</Typography>
                        <div className="chart">
                            <Line
                                data={this.state.chartData}
                                options={{
                                    maintainAspectRatio: false
                                }}
                            />
                        </div>

                        <Typography>Indicador ROI</Typography>
                        <div className="chart">
                            <Bar
                                data={this.state.barData}
                                options={{ maintainAspectRatio: false }}
                            />
                        </div>
                    </Col>
                    <Col>
                        <Typography>Sua Carteira</Typography>
                        <div className="chart">
                            <Pie
                                data={this.state.pieData}
                                options={{ maintainAspectRatio: false }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>);
    }
}
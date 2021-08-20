import React from 'react';
import { Typography, Row, Col } from 'antd';

import { ExperimentOneData, ExperimentOneDataTotals } from './ExperimentOneData';
import { ExperimentTwoData, ExperimentTwoDataTotals } from './ExperimentTwoData';
import { ExperimentThreeData, ExperimentThreeDataTotals } from './ExperimentThreeData';

const { Paragraph, Title } = Typography;

export function Home() {
    return (
        <div>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <Title level={3}>Introduction</Title>
                    <Paragraph>
                        Trying to solve hockey by building a model that predicts the winner of an NHL game.
                    </Paragraph>
                    <Title level={3}>Exploration</Title>
                    <Paragraph>
                        During each exploration, we gradually add more parameters to our model in order to discover their effects on the model's performance.
                        We are mainly using artificial neural networks to solve this.
                    </Paragraph>
                    <Title level={4}>One</Title>
                    <Paragraph>
                        We start with only 20 parameters as input to our model. The input vector is a representation of the results from the
                        last 10 games played by each team. For instance, if we have a game where Montreal and Boston are playing each other,
                        we would find the most recent past 10 games played by Montreal and store their results as binary, where 1 means Montreal won and 0 means Montreal lost.
                        Then do the same for Boston. We feed all of this into the neural network model and generate an output that gives us the probabilities of winning of each team.

                    </Paragraph>
                    <Title level={5}>Parameters</Title>
                    <ExperimentOneDataTotals></ExperimentOneDataTotals>
                    <Title level={5}>Details</Title>
                    <ExperimentOneData></ExperimentOneData>
                    <Title level={4}>Two</Title>
                    <Paragraph>
                        An extension of exploration one. Using same strategy, except that we will use an extedned dataset.
                    </Paragraph>
                    <Title level={5}>Parameters</Title>
                    <ExperimentTwoDataTotals></ExperimentTwoDataTotals>
                    <Title level={5}>Details</Title>
                    <ExperimentTwoData></ExperimentTwoData>
                    <Title level={4}>Three</Title>
                    <Paragraph>
                        Using same strategy, except that we are adding the following variables:
                    </Paragraph>
                    <Title level={5}>Parameters</Title>
                    <ExperimentThreeDataTotals></ExperimentThreeDataTotals>
                    <Title level={5}>Details</Title>
                    <ExperimentThreeData></ExperimentThreeData>
                </Col>
                <Col span={4}></Col>
            </Row>
            
        </div>
    );
}
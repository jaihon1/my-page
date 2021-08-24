import React from 'react';
import { Typography, Row, Col } from 'antd';

import { ExperimentOneData, ExperimentOneDataTotals } from './ExperimentOneData';
import { ExperimentTwoData, ExperimentTwoDataResults, ExperimentTwoDataTotals } from './ExperimentTwoData';
import { ExperimentThreeData, ExperimentThreeDataResults, ExperimentThreeDataTotals } from './ExperimentThreeData';

const { Paragraph, Title } = Typography;

export function Documentation() {
    return (
        <div>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <Title level={3}>Introduction</Title>
                    <Paragraph>
                        Hockey is one of the most difficult sports to predict given its high randomness characteristc. We are trying to solve hockey by tackling it with neural networks. Our goal is to build and train models that accurately predicts the winner of a specified NHL game.
                    </Paragraph>
                    <Title level={3}>Exploration</Title>
                    <Paragraph>
                        During each exploration/iteration, we gradually add more features to our model in order to discover their effects on the model's performance. The dataset consists of all games played in the nhl from season 2005/2006 to 2019/2020. The dataset is split into two sets, training and testing, where the size of the testing dataset is 15% of the whole dataset. 
                    </Paragraph>
                    <Title level={4}>One</Title>
                    <Paragraph>
                        We start with only 20 features as input features to our model. The input vector is a representation of the results from the last 10 games (number of games required to build the internal state of the team at a single point in time) played by each team. For instance, if we have a game where Montreal and Boston are playing each other, we would find the most recent past 10 games played by Montreal and store their results as binary, where 1 means Montreal won and 0 means Montreal lost.
                        Then do the same for Boston. We feed all of this into the neural network model and generate an output that gives us the winning probabilities of each team.

                    </Paragraph>
                    <Title level={5}>Model Structure</Title>
                    <Paragraph>
                        <ExperimentOneDataTotals></ExperimentOneDataTotals>
                    </Paragraph>
                    <Title level={5}>Details</Title>
                    <Paragraph>
                        <ExperimentOneData></ExperimentOneData>
                    </Paragraph>
                    <Title level={4}>Two</Title>
                    <Paragraph>
                        An extension of the previous iteration. We are using the same strategy, except that we will added the following features:
                    </Paragraph>
                    <Title level={5}>Model Structure</Title>
                    <Paragraph>
                        <ExperimentTwoDataTotals></ExperimentTwoDataTotals>
                    </Paragraph>
                    <Title level={5}>Details</Title>
                    <Paragraph>
                        <ExperimentTwoData></ExperimentTwoData>
                    </Paragraph>
                    <Title level={5}>Results</Title>
                    <Paragraph>
                        <ExperimentTwoDataResults></ExperimentTwoDataResults>
                    </Paragraph>
                    <Title level={4}>Three</Title>
                    <Paragraph>
                        During this iteration, in addition to introducing new features, we modified the number of games required for building the state to 20 games. Also, we are adding the following features:
                    </Paragraph>
                    <Title level={5}>Model Structure</Title>
                    <Paragraph>
                        <ExperimentThreeDataTotals></ExperimentThreeDataTotals>
                    </Paragraph>
                    <Title level={5}>Details</Title>
                    <Paragraph>
                        <ExperimentThreeData></ExperimentThreeData>
                    </Paragraph>
                    <Title level={5}>Results</Title>
                    <Paragraph>
                        <ExperimentThreeDataResults></ExperimentThreeDataResults>
                    </Paragraph>
                </Col>
                <Col span={4}></Col>
            </Row>
        </div>
    );
}
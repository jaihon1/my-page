import React from 'react';
import { Typography } from 'antd';

import { ExperimentOneData, ExperimentOneDataTotals } from './ExperimentOneData';
import { ExperimentTwoData, ExperimentTwoDataTotals } from './ExperimentTwoData';
import { ExperimentThreeData, ExperimentThreeDataTotals } from './ExperimentThreeData';

const { Paragraph, Title } = Typography;

export function Home() {
    return (
        <div>
            <Title level={3}>Introduction</Title>
            <Paragraph>
                Trying to solve hockey by building a model that predicts the winner of an NHL game.

            </Paragraph>
            <Title level={3}>Exploration</Title>
            <Paragraph>
                During each exploration, we gradually add more parameters to our model in order to discover their effects on the model performance.
            </Paragraph>
            <Title level={4}>One</Title>
            <Paragraph>
                Find patterns based on all the games that were played over every nhl seasons.
                Are there any features to be extracted from the historic data of nhl games?
            </Paragraph>
            <Title level={5}>Parameters</Title>
            <ExperimentOneDataTotals></ExperimentOneDataTotals>
            <Title level={5}>Details</Title>
            <ExperimentOneData></ExperimentOneData>
            <Title level={5}>Exploration Two</Title>
            <Paragraph>
                An extension of exploration one. Using same strategy, except that we will use an extedned dataset.
            </Paragraph>
            <Title level={5}>Parameters</Title>
            <ExperimentTwoDataTotals></ExperimentTwoDataTotals>
            <Title level={5}>Details</Title>
            <ExperimentTwoData></ExperimentTwoData>
            <Title level={5}>Exploration Three</Title>
            <Paragraph>
                Using same strategy, except that we are adding the following variables:
            </Paragraph>
            <Title level={5}>Parameters</Title>
            <ExperimentThreeDataTotals></ExperimentThreeDataTotals>
            <Title level={5}>Details</Title>
            <ExperimentThreeData></ExperimentThreeData>
        </div>
    );
}
import React from 'react';
import { Typography, Row, Col } from 'antd';

import { Table } from 'antd';
import data_nhl from './nhl_20202021.json';

const { Paragraph, Title } = Typography;


let object = data_nhl[0];
const columnsResult = []
let i = 0;
for(const key in object){
    let column = {
        key: i,
        title: key,
        dataIndex: key,
        width: 5
    }
    i += 1;

    columnsResult.push(column);
}

function Results() {
    return (
        <div>
            <Table columns={columnsResult} dataSource={data_nhl} pagination={{ pageSize: 50 }} scroll={{ x: 1500, y: 512 }} />
        </div>
    );
}


const columnsStats = [
    {
        title: 'type',
        dataIndex: 'type',
        width: 32,
    },
    {
      title: 'count',
      dataIndex: 'count',
      width: 32,
    },
    {
      title: 'avg_accuracy',
      dataIndex: 'avg_accuracy',
      width: 32,
    },
];

const dataStats = [
    {
        key: 0,
        type: 'all games',
        count: 524,
        avg_accuracy: 0.6011,
    },
    {
        key: 1,
        type: 'home games',
        count: 278,
        avg_accuracy: 0.6403,
    },
    {
        key: 2,
        type: 'away games',
        count: 246,
        avg_accuracy: 0.5569,
    },
]

function Stats() {
    return (
        <div>
            <Table columns={columnsStats} dataSource={dataStats} pagination={false} scroll={{ y: 512 }} />
        </div>
    );
}

export function Data() {
    return (
        <div>
            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    <Title level={3}>Season 2020-2021</Title>
                    <Paragraph>
                        The following are the results, statistics and analysis from the results of the model running on the games from regular from last nhl season (2020-2021).
                    </Paragraph>
                    <Title level={5}>General Stats</Title>
                    <Paragraph>
                        <Stats></Stats>
                    </Paragraph>
                    <Title level={5}>Game Logs</Title>
                    <Paragraph>
                        <Results></Results>
                    </Paragraph>

                    
                </Col>
                <Col span={2}></Col>
            </Row>
        </div>
    );
}
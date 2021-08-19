import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 144,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    width: 55,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    width: 144,
  },
  {
    title: 'Total',
    dataIndex: 'total',
    width: 34,
  },
];

const data = [
    {
        key: 0,
        name: 'home_team_last_10_games_results',
        type: 'Input',
        description: 'One input for each of the last 10 games result',
        total: '10',
    },
    {
        key: 1,
        name: 'away_team_last_10_games_results',
        type: 'Input',
        description: 'One input for each of the last 10 games result',
        total: '10',
    },
    {
        key: 2,
        name: 'home_team_wins',
        type: 'Output',
        description: 'Output class 0 of the model',
        total: '1',
    },
    {
        key: 3,
        name: 'away_team_wins',
        type: 'Output',
        description: 'Output class 1 of the model',
        total: '1',
    },
];


export function ExperimentOneData() {
    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 377 }} />
        </div>
    );
}


const columnsTotals = [
    {
      title: 'Type',
      dataIndex: 'type',
      width: 50,
    },
    {
      title: 'Total',
      dataIndex: 'total',
      width: 30,
    },
  ];

  const dataTotals = [
      {
          key: 0,
          type: 'Input',
          total: '20',
      },
      {
          key: 1,
          type: 'Output',
          total: '2',
      },
  ];

export function ExperimentOneDataTotals() {
    return (
        <div>
            <Table columns={columnsTotals} dataSource={dataTotals} pagination={{ pageSize: 50 }} scroll={{ y: 377 }} />
        </div>
    );
}
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
      name: 'h_team_last_game_1',
      type: 'Input',
      description: 'Home team result from last game',
      total: '1',
  },
  {
      key: 1,
      name: 'h_team_last_game_2',
      type: 'Input',
      description: 'Home team result from last last game',
      total: '1',
  },
  {
      key: 2,
      name: 'h_team_last_game_3',
      type: 'Input',
      description: 'Home team result from last^3 game',
      total: '1',
  },
  {
      key: 3,
      name: 'h_team_last_game_4',
      type: 'Input',
      description: 'Home team result from last^4 game',
      total: '1',
  },    {
      key: 4,
      name: 'h_team_last_game_5',
      type: 'Input',
      description: 'Home team result from last^5 game',
      total: '1',
  },
  {
      key: 5,
      name: 'h_team_last_game_6',
      type: 'Input',
      description: 'Home team result from last^6 game',
      total: '1',
  },
  {
      key: 6,
      name: 'h_team_last_game_7',
      type: 'Input',
      description: 'Home team result from last^7 game',
      total: '1',
  },
  {
      key: 7,
      name: 'h_team_last_game_8',
      type: 'Input',
      description: 'Home team result from last^8 game',
      total: '1',
  },
  {
      key: 8,
      name: 'h_team_last_game_9',
      type: 'Input',
      description: 'Home team result from last^9 game',
      total: '1',
  },
  {
      key: 9,
      name: 'h_team_last_game_10',
      type: 'Input',
      description: 'Home team result from last^10 game',
      total: '1',
  },
  {
      key: 0,
      name: 'a_team_last_game_1',
      type: 'Input',
      description: '...',
      total: '1',
  },
  {
      key: 1,
      name: 'a_team_last_game_2',
      type: 'Input',
      description: '...',
      total: '1',
  },
  {
      key: 2,
      name: 'a_team_last_game_3',
      type: 'Input',
      description: '...',
      total: '1',
  },
  {
      key: 3,
      name: 'a_team_last_game_4',
      type: 'Input',
      description: '...',
      total: '1',
  },    {
      key: 4,
      name: 'a_team_last_game_5',
      type: 'Input',
      description: '...',
      total: '1',
  },
  {
      key: 5,
      name: 'a_team_last_game_6',
      type: 'Input',
      description: '...',
      total: '1',
  },
  {
      key: 6,
      name: 'a_team_last_game_7',
      type: 'Input',
      description: '...',
      total: '1',
  },
  {
      key: 7,
      name: 'a_team_last_game_8',
      type: 'Input',
      description: '...',
      total: '1',
  },
  {
      key: 8,
      name: 'a_team_last_game_9',
      type: 'Input',
      description: '...',
      total: '1',
  },
  {
      key: 9,
      name: 'a_team_last_game_10',
      type: 'Input',
      description: '...',
      total: '1',
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
            <Table columns={columns} dataSource={data} pagination={false} scroll={{ y: 377 }} />
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
            <Table columns={columnsTotals} dataSource={dataTotals} pagination={false} scroll={{ y: 377 }} />
        </div>
    );
}
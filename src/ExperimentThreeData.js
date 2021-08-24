import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        width: 64,
    },
    {
        title: 'Type',
        dataIndex: 'type',
        width: 32,
    },
    {
        title: 'Description',
        dataIndex: 'description',
        width: 64,
    },
    {
        title: 'Total',
        dataIndex: 'total',
        width: 32,
    },
];


const data = [
    {
        key: 0,
        name: 'h_team_played_2_days_ago',
        type: 'Input',
        description: 'Home team played a game 2 days ago',
        total: '1',
    },
    {
        key: 0,
        name: 'h_team_played_3_days_ago',
        type: 'Input',
        description: 'Home team played a game 3 days ago',
        total: '1',
    },
    {
        key: 0,
        name: 'h_team_played_4_days_ago',
        type: 'Input',
        description: 'Home team played a game 4 days ago',
        total: '1',
    },
    {
        key: 0,
        name: 'h_team_played_5_days_ago',
        type: 'Input',
        description: 'Home team played a game 5 days ago',
        total: '1',
    },
    {
        key: 0,
        name: 'h_team_played_eachother_last_game',
        type: 'Input',
        description: 'Home team played current opponent last game',
        total: '1',
    },
    {
        key: 0,
        name: 'a_team_played_2_days_ago',
        type: 'Input',
        description: 'Away team played a game 2 days ago',
        total: '1',
    },
    {
        key: 0,
        name: 'a_team_played_3_days_ago',
        type: 'Input',
        description: 'Away team played a game 3 days ago',
        total: '1',
    },
    {
        key: 0,
        name: 'a_team_played_4_days_ago',
        type: 'Input',
        description: 'Away team played a game 4 days ago',
        total: '1',
    },
    {
        key: 0,
        name: 'a_team_played_5_days_ago',
        type: 'Input',
        description: 'Away team played a game 5 days ago',
        total: '1',
    },
    {
        key: 0,
        name: 'a_team_played_eachother_last_game',
        type: 'Input',
        description: 'Away team played current opponent last game',
        total: '1',
    },

    {
        key: 0,
        name: 'h_team_last_game_11',
        type: 'Input',
        description: 'Home team result from last^11 game',
        total: '1',
    },
    {
        key: 1,
        name: 'h_team_last_game_12',
        type: 'Input',
        description: 'Home team result from last^12 game',
        total: '1',
    },
    {
        key: 2,
        name: 'h_team_last_game_13',
        type: 'Input',
        description: 'Home team result from last^13 game',
        total: '1',
    },
    {
        key: 3,
        name: 'h_team_last_game_14',
        type: 'Input',
        description: 'Home team result from last^14 game',
        total: '1',
    },    {
        key: 4,
        name: 'h_team_last_game_15',
        type: 'Input',
        description: 'Home team result from last^15 game',
        total: '1',
    },
    {
        key: 5,
        name: 'h_team_last_game_16',
        type: 'Input',
        description: 'Home team result from last^16 game',
        total: '1',
    },
    {
        key: 6,
        name: 'h_team_last_game_17',
        type: 'Input',
        description: 'Home team result from last^17 game',
        total: '1',
    },
    {
        key: 7,
        name: 'h_team_last_game_18',
        type: 'Input',
        description: 'Home team result from last^18 game',
        total: '1',
    },
    {
        key: 8,
        name: 'h_team_last_game_19',
        type: 'Input',
        description: 'Home team result from last^19 game',
        total: '1',
    },
    {
        key: 9,
        name: 'h_team_last_game_20',
        type: 'Input',
        description: 'Home team result from last^20 game',
        total: '1',
    },

    {
        key: 0,
        name: 'a_team_last_game_11',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 1,
        name: 'a_team_last_game_12',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 2,
        name: 'a_team_last_game_13',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 3,
        name: 'a_team_last_game_14',
        type: 'Input',
        description: '...',
        total: '1',
    },    {
        key: 4,
        name: 'a_team_last_game_15',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 5,
        name: 'a_team_last_game_16',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 6,
        name: 'a_team_last_game_17',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 7,
        name: 'a_team_last_game_18',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 8,
        name: 'a_team_last_game_19',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 9,
        name: 'a_team_last_game_20',
        type: 'Input',
        description: '...',
        total: '1',
    },
];


export function ExperimentThreeData() {
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
          total: '80',
      },
      {
          key: 1,
          type: 'Output',
          total: '2',
      },
  ];

export function ExperimentThreeDataTotals() {
    return (
        <div>
            <Table columns={columnsTotals} dataSource={dataTotals} pagination={false} scroll={{ y: 377 }} />
        </div>
    );
}


const columnsResults = [
    {
        title: 'Hidden Layers',
        dataIndex: 'hiddenLayers',
        width: 32,
    },
    {
      title: 'Accuracy',
      dataIndex: 'accuracy',
      width: 32,
    },
    {
      title: 'F1 Weighed',
      dataIndex: 'f1',
      width: 32,
    },
  ];

  const dataResults = [
      {
          key: 0,
          hiddenLayers: '64 x 512',
          accuracy: '0.588',
          f1: '0.5837',
      },
      {
        key: 0,
        hiddenLayers: '64 x 32 x 32 x 32',
        accuracy: '0.587',
        f1: '0.5867',
    },
    {
        key: 0,
        hiddenLayers: '64 x 64 x 64 x 64 x 64 x 64 x 64 x 64',
        accuracy: '0.587',
        f1: '0.5866',
    },
  ];

export function ExperimentThreeDataResults() {
    return (
        <div>
            <Table columns={columnsResults} dataSource={dataResults} pagination={false} scroll={{ y: 377 }} />
        </div>
    );
}
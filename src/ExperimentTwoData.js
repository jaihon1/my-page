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
        key: 10,
        name: 'h_team_win_rate',
        type: 'Input',
        description: 'Home team win rate during past X games in current season',
        total: '1',
    },
    {
        key: 11,
        name: 'h_team_goalspergame_for',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'h_team_goalspergame_against',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'h_team_shotspergame_for',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'h_team_shotspergame_against',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'h_team_goalsperiod1_for',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'h_team_goalsperiod1_against',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'h_team_goalsperiod2_for',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'h_team_goalsperiod2_against',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'h_team_goalsperiod3_for',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'h_team_goalsperiod3_against',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'h_team_goalsperiod4_for',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'h_team_goalsperiod4_against',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'h_team_shootout_scoring_rate',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'h_team_played_yesterday',
        type: 'Input',
        description: '...',
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
        key: 10,
        name: 'a_team_win_rate',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 11,
        name: 'a_team_goalspergame_for',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'a_team_goalspergame_against',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'a_team_shotspergame_for',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'a_team_shotspergame_against',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'a_team_goalsperiod1_for',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'a_team_goalsperiod1_against',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'a_team_goalsperiod2_for',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'a_team_goalsperiod2_against',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'a_team_goalsperiod3_for',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'a_team_goalsperiod3_against',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'a_team_goalsperiod4_for',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'a_team_goalsperiod4_against',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'a_team_shootout_scoring_rate',
        type: 'Input',
        description: '...',
        total: '1',
    },
    {
        key: 12,
        name: 'a_team_played_yesterday',
        type: 'Input',
        description: '...',
        total: '1',
    },
];


export function ExperimentTwoData() {
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
          total: '50',
      },
      {
          key: 1,
          type: 'Output',
          total: '2',
      },
  ];

export function ExperimentTwoDataTotals() {
    return (
        <div>
            <Table columns={columnsTotals} dataSource={dataTotals} pagination={{ pageSize: 50 }} scroll={{ y: 377 }} />
        </div>
    );
}
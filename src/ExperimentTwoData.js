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
          hiddenLayers: '64 x 64',
          accuracy: '0.533',
          f1: '0.5300',
      },
      {
        key: 0,
        hiddenLayers: '512 x 128',
        accuracy: '0.547',
        f1: '0.5200',
    },
  ];

export function ExperimentTwoDataResults() {
    return (
        <div>
            <Table columns={columnsResults} dataSource={dataResults} pagination={false} scroll={{ y: 377 }} />
        </div>
    );
}
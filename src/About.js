import React from 'react';
import { Typography, Row, Col } from 'antd';

import {
    SyncOutlined,
  } from '@ant-design/icons';

const { Paragraph } = Typography;

export function About() {
    return (
        <div>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                <div style={{ paddingTop: '256px', paddingBottom: '256px' }}>
                        <Paragraph>
                            <SyncOutlined spin /> Come back later!
                        </Paragraph>
                    </div>
                </Col>
                <Col span={4}></Col>
            </Row>
        </div>
    );
}
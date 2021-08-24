import React from 'react';
import { Typography, Row, Col } from 'antd';

import {
    SyncOutlined,
  } from '@ant-design/icons';


const { Paragraph } = Typography;

export function Home() {
    return (
        <div>
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <div style={{ paddingTop: '256px', paddingBottom: '256px' }}>
                        <Paragraph>
                            <SyncOutlined spin /> Still working on this...
                        </Paragraph>
                    </div>

                </Col>
                <Col span={4}></Col>
            </Row>
        </div>
    );
}
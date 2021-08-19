import React from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

export function Home() {
    return (
        <div>
            <h2>Home</h2>
            <Paragraph copyable>This is a copyable text.</Paragraph>
        </div>
    );
}
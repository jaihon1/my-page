import React from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

export function About() {
    return (
        <div>
            <h2>About</h2>
            <Paragraph>This is a copyable text.</Paragraph>
        </div>
    );
}
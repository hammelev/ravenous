import React from 'react';

// Components imported
import Business from './Business';

// Mock data
import businessMock from '../mocks/businessMock';


export default function BusinessList() {

    return (
    <ul>
        {businessMock.map(mockedBussiness => <li key={businessMock.name}><Business {...mockedBussiness}></Business></li>)}
    </ul>
    );
}
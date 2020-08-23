import React from 'react';
import Card from '../../Components/Dashboard/Card';

const Dashboard = () => {
    return (
        <div className="page-container" >
            <Card priority="1" count="10" />
            <Card priority="2" count="10" />
        </div>
    )
}

export default Dashboard

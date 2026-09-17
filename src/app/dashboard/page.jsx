import React from 'react';
import Counter from '../components/Counter';

const DashboardPage = () => {

    console.log('dashboard page rander');

    return (
        <div>
            <h1>Dashboard Page</h1>

            < Counter />

            <ul>Dashboard item 1</ul>
            <ul>Dashboard item 2</ul>
            <ul>Dashboard item 3</ul>
            <ul>Dashboard item 4</ul>
            <ul>Dashboard item 5</ul>
        </div>
    );
};

export default DashboardPage;
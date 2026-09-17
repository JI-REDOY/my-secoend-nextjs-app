// 'use client';
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    console.log('Counter page randering');

    const handleIncrease = () => {
        console.log('increase');
        setCount(count + 1);
    };

    return (
        <div>
            <h2 className='text-4xl font-bold mb-10'>Counter: {count}</h2>
            <button onClick={handleIncrease} className='bg-blue-500 text-white px-4 py-2 rounded text-4xl font-bold'>Increase!</button>
        </div>
    );
};

export default Counter;
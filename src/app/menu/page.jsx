import React from 'react';
import FoodCard from '../components/FoodCard';

const MenuPage = async () => {

    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods');
    const data = await res.json();
    const foods = data.data;
    console.log(foods);

    return (
        <div>
            <h1>menu page: {foods.length}</h1>
            <div className='grid gap-4 sm:grid-cols-3'>
                {
                    foods.map(food => <FoodCard key={food.id} food={food} />)
                }
            </div>

        </div>
    );
};

export default MenuPage;
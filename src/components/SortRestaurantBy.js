import React from 'react';

export default function SortRestaurantBy(){

    return (
        <form>
            <label htmlFor='sortRestaurantByOptions'>Sort by:</label>
            <select id='sortRestaurantBy'>
                <option>Option A</option>
                <option>Option B</option>
                <option>Option C</option>
            </select>
        </form>
    );
}
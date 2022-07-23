import React, { useState } from 'react';

const InfoList = ({ data }) => {
    const [details, setDetails] = useState(false);
    const { name, gender, birth_year: year, height, mass, hair_color: hair, skin_color: skin, eye_color: eye, created, edited } = data;
    return (
        <div className="flex justify-around  pt-10 pb-14 items-center ">
            <p className="text-gray-600 text-sm">{name}</p>
            <div>
                <h2>Gender</h2>
                <p className="text-gray-600 text-sm">{gender}</p>
            </div>
            <div>
                <h2>Birth Year</h2>
                <p className="text-gray-600 text-sm">{year}</p>
            </div>
            <div>
                <h2>Height</h2>
                <p className="text-gray-600 text-sm">{height} cm</p>
            </div>
            <button
                onClick={() => setDetails(!details)}
                className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-md"
            >
                Details
            </button>
        </div>
    );
};

export default InfoList;
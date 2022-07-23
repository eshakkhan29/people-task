import React, { useState } from 'react';

const InfoList = ({ data }) => {
    const [details, setDetails] = useState(false);
    const { name, gender, birth_year: year, height, mass, hair_color: hair, skin_color: skin, eye_color: eye, created, edited } = data;
    return (
        <div className="mx-5 px-4 py-12 bg-white shadow-sm h-auto rounded-3xl  my-4">
            <div className="flex justify-between items-center ">
                <p className="text-gray-600 text-sm">{name}</p>
                <div>
                    <h2 className='font-medium'>Gender</h2>
                    <p className="text-gray-600 text-sm">{gender}</p>
                </div>
                <div>
                    <h2 className='font-medium'>Birth Year</h2>
                    <p className="text-gray-600 text-sm">{year}</p>
                </div>
                <div>
                    <h2 className='font-medium'>Height</h2>
                    <p className="text-gray-600 text-sm">{height} cm</p>
                </div>
                <button
                    onClick={() => setDetails(!details)}
                    className="bg-red-500 hover:bg-red-400 text-white px-3 py-1 rounded-full"
                >
                    View Details
                </button>
            </div>
            {details && <div className="w-full p-5 mt-5 shadow mx-auto rounded-3xl">
                <h2 className='font-medium'>Description</h2>
                <p className="text-gray-600 text-sm my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>

                <div className="grid grid-cols-2">
                    <div className="mt-2">
                        <h2 className='font-medium'>Mass</h2>
                        <p className="text-gray-600 text-sm">{mass}</p>
                    </div>
                    <div className="mt-2">
                        <h2 className='font-medium'>Hair Color</h2>
                        <p className="text-gray-600 text-sm">{hair}</p>
                    </div>
                    <div className="mt-2">
                        <h2 className='font-medium'>Skin Color</h2>
                        <p className="text-gray-600 text-sm">{skin}</p>
                    </div>
                    <div className="mt-2">
                        <h2 className='font-medium'>Eye Color</h2>
                        <p className="text-gray-600 text-sm">{eye}</p>
                    </div>
                    <div className="mt-2">
                        <h2 className='font-medium'>Created ID</h2>
                        <p className="text-gray-600 text-sm">{created.split(':')[0]}</p>
                    </div>
                    <div className="mt-2">
                        <h2 className='font-medium'>Edited ID</h2>
                        <p className="text-gray-600 text-sm">{edited.split(':')[0]}</p>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default InfoList;
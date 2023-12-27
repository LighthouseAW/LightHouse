import React from 'react';

const StatisticsComponent = ({ title, value, description }) => {
    return (
        <div className="bg-slate-500 shadow-md p-2 text-center z-20 relative flex items-center">
            <div className="bg-slate-300 p-2 flex text-center items-center justify-center rounded-l-lg flex-grow-1 h-24">
                <h3 className=" text-black text-lg text-center font-semibold">{title}</h3>
            </div>
            <div className="bg-slate-100 p-4 flex items-center justify-center flex-grow-1 h-24">
                <p className="text-2xl font-bold text-gray-800">{value}</p>
            </div>
            <div className="bg-slate-200 p-2 flex items-center justify-center rounded-r-lg flex-grow-1 h-24">
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    </div>
    );
};

export default StatisticsComponent;
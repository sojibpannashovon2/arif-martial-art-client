import React from 'react';

const PopularCard = ({ item }) => {
    // console.log(item);
    const { price, name, image, details, _id } = item || {}
    return (
        <div className="card card-side bg-base-100 shadow-xl border border-white">
            <figure className='w-1/3 px-2 border border-white'>
                <img className='border border-white rounded-md' src={image} alt="Movie" />
            </figure>
            <div className="card-body w-2/3 text-white">
                <h2 className="card-title">{name}</h2>
                <p>{details.slice(0, 100)}...</p>
                <div className="badge badge-primary badge-outline">Most Student</div>
            </div>
        </div>
    );
};

export default PopularCard;
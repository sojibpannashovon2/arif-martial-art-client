import React from 'react';

const InstructorCard = ({ teacher }) => {
    console.log(teacher);
    const { classes, classesTaken, email, name, image, details, _id } = teacher || {}
    return (
        <div className="card card-side bg-base-100 shadow-xl border border-white">
            <figure className='w-1/3 px-2 border border-white'>
                <img className='border border-white rounded-md h-32' src={image} alt="Movie" />
            </figure>
            <div className="card-body w-2/3 text-white">
                <h2 className="card-title">{name}</h2>
                <p>Email: {email}</p>
                <div className="badge btn-outline badge-primary btn-primary">Class-Taken: {classesTaken}</div>
                <div className='flex '>
                    <div className=" ">Class-Name: {classes}</div>

                </div>
            </div>

        </div>
    );
};

export default InstructorCard;
import React from 'react';
import { Link } from 'react-router-dom';
// Image
// Name
// Email
// (optional) Number of Classes taken by the Instructor.
// (optional) Name of the Classes taken by the Instructor.
// (optional) See Classes button to show classes by this Instructor. This will take you to a new link
const CardInstructor = ({ item }) => {
    return (
        <div className="card w-full h-full bg-black bg-opacity-30  shadow-2xl border border-success p-3">
            <figure className='p-2 border border-white rounded-lg'>
                <img className='w-full h-56 rounded-lg  border border-white' src={item?.image} alt="Shoes" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">
                    <span>Name:</span>
                    {item?.name}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <div className="">
                    <span className='text-primary'>Email:</span> {item?.email}

                </div>
                <div>
                    <span className='text-primary'>Class-Name:</span> {item?.classes}
                </div>

                <div className="card-actions justify-between">
                    <div className="badge badge-outline p-3">Classes: {item?.classesTaken}</div>
                    <div className="badge  p-3 bg-secondary badge-outline badge-sm ml-6">Popular</div>

                </div>
                <div className='text-center'>
                    <Link to='/classes' className="btn btn-outline btn-primary btn-sm my-4">Classes</Link>
                </div>
            </div>
        </div >
    );
};

export default CardInstructor;
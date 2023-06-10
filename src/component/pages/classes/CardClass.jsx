import React from 'react';
import Swal from 'sweetalert2';




const CardClass = ({ item }) => {
    // console.log(item);

    const handleBooking = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Please login to Booking the Class!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Log-In'
        }).then((result) => {
            if (result.isConfirmed) {
                // navigate('/login', { state: { from: location } })
            }
        })
    }
    return (
        <div className="card w-full h-full bg-black bg-opacity-30  shadow-2xl border border-success p-3">
            <figure className='p-2 border border-white rounded-lg'>
                <img className='w-full h-56 rounded-lg  border border-white' src={item?.image} alt="Shoes" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">
                    {item?.name}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <div className="">
                    {item?.instructor}
                    <div className="badge badge-secondary badge-outline badge-sm ml-6">Popular</div>
                </div>

                <div className="card-actions justify-between">
                    <div className="badge badge-outline p-3">Seats: {item?.seat}</div>
                    <div className="badge badge-outline p-3">Price: {item?.price}</div>

                </div>
                <div onClick={() => handleBooking(item?._id)} className="btn btn-outline btn-primary btn-sm my-4">BooK-Now</div>
            </div>
        </div>
    );
};

export default CardClass;
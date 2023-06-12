import React, { useContext } from 'react';
import { authContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const AddClass = () => {
    const { user } = useContext(authContext);


    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;

        const instructorName = user.displayName;
        const email = user.email
        const seat = form.seat.value;
        const price = form.price.value;

        const details = form.details.value;
        const image = form.image.value;

        const newClass = { name, instructorName, email, seat, price, details, image }
        console.log(newClass);

        fetch(`http://localhost:11000/classes`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    // alert("New data added successfully");

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Single class data is added',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }
    return (
        <div className='my-5 bg-slate-400 text-white'>
            <form onSubmit={handleForm} className='text-center mx-auto pt-12 flex flex-col justify-center items-center border border-primary '>
                <h1 className='text-4xl text-center font-bold mb-5'>Add Martial Art Class</h1>
                {/* row 1 name and quantity */}
                <div className='lg:md:flex gap-2'>
                    <div className="form-control w-full ">

                        <label className="input-group input-group-vertical">
                            <span>Classs-Name</span>
                            <input type="text" name="name" placeholder="Enter class name" required className="input input-bordered lg:px-24" />
                        </label>
                    </div>
                    <br />

                    <div className="form-control w-full">

                        <label className="input-group input-group-vertical">
                            <span>Seat Quantity</span>
                            <input type="text" placeholder="Enter seat quantity" name="seat" className="input input-bordered lg:px-24" required />
                        </label>
                    </div>
                    <br />

                </div>
                <br />

                {/* row 2 seller name and email */}
                <div className='lg:md:flex gap-2'>
                    <div className="form-control w-full ">

                        <label className="input-group input-group-vertical">
                            <span>Instructor Name</span>
                            <input type="text" name="sellerName" placeholder="Enter instructor name" defaultValue={user?.displayName} required className="input input-bordered lg:px-24" />
                        </label>
                    </div>
                    <br />
                    <div className="form-control w-full ">

                        <label className="input-group input-group-vertical">
                            <span>Instructor email</span>
                            <input type="text" name="sellerName" placeholder="Enter instructor email" defaultValue={user?.email} required className="input input-bordered lg:px-24" />
                        </label>
                    </div>
                    <br />

                </div>
                <br />
                {/* row 3 supplier */}
                <div className='lg:md:flex gap-2'>
                    <div className="form-control w-full ">

                        <label className="input-group input-group-vertical">
                            <span>Class price</span>
                            <input type="text" name="price" placeholder="Enter class price" required className="input input-bordered lg:px-24" />
                        </label>
                    </div>
                    <br />
                    <div className="form-control w-full">

                        <label className="input-group input-group-vertical">
                            <span>Details</span>
                            <input type="text" placeholder="Enter Toy details" name="details" className="input input-bordered lg:px-24" required />
                        </label>
                    </div>
                    <br />

                </div>
                <br />

                {/* row 1 name and quantity */}
                <div className=''>
                    <div className="form-control w-full ">

                        <label className="input-group input-group-vertical w-full">
                            <span>Class image</span>
                            <input type="text" name="image" placeholder="Enter photo URL" required className="input input-bordered lg:px-72" />
                        </label>
                    </div>


                </div>


                <br />
                <div className="form-control w-48 mx-auto">

                    <label className="input-group input-group-vertical">

                        <input type="submit" className="input input-bordered btn  btn-success" value="Add class" required />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default AddClass;
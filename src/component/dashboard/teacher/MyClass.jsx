import React from 'react';
import useClass from '../../../hooks/useClass';

const MyClass = () => {

    const [classes] = useClass();

    return (
        <div className='text-white'>
            <div >
                <div className='flex justify-between my-8 font-bold text-2xl'>
                    <h3>Total Classes: {classes?.length}</h3>
                    <h3>Total Enrolled Student: 10</h3>


                </div>
                <div className="overflow-x-auto ">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Art</th>
                                <th>Class-Name</th>
                                <th>Price</th>
                                <th>Feedback</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                classes?.map((row, index) => <tr

                                    key={row?._id}
                                >
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="rounded-xl w-28 h-28">
                                                    <img src={row?.image} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {row?.name}
                                    </td>
                                    <td>${row?.price}</td>
                                    <td>
                                        <button className='btn btn-secondary btn-sm'>Approved</button>
                                        <textarea name="" className='p-2' value={`Approved by Admin`} id="" cols="20" rows="2"></textarea></td>
                                    <th >
                                        <button className="btn btn-ghost hover:bg-red-600 ">
                                            Update
                                        </button>
                                    </th>
                                </tr>)
                            }


                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClass;
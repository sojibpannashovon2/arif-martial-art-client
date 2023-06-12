import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrash, FaUserEdit, FaUserShield } from 'react-icons/fa';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['user'], async () => {
        const res = await fetch('https://arif-martial-art-server.vercel.app/users')
        return res.json();
    })

    const handleMakeAdmin = (user) => {
        console.log(user);
        fetch(`https://arif-martial-art-server.vercel.app/users/admin/${user?._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now Admin !!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleMakeInstructor = (user) => {
        console.log(user);
        fetch(`https://arif-martial-art-server.vercel.app/users/instructor/${user?._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now Instructor !!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        < div className='text-white'>

            <h2 className='font-bold text-3xl my-4'>Total-Users: {users.length}</h2>

            <div className="overflow-x-auto ">
                <table className="table w-full">
                    {/* head */}
                    <thead className='border borser-primary text-white text-xl'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr className=""
                                key={user?._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>
                                    {
                                        user.role == 'admin' ? "Admin" : <span onClick={() => handleMakeAdmin(user)} className="btn btn-ghost hover:bg-orange-600 ">
                                            <FaUserShield className='w-8 h-8'></FaUserShield>
                                        </span>
                                    }
                                </td>
                                <td>
                                    {
                                        user.role == 'instructor' ? "Instructor" : <span onClick={() => handleMakeInstructor(user)} className="btn btn-ghost hover:bg-orange-600 ">
                                            <FaUserEdit className='w-8 h-8'></FaUserEdit>
                                        </span>
                                    }
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllUsers;
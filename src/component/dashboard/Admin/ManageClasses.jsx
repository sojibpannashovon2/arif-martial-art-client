import React from 'react';
import useClass from '../../../hooks/useClass';

const ManageClasses = () => {

    // Manage Classes: This page will show all the Classes. All the classes added by the Instructor from the Add Class page will be displayed here. Show the following information: Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback).

    const [classes] = useClass()
    console.log(classes);
    return (
        <div>

        </div>
    );
};

export default ManageClasses;
import React from 'react';
import { useInstructor } from '../../../hooks/useInstructor';
import CardInstructor from './CardInstructor';

const Instructors = () => {
    const [teachers] = useInstructor()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 '>
            {
                teachers?.map(item => <CardInstructor
                    key={item?._id}
                    item={item}
                ></CardInstructor>)
            }
        </div>
    );
};

export default Instructors;
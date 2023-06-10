import React from 'react';
import useClass from '../../../hooks/useClass';
import CardClass from './CardClass';

const Classes = () => {
    const [classes] = useClass()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 '>
            {
                classes?.map(item => <CardClass
                    key={item?._id}
                    item={item}
                ></CardClass>)
            }
        </div>
    );
};

export default Classes;
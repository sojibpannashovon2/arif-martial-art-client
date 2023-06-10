import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (

        <div className='my-12 text-center'>
            <div className='font-bold text-pink-600 mb-3'>

                ++++++++ {subHeading} ++++++++</div>

            <h2 className='text-4xl font-bold border-t-4 w-fit mx-auto text-white'>{heading}</h2>
        </div>


    );
};

export default SectionTitle;
import React, { useState } from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';

import PopularCard from './PopularCard';
import useClass from '../../../../hooks/useClass';


const PopularClass = () => {
    const [classes] = useClass()
    const items = classes?.filter(pd => pd?.category === "popular")

    // console.log(classes);
    return (
        <div>
            <SectionTitle
                heading="Popular Classes"
                subHeading={`8am to 9pm`}
            ></SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    items?.map(item => <PopularCard
                        key={item?._id}
                        item={item}
                    >

                    </PopularCard>)
                }
            </div>
            <div className="justify-center text-center my-10 ">
                <button className="btn btn-success btn-outline px-16">Book Now</button>
            </div>

        </div>
    );
};

export default PopularClass;
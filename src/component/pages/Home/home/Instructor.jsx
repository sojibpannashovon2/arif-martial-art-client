import React from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import { useInstructor } from '../../../../hooks/useInstructor';
import InstructorCard from './InstructorCard';

const Instructor = () => {
    const [teachers] = useInstructor();
    // console.log(teachers);
    const items = teachers?.filter(pd => pd?.category === "popular")
    return (
        <div>

            <SectionTitle
                heading={`Popular Instructor`}
                subHeading={`10am to 4pm`}
            ></SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    items?.map(teacher => <InstructorCard
                        key={teacher?._id}
                        teacher={teacher}
                    ></InstructorCard>)
                }
            </div>
            <div className="justify-center text-center my-10 ">
                <button className="btn btn-success btn-outline px-16">Book Now</button>
            </div>


        </div>
    );
};

export default Instructor;
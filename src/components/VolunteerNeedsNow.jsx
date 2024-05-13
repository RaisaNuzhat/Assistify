/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import VolunteerCard from "./VolunteerCard";


const VolunteerNeedsNow = ({volunteers}) => {
    
    return (
        <div className="container mx-auto my-16 flex flex-col justify-center items-center">
              <div className=" grid  lg:grid-cols-2  grid-cols-1 gap-8 ">
           {
            
                volunteers.slice(0, 6).map(volunteer => <VolunteerCard
                 key={volunteer._id}
                volunteer ={volunteer}>
                </VolunteerCard>)
            } 
           </div>
           <Link to='/needvolunteer' className="btn w-1/3 my-10 bg-[#5c715e] text-white">See All</Link>
        </div>
    );
};

export default VolunteerNeedsNow;

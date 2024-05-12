
import { useLoaderData } from "react-router-dom";
import VolunteerCard from "../components/VolunteerCard";

const NeedVolunteer = () => {
    const volunteers = useLoaderData()

    return (
        <div className="container my-10 mx-auto flex justify-center items-center">
             <div className=" grid  lg:grid-cols-2  grid-cols-1 gap-8 ">
           {
            
                volunteers.map(volunteer => <VolunteerCard
                 key={volunteer._id}
                volunteer ={volunteer}>
                </VolunteerCard>)
            }
           </div>
        </div>
    );
};

export default NeedVolunteer;
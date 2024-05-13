/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const VolunteerCard = ({volunteer}) => {
    const {_id,posttitle,image,location,deadline} = volunteer
    return (
        <div>
            <div className="card w-96 bg-[#f2f9f1] shadow-xl font-Roboto">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{posttitle}</h2>
                    <p>{location}</p>
                    <p>{deadline}</p>
                    <div className="card-actions">
                        <Link to={`/viewdetails/${_id}`} className="btn bg-[#5c715e] text-white">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerCard;
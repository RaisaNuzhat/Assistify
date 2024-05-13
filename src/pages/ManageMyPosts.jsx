import MyVolunteerRequests from "./MyVolunteerRequests";
import MyneedVolunteer from "./MyneedVolunteer";


const ManageMyPosts = () => {
    return (
        <div>
            <div className="my-10 mx-auto container">
                <h2 className="lg:text-2xl text-[18px] font-Roboto text-center font-semibold">My Need Volunteer Posts</h2>
                <MyneedVolunteer/>
            </div>
            <div className="my-10 mx-auto container">
                <h2 className="lg:text-2xl text-[18px] font-Roboto text-center font-semibold">My Volunteer Requests</h2>
                <MyVolunteerRequests/>
            </div>
        </div>
    );
};

export default ManageMyPosts;
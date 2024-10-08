import { Helmet } from "react-helmet";
import MyVolunteerRequests from "./MyVolunteerRequests";
import MyneedVolunteer from "./MyneedVolunteer";


const ManageMyPosts = () => {
    return (
        <div className="flex justify-center items-center flex-col mx-auto container font-Roboto">
             <Helmet>
                <title>
                    Assistify|Manage My Posts
                </title>
            </Helmet>
            <div className="my-14 mx-auto container flex justify-center  flex-col">
                <h2 className="lg:text-5xl text-[18px] font-Roboto text-center font-semibold">My Need Volunteer Posts</h2>
                <MyneedVolunteer/>
            </div>
            <div className="my-16 mx-auto container flex justify-center  flex-col">
                <h2 className="lg:text-5xl text-[18px] font-Roboto text-center font-semibold">My Volunteer Requests</h2>
                <MyVolunteerRequests/>
            </div>
        </div>
    );
};

export default ManageMyPosts;
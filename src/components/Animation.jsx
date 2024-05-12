import Lottie from "lottie-react";

import animation from '../assets/Animation - 1715452584028.json'
const Animation = () => {
    return (
        <div className="'flex justify-center container my-10 mx-auto">
            <h3 className="font-Roboto font-semibold lg:text-3xl text-[20px] text-center my-4">
            Join Our Movement


            </h3>
            <p className="font-Roboto font-medium my-6 text-center lg:text-[18px]  text-[16px]">

            Whether you are passionate about environmental sustainability,  social justice, or community development,   there is a place for you here. Join hands with like-minded individuals and organizations as we work together to tackle pressing issues, foster collaboration, and build a brighter future for all.</p>
            <div className="w-1/3 flex justify-center items-center mx-auto" >
            <Lottie animationData={animation} loop={true} />
            </div>
        </div>
    );
};

export default Animation;
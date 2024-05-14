//import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Animation from "../components/Animation";
import Efeature from "../components/Efeature";
import VolunteerNeedsNow from "../components/VolunteerNeedsNow"
import { Helmet } from "react-helmet";
const Home = () => {
    //const volunteers = useLoaderData()
    return (
        <div>
             <Helmet>
                <title>
                    Assistify|Home
                </title>
            </Helmet>
           
            <Efeature/>
            <Banner/>
            <VolunteerNeedsNow />
            <Animation/>
        </div>
    );
};

export default Home;
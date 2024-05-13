import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Animation from "../components/Animation";
import Efeature from "../components/Efeature";
import VolunteerNeedsNow from "../components/VolunteerNeedsNow"
const Home = () => {
    const volunteers = useLoaderData()
    return (
        <div>
            
            <Banner/>
            <Efeature/>
            <VolunteerNeedsNow volunteers={volunteers}/>
            <Animation/>
        </div>
    );
};

export default Home;
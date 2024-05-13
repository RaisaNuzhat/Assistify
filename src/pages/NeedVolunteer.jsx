import { Helmet } from "react-helmet-async";
import VolunteerCard from "../components/VolunteerCard";
import axios from "axios";
import { useEffect, useState } from "react";
const NeedVolunteer = () => {

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/allposts?search=${search}`
            )
            setPosts(data)
        }
        getData()
    }, [search])
    const handleSearch = e => {
        e.preventDefault()

        setSearch(searchText)
    }

    return (
        <div className="container my-10 mx-auto flex flex-col justify-center font-Roboto items-center">
             <Helmet>
                <title>
                    Assistify|Need Volunteer
                </title>
            </Helmet>
            <form onSubmit={handleSearch} >
                <div className='flex p-1 overflow-hidden border rounded-lg  my-20  focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                    <input
                        className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                        type='text'
                        onChange={e => setSearchText(e.target.value)}
                        value={searchText}
                        name='search'
                        placeholder='Enter Job Title'
                        aria-label='Enter Job Title'
                    />

                    <button className='px-1 md:px-4 py-3 text-sm font-medium bg-[#5c715e] tracking-wider text-gray-100 uppercase transition-colors duration-300 transform  rounded-md  focus:outline-none'>
                        Search
                    </button>
                </div>
            </form>
            <div className=" grid  lg:grid-cols-2  grid-cols-1 gap-8 ">
                {

                    posts.map(volunteer => <VolunteerCard
                        key={volunteer._id}
                        volunteer={volunteer}>
                    </VolunteerCard>)
                }
            </div>
        </div>
    );
};

export default NeedVolunteer;
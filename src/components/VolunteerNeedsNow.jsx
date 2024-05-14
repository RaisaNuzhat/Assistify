/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import VolunteerCard from "./VolunteerCard";
import { useEffect, useState } from "react";
import axios from "axios";



const VolunteerNeedsNow = () => {
    const [sort, setSort] = useState('')
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/allposts?sort=${sort}`
            )
            setPosts(data)
        }
        getData()
    }, [sort])

    return (
        <div className="container mx-auto my-16 flex flex-col justify-center items-center font-Roboto">
            
            <h3 className="my-10 lg:text-5xl sm:text-[18px] text-center font-medium text-[#5c715e]">Volunteer Needs Now</h3>
            <select
                onChange={e => {
                    setSort(e.target.value)
                }}
                value={sort}
                name='sort'
                id='sort'
                className='border p-4 rounded-md bg-[#5c715e] my-20 text-white'
            >
                <option value=''>Sort By Deadline</option>
                <option value='asce'>Ascending Order</option>
                <option value='desce'>Descending Order</option>
            </select>
            <div className=" grid  lg:grid-cols-2  grid-cols-1 gap-8 ">
                {

                    posts.slice(0, 6).map( post=> <VolunteerCard
                        key={post._id}
                        volunteer={post}>
                    </VolunteerCard>)
                }
            </div>

            <Link to='/needvolunteer' className="btn w-1/3 my-10 bg-[#5c715e] text-white">See All</Link>
        </div>
    );
};

export default VolunteerNeedsNow;

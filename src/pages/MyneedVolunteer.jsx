import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebaseprovider/FirebaseProvider";
import axios from "axios";
import MyTable from "../components/MyTable";

const MyneedVolunteer = () => {
    const { user } = useContext(AuthContext)
    const [item,setItem] = useState([])
    useEffect(() => {
        const getData =  async() =>
            {
                const {data} = await axios(`${import.meta.env.VITE_API_URL}/volunteer/${user?.email}`,{withCredentials:true})
                setItem(data)
            }
        getData()
    }, [])
    return (
        <div>
             {item.length === 0 ? (
            <p className="text-center lg:text-3xl text-[18px] my-10 font-medium text-gray-500">No Posts Available</p>
        ) : (
             <div className="my-10 mx-auto container flex flex-col justify-center">

            <table className="w-full p-6 text-xs text-center whitespace-nowrap">
                        <colgroup>
                            <col className="w-5" />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-5" />
                        </colgroup>
                         <thead>
                            <tr className="dark:bg-gray-300 text-[#5c715e] font-Roboto">
                                <th className=" px-3 py-2 w-1/4 text-[16px] lg:text-xl font-medium">Post Title</th>
                                <th className=" px-3 py-2 w-1/4 text-[16px] lg:text-xl font-medium">Location</th>
                                <th className=" px-3 py-2 w-1/4 text-[16px] lg:text-xl font-medium">Update</th>
                                <th className=" px-3 py-2 w-1/4 text-[16px] lg:text-xl font-medium">Delete</th>
                                
                               
                            </tr>
                        </thead> 
                        </table>
           
           <div className="container my-10 mx-auto">
           {
            
                item.map(item => <MyTable
                 key={item._id}
                item ={item}>
                </MyTable>)
            }
           </div>
        </div> )}
        </div>
    );
};

export default MyneedVolunteer;
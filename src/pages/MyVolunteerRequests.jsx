import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebaseprovider/FirebaseProvider";
import axios from "axios";
import RequestTable from "../components/RequestTable";
const MyVolunteerRequests = () => {
    const { user } = useContext(AuthContext)
    const [item, setItem] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/request/${user?.email}`)
            setItem(data)
        }
        getData()
    }, [])
    return (
        <div>
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
                            <th className=" px-3 py-2 w-1/5 text-xl font-medium">Post Title</th>
                            <th className=" px-3 py-2 w-1/5 text-xl font-medium">Deadline</th>
                            <th className=" px-3 py-2 w-1/5 text-xl font-medium">Category</th>
                            <th className=" px-3 py-2 w-1/5 text-xl font-medium">Cancel</th>
                        </tr>
                    </thead>
                </table>
                <div className="container my-10 mx-auto">
                    {
                        item.map(item => <RequestTable
                            key={item._id}
                            item={item}>
                        </RequestTable>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyVolunteerRequests;
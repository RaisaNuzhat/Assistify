/* eslint-disable react/prop-types */
const RequestTable = ({ item }) => {
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <div className="overflow-x-auto">
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
                        {/*  */}
                        <tbody className="border-b  dark:bg-gray-50 dark:border-gray-300">
                            <tr>
                                <td className="px-3 py-2 w-1/5 text-[16px] text-center font-medium dark:text-gray-600">
                                    <p className="text-center">{item.posttitle}</p>
                                </td>
                                <td className="px-3 py-2  w-1/5 text-[16px] text-center font-medium dark:text-gray-600">
                                    <p className="text-center">{item.deadline}</p>
                                </td>
                                <td className="px-3 py-2 w-1/5 text-[16px] text-center font-medium dark:text-gray-600">
                                    <p className="text-center">{item.category}</p>
                                </td>
                                <td className="px-3 py-2 w-1/5 text-[16px] text-center font-medium dark:text-gray-600">
                                    <button className="btn  bg-[#5c715e] text-[16px] font-medium text-white">Cancel</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default RequestTable;
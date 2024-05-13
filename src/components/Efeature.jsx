import { Link } from "react-router-dom";


const Efeature = () => {
    return (
        <div className="container my-10 mx-auto flex justify-center">
            <section>
                <div className="dark:bg-violet-600 bg-[#ddeedf] font-Roboto">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
                        <h1 className="lg:text-5xl font-bold leading-none text-[18px] xl:max-w-3xl dark:text-gray-50">Impact Stories</h1>
                        <p className="mt-6 mb-8 lg:text-[18px] text-[14px] sm:mb-12 xl:max-w-3xl dark:text-gray-50">Dive into tales of empowerment, hope, and progress, and witness firsthand the difference we are making together!</p>
                        <div className="flex flex-wrap justify-center">
                            <Link to='/login' type="button" className="px-8 py-3 m-2 lg:text-[18px] text-[14px] lg:font-semibold rounded dark:bg-gray-100 dark:text-gray-900">Get started</Link>
                            <button type="button" className="px-8 py-3 m-2  lg:text-[18px] text-[14px] border rounded dark:border-gray-300 dark:text-gray-50">Learn more</button>
                        </div>
                    </div>
                </div>
                <img src="https://i.ibb.co/QYKNNX4/formphoto.jpg" alt="" className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
            </section>
        </div>
    );
};

export default Efeature;



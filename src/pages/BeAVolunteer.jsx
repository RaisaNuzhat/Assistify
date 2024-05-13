import { useContext} from 'react';

import { AuthContext } from '../firebaseprovider/FirebaseProvider';
import { useLoaderData } from 'react-router-dom';

const BeAVolunteer = () => {
    
    const viewVolunteer = useLoaderData();
    const { posttitle, image, location, description, noofvolunteers, category,orgemail,orgname,deadline } = viewVolunteer
    const {user}  = useContext(AuthContext)
    console.log(user)
    return (
        <div className="container mx-auto flex justify-center my-10 font-Roboto">
            <form>
                <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                    <div>
                        <label className="label">
                            <span className="label-text">Post Title</span>
                        </label>
                        <input type="text" defaultValue={posttitle} disabled name="posttitle" placeholder="Post Title" className="input input-bordered" required />
                    </div>

                    <div>
                        <label className="label">
                            <span title={description} className="label-text">Description</span>
                        </label>
                        <input type="text" defaultValue={description.substring(0,8)} disabled name="description" placeholder="Description" className="input input-bordered" required />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Thumbnail</span>
                        </label>
                        <input type="text" defaultValue={image} disabled name="image" placeholder="Thumbnail URL" className="input input-bordered" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" defaultValue={category} disabled name="category" placeholder="Category" className="input input-bordered" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">No. of Volunteers Needed</span>
                        </label>
                        <input type="text" defaultValue={noofvolunteers} disabled name="noofvolunteers" placeholder="Number" className="input input-bordered" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" defaultValue={location} disabled name="location" placeholder="location" className="input input-bordered" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Organizer Name</span>
                        </label>
                        <input type="text" defaultValue={orgname} disabled name="location" placeholder="location" className="input input-bordered" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Organizer Email</span>
                        </label>
                        <input type="text" defaultValue={orgemail} disabled name="location" placeholder="location" className="input input-bordered" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Volunteer Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} disabled name="vname" placeholder="your name" className="input input-bordered" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Volunteer Email</span>
                        </label>
                        <input type="text" disabled defaultValue={user?.email} name="vemail" placeholder="your email" className="input input-bordered" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Suggestion</span>
                        </label>
                        <input type="text" name="suggestion" placeholder="Suggestion" className="input input-bordered" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <input type="text" defaultValue={"Requested"} name="status" placeholder="status" className="input input-bordered" required />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="text" defaultValue={deadline} disabled name="description" placeholder="Description" className="input input-bordered" required />
                        
                    </div>
                </div>

                <div className='flex justify-end mt-6'>
                    <button
                        type='submit'
                        className='px-8 py-2.5 leading-5  transition-colors duration-300 transform bg-[#b6cdbd]   text-xl font-medium text-white rounded-md hover:bg-[#5c715e] focus:outline-none focus:bg-gray-600'
                    >
                        Request
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BeAVolunteer;
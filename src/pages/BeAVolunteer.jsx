import { useContext} from 'react';
import axios from 'axios'
import { AuthContext } from '../firebaseprovider/FirebaseProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet';
const BeAVolunteer = () => {
    
    const viewVolunteer = useLoaderData();
    const navigate = useNavigate()
    const { posttitle, image, location, description, noofvolunteers, category,orgemail,orgname,deadline } = viewVolunteer
    const {user}  = useContext(AuthContext)
    const handleAddRequest = async (e) => {
        e.preventDefault()
        const form = e.target
        const posttitle = form.posttitle.value
        const image = form.image.value
        const location = form.location.value
        const description = form.description.value;
        const noofvolunteers = form.noofvolunteers.value;
        const category = form.category.value;
        const deadline = form.deadline.value;
        const status = form.status.value;
        const suggestion = form.suggestion.value;
        const orgname = form.orgname.value;
        const orgemail = form.orgemail.value;
        const vemail = user?.email
        const vname = user?.displayName;
        const newrequest= { posttitle, image, location,status,suggestion, description, noofvolunteers, category, deadline, orgname, orgemail,vemail,vname }
        console.log(newrequest)
        //send data to server
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/requests`, newrequest)
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Yayy!',
                    text: 'Request added successfully!',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
                navigate('/myvolunteerrequest')
            }
            
          } catch (err) {
            //toast.success(err.response.data)
            e.target.reset()
          }
    }
    //console.log(user)
    return (
        <div className="container mx-auto flex justify-center my-10 font-Roboto">
             <Helmet>
                <title>
                    Assistify|Be A Volunteer
                </title>
            </Helmet>
            <form onSubmit={handleAddRequest}>
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
                        <input type="text" defaultValue={description} disabled name="description" placeholder="Description" className="input input-bordered" required />
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
                        <input type="text" defaultValue={orgname} disabled name="orgname" placeholder="location" className="input input-bordered" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Organizer Email</span>
                        </label>
                        <input type="text" defaultValue={orgemail} disabled name="orgemail" placeholder="location" className="input input-bordered" required />
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
                        <input type="text" disabled defaultValue={"Requested"} name="status" placeholder="status" className="input input-bordered" required />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="text" defaultValue={deadline} disabled name="deadline" placeholder="Description" className="input input-bordered" required />
                        
                    </div>
                </div>

                <div className='flex justify-end mt-6'>
                    <button
                        type='submit'
                        className='px-8 py-2.5 leading-5  transition-colors duration-300 transform   text-xl font-medium text-white rounded-md bg-[#5c715e] focus:outline-none '
                    >
                        Request
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BeAVolunteer;
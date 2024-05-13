import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Swal from 'sweetalert2'
import { AuthContext } from '../firebaseprovider/FirebaseProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Helmet } from 'react-helmet';
const Update = () => {
    const [startDate, setStartDate] = useState(new Date())
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const updatePost = useLoaderData();
    const { posttitle, image, location, description, noofvolunteers, category, deadline,_id} = updatePost
    const handleUpdate = async (e) =>
        {
        const form = e.target
        e.preventDefault()
        const posttitle = form.posttitle.value
        const image = form.image.value
        const location = form.location.value
        const description = form.description.value;
        const noofvolunteers = form.noofvolunteers.value;
        const category = form.category.value;
        const deadline = form.deadline.value;
        const orgname = form.orgname.value;
        const orgemail = form.orgemail.value;
        const updatedPost = { posttitle, image, location, description, noofvolunteers, category, deadline, orgname, orgemail }
        console.log(updatedPost)
        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/volunteers/${_id}`, updatedPost)
            console.log(data)
            if(data.modifiedCount>0)
                {
                    Swal.fire({
                        title: 'Yayy!',
                        text: 'Post Updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                      navigate('/managemyposts')
                } 

          } catch (err) {
            e.target.reset()
          }
        }
    return (
        <div>
             <Helmet>
                <title>
                    Assistify|Update 
                </title>
            </Helmet>
            <form onSubmit={handleUpdate} className="card-body">
                <div className="form-control font-Roboto ">
                    <label className="label">
                        <span className="label-text">Post Title</span>
                    </label>
                    <input type="text" defaultValue={posttitle} name="posttitle" placeholder="Post Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Thumbnail</span>
                    </label>
                    <input type="text" defaultValue={image} name="image" placeholder="Thumbnail URL" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input type="text" defaultValue={category} name="category" placeholder="Category" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">No. of Volunteers Needed</span>
                    </label>
                    <input type="text" defaultValue={noofvolunteers} name="noofvolunteers" placeholder="Number" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" defaultValue={location} name="location" placeholder="location" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <DatePicker
                        defaultValue={deadline}
                        className='border p-2 rounded-md w-full'
                        name="deadline"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                    />

                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Organizer Name</span>
                    </label>
                    <input disabled defaultValue={user?.displayName} type="text" name="orgname" placeholder="name" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Organizer Email</span>
                    </label>
                    <input disabled defaultValue={user?.email} type="email" name="orgemail" placeholder="email" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#5c715e]   text-2xl font-medium text-white">Update Post</button>
                </div>
            </form>
        </div>
    );
};

export default Update;
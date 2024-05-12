import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Swal from 'sweetalert2'
import { AuthContext } from '../firebaseprovider/FirebaseProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const AddVolunteer = () => {
    const [startDate, setStartDate] = useState(new Date())
    const {user}  = useContext(AuthContext)
    const navigate = useNavigate()
    const handleAddVolunteer = async (e) => {
        e.preventDefault()
        const form = e.target
        const posttitle = form.posttitle.value
        const image = form.image.value
        const location = form.location.value
        const description = form.description.value;
        const noofvolunteers = form.noofvolunteers.value;
        const category = form.category.value;
        const deadline = form.deadline.value;
        const orgname = form.orgname.value;
        const orgemail = form.orgemail.value;
        const newvolunteer = { posttitle, image, location, description, noofvolunteers, category, deadline, orgname, orgemail }
        console.log(newvolunteer)
        //send data to server
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/volunteers`, newvolunteer)
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Yayy!',
                    text: 'Volunteer added successfully!',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
                navigate('/myneedvolunteer')
            }
            
          } catch (err) {
            //toast.success(err.response.data)
            e.target.reset()
          }
     


    }
    return (
        <div>

            <form onSubmit={handleAddVolunteer} className="card-body">
                <div className="form-control font-Roboto ">
                    <label className="label">
                        <span className="label-text">Post Title</span>
                    </label>
                    <input type="text" name="posttitle" placeholder="Post Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Thumbnail</span>
                    </label>
                    <input type="text" name="image" placeholder="Thumbnail URL" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input type="text" name="category" placeholder="Category" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">No. of Volunteers Needed</span>
                    </label>
                    <input type="text" name="noofvolunteers" placeholder="Number" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" name="location" placeholder="location" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <DatePicker
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
                    <button className="btn bg-[#b6cdbd]   text-2xl font-medium text-white">Add Post</button>
                </div>
            </form>
        </div>
    );
};

export default AddVolunteer;

import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
//import Swal from 'sweetalert2'
import { AuthContext } from '../firebaseprovider/FirebaseProvider';
//import { useNavigate } from 'react-router-dom';
//import axios from 'axios'

const Update = () => {
    const [startDate, setStartDate] = useState(new Date())
    const {user}  = useContext(AuthContext)
    //const navigate = useNavigate()
    return (
        <div>
            <form  className="card-body">
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

export default Update;
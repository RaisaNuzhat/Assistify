
import { FcGoogle } from "react-icons/fc";
import { useContext} from "react";
import { AuthContext } from "../firebaseprovider/FirebaseProvider";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'; 
import 'sweetalert2/dist/sweetalert2.css'; 
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const LogIn = () => {
    const { signinUser ,signinWithGoogle} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
 
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state || '/'

    const onSubmit = async (data) => {
        console.log("Form submitted:", data); 
        
        try {
            const result = await signinUser(data.email, data.password);
            console.log("Signin result:", result); 
            
            if (result && result.user) {
                navigate(from);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid email or password',
                    text: 'Please check your email and try again',
                });
            }
        } catch (error) {
            console.error("Error signing in:", error);
           
            Swal.fire({
                icon: 'error',
                title: 'Error signing in',
                text: 'Please try again later',
            });
        }
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 my-14 font-Roboto">
            <Helmet>
                <title>
                    Assistify|Login 
                </title>
            </Helmet>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Login to your  account to explore, connect, and discover. Access your personalized dashboard and start your journey today.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" required />
                                {errors.password && <span className="text-red-500">This field is required</span>}

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#5c715e]  text-white">Login</button>
                            </div>
                            <div className="flex justify-center items-center">
                            <Link to='/register' href="#" className="label-text-alt link link-hover my-3 font-medium text-[18px]">New Here? Register Here</Link>
                            </div>
                        </form>
                        <div className="flex gap-4 my-4 items-center justify-center text-3xl cursor-pointer font-medium">
                            <p className="text-center font-medium text-[18px]">Or , Continue With</p>
                             <button onClick={() => signinWithGoogle() } className="btn-circle border-none bg-transparent p-3"> <FcGoogle /></button>  
                              
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
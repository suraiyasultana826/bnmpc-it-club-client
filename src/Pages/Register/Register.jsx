import register from '../../../src/assets/register-cover.avif'
const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${register})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div className="hero ">
                            <div className="hero-content ">
                                <div className="text-center ">
                                 
                                   
                                </div>
                                <div className="card shrink-0 w-full shadow-2xl bg-transparent">
                                <h1 className="text-5xl font-bold">Register now!</h1>
                                    <form className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white">Name</span>
                                            </label>
                                            <input type="text" placeholder="name" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white">Email</span>
                                            </label>
                                            <input type="email" placeholder="email" className="input input-bordered" required />
                                        </div>
                                      <div className='md:flex gap-5'>
                                      <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white">Class</span>
                                            </label>
                                            <input type="" placeholder="class" className="input input-bordered text-black" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white">Section</span>
                                            </label>
                                            <input type="text" placeholder="section" className="input input-bordered text-black" required />
                                        </div>
                                      </div>
                                       <div className='md:flex gap-5'>
                                       <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white">Roll</span>
                                            </label>
                                            <input type="text" placeholder="roll" className="input input-bordered text-black" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white">Contact Number</span>
                                            </label>
                                            <input type="text" placeholder="contact number" className="input input-bordered text-black" required />
                                           
                                        </div>
                                       </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white">Facebook ID Link</span>
                                            </label>
                                            <input type="text" placeholder="facebook id link" className="input input-bordered text-black" required />
                                           
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn border-none text-white font-bold bg-blue-900">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;
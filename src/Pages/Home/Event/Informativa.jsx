import { useLocation, useNavigate } from 'react-router-dom';
import baner from '../../../assets/InfaBanner.png';
import toast from 'react-hot-toast';
const Informativa = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const registerVolunteer = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const klass = form.class.value;
        const roll = form.roll.value;
        const section = form.section.value;
        const number = form.number.value;
        const select = form.select.value;

        const participant = { name, email, klass, roll, section, number, select };
        console.log(participant);

        fetch('https://bnmpc-itc-server.vercel.app/infoReg', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(participant)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Informativa Registration Successful!')
                    navigate(location?.state ? location.state : '/')
                }
            })
    }

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${baner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div className="card shrink-0 w-full shadow-2xl bg-transparent">
                            <h1 className="text-5xl font-bold">Informativa 3.0</h1>
                            <form onSubmit={registerVolunteer} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                                </div>
                                <div className=''>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                    </div>

                                </div>
                                <div className='md:flex gap-5'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Class</span>
                                        </label>
                                        <input type="" placeholder="class" name='class' className="input input-bordered text-black" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Section</span>
                                        </label>
                                        <input type="text" placeholder="section" name='section' className="input input-bordered text-black" required />
                                    </div>
                                </div>
                                <div className='md:flex gap-5'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Roll</span>
                                        </label>
                                        <input type="text" placeholder="roll" name='roll' className="input input-bordered text-black" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Contact Number</span>
                                        </label>
                                        <input type="text" placeholder="contact number" name='number' className="input input-bordered text-black" required />

                                    </div>
                                </div>


                                {/* <div className="form-control">
                                    <label className="cursor-pointer label">
                                        <span className="label-text text-white">QUIZ</span>
                                        <input name='quiz' type="checkbox" defaultChecked className="checkbox checkbox-info" />
                                    </label>
                                </div> */}






                                <select name='select' className="select select-ghost w-full max-w-xs">
                                    <option disabled selected>Pick Your Segment</option>
                                    <option>QUIZ</option>
                                    <option>MOTION GRAPHICS</option>
                                    <option>EXTEMPORE SPEECH</option>
                                    <option>DIGITAL ART</option>
                                    <option>LOGO DESIGNING</option>
                                    <option>TECH BASED PHOTOGRAPHY</option>
                                    <option>GOOGLE IT</option>
                                    <option>POSTER DESIGNING</option>
                                    <option>TEC H REVIEW</option>
                                    <option>MULTIMEDIA PRESENTATION</option>
                                    <option>TECH MEME</option>
                                    <option>ASTRO AR TECH</option>
                                </select>

                                <div className="form-control mt-6">
                                    {/* <Link to='/gcLink'> */}
                                    <button className="btn border-none text-white font-bold bg-blue-900">Register</button>
                                    {/* </Link> */}

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Informativa;
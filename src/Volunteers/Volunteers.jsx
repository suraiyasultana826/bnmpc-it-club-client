import { useEffect } from "react";
import { useState } from "react";

const Volunteers = () => {
    const [volunteers, setVolunteers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/newVolReg')
        .then(res => res.json())
        .then(data => setVolunteers(data));
    }, [])
    return (
        <div>

            <div>
                <h2>All Volunteers: {volunteers.length}</h2>
               {/* {
                volunteers.map(volunteer => <VolunteerTable key={volunteer._id} volunteer={volunteer}></VolunteerTable>)
               } */}

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Class</th>
        <th>Email</th>
        <th>Contact</th>
        <th>FB ID LINK</th>
        
      </tr>
    </thead>
    <tbody>
      {
        volunteers.map((volunteer, index) => <tr key={volunteer._id}>
            <th>{index+1}</th>
            <td>{volunteer.name}</td>
            <td>{volunteer.klass}</td>
            <td>{volunteer.email}</td>
            <td>{volunteer.number}</td>
            <td>{volunteer.fbId}</td>
            
          </tr>)
      }
      
     
    </tbody>
  </table>
</div>
            </div>
            
        </div>
    );
};

export default Volunteers;
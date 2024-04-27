import { useEffect } from "react";
import { useState } from "react";

const Participants = () => {
    const [participants, setParticipants] = useState([]);
  useEffect(() => {
    fetch('https://bnmpc-itc-server.vercel.app/infoReg')
      .then(res => res.json())
      .then(data => setParticipants(data));
  }, [])
    return (
        <div>

        <div>
          <h2>All Participants: {participants.length}</h2>
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
                  <th>Segment</th>
  
                </tr>
              </thead>
              <tbody>
                {
                  participants.map((participant, index) => <tr key={participant._id}>
                    <th>{index + 1}</th>
                    <td>{participant.name}</td>
                    <td>{participant.klass}</td>
                    <td>{participant.email}</td>
                    <td>{participant.number}</td>
                    <td>{participant.select}</td>
  
                  </tr>)
                }
  
  
              </tbody>
            </table>
          </div>
        </div>
  
      </div>
    );
};

export default Participants;
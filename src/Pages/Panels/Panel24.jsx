import { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Panel24Card from "./Panel24Card";

const Panel24 = () => {
    const [panels24, setPanels24] = useState([]);
    useEffect(() => {
        fetch('https://bnmpc-itc-server.vercel.app/panel24')
        .then(res => res.json())
        .then(data => setPanels24(data));
    }, [])
    return (
        <div>
        <SectionTitle subHeading='Panel Session 2024-25'></SectionTitle> 
       <div className="grid  md:grid-cols-3 ml-20 gap-10 ">
         {
           panels24.map(panel24 => <Panel24Card key={panel24._id} panel24={panel24}></Panel24Card>)
         }
       </div>
       
   </div>
    );
};

export default Panel24;
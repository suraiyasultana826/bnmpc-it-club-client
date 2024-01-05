import { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Panel23Card from "./Panel23Card";

const Panel23 = () => {
    const [panels23, setPanels23] = useState([]);
    useEffect(() => {
        fetch('https://bnmpc-itc-server.vercel.app/panel23')
        .then(res => res.json())
        .then(data => setPanels23(data));
    }, [])
    return (
        <div>
             <SectionTitle subHeading='Panel Session 2023-24'></SectionTitle> 
            <div className="grid  md:grid-cols-3 ml-20 gap-10 ">
              {
                panels23.map(panel23 => <Panel23Card key={panel23._id} panel23={panel23}></Panel23Card>)
              }
            </div>
            
        </div>
    );
};

export default Panel23;
import { useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useEffect } from "react";
import Panels2122Card from "./Panels2122Card";

const Panels2122 = () => {
    const [panels, setPanels] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/panels2122')
        .then(res => res.json())
        .then(data => setPanels(data));
    }, [])
    return (
        <div className="">
           <SectionTitle subHeading='Panel Session 2021-22'></SectionTitle> 
            <div className="grid  md:grid-cols-3 ml-20 gap-10 ">
              {
                panels.map(panel => <Panels2122Card key={panel._id} panel={panel}></Panels2122Card>)
              }
            </div>
        </div>
    );
};

export default Panels2122;
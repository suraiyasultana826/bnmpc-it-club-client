import { useEffect } from "react";
import { useState } from "react";
import GcLink from "./GcLink";

const GcLinkCollection = () => {
    const [gcLink, setGcLink] = useState([]);
  useEffect(() => {
      fetch('http://localhost:5000/gcLink')
      .then(res => res.json())
      .then(data => setGcLink(data));
  }, [])
  console.log(gcLink);
    return (
        <div>
             {
                gcLink && gcLink?.map(link => <GcLink key={link._id} link = {link}></GcLink>)
              }
            
        </div>
    );
};

export default GcLinkCollection;
import { useEffect } from "react";
import { useState } from "react";
import GcLink from "./GcLink";

const GcLinkCollection = () => {
    const [gcLink, setGcLink] = useState([]);
  useEffect(() => {
      fetch('https://bnmpc-itc-server.vercel.app/gcLink')
      .then(res => res.json())
      .then(data => setGcLink(data));
  }, [])
  console.log(gcLink);
    return (
        <div>
          <h1 className="mx-auto text-center my-8 md:font-bold text-blue-800">CONGRATULATIONS! YOU ARE NOW A PART OF BNMPC IT CLUB <br /> CLICK THE BUTTON BELOW TO JOIN OUR OFFICIAL MESSENGER GROUP</h1>
            <div className="grid grid-cols-2">
            {
                gcLink && gcLink?.map(link => <GcLink key={link._id} link = {link}></GcLink>)
              }
            </div>
            
        </div>
    );
};

export default GcLinkCollection;
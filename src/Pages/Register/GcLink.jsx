

const GcLink = ({link}) => {
  const {gcLink, button} = link;
  
    return (
      <div>
        
          <div className="flex justify-center items-center my-20">
 <button className="btn border-none text-white font-bold bg-blue-900"><a href={gcLink}> {button}</a> </button>    
         </div>
      </div>
    );
};

export default GcLink;

const Panels2122Card = ({panel}) => {
    const {name, image, position, university} = panel;
    return (
        <div className="mb-20 h-96 bg-base-100 ">
        <figure><img className="rounded-full w-48" src={image} alt="panel" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="card-title">{position}</p>
          <p>{university}</p>
         
        </div>
      </div>
    );
};

export default Panels2122Card;
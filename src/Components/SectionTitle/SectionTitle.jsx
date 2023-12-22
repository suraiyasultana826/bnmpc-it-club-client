
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-3/12 mx-auto text-center my-8">
            <p className="uppercase text-2xl  font-bold">{subHeading}</p>
            <p className="text-4xl uppercase border-y-4 font-bold ">{heading}</p>
            
        </div>
    );
};

export default SectionTitle;


type Props = {
    title: string;
    name: string;
    description: string;
    video: any;
  };

const Card = (props: Props) => {
    
    return (
        <div className="md:p-10 py-10 w-full md:w-3/6">
        <div className="bg-primary-300 rounded-lg shadow-lg hover:bg-secondary-400">
          <div>
           <video autoPlay
              loop
              muted
              className="rounded-t-lg z-10 w-auto"
            >
              <source
                src={props.video}
                type="video/mp4"
              />
              Your browser does not support the video tag.
           </video>
          </div>
          <div className="p-6">
            <div className="sm:flex sm:justify-between">
              <h2 className="font-bold mb-2 text-2xl text-white">{props.title}</h2>
              <h2 className="font-bold mb-2 text-2xl text-white">{props.name}</h2>
            </div>
            <p className="text-white my-3">{props.description}</p>
          </div>
        </div>
      </div>
    )
}

export default Card
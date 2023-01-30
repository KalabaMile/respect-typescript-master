import { useState, useEffect } from "react";
import alenbodyfat from "@/assets/alenbodyfat.mp4"
import HText from "@/shared/HText";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const cards = [
    {
      title: '1. Body Shape',
      name: 'Nejla Salčin',
      description: 'Description 1',
      video: alenbodyfat,
    },
    {
      title: '2. Lift/Burn',
      name: 'Alen Gluho',
      description: 'Description 2',
      video: alenbodyfat,
    },
    {
      title: '3. Boks',
      name: 'Asmir Vatreš',
      description: 'Description 3',
      video: alenbodyfat,
    },
    {
      title: '4. Tabata',
      name: 'Nejla Salčin',
      description: 'Description 4',
      video: alenbodyfat,
    },
    {
      title: '5. Crossfit',
      name: 'Asmir Vatreš',
      description: 'Description 5',
      video: alenbodyfat,
    },
    {
      title: '6. Body Fat Burning',
      name: 'Alen Gluho',
      description: 'Description 6',
      video: alenbodyfat,
    },
    {
      title: '7. Core 45',
      name: 'Alen Gluho',
      description: 'Description 7',
      video: alenbodyfat,
    },
  ];

  const previous = () => {
    setCurrentIndex(currentIndex === 0 ? cards.length - 1 : currentIndex - 1);
  };

  const next = () => {
    setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    let timerId: any;
    if (!hover) {
      timerId = setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % cards.length);
      }, 4000);
    }
    return () => clearTimeout(timerId);
  }, [currentIndex, hover]);


  return (
      <div className="py-10  md:w-3/6 flex relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <button onClick={previous} className="pr-2"><HText>{"<"}</HText></button>
        <div className="bg-primary-300 rounded-lg w-full shadow-lg hover:bg-secondary-400 text-white hover:text-primary-300">
          <div>
           <video autoPlay
              loop
              muted
              className="rounded-t-lg z-10 w-auto"
            >
              <source
                src={cards[currentIndex].video}
                type="video/mp4"
              />
              Your browser does not support the video tag.
           </video>
          </div>
          <div className="p-6">
            <div className="sm:flex sm:justify-between">
              <h2 className="font-bold mb-2 text-2xl">{cards[currentIndex].title}</h2>
              <h2 className="font-bold mb-2 text-2xl">{cards[currentIndex].name}</h2>
            </div>
            <p className="my-3">{cards[currentIndex].description}</p>
          </div>
        </div>
        <button onClick={next} className="pl-2"><HText>{">"}</HText></button>
      </div>
  );
};

export default Slider;
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
      title: '2. Lift&Burn',
      name: 'Alen Gluho',
      description: 'Lift&Burn je program koji će, oblikovati i ojačati vaše cijelo tijelo veoma brzo!Fenomenalno tijelo se ne rađa već se transformiše, koristeći provjerenu Lift&Burn formulu: THE REP EFFECT. Fokus je na malim kilažama sa velikim brojem pokreta. Zahvaljujući tome, sagorjećete kalorije, povećat će te snagu, brzo i lijepo oblikovati mišiće. Zbog velikog broja ponavljanja, koriste se nešto manje težine od onih koje biste inače stavljali u teretani. Razlog tome je da vježbač uz što pravilniju tehniku završi cijeli trening do kraja uspješno.Programom Lift&Burn možete potrošiti i do 600kcal.',
      video: alenbodyfat,
    },
    {
      title: '3. Boks',
      name: 'Asmir Vatreš',
      description: 'Namijenjen je rekreativcima i početnicima koji žele iskusiti prednosti ovog sporta u ugodnom i prijateljskom okruženju. Naši iskusni treneri će te voditi kroz personalizirane treniranja koja će osnažiti tijelo i um, poboljšati kondiciju i ravnotežu. Boksovanje je učinkovit način za relaksaciju,smanjenje stresa i tjelesne tezine, a s nama ćeš iskusiti sve to uz zabavu i izazov.',
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
      description: 'Kruzni trening baziran na snazi i izdržljivosti pruža kvalitetne treniranja u grupi pod vodstvom iskusnog trenera. Naše dinamične sesije uključuju različite vježbe snage i izdržljivosti za učinkovit i zabavan način poboljšanja fizičke kondicije. S nama ćeš osjetiti rezultate već nakon nekoliko tjedana, a s vremenom ćeš vidjeti značajno poboljšanje snage, izdržljivosti i tjelesne forme',
      video: alenbodyfat,
    },
    {
      title: '6. Body Fat Burning',
      name: 'Alen Gluho',
      description: 'Body Fat Burning je kardio trening inspirisan atletskim sportskim pokretima koji pojačava snagu i izdržljivost.Ovaj visoko intenzivni intervalni trening kombinuje atletske i aerobik pokrete sa pokretima za povećanje snage i stabilnosti.Body Fat Burning sagorijeva veliki broj kalorija(835kcal), zateže i oblikuje figuru, a snagu, izdržljivost i brzinu podiže na viši nivo. Zbog svoje jednostavnosti i lako pamtljivih pokreta, kao i izražene djelotvornosti, ovaj program su prihvatili najrazličitiji tipovi vježbača.',
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
import { useState, useEffect, useRef } from "react";
import alenbodyfat from "@/assets/alenbodyfat.mp4"
import boks from "@/assets/boks.mp4";
import { motion } from "framer-motion";
import TextModal from "@/shared/TextModal";
import { useSwipeable } from 'react-swipeable'
import useMediaQuery from "@/hooks/useMediaQuery";
import gym from "@/assets/gym.jpg"

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const cards = [
    {
      title: 'Body Shape',
      name: 'Nejla Salčin',
      description: 'Body shape je program u kombinacijama sa vjezbama za cijelo tijelo, sa ciljem za poboljšanje zdravlja te cjelokupnog organizma jer su metabolički procesi  neprestano aktivni i tijelo čine izdržljivim, otpornijim i jačim.  Rad na mišićnim grupama više puta nedjeljno održava tijelo aktivnim i spremnijim za nove izazove i napore.  Tijelo je na taj način  u fazi odmora, te samim tim  jednako je važno za mišićni rast i kao i sam trening. Također redovnim treniranjem smanjuje se rizik od povreda, tijelo je zagrijanije,  a rezultati su više nego vidljivi.',
      video: alenbodyfat,
      image: gym
    },
    {
      title: 'Lift&Burn',
      name: 'Alen Gluho',
      description: 'Lift&Burn je program koji će, oblikovati i ojačati vaše cijelo tijelo veoma brzo!Fenomenalno tijelo se ne rađa već se transformiše, koristeći provjerenu Lift&Burn formulu: THE REP EFFECT. Fokus je na malim kilažama sa velikim brojem pokreta. Zahvaljujući tome, sagorjećete kalorije, povećat će te snagu, brzo i lijepo oblikovati mišiće. Zbog velikog broja ponavljanja, koriste se nešto manje težine od onih koje biste inače stavljali u teretani. Razlog tome je da vježbač uz što pravilniju tehniku završi cijeli trening do kraja uspješno.Programom Lift&Burn možete potrošiti i do 600kcal.',
      video: alenbodyfat,
      image: gym
    },
    {
      title: 'Boks',
      name: 'Asmir Vatreš',
      description: 'Namijenjen je rekreativcima i početnicima koji žele iskusiti prednosti ovog sporta u ugodnom i prijateljskom okruženju. Naši iskusni treneri će te voditi kroz personalizirane treniranja koja će osnažiti tijelo i um, poboljšati kondiciju i ravnotežu. Boksovanje je učinkovit način za relaksaciju,smanjenje stresa i tjelesne tezine, a s nama ćeš iskusiti sve to uz zabavu i izazov.',
      video: boks,
      image: gym
    },
    {
      title: 'Tabata',
      name: 'Nejla Salčin',
      description: 'Tabata ima sve prednosti kardio treninga, visokog intenziteta bez opterećenja na zglobove. Poboljšava ukupnu kondiciju izgradnjom snage i smanjenjem masti.',
      video: alenbodyfat,
      image: gym
    },
    {
      title: 'Crossfit',
      name: 'Asmir Vatreš',
      description: 'Kruzni trening baziran na snazi i izdržljivosti pruža kvalitetne treniranja u grupi pod vodstvom iskusnog trenera. Naše dinamične sesije uključuju različite vježbe snage i izdržljivosti za učinkovit i zabavan način poboljšanja fizičke kondicije. S nama ćeš osjetiti rezultate već nakon nekoliko tjedana, a s vremenom ćeš vidjeti značajno poboljšanje snage, izdržljivosti i tjelesne forme',
      video: alenbodyfat,
      image: gym
    },
    {
      title: 'Body Fat Burning',
      name: 'Alen Gluho',
      description: 'Body Fat Burning je kardio trening inspirisan atletskim sportskim pokretima koji pojačava snagu i izdržljivost.Ovaj visoko intenzivni intervalni trening kombinuje atletske i aerobik pokrete sa pokretima za povećanje snage i stabilnosti.Body Fat Burning sagorijeva veliki broj kalorija(835kcal), zateže i oblikuje figuru, a snagu, izdržljivost i brzinu podiže na viši nivo. Zbog svoje jednostavnosti i lako pamtljivih pokreta, kao i izražene djelotvornosti, ovaj program su prihvatili najrazličitiji tipovi vježbača.',
      video: alenbodyfat,
      image: gym
    },
    {
      title: 'Core45',
      name: 'Alen Gluho',
      description: 'CORE45 je trening koji će vas oduševiti ukoliko tragate za kratkim, oštrim programom koji će vas odvesti ka novom nivou fitnesa, a ujedno ojačati i oblikovati vaše tijelo.Program CORE45 je umjerenog do jakog intenziteta i sagorijeva oko 230 kalorija po treningu. Akcenat stavlja na torzo i mišiće koji povezuju gornji i donji dio tijela.Stoga je idealan za zatezanje mišića “CORE-a”, a takođe podiže snagu na viši nivo i smanjuje mogućnost povreda.',
      video: alenbodyfat,
      image: gym
    },
  ];

  const previous = () => {
    setCurrentIndex(currentIndex === 0 ? cards.length - 1 : currentIndex - 1);
  };

  const next = () => {
    setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1);
  };

  const swipeableHandlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1);
    },
    onSwipedRight: () => {
      setCurrentIndex(currentIndex === 0 ? cards.length - 1 : currentIndex - 1);
    },
  });

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
    <div className="py-10 md:pl-10 md:w-3/6 flex relative group "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...swipeableHandlers}>
      {isAboveMediumScreens ?
        <motion.button
          onClick={previous}
          className="pr-2"
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.8 }}>
          <h1 className="basis-3/5 font-montserrat text-3xl font-bold text-gray-200">{"<"}</h1>
        </motion.button>
        : null}
      <div>
        <div className="p-2 flex justify-center items-center rounded-t-lg w-full xs:w-[250px] text-gray-200 bg-hero bg-cover">
          <h2 className="text-xl text-primary-500">{cards[currentIndex].title} - {cards[currentIndex].name}</h2>
        </div>
        <div
          className="relative bg-hero bg-cover rounded-lg w-full shadow-lg text-gray-200">
          <div className="absolute -inset-2 bg-hero rounded-lg blur opacity-10 group-hover:opacity-100 transition duration-500 group-hover:duration-100"></div>
          <img className="relative rounded-tr-lg z-10 w-full" loading="lazy" src={cards[currentIndex].image}/>
          <p className="relative p-3 text-primary-500">{`${cards[currentIndex].description.slice(0, 120)}... `}<TextModal video={cards[currentIndex].video} text={cards[currentIndex].description} /></p>
          <p className="relative text-primary-500 pb-2 font-bold text-sm text-center">{`${currentIndex + 1} od ${cards.length}`}</p>
        </div>
      </div>
      {isAboveMediumScreens ?
        <motion.button
          onClick={next}
          className="pl-2"
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.8 }}>
          <h1 className="basis-3/5 font-montserrat text-3xl font-bold text-gray-200">{">"}</h1>
        </motion.button>
        : null
      }
    </div>
  );
};

export default Carousel;
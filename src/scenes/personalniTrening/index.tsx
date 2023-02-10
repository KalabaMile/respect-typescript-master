import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import kondicioni from "@/assets/kondicioni.mp4"
import TextModal from "@/shared/TextModal";
import Gallery from "./Gallery";
import gym from "@/assets/gym.jpg"


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const PersonalniTrening = ({ setSelectedPage }: Props) => {

  return (
    <div className="bg-hero bg-cover">
    <section id="personalnitrening" className="mx-auto w-5/6 py-10 md:py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.PersonalniTrening)}
      >
        <motion.div
          className="md:px-10 md:mt-0 basis-3/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0, duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="basis-3/5 font-montserrat text-3xl font-bold text-primary-500">
            PERSONALNI TRENING
          </h1>
        </motion.div>
        <div className="justify-between md:px-10 gap-10 md:flex mt-10">
          <div
            className="basis-3/6 mt-10 md:mt-0 relative group"
          >
            <div className="w-full xs:w-[180px] flex justify-center items-center bg-hero2 bg-cover rounded-t-lg text-white">
              <h2 className="p-2 text-xl">Kondicioni trening</h2>
            </div>
            <div className="relative bg-hero2 bg-cover rounded-lg w-full shadow-lg text-white">
              <div className="absolute -inset-2 bg-hero2 bg-cover rounded-lg blur opacity-10 group-hover:opacity-100 transition duration-500 group-hover:duration-100"></div>
              <img className="relative rounded-tr-lg z-10 w-full" loading="lazy" src={gym}/>
              <p className="relative p-3">
                Našom metodom rada dolazi do porasta aerobnih i anaerobnih sposobnosti, razvoja snage mišića sa ili bez povećanja mase mišića, kao i do unapređenja... <TextModal video={kondicioni} text="Našom metodom rada dolazi do porasta aerobnih i anaerobnih sposobnosti, razvoja snage mišića sa ili bez povećanja mase mišića, kao i do unapređenja fleksibilnosti. Drugim riječima, primjenom naše metode rada sportisti dostižu visok nivo bazičnih fizičkih kvaliteta. Prednost naše metode rada ogleda se u tome što se nakon uspostavljanja dovoljnog nivoa bazične fizičke pripremljenosti primenjuju specifična trenažna sredstva koja znatno unapređuju sportski nastup u datom sportu. Tako se intenzitet, trajanje i frekvencija aerobnog ili anaerobnog tipa aktivnosti kreiraju na osnovu nivoa ispoljavanja tih karakteristika tokom takmičenja. Unapređuje se brzina, agilnost, koordinacija, izdržljivost, snaga, fleksibilnost zatim se usljed primjene specifičnih vježbi razvijaju i specifični obrasci kretanja datog sporta, pa čak i zahtjevi za specifične pozicije u timu." />
              </p>
            </div>
          </div>
          <div
            className="basis-3/6 mt-10 md:mt-0 relative group"
          >
            <div className=" w-full xs:w-[180px] flex justify-center items-center bg-hero2 bg-cover rounded-t-lg text-white">
              <h2 className="p-2 text-xl">Trening 1:1</h2>
            </div>
            <div className="relative bg-hero2 bg-cover rounded-lg w-full shadow-lg text-white">
              <div className="absolute -inset-2 bg-hero2 rounded-lg blur opacity-10 group-hover:opacity-100 transition duration-500 group-hover:duration-100"></div>
              <img className="relative rounded-tr-lg z-10 w-full" loading="lazy" src={gym}/>
              <div>
                <p className="relative p-3">
                  Našom metodom rada dolazi do porasta aerobnih i anaerobnih sposobnosti, razvoja snage mišića sa ili bez povećanja mase mišića, kao i do unapređenja... <TextModal video={kondicioni} text="Našom metodom rada dolazi do porasta aerobnih i anaerobnih sposobnosti, razvoja snage mišića sa ili bez povećanja mase mišića, kao i do unapređenja fleksibilnosti. Drugim riječima, primjenom naše metode rada sportisti dostižu visok nivo bazičnih fizičkih kvaliteta. Prednost naše metode rada ogleda se u tome što se nakon uspostavljanja dovoljnog nivoa bazične fizičke pripremljenosti primenjuju specifična trenažna sredstva koja znatno unapređuju sportski nastup u datom sportu. Tako se intenzitet, trajanje i frekvencija aerobnog ili anaerobnog tipa aktivnosti kreiraju na osnovu nivoa ispoljavanja tih karakteristika tokom takmičenja. Unapređuje se brzina, agilnost, koordinacija, izdržljivost, snaga, fleksibilnost zatim se usljed primjene specifičnih vježbi razvijaju i specifični obrasci kretanja datog sporta, pa čak i zahtjevi za specifične pozicije u timu." />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-10 pb-5">
          <h2 className="text-2xl text-primary-500">TRANSFORMACIJE</h2>
        </div>
        <Gallery />
      </motion.div>
    </section>
    </div>
  );
};

export default PersonalniTrening;

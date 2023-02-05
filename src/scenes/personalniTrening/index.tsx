import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import kondicioni from "@/assets/kondicioni.mp4"
import TextModal from "@/shared/TextModal";
import Gallery from "./Gallery";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const PersonalniTrening = ({ setSelectedPage }: Props) => {

  return (
    <section id="personalnitrening" className="mx-auto w-5/6 pt-20">
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
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            PERSONALNI TRENING
          </HText>
        </motion.div>
        <div className="justify-between md:px-10 gap-10 md:flex mt-10">
          <div
            className="relative basis-3/6 mt-10 md:mt-0"
          >
            <div className="w-[180px] flex justify-center items-center bg-primary-500 rounded-t-lg text-white">
                <h2 className="p-2 text-xl">Kondicioni trening</h2>
              </div>
            <motion.div className="bg-primary-500 rounded-lg w-full shadow-lg text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0, duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              
              <video autoPlay
                loop
                muted
                className=" rounded-tr-lg z-10 w-auto"
              >
                <source
                  src={kondicioni}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div>
                <p className="p-3">
                  Našom metodom rada dolazi do porasta aerobnih i anaerobnih sposobnosti, razvoja snage mišića sa ili bez povećanja mase mišića, kao i do unapređenja... <TextModal video={kondicioni} text="Našom metodom rada dolazi do porasta aerobnih i anaerobnih sposobnosti, razvoja snage mišića sa ili bez povećanja mase mišića, kao i do unapređenja fleksibilnosti. Drugim riječima, primjenom naše metode rada sportisti dostižu visok nivo bazičnih fizičkih kvaliteta. Prednost naše metode rada ogleda se u tome što se nakon uspostavljanja dovoljnog nivoa bazične fizičke pripremljenosti primenjuju specifična trenažna sredstva koja znatno unapređuju sportski nastup u datom sportu. Tako se intenzitet, trajanje i frekvencija aerobnog ili anaerobnog tipa aktivnosti kreiraju na osnovu nivoa ispoljavanja tih karakteristika tokom takmičenja. Unapređuje se brzina, agilnost, koordinacija, izdržljivost, snaga, fleksibilnost zatim se usljed primjene specifičnih vježbi razvijaju i specifični obrasci kretanja datog sporta, pa čak i zahtjevi za specifične pozicije u timu." />
                </p>
              </div>
            </motion.div>
          </div>
          <div
            className="relative basis-3/6 mt-10 md:mt-0"
          >
            <div className="w-[180px] flex justify-center items-center bg-primary-500 rounded-t-lg text-white">
                <h2 className="p-2 text-xl">Neki drugi trening</h2>
              </div>
            <motion.div className="bg-primary-500 rounded-lg w-full shadow-lg text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0, duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              
              <video autoPlay
                loop
                muted
                className=" rounded-tr-lg z-10 w-auto"
              >
                <source
                  src={kondicioni}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div>
                <p className="p-3">
                  Našom metodom rada dolazi do porasta aerobnih i anaerobnih sposobnosti, razvoja snage mišića sa ili bez povećanja mase mišića, kao i do unapređenja... <TextModal video={kondicioni} text="Našom metodom rada dolazi do porasta aerobnih i anaerobnih sposobnosti, razvoja snage mišića sa ili bez povećanja mase mišića, kao i do unapređenja fleksibilnosti. Drugim riječima, primjenom naše metode rada sportisti dostižu visok nivo bazičnih fizičkih kvaliteta. Prednost naše metode rada ogleda se u tome što se nakon uspostavljanja dovoljnog nivoa bazične fizičke pripremljenosti primenjuju specifična trenažna sredstva koja znatno unapređuju sportski nastup u datom sportu. Tako se intenzitet, trajanje i frekvencija aerobnog ili anaerobnog tipa aktivnosti kreiraju na osnovu nivoa ispoljavanja tih karakteristika tokom takmičenja. Unapređuje se brzina, agilnost, koordinacija, izdržljivost, snaga, fleksibilnost zatim se usljed primjene specifičnih vježbi razvijaju i specifični obrasci kretanja datog sporta, pa čak i zahtjevi za specifične pozicije u timu." />
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center pt-10 pb-5">
          <h2 className="text-2xl text-primary-300">TRANSFORMACIJE</h2>
        </div>
        <Gallery />
      </motion.div>
    </section>
  );
};

export default PersonalniTrening;

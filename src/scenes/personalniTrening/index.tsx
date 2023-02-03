import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import kondicioni from "@/assets/kondicioni.mp4"
import TextModal from "@/shared/TextModal";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const PersonalniTrening = ({ setSelectedPage }: Props) => {

  return (
    <section id="personalnitrening" className="mx-auto w-5/6 py-20">
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
        <div className="justify-between gap-10 md:flex mt-10">
          <div
            className="relative basis-3/6 mt-10 md:mt-0"
          >
            <motion.div className="bg-primary-300 rounded-lg w-full shadow-lg text-white"
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
                className="rounded-t-lg z-10 w-auto"
              >
                <source
                  src={kondicioni}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div>
                <h2 className="font-bold p-3 text-2xl">Kondicioni trening</h2>
                <p className="p-3">
                  Našom metodom rada dolazi do porasta aerobnih i anaerobnih sposobnosti, razvoja snage mišića sa ili bez povećanja mase mišića, kao i do unapređenja... <TextModal video={kondicioni} text="Našom metodom rada dolazi do porasta aerobnih i anaerobnih sposobnosti, razvoja snage mišića sa ili bez povećanja mase mišića, kao i do unapređenja fleksibilnosti. Drugim riječima, primjenom naše metode rada sportisti dostižu visok nivo bazičnih fizičkih kvaliteta. Prednost naše metode rada ogleda se u tome što se nakon uspostavljanja dovoljnog nivoa bazične fizičke pripremljenosti primenjuju specifična trenažna sredstva koja znatno unapređuju sportski nastup u datom sportu. Tako se intenzitet, trajanje i frekvencija aerobnog ili anaerobnog tipa aktivnosti kreiraju na osnovu nivoa ispoljavanja tih karakteristika tokom takmičenja. Unapređuje se brzina, agilnost, koordinacija, izdržljivost, snaga, fleksibilnost zatim se usljed primjene specifičnih vježbi razvijaju i specifični obrasci kretanja datog sporta, pa čak i zahtjevi za specifične pozicije u timu." />
                </p>
              </div>
            </motion.div>
          </div>
          <div
            className="relative basis-3/6 mt-10 md:mt-0"
          >
            <motion.div className="bg-primary-300 rounded-lg w-full shadow-lg text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0, duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <video autoPlay
                loop
                muted
                className="rounded-t-lg z-10 w-auto"
              >
                <source
                  src={kondicioni}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div>
                <h2 className="font-bold p-3 text-2xl">Neki drugi trening</h2>
                <p className="p-3">
                  Našom metodom rada dolazi do porasta aerobnih i anaerobnih sposobnosti, razvoja snage mišića sa ili bez povećanja mase mišića, kao i do unapređenja... <TextModal video={kondicioni} text="Našom metodom rada dolazi do porasta aerobnih i anaerobnih sposobnosti, razvoja snage mišića sa ili bez povećanja mase mišića, kao i do unapređenja fleksibilnosti. Drugim riječima, primjenom naše metode rada sportisti dostižu visok nivo bazičnih fizičkih kvaliteta. Prednost naše metode rada ogleda se u tome što se nakon uspostavljanja dovoljnog nivoa bazične fizičke pripremljenosti primenjuju specifična trenažna sredstva koja znatno unapređuju sportski nastup u datom sportu. Tako se intenzitet, trajanje i frekvencija aerobnog ili anaerobnog tipa aktivnosti kreiraju na osnovu nivoa ispoljavanja tih karakteristika tokom takmičenja. Unapređuje se brzina, agilnost, koordinacija, izdržljivost, snaga, fleksibilnost zatim se usljed primjene specifičnih vježbi razvijaju i specifični obrasci kretanja datog sporta, pa čak i zahtjevi za specifične pozicije u timu." />
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PersonalniTrening;

import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import kondicioni from "@/assets/kondicioni.mp4"


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const PersonalniTrening = ({ setSelectedPage }: Props) => {

  return (
    <section id="personalnitrening" className="mx-auto w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.PersonalniTrening)}
      >

        {/* FORM AND IMAGE */}
        <div className="justify-between gap-8 md:flex mt-10">
          <motion.div
            className="md:px-10 mt-10 md:mt-0 basis-3/6"
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
            <p className="mt-10 text-primary-300">
              Našom metodom rada dolazi do porasta aerobnih i anaerobnih sposobnosti, razvoja snage mišića sa ili bez povećanja mase mišića, kao i do unapređenja fleksibilnosti. Drugim riječima, primjenom naše metode rada sportisti dostižu visok nivo bazičnih fizičkih kvaliteta. Prednost naše metode rada ogleda se u tome što se nakon uspostavljanja dovoljnog nivoa bazične fizičke pripremljenosti primenjuju specifična trenažna sredstva koja znatno unapređuju sportski nastup u datom sportu. Tako se intenzitet, trajanje i frekvencija aerobnog ili anaerobnog tipa aktivnosti kreiraju na osnovu nivoa ispoljavanja tih karakteristika tokom takmičenja. Unapređuje se brzina, agilnost, koordinacija, izdržljivost, snaga, fleksibilnost zatim se usljed primjene specifičnih vježbi razvijaju i specifični obrasci kretanja datog sporta, pa čak i zahtjevi za specifične pozicije u timu.
            </p>
          </motion.div>
          <div
            className="relative basis-3/6 mt-10 md:mt-20"
          >
            <video autoPlay
              loop
              muted
              className="rounded-lg z-10 w-auto"
            >
              <source
                src={kondicioni}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PersonalniTrening;

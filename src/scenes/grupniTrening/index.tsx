import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Slider from "./Slider";
import RasporedTreninga from "./RasporedTreninga";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const GrupniTrening = ({ setSelectedPage }: Props) => {

  return (
    <section id="grupnitrening" className="mx-auto w-5/6 py-10">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.GrupniTrening)}
      >
        <div className="md:flex">
          <motion.div
            className="relative md:mt-10 md:pl-10 md:w-3/6 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0, duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>GRUPNI TRENING</HText>
            <RasporedTreninga />
          </motion.div>
          <Slider />
        </div>
      </motion.div>
    </section >
  );
};

export default GrupniTrening;

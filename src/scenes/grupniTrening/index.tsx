import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import alenbodyfat from "@/assets/alenbodyfat.mp4"
import Card from "./Slider";
import Slider from "./Slider";

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
            <p className="pt-5 md:mt-5 md:mr-10 text-primary-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas, eos asperiores accusamus rerum nam voluptatibus maiores repellat ducimus sequi iure vero, officia voluptates praesentium culpa, odit cumque aut porro!
            </p>
        </motion.div>
        <Slider/>
        </div>
      </motion.div>
    </section >
  );
};

export default GrupniTrening;

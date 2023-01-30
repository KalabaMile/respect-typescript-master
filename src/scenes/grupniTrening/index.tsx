import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import alenbodyfat from "@/assets/alenbodyfat.mp4"
import Card from "./Card";

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
          className="relative md:mt-10 md:pl-10 mx-auto md:w-3/6 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
            <HText>GRUPNI TRENING</HText>
            <p className="pt-5 md:mt-5 md:mr-10 text-primary-500 before:absolute before:-bottom-0 before:-right-1 before:z-[-1] md:before:content-respecttext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas, eos asperiores accusamus rerum nam voluptatibus maiores repellat ducimus sequi iure vero, officia voluptates praesentium culpa, odit cumque aut porro!
            </p>
        </motion.div>
        <Card 
        name="Alen Gluho" 
        video={alenbodyfat} 
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum error blanditiis, molestiae quis quo mollitia fuga adipisci ratione labore quasi."
        title="Lift/Burn"
        />
        </div>
      </motion.div>
    </section >
  );
};

export default GrupniTrening;

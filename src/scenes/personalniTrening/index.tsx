import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import personalniTrening from "@/assets/personalnitrening.png"


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const PersonalniTrening = ({ setSelectedPage }: Props) => {

  return (
    <section id="personalnitrening" className="mx-auto w-5/6 pb-10">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.PersonalniTrening)}
      >

        {/* FORM AND IMAGE */}
        <div className="justify-between gap-8 md:flex">
          <motion.div
            className="relative basis-3/6 mt-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="w-full px-5">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={personalniTrening}
              />
            </div>
          </motion.div>

          <motion.div
            className="mt-10 md:mt-40 md:pr-10 basis-3/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>
              PERSONALNI TRENING
            </HText>
            <p className="md:mt-20 mt-10 text-primary-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tenetur fuga sint cum ex, eius accusamus impedit nobis officiis exercitationem animi eos sit beatae numquam quo id, dolorum voluptate nulla doloremque dignissimos odit! Ipsam ducimus dolor, porro a velit blanditiis hic quod molestias officiis fugit minus impedit nemo rerum alias.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PersonalniTrening;

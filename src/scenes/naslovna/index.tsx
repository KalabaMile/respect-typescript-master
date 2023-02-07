import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import perutnina from "@/assets/perutnina3.png"
import gymbeam from "@/assets/GymBeam3.png"
import jana from "@/assets/jana3.png"
import berlin from "@/assets/berlin3.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Naslovna = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="naslovna" className="gap-16 bg-hero bg-cover py-10 md:h-full md:pb-0">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Naslovna)}
      >
        <div className="z-10 mt-20 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex justify-center md:justify-start md:ml-5 md:pb-10">
              <img alt="home-page-text" src={HomePageText} />
            </div>
            {isAboveMediumScreens ? <p className="ml-10 text-primary-500">
              Započnite s treninzima kako biste ojačali tijelo i duh, podigli samopouzdanje i stvorili zdravije navike. Pokrenite put ka zdravijem i sretnijem životu već danas!
            </p>: null}
          </motion.div>
          <motion.div
            className="md:ml-10 ml-3 mt-8 flex justify-center md:justify-start items-center text-center gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              PRIDRUŽI SE TIMU
            </ActionButton>
            <a target="_blank"
              className="text-white bg-hero2 bg-cover hover:opacity-50 rounded-lg px-2 py-2 text-center w-[160px]"
              href="https://view.ricoh360.com/f7cb7705-2476-4467-88a0-d3fefae23c89/c80000c8-6ae6-459d-8976-05cd2ba9e688?type=compact"
            >360° PREGLED
            </a>
          </motion.div>
        </div>
        <div
          className="mt-10 flex basis-3/5 justify-center md:z-10
              md:ml-20 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>
      {isAboveMediumScreens && (
        <motion.div
          className="h-[125px] w-full bg-gray-200 py-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div
            className="mx-auto w-5/6">
            <div className="flex items-center justify-between mt-1 gap-8 h-[95px]">
              <img alt="redbull-sponsor" src={perutnina} />
              <img alt="forbes-sponsor" src={jana} />
              <img alt="fortune-sponsor" src={gymbeam} />
              <img alt="forbes-sponsor" src={berlin} />
              <img alt="redbull-sponsor" src={SponsorRedBull} />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Naslovna;

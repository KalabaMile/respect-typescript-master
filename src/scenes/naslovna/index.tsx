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
    <section id="naslovna" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Naslovna)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
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
              <div className="relative md:right-10 bottom-10">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            <p className="text-primary-300">
              Započnite s treninzima kako biste ojačali tijelo i duh, podigli samopouzdanje i stvorili zdravije navike. Pokrenite put ka zdravijem i sretnijem životu već danas!
            </p>
          </motion.div>
          <motion.div
            className="mt-8 flex items-center gap-5"
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
              className="text-white bg-primary-300 hover:bg-secondary-500 rounded-lg px-5 py-2"
              href="https://view.ricoh360.com/f7cb7705-2476-4467-88a0-d3fefae23c89/c80000c8-6ae6-459d-8976-05cd2ba9e688?type=compact"
            >360° PREGLED</a>
            <AnchorLink
              className="text-sm font-bold text-primary-500 hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Onama)}
              href={`#${SelectedPage.Onama}`}
            >
              <p>Saznaj više</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div
          className="mt-10 flex basis-3/5 justify-center md:z-10
              md:ml-30 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>
      {isAboveMediumScreens && (
        <div className="h-[125px] w-full bg-gray-200 py-3">
          <div className="mx-auto w-5/6">
            <div className="flex items-center justify-between mt-1 gap-8 h-[95px]">
              <img alt="redbull-sponsor" src={perutnina} />
              <img alt="forbes-sponsor" src={jana} />
              <img alt="fortune-sponsor" src={gymbeam} />
              <img alt="forbes-sponsor" src={berlin} />
              <img alt="redbull-sponsor" src={SponsorRedBull} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Naslovna;

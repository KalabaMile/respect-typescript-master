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
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Naslovna = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const isAboveUltraSmallScreens = useMediaQuery("(min-width:300px)");

  return (
    <section id="naslovna" className="gap-16 bg-hero bg-cover py-10 md:h-full md:pb-0">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Naslovna)}
      >
        <div className="z-10 mt-20 md:basis-3/6">
          <div
            className="md:-mt-20"
          >
            <div className="flex justify-center md:justify-start md:ml-5 md:pb-5">
              <img alt="home-page-text" src={HomePageText} />
            </div>
            {isAboveMediumScreens ? <p className="ml-10 text-primary-500">
              Započnite s treninzima kako biste ojačali tijelo i duh, podigli samopouzdanje i stvorili zdravije navike. Pokrenite put ka zdravijem i sretnijem životu već danas!
            </p> : null}
          </div>
          <div
            className="md:ml-10 mt-8 flex justify-center md:justify-start items-center text-center gap-0 sm:gap-4"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              UČLANI SE
            </ActionButton>
            {isAboveUltraSmallScreens ?
              <a target="_blank"
                rel="noopener"
                className="text-white bg-primary-500 hover:opacity-50 sm:rounded-lg px-2 xs:px-4 py-2 text-center"
                href="https://view.ricoh360.com/f7cb7705-2476-4467-88a0-d3fefae23c89/c80000c8-6ae6-459d-8976-05cd2ba9e688?type=compact"
              >360° PREGLED
              </a>
              : null}
            <a target="_blank"
              rel="noopener"
              className="text-white bg-primary-500 hover:opacity-50 rounded-r-lg sm:rounded-lg border-l border-gray-200 sm:border-none px-2 xs:px-4 py-2 text-center"
              href="https://myalbum.com/album/uUc8e84PCHHeYe/?invite=23f22415-5a06-4acf-8076-d4809c3838cd"
            >GALERIJA
            </a>
          </div>
        </div>
        <div
          className="mt-10 flex basis-3/6 justify-center md:z-10
              md:ml-10 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>
      {isAboveMediumScreens && (
        <motion.div
          className="h-[125px] w-full bg-gray-200 bg-opacity-60 py-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
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

import Video from "@/assets/video.mp4"
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Onama = ({ setSelectedPage }: Props) => {

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="onama" className="mx-auto min-h-full w-6/6">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Onama)}
      >
        <header className="relative flex items-center justify-center h-screen overflow-hidden">
          <div className="mx-20 relative z-30 p-5 text-2xl text-white bg-primary-100 bg-opacity-50 rounded-xl">
            <div>
              {/* TITLE */}
              <div className="relative">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-secondary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          >
            <source
              src={Video}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </header>
        {isAboveMediumScreens ? (<div className="flex items-center justify-center">
          <iframe width="1600" height="700" src="https://view.ricoh360.com/f7cb7705-2476-4467-88a0-d3fefae23c89/c80000c8-6ae6-459d-8976-05cd2ba9e688?type=compact"></iframe>
        </div>): <div className="flex items-center justify-center">
          <iframe width="1600" height="500" src="https://view.ricoh360.com/f7cb7705-2476-4467-88a0-d3fefae23c89/c80000c8-6ae6-459d-8976-05cd2ba9e688?type=compact"></iframe>
        </div>}
      </motion.div>
    </section>
  );
};

export default Onama;

import Video from "@/assets/video.mp4"
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
          <div className="mx-20 relative z-30 p-5 text-2xl text-center bg-primary-100 bg-opacity-50 rounded-xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h1 className="basis-3/5 font-montserrat text-3xl font-bold text-primary-500">
                SPORTSKA AKADEMIJA
                <span className="text-red-600"> RESPECT </span>
              </h1>
            </motion.div>
          </div>
          <video
            autoPlay
            loop
            muted
            className="absolute z-10 min-w-full min-h-full max-w-none overflow-x-hidden"
          >
            <source
              src={Video}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </header>
      </motion.div>
    </section>
  );
};

export default Onama;

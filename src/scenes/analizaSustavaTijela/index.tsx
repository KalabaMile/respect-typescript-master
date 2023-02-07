import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import inbody from "@/assets/inbody.mp4"
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const AnalizaSustavaTijela = ({ setSelectedPage }: Props) => {
    return (
        <div className="bg-hero2 bg-cover">
        <section id="analizasustavatijela" className="mx-auto w-5/6 py-10 md:py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.AnalizaSustavaTijela)}
            >
                <div className="md:flex md:justify-between">
                    <motion.div
                        className="md:mt-10 md:pl-10 basis-2/6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0, duration: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <HText classname="basis-3/5 font-montserrat text-3xl font-bold text-secondary-500">
                            ANALIZA SUSTAVA TIJELA
                        </HText>
                        <p className="mt-5 md:mt-10 text-secondary-500">
                            InBody je vrhunski uređaj za analizu sastava tijela za tržište zdravlja i fitnesa. Izgrađen na ugledu i izvrsnosti, InBody je posvećen da inspiriše ljude i motiviše ih da vode zdraviji život. Za manje od 60 sekundi, InBody pruža tačna i objektivna mjerenja za procjenu tjelesne kompozicije.
                        </p>
                    </motion.div>
                    <div className="relative group my-10 md:ml-10 basis-4/6">
                        <div className="rounded-lg md:flex">
                            <div className="absolute -inset-2 bg-secondary-500 rounded-lg blur opacity-10 group-hover:opacity-100 transition duration-500 group-hover:duration-100"></div>
                            <video autoPlay
                                loop
                                controls
                                muted
                                className="relative rounded-lg z-10 w-auto"
                            >
                                <source
                                    src={inbody}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
        </div>
    );
}

export default AnalizaSustavaTijela
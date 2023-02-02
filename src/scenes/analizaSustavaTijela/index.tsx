import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import inbody from "@/assets/inbody.mp4"
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const AnalizaSustavaTijela = ({ setSelectedPage }: Props) => {
    return (
        <section id="analizasustavatijela" className="mx-auto w-5/6 pb-10">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.AnalizaSustavaTijela)}
            >
                <div className="md:flex md:justify-between">
                    <motion.div
                        className="mt-10 md:mt-10 md:pl-10 basis-2/6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0, duration: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <HText>
                            ANALIZA SUSTAVA TIJELA
                        </HText>
                        <p className="mt-10 text-primary-300">
                            InBody je vrhunski uređaj za analizu sastava tijela za tržište zdravlja i fitnesa. Izgrađen na ugledu i izvrsnosti, InBody je posvećen da inspiriše ljude i motiviše ih da vode zdraviji život. Za manje od 60 sekundi, InBody pruža tačna i objektivna mjerenja za procjenu tjelesne kompozicije.
                        </p>
                    </motion.div>
                    <div className="py-10 md:p-10 basis-4/6">
                        <div className="rounded-lg md:flex">
                            <div
                            >
                                <video autoPlay
                                    loop
                                    muted
                                    className="rounded-lg z-10 w-auto"
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
                </div>
            </motion.div>
        </section>
    );
}

export default AnalizaSustavaTijela
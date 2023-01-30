import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import malirespektaši from "@/assets/malirespektaši.mp4"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const MaliRespektaši = ({ setSelectedPage }: Props) => {
  
    return (
        <section id="malirespektaši" className="mx-auto w-5/6 pb-10">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.MaliRespektaši)}
            >
                <div className="justify-between gap-8 md:flex">
                <div className="md:p-10 py-10 w-full md:w-4/6">
                        <div className="bg-primary-300 rounded-lg shadow-lg">
                            <div
                            >
                                <video autoPlay
                                    loop
                                    muted
                                    className="rounded-lg z-10 w-auto"
                                >
                                    <source
                                        src={malirespektaši}
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>

                            </div>
                        </div>
                    </div>
                    <motion.div
                        className="mt-10 basis-2/6"
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
                            MALI RESPEKTAŠI
                        </HText>
                        <p className="mt-10 text-primary-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tenetur fuga sint cum ex, eius accusamus impedit nobis officiis exercitationem animi eos sit beatae numquam quo id, dolorum voluptate nulla doloremque dignissimos odit! Ipsam ducimus dolor, porro a velit blanditiis hic quod molestias officiis fugit minus impedit nemo rerum alias.
                        </p>
                    </motion.div>
                    
                </div>
            </motion.div>
        </section>
    );
};

export default MaliRespektaši;

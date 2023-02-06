import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import malirespektaši from "@/assets/malirespektaši.mp4"
import TextModal from "@/shared/TextModal";

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
                        <div className="rounded-lg shadow-lg">
                            <video autoPlay
                                loop
                                muted
                                controls
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
                    <motion.div
                        className="md:mt-10 mt-0 basis-2/6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0, duration: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <HText>
                            MALI RESPEKTAŠI
                        </HText>
                        <p className="mt-5 md:mt-10 text-primary-300">
                            Univerzalna škola sporta "Mali respektaši" je program namjenjen za prirodno i zdravo razvijanje psiho-fizičkog razvoja djece od najranijeg uzrasta.
                        </p>
                        <p className="text-primary-300">
                            Škola sporta "Mali respektaši" kombinira  elemente  različitih sportova kako bi Vaša djeca uživala i razvijala što širu motoričku bazu što je jako bitno za... <TextModal video={malirespektaši} text='Univerzalna škola sporta "Mali respektaši" je program namjenjen za prirodno i zdravo razvijanje psiho-fizičkog razvoja djece od najranijeg uzrasta. Škola sporta "Mali respektaši" kombinira  elemente  različitih sportova kako bi Vaša djeca uživala i razvijala što širu motoričku bazu što je jako bitno za dalji razvoj djece. Družimo se i igramo dva puta sedmično, po 1 h vremena.Univerzalna škola sporta "Mali respektaši" poslužit će kao izvrstan temelj za dalje pohađanje sportskih programa vašeg djeteta. Ovaj program je primjeren svakom djetetu, bez obzira na njegove inicijalne sposobnosti, a prvenstveno je usmjeren njihovom sveopćem razvoju.'/> 
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default MaliRespektaši;

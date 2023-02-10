import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import malirespektaši from "@/assets/malirespektaši.mp4"
import TextModal from "@/shared/TextModal";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const MaliRespektaši = ({ setSelectedPage }: Props) => {

    return (
        <div className="bg-hero bg-cover">
            <section id="malirespektaši" className="mx-auto sm:w-5/6 pt-10 sm:py-20">
                <motion.div
                    onViewportEnter={() => setSelectedPage(SelectedPage.MaliRespektaši)}
                >
                    <div className="justify-between gap-8 md:flex">
                        <motion.div
                            className="md:mt-10 mb-10 mx-10 sm:mx-0 basis-2/6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0, duration: 0.3 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <h1 className="basis-3/5 font-montserrat text-3xl font-bold text-primary-500">
                                MALI RESPEKTAŠI
                            </h1>
                            <p className="mt-5 md:mt-10 text-primary-500">
                                Univerzalna škola sporta "Mali respektaši" je program namjenjen za prirodno i zdravo razvijanje psiho-fizičkog razvoja djece od najranijeg uzrasta.
                            </p>
                            <p className="text-primary-500">
                                Škola sporta "Mali respektaši" kombinira  elemente  različitih sportova kako bi Vaša djeca uživala i razvijala što širu motoričku bazu što je jako bitno za... <TextModal video={malirespektaši} text='Univerzalna škola sporta "Mali respektaši" je program namjenjen za prirodno i zdravo razvijanje psiho-fizičkog razvoja djece od najranijeg uzrasta. Škola sporta "Mali respektaši" kombinira  elemente  različitih sportova kako bi Vaša djeca uživala i razvijala što širu motoričku bazu što je jako bitno za dalji razvoj djece. Družimo se i igramo dva puta sedmično, po 1 h vremena.Univerzalna škola sporta "Mali respektaši" poslužit će kao izvrstan temelj za dalje pohađanje sportskih programa vašeg djeteta. Ovaj program je primjeren svakom djetetu, bez obzira na njegove inicijalne sposobnosti, a prvenstveno je usmjeren njihovom sveopćem razvoju.' />
                            </p>
                        </motion.div>
                        <div className="sm:mb-10 md:mt-10 md:mx-10 md:w-4/6 relative group">
                            <div className="rounded-lg shadow-lg">
                                <div className="absolute sm:-inset-2 bg-primary-500 rounded-lg blur opacity-10 group-hover:opacity-100 transition duration-500 group-hover:duration-100"></div>
                                <video autoPlay
                                    loop
                                    muted
                                    controls
                                    className="relative sm:rounded-lg z-10 w-auto"
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
                </motion.div>
            </section>
        </div>
    );
};

export default MaliRespektaši;

import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Kontakt = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white text-white`;

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="kontakt" className="mx-auto w-5/6 pt-10 pb-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Kontakt)}
      >

        {/* FORM AND IMAGE */}
        <div className="justify-between gap-8 md:flex">
          <motion.div
            className="md:pl-10 mt-3 basis-3/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
             <HText>
            VRIJEME JE ZA<span className="" style={{color:"#D2042D"}}> TRENING</span>
          </HText>
          <p className="mt-5 mb-20 text-primary-300">
          Započnite s treninzima kako biste ojačali tijelo i duh, podigli samopouzdanje i stvorili zdravije navike. Učinite dobro za sebe i osjetite snagu i energiju koja dolazi s redovitim treninzima. Pokrenite put ka zdravijem i sretnijem životu već danas!
          </p>
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/mile.kalaba7@gmail.com"
              method="POST"
            >
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "Ovo polje je obavezno."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="IME I PREZIME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
               {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "Ovo polje je obavezno."}
                  {errors.email.type === "pattern" && "Nepostojeća adresa"}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "Ovo polje je obavezno."}
                  {errors.message.type === "maxLength" &&
                    "Maksimalni broj karaktera je 2000."}
                </p>
              )}
              <textarea
                className={inputStyles}
                placeholder="PORUKA"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              
              <div className="flex items-center justify-center">
              <button
                type="submit"
                className="mt-5 rounded-lg text-primary-300 bg-secondary-500 font-bold px-20 py-3 transition duration-500 hover:text-white hover:bg-primary-300"
              >
                POŠALJI
              </button>
              </div>
            </form>
          </motion.div>
          {isAboveMediumScreens ? (
          <motion.div
            className="relative basis-3/6 md:mt-3"
          >
            <div className="w-full px-5 before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-respecttext">
              <img
              className="ml-10 max-h-[600px]"
                src={ContactUsPageGraphic}
                style={{borderRadius: "20px"}}
              />
            </div>
          </motion.div>
          ): ""}
        </div>
      </motion.div>
    </section>
  );
};

export default Kontakt;

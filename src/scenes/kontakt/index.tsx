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
    <div className="bg-hero bg-cover">
    <section id="kontakt" className="mx-auto w-5/6 py-10 md:py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Kontakt)}
      >

        {/* FORM AND IMAGE */}
        <div className="justify-between gap-8 md:flex">
          <div
            className="md:pl-10 mt-3 basis-3/6"
          >
            <HText classname="basis-3/5 font-montserrat text-3xl font-bold text-primary-300">
              VRIJEME JE ZA<span className="" style={{ color: "#D2042D" }}> TRENING</span>
            </HText>
            <p className="mt-5 mb-10 text-primary-300">
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

              <div className="pb-10 md:pb-0 flex items-center justify-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className="mt-5 rounded-lg text-primary-300 bg-secondary-500 font-bold px-20 py-3 hover:text-white hover:bg-primary-300"
                >
                  POŠALJI
                </motion.button>
              </div>
            </form>
          </div>
          {isAboveMediumScreens ? (
            <motion.div
              className="relative basis-3/6 md:mt-3"
            >
              <div className="w-full px-5">
                <img
                  className="ml-10 max-h-[600px]"
                  src={ContactUsPageGraphic}
                  style={{ borderRadius: "20px" }}
                />
              </div>
            </motion.div>
          ) : ""}
        </div>
      </motion.div>
    </section>
    </div>
  );
};

export default Kontakt;

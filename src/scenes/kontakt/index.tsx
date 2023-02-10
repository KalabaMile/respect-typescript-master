import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Kontakt = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-hero2 bg-cover
  px-5 py-3 placeholder-white text-gray-200`;

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
          <div className="md:flex gap-20">
            <div
              className="md:pl-10 basis-3/6"
            >
              <h1 className="font-montserrat text-3xl font-bold text-primary-500 mb-10">
                VRIJEME JE ZA<span className="text-red-600"> TRENING</span>
              </h1>
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
                    className="mt-5 rounded-lg text-white bg-red-600 font-bold px-20 py-3 hover:text-gray-200 hover:bg-primary-500"
                  >
                    POŠALJI
                  </motion.button>
                </div>
              </form>
            </div>
            {isAboveMediumScreens ? (
              <div className="relative basis-3/6">
                <div className="w-full h-full">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.2128272252708!2d18.407997315417145!3d43.872141846263375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758ced461f6c913%3A0x6ba26c1974df69c0!2sSportska%20akademija%20%22Respect%22!5e0!3m2!1sbs!2sba!4v1676036184271!5m2!1sbs!2sba" width="100%" height="100%" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            ) : ""}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Kontakt;

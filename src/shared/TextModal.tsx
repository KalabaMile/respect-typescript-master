import { useState } from "react";
import ActionButton from "./ActionButton";

type Props = {
  text: string;
  video: any;
};
const TextModal = ({ text, video }: Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-transparent text-white hover:text-secondary-500"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Saznaj više
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative flex-auto">
                  <video autoPlay
                    loop
                    muted
                    className="z-10 w-auto"
                  >
                    <source
                      src={video}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>

                </div>
                <div className="relative p-6 flex-auto text-primary-300">
                  {text}
                </div>
                <div className="flex items-center justify-center p-3 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Zatvori
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default TextModal;
import { useState } from "react";

type Props = {
  children: any
};
const GalleryModal = ({ children }: Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <div className="flex justify-center items-center p-4">
      <button
        className="relative bg-transparent text-white w-full"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Pogledaj galeriju
      </button>
      </div>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 md:rounded-lg shadow-lg relative flex flex-col w-full bg-hero2 bg-cover outline-none focus:outline-none">
                <div className="relative flex-auto">
                    {children}
                </div>
                <div className="flex items-center justify-center p-3 border-t border-solid border-gray-200 rounded-b">
                  <button
                    className="text-red-600 w-full background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
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

export default GalleryModal;
import { useState } from "react";

type Props = {
    image: any;
    parent: any;
};
const ImageModal = ({ image, parent }: Props) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div onClick={() => setShowModal(true)}>
                {parent}
            </div>
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="md:rounded-lg shadow-lg relative flex flex-col w-full bg-hero2 bg-cover outline-none focus:outline-none">
                                <div className="relative flex-auto">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full md:rounded-t-lg"
                                        src={image}>
                                    </img>
                                </div>
                                <div className="flex items-center justify-center p-3 rounded-b">
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

export default ImageModal;
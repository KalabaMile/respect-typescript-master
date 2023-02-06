import ImageModal from "@/shared/ImageModal";
import gym from "@/assets/gym.jpg";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import transformacija1 from "@/assets/transformacija1.png";
import { motion } from "framer-motion";

const Gallery = () => {
    const hoverAnimation = "absolute -inset-1 bg-gradient-to-r from-secondary-500 to-primary-300 rounded-lg blur opacity-10 group-hover:opacity-100 transition duration-500 group-hover:duration-100"
    return (
        <div className="container py-2 mx-auto lg:pt-24 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap w-1/2">
                    <div className="w-1/2 p-1 md:p-2 relative group">
                        <ImageModal image={HomePageGraphic}
                            parent={
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className={hoverAnimation}></div>
                                    <a role="button">
                                        <img alt="gallery" className="relative block object-cover object-center w-full h-full rounded-lg"
                                            src={gym}>
                                        </img>
                                    </a>
                                </motion.div>}
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2 relative group">
                        <ImageModal image={HomePageGraphic}
                            parent={
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className={hoverAnimation}></div>
                                    <a role="button">
                                        <img alt="gallery" className="relative block object-cover object-center w-full h-full rounded-lg"
                                            src={gym}>
                                        </img>
                                    </a>
                                </motion.div>}
                        />
                    </div>
                    <div className="w-full p-1 md:p-2 relative group">
                        <ImageModal image={transformacija1}
                            parent={
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className={hoverAnimation}></div>
                                    <a role="button">
                                        <img alt="gallery" className="relative block object-cover object-center w-full h-full rounded-lg"
                                            src={transformacija1}>
                                        </img>
                                    </a>
                                </motion.div>}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                    <div className="w-full p-1 md:p-2 relative group">
                        <ImageModal image={HomePageGraphic}
                            parent={
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className={hoverAnimation}></div>
                                    <a role="button">
                                        <img alt="gallery" className="relative block object-cover object-center w-full h-full rounded-lg"
                                            src={gym}>
                                        </img>
                                    </a>
                                </motion.div>}
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2 relative group">
                        <ImageModal image={HomePageGraphic}
                            parent={
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className={hoverAnimation}></div>
                                    <a role="button">
                                        <img alt="gallery" className="relative block object-cover object-center w-full h-full rounded-lg"
                                            src={gym}>
                                        </img>
                                    </a>
                                </motion.div>}
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2 relative group">
                        <ImageModal image={HomePageGraphic}
                            parent={
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className={hoverAnimation}></div>
                                    <a role="button">
                                        <img alt="gallery" className="relative block object-cover object-center w-full h-full rounded-lg"
                                            src={gym}>
                                        </img>
                                    </a>
                                </motion.div>}
                        />
                    </div>
                </div>
            </div>
            <div className="py-1 flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap">
                    <div className="w-1/3 p-1 md:p-2 relative group">
                        <ImageModal image={HomePageGraphic}
                            parent={
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className={hoverAnimation}></div>
                                    <a role="button">
                                        <img alt="gallery" className="relative block object-cover object-center w-full h-full rounded-lg"
                                            src={gym}>
                                        </img>
                                    </a>
                                </motion.div>}
                        />
                    </div>
                    <div className="w-1/3 p-1 md:p-2 relative group">
                        <ImageModal image={HomePageGraphic}
                            parent={
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className={hoverAnimation}></div>
                                    <a role="button">
                                        <img alt="gallery" className="relative block object-cover object-center w-full h-full rounded-lg"
                                            src={gym}>
                                        </img>
                                    </a>
                                </motion.div>}
                        />
                    </div>
                    <div className="w-1/3 p-1 md:p-2 relative group">
                        <ImageModal image={HomePageGraphic}
                            parent={
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className={hoverAnimation}></div>
                                    <a role="button">
                                        <img alt="gallery" className="relative block object-cover object-center w-full h-full rounded-lg"
                                            src={gym}>
                                        </img>
                                    </a>
                                </motion.div>}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
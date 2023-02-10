import ImageModal from "@/shared/ImageModal";
import gym from "@/assets/gym.jpg";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import transformacija1 from "@/assets/transformacija1.png";
import transformacija2 from "@/assets/transformacija2.jpg";
import transformacija3 from "@/assets/transformacija3.png";
import transformacija4 from "@/assets/transformacija4.png";
import transformacija5 from "@/assets/transformacija5.png";
import transformacija6 from "@/assets/transformacija6.png";
import transformacija7 from "@/assets/transformacija7.png";
import transformacija8 from "@/assets/transformacija8.png";
import transformacija9 from "@/assets/transformacija9.png";
import { motion } from "framer-motion";

const Gallery = () => {
    const hoverAnimation = "absolute -inset-1 bg-primary-500 rounded-lg blur opacity-10 group-hover:opacity-100 transition duration-500 group-hover:duration-100"
    return (
        <div className="container py-2 mx-auto lg:pt-24 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap w-1/2">
                    <div className="w-1/2 p-1 md:p-2 relative group">
                        <ImageModal image={transformacija4}
                            parent={
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className={hoverAnimation}></div>
                                    <a role="button">
                                        <img alt="gallery" loading="lazy" className="relative block object-cover object-center w-full h-full rounded-lg"
                                            src={transformacija4}>
                                        </img>
                                    </a>
                                </motion.div>}
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2 relative group">
                        <ImageModal image={transformacija3}
                            parent={
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className={hoverAnimation}></div>
                                    <a role="button">
                                        <img alt="gallery" loading="lazy" className="relative block object-cover object-center w-full h-full rounded-lg"
                                            src={transformacija3}>
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
                                        <img alt="gallery" loading="lazy" className="relative block object-cover object-center w-full h-full rounded-lg"
                                            src={transformacija1}>
                                        </img>
                                    </a>
                                </motion.div>}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                    <div className="w-full p-1 md:p-2 relative group">
                        <ImageModal image={transformacija2}
                            parent={
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className={hoverAnimation}></div>
                                    <a role="button">
                                        <img alt="gallery" loading="lazy" className="relative block object-cover object-center w-full h-full rounded-lg"
                                            src={transformacija2}>
                                        </img>
                                    </a>
                                </motion.div>}
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2 relative group">
                        <ImageModal image={transformacija5}
                            parent={
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className={hoverAnimation}></div>
                                    <a role="button">
                                        <img alt="gallery" loading="lazy" className="relative block object-cover object-center w-full h-full rounded-lg"
                                            src={transformacija5}>
                                        </img>
                                    </a>
                                </motion.div>}
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2 relative group">
                        <ImageModal image={transformacija6}
                            parent={
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className={hoverAnimation}></div>
                                    <a role="button">
                                        <img alt="gallery" loading="lazy" className="relative block object-cover object-center w-full h-full rounded-lg"
                                            src={transformacija6}>
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
                        <ImageModal image={transformacija7}
                            parent={
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className={hoverAnimation}></div>
                                    <a role="button">
                                        <img alt="gallery" loading="lazy" className="relative block object-cover object-center w-full h-full rounded-lg"
                                            src={transformacija7}>
                                        </img>
                                    </a>
                                </motion.div>}
                        />
                    </div>
                    <div className="w-1/3 p-1 md:p-2 relative group">
                        <ImageModal image={transformacija8}
                            parent={
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className={hoverAnimation}></div>
                                    <a role="button">
                                        <img alt="gallery" loading="lazy" className="relative block object-cover object-center w-full h-full rounded-lg"
                                            src={transformacija8}>
                                        </img>
                                    </a>
                                </motion.div>}
                        />
                    </div>
                    <div className="w-1/3 p-1 md:p-2 relative group">
                        <ImageModal image={transformacija9}
                            parent={
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className={hoverAnimation}></div>
                                    <a role="button">
                                        <img alt="gallery" loading="lazy" className="relative block object-cover object-center w-full h-full rounded-lg"
                                            src={transformacija9}>
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
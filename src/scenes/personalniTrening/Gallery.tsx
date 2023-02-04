import ImageModal from "@/shared/ImageModal";
import gym from "@/assets/gym.jpg";
import HomePageGraphic from "@/assets/HomePageGraphic.png";

const Gallery = () => {
    return (
        <div className="container py-2 mx-auto lg:pt-24 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap w-1/2">
                    <div className="w-1/2 p-1 md:p-2">
                        <ImageModal image={HomePageGraphic}
                            parent={
                                <a role="button">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gym}>
                                    </img>
                                </a>}
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <ImageModal image={HomePageGraphic}
                            parent={
                                <a role="button">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gym}>
                                    </img>
                                </a>}
                        />
                    </div>
                    <div className="w-full p-1 md:p-2">
                        <ImageModal image={HomePageGraphic}
                            parent={
                                <a role="button">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gym}>
                                    </img>
                                </a>}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                    <div className="w-full p-1 md:p-2">
                        <ImageModal image={HomePageGraphic}
                            parent={
                                <a role="button">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gym}>
                                    </img>
                                </a>}
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <ImageModal image={HomePageGraphic}
                            parent={
                                <a role="button">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gym}>
                                    </img>
                                </a>}
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <ImageModal image={HomePageGraphic}
                            parent={
                                <a role="button">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gym}>
                                    </img>
                                </a>}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
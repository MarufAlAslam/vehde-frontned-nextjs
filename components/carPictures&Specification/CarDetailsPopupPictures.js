import styles from "../../styles/dashboard/carPictures&Specification/CarDetailsPopupPictures.module.css"

import Image from "next/image"
import { useState } from "react"

import SingleView from "../../assets/img/dashboard/carPicturesDetails/3dViewExterior.png"
import FlatView from "../../assets/img/dashboard/carPicturesDetails/FlatViewIcon.svg"
import ActiveFlatView from "../../assets/img/dashboard/carPicturesDetails/ActiveFlatViewIcon.svg"
import ThreeDViewIcon from "../../assets/img/dashboard/carPicturesDetails/3dViewIcon.svg"
import ActiveThreeDViewIcon from "../../assets/img/dashboard/carPicturesDetails/Active3dViewIcon.svg"
import ThreeDViewExterior from "../../assets/img/dashboard/carPicturesDetails/3dViewExterior.png"
import ThreeDViewInterior from "../../assets/img/dashboard/carPicturesDetails/3dViewInterior.png"

import FlatViewLeftSideExterior from "../../assets/img/dashboard/carPicturesDetails/FlatViewLeftSideExterior.png"
import FlatViewRearExterior from "../../assets/img/dashboard/carPicturesDetails/FlatViewRearExterior.png"
import FlatViewDashboardInterior from "../../assets/img/dashboard/carPicturesDetails/FlatViewDashboardInterior.png"
import FlatViewRightSideInterior from "../../assets/img/dashboard/carPicturesDetails/FlatViewRightSideInterior.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


const CarDetailsPopupPictures = () => {

    const [view, setView] = useState("Flat View")
    const [ThreeDView, setThreeDView] = useState("Exterior")
    const [singleViewImg, setSingleViewImg] = useState(null)

    return (
        <div className={styles.container}>
            <div className={styles.singleView}>
                <div className={styles.viewButtons}>
                    <button onClick={() => setView("Flat View")} className={`${view === "Flat View" && styles.activeViewBtn}`}>
                        <span>
                            <Image src={view === "Flat View" ? ActiveFlatView : FlatView} alt="" />
                        </span>
                        <span>Flat View</span>
                    </button>
                    <button onClick={() => setView("3d View")} className={`${view === "3d View" && styles.activeViewBtn}`}>
                        <span>
                            <Image src={view === "3d View" ? ActiveThreeDViewIcon : ThreeDViewIcon} alt="" />
                        </span>
                        <span>3d View</span>
                    </button>
                </div>
                <Image src={singleViewImg ? singleViewImg : SingleView} alt="" />
                {/* <Image src={singleViewImg ? singleViewImg : ""} alt="" /> */}
            </div>
            <div className={styles.gallery}>
                {
                    view === "3d View" && <>
                        <div className={styles.threeDView}>
                            <Image src={ThreeDViewExterior} onClick={() => setSingleViewImg(ThreeDViewExterior)} alt="Ops" />
                            <Image src={ThreeDViewInterior} onClick={() => setSingleViewImg(ThreeDViewInterior)} alt="" />
                        </div>
                    </>
                }
                {
                    view === "Flat View" && <>
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            className={`mySwiper ${styles.sliderWrapper}`}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                991: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <Image src={FlatViewLeftSideExterior} alt="" onClick={() => setSingleViewImg(FlatViewLeftSideExterior)} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={FlatViewRearExterior} alt="" onClick={() => setSingleViewImg(FlatViewRearExterior)} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={FlatViewDashboardInterior} alt="" onClick={() => setSingleViewImg(FlatViewDashboardInterior)} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={FlatViewRightSideInterior} alt="" onClick={() => setSingleViewImg(FlatViewRightSideInterior)} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={FlatViewLeftSideExterior} alt="" onClick={() => setSingleViewImg(FlatViewLeftSideExterior)} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={FlatViewRearExterior} alt="" onClick={() => setSingleViewImg(FlatViewRearExterior)} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={FlatViewDashboardInterior} alt="" onClick={() => setSingleViewImg(FlatViewDashboardInterior)} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={FlatViewRightSideInterior} alt="" onClick={() => setSingleViewImg(FlatViewRightSideInterior)} />
                            </SwiperSlide>
                        </Swiper>
                    </>
                }
            </div>
        </div>
    )
}

export default CarDetailsPopupPictures
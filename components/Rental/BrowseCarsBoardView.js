import Image from "next/image"
import styles from "../../styles/renter/BrowseCarsBoardView.module.css"
import SingleCarDetailsStyles from "../../styles/renter/SingleCarDetails.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
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
import ModalMd from "../common/ModalMd"
import CarDetailsOverviewPopup from "../carPictures&Specification/CarDetailsOverviewPopup"
import AboutHostPopup from "./AboutHostPopup"



const BrowseCarsBoardView = () => {

    const router = useRouter("")

    const [view, setView] = useState("Flat View")
    const [ThreeDView, setThreeDView] = useState("Exterior")
    const [singleViewImg, setSingleViewImg] = useState(null)

    const [overview, setOverview] = useState(null)
    const [detail, setDetail] = useState(null)


    return (
        <>
            <div className={styles.container}>
                <div className={styles.blackBox}>
                    <h2>Discount <Image src={require("../../assets/img/Renter/Discount.png")} /> <span>5%</span> 1-week</h2>
                    <Image src={require("../../assets/img/Renter/LpgCarImg.png")} alt="" />
                    <h3>21/23 <span>Est. MPG</span></h3>
                    <h3>5 <span>Seats</span></h3>
                </div>
                <div className={styles.mainBox}>
                    <div className={styles.headerInfoBox}>
                        <div>
                            <div>
                                <Image src={require("../../assets/img/Renter/carBrands/Chevrolet-Logo.png")} />
                            </div>
                            <h4>Chevrolet <span>Equinox 2021</span> </h4>
                        </div>
                        <div>
                            <h2>$106</h2>
                            <span>PER <br /> DAY</span>
                        </div>
                    </div>
                    <div className={styles.imgView}>
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
                    </div>
                    <div className={styles.miniImgBoxMobileDevice}>
                        {
                            view === "3d View" && <>
                                <div className={styles.threeDViewMobileDevice}>
                                    <Image src={ThreeDViewExterior} onClick={() => setSingleViewImg(ThreeDViewExterior)} alt="Ops" />
                                    <Image src={ThreeDViewInterior} onClick={() => setSingleViewImg(ThreeDViewInterior)} alt="" />
                                </div>
                            </>
                        }
                        {
                            view === "Flat View" && <>
                                <Swiper
                                    navigation={true}
                                    direction={"horizontal"}
                                    modules={[Navigation]}
                                    className={`mySwiper ${styles.sliderWrapperMobileDevice}`}
                                    // slidesPerView={4}
                                    // spaceBetween={28}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                            spaceBetween: 8,
                                        },
                                        585: {
                                            slidesPerView: 2,
                                            spaceBetween: 12,
                                        },
                                        690: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 4,
                                            spaceBetween: 30,
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
                    <div className={styles.btnBox}>
                        <button onClick={() => router.push(`./BrowseCars/123456?pay=now`)} className={styles.blackBtn}>$2,219 <span>Pay Now</span></button>
                        <button onClick={() => router.push(`./BrowseCars/123456?pay=later`)} className={styles.redBtn}>$2,316 <span>Pay Later</span></button>
                        <button onClick={() => setOverview({})} className={styles.blackBtnOutline}>Overview</button>
                        <button onClick={() => setDetail({})} className={styles.blackBtn}>Detail</button>
                    </div>
                </div>
                <div className={styles.miniImgBox}>
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
                                direction={"vertical"}
                                modules={[Navigation]}
                                className={`mySwiper ${styles.sliderWrapper}`}
                                slidesPerView={3}
                                spaceBetween={28}
                            // breakpoints={{
                            //     0: {
                            //         slidesPerView: 1,
                            //         spaceBetween: 20,
                            //     },
                            //     768: {
                            //         slidesPerView: 2,
                            //         spaceBetween: 40,
                            //     },
                            //     991: {
                            //         slidesPerView: 4,
                            //         spaceBetween: 50,
                            //     },
                            // }}
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

            {
                overview !== null && <ModalMd setModal={setOverview}>
                    <h2 className={SingleCarDetailsStyles.popupHeader}>Host Category: <span>Individual</span></h2>
                    <CarDetailsOverviewPopup></CarDetailsOverviewPopup>
                </ModalMd>
            }
            {
                detail !== null && <ModalMd setModal={setDetail}>
                    <h2 className={SingleCarDetailsStyles.popupHeader}>Reservation Details</h2>
                    <AboutHostPopup payNowUrl={`./BrowseCars/123456/review`}></AboutHostPopup>
                </ModalMd>
            }
        </>
    )
}

export default BrowseCarsBoardView
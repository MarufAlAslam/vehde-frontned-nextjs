import MainLayout from "../../../../components/layout/MainLayout"
import MaskAndSafetySection from "../../../../components/common/MaskAndSafetySection"

import styles from "../../../../styles/renter/SingleCarDetails.module.css"
import LocationPickupDropOffBox from "../../../../components/common/LocationPickupDropOffBox"
import CarDetailsPopupPictures from "../../../../components/carPictures&Specification/CarDetailsPopupPictures"
import CarDetailsPopupMap from "../../../../components/carPictures&Specification/CarDetailsPopupMap"
import CarDetailsPopupHeader from "../../../../components/carPictures&Specification/CarDetailsPopupHeader"
import CarDetailsOverviewPopup from "../../../../components/carPictures&Specification/CarDetailsOverviewPopup"

import LpgCarImg from "../../../../assets/img/Renter/LpgCarImg.png"
import Image from "next/image"
import { useEffect, useState } from "react"
import ModalMd from "../../../../components/common/ModalMd"
import AboutHostPopup from "../../../../components/Rental/AboutHostPopup"
import { useRouter } from "next/router"


const BrowseCars = () => {

    const [overview, setOverview] = useState(null)
    const router = useRouter()
    const [payType, setPayType] = useState(null)

    useEffect(() => {
        setPayType(router.query.pay)
    }, [])


    return (
        <>
            <MainLayout>
                <main className={styles.main}>
                    <div className="container">
                        <div>
                            <i className="fa fa-chevron-left" style={{ cursor: "pointer" }} onClick={() => router.back()}></i>
                        </div>
                        <div className={styles.searchFilterBox}>
                            <LocationPickupDropOffBox />
                        </div>
                        <div className="my-4">
                            <CarDetailsPopupHeader hideButton={true}></CarDetailsPopupHeader>
                        </div>
                        <div className={styles.mapAndPicturesWrapper}>
                            <CarDetailsPopupPictures></CarDetailsPopupPictures>
                            <CarDetailsPopupMap></CarDetailsPopupMap>
                        </div>
                        <div className={styles.bottomBox}>
                            <div>
                                <span>
                                    <span>5%</span> 1-week OR
                                </span>
                                <span><span>7%</span> 4-week</span>
                            </div>
                            <Image src={LpgCarImg} alt="" />
                            <div>
                                <h3>21/23</h3>
                                <p>Est. MPG</p>
                            </div>
                            <div>
                                <h3>5</h3>
                                <p>Seats</p>
                            </div>
                            <div>
                                <button onClick={() => setOverview("overview")}>Overview</button>
                                <button onClick={() => setOverview("detail")}>Detail</button>
                            </div>
                        </div>
                        <div className={styles.buttonBox}>
                            {
                                payType !== "now" && <>
                                    <button className={styles.blackBtn} onClick={() => router.push(`./123456/review`)}>
                                        $302
                                        <span>Pay Now</span>
                                    </button>
                                    <button className={styles.primaryBtn} onClick={() => router.push(`./123456/review`)}>
                                        $315
                                        <span>Pay Later</span>
                                    </button>
                                </>
                            }
                            {
                                payType === "now" && <>
                                    <button className={styles.primaryBtn} onClick={() => router.push(`./123456/review`)}>
                                        $315
                                        <span>Pay Now</span>
                                    </button>
                                </>
                            }
                        </div>
                    </div>
                </main>
                <MaskAndSafetySection></MaskAndSafetySection>
            </MainLayout>
            {
                overview === "overview" && <ModalMd setModal={setOverview}>
                    <h2 className={styles.popupHeader}>Host Category: <span>Individual</span></h2>
                    <CarDetailsOverviewPopup></CarDetailsOverviewPopup>
                </ModalMd>
            }
            {
                overview === "detail" && <ModalMd setModal={setOverview}>
                    <h2 className={styles.popupHeader}>Reservation Details</h2>
                    <AboutHostPopup></AboutHostPopup>
                </ModalMd>
            }
        </>
    )
}

export default BrowseCars
import overviewPopupStyles from "../../styles/dashboard/carPictures&Specification/CarDetailsOverviewPopup.module.css"

import FourDoorImg from "../../assets/img/dashboard/carPicturesDetails/4Door.png"
import FiveSeatsImg from "../../assets/img/dashboard/carPicturesDetails/5Seats.png"
import TwentyToTwentyThreeMpgImg from "../../assets/img/dashboard/carPicturesDetails/20-23mpg.png"
import AutomaticImg from "../../assets/img/dashboard/carPicturesDetails/Automatic.png"
import CheckmarkImg from "../../assets/img/dashboard/carPicturesDetails/checkmark.png"
import Image from "next/image"

import styles from "../../styles/renter/AboutHostPopup.module.css"
import LocationPickupDropOffBox from "../common/LocationPickupDropOffBox"
import { useRouter } from "next/router"
import { useState } from "react"


const AboutHostPopup = ({ payNowUrl }) => {

    const router = useRouter()
    const [isDiscountSelected, setIsDiscountSelected] = useState(false)

    return (
        <>
            <div className={styles.header}>
                <h2>About Host</h2>
                <h3>Category: <span>Individual</span></h3>
                <h3>Location: <span>Austin, TX</span></h3>
                <p><span>Special:</span> 5% discount if you reserve the selected car for a
                    minimum of 1-week OR 7% discount if you reserve the selected
                    car for a minimum of 4- week</p>
            </div>
            <div className={overviewPopupStyles.highlightedFeatures}>
                <h2>Highlighted Features</h2>
                <div>
                    <div>
                        <Image src={FourDoorImg} alt="" />
                        <span>4 Door</span>
                    </div>
                    <div>
                        <Image src={FiveSeatsImg} alt="" />
                        <span>5 Seats</span>
                    </div>
                    <div>
                        <Image src={TwentyToTwentyThreeMpgImg} alt="" />
                        <span>22-33 Mpg</span>
                    </div>
                    <div>
                        <Image src={AutomaticImg} alt="" />
                        <span>Automatic</span>
                    </div>
                </div>
            </div>
            <div className={overviewPopupStyles.list}>
                <div>
                    <Image src={CheckmarkImg} alt="" />
                    <span>Hybrid powertrain with 219 net system horse power</span>
                </div>
                <div>
                    <Image src={CheckmarkImg} alt="" />
                    <span>Electronic On-Demand All-Wheel Drive (AWD)</span>
                </div>
                <div>
                    <Image src={CheckmarkImg} alt="" />
                    <span>Height-adjustable hands-free power liftgate with
                        jam protection</span>
                </div>
                <div>
                    <Image src={CheckmarkImg} alt="" />
                    <span>8-way power-adjustable driver's seat with lumbar
                        support</span>
                </div>
                <div>
                    <Image src={CheckmarkImg} alt="" />
                    <span>Toyota Safety Sense™ 2.0 (TSS 2.0) 173 and Star
                        Safety System™</span>
                </div>
            </div>
            <hr />
            <div className={styles.bottom}>
                <h3>SAVE MONEY</h3>
                <p><span>5% discount</span> for at <span>least 7 days</span> reservation in <span>Austin, TX</span></p>
                <div>
                    <button className={isDiscountSelected === false ? styles.blackBtn : styles.redBtn} onClick={() => setIsDiscountSelected(false)}>Current Selection</button>
                    <button className={isDiscountSelected === true ? styles.blackBtn : styles.redBtn} onClick={() => setIsDiscountSelected(true)}>Discount</button>
                </div>
                <LocationPickupDropOffBox showSm={true}></LocationPickupDropOffBox>
                <div>{isDiscountSelected ? "7" : "3"} days in Austin, TX</div>
                <div>
                    <button onClick={() => router.push(payNowUrl ? payNowUrl : `./123456/review`)}>
                        ${isDiscountSelected ? "840" : "360"}
                        <span>Pay Now</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default AboutHostPopup
import styles from "../../styles/dashboard/carPictures&Specification/CarDetailsOverviewPopup.module.css"

import FourDoorImg from "../../assets/img/dashboard/carPicturesDetails/4Door.png"
import FiveSeatsImg from "../../assets/img/dashboard/carPicturesDetails/5Seats.png"
import TwentyToTwentyThreeMpgImg from "../../assets/img/dashboard/carPicturesDetails/20-23mpg.png"
import AutomaticImg from "../../assets/img/dashboard/carPicturesDetails/Automatic.png"
import CheckmarkImg from "../../assets/img/dashboard/carPicturesDetails/checkmark.png"
import Image from "next/image"

const CarDetailsOverviewPopup = () => {
    return (
        <>
            <div className={styles.highlightedFeatures}>
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
            <div className={styles.list}>
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
            <div className={styles.bottom}>
                <h3><span>5% discount</span> for at least <span>7-day reservation</span></h3>
                <h3>OR</h3>
                <h3><span>7% discount</span> for at least <span>4-week reservation</span></h3>
            </div>
        </>
    )
}

export default CarDetailsOverviewPopup
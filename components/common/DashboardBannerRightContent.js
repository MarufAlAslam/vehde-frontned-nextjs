import CarImg from "../../assets/img/dashboard/MyHost/Rental/car.png"
import PaymentImg from "../../assets/img/dashboard/Payment/BannerImg.png"
import VEHDEScoreImg from "../../assets/img/dashboard/VEHDEScore/BannerRightImg.png"
import SnowTicketImg from "../../assets/img/dashboard/SnowTicket/BannerRightImg.png"
import AvailabilityImg from "../../assets/img/dashboard/Availability/BannerRightImg.png"
import Image from "next/image";

import styles from "../../styles/dashboard/DashboardBannerRightContent.module.css"


const DashboardBannerRightContent = ({ page }) => {
    return (
        <>
            <div className={styles.container}>
                {page === "VEHDEPass" && <Image src={CarImg} alt="" className="img-fluid" />}
                {page === "availability" && <Image src={AvailabilityImg} alt="" className="img-fluid" />}
                {page === "payment" && <Image src={PaymentImg} alt="" className="img-fluid" />}
                {page === "VEHDEScore" && <Image src={VEHDEScoreImg} alt="" className="img-fluid" />}
                {page === "SnowTicket" && <Image src={SnowTicketImg} alt="" className="img-fluid" />}
            </div>
        </>
    )
}

export default DashboardBannerRightContent
import styles from "../../styles/dashboard/Rental/RentalEmptyData.module.css"

import EmptyDataImg from "../../assets/img/dashboard/MyHost/Rental/EmptyData.png"
import Image from "next/image"

const RentalEmptyData = ({ setModalLgData }) => {
    return (
        <>
            <div className={styles.container} onClick={() => setModalLgData("list")}>
                <div className={styles.header}>
                    <span>Car</span>
                    <span>Renter</span>
                    <span>Pick-up date/ Location</span>
                    <span>Return date/ Location</span>
                    <div>
                        <span>Status <i className="fa fa-chevron-down"></i></span>
                    </div>
                    <span>Rate</span>
                    <span>Schedules/ Payment</span>
                </div>
                <div className={styles.wrapper}>
                    <Image src={EmptyDataImg} alt="" />
                    <p>You currently have no rentals because you’ve not started hosting any renter. Please remember to turn on your availability to host so you can receive renter’s request for car rental.</p>
                    <h6><span>NOTE:</span> You will receive a notification each time renter reserves your car.</h6>
                </div>
            </div>
        </>
    )
}

export default RentalEmptyData
import styles from "../../styles/dashboard/Rental/RentalDataPopupHeader.module.css"

import FourDoor from "../../assets/img/dashboard/carPicturesDetails/4Door.png"
import FiveSeats from "../../assets/img/dashboard/carPicturesDetails/5Seats.png"
import MPG from "../../assets/img/dashboard/carPicturesDetails/20-23mpg.png"
import Automatic from "../../assets/img/dashboard/carPicturesDetails/Automatic.png"
import Image from "next/image"


const RentalDataPopupHeader = ({ hideHighlight }) => {
    return (
        <>
            <div className={styles.header}>
                <div>
                    <h3>Details for</h3>
                    <h2>Toyota Venza LE 2022</h2>
                </div>
                <div>
                    <div>
                        <div>
                            <label htmlFor="">Zip</label>
                            <span>78613</span>
                        </div>
                        <div>
                            <label htmlFor="">RESRVE code</label>
                            <span>ATX- 001-3088</span>
                        </div>
                        <div>
                            <label htmlFor="">Car tag</label>
                            <span>(TY) 78613-39053</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Payments</label>
                            <span>$2,957.50</span>
                        </div>
                        <div>
                            <label htmlFor="">Duration</label>
                            <span>26 Days</span>
                        </div>
                        <div className={styles.activeBox}>
                            <label htmlFor="">Status</label>
                            <span>Active <i className="fa fa-check"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            {
                !hideHighlight && <div className={styles.highlight}>
                    <div>
                        <div>
                            <Image src={FourDoor} alt="" />
                            <span>4 door</span>
                        </div>
                        <div>
                            <Image src={FiveSeats} alt="" />
                            <span>5 Seats</span>
                        </div>
                        <div>
                            <Image src={MPG} alt="" />
                            <span>22-33 mpg</span>
                        </div>
                        <div>
                            <Image src={Automatic} alt="" />
                            <span>Automatic</span>
                        </div>
                    </div>
                    <div>
                        <div className={styles.highlightTimeBox}>
                            <div>
                                <label htmlFor="">Pick-up</label>
                                <div>
                                    <span>3/15/2022</span>
                                    <span>/</span>
                                    <span>00:45 PM</span>
                                </div>
                            </div>
                            <div>
                                <h3>2500 Lakeside Dr Austin,</h3>
                                <span>TX 78613</span>
                            </div>
                        </div>
                        <div className={styles.highlightTimeBox}>
                            <div>
                                <label htmlFor="">Drop-off</label>
                                <div>
                                    <span>4/10/2022</span>
                                    <span>/</span>
                                    <span>10:45 AM</span>
                                </div>
                            </div>
                            <div>
                                <h3>2500 Lakeside Dr Austin,</h3>
                                <span>TX 78613</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default RentalDataPopupHeader
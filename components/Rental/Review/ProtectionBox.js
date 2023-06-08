import styles from "../../../styles/renter/Review/ProtectionBox.module.css"

import RegularInsuranceImg from "../../../assets/img/dashboard/MyRenter/RegularInsurance.png"
import VEHSAVEImg from "../../../assets/img/dashboard/MyRenter/VEHSAVE.png"
import RoadsideAssistanceImg from "../../../assets/img/dashboard/MyRenter/RoadsideAssistance.png"
import Image from "next/image"


const ProtectionBox = ({ customStyles, hideTitle }) => {
    return (
        <div className={styles.container} style={customStyles && customStyles}>
            {hideTitle !== true && <h2>Protection (Optional)</h2>}
            <div>
                {/* <div>
                    <button>10% Save</button>
                    <h4>Regular Insurance</h4>
                    <Image src={Protection1} alt="" />
                    <div className={styles.checkbox}>
                        <input type="checkbox" name="" id="" />
                        <span>$9.95/DAY</span>
                    </div>
                </div>
                <div>
                    <button>10% Save</button>
                    <h4>VEHSAVE</h4>
                    <Image src={Protection2} alt="" />
                    <div className={styles.checkbox}>
                        <input type="checkbox" name="" id="" />
                        <span>$9.95/DAY</span>
                    </div>
                </div> */}

                <div>
                    <span>
                        <i className='fa fa-info'></i>
                        <p>
                            Get a well-deserved auto insurance that protects you against financial loss in the event of a collision/accident.
                        </p>
                    </span>
                    <span>10% Save</span>
                    <h4>Regular Insurance</h4>
                    <Image src={RegularInsuranceImg} alt="" />
                    <div className={styles.checkbox}>
                        <input type="checkbox" name="" id="" />
                        <span>$9.95/DAY</span>
                    </div>
                </div>
                <div>
                    <span>
                        <i className='fa fa-info'></i>
                        <p>
                            Roadside assistance provides 24/7 emergency protection if you lock your keys in your car, get a flat tire, need a jump start, or break down on the side of the road.
                        </p>
                    </span>
                    <span>10% Save</span>
                    <h4>Roadside assistance</h4>
                    <Image src={RoadsideAssistanceImg} alt="" />
                    <div className={styles.checkbox}>
                        <input type="checkbox" name="" id="" />
                        <span>$9.95/DAY</span>
                    </div>
                </div>
                <div>
                    <span>
                        <i className='fa fa-info'></i>
                        <p>
                            VEHSAVE enables you to have a replacement for your rental car in case of any collision/accident that might interrupts continuous operational of your rental car.
                        </p>
                    </span>
                    <span>10% Save</span>
                    <h4>VEHSAVE</h4>
                    <Image src={VEHSAVEImg} alt="" />
                    <div className={styles.checkbox}>
                        <input type="checkbox" name="" id="" />
                        <span>$9.95/DAY</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProtectionBox
import styles from "../../../styles/renter/Review/MainBox.module.css"

import MainBoxCarImg from "../../../assets/img/Renter/Review/MainBoxCarImg.png"
import FourDoorImg from "../../../assets/img/dashboard/carPicturesDetails/4Door.png"
import FiveSeatsImg from "../../../assets/img/dashboard/carPicturesDetails/5Seats.png"
import TwentyToTwentyThreeMpgImg from "../../../assets/img/dashboard/carPicturesDetails/20-23mpg.png"
import AutomaticImg from "../../../assets/img/dashboard/carPicturesDetails/Automatic.png"
import CheckmarkImg from "../../../assets/img/dashboard/carPicturesDetails/checkmark.png"
import CalendarIcon from "../../../assets/img/calendar-icon.png"

import Image from "next/image"
import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

import ModalLg from "../../common/ModalLg"
import PaymentStyles from "../../../styles/dashboard/Payment.module.css"
import CarImg from "../../../assets/img/dashboard/MyHost/Rental/car.png"
import MPGIMG from "../../../assets/img/dashboard/MyRenter/Payment/37-40MPG.png"
import MapIcon from "../../../assets/img/map-icon.png"



const MainBox = ({ hidePrice, hideList, hideageResidency, hideEstCost, showAttention, showCarNameInTitle }) => {

    const [pickUpDate, setPickUpDate] = useState(new Date())
    const [pickUpDateTime, setPickUpDateTime] = useState("10:10 PM")
    const [dropOffDate, setDropOffDate] = useState(new Date())

    const [showPaymentModal, setShowPaymentModal] = useState(null)


    return (
        <>
            <div className={styles.mainContainer}>
                {
                    showCarNameInTitle && <h2>Toyota Venza Le 2022</h2>
                }
                <div className={styles.container}>
                    <div>
                        <div className={styles.fourImgBox}>
                            <div>
                                <Image src={FourDoorImg} alt="" />
                                <span>4 door</span>
                            </div>
                            <div>
                                <Image src={FiveSeatsImg} alt="" />
                                <span>5 Seats</span>
                            </div>
                            <div>
                                <Image src={TwentyToTwentyThreeMpgImg} alt="" />
                                <span>37-40 mpg</span>
                            </div>
                            <div>
                                <Image src={AutomaticImg} alt="" />
                                <span>Automatic</span>
                            </div>
                        </div>
                        <div className={styles.pickUpDropOffBox}>
                            <div>
                                <label htmlFor="">Pick-up</label>
                                <div className={styles.datePickerBox}>
                                    <Image src={CalendarIcon} alt="Calendar Icon" />
                                    <div className="d-flex gap-1 align-items-center">
                                        <div className="d-flex align-items-center" style={{ maxWidth: "80px" }}>
                                            <DatePicker
                                                style={{ width: "75px" }}
                                                selected={pickUpDate}
                                                onChange={(date) => setPickUpDate(date)}
                                                timeInputLabel="Time:"
                                                dateFormat="MM/dd/yyyy"
                                            />
                                            <i class="fa fa-angle-down" style={{ fontSize: "12px" }}></i>
                                        </div>
                                        <select name="" id="" style={{ border: "none", background: "transparent", outline: "none", fontSize: "13px", fontWeight: 500, marginLeft: "15px", maxHeight: "200px", color: "#000000" }}>
                                            <option value="12:00 PM">12:00 PM</option>
                                            <option value="12:00 PM">12:30 PM</option>
                                            <option value="12:00 PM">01:00 PM</option>
                                            <option value="12:00 PM">01:30 PM</option>
                                            <option value="12:00 PM">02:00 PM</option>
                                            <option value="12:00 PM">02:30 PM</option>
                                            <option value="12:00 PM">03:00 PM</option>
                                            <option value="12:00 PM">03:30 PM</option>
                                            <option value="12:00 PM">04:00 PM</option>
                                            <option value="12:00 PM">04:30 PM</option>
                                            <option value="12:00 PM">05:00 PM</option>
                                            <option value="12:00 PM">05:30 PM</option>
                                            <option value="12:00 PM">06:00 PM</option>
                                            <option value="12:00 PM">06:30 PM</option>
                                            <option value="12:00 PM">07:00 PM</option>
                                            <option value="12:00 PM">07:30 PM</option>
                                            <option value="12:00 PM">08:00 PM</option>
                                            <option value="12:00 PM">08:30 PM</option>
                                            <option value="12:00 PM">09:00 PM</option>
                                            <option value="12:00 PM">09:30 PM</option>
                                            <option value="12:00 PM">10:00 PM</option>
                                            <option value="12:00 PM">10:30 PM</option>
                                            <option value="12:00 PM">11:00 PM</option>
                                            <option value="12:00 PM">11:30 PM</option>

                                            <option value="12:00 PM">12:00 AM</option>
                                            <option value="12:00 AM">12:30 AM</option>
                                            <option value="12:00 AM">01:00 AM</option>
                                            <option value="12:00 AM">01:30 AM</option>
                                            <option value="12:00 AM">02:00 AM</option>
                                            <option value="12:00 AM">02:30 AM</option>
                                            <option value="12:00 AM">03:00 AM</option>
                                            <option value="12:00 AM">03:30 AM</option>
                                            <option value="12:00 AM">04:00 AM</option>
                                            <option value="12:00 AM">04:30 AM</option>
                                            <option value="12:00 AM">05:00 AM</option>
                                            <option value="12:00 AM">05:30 AM</option>
                                            <option value="12:00 AM">06:00 AM</option>
                                            <option value="12:00 AM">06:30 AM</option>
                                            <option value="12:00 AM">07:00 AM</option>
                                            <option value="12:00 AM">07:30 AM</option>
                                            <option value="12:00 AM">08:00 AM</option>
                                            <option value="12:00 AM">08:30 AM</option>
                                            <option value="12:00 AM">09:00 AM</option>
                                            <option value="12:00 AM">09:30 AM</option>
                                            <option value="12:00 AM">10:00 AM</option>
                                            <option value="12:00 AM">10:30 AM</option>
                                            <option value="12:00 AM">11:00 AM</option>
                                            <option value="12:00 AM">11:30 AM</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <i className="fa fa-map-marker-alt"></i>
                                    <input type="text" placeholder="- - - - - - -" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="">Drop-off</label>
                                <div className={styles.datePickerBox}>
                                    <Image src={CalendarIcon} alt="Calendar Icon" />
                                    <div className="d-flex gap-1 align-items-center">
                                        <div className="d-flex align-items-center" style={{ maxWidth: "80px" }}>
                                            <DatePicker
                                                style={{ width: "75px" }}
                                                selected={dropOffDate}
                                                onChange={(date) => setDropOffDate(date)}
                                                timeInputLabel="Time:"
                                                dateFormat="MM/dd/yyyy"
                                            />
                                            <i class="fa fa-angle-down" style={{ fontSize: "12px" }}></i>
                                        </div>
                                        <select name="" id="" style={{ border: "none", background: "transparent", outline: "none", fontSize: "13px", fontWeight: 500, marginLeft: "15px", maxHeight: "200px", color: "#000000" }}>
                                            <option value="12:00 PM">12:00 PM</option>
                                            <option value="12:00 PM">12:30 PM</option>
                                            <option value="12:00 PM">01:00 PM</option>
                                            <option value="12:00 PM">01:30 PM</option>
                                            <option value="12:00 PM">02:00 PM</option>
                                            <option value="12:00 PM">02:30 PM</option>
                                            <option value="12:00 PM">03:00 PM</option>
                                            <option value="12:00 PM">03:30 PM</option>
                                            <option value="12:00 PM">04:00 PM</option>
                                            <option value="12:00 PM">04:30 PM</option>
                                            <option value="12:00 PM">05:00 PM</option>
                                            <option value="12:00 PM">05:30 PM</option>
                                            <option value="12:00 PM">06:00 PM</option>
                                            <option value="12:00 PM">06:30 PM</option>
                                            <option value="12:00 PM">07:00 PM</option>
                                            <option value="12:00 PM">07:30 PM</option>
                                            <option value="12:00 PM">08:00 PM</option>
                                            <option value="12:00 PM">08:30 PM</option>
                                            <option value="12:00 PM">09:00 PM</option>
                                            <option value="12:00 PM">09:30 PM</option>
                                            <option value="12:00 PM">10:00 PM</option>
                                            <option value="12:00 PM">10:30 PM</option>
                                            <option value="12:00 PM">11:00 PM</option>
                                            <option value="12:00 PM">11:30 PM</option>

                                            <option value="12:00 PM">12:00 AM</option>
                                            <option value="12:00 AM">12:30 AM</option>
                                            <option value="12:00 AM">01:00 AM</option>
                                            <option value="12:00 AM">01:30 AM</option>
                                            <option value="12:00 AM">02:00 AM</option>
                                            <option value="12:00 AM">02:30 AM</option>
                                            <option value="12:00 AM">03:00 AM</option>
                                            <option value="12:00 AM">03:30 AM</option>
                                            <option value="12:00 AM">04:00 AM</option>
                                            <option value="12:00 AM">04:30 AM</option>
                                            <option value="12:00 AM">05:00 AM</option>
                                            <option value="12:00 AM">05:30 AM</option>
                                            <option value="12:00 AM">06:00 AM</option>
                                            <option value="12:00 AM">06:30 AM</option>
                                            <option value="12:00 AM">07:00 AM</option>
                                            <option value="12:00 AM">07:30 AM</option>
                                            <option value="12:00 AM">08:00 AM</option>
                                            <option value="12:00 AM">08:30 AM</option>
                                            <option value="12:00 AM">09:00 AM</option>
                                            <option value="12:00 AM">09:30 AM</option>
                                            <option value="12:00 AM">10:00 AM</option>
                                            <option value="12:00 AM">10:30 AM</option>
                                            <option value="12:00 AM">11:00 AM</option>
                                            <option value="12:00 AM">11:30 AM</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <i className="fa fa-map-marker-alt"></i>
                                    <input type="text" placeholder="- - - - - - -" />
                                </div>
                            </div>
                        </div>
                        {
                            !hideList && <div className={styles.list}>
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
                        }
                        {
                            !hideageResidency && <div className={styles.ageResidencyBox}>
                                <div>
                                    <div>
                                        <i className="fa fa-info"></i>
                                    </div>
                                    <label htmlFor="">Age:</label>
                                    <select name="" id="">
                                        <option value="25+">25+</option>
                                    </select>
                                </div>
                                <div>
                                    <div>
                                        <i className="fa fa-info"></i>
                                    </div>
                                    <label htmlFor="">Residency:</label>
                                    <select name="" id="">
                                        <option value="USA">USA</option>
                                    </select>
                                </div>
                            </div>
                        }
                        {
                            !hideEstCost && <div className={styles.estimatedCostBox}>
                                <h4>Base cost</h4>
                                <span>$2,958</span>

                                <h4>Add-On</h4>
                                <span>$364</span>

                                <h4>Estimated taxes & fees</h4>
                                <span>$1,054</span>

                                <h4>Estimated Total Costs</h4>
                                <span>$4,376</span>
                            </div>
                        }
                        {
                            showAttention === "warn" && <>
                                <div className={`${styles.attentionBox} ${styles.attentionBoxWarn}`} onClick={() => setShowPaymentModal("cost")}>
                                    <i class="fa-solid fa-triangle-exclamation"></i>
                                    <span>ATTENTION: Payment of rental deposit is required</span>
                                </div>
                            </>
                        }
                        {
                            showAttention === "error" && <>
                                <div className={`${styles.attentionBox} ${styles.attentionBoxError}`} onClick={() => setShowPaymentModal("cost")}>
                                    <i class="fa-solid fa-triangle-exclamation"></i>
                                    <span>ATTENTION: Payment of rental deposit is required</span>
                                </div>
                            </>
                        }
                    </div>
                    <div>
                        <Image src={MainBoxCarImg} alt="" />
                        {
                            !hidePrice && <>
                                <h2>$2,958</h2>
                                <h3>Base Cost</h3>
                            </>
                        }
                    </div>
                </div>
            </div>
            {
                showPaymentModal && <ModalLg setModal={setShowPaymentModal} style={{ marginTop: "45px", zIndex: 9999 }}>
                    {
                        showPaymentModal === "payment" && <span style={{ cursor: "pointer" }} onClick={() => setShowPaymentModal("cost")}>
                            <i className="fa fa-chevron-left"></i>
                        </span>
                    }
                    {
                        showPaymentModal === "cost" && <div className={PaymentStyles.payFeesAndAddOnModal}>
                            <h2>Rental payment for Edwards Dane <br />
                                (VEHDE ID: ED-R (TX) 155013-78703)</h2>
                            <div className={PaymentStyles.searchBox}>
                                <h3>Reservation</h3>
                                <select name="" id="">
                                    <option value="">ATX-001-3088</option>
                                </select>
                                <input type="text" placeholder='Enter the reserved car name' onChange={() => setPayFeesAndAddOnModal(payFeesAndAddOnModal === "addOnSearch" || payFeesAndAddOnModal === "addOn" ? "addOn" : "searched")} value={"2022 Toyota Venza"} readOnly />
                            </div>
                            <div className={PaymentStyles.resultBox}>
                                <Image src={CarImg} alt="" />
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
                                        <Image src={MPGIMG} alt="" />
                                        <span>37-40 Mpg</span>
                                    </div>
                                    <div>
                                        <Image src={AutomaticImg} alt="" />
                                        <span>Automatic</span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="">Pick-up</label>
                                        <div>
                                            <Image src={CalendarIcon} alt="Calendar Icon" />
                                            <div className="d-flex gap-1 align-items-center">
                                                <div className="d-flex align-items-center" style={{ maxWidth: "80px" }}>
                                                    <DatePicker
                                                        style={{ width: "75px" }}
                                                        selected={pickUpDate}
                                                        onChange={(date) => setPickUpDate(date)}
                                                        timeInputLabel="Time:"
                                                        dateFormat="MM/dd/yyyy"
                                                    // showTimeInput
                                                    />
                                                    <i class="fa fa-angle-down" style={{ fontSize: "12px" }}></i>
                                                </div>
                                                <select name="" id="" style={{ border: "none", background: "transparent", outline: "none", fontSize: "11px", fontWeight: 500, marginLeft: "15px", maxHeight: "200px", color: "#000000" }}>
                                                    <option value="12:00 PM">12:00 PM</option>
                                                    <option value="12:00 PM">12:30 PM</option>
                                                    <option value="12:00 PM">01:00 PM</option>
                                                    <option value="12:00 PM">01:30 PM</option>
                                                    <option value="12:00 PM">02:00 PM</option>
                                                    <option value="12:00 PM">02:30 PM</option>
                                                    <option value="12:00 PM">03:00 PM</option>
                                                    <option value="12:00 PM">03:30 PM</option>
                                                    <option value="12:00 PM">04:00 PM</option>
                                                    <option value="12:00 PM">04:30 PM</option>
                                                    <option value="12:00 PM">05:00 PM</option>
                                                    <option value="12:00 PM">05:30 PM</option>
                                                    <option value="12:00 PM">06:00 PM</option>
                                                    <option value="12:00 PM">06:30 PM</option>
                                                    <option value="12:00 PM">07:00 PM</option>
                                                    <option value="12:00 PM">07:30 PM</option>
                                                    <option value="12:00 PM">08:00 PM</option>
                                                    <option value="12:00 PM">08:30 PM</option>
                                                    <option value="12:00 PM">09:00 PM</option>
                                                    <option value="12:00 PM">09:30 PM</option>
                                                    <option value="12:00 PM">10:00 PM</option>
                                                    <option value="12:00 PM">10:30 PM</option>
                                                    <option value="12:00 PM">11:00 PM</option>
                                                    <option value="12:00 PM">11:30 PM</option>

                                                    <option value="12:00 PM">12:00 AM</option>
                                                    <option value="12:00 AM">12:30 AM</option>
                                                    <option value="12:00 AM">01:00 AM</option>
                                                    <option value="12:00 AM">01:30 AM</option>
                                                    <option value="12:00 AM">02:00 AM</option>
                                                    <option value="12:00 AM">02:30 AM</option>
                                                    <option value="12:00 AM">03:00 AM</option>
                                                    <option value="12:00 AM">03:30 AM</option>
                                                    <option value="12:00 AM">04:00 AM</option>
                                                    <option value="12:00 AM">04:30 AM</option>
                                                    <option value="12:00 AM">05:00 AM</option>
                                                    <option value="12:00 AM">05:30 AM</option>
                                                    <option value="12:00 AM">06:00 AM</option>
                                                    <option value="12:00 AM">06:30 AM</option>
                                                    <option value="12:00 AM">07:00 AM</option>
                                                    <option value="12:00 AM">07:30 AM</option>
                                                    <option value="12:00 AM">08:00 AM</option>
                                                    <option value="12:00 AM">08:30 AM</option>
                                                    <option value="12:00 AM">09:00 AM</option>
                                                    <option value="12:00 AM">09:30 AM</option>
                                                    <option value="12:00 AM">10:00 AM</option>
                                                    <option value="12:00 AM">10:30 AM</option>
                                                    <option value="12:00 AM">11:00 AM</option>
                                                    <option value="12:00 AM">11:30 AM</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <Image src={MapIcon} /><input type="text" placeholder='2500 Lakeside Dr Austin, TX 78613' />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="">Drop-off</label>
                                        <div className="col-lg-4">
                                            <div className="d-flex gap-2 align-items-center">
                                                <Image src={CalendarIcon} alt="Calendar Icon" />
                                                <div className="d-flex align-items-center" style={{ maxWidth: "80px" }}>
                                                    <DatePicker
                                                        style={{ width: "75px" }}
                                                        selected={dropOffDate}
                                                        startDate={pickUpDate}
                                                        onChange={(date) => setDropOffDate(date)}
                                                        timeInputLabel="Time:"
                                                        dateFormat="MM/dd/yyyy"
                                                    // showTimeInput
                                                    />
                                                    <i class="fa fa-angle-down" style={{ fontSize: "12px" }}></i>
                                                </div>
                                                <select name="" id="" style={{ border: "none", background: "transparent", outline: "none", fontSize: "11px", fontWeight: 500, marginLeft: "15px", color: "#000000" }}>
                                                    <option value="12:00 PM">12:00 PM</option>
                                                    <option value="12:00 PM">12:30 PM</option>
                                                    <option value="12:00 PM">01:00 PM</option>
                                                    <option value="12:00 PM">01:30 PM</option>
                                                    <option value="12:00 PM">02:00 PM</option>
                                                    <option value="12:00 PM">02:30 PM</option>
                                                    <option value="12:00 PM">03:00 PM</option>
                                                    <option value="12:00 PM">03:30 PM</option>
                                                    <option value="12:00 PM">04:00 PM</option>
                                                    <option value="12:00 PM">04:30 PM</option>
                                                    <option value="12:00 PM">05:00 PM</option>
                                                    <option value="12:00 PM">05:30 PM</option>
                                                    <option value="12:00 PM">06:00 PM</option>
                                                    <option value="12:00 PM">06:30 PM</option>
                                                    <option value="12:00 PM">07:00 PM</option>
                                                    <option value="12:00 PM">07:30 PM</option>
                                                    <option value="12:00 PM">08:00 PM</option>
                                                    <option value="12:00 PM">08:30 PM</option>
                                                    <option value="12:00 PM">09:00 PM</option>
                                                    <option value="12:00 PM">09:30 PM</option>
                                                    <option value="12:00 PM">10:00 PM</option>
                                                    <option value="12:00 PM">10:30 PM</option>
                                                    <option value="12:00 PM">11:00 PM</option>
                                                    <option value="12:00 PM">11:30 PM</option>

                                                    <option value="12:00 PM">12:00 AM</option>
                                                    <option value="12:00 AM">12:30 AM</option>
                                                    <option value="12:00 AM">01:00 AM</option>
                                                    <option value="12:00 AM">01:30 AM</option>
                                                    <option value="12:00 AM">02:00 AM</option>
                                                    <option value="12:00 AM">02:30 AM</option>
                                                    <option value="12:00 AM">03:00 AM</option>
                                                    <option value="12:00 AM">03:30 AM</option>
                                                    <option value="12:00 AM">04:00 AM</option>
                                                    <option value="12:00 AM">04:30 AM</option>
                                                    <option value="12:00 AM">05:00 AM</option>
                                                    <option value="12:00 AM">05:30 AM</option>
                                                    <option value="12:00 AM">06:00 AM</option>
                                                    <option value="12:00 AM">06:30 AM</option>
                                                    <option value="12:00 AM">07:00 AM</option>
                                                    <option value="12:00 AM">07:30 AM</option>
                                                    <option value="12:00 AM">08:00 AM</option>
                                                    <option value="12:00 AM">08:30 AM</option>
                                                    <option value="12:00 AM">09:00 AM</option>
                                                    <option value="12:00 AM">09:30 AM</option>
                                                    <option value="12:00 AM">10:00 AM</option>
                                                    <option value="12:00 AM">10:30 AM</option>
                                                    <option value="12:00 AM">11:00 AM</option>
                                                    <option value="12:00 AM">11:30 AM</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <Image src={MapIcon} /><input type="text" placeholder='2500 Lakeside Dr Austin, TX 78613' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={PaymentStyles.costBox}>
                                <div>
                                    <h2>Rental Deposit <span>($105.00)</span> </h2>
                                </div>
                                <div>
                                    <h2>Total Rental Costs <span>($3,285.52)</span></h2>
                                    <div>
                                        <span>Base cost (5% discounted)</span>
                                        <span>$2,493.75</span>
                                        <span>Estimated taxes & fees</span>
                                        <span>$791.77</span>
                                        <span>Estimated Total Costs</span>
                                        <span>$3,285.52</span>
                                    </div>
                                </div>
                            </div>
                            <div className={PaymentStyles.buttonBox}>
                                <button onClick={() => setShowPaymentModal("payment")}> <span>*$105.00</span> Pay Rental Deposit </button>
                                <button onClick={() => setShowPaymentModal("payment")}>**$3,285.52 Pay Total Rental Costs</button>
                            </div>
                        </div>
                    }
                    {
                        showPaymentModal === "payment" && <div className={PaymentStyles.checkoutModal}>
                            <h2>Paying $105.00 as rental deposit for reservation code ATX-001-3099</h2>
                            <div>
                                <h3>RENTER INFORMATION</h3>
                                <div className='row row-cols-md-2 row-cols-1 align-items-center'>
                                    <div>
                                        <div className={`${PaymentStyles.checkoutModalInputBox} me-md-1 me-0`}>
                                            <label htmlFor="">First name</label>
                                            <input type="text" placeholder='Enter your first name' />
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${PaymentStyles.checkoutModalInputBox} ms-md-1 ms-0`}>
                                            <label htmlFor="">Last name</label>
                                            <input type="text" placeholder='Enter your last name' />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${PaymentStyles.checkoutModalInputBox} my-2`}>
                                    <label htmlFor="">Email</label>
                                    <input type="text" placeholder='Enter your email address' />
                                </div>
                                <div className={`${PaymentStyles.checkoutModalInputBox} my-2`}>
                                    <label htmlFor="">Phone number</label>
                                    <input type="text" placeholder='Enter your phone number' />
                                </div>
                                <div className='row align-items-center' style={{ background: "#FFFFFF", borderRadius: "99px", margin: 0 }}>
                                    <div className={`${PaymentStyles.checkoutModalInputBox} col-md-5 col-12`}>
                                        <label htmlFor="">Driver's license</label>
                                        <input type="text" placeholder="Enter your driver's license number" />
                                    </div>
                                    <div className={`${PaymentStyles.checkoutModalInputBox} col-md-3 col-12`}>
                                        <label htmlFor="">Expriation date</label>
                                        <input type="text" placeholder='Day/Month/Year' />
                                    </div>
                                    <div className={`${PaymentStyles.checkoutModalInputBox} col-md-4 col-12`}>
                                        <label htmlFor="">State</label>
                                        <select name="" id="">
                                            <option value="">Select the state</option>
                                        </select>
                                    </div>
                                </div>
                                {/* <div className={PaymentStyles.checkoutModalCheckbox}>
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">Provide my driver’s license now</label>
                                </div> */}
                                <p>Renters are required by laws to have valid driver’s license which may be subject to verification from the state of issuance.</p>
                            </div>
                            <div>
                                <h3>PAYMENT INFORMATION</h3>
                                <div className={`${PaymentStyles.checkoutModalInputBox} my-2`}>
                                    <label htmlFor="">Name</label>
                                    <input type="text" placeholder='Name as it appears on card' />
                                </div>
                                <div className='row align-items-center' style={{ background: "#FFFFFF", borderRadius: "99px", margin: 0 }}>
                                    <div className={`${PaymentStyles.checkoutModalInputBox} col-md-5 col-12`}>
                                        <label htmlFor="">Card</label>
                                        <input type="text" placeholder='Enter your card number' />
                                    </div>
                                    <div className={`${PaymentStyles.checkoutModalInputBox} col-md-2 col-12`}>
                                        <label htmlFor="">CVV</label>
                                        <input type="text" placeholder='Enter the code' />
                                    </div>
                                    <div className={`${PaymentStyles.checkoutModalInputBox} col-md-5 col-12`}>
                                        <label htmlFor="">Expiration date</label>
                                        <input type="text" placeholder='Enter the date' />
                                    </div>
                                </div>
                                <div className={`${PaymentStyles.checkoutModalInputBox} my-2`}>
                                    <label htmlFor="">Billing address</label>
                                    <input type="text" placeholder='Enter your billing address' />
                                </div>
                                <div className={`${PaymentStyles.checkoutModalInputBox} my-2`}>
                                    <label htmlFor="">Billing address 1</label>
                                    <input type="text" placeholder='Enter your billing address 1' />
                                </div>

                                <div className='row align-items-center' style={{ background: "#FFFFFF", borderRadius: "99px", margin: 0 }}>
                                    <div className={`${PaymentStyles.checkoutModalInputBox} col-md-3 col-12`}>
                                        <label htmlFor="">City</label>
                                        <input type="text" placeholder='Enter your City' />
                                    </div>
                                    <div className={`${PaymentStyles.checkoutModalInputBox} col-md-3 col-12`}>
                                        <label htmlFor="">Zip</label>
                                        <input type="text" placeholder='Enter the Zip code' />
                                    </div>
                                    <div className={`${PaymentStyles.checkoutModalInputBox} col-md-3 col-12`}>
                                        <label htmlFor="">State</label>
                                        <select name="" id="">
                                            <option value="">Select the State</option>
                                        </select>
                                    </div>
                                    <div className={`${PaymentStyles.checkoutModalInputBox} col-md-3 col-12`}>
                                        <label htmlFor="">Country</label>
                                        <select name="" id="">
                                            <option value="">Select the Country</option>
                                        </select>
                                    </div>
                                </div>

                                <div className={`${PaymentStyles.checkoutModalCheckbox} mt-3`}>
                                    {/* <input type="checkbox" name="" id="" /> */}
                                    <label htmlFor="">Free cancellation with full refund before March 13, 2022, at 00:45 PM</label>
                                </div>
                                <div className={`${PaymentStyles.checkoutModalCheckbox} mt-1`}>
                                    <input type="checkbox" />
                                    <label htmlFor="">
                                        <p style={{ color: "#898989", marginBottom: 0 }}>I agree to VEHDE’s <span style={{ color: "#DE4F4D" }}>Terms of Use</span> and acknowledge that I have read the <span style={{ color: "#DE4F4D" }}>Privacy Notice</span>.</p>
                                    </label>
                                </div>
                            </div>
                            <button className='my-btn mt-3 mx-auto' onClick={() => setShowPaymentModal(null)}>Pay Now</button>
                        </div>
                    }
                </ModalLg>
            }
        </>
    )
}

export default MainBox
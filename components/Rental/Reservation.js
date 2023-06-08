import styles from "../../styles/dashboard/Rental/Reservation.module.css"

import CarImg from "../../assets/img/dashboard/MyHost/Rental/car.png"
import Image from "next/image"
import { useState } from "react"
import ModalMd from "../../components/common/ModalMd"
import ModalLg from "../common/ModalLg"
import CarDetailsPopupHeader from "../carPictures&Specification/CarDetailsPopupHeader"
import CarDetailsPopupPictures from "../carPictures&Specification/CarDetailsPopupPictures"
import CarDetailsPopupMap from "../carPictures&Specification/CarDetailsPopupMap"
import RentalDataPopupHeader from "./RentalDataPopupHeader"
import Link from "next/link"
import MainBox from "./Review/MainBox"

import PaymentStyles from "../../styles/dashboard/Payment.module.css"
import FourDoorImg from "../../assets/img/dashboard/MyRenter/Payment/4Door.png"
import FiveSeatsImg from "../../assets/img/dashboard/MyRenter/Payment/5Seats.png"
import MPGIMG from "../../assets/img/dashboard/MyRenter/Payment/37-40MPG.png"
import AutomaticImg from "../../assets/img/dashboard/MyRenter/Payment/Automatic.png"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import MapIcon from "../../assets/img/map-icon.png"
import CalendarIcon from "../../assets/img/calendar-icon.png"



const Reservation = ({ setModifyModal, showCancellationModal, setShowCancellationModal }) => {

    const [showSingle, setShowSingle] = useState(null)
    const [showModalSm, setShowModalSm] = useState(null)
    const [showModalLg, setShowModalLg] = useState(null)
    const [modificationModal, setModificationModal] = useState(null)
    const [showCarDetails, setShowCarDetails] = useState(null)
    const [showCostDetails, setShowCostDetails] = useState(null)
    const [showPaymentModal, setShowPaymentModal] = useState(null)

    const [pickUpDate, setPickUpDate] = useState(new Date())
    const [pickUpDateTime, setPickUpDateTime] = useState("10:10 PM")
    const [dropOffDate, setDropOffDate] = useState(new Date())

    return (
        <>
            <div className={styles.container}>
                {
                    showSingle !== null && <span onClick={() => setShowSingle(null)}>
                        <i className="fa fa-arrow-left"></i>
                    </span>
                }
                <h2 className="text-center">Reservation</h2>
                <div className={styles.tableWrapper}>
                    <table className="table table-hover">
                        <thead>
                            <th></th>
                            <th>Car</th>
                            <th>Pick-up date/ Location</th>
                            <th>Return date/ Location</th>
                            <th>Host</th>
                            <th>Driver</th>
                            <th className={styles.statusTh}>
                                <div>
                                    <span>Status <i className="fa fa-chevron-down"></i></span>
                                </div>
                            </th>
                            <th>Rate</th>
                            <th>Schedules/ Payment</th>
                        </thead>
                        <tbody>
                            {
                                showSingle === null && <>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            <div>
                                                <h3>Toyota Venza
                                                    LE 2022
                                                    <span onClick={() => setShowModalLg(1)}>See details</span>
                                                </h3>
                                                <p onClick={() => setModificationModal(1)}>RSRVE Code:
                                                    <a href="#">ATX-001-3099</a>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="">4/19/22 @</a>
                                        </td>
                                        <td>
                                            <a href="">5/14/22 @</a>
                                        </td>
                                        <td>
                                            <span>
                                                Edwards @
                                                TX 78703
                                            </span>
                                        </td>
                                        <td>
                                            N/A
                                        </td>
                                        <td>
                                            <div>
                                                <button className={styles.reservedBtn}>Reserved</button>
                                                <button className={styles.warningInfoBtnInTable} onClick={() => setShowPaymentModal("cost")}>
                                                    ATTENTION: Payment of rental deposit is required
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <span>
                                                Car:
                                                $105/day
                                            </span>
                                            <span onClick={() => setShowCarDetails(true)}>Car details</span>
                                        </td>
                                        <td>
                                            <div>
                                                <h4>25 rental days</h4>
                                                <button>
                                                    <span>*Total costs:</span>
                                                    <a href="#">$2,493.75</a>
                                                </button>
                                                <span onClick={() => setShowSingle(1)}>Pay details</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            <div>
                                                <h3>Toyota Venza
                                                    LE 2022
                                                    <span>See details</span>
                                                </h3>
                                                <p onClick={() => setModificationModal(2)}>RSRVE Code:
                                                    <a href="#">ATX-001-3092</a>
                                                </p>
                                            </div>
                                        </td>

                                        <td>
                                            <a href="">4/12/22 @</a>
                                        </td>
                                        <td>
                                            <a href="">4/17/22 @</a>
                                        </td>
                                        <td>
                                            <span>
                                                Edwards @
                                                TX 78703
                                            </span>
                                        </td>
                                        <td>
                                            N/A
                                        </td>
                                        <td>
                                            <div>
                                                <button className={styles.activeBtn}>Active</button>
                                            </div>
                                        </td>
                                        <td>
                                            <span>
                                                Car:
                                                $105/day
                                            </span>
                                            <span onClick={() => setShowCarDetails(true)}>Car details</span>
                                        </td>
                                        <td>
                                            <div>
                                                <h4>5 rental days</h4>
                                                <button>
                                                    <span>*Total costs:</span>
                                                    <a href="#">$2,493.75</a>
                                                </button>
                                                <span onClick={() => setShowSingle(2)}>Pay details</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            <div>
                                                <h3>Toyota Venza
                                                    LE 2022
                                                    <span>See details</span>
                                                </h3>
                                                <p>RSRVE Code:
                                                    <a href="">ATX-001-3088</a>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="">3/15/22 @</a>
                                        </td>
                                        <td>
                                            <a href="">4/10/22 @</a>
                                        </td>
                                        <td>
                                            <span>
                                                Edwards @
                                                TX 78703
                                            </span>
                                        </td>
                                        <td>
                                            N/a
                                        </td>
                                        <td>
                                            <div>
                                                <button className={styles.completedBtn}>Completed</button>
                                            </div>
                                        </td>
                                        <td>
                                            <span>
                                                Car:
                                                $105/day
                                            </span>
                                            <span onClick={() => setShowCarDetails(true)}>Car details</span>
                                        </td>
                                        <td>
                                            <div>
                                                <h4>25 rental days</h4>
                                                <button>
                                                    <span>*Total costs:</span>
                                                    <a href="#">$2,493.75</a>
                                                </button>
                                                <span onClick={() => setShowSingle(3)}>Pay details</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            <div>
                                                <h3>Toyota Venza
                                                    LE 2022
                                                    <span>See details</span>
                                                </h3>
                                                <p>RSRVE Code:
                                                    <a href="">ATX-001-3092</a>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="">4/12/22 @</a>
                                        </td>
                                        <td>
                                            <a href="">4/17/22 @</a>
                                        </td>
                                        <td>
                                            <span>
                                                Edwards @
                                                TX 78703
                                            </span>
                                        </td>
                                        <td>
                                            N/A
                                        </td>
                                        <td>
                                            <div>
                                                <button className={styles.cancelledBtn}>Cancelled</button>
                                            </div>
                                        </td>
                                        <td>
                                            <span>
                                                Car:
                                                $105/day
                                            </span>
                                            <span onClick={() => setShowCarDetails(true)}>Car details</span>
                                        </td>
                                        <td>
                                            <div>
                                                <h4>25 rental days</h4>
                                                <button>
                                                    <span>*Total costs:</span>
                                                    <a href="#">$2,493.75</a>
                                                </button>
                                                <span onClick={() => setShowSingle(4)}>Pay details</span>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            }
                            {
                                showSingle !== null && <>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                            {
                                                showSingle === 2 && <div className={styles.cancelRentalBtn} onClick={() => setShowCancellationModal(true)}>
                                                    <span>Cancel rental</span>
                                                    <i className="fa fa-chevron-down"></i>
                                                </div>
                                            }
                                        </td>
                                        <td>
                                            <div>
                                                <h3>Toyota Venza
                                                    LE 2022
                                                    <span onClick={() => setShowModalLg(1)}>See details</span>
                                                </h3>
                                                <p onClick={() => setModificationModal(1)}>RSRVE Code:
                                                    <a href="#">ATX-001-3099</a>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="">4/19/22 @</a>
                                        </td>
                                        <td>
                                            <a href="">5/14/22 @</a>
                                        </td>
                                        <td>
                                            <span>
                                                Edwards @
                                                TX 78703
                                            </span>
                                        </td>
                                        <td>
                                            N/A
                                        </td>
                                        <td>
                                            <div>
                                                {
                                                    showSingle === 1 && <button className={styles.reservedBtn}>Reserved</button>
                                                }
                                                {
                                                    showSingle === 2 && <button className={styles.activeBtn}>Active</button>
                                                }
                                                {
                                                    showSingle === 3 && <button className={styles.completedBtn}>Completed</button>
                                                }
                                                {
                                                    showSingle === 4 && <button className={styles.cancelledBtn}>Cancelled</button>
                                                }
                                                {
                                                    showSingle === 3 && <button className={styles.warningInfoBtnInTable}>
                                                        Renter confirmed drop-off. Waiting for host’s confirmation.
                                                    </button>
                                                }
                                                {
                                                    showSingle === 1 && <button className={styles.warningInfoBtnInTable} onClick={() => setShowPaymentModal("cost")}>
                                                        ATTENTION: Payment of rental deposit is required
                                                    </button>
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <span>
                                                Car:
                                                $105/day
                                            </span>
                                            <span onClick={() => setShowCarDetails(true)}>Car details</span>
                                        </td>
                                        <td>
                                            <div>
                                                <h4>26 days of car rentals</h4>
                                                <button>
                                                    <span onClick={() => setShowModalSm(1)}>*Total costs:</span>
                                                    <a href="#">$2,493.75</a>
                                                </button>
                                                <button>
                                                    <span>Payment made:</span>
                                                    <a href="#">$0.00</a>
                                                </button>
                                                <button>
                                                    <span>Remaining costs:</span>
                                                    <a href="#">$2,493.75</a>
                                                </button>
                                                <span onClick={() => setShowCostDetails(true)}>Cost details</span>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            }
                        </tbody>
                    </table>
                </div>
                {
                    showSingle === null && <div>
                        <Link href="/Renter/BrowseCars" target="_blank" className="my-btn">Reserve another car</Link>
                    </div>
                }
                {
                    showSingle !== null && <div className={styles.bottomInfo}>
                        <Link href="/Renter/BrowseCars" target="_blank" className="my-btn w-100" style={{ cursor: "pointer" }}>Reserve another car</Link>
                    </div>
                }
            </div>
            {
                modificationModal && <ModalMd setModal={setModificationModal}>
                    <div className={styles.modificationModal}>
                        <h2>RSRVE Code <span>ATX-001-3099</span></h2>
                        <p>This is a 25-day reservation for <span>Toyota Venza LE 2022</span></p>
                        <div>
                            <button className="my-btn" onClick={() => setModifyModal(1)}>
                                {
                                    modificationModal === 1 && "Modify Reservation"
                                }
                                {
                                    modificationModal === 2 && "Modify Rental"
                                }
                            </button>
                            <button onClick={() => {
                                modificationModal === 1 && setShowCancellationModal(true)
                                setModificationModal(null)
                            }}>
                                {
                                    modificationModal === 1 && "Cancel Reservation"
                                }
                                {
                                    modificationModal === 2 && "Cancel Rental"
                                }
                            </button>
                        </div>
                        <Link href="/Renter/BrowseCars" target="_blank">Reserve another car here</Link>
                    </div>
                </ModalMd>
            }
            {
                showModalSm && <>
                    <ModalMd setModal={setShowModalSm}>
                        <div className={styles.paymentScheduleModal}>
                            <h2>Payment schedule</h2>
                            <div>
                                <div>
                                    <span>Duration</span>
                                    <span>Scheduled</span>
                                    <span>Paid</span>
                                </div>
                                <table>
                                    <thead>
                                        <th>DD</th>
                                        <th>$</th>
                                        <th>MM/DD/YY</th>
                                        <th>$</th>
                                        <th>MM/DD/YY</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td >11</td>
                                            <td >1,097.25</td>
                                            <td>5/14/2022</td>
                                            <td>------</td>
                                            <td>------</td>
                                        </tr>
                                        <tr>
                                            <td>14</td>
                                            <td>1,396.50</td>
                                            <td>5/3/2022</td>
                                            <td>------</td>
                                            <td>------</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>For further details, please check the VEHDE Host <a href="">Payment Policy</a></p>
                        </div>
                    </ModalMd>
                </>
            }
            {
                showModalLg && <>
                    <ModalLg setModal={setShowModalLg} style={{ zIndex: 99999, paddingTop: "80px" }}>
                        <RentalDataPopupHeader hideHighlight={true} />
                        <MainBox hideEstCost={true} hideList={true} hidePrice={true} hideageResidency={true} showAttention="warn" />
                        <div className={styles.rentalDataList}>
                            <div>
                                <h3>Highlighted Features</h3>
                                <div>
                                    <span>
                                        <i className="fa fa-check"></i>
                                    </span>
                                    <span>Hybrid powertrain with 219 net system horse power</span>
                                </div>
                                <div>
                                    <span>
                                        <i className="fa fa-check"></i>
                                    </span>
                                    <span>Electronic On-Demand All-Wheel Drive (AWD)</span>
                                </div>
                                <div>
                                    <span>
                                        <i className="fa fa-check"></i>
                                    </span>
                                    <span>Height-adjustable hands-free power liftgate with jam protection</span>
                                </div>
                                <div>
                                    <span>
                                        <i className="fa fa-check"></i>
                                    </span>
                                    <span>8-way power-adjustable driver's seat with lumbar support</span>
                                </div>
                                <div>
                                    <span>
                                        <i className="fa fa-check"></i>
                                    </span>
                                    <span>Toyota Safety Sense™ 2.0 (TSS 2.0) 173 and Star Safety System™</span>
                                </div>
                                <h4>Save Money</h4>
                                <p><span>5% discount</span> for at least <span>7-day reservation</span> applies to this rental</p>
                            </div>
                            <CarDetailsPopupPictures />
                        </div>
                    </ModalLg>
                </>
            }
            {
                showCancellationModal && <>
                    <ModalLg setModal={setShowCancellationModal} style={{ zIndex: 9999, paddingTop: "90px" }}>
                        <i className="fa fa-chevron-left" style={{ cursor: "pointer" }} onClick={() => setShowCancellationModal(null)}></i>
                        <div className={styles.cancellationModal}>
                            <h2>
                                Cancellation of active rental for Toyota Venza LE 2022 <br /> (RSRVE Code ATX-001-3088)</h2>
                            <p>
                                We are sad that this rental is being cancelled. Instead of cancelling your rental,
                                you may submit Heat Ticket for us to try resolve any rental issue you may have.
                            </p>
                            <div>
                                <div>
                                    <input type="text" placeholder="Cancel Car Rental" readOnly />
                                </div>
                            </div>
                            <div>
                                <h3>Please select one of the reasons for cancellation of your renta</h3>
                                <div>
                                    <select name="" id="">
                                        <option value="">Reason for car rental cancellation</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <h3>Car drop-off date and location:</h3>
                                <div>
                                    <select name="" id="">
                                        <option value="">Car Drop-off Date</option>
                                    </select>
                                </div>
                                <p>
                                    NOTE: Drop-off date cannot be later than 24 hours after cancellation. Car must be
                                    delivered to host as scheduled to avoid late drop-off penalty fees.
                                </p>
                            </div>
                            <div>
                                <div>
                                    <select name="" id="">
                                        <option value="">Car Drop-off location</option>
                                    </select>
                                </div>
                                <p>
                                    NOTE: Drop-off location is same as the one specified by the renter during reservation.
                                </p>
                            </div>
                            <div>
                                <button className="my-btn mx-auto">Cancel car rental</button>
                            </div>
                        </div>
                    </ModalLg>
                </>
            }
            {
                showCarDetails && <ModalMd setModal={setShowCarDetails}>
                    <div className={styles.carDetailsModal}>
                        <h2>CAR DETAILS</h2>
                        <p>You currently have 25 days of car rental
                            scheduled for <span>Toyota Venza LE 2022</span></p>
                        <div>
                            <div>
                                <span>From</span>
                                <span>To</span>
                                <span>Duration DD</span>
                                <span>Rate</span>
                            </div>
                            <div>
                                <span>4/19/22 10:45 AM</span>
                                <span>5/14/22 10:45 AM</span>
                                <span>25</span>
                                <span>$105</span>
                            </div>
                            <Link href="/Renter/BrowseCars" target="_blank">Reserve another car here</Link>
                        </div>
                    </div>
                </ModalMd>
            }
            {
                showCostDetails && <ModalMd setModal={setShowCostDetails}>
                    <div className={styles.costDetailsModal}>
                        <h2>COST DETAILS</h2>
                        <div>
                            <div>
                                RENTAL DURATION|
                                <span> 25 days</span>
                            </div>
                            <div>
                                RATE|
                                <span> $105</span>
                            </div>
                            <div>
                                REGULAR
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Base Cost</span>
                                <span>$2,625.00</span>
                            </div>
                            <div>
                                <span>Discount Host Agreed to Give Renter (5%)</span>
                                <span>$131.25</span>
                            </div>
                            <div>
                                <span>Delivery Fee from Renter</span>
                                <span>$ -</span>
                            </div>
                            <div>
                                <span>Gross Cost</span>
                                <span>$2,493.75</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Taxes & Fees</span>
                                <span>$791.77</span>
                            </div>
                            <div>
                                <span>Service Fees (13.5%)</span>
                                <span>$ 336.66</span>
                            </div>
                            <div>
                                <span>Total Tax (18.25%)</span>
                                <span>$ 455.11</span>
                            </div>
                        </div>
                        <div>
                            <span>ESTIMATED TOTAL COST</span>
                            <span>$ 3,285.52</span>
                        </div>
                        <Link href="/Renter/BrowseCars">For further details, please check the <span>VEHDE Rental Payment Policy</span></Link>
                    </div>
                </ModalMd>
            }
            {
                showPaymentModal && <ModalLg setModal={setShowPaymentModal} style={{ zIndex: 9999 }}>
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
                                    <label htmlFor="">Free cancellation with full refund before March 13, 2022, at 00:45 PM</label>
                                </div>
                                <div className={`${PaymentStyles.checkoutModalCheckbox} mt-3`}>
                                    <input type="checkbox" name="" id="" />
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

export default Reservation
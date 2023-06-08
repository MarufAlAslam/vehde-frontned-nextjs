import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../components/layout/DashboardLayout'

import OverviewIcon from "../../../assets/img/dashboard/Payment/Overview.png"
import RentalsIcon from "../../../assets/img/dashboard/MyHost/Rentals.png"
import VEHDEScoreIcon from "../../../assets/img/dashboard/Payment/VEHDEScore.png"
import ViewMyPaymentIcon from "../../../assets/img/dashboard/Payment/ViewMyPayment.png"
import Link from 'next/link'
import Image from 'next/image'

import styles from "../../../styles/dashboard/Payment.module.css"
import EarningTable from '../../../components/payment/EarningTable'
import EarningDetailTable from '../../../components/payment/EarningDetailTable'
import CarImg from "../../../assets/img/dashboard/MyHost/Rental/car.png"
import ModalLg from '../../../components/common/ModalLg'

import FourDoorImg from "../../../assets/img/dashboard/MyRenter/Payment/4Door.png"
import FiveSeatsImg from "../../../assets/img/dashboard/MyRenter/Payment/5Seats.png"
import MPGIMG from "../../../assets/img/dashboard/MyRenter/Payment/37-40MPG.png"
import AutomaticImg from "../../../assets/img/dashboard/MyRenter/Payment/Automatic.png"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import MapIcon from "../../../assets/img/map-icon.png"
import CalendarIcon from "../../../assets/img/calendar-icon.png"

import RegularInsuranceImg from "../../../assets/img/dashboard/MyRenter/RegularInsurance.png"
import VEHSAVEImg from "../../../assets/img/dashboard/MyRenter/VEHSAVE.png"
import RoadsideAssistanceImg from "../../../assets/img/dashboard/MyRenter/RoadsideAssistance.png"
import ProtectionBox from "../../../components/Rental/Review/ProtectionBox"
import MainBox from '../../../components/Rental/Review/MainBox'
import RentalDataPopupHeader from '../../../components/Rental/RentalDataPopupHeader'
import CarDetailsPopupPictures from '../../../components/carPictures&Specification/CarDetailsPopupPictures'

import ReservationStyles from "../../../styles/dashboard/Rental/Reservation.module.css"



export const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
export const fullYear = new Date().getFullYear()

const Payment = () => {

    const [pickUpDate, setPickUpDate] = useState(new Date())
    const [pickUpDateTime, setPickUpDateTime] = useState("10:10 PM")
    const [dropOffDate, setDropOffDate] = useState(new Date())


    const [activeBox, setActiveBox] = useState("overview")
    const [earningMonth, setEarningMonth] = useState(`${monthNames[new Date().getMonth()]} ${fullYear}`)
    const [userRole, serUserRole] = useState("host")
    const [payFeesAndAddOnModal, setPayFeesAndAddOnModal] = useState(null)
    const [checkoutModal, setCheckoutModal] = useState(null)
    const [payFeesModal, setPayFeesModal] = useState(null)
    const [showDetails, setShowDetails] = useState(null)
    const [feesType, setFeesType] = useState("rental")


    return (
        <DashboardLayout>
            {
                userRole === "host" && <div className={styles.wrapper}>
                    <div>
                        <div className={activeBox === "overview" && styles.activeBox} onClick={() => setActiveBox("overview")}>
                            <Image src={OverviewIcon} alt='' />
                            <span>Overview</span>
                        </div>
                        <div onClick={() => setActiveBox("rentals")} className={activeBox === "rentals" && styles.activeBox}>
                            <Image src={RentalsIcon} alt='' />
                            <span>Rentals</span>
                        </div>
                        <div className={activeBox === "vehde score" && styles.activeBox} onClick={() => setActiveBox("vehde score")}>
                            <Image src={VEHDEScoreIcon} alt='' />
                            <span>VEHDE Score</span>
                        </div>
                        <Link href="/dashboard/Payment/PaymentMethod" className={activeBox === "payment method" && styles.activeBox} onClick={() => setActiveBox("payment method")}>
                            <Image src={ViewMyPaymentIcon} alt='' />
                            <span>View My Payment Method</span>
                        </Link>
                    </div>
                    {
                        activeBox === "overview" && <div className={styles.overviewBoxWrapper}>
                            <EarningTable title="Earning Overview" />
                        </div>
                    }
                    {
                        activeBox === "rentals" && <div className={styles.rentalsBoxWrapper}>
                            <EarningTable title="Rental Earning" setEarningMonth={setEarningMonth} />
                            <EarningDetailTable title={`My Rental Earning | ${earningMonth}`} />
                        </div>
                    }
                    {
                        activeBox === "vehde score" && <div className={styles.rentalsBoxWrapper}>
                            <EarningTable title="VEHDEScore Earning" setEarningMonth={setEarningMonth} />
                            <EarningDetailTable title={`My VEHDEScore Earning | ${earningMonth}`} />
                        </div>
                    }
                </div>
            }
            {
                userRole === "renter" && <>
                    <div className={styles.renterContainer}>
                        <div className={styles.renterBanner}>
                            <h2>Payment</h2>
                            <p><span>ATTENTION:</span> You currently have one or more outstanding payments to make at this moment.</p>
                            <p>Please select “Pay Fees” below to pay any outstanding fees applicable to any of your scheduled reservations, or “Add-On” to pay for additional services like Protection (auto insurance) and VEHSAVE.</p>
                            <div>
                                <button className='my-btn' onClick={() => setPayFeesModal({})}>Pay Fees</button>
                                <button onClick={() => setPayFeesAndAddOnModal("addOnSearch")}>Add-On</button>
                            </div>
                        </div>
                        <div className={styles.tableContainer}>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Car</th>
                                        <th>RSRVE Code <i className='fa fa-chevron-down'></i></th>
                                        <th>Scheduled Costs</th>
                                        <th>Payment Status</th>
                                        <th>Required Action <i className='fa fa-chevron-down'></i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            <h5>Toyota Venza LE 2022</h5>
                                            <span onClick={() => setShowDetails({})}>See details</span>
                                        </td>
                                        <td>
                                            <Link href="">ATX-001-3099</Link>
                                        </td>
                                        <td>
                                            <Link href="">$3,285.52</Link>
                                        </td>
                                        <td>Pending</td>
                                        <td>
                                            <button className={styles.tableSuccessBtn} onClick={() => setCheckoutModal("checking")}>YES: Rental Deposit</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            <h5>Toyota Venza LE 2022</h5>
                                            <span onClick={() => setShowDetails({})}>See details</span>
                                        </td>
                                        <td>
                                            <Link href="">ATX-001-3099</Link>
                                        </td>
                                        <td>
                                            <Link href="">$3,285.52</Link>
                                        </td>
                                        <td>Part-paid</td>
                                        <td>
                                            <button className={styles.tableSuccessBtn}>YES: Rental Fees</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            <h5>Toyota Venza LE 2022</h5>
                                            <span onClick={() => setShowDetails({})}>See details</span>
                                        </td>
                                        <td>
                                            <Link href="">ATX-001-3099</Link>
                                        </td>
                                        <td>
                                            <Link href="">$3,285.52</Link>
                                        </td>
                                        <td>Paid</td>
                                        <td>
                                            <button>none</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <button className="my-btn w-100" onClick={() => setPayFeesAndAddOnModal("view and find")}>View My Fees and Payment Schedules</button>
                        </div>
                    </div>

                    {
                        payFeesAndAddOnModal !== null && <ModalLg setModal={setPayFeesAndAddOnModal}>
                            <div className={styles.payFeesAndAddOnModal}>
                                <h2>Rental payment for Edwards Dane
                                    <br /> (VEHDE ID: ED-R (TX) 155013-78703)</h2>
                                <p>Please select a reservation, from the list of your existing
                                    reservations, for which you want to pay for.</p>
                                <div className={styles.searchBox}>
                                    <h3>Reservation</h3>
                                    <select name="" id="">
                                        <option value="">ATX-001-3088</option>
                                    </select>
                                    <input type="text" placeholder='Enter the reserved car name' onChange={() => setPayFeesAndAddOnModal(payFeesAndAddOnModal === "addOnSearch" || payFeesAndAddOnModal === "addOn" ? "addOn" : "searched")} value={"2022 Toyota Venza"} />
                                </div>
                                {
                                    payFeesAndAddOnModal !== "view and find" && payFeesAndAddOnModal !== "addOnSearch" && payFeesAndAddOnModal !== "addOn" && <>
                                        <div className={styles.resultBox}>
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
                                        <div className={styles.costBox}>
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
                                        <div className={styles.buttonBox}>
                                            <button onClick={() => setCheckoutModal("checking")}> <span>*$105.00</span> Pay Rental Deposit </button>
                                            <button onClick={() => setCheckoutModal("checking")}>**$3,285.52 Pay Total Rental Costs</button>
                                        </div>
                                    </>
                                }
                                {
                                    payFeesAndAddOnModal === "addOn" && <>
                                        <div className={styles.resultBox}>
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
                                                            <div className="d-flex align-items-center gap-1" style={{ maxWidth: "80px" }}>
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
                                                            <div className="d-flex align-items-center gap-1" style={{ maxWidth: "80px" }}>
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
                                    </>
                                }
                                {
                                    payFeesAndAddOnModal === "addOn" && <>
                                        <div className={styles.addOnCostBox}>
                                            <div>
                                                <span>Add-On</span>
                                                <span>$0</span>
                                                <span>Estimated taxes & fees</span>
                                                <span>$0</span>
                                                <span>Estimated Total Costs</span>
                                                <span>$0</span>
                                            </div>
                                        </div>
                                        {/* <div className={styles.addOnCheckBox}>
                                            <div>
                                                <span>10% Save</span>
                                                <h3>Regular Insurance</h3>
                                                <Image src={RegularInsuranceImg} alt="" />
                                                <div>
                                                    <input type="checkbox" name="" id="" />
                                                    <span>$9.95/DAY</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span>10% Save</span>
                                                <h3>VEHSAVE</h3>
                                                <Image src={VEHSAVEImg} alt="" />
                                                <div>
                                                    <input type="checkbox" name="" id="" />
                                                    <span>$9.95/DAY</span>
                                                </div>
                                            </div>
                                        </div> */}
                                        <ProtectionBox />
                                        <div className='text-center mt-4'>
                                            <button className="my-btn mx-auto">Proceed to Checkout</button>
                                        </div>
                                    </>
                                }
                                {
                                    payFeesAndAddOnModal === "addOnSearch" && <>
                                        <div className={styles.addOnCostBox}>
                                            <div>
                                                <span>Add-On</span>
                                                <span>$0</span>
                                                <span>Estimated taxes & fees</span>
                                                <span>$0</span>
                                                <span>Estimated Total Costs</span>
                                                <span>$0</span>
                                            </div>
                                        </div>
                                        {/* <div className={styles.addOnCheckBox}>
                                            <div>
                                                <span>
                                                    <i className='fa fa-info'></i>
                                                    <p>
                                                        Get a well-deserved auto insurance that protects you against financial loss in the event of a collision/accident.
                                                    </p>
                                                </span>
                                                <span>10% Save</span>
                                                <h3>Regular Insurance</h3>
                                                <Image src={RegularInsuranceImg} alt="" />
                                                <div>
                                                    <input type="checkbox" name="" id="" />
                                                    <span>$9.95/DAY</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span>
                                                    <i className='fa fa-info'></i>
                                                    <p>
                                                        Get a well-deserved auto insurance that protects you against financial loss in the event of a collision/accident.
                                                    </p>
                                                </span>
                                                <span>10% Save</span>
                                                <h3>Roadside assistance</h3>
                                                <Image src={RoadsideAssistanceImg} alt="" />
                                                <div>
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
                                                <h3>VEHSAVE</h3>
                                                <Image src={VEHSAVEImg} alt="" />
                                                <div>
                                                    <input type="checkbox" name="" id="" />
                                                    <span>$9.95/DAY</span>
                                                </div>
                                            </div>
                                        </div> */}
                                        <ProtectionBox />
                                        <div className='text-center mt-4'>
                                            <button className="my-btn mx-auto">Proceed to Checkout</button>
                                        </div>
                                    </>
                                }
                            </div>
                        </ModalLg>
                    }
                    {
                        checkoutModal === "checking" && <ModalLg setModal={setCheckoutModal}>
                            <div className={styles.checkoutModal}>
                                <h2>Paying $105.00 as rental deposit for reservation code ATX-001-3099</h2>
                                <div>
                                    <h3>RENTER INFORMATION</h3>
                                    <div className='row row-cols-md-2 row-cols-1 align-items-center'>
                                        <div>
                                            <div className={`${styles.checkoutModalInputBox} me-md-1 me-0`}>
                                                <label htmlFor="">First name</label>
                                                <input type="text" placeholder='Enter your first name' />
                                            </div>
                                        </div>
                                        <div>
                                            <div className={`${styles.checkoutModalInputBox} ms-md-1 ms-0`}>
                                                <label htmlFor="">Last name</label>
                                                <input type="text" placeholder='Enter your last name' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.checkoutModalInputBox} my-2`}>
                                        <label htmlFor="">Email</label>
                                        <input type="text" placeholder='Enter your email address' />
                                    </div>
                                    <div className={`${styles.checkoutModalInputBox} my-2`}>
                                        <label htmlFor="">Phone number</label>
                                        <input type="text" placeholder='Enter your phone number' />
                                    </div>
                                    <div className='row align-items-center' style={{ background: "#FFFFFF", borderRadius: "99px", margin: 0 }}>
                                        <div className={`${styles.checkoutModalInputBox} col-md-5 col-12`}>
                                            <label htmlFor="">Driver's license</label>
                                            <input type="text" placeholder="Enter your driver's license number" />
                                        </div>
                                        <div className={`${styles.checkoutModalInputBox} col-md-3 col-12`}>
                                            <label htmlFor="">Expriation date</label>
                                            <input type="text" placeholder='Day/Month/Year' />
                                        </div>
                                        <div className={`${styles.checkoutModalInputBox} col-md-4 col-12`}>
                                            <label htmlFor="">State</label>
                                            <select name="" id="">
                                                <option value="">Select the state</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* <div className={styles.checkoutModalCheckbox}>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Provide my driver’s license now</label>
                                    </div> */}
                                    <p>Renters are required by laws to have valid driver’s license which may be subject to verification from the state of issuance.</p>
                                </div>

                                <div>
                                    <h3>PAYMENT INFORMATION</h3>
                                    <div className={`${styles.checkoutModalInputBox} my-2`}>
                                        <label htmlFor="">Name</label>
                                        <input type="text" placeholder='Name as it appears on card' />
                                    </div>
                                    <div className='row align-items-center' style={{ background: "#FFFFFF", borderRadius: "99px", margin: 0 }}>
                                        <div className={`${styles.checkoutModalInputBox} col-md-5 col-12`}>
                                            <label htmlFor="">Card</label>
                                            <input type="text" placeholder='Enter your card number' />
                                        </div>
                                        <div className={`${styles.checkoutModalInputBox} col-md-2 col-12`}>
                                            <label htmlFor="">CVV</label>
                                            <input type="text" placeholder='Enter the code' />
                                        </div>
                                        <div className={`${styles.checkoutModalInputBox} col-md-5 col-12`}>
                                            <label htmlFor="">Expiration date</label>
                                            <input type="text" placeholder='Enter the date' />
                                        </div>
                                    </div>
                                    <div className={`${styles.checkoutModalInputBox} my-2`}>
                                        <label htmlFor="">Billing address</label>
                                        <input type="text" placeholder='Enter your billing address' />
                                    </div>
                                    <div className={`${styles.checkoutModalInputBox} my-2`}>
                                        <label htmlFor="">Billing address 1</label>
                                        <input type="text" placeholder='Enter your billing address 1' />
                                    </div>

                                    <div className='row align-items-center' style={{ background: "#FFFFFF", borderRadius: "99px", margin: 0 }}>
                                        <div className={`${styles.checkoutModalInputBox} col-md-3 col-12`}>
                                            <label htmlFor="">City</label>
                                            <input type="text" placeholder='Enter your City' />
                                        </div>
                                        <div className={`${styles.checkoutModalInputBox} col-md-3 col-12`}>
                                            <label htmlFor="">Zip</label>
                                            <input type="text" placeholder='Enter the Zip code' />
                                        </div>
                                        <div className={`${styles.checkoutModalInputBox} col-md-3 col-12`}>
                                            <label htmlFor="">State</label>
                                            <select name="" id="">
                                                <option value="">Select the State</option>
                                            </select>
                                        </div>
                                        <div className={`${styles.checkoutModalInputBox} col-md-3 col-12`}>
                                            <label htmlFor="">Country</label>
                                            <select name="" id="">
                                                <option value="">Select the Country</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className={`${styles.checkoutModalCheckbox} mt-3`}>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">I agree to VEHDE’s <Link href="" style={{ color: "#DE4F4D" }}>Terms of Use</Link> and acknowledge that I have read the <Link href="" style={{ color: "#DE4F4D" }}>Privacy Notice</Link>.</label>
                                    </div>
                                    <p>Free cancellation with full refund before March 13, 2022, at 00:45 PM</p>
                                </div>
                                <button className='my-btn mt-3 mx-auto' onClick={() => setCheckoutModal("paid")}>Pay Now</button>
                            </div>
                        </ModalLg>
                    }
                    {
                        payFeesModal && <ModalLg setModal={setPayFeesModal}>
                            <div className={styles.payFeesModal}>
                                <h2>Fees and Payment Schedules</h2>
                                <p>Please select a reservation, from the list of your existing reservations, for which you want to pay for.</p>
                                <div>
                                    <div>
                                        <div>
                                            <select name="" id="">
                                                <option value="">RSRVE Code</option>
                                            </select>
                                            <span>ATX-001-3099</span>
                                        </div>
                                        <Image src={CarImg} alt="" />
                                        <h4>2022 Toyota Venza</h4>
                                        <button onClick={() => setFeesType("rental")}>RENTAL FEES</button>
                                        <button onClick={() => setFeesType("penalty")}>PENALTY FEES</button>
                                    </div>
                                    <div>
                                        {
                                            feesType === "rental" && <>
                                                <h4>RENTAL COST DETAILS</h4>
                                                <div> RENTAL DURATION| <span>25 days</span> </div>
                                                <div>
                                                    <button>RATE| <span>$105</span></button>
                                                    <button>REGULAR</button>
                                                </div>
                                                <div>
                                                    <span>Base Cost</span>
                                                    <span>$2,625.00</span>
                                                    <span className={styles.redText}>Discount Host Agreed to Give Renter (5%)</span>
                                                    <span className={styles.redText}>$131.25</span>
                                                    <span>Delivery Fee from Renter</span>
                                                    <span>$ -</span>
                                                    <span>Gross Cost</span>
                                                    <span>$2,493.75</span>
                                                </div>
                                                <div>
                                                    <span className={styles.redText}>Taxes & Fees</span>
                                                    <span className={styles.redText}>$791.77</span>
                                                    <span>Service Fees (13.5%)</span>
                                                    <span>$336.66</span>
                                                    <span>Total Tax (18.25%)</span>
                                                    <span>$ 455.11</span>
                                                </div>
                                                <div>
                                                    <span>ESTIMATED TOTAL COST</span>
                                                    <span>$3,285.52</span>
                                                </div>
                                                <Link href="">For further details, please check the <span>VEHDE Rental Payment Policy</span></Link>
                                            </>
                                        }
                                        {
                                            feesType === "penalty" && <>
                                                <h4>PENALTY FEES</h4>
                                                <p style={{ margin: "20px 0", lineHeight: 1, fontSize: "14px" }}>Good job! You currently have no penalty fees on this reservation.</p>
                                                <p style={{ marginTop: "20px", lineHeight: 1, fontSize: "14px" }}>For further details, please check the <Link href="" style={{ color: "#737373" }}>VEHDE Penalty Fees Policy</Link></p>
                                            </>
                                        }
                                    </div>
                                    <div>
                                        {
                                            feesType === "rental" && <>
                                                <h4>RENTAL PAYMENT DETAILS</h4>
                                                <span>RENTAL DEPOSIT: $ 105.00</span>
                                                <span className={styles.redText}>Deadline 4/17/2022 10:45 AM</span>
                                                <span>OUTSTANDING: $ 3,180.52</span>
                                                <span className={styles.redText}>Deadline 4/18/2022 10:45 PM</span>
                                                <span className={styles.greenText}>Paid 3/10/2022 2:15 AM</span>
                                            </>
                                        }
                                        {
                                            feesType === "penalty" && <>
                                                <h4>PENALTY FEES DETAILS</h4>
                                            </>
                                        }
                                    </div>
                                </div>
                                <div className={styles.buttons}>
                                    <button onClick={() => { setPayFeesAndAddOnModal("searched"); setPayFeesModal(null) }}>Pay Fees</button>
                                    {/* <button onClick={() => { setPayFeesAndAddOnModal("addOnSearch"); setPayFeesModal(null) }}>Add-On</button> */}
                                </div>
                            </div>
                        </ModalLg>
                    }
                    {
                        showDetails && <ModalLg setModal={setShowDetails}>
                            <RentalDataPopupHeader hideHighlight={true} />
                            <MainBox hideEstCost={true} hideList={true} hidePrice={true} hideageResidency={true} showAttention="warn" />
                            <div className={ReservationStyles.rentalDataList}>
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
                    }
                </>
            }
        </DashboardLayout>
    )
}

export default Payment
import Image from "next/image"
import styles from "../../styles/common/LocationPickupDropOffbox.module.css"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

import MapIcon from "../../assets/img/map-icon.png"
import CalendarIcon from "../../assets/img/calendar-icon.png"
import { useState } from "react";


const LocationPickupDropOffBox = ({ showSm }) => {

    const [pickUpDate, setPickUpDate] = useState(new Date())
    const [pickUpDateTime, setPickUpDateTime] = useState("10:10 PM")
    const [dropOffDate, setDropOffDate] = useState(new Date())
    const [showMobileMap, setShowMobileMap] = useState(null)
    const [selectLocation, setSelectLocation] = useState(null)
    const [selectMapBoxName, setSelectMapBoxName] = useState(null)

    return (
        <div className={styles.reserveCarSectionWrapper}>
            <div className={styles.container}>
                <div className="row">
                    <div className={showSm ? "col-lg-12" : "col-lg-4"}>
                        <div>
                            <label htmlFor="">Location</label>
                        </div>
                        <div className="d-flex gap-1 align-items-center">
                            <Image src={MapIcon} alt="Map Icon" />
                            <input type="text" placeholder='Address' />
                        </div>
                    </div>
                    <div className={showSm ? "col-lg-12" : "col-lg-4"}>
                        <div>
                            <label htmlFor="">Pick-up</label>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
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
                            {/* <div className="d-flex align-items-center gap-2">
                                                <input type="text" placeholder='11:50' />
                                                <i class="fa fa-angle-down"></i>
                                            </div> */}
                        </div>
                    </div>
                    <div className={showSm ? "col-lg-12" : "col-lg-4"}>
                        <div>
                            <label htmlFor="">Drop-off</label>
                        </div>
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
                </div>
            </div>
        </div>
    )
}

export default LocationPickupDropOffBox
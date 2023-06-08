import { useState } from "react"
import DashboardLayout from "../../components/layout/DashboardLayout"

import styles from "../../styles/dashboard/CarListing.module.css"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import UploadCarPictures from "../../components/carPictures&Specification/UploadCarPictures";
import ModalLg from "../../components/common/ModalLg";
import CarDetailsPopupHeader from "../../components/carPictures&Specification/CarDetailsPopupHeader";
import CarDetailsPopupPictures from "../../components/carPictures&Specification/CarDetailsPopupPictures"
import CarDetailsPopupMap from "../../components/carPictures&Specification/CarDetailsPopupMap"
import CarDetailsPopupOverview from "../../components/carPictures&Specification/CarDetailsPopupOverview"
import ModalMd from "../../components/common/ModalMd";
import CarDetailsOverviewPopup from "../../components/carPictures&Specification/CarDetailsOverviewPopup";


const CarListing = () => {

    const [modal, setModal] = useState(null)

    const [startDate1, setStartDate1] = useState()
    const [endDate1, setEndDate1] = useState(new Date())
    const [startDate2, setStartDate2] = useState(new Date())
    const [endDate2, setEndDate2] = useState(new Date())
    const [startDate3, setStartDate3] = useState(new Date())
    const [endDate3, setEndDate3] = useState(new Date())

    const [startTime1, setStartTime1] = useState("")
    const [uploadCarPictures, setUploadCarPictures] = useState(null)
    const [modalLg, setModalLg] = useState(null)
    const [carDetailPopupOverview, setCarDetailPopupOverview] = useState(null)

    return (
        <>
            <DashboardLayout>
                <div className={styles.wrapper}>
                    <h2>Please complete the information below for listing your car to host with VEHDE.</h2>
                    <div className={styles.formWrapper}>
                        <div className="mb-3">
                            <div className={styles.inputBox}>
                                <label htmlFor="">Enter your car make</label>
                                <select name="" id="">
                                    <option value="">Make</option>
                                </select>
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="">Enter your car model</label>
                                <select name="" id="">
                                    <option value="">Model</option>
                                </select>
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="">Enter your car type</label>
                                <select name="" id="">
                                    <option value="">Type</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className={styles.inputBox}>
                                <label htmlFor="">Enter your manufactured</label>
                                <select name="" id="">
                                    <option value="">Year manufactured</option>
                                </select>
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="">Enter your location</label>
                                <div>
                                    <select name="" id="">
                                        <option value="">State</option>
                                    </select>
                                    <select name="" id="">
                                        <option value="">City</option>
                                    </select>
                                    <input type="text" placeholder="Zip" />
                                    <input type="text" placeholder="Street" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div>
                                <label htmlFor="">Availability</label>
                                <button>Overview</button>
                            </div>
                            <div>
                                <label htmlFor="">Schedule 1</label>
                                <button onClick={() => setModal("schedule1")}>{startDate1 ? startDate1?.toLocaleDateString() : "Add schedule"} {startTime1}</button>
                            </div>
                            <div>
                                <label htmlFor="">Schedule 2</label>
                                <button onClick={() => setModal("schedule2")}>Add schedule</button>
                            </div>
                            <div>
                                <label htmlFor="">Schedule 3</label>
                                <button onClick={() => setModal("schedule3")}>Add schedule</button>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className={styles.inputBox}>
                                <label htmlFor="">Regular rent rate ($/day)</label>
                                <input type="text" placeholder="Enter your rate" />
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="">Rush hour rent rate ($/day)</label>
                                <input type="text" placeholder="Enter your rate" />
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="">ERH rate</label>
                                <select name="" id="">
                                    <option value="">Add rate</option>
                                </select>
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="">Discount</label>
                                <select name="" id="">
                                    <option value="">Add disc</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className={styles.inputBox}>
                                <textarea name="" id="" placeholder="A brief description about yourself. No more than 200 characters*"></textarea>
                            </div>
                            <button className={styles.inputBox} onClick={() => setUploadCarPictures({})}>
                                <i class="fa-regular fa-image"></i>
                                <span>My picture upload*</span>
                            </button>
                        </div>
                        <div className="">
                            <button className="my-btn w-100">Next</button>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
            {modal &&
                <div style={{ position: "fixed", top: "0px", left: "0px", width: "100%", minHeight: "100vh", height: "fit-content", background: "rgba(0, 0, 0, 0.5)", zIndex: "999999", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", overflow: "scroll", padding: "8px" }}>
                    <div style={{ position: "relative", maxWidth: "750px", width: "100%" }}>
                        <button style={{ background: "#DE4F4D", width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", border: "5px solid rgba(0, 0, 0, 0.8)", boxSizing: "border-box", color: "white", position: "absolute", top: "15px", right: "-8px", zIndex: "9999" }} onClick={() => setModal(null)}>
                            <i className="fa fa-times" style={{ fontSize: "25px" }}></i>
                        </button>
                    </div>
                    <div style={{ padding: "25px", background: "#FFFFFF", borderRadius: "20px", maxWidth: "750px", width: "100%", margin: "10px", marginTop: "30px", maxHeight: "85vh", overflow: "scroll", position: "relative" }}>
                        {
                            modal !== null && <div className={styles.availabilityModal}>
                                <h2>
                                    Schedule
                                    {modal === "schedule1" && " 1 "}
                                    {modal === "schedule2" && " 2 "}
                                    {modal === "schedule3" && " 3 "}
                                    Time availability
                                </h2>
                                <div>
                                    <span>Schedule</span>
                                    <span>Time availability</span>
                                    <span>Delete & Add</span>
                                </div>
                                <div>
                                    {
                                        modal === "schedule1" && <div>
                                            <div>01</div>
                                            <div>
                                                <div>
                                                    <label htmlFor="">Start date</label>
                                                    <div>
                                                        <i className="fa fa-calendar-alt"></i>
                                                        <DatePicker
                                                            style={{ width: "75px" }}
                                                            selected={startDate1}
                                                            startDate={new Date()}
                                                            onChange={(date) => setStartDate1(date)}
                                                            // maxDate={endDate1}
                                                            timeInputLabel="Time:"
                                                            dateFormat="MM/dd/yyyy"
                                                        // showTimeInput
                                                        />
                                                        <select name="" id="">
                                                            <option value="">09.00 AM</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="">End date</label>
                                                    <div>
                                                        <i className="fa fa-calendar-alt"></i>
                                                        <DatePicker
                                                            style={{ width: "75px" }}
                                                            selected={endDate1}
                                                            startDate={endDate1}
                                                            onChange={(date) => setEndDate1(date)}
                                                            minDate={startDate1}
                                                            timeInputLabel="Time:"
                                                            dateFormat="MM/dd/yyyy"
                                                        // showTimeInput
                                                        />
                                                        <select name="" id="">
                                                            <option value="">09.00 AM</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                {
                                                    modal === "schedule1" && <i className="fa fa-trash-alt" onClick={() => setModal("schedule1")}></i>
                                                }
                                                {
                                                    modal !== "schedule1" && <i className="fa fa-plus" onClick={() => setModal("schedule2")}></i>
                                                }
                                            </div>
                                        </div>
                                    }
                                    {
                                        modal === "schedule2" && <div>
                                            <div>02</div>
                                            <div>
                                                <div>
                                                    <label htmlFor="">Start date</label>
                                                    <div>
                                                        <i className="fa fa-calendar-alt"></i>
                                                        <DatePicker
                                                            style={{ width: "75px" }}
                                                            selected={startDate2}
                                                            startDate={startDate2}
                                                            onChange={(date) => setStartDate2(date)}
                                                            // maxDate={endDate1}
                                                            timeInputLabel="Time:"
                                                            dateFormat="MM/dd/yyyy"
                                                        // showTimeInput
                                                        />
                                                        <select name="" id="">
                                                            <option value="">09.00 AM</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="">End date</label>
                                                    <div>
                                                        <i className="fa fa-calendar-alt"></i>
                                                        <DatePicker
                                                            style={{ width: "75px" }}
                                                            selected={endDate2}
                                                            startDate={endDate2}
                                                            onChange={(date) => setEndDate2(date)}
                                                            minDate={startDate2}
                                                            timeInputLabel="Time:"
                                                            dateFormat="MM/dd/yyyy"
                                                        // showTimeInput
                                                        />
                                                        <select name="" id="">
                                                            <option value="">09.00 AM</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                {
                                                    modal === "schedule2" && <i className="fa fa-trash-alt" onClick={() => setModal("schedule2")}></i>
                                                }
                                                {
                                                    modal !== "schedule2" && <i className="fa fa-plus" onClick={() => setModal("schedule3")}></i>
                                                }
                                            </div>
                                        </div>
                                    }
                                    {
                                        modal === "schedule3" && <div>
                                            <div>03</div>
                                            <div>
                                                <div>
                                                    <label htmlFor="">Start date</label>
                                                    <div>
                                                        <i className="fa fa-calendar-alt"></i>
                                                        <DatePicker
                                                            style={{ width: "75px" }}
                                                            selected={startDate3}
                                                            startDate={startDate3}
                                                            onChange={(date) => setStartDate3(date)}
                                                            // maxDate={endDate1}
                                                            timeInputLabel="Time:"
                                                            dateFormat="MM/dd/yyyy"
                                                        // showTimeInput
                                                        />
                                                        <select name="" id="">
                                                            <option value="">09.00 AM</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="">End date</label>
                                                    <div>
                                                        <i className="fa fa-calendar-alt"></i>
                                                        <DatePicker
                                                            style={{ width: "75px" }}
                                                            selected={endDate3}
                                                            startDate={endDate3}
                                                            onChange={(date) => setEndDate3(date)}
                                                            minDate={startDate3}
                                                            timeInputLabel="Time:"
                                                            dateFormat="MM/dd/yyyy"
                                                        // showTimeInput
                                                        />
                                                        <select name="" id="">
                                                            <option value="">09.00 AM</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <i className="fa fa-trash-alt" style={{ visibility: "hidden" }}></i>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="mt-4">
                                    <button className="w-100 my-btn mb-3">Save</button>
                                    <button className="w-100 my-btn" style={{ background: "#EFEFEF", color: "black", border: "2px solid transparent" }}>Cancel</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }

            {
                uploadCarPictures && <UploadCarPictures setUploadCarPictures={setUploadCarPictures} setModalLg={setModalLg}></UploadCarPictures>
            }

            {
                modalLg && <ModalLg setModal={setModalLg} title="Host | Car pictures & specifications" subtitle="Please preview your car pictures.">
                    <CarDetailsPopupHeader />
                    <div className="d-flex gap-3 flex-lg-row flex-column my-4">
                        <CarDetailsPopupPictures />
                        <CarDetailsPopupMap />
                    </div>
                    <CarDetailsPopupOverview setCarDetailPopupOverview={setCarDetailPopupOverview} />
                    <div className="d-flex justify-content-center items-center gap-3 flex-md-row flex-column">
                        <button className="my-btn">Confirm car pictures</button>
                        <button className="my-btn" style={{ background: "#EFEFEF", color: "#030719", border: "2px solid #EFEFEF" }} onClick={() => setModalLg(null)}>Edit car pictures</button>
                    </div>
                </ModalLg>
            }
            {
                carDetailPopupOverview && <>
                    <ModalMd title={`Host Category: Individual`} setModal={setCarDetailPopupOverview}>
                        <CarDetailsOverviewPopup />
                    </ModalMd>
                </>
            }
        </>
    )
}

export default CarListing
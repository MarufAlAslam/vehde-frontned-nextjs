import Image from "next/image"
import { useState } from "react"
import ModalLg from "../../components/common/ModalLg"
import DashboardLayout from "../../components/layout/DashboardLayout"
import Reservation from "../../components/Rental/Reservation"
import styles from "../../styles/dashboard/Rental/MyRental.module.css"
import CarImg from "../../assets/img/dashboard/MyHost/Rental/car.png"
import MainBox from "../../components/Rental/Review/MainBox"
import ProtectionBox from "../../components/Rental/Review/ProtectionBox"


const MyRenter = () => {

    const [reservationModal, setReservationModal] = useState(null)
    const [discountModal, setDiscountModal] = useState(null)
    const [modifyModal, setModifyModal] = useState(null)
    const [showCancellationModal, setShowCancellationModal] = useState(null)

    return (
        <>
            <DashboardLayout>
                <div className={styles.container}>
                    <h2>My Rental with VEHDE</h2>
                    <p>From here. To your destination.</p>
                    <p>Let’s make it a wonderful journey.</p>
                    <div>
                        <div onClick={() => setReservationModal({})}>
                            <Image src={require("../../assets/img/dashboard/MyRenter/Reservation.png")} alt="" />
                            <h4>Reservation</h4>
                        </div>
                        <div onClick={() => setDiscountModal("discount")}>
                            <Image src={require("../../assets/img/dashboard/MyRenter/Discount.png")} alt="" />
                            <h4>Discount</h4>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
            {
                reservationModal !== null && <ModalLg setModal={setReservationModal}>
                    <Reservation setModifyModal={setModifyModal} showCancellationModal={showCancellationModal} setShowCancellationModal={setShowCancellationModal} />
                </ModalLg>
            }
            {
                discountModal === "discount" && <ModalLg setModal={setDiscountModal}>
                    <div className={styles.discountModal}>
                        <h3>Discount</h3>
                        <div>
                            <div>
                                <div>
                                    <span>Date</span>
                                    <span>Discount ($)</span>
                                </div>
                                <div onClick={() => setDiscountModal("Jan - Mar (2022)")}>
                                    <span>Jan – Mar (2022)</span>
                                    <span>$1,250</span>
                                </div>
                                <div onClick={() => setDiscountModal("Oct – Dec (2021)")}>
                                    <span>Oct – Dec (2021)</span>
                                    <span>$2,265</span>
                                </div>
                                <div onClick={() => setDiscountModal("Jul – Sept (2021)")}>
                                    <span>Jul – Sept (2021)</span>
                                    <span>$2,458</span>
                                </div>
                                <div onClick={() => setDiscountModal("Apr – Jun (2021)")}>
                                    <span>Apr – Jun (2021)</span>
                                    <span>$1,570</span>
                                </div>
                                <div>
                                    <span>TOTAL</span>
                                    <span>$7,543</span>
                                </div>
                            </div>
                            <div>
                                <Image src={require("../../assets/img/dashboard/MyRenter/DiscountList.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </ModalLg>
            }
            {
                discountModal !== "discount" && discountModal !== null && <ModalLg setModal={setDiscountModal}>
                    <i className="fa fa-chevron-left" style={{ cursor: "pointer" }} onClick={() => setDiscountModal("discount")}></i>
                    <div className={styles.discountModalSingle}>
                        <h2>My Discount | {discountModal}</h2>
                        <div className={styles.tableWrapper}>
                            <table className="table table-hover">
                                <thead>
                                    <th>Date</th>
                                    <th>Car</th>
                                    <th></th>
                                    <th>RSRVE Code</th>
                                    <th>Host</th>
                                    <th>Discount</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mar 2022</td>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>2015 Chevrolet Cruz LT</td>
                                        <td>LAX-001-3088</td>
                                        <td>Emma @ CA 95818</td>
                                        <td>185</td>
                                    </tr>
                                    <tr>
                                        <td>Mar 2022</td>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>2015 Chevrolet Cruz LT</td>
                                        <td>LAX-001-3088</td>
                                        <td>Emma @ CA 95818</td>
                                        <td>185</td>
                                    </tr>
                                    <tr>
                                        <td>Mar 2022</td>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                            <Image src={CarImg} alt="" />
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            2015 Chevrolet Cruz LT
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            2015 Chevrolet Cruz LT
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            2015 Chevrolet Cruz LT
                                        </td>
                                        <td>
                                            LAX-001-3088
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            LAX-001-3088
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            LAX-001-3088
                                        </td>
                                        <td>
                                            Emma @ CA 95818
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            Emma @ CA 95818
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            Emma @ CA 95818
                                        </td>
                                        <td>
                                            14
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            130
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            95
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.discountModalSingleFooter}>
                            <span>TOTAL</span>
                            <span>1,250</span>
                        </div>
                    </div>
                </ModalLg>
            }
            {
                modifyModal && <ModalLg setModal={setModifyModal}>
                    <span onClick={() => setModifyModal(null)} style={{ cursor: "pointer" }}> <i className="fa fa-chevron-left"></i> </span>
                    <div className={styles.modifyModalWrapper}>
                        <h2 style={{ fontWeight: "bolder" }}>Modifying active rental for Toyota Venza LE 2022
                            <span>(RSRVE Code ATX-001-3088)</span>
                        </h2>
                        <p>You can now review and modify your reservation based on your new preferences</p>
                        <div>
                            <div>
                                <span>RSRVE Code</span>
                                <input type="text" value={"ATX-001-3088"} readOnly />
                            </div>
                        </div>
                        <MainBox hideEstCost={true} hideList={true} hidePrice={true} hideageResidency={true} />
                        <div>
                            <div>
                                <div>
                                    <h3>Initial Costs</h3>
                                </div>
                                <div>
                                    <span>Base cost</span>
                                    <span>$2,400.00</span>
                                    <span>Estimated taxes & fees</span>
                                    <span>$548.86</span>
                                    <span>Estimated Total Costs</span>
                                    <span>$2,948.86</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3>Modified Costs</h3>
                                </div>
                                <div>
                                    <span>Base cost</span>
                                    <span>$2,400.00</span>
                                    <span>Estimated taxes & fees</span>
                                    <span>$548.86</span>
                                    <span>Estimated Total Costs</span>
                                    <span>$2,948.86</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: 0 }}></div>
                        {/* <div>
                            <div>
                                <h4>Regular Insurance</h4>
                                <Image src={require("../../assets/img/dashboard/MyRenter/RegularInsurance.png")} alt="" />
                                <div>
                                    <input type="checkbox" />
                                    <label htmlFor="">$23/DAY</label>
                                </div>
                            </div>
                            <div>
                                <h4>Roadside assistance</h4>
                                <Image src={require("../../assets/img/dashboard/MyRenter/RoadsideAssistance.png")} alt="" />
                                <div>
                                    <input type="checkbox" />
                                    <label htmlFor="">$15/DAY</label>
                                </div>
                            </div>
                            <div>
                                <h4>VEHSAVE</h4>
                                <Image src={require("../../assets/img/dashboard/MyRenter/VEHSAVE.png")} alt="" />
                                <div>
                                    <input type="checkbox" />
                                    <label htmlFor="">$15/DAY</label>
                                </div>
                            </div>
                        </div> */}
                        <ProtectionBox />
                        <div className="mt-3">
                            <button className="my-btn mx-auto">Proceed to Checkout</button>
                        </div>
                    </div>
                </ModalLg>
            }
        </>
    )
}

export default MyRenter
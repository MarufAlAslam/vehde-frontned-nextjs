import Image from "next/image"
import styles from "../../styles/dashboard/Header.module.css"
import PaymentPageStyles from "../../styles/dashboard/Payment.module.css"

import HelpImg from "../../assets/img/dashboard/help.svg"
import UserImg from "../../assets/img/dashboard/user.svg"
import LogOutImg from "../../assets/img/dashboard/logout.svg"
import Link from "next/link"
import { useEffect, useState } from "react"
import ModalLg from "../../components/common/ModalLg"
import ModalMd from "../../components/common/ModalMd"

import ProfileModalImg1 from "../../assets/img/dashboard/MyRenter/ProfileModalImg1.svg"
import ProfileModalImg2 from "../../assets/img/dashboard/MyRenter/ProfileModalImg2.png"
import ProfileModalImg3 from "../../assets/img/dashboard/MyRenter/ProfileModalImg3.png"
import ProfileModalImg4 from "../../assets/img/dashboard/MyRenter/ProfileModalImg4.png"
import ProfileModalImg5 from "../../assets/img/dashboard/MyRenter/ProfileModalImg5.png"
import ProfileModalImg6 from "../../assets/img/dashboard/MyRenter/ProfileModalImg6.png"
import ProtectionBox from "../Rental/Review/ProtectionBox"


const DashboardHeader = ({ mobileMenu, setMobileMenu, userRole }) => {

    const [showMenu, setShowMenu] = useState(false)
    const [available, setAvailable] = useState(true)
    const [mobileSearch, setMobileSearch] = useState(false)
    const [showProfileModal, setProfileModal] = useState(false)

    const [showModalLg, setShowModalLg] = useState(false)
    const [showModalMd, setShowModalMd] = useState(false)
    const [editLicense, setEditLicense] = useState(false)
    const [editContactInfo, setEditContactInfo] = useState(false)

    const [fullName, setFullName] = useState("name")
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            setFullName(user.firstName + " " + user.lastName)
            setAvatar(fullName[0].toUpperCase())
        }
    }, [fullName])


    return (
        <>
            <header id={styles.header}>
                <div id={styles.toggleMenuBtn}>
                    {
                        mobileMenu ? <i class="fa-solid fa-xmark" onClick={() => setMobileMenu(false)}></i> : <i class="fa-solid fa-bars" onClick={() => setMobileMenu(true)}></i>
                    }
                </div>
                <div>
                    <i className="fa fa-search" onClick={() => setMobileSearch(true)} ></i>
                    <input type="text" placeholder="Type anywhere to search" />
                    <div id={`${mobileSearch ? styles.activeSearch : ""}`}>
                        <input type="text" placeholder="Type anywhere to search" />
                        <i className="fa fa-times pe-1" onClick={() => setMobileSearch(false)}></i>
                    </div>
                </div>
                <div>
                    <div>
                        {avatar}
                    </div>
                    <div>
                        <h3>
                            {fullName}
                        </h3>
                        <span>VEHDE ID: JW-H (TX) 868746-78613</span>
                    </div>
                    <i className="fa fa-chevron-down" onClick={() => setShowMenu(!showMenu)}></i>
                    {
                        showMenu && <div>
                            {
                                userRole === "host" && <>
                                    <h4>I am {available ? "available" : "unavailable"} to host</h4>
                                    <input type="checkbox" id="available" hidden checked={available} onChange={(e) => setAvailable(!available)} />
                                    <label htmlFor="available">
                                        <span>On</span>
                                        <span>Off</span>
                                    </label>
                                    <div>
                                        <Link href="/dashboard/HelpCenter">
                                            <Image src={HelpImg} />
                                            <span>Help Center</span>
                                        </Link>
                                        <Link href="/dashboard/profile">
                                            <Image src={UserImg} />
                                            <span>My Profile</span>
                                        </Link>
                                        <Link href="">
                                            <Image src={LogOutImg} />
                                            <span>Sign Out</span>
                                        </Link>
                                    </div>
                                </>
                            }
                            {
                                userRole === "renter" && <>
                                    <div>
                                        <Link href="/dashboard/HelpCenter">
                                            <Image src={HelpImg} />
                                            <span>Help Center</span>
                                        </Link>
                                        <button onClick={() => { setProfileModal(true); setShowMenu(false) }}>
                                            <Image src={UserImg} />
                                            <span>My Profile</span>
                                        </button>
                                        <Link href="">
                                            <Image src={LogOutImg} />
                                            <span>Sign Out</span>
                                        </Link>
                                    </div>
                                </>
                            }
                        </div>
                    }
                </div>
            </header>
            {
                showProfileModal && <ModalLg setModal={setProfileModal}>
                    <div className={styles.profileModal}>
                        <h2>My Profile</h2>
                        <div>
                            <div onClick={() => setShowModalMd("auto")}>
                                <Image src={ProfileModalImg1} alt="" />
                                <h4>Auto insurance</h4>
                            </div>
                            <div onClick={() => setShowModalLg("license")}>
                                <Image src={ProfileModalImg2} alt="" />
                                <h4>Driver’s license</h4>
                            </div>
                            <Link href="/dashboard/Payment/PaymentMethod">
                                <Image src={ProfileModalImg3} alt="" />
                                <h4>Payment method</h4>
                            </Link>
                            <Link href="/dashboard/VEHDEPass">
                                <Image src={ProfileModalImg4} alt="" />
                                <h4>VEHDEPass Membership</h4>
                            </Link>
                            <div onClick={() => setShowModalLg("contact")}>
                                <Image src={ProfileModalImg5} alt="" />
                                <h4>Contact Information</h4>
                            </div>
                            <div onClick={() => setShowModalMd("password")}>
                                <Image src={ProfileModalImg6} alt="" />
                                <h4>Change Password</h4>
                            </div>
                        </div>
                    </div>
                </ModalLg>
            }
            {
                showModalLg === "license" && <ModalLg setModal={setShowModalLg}>
                    <div className={styles.modalLgBox}>
                        <h2>Driver's license
                            <span>JW-H (TX) 868746-78613</span>
                        </h2>
                        <h5>Status:
                            <span> Active</span>
                        </h5>
                        <p>Your driver's license is currently <span>active</span> and <span>approved</span>. You can revise your information by selecting edit icon, make the changes, and select OK to save. Please allow up to 24hours for your new information to be reviewed for approval.
                            <br />
                            <br />
                            (NOTE: To change your name please submit a separate SNOW Ticket.)
                            <span></span>
                        </p>
                        <div>
                            <i className="fa fa-pencil" onClick={() => setEditLicense(true)}></i>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-12 pe-md-1 pe-0 mb-2">
                                <div className={styles.modalInputBox}>
                                    <label htmlFor="">First name</label>
                                    <input type="text" value={"Jane 🔒"} readOnly />
                                </div>
                            </div>
                            <div className="col-md-6 col-12 ps-md-1 ps-0 mb-2">
                                <div className={styles.modalInputBox}>
                                    <label htmlFor="">Last name</label>
                                    <input type="text" value={"Wesley 🔒"} readOnly />
                                </div>
                            </div>
                            <div className="col-md-6 col-12 pe-md-1 pe-0 mb-2">
                                <div className={styles.modalInputBox}>
                                    <label htmlFor="">Country</label>
                                    <input type="text" value={"United States of America 🔒"} readOnly />
                                </div>
                            </div>
                            <div className="col-md-6 col-12 ps-md-1 ps-0 mb-2">
                                <div className={styles.modalInputBox}>
                                    <label htmlFor="">State</label>
                                    <select name="" id="">
                                        <option value="">Texas</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 mb-2">
                                <div className={styles.modalInputBox}>
                                    <label htmlFor="">License number</label>
                                    <input type="text" placeholder="613686990" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12 pe-md-1 pe-0 mb-2">
                                <div className={styles.modalInputBox}>
                                    <label htmlFor="">Experiation date</label>
                                    <select name="" id="">
                                        <option value="">August</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3 col-12 px-md-1 px-0 mb-2">
                                <div className={styles.modalInputBox}>
                                    <label htmlFor="">Day</label>
                                    <input type="text" placeholder="04" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 ps-md-1 ps-0 mb-2">
                                <div className={styles.modalInputBox}>
                                    <label htmlFor="">Year</label>
                                    <select name="" id="">
                                        <option value="">2026</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {
                            editLicense && <><div className={styles.modalCheckbox}>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">I agree to VEHDE's <Link href="">Terms of Use</Link> and acknowledge that i have read the <a href="">Privacy Notice.</a></label>
                            </div>
                                <div className={styles.modalBtnBox}>
                                    <button className={styles.modalBtnSuccess} onClick={() => { setEditLicense(false); setShowModalLg(false) }}>OK</button>
                                    <button className={styles.modalBtnSuccessOutline} onClick={() => { setEditLicense(false); setShowModalLg(false) }}>Cancel</button>
                                </div>
                            </>}
                    </div>
                </ModalLg>
            }
            {
                showModalLg === "contact" && <ModalLg setModal={setShowModalLg}>
                    <div className={styles.modalLgBox}>
                        <h2>Contact Information
                            <span>JW-H (TX) 868746-78613</span>
                        </h2>
                        <h5>Status:
                            <span> Active</span>
                        </h5>
                        <p>Your contact information is currently <span>complete</span> and <span>approved</span>. You can revise your information by selecting edit icon, make the changes, and select OK to save. Please allow up to 24 hours for your new information to be reviewed for approval.
                            <br />
                            <br />
                            (NOTE: To change your name please submit a separate SNOW Ticket.)
                            <span></span>
                        </p>
                        <div>
                            <i className="fa fa-pencil" onClick={() => setEditContactInfo(true)}></i>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-12 pe-md-1 pe-0 mb-2">
                                <div className={styles.modalInputBox}>
                                    <label htmlFor="">First name</label>
                                    <input type="text" value={"Jane 🔒"} readOnly />
                                </div>
                            </div>
                            <div className="col-md-6 col-12 ps-md-1 ps-0 mb-2">
                                <div className={styles.modalInputBox}>
                                    <label htmlFor="">Last name</label>
                                    <input type="text" value={"Wesley 🔒"} readOnly />
                                </div>
                            </div>
                            <div className="col-md-6 col-12 pe-md-1 pe-0 mb-2">
                                <div className={styles.modalInputBox}>
                                    <label htmlFor="">Country</label>
                                    <input type="text" value={"United States of America 🔒"} readOnly />
                                </div>
                            </div>
                            <div className="col-md-6 col-12 ps-md-1 ps-0 mb-2">
                                <div className={styles.modalInputBox}>
                                    <label htmlFor="">State</label>
                                    <select name="" id="">
                                        <option value="">Texas</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6 col-12 pe-md-1 pe-0 mb-2">
                                <div className={styles.modalInputBox}>
                                    <label htmlFor="">Email address</label>
                                    <input type="text" placeholder="jane.Wesley@gmail.com" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12 ps-md-1 ps-0 mb-2">
                                <div className={styles.modalInputBox}>
                                    <label htmlFor="">Mobile phone number</label>
                                    <input type="text" placeholder="(737)-363-5736" />
                                </div>
                            </div>
                            <div className="col-12 mb-2">
                                <div className={styles.modalInputBox}>
                                    <label htmlFor="">Street address</label>
                                    <input type="text" placeholder="12050 Oak Trl" />
                                </div>
                            </div>

                            <div className="col-md-6 col-12 pe-md-1 pe-0 mb-2">
                                <div className={styles.modalInputBox}>
                                    <label htmlFor="">City</label>
                                    <input type="text" placeholder="Austin" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 px-md-1 px-0 mb-2">
                                <div className={styles.modalInputBox}>
                                    <label htmlFor="">Zip</label>
                                    <input type="text" placeholder="78613" />
                                </div>
                            </div>
                            <div className="col-md-3 col-12 ps-md-1 ps-0 mb-2">
                                <div className={styles.modalInputBox}>
                                    <label htmlFor="">State</label>
                                    <select name="" id="">
                                        <option value="">Texas</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {
                            editContactInfo && <><div className={styles.modalCheckbox}>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">I agree to VEHDE's <Link href="">Terms of Use</Link> and acknowledge that i have read the <a href="">Privacy Notice.</a></label>
                            </div>
                                <div className={styles.modalBtnBox}>
                                    <button className={styles.modalBtnSuccess} onClick={() => { setEditContactInfo(false); setShowModalLg(false) }}>OK</button>
                                    <button className={styles.modalBtnSuccessOutline} onClick={() => { setEditContactInfo(false); setShowModalLg(false) }}>Cancel</button>
                                </div>
                            </>}
                    </div>
                </ModalLg>
            }
            {
                showModalMd === "auto" && <ModalLg setModal={setShowModalMd}>
                    <div className={`${styles.modalLgBox}`}>
                        <h2>VEHDE
                            <span style={{ fontSize: "18px" }}>Auto Insurance</span>
                        </h2>
                        <p style={{ marginTop: "70px", fontSize: "14px", lineHeight: 1, marginBottom: "5px" }}>VEHDE makes protection plans available to guests. Details of the protection plans can be found by reviewing</p>
                        <p style={{ fontSize: "12px", color: "#6A6A6A" }}>Understanding and choosing ride auto protection.</p>

                        <p style={{ marginTop: "30px", fontSize: "14px", lineHeight: 1, marginBottom: "5px" }}>Guests that want supplemental protection may purchase personal coverage as <span style={{ color: "#6A6A6A" }}>Add-On</span></p>


                        <p style={{ fontSize: "15px", color: "#6A6A6A", marginTop: "40px" }}> Please select a reservation, from the list of your existing reservations, for which you want to review it's Add-On coverage.</p>

                        <div className={PaymentPageStyles.searchBox}>
                            <h3>Reservation</h3>
                            <select name="" id="">
                                <option value="">ATX-001-3088</option>
                            </select>
                            <input type="text" placeholder='Enter the reserved car name' onChange={() => setPayFeesAndAddOnModal(payFeesAndAddOnModal === "addOnSearch" || payFeesAndAddOnModal === "addOn" ? "addOn" : "searched")} value={"2022 Toyota Venza"} />
                        </div>
                        <ProtectionBox hideTitle={true} customStyles={{ padding: "15px" }} />

                        <div className="">
                            <button className="my-btn mx-auto">Add-On</button>
                        </div>
                    </div>
                </ModalLg>
            }
            {
                showModalMd !== "auto" && showModalMd !== null && showModalMd !== false && <ModalMd setModal={setShowModalMd}>
                    {showModalMd === "password" && <div className={styles.modalLgBox}>
                        <h2>VEHDE
                            <span>Change Password</span>
                        </h2>
                        <div className={`${styles.modalInputBox} mt-5`}>
                            <label htmlFor="">VEHDE Password</label>
                            <input type="text" placeholder="Enter current password" />
                        </div>
                        <div className={`${styles.modalInputBox} mt-3 mb-3`}>
                            <label htmlFor="">New password</label>
                            <input type="text" placeholder="Enter new password" />
                        </div>
                        <div></div>
                        <div className={`${styles.modalInputBox} mt-3 mb-3`}>
                            <label htmlFor="">New password</label>
                            <input type="text" placeholder="Confirm new password" />
                        </div>
                        <p style={{ fontSize: "12px", color: "#6A6A6A" }}>Password must be between 8-20 characters, and include at least one lowercase letter, once UPPERCASE letter, and one number</p>
                        <div className="mt-4">
                            <button className="my-btn w-100" onClick={() => setShowModalMd("authorization")}>Change Password</button>
                        </div>
                    </div>}
                    {showModalMd === "authorization" && <div className={styles.modalLgBox}>
                        <h2>VEHDE</h2>
                        <p style={{ textAlign: "center" }}>An Authorization code was sent to your mobile phone number</p>
                        <h4 style={{ textAlign: "center" }}>XXX-XXX-1984</h4>
                        <div></div>
                        <div className={`${styles.modalInputBox} mt-5`}>
                            <label htmlFor="">VEHDE Password</label>
                            <input type="text" placeholder="Enter current password" />
                        </div>
                        <div className="mt-3">
                            <button className="my-btn w-100" onClick={() => setShowModalMd("password changed")}>Change Password</button>
                        </div>
                        <p style={{ fontSize: "12px", color: "#6A6A6A", textAlign: "center", marginTop: "20px", cursor: "pointer" }}>Request another authorization code</p>
                    </div>}
                    {showModalMd === "password changed" && <div className={`${styles.modalLgBox} text-center`}>
                        <p style={{ textAlign: "center", marginTop: "70px" }}>Your password was successfully changed.</p>
                        <i className="fa fa-check" style={{ fontSize: "120px", textAlign: "center", color: "#DE4F4D", marginBottom: "60px" }}></i>
                    </div>}
                </ModalMd>
            }
        </>
    )
}

export default DashboardHeader
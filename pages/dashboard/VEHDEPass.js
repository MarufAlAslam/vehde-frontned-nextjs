import React, { useEffect, useState } from 'react'
import DashboardBanner from '../../components/common/DashboardBanner'
import DashboardLayout from '../../components/layout/DashboardLayout'
import DashboardBannerRightContent from "../../components/common/DashboardBannerRightContent"
import DashboardBannerLeftContent from '../../components/common/DashboardBannerLeftContent'

import styles from "../../styles/dashboard/VEHDEPass.module.css"

import ModalMd from "../../components/common/ModalMd"
import ActivateImg from "../../assets/img/dashboard/VEHDEPass/Activate.png"
import DeactivateImg from "../../assets/img/dashboard/VEHDEPass/Deactivate.png"
import Image from 'next/image'
import Link from 'next/link'



const VEHDEPass = () => {

    const [screen, setScreen] = useState(null)
    const [membershipActive, setMembershipActive] = useState(null)
    const [modalMd, setModalMd] = useState(null)
    const [userRole, setUserRole] = useState("renter")

    useEffect(() => {
        setModalMd({})
    }, [membershipActive])

    useEffect(() => {
        setModalMd(null)
    }, [])


    const handleConfirmBtn = () => {
        if (membershipActive) {
            setScreen("activated")
        }
        else {
            setScreen("deactivated")
        }
        setModalMd(null)
        setTimeout(() => {
            setScreen(null)
        }, 2000);
    }


    return (
        <>
            <DashboardLayout>
                <div className={styles.container}>
                    {
                        screen === null && userRole === "host" && <>
                            <DashboardBanner leftContent={<DashboardBannerLeftContent page="VEHDEPass" />} rightContent={<DashboardBannerRightContent page="VEHDEPass" />}></DashboardBanner>
                            <div className={styles.mainContent}>
                                <div>
                                    <h1>My host with VEHDE</h1>
                                    <p>Your VEHDEPass membership is currently inactive.
                                        Please activate your VEHDEPass by switching the toggle below.</p>
                                    <h4>I am currently {membershipActive === false && "NOT"} a VEHDEPass member</h4>
                                    <input type="checkbox" id="membership" hidden checked={membershipActive} onChange={(e) => setMembershipActive(!membershipActive)} />
                                    <label htmlFor="membership">
                                        <span>On</span>
                                        <span>Off</span>
                                    </label>
                                </div>
                                {
                                    membershipActive && <div className={styles.flashScreen}>
                                        <h2>Great news!</h2>
                                        <p>Your VEHDEPass membership is currently active.</p>
                                    </div>
                                }
                            </div>
                        </>
                    }
                    {
                        screen === null && userRole === "renter" && <>
                            <div className={styles.renterScreenBanner}>
                                <h2>VEHDEPass</h2>
                                <p>VEHDEPass membership reduces your rental costs by 4.65% for any car listed by hosts participating
                                    in VEHDEPass advantage.</p>
                                <p>
                                    VEHDEPass subscription fee is <span>$14.75/month</span>. You can cancel your subscription at any time.
                                </p>
                                <p>Please check VEHDEPass for more information.</p>
                            </div>
                            <div className={styles.mainContent}>
                                <div className={styles.renterContainer}>
                                    <h1>Renter | VEHDEPass</h1>
                                    {membershipActive === null && <h2 className={styles.renterGreateNewsText}>Great news!</h2>}
                                    {
                                        membershipActive === null && <>
                                            <p>
                                                Your rental car, <span>Toyota Venza 2022</span> with
                                                <span> RSRVE Code RSVE ATX-001-3056</span>, is <Link href="">VEHDEPass</Link> advantage eligible.
                                                <Link href=""> VEHDEPass</Link> membership reduces your current rental costs by $56.25.</p>
                                            <p>
                                                Your <Link href="">VEHDEPass</Link> membership is currently inactive.
                                                Please activate your <Link href=""> VEHDEPass</Link> by switching the toggle below.
                                            </p>
                                        </>
                                    }
                                    {
                                        membershipActive === false && <p>
                                            Your <Link href="">VEHDEPass</Link> membership is currently inactive.
                                            Please activate your <Link href="">VEHDEPass</Link> by switching the toggle below.
                                        </p>
                                    }
                                    <h4>I am currently {membershipActive === false || membershipActive === null && "NOT"} interested in VEHDEPass</h4>
                                    <input type="checkbox" id="membership" hidden checked={membershipActive} onChange={(e) => setMembershipActive(!membershipActive)} />
                                    <label htmlFor="membership">
                                        <span>On</span>
                                        <span>Off</span>
                                    </label>
                                </div>
                                {
                                    membershipActive && <div className={styles.flashScreen} style={{ gap: "0" }}>
                                        <h2 className={styles.renterGreateNewsText} >Great news!</h2>
                                        <p>Your VEHDEPass membership is currently active.</p>
                                    </div>
                                }
                            </div>
                        </>
                    }
                    {
                        screen === "activated" && <>
                            <div className={styles.flashScreen}>
                                <Image src={ActivateImg} alt="" />
                                <h2>Great news!</h2>
                                <p>Your VEHDEPass membership has been successfully activated. Renters with VEHDEPass subscription are now eligible for <span>4.65%</span> rental discount on your listed cars.</p>
                            </div>
                        </>
                    }
                    {
                        screen === "deactivated" && <>
                            <div className={styles.flashScreen}>
                                <Image src={DeactivateImg} alt="" />
                                <h2>Deactivated</h2>
                                <p>Your VEHDEPass membership has been</p>
                            </div>
                        </>
                    }
                </div>
            </DashboardLayout>
            {
                modalMd && <ModalMd setModal={setModalMd}>
                    <div className={styles.modalContainer}>
                        <h2>{membershipActive ? "Activate " : "Deactivate"} | VEHDEPass</h2>
                        <p>
                            {
                                membershipActive ? "Thank you for your interest in VEHDEPass membership. Please enter the authorization code sent to your mobile phone number to confirm your VEHDEPass activation." : "Please enter the authorization code sent to your mobile phone number to confirm your VEHDEPass deactivation."
                            }
                        </p>
                        <div className={styles.formWrapper}>
                            <h1>VEHDE</h1>
                            <p>An authorization code was sent to
                                your mobile phone number</p>
                            <h4>XXX-XXX-1984</h4>
                            <div>
                                <div>
                                    <label htmlFor="">Please enter the authorization code below</label>
                                    <input type="text" placeholder='Enter your code' />
                                </div>
                                <button className="my-btn w-100" onClick={handleConfirmBtn}>Confirm</button>
                            </div>
                            <button>Request another authorization code</button>
                        </div>
                    </div>
                </ModalMd>
            }
        </>
    )
}

export default VEHDEPass
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import DashboardLayout from "../../components/layout/DashboardLayout"
import styles from "../../styles/dashboard/MyHost.module.css"

import BankIcon from "../../assets/img/dashboard/MyHost/BankIcon.png"
import CreditCardIcon from "../../assets/img/dashboard/MyHost/credit-card.png"
import PaypalIcon from "../../assets/img/dashboard/MyHost/paypal.png"
import CheckMarkIcon from "../../assets/img/dashboard/MyHost/checkmark.png"

import HostCarsIcon from "../../assets/img/dashboard/MyHost/HostCars.png"
import MyProfileIcon from "../../assets/img/dashboard/MyHost/MyProfile.png"
import RentalsIcon from "../../assets/img/dashboard/MyHost/Rentals.png"
import EarningIcon from "../../assets/img/dashboard/MyHost/Earning.png"
import Link from 'next/link'

import ModalLg from "../../components/common/ModalLg"
import RentalEmptyData from '../../components/Rental/RentalEmptyData'
import RentalDataList from '../../components/Rental/RentalDataList'


const MyHost = () => {

    const [setupPaymentMethod, setSetupPaymentMethod] = useState(null)
    const [modalLg, setModalLg] = useState(null)
    const [modalLgData, setModalLgData] = useState("empty")

    useEffect(() => {
        const isFirstTimeHost = localStorage.getItem("isFirstTimeHost")
        isFirstTimeHost === "true" ? setSetupPaymentMethod("normal") : setSetupPaymentMethod(null)
    }, [])

    return (
        <DashboardLayout>
            <div className={styles.container}>
                {
                    setupPaymentMethod === null && <>
                        <div className={styles.setupPaymentMethod}>
                            <div>
                                <h2>Establishing host payment method</h2>
                                <h3><span>Thank you</span> for choosing VEHDE.</h3>
                                <h4>How do you want to be paid? Please provide your preferred payment method below.</h4>
                                <p>Select one of the acceptable methods to receive your payments</p>
                            </div>
                        </div>
                        <div className={styles.paymentGetway}>
                            <div>
                                <input type="radio" name='paymentMethod' id='bank' hidden />
                                <label htmlFor="bank">
                                    <Image src={BankIcon} alt="" />
                                    <span>Bank account</span>
                                </label>
                            </div>
                            <div>
                                <input type="radio" name='paymentMethod' id='creditCard' hidden />
                                <label htmlFor="creditCard">
                                    <Image src={CreditCardIcon} alt="" />
                                    <span>Credit and debit cards</span>
                                </label>
                            </div>
                            <div>
                                <input type="radio" name='paymentMethod' id='paypal' hidden />
                                <label htmlFor="paypal">
                                    <Image src={PaypalIcon} alt="" />
                                    <span>PayPal</span>
                                </label>
                            </div>
                        </div>
                        <div className={styles.paymentGetwayBottom}>
                            <h2>How and when will I get paid?</h2>
                            <p><span>NOTE:</span> VEHDE charges a flat-rate service fee of 13.5%* of the rental price.
                                This fee allows VEHDE to operate our business.</p>
                            <button className='my-btn w-100' onClick={() => setSetupPaymentMethod("First Thank You")}>Next</button>
                        </div>
                    </>
                }
                {
                    setupPaymentMethod === "First Thank You" && <>
                        <div className={styles.firstThankYouContainer}>
                            <h3>Establishing host payment method</h3>
                            <h1>Thank You</h1>
                            <Image src={CheckMarkIcon} alt="" />
                            <h4>For confirming your payment method for your VEHDE Host account.</h4>
                            {
                                setTimeout(() => {
                                    setSetupPaymentMethod("Thank You")
                                }, 2000)
                            }
                        </div>
                    </>
                }
                {
                    setupPaymentMethod === "Thank You" && <>
                        <div className={styles.thankYou}>
                            <h1>Thank You</h1>
                            <h4>Please proceed to your personalized inbox to track the status of your application and view customized host’s information from VEHDE.</h4>
                            <div>
                                <button className='my-btn w-100' onClick={() => {
                                    setSetupPaymentMethod("normal")
                                    localStorage.setItem("isFirstTimeHost", true)
                                }}>Proceed to my inbox</button>
                            </div>
                        </div>
                    </>
                }
                {
                    setupPaymentMethod === "normal" && <>
                        <div className={styles.wrapper}>
                            <div>
                                <h2>My host with VEHDE</h2>
                                <p>My car. My extra income.</p>
                            </div>
                            <div>
                                <div>
                                    <Image src={HostCarsIcon} alt='' />
                                    <span>Host cars</span>
                                </div>
                                <Link href="/dashboard/profile">
                                    <Image src={MyProfileIcon} alt='' />
                                    <span>My Profile</span>
                                </Link>
                                <div onClick={() => setModalLg("rental")}>
                                    <Image src={RentalsIcon} alt='' />
                                    <span>Rentals</span>
                                </div>
                                <Link href="/dashboard/Payment">
                                    <Image src={EarningIcon} alt='' />
                                    <span>Earning</span>
                                </Link>
                            </div>
                        </div>
                    </>
                }
                {
                    modalLg === "rental" && <>
                        <ModalLg setModal={setModalLg}>
                            <div className={styles.rentalDataWrapper}>
                                {
                                    modalLgData === "empty" && <RentalEmptyData setModalLgData={setModalLgData} />
                                }
                                {
                                    modalLgData === "list" && <RentalDataList />
                                }
                            </div>
                        </ModalLg>
                    </>
                }
            </div>
        </DashboardLayout>
    )
}

export default MyHost
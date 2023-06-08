import DashboardLayout from "../../components/layout/DashboardLayout"
import DashboardBanner from "../../components/common/DashboardBanner"
import DashboardBannerLeftContent from "../../components/common/DashboardBannerLeftContent"
import DashboardBannerRightContent from "../../components/common/DashboardBannerRightContent"

import ModalLg from "../../components/common/ModalLg"
import ModalMd from "../../components/common/ModalMd"

import styles from "../../styles/dashboard/VEHDEScore.module.css"
import { useState } from "react"
import EarningTable from "../../components/payment/EarningTable"
import EarningDetailTable from "../../components/payment/EarningDetailTable"
import { fullYear, monthNames } from "./Payment"
import Image from "next/image"

import CashOutImg from "../../assets/img/dashboard/VEHDEScore/CashOut.png"
import SuccessImg from "../../assets/img/dashboard/VEHDEScore/CashOutSuccess.png"
import EmptyBalanceImg from "../../assets/img/dashboard/VEHDEScore/EmptyBalance.png"
import InfoImg from "../../assets/img/dashboard/VEHDEScore/info.png"


const VEHDEScore = () => {

    const [viewScore, setViewScore] = useState(null)
    const [cashOut, setCashOut] = useState(null)
    const [earningMonth, setEarningMonth] = useState(`${monthNames[new Date().getMonth()]} ${fullYear}`)

    const scoreHeading = ["Date", "Score Claimed", "Category", "$ Equivalent", "Score Balance"]
    const scoreData = [
        ["Mar 30, 2022", "100", "Cash Out", "$100.00", "60"],
        ["Mar 22, 2022", "75", "Cash Out", "$75.00", "160"],
        ["Mar 18, 2022", "85", "Rental", "$85.00", "235"],
    ]
    const [totalScore, setTotalScore] = useState(100)
    const [cashoutAmount, setCashoutAmount] = useState(100)

    const handleCashoutAmount = (type) => {
        if (type === "descrease") {
            if (cashoutAmount > 1) setCashoutAmount(cashoutAmount - 1)
        }
        else if (type === "increase") {
            if (cashoutAmount < totalScore) setCashoutAmount(cashoutAmount + 1)
        }
    }

    const handleCashOut = () => {
        if (cashoutAmount > totalScore) return setCashOut("empty")
        setTotalScore(totalScore - cashoutAmount)
        setCashOut("success")
        setTimeout(() => {
            setCashOut(null)
        }, 1500);
    }

    return (
        <>
            <DashboardLayout>
                <div className={styles.container}>
                    <DashboardBanner leftContent={<DashboardBannerLeftContent page="VEHDEScore" setViewScore={setViewScore} setCashOut={setCashOut} />} rightContent={<DashboardBannerRightContent page="VEHDEScore" />} />
                    <div className={styles.infoWrapper}>
                        <div>
                            <div>
                                <h2>{totalScore}</h2>
                                <p>Score earned</p>
                            </div>
                            <div>
                                <Image src={InfoImg} alt="" />
                            </div>
                            <div>
                                <h2>5/22</h2>
                                <p>Redeemable date</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2>Varies</h2>
                                <p>Rental equivalent</p>
                            </div>
                            <div>
                                <h2>120</h2>
                                <p>Dollar equivalent</p>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
            {
                cashOut && <ModalMd setModal={setCashOut}>
                    {
                        totalScore !== 0 && cashOut !== "empty" && <>
                            {
                                cashOut !== "success" && <div className={styles.modalMd}>
                                    <h5>VEHDE Score Balance</h5>
                                    <h4 className={styles.amountCircle}>100</h4>
                                    <Image src={CashOutImg} alt="" />
                                    <div>
                                        <h2>VEHDE Score | History</h2>
                                        <p>Please indicate the VEHDEScore amount you want to cash out.</p>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="">Enter your amount</label>
                                            <div>
                                                <i className="fa fa-minus" onClick={() => handleCashoutAmount("descrease")}></i>
                                                <input type="text" placeholder="$100" onChange={(e) => setCashoutAmount(e.target.value)} value={cashoutAmount} />
                                                <i className="fa fa-plus" onClick={() => handleCashoutAmount("increase")}></i>
                                            </div>
                                        </div>
                                        <button className="my-btn" onClick={handleCashOut}>Cash Out</button>
                                    </div>
                                </div>
                            }
                        </>
                    }
                    {
                        cashOut === "success" && <div className={styles.modalMd}>
                            <Image src={SuccessImg} alt="" />
                            <div>
                                <h2>VEHDE Score | Cash Out</h2>
                                <p>Congratulations! You have successfully cashed out your VEHDE Score equivalent $100. This amount will be available in your active payment account within the next 48 hours.</p>
                                <h4>Live VEHDE, keep earning!</h4>
                            </div>
                        </div>
                    }
                    {
                        !totalScore && cashOut !== "success" && <>
                            <div className={styles.modalMd}>
                                <Image src={EmptyBalanceImg} alt="" />
                                <div>
                                    <h2>VEHDE Score | Cash</h2>
                                    <p>Sorry, you do not have enough VEHDE Score at this moment to cash out. Please keep earning more VEHDE Score.</p>
                                    <h4>Stay VEHDE, keep earning!</h4>
                                </div>
                            </div>
                        </>
                    }
                    {
                        cashOut === "empty" && <>
                            <div className={styles.modalMd}>
                                <Image src={EmptyBalanceImg} alt="" />
                                <div>
                                    <h2>VEHDE Score | Cash</h2>
                                    <p>Sorry, you do not have enough VEHDE Score at this moment to cash out. Please keep earning more VEHDE Score.</p>
                                    <h4>Stay VEHDE, keep earning!</h4>
                                </div>
                            </div>
                        </>
                    }
                </ModalMd>
            }
            {
                viewScore && <ModalLg setModal={setViewScore}>
                    <div className={styles.viewScoreModalHeading}>
                        <h2>VEHDE Score | History</h2>
                        <div>
                            <h4>VEHDE Score Balance</h4>
                            <span>100</span>
                        </div>
                    </div>
                    <div className={styles.rentalsBoxWrapper}>
                        <EarningTable title="VEHDEScore History" paymentName="Score Claimed" score={true} setEarningMonth={setEarningMonth} />
                        <EarningDetailTable title={`My VEHDEScore Earning | ${earningMonth}`} heading={scoreHeading} data={scoreData} score={true} />
                    </div>
                </ModalLg>
            }
        </>
    )
}

export default VEHDEScore
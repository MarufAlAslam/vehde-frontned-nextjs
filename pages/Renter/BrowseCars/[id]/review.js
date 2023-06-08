import { useState } from "react"
import MainLayout from "../../../../components/layout/MainLayout"
import MainBox from "../../../../components/Rental/Review/MainBox"
import ProtectionBox from "../../../../components/Rental/Review/ProtectionBox"
import ReivewHeaderBox from "../../../../components/Rental/Review/ReivewHeaderBox"

import PaymentStyles from "../../../../styles/dashboard/Payment.module.css"


const review = () => {

    const [screen, setScreen] = useState(null)

    return (
        <MainLayout>
            <div style={{ background: "#F6F6F6", padding: "40px 0px" }}>
                <div className="container">
                    {
                        screen === null && <ReivewHeaderBox></ReivewHeaderBox>
                    }
                    <MainBox hideEstCost={screen === null ? true : false} hidePrice={screen === "protection" ? true : false} hideList={screen === "protection" ? true : false} hideageResidency={screen === "protection" ? true : false} showCarNameInTitle={true}></MainBox>

                    {
                        screen === null && <div>
                            <button className="my-btn mx-auto" style={{ padding: "15px 100px" }} onClick={() => setScreen("protection")}>Next</button>
                        </div>
                    }
                    {
                        screen === "protection" && <>
                            <ProtectionBox></ProtectionBox>
                            <div className={PaymentStyles.checkoutModal}>
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

                                    {/* <div className="d-flex align-items-center ms-3">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="" style={{ marginLeft: "5px" }}>Provide my driver's license now</label>
                                    </div> */}

                                    <p>Renters are required by laws to have valid driver’s license which may be subject to verification from the state of issuance.</p>
                                </div>
                                <button className='my-btn mt-3 mx-auto w-md-100 w-50'>Checkout</button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </MainLayout>
    )
}

export default review
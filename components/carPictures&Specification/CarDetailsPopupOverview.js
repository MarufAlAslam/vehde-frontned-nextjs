import { useState } from "react"
import styles from "../../styles/dashboard/carPictures&Specification/CarDetailsPopupOverview.module.css"

import CarDetailsDetailsOverview from "../../assets/img/dashboard/carPicturesDetails/carPicturesDetailsOverview.png"
import Image from "next/image"

const CarDetailsPopupOverview = ({ setCarDetailPopupOverview }) => {

    const [activeDiscount, setActiveDiscount] = useState("5% OR 7%")

    return (
        <div className={styles.container}>
            <div>
                <span>
                    {
                        activeDiscount === "no discount" && <>
                            No discount
                        </>
                    }
                    {
                        activeDiscount === "5%" && <>
                            <span>5% discount</span> for at least 1-week reservation
                        </>
                    }
                    {
                        activeDiscount === "7%" && <>
                            <span>7% discount</span> for at least 4-week reservation
                        </>
                    }
                    {
                        activeDiscount === "5% OR 7%" && <>
                            <span>5%</span> 1-week OR <span>7%</span> 4-week <span>discounts</span>
                        </>
                    }
                </span>
                <ul>
                    <li className={`${activeDiscount === "no discount" && styles.activeDiscount}`} onClick={() => { setActiveDiscount("no discount") }}>No discount</li>
                    <li className={`${activeDiscount === "5%" && styles.activeDiscount}`} onClick={() => { setActiveDiscount("5%") }}>5% discount for at least 1-week reservation</li>
                    <li className={`${activeDiscount === "7%" && styles.activeDiscount}`} onClick={() => { setActiveDiscount("7%") }}>7% discount for at least 4-week reservation</li>
                    <li className={`${activeDiscount === "5% OR 7%" && styles.activeDiscount}`} onClick={() => { setActiveDiscount("5% OR 7%") }}>5% discount OR 7% discount</li>
                </ul>
            </div>
            <div className="text-center">
                <Image src={CarDetailsDetailsOverview} alt="" />
            </div>
            <div>
                <div>
                    <h3>40/37</h3>
                    <span>Est. MPG</span>
                </div>
                <div></div>
                <div>
                    <h3>5</h3>
                    <span>Seats</span>
                </div>
            </div>
            <div>
                <button onClick={() => setCarDetailPopupOverview({})}>Overview</button>
            </div>
        </div>
    )
}

export default CarDetailsPopupOverview
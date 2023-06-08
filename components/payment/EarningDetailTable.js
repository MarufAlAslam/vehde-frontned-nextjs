import earningTableStyles from "../../styles/dashboard/payment/EarningTable.module.css"
import styles from "../../styles/dashboard/payment/EarningDetailTable.module.css"

const EarningDetailTable = ({ title, paymentName, heading, data, score }) => {
    return (
        <div className={styles.container}>
            <div>
                {
                    title && <h2>{title}</h2>
                }
                <div>
                    {
                        heading ? <>
                            {
                                heading.map(item => <span>{item}</span>)
                            }
                        </> : <>
                            <span>Pay Date</span>
                            <span>Car</span>
                            <span>RSRVE Code</span>
                            <span>Renter</span>
                            <span>{paymentName ? paymentName : "Payment($)"}</span>
                        </>
                    }
                </div>
                {
                    data ? <>
                        {
                            data?.map(item => <>
                                <div>
                                    {item.map(it => <span>{it}</span>)}
                                </div>
                            </>)
                        }
                    </> : <>
                        <div>
                            <span>Mar 29, 2022</span>
                            <span>2022 TY VENZA LE</span>
                            <span>ATX-001-3088</span>
                            <span>Emma @ TX 78703</span>
                            <span>$4,052.95</span>
                        </div>
                        <div>
                            <span>Mar 20, 2022</span>
                            <span>2022 TY VENZA LE</span>
                            <span>ATX-001-3088</span>
                            <span>Emma @ TX 78703</span>
                            <span>$4,052.95</span>
                        </div>
                        <div>
                            <span>Mar 15, 2022</span>
                            <span>2022 TY VENZA LE</span>
                            <span>ATX-001-3088</span>
                            <span>Emma @ TX 78703</span>
                            <span>$4,052.95</span>
                        </div>
                    </>
                }
                <div className={`${earningTableStyles.totalPrice} ${styles.totalPrice}`}>
                    <span>TOTAL</span>
                    <span>{score ? "260" : "$6,402.95"}</span>
                </div>
            </div>
        </div>
    )
}

export default EarningDetailTable
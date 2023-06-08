import { useRouter } from 'next/router'
import DashboardBanner from '../../../components/common/DashboardBanner'
import DashboardBannerLeftContent from '../../../components/common/DashboardBannerLeftContent'
import DashboardBannerRightContent from '../../../components/common/DashboardBannerRightContent'
import DashboardLayout from '../../../components/layout/DashboardLayout'

import styles from "../../../styles/dashboard/payment/PaymentMethod.module.css"


const PaymentMethod = () => {

    const router = useRouter()

    const handleGoBack = () => {
        router.back()
    }

    return (
        <>
            <DashboardLayout>
                <div className={`px-3 px-md-4 ${styles.container}`}>
                    <h2 style={{ fontSize: "15px", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }} onClick={handleGoBack}><i className='fa fa-arrow-left'></i> <span style={{ fontSize: "12px" }}>Back</span></h2>
                    <DashboardBanner leftContent={<DashboardBannerLeftContent page="payment" />} rightContent={<DashboardBannerRightContent page="payment" />} />
                    <div className={styles.tableContainer}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Switch</th>
                                    <th>Payment method</th>
                                    <th>Account ID</th>
                                    <th>Date added</th>
                                    <th>Status</th>
                                    <th>Category</th>
                                    <th>Payment received</th>
                                    <th>Review</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><button className={styles.inactiveBtn}>Switched</button></td>
                                    <td>Wells Fargo savings ending 10779</td>
                                    <td>WFAJ1550131</td>
                                    <td>10/30/2021</td>
                                    <td><button className={styles.successBtn}>Active</button></td>
                                    <td><button className={styles.successBtn}>Approved</button></td>
                                    <td>$5,997.95</td>
                                    <td><i className={`fa fa-lock ${styles.dangerIcon}`}></i></td>
                                </tr>
                                <tr>
                                    <td><button className={styles.successBtn}>Switch</button></td>
                                    <td>National bank Current ending 00138.</td>
                                    <td>NBJ1550132</td>
                                    <td>11/05/2021</td>
                                    <td><button className={styles.inactiveBtn}>In-Active</button></td>
                                    <td><button className={styles.successBtn}>Approved</button></td>
                                    <td>$0</td>
                                    <td>
                                        <i className={`fa fa-pencil me-3 ${styles.blackIcon}`}></i>
                                        <i className={`fa fa-trash-alt ${styles.dangerIcon}`}></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td><button className={styles.inactiveBtn}>Switch</button></td>
                                    <td>PayPal account ending 00114</td>
                                    <td>PPJ1550142</td>
                                    <td>11/15/2021</td>
                                    <td><button className={styles.inactiveBtn}>In-Active</button></td>
                                    <td><button className={styles.warningBtn}>Pending</button></td>
                                    <td>$0</td>
                                    <td>
                                        <i className={`fa fa-pencil me-3 ${styles.blackIcon}`}></i>
                                        <i className={`fa fa-trash-alt ${styles.dangerIcon}`}></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}

export default PaymentMethod
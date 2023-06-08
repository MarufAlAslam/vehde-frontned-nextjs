import React, { useEffect, useState } from 'react'
import DashboardHeader from '../common/DashboardHeader'
import LeftNav from '../common/LeftNav'

import styles from "../../styles/dashboard/Dashboard.module.css"
import { useRouter } from 'next/router'

const DashboardLayout = ({ children }) => {

    const router = useRouter()
    const pathname = router.route.toLowerCase()
    const [mobileMenu, setMobileMenu] = useState(false)
    const [userRole, setUserRole] = useState("host")


    useEffect(() => {
        if (userRole === "renter") {
            if (pathname.includes("carlisting") || pathname.includes("myhost") || pathname.includes("availability") || pathname.includes("profile")) {
                router.push("./MyRental")
            }
        }
        else if (userRole === "host") {
            if (pathname.includes("myrental")) {
                router.push("./CarListing")
            }
        }
    }, [userRole])


    return (
        <>
            <div style={{ background: "#F1F1F1", minHeight: "100vh", padding: "15px", display: "flex", justifyContent: "center" }} className={styles.dashboardWrapper}>
                <div style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)", background: "#FFFFFF", borderRadius: "25px", width: "100%", display: "flex", overflow: "hidden", flex: "1" }}>
                    <LeftNav mobileMenu={mobileMenu} userRole={userRole} />
                    <div className='flex-1 w-100'>
                        <DashboardHeader mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} userRole={userRole} />
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout
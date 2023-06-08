import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import styles from "../../styles/dashboard/LeftNav.module.css"

import CarListing from "../../assets/img/dashboard/carListing.svg"
import CarListing2 from "../../assets/img/dashboard/carListing2.svg"
import MyHost from "../../assets/img/dashboard/myHost.svg"
import Messages from "../../assets/img/dashboard/messages.svg"
import Availability from "../../assets/img/dashboard/availability.svg"
import VEHDEPass from "../../assets/img/dashboard/VEHDEPass.svg"
import Payment from "../../assets/img/dashboard/payment.svg"
import VEHDEScore from "../../assets/img/dashboard/VEHDEScore.svg"
import SnowTicket from "../../assets/img/dashboard/SnowTicket.svg"
import Inbox from "../../assets/img/dashboard/inbox.svg"
import Draft from "../../assets/img/dashboard/draft.svg"
import Sent from "../../assets/img/dashboard/sent.svg"
import Archive from "../../assets/img/dashboard/archive.svg"
import Trash from "../../assets/img/dashboard/trash.svg"


const LeftNav = ({ mobileMenu, userRole }) => {

    const router = useRouter().route
    const pathname = router.toLowerCase()
    const [showMessageSubMenu, setShowMessageSubMenu] = useState(false)
    const [page, setPage] = useState("")
    const [subMenu, setSubMenu] = useState("")

    useEffect(() => {
        if (pathname.includes("carlisting")) {
            setPage("Car Listing")
        }
        else if (pathname.includes("myhost")) {
            setPage("My Host")
        }
        else if (pathname.includes("myrental")) {
            setPage("My Rental")
        }
        else if (pathname.includes("messages")) {
            setPage("Messages")
            setShowMessageSubMenu(true)
            if (pathname.includes("inbox")) {
                setSubMenu("Inbox")
            }
            else if (pathname.includes("draft")) {
                setSubMenu("Draft")
            }
            else if (pathname.includes("sent")) {
                setSubMenu("Sent")
            }
            else if (pathname.includes("archive")) {
                setSubMenu("Archive")
            }
            else if (pathname.includes("trash")) {
                setSubMenu("Trash")
            }
        }
        else if (pathname.includes("availability")) {
            setPage("Availability")
        }
        else if (pathname.includes("vehdepass")) {
            setPage("VEHDEPass")
        }
        else if (pathname.includes("payment")) {
            setPage("Payment")
        }
        else if (pathname.includes("vehdescore")) {
            setPage("VEHDE Score")
        }
        else if (pathname.includes("snowticket")) {
            setPage("Snow Ticket")
        }


        // if (!pathname.includes("Messages")) {
        //     setShowMessageSubMenu(false)
        // }
    }, [pathname])

    return (
        <div className={`${styles.leftNavWrapper} ${mobileMenu ? styles.activeMobileMenu : ""}`}>
            <div>
                <Link href="/dashboard/CarListing" className={styles.logo}>VEHDE</Link>
            </div>
            {
                userRole === "host" && <>
                    <div className={`${styles.menuItems}`}>
                        <Link href="/dashboard/CarListing" className={`${page === "Car Listing" && styles.menuItemActive}`}>
                            <Image src={CarListing2} />
                            <span>Car Listing</span>
                        </Link>
                        <Link href="/dashboard/MyHost" className={`${page === "My Host" && styles.menuItemActive}`}>
                            <Image src={MyHost} />
                            <span>My Host</span>
                        </Link>
                        <Link href="/dashboard/Messages/Inbox" className={`${page === "Messages" && styles.menuItemActive}`}>
                            <Image src={Messages} />
                            <span>Messages</span>
                            {showMessageSubMenu ? <i className='fa fa-chevron-down' style={{ fontSize: "12px", color: "#DE4F4D" }}></i> : <i className='fa fa-chevron-right' style={{ fontSize: "12px" }}></i>}
                        </Link>
                        {
                            showMessageSubMenu && <div className={styles.subMenu}>
                                <Link href="/dashboard/Messages/Inbox" className={`${subMenu === "Inbox" && styles.activeSubMenu}`}>
                                    <Image src={Inbox} />
                                    <span>Inbox</span>
                                </Link>
                                <Link href="/dashboard/Messages/Draft" className={`${subMenu === "Draft" && styles.activeSubMenu}`}>
                                    <Image src={Draft} />
                                    <span>Draft</span>
                                </Link>
                                <Link href="/dashboard/Messages/Sent" className={`${subMenu === "Sent" && styles.activeSubMenu}`}>
                                    <Image src={Sent} />
                                    <span>Sent</span>
                                </Link>
                                <Link href="/dashboard/Messages/Archive" className={`${subMenu === "Archive" && styles.activeSubMenu}`}>
                                    <Image src={Archive} />
                                    <span>Archive</span>
                                </Link>
                                <Link href="/dashboard/Messages/Trash" className={`${subMenu === "Trash" && styles.activeSubMenu}`}>
                                    <Image src={Trash} />
                                    <span>Trash</span>
                                </Link>
                            </div>
                        }
                        <Link href="/dashboard/Availability" className={`${page === "Availability" && styles.menuItemActive}`}>
                            <Image src={Availability} />
                            <span>Availability</span>
                        </Link>
                        <Link href="/dashboard/VEHDEPass" className={`${page === "VEHDEPass" && styles.menuItemActive}`}>
                            <Image src={VEHDEPass} />
                            <span>VEHDEPass</span>
                        </Link>
                        <Link href="/dashboard/Payment" className={`${page === "Payment" && styles.menuItemActive}`}>
                            <Image src={Payment} />
                            <span>Payment</span>
                        </Link>
                        <Link href="/dashboard/VEHDEScore" className={`${page === "VEHDE Score" && styles.menuItemActive}`}>
                            <Image src={VEHDEScore} />
                            <span>VEHDE Score</span>
                        </Link>
                        <Link href="/dashboard/SnowTicket" className={`${page === "Snow Ticket" && styles.menuItemActive}`}>
                            <Image src={SnowTicket} />
                            <span>Snow Ticket</span>
                        </Link>
                    </div>
                </>
            }
            {
                userRole === "renter" && <>
                    <div className={`${styles.menuItems}`}>
                        <Link href="/dashboard/MyRental" className={`${page === "My Rental" && styles.menuItemActive}`}>
                            <Image src={CarListing2} />
                            <span>My Rental</span>
                        </Link>
                        <Link href="/dashboard/Messages/Inbox" className={`${page === "Messages" && styles.menuItemActive}`}>
                            <Image src={Messages} />
                            <span>Messages</span>
                            {showMessageSubMenu ? <i className='fa fa-chevron-down' style={{ fontSize: "12px", color: "#DE4F4D" }}></i> : <i className='fa fa-chevron-right' style={{ fontSize: "12px" }}></i>}
                        </Link>
                        {
                            showMessageSubMenu && <div className={styles.subMenu}>
                                <Link href="/dashboard/Messages/Inbox" className={`${subMenu === "Inbox" && styles.activeSubMenu}`}>
                                    <Image src={Inbox} />
                                    <span>Inbox</span>
                                </Link>
                                <Link href="/dashboard/Messages/Draft" className={`${subMenu === "Draft" && styles.activeSubMenu}`}>
                                    <Image src={Draft} />
                                    <span>Draft</span>
                                </Link>
                                <Link href="/dashboard/Messages/Sent" className={`${subMenu === "Sent" && styles.activeSubMenu}`}>
                                    <Image src={Sent} />
                                    <span>Sent</span>
                                </Link>
                                <Link href="/dashboard/Messages/Archive" className={`${subMenu === "Archive" && styles.activeSubMenu}`}>
                                    <Image src={Archive} />
                                    <span>Archive</span>
                                </Link>
                                <Link href="/dashboard/Messages/Trash" className={`${subMenu === "Trash" && styles.activeSubMenu}`}>
                                    <Image src={Trash} />
                                    <span>Trash</span>
                                </Link>
                            </div>
                        }
                        <Link href="/dashboard/VEHDEPass" className={`${page === "VEHDEPass" && styles.menuItemActive}`}>
                            <Image src={VEHDEPass} />
                            <span>VEHDEPass</span>
                        </Link>
                        <Link href="/dashboard/Payment" className={`${page === "Payment" && styles.menuItemActive}`}>
                            <Image src={Payment} />
                            <span>Payment</span>
                        </Link>
                        <Link href="/dashboard/VEHDEScore" className={`${page === "VEHDE Score" && styles.menuItemActive}`}>
                            <Image src={VEHDEScore} />
                            <span>VEHDE Score</span>
                        </Link>
                        <Link href="/dashboard/SnowTicket" className={`${page === "Snow Ticket" && styles.menuItemActive}`}>
                            <Image src={SnowTicket} />
                            <span>Snow Ticket</span>
                        </Link>
                    </div>
                </>
            }
            <div></div>
        </div>
    )
}

export default LeftNav
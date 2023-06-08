import React, { useState } from 'react'
import DashboardLayout from '../../../components/layout/DashboardLayout'
import MessagesBox from '../../../components/messages/MessagesBox'
import MessagesOpen from "../../../components/messages/MessagesOpen"

import styles from "../../../styles/dashboard/Messages/Inbox.module.css"

export const msgBoxes = [
    {
        _id: 1,
        name: "VEHDE",
        description: "VEHDE approved host’s application to list TOYOTA VENZA LE",
        time: "4:27 PM",
        unreadMsg: 0
    },
    {
        _id: 2,
        name: "VEHDE",
        description: "VEHDE approved host’s application to list TOYOTA VENZA LE",
        time: "4:27 PM",
        unreadMsg: 2
    },
    {
        _id: 3,
        name: "VEHDE",
        description: "VEHDE approved host’s active payment switch....",
        time: "4:27 PM",
        unreadMsg: 0
    },
    {
        _id: 4,
        name: "VEHDE",
        description: "VEHDE approved host’s active payment switch....",
        time: "4:27 PM",
        unreadMsg: 0
    },
    {
        _id: 5,
        name: "VEHDE",
        description: "VEHDE approved host’s active payment switch....",
        time: "4:27 PM",
        unreadMsg: 0
    },
    {
        _id: 6,
        name: "VEHDE",
        description: "VEHDE approved host’s active payment switch....",
        time: "4:27 PM",
        unreadMsg: 0
    },
    {
        _id: 7,
        name: "VEHDE",
        description: "VEHDE approved host’s active payment switch....",
        time: "4:27 PM",
        unreadMsg: 0
    },
    {
        _id: 8,
        name: "VEHDE",
        description: "VEHDE approved host’s active payment switch....",
        time: "4:27 PM",
        unreadMsg: 0
    },
    {
        _id: 9,
        name: "VEHDE",
        description: "VEHDE approved host’s active payment switch....",
        time: "4:27 PM",
        unreadMsg: 0
    },
    {
        _id: 10,
        name: "VEHDE",
        description: "VEHDE approved host’s active payment switch....",
        time: "4:27 PM",
        unreadMsg: 0
    },
]

const Inbox = () => {

    const [activeMsgBox, setActiveMsgBox] = useState(null)

    return (
        <>
            <DashboardLayout>
                <div className={`${styles.container} ${activeMsgBox && styles.activeContainer}`}>
                    <MessagesBox msgBoxes={msgBoxes} activeMsgBox={activeMsgBox} setActiveMsgBox={setActiveMsgBox}></MessagesBox>
                    {
                        activeMsgBox !== null && <MessagesOpen></MessagesOpen>
                    }
                </div>
            </DashboardLayout>
        </>
    )
}

export default Inbox
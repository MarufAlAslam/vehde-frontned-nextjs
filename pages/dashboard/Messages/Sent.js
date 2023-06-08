import React, { useState } from 'react'
import DashboardLayout from '../../../components/layout/DashboardLayout'
import MessagesBox from '../../../components/messages/MessagesBox'
import MessagesOpen from "../../../components/messages/MessagesOpen"

import styles from "../../../styles/dashboard/Messages/Inbox.module.css"

import { msgBoxes } from './Inbox'

const Sent = () => {

    const [activeMsgBox, setActiveMsgBox] = useState(null)

    return (
        <>
            <DashboardLayout>
                <div className={`${styles.container} ${activeMsgBox && styles.activeContainer}`}>
                    <MessagesBox msgBoxes={msgBoxes} activeMsgBox={activeMsgBox} setActiveMsgBox={setActiveMsgBox} mode="sent"></MessagesBox>
                    {
                        activeMsgBox !== null && <MessagesOpen></MessagesOpen>
                    }
                </div>
            </DashboardLayout>
        </>
    )
}

export default Sent
import styles from "../../styles/dashboard/Messages/MessagesBox.module.css"
import MessagesCard from "./MessagesCard"
import { useState } from "react"
import ModalMd from "../common/ModalMd"


const MessagesBox = ({ activeMsgBox, setActiveMsgBox, msgBoxes, mode }) => {

    const [modalMd, setModalMd] = useState(null)

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Messages</h2>
                    <button className="my-btn" onClick={() => setModalMd({})}>
                        <i className="fa fa-edit"></i>
                        <span>Compose</span>
                    </button>
                </div>
                <div className={styles.boxContainer}>
                    {
                        msgBoxes?.map(msgBox => (
                            <MessagesCard mode={mode} activeMsgBox={activeMsgBox} setActiveMsgBox={setActiveMsgBox} msgInfo={msgBox} />
                        ))
                    }
                </div>
            </div>
            {
                modalMd && <ModalMd setModal={setModalMd}>
                    <div className={styles.modalMd}>
                        <h1>New Messages</h1>
                        <div>
                            <input type="text" placeholder="Subject" />
                        </div>
                        <div>
                            <textarea name="" placeholder="Write your message ..."></textarea>
                        </div>
                        <div>
                            <button className="my-btn">Send</button>
                            <i className="fa fa-link"></i>
                            <i className="fa fa-trash-can"></i>
                        </div>
                    </div>
                </ModalMd>
            }
        </>
    )
}

export default MessagesBox
import styles from "../../styles/dashboard/Messages/MessagesCard.module.css"

const MessagesCard = ({ mode, activeMsgBox, setActiveMsgBox, msgInfo }) => {
    return (
        <div className={`${styles.container} ${msgInfo?._id === activeMsgBox && styles.activeContainer}`} onClick={() => setActiveMsgBox(msgInfo?._id)}>
            <div>
                <input type="checkbox" />
                <div>
                    {/* <img src="" alt="" /> */}
                    <div>
                        V
                    </div>
                    <div>
                        <h4>{mode === "sent" && "To:"} {mode === "archive" && "From:"} {mode === "draft" ? "Draft" : "VEHDE"}</h4>
                        <p>VEHDE approved host’s application to list TOYOTA VENZA LE</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <span>4:27 PM</span>
                    {
                        msgInfo.unreadMsg !== 0 && <span>{msgInfo.unreadMsg}</span>
                    }
                </div>
                {
                    mode === "trash" && <i class="fa-regular fa-trash-can"></i>
                }
            </div>
        </div>
    )
}

export default MessagesCard
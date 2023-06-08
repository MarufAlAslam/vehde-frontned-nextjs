import styles from "../../styles/dashboard/Messages/MessagesOpen.module.css"

import TrashImg from "../../assets/img/dashboard/Messages/trash.png"
import ReplyImg from "../../assets/img/dashboard/Messages/reply.png"
import MoreImg from "../../assets/img/dashboard/Messages/more.png"
import Image from "next/image"
import Link from "next/link"

const MessagesOpen = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image src={TrashImg} alt="" />
                <Image src={ReplyImg} alt="" />
                <Image src={MoreImg} alt="" />
            </div>
            <div className={styles.body}>
                <p className={styles.time}>4:27 PM (5 hours ago)</p>
                <h2 className={styles.title}>VEHDE approved host’s application
                    list TOYOTA VENZA LE</h2>
                <div>
                    <p>Hi James,</p>
                    <p>Congratulations! You are now set to host with TOYOTA VENZA LE
                        with Car Tag # (TY) 78613-39053 VEHDE ID JW-H(TX) 868746-78613.
                    </p>
                    <h3>What to expect next:</h3>
                    <p>
                        Please look out for renter’s reservation request for your
                        listed car. Get ready!
                    </p>
                    <h3>What to do next:</h3>
                    <p>
                        Please make sure you switch on your availability to host so that
                        renters can reserve your listed car. Please submit <Link href="/dashboard/SnowTicket">Snow Ticket</Link> if
                        you have any questions or concerns.
                    </p>
                </div>
            </div>
            <div className={styles.footer}>
                <h3>VEHDE</h3>
                <p>VEHDE approved host’s active payment switch</p>
            </div>
        </div>
    )
}

export default MessagesOpen
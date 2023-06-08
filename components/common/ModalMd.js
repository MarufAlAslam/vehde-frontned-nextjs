import React from 'react'

import styles from "../../styles/dashboard/ModalMd.module.css"

const ModalMd = ({ children, setModal, title, subtitle }) => {
    return (
        <div className={styles.modalContainer}>
            <div style={{ position: "relative", maxWidth: "549px", width: "100%" }} >
                <button className={styles.modalCloseBtn} onClick={() => setModal(null)}>
                    <i className="fa fa-times" style={{ fontSize: "25px" }}></i>
                </button>
            </div>
            <div className={styles.modalBoxWrapper}>
                <div >
                    {title && <h2 className={styles.heading}>{title}</h2>}
                    {subtitle && <p className={styles.subHeading}>{subtitle}</p>}
                    {
                        children
                    }
                </div>

            </div>
        </div>
    )
}

export default ModalMd
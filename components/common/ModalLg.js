import React from 'react'

import styles from "../../styles/dashboard/ModalLg.module.css"

const ModalLg = ({ children, setModal, title, subtitle, style }) => {
    return (
        <div className={styles.modalContainer} style={style ? style : {}}>
            <div style={{ position: "relative", maxWidth: "1024px", width: "100%" }}>
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

export default ModalLg
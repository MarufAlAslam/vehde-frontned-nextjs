import React from "react"
import styles from "../../styles/dashboard/carPictures&Specification/CarDetailsPopupMap.module.css"

const CarDetailsPopupMap = () => {
    return (
        <div className={styles.container}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84607.02659657899!2d-97.2582324935688!3d32.98736389554427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dd16a8983df89%3A0xe20a64d799c88ac2!2sWestlake%2C%20TX%2C%20USA!5e0!3m2!1sen!2sbd!4v1677077674083!5m2!1sen!2sbd" className={styles.map}>
            </iframe>
        </div>
    )
}

export default CarDetailsPopupMap
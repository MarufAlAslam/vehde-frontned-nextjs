import styles from "../../styles/dashboard/DashboardBanner.module.css"

const DashboardBanner = ({ leftContent, rightContent }) => {
    return (
        <div className={styles.container}>
            {leftContent && leftContent}
            {rightContent && rightContent}
        </div>
    )
}

export default DashboardBanner
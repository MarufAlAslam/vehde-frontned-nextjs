import styles from "../../../styles/renter/Review/ReviewHeaderBox.module.css"


const ReivewHeaderBox = () => {
    return (
        <div className={styles.container}>
            <h2>Reserving Toyota Venza LE 2022</h2>
            <p>Please indicate your car pick-up and drop-off locations in <span>Austin, TX</span></p>
            <div>
                <div>
                    <label htmlFor="">Pick-up location</label>
                    <div>
                        <i className="fa fa-map-marker-alt"></i>
                        <input type="text" placeholder="Address" />
                    </div>
                </div>
                <div>
                    <label htmlFor="">Drop-off location</label>
                    <div>
                        <i className="fa fa-map-marker-alt"></i>
                        <input type="text" placeholder="Address" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReivewHeaderBox
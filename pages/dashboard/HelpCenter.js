import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'

import styles from "../../styles/dashboard/HelpCenter.module.css"


const HelpCenter = () => {
    return (
        <DashboardLayout>
            <div className={styles.container}>
                <h2>VEHDE Help Center</h2>
                <div>
                    <div>
                        <i className='fa fa-search'></i>
                        <input type="text" placeholder='How can we help you' />
                    </div>
                    <button className='my-btn'>Search</button>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default HelpCenter
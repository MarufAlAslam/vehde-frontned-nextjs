import React, { useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import styles from "../../styles/dashboard/Availability.module.css"
import DashboardBanner from "../../components/common/DashboardBanner"
import DashboardBannerLeftContent from "../../components/common/DashboardBannerLeftContent"
import DashboardBannerRightContent from "../../components/common/DashboardBannerRightContent"

import CarImg from "../../assets/img/dashboard/MyHost/Rental/car.png"
import Image from 'next/image'

const Availability = () => {

    const [isEditMode, setIsEditMode] = useState(false)

    return (
        <>
            <DashboardLayout>
                <div className={styles.container}>
                    <DashboardBanner leftContent={<DashboardBannerLeftContent page="availability" />} rightContent={<DashboardBannerRightContent page="availability" />} />
                    <div className={styles.tableContainer}>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Car</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>State</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            {
                                !isEditMode && <tbody>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            <h3>Toyota Venza LE 2022</h3>
                                            <span>See details</span>
                                        </td>
                                        <td>
                                            <div>
                                                <div>
                                                    <i className="fa fa-calendar-alt"></i>
                                                    <input type="date" className={styles.calendarPicker} />
                                                </div>
                                                <div>
                                                    <i class="fa-regular fa-clock"></i>
                                                    <input type="time" className={styles.calendarPicker} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <div>
                                                    <i className="fa fa-calendar-alt"></i>
                                                    <input type="date" className={styles.calendarPicker} />
                                                </div>
                                                <div>
                                                    <i class="fa-regular fa-clock"></i>
                                                    <input type="time" className={styles.calendarPicker} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>TX</td>
                                        <td>Austin</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            <h3>Toyota Venza LE 2022</h3>
                                            <span>See details</span>
                                        </td>
                                        <td>
                                            <div>
                                                <div>
                                                    <i className="fa fa-calendar-alt"></i>
                                                    <input type="date" className={styles.calendarPicker} />
                                                </div>
                                                <div>
                                                    <i class="fa-regular fa-clock"></i>
                                                    <input type="time" className={styles.calendarPicker} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <div>
                                                    <i className="fa fa-calendar-alt"></i>
                                                    <input type="date" className={styles.calendarPicker} />
                                                </div>
                                                <div>
                                                    <i class="fa-regular fa-clock"></i>
                                                    <input type="time" className={styles.calendarPicker} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>TX</td>
                                        <td>Austin</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            <h3>Toyota Venza LE 2022</h3>
                                            <span>See details</span>
                                        </td>
                                        <td>
                                            <div>
                                                <div>
                                                    <i className="fa fa-calendar-alt"></i>
                                                    <input type="date" className={styles.calendarPicker} />
                                                </div>
                                                <div>
                                                    <i class="fa-regular fa-clock"></i>
                                                    <input type="time" className={styles.calendarPicker} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <div>
                                                    <i className="fa fa-calendar-alt"></i>
                                                    <input type="date" className={styles.calendarPicker} />
                                                </div>
                                                <div>
                                                    <i class="fa-regular fa-clock"></i>
                                                    <input type="time" className={styles.calendarPicker} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>TX</td>
                                        <td>Austin</td>
                                    </tr>
                                </tbody>
                            }
                            {
                                isEditMode && <tbody>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            <h3>Toyota Venza LE 2022</h3>
                                            <span>See details</span>
                                        </td>
                                        <td>
                                            <div>
                                                <div>
                                                    <i className="fa fa-calendar-alt"></i>
                                                    <input type="date" className={styles.calendarPicker} />
                                                </div>
                                                <div>
                                                    <i class="fa-regular fa-clock"></i>
                                                    <input type="time" className={styles.calendarPicker} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <div>
                                                    <i className="fa fa-calendar-alt"></i>
                                                    <input type="date" className={styles.calendarPicker} />
                                                </div>
                                                <div>
                                                    <i class="fa-regular fa-clock"></i>
                                                    <input type="time" className={styles.calendarPicker} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>TX</td>
                                        <td>Austin</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Image src={CarImg} alt="" />
                                        </td>
                                        <td>
                                            <h3>Toyota Venza LE 2022</h3>
                                            <span>See details</span>
                                        </td>
                                        <td>
                                            <div>
                                                <div>
                                                    <i className="fa fa-calendar-alt"></i>
                                                    <input type="date" className={styles.calendarPicker} />
                                                </div>
                                                <div>
                                                    <i class="fa-regular fa-clock"></i>
                                                    <input type="time" className={styles.calendarPicker} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <div>
                                                    <i className="fa fa-calendar-alt"></i>
                                                    <input type="date" className={styles.calendarPicker} />
                                                </div>
                                                <div>
                                                    <i class="fa-regular fa-clock"></i>
                                                    <input type="time" className={styles.calendarPicker} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>TX</td>
                                        <td>Austin</td>
                                    </tr>
                                    <tr>
                                        <td>

                                        </td>
                                        <td>
                                            <h3 style={{ textDecoration: "underline", cursor: "pointer" }}>Add Car</h3>
                                        </td>
                                        <td>
                                            <div>
                                                <div>
                                                    <i className="fa fa-calendar-alt"></i>
                                                    {/* <input type="date" className={styles.calendarPicker} /> */}
                                                    <h5>Add Date</h5>
                                                </div>
                                                <div>
                                                    <i class="fa-regular fa-clock"></i>
                                                    {/* <input type="time" className={styles.calendarPicker} /> */}
                                                    <h5>Add Time</h5>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <div>
                                                    <i className="fa fa-calendar-alt"></i>
                                                    {/* <input type="date" className={styles.calendarPicker} /> */}
                                                    <h5>Add Date</h5>
                                                </div>
                                                <div>
                                                    <i class="fa-regular fa-clock"></i>
                                                    {/* <input type="time" className={styles.calendarPicker} /> */}
                                                    <h5>Add Time</h5>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Add State</td>
                                        <td>Add City</td>
                                    </tr>
                                </tbody>
                            }
                        </table>
                    </div>
                    <div className={styles.buttons}>
                        {
                            isEditMode ? <>
                                <button className='my-btn' onClick={() => setIsEditMode(false)}>Save</button>
                                <button className='my-btn' onClick={() => setIsEditMode(false)}>Cancel</button>
                            </> : <button className='my-btn' onClick={() => setIsEditMode(true)}>Edit</button>
                        }
                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}

export default Availability
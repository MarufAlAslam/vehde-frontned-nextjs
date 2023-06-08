import React, { useState } from 'react'

import styles from "../../styles/dashboard/UploadCarPictures.module.css"
import Image from 'next/image'

import VideoIcon from "../../assets/img/dashboard/video-icon.png"
import uploadCarDemo from "../../assets/img/dashboard/uploadCarDemo.png"
import CameraIcon from "../../assets/img/dashboard/CameraIcon2.png"
import { toast } from 'react-toastify'



const UploadCarPictures = ({ setUploadCarPictures, setModalLg }) => {

    const [FrontViewExterior, setFrontViewExterior] = useState(null)
    const [DashboardInterior, setDashboardInterior] = useState(null)
    const [RightSideViewExterior, setRightSideViewExterior] = useState(null)
    const [RightSideViewInterior, setRightSideViewInterior] = useState(null)
    const [LeftSideViewExterior, setLeftSideViewExterior] = useState(null)
    const [LeftSideViewInterior, setLeftSideViewInterior] = useState(null)
    const [RearViewInterior, setRearViewInterior] = useState(null)
    const [RearViewExterior, setRearViewExterior] = useState(null)

    const handleImageUpload = (type, file) => {
        const fileName = file?.name
        const fileType = file?.type?.split("/")[0]
        const fileSize = file?.size

        if (fileType !== "image") {
            toast.error("Only Image are allowed")
        }
        else {

            const reader = new FileReader()
            reader.onload = function () {
                const result = reader.result

                if (type === "FrontViewExterior") {
                    setFrontViewExterior(result)
                }
                else if (type === "DashboardInterior") {
                    setDashboardInterior(result)
                }
                else if (type === "RightSideViewExterior") {
                    setRightSideViewExterior(result)
                }
                else if (type === "RightSideViewInterior") {
                    setRightSideViewInterior(result)
                }
                else if (type === "LeftSideViewExterior") {
                    setLeftSideViewExterior(result)
                }
                else if (type === "LeftSideViewInterior") {
                    setLeftSideViewInterior(result)
                }
                else if (type === "RearViewInterior") {
                    setRearViewInterior(result)
                }
                else if (type === "RearViewExterior") {
                    setRearViewExterior(result)
                }

            }
            reader.readAsDataURL(file)
        }
        console.log(file)
    }

    return (
        <>
            <div className={styles.modalContainer}>
                <div style={{ position: "relative", maxWidth: "1024px", width: "100%" }}>
                    <button className={styles.modalCloseBtn} onClick={() => setUploadCarPictures(null)}>
                        <i className="fa fa-times" style={{ fontSize: "25px" }}></i>
                    </button>
                </div>
                <div className={styles.modalBoxWrapper}>
                    <div >
                        <h2 className={styles.heading}>Host | Car pictures & specifications</h2>
                        <p className={styles.subHeading}>Please upload your car’s pictures below</p>
                        <p className={styles.subHeading}>For the pictures’ requirements,</p>
                        <div className={styles.videoLinkWrapper}>
                            <a href="" className={styles.videoLink}>
                                <Image src={VideoIcon} />
                                <span>Please check here</span>
                            </a>
                        </div>
                        <div className={styles.uploadCarWrapper}>
                            <Image src={uploadCarDemo} />
                            <div className={styles.desktopUploadCar}>
                                <label htmlFor="FrontViewExterior">
                                    {
                                        FrontViewExterior === null ? <>
                                            <Image src={CameraIcon} />
                                            <span>Front view (Exterior)</span>
                                        </>
                                            : <>
                                                <Image src={FrontViewExterior} width="100" height="100" />
                                            </>
                                    }
                                    <input type="file" id='FrontViewExterior' hidden onChange={(file) => handleImageUpload("FrontViewExterior", file.target.files[0])} />
                                </label>
                                <label htmlFor="DashboardInterior">
                                    {
                                        DashboardInterior === null ? <>
                                            <Image src={CameraIcon} />
                                            <span>Dashboard (Interior)</span>
                                        </>
                                            : <>
                                                <Image src={DashboardInterior} width="100" height="100" />
                                            </>
                                    }
                                    <input type="file" id='DashboardInterior' hidden onChange={(file) => handleImageUpload("DashboardInterior", file.target.files[0])} />
                                </label>
                                <label htmlFor="RightSideViewExterior">
                                    {
                                        RightSideViewExterior === null ? <>
                                            <Image src={CameraIcon} />
                                            <span>Right Side View (Exterior)</span>
                                        </>
                                            : <>
                                                <Image src={RightSideViewExterior} width="100" height="100" />
                                            </>
                                    }
                                    <input type="file" id='RightSideViewExterior' hidden onChange={(file) => handleImageUpload("RightSideViewExterior", file.target.files[0])} />
                                </label>
                                <label htmlFor="RightSideViewInterior">
                                    {
                                        RightSideViewInterior === null ? <>
                                            <Image src={CameraIcon} />
                                            <span>Right Side View (Interior)</span>
                                        </>
                                            : <>
                                                <Image src={RightSideViewInterior} width="100" height="100" />
                                            </>
                                    }
                                    <input type="file" id='RightSideViewInterior' hidden onChange={(file) => handleImageUpload("RightSideViewInterior", file.target.files[0])} />
                                </label>
                                <label htmlFor="LeftSideViewExterior">
                                    {
                                        LeftSideViewExterior === null ? <>
                                            <Image src={CameraIcon} />
                                            <span>Left Side View (Exterior)</span>
                                        </>
                                            : <>
                                                <Image src={LeftSideViewExterior} width="100" height="100" />
                                            </>
                                    }
                                    <input type="file" id='LeftSideViewExterior' hidden onChange={(file) => handleImageUpload("LeftSideViewExterior", file.target.files[0])} />
                                </label>
                                <label htmlFor="LeftSideViewInterior">
                                    {
                                        LeftSideViewInterior === null ? <>
                                            <Image src={CameraIcon} />
                                            <span>Left Side View (Interior)</span>
                                        </>
                                            : <>
                                                <Image src={LeftSideViewInterior} width="100" height="100" />
                                            </>
                                    }
                                    <input type="file" id='LeftSideViewInterior' hidden onChange={(file) => handleImageUpload("LeftSideViewInterior", file.target.files[0])} />
                                </label>
                                <label htmlFor="RearViewInterior">
                                    {
                                        RearViewInterior === null ? <>
                                            <Image src={CameraIcon} />
                                            <span>Rear View (Interior)</span>
                                        </>
                                            : <>
                                                <Image src={RearViewInterior} width="100" height="100" />
                                            </>
                                    }
                                    <input type="file" id='RearViewInterior' hidden onChange={(file) => handleImageUpload("RearViewInterior", file.target.files[0])} />
                                </label>
                                <label htmlFor="RearViewExterior">
                                    {
                                        RearViewExterior === null ? <>
                                            <Image src={CameraIcon} />
                                            <span>Rear View (Exterior)</span>
                                        </>
                                            : <>
                                                <Image src={RearViewExterior} width="100" height="100" />
                                            </>
                                    }
                                    <input type="file" id='RearViewExterior' hidden onChange={(file) => handleImageUpload("RearViewExterior", file.target.files[0])} />
                                </label>
                            </div>
                        </div>
                        <div className={styles.mobileUploadCar}>
                            <label htmlFor="FrontViewExterior">
                                {
                                    FrontViewExterior === null ? <>
                                        <Image src={CameraIcon} />
                                        <span>Front view (Exterior)</span>
                                    </>
                                        : <>
                                            <Image src={FrontViewExterior} width="100" height="100" />
                                            <span style={{ fontSize: "8px" }}>Front View (Exterior)</span>
                                        </>
                                }
                                <input type="file" id='FrontViewExterior' hidden onChange={(file) => handleImageUpload("FrontViewExterior", file.target.files[0])} />
                            </label>
                            <label htmlFor="DashboardInterior">
                                {
                                    DashboardInterior === null ? <>
                                        <Image src={CameraIcon} />
                                        <span>Dashboard (Interior)</span>
                                    </>
                                        : <>
                                            <Image src={DashboardInterior} width="100" height="100" />
                                            <span style={{ fontSize: "8px" }}>Dashboard (Interior)</span>
                                        </>
                                }
                                <input type="file" id='DashboardInterior' hidden onChange={(file) => handleImageUpload("DashboardInterior", file.target.files[0])} />
                            </label>
                            <label htmlFor="RightSideViewExterior">
                                {
                                    RightSideViewExterior === null ? <>
                                        <Image src={CameraIcon} />
                                        <span>Right Side View (Exterior)</span>
                                    </>
                                        : <>
                                            <Image src={RightSideViewExterior} width="100" height="100" />
                                            <span style={{ fontSize: "8px" }}>Right Side View (Exterior)</span>
                                        </>
                                }
                                <input type="file" id='RightSideViewExterior' hidden onChange={(file) => handleImageUpload("RightSideViewExterior", file.target.files[0])} />
                            </label>
                            <label htmlFor="RightSideViewInterior">
                                {
                                    RightSideViewInterior === null ? <>
                                        <Image src={CameraIcon} />
                                        <span>Right Side View (Interior)</span>
                                    </>
                                        : <>
                                            <Image src={RightSideViewInterior} width="100" height="100" />
                                            <span style={{ fontSize: "8px" }}>Right Side View (Interior)</span>
                                        </>
                                }
                                <input type="file" id='RightSideViewInterior' hidden onChange={(file) => handleImageUpload("RightSideViewInterior", file.target.files[0])} />
                            </label>
                            <label htmlFor="LeftSideViewExterior">
                                {
                                    LeftSideViewExterior === null ? <>
                                        <Image src={CameraIcon} />
                                        <span>Left Side View (Exterior)</span>
                                    </>
                                        : <>
                                            <Image src={LeftSideViewExterior} width="100" height="100" />
                                            <span style={{ fontSize: "8px" }}>Left Side View (Exterior)</span>
                                        </>
                                }
                                <input type="file" id='LeftSideViewExterior' hidden onChange={(file) => handleImageUpload("LeftSideViewExterior", file.target.files[0])} />
                            </label>
                            <label htmlFor="LeftSideViewInterior">
                                {
                                    LeftSideViewInterior === null ? <>
                                        <Image src={CameraIcon} />
                                        <span>Left Side View (Interior)</span>
                                    </>
                                        : <>
                                            <Image src={LeftSideViewInterior} width="100" height="100" />
                                            <span style={{ fontSize: "8px" }}>Left Side View (Interior)</span>
                                        </>
                                }
                                <input type="file" id='LeftSideViewInterior' hidden onChange={(file) => handleImageUpload("LeftSideViewInterior", file.target.files[0])} />
                            </label>
                            <label htmlFor="RearViewInterior">
                                {
                                    RearViewInterior === null ? <>
                                        <Image src={CameraIcon} />
                                        <span>Rear View (Interior)</span>
                                    </>
                                        : <>
                                            <Image src={RearViewInterior} width="100" height="100" />
                                            <span style={{ fontSize: "8px" }}>Rear View (Interior)</span>
                                        </>
                                }
                                <input type="file" id='RearViewInterior' hidden onChange={(file) => handleImageUpload("RearViewInterior", file.target.files[0])} />
                            </label>
                            <label htmlFor="RearViewExterior">
                                {
                                    RearViewExterior === null ? <>
                                        <Image src={CameraIcon} />
                                        <span>Rear View (Exterior)</span>
                                    </>
                                        : <>
                                            <Image src={RearViewExterior} width="100" height="100" />
                                            <span style={{ fontSize: "8px" }}>Rear Side View (Exterior)</span>
                                        </>
                                }
                                <input type="file" id='RearViewExterior' hidden onChange={(file) => handleImageUpload("RearViewExterior", file.target.files[0])} />
                            </label>
                        </div>
                        <div>
                            <button className="my-btn mx-auto" onClick={() => setModalLg({})}>Preview car pictures</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UploadCarPictures
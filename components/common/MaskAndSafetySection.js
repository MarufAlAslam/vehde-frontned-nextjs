import Image from "next/image"
import Link from "next/link"

import Section08Img01 from "../../assets/img/home-page/section-08-img-01.png"
import Section08Img02 from "../../assets/img/home-page/section-08-img-02.png"
import Section08Img03 from "../../assets/img/home-page/section-08-img-03.png"

import styles from "../../styles/dashboard/MaskAndSafetySection.module.css"


const MaskAndSafetySection = () => {
    return (
        <section id={styles.section08}>
            <div className="container">
                <div className="wrapper">
                    <h2 className='text-center'>Mask and Safety</h2>
                    <div className="row row-cols-lg-3 row-cols-1 align-items-center">
                        <div className="col p-3">
                            <div className="text-center d-flex flex-column align-items-center justify-content-between">
                                <Image src={Section08Img01} alt="Car in hand" />
                                <h3>Your safety, our no 1 priority.</h3>
                                <p>We are fully committed to your safety, even as our innovative strategies help enhance your accessibility to mobility of greater value to your productivity.</p>
                            </div>
                        </div>
                        <div className="col p-3">
                            <div className="text-center d-flex flex-column align-items-center justify-content-between">
                                <Image src={Section08Img02} alt="Car in hand" />
                                <h3>Mask & Social Safety</h3>
                                <p>With your support, when you observe safety procedures, every day, we protect our great asset –Health.</p>
                                <Link href="/MaskSocialSafety" className='d-block' style={{ paddingBottom: "15px" }}>Learn more about mask and social safety</Link>
                            </div>
                        </div>
                        <div className="col p-3">
                            <div className="text-center d-flex flex-column align-items-center justify-content-between">
                                <Image src={Section08Img03} alt="Car in hand" />
                                <h3>COVID-19 Vaccine</h3>
                                <p>Let’s crunch the virus! Our commitment to vaccination moves us closer to full recovery in our various communities.</p>
                                <Link href="/VaccinationProgram">Learn more about vaccination program</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MaskAndSafetySection
import Head from 'next/head'
import styles from '../../styles/Careers.module.css'
import MainLayout from "../../components/layout/MainLayout"
import Image from 'next/image'
import Link from "next/link"
import "react-datepicker/dist/react-datepicker.css";

import SearchIcon from "../../assets/img/search-icon.png"
import LocationIcon from "../../assets/img/location-icon.png"
import RightArrow from "../../assets/img/right-arrow.png"


export default function Careers() {

    return (
        <>
            <Head>
                <title>VEHDE - Careers</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <section id={styles.heroSection} className="heroSection">
                    <div>
                        <div className='container'>
                            <div className='row row-cols-lg-2 gap-5'>
                                <div>
                                    <h1>Careers at VEHDE</h1>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={styles.reserveCarSection}>
                    <div className='container'>
                        <div className={styles.reserveCarSectionWrapper}>
                            <h2 className='text-center mb-4'> Find your dream job</h2>
                            <div className="input-box">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div>
                                            <label htmlFor="">Job</label>
                                        </div>
                                        <div className="d-flex gap-2 align-items-center">
                                            <Image src={SearchIcon} alt="Map Icon" />
                                            <input type="text" placeholder='Job title or keyword' />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-lg-0 mb-3">
                                        <div>
                                            <label htmlFor="">Location</label>
                                        </div>
                                        <div className="d-flex gap-2 align-items-center">
                                            <Image src={LocationIcon} alt="Calendar Icon" />
                                            <input type="text" placeholder='Select your location' />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 justify-content-lg-end d-flex pe-3">
                                        <button className='my-btn w-lg-auto w-100'>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={styles.section03}>
                    <div className="container">
                        <div className="wrapper text-center">
                            <h2>Thank you for your interests in VEHDE.</h2>
                            <p>At this moment, we do not have vacant positions. However, we are constantly looking for talents to join us. Please review some of the positions we anticipate filling in the future and, if anyone falls within your areas of interest, please send your resume to <a href="mailto:careers@VEHDE.com">careers@VEHDE.com</a>. The subject matter should be the position title you are interested in.</p>
                        </div>
                    </div>
                </section>
                <section id={styles.section04} className="mb-5">
                    <div className="container">
                        <div className="wrapper">
                            <div className="accordion" id="accordionExample">
                                <div className={`accordion-item ${styles.AccordionItem}`}>
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button text-start" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Team Lead, Real Time Analytics
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>
                                                <Link href="/Careers/1">Long Beach, CA</Link>
                                            </p>
                                            <p>
                                                As the Team Lead you will be responsible for the supervision of the Real-Time team at VEHDE. This position will maintain the internal policies and procedures, support operations and Real Time Analytics, or RTA, analysts in identifying trends, providing input on metric improvements, including forecast versus actuals.
                                            </p>
                                            <div className="d-flex gap-3 align-items-center">
                                                <Link href="/Careers/1">Learn more about this position</Link><Image src={RightArrow} alt="Right Arrow" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`accordion-item ${styles.AccordionItem}`}>
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button text-start collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                            Director, Policy Communications
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>
                                                <Link href="/Careers/2">Long Beach, CA</Link>
                                            </p>
                                            <p>
                                                VEHDE is looking for a Director of Policy Communications to join our fast-paced Communications team.  The primary focus of the role will be on regulatory matters, including policies related to drivers, but will include a variety of other initiatives as well. This role will develop and lead the execution of proactive strategies and programs to reach our driver community, as well as national and local media, and government officials.  The successful candidate will be an entrepreneurial and resourceful self-starter, comfortable working in an ambiguous and fast-changing environment.
                                            </p>
                                            <div className="d-flex gap-3 align-items-center">
                                                <Link href="/Careers/2">Learn more about this position</Link><Image src={RightArrow} alt="Right Arrow" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`accordion-item ${styles.AccordionItem}`}>
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button text-start collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                            Data Scientist, Predictive Modeling
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p>
                                                <Link href="/Careers/3">Long Beach, CA</Link>
                                            </p>
                                            <p>
                                                Data Science is at the heart of VEHDE’s products and decision-making. As a member of the Science team, you will work in a dynamic environment, where we embrace moving quickly to build the world’s best transportation. Data Scientists take on a variety of problems ranging from shaping critical business decisions to building algorithms that power our internal and external products. We’re looking for passionate, driven Data Scientists to take on some of the most interesting and impactful problems in ridesharing.
                                            </p>
                                            <div className="d-flex gap-3 align-items-center">
                                                <Link href="/Careers/3">Learn more about this position</Link><Image src={RightArrow} alt="Right Arrow" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 mt-4 justify-content-center">
                                <button className={styles.section04ButtonActive}>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>4</button>
                                <button>5</button>
                                <button>6</button>
                                <button>7</button>
                                <button>8</button>
                                <button>9</button>
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    )
}
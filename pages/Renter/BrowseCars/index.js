import MainLayout from "../../../components/layout/MainLayout"
import MaskAndSafetySection from "../../../components/common/MaskAndSafetySection"

import styles from "../../../styles/renter/BrowseCars.module.css"
import SingleBrowseCarStyles from "../../../styles/renter/SingleCarDetails.module.css"
import LocationPickupDropOffBox from "../../../components/common/LocationPickupDropOffBox"
import { useEffect, useState } from "react"


import ElectricImg from "../../../assets/img/Renter/Electric.png"
import GasImg from "../../../assets/img/Renter/Gas.png"

import ChevroletLogo from "../../../assets/img/Renter/carBrands/Chevrolet-Logo.png"
import lamborghiniLogo from "../../../assets/img/Renter/carBrands/lamborghini-logo.png"
import mercedesBenz9Logo from "../../../assets/img/Renter/carBrands/mercedes-benz-9-logo.png"
import toyotaLogosBrands from "../../../assets/img/Renter/carBrands/toyota-logos-brands.png"

import Car1Img from "../../../assets/img/Renter/cars/car1.png"
import Car2Img from "../../../assets/img/Renter/cars/car2.png"
import Car3Img from "../../../assets/img/Renter/cars/car3.png"
import Car4Img from "../../../assets/img/Renter/cars/car4.png"

import DiscountImg from "../../../assets/img/Renter/Discount.png"
import LpgCarImg from "../../../assets/img/Renter/LpgCarImg.png"

import Image from "next/image"
import CarDetailsPopupPictures from "../../../components/carPictures&Specification/CarDetailsPopupPictures"
import Link from "next/link"
import { useRouter } from "next/router"
import ModalMd from "../../../components/common/ModalMd"
import CarDetailsOverviewPopup from "../../../components/carPictures&Specification/CarDetailsOverviewPopup"
import AboutHostPopup from "../../../components/Rental/AboutHostPopup"
import BrowseCarsBoardView from "../../../components/Rental/BrowseCarsBoardView"


const BrowseCars = () => {

    const router = useRouter("")

    const [viewType, serViewType] = useState("quick")
    const [isOptimizerOn, setIsOptimizerOn] = useState(false)

    const [showOptimizer, setShowOptimizer] = useState(false)
    const [leisure, setLeisure] = useState(40)
    const [economy, setEconomy] = useState(40)
    const [earth, setEarth] = useState(40)

    const [showPriceFilter, setShowPriceFilter] = useState(false)
    const [price, setPrice] = useState({ min: 1, max: 150 })

    const [showMakeOption, setShowMakeOption] = useState(false)

    const [overview, setOverview] = useState(null)
    const [detail, setDetail] = useState(null)

    const [carMakes, setCarMakes] = useState(
        ["Acura", "Alfa Romeo", "Aston Marton", "BMW", "Bentley", "Buick", "CODA", "Cadilac", "Chevrolet", "Chrsyler", "Daewoo", "Daihatsu", "Dodge", "Eagle", "Ferrari", "Fiat", "Fisker", "Ford", "Freightliner", "GMC", "Genesis", "Geo", "Honda", "Hummer", "Hyundai", "Infiniti", "Isuzu", "Jaguar", "Jeep", "Kia", "Lamborghini", "Land Rover", "Lexus", "Lincoln", "Lotus", "Maserati", "Maybach", "Mazda", "Mclaren", "Mercedes - Benz", "Mercury", "Mini", "Mitsubishi", "Nissan", "Oldsmobile", "Panoz", "Plymouth", "Pontaic", "Posche", "Ram", "Rivian", "Rolls - Royce", "Saab", "Saturn", "Scion", "Smart", "Srt", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen", "Volvo"]
    )


    const handleChangeOptimizer = () => {
        setIsOptimizerOn(!isOptimizerOn)
        setShowOptimizer(!isOptimizerOn && true)
    }


    return (
        <>
            <MainLayout hideFooter={true} fullWidth={true}>
                <main className={styles.main}>
                    <div className="container">
                        <div>
                            <div className={styles.searchFilterBox}>
                                <LocationPickupDropOffBox />
                                <div>
                                    <button className={viewType === "quick" ? "my-btn" : "my-btn-outline"} onClick={() => serViewType("quick")}>Quick View</button>
                                    <button className={viewType === "board" ? "my-btn" : "my-btn-outline"} onClick={() => serViewType("board")}>Board View</button>
                                </div>
                                <hr />
                                <div>
                                    <div>
                                        <input type="checkbox" id="optimizer" hidden onChange={handleChangeOptimizer} />
                                        <label htmlFor="optimizer" className={`${styles.optimizerBtn} ${isOptimizerOn ? styles.optimizerBtnOn : ""}`}>
                                            {
                                                isOptimizerOn ? <div className={styles.optimizerBtnOnInner}>
                                                    <span>Optimizer On</span>
                                                    <span></span>
                                                </div> : <div className={styles.optimizerBtnOffInner}>
                                                    <span></span>
                                                    <span>Optimizer Off</span>
                                                </div>
                                            }
                                        </label>
                                        {
                                            showOptimizer && <div className={styles.optimizationOptionBox}>
                                                <span className={styles.closeOptimizationBoxBtn}>
                                                    <i className="fa fa-times" onClick={() => setShowOptimizer(false)}></i>
                                                </span>
                                                <h2>Slide to optimize your car search</h2>
                                                <div className={styles.optimizerOptions}>
                                                    <div>
                                                        <span>Leisure</span>
                                                        <input type="range" name="" id="" min={1} max={100} value={leisure} onChange={(e) => setLeisure(e.target.value)} />
                                                        <span>{leisure} %</span>
                                                    </div>
                                                    <div>
                                                        <span>Economy</span>
                                                        <input type="range" name="" id="" min={1} max={100} value={economy} onChange={(e) => setEconomy(e.target.value)} />
                                                        <span>{economy} %</span>
                                                    </div>
                                                    <div>
                                                        <span>Earth</span>
                                                        <input type="range" name="" id="" min={1} max={100} value={earth} onChange={(e) => setEarth(e.target.value)} />
                                                        <span>{earth} %</span>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div>
                                        <button className="my-btn-outline" onClick={() => setShowPriceFilter(true)}>Price</button>
                                        {
                                            showPriceFilter && <div className={`${styles.optimizationOptionBox} ${styles.priceFilterBox} ${styles.filterBox2}`}>
                                                <span className={styles.closeOptimizationBoxBtn}>
                                                    <i className="fa fa-times" onClick={() => setShowPriceFilter(false)}></i>
                                                </span>
                                                <h2>Any Price</h2>
                                                <div className={styles.priceFilterOption}>
                                                    <div>
                                                        <h4>${price.min} - ${price.max}</h4>
                                                    </div>
                                                    <div>
                                                        <div style={{ background: `linear-gradient(to right, #000000 ${(price.min / 150) * 100}%, #DE4F4D ${(price.min / 150) * 100}%, #DE4F4D ${(price.max / 150) * 100}%, #000000 ${(price.max / 150) * 100}%)` }}></div>
                                                        <input type="range" name="" id="" min={1} max={150} value={price.min} onInput={(e) => setPrice({ ...price, min: [parseInt(e.target.value) + 10 <= price.max ? parseInt(e.target.value) : price.min] })} />
                                                        <input type="range" name="" id="" min={1} max={150} value={price.max} onInput={(e) => setPrice({ ...price, max: [price.min <= parseInt(e.target.value) - 10 ? parseInt(e.target.value) : price.max] })} />
                                                    </div>
                                                </div>
                                                <div className={styles.filterButtonBox}>
                                                    <button>Reset</button>
                                                    <button>Save</button>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div>
                                        <button className="my-btn-outline" onClick={() => setShowMakeOption(true)}>Makes</button>
                                        {
                                            showMakeOption && <div className={`${styles.optimizationOptionBox} ${styles.priceFilterBox} ${styles.filterBox3}`}>
                                                <span className={styles.closeOptimizationBoxBtn}>
                                                    <i className="fa fa-times" onClick={() => setShowMakeOption(false)}></i>
                                                </span>
                                                <h2>Make your car</h2>
                                                <div className={styles.makeFilterOption}>
                                                    <div>
                                                        <input type="checkbox" id="allCarMakes" value="Any Make" />
                                                        <label htmlFor="allCarMakes">Any Make</label>
                                                    </div>
                                                    {
                                                        carMakes?.map(((make, index) => (
                                                            <div>
                                                                <input type="checkbox" id={make} value={make} />
                                                                <label htmlFor={make}>{make}</label>
                                                            </div>
                                                        )))
                                                    }
                                                </div>
                                                <hr />
                                                <div className={styles.filterButtonBox}>
                                                    <button>Reset</button>
                                                    <button>Save</button>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>

                        <div>
                            {
                                viewType === "quick" && <div className={styles.quickViewListWrapper}>
                                    <Link href={`./BrowseCars/123456`}>
                                        <div>
                                            <div>
                                                <div>
                                                    <Image src={ChevroletLogo} alt="img-fuild" />
                                                </div>
                                                <div>
                                                    <h5>Chevrolet</h5>
                                                    <h5>Equinox 2021</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <Image src={ElectricImg} alt="" />
                                                <span>HYBRID</span>
                                            </div>
                                        </div>
                                        <div>
                                            <Image src={Car1Img} alt="" />
                                        </div>
                                        <div>
                                            <div>
                                                <h4>$96</h4>
                                                <p><span>PER</span> <span>DAY</span></p>
                                            </div>
                                            <div>
                                                <h4>$288</h4>
                                                <p><span>EST</span> <span>TOTAL</span></p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href={`./BrowseCars/123456`}>
                                        <div>
                                            <div>
                                                <div>
                                                    <Image src={lamborghiniLogo} alt="img-fuild" />
                                                </div>
                                                <div>
                                                    <h5>Lamborghini</h5>
                                                    <h5>2019</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <Image src={GasImg} alt="" />
                                                <span>GAS</span>
                                            </div>
                                        </div>
                                        <div>
                                            <Image src={Car2Img} alt="" />
                                        </div>
                                        <div>
                                            <div>
                                                <h4>$135</h4>
                                                <p><span>PER</span> <span>DAY</span></p>
                                            </div>
                                            <div>
                                                <h4>$405</h4>
                                                <p><span>EST</span> <span>TOTAL</span></p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href={`./BrowseCars/123456`}>
                                        <div>
                                            <div>
                                                <div>
                                                    <Image src={mercedesBenz9Logo} alt="img-fuild" />
                                                </div>
                                                <div>
                                                    <h5>Mercedes</h5>
                                                    <h5>Benz EQS 2022</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <Image src={ElectricImg} alt="" />
                                                <span>ELECTRIC</span>
                                            </div>
                                        </div>
                                        <div>
                                            <Image src={Car3Img} alt="" />
                                        </div>
                                        <div>
                                            <div>
                                                <h4>$125</h4>
                                                <p><span>PER</span> <span>DAY</span></p>
                                            </div>
                                            <div>
                                                <h4>$375</h4>
                                                <p><span>EST</span> <span>TOTAL</span></p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href={`./BrowseCars/123456`}>
                                        <div>
                                            <div>
                                                <div>
                                                    <Image src={toyotaLogosBrands} alt="img-fuild" />
                                                </div>
                                                <div>
                                                    <h5>Toyota</h5>
                                                    <h5>Venza 2022</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <Image src={ElectricImg} alt="" />
                                                <span>HYBRID</span>
                                            </div>
                                        </div>
                                        <div>
                                            <Image src={Car4Img} alt="" />
                                        </div>
                                        <div>
                                            <div>
                                                <h4>$105</h4>
                                                <p><span>PER</span> <span>DAY</span></p>
                                            </div>
                                            <div>
                                                <h4>$315</h4>
                                                <p><span>EST</span> <span>TOTAL</span></p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href={`./BrowseCars/123456`}>
                                        <div>
                                            <div>
                                                <div>
                                                    <Image src={mercedesBenz9Logo} alt="img-fuild" />
                                                </div>
                                                <div>
                                                    <h5>Mercedes</h5>
                                                    <h5>Benz EQS 2022</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <Image src={ElectricImg} alt="" />
                                                <span>ELECTRIC</span>
                                            </div>
                                        </div>
                                        <div>
                                            <Image src={Car3Img} alt="" />
                                        </div>
                                        <div>
                                            <div>
                                                <h4>$125</h4>
                                                <p><span>PER</span> <span>DAY</span></p>
                                            </div>
                                            <div>
                                                <h4>$375</h4>
                                                <p><span>EST</span> <span>TOTAL</span></p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href={`./BrowseCars/123456`}>
                                        <div>
                                            <div>
                                                <div>
                                                    <Image src={toyotaLogosBrands} alt="img-fuild" />
                                                </div>
                                                <div>
                                                    <h5>Toyota</h5>
                                                    <h5>Venza 2022</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <Image src={ElectricImg} alt="" />
                                                <span>HYBRID</span>
                                            </div>
                                        </div>
                                        <div>
                                            <Image src={Car4Img} alt="" />
                                        </div>
                                        <div>
                                            <div>
                                                <h4>$105</h4>
                                                <p><span>PER</span> <span>DAY</span></p>
                                            </div>
                                            <div>
                                                <h4>$315</h4>
                                                <p><span>EST</span> <span>TOTAL</span></p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            }
                            {
                                viewType === "board" && <div className={styles.boardViewListWrapper}>
                                    <BrowseCarsBoardView />
                                    <BrowseCarsBoardView />
                                    {/* <div>
                                        <div>
                                            <div>
                                                <div>
                                                    <Image src={ChevroletLogo} alt="" />
                                                </div>
                                                <div>
                                                    <h4>Chevrolet</h4>
                                                    <h4>Equinox 2021</h4>
                                                </div>
                                            </div>
                                            <div>
                                                <h2>$106</h2>
                                                <p><span>PER</span> <span>DAY</span></p>
                                            </div>
                                        </div>
                                        <CarDetailsPopupPictures></CarDetailsPopupPictures>
                                        <div>
                                            <div>
                                                <span>
                                                    Discount <Image src={DiscountImg} alt="" />
                                                </span>
                                                <span><span>5%</span> 1-week</span>
                                            </div>
                                            <Image src={LpgCarImg} alt="" />
                                            <div>
                                                <h3>21/23</h3>
                                                <p>Est. MPG</p>
                                            </div>
                                            <div>
                                                <h3>5</h3>
                                                <p>Seats</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button onClick={() => router.push(`./BrowseCars/123456?pay=now`)}>$2,219 Pay Now</button>
                                            <button onClick={() => router.push(`./BrowseCars/123456?pay=later`)}>$2,316 Pay Later</button>
                                            <button onClick={() => setOverview({})}>Overview</button>
                                            <button onClick={() => setDetail({})}>Detail</button>
                                        </div>
                                    </div> */}
                                </div>
                            }
                            {/* <div className="mt-4">
                                <button className="my-btn mx-auto">Show More</button>
                            </div> */}
                        </div>
                        <div className={styles.mapWrapper}>
                            <div>
                                <input type="checkbox" id="searchCarsForMoveMap" />
                                <label htmlFor="searchCarsForMoveMap">Search for cars as I move the map</label>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84607.02659657899!2d-97.2582324935688!3d32.98736389554427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dd16a8983df89%3A0xe20a64d799c88ac2!2sWestlake%2C%20TX%2C%20USA!5e0!3m2!1sen!2sbd!4v1677077674083!5m2!1sen!2sbd" className={styles.map} donotallowfullscreen allowfullscreen="0" controls="0">
                            </iframe>
                        </div>
                    </div>
                </main>
                {/* <MaskAndSafetySection></MaskAndSafetySection> */}
            </MainLayout>
            {
                overview !== null && <ModalMd setModal={setOverview}>
                    <h2 className={styles.popupHeader}>Host Category: <span>Individual</span></h2>
                    <CarDetailsOverviewPopup></CarDetailsOverviewPopup>
                </ModalMd>
            }
            {
                detail !== null && <ModalMd setModal={setDetail}>
                    <h2 className={styles.popupHeader}>About Host</h2>
                    <AboutHostPopup payNowUrl={`./BrowseCars/123456/review`}></AboutHostPopup>
                </ModalMd>
            }
        </>
    )
}

export default BrowseCars
import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import MainLayout from "../components/layout/MainLayout"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from "next/link"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

import MapIcon from "../assets/img/map-icon.png"
import CalendarIcon from "../assets/img/calendar-icon.png"
import Section03Img01 from "../assets/img/home-page/section-03-img-01.png"
import Section03Img02 from "../assets/img/home-page/section-03-img-02.png"
import Section03ArrowIcon from "../assets/img/home-page/section-03-arrow-icon.png"
import Section04Img from "../assets/img/home-page/section-04-img.png"
import Section05Img01 from "../assets/img/signin-up-with-vehde/section-02-img-01.png"
import Section05Img02 from "../assets/img/home-page/section-05-img-02.png"
import Section06Img from "../assets/img/home-page/section-06-img.png"
import Section07Img01 from "../assets/img/home-page/section-07-img-01.png"
import Section07Img02 from "../assets/img/home-page/section-07-img-02.png"
import Section07Img03 from "../assets/img/home-page/section-07-img-03.png"
import Section07Img04 from "../assets/img/home-page/section-07-img-04.png"
import Section08Img01 from "../assets/img/home-page/section-08-img-01.png"
import Section08Img02 from "../assets/img/home-page/section-08-img-02.png"
import Section08Img03 from "../assets/img/home-page/section-08-img-03.png"


import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const [pickUpDate, setPickUpDate] = useState(new Date())
    const [pickUpDateTime, setPickUpDateTime] = useState("10:10 PM")
    const [dropOffDate, setDropOffDate] = useState(new Date())
    const [showMobileMap, setShowMobileMap] = useState(null)
    const [selectLocation, setSelectLocation] = useState(null)
    const [selectMapBoxName, setSelectMapBoxName] = useState(null)

    const handleOpenMobileMapPopup = (id) => {
        setShowMobileMap(id)
    }

    const handleCloseMobileMapPopup = () => {
        setShowMobileMap(null)
    }


    const destinationsArr = [
        {
            _id: 1,
            name: "Big Bend National Park",
            location: "Texas",
            desctiption: "Big Bend National Park includes the entire Chisos mountain range and a large swath of the Chihuahuan Desert. The Ross Maxwell Scenic Drive leads to the ruins of Sam Nail Ranch.",
            img: require("../assets/img/home-page/map-img/texas.jpeg")
        },
        {
            _id: 2,
            name: "Grand Canyon National Park",
            location: "Arizona",
            desctiption: "The Grand Canyon fills me with awe. It is beyond comparison—beyond description; absolutely unparalleled through-out the wide world.",
            quotation: "- President Theodore Roosevelt",
            img: require("../assets/img/home-page/map-img/arizona.jpeg")
        },
        {
            _id: 3,
            name: "Mount Rushmore",
            location: "South Dakota",
            desctiption: "Majestic figures of George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln, surrounded by the beauty of the Black Hills of South Dakota.",
            img: require("../assets/img/home-page/map-img/south-dakota.jpeg")
        },
        {
            _id: 4,
            name: "Whitewater Falls",
            location: "North Carolina and South Carolina",
            desctiption: "Experience the uniqueness of a series of waterfalls and cascades on the Whitewater River in North Carolina and South Carolina. Over the 3.5 mi course of the river between the two falls.",
            img: require("../assets/img/home-page/map-img/north-and-south-carolina.jpeg")
        },
        {
            _id: 5,
            name: "Kennedy Space Center",
            location: "Florida",
            desctiption: "Cape Canaveral, located on the coast of Florida, boasts a lot of space-related attractions. One of the best is the Kennedy Space Center, which has been the launch site for every US human space flight.",
            img: require("../assets/img/home-page/map-img/florida.jpeg")
        },
        {
            _id: 6,
            name: "Bryce Canyon National Park",
            location: "Utah",
            desctiption: "Located in Southern Utah, Bryce Canyon National Park is a breathtaking display of rock formations. Technically, Bryce Canyon isn’t a canyon, but a series of natural amphitheaters.",
            img: require("../assets/img/home-page/map-img/utah.jpeg")
        },
        {
            _id: 7,
            name: "Yosemite National Park",
            location: "California",
            desctiption: "In the Sierra Nevada Mountains of California, there is Yosemite National Park. This extraordinary destination is known the world over for its amazing scenery. Within this single park, visitors can peer off spectacular granite cliffs.",
            img: require("../assets/img/home-page/map-img/california.jpeg")
        },
        {
            _id: 8,
            name: "Denali National Park",
            location: "Alaska",
            desctiption: "The Denali National Park and Preserve is in Interior Alaska and contains Mount McKinley, the highest mountain in North America. The word “Denali” means “the high one” in the native Athabaskan language.",
            img: require("../assets/img/home-page/map-img/alaska.jpeg")
        },
        {
            _id: 9,
            name: "Kilauea",
            location: "Hawaii",
            desctiption: "Kilauea is the most recent of a series of volcanoes that have created the Hawaiian Archipelago. It is a very low, flat shield volcano, vastly different in profile from the high, sharply sloping peaks of stratovolcanoes. ",
            img: require("../assets/img/home-page/map-img/hawaii.jpeg")
        },
        {
            _id: 10,
            name: "Yellowstone",
            location: "Wyoming",
            desctiption: "Yellowstone National Park was the world’s first national park, set aside in 1872 to preserve the vast number of geysers, hot springs, and other thermal areas, as well as to protect the incredible wildlife and rugged beauty of the area.",
            img: require("../assets/img/home-page/map-img/wyoming.jpeg")
        },
        {
            _id: 11,
            name: "Acadia",
            location: "Maine",
            desctiption: "Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats, and a rich cultural heritage. ",
            img: require("../assets/img/home-page/map-img/maine.jpeg")
        },
        {
            _id: 12,
            name: "Voyageurs National Park",
            location: "Minnesota",
            desctiption: "With 218,055 acres, Voyageurs National Park is an adventure wonderland all year long full of exposed rock ridges, cliffs, wetlands, forests, streams and lakes. ",
            img: require("../assets/img/home-page/map-img/minnesota.jpeg")
        },
        {
            _id: 13,
            name: "Arches National Park",
            location: "Utah",
            desctiption: "Discover a landscape of contrasting colors, land forms, and textures unlike any other. The park has over 2,000 natural stone arches, hundreds of soaring pinnacles, massive rock fins, and giant balanced rocks.",
            img: require("../assets/img/home-page/map-img/utah-2.jpeg")
        },
        {
            _id: 14,
            name: "Mesa Verde National Park",
            location: "Colorado",
            desctiption: "For over 700 years, the Ancestral Pueblo people built thriving communities on the mesas and in the cliffs of Mesa Verde. Today, the park protects the rich cultural heritage of 26 Pueblos and Tribes.",
            img: require("../assets/img/home-page/map-img/colorado.jpeg")
        },
        {
            _id: 15,
            name: "Shenandoah National Park",
            location: "Virginia",
            desctiption: "Just 75 miles from the bustle of Washington, D.C., Shenandoah National Park is a land bursting with cascading waterfalls, spectacular vistas, fields of wildflowers, and quiet wooded hollows.",
            img: require("../assets/img/home-page/map-img/virginia.jpeg")
        },
        {
            _id: 16,
            name: "Olympic National Park",
            location: "Washington",
            desctiption: "With its incredible range of precipitation and elevation, diversity is the hallmark of Olympic National Park. Encompassing nearly a million acres, the park protects a vast wilderness, thousands of years of human history, and several distinctly different ecosystems.",
            img: require("../assets/img/home-page/map-img/washington.jpeg")
        },
        {
            _id: 17,
            name: "Navy Pier in Chicago",
            location: "Illinois",
            desctiption: "Extending over the waters of Lake Michigan is Navy Pier, an enormous pier in the heart of Chicago’s coastal Streeterville neighborhood. Within the pier, there are countless attractions suited to the whole family.",
            img: require("../assets/img/home-page/map-img/Illinois.jpeg")
        },
        {
            _id: 18,
            name: "Great Smoky Mountains",
            location: "Tennessee and North Carolina",
            desctiption: "The park is the most visited in the entire country, thanks in large part to its enormous size and its incredible scenery. Visitors can hike through old growth forest, spot hundreds of species of birds and check out the two visitor centers.",
            img: require("../assets/img/home-page/map-img/tennessee-and-north-carolina.jpeg")
        },
        {
            _id: 19,
            name: "Carlsbad Caverns",
            location: "New Mexico",
            desctiption: "As the name suggests, Carlsbad Caverns is a collection of over 115 caves. Located in southern New Mexico, these caverns are carved from limestone, and it is possible for visitors to descend more than 900 feet (275 meters) below the surface.",
            img: require("../assets/img/home-page/map-img/new-mexico.jpeg")
        },
        {
            _id: 20,
            name: "French Quarter in New Orleans",
            location: "Louisiana",
            desctiption: "New Orleans, Louisiana, is made up of several unique districts, but none is so famous as the French Quarter. Also known as the Vieux Carre, the French Quarter truly explores the rich French influences.",
            img: require("../assets/img/home-page/map-img/louisiana.jpeg")
        },
        {
            _id: 21,
            name: "Las Vegas Strip",
            location: "Nevada",
            desctiption: "The gambling mecca of the world, Las Vegas is situated amid the southern Nevada desert landscape. Casinos can be found throughout Las Vegas, but the strip, a stretch of Las Vegas Boulevard South, contains the most of them.",
            img: require("../assets/img/home-page/map-img/nevada.jpeg")
        },
        {
            _id: 22,
            name: "White House and the National Mall",
            location: "Washington D.C.",
            desctiption: "The White House in Washington DC is the official residence and office of the President of the United States. It was built between 1792 and 1800 and first used by President John Adams.",
            img: require("../assets/img/home-page/map-img/washington-3.jpeg")
        },
        {
            _id: 23,
            name: "Walt Disney World",
            location: "Florida",
            desctiption: "Orlando, Florida, is a hub of amusement parks, but none is so popular as Walt Disney World. Many travelers don’t realize that Walt Disney World is made up of several distinct theme parks, including the Magic Kingdom and Water Park.",
            img: require("../assets/img/home-page/map-img/florida-2.jpeg")
        },
        {
            _id: 24,
            name: "Glacier National Park",
            location: "Montana",
            desctiption: "A showcase of melting glaciers, alpine meadows, carved valleys, and spectacular lakes. With over 700 miles of trails, Glacier is a paradise for adventurous visitors seeking wilderness steeped in human history.",
            img: require("../assets/img/home-page/map-img/montana.jpeg")
        },
        {
            _id: 25,
            name: "U.S. Space & Rocket Center",
            location: "Alabama",
            desctiption: "Get a lesson in American space travel at Alabama's U.S. Space & Rocket Center in Huntsville. A Smithsonian affiliate, the center has one of the world's largest collections of rockets and space memorabilia, as well as Space Camp.",
            img: require("../assets/img/home-page/map-img/alabama.jpeg")
        },
        {
            _id: 26,
            name: "Hot Springs National Park",
            location: "Arkansas",
            desctiption: "The nation's oldest national park, even older than Yellowstone, Hot Springs National Park preserves 47 thermal springs with 4,000-year-old water flowing from Hot Springs Mountain.",
            img: require("../assets/img/home-page/map-img/arkansas.jpeg")
        },
        {
            _id: 27,
            name: "Mystic Aquarium",
            location: "Connecticut",
            desctiption: "All ages can enjoy Mystic, a charming seaport village considered one of the top things to do in Connecticut. This quintessential destination offers a range of tourist attractions, including the Mystic Aquarium",
            img: require("../assets/img/home-page/map-img/connecticut.jpeg")
        },
        {
            _id: 28,
            name: "Golden Gate Bridge",
            location: "California",
            desctiption: "The Golden Gate Bridge, which has connected San Francisco to Marin County since 1937, is one of the country's most recognized landmarks. It took four years to build this nearly 2-mile-long bridge.",
            img: require("../assets/img/home-page/map-img/california-2.jpeg")
        },
        {
            _id: 29,
            name: "Sea Shipwreck Museum",
            location: "Delaware",
            desctiption: "Dreaming of lost treasure and the vast riches from countless shipwrecks that may lie below the sea? Explore your fantasies at the DiscoverSea Shipwreck Museum in Delaware, which offers an impressive collection of recovered shipwreck artifacts.",
            img: require("../assets/img/home-page/map-img/delaware.jpeg")
        },
        {
            _id: 30,
            name: "World of Coca-Cola",
            location: "Georgia",
            desctiption: "Located across from Centennial Olympic Park in Atlanta, this museum pays tribute to one of the world's favorite soft drinks. At this tourist attraction, you can sample more than 100 types of soda from around the world.",
            img: require("../assets/img/home-page/map-img/georgia.jpeg")
        },
        {
            _id: 31,
            name: "Kirkham Hot Springs",
            location: "Idaho",
            desctiption: "A popular activity in the state of Idaho is to visit one of its many hot springs. Visitors can soak in these geothermal pools, and one of the best known is Kirkham Hot Springs, just north of Lowman.",
            img: require("../assets/img/home-page/map-img/idaho.jpeg")
        },
        {
            _id: 32,
            name: "Indianapolis Motor Speedway",
            location: "Indiana",
            desctiption: "Lay your eyes on the world-famous Indianapolis Motor Speedway track, home of the Indianapolis 500 auto race and designated a National Historic Landmark.",
            img: require("../assets/img/home-page/map-img/indiana.jpeg")
        },
        {
            _id: 33,
            name: "Kentucky Horse Park",
            location: "Kentucky",
            desctiption: "In the thoroughbred country of Kentucky, visit the 1,200-acre Kentucky Horse Park, a perfect stop for horse lovers. Here in Lexington, known to many as the Horse Capital of the World, you'll learn all about the history of our relationship with horses.",
            img: require("../assets/img/home-page/map-img/kentucky.jpeg")
        },
        {
            _id: 34,
            name: "National Aquarium",
            location: "Maryland",
            desctiption: `Tucked into the Inner Harbor of Baltimore is the National Aquarium, home to award-winning exhibits and more than 20,000 aquatic animals. Immerse yourself in the interactive "Living Seashore" exhibit.`,
            img: require("../assets/img/home-page/map-img/maryland.jpeg")
        },
        {
            _id: 35,
            name: "Freedom Trail",
            location: "Massachusetts",
            desctiption: "See many of Boston's most historic sites along its 2.5-mile Freedom Trail. This attraction features 16 museums, churches, historical markers and even a ship that tell the story of our country from the American Revolution forward.",
            img: require("../assets/img/home-page/map-img/massachusetts.jpeg")
        },
        {
            _id: 36,
            name: "Mackinac Island",
            location: "Michigan",
            desctiption: "Slip back into days gone by with a trip to quaint and historic Mackinac Island in Michigan. On this island, you'll find no cars or chain hotels – only charming inns, bed and breakfasts, and historic hotels.",
            img: require("../assets/img/home-page/map-img/michigan.jpeg")
        },
        {
            _id: 37,
            name: "Gateway Arch",
            location: "Missouri",
            desctiption: "Measuring 630 feet high and 630 feet wide, the stainless-steel structure is the tallest man-made monument in the U.S. It stands as a symbol of America's westward expansion.",
            img: require("../assets/img/home-page/map-img/missouria.jpeg")
        },
        {
            _id: 38,
            name: "Chimney Rock National Historic Site",
            location: "Nebraska",
            desctiption: "One of the most famous sites along the American West's Oregon Trail, Chimney Rock stands at more than 4,000 feet tall and once indicated to 1800s travelers headed west.",
            img: require("../assets/img/home-page/map-img/nebraska.jpeg")
        },
        {
            _id: 39,
            name: "Mount Washington Cog Railway",
            location: "New Hampshire",
            desctiption: "The first mountain-climbing cog railway in the world, which also happens to be the second steepest. In this unusual form of transportation, you'll make your way through three climate zones in less than an hour.",
            img: require("../assets/img/home-page/map-img/new-hampshire.jpeg")
        },
        {
            _id: 40,
            name: "Statue of Liberty",
            location: "New York",
            desctiption: "It's hard to imagine a better symbol of America than the Statue of Liberty, gifted by France to celebrate 100 years of the U.S. Declaration of Independence.",
            img: require("../assets/img/home-page/map-img/new-york.jpeg")
        },
        {
            _id: 41,
            name: "Wright Brothers National Memorial",
            location: "North Carolina",
            desctiption: "Learn more about the origins of flight at this memorial to Wilbur and Orville Wright, who famously achieved flight here in 1903. Here can see a full-scale replica of the Wright Flyer and camp buildings.",
            img: require("../assets/img/home-page/map-img/north-carolina.jpeg")
        },
        {
            _id: 42,
            name: "Theodore Roosevelt National Park",
            location: "North Dakota",
            desctiption: "Discover the vast wilderness that once enchanted President Theodore Roosevelt. In the Badlands area of North Dakota, this national park beckons you with wild horses and bison, scenic drives, and hiking trails.",
            img: require("../assets/img/home-page/map-img/north-dakota.jpeg")
        },
        {
            _id: 43,
            name: "First Americans Museum",
            location: "Oklahoma",
            desctiption: "Showcasing the collective histories of 39 First American Nations, this museum celebrates the cultural traditions, histories, diversities, and contributions of the First Americans.",
            img: require("../assets/img/home-page/map-img/oklahoma.jpeg")
        },
        {
            _id: 44,
            name: "Mount Hood",
            location: "Oregon",
            desctiption: "An iconic sight on Portland's skyline and Oregon's tallest mountain, the larger-than-life Mount Hood is the region's prime skiing area even in summer; it's also home to forests, waterfalls, the Clackamas River.",
            img: require("../assets/img/home-page/map-img/oregon.jpeg")
        },
        {
            _id: 45,
            name: "Liberty Bell",
            location: "Pennsylvania",
            desctiption: `Located just north of Independence Hall inside the Liberty Bell Center, the Liberty Bell is a universal symbol of American democracy and freedom. The visitors can view this Philadelphia relic's world-renowned inscription: "Proclaim LIBERTY.`,
            img: require("../assets/img/home-page/map-img/pennsylvania.jpeg")
        },
        {
            _id: 46,
            name: "Fort Sumter National Monument",
            location: "South Carolina",
            desctiption: "See where the first shots of the Civil War were fired on April 12, 1861, at Fort Sumter National Monument in historic Charleston. The fort was occupied by the Confederate States Army for nearly four years.",
            img: require("../assets/img/home-page/map-img/south-carolina.jpeg")
        },
        {
            _id: 47,
            name: "Country Music Hall of Fame and Museum",
            location: "Tennessee",
            desctiption: "Country music fans will want to head to the Country Music Hall of Fame and Museum in Nashville to explore this genre of music and its historical roots. Inside you'll find more than 2.5 million artifacts.",
            img: require("../assets/img/home-page/map-img/tennessee.jpeg")
        },
        {
            _id: 48,
            name: "Space Needle",
            location: "Washington",
            desctiption: "When you think of Seattle, chances are the Space Needle immediately springs to mind. Designed for the space-themed 1962 World's Fair, the futuristic structure was renovated in 2018 to include the Skyrisers.",
            img: require("../assets/img/home-page/map-img/washington-4.jpeg")
        },
    ]

    return (
        <>
            <Head>
                <title>VEHDE - Home</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <section id={styles.heroSection} className='py-5 heroSection'>
                    <div className='container'>
                        <div className='row row-cols-lg-2 gap-5'>
                            <div>
                                <h1><span>Explore</span> the <span>creativity</span> of car sharing <span>innovation</span></h1>
                                <div className='d-flex gap-3 flex-sm-row flex-column align-items-center mt-5'>
                                    <Link href="/Host" className='my-btn'>Apply to host</Link>
                                    <button className='my-btn-outline'>&nbsp;&nbsp; Rent a car &nbsp;&nbsp;</button>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </section>
                <section id={styles.reserveCarSection}>
                    <div className='container'>
                        <div className={styles.reserveCarSectionWrapper}>
                            <h2 className='text-center mb-4'> The smartest place to rent a car</h2>
                            <div className="input-box">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-3">
                                        <div>
                                            <label htmlFor="">Location</label>
                                        </div>
                                        <div className="d-flex gap-2 align-items-center">
                                            <Image src={MapIcon} alt="Map Icon" />
                                            <input type="text" placeholder='Address' />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3">
                                        <div>
                                            <label htmlFor="">Pick-up</label>
                                        </div>
                                        <div className="d-flex gap-2 align-items-center">
                                            <Image src={CalendarIcon} alt="Calendar Icon" />
                                            <div className="d-flex gap-1 align-items-center">
                                                <div className="d-flex align-items-center" style={{ maxWidth: "80px" }}>
                                                    <DatePicker
                                                        style={{ width: "75px" }}
                                                        selected={pickUpDate}
                                                        onChange={(date) => setPickUpDate(date)}
                                                        timeInputLabel="Time:"
                                                        dateFormat="MM/dd/yyyy"
                                                    // showTimeInput
                                                    />
                                                    <i class="fa fa-angle-down" style={{ fontSize: "12px" }}></i>
                                                </div>
                                                <select name="" id="" style={{ border: "none", background: "transparent", outline: "none", fontSize: "13px", fontWeight: 500, marginLeft: "15px", maxHeight: "200px", color: "#000000" }}>
                                                    <option value="12:00 PM">12:00 PM</option>
                                                    <option value="12:00 PM">12:30 PM</option>
                                                    <option value="12:00 PM">01:00 PM</option>
                                                    <option value="12:00 PM">01:30 PM</option>
                                                    <option value="12:00 PM">02:00 PM</option>
                                                    <option value="12:00 PM">02:30 PM</option>
                                                    <option value="12:00 PM">03:00 PM</option>
                                                    <option value="12:00 PM">03:30 PM</option>
                                                    <option value="12:00 PM">04:00 PM</option>
                                                    <option value="12:00 PM">04:30 PM</option>
                                                    <option value="12:00 PM">05:00 PM</option>
                                                    <option value="12:00 PM">05:30 PM</option>
                                                    <option value="12:00 PM">06:00 PM</option>
                                                    <option value="12:00 PM">06:30 PM</option>
                                                    <option value="12:00 PM">07:00 PM</option>
                                                    <option value="12:00 PM">07:30 PM</option>
                                                    <option value="12:00 PM">08:00 PM</option>
                                                    <option value="12:00 PM">08:30 PM</option>
                                                    <option value="12:00 PM">09:00 PM</option>
                                                    <option value="12:00 PM">09:30 PM</option>
                                                    <option value="12:00 PM">10:00 PM</option>
                                                    <option value="12:00 PM">10:30 PM</option>
                                                    <option value="12:00 PM">11:00 PM</option>
                                                    <option value="12:00 PM">11:30 PM</option>

                                                    <option value="12:00 PM">12:00 AM</option>
                                                    <option value="12:00 AM">12:30 AM</option>
                                                    <option value="12:00 AM">01:00 AM</option>
                                                    <option value="12:00 AM">01:30 AM</option>
                                                    <option value="12:00 AM">02:00 AM</option>
                                                    <option value="12:00 AM">02:30 AM</option>
                                                    <option value="12:00 AM">03:00 AM</option>
                                                    <option value="12:00 AM">03:30 AM</option>
                                                    <option value="12:00 AM">04:00 AM</option>
                                                    <option value="12:00 AM">04:30 AM</option>
                                                    <option value="12:00 AM">05:00 AM</option>
                                                    <option value="12:00 AM">05:30 AM</option>
                                                    <option value="12:00 AM">06:00 AM</option>
                                                    <option value="12:00 AM">06:30 AM</option>
                                                    <option value="12:00 AM">07:00 AM</option>
                                                    <option value="12:00 AM">07:30 AM</option>
                                                    <option value="12:00 AM">08:00 AM</option>
                                                    <option value="12:00 AM">08:30 AM</option>
                                                    <option value="12:00 AM">09:00 AM</option>
                                                    <option value="12:00 AM">09:30 AM</option>
                                                    <option value="12:00 AM">10:00 AM</option>
                                                    <option value="12:00 AM">10:30 AM</option>
                                                    <option value="12:00 AM">11:00 AM</option>
                                                    <option value="12:00 AM">11:30 AM</option>
                                                </select>
                                            </div>
                                            {/* <div className="d-flex align-items-center gap-2">
                                                <input type="text" placeholder='11:50' />
                                                <i class="fa fa-angle-down"></i>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 mb-lg-0 mb-3">
                                        <div>
                                            <label htmlFor="">Drop-off</label>
                                        </div>
                                        <div className="d-flex gap-2 align-items-center">
                                            <Image src={CalendarIcon} alt="Calendar Icon" />
                                            <div className="d-flex align-items-center" style={{ maxWidth: "80px" }}>
                                                <DatePicker
                                                    style={{ width: "75px" }}
                                                    selected={dropOffDate}
                                                    startDate={pickUpDate}
                                                    onChange={(date) => setDropOffDate(date)}
                                                    timeInputLabel="Time:"
                                                    dateFormat="MM/dd/yyyy"
                                                // showTimeInput
                                                />
                                                <i class="fa fa-angle-down" style={{ fontSize: "12px" }}></i>
                                            </div>
                                            <select name="" id="" style={{ border: "none", background: "transparent", outline: "none", fontSize: "13px", fontWeight: 500, marginLeft: "15px", color: "#000000" }}>
                                                <option value="12:00 PM">12:00 PM</option>
                                                <option value="12:00 PM">12:30 PM</option>
                                                <option value="12:00 PM">01:00 PM</option>
                                                <option value="12:00 PM">01:30 PM</option>
                                                <option value="12:00 PM">02:00 PM</option>
                                                <option value="12:00 PM">02:30 PM</option>
                                                <option value="12:00 PM">03:00 PM</option>
                                                <option value="12:00 PM">03:30 PM</option>
                                                <option value="12:00 PM">04:00 PM</option>
                                                <option value="12:00 PM">04:30 PM</option>
                                                <option value="12:00 PM">05:00 PM</option>
                                                <option value="12:00 PM">05:30 PM</option>
                                                <option value="12:00 PM">06:00 PM</option>
                                                <option value="12:00 PM">06:30 PM</option>
                                                <option value="12:00 PM">07:00 PM</option>
                                                <option value="12:00 PM">07:30 PM</option>
                                                <option value="12:00 PM">08:00 PM</option>
                                                <option value="12:00 PM">08:30 PM</option>
                                                <option value="12:00 PM">09:00 PM</option>
                                                <option value="12:00 PM">09:30 PM</option>
                                                <option value="12:00 PM">10:00 PM</option>
                                                <option value="12:00 PM">10:30 PM</option>
                                                <option value="12:00 PM">11:00 PM</option>
                                                <option value="12:00 PM">11:30 PM</option>

                                                <option value="12:00 PM">12:00 AM</option>
                                                <option value="12:00 AM">12:30 AM</option>
                                                <option value="12:00 AM">01:00 AM</option>
                                                <option value="12:00 AM">01:30 AM</option>
                                                <option value="12:00 AM">02:00 AM</option>
                                                <option value="12:00 AM">02:30 AM</option>
                                                <option value="12:00 AM">03:00 AM</option>
                                                <option value="12:00 AM">03:30 AM</option>
                                                <option value="12:00 AM">04:00 AM</option>
                                                <option value="12:00 AM">04:30 AM</option>
                                                <option value="12:00 AM">05:00 AM</option>
                                                <option value="12:00 AM">05:30 AM</option>
                                                <option value="12:00 AM">06:00 AM</option>
                                                <option value="12:00 AM">06:30 AM</option>
                                                <option value="12:00 AM">07:00 AM</option>
                                                <option value="12:00 AM">07:30 AM</option>
                                                <option value="12:00 AM">08:00 AM</option>
                                                <option value="12:00 AM">08:30 AM</option>
                                                <option value="12:00 AM">09:00 AM</option>
                                                <option value="12:00 AM">09:30 AM</option>
                                                <option value="12:00 AM">10:00 AM</option>
                                                <option value="12:00 AM">10:30 AM</option>
                                                <option value="12:00 AM">11:00 AM</option>
                                                <option value="12:00 AM">11:30 AM</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 justify-content-lg-end d-flex pe-3">
                                        <button className='my-btn w-lg-auto w-100'>Reserve my car</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={styles.section03} className='mb-5'>
                    <div className="container">
                        <div className="row row-cols-md-2 row-cols-1 align-items-center">
                            <div className="col">
                                <h2>Collaborative strategy for flexible mobility</h2>
                                <p>Right from your doorstep you can optimize your travel experience through our carefully designed collaboration that supports flexibility in your daily mobility.</p>
                                <div className='d-flex align-items-center gap-2 d-none'>
                                    <a href="#">See how our collaborative strategy works</a>
                                    <span><Image src={Section03ArrowIcon} alt="Arrow Icon" /></span>
                                </div>
                            </div>
                            <div className="col d-flex flex-lg-row flex-column">
                                <div className={`flex-1 ${styles.section03FirstCol}`}>
                                    <Image src={Section03Img01} alt="" className='img-fuild' />
                                </div>
                                <div className='flex-1'>
                                    <Image src={Section03Img02} alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={styles.section04}>
                    <div className="container">
                        <div className="wrapper text-center">
                            <h2>Switch to smart mobility</h2>
                            <p>Smart transportation for increasing mobility and optimum daily productive life. Unlike the generic vehicular models, our innovative algorithm is designed specifically to optimize your car search experience.</p>
                            <Image src={Section04Img} alt="Car with map" className='img-fluid' />
                        </div>
                    </div>
                </section>
                <section id={styles.section05}>
                    <div className="container">
                        <div className="wrapper">
                            <h2 className="text-center">Enhance your productivity</h2>
                            <div className="row row-cols-lg-2 row-cols-1 align-items-center my-5">
                                <div className="col text-lg-start text-center">
                                    <Image src={Section05Img01} alt='Car with round fuel pipe' className='img-fluid' />
                                </div>
                                <div className="col text-lg-start text-center">
                                    <h3>Host</h3>
                                    <p>Whether you are an individual or a car rental company, you can become a host by listing your car to rent. Stay ahead! List your car today.</p>
                                    <button className='my-btn mx-lg-1 mx-auto'>Apply to host</button>
                                </div>
                            </div>
                            <div className="row row-cols-lg-2 flex-lg-row flex-column-reverse align-items-center mt-5 justify-content-between">
                                <div className="col text-lg-start text-center">
                                    <h3>Renter</h3>
                                    <p>For daily business activities, holiday leisure, or weekend trips, VEHDE is committed to improving people’s accessibility to a variety of cars in way more convenient arrangements.</p>
                                    <button className='my-btn mx-lg-1 mx-auto'> &nbsp; Rent a car &nbsp; </button>
                                </div>
                                <div className="col text-lg-end text-center">
                                    <Image src={Section05Img02} alt='Car with round fuel pipe' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={styles.section06}>
                    <div className="container">
                        <div className="wrapper">
                            <h2 className="text-center">VEHDE your way to top destinations in the United States</h2>
                            <p className='text-center'>Select a destination and reserve car for your vacation</p>
                            <div className="image-map-wrapper my-5 text-center position-relative">
                                <Image src={Section06Img} alt="USA Map with red circle" className={`img-fluid ${styles.section06img}`} />
                                <div className={`${styles.section06ButtonContainer}`}>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper01}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[7]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[7]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[7].location)
                                            setSelectMapBoxName(destinationsArr[7]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[7].name}</h2>
                                                <h3>{destinationsArr[7].location}</h3>
                                                <p>{destinationsArr[7].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[7]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper02}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[43]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[43]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[43].location)
                                            setSelectMapBoxName(destinationsArr[43]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[43].name}</h2>
                                                <h3>{destinationsArr[43].location}</h3>
                                                <p>{destinationsArr[43].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[43]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper03}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[38]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[38]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[38].location)
                                            setSelectMapBoxName(destinationsArr[38]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[38].name}</h2>
                                                <h3>{destinationsArr[38].location}</h3>
                                                <p>{destinationsArr[38].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[38]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper04}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[42]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[42]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[42].location)
                                            setSelectMapBoxName(destinationsArr[42]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[42].name}</h2>
                                                <h3>{destinationsArr[42].location}</h3>
                                                <p>{destinationsArr[42].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[42]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper05}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[30]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[30]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[30].location)
                                            setSelectMapBoxName(destinationsArr[30]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[30].name}</h2>
                                                <h3>{destinationsArr[30].location}</h3>
                                                <p>{destinationsArr[30].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[30]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper06}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[23]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[23]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[23].location)
                                            setSelectMapBoxName(destinationsArr[23]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[23].name}</h2>
                                                <h3>{destinationsArr[23].location}</h3>
                                                <p>{destinationsArr[23].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[23]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper07}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[35]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[35]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[35].location)
                                            setSelectMapBoxName(destinationsArr[35]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[35].name}</h2>
                                                <h3>{destinationsArr[35].location}</h3>
                                                <p>{destinationsArr[35].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[35]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper08}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[11]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[11]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[11].location)
                                            setSelectMapBoxName(destinationsArr[11]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[11].name}</h2>
                                                <h3>{destinationsArr[11].location}</h3>
                                                <p>{destinationsArr[11].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[11]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper09}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[44]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[44]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[44].location)
                                            setSelectMapBoxName(destinationsArr[44]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[44].name}</h2>
                                                <h3>{destinationsArr[44].location}</h3>
                                                <p>{destinationsArr[44].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[44]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper10}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[27]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[27]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[27].location)
                                            setSelectMapBoxName(destinationsArr[27]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[27].name}</h2>
                                                <h3>{destinationsArr[27].location}</h3>
                                                <p>{destinationsArr[27].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[27]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper11}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[37]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[37]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[37].location)
                                            setSelectMapBoxName(destinationsArr[37]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[37].name}</h2>
                                                <h3>{destinationsArr[37].location}</h3>
                                                <p>{destinationsArr[37].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[37]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper12}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[40]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[40]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[40].location)
                                            setSelectMapBoxName(destinationsArr[40]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[40].name}</h2>
                                                <h3>{destinationsArr[40].location}</h3>
                                                <p>{destinationsArr[40].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[40]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper13}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[10]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[10]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[10].location)
                                            setSelectMapBoxName(destinationsArr[10]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[10].name}</h2>
                                                <h3>{destinationsArr[10].location}</h3>
                                                <p>{destinationsArr[10].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[10]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper14}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[20]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[20]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[20].location)
                                            setSelectMapBoxName(destinationsArr[20]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[20].name}</h2>
                                                <h3>{destinationsArr[20].location}</h3>
                                                <p>{destinationsArr[20].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[20]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper15}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[41]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[41]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[41].location)
                                            setSelectMapBoxName(destinationsArr[41]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[41].name}</h2>
                                                <h3>{destinationsArr[41].location}</h3>
                                                <p>{destinationsArr[41].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[41]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper16}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[9]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[9]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[9].location)
                                            setSelectMapBoxName(destinationsArr[9]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[9].name}</h2>
                                                <h3>{destinationsArr[9].location}</h3>
                                                <p>{destinationsArr[9].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[9]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper17}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[2]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[2]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[2].location)
                                            setSelectMapBoxName(destinationsArr[2]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[2].name}</h2>
                                                <h3>{destinationsArr[2].location}</h3>
                                                <p>{destinationsArr[2].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[2]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper18}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[46]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[46]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[46].location)
                                            setSelectMapBoxName(destinationsArr[46]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[46].name}</h2>
                                                <h3>{destinationsArr[46].location}</h3>
                                                <p>{destinationsArr[46].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[46]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper19}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[26]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[26]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[26].location)
                                            setSelectMapBoxName(destinationsArr[26]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[26].name}</h2>
                                                <h3>{destinationsArr[26].location}</h3>
                                                <p>{destinationsArr[26].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[26]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper20}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[12]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[12]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[12].location)
                                            setSelectMapBoxName(destinationsArr[12]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[12].name}</h2>
                                                <h3>{destinationsArr[12].location}</h3>
                                                <p>{destinationsArr[12].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[12]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper21}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[13]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[13]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[13].location)
                                            setSelectMapBoxName(destinationsArr[13]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[13].name}</h2>
                                                <h3>{destinationsArr[13].location}</h3>
                                                <p>{destinationsArr[13].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[13]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper22}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[32]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[32]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[32].location)
                                            setSelectMapBoxName(destinationsArr[32]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[32].name}</h2>
                                                <h3>{destinationsArr[32].location}</h3>
                                                <p>{destinationsArr[32].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[32]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper23}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[28]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[28]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[28].location)
                                            setSelectMapBoxName(destinationsArr[28]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[28].name}</h2>
                                                <h3>{destinationsArr[28].location}</h3>
                                                <p>{destinationsArr[28].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[28]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper24}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[15]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[15]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[15].location)
                                            setSelectMapBoxName(destinationsArr[15]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[15].name}</h2>
                                                <h3>{destinationsArr[15].location}</h3>
                                                <p>{destinationsArr[15].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[15]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper25}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[16]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[16]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[16].location)
                                            setSelectMapBoxName(destinationsArr[16]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[16].name}</h2>
                                                <h3>{destinationsArr[16].location}</h3>
                                                <p>{destinationsArr[16].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[16]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper26}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[47]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[47]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[47].location)
                                            setSelectMapBoxName(destinationsArr[47]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[47].name}</h2>
                                                <h3>{destinationsArr[47].location}</h3>
                                                <p>{destinationsArr[47].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[47]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper27}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[31]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[31]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[31].location)
                                            setSelectMapBoxName(destinationsArr[31]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[31].name}</h2>
                                                <h3>{destinationsArr[31].location}</h3>
                                                <p>{destinationsArr[31].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[31]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper28}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[6]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[6]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[6].location)
                                            setSelectMapBoxName(destinationsArr[6]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[6].name}</h2>
                                                <h3>{destinationsArr[6].location}</h3>
                                                <p>{destinationsArr[6].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[6]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper29}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[5]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[5]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[5].location)
                                            setSelectMapBoxName(destinationsArr[5]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[5].name}</h2>
                                                <h3>{destinationsArr[5].location}</h3>
                                                <p>{destinationsArr[5].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[5]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper30}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[33]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[33]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[33].location)
                                            setSelectMapBoxName(destinationsArr[33]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[33].name}</h2>
                                                <h3>{destinationsArr[33].location}</h3>
                                                <p>{destinationsArr[33].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[33]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper31}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[29]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[29]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[29].location)
                                            setSelectMapBoxName(destinationsArr[29]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[29].name}</h2>
                                                <h3>{destinationsArr[29].location}</h3>
                                                <p>{destinationsArr[29].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[29]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper32}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[14]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[14]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[14].location)
                                            setSelectMapBoxName(destinationsArr[14]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[14].name}</h2>
                                                <h3>{destinationsArr[14].location}</h3>
                                                <p>{destinationsArr[14].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[14]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper33}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[8]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[8]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[8].location)
                                            setSelectMapBoxName(destinationsArr[8]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[8].name}</h2>
                                                <h3>{destinationsArr[8].location}</h3>
                                                <p>{destinationsArr[8].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[8]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper34}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[36]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[36]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[36].location)
                                            setSelectMapBoxName(destinationsArr[36]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[36].name}</h2>
                                                <h3>{destinationsArr[36].location}</h3>
                                                <p>{destinationsArr[36].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[36]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper35}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[1]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[1]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[1].location)
                                            setSelectMapBoxName(destinationsArr[1]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[1].name}</h2>
                                                <h3>{destinationsArr[1].location}</h3>
                                                <p>{destinationsArr[1].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[1]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper36}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[34]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[34]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[34].location)
                                            setSelectMapBoxName(destinationsArr[34]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[34].name}</h2>
                                                <h3>{destinationsArr[34].location}</h3>
                                                <p>{destinationsArr[34].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[34]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper37}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[25]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[25]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[25].location)
                                            setSelectMapBoxName(destinationsArr[25]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[25].name}</h2>
                                                <h3>{destinationsArr[25].location}</h3>
                                                <p>{destinationsArr[25].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[25]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper38}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[17]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[17]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[17].location)
                                            setSelectMapBoxName(destinationsArr[17]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[17].name}</h2>
                                                <h3>{destinationsArr[17].location}</h3>
                                                <p>{destinationsArr[17].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[17]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper39}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[3]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[3]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[3].location)
                                            setSelectMapBoxName(destinationsArr[3]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[3].name}</h2>
                                                <h3>{destinationsArr[3].location}</h3>
                                                <p>{destinationsArr[3].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[3]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper40}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[18]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[18]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[18].location)
                                            setSelectMapBoxName(destinationsArr[18]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[18].name}</h2>
                                                <h3>{destinationsArr[18].location}</h3>
                                                <p>{destinationsArr[18].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[18]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper41}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[0]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[0]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[0].location)
                                            setSelectMapBoxName(destinationsArr[0]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[0].name}</h2>
                                                <h3>{destinationsArr[0].location}</h3>
                                                <p>{destinationsArr[0].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[0]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper42}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[39]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[39]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[39].location)
                                            setSelectMapBoxName(destinationsArr[39]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[39].name}</h2>
                                                <h3>{destinationsArr[39].location}</h3>
                                                <p>{destinationsArr[39].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[39]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper43}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[19]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[19]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[19].location)
                                            setSelectMapBoxName(destinationsArr[19]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[19].name}</h2>
                                                <h3>{destinationsArr[19].location}</h3>
                                                <p>{destinationsArr[19].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[19]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper44}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[24]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[24]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[24].location)
                                            setSelectMapBoxName(destinationsArr[24]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[24].name}</h2>
                                                <h3>{destinationsArr[24].location}</h3>
                                                <p>{destinationsArr[24].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[24]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper45}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[21]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[21]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[21].location)
                                            setSelectMapBoxName(destinationsArr[21]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[21].name}</h2>
                                                <h3>{destinationsArr[21].location}</h3>
                                                <p>{destinationsArr[21].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[21]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper46}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[45]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[45]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[45].location)
                                            setSelectMapBoxName(destinationsArr[45]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[45].name}</h2>
                                                <h3>{destinationsArr[45].location}</h3>
                                                <p>{destinationsArr[45].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[45]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper47}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[22]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[22]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[22].location)
                                            setSelectMapBoxName(destinationsArr[22]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[22].name}</h2>
                                                <h3>{destinationsArr[22].location}</h3>
                                                <p>{destinationsArr[22].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[22]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.section06ButtonWrapper} ${styles.section06ButtonWrapper48}`}>
                                        <button className={styles.section06Button} style={{ transform: `${selectMapBoxName == destinationsArr[4]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[4]?.name ? "black" : "#dd4f4d"}` }} onClick={() => {
                                            setSelectLocation(destinationsArr[4].location)
                                            setSelectMapBoxName(destinationsArr[4]?.name)
                                        }}></button>
                                        <div className={`row align-items-stretch ${styles.section06BoxWrapper}`}>
                                            <div className='col-7 text-start'>
                                                <h2>{destinationsArr[4].name}</h2>
                                                <h3>{destinationsArr[4].location}</h3>
                                                <p>{destinationsArr[4].desctiption}</p>
                                            </div>
                                            <div className='col-5'>
                                                <Image src={destinationsArr[4]?.img} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.mobileMapButtonsWrapper} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                                    {
                                        showMobileMap != null && (
                                            <div className={styles.mapBoxPopup}>
                                                <div>
                                                    <button>
                                                        <i className='fa fa-times' onClick={handleCloseMobileMapPopup}></i>
                                                    </button>
                                                    <div className='row align-items-center'>
                                                        <div className="col-7 text-start">
                                                            <h2>{destinationsArr[showMobileMap]?.name}</h2>
                                                            <h4>{destinationsArr[showMobileMap]?.location}</h4>
                                                            <p>{destinationsArr[showMobileMap]?.desctiption}</p>
                                                        </div>
                                                        <div className="col-5">
                                                            <Image src={destinationsArr[showMobileMap]?.img} alt="" className='img-fluid' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    <div className={styles.mobileMapButtons}>
                                        <button className={styles.mobileMapButton01} onClick={() => {
                                            handleOpenMobileMapPopup(0)
                                            setSelectLocation(destinationsArr[0].location)
                                            setSelectMapBoxName(destinationsArr[0]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[0]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[0]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton02} onClick={() => {
                                            handleOpenMobileMapPopup(1)
                                            setSelectLocation(destinationsArr[1].location)
                                            setSelectMapBoxName(destinationsArr[1]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[1]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[1]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton03} onClick={() => {
                                            handleOpenMobileMapPopup(2)
                                            setSelectLocation(destinationsArr[2].location)
                                            setSelectMapBoxName(destinationsArr[2]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[2]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[2]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton04} onClick={() => {
                                            handleOpenMobileMapPopup(3)
                                            setSelectLocation(destinationsArr[3].location)
                                            setSelectMapBoxName(destinationsArr[3]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[3]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[3]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton05} onClick={() => {
                                            handleOpenMobileMapPopup(4)
                                            setSelectLocation(destinationsArr[4].location)
                                            setSelectMapBoxName(destinationsArr[4]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[4]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[4]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton06} onClick={() => {
                                            handleOpenMobileMapPopup(5)
                                            setSelectLocation(destinationsArr[5].location)
                                            setSelectMapBoxName(destinationsArr[5]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[5]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[5]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton07} onClick={() => {
                                            handleOpenMobileMapPopup(6)
                                            setSelectLocation(destinationsArr[6].location)
                                            setSelectMapBoxName(destinationsArr[6]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[6]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[6]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton08} onClick={() => {
                                            handleOpenMobileMapPopup(7)
                                            setSelectLocation(destinationsArr[7].location)
                                            setSelectMapBoxName(destinationsArr[7]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[7]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[7]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton09} onClick={() => {
                                            handleOpenMobileMapPopup(8)
                                            setSelectLocation(destinationsArr[8].location)
                                            setSelectMapBoxName(destinationsArr[8]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[8]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[8]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton10} onClick={() => {
                                            handleOpenMobileMapPopup(9)
                                            setSelectLocation(destinationsArr[9].location)
                                            setSelectMapBoxName(destinationsArr[9]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[9]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[9]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton11} onClick={() => {
                                            handleOpenMobileMapPopup(10)
                                            setSelectLocation(destinationsArr[10].location)
                                            setSelectMapBoxName(destinationsArr[10]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[10]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[10]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton12} onClick={() => {
                                            handleOpenMobileMapPopup(11)
                                            setSelectLocation(destinationsArr[11].location)
                                            setSelectMapBoxName(destinationsArr[11]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[11]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[11]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton13} onClick={() => {
                                            handleOpenMobileMapPopup(12)
                                            setSelectLocation(destinationsArr[12].location)
                                            setSelectMapBoxName(destinationsArr[12]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[12]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[12]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton14} onClick={() => {
                                            handleOpenMobileMapPopup(13)
                                            setSelectLocation(destinationsArr[13].location)
                                            setSelectMapBoxName(destinationsArr[13]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[13]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[13]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton15} onClick={() => {
                                            handleOpenMobileMapPopup(14)
                                            setSelectLocation(destinationsArr[14].location)
                                            setSelectMapBoxName(destinationsArr[14]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[14]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[14]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton16} onClick={() => {
                                            handleOpenMobileMapPopup(15)
                                            setSelectLocation(destinationsArr[15].location)
                                            setSelectMapBoxName(destinationsArr[15]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[15]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[15]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton17} onClick={() => {
                                            handleOpenMobileMapPopup(16)
                                            setSelectLocation(destinationsArr[16].location)
                                            setSelectMapBoxName(destinationsArr[16]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[16]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[16]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton18} onClick={() => {
                                            handleOpenMobileMapPopup(17)
                                            setSelectLocation(destinationsArr[17].location)
                                            setSelectMapBoxName(destinationsArr[17]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[17]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[17]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton19} onClick={() => {
                                            handleOpenMobileMapPopup(18)
                                            setSelectLocation(destinationsArr[18].location)
                                            setSelectMapBoxName(destinationsArr[18]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[18]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[18]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton20} onClick={() => {
                                            handleOpenMobileMapPopup(19)
                                            setSelectLocation(destinationsArr[19].location)
                                            setSelectMapBoxName(destinationsArr[19]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[19]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[19]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton21} onClick={() => {
                                            handleOpenMobileMapPopup(20)
                                            setSelectLocation(destinationsArr[20].location)
                                            setSelectMapBoxName(destinationsArr[20]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[20]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[20]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton22} onClick={() => {
                                            handleOpenMobileMapPopup(21)
                                            setSelectLocation(destinationsArr[21].location)
                                            setSelectMapBoxName(destinationsArr[21]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[21]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[21]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton23} onClick={() => {
                                            handleOpenMobileMapPopup(22)
                                            setSelectLocation(destinationsArr[22].location)
                                            setSelectMapBoxName(destinationsArr[22]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[22]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[22]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton24} onClick={() => {
                                            handleOpenMobileMapPopup(23)
                                            setSelectLocation(destinationsArr[23].location)
                                            setSelectMapBoxName(destinationsArr[23]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[23]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[23]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton25} onClick={() => {
                                            handleOpenMobileMapPopup(24)
                                            setSelectLocation(destinationsArr[24].location)
                                            setSelectMapBoxName(destinationsArr[24]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[24]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[24]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton26} onClick={() => {
                                            handleOpenMobileMapPopup(25)
                                            setSelectLocation(destinationsArr[25].location)
                                            setSelectMapBoxName(destinationsArr[25]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[25]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[25]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton27} onClick={() => {
                                            handleOpenMobileMapPopup(26)
                                            setSelectLocation(destinationsArr[26].location)
                                            setSelectMapBoxName(destinationsArr[26]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[26]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[26]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton28} onClick={() => {
                                            handleOpenMobileMapPopup(27)
                                            setSelectLocation(destinationsArr[27].location)
                                            setSelectMapBoxName(destinationsArr[27]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[27]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[27]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton29} onClick={() => {
                                            handleOpenMobileMapPopup(28)
                                            setSelectLocation(destinationsArr[28].location)
                                            setSelectMapBoxName(destinationsArr[28]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[28]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[28]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton30} onClick={() => {
                                            handleOpenMobileMapPopup(29)
                                            setSelectLocation(destinationsArr[29].location)
                                            setSelectMapBoxName(destinationsArr[29]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[29]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[29]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton31} onClick={() => {
                                            handleOpenMobileMapPopup(30)
                                            setSelectLocation(destinationsArr[30].location)
                                            setSelectMapBoxName(destinationsArr[30]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[30]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[30]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton32} onClick={() => {
                                            handleOpenMobileMapPopup(31)
                                            setSelectLocation(destinationsArr[31].location)
                                            setSelectMapBoxName(destinationsArr[31]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[31]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[31]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton33} onClick={() => {
                                            handleOpenMobileMapPopup(32)
                                            setSelectLocation(destinationsArr[32].location)
                                            setSelectMapBoxName(destinationsArr[32]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[32]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[32]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton34} onClick={() => {
                                            handleOpenMobileMapPopup(33)
                                            setSelectLocation(destinationsArr[33].location)
                                            setSelectMapBoxName(destinationsArr[33]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[33]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[33]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton35} onClick={() => {
                                            handleOpenMobileMapPopup(34)
                                            setSelectLocation(destinationsArr[34].location)
                                            setSelectMapBoxName(destinationsArr[34]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[34]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[34]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton36} onClick={() => {
                                            handleOpenMobileMapPopup(35)
                                            setSelectLocation(destinationsArr[35].location)
                                            setSelectMapBoxName(destinationsArr[35]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[35]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[35]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton37} onClick={() => {
                                            handleOpenMobileMapPopup(36)
                                            setSelectLocation(destinationsArr[36].location)
                                            setSelectMapBoxName(destinationsArr[36]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[36]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[36]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton38} onClick={() => {
                                            handleOpenMobileMapPopup(37)
                                            setSelectLocation(destinationsArr[37].location)
                                            setSelectMapBoxName(destinationsArr[37]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[37]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[37]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton39} onClick={() => {
                                            handleOpenMobileMapPopup(38)
                                            setSelectLocation(destinationsArr[38].location)
                                            setSelectMapBoxName(destinationsArr[38]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[38]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[38]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton40} onClick={() => {
                                            handleOpenMobileMapPopup(39)
                                            setSelectLocation(destinationsArr[39].location)
                                            setSelectMapBoxName(destinationsArr[39]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[39]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[39]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton41} onClick={() => {
                                            handleOpenMobileMapPopup(40)
                                            setSelectLocation(destinationsArr[40].location)
                                            setSelectMapBoxName(destinationsArr[40]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[40]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[40]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton42} onClick={() => {
                                            handleOpenMobileMapPopup(41)
                                            setSelectLocation(destinationsArr[41].location)
                                            setSelectMapBoxName(destinationsArr[41]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[41]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[41]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton43} onClick={() => {
                                            handleOpenMobileMapPopup(42)
                                            setSelectLocation(destinationsArr[42].location)
                                            setSelectMapBoxName(destinationsArr[42]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[42]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[42]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton44} onClick={() => {
                                            handleOpenMobileMapPopup(43)
                                            setSelectLocation(destinationsArr[43].location)
                                            setSelectMapBoxName(destinationsArr[43]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[43]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[43]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton45} onClick={() => {
                                            handleOpenMobileMapPopup(44)
                                            setSelectLocation(destinationsArr[44].location)
                                            setSelectMapBoxName(destinationsArr[44]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[44]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[44]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton46} onClick={() => {
                                            handleOpenMobileMapPopup(45)
                                            setSelectLocation(destinationsArr[45].location)
                                            setSelectMapBoxName(destinationsArr[45]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[45]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[45]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton47} onClick={() => {
                                            handleOpenMobileMapPopup(46)
                                            setSelectLocation(destinationsArr[46].location)
                                            setSelectMapBoxName(destinationsArr[46]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[46]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[46]?.name ? "black" : "#dd4f4d"}` }}></button>
                                        <button className={styles.mobileMapButton48} onClick={() => {
                                            handleOpenMobileMapPopup(47)
                                            setSelectLocation(destinationsArr[47].location)
                                            setSelectMapBoxName(destinationsArr[47]?.name)
                                        }} style={{ transform: `${selectMapBoxName == destinationsArr[47]?.name ? "scale(1.3)" : ""}`, background: `${selectMapBoxName == destinationsArr[47]?.name ? "black" : "#dd4f4d"}` }}></button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Link className="my-btn" href="#" style={{ maxWidth: "fit-content", opacity: `${selectMapBoxName == null ? "0.5" : "1"}`, pointerEvents: `${selectMapBoxName == null ? "none" : "auto"}` }} >Reserve car for selected destination</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={styles.section07}>
                    <div className="container">
                        <div className="wrapper">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={false}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: true,
                                }}
                                navigation={false}
                                modules={[Autoplay, Navigation]}
                                slidesPerView={4}
                                breakpoints={{
                                    549: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 50,
                                    },
                                }}
                            >
                                <SwiperSlide><Image src={Section07Img01} alt="Air Bnb" className='img-fluid' /></SwiperSlide>
                                <SwiperSlide><Image src={Section07Img02} alt="Air Bnb" className='img-fluid' /></SwiperSlide>
                                <SwiperSlide><Image src={Section07Img03} alt="Air Bnb" className='img-fluid' /></SwiperSlide>
                                <SwiperSlide><Image src={Section07Img04} alt="Air Bnb" className='img-fluid' /></SwiperSlide>
                                <SwiperSlide><Image src={Section07Img01} alt="Air Bnb" className='img-fluid' /></SwiperSlide>
                                <SwiperSlide><Image src={Section07Img02} alt="Air Bnb" className='img-fluid' /></SwiperSlide>
                                <SwiperSlide><Image src={Section07Img03} alt="Air Bnb" className='img-fluid' /></SwiperSlide>
                                <SwiperSlide><Image src={Section07Img04} alt="Air Bnb" className='img-fluid' /></SwiperSlide>
                            </Swiper>
                            {/* <div className="row row-cols-md-4 row-cols-1 align-items-center">
                <div className="col text-center mb-5 mb-lg-0">
                  <Image src={Section07Img01} alt="Air Bnb" className='img-fluid' />
                </div>
                <div className="col text-center">
                  <Image src={Section07Img02} alt="Air Bnb" className='img-fluid' />
                </div>
                <div className="col text-center">
                  <Image src={Section07Img03} alt="Air Bnb" className='img-fluid' />
                </div>
                <div className="col text-center">
                  <Image src={Section07Img04} alt="Air Bnb" className='img-fluid' />
                </div>
              </div> */}
                        </div>
                    </div>
                </section>
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
                                        <Link href="MaskSocialSafety" className='d-block' style={{ paddingBottom: "15px" }}>Learn more about mask and social safety</Link>
                                    </div>
                                </div>
                                <div className="col p-3">
                                    <div className="text-center d-flex flex-column align-items-center justify-content-between">
                                        <Image src={Section08Img03} alt="Car in hand" />
                                        <h3>COVID-19 Vaccine</h3>
                                        <p>Let’s crunch the virus! Our commitment to vaccination moves us closer to full recovery in our various communities.</p>
                                        <Link href="VaccinationProgram">Learn more about vaccination program</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    )
} 
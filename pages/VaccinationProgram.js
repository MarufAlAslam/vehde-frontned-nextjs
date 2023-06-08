import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import MainLayout from '../components/layout/MainLayout'
import styles from "../styles/VaccinationProgram.module.css"

import RightArrow from "../assets/img/home-page/section-03-arrow-icon.png"
import Section02Img01 from "../assets/img/vaccination-program-page/section-02-img-01.png"
import Section02Img02 from "../assets/img/vaccination-program-page/section-02-img-02.png"
import Section03MapImg from "../assets/img/home-page/section-06-img.png"
import Image from 'next/image'
import Link from 'next/link'

const VaccinationProgram = () => {

    const [selectLocation, setSelectLocation] = useState("California")
    const [selectMapBoxName, setSelectMapBoxName] = useState("Yosemite National Park")
    const [maskLink, setMaskLink] = useState(null)

    const destinationsArr = [
        {
            _id: 1,
            name: "Big Bend National Park",
            location: "Texas",
            desctiption: "Big Bend National Park includes the entire Chisos mountain range and a large swath of the Chihuahuan Desert. The Ross Maxwell Scenic Drive leads to the ruins of Sam Nail Ranch.",
            img: require("../assets/img/home-page/map-img/texas.jpeg"),
            link: ""
        },
        {
            _id: 2,
            name: "Grand Canyon National Park",
            location: "Arizona",
            desctiption: "The Grand Canyon fills me with awe. It is beyond comparison—beyond description; absolutely unparalleled through-out the wide world.",
            quotation: "- President Theodore Roosevelt",
            img: require("../assets/img/home-page/map-img/arizona.jpeg"),
            link: ""
        },
        {
            _id: 3,
            name: "Mount Rushmore",
            location: "South Dakota",
            desctiption: "Majestic figures of George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln, surrounded by the beauty of the Black Hills of South Dakota.",
            img: require("../assets/img/home-page/map-img/south-dakota.jpeg"),
            link: ""
        },
        {
            _id: 4,
            name: "Whitewater Falls",
            location: "North Carolina and South Carolina",
            desctiption: "Experience the uniqueness of a series of waterfalls and cascades on the Whitewater River in North Carolina and South Carolina. Over the 3.5 mi course of the river between the two falls.",
            img: require("../assets/img/home-page/map-img/north-and-south-carolina.jpeg"),
            link: ""
        },
        {
            _id: 5,
            name: "Kennedy Space Center",
            location: "Florida",
            desctiption: "Cape Canaveral, located on the coast of Florida, boasts a lot of space-related attractions. One of the best is the Kennedy Space Center, which has been the launch site for every US human space flight.",
            img: require("../assets/img/home-page/map-img/florida.jpeg"),
            link: ""
        },
        {
            _id: 6,
            name: "Bryce Canyon National Park",
            location: "Utah",
            desctiption: "Located in Southern Utah, Bryce Canyon National Park is a breathtaking display of rock formations. Technically, Bryce Canyon isn’t a canyon, but a series of natural amphitheaters.",
            img: require("../assets/img/home-page/map-img/utah.jpeg"),
            link: ""
        },
        {
            _id: 7,
            name: "Yosemite National Park",
            location: "California",
            desctiption: "In the Sierra Nevada Mountains of California, there is Yosemite National Park. This extraordinary destination is known the world over for its amazing scenery. Within this single park, visitors can peer off spectacular granite cliffs.",
            img: require("../assets/img/home-page/map-img/california.jpeg"),
            link: "https://www.cdph.ca.gov/Programs/OPA/Pages/Communications-Toolkits/Mask-Up.aspx"
        },
        {
            _id: 8,
            name: "Denali National Park",
            location: "Alaska",
            desctiption: "The Denali National Park and Preserve is in Interior Alaska and contains Mount McKinley, the highest mountain in North America. The word “Denali” means “the high one” in the native Athabaskan language.",
            img: require("../assets/img/home-page/map-img/alaska.jpeg"),
            link: ""
        },
        {
            _id: 9,
            name: "Kilauea",
            location: "Hawaii",
            desctiption: "Kilauea is the most recent of a series of volcanoes that have created the Hawaiian Archipelago. It is a very low, flat shield volcano, vastly different in profile from the high, sharply sloping peaks of stratovolcanoes. ",
            img: require("../assets/img/home-page/map-img/hawaii.jpeg"),
            link: ""
        },
        {
            _id: 10,
            name: "Yellowstone",
            location: "Wyoming",
            desctiption: "Yellowstone National Park was the world’s first national park, set aside in 1872 to preserve the vast number of geysers, hot springs, and other thermal areas, as well as to protect the incredible wildlife and rugged beauty of the area.",
            img: require("../assets/img/home-page/map-img/wyoming.jpeg"),
            link: ""
        },
        {
            _id: 11,
            name: "Acadia",
            location: "Maine",
            desctiption: "Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats, and a rich cultural heritage. ",
            img: require("../assets/img/home-page/map-img/maine.jpeg"),
            link: ""
        },
        {
            _id: 12,
            name: "Voyageurs National Park",
            location: "Minnesota",
            desctiption: "With 218,055 acres, Voyageurs National Park is an adventure wonderland all year long full of exposed rock ridges, cliffs, wetlands, forests, streams and lakes. ",
            img: require("../assets/img/home-page/map-img/minnesota.jpeg"),
            link: ""
        },
        {
            _id: 13,
            name: "Arches National Park",
            location: "Utah",
            desctiption: "Discover a landscape of contrasting colors, land forms, and textures unlike any other. The park has over 2,000 natural stone arches, hundreds of soaring pinnacles, massive rock fins, and giant balanced rocks.",
            img: require("../assets/img/home-page/map-img/utah-2.jpeg"),
            link: ""
        },
        {
            _id: 14,
            name: "Mesa Verde National Park",
            location: "Colorado",
            desctiption: "For over 700 years, the Ancestral Pueblo people built thriving communities on the mesas and in the cliffs of Mesa Verde. Today, the park protects the rich cultural heritage of 26 Pueblos and Tribes.",
            img: require("../assets/img/home-page/map-img/colorado.jpeg"),
            link: ""
        },
        {
            _id: 15,
            name: "Shenandoah National Park",
            location: "Virginia",
            desctiption: "Just 75 miles from the bustle of Washington, D.C., Shenandoah National Park is a land bursting with cascading waterfalls, spectacular vistas, fields of wildflowers, and quiet wooded hollows.",
            img: require("../assets/img/home-page/map-img/virginia.jpeg"),
            link: ""
        },
        {
            _id: 16,
            name: "Olympic National Park",
            location: "Washington",
            desctiption: "With its incredible range of precipitation and elevation, diversity is the hallmark of Olympic National Park. Encompassing nearly a million acres, the park protects a vast wilderness, thousands of years of human history, and several distinctly different ecosystems.",
            img: require("../assets/img/home-page/map-img/washington.jpeg"),
            link: ""
        },
        {
            _id: 17,
            name: "Navy Pier in Chicago",
            location: "Illinois",
            desctiption: "Extending over the waters of Lake Michigan is Navy Pier, an enormous pier in the heart of Chicago’s coastal Streeterville neighborhood. Within the pier, there are countless attractions suited to the whole family.",
            img: require("../assets/img/home-page/map-img/Illinois.jpeg"),
            link: ""
        },
        {
            _id: 18,
            name: "Great Smoky Mountains",
            location: "Tennessee and North Carolina",
            desctiption: "The park is the most visited in the entire country, thanks in large part to its enormous size and its incredible scenery. Visitors can hike through old growth forest, spot hundreds of species of birds and check out the two visitor centers.",
            img: require("../assets/img/home-page/map-img/tennessee-and-north-carolina.jpeg"),
            link: ""
        },
        {
            _id: 19,
            name: "Carlsbad Caverns",
            location: "New Mexico",
            desctiption: "As the name suggests, Carlsbad Caverns is a collection of over 115 caves. Located in southern New Mexico, these caverns are carved from limestone, and it is possible for visitors to descend more than 900 feet (275 meters) below the surface.",
            img: require("../assets/img/home-page/map-img/new-mexico.jpeg"),
            link: ""
        },
        {
            _id: 20,
            name: "French Quarter in New Orleans",
            location: "Louisiana",
            desctiption: "New Orleans, Louisiana, is made up of several unique districts, but none is so famous as the French Quarter. Also known as the Vieux Carre, the French Quarter truly explores the rich French influences.",
            img: require("../assets/img/home-page/map-img/louisiana.jpeg"),
            link: ""
        },
        {
            _id: 21,
            name: "Las Vegas Strip",
            location: "Nevada",
            desctiption: "The gambling mecca of the world, Las Vegas is situated amid the southern Nevada desert landscape. Casinos can be found throughout Las Vegas, but the strip, a stretch of Las Vegas Boulevard South, contains the most of them.",
            img: require("../assets/img/home-page/map-img/nevada.jpeg"),
            link: ""
        },
        {
            _id: 22,
            name: "White House and the National Mall",
            location: "Washington D.C.",
            desctiption: "The White House in Washington DC is the official residence and office of the President of the United States. It was built between 1792 and 1800 and first used by President John Adams.",
            img: require("../assets/img/home-page/map-img/washington-3.jpeg"),
            link: ""
        },
        {
            _id: 23,
            name: "Walt Disney World",
            location: "Florida",
            desctiption: "Orlando, Florida, is a hub of amusement parks, but none is so popular as Walt Disney World. Many travelers don’t realize that Walt Disney World is made up of several distinct theme parks, including the Magic Kingdom and Water Park.",
            img: require("../assets/img/home-page/map-img/florida-2.jpeg"),
            link: ""
        },
        {
            _id: 24,
            name: "Glacier National Park",
            location: "Montana",
            desctiption: "A showcase of melting glaciers, alpine meadows, carved valleys, and spectacular lakes. With over 700 miles of trails, Glacier is a paradise for adventurous visitors seeking wilderness steeped in human history.",
            img: require("../assets/img/home-page/map-img/montana.jpeg"),
            link: ""
        },
        {
            _id: 25,
            name: "U.S. Space & Rocket Center",
            location: "Alabama",
            desctiption: "Get a lesson in American space travel at Alabama's U.S. Space & Rocket Center in Huntsville. A Smithsonian affiliate, the center has one of the world's largest collections of rockets and space memorabilia, as well as Space Camp.",
            img: require("../assets/img/home-page/map-img/alabama.jpeg"),
            link: ""
        },
        {
            _id: 26,
            name: "Hot Springs National Park",
            location: "Arkansas",
            desctiption: "The nation's oldest national park, even older than Yellowstone, Hot Springs National Park preserves 47 thermal springs with 4,000-year-old water flowing from Hot Springs Mountain.",
            img: require("../assets/img/home-page/map-img/arkansas.jpeg"),
            link: ""
        },
        {
            _id: 27,
            name: "Mystic Aquarium",
            location: "Connecticut",
            desctiption: "All ages can enjoy Mystic, a charming seaport village considered one of the top things to do in Connecticut. This quintessential destination offers a range of tourist attractions, including the Mystic Aquarium",
            img: require("../assets/img/home-page/map-img/connecticut.jpeg"),
            link: ""
        },
        {
            _id: 28,
            name: "Golden Gate Bridge",
            location: "California",
            desctiption: "The Golden Gate Bridge, which has connected San Francisco to Marin County since 1937, is one of the country's most recognized landmarks. It took four years to build this nearly 2-mile-long bridge.",
            img: require("../assets/img/home-page/map-img/california-2.jpeg"),
            link: "https://www.cdph.ca.gov/Programs/OPA/Pages/Communications-Toolkits/Mask-Up.aspx"
        },
        {
            _id: 29,
            name: "Sea Shipwreck Museum",
            location: "Delaware",
            desctiption: "Dreaming of lost treasure and the vast riches from countless shipwrecks that may lie below the sea? Explore your fantasies at the DiscoverSea Shipwreck Museum in Delaware, which offers an impressive collection of recovered shipwreck artifacts.",
            img: require("../assets/img/home-page/map-img/delaware.jpeg"),
            link: ""
        },
        {
            _id: 30,
            name: "World of Coca-Cola",
            location: "Georgia",
            desctiption: "Located across from Centennial Olympic Park in Atlanta, this museum pays tribute to one of the world's favorite soft drinks. At this tourist attraction, you can sample more than 100 types of soda from around the world.",
            img: require("../assets/img/home-page/map-img/georgia.jpeg"),
            link: ""
        },
        {
            _id: 31,
            name: "Kirkham Hot Springs",
            location: "Idaho",
            desctiption: "A popular activity in the state of Idaho is to visit one of its many hot springs. Visitors can soak in these geothermal pools, and one of the best known is Kirkham Hot Springs, just north of Lowman.",
            img: require("../assets/img/home-page/map-img/idaho.jpeg"),
            link: ""
        },
        {
            _id: 32,
            name: "Indianapolis Motor Speedway",
            location: "Indiana",
            desctiption: "Lay your eyes on the world-famous Indianapolis Motor Speedway track, home of the Indianapolis 500 auto race and designated a National Historic Landmark.",
            img: require("../assets/img/home-page/map-img/indiana.jpeg"),
            link: ""
        },
        {
            _id: 33,
            name: "Kentucky Horse Park",
            location: "Kentucky",
            desctiption: "In the thoroughbred country of Kentucky, visit the 1,200-acre Kentucky Horse Park, a perfect stop for horse lovers. Here in Lexington, known to many as the Horse Capital of the World, you'll learn all about the history of our relationship with horses.",
            img: require("../assets/img/home-page/map-img/kentucky.jpeg"),
            link: ""
        },
        {
            _id: 34,
            name: "National Aquarium",
            location: "Maryland",
            desctiption: `Tucked into the Inner Harbor of Baltimore is the National Aquarium, home to award-winning exhibits and more than 20,000 aquatic animals. Immerse yourself in the interactive "Living Seashore" exhibit.`,
            img: require("../assets/img/home-page/map-img/maryland.jpeg"),
            link: ""
        },
        {
            _id: 35,
            name: "Freedom Trail",
            location: "Massachusetts",
            desctiption: "See many of Boston's most historic sites along its 2.5-mile Freedom Trail. This attraction features 16 museums, churches, historical markers and even a ship that tell the story of our country from the American Revolution forward.",
            img: require("../assets/img/home-page/map-img/massachusetts.jpeg"),
            link: ""
        },
        {
            _id: 36,
            name: "Mackinac Island",
            location: "Michigan",
            desctiption: "Slip back into days gone by with a trip to quaint and historic Mackinac Island in Michigan. On this island, you'll find no cars or chain hotels – only charming inns, bed and breakfasts, and historic hotels.",
            img: require("../assets/img/home-page/map-img/michigan.jpeg"),
            link: ""
        },
        {
            _id: 37,
            name: "Gateway Arch",
            location: "Missouri",
            desctiption: "Measuring 630 feet high and 630 feet wide, the stainless-steel structure is the tallest man-made monument in the U.S. It stands as a symbol of America's westward expansion.",
            img: require("../assets/img/home-page/map-img/missouria.jpeg"),
            link: ""
        },
        {
            _id: 38,
            name: "Chimney Rock National Historic Site",
            location: "Nebraska",
            desctiption: "One of the most famous sites along the American West's Oregon Trail, Chimney Rock stands at more than 4,000 feet tall and once indicated to 1800s travelers headed west.",
            img: require("../assets/img/home-page/map-img/nebraska.jpeg"),
            link: ""
        },
        {
            _id: 39,
            name: "Mount Washington Cog Railway",
            location: "New Hampshire",
            desctiption: "The first mountain-climbing cog railway in the world, which also happens to be the second steepest. In this unusual form of transportation, you'll make your way through three climate zones in less than an hour.",
            img: require("../assets/img/home-page/map-img/new-hampshire.jpeg"),
            link: ""
        },
        {
            _id: 40,
            name: "Statue of Liberty",
            location: "New York",
            desctiption: "It's hard to imagine a better symbol of America than the Statue of Liberty, gifted by France to celebrate 100 years of the U.S. Declaration of Independence.",
            img: require("../assets/img/home-page/map-img/new-york.jpeg"),
            link: ""
        },
        {
            _id: 41,
            name: "Wright Brothers National Memorial",
            location: "North Carolina",
            desctiption: "Learn more about the origins of flight at this memorial to Wilbur and Orville Wright, who famously achieved flight here in 1903. Here can see a full-scale replica of the Wright Flyer and camp buildings.",
            img: require("../assets/img/home-page/map-img/north-carolina.jpeg"),
            link: ""
        },
        {
            _id: 42,
            name: "Theodore Roosevelt National Park",
            location: "North Dakota",
            desctiption: "Discover the vast wilderness that once enchanted President Theodore Roosevelt. In the Badlands area of North Dakota, this national park beckons you with wild horses and bison, scenic drives, and hiking trails.",
            img: require("../assets/img/home-page/map-img/north-dakota.jpeg"),
            link: ""
        },
        {
            _id: 43,
            name: "First Americans Museum",
            location: "Oklahoma",
            desctiption: "Showcasing the collective histories of 39 First American Nations, this museum celebrates the cultural traditions, histories, diversities, and contributions of the First Americans.",
            img: require("../assets/img/home-page/map-img/oklahoma.jpeg"),
            link: ""
        },
        {
            _id: 44,
            name: "Mount Hood",
            location: "Oregon",
            desctiption: "An iconic sight on Portland's skyline and Oregon's tallest mountain, the larger-than-life Mount Hood is the region's prime skiing area even in summer; it's also home to forests, waterfalls, the Clackamas River.",
            img: require("../assets/img/home-page/map-img/oregon.jpeg"),
            link: ""
        },
        {
            _id: 45,
            name: "Liberty Bell",
            location: "Pennsylvania",
            desctiption: `Located just north of Independence Hall inside the Liberty Bell Center, the Liberty Bell is a universal symbol of American democracy and freedom. The visitors can view this Philadelphia relic's world-renowned inscription: "Proclaim LIBERTY.`,
            img: require("../assets/img/home-page/map-img/pennsylvania.jpeg"),
            link: ""
        },
        {
            _id: 46,
            name: "Fort Sumter National Monument",
            location: "South Carolina",
            desctiption: "See where the first shots of the Civil War were fired on April 12, 1861, at Fort Sumter National Monument in historic Charleston. The fort was occupied by the Confederate States Army for nearly four years.",
            img: require("../assets/img/home-page/map-img/south-carolina.jpeg"),
            link: ""
        },
        {
            _id: 47,
            name: "Country Music Hall of Fame and Museum",
            location: "Tennessee",
            desctiption: "Country music fans will want to head to the Country Music Hall of Fame and Museum in Nashville to explore this genre of music and its historical roots. Inside you'll find more than 2.5 million artifacts.",
            img: require("../assets/img/home-page/map-img/tennessee.jpeg"),
            link: ""
        },
        {
            _id: 48,
            name: "Space Needle",
            location: "Washington",
            desctiption: "When you think of Seattle, chances are the Space Needle immediately springs to mind. Designed for the space-themed 1962 World's Fair, the futuristic structure was renovated in 2018 to include the Skyrisers.",
            img: require("../assets/img/home-page/map-img/washington-4.jpeg"),
            link: ""
        },
    ]

    useEffect(() => {
        setMaskLink(destinationsArr.find(destination => destination.name == selectMapBoxName)?.link)
    }, [selectLocation])

    return (
        <>
            <Head>
                <title>VEHDE - U.S COVID-19 vaccination program</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <section id={styles.heroSection} className="heroSection">
                    <div className="container">
                        <div className="wrapper">
                            <div className="row align-items-center">
                                <div className="col-lg-5 mb-lg-0 mb-5">
                                    <h1>U.S. COVID-19 vaccination program</h1>
                                    <p>The Centers for Disease Control and Prevention (CDC) is the national public health agency of the United States. The agency's main goal is the protection of public health and safety through the control and prevention of disease, injury, and disability in the US and worldwide.
                                    </p>
                                </div>
                                <div className="col-lg-7 text-center">
                                    {/* <Image src={HeroSectionImg} alt="Patent Vaccination Program Image" className='img-fluid' /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={styles.section02}>
                    <div className="container">
                        <div className="wrapper">
                            <h2 className="text-center">Key things to know about COVID-19 vaccines </h2>
                            <p>
                                People who are fully vaccinated can resume many activities they did before the pandemic. However, people should wear a mask indoors in public if they are in an area of substantial or high transmission.
                            </p>
                            <div className='d-flex justify-content-center gap-3 align-items-center'>
                                <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/faq.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fvaccines%2Fkeythingstoknow.html">Learn more about COVID-19 vaccines</a> <Image src={RightArrow} alt="Right Arrow" />
                            </div>
                            <div className="row row-cols-lg-2 row-cols-1 mt-5 align-items-center">
                                <div className="col text-lg-start text-center">
                                    <Image src={Section02Img01} className='img-fluid' />
                                </div>
                                <div className="col">
                                    <div className="mb-4">
                                        <h3>Frequently asked questions about COVID-19 vaccination</h3>
                                        <p>How can I get a new COVID-19 vaccination card? If you need a new vaccination card, contact the vaccination provider site where you received your vaccine. Your provider should give you a new card with up-to-date information about the vaccinations you have received.</p>
                                        <div className="d-flex align-items-center">
                                            <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/faq.html" className='me-3'>Find answers to other questions about COVID-19 vaccinations</a> <Image src={RightArrow} alt="Right Arrow" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row row-cols-lg-2 row-cols-1 align-items-center">
                                <div className="col order-lg-1 order-2">
                                    <div className='mb-4'>
                                        <h3>U.S. COVID-19 vaccine product information</h3>
                                        <p>Find a suite of information and materials that are needed for each specific COVID-19 vaccine that cover administration, storage and handling, safety, and reporting.</p>
                                        <div className="d-flex align-items-center">
                                            <a href="https://www.cdc.gov/vaccines/covid-19/info-by-product/index.html" className='me-3'>Learn more about U.S. COVID-19 vaccine product information</a> <Image src={RightArrow} alt="Right Arrow" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3>COVID-19 vaccine booster shots</h3>
                                        <p>You may choose which COVID-19 vaccine you receive as a booster shot. Some people may prefer the vaccine type that they originally received, and others may prefer to get a different booster. CDC’s recommendations now allow for this type of mix and match dosing for booster shots.</p>
                                        <div className="d-flex align-items-center">
                                            <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/stay-up-to-date.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fvaccines%2Fbooster-shot.html" className='me-3'>Learn more about COVID-19 booster shot</a> <Image src={RightArrow} alt="Right Arrow" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col text-lg-end text-center order-lg-2 order-1">
                                    <Image src={Section02Img02} className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={styles.section03}>
                    <div className="container">
                        <div className="wrapper">
                            <div className="text-center">
                                <h2>Please select from below for specific information regarding vaccination program in each state</h2>
                                <div className="d-flex justify-content-center align-items-center gap-3">
                                    <Link href={maskLink ? maskLink : "#"} >Learn about COVID-19 vaccination in {selectLocation}</Link><Image src={RightArrow} alt='Right Arrow' />
                                </div>
                                <h3> <span>State of</span> {selectLocation}</h3>
                            </div>
                            <div className='text-center position-relative'>
                                <Image src={Section03MapImg} alt="Map Img" className='img-fluid' style={{ width: "100%", maxWidth: "900px" }} />
                                <div className={styles.mapButtons}>
                                    <button className={styles.dot01} onClick={() => {
                                        setSelectLocation(destinationsArr[0]?.location)
                                        setSelectMapBoxName(destinationsArr[0]?.name)
                                    }}>
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[0]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[0]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot02} onClick={() => {
                                        setSelectLocation(destinationsArr[1]?.location)
                                        setSelectMapBoxName(destinationsArr[1]?.name)
                                    }}>
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[1]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[1]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot03} onClick={() => {
                                        setSelectLocation(destinationsArr[2]?.location)
                                        setSelectMapBoxName(destinationsArr[2]?.name)
                                    }}>
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[2]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[2]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot04} onClick={() => {
                                        setSelectLocation(destinationsArr[3]?.location)
                                        setSelectMapBoxName(destinationsArr[3]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[3]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[3]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot05} onClick={() => {
                                        setSelectLocation(destinationsArr[4]?.location)
                                        setSelectMapBoxName(destinationsArr[4]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[4]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[4]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot06} onClick={() => {
                                        setSelectLocation(destinationsArr[5]?.location)
                                        setSelectMapBoxName(destinationsArr[5]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[5]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[5]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot07} onClick={() => {
                                        setSelectLocation(destinationsArr[6]?.location)
                                        setSelectMapBoxName(destinationsArr[6]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[6]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[6]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot08} onClick={() => {
                                        setSelectLocation(destinationsArr[7]?.location)
                                        setSelectMapBoxName(destinationsArr[7]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[7]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[7]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot09} onClick={() => {
                                        setSelectLocation(destinationsArr[8]?.location)
                                        setSelectMapBoxName(destinationsArr[8]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[8]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[8]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot10} onClick={() => {
                                        setSelectLocation(destinationsArr[9]?.location)
                                        setSelectMapBoxName(destinationsArr[9]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[9]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[9]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot11} onClick={() => {
                                        setSelectLocation(destinationsArr[10]?.location)
                                        setSelectMapBoxName(destinationsArr[10]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[10]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[10]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot12} onClick={() => {
                                        setSelectLocation(destinationsArr[11]?.location)
                                        setSelectMapBoxName(destinationsArr[11]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[11]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[11]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot13} onClick={() => {
                                        setSelectLocation(destinationsArr[12]?.location)
                                        setSelectMapBoxName(destinationsArr[12]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[12]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[12]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot14} onClick={() => {
                                        setSelectLocation(destinationsArr[13]?.location)
                                        setSelectMapBoxName(destinationsArr[13]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[13]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[13]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot15} onClick={() => {
                                        setSelectLocation(destinationsArr[14]?.location)
                                        setSelectMapBoxName(destinationsArr[14]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[14]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[14]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot16} onClick={() => {
                                        setSelectLocation(destinationsArr[15]?.location)
                                        setSelectMapBoxName(destinationsArr[15]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[15]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[15]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot17} onClick={() => {
                                        setSelectLocation(destinationsArr[16]?.location)
                                        setSelectMapBoxName(destinationsArr[16]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[16]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[16]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot18} onClick={() => {
                                        setSelectLocation(destinationsArr[17]?.location)
                                        setSelectMapBoxName(destinationsArr[17]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[17]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[17]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot19} onClick={() => {
                                        setSelectLocation(destinationsArr[18]?.location)
                                        setSelectMapBoxName(destinationsArr[18]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[18]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[18]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot20} onClick={() => {
                                        setSelectLocation(destinationsArr[19]?.location)
                                        setSelectMapBoxName(destinationsArr[19]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[19]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[19]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot21} onClick={() => {
                                        setSelectLocation(destinationsArr[20]?.location)
                                        setSelectMapBoxName(destinationsArr[20]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[20]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[20]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot22} onClick={() => {
                                        setSelectLocation(destinationsArr[21]?.location)
                                        setSelectMapBoxName(destinationsArr[21]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[21]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[21]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot23} onClick={() => {
                                        setSelectLocation(destinationsArr[22]?.location)
                                        setSelectMapBoxName(destinationsArr[22]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[22]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[22]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot24} onClick={() => {
                                        setSelectLocation(destinationsArr[23]?.location)
                                        setSelectMapBoxName(destinationsArr[23]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[23]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[23]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot25} onClick={() => {
                                        setSelectLocation(destinationsArr[24]?.location)
                                        setSelectMapBoxName(destinationsArr[24]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[24]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[24]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot26} onClick={() => {
                                        setSelectLocation(destinationsArr[25]?.location)
                                        setSelectMapBoxName(destinationsArr[25]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[25]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[25]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot27} onClick={() => {
                                        setSelectLocation(destinationsArr[26]?.location)
                                        setSelectMapBoxName(destinationsArr[26]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[26]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[26]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot28} onClick={() => {
                                        setSelectLocation(destinationsArr[27]?.location)
                                        setSelectMapBoxName(destinationsArr[27]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[27]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[27]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot29} onClick={() => {
                                        setSelectLocation(destinationsArr[28]?.location)
                                        setSelectMapBoxName(destinationsArr[28]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[28]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[28]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot30} onClick={() => {
                                        setSelectLocation(destinationsArr[29]?.location)
                                        setSelectMapBoxName(destinationsArr[29]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[29]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[29]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot31} onClick={() => {
                                        setSelectLocation(destinationsArr[30]?.location)
                                        setSelectMapBoxName(destinationsArr[30]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[30]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[30]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot32} onClick={() => {
                                        setSelectLocation(destinationsArr[31]?.location)
                                        setSelectMapBoxName(destinationsArr[31]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[31]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[31]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot33} onClick={() => {
                                        setSelectLocation(destinationsArr[32]?.location)
                                        setSelectMapBoxName(destinationsArr[32]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[32]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[32]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot34} onClick={() => {
                                        setSelectLocation(destinationsArr[33]?.location)
                                        setSelectMapBoxName(destinationsArr[33]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[33]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[33]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot35} onClick={() => {
                                        setSelectLocation(destinationsArr[34]?.location)
                                        setSelectMapBoxName(destinationsArr[34]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[34]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[34]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot36} onClick={() => {
                                        setSelectLocation(destinationsArr[35]?.location)
                                        setSelectMapBoxName(destinationsArr[35]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[35]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[35]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot37} onClick={() => {
                                        setSelectLocation(destinationsArr[36]?.location)
                                        setSelectMapBoxName(destinationsArr[36]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[36]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[36]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot38} onClick={() => {
                                        setSelectLocation(destinationsArr[37]?.location)
                                        setSelectMapBoxName(destinationsArr[37]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[37]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[37]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot39} onClick={() => {
                                        setSelectLocation(destinationsArr[38]?.location)
                                        setSelectMapBoxName(destinationsArr[38]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[38]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[38]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot40} onClick={() => {
                                        setSelectLocation(destinationsArr[39]?.location)
                                        setSelectMapBoxName(destinationsArr[39]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[39]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[39]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot41} onClick={() => {
                                        setSelectLocation(destinationsArr[40]?.location)
                                        setSelectMapBoxName(destinationsArr[40]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[40]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[40]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot42} onClick={() => {
                                        setSelectLocation(destinationsArr[41]?.location)
                                        setSelectMapBoxName(destinationsArr[41]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[41]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[41]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot43} onClick={() => {
                                        setSelectLocation(destinationsArr[42]?.location)
                                        setSelectMapBoxName(destinationsArr[42]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[42]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[42]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot44} onClick={() => {
                                        setSelectLocation(destinationsArr[43]?.location)
                                        setSelectMapBoxName(destinationsArr[43]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[43]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[43]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot45} onClick={() => {
                                        setSelectLocation(destinationsArr[44]?.location)
                                        setSelectMapBoxName(destinationsArr[44]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[44]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[44]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot46} onClick={() => {
                                        setSelectLocation(destinationsArr[45]?.location)
                                        setSelectMapBoxName(destinationsArr[45]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[45]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[45]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot47} onClick={() => {
                                        setSelectLocation(destinationsArr[46]?.location)
                                        setSelectMapBoxName(destinationsArr[46]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[46]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[46]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                    <button className={styles.dot48} onClick={() => {
                                        setSelectLocation(destinationsArr[47]?.location)
                                        setSelectMapBoxName(destinationsArr[47]?.name)
                                    }} >
                                        <i class="fa fa-location-dot" style={{ transform: `${selectMapBoxName == destinationsArr[47]?.name ? "scale(1.3)" : ""}`, color: `${selectMapBoxName == destinationsArr[47]?.name ? "black" : "#dd4f4d"}` }}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    )
}

export default VaccinationProgram
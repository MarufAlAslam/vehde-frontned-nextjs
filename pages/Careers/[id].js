import Head from 'next/head'
import styles from '../../styles/CareersSingle.module.css'
import MainLayout from "../../components/layout/MainLayout"
import Image from 'next/image'
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'


export default function Careers() {

    const router = useRouter()
    const jobId = router.query.id
    const [job, setJob] = useState({})

    const jobArr = [
        {
            _id: 1,
            title: "Team Lead, Real Time Analytics",
            location: "Long Beach, CA",
            description: `At VEHDE, our mission is to improve people’s lives with the world’s best transportation. To do this, we   start with our own community by creating an open, inclusive, and diverse organization. As the Team Lead you will be responsible for the supervision of the Real-Time team at VEHDE. This position will maintain the internal policies and procedures, support operations and Real Time Analytics, or RTA, analysts in identifying trends, providing input on metric improvements, including forecast versus actuals.`,
            responsibilities: [
                "Drive efficiencies within the RTA and broader Workforce Management team",
                "Manage daily service levels through the analysis of intraday and historical performance",
                "Respond and adjust the plan to trends across multiple geographies and time zones",
                "Provide leadership, coaching, and guidance to the RTA team; hire, train and develop employees",
                "Coordinate cross-functional staffing activities based on intraday trends identified through multiple workforce management systems and operational analysis",
                "Monitor real-time tools to identify trends or issues that impact neighbor and employee experience",
                "Take decisive action to proactively mitigate  service impacting events",
                "Design, develop, and maintain workforce management reporting tools and processes to ensure enduring success.",
                "Develop and maintain daily, weekly, monthly reports across contact centers"
            ],
            experience: [
                "3+ years of experience in a workforce management role",
                "3+ years of contact center experience",
                "1+ year experience in a supervisory or managerial role",
                "Must be able to work evenings and weekends",
                "Experience with leading cross-functional teams and a demonstrated history of providing solutions to complex problems",
                "Strong quantitative and analytical skills",
                "Excellent interpersonal skills, including strong listening, written and verbal communication with the ability to clearly and professionally communicate with others",
                "Ability to conduct a detailed workforce analysis and use productivity applications to manage and summarize data",
                "Excellent written, grammatical, and verbal communication skills.",
                "Experience with WFN systems such as Nice, Genesys or Calabrio"
            ],
            description2: "VEHDE is an equal opportunity/affirmative action employer committed to an inclusive and diverse workplace. All qualified applicants will receive consideration for employment  without regards to race, color, religion, sex, sexual orientation, gender identity, national origin, disability status, protected veteran status or any other basis prohibited by law. We also consider qualified applicants with criminal histories consistent with applicable federal, state and local law."
        },
        {
            _id: 2,
            title: "Director, Policy Communications",
            location: "Long Beach, CA",
            description: `At VEHDE, our mission is to improve people’s lives with the world’s best transportation. To do this, we start with our own community by creating an open, inclusive, and diverse organization.
            
            VEHDE is looking for a Director of Policy Communications to join our fast-paced Communications team.  The primary focus of the role will be on regulatory matters, including policies related to drivers, but will include a variety of other initiatives as well. This role will develop and lead the execution of proactive strategies and programs to reach our driver community, as well as national and local media, and government officials.  The successful candidate will be an entrepreneurial and resourceful self-starter, comfortable working in an ambiguous and fast-changing environment.
            `,
            responsibilities: [
                "Develop strategic and scalable policy communications programs that proactively advance VEHDE’s goals, and help drivers reach theirs",
                "Proactively identify and collaborate with third parties, including academics, think tanks, business groups and others who can amplify our messages and advocate for favorable policies",
                "Work cross-functionally with multiple VEHDE teams, including Public Policy, Legal and Marketing, to support VEHDE’s policy objectives and protect our reputation",
                "Build relationships and serve as company representative with key news outlets, editors, editorial boards and reporters",
                "Manage a small team"
            ],
            experience: [
                "Bachelor's degree required",
                "12+ years of relevant communications experience ",
                "Proven ability to design and lead the execution of proactive media relations campaigns on high profile and/or complex issues.",
                "Experience as a media spokesperson, as well as an excellent writer, editor, and communicator",
                "Strong analytical and organization skills, ability to meet deadlines in a fast-paced, ambiguous environment, and attention to detail",
                "Ability to exercise discretion and independent judgment in the representation of VEHDE",
                "VEHDE user/believer"
            ],
            bnefits: [
                "Great medical, dental, and vision insurance options",
                "Mental health benefits",
                "In addition to 12 observed holidays, salaried team members have unlimited paid time off, hourly team members have 15 days paid time off",
                "401(k) plan to help save for your future",
                "18 weeks of paid parental leave. Biological, adoptive, and foster parents are all eligible",
                "Pre-tax commuter benefits",
            ],
            description2: "VEHDE is an equal opportunity/affirmative action employer committed to an inclusive and diverse workplace. All qualified applicants will receive consideration for employment  without regards to race, color, religion, sex, sexual orientation, gender identity, national origin, disability status, protected veteran status or any other basis prohibited by law. We also consider qualified applicants with criminal histories consistent with applicable federal, state and local law. "
        },
        {
            _id: 3,
            title: "Data Scientist, Predictive Modeling ",
            location: "Long Beach, CA",
            description: `At VEHDE, our mission is to improve people’s lives with the world’s best transportation. To do this, we start with our own community by creating an open, inclusive, and diverse organization.

            Data Science is at the heart of VEHDE’s products and decision-making. As a member of the Science team, you will work in a dynamic environment, where we embrace moving quickly to build the world’s best transportation. Data Scientists take on a variety of problems ranging from shaping critical business decisions to building algorithms that power our internal and external products. We’re looking for passionate, driven Data Scientists to take on some of the most interesting and impactful problems in ridesharing.
            
            As a Data Scientist, Predictive Modeling, you will leverage data and rigorous, analytical thinking to shape the company’s product and business decisions. You will identify and scope opportunities, shape priorities, recommend solutions, design experiments, and measure impact. You will bring a quantitative mindset to decision-making in partnership with product, business, and operations stakeholders throughout the organization.
            
            You will report to a Data Science Manager.`,
            responsibilities: [
                "Leverage data and analytic frameworks to identify opportunities for growth and efficiency ",
                "Partner with product managers, engineers, marketers, designers, and operators to translate data insights into decisions and action",
                "Design and analyze experiments; communicate results and act on launch decisions",
                "Develop analytical frameworks to monitor business and product performance",
                "Establish metrics that measure the health of our products, as well as rider and driver experience"
            ],
            experience: [
                "Degree in a quantitative field such as statistics, economics, applied math, operations research or engineering (advanced degrees preferred), or relevant work experience",
                "5+ years of industry experience in a data science or analytics role",
                "Proficiency in SQL - able to write structured and efficient queries on large data sets",
                "Experience in programming, especially with data science and visualization libraries in Python or R",
                "Strong oral and written communication skills, and ability to collaborate with and influence cross-functional partners "
            ],
            bnefits: [
                "Great medical, dental, and vision insurance options",
                "Mental health benefits",
                "In addition to 12 observed holidays, salaried team members have unlimited paid time off, hourly team members have 15 days paid time off",
                "401(k) plan to help save for your future",
                "18 weeks of paid parental leave. Biological, adoptive, and foster parents are all eligible",
                "Pre-tax commuter benefits",
            ],
            description2: "VEHDE is an equal opportunity/affirmative action employer committed to an inclusive and diverse workplace. All qualified applicants will receive consideration for employment  without regards to race, color, religion, sex, sexual orientation, gender identity, national origin, disability status, protected veteran status or any other basis prohibited by law. We also consider qualified applicants with criminal histories consistent with applicable federal, state and local law."
        }
    ]

    useEffect(() => {
        const selectedJob = jobArr.find(job => job._id == jobId)
        setJob(selectedJob)
    }, [jobId])

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
                                    <h1><Link href="/Careers">Careers at VEHDE</Link></h1>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id={styles.reserveCarSection}>
                    <div className='container'>
                        <div className={styles.reserveCarSectionWrapper}>
                            <div className="flex">
                                <Link href="/Careers"><i className='fa fa-arrow-left'></i> Go back to careers</Link>
                            </div>
                            <h2 className='text-center mb-4'>{job?.title}</h2>
                            <h4>{job?.location}</h4>
                            <p>{job?.description}</p>
                            <div>
                                <h4>Responsibilities:</h4>
                                <ul>
                                    {
                                        job?.responsibilities?.map(responsibility => (
                                            <li>{responsibility}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div>
                                <h4>Experience:</h4>
                                <ul>
                                    {
                                        job?.experience?.map(exp => (
                                            <li>{exp}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            {
                                job?.bnefits && (
                                    <div>
                                        <h4>Benefits:</h4>
                                        <ul>
                                            {
                                                job?.bnefits?.map(benifit => (
                                                    <li>{benifit}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )
                            }
                            <p>{job?.description2}</p>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    )
}
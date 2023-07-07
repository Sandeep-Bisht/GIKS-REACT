import React from 'react'
import { ReactComponent as CompilerSvg } from '../images/compiler.svg'
import { ReactComponent as SettingSvg } from '../images/setting.svg'
import { ReactComponent as LiferaySvg } from '../images/liferay.svg'
import { ReactComponent as MobileAppSvg } from '../images/mobile.svg'

const InfrastructureManagement = () => {
  return (
    <>
        <section className="about-who-we-are repeated-hero-banner services-application-development">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-lg-10">
                    <div className="about-single-content">
                        <h1 className="common-heading">Infrastructure Managment</h1>
                        <p className="common-para">
                        Infrastructure management involves overseeing IT policies, processes, equipment, information,<br/> HR, and external contacts (such as vendors or security associations). Its purpose is to ensure smooth and efficient IT operations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="services-about">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="sub-pages-heading mb-4">Integrated IT Infrastructure Management</h2>
                   
                </div>
            </div>
            <div className="row ">
                <div className="col-lg-4">
                    <p className="product-services-box-heading">
                        
                      Systems management
                    </p>
                    <p className="common-para">
                    Systems management encompasses a broad range of activities within the overarching realm of IT infrastructure management. It involves overseeing the management of all commonly found IT resources within a data center.
                    </p>
                </div>
                <div className="col-lg-4">
                    <p className="product-services-box-heading">
                        
Network Infrastructure Management
                    </p>
                    <p className="common-para">
                    This involves the management of both hardware and software systems within your IT infrastructure, which includes computers, servers, security platforms, routers, and various other components. The aim is to enable a seamless flow of business processes.
                    </p>
                </div>
                <div className="col-lg-4">
                    <p className="product-services-box-heading">
                    Storage management
                    </p>
                    <p className="common-para">
                    Storage management involves the administration and monitoring of storage devices within data center.. It encompasses three key areas of focus: capacity, performance, and availability.
                    </p>
                </div>
                
            </div>
            <div className="row mt-60">
                <div className="col-md-12">
                    <h2 className="sub-pages-heading">Why Infrastructure Management is Important</h2>
                    <p className="common-para">
                    Infrastructure management ensures the smooth and efficient functioning of IT systems by proactively managing infrastructure, organizations can minimize downtime, enhance reliability, and improve productivity. It also enables businesses to scale their IT resources as needed, respond quickly to changing demands, ensure security and compliance, and implement effective backup and disaster recovery mechanisms.
                    </p>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-12">
                    <ul className="list-unstyled ps-0 first">
                        <li>
                            <p className="product-services-box-heading">
                            Performance Enhancing
                            </p>
                            <p className="common-para">
                            Regularly checking and managing your systems improves performance, meets changing requirements, and prepares for future needs.
                            </p>
                        </li>
                        <li>
                            <p className="product-services-box-heading">
                            Optimized Investments
                            </p>
                            <p className="common-para">
                            Proper IT infrastructure management maximizes system performance and longevity. Following best practices like maintenance, updates, documentation, and infrastructure monitoring ensures that your IT investments meet their expected life cycle and operate at peak efficiency.
                            </p>
                        </li>
                        <li>
                            <p className="product-services-box-heading">
                            Overhead Reduction
                            </p>
                            <p className="common-para">
                            Embracing IT infrastructure management best practices ensures smooth operations for innovation and IT management. Applying best practices to methods, documentation, inventory management, knowledge bases, monitoring, and management systems optimizes IT resource effectiveness.
                            </p>
                        </li>
                       
                    </ul>
                </div>
            </div>
           
            <div className="row mt-60">
                <div className="col-lg-3">
                    <div className="what-we-do">

                        <CompilerSvg/>


                        <p className="product-services-box-heading mb-1 mt-2">
                            Website Development
                        </p>
                        <p className="common-para">
                        As a web and app development company, we specialize in transforming your ideas into powerful catalysts for your business growth.</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="what-we-do">

                    <SettingSvg/>

                    <p className="product-services-box-heading mb-1 mt-2">
                        Custom App Development
                    </p>
                    <p className="common-para">
                    With our proficiency in e-commerce, adtech/martech, peer-to-peer sectors, and various other business domains, we excel in crafting bespoke web and mobile solutions that cater to the unique needs of our clients.</p></div>
                </div>
                <div className="col-lg-3">
                    <div className="what-we-do">

                    <LiferaySvg/>

                    <p className="product-services-box-heading mb-1 mt-2">
                        Liferay Development
                    </p>
                    <p className="common-para">
                    Liferay DXP empowers developers with a comprehensive platform for fast creation of web apps, mobile apps, and web services. Its feature-rich frameworks prioritize rapid development, optimal performance, and user-friendly experience.</p></div>
                </div>
                <div className="col-lg-3">
                    <div className="what-we-do">
                    
                    <MobileAppSvg/>
    
                    <p className="product-services-box-heading mb-1 mt-2">
                        Mobile App Development
                    </p>
                    <p className="common-para">
                    For the efficient development of fast and seamless applications across multiple platforms, we offer an outsourcing app development model. This model provides a cost-effective solution for managing budgets and resources while ensuring the creation of high-quality products..</p></div>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default InfrastructureManagement
import React,{useEffect} from 'react'
import { Link} from 'react-router-dom'

const DigitalExperience = () => {
    useEffect(() => {
        playVideoOne();
        playVideoTwo();
  },[]); 
  const playVideoOne=()=>{
    const video = document.getElementById('myVideo1');
    if (video) {
      video.play().catch(error => {
        // Autoplay was prevented
        // You might want to handle this case gracefully
        console.error('Autoplay was prevented:', error);
      });
      video.addEventListener('ended', () => {
        video.pause();
      });
    }
  }
  const playVideoTwo=()=>{
    const video = document.getElementById('myVideo2');
    if (video) {
      video.play().catch(error => {
        // Autoplay was prevented
        // You might want to handle this case gracefully
        console.error('Autoplay was prevented:', error);
      });
    }
  }
  return (
    <>
    <section className="about-who-we-are repeated-hero-banner digital-experience-platform">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-lg-10">
                    <div className="about-single-content">
                        <h1 className="common-heading">Enterprise Digital Experience Platform</h1>
                        <p className="common-para">
                        Deliver personalized experiences for the entire customer journey. Designed to empower enterprises with the tools and capabilities necessary to deliver exceptional digital experiences across multiple channels. Whether it's creating immersive websites, developing mobile applications, or implementing personalized marketing campaigns, our platform offers a comprehensive solution to meet your organization's needs.
                        </p>
                        <Link to="/contact" className="nav-link common-btn mt-lg-4 mt-md-3 mt-sm-3 mt-2 d-inline-block">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="product-about">
        <div className="container">
            <div className="row align-items-center mob-col-reverse">
                 <div className="col-lg-6 col-md-6 col-sm-6 ">
                    <div className="product-about-content">
                         <h2 className="sub-pages-heading">A Flexible Platform to Fit Your Needs</h2>
                         <p className="common-para">We use Liferay which is designed to work within your existing business processes and technologies to 
                            build a custom solution that uniquely meets your needs. Great experiences don’t just happen, we just create them with Liferay.</p>
                    </div>
                 </div>
                 <div className="col-lg-6 col-md-6 col-sm-6 ">
                 <div className="product-about-pic d-flex justify-content-center">
                         <video id="myVideo1" src="/images/digital-experience/1.mp4" autoplay muted loop  onClick={playVideoOne} style={{height:"70%",width:"70%",outline:"none"}}/>
                     </div>
                 </div>
            </div>
            <div className="row align-items-center mt-60 mb-lg-5 pb-lg-5">
                <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="product-about-pic d-flex justify-content-center">
                        <video id="myVideo2" src="/images/digital-experience/2.mp4" autoplay muted loop onClick={playVideoTwo} style={{height:"70%",width:"70%",outline:"none"}}/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                   <div className="product-about-content">
                        <h2 className="sub-pages-heading">Integrate customer requirement for a successful digital transformation.</h2>
                        <p className="common-para">
                        By understanding and incorporating the needs and preferences of customers, 
                        organizations can tailor their digital initiatives to deliver personalized experiences and meet customer expectations. This involves gathering and analyzing customer data, engaging in meaningful interactions, and leveraging customer feedback to drive continuous improvement. By aligning digital transformation efforts with customer requirements, organizations can enhance customer satisfaction, build stronger relationships, and ultimately achieve long-term success in the digital landscape.
                       </p>
                   </div>
                </div>
                
           </div>
           <div className="row mt-60">
               <div className="col-lg-12 text-center">
                  <h2 className="sub-pages-heading">Digital Consulting Services</h2>
                  <p className="common-para">
Harness the power of our expert Digital Consulting Services today.  Partner with us to revolutionize your digital presence.
</p>
               </div>
           </div>
           <div className="row mt-60">
                <div className="col-lg-4 col-md-6 col-sm-6 ">
                    <div className="product-services-box">
                        <div className="inner-wrapper">
                              <p className="product-services-box-heading">
                                Strategic Consulting
                              </p>
                             <ul>
                                 <li className="common-para">Growth Strategy</li>
                                 <li className="common-para">Business Modeling</li>
                                 <li className="common-para">Time of Entry</li>
                                 <li className="common-para">Gap Identification</li>
                                 <li className="common-para">Channel Strategy</li>
                                 <li className="common-para">Digital Risk Management</li>
                             </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 ">
                    <div className="product-services-box">
                        <div className="inner-wrapper">
                              <p className="product-services-box-heading">
                                Customer Experience & Design
                              </p>
                             <ul>
                                 <li className="common-para">Channel Mix</li>
                                 <li className="common-para">Accessibility Design</li>
                                 <li className="common-para">People, Process and System<br/>Interaction Design</li>
                                 <li className="common-para">Brand Design</li>
                                
                                 <li className="common-para">Primary & Secondary User Research</li>
                             </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 ">
                    <div className="product-services-box">
                        <div className="inner-wrapper">
                              <p className="product-services-box-heading">
                                Technology & Engineering
                              </p>
                             <ul>
                                 <li className="common-para">Technology Forecasting</li>
                                 <li className="common-para">Roadmap Development</li>
                                 <li className="common-para">Technologies, Frameworks & Platform Evaluation</li>
                                 <li className="common-para">Data, ETL & Reporting
</li>
                                 <li className="common-para">AI/ML Modeling
</li>
                                
                             </ul>
                        </div>
                    </div>
                </div>
                
           </div>
           <div className="row mt-60">
             <div className="col-lg-12">
                <h2 className="sub-pages-heading mb-lg-4">Understanding customer experience in Digital Times/DXP (Digital Experience Platform).</h2>
                <p className="common-para">
                In the rapidly evolving digital landscape, understanding the customer experience has become paramount. With the advent of Digital Experience Platforms (DXP), businesses are equipped with powerful tools to engage and interact with their customers in unprecedented ways. These platforms seamlessly integrate various digital touchpoints, enabling organizations to create personalized and immersive experiences across multiple channels. By delving into the realm of customer experience in the digital era and harnessing the capabilities of DXP, businesses can gain invaluable insights, enhance customer satisfaction, and forge long-lasting relationships in the ever-connected world.
                </p>
             </div>
             <div className='col-lg-12'>
             <Link to="/jaimaica-study" target='_blank'  className="nav-link text-white text-uppercase fw-bold  mt-lg-4 mt-md-3 mt-sm-3 mt-2 d-inline-block download-brochure">
                Case Study
             </Link>
             </div>
           </div>
        </div>
    </section>
    </>
  )
}

export default DigitalExperience
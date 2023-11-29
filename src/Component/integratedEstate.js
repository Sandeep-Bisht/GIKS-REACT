import React, { useEffect } from 'react'
import { Link} from 'react-router-dom'
const IntegratedEstate = () => {
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
    <section className="about-who-we-are repeated-hero-banner Integrated-Estate-Management-System">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-lg-10">
                    <div className="about-single-content">
                        <h1 className="common-heading">Integrated Estate Management System</h1>
                        <p className="common-para">
                        In order to streamline and align the working processes of Estates in government departments and Indian Railways with existing work practices, we have designed the Integrated Estate Management System (IEMS). This system serves the purpose of consolidating residents' requisitions, quarter allocations, complaints, feedback, and routing them to the appropriate officers and contractors for prompt action. By implementing IEMS, we ensure seamless integration and harmonization across various aspects of estate management.
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
                 <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="product-about-content">
                         <h2 className="sub-pages-heading">Statistical Information Management</h2>
                         <p className="common-para">The Integrated Facility Management system we offer generates statistical reports based on user data and provides multiple dynamic reports for management. This comprehensive application is designed to be user-friendly, allowing non-technical users to easily manage and access all its features. This ensures that employees and management alike can conveniently utilize the system for their needs.</p>
                    </div>
                 </div>
                 <div className="col-lg-6 col-md-6 col-sm-6">
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
                        <h2 className="sub-pages-heading">Streamlining Estate Management System (IEMS)</h2>
                        <p className="common-para">
                        This solution comprised the development of an Integrated Estate Management System (IEMS) to combine the essential operations of estate management into a single platform, allowing government departments and their respective estates to operate more efficiently by providing just-in-time reports for timely decisions making and finding loopholes such retention after retirements and vacations.
                       </p>
                   </div>
                </div>
                
           </div>
           <div className="row mt-60">
               <div className="col-lg-12 text-center">
                  <h2 className="sub-pages-heading">The implementation of IEMS allows Government Departments to</h2>
                  <p className="common-para">We help you build a comprehensive roadmap to accelerate your digital transformation</p>
               </div>
           </div>
           <div className="row mt-60">
                <div className='col-lg-12'>
                    <p className='common-para'>
                      1. Capture and maintain records of residents, Requisitions of employees for quarters, and resident feedback through the web, IOS, and Android. With SMS notification included as part of IEMS, feedback is instantly routed to concerned department authorities and contractors for action.
                    </p>
                    <p className='common-para'>
                    2. Plan routine estate inspection on buildings and landscape works. Monitor and track contractor performance. Issue job sheets for landscape and maintenance work to the relevant contractor.
                    </p>
                    <p className='common-para'>
                    3. Monitor and track lift performance on all lift companies engaged by the government departments. Monitor contractors through comprehensive daily, weekly and monthly reports. Automated escalations to the senior management after a customizable time period.
                    </p>
                </div>
                <div className='col-lg-12'>
             <Link to="/nrcms-study" target='_blank' className="nav-link text-white text-uppercase fw-bold  mt-lg-4 mt-md-3 mt-sm-3 mt-2 d-inline-block download-brochure">
                Case Study
             </Link>
             </div>
                
           </div>
           
        </div>
    </section>
    </>
  )
}

export default IntegratedEstate
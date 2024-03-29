import React, { useEffect } from 'react'
import { Route, Outlet, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Homepage from '../Component/homepage'
import About from '../Component/about'
import DigitalExperience from '../Component/digitalExperience'
import IntegratedEstate from '../Component/integratedEstate'
import IntelligentTicketing from '../Component/intelligentTicketing'
import VirtualEvent from '../Component/virtualEvent'
import ApplicationDevelopment from '../Component/applicationDevelopment'
import InternetOfThings from '../Component/internetOfThings'
import ItSecurityManagement from '../Component/itSecurityManagement'
import InfrastructureManagement from '../Component/infrastructureManagement'
import BusinessCousulting from '../Component/businessCousulting'
import Technologies from '../Component/technologies'
import CustomSoftwareDevelopment from '../Component/customSoftwareDevelopment'
import MobileAppDevelopment from '../Component/mobileAppDevelopment'
import PlatformBasedDevelopment from '../Component/platformBasedDevelopment'
import Contact from '../Component/contact'
import Blog from '../Component/blog'
import BlogDetail from '../Component/blogDetails'
import PageNotFound from '../Component/pageNotFound'
import FreindsCludStudy from '../Component/freindsClubStudy'
import NationalHydrographicStudy from '../Component/nhoStudy'
import IshaanavStudy from '../Component/ishaanavStudy'
import JaimaicaStudy from '../Component/jaimaicaStudy'
import NorthenRailwayStudy from '../Component/nrcmsStudy'
import JgcStudy from '../Component/jgcStudy'
import PioneerStudy from '../Component/pioneer'
import IncaStudy from '../Component/incaStudy'
import Careers from '../Component/careers'
import PrivacyPolicy from '../Component/privacy-policy'
import  TermsCondition from '../Component/terms-condition'
import Mern from '../Component/mern'
 import Java from '../Component/java'
 import Liferay from '../Component/liferay'
import Laravel from '../Component/laravel'
import Android from '../Component/android'
import Ios from '../Component/ios'
import Wordpress from '../Component/wordpress'
import SalesForce from '../Component/salesforce' 
import Php from '../Component/php'
import ReactNative from '../Component/reactNative'
import InvestcareStudy from '../Component/investcareStudy'
import ModernHouseStudy from '../Component/modernHouseStudy'
import DoonValleyStudy from '../Component/doonValleyStudy'
import MukhyaDharaStudy from '../Component/mukhyadharaStudy'
import QuarterManagmentStudy from '../Component/quarterMangmentStudy'
import Login from '../Component/login'
// import Dashboard from '../Component/Dashboard/AdimnDashboard'
import Cookies from "js-cookie";
import AdminDashboard from '../Component/Dashboard/AdimnDashboard'
import AllBlog from '../Component/Layout/AllBlogs'
import Dashboard from '../Component/Layout/Dashboard'
import AddBlog from '../Component/Layout/AddBlog'
import Nrcms from '../Component/nrcms'
import Header from '../Component/header'
import Footer from '../Component/footer'
import { getAllBlogs, getBlogBySlug } from '../ContextApi/IntialApis'
// import DashboardBlog from '../Component/Layout/'


const DefaultUi = () =>{
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
    <Header/>
      <Outlet/>
    <Footer/>
    </>
  )
}

const Authanticated = (props) => {
 let token = Cookies.get("giks_token");


 return props.component
}
const ApplicationRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route element={<DefaultUi/>}>
        <Route path='/*' element={<PageNotFound/>}/>
        <Route index path='/' element={<Homepage/>}/>
        <Route path='/login' element={< Login/>} />
        <Route path='/about-us' element={<About/>}/>
        <Route path='/digital-experience-platform' element={<DigitalExperience/>}/>
        <Route path='/integrated-estate-management-system' element={<IntegratedEstate/>}/>
        <Route path='/intelligent-ticketing-management' element={<IntelligentTicketing/>}/>
        <Route path='/virtual-event-management' element={<VirtualEvent/>}/>
        <Route path='/application-development' element={<ApplicationDevelopment/>}/>
        <Route path='/internet-of-things' element={<InternetOfThings/>}/>
        <Route path='/it-security-management' element={<ItSecurityManagement/>}/>
        <Route path='/infrastructure-management' element={<InfrastructureManagement/>}/>
        <Route path='/business-consulting' element={<BusinessCousulting/>}/>
        <Route path='/technologies' element={<Technologies/>}/>
        <Route path='/custom-software-development' element={<CustomSoftwareDevelopment/>}/>
        <Route path='/mobile-app-development' element={<MobileAppDevelopment/>}/>
        <Route path='/platform-based-development' element={<PlatformBasedDevelopment/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>} loader={getAllBlogs}/>
        <Route path="/blog/:blog" element={<BlogDetail/>} loader={getBlogBySlug}/>
        <Route path='/friends-club-study' element={<FreindsCludStudy/>}/>
        <Route path='/national-hydrographic-study' element={<NationalHydrographicStudy/>}/>
        <Route path='/ishaanav-study' element={<IshaanavStudy/>}/> 
        {/* <Route path='/jaimaica-study' element={<JaimaicaStudy/>}/> */}
        <Route path='/nrcms-study' element={<NorthenRailwayStudy/>}/>
        <Route path='/jgc-study' element={<JgcStudy/>}/>
        <Route path='/pioneer-study' element={<PioneerStudy/>}/>
        <Route path='/inca-study' element={<IncaStudy/>}/>
        <Route path='/investcare-study' element={<InvestcareStudy/>}/>
        <Route path='/modern-house-study' element={<ModernHouseStudy/>}/>
       
        <Route path='/doon-valley-study' element={< DoonValleyStudy/>}/>
        
        <Route path='/mukhya-dhara-study' element={<MukhyaDharaStudy/>}/>
           
        <Route path='/quarter-managment-study' element={<QuarterManagmentStudy/>}/>
      

        <Route path='/careers' element={<Careers/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
  
       <Route path='/terms-condition' element={<TermsCondition />}/>
       <Route path='/mern' element={<Mern />}/>
       <Route path='/java' element={<Java/>}/>
       <Route path='/liferay' element={<Liferay/>}/>
       <Route path='/laravel' element={<Laravel/>}/>
       <Route path='/android' element={<Android/>}/>
       <Route path='/ios' element={<Ios/>}/>
       <Route path='/wordpress' element={<Wordpress/>}/>
       <Route path='/sales-force' element={<SalesForce/>}/>
       <Route path='/php' element={<Php/>}/>
       <Route path='/react-native' element={<ReactNative/>}/>
       </Route>
       
       <Route path='/nrcms' element={<Nrcms/>}/>
       <Route path="/dashboard"  element={<Authanticated component= {<AdminDashboard />} /> } >
          <Route index element={< Dashboard/>} />
          <Route path="/dashboard/blogs" element={< AllBlog />} />
          <Route path="/dashboard/blogs/add-blog" element={< AddBlog />} />
        </Route>
    </Route>

  ));


export default ApplicationRoutes
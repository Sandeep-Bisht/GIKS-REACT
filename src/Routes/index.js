import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
import BlogDetails from '../Component/blogDetails'
import PageNotFound from '../Component/pageNotFound'

const ApplicationRoutes = () => {
  return (
    <Routes>
      
        <Route path='/*' element={<PageNotFound/>}/>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/digital-experience-platform' element={<DigitalExperience/>}/>
        <Route path='/integrated-estate-managment-system' element={<IntegratedEstate/>}/>
        <Route path='/intelligent-ticketing-managmnet' element={<IntelligentTicketing/>}/>
        <Route path='/virtual-event-managment' element={<VirtualEvent/>}/>
        <Route path='/application-development' element={<ApplicationDevelopment/>}/>
        <Route path='/internet-of-things' element={<InternetOfThings/>}/>
        <Route path='/it-security-managment' element={<ItSecurityManagement/>}/>
        <Route path='/infrastructure-managment' element={<InfrastructureManagement/>}/>
        <Route path='/business-consulting' element={<BusinessCousulting/>}/>
        <Route path='/technologies' element={<Technologies/>}/>
        <Route path='/custom-software-development' element={<CustomSoftwareDevelopment/>}/>
        <Route path='/mobile-app-development' element={<MobileAppDevelopment/>}/>
        <Route path='/platform-based-development' element={<PlatformBasedDevelopment/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog-detail' element={<BlogDetails/>}/>
    </Routes>
  )
}

export default ApplicationRoutes
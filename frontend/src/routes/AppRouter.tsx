import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from "../pages/Home";
import FindPlanner from "../pages/for_you/general_audience/FindPlanner";
import About from "../pages/association/About";

import ForYou from "../pages/for_you/ForYou";
import ForGeneralAudience from "../pages/for_you/general_audience/ForGeneralAudience";
import ForStudent from "../pages/for_you/ForStudent";
import ForProfessional from "../pages/for_you/ForProfessional";
import ForCompany from "../pages/for_you/ForCompany";
import ForTrainingSchool from "../pages/for_you/ForTrainingSchool";
import ForMedia from "../pages/for_you/ForMedia";

import Resources from "../pages/resources/Resources";

import ResourcesNews from "../pages/resources/News";
import ResourcesAnnouncements from "../pages/resources/Announcements";
import ResourcesActivities from "../pages/resources/Activities"

import { ResourcesBooks, ResourcesTFPAMagazine, ResourcesTFPANews } from "../pages/resources/Publications";
import { ResourcesBlogs } from "../pages/resources/Blogs";
import ResourcesDocuments from "../pages/resources/Documents";

import ResourcesVideos from "../pages/resources/Videos";

import Contact from "../pages/association/Contact";


export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* path="/login" links to real member's login site */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/find_planner" element={<FindPlanner />} />

        <Route path="/for_you" element={<ForYou />} />
        <Route path="/for_you/general_audience" element={<ForGeneralAudience />} />
        <Route path="/for_you/student" element={<ForStudent />} />
        <Route path="/for_you/professional" element={<ForProfessional />} />
        <Route path="/for_you/company" element={<ForCompany />} />
        <Route path="/for_you/training_school" element={<ForTrainingSchool />} />
        <Route path="/for_you/media" element={<ForMedia />} />

        <Route path="/resources" element={<Resources />} />

        <Route path="/resources/news" element={<ResourcesNews />} />
        <Route path="/resources/announcements" element={<ResourcesAnnouncements />} />
        <Route path="/resources/activities" element={<ResourcesActivities />} />

        <Route path="/resources/tfpa_magazines" element={<ResourcesTFPAMagazine />} />
        <Route path="/resources/tfpa_news" element={<ResourcesTFPANews />} />
        <Route path="/resources/blogs" element={<ResourcesBlogs />} />
        <Route path="/resources/ebook" element={<ResourcesBooks />} />
        <Route path="/resources/documents" element={<ResourcesDocuments />} />

        <Route path="/resources/videos" element={<ResourcesVideos />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from "../pages/Home";
import FindPlanner from "../pages/FindPlanner";
import About from "../pages/About";

import ForYou from "../pages/for_you/ForYou";
import ForGeneralAudience from "../pages/for_you/ForGeneralAudience";
import ForStudent from "../pages/for_you/ForStudent";
import ForProfessional from "../pages/for_you/ForProfessional";
import ForCompany from "../pages/for_you/ForCompany";
import ForTrainingSchool from "../pages/for_you/ForTrainingSchool";
import ForMedia from "../pages/for_you/ForMedia";

import Resources from "../pages/resources/Resources";
import ResourcesNews from "../pages/resources/News";
import ResourcesArticles from "../pages/resources/Articles";
import ResourcesPublications from "../pages/resources/Publications";
import ResourcesVideos from "../pages/resources/Videos";
import ResourcesDocuments from "../pages/resources/Documents";
import ResourcesAnnouncements from "../pages/resources/Announcements";
import ResourcesActivities from "../pages/resources/Activities"

import Contact from "../pages/Contact";


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
        <Route path="/resources/articles" element={<ResourcesArticles />} />
        <Route path="/resources/publications" element={<ResourcesPublications />} />
        <Route path="/resources/videos" element={<ResourcesVideos />} />
        <Route path="/resources/documents" element={<ResourcesDocuments />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

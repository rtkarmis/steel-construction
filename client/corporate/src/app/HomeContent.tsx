"use client";
import BlogPreview from "@/components/home/BlogPreview";
import CorporatePreview from "@/components/home/CorporatePreview";
import CTAPreview from "@/components/home/CTAPreview";
import FAQPreview from "@/components/home/FAQPreview";
import HeroPreview from "@/components/home/HeroPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import ReferencePreview from "@/components/home/ReferencePreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import TechQualityPreview from "@/components/home/TechQualityPreview";
import { LazyMotion, domAnimation, m } from "framer-motion";
// 👇 Basit fade-up animasyonu tanımları
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};
const HomeContent = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="min-h-screen bg-background text-text"
      >
        <HeroPreview fadeUp={fadeUp} />
        <CorporatePreview fadeUp={fadeUp} />
        <ServicesPreview fadeUp={fadeUp} staggerContainer={staggerContainer} />
        <ProjectsPreview fadeUp={fadeUp} staggerContainer={staggerContainer} />
        <TechQualityPreview fadeUp={fadeUp} />
        <ReferencePreview fadeUp={fadeUp} />
        <BlogPreview fadeUp={fadeUp} staggerContainer={staggerContainer} />
        <FAQPreview fadeUp={fadeUp} />
        <CTAPreview fadeUp={fadeUp} />
      </m.div>
    </LazyMotion>
  );
};
export default HomeContent;

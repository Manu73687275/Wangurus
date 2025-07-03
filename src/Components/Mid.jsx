import React from "react";
import { NameBlock } from "./NameBlock";
import { FeatureSection1 } from "./FeatureSection1";
import { SocialMedia } from "./SocialMedia";
import { FeatureSection2 } from "./FeatureSection2";
import { FeatureSection3 } from "./FeatureSection3";
import { FeatureSection4 } from "./FeatureSection4";
import { BlogSection } from "./BlogSection";
import { MetricsSection } from "./MetricsSection";
import { TestimonialSection } from "./TestimonialSection";
import { BlogSection2 } from "./BlogSection2";
import { FAQSection } from "./FAQSection";
import { MetricsSection2 } from "./MetricsSection2";

export const Mid=()=>{
    return(
        
        <div className="min-h-screen bg-[#0E0200]">
           <NameBlock/>
           <FeatureSection1/>
           <SocialMedia/>
           <FeatureSection2/>
            <FeatureSection3/>
            <FeatureSection4/>
            <BlogSection/>
            <MetricsSection/>
            <TestimonialSection/>
            <BlogSection2/>
            <FAQSection/>
            <MetricsSection2/>
        </div>
    )
}
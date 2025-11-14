import {
Search,
Users, 
FileText, 
MessageSquare, 
BarChart3, 
Shield, 
Clock, 
Award,
Briefcase, 
Building2, 
LayoutDashboard, 
Plus,
} from "lucide-react";

export const jobSeekerFeatures = [
    {
   icon: Search, 
   title:"Smart Job Matching",
   description:
    "AI-powered algorithm matches you with relevant opportunities based on your skills and preferences.",
    },

    {
        icon: FileText, 
        title: "Resume Builder", 
        description:
        "Create professional resumes with our intuitive builder and templates designed by experts,",
    },
    {
        icon: MessageSquare, 
        title: "Direct Communication", 
        description:
        "Connect directly with hiring managers and recruiters through our secure messaging platform.",
        
    },

    {
        icon: Award, 
        title: "Skill Assessments", 
        description:
        "Showcase your abilities with our industry-recognized skill assessments and certifications.",         
    },
];

export const employerFeatures = [
    {
   icon: Users,
title :"Talent Pool Access",
   description:
    "Access a vast database of qualified candidates to find the perfect fit for your job openings.",    
    },

    {
        icon: BarChart3, 
        title: "Analytics Dashboard", 
        description:
        "Track your hiring performance with detailed analytics and insights on candidates engagement.",
    },
    {
        icon: Shield, 
        title: "Verified Candidates", 
        description:
        "All candidates undergo a background verification process to ensure authenticity and reliability.",         
    },
    {
        icon: Clock, 
        title: "Quick Hiring", 
        description:
        "Streamlined hiting process reduces time-to-hire by 60% with automated screening tools.",             
    },
];

// Navigation items configuration
export const NAVIGATION_MENU = [
    { id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard },
    { id: "post-job", name: "Post a Job", icon: Plus },
    { id: "manage-jobs", name: "Manage Jobs", icon: Briefcase },
    {id: "company-profile", name: "Company Profile", icon: Building2 },
];

// Categories and Job types
export const JOB_CATEGORIES = [
    { value: "Engineering", label: "Engineering" },
    { value: "Design", label: "Design" },
    { value: "Marketing", label: "Marketing" },
    { value: "Sales", label: "Sales" },
    { value: "IT and Software", label: "IT and Software" },
    { value: "Finance", label: "Finance" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Customer-service", label: "Customer Service" },
    { value: "Education", label: "Education" },
    { value: "Healthcare", label: "Healthcare" },
    {value: "Other", label: "Other" },
];

export const JOB_TYPES = [
    { value: "Remote", label: "Remote" },
    { value: "Full-time", label: "Full-time" },
    { value: "Part-time", label: "Part-time" },
    { value: "Contract", label: "Contract" },
    { value: "Internship", label: "Internship" },
];
  
export const SALARY_RANGES = [
    "Less than $40,000",
    "$40,000 - $60,000",
    "More than $60,000",
];
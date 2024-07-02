import logo from './requestLogo.svg';
import facebook_logo from './facebook_logo.png';
import instagram_logo from './instagram_logo.png';
import linkedin_logo from './linkedin_logo.png';
import x_logo from './X_logo.svg';
import search_icon from './search.png';
import cross from './cross.png';
import profile_icon from './profile_icon.png';
import back_button from './back_button.png';

import signup_image from './Signup-image.png';
import request_form_image from './Reqisst_form_image.png';
import explore_service_image from './Explore-services-image.png'
import chat_image from './Chat_image.png'

import image_plumbing from './Service-images/plumbing.jpeg';
import image_electrical from './Service-images/electrical.jpeg';
import image_hvac from './Service-images/hvac.jpeg';
import image_roofing from './Service-images/roofing.jpeg';
import image_carpentry from './Service-images/carpentry.jpeg';
import image_legal from './Service-images/legal.jpeg';
import image_interior_design from './Service-images/interior_design.jpeg';
import image_event_planning from './Service-images/event_planning.jpeg';
import image_graphic_design from './Service-images/graphic_design.jpeg';
import image_tree_removal from './Service-images/tree_removal.jpeg';
import image_tiling_flooring from './Service-images/tiling_flooring.jpeg';
import image_welding from './Service-images/welding.jpeg';
import image_home_renovation from './Service-images/home_renovation.jpeg';
import image_pest_control from './Service-images/pest_control.jpeg';

//Request Service images

import request_image_plumbing from './Request-images/request_image_plumbing.jpg'
import request_image_electrical from './Request-images/request_image_electrical.jpg';
import request_image_carpentry from './Request-images/request_image_carpentry.jpg';
import request_image_event_planning from './Request-images/request_image_event_planning.jpg';
import request_image_graphic_design from './Request-images/request_image_graphic_design.jpg';
import request_image_interior_design from './Request-images/request_image_interior_design.jpg';
import request_image_legal from './Request-images/request_image_legal.jpeg';
import request_image_roofing from './Request-images/request_image_roofing.jpg';
import request_image_tree_removal from './Request-images/request_image_tree_removal.jpeg';

export const assets= {
    logo,
    facebook_logo,
    instagram_logo,
    linkedin_logo,
    x_logo,
    search_icon,
    cross,
    profile_icon,
    back_button,
    signup_image,
    request_form_image,
    explore_service_image,
    chat_image
}   


export const service_list_cat= [
    {service_name: "Plumbing"},
    {service_name: "Electrical Work"},
    {service_name: "Heating, Ventilation, and Air Conditioning Services"},
    {service_name: "Roofing"},
    {service_name: "Carpentry"},
    {service_name: "Legal Services"},
    {service_name: "Interior Design"},
    {service_name: "Event Planning"},
    {service_name: "Graphic Design"},
    {service_name: "Tree Removal and Trimming"},
    {service_name: "Tiling and Flooring"},
    {service_name: "Welding"},
    {service_name: "Home Renovation"},
    {service_name: "Pest Control"}
]

export const service_list = [
    {
        _id: "1",
        title: "Professional Plumber for Shower Fixes",
        image: image_plumbing,
        description: "Hire a professional plumber to fix your shower issues promptly.",
        category: "Plumbing"
    },
    {
        _id: "2",
        title: "Experienced Electrician for Wiring",
        image: image_electrical,
        description: "Get an experienced electrician for your home wiring needs.",
        category: "Electrical Work"
    },
    {
        _id: "3",
        title: "HVAC Maintenance Services",
        image: image_hvac,
        description: "Reliable HVAC maintenance services to keep your system running smoothly.",
        category: "Heating, Ventilation, and Air Conditioning Services"
    },
    {
        _id: "4",
        title: "Expert Roof Repair Services",
        image: image_roofing,
        description: "Professional roof repair services to fix any roofing issues.",
        category: "Roofing"
    },
    {
        _id: "5",
        title: "Custom Furniture Carpentry Services",
        image: image_carpentry,
        description: "Skilled carpenters available to create custom furniture for your home.",
        category: "Carpentry"
    },
    {
        _id: "6",
        title: "Legal Consultation Services",
        image: image_legal,
        description: "Get expert legal advice for all your business-related issues.",
        category: "Legal Services"
    },
    {
        _id: "7",
        title: "Interior Design for Living Room",
        image: image_interior_design,
        description: "Transform your living room with our professional interior design services.",
        category: "Interior Design"
    },
    {
        _id: "8",
        title: "Professional Wedding Event Planning",
        image: image_event_planning,
        description: "Hire an experienced event planner to make your wedding unforgettable.",
        category: "Event Planning"
    },
    {
        _id: "9",
        title: "Graphic Designer for Logo Creation",
        image: image_graphic_design,
        description: "Professional graphic design services to create a unique logo for your business.",
        category: "Graphic Design"
    },
    {
        _id: "10",
        title: "Tree Removal and Trimming Services",
        image: image_tree_removal,
        description: "Efficient tree removal and trimming services for your backyard.",
        category: "Tree Removal and Trimming"
    },
    {
        _id: "11",
        title: "Bathroom Tiling Services",
        image: image_tiling_flooring,
        description: "Expert tiling services for your bathroom renovation project.",
        category: "Tiling and Flooring"
    },
    {
        _id: "12",
        title: "Welding Services for Gate Repair",
        image: image_welding,
        description: "Hire a professional welder to repair your metal gate.",
        category: "Welding"
    },
    {
        _id: "13",
        title: "Roofing Installation Services",
        image: image_roofing,
        description: "Quality roofing installation services for your new home.",
        category: "Roofing"
    },
    {
        _id: "14",
        title: "Home Renovation Services",
        image: image_home_renovation,
        description: "Professional home renovation services for all your remodeling needs.",
        category: "Home Renovation"
    },
    {
        _id: "15",
        title: "Pest Control for Termite Infestation",
        image: image_pest_control,
        description: "Effective pest control services to handle termite infestations.",
        category: "Pest Control"
    },
    {
        _id: "16",
        title: "Kitchen Sink Plumbing Services",
        image: image_plumbing,
        description: "Professional plumber available to fix your kitchen sink.",
        category: "Plumbing"
    },
    {
        _id: "17",
        title: "Electrician for Light Fixtures",
        image: image_electrical,
        description: "Experienced electrician to install and repair light fixtures.",
        category: "Electrical Work"
    },
    {
        _id: "18",
        title: "HVAC Installation Services",
        image: image_hvac,
        description: "Professional HVAC installation services for your home.",
        category: "Heating, Ventilation, and Air Conditioning Services"
    },
    {
        _id: "19",
        title: "Roof Inspection Services",
        image: image_roofing,
        description: "Comprehensive roof inspection services to assess and repair damages.",
        category: "Roofing"
    },
    {
        _id: "20",
        title: "Custom Shelving Carpentry",
        image: image_carpentry,
        description: "Hire a skilled carpenter to build custom shelves for your home.",
        category: "Carpentry"
    },
    {
        _id: "21",
        title: "Contract Review Legal Services",
        image: image_legal,
        description: "Expert legal services to review and manage your business contracts.",
        category: "Legal Services"
    },
    {
        _id: "22",
        title: "Bedroom Interior Design",
        image: image_interior_design,
        description: "Transform your bedroom with our professional interior design services.",
        category: "Interior Design"
    },
    {
        _id: "23",
        title: "Corporate Event Planning",
        image: image_event_planning,
        description: "Professional event planning services for your corporate events.",
        category: "Event Planning"
    },
    {
        _id: "24",
        title: "Brochure Graphic Design",
        image: image_graphic_design,
        description: "Get a stunning brochure designed by our expert graphic designers.",
        category: "Graphic Design"
    },
    {
        _id: "25",
        title: "Tree Trimming Services",
        image: image_tree_removal,
        description: "Efficient tree trimming services to maintain your yard.",
        category: "Tree Removal and Trimming"
    },
    {
        _id: "26",
        title: "Flooring Installation Services",
        image: image_tiling_flooring,
        description: "Professional flooring installation services for your home.",
        category: "Tiling and Flooring"
    },
    {
        _id: "27",
        title: "Metal Fence Welding Services",
        image: image_welding,
        description: "Expert welding services to fix and install metal fences.",
        category: "Welding"
    },
    {
        _id: "28",
        title: "Roof Maintenance Services",
        image: image_roofing,
        description: "Regular roof maintenance services to keep your roof in top condition.",
        category: "Roofing"
    },
    {
        _id: "29",
        title: "Kitchen Renovation Services",
        image: image_home_renovation,
        description: "Comprehensive kitchen renovation services for your home.",
        category: "Home Renovation"
    },
    {
        _id: "30",
        title: "Rodent Pest Control Services",
        image: image_pest_control,
        description: "Effective pest control services to handle rodent problems.",
        category: "Pest Control"
    }
];


export const request_list = [
    {
        _id: "1",
        title: "Need a Plumber to fix my shower",
        image: request_image_plumbing,
        description: "Looking for a professional plumber to fix my shower.",
        category: "Plumbing"
    },
    {
        _id: "2",
        title: "Need an Electrician for wiring",
        image: request_image_electrical,
        description: "Seeking an experienced electrician to help with home wiring.",
        category: "Electrical Work"
    },
    {
        _id: "4",
        title: "Roof Repair Needed",
        image: request_image_roofing,
        description: "Need an expert for roof repair services.",
        category: "Roofing"
    },
    {
        _id: "5",
        title: "Carpentry Work for Furniture",
        image: request_image_carpentry,
        description: "Looking for a skilled carpenter to create custom furniture.",
        category: "Carpentry"
    },
    {
        _id: "6",
        title: "Legal Consultation Required",
        image: request_image_legal,
        description: "Need legal advice for business-related issues.",
        category: "Legal Services"
    },
    {
        _id: "7",
        title: "Interior Design for Living Room",
        image: request_image_interior_design,
        description: "Seeking an interior designer for living room renovation.",
        category: "Interior Design"
    },
    {
        _id: "8",
        title: "Event Planner for Wedding",
        image: request_image_event_planning,
        description: "Looking for a professional event planner for a wedding.",
        category: "Event Planning"
    },
    {
        _id: "9",
        title: "Graphic Designer for Logo Creation",
        image: request_image_graphic_design,
        description: "Need a graphic designer to create a logo for my business.",
        category: "Graphic Design"
    },
    {
        _id: "10",
        title: "Tree Removal Service Needed",
        image: request_image_tree_removal,
        description: "Looking for tree removal services in my backyard.",
        category: "Tree Removal and Trimming"
    },
];



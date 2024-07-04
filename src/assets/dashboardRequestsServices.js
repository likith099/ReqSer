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



export const dashboard_requests = [
    {
        user_id: 1,
        user_email: "admin",
        user_password: "admin",
        user_first_name: "Admin",
        user_last_name: "Admin_lastname",
        user_country: "Admin Country",
        user_mobile_number: "1234567890",
        auser_ddress: "Admin Address",
        user_description: "This is Admin account",
        request_title: "Tree Removal Service Needed",
        request_image: request_image_tree_removal,
        request_description: "Looking for tree removal services in my backyard.",
        request_category: "Tree Removal and Trimming"
    },
    {
        user_id: 1,
        user_email: "admin",
        user_password: "admin",
        user_first_name: "Admin",
        user_last_name: "Admin_lastname",
        user_country: "Admin Country",
        user_mobile_number: "1234567890",
        user_address: "Admin Address",
        user_description: "This is Admin account",
        request_title: "Roof Repair Needed",
        request_image: request_image_roofing,
        request_description: "Need an expert for roof repair services.",
        request_category: "Roofing"
        
    },
    {
        user_id: 2,
        user_email: "admin2",
        user_password: "admin2",
        user_first_name: "John",
        user_last_name: "Doe",
        user_country: "User Country",
        user_mobile_number: "0987654321",
        user_address: "User Address",
        user_description: "This is a User account",
        request_title: "Event Planner for Wedding",
        request_image: request_image_event_planning,
        request_description: "Looking for a professional event planner for a wedding.",
        request_category: "Event Planning"
    },

]

export const dashboard_services = [

    {
        user_id: 1,
        user_email: "admin",
        user_password: "admin",
        user_first_name: "Admin",
        user_last_name: "Admin_lastname",
        user_country: "Admin Country",
        user_mobile_number: "1234567890",
        user_address: "Admin Address",
        user_description: "This is Admin account",
        service_title: "Welding Services for Gate Repair",
        service_image: image_welding,
        service_description: "Hire a professional welder to repair your metal gate.",
        service_category: "Welding"
    },

    {
        user_id: 2,
        user_email: "admin2",
        user_password: "admin2",
        user_first_name: "John",
        user_last_name: "Doe",
        user_country: "User Country",
        user_mobile_number: "0987654321",
        user_address: "User Address",
        user_description: "This is a User account",
        service_title: "Welding Services for Gate Repair",
        service_image: image_legal,
        service_description: "Hire a professional welder to repair your metal gate.",
        service_category: "Welding"
    },

]
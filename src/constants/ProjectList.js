import hotel from "../assets/projects/hotel.png";
import food from "../assets/projects/food.png";
import news from "../assets/projects/news.png";

export const ProjectList = [
    {
        id: 1,
        name: "Food Delivery App",
        description:
            "Engineered a full-stack food delivery platform using JavaScript, ReactJS, MongoDB, ExpressJS, NodeJS, andDotenv, handling a 50% increase in daily active users.Improved API response time by 35% through advanced performance optimization and secured sensitive data using Dotenv, leading to a 20% increase in user retention and trust.",
        img: food,
        //max 6 tech stack
        tech: ["Javascript", "Tailwind CSS", "Mongo DB", "Node.js","React.js","Dotenv"],
        source: "https://github.com/Sanidhyavj/Food-Delivery-App",
        demo: "https://food-delivery-frontend-03c4.onrender.com/",
    },
    {
        id: 2,
        name: "Hotel Management App",
        description:
            "Engineered a feature-rich MERN Stack Application with an admin dashboard for CRUD operations, search,review, ratings, comments and admin authorization; increased users by 40%. Developed robust user authentication via Google and traditional methods, enabling extensive profile and user customization utilized Node.js, React.js, Express.js, MongoDB, and Tailwind CSS, improving security and user experience.",
        img: hotel,
        //max 6 tech stack
        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
        ],
        source: "https://github.com/Sanidhyavj/Hotel-Management-Site",
        demo: "http://sanidhya.centralindia.cloudapp.azure.com:3000/",
    },
    {
        id: 3,
        name: "SV News App",
        description:
            "Created a news aggregator using ReactJS and Bootstrap, integrating the Gnews API to deliver real-time news updates, resulting in a 40% increase in user engagement and a 25% boost in session duration.",
        img: news,
        //max 6 tech stack
        tech: ["React.js", "Bootstrap"],
        source: "https://github.com/Sanidhyavj/News-App",
        demo: "https://news-app-bay-three.vercel.app/",
    },
];

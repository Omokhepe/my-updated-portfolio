import {simpleEasyPortfolio, e_learning, movie_stream, healthMeal, todo,
    game,
    imagesShow} from '../assets/images/index.js'

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact Me" },
];

export const techStack = [
    {
        id: 1,
        stack: "Next.js",
        years: 2
    }, {
        id: 2,
        stack: "React.js",
        years: 4
    }, {
        id: 3,
        stack: "JavaScript",
        years: 6
    }, {
        id: 4,
        stack: "TypeScript",
        years: 3
    }, {
        id: 5,
        stack: "HTML",
        years: 6
    }, {
        id: 6,
        stack: "CSS",
        years: 6
    },{
        id: 7,
        stack: "ASP.NET Core",
        years: 2
    },{
        id: 8,
        stack: "AI - Agentic AI",
        years: 1
    },
]

export const projects = [
    {
        id: 1,
        title: 'Healthy Food App',
        description: "Healthy Food App is a service that provides easy to recreate healthy meal options, time of preparation and steps as well as instructions for users who are on the fitness lifestyle track",
        site: 'https://healthy-recipe.vercel.app/',
        image: healthMeal,
        language: 'React.js, JavaScript',
    },{
        id: 2,
        title: 'Skilled e-learning Landing page',
        description: "This is a single page application that shows a sample landing page for e-learning, the application show cases some animations and css",
        site: '/',
        image: e_learning,
        language: 'React.js, CSS',
    },{
        id: 1,
        title: 'Healthy Food App',
        description: "Healthy Food App is a service that provides easy to recreate healthy meal options, time of preparation and steps as well as instructions for users who are on the fitness lifestyle track",
        site: 'https://healthy-recipe.vercel.app/',
        image: simpleEasyPortfolio,
    },
    {
        id: 1,
        title: 'Healthy Food App',
        description: "Healthy Food App is a service that provides easy to recreate healthy meal options, time of preparation and steps as well as instructions for users who are on the fitness lifestyle track",
        site: 'https://healthy-recipe.vercel.app/',
        image: movie_stream,
    },{
        id: 1,
        title: 'Healthy Food App',
        description: "Healthy Food App is a service that provides easy to recreate healthy meal options, time of preparation and steps as well as instructions for users who are on the fitness lifestyle track",
        site: 'https://healthy-recipe.vercel.app/',
        image: todo,
    },{
        id: 1,
        title: 'Healthy Food App',
        description: "Healthy Food App is a service that provides easy to recreate healthy meal options, time of preparation and steps as well as instructions for users who are on the fitness lifestyle track",
        site: 'https://healthy-recipe.vercel.app/',
        image: game,
    },{
        id: 1,
        title: 'Healthy Food App',
        description: "Healthy Food App is a service that provides easy to recreate healthy meal options, time of preparation and steps as well as instructions for users who are on the fitness lifestyle track",
        site: 'https://healthy-recipe.vercel.app/',
        image: imagesShow,
    },
]
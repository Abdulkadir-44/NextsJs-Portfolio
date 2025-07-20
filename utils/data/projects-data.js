import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Fullstack Notes App',
        description: "Notes-App is a note-taking application where users can create accounts, take notes, delete, and edit their notes. The frontend is built with React.js, and the backend uses Express.js. MongoDB is used as the database. It features a responsive and user-friendly interface.",
        tools: ['Express', 'MongoDB',"React","TailwindCSS","ShadCN"],
        role: 'Backend and Frontend Developer',
        code: '',
        demo: '',
        image: ["/profile.jpeg","/profile.jpeg"],
    },
    {
        id: 2,
        name: 'PDF Merge App ',
        description: 'PDF Combiner is a modern and user-friendly desktop application developed in Python that allows you to easily combine multiple PDF files. Select, sort, remove and save files as a single PDF - all with a simple interface!',
        tools: ['Python3', 'PyPDF2', "CustomTkinter", "Tkinter"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        smallImage : true,
        image: ["/project_image/pdfmerge/pdf_image.png"],
    },
    {
        id: 3,
        name: 'ŞanMed Hospital Landing Page ',
        description: 'Hospital Landing Page is a modern and responsive promotional website designed to represent a healthcare institution in a professional and user-friendly manner. Built with Next.js and Tailwind CSS, this single-page application focuses on clean UI, intuitive navigation, and performance optimization.',
        tools: ['Next.js', 'Tailwind CSS', "Shadcn UI", "TypeScript","Bun"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: ["/project_image/hospital/r1.png","/project_image/hospital/r2.png","/project_image/hospital/r3.png","/project_image/hospital/r4.png"],
    },
    {
        id: 4,
        name: 'Study Reminder',
        description: 'Study Reminder is a full-featured application that allows users to plan and track study schedules and tasks, and set reminders. Users can create their study schedules, add tasks and receive notifications at set times. The application is developed with modern web technologies and has both frontend and backend components.',
        tools: ['React', 'Redux/Toolkit', "TailwindCSS", "Framer Motion","Headless UI" , "Node.js & Express","MongoDB & Mongoose","JWT","NodeMailer","bcryptjs","Node-cron"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 5,
        name: 'Movie Explorer',
        description: 'Movie Explorer is a modern and responsive web application developed to search and discover movies and TV shows using the TMDB (The Movie Database) API. The application allows users to explore detailed information about titles, including overviews, release dates, ratings, genres, and more.This project showcases my ability to integrate third-party APIs, manage asynchronous data fetching, and build a fully functional, dynamic web application using modern frontend technologies.',
        tools: ['React', 'TypeScript', "TailwindCSS", "Framer Motion","Axios" , "TMDB API"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: ["/project_image/movie/m1.png","/project_image/movie/m2.png","/project_image/movie/m3.png"],
    },
        
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
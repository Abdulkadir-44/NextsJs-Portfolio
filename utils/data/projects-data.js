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
        image: crefin,
    },
    {
        id: 2,
        name: 'SouthKorea Blog Website ',
        description: 'This project is a simple website that introduces the history, cuisine, and culture of South Korea. React.js was used for the frontend, and Express.js was used for the backend. MongoDB was used as the database. It is a project I completed in my early days, so there are no login features. TailwindCSS was used for the design. The site includes multiple pages and transitions between these pages.',
        tools: ['Reactjs', 'Tailwind CSS', "ExpressJs", "MongoDB"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Chat App',
        description: 'This application is a chat application where users can message each other. Users simply enter room ID values to join the same room and then send messages to each other, enabling communication between devices running on two separate hosts. Socket programming is used for real-time communication. The frontend is built with ReactJS, the backend uses ExpressJS, and TailwindCSS is used for the design.',
        tools: ['React',  'Express',"TailwindCss","Socket.io"],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
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
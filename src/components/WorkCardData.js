import pro1 from "../assets/portfolio.png";
import pro2 from "../assets/CarrerOtaku.png"
import pro3 from "../assets/music1.png"

const WorkCardData = [
    {
        imgsrc: pro1, 
        titel: "Portfolio Website using React",
        desc: "The portfolio website essentially serves as a virtual representation of my skills, qualifications, and creative abilities in the field of technology. It functions as a comprehensive digital resume, providing an in-depth overview of my educational background, past projects, and professional achievements. With an intuitive and visually appealing design, it offers visitors a seamless browsing experience while offering insights into my diverse skill set and areas of expertise.",
        view: "https://portfolio-sharo.vercel.app/",
        source: "https://github.com/Sharo-11/portfolio.git"
    },
    {
        imgsrc: pro2, 
        titel: "CarrerOtaku - Internship & Placement Website",
        desc: "I'm contributing to 'Carrer Otaku,' an upcoming campus-focused internship and placement platform. While the UI was expertly designed using HTML, CSS, and JavaScript by a skilled collaborator, my role revolves around integrating this captivating interface into a robust Flask application and establishing a seamless connection with the platform's database. Currently, the project is in its developmental phase, with continuous enhancements to ensure a user-friendly experience for both students and companies.",
        view: "https://github.com/Sharo-11/CarrerOtaku.git",
        source: "https://github.com/Sharo-11/CarrerOtaku.git"
    },
    {
        imgsrc: pro3, 
        titel: "Music Search Engine",
        desc: "As the name suggests, Music-Search-Engine is an app for searching and playing music (.mp3 files). The song is not currently available on your computer, but you will be able to search and listen to the song with the additional feature. This app uses SoundCloud library to fetch all songs available on SoundCloud and even download those that are available for download there. Even though this option is not available yet, I am still working on it.",
        view: "https://github.com/Sharo-11/Music-Search-Engine.git",
        source: "https://github.com/Sharo-11/Music-Search-Engine.git"
    }
];

export default WorkCardData;
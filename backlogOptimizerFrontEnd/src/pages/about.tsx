import { StickyScroll } from '@/components/ui/sticky-scroll-revel';
import BYU from '@/assets/byu - image.jpg';
import LinearAlgebra from '@/assets/linearAlgebra.jpg';
import Hunter from '@/assets/landscape.jpg'

const content = [
    {
        title: "How it Started",
        description: "This project started as a project for a linear programming course at Brigham Young University. I wanted to create something that would help me manage my gaming backlog, and this is what I came up with.",
        content: (
        <div className="h-full w-full flex items-center justify-center text-white">
            <img src={BYU} alt="Hunter Crandall" className="h-full w-full object-cover object-center" />
        </div>)
    },
    {
        title: "How it Works",
        description: "The app uses an algorithm called the simplex method to prioritize your games based on your available time, budget, and preferences. It takes into account the average completion time of each game, the cost of each game, and your preferred genres.",
        content: (
        <div className="h-full w-full flex items-center justify-center text-white">
            <img src={LinearAlgebra} alt="Hunter Crandall" className="h-full w-full object-cover object-center" />
        </div>
        )
    },
    {
        title: "About the Developer",
        description: "I'm a software developer with a passion for gaming. I built this app to help myself and others manage their gaming backlogs. I hope you find it useful!",
        content: (
        <div className="h-full w-full flex items-center justify-center text-white">
            <img src={Hunter} alt="Hunter Crandall" className="h-full w-full object-cover object-center" />
        </div>
        )
    }
];

function About() {

  return (
    <div className="mt-4 mb-20 mx-1 max-w-5xl items-center justify-center content-center ">
        <h1 className="mb-4 text-3xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight md:leading-normal">
            About
        </h1>
        {/* About the app and it's development */}
        <StickyScroll content={content}/>
        {/* Link to developer website */}
        <div className="mb-4 text-center">
            <p className="text-lg text-neutral-300">
            Check out more of my work at  
            <a
                href="https://huntercrandall.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline ml-1"
            >
                huntercrandall.com
            </a>
            </p>
      </div>
    </div>
  );
}

export default About;
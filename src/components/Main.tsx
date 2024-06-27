import { useEffect } from "react";

type ProjectsType = {
   title: string;
   description: string;
   imgSrc: string;
};

const projects: ProjectsType[] = [
   {
      title: "Conception",
      description:
         "Conception, a visionary platform inspired by Notion's brilliance, brings organization and productivity to the forefront. Built with Next.js prowess, it mirrors its predecessor's essence flawlessly. From crafting scalable code to optimizing client-side performance, Conception ensures a seamless user experience.",
      imgSrc: "/conception.jpg",
   },
   {
      title: "Homely",
      description:
         "Homely is an innovative web application developed using Next.js that mirrors the core functionalities of Airbnb, a leading online marketplace for lodging and tourism experiences. This meticulously crafted platform offers a spectrum of features, empowering users to seamlessly create listings, reserve accommodations, mark favorites, and engage in robust user authentication.",
      imgSrc: "/homely.jpg",
   },
   {
      title: "Intercord",
      description:
         "Intercord is seamless examination platform which offers students an authenticated and powerful experience of exams. This platform aims to bring the power of technology at the students' desk.",
      imgSrc: "/intercord.jpg",
   },
   {
      title: "Hunger Bites",
      description:
         "Hunger Bites, a dynamic platform inspired by the success of Swiggy, brings convenience and flavor to your fingertips. Built with cutting-edge technology React.js, Hunger Bites offers a delightful experience akin to its predecessor. From browsing a diverse array of restaurants to swift and awesome cart feature, Hunger Bites ensures that your cravings are met with efficiency and satisfaction.This innovative clone mirrors Swiggy's essence, making it your go-to destination for culinary adventures.",
      imgSrc: "/hunger-bites.jpg",
   },
];

export const Main = () => {
   useEffect(() => {
      const content: HTMLElement | null = document.querySelector("section");
      let currentPos = window.scrollY;

      const callDistort = function () {
         const newPos = window.scrollY;
         const diff = newPos - currentPos;
         const speed = diff * 0.18;

         // @ts-ignore
         content.style.transform = `skewY(${speed}deg)`;

         currentPos = newPos;
         requestAnimationFrame(callDistort);
      };

      callDistort();
      return () => {};
   }, []);

   return (
      <div>
         <nav className="nav">
            <a href="https://premsapkale.vercel.app" target="_blank">
               Portfolio
            </a>
         </nav>
         <h1 className="mainTitle">All Work in a Glance</h1>
         <div className="content">
            <section className="distort">
               {projects.map((project) => (
                  <div key={project.title} className="projectContainer">
                     <img
                        src={project.imgSrc}
                        alt={project.title}
                        className="projectImg"
                     />
                     <h1 className="projectTitle">{project.title}</h1>
                     <p className="projectDesc">{project.description}</p>
                  </div>
               ))}
            </section>
         </div>
      </div>
   );
};

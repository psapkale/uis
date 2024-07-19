import { useEffect } from "react";
import { projects } from "../common/util";

export const Main = () => {
   useEffect(() => {
      const content: HTMLElement | null = document.querySelector("section");
      let currentPos = window.scrollY;

      const callDistort = function () {
         const newPos = window.scrollY;
         const diff = newPos - currentPos;
         const speed = diff * -0.18;

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
                     <div className="projectTitleContainer">
                        <h1 className="projectTitle">{project.title}</h1>
                        <div className="projectButtonContainer">
                           <a href={project.codeRef} target="_blank">
                              Code
                           </a>
                           <a href={project.liveRef} target="_blank">
                              Live
                           </a>
                        </div>
                     </div>
                     <p className="projectDesc">{project.description}</p>
                  </div>
               ))}
            </section>
         </div>
      </div>
   );
};

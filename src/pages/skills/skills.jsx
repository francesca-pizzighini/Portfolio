import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import "./skills.scss";

function Skills() {
  const isEnglish = useOutletContext();

  const [currentIsEnglish, setCurrentIsEnglish] = useState(isEnglish);

  useEffect(() => {
    setCurrentIsEnglish(isEnglish);
  }, [isEnglish]);

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>
            {currentIsEnglish
              ? "Skills | Francesca Pizzighini"
              : "Competenze | Francesca Pizzighini"}
          </title>
          <meta
            name="description"
            content="This is Francesca Pizzighini's portfolio as a front-end developer. This skills page shows what i've studied so far and what languages i know. It is constantly updated and will get longer as soon as i learn more. The projects page show my most works, from my first website using Javascript (a simple counter i use myself when i knit), to the last ones which implements React as this one. I hope you'll like my works. Feel free to contact me through the link in the contact page if you want to work toghether."
          ></meta>
          <meta
            name="keywords"
            content="portfolio, web-developer, francesca-pizzighini, front-end-developer, coding, skills, languages, coding-languages, responsive design, react, javascript, html, css, scss, sass, bootstrap, github"
          ></meta>
        </Helmet>
      </HelmetProvider>

      <section className="lang-framework-skill">
        <div className="languages">
          <h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z" />
            </svg>
            {currentIsEnglish ? "Languages" : "Linguaggi"}
          </h3>
          <ul>
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
          </ul>
        </div>

        <div className="frameworks">
          <h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"
              />
              <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.52 6.52 0 0 0 1.814 9H2.5q.186 0 .358.043a5.52 5.52 0 0 1 3.185-3.185A1.5 1.5 0 0 1 6 5.5zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.52 6.52 0 0 1 2.72 3.5H13.5q-.185 0-.358.043a5.52 5.52 0 0 0-3.185-3.185" />
            </svg>
            {currentIsEnglish ? "Frameworks" : "Framework"}
          </h3>
          <ul>
            <li>React</li>
          </ul>
        </div>

        <div className="skills">
          <h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" />
              <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" />
            </svg>
            {currentIsEnglish ? "Skills" : "Competenze"}
          </h3>
          <ul>
            <li>SASS</li>
            <li>GitHub</li>
            <li>Responsive design</li>
            <li>Bootstrap 5</li>
            <li>Tailwind</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Skills;

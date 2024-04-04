import { Helmet, HelmetProvider } from "react-helmet-async"

function Skills() {
  return (
    <div >
      <HelmetProvider>
        <Helmet>
          <title>Skills | Francesca Pizzighini</title>
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
      
    skills page
    </div>
  )
}

export default Skills;

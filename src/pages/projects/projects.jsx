import { Helmet, HelmetProvider } from "react-helmet-async";
import SingleProject from "../../components/singleProject/singleProject";
import "./projects.scss";

function Projects() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Projects | Francesca Pizzighini</title>
          <meta
            name="description"
            content="This is Francesca Pizzighini's portfolio as a front-end developer. This projects page is dedicated to  my works, from the first website i made using Javascript (a simple counter i use myself when i knit), to the last ones which implements React as this one. I hope you'll like my works. Feel free to contact me through the link in the contact page if you want to work toghether."
          ></meta>
          <meta
            name="keywords"
            content="portfolio, web-developer, francesca-pizzighini, front-end-developer, coding, responsive design, react, javascript, html, css, scss, knitting-counter, counter, recipes, vegetarian-reccipes, vegan-recipes, gluten-free-recipes, climate-change, climate-change-data, climate-change-charts "
          ></meta>
        </Helmet>
      </HelmetProvider>

      <section className="all-projects">
        <SingleProject
          websiteName="There is no planet B"
          description="2024 / Information on climate change"
          url="https://there-is-no-planet-b.netlify.app/"
        />
        <SingleProject
          websiteName="Foodie - Healthier life"
          description="2024 / Vegetarian cuisine"
          url="https://foodie-veggie.netlify.app/"
        />
        <SingleProject
          websiteName="Knitting counter"
          description="2023 / Counter application"
          url="https://francesca-pizzighini.github.io/KnittingCounter/"
        />
        <SingleProject
          websiteName="MeditActive"
          description="2023 / Meditation website"
          url="https://francesca-pizzighini.github.io/MeditActive/"
        />
      </section>
    </>
  );
}

export default Projects;

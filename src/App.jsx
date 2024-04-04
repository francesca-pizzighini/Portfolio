import { Helmet, HelmetProvider } from "react-helmet-async"

function App() {

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Francesca Pizzighini</title>
          <meta 
            name="description"
            content="This is Francesca Pizzighini's portfolio as a front-end developer. The projects page show my works, from my first website using Javascript (a simple counter i use myself when i knit), to the last ones which implements React as this one. I hope you'll like my works.
            The skills page shows what i've studied so far. Feel free to contact me through the link in the contact page if you want to work toghether."
          ></meta>
          <meta 
            name="keywords"
            content="portfolio, web-developer, francesca-pizzighini, front-end-developer, coding, bio, biography, responsive design, react, javascript, html, css, scss, sass, bootstrap, github"
          ></meta>
        </Helmet>
      </HelmetProvider>
      home page
    </div>
  )
}

export default App

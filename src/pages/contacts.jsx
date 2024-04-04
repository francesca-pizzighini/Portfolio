import { Helmet, HelmetProvider } from "react-helmet-async"

function Contacts() {
  return (
    <div >
      <HelmetProvider>
        <Helmet>
          <title>Contacts | Francesca Pizzighini</title>
          <meta 
            name="description"
            content="This is Francesca Pizzighini's portfolio as a front-end developer. The projects page show my most works, from my first website using Javascript (a simple counter i use myself when i knit), to the last ones which implements React as this one. I hope you'll like my works. Feel free to contact me through the link in this contact page if you want to work toghether."
          ></meta>
          <meta 
            name="keywords"
            content="portfolio, web-developer, francesca-pizzighini, front-end-developer, coding, responsive design, react, javascript, html, css, scss, contacts, linkedIn, mail, github"
          ></meta>
        </Helmet>
      </HelmetProvider>

      contacts page
    </div>
  )
}

export default Contacts;

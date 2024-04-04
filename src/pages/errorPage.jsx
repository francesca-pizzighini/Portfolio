import { Helmet, HelmetProvider } from "react-helmet-async"

function ErrorPage() {
  return (
    <div className='inside'>
      <div className='figure-one'></div>
      <div className='figure-two'></div>
      <div className='figure-three'></div>
      <HelmetProvider>
        <Helmet>
          <title>Error | Francesca Pizzighini</title>
          <meta 
            name="description"
            content="This is Francesca Pizzighini's portfolio as a front-end developer. You seem to have encountered an error, please follow the link in the page to come back viting the other pages. The projects page show my works, from my first website using Javascript (a simple counter i use myself when i knit), to the last ones which implements React as this one. I hope you'll like my works.
            The skills page shows what i've studied so far. Feel free to contact me through the link in the contact page if you want to work toghether."
          ></meta>
          <meta 
            name="keywords"
            content="portfolio, web-developer, francesca-pizzighini, front-end-developer, coding, responsive design, react, javascript, html, css, scss, error, error-encountered, error-page"
          ></meta>
        </Helmet>
      </HelmetProvider>

    error page
    </div>
  )
}

export default ErrorPage;
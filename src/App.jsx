import { Helmet, HelmetProvider } from "react-helmet-async";
import "./app.scss";

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

      <section class="biography">
        <p class="bio">
          Born in 1999 in Bergamo, Italy. <br />
          Since I was a child I looked with amazement at computers and
          technology but I really approached coding only by chance, taking a
          course that seemed interesting at university even though it was quite
          far from my field of study. Now I have a bachelor's degree in
          psychology, but I've fallen in love with web development. <br />
          I realized pretty fast that what I wanted to do in my life was
          programmer’s routine: setting a goal, struggling when things don't
          work out, and continuing until the problem is solved. So I decided to
          roll up my sleeves and start to really study in deep what it means to
          build website from scratch, and I chose Start2Impact University for
          this interesting journey. <br />
          Now, even though I still have a long way to go and I can’t wait to
          learn more and be better, I finally feel prepared to call myself a
          front-end developer. You can see my works and judge by yourself in the
          projects page.
        </p>
      </section>
    </div>
  );
}

export default App;

import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import "./app.scss";

function App() {
  const isEnglish = useOutletContext();

  const [currentIsEnglish, setCurrentIsEnglish] = useState(isEnglish);

  useEffect(() => {
    setCurrentIsEnglish(isEnglish);
  }, [isEnglish]);

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

      <section className="biography">
        {currentIsEnglish ? (
          <p className="bio">
            Born in 1999 in Bergamo, Italy. <br />
            Since I was a child I looked with amazement at computers and
            technology but I really approached coding only by chance, taking a
            course that seemed interesting at university even though it was
            quite far from my field of study. Now I have a bachelor's degree in
            psychology, but I've fallen in love with web development. <br />
            I realized pretty fast that what I wanted to do in my life was
            programmer’s routine: setting a goal, struggling when things don't
            work out, and continuing until the problem is solved. So I decided
            to roll up my sleeves and start to really study in deep what it
            means to build website from scratch, and I chose Start2Impact
            University for this interesting journey. <br />
            Now, even though I still have a long way to go and I can’t wait to
            learn more and be better, I finally feel prepared to call myself a
            front-end developer. You can see my works and judge by yourself in
            the projects page.
          </p>
        ) : (
          <p className="bio">
            Sono nata a Bergamo nel 1999. <br />
            Da quando ho memoria sono sempre stata affascinata dai computer e
            dalla tecnologia in generale, ma sono davvero entrata in contatto
            col mondo del coding solo per caso, quando ho scelto un corso in
            università che sembrava interessante nonostante fosse molto lontano
            dal mio campo di studi. Adesso mi ritrovo con una laurea in
            psicologia, ma mi sono innamorate dello sviluppo web. <br />
            Ho realizzato piuttosto velocemente che quello che volevo fare nella
            mia vita era la routine del programmatore, mi diverto a trovare un
            obiettivo, litigare quando le cose non escono come vorrei, e
            continuare finché risolvo il problema. Ho quindi deciso di
            rimboccarmi le maniche e cominciare a studiare sul serio come si
            costruisce un sito web da zero, e per guidarmi in questo viaggio hot
            celto Start2Imact University. <br />
            Ora, anche se so di avere ancora moltissime cose che non vedo l’ora
            di approfondire e migliorare, finalmente mi sento a mio agio a
            definirmi front-end developer. I miei lavori sono visibili nella
            pagina dedicata ai progetti, giudicate voi stessi.
          </p>
        )}
      </section>
    </div>
  );
}

export default App;

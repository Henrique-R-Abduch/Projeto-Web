import React from 'react';

function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BFTECH</title>
        <link rel="stylesheet" href="./public/styles/reset.css" />
        <link rel="stylesheet" href="./public/styles/index.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main id="root">
          <section id="material">
            <div className="user_info">
              <img className="avatar_icon" src="./public/img/fox-icon.png" alt="Icone" />
              <div>
                <h1>Usúario: BFTECH</h1>
                <p>1800 points</p>
              </div>
            </div>

            <div className="material_description">
              <h1>Aula atual: Finanças básicas</h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis inventore, placeat obcaecati incidunt aliquam non est
                exercitationem cum nesciunt facere perspiciatis quo iusto
                dolorum odit repudiandae dolorem quisquam a neque.
              </p>

              <div className="flex_end">
                <button>Entendi</button>
              </div>

              <button id="button_logout">Logout</button>
            </div>
          </section>

          <section id="lessons">
            <div className="lessonMap"></div>
          </section>

          <section id="gamification"></section>
        </main>

        <script src="./public/js/index.js"></script>
      </body>
    </html>
  );
}

export default App;
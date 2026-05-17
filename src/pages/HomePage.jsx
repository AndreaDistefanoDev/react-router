import Banner from "../components/Banner";

export default function HomePage() {
  return (
    <>
      <main>
        <Banner />
        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Vestora: il tuo stile casual urban</h1>
                <p>
                  Scopri il meglio dell’abbigliamento casual urban su Vestora.
                  Una selezione di capi, sneakers e accessori pensati per chi
                  ama uno stile moderno, comodo e sempre attuale.
                </p>
                <p>
                  Rinnova il tuo guardaroba con felpe, t-shirt, jeans, cargo,
                  giacche e outfit perfetti per il tempo libero e la vita di
                  tutti i giorni. Su Vestora trovi look versatili e di tendenza,
                  ideali per esprimere la tua personalità con semplicità e
                  carattere.
                </p>
                <p>
                  Dallo streetwear ai capi essenziali, ogni collezione unisce
                  comfort, qualità e stile contemporaneo.
                </p>
                <p>Vestora — indossa il tuo stile.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

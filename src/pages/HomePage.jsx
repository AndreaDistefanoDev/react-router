
import AppHeader from '../components/AppHeader'

export default function HomePage() {


    return (

        <>

            <AppHeader />
            <main>
                <div className="img-banner p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <p className="">BENVENUTO NELLO SHOP!</p>
                        <button className="btn btn-dark btn-lg" type="button">
                            Acquista ora
                        </button>
                    </div>
                </div>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Vestora: il tuo stile casual urban</h1>
                                <p>Scopri il meglio dell’abbigliamento casual urban su Vestora.
                                    Una selezione di capi, sneakers e accessori pensati per chi ama uno stile moderno, comodo e sempre attuale.</p>
                                <p>Rinnova il tuo guardaroba con felpe, t-shirt, jeans, cargo, giacche e outfit perfetti per il tempo libero e la vita di tutti i giorni. Su Vestora trovi look versatili e di tendenza, ideali per esprimere la tua personalità con semplicità e carattere.</p>
                                <p>Dallo streetwear ai capi essenziali, ogni collezione unisce comfort, qualità e stile contemporaneo.</p>
                                <p>Vestora — indossa il tuo stile.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className='bg-light'>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 d-flex">
                        <div className="col">
                            <h5>Contatti</h5>
                            <p>Email: info@vestora.com</p>
                            <p>Telefono: +39 02 1234567</p>
                            <p>Indirizzo: Via Roma 123, Milano</p>
                        </div>
                        <div className="col">
                            <h5>Quick Links</h5>
                            <ul className='list-unstyled d-flex flex-column gap-2'>
                                <li><a href="#" className='text-decoration-none text-reset'>Home</a></li>
                                <li><a href="#" className='text-decoration-none text-reset'>Prodotti</a></li>
                                <li><a href="#" className='text-decoration-none text-reset'>About</a></li>
                            </ul>
                        </div>

                        <div className="col">
                            <h5>Seguici sui social</h5>
                            <ul className='list-unstyled d-flex flex-column gap-2'>
                                <li><a href="#" className='text-decoration-none text-reset'><i class="bi bi-facebook"></i> Facebook</a></li>
                                <li><a href="#" className='text-decoration-none text-reset'><i class="bi bi-instagram"></i> Instagram</a></li>
                                <li><a href="#" className='text-decoration-none text-reset'><i class="bi bi-twitter"></i> Twitter</a></li>
                                <li><a href="#" className='text-decoration-none text-reset'><i class="bi bi-tiktok"></i> TikTok</a></li>
                            </ul>

                        </div>
                    </div>
                </div>



            </footer >


        </>
    )
}
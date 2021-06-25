import React from 'react'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import { Map, MarkerLayer, Marker, ZoomControl, MouseControl, CompassControl, KeyboardControl } from 'react-mapycz'

import Layout from '../../components/Layout'

export const ContactPage = ({}) => { 
  return (
    <Layout>
     <main className="contact-main">
     <div className="contact-first">
       <div className="basic-contacts-container">
         <div className="store-image-container">
           <img className="store-image" src="../assets/img/store-image.png" alt="obrázek provozovny Optika Volyně" />
           <div className="contact-heading">
             <p>Kontakty</p>
           </div>
         </div>
         <div className="basic-contacts-data">
           <div className="basic-contacts">
             <div className="basic-contact-container">
               <div>
                 <img src="../assets/img/phone-icon.svg" alt="phone-icon" />
               </div>
               <div className="basic-contact">
                 <h2>Zavolejte nám</h2>
                 <a href="tel:+420773201372">+420604802888</a>
               </div>
             </div>
             <div className="basic-contact-container">
               <div>
                 <img src="../assets/img/mail-icon.svg" alt="mail-icon" />
               </div>
               <div className="basic-contact">
                 <h2>Napište nám</h2>
                 <a href="mailto:vetrovsky.jan@gmail.com">optikavolyne@seznam.cz</a>
               </div>
             </div>
             <div className="basic-contact-container">
               <div>
                 <img src="../assets/img/location-icon.svg" alt="location-icon" />
               </div>
               <div className="basic-contact">
                 <h2>Adresa</h2>
                 <p>náměstí Svobody 14, Volyně, 387&nbsp;01</p>
               </div>
             </div>
           </div>
         </div>
         <div className="basic-contacts-data open-time">
           <div className="basic-contact-container">
             <div>
               <img src="../assets/img/time-icon.svg" alt="time-icon" />
             </div>
             <div className="basic-contact">
               <h2>Otevírací doba</h2>
               <div className="day">
                 <p>pondělí:</p>
                 <p>8:30–11:30, 12:30–16:00</p>
               </div>
               <div className="day">
                 <p>úterý:</p>
                 <p>8:30–11:30, 12:30–16:00</p>
               </div>
               <div className="day">
                 <p>středa:</p>
                 <p>8:30–11:30, 12:30–17:00</p>
               </div>
               <div className="day">
                 <p>čtvrtek:</p>
                 <p>12:30–17:00</p>
               </div>
               <div className="day">
                 <p>pátek:</p>
                 <p>8:30–11:30, 12:30–15:00</p>
               </div>
               <div className="day">
                 <p>sobota:</p>
                 <p>Po telefonické dohodě</p>
               </div>
               <div className="day">
                 <p>neděle:</p>
                 <p>Zavřeno</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <section className="get-there">
       <div className="get-there-desc-container">
         <div className="get-there-desc">
           <h2>Jak se k nám dostat?</h2>
           <ul>
             <li><strong style={{color: '#77A02E'}}>Pěšky:</strong> Nacházíme se ve Volyni přímo na náměstí</li>
             <li><strong style={{color: '#77A02E'}}>Autem:</strong> Před optikou je možné zaparkovat. GPS souřadnice jsou: E13.8851194, N49.1658592</li>
             <li><strong style={{color: '#77A02E'}}>Autobusem:</strong> 50 metrů od optiky je volyňská autobusová zastávka, kde staví lokální i dálkové spoje</li>
           </ul>
         </div>
       </div>
       <div className="mapa">
            <Map center={{lat: 49.16600116945006, lng: 13.885240415576186}} height="100%">
              <KeyboardControl/>
              <ZoomControl/>
              <MouseControl zoom={true} pan={true} wheel={true}/>
              <CompassControl right={10} top={50}/>
              <MarkerLayer>
                <Marker coords={{lat: 49.16600116945006, lng: 13.885240415576186}} />
              </MarkerLayer>
            </Map>
          </div>
     </section>
     <div className="business-card">
       <p>Naše vizitka ke stažení</p>
       <a href="../assets/img/vizitka.png" download>
         <img className="business-card-itself" alt="vizitka ke stažení" src="../assets/img/vizitka.png" />
         <img className="download-icon" alt="donwload-icon" src="../assets/img/download.svg" />
       </a>
     </div>
     <div className="contact-second">
       <div className="form-and-location">
         <div className="contact-form">
           <h2>Kontaktujte nás</h2>
           <form>
             <div className="user-data">
               <div className="user-data-entity">
                 <label>Celé jméno</label>
                 <input type="text" className="name-input" name="name" placeholder="Jméno a příjmení" />
               </div>
               <div className="user-data-entity">
                 <label>Email</label>
                 <input type="text" className="email-input" name="email" placeholder="Vaše emailová adresa" />
               </div>
             </div>
             <div className="message">
               <label>Zpráva</label>
               <textarea name="zprava" placeholder="Napište nám zprávu" defaultValue={""} />
             </div>
             <div className="send">
               <input className="button" type="submit" name="submit" />
             </div>
           </form>
         </div>
         <div className="location">
           <div className="tax-data">
             <h2>Fakturační údaje</h2>
             <p>Bc. Jitka Hronková</p>
             <p>Na Ostrovci 25<br />Volyně, 387 01<br />IČ: 02835754<br />DIČ: CZ7561022326</p>
             <p>Úřad příslušný podle §71 odst.2 živnostenského zákona: Městský úřad Strakonice</p>
           </div>
         </div>
       </div>
     </div>
     <div className="info-footer-container">
       <div className="info-footer">
         <div className="info-contacts">
           <div className="info-contact">
             <img alt="person-icon" src="../assets/img/person-icon.png" />
             <p>Bc. Jitka Hronková</p>
           </div>
           <div className="info-contact">
             <img alt="info-icon" src="../assets/img/info-icon.png" />
             <p>IČO: 45645687</p>
           </div>
           <div className="info-contact">
             <img alt="location-icon" src="../assets/img/location-icon.png" />
             <p>nám. Svobody 14, Volyně, 387 01</p>
           </div>
         </div>
         <div className="aditional-links">
           <a href="/cookies/">Používání cookies</a>
           <a href="/autorska-prava/">Autorská práva</a>
         </div>
         <a href="https://www.facebook.com/O%C4%8Dn%C3%AD-optika-Volyn%C4%9B-191635897936682/" target="_blank"><img className="fb-icon" alt="facebook-icon" src="../assets/img/facebook-icon.png" /></a>
       </div>
     </div>
   </main>
   <Helmet>
      <script src={withPrefix('../scripts/hamburger.js')} type="text/javascript" />
    </Helmet>
    </Layout>
)
}

export default ContactPage

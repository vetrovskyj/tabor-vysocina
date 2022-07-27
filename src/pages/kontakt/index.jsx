import React from 'react'

import Layout from '../../components/Layout'
import Helmet from "react-helmet"
import { Map, MarkerLayer, Marker, ZoomControl, MouseControl, CompassControl, KeyboardControl } from 'react-mapycz'

export const Kontakt = ({
}) => {
  function sendEmail(e) {
    e.preventDefault();

    const nameAlert = document.querySelector('.alert-name');
    const emailAlert = document.querySelector('.alert-email');
    const success = document.querySelector('.alert-success');

    function validateName() {
      const nameInput = document.querySelector('.name-input');
      const name = nameInput.value;

      if (!name.match(/^\W*([A-ZĚŠČŘŽÝÁÍÉa-zěščřžýáíé]+(\W+|$)){1,4}$/)) {
        nameAlert.classList.add('alert-name');
        nameAlert.innerText = '⚠ Zadejte jméno a příjmení (max 4 slova)';
        return false;
      }

      nameAlert.innerText = '';
      return true;
    }

    function validateEmail() {
      const emailInput = document.querySelector('.email-input');
      const email = emailInput.value;

      if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailAlert.classList.add('alert-email');
        emailAlert.innerText = '⚠ Prosím zadejte platný email';
        return false;

      }

      emailAlert.innerText = '';
      return true;

    }

    if (validateName() && validateEmail()) {
      success.classList.add('alert-success');
      success.innerText = 'Email byl úspěšně odeslán';
      setTimeout(() => {
        success.innerText = '';
      }, 5000);

      /*emailjs.sendForm('service_o8shb7p', 'template_v13g6dh', e.target, 'user_wiV7wq7ZpAMgeS9KKMtWf')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });*/
    };
  }
  return (
    <Layout>
      <Helmet
        title={`Kontakt | Tábor Vysočina 3. turnus`}
        meta={[
          {
            name: `description`,
            content: 'Kontakty a další informace o táboře Vysočina 3. turnus v Novém Městě na Moravě',
          },
          {
            name: "keywords",
            content: 'Tábor, Vysočina, PČR, Policie, Dětský tábor, Nové Město na Moravě, 3. turnus, Kontakty, adresa, mapa',
          },
        ]} />
      <main className="telo telo-kontakt">
        <div className="kontakt scroll-reveal-contact">
          <div className="adress">
            <div>
              <h1 className="titulek1">Kde nás najdete?</h1>
            </div>
            <div id="map">
              <Map center={{ lat: 49.5748611, lng: 16.0644292 }} height="100%" zoom={14}>
                <KeyboardControl />
                <ZoomControl />
                <MouseControl zoom={true} pan={true} wheel={true} />
                <CompassControl right={10} top={50} />
                <MarkerLayer>
                  <Marker coords={{ lat: 49.5748611, lng: 16.0644292 }} />
                </MarkerLayer>
              </Map>
            </div>
            <div className="adresa">
              <p>Adresa:</p>
              <p> Lesní 66, Nové Město na Moravě, 592 31</p>
            </div>
          </div>
          <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} onload="if(submitted) {window.location='../kontakt/';}" />
          <div className="formular scroll-reveal-contact">
            <h1 className="titulek2">Napište nám email</h1>
            <form className="pole" onSubmit={sendEmail}>
              <input className="name-input" id="jmeno" type="text" name="entry.1230703347" placeholder="Jméno a příjmení" />
              <input className="email-input" id="email" name="entry.977340822" type="email" placeholder="Vaše emailová adresa" />
              <input id="predmet" type="text" name="entry.27718538" placeholder="Předmět zprávy" />
              <textarea id="zprava" name="entry.342859044" placeholder="Napište nám zprávu" required defaultValue={""} />
              <div id="button">
                <input type="submit" defaultValue="Odeslat" name="submit" className="tlacitko-formular" />
              </div>
              <p className="alert-name"></p>
              <p className="alert-email"></p>
              <p className="alert-success"></p>
            </form>
          </div>
        </div>
        <div className="contacts scroll-reveal-contact">
          <div className="rotation-back">
            <div className="contact">
              <img src="../../img/man-in-suit-and-tie.svg" width={50} alt="person icon" />
              <p className="contact-entity"><strong>Dominik Brych</strong></p>
            </div>
            <div className="contact">
              <img src="../../img/cell-phone.svg" width={50} alt="cell phone icon" />
              <a className="contact-entity" href="tel:+420773201372"><strong>+420773201372</strong></a>
            </div>
            <div className="contact">
              <img src="../../img/email.svg" width={50} alt="envelope icon" />
              <a className="contact-entity" href="mailto:vetrovsky.jan@gmail.com"><strong>vetrovsky.jan@gmail.com</strong></a>
            </div>
            <div className="contact">
              <img src="../../img/information-button.svg" width={50} alt="information icon" />
              <p className="contact-entity">Zřizovatel: <strong>PČR Praha</strong></p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Kontakt
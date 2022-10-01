import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import GalleryCard2 from '../components/gallery-card2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Mariage Alice et Ronan - 10 juin 2023</title>
        <meta
          name="description"
          content="Mariage Alice et Ronan - 10 juin 2023"
        />
        <meta
          property="og:title"
          content="Mariage Alice et Ronan - 10 juin 2023"
        />
        <meta
          property="og:description"
          content="Mariage Alice et Ronan - 10 juin 2023"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/70dba510-eb3b-4006-adeb-8d547e9dc0b9/24c1f417-a10b-48fa-a3de-b493a2eff7bc?org_if_sml=1"
        />
      </Helmet>
      <header data-role="Accordion" className="home-header">
        <a href="#hero" className="home-link">
          <img
            alt="logo"
            src="/playground_assets/logo.svg"
            loading="eager"
            className="home-image"
          />
        </a>
        <div className="home-separator"></div>
        <nav className="home-nav">
          <nav className="home-nav1">
            <a href="#programme" className="home-link01">
              Programme
            </a>
            <a href="#access" className="home-link02">
              Accès
            </a>
            <a href="#hebergements" className="home-link03">
              Hébergements
            </a>
            <a href="#galerie" className="home-link04">
              Galerie
            </a>
            <a
              href="https://forms.gle/s4KG3VForG3LvPsPA"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link05"
            >
              Confirmer ma présence
            </a>
          </nav>
        </nav>
        <div data-type="AccordionHeader" className="home-accordion-header">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-type="AccordionContent" className="home-accordion-content">
          <nav className="home-nav2">
            <a href="#programme" className="home-link06">
              Programme
            </a>
            <a href="#access" className="home-link07">
              Accès
            </a>
            <a href="#hebergements" className="home-link08">
              Hébergements
            </a>
            <a href="#galerie" className="home-link09">
              Galerie
            </a>
            <a
              href="https://forms.gle/s4KG3VForG3LvPsPA"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link10"
            >
              Confirmer ma présence
            </a>
          </nav>
        </div>
      </header>
      <section id="hero" className="home-hero"></section>
      <section id="programme" className="home-programme">
        <h1 className="home-text h1-Title">Programme</h1>
        <span className="home-text01">
          <span>Nous nous réjouissons de célébrer ces moments avec vous</span>
          <br></br>
        </span>
        <div className="home-container01">
          <div className="home-step">
            <div className="home-container02">
              <div className="home-line"></div>
              <div className="home-container03">
                <img
                  alt="image"
                  src="/playground_assets/church-200h.png"
                  className="home-image1"
                />
              </div>
              <div className="home-line1"></div>
            </div>
            <div className="home-container04">
              <span className="home-text04">
                <span>Samedi 10 juin</span>
                <br></br>
              </span>
              <h1 className="home-text07">15:00</h1>
              <h2 className="home-text08">Cérémonie Religieuse</h2>
              <span className="home-text09">
                Eglise Notre-Dame-de-Grâce, Barbentane
              </span>
              <a
                href="https://goo.gl/maps/xk95rTdnMxjpxypg9"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link11"
              >
                Ouvrir dans Maps
              </a>
            </div>
          </div>
          <div className="home-step1">
            <div className="home-container05">
              <div className="home-line2"></div>
              <div className="home-container06">
                <img
                  alt="image"
                  src="/playground_assets/cocktail-200h.png"
                  className="home-image2"
                />
              </div>
              <div className="home-line3"></div>
            </div>
            <div className="home-container07">
              <span className="home-text10">
                <span>Samedi 10 juin</span>
                <br></br>
              </span>
              <h1 className="home-text13">17:30</h1>
              <h2 className="home-text14">Réception &amp; Soirée</h2>
              <span className="home-text15">
                <span className="home-text16">Mas de Mauléon, Tarascon</span>
                <br></br>
              </span>
              <div className="home-container08">
                <a
                  href="https://goo.gl/maps/joRLYBr2x5B6NVVM7"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link12"
                >
                  Ouvrir dans Maps
                </a>
              </div>
            </div>
          </div>
          <div className="home-step2">
            <div className="home-container09">
              <div className="home-line4"></div>
              <div className="home-container10">
                <img
                  alt="image"
                  src="/playground_assets/pool-party-200h.png"
                  className="home-image3"
                />
              </div>
              <div className="home-line5"></div>
            </div>
            <div className="home-container11">
              <span className="home-text18">
                <span>Dimanche 11 juin</span>
                <br></br>
              </span>
              <h1 className="home-text21">11:00</h1>
              <h2 className="home-text22">
                <span>Brunch &amp; </span>
                <span>Pool Party</span>
              </h2>
              <span className="home-text25">
                <span className="home-text26">Mas de Mauléon, Tarascon</span>
                <br></br>
              </span>
              <div className="home-container12">
                <a
                  href="https://goo.gl/maps/joRLYBr2x5B6NVVM7"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link13"
                >
                  Ouvrir dans Maps
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://forms.gle/s4KG3VForG3LvPsPA"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link14"
        >
          Confirmer ma présence
        </a>
      </section>
      <section className="home-divider"></section>
      <section id="access" className="home-acces">
        <h1 className="home-text28 h1-Title">
          <span>Accès</span>
          <br></br>
        </h1>
        <span className="home-text31">Adresses et temps de trajets</span>
        <div className="home-container13">
          <div className="home-container14">
            <div className="home-container15">
              <div className="home-container16">
                <div className="home-container17">
                  <svg viewBox="0 0 1024 1024" className="home-icon2">
                    <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                  </svg>
                  <h2 className="home-text32">Eglise</h2>
                  <span className="home-text33">
                    <span>Eglise Notre-Dame-de-Grâce, </span>
                    <span>Rue Grande, 13570 Barbentane</span>
                  </span>
                  <div className="home-container18">
                    <a
                      href="https://goo.gl/maps/xk95rTdnMxjpxypg9"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link15"
                    >
                      Ouvrir dans Maps
                    </a>
                  </div>
                </div>
              </div>
              <div className="home-container19">
                <AppComponent
                  link_text="https://www.google.fr/maps/dir/Avignon+Gare+TGV,+Avignon/Eglise+Notre-Dame-de-Gr%C3%A2ce,+Rue+Grande,+13570+Barbentane/@43.9126569,4.7610322,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12b5ebdedeecadd1:0xf70f828e00d8389c!2m2!1d4.7854499!2d43.9225464!1m5!1m1!1s0x12b5e9c0bca6ae2b:0x3e7623917628d52e!2m2!1d4.7477091!2d43.8986239!3e0"
                  rootClassName="app-component-root-class-name"
                ></AppComponent>
                <AppComponent
                  From="Depuis Marseille"
                  duration="1h30"
                  link_text="https://www.google.fr/maps/dir/Eglise+Notre-Dame-de-Gr%C3%A2ce,+Rue+Grande,+13570+Barbentane/Marseille/@43.6028418,4.7710292,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12b5e9c0bca6ae2b:0x3e7623917628d52e!2m2!1d4.7477091!2d43.8986239!1m5!1m1!1s0x12c9bf4344da5333:0x40819a5fd970220!2m2!1d5.36978!2d43.296482!3e0"
                  rootClassName="app-component-root-class-name1"
                ></AppComponent>
              </div>
            </div>
            <div className="home-container20">
              <div className="home-container21">
                <div className="home-container22">
                  <svg viewBox="0 0 1024 1024" className="home-icon4">
                    <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                  </svg>
                  <h2 className="home-text36">Mas de Mauléon</h2>
                  <span className="home-text37">
                    Lieu dit Mas de Mauléon, Route Nationale 570, 13150 Tarascon
                  </span>
                  <div className="home-container23">
                    <a
                      href="https://goo.gl/maps/joRLYBr2x5B6NVVM7"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link16"
                    >
                      Ouvrir dans Maps
                    </a>
                  </div>
                </div>
              </div>
              <div className="home-container24">
                <AppComponent
                  From="Depuis l'Eglise"
                  duration="20 minutes"
                  link_text="https://www.google.fr/maps/dir/Eglise+Notre-Dame-de-Gr%C3%A2ce,+Rue+Grande,+13570+Barbentane/43.8618451,4.7283243/Mas+de+mauleon,+Route+Nationale+570,+Tarascon/@43.8399579,4.7037129,12.3z/data=!4m15!4m14!1m5!1m1!1s0x12b5e9c0bca6ae2b:0x3e7623917628d52e!2m2!1d4.7477091!2d43.8986239!1m0!1m5!1m1!1s0x12b5ddc0be36a3a7:0xa7deaddd4f4cf1!2m2!1d4.7071719!2d43.7881124!3e0"
                  rootClassName="app-component-root-class-name2"
                ></AppComponent>
                <AppComponent
                  From="Vers la Gare d'Avignon TGV"
                  duration="25 minutes"
                  link_text="https://www.google.fr/maps/dir/Mas+de+mauleon,+Route+Nationale+570,+Tarascon/Avignon+Gare+TGV,+Avignon/@43.8561681,4.680742,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12b5ddc0be36a3a7:0xa7deaddd4f4cf1!2m2!1d4.7071719!2d43.7881124!1m5!1m1!1s0x12b5ebdedeecadd1:0xf70f828e00d8389c!2m2!1d4.7854499!2d43.9225464!3e0"
                  rootClassName="app-component-root-class-name3"
                ></AppComponent>
                <AppComponent
                  From="Vers Marseille"
                  duration="1h30"
                  link_text="https://www.google.fr/maps/dir/Mas+de+mauleon,+Route+Nationale+570,+Tarascon/Marseille/@43.5413038,4.7260151,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12b5ddc0be36a3a7:0xa7deaddd4f4cf1!2m2!1d4.7071719!2d43.7881124!1m5!1m1!1s0x12c9bf4344da5333:0x40819a5fd970220!2m2!1d5.36978!2d43.296482!3e0"
                  rootClassName="app-component-root-class-name4"
                ></AppComponent>
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://docs.google.com/spreadsheets/d/11_g2MmyoPR7kYo6RSYc3SG2bVHcrJves7Xyt50cFIwE/edit?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link17"
        >
          Covoiturage entre invités
        </a>
      </section>
      <section className="home-divider1"></section>
      <section id="hebergements" className="home-hebergement">
        <h1 className="home-text38 h1-Title">
          <span>Hébergements</span>
          <br></br>
        </h1>
        <span className="home-text41">
          <span className="home-text42">
            Durant la soirée, une navette sera à disposition pour vous ramener à
            votre hébergement s&apos;il se trouve dans un rayon de 20 minutes
          </span>
          <br></br>
        </span>
        <div className="home-container25">
          <a
            href="https://www.airbnb.fr/s/Saint~%C3%89tienne~du~Gr%C3%A8s/homes?tab_id=home_tab&amp;refinement_paths%5B%5D=%2Fhomes&amp;flexible_trip_lengths%5B%5D=one_week&amp;price_filter_input_type=0&amp;query=Saint-%C3%89tienne-du-Gr%C3%A8s%2C%20France&amp;place_id=ChIJfYiNo13ntRIRsP-W_aUZCAQ&amp;date_picker_type=calendar&amp;checkin=2023-06-09&amp;checkout=2023-06-11&amp;adults=2&amp;source=structured_search_input_header&amp;search_type=user_map_move&amp;price_filter_num_nights=2&amp;ne_lat=43.88017310603427&amp;ne_lng=4.882798093557767&amp;sw_lat=43.727143349162&amp;sw_lng=4.6166542905386905&amp;zoom=12&amp;search_by_map=true"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link18"
          >
            Voir sur AirBnb
          </a>
          <a
            href="https://www.booking.com/searchresults.fr.html?label=gen173nr-1FCAEoggI46AdIDVgEaE2IAQGYAQ24ARfIAQzYAQHoAQH4AQKIAgGoAgO4AqL74ZkGwAIB0gIkZDFmMDNlYjktNDM2Ny00NGMyLWJlMDEtYWExMjFiMzY5NzRl2AIF4AIB&amp;sid=6037c5e905f182c142fed143fc80fe3a&amp;sb=1&amp;sb_lp=1&amp;src=index&amp;src_elem=sb&amp;error_url=https%3A%2F%2Fwww.booking.com%2Findex.fr.html%3Flabel%3Dgen173nr-1FCAEoggI46AdIDVgEaE2IAQGYAQ24ARfIAQzYAQHoAQH4AQKIAgGoAgO4AqL74ZkGwAIB0gIkZDFmMDNlYjktNDM2Ny00NGMyLWJlMDEtYWExMjFiMzY5NzRl2AIF4AIB%26sid%3D6037c5e905f182c142fed143fc80fe3a%26sb_price_type%3Dtotal%26%26&amp;ss=Saint-%C3%89tienne-du-Gr%C3%A8s%2C+Provence-Alpes-C%C3%B4te+d%27Azur%2C+France&amp;is_ski_area=&amp;checkin_year=2023&amp;checkin_month=6&amp;checkin_monthday=9&amp;checkout_year=2023&amp;checkout_month=6&amp;checkout_monthday=11&amp;efdco=1&amp;group_adults=2&amp;group_children=0&amp;no_rooms=1&amp;b_h4u_keep_filters=&amp;from_sf=1&amp;search_pageview_id=c8047d51bfb50081&amp;ac_suggestion_list_length=3&amp;ac_suggestion_theme_list_length=0&amp;ac_position=0&amp;ac_langcode=fr&amp;ac_click_type=b&amp;dest_id=-1465225&amp;dest_type=city&amp;place_id_lat=43.78098&amp;place_id_lon=4.73118&amp;search_pageview_id=c8047d51bfb50081&amp;search_selected=true&amp;ss_raw=saint+etienne+du+gr#map_opened"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link19"
          >
            Voir sur Bookings
          </a>
        </div>
        <div className="home-container26">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1zfM6DvxfJIQOLYzO7dXrs1_RWna-IFk&amp;ehbc=2E312F"
            className="home-iframe"
          ></iframe>
        </div>
      </section>
      <section className="home-divider2"></section>
      <section id="galerie" className="home-features">
        <h1 className="home-text44 h1-Title">
          <span>Galerie</span>
          <br></br>
        </h1>
        <div className="home-gallery">
          <div className="home-container27">
            <div className="home-container28">
              <div className="home-container29">
                <GalleryCard2
                  title="Sous spi, Marseille"
                  image_alt="Sous spi, Marseille"
                  image_src="/playground_assets/spi-1500h.jpg"
                  description="Il n'y a pas de vent favorable pour celui qui ne sait pas où il va"
                  rootClassName="gallery-card2-root-class-name7"
                ></GalleryCard2>
              </div>
            </div>
            <div className="home-container30">
              <GalleryCard2
                title="Sortie en paddle, Marseille"
                image_alt="Sortie en paddle, Marseille"
                image_src="/playground_assets/paddle-1500h.jpg"
                description="Pour se détendre après le boulot"
                rootClassName="gallery-card2-root-class-name6"
              ></GalleryCard2>
            </div>
          </div>
          <div className="home-container31">
            <div className="home-container32">
              <GalleryCard2
                title="La demande"
                image_alt="La demande"
                image_src="/playground_assets/demande-1500w.jpg"
                description="24 novembre 2021 - Rocher du Diamant, Martinique"
                rootClassName="gallery-card2-root-class-name12"
              ></GalleryCard2>
            </div>
            <div className="home-container33">
              <GalleryCard2
                title="Snorkling, Martinique"
                image_alt="Snorkling, Martinique"
                image_src="/playground_assets/snorkling-1500h.jpg"
                description="Même en mer, l'eau est toujours douce avec toi"
                rootClassName="gallery-card2-root-class-name13"
              ></GalleryCard2>
            </div>
          </div>
        </div>
        <div className="home-gallery1">
          <div className="home-container34">
            <div className="home-container35">
              <div className="home-container36">
                <GalleryCard2
                  title="L'amour à la plage, St Lucie Afrique du Sud"
                  image_alt="A la plage, St Lucie Afrique du Sud"
                  image_src="/playground_assets/plage-1500h.jpg"
                  description="La mer la mer toujours recommencée"
                  rootClassName="gallery-card2-root-class-name28"
                ></GalleryCard2>
              </div>
            </div>
            <div className="home-container37">
              <GalleryCard2
                title="Neel mon amour, La Rochelle"
                image_alt="Neel mon amour, La Rochelle"
                image_src="/playground_assets/neel-1500w.jpg"
                description="En reconnaissance sur notre futur navire ;-)"
                rootClassName="gallery-card2-root-class-name25"
              ></GalleryCard2>
            </div>
          </div>
          <div className="home-container38">
            <div className="home-container39">
              <GalleryCard2
                title="Cardinale Canoubier, Marseille"
                image_alt="Cardinale Canoubier, Marseille"
                image_src="/playground_assets/cardinale-1500w.jpg"
                description="Cheveux au vent sur l'ocean"
                rootClassName="gallery-card2-root-class-name26"
              ></GalleryCard2>
            </div>
            <div className="home-container40">
              <GalleryCard2
                title="Canoë, Ardèche"
                image_alt="Canoë, Ardèche"
                image_src="/playground_assets/canoe-1500h.jpg"
                description="Mer en mer l'eau est toujours douce"
                rootClassName="gallery-card2-root-class-name27"
              ></GalleryCard2>
            </div>
          </div>
        </div>
        <div className="home-gallery2">
          <div className="home-container41">
            <div className="home-container42">
              <div className="home-container43">
                <GalleryCard2
                  title="Les pingouins, Cap Town"
                  image_alt="Les pingouins, Cap Town"
                  image_src="/playground_assets/pinguins-1500h.jpg"
                  description="Demande devant le rocher du diamant en Martinique"
                  rootClassName="gallery-card2-root-class-name32"
                ></GalleryCard2>
              </div>
            </div>
            <div className="home-container44">
              <GalleryCard2
                title="Grand Canyon, USA"
                image_src="/playground_assets/canyon-1500h.jpg"
                description="Marseille"
                rootClassName="gallery-card2-root-class-name29"
              ></GalleryCard2>
            </div>
          </div>
          <div className="home-container45">
            <div className="home-container46">
              <GalleryCard2
                title="Pavillon d'Or, Kyoto"
                image_alt="Pavillon d'Or, Kyoto"
                image_src="/playground_assets/japan-1500h.jpg"
                description="Premier voyage des amoureux"
                rootClassName="gallery-card2-root-class-name30"
              ></GalleryCard2>
            </div>
            <div className="home-container47">
              <GalleryCard2
                title="Snorkling"
                image_src="/playground_assets/cap-1500h.jpg"
                description="Mer en mer l'eau est toujours douce"
                rootClassName="gallery-card2-root-class-name31"
              ></GalleryCard2>
            </div>
          </div>
        </div>
        <div className="home-gallery3">
          <div className="home-container48">
            <div className="home-container49">
              <div className="home-container50">
                <GalleryCard2
                  title="Couché de soleil, Marseille"
                  image_alt="Couché de soleil, Marseille"
                  image_src="/playground_assets/soleil-1500h.jpg"
                  description="La cardinale au fond à gauche me rappelle quelque chose..."
                  rootClassName="gallery-card2-root-class-name36"
                ></GalleryCard2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-features1">
        <h1 className="home-text47 h1-Title">
          <span>Contact</span>
          <br></br>
        </h1>
        <div className="home-container51">
          <a
            href="mailto:alice.et.ronan@gmail.com?subject=Mariage Alice et Ronan"
            className="home-link20"
          >
            alice.et.ronan@gmail.com
          </a>
          <a href="tel:+33695095504" className="home-link21">
            06.95.09.55.04
          </a>
        </div>
      </section>
      <footer className="home-footer">
        <a href="#hero" className="home-link22">
          <img
            alt="logo"
            src="/playground_assets/logo.svg"
            className="home-image4"
          />
        </a>
        <span className="home-text50">© 2023 Aliro Design</span>
      </footer>
    </div>
  )
}

export default Home

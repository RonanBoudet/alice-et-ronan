import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './header.css'

const Header = (props) => {
  return (
    <header data-role="Accordion" className="header-header">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="header-image"
      />
      <div className="header-separator"></div>
      <nav className="header-nav">
        <NavigationLinks
          text="Accueil"
          text1="Programme"
          text2="Comment venir"
          text3="Logement"
          text4="Galerie"
          rootClassName="rootClassName19"
        ></NavigationLinks>
      </nav>
      <div data-type="AccordionHeader" className="header-accordion-header">
        <svg viewBox="0 0 1024 1024" className="header-icon">
          <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>
      <div data-type="AccordionContent" className="header-accordion-content">
        <div className="header-nav1">
          <NavigationLinks rootClassName="rootClassName20"></NavigationLinks>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt: 'logo',
}

Header.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Header

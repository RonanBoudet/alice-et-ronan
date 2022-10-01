import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <span className="component-text">{props.From}</span>
      <div className="component-container1">
        <span className="component-text1">{props.duration}</span>
        <span className="component-text2">{props.text2}</span>
      </div>
      <a
        href={props.link_text}
        target="_blank"
        rel="noreferrer noopener"
        className="component-link"
      >
        {props.text}
      </a>
    </div>
  )
}

AppComponent.defaultProps = {
  From: "Depuis la Gare d'Avignon TGV",
  duration: '20 minutes',
  text2: 'en voiture',
  text: "Voir l'itinéraire",
  rootClassName: '',
  link_text: 'https://example.com',
}

AppComponent.propTypes = {
  From: PropTypes.string,
  duration: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  link_text: PropTypes.string,
}

export default AppComponent

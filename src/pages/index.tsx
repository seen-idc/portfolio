import * as React from 'react'
import { CSSProperties } from 'react'
import { Helmet } from 'react-helmet'
import { SocialIcon } from 'react-social-icons'

const pageStyles: CSSProperties = {
  paddingTop: '5%',
  paddingLeft: '15%',
  color: 'white',
}

const normalTextStyles: CSSProperties = {
  fontSize: '1.5rem',
  fontFamily: 'Nunito, san-serif',
}

const titleGlow = 'rgba(173, 211, 255, 0.3)'
const titleStyles: CSSProperties = {
  fontSize: '3rem',
  color: '#add3ff',
  fontFamily: 'Raleway, sans-serif',
  fontWeight: 'bold',
  textShadow: `0 0 7px ${titleGlow},
  0 0 10px ${titleGlow},
  0 0 21px ${titleGlow}`,
}

const valorantLinkStyles: CSSProperties = {
  fontSize: '1.3rem',
  fontFamily: 'Roboto Mono, monospace',
  color: '#E2404F',
  letterSpacing: '2px',
  textDecoration: 'none',
  borderRadius: '3px',
  backgroundColor: 'rgba(255, 117, 130, 0.3)',
  padding: '3px 3px',
}

const socialsListStyles: CSSProperties = {
  display: 'inline',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
}

const socialsListItemStyle: CSSProperties = {
  float: 'left',
  marginLeft: '1rem',
}

const socialListItemStyleNoMargin: CSSProperties = {
  float: 'left',
}

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <style>{'body { background-color: #0b141f;}'}</style>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Raleway:wght@700&family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <main style={pageStyles}>
        <h1 style={titleStyles}>seen</h1>
        <p style={normalTextStyles}>
          I play games like{' '}
          <a
            style={valorantLinkStyles}
            href="https://tracker.gg/valorant/profile/riot/seen%20idc%23pimi%E3%83%84/overview"
          >
            VALORANT
          </a>{' '}
          and like to delve into all things relating to computers like programming.
        </p>
        <ul style={socialsListStyles}>
          <li style={socialListItemStyleNoMargin}>
            <SocialIcon fgColor="white" url="https://twitch.tv/seen_idc"></SocialIcon>
          </li>
          <li style={socialsListItemStyle}>
            <SocialIcon
              fgColor="white"
              url="https://www.youtube.com/channel/UCB_DJKfNs24ogACFh3EuzKg"
            ></SocialIcon>
          </li>
          <li style={socialsListItemStyle}>
            <SocialIcon fgColor="white" url="https://github.com/seen-idc"></SocialIcon>
          </li>
          <li style={socialsListItemStyle}>
            <SocialIcon fgColor="white" url="https://twitter.com/seen_val"></SocialIcon>
          </li>
          <li style={socialsListItemStyle}>
            <SocialIcon fgColor="white" url="https://discord.gg/dBbspZ2CqU"></SocialIcon>
          </li>
        </ul>
      </main>
    </>
  )
}

export default IndexPage

import React from 'react'
import styled, { injectGlobal } from 'react-emotion'
import 'typeface-open-sans'

injectGlobal`
  html {
    box-sizing: border-box;
  }
  
  *,
  *:after,
  *:before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family:  'Open Sans', sans-serif;
  }
`

const Container = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
`

const Header = styled('h1')`
  color: #666;
  font-size: 2.1rem;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  text-align: center;
`

const Intro = styled('p')`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
`

const ContactLink = styled('a')`
  color: #666;
`

const IndexPage = () => (
  <Container>
    <Header>Webtimists Ltd.</Header>
    <Intro>coming soon...</Intro>
    <ContactLink href="mailto:hello@webtimists.com">
      hello@webtimists.com
    </ContactLink>
  </Container>
)

export default IndexPage

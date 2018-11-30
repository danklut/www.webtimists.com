import React from 'react'
import styled, { injectGlobal } from 'react-emotion'

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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

const IndexPage = () => (
  <Container>
    <h1>Webtimists Ltd.</h1>
    <p>coming soon...</p>
    <a href="mailto:hello@webtimists.com">hello@webtimists.com</a>
  </Container>
)

export default IndexPage

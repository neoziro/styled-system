import React from 'react'
import { graphql } from 'gatsby'
import { Box, Styled } from '../system'
import { Header, Container, } from '../layout'
import NavLink from '../nav-link'
import Badges from '../badges.md'
import GettingStarted from '../../getting-started.md'
import Hex from '../logo/hex'
import Button from '../system/button'

export const query = graphql`
  query Index {
    site {
      siteMetadata {
        title
        description
        github
        install
        features
        quotes {
          text
          source
          href
        }
      }
    }
  }
`

const Columns = props =>
  <Box
    {...props}
    as='ul'
    p={0}
    css={{
      listStyle: 'none',
      display: 'flex',
      flexWrap: 'wrap',
    }}
  />

const sandbox = (
  <iframe
    title='sandbox'
    src='https://codesandbox.io/embed/github/jxnblk/styled-system/tree/master/examples/basic'
    style={{
      width: '100%',
      height: '500px',
      border: 0,
      borderRadius: '4px',
      overflow: 'hidden'
    }}
    sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
  />
)

export default ({
  data: {
    site: {
      siteMetadata: meta
    }
  }
}) =>
  <div>
    <Box as='header'>
      <Header sidebar={false} />
      <Container py={5}>
        <Hex />
        <Box
          as='h1'
          fontSize={[4, 4, 5]}
          fontWeight='bold'>
          {meta.description}
        </Box>
        <Box
          my={4}
          css={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
          <Button href='/getting-started' mr={3}>
            Documentation
          </Button>
          <NavLink
            href='https://github.com/styled-system/styled-system'
            mr={3}>
            GitHub
          </NavLink>
          <Box
            as='pre'
            px={0}
            fontFamily='monospace'
            color='inherit'
            backgroundColor='transparent'>
            npm i styled-system
          </Box>
        </Box>
      </Container>
    </Box>
    <Container py={5}>
      <Badges />
      <Box py={4}>
        <Columns mx={-3}>
          {meta.features.map(feature => (
            <Box
              key={feature}
              as='li'
              width={[1, 1/2]}
              p={3}
              fontSize={3}
              mb={15}
              fontWeight='bold'>
              {feature}
            </Box>
          ))}
        </Columns>
      </Box>
      <Columns mx={-3} py={4}>
        {meta.quotes.map(quote => (
          <Box as='li'
            width={[ 1, 1/2 ]}
            p={3}
            key={quote.text} mb={4}>
            <Box
              as='blockquote'
              fontSize={4}
              fontWeight='bold'
              m={0}>
              “{quote.text}”
            </Box>
            <Styled.a href={quote.href}>
              – {quote.source}
            </Styled.a>
          </Box>
        ))}
      </Columns>
      {sandbox}
      <Box py={4}>
        <GettingStarted />
      </Box>
      <Box py={4}>
        Continue on the next page:
        <NavLink
          href='/responsive-styles'
          fontSize={5}
          px={0}
          mb={3}>
          Responsive Styles
        </NavLink>
      </Box>
    </Container>
    <Box as='footer'>
      <Container
        css={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <Box
          fontWeight='bold'
          mr={2}>
          MIT License
        </Box>
        <NavLink href='https://github.com/jxnblk/styled-system'>
          GitHub
        </NavLink>
      </Container>
    </Box>
  </div>

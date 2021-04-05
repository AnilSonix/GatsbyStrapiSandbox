import React from "react"
import { Button } from "@chakra-ui/button"
import { Center, Text } from "@chakra-ui/layout"
import { Container } from "@chakra-ui/layout"
import { Heading } from "@chakra-ui/layout"
import Welcome from "../components/welcome"

// 1. Import the extendTheme function
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Layout from "../components/layout"

// 2. Extend the theme to include custom colors, fonts, etc

const theme = extendTheme({
  colors: {
    brand: {
      light: "khaki",
      primary: "red",
      dark: "darkgoldenrod",
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "JetBrains Mono,Menlo, monospace",
  },
})

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Container>
          <Heading
            as="h1"
            textAlign="center"
            fontFamily="heading"
            color="brand.light"
          >
            Chakra UI Theme Test
          </Heading>
          <Text textAlign="center" fontFamily="mono" color="brand.dark">
            Contact us for more details
          </Text>
          <Center p="3">
            <Button bgColor="brand.primary" textTransform="capitalize">
              Customised button
            </Button>

            <Button colorScheme="yellow" textTransform="capitalize">
              Using colorscheme
            </Button>
          </Center>
          <hr />
          <Welcome />
        </Container>
      </Layout>
    </ChakraProvider>
  )
}

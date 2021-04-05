import { Button } from "@chakra-ui/button"
import { Box, Center, Heading, HStack, VStack } from "@chakra-ui/layout"
import React from "react"
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons"

const Welcome = props => {
  console.log({ props })
  return (
    <VStack>
      <Center>
        <Heading as="h2">Why partner with us ?</Heading>
      </Center>
      <HStack>
        <Box>
          <PhoneIcon color="brand.primary" boxSize="sm" />
          <Heading as="h5" fontSize="large">
            List you hunts for free
          </Heading>
          <p>
            Signing up for BookYourHunt and listing your offers is completely
            free
          </p>
        </Box>
      </HStack>
    </VStack>
  )
}

export default Welcome

import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
      <VStack  borderRadius='lg' bg="white" color="black" alignItems='center'>
      <Image src={imageSrc}
      size="lg"
      objectFit='cover'
      borderRadius='lg'
      alt='Dan Abramov'>

      </Image>
    <VStack  alignItems="flex-start" p={4} >
<Heading as="h6" size="sm"  >{title}</Heading>
<Text>{description}</Text>
<HStack >
  <Text>
    see more
  </Text>
  <FontAwesomeIcon icon={faArrowRight}/>
</HStack>
</VStack>
      </VStack>


  );
};

export default Card;

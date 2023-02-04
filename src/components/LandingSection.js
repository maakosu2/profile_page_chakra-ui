import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Mandela!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={10}  size="lg">
      <VStack>
     <Avatar size='2xl' name='Akosu Aondohemba Mandela' src='https://lh3.googleusercontent.com/IiB_XkJm0oHGciy4F77bNQvkRxxCXgkMHIEcVUlKNbT9GtJ5hlVpf0_EBG5RIsQtJaTfhS2-COGCB-NxSYyH4qMhnruhG0gJx7R6jjED35Iw4u8LOlmC0vzfX5HXFPWr8ejUzNI4qd_oOl-pvm19USYBtUpUAVEMtTmx85z1_gf-BHxg20wY1ezHHsjfd0NZn5q43teyz3RDeWtKG6ZTtMhsGTU3FbOgWao5oBsYTxB0WrLyxoaA7sKVY-fM8_UXM0OaA0-EZozljAEwyPEp2ofjMoMFvUDiUOC_yg6u5kqZvabTPz0vvuhPndQY462MCnnQYMt3AzBvAqVYevm6iRhA1n2mFSsyy-X0DhLjb0k4H595kuKwvH1nG-KWxj6sTr6T9oN2xNT_vtIu64TWQBmW3Meiwa0bV4dQgr9JPa807MK_dZiLWrnc6xwkQnVYm6ZsXEt5sBX0jZIDOAQmb2QyuoFFEFfxevRu6GiheCbtTl75hfK__PW2SsONaT1Vx8c_4rlmtvjNZIU0ek4k7uAZXelLsl00Kd9MRbzrBBGGoaX89I2WHxB-Jm3uHhyl_UZiJOUjuBKyGHOP4_h1mSZ3pw-uSI12e6wVXK_mWqCKKAkydEa0Ao3n0cGDYUk7PO34v6dI5MRA6zYM3QSE9d-w44FBIHHTQi8zkqR9q3SK5BACGUdVVwYlA_9Eeuxe-vkr40IA8uO99c-Uf9lfbI6U4BehomdF3p1rZYRVdQ6KLibtJ-5Sc9w8zqwpH_aCJ9WVlPI3HaV6zsWllzLZs-2Xie_ZqSzg9npnwP0lV5jJzY6x7ZqE8yvQ6ifNGdTJdejRKO8l-JP5lvmVFfJbsjFAgb6JGR-P9-0CbNJcsLVngEMiZyGt9otWFpLwFe_cilOjzkGePtoHO7Ra9gGETqBW-JIkHu8LlY-n_PdX978G=w678-h903-no?authuser=0' />{' '}
  <Heading as="h6" size='xs' > {greeting}</Heading>
  </VStack>
  <VStack >
  <Heading as="h1" >{bio1}</Heading>
  <Heading as="h1">{bio2}</Heading>
</VStack>
</VStack>
</FullScreenSection>
);

export default LandingSection;

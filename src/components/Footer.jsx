import { Avatar, Box, Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://avatars.githubusercontent.com/u/144008883?v=4";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>

          <Heading size={'md'} textTransform={'uppercase'}>
                Social Media
            </Heading>
            <Button variant={'link'} colorScheme={'blue'}>
                <a href="https://instagram.com/_.sky_14"> Instagram </a>
            </Button>

            <Button variant={'link'} colorScheme={'blue'}>
                <a href="https://youtube.com/@nishchaynish">Youtube </a>
            </Button>

            <Button variant={'link'} colorScheme={'blue'}>
                <a href="https://facebook.com/Nishant Chauahn">Facebook</a>
            </Button>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Nishant</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;

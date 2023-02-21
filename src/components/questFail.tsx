import { VStack, Image, Text } from "@chakra-ui/react";
import { useColor } from "../hooks/color";
import fail from "../assests/fail.png";

export default function questSuccess() {
    const color = useColor();

    return (
        <VStack marginTop={'125px'} spacing={'125px'}>
            <Image src={fail}></Image>
            <Text
                fontFamily={'Oswald'}
                fontSize={'32px'}
                fontWeight={'200'}
            >
                This isn't what I require
            </Text>
        </VStack>
    )
}
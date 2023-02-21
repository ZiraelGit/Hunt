import { VStack, Image, Text } from "@chakra-ui/react";
import { useColor } from "../hooks/color";
import successBtn from "../assests/successBtn.png";

export default function questSuccess() {
    const color = useColor();

    return (
        <VStack marginTop={'50px'} spacing={'40px'}>
            <Image src={successBtn}></Image>
            <Text
                fontFamily={'Oswald'}
                fontSize={'32px'}
                fontWeight={'200'}
            >
                Your Proof of Play Token will be minted to your wallet
            </Text>
            <Text
                fontFamily={'Oswald'}
                fontSize={'32px'}
                fontWeight={'200'}
            >
                Visit HUNT Discord for the next update
            </Text>
        </VStack>
    )
}
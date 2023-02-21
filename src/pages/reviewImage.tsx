import { Text, Flex, VStack } from "@chakra-ui/react";
import { useColor } from "../hooks/color";
import Header from "../components/header";
import MintBody from "../components/mintBody";
import ReviewImage from "../components/reviewImage1";
import MainButton from "../components/button";
import { useState } from "react";


export default function MintPage() {
    const color = useColor();
    const [createCharacter, setCreateCharacter] = useState<boolean>(false);

    return(
        <Flex
            width={'100%'}
            height={'100%'}
            flexDirection='column'
            bg={color.background}
            alignItems='center'>
            <Flex
                height='926px'
                width='428px'
                alignItems={'center'}
                bg={color.background}
                flexDirection={'column'}
            >
                <Header title={'ox8n439c0n'} />
                <ReviewImage />
            </Flex>
        </Flex>
    )
}
import { Flex, Image, VStack } from '@chakra-ui/react';
import Logo from "../assests/logoBig.png";
import { useColor } from "../hooks/color";
import MainButton from "../components/button";
import Header from "../components/header";
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Homepage() {
    const color = useColor();
    const [connectWallet, setConnectWallet] = useState<boolean>(false);
    const [connectDiscord, setConnectDiscord] = useState<boolean>(false);
    return (
        <Flex
            width='100%'
            height='100%'
            flexDirection='column'
            bg={color.background}
            alignItems='center'
        >
            <Flex
                width='428px'
                height='926px'
                flexDirection='column'
                bg={color.background}
                alignItems='center'>
                <Header title={''} />
                <Image src={Logo} marginTop='83px' marginBottom='160px' width='380px' height='380px'></Image>
                <VStack width='90%' spacing='32px'>
                    <Link to='/questpage'><MainButton title={'Quest'} handleSetting={setConnectWallet}/></Link>
                    <Link to='/mintNFT'><MainButton title={'Mint NFT'} handleSetting={setConnectWallet}/></Link>
                </VStack>
            </Flex>
        </Flex>
    );
}


import { Text, Flex, Image } from '@chakra-ui/react';
import { useColor } from '../hooks/color';
import miniLogo from '../assests/MiniLogo.png';
import discord from '../assests/DiscordLogo.png';

interface Props {
    title: string
}

export default function Header({ title }: Props) {
    const color = useColor();

    return (
        <Flex alignItems={'center'} justifyContent={'space-between'} width='90%' marginTop='36px'>

                <Image src={miniLogo}></Image>

                <Text textAlign={'center'} fontSize={'38px'} fontFamily={'Oswald'} fontWeight={'200'} color={color.fontBody} marginX='0 !important'>{title}</Text>

                <Image src={discord}></Image>
        
        </Flex>
    )
}
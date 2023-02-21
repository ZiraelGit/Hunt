import { Flex, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assests/logoBig.png";
import { useColor } from "../hooks/color";
import MainButton from "./button";
import Header from "./header";


interface Props {
    title: string
}

export default function QuestCard({ title }: Props) {
    const color = useColor();
    const [accept, setAccept] = useState<boolean>(false);

    return (
        <VStack>
            <Text
                fontFamily={'Oswald'}
                fontSize={'32px'}
                fontWeight={'200'}
                textAlign={'center'}
                marginTop={'80px'}
            >
                {title}
            </Text>
            <Text
                fontFamily={'Oswald'}
                fontSize={'32px'}
                fontWeight={'200'}
                textAlign={'center'}
                marginTop={'30px'}
            >
                A Fine Vintage
            </Text>
            <Text
                fontFamily={'Nova Flat'}
                fontSize={'24px'}
                fontWeight={'400'}
                textAlign={'center'}
                paddingY={'50px'}
                marginBottom={'35px'}
            >
                As you know, the quality of our ‘sustenance’ is of utmost importance.<br></br> First you must procure a large sample of the finest blood. Be it a Merlo or Rioja, or something more exotic, you must find the finest vintage. 
            </Text>
            <MainButton title = {'Yes, Master'} handleSetting={setAccept}/>
        </VStack>
    );
}


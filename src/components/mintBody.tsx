import { Text, Input, Flex, Select, VStack } from "@chakra-ui/react";
import { useColor } from "../hooks/color";


export default function MintBody() {
    const color = useColor();
    return (
        <VStack marginTop='50px' width='80%'>
            <Text
                fontFamily={'NovaFlat'}
                fontWeight={'400'}
                fontSize={'24px'}
                textAlign='center'
                color={color.fontBody}>
                It it here now, after years of loyal service, you shall become one with us.
            </Text>
            <VStack width='90%' spacing='10px' marginTop={'30px'}>
                <Flex flexDirection={'column'} >
                    <Text
                        fontFamily='Montserrat'
                        marginY='0'
                        textAlign={'start'}
                    >Region</Text>
                    <Select placeholder='select a country here' bg='#fbffd0' width='280px' height='60px' borderRadius={'16px'}>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>                    
                </Flex>
                <Flex flexDirection={'column'}>
                    <Text
                        fontFamily='Montserrat'
                        marginY='0'
                        textAlign={'start'}
                    >Gender</Text>
                    <Select placeholder='select a country here' bg='#fbffd0' width='280px' height='60px' borderRadius={'16px'}>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>                    
                </Flex>
                <Flex flexDirection={'column'} >
                    <Text
                        fontFamily='Montserrat'
                        marginY='0'
                        textAlign={'start'}
                    >Sect</Text>
                    <Select width='280px' height='60px' placeholder='select a country here' bg='#fbffd0'  borderRadius={'16px'}>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>                    
                </Flex>
                <Flex flexDirection={'column'} width='280px' marginBottom='60px !important'>
                    <Text
                        fontFamily='Montserrat'
                        marginY='0'
                        textAlign={'start'}
                    >Wildcard</Text>
                    <Input 
                        width='280px' 
                        height='60px'
                        fontFamily={'Montserrat'}
                        fontWeight='500'
                        fontSize={'24px'}
                        textAlign='center'
                        color={'black'}
                        placeholder='Single Word' 
                        bg='#fbffd0'
                        borderRadius={'16px'}></Input>                    
                </Flex>
            </VStack>
        </VStack>
    )
}
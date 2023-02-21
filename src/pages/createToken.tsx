import { Flex, Button, Image } from '@chakra-ui/react';
import Logo from "../assests/logoBig.png";
import { useColor } from "../hooks/color";

export default function LogIn() {
   const color = useColor();
   return(
       <Flex
           minHeight='926px'
           minWidth='428px'
           justifyContent='center'
           bg={color.background}
           >
               <Image src={Logo} marginTop='9%' marginBottom='17%' width='90%'></Image>
               <Flex width='90%'>
                   <Button bg=''></Button>
               </Flex>
       </Flex>
   );
}

import { Flex, VStack, Image, Button, border } from "@chakra-ui/react";
import cameraButton from "../assests/cameraButton.png";
import camera from "../assests/camera.png";
import Webcam from "react-webcam";

export default function cameraCapture() {
    const videoConstraints = {
        width: { min: 480 },
        height: { min: 720 },
        aspectRatio: 0.6666666667
      };
      
    return (
        <VStack marginTop={'30px'} spacing={'30px'}>
            {/* <Flex className="contentarea" bg={'#1e1e1e'} borderRadius='20px' justifyContent={'center'} alignItems='center' width='374px' height='624px'>
                <video id ="video" width='100% !important' height='100% !important'></video>
                <Image src={camera}></Image>
            </Flex>
            <canvas id='canvas'></canvas>
            <Button variant={'link'} _active={{border:'1px blue solid'}} id={'startbutton'}><Image src={cameraButton}></Image></Button> */}
            <Webcam
                videoConstraints={videoConstraints}
                width={480}
                height={720}
                frameBorder='1px blue solid'
            />
        </VStack>
    )
}
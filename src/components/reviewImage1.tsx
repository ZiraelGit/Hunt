import { Image, Grid, GridItem, Flex } from "@chakra-ui/react";
import MainButton from "./button";
import man1 from "../assests/1.png"
import man2 from "../assests/2.png"
import man3 from "../assests/3.png"
import man4 from "../assests/4.png"

export default function ReviewImage() {
    return (
        <Flex marginY={'130px 90px'} flexDirection='column' alignItems={'center'}>
            <Grid
                h='350px'
                w='350px'
                templateRows='repeat(4, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={0.4}
            >
                <GridItem rowSpan={2} colSpan={2} bg='#1e1e1e'><Image src={man1}></Image></GridItem>
                <GridItem rowSpan={2} colSpan={2} bg='#1e1e1e'><Image src={man2}></Image></GridItem>
                <GridItem rowSpan={2} colSpan={2} bg='#1e1e1e'><Image src={man3}></Image></GridItem>
                <GridItem rowSpan={2} colSpan={2} bg='#1e1e1e'><Image src={man4}></Image></GridItem>
            </Grid>
        </Flex>
    )
}
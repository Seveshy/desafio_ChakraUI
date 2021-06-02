import { Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import ContinentBanner from "../../components/ContinentBanner";

export default function Continent() {
    return (
        <Flex direction="column">
            <Header />
            <ContinentBanner />
        </Flex>
    );
}
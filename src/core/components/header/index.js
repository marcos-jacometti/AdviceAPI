import React, {useContext} from "react";
import { ButtonMode, Container, Title } from "./styles";
import themeContext from "../../assets/styles/theme";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function Header(){
    const [mode, setMode] = useContext(themeContext);
    return(
            <Container>
                <Title>advice</Title>
                <ButtonMode onClick={() => setMode(!mode)}>
                    {!mode ? <BsMoonFill />: <BsSunFill />}
                </ButtonMode>
            </Container>
    );
}
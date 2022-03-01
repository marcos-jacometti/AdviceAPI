import React, {useContext} from "react";
import { ButtonMode, Container, NavBar, Title } from "./styles";
import themeContext from "../../assets/styles/theme";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function Header(){
    const [mode, setMode] = useContext(themeContext);
    return(
            <Container>
                <NavBar>
                    <Title>advice</Title>
                    <ButtonMode onClick={() => setMode(!mode)}>
                        {!mode ? <BsMoonFill />: <BsSunFill />}
                    </ButtonMode>
                </NavBar>
            </Container>
    );
}
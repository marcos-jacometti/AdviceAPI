import React, {useEffect, useState}  from "react";
import { Context, Container, Button } from "./styles";
import { MdOutlineNavigateNext } from "react-icons/md";
import api from "../../services/api";

export default class Main extends React.Component{
    state = {
        advice: '',
        id: '',
    }

    componentDidMount(){
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        api.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice, id } = response.data.slip;
                this.setState({ advice, id });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render(){
        return(
            <Context>
                <Container height="40vh" width="25vw" shadow="0 0 1em black">
                    <h3>#{this.state.id}</h3>
                    <h2>{this.state.advice}</h2>
                    <Container>
                        <Button onClick={this.fetchAdvice}>{<MdOutlineNavigateNext />}</Button>
                    </Container>
                </Container>
            </Context>
        );
    }
}
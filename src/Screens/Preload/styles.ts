import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: ${props => props.theme.background};
    justify-content: center;
    align-items: center;
`

export const Text = styled.Text`
    color: ${props => props.theme.primary};
`
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.background};
`

export const Text = styled.Text`
    color: ${props => props.theme.primary};
`
import { Container, Title } from "./styles";

export function Button({ onPress }) {

    return (

        <Container
            activeOpacity={0.7}
            onPress={onPress}
        >

            <Title>Calcular</Title>
        </Container>

    );
}
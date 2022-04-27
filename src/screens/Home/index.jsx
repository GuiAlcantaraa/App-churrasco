import { Container, Title, Input, ResultadoText } from './styles';
import { Button } from '../../components/Button'
import { useState } from 'react';

export default function Home() {

    const [mulheres, setMulheres] = useState(0)
    const [homens, setHomens] = useState(0)
    const [resultado, setResultado] = useState(0)

    function calcularQuantidade() {

        const mulher = Number(mulheres)
        const homem = Number(homens)
        const calcular = mulher + homem;

        if (calcular > 10) setResultado(calcular)
    }

    return (
        <Container>

            <Title>Churrasco</Title>

            <Input
                placeholder='Quantidade de mulheres'
                placeholderTextColor="#ffffff"
                keyboardType="numeric"
                onChangeText={setMulheres}

            />

            <Input
                placeholder='Homens'
                placeholderTextColor="#ffffff"
                keyboardType="numeric"
                onChangeText={setHomens}

            />

            <Button
                description="Calcular"
                onPress={calcularQuantidade}

            />
            <ResultadoText>Total de carne é: {resultado}</ResultadoText>
        </Container>
    );
}
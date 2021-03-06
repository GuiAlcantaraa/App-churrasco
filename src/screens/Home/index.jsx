import { Container, Title, Input, ResultadoText } from './styles';
import { Button } from '../../components/Button'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet } from 'react-native';

export default function Home() {

    const [women, setWomen] = useState(0)
    const [man, setMan] = useState(0)
    const [children, setChildren] = useState(0)

    const [womenMeatResult, setWomenMeatResult] = useState(0)
    const [manMeatResult, setManMeatResult] = useState(0)
    const [childMeatResult, setChildMeatResult] = useState(0)
    const [totalMeatResult, setTotalMeatResult] = useState(0)
    const [totalCoal, setTotalCoal] = useState(0)

    function calculateAmoutOfMeat() {
        const coal = 5
        const defaultMeat = 0.400
        const meatMan = man * defaultMeat
        const meatWomen = (defaultMeat - (defaultMeat * 0.25)) * women
        const meatChild = (defaultMeat / 2) * children
        const totalMeat = meatMan + meatWomen + meatChild
        const totalCoal = (totalMeat * coal) / 6

        if (women !== 0 || man !== 0 || children !== 0) {

            setChildMeatResult(meatChild.toFixed(1))
            setManMeatResult(meatMan.toFixed(1))
            setWomenMeatResult(meatWomen.toFixed(1))
            setTotalMeatResult(totalMeat.toFixed(1))
            setTotalCoal(totalCoal.toFixed(1))
        } else {
            alert("Infome a quantididade correta.")
        }

    }

    return (
        <Container>

            <ImageBackground
                source={require('../../../assets/bbq.webp')}
                style={styles.imageBackground}
            >

                <Title>CHURRASQUIN 🥩🍗</Title>
                <StatusBar style='auto' />

                <Input
                    placeholder='Quantidade de mulheres'
                    placeholderTextColor="#ffffff"
                    keyboardType="numeric"
                    onChangeText={setWomen}

                />
                <Input
                    placeholder='Quantidade de Homens'
                    placeholderTextColor="#ffffff"
                    keyboardType="numeric"
                    onChangeText={setMan}

                />
                <Input
                    placeholder='Quantidade de Crianças'
                    placeholderTextColor="#ffffff"
                    keyboardType="numeric"
                    onChangeText={setChildren}

                />

                <Button
                    description="Calcular"
                    onPress={calculateAmoutOfMeat}
                />

                <ResultadoText>Carne para as Mulheres: {womenMeatResult}kg</ResultadoText>
                <ResultadoText>Carne para os Homens: {manMeatResult}kg</ResultadoText>
                <ResultadoText>Carne para as Crianças: {childMeatResult}kg</ResultadoText>
                <ResultadoText>Total de carne para o churrasco: {totalMeatResult}kg</ResultadoText>
                <ResultadoText>Total de carvão para o churrasco: {totalCoal}kg</ResultadoText>
            </ImageBackground>
        </Container>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
    }
})
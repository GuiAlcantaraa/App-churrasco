import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'


export const Container = styled(TouchableOpacity)`
  padding: 15px;
  align-items: center;
  border-radius: 7px;
  background-color: #008000;
  margin-top: 28px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Title = styled.Text`
color: white;
font-size: 17px;
font-weight: bold;
`
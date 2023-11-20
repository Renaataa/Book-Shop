/*
  Внизу мобильного приложения должна быть кнопка - чат. 
  При нажатии на нее, экран становится выглядеть как на картинке. 

  Сверстать максимально приближенно. Чем ближе к фото тем лучше. 
  На самой страничке сверстать страничку продукта. 
  Тоже максимально приближенные. (Кнопка чат привязана к углу)

  Пусть будут с книгами например. То, что сверху в углу бестселлер и хит продаж, 
  и снизу внизу 16+ это ээлементы поверх картинки.

  Только сделай так, чтобы картинка была сверху, а вот все, что справа от нее, 
  уже было под картинкой. Ибо оно не вместится на телефоне.

*/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
 
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


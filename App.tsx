/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { StackTabs } from './src/navigations/StackTabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { StatusBar, useColorScheme } from 'react-native';
import { TamaguiProvider, Theme } from 'tamagui';
import { config } from './tamagui.config'

function App() {
  const theme = useColorScheme();
  console.log('Current theme:', theme);
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <TamaguiProvider config={config} defaultTheme={theme === 'dark' ? 'dark' : 'light'}>
        <Theme name={theme === 'dark' ? 'dark' : 'light'}>
          <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
          <NavigationContainer>
            <StackTabs />
          </NavigationContainer>
        </Theme>
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}




export default App;

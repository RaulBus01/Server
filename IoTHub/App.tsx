import "@expo/metro-runtime"
import StackLayout from './app/_layout';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from "expo";
const App =() =>
{
    
    return (
            
            <NavigationContainer>
                <StackLayout/>
            </NavigationContainer>
            
    )

}
export default App;
registerRootComponent(App)
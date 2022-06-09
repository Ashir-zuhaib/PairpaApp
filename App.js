// // import React from 'react';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import StackNavigation from './Screen/StackNavigation/StackNavigation';
// import { AuthProvider } from './Hooks/useAuth';

// // const App = () => {
// //   return (
//     //   );
//     // };
//     // export default App;
//     import { View, Text } from 'react-native'
//     import React from 'react'
//     import BottomNavigator from './Screen/BottomNavigator/BottomNavigator';
    
//     const App = () => {
//         return (
//                 <AuthProvider>
//             <NavigationContainer>
//                 {/* <BottomNavigator /> */}
//                 <StackNavigation />
//             {/* <View>
//       <Text>App</Text>
//     </View> */}
//               </NavigationContainer>
//     //       </AuthProvider>
//   )
// }

// export default App
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './Screen/StackNavigation/StackNavigation';
import { AuthProvider } from './Hooks/useAuth';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
      <StackNavigation />
      </AuthProvider>
      </NavigationContainer>
  );
};
export default App;
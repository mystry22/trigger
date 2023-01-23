import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Nav from './src/Navigation/Navigation';
import {GlobalAuthContext} from './src/Context/AuthLoginContext'




/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App = () => {

 
  
  return (
    <GlobalAuthContext>

      <Nav />
    </GlobalAuthContext>

  );
};



export default App;

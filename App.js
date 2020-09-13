import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Menu from './components/Menu';
import Clase1 from './components/Clase1';
import Clase2 from './components/Clase2';
import Valoracion from './components/Valoracion';
import Observacion from './components/Observacion';
import Anamnesis from './components/Anamnesis';
import Individuo from './components/Individuo';
import Familia from './components/Familia';
import Anasig from './components/Anasig';
import Anasig2 from './components/Anasig2';
import Final from './components/Final';


export default class App extends Component {
  
  render() {
    return (

        <Router>
          <Stack key="root" hideNavBar={true}>
            <Scene key="Menu" component={Menu} title="Menu" initial={true}/>
            <Scene key="Clase1" component={Clase1} title="Clase1" initial={true}/>
            <Scene key="Clase2" component={Clase2} title="Clase2" initial={true}/>
            <Scene key="Valoracion" component={Valoracion} title="Valoracion" initial={true}/>
            <Scene key="Observacion" component={Observacion} title="Observacion" initial={true}/>
            <Scene key="Anamnesis" component={Anamnesis} title="Anamnesis" initial={true}/>
            <Scene key="Individuo" component={Individuo} title="Individuo" initial={true}/>
            <Scene key="Familia" component={Familia} title="Familia" initial={true}/>
            <Scene key="Anasig" component={Anasig} title="Anasig" initial={true}/>
            <Scene key="Anasig2" component={Anasig2} title="Anasig2" initial={true}/>
            <Scene key="Final" component={Final} title="Final" initial={true}/>
          </Stack>
        </Router>

    );
  }
}

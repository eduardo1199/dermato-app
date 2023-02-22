import { Text, View, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons  } from '@expo/vector-icons'; 

import { styles } from './styles';
import { ScheduleQueryButton } from '../../components/ScheduleQueryButton';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="menu" size={36} color="#DC2428" />
        </TouchableOpacity>
        <Text style={styles.titleMain}>
          A sua beleza é única, o tratamento também
        </Text>
        <View style={styles.descriptionMain}>
          <Text style={styles.textDescription}>
            A padronização de tratamentos estéticos gera resultados artificiais. Por isso analisamos sua pele e realizamos apenas procedimentos personalizados para você.
          </Text>
        </View>
        <ScheduleQueryButton 
          onClick={() => {}}
          title="AGENDAR CONSULTA"
        />
      </View>
    </View>
  );
}



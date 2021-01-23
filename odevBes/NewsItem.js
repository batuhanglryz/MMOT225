import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class NewsItem extends React.Component{

  render (){

    const typeVal= this.props.type;
    let bgcolor = 'white';

    if (typeVal=='spor'){
      bgcolor = 'yellow';
    } else if (typeVal=='siyaset') {
      bgcolor = 'cyan';
    } else if (typeVal=='spor'){
      bgcolor = 'red';
    } else if (typeVal=='magazin'){
      bgcolor= 'green';
    } else if (typeVal=='genel'){
      bgcolor='gray';
    } else if (typeVal=='sondakika'){
        bgcolor = 'skyblue';
    } else if (typeVal=='güncel'){
        bgcolor = 'brown';
    } else if (typeVal=='eğlence'){
        bgcolor = 'red-yellow';
    } else if (typeVal=='espor'){
        bgcolor = 'red-blue';
    }

    const titleVal= this.props.title;
    const descriptionVal= this.props.description;

    return(
      <View style={{backgroundColor:bgcolor}}>
        <Text style={styles.baslik}>{titleVal}</Text>
        <Text style={styles.aciklama}>{descriptionVal}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  baslik:{
    fontSize: 40,
    fontWeight: "bold"
  },
  aciklama:{
    fontSize: 30,
    fontWeight: "bold"
  }
});
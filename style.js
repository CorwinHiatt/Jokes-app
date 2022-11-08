import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00ffff',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      jokeText:{
        textAlign: 'center',
        fontSize: 40,
      },
      punchline:{
        textAlign:'center',
        color: '#c00',
        fontSize:32,
      },
      bigButton:{
        backgroundColor: 'hotpink',
        padding:'8px 48px',
        borderRadius: 6
      },
      buttonText:{
        color:'white',
        fontSize: 40,
      }
})

export default styles
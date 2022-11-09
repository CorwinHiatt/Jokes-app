import { useEffect, useState } from "react";
import { Text, TouchableOpacity  } from "react-native";
import styles from "../style";

export default function Punchline({punchline}){
    const [reveal, setReveal] = useState(false)
    useEffect(() => {
        setReveal(false)
    }, [punchline])

    return(
        <TouchableOpacity onPress={() => setReveal(!reveal)}
        style={reveal ? styles.show : styles.hidden} >
        <Text style={styles.punchline}>{punchline}</Text>

        </TouchableOpacity>
    )
}
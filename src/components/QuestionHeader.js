import { StyleSheet, Text, View } from 'react-native'

const QuestionHeader = ({question}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{question.title}</Text>
        <Text style={styles.stats} >{question.score} votes · {question.answer_count} answers · {question.view_count} views</Text>

        <View style={styles.separator} />

        <Text style={styles.body} >{question.body_markdown}</Text>
        <View style={styles.tags}>
            {
                question.tags.map(tag=><Text style={styles.tag} key={tag} >{tag}</Text>)
            }
            <Text style={styles.time}>
                asked {new Date(question.creation_date * 1000).toDateString()}
            </Text>
        </View>
    </View>
  )
}

export default QuestionHeader

const styles = StyleSheet.create({
    container:{
        padding:10,
        borderBottomWidth:0.5,
        borderColor:'lightgray'
    },
    stats:{
        fontSize:12
    },
    title:{
        color:'#3b4045',
        marginVertical:5,
        fontSize:20,
        fontWeight:'500',
        lineHeight:28
    },
    body:{
        fontSize:11,
        color:'#232629'
    },
    tags:{
        flexDirection:'row',
        flexWrap:'wrap',
        gap:5,
        marginTop:10,
        alignItems:'center'
    },
    tag:{
        backgroundColor:'#e1ecf4',
        color:'#39739d',
        padding:5,
        overflow:'hidden',
        borderRadius:3,
        fontSize:12
    },
    time:{
        marginLeft:'auto',
        fontSize:12,
        color:'dimgray'
    },
    separator:{
        borderBottomWidth:0.5,
        borderColor:'lightgray',
        marginVertical:10
    }
})
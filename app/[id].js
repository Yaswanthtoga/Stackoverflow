import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSearchParams } from 'expo-router'
import questions from '../data/questions.json';
import answers from '../data/answers.json';

import QuestionHeader from '../src/components/QuestionHeader';
import AnswerListItem from '../src/components/AnswerListItem';


const QuestionDetailsPage = () => {
  const {id} = useSearchParams();
  const question = questions.items.find((q)=>q.question_id==id);

  if(!question){
    return <Text>Question Not Found</Text>
  }

  
  return (
    <View style={{ backgroundColor:'white',flex:1 }}>
      <FlatList
        data={answers.items}
        renderItem={({item})=><AnswerListItem answer={item} />}
        ListHeaderComponent={()=><QuestionHeader question={question} />}
      />
    </View>
  )
}

export default QuestionDetailsPage

const styles = StyleSheet.create({})
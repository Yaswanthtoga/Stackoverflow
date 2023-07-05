import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem";
import { useQuery } from "urql";
import { questionsQuery } from '../src/graphql/query';

export default function Page() {
  const [response] = useQuery({ query:questionsQuery,variables:{sort : 'votes'} });

  if(response.fetching){
    return (
      <ActivityIndicator/>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={response.data.questions.items}
        renderItem={({item})=><QuestionListItem question={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:'white'
  },
});

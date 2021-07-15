import React,{useState} from 'react';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import Home from './Screen/Home';
import NewPost from './Screen/NewPost';
import { Provider as PaperProvider } from 'react-native-paper';


export default function App() {

  const [CreatePost, setCreatePost] = useState(false);

  const createPostHandler = () => {
    setCreatePost(true);
  }

  let context = <Home createPost={createPostHandler} />

  if(CreatePost){
    context=<NewPost />
  }

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        {context }
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

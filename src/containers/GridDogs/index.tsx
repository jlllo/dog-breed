import Constants from 'expo-constants';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import ImageGrid from '../../components/ImageGrid';
import api from '../../services/api';
import { treatDogs } from '../../services/dateset';
import { theme } from '../../styles/global';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight - 15,
    width: 370,
    padding: 0,
    margin: 0,
  },
  item: {
    padding: 0,
    marginVertical: 0,
    marginHorizontal: 0,
  },
  title: {
    fontSize: 32,
  },
  informations: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 2,
  },
  text: {
    lineHeight: 25,
    fontSize: 11,
    fontWeight: 'bold',
    color: theme.secondaryColor,
  },
});

interface Props {
  breed: string
}

export default function ListDogs({ breed }: Props) {
  const [dogs, setDogs] = useState([]);
  const start = 0;
  const [end, setEnd] = useState(28);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  async function loadDogs() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmMDUxNTFiMC1iMzUyLTRiZjYtOTc0Ni0yMDAyOWMyMjI5YTciLCJzdWIiOiI1ZTgzNjBhM2E0YWQ1MTAwMDRlN2EwOTgiLCJpYXQiOjE1ODU2NjgyNTksImV4cCI6MTU4Njk2NDI1OX0.Ub1J_-iOdA3TkamTu6Df1fqhm-1ohqboZ0oYREmoVHg';

    const headers = {
      'Content-Type': 'application/json',
      Authorization: token,
    };

    const params = {
      breed,
    };

    const response = await api.get('/list', {
      params, headers,
    });

    return response.data;
  }

  function nextPage() {
    if (!loading && end !== total) {
      setLoading(true);
      setEnd(end + 24 > total ? total - end : end + 24);
      setPage(page + 1);
      setLoading(false);
    }
  }

  useEffect(() => {
    const firstLoad = async () => {
      const data = await loadDogs();
      const treatedDogs = treatDogs(data.list, start, end);
      setTotal(data.list.length);
      setDogs(treatedDogs);
    };

    firstLoad();
  }, [page]);

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={dogs}
          renderItem={({ item }) => <ImageGrid url={item.link} />}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator
          onEndReached={nextPage}
          onEndReachedThreshold={0.2}
          numColumns={4}
        />
      </SafeAreaView>

    </View>
  );
}

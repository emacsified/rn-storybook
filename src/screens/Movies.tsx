import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Header, PageWrapper, FilmCard } from "../components";
import { getMovie, getPoster } from "../services/useApi";

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingLeft: 16,
    paddingRight: 16,
    width: "100%",
  },
  KAV: {
    flex: 1,
  },
  textInput: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
  },
});

export interface Movie {
  poster_path: string;
}

const Movies = () => {
  const [id, setID] = useState("550");
  const [input, onChangeText] = useState("550");
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [poster, setPoster] = useState("");
  const [, setError] = useState(false);
  useEffect(() => {
    const logMovie = async () => {
      setLoading(true);
      try {
        const movieFromAPI = (await getMovie(id)) as Movie;
        setMovie(movieFromAPI);
        setLoading(false);
      } catch (e) {
        setError(true);
      }
    };
    logMovie();
  }, [id]);

  useEffect(() => {
    if (movie) {
      setPoster(getPoster(movie.poster_path));
    }
  }, [movie]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.KAV}
    >
      <PageWrapper>
        <Header text="Movies" />
        <ScrollView style={styles.container}>
          <FilmCard movie={movie} loading={loading} poster={poster} />
          <TextInput
            style={styles.textInput}
            clearTextOnFocus
            keyboardType="number-pad"
            onChangeText={(text) => onChangeText(text)}
            returnKeyType="done"
          />
          <Button onPress={() => setID(input)} title="Search">
            Search
          </Button>
        </ScrollView>
      </PageWrapper>
    </KeyboardAvoidingView>
  );
};

export default Movies;

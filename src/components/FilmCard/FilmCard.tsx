import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";
import { Title, Subtitle } from "../";
import { getPoster } from "../../services/useApi";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: "25%",
    padding: 12,
    paddingTop: 0,
    backgroundColor: "#c3c3c3",
  },
  column: {
    marginTop: 44,
    flex: 0.5,
    flexDirection: "column",
  },
  leftColumn: {
    textAlign: "left",
  },
  rightColumn: {
    textAlign: "right",
  },
  image: {
    resizeMode: "contain",
    height: 400,
    width: "100%",
  },
  row: {
    flexDirection: "row",
  },
  alignRight: {
    alignItems: "flex-end",
  },
});

// const image = {
// uri: "https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/baby-driver-rory-hi-res.jpg",
// };

const FilmCard = ({ movie, loading, poster }) => (
  <View style={styles.container}>
    <ActivityIndicator size="large" animating={loading} />
    {!loading && (
      <>
        <Image style={styles.image} source={{ uri: poster }} />
        <View style={styles.row}>
          <View style={styles.column}>
            <Title style={styles.bottomText}>{movie.title}</Title>
            <Subtitle style={styles.bottomText}>{movie.release_date}</Subtitle>
          </View>
          <View style={{ ...styles.column, ...styles.alignRight }}>
            <Subtitle>{movie.genres[0].name}</Subtitle>
            <Subtitle>{`${movie.runtime} minutes`}</Subtitle>
          </View>
        </View>
      </>
    )}
  </View>
);

export default FilmCard;

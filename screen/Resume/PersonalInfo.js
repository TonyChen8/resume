import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Desktop, Tablet, Mobile, Default } from "../../style/mediaquery";

import Text from "../../components/Text";
import Separator from "../../components/Separator";

export default () => {
  let items = [
    { name: "Address", info: "75 Tramore St. Rocklea, QLD, 4106" },
    { name: "Phone", info: "0405896050" },
    { name: "E-mail", info: "tonychen8302@gmail.com" }
  ];

  const DesktopDetails = () => {
    return items.map((item, index) => {
      return (
        <View style={styles()} key={index}>
          <Text
            style={styles()
              .bold()
              .ftSize(15)
              .marginb(0)}
          >
            {item.name}
          </Text>
          <Text
            style={styles()
              .ftSize(14)
              .marginb(15)}
          >
            {item.info}
          </Text>
        </View>
      );
    });
  };

  const MobileDetials = () => {
    let infos = [];
    let array;
    items.forEach((item, index) => {
      if (index % 2 === 0) {
        array = [item];
        infos.push(array);
      } else {
        array.push(item);
      }
    });

    return infos.map((row, index) => {
      return (
        <View style={styles().row()} key={index}>
          {row.map((item, index) => {
            return (
              <View style={styles().container()} key={index}>
                <Text
                  style={styles()
                    .bold()
                    .ftSize(15)
                    .marginb(0)}
                >
                  {item.name}
                </Text>
                <Text
                  style={styles()
                    .ftSize(14)
                    .marginb(15)}
                >
                  {item.info}
                </Text>
              </View>
            );
          })}
        </View>
      );
    });
  };

  return (
    <View style={styles().marginb(20)}>
      <Text
        style={styles()
          .bold()
          .ftSize(22)
          .marginb(10)}
      >
        Personal Info
      </Text>
      <Separator style={styles().marginb(22)}></Separator>
      <Desktop>
        <DesktopDetails></DesktopDetails>
      </Desktop>
      <Mobile>
        <MobileDetials></MobileDetials>
      </Mobile>
    </View>
  );
};

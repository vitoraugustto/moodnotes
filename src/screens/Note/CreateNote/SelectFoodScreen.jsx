import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FOODS } from '../../../utils';

import {
  Box,
  Button,
  Icon,
  Margin,
  MyText,
  Padding,
  Row,
  SafeArea,
} from '../../../components';

import { COLOR_BLUE_400, FONTS } from '../../../themes/theme';

const SelectFoodScreen = ({ route }) => {
  const { selectedMood } = route.params || {};
  const navigation = useNavigation();

  const [selectedFoods, setSelectedFoods] = useState([]);

  const handleDescribeScreen = () => {
    navigation.navigate('DescribeMoodScreen', {
      selectedMood: selectedMood,
      selectedFoods: selectedFoods,
    });
  };

  const handleSelectMood = food => {
    const selectedFood = selectedFoods.filter(f => {
      return f === food;
    });

    if (selectedFood.length > 0) {
      setSelectedFoods([...selectedFoods.filter(f => f !== food)]);
    } else {
      setSelectedFoods([...selectedFoods, food]);
    }
  };

  return (
    <SafeArea>
      <Box flex>
        <ScrollView>
          <Padding all={16}>
            <Margin top={16} />
            <MyText size={18} font={FONTS.lato.bold}>
              O que você comeu hoje?
            </MyText>
            <Margin top={12} />
            <Row
              hCenter
              style={{
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
              }}>
              {Object.entries(FOODS).map(([food, { icon, text }], index) => (
                <FoodButton
                  key={index}
                  iconName={icon}
                  text={text}
                  onPress={() => handleSelectMood(food)}
                  highlight={selectedFoods.includes(food)}
                />
              ))}
            </Row>
          </Padding>
        </ScrollView>
        {selectedFoods.length > 0 ? (
          <Button
            style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
            height={56}
            borderRadius={0}
            onPress={handleDescribeScreen}
            text="Continuar"
          />
        ) : null}
      </Box>
    </SafeArea>
  );
};

const FoodButton = ({ highlight, iconName, text, onPress }) => {
  return (
    <Box
      borderColor="transparent"
      width="50%"
      bgColor={highlight ? COLOR_BLUE_400 : 'transparent'}
      borderRadius={16}
      hCenter
      onPress={onPress}>
      <Padding top={10} />
      <Icon size={70} iconName={iconName} />
      <Margin top={8} />
      <MyText spacing={1} font={FONTS.poppins.semibold}>
        {text}
      </MyText>
      <Padding top={4} />
    </Box>
  );
};

export default SelectFoodScreen;

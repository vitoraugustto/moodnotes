import { defaultOptions } from '.';
import ListNotesScreen from '../screens/Note/ListNote/ListNotesScreen';
import SelectMoodScreen from '../screens/Note/CreateNote/SelectMoodScreen';
import SelectFoodScreen from '../screens/Note/CreateNote/SelectFoodScreen';
import DescribeMoodScreen from '../screens/Note/CreateNote/DescribeMoodScreen';

export const NOTE_ROUTES = {
  SelectMoodScreen: {
    component: SelectMoodScreen,
    options: defaultOptions,
  },
  SelectFoodScreen: {
    component: SelectFoodScreen,
    options: defaultOptions,
  },
  DescribeMoodScreen: {
    component: DescribeMoodScreen,
    options: defaultOptions,
  },
  ListNotesScreen: {
    component: ListNotesScreen,
    options: defaultOptions,
  },
};

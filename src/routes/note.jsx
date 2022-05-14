import { defaultOptions } from '.';
import CreateNoteSelectMoodScreen from '../screens/Note/CreateNote/CreateNoteSelectMoodScreen';
import CreateNoteSelectFoodScreen from '../screens/Note/CreateNote/CreateNoteSelectFoodScreen';

import CreateNoteDescribeScreen from '../screens/Note/CreateNote/CreateNoteDescribeScreen';

export const NOTE_ROUTES = {
  CreateNote__SelectMoodScreen: {
    component: CreateNoteSelectMoodScreen,
    options: defaultOptions,
  },
  CreateNote__SelectFoodScreen: {
    component: CreateNoteSelectFoodScreen,
    options: defaultOptions,
  },
  CreateNote__DescribeScreen: {
    component: CreateNoteDescribeScreen,
    options: defaultOptions,
  },
};

import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import todoList from './tabs/todoList';
import todoCalendar from './tabs/todoCalendar';
import todoStatistics from './tabs/todoStatistics';
import { withTranslation } from "react-i18next";
import i18n from './locales/i18n'

//////////////// 탭 설정 ////////////////////////////////
const TabNavigator = createMaterialTopTabNavigator({
  List: {
    screen: todoList,
    navigationOptions: {
      tabBarLabel: i18n.t('list'),
    }
  },
  Calendar: {
    screen: todoCalendar,
    navigationOptions: {
      tabBarLabel: i18n.t('calendar'),
    }
  },
  Statistics: {
    screen: todoStatistics,
    navigationOptions: {
      tabBarLabel: i18n.t('statistics'),
    }
  },
});
/////////////////////////////////////////////////////////


// export default WhatTodoApp;
export default createAppContainer(TabNavigator);


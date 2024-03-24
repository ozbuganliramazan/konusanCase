import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';

const screenWrapper = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.BLACK,
  },
  HeaderStyle: {
    backgroundColor: AppColors.BLACK,
  },
  tabBarStyle: {
    backgroundColor: AppColors.BLACK,
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {screenWrapper};

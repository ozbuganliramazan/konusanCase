import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';
import {width} from '../utils/constans';

// define your styles
const locationScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.BLACK,
  },
});
const locationCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 2 - 20,
    height: width / 2 - 5,
    margin: 10,
    backgroundColor: AppColors.ORANGE,
    borderRadius: 5,
  },
  infoContainer: {
    backgroundColor: AppColors.GREEN,
    padding: 10,
    flex: 1,
  },
  name: {color: AppColors.WHITE, marginBottom: 10},
  dimension: {
    color: AppColors.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  indexContainer: {
    borderRadius: 100,
    right: 5,
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  index: {
    color: AppColors.WHITE,
    fontSize: 30,
    fontWeight: 'bold',
  },
  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export {locationCardStyles, locationScreenStyles};

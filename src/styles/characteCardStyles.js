import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';
import {width} from '../utils/constans';
const characteCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.BLACK,
    width: width / 2 - 20,
    height: width / 2 - 20,
  },
  infoContainer: {
    backgroundColor: AppColors.GREEN,
    bottom: 0,
    position: 'absolute',
    width: '100%',
    padding: 10,
  },
  name: {
    color: AppColors.WHITE,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {color: AppColors.WHITE},
  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  genderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {characteCardStyles};

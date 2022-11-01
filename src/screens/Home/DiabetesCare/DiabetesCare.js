
import { View } from 'react-native';
import AllProducts from './AllProducts';
import Banner from './Banner';
import DiabeticDiet from './DiabeticDiet';

const DiabetesCare = () => {
  return (
    <View>
      <Banner/>
      <View>
        <DiabeticDiet/>
      </View>
      <AllProducts/>
    </View>
    
  );
}
export default DiabetesCare;
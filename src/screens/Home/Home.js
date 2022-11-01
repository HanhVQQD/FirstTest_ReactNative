
import { ScrollView, View } from 'react-native';
import AllProducts from './AllProducts';
import Banner from './Banner';
import DiabeticDiet from './DiabeticDiet';

const Home = () => {
  return (
    <ScrollView>
      <Banner/>
      <View>
        <DiabeticDiet/>
      </View>
      <AllProducts/>
    </ScrollView>
    
  );
}
export default Home;
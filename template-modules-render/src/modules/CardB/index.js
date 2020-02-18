import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

const styles = {
  card: {
    margin: '10rpx',
    padding: '10rpx',
    backgroundColor: '#efefef',
  },
  title: {
    fontSize: '35rpx',
  },
  data: {
    fontSize: '15rpx',
  }
}

const Card = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>CardB</Text>
      <View>
        <Text style={styles.data}>
          {props.data.name}
        </Text>
      </View>
    </View>
  );
};

Card.getModuleRows = (modData) => {
  return [modData[0], modData[0]]
}

export default Card;

import {createElement, render} from 'rax';
import UniversalDriver from 'driver-universal';
import View from 'rax-view';
import TextInput from 'rax-textinput';
import ScrollView from 'rax-scrollview';
import Text from 'rax-text';
import Image from 'rax-image';
import styles from './app.css';

function Card ({children, style}) {
  return <View style={Object.assign({}, styles.card, style)}>{children}</View>
}

function Address(props) {

  return (
    <Card>
      <View style={styles.addressIconContainer}>
        <Image style={styles.addressIcon} source={{uri: 'https://gw.alicdn.com/tfs/TB17gX2wYvpK1RjSZPiXXbmwXXa-128-128.png'}} resizeMode={'contain'} />
      </View>
      <View style={styles.addressTextContainer}>
        <View style={styles.addressName}>
          <Text style={{color: 'rgb(51, 51, 51)', fontSize: 30}}>淘小宝</Text>
          <Text style={{marginLeft: 10, color: 'rgb(153, 153, 153)', fontSize: 26}}>18888888888</Text>
        </View>
        <View style={styles.addressLocation}>
          <Text style={{color: 'rgb(51, 51, 51)', fontSize: 24}}>🏣 浙江省杭州市余杭区文一西路 969 号 6 号楼小邮局</Text>
        </View>
      </View>
      <View style={styles.addressChangeContainer}>
        <Image style={styles.changeIcon} source={{uri: 'https://img.alicdn.com/tfs/TB1GJlboYj1gK0jSZFOXXc7GpXa-212-200.png'}} resizeMode={'contain'} />
      </View>
    </Card>
  );
}

function ItemDetail({shopIcon, shopName, itemPic, itemTitle, itemSku, itemPrice, itemNum}) {
  return <Card style={{flexDirection: 'column'}}>
    <View style={{flexDirection: 'row'}}>
      <Image style={{marginRight: 20, marginLeft: 20, width: 32, height: 32}} source={{uri: shopIcon}} />
<Text style={{color: 'rgb(51, 51, 51)', fontSize: 26 }}>{shopName}</Text>
    </View>
    <View style={{flexDirection: 'row'}}>
      <View>
        <Image style={{width: 200, height: 200}} source={{uri: itemPic}} />
      </View>
      <View style={{flex: 1, marginTop: 20}}>
<Text style={{color: 'rgb(51, 51, 51)', fontSize: 24}}>{itemTitle}</Text>
<Text style={{color: 'rgb(156, 156, 156)', fontSize: 20, marginTop: 10}}>{itemSku}</Text>
        <Text style={{backgroudColor: 'rgb(245, 172, 71)', color: 'rgb(255, 80, 0)', fontSize: 20, marginTop: 10}}>七天无理由退换</Text>
      </View>
      <View style={{marginLeft: 10, marginTop: 20, width: 100, textAlign: 'right'}}>
        <Text style={{color: 'rgb(51, 51, 51)', fontSize: 20}}>￥ {itemPrice}</Text>
        <Text style={{color: 'rgb(156, 156, 156)', fontSize: 20, marginTop: 10}}>x{itemNum}</Text>
     </View>
    </View>

    <View style={{flexDirection: 'row', marginTop: 50}}>
      <Text style={{color: 'rgb(51, 51, 51)', fontSize: 24, width: 180, textAlign: 'right', marginRight: 20}}>配送方式</Text>
      <Text style={{color: 'rgb(156, 156, 156)', fontSize: 24, textAlign: 'left', flex: 1}}>普通配送</Text>
      <Text style={{color: 'rgb(51, 51, 51)', fontSize: 24, textAlign: 'right', width: 160}}>快递 免邮</Text>
      <Image style={styles.changeIcon} source={{uri: 'https://img.alicdn.com/tfs/TB1GJlboYj1gK0jSZFOXXc7GpXa-212-200.png'}} resizeMode={'contain'} />
    </View>

    <View style={{flexDirection: 'row', marginTop: 50}}>
      <Text style={{color: 'rgb(51, 51, 51)', fontSize: 24, width: 180, textAlign: 'right', marginRight: 20}}>运费险</Text>
      <Text style={{color: 'rgb(156, 156, 156)', fontSize: 24, textAlign: 'left', flex: 1}}>卖家赠送，退换货可赔</Text>
      <Text style={{color: 'rgb(51, 51, 51)', fontSize: 24, textAlign: 'right', width: 160}}></Text>
      <Image style={styles.changeIcon} source={{uri: 'https://img.alicdn.com/tfs/TB1GJlboYj1gK0jSZFOXXc7GpXa-212-200.png'}} resizeMode={'contain'} />
    </View>

    <View style={{flexDirection: 'row', marginTop: 50}}>
      <Text style={{color: 'rgb(51, 51, 51)', fontSize: 24, width: 180, textAlign: 'right', marginRight: 20}}>开具发票</Text>
      <Text style={{color: 'rgb(156, 156, 156)', fontSize: 24, textAlign: 'left', flex: 1}}></Text>
      <Text style={{color: 'rgb(51, 51, 51)', fontSize: 24, textAlign: 'right', width: 160}}>本次不开发票</Text>
      <Image style={styles.changeIcon} source={{uri: 'https://img.alicdn.com/tfs/TB1GJlboYj1gK0jSZFOXXc7GpXa-212-200.png'}} resizeMode={'contain'} />
    </View>

    <View style={{flexDirection: 'row', marginTop: 50}}>
      <Text style={{color: 'rgb(51, 51, 51)', fontSize: 24, width: 180, textAlign: 'right', marginRight: 20}}>订单备注</Text>
      <TextInput placeholder="选填,请先和商家协商一致" style={{color: 'rgb(156, 156, 156)', padding: 0, fontSize: 24, textAlign: 'left', flex: 1, height: 34}}></TextInput>
    </View>

    <View style={{flexDirection: 'row', marginTop: 50, justifyContent: 'flex-end'}}>
      <Text style={{color: 'rgb(156, 156, 156)', fontSize: 24, marginRight: 10}}>共 {itemNum} 件</Text>
      <Text style={{color: 'rgb(51, 51, 51)', fontSize: 24, marginRight: 10}}>小计:</Text>
<Text style={{color: 'rgb(255, 80, 0)', fontSize: 24}}>¥ {itemPrice * itemNum}</Text>
    </View>
  </Card>
}

function SubmitBar({totalNum, totalPrice}) {
  return <View style={styles.submitBar}>
  <View style={{flexDirection: 'row'}}>
    <Text style={{color: 'rgb(156, 156, 156)', fontSize: 24, marginRight: 10}}>共 {totalNum} 件，</Text>
    <Text style={{color: 'rgb(51, 51, 51)', fontSize: 28, marginRight: 10}}>合计:</Text>
<Text style={{color: 'rgb(255, 80, 0)', fontSize: 28}}>¥ {totalPrice}</Text>
  </View>
  <View>
    <Text style={styles.submitButton}>提交订单</Text>
  </View>
</View>
}

function App() {
  return [
    <ScrollView style={{marginBottom: 100}}>
      <Address />
      <ItemDetail
        shopName="天猫精灵官方旗舰店"
        shopIcon="//gw.alicdn.com/tfs/TB1CzD7SXXXXXXJaXXXXXXXXXXX-32-32.png"
        itemPrice={549}
        itemNum={1}
        itemPic="//gw.alicdn.com/imgextra/i4/3081047815/O1CN01Fp4FPk27bJp2SkIig_!!3081047815.jpg"
        itemTitle="天猫精灵 CC家庭版带屏智能音箱AI语音助手家用无线蓝牙音响送礼"
        itemSku="套餐类型:标配版;颜色分类:番果红;"
      />
      <ItemDetail
        shopName="淘宝心选"
        shopIcon="//img.alicdn.com/tfs/TB1pNGRRVXXXXXuXXXXXXXXXXXX-32-32.png"
        itemPrice={399.9}
        itemNum={2}
        itemPic="//gw.alicdn.com/imgextra/i4/3294889394/O1CN012JGV7lFcHZB8nT7_!!3294889394.png"
        itemTitle="淘宝心选铝框拉杆箱行李箱 女男旅行箱万向轮密码箱20寸24寸26寸"
        itemSku="尺寸:20寸;颜色分类:宽条纹-黑色磨砂;"
      />
    </ScrollView>,
    <SubmitBar totalNum={3} totalPrice={1000} />
  ];
}

render(<App />, document.getElementById('root'), { driver: UniversalDriver });

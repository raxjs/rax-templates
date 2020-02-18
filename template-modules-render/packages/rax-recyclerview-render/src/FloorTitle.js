import { createElement, useEffect, useState } from 'rax';
import Text from 'rax-text';
import View from 'rax-view';
import Picture from 'rax-picture';

let styles = {
  floorTitle: {
    height: '72rpx',
    width: '750rpx',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTextCtn: {
    height: '62rpx',
    paddingLeft: '24rpx',
    paddingRight: '24rpx',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: '30rpx',
    lineHeight: '42rpx',
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  titleImg: {
    height: '48rpx',
    width: '120rpx',
  },
  imgRight: {
    transform: 'scaleX(-1)'
  }
};

function _getTitleData(props){
  const { data, pageInfo } = props;
  const { floorTitle, theme } = data;
  const pageInfoTheme = pageInfo.theme;
  const icon = (theme && theme.floorTitleIcon) || (pageInfoTheme && pageInfoTheme.floorTitleIcon) || '//gw.alicdn.com/tfs/TB1kgjan3vD8KJjy0FlXXagBFXa-76-60.jpg';
  const elevatorid = props.moduleId;
  return {
    title: floorTitle,
    elevatorid, icon,
  };
}

export default (props) => {
  const {
    title,
    elevatorid,
    icon,
  } = _getTitleData(props);
  const theme = props.data && props.data.theme || {};
  const pageInfoTheme = props.pageInfo && props.pageInfo.theme || {};
  const floorTitleBoxStyle = theme.floorTitleBoxStyle || pageInfoTheme.floorTitleBoxStyle || null;
  const floorTitleIconStyle = theme.floorTitleIconStyle || pageInfoTheme.floorTitleIconStyle || null;
  const floorTitleTextStyle = theme.floorTitleTextStyle || pageInfoTheme.floorTitleTextStyle || null;
    
  return (
    <View 
      style={{
        ...styles.floorTitle,
        ...floorTitleBoxStyle,
      }}
      id={`pcom-floor-title-${elevatorid}`}
    >
      <Picture
        source={{ uri: icon }}
        style={{
          ...styles.titleImg,
          ...floorTitleIconStyle,
        }}
      />
      <View style={styles.titleTextCtn}>
        <Text style={{
          ...styles.mainTitle,
          ...floorTitleTextStyle,
        }}>
          {title}
        </Text>
      </View>
      <Picture
        source={{ uri: icon }}
        style={{
          ...styles.titleImg,
          ...floorTitleIconStyle,
          ...styles.imgRight,
        }}
      />
    </View>
  );
};
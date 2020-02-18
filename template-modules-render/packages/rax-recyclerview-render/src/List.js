import { createElement, useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'rax';
import View from 'rax-view';
import RecyclerView from 'rax-recyclerview';
import Page from './Page';
import Mod from './Module';

const bgImgUrl = (pageTheme) => {
  return pageTheme.backgroundImageUrl;
};

const bgColor = (pageTheme) => {
  let color = pageTheme.backgroundColor;
  if (pageTheme.backgroundImageUrl) {
    color = 'transparent';
  }
  return color;
};

let handleEndReached = (e) => {
    window.dispatchEvent(new CustomEvent('onListEndReached', { detail: e }));
};
let handleScroll = (e) => {
    window.dispatchEvent(new CustomEvent('onListScroll', { detail: e }));
};

let ListPage = (props, ref) => {
  const {
    dataProcessor,
  } = props;

  const [backgroundList, setBackgroundList] = useState([]);
  const [headerList, setHeaderList] = useState([]);
  const [bodyList, setBodyList] = useState([]);
  const [footerList, setFooterList] = useState([]);
  const [pageBackgroundColor, setPageBackgroundColor] = useState('transparent');

  useImperativeHandle(ref, () => ({
    updateData: (resultValue, option) => {
      const ProcessedData = dataProcessor.getModulesData(resultValue);
      let {
        backgroundModList,
        headerModList,
        bodyModList,
        footerModList
      } = ProcessedData;
      setBackgroundList([...backgroundModList]);
      setHeaderList([...headerModList]);
      setBodyList([...bodyModList]);
      setFooterList([...footerModList]);
      if (resultValue.pageInfo) {
        let theme = resultValue.pageInfo.theme;
        setPageBackgroundColor(theme.backgroundColor || 'transparent');
      }
    },
  }));

  let pageStyle = {
    backgroundColor: pageBackgroundColor
  };

  if (bodyList.length) {
    return (
      <Page style={pageStyle}>
        {
          backgroundList.map((data, index) => {
            return <Mod key={'bg_mod_'+index} {...data} />
          })
        }
        {
          headerList.map((data, index) => {
            return <Mod key={'header_mod_'+index} {...data} />
          })
        }
        <RecyclerView id="recyclerview"
          onScroll={handleScroll}
          onEndReached={handleEndReached}
        >
          {
            bodyList.map((data, index) => {
              return <Mod key={'body_mod_'+index} {...data} />
            })
          }
        </RecyclerView>
        {
          footerList.map((data, index) => {
            return <Mod key={'footer_mod_'+index} {...data} />
          })
        }
      </Page>
    );
  } else {
    return <View />
  }

};

export default forwardRef(ListPage);

  
import { createElement } from 'rax';

function Document(props) {
  const {
    publicPath,
    styles,
    scripts
  } = props;
  
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover"/>
        <title>template-buy</title>
        {styles.map((src, key) => <link rel="stylesheet" href={`${publicPath}${src}`} key={`style_${index}`} />)}
      </head>
      <body style={{ margin: 0, backgroundColor: '#f2f2f2', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>
        {/* root container */}
        <div id="root" />
        {scripts.map(
          (src, index) => <script src={`${publicPath}${src}`} key={`script_${index}`}>
            {/* self-closing script element will not work in HTML */}
          </script>
        )}
      </body>
    </html>
  );
}

export default Document;

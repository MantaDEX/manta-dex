import Script from 'next/script'

const MetaCRM = () => {
  return (
    <>
      <Script id="metaCRM">
        {`async function loadScript(src) {
        return new Promise((resolve, reject) => {
          var fjs = document.getElementsByTagName('script')[0];
          if (document.getElementById('widget-dom-id')) return;
          const script = document.createElement('script');
          script.crossOrigin = 'anonymous';
          script.id = 'widget-dom-id';
          script.src = src;
          script.integrity =
            'sha384-PoM7o0U30er3PhVG/lLdOBmMNScS8RLu3W37+UCsF+0pIyPgSKO4rPKz480MVSEM';
          script.onload = () => resolve(script);
          script.onerror = () =>
            reject(new Error("Script load error for "));
          fjs.parentNode.insertBefore(script, fjs);
        });
      }
      (async function () {
        try {
          await loadScript(
            'https://widget.metacrm.inc/static/js/widget-1-1-9.js'
          );
          MetaCRMWidget.init({
            apiKey: 'w3aswcfkf5j'
          });
        } catch (error) {
          console.error('Failed to load widget.js', error);
        }
      })();`}
      </Script>
    </>
  )
}

export default MetaCRM

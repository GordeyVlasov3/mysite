import { useEffect } from 'react'

const YandexMetrika = () => {
  useEffect(() => {
    // Загружаем скрипт Яндекс.Метрики
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104285433', 'ym');

      ym(104285433, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
    `
    
    // Добавляем скрипт в head
    document.head.appendChild(script)
    
    // Добавляем noscript для случаев без JavaScript
    const noscript = document.createElement('noscript')
    noscript.innerHTML = '<div><img src="https://mc.yandex.ru/watch/104285433" style="position:absolute; left:-9999px;" alt="" /></div>'
    document.head.appendChild(noscript)
    
    // Очистка при размонтировании компонента
    return () => {
      // Удаляем скрипт при размонтировании
      const scripts = document.querySelectorAll('script')
      scripts.forEach(s => {
        if (s.innerHTML.includes('mc.yandex.ru/metrika/tag.js')) {
          s.remove()
        }
      })
      
      // Удаляем noscript
      const noscripts = document.querySelectorAll('noscript')
      noscripts.forEach(n => {
        if (n.innerHTML.includes('mc.yandex.ru/watch')) {
          n.remove()
        }
      })
    }
  }, [])

  return null // Компонент не рендерит ничего видимого
}

export default YandexMetrika

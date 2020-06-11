export default function ({ route, store }) {
  route.meta.matomo = {
    documentTitle: ['setDocumentTitle', 'www.ebelleon.de' + route.path],
    cookieDomain: ['setCookieDomain', '*.ebelleon.de'],
    trackPrageView: ['trackPageView'],
    enableLinkTracking: ['enableLinkTracking']
  }
}

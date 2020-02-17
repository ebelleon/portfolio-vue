const cookieBanner = document.querySelector('.cookieBanner')

cookieBanner.style.display = Object.prototype.hasOwnProperty.call(
  localStorage,
  'closedCookieBanner'
)
  ? 'none'
  : ''

document.querySelector('.closeContainer').addEventListener('click', () => {
  cookieBanner.style.display = 'none'
  localStorage.setItem('closedCookieBanner', '1')
})

const useNavButtonFind = (location, pages) => {
  let previus = pages.slice(-1)
  let next = [pages[1]]
  let isHome = false
  const getButtonsPosition = (location) => {
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].path == location.pathname) {
        if (i == 0) {
          previus = pages.slice(-1)[0]
          next = pages[i + 1]
        } else if (i == pages.length - 1) {
          previus = pages[i - 1]
          next = pages[0]
        } else {
          previus = pages[i - 1]
          next = pages[i + 1]
        }
      }
    }
  }
  getButtonsPosition(location)
  if (location.pathname == '/') {
    isHome = true
  }

  return { next, previus, isHome }
}

export default useNavButtonFind

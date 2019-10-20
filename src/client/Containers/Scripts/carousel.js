const $ = document.getElementsByClassName

$('carousel').each(() => {
  const $carousel = $(this)
  const $carouselContainer = $carousel.find('carousel-container')
  const $carouselList = $carousel.find('carousel-list')
  const $carouselItem = $carousel.find('carousel-item')
  const $carouselButton = $carousel.find('carousel-button')
  const setItemWidth = () => {
    $carouselList.removeAttr('style')
    const curWidth = $($carouselItem[0]).outerWidth() * $carouselItem.length
    $carouselList.css('width', curWidth)
  }
  const slide = () => {
    const $button = $(this)
    const dir = $button.data('dir')
    const curPos = parseInt($carouselList.css('left'), 10) || 0
    let moveto = 0
    const containerWidth = $carouselContainer.outerWidth()
    const listWidth = $carouselList.outerWidth()
    const before = curPos + containerWidth
    const after = listWidth + (curPos - containerWidth)
    if (dir === 'next') {
      moveto = after < containerWidth ? curPos - after : curPos - containerWidth
    } else {
      moveto = before >= 0 ? 0 : curPos + containerWidth
    }

    $carouselList.animate({
      left: moveto,
    })
  }
  $(window).resize(() => {
    setItemWidth()
  })
  setItemWidth()

  $carouselButton.on('click', slide)
})

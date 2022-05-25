export const decreaseImgQuality = (url, decreaseTo = 40) => `https://images.weserv.nl/?url=${url}&w=100&h=100&q=${decreaseTo}&fit=inside&we`

export const isImgCached = url => {
  var image = new Image();
  image.src = url;
  return image.complete;
}



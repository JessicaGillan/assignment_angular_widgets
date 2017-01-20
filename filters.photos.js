widgets.filter('photoFilterFilter', function() {
  return function(images, igFilter) {
    if (!igFilter) { return images; }
    var filteredImages = [];

    angular.forEach(images, function(image) {
      if (image.filter === igFilter) {
        filteredImages.push(image);
      }
    });

    return filteredImages;
  }
});

widgets.filter('photoHashtagFilter', function() {
  return function(images, igFilter) {
    if (!igFilter) { return images; }
    var filteredImages = [];

    angular.forEach(images, function(image) {
      if (image.tags.indexOf(igFilter) > -1) {
        filteredImages.push(image);
      }
    });

    return filteredImages;
  }
});

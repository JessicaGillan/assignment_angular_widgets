widgets.filter('photoFilter', function() {
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

module.exports.annotationDisplayManager = (currentTime, annotationTracks) => {
  annotationTracks.flat()
  .filter(track => track.startTime === currentTime || track.endTime === currentTime)
  .forEach(track => {
    if (currentTime === track.startTime) {
      track.show();
    }

    if (track.startTime === track.endTime || currentTime === track.endTime) {
      track.hide();
    }
  });
};

const defaultConstraints = {
  audio: false,
  video: {
    width: 1280,
    height: 720,
    frameRate: 30
  }
}

export function getUserMedia (audioId, videoId, success, error) {
  const constraints = {
    audio: false, // todo: spread 'audio' when feature complete
    video: {
      ...defaultConstraints.video,
      id: videoId
    }
  }
  navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => success(stream))
    .catch(err => error(err))
}

export function enumerateDevices (success, error) {
  navigator.mediaDevices.enumerateDevices()
    .then(devices => {
      const deviceTypes = devices.reduce((d, curr) => {
        switch (curr.kind) {
          case 'audioinput':
            return {
              audioinput: [...d.audioinput, curr],
              videoinput: [...d.videoinput]
            }
          case 'videoinput':
            return {
              videoinput: [...d.videoinput, curr],
              audioinput: [...d.audioinput]
            }
          default:
            return {
              videoinput: [...d.videoinput],
              audioinput: [...d.audioinput]
            }
        }
      }, { audioinput: [], videoinput: [] })

      success(deviceTypes)
    })
    .catch(e => error(e))
}

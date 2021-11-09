export const audioList = [
  {
    name: '手紙',
    singer: 'Angela Aki',
    cover:
      '/static/images/tegami.jpeg',
    musicSrc:
      '/static/music/tegami.mp3',
  },
  {
    name: 'LẠC',
    singer: 'Rhymastic',
    cover:
      '/static/images/lac.jpeg',
    musicSrc:
      '/static/music/lac.mp3',
  },
  {
    name: '错位时空 - 艾辰',
    singer: 'Ngải Thần',
    cover:
      '/static/images/thoikhongsailech.jpeg',
    musicSrc:
      '/static/music/thoikhongsailech.mp3',
  },
]

export const options = {
  audioLists: audioList,
  defaultPlayIndex: 0,
  defaultPosition: {
    right: 50,
    bottom: '50px',
  },
  autoPlay: false,
  drag: false,
  seeked: true,
  showPlay: true,
  showDownload: false,
  loadAudioErrorPlayNext: true,
  responsive: true,
}
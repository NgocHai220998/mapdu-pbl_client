export const audioList = [
  {
    name: '君の名は',
    singer: 'Kamishiraishi Mone',
    cover:
      '/static/images/kiminonawa.jpeg',
    musicSrc:
      '/static/music/kiminonawa.mp3',
  },
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
  {
    name: '愛を込めて',
    singer: 'Teshima Aoi',
    cover:
      '/static/images/umi.jpeg',
    musicSrc:
      '/static/music/umi.mp3',
  },
  {
    name: '百万个可能 张含韵',
    singer: 'Trương Hàm Vận',
    cover:
      '/static/images/mottrieukhanang.jpeg',
    musicSrc:
      '/static/music/mottrieukhanang.mp3',
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
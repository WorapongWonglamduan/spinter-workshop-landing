// Workshop Showcase data and configuration
export interface ShowcaseData {
  photos: string[];
  title: string;
  description: string;
  stats: {
    number: string;
    label: string;
  }[];
}

export default function helper() {
  const showcaseData: ShowcaseData = {
    photos: [
      "/images/photos/LINE_ALBUM_7169_260224_7.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_8.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_9.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_11.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_12.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_13.jpg",
    ],
    title: "WORKSHOP IN ACTION",
    description: "See our state-of-the-art welding workshop and training facilities",
    stats: [
      { number: "500+", label: "Trained Welders" },
      { number: "15+", label: "Years Experience" },
      { number: "100%", label: "Safety Record" },
      { number: "50+", label: "Workshop Bays" },
    ]
  };

  return {
    showcaseData
  };
}

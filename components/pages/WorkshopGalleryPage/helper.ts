// Workshop Gallery data and configuration
export interface GalleryData {
  photos: string[];
  title: string;
  description: string;
}

export default function helper() {
  const galleryData: GalleryData = {
    photos: [
      "/images/photos/LINE_ALBUM_7169_260224_1.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_5.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_10.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_15.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_20.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_25.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_30.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_35.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_40.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_45.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_50.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_55.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_60.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_65.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_70.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_75.jpg",
      "/images/photos/LINE_ALBUM_7169_260224_80.jpg",
    ],
    title: "WELDING WORKSHOP TRAINING",
    description: "Our professional welding training programs - Hands-on experience with skilled instructors and industry-standard equipment"
  };

  return {
    galleryData
  };
}

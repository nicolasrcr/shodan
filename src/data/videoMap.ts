// Shared mapping: technique name → YouTube video ID
// Used by both GokyoSection (thumbnails) and VideosSection (cards)

export const techniqueVideoMap: Record<string, string> = {
  // Te-waza
  "Seoi-Nage": "zIq0xI0ogxk",
  "Ippon-Seoi-Nage": "FQnOlCxo4oI",
  "Seoi-Otoshi": "vu1TMVNnq34",
  "Tai-Otoshi": "4x6S3Q-Ktv8",
  "Kata-Guruma": "cnHRhSy8yi4",
  "Sukui-Nage": "vU6aJ2kFxoI",
  "Obi-Otoshi": "ff8U2TVZIYI",
  "Uki-Otoshi": "6H5tmncOY4Q",
  "Sumi-Otoshi": "lLU9wv52ni0",
  "Yama-Arashi": "MGlyKmSuzdc",
  "Obi-Tori-Gaeshi": "bpc82SrunUU",
  "Morote-Gari": "BHLQS4K85bs",
  "Kuchiki-Taoshi": "ZNL47q1aJNY",
  "Kibisu-Gaeshi": "tJylJYfBliA",
  "Uchi-Mata-Sukashi": "V-RS3uhtVWM",
  "Ko-Uchi-Gaeshi": "_MWAdYi_LC4",

  // Koshi-waza
  "Uki-Goshi": "bPKwtB4lyOQ",
  "O-Goshi": "yhu1mfy2vJ4",
  "Koshi-Guruma": "SU7Id6uVJ44",
  "Tsurikomi-Goshi": "McfzA0yRVt4",
  "Sode-Tsurikomi-Goshi": "QsmAxpmYLOI",
  "Harai-Goshi": "qTo8HlAAkOo",
  "Tsuri-Goshi": "51Htlp7xEvE",
  "Hane-Goshi": "M9_7De6A1kk",
  "Utsuri-Goshi": "4pQd_bEnlf0",
  "Ushiro-Goshi": "ORIYstuxYT8",

  // Ashi-waza
  "De-Ashi-Harai": "4BUUvqxi_Kk",
  "Hiza-Guruma": "JPJx9-oAVns",
  "Sasae-Tsurikomi-Ashi": "699i--pvYmE",
  "O-Soto-Gari": "c-A_nP7mKAc",
  "O-Uchi-Gari": "0itJFhV9pDQ",
  "Ko-Soto-Gari": "jeQ541ScLB4",
  "Ko-Uchi-Gari": "3Jb3tZvr9Ng",
  "Okuri-Ashi-Harai": "nw1ZdRjrdRI",
  "Uchi-Mata": "iUpSu5J-bgw",
  "Ko-Soto-Gake": "8b6kY4s4zH4",
  "Ashi-Guruma": "ROeayhvom9U",
  "Harai-Tsurikomi-Ashi": "gGPXvWL8VbE",
  "O-Guruma": "SnZciTAY9vc",
  "O-Soto-Guruma": "92KbCm6pQeI",
  "O-Soto-Otoshi": "2DsVvDw7b8g",
  "Tsubame-Gaeshi": "GwweWqqFB5g",
  "O-Soto-Gaeshi": "8ZjM3X_EANo",
  "O-Uchi-Gaeshi": "dCyZTXyjIXE",
  "Hane-Goshi-Gaeshi": "9bZAZSBtnGs",
  "Harai-Goshi-Gaeshi": "4U3It-7PPsc",
  "Uchi-Mata-Gaeshi": "Sy6sLWxkWYw",

  // Sutemi-waza
  "Tomoe-Nage": "880WbHvHv6A",
  "Sumi-Gaeshi": "5VhduA5xkbA",
  "Hikikomi-Gaeshi": "92zUYWBp5N8",
  "Tawara-Gaeshi": "TmTWgrmViZc",
  "Ura-Nage": "Fgi9b8DJ5sQ",
  "Yoko-Otoshi": "MnNG67pF_a0",
  "Tani-Otoshi": "3b9Me3Fohpk",
  "Hane-Makikomi": "6CRBGLGz9j8",
  "Soto-Makikomi": "bWG9O1BVKtQ",
  "Uchi-Makikomi": "5BowcjduxVc",
  "Uki-Waza": "weVOpJ63gII",
  "Yoko-Wakare": "bp1tscHlePI",
  "Yoko-Guruma": "MehP6I5cY2c",
  "Yoko-Gake": "tP1Sj1uDfSo",
  "Daki-Wakare": "Hr0cOMGBDYo",
  "O-Soto-Makikomi": "DGDv2oMwmas",
  "Uchi-Mata-Makikomi": "jZXENTLpJCI",
  "Harai-Makikomi": "VBaHzKaCXss",
  "Ko-Uchi-Makikomi": "_1eygIXLD_w",
  "Kani-Basami": "OR-HGHnarYc",
  "Kawazu-Gake": "w6G57bWACi0",
};

// Helper: get YouTube thumbnail URL
export const getYoutubeThumbnail = (videoId: string): string =>
  `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

// Normalize technique name for lookup (handles case differences like "Seoi-nage" vs "Seoi-Nage")
export const getVideoIdForTechnique = (name: string): string | undefined => {
  // Try exact match first
  if (techniqueVideoMap[name]) return techniqueVideoMap[name];
  // Try case-insensitive match
  const lower = name.toLowerCase();
  for (const [key, value] of Object.entries(techniqueVideoMap)) {
    if (key.toLowerCase() === lower) return value;
  }
  return undefined;
};

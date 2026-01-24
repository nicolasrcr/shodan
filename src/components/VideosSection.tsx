const VideosSection = () => {
  const videoCategories = [
    {
      title: 'Te-Waza (Técnicas de Mão)',
      videos: [
        { name: 'Seoi-Nage', id: 'c-A_nP7mKAc' },
        { name: 'Ippon-Seoi-Nage', id: 'FQnOlCxo4oI' },
        { name: 'Tai-Otoshi', id: '4x6S3Q-Ktv8' },
        { name: 'Kata-Guruma', id: 'cnHRhSy8yi4' },
        { name: 'Uki-Otoshi', id: '6H5tmncOY4Q' },
        { name: 'Sumi-Otoshi', id: 'lLU9wv52ni0' },
      ]
    },
    {
      title: 'Koshi-Waza (Técnicas de Quadril)',
      videos: [
        { name: 'O-Goshi', id: 'yhu1mfy2vJ4' },
        { name: 'Uki-Goshi', id: 'bPKwtB4lyOQ' },
        { name: 'Harai-Goshi', id: 'qTo8HlAAkOo' },
        { name: 'Koshi-Guruma', id: 'SU7Id6uVJ44' },
        { name: 'Tsurikomi-Goshi', id: 'McfzA0yRVt4' },
        { name: 'Hane-Goshi', id: 'M9_7De6A1kk' },
      ]
    },
    {
      title: 'Ashi-Waza (Técnicas de Perna)',
      videos: [
        { name: 'O-Soto-Gari', id: 'c-A_nP7mKAc' },
        { name: 'O-Uchi-Gari', id: '0itJFhV9pDQ' },
        { name: 'Ko-Uchi-Gari', id: '3Jb3tZvr9Ng' },
        { name: 'Ko-Soto-Gari', id: 'jeQ541ScLB4' },
        { name: 'Uchi-Mata', id: 'iUpSu5J-bgw' },
        { name: 'De-Ashi-Harai', id: '4BUUvqxi_Kk' },
      ]
    },
    {
      title: 'Sutemi-Waza (Técnicas de Sacrifício)',
      videos: [
        { name: 'Tomoe-Nage', id: 'JZGHxV-LLgg' },
        { name: 'Sumi-Gaeshi', id: 'DqHCdCxr0r0' },
        { name: 'Yoko-Tomoe-Nage', id: 'Z-G6uAv5fvQ' },
        { name: 'Ura-Nage', id: 'KJgP3FpYkdI' },
      ]
    },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">映</span>
        Vídeos - Demonstrações Técnicas
      </h2>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">
          Playlist de vídeos demonstrativos das principais técnicas do Judô. 
          Clique nos vídeos para assistir no YouTube (Kodokan oficial e outros canais de referência).
        </p>
      </div>

      {videoCategories.map((category, catIndex) => (
        <div key={catIndex} className="mb-10">
          <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
            <span>🎬</span> {category.title}
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {category.videos.map((video, index) => (
              <a 
                key={index}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-judo group overflow-hidden p-0 hover:border-primary transition-colors"
              >
                <div className="relative aspect-video bg-background/50">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white text-lg ml-1">▶</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">
                    {video.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}

      {/* Canais Recomendados */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📺</span> Canais Recomendados
      </h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { name: 'Kodokan Judo Institute', desc: 'Canal oficial do Kodokan' },
          { name: 'IJF Judo', desc: 'Federação Internacional de Judô' },
          { name: 'JudoInside', desc: 'Notícias e análises técnicas' },
          { name: 'CBJ Oficial', desc: 'Confederação Brasileira de Judô' },
        ].map((channel, index) => (
          <div key={index} className="card-judo text-center p-4">
            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-2">
              <span className="text-white text-lg">▶</span>
            </div>
            <p className="font-medium text-white text-sm">{channel.name}</p>
            <p className="text-xs text-muted-foreground">{channel.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosSection;

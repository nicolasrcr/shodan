const KatameWazaSection = () => {
  const katameData = {
    osaekomi: { 
      title: '抑込技 Osae-Komi-Waza (Imobilizações)', 
      techniques: [
        { name: 'Kesa-Gatame', kanji: '袈裟固', desc: 'Imobilização em diagonal' },
        { name: 'Kuzure-Kesa-Gatame', kanji: '崩袈裟固', desc: 'Variação do Kesa-Gatame' },
        { name: 'Ushiro-Kesa-Gatame', kanji: '後袈裟固', desc: 'Kesa-Gatame por trás' },
        { name: 'Yoko-Shiho-Gatame', kanji: '横四方固', desc: 'Imobilização lateral, quatro apoios' },
        { name: 'Tate-Shiho-Gatame', kanji: '縦四方固', desc: 'Imobilização montada' },
        { name: 'Kami-Shiho-Gatame', kanji: '上四方固', desc: 'Imobilização por cima' },
        { name: 'Kuzure-Kami-Shiho-Gatame', kanji: '崩上四方固', desc: 'Variação do Kami-Shiho' },
        { name: 'Kata-Gatame', kanji: '肩固', desc: 'Imobilização pelo ombro' },
        { name: 'Ura-Gatame', kanji: '裏固', desc: 'Imobilização invertida' },
        { name: 'Uki-Gatame', kanji: '浮固', desc: 'Imobilização flutuante' },
      ]
    },
    shime: { 
      title: '絞技 Shime-Waza (Estrangulamentos)', 
      techniques: [
        { name: 'Nami-Juji-Jime', kanji: '並十字絞', desc: 'Estrangulamento cruzado normal' },
        { name: 'Gyaku-Juji-Jime', kanji: '逆十字絞', desc: 'Estrangulamento cruzado invertido' },
        { name: 'Kata-Juji-Jime', kanji: '片十字絞', desc: 'Estrangulamento meio cruzado' },
        { name: 'Hadaka-Jime', kanji: '裸絞', desc: 'Estrangulamento nu (sem gola)' },
        { name: 'Okuri-Eri-Jime', kanji: '送襟絞', desc: 'Estrangulamento deslizando a gola' },
        { name: 'Kata-Ha-Jime', kanji: '片羽絞', desc: 'Estrangulamento com uma asa' },
        { name: 'Kata-Te-Jime', kanji: '片手絞', desc: 'Estrangulamento com uma mão' },
        { name: 'Ryote-Jime', kanji: '両手絞', desc: 'Estrangulamento com duas mãos' },
        { name: 'Sode-Guruma-Jime', kanji: '袖車絞', desc: 'Estrangulamento roda de manga' },
        { name: 'Tsukkomi-Jime', kanji: '突込絞', desc: 'Estrangulamento empurrando' },
        { name: 'Sankaku-Jime', kanji: '三角絞', desc: 'Estrangulamento em triângulo' },
      ]
    },
    kansetsu: { 
      title: '関節技 Kansetsu-Waza (Chaves de Articulação)', 
      techniques: [
        { name: 'Ude-Garami', kanji: '腕絡', desc: 'Chave de braço torcendo (americana)' },
        { name: 'Ude-Hishigi-Juji-Gatame', kanji: '腕挫十字固', desc: 'Chave de braço cruzada (armlock)' },
        { name: 'Ude-Hishigi-Ude-Gatame', kanji: '腕挫腕固', desc: 'Chave de braço com o braço' },
        { name: 'Ude-Hishigi-Hiza-Gatame', kanji: '腕挫膝固', desc: 'Chave de braço com o joelho' },
        { name: 'Ude-Hishigi-Waki-Gatame', kanji: '腕挫腋固', desc: 'Chave de braço pela axila' },
        { name: 'Ude-Hishigi-Hara-Gatame', kanji: '腕挫腹固', desc: 'Chave de braço pelo abdômen' },
        { name: 'Ude-Hishigi-Ashi-Gatame', kanji: '腕挫脚固', desc: 'Chave de braço com a perna' },
        { name: 'Ude-Hishigi-Te-Gatame', kanji: '腕挫手固', desc: 'Chave de braço com a mão' },
        { name: 'Ude-Hishigi-Sankaku-Gatame', kanji: '腕挫三角固', desc: 'Chave de braço em triângulo' },
      ]
    },
  };

  const prohibitedTechniques = [
    { name: 'Do-Jime', kanji: '胴絞', desc: 'Estrangulamento do tronco com as pernas (tesoura no corpo)' },
    { name: 'Ashi-Garami', kanji: '足絡', desc: 'Chave de perna/tornozelo entrelaçando' },
    { name: 'Kawazu-Gake', kanji: '河津掛', desc: 'Enrolar a perna por trás e cair sobre o oponente' },
    { name: 'Kani-Basami', kanji: '蟹挟', desc: 'Tesoura voadora (entrada pelas duas pernas)' },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">固</span>
        Katame-Waza - Técnicas de Domínio
      </h2>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">
          Katame-Waza são técnicas de controle divididas em 3 categorias: Osae-Komi-Waza (imobilizações), 
          Shime-Waza (estrangulamentos) e Kansetsu-Waza (chaves de articulação).
        </p>
      </div>

      {Object.entries(katameData).map(([key, category]) => (
        <div key={key} className="mb-10">
          <h3 className="text-lg font-semibold text-white flex items-center gap-3 mb-5">
            <span className="text-2xl font-serif text-primary">{category.title.split(' ')[0]}</span>
            {category.title.split(' ').slice(1).join(' ')}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {category.techniques.map((technique, index) => (
              <div key={index} className="card-judo text-center hover:scale-[1.02] transition-transform">
                <h4 className="font-semibold text-white text-sm mb-2">{technique.name}</h4>
                <p className="text-2xl font-serif text-primary mb-2">{technique.kanji}</p>
                <p className="text-xs text-muted-foreground">{technique.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Prohibited Techniques */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-10">
        <span>⛔</span> Kinshi-Waza (Técnicas Proibidas)
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {prohibitedTechniques.map((technique, index) => (
          <div 
            key={index} 
            className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-center"
          >
            <h4 className="font-semibold text-red-400 text-sm mb-1">{technique.name}</h4>
            <p className="text-xl font-serif text-red-400/80 mb-2">{technique.kanji}</p>
            <p className="text-xs text-foreground/60">{technique.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KatameWazaSection;

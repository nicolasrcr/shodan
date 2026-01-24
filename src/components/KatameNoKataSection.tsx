const KatameNoKataSection = () => {
  const grupos = [
    { 
      nome: 'Osaekomi-Waza', 
      kanji: '抑込技', 
      numero: '1º Grupo',
      desc: 'Técnicas de Imobilização',
      tecnicas: [
        { name: 'Kesa-Gatame', kanji: '袈裟固', desc: 'Imobilização em diagonal' },
        { name: 'Kata-Gatame', kanji: '肩固', desc: 'Imobilização do ombro' },
        { name: 'Kami-Shiho-Gatame', kanji: '上四方固', desc: 'Imobilização superior em 4 pontos' },
        { name: 'Yoko-Shiho-Gatame', kanji: '横四方固', desc: 'Imobilização lateral em 4 pontos' },
        { name: 'Kuzure-Kami-Shiho', kanji: '崩上四方固', desc: 'Variação do Kami-Shiho' },
      ]
    },
    { 
      nome: 'Shime-Waza', 
      kanji: '絞技', 
      numero: '2º Grupo',
      desc: 'Técnicas de Estrangulamento',
      tecnicas: [
        { name: 'Kata-Juji-Jime', kanji: '片十字絞', desc: 'Estrangulamento cruzado com uma mão' },
        { name: 'Hadaka-Jime', kanji: '裸絞', desc: 'Estrangulamento nu (sem lapela)' },
        { name: 'Okuri-Eri-Jime', kanji: '送襟絞', desc: 'Estrangulamento deslizando a gola' },
        { name: 'Kata-Ha-Jime', kanji: '片羽絞', desc: 'Estrangulamento com uma asa' },
        { name: 'Gyaku-Juji-Jime', kanji: '逆十字絞', desc: 'Estrangulamento cruzado reverso' },
      ]
    },
    { 
      nome: 'Kansetsu-Waza', 
      kanji: '関節技', 
      numero: '3º Grupo',
      desc: 'Técnicas de Chave Articular',
      tecnicas: [
        { name: 'Ude-Garami', kanji: '腕緘', desc: 'Enrolamento do braço (Americana/Kimura)' },
        { name: 'Juji-Gatame', kanji: '腕挫十字固', desc: 'Chave de braço em cruz' },
        { name: 'Ude-Gatame', kanji: '腕挫腕固', desc: 'Chave de braço pelo braço' },
        { name: 'Hiza-Gatame', kanji: '腕挫膝固', desc: 'Chave de braço pelo joelho' },
        { name: 'Ashi-Garami*', kanji: '足緘', desc: 'Enrolamento da perna (proibido em competição)' },
      ]
    },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">固形</span>
        Katame-no-Kata - Forma de Domínio
      </h2>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">
          O <strong>Katame-no-Kata</strong> (固の形) é a "Forma de Domínio". É composto por <strong>15 técnicas</strong> 
          divididas em 3 grupos de 5 técnicas: imobilizações, estrangulamentos e chaves articulares.
        </p>
      </div>

      <div className="space-y-6">
        {grupos.map((grupo, index) => (
          <div key={index} className="card-judo">
            <div className="flex items-center gap-4 mb-4 pb-3 border-b border-primary/20">
              <span className="text-3xl font-serif text-primary">{grupo.kanji}</span>
              <div>
                <h3 className="font-semibold text-white">{grupo.nome}</h3>
                <p className="text-xs text-muted-foreground">{grupo.numero} - {grupo.desc}</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {grupo.tecnicas.map((tecnica, i) => (
                <div key={i} className="bg-background/30 rounded-lg p-3 text-center">
                  <p className="text-xl font-serif text-primary mb-1">{tecnica.kanji}</p>
                  <p className="font-medium text-white text-sm">{tecnica.name}</p>
                  <p className="text-xs text-muted-foreground">{tecnica.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
        <p className="text-sm text-red-400">
          <strong>* Nota:</strong> Ashi-Garami é proibido em competição devido ao alto risco de lesão, 
          mas é mantido no Kata por tradição histórica.
        </p>
      </div>
    </div>
  );
};

export default KatameNoKataSection;

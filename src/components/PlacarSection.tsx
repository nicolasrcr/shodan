const PlacarSection = () => {
  const pontuacoes = [
    {
      nome: 'Ippon',
      kanji: '一本',
      pontos: 'Vitória direta',
      cor: 'bg-green-500/20 border-green-500/50',
      icone: '🥇',
      descricao: 'Técnica perfeita - encerra a luta imediatamente',
      criterios: [
        'Projeção com força, velocidade e controle, fazendo o oponente cair de costas',
        'Imobilização (Osaekomi) por 20 segundos',
        'Desistência do oponente (batendo 2x no tatame ou no adversário)',
        'Estrangulamento ou chave efetiva (fazendo o oponente desistir ou desmaiar)',
        'Dois Waza-ari acumulados (Waza-ari Awasete Ippon)',
      ]
    },
    {
      nome: 'Waza-ari',
      kanji: '技あり',
      pontos: 'Meia vitória',
      cor: 'bg-yellow-500/20 border-yellow-500/50',
      icone: '🥈',
      descricao: 'Técnica quase perfeita ou imobilização entre 10-19 segundos',
      criterios: [
        'Projeção com força mas faltando um elemento (velocidade ou controle)',
        'Oponente cai de lado ou não completamente de costas',
        'Imobilização (Osaekomi) entre 10 e 19 segundos',
        'Dois Waza-ari = Ippon (vitória)',
      ]
    },
    {
      nome: 'Yuko',
      kanji: '有効',
      pontos: 'Pontuação (2025)',
      cor: 'bg-blue-500/20 border-blue-500/50',
      icone: '🥉',
      descricao: 'Retornando em 2025 - técnica parcialmente efetiva',
      criterios: [
        'Projeção com um elemento faltando significativamente',
        'Oponente cai sobre o quadril, joelhos ou nádegas',
        'Não há acumulação de Yukos (não viram Waza-ari)',
        'Usado como critério de desempate no Golden Score',
      ]
    },
  ];

  const penalidades = [
    {
      nome: 'Shido',
      kanji: '指導',
      tipo: 'Penalidade leve',
      cor: 'bg-orange-500/20 border-orange-500/50',
      descricao: 'Advertência por infrações menores',
      exemplos: [
        'Evitar pegada (não atacar) por mais de 45 segundos',
        'Pegada defensiva excessiva',
        'Falso ataque (sem intenção real de projetar)',
        'Postura muito defensiva',
        'Sair da área de combate sem ataque',
        'Puxar o adversário para o solo sem técnica',
        'Bloquear a manga do adversário com as duas mãos',
      ],
      consequencias: [
        '1º Shido = Advertência',
        '2º Shido = Advertência',
        '3º Shido = Hansoku-Make (desqualificação)',
      ]
    },
    {
      nome: 'Hansoku-Make',
      kanji: '反則負け',
      tipo: 'Desqualificação',
      cor: 'bg-red-500/20 border-red-500/50',
      descricao: 'Perda por infração grave ou acúmulo de 3 Shidos',
      exemplos: [
        'Acúmulo de 3 Shidos na mesma luta',
        'Ataque direto às pernas (exceto em combinação)',
        'Ação que possa causar lesão ao oponente',
        'Técnicas proibidas (Kawazu-Gake, Kani-Basami, etc.)',
        'Conduta antidesportiva grave',
        'Mergulhar de cabeça no tatame (Matte-Matte)',
      ],
      consequencias: [
        'Perda imediata da luta',
        'Se por falha técnica: pode continuar no torneio',
        'Se por conduta antidesportiva: eliminado do evento',
      ]
    },
  ];

  const comandosArbitragem = [
    { comando: 'Hajime', kanji: '始め', significado: 'Começar', desc: 'Inicia ou reinicia o combate' },
    { comando: 'Matte', kanji: '待て', significado: 'Esperar', desc: 'Interrompe temporariamente a luta' },
    { comando: 'Sore-Made', kanji: 'それまで', significado: 'Acabou', desc: 'Encerra a luta definitivamente' },
    { comando: 'Osaekomi', kanji: '抑え込み', significado: 'Imobilização', desc: 'Cronômetro de imobilização iniciado' },
    { comando: 'Toketa', kanji: '解けた', significado: 'Escapou', desc: 'Imobilização foi desfeita' },
    { comando: 'Yoshi', kanji: 'よし', significado: 'Continue', desc: 'Retoma a luta no solo' },
    { comando: 'Hiki-Wake', kanji: '引き分け', significado: 'Empate', desc: 'Não há vencedor (raro atualmente)' },
    { comando: 'Sogo-Gachi', kanji: '総合勝ち', significado: 'Vitória composta', desc: 'Vitória por combinação de pontos e penalidades' },
  ];

  const tempoLuta = [
    { categoria: 'Sub-13', tempo: '3 minutos', golden: '1,5 min (max 2x)' },
    { categoria: 'Sub-15', tempo: '3 minutos', golden: '2 min (max 2x)' },
    { categoria: 'Sub-18 (Cadete)', tempo: '4 minutos', golden: '2 min' },
    { categoria: 'Sub-21 (Júnior)', tempo: '4 minutos', golden: 'Ilimitado' },
    { categoria: 'Sênior', tempo: '4 minutos', golden: 'Ilimitado' },
    { categoria: 'Masters', tempo: '3-4 minutos', golden: 'Variável' },
  ];

  const layoutPlacar = [
    { elemento: 'Bandeira/País', posicao: 'Topo', desc: 'Identificação do atleta' },
    { elemento: 'Nome do Atleta', posicao: 'Abaixo da bandeira', desc: 'Nome completo ou sobrenome' },
    { elemento: 'Pontuação', posicao: 'Centro', desc: 'Ippon, Waza-ari, Yuko' },
    { elemento: 'Shidos', posicao: 'Lateral', desc: 'Cartões amarelos (até 3)' },
    { elemento: 'Cronômetro Principal', posicao: 'Centro superior', desc: 'Tempo restante da luta' },
    { elemento: 'Cronômetro Osaekomi', posicao: 'Centro inferior', desc: 'Tempo de imobilização (0-20s)' },
    { elemento: 'Golden Score', posicao: 'Indicador especial', desc: 'Prorrogação' },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">🏆</span>
        Sistema de Placar
      </h2>

      {/* Introdução */}
      <div className="card-judo mb-8">
        <p className="text-foreground/80">
          O sistema de pontuação do Judô é baseado na qualidade das técnicas executadas. 
          O objetivo é conquistar o <span className="text-primary font-semibold">Ippon</span> (vitória perfeita), 
          mas pontos menores como <span className="text-primary font-semibold">Waza-ari</span> e 
          <span className="text-primary font-semibold"> Yuko</span> (retornando em 2025) também decidem lutas.
        </p>
      </div>

      {/* Pontuações */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📊</span> Pontuações
      </h3>

      <div className="space-y-4 mb-10">
        {pontuacoes.map((pont, index) => (
          <div key={index} className={`card-judo ${pont.cor} border`}>
            <div className="flex items-start gap-4">
              <div className="text-4xl">{pont.icone}</div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-bold text-white">{pont.nome}</h4>
                  <span className="text-2xl font-serif text-primary">{pont.kanji}</span>
                  <span className="text-sm text-muted-foreground">({pont.pontos})</span>
                </div>
                <p className="text-sm text-foreground/70 mb-3">{pont.descricao}</p>
                <ul className="space-y-1">
                  {pont.criterios.map((crit, i) => (
                    <li key={i} className="text-sm text-foreground/60 flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {crit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Penalidades */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>⚠️</span> Penalidades
      </h3>

      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {penalidades.map((pen, index) => (
          <div key={index} className={`card-judo ${pen.cor} border`}>
            <div className="flex items-center gap-3 mb-3">
              <h4 className="text-lg font-bold text-white">{pen.nome}</h4>
              <span className="text-xl font-serif text-primary">{pen.kanji}</span>
            </div>
            <p className="text-sm text-primary mb-2">{pen.tipo}</p>
            <p className="text-sm text-foreground/70 mb-3">{pen.descricao}</p>
            
            <div className="mb-3">
              <p className="text-xs font-semibold text-white mb-1">Exemplos:</p>
              <ul className="space-y-1">
                {pen.exemplos.slice(0, 4).map((ex, i) => (
                  <li key={i} className="text-xs text-foreground/60 flex items-start gap-2">
                    <span className="text-orange-400">•</span>
                    {ex}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background/30 rounded-lg p-2">
              <p className="text-xs font-semibold text-white mb-1">Consequências:</p>
              {pen.consequencias.map((cons, i) => (
                <p key={i} className="text-xs text-primary">{cons}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Comandos de Arbitragem */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>🎤</span> Comandos do Árbitro
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {comandosArbitragem.map((cmd, index) => (
          <div key={index} className="card-judo text-center">
            <span className="text-2xl font-serif text-primary block mb-1">{cmd.kanji}</span>
            <h4 className="font-bold text-white">{cmd.comando}</h4>
            <p className="text-xs text-primary">{cmd.significado}</p>
            <p className="text-xs text-muted-foreground mt-1">{cmd.desc}</p>
          </div>
        ))}
      </div>

      {/* Tempo de Luta */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>⏱️</span> Duração das Lutas por Categoria
      </h3>

      <div className="card-judo mb-10">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-primary/30">
                <th className="text-left py-2 px-3 text-primary">Categoria</th>
                <th className="text-center py-2 px-3 text-primary">Tempo Regular</th>
                <th className="text-center py-2 px-3 text-primary">Golden Score</th>
              </tr>
            </thead>
            <tbody>
              {tempoLuta.map((cat, index) => (
                <tr key={index} className="border-b border-primary/10">
                  <td className="py-2 px-3 font-medium text-white">{cat.categoria}</td>
                  <td className="py-2 px-3 text-center text-foreground/70">{cat.tempo}</td>
                  <td className="py-2 px-3 text-center text-foreground/70">{cat.golden}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Layout do Placar */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>📺</span> Elementos do Placar Eletrônico
      </h3>

      <div className="card-judo mb-10">
        {/* Visual do placar */}
        <div className="bg-background/50 rounded-lg p-4 mb-4">
          <div className="flex justify-center gap-4 text-center mb-4">
            <div className="flex-1 max-w-[200px]">
              <div className="bg-white text-secondary text-sm font-bold py-1 rounded-t">BRANCO</div>
              <div className="bg-card border border-primary/30 p-3 rounded-b">
                <p className="text-lg font-bold text-white">ATLETA A</p>
                <div className="flex justify-center gap-2 my-2">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">W</span>
                  <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">0</span>
                </div>
                <div className="flex justify-center gap-1">
                  <span className="w-3 h-3 bg-yellow-400 rounded"></span>
                  <span className="w-3 h-3 bg-muted rounded"></span>
                  <span className="w-3 h-3 bg-muted rounded"></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-primary text-secondary font-bold px-4 py-2 rounded text-lg">
                3:45
              </div>
              <div className="text-xs text-muted-foreground mt-1">Tempo</div>
            </div>
            <div className="flex-1 max-w-[200px]">
              <div className="bg-blue-600 text-white text-sm font-bold py-1 rounded-t">AZUL</div>
              <div className="bg-card border border-primary/30 p-3 rounded-b">
                <p className="text-lg font-bold text-white">ATLETA B</p>
                <div className="flex justify-center gap-2 my-2">
                  <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">0</span>
                  <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">0</span>
                </div>
                <div className="flex justify-center gap-1">
                  <span className="w-3 h-3 bg-muted rounded"></span>
                  <span className="w-3 h-3 bg-muted rounded"></span>
                  <span className="w-3 h-3 bg-muted rounded"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-2">
          {layoutPlacar.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <span className="text-primary">▸</span>
              <span className="font-medium text-white">{item.elemento}:</span>
              <span className="text-muted-foreground">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Golden Score */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
        <span>⭐</span> Golden Score (Prorrogação)
      </h3>

      <div className="card-judo bg-gradient-to-r from-yellow-500/10 to-primary/10 border border-yellow-500/30">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🥇</span>
          <div>
            <h4 className="text-lg font-bold text-primary mb-2">Morte Súbita</h4>
            <p className="text-foreground/70 mb-3">
              Se a luta terminar empatada, entra em <span className="text-primary font-semibold">Golden Score</span> - 
              uma prorrogação onde o primeiro a pontuar (qualquer pontuação) ou o primeiro a receber uma penalidade 
              (que resulte em diferença) perde/ganha.
            </p>
            <ul className="space-y-1 text-sm text-foreground/60">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                Na categoria Sênior, o Golden Score é ilimitado
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                As penalidades acumuladas continuam valendo
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                Qualquer pontuação (Yuko, Waza-ari ou Ippon) encerra
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                Se um atleta recebe o 3º Shido, perde por Hansoku-Make
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dica de Estudo */}
      <div className="mt-10 p-4 bg-primary/10 rounded-lg border border-primary/30">
        <p className="text-sm text-primary font-semibold mb-1">💡 Dica para o Exame Shodan</p>
        <p className="text-xs text-foreground/70">
          Memorize os critérios de Ippon (projeção perfeita, 20s de imobilização, finalização) e 
          saiba diferenciar Waza-ari de Yuko. Entenda que 3 Shidos = Hansoku-Make (desqualificação).
        </p>
      </div>
    </div>
  );
};

export default PlacarSection;

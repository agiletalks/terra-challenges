// Multilingual Dictionary
const translations = {
  zh: {
    brand: "泰拉學校 ｜ 地之校",
    nav: {
      campaign: "2026成果展",
      methodology: "核心方法",
      stories: "風土寫真",
      partners: "合作夥伴",
      next: "下一屆消息"
    },
    hero: {
      title: "2026 泰拉學校・地之校成果展",
      subtitle: "共創落地的食農未來：台日跨國行動 × AI 設計思考",
      desc: "一場早稻田大學與台灣清華大學青年的宜蘭田野實踐，在泥土與科技的交界，探索永續食農的真實解答。",
      ctaVideo: "觀看活動紀錄影片",
      ctaShowcase: "進入線上成果展"
    },
    timeline: {
      title: "五天學習旅程",
      subtitle: "在宜蘭員山、南澳與佛光大學的實地實踐軌跡",
      days: [
        { day: "Day 1", title: "土地感知與員山踏查", desc: "深入阿聰自然田，踏查格外品與在地甘蔗文化，開啟感知雷達。" },
        { day: "Day 2", title: "多語系關係人深度訪談", desc: "與老農、移居者、在地青年對話，用 AI 協作轉寫音檔並進行數據索引編碼。" },
        { day: "Day 3", title: "南澳生態農場與熬糖實作", desc: "親手勞動熬製蔗汁，體驗土地產出的溫度與農業加工轉型實踐。" },
        { day: "Day 4", title: "跨國腦力激盪與原型共創", desc: "台日學生共同定義 HMW 問題，發想並手繪解決方案草圖，產出低保真原型。" },
        { day: "Day 5", title: "成果博覽會與評審發表", desc: "向地方小農、專家與外部評審發表四組 MVP 提案，進行落地驗證評估。" ]
      ]
    },
    methodology: {
      title: "設計思考與 AI 方法手札",
      subtitle: "研究團隊如何透過雙鑽石模型與人機協作梳理地方問題",
      stages: [
        { key: "discover", title: "1. Discover (探索階段)", desc: "多語音檔轉譯、四欄式質化研究與人機編碼整理手札。", link: "methodology/discover.html" },
        { key: "define", title: "2. Define (定義階段)", desc: "跨案例主題提煉、家長與老農痛點聚焦、HMW挑戰設計。", link: "methodology/define.html" },
        { key: "develop", title: "3. Develop (發想階段)", desc: "跨國工作坊、共創草圖設計、去金流互助平台打樣。", link: "methodology/develop.html" },
        { key: "deliver", title: "4. Deliver (成果階段)", desc: "四組落地驗證 MVP 成果展示（Toolkit、護照、托育網、生活指南）。", link: "methodology/deliver.html" }
      ]
    },
    quotes: {
      title: "學員故事與反思金句",
      subtitle: "（滑鼠懸停或點選卡片查看學員的真心話）",
      list: [
        { name: "日本早稻田大學學員", role: "Waseda Team A", quote: "在東京我們只用簡報討論，但在宜蘭我們是直接走進蔗田拔蔗。土地的泥土與老農的笑容，給了我們課本上永遠學不到的真實感。" },
        { name: "台灣清華大學學員", role: "NTHU Team C", quote: "偏鄉托育資源非常缺，透過出力點數的互助機制能解決實際問題。當小農告訴我們這真的有用時，那是做專案最幸福的時刻。" },
        { name: "在地小農 阿聰", role: "地方關係人", quote: "學生能用 AI 把我零散的話做成 7 步驟品牌工具，這真的幫忙把我的自然農法故事說得更清楚。年輕人的執行力讓人佩服！" }
      ]
    },
    footer: "© 2026 泰拉學校 地之校 - Waseda & NTHU 跨國共創. All rights reserved."
  },
  en: {
    brand: "Terra School | Earth",
    nav: {
      campaign: "2026 Exhibition",
      methodology: "Methodology",
      stories: "Stories",
      partners: "Partners",
      next: "Next Intake"
    },
    hero: {
      title: "2026 Terra Earth School Exhibition",
      subtitle: "Co-creating the Future of Food & Agriculture: Waseda × NTHU",
      desc: "A field action in Yilan by Waseda and Tsinghua University youth. Exploring sustainable food & agriculture at the boundary of land and AI.",
      ctaVideo: "Watch Recap Video",
      ctaShowcase: "Explore Showcase"
    },
    timeline: {
      title: "5-Day Journey",
      subtitle: "Field practices in Yilan Yuanshan, Naoao, and Fo Guang University",
      days: [
        { day: "Day 1", title: "Field Sensing & Yuanshan Survey", desc: "Deep dive into A-Cong's organic farm, survey off-grade crops, and activate observation sensors." },
        { day: "Day 2", title: "Multilingual Stakeholder Interviews", desc: "Talk with farmers, migrants, and local youth; use AI to transcribe audio and code interviews." },
        { day: "Day 3", title: "Nanao Ecological Farm & Sugar Making", desc: "Hand-make cane sugar, experiencing the warmth of soil and practices of agricultural processing transition." },
        { day: "Day 4", title: "Cross-border Brainstorming & Prototyping", desc: "Define HMW questions, sketch solution drafts, and construct low-fidelity models." },
        { day: "Day 5", title: "Exhibition & Jury Presentations", desc: "Present four MVP proposals to local farmers, experts, and jury for validation." }
      ]
    },
    methodology: {
      title: "Design Thinking & AI Practice",
      subtitle: "How the research team structured local problems via Double Diamond & Human-AI Collaboration",
      stages: [
        { key: "discover", title: "1. Discover", desc: "Multilingual transcriptions, 4-column qualitative analysis, and coding notes.", link: "methodology/discover.html" },
        { key: "define", title: "2. Define", desc: "Theme extraction, parent-child pain points, and HMW design challenge.", link: "methodology/define.html" },
        { key: "develop", title: "3. Develop", desc: "Cross-border workshop, co-creation sketches, and mutual-aid platform modeling.", link: "methodology/develop.html" },
        { key: "deliver", title: "4. Deliver", desc: "Exhibition of 4 MVP outcomes (Toolkit, Passport, Nest, Guidebook).", link: "methodology/deliver.html" }
      ]
    },
    quotes: {
      title: "Student Stories & Reflections",
      subtitle: "(Hover or tap to read their authentic reflections)",
      list: [
        { name: "Waseda University Student", role: "Waseda Team A", quote: "In Tokyo, we only discussed with slides, but in Yilan we walked right into cane fields. The soil and the farmers' smiles gave us realism we can't learn in books." },
        { name: "Tsinghua University Student", role: "NTHU Team C", quote: "Rural childcare is scarce; the time-banking mutual-aid mechanism solved real needs. When farmers told us this helps, that was the happiest moment." },
        { name: "Local Farmer A-Cong", role: "Local Partner", quote: "Students used AI to organize my words into a 7-step branding tool, showing our natural farming story clearly. The youth's execution is admirable!" }
      ]
    },
    footer: "© 2026 Terra Earth School - Waseda & NTHU Co-creation. All rights reserved."
  },
  ja: {
    brand: "テラ学校 ｜ 地の校",
    nav: {
      campaign: "2026成果展",
      methodology: "メソッド",
      stories: "フォトストーリー",
      partners: "パートナー",
      next: "次回募集"
    },
    hero: {
      title: "2026 テラ学校・地の校 成果展",
      subtitle: "共創する食と農の未来：早稲田大学 × 台湾清華大学",
      desc: "早稲田大学と台湾清華大学の学生による宜蘭でのフィールドワーク。土とテクノロジーの境界で、持続可能な食農の答えを探る。",
      ctaVideo: "動画を見る",
      ctaShowcase: "オンライン成果展へ"
    },
    timeline: {
      title: "5日間の学習の旅",
      subtitle: "宜蘭員山、南澳、佛光大学での現地実践の軌跡",
      days: [
        { day: "Day 1", title: "土地感知と員山踏査", desc: "自然田に入り、規格外品とサトウキビ文化を調査し、センサを起動。" },
        { day: "Day 2", title: "多言語関係者インタビュー", desc: "農家や移住者と対話。AIで文字起こしを行い、データをインデックス化。" },
        { day: "Day 3", title: "南澳エコ農場と製糖体験", desc: "サトウキビ汁を手作業で煮詰め、土地の温もりと加工移行を体験。" },
        { day: "Day 4", title: "国境を越えたアイデアソン", desc: "HMW課題を定義し、解決策をスケッチ、プロトタイプを作成。" },
        { day: "Day 5", title: "成果発表会と審査", desc: "地元農家や専門家に4つのMVP提案を発表し、フィードバックを得る。" ]
      ]
    },
    methodology: {
      title: "デザイン思考とAIメソッド",
      subtitle: "ダブルダイヤモンドと人機協調でローカル課題を整理したプロセス",
      stages: [
        { key: "discover", title: "1. Discover (探索)", desc: "音声書き起こし、4カラム質的研究、人機コーディング整理手札。", link: "methodology/discover.html" },
        { key: "define", title: "2. Define (定義)", desc: "テーマ抽出、農家と親子の悩みフォーカス、HMWチャレンジ設計。", link: "methodology/define.html" },
        { key: "develop", title: "3. Develop (発想)", desc: "日台共同ワークショップ、スケッチ設計、相互支援プラットフォーム試作。", link: "methodology/develop.html" },
        { key: "deliver", title: "4. Deliver (成果)", desc: "4つの実践MVP成果展示（Toolkit、パスポート、Nest、ガイドブック）。", link: "methodology/deliver.html" }
      ]
    },
    quotes: {
      title: "学生ストーリーと反省の金句",
      subtitle: "（カードをホバーまたはタップして本音をチェック）",
      list: [
        { name: "早稲田大学の学生", role: "Waseda Team A", quote: "東京ではスライドだけで議論していましたが、宜蘭ではサトウキビ畑に直接入りました。土の感触と農家の笑顔は本からは学べないリアルでした。" },
        { name: "台湾清華大学の学生", role: "NTHU Team C", quote: "農村の保育資源は不足しており、時間銀行の相互支援で解決を図りました。農家さんから「本当に役立つ」と言われた時が最高の瞬間でした。" },
        { name: "地元農家 阿聰さん", role: "ローカルパートナー", quote: "学生たちが私の話をAIで7ステップのブランドツールにまとめてくれ、自然農法が伝わりやすくなりました。若者の実行力には驚かされます！" }
      ]
    },
    footer: "© 2026 Terra Earth School - Waseda & NTHU Co-creation. All rights reserved."
  }
};

// React Application Code
const { useState, useEffect } = React;

function App() {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('terra-lang');
    if (saved && translations[saved]) return saved;
    const userLang = navigator.language.substring(0, 2);
    return translations[userLang] ? userLang : 'zh';
  });

  const changeLang = (l) => {
    setLang(l);
    localStorage.setItem('terra-lang', l);
  };

  const t = translations[lang];

  return (
    <div className="fade-in min-h-screen flex flex-col">
      {/* Header */}
      <header className="glass-header sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-xl tracking-tight text-[#0F2A1C]">{t.brand}</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-semibold text-[#1C2421] text-sm">
            <a href="#campaign" className="hover:text-[#B35C24] transition-colors">{t.nav.campaign}</a>
            <a href="#methodology" className="hover:text-[#B35C24] transition-colors">{t.nav.methodology}</a>
            <a href="#stories" className="hover:text-[#B35C24] transition-colors">{t.nav.stories}</a>
            <a href="#partners" className="hover:text-[#B35C24] transition-colors">{t.nav.partners}</a>
          </nav>

          <div className="flex items-center gap-2 bg-[#FAF5F0] border border-orange-200/40 rounded-full p-0.5">
            {['zh', 'en', 'ja'].map(l => (
              <button
                key={l}
                onClick={() => changeLang(l)}
                className={`px-3 py-1 rounded-full text-xs font-black transition-all ${lang === l ? 'bg-[#B35C24] text-white shadow-sm' : 'text-stone-500 hover:text-stone-800'}`}
              >
                {l === 'zh' ? '中' : l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16 w-full">
        <div className="bg-gradient-to-br from-[#0F2A1C] to-[#1D3D2C] rounded-3xl p-8 md:p-16 text-white text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="bg-[#B35C24] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 inline-block">Waseda × NTHU Co-creation</span>
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">{t.hero.title}</h1>
            <p className="text-orange-200 text-lg md:text-xl font-medium mb-6">{t.hero.subtitle}</p>
            <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-8">{t.hero.desc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#campaign" className="bg-[#B35C24] hover:bg-[#a04e1c] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg transition-all transform hover:-translate-y-0.5">{t.hero.ctaShowcase}</a>
              <a href="https://www.youtube.com/embed/dQw4w9WgXcQ" target="_blank" className="border border-white/30 hover:border-white bg-white/5 hover:bg-white/10 px-8 py-3.5 rounded-full font-bold text-sm transition-all">{t.hero.ctaVideo}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section id="campaign" className="max-w-7xl mx-auto px-6 py-12 w-full text-center">
        <div className="mb-12">
          <span className="text-[#B35C24] font-bold text-xs uppercase tracking-widest">Interactive Map</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#0F2A1C] mt-2">設計思考共創視覺地圖</h2>
          <p className="text-stone-500 text-sm md:text-base mt-2">點擊圖中不同區塊（探索、定義、發想、成果）查看詳細方法論</p>
        </div>
        <div className="map-container bg-white border border-stone-200 rounded-3xl overflow-hidden max-w-5xl mx-auto relative group">
          <img src="assets/terra-earth-school.png" alt="2026 Terra Earth School Graphic Recording" className="w-full h-auto block" />
          
          {/* Interactive hotlinks corresponding to sitemap */}
          <a href="#methodology" className="absolute top-[35%] left-[20%] w-[12%] h-[20%] border-2 border-dashed border-orange-500/0 hover:border-orange-500/80 bg-orange-500/0 hover:bg-orange-500/10 rounded-full transition-all duration-300 flex items-center justify-center text-orange-600 font-extrabold text-xs opacity-0 hover:opacity-100 shadow-md">Discover ➔</a>
          <a href="#methodology" className="absolute top-[35%] left-[33%] w-[12%] h-[20%] border-2 border-dashed border-orange-500/0 hover:border-orange-500/80 bg-orange-500/0 hover:bg-orange-500/10 rounded-full transition-all duration-300 flex items-center justify-center text-orange-600 font-extrabold text-xs opacity-0 hover:opacity-100 shadow-md">Define ➔</a>
          <a href="#methodology" className="absolute top-[35%] left-[58%] w-[12%] h-[20%] border-2 border-dashed border-orange-500/0 hover:border-orange-500/80 bg-orange-500/0 hover:bg-orange-500/10 rounded-full transition-all duration-300 flex items-center justify-center text-orange-600 font-extrabold text-xs opacity-0 hover:opacity-100 shadow-md">Develop ➔</a>
          <a href="methodology/deliver.html" className="absolute top-[35%] left-[71%] w-[12%] h-[20%] border-2 border-dashed border-orange-500/0 hover:border-orange-500/80 bg-orange-500/0 hover:bg-orange-500/10 rounded-full transition-all duration-300 flex items-center justify-center text-orange-600 font-extrabold text-xs opacity-0 hover:opacity-100 shadow-md">Deliver ➔</a>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-[#FAF5F0] border-y border-stone-200 w-full">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#0F2A1C]">{t.timeline.title}</h2>
            <p className="text-stone-500 text-sm md:text-base mt-2">{t.timeline.subtitle}</p>
          </div>
          
          <div className="relative border-l border-stone-300 ml-4 md:ml-32 pl-8 space-y-12">
            {t.timeline.days.map((item, idx) => (
              <div key={idx} className="relative group">
                <span className="absolute -left-[45px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#B35C24] flex items-center justify-center timeline-dot"></span>
                <span className="hidden md:block absolute -left-[160px] top-1.5 font-black text-[#B35C24] tracking-wider text-sm text-right w-[100px]">{item.day}</span>
                <div>
                  <h3 className="font-extrabold text-lg text-[#0F2A1C] group-hover:text-[#B35C24] transition-colors">{item.title} <span className="md:hidden text-xs bg-orange-100 text-[#B35C24] px-2 py-0.5 rounded ml-2">{item.day}</span></h3>
                  <p className="text-stone-600 text-sm md:text-base mt-2 leading-relaxed max-w-3xl">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="text-center mb-16">
          <span className="text-[#B35C24] font-bold text-xs uppercase tracking-widest">Double Diamond</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#0F2A1C] mt-2">{t.methodology.title}</h2>
          <p className="text-stone-500 text-sm md:text-base mt-2">{t.methodology.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {t.methodology.stages.map((stage, idx) => (
            <div key={idx} className="zoom-card bg-white border border-stone-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative group overflow-hidden">
              <span className="absolute -right-4 -top-4 text-7xl font-black text-stone-100/70 select-none group-hover:text-orange-500/5 transition-colors">{idx + 1}</span>
              <div className="relative z-10">
                <h3 className="font-black text-lg text-[#0F2A1C] mb-3 group-hover:text-[#B35C24] transition-colors">{stage.title}</h3>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed mb-6">{stage.desc}</p>
              </div>
              <a href={stage.link} className="bg-[#0F2A1C] hover:bg-[#B35C24] text-white text-center font-bold text-xs py-2 px-4 rounded-lg transition-colors inline-block w-full">閱讀研究手札 ➔</a>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery Masonry Section */}
      <section id="stories" className="max-w-7xl mx-auto px-6 py-16 bg-stone-100 border-t border-stone-200 w-full">
        <div className="text-center mb-16">
          <span className="text-[#B35C24] font-bold text-xs uppercase tracking-widest">Field Memories</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#0F2A1C] mt-2">風土光影相片牆</h2>
          <p className="text-stone-500 text-sm md:text-base mt-2">捕捉宜蘭田野間、跨國討論與發表會的最真實瞬間</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[
            { src: "assets/yilan_field_1.jpg", title: "田野調研", desc: "員山阿蔥自然田的蔗田風光" },
            { src: "assets/yilan_field_2.jpg", title: "熬糖實作", desc: "手工熬煮甘蔗汁的溫度傳承" },
            { src: "assets/yilan_field_3.jpg", title: "跨國對話", desc: "早稻田與清華學生的熱烈激盪" },
            { src: "assets/yilan_field_4.jpg", title: "成果發表", desc: "地之校在佛光大學的精彩發表" }
          ].map((photo, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-md bg-stone-200 aspect-[4/3] sm:aspect-square md:aspect-auto md:h-72">
              <img src={photo.src} alt={photo.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">{photo.title}</span>
                <p className="text-sm font-semibold mt-1">{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Wall (Student Stories) */}
      <section className="max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#0F2A1C]">{t.quotes.title}</h2>
          <p className="text-stone-500 text-xs md:text-sm mt-2">{t.quotes.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.quotes.list.map((q, idx) => (
            <div key={idx} className="flip-card h-64 w-full cursor-pointer">
              <div className="flip-card-inner h-full w-full">
                {/* Front Side */}
                <div className="flip-card-front bg-white border border-stone-200 p-8 flex flex-col justify-between items-center shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-2xl">👤</div>
                  <div className="text-center">
                    <h3 className="font-extrabold text-lg text-[#0F2A1C]">{q.name}</h3>
                    <span className="text-[#B35C24] text-xs font-semibold">{q.role}</span>
                  </div>
                  <div className="text-stone-400 text-xs">Hover to read reflection ➔</div>
                </div>
                {/* Back Side */}
                <div className="flip-card-back bg-[#0F2A1C] text-white p-8 flex flex-col justify-center items-center">
                  <span className="text-4xl text-orange-400 mb-2">“</span>
                  <p className="text-xs md:text-sm leading-relaxed text-center font-medium italic text-stone-200">{q.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners & Call-to-action */}
      <section id="partners" className="max-w-7xl mx-auto px-6 py-16 border-t border-stone-200 w-full text-center">
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#0F2A1C]">{t.nav.partners}</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto mb-16 opacity-70">
          <span className="font-black text-stone-500 text-lg tracking-wider">早稻田大學 (Waseda Univ.)</span>
          <span className="font-black text-[#0F2A1C] text-lg tracking-wider">國立清華大學 (NTHU)</span>
          <span className="font-black text-stone-500 text-lg tracking-wider">1221未來教育發展協會</span>
          <span className="font-black text-[#B35C24] text-lg tracking-wider">慢島生活 (Slow Island)</span>
        </div>

        {/* Call to action form */}
        <div className="bg-[#FAF5F0] border border-orange-200/50 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-md">
          <h3 className="font-black text-xl md:text-2xl text-[#0F2A1C] mb-2">{t.nav.next}</h3>
          <p className="text-stone-500 text-sm md:text-base mb-6">訂閱電子報，獲取下一屆地之校的行前資訊與報名通知！</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your Email Address" className="px-5 py-3 rounded-full border border-stone-300 focus:outline-none focus:border-[#B35C24] text-sm flex-grow shadow-inner" />
            <button onClick={() => alert('訂閱成功！')} className="bg-[#0F2A1C] hover:bg-[#B35C24] text-white font-bold text-sm px-8 py-3 rounded-full shadow transition-all">立即訂閱</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F2A1C] text-stone-400 py-12 px-6 border-t border-stone-800 w-full mt-auto text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold">{t.footer}</p>
          <p className="text-xs text-stone-600 mt-2">Design Thinking × Sustainable Food & Agriculture in Yilan, Taiwan</p>
        </div>
      </footer>
    </div>
  );
}

// Render Application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

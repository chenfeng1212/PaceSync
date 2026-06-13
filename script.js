const questions = [
    {
        text: "1. 1到10分，你認為自己的拖延程度大概落在幾分？",
        options: [
            { text: "1~3分 (不太拖延)", pScore: 0, jScore: 2, aScore: 0 },
            { text: "4~6分 (偶爾拖延)", pScore: 1, jScore: 1, aScore: 1 },
            { text: "7~10分 (重度拖延)", pScore: 2, jScore: 0, aScore: 2 }
        ]
    },
    {
        text: "2. 在大學生活中，你最容易在哪些事情上拖延？",
        options: [
            { text: "很簡單、確定能做完的小作業", pScore: 0, jScore: 2, aScore: 0 },
            { text: "需要大量腦力的大型報告或考試準備", pScore: 2, jScore: 0, aScore: 2 },
            { text: "日常瑣事 (如洗澡、回訊息)", pScore: 2, jScore: 1, aScore: 0 }
        ]
    },
    {
        text: "3. 當你拖延時，最主要的原因是什麼？",
        options: [
            { text: "單純缺乏動力，懶得開始", pScore: 2, jScore: 0, aScore: 0 },
            { text: "覺得時間還很多，先做別的事", pScore: 2, jScore: 0, aScore: 1 },
            { text: "很容易被其他更有趣的事情吸引", pScore: 2, jScore: 0, aScore: 1 },
            { text: "不知從何下手，怕做不好", pScore: 0, jScore: 2, aScore: 2 }
        ]
    },
    {
        text: "4. 明明知道該做事卻還在滑手機時，你的感受是？",
        options: [
            { text: "覺得滿放鬆的，沒什麼特別感覺", pScore: 2, jScore: 0, aScore: 0 },
            { text: "有點罪惡感，但還能繼續滑", pScore: 1, jScore: 1, aScore: 1 },
            { text: "充滿極大的罪惡感跟焦慮，覺得自己很糟糕", pScore: 0, jScore: 2, aScore: 2 }
        ]
    },
    {
        text: "5. 在 Deadline 快到的時候，你通常會出現哪些情緒？",
        options: [
            { text: "異常冷靜，甚至覺得有點刺激", pScore: 2, jScore: 0, aScore: 0 },
            { text: "煩躁、不想面對", pScore: 1, jScore: 1, aScore: 1 },
            { text: "極度恐懼、緊張與焦慮", pScore: 0, jScore: 2, aScore: 2 }
        ]
    },
    {
        text: "6. 任務完成後，你通常有什麼感受？",
        options: [
            { text: "很有成就感！覺得自己超強", pScore: 2, jScore: 0, aScore: 0 },
            { text: "鬆了一口氣，但懊悔自己拖到最後", pScore: 1, jScore: 1, aScore: 2 },
            { text: "覺得自己很糟糕，發誓下次不要這樣 (但通常破功)", pScore: 0, jScore: 2, aScore: 2 }
        ]
    },
    {
        text: "7. 你曾經嘗試過哪些方法改善拖延？",
        options: [
            { text: "做詳細的規畫與 Notion 排程", pScore: 0, jScore: 2, aScore: 1 },
            { text: "把任務拆解成小步驟", pScore: 1, jScore: 1, aScore: 0 },
            { text: "想到就做，或隨機挑一件順眼的做", pScore: 2, jScore: 0, aScore: 0 }
        ]
    },
    {
        text: "8. 你覺得上述嘗試的方法有效嗎？",
        options: [
            { text: "有效，能提醒自己有事要做", pScore: 0, jScore: 2, aScore: 0 },
            { text: "一開始有效而已，後來就懶得用了", pScore: 2, jScore: 0, aScore: 1 },
            { text: "完全沒效", pScore: 2, jScore: 1, aScore: 2 }
        ]
    },
    {
        text: "9. 你覺得拖延帶來的負面影響有哪些？",
        options: [
            { text: "幾乎沒有影響", pScore: 2, jScore: 0, aScore: 0 },
            { text: "主要是睡眠不足", pScore: 1, jScore: 1, aScore: 1 },
            { text: "帶來極大的心理壓力與焦慮感", pScore: 0, jScore: 2, aScore: 2 }
        ]
    },
    {
        text: "10. 當事情很多的時候，你比較容易......",
        options: [
            { text: "先逃避一下再說", pScore: 2, jScore: 0, aScore: 1 },
            { text: "隨便挑一件做，走一步算一步", pScore: 2, jScore: 0, aScore: 0 },
            { text: "立刻開始列計畫或補計畫", pScore: 0, jScore: 2, aScore: 2 }
        ]
    },
    {
        text: "11. 1到10分，你覺得自己在壓力下效率反而更高嗎？",
        options: [
            { text: "1~3分 (壓力讓我當機)", pScore: 0, jScore: 2, aScore: 2 },
            { text: "4~7分 (稍微有點幫助)", pScore: 1, jScore: 1, aScore: 1 },
            { text: "8~10分 (沒有壓力根本很難做事)", pScore: 2, jScore: 0, aScore: 0 }
        ]
    },
    {
        text: "12. 如果截止日期突然延後一週，你最有可能......",
        options: [
            { text: "直接把進度延後到最後幾天", pScore: 2, jScore: 0, aScore: 0 },
            { text: "稍微延後，但還是會掛心", pScore: 1, jScore: 1, aScore: 1 },
            { text: "照原訂計畫完成，提早解脫", pScore: 0, jScore: 2, aScore: 0 }
        ]
    },
    {
        text: "13. 如果有 AI 可以協助你克服拖延，你最希望它提供什麼功能？",
        options: [
            { text: "提供情緒支持或陪伴", pScore: 2, jScore: 0, aScore: 2 },
            { text: "幫我進行任務拆解", pScore: 1, jScore: 1, aScore: 1 },
            { text: "嚴格的進度追蹤，或把我從床上挖起來", pScore: 0, jScore: 2, aScore: 1 }
        ]
    }
];

let currentQ = 0;
let totalP = 0; let totalJ = 0; let totalA = 0;

function startQuiz() {
    document.getElementById('home-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQ];
    document.getElementById('current-q-num').innerText = currentQ + 1;
    document.getElementById('question-text').innerText = q.text;
    
    // 更新頂部進度條
    const progressPercent = ((currentQ) / questions.length) * 100;
    document.getElementById('quiz-progress').style.width = progressPercent + '%';
    
    const optionsArea = document.getElementById('options-area');
    optionsArea.innerHTML = '';
    
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt.text;
        btn.onclick = () => handleSelect(opt.pScore, opt.jScore, opt.aScore);
        optionsArea.appendChild(btn);
    });
}

function handleSelect(p, j, a) {
    totalP += p;
    totalJ += j;
    totalA += a;
    
    currentQ++;
    if (currentQ < questions.length) {
        renderQuestion();
    } else {
        calculateResult();
    }
}

function calculateResult() {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');

    const maxPJ = totalP + totalJ;
    // 防呆機制避免除以 0
    const pPercent = maxPJ === 0 ? 50 : Math.round((totalP / maxPJ) * 100);
    
    // 焦慮總分最高 26 分
    const maxA = 26;
    const aPercent = Math.round((totalA / maxA) * 100);

    // 延遲更新長條圖以觸發 CSS 動畫
    setTimeout(() => {
        document.getElementById('bar-pj').style.width = pPercent + '%';
        document.getElementById('bar-anxiety').style.width = aPercent + '%';
    }, 100);

    const isP = totalP >= totalJ;
    const isAnxious = totalA > 12;

    const roleElem = document.getElementById('result-role');
    const descElem = document.getElementById('result-desc');
    const adviceElem = document.getElementById('result-advice');

    if (isP && !isAnxious) {
        roleElem.innerText = "🏄 極限衝浪者 (P型 / 低焦慮)";
        descElem.innerText = "你的 PaceSync 狀態：高彈性、低內耗。你具備極佳的適應力，往往在死線前能產出驚人效率。傳統的死板計畫對你反而是一種束縛，你需要的是外部刺激。";
        adviceElem.innerHTML = `
            <li><strong>遊戲化同步：</strong> 不要用「做完才能玩」逼自己，試著把任務當成破關，每完成一小段就給自己實質獎勵。</li>
            <li><strong>實體環境切換：</strong> 容易被外物吸引，就帶著筆電去一個沒有床跟誘惑的咖啡廳，利用環境強制自己同步。</li>
            <li><strong>創造假死線：</strong> 邀請朋友成為你的「進度督導」，約定提早交出初稿，沒交就請客，利用外部壓力啟動引擎。</li>
        `;
    } else if (isP && isAnxious) {
        roleElem.innerText = "⚡ 焦慮發電機 (P型 / 高焦慮)";
        descElem.innerText = "你的 PaceSync 狀態：高彈性，但容易內耗。你容易被有趣的事物吸引，但滑手機時內心卻充滿罪惡感。你處於「想做卻沒有動力」的矛盾中。";
        adviceElem.innerHTML = `
            <li><strong>任務微縮法：</strong> 讓第一步簡單到不可能失敗，例如「只要開好 Word 存檔就好」，降低大腦的啟動阻力。</li>
            <li><strong>尋找替身 (Body Doubling)：</strong> 找朋友開著視訊不講話一起讀書，利用陪伴感降低焦慮，同步工作節奏。</li>
            <li><strong>情緒先決：</strong> 原諒自己剛才的拖延，告訴自己「現在開始也不遲」，先處理情緒，再處理任務。</li>
        `;
    } else if (!isP && isAnxious) {
        roleElem.innerText = "🕰️ 完美時鐘塔 (J型 / 高焦慮)";
        descElem.innerText = "你的 PaceSync 狀態：高結構化，但因完美主義卡關。你重視掌控感，拖延往往來自怕做不好的焦慮。一旦進度落後，你容易陷入「瘋狂列計畫但不實作」的癱瘓。";
        adviceElem.innerHTML = `
            <li><strong>接受史上最爛初稿：</strong> 告訴自己「先寫出一份垃圾」，打破完美主義的魔咒，後續再來修改。</li>
            <li><strong>限制規劃時間：</strong> 排定計畫的時間絕對不可超過 15 分鐘，時間一到，立刻強制進入實作狀態。</li>
            <li><strong>五分鐘起步法：</strong> 說服自己「我只做五分鐘就好」，通常只要開始了，J型的慣性就會推著你做完。</li>
        `;
    } else {
        roleElem.innerText = "🦥 戰略性樹懶 (J型 / 低焦慮)";
        descElem.innerText = "你的 PaceSync 狀態：高結構化、低內耗。你會做計畫，但很懂得「精打細算」。你通常只在確信一定做得完的簡單任務上拖延，心裡總是有底。";
        adviceElem.innerHTML = `
            <li><strong>兩分鐘定律：</strong> 如果這件事兩分鐘內能解決（如回信、整理檔案），立刻做，不要讓它佔用你的計畫表。</li>
            <li><strong>困難前置：</strong> 利用你優秀的規劃能力，刻意把最討厭的任務排在精神最好的時段第一個解決。</li>
            <li><strong>AI 輔助同步：</strong> 將瑣碎的日常任務交給 AI 或自動化工具提醒，把大腦的算力留給真正重要的思考。</li>
        `;
    }
}
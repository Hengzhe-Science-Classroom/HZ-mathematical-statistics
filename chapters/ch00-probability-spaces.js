window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch00',
    number: 0,
    title: '概率空间与随机变量',
    subtitle: 'Probability Spaces & Random Variables',
    sections: [
        // ===== Section 1: σ-代数与概率测度 =====
        {
            id: 'ch00-sec01',
            title: 'σ-代数与概率测度',
            content: `
                <h2>σ-代数与概率测度</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>概率论的根基在于回答这样一个问题：我们能对哪些"事件"赋予概率？并非所有子集都能被一致地赋予概率（这在 Vitali 构造中已被证明），因此我们需要 \\\\(\\\\sigma\\\\)-代数来精确划定"可测事件"的范围。Kolmogorov 于 1933 年建立了概率论的公理化体系，将概率建立在测度论之上。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.1 (σ-代数)</div>
                    <div class="env-body">
                        <p>设 \\\\(\\\\Omega\\\\) 为非空集合。\\\\(\\\\Omega\\\\) 上的 <strong>σ-代数</strong>（σ-algebra）是一个集族 \\\\(\\\\mathcal{F} \\\\subseteq 2^{\\\\Omega}\\\\) 满足：</p>
                        <ol>
                            <li>\\\\(\\\\Omega \\\\in \\\\mathcal{F}\\\\)；</li>
                            <li>若 \\\\(A \\\\in \\\\mathcal{F}\\\\)，则 \\\\(A^c \\\\in \\\\mathcal{F}\\\\)（对补运算封闭）；</li>
                            <li>若 \\\\(A_1, A_2, \\\\ldots \\\\in \\\\mathcal{F}\\\\)，则 \\\\(\\\\bigcup_{n=1}^{\\\\infty} A_n \\\\in \\\\mathcal{F}\\\\)（对可列并封闭）。</li>
                        </ol>
                        <p>称 \\\\((\\\\Omega, \\\\mathcal{F})\\\\) 为一个 <strong>可测空间</strong>（measurable space）。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>由 De Morgan 律可知 σ-代数也对可列交封闭。最小的 σ-代数为 \\\\(\\\\{\\\\emptyset, \\\\Omega\\\\}\\\\)，最大的为 \\\\(2^{\\\\Omega}\\\\)（所有子集构成的幂集）。在 \\\\(\\\\mathbb{R}\\\\) 上，最常用的是由所有开集生成的 <strong>Borel σ-代数</strong> \\\\(\\\\mathcal{B}(\\\\mathbb{R})\\\\)。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.2 (概率测度)</div>
                    <div class="env-body">
                        <p>设 \\\\((\\\\Omega, \\\\mathcal{F})\\\\) 为可测空间。映射 \\\\(P: \\\\mathcal{F} \\\\to [0,1]\\\\) 称为 \\\\(\\\\mathcal{F}\\\\) 上的 <strong>概率测度</strong>（probability measure），若：</p>
                        <ol>
                            <li>\\\\(P(\\\\Omega) = 1\\\\)（归一性）；</li>
                            <li>对于两两不交的序列 \\\\(A_1, A_2, \\\\ldots \\\\in \\\\mathcal{F}\\\\)，
                            \\\\[P\\\\!\\\\left(\\\\bigcup_{n=1}^{\\\\infty} A_n\\\\right) = \\\\sum_{n=1}^{\\\\infty} P(A_n)\\\\]
                            （可列可加性/countable additivity）。</li>
                        </ol>
                        <p>三元组 \\\\((\\\\Omega, \\\\mathcal{F}, P)\\\\) 称为 <strong>概率空间</strong>（probability space）。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 0.3 (概率测度的基本性质)</div>
                    <div class="env-body">
                        <p>设 \\\\((\\\\Omega, \\\\mathcal{F}, P)\\\\) 为概率空间，\\\\(A, B \\\\in \\\\mathcal{F}\\\\)，则：</p>
                        <ol>
                            <li>\\\\(P(\\\\emptyset) = 0\\\\)；</li>
                            <li>\\\\(P(A^c) = 1 - P(A)\\\\)；</li>
                            <li><strong>单调性</strong>：若 \\\\(A \\\\subseteq B\\\\)，则 \\\\(P(A) \\\\leq P(B)\\\\)；</li>
                            <li><strong>容斥原理</strong>：\\\\(P(A \\\\cup B) = P(A) + P(B) - P(A \\\\cap B)\\\\)；</li>
                            <li><strong>次可加性</strong>（Boole 不等式）：\\\\(P\\\\!\\\\left(\\\\bigcup_{n=1}^{\\\\infty} A_n\\\\right) \\\\leq \\\\sum_{n=1}^{\\\\infty} P(A_n)\\\\)；</li>
                            <li><strong>连续性</strong>：若 \\\\(A_n \\\\uparrow A\\\\)（单调递增），则 \\\\(P(A_n) \\\\to P(A)\\\\)。</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof（部分）</div>
                    <div class="env-body">
                        <p>(1) 取 \\\\(A_1 = \\\\Omega, A_n = \\\\emptyset\\\\) (\\\\(n \\\\geq 2\\\\))，由可列可加性：</p>
                        \\\\[1 = P(\\\\Omega) = P(\\\\Omega) + \\\\sum_{n=2}^{\\\\infty} P(\\\\emptyset) = 1 + \\\\sum_{n=2}^{\\\\infty} P(\\\\emptyset),\\\\]
                        <p>故 \\\\(P(\\\\emptyset) = 0\\\\)。</p>
                        <p>(2) \\\\(\\\\Omega = A \\\\cup A^c\\\\) 且 \\\\(A \\\\cap A^c = \\\\emptyset\\\\)，由可列可加性得 \\\\(1 = P(A) + P(A^c)\\\\)。</p>
                        <p>(4) 将 \\\\(A \\\\cup B\\\\) 分解为不交并：\\\\(A \\\\cup B = A \\\\cup (B \\\\setminus A)\\\\)，其中 \\\\(B = (A \\\\cap B) \\\\cup (B \\\\setminus A)\\\\)，故 \\\\(P(B \\\\setminus A) = P(B) - P(A \\\\cap B)\\\\)。因此 \\\\(P(A \\\\cup B) = P(A) + P(B) - P(A \\\\cap B)\\\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 0.4</div>
                    <div class="env-body">
                        <p>掷一枚公平骰子：\\\\(\\\\Omega = \\\\{1,2,3,4,5,6\\\\}\\\\)，\\\\(\\\\mathcal{F} = 2^{\\\\Omega}\\\\)，\\\\(P(\\\\{\\\\omega\\\\}) = 1/6\\\\)。</p>
                        <p>设 \\\\(A = \\\\{2,4,6\\\\}\\\\)（偶数），\\\\(B = \\\\{1,2,3\\\\}\\\\)（不超过3）。则：</p>
                        \\\\[P(A \\\\cup B) = P(A) + P(B) - P(A \\\\cap B) = \\\\frac{3}{6} + \\\\frac{3}{6} - \\\\frac{1}{6} = \\\\frac{5}{6}.\\\\]
                    </div>
                </div>

                <p>下面的交互式可视化展示了容斥原理在 Venn 图上的直观含义。拖动可调节 \\\\(P(A)\\\\) 和 \\\\(P(B)\\\\) 的大小，观察 \\\\(P(A \\\\cup B)\\\\) 的变化。</p>

                <div class="viz-placeholder" data-viz="venn-probability-viz"></div>
            `,
            visualizations: [
                {
                    id: 'venn-probability-viz',
                    title: 'Interactive: 容斥原理 Venn 图',
                    description: '拖动滑块调节 P(A), P(B), P(A∩B)，观察 Venn 图变化',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 400, scale: 40});

                        var pA = 0.5;
                        var pB = 0.4;
                        var pAB = 0.15;

                        var sliderA = VizEngine.createSlider(controls, 'P(A)', 0, 1, pA, 0.01, function(v) {
                            pA = v;
                            if (pAB > Math.min(pA, pB)) { pAB = Math.min(pA, pB); sliderAB.value = pAB; }
                            draw();
                        });
                        var sliderB = VizEngine.createSlider(controls, 'P(B)', 0, 1, pB, 0.01, function(v) {
                            pB = v;
                            if (pAB > Math.min(pA, pB)) { pAB = Math.min(pA, pB); sliderAB.value = pAB; }
                            draw();
                        });
                        var sliderAB = VizEngine.createSlider(controls, 'P(A∩B)', 0, 0.5, pAB, 0.01, function(v) {
                            pAB = Math.min(v, Math.min(pA, pB));
                            draw();
                        });

                        function draw() {
                            viz.clear();

                            var ctx = viz.ctx;
                            var cx = viz.width / 2;
                            var cy = viz.height / 2 - 10;

                            var rA = Math.sqrt(pA) * 120;
                            var rB = Math.sqrt(pB) * 120;
                            var overlap = pAB > 0 ? Math.sqrt(pAB) * 80 : rA + rB + 10;
                            var dist = rA + rB - overlap;
                            if (dist < 0) dist = 0;

                            var xA = cx - dist / 2;
                            var xB = cx + dist / 2;

                            // Draw circle A
                            ctx.globalAlpha = 0.3;
                            ctx.fillStyle = viz.colors.blue;
                            ctx.beginPath();
                            ctx.arc(xA, cy, rA, 0, 2 * Math.PI);
                            ctx.fill();

                            // Draw circle B
                            ctx.fillStyle = viz.colors.orange;
                            ctx.beginPath();
                            ctx.arc(xB, cy, rB, 0, 2 * Math.PI);
                            ctx.fill();

                            ctx.globalAlpha = 1.0;

                            // Outlines
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.arc(xA, cy, rA, 0, 2 * Math.PI);
                            ctx.stroke();

                            ctx.strokeStyle = viz.colors.orange;
                            ctx.beginPath();
                            ctx.arc(xB, cy, rB, 0, 2 * Math.PI);
                            ctx.stroke();

                            // Labels
                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = 'bold 16px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('A', xA - rA * 0.4, cy - rA * 0.3);

                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('B', xB + rB * 0.4, cy - rB * 0.3);

                            // Omega rectangle
                            ctx.strokeStyle = viz.colors.text;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 4]);
                            ctx.strokeRect(cx - 230, cy - 150, 460, 300);
                            ctx.setLineDash([]);

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '14px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Ω', cx - 220, cy - 132);

                            // Computed values
                            var pAuB = pA + pB - pAB;
                            if (pAuB > 1) pAuB = 1;

                            // Display formulas
                            var y0 = viz.height - 55;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '14px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('P(A) = ' + pA.toFixed(2) + '    P(B) = ' + pB.toFixed(2) + '    P(A∩B) = ' + pAB.toFixed(2), cx, y0);

                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = 'bold 15px -apple-system, sans-serif';
                            ctx.fillText('P(A∪B) = P(A) + P(B) - P(A∩B) = ' + pAuB.toFixed(2), cx, y0 + 25);
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '证明：若 \\\\(\\\\mathcal{F}\\\\) 是 σ-代数，则 \\\\(\\\\emptyset \\\\in \\\\mathcal{F}\\\\)，且 \\\\(\\\\mathcal{F}\\\\) 对可列交封闭。',
                    hint: '利用 \\\\(\\\\emptyset = \\\\Omega^c\\\\) 和 De Morgan 律 \\\\(\\\\bigcap_n A_n = \\\\left(\\\\bigcup_n A_n^c\\\\right)^c\\\\)。',
                    solution: '由定义 \\\\(\\\\Omega \\\\in \\\\mathcal{F}\\\\) 且 \\\\(\\\\mathcal{F}\\\\) 对补封闭，故 \\\\(\\\\emptyset = \\\\Omega^c \\\\in \\\\mathcal{F}\\\\)。若 \\\\(A_n \\\\in \\\\mathcal{F}\\\\)，则 \\\\(A_n^c \\\\in \\\\mathcal{F}\\\\)，\\\\(\\\\bigcup_n A_n^c \\\\in \\\\mathcal{F}\\\\)，因此 \\\\(\\\\bigcap_n A_n = \\\\left(\\\\bigcup_n A_n^c\\\\right)^c \\\\in \\\\mathcal{F}\\\\)。'
                },
                {
                    question: '设 \\\\(P(A) = 0.6\\\\)，\\\\(P(B) = 0.5\\\\)，\\\\(P(A \\\\cap B) = 0.2\\\\)。求 \\\\(P(A^c \\\\cap B^c)\\\\)。',
                    hint: '利用 De Morgan 律：\\\\(A^c \\\\cap B^c = (A \\\\cup B)^c\\\\)。',
                    solution: '\\\\(P(A \\\\cup B) = 0.6 + 0.5 - 0.2 = 0.9\\\\)，故 \\\\(P(A^c \\\\cap B^c) = P((A \\\\cup B)^c) = 1 - 0.9 = 0.1\\\\)。'
                },
                {
                    question: '证明 Boole 不等式（次可加性）：对任意事件序列 \\\\(A_1, A_2, \\\\ldots\\\\)，\\\\(P\\\\!\\\\left(\\\\bigcup_{n=1}^{\\\\infty} A_n\\\\right) \\\\leq \\\\sum_{n=1}^{\\\\infty} P(A_n)\\\\)。',
                    hint: '定义 \\\\(B_1 = A_1\\\\)，\\\\(B_n = A_n \\\\setminus \\\\bigcup_{k=1}^{n-1} A_k\\\\)，则 \\\\(\\\\{B_n\\\\}\\\\) 两两不交且 \\\\(\\\\bigcup B_n = \\\\bigcup A_n\\\\)。',
                    solution: '令 \\\\(B_1 = A_1\\\\)，\\\\(B_n = A_n \\\\setminus \\\\bigcup_{k=1}^{n-1} A_k\\\\)。则 \\\\(\\\\{B_n\\\\}\\\\) 两两不交，\\\\(\\\\bigcup_n B_n = \\\\bigcup_n A_n\\\\)，且 \\\\(B_n \\\\subseteq A_n\\\\)，故 \\\\(P(B_n) \\\\leq P(A_n)\\\\)。因此 \\\\(P\\\\!\\\\left(\\\\bigcup_n A_n\\\\right) = \\\\sum_n P(B_n) \\\\leq \\\\sum_n P(A_n)\\\\)。'
                }
            ]
        },

        // ===== Section 2: 条件概率与独立性 =====
        {
            id: 'ch00-sec02',
            title: '条件概率与独立性',
            content: `
                <h2>条件概率与独立性</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>条件概率的核心思想是"更新信息"：当我们得知事件 \\\\(B\\\\) 已经发生后，对事件 \\\\(A\\\\) 的信念应如何调整？从频率的角度看，我们将样本空间"缩小"到 \\\\(B\\\\)，只关注那些 \\\\(B\\\\) 发生时 \\\\(A\\\\) 也发生的比例。Bayes 定理则给出了逆向推理的方法——从"效果"反推"原因"的概率。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.5 (条件概率)</div>
                    <div class="env-body">
                        <p>设 \\\\((\\\\Omega, \\\\mathcal{F}, P)\\\\) 为概率空间，\\\\(B \\\\in \\\\mathcal{F}\\\\) 且 \\\\(P(B) > 0\\\\)。事件 \\\\(A \\\\in \\\\mathcal{F}\\\\) 在给定 \\\\(B\\\\) 下的 <strong>条件概率</strong>（conditional probability）定义为：</p>
                        \\\\[P(A \\\\mid B) = \\\\frac{P(A \\\\cap B)}{P(B)}.\\\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 0.6 (全概率公式)</div>
                    <div class="env-body">
                        <p>设 \\\\(B_1, B_2, \\\\ldots, B_n\\\\) 是 \\\\(\\\\Omega\\\\) 的一个有限划分（即两两不交且并为 \\\\(\\\\Omega\\\\)），每个 \\\\(P(B_i) > 0\\\\)。则对任意 \\\\(A \\\\in \\\\mathcal{F}\\\\)：</p>
                        \\\\[P(A) = \\\\sum_{i=1}^{n} P(A \\\\mid B_i) \\\\, P(B_i).\\\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>因为 \\\\(A = A \\\\cap \\\\Omega = A \\\\cap \\\\left(\\\\bigcup_i B_i\\\\right) = \\\\bigcup_i (A \\\\cap B_i)\\\\)，且 \\\\(\\\\{A \\\\cap B_i\\\\}\\\\) 两两不交，故</p>
                        \\\\[P(A) = \\\\sum_i P(A \\\\cap B_i) = \\\\sum_i P(A \\\\mid B_i) P(B_i).\\\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 0.7 (Bayes 定理)</div>
                    <div class="env-body">
                        <p>在定理 0.6 的条件下，对任意 \\\\(j\\\\)，若 \\\\(P(A) > 0\\\\)，则：</p>
                        \\\\[P(B_j \\\\mid A) = \\\\frac{P(A \\\\mid B_j) \\\\, P(B_j)}{\\\\sum_{i=1}^{n} P(A \\\\mid B_i) \\\\, P(B_i)}.\\\\]
                        <p>其中 \\\\(P(B_j)\\\\) 称为<strong>先验概率</strong>（prior），\\\\(P(B_j \\\\mid A)\\\\) 称为<strong>后验概率</strong>（posterior），\\\\(P(A \\\\mid B_j)\\\\) 称为<strong>似然</strong>（likelihood）。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 0.8 (疾病检测)</div>
                    <div class="env-body">
                        <p>某种罕见疾病的发病率为 \\\\(p = 0.001\\\\)。检测方法的灵敏度（sensitivity，真阳性率）为 0.99，特异度（specificity，真阴性率）为 0.95。某人检测呈阳性，其实际患病的概率为：</p>
                        \\\\[P(\\\\text{患病} \\\\mid +) = \\\\frac{0.99 \\\\times 0.001}{0.99 \\\\times 0.001 + 0.05 \\\\times 0.999} \\\\approx 0.0194.\\\\]
                        <p>尽管检测看起来"很准"，但由于先验概率极低，阳性预测值（PPV）只有约 1.94%。这就是<strong>基础率谬误</strong>（base rate fallacy）的经典体现。</p>
                    </div>
                </div>

                <p>下面的交互式可视化演示了 Bayes 定理在疾病检测中的应用。拖动滑块调节先验发病率、灵敏度和特异度，观察后验概率如何变化。</p>

                <div class="viz-placeholder" data-viz="bayes-disease-viz"></div>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.9 (事件独立性)</div>
                    <div class="env-body">
                        <p>事件 \\\\(A\\\\) 与 \\\\(B\\\\) <strong>独立</strong>（independent），若 \\\\(P(A \\\\cap B) = P(A) \\\\cdot P(B)\\\\)。</p>
                        <p>事件族 \\\\(\\\\{A_i\\\\}_{i \\\\in I}\\\\) <strong>相互独立</strong>（mutually independent），若对任意有限子集 \\\\(J \\\\subseteq I\\\\)：</p>
                        \\\\[P\\\\!\\\\left(\\\\bigcap_{j \\\\in J} A_j\\\\right) = \\\\prod_{j \\\\in J} P(A_j).\\\\]
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p><strong>两两独立 \\\\(\\\\neq\\\\) 相互独立。</strong>经典反例：将一枚硬币独立地抛两次，设 \\\\(A\\\\) = "第一次正面"，\\\\(B\\\\) = "第二次正面"，\\\\(C\\\\) = "两次结果相同"。可验证 \\\\(A, B, C\\\\) 两两独立但不相互独立，因为 \\\\(P(A \\\\cap B \\\\cap C) = 1/4 \\\\neq P(A) P(B) P(C) = 1/8\\\\)。</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'bayes-disease-viz',
                    title: 'Interactive: Bayesian 疾病检测',
                    description: '调节发病率、灵敏度和特异度，观察后验概率变化',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 420, scale: 40});

                        var prevalence = 0.01;
                        var sensitivity = 0.99;
                        var specificity = 0.95;

                        VizEngine.createSlider(controls, '发病率 (prevalence)', 0.001, 0.3, prevalence, 0.001, function(v) {
                            prevalence = v; draw();
                        });
                        VizEngine.createSlider(controls, '灵敏度 (sensitivity)', 0.5, 1.0, sensitivity, 0.01, function(v) {
                            sensitivity = v; draw();
                        });
                        VizEngine.createSlider(controls, '特异度 (specificity)', 0.5, 1.0, specificity, 0.01, function(v) {
                            specificity = v; draw();
                        });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var w = viz.width;
                            var h = viz.height;

                            // Compute Bayesian posterior
                            var pPosGivenD = sensitivity;
                            var pPosGivenNotD = 1 - specificity;
                            var pPos = pPosGivenD * prevalence + pPosGivenNotD * (1 - prevalence);
                            var ppv = (pPosGivenD * prevalence) / pPos;
                            var npv = (specificity * (1 - prevalence)) / (1 - pPos);

                            // Draw a natural frequency icon array (1000 people)
                            var N = 1000;
                            var nSick = Math.round(prevalence * N);
                            var nHealthy = N - nSick;
                            var nTruePos = Math.round(sensitivity * nSick);
                            var nFalseNeg = nSick - nTruePos;
                            var nFalsePos = Math.round((1 - specificity) * nHealthy);
                            var nTrueNeg = nHealthy - nFalsePos;

                            // Bar chart of the four groups
                            var barX = 60;
                            var barW = 90;
                            var gap = 30;
                            var maxH = 250;
                            var baseY = h - 80;

                            var groups = [
                                {label: 'TP', count: nTruePos, color: viz.colors.green},
                                {label: 'FP', count: nFalsePos, color: viz.colors.orange},
                                {label: 'FN', count: nFalseNeg, color: viz.colors.red},
                                {label: 'TN', count: nTrueNeg, color: viz.colors.blue}
                            ];

                            var maxCount = Math.max(nTruePos, nFalsePos, nFalseNeg, nTrueNeg, 1);

                            for (var i = 0; i < groups.length; i++) {
                                var g = groups[i];
                                var bx = barX + i * (barW + gap);
                                var bh = (g.count / maxCount) * maxH;

                                ctx.fillStyle = g.color + '88';
                                ctx.fillRect(bx, baseY - bh, barW, bh);
                                ctx.strokeStyle = g.color;
                                ctx.lineWidth = 2;
                                ctx.strokeRect(bx, baseY - bh, barW, bh);

                                ctx.fillStyle = viz.colors.white;
                                ctx.font = 'bold 14px -apple-system, sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(g.count.toString(), bx + barW / 2, baseY - bh - 10);

                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '12px -apple-system, sans-serif';
                                ctx.fillText(g.label, bx + barW / 2, baseY + 15);
                            }

                            // Horizontal baseline
                            ctx.strokeStyle = viz.colors.text;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(barX - 10, baseY);
                            ctx.lineTo(barX + 4 * (barW + gap), baseY);
                            ctx.stroke();

                            // Title and results
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 16px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Bayes: N = ' + N + ' people', w / 2, 25);

                            ctx.fillStyle = viz.colors.teal;
                            ctx.font = 'bold 15px -apple-system, sans-serif';
                            ctx.fillText('PPV = P(D|+) = ' + ppv.toFixed(4) + ' (' + (ppv * 100).toFixed(1) + '%)', w / 2, 52);

                            ctx.fillStyle = viz.colors.purple;
                            ctx.font = '13px -apple-system, sans-serif';
                            ctx.fillText('NPV = P(healthy|−) = ' + npv.toFixed(4) + ' (' + (npv * 100).toFixed(1) + '%)', w / 2, 74);

                            // Legend
                            var legY = baseY + 38;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            var legItems = [
                                {c: viz.colors.green, t: 'TP = True Positive (真阳性)'},
                                {c: viz.colors.orange, t: 'FP = False Positive (假阳性)'},
                                {c: viz.colors.red, t: 'FN = False Negative (假阴性)'},
                                {c: viz.colors.blue, t: 'TN = True Negative (真阴性)'}
                            ];
                            for (var j = 0; j < legItems.length; j++) {
                                ctx.fillStyle = legItems[j].c;
                                ctx.fillRect(30 + j * 140, legY, 10, 10);
                                ctx.fillStyle = viz.colors.text;
                                ctx.fillText(legItems[j].t, 44 + j * 140, legY + 9);
                            }
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\\\(P(A) = 0.3\\\\)，\\\\(P(B) = 0.4\\\\)，且 \\\\(A, B\\\\) 独立。求 \\\\(P(A \\\\mid A \\\\cup B)\\\\)。',
                    hint: '先由独立性计算 \\\\(P(A \\\\cap B) = P(A)P(B)\\\\)，再由容斥求 \\\\(P(A \\\\cup B)\\\\)。注意 \\\\(P(A \\\\cap (A \\\\cup B)) = P(A)\\\\)。',
                    solution: '\\\\(P(A \\\\cup B) = 0.3 + 0.4 - 0.3 \\\\times 0.4 = 0.58\\\\)。因为 \\\\(A \\\\subseteq A \\\\cup B\\\\)，故 \\\\(P(A \\\\cap (A \\\\cup B)) = P(A) = 0.3\\\\)。因此 \\\\(P(A \\\\mid A \\\\cup B) = 0.3 / 0.58 \\\\approx 0.5172\\\\)。'
                },
                {
                    question: '利用 Bayes 定理，若先验发病率从 0.001 增加到 0.1（其他参数不变：灵敏度 0.99，特异度 0.95），阳性预测值（PPV）变为多少？',
                    hint: '代入 Bayes 公式：\\\\(\\\\text{PPV} = \\\\frac{0.99 \\\\times 0.1}{0.99 \\\\times 0.1 + 0.05 \\\\times 0.9}\\\\)。',
                    solution: '\\\\(\\\\text{PPV} = \\\\frac{0.099}{0.099 + 0.045} = \\\\frac{0.099}{0.144} \\\\approx 0.6875\\\\)，即约 68.75%。先验概率的大幅增加使后验概率显著提升。'
                },
                {
                    question: '证明：若 \\\\(A\\\\) 与 \\\\(B\\\\) 独立，则 \\\\(A\\\\) 与 \\\\(B^c\\\\) 也独立。',
                    hint: '将 \\\\(A\\\\) 分解为 \\\\(A = (A \\\\cap B) \\\\cup (A \\\\cap B^c)\\\\)。',
                    solution: '由 \\\\(A = (A \\\\cap B) \\\\cup (A \\\\cap B^c)\\\\) 且不交性：\\\\(P(A) = P(A \\\\cap B) + P(A \\\\cap B^c)\\\\)。因 \\\\(A, B\\\\) 独立：\\\\(P(A \\\\cap B) = P(A)P(B)\\\\)。故 \\\\(P(A \\\\cap B^c) = P(A) - P(A)P(B) = P(A)(1 - P(B)) = P(A)P(B^c)\\\\)。'
                }
            ]
        },

        // ===== Section 3: 随机变量与分布函数 =====
        {
            id: 'ch00-sec03',
            title: '随机变量与分布函数',
            content: `
                <h2>随机变量与分布函数</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>现实中，我们关心的往往不是抽象的样本点 \\\\(\\\\omega\\\\)，而是从实验中提取的数值信息——如"掷骰子的点数""测量温度的读数"等。随机变量就是将抽象的概率空间映射到实数轴的桥梁。它必须是<strong>可测函数</strong>，确保"\\\\(X \\\\leq x\\\\)"这样的事件属于 σ-代数，从而可被赋予概率。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.10 (随机变量)</div>
                    <div class="env-body">
                        <p>设 \\\\((\\\\Omega, \\\\mathcal{F}, P)\\\\) 为概率空间。映射 \\\\(X: \\\\Omega \\\\to \\\\mathbb{R}\\\\) 称为（实值）<strong>随机变量</strong>（random variable），若对任意 \\\\(x \\\\in \\\\mathbb{R}\\\\)：</p>
                        \\\\[\\\\{\\\\omega \\\\in \\\\Omega : X(\\\\omega) \\\\leq x\\\\} \\\\in \\\\mathcal{F}.\\\\]
                        <p>即 \\\\(X\\\\) 是 \\\\((\\\\Omega, \\\\mathcal{F})\\\\) 到 \\\\((\\\\mathbb{R}, \\\\mathcal{B}(\\\\mathbb{R}))\\\\) 的<strong>可测函数</strong>。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.11 (累积分布函数)</div>
                    <div class="env-body">
                        <p>随机变量 \\\\(X\\\\) 的<strong>累积分布函数</strong>（CDF）为 \\\\(F_X: \\\\mathbb{R} \\\\to [0,1]\\\\)：</p>
                        \\\\[F_X(x) = P(X \\\\leq x).\\\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 0.12 (CDF 的性质)</div>
                    <div class="env-body">
                        <p>任何 CDF \\\\(F\\\\) 满足：</p>
                        <ol>
                            <li>\\\\(F\\\\) 单调非递减；</li>
                            <li>\\\\(F\\\\) 右连续：\\\\(\\\\lim_{x \\\\to a^+} F(x) = F(a)\\\\)；</li>
                            <li>\\\\(\\\\lim_{x \\\\to -\\\\infty} F(x) = 0\\\\)，\\\\(\\\\lim_{x \\\\to +\\\\infty} F(x) = 1\\\\)。</li>
                        </ol>
                        <p>反之，任何满足上述三条性质的函数都是某个随机变量的 CDF。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.13 (PMF 与 PDF)</div>
                    <div class="env-body">
                        <p><strong>离散型：</strong>若 \\\\(X\\\\) 取值于可列集 \\\\(\\\\{x_1, x_2, \\\\ldots\\\\}\\\\)，其<strong>概率质量函数</strong>（PMF）为 \\\\(p_X(x_k) = P(X = x_k)\\\\)，且 \\\\(\\\\sum_k p_X(x_k) = 1\\\\)。此时 CDF 为阶梯函数。</p>
                        <p><strong>连续型：</strong>若存在非负可积函数 \\\\(f_X\\\\) 使得 \\\\(F_X(x) = \\\\int_{-\\\\infty}^{x} f_X(t) \\\\, dt\\\\)，则称 \\\\(f_X\\\\) 为 \\\\(X\\\\) 的<strong>概率密度函数</strong>（PDF）。在 \\\\(F\\\\) 可微处 \\\\(f_X(x) = F_X'(x)\\\\)。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 0.14</div>
                    <div class="env-body">
                        <p><strong>离散：</strong>Bernoulli(\\\\(p\\\\)) 随机变量取值 \\\\(\\\\{0,1\\\\}\\\\)，PMF 为 \\\\(p_X(1) = p\\\\)，\\\\(p_X(0) = 1-p\\\\)。其 CDF 为：</p>
                        \\\\[F_X(x) = \\\\begin{cases} 0 & x < 0 \\\\\\\\ 1-p & 0 \\\\leq x < 1 \\\\\\\\ 1 & x \\\\geq 1 \\\\end{cases}\\\\]
                        <p><strong>连续：</strong>指数分布 \\\\(\\\\text{Exp}(\\\\lambda)\\\\) 的 PDF 和 CDF 分别为：</p>
                        \\\\[f_X(x) = \\\\lambda e^{-\\\\lambda x} \\\\mathbf{1}_{x \\\\geq 0}, \\\\quad F_X(x) = (1 - e^{-\\\\lambda x}) \\\\mathbf{1}_{x \\\\geq 0}.\\\\]
                    </div>
                </div>

                <p>下面的可视化允许你构建离散 CDF（阶梯函数）并对比连续 CDF。通过滑块切换不同分布，直观观察 CDF 的形态。</p>

                <div class="viz-placeholder" data-viz="cdf-builder-viz"></div>
            `,
            visualizations: [
                {
                    id: 'cdf-builder-viz',
                    title: 'Interactive: CDF 对比 — 离散 vs 连续',
                    description: '切换分布类型，观察 CDF 阶梯函数和平滑 CDF 的对比',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400, scale: 50,
                            originX: 80, originY: 340
                        });

                        var mode = 'binomial';
                        var param1 = 10;
                        var param2 = 0.5;

                        VizEngine.createButton(controls, 'Binomial(n,p)', function() {
                            mode = 'binomial'; param1 = 10; param2 = 0.5;
                            sN.value = 10; sP.value = 0.5; draw();
                        });
                        VizEngine.createButton(controls, 'Normal(mu,sigma)', function() {
                            mode = 'normal'; param1 = 3; param2 = 1;
                            sN.value = 3; sP.value = 1; draw();
                        });
                        VizEngine.createButton(controls, 'Exponential(lambda)', function() {
                            mode = 'exponential'; param1 = 1; param2 = 0;
                            sN.value = 1; sP.value = 0; draw();
                        });

                        var sN = VizEngine.createSlider(controls, 'Param 1 (n / mu / lambda)', 0.1, 20, param1, 0.1, function(v) {
                            param1 = v; draw();
                        });
                        var sP = VizEngine.createSlider(controls, 'Param 2 (p / sigma / --)', 0.01, 5, param2, 0.01, function(v) {
                            param2 = v; draw();
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var ctx = viz.ctx;
                            var xMin = -1;
                            var xMax = 10;

                            if (mode === 'binomial') {
                                var n = Math.round(param1);
                                var p = Math.max(0.01, Math.min(0.99, param2));
                                xMin = -0.5;
                                xMax = n + 1;

                                // Draw CDF as step function
                                var cumP = 0;
                                viz.drawSegment(xMin, 0, 0, 0, viz.colors.blue, 2);
                                for (var k = 0; k <= n; k++) {
                                    var pmf = VizEngine.binomialPMF(k, n, p);
                                    var prevCum = cumP;
                                    cumP += pmf;
                                    // Horizontal line at cumP from k to k+1
                                    var right = (k === n) ? xMax : k + 1;
                                    viz.drawSegment(k, cumP, right, cumP, viz.colors.blue, 2);
                                    // Vertical jump
                                    viz.drawSegment(k, prevCum, k, cumP, viz.colors.blue, 1, true);
                                    // Filled circle at (k, cumP), open at (k, prevCum)
                                    viz.drawPoint(k, cumP, viz.colors.blue, null, 4);
                                    // Open circle
                                    if (k > 0 || prevCum > 0) {
                                        var sc = viz.toScreen(k, prevCum);
                                        ctx.strokeStyle = viz.colors.blue;
                                        ctx.lineWidth = 2;
                                        ctx.beginPath();
                                        ctx.arc(sc[0], sc[1], 4, 0, 2 * Math.PI);
                                        ctx.stroke();
                                    }
                                }

                                viz.screenText('Binomial(' + n + ', ' + p.toFixed(2) + ') CDF', viz.width / 2, 20, viz.colors.white, 15);
                            } else if (mode === 'normal') {
                                var mu = param1;
                                var sigma = Math.max(0.1, param2);
                                xMin = mu - 4 * sigma;
                                xMax = mu + 4 * sigma;

                                // Shade PDF (scaled)
                                viz.shadeUnder(function(x) { return VizEngine.normalPDF(x, mu, sigma) * 3; }, xMin, xMax, viz.colors.purple + '33');

                                // Draw CDF
                                viz.drawFunction(function(x) {
                                    return VizEngine.normalCDF(x, mu, sigma);
                                }, xMin, xMax, viz.colors.blue, 2.5);

                                // Draw PDF (scaled for visibility)
                                viz.drawFunction(function(x) {
                                    return VizEngine.normalPDF(x, mu, sigma) * 3;
                                }, xMin, xMax, viz.colors.purple, 1.5);

                                viz.screenText('Normal(' + mu.toFixed(1) + ', ' + sigma.toFixed(2) + ') — Blue: CDF, Purple: PDF (scaled)', viz.width / 2, 20, viz.colors.white, 13);
                            } else if (mode === 'exponential') {
                                var lam = Math.max(0.1, param1);
                                xMin = -0.5;
                                xMax = 6 / lam;

                                // Shade PDF
                                viz.shadeUnder(function(x) { return VizEngine.exponentialPDF(x, lam) * 2; }, 0, xMax, viz.colors.orange + '33');

                                // Draw CDF
                                viz.drawFunction(function(x) {
                                    return x < 0 ? 0 : 1 - Math.exp(-lam * x);
                                }, xMin, xMax, viz.colors.blue, 2.5);

                                // Draw PDF (scaled)
                                viz.drawFunction(function(x) {
                                    return VizEngine.exponentialPDF(x, lam) * 2;
                                }, xMin, xMax, viz.colors.orange, 1.5);

                                viz.screenText('Exp(' + lam.toFixed(1) + ') — Blue: CDF, Orange: PDF (scaled)', viz.width / 2, 20, viz.colors.white, 13);
                            }

                            // Reference lines
                            viz.drawSegment(xMin, 1, xMax, 1, viz.colors.text + '44', 1, true);
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\\\(X \\\\sim \\\\text{Uniform}(0, 1)\\\\)。求 \\\\(Y = -\\\\frac{1}{\\\\lambda} \\\\ln(1 - X)\\\\) 的分布（\\\\(\\\\lambda > 0\\\\)）。',
                    hint: '计算 \\\\(P(Y \\\\leq y) = P\\\\left(-\\\\frac{1}{\\\\lambda} \\\\ln(1-X) \\\\leq y\\\\right)\\\\)，利用 \\\\(X\\\\) 的均匀分布。',
                    solution: '当 \\\\(y > 0\\\\) 时，\\\\(P(Y \\\\leq y) = P(X \\\\leq 1 - e^{-\\\\lambda y}) = 1 - e^{-\\\\lambda y}\\\\)，即 \\\\(Y \\\\sim \\\\text{Exp}(\\\\lambda)\\\\)。这是逆变换方法（inverse transform sampling）的核心原理。'
                },
                {
                    question: '证明：若 \\\\(F\\\\) 为 CDF，则 \\\\(P(a < X \\\\leq b) = F(b) - F(a)\\\\)。',
                    hint: '将 \\\\(\\\\{X \\\\leq b\\\\}\\\\) 分解为 \\\\(\\\\{X \\\\leq a\\\\} \\\\cup \\\\{a < X \\\\leq b\\\\}\\\\)。',
                    solution: '因为 \\\\(\\\\{X \\\\leq b\\\\} = \\\\{X \\\\leq a\\\\} \\\\cup \\\\{a < X \\\\leq b\\\\}\\\\) 是不交并，故 \\\\(F(b) = P(X \\\\leq b) = P(X \\\\leq a) + P(a < X \\\\leq b) = F(a) + P(a < X \\\\leq b)\\\\)。'
                },
                {
                    question: '设 \\\\(X\\\\) 为离散随机变量，取值 \\\\(\\\\{-1, 0, 2\\\\}\\\\)，概率分别为 \\\\(0.3, 0.5, 0.2\\\\)。写出其 CDF 并画出草图。',
                    hint: 'CDF 在跳跃点处右连续，跳跃高度等于该点的概率。',
                    solution: '\\\\(F(x) = 0\\\\) if \\\\(x < -1\\\\); \\\\(F(x) = 0.3\\\\) if \\\\(-1 \\\\leq x < 0\\\\); \\\\(F(x) = 0.8\\\\) if \\\\(0 \\\\leq x < 2\\\\); \\\\(F(x) = 1\\\\) if \\\\(x \\\\geq 2\\\\)。这是一个有三个跳跃的阶梯函数。'
                }
            ]
        },

        // ===== Section 4: 期望、方差与矩 =====
        {
            id: 'ch00-sec04',
            title: '期望、方差与矩',
            content: `
                <h2>期望、方差与矩</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>期望值可以理解为"质量中心"：如果在数轴上的每个点 \\\\(x\\\\) 放置质量 \\\\(P(X = x)\\\\)（离散）或质量密度 \\\\(f(x)\\\\)（连续），则 \\\\(\\\\mathbb{E}[X]\\\\) 就是使这根"杠杆"恰好平衡的支点位置。方差 \\\\(\\\\operatorname{Var}(X)\\\\) 则度量质量相对于重心的分散程度——物理中的转动惯量。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.15 (期望)</div>
                    <div class="env-body">
                        <p>设 \\\\(X\\\\) 为定义在概率空间 \\\\((\\\\Omega, \\\\mathcal{F}, P)\\\\) 上的随机变量。</p>
                        <p><strong>离散型：</strong>若 \\\\(\\\\sum_k |x_k| \\\\, p_X(x_k) < \\\\infty\\\\)，定义 \\\\(\\\\mathbb{E}[X] = \\\\sum_k x_k \\\\, p_X(x_k)\\\\)。</p>
                        <p><strong>连续型：</strong>若 \\\\(\\\\int_{-\\\\infty}^{\\\\infty} |x| \\\\, f_X(x) \\\\, dx < \\\\infty\\\\)，定义 \\\\(\\\\mathbb{E}[X] = \\\\int_{-\\\\infty}^{\\\\infty} x \\\\, f_X(x) \\\\, dx\\\\)。</p>
                        <p>一般地（Lebesgue 积分）：\\\\(\\\\mathbb{E}[X] = \\\\int_{\\\\Omega} X \\\\, dP\\\\)，若此积分存在。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 0.16 (LOTUS — 无意识统计学家定律)</div>
                    <div class="env-body">
                        <p>设 \\\\(g: \\\\mathbb{R} \\\\to \\\\mathbb{R}\\\\) 为 Borel 可测函数，\\\\(X\\\\) 为随机变量。则：</p>
                        <p><strong>离散型：</strong>\\\\(\\\\mathbb{E}[g(X)] = \\\\sum_k g(x_k) \\\\, p_X(x_k)\\\\)。</p>
                        <p><strong>连续型：</strong>\\\\(\\\\mathbb{E}[g(X)] = \\\\int_{-\\\\infty}^{\\\\infty} g(x) \\\\, f_X(x) \\\\, dx\\\\)。</p>
                        <p>即：计算 \\\\(g(X)\\\\) 的期望无需先求 \\\\(g(X)\\\\) 的分布。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.17 (方差与标准差)</div>
                    <div class="env-body">
                        <p>若 \\\\(\\\\mathbb{E}[X^2] < \\\\infty\\\\)，定义：</p>
                        \\\\[\\\\operatorname{Var}(X) = \\\\mathbb{E}[(X - \\\\mathbb{E}[X])^2] = \\\\mathbb{E}[X^2] - (\\\\mathbb{E}[X])^2.\\\\]
                        <p><strong>标准差</strong>（standard deviation）为 \\\\(\\\\operatorname{SD}(X) = \\\\sqrt{\\\\operatorname{Var}(X)}\\\\)。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 0.18 (期望与方差的性质)</div>
                    <div class="env-body">
                        <p>设 \\\\(X, Y\\\\) 的期望存在，\\\\(a, b \\\\in \\\\mathbb{R}\\\\)，则：</p>
                        <ol>
                            <li><strong>线性性</strong>：\\\\(\\\\mathbb{E}[aX + bY] = a\\\\mathbb{E}[X] + b\\\\mathbb{E}[Y]\\\\)（无需独立性）；</li>
                            <li>\\\\(\\\\operatorname{Var}(aX + b) = a^2 \\\\operatorname{Var}(X)\\\\)；</li>
                            <li>若 \\\\(X, Y\\\\) 独立，则 \\\\(\\\\mathbb{E}[XY] = \\\\mathbb{E}[X] \\\\cdot \\\\mathbb{E}[Y]\\\\)；</li>
                            <li>若 \\\\(X, Y\\\\) 独立，则 \\\\(\\\\operatorname{Var}(X + Y) = \\\\operatorname{Var}(X) + \\\\operatorname{Var}(Y)\\\\)。</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.19 (矩与中心矩)</div>
                    <div class="env-body">
                        <p>随机变量 \\\\(X\\\\) 的 \\\\(k\\\\) 阶<strong>矩</strong>（moment）为 \\\\(\\\\mu_k' = \\\\mathbb{E}[X^k]\\\\)（若存在）。</p>
                        <p>\\\\(k\\\\) 阶<strong>中心矩</strong>（central moment）为 \\\\(\\\\mu_k = \\\\mathbb{E}[(X - \\\\mathbb{E}[X])^k]\\\\)。</p>
                        <p>特别地：\\\\(\\\\mu_1' = \\\\mathbb{E}[X]\\\\)（均值），\\\\(\\\\mu_2 = \\\\operatorname{Var}(X)\\\\)。<strong>偏度</strong>（skewness）和<strong>峰度</strong>（kurtosis）分别为 \\\\(\\\\gamma_1 = \\\\mu_3 / \\\\mu_2^{3/2}\\\\) 和 \\\\(\\\\kappa = \\\\mu_4 / \\\\mu_2^2 - 3\\\\)（超额峰度）。</p>
                    </div>
                </div>

                <p>下面的可视化将概率分布比作数轴上的质量分布。支点代表 \\\\(\\\\mathbb{E}[X]\\\\)，当杠杆恰好平衡时，支点所在位置就是期望值。你可以拖动概率值并观察"天平"如何倾斜。</p>

                <div class="viz-placeholder" data-viz="balance-point-viz"></div>
            `,
            visualizations: [
                {
                    id: 'balance-point-viz',
                    title: 'Interactive: 期望的"平衡点"',
                    description: '拖动概率权重，观察期望值（支点）如何变化',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380, scale: 50,
                            originX: 80, originY: 280
                        });

                        // A discrete distribution on {1, 2, 3, 4, 5}
                        var probs = [0.1, 0.2, 0.4, 0.2, 0.1];
                        var values = [1, 2, 3, 4, 5];
                        var sliders = [];

                        function normalize() {
                            var total = probs.reduce(function(s, v) { return s + v; }, 0);
                            if (total > 0) {
                                for (var i = 0; i < probs.length; i++) {
                                    probs[i] = probs[i] / total;
                                }
                            }
                        }

                        for (var i = 0; i < values.length; i++) {
                            (function(idx) {
                                sliders.push(VizEngine.createSlider(controls, 'w(' + values[idx] + ')', 0, 1, probs[idx], 0.01, function(v) {
                                    probs[idx] = v;
                                    normalize();
                                    draw();
                                }));
                            })(i);
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Draw number line
                            var y0 = 3.5;
                            viz.drawSegment(0, y0, 6, y0, viz.colors.axis, 2);

                            // Tick marks and bars
                            for (var i = 0; i < values.length; i++) {
                                var x = values[i];
                                var p = probs[i];
                                var barHeight = p * 8; // scale for visibility

                                // Bar
                                var sc1 = viz.toScreen(x - 0.15, y0 + barHeight);
                                var sc2 = viz.toScreen(x + 0.15, y0);
                                ctx.fillStyle = viz.colors.blue + '99';
                                ctx.fillRect(sc1[0], sc1[1], sc2[0] - sc1[0], sc2[1] - sc1[1]);
                                ctx.strokeStyle = viz.colors.blue;
                                ctx.lineWidth = 1.5;
                                ctx.strokeRect(sc1[0], sc1[1], sc2[0] - sc1[0], sc2[1] - sc1[1]);

                                // Label value
                                viz.drawText(x.toString(), x, y0 - 0.5, viz.colors.white, 14);
                                // Label probability
                                viz.drawText(p.toFixed(2), x, y0 + barHeight + 0.4, viz.colors.teal, 12);
                            }

                            // Compute expectation and variance
                            var mu = 0;
                            for (var i = 0; i < values.length; i++) {
                                mu += values[i] * probs[i];
                            }
                            var variance = 0;
                            for (var i = 0; i < values.length; i++) {
                                variance += probs[i] * Math.pow(values[i] - mu, 2);
                            }

                            // Draw balance point (triangle)
                            var triSc = viz.toScreen(mu, y0);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.beginPath();
                            ctx.moveTo(triSc[0], triSc[1]);
                            ctx.lineTo(triSc[0] - 10, triSc[1] + 20);
                            ctx.lineTo(triSc[0] + 10, triSc[1] + 20);
                            ctx.closePath();
                            ctx.fill();

                            // E[X] label
                            viz.screenText('E[X] = ' + mu.toFixed(3), triSc[0], triSc[1] + 35, viz.colors.orange, 14, 'center');

                            // Variance indicator: horizontal bar from mu-sd to mu+sd
                            var sd = Math.sqrt(variance);
                            viz.drawSegment(mu - sd, y0 - 0.7, mu + sd, y0 - 0.7, viz.colors.purple, 2);
                            viz.drawSegment(mu - sd, y0 - 0.5, mu - sd, y0 - 0.9, viz.colors.purple, 2);
                            viz.drawSegment(mu + sd, y0 - 0.5, mu + sd, y0 - 0.9, viz.colors.purple, 2);

                            viz.screenText('SD = ' + sd.toFixed(3) + ', Var = ' + variance.toFixed(3), viz.width / 2, 20, viz.colors.purple, 13);
                            viz.screenText('Drag sliders to adjust weights; they auto-normalize to sum 1', viz.width / 2, viz.height - 15, viz.colors.text, 11);
                        }

                        normalize();
                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\\\(X \\\\sim \\\\text{Exp}(\\\\lambda)\\\\)。利用 LOTUS 计算 \\\\(\\\\mathbb{E}[X]\\\\) 和 \\\\(\\\\operatorname{Var}(X)\\\\)。',
                    hint: '利用分部积分：\\\\(\\\\mathbb{E}[X] = \\\\int_0^{\\\\infty} x \\\\lambda e^{-\\\\lambda x} dx\\\\)。对方差先计算 \\\\(\\\\mathbb{E}[X^2]\\\\)。',
                    solution: '\\\\(\\\\mathbb{E}[X] = \\\\int_0^{\\\\infty} x \\\\lambda e^{-\\\\lambda x} dx = 1/\\\\lambda\\\\)（分部积分）。\\\\(\\\\mathbb{E}[X^2] = \\\\int_0^{\\\\infty} x^2 \\\\lambda e^{-\\\\lambda x} dx = 2/\\\\lambda^2\\\\)（两次分部积分）。故 \\\\(\\\\operatorname{Var}(X) = 2/\\\\lambda^2 - 1/\\\\lambda^2 = 1/\\\\lambda^2\\\\)。'
                },
                {
                    question: '证明方差的平移公式：\\\\(\\\\operatorname{Var}(X) = \\\\mathbb{E}[X^2] - (\\\\mathbb{E}[X])^2\\\\)。',
                    hint: '展开 \\\\(\\\\mathbb{E}[(X - \\\\mu)^2]\\\\) 其中 \\\\(\\\\mu = \\\\mathbb{E}[X]\\\\)。',
                    solution: '\\\\(\\\\operatorname{Var}(X) = \\\\mathbb{E}[(X - \\\\mu)^2] = \\\\mathbb{E}[X^2 - 2\\\\mu X + \\\\mu^2] = \\\\mathbb{E}[X^2] - 2\\\\mu \\\\mathbb{E}[X] + \\\\mu^2 = \\\\mathbb{E}[X^2] - 2\\\\mu^2 + \\\\mu^2 = \\\\mathbb{E}[X^2] - \\\\mu^2\\\\)。'
                },
                {
                    question: '设 \\\\(X_1, \\\\ldots, X_n\\\\) 独立同分布，均值 \\\\(\\\\mu\\\\)，方差 \\\\(\\\\sigma^2\\\\)。令 \\\\(\\\\bar{X} = \\\\frac{1}{n}\\\\sum_{i=1}^n X_i\\\\)。求 \\\\(\\\\mathbb{E}[\\\\bar{X}]\\\\) 和 \\\\(\\\\operatorname{Var}(\\\\bar{X})\\\\)。',
                    hint: '利用期望的线性性和独立随机变量方差的可加性。',
                    solution: '\\\\(\\\\mathbb{E}[\\\\bar{X}] = \\\\frac{1}{n}\\\\sum \\\\mathbb{E}[X_i] = \\\\mu\\\\)。\\\\(\\\\operatorname{Var}(\\\\bar{X}) = \\\\frac{1}{n^2}\\\\sum \\\\operatorname{Var}(X_i) = \\\\frac{\\\\sigma^2}{n}\\\\)。这是为什么样本均值的波动随样本量增大而减小的数学原因。'
                }
            ]
        },

        // ===== Section 5: 矩母函数与特征函数 =====
        {
            id: 'ch00-sec05',
            title: '矩母函数与特征函数',
            content: `
                <h2>矩母函数与特征函数</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>矩母函数（MGF）和特征函数（CF）都是将随机变量的全部信息"编码"为一个函数的工具——类似于 Fourier 变换对信号的编码。MGF 的优势在于它通过简单的求导就能"提取"各阶矩；而特征函数的优势在于它总是存在的（不像 MGF），且唯一确定分布。这两个工具在证明中心极限定理等核心结果时不可或缺。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.20 (矩母函数)</div>
                    <div class="env-body">
                        <p>随机变量 \\\\(X\\\\) 的<strong>矩母函数</strong>（moment generating function, MGF）为：</p>
                        \\\\[M_X(t) = \\\\mathbb{E}[e^{tX}], \\\\quad t \\\\in \\\\mathbb{R},\\\\]
                        <p>前提是该期望在包含 0 的某个开区间 \\\\((-h, h)\\\\) 上有限。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 0.21 (MGF 与矩的关系)</div>
                    <div class="env-body">
                        <p>若 \\\\(M_X(t)\\\\) 在 \\\\((-h, h)\\\\) 上存在，则 \\\\(X\\\\) 的所有阶矩存在，且：</p>
                        \\\\[\\\\mathbb{E}[X^k] = M_X^{(k)}(0) = \\\\left.\\\\frac{d^k}{dt^k} M_X(t) \\\\right|_{t=0}.\\\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>形式上，将 \\\\(e^{tX}\\\\) Taylor 展开：</p>
                        \\\\[M_X(t) = \\\\mathbb{E}[e^{tX}] = \\\\mathbb{E}\\\\left[\\\\sum_{k=0}^{\\\\infty} \\\\frac{(tX)^k}{k!}\\\\right] = \\\\sum_{k=0}^{\\\\infty} \\\\frac{\\\\mathbb{E}[X^k]}{k!} t^k,\\\\]
                        <p>其中逐项求期望的交换由 \\\\(M_X(t)\\\\) 在 \\\\((-h,h)\\\\) 上有限来保证（控制收敛定理）。对 \\\\(M_X(t)\\\\) 关于 \\\\(t\\\\) 求 \\\\(k\\\\) 次导并令 \\\\(t=0\\\\) 即得 \\\\(\\\\mathbb{E}[X^k]\\\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 0.22 (MGF 唯一性定理)</div>
                    <div class="env-body">
                        <p>若两个随机变量 \\\\(X, Y\\\\) 的 MGF 在包含 0 的某个开区间上存在且相等，即 \\\\(M_X(t) = M_Y(t)\\\\) 对某个 \\\\(|t| < h\\\\) 成立，则 \\\\(X\\\\) 和 \\\\(Y\\\\) 有相同的分布。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 0.23</div>
                    <div class="env-body">
                        <p><strong>正态分布 \\\\(X \\\\sim N(\\\\mu, \\\\sigma^2)\\\\) 的 MGF：</strong></p>
                        \\\\[M_X(t) = \\\\mathbb{E}[e^{tX}] = e^{\\\\mu t + \\\\sigma^2 t^2 / 2}.\\\\]
                        <p>验证：\\\\(M_X'(t) = (\\\\mu + \\\\sigma^2 t) e^{\\\\mu t + \\\\sigma^2 t^2/2}\\\\)，故 \\\\(M_X'(0) = \\\\mu = \\\\mathbb{E}[X]\\\\)。</p>
                        <p>\\\\(M_X''(t) = (\\\\sigma^2 + (\\\\mu + \\\\sigma^2 t)^2) e^{\\\\mu t + \\\\sigma^2 t^2/2}\\\\)，故 \\\\(M_X''(0) = \\\\sigma^2 + \\\\mu^2 = \\\\mathbb{E}[X^2]\\\\)。</p>
                        <p>因此 \\\\(\\\\operatorname{Var}(X) = \\\\mathbb{E}[X^2] - (\\\\mathbb{E}[X])^2 = \\\\sigma^2\\\\)。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 0.24 (特征函数)</div>
                    <div class="env-body">
                        <p>随机变量 \\\\(X\\\\) 的<strong>特征函数</strong>（characteristic function）为：</p>
                        \\\\[\\\\varphi_X(t) = \\\\mathbb{E}[e^{itX}], \\\\quad t \\\\in \\\\mathbb{R}.\\\\]
                        <p>特征函数<strong>总是存在且有界</strong>（\\\\(|\\\\varphi_X(t)| \\\\leq 1\\\\)），因为 \\\\(|e^{itX}| = 1\\\\)。它是 \\\\(X\\\\) 分布的 Fourier 变换（取共轭约定），唯一确定 \\\\(X\\\\) 的分布。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>MGF 与特征函数的关系：若 MGF 存在，则 \\\\(\\\\varphi_X(t) = M_X(it)\\\\)。特征函数的最大优势在于：</p>
                        <ol>
                            <li>对任何随机变量都存在（MGF 可能不存在，如 Cauchy 分布）；</li>
                            <li>独立随机变量之和的特征函数 = 各特征函数之积：\\\\(\\\\varphi_{X+Y}(t) = \\\\varphi_X(t) \\\\cdot \\\\varphi_Y(t)\\\\)；</li>
                            <li>Levy 连续性定理将特征函数的逐点收敛与分布的弱收敛联系起来——这是证明 CLT 的关键。</li>
                        </ol>
                    </div>
                </div>

                <p>下面的可视化演示了 MGF 求导提取矩的过程。你可以选择不同的分布，观察 \\\\(M_X(t)\\\\) 曲线以及在 \\\\(t=0\\\\) 处的切线斜率（即 \\\\(\\\\mathbb{E}[X]\\\\)）和曲率（与 \\\\(\\\\mathbb{E}[X^2]\\\\) 相关）。</p>

                <div class="viz-placeholder" data-viz="mgf-derivative-viz"></div>
            `,
            visualizations: [
                {
                    id: 'mgf-derivative-viz',
                    title: 'Interactive: MGF 与矩提取',
                    description: '选择不同分布，观察 MGF 曲线及其在 t=0 处的导数如何给出各阶矩',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400, scale: 40,
                            originX: 280, originY: 300
                        });

                        var dist = 'normal';
                        var mu = 1;
                        var sigma = 1;
                        var showTangent = true;

                        VizEngine.createButton(controls, 'Normal(mu,sigma)', function() {
                            dist = 'normal'; draw();
                        });
                        VizEngine.createButton(controls, 'Exponential(lambda)', function() {
                            dist = 'exponential'; draw();
                        });
                        VizEngine.createButton(controls, 'Poisson(lambda)', function() {
                            dist = 'poisson'; draw();
                        });

                        VizEngine.createSlider(controls, 'mu / lambda', 0.1, 5, mu, 0.1, function(v) {
                            mu = v; draw();
                        });
                        VizEngine.createSlider(controls, 'sigma (Normal only)', 0.1, 3, sigma, 0.1, function(v) {
                            sigma = v; draw();
                        });

                        function mgf(t) {
                            if (dist === 'normal') {
                                return Math.exp(mu * t + 0.5 * sigma * sigma * t * t);
                            } else if (dist === 'exponential') {
                                // MGF of Exp(lambda) = lambda / (lambda - t) for t < lambda
                                if (t >= mu) return NaN;
                                return mu / (mu - t);
                            } else if (dist === 'poisson') {
                                return Math.exp(mu * (Math.exp(t) - 1));
                            }
                            return 0;
                        }

                        function mgfPrime(t) {
                            // Numerical derivative
                            var dt = 0.0001;
                            return (mgf(t + dt) - mgf(t - dt)) / (2 * dt);
                        }

                        function mgfDoublePrime(t) {
                            var dt = 0.0001;
                            return (mgf(t + dt) - 2 * mgf(t) + mgf(t - dt)) / (dt * dt);
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var ctx = viz.ctx;

                            // Determine x range for t
                            var tMin = -3;
                            var tMax = 3;
                            if (dist === 'exponential') {
                                tMax = Math.min(mu - 0.1, 3);
                            }

                            // Draw MGF curve
                            viz.drawFunction(mgf, tMin, tMax, viz.colors.blue, 2.5, 300);

                            // Tangent line at t=0
                            var m0 = mgf(0); // should be 1
                            var slope = mgfPrime(0); // E[X]
                            var curve = mgfDoublePrime(0); // E[X^2]

                            if (showTangent && isFinite(slope)) {
                                // Tangent line: y = m0 + slope * t
                                viz.drawFunction(function(t) { return m0 + slope * t; }, tMin, tMax, viz.colors.orange, 1.5, 100);

                                // Mark the tangent point
                                viz.drawPoint(0, 1, viz.colors.orange, null, 6);
                            }

                            // Display moments
                            var ex = slope;
                            var ex2 = isFinite(curve) ? curve : NaN;
                            var varX = isFinite(ex2) ? ex2 - ex * ex : NaN;

                            viz.screenText('M(t) = E[e^tX]', viz.width / 2, 18, viz.colors.blue, 14);

                            var distLabel = '';
                            if (dist === 'normal') distLabel = 'N(' + mu.toFixed(1) + ', ' + sigma.toFixed(1) + '²)';
                            else if (dist === 'exponential') distLabel = 'Exp(' + mu.toFixed(1) + ')';
                            else if (dist === 'poisson') distLabel = 'Poi(' + mu.toFixed(1) + ')';

                            viz.screenText('Distribution: ' + distLabel, viz.width / 2, 38, viz.colors.teal, 13);

                            var line1 = "M'(0) = E[X] = " + (isFinite(ex) ? ex.toFixed(4) : 'N/A');
                            var line2 = "M''(0) = E[X²] = " + (isFinite(ex2) ? ex2.toFixed(4) : 'N/A');
                            var line3 = 'Var(X) = ' + (isFinite(varX) ? varX.toFixed(4) : 'N/A');

                            viz.screenText(line1, viz.width - 15, 60, viz.colors.orange, 13, 'right');
                            viz.screenText(line2, viz.width - 15, 78, viz.colors.purple, 13, 'right');
                            viz.screenText(line3, viz.width - 15, 96, viz.colors.green, 13, 'right');

                            // Legend
                            viz.screenText('Blue: M(t)    Orange: tangent at t=0 (slope = E[X])', viz.width / 2, viz.height - 12, viz.colors.text, 11);
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '计算 Poisson(\\\\(\\\\lambda\\\\)) 随机变量的 MGF \\\\(M_X(t)\\\\)，并由此导出 \\\\(\\\\mathbb{E}[X]\\\\) 和 \\\\(\\\\operatorname{Var}(X)\\\\)。',
                    hint: '\\\\(M_X(t) = \\\\mathbb{E}[e^{tX}] = \\\\sum_{k=0}^{\\\\infty} e^{tk} \\\\frac{\\\\lambda^k e^{-\\\\lambda}}{k!}\\\\)。将 \\\\(e^{tk} \\\\lambda^k\\\\) 合并为 \\\\((\\\\lambda e^t)^k\\\\)。',
                    solution: '\\\\(M_X(t) = e^{-\\\\lambda} \\\\sum_{k=0}^{\\\\infty} \\\\frac{(\\\\lambda e^t)^k}{k!} = e^{-\\\\lambda} e^{\\\\lambda e^t} = e^{\\\\lambda(e^t - 1)}\\\\)。\\\\(M_X\'(t) = \\\\lambda e^t \\\\cdot e^{\\\\lambda(e^t-1)}\\\\)，故 \\\\(M_X\'(0) = \\\\lambda = \\\\mathbb{E}[X]\\\\)。\\\\(M_X\'\'(t) = (\\\\lambda e^t + \\\\lambda^2 e^{2t}) e^{\\\\lambda(e^t-1)}\\\\)，故 \\\\(M_X\'\'(0) = \\\\lambda + \\\\lambda^2 = \\\\mathbb{E}[X^2]\\\\)。因此 \\\\(\\\\operatorname{Var}(X) = \\\\lambda + \\\\lambda^2 - \\\\lambda^2 = \\\\lambda\\\\)。'
                },
                {
                    question: '解释为什么 Cauchy 分布没有 MGF，但有特征函数。',
                    hint: 'Cauchy 分布的尾部衰减如 \\\\(1/x^2\\\\)，考虑 \\\\(\\\\mathbb{E}[e^{tX}]\\\\) 在 \\\\(t \\\\neq 0\\\\) 时的可积性。',
                    solution: 'Cauchy 分布的 PDF 为 \\\\(f(x) = \\\\frac{1}{\\\\pi(1+x^2)}\\\\)。当 \\\\(t \\\\neq 0\\\\) 时，\\\\(\\\\int |e^{tx}| f(x) dx = \\\\int \\\\frac{e^{tx}}{\\\\pi(1+x^2)} dx\\\\) 在 \\\\(x \\\\to +\\\\infty\\\\)（若 \\\\(t > 0\\\\)）时被积函数为 \\\\(\\\\sim e^{tx}/x^2 \\\\to \\\\infty\\\\)，故 MGF 不存在。而特征函数 \\\\(\\\\varphi(t) = \\\\mathbb{E}[e^{itX}]\\\\) 中 \\\\(|e^{itX}| = 1\\\\)，故积分总有限。事实上 \\\\(\\\\varphi_X(t) = e^{-|t|}\\\\)。'
                },
                {
                    question: '设 \\\\(X, Y\\\\) 独立，\\\\(X \\\\sim N(\\\\mu_1, \\\\sigma_1^2)\\\\)，\\\\(Y \\\\sim N(\\\\mu_2, \\\\sigma_2^2)\\\\)。利用 MGF 证明 \\\\(X + Y \\\\sim N(\\\\mu_1 + \\\\mu_2, \\\\sigma_1^2 + \\\\sigma_2^2)\\\\)。',
                    hint: '独立随机变量之和的 MGF 等于各 MGF 之积。利用正态 MGF 的形式和唯一性定理。',
                    solution: '\\\\(M_{X+Y}(t) = M_X(t) \\\\cdot M_Y(t) = e^{\\\\mu_1 t + \\\\sigma_1^2 t^2/2} \\\\cdot e^{\\\\mu_2 t + \\\\sigma_2^2 t^2/2} = e^{(\\\\mu_1+\\\\mu_2)t + (\\\\sigma_1^2+\\\\sigma_2^2)t^2/2}\\\\)，此即 \\\\(N(\\\\mu_1+\\\\mu_2, \\\\sigma_1^2+\\\\sigma_2^2)\\\\) 的 MGF。由唯一性定理得 \\\\(X+Y \\\\sim N(\\\\mu_1+\\\\mu_2, \\\\sigma_1^2+\\\\sigma_2^2)\\\\)。'
                }
            ]
        }
    ]
});

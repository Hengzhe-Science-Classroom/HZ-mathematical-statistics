window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch03',
    number: 3,
    title: '大数定律与中心极限定理',
    subtitle: 'Laws of Large Numbers & the Central Limit Theorem',
    sections: [
        // ================================================================
        // Section 1: 收敛性概念
        // ================================================================
        {
            id: 'ch03-sec01',
            title: '收敛性概念',
            content: `
                <h2>收敛性概念 Modes of Convergence</h2>

                <p>在研究大样本行为之前，我们必须严格定义随机变量序列 \\(\{X_n\}\) 的各种收敛方式。这些概念构成了渐近理论的基石，对理解大数定律和中心极限定理至关重要。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 3.1 (依概率收敛 / Convergence in Probability)</div>
                    <div class="env-body">
                        <p>称随机变量序列 \\(\{X_n\}\) <strong>依概率收敛</strong>于 \\(X\)，记为 \\(X_n \\xrightarrow{P} X\)，若对任意 \\(\\varepsilon > 0\)，</p>
                        \\[\\lim_{n \\to \\infty} P(|X_n - X| > \\varepsilon) = 0.\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>依概率收敛的直觉：随着 \\(n\) 增大，\\(X_n\) 的分布越来越集中在 \\(X\) 附近。对任意给定的 "管道宽度" \\(\\varepsilon\)，\\(X_n\) 跑到管道外面的概率趋于零。但注意，它<em>不保证</em>每条样本路径都最终留在管道内——偶尔的 "逃逸" 是被允许的，只要逃逸频率趋于零。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 3.2 (几乎必然收敛 / Almost Sure Convergence)</div>
                    <div class="env-body">
                        <p>称 \\(\{X_n\}\) <strong>几乎必然收敛</strong>（a.s. 收敛）于 \\(X\)，记为 \\(X_n \\xrightarrow{a.s.} X\)，若</p>
                        \\[P\\!\\left(\\lim_{n \\to \\infty} X_n = X\\right) = 1.\\]
                        <p>等价地，对任意 \\(\\varepsilon > 0\)，</p>
                        \\[P\\!\\left(\\bigcap_{m=1}^{\\infty} \\bigcup_{n=m}^{\\infty} \\{|X_n - X| > \\varepsilon\}\\right) = 0.\\]
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>几乎必然收敛要求：以概率 1，样本路径最终永远停留在 \\(\\varepsilon\)-管道内。这比依概率收敛严格得多——不仅逃逸概率趋于零，而且几乎每条路径只有有限次逃逸。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 3.3 (依分布收敛 / Convergence in Distribution)</div>
                    <div class="env-body">
                        <p>称 \\(\{X_n\}\) <strong>依分布收敛</strong>于 \\(X\)，记为 \\(X_n \\xrightarrow{d} X\)，若对 \\(F_X\) 的每个连续点 \\(x\)，</p>
                        \\[\\lim_{n \\to \\infty} F_{X_n}(x) = F_X(x).\\]
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 3.4 (\\(L^p\) 收敛 / Convergence in \\(L^p\))</div>
                    <div class="env-body">
                        <p>对 \\(p \\geq 1\)，称 \\(\{X_n\}\) <strong>在 \\(L^p\) 中收敛</strong>于 \\(X\)，记为 \\(X_n \\xrightarrow{L^p} X\)，若</p>
                        \\[\\lim_{n \\to \\infty} \\mathbb{E}[|X_n - X|^p] = 0.\\]
                        <p>当 \\(p = 2\) 时，又称为<strong>均方收敛</strong>（mean-square convergence）。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.5 (收敛方式的层次关系)</div>
                    <div class="env-body">
                        <p>设 \\(\{X_n\}\) 为随机变量序列，\\(p \\geq 1\)。下列蕴含关系成立：</p>
                        \\[X_n \\xrightarrow{a.s.} X \\implies X_n \\xrightarrow{P} X \\implies X_n \\xrightarrow{d} X,\\]
                        \\[X_n \\xrightarrow{L^p} X \\implies X_n \\xrightarrow{P} X.\\]
                        <p>反之均不成立。此外，若 \\(X_n \\xrightarrow{d} c\)（常数），则 \\(X_n \\xrightarrow{P} c\)。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (\\(L^p \\Rightarrow P\)，Markov 不等式)</div>
                    <div class="env-body">
                        <p>由 Markov 不等式，对 \\(\\varepsilon > 0\)，</p>
                        \\[P(|X_n - X| > \\varepsilon) = P(|X_n - X|^p > \\varepsilon^p) \\leq \\frac{\\mathbb{E}[|X_n - X|^p]}{\\varepsilon^p} \\to 0.\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning: 反例很重要</div>
                    <div class="env-body">
                        <p><strong>依概率收敛 \\(\\not\\Rightarrow\\) 几乎必然收敛</strong>：经典反例是 "typewriter sequence"。在 \\([0,1]\) 上取均匀概率空间，定义 \\(X_n = \\mathbf{1}_{[a_n, b_n]}\)，其中区间在 \\([0,1]\) 上循环移动且长度趋于零。则 \\(X_n \\xrightarrow{P} 0\)，但对每个 \\(\\omega \\in [0,1]\)，\\(X_n(\\omega) = 1\) 无限次发生。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.6 (Slutsky 引理)</div>
                    <div class="env-body">
                        <p>若 \\(X_n \\xrightarrow{d} X\) 且 \\(Y_n \\xrightarrow{P} c\)（常数），则：</p>
                        \\[X_n + Y_n \\xrightarrow{d} X + c, \\qquad X_n Y_n \\xrightarrow{d} cX, \\qquad \\frac{X_n}{Y_n} \\xrightarrow{d} \\frac{X}{c} \\;(c \\neq 0).\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.7 (连续映射定理 / Continuous Mapping Theorem)</div>
                    <div class="env-body">
                        <p>设 \\(g: \\mathbb{R} \\to \\mathbb{R}\) 在 \\(P(X \\in D_g) = 0\) 处连续（\\(D_g\) 为 \\(g\) 的不连续点集）。则：</p>
                        <p>(a) \\(X_n \\xrightarrow{d} X \\implies g(X_n) \\xrightarrow{d} g(X)\)；</p>
                        <p>(b) \\(X_n \\xrightarrow{P} X \\implies g(X_n) \\xrightarrow{P} g(X)\)；</p>
                        <p>(c) \\(X_n \\xrightarrow{a.s.} X \\implies g(X_n) \\xrightarrow{a.s.} g(X)\)。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="convergence-modes-viz"></div>
            `,
            visualizations: [
                {
                    id: 'convergence-modes-viz',
                    title: 'Interactive: 收敛方式对比',
                    description: 'Compare convergence in probability vs almost sure convergence with simulated paths',
                    setup: function(container, controls) {
                        const viz = new VizEngine(container, {
                            width: 560, height: 400,
                            scale: 30,
                            originX: 60,
                            originY: 300
                        });

                        let mode = 'prob'; // 'prob' or 'as'
                        let numPaths = 8;
                        let nMax = 100;
                        let paths = [];

                        function generatePaths() {
                            paths = [];
                            for (let p = 0; p < numPaths; p++) {
                                const path = [];
                                for (let n = 1; n <= nMax; n++) {
                                    if (mode === 'prob') {
                                        // Convergence in prob but not a.s.: typewriter-style
                                        // X_n = Z / sqrt(n) with occasional spikes
                                        var val = VizEngine.randomNormal(0, 1) / Math.sqrt(n);
                                        // Add infrequent spike
                                        if (Math.random() < 0.5 / Math.sqrt(n)) {
                                            val += 2 * (Math.random() > 0.5 ? 1 : -1);
                                        }
                                        path.push(val);
                                    } else {
                                        // Almost sure convergence: sample mean converges
                                        var sum = 0;
                                        for (let i = 0; i < n; i++) {
                                            sum += VizEngine.randomNormal(0, 1);
                                        }
                                        path.push(sum / n);
                                    }
                                }
                                paths.push(path);
                            }
                        }

                        function draw() {
                            viz.clear();

                            var xScale = (viz.width - 80) / nMax;
                            var yMid = viz.height / 2;
                            var yScale = 60;

                            // Background
                            viz.ctx.fillStyle = viz.colors.green + '15';
                            viz.ctx.fillRect(60, yMid - 30, viz.width - 80, 60);
                            viz.ctx.strokeStyle = viz.colors.green + '55';
                            viz.ctx.lineWidth = 1;
                            viz.ctx.setLineDash([4, 4]);
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(60, yMid - 30);
                            viz.ctx.lineTo(viz.width - 20, yMid - 30);
                            viz.ctx.stroke();
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(60, yMid + 30);
                            viz.ctx.lineTo(viz.width - 20, yMid + 30);
                            viz.ctx.stroke();
                            viz.ctx.setLineDash([]);

                            // Zero line
                            viz.ctx.strokeStyle = viz.colors.text + '66';
                            viz.ctx.lineWidth = 1;
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(60, yMid);
                            viz.ctx.lineTo(viz.width - 20, yMid);
                            viz.ctx.stroke();

                            // Axes
                            viz.ctx.strokeStyle = viz.colors.axis;
                            viz.ctx.lineWidth = 1.5;
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(60, 20);
                            viz.ctx.lineTo(60, viz.height - 20);
                            viz.ctx.stroke();
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(60, viz.height - 20);
                            viz.ctx.lineTo(viz.width - 20, viz.height - 20);
                            viz.ctx.stroke();

                            // Labels
                            viz.screenText('n', viz.width - 15, viz.height - 10, viz.colors.text, 12, 'center', 'middle');
                            viz.screenText('0', 50, yMid + 4, viz.colors.text, 11, 'right', 'middle');

                            var pathColors = [viz.colors.blue, viz.colors.orange, viz.colors.teal, viz.colors.purple, viz.colors.pink, viz.colors.yellow, viz.colors.red, viz.colors.green];

                            for (let p = 0; p < paths.length; p++) {
                                var color = pathColors[p % pathColors.length];
                                viz.ctx.strokeStyle = color + '99';
                                viz.ctx.lineWidth = 1.2;
                                viz.ctx.beginPath();
                                for (let i = 0; i < paths[p].length; i++) {
                                    var px = 60 + (i + 1) * xScale;
                                    var py = yMid - paths[p][i] * yScale;
                                    py = Math.max(20, Math.min(viz.height - 20, py));
                                    if (i === 0) viz.ctx.moveTo(px, py);
                                    else viz.ctx.lineTo(px, py);
                                }
                                viz.ctx.stroke();
                            }

                            // Title
                            var titleText = mode === 'prob' ? 'Convergence in Probability (with occasional escapes)' : 'Almost Sure Convergence (sample mean)';
                            viz.screenText(titleText, viz.width / 2, 15, viz.colors.white, 13, 'center', 'top');
                            viz.screenText('epsilon-band', viz.width - 25, yMid - 35, viz.colors.green, 10, 'right', 'bottom');
                        }

                        generatePaths();
                        draw();

                        VizEngine.createButton(controls, 'Conv. in Prob', function() {
                            mode = 'prob';
                            generatePaths();
                            draw();
                        });
                        VizEngine.createButton(controls, 'A.S. Conv.', function() {
                            mode = 'as';
                            generatePaths();
                            draw();
                        });
                        VizEngine.createButton(controls, 'Resample', function() {
                            generatePaths();
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that almost sure convergence implies convergence in probability.',
                    hint: 'Use the definition via the event \\(A_m = \\bigcup_{n \\geq m} \\{|X_n - X| > \\varepsilon\}\\) and the fact that \\(A_m \\downarrow\\).',
                    solution: 'Fix \\(\\varepsilon > 0\\). Define \\(A_m = \\bigcup_{n=m}^{\\infty} \\{|X_n - X| > \\varepsilon\}\\). Since \\(X_n \\xrightarrow{a.s.} X\\), we have \\(P(\\bigcap_m A_m) = 0\\). Since \\(A_m \\downarrow \\bigcap_m A_m\\), by continuity of probability \\(P(A_m) \\to 0\\). But \\(P(|X_n - X| > \\varepsilon) \\leq P(A_n) \\to 0\\), so \\(X_n \\xrightarrow{P} X\\).'
                },
                {
                    question: 'Let \\(X_n \\xrightarrow{d} X\\) and \\(Y_n \\xrightarrow{P} 0\\). Show that \\(X_n + Y_n \\xrightarrow{d} X\\) (a special case of Slutsky).',
                    hint: 'For any \\(\\varepsilon > 0\\), write \\(P(X_n + Y_n \\leq x) \\leq P(X_n \\leq x + \\varepsilon) + P(|Y_n| > \\varepsilon)\\), and similarly for the lower bound.',
                    solution: 'Fix \\(x\\) a continuity point of \\(F_X\\). For any \\(\\varepsilon > 0\\): \\(F_{X_n+Y_n}(x) \\leq P(X_n \\leq x + \\varepsilon) + P(|Y_n| > \\varepsilon) = F_{X_n}(x+\\varepsilon) + P(|Y_n|>\\varepsilon)\\). Taking \\(\\limsup\\): \\(\\limsup F_{X_n+Y_n}(x) \\leq F_X(x+\\varepsilon)\\). Similarly \\(\\liminf F_{X_n+Y_n}(x) \\geq F_X(x-\\varepsilon)\\). Let \\(\\varepsilon \\to 0\\) through continuity points; by right-continuity of \\(F_X\\), both sides converge to \\(F_X(x)\\).'
                },
                {
                    question: 'Give an example where \\(X_n \\xrightarrow{P} 0\\) but \\(X_n \\not\\xrightarrow{L^1} 0\\).',
                    hint: 'Consider \\(X_n\\) that is 0 with high probability but takes a huge value with small probability.',
                    solution: 'Let \\(X_n = n\\) with probability \\(1/n\\) and \\(X_n = 0\\) with probability \\(1 - 1/n\\). Then \\(P(|X_n| > \\varepsilon) = 1/n \\to 0\\), so \\(X_n \\xrightarrow{P} 0\\). But \\(\\mathbb{E}[|X_n|] = n \\cdot (1/n) = 1 \\not\\to 0\\), so \\(X_n \\not\\xrightarrow{L^1} 0\\).'
                }
            ]
        },

        // ================================================================
        // Section 2: 大数定律
        // ================================================================
        {
            id: 'ch03-sec02',
            title: '大数定律',
            content: `
                <h2>大数定律 Laws of Large Numbers</h2>

                <p>大数定律是概率论与统计学的基石之一。它告诉我们：在适当条件下，样本均值会收敛到总体均值。这是频率学派解释概率的数学基础，也是蒙特卡洛方法的理论保证。</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.8 (弱大数定律 / Weak Law of Large Numbers — Chebyshev)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, X_2, \\ldots\\) 为<strong>两两不相关</strong>的随机变量序列，满足 \\(\\mathbb{E}[X_i] = \\mu\\) 且 \\(\\operatorname{Var}(X_i) \\leq C < \\infty\\) 对所有 \\(i\\)。令 \\(\\bar{X}_n = \\frac{1}{n}\\sum_{i=1}^n X_i\\)。则</p>
                        \\[\\bar{X}_n \\xrightarrow{P} \\mu.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>计算样本均值的方差。由两两不相关性：</p>
                        \\[\\operatorname{Var}(\\bar{X}_n) = \\frac{1}{n^2} \\sum_{i=1}^n \\operatorname{Var}(X_i) \\leq \\frac{nC}{n^2} = \\frac{C}{n}.\\]
                        <p>由 Chebyshev 不等式，对任意 \\(\\varepsilon > 0\)：</p>
                        \\[P(|\\bar{X}_n - \\mu| \\geq \\varepsilon) \\leq \\frac{\\operatorname{Var}(\\bar{X}_n)}{\\varepsilon^2} \\leq \\frac{C}{n\\varepsilon^2} \\to 0.\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Chebyshev 的证明之美在于其简洁和弱假设——只需两两不相关和方差有界，不需要独立性或同分布。但它只给出依概率收敛。Chebyshev 不等式给出的收敛速率为 \\(O(1/n)\)，这虽不是最优的（Hoeffding 不等式可以给出指数衰减），但对很多应用已经足够。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.9 (Khintchine 弱大数定律)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, X_2, \\ldots\\) 为 i.i.d. 随机变量，\\(\\mathbb{E}[X_1] = \\mu\\)（只需一阶矩存在，不需方差有限）。则</p>
                        \\[\\bar{X}_n \\xrightarrow{P} \\mu.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch (via characteristic functions)</div>
                    <div class="env-body">
                        <p>令 \\(\\varphi(t) = \\mathbb{E}[e^{itX_1}]\\) 为 \\(X_1\\) 的特征函数。由 \\(\\mathbb{E}[X_1] = \\mu\\) 存在，\\(\\varphi(t) = 1 + i\\mu t + o(t)\\) 当 \\(t \\to 0\\)。</p>
                        <p>则 \\(\\bar{X}_n\\) 的特征函数为</p>
                        \\[\\varphi_{\\bar{X}_n}(t) = \\left[\\varphi\\!\\left(\\frac{t}{n}\\right)\\right]^n = \\left[1 + \\frac{i\\mu t}{n} + o\\!\\left(\\frac{1}{n}\\right)\\right]^n \\to e^{i\\mu t},\\]
                        <p>即 \\(\\bar{X}_n \\xrightarrow{d} \\mu\\)（退化分布）。由退化极限，\\(\\bar{X}_n \\xrightarrow{P} \\mu\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.10 (强大数定律 / Strong Law of Large Numbers — Kolmogorov)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, X_2, \\ldots\\) 为 i.i.d. 随机变量。则</p>
                        \\[\\bar{X}_n \\xrightarrow{a.s.} \\mu \\quad \\Longleftrightarrow \\quad \\mathbb{E}[|X_1|] < \\infty \\;\;(\\mu = \\mathbb{E}[X_1]).\\]
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Kolmogorov 强大数定律的深刻之处在于它的等价性：一阶矩存在是强大数定律成立的充要条件。证明的核心工具是 Kolmogorov 三级数定理和截断技术。当 \\(\\mathbb{E}[|X_1|] = \\infty\\) 时（如 Cauchy 分布），\\(\\bar{X}_n\\) 几乎必然不收敛到任何常数。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 3.11 (Cauchy 分布 — SLLN 失败)</div>
                    <div class="env-body">
                        <p>设 \\(X_i \\overset{\\text{i.i.d.}}{\\sim} \\text{Cauchy}(0,1)\\)，即 \\(f(x) = \\frac{1}{\\pi(1+x^2)}\\)。由于 \\(\\mathbb{E}[|X_1|] = \\int_{-\\infty}^{\\infty} \\frac{|x|}{\\pi(1+x^2)} dx = \\infty\\)，SLLN 不适用。事实上，\\(\\bar{X}_n\\) 本身也服从 \\(\\text{Cauchy}(0,1)\\)（通过特征函数验证），样本均值的分布完全不收缩。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.12 (Glivenko-Cantelli 定理)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, X_2, \\ldots \\overset{\\text{i.i.d.}}{\\sim} F\\)，定义经验分布函数 \\(\\hat{F}_n(x) = \\frac{1}{n} \\sum_{i=1}^n \\mathbf{1}\\{X_i \\leq x\}\\)。则</p>
                        \\[\\sup_{x \\in \\mathbb{R}} |\\hat{F}_n(x) - F(x)| \\xrightarrow{a.s.} 0.\\]
                        <p>即经验分布函数以概率 1 一致收敛到真实 CDF。此定理有时被称为 "统计学的基本定理"。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="lln-simulator-viz"></div>
            `,
            visualizations: [
                {
                    id: 'lln-simulator-viz',
                    title: 'Interactive: 大数定律模拟器',
                    description: 'Watch the running average converge to the population mean for different distributions',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            scale: 1,
                            originX: 60,
                            originY: 200
                        });

                        var dist = 'normal';
                        var maxN = 500;
                        var samples = [];
                        var runningMeans = [];
                        var trueMean = 0;

                        function getDistParams() {
                            if (dist === 'normal') return { name: 'N(3, 4)', mean: 3 };
                            if (dist === 'exponential') return { name: 'Exp(0.5)', mean: 2 };
                            if (dist === 'uniform') return { name: 'Uniform(0, 6)', mean: 3 };
                            if (dist === 'bernoulli') return { name: 'Bernoulli(0.3)', mean: 0.3 };
                            return { name: 'N(3, 4)', mean: 3 };
                        }

                        function generateSample() {
                            if (dist === 'normal') return VizEngine.randomNormal(3, 2);
                            if (dist === 'exponential') return VizEngine.randomExponential(0.5);
                            if (dist === 'uniform') return Math.random() * 6;
                            if (dist === 'bernoulli') return Math.random() < 0.3 ? 1 : 0;
                            return VizEngine.randomNormal(3, 2);
                        }

                        function generateData() {
                            samples = [];
                            runningMeans = [];
                            var sum = 0;
                            for (var i = 0; i < maxN; i++) {
                                var x = generateSample();
                                samples.push(x);
                                sum += x;
                                runningMeans.push(sum / (i + 1));
                            }
                            trueMean = getDistParams().mean;
                        }

                        function draw() {
                            viz.clear();

                            var params = getDistParams();
                            var padding = { left: 60, right: 20, top: 40, bottom: 40 };
                            var plotW = viz.width - padding.left - padding.right;
                            var plotH = viz.height - padding.top - padding.bottom;

                            // Determine y range
                            var yMin = trueMean - 4;
                            var yMax = trueMean + 4;
                            if (dist === 'bernoulli') { yMin = -0.3; yMax = 1.0; }

                            var xScale = plotW / maxN;
                            var yScale = plotH / (yMax - yMin);

                            function toScreenX(n) { return padding.left + n * xScale; }
                            function toScreenY(v) { return padding.top + (yMax - v) * yScale; }

                            // Epsilon band around true mean
                            var eps = 0.5;
                            viz.ctx.fillStyle = viz.colors.green + '18';
                            var bandTop = toScreenY(trueMean + eps);
                            var bandBot = toScreenY(trueMean - eps);
                            viz.ctx.fillRect(padding.left, bandTop, plotW, bandBot - bandTop);

                            // True mean line
                            viz.ctx.strokeStyle = viz.colors.green;
                            viz.ctx.lineWidth = 2;
                            viz.ctx.setLineDash([6, 4]);
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(padding.left, toScreenY(trueMean));
                            viz.ctx.lineTo(viz.width - padding.right, toScreenY(trueMean));
                            viz.ctx.stroke();
                            viz.ctx.setLineDash([]);

                            // Running mean path
                            viz.ctx.strokeStyle = viz.colors.blue;
                            viz.ctx.lineWidth = 2;
                            viz.ctx.beginPath();
                            for (var i = 0; i < runningMeans.length; i++) {
                                var sx = toScreenX(i + 1);
                                var sy = toScreenY(runningMeans[i]);
                                sy = Math.max(padding.top, Math.min(viz.height - padding.bottom, sy));
                                if (i === 0) viz.ctx.moveTo(sx, sy);
                                else viz.ctx.lineTo(sx, sy);
                            }
                            viz.ctx.stroke();

                            // Chebyshev bounds: mu +/- C / (eps * sqrt(n))
                            viz.ctx.strokeStyle = viz.colors.orange + '88';
                            viz.ctx.lineWidth = 1;
                            viz.ctx.setLineDash([3, 3]);
                            for (var sign = -1; sign <= 1; sign += 2) {
                                viz.ctx.beginPath();
                                for (var i = 1; i <= maxN; i++) {
                                    var bound = trueMean + sign * 4 / Math.sqrt(i);
                                    var sx = toScreenX(i);
                                    var sy = toScreenY(bound);
                                    sy = Math.max(padding.top, Math.min(viz.height - padding.bottom, sy));
                                    if (i === 1) viz.ctx.moveTo(sx, sy);
                                    else viz.ctx.lineTo(sx, sy);
                                }
                                viz.ctx.stroke();
                            }
                            viz.ctx.setLineDash([]);

                            // Axes
                            viz.ctx.strokeStyle = viz.colors.axis;
                            viz.ctx.lineWidth = 1.5;
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(padding.left, padding.top);
                            viz.ctx.lineTo(padding.left, viz.height - padding.bottom);
                            viz.ctx.lineTo(viz.width - padding.right, viz.height - padding.bottom);
                            viz.ctx.stroke();

                            // Labels
                            viz.screenText('n', viz.width - 10, viz.height - padding.bottom + 15, viz.colors.text, 12);
                            viz.screenText(params.name + ', true mean = ' + trueMean.toFixed(2), viz.width / 2, 15, viz.colors.white, 13, 'center', 'top');
                            viz.screenText('X-bar(n)', padding.left - 5, padding.top - 5, viz.colors.blue, 11, 'right', 'bottom');

                            // Tick labels on x axis
                            for (var tick = 100; tick <= maxN; tick += 100) {
                                var tx = toScreenX(tick);
                                viz.screenText(String(tick), tx, viz.height - padding.bottom + 12, viz.colors.text, 10, 'center', 'top');
                            }

                            // Tick labels on y axis
                            var yStep = dist === 'bernoulli' ? 0.2 : 1;
                            for (var yv = Math.ceil(yMin / yStep) * yStep; yv <= yMax; yv += yStep) {
                                var ty = toScreenY(yv);
                                if (ty > padding.top && ty < viz.height - padding.bottom) {
                                    viz.screenText(yv.toFixed(1), padding.left - 5, ty, viz.colors.text, 10, 'right', 'middle');
                                }
                            }

                            // Legend
                            viz.ctx.fillStyle = viz.colors.blue;
                            viz.ctx.fillRect(viz.width - 170, padding.top + 5, 12, 3);
                            viz.screenText('Running mean', viz.width - 153, padding.top + 7, viz.colors.blue, 10, 'left', 'middle');

                            viz.ctx.fillStyle = viz.colors.green;
                            viz.ctx.fillRect(viz.width - 170, padding.top + 20, 12, 3);
                            viz.screenText('True mean', viz.width - 153, padding.top + 22, viz.colors.green, 10, 'left', 'middle');

                            viz.ctx.fillStyle = viz.colors.orange + '88';
                            viz.ctx.fillRect(viz.width - 170, padding.top + 35, 12, 3);
                            viz.screenText('O(1/sqrt(n)) bounds', viz.width - 153, padding.top + 37, viz.colors.orange, 10, 'left', 'middle');
                        }

                        generateData();
                        draw();

                        VizEngine.createButton(controls, 'Normal', function() { dist = 'normal'; generateData(); draw(); });
                        VizEngine.createButton(controls, 'Exponential', function() { dist = 'exponential'; generateData(); draw(); });
                        VizEngine.createButton(controls, 'Uniform', function() { dist = 'uniform'; generateData(); draw(); });
                        VizEngine.createButton(controls, 'Bernoulli', function() { dist = 'bernoulli'; generateData(); draw(); });
                        VizEngine.createButton(controls, 'Resample', function() { generateData(); draw(); });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, X_2, \\ldots\\) be i.i.d. with \\(P(X_i = 1) = p\\) and \\(P(X_i = 0) = 1 - p\\). Use the WLLN to prove that the relative frequency \\(\\bar{X}_n\\) converges in probability to \\(p\\), and give an explicit bound on \\(P(|\\bar{X}_n - p| > \\varepsilon)\\) using Chebyshev.',
                    hint: 'Compute \\(\\operatorname{Var}(X_i)\\) for Bernoulli and apply Chebyshev directly.',
                    solution: 'Since \\(\\operatorname{Var}(X_i) = p(1-p) \\leq 1/4\\), by Chebyshev: \\(P(|\\bar{X}_n - p| > \\varepsilon) \\leq \\frac{p(1-p)}{n\\varepsilon^2} \\leq \\frac{1}{4n\\varepsilon^2}\\). This converges to 0, confirming \\(\\bar{X}_n \\xrightarrow{P} p\\). For example, with \\(n = 10000\\) and \\(\\varepsilon = 0.01\\), the bound gives \\(P(|\\bar{X}_n - p| > 0.01) \\leq 250\\), which is vacuous — illustrating that Chebyshev bounds can be loose. Hoeffding gives the tighter bound \\(2e^{-2n\\varepsilon^2} = 2e^{-2} \\approx 0.27\\).'
                },
                {
                    question: 'Suppose \\(X_1, X_2, \\ldots\\) are independent (but not identically distributed) with \\(\\mathbb{E}[X_i] = 0\\) and \\(\\operatorname{Var}(X_i) = \\sigma_i^2\\). Under what condition on \\(\\{\\sigma_i^2\}\\) does the WLLN hold for \\(\\bar{X}_n\\)?',
                    hint: 'You need \\(\\operatorname{Var}(\\bar{X}_n) \\to 0\\). What does that require of \\(\\sum \\sigma_i^2 / n^2\\)?',
                    solution: 'We need \\(\\operatorname{Var}(\\bar{X}_n) = \\frac{1}{n^2} \\sum_{i=1}^n \\sigma_i^2 \\to 0\\). This holds if and only if \\(\\frac{1}{n^2} \\sum_{i=1}^n \\sigma_i^2 \\to 0\\). A sufficient condition is \\(\\sup_i \\sigma_i^2 < \\infty\\) (bounded variances), which gives the classical Chebyshev WLLN. More generally, it suffices that \\(\\frac{1}{n} \\sum_{i=1}^n \\sigma_i^2 = o(n)\\), i.e., the Cesaro mean of the variances grows sublinearly.'
                },
                {
                    question: 'Use the Glivenko-Cantelli theorem to explain why the sample median is a consistent estimator of the population median (assuming the median is unique).',
                    hint: 'Let \\(m\\) be the unique population median. The sample median \\(\\hat{m}_n\\) satisfies \\(\\hat{F}_n(\\hat{m}_n) \\approx 1/2\\). Use uniform convergence of \\(\\hat{F}_n\\) to \\(F\\).',
                    solution: 'By Glivenko-Cantelli, \\(\\|\\hat{F}_n - F\\|_\\infty \\xrightarrow{a.s.} 0\\). Suppose for contradiction that \\(\\hat{m}_n \\not\\to m\\) along a subsequence; say \\(\\hat{m}_{n_k} \\to m^\\prime \\neq m\\). By definition of sample median, \\(\\hat{F}_n(\\hat{m}_n) \\in [1/2 - 1/n, 1/2 + 1/n]\\). By uniform convergence, \\(F(m^\\prime) = \\lim \\hat{F}_{n_k}(\\hat{m}_{n_k}) = 1/2 = F(m)\\). If the median is unique, \\(F\\) is strictly increasing near \\(m\\), so \\(m^\\prime = m\\), contradiction. Hence \\(\\hat{m}_n \\xrightarrow{a.s.} m\\).'
                }
            ]
        },

        // ================================================================
        // Section 3: 中心极限定理
        // ================================================================
        {
            id: 'ch03-sec03',
            title: '中心极限定理',
            content: `
                <h2>中心极限定理 The Central Limit Theorem</h2>

                <p>大数定律告诉我们 \\(\\bar{X}_n \\to \\mu\\)，但没有刻画收敛的速度和波动的精细结构。中心极限定理 (CLT) 回答的是更深层的问题：\\(\\bar{X}_n\\) 围绕 \\(\\mu\\) 的波动在适当尺度上服从什么分布？</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.13 (经典 CLT / Lindeberg-Levy CLT)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, X_2, \\ldots\\) 为 i.i.d. 随机变量，\\(\\mathbb{E}[X_1] = \\mu\\)，\\(\\operatorname{Var}(X_1) = \\sigma^2 \\in (0, \\infty)\\)。则</p>
                        \\[\\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}} = \\frac{\\sum_{i=1}^n (X_i - \\mu)}{\\sigma \\sqrt{n}} \\xrightarrow{d} N(0, 1).\\]
                        <p>等价地，\\(\\sqrt{n}(\\bar{X}_n - \\mu) \\xrightarrow{d} N(0, \\sigma^2)\\)。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (via characteristic functions)</div>
                    <div class="env-body">
                        <p>不失一般性，设 \\(\\mu = 0\\)，\\(\\sigma = 1\\)（否则考虑 \\(Y_i = (X_i - \\mu)/\\sigma\\)）。令 \\(\\varphi(t) = \\mathbb{E}[e^{itX_1}]\\) 为 \\(X_1\\) 的特征函数。</p>
                        <p>由 \\(\\mathbb{E}[X_1] = 0\\)，\\(\\mathbb{E}[X_1^2] = 1\\)，Taylor 展开得</p>
                        \\[\\varphi(t) = 1 - \\frac{t^2}{2} + o(t^2), \\quad t \\to 0.\\]
                        <p>标准化和 \\(S_n = \\frac{1}{\\sqrt{n}} \\sum_{i=1}^n X_i\\) 的特征函数为</p>
                        \\[\\varphi_{S_n}(t) = \\left[\\varphi\\!\\left(\\frac{t}{\\sqrt{n}}\\right)\\right]^n = \\left[1 - \\frac{t^2}{2n} + o\\!\\left(\\frac{1}{n}\\right)\\right]^n.\\]
                        <p>取对数：</p>
                        \\[n \\log\\!\\left(1 - \\frac{t^2}{2n} + o\\!\\left(\\frac{1}{n}\\right)\\right) = n\\left(-\\frac{t^2}{2n} + o\\!\\left(\\frac{1}{n}\\right)\\right) \\to -\\frac{t^2}{2}.\\]
                        <p>因此 \\(\\varphi_{S_n}(t) \\to e^{-t^2/2}\\)，即标准正态分布的特征函数。由 Levy 连续性定理，\\(S_n \\xrightarrow{d} N(0,1)\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>CLT 的直觉：无论原始分布是什么形状（可以是离散的、偏斜的、多峰的），只要方差有限，大量独立随机变量的标准化和总会趋向正态。这是因为求和过程 "平滑" 了分布的高阶特征——卷积趋向高斯。正态分布在卷积下的 "吸引" 作用是概率论中最深刻的现象之一。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.14 (Berry-Esseen 定理)</div>
                    <div class="env-body">
                        <p>在 Lindeberg-Levy CLT 的条件下，若还有 \\(\\mathbb{E}[|X_1|^3] = \\rho < \\infty\\)，则存在绝对常数 \\(C > 0\\) 使得</p>
                        \\[\\sup_{x \\in \\mathbb{R}} \\left|P\\!\\left(\\frac{\\bar{X}_n - \\mu}{\\sigma/\\sqrt{n}} \\leq x\\right) - \\Phi(x)\\right| \\leq \\frac{C \\rho}{\\sigma^3 \\sqrt{n}},\\]
                        <p>其中 \\(\\Phi\\) 为标准正态 CDF。目前已知最佳常数为 \\(C \\leq 0.4748\\) (Shevtsova, 2011)。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Berry-Esseen 定理量化了正态近似的精度：收敛速率为 \\(O(1/\\sqrt{n})\\)。这意味着 CDF 的一致逼近误差以 \\(1/\\sqrt{n}\\) 的速度衰减。对对称分布，实际收敛往往更快。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.15 (Lindeberg-Feller CLT)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, X_2, \\ldots\\) 为独立（<em>不要求同分布</em>）的随机变量，\\(\\mathbb{E}[X_i] = \\mu_i\\)，\\(\\operatorname{Var}(X_i) = \\sigma_i^2\\)。令 \\(s_n^2 = \\sum_{i=1}^n \\sigma_i^2\\)。若 Lindeberg 条件成立：对任意 \\(\\varepsilon > 0\\)，</p>
                        \\[\\frac{1}{s_n^2} \\sum_{i=1}^n \\mathbb{E}\\left[(X_i - \\mu_i)^2 \\cdot \\mathbf{1}\\{|X_i - \\mu_i| > \\varepsilon s_n\}\\right] \\to 0,\\]
                        <p>则 \\(\\frac{\\sum_{i=1}^n (X_i - \\mu_i)}{s_n} \\xrightarrow{d} N(0, 1)\\)。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Lindeberg 条件的含义：没有单个 \\(X_i\\) 对总和的波动贡献占主导地位。当所有 \\(X_i\\) 同分布时，Lindeberg 条件自动满足（只需方差有限），回到经典 CLT。Feller 还证明了在附加条件 \\(\\max_i \\sigma_i^2 / s_n^2 \\to 0\\) 下，Lindeberg 条件也是必要的。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="clt-demo-viz"></div>
            `,
            visualizations: [
                {
                    id: 'clt-demo-viz',
                    title: 'Interactive: CLT — 不同源分布的收敛',
                    description: 'See how the standardized sample mean converges to a normal distribution regardless of the source',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 420,
                            scale: 40,
                            originX: 280,
                            originY: 340
                        });

                        var sourceDist = 'exponential';
                        var sampleSize = 5;
                        var numTrials = 5000;

                        function sampleOne() {
                            if (sourceDist === 'exponential') return VizEngine.randomExponential(1);
                            if (sourceDist === 'uniform') return Math.random();
                            if (sourceDist === 'bernoulli') return Math.random() < 0.3 ? 1 : 0;
                            if (sourceDist === 'bimodal') return Math.random() < 0.5 ? VizEngine.randomNormal(-2, 0.5) : VizEngine.randomNormal(2, 0.5);
                            return VizEngine.randomExponential(1);
                        }

                        function getParams() {
                            if (sourceDist === 'exponential') return { mu: 1, sigma: 1 };
                            if (sourceDist === 'uniform') return { mu: 0.5, sigma: Math.sqrt(1/12) };
                            if (sourceDist === 'bernoulli') return { mu: 0.3, sigma: Math.sqrt(0.3 * 0.7) };
                            if (sourceDist === 'bimodal') return { mu: 0, sigma: Math.sqrt(4.25) };
                            return { mu: 1, sigma: 1 };
                        }

                        function draw() {
                            viz.clear();

                            var params = getParams();
                            var mu = params.mu;
                            var sigma = params.sigma;

                            // Generate standardized means
                            var zValues = [];
                            for (var t = 0; t < numTrials; t++) {
                                var sum = 0;
                                for (var j = 0; j < sampleSize; j++) {
                                    sum += sampleOne();
                                }
                                var xbar = sum / sampleSize;
                                var z = (xbar - mu) / (sigma / Math.sqrt(sampleSize));
                                zValues.push(z);
                            }

                            // Build histogram
                            var nBins = 40;
                            var binMin = -4;
                            var binMax = 4;
                            var binWidth = (binMax - binMin) / nBins;
                            var counts = new Array(nBins).fill(0);
                            for (var i = 0; i < zValues.length; i++) {
                                var idx = Math.floor((zValues[i] - binMin) / binWidth);
                                if (idx >= 0 && idx < nBins) counts[idx]++;
                            }

                            // Normalize to density
                            var maxDensity = 0;
                            var bins = [];
                            for (var i = 0; i < nBins; i++) {
                                var density = counts[i] / (numTrials * binWidth);
                                if (density > maxDensity) maxDensity = density;
                                bins.push({
                                    x: binMin + i * binWidth,
                                    width: binWidth,
                                    height: density
                                });
                            }

                            // Set scale to fit
                            var yMax = Math.max(maxDensity, 0.42) * 1.15;
                            var plotLeft = 50;
                            var plotRight = viz.width - 20;
                            var plotTop = 50;
                            var plotBottom = viz.height - 50;
                            var plotW = plotRight - plotLeft;
                            var plotH = plotBottom - plotTop;

                            function toSX(z) { return plotLeft + (z - binMin) / (binMax - binMin) * plotW; }
                            function toSY(d) { return plotBottom - d / yMax * plotH; }

                            // Draw histogram bars
                            for (var i = 0; i < bins.length; i++) {
                                var bx = toSX(bins[i].x);
                                var bw = toSX(bins[i].x + bins[i].width) - bx;
                                var by = toSY(bins[i].height);
                                var bh = plotBottom - by;
                                viz.ctx.fillStyle = viz.colors.blue + '66';
                                viz.ctx.fillRect(bx, by, bw, bh);
                                viz.ctx.strokeStyle = viz.colors.blue + 'aa';
                                viz.ctx.lineWidth = 0.5;
                                viz.ctx.strokeRect(bx, by, bw, bh);
                            }

                            // Draw N(0,1) curve
                            viz.ctx.strokeStyle = viz.colors.orange;
                            viz.ctx.lineWidth = 2.5;
                            viz.ctx.beginPath();
                            for (var px = plotLeft; px <= plotRight; px++) {
                                var z = binMin + (px - plotLeft) / plotW * (binMax - binMin);
                                var d = VizEngine.normalPDF(z, 0, 1);
                                var py = toSY(d);
                                if (px === plotLeft) viz.ctx.moveTo(px, py);
                                else viz.ctx.lineTo(px, py);
                            }
                            viz.ctx.stroke();

                            // Axes
                            viz.ctx.strokeStyle = viz.colors.axis;
                            viz.ctx.lineWidth = 1.5;
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(plotLeft, plotTop);
                            viz.ctx.lineTo(plotLeft, plotBottom);
                            viz.ctx.lineTo(plotRight, plotBottom);
                            viz.ctx.stroke();

                            // X-axis labels
                            viz.ctx.fillStyle = viz.colors.text;
                            viz.ctx.font = '11px -apple-system,sans-serif';
                            viz.ctx.textAlign = 'center';
                            viz.ctx.textBaseline = 'top';
                            for (var z = -4; z <= 4; z++) {
                                viz.ctx.fillText(z.toString(), toSX(z), plotBottom + 4);
                            }

                            // Title and legend
                            var distName = { exponential: 'Exp(1)', uniform: 'Uniform(0,1)', bernoulli: 'Bernoulli(0.3)', bimodal: 'Bimodal' }[sourceDist];
                            viz.screenText('Source: ' + distName + ', n = ' + sampleSize + ' (' + numTrials + ' trials)', viz.width / 2, 12, viz.colors.white, 13, 'center', 'top');
                            viz.screenText('z = (X-bar - mu) / (sigma / sqrt(n))', viz.width / 2, 30, viz.colors.text, 11, 'center', 'top');

                            // Legend
                            viz.ctx.fillStyle = viz.colors.blue + '66';
                            viz.ctx.fillRect(plotRight - 140, plotTop + 5, 12, 12);
                            viz.screenText('Histogram', plotRight - 123, plotTop + 11, viz.colors.blue, 10, 'left', 'middle');
                            viz.ctx.strokeStyle = viz.colors.orange;
                            viz.ctx.lineWidth = 2;
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(plotRight - 140, plotTop + 27);
                            viz.ctx.lineTo(plotRight - 128, plotTop + 27);
                            viz.ctx.stroke();
                            viz.screenText('N(0,1) PDF', plotRight - 123, plotTop + 27, viz.colors.orange, 10, 'left', 'middle');
                        }

                        draw();

                        VizEngine.createSlider(controls, 'n =', 1, 100, sampleSize, 1, function(v) {
                            sampleSize = Math.round(v);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Exp(1)', function() { sourceDist = 'exponential'; draw(); });
                        VizEngine.createButton(controls, 'Uniform', function() { sourceDist = 'uniform'; draw(); });
                        VizEngine.createButton(controls, 'Bernoulli', function() { sourceDist = 'bernoulli'; draw(); });
                        VizEngine.createButton(controls, 'Bimodal', function() { sourceDist = 'bimodal'; draw(); });
                        VizEngine.createButton(controls, 'Resample', function() { draw(); });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{i.i.d.}}{\\sim} \\text{Exp}(\\lambda)\\). Find the asymptotic distribution of \\(\\sqrt{n}(\\bar{X}_n - 1/\\lambda)\\) using the CLT.',
                    hint: 'Recall that for \\(\\text{Exp}(\\lambda)\\), \\(\\mu = 1/\\lambda\\) and \\(\\sigma^2 = 1/\\lambda^2\\).',
                    solution: 'By the CLT, \\(\\sqrt{n}(\\bar{X}_n - \\mu) \\xrightarrow{d} N(0, \\sigma^2)\\). Here \\(\\mu = 1/\\lambda\\) and \\(\\sigma^2 = 1/\\lambda^2\\), so \\(\\sqrt{n}(\\bar{X}_n - 1/\\lambda) \\xrightarrow{d} N(0, 1/\\lambda^2)\\). Equivalently, \\(\\frac{\\sqrt{n}(\\bar{X}_n - 1/\\lambda)}{1/\\lambda} = \\lambda\\sqrt{n}(\\bar{X}_n - 1/\\lambda) \\xrightarrow{d} N(0, 1)\\).'
                },
                {
                    question: 'Verify the Lindeberg condition for the i.i.d. case: Show that when \\(X_i\\) are i.i.d. with mean \\(\\mu\\) and finite variance \\(\\sigma^2\\), the Lindeberg condition of Theorem 3.15 is automatically satisfied.',
                    hint: 'In the i.i.d. case, \\(s_n^2 = n\\sigma^2\\), so \\(\\varepsilon s_n = \\varepsilon \\sigma \\sqrt{n}\\). The sum has \\(n\\) identical terms.',
                    solution: 'With \\(s_n^2 = n\\sigma^2\\), the Lindeberg sum becomes \\(\\frac{1}{n\\sigma^2} \\sum_{i=1}^n \\mathbb{E}[(X_i - \\mu)^2 \\mathbf{1}\\{|X_i - \\mu| > \\varepsilon\\sigma\\sqrt{n}\}]\\). Since all \\(X_i\\) are identically distributed, this equals \\(\\frac{1}{\\sigma^2} \\mathbb{E}[(X_1 - \\mu)^2 \\mathbf{1}\\{|X_1 - \\mu| > \\varepsilon\\sigma\\sqrt{n}\}]\\). As \\(n \\to \\infty\\), the indicator \\(\\mathbf{1}\\{|X_1 - \\mu| > \\varepsilon\\sigma\\sqrt{n}\} \\to 0\\) a.s. Since \\((X_1 - \\mu)^2\\) is integrable, by dominated convergence the expectation tends to 0.'
                },
                {
                    question: 'The Berry-Esseen bound for \\(X_i \\overset{\\text{i.i.d.}}{\\sim} \\text{Bernoulli}(1/2)\\) is \\(C \\rho / (\\sigma^3 \\sqrt{n})\\). Compute \\(\\rho/\\sigma^3\\) and estimate how large \\(n\\) must be for the sup-norm error to be at most 0.01.',
                    hint: 'For Bernoulli(1/2): \\(\\sigma^2 = 1/4\\), \\(\\mathbb{E}[|X - 1/2|^3] = 1/8\\).',
                    solution: 'We have \\(\\sigma^2 = 1/4\\), so \\(\\sigma^3 = 1/8\\). Also \\(\\rho = \\mathbb{E}[|X - 1/2|^3] = (1/2)^3 = 1/8\\). Thus \\(\\rho/\\sigma^3 = 1\\). With \\(C = 0.4748\\), the bound is \\(0.4748 / \\sqrt{n} \\leq 0.01\\), giving \\(\\sqrt{n} \\geq 47.48\\), i.e., \\(n \\geq 2255\\). In practice, the approximation is already quite good for \\(n \\geq 30\\).'
                }
            ]
        },

        // ================================================================
        // Section 4: CLT的应用
        // ================================================================
        {
            id: 'ch03-sec04',
            title: 'CLT的应用',
            content: `
                <h2>CLT的应用 Applications of the CLT</h2>

                <p>CLT 不仅是一个理论上的极限定理，更是统计推断的实用工具。本节讨论最常见的应用：正态近似、连续性修正以及 Delta 方法。</p>

                <h3>正态近似</h3>

                <p>CLT 的最直接应用是将复杂分布的概率计算化归为标准正态分布。对于 i.i.d. 样本 \\(X_1, \\ldots, X_n\\)（\\(\\mu, \\sigma^2\\) 已知），当 \\(n\\) 足够大时：</p>
                \\[P(\\bar{X}_n \\leq x) \\approx \\Phi\\!\\left(\\frac{x - \\mu}{\\sigma / \\sqrt{n}}\\right).\\]

                <div class="env-block example">
                    <div class="env-title">Example 3.16 (保险理赔)</div>
                    <div class="env-body">
                        <p>一家保险公司有 \\(n = 10000\\) 份独立保单。每份保单的理赔额 \\(X_i\\) 满足 \\(\\mathbb{E}[X_i] = 500\\) 元，\\(\\operatorname{Var}(X_i) = 100^2\\)。总理赔额 \\(S_n = \\sum X_i\\) 的均值为 \\(5{,}000{,}000\\) 元，标准差为 \\(100\\sqrt{10000} = 10{,}000\\) 元。</p>
                        <p>公司准备了 5,020,000 元的储备金。则</p>
                        \\[P(S_n > 5{,}020{,}000) \\approx 1 - \\Phi\\!\\left(\\frac{5{,}020{,}000 - 5{,}000{,}000}{10{,}000}\\right) = 1 - \\Phi(2) \\approx 0.0228.\\]
                    </div>
                </div>

                <h3>二项分布的正态近似与连续性修正</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.17 (De Moivre-Laplace CLT)</div>
                    <div class="env-body">
                        <p>设 \\(S_n \\sim \\text{Bin}(n, p)\\)。则当 \\(n \\to \\infty\\) 时，</p>
                        \\[\\frac{S_n - np}{\\sqrt{np(1-p)}} \\xrightarrow{d} N(0,1).\\]
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning: 连续性修正 Continuity Correction</div>
                    <div class="env-body">
                        <p>当用连续分布（正态）近似离散分布（二项）时，<strong>连续性修正</strong>可以显著提高精度。基本原则：对整数值 \\(k\\) 的概率，将离散事件 "展宽" 半个单位：</p>
                        \\[P(S_n \\leq k) \\approx \\Phi\\!\\left(\\frac{k + 0.5 - np}{\\sqrt{np(1-p)}}\\right),\\]
                        \\[P(S_n = k) \\approx \\Phi\\!\\left(\\frac{k + 0.5 - np}{\\sqrt{np(1-p)}}\\right) - \\Phi\\!\\left(\\frac{k - 0.5 - np}{\\sqrt{np(1-p)}}\\right).\\]
                        <p>经验法则：当 \\(np \\geq 5\\) 且 \\(n(1-p) \\geq 5\\) 时，正态近似通常足够准确。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="binomial-normal-viz"></div>

                <h3>Delta 方法预览</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.18 (Delta 方法 / Delta Method)</div>
                    <div class="env-body">
                        <p>设 \\(\\sqrt{n}(Y_n - \\theta) \\xrightarrow{d} N(0, \\sigma^2)\\)，且 \\(g\\) 在 \\(\\theta\\) 处可微，\\(g'(\\theta) \\neq 0\\)。则</p>
                        \\[\\sqrt{n}(g(Y_n) - g(\\theta)) \\xrightarrow{d} N(0, \\sigma^2 [g'(\\theta)]^2).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>由 Taylor 展开：\\(g(Y_n) = g(\\theta) + g'(\\theta)(Y_n - \\theta) + o(Y_n - \\theta)\\)。因此</p>
                        \\[\\sqrt{n}(g(Y_n) - g(\\theta)) = g'(\\theta) \\cdot \\sqrt{n}(Y_n - \\theta) + \\sqrt{n} \\cdot o(Y_n - \\theta).\\]
                        <p>由 \\(Y_n \\xrightarrow{P} \\theta\\)，余项 \\(\\sqrt{n} \\cdot o(Y_n - \\theta) \\xrightarrow{P} 0\\)。由 Slutsky 引理，</p>
                        \\[\\sqrt{n}(g(Y_n) - g(\\theta)) \\xrightarrow{d} g'(\\theta) \\cdot N(0, \\sigma^2) = N(0, \\sigma^2 [g'(\\theta)]^2).\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 3.19 (方差稳定化变换)</div>
                    <div class="env-body">
                        <p>设 \\(X_i \\overset{\\text{i.i.d.}}{\\sim} \\text{Poisson}(\\lambda)\\)。CLT 给出 \\(\\sqrt{n}(\\bar{X}_n - \\lambda) \\xrightarrow{d} N(0, \\lambda)\\)，渐近方差依赖于未知参数 \\(\\lambda\\)。</p>
                        <p>取 \\(g(x) = \\sqrt{x}\\)，则 \\(g'(\\lambda) = 1/(2\\sqrt{\\lambda})\\)。由 Delta 方法：</p>
                        \\[\\sqrt{n}(\\sqrt{\\bar{X}_n} - \\sqrt{\\lambda}) \\xrightarrow{d} N\\!\\left(0, \\lambda \\cdot \\frac{1}{4\\lambda}\\right) = N\\!\\left(0, \\frac{1}{4}\\right).\\]
                        <p>变换后的渐近方差 \\(1/4\\) 不再依赖 \\(\\lambda\\)——这就是 <strong>方差稳定化变换</strong> (variance-stabilizing transformation)。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 3.20 (二阶 Delta 方法)</div>
                    <div class="env-body">
                        <p>当 \\(g'(\\theta) = 0\\) 但 \\(g''(\\theta) \\neq 0\\) 时，一阶 Delta 方法退化。此时需要二阶展开：</p>
                        \\[n(g(Y_n) - g(\\theta)) \\xrightarrow{d} \\frac{\\sigma^2 g''(\\theta)}{2} \\chi^2_1.\\]
                        <p>这在统计检验中有重要应用，例如检验方差是否等于某个特定值。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="delta-method-viz"></div>
            `,
            visualizations: [
                {
                    id: 'binomial-normal-viz',
                    title: 'Interactive: 二项分布的正态近似',
                    description: 'Compare Binomial PMF with normal approximation, with and without continuity correction',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380,
                            scale: 40,
                            originX: 280,
                            originY: 300
                        });

                        var n = 20;
                        var p = 0.3;

                        function draw() {
                            viz.clear();

                            var mu = n * p;
                            var sigma = Math.sqrt(n * p * (1 - p));

                            // Determine range to display
                            var kMin = Math.max(0, Math.floor(mu - 4 * sigma));
                            var kMax = Math.min(n, Math.ceil(mu + 4 * sigma));

                            // Compute binomial PMF
                            var maxPMF = 0;
                            var pmfVals = [];
                            for (var k = kMin; k <= kMax; k++) {
                                var pmf = VizEngine.binomialPMF(k, n, p);
                                pmfVals.push({ k: k, pmf: pmf });
                                if (pmf > maxPMF) maxPMF = pmf;
                            }

                            // Setup plot dimensions
                            var plotL = 50, plotR = viz.width - 20;
                            var plotT = 45, plotB = viz.height - 45;
                            var plotW = plotR - plotL;
                            var plotH = plotB - plotT;
                            var yMax = maxPMF * 1.25;

                            function toSX(k) { return plotL + (k - kMin) / (kMax - kMin) * plotW; }
                            function toSY(v) { return plotB - v / yMax * plotH; }

                            // Draw binomial bars
                            var barW = plotW / (kMax - kMin + 1) * 0.7;
                            for (var i = 0; i < pmfVals.length; i++) {
                                var cx = toSX(pmfVals[i].k);
                                var h = pmfVals[i].pmf;
                                var sy = toSY(h);
                                viz.ctx.fillStyle = viz.colors.blue + '77';
                                viz.ctx.fillRect(cx - barW / 2, sy, barW, plotB - sy);
                                viz.ctx.strokeStyle = viz.colors.blue;
                                viz.ctx.lineWidth = 1;
                                viz.ctx.strokeRect(cx - barW / 2, sy, barW, plotB - sy);
                            }

                            // Normal PDF (without continuity correction)
                            viz.ctx.strokeStyle = viz.colors.orange;
                            viz.ctx.lineWidth = 2;
                            viz.ctx.beginPath();
                            for (var px = plotL; px <= plotR; px++) {
                                var k = kMin + (px - plotL) / plotW * (kMax - kMin);
                                var d = VizEngine.normalPDF(k, mu, sigma);
                                var py = toSY(d);
                                if (px === plotL) viz.ctx.moveTo(px, py);
                                else viz.ctx.lineTo(px, py);
                            }
                            viz.ctx.stroke();

                            // Axes
                            viz.ctx.strokeStyle = viz.colors.axis;
                            viz.ctx.lineWidth = 1.5;
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(plotL, plotT);
                            viz.ctx.lineTo(plotL, plotB);
                            viz.ctx.lineTo(plotR, plotB);
                            viz.ctx.stroke();

                            // X-axis labels
                            viz.ctx.fillStyle = viz.colors.text;
                            viz.ctx.font = '10px -apple-system,sans-serif';
                            viz.ctx.textAlign = 'center';
                            viz.ctx.textBaseline = 'top';
                            var step = Math.max(1, Math.floor((kMax - kMin) / 15));
                            for (var k = kMin; k <= kMax; k += step) {
                                viz.ctx.fillText(k.toString(), toSX(k), plotB + 4);
                            }

                            // Title
                            viz.screenText('Bin(' + n + ', ' + p.toFixed(2) + ') vs N(' + mu.toFixed(1) + ', ' + sigma.toFixed(2) + ')', viz.width / 2, 12, viz.colors.white, 13, 'center', 'top');

                            // Goodness info
                            var npVal = (n * p).toFixed(1);
                            var nqVal = (n * (1 - p)).toFixed(1);
                            var ok = n * p >= 5 && n * (1 - p) >= 5;
                            var infoColor = ok ? viz.colors.green : viz.colors.red;
                            viz.screenText('np=' + npVal + ', n(1-p)=' + nqVal + (ok ? ' (rule OK)' : ' (rule violated)'), viz.width / 2, 28, infoColor, 10, 'center', 'top');

                            // Legend
                            viz.ctx.fillStyle = viz.colors.blue + '77';
                            viz.ctx.fillRect(plotR - 150, plotT + 5, 12, 12);
                            viz.screenText('Binomial PMF', plotR - 133, plotT + 11, viz.colors.blue, 10, 'left', 'middle');
                            viz.ctx.strokeStyle = viz.colors.orange;
                            viz.ctx.lineWidth = 2;
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(plotR - 150, plotT + 27);
                            viz.ctx.lineTo(plotR - 138, plotT + 27);
                            viz.ctx.stroke();
                            viz.screenText('Normal approx.', plotR - 133, plotT + 27, viz.colors.orange, 10, 'left', 'middle');
                        }

                        draw();

                        VizEngine.createSlider(controls, 'n =', 5, 100, n, 1, function(v) {
                            n = Math.round(v);
                            draw();
                        });
                        VizEngine.createSlider(controls, 'p =', 0.05, 0.95, p, 0.05, function(v) {
                            p = v;
                            draw();
                        });

                        return viz;
                    }
                },
                {
                    id: 'delta-method-viz',
                    title: 'Interactive: Delta 方法 — 变换后的分布',
                    description: 'Visualize how the Delta method predicts the distribution of g(X-bar)',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            scale: 40,
                            originX: 280,
                            originY: 320
                        });

                        var lambda = 4;
                        var nSamp = 30;
                        var numTrials = 5000;
                        var gChoice = 'sqrt'; // 'sqrt', 'log', 'square'

                        function gFunc(x) {
                            if (gChoice === 'sqrt') return Math.sqrt(Math.max(x, 0));
                            if (gChoice === 'log') return Math.log(Math.max(x, 0.001));
                            if (gChoice === 'square') return x * x;
                            return Math.sqrt(Math.max(x, 0));
                        }

                        function gPrime(theta) {
                            if (gChoice === 'sqrt') return 0.5 / Math.sqrt(theta);
                            if (gChoice === 'log') return 1 / theta;
                            if (gChoice === 'square') return 2 * theta;
                            return 0.5 / Math.sqrt(theta);
                        }

                        function gName() {
                            if (gChoice === 'sqrt') return 'sqrt(x)';
                            if (gChoice === 'log') return 'log(x)';
                            if (gChoice === 'square') return 'x^2';
                            return 'sqrt(x)';
                        }

                        function draw() {
                            viz.clear();

                            // Generate simulated g(X-bar) values
                            var gValues = [];
                            for (var t = 0; t < numTrials; t++) {
                                var sum = 0;
                                for (var j = 0; j < nSamp; j++) {
                                    // Poisson sample via sum of exponentials
                                    var poi = 0;
                                    var csum = 0;
                                    while (true) {
                                        csum += VizEngine.randomExponential(lambda);
                                        if (csum > 1) break;
                                        poi++;
                                    }
                                    sum += poi;
                                }
                                var xbar = sum / nSamp;
                                gValues.push(gFunc(xbar));
                            }

                            // Delta method prediction
                            var theta = lambda;
                            var gTheta = gFunc(theta);
                            var gpTheta = gPrime(theta);
                            var asympVar = lambda * gpTheta * gpTheta / nSamp;
                            var asympSD = Math.sqrt(asympVar);

                            // Build histogram
                            var gMean = VizEngine.mean(gValues);
                            var gSD = VizEngine.std(gValues);
                            var histMin = gMean - 4 * gSD;
                            var histMax = gMean + 4 * gSD;
                            var nBins = 40;
                            var binWidth = (histMax - histMin) / nBins;
                            var counts = new Array(nBins).fill(0);
                            for (var i = 0; i < gValues.length; i++) {
                                var idx = Math.floor((gValues[i] - histMin) / binWidth);
                                if (idx >= 0 && idx < nBins) counts[idx]++;
                            }

                            var maxDensity = 0;
                            for (var i = 0; i < nBins; i++) {
                                var dens = counts[i] / (numTrials * binWidth);
                                if (dens > maxDensity) maxDensity = dens;
                            }

                            // Plot dimensions
                            var plotL = 50, plotR = viz.width - 20;
                            var plotT = 55, plotB = viz.height - 45;
                            var plotW = plotR - plotL;
                            var plotH = plotB - plotT;
                            var yMax = maxDensity * 1.3;

                            function toSX(v) { return plotL + (v - histMin) / (histMax - histMin) * plotW; }
                            function toSY(d) { return plotB - d / yMax * plotH; }

                            // Draw histogram
                            for (var i = 0; i < nBins; i++) {
                                var dens = counts[i] / (numTrials * binWidth);
                                var bx = toSX(histMin + i * binWidth);
                                var bw = toSX(histMin + (i + 1) * binWidth) - bx;
                                var by = toSY(dens);
                                viz.ctx.fillStyle = viz.colors.teal + '55';
                                viz.ctx.fillRect(bx, by, bw, plotB - by);
                                viz.ctx.strokeStyle = viz.colors.teal + '99';
                                viz.ctx.lineWidth = 0.5;
                                viz.ctx.strokeRect(bx, by, bw, plotB - by);
                            }

                            // Delta method normal curve
                            viz.ctx.strokeStyle = viz.colors.orange;
                            viz.ctx.lineWidth = 2.5;
                            viz.ctx.beginPath();
                            for (var px = plotL; px <= plotR; px++) {
                                var v = histMin + (px - plotL) / plotW * (histMax - histMin);
                                var d = VizEngine.normalPDF(v, gTheta, asympSD);
                                var py = toSY(d);
                                if (px === plotL) viz.ctx.moveTo(px, py);
                                else viz.ctx.lineTo(px, py);
                            }
                            viz.ctx.stroke();

                            // g(theta) vertical line
                            var gx = toSX(gTheta);
                            viz.ctx.strokeStyle = viz.colors.green;
                            viz.ctx.lineWidth = 1.5;
                            viz.ctx.setLineDash([4, 4]);
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(gx, plotT);
                            viz.ctx.lineTo(gx, plotB);
                            viz.ctx.stroke();
                            viz.ctx.setLineDash([]);

                            // Axes
                            viz.ctx.strokeStyle = viz.colors.axis;
                            viz.ctx.lineWidth = 1.5;
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(plotL, plotT);
                            viz.ctx.lineTo(plotL, plotB);
                            viz.ctx.lineTo(plotR, plotB);
                            viz.ctx.stroke();

                            // Title
                            viz.screenText('Delta Method: g(X-bar), g(x) = ' + gName() + ', Poisson(' + lambda + '), n=' + nSamp, viz.width / 2, 10, viz.colors.white, 12, 'center', 'top');
                            viz.screenText('Asymptotic SD = ' + asympSD.toFixed(4) + ', Empirical SD = ' + gSD.toFixed(4), viz.width / 2, 28, viz.colors.text, 10, 'center', 'top');

                            // Legend
                            viz.ctx.fillStyle = viz.colors.teal + '55';
                            viz.ctx.fillRect(plotR - 170, plotT + 5, 12, 12);
                            viz.screenText('Simulated ' + gName(), plotR - 153, plotT + 11, viz.colors.teal, 10, 'left', 'middle');
                            viz.ctx.strokeStyle = viz.colors.orange;
                            viz.ctx.lineWidth = 2;
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(plotR - 170, plotT + 27);
                            viz.ctx.lineTo(plotR - 158, plotT + 27);
                            viz.ctx.stroke();
                            viz.screenText('Delta method N', plotR - 153, plotT + 27, viz.colors.orange, 10, 'left', 'middle');

                            viz.ctx.strokeStyle = viz.colors.green;
                            viz.ctx.lineWidth = 1.5;
                            viz.ctx.setLineDash([4, 4]);
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(plotR - 170, plotT + 43);
                            viz.ctx.lineTo(plotR - 158, plotT + 43);
                            viz.ctx.stroke();
                            viz.ctx.setLineDash([]);
                            viz.screenText('g(theta)', plotR - 153, plotT + 43, viz.colors.green, 10, 'left', 'middle');
                        }

                        draw();

                        VizEngine.createSlider(controls, 'lambda =', 1, 20, lambda, 1, function(v) {
                            lambda = Math.round(v);
                            draw();
                        });
                        VizEngine.createSlider(controls, 'n =', 5, 200, nSamp, 5, function(v) {
                            nSamp = Math.round(v);
                            draw();
                        });
                        VizEngine.createButton(controls, 'g = sqrt', function() { gChoice = 'sqrt'; draw(); });
                        VizEngine.createButton(controls, 'g = log', function() { gChoice = 'log'; draw(); });
                        VizEngine.createButton(controls, 'g = x^2', function() { gChoice = 'square'; draw(); });
                        VizEngine.createButton(controls, 'Resample', function() { draw(); });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'A fair coin is tossed \\(n = 400\\) times. Use the CLT (with continuity correction) to approximate \\(P(190 \\leq S_{400} \\leq 210)\\), where \\(S_{400}\\) is the number of heads.',
                    hint: 'Use \\(P(190 \\leq S \\leq 210) = P(189.5 < S < 210.5)\\) with \\(\\mu = 200\\) and \\(\\sigma = 10\\).',
                    solution: 'Here \\(\\mu = np = 200\\), \\(\\sigma = \\sqrt{np(1-p)} = 10\\). With continuity correction: \\(P(190 \\leq S \\leq 210) \\approx \\Phi\\left(\\frac{210.5 - 200}{10}\\right) - \\Phi\\left(\\frac{189.5 - 200}{10}\\right) = \\Phi(1.05) - \\Phi(-1.05) = 2\\Phi(1.05) - 1 \\approx 2(0.8531) - 1 = 0.7062\\). Without correction: \\(\\Phi(1) - \\Phi(-1) \\approx 0.6827\\). The continuity correction gives a more accurate result.'
                },
                {
                    question: 'Let \\(X_i \\overset{\\text{i.i.d.}}{\\sim} \\text{Exp}(\\lambda)\\). Use the Delta method to find the asymptotic distribution of \\(1/\\bar{X}_n\\) as an estimator of \\(\\lambda\\).',
                    hint: 'Take \\(g(x) = 1/x\\), so \\(g^{\\prime}(x) = -1/x^2\\). Apply the Delta method with \\(\\theta = 1/\\lambda\\).',
                    solution: 'We have \\(\\bar{X}_n \\xrightarrow{P} \\theta = 1/\\lambda\\) and \\(\\sqrt{n}(\\bar{X}_n - 1/\\lambda) \\xrightarrow{d} N(0, 1/\\lambda^2)\\). With \\(g(x) = 1/x\\), \\(g^{\\prime}(1/\\lambda) = -\\lambda^2\\). Delta method gives \\(\\sqrt{n}(1/\\bar{X}_n - \\lambda) \\xrightarrow{d} N(0, \\lambda^{-2} \\cdot \\lambda^4) = N(0, \\lambda^2)\\). So an approximate \\(95\\%\\) CI for \\(\\lambda\\) is \\(1/\\bar{X}_n \\pm 1.96 \\cdot \\hat{\\lambda}/\\sqrt{n}\\), where \\(\\hat{\\lambda} = 1/\\bar{X}_n\\).'
                },
                {
                    question: 'Show that for \\(X_i \\overset{\\text{i.i.d.}}{\\sim} \\text{Bernoulli}(p)\\), the variance-stabilizing transformation is \\(g(p) = \\arcsin(\\sqrt{p})\\). That is, show that applying the Delta method with this \\(g\\) yields an asymptotic variance that does not depend on \\(p\\).',
                    hint: 'We need \\([g^{\\prime}(p)]^2 \\cdot p(1-p) = \\text{const}\\). Differentiate \\(\\arcsin(\\sqrt{p})\\).',
                    solution: 'Let \\(g(p) = \\arcsin(\\sqrt{p})\\). Then \\(g^{\\prime}(p) = \\frac{1}{\\sqrt{1-p}} \\cdot \\frac{1}{2\\sqrt{p}} = \\frac{1}{2\\sqrt{p(1-p)}}\\). The CLT gives \\(\\sqrt{n}(\\hat{p} - p) \\xrightarrow{d} N(0, p(1-p))\\). By the Delta method: \\(\\sqrt{n}(g(\\hat{p}) - g(p)) \\xrightarrow{d} N\\left(0, p(1-p) \\cdot \\frac{1}{4p(1-p)}\\right) = N(0, 1/4)\\). The asymptotic variance \\(1/4\\) is free of \\(p\\). This is the classical arcsine (or angular) transformation used in binomial data analysis.'
                }
            ]
        }
    ]
});

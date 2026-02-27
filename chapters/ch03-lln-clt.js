window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch03',
    number: 3,
    title: 'Law of Large Numbers & Central Limit Theorem',
    subtitle: 'Laws of Large Numbers & the Central Limit Theorem',
    sections: [
        // ================================================================
        // Section 1: Modes of Convergence
        // ================================================================
        {
            id: 'ch03-sec01',
            title: 'Modes of Convergence',
            content: `
                <h2>Modes of Convergence 收敛性概念</h2>

                <p>Before studying large-sample behavior, we must rigorously define the various modes of convergence for a sequence of random variables \\(\\{X_n\\}\\). These concepts form the cornerstone of asymptotic theory and are essential for understanding the law of large numbers and the central limit theorem.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 3.1 (Convergence in Probability)</div>
                    <div class="env-body">
                        <p>A sequence of random variables \\(\\{X_n\\}\\) is said to <strong>converge in probability</strong> (依概率收敛) to \\(X\\), written \\(X_n \\xrightarrow{P} X\\), if for every \\(\\varepsilon > 0\\),</p>
                        \\[\\lim_{n \\to \\infty} P(|X_n - X| > \\varepsilon) = 0.\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The intuition behind convergence in probability: as \\(n\\) grows, the distribution of \\(X_n\\) concentrates increasingly around \\(X\\). For any given "tube width" \\(\\varepsilon\\), the probability that \\(X_n\\) falls outside the tube tends to zero. However, this does <em>not guarantee</em> that every sample path eventually stays inside the tube — occasional "escapes" are permitted, as long as the escape frequency tends to zero.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 3.2 (Almost Sure Convergence)</div>
                    <div class="env-body">
                        <p>The sequence \\(\\{X_n\\}\\) is said to <strong>converge almost surely</strong> (几乎必然收敛, a.s. convergence) to \\(X\\), written \\(X_n \\xrightarrow{a.s.} X\\), if</p>
                        \\[P\\!\\left(\\lim_{n \\to \\infty} X_n = X\\right) = 1.\\]
                        <p>Equivalently, for every \\(\\varepsilon > 0\\),</p>
                        \\[P\\!\\left(\\bigcap_{m=1}^{\\infty} \\bigcup_{n=m}^{\\infty} \\{|X_n - X| > \\varepsilon\\}\\right) = 0.\\]
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Almost sure convergence requires that, with probability 1, the sample path eventually remains inside the \\(\\varepsilon\\)-tube permanently. This is strictly stronger than convergence in probability — not only does the escape probability tend to zero, but almost every path has only finitely many escapes.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 3.3 (Convergence in Distribution)</div>
                    <div class="env-body">
                        <p>The sequence \\(\\{X_n\\}\\) is said to <strong>converge in distribution</strong> (依分布收敛) to \\(X\\), written \\(X_n \\xrightarrow{d} X\\), if at every continuity point \\(x\\) of \\(F_X\\),</p>
                        \\[\\lim_{n \\to \\infty} F_{X_n}(x) = F_X(x).\\]
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 3.4 (Convergence in \\(L^p\\))</div>
                    <div class="env-body">
                        <p>For \\(p \\geq 1\\), the sequence \\(\\{X_n\\}\\) is said to <strong>converge in \\(L^p\\)</strong> (\\(L^p\\) 收敛) to \\(X\\), written \\(X_n \\xrightarrow{L^p} X\\), if</p>
                        \\[\\lim_{n \\to \\infty} \\mathbb{E}[|X_n - X|^p] = 0.\\]
                        <p>When \\(p = 2\\), this is also called <strong>mean-square convergence</strong> (均方收敛).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.5 (Hierarchy of Convergence Modes)</div>
                    <div class="env-body">
                        <p>Let \\(\\{X_n\\}\\) be a sequence of random variables and \\(p \\geq 1\\). The following implications hold:</p>
                        \\[X_n \\xrightarrow{a.s.} X \\implies X_n \\xrightarrow{P} X \\implies X_n \\xrightarrow{d} X,\\]
                        \\[X_n \\xrightarrow{L^p} X \\implies X_n \\xrightarrow{P} X.\\]
                        <p>None of the converses hold in general. Furthermore, if \\(X_n \\xrightarrow{d} c\\) (a constant), then \\(X_n \\xrightarrow{P} c\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (\\(L^p \\Rightarrow P\\), via Markov's inequality)</div>
                    <div class="env-body">
                        <p>By Markov's inequality, for \\(\\varepsilon > 0\\),</p>
                        \\[P(|X_n - X| > \\varepsilon) = P(|X_n - X|^p > \\varepsilon^p) \\leq \\frac{\\mathbb{E}[|X_n - X|^p]}{\\varepsilon^p} \\to 0.\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning: Counterexamples Matter</div>
                    <div class="env-body">
                        <p><strong>Convergence in probability \\(\\not\\Rightarrow\\) almost sure convergence</strong>: The classic counterexample is the "typewriter sequence." On the probability space \\([0,1]\\) with uniform measure, define \\(X_n = \\mathbf{1}_{[a_n, b_n]}\\), where the intervals cycle through \\([0,1]\\) with lengths tending to zero. Then \\(X_n \\xrightarrow{P} 0\\), but for every \\(\\omega \\in [0,1]\\), the event \\(X_n(\\omega) = 1\\) occurs infinitely often.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.6 (Slutsky's Lemma)</div>
                    <div class="env-body">
                        <p>If \\(X_n \\xrightarrow{d} X\\) and \\(Y_n \\xrightarrow{P} c\\) (a constant), then:</p>
                        \\[X_n + Y_n \\xrightarrow{d} X + c, \\qquad X_n Y_n \\xrightarrow{d} cX, \\qquad \\frac{X_n}{Y_n} \\xrightarrow{d} \\frac{X}{c} \\;(c \\neq 0).\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.7 (Continuous Mapping Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(g: \\mathbb{R} \\to \\mathbb{R}\\) be continuous except possibly on a set \\(D_g\\) with \\(P(X \\in D_g) = 0\\). Then:</p>
                        <p>(a) \\(X_n \\xrightarrow{d} X \\implies g(X_n) \\xrightarrow{d} g(X)\\);</p>
                        <p>(b) \\(X_n \\xrightarrow{P} X \\implies g(X_n) \\xrightarrow{P} g(X)\\);</p>
                        <p>(c) \\(X_n \\xrightarrow{a.s.} X \\implies g(X_n) \\xrightarrow{a.s.} g(X)\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="convergence-modes-viz"></div>
            `,
            visualizations: [
                {
                    id: 'convergence-modes-viz',
                    title: 'Modes of Convergence 收敛方式对比',
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
                    hint: 'Use the definition via the event \\(A_m = \\bigcup_{n \\geq m} \\{|X_n - X| > \\varepsilon\\}\\) and the fact that \\(A_m \\downarrow\\).',
                    solution: 'Fix \\(\\varepsilon > 0\\). Define \\(A_m = \\bigcup_{n=m}^{\\infty} \\{|X_n - X| > \\varepsilon\\}\\). Since \\(X_n \\xrightarrow{a.s.} X\\), we have \\(P(\\bigcap_m A_m) = 0\\). Since \\(A_m \\downarrow \\bigcap_m A_m\\), by continuity of probability \\(P(A_m) \\to 0\\). But \\(P(|X_n - X| > \\varepsilon) \\leq P(A_n) \\to 0\\), so \\(X_n \\xrightarrow{P} X\\).'
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
        // Section 2: Laws of Large Numbers
        // ================================================================
        {
            id: 'ch03-sec02',
            title: 'Laws of Large Numbers',
            content: `
                <h2>Laws of Large Numbers 大数定律</h2>

                <p>The law of large numbers is one of the cornerstones of probability theory and statistics. It tells us that, under appropriate conditions, the sample mean converges to the population mean. This provides the mathematical foundation for the frequentist interpretation of probability and the theoretical guarantee for Monte Carlo methods.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.8 (Weak Law of Large Numbers — Chebyshev)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, X_2, \\ldots\\) be a sequence of <strong>pairwise uncorrelated</strong> (两两不相关) random variables satisfying \\(\\mathbb{E}[X_i] = \\mu\\) and \\(\\operatorname{Var}(X_i) \\leq C < \\infty\\) for all \\(i\\). Let \\(\\bar{X}_n = \\frac{1}{n}\\sum_{i=1}^n X_i\\). Then</p>
                        \\[\\bar{X}_n \\xrightarrow{P} \\mu.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Compute the variance of the sample mean. By pairwise uncorrelatedness:</p>
                        \\[\\operatorname{Var}(\\bar{X}_n) = \\frac{1}{n^2} \\sum_{i=1}^n \\operatorname{Var}(X_i) \\leq \\frac{nC}{n^2} = \\frac{C}{n}.\\]
                        <p>By Chebyshev's inequality, for any \\(\\varepsilon > 0\\):</p>
                        \\[P(|\\bar{X}_n - \\mu| \\geq \\varepsilon) \\leq \\frac{\\operatorname{Var}(\\bar{X}_n)}{\\varepsilon^2} \\leq \\frac{C}{n\\varepsilon^2} \\to 0.\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The beauty of Chebyshev's proof lies in its simplicity and weak assumptions — only pairwise uncorrelatedness and bounded variance are needed, with no requirement for independence or identical distribution. However, it only yields convergence in probability. The convergence rate from Chebyshev's inequality is \\(O(1/n)\\), which, while not optimal (Hoeffding's inequality can give exponential decay), is sufficient for many applications.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.9 (Khintchine's Weak Law of Large Numbers)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, X_2, \\ldots\\) be i.i.d. random variables with \\(\\mathbb{E}[X_1] = \\mu\\) (only the first moment is required; finite variance is not needed). Then</p>
                        \\[\\bar{X}_n \\xrightarrow{P} \\mu.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch (via characteristic functions)</div>
                    <div class="env-body">
                        <p>Let \\(\\varphi(t) = \\mathbb{E}[e^{itX_1}]\\) be the characteristic function (特征函数) of \\(X_1\\). Since \\(\\mathbb{E}[X_1] = \\mu\\) exists, \\(\\varphi(t) = 1 + i\\mu t + o(t)\\) as \\(t \\to 0\\).</p>
                        <p>The characteristic function of \\(\\bar{X}_n\\) is</p>
                        \\[\\varphi_{\\bar{X}_n}(t) = \\left[\\varphi\\!\\left(\\frac{t}{n}\\right)\\right]^n = \\left[1 + \\frac{i\\mu t}{n} + o\\!\\left(\\frac{1}{n}\\right)\\right]^n \\to e^{i\\mu t},\\]
                        <p>which is the characteristic function of the degenerate distribution at \\(\\mu\\), i.e., \\(\\bar{X}_n \\xrightarrow{d} \\mu\\). Since the limit is a constant, \\(\\bar{X}_n \\xrightarrow{P} \\mu\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.10 (Strong Law of Large Numbers — Kolmogorov)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, X_2, \\ldots\\) be i.i.d. random variables. Then</p>
                        \\[\\bar{X}_n \\xrightarrow{a.s.} \\mu \\quad \\Longleftrightarrow \\quad \\mathbb{E}[|X_1|] < \\infty \\;\\;(\\mu = \\mathbb{E}[X_1]).\\]
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The profound aspect of Kolmogorov's strong law of large numbers (强大数定律) is the equivalence: the existence of the first moment is both necessary and sufficient for the SLLN to hold. The core tools in the proof are the Kolmogorov three-series theorem and truncation techniques. When \\(\\mathbb{E}[|X_1|] = \\infty\\) (e.g., the Cauchy distribution), \\(\\bar{X}_n\\) almost surely does not converge to any constant.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 3.11 (Cauchy Distribution — SLLN Fails)</div>
                    <div class="env-body">
                        <p>Let \\(X_i \\overset{\\text{i.i.d.}}{\\sim} \\text{Cauchy}(0,1)\\), i.e., \\(f(x) = \\frac{1}{\\pi(1+x^2)}\\). Since \\(\\mathbb{E}[|X_1|] = \\int_{-\\infty}^{\\infty} \\frac{|x|}{\\pi(1+x^2)} dx = \\infty\\), the SLLN does not apply. In fact, \\(\\bar{X}_n\\) itself follows a \\(\\text{Cauchy}(0,1)\\) distribution (verified via characteristic functions), so the distribution of the sample mean does not shrink at all.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.12 (Glivenko-Cantelli Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, X_2, \\ldots \\overset{\\text{i.i.d.}}{\\sim} F\\), and define the empirical distribution function (经验分布函数) \\(\\hat{F}_n(x) = \\frac{1}{n} \\sum_{i=1}^n \\mathbf{1}\\{X_i \\leq x\\}\\). Then</p>
                        \\[\\sup_{x \\in \\mathbb{R}} |\\hat{F}_n(x) - F(x)| \\xrightarrow{a.s.} 0.\\]
                        <p>That is, the empirical CDF converges uniformly to the true CDF with probability 1. This theorem is sometimes called the "fundamental theorem of statistics."</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="lln-simulator-viz"></div>
            `,
            visualizations: [
                {
                    id: 'lln-simulator-viz',
                    title: 'LLN Simulator 大数定律模拟器',
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
                    question: 'Suppose \\(X_1, X_2, \\ldots\\) are independent (but not identically distributed) with \\(\\mathbb{E}[X_i] = 0\\) and \\(\\operatorname{Var}(X_i) = \\sigma_i^2\\). Under what condition on \\(\\{\\sigma_i^2\\}\\) does the WLLN hold for \\(\\bar{X}_n\\)?',
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
        // Section 3: The Central Limit Theorem
        // ================================================================
        {
            id: 'ch03-sec03',
            title: 'The Central Limit Theorem',
            content: `
                <h2>The Central Limit Theorem 中心极限定理</h2>

                <p>The law of large numbers tells us that \\(\\bar{X}_n \\to \\mu\\), but it does not characterize the rate of convergence or the fine structure of the fluctuations. The central limit theorem (CLT, 中心极限定理) answers a deeper question: what distribution do the fluctuations of \\(\\bar{X}_n\\) around \\(\\mu\\) follow at the appropriate scale?</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.13 (Lindeberg-Levy CLT)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, X_2, \\ldots\\) be i.i.d. random variables with \\(\\mathbb{E}[X_1] = \\mu\\) and \\(\\operatorname{Var}(X_1) = \\sigma^2 \\in (0, \\infty)\\). Then</p>
                        \\[\\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}} = \\frac{\\sum_{i=1}^n (X_i - \\mu)}{\\sigma \\sqrt{n}} \\xrightarrow{d} N(0, 1).\\]
                        <p>Equivalently, \\(\\sqrt{n}(\\bar{X}_n - \\mu) \\xrightarrow{d} N(0, \\sigma^2)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (via characteristic functions)</div>
                    <div class="env-body">
                        <p>Without loss of generality, assume \\(\\mu = 0\\) and \\(\\sigma = 1\\) (otherwise consider \\(Y_i = (X_i - \\mu)/\\sigma\\)). Let \\(\\varphi(t) = \\mathbb{E}[e^{itX_1}]\\) be the characteristic function of \\(X_1\\).</p>
                        <p>Since \\(\\mathbb{E}[X_1] = 0\\) and \\(\\mathbb{E}[X_1^2] = 1\\), Taylor expansion gives</p>
                        \\[\\varphi(t) = 1 - \\frac{t^2}{2} + o(t^2), \\quad t \\to 0.\\]
                        <p>The characteristic function of the standardized sum \\(S_n = \\frac{1}{\\sqrt{n}} \\sum_{i=1}^n X_i\\) is</p>
                        \\[\\varphi_{S_n}(t) = \\left[\\varphi\\!\\left(\\frac{t}{\\sqrt{n}}\\right)\\right]^n = \\left[1 - \\frac{t^2}{2n} + o\\!\\left(\\frac{1}{n}\\right)\\right]^n.\\]
                        <p>Taking the logarithm:</p>
                        \\[n \\log\\!\\left(1 - \\frac{t^2}{2n} + o\\!\\left(\\frac{1}{n}\\right)\\right) = n\\left(-\\frac{t^2}{2n} + o\\!\\left(\\frac{1}{n}\\right)\\right) \\to -\\frac{t^2}{2}.\\]
                        <p>Therefore \\(\\varphi_{S_n}(t) \\to e^{-t^2/2}\\), which is the characteristic function of the standard normal distribution. By Levy's continuity theorem, \\(S_n \\xrightarrow{d} N(0,1)\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The intuition behind the CLT: regardless of the shape of the original distribution (it can be discrete, skewed, or multimodal), as long as the variance is finite, the standardized sum of a large number of independent random variables always tends toward the normal distribution. This is because the summation process "smooths out" the higher-order features of the distribution — convolution tends toward the Gaussian. The "attracting" property of the normal distribution under convolution is one of the most profound phenomena in probability theory.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.14 (Berry-Esseen Theorem)</div>
                    <div class="env-body">
                        <p>Under the conditions of the Lindeberg-Levy CLT, if additionally \\(\\mathbb{E}[|X_1|^3] = \\rho < \\infty\\), then there exists an absolute constant \\(C > 0\\) such that</p>
                        \\[\\sup_{x \\in \\mathbb{R}} \\left|P\\!\\left(\\frac{\\bar{X}_n - \\mu}{\\sigma/\\sqrt{n}} \\leq x\\right) - \\Phi(x)\\right| \\leq \\frac{C \\rho}{\\sigma^3 \\sqrt{n}},\\]
                        <p>where \\(\\Phi\\) is the standard normal CDF. The best known constant is \\(C \\leq 0.4748\\) (Shevtsova, 2011).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The Berry-Esseen theorem quantifies the accuracy of the normal approximation: the convergence rate is \\(O(1/\\sqrt{n})\\). This means the uniform approximation error for the CDF decays at rate \\(1/\\sqrt{n}\\). For symmetric distributions, convergence is often faster in practice.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.15 (Lindeberg-Feller CLT)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, X_2, \\ldots\\) be independent (<em>not necessarily identically distributed</em>) random variables with \\(\\mathbb{E}[X_i] = \\mu_i\\) and \\(\\operatorname{Var}(X_i) = \\sigma_i^2\\). Let \\(s_n^2 = \\sum_{i=1}^n \\sigma_i^2\\). If the Lindeberg condition holds: for every \\(\\varepsilon > 0\\),</p>
                        \\[\\frac{1}{s_n^2} \\sum_{i=1}^n \\mathbb{E}\\left[(X_i - \\mu_i)^2 \\cdot \\mathbf{1}\\{|X_i - \\mu_i| > \\varepsilon s_n\\}\\right] \\to 0,\\]
                        <p>then \\(\\frac{\\sum_{i=1}^n (X_i - \\mu_i)}{s_n} \\xrightarrow{d} N(0, 1)\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The meaning of the Lindeberg condition: no single \\(X_i\\) dominates the overall fluctuation of the sum. When all \\(X_i\\) are identically distributed, the Lindeberg condition is automatically satisfied (provided the variance is finite), reducing to the classical CLT. Feller further showed that under the additional condition \\(\\max_i \\sigma_i^2 / s_n^2 \\to 0\\), the Lindeberg condition is also necessary.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="clt-demo-viz"></div>
            `,
            visualizations: [
                {
                    id: 'clt-demo-viz',
                    title: 'CLT Demo: Convergence from Different Sources CLT — 不同源分布的收敛',
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
                    solution: 'With \\(s_n^2 = n\\sigma^2\\), the Lindeberg sum becomes \\(\\frac{1}{n\\sigma^2} \\sum_{i=1}^n \\mathbb{E}[(X_i - \\mu)^2 \\mathbf{1}\\{|X_i - \\mu| > \\varepsilon\\sigma\\sqrt{n}\\}]\\). Since all \\(X_i\\) are identically distributed, this equals \\(\\frac{1}{\\sigma^2} \\mathbb{E}[(X_1 - \\mu)^2 \\mathbf{1}\\{|X_1 - \\mu| > \\varepsilon\\sigma\\sqrt{n}\\}]\\). As \\(n \\to \\infty\\), the indicator \\(\\mathbf{1}\\{|X_1 - \\mu| > \\varepsilon\\sigma\\sqrt{n}\\} \\to 0\\) a.s. Since \\((X_1 - \\mu)^2\\) is integrable, by dominated convergence the expectation tends to 0.'
                },
                {
                    question: 'The Berry-Esseen bound for \\(X_i \\overset{\\text{i.i.d.}}{\\sim} \\text{Bernoulli}(1/2)\\) is \\(C \\rho / (\\sigma^3 \\sqrt{n})\\). Compute \\(\\rho/\\sigma^3\\) and estimate how large \\(n\\) must be for the sup-norm error to be at most 0.01.',
                    hint: 'For Bernoulli(1/2): \\(\\sigma^2 = 1/4\\), \\(\\mathbb{E}[|X - 1/2|^3] = 1/8\\).',
                    solution: 'We have \\(\\sigma^2 = 1/4\\), so \\(\\sigma^3 = 1/8\\). Also \\(\\rho = \\mathbb{E}[|X - 1/2|^3] = (1/2)^3 = 1/8\\). Thus \\(\\rho/\\sigma^3 = 1\\). With \\(C = 0.4748\\), the bound is \\(0.4748 / \\sqrt{n} \\leq 0.01\\), giving \\(\\sqrt{n} \\geq 47.48\\), i.e., \\(n \\geq 2255\\). In practice, the approximation is already quite good for \\(n \\geq 30\\).'
                }
            ]
        },

        // ================================================================
        // Section 4: Applications of the CLT
        // ================================================================
        {
            id: 'ch03-sec04',
            title: 'Applications of the CLT',
            content: `
                <h2>Applications of the CLT CLT的应用</h2>

                <p>The CLT is not merely a theoretical limit theorem — it is a practical tool for statistical inference. This section discusses its most common applications: normal approximation, continuity correction, and the Delta method.</p>

                <h3>Normal Approximation 正态近似</h3>

                <p>The most direct application of the CLT is to reduce probability calculations for complex distributions to the standard normal distribution. For an i.i.d. sample \\(X_1, \\ldots, X_n\\) (with known \\(\\mu, \\sigma^2\\)), when \\(n\\) is sufficiently large:</p>
                \\[P(\\bar{X}_n \\leq x) \\approx \\Phi\\!\\left(\\frac{x - \\mu}{\\sigma / \\sqrt{n}}\\right).\\]

                <div class="env-block example">
                    <div class="env-title">Example 3.16 (Insurance Claims)</div>
                    <div class="env-body">
                        <p>An insurance company holds \\(n = 10000\\) independent policies. Each policy's claim amount \\(X_i\\) satisfies \\(\\mathbb{E}[X_i] = 500\\) yuan and \\(\\operatorname{Var}(X_i) = 100^2\\). The total claims \\(S_n = \\sum X_i\\) have mean \\(5{,}000{,}000\\) yuan and standard deviation \\(100\\sqrt{10000} = 10{,}000\\) yuan.</p>
                        <p>The company has prepared a reserve of 5,020,000 yuan. Then</p>
                        \\[P(S_n > 5{,}020{,}000) \\approx 1 - \\Phi\\!\\left(\\frac{5{,}020{,}000 - 5{,}000{,}000}{10{,}000}\\right) = 1 - \\Phi(2) \\approx 0.0228.\\]
                    </div>
                </div>

                <h3>Normal Approximation to the Binomial & Continuity Correction 二项分布的正态近似与连续性修正</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.17 (De Moivre-Laplace CLT)</div>
                    <div class="env-body">
                        <p>Let \\(S_n \\sim \\text{Bin}(n, p)\\). Then as \\(n \\to \\infty\\),</p>
                        \\[\\frac{S_n - np}{\\sqrt{np(1-p)}} \\xrightarrow{d} N(0,1).\\]
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning: Continuity Correction</div>
                    <div class="env-body">
                        <p>When approximating a discrete distribution (binomial) with a continuous one (normal), a <strong>continuity correction</strong> (连续性修正) can significantly improve accuracy. The basic principle: for the probability of an integer value \\(k\\), "widen" the discrete event by half a unit:</p>
                        \\[P(S_n \\leq k) \\approx \\Phi\\!\\left(\\frac{k + 0.5 - np}{\\sqrt{np(1-p)}}\\right),\\]
                        \\[P(S_n = k) \\approx \\Phi\\!\\left(\\frac{k + 0.5 - np}{\\sqrt{np(1-p)}}\\right) - \\Phi\\!\\left(\\frac{k - 0.5 - np}{\\sqrt{np(1-p)}}\\right).\\]
                        <p>Rule of thumb: the normal approximation is usually sufficiently accurate when \\(np \\geq 5\\) and \\(n(1-p) \\geq 5\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="binomial-normal-viz"></div>

                <h3>Delta Method Preview Delta 方法预览</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 3.18 (Delta Method)</div>
                    <div class="env-body">
                        <p>Suppose \\(\\sqrt{n}(Y_n - \\theta) \\xrightarrow{d} N(0, \\sigma^2)\\), and \\(g\\) is differentiable at \\(\\theta\\) with \\(g'(\\theta) \\neq 0\\). Then</p>
                        \\[\\sqrt{n}(g(Y_n) - g(\\theta)) \\xrightarrow{d} N(0, \\sigma^2 [g'(\\theta)]^2).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By Taylor expansion: \\(g(Y_n) = g(\\theta) + g'(\\theta)(Y_n - \\theta) + o(Y_n - \\theta)\\). Therefore</p>
                        \\[\\sqrt{n}(g(Y_n) - g(\\theta)) = g'(\\theta) \\cdot \\sqrt{n}(Y_n - \\theta) + \\sqrt{n} \\cdot o(Y_n - \\theta).\\]
                        <p>Since \\(Y_n \\xrightarrow{P} \\theta\\), the remainder \\(\\sqrt{n} \\cdot o(Y_n - \\theta) \\xrightarrow{P} 0\\). By Slutsky's lemma,</p>
                        \\[\\sqrt{n}(g(Y_n) - g(\\theta)) \\xrightarrow{d} g'(\\theta) \\cdot N(0, \\sigma^2) = N(0, \\sigma^2 [g'(\\theta)]^2).\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 3.19 (Variance-Stabilizing Transformation)</div>
                    <div class="env-body">
                        <p>Let \\(X_i \\overset{\\text{i.i.d.}}{\\sim} \\text{Poisson}(\\lambda)\\). The CLT gives \\(\\sqrt{n}(\\bar{X}_n - \\lambda) \\xrightarrow{d} N(0, \\lambda)\\), where the asymptotic variance depends on the unknown parameter \\(\\lambda\\).</p>
                        <p>Take \\(g(x) = \\sqrt{x}\\), so \\(g'(\\lambda) = 1/(2\\sqrt{\\lambda})\\). By the Delta method:</p>
                        \\[\\sqrt{n}(\\sqrt{\\bar{X}_n} - \\sqrt{\\lambda}) \\xrightarrow{d} N\\!\\left(0, \\lambda \\cdot \\frac{1}{4\\lambda}\\right) = N\\!\\left(0, \\frac{1}{4}\\right).\\]
                        <p>The transformed asymptotic variance \\(1/4\\) no longer depends on \\(\\lambda\\) — this is the <strong>variance-stabilizing transformation</strong> (方差稳定化变换).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 3.20 (Second-Order Delta Method)</div>
                    <div class="env-body">
                        <p>When \\(g'(\\theta) = 0\\) but \\(g''(\\theta) \\neq 0\\), the first-order Delta method degenerates. In this case, a second-order expansion is needed:</p>
                        \\[n(g(Y_n) - g(\\theta)) \\xrightarrow{d} \\frac{\\sigma^2 g''(\\theta)}{2} \\chi^2_1.\\]
                        <p>This has important applications in statistical testing, for example when testing whether a variance equals a specific value.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="delta-method-viz"></div>
            `,
            visualizations: [
                {
                    id: 'binomial-normal-viz',
                    title: 'Normal Approximation to the Binomial 二项分布的正态近似',
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
                    title: 'Delta Method: Transformed Distribution Delta 方法 — 变换后的分布',
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

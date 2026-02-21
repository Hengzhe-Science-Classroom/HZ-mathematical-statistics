window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch10',
    number: 10,
    title: '似然比检验',
    subtitle: 'Likelihood Ratio Tests',
    sections: [
        // ============================================================
        // Section 1: Neyman-Pearson 引理
        // ============================================================
        {
            id: 'ch10-sec01',
            title: 'Neyman-Pearson 引理',
            content: `
                <h2>Neyman-Pearson 引理</h2>

                <p>假设检验的核心问题是：在控制犯第一类错误（拒真）概率的前提下，如何使检验的功效（检出力）最大？Neyman-Pearson 引理给出了简单假设对简单假设情形下的最优解。这一结果不仅是假设检验理论的基石，也为后续发展的似然比检验提供了根本性的启示。</p>

                <h3>问题设定</h3>

                <p>考虑一个参数空间 \\(\\Theta = \\{\\theta_0, \\theta_1\\}\\) 只有两个元素的检验问题：</p>
                \\[H_0: \\theta = \\theta_0 \\quad \\text{vs} \\quad H_1: \\theta = \\theta_1\\]

                <p>这里 \\(H_0\\) 和 \\(H_1\\) 都是<strong>简单假设</strong>（simple hypothesis），即参数值完全确定。设观测数据 \\(X = (X_1, \\ldots, X_n)\\) 的联合密度（或概率质量函数）在 \\(\\theta_0\\) 下为 \\(f(\\mathbf{x} \\mid \\theta_0)\\)，在 \\(\\theta_1\\) 下为 \\(f(\\mathbf{x} \\mid \\theta_1)\\)。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.1 (似然比 Likelihood Ratio)</div>
                    <div class="env-body">
                        <p>给定观测 \\(\\mathbf{x}\\)，<strong>似然比</strong>定义为</p>
                        \\[\\Lambda(\\mathbf{x}) = \\frac{L(\\theta_1 \\mid \\mathbf{x})}{L(\\theta_0 \\mid \\mathbf{x})} = \\frac{f(\\mathbf{x} \\mid \\theta_1)}{f(\\mathbf{x} \\mid \\theta_0)}\\]
                        <p>当 \\(\\Lambda(\\mathbf{x})\\) 很大时，数据在 \\(\\theta_1\\) 下比在 \\(\\theta_0\\) 下更可能出现，因此倾向于拒绝 \\(H_0\\)。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.2 (最大功效检验 Most Powerful Test)</div>
                    <div class="env-body">
                        <p>设 \\(\\mathcal{C}\\) 是所有显著性水平为 \\(\\alpha\\) 的检验的集合。检验 \\(\\varphi^*\\) 称为水平 \\(\\alpha\\) 的<strong>最大功效检验</strong>（MP test），如果</p>
                        \\[E_{\\theta_0}[\\varphi^*] \\le \\alpha \\quad \\text{and} \\quad E_{\\theta_1}[\\varphi^*] \\ge E_{\\theta_1}[\\varphi] \\quad \\forall \\varphi \\in \\mathcal{C}\\]
                        <p>其中 \\(\\varphi(\\mathbf{x}) \\in [0,1]\\) 是随机化检验函数，表示拒绝 \\(H_0\\) 的概率。</p>
                    </div>
                </div>

                <h3>Neyman-Pearson 引理</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.1 (Neyman-Pearson Lemma)</div>
                    <div class="env-body">
                        <p>考虑检验 \\(H_0: \\theta = \\theta_0\\) vs \\(H_1: \\theta = \\theta_1\\)。对于给定的 \\(\\alpha \\in (0,1)\\)，存在常数 \\(k \\ge 0\\) 和 \\(\\gamma \\in [0,1]\\) 使得检验</p>
                        \\[\\varphi^*(\\mathbf{x}) = \\begin{cases} 1 & \\text{if } \\Lambda(\\mathbf{x}) > k \\\\ \\gamma & \\text{if } \\Lambda(\\mathbf{x}) = k \\\\ 0 & \\text{if } \\Lambda(\\mathbf{x}) < k \\end{cases}\\]
                        <p>满足 \\(E_{\\theta_0}[\\varphi^*] = \\alpha\\)，并且 \\(\\varphi^*\\) 是水平 \\(\\alpha\\) 下的最大功效检验。</p>
                        <p>更进一步，任何水平 \\(\\alpha\\) 的 MP 检验在几乎处处意义下必然具有上述形式。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>设 \\(\\varphi\\) 是任意满足 \\(E_{\\theta_0}[\\varphi] \\le \\alpha\\) 的检验函数。我们需要证明 \\(E_{\\theta_1}[\\varphi^*] \\ge E_{\\theta_1}[\\varphi]\\)。</p>
                        <p>考虑差值</p>
                        \\[E_{\\theta_1}[\\varphi^*] - E_{\\theta_1}[\\varphi] = \\int (\\varphi^* - \\varphi) f(\\mathbf{x} \\mid \\theta_1) \\, d\\mu(\\mathbf{x})\\]
                        <p>由 \\(\\varphi^*\\) 的定义：</p>
                        <ul>
                            <li>当 \\(\\Lambda(\\mathbf{x}) > k\\) 时，\\(\\varphi^* = 1\\)，所以 \\(\\varphi^* - \\varphi \\ge 0\\)，且 \\(f(\\mathbf{x}|\\theta_1) > k \\cdot f(\\mathbf{x}|\\theta_0)\\)</li>
                            <li>当 \\(\\Lambda(\\mathbf{x}) < k\\) 时，\\(\\varphi^* = 0\\)，所以 \\(\\varphi^* - \\varphi \\le 0\\)，且 \\(f(\\mathbf{x}|\\theta_1) < k \\cdot f(\\mathbf{x}|\\theta_0)\\)</li>
                        </ul>
                        <p>在两种情况下都有 \\((\\varphi^* - \\varphi)(f(\\mathbf{x}|\\theta_1) - k \\cdot f(\\mathbf{x}|\\theta_0)) \\ge 0\\)。因此</p>
                        \\[\\int (\\varphi^* - \\varphi)(f(\\mathbf{x}|\\theta_1) - k f(\\mathbf{x}|\\theta_0)) \\, d\\mu \\ge 0\\]
                        <p>展开得</p>
                        \\[E_{\\theta_1}[\\varphi^*] - E_{\\theta_1}[\\varphi] \\ge k(E_{\\theta_0}[\\varphi^*] - E_{\\theta_0}[\\varphi]) = k(\\alpha - E_{\\theta_0}[\\varphi]) \\ge 0\\]
                        <p>最后一个不等式因为 \\(k \\ge 0\\) 且 \\(E_{\\theta_0}[\\varphi] \\le \\alpha\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 10.1 (正态均值的 NP 检验)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\)，\\(\\sigma^2\\) 已知。检验 \\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu = \\mu_1\\)（其中 \\(\\mu_1 > \\mu_0\\)）。似然比为</p>
                        \\[\\Lambda(\\mathbf{x}) = \\frac{\\prod_{i=1}^n \\frac{1}{\\sqrt{2\\pi}\\sigma} e^{-(x_i - \\mu_1)^2/(2\\sigma^2)}}{\\prod_{i=1}^n \\frac{1}{\\sqrt{2\\pi}\\sigma} e^{-(x_i - \\mu_0)^2/(2\\sigma^2)}} = \\exp\\left\\{\\frac{(\\mu_1 - \\mu_0)}{\\sigma^2} \\left(\\sum_{i=1}^n x_i - \\frac{n(\\mu_0 + \\mu_1)}{2}\\right)\\right\\}\\]
                        <p>因为 \\(\\mu_1 > \\mu_0\\)，\\(\\Lambda(\\mathbf{x}) > k\\) 等价于 \\(\\bar{x} > c\\)。因此 NP 最大功效检验拒绝域为 \\(\\bar{X} > \\mu_0 + z_\\alpha \\cdot \\sigma / \\sqrt{n}\\)。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition: 为什么似然比是最优的？</div>
                    <div class="env-body">
                        <p>想象你是一个侦探，手中有两个嫌疑人（\\(\\theta_0\\) 和 \\(\\theta_1\\)）。对于每条线索（观测值），你计算"这条线索在嫌疑人 1 犯案时出现的可能性"与"在嫌疑人 0 犯案时出现的可能性"之比。当这个比值足够大时，你有理由认为嫌疑人 1 更可能。NP 引理告诉我们：这种基于似然比的判断方式是所有判断策略中最灵敏的。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="np-lemma-viz"></div>
            `,
            visualizations: [
                {
                    id: 'np-lemma-viz',
                    title: 'Interactive: Neyman-Pearson 引理',
                    description: '可视化两个正态分布下的似然比检验。拖动阈值观察拒绝域和功效的变化。',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 80, originY: 320,
                            scale: 60
                        });

                        var mu0 = 0, mu1 = 2, sigma = 1;
                        var alphaSlider = VizEngine.createSlider(controls, 'alpha (Type I error)', 0.01, 0.30, 0.05, 0.01, function(v) { draw(); });
                        var mu1Slider = VizEngine.createSlider(controls, 'mu1', 0.5, 4.0, 2.0, 0.1, function(v) { mu1 = v; draw(); });

                        function draw() {
                            var alpha = parseFloat(alphaSlider.value);
                            mu1 = parseFloat(mu1Slider.value);

                            viz.clear();

                            // Custom axes
                            var ctx = viz.ctx;
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(80, 320); ctx.lineTo(540, 320); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(80, 320); ctx.lineTo(80, 20); ctx.stroke();

                            // x-axis labels
                            ctx.fillStyle = viz.colors.text; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            for (var tick = -1; tick <= 6; tick++) {
                                var sx = 80 + tick * 60;
                                if (sx > 40 && sx < 550) {
                                    ctx.fillText(tick.toString(), sx, 324);
                                }
                            }

                            var pdf0 = function(x) { return VizEngine.normalPDF(x, mu0, sigma); };
                            var pdf1 = function(x) { return VizEngine.normalPDF(x, mu1, sigma); };

                            // Critical value from standard normal quantile approximation
                            // z_alpha such that P(Z > z_alpha) = alpha
                            var zAlpha = 0;
                            // Simple bisection for inverse normal
                            var lo = -4, hi = 4;
                            for (var iter = 0; iter < 50; iter++) {
                                var mid = (lo + hi) / 2;
                                var pval = 1 - VizEngine.normalCDF(mid, 0, 1);
                                if (pval > alpha) lo = mid; else hi = mid;
                            }
                            zAlpha = (lo + hi) / 2;
                            var criticalValue = mu0 + zAlpha * sigma;

                            // Shade rejection region under H0 (Type I error = alpha)
                            viz.shadeUnder(pdf0, criticalValue, 6, viz.colors.red + '44');

                            // Shade power region under H1
                            viz.shadeUnder(pdf1, criticalValue, 6, viz.colors.green + '44');

                            // Draw PDFs
                            viz.drawFunction(pdf0, -3, 6, viz.colors.blue, 2.5);
                            viz.drawFunction(pdf1, -3, 6, viz.colors.orange, 2.5);

                            // Critical value line
                            var scx = 80 + criticalValue * 60;
                            ctx.strokeStyle = viz.colors.white; ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath(); ctx.moveTo(scx, 20); ctx.lineTo(scx, 320); ctx.stroke();
                            ctx.setLineDash([]);

                            // Compute power
                            var power = 1 - VizEngine.normalCDF(criticalValue, mu1, sigma);

                            // Labels
                            viz.screenText('f(x | H0)', 80 + mu0 * 60, 320 - pdf0(mu0) * 60 - 18, viz.colors.blue, 13, 'center');
                            viz.screenText('f(x | H1)', 80 + mu1 * 60, 320 - pdf1(mu1) * 60 - 18, viz.colors.orange, 13, 'center');
                            viz.screenText('c = ' + criticalValue.toFixed(2), scx + 4, 30, viz.colors.white, 12, 'left');

                            // Info panel
                            viz.screenText('alpha = ' + alpha.toFixed(2), 420, 50, viz.colors.red, 13, 'left');
                            viz.screenText('Power = ' + power.toFixed(3), 420, 70, viz.colors.green, 13, 'left');
                            viz.screenText('Type II = ' + (1 - power).toFixed(3), 420, 90, viz.colors.yellow, 13, 'left');
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\(X \\sim \\text{Bernoulli}(p)\\)，检验 \\(H_0: p = 0.5\\) vs \\(H_1: p = 0.7\\)，基于 \\(n\\) 次独立观测。写出似然比，并说明 NP 最大功效检验的拒绝域形式。',
                    hint: '似然比可以表示为 \\(\\left(\\frac{0.7}{0.5}\\right)^{\\sum x_i} \\left(\\frac{0.3}{0.5}\\right)^{n - \\sum x_i}\\)，这是 \\(\\sum x_i\\) 的单调递增函数。',
                    solution: '似然比为 \\(\\Lambda = \\prod_{i=1}^n \\frac{0.7^{x_i} \\cdot 0.3^{1-x_i}}{0.5^{x_i} \\cdot 0.5^{1-x_i}} = \\left(\\frac{7}{5}\\right)^{\\sum x_i} \\left(\\frac{3}{5}\\right)^{n - \\sum x_i}\\)。取对数得 \\(\\log \\Lambda = (\\sum x_i) \\log \\frac{7}{3} + n \\log \\frac{3}{5}\\)。因为 \\(\\log(7/3) > 0\\)，\\(\\Lambda > k\\) 等价于 \\(\\sum X_i > c\\)。在 \\(H_0\\) 下，\\(\\sum X_i \\sim \\text{Binomial}(n, 0.5)\\)，选择 \\(c\\) 使得 \\(P_{H_0}(\\sum X_i > c) = \\alpha\\)。由于 \\(\\sum X_i\\) 是离散的，可能需要随机化才能精确达到水平 \\(\\alpha\\)。'
                },
                {
                    question: '证明 Neyman-Pearson 检验的功效函数 \\(\\beta(\\theta_1)\\) 满足 \\(\\beta(\\theta_1) \\ge \\alpha\\)，即功效不低于显著性水平（除非 \\(f(\\mathbf{x}|\\theta_0) = f(\\mathbf{x}|\\theta_1)\\) a.e.）。',
                    hint: '考虑常值检验 \\(\\varphi(\\mathbf{x}) = \\alpha\\)（以概率 \\(\\alpha\\) 随机拒绝），它的功效恰好是 \\(\\alpha\\)。',
                    solution: '常值检验 \\(\\varphi(\\mathbf{x}) \\equiv \\alpha\\) 满足 \\(E_{\\theta_0}[\\varphi] = \\alpha\\)，因此属于水平 \\(\\alpha\\) 的检验类。其功效为 \\(E_{\\theta_1}[\\varphi] = \\alpha\\)。由 NP 引理，MP 检验 \\(\\varphi^*\\) 的功效满足 \\(E_{\\theta_1}[\\varphi^*] \\ge E_{\\theta_1}[\\varphi] = \\alpha\\)。等号成立当且仅当 \\(\\Lambda(\\mathbf{x}) = 1\\) a.e.，即两个分布几乎处处相同。'
                },
                {
                    question: '设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Exp}(\\lambda)\\)，检验 \\(H_0: \\lambda = 1\\) vs \\(H_1: \\lambda = 2\\)。求水平 \\(\\alpha\\) 的 NP 最大功效检验。',
                    hint: '写出似然比并化简。注意 \\(\\Lambda\\) 是 \\(\\sum x_i\\) 的单调函数。在 \\(H_0\\) 下，\\(2\\sum X_i \\sim \\chi^2(2n)\\)。',
                    solution: '似然比 \\(\\Lambda = \\frac{2^n e^{-2\\sum x_i}}{e^{-\\sum x_i}} = 2^n e^{-\\sum x_i}\\)。\\(\\Lambda > k\\) 等价于 \\(\\sum x_i < c\\)（因为指数函数递减）。在 \\(H_0\\) 下，\\(X_i \\sim \\text{Exp}(1)\\)，所以 \\(2\\sum X_i \\sim \\chi^2(2n)\\)。拒绝域为 \\(2\\sum X_i < \\chi^2_{1-\\alpha}(2n)\\)，其中 \\(\\chi^2_{1-\\alpha}(2n)\\) 是 \\(\\chi^2(2n)\\) 分布的 \\(1-\\alpha\\) 下分位数。'
                }
            ]
        },
        // ============================================================
        // Section 2: 一致最大功效检验
        // ============================================================
        {
            id: 'ch10-sec02',
            title: '一致最大功效检验',
            content: `
                <h2>一致最大功效检验</h2>

                <p>Neyman-Pearson 引理处理的是简单对简单的假设检验。在实际应用中，备择假设通常是复合的（composite），例如 \\(H_1: \\theta > \\theta_0\\)。自然的问题是：是否存在一个检验，在所有备择假设值下都是最大功效的？这就引出了<strong>一致最大功效检验</strong>（UMP test）的概念。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.3 (一致最大功效检验 UMP Test)</div>
                    <div class="env-body">
                        <p>设检验问题为 \\(H_0: \\theta \\in \\Theta_0\\) vs \\(H_1: \\theta \\in \\Theta_1\\)。检验 \\(\\varphi^*\\) 称为水平 \\(\\alpha\\) 的<strong>一致最大功效检验</strong>（UMP test），如果：</p>
                        <ol>
                            <li>\\(\\sup_{\\theta \\in \\Theta_0} E_\\theta[\\varphi^*] \\le \\alpha\\)（控制犯错概率）</li>
                            <li>对所有 \\(\\theta \\in \\Theta_1\\) 和所有满足 (1) 的检验 \\(\\varphi\\)，都有 \\(E_\\theta[\\varphi^*] \\ge E_\\theta[\\varphi]\\)（在每个备择参数值下功效最大）</li>
                        </ol>
                    </div>
                </div>

                <h3>单调似然比与 Karlin-Rubin 定理</h3>

                <p>UMP 检验的存在性与分布族的<strong>单调似然比</strong>（Monotone Likelihood Ratio, MLR）性质密切相关。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.4 (单调似然比 MLR)</div>
                    <div class="env-body">
                        <p>设 \\(\\{f(\\mathbf{x} | \\theta): \\theta \\in \\Theta\\}\\) 是一个参数族，\\(T(\\mathbf{x})\\) 是一个实值统计量。如果对所有 \\(\\theta_1 > \\theta_0\\)，似然比</p>
                        \\[\\frac{f(\\mathbf{x} | \\theta_1)}{f(\\mathbf{x} | \\theta_0)}\\]
                        <p>是 \\(T(\\mathbf{x})\\) 的<strong>非递减函数</strong>（在 \\(f(\\mathbf{x}|\\theta_0) > 0\\) 的集合上），则称该族关于 \\(T\\) 具有<strong>单调似然比</strong>性质。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 10.2 (指数族的 MLR 性质)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n\\) 来自单参数指数族</p>
                        \\[f(x | \\theta) = h(x) c(\\theta) \\exp(\\eta(\\theta) T(x))\\]
                        <p>如果 \\(\\eta(\\theta)\\) 是 \\(\\theta\\) 的严格递增函数，则似然比为</p>
                        \\[\\frac{f(\\mathbf{x}|\\theta_1)}{f(\\mathbf{x}|\\theta_0)} = \\frac{c(\\theta_1)^n}{c(\\theta_0)^n} \\exp\\left\\{(\\eta(\\theta_1) - \\eta(\\theta_0)) \\sum_{i=1}^n T(x_i)\\right\\}\\]
                        <p>当 \\(\\theta_1 > \\theta_0\\) 时，\\(\\eta(\\theta_1) - \\eta(\\theta_0) > 0\\)，所以似然比是 \\(\\sum T(X_i)\\) 的严格递增函数。因此指数族（在 \\(\\eta\\) 递增的条件下）具有 MLR 性质。</p>
                        <p>例如：正态 \\(N(\\mu, \\sigma^2)\\)（\\(\\sigma^2\\) 已知）关于 \\(\\bar{X}\\)，Poisson 关于 \\(\\sum X_i\\)，指数分布关于 \\(\\sum X_i\\) 等。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.2 (Karlin-Rubin Theorem)</div>
                    <div class="env-body">
                        <p>设 \\(\\{f(\\mathbf{x}|\\theta)\\}\\) 关于统计量 \\(T(\\mathbf{x})\\) 具有 MLR 性质。考虑单边检验</p>
                        \\[H_0: \\theta \\le \\theta_0 \\quad \\text{vs} \\quad H_1: \\theta > \\theta_0\\]
                        <p>则 UMP 水平 \\(\\alpha\\) 检验具有拒绝域的形式</p>
                        \\[T(\\mathbf{x}) > t_0\\]
                        <p>其中 \\(t_0\\) 由 \\(P_{\\theta_0}(T(\\mathbf{X}) > t_0) = \\alpha\\) 确定（可能需要随机化）。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Sketch)</div>
                    <div class="env-body">
                        <p>对于任意固定的 \\(\\theta_1 > \\theta_0\\)，由 MLR 性质和 NP 引理，水平 \\(\\alpha\\) 下检验 \\(H_0: \\theta = \\theta_0\\) vs \\(H_1: \\theta = \\theta_1\\) 的 MP 检验形式为 "拒绝当 \\(T > t_0\\)"。关键在于：临界值 \\(t_0\\) 只依赖于 \\(\\theta_0\\) 和 \\(\\alpha\\)，而不依赖于 \\(\\theta_1\\) 的具体值。因此同一个检验对所有 \\(\\theta_1 > \\theta_0\\) 都是 MP 的，即为 UMP。</p>
                        <p>还需验证 \\(\\sup_{\\theta \\le \\theta_0} E_\\theta[\\varphi] \\le \\alpha\\)。这由功效函数 \\(\\beta(\\theta) = P_\\theta(T > t_0)\\) 在 MLR 条件下的单调性保证：对 \\(\\theta \\le \\theta_0\\)，\\(\\beta(\\theta) \\le \\beta(\\theta_0) = \\alpha\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h3>双侧检验中 UMP 不存在</h3>

                <div class="env-block warning">
                    <div class="env-title">Warning: UMP Tests Do Not Exist for Two-Sided Alternatives</div>
                    <div class="env-body">
                        <p>考虑 \\(H_0: \\theta = \\theta_0\\) vs \\(H_1: \\theta \\ne \\theta_0\\)。对于 \\(\\theta_1 > \\theta_0\\)，NP 检验拒绝 \\(T\\) 大的观测；但对 \\(\\theta_1 < \\theta_0\\)，NP 检验拒绝 \\(T\\) 小的观测。这两个方向的检验互相矛盾，因此不可能同时在两个方向上达到最大功效。</p>
                        <p>对于双侧备择假设，常用的替代方案包括：</p>
                        <ul>
                            <li><strong>一致最大功效无偏检验</strong>（UMPU test）</li>
                            <li><strong>广义似然比检验</strong>（GLRT，见下一节）</li>
                        </ul>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="mlr-viz"></div>
            `,
            visualizations: [
                {
                    id: 'mlr-viz',
                    title: 'Interactive: 单调似然比与 UMP 检验',
                    description: '观察指数族的似然比如何随统计量 T 单调变化，以及不同 theta_1 值下拒绝域不变。',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 80, originY: 320,
                            scale: 25
                        });

                        var theta0 = 2;
                        var theta1Slider = VizEngine.createSlider(controls, 'theta1', 2.5, 6.0, 4.0, 0.1, function() { draw(); });
                        var nSlider = VizEngine.createSlider(controls, 'n (sample size)', 1, 10, 5, 1, function() { draw(); });

                        function draw() {
                            var theta1 = parseFloat(theta1Slider.value);
                            var n = parseInt(nSlider.value);

                            viz.clear();

                            var ctx = viz.ctx;
                            // Custom axes
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(80, 320); ctx.lineTo(540, 320); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(80, 320); ctx.lineTo(80, 20); ctx.stroke();

                            // Plot likelihood ratio as function of T = sum(Xi)
                            // For Poisson: f(x|theta) = theta^x * e^{-theta} / x!
                            // LR = (theta1/theta0)^T * exp(-n(theta1 - theta0))
                            // where T = sum(Xi)

                            // Plot: log-likelihood ratio vs T for Poisson
                            var logC = -n * (theta1 - theta0);
                            var logR = Math.log(theta1 / theta0);

                            var maxT = Math.floor(n * theta1 * 2);
                            if (maxT > 16) maxT = 16;

                            // Scale for y-axis (log LR)
                            var yMin = logC;
                            var yMax = logC + maxT * logR;
                            var yRange = yMax - yMin;
                            if (yRange < 1) yRange = 1;
                            var yScale = 250 / yRange;

                            // Draw log-LR as a function of T
                            ctx.fillStyle = viz.colors.text; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            for (var t = 0; t <= maxT; t++) {
                                var sx = 80 + t * (440 / maxT);
                                if (t % Math.max(1, Math.floor(maxT / 8)) === 0) {
                                    ctx.fillText(t.toString(), sx, 324);
                                }
                                var logLR = logC + t * logR;
                                var sy = 320 - (logLR - yMin) * yScale;
                                viz.screenText(null, sx, sy, null);

                                // Draw point
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath(); ctx.arc(sx, sy, 4, 0, Math.PI * 2); ctx.fill();

                                // Connect with line
                                if (t > 0) {
                                    var prevLogLR = logC + (t - 1) * logR;
                                    var prevSy = 320 - (prevLogLR - yMin) * yScale;
                                    var prevSx = 80 + (t - 1) * (440 / maxT);
                                    ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2;
                                    ctx.beginPath(); ctx.moveTo(prevSx, prevSy); ctx.lineTo(sx, sy); ctx.stroke();
                                }
                            }

                            // Critical value line: reject when T > t0
                            // Under H0: T ~ Poisson(n * theta0), want P(T > t0) = 0.05
                            var alpha = 0.05;
                            var meanH0 = n * theta0;
                            // Find t0 via Poisson CDF
                            var cumProb = 0;
                            var t0 = 0;
                            for (var t = 0; t <= 200; t++) {
                                var pmf = Math.exp(-meanH0 + t * Math.log(meanH0) - VizEngine.lgamma(t + 1));
                                cumProb += pmf;
                                if (cumProb > 1 - alpha) { t0 = t; break; }
                            }

                            if (t0 <= maxT) {
                                var critSx = 80 + t0 * (440 / maxT);
                                ctx.strokeStyle = viz.colors.red; ctx.lineWidth = 2;
                                ctx.setLineDash([6, 4]);
                                ctx.beginPath(); ctx.moveTo(critSx, 20); ctx.lineTo(critSx, 320); ctx.stroke();
                                ctx.setLineDash([]);

                                // Shade rejection region
                                ctx.fillStyle = viz.colors.red + '22';
                                ctx.fillRect(critSx, 20, 540 - critSx, 300);

                                viz.screenText('Reject H0', (critSx + 540) / 2, 40, viz.colors.red, 12);
                                viz.screenText('t0 = ' + t0, critSx + 4, 310, viz.colors.red, 11, 'left');
                            }

                            // Labels
                            viz.screenText('T = sum(Xi)', 310, 345, viz.colors.text, 12);
                            viz.screenText('log(LR)', 30, 170, viz.colors.blue, 12);
                            viz.screenText('Poisson(' + theta0 + ') vs Poisson(' + theta1.toFixed(1) + '), n=' + n, 310, 10, viz.colors.white, 13);

                            // Show power
                            var meanH1 = n * theta1;
                            var powerCum = 0;
                            for (var t = 0; t <= t0; t++) {
                                var pmf1 = Math.exp(-meanH1 + t * Math.log(meanH1) - VizEngine.lgamma(t + 1));
                                powerCum += pmf1;
                            }
                            var power = 1 - powerCum;
                            viz.screenText('Power = ' + power.toFixed(3), 420, 60, viz.colors.green, 12, 'left');

                            // Y-axis labels
                            ctx.fillStyle = viz.colors.text; ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
                            var nTicks = 5;
                            for (var i = 0; i <= nTicks; i++) {
                                var yVal = yMin + (yRange * i / nTicks);
                                var tickSy = 320 - i * (250 / nTicks);
                                ctx.fillText(yVal.toFixed(1), 75, tickSy);
                            }
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, 1)\\)。证明对于检验 \\(H_0: \\mu \\le 0\\) vs \\(H_1: \\mu > 0\\)，UMP 水平 \\(\\alpha\\) 检验的拒绝域为 \\(\\bar{X} > z_\\alpha / \\sqrt{n}\\)。',
                    hint: '正态分布关于 \\(\\bar{X}\\) 具有 MLR 性质，直接应用 Karlin-Rubin 定理。',
                    solution: '正态密度可写为 \\(f(x|\\mu) = \\frac{1}{\\sqrt{2\\pi}} \\exp(-x^2/2 + \\mu x - \\mu^2/2)\\)，这是以 \\(\\eta(\\mu) = \\mu\\)（关于 \\(\\mu\\) 递增）为自然参数、\\(T(x) = x\\) 为充分统计量的指数族。因此联合密度关于 \\(\\sum X_i\\)（等价于 \\(\\bar{X}\\)）具有 MLR 性质。由 Karlin-Rubin 定理，UMP 检验拒绝当 \\(\\bar{X} > c\\)。在 \\(\\mu = 0\\)（边界值）下，\\(\\bar{X} \\sim N(0, 1/n)\\)，所以 \\(c = z_\\alpha / \\sqrt{n}\\)。'
                },
                {
                    question: '解释为什么 \\(H_0: \\mu = 0\\) vs \\(H_1: \\mu \\ne 0\\) 没有 UMP 检验（对正态总体 \\(N(\\mu, 1)\\)），并说明通常使用什么检验代替。',
                    hint: '考虑 \\(\\mu > 0\\) 和 \\(\\mu < 0\\) 两种情形下 NP 检验的方向。',
                    solution: '对于 \\(\\mu_1 > 0\\)，NP MP 检验拒绝大的 \\(\\bar{X}\\)（右尾）；对于 \\(\\mu_1 < 0\\)，NP MP 检验拒绝小的 \\(\\bar{X}\\)（左尾）。假设存在 UMP 检验 \\(\\varphi^*\\)，则它必须同时在右尾和左尾达到最大功效，这是不可能的（除非 \\(\\varphi^* = \\alpha\\) a.e.）。通常的替代方案是双尾 z-检验：拒绝当 \\(|\\bar{X}| > z_{\\alpha/2}/\\sqrt{n}\\)。此检验是 UMPU（一致最大功效无偏）检验。'
                },
                {
                    question: '设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Exp}(\\lambda)\\)。对 \\(H_0: \\lambda \\ge \\lambda_0\\) vs \\(H_1: \\lambda < \\lambda_0\\)，求 UMP 水平 \\(\\alpha\\) 检验。',
                    hint: '指数族的密度为 \\(f(x|\\lambda) = \\lambda e^{-\\lambda x}\\)，自然参数 \\(\\eta(\\lambda) = -\\lambda\\) 关于 \\(\\lambda\\) 递减。注意递减意味着似然比关于 \\(T = \\sum X_i\\) 的单调方向。',
                    solution: '写成指数族形式：\\(f(x|\\lambda) = \\lambda \\exp(-\\lambda x)\\)，自然参数 \\(\\eta = -\\lambda\\) 关于 \\(\\lambda\\) 递减。因此关于 \\(T = \\sum X_i\\)，似然比在 \\(\\lambda_1 < \\lambda_0\\) 时（\\(\\eta_1 > \\eta_0\\)）是 \\(T\\) 的递增函数。等价地，\\(\\Lambda > k\\) 等价于 \\(T > c\\)。UMP 检验拒绝当 \\(\\sum X_i > c\\)。在 \\(H_0\\) 边界 \\(\\lambda = \\lambda_0\\) 下，\\(2\\lambda_0 \\sum X_i \\sim \\chi^2(2n)\\)，所以 \\(c = \\chi^2_\\alpha(2n) / (2\\lambda_0)\\)。'
                }
            ]
        },
        // ============================================================
        // Section 3: 广义似然比检验
        // ============================================================
        {
            id: 'ch10-sec03',
            title: '广义似然比检验',
            content: `
                <h2>广义似然比检验</h2>

                <p>当 UMP 检验不存在（如双侧检验或多参数情形）时，我们需要一种通用的构造检验的方法。<strong>广义似然比检验</strong>（Generalized Likelihood Ratio Test, GLRT）是最广泛使用的方法之一。其基本思想是：比较在约束（\\(H_0\\)）下和无约束下的最大似然值。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.5 (广义似然比统计量 GLRT Statistic)</div>
                    <div class="env-body">
                        <p>设参数空间为 \\(\\Theta\\)，零假设对应的参数子空间为 \\(\\Theta_0 \\subset \\Theta\\)。<strong>广义似然比统计量</strong>定义为</p>
                        \\[\\Lambda(\\mathbf{x}) = \\frac{\\sup_{\\theta \\in \\Theta_0} L(\\theta | \\mathbf{x})}{\\sup_{\\theta \\in \\Theta} L(\\theta | \\mathbf{x})}\\]
                        <p>显然 \\(0 \\le \\Lambda(\\mathbf{x}) \\le 1\\)。当 \\(\\Lambda\\) 接近 0 时，说明约束模型（\\(H_0\\)）的最佳拟合远不如无约束模型，因此有理由拒绝 \\(H_0\\)。</p>
                        <p>GLRT 拒绝域为 \\(\\Lambda(\\mathbf{x}) < c\\)，或等价地 \\(-2 \\log \\Lambda(\\mathbf{x}) > c'\\)。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (符号约定)</div>
                    <div class="env-body">
                        <p>注意不同教材对似然比的定义方向可能不同。有些定义分子为无约束 MLE、分母为约束 MLE（此时 \\(\\Lambda \\ge 1\\)，拒绝大值）。本课程采用 Casella & Berger 的约定：分子是约束最大似然，分母是全局最大似然，因此 \\(\\Lambda \\in [0, 1]\\)，拒绝小值。</p>
                    </div>
                </div>

                <h3>Example: 正态均值的 GLRT</h3>

                <div class="env-block example">
                    <div class="env-title">Example 10.3 (单正态均值检验)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\)，\\(\\sigma^2\\) 已知。检验 \\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu \\ne \\mu_0\\)。</p>
                        <p><strong>分母</strong>：无约束 MLE 为 \\(\\hat{\\mu} = \\bar{X}\\)，代入得</p>
                        \\[\\sup_\\mu L(\\mu) = \\left(\\frac{1}{2\\pi\\sigma^2}\\right)^{n/2} \\exp\\left(-\\frac{1}{2\\sigma^2} \\sum (X_i - \\bar{X})^2\\right)\\]
                        <p><strong>分子</strong>：在 \\(\\mu = \\mu_0\\) 约束下</p>
                        \\[L(\\mu_0) = \\left(\\frac{1}{2\\pi\\sigma^2}\\right)^{n/2} \\exp\\left(-\\frac{1}{2\\sigma^2} \\sum (X_i - \\mu_0)^2\\right)\\]
                        <p>因此</p>
                        \\[\\Lambda = \\exp\\left(-\\frac{n}{2\\sigma^2}(\\bar{X} - \\mu_0)^2\\right)\\]
                        <p>所以 \\(-2\\log \\Lambda = \\frac{n(\\bar{X} - \\mu_0)^2}{\\sigma^2} = Z^2\\)，其中 \\(Z = \\frac{\\bar{X} - \\mu_0}{\\sigma/\\sqrt{n}} \\sim N(0,1)\\)。拒绝域 \\(-2\\log\\Lambda > c'\\) 等价于 \\(|Z| > \\sqrt{c'}\\)，即标准的双尾 z-检验。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 10.4 (两正态均值相等的检验)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_m \\overset{\\text{iid}}{\\sim} N(\\mu_1, \\sigma^2)\\)，\\(Y_1, \\ldots, Y_n \\overset{\\text{iid}}{\\sim} N(\\mu_2, \\sigma^2)\\)，\\(\\sigma^2\\) 已知。检验 \\(H_0: \\mu_1 = \\mu_2\\) vs \\(H_1: \\mu_1 \\ne \\mu_2\\)。</p>
                        <p>全参数空间 \\(\\Theta = \\{(\\mu_1, \\mu_2): \\mu_1, \\mu_2 \\in \\mathbb{R}\\}\\)，约束空间 \\(\\Theta_0 = \\{(\\mu, \\mu): \\mu \\in \\mathbb{R}\\}\\)。</p>
                        <p>经计算，GLRT 统计量化简为</p>
                        \\[-2\\log\\Lambda = \\frac{mn}{m+n} \\cdot \\frac{(\\bar{X} - \\bar{Y})^2}{\\sigma^2}\\]
                        <p>在 \\(H_0\\) 下，\\(\\bar{X} - \\bar{Y} \\sim N(0, \\sigma^2(1/m + 1/n))\\)，所以 \\(-2\\log\\Lambda \\sim \\chi^2(1)\\)。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition: GLRT 的几何直觉</div>
                    <div class="env-body">
                        <p>把似然函数看成参数空间上的一座"山"。无约束 MLE 是山顶（海拔最高点），约束 MLE 是限制在某条路径（\\(\\Theta_0\\)）上的最高点。GLRT 检验的是：站在约束路径的最高点和站在山顶，视野差距有多大？如果差距很大（\\(\\Lambda\\) 很小），说明约束是不合理的，应该拒绝 \\(H_0\\)。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="glrt-viz"></div>
            `,
            visualizations: [
                {
                    id: 'glrt-viz',
                    title: 'Interactive: 广义似然比检验',
                    description: '观察约束 MLE 与无约束 MLE 下似然值的比较，以及 GLRT 统计量的变化。',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 80, originY: 340,
                            scale: 50
                        });

                        var mu0 = 0;
                        var sigma = 1;
                        var n = 10;
                        var xbarSlider = VizEngine.createSlider(controls, 'x-bar (sample mean)', -3, 3, 0.5, 0.05, function() { draw(); });
                        var nSlider = VizEngine.createSlider(controls, 'n', 2, 50, 10, 1, function() { n = parseInt(nSlider.value); draw(); });

                        function draw() {
                            var xbar = parseFloat(xbarSlider.value);
                            n = parseInt(nSlider.value);

                            viz.clear();

                            var ctx = viz.ctx;

                            // Log-likelihood as function of mu: l(mu) = -n/(2sigma^2) * (xbar - mu)^2 + const
                            // We plot the relative log-likelihood (ignoring constant)
                            var logLik = function(mu) {
                                return -n / (2 * sigma * sigma) * (xbar - mu) * (xbar - mu);
                            };

                            // Convert to screen: mu on x-axis, logLik on y-axis
                            var muMin = -3, muMax = 3;
                            var lMax = 0; // at mu = xbar
                            var lMin = logLik(muMin < muMax ? (Math.abs(muMin - xbar) > Math.abs(muMax - xbar) ? muMin : muMax) : muMin);
                            if (lMin > -1) lMin = -1;
                            var yScale = 280 / Math.abs(lMin);

                            // Axes
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(80, 340); ctx.lineTo(540, 340); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(80, 340); ctx.lineTo(80, 30); ctx.stroke();

                            // X-axis labels (mu values)
                            ctx.fillStyle = viz.colors.text; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            for (var mu = -3; mu <= 3; mu++) {
                                var sx = 80 + (mu - muMin) / (muMax - muMin) * 460;
                                ctx.fillText(mu.toString(), sx, 344);
                            }

                            // Plot log-likelihood curve
                            ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;
                            for (var i = 0; i <= 200; i++) {
                                var mu = muMin + (muMax - muMin) * i / 200;
                                var ll = logLik(mu);
                                var sx = 80 + (mu - muMin) / (muMax - muMin) * 460;
                                var sy = 340 + ll * yScale;
                                if (sy < 30) sy = 30;
                                if (!started) { ctx.moveTo(sx, sy); started = true; }
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Mark MLE (unrestricted) at mu = xbar
                            var mleSx = 80 + (xbar - muMin) / (muMax - muMin) * 460;
                            var mleSy = 340; // logLik(xbar) = 0 (relative)
                            ctx.fillStyle = viz.colors.green;
                            ctx.beginPath(); ctx.arc(mleSx, mleSy, 6, 0, Math.PI * 2); ctx.fill();
                            viz.screenText('MLE: mu-hat = ' + xbar.toFixed(2), mleSx, mleSy - 16, viz.colors.green, 11);

                            // Mark restricted MLE at mu = mu0
                            var resSx = 80 + (mu0 - muMin) / (muMax - muMin) * 460;
                            var resLL = logLik(mu0);
                            var resSy = 340 + resLL * yScale;
                            if (resSy < 30) resSy = 30;
                            ctx.fillStyle = viz.colors.orange;
                            ctx.beginPath(); ctx.arc(resSx, resSy, 6, 0, Math.PI * 2); ctx.fill();
                            viz.screenText('H0: mu = ' + mu0, resSx, resSy - 16, viz.colors.orange, 11);

                            // Draw vertical drop showing the gap
                            ctx.strokeStyle = viz.colors.red; ctx.lineWidth = 2;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath(); ctx.moveTo(resSx, mleSy); ctx.lineTo(resSx, resSy); ctx.stroke();
                            ctx.setLineDash([]);

                            // Arrow label for gap
                            var midGapY = (mleSy + resSy) / 2;
                            viz.screenText('gap = ' + Math.abs(resLL).toFixed(2), resSx + 10, midGapY, viz.colors.red, 11, 'left');

                            // Compute and display GLRT statistic
                            var negTwoLogLambda = n * (xbar - mu0) * (xbar - mu0) / (sigma * sigma);
                            var zStat = Math.sqrt(negTwoLogLambda);
                            var pValue = 2 * (1 - VizEngine.normalCDF(zStat));

                            viz.screenText('GLRT Statistics', 420, 40, viz.colors.white, 13, 'left');
                            viz.screenText('-2 log Lambda = ' + negTwoLogLambda.toFixed(3), 420, 60, viz.colors.yellow, 12, 'left');
                            viz.screenText('|Z| = ' + zStat.toFixed(3), 420, 80, viz.colors.teal, 12, 'left');
                            viz.screenText('p-value = ' + (pValue < 0.001 ? pValue.toExponential(2) : pValue.toFixed(4)), 420, 100, viz.colors.pink, 12, 'left');

                            var reject = negTwoLogLambda > 3.841; // chi2(1) at alpha=0.05
                            viz.screenText(reject ? 'Reject H0 (alpha=0.05)' : 'Fail to reject H0', 420, 125, reject ? viz.colors.red : viz.colors.green, 12, 'left');

                            // Axis labels
                            viz.screenText('mu', 530, 355, viz.colors.text, 12);
                            viz.screenText('log L(mu) - log L(MLE)', 30, 20, viz.colors.text, 11, 'left');
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\)，其中 \\(\\mu\\) 和 \\(\\sigma^2\\) 都未知。对于 \\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu \\ne \\mu_0\\)，推导 GLRT 统计量并说明其在 \\(H_0\\) 下的分布。',
                    hint: '全模型的 MLE 为 \\(\\hat{\\mu} = \\bar{X}\\)，\\(\\hat{\\sigma}^2 = \\frac{1}{n}\\sum(X_i - \\bar{X})^2\\)。约束模型的 MLE 为 \\(\\mu = \\mu_0\\)，\\(\\tilde{\\sigma}^2 = \\frac{1}{n}\\sum(X_i - \\mu_0)^2\\)。',
                    solution: '代入计算后 \\(\\Lambda = \\left(\\frac{\\hat{\\sigma}^2}{\\tilde{\\sigma}^2}\\right)^{n/2} = \\left(\\frac{\\sum(X_i - \\bar{X})^2}{\\sum(X_i - \\mu_0)^2}\\right)^{n/2} = \\left(\\frac{1}{1 + T^2/(n-1)}\\right)^{n/2}\\)，其中 \\(T = \\frac{\\bar{X} - \\mu_0}{S/\\sqrt{n}}\\)，\\(S^2 = \\frac{1}{n-1}\\sum(X_i - \\bar{X})^2\\)。因此 \\(\\Lambda < c\\) 等价于 \\(|T| > c\'\\)。在 \\(H_0\\) 下 \\(T \\sim t(n-1)\\)，即 GLRT 简化为 t-检验。'
                },
                {
                    question: '对于 GLRT，证明 \\(0 \\le \\Lambda(\\mathbf{x}) \\le 1\\) 恒成立，并说明 \\(\\Lambda = 1\\) 在什么情况下发生。',
                    hint: '注意分子是在 \\(\\Theta_0 \\subset \\Theta\\) 上的上确界。',
                    solution: '因为 \\(\\Theta_0 \\subset \\Theta\\)，所以 \\(\\sup_{\\theta \\in \\Theta_0} L(\\theta) \\le \\sup_{\\theta \\in \\Theta} L(\\theta)\\)，因此 \\(\\Lambda \\le 1\\)。由于似然函数非负，\\(\\Lambda \\ge 0\\)。\\(\\Lambda = 1\\) 当且仅当无约束 MLE 恰好落在 \\(\\Theta_0\\) 中，即数据完全支持零假设。例如在 Example 10.3 中，\\(\\Lambda = 1\\) 当且仅当 \\(\\bar{X} = \\mu_0\\)。'
                },
                {
                    question: '（GLRT 不总是最优的）构造一个简单的例子，说明 GLRT 不一定给出 UMP 检验（即使 UMP 检验存在）。',
                    hint: '考虑正态单侧检验 \\(H_0: \\mu \\le 0\\) vs \\(H_1: \\mu > 0\\)，\\(\\sigma^2\\) 已知。GLRT 的行为是什么？',
                    solution: '设 \\(X \\sim N(\\mu, 1)\\)。对于 \\(H_0: \\mu \\le 0\\) vs \\(H_1: \\mu > 0\\)：无约束 MLE 为 \\(\\hat{\\mu} = X\\)。约束 MLE 为 \\(\\tilde{\\mu} = \\min(X, 0)\\)。当 \\(X > 0\\) 时 \\(\\Lambda = \\exp(-X^2/2)\\)，当 \\(X \\le 0\\) 时 \\(\\Lambda = 1\\)。GLRT 拒绝当 \\(X > c\\)，这恰好是 UMP 检验。但考虑更复杂的约束形式（如区间假设 \\(H_0: \\mu \\in [a, b]\\)），GLRT 可能不是 UMP。一般地，GLRT 的优势在于通用性而非最优性。'
                }
            ]
        },
        // ============================================================
        // Section 4: Wilks 定理
        // ============================================================
        {
            id: 'ch10-sec04',
            title: 'Wilks 定理',
            content: `
                <h2>Wilks 定理</h2>

                <p>GLRT 的一个重要实际问题是：如何确定拒绝域的临界值？在有限样本下，\\(-2\\log\\Lambda\\) 的精确分布通常难以求得。<strong>Wilks 定理</strong>提供了一个优雅的渐近解：在正则条件下，\\(-2\\log\\Lambda\\) 的渐近分布是卡方分布，自由度等于约束的个数。</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.3 (Wilks' Theorem)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} f(x | \\theta)\\)，其中 \\(\\theta \\in \\Theta \\subset \\mathbb{R}^p\\)。考虑检验 \\(H_0: \\theta \\in \\Theta_0\\)，其中 \\(\\Theta_0\\) 是 \\(\\Theta\\) 中维数为 \\(q\\) 的子集（即 \\(\\Theta_0\\) 由 \\(r = p - q\\) 个独立约束确定）。在以下正则条件下：</p>
                        <ol>
                            <li>参数的真值 \\(\\theta_0 \\in \\Theta_0\\) 是 \\(\\Theta_0\\) 的内点</li>
                            <li>Fisher 信息矩阵 \\(I(\\theta_0)\\) 正定</li>
                            <li>适当的可微性和可积性条件成立</li>
                        </ol>
                        <p>当 \\(H_0\\) 为真时，</p>
                        \\[-2 \\log \\Lambda(\\mathbf{X}) \\xrightarrow{d} \\chi^2(r), \\quad r = \\dim(\\Theta) - \\dim(\\Theta_0) = p - q\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Sketch)</div>
                    <div class="env-body">
                        <p>关键步骤如下：</p>
                        <p><strong>Step 1.</strong> 对数似然函数在 MLE \\(\\hat{\\theta}\\) 处的二阶 Taylor 展开：</p>
                        \\[\\ell(\\theta) \\approx \\ell(\\hat{\\theta}) - \\frac{1}{2} (\\theta - \\hat{\\theta})^T \\mathcal{J}_n (\\theta - \\hat{\\theta})\\]
                        <p>其中 \\(\\mathcal{J}_n = -\\nabla^2 \\ell(\\hat{\\theta})\\) 是观测信息矩阵。</p>

                        <p><strong>Step 2.</strong> 类似地，约束 MLE \\(\\tilde{\\theta}\\) 也满足</p>
                        \\[\\ell(\\tilde{\\theta}) \\approx \\ell(\\hat{\\theta}) - \\frac{1}{2} (\\tilde{\\theta} - \\hat{\\theta})^T \\mathcal{J}_n (\\tilde{\\theta} - \\hat{\\theta})\\]

                        <p><strong>Step 3.</strong> 因此</p>
                        \\[-2\\log\\Lambda = 2(\\ell(\\hat{\\theta}) - \\ell(\\tilde{\\theta})) \\approx (\\hat{\\theta} - \\tilde{\\theta})^T \\mathcal{J}_n (\\hat{\\theta} - \\tilde{\\theta})\\]

                        <p><strong>Step 4.</strong> 利用 MLE 的渐近正态性 \\(\\sqrt{n}(\\hat{\\theta} - \\theta_0) \\xrightarrow{d} N(0, I(\\theta_0)^{-1})\\) 和约束 MLE 的性质，可以证明右端渐近服从 \\(\\chi^2(r)\\)。直觉上，\\(\\hat{\\theta} - \\tilde{\\theta}\\) 在 \\(r\\) 个约束方向上有非平凡分量，每个贡献一个自由度。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 10.5 (验证 Wilks 定理)</div>
                    <div class="env-body">
                        <p>回看 Example 10.3：\\(X_i \\sim N(\\mu, \\sigma^2)\\)（\\(\\sigma^2\\) 已知），检验 \\(H_0: \\mu = \\mu_0\\)。这里 \\(p = 1\\)，\\(q = 0\\)（\\(\\Theta_0\\) 是单点），\\(r = 1\\)。我们已经推导出 \\(-2\\log\\Lambda = Z^2\\)，而 \\(Z \\sim N(0,1)\\) 意味着 \\(Z^2 \\sim \\chi^2(1)\\)。这是<strong>精确分布</strong>，不仅仅是渐近分布，完美验证了 Wilks 定理。</p>
                    </div>
                </div>

                <h3>三大渐近等价检验</h3>

                <p>在正则条件下，有三种重要的检验统计量在渐近意义下等价，都收敛到 \\(\\chi^2(r)\\)：</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.4 (三大检验的渐近等价性)</div>
                    <div class="env-body">
                        <p>在正则条件下，以下三个统计量在 \\(H_0\\) 下渐近服从 \\(\\chi^2(r)\\)，且在局部备择假设下渐近等价：</p>
                        <ol>
                            <li><strong>似然比检验</strong>（LRT）：\\(W_{\\text{LR}} = -2\\log\\Lambda = 2(\\ell(\\hat{\\theta}) - \\ell(\\tilde{\\theta}))\\)</li>
                            <li><strong>Wald 检验</strong>：\\(W_{\\text{Wald}} = (\\hat{\\theta} - \\theta_0)^T [\\widehat{\\operatorname{Var}}(\\hat{\\theta})]^{-1} (\\hat{\\theta} - \\theta_0)\\)</li>
                            <li><strong>Score (Rao / LM) 检验</strong>：\\(W_{\\text{Score}} = U(\\tilde{\\theta})^T I(\\tilde{\\theta})^{-1} U(\\tilde{\\theta})\\)，其中 \\(U(\\theta) = \\nabla \\ell(\\theta)\\) 是得分函数</li>
                        </ol>
                        <p>在 \\(H_0\\) 成立时，\\(W_{\\text{LR}}, W_{\\text{Wald}}, W_{\\text{Score}} \\xrightarrow{d} \\chi^2(r)\\)。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition: 三大检验的几何意义</div>
                    <div class="env-body">
                        <p>想象对数似然函数是一个山丘：</p>
                        <ul>
                            <li><strong>LRT</strong>：比较山顶的高度（无约束 MLE）和限制在 \\(\\Theta_0\\) 上的最高点高度，差距大则拒绝。</li>
                            <li><strong>Wald 检验</strong>：看无约束 MLE 离 \\(\\Theta_0\\) 有多远（在信息度量下的距离），远则拒绝。只需无约束 MLE。</li>
                            <li><strong>Score 检验</strong>：站在 \\(\\Theta_0\\) 上的约束 MLE 处，看对数似然的梯度（斜率）有多大。如果在 \\(\\Theta_0\\) 上斜率很大，说明离真正的山顶很远，应拒绝。只需约束 MLE。</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning: 正则条件的重要性</div>
                    <div class="env-body">
                        <p>Wilks 定理需要正则条件，以下情况会导致失效：</p>
                        <ul>
                            <li><strong>参数在边界上</strong>：如检验 \\(H_0: \\sigma^2 = 0\\)，参数在参数空间的边界。此时 \\(-2\\log\\Lambda\\) 可能服从 \\(\\frac{1}{2}\\chi^2(0) + \\frac{1}{2}\\chi^2(1)\\) 混合分布。</li>
                            <li><strong>参数维数随 \\(n\\) 增长</strong>：高维设定下，Wilks 定理的卡方近似可能不准确。</li>
                            <li><strong>非可辨识性</strong>：如混合模型中成分数的检验。</li>
                        </ul>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="wilks-sim-viz"></div>

                <div class="viz-placeholder" data-viz="three-tests-viz"></div>
            `,
            visualizations: [
                {
                    id: 'wilks-sim-viz',
                    title: 'Interactive: Wilks 定理模拟验证',
                    description: '模拟 -2 log Lambda 在 H0 下的分布，与 chi-squared PDF 对比，观察随 n 增大的收敛。',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 60, originY: 340,
                            scale: 40
                        });

                        var nSamples = 2000;
                        var nSlider = VizEngine.createSlider(controls, 'n (observations per test)', 5, 100, 20, 5, function() { simulate(); });
                        var dfSlider = VizEngine.createSlider(controls, 'r (degrees of freedom)', 1, 5, 1, 1, function() { simulate(); });
                        VizEngine.createButton(controls, 'Re-simulate', function() { simulate(); });

                        function simulate() {
                            var n = parseInt(nSlider.value);
                            var r = parseInt(dfSlider.value);

                            viz.clear();

                            var ctx = viz.ctx;

                            // Simulate GLRT for testing H0: mu1=...=mu_r = 0 in N(mu, I_p)
                            // -2 log Lambda = n * sum(xbar_j^2) for j=1..r with sigma=1 known
                            // Each xbar_j ~ N(0, 1/n) under H0
                            var stats = [];
                            for (var sim = 0; sim < nSamples; sim++) {
                                var stat = 0;
                                for (var j = 0; j < r; j++) {
                                    var xbar = VizEngine.randomNormal(0, 1 / Math.sqrt(n));
                                    stat += n * xbar * xbar;
                                }
                                stats.push(stat);
                            }

                            // Histogram
                            var numBins = 30;
                            var maxVal = Math.max(r * 4, VizEngine.quantile(stats, 0.98));
                            var binWidth = maxVal / numBins;
                            var bins = [];
                            for (var b = 0; b < numBins; b++) {
                                bins.push({ x: b * binWidth, width: binWidth, count: 0 });
                            }
                            for (var i = 0; i < stats.length; i++) {
                                var bIdx = Math.min(Math.floor(stats[i] / binWidth), numBins - 1);
                                if (bIdx >= 0) bins[bIdx].count++;
                            }

                            // Normalize to density
                            for (var b = 0; b < numBins; b++) {
                                bins[b].height = bins[b].count / (nSamples * binWidth);
                            }

                            // Find max height for scaling
                            var maxH = 0;
                            for (var b = 0; b < numBins; b++) {
                                if (bins[b].height > maxH) maxH = bins[b].height;
                            }
                            var chiMax = VizEngine.chiSquaredPDF(Math.max(r - 2, 0.01), r);
                            if (r <= 2) chiMax = VizEngine.chiSquaredPDF(0.1, r);
                            if (chiMax > maxH) maxH = chiMax;
                            maxH *= 1.15;

                            // Scaling
                            var xScale = 460 / maxVal;
                            var yScale = 280 / maxH;

                            // Axes
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(60, 340); ctx.lineTo(540, 340); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(60, 340); ctx.lineTo(60, 30); ctx.stroke();

                            // X-axis labels
                            ctx.fillStyle = viz.colors.text; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            var tickStep = maxVal > 15 ? 5 : (maxVal > 8 ? 2 : 1);
                            for (var t = 0; t <= maxVal; t += tickStep) {
                                var sx = 60 + t * xScale;
                                if (sx < 540) ctx.fillText(t.toFixed(0), sx, 344);
                            }

                            // Draw histogram bars
                            for (var b = 0; b < numBins; b++) {
                                var sx1 = 60 + bins[b].x * xScale;
                                var sx2 = 60 + (bins[b].x + bins[b].width) * xScale;
                                var sy = 340 - bins[b].height * yScale;
                                ctx.fillStyle = viz.colors.blue + '55';
                                ctx.fillRect(sx1, sy, sx2 - sx1, 340 - sy);
                                ctx.strokeStyle = viz.colors.blue + '88';
                                ctx.lineWidth = 1;
                                ctx.strokeRect(sx1, sy, sx2 - sx1, 340 - sy);
                            }

                            // Overlay chi-squared PDF
                            ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;
                            for (var i = 0; i <= 300; i++) {
                                var xv = maxVal * i / 300;
                                if (xv < 0.01) xv = 0.01;
                                var yv = VizEngine.chiSquaredPDF(xv, r);
                                if (!isFinite(yv) || yv > maxH * 2) { started = false; continue; }
                                var sx = 60 + xv * xScale;
                                var sy = 340 - yv * yScale;
                                if (!started) { ctx.moveTo(sx, sy); started = true; }
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Legend
                            ctx.fillStyle = viz.colors.blue + '88';
                            ctx.fillRect(380, 40, 15, 12);
                            viz.screenText('Simulated -2 log Lambda', 400, 46, viz.colors.blue, 11, 'left');
                            ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 2.5;
                            ctx.beginPath(); ctx.moveTo(380, 68); ctx.lineTo(395, 68); ctx.stroke();
                            viz.screenText('chi-sq(' + r + ') PDF', 400, 68, viz.colors.orange, 11, 'left');

                            // Title
                            viz.screenText('Wilks Theorem: n = ' + n + ', r = ' + r + ' (' + nSamples + ' simulations)', 300, 15, viz.colors.white, 13);
                            viz.screenText('-2 log Lambda', 300, 360, viz.colors.text, 12);
                        }

                        simulate();
                        return viz;
                    }
                },
                {
                    id: 'three-tests-viz',
                    title: 'Interactive: 三大检验统计量对比',
                    description: '对比 LRT, Wald, Score 检验统计量在正态均值检验中的行为。',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 60, originY: 340,
                            scale: 40
                        });

                        var nSlider = VizEngine.createSlider(controls, 'n', 5, 100, 20, 5, function() { simulate(); });
                        var muTrueSlider = VizEngine.createSlider(controls, 'true mu (for power comparison)', 0, 2.0, 0, 0.1, function() { simulate(); });
                        VizEngine.createButton(controls, 'Re-simulate', function() { simulate(); });

                        var nSims = 1500;

                        function simulate() {
                            var n = parseInt(nSlider.value);
                            var muTrue = parseFloat(muTrueSlider.value);
                            var mu0 = 0;
                            var sigma = 1;

                            viz.clear();
                            var ctx = viz.ctx;

                            // For H0: mu = 0 vs H1: mu != 0, sigma known
                            // LRT: -2logLambda = n * xbar^2
                            // Wald: n * xbar^2 / sigma^2 = n * xbar^2 (same!)
                            // Score: n * xbar^2 (also same in this case)
                            // These are identical for normal with known sigma
                            // Use unknown sigma case for differentiation:
                            // LRT: n*log(1 + T^2/(n-1)) where T = sqrt(n)*xbar/S
                            // Wald: T^2
                            // Score: n*xbar^2 / S_0^2 where S_0^2 computed at tilde-theta

                            var lrtStats = [];
                            var waldStats = [];
                            var scoreStats = [];

                            for (var sim = 0; sim < nSims; sim++) {
                                // Generate data
                                var data = VizEngine.sampleArray(function() { return VizEngine.randomNormal(muTrue, sigma); }, n);
                                var xbar = VizEngine.mean(data);
                                var s2 = VizEngine.sampleVariance(data);
                                var s = Math.sqrt(s2);

                                // T statistic
                                var T = Math.sqrt(n) * (xbar - mu0) / s;

                                // LRT: -2 log Lambda = n * log(1 + T^2/(n-1))
                                var lrt = n * Math.log(1 + T * T / (n - 1));

                                // Wald: T^2
                                var wald = T * T;

                                // Score: uses restricted MLE (mu=mu0)
                                // Score = (d/dmu log L at mu0)^2 / I(mu0)
                                // = (n * xbar / sigma_tilde^2)^2 * sigma_tilde^2 / n
                                // = n * xbar^2 / sigma_tilde^2
                                // where sigma_tilde^2 = (1/n) * sum(xi - mu0)^2
                                var sigma_tilde2 = 0;
                                for (var i = 0; i < n; i++) sigma_tilde2 += (data[i] - mu0) * (data[i] - mu0);
                                sigma_tilde2 /= n;
                                var score = n * xbar * xbar / sigma_tilde2;

                                lrtStats.push(lrt);
                                waldStats.push(wald);
                                scoreStats.push(score);
                            }

                            // Draw histograms overlaid
                            var maxVal = Math.max(
                                VizEngine.quantile(lrtStats, 0.95),
                                VizEngine.quantile(waldStats, 0.95),
                                VizEngine.quantile(scoreStats, 0.95),
                                8
                            );
                            var numBins = 25;
                            var binW = maxVal / numBins;

                            function makeBins(stats) {
                                var bins = [];
                                for (var b = 0; b < numBins; b++) bins.push(0);
                                for (var i = 0; i < stats.length; i++) {
                                    var idx = Math.min(Math.floor(stats[i] / binW), numBins - 1);
                                    if (idx >= 0) bins[idx]++;
                                }
                                return bins.map(function(c) { return c / (nSims * binW); });
                            }

                            var lrtBins = makeBins(lrtStats);
                            var waldBins = makeBins(waldStats);
                            var scoreBins = makeBins(scoreStats);

                            var maxH = 0;
                            for (var b = 0; b < numBins; b++) {
                                maxH = Math.max(maxH, lrtBins[b], waldBins[b], scoreBins[b]);
                            }
                            maxH = Math.max(maxH, VizEngine.chiSquaredPDF(0.1, 1)) * 1.15;

                            var xScale = 460 / maxVal;
                            var yScale = 280 / maxH;

                            // Axes
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(60, 340); ctx.lineTo(540, 340); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(60, 340); ctx.lineTo(60, 30); ctx.stroke();

                            // X-axis labels
                            ctx.fillStyle = viz.colors.text; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            var tickStep = maxVal > 15 ? 5 : 2;
                            for (var t = 0; t <= maxVal; t += tickStep) {
                                var sx = 60 + t * xScale;
                                if (sx < 540) ctx.fillText(t.toFixed(0), sx, 344);
                            }

                            // Draw step outlines for each test
                            function drawStepHist(bins, color) {
                                ctx.strokeStyle = color; ctx.lineWidth = 1.8;
                                ctx.beginPath();
                                for (var b = 0; b < numBins; b++) {
                                    var sx1 = 60 + b * binW * xScale;
                                    var sx2 = 60 + (b + 1) * binW * xScale;
                                    var sy = 340 - bins[b] * yScale;
                                    if (b === 0) ctx.moveTo(sx1, 340);
                                    ctx.lineTo(sx1, sy);
                                    ctx.lineTo(sx2, sy);
                                }
                                ctx.lineTo(60 + numBins * binW * xScale, 340);
                                ctx.stroke();
                            }

                            drawStepHist(lrtBins, viz.colors.blue);
                            drawStepHist(waldBins, viz.colors.green);
                            drawStepHist(scoreBins, viz.colors.orange);

                            // chi^2(1) PDF overlay
                            ctx.strokeStyle = viz.colors.white; ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            var started = false;
                            for (var i = 1; i <= 300; i++) {
                                var xv = maxVal * i / 300;
                                var yv = VizEngine.chiSquaredPDF(xv, 1);
                                if (!isFinite(yv) || yv > maxH * 2) { started = false; continue; }
                                var sx = 60 + xv * xScale;
                                var sy = 340 - yv * yScale;
                                if (!started) { ctx.moveTo(sx, sy); started = true; }
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Legend
                            var legendY = 35;
                            ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(370, legendY); ctx.lineTo(390, legendY); ctx.stroke();
                            viz.screenText('LRT', 395, legendY, viz.colors.blue, 11, 'left');

                            ctx.strokeStyle = viz.colors.green;
                            ctx.beginPath(); ctx.moveTo(370, legendY + 18); ctx.lineTo(390, legendY + 18); ctx.stroke();
                            viz.screenText('Wald', 395, legendY + 18, viz.colors.green, 11, 'left');

                            ctx.strokeStyle = viz.colors.orange;
                            ctx.beginPath(); ctx.moveTo(370, legendY + 36); ctx.lineTo(390, legendY + 36); ctx.stroke();
                            viz.screenText('Score', 395, legendY + 36, viz.colors.orange, 11, 'left');

                            ctx.strokeStyle = viz.colors.white; ctx.setLineDash([6, 4]);
                            ctx.beginPath(); ctx.moveTo(370, legendY + 54); ctx.lineTo(390, legendY + 54); ctx.stroke();
                            ctx.setLineDash([]);
                            viz.screenText('chi-sq(1)', 395, legendY + 54, viz.colors.white, 11, 'left');

                            // Rejection rates at alpha = 0.05
                            var critVal = 3.841; // chi2(1, 0.05)
                            var lrtReject = lrtStats.filter(function(s) { return s > critVal; }).length / nSims;
                            var waldReject = waldStats.filter(function(s) { return s > critVal; }).length / nSims;
                            var scoreReject = scoreStats.filter(function(s) { return s > critVal; }).length / nSims;

                            var label = muTrue === 0 ? 'Type I Error (alpha=0.05)' : 'Power (alpha=0.05)';
                            viz.screenText(label, 200, 15, viz.colors.white, 13);
                            viz.screenText('LRT: ' + lrtReject.toFixed(3) + '  Wald: ' + waldReject.toFixed(3) + '  Score: ' + scoreReject.toFixed(3), 250, 360, viz.colors.yellow, 11);
                        }

                        simulate();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '对于 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Poisson}(\\lambda)\\)，检验 \\(H_0: \\lambda = \\lambda_0\\) vs \\(H_1: \\lambda \\ne \\lambda_0\\)。推导 GLRT 统计量 \\(-2\\log\\Lambda\\)，并利用 Wilks 定理确定其渐近分布。',
                    hint: 'Poisson 的 MLE 为 \\(\\hat{\\lambda} = \\bar{X}\\)。对数似然为 \\(\\ell(\\lambda) = (\\sum x_i) \\log \\lambda - n\\lambda - \\sum \\log(x_i!)\\)。',
                    solution: '\\(-2\\log\\Lambda = 2[\\ell(\\hat{\\lambda}) - \\ell(\\lambda_0)] = 2[n\\bar{X}\\log(\\bar{X}/\\lambda_0) - n(\\bar{X} - \\lambda_0)]\\)。这里 \\(p = 1\\)，\\(q = 0\\)，\\(r = 1\\)。由 Wilks 定理，在 \\(H_0\\) 下 \\(-2\\log\\Lambda \\xrightarrow{d} \\chi^2(1)\\)。实际操作中，在 \\(\\alpha = 0.05\\) 水平下拒绝当 \\(-2\\log\\Lambda > 3.841\\)。'
                },
                {
                    question: '考虑多元正态模型 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N_p(\\mu, \\Sigma)\\)，检验 \\(H_0: \\mu = \\mathbf{0}\\) vs \\(H_1: \\mu \\ne \\mathbf{0}\\)（\\(\\Sigma\\) 已知）。说明 Wilks 定理中的自由度 \\(r\\) 是多少，并给出 GLRT 的渐近拒绝准则。',
                    hint: '全参数空间维数为 \\(p\\)（即 \\(\\mu\\) 的维数），约束空间维数为 \\(0\\)。',
                    solution: '全参数空间 \\(\\Theta = \\mathbb{R}^p\\)，维数 \\(p\\)。约束空间 \\(\\Theta_0 = \\{\\mathbf{0}\\}\\)，维数 \\(0\\)。因此 \\(r = p - 0 = p\\)。GLRT 统计量为 \\(-2\\log\\Lambda = n \\bar{X}^T \\Sigma^{-1} \\bar{X}\\)（这就是 Hotelling \\(T^2\\) 统计量的 \\(\\Sigma\\) 已知版本）。渐近地，在 \\(H_0\\) 下 \\(-2\\log\\Lambda \\sim \\chi^2(p)\\)（事实上这里是精确分布）。拒绝当 \\(-2\\log\\Lambda > \\chi^2_\\alpha(p)\\)。'
                },
                {
                    question: '解释 Wald 检验和 Score 检验各自的计算优势。在什么实际场景下你会优先选择 Score 检验而不是 Wald 检验？',
                    hint: '考虑哪种检验只需要在 \\(H_0\\) 下的估计，哪种需要无约束估计。',
                    solution: 'Wald 检验只需要无约束 MLE \\(\\hat{\\theta}\\)，不需要约束优化，因此当无约束 MLE 容易计算时很方便。Score 检验只需要约束 MLE \\(\\tilde{\\theta}\\)（即在 \\(H_0\\) 下的估计），不需要拟合完整模型。在以下场景中 Score 检验更优：(1) 完整模型的 MLE 计算复杂或不稳定（如非线性模型）；(2) 需要检验多个变量是否应加入模型（向前选择），此时只需一次约束模型拟合即可计算多个 Score 统计量；(3) 在流行病学中的 Cochran-Armitage 趋势检验本质上就是 Score 检验。LRT 介于两者之间，需要两种 MLE。'
                }
            ]
        }
    ]
});

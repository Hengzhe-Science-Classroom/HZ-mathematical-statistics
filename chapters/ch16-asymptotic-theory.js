window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch16',
    number: 16,
    title: '渐近理论',
    subtitle: 'Asymptotic Theory',
    sections: [
        // ============================================================
        // SECTION 1: 相合性 (Consistency)
        // ============================================================
        {
            id: 'ch16-sec01',
            title: '相合性',
            content: `
                <h2>相合性 · Consistency</h2>

                <p>渐近理论 (asymptotic theory) 研究的是统计推断在样本量 \\(n \\to \\infty\\) 时的行为。本章是整个数理统计课程的核心章节之一：我们将严格证明最大似然估计 (MLE) 的渐近正态性——这一结果是现代统计推断的基石。</p>

                <p>我们首先从最基本的大样本性质——<strong>相合性 (consistency)</strong>——开始。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.1 (相合估计量 · Consistent Estimator)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, X_2, \\ldots\\) 是来自分布 \\(P_\\theta\\) 的随机样本，\\(\\hat{\\theta}_n = \\hat{\\theta}_n(X_1, \\ldots, X_n)\\) 是参数 \\(\\theta\\) 的一个估计量序列。若对所有 \\(\\theta \\in \\Theta\\)，</p>
                        \\[\\hat{\\theta}_n \\xrightarrow{P} \\theta, \\quad \\text{i.e.} \\quad \\forall \\varepsilon > 0, \\quad \\lim_{n \\to \\infty} P_\\theta\\bigl(|\\hat{\\theta}_n - \\theta| > \\varepsilon\\bigr) = 0,\\]
                        <p>则称 \\(\\hat{\\theta}_n\\) 是 \\(\\theta\\) 的<strong>相合估计量</strong> (consistent estimator)。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>相合性是对估计量的最低要求：当数据量足够大时，估计量应该"收敛"到真实参数值。一个不相合的估计量即使拥有无穷多数据，也无法"找到"真参数——这显然不可接受。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.2 (相合性的充分条件)</div>
                    <div class="env-body">
                        <p>若估计量序列 \\(\\hat{\\theta}_n\\) 满足：</p>
                        <p>(1) \\(\\lim_{n \\to \\infty} \\operatorname{Bias}(\\hat{\\theta}_n) = \\lim_{n \\to \\infty} [E_\\theta(\\hat{\\theta}_n) - \\theta] = 0\\)；</p>
                        <p>(2) \\(\\lim_{n \\to \\infty} \\operatorname{Var}_\\theta(\\hat{\\theta}_n) = 0\\)。</p>
                        <p>则 \\(\\hat{\\theta}_n\\) 是 \\(\\theta\\) 的相合估计量。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>由 Chebyshev 不等式，对任意 \\(\\varepsilon > 0\\)：</p>
                        \\[P_\\theta(|\\hat{\\theta}_n - \\theta| > \\varepsilon) = P_\\theta(|\\hat{\\theta}_n - E(\\hat{\\theta}_n) + E(\\hat{\\theta}_n) - \\theta| > \\varepsilon).\\]
                        <p>令 \\(b_n = E(\\hat{\\theta}_n) - \\theta\\) 为偏差。当 \\(n\\) 足够大时 \\(|b_n| < \\varepsilon/2\\)，于是：</p>
                        \\[P_\\theta(|\\hat{\\theta}_n - \\theta| > \\varepsilon) \\le P_\\theta(|\\hat{\\theta}_n - E(\\hat{\\theta}_n)| > \\varepsilon/2) \\le \\frac{\\operatorname{Var}(\\hat{\\theta}_n)}{(\\varepsilon/2)^2} = \\frac{4\\operatorname{Var}(\\hat{\\theta}_n)}{\\varepsilon^2} \\to 0.\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.3 (样本均值的相合性)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} (\\mu, \\sigma^2)\\)，则 \\(\\bar{X}_n = \\frac{1}{n}\\sum_{i=1}^n X_i\\) 是 \\(\\mu\\) 的相合估计量。</p>
                        <p>验证：\\(E(\\bar{X}_n) = \\mu\\)（无偏），\\(\\operatorname{Var}(\\bar{X}_n) = \\sigma^2/n \\to 0\\)。由 Theorem 16.2 即得。</p>
                        <p>事实上，大数定律给出了更强的结论：\\(\\bar{X}_n \\xrightarrow{\\text{a.s.}} \\mu\\)。</p>
                    </div>
                </div>

                <h3>MLE 的相合性</h3>

                <p>最大似然估计量在什么条件下是相合的？下面的定理给出了经典的回答。其核心思想是：MLE 最大化的是对数似然函数 \\(\\ell_n(\\theta)\\)，而 \\(\\ell_n(\\theta)/n\\) 在大样本下趋近于 KL 散度的负值，后者在真参数处取得唯一最大值。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.4 (KL 散度 · Kullback-Leibler Divergence)</div>
                    <div class="env-body">
                        <p>设 \\(f\\) 和 \\(g\\) 是两个密度函数，从 \\(f\\) 到 \\(g\\) 的 KL 散度定义为：</p>
                        \\[D_{\\text{KL}}(f \\| g) = E_f\\left[\\log \\frac{f(X)}{g(X)}\\right] = \\int f(x) \\log \\frac{f(x)}{g(x)} \\, dx.\\]
                        <p>KL 散度满足 \\(D_{\\text{KL}}(f \\| g) \\ge 0\\)，等号成立当且仅当 \\(f = g\\) a.e.（Gibbs 不等式）。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.5 (MLE 的相合性)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} f(x; \\theta_0)\\)，其中 \\(\\theta_0 \\in \\Theta\\) 为真参数。若满足：</p>
                        <p>(R1) <strong>可辨识性</strong>：\\(\\theta \\ne \\theta'\\) 蕴含 \\(f(\\cdot; \\theta) \\ne f(\\cdot; \\theta')\\)；</p>
                        <p>(R2) 参数空间 \\(\\Theta\\) 是紧集（compact）；</p>
                        <p>(R3) \\(\\log f(x; \\theta)\\) 关于 \\(\\theta\\) 连续；</p>
                        <p>(R4) \\(E_{\\theta_0}[\\sup_{\\theta \\in \\Theta} |\\log f(X; \\theta)|] < \\infty\\)。</p>
                        <p>则 MLE \\(\\hat{\\theta}_n \\xrightarrow{P} \\theta_0\\)。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p>令 \\(M_n(\\theta) = \\frac{1}{n} \\ell_n(\\theta) = \\frac{1}{n} \\sum_{i=1}^n \\log f(X_i; \\theta)\\) 为归一化对数似然。MLE 满足 \\(\\hat{\\theta}_n = \\arg\\max_{\\theta} M_n(\\theta)\\)。</p>
                        <p><strong>Step 1.</strong> 由大数定律，对每个 \\(\\theta\\)：</p>
                        \\[M_n(\\theta) \\xrightarrow{P} M(\\theta) := E_{\\theta_0}[\\log f(X; \\theta)].\\]
                        <p>在条件 (R2)-(R4) 下，收敛是关于 \\(\\theta\\) 一致的（一致大数定律）：\\(\\sup_{\\theta} |M_n(\\theta) - M(\\theta)| \\xrightarrow{P} 0\\)。</p>
                        <p><strong>Step 2.</strong> 函数 \\(M(\\theta)\\) 在 \\(\\theta_0\\) 处取得唯一最大值。这是因为：</p>
                        \\[M(\\theta_0) - M(\\theta) = E_{\\theta_0}\\left[\\log \\frac{f(X; \\theta_0)}{f(X; \\theta)}\\right] = D_{\\text{KL}}(f_{\\theta_0} \\| f_\\theta) \\ge 0,\\]
                        <p>等号成立当且仅当 \\(f_\\theta = f_{\\theta_0}\\) a.e.，由可辨识性 (R1) 知此时 \\(\\theta = \\theta_0\\)。</p>
                        <p><strong>Step 3.</strong> 由 \\(M\\)-estimator 的一般理论，一致收敛 + 极限函数在 \\(\\theta_0\\) 处取唯一极大值 蕴含 \\(\\hat{\\theta}_n \\xrightarrow{P} \\theta_0\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>紧性条件 (R2) 可以放松。Wald 给出了用"开集包含 \\(\\theta_0\\)"代替紧性的版本；对非紧参数空间，通常需要 tail 条件来排除估计量"逃逸到无穷"的可能。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="consistency-animation"></div>
            `,
            visualizations: [
                {
                    id: 'consistency-animation',
                    title: 'Interactive: 相合性动画 — 估计量的分布随 n 增大而集中',
                    description: '观察当样本量 n 增大时，MLE 的分布如何集中到真参数值 θ₀ 附近',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380,
                            originX: 280, originY: 300,
                            scale: 70
                        });

                        var theta0 = 2.0;
                        var nValues = [5, 10, 25, 50, 100, 500];
                        var currentIdx = 2;
                        var samples = [];

                        function generateSamples(n, nSims) {
                            var results = [];
                            for (var s = 0; s < nSims; s++) {
                                var data = VizEngine.sampleArray(function() {
                                    return VizEngine.randomExponential(1.0 / theta0);
                                }, n);
                                var mle = VizEngine.mean(data);
                                results.push(mle);
                            }
                            return results;
                        }

                        function draw() {
                            var n = nValues[currentIdx];
                            samples = generateSamples(n, 2000);

                            viz.clear();

                            var xMin = 0;
                            var xMax = 5.5;
                            var nBins = 40;
                            var binW = (xMax - xMin) / nBins;
                            var counts = new Array(nBins).fill(0);
                            for (var i = 0; i < samples.length; i++) {
                                var idx = Math.floor((samples[i] - xMin) / binW);
                                if (idx >= 0 && idx < nBins) counts[idx]++;
                            }
                            var maxCount = Math.max.apply(null, counts);
                            var maxH = 3.5;

                            var bins = [];
                            for (var i = 0; i < nBins; i++) {
                                bins.push({
                                    x: xMin + i * binW,
                                    width: binW,
                                    height: (counts[i] / maxCount) * maxH
                                });
                            }
                            viz.drawHistogram(bins, viz.colors.blue + '55', viz.colors.blue, 1);

                            viz.drawSegment(theta0, 0, theta0, maxH + 0.3, viz.colors.red, 2.5, true);
                            viz.drawText('\u03B8\u2080 = ' + theta0.toFixed(1), theta0, maxH + 0.5, viz.colors.red, 14);

                            var sampleMean = VizEngine.mean(samples);
                            var sampleStd = Math.sqrt(VizEngine.variance(samples));
                            viz.drawSegment(sampleMean, 0, sampleMean, maxH * 0.5, viz.colors.yellow, 2);

                            viz.drawSegment(xMin, 0, xMax, 0, viz.colors.axis, 1);
                            for (var x = 0; x <= 5; x++) {
                                var sx = viz.toScreen(x, 0);
                                viz.ctx.fillStyle = viz.colors.text;
                                viz.ctx.font = '11px -apple-system,sans-serif';
                                viz.ctx.textAlign = 'center';
                                viz.ctx.textBaseline = 'top';
                                viz.ctx.fillText(x.toString(), sx[0], sx[1] + 4);
                            }

                            viz.screenText('n = ' + n, 90, 30, viz.colors.white, 18, 'center');
                            viz.screenText('2000 simulations of Exp(\u03B8\u2080) MLE', 280, 30, viz.colors.text, 12, 'center');
                            viz.screenText('Mean = ' + sampleMean.toFixed(3) + ',  SD = ' + sampleStd.toFixed(3), 280, 50, viz.colors.teal, 12, 'center');
                        }

                        var nSlider = VizEngine.createSlider(controls, 'n index', 0, nValues.length - 1, currentIdx, 1, function(v) {
                            currentIdx = Math.round(v);
                            draw();
                        });

                        var nLabel = document.createElement('span');
                        nLabel.style.cssText = 'color:#8b949e;font-size:0.8rem;margin-left:8px;';
                        nLabel.textContent = 'n = [5, 10, 25, 50, 100, 500]';
                        controls.appendChild(nLabel);

                        VizEngine.createButton(controls, 'Resample', function() { draw(); });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Uniform}(0, \\theta)\\)。证明 \\(X_{(n)} = \\max_i X_i\\) 是 \\(\\theta\\) 的相合估计量。',
                    hint: '计算 \\(P(|X_{(n)} - \\theta| > \\varepsilon)\\)。注意 \\(X_{(n)} \\le \\theta\\)，所以 \\(P(\\theta - X_{(n)} > \\varepsilon) = P(X_{(n)} < \\theta - \\varepsilon)\\)。',
                    solution: '由于 \\(X_{(n)} \\le \\theta\\) a.s.，我们有 \\(P(|X_{(n)} - \\theta| > \\varepsilon) = P(X_{(n)} < \\theta - \\varepsilon)\\)。当 \\(\\varepsilon < \\theta\\) 时，\\(P(X_{(n)} < \\theta - \\varepsilon) = \\left(\\frac{\\theta - \\varepsilon}{\\theta}\\right)^n = \\left(1 - \\frac{\\varepsilon}{\\theta}\\right)^n \\to 0\\)。当 \\(\\varepsilon \\ge \\theta\\) 时概率显然为 0。故 \\(X_{(n)} \\xrightarrow{P} \\theta\\)。'
                },
                {
                    question: '给出一个无偏但不相合的估计量的例子。',
                    hint: '考虑只使用第一个观测值 \\(X_1\\) 的估计量。',
                    solution: '设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\)，取 \\(\\hat{\\mu}_n = X_1\\)。则 \\(E(\\hat{\\mu}_n) = \\mu\\)（无偏），但 \\(\\operatorname{Var}(\\hat{\\mu}_n) = \\sigma^2\\) 不随 \\(n\\) 趋于 0。因此对任意 \\(\\varepsilon < \\sigma\\)，\\(P(|\\hat{\\mu}_n - \\mu| > \\varepsilon) = P(|Z| > \\varepsilon/\\sigma)\\) 不趋于 0，即 \\(\\hat{\\mu}_n\\) 不相合。'
                },
                {
                    question: '证明 KL 散度的非负性 (Gibbs 不等式): \\(D_{\\text{KL}}(f \\| g) \\ge 0\\)，等号当且仅当 \\(f = g\\) a.e.',
                    hint: '利用 Jensen 不等式和 \\(-\\log\\) 的严格凸性。',
                    solution: '\\(D_{\\text{KL}}(f \\| g) = E_f\\left[-\\log \\frac{g(X)}{f(X)}\\right] \\ge -\\log E_f\\left[\\frac{g(X)}{f(X)}\\right] = -\\log \\int g(x) \\, dx = -\\log 1 = 0\\)。第一个不等号用了 Jensen 不等式（\\(-\\log\\) 为严格凸函数）。等号成立当且仅当 \\(g(X)/f(X)\\) 为常数 a.s.，即 \\(f = g\\) a.e.'
                }
            ]
        },

        // ============================================================
        // SECTION 2: MLE的渐近正态性 (Asymptotic Normality of MLE)
        // ============================================================
        {
            id: 'ch16-sec02',
            title: 'MLE的渐近正态性',
            content: `
                <h2>MLE的渐近正态性 · Asymptotic Normality of MLE</h2>

                <p>本节是整个数理统计课程的<strong>核心定理</strong>。我们将完整证明：在正则条件下，最大似然估计量具有渐近正态分布，且其渐近方差达到 Cram&eacute;r-Rao 下界——即 MLE 是渐近有效的。</p>

                <h3>正则条件 (Regularity Conditions)</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.6 (正则条件)</div>
                    <div class="env-body">
                        <p>设 \\(\\{f(x; \\theta) : \\theta \\in \\Theta\\}\\) 为参数族，\\(\\Theta \\subset \\mathbb{R}\\) 为开区间。以下条件统称为<strong>正则条件</strong> (regularity conditions)：</p>
                        <p><strong>(R1) 可辨识性 (Identifiability):</strong> \\(\\theta \\ne \\theta'\\) 蕴含 \\(f(\\cdot; \\theta) \\ne f(\\cdot; \\theta')\\)。</p>
                        <p><strong>(R2) 支撑不依赖于参数 (Common Support):</strong> 集合 \\(\\{x : f(x; \\theta) > 0\\}\\) 不依赖于 \\(\\theta\\)。</p>
                        <p><strong>(R3) 三阶光滑性 (Smoothness):</strong> \\(\\log f(x; \\theta)\\) 关于 \\(\\theta\\) 三次可微，且第三阶导数在 \\(\\theta_0\\) 的某邻域内一致可积。</p>
                        <p><strong>(R4) 正则 Fisher 信息 (Fisher Information):</strong></p>
                        \\[0 < I(\\theta_0) = E_{\\theta_0}\\left[\\left(\\frac{\\partial}{\\partial \\theta}\\log f(X; \\theta_0)\\right)^2\\right] = -E_{\\theta_0}\\left[\\frac{\\partial^2}{\\partial \\theta^2}\\log f(X; \\theta_0)\\right] < \\infty.\\]
                        <p><strong>(R5) MLE 存在且相合:</strong> 存在相合的 MLE 序列 \\(\\hat{\\theta}_n \\xrightarrow{P} \\theta_0\\)。</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning: 正则条件不可或缺</div>
                    <div class="env-body">
                        <p>条件 (R2) 排除了如 \\(\\text{Uniform}(0, \\theta)\\) 这样支撑依赖于参数的分布。对此类分布，MLE 存在但不具有 \\(\\sqrt{n}\\) 收敛速度——事实上 \\(X_{(n)}\\) 以 \\(n\\) 的速度收敛（即 \\(n(\\theta - X_{(n)}) \\to \\text{Exp}(1)\\)），这是超效率的例子。</p>
                    </div>
                </div>

                <h3>主定理：MLE 的渐近正态性</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.7 (MLE 的渐近正态性)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} f(x; \\theta_0)\\)，正则条件 (R1)-(R5) 成立。则：</p>
                        \\[\\sqrt{n}\\bigl(\\hat{\\theta}_n - \\theta_0\\bigr) \\xrightarrow{d} N\\!\\left(0, \\frac{1}{I(\\theta_0)}\\right).\\]
                        <p>等价地，\\(\\hat{\\theta}_n\\) 近似服从 \\(N\\!\\left(\\theta_0, \\dfrac{1}{nI(\\theta_0)}\\right)\\)。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (完整证明)</div>
                    <div class="env-body">
                        <p>这是本课程最重要的证明。我们分四步完成。</p>

                        <p><strong>记号.</strong> 令 \\(\\ell_n(\\theta) = \\sum_{i=1}^n \\log f(X_i; \\theta)\\) 为对数似然函数，\\(\\ell_n'(\\theta), \\ell_n''(\\theta)\\) 分别为关于 \\(\\theta\\) 的一阶和二阶导数。</p>

                        <p><strong>Step 1: 在真参数处 Taylor 展开 score 函数.</strong></p>
                        <p>MLE \\(\\hat{\\theta}_n\\) 满足似然方程 \\(\\ell_n'(\\hat{\\theta}_n) = 0\\)（一阶条件）。将 \\(\\ell_n'(\\hat{\\theta}_n)\\) 在 \\(\\theta_0\\) 处 Taylor 展开：</p>
                        \\[0 = \\ell_n'(\\hat{\\theta}_n) = \\ell_n'(\\theta_0) + \\ell_n''(\\tilde{\\theta}_n)(\\hat{\\theta}_n - \\theta_0),\\]
                        <p>其中 \\(\\tilde{\\theta}_n\\) 是 \\(\\hat{\\theta}_n\\) 与 \\(\\theta_0\\) 之间的某个值（由 Taylor 余项中的中值定理保证存在）。</p>

                        <p><strong>Step 2: 求解并标准化.</strong></p>
                        <p>从上式解出：</p>
                        \\[\\hat{\\theta}_n - \\theta_0 = -\\frac{\\ell_n'(\\theta_0)}{\\ell_n''(\\tilde{\\theta}_n)}.\\]
                        <p>两边乘以 \\(\\sqrt{n}\\)：</p>
                        \\[\\sqrt{n}(\\hat{\\theta}_n - \\theta_0) = -\\frac{\\ell_n'(\\theta_0)/\\sqrt{n}}{\\ell_n''(\\tilde{\\theta}_n)/n} = \\frac{\\frac{1}{\\sqrt{n}}\\ell_n'(\\theta_0)}{-\\frac{1}{n}\\ell_n''(\\tilde{\\theta}_n)}.\\]

                        <p><strong>Step 3: 分析分子 (CLT).</strong></p>
                        <p>分子为 \\(\\frac{1}{\\sqrt{n}}\\ell_n'(\\theta_0) = \\frac{1}{\\sqrt{n}}\\sum_{i=1}^n \\frac{\\partial}{\\partial\\theta}\\log f(X_i; \\theta_0)\\)。</p>
                        <p>令 \\(S_i = \\frac{\\partial}{\\partial\\theta}\\log f(X_i; \\theta_0)\\)（score）。则 \\(S_1, S_2, \\ldots\\) 是 iid 随机变量，满足：</p>
                        <p>(a) \\(E_{\\theta_0}[S_i] = 0\\)（score 的期望为零——这是正则条件下的标准结论）；</p>
                        <p>(b) \\(\\operatorname{Var}_{\\theta_0}(S_i) = I(\\theta_0)\\)（Fisher 信息的定义）。</p>
                        <p>由<strong>中心极限定理</strong>：</p>
                        \\[\\frac{1}{\\sqrt{n}}\\sum_{i=1}^n S_i = \\frac{1}{\\sqrt{n}}\\ell_n'(\\theta_0) \\xrightarrow{d} N(0, I(\\theta_0)). \\quad \\cdots (*)\\]

                        <p><strong>Step 4: 分析分母 (LLN).</strong></p>
                        <p>分母为 \\(-\\frac{1}{n}\\ell_n''(\\tilde{\\theta}_n)\\)。首先考虑 \\(-\\frac{1}{n}\\ell_n''(\\theta_0) = -\\frac{1}{n}\\sum_{i=1}^n \\frac{\\partial^2}{\\partial\\theta^2}\\log f(X_i; \\theta_0)\\)。</p>
                        <p>由<strong>大数定律</strong>：</p>
                        \\[-\\frac{1}{n}\\ell_n''(\\theta_0) \\xrightarrow{P} -E_{\\theta_0}\\left[\\frac{\\partial^2}{\\partial\\theta^2}\\log f(X; \\theta_0)\\right] = I(\\theta_0). \\quad \\cdots (**)\\]
                        <p>最后一步等号用了 Fisher 信息的第二种表示。</p>
                        <p>由于 \\(\\hat{\\theta}_n \\xrightarrow{P} \\theta_0\\)（条件 R5），而 \\(\\tilde{\\theta}_n\\) 在 \\(\\hat{\\theta}_n\\) 与 \\(\\theta_0\\) 之间，故 \\(\\tilde{\\theta}_n \\xrightarrow{P} \\theta_0\\)。在正则条件 (R3) 的光滑性下（三阶导数一致有界），可以将 \\((**)\\) 中的 \\(\\theta_0\\) 替换为 \\(\\tilde{\\theta}_n\\)：</p>
                        \\[-\\frac{1}{n}\\ell_n''(\\tilde{\\theta}_n) \\xrightarrow{P} I(\\theta_0). \\quad \\cdots (***)\\]

                        <p><strong>合并 Steps 3 & 4.</strong> 由 Slutsky 定理，(*) 和 (***) 联合给出：</p>
                        \\[\\sqrt{n}(\\hat{\\theta}_n - \\theta_0) = \\frac{\\frac{1}{\\sqrt{n}}\\ell_n'(\\theta_0)}{-\\frac{1}{n}\\ell_n''(\\tilde{\\theta}_n)} \\xrightarrow{d} \\frac{N(0, I(\\theta_0))}{I(\\theta_0)} = N\\!\\left(0, \\frac{I(\\theta_0)}{I(\\theta_0)^2}\\right) = N\\!\\left(0, \\frac{1}{I(\\theta_0)}\\right).\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition: 证明的三根支柱</div>
                    <div class="env-body">
                        <p>这个证明的结构极其优美，本质上依赖三个工具：</p>
                        <p><strong>1. Taylor 展开</strong>：将非线性问题线性化——这是把 MLE 的一阶条件"翻译"成 score 和 Hessian 的商。</p>
                        <p><strong>2. 中心极限定理 (CLT)</strong>：score 是 iid 求和，CLT 给出分子的极限分布。</p>
                        <p><strong>3. 大数定律 (LLN)</strong>：Hessian 是 iid 平均，LLN 让分母收敛到 Fisher 信息。</p>
                        <p>最后，Slutsky 定理把"分子收敛到正态"和"分母收敛到常数"组合在一起。</p>
                    </div>
                </div>

                <h3>渐近效率</h3>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 16.8 (MLE 的渐近效率 · Asymptotic Efficiency)</div>
                    <div class="env-body">
                        <p>在正则条件下，MLE 的渐近方差为 \\(1/[nI(\\theta_0)]\\)，恰好等于 Cram&eacute;r-Rao 下界。因此 MLE 是<strong>渐近有效的</strong> (asymptotically efficient)：在所有渐近正态的正则估计量中，MLE 的渐近方差最小。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.9 (Bernoulli MLE 的渐近分布)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Bernoulli}(p)\\)。</p>
                        <p>MLE: \\(\\hat{p} = \\bar{X}\\)。Fisher 信息: \\(I(p) = \\frac{1}{p(1-p)}\\)。</p>
                        <p>由 Theorem 16.7:</p>
                        \\[\\sqrt{n}(\\hat{p} - p) \\xrightarrow{d} N\\!\\left(0, p(1-p)\\right).\\]
                        <p>即 \\(\\hat{p} \\approx N\\!\\left(p, \\dfrac{p(1-p)}{n}\\right)\\)，这正是我们熟知的二项比例的正态近似。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.10 (Poisson MLE 的渐近分布)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Poisson}(\\lambda)\\)。</p>
                        <p>MLE: \\(\\hat{\\lambda} = \\bar{X}\\)。Fisher 信息: \\(I(\\lambda) = 1/\\lambda\\)。</p>
                        <p>由 Theorem 16.7:</p>
                        \\[\\sqrt{n}(\\hat{\\lambda} - \\lambda) \\xrightarrow{d} N(0, \\lambda).\\]
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="mle-asymptotic-normality"></div>
            `,
            visualizations: [
                {
                    id: 'mle-asymptotic-normality',
                    title: 'Interactive: MLE 渐近正态性 — √n(θ̂ - θ₀) 的分布',
                    description: '选择不同的分布族和样本量 n，观察 √n(θ̂ₘₗₑ - θ₀) 的直方图如何收敛到 N(0, 1/I(θ₀))',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 600, height: 400,
                            originX: 300, originY: 320,
                            scale: 55
                        });

                        var distributions = ['Bernoulli', 'Poisson', 'Exponential'];
                        var currentDist = 0;
                        var currentN = 30;
                        var nSims = 5000;

                        function fisherInfo(dist) {
                            if (dist === 0) return 1 / (0.3 * 0.7);
                            if (dist === 1) return 1 / 3.0;
                            return 1.0;
                        }

                        function trueParam(dist) {
                            if (dist === 0) return 0.3;
                            if (dist === 1) return 3.0;
                            return 1.0;
                        }

                        function simulate(dist, n) {
                            var theta0 = trueParam(dist);
                            var results = [];
                            for (var s = 0; s < nSims; s++) {
                                var mle;
                                if (dist === 0) {
                                    var sum = 0;
                                    for (var i = 0; i < n; i++) sum += (Math.random() < theta0) ? 1 : 0;
                                    mle = sum / n;
                                } else if (dist === 1) {
                                    var sum = 0;
                                    for (var i = 0; i < n; i++) {
                                        var L = Math.exp(-theta0);
                                        var k = 0;
                                        var p = 1;
                                        do { k++; p *= Math.random(); } while (p > L);
                                        sum += (k - 1);
                                    }
                                    mle = sum / n;
                                } else {
                                    var data = VizEngine.sampleArray(function() {
                                        return VizEngine.randomExponential(theta0);
                                    }, n);
                                    mle = VizEngine.mean(data);
                                }
                                results.push(Math.sqrt(n) * (mle - theta0));
                            }
                            return results;
                        }

                        function draw() {
                            var samples = simulate(currentDist, currentN);
                            var Itheta = fisherInfo(currentDist);
                            var asympVar = 1 / Itheta;

                            viz.clear();

                            var xMin = -5;
                            var xMax = 5;
                            var nBins = 50;
                            var binW = (xMax - xMin) / nBins;
                            var counts = new Array(nBins).fill(0);
                            for (var i = 0; i < samples.length; i++) {
                                var idx = Math.floor((samples[i] - xMin) / binW);
                                if (idx >= 0 && idx < nBins) counts[idx]++;
                            }
                            var maxDensity = 0;
                            var bins = [];
                            for (var i = 0; i < nBins; i++) {
                                var density = counts[i] / (nSims * binW);
                                if (density > maxDensity) maxDensity = density;
                                bins.push({
                                    x: xMin + i * binW,
                                    width: binW,
                                    height: density
                                });
                            }
                            viz.drawHistogram(bins, viz.colors.blue + '55', viz.colors.blue, 1);

                            var sigma = Math.sqrt(asympVar);
                            viz.drawFunction(function(x) {
                                return VizEngine.normalPDF(x, 0, sigma);
                            }, xMin, xMax, viz.colors.orange, 2.5);

                            viz.drawSegment(xMin, 0, xMax, 0, viz.colors.axis, 1);
                            for (var x = -4; x <= 4; x += 2) {
                                var sx = viz.toScreen(x, 0);
                                viz.ctx.fillStyle = viz.colors.text;
                                viz.ctx.font = '11px -apple-system,sans-serif';
                                viz.ctx.textAlign = 'center';
                                viz.ctx.textBaseline = 'top';
                                viz.ctx.fillText(x.toString(), sx[0], sx[1] + 4);
                            }

                            var theta0 = trueParam(currentDist);
                            viz.screenText(distributions[currentDist] + '(\u03B8\u2080 = ' + theta0 + '),  n = ' + currentN, 300, 25, viz.colors.white, 15, 'center');
                            viz.screenText('\u221An(\u03B8\u0302 - \u03B8\u2080) histogram vs N(0, 1/I(\u03B8\u2080))', 300, 45, viz.colors.text, 12, 'center');
                            viz.screenText('I(\u03B8\u2080) = ' + Itheta.toFixed(3) + ', 1/I(\u03B8\u2080) = ' + asympVar.toFixed(3), 300, 63, viz.colors.teal, 11, 'center');

                            var empirVar = VizEngine.variance(samples);
                            viz.screenText('Empirical var = ' + empirVar.toFixed(3), 300, 80, viz.colors.yellow, 11, 'center');
                        }

                        var distBtns = document.createElement('div');
                        distBtns.style.cssText = 'display:flex;gap:6px;margin-bottom:4px;';
                        distributions.forEach(function(name, i) {
                            var btn = document.createElement('button');
                            btn.textContent = name;
                            btn.style.cssText = 'padding:3px 10px;border:1px solid #30363d;border-radius:4px;background:' + (i === 0 ? '#58a6ff33' : '#1a1a40') + ';color:#c9d1d9;font-size:0.75rem;cursor:pointer;';
                            btn.addEventListener('click', function() {
                                currentDist = i;
                                for (var j = 0; j < distBtns.children.length; j++) {
                                    distBtns.children[j].style.background = (j === i) ? '#58a6ff33' : '#1a1a40';
                                }
                                draw();
                            });
                            distBtns.appendChild(btn);
                        });
                        controls.appendChild(distBtns);

                        VizEngine.createSlider(controls, 'n', 5, 500, currentN, 5, function(v) {
                            currentN = Math.round(v);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Resample', function() { draw(); });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Exp}(\\lambda)\\)，密度 \\(f(x; \\lambda) = \\lambda e^{-\\lambda x}\\)。求 MLE 及其渐近分布。',
                    hint: '先求 Fisher 信息 \\(I(\\lambda) = -E[\\ell\'\'(\\lambda)]\\)，其中 \\(\\ell(\\lambda) = n\\log\\lambda - \\lambda \\sum X_i\\)。',
                    solution: 'MLE: \\(\\hat{\\lambda} = 1/\\bar{X}\\)。Score: \\(\\ell\'(\\lambda) = n/\\lambda - \\sum X_i\\)。二阶导: \\(\\ell\'\'(\\lambda) = -n/\\lambda^2\\)。Fisher 信息: \\(I(\\lambda) = 1/\\lambda^2\\)。由 Theorem 16.7: \\(\\sqrt{n}(\\hat{\\lambda} - \\lambda) \\xrightarrow{d} N(0, \\lambda^2)\\)。'
                },
                {
                    question: '在 MLE 渐近正态性的证明中，为什么需要条件 (R2) "支撑不依赖于参数"？给出一个反例说明违反此条件时结论不成立。',
                    hint: '考虑 \\(\\text{Uniform}(0, \\theta)\\) 的 MLE。',
                    solution: '对 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Uniform}(0, \\theta)\\)，MLE 为 \\(\\hat{\\theta}_n = X_{(n)}\\)。可以证明 \\(n(\\theta - \\hat{\\theta}_n) \\xrightarrow{d} \\text{Exp}(1/\\theta)\\)。收敛速度为 \\(n\\) 而非 \\(\\sqrt{n}\\)，极限分布为指数分布而非正态分布。这是因为支撑 \\([0, \\theta]\\) 依赖于参数，违反了 (R2)，导致对数似然在边界处不可微。'
                },
                {
                    question: '设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\)，其中 \\(\\sigma^2\\) 已知。验证 MLE \\(\\hat{\\mu} = \\bar{X}\\) 的精确分布 \\(N(\\mu, \\sigma^2/n)\\) 与渐近分布 \\(N(\\mu, 1/(nI(\\mu)))\\) 完全一致。',
                    hint: '计算正态分布关于 \\(\\mu\\) 的 Fisher 信息。',
                    solution: '\\(\\log f(x; \\mu) = -\\frac{1}{2}\\log(2\\pi\\sigma^2) - \\frac{(x-\\mu)^2}{2\\sigma^2}\\)。\\(\\frac{\\partial}{\\partial\\mu}\\log f = \\frac{x-\\mu}{\\sigma^2}\\)，\\(\\frac{\\partial^2}{\\partial\\mu^2}\\log f = -\\frac{1}{\\sigma^2}\\)。于是 \\(I(\\mu) = 1/\\sigma^2\\)。渐近方差 \\(1/(nI(\\mu)) = \\sigma^2/n\\)，恰好等于精确方差。正态分布是渐近近似恰好等于精确分布的少有例子之一。'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Delta方法 (The Delta Method)
        // ============================================================
        {
            id: 'ch16-sec03',
            title: 'Delta方法',
            content: `
                <h2>Delta方法 · The Delta Method</h2>

                <p>MLE 的渐近正态性告诉我们 \\(\\hat{\\theta}_n\\) 近似服从正态分布。但在实际中，我们往往关心的是参数的某个<strong>变换</strong> \\(g(\\theta)\\)——例如，我们估计了 \\(\\lambda\\)，但想要 \\(1/\\lambda\\)（均值）或 \\(\\log\\lambda\\) 的渐近分布。Delta 方法正是为此而生。</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.11 (Delta 方法 · Delta Method)</div>
                    <div class="env-body">
                        <p>设 \\(\\sqrt{n}(X_n - \\mu) \\xrightarrow{d} N(0, \\sigma^2)\\)。若函数 \\(g\\) 在 \\(\\mu\\) 处可微且 \\(g'(\\mu) \\ne 0\\)，则：</p>
                        \\[\\sqrt{n}\\bigl(g(X_n) - g(\\mu)\\bigr) \\xrightarrow{d} N\\!\\left(0, \\sigma^2 [g'(\\mu)]^2\\right).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>将 \\(g(X_n)\\) 在 \\(\\mu\\) 处 Taylor 展开：</p>
                        \\[g(X_n) = g(\\mu) + g'(\\mu)(X_n - \\mu) + \\frac{1}{2}g''(\\xi_n)(X_n - \\mu)^2,\\]
                        <p>其中 \\(\\xi_n\\) 在 \\(X_n\\) 与 \\(\\mu\\) 之间。于是：</p>
                        \\[\\sqrt{n}(g(X_n) - g(\\mu)) = g'(\\mu) \\cdot \\sqrt{n}(X_n - \\mu) + \\frac{1}{2}g''(\\xi_n) \\cdot \\sqrt{n}(X_n - \\mu)^2.\\]
                        <p>因为 \\(\\sqrt{n}(X_n - \\mu) = O_P(1)\\)，所以 \\((X_n - \\mu) = O_P(1/\\sqrt{n})\\)，从而：</p>
                        \\[\\sqrt{n}(X_n - \\mu)^2 = \\frac{[\\sqrt{n}(X_n - \\mu)]^2}{\\sqrt{n}} = \\frac{O_P(1)}{\\sqrt{n}} \\xrightarrow{P} 0.\\]
                        <p>余项消失，由 Slutsky 定理：</p>
                        \\[\\sqrt{n}(g(X_n) - g(\\mu)) = g'(\\mu) \\cdot \\sqrt{n}(X_n - \\mu) + o_P(1) \\xrightarrow{d} g'(\\mu) \\cdot N(0, \\sigma^2) = N(0, \\sigma^2[g'(\\mu)]^2).\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.12 (指数分布均值的渐近分布)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Exp}(\\lambda)\\)，MLE 为 \\(\\hat{\\lambda} = 1/\\bar{X}\\)。我们知道 \\(\\sqrt{n}(\\hat{\\lambda} - \\lambda) \\xrightarrow{d} N(0, \\lambda^2)\\)。</p>
                        <p>均值参数为 \\(\\mu = g(\\lambda) = 1/\\lambda\\)，\\(g'(\\lambda) = -1/\\lambda^2\\)。由 Delta 方法：</p>
                        \\[\\sqrt{n}(\\bar{X} - 1/\\lambda) \\xrightarrow{d} N\\!\\left(0, \\lambda^2 \\cdot \\frac{1}{\\lambda^4}\\right) = N\\!\\left(0, \\frac{1}{\\lambda^2}\\right).\\]
                        <p>即 \\(\\bar{X} \\approx N(1/\\lambda, 1/(n\\lambda^2))\\)。当然这也可以直接由 CLT 得到（因为 \\(\\bar{X}\\) 本身就是样本均值），但 Delta 方法的价值在于可以处理更复杂的变换。</p>
                    </div>
                </div>

                <h3>二阶 Delta 方法</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.13 (二阶 Delta 方法)</div>
                    <div class="env-body">
                        <p>设 \\(\\sqrt{n}(X_n - \\mu) \\xrightarrow{d} N(0, \\sigma^2)\\)，且 \\(g'(\\mu) = 0\\) 但 \\(g''(\\mu) \\ne 0\\)。则：</p>
                        \\[n\\bigl(g(X_n) - g(\\mu)\\bigr) \\xrightarrow{d} \\frac{\\sigma^2 g''(\\mu)}{2} \\chi^2_1.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>由 Taylor 展开（\\(g'(\\mu) = 0\\)）：</p>
                        \\[g(X_n) - g(\\mu) = \\frac{g''(\\mu)}{2}(X_n - \\mu)^2 + o((X_n - \\mu)^2).\\]
                        <p>乘以 \\(n\\)：</p>
                        \\[n(g(X_n) - g(\\mu)) = \\frac{g''(\\mu)}{2} [\\sqrt{n}(X_n - \\mu)]^2 + o_P(1).\\]
                        <p>由连续映射定理，\\([\\sqrt{n}(X_n - \\mu)]^2 \\xrightarrow{d} \\sigma^2 \\chi^2_1\\)，故 \\(n(g(X_n) - g(\\mu)) \\xrightarrow{d} \\frac{\\sigma^2 g''(\\mu)}{2} \\chi^2_1\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h3>多元 Delta 方法</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.14 (多元 Delta 方法 · Multivariate Delta Method)</div>
                    <div class="env-body">
                        <p>设 \\(\\sqrt{n}(\\mathbf{X}_n - \\boldsymbol{\\mu}) \\xrightarrow{d} N(\\mathbf{0}, \\boldsymbol{\\Sigma})\\)，其中 \\(\\mathbf{X}_n \\in \\mathbb{R}^k\\)。若 \\(g: \\mathbb{R}^k \\to \\mathbb{R}\\) 在 \\(\\boldsymbol{\\mu}\\) 处可微，梯度 \\(\\nabla g(\\boldsymbol{\\mu}) \\ne \\mathbf{0}\\)，则：</p>
                        \\[\\sqrt{n}(g(\\mathbf{X}_n) - g(\\boldsymbol{\\mu})) \\xrightarrow{d} N\\!\\left(0, \\nabla g(\\boldsymbol{\\mu})^T \\boldsymbol{\\Sigma} \\, \\nabla g(\\boldsymbol{\\mu})\\right).\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.15 (比率的渐近分布)</div>
                    <div class="env-body">
                        <p>设 \\(\\bar{X}_n \\xrightarrow{P} \\mu_X\\)，\\(\\bar{Y}_n \\xrightarrow{P} \\mu_Y \\ne 0\\)，且</p>
                        \\[\\sqrt{n}\\begin{pmatrix} \\bar{X}_n - \\mu_X \\\\ \\bar{Y}_n - \\mu_Y \\end{pmatrix} \\xrightarrow{d} N\\!\\left(\\mathbf{0}, \\begin{pmatrix} \\sigma_X^2 & \\sigma_{XY} \\\\ \\sigma_{XY} & \\sigma_Y^2 \\end{pmatrix}\\right).\\]
                        <p>取 \\(g(x, y) = x/y\\)，\\(\\nabla g = (1/\\mu_Y, -\\mu_X/\\mu_Y^2)^T\\)。由多元 Delta 方法：</p>
                        \\[\\sqrt{n}\\left(\\frac{\\bar{X}_n}{\\bar{Y}_n} - \\frac{\\mu_X}{\\mu_Y}\\right) \\xrightarrow{d} N\\!\\left(0, \\frac{\\sigma_X^2}{\\mu_Y^2} - \\frac{2\\mu_X \\sigma_{XY}}{\\mu_Y^3} + \\frac{\\mu_X^2 \\sigma_Y^2}{\\mu_Y^4}\\right).\\]
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="delta-method-viz"></div>
            `,
            visualizations: [
                {
                    id: 'delta-method-viz',
                    title: 'Interactive: Delta 方法可视化',
                    description: '选择变换 g(x)，观察渐近分布如何被变换函数的导数所"缩放"',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 600, height: 420,
                            originX: 300, originY: 340,
                            scale: 55
                        });

                        var transforms = [
                            { name: 'g(x) = x\u00B2', fn: function(x) { return x * x; }, deriv: function(x) { return 2 * x; }, label: 'x\u00B2' },
                            { name: 'g(x) = \u221Ax', fn: function(x) { return Math.sqrt(Math.max(x, 0)); }, deriv: function(x) { return 0.5 / Math.sqrt(Math.max(x, 0.001)); }, label: '\u221Ax' },
                            { name: 'g(x) = log(x)', fn: function(x) { return Math.log(Math.max(x, 0.001)); }, deriv: function(x) { return 1 / Math.max(x, 0.001); }, label: 'log(x)' },
                            { name: 'g(x) = 1/x', fn: function(x) { return 1 / Math.max(x, 0.001); }, deriv: function(x) { return -1 / (x * x + 0.001); }, label: '1/x' },
                            { name: 'g(x) = e^x', fn: function(x) { return Math.exp(x); }, deriv: function(x) { return Math.exp(x); }, label: 'e^x' }
                        ];

                        var currentTransform = 0;
                        var mu = 2.0;
                        var sigma2 = 1.0;
                        var currentN = 50;
                        var nSims = 5000;

                        function draw() {
                            var g = transforms[currentTransform];
                            var sigma = Math.sqrt(sigma2);

                            var samples = [];
                            for (var s = 0; s < nSims; s++) {
                                var xBar = mu + VizEngine.randomNormal(0, sigma / Math.sqrt(currentN));
                                samples.push(Math.sqrt(currentN) * (g.fn(xBar) - g.fn(mu)));
                            }

                            viz.clear();

                            var gPrimeMu = g.deriv(mu);
                            var asympVar = sigma2 * gPrimeMu * gPrimeMu;
                            var asympSD = Math.sqrt(asympVar);

                            var xMin = -4 * Math.max(asympSD, 0.5);
                            var xMax = 4 * Math.max(asympSD, 0.5);
                            if (xMax - xMin < 2) { xMin = -2; xMax = 2; }

                            var nBins = 50;
                            var binW = (xMax - xMin) / nBins;
                            var counts = new Array(nBins).fill(0);
                            var inRange = 0;
                            for (var i = 0; i < samples.length; i++) {
                                var idx = Math.floor((samples[i] - xMin) / binW);
                                if (idx >= 0 && idx < nBins) { counts[idx]++; inRange++; }
                            }

                            var maxDensity = 0;
                            var bins = [];
                            for (var i = 0; i < nBins; i++) {
                                var density = counts[i] / (nSims * binW);
                                if (density > maxDensity) maxDensity = density;
                                bins.push({
                                    x: xMin + i * binW,
                                    width: binW,
                                    height: density
                                });
                            }

                            var scaleY = 3.5 / (maxDensity > 0 ? maxDensity : 1);
                            var scaledBins = bins.map(function(b) {
                                return { x: b.x, width: b.width, height: b.height * scaleY };
                            });

                            var scaleX = 5.0 / (xMax > 0 ? xMax : 1);
                            var scaledBins2 = scaledBins.map(function(b) {
                                return { x: b.x * scaleX, width: b.width * scaleX, height: b.height };
                            });

                            viz.drawHistogram(scaledBins2, viz.colors.blue + '44', viz.colors.blue, 1);

                            if (asympSD > 0.01) {
                                viz.drawFunction(function(x) {
                                    var realX = x / scaleX;
                                    return VizEngine.normalPDF(realX, 0, asympSD) * scaleY;
                                }, xMin * scaleX, xMax * scaleX, viz.colors.orange, 2.5);
                            }

                            viz.drawSegment(xMin * scaleX, 0, xMax * scaleX, 0, viz.colors.axis, 1);

                            viz.screenText(g.name + ',  \u03BC = ' + mu.toFixed(1) + ',  n = ' + currentN, 300, 22, viz.colors.white, 14, 'center');
                            viz.screenText("g'(\u03BC) = " + gPrimeMu.toFixed(3) + ',  asymptotic var = \u03C3\u00B2[g\'(\u03BC)]\u00B2 = ' + asympVar.toFixed(3), 300, 42, viz.colors.teal, 11, 'center');

                            var empirVar = VizEngine.variance(samples);
                            viz.screenText('Empirical var of \u221An(g(X\u0304) - g(\u03BC)): ' + empirVar.toFixed(3), 300, 60, viz.colors.yellow, 11, 'center');
                        }

                        var distBtns = document.createElement('div');
                        distBtns.style.cssText = 'display:flex;gap:4px;margin-bottom:4px;flex-wrap:wrap;';
                        transforms.forEach(function(t, i) {
                            var btn = document.createElement('button');
                            btn.textContent = t.name;
                            btn.style.cssText = 'padding:3px 8px;border:1px solid #30363d;border-radius:4px;background:' + (i === 0 ? '#58a6ff33' : '#1a1a40') + ';color:#c9d1d9;font-size:0.72rem;cursor:pointer;';
                            btn.addEventListener('click', function() {
                                currentTransform = i;
                                for (var j = 0; j < distBtns.children.length; j++) {
                                    distBtns.children[j].style.background = (j === i) ? '#58a6ff33' : '#1a1a40';
                                }
                                draw();
                            });
                            distBtns.appendChild(btn);
                        });
                        controls.appendChild(distBtns);

                        VizEngine.createSlider(controls, '\u03BC', 0.5, 5, mu, 0.5, function(v) { mu = v; draw(); });
                        VizEngine.createSlider(controls, 'n', 5, 500, currentN, 5, function(v) { currentN = Math.round(v); draw(); });
                        VizEngine.createButton(controls, 'Resample', function() { draw(); });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Bernoulli}(p)\\)。利用 Delta 方法求 \\(\\log\\frac{p}{1-p}\\)（log-odds）的渐近分布。',
                    hint: '先写出 \\(\\bar{X}\\) 的渐近分布，然后取 \\(g(x) = \\log\\frac{x}{1-x}\\)，计算 \\(g\'(p)\\)。',
                    solution: '\\(\\sqrt{n}(\\bar{X} - p) \\xrightarrow{d} N(0, p(1-p))\\)。取 \\(g(x) = \\log(x/(1-x))\\)，则 \\(g\'(x) = 1/(x(1-x))\\)，于是 \\(g\'(p) = 1/(p(1-p))\\)。由 Delta 方法: \\(\\sqrt{n}\\left(\\log\\frac{\\hat{p}}{1-\\hat{p}} - \\log\\frac{p}{1-p}\\right) \\xrightarrow{d} N\\left(0, \\frac{p(1-p)}{p^2(1-p)^2}\\right) = N\\left(0, \\frac{1}{p(1-p)}\\right)\\)。'
                },
                {
                    question: '设 \\(\\sqrt{n}(\\hat{\\sigma}^2 - \\sigma^2) \\xrightarrow{d} N(0, 2\\sigma^4)\\)（正态分布下样本方差的渐近分布）。利用 Delta 方法求 \\(\\hat{\\sigma} = \\sqrt{\\hat{\\sigma}^2}\\) 的渐近分布。',
                    hint: '取 \\(g(x) = \\sqrt{x}\\)，则 \\(g\'(x) = 1/(2\\sqrt{x})\\)。',
                    solution: '取 \\(g(x) = \\sqrt{x}\\)，\\(g\'(\\sigma^2) = \\frac{1}{2\\sigma}\\)。由 Delta 方法: \\(\\sqrt{n}(\\hat{\\sigma} - \\sigma) \\xrightarrow{d} N\\left(0, 2\\sigma^4 \\cdot \\frac{1}{4\\sigma^2}\\right) = N\\left(0, \\frac{\\sigma^2}{2}\\right)\\)。'
                },
                {
                    question: '证明 Theorem 16.13（二阶 Delta 方法）的完整细节。特别说明为什么收敛速度变为 \\(n\\) 而非 \\(\\sqrt{n}\\)。',
                    hint: '当 \\(g\'(\\mu) = 0\\) 时，一阶项消失，二阶项主导。利用连续映射定理处理 \\([\\sqrt{n}(X_n - \\mu)]^2\\)。',
                    solution: 'Taylor 展开到二阶: \\(g(X_n) - g(\\mu) = \\frac{g\'\'(\\mu)}{2}(X_n - \\mu)^2 + o((X_n - \\mu)^2)\\)（因为 \\(g\'(\\mu) = 0\\)）。乘以 \\(n\\): \\(n(g(X_n) - g(\\mu)) = \\frac{g\'\'(\\mu)}{2}[\\sqrt{n}(X_n - \\mu)]^2 + o_P(1)\\)。由假设 \\(\\sqrt{n}(X_n - \\mu) \\xrightarrow{d} Z \\sim N(0, \\sigma^2)\\)，由连续映射定理 \\(Z^2 \\sim \\sigma^2 \\chi^2_1\\)，故 \\(n(g(X_n) - g(\\mu)) \\xrightarrow{d} \\frac{\\sigma^2 g\'\'(\\mu)}{2} \\chi^2_1\\)。收敛速度为 \\(n\\) 因为 \\(g\\) 在 \\(\\mu\\) 处的一阶导为零，变换在该点"平坦"，需要二阶信息才能看到变化。'
                }
            ]
        },

        // ============================================================
        // SECTION 4: 渐近相对效率 (Asymptotic Relative Efficiency)
        // ============================================================
        {
            id: 'ch16-sec04',
            title: '渐近相对效率',
            content: `
                <h2>渐近相对效率 · Asymptotic Relative Efficiency</h2>

                <p>我们已经知道 MLE 是渐近有效的。但如何比较两个不同的估计量？如果估计量 A 的渐近方差小于估计量 B，那么 A"在大样本下更好"。<strong>渐近相对效率</strong> (ARE) 精确量化了这种比较。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.16 (渐近相对效率 · Asymptotic Relative Efficiency)</div>
                    <div class="env-body">
                        <p>设 \\(T_n\\) 和 \\(U_n\\) 是参数 \\(\\theta\\) 的两个渐近正态估计量：</p>
                        \\[\\sqrt{n}(T_n - \\theta) \\xrightarrow{d} N(0, v_T(\\theta)), \\quad \\sqrt{n}(U_n - \\theta) \\xrightarrow{d} N(0, v_U(\\theta)).\\]
                        <p>\\(U_n\\) 相对于 \\(T_n\\) 的<strong>渐近相对效率</strong>定义为：</p>
                        \\[\\text{ARE}(U_n, T_n) = \\frac{v_T(\\theta)}{v_U(\\theta)}.\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>ARE 的直观解释：若 \\(\\text{ARE}(U, T) = 2\\)，意味着用 \\(T\\) 达到与 \\(U\\) 相同的精度，需要大约 2 倍的样本量。换言之，\\(U\\) "更有效"，因为它用更少的数据就能达到同样的估计精度。</p>
                        <p>更精确地说：若 \\(\\text{ARE}(U, T) = c\\)，则 \\(T\\) 基于 \\(n\\) 个样本的渐近精度，\\(U\\) 只需约 \\(n/c\\) 个样本即可达到。</p>
                    </div>
                </div>

                <h3>经典例子：样本均值 vs. 样本中位数</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.17 (正态分布下样本中位数的渐近分布)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} f\\)，其中 \\(f\\) 是关于 \\(\\mu\\) 对称的连续密度。设 \\(M_n\\) 为样本中位数。则：</p>
                        \\[\\sqrt{n}(M_n - \\mu) \\xrightarrow{d} N\\!\\left(0, \\frac{1}{4[f(\\mu)]^2}\\right).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p>设 \\(F\\) 为 CDF，\\(m = F^{-1}(1/2) = \\mu\\)（对称分布的中位数等于均值）。样本中位数 \\(M_n\\) 本质上是 \\(F^{-1}(1/2)\\) 的估计。</p>
                        <p>样本分位数 \\(\\hat{q}_p\\) 的一般渐近理论给出：</p>
                        \\[\\sqrt{n}(\\hat{q}_p - q_p) \\xrightarrow{d} N\\!\\left(0, \\frac{p(1-p)}{[f(q_p)]^2}\\right).\\]
                        <p>取 \\(p = 1/2\\)：渐近方差为 \\(\\frac{(1/2)(1/2)}{[f(\\mu)]^2} = \\frac{1}{4[f(\\mu)]^2}\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.18 (正态分布: 样本均值 vs. 样本中位数)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\)。</p>
                        <p><strong>样本均值:</strong> \\(\\sqrt{n}(\\bar{X} - \\mu) \\xrightarrow{d} N(0, \\sigma^2)\\)，渐近方差 \\(v_{\\bar{X}} = \\sigma^2\\)。</p>
                        <p><strong>样本中位数:</strong> \\(f(\\mu) = \\frac{1}{\\sqrt{2\\pi}\\sigma}\\)，渐近方差 \\(v_M = \\frac{1}{4 \\cdot \\frac{1}{2\\pi\\sigma^2}} = \\frac{\\pi\\sigma^2}{2}\\)。</p>
                        <p>因此：</p>
                        \\[\\text{ARE}(\\bar{X}, M_n) = \\frac{v_M}{v_{\\bar{X}}} = \\frac{\\pi\\sigma^2 / 2}{\\sigma^2} = \\frac{\\pi}{2} \\approx 1.571.\\]
                        <p>样本均值比样本中位数高效约 57%。等价地说，样本中位数需要约 \\(\\pi n/2\\) 个观测才能达到样本均值用 \\(n\\) 个观测的同等精度。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark: 中位数的鲁棒性优势</div>
                    <div class="env-body">
                        <p>虽然在正态分布下样本均值更高效，但在重尾分布（如 Cauchy 分布）下，样本均值的方差可能不存在，而样本中位数仍有有限的渐近方差。在存在离群值的情况下，中位数的鲁棒性远超均值。效率与鲁棒性的权衡是统计学的核心话题之一。</p>
                    </div>
                </div>

                <h3>Pitman 渐近相对效率</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.19 (Pitman ARE)</div>
                    <div class="env-body">
                        <p>在假设检验的语境中，Pitman ARE 比较两个检验在<strong>局部备择假设</strong>下的检验功效。设检验 \\(T_n\\) 基于 \\(n_T\\) 个样本，检验 \\(U_n\\) 基于 \\(n_U\\) 个样本，二者在相同的局部备择假设序列下达到相同的渐近功效。Pitman ARE 定义为：</p>
                        \\[e(U, T) = \\lim_{n \\to \\infty} \\frac{n_T}{n_U}.\\]
                        <p>对于位置参数问题中的渐近正态估计量，Pitman ARE 与 Definition 16.16 中的 ARE 一致。</p>
                    </div>
                </div>

                <h3>MLE vs. 矩估计的 ARE</h3>

                <div class="env-block example">
                    <div class="env-title">Example 16.20 (Gamma 分布: MLE vs. 矩估计)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Gamma}(\\alpha, \\beta)\\)，密度 \\(f(x) = \\frac{\\beta^\\alpha}{\\Gamma(\\alpha)} x^{\\alpha-1} e^{-\\beta x}\\)。</p>
                        <p><strong>矩估计</strong>利用 \\(E[X] = \\alpha/\\beta\\) 和 \\(\\operatorname{Var}(X) = \\alpha/\\beta^2\\) 得到：</p>
                        \\[\\hat{\\alpha}_{\\text{MOM}} = \\frac{\\bar{X}^2}{S^2}, \\quad \\hat{\\beta}_{\\text{MOM}} = \\frac{\\bar{X}}{S^2}.\\]
                        <p><strong>MLE</strong> 需要数值求解似然方程，其渐近方差达到 Fisher 信息矩阵的逆。矩估计的渐近方差可通过多元 Delta 方法计算，通常严格大于 CRLB。</p>
                        <p>例如，当 \\(\\alpha = 1\\)（即指数分布）时，MLE 和矩估计对 \\(\\beta\\) 的估计一致。但当 \\(\\alpha\\) 较大时，矩估计的效率损失可能显著。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="are-comparison"></div>

                <div class="viz-placeholder" data-viz="mean-vs-median-are"></div>
            `,
            visualizations: [
                {
                    id: 'are-comparison',
                    title: 'Interactive: ARE 比较 — 两个估计量的渐近分布',
                    description: '比较样本均值和样本中位数在不同分布下的渐近效率',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 600, height: 380,
                            originX: 300, originY: 310,
                            scale: 80
                        });

                        var currentN = 100;
                        var nSims = 5000;
                        var mu = 0;
                        var sigma = 1;

                        function draw() {
                            var meanResults = [];
                            var medianResults = [];

                            for (var s = 0; s < nSims; s++) {
                                var data = VizEngine.sampleArray(function() {
                                    return VizEngine.randomNormal(mu, sigma);
                                }, currentN);
                                meanResults.push(Math.sqrt(currentN) * (VizEngine.mean(data) - mu));
                                medianResults.push(Math.sqrt(currentN) * (VizEngine.median(data) - mu));
                            }

                            viz.clear();

                            var xMin = -4;
                            var xMax = 4;
                            var nBins = 60;
                            var binW = (xMax - xMin) / nBins;

                            function makeBins(results) {
                                var counts = new Array(nBins).fill(0);
                                for (var i = 0; i < results.length; i++) {
                                    var idx = Math.floor((results[i] - xMin) / binW);
                                    if (idx >= 0 && idx < nBins) counts[idx]++;
                                }
                                var bins = [];
                                for (var i = 0; i < nBins; i++) {
                                    bins.push({
                                        x: xMin + i * binW,
                                        width: binW,
                                        height: counts[i] / (nSims * binW)
                                    });
                                }
                                return bins;
                            }

                            var meanBins = makeBins(meanResults);
                            var medianBins = makeBins(medianResults);

                            var maxH = 0;
                            for (var i = 0; i < nBins; i++) {
                                if (meanBins[i].height > maxH) maxH = meanBins[i].height;
                                if (medianBins[i].height > maxH) maxH = medianBins[i].height;
                            }
                            var scaleY = 3.5 / (maxH > 0 ? maxH : 1);

                            var scaledMean = meanBins.map(function(b) { return { x: b.x, width: b.width, height: b.height * scaleY }; });
                            var scaledMedian = medianBins.map(function(b) { return { x: b.x, width: b.width, height: b.height * scaleY }; });

                            viz.drawHistogram(scaledMedian, viz.colors.purple + '33', viz.colors.purple, 1);
                            viz.drawHistogram(scaledMean, viz.colors.blue + '33', viz.colors.blue, 1);

                            var varMean = sigma * sigma;
                            var varMedian = Math.PI * sigma * sigma / 2;

                            viz.drawFunction(function(x) { return VizEngine.normalPDF(x, 0, Math.sqrt(varMean)) * scaleY; }, xMin, xMax, viz.colors.blue, 2);
                            viz.drawFunction(function(x) { return VizEngine.normalPDF(x, 0, Math.sqrt(varMedian)) * scaleY; }, xMin, xMax, viz.colors.purple, 2);

                            viz.drawSegment(xMin, 0, xMax, 0, viz.colors.axis, 1);

                            viz.screenText('n = ' + currentN + ',  Normal(\u03BC, \u03C3\u00B2)', 300, 22, viz.colors.white, 14, 'center');

                            viz.screenText('\u25A0', 150, 45, viz.colors.blue, 12, 'center');
                            viz.screenText(' Mean: var = ' + VizEngine.variance(meanResults).toFixed(3) + ' (theory: ' + varMean.toFixed(3) + ')', 240, 45, viz.colors.blue, 11, 'left');

                            viz.screenText('\u25A0', 150, 62, viz.colors.purple, 12, 'center');
                            viz.screenText(' Median: var = ' + VizEngine.variance(medianResults).toFixed(3) + ' (theory: ' + varMedian.toFixed(3) + ')', 240, 62, viz.colors.purple, 11, 'left');

                            var are = varMedian / varMean;
                            viz.screenText('ARE(Mean, Median) = \u03C0/2 \u2248 ' + are.toFixed(3), 300, 82, viz.colors.orange, 12, 'center');
                        }

                        VizEngine.createSlider(controls, 'n', 10, 500, currentN, 10, function(v) {
                            currentN = Math.round(v);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Resample', function() { draw(); });

                        draw();
                        return viz;
                    }
                },
                {
                    id: 'mean-vs-median-are',
                    title: 'Interactive: 不同分布下的 ARE',
                    description: '比较样本均值与中位数在正态分布和重尾分布下的表现',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 600, height: 380,
                            originX: 300, originY: 310,
                            scale: 50
                        });

                        var distributions = ['Normal', 'Laplace', 'Cauchy-mix'];
                        var currentDist = 0;
                        var currentN = 100;
                        var nSims = 3000;

                        function sampleFrom(dist) {
                            if (dist === 0) return VizEngine.randomNormal(0, 1);
                            if (dist === 1) {
                                var u = Math.random() - 0.5;
                                return -Math.sign(u) * Math.log(1 - 2 * Math.abs(u));
                            }
                            if (dist === 2) {
                                if (Math.random() < 0.9) return VizEngine.randomNormal(0, 1);
                                return VizEngine.randomNormal(0, 1) / (Math.random() < 0.5 ? 0.1 : -0.1 + VizEngine.randomNormal(0, 0.3));
                            }
                            return VizEngine.randomNormal(0, 1);
                        }

                        function draw() {
                            var meanResults = [];
                            var medianResults = [];

                            for (var s = 0; s < nSims; s++) {
                                var data = [];
                                for (var i = 0; i < currentN; i++) data.push(sampleFrom(currentDist));
                                meanResults.push(VizEngine.mean(data));
                                medianResults.push(VizEngine.median(data));
                            }

                            viz.clear();

                            var meanVar = VizEngine.variance(meanResults);
                            var medianVar = VizEngine.variance(medianResults);
                            var are = meanVar / medianVar;

                            var allRes = meanResults.concat(medianResults);
                            var q01 = VizEngine.quantile(allRes, 0.01);
                            var q99 = VizEngine.quantile(allRes, 0.99);
                            var xMin = q01 - 0.2;
                            var xMax = q99 + 0.2;
                            var range = xMax - xMin;
                            if (range < 0.5) { xMin -= 0.5; xMax += 0.5; range = xMax - xMin; }

                            var nBins = 50;
                            var binW = range / nBins;

                            function makeBins(results) {
                                var counts = new Array(nBins).fill(0);
                                for (var i = 0; i < results.length; i++) {
                                    var idx = Math.floor((results[i] - xMin) / binW);
                                    if (idx >= 0 && idx < nBins) counts[idx]++;
                                }
                                return counts;
                            }

                            var meanCounts = makeBins(meanResults);
                            var medianCounts = makeBins(medianResults);
                            var maxCount = 0;
                            for (var i = 0; i < nBins; i++) {
                                if (meanCounts[i] > maxCount) maxCount = meanCounts[i];
                                if (medianCounts[i] > maxCount) maxCount = medianCounts[i];
                            }

                            var scaleX = 10 / range;
                            var scaleH = 3.5 / (maxCount > 0 ? maxCount : 1);

                            function drawHist(counts, color) {
                                var bins = [];
                                for (var i = 0; i < nBins; i++) {
                                    bins.push({
                                        x: (xMin + i * binW) * scaleX,
                                        width: binW * scaleX,
                                        height: counts[i] * scaleH
                                    });
                                }
                                viz.drawHistogram(bins, color + '33', color, 1);
                            }

                            drawHist(medianCounts, viz.colors.purple);
                            drawHist(meanCounts, viz.colors.blue);

                            viz.drawSegment(xMin * scaleX, 0, xMax * scaleX, 0, viz.colors.axis, 1);

                            viz.screenText(distributions[currentDist] + ' distribution, n = ' + currentN, 300, 22, viz.colors.white, 14, 'center');

                            viz.screenText('\u25A0', 120, 42, viz.colors.blue, 12, 'center');
                            viz.screenText(' Mean: MSE \u2248 ' + (meanVar * currentN).toFixed(3), 195, 42, viz.colors.blue, 11, 'left');

                            viz.screenText('\u25A0', 350, 42, viz.colors.purple, 12, 'center');
                            viz.screenText(' Median: MSE \u2248 ' + (medianVar * currentN).toFixed(3), 425, 42, viz.colors.purple, 11, 'left');

                            var interpretation = are > 1 ? 'Median wins!' : (are < 1 ? 'Mean wins!' : 'Tie');
                            viz.screenText('ARE(Median, Mean) = ' + are.toFixed(3) + '  ' + interpretation, 300, 62, viz.colors.orange, 12, 'center');
                        }

                        var distBtns = document.createElement('div');
                        distBtns.style.cssText = 'display:flex;gap:6px;margin-bottom:4px;';
                        distributions.forEach(function(name, i) {
                            var btn = document.createElement('button');
                            btn.textContent = name;
                            btn.style.cssText = 'padding:3px 10px;border:1px solid #30363d;border-radius:4px;background:' + (i === 0 ? '#58a6ff33' : '#1a1a40') + ';color:#c9d1d9;font-size:0.75rem;cursor:pointer;';
                            btn.addEventListener('click', function() {
                                currentDist = i;
                                for (var j = 0; j < distBtns.children.length; j++) {
                                    distBtns.children[j].style.background = (j === i) ? '#58a6ff33' : '#1a1a40';
                                }
                                draw();
                            });
                            distBtns.appendChild(btn);
                        });
                        controls.appendChild(distBtns);

                        VizEngine.createSlider(controls, 'n', 10, 500, currentN, 10, function(v) {
                            currentN = Math.round(v);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Resample', function() { draw(); });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Laplace}(\\mu, b)\\)，密度 \\(f(x) = \\frac{1}{2b}e^{-|x-\\mu|/b}\\)。计算样本均值和样本中位数对 \\(\\mu\\) 的 ARE。',
                    hint: 'Laplace 分布: \\(\\operatorname{Var}(X) = 2b^2\\)，\\(f(\\mu) = 1/(2b)\\)。',
                    solution: '样本均值: 渐近方差 \\(v_{\\bar{X}} = 2b^2\\)。样本中位数: \\(f(\\mu) = 1/(2b)\\)，渐近方差 \\(v_M = \\frac{1}{4 \\cdot (1/(2b))^2} = b^2\\)。ARE(Median, Mean) = \\(v_{\\bar{X}}/v_M = 2b^2/b^2 = 2\\)。样本中位数是样本均值效率的两倍！这与正态分布的结论完全相反——在 Laplace（重尾）分布下，中位数比均值更高效。'
                },
                {
                    question: '设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\)。比较两个 \\(\\sigma^2\\) 的估计量: (1) MLE \\(\\hat{\\sigma}^2_{\\text{MLE}} = \\frac{1}{n}\\sum(X_i - \\bar{X})^2\\); (2) 无偏估计 \\(S^2 = \\frac{1}{n-1}\\sum(X_i - \\bar{X})^2\\)。求它们的 ARE。',
                    hint: '两者都是渐近正态的，渐近方差分别由 \\(\\frac{2\\sigma^4}{n}\\) 的系数决定。注意 \\(\\hat{\\sigma}^2_{\\text{MLE}} = \\frac{n-1}{n} S^2\\)。',
                    solution: '由于 \\(\\hat{\\sigma}^2_{\\text{MLE}} = \\frac{n-1}{n} S^2\\)，当 \\(n \\to \\infty\\) 时两者之比趋于 1。具体地，二者都有 \\(\\sqrt{n}(\\hat{\\sigma}^2 - \\sigma^2) \\xrightarrow{d} N(0, 2\\sigma^4)\\)（相同的渐近方差）。因此 ARE = 1。它们在大样本下渐近等价，虽然在有限样本中 \\(S^2\\) 是无偏的而 MLE 有偏。'
                },
                {
                    question: '解释为什么 ARE 是大样本理论的概念，可能无法准确反映有限样本的表现。给出一个 ARE = 1 但有限样本行为差异显著的例子。',
                    hint: '考虑两个估计量可能有相同的渐近方差但不同的偏差或高阶项。',
                    solution: 'ARE 只比较渐近方差的一阶项（\\(1/n\\) 的系数），忽略了高阶项（\\(1/n^2\\) 等）和有限样本偏差。例如，正态分布下估计 \\(\\sigma^2\\) 时，MLE \\(\\hat{\\sigma}^2 = \\frac{1}{n}\\sum(X_i - \\bar{X})^2\\) 和 \\(S^2 = \\frac{1}{n-1}\\sum(X_i - \\bar{X})^2\\) 有 ARE = 1，但对小 \\(n\\)（如 \\(n=5\\)），MLE 的偏差 \\(-\\sigma^2/n\\) 导致其 MSE 为 \\(\\frac{2(n-1)}{n^2}\\sigma^4\\)，而 \\(S^2\\) 的 MSE 为 \\(\\frac{2}{n-1}\\sigma^4\\)。当 \\(n=5\\) 时，这两个值分别为 \\(0.32\\sigma^4\\) 和 \\(0.50\\sigma^4\\)，差异超过 50%。'
                }
            ]
        }
    ]
});

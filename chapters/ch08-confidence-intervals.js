// Chapter 8: 置信区间 (Confidence Intervals)
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch08',
    number: 8,
    title: '置信区间',
    subtitle: 'Confidence Intervals',
    sections: [
        // ============================================================
        // Section 1: 置信区间的概念
        // ============================================================
        {
            id: 'ch08-sec01',
            title: '置信区间的概念',
            content: `
                <h2>置信区间的概念 The Concept of Confidence Intervals</h2>

                <p>点估计给出了参数的一个"最佳猜测"，但无法告诉我们这个猜测有多准确。<strong>置信区间</strong>（confidence interval）通过给出一个随机区间来量化估计的不确定性——这个区间以指定的概率覆盖真参数值。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 8.1 (置信区间)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n\\\\) 是来自含参数 \\\\(\\\\theta \\\\in \\\\Theta\\\\) 的总体的随机样本。若统计量 \\\\(L = L(X_1,\\\\ldots,X_n)\\\\) 和 \\\\(U = U(X_1,\\\\ldots,X_n)\\\\) 满足</p>
                        \\\\[P_{\\\\theta}(L \\\\leq \\\\theta \\\\leq U) \\\\geq 1 - \\\\alpha, \\\\quad \\\\forall \\\\theta \\\\in \\\\Theta,\\\\]
                        <p>则称随机区间 \\\\([L, U]\\\\) 为 \\\\(\\\\theta\\\\) 的 <strong>\\\\(1-\\\\alpha\\\\) 置信区间</strong>（confidence interval），\\\\(1-\\\\alpha\\\\) 称为<strong>置信水平</strong>（confidence level）。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition: 频率学派解读</div>
                    <div class="env-body">
                        <p>置信区间的正确解读是<strong>频率学派</strong>的：如果我们重复抽样无穷多次，每次都构造一个 95% 置信区间，则这些区间中有 95% 会包含真参数 \\\\(\\\\theta\\\\)。</p>
                        <p>注意：对于一个<strong>已经算出的</strong>具体区间 \\\\([l, u]\\\\)，不能说"\\\\(\\\\theta\\\\) 以 95% 的概率落在 \\\\([l, u]\\\\) 中"，因为 \\\\(\\\\theta\\\\) 是一个固定的常数，而 \\\\([l, u]\\\\) 也是确定的数值——不存在随机性。正确的说法是："我们有 95% 的信心认为此区间覆盖了 \\\\(\\\\theta\\\\)"，其中"信心"来自于方法的长期表现。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 8.2 (枢轴量)</div>
                    <div class="env-body">
                        <p>设 \\\\(Q = Q(X_1,\\\\ldots,X_n; \\\\theta)\\\\) 是样本和参数的函数。若 \\\\(Q\\\\) 的分布不依赖于任何未知参数，则称 \\\\(Q\\\\) 为<strong>枢轴量</strong>（pivotal quantity）。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.3 (枢轴量法构造置信区间)</div>
                    <div class="env-body">
                        <p>设 \\\\(Q(X_1, \\\\ldots, X_n; \\\\theta)\\\\) 为枢轴量，其分布函数为 \\\\(F_Q\\\\)。若存在常数 \\\\(a < b\\\\) 使得</p>
                        \\\\[P(a \\\\leq Q \\\\leq b) = 1 - \\\\alpha,\\\\]
                        <p>且不等式 \\\\(a \\\\leq Q(\\\\mathbf{X}; \\\\theta) \\\\leq b\\\\) 可以等价地改写为 \\\\(L(\\\\mathbf{X}) \\\\leq \\\\theta \\\\leq U(\\\\mathbf{X})\\\\)，则 \\\\([L(\\\\mathbf{X}), U(\\\\mathbf{X})]\\\\) 是 \\\\(\\\\theta\\\\) 的 \\\\(100(1-\\\\alpha)\\\\%\\\\) 置信区间。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>由枢轴量定义，\\\\(Q\\\\) 的分布不依赖于 \\\\(\\\\theta\\\\)，因此 \\\\(P(a \\\\leq Q \\\\leq b) = 1 - \\\\alpha\\\\) 对所有 \\\\(\\\\theta\\\\) 成立。又因为 \\\\(\\{a \\\\leq Q \\\\leq b\\}\\\\) 与 \\\\(\\{L \\\\leq \\\\theta \\\\leq U\\}\\\\) 等价，故</p>
                        \\\\[P_{\\\\theta}(L \\\\leq \\\\theta \\\\leq U) = P(a \\\\leq Q \\\\leq b) = 1 - \\\\alpha, \\\\quad \\\\forall\\\\, \\\\theta.\\\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <p>枢轴量方法是构造置信区间的核心技巧。其基本步骤如下：</p>
                <ol>
                    <li>找到一个枢轴量 \\\\(Q(X_1,\\\\ldots,X_n;\\\\theta)\\\\)，其分布已知且不含未知参数；</li>
                    <li>根据 \\\\(Q\\\\) 的分布找到分位点 \\\\(q_1, q_2\\\\) 使得 \\\\(P(q_1 \\\\leq Q \\\\leq q_2) = 1-\\\\alpha\\\\)；</li>
                    <li>从不等式 \\\\(q_1 \\\\leq Q \\\\leq q_2\\\\) 中解出 \\\\(\\\\theta\\\\)，得到 \\\\(L \\\\leq \\\\theta \\\\leq U\\\\)。</li>
                </ol>

                <div class="env-block example">
                    <div class="env-title">Example 8.4 (正态均值的枢轴量)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1,\\\\ldots,X_n \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu, \\\\sigma^2)\\\\)，\\\\(\\\\sigma^2\\\\) 已知。则</p>
                        \\\\[Q = \\\\frac{\\\\bar{X} - \\\\mu}{\\\\sigma / \\\\sqrt{n}} \\\\sim N(0,1)\\\\]
                        <p>是一个枢轴量。由 \\\\(P(-z_{\\\\alpha/2} \\\\leq Q \\\\leq z_{\\\\alpha/2}) = 1-\\\\alpha\\\\)，解出</p>
                        \\\\[\\\\bar{X} - z_{\\\\alpha/2} \\\\frac{\\\\sigma}{\\\\sqrt{n}} \\\\leq \\\\mu \\\\leq \\\\bar{X} + z_{\\\\alpha/2} \\\\frac{\\\\sigma}{\\\\sqrt{n}}.\\\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 8.5 (指数分布的枢轴量)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n \\\\sim \\\\text{Exp}(\\\\lambda)\\\\)。则 \\\\(2\\\\lambda \\\\sum_{i=1}^n X_i \\\\sim \\\\chi^2(2n)\\\\)，这是一个关于 \\\\(\\\\lambda\\\\) 的枢轴量。设 \\\\(\\\\chi^2_{\\\\alpha/2}(2n)\\\\) 和 \\\\(\\\\chi^2_{1-\\\\alpha/2}(2n)\\\\) 分别为 \\\\(\\\\chi^2(2n)\\\\) 分布的 \\\\(\\\\alpha/2\\\\) 和 \\\\(1-\\\\alpha/2\\\\) 分位数，则</p>
                        \\\\[P\\\\!\\\\left(\\\\chi^2_{\\\\alpha/2}(2n) \\\\leq 2\\\\lambda \\\\sum X_i \\\\leq \\\\chi^2_{1-\\\\alpha/2}(2n)\\\\right) = 1 - \\\\alpha,\\\\]
                        <p>变形得 \\\\(\\\\lambda\\\\) 的 \\\\(100(1-\\\\alpha)\\\\%\\\\) 置信区间为</p>
                        \\\\[\\\\left[\\\\frac{\\\\chi^2_{\\\\alpha/2}(2n)}{2\\\\sum X_i},\\; \\\\frac{\\\\chi^2_{1-\\\\alpha/2}(2n)}{2\\\\sum X_i}\\\\right].\\\\]
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 8.6 (覆盖概率)</div>
                    <div class="env-body">
                        <p>置信区间 \\\\([L, U]\\\\) 的<strong>覆盖概率</strong>（coverage probability）定义为</p>
                        \\\\[C(\\\\theta) = P_{\\\\theta}(L \\\\leq \\\\theta \\\\leq U).\\\\]
                        <p>若对所有 \\\\(\\\\theta\\\\) 都有 \\\\(C(\\\\theta) \\\\geq 1-\\\\alpha\\\\)，则 \\\\([L,U]\\\\) 是有效的 \\\\(1-\\\\alpha\\\\) 置信区间。若 \\\\(C(\\\\theta) = 1-\\\\alpha\\\\) 对所有 \\\\(\\\\theta\\\\) 成立，则称该区间是<strong>精确的</strong>（exact）。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>在同一置信水平下，区间越短越好——更短的区间意味着更精确的估计。对于对称分布的枢轴量，使用等尾分位点 \\\\(q_{\\\\alpha/2}\\\\) 和 \\\\(q_{1-\\\\alpha/2}\\\\) 通常给出最短区间；但对于偏斜分布（如 \\\\(\\\\chi^2\\\\)），等尾区间不一定是最短的。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="coverage-demo"></div>
            `,
            visualizations: [
                {
                    id: 'coverage-demo',
                    title: '交互演示：置信区间覆盖率',
                    description: '生成100个置信区间，观察哪些包含真实均值 μ，统计覆盖率',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 420,
                            originX: 80, originY: 380, scale: 40
                        });

                        var trueMu = 5;
                        var sigma = 2;
                        var n = 25;
                        var alpha = 0.05;
                        var intervals = [];

                        function generateIntervals() {
                            intervals = [];
                            var zCrit = 1.96; // z_{0.025}
                            var halfWidth = zCrit * sigma / Math.sqrt(n);
                            for (var i = 0; i < 100; i++) {
                                var sample = VizEngine.sampleArray(function() { return VizEngine.randomNormal(trueMu, sigma); }, n);
                                var xbar = VizEngine.mean(sample);
                                intervals.push({
                                    lower: xbar - halfWidth,
                                    upper: xbar + halfWidth,
                                    covers: (xbar - halfWidth <= trueMu) && (trueMu <= xbar + halfWidth)
                                });
                            }
                        }

                        generateIntervals();

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Title
                            viz.screenText('100 Confidence Intervals (95% level)', viz.width / 2, 16, viz.colors.white, 14);

                            var coverCount = 0;
                            var yStep = (viz.height - 60) / 100;

                            // Draw true mu vertical line
                            var muScreenX = viz.originX + (trueMu - 2) * viz.scale;
                            ctx.strokeStyle = viz.colors.yellow;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            ctx.moveTo(muScreenX, 30);
                            ctx.lineTo(muScreenX, viz.height - 10);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            viz.screenText('true ' + String.fromCharCode(956), muScreenX, 28, viz.colors.yellow, 11);

                            for (var i = 0; i < intervals.length; i++) {
                                var ci = intervals[i];
                                var yPos = 38 + i * yStep;
                                var lx = viz.originX + (ci.lower - 2) * viz.scale;
                                var ux = viz.originX + (ci.upper - 2) * viz.scale;
                                var color = ci.covers ? viz.colors.blue : viz.colors.red;

                                ctx.strokeStyle = color;
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                ctx.moveTo(lx, yPos);
                                ctx.lineTo(ux, yPos);
                                ctx.stroke();

                                // caps
                                ctx.beginPath();
                                ctx.moveTo(lx, yPos - 2);
                                ctx.lineTo(lx, yPos + 2);
                                ctx.stroke();
                                ctx.beginPath();
                                ctx.moveTo(ux, yPos - 2);
                                ctx.lineTo(ux, yPos + 2);
                                ctx.stroke();

                                if (ci.covers) coverCount++;
                            }

                            // Legend
                            var rate = (coverCount / 100 * 100).toFixed(0);
                            viz.screenText('Coverage: ' + coverCount + '/100 = ' + rate + '%', viz.width / 2, viz.height - 5, viz.colors.white, 13);

                            // Color legend
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillRect(viz.width - 170, viz.height - 50, 10, 10);
                            viz.screenText('contains ' + String.fromCharCode(956), viz.width - 105, viz.height - 44, viz.colors.blue, 11, 'center');

                            ctx.fillStyle = viz.colors.red;
                            ctx.fillRect(viz.width - 170, viz.height - 35, 10, 10);
                            viz.screenText('misses ' + String.fromCharCode(956), viz.width - 113, viz.height - 29, viz.colors.red, 11, 'center');
                        }

                        draw();

                        VizEngine.createButton(controls, 'Resample', function() {
                            generateIntervals();
                            draw();
                        });

                        VizEngine.createSlider(controls, 'n (sample size)', 5, 100, n, 5, function(val) {
                            n = val;
                            generateIntervals();
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\\\(X_1,\\\\ldots,X_n \\\\overset{\\\\text{iid}}{\\\\sim} U(0, \\\\theta)\\\\)，令 \\\\(X_{(n)} = \\\\max_i X_i\\\\)。证明 \\\\(Q = X_{(n)}/\\\\theta\\\\) 是一个枢轴量，并利用它构造 \\\\(\\\\theta\\\\) 的 \\\\(1-\\\\alpha\\\\) 置信区间。',
                    hint: '\\\\(X_{(n)}/\\\\theta\\\\) 的 CDF 是 \\\\(P(X_{(n)}/\\\\theta \\\\leq t) = t^n\\\\)，\\\\(0 \\\\leq t \\\\leq 1\\\\)。',
                    solution: '由 \\\\(P(X_{(n)} \\\\leq x) = (x/\\\\theta)^n\\\\)（\\\\(0 \\\\leq x \\\\leq \\\\theta\\\\)），令 \\\\(Q = X_{(n)}/\\\\theta\\\\)，则 \\\\(P(Q \\\\leq t) = t^n\\\\)，不含 \\\\(\\\\theta\\\\)，因此 \\\\(Q\\\\) 是枢轴量。取 \\\\(P(\\\\alpha^{1/n} \\\\leq Q \\\\leq 1) = 1 - \\\\alpha\\\\)，解出 \\\\(X_{(n)} \\\\leq \\\\theta \\\\leq X_{(n)} / \\\\alpha^{1/n}\\\\)。'
                },
                {
                    question: '某教授声称："我计算得到 \\\\(\\\\mu\\\\) 的 95% 置信区间为 \\\\([3.2, 5.8]\\\\)，因此 \\\\(\\\\mu\\\\) 有 95% 的概率在 \\\\(3.2\\\\) 到 \\\\(5.8\\\\) 之间。" 这句话是否正确？请解释。',
                    hint: '考虑频率学派对置信区间的解读。',
                    solution: '不正确。在频率学派框架下，\\\\(\\\\mu\\\\) 是固定常数，不存在"概率"一说。正确解读是：如果重复抽样无穷多次并构造 95% 置信区间，则长期来看有 95% 的区间包含 \\\\(\\\\mu\\\\)。对于这个特定区间 \\\\([3.2, 5.8]\\\\)，\\\\(\\\\mu\\\\) 要么在其中，要么不在，是确定性事件。'
                },
                {
                    question: '为什么枢轴量的分布不能依赖于未知参数？如果依赖了，会导致什么问题？',
                    hint: '考虑从 \\\\(P(q_1 \\\\leq Q \\\\leq q_2) = 1-\\\\alpha\\\\) 确定分位点的过程。',
                    solution: '枢轴量的分布不含未知参数，因此分位点 \\\\(q_1, q_2\\\\) 可以从已知分布表中直接查到。若分布依赖于未知参数 \\\\(\\\\theta\\\\)，则分位点也是 \\\\(\\\\theta\\\\) 的函数，无法在不知道 \\\\(\\\\theta\\\\) 的情况下确定分位点，从而无法构造置信区间。'
                }
            ]
        },

        // ============================================================
        // Section 2: 正态均值的区间估计
        // ============================================================
        {
            id: 'ch08-sec02',
            title: '正态均值的区间估计',
            content: `
                <h2>正态均值的区间估计 CIs for Normal Mean</h2>

                <p>本节讨论正态总体均值 \\\\(\\\\mu\\\\) 的区间估计，这是统计推断中最经典的问题之一。根据方差 \\\\(\\\\sigma^2\\\\) 是否已知，我们需要使用不同的枢轴量。</p>

                <h3>方差已知：Z 区间</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.7 (Z 置信区间)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1,\\\\ldots,X_n \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu, \\\\sigma^2)\\\\)，其中 \\\\(\\\\sigma^2\\\\) 已知。则 \\\\(\\\\mu\\\\) 的 \\\\(1-\\\\alpha\\\\) 置信区间为</p>
                        \\\\[\\\\left[\\\\bar{X} - z_{\\\\alpha/2} \\\\frac{\\\\sigma}{\\\\sqrt{n}},\\\\; \\\\bar{X} + z_{\\\\alpha/2} \\\\frac{\\\\sigma}{\\\\sqrt{n}}\\\\right],\\\\]
                        <p>其中 \\\\(z_{\\\\alpha/2}\\\\) 为标准正态分布的上 \\\\(\\\\alpha/2\\\\) 分位点，即 \\\\(P(Z > z_{\\\\alpha/2}) = \\\\alpha/2\\\\)。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>枢轴量为 \\\\(Q = \\\\frac{\\\\bar{X} - \\\\mu}{\\\\sigma/\\\\sqrt{n}} \\\\sim N(0,1)\\\\)。由标准正态分布的对称性，</p>
                        \\\\[P\\\\left(-z_{\\\\alpha/2} \\\\leq \\\\frac{\\\\bar{X} - \\\\mu}{\\\\sigma/\\\\sqrt{n}} \\\\leq z_{\\\\alpha/2}\\\\right) = 1 - \\\\alpha.\\\\]
                        <p>将不等式各部分乘以 \\\\(\\\\sigma/\\\\sqrt{n}\\\\) 并减去 \\\\(\\\\bar{X}\\\\)，再乘以 \\\\(-1\\\\)（注意反号），得</p>
                        \\\\[P\\\\left(\\\\bar{X} - z_{\\\\alpha/2}\\\\frac{\\\\sigma}{\\\\sqrt{n}} \\\\leq \\\\mu \\\\leq \\\\bar{X} + z_{\\\\alpha/2}\\\\frac{\\\\sigma}{\\\\sqrt{n}}\\\\right) = 1-\\\\alpha.\\\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Z 区间的半宽度 \\\\(z_{\\\\alpha/2} \\\\cdot \\\\sigma/\\\\sqrt{n}\\\\) 也称为<strong>误差界</strong>（margin of error）。常用值：当 \\\\(\\\\alpha = 0.05\\\\) 时 \\\\(z_{0.025} = 1.96\\\\)；当 \\\\(\\\\alpha = 0.01\\\\) 时 \\\\(z_{0.005} = 2.576\\\\)。</p>
                    </div>
                </div>

                <h3>方差未知：t 区间</h3>

                <p>实际中方差 \\\\(\\\\sigma^2\\\\) 通常未知，需要用样本方差 \\\\(S^2 = \\\\frac{1}{n-1}\\\\sum_{i=1}^n (X_i - \\\\bar{X})^2\\\\) 替代。此时枢轴量的分布从标准正态变为 Student's t 分布。</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.8 (t 置信区间)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1,\\\\ldots,X_n \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu, \\\\sigma^2)\\\\)，\\\\(\\\\sigma^2\\\\) 未知。则 \\\\(\\\\mu\\\\) 的 \\\\(1-\\\\alpha\\\\) 置信区间为</p>
                        \\\\[\\\\left[\\\\bar{X} - t_{\\\\alpha/2,\\\\, n-1} \\\\frac{S}{\\\\sqrt{n}},\\\\; \\\\bar{X} + t_{\\\\alpha/2,\\\\, n-1} \\\\frac{S}{\\\\sqrt{n}}\\\\right],\\\\]
                        <p>其中 \\\\(t_{\\\\alpha/2,\\\\,n-1}\\\\) 为自由度 \\\\(n-1\\\\) 的 t 分布的上 \\\\(\\\\alpha/2\\\\) 分位点。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>由正态总体的性质，\\\\(\\\\bar{X}\\\\) 和 \\\\(S^2\\\\) 独立，且</p>
                        \\\\[T = \\\\frac{\\\\bar{X} - \\\\mu}{S/\\\\sqrt{n}} = \\\\frac{(\\\\bar{X} - \\\\mu)/(\\\\sigma/\\\\sqrt{n})}{\\\\sqrt{S^2/\\\\sigma^2}} = \\\\frac{Z}{\\\\sqrt{\\\\chi^2_{n-1}/(n-1)}} \\\\sim t_{n-1},\\\\]
                        <p>其中 \\\\(Z \\\\sim N(0,1)\\\\) 且 \\\\((n-1)S^2/\\\\sigma^2 \\\\sim \\\\chi^2_{n-1}\\\\)。由于 \\\\(T\\\\) 的分布不含未知参数，它是枢轴量。余下步骤同 Z 区间。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition: Z 区间 vs t 区间</div>
                    <div class="env-body">
                        <p>t 分布比标准正态分布有更厚的尾巴，因此 \\\\(t_{\\\\alpha/2, n-1} > z_{\\\\alpha/2}\\\\)。这意味着 t 区间比 Z 区间更宽——为用 \\\\(S\\\\) 替代 \\\\(\\\\sigma\\\\) 引入的额外不确定性"买单"。当 \\\\(n \\\\to \\\\infty\\\\) 时，\\\\(t_{n-1} \\\\to N(0,1)\\\\)，两种区间趋于一致。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 8.9</div>
                    <div class="env-body">
                        <p>某工厂生产的电池寿命服从正态分布。随机抽取 \\\\(n=16\\\\) 块电池，测得 \\\\(\\\\bar{x} = 300\\\\) 小时，\\\\(s = 20\\\\) 小时。求 \\\\(\\\\mu\\\\) 的 95% 置信区间。</p>
                        <p>查表得 \\\\(t_{0.025, 15} = 2.131\\\\)。置信区间为</p>
                        \\\\[300 \\\\pm 2.131 \\\\times \\\\frac{20}{\\\\sqrt{16}} = 300 \\\\pm 10.66 = [289.34,\\; 310.66].\\\\]
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="z-vs-t-intervals"></div>
            `,
            visualizations: [
                {
                    id: 'z-vs-t-intervals',
                    title: '交互演示：Z 区间 vs t 区间',
                    description: '对比方差已知和未知时的置信区间宽度，观察随样本量增大两者趋于一致',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 280, originY: 320, scale: 50
                        });

                        var n = 10;
                        var trueMu = 0;
                        var trueSigma = 1;

                        // Approximate t critical value using Cornish-Fisher expansion
                        function tCritical(alpha2, df) {
                            var z = 1.96; // z_{0.025}
                            if (alpha2 !== 0.025) {
                                z = 2.576; // z_{0.005} for 99%
                            }
                            var g1 = (z * z * z + z) / (4 * df);
                            var g2 = (5 * z * z * z * z * z + 16 * z * z * z + 3 * z) / (96 * df * df);
                            return z + g1 + g2;
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            var zCrit = 1.96;
                            var tCrit = tCritical(0.025, n - 1);

                            // Generate one sample
                            var sample = VizEngine.sampleArray(function() { return VizEngine.randomNormal(trueMu, trueSigma); }, n);
                            var xbar = VizEngine.mean(sample);
                            var s = Math.sqrt(VizEngine.sampleVariance(sample));

                            var zHalf = zCrit * trueSigma / Math.sqrt(n);
                            var tHalf = tCrit * s / Math.sqrt(n);

                            // Draw density backgrounds
                            var pdfScale = 3.5;

                            // Normal PDF
                            viz.drawFunction(function(x) { return VizEngine.normalPDF(x, 0, 1) * pdfScale; }, -4, 4, viz.colors.blue + '55', 1.5);

                            // t PDF
                            viz.drawFunction(function(x) { return VizEngine.tPDF(x, n - 1) * pdfScale; }, -4, 4, viz.colors.orange + '55', 1.5);

                            // Axes
                            viz.drawSegment(-5, 0, 5, 0, viz.colors.axis, 1);

                            // True mu line
                            viz.drawSegment(trueMu, -0.3, trueMu, 2.5, viz.colors.yellow, 2, true);
                            viz.drawText(String.fromCharCode(956), trueMu, 2.7, viz.colors.yellow, 12);

                            // Z interval (upper bar)
                            var yZ = 1.8;
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 4;
                            var lz = viz.toScreen(xbar - zHalf, yZ);
                            var rz = viz.toScreen(xbar + zHalf, yZ);
                            ctx.beginPath(); ctx.moveTo(lz[0], lz[1]); ctx.lineTo(rz[0], rz[1]); ctx.stroke();
                            // caps
                            ctx.lineWidth = 2;
                            var capH = 0.15;
                            viz.drawSegment(xbar - zHalf, yZ - capH, xbar - zHalf, yZ + capH, viz.colors.blue, 2);
                            viz.drawSegment(xbar + zHalf, yZ - capH, xbar + zHalf, yZ + capH, viz.colors.blue, 2);
                            viz.drawPoint(xbar, yZ, viz.colors.blue, null, 4);
                            viz.drawText('Z interval', -4.2, yZ, viz.colors.blue, 12, 'left');

                            // t interval (lower bar)
                            var yT = 1.2;
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 4;
                            var lt = viz.toScreen(xbar - tHalf, yT);
                            var rt = viz.toScreen(xbar + tHalf, yT);
                            ctx.beginPath(); ctx.moveTo(lt[0], lt[1]); ctx.lineTo(rt[0], rt[1]); ctx.stroke();
                            ctx.lineWidth = 2;
                            viz.drawSegment(xbar - tHalf, yT - capH, xbar - tHalf, yT + capH, viz.colors.orange, 2);
                            viz.drawSegment(xbar + tHalf, yT - capH, xbar + tHalf, yT + capH, viz.colors.orange, 2);
                            viz.drawPoint(xbar, yT, viz.colors.orange, null, 4);
                            viz.drawText('t interval', -4.2, yT, viz.colors.orange, 12, 'left');

                            // Info text
                            viz.screenText('n = ' + n + '    df = ' + (n - 1), viz.width / 2, 18, viz.colors.white, 13);
                            viz.screenText('Z half-width: ' + zHalf.toFixed(3) + '    t half-width: ' + tHalf.toFixed(3), viz.width / 2, 36, viz.colors.text, 11);
                            viz.screenText('z_0.025 = ' + zCrit.toFixed(3) + '    t_0.025,' + (n - 1) + ' = ' + tCrit.toFixed(3), viz.width / 2, 52, viz.colors.text, 11);

                            // Legend
                            viz.screenText('Blue: N(0,1) density    Orange: t(' + (n - 1) + ') density', viz.width / 2, viz.height - 10, viz.colors.text, 10);
                        }

                        draw();

                        VizEngine.createSlider(controls, 'n', 3, 100, n, 1, function(val) {
                            n = Math.round(val);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Resample', function() {
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\\\(X_1,\\\\ldots,X_{25} \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu, 9)\\\\)（\\\\(\\\\sigma^2 = 9\\\\) 已知），观测到 \\\\(\\\\bar{x} = 12.5\\\\)。(a) 构造 \\\\(\\\\mu\\\\) 的 95% 置信区间；(b) 若要使置信区间的半宽度不超过 0.5，至少需要多大的样本量？',
                    hint: '(a) 用 Z 区间公式；(b) 令 \\\\(z_{0.025} \\\\cdot \\\\sigma / \\\\sqrt{n} \\\\leq 0.5\\\\)，解出 \\\\(n\\\\)。',
                    solution: '(a) \\\\(\\\\bar{x} \\\\pm z_{0.025} \\\\cdot \\\\sigma/\\\\sqrt{n} = 12.5 \\\\pm 1.96 \\\\times 3/5 = 12.5 \\\\pm 1.176 = [11.324, 13.676]\\\\)。(b) 需要 \\\\(1.96 \\\\times 3/\\\\sqrt{n} \\\\leq 0.5\\\\)，即 \\\\(\\\\sqrt{n} \\\\geq 11.76\\\\)，\\\\(n \\\\geq 138.3\\\\)，因此至少需要 \\\\(n = 139\\\\)。'
                },
                {
                    question: '当样本量 \\\\(n\\\\) 从 5 增加到 50 时，95% t 置信区间的宽度大约缩小为原来的多少倍？（提示：忽略 \\\\(t\\\\) 分位点的变化，只考虑 \\\\(1/\\\\sqrt{n}\\\\) 的影响。）',
                    hint: '置信区间宽度与 \\\\(1/\\\\sqrt{n}\\\\) 成正比。',
                    solution: '忽略 \\\\(t\\\\) 分位点变化，宽度比约为 \\\\(\\\\sqrt{5}/\\\\sqrt{50} = 1/\\\\sqrt{10} \\\\approx 0.316\\\\)，即缩小为原来的约 31.6%。实际上 \\\\(t_{0.025,4} \\\\approx 2.776\\\\) 而 \\\\(t_{0.025,49} \\\\approx 2.010\\\\)，所以真实缩小比约为 \\\\((2.010/2.776) \\\\times (1/\\\\sqrt{10}) \\\\approx 0.229\\\\)，缩小为约 23%。'
                },
                {
                    question: '证明：当自由度 \\\\(\\\\nu \\\\to \\\\infty\\\\) 时，\\\\(t_{\\\\nu}\\\\) 分布收敛到 \\\\(N(0,1)\\\\) 分布。',
                    hint: '利用 \\\\(t_{\\\\nu} = Z / \\\\sqrt{\\\\chi^2_{\\\\nu}/\\\\nu}\\\\) 的定义和大数定律。',
                    solution: '由定义 \\\\(T = Z/\\\\sqrt{V/\\\\nu}\\\\)，其中 \\\\(V \\\\sim \\\\chi^2_{\\\\nu}\\\\)，\\\\(Z \\\\sim N(0,1)\\\\) 独立。因为 \\\\(V/\\\\nu \\\\xrightarrow{P} 1\\\\)（由大数定律，因 \\\\(E[V/\\\\nu]=1\\\\)，\\\\(\\\\operatorname{Var}(V/\\\\nu)=2/\\\\nu \\\\to 0\\\\)），由 Slutsky 定理，\\\\(T = Z/\\\\sqrt{V/\\\\nu} \\\\xrightarrow{d} Z/1 = Z \\\\sim N(0,1)\\\\)。'
                }
            ]
        },

        // ============================================================
        // Section 3: 正态方差的区间估计
        // ============================================================
        {
            id: 'ch08-sec03',
            title: '正态方差的区间估计',
            content: `
                <h2>正态方差的区间估计 CIs for Normal Variance</h2>

                <p>除了均值 \\\\(\\\\mu\\\\)，方差 \\\\(\\\\sigma^2\\\\) 在质量控制、风险评估等领域也有重要意义。构造 \\\\(\\\\sigma^2\\\\) 的置信区间需要利用 \\\\(\\\\chi^2\\\\) 分布。</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.10 (\\\\(\\\\chi^2\\\\) 置信区间)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1,\\\\ldots,X_n \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu, \\\\sigma^2)\\\\)，其中 \\\\(\\\\mu\\\\) 未知。则 \\\\(\\\\sigma^2\\\\) 的 \\\\(1-\\\\alpha\\\\) 置信区间为</p>
                        \\\\[\\\\left[\\\\frac{(n-1)S^2}{\\\\chi^2_{\\\\alpha/2,\\\\,n-1}},\\\\; \\\\frac{(n-1)S^2}{\\\\chi^2_{1-\\\\alpha/2,\\\\,n-1}}\\\\right],\\\\]
                        <p>其中 \\\\(\\\\chi^2_{\\\\alpha/2,\\\\,n-1}\\\\) 和 \\\\(\\\\chi^2_{1-\\\\alpha/2,\\\\,n-1}\\\\) 分别为 \\\\(\\\\chi^2_{n-1}\\\\) 分布的上 \\\\(\\\\alpha/2\\\\) 和上 \\\\(1-\\\\alpha/2\\\\) 分位点。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>枢轴量为</p>
                        \\\\[Q = \\\\frac{(n-1)S^2}{\\\\sigma^2} \\\\sim \\\\chi^2_{n-1}.\\\\]
                        <p>取分位点使得 \\\\(P(\\\\chi^2_{1-\\\\alpha/2,\\\\,n-1} \\\\leq Q \\\\leq \\\\chi^2_{\\\\alpha/2,\\\\,n-1}) = 1-\\\\alpha\\\\)。将不等式</p>
                        \\\\[\\\\chi^2_{1-\\\\alpha/2} \\\\leq \\\\frac{(n-1)S^2}{\\\\sigma^2} \\\\leq \\\\chi^2_{\\\\alpha/2}\\\\]
                        <p>中的三部分取倒数（注意反号），再乘以 \\\\((n-1)S^2\\\\)，得</p>
                        \\\\[\\\\frac{(n-1)S^2}{\\\\chi^2_{\\\\alpha/2}} \\\\leq \\\\sigma^2 \\\\leq \\\\frac{(n-1)S^2}{\\\\chi^2_{1-\\\\alpha/2}}.\\\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning: 不对称区间</div>
                    <div class="env-body">
                        <p>由于 \\\\(\\\\chi^2\\\\) 分布是<strong>右偏的</strong>（非对称），置信区间不是以 \\\\(S^2\\\\) 为中心对称的。上界离 \\\\(S^2\\\\) 更远。这与正态均值的对称区间有本质区别。</p>
                        <p>同样需要注意分位点的记号约定：\\\\(\\\\chi^2_{\\\\alpha/2,\\\\,n-1}\\\\) 表示右尾面积为 \\\\(\\\\alpha/2\\\\) 的分位点（较大值），\\\\(\\\\chi^2_{1-\\\\alpha/2,\\\\,n-1}\\\\) 表示右尾面积为 \\\\(1-\\\\alpha/2\\\\) 的分位点（较小值）。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 8.11</div>
                    <div class="env-body">
                        <p>随机抽取 \\\\(n=20\\\\) 个电阻，测得样本方差 \\\\(s^2 = 0.045\\\\,\\\\Omega^2\\\\)。求 \\\\(\\\\sigma^2\\\\) 的 95% 置信区间。</p>
                        <p>自由度 \\\\(\\\\nu = 19\\\\)，查表得 \\\\(\\\\chi^2_{0.025, 19} = 32.852\\\\)，\\\\(\\\\chi^2_{0.975, 19} = 8.907\\\\)。</p>
                        \\\\[\\\\left[\\\\frac{19 \\\\times 0.045}{32.852},\\; \\\\frac{19 \\\\times 0.045}{8.907}\\\\right] = [0.0260, 0.0960]\\;\\\\Omega^2.\\\\]
                        <p>注意区间并非以 \\\\(s^2 = 0.045\\\\) 为中心：下界距 \\\\(s^2\\\\) 为 0.019，上界距 \\\\(s^2\\\\) 为 0.051。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark: \\\\(\\\\sigma\\\\) 的置信区间</div>
                    <div class="env-body">
                        <p>若需要标准差 \\\\(\\\\sigma\\\\) 的置信区间，只需对 \\\\(\\\\sigma^2\\\\) 的区间两端取平方根：</p>
                        \\\\[\\\\left[\\\\sqrt{\\\\frac{(n-1)S^2}{\\\\chi^2_{\\\\alpha/2,\\\\,n-1}}},\\; \\\\sqrt{\\\\frac{(n-1)S^2}{\\\\chi^2_{1-\\\\alpha/2,\\\\,n-1}}}\\\\right].\\\\]
                        <p>这利用了平方根函数的单调性。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark: 正态性假设的敏感性</div>
                    <div class="env-body">
                        <p>方差的 \\\\(\\\\chi^2\\\\) 置信区间<strong>对正态性假设高度敏感</strong>。即使总体分布仅略微偏离正态（如存在轻微偏斜或重尾），实际覆盖率可能严重偏离名义水平。这与均值的 t 区间形成对比——后者对正态性偏离的鲁棒性要强得多（尤其在大样本下）。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="chi2-ci-viz"></div>
            `,
            visualizations: [
                {
                    id: 'chi2-ci-viz',
                    title: '交互演示：卡方置信区间',
                    description: '在卡方分布上展示不对称的方差置信区间',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 50, originY: 300, scale: 16
                        });

                        var df = 15;
                        var alphaVal = 0.05;

                        // Numerical chi-squared CDF via integration
                        function chiSquaredCDF(x, k) {
                            if (x <= 0) return 0;
                            var steps = 1000;
                            var dx2 = x / steps;
                            var sum = 0;
                            for (var i = 0; i < steps; i++) {
                                var t = (i + 0.5) * dx2;
                                sum += VizEngine.chiSquaredPDF(t, k) * dx2;
                            }
                            return Math.min(sum, 1);
                        }

                        // Find quantile by bisection
                        function chiSquaredQuantile(p, k) {
                            var lo = 0, hi = k + 10 * Math.sqrt(2 * k);
                            for (var iter = 0; iter < 80; iter++) {
                                var mid = (lo + hi) / 2;
                                if (chiSquaredCDF(mid, k) < p) lo = mid;
                                else hi = mid;
                            }
                            return (lo + hi) / 2;
                        }

                        function draw() {
                            viz.clear();

                            var ctx = viz.ctx;
                            var currentDf = df;
                            var xMax = Math.max(currentDf + 4 * Math.sqrt(2 * currentDf), 30);

                            // Draw PDF
                            viz.drawFunction(function(x) { return VizEngine.chiSquaredPDF(x, currentDf); }, 0.01, xMax, viz.colors.blue, 2.5);

                            // Draw axis
                            viz.drawSegment(0, 0, xMax, 0, viz.colors.axis, 1.5);
                            // Y axis
                            viz.drawSegment(0, 0, 0, 0.25, viz.colors.axis, 1.5);

                            // X axis labels
                            var step = xMax > 40 ? 10 : 5;
                            for (var x = step; x < xMax; x += step) {
                                viz.drawText(x.toString(), x, -0.015, viz.colors.text, 11);
                            }

                            // Find quantiles
                            var lower = chiSquaredQuantile(alphaVal / 2, currentDf);
                            var upper = chiSquaredQuantile(1 - alphaVal / 2, currentDf);

                            // Shade rejection regions
                            viz.shadeUnder(function(x) { return VizEngine.chiSquaredPDF(x, currentDf); }, 0.01, lower, viz.colors.red + '55');
                            viz.shadeUnder(function(x) { return VizEngine.chiSquaredPDF(x, currentDf); }, upper, xMax, viz.colors.red + '55');

                            // Shade acceptance region
                            viz.shadeUnder(function(x) { return VizEngine.chiSquaredPDF(x, currentDf); }, lower, upper, viz.colors.green + '33');

                            // Mark quantiles
                            viz.drawSegment(lower, 0, lower, VizEngine.chiSquaredPDF(lower, currentDf), viz.colors.yellow, 1.5, true);
                            viz.drawSegment(upper, 0, upper, VizEngine.chiSquaredPDF(upper, currentDf), viz.colors.yellow, 1.5, true);

                            viz.drawText(lower.toFixed(2), lower, -0.03, viz.colors.yellow, 11);
                            viz.drawText(upper.toFixed(2), upper, -0.03, viz.colors.yellow, 11);

                            // Title and legend
                            var pctStr = ((1 - alphaVal) * 100).toFixed(0);
                            viz.screenText('Chi-squared(' + currentDf + ') — ' + pctStr + '% CI region', viz.width / 2, 16, viz.colors.white, 14, 'center');

                            // Show asymmetry info
                            var mean = currentDf;
                            viz.screenText('Mean = ' + mean, viz.width - 15, 38, viz.colors.text, 11, 'right');
                            viz.screenText('Lower quantile: ' + lower.toFixed(3), viz.width - 15, 54, viz.colors.text, 11, 'right');
                            viz.screenText('Upper quantile: ' + upper.toFixed(3), viz.width - 15, 70, viz.colors.text, 11, 'right');
                            var ratio = (upper / lower).toFixed(2);
                            viz.screenText('Upper/Lower ratio: ' + ratio, viz.width - 15, 86, viz.colors.orange, 11, 'right');
                        }

                        draw();

                        VizEngine.createSlider(controls, 'Degrees of freedom', 2, 40, df, 1, function(val) {
                            df = Math.round(val);
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Confidence level (%)', 80, 99, (1 - alphaVal) * 100, 1, function(val) {
                            alphaVal = 1 - val / 100;
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\\\(X_1,\\\\ldots,X_{26} \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu, \\\\sigma^2)\\\\)，观测到 \\\\(s^2 = 4.5\\\\)。(a) 求 \\\\(\\\\sigma^2\\\\) 的 90% 置信区间；(b) 求 \\\\(\\\\sigma\\\\) 的 90% 置信区间。已知 \\\\(\\\\chi^2_{0.05,25} = 37.652\\\\)，\\\\(\\\\chi^2_{0.95,25} = 14.611\\\\)。',
                    hint: '用 \\\\(\\\\chi^2\\\\) 区间公式，对 (b) 取平方根。',
                    solution: '(a) \\\\(\\\\sigma^2\\\\) 的 90% CI: \\\\([25 \\\\times 4.5 / 37.652, \\; 25 \\\\times 4.5 / 14.611] = [2.989, 7.700]\\\\)。(b) 取平方根得 \\\\(\\\\sigma\\\\) 的 90% CI: \\\\([\\\\sqrt{2.989}, \\\\sqrt{7.700}] = [1.729, 2.775]\\\\)。'
                },
                {
                    question: '解释为什么 \\\\(\\\\chi^2\\\\) 置信区间不是以 \\\\(S^2\\\\) 为中心对称的，并说明在什么情况下区间近似对称。',
                    hint: '考虑 \\\\(\\\\chi^2\\\\) 分布的偏度以及中心极限定理。',
                    solution: '\\\\(\\\\chi^2_k\\\\) 分布是右偏的，偏度为 \\\\(2\\\\sqrt{2/k}\\\\)。对 \\\\((n-1)S^2/\\\\sigma^2\\\\) 取倒数后，大的 \\\\(\\\\chi^2\\\\) 值对应小的 \\\\(\\\\sigma^2\\\\) 估计，使得上下界到 \\\\(S^2\\\\) 的距离不等。当自由度 \\\\(k = n-1\\\\) 很大时，由 CLT，\\\\(\\\\chi^2_k\\\\) 近似正态 \\\\(N(k, 2k)\\\\)，分布趋于对称，此时置信区间也近似以 \\\\(S^2\\\\) 为中心对称。'
                },
                {
                    question: '若同时对 \\\\(\\\\mu\\\\) 和 \\\\(\\\\sigma^2\\\\) 构造 95% 置信区间，能否保证"两个区间同时覆盖 \\\\(\\\\mu\\\\) 和 \\\\(\\\\sigma^2\\\\)"的概率至少为 90%？请用 Bonferroni 不等式说明。',
                    hint: '\\\\(P(A \\\\cap B) \\\\geq 1 - P(A^c) - P(B^c)\\\\)。',
                    solution: '设 \\\\(A\\\\) = "\\\\(\\\\mu\\\\) 的区间覆盖 \\\\(\\\\mu\\\\)"，\\\\(B\\\\) = "\\\\(\\\\sigma^2\\\\) 的区间覆盖 \\\\(\\\\sigma^2\\\\)"。由 Bonferroni 不等式：\\\\(P(A \\\\cap B) \\\\geq 1 - P(A^c) - P(B^c) = 1 - 0.05 - 0.05 = 0.90\\\\)。因此同时覆盖的概率至少为 90%。实际上，由于正态总体中 \\\\(\\\\bar{X}\\\\) 和 \\\\(S^2\\\\) 独立，\\\\(P(A \\\\cap B) = P(A) \\\\cdot P(B) = 0.95^2 = 0.9025\\\\)，略高于 90%。'
                }
            ]
        },

        // ============================================================
        // Section 4: 两样本区间估计
        // ============================================================
        {
            id: 'ch08-sec04',
            title: '两样本区间估计',
            content: `
                <h2>两样本区间估计 Two-Sample CIs</h2>

                <p>许多实际问题需要比较两个总体的参数，例如比较两种药物的疗效、两条生产线的精度等。本节讨论两个正态总体参数之差的区间估计。</p>

                <h3>均值之差：方差相等（Pooled t 区间）</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.12 (Pooled t 区间)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1,\\\\ldots,X_{n_1} \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu_1, \\\\sigma^2)\\\\) 和 \\\\(Y_1,\\\\ldots,Y_{n_2} \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu_2, \\\\sigma^2)\\\\) 独立，方差 \\\\(\\\\sigma^2\\\\) 相同但未知。则 \\\\(\\\\mu_1 - \\\\mu_2\\\\) 的 \\\\(1-\\\\alpha\\\\) 置信区间为</p>
                        \\\\[(\\\\bar{X} - \\\\bar{Y}) \\\\pm t_{\\\\alpha/2,\\\\, n_1+n_2-2} \\\\cdot S_p \\\\sqrt{\\\\frac{1}{n_1} + \\\\frac{1}{n_2}},\\\\]
                        <p>其中<strong>合并样本标准差</strong>（pooled standard deviation）为</p>
                        \\\\[S_p = \\\\sqrt{\\\\frac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1 + n_2 - 2}}.\\\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>在等方差假设下，\\\\(\\\\bar{X} - \\\\bar{Y} \\\\sim N\\\\big(\\\\mu_1 - \\\\mu_2,\\; \\\\sigma^2(1/n_1 + 1/n_2)\\\\big)\\\\)。合并估计量 \\\\(S_p^2\\\\) 满足</p>
                        \\\\[\\\\frac{(n_1+n_2-2)S_p^2}{\\\\sigma^2} = \\\\frac{(n_1-1)S_1^2}{\\\\sigma^2} + \\\\frac{(n_2-1)S_2^2}{\\\\sigma^2} \\\\sim \\\\chi^2_{n_1+n_2-2},\\\\]
                        <p>且与 \\\\(\\\\bar{X} - \\\\bar{Y}\\\\) 独立。因此</p>
                        \\\\[T = \\\\frac{(\\\\bar{X} - \\\\bar{Y}) - (\\\\mu_1 - \\\\mu_2)}{S_p\\\\sqrt{1/n_1 + 1/n_2}} \\\\sim t_{n_1+n_2-2}\\\\]
                        <p>是枢轴量，由此得到置信区间。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h3>均值之差：方差不等（Welch's t 区间）</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.13 (Welch's t 区间)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_i \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu_1, \\\\sigma_1^2)\\\\) 和 \\\\(Y_j \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu_2, \\\\sigma_2^2)\\\\) 独立，\\\\(\\\\sigma_1^2 \\\\neq \\\\sigma_2^2\\\\)（Behrens-Fisher 问题）。Welch 的近似 \\\\(1-\\\\alpha\\\\) 置信区间为</p>
                        \\\\[(\\\\bar{X} - \\\\bar{Y}) \\\\pm t_{\\\\alpha/2,\\\\,\\\\hat{\\\\nu}} \\\\sqrt{\\\\frac{S_1^2}{n_1} + \\\\frac{S_2^2}{n_2}},\\\\]
                        <p>其中近似自由度（Welch-Satterthwaite）为</p>
                        \\\\[\\\\hat{\\\\nu} = \\\\frac{\\\\left(\\\\frac{S_1^2}{n_1} + \\\\frac{S_2^2}{n_2}\\\\right)^2}{\\\\frac{(S_1^2/n_1)^2}{n_1-1} + \\\\frac{(S_2^2/n_2)^2}{n_2-1}}.\\\\]
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark: Pooled vs Welch</div>
                    <div class="env-body">
                        <p>Welch's t 检验在方差不等时更为稳健。即使方差相等，Welch 方法的覆盖率也接近名义水平。因此在实践中，许多统计学家推荐<strong>默认使用 Welch 方法</strong>。Pooled t 在方差确实相等时略有功效优势。</p>
                    </div>
                </div>

                <h3>方差之比：F 区间</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.14 (F 置信区间)</div>
                    <div class="env-body">
                        <p>设两个独立正态样本分别有样本方差 \\\\(S_1^2\\\\) 和 \\\\(S_2^2\\\\)。则 \\\\(\\\\sigma_1^2 / \\\\sigma_2^2\\\\) 的 \\\\(1-\\\\alpha\\\\) 置信区间为</p>
                        \\\\[\\\\left[\\\\frac{S_1^2}{S_2^2} \\\\cdot \\\\frac{1}{F_{\\\\alpha/2,\\\\,n_1-1,\\\\,n_2-1}},\\;\\; \\\\frac{S_1^2}{S_2^2} \\\\cdot F_{\\\\alpha/2,\\\\,n_2-1,\\\\,n_1-1}\\\\right],\\\\]
                        <p>其中 \\\\(F_{\\\\alpha/2,\\\\,d_1,\\\\,d_2}\\\\) 为 \\\\(F(d_1, d_2)\\\\) 分布的上 \\\\(\\\\alpha/2\\\\) 分位点。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>枢轴量为</p>
                        \\\\[F = \\\\frac{S_1^2 / \\\\sigma_1^2}{S_2^2 / \\\\sigma_2^2} = \\\\frac{S_1^2}{S_2^2} \\\\cdot \\\\frac{\\\\sigma_2^2}{\\\\sigma_1^2} \\\\sim F(n_1-1, n_2-1).\\\\]
                        <p>由 \\\\(P(F_{1-\\\\alpha/2} \\\\leq F \\\\leq F_{\\\\alpha/2}) = 1 - \\\\alpha\\\\)，解出 \\\\(\\\\sigma_1^2/\\\\sigma_2^2\\\\)。利用 \\\\(F_{1-\\\\alpha/2,\\\\,d_1,\\\\,d_2} = 1/F_{\\\\alpha/2,\\\\,d_2,\\\\,d_1}\\\\) 简化表达式。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h3>配对样本</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.15 (配对 t 区间)</div>
                    <div class="env-body">
                        <p>设 \\\\((X_i, Y_i)\\\\) 为 \\\\(n\\\\) 对配对观测，令 \\\\(D_i = X_i - Y_i\\\\)。若 \\\\(D_i \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu_D, \\\\sigma_D^2)\\\\)，则 \\\\(\\\\mu_D = \\\\mu_1 - \\\\mu_2\\\\) 的 \\\\(1-\\\\alpha\\\\) 置信区间为</p>
                        \\\\[\\\\bar{D} \\\\pm t_{\\\\alpha/2,\\\\,n-1} \\\\frac{S_D}{\\\\sqrt{n}},\\\\]
                        <p>其中 \\\\(\\\\bar{D}\\\\) 和 \\\\(S_D\\\\) 分别为差值序列的样本均值和样本标准差。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition: 为什么配对比独立更好？</div>
                    <div class="env-body">
                        <p>配对设计通过控制个体差异来减少变异。例如，测试某药物对血压的影响，同一病人的"服药前"和"服药后"血压构成配对。差值 \\\\(D_i\\\\) 消除了个体间的基础差异，使得 \\\\(\\\\sigma_D^2\\\\) 通常远小于 \\\\(\\\\sigma_1^2 + \\\\sigma_2^2\\\\)，从而给出更短的置信区间。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="two-sample-ci-viz"></div>
            `,
            visualizations: [
                {
                    id: 'two-sample-ci-viz',
                    title: '交互演示：两样本置信区间比较',
                    description: '比较 Pooled t 和 Welch t 方法在不同方差比下的覆盖率',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 420,
                            originX: 280, originY: 340, scale: 70
                        });

                        var m = 15;
                        var n = 15;
                        var mu1 = 0;
                        var mu2 = 0;
                        var sigma1 = 1;
                        var sigma2 = 1;
                        var numSims = 200;

                        function tQuantile(p, nu) {
                            // Approximate t CDF via integration of tPDF
                            function tCDF(x, df) {
                                var steps = 2000;
                                var lo = -15;
                                var dx2 = (x - lo) / steps;
                                var sum = 0;
                                for (var i = 0; i < steps; i++) {
                                    var t = lo + (i + 0.5) * dx2;
                                    sum += VizEngine.tPDF(t, df) * dx2;
                                }
                                return sum;
                            }
                            var lo2 = -10, hi2 = 10;
                            for (var iter = 0; iter < 60; iter++) {
                                var mid2 = (lo2 + hi2) / 2;
                                if (tCDF(mid2, nu) < p) lo2 = mid2;
                                else hi2 = mid2;
                            }
                            return (lo2 + hi2) / 2;
                        }

                        function simulate() {
                            var pooledCov = 0;
                            var welchCov = 0;
                            var trueDiff = mu1 - mu2;

                            for (var sim = 0; sim < numSims; sim++) {
                                var xs = VizEngine.sampleArray(function() { return VizEngine.randomNormal(mu1, sigma1); }, m);
                                var ys = VizEngine.sampleArray(function() { return VizEngine.randomNormal(mu2, sigma2); }, n);

                                var xbar = VizEngine.mean(xs);
                                var ybar = VizEngine.mean(ys);
                                var s1sq = VizEngine.sampleVariance(xs);
                                var s2sq = VizEngine.sampleVariance(ys);
                                var diff = xbar - ybar;

                                // Pooled t
                                var sp2 = ((m - 1) * s1sq + (n - 1) * s2sq) / (m + n - 2);
                                var sp = Math.sqrt(sp2);
                                var sePooled = sp * Math.sqrt(1 / m + 1 / n);
                                var tCritPooled = tQuantile(1 - 0.025, m + n - 2);
                                var pLower = diff - tCritPooled * sePooled;
                                var pUpper = diff + tCritPooled * sePooled;
                                if (pLower <= trueDiff && trueDiff <= pUpper) pooledCov++;

                                // Welch
                                var seWelch = Math.sqrt(s1sq / m + s2sq / n);
                                var nuStar = Math.pow(s1sq / m + s2sq / n, 2) /
                                    (Math.pow(s1sq / m, 2) / (m - 1) + Math.pow(s2sq / n, 2) / (n - 1));
                                var tCritWelch = tQuantile(1 - 0.025, Math.max(1, Math.floor(nuStar)));
                                var wLower = diff - tCritWelch * seWelch;
                                var wUpper = diff + tCritWelch * seWelch;
                                if (wLower <= trueDiff && trueDiff <= wUpper) welchCov++;
                            }

                            return {
                                pooledCoverage: pooledCov / numSims,
                                welchCoverage: welchCov / numSims
                            };
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Draw the two population distributions
                            var currentSigma1 = sigma1;
                            var currentSigma2 = sigma2;
                            viz.drawFunction(function(x) { return VizEngine.normalPDF(x, mu1, currentSigma1); }, -4, 4, viz.colors.blue, 2);
                            viz.drawFunction(function(x) { return VizEngine.normalPDF(x, mu2, currentSigma2); }, -4, 4, viz.colors.orange, 2);

                            viz.drawAxes();

                            viz.screenText('Population 1: N(0, ' + sigma1.toFixed(1) + String.fromCharCode(178) + ')', 15, 18, viz.colors.blue, 12, 'left');
                            viz.screenText('Population 2: N(0, ' + sigma2.toFixed(1) + String.fromCharCode(178) + ')', 15, 36, viz.colors.orange, 12, 'left');
                            viz.screenText('Variance ratio: ' + (sigma1 * sigma1 / (sigma2 * sigma2)).toFixed(2), 15, 54, viz.colors.white, 12, 'left');

                            // Simulate and show coverage
                            var result = simulate();
                            var pooledColor = Math.abs(result.pooledCoverage - 0.95) < 0.03 ? viz.colors.green : viz.colors.red;
                            var welchColor = Math.abs(result.welchCoverage - 0.95) < 0.03 ? viz.colors.green : viz.colors.red;

                            viz.screenText('Coverage (' + numSims + ' sims, nominal 95%):', viz.width / 2, viz.height - 70, viz.colors.white, 13, 'center');
                            viz.screenText('Pooled t: ' + (result.pooledCoverage * 100).toFixed(1) + '%', viz.width / 2 - 80, viz.height - 48, pooledColor, 14, 'center');
                            viz.screenText('Welch t: ' + (result.welchCoverage * 100).toFixed(1) + '%', viz.width / 2 + 80, viz.height - 48, welchColor, 14, 'center');

                            if (sigma1 !== sigma2) {
                                viz.screenText('Unequal variances: Welch is more reliable!', viz.width / 2, viz.height - 25, viz.colors.yellow, 11, 'center');
                            }
                        }

                        draw();

                        VizEngine.createSlider(controls, String.fromCharCode(963) + String.fromCharCode(8321), 0.5, 3, sigma1, 0.1, function(val) {
                            sigma1 = val;
                            draw();
                        });

                        VizEngine.createSlider(controls, String.fromCharCode(963) + String.fromCharCode(8322), 0.5, 3, sigma2, 0.1, function(val) {
                            sigma2 = val;
                            draw();
                        });

                        VizEngine.createButton(controls, 'Re-simulate', function() {
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '两组独立样本：第一组 \\\\(n_1 = 15\\\\)，\\\\(\\\\bar{x} = 42.3\\\\)，\\\\(s_1 = 5.1\\\\)；第二组 \\\\(n_2 = 12\\\\)，\\\\(\\\\bar{y} = 38.7\\\\)，\\\\(s_2 = 4.8\\\\)。假设方差相等，求 \\\\(\\\\mu_1 - \\\\mu_2\\\\) 的 95% pooled t 置信区间。已知 \\\\(t_{0.025, 25} = 2.060\\\\)。',
                    hint: '先计算 \\\\(S_p\\\\)，然后代入公式。',
                    solution: '\\\\(S_p^2 = (14 \\\\times 5.1^2 + 11 \\\\times 4.8^2)/25 = (364.14 + 253.44)/25 = 24.703\\\\)，\\\\(S_p = 4.970\\\\)。\\\\(\\\\text{SE} = 4.970\\\\sqrt{1/15 + 1/12} = 4.970 \\\\times 0.3892 = 1.934\\\\)。CI: \\\\((42.3 - 38.7) \\\\pm 2.060 \\\\times 1.934 = 3.6 \\\\pm 3.984 = [-0.384, 7.584]\\\\)。区间包含 0，因此在 95% 水平下不能认为两组均值有显著差异。'
                },
                {
                    question: '解释 Welch-Satterthwaite 自由度公式的直觉含义。为什么当 \\\\(\\\\sigma_1^2 = \\\\sigma_2^2\\\\) 时，它近似等于 \\\\(n_1 + n_2 - 2\\\\)？',
                    hint: '考虑当 \\\\(S_1^2/n_1 \\\\approx S_2^2/n_2\\\\) 时对公式的化简。',
                    solution: 'Welch-Satterthwaite 公式通过矩匹配来近似 \\\\((S_1^2/n_1 + S_2^2/n_2)\\\\) 的缩放 \\\\(\\\\chi^2\\\\) 分布的自由度。当 \\\\(\\\\sigma_1^2 = \\\\sigma_2^2 = \\\\sigma^2\\\\) 时，\\\\(S_1^2/n_1 \\\\approx S_2^2/n_2 \\\\approx \\\\sigma^2/n\\\\)（若 \\\\(n_1 \\\\approx n_2\\\\)），分子为 \\\\((\\\\sigma^2/n_1 + \\\\sigma^2/n_2)^2\\\\)，分母为 \\\\((\\\\sigma^2/n_1)^2/(n_1-1) + (\\\\sigma^2/n_2)^2/(n_2-1)\\\\)。化简后 \\\\(\\\\hat{\\\\nu} \\\\approx n_1 + n_2 - 2\\\\)，退化为 pooled t 的自由度。'
                },
                {
                    question: '在一项药物试验中，同一组 10 名患者服药前后的血压差值为 \\\\(d_1=5, d_2=3, d_3=8, d_4=2, d_5=6, d_6=4, d_7=7, d_8=1, d_9=5, d_{10}=4\\\\)。构造 \\\\(\\\\mu_D\\\\) 的 95% 配对 t 置信区间。已知 \\\\(t_{0.025,9} = 2.262\\\\)。',
                    hint: '先计算 \\\\(\\\\bar{d}\\\\) 和 \\\\(s_D\\\\)。',
                    solution: '\\\\(\\\\bar{d} = (5+3+8+2+6+4+7+1+5+4)/10 = 4.5\\\\)。\\\\(s_D^2 = \\\\frac{1}{9}\\\\sum(d_i - 4.5)^2 = \\\\frac{(0.25+2.25+12.25+6.25+2.25+0.25+6.25+12.25+0.25+0.25)}{9} = \\\\frac{42.5}{9} = 4.722\\\\)，\\\\(s_D = 2.173\\\\)。CI: \\\\(4.5 \\\\pm 2.262 \\\\times 2.173/\\\\sqrt{10} = 4.5 \\\\pm 1.554 = [2.946, 6.054]\\\\)。区间不含 0，说明药物有显著降压效果。'
                },
                {
                    question: '证明对于配对数据 \\\\((X_i, Y_i)\\\\)，当相关系数 \\\\(\\\\rho > 0\\\\) 时，配对 t 区间（在期望意义下）比独立两样本 t 区间更窄。当 \\\\(\\\\rho < 0\\\\) 时呢？',
                    hint: '比较 \\\\(\\\\operatorname{Var}(\\\\bar{D})\\\\) 与 \\\\(\\\\operatorname{Var}(\\\\bar{X} - \\\\bar{Y})\\\\) 在独立与相关情形下的差别。',
                    solution: '对于配对情形，\\\\(\\\\operatorname{Var}(D_i) = \\\\sigma_1^2 + \\\\sigma_2^2 - 2\\\\rho\\\\sigma_1\\\\sigma_2\\\\)，故 \\\\(\\\\operatorname{Var}(\\\\bar{D}) = (\\\\sigma_1^2 + \\\\sigma_2^2 - 2\\\\rho\\\\sigma_1\\\\sigma_2)/n\\\\)。对于独立两样本，\\\\(\\\\operatorname{Var}(\\\\bar{X} - \\\\bar{Y}) = \\\\sigma_1^2/n + \\\\sigma_2^2/n = (\\\\sigma_1^2 + \\\\sigma_2^2)/n\\\\)。配对使方差减少了 \\\\(2\\\\rho\\\\sigma_1\\\\sigma_2/n\\\\)。当 \\\\(\\\\rho > 0\\\\) 时减少量为正，配对区间更窄。当 \\\\(\\\\rho < 0\\\\) 时，配对反而增加方差，区间更宽——但实践中 \\\\(\\\\rho < 0\\\\) 的情形很少见。'
                }
            ]
        },

        // ============================================================
        // Section 5: 大样本近似区间
        // ============================================================
        {
            id: 'ch08-sec05',
            title: '大样本近似区间',
            content: `
                <h2>大样本近似区间 Large-Sample Approximate CIs</h2>

                <p>前面几节讨论的精确置信区间依赖于正态总体假设。当总体分布未知或非正态时，可以利用极大似然估计的渐近正态性构造大样本近似置信区间。</p>

                <h3>Wald 区间</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.16 (Wald 置信区间)</div>
                    <div class="env-body">
                        <p>设 \\\\(\\\\hat{\\\\theta}_n\\\\) 是 \\\\(\\\\theta\\\\) 的极大似然估计。在正则条件下，</p>
                        \\\\[\\\\frac{\\\\hat{\\\\theta}_n - \\\\theta}{\\\\operatorname{se}(\\\\hat{\\\\theta}_n)} \\\\xrightarrow{d} N(0,1),\\\\]
                        <p>其中 \\\\(\\\\operatorname{se}(\\\\hat{\\\\theta}_n)\\\\) 是 \\\\(\\\\hat{\\\\theta}_n\\\\) 的估计标准误。因此 \\\\(\\\\theta\\\\) 的近似 \\\\(1-\\\\alpha\\\\) Wald 置信区间为</p>
                        \\\\[\\\\hat{\\\\theta}_n \\\\pm z_{\\\\alpha/2} \\\\cdot \\\\operatorname{se}(\\\\hat{\\\\theta}_n).\\\\]
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark: 标准误的来源</div>
                    <div class="env-body">
                        <p>标准误 \\\\(\\\\operatorname{se}(\\\\hat{\\\\theta}_n)\\\\) 通常来自 Fisher 信息量：</p>
                        \\\\[\\\\operatorname{se}(\\\\hat{\\\\theta}_n) = \\\\frac{1}{\\\\sqrt{n\\\\,I(\\\\hat{\\\\theta}_n)}},\\\\]
                        <p>其中 \\\\(I(\\\\theta) = -E\\\\left[\\\\frac{\\\\partial^2}{\\\\partial\\\\theta^2}\\\\log f(X;\\\\theta)\\\\right]\\\\) 是单观测 Fisher 信息量。也可以用观测 Fisher 信息量 \\\\(\\\\hat{I}_n(\\\\hat{\\\\theta}_n) = -\\\\frac{1}{n}\\\\sum \\\\frac{\\\\partial^2}{\\\\partial\\\\theta^2}\\\\log f(X_i; \\\\hat{\\\\theta}_n)\\\\) 来替代。</p>
                    </div>
                </div>

                <h3>比例的置信区间</h3>

                <div class="env-block example">
                    <div class="env-title">Example 8.17 (Wald 区间用于比例)</div>
                    <div class="env-body">
                        <p>设 \\\\(X \\\\sim \\\\text{Bin}(n, p)\\\\)，MLE 为 \\\\(\\\\hat{p} = X/n\\\\)。Wald 区间为</p>
                        \\\\[\\\\hat{p} \\\\pm z_{\\\\alpha/2} \\\\sqrt{\\\\frac{\\\\hat{p}(1-\\\\hat{p})}{n}}.\\\\]
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning: Wald 区间在比例估计中的问题</div>
                    <div class="env-body">
                        <p>Wald 区间在 \\\\(p\\\\) 接近 0 或 1 时表现很差：</p>
                        <ul>
                            <li>实际覆盖率远低于名义水平（如名义 95% 但实际只有 88%）；</li>
                            <li>当 \\\\(\\\\hat{p} = 0\\\\) 或 1 时，区间退化为一个点；</li>
                            <li>即使 \\\\(p\\\\) 在中间值，对于中等样本量覆盖率也有明显波动（"sawtooth" 现象）。</li>
                        </ul>
                    </div>
                </div>

                <h3>Wilson Score 区间</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.18 (Wilson Score 区间)</div>
                    <div class="env-body">
                        <p>Wilson score 区间不是从 Wald 统计量出发，而是从 score 检验的反转得到：</p>
                        \\\\[\\\\frac{\\\\hat{p} + \\\\frac{z^2}{2n} \\\\pm z\\\\sqrt{\\\\frac{\\\\hat{p}(1-\\\\hat{p})}{n} + \\\\frac{z^2}{4n^2}}}{1 + \\\\frac{z^2}{n}},\\\\]
                        <p>其中 \\\\(z = z_{\\\\alpha/2}\\\\)。这等价于求解关于 \\\\(p\\\\) 的不等式</p>
                        \\\\[\\\\left|\\\\frac{\\\\hat{p} - p}{\\\\sqrt{p(1-p)/n}}\\\\right| \\\\leq z_{\\\\alpha/2}.\\\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>从 \\\\(\\\\left(\\\\frac{\\\\hat{p}-p}{\\\\sqrt{p(1-p)/n}}\\\\right)^2 \\\\leq z^2\\\\) 出发，展开得</p>
                        \\\\[n(\\\\hat{p}-p)^2 \\\\leq z^2 p(1-p).\\\\]
                        <p>整理为关于 \\\\(p\\\\) 的二次不等式：</p>
                        \\\\[(n + z^2)p^2 - (2n\\\\hat{p} + z^2)p + n\\\\hat{p}^2 \\\\leq 0.\\\\]
                        <p>用求根公式解此二次不等式即得 Wilson 区间的端点。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition: 为什么 Wilson 比 Wald 好？</div>
                    <div class="env-body">
                        <p>Wald 区间在分母中用 \\\\(\\\\hat{p}\\\\) 替代 \\\\(p\\\\)（插入估计值），当 \\\\(\\\\hat{p}\\\\) 偏离真值时引入额外误差。Wilson 区间则直接对 \\\\(p\\\\) 求解方程，用真 \\\\(p\\\\) 作分母——虽然最终需要求解二次方程，但避免了 plug-in 估计的偏差。</p>
                        <p>直觉上，Wilson 区间可以理解为"将 \\\\(\\\\hat{p}\\\\) 向 1/2 收缩"：它的中心是 \\\\(\\\\hat{p}\\\\) 和 \\\\(1/2\\\\) 的加权平均，权重取决于 \\\\(n\\\\) 和 \\\\(z^2\\\\)。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark: Agresti-Coull 区间</div>
                    <div class="env-body">
                        <p>一个简便的改进方法是 Agresti-Coull（"加四"）区间：令 \\\\(\\\\tilde{n} = n + z^2\\\\)，\\\\(\\\\tilde{p} = (X + z^2/2)/\\\\tilde{n}\\\\)（其中 \\\\(X = n\\\\hat{p}\\\\) 为成功次数），然后构造标准 Wald 区间 \\\\(\\\\tilde{p} \\\\pm z \\\\sqrt{\\\\tilde{p}(1-\\\\tilde{p})/\\\\tilde{n}}\\\\)。在 95% 水平下，这相当于添加 2 个成功和 2 个失败的"伪观测"。此方法简单且覆盖率良好。</p>
                    </div>
                </div>

                <h3>置信水平与区间宽度的权衡</h3>

                <div class="env-block remark">
                    <div class="env-title">Remark: 置信水平-精度权衡</div>
                    <div class="env-body">
                        <p>置信区间的宽度由三个因素决定：</p>
                        <ol>
                            <li><strong>置信水平 \\\\(1-\\\\alpha\\\\)</strong>：水平越高（\\\\(\\\\alpha\\\\) 越小），\\\\(z_{\\\\alpha/2}\\\\) 越大，区间越宽；</li>
                            <li><strong>样本量 \\\\(n\\\\)</strong>：\\\\(n\\\\) 越大，标准误越小，区间越窄；</li>
                            <li><strong>总体变异性 \\\\(\\\\sigma^2\\\\)</strong>：变异越大，区间越宽。</li>
                        </ol>
                        <p>在固定 \\\\(n\\\\) 的情况下，提高置信水平必然以增加区间宽度为代价——这是"确定性"和"精确性"之间的基本权衡。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="confidence-level-slider"></div>

                <div class="viz-placeholder" data-viz="wald-vs-wilson"></div>
            `,
            visualizations: [
                {
                    id: 'confidence-level-slider',
                    title: '交互演示：置信水平与区间宽度',
                    description: '拖动置信水平 α，实时观察区间宽度的变化',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380,
                            originX: 280, originY: 280, scale: 80
                        });

                        var confLevel = 0.95;
                        var n = 30;
                        var sigma = 1.0;

                        function inverseNormal(p) {
                            if (p <= 0) return -6;
                            if (p >= 1) return 6;
                            if (p < 0.5) return -inverseNormal(1 - p);
                            var t = Math.sqrt(-2 * Math.log(1 - p));
                            var c0 = 2.515517, c1 = 0.802853, c2 = 0.010328;
                            var d1 = 1.432788, d2 = 0.189269, d3 = 0.001308;
                            return t - (c0 + c1 * t + c2 * t * t) / (1 + d1 * t + d2 * t * t + d3 * t * t * t);
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            var alpha = 1 - confLevel;
                            var zCrit = inverseNormal(1 - alpha / 2);
                            var halfWidth = zCrit * sigma / Math.sqrt(n);

                            // Draw normal PDF
                            var pdfScale = 2.5;
                            var pdfFunc = function(x) { return VizEngine.normalPDF(x, 0, 1) * pdfScale; };

                            // Shade confidence region
                            viz.shadeUnder(pdfFunc, -zCrit, zCrit, viz.colors.blue + '44');

                            // Shade tails
                            viz.shadeUnder(pdfFunc, -4, -zCrit, viz.colors.red + '44');
                            viz.shadeUnder(pdfFunc, zCrit, 4, viz.colors.red + '44');

                            // Draw PDF
                            viz.drawFunction(pdfFunc, -4, 4, viz.colors.white, 2);

                            // Axis
                            viz.drawSegment(-4, 0, 4, 0, viz.colors.axis, 1);

                            // Quantile markers
                            viz.drawSegment(-zCrit, 0, -zCrit, pdfFunc(-zCrit), viz.colors.teal, 2);
                            viz.drawSegment(zCrit, 0, zCrit, pdfFunc(zCrit), viz.colors.teal, 2);
                            viz.drawText('-z', -zCrit, -0.25, viz.colors.teal, 11);
                            viz.drawText('+z', zCrit, -0.25, viz.colors.teal, 11);

                            // CI bar below
                            var yBar = -0.6;
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 5;
                            var lb = viz.toScreen(-halfWidth, yBar);
                            var rb = viz.toScreen(halfWidth, yBar);
                            ctx.beginPath(); ctx.moveTo(lb[0], lb[1]); ctx.lineTo(rb[0], rb[1]); ctx.stroke();
                            viz.drawSegment(-halfWidth, yBar - 0.1, -halfWidth, yBar + 0.1, viz.colors.green, 2);
                            viz.drawSegment(halfWidth, yBar - 0.1, halfWidth, yBar + 0.1, viz.colors.green, 2);
                            viz.drawPoint(0, yBar, viz.colors.green, null, 4);

                            // Info
                            viz.screenText('Confidence level: ' + (confLevel * 100).toFixed(1) + '%', viz.width / 2, 16, viz.colors.white, 14);
                            viz.screenText('z = ' + zCrit.toFixed(3) + '    Half-width = ' + halfWidth.toFixed(3), viz.width / 2, 36, viz.colors.text, 12);
                            viz.screenText('CI width = ' + (2 * halfWidth).toFixed(3) + '    (n=' + n + ', ' + String.fromCharCode(963) + '=' + sigma.toFixed(1) + ')', viz.width / 2, 54, viz.colors.text, 11);

                            // Tail annotation
                            viz.screenText(String.fromCharCode(945) + '/2 = ' + (alpha / 2).toFixed(4), 50, viz.height - 70, viz.colors.red, 10, 'left');
                            viz.screenText(String.fromCharCode(945) + '/2', viz.width - 50, viz.height - 70, viz.colors.red, 10, 'right');
                            viz.screenText('1 - ' + String.fromCharCode(945) + ' = ' + confLevel.toFixed(3), viz.width / 2, viz.height - 70, viz.colors.blue, 11);
                        }

                        draw();

                        VizEngine.createSlider(controls, 'Confidence %', 50, 99.9, confLevel * 100, 0.5, function(val) {
                            confLevel = val / 100;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'n', 5, 200, n, 5, function(val) {
                            n = Math.round(val);
                            draw();
                        });

                        return viz;
                    }
                },
                {
                    id: 'wald-vs-wilson',
                    title: '交互演示：Wald vs Wilson Score 区间',
                    description: '比较比例的两种置信区间，观察 Wald 在极端 p 时的退化',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380,
                            originX: 60, originY: 300, scale: 440
                        });

                        var trueP = 0.5;
                        var n = 30;

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Simulate one binomial observation
                            var x = 0;
                            for (var i = 0; i < n; i++) {
                                if (Math.random() < trueP) x++;
                            }
                            var phat = x / n;

                            var z = 1.96;

                            // Wald CI
                            var waldSE = Math.sqrt(phat * (1 - phat) / n);
                            var waldLo = phat - z * waldSE;
                            var waldHi = phat + z * waldSE;

                            // Wilson CI
                            var denom = 1 + z * z / n;
                            var center = (phat + z * z / (2 * n)) / denom;
                            var margin = z * Math.sqrt(phat * (1 - phat) / n + z * z / (4 * n * n)) / denom;
                            var wilsonLo = center - margin;
                            var wilsonHi = center + margin;

                            // Draw [0, 1] axis
                            viz.drawSegment(0, 0, 1, 0, viz.colors.axis, 1.5);

                            // Tick marks
                            for (var t = 0; t <= 10; t++) {
                                var xTick = t / 10;
                                viz.drawSegment(xTick, -0.02, xTick, 0.02, viz.colors.axis, 1);
                                viz.drawText(xTick.toFixed(1), xTick, -0.06, viz.colors.text, 10);
                            }

                            // True p
                            viz.drawSegment(trueP, -0.15, trueP, 0.7, viz.colors.yellow, 2, true);
                            viz.drawText('true p = ' + trueP.toFixed(2), trueP, 0.75, viz.colors.yellow, 11);

                            // Wald CI
                            var yW = 0.45;
                            var wLo = Math.max(waldLo, -0.05);
                            var wHi = Math.min(waldHi, 1.05);
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 5;
                            var lwPt = viz.toScreen(wLo, yW);
                            var rwPt = viz.toScreen(wHi, yW);
                            ctx.beginPath(); ctx.moveTo(lwPt[0], lwPt[1]); ctx.lineTo(rwPt[0], rwPt[1]); ctx.stroke();
                            viz.drawPoint(phat, yW, viz.colors.blue, null, 4);
                            viz.screenText('Wald: [' + waldLo.toFixed(3) + ', ' + waldHi.toFixed(3) + ']', viz.width / 2, viz.toScreen(0, yW)[1] - 14, viz.colors.blue, 11);

                            // Wilson CI
                            var yS = 0.2;
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 5;
                            var lsPt = viz.toScreen(Math.max(wilsonLo, -0.05), yS);
                            var rsPt = viz.toScreen(Math.min(wilsonHi, 1.05), yS);
                            ctx.beginPath(); ctx.moveTo(lsPt[0], lsPt[1]); ctx.lineTo(rsPt[0], rsPt[1]); ctx.stroke();
                            viz.drawPoint(center, yS, viz.colors.orange, null, 4);
                            viz.screenText('Wilson: [' + wilsonLo.toFixed(3) + ', ' + wilsonHi.toFixed(3) + ']', viz.width / 2, viz.toScreen(0, yS)[1] - 14, viz.colors.orange, 11);

                            // Header
                            viz.screenText('Wald vs Wilson Score CI for proportion (95%)', viz.width / 2, 16, viz.colors.white, 14);
                            viz.screenText('n = ' + n + '    X = ' + x + '    p-hat = ' + phat.toFixed(3), viz.width / 2, 36, viz.colors.text, 11);
                        }

                        draw();

                        VizEngine.createSlider(controls, 'true p', 0.01, 0.99, trueP, 0.01, function(val) {
                            trueP = val;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'n', 5, 200, n, 5, function(val) {
                            n = Math.round(val);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Resample', function() {
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '在一次民调中，\\\\(n = 400\\\\) 名选民中有 \\\\(224\\\\) 人支持候选人 A。(a) 计算 \\\\(p\\\\) 的 Wald 95% 置信区间；(b) 计算 Wilson score 95% 置信区间；(c) 比较两者的差异。',
                    hint: '\\\\(\\\\hat{p} = 224/400 = 0.56\\\\)，\\\\(z = 1.96\\\\)。',
                    solution: '(a) Wald: \\\\(0.56 \\\\pm 1.96\\\\sqrt{0.56 \\\\times 0.44 / 400} = 0.56 \\\\pm 0.0487 = [0.5113, 0.6087]\\\\)。(b) Wilson: 分母 \\\\(1 + 1.96^2/400 = 1.0096\\\\)；中心 \\\\((0.56 + 1.96^2/800)/1.0096 = 0.5583\\\\)；边距 \\\\(1.96\\\\sqrt{0.56 \\\\times 0.44/400 + 1.96^2/640000}/1.0096 = 0.0483\\\\)；Wilson CI: \\\\([0.510, 0.607]\\\\)。(c) 在 \\\\(\\\\hat{p}\\\\) 接近 0.5 且 \\\\(n\\\\) 较大时，两者非常接近。Wilson 中心略向 0.5 收缩。'
                },
                {
                    question: '设 \\\\(X_1,\\\\ldots,X_n \\\\overset{\\\\text{iid}}{\\\\sim} \\\\text{Exp}(\\\\lambda)\\\\)。利用 MLE \\\\(\\\\hat{\\\\lambda} = 1/\\\\bar{X}\\\\) 和 Fisher 信息量构造 \\\\(\\\\lambda\\\\) 的 Wald 置信区间。',
                    hint: '指数分布的 Fisher 信息量为 \\\\(I(\\\\lambda) = 1/\\\\lambda^2\\\\)。',
                    solution: '单观测 Fisher 信息 \\\\(I(\\\\lambda) = 1/\\\\lambda^2\\\\)。标准误 \\\\(\\\\operatorname{se}(\\\\hat{\\\\lambda}) = 1/\\\\sqrt{nI(\\\\hat{\\\\lambda})} = \\\\hat{\\\\lambda}/\\\\sqrt{n} = 1/(\\\\bar{X}\\\\sqrt{n})\\\\)。Wald CI: \\\\(\\\\hat{\\\\lambda} \\\\pm z_{\\\\alpha/2} \\\\hat{\\\\lambda}/\\\\sqrt{n} = \\\\hat{\\\\lambda}(1 \\\\pm z_{\\\\alpha/2}/\\\\sqrt{n})\\\\)。即 \\\\([\\\\hat{\\\\lambda}(1 - z_{\\\\alpha/2}/\\\\sqrt{n}), \\; \\\\hat{\\\\lambda}(1 + z_{\\\\alpha/2}/\\\\sqrt{n})]\\\\)。'
                },
                {
                    question: '利用 Delta 方法，对 \\\\(g(\\\\mu) = e^{\\\\mu}\\\\) 构造近似置信区间，其中 \\\\(X_1, \\\\ldots, X_n \\\\sim N(\\\\mu, \\\\sigma^2)\\\\)，\\\\(\\\\sigma\\\\) 已知。比较 Delta 方法与直接变换法的区别。',
                    hint: 'Delta 方法给出 \\\\(\\\\sqrt{n}(g(\\\\bar{X}) - g(\\\\mu)) \\\\xrightarrow{d} N(0, [g\'(\\\\mu)]^2 \\\\sigma^2)\\\\)，其中 \\\\(g\'(\\\\mu) = e^{\\\\mu}\\\\)。',
                    solution: 'Delta 方法：\\\\(\\\\sqrt{n}(e^{\\\\bar{X}} - e^{\\\\mu}) \\\\xrightarrow{d} N(0, e^{2\\\\mu} \\\\sigma^2)\\\\)。用 \\\\(e^{\\\\bar{X}}\\\\) 估计 \\\\(e^{\\\\mu}\\\\)，得近似 CI: \\\\(e^{\\\\bar{X}} \\\\pm z_{\\\\alpha/2} \\\\cdot e^{\\\\bar{X}} \\\\cdot \\\\sigma / \\\\sqrt{n}\\\\)，即 \\\\(e^{\\\\bar{X}}(1 \\\\pm z_{\\\\alpha/2} \\\\sigma/\\\\sqrt{n})\\\\)。直接变换法：先对 \\\\(\\\\mu\\\\) 构造精确 CI \\\\([\\\\bar{X} - z_{\\\\alpha/2}\\\\sigma/\\\\sqrt{n}, \\\\bar{X} + z_{\\\\alpha/2}\\\\sigma/\\\\sqrt{n}]\\\\)，再取指数得 \\\\([e^{\\\\bar{X} - z_{\\\\alpha/2}\\\\sigma/\\\\sqrt{n}}, e^{\\\\bar{X} + z_{\\\\alpha/2}\\\\sigma/\\\\sqrt{n}}]\\\\)。后者避免了 Delta 方法的近似误差，是精确的。'
                },
                {
                    question: '解释为什么将置信水平从 95% 提高到 99% 会使区间宽度增加约 31%，而不是增加 4%。',
                    hint: '比较 \\\\(z_{0.025}\\\\) 和 \\\\(z_{0.005}\\\\) 的值。',
                    solution: '区间宽度与 \\\\(z_{\\\\alpha/2}\\\\) 成正比。95% 对应 \\\\(z_{0.025} = 1.96\\\\)，99% 对应 \\\\(z_{0.005} = 2.576\\\\)。宽度比为 \\\\(2.576/1.96 \\\\approx 1.314\\\\)，即增加约 31.4%。这是因为正态分布尾部概率衰减很快——要多覆盖 4% 的概率（从 95% 到 99%），需要向两侧各延伸相当多的距离，因为这 4% 的概率分布在尾巴的很远处。'
                }
            ]
        }
    ]
});

window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch11',
    number: 11,
    title: '常用检验',
    subtitle: 'Common Statistical Tests',
    sections: [
        // ============================================================
        // SECTION 1: z检验与t检验
        // ============================================================
        {
            id: 'ch11-sec01',
            title: 'z检验与t检验',
            content: `
                <h2>z检验与t检验</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>在假设检验的理论框架建立之后，我们转向最常用的具体检验方法。z检验和t检验是正态总体均值检验的基本工具：当总体方差已知时使用z检验，方差未知时使用t检验。它们是统计实践中使用频率最高的检验方法。</p>
                    </div>
                </div>

                <h3>单样本z检验（\\\\(\\\\sigma\\\\) 已知）</h3>

                <p>设 \\\\(X_1, \\\\ldots, X_n \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu, \\\\sigma^2)\\\\)，其中 \\\\(\\\\sigma^2\\\\) 已知。考虑检验问题：</p>
                \\\\[H_0: \\\\mu = \\\\mu_0 \\\\quad \\\\text{vs} \\\\quad H_1: \\\\mu \\\\neq \\\\mu_0\\\\]

                <div class="env-block definition">
                    <div class="env-title">Definition 11.1 (z检验统计量)</div>
                    <div class="env-body">
                        <p>z检验统计量定义为</p>
                        \\\\[Z = \\\\frac{\\\\bar{X} - \\\\mu_0}{\\\\sigma / \\\\sqrt{n}}\\\\]
                        <p>在 \\\\(H_0\\\\) 成立时，\\\\(Z \\\\sim N(0,1)\\\\)。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.2 (z检验的拒绝域)</div>
                    <div class="env-body">
                        <p>对于显著性水平 \\\\(\\\\alpha\\\\) 的双侧检验，拒绝域为</p>
                        \\\\[|Z| > z_{\\\\alpha/2}\\\\]
                        <p>其中 \\\\(z_{\\\\alpha/2}\\\\) 是标准正态分布的上 \\\\(\\\\alpha/2\\\\) 分位数。对于单侧检验：</p>
                        <ul>
                            <li>\\\\(H_1: \\\\mu > \\\\mu_0\\\\) 时，拒绝域为 \\\\(Z > z_\\\\alpha\\\\)</li>
                            <li>\\\\(H_1: \\\\mu < \\\\mu_0\\\\) 时，拒绝域为 \\\\(Z < -z_\\\\alpha\\\\)</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>在 \\\\(H_0: \\\\mu = \\\\mu_0\\\\) 下，\\\\(\\\\bar{X} \\\\sim N(\\\\mu_0, \\\\sigma^2/n)\\\\)，因此 \\\\(Z = (\\\\bar{X} - \\\\mu_0)/(\\\\sigma/\\\\sqrt{n}) \\\\sim N(0,1)\\\\)。为使犯第一类错误的概率恰好为 \\\\(\\\\alpha\\\\)，需要</p>
                        \\\\[P_{\\\\mu_0}(|Z| > c) = \\\\alpha\\\\]
                        <p>由标准正态分布的对称性，\\\\(c = z_{\\\\alpha/2}\\\\) 即满足要求。类似地可得单侧情形。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h3>单样本t检验（\\\\(\\\\sigma\\\\) 未知）</h3>

                <p>实际问题中总体标准差 \\\\(\\\\sigma\\\\) 通常未知。此时用样本标准差 \\\\(S = \\\\sqrt{\\\\frac{1}{n-1}\\\\sum_{i=1}^n (X_i - \\\\bar{X})^2}\\\\) 代替 \\\\(\\\\sigma\\\\)。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.3 (单样本t统计量)</div>
                    <div class="env-body">
                        <p>单样本t统计量定义为</p>
                        \\\\[T = \\\\frac{\\\\bar{X} - \\\\mu_0}{S / \\\\sqrt{n}}\\\\]
                        <p>在 \\\\(H_0: \\\\mu = \\\\mu_0\\\\) 下，\\\\(T \\\\sim t(n-1)\\\\)（自由度为 \\\\(n-1\\\\) 的Student t分布）。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.4 (t统计量的分布)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu, \\\\sigma^2)\\\\)。在 \\\\(H_0: \\\\mu = \\\\mu_0\\\\) 下，</p>
                        \\\\[T = \\\\frac{\\\\bar{X} - \\\\mu_0}{S/\\\\sqrt{n}} \\\\sim t(n-1)\\\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>在 \\\\(H_0\\\\) 下，\\\\(Z = \\\\frac{\\\\bar{X} - \\\\mu_0}{\\\\sigma/\\\\sqrt{n}} \\\\sim N(0,1)\\\\)。由 Cochran 定理知 \\\\(\\\\frac{(n-1)S^2}{\\\\sigma^2} \\\\sim \\\\chi^2(n-1)\\\\)，且 \\\\(\\\\bar{X}\\\\) 与 \\\\(S^2\\\\) 独立。因此</p>
                        \\\\[T = \\\\frac{Z}{\\\\sqrt{\\\\frac{(n-1)S^2}{\\\\sigma^2}/(n-1)}} = \\\\frac{N(0,1)}{\\\\sqrt{\\\\chi^2(n-1)/(n-1)}} \\\\sim t(n-1)\\\\]
                        <p>这正是 Student t 分布的定义。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h3>两样本t检验</h3>

                <p>设 \\\\(X_1, \\\\ldots, X_m \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu_1, \\\\sigma_1^2)\\\\) 和 \\\\(Y_1, \\\\ldots, Y_n \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu_2, \\\\sigma_2^2)\\\\) 独立，检验 \\\\(H_0: \\\\mu_1 = \\\\mu_2\\\\)。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.5 (合并两样本t检验)</div>
                    <div class="env-body">
                        <p>当 \\\\(\\\\sigma_1^2 = \\\\sigma_2^2 = \\\\sigma^2\\\\)（等方差假设）时，合并样本方差为</p>
                        \\\\[S_p^2 = \\\\frac{(m-1)S_1^2 + (n-1)S_2^2}{m + n - 2}\\\\]
                        <p>检验统计量为</p>
                        \\\\[T = \\\\frac{\\\\bar{X} - \\\\bar{Y}}{S_p\\\\sqrt{\\\\frac{1}{m} + \\\\frac{1}{n}}} \\\\sim t(m+n-2)\\\\]
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.6 (Welch t检验)</div>
                    <div class="env-body">
                        <p>当不假设等方差时，Welch近似使用统计量</p>
                        \\\\[T_W = \\\\frac{\\\\bar{X} - \\\\bar{Y}}{\\\\sqrt{\\\\frac{S_1^2}{m} + \\\\frac{S_2^2}{n}}}\\\\]
                        <p>近似服从 \\\\(t(\\\\nu)\\\\) 分布，其中 Welch-Satterthwaite 自由度为</p>
                        \\\\[\\\\nu = \\\\frac{\\\\left(\\\\frac{S_1^2}{m} + \\\\frac{S_2^2}{n}\\\\right)^2}{\\\\frac{(S_1^2/m)^2}{m-1} + \\\\frac{(S_2^2/n)^2}{n-1}}\\\\]
                    </div>
                </div>

                <h3>配对t检验</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.7 (配对t检验)</div>
                    <div class="env-body">
                        <p>设观测为配对数据 \\\\((X_1, Y_1), \\\\ldots, (X_n, Y_n)\\\\)，令差值 \\\\(D_i = X_i - Y_i\\\\)。假设 \\\\(D_i \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu_D, \\\\sigma_D^2)\\\\)，检验 \\\\(H_0: \\\\mu_D = 0\\\\)。统计量为</p>
                        \\\\[T = \\\\frac{\\\\bar{D}}{S_D / \\\\sqrt{n}} \\\\sim t(n-1)\\\\]
                        <p>其中 \\\\(\\\\bar{D} = \\\\frac{1}{n}\\\\sum D_i\\\\)，\\\\(S_D^2 = \\\\frac{1}{n-1}\\\\sum(D_i - \\\\bar{D})^2\\\\)。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>配对t检验本质上是对差值序列 \\\\(D_1, \\\\ldots, D_n\\\\) 做单样本t检验。它通过消除个体差异来提高检验功效，在实验设计中非常重要。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="test-selector-viz"></div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>t检验依赖正态性假设。对于大样本，由中心极限定理，t检验对非正态总体仍近似有效。但对于小样本且严重偏斜的分布，应考虑非参数方法（如Wilcoxon检验）。</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'test-selector-viz',
                    title: 'Interactive: z/t 检验选择器',
                    description: '切换不同检验类型，观察检验统计量的分布和拒绝域',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380, scale: 55,
                            originX: 280, originY: 300
                        });

                        var testType = 0; // 0=z, 1=one-sample t, 2=two-sample t, 3=paired t
                        var alpha = 0.05;
                        var df = 10;
                        var testNames = ['z-test', 'One-sample t', 'Two-sample t', 'Paired t'];

                        var alphaSlider = VizEngine.createSlider(controls, 'alpha', 0.01, 0.20, 0.05, 0.01, function(v) {
                            alpha = v; draw();
                        });
                        var dfSlider = VizEngine.createSlider(controls, 'df (t-test)', 2, 50, 10, 1, function(v) {
                            df = Math.round(v); draw();
                        });
                        VizEngine.createButton(controls, 'z-test', function() { testType = 0; draw(); });
                        VizEngine.createButton(controls, 'One-sample t', function() { testType = 1; draw(); });
                        VizEngine.createButton(controls, 'Two-sample t', function() { testType = 2; draw(); });
                        VizEngine.createButton(controls, 'Paired t', function() { testType = 3; draw(); });

                        function normalQuantile(p) {
                            // Rational approximation for normal quantile
                            if (p <= 0 || p >= 1) return 0;
                            if (p < 0.5) return -normalQuantile(1 - p);
                            var t = Math.sqrt(-2 * Math.log(1 - p));
                            var c0 = 2.515517, c1 = 0.802853, c2 = 0.010328;
                            var d1 = 1.432788, d2 = 0.189269, d3 = 0.001308;
                            return t - (c0 + c1 * t + c2 * t * t) / (1 + d1 * t + d2 * t * t + d3 * t * t * t);
                        }

                        function tQuantile(p, nu) {
                            // Approximate t quantile via normal with correction
                            var zp = normalQuantile(p);
                            var g1 = (zp * zp * zp + zp) / 4;
                            var g2 = (5 * zp * zp * zp * zp * zp + 16 * zp * zp * zp + 3 * zp) / 96;
                            return zp + g1 / nu + g2 / (nu * nu);
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            var xMin = -4.5, xMax = 4.5;

                            // Draw axes
                            viz.drawSegment(xMin, 0, xMax, 0, viz.colors.axis, 1);

                            // Tick marks
                            for (var t = -4; t <= 4; t++) {
                                viz.drawSegment(t, -0.02, t, 0.02, viz.colors.axis, 1);
                                viz.drawText(String(t), t, -0.08, viz.colors.text, 10);
                            }

                            var pdfFn, critVal, label;
                            if (testType === 0) {
                                pdfFn = function(x) { return VizEngine.normalPDF(x, 0, 1); };
                                critVal = normalQuantile(1 - alpha / 2);
                                label = 'Z ~ N(0,1)';
                            } else {
                                pdfFn = function(x) { return VizEngine.tPDF(x, df); };
                                critVal = tQuantile(1 - alpha / 2, df);
                                label = 'T ~ t(' + df + ')';
                            }

                            // Shade rejection regions
                            viz.shadeUnder(pdfFn, xMin, -critVal, viz.colors.red + '55');
                            viz.shadeUnder(pdfFn, critVal, xMax, viz.colors.red + '55');

                            // Shade acceptance region
                            viz.shadeUnder(pdfFn, -critVal, critVal, viz.colors.green + '22');

                            // Draw PDF curve
                            viz.drawFunction(pdfFn, xMin, xMax, viz.colors.blue, 2.5);

                            // Critical value lines
                            viz.drawSegment(-critVal, 0, -critVal, pdfFn(-critVal), viz.colors.red, 1.5, true);
                            viz.drawSegment(critVal, 0, critVal, pdfFn(critVal), viz.colors.red, 1.5, true);

                            // Labels
                            viz.screenText(testNames[testType], viz.width / 2, 20, viz.colors.white, 16, 'center');
                            viz.screenText(label, viz.width / 2, 42, viz.colors.blue, 13, 'center');
                            viz.screenText('alpha = ' + alpha.toFixed(2), viz.width - 20, 20, viz.colors.orange, 12, 'right');

                            viz.drawText('-c = ' + (-critVal).toFixed(3), -critVal, -0.18, viz.colors.red, 10);
                            viz.drawText('c = ' + critVal.toFixed(3), critVal, -0.18, viz.colors.red, 10);

                            // Rejection / acceptance labels
                            viz.screenText('Reject H0', 50, 60, viz.colors.red, 11, 'left');
                            viz.screenText('Reject H0', viz.width - 50, 60, viz.colors.red, 11, 'right');
                            viz.screenText('Fail to reject', viz.width / 2, 65, viz.colors.green, 11, 'center');

                            if (testType >= 1) {
                                viz.screenText('df = ' + df, viz.width - 20, 38, viz.colors.teal, 12, 'right');
                                // Also show N(0,1) for comparison
                                var normalFn = function(x) { return VizEngine.normalPDF(x, 0, 1); };
                                viz.drawFunction(normalFn, xMin, xMax, viz.colors.text + '66', 1, 200);
                                viz.screenText('(gray: N(0,1) for comparison)', viz.width / 2, viz.height - 10, viz.colors.text, 10, 'center');
                            }
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\\\(X_1, \\\\ldots, X_{25} \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu, 4)\\\\)，观测到 \\\\(\\\\bar{x} = 10.3\\\\)。在 \\\\(\\\\alpha = 0.05\\\\) 下检验 \\\\(H_0: \\\\mu = 10\\\\) vs \\\\(H_1: \\\\mu \\\\neq 10\\\\)。写出检验统计量的值和结论。',
                    hint: '\\\\(\\\\sigma^2 = 4\\\\) 已知，使用z检验。\\\\(z_{0.025} = 1.96\\\\)。',
                    solution: '\\\\(Z = \\\\frac{10.3 - 10}{2/\\\\sqrt{25}} = \\\\frac{0.3}{0.4} = 0.75\\\\)。因为 \\\\(|Z| = 0.75 < 1.96 = z_{0.025}\\\\)，不拒绝 \\\\(H_0\\\\)。在 \\\\(\\\\alpha = 0.05\\\\) 水平上没有足够证据认为 \\\\(\\\\mu \\\\neq 10\\\\)。'
                },
                {
                    question: '解释为什么在 \\\\(\\\\sigma\\\\) 未知时不能直接用z检验，而必须使用t检验。从统计量的分布角度说明。',
                    hint: '考虑用 \\\\(S\\\\) 代替 \\\\(\\\\sigma\\\\) 后统计量的分布变化。',
                    solution: '当 \\\\(\\\\sigma\\\\) 已知时，\\\\(Z = (\\\\bar{X}-\\\\mu_0)/(\\\\sigma/\\\\sqrt{n}) \\\\sim N(0,1)\\\\)。但用 \\\\(S\\\\) 代替 \\\\(\\\\sigma\\\\) 后，\\\\(T = (\\\\bar{X}-\\\\mu_0)/(S/\\\\sqrt{n})\\\\) 的分布不再是标准正态，而是 \\\\(t(n-1)\\\\) 分布。t分布比正态分布有更厚的尾部，反映了估计 \\\\(\\\\sigma\\\\) 带来的额外不确定性。若仍用正态分位数作临界值，实际的第一类错误概率会大于名义水平 \\\\(\\\\alpha\\\\)。'
                },
                {
                    question: '设两独立样本 \\\\(X_1,\\\\ldots,X_{10} \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu_1,\\\\sigma^2)\\\\)，\\\\(Y_1,\\\\ldots,Y_{15} \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu_2,\\\\sigma^2)\\\\)。在等方差假设下，合并两样本t检验的自由度是多少？写出合并方差 \\\\(S_p^2\\\\) 的表达式。',
                    hint: '自由度 = \\\\(m + n - 2\\\\)。',
                    solution: '自由度为 \\\\(m + n - 2 = 10 + 15 - 2 = 23\\\\)。合并方差为 \\\\(S_p^2 = \\\\frac{(10-1)S_1^2 + (15-1)S_2^2}{10+15-2} = \\\\frac{9S_1^2 + 14S_2^2}{23}\\\\)。'
                }
            ]
        },

        // ============================================================
        // SECTION 2: 方差检验
        // ============================================================
        {
            id: 'ch11-sec02',
            title: '方差检验',
            content: `
                <h2>方差检验</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>除了均值，方差也是重要的总体参数。质量控制中，产品指标的方差直接反映生产过程的稳定性。方差检验回答的核心问题是：总体的波动程度是否符合预期？两个总体的波动是否相同？</p>
                    </div>
                </div>

                <h3>单样本 \\\\(\\\\chi^2\\\\) 方差检验</h3>

                <p>设 \\\\(X_1, \\\\ldots, X_n \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu, \\\\sigma^2)\\\\)，检验 \\\\(H_0: \\\\sigma^2 = \\\\sigma_0^2\\\\)。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.8 (\\\\(\\\\chi^2\\\\) 方差检验)</div>
                    <div class="env-body">
                        <p>检验统计量为</p>
                        \\\\[\\\\chi^2 = \\\\frac{(n-1)S^2}{\\\\sigma_0^2}\\\\]
                        <p>在 \\\\(H_0\\\\) 下，\\\\(\\\\chi^2 \\\\sim \\\\chi^2(n-1)\\\\)。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.9 (\\\\(\\\\chi^2\\\\) 方差检验的拒绝域)</div>
                    <div class="env-body">
                        <p>对于双侧检验 \\\\(H_1: \\\\sigma^2 \\\\neq \\\\sigma_0^2\\\\)，在显著性水平 \\\\(\\\\alpha\\\\) 下的拒绝域为</p>
                        \\\\[\\\\chi^2 < \\\\chi^2_{1-\\\\alpha/2}(n-1) \\\\quad \\\\text{or} \\\\quad \\\\chi^2 > \\\\chi^2_{\\\\alpha/2}(n-1)\\\\]
                        <p>其中 \\\\(\\\\chi^2_{p}(k)\\\\) 表示 \\\\(\\\\chi^2(k)\\\\) 分布的上 \\\\(p\\\\) 分位数。</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>注意 \\\\(\\\\chi^2\\\\) 分布是非对称的，因此双侧检验的拒绝域不对称。上下临界值需要分别查表。此外，\\\\(\\\\chi^2\\\\) 方差检验对正态性假设非常敏感，远比t检验对正态性的依赖更强。</p>
                    </div>
                </div>

                <h3>F检验：两总体方差比较</h3>

                <p>设 \\\\(X_1,\\\\ldots,X_m \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu_1,\\\\sigma_1^2)\\\\) 与 \\\\(Y_1,\\\\ldots,Y_n \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu_2,\\\\sigma_2^2)\\\\) 独立，检验 \\\\(H_0: \\\\sigma_1^2 = \\\\sigma_2^2\\\\)。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.10 (F检验统计量)</div>
                    <div class="env-body">
                        <p>F检验统计量为</p>
                        \\\\[F = \\\\frac{S_1^2}{S_2^2}\\\\]
                        <p>在 \\\\(H_0\\\\) 下，\\\\(F \\\\sim F(m-1, n-1)\\\\)。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.11 (F检验的构造)</div>
                    <div class="env-body">
                        <p>由于 \\\\(\\\\frac{(m-1)S_1^2}{\\\\sigma_1^2} \\\\sim \\\\chi^2(m-1)\\\\) 和 \\\\(\\\\frac{(n-1)S_2^2}{\\\\sigma_2^2} \\\\sim \\\\chi^2(n-1)\\\\) 独立，在 \\\\(H_0: \\\\sigma_1^2 = \\\\sigma_2^2\\\\) 下，</p>
                        \\\\[F = \\\\frac{S_1^2/\\\\sigma_1^2}{S_2^2/\\\\sigma_2^2} = \\\\frac{S_1^2}{S_2^2} \\\\sim F(m-1, n-1)\\\\]
                        <p>这是两个独立 \\\\(\\\\chi^2\\\\) 变量（各除以自由度）之比，正是F分布的定义。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>回顾F分布的定义：若 \\\\(U \\\\sim \\\\chi^2(d_1)\\\\) 和 \\\\(V \\\\sim \\\\chi^2(d_2)\\\\) 独立，则 \\\\(\\\\frac{U/d_1}{V/d_2} \\\\sim F(d_1, d_2)\\\\)。令 \\\\(U = (m-1)S_1^2/\\\\sigma^2 \\\\sim \\\\chi^2(m-1)\\\\) 和 \\\\(V = (n-1)S_2^2/\\\\sigma^2 \\\\sim \\\\chi^2(n-1)\\\\)，在 \\\\(H_0\\\\) 下 \\\\(\\\\sigma_1^2 = \\\\sigma_2^2 = \\\\sigma^2\\\\)，则</p>
                        \\\\[\\\\frac{U/(m-1)}{V/(n-1)} = \\\\frac{S_1^2/\\\\sigma^2}{S_2^2/\\\\sigma^2} = \\\\frac{S_1^2}{S_2^2} \\\\sim F(m-1,n-1)\\\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h3>Bartlett检验：k个总体方差齐性</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.12 (Bartlett检验)</div>
                    <div class="env-body">
                        <p>设有 \\\\(k\\\\) 个独立正态总体，第 \\\\(i\\\\) 组有 \\\\(n_i\\\\) 个观测，样本方差为 \\\\(S_i^2\\\\)。检验 \\\\(H_0: \\\\sigma_1^2 = \\\\cdots = \\\\sigma_k^2\\\\)。令 \\\\(N = \\\\sum n_i\\\\)，合并方差 \\\\(S_p^2 = \\\\frac{\\\\sum (n_i-1)S_i^2}{N-k}\\\\)。Bartlett统计量为</p>
                        \\\\[B = \\\\frac{(N-k)\\\\ln S_p^2 - \\\\sum_{i=1}^{k}(n_i-1)\\\\ln S_i^2}{1 + \\\\frac{1}{3(k-1)}\\\\left(\\\\sum \\\\frac{1}{n_i-1} - \\\\frac{1}{N-k}\\\\right)}\\\\]
                        <p>在 \\\\(H_0\\\\) 下，\\\\(B \\\\overset{\\\\text{approx}}{\\\\sim} \\\\chi^2(k-1)\\\\)。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Bartlett检验对正态性假设非常敏感。当怀疑正态性不成立时，可考虑 Levene 检验，该检验基于各观测偏离组中位数（或均值）的绝对值进行方差分析，对非正态分布更为稳健。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="f-distribution-viz"></div>
            `,
            visualizations: [
                {
                    id: 'f-distribution-viz',
                    title: 'Interactive: F分布与拒绝域',
                    description: '调整自由度和显著性水平，观察F分布的形状和拒绝域变化',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380, scale: 80,
                            originX: 60, originY: 300
                        });

                        var d1 = 5, d2 = 10, alpha = 0.05;

                        VizEngine.createSlider(controls, 'd1', 1, 30, 5, 1, function(v) {
                            d1 = Math.round(v); draw();
                        });
                        VizEngine.createSlider(controls, 'd2', 1, 30, 10, 1, function(v) {
                            d2 = Math.round(v); draw();
                        });
                        VizEngine.createSlider(controls, 'alpha', 0.01, 0.20, 0.05, 0.01, function(v) {
                            alpha = v; draw();
                        });

                        function findFQuantile(p, d1Val, d2Val) {
                            // Bisection search for F quantile
                            var lo = 0.001, hi = 20;
                            for (var iter = 0; iter < 100; iter++) {
                                var mid = (lo + hi) / 2;
                                var cdfVal = fCDF(mid, d1Val, d2Val);
                                if (cdfVal < p) lo = mid;
                                else hi = mid;
                            }
                            return (lo + hi) / 2;
                        }

                        function fCDF(x, d1Val, d2Val) {
                            // Numerical integration of F PDF
                            if (x <= 0) return 0;
                            var steps = 500;
                            var dx = x / steps;
                            var sum = 0;
                            for (var i = 0; i < steps; i++) {
                                var x0 = i * dx;
                                var x1 = (i + 1) * dx;
                                sum += (VizEngine.fPDF(x0, d1Val, d2Val) + VizEngine.fPDF(x1, d1Val, d2Val)) / 2 * dx;
                            }
                            return Math.min(sum, 1);
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            var xMax = 5.5;

                            // Draw axis
                            viz.drawSegment(0, 0, xMax, 0, viz.colors.axis, 1);
                            for (var t = 0; t <= 5; t++) {
                                viz.drawSegment(t, -0.01, t, 0.01, viz.colors.axis, 1);
                                viz.drawText(String(t), t, -0.04, viz.colors.text, 10);
                            }

                            var fPdf = function(x) { return VizEngine.fPDF(x, d1, d2); };

                            // Find critical value
                            var critVal = findFQuantile(1 - alpha, d1, d2);

                            // Shade rejection region (right tail)
                            viz.shadeUnder(fPdf, critVal, xMax, viz.colors.red + '55');

                            // Shade acceptance region
                            viz.shadeUnder(fPdf, 0.001, critVal, viz.colors.green + '22');

                            // Draw PDF
                            viz.drawFunction(fPdf, 0.01, xMax, viz.colors.orange, 2.5);

                            // Critical value line
                            viz.drawSegment(critVal, 0, critVal, fPdf(critVal) + 0.05, viz.colors.red, 1.5, true);
                            viz.drawText('F_crit = ' + critVal.toFixed(3), critVal, -0.08, viz.colors.red, 10);

                            // Labels
                            viz.screenText('F(' + d1 + ', ' + d2 + ') Distribution', viz.width / 2, 20, viz.colors.white, 15, 'center');
                            viz.screenText('alpha = ' + alpha.toFixed(2), viz.width - 20, 20, viz.colors.orange, 12, 'right');
                            viz.screenText('Reject H0', viz.width - 60, 80, viz.colors.red, 11, 'center');

                            // Show mean line
                            if (d2 > 2) {
                                var fMean = d2 / (d2 - 2);
                                viz.drawSegment(fMean, 0, fMean, fPdf(fMean), viz.colors.teal, 1, true);
                                viz.drawText('E[F]=' + fMean.toFixed(2), fMean, -0.12, viz.colors.teal, 10);
                            }
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\\\(X_1,\\\\ldots,X_{20} \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu,\\\\sigma^2)\\\\)，观测到 \\\\(s^2 = 12.5\\\\)。在 \\\\(\\\\alpha=0.05\\\\) 下检验 \\\\(H_0: \\\\sigma^2 = 9\\\\) vs \\\\(H_1: \\\\sigma^2 > 9\\\\)。',
                    hint: '使用 \\\\(\\\\chi^2\\\\) 检验，单侧。\\\\(\\\\chi^2_{0.05}(19) \\\\approx 30.14\\\\)。',
                    solution: '检验统计量 \\\\(\\\\chi^2 = \\\\frac{(20-1) \\\\times 12.5}{9} = \\\\frac{237.5}{9} \\\\approx 26.39\\\\)。因为 \\\\(26.39 < 30.14 = \\\\chi^2_{0.05}(19)\\\\)，不拒绝 \\\\(H_0\\\\)。在 \\\\(\\\\alpha=0.05\\\\) 水平下没有足够证据认为 \\\\(\\\\sigma^2 > 9\\\\)。'
                },
                {
                    question: '两组独立样本：\\\\(m=12, S_1^2=4.8\\\\) 和 \\\\(n=10, S_2^2=2.1\\\\)。计算F统计量，写出自由度。在什么情况下此F检验可能给出误导性结论？',
                    hint: 'F = S_1^2/S_2^2，自由度 (m-1, n-1)。',
                    solution: '\\\\(F = 4.8/2.1 \\\\approx 2.286\\\\)，自由度为 \\\\((11, 9)\\\\)。F检验对正态性假设非常敏感：如果数据来自重尾分布（如t分布或受污染的正态分布），即使两个总体方差相等，F检验也可能因为极端值的影响而错误地拒绝 \\\\(H_0\\\\)，导致偏高的第一类错误率。'
                },
                {
                    question: '证明：在 \\\\(H_0: \\\\sigma_1^2 = \\\\sigma_2^2\\\\) 下，\\\\(F = S_1^2/S_2^2\\\\) 和 \\\\(1/F = S_2^2/S_1^2\\\\) 的关系为 \\\\(1/F \\\\sim F(n-1, m-1)\\\\)。',
                    hint: '利用F分布的倒数性质。',
                    solution: '若 \\\\(F \\\\sim F(d_1, d_2)\\\\)，由定义 \\\\(F = \\\\frac{U/d_1}{V/d_2}\\\\)，其中 \\\\(U \\\\sim \\\\chi^2(d_1)\\\\)，\\\\(V \\\\sim \\\\chi^2(d_2)\\\\) 独立。则 \\\\(1/F = \\\\frac{V/d_2}{U/d_1} \\\\sim F(d_2, d_1)\\\\)。所以 \\\\(S_2^2/S_1^2 \\\\sim F(n-1, m-1)\\\\)。这就是为什么双侧F检验可以通过只看上尾来实现：总将较大的方差放在分子。'
                }
            ]
        },

        // ============================================================
        // SECTION 3: 拟合优度检验
        // ============================================================
        {
            id: 'ch11-sec03',
            title: '拟合优度检验',
            content: `
                <h2>拟合优度检验</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>前面的检验关注参数（均值、方差）。拟合优度检验回答更根本的问题：数据是否来自某个特定的分布？例如，骰子是否均匀？基因型比例是否符合孟德尔遗传定律？这是从参数检验走向非参数思想的第一步。</p>
                    </div>
                </div>

                <h3>Pearson \\\\(\\\\chi^2\\\\) 拟合优度检验</h3>

                <p>设有 \\\\(k\\\\) 个类别，观测频数为 \\\\(O_1, \\\\ldots, O_k\\\\)（\\\\(\\\\sum O_i = n\\\\)），零假设指定各类别的概率为 \\\\(p_1, \\\\ldots, p_k\\\\)，期望频数 \\\\(E_i = np_i\\\\)。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.13 (Pearson \\\\(\\\\chi^2\\\\) 统计量)</div>
                    <div class="env-body">
                        <p>Pearson \\\\(\\\\chi^2\\\\) 拟合优度统计量为</p>
                        \\\\[\\\\chi^2 = \\\\sum_{i=1}^{k} \\\\frac{(O_i - E_i)^2}{E_i}\\\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.14 (Pearson定理)</div>
                    <div class="env-body">
                        <p>在 \\\\(H_0\\\\) 成立时，当 \\\\(n \\\\to \\\\infty\\\\)，</p>
                        \\\\[\\\\chi^2 = \\\\sum_{i=1}^{k} \\\\frac{(O_i - E_i)^2}{E_i} \\\\xrightarrow{d} \\\\chi^2(k-1)\\\\]
                        <p>自由度为 \\\\(k-1\\\\) 而非 \\\\(k\\\\)，因为频数之和 \\\\(\\\\sum O_i = n\\\\) 施加了一个线性约束。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p>令 \\\\(Z_i = \\\\frac{O_i - E_i}{\\\\sqrt{E_i}}\\\\)。由多项分布的中心极限定理，向量 \\\\((Z_1, \\\\ldots, Z_k)^\\\\top\\\\) 渐近服从均值为零的多元正态分布，但受约束 \\\\(\\\\sum \\\\sqrt{E_i} Z_i = 0\\\\)。协方差矩阵的秩为 \\\\(k-1\\\\)，因此 \\\\(\\\\sum Z_i^2 = \\\\chi^2\\\\) 渐近服从 \\\\(\\\\chi^2(k-1)\\\\)。严格证明可通过正交分解（Cochran定理的推广）完成。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h3>估计参数时的自由度修正</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.15 (含参数估计的自由度)</div>
                    <div class="env-body">
                        <p>若零假设中包含 \\\\(p\\\\) 个未知参数，这些参数由极大似然法从分组数据中估计，则</p>
                        \\\\[\\\\chi^2 = \\\\sum_{i=1}^{k} \\\\frac{(O_i - \\\\hat{E}_i)^2}{\\\\hat{E}_i} \\\\xrightarrow{d} \\\\chi^2(k - 1 - p)\\\\]
                        <p>自由度减少为 \\\\(k - 1 - p\\\\)。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 11.16</div>
                    <div class="env-body">
                        <p>检验数据是否服从 Poisson 分布。将数据分为 \\\\(k\\\\) 个类别（如 0, 1, 2, 3, \\\\(\\\\geq 4\\\\)），从数据估计参数 \\\\(\\\\hat{\\\\lambda} = \\\\bar{X}\\\\)（\\\\(p=1\\\\)）。则自由度为 \\\\(k - 1 - 1 = k - 2\\\\)。</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>经验法则：\\\\(\\\\chi^2\\\\) 拟合优度检验要求各类别期望频数 \\\\(E_i \\\\geq 5\\\\)。期望频数过小时，\\\\(\\\\chi^2\\\\) 近似不准确，应合并相邻类别。</p>
                    </div>
                </div>

                <h3>Kolmogorov-Smirnov 检验简介</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.17 (KS统计量)</div>
                    <div class="env-body">
                        <p>Kolmogorov-Smirnov 检验不依赖于分组。设经验分布函数为 \\\\(F_n(x) = \\\\frac{1}{n}\\\\sum_{i=1}^n \\\\mathbf{1}(X_i \\\\leq x)\\\\)，零假设指定CDF为 \\\\(F_0\\\\)。KS统计量为</p>
                        \\\\[D_n = \\\\sup_x |F_n(x) - F_0(x)|\\\\]
                        <p>Glivenko-Cantelli 定理保证 \\\\(D_n \\\\to 0\\\\) a.s.；在 \\\\(H_0\\\\) 下，\\\\(\\\\sqrt{n} D_n\\\\) 收敛到 Kolmogorov 分布。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>KS检验的优点是不需要分组（避免了分组选择的任意性），且对连续分布是精确的分布自由检验。缺点是对尾部偏离的检测功效较低，且不适用于离散分布。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="chi2-gof-viz"></div>
            `,
            visualizations: [
                {
                    id: 'chi2-gof-viz',
                    title: 'Interactive: Chi-squared 拟合优度检验',
                    description: '调整观测频数，计算检验统计量并在卡方分布上展示',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 420, scale: 18,
                            originX: 80, originY: 250
                        });

                        var k = 6; // number of categories (e.g., dice)
                        var n = 60; // total count
                        var observed = [8, 12, 10, 14, 7, 9];

                        VizEngine.createButton(controls, 'Fair die (uniform)', function() {
                            observed = [10, 10, 10, 10, 10, 10];
                            draw();
                        });
                        VizEngine.createButton(controls, 'Slightly biased', function() {
                            observed = [8, 12, 10, 14, 7, 9];
                            draw();
                        });
                        VizEngine.createButton(controls, 'Very biased', function() {
                            observed = [3, 5, 8, 15, 12, 17];
                            draw();
                        });
                        VizEngine.createButton(controls, 'Random sample', function() {
                            // Generate multinomial sample
                            observed = [0, 0, 0, 0, 0, 0];
                            for (var i = 0; i < n; i++) {
                                var cat = Math.floor(Math.random() * k);
                                observed[cat]++;
                            }
                            draw();
                        });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            var total = 0;
                            for (var i = 0; i < k; i++) total += observed[i];
                            var expected = total / k;

                            // Top half: bar chart
                            var barW = 1.8;
                            var gap = 0.5;
                            var startX = 1;

                            // Draw observed vs expected bars
                            var maxVal = 0;
                            for (var i = 0; i < k; i++) {
                                if (observed[i] > maxVal) maxVal = observed[i];
                            }
                            if (expected > maxVal) maxVal = expected;
                            maxVal = Math.max(maxVal, 1);

                            var barScale = 10 / maxVal;

                            // Axis for bar chart
                            viz.drawSegment(0.5, 0, 0.5 + k * (barW + gap), 0, viz.colors.axis, 1);

                            for (var i = 0; i < k; i++) {
                                var x = startX + i * (barW + gap);
                                var obsH = observed[i] * barScale;
                                var expH = expected * barScale;

                                // Observed bar
                                viz.drawBar(x, barW * 0.45, obsH, viz.colors.blue + '88', viz.colors.blue, 1);
                                // Expected bar
                                viz.drawBar(x + barW * 0.45, barW * 0.45, expH, viz.colors.orange + '44', viz.colors.orange, 1);

                                // Label
                                viz.drawText(String(i + 1), x + barW / 2, -0.5, viz.colors.text, 11);
                                viz.drawText(String(observed[i]), x + barW * 0.22, obsH + 0.5, viz.colors.blue, 10);
                            }

                            // Legend
                            viz.screenText('Observed', 420, 20, viz.colors.blue, 11, 'left');
                            viz.screenText('Expected (' + expected.toFixed(1) + ')', 420, 36, viz.colors.orange, 11, 'left');

                            // Compute chi-squared statistic
                            var chi2 = 0;
                            for (var i = 0; i < k; i++) {
                                chi2 += (observed[i] - expected) * (observed[i] - expected) / expected;
                            }

                            var dfVal = k - 1;

                            // Bottom half: chi-squared distribution
                            var chi2Y = -4;
                            var chi2Scale = 3.5;
                            var chi2XMax = 25;

                            // Draw chi2 distribution in bottom area
                            var pdfFn = function(x) {
                                return VizEngine.chiSquaredPDF(x, dfVal) * chi2Scale + chi2Y;
                            };
                            var baselineFn = function() { return chi2Y; };

                            // Axis for chi2
                            viz.drawSegment(0, chi2Y, chi2XMax / viz.scale * 18, chi2Y, viz.colors.axis, 1);

                            // Draw chi2 PDF
                            var xRange = chi2XMax;
                            for (var step = 0; step <= 200; step++) {
                                var x1 = 0.1 + (xRange - 0.1) * step / 200;
                                var x2 = 0.1 + (xRange - 0.1) * (step + 1) / 200;
                                var y1 = pdfFn(x1);
                                var y2 = pdfFn(x2);
                                if (step === 0) {
                                    ctx.beginPath();
                                    ctx.strokeStyle = viz.colors.purple;
                                    ctx.lineWidth = 2;
                                    var scr = viz.toScreen(x1, y1);
                                    ctx.moveTo(scr[0], scr[1]);
                                }
                                var scr2 = viz.toScreen(x2, y2);
                                ctx.lineTo(scr2[0], scr2[1]);
                            }
                            ctx.stroke();

                            // Critical value at alpha=0.05
                            // chi2_0.05(5) approx 11.07
                            var critValues = {3: 7.815, 4: 9.488, 5: 11.07, 6: 12.59, 7: 14.07, 8: 15.51, 9: 16.92, 10: 18.31};
                            var crit = critValues[dfVal] || 11.07;

                            // Shade rejection region
                            var shadeSteps = 100;
                            ctx.fillStyle = viz.colors.red + '44';
                            ctx.beginPath();
                            var scrStart = viz.toScreen(crit, chi2Y);
                            ctx.moveTo(scrStart[0], scrStart[1]);
                            for (var s = 0; s <= shadeSteps; s++) {
                                var xx = crit + (xRange - crit) * s / shadeSteps;
                                var yy = pdfFn(xx);
                                var ss = viz.toScreen(xx, yy);
                                ctx.lineTo(ss[0], ss[1]);
                            }
                            var scrEnd = viz.toScreen(xRange, chi2Y);
                            ctx.lineTo(scrEnd[0], scrEnd[1]);
                            ctx.closePath();
                            ctx.fill();

                            // Mark test statistic
                            if (chi2 <= xRange) {
                                var testScr = viz.toScreen(chi2, chi2Y);
                                var testScrTop = viz.toScreen(chi2, pdfFn(chi2));
                                ctx.strokeStyle = viz.colors.yellow;
                                ctx.lineWidth = 2;
                                ctx.setLineDash([4, 3]);
                                ctx.beginPath();
                                ctx.moveTo(testScr[0], testScr[1]);
                                ctx.lineTo(testScrTop[0], testScrTop[1]);
                                ctx.stroke();
                                ctx.setLineDash([]);
                                viz.drawText('chi2=' + chi2.toFixed(2), chi2, chi2Y - 0.8, viz.colors.yellow, 11);
                            }

                            // Mark critical value
                            viz.drawText('crit=' + crit.toFixed(2), crit, chi2Y - 0.5, viz.colors.red, 10);

                            // Verdict
                            var reject = chi2 > crit;
                            viz.screenText('chi2(' + dfVal + ') distribution, alpha=0.05', viz.width / 2, 265, viz.colors.purple, 12, 'center');
                            viz.screenText(
                                'chi2 = ' + chi2.toFixed(3) + (reject ? ' > ' : ' < ') + crit.toFixed(3) + ' => ' + (reject ? 'REJECT H0' : 'Fail to reject H0'),
                                viz.width / 2, viz.height - 15,
                                reject ? viz.colors.red : viz.colors.green,
                                13, 'center'
                            );
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '掷一颗骰子 120 次，观测到各面的频数为：1面: 25, 2面: 17, 3面: 15, 4面: 23, 5面: 24, 6面: 16。在 \\\\(\\\\alpha = 0.05\\\\) 下检验骰子是否均匀。',
                    hint: '期望频数均为 \\\\(120/6 = 20\\\\)，自由度为 5。\\\\(\\\\chi^2_{0.05}(5) = 11.07\\\\)。',
                    solution: '期望频数 \\\\(E_i = 20\\\\)。\\\\(\\\\chi^2 = \\\\frac{(25-20)^2}{20} + \\\\frac{(17-20)^2}{20} + \\\\frac{(15-20)^2}{20} + \\\\frac{(23-20)^2}{20} + \\\\frac{(24-20)^2}{20} + \\\\frac{(16-20)^2}{20} = \\\\frac{25+9+25+9+16+16}{20} = \\\\frac{100}{20} = 5.0\\\\)。因为 \\\\(5.0 < 11.07 = \\\\chi^2_{0.05}(5)\\\\)，不拒绝 \\\\(H_0\\\\)。没有足够证据认为骰子不均匀。'
                },
                {
                    question: '解释为什么 Pearson \\\\(\\\\chi^2\\\\) 拟合优度检验中自由度是 \\\\(k-1\\\\) 而不是 \\\\(k\\\\)。如果从数据中估计了 \\\\(p\\\\) 个参数，自由度如何变化？',
                    hint: '考虑频数之间的约束条件。',
                    solution: '频数之和 \\\\(\\\\sum O_i = n\\\\) 是固定的，因此只有 \\\\(k-1\\\\) 个频数是自由变化的，施加了一个线性约束，使得自由度减少为 \\\\(k-1\\\\)。若还从数据中用MLE估计了 \\\\(p\\\\) 个参数（如 Poisson 的 \\\\(\\\\lambda\\\\)），每个估计参数又施加一个约束，自由度进一步减少为 \\\\(k-1-p\\\\)。'
                },
                {
                    question: '比较 Pearson \\\\(\\\\chi^2\\\\) 检验和 Kolmogorov-Smirnov 检验各自的优缺点。',
                    hint: '从分组依赖性、适用条件、检测功效等方面比较。',
                    solution: 'Pearson \\\\(\\\\chi^2\\\\): 优点 - 适用于离散和连续数据，可以检测复合假设（估计参数后调整自由度），可同时检测多种偏离方式。缺点 - 需要分组（分组方式影响结论），要求期望频数不太小，对尾部偏离不敏感。KS检验: 优点 - 不需要分组，在连续分布下是精确的分布自由检验，对分布中部偏离敏感。缺点 - 仅适用于连续分布，对尾部偏离检测功效低，不能直接用于复合假设（参数需从数据估计时临界值改变）。'
                }
            ]
        },

        // ============================================================
        // SECTION 4: 独立性检验
        // ============================================================
        {
            id: 'ch11-sec04',
            title: '独立性检验',
            content: `
                <h2>独立性检验</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>拟合优度检验关注单个变量的分布是否符合预期。独立性检验关注两个分类变量之间是否存在关联。例如：吸烟与患肺癌是否有关？性别与职业选择是否独立？核心工具是列联表（contingency table）和 \\\\(\\\\chi^2\\\\) 独立性检验。</p>
                    </div>
                </div>

                <h3>列联表与独立性</h3>

                <p>设变量 \\\\(A\\\\) 有 \\\\(r\\\\) 个水平，变量 \\\\(B\\\\) 有 \\\\(c\\\\) 个水平。从总体中抽取 \\\\(n\\\\) 个个体，观测到落入单元格 \\\\((i,j)\\\\) 的频数为 \\\\(O_{ij}\\\\)。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.18 (列联表的期望频数)</div>
                    <div class="env-body">
                        <p>在 \\\\(H_0\\\\): \\\\(A\\\\) 与 \\\\(B\\\\) 独立 下，单元格 \\\\((i,j)\\\\) 的期望频数为</p>
                        \\\\[E_{ij} = \\\\frac{R_i \\\\cdot C_j}{n}\\\\]
                        <p>其中 \\\\(R_i = \\\\sum_{j=1}^c O_{ij}\\\\) 是第 \\\\(i\\\\) 行的行总和，\\\\(C_j = \\\\sum_{i=1}^r O_{ij}\\\\) 是第 \\\\(j\\\\) 列的列总和。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.19 (\\\\(\\\\chi^2\\\\) 独立性检验)</div>
                    <div class="env-body">
                        <p>检验统计量</p>
                        \\\\[\\\\chi^2 = \\\\sum_{i=1}^{r} \\\\sum_{j=1}^{c} \\\\frac{(O_{ij} - E_{ij})^2}{E_{ij}}\\\\]
                        <p>在 \\\\(H_0\\\\)（独立）成立时，\\\\(\\\\chi^2 \\\\xrightarrow{d} \\\\chi^2((r-1)(c-1))\\\\)。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p>自由度的直觉：列联表有 \\\\(rc\\\\) 个单元格。约束包括：\\\\(r\\\\) 个行总和固定（实际上 \\\\(r-1\\\\) 个独立约束，因为总和 = n），\\\\(c\\\\) 个列总和固定（\\\\(c-1\\\\) 个独立约束），加上总样本量 \\\\(n\\\\) 固定。但总样本量约束已包含在行/列总和中。在 \\\\(H_0\\\\) 下估计了 \\\\(r-1\\\\) 个行边际概率和 \\\\(c-1\\\\) 个列边际概率。自由度 = \\\\(rc - 1 - (r-1) - (c-1) = (r-1)(c-1)\\\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 11.20</div>
                    <div class="env-body">
                        <p>某 \\\\(2 \\\\times 2\\\\) 列联表：</p>
                        <table style="margin: 10px auto; border-collapse: collapse;">
                            <tr><td style="padding: 6px 15px; border: 1px solid #30363d;"></td><td style="padding: 6px 15px; border: 1px solid #30363d;">患病</td><td style="padding: 6px 15px; border: 1px solid #30363d;">未患病</td><td style="padding: 6px 15px; border: 1px solid #30363d;">合计</td></tr>
                            <tr><td style="padding: 6px 15px; border: 1px solid #30363d;">吸烟</td><td style="padding: 6px 15px; border: 1px solid #30363d;">40</td><td style="padding: 6px 15px; border: 1px solid #30363d;">60</td><td style="padding: 6px 15px; border: 1px solid #30363d;">100</td></tr>
                            <tr><td style="padding: 6px 15px; border: 1px solid #30363d;">不吸烟</td><td style="padding: 6px 15px; border: 1px solid #30363d;">20</td><td style="padding: 6px 15px; border: 1px solid #30363d;">80</td><td style="padding: 6px 15px; border: 1px solid #30363d;">100</td></tr>
                            <tr><td style="padding: 6px 15px; border: 1px solid #30363d;">合计</td><td style="padding: 6px 15px; border: 1px solid #30363d;">60</td><td style="padding: 6px 15px; border: 1px solid #30363d;">140</td><td style="padding: 6px 15px; border: 1px solid #30363d;">200</td></tr>
                        </table>
                        <p>期望频数：\\\\(E_{11} = 100 \\\\times 60/200 = 30\\\\)，\\\\(E_{12} = 70\\\\)，\\\\(E_{21} = 30\\\\)，\\\\(E_{22} = 70\\\\)。</p>
                        <p>\\\\(\\\\chi^2 = \\\\frac{(40-30)^2}{30} + \\\\frac{(60-70)^2}{70} + \\\\frac{(20-30)^2}{30} + \\\\frac{(80-70)^2}{70} = \\\\frac{100}{30} + \\\\frac{100}{70} + \\\\frac{100}{30} + \\\\frac{100}{70} \\\\approx 9.52\\\\)</p>
                        <p>自由度 = \\\\((2-1)(2-1) = 1\\\\)。\\\\(\\\\chi^2_{0.05}(1) = 3.841\\\\)。因为 \\\\(9.52 > 3.841\\\\)，拒绝独立性假设。</p>
                    </div>
                </div>

                <h3>Fisher精确检验</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.21 (Fisher精确检验)</div>
                    <div class="env-body">
                        <p>对于 \\\\(2 \\\\times 2\\\\) 列联表，当样本量小（期望频数 < 5）时，\\\\(\\\\chi^2\\\\) 近似不准确。Fisher精确检验在固定行列边际的条件下，利用超几何分布计算精确的p值。</p>
                        <p>设 \\\\(2 \\\\times 2\\\\) 表为</p>
                        <table style="margin: 10px auto; border-collapse: collapse;">
                            <tr><td style="padding: 4px 12px; border: 1px solid #30363d;">a</td><td style="padding: 4px 12px; border: 1px solid #30363d;">b</td></tr>
                            <tr><td style="padding: 4px 12px; border: 1px solid #30363d;">c</td><td style="padding: 4px 12px; border: 1px solid #30363d;">d</td></tr>
                        </table>
                        <p>在固定边际 \\\\(a+b, c+d, a+c, b+d\\\\) 的条件下，\\\\(a\\\\) 服从超几何分布：</p>
                        \\\\[P(a) = \\\\frac{\\\\binom{a+b}{a}\\\\binom{c+d}{c}}{\\\\binom{n}{a+c}}\\\\]
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Fisher精确检验对任何样本量都给出精确的p值（不依赖大样本近似）。计算上，当样本量很大时可能较慢，此时 \\\\(\\\\chi^2\\\\) 检验的渐近近似已足够好。现代统计软件都能高效处理两种方法。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="contingency-table-viz"></div>
            `,
            visualizations: [
                {
                    id: 'contingency-table-viz',
                    title: 'Interactive: 列联表独立性检验',
                    description: '调整列联表的数值，观察卡方统计量和p值的变化',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400, scale: 1,
                            originX: 0, originY: 0
                        });
                        var ctx = viz.ctx;

                        // 2x3 contingency table
                        var table = [
                            [30, 20, 10],
                            [15, 25, 20]
                        ];

                        var selectedCell = null;

                        VizEngine.createButton(controls, 'Independent', function() {
                            table = [[20, 20, 20], [20, 20, 20]];
                            draw();
                        });
                        VizEngine.createButton(controls, 'Moderate association', function() {
                            table = [[30, 20, 10], [15, 25, 20]];
                            draw();
                        });
                        VizEngine.createButton(controls, 'Strong association', function() {
                            table = [[45, 10, 5], [5, 15, 40]];
                            draw();
                        });
                        VizEngine.createButton(controls, 'Randomize', function() {
                            for (var i = 0; i < 2; i++) {
                                for (var j = 0; j < 3; j++) {
                                    table[i][j] = Math.floor(Math.random() * 40) + 5;
                                }
                            }
                            draw();
                        });

                        function draw() {
                            viz.clear();

                            var r = table.length, c = table[0].length;
                            var n = 0;
                            var rowTotals = [];
                            var colTotals = [];
                            for (var i = 0; i < r; i++) {
                                var rt = 0;
                                for (var j = 0; j < c; j++) rt += table[i][j];
                                rowTotals.push(rt);
                                n += rt;
                            }
                            for (var j = 0; j < c; j++) {
                                var ct = 0;
                                for (var i = 0; i < r; i++) ct += table[i][j];
                                colTotals.push(ct);
                            }

                            // Compute expected and chi2
                            var chi2 = 0;
                            var expected = [];
                            for (var i = 0; i < r; i++) {
                                expected.push([]);
                                for (var j = 0; j < c; j++) {
                                    var e = rowTotals[i] * colTotals[j] / n;
                                    expected[i].push(e);
                                    chi2 += (table[i][j] - e) * (table[i][j] - e) / e;
                                }
                            }
                            var dfVal = (r - 1) * (c - 1);

                            // Draw table
                            var cellW = 80, cellH = 50;
                            var startX = 100, startY = 40;

                            // Headers
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';

                            for (var j = 0; j < c; j++) {
                                ctx.fillStyle = viz.colors.teal;
                                ctx.fillText('B' + (j + 1), startX + j * cellW + cellW / 2, startY - 15);
                            }
                            ctx.fillText('Total', startX + c * cellW + cellW / 2, startY - 15);

                            for (var i = 0; i < r; i++) {
                                ctx.fillStyle = viz.colors.orange;
                                ctx.textAlign = 'right';
                                ctx.fillText('A' + (i + 1), startX - 10, startY + i * cellH + cellH / 2);
                            }
                            ctx.fillText('Total', startX - 10, startY + r * cellH + cellH / 2);

                            // Draw cells
                            for (var i = 0; i < r; i++) {
                                for (var j = 0; j < c; j++) {
                                    var cx = startX + j * cellW;
                                    var cy = startY + i * cellH;

                                    // Color by deviation
                                    var dev = (table[i][j] - expected[i][j]) / Math.max(expected[i][j], 1);
                                    var intensity = Math.min(Math.abs(dev) * 0.5, 0.6);
                                    if (dev > 0) {
                                        ctx.fillStyle = 'rgba(88, 166, 255, ' + intensity + ')';
                                    } else {
                                        ctx.fillStyle = 'rgba(248, 81, 73, ' + intensity + ')';
                                    }
                                    ctx.fillRect(cx, cy, cellW, cellH);

                                    ctx.strokeStyle = viz.colors.axis;
                                    ctx.lineWidth = 1;
                                    ctx.strokeRect(cx, cy, cellW, cellH);

                                    // Observed value
                                    ctx.fillStyle = viz.colors.white;
                                    ctx.font = 'bold 16px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.fillText(String(table[i][j]), cx + cellW / 2, cy + cellH / 2 - 8);

                                    // Expected value
                                    ctx.fillStyle = viz.colors.text;
                                    ctx.font = '10px -apple-system,sans-serif';
                                    ctx.fillText('E=' + expected[i][j].toFixed(1), cx + cellW / 2, cy + cellH / 2 + 12);
                                }
                            }

                            // Row totals
                            for (var i = 0; i < r; i++) {
                                var cx = startX + c * cellW;
                                var cy = startY + i * cellH;
                                ctx.strokeStyle = viz.colors.axis;
                                ctx.strokeRect(cx, cy, cellW, cellH);
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(String(rowTotals[i]), cx + cellW / 2, cy + cellH / 2);
                            }

                            // Column totals
                            for (var j = 0; j < c; j++) {
                                var cx = startX + j * cellW;
                                var cy = startY + r * cellH;
                                ctx.strokeStyle = viz.colors.axis;
                                ctx.strokeRect(cx, cy, cellW, cellH);
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(String(colTotals[j]), cx + cellW / 2, cy + cellH / 2);
                            }

                            // Grand total
                            var cx = startX + c * cellW;
                            var cy = startY + r * cellH;
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.strokeRect(cx, cy, cellW, cellH);
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillText(String(n), cx + cellW / 2, cy + cellH / 2);

                            // Results
                            var resultY = startY + (r + 1) * cellH + 30;
                            ctx.textAlign = 'left';
                            ctx.font = '14px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText('chi-squared = ' + chi2.toFixed(3), 30, resultY);
                            ctx.fillText('df = (' + r + '-1)(' + c + '-1) = ' + dfVal, 30, resultY + 22);

                            // Approximate p-value using chi2 CDF (numerical integration)
                            var pVal = 0;
                            var integSteps = 1000;
                            var integMax = Math.max(chi2, 50);
                            var dx = integMax / integSteps;
                            for (var s = 0; s < integSteps; s++) {
                                var x0 = s * dx;
                                var x1 = (s + 1) * dx;
                                pVal += (VizEngine.chiSquaredPDF(x0, dfVal) + VizEngine.chiSquaredPDF(x1, dfVal)) / 2 * dx;
                            }
                            pVal = 1 - pVal;
                            if (pVal < 0) pVal = 0;

                            ctx.fillStyle = pVal < 0.05 ? viz.colors.red : viz.colors.green;
                            ctx.fillText('p-value approx ' + (pVal < 0.001 ? '< 0.001' : pVal.toFixed(4)), 30, resultY + 44);
                            ctx.fillText(pVal < 0.05 ? 'Reject H0 (alpha=0.05): variables are associated' : 'Fail to reject H0: no evidence of association', 30, resultY + 66);

                            // Legend
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Blue: O > E, Red: O < E (intensity = deviation)', viz.width / 2, viz.height - 8);
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '在一项调查中，200名学生按性别和是否选修数学课分类如下：男生选修60人、不选修40人；女生选修35人、不选修65人。检验性别与选修数学是否独立（\\\\(\\\\alpha = 0.05\\\\)）。',
                    hint: '构造 \\\\(2 \\\\times 2\\\\) 列联表，计算期望频数和 \\\\(\\\\chi^2\\\\) 统计量。\\\\(\\\\chi^2_{0.05}(1) = 3.841\\\\)。',
                    solution: '列联表：男(60,40)，女(35,65)，行总和 100,100，列总和 95,105，n=200。期望频数：\\\\(E_{11} = 100 \\\\times 95/200 = 47.5\\\\)，\\\\(E_{12} = 52.5\\\\)，\\\\(E_{21} = 47.5\\\\)，\\\\(E_{22} = 52.5\\\\)。\\\\(\\\\chi^2 = \\\\frac{(60-47.5)^2}{47.5} + \\\\frac{(40-52.5)^2}{52.5} + \\\\frac{(35-47.5)^2}{47.5} + \\\\frac{(65-52.5)^2}{52.5} = 3.289 + 2.976 + 3.289 + 2.976 = 12.53\\\\)。自由度 = 1。因为 \\\\(12.53 > 3.841\\\\)，拒绝 \\\\(H_0\\\\)，性别与选修数学显著相关。'
                },
                {
                    question: '解释为什么 \\\\(\\\\chi^2\\\\) 独立性检验中自由度为 \\\\((r-1)(c-1)\\\\) 而非 \\\\(rc - 1\\\\)。',
                    hint: '考虑在固定边际下，有多少个单元格可以自由变化。',
                    solution: '列联表有 \\\\(rc\\\\) 个单元格。首先，总样本量 n 固定意味着有1个约束。在 \\\\(H_0\\\\) 下，需要估计 \\\\(r-1\\\\) 个独立的行边际概率和 \\\\(c-1\\\\) 个独立的列边际概率（共 \\\\(r+c-2\\\\) 个参数）。总参数数为 \\\\(rc - 1\\\\)（因为概率之和为1），减去估计的 \\\\((r-1)+(c-1)\\\\) 个参数，得 \\\\(rc - 1 - (r-1) - (c-1) = rc - r - c + 1 = (r-1)(c-1)\\\\)。等价地理解：在行列总和固定的条件下，只需填写左上角 \\\\((r-1) \\\\times (c-1)\\\\) 个单元格，其余都由边际总和唯一确定。'
                },
                {
                    question: '在什么情况下应使用 Fisher 精确检验而非 \\\\(\\\\chi^2\\\\) 独立性检验？给出判断准则。',
                    hint: '考虑期望频数的大小。',
                    solution: '当列联表中有期望频数 \\\\(E_{ij} < 5\\\\) 的单元格时，\\\\(\\\\chi^2\\\\) 的渐近近似不可靠，应使用 Fisher 精确检验。具体准则：(1) 对于 \\\\(2 \\\\times 2\\\\) 表，若任一期望频数 < 5 或总样本量 < 20，使用 Fisher 检验；(2) 对于更大的表，若超过 20% 的单元格期望频数 < 5，或任一期望频数 < 1，应考虑合并类别或使用精确检验。Fisher 检验基于超几何分布给出精确的p值，不依赖大样本近似。'
                }
            ]
        },

        // ============================================================
        // SECTION 5: 单因素方差分析
        // ============================================================
        {
            id: 'ch11-sec05',
            title: '单因素方差分析',
            content: `
                <h2>单因素方差分析 (One-Way ANOVA)</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>两样本t检验比较两组均值。当有 \\\\(k \\\\geq 3\\\\) 组时，我们需要同时比较多组均值是否相等。逐对进行t检验会导致多重比较问题（整体第一类错误率膨胀）。方差分析（ANOVA）通过将数据总变异分解为组间和组内两部分，用一个F检验同时比较所有组的均值。</p>
                    </div>
                </div>

                <h3>模型设定</h3>

                <p>设有 \\\\(k\\\\) 组，第 \\\\(i\\\\) 组有 \\\\(n_i\\\\) 个观测：</p>
                \\\\[X_{ij} = \\\\mu_i + \\\\varepsilon_{ij}, \\\\quad \\\\varepsilon_{ij} \\\\overset{\\\\text{iid}}{\\\\sim} N(0, \\\\sigma^2), \\\\quad j = 1,\\\\ldots,n_i, \\\\; i = 1,\\\\ldots,k\\\\]

                <p>等价地写为 \\\\(X_{ij} = \\\\mu + \\\\alpha_i + \\\\varepsilon_{ij}\\\\)，其中 \\\\(\\\\mu\\\\) 是总均值，\\\\(\\\\alpha_i = \\\\mu_i - \\\\mu\\\\) 是第 \\\\(i\\\\) 组的效应。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.22 (ANOVA的假设检验)</div>
                    <div class="env-body">
                        <p>检验问题为</p>
                        \\\\[H_0: \\\\mu_1 = \\\\mu_2 = \\\\cdots = \\\\mu_k \\\\quad \\\\text{vs} \\\\quad H_1: \\\\text{至少有两个} \\\\; \\\\mu_i \\\\; \\\\text{不等}\\\\]
                    </div>
                </div>

                <h3>平方和分解</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.23 (平方和分解)</div>
                    <div class="env-body">
                        <p>令 \\\\(\\\\bar{X}_{i\\\\cdot} = \\\\frac{1}{n_i}\\\\sum_j X_{ij}\\\\) 为第 \\\\(i\\\\) 组均值，\\\\(\\\\bar{X}_{\\\\cdot\\\\cdot} = \\\\frac{1}{N}\\\\sum_i\\\\sum_j X_{ij}\\\\) 为总均值（\\\\(N = \\\\sum n_i\\\\)）。总平方和分解为</p>
                        \\\\[\\\\underbrace{\\\\sum_{i=1}^{k}\\\\sum_{j=1}^{n_i}(X_{ij} - \\\\bar{X}_{\\\\cdot\\\\cdot})^2}_{\\\\text{SST}} = \\\\underbrace{\\\\sum_{i=1}^{k} n_i(\\\\bar{X}_{i\\\\cdot} - \\\\bar{X}_{\\\\cdot\\\\cdot})^2}_{\\\\text{SSB}} + \\\\underbrace{\\\\sum_{i=1}^{k}\\\\sum_{j=1}^{n_i}(X_{ij} - \\\\bar{X}_{i\\\\cdot})^2}_{\\\\text{SSW}}\\\\]
                        <p>其中 SST = 总平方和，SSB = 组间平方和（Between），SSW = 组内平方和（Within）。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>展开 \\\\((X_{ij} - \\\\bar{X}_{\\\\cdot\\\\cdot})^2 = [(X_{ij} - \\\\bar{X}_{i\\\\cdot}) + (\\\\bar{X}_{i\\\\cdot} - \\\\bar{X}_{\\\\cdot\\\\cdot})]^2\\\\)。对所有 \\\\(i,j\\\\) 求和，交叉项为</p>
                        \\\\[2\\\\sum_i \\\\sum_j (X_{ij} - \\\\bar{X}_{i\\\\cdot})(\\\\bar{X}_{i\\\\cdot} - \\\\bar{X}_{\\\\cdot\\\\cdot}) = 2\\\\sum_i (\\\\bar{X}_{i\\\\cdot} - \\\\bar{X}_{\\\\cdot\\\\cdot}) \\\\underbrace{\\\\sum_j (X_{ij} - \\\\bar{X}_{i\\\\cdot})}_{= 0} = 0\\\\]
                        <p>因此 SST = SSB + SSW。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h3>F统计量与ANOVA表</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.24 (均方与F统计量)</div>
                    <div class="env-body">
                        <p>组间均方和组内均方分别为</p>
                        \\\\[\\\\text{MSB} = \\\\frac{\\\\text{SSB}}{k-1}, \\\\qquad \\\\text{MSW} = \\\\frac{\\\\text{SSW}}{N-k}\\\\]
                        <p>F统计量为</p>
                        \\\\[F = \\\\frac{\\\\text{MSB}}{\\\\text{MSW}}\\\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.25 (ANOVA F检验)</div>
                    <div class="env-body">
                        <p>在正态性和等方差假设下：</p>
                        <ol>
                            <li>\\\\(\\\\text{SSW}/\\\\sigma^2 \\\\sim \\\\chi^2(N-k)\\\\)，与 \\\\(\\\\text{SSB}\\\\) 独立</li>
                            <li>在 \\\\(H_0\\\\) 下，\\\\(\\\\text{SSB}/\\\\sigma^2 \\\\sim \\\\chi^2(k-1)\\\\)</li>
                            <li>因此在 \\\\(H_0\\\\) 下，\\\\(F = \\\\frac{\\\\text{MSB}}{\\\\text{MSW}} \\\\sim F(k-1, N-k)\\\\)</li>
                        </ol>
                        <p>当 \\\\(F > F_{\\\\alpha}(k-1, N-k)\\\\) 时拒绝 \\\\(H_0\\\\)。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 11.26 (ANOVA Table)</div>
                    <div class="env-body">
                        <table style="margin: 10px auto; border-collapse: collapse; font-size: 0.95em;">
                            <tr style="border-bottom: 2px solid #30363d;">
                                <td style="padding: 6px 15px; font-weight:bold;">Source</td>
                                <td style="padding: 6px 15px; font-weight:bold;">SS</td>
                                <td style="padding: 6px 15px; font-weight:bold;">df</td>
                                <td style="padding: 6px 15px; font-weight:bold;">MS</td>
                                <td style="padding: 6px 15px; font-weight:bold;">F</td>
                            </tr>
                            <tr><td style="padding: 6px 15px;">Between (组间)</td><td style="padding: 6px 15px;">SSB</td><td style="padding: 6px 15px;">k-1</td><td style="padding: 6px 15px;">MSB = SSB/(k-1)</td><td style="padding: 6px 15px;">MSB/MSW</td></tr>
                            <tr><td style="padding: 6px 15px;">Within (组内)</td><td style="padding: 6px 15px;">SSW</td><td style="padding: 6px 15px;">N-k</td><td style="padding: 6px 15px;">MSW = SSW/(N-k)</td><td style="padding: 6px 15px;"></td></tr>
                            <tr style="border-top: 1px solid #30363d;"><td style="padding: 6px 15px;">Total</td><td style="padding: 6px 15px;">SST</td><td style="padding: 6px 15px;">N-1</td><td style="padding: 6px 15px;"></td><td style="padding: 6px 15px;"></td></tr>
                        </table>
                    </div>
                </div>

                <h3>事后多重比较</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.27 (事后检验)</div>
                    <div class="env-body">
                        <p>当ANOVA拒绝 \\\\(H_0\\\\) 后，需要进一步确定哪些组之间存在差异。常用方法包括：</p>
                        <ul>
                            <li><strong>Tukey HSD</strong>：基于学生化极差分布，控制所有成对比较的族错误率（familywise error rate, FWER）。第 \\\\(i\\\\) 组与第 \\\\(j\\\\) 组的比较统计量为 \\\\(q = \\\\frac{\\\\bar{X}_{i\\\\cdot} - \\\\bar{X}_{j\\\\cdot}}{\\\\sqrt{\\\\text{MSW}/n}}\\\\)（等样本量时）。</li>
                            <li><strong>Bonferroni 校正</strong>：对每对比较使用 \\\\(\\\\alpha/\\\\binom{k}{2}\\\\) 作为显著性水平。简单但保守。</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>ANOVA的三个关键假设：(1) 各组独立，(2) 正态性，(3) 方差齐性（homoscedasticity）。实践中应先用Bartlett或Levene检验检查等方差假设。当等方差不成立时，可使用Welch ANOVA（不假设等方差的修正方法）。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>ANOVA与线性回归有深刻联系：单因素ANOVA等价于用 \\\\(k-1\\\\) 个虚拟变量做线性回归，F统计量就是回归的整体F检验。这种联系将在第12章线性回归中进一步展开。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="anova-viz"></div>
            `,
            visualizations: [
                {
                    id: 'anova-viz',
                    title: 'Interactive: 单因素ANOVA可视化',
                    description: '拖动各组均值，观察F统计量和SSB/SSW分解的变化',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 420, scale: 30,
                            originX: 80, originY: 320
                        });

                        var nGroups = 3;
                        var nPerGroup = 15;
                        var groupMeans = [2, 3.5, 5];
                        var sigma = 1.2;
                        var groups = [];

                        function generateData() {
                            groups = [];
                            for (var g = 0; g < nGroups; g++) {
                                var data = VizEngine.sampleArray(function() {
                                    return VizEngine.randomNormal(groupMeans[g], sigma);
                                }, nPerGroup);
                                groups.push(data);
                            }
                        }

                        generateData();

                        var drag0 = viz.addDraggable('m0', 2, 6, viz.colors.blue, 8, function(x, y) {
                            groupMeans[0] = Math.round(y * 10) / 10;
                            drag0.x = 2; drag0.y = groupMeans[0];
                            generateData(); draw();
                        });
                        var drag1 = viz.addDraggable('m1', 6, 6, viz.colors.orange, 8, function(x, y) {
                            groupMeans[1] = Math.round(y * 10) / 10;
                            drag1.x = 6; drag1.y = groupMeans[1];
                            generateData(); draw();
                        });
                        var drag2 = viz.addDraggable('m2', 10, 6, viz.colors.green, 8, function(x, y) {
                            groupMeans[2] = Math.round(y * 10) / 10;
                            drag2.x = 10; drag2.y = groupMeans[2];
                            generateData(); draw();
                        });

                        VizEngine.createSlider(controls, 'sigma', 0.3, 3.0, 1.2, 0.1, function(v) {
                            sigma = v; generateData(); draw();
                        });
                        VizEngine.createButton(controls, 'Re-sample', function() {
                            generateData(); draw();
                        });
                        VizEngine.createButton(controls, 'Equal means', function() {
                            groupMeans = [3.5, 3.5, 3.5];
                            drag0.y = 3.5; drag1.y = 3.5; drag2.y = 3.5;
                            generateData(); draw();
                        });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            var colors = [viz.colors.blue, viz.colors.orange, viz.colors.green];
                            var N = nGroups * nPerGroup;

                            // Compute grand mean
                            var allData = [];
                            for (var g = 0; g < nGroups; g++) {
                                for (var j = 0; j < groups[g].length; j++) {
                                    allData.push(groups[g][j]);
                                }
                            }
                            var grandMean = VizEngine.mean(allData);

                            // Compute SSB, SSW
                            var ssb = 0, ssw = 0;
                            var groupMeansObs = [];
                            for (var g = 0; g < nGroups; g++) {
                                var gm = VizEngine.mean(groups[g]);
                                groupMeansObs.push(gm);
                                ssb += groups[g].length * (gm - grandMean) * (gm - grandMean);
                                for (var j = 0; j < groups[g].length; j++) {
                                    ssw += (groups[g][j] - gm) * (groups[g][j] - gm);
                                }
                            }
                            var sst = ssb + ssw;
                            var msb = ssb / (nGroups - 1);
                            var msw = ssw / (N - nGroups);
                            var fStat = msb / msw;

                            // Draw data points as strip chart
                            var groupX = [2, 6, 10];
                            var yMin = -1, yMax = 9;

                            // Y axis
                            viz.drawSegment(0.5, yMin, 0.5, yMax, viz.colors.axis, 1);
                            for (var y = 0; y <= 8; y++) {
                                viz.drawSegment(0.3, y, 0.5, y, viz.colors.axis, 1);
                                viz.drawText(String(y), 0, y, viz.colors.text, 10);
                            }

                            // Grand mean line
                            viz.drawSegment(0.5, grandMean, 12, grandMean, viz.colors.text + '44', 1, true);
                            viz.drawText('Grand mean=' + grandMean.toFixed(2), 12.5, grandMean, viz.colors.text, 9, 'left');

                            // Draw each group
                            for (var g = 0; g < nGroups; g++) {
                                var gx = groupX[g];
                                var gm = groupMeansObs[g];

                                // Group mean line
                                viz.drawSegment(gx - 0.8, gm, gx + 0.8, gm, colors[g], 2);

                                // Data points with jitter
                                for (var j = 0; j < groups[g].length; j++) {
                                    var jitter = (Math.random() - 0.5) * 1.2;
                                    viz.drawPoint(gx + jitter, groups[g][j], colors[g] + '88', null, 3);
                                }

                                // Group label
                                viz.drawText('Group ' + (g + 1), gx, yMin - 0.5, colors[g], 11);
                                viz.drawText('mean=' + gm.toFixed(2), gx, yMin - 1.0, colors[g], 9);

                                // SSB bracket (group mean to grand mean)
                                viz.drawSegment(gx + 1.0, gm, gx + 1.0, grandMean, viz.colors.yellow + '66', 1.5);
                            }

                            // Update draggable positions
                            drag0.y = groupMeans[0];
                            drag1.y = groupMeans[1];
                            drag2.y = groupMeans[2];
                            viz.drawDraggables();

                            // Statistics panel
                            viz.screenText('ANOVA Results', viz.width / 2, 15, viz.colors.white, 14, 'center');
                            var panelY = 32;
                            viz.screenText('SSB = ' + ssb.toFixed(2) + '  (df=' + (nGroups - 1) + ')', 20, panelY, viz.colors.yellow, 11, 'left');
                            viz.screenText('SSW = ' + ssw.toFixed(2) + '  (df=' + (N - nGroups) + ')', 20, panelY + 16, viz.colors.teal, 11, 'left');
                            viz.screenText('SST = ' + sst.toFixed(2) + '  (df=' + (N - 1) + ')', 20, panelY + 32, viz.colors.text, 11, 'left');

                            viz.screenText('MSB = ' + msb.toFixed(2), 300, panelY, viz.colors.yellow, 11, 'left');
                            viz.screenText('MSW = ' + msw.toFixed(2), 300, panelY + 16, viz.colors.teal, 11, 'left');
                            viz.screenText('F = ' + fStat.toFixed(3), 300, panelY + 32, viz.colors.white, 13, 'left');

                            // Simple critical value lookup for F(2, N-3) at alpha=0.05
                            // F_0.05(2, 42) ~ 3.22
                            var fCrit = 3.22;
                            var reject = fStat > fCrit;
                            viz.screenText(
                                'F = ' + fStat.toFixed(2) + (reject ? ' > ' : ' < ') + fCrit.toFixed(2) + ' (crit, alpha=0.05)',
                                viz.width / 2, panelY + 55,
                                reject ? viz.colors.red : viz.colors.green, 12, 'center'
                            );
                            viz.screenText(
                                reject ? 'Reject H0: means are not all equal' : 'Fail to reject H0',
                                viz.width / 2, panelY + 72,
                                reject ? viz.colors.red : viz.colors.green, 11, 'center'
                            );

                            // SSB / SST ratio (eta-squared)
                            var eta2 = ssb / sst;
                            viz.screenText('eta-squared (SSB/SST) = ' + eta2.toFixed(3), viz.width / 2, viz.height - 10, viz.colors.purple, 11, 'center');
                        }

                        viz.animate(function() { draw(); });
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '三组数据：A组 (5, 7, 6, 8)，B组 (9, 11, 10, 12)，C组 (6, 8, 7, 9)。计算 SSB, SSW, SST，并构造ANOVA表。在 \\\\(\\\\alpha = 0.05\\\\) 下检验均值是否相等。',
                    hint: '先算各组均值和总均值。\\\\(F_{0.05}(2, 9) \\\\approx 4.26\\\\)。',
                    solution: '各组均值：\\\\(\\\\bar{X}_A = 6.5\\\\)，\\\\(\\\\bar{X}_B = 10.5\\\\)，\\\\(\\\\bar{X}_C = 7.5\\\\)。总均值 \\\\(\\\\bar{X} = (26+42+30)/12 = 8.167\\\\)。SSB = \\\\(4(6.5-8.167)^2 + 4(10.5-8.167)^2 + 4(7.5-8.167)^2 = 4(2.779+5.443+0.445) = 34.67\\\\)。SSW = \\\\(\\\\sum_A(X-6.5)^2 + \\\\sum_B(X-10.5)^2 + \\\\sum_C(X-7.5)^2 = (2.25+0.25+0.25+2.25)+(2.25+0.25+0.25+2.25)+(2.25+0.25+0.25+2.25) = 15.00\\\\)。SST = 34.67+15.00 = 49.67。MSB = 34.67/2 = 17.33，MSW = 15.00/9 = 1.667。F = 17.33/1.667 = 10.40 > 4.26。拒绝 \\\\(H_0\\\\)，均值显著不同。'
                },
                {
                    question: '解释为什么不能用逐对t检验代替ANOVA来同时比较 \\\\(k\\\\) 组均值。',
                    hint: '考虑多重比较问题。',
                    solution: '当有 \\\\(k\\\\) 组时，需要 \\\\(\\\\binom{k}{2}\\\\) 次成对比较。若每次检验的显著性水平为 \\\\(\\\\alpha = 0.05\\\\)，则至少犯一次第一类错误的概率约为 \\\\(1 - (1-\\\\alpha)^{\\\\binom{k}{2}}\\\\)。例如 \\\\(k=5\\\\) 时有10次比较，整体第一类错误率约为 \\\\(1 - 0.95^{10} \\\\approx 0.40\\\\)，远大于名义水平 0.05。ANOVA通过一个整体F检验控制整体的第一类错误率为 \\\\(\\\\alpha\\\\)。只有当ANOVA拒绝 \\\\(H_0\\\\) 后，才用带多重比较校正的事后检验（Tukey, Bonferroni等）确定具体哪些组不同。'
                },
                {
                    question: '证明当 \\\\(k=2\\\\) 时，ANOVA的F统计量等于两样本t统计量的平方：\\\\(F = T^2\\\\)。',
                    hint: '令 \\\\(k=2\\\\)，展开 SSB 和 MSW 的表达式。',
                    solution: '当 \\\\(k=2\\\\) 时，SSB = \\\\(n_1(\\\\bar{X}_1 - \\\\bar{X})^2 + n_2(\\\\bar{X}_2 - \\\\bar{X})^2\\\\)。总均值 \\\\(\\\\bar{X} = (n_1\\\\bar{X}_1+n_2\\\\bar{X}_2)/N\\\\)。经过代数化简，SSB = \\\\(\\\\frac{n_1 n_2}{N}(\\\\bar{X}_1 - \\\\bar{X}_2)^2\\\\)。MSB = SSB/1 = SSB。MSW = SSW/(N-2) = \\\\(S_p^2\\\\)。因此 \\\\(F = \\\\frac{n_1 n_2(\\\\bar{X}_1-\\\\bar{X}_2)^2}{N S_p^2} = \\\\left(\\\\frac{\\\\bar{X}_1-\\\\bar{X}_2}{S_p\\\\sqrt{1/n_1+1/n_2}}\\\\right)^2 = T^2\\\\)，因为 \\\\(\\\\frac{n_1 n_2}{N} = \\\\frac{1}{1/n_1+1/n_2}\\\\)。这说明两样本t检验是ANOVA在 \\\\(k=2\\\\) 时的特例，且 \\\\(F(1,\\\\nu) = t^2(\\\\nu)\\\\)。'
                }
            ]
        }
    ]
});

// Chapter 9: 假设检验基础 (Hypothesis Testing Fundamentals)
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch09',
    number: 9,
    title: '假设检验基础',
    subtitle: 'Hypothesis Testing Fundamentals',
    sections: [
        // ============================================================
        // Section 1: 检验的基本框架
        // ============================================================
        {
            id: 'ch09-sec01',
            title: '检验的基本框架',
            content: `
                <h2>检验的基本框架 Basic Framework of Hypothesis Testing</h2>

                <p>在统计推断中，我们经常需要在两种对立的假设之间作出抉择。假设检验 (hypothesis testing) 提供了一种系统化的决策框架：给定观测数据，我们判断数据是否与某个特定的假设相容。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.1 (统计假设 Statistical Hypothesis)</div>
                    <div class="env-body">
                        <p>设样本 \\(X_1, \\ldots, X_n\\) 来自参数族 \\(\\{f(x; \\theta) : \\theta \\in \\Theta\\}\\)。一个<strong>统计假设</strong>是关于参数 \\(\\theta\\) 的论断，即 \\(\\Theta\\) 的一个子集。</p>
                        <p>假设检验问题由一对假设组成：</p>
                        <ul>
                            <li><strong>原假设 (null hypothesis)</strong>: \\(H_0: \\theta \\in \\Theta_0\\)</li>
                            <li><strong>备择假设 (alternative hypothesis)</strong>: \\(H_1: \\theta \\in \\Theta_1\\)</li>
                        </ul>
                        <p>其中 \\(\\Theta_0 \\cap \\Theta_1 = \\emptyset\\)，通常 \\(\\Theta_0 \\cup \\Theta_1 = \\Theta\\)。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.2 (简单假设与复合假设)</div>
                    <div class="env-body">
                        <p>若 \\(\\Theta_0\\) 仅包含一个点 (即 \\(\\Theta_0 = \\{\\theta_0\\}\\))，则称 \\(H_0\\) 为<strong>简单假设 (simple hypothesis)</strong>；若 \\(\\Theta_0\\) 包含多个点，则称之为<strong>复合假设 (composite hypothesis)</strong>。对 \\(H_1\\) 亦然。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 9.3</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\stackrel{iid}{\\sim} N(\\mu, \\sigma^2)\\)，其中 \\(\\sigma^2\\) 已知。</p>
                        <ul>
                            <li>\\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu \\neq \\mu_0\\)：简单 vs 复合（双侧检验）</li>
                            <li>\\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu > \\mu_0\\)：简单 vs 复合（单侧检验）</li>
                            <li>\\(H_0: \\mu \\leq \\mu_0\\) vs \\(H_1: \\mu > \\mu_0\\)：复合 vs 复合</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.4 (检验统计量与拒绝域)</div>
                    <div class="env-body">
                        <p>一个<strong>假设检验</strong>由以下三个要素构成：</p>
                        <ol>
                            <li><strong>检验统计量 (test statistic)</strong>: 一个统计量 \\(T(X_1, \\ldots, X_n)\\)，用于概括数据中关于假设的信息。</li>
                            <li><strong>拒绝域 (rejection region / critical region)</strong>: \\(T\\) 值域的一个子集 \\(R\\)。</li>
                            <li><strong>决策规则 (decision rule)</strong>: 若 \\(T \\in R\\)，则拒绝 \\(H_0\\)；否则不拒绝 \\(H_0\\)。</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>假设检验的基本逻辑类似于"反证法"：我们先假设 \\(H_0\\) 为真，然后看数据在 \\(H_0\\) 下是否"极端"。如果数据落在拒绝域中——一个在 \\(H_0\\) 下概率很小的区域——我们就有理由怀疑 \\(H_0\\) 并拒绝它。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 9.5 (Z-检验)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\stackrel{iid}{\\sim} N(\\mu, \\sigma^2)\\)，\\(\\sigma^2\\) 已知，检验 \\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu \\neq \\mu_0\\)。</p>
                        <p>检验统计量：</p>
                        \\[Z = \\frac{\\bar{X} - \\mu_0}{\\sigma / \\sqrt{n}}\\]
                        <p>在 \\(H_0\\) 下，\\(Z \\sim N(0,1)\\)。对于显著性水平 \\(\\alpha\\)，拒绝域为：</p>
                        \\[R = \\{z : |z| > z_{\\alpha/2}\\}\\]
                        <p>其中 \\(z_{\\alpha/2}\\) 是标准正态分布的上 \\(\\alpha/2\\) 分位数。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>注意"不拒绝 \\(H_0\\)"与"接受 \\(H_0\\)"是不同的。不拒绝仅意味着数据不足以反驳 \\(H_0\\)，并不意味着 \\(H_0\\) 为真。这类似于法律中的"无罪推定"：证据不足以定罪（拒绝 \\(H_0\\)）不等于证明无辜（\\(H_0\\) 为真）。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="rejection-region-viz"></div>
            `,
            visualizations: [
                {
                    id: 'rejection-region-viz',
                    title: 'Interactive: 拒绝域与检验决策',
                    description: '标准正态分布下的拒绝域，拖动观测值查看检验决策',
                    setup: function(container, controls) {
                        const viz = new VizEngine(container, {
                            width: 560, height: 380,
                            originX: 280, originY: 290, scale: 80
                        });

                        var alpha = 0.05;
                        var zCrit = 1.96;

                        function normalInvApprox(p) {
                            // Rational approximation for normal quantile
                            if (p <= 0 || p >= 1) return 0;
                            if (p < 0.5) return -normalInvApprox(1 - p);
                            var t = Math.sqrt(-2 * Math.log(1 - p));
                            var c0 = 2.515517, c1 = 0.802853, c2 = 0.010328;
                            var d1 = 1.432788, d2 = 0.189269, d3 = 0.001308;
                            return t - (c0 + c1 * t + c2 * t * t) / (1 + d1 * t + d2 * t * t + d3 * t * t * t);
                        }

                        var drag = viz.addDraggable('obs', 1.0, 0, viz.colors.yellow, 8, function() {
                            drag.y = 0;
                            draw();
                        });

                        var alphaSlider = VizEngine.createSlider(controls, 'alpha', 0.01, 0.20, 0.05, 0.01, function(val) {
                            alpha = val;
                            zCrit = normalInvApprox(1 - alpha / 2);
                            draw();
                        });

                        function draw() {
                            viz.clear();

                            var pdf = function(x) { return VizEngine.normalPDF(x, 0, 1); };

                            // Shade rejection regions
                            viz.shadeUnder(pdf, -4, -zCrit, viz.colors.red + '55');
                            viz.shadeUnder(pdf, zCrit, 4, viz.colors.red + '55');

                            // Shade acceptance region
                            viz.shadeUnder(pdf, -zCrit, zCrit, viz.colors.green + '22');

                            // Draw PDF
                            viz.drawFunction(pdf, -4, 4, viz.colors.blue, 2.5);

                            // Draw axes
                            viz.drawSegment(-4, 0, 4, 0, viz.colors.axis, 1);

                            // Critical value lines
                            viz.drawSegment(-zCrit, 0, -zCrit, pdf(-zCrit), viz.colors.red, 2, true);
                            viz.drawSegment(zCrit, 0, zCrit, pdf(zCrit), viz.colors.red, 2, true);

                            // Labels
                            viz.drawText('-z_' + String.fromCharCode(945) + '/2', -zCrit, -0.06, viz.colors.red, 11, 'center', 'top');
                            viz.drawText('z_' + String.fromCharCode(945) + '/2', zCrit, -0.06, viz.colors.red, 11, 'center', 'top');

                            // Observation marker
                            var zObs = drag.x;
                            viz.drawSegment(zObs, 0, zObs, pdf(zObs) + 0.02, viz.colors.yellow, 2.5);
                            viz.drawPoint(zObs, 0, viz.colors.yellow, null, 7);

                            // Decision text
                            var rejected = Math.abs(zObs) > zCrit;
                            var decisionText = rejected ? 'Reject H\u2080' : 'Fail to reject H\u2080';
                            var decisionColor = rejected ? viz.colors.red : viz.colors.green;
                            viz.screenText(decisionText, 280, 25, decisionColor, 18, 'center');
                            viz.screenText('z_obs = ' + zObs.toFixed(2), 280, 48, viz.colors.yellow, 13, 'center');
                            viz.screenText('z_crit = \u00B1' + zCrit.toFixed(3), 280, 68, viz.colors.red, 13, 'center');

                            // Region labels
                            viz.screenText('Reject', 40, 200, viz.colors.red + 'aa', 11, 'center');
                            viz.screenText('Reject', 520, 200, viz.colors.red + 'aa', 11, 'center');
                            viz.screenText('Fail to reject', 280, 240, viz.colors.green + 'aa', 12, 'center');

                            viz.drawDraggables();
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\(X_1, \\ldots, X_{25} \\stackrel{iid}{\\sim} N(\\mu, 4)\\)，检验 \\(H_0: \\mu = 10\\) vs \\(H_1: \\mu \\neq 10\\)。若 \\(\\bar{x} = 10.8\\)，在 \\(\\alpha = 0.05\\) 下作出决策。',
                    hint: '计算 \\(Z = \\frac{\\bar{X} - \\mu_0}{\\sigma / \\sqrt{n}}\\)，并与 \\(z_{0.025} = 1.96\\) 比较。',
                    solution: '\\(Z = \\frac{10.8 - 10}{2/\\sqrt{25}} = \\frac{0.8}{0.4} = 2.0\\)。因为 \\(|Z| = 2.0 > 1.96 = z_{0.025}\\)，故在 \\(\\alpha = 0.05\\) 水平下拒绝 \\(H_0\\)。'
                },
                {
                    question: '解释为什么在假设检验中我们说"不拒绝 \\(H_0\\)" 而不说"接受 \\(H_0\\)"。',
                    hint: '考虑 \\(H_0\\) 和 \\(H_1\\) 在检验框架中的不对称角色。',
                    solution: '假设检验的逻辑是：在假设 \\(H_0\\) 为真的条件下考察数据的极端性。不拒绝 \\(H_0\\) 意味着数据与 \\(H_0\\) 不矛盾，但这不排除数据也可能与某些 \\(H_1\\) 中的参数值相容。此外，Type II 错误的存在意味着我们可能在 \\(H_1\\) 为真时也未拒绝 \\(H_0\\)。因此"不拒绝"更准确地反映了推断的不确定性。'
                },
                {
                    question: '对于单侧检验 \\(H_0: \\mu \\leq \\mu_0\\) vs \\(H_1: \\mu > \\mu_0\\)，写出拒绝域并解释为何拒绝域只在右尾。',
                    hint: '考虑哪些 \\(\\bar{X}\\) 值提供了反对 \\(H_0\\)、支持 \\(H_1\\) 的证据。',
                    solution: '拒绝域为 \\(R = \\{z : z > z_{\\alpha}\\}\\)。因为 \\(H_1: \\mu > \\mu_0\\)，所以只有当样本均值显著大于 \\(\\mu_0\\)（即 \\(Z\\) 取大正值）时，数据才提供了支持 \\(H_1\\) 的证据。小的 \\(Z\\) 值与 \\(H_0\\) 一致，不提供反对 \\(H_0\\) 的证据。'
                }
            ]
        },

        // ============================================================
        // Section 2: 两类错误与显著性水平
        // ============================================================
        {
            id: 'ch09-sec02',
            title: '两类错误与显著性水平',
            content: `
                <h2>两类错误与显著性水平 Type I/II Errors and Significance Level</h2>

                <p>任何假设检验都可能犯两类错误。理解并控制这些错误是假设检验理论的核心。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.6 (两类错误 Type I and Type II Errors)</div>
                    <div class="env-body">
                        <p>给定检验 \\(H_0\\) vs \\(H_1\\)：</p>
                        <ul>
                            <li><strong>第一类错误 (Type I error)</strong>: 当 \\(H_0\\) 为真时拒绝 \\(H_0\\)（"弃真"）。其概率为
                            \\[\\alpha(\\theta) = P_{\\theta}(\\text{Reject } H_0), \\quad \\theta \\in \\Theta_0\\]</li>
                            <li><strong>第二类错误 (Type II error)</strong>: 当 \\(H_1\\) 为真时不拒绝 \\(H_0\\)（"取伪"）。其概率为
                            \\[\\beta(\\theta) = P_{\\theta}(\\text{Fail to reject } H_0), \\quad \\theta \\in \\Theta_1\\]</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.7 (检验的大小与水平)</div>
                    <div class="env-body">
                        <p>检验的<strong>大小 (size)</strong>定义为：</p>
                        \\[\\alpha^* = \\sup_{\\theta \\in \\Theta_0} \\alpha(\\theta) = \\sup_{\\theta \\in \\Theta_0} P_{\\theta}(\\text{Reject } H_0)\\]
                        <p>若 \\(\\alpha^* \\leq \\alpha\\)，则称该检验为<strong>水平 (level) \\(\\alpha\\) 检验</strong>。当 \\(H_0\\) 为简单假设时，大小等于 Type I 错误概率：\\(\\alpha^* = P_{\\theta_0}(\\text{Reject } H_0)\\)。</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>在 Neyman-Pearson 框架中，\\(\\alpha\\) 和 \\(\\beta\\) 之间存在根本的 trade-off：对于给定的样本量 \\(n\\)，降低 \\(\\alpha\\) 必然导致 \\(\\beta\\) 增大（即检验变得更保守，不易拒绝 \\(H_0\\)，但更容易遗漏真实效应）。同时降低 \\(\\alpha\\) 和 \\(\\beta\\) 的唯一途径是增加样本量 \\(n\\)。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.8 (\\(\\alpha\\)-\\(\\beta\\) Trade-off)</div>
                    <div class="env-body">
                        <p>设检验统计量 \\(T\\) 的分布在 \\(H_0\\) 和 \\(H_1\\) 下分别为 \\(F_0\\) 和 \\(F_1\\)，拒绝域为 \\(R_c = \\{T > c\\}\\)。则：</p>
                        \\[\\alpha(c) = 1 - F_0(c), \\quad \\beta(c) = F_1(c)\\]
                        <p>当 \\(c\\) 增大时，\\(\\alpha\\) 减小而 \\(\\beta\\) 增大；当 \\(c\\) 减小时反之。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>由定义，\\(\\alpha(c) = P_{H_0}(T > c) = 1 - F_0(c)\\)，\\(\\beta(c) = P_{H_1}(T \\leq c) = F_1(c)\\)。因为 CDF \\(F_0, F_1\\) 为非递减函数，\\(c\\) 增大时 \\(F_0(c)\\) 增大故 \\(\\alpha(c)\\) 减小，而 \\(F_1(c)\\) 增大故 \\(\\beta(c)\\) 增大。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 9.9</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\stackrel{iid}{\\sim} N(\\mu, 1)\\)，检验 \\(H_0: \\mu = 0\\) vs \\(H_1: \\mu = 1\\)。</p>
                        <p>检验统计量 \\(Z = \\sqrt{n} \\bar{X}\\)，在 \\(H_0\\) 下 \\(Z \\sim N(0,1)\\)，在 \\(H_1\\) 下 \\(Z \\sim N(\\sqrt{n}, 1)\\)。</p>
                        <p>对拒绝域 \\(\\{Z > c\\}\\)：</p>
                        \\[\\alpha = 1 - \\Phi(c), \\quad \\beta = \\Phi(c - \\sqrt{n})\\]
                        <p>取 \\(n = 9, c = 1.645\\)：\\(\\alpha = 0.05\\)，\\(\\beta = \\Phi(1.645 - 3) = \\Phi(-1.355) \\approx 0.088\\)。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>想象两个重叠的钟形曲线：一个以 \\(H_0\\) 下的参数为中心，另一个以 \\(H_1\\) 下的参数为中心。阈值 \\(c\\) 划分了决策边界。左移 \\(c\\) 会让更多 \\(H_0\\) 的面积进入拒绝域（\\(\\alpha\\) 增大），但也让更少 \\(H_1\\) 的面积留在非拒绝域（\\(\\beta\\) 减小）。这就是 \\(\\alpha\\)-\\(\\beta\\) trade-off 的几何直觉。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="alpha-beta-tradeoff-viz"></div>
            `,
            visualizations: [
                {
                    id: 'alpha-beta-tradeoff-viz',
                    title: 'Interactive: Type I/II 错误的 Trade-off',
                    description: '拖动阈值观察 alpha 和 beta 如何反向变化',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 180, originY: 320, scale: 70
                        });

                        var mu0 = 0, mu1 = 2.5, sigma = 1;

                        var drag = viz.addDraggable('threshold', 1.645, 0, viz.colors.yellow, 8, function() {
                            drag.y = 0;
                            if (drag.x < -2) drag.x = -2;
                            if (drag.x > 5) drag.x = 5;
                            draw();
                        });

                        var nSlider = VizEngine.createSlider(controls, 'Effect size (mu1)', 0.5, 4.0, 2.5, 0.1, function(val) {
                            mu1 = val;
                            draw();
                        });

                        function draw() {
                            viz.clear();
                            var c = drag.x;
                            var pdf0 = function(x) { return VizEngine.normalPDF(x, mu0, sigma); };
                            var pdf1 = function(x) { return VizEngine.normalPDF(x, mu1, sigma); };

                            // Shade alpha (Type I error): area of H0 distribution in rejection region
                            viz.shadeUnder(pdf0, c, 5, viz.colors.red + '55');

                            // Shade beta (Type II error): area of H1 distribution in acceptance region
                            viz.shadeUnder(pdf1, -3, c, viz.colors.orange + '44');

                            // Draw H0 distribution
                            viz.drawFunction(pdf0, -3.5, 5, viz.colors.blue, 2.5);

                            // Draw H1 distribution
                            viz.drawFunction(pdf1, -2, 6, viz.colors.teal, 2.5);

                            // Threshold line
                            viz.drawSegment(c, 0, c, 0.45, viz.colors.yellow, 2, true);

                            // X axis
                            viz.drawSegment(-3.5, 0, 6, 0, viz.colors.axis, 1);

                            // Labels for distributions
                            viz.drawText('H\u2080', mu0, 0.43, viz.colors.blue, 14);
                            viz.drawText('H\u2081', mu1, 0.43, viz.colors.teal, 14);

                            // Compute alpha and beta
                            var alphaVal = 1 - VizEngine.normalCDF(c, mu0, sigma);
                            var betaVal = VizEngine.normalCDF(c, mu1, sigma);

                            // Display alpha and beta
                            viz.screenText('c = ' + c.toFixed(2), 280, 20, viz.colors.yellow, 14, 'center');
                            viz.screenText('\u03B1 (Type I) = ' + alphaVal.toFixed(4), 140, 48, viz.colors.red, 13, 'center');
                            viz.screenText('\u03B2 (Type II) = ' + betaVal.toFixed(4), 420, 48, viz.colors.orange, 13, 'center');
                            viz.screenText('Power = ' + (1 - betaVal).toFixed(4), 420, 68, viz.colors.teal, 13, 'center');

                            // Region labels
                            viz.screenText('\u03B1', 460, 280, viz.colors.red, 16, 'center');
                            viz.screenText('\u03B2', 160, 200, viz.colors.orange, 16, 'center');

                            viz.drawDraggables();
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\(X_1, \\ldots, X_{16} \\stackrel{iid}{\\sim} N(\\mu, 4)\\)，检验 \\(H_0: \\mu = 5\\) vs \\(H_1: \\mu = 7\\)，拒绝域为 \\(\\{\\bar{X} > 6\\}\\)。计算 \\(\\alpha\\) 和 \\(\\beta\\)。',
                    hint: '将拒绝域转换为标准化统计量 \\(Z\\) 的条件。在 \\(H_0\\) 下 \\(\\bar{X} \\sim N(5, 1/4)\\)，在 \\(H_1\\) 下 \\(\\bar{X} \\sim N(7, 1/4)\\)。',
                    solution: '在 \\(H_0\\) 下 \\(\\bar{X} \\sim N(5, 4/16) = N(5, 0.25)\\)，故 \\(\\alpha = P(\\bar{X} > 6 | \\mu=5) = P(Z > (6-5)/0.5) = P(Z > 2) = 1 - \\Phi(2) \\approx 0.0228\\)。在 \\(H_1\\) 下 \\(\\bar{X} \\sim N(7, 0.25)\\)，故 \\(\\beta = P(\\bar{X} \\leq 6 | \\mu=7) = P(Z \\leq (6-7)/0.5) = P(Z \\leq -2) = \\Phi(-2) \\approx 0.0228\\)。'
                },
                {
                    question: '证明：对于简单 vs 简单假设检验，若拒绝域从 \\(\\{T > c_1\\}\\) 变为 \\(\\{T > c_2\\}\\) 且 \\(c_2 > c_1\\)，则 \\(\\alpha\\) 减小而 \\(\\beta\\) 增大（假设检验统计量在 \\(H_0\\) 和 \\(H_1\\) 下的分布均为连续分布）。',
                    hint: '利用 CDF 的单调非递减性。',
                    solution: '设 \\(F_0, F_1\\) 分别为 \\(T\\) 在 \\(H_0\\) 和 \\(H_1\\) 下的 CDF。则 \\(\\alpha(c) = P_{H_0}(T > c) = 1 - F_0(c)\\)，\\(\\beta(c) = P_{H_1}(T \\leq c) = F_1(c)\\)。因为 CDF 单调非递减，\\(c_2 > c_1\\) 意味着 \\(F_0(c_2) \\geq F_0(c_1)\\)，故 \\(\\alpha(c_2) = 1 - F_0(c_2) \\leq 1 - F_0(c_1) = \\alpha(c_1)\\)。同理 \\(\\beta(c_2) = F_1(c_2) \\geq F_1(c_1) = \\beta(c_1)\\)。'
                },
                {
                    question: '一个检验的大小为 \\(\\alpha^* = 0.03\\)。该检验是否是水平 0.05 检验？是否是水平 0.01 检验？',
                    hint: '回顾水平 \\(\\alpha\\) 检验的定义：大小不超过 \\(\\alpha\\)。',
                    solution: '由于 \\(\\alpha^* = 0.03 \\leq 0.05\\)，该检验是水平 0.05 检验。但 \\(\\alpha^* = 0.03 > 0.01\\)，所以它不是水平 0.01 检验。'
                }
            ]
        },

        // ============================================================
        // Section 3: p 值
        // ============================================================
        {
            id: 'ch09-sec03',
            title: 'p值',
            content: `
                <h2>p值 The p-Value</h2>

                <p>p 值 (p-value) 是假设检验中最常用也是最常被误解的概念之一。它将检验统计量的观测值转化为一个概率度量，避免了预先固定显著性水平的需要。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.10 (p 值)</div>
                    <div class="env-body">
                        <p>给定检验统计量 \\(T\\) 和观测值 \\(t_{obs}\\)，<strong>p 值</strong>定义为在 \\(H_0\\) 下观测到与 \\(t_{obs}\\) 一样极端或更极端的检验统计量值的概率：</p>
                        \\[p = P_{H_0}(T \\geq t_{obs})\\]
                        <p>（对于右尾检验。双尾检验和左尾检验类似定义。）</p>
                        <p>等价地，p 值是使得 \\(t_{obs}\\) 恰好落在拒绝域边界上的最小显著性水平：</p>
                        \\[p = \\inf\\{\\alpha : t_{obs} \\in R_\\alpha\\}\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.11 (p 值作为决策规则)</div>
                    <div class="env-body">
                        <p>一个水平 \\(\\alpha\\) 检验可以等价地表述为：当且仅当 \\(p \\leq \\alpha\\) 时拒绝 \\(H_0\\)。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>设拒绝域为 \\(R_\\alpha = \\{T > c_\\alpha\\}\\)，其中 \\(c_\\alpha\\) 满足 \\(P_{H_0}(T > c_\\alpha) = \\alpha\\)。则 \\(t_{obs} \\in R_\\alpha \\iff t_{obs} > c_\\alpha \\iff P_{H_0}(T \\geq t_{obs}) \\leq \\alpha \\iff p \\leq \\alpha\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.12 (p 值在 \\(H_0\\) 下的分布)</div>
                    <div class="env-body">
                        <p>若检验统计量 \\(T\\) 在 \\(H_0\\) 下具有连续分布，则 p 值在 \\(H_0\\) 下服从 \\(\\text{Uniform}(0, 1)\\) 分布。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>设 \\(F_0\\) 为 \\(T\\) 在 \\(H_0\\) 下的 CDF。对于右尾检验，\\(p = 1 - F_0(T)\\)。由概率积分变换 (probability integral transform)，若 \\(T\\) 有连续分布 \\(F_0\\)，则 \\(F_0(T) \\sim \\text{Uniform}(0,1)\\)，从而 \\(p = 1 - F_0(T) \\sim \\text{Uniform}(0,1)\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning: 常见的 p 值误解</div>
                    <div class="env-body">
                        <p>以下说法均为<strong>错误的</strong>：</p>
                        <ol>
                            <li>"p 值是 \\(H_0\\) 为真的概率。" —— p 值是在 \\(H_0\\) 为真的假设下，数据极端性的概率，不是假设本身的概率。</li>
                            <li>"1 - p 是 \\(H_1\\) 为真的概率。" —— 同上，p 值不是关于假设的后验概率。</li>
                            <li>"p = 0.05 意味着有 5% 的概率犯了错误的拒绝。" —— 犯错概率取决于检验的 size，不是单个 p 值。</li>
                            <li>"不显著的 p 值意味着效应不存在。" —— 可能是样本量不够（检验功效不足）。</li>
                        </ol>
                        <p>正确的解读：p 值衡量的是数据与 \\(H_0\\) 的不兼容程度。p 值越小，数据越不支持 \\(H_0\\)。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (关于 p 值的争论)</div>
                    <div class="env-body">
                        <p>2016 年，美国统计协会 (ASA) 发布了关于 p 值的声明，强调 p 值不应作为科学结论的唯一依据。2019 年，《The American Statistician》特刊更是呼吁"退休统计显著性"（retire statistical significance）。然而 p 值仍然是强大的工具——问题在于误用，而非工具本身。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 9.13</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_{25} \\stackrel{iid}{\\sim} N(\\mu, 1)\\)，检验 \\(H_0: \\mu = 0\\) vs \\(H_1: \\mu \\neq 0\\)（双侧）。观测 \\(\\bar{x} = 0.45\\)。</p>
                        <p>检验统计量 \\(Z = \\sqrt{25} \\cdot 0.45 = 2.25\\)。双侧 p 值：</p>
                        \\[p = 2 \\cdot P(Z \\geq 2.25) = 2(1 - \\Phi(2.25)) \\approx 2 \\times 0.0122 = 0.0244\\]
                        <p>在 \\(\\alpha = 0.05\\) 下拒绝 \\(H_0\\)，在 \\(\\alpha = 0.01\\) 下不拒绝。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="pvalue-histogram-viz"></div>
            `,
            visualizations: [
                {
                    id: 'pvalue-histogram-viz',
                    title: 'Interactive: p 值分布 — H₀ vs H₁ 下的直方图',
                    description: '模拟多次检验，观察 p 值在 H₀ 下均匀分布、在 H₁ 下偏左',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 60, originY: 340, scale: 480
                        });

                        var nSim = 500;
                        var n = 20;
                        var muTrue = 0;
                        var sigma = 1;
                        var pValues = [];

                        function simulate() {
                            pValues = [];
                            for (var i = 0; i < nSim; i++) {
                                var samples = VizEngine.sampleArray(function() {
                                    return VizEngine.randomNormal(muTrue, sigma);
                                }, n);
                                var xbar = VizEngine.mean(samples);
                                var z = xbar * Math.sqrt(n) / sigma;
                                // Two-sided p-value
                                var p = 2 * (1 - VizEngine.normalCDF(Math.abs(z)));
                                pValues.push(p);
                            }
                        }

                        function draw() {
                            viz.clear();

                            // Build histogram of p-values in [0,1] with 20 bins
                            var nBins = 20;
                            var binWidth = 1 / nBins;
                            var counts = new Array(nBins).fill(0);
                            for (var i = 0; i < pValues.length; i++) {
                                var bin = Math.min(Math.floor(pValues[i] / binWidth), nBins - 1);
                                if (bin < 0) bin = 0;
                                counts[bin]++;
                            }

                            // Normalize to density
                            var maxDensity = 0;
                            var bins = [];
                            for (var j = 0; j < nBins; j++) {
                                var density = counts[j] / (nSim * binWidth);
                                if (density > maxDensity) maxDensity = density;
                                bins.push({x: j * binWidth, width: binWidth, height: density});
                            }

                            // Draw y-axis scale
                            var yMax = Math.max(maxDensity * 1.2, 2.5);
                            var yScale = 260 / yMax;

                            // Draw histogram bars
                            for (var k = 0; k < bins.length; k++) {
                                var bx = 60 + bins[k].x * 480;
                                var bw = binWidth * 480;
                                var bh = bins[k].height * yScale;
                                viz.ctx.fillStyle = viz.colors.blue + '88';
                                viz.ctx.fillRect(bx, 340 - bh, bw - 1, bh);
                                viz.ctx.strokeStyle = viz.colors.blue;
                                viz.ctx.lineWidth = 1;
                                viz.ctx.strokeRect(bx, 340 - bh, bw - 1, bh);
                            }

                            // Draw Uniform(0,1) reference line (density = 1)
                            var refY = 340 - 1 * yScale;
                            viz.ctx.strokeStyle = viz.colors.red;
                            viz.ctx.lineWidth = 2;
                            viz.ctx.setLineDash([6, 4]);
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(60, refY);
                            viz.ctx.lineTo(540, refY);
                            viz.ctx.stroke();
                            viz.ctx.setLineDash([]);

                            // Axes
                            viz.ctx.strokeStyle = viz.colors.axis;
                            viz.ctx.lineWidth = 1.5;
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(60, 340);
                            viz.ctx.lineTo(540, 340);
                            viz.ctx.stroke();
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(60, 340);
                            viz.ctx.lineTo(60, 60);
                            viz.ctx.stroke();

                            // X axis labels
                            viz.ctx.fillStyle = viz.colors.text;
                            viz.ctx.font = '11px -apple-system,sans-serif';
                            viz.ctx.textAlign = 'center';
                            viz.ctx.textBaseline = 'top';
                            for (var xi = 0; xi <= 10; xi++) {
                                var xVal = xi / 10;
                                var xPos = 60 + xVal * 480;
                                viz.ctx.fillText(xVal.toFixed(1), xPos, 344);
                            }

                            // Y axis labels
                            viz.ctx.textAlign = 'right';
                            viz.ctx.textBaseline = 'middle';
                            for (var yi = 0; yi <= Math.floor(yMax); yi++) {
                                var yPos = 340 - yi * yScale;
                                if (yPos > 60) {
                                    viz.ctx.fillText(yi.toString(), 54, yPos);
                                }
                            }

                            // Title and info
                            viz.screenText('p-value Distribution (' + nSim + ' simulations)', 300, 20, viz.colors.white, 15, 'center');
                            viz.screenText('mu_true = ' + muTrue.toFixed(1) + ', n = ' + n, 300, 40, viz.colors.text, 12, 'center');
                            viz.screenText('Uniform(0,1) reference', 440, refY - 10, viz.colors.red, 11, 'center');

                            // Show proportion below 0.05
                            var rejCount = 0;
                            for (var ri = 0; ri < pValues.length; ri++) {
                                if (pValues[ri] <= 0.05) rejCount++;
                            }
                            viz.screenText('p < 0.05: ' + (rejCount / nSim * 100).toFixed(1) + '%', 300, 58, viz.colors.yellow, 12, 'center');
                        }

                        simulate();
                        draw();

                        VizEngine.createSlider(controls, 'mu_true', 0.0, 3.0, 0.0, 0.1, function(val) {
                            muTrue = val;
                            simulate();
                            draw();
                        });

                        VizEngine.createSlider(controls, 'n', 5, 100, 20, 5, function(val) {
                            n = Math.round(val);
                            simulate();
                            draw();
                        });

                        VizEngine.createButton(controls, 'Re-simulate', function() {
                            simulate();
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '证明：若检验统计量 \\(T\\) 在 \\(H_0\\) 下有连续 CDF \\(F_0\\)，则右尾 p 值 \\(p = 1 - F_0(T)\\) 满足 \\(p \\sim \\text{Uniform}(0,1)\\)。',
                    hint: '利用概率积分变换 (probability integral transform): 若 \\(X\\) 有连续 CDF \\(F\\)，则 \\(F(X) \\sim \\text{Uniform}(0,1)\\)。',
                    solution: '由概率积分变换，\\(U = F_0(T) \\sim \\text{Uniform}(0,1)\\)。因此 \\(p = 1 - U\\)，而 \\(1 - U\\) 仍服从 \\(\\text{Uniform}(0,1)\\)（因为 \\(P(1-U \\leq x) = P(U \\geq 1-x) = x\\) 对 \\(x \\in [0,1]\\)）。'
                },
                {
                    question: '设 \\(X_1, \\ldots, X_{36} \\stackrel{iid}{\\sim} N(\\mu, 9)\\)，检验 \\(H_0: \\mu = 20\\) vs \\(H_1: \\mu > 20\\)。若 \\(\\bar{x} = 21.2\\)，计算 p 值。',
                    hint: '这是单侧（右尾）检验。计算 \\(Z\\) 统计量后求 \\(P(Z \\geq z_{obs})\\)。',
                    solution: '\\(Z = \\frac{21.2 - 20}{3/\\sqrt{36}} = \\frac{1.2}{0.5} = 2.4\\)。右尾 p 值 \\(p = P(Z \\geq 2.4) = 1 - \\Phi(2.4) \\approx 0.0082\\)。'
                },
                {
                    question: '某研究报告 p = 0.048。以下解读哪些是正确的？(a) \\(H_0\\) 为真的概率是 4.8%。(b) 在 \\(\\alpha = 0.05\\) 下拒绝 \\(H_0\\)。(c) 如果重复实验，有 4.8% 的概率得到同样的结果。(d) 在 \\(H_0\\) 下，获得如此极端或更极端数据的概率是 4.8%。',
                    hint: '回顾 p 值的定义和常见误解。',
                    solution: '(b) 和 (d) 是正确的。(a) 错误：p 值不是 \\(H_0\\) 为真的后验概率。(c) 错误：p 值衡量的是在 \\(H_0\\) 下的极端性，不是重复实验得到同一结果的概率。(b) 正确：\\(p = 0.048 < 0.05 = \\alpha\\)，故拒绝 \\(H_0\\)。(d) 正确：这是 p 值的定义。'
                }
            ]
        },

        // ============================================================
        // Section 4: 检验功效
        // ============================================================
        {
            id: 'ch09-sec04',
            title: '检验功效',
            content: `
                <h2>检验功效 Power of a Test</h2>

                <p>功效 (power) 衡量了检验在备择假设为真时正确拒绝原假设的能力。高功效意味着如果真正存在效应，检验有较大概率检测到它。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.14 (功效函数 Power Function)</div>
                    <div class="env-body">
                        <p>检验的<strong>功效函数</strong>定义为：</p>
                        \\[\\pi(\\theta) = P_{\\theta}(\\text{Reject } H_0), \\quad \\theta \\in \\Theta\\]
                        <p>功效函数完整刻画了检验在所有参数值下的表现：</p>
                        <ul>
                            <li>当 \\(\\theta \\in \\Theta_0\\) 时，\\(\\pi(\\theta)\\) 即为 Type I 错误概率（应尽可能小）</li>
                            <li>当 \\(\\theta \\in \\Theta_1\\) 时，\\(\\pi(\\theta)\\) 即为<strong>功效 (power)</strong>（应尽可能大）</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.15 (功效 Power)</div>
                    <div class="env-body">
                        <p>对于特定的备择参数 \\(\\theta_1 \\in \\Theta_1\\)，检验在 \\(\\theta_1\\) 处的<strong>功效</strong>为：</p>
                        \\[\\text{Power}(\\theta_1) = \\pi(\\theta_1) = 1 - \\beta(\\theta_1)\\]
                        <p>其中 \\(\\beta(\\theta_1)\\) 是在 \\(\\theta = \\theta_1\\) 时的 Type II 错误概率。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 9.16 (正态均值的功效函数)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\stackrel{iid}{\\sim} N(\\mu, \\sigma^2)\\)，\\(\\sigma^2\\) 已知，检验 \\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu \\neq \\mu_0\\)，拒绝域 \\(|Z| > z_{\\alpha/2}\\)。</p>
                        <p>功效函数为：</p>
                        \\[\\pi(\\mu) = P_{\\mu}(|Z| > z_{\\alpha/2})\\]
                        <p>其中 \\(Z = \\frac{\\bar{X} - \\mu_0}{\\sigma/\\sqrt{n}} \\sim N\\left(\\frac{\\mu - \\mu_0}{\\sigma/\\sqrt{n}}, 1\\right)\\) 在真实参数 \\(\\mu\\) 下。令 \\(\\delta = \\frac{\\mu - \\mu_0}{\\sigma/\\sqrt{n}}\\)（非中心参数），则：</p>
                        \\[\\pi(\\mu) = 1 - \\Phi(z_{\\alpha/2} - \\delta) + \\Phi(-z_{\\alpha/2} - \\delta)\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.17 (影响功效的因素)</div>
                    <div class="env-body">
                        <p>对于 Z-检验 \\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu \\neq \\mu_0\\)，功效 \\(\\pi(\\mu)\\) 在以下条件下增大：</p>
                        <ol>
                            <li><strong>效应量 (effect size)</strong> \\(|\\mu - \\mu_0|\\) 增大：真实参数离 \\(H_0\\) 越远，越容易检测。</li>
                            <li><strong>样本量 \\(n\\)</strong> 增大：更多数据提供更多信息。</li>
                            <li><strong>显著性水平 \\(\\alpha\\)</strong> 增大：拒绝域扩大，更容易拒绝 \\(H_0\\)。</li>
                            <li><strong>方差 \\(\\sigma^2\\)</strong> 减小：噪声更小，信号更清晰。</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p>功效的主要项为 \\(1 - \\Phi(z_{\\alpha/2} - \\delta)\\)，其中 \\(\\delta = \\sqrt{n}|\\mu - \\mu_0|/\\sigma\\)。由于 \\(\\Phi\\) 为递增函数，\\(\\delta\\) 增大使得 \\(z_{\\alpha/2} - \\delta\\) 减小，\\(\\Phi(z_{\\alpha/2} - \\delta)\\) 减小，从而功效增大。而 \\(\\delta\\) 随 \\(|\\mu - \\mu_0|\\)、\\(n\\) 的增大和 \\(\\sigma\\) 的减小而增大。\\(\\alpha\\) 增大使 \\(z_{\\alpha/2}\\) 减小，同样使功效增大。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.18 (指数族功效函数的单调性)</div>
                    <div class="env-body">
                        <p>对于单参数指数族 \\(f(x|\\theta) = h(x) \\exp(\\eta(\\theta) T(x) - A(\\theta))\\) 中的单侧检验，若 \\(\\eta(\\theta)\\) 是 \\(\\theta\\) 的严格递增函数，则对于检验 \\(H_0: \\theta \\leq \\theta_0\\) vs \\(H_1: \\theta > \\theta_0\\)（使用拒绝域 \\(T > c\\)），功效函数 \\(\\pi(\\theta)\\) 是 \\(\\theta\\) 的严格递增函数。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Sketch)</div>
                    <div class="env-body">
                        <p>指数族具有<strong>单调似然比</strong>（monotone likelihood ratio, MLR）性质：对 \\(\\theta_2 > \\theta_1\\)，似然比 \\(f(x|\\theta_2)/f(x|\\theta_1)\\) 是 \\(T(x)\\) 的递增函数。这意味着 \\(T\\) 越大，越"支持"更大的 \\(\\theta\\)。</p>
                        <p>形式地，利用 Neyman-Pearson 引理（第 10 章详述），当 \\(\\eta(\\theta)\\) 递增时，对任何 \\(\\theta_2 > \\theta_1\\)，\\(P_{\\theta_2}(T > c) > P_{\\theta_1}(T > c)\\)，即 \\(\\pi(\\theta_2) > \\pi(\\theta_1)\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.19 (无偏检验 Unbiased Test)</div>
                    <div class="env-body">
                        <p>检验 \\(\\delta\\) 称为<strong>无偏的</strong>（unbiased），若对所有 \\(\\theta \\in \\Theta_1\\)：</p>
                        \\[\\pi(\\theta) \\geq \\sup_{\\theta' \\in \\Theta_0} \\pi(\\theta') = \\alpha^*\\]
                        <p>即：在备择假设下拒绝的概率不低于在原假设下拒绝的最大概率。无偏检验保证"检验至少不比随机猜测差"。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>功效可以理解为检验的"灵敏度"。一个功效为 0.8 的检验意味着：如果真正存在该效应，我们在 100 次独立实验中大约有 80 次能够检测到它。通常要求功效不低于 0.8（Cohen 的建议），在关键应用中可能要求 0.9 或更高。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="power-function-viz"></div>

                <div class="viz-placeholder" data-viz="power-factors-viz"></div>
            `,
            visualizations: [
                {
                    id: 'power-function-viz',
                    title: 'Interactive: 功效函数 pi(mu)',
                    description: '观察功效函数如何随样本量和显著性水平变化',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380,
                            originX: 280, originY: 310, scale: 80
                        });

                        var mu0 = 0, sigma = 1;
                        var nVal = 16, alphaVal = 0.05;

                        function normalInvApprox(p) {
                            if (p <= 0 || p >= 1) return 0;
                            if (p < 0.5) return -normalInvApprox(1 - p);
                            var t = Math.sqrt(-2 * Math.log(1 - p));
                            var c0 = 2.515517, c1 = 0.802853, c2 = 0.010328;
                            var d1 = 1.432788, d2 = 0.189269, d3 = 0.001308;
                            return t - (c0 + c1 * t + c2 * t * t) / (1 + d1 * t + d2 * t * t + d3 * t * t * t);
                        }

                        function powerFunc(mu) {
                            var zCrit = normalInvApprox(1 - alphaVal / 2);
                            var delta = (mu - mu0) / (sigma / Math.sqrt(nVal));
                            return 1 - VizEngine.normalCDF(zCrit - delta) + VizEngine.normalCDF(-zCrit - delta);
                        }

                        function draw() {
                            viz.clear();

                            // Draw horizontal reference lines
                            viz.drawSegment(-3.5, alphaVal * 3.5, 3.5, alphaVal * 3.5, viz.colors.text + '44', 1, true);
                            viz.drawSegment(-3.5, 0.8 * 3.5, 3.5, 0.8 * 3.5, viz.colors.green + '44', 1, true);
                            viz.drawSegment(-3.5, 1.0 * 3.5, 3.5, 1.0 * 3.5, viz.colors.axis + '44', 1, true);

                            // Axes
                            viz.drawSegment(-3.5, 0, 3.5, 0, viz.colors.axis, 1.5);
                            viz.drawSegment(0, 0, 0, 3.8, viz.colors.axis, 1);

                            // X-axis labels
                            for (var x = -3; x <= 3; x++) {
                                if (x === 0) continue;
                                viz.drawText(x.toString(), x, -0.15, viz.colors.text, 11);
                            }
                            viz.drawText('mu', 3.3, -0.25, viz.colors.text, 12);

                            // Y-axis labels
                            viz.screenText('0', 270, 310, viz.colors.text, 10, 'right');
                            viz.screenText(alphaVal.toFixed(2), 264, 310 - alphaVal * 3.5 * 80, viz.colors.text, 10, 'right');
                            viz.screenText('0.80', 264, 310 - 0.8 * 3.5 * 80, viz.colors.green, 10, 'right');
                            viz.screenText('1.00', 264, 310 - 1.0 * 3.5 * 80, viz.colors.text, 10, 'right');

                            // Plot power function (scaled: multiply by 3.5 to fit the Y range)
                            var powerScaled = function(mu) { return powerFunc(mu) * 3.5; };
                            viz.drawFunction(powerScaled, -3.5, 3.5, viz.colors.orange, 2.5, 300);

                            // Mark mu0
                            viz.drawPoint(mu0, powerFunc(mu0) * 3.5, viz.colors.red, null, 5);
                            viz.drawText('mu\u2080', mu0, -0.35, viz.colors.red, 12);

                            // Title
                            viz.screenText('Power Function \u03C0(\u03BC)', 280, 18, viz.colors.white, 15, 'center');
                            viz.screenText('n = ' + nVal + ', \u03B1 = ' + alphaVal.toFixed(2) + ', \u03C3 = ' + sigma, 280, 38, viz.colors.text, 12, 'center');
                        }

                        draw();

                        VizEngine.createSlider(controls, 'n', 4, 100, 16, 4, function(val) {
                            nVal = Math.round(val);
                            draw();
                        });

                        VizEngine.createSlider(controls, 'alpha', 0.01, 0.20, 0.05, 0.01, function(val) {
                            alphaVal = val;
                            draw();
                        });

                        return viz;
                    }
                },
                {
                    id: 'power-factors-viz',
                    title: 'Interactive: 功效的四大影响因素',
                    description: '调节 n, alpha, effect size, sigma 观察功效的变化',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380,
                            originX: 180, originY: 310, scale: 70
                        });

                        var mu0 = 0, muTrue = 1.5, sigma = 1, nVal = 20, alphaVal = 0.05;

                        function normalInvApprox(p) {
                            if (p <= 0 || p >= 1) return 0;
                            if (p < 0.5) return -normalInvApprox(1 - p);
                            var t = Math.sqrt(-2 * Math.log(1 - p));
                            var c0 = 2.515517, c1 = 0.802853, c2 = 0.010328;
                            var d1 = 1.432788, d2 = 0.189269, d3 = 0.001308;
                            return t - (c0 + c1 * t + c2 * t * t) / (1 + d1 * t + d2 * t * t + d3 * t * t * t);
                        }

                        function draw() {
                            viz.clear();

                            var se = sigma / Math.sqrt(nVal);
                            var zCrit = normalInvApprox(1 - alphaVal / 2);
                            var crit = mu0 + zCrit * se;

                            var pdf0 = function(x) { return VizEngine.normalPDF(x, mu0, se); };
                            var pdf1 = function(x) { return VizEngine.normalPDF(x, muTrue, se); };

                            // Shade power (correct rejection area under H1 beyond critical value)
                            viz.shadeUnder(pdf1, crit, muTrue + 5 * se, viz.colors.green + '44');

                            // Shade beta under H1 (fail to reject)
                            viz.shadeUnder(pdf1, muTrue - 5 * se, crit, viz.colors.orange + '22');

                            // Shade alpha under H0
                            viz.shadeUnder(pdf0, crit, mu0 + 5 * se, viz.colors.red + '33');

                            // Draw distributions
                            viz.drawFunction(pdf0, mu0 - 5 * se, mu0 + 5 * se, viz.colors.blue, 2);
                            viz.drawFunction(pdf1, muTrue - 5 * se, muTrue + 5 * se, viz.colors.teal, 2);

                            // Critical value line
                            viz.drawSegment(crit, 0, crit, Math.max(pdf0(mu0), pdf1(muTrue)) * 1.05, viz.colors.yellow, 2, true);

                            // X axis
                            var xMin = Math.min(mu0 - 4 * se, -1);
                            var xMax = Math.max(muTrue + 4 * se, 3);
                            viz.drawSegment(xMin, 0, xMax, 0, viz.colors.axis, 1);

                            // Labels
                            viz.drawText('H\u2080', mu0, pdf0(mu0) + pdf0(mu0) * 0.15, viz.colors.blue, 13);
                            viz.drawText('H\u2081', muTrue, pdf1(muTrue) + pdf1(muTrue) * 0.15, viz.colors.teal, 13);

                            // Compute power
                            var delta = (muTrue - mu0) / se;
                            var power = 1 - VizEngine.normalCDF(zCrit - delta) + VizEngine.normalCDF(-zCrit - delta);
                            var betaVal = 1 - power;

                            // Display info
                            viz.screenText('Power Analysis', 280, 18, viz.colors.white, 15, 'center');
                            viz.screenText('Power = ' + power.toFixed(4), 280, 40, viz.colors.green, 14, 'center');
                            viz.screenText('\u03B2 = ' + betaVal.toFixed(4), 400, 40, viz.colors.orange, 12, 'center');
                            viz.screenText('Effect size d = ' + ((muTrue - mu0) / sigma).toFixed(2), 280, 58, viz.colors.text, 11, 'center');
                        }

                        draw();

                        VizEngine.createSlider(controls, 'n', 5, 100, 20, 5, function(val) {
                            nVal = Math.round(val);
                            draw();
                        });

                        VizEngine.createSlider(controls, 'alpha', 0.01, 0.20, 0.05, 0.01, function(val) {
                            alphaVal = val;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'mu_true', 0.2, 3.0, 1.5, 0.1, function(val) {
                            muTrue = val;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'sigma', 0.5, 3.0, 1.0, 0.1, function(val) {
                            sigma = val;
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '写出检验 \\(H_0: \\mu = 0\\) vs \\(H_1: \\mu > 0\\)（\\(X_i \\stackrel{iid}{\\sim} N(\\mu, 1)\\)，拒绝域 \\(\\{\\sqrt{n}\\bar{X} > z_\\alpha\\}\\)）的功效函数 \\(\\pi(\\mu)\\)。',
                    hint: '在 \\(\\mu\\) 下，\\(\\sqrt{n}\\bar{X} \\sim N(\\sqrt{n}\\mu, 1)\\)。',
                    solution: '\\(\\pi(\\mu) = P_\\mu(\\sqrt{n}\\bar{X} > z_\\alpha) = P(N(\\sqrt{n}\\mu, 1) > z_\\alpha) = 1 - \\Phi(z_\\alpha - \\sqrt{n}\\mu)\\)。当 \\(\\mu = 0\\) 时 \\(\\pi(0) = 1 - \\Phi(z_\\alpha) = \\alpha\\)。当 \\(\\mu > 0\\) 时 \\(\\pi(\\mu) > \\alpha\\)，且 \\(\\mu \\to \\infty\\) 时 \\(\\pi(\\mu) \\to 1\\)。'
                },
                {
                    question: '对于上述检验，若 \\(\\alpha = 0.05\\)，\\(n = 25\\)，计算在 \\(\\mu = 0.5\\) 处的功效。',
                    hint: '代入 \\(\\pi(\\mu) = 1 - \\Phi(z_{0.05} - \\sqrt{n} \\mu)\\)，其中 \\(z_{0.05} = 1.645\\)。',
                    solution: '\\(\\pi(0.5) = 1 - \\Phi(1.645 - \\sqrt{25} \\times 0.5) = 1 - \\Phi(1.645 - 2.5) = 1 - \\Phi(-0.855) = \\Phi(0.855) \\approx 0.804\\)。功效约为 80.4%。'
                },
                {
                    question: '解释为什么理想的功效函数在 \\(\\Theta_0\\) 上等于 \\(\\alpha\\)（而非更小），在 \\(\\Theta_1\\) 上尽可能接近 1。',
                    hint: '考虑如果检验在 \\(\\Theta_0\\) 上的功效远小于 \\(\\alpha\\)，对 \\(\\Theta_1\\) 上的功效有何影响。',
                    solution: '由 \\(\\alpha\\)-\\(\\beta\\) trade-off，检验越保守（\\(\\Theta_0\\) 上功效越小），在 \\(\\Theta_1\\) 上的功效也越低。因此理想检验应当"用足"显著性水平预算：在 \\(\\Theta_0\\) 边界上达到 \\(\\alpha\\)（大小恰好等于 \\(\\alpha\\)），从而在 \\(\\Theta_1\\) 上获得最大功效。这正是 Neyman-Pearson 引理中最优检验的特征。'
                }
            ]
        },

        // ============================================================
        // Section 5: 样本量确定
        // ============================================================
        {
            id: 'ch09-sec05',
            title: '样本量确定',
            content: `
                <h2>样本量确定 Sample Size Determination</h2>

                <p>在实验设计阶段，一个关键问题是：需要多少样本才能以足够的功效检测到感兴趣的效应？功效分析 (power analysis) 通过联系 \\(\\alpha\\)、功效 \\(1 - \\beta\\)、效应量和样本量来回答这个问题。</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.20 (Z-检验的样本量公式)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\stackrel{iid}{\\sim} N(\\mu, \\sigma^2)\\)，\\(\\sigma^2\\) 已知。检验 \\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu = \\mu_1\\)（单侧，\\(\\mu_1 > \\mu_0\\)），要求 Type I 错误率不超过 \\(\\alpha\\)，在 \\(\\mu_1\\) 处的功效不低于 \\(1 - \\beta\\)。则所需样本量为：</p>
                        \\[n = \\left\\lceil \\frac{(z_\\alpha + z_\\beta)^2 \\sigma^2}{(\\mu_1 - \\mu_0)^2} \\right\\rceil\\]
                        <p>对于双侧检验，将 \\(z_\\alpha\\) 替换为 \\(z_{\\alpha/2}\\)：</p>
                        \\[n = \\left\\lceil \\frac{(z_{\\alpha/2} + z_\\beta)^2 \\sigma^2}{(\\mu_1 - \\mu_0)^2} \\right\\rceil\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>对于单侧检验 \\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu > \\mu_0\\)，拒绝域为 \\(\\{\\bar{X} > \\mu_0 + z_\\alpha \\sigma / \\sqrt{n}\\}\\)。</p>
                        <p>在 \\(\\mu = \\mu_1\\) 下，要求功效 \\(\\geq 1 - \\beta\\)：</p>
                        \\[P_{\\mu_1}(\\bar{X} > \\mu_0 + z_\\alpha \\sigma / \\sqrt{n}) \\geq 1 - \\beta\\]
                        <p>标准化：\\(\\bar{X} \\sim N(\\mu_1, \\sigma^2/n)\\)，得</p>
                        \\[P\\left(Z > \\frac{\\mu_0 + z_\\alpha \\sigma/\\sqrt{n} - \\mu_1}{\\sigma/\\sqrt{n}}\\right) \\geq 1 - \\beta\\]
                        \\[P\\left(Z > z_\\alpha - \\frac{(\\mu_1 - \\mu_0)\\sqrt{n}}{\\sigma}\\right) \\geq 1 - \\beta\\]
                        <p>即 \\(z_\\alpha - \\frac{(\\mu_1 - \\mu_0)\\sqrt{n}}{\\sigma} \\leq -z_\\beta\\)，解得：</p>
                        \\[\\sqrt{n} \\geq \\frac{(z_\\alpha + z_\\beta)\\sigma}{\\mu_1 - \\mu_0}\\]
                        <p>两边平方取整即得结论。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.21 (Cohen's d — 标准化效应量)</div>
                    <div class="env-body">
                        <p>标准化效应量 (standardized effect size) 定义为：</p>
                        \\[d = \\frac{|\\mu_1 - \\mu_0|}{\\sigma}\\]
                        <p>Cohen 建议的参考标准：\\(d = 0.2\\) 为小效应，\\(d = 0.5\\) 为中等效应，\\(d = 0.8\\) 为大效应。</p>
                        <p>用 \\(d\\) 表示样本量公式：</p>
                        \\[n = \\left\\lceil \\frac{(z_{\\alpha/2} + z_\\beta)^2}{d^2} \\right\\rceil\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 9.22</div>
                    <div class="env-body">
                        <p>设计一个实验检测药物效果。已知 \\(\\sigma = 10\\)，希望在 \\(\\alpha = 0.05\\)（双侧）下检测到 \\(\\delta = \\mu_1 - \\mu_0 = 3\\) 的效应，要求功效 \\(1 - \\beta = 0.80\\)。</p>
                        <p>\\(z_{0.025} = 1.96\\)，\\(z_{0.20} = 0.842\\)。</p>
                        \\[n = \\left\\lceil \\frac{(1.96 + 0.842)^2 \\times 10^2}{3^2} \\right\\rceil = \\left\\lceil \\frac{7.8488 \\times 100}{9} \\right\\rceil = \\left\\lceil 87.21 \\right\\rceil = 88\\]
                        <p>即每组需要至少 88 个样本。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (t-检验的功效分析)</div>
                    <div class="env-body">
                        <p>当 \\(\\sigma\\) 未知时使用 t-检验，功效分析变得更复杂：检验统计量在 \\(H_1\\) 下服从非中心 t 分布 (noncentral t-distribution)。精确计算需要数值方法。实践中常用 Z-检验公式作为近似，对大样本 (\\(n > 30\\)) 准确度很高。</p>
                        <p>非中心参数为 \\(\\lambda = \\frac{\\mu_1 - \\mu_0}{\\sigma/\\sqrt{n}} = d\\sqrt{n}\\)，t 统计量在 \\(H_1\\) 下近似服从 \\(t_{n-1}(\\lambda)\\)。</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>功效分析必须在实验<strong>开始前</strong>进行 (a priori)。在观察到数据后进行的"事后功效分析" (post hoc power analysis) 是无意义的，因为观测到的效应量和 p 值之间存在确定性关系，事后功效分析不能提供额外信息。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sample-size-calc-viz"></div>
            `,
            visualizations: [
                {
                    id: 'sample-size-calc-viz',
                    title: 'Interactive: 样本量计算器',
                    description: '输入 alpha、目标功效、效应量，计算所需样本量并显示功效曲线',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 70, originY: 340, scale: 1
                        });

                        var alphaVal = 0.05;
                        var powerTarget = 0.80;
                        var effectSize = 0.5;

                        function normalInvApprox(p) {
                            if (p <= 0 || p >= 1) return 0;
                            if (p < 0.5) return -normalInvApprox(1 - p);
                            var t = Math.sqrt(-2 * Math.log(1 - p));
                            var c0 = 2.515517, c1 = 0.802853, c2 = 0.010328;
                            var d1 = 1.432788, d2 = 0.189269, d3 = 0.001308;
                            return t - (c0 + c1 * t + c2 * t * t) / (1 + d1 * t + d2 * t * t + d3 * t * t * t);
                        }

                        function computeN(a, pow, d) {
                            var za = normalInvApprox(1 - a / 2);
                            var zb = normalInvApprox(pow);
                            return Math.ceil((za + zb) * (za + zb) / (d * d));
                        }

                        function powerForN(n, a, d) {
                            var za = normalInvApprox(1 - a / 2);
                            var delta = d * Math.sqrt(n);
                            return 1 - VizEngine.normalCDF(za - delta) + VizEngine.normalCDF(-za - delta);
                        }

                        function draw() {
                            viz.clear();

                            var requiredN = computeN(alphaVal, powerTarget, effectSize);
                            var maxN = Math.max(requiredN * 2, 100);
                            var plotWidth = 460;
                            var plotHeight = 280;
                            var plotX = 80;
                            var plotY = 40;

                            // Draw plot area
                            viz.ctx.strokeStyle = viz.colors.axis;
                            viz.ctx.lineWidth = 1;
                            viz.ctx.strokeRect(plotX, plotY, plotWidth, plotHeight);

                            // Draw grid lines
                            viz.ctx.strokeStyle = viz.colors.grid;
                            viz.ctx.lineWidth = 0.5;
                            for (var g = 0.2; g <= 1.0; g += 0.2) {
                                var gy = plotY + plotHeight - g * plotHeight;
                                viz.ctx.beginPath();
                                viz.ctx.moveTo(plotX, gy);
                                viz.ctx.lineTo(plotX + plotWidth, gy);
                                viz.ctx.stroke();
                            }

                            // Draw power target line
                            var targetY = plotY + plotHeight - powerTarget * plotHeight;
                            viz.ctx.strokeStyle = viz.colors.green;
                            viz.ctx.lineWidth = 1.5;
                            viz.ctx.setLineDash([6, 4]);
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(plotX, targetY);
                            viz.ctx.lineTo(plotX + plotWidth, targetY);
                            viz.ctx.stroke();
                            viz.ctx.setLineDash([]);

                            // Draw alpha line
                            var alphaY = plotY + plotHeight - alphaVal * plotHeight;
                            viz.ctx.strokeStyle = viz.colors.red + '66';
                            viz.ctx.lineWidth = 1;
                            viz.ctx.setLineDash([4, 4]);
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(plotX, alphaY);
                            viz.ctx.lineTo(plotX + plotWidth, alphaY);
                            viz.ctx.stroke();
                            viz.ctx.setLineDash([]);

                            // Plot power curve
                            viz.ctx.strokeStyle = viz.colors.orange;
                            viz.ctx.lineWidth = 2.5;
                            viz.ctx.beginPath();
                            var first = true;
                            for (var ni = 2; ni <= maxN; ni++) {
                                var px = plotX + (ni / maxN) * plotWidth;
                                var pw = powerForN(ni, alphaVal, effectSize);
                                var py = plotY + plotHeight - pw * plotHeight;
                                if (first) { viz.ctx.moveTo(px, py); first = false; }
                                else viz.ctx.lineTo(px, py);
                            }
                            viz.ctx.stroke();

                            // Mark required n
                            var reqX = plotX + (requiredN / maxN) * plotWidth;
                            var reqPow = powerForN(requiredN, alphaVal, effectSize);
                            var reqY = plotY + plotHeight - reqPow * plotHeight;
                            viz.ctx.strokeStyle = viz.colors.yellow;
                            viz.ctx.lineWidth = 1.5;
                            viz.ctx.setLineDash([4, 3]);
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(reqX, plotY + plotHeight);
                            viz.ctx.lineTo(reqX, reqY);
                            viz.ctx.lineTo(plotX, reqY);
                            viz.ctx.stroke();
                            viz.ctx.setLineDash([]);

                            // Draw dot at required n
                            viz.ctx.fillStyle = viz.colors.yellow;
                            viz.ctx.beginPath();
                            viz.ctx.arc(reqX, reqY, 5, 0, Math.PI * 2);
                            viz.ctx.fill();

                            // X-axis labels
                            viz.ctx.fillStyle = viz.colors.text;
                            viz.ctx.font = '11px -apple-system,sans-serif';
                            viz.ctx.textAlign = 'center';
                            viz.ctx.textBaseline = 'top';
                            var step = Math.max(Math.round(maxN / 10), 1);
                            for (var xl = 0; xl <= maxN; xl += step) {
                                var xp = plotX + (xl / maxN) * plotWidth;
                                viz.ctx.fillText(xl.toString(), xp, plotY + plotHeight + 4);
                            }
                            viz.screenText('Sample size n', plotX + plotWidth / 2, plotY + plotHeight + 22, viz.colors.text, 12, 'center');

                            // Y-axis labels
                            viz.ctx.textAlign = 'right';
                            viz.ctx.textBaseline = 'middle';
                            for (var yl = 0; yl <= 1.0; yl += 0.2) {
                                var yp = plotY + plotHeight - yl * plotHeight;
                                viz.ctx.fillText(yl.toFixed(1), plotX - 6, yp);
                            }
                            viz.screenText('Power', 18, plotY + plotHeight / 2, viz.colors.text, 12, 'center');

                            // Title and result
                            viz.screenText('Sample Size Calculator (Two-sided Z-test)', 280, 14, viz.colors.white, 14, 'center');

                            // Result box
                            viz.ctx.fillStyle = viz.colors.bg;
                            viz.ctx.strokeStyle = viz.colors.yellow;
                            viz.ctx.lineWidth = 1;
                            var boxX = plotX + plotWidth - 180;
                            var boxY = plotY + 10;
                            viz.ctx.fillRect(boxX, boxY, 170, 75);
                            viz.ctx.strokeRect(boxX, boxY, 170, 75);

                            viz.screenText('Required n = ' + requiredN, boxX + 85, boxY + 18, viz.colors.yellow, 14, 'center');
                            viz.screenText('d = ' + effectSize.toFixed(2) + ', \u03B1 = ' + alphaVal.toFixed(2), boxX + 85, boxY + 38, viz.colors.text, 11, 'center');
                            viz.screenText('Target power = ' + powerTarget.toFixed(2), boxX + 85, boxY + 55, viz.colors.green, 11, 'center');

                            // Legend
                            viz.screenText('Target power', plotX + plotWidth + 2, targetY, viz.colors.green, 10, 'left', 'middle');
                        }

                        draw();

                        VizEngine.createSlider(controls, 'Effect size d', 0.1, 1.5, 0.5, 0.05, function(val) {
                            effectSize = val;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'alpha', 0.01, 0.10, 0.05, 0.01, function(val) {
                            alphaVal = val;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Target power', 0.60, 0.99, 0.80, 0.01, function(val) {
                            powerTarget = val;
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '推导双侧 Z-检验的样本量公式 \\(n = \\lceil (z_{\\alpha/2} + z_\\beta)^2 \\sigma^2 / \\delta^2 \\rceil\\)。',
                    hint: '从功效条件出发：\\(P_{\\mu_1}(|Z| > z_{\\alpha/2}) \\geq 1 - \\beta\\)。对于 \\(\\mu_1 > \\mu_0\\)，右尾贡献主要功效。',
                    solution: '在 \\(\\mu_1 > \\mu_0\\) 下，\\(Z = (\\bar{X} - \\mu_0)/(\\sigma/\\sqrt{n}) \\sim N(\\delta\\sqrt{n}/\\sigma, 1)\\)，记 \\(\\lambda = \\delta\\sqrt{n}/\\sigma\\)。功效约为 \\(1 - \\Phi(z_{\\alpha/2} - \\lambda)\\)（忽略左尾小概率项）。要求 \\(1 - \\Phi(z_{\\alpha/2} - \\lambda) \\geq 1 - \\beta\\)，即 \\(\\Phi(z_{\\alpha/2} - \\lambda) \\leq \\beta\\)，即 \\(z_{\\alpha/2} - \\lambda \\leq -z_\\beta\\)。解得 \\(\\lambda \\geq z_{\\alpha/2} + z_\\beta\\)，即 \\(\\delta\\sqrt{n}/\\sigma \\geq z_{\\alpha/2} + z_\\beta\\)，两边平方得 \\(n \\geq (z_{\\alpha/2} + z_\\beta)^2 \\sigma^2/\\delta^2\\)。'
                },
                {
                    question: '检测 Cohen \\(d = 0.2\\) 的小效应（双侧 \\(\\alpha = 0.05\\)，功效 0.80）需要多少样本？',
                    hint: '代入 \\(n = \\lceil (z_{0.025} + z_{0.20})^2 / d^2 \\rceil\\)。',
                    solution: '\\(n = \\lceil (1.96 + 0.842)^2 / 0.2^2 \\rceil = \\lceil 7.8488 / 0.04 \\rceil = \\lceil 196.22 \\rceil = 197\\)。检测小效应需要近 200 个样本，远多于检测中等效应 (\\(d=0.5\\)) 所需的约 32 个或大效应 (\\(d=0.8\\)) 所需的约 13 个。'
                },
                {
                    question: '一项临床试验计划以 \\(\\alpha = 0.01\\)（双侧）检测血压降低 \\(\\delta = 5\\) mmHg 的效应，已知 \\(\\sigma = 12\\) mmHg，要求功效 0.90。计算所需样本量。',
                    hint: '\\(z_{0.005} \\approx 2.576\\)，\\(z_{0.10} \\approx 1.282\\)。',
                    solution: '\\(n = \\lceil (2.576 + 1.282)^2 \\times 12^2 / 5^2 \\rceil = \\lceil 14.888 \\times 144 / 25 \\rceil = \\lceil 85.79 \\rceil = 86\\)。每组需要至少 86 名受试者。'
                }
            ]
        }
    ]
});

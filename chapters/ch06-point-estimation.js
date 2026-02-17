window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch06',
    number: 6,
    title: '点估计',
    subtitle: 'Point Estimation',
    sections: [
        // ===== Section 1: Estimators and Estimates =====
        {
            id: 'ch06-sec01',
            title: '估计量与估计值',
            content: `
                <h2>估计量与估计值 · Estimators and Estimates</h2>

                <p>统计推断的核心任务之一是根据观测数据来推断未知的总体参数。<strong>点估计</strong>（point estimation）的目标是用一个统计量的值来"猜测"参数的真实值。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.1 (统计模型与参数空间 / Statistical Model and Parameter Space)</div>
                    <div class="env-body">
                        <p>设观测数据 \\\\(X_1, \\\\ldots, X_n\\\\) 来自某总体分布族 \\\\(\\\\{P_\\\\theta : \\\\theta \\\\in \\\\Theta\\\\}\\\\)，其中：</p>
                        <ul>
                            <li>\\\\(\\\\Theta \\\\subseteq \\\\mathbb{R}^k\\\\) 称为<strong>参数空间</strong>（parameter space）；</li>
                            <li>\\\\(\\\\theta\\\\) 是未知的<strong>真参数</strong>（true parameter）；</li>
                            <li>三元组 \\\\((\\\\mathcal{X}, \\\\{P_\\\\theta\\\\}, \\\\Theta)\\\\) 构成一个<strong>参数统计模型</strong>。</li>
                        </ul>
                        <p>例如：Bernoulli 分布 \\\\(\\\\Theta = (0, 1)\\\\)；正态分布 \\\\(N(\\\\mu, \\\\sigma^2)\\\\)：\\\\(\\\\Theta = \\\\mathbb{R} \\\\times (0, \\\\infty)\\\\)；均匀分布 \\\\(U(0, \\\\theta)\\\\)：\\\\(\\\\Theta = (0, \\\\infty)\\\\)。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.2 (估计量与估计值 / Estimator and Estimate)</div>
                    <div class="env-body">
                        <p>设 \\\\(g(\\\\theta)\\\\) 是参数的某个函数（称为<strong>估计目标</strong>）。一个<strong>估计量</strong>（estimator）是样本的可测函数 \\\\(\\\\hat{g} = T(X_1, \\\\ldots, X_n)\\\\)，其中 \\\\(T\\\\) 不依赖于未知参数 \\\\(\\\\theta\\\\)。</p>
                        <p>当观测到具体样本值 \\\\(x_1, \\\\ldots, x_n\\\\) 后，\\\\(T(x_1, \\\\ldots, x_n)\\\\) 称为一个<strong>估计值</strong>（estimate）。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>估计量是一个<em>随机变量</em>——它随样本的随机性而变化；估计值是一个<em>数</em>——它是在特定观测下算出的结果。就像天气预报模型（估计量）vs 今天的预报结果（估计值），两者身份截然不同。我们评价估计量的好坏是在其作为随机变量的层面上（如无偏性、方差等），而具体的估计值只是该随机变量的一次实现。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.3 (常见估计量)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu, \\\\sigma^2)\\\\)。</p>
                        <p>（a）样本均值 \\\\(\\\\bar{X} = \\\\frac{1}{n}\\\\sum_{i=1}^n X_i\\\\) 是 \\\\(\\\\mu\\\\) 的估计量。</p>
                        <p>（b）样本方差 \\\\(S^2 = \\\\frac{1}{n-1}\\\\sum_{i=1}^n (X_i - \\\\bar{X})^2\\\\) 是 \\\\(\\\\sigma^2\\\\) 的估计量。</p>
                        <p>（c）样本中位数 \\\\(\\\\operatorname{Med}(X_1, \\\\ldots, X_n)\\\\) 也是 \\\\(\\\\mu\\\\) 的估计量。</p>
                        <p>对同一个参数，估计量并不唯一——我们需要准则来判断哪个更好（详见 Chapter 7）。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>点估计问题可以抽象为：给定统计模型 \\\\(\\\\{f(x; \\\\theta) : \\\\theta \\\\in \\\\Theta\\\\}\\\\) 和参数的函数 \\\\(g(\\\\theta)\\\\)，寻找统计量 \\\\(T(X_1, \\\\ldots, X_n)\\\\) 使得 \\\\(T\\\\) 在某种意义下"接近"\\\\(g(\\\\theta)\\\\)。本章介绍两种系统的构造方法：矩估计法和最大似然估计法。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="estimation-concept-viz"></div>
            `,
            visualizations: [
                {
                    id: 'estimation-concept-viz',
                    title: 'Interactive: 估计量的随机性',
                    description: '每次抽样产生不同的估计值——观察估计量围绕真实参数的波动',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 400, scale: 50, originX: 280, originY: 340});
                        var trueTheta = 3.0;
                        var n = 20;
                        var estimates = [];
                        var maxEstimates = 80;

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Title
                            viz.screenText('Sampling Distribution of X-bar', viz.width / 2, 20, viz.colors.white, 15);
                            viz.screenText('True \u03b8 = ' + trueTheta.toFixed(1) + ', n = ' + n, viz.width / 2, 40, viz.colors.text, 12);

                            // Draw x-axis
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(30, viz.originY);
                            ctx.lineTo(viz.width - 10, viz.originY);
                            ctx.stroke();

                            // Axis labels
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var v = 0; v <= 6; v++) {
                                var sx = viz.originX + (v - trueTheta) * viz.scale;
                                if (sx > 20 && sx < viz.width - 10) {
                                    ctx.fillText(v.toString(), sx, viz.originY + 4);
                                    ctx.beginPath();
                                    ctx.moveTo(sx, viz.originY - 3);
                                    ctx.lineTo(sx, viz.originY + 3);
                                    ctx.stroke();
                                }
                            }

                            // Draw true theta line
                            var trueX = viz.originX;
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 3]);
                            ctx.beginPath();
                            ctx.moveTo(trueX, 55);
                            ctx.lineTo(trueX, viz.originY);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            viz.screenText('\u03b8 = ' + trueTheta.toFixed(1), trueX, 52, viz.colors.green, 13);

                            // Draw theoretical density of X-bar
                            var sigma = 1.0;
                            var seMean = sigma / Math.sqrt(n);
                            var pdfScale = 250;
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i = 0; i <= 200; i++) {
                                var xVal = trueTheta - 3 * seMean + (6 * seMean) * i / 200;
                                var yVal = VizEngine.normalPDF(xVal, trueTheta, seMean);
                                var px = viz.originX + (xVal - trueTheta) * viz.scale;
                                var py = viz.originY - yVal * pdfScale;
                                if (i === 0) ctx.moveTo(px, py);
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Shade under the curve
                            ctx.fillStyle = viz.colors.blue + '22';
                            ctx.beginPath();
                            ctx.moveTo(viz.originX - 3 * seMean * viz.scale, viz.originY);
                            for (var i2 = 0; i2 <= 200; i2++) {
                                var xVal2 = trueTheta - 3 * seMean + (6 * seMean) * i2 / 200;
                                var yVal2 = VizEngine.normalPDF(xVal2, trueTheta, seMean);
                                var px2 = viz.originX + (xVal2 - trueTheta) * viz.scale;
                                var py2 = viz.originY - yVal2 * pdfScale;
                                ctx.lineTo(px2, py2);
                            }
                            ctx.lineTo(viz.originX + 3 * seMean * viz.scale, viz.originY);
                            ctx.closePath();
                            ctx.fill();

                            // Draw estimates as dots
                            for (var j = 0; j < estimates.length; j++) {
                                var ex = viz.originX + (estimates[j] - trueTheta) * viz.scale;
                                var alpha = Math.max(0.3, 1 - (estimates.length - 1 - j) * 0.015);
                                ctx.fillStyle = viz.colors.orange + Math.round(alpha * 255).toString(16).padStart(2, '0');
                                ctx.beginPath();
                                ctx.arc(ex, viz.originY - 8, 4, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // Stats
                            if (estimates.length > 0) {
                                var eMean = VizEngine.mean(estimates);
                                var eStd = estimates.length > 1 ? Math.sqrt(VizEngine.variance(estimates)) : 0;
                                viz.screenText('Samples drawn: ' + estimates.length + '  |  Mean of estimates: ' + eMean.toFixed(3) + '  |  SD: ' + eStd.toFixed(3), viz.width / 2, viz.height - 10, viz.colors.text, 11);
                            }
                        }

                        draw();

                        VizEngine.createButton(controls, 'Draw Sample', function() {
                            var sample = VizEngine.sampleArray(function() { return VizEngine.randomNormal(trueTheta, 1.0); }, n);
                            var est = VizEngine.mean(sample);
                            estimates.push(est);
                            if (estimates.length > maxEstimates) estimates.shift();
                            draw();
                        });

                        VizEngine.createButton(controls, 'Draw 20 Samples', function() {
                            for (var k = 0; k < 20; k++) {
                                var sample = VizEngine.sampleArray(function() { return VizEngine.randomNormal(trueTheta, 1.0); }, n);
                                estimates.push(VizEngine.mean(sample));
                            }
                            while (estimates.length > maxEstimates) estimates.shift();
                            draw();
                        });

                        VizEngine.createButton(controls, 'Reset', function() {
                            estimates = [];
                            draw();
                        });

                        VizEngine.createSlider(controls, 'n', 5, 100, n, 5, function(val) {
                            n = val;
                            estimates = [];
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\\\(X_1, \\\\ldots, X_n \\\\overset{\\\\text{iid}}{\\\\sim} U(0, \\\\theta)\\\\)，其中 \\\\(\\\\theta > 0\\\\)。请说明为什么 \\\\(T_1 = 2\\\\bar{X}\\\\) 和 \\\\(T_2 = \\\\frac{n+1}{n}X_{(n)}\\\\)（其中 \\\\(X_{(n)} = \\\\max_i X_i\\\\)）都是 \\\\(\\\\theta\\\\) 的估计量，并验证它们的无偏性。',
                    hint: '验证它们都是样本的函数，且不依赖于未知参数 \\\\(\\\\theta\\\\)。对于 \\\\(X_{(n)}\\\\)，使用最大次序统计量的 CDF：\\\\(P(X_{(n)} \\\\le x) = (x/\\\\theta)^n\\\\)。',
                    solution: '\\\\(T_1 = 2\\\\bar{X} = \\\\frac{2}{n}\\\\sum_{i=1}^n X_i\\\\) 只依赖于观测值，不含 \\\\(\\\\theta\\\\)，故是统计量。\\\\(T_2 = \\\\frac{n+1}{n}\\\\max_i X_i\\\\) 同理。由于 \\\\(\\\\mathbb{E}[\\\\bar{X}] = \\\\theta/2\\\\)，故 \\\\(\\\\mathbb{E}[T_1] = \\\\theta\\\\)。又 \\\\(X_{(n)}\\\\) 的 PDF 为 \\\\(f_{(n)}(x) = nx^{n-1}/\\\\theta^n\\\\)，故 \\\\(\\\\mathbb{E}[X_{(n)}] = \\\\frac{n}{n+1}\\\\theta\\\\)，于是 \\\\(\\\\mathbb{E}[T_2] = \\\\theta\\\\)。两者都是 \\\\(\\\\theta\\\\) 的无偏估计量。'
                },
                {
                    question: '估计量和估计值的核心区别是什么？为什么这个区别在统计推断中很重要？',
                    hint: '从随机变量和实数的角度思考。',
                    solution: '估计量是随机变量（样本的函数），其值随样本变化；估计值是代入具体观测后得到的实数。统计推断中我们关心估计量的抽样分布（如均值、方差、MSE），这些都是随机变量层面的性质，而非单一估计值能反映的。'
                },
                {
                    question: '设 \\\\(X_1, \\\\ldots, X_n \\\\overset{\\\\text{iid}}{\\\\sim} \\\\text{Exp}(\\\\lambda)\\\\)。写出 \\\\(\\\\lambda\\\\) 的两个不同的估计量。',
                    hint: '考虑用 \\\\(\\\\bar{X}\\\\) 和 \\\\(X_{(1)} = \\\\min_i X_i\\\\)。',
                    solution: '由 \\\\(\\\\mathbb{E}[X] = 1/\\\\lambda\\\\)，得 \\\\(T_1 = 1/\\\\bar{X}\\\\) 是一个自然的估计量。又 \\\\(X_{(1)} \\\\sim \\\\text{Exp}(n\\\\lambda)\\\\)，故 \\\\(\\\\mathbb{E}[X_{(1)}] = 1/(n\\\\lambda)\\\\)，于是 \\\\(T_2 = 1/(nX_{(1)})\\\\) 也是 \\\\(\\\\lambda\\\\) 的一个估计量（虽然不是无偏的）。'
                }
            ]
        },

        // ===== Section 2: Method of Moments =====
        {
            id: 'ch06-sec02',
            title: '矩估计法',
            content: `
                <h2>矩估计法 · Method of Moments</h2>

                <p><strong>矩估计法</strong>（Method of Moments, MoM）是最古老也是最直观的参数估计方法之一，由 Karl Pearson 在 1894 年提出。其基本思想极为简洁：用样本矩代替总体矩，建立方程组来解出参数的估计。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.4 (总体矩与样本矩 / Population and Sample Moments)</div>
                    <div class="env-body">
                        <p>设 \\\\(X\\\\) 具有分布 \\\\(f(x; \\\\theta)\\\\)，\\\\(\\\\theta \\\\in \\\\Theta \\\\subseteq \\\\mathbb{R}^k\\\\)。</p>
                        <p>第 \\\\(j\\\\) 阶<strong>总体矩</strong>：\\\\(\\\\mu_j(\\\\theta) = \\\\mathbb{E}_{\\\\theta}[X^j]\\\\)。</p>
                        <p>第 \\\\(j\\\\) 阶<strong>样本矩</strong>：\\\\(m_j = \\\\frac{1}{n}\\\\sum_{i=1}^n X_i^j\\\\)。</p>
                        <p>类似地，<strong>中心矩</strong>：总体中心矩 \\\\(\\\\mu_j' = \\\\mathbb{E}[(X - \\\\mathbb{E}[X])^j]\\\\)，样本中心矩 \\\\(m_j' = \\\\frac{1}{n}\\\\sum(X_i - \\\\bar{X})^j\\\\)。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.5 (矩估计量 / Method of Moments Estimator)</div>
                    <div class="env-body">
                        <p>设参数 \\\\(\\\\theta = (\\\\theta_1, \\\\ldots, \\\\theta_k)\\\\) 有 \\\\(k\\\\) 个分量。<strong>矩估计量</strong>是方程组</p>
                        \\\\[\\\\mu_j(\\\\theta) = m_j, \\\\quad j = 1, 2, \\\\ldots, k\\\\]
                        <p>的解 \\\\(\\\\tilde{\\\\theta}_{\\\\text{MoM}}\\\\)。即令前 \\\\(k\\\\) 阶总体矩等于对应的样本矩，解出 \\\\(\\\\theta\\\\) 的估计。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>矩估计法的逻辑很朴素：大数定律保证 \\\\(m_j \\\\xrightarrow{\\\\text{a.s.}} \\\\mu_j(\\\\theta)\\\\)，所以用 \\\\(m_j\\\\) 代替 \\\\(\\\\mu_j(\\\\theta)\\\\) 后解出的 \\\\(\\\\tilde{\\\\theta}\\\\) 应该在大样本下接近真实的 \\\\(\\\\theta\\\\)。这就是连续映射定理（Continuous Mapping Theorem）的直接应用。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.6 (正态分布的矩估计)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu, \\\\sigma^2)\\\\)，参数为 \\\\(\\\\theta = (\\\\mu, \\\\sigma^2)\\\\)，共 \\\\(k = 2\\\\) 个。</p>
                        <p>一阶矩方程：\\\\(\\\\mu_1 = \\\\mathbb{E}[X] = \\\\mu = m_1 = \\\\bar{X}\\\\)；</p>
                        <p>二阶矩方程：\\\\(\\\\mu_2 = \\\\mathbb{E}[X^2] = \\\\mu^2 + \\\\sigma^2 = m_2 = \\\\frac{1}{n}\\\\sum X_i^2\\\\)。</p>
                        <p>解得：\\\\(\\\\tilde{\\\\mu}_{\\\\text{MoM}} = \\\\bar{X}\\\\)，\\\\(\\\\tilde{\\\\sigma}^2_{\\\\text{MoM}} = m_2 - m_1^2 = \\\\frac{1}{n}\\\\sum_{i=1}^n (X_i - \\\\bar{X})^2\\\\)。</p>
                        <p>注意矩估计得到的方差估计量分母为 \\\\(n\\\\) 而非 \\\\(n-1\\\\)，因此是有偏的。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.7 (Gamma 分布的矩估计)</div>
                    <div class="env-body">
                        <p>设 \\\\(X \\\\sim \\\\text{Gamma}(\\\\alpha, \\\\beta)\\\\)，密度为 \\\\(f(x) = \\\\frac{\\\\beta^\\\\alpha}{\\\\Gamma(\\\\alpha)} x^{\\\\alpha-1} e^{-\\\\beta x}\\\\)，\\\\(x > 0\\\\)。</p>
                        <p>总体矩：\\\\(\\\\mu_1 = \\\\alpha / \\\\beta\\\\)，\\\\(\\\\mu_2 = \\\\alpha(\\\\alpha+1)/\\\\beta^2\\\\)。</p>
                        <p>令 \\\\(m_1 = \\\\alpha/\\\\beta\\\\)，\\\\(m_2 = \\\\alpha(\\\\alpha+1)/\\\\beta^2\\\\)。注意 \\\\(\\\\mu_2 - \\\\mu_1^2 = \\\\alpha/\\\\beta^2 = \\\\operatorname{Var}(X)\\\\)。</p>
                        <p>解得：\\\\(\\\\tilde{\\\\beta} = \\\\bar{X} / (m_2 - \\\\bar{X}^2)\\\\)，\\\\(\\\\tilde{\\\\alpha} = \\\\bar{X} \\\\cdot \\\\tilde{\\\\beta} = \\\\bar{X}^2 / (m_2 - \\\\bar{X}^2)\\\\)。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.8 (矩估计量的相合性 / Consistency of MoM)</div>
                    <div class="env-body">
                        <p>设矩方程 \\\\(\\\\mu_j(\\\\theta) = m_j\\\\) (\\\\(j=1,\\\\ldots,k\\\\)) 的解 \\\\(\\\\tilde{\\\\theta}_n\\\\) 是 \\\\(m_1,\\\\ldots,m_k\\\\) 的连续函数，且真参数 \\\\(\\\\theta_0\\\\) 是该方程组在 \\\\(\\\\Theta\\\\) 内的唯一解。若 \\\\(\\\\mathbb{E}[X^{2k}] < \\\\infty\\\\)，则</p>
                        \\\\[\\\\tilde{\\\\theta}_n \\\\xrightarrow{P} \\\\theta_0 \\\\quad (n \\\\to \\\\infty)\\\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p>由大数定律，\\\\(m_j \\\\xrightarrow{P} \\\\mu_j(\\\\theta_0)\\\\) 对每个 \\\\(j = 1, \\\\ldots, k\\\\)。令 \\\\(h\\\\) 为映射 \\\\((\\\\mu_1, \\\\ldots, \\\\mu_k) \\\\mapsto \\\\theta\\\\) 的逆映射。由连续映射定理（Continuous Mapping Theorem），\\\\(\\\\tilde{\\\\theta}_n = h(m_1, \\\\ldots, m_k) \\\\xrightarrow{P} h(\\\\mu_1(\\\\theta_0), \\\\ldots, \\\\mu_k(\\\\theta_0)) = \\\\theta_0\\\\)。</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>矩估计法的局限性：（1）当参数多时需高阶矩，高阶样本矩方差大，估计不稳定；（2）矩估计量未必落在参数空间内（如估计概率可能得到负值）；（3）矩估计一般不如 MLE 高效（渐近方差更大）。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="moment-matching-viz"></div>
            `,
            visualizations: [
                {
                    id: 'moment-matching-viz',
                    title: 'Interactive: 矩匹配',
                    description: '调整参数使理论分布的矩与样本矩匹配——观察直方图与密度曲线的拟合',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 400, scale: 60, originX: 60, originY: 340});
                        var trueAlpha = 3.0;
                        var trueBeta = 1.5;
                        var sampleData = [];
                        var n = 200;

                        // Marsaglia-Tsang method for Gamma random generation
                        function randomGamma(alpha) {
                            if (alpha < 1) {
                                var u = Math.random();
                                return randomGamma(alpha + 1) * Math.pow(u, 1 / alpha);
                            }
                            var d = alpha - 1 / 3;
                            var c = 1 / Math.sqrt(9 * d);
                            while (true) {
                                var x, v;
                                do {
                                    x = VizEngine.randomNormal();
                                    v = 1 + c * x;
                                } while (v <= 0);
                                v = v * v * v;
                                var u2 = Math.random();
                                if (u2 < 1 - 0.0331 * (x * x) * (x * x)) return d * v;
                                if (Math.log(u2) < 0.5 * x * x + d * (1 - v + Math.log(v))) return d * v;
                            }
                        }

                        function generateSample() {
                            sampleData = [];
                            for (var i = 0; i < n; i++) {
                                sampleData.push(randomGamma(trueAlpha) / trueBeta);
                            }
                        }
                        generateSample();

                        var fitAlpha = 2.0;
                        var fitBeta = 1.0;

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Compute sample moments
                            var sm1 = VizEngine.mean(sampleData);
                            var sm2 = VizEngine.mean(sampleData.map(function(x) { return x * x; }));
                            var sVar = sm2 - sm1 * sm1;

                            // MoM estimates
                            var momBeta = sVar > 0 ? sm1 / sVar : trueBeta;
                            var momAlpha = sm1 * momBeta;

                            // Build histogram
                            var xMax = 8;
                            var binCount = 25;
                            var binWidth = xMax / binCount;
                            var bins = [];
                            for (var b = 0; b < binCount; b++) {
                                bins.push({x: b * binWidth, width: binWidth, height: 0});
                            }
                            for (var i = 0; i < sampleData.length; i++) {
                                var idx = Math.floor(sampleData[i] / binWidth);
                                if (idx >= 0 && idx < binCount) {
                                    bins[idx].height += 1 / (n * binWidth);
                                }
                            }

                            // Draw histogram
                            viz.drawHistogram(bins, viz.colors.blue + '44', viz.colors.blue, 1);

                            // Draw fitted density
                            viz.drawFunction(function(x) {
                                return VizEngine.gammaPDF(x, fitAlpha, fitBeta);
                            }, 0.01, xMax, viz.colors.orange, 2.5);

                            // Draw MoM density
                            if (momAlpha > 0 && momBeta > 0) {
                                viz.drawFunction(function(x) {
                                    return VizEngine.gammaPDF(x, momAlpha, momBeta);
                                }, 0.01, xMax, viz.colors.green, 2, 200);
                            }

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(viz.originX, viz.originY);
                            ctx.lineTo(viz.width - 10, viz.originY);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(viz.originX, viz.originY);
                            ctx.lineTo(viz.originX, 10);
                            ctx.stroke();

                            // X-axis labels
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var v = 1; v <= 7; v++) {
                                var sx = viz.originX + v * viz.scale;
                                ctx.fillText(v.toString(), sx, viz.originY + 4);
                            }

                            // Legend and stats
                            viz.screenText('Gamma(\u03b1, \u03b2) Moment Matching', viz.width / 2, 18, viz.colors.white, 14);

                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'left';

                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('Manual fit: \u03b1=' + fitAlpha.toFixed(1) + ', \u03b2=' + fitBeta.toFixed(1), 80, 40);

                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('MoM: \u03b1=' + momAlpha.toFixed(2) + ', \u03b2=' + momBeta.toFixed(2), 80, 56);

                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('True: \u03b1=' + trueAlpha.toFixed(1) + ', \u03b2=' + trueBeta.toFixed(1), 80, 72);
                            ctx.fillText('Sample: m1=' + sm1.toFixed(3) + ', Var=' + sVar.toFixed(3), 80, 88);
                        }

                        draw();

                        VizEngine.createSlider(controls, '\u03b1 (fit)', 0.5, 8, fitAlpha, 0.1, function(val) {
                            fitAlpha = val;
                            draw();
                        });

                        VizEngine.createSlider(controls, '\u03b2 (fit)', 0.2, 5, fitBeta, 0.1, function(val) {
                            fitBeta = val;
                            draw();
                        });

                        VizEngine.createButton(controls, 'New Sample', function() {
                            generateSample();
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\\\(X_1, \\\\ldots, X_n \\\\overset{\\\\text{iid}}{\\\\sim} \\\\text{Beta}(a, b)\\\\)。求 \\\\(a\\\\) 和 \\\\(b\\\\) 的矩估计量。',
                    hint: 'Beta 分布的均值为 \\\\(a/(a+b)\\\\)，方差为 \\\\(ab/[(a+b)^2(a+b+1)]\\\\)。设 \\\\(\\\\bar{X} = m_1\\\\)，\\\\(v = m_2 - m_1^2\\\\)，解方程组。',
                    solution: '由 \\\\(\\\\mu_1 = a/(a+b)\\\\) 和 \\\\(\\\\operatorname{Var}(X) = ab/[(a+b)^2(a+b+1)]\\\\)，设 \\\\(\\\\bar{x} = m_1\\\\)，\\\\(v = m_2 - m_1^2\\\\)。令 \\\\(r = \\\\bar{x}(1 - \\\\bar{x})/v - 1\\\\)。则 \\\\(\\\\tilde{a} = \\\\bar{x} \\\\cdot r\\\\)，\\\\(\\\\tilde{b} = (1 - \\\\bar{x}) \\\\cdot r\\\\)。注意需要 \\\\(v < \\\\bar{x}(1-\\\\bar{x})\\\\) 才有正值解。'
                },
                {
                    question: '证明正态分布矩估计量 \\\\(\\\\tilde{\\\\sigma}^2 = \\\\frac{1}{n}\\\\sum(X_i - \\\\bar{X})^2\\\\) 的偏差，并说明它是渐近无偏的。',
                    hint: '利用 \\\\(\\\\mathbb{E}[\\\\sum(X_i - \\\\bar{X})^2] = (n-1)\\\\sigma^2\\\\)。',
                    solution: '\\\\(\\\\mathbb{E}[\\\\tilde{\\\\sigma}^2] = \\\\frac{n-1}{n}\\\\sigma^2\\\\)。偏差为 \\\\(\\\\mathbb{E}[\\\\tilde{\\\\sigma}^2] - \\\\sigma^2 = -\\\\sigma^2/n\\\\)，当 \\\\(n \\\\to \\\\infty\\\\) 时偏差趋于 0，即渐近无偏。'
                },
                {
                    question: '给出一个矩估计量落在参数空间之外的例子。',
                    hint: '考虑 \\\\(U(0, \\\\theta)\\\\) 分布或对参数有约束的分布。',
                    solution: '考虑估计 \\\\(N(\\\\mu, \\\\sigma^2)\\\\) 的方差：矩估计量 \\\\(\\\\tilde{\\\\sigma}^2 = m_2 - \\\\bar{X}^2\\\\)，当所有 \\\\(X_i\\\\) 相同时 \\\\(\\\\tilde{\\\\sigma}^2 = 0\\\\)，在参数空间 \\\\((0,\\\\infty)\\\\) 的边界上。更极端地，对于某些非标准参数化，MoM 解可能为负数。'
                }
            ]
        },

        // ===== Section 3: Maximum Likelihood Estimation =====
        {
            id: 'ch06-sec03',
            title: '最大似然估计',
            content: `
                <h2>最大似然估计 · Maximum Likelihood Estimation</h2>

                <p><strong>最大似然估计</strong>（Maximum Likelihood Estimation, MLE）是现代统计推断中最重要、最广泛使用的估计方法。它由 R.A. Fisher 在 1920 年代系统发展，其核心原则是：选择使观测数据出现概率最大的参数值。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.9 (似然函数 / Likelihood Function)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n\\\\) 是来自密度（或质量）函数 \\\\(f(x; \\\\theta)\\\\) 的随机样本。<strong>似然函数</strong>定义为联合密度视为 \\\\(\\\\theta\\\\) 的函数：</p>
                        \\\\[L(\\\\theta \\\\mid \\\\mathbf{x}) = \\\\prod_{i=1}^n f(x_i; \\\\theta), \\\\quad \\\\theta \\\\in \\\\Theta.\\\\]
                        <p><strong>对数似然函数</strong>：\\\\(\\\\ell(\\\\theta \\\\mid \\\\mathbf{x}) = \\\\log L(\\\\theta \\\\mid \\\\mathbf{x}) = \\\\sum_{i=1}^n \\\\log f(x_i; \\\\theta)\\\\)。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>似然函数和概率密度在数学形式上相同，但"视角"不同。密度 \\\\(f(x; \\\\theta)\\\\) 固定 \\\\(\\\\theta\\\\)、看 \\\\(x\\\\) 的变化；似然 \\\\(L(\\\\theta \\\\mid \\\\mathbf{x})\\\\) 固定数据 \\\\(\\\\mathbf{x}\\\\)、看 \\\\(\\\\theta\\\\) 的变化。似然不是关于 \\\\(\\\\theta\\\\) 的概率密度——它无需对 \\\\(\\\\theta\\\\) 积分为 1。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.10 (最大似然估计量 / MLE)</div>
                    <div class="env-body">
                        <p><strong>最大似然估计量</strong>（MLE）是使似然函数达到最大值的参数值：</p>
                        \\\\[\\\\hat{\\\\theta}_{\\\\text{MLE}} = \\\\underset{\\\\theta \\\\in \\\\Theta}{\\\\arg\\\\max} \\; L(\\\\theta \\\\mid \\\\mathbf{x}) = \\\\underset{\\\\theta \\\\in \\\\Theta}{\\\\arg\\\\max} \\; \\\\ell(\\\\theta \\\\mid \\\\mathbf{x}).\\\\]
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.11 (得分函数与 Fisher 信息 / Score and Fisher Information)</div>
                    <div class="env-body">
                        <p><strong>得分函数</strong>（score function）：\\\\(S(\\\\theta) = \\\\frac{\\\\partial}{\\\\partial \\\\theta} \\\\ell(\\\\theta \\\\mid \\\\mathbf{x}) = \\\\sum_{i=1}^n \\\\frac{\\\\partial}{\\\\partial \\\\theta} \\\\log f(x_i; \\\\theta)\\\\)。</p>
                        <p>MLE 通常满足<strong>似然方程</strong>（score equation）：\\\\(S(\\\\hat{\\\\theta}) = 0\\\\)。</p>
                        <p><strong>Fisher 信息</strong>（单个观测）：</p>
                        \\\\[I(\\\\theta) = \\\\operatorname{Var}_{\\\\theta}\\\\left[\\\\frac{\\\\partial}{\\\\partial\\\\theta}\\\\log f(X;\\\\theta)\\\\right] = -\\\\mathbb{E}_{\\\\theta}\\\\left[\\\\frac{\\\\partial^2}{\\\\partial\\\\theta^2}\\\\log f(X;\\\\theta)\\\\right]\\\\]
                        <p><strong>观测信息</strong>（observed information）：\\\\(J(\\\\theta) = -\\\\frac{\\\\partial^2}{\\\\partial \\\\theta^2} \\\\ell(\\\\theta \\\\mid \\\\mathbf{x})\\\\)。在 MLE 处 \\\\(J(\\\\hat{\\\\theta}) > 0\\\\) 表明似然在该点确实取到极大。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.12 (Bernoulli 分布的 MLE)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n \\\\overset{\\\\text{iid}}{\\\\sim} \\\\text{Bernoulli}(p)\\\\)。似然函数为</p>
                        \\\\[L(p) = p^{\\\\sum x_i}(1-p)^{n - \\\\sum x_i}.\\\\]
                        <p>对数似然：\\\\(\\\\ell(p) = \\\\left(\\\\sum x_i\\\\right) \\\\log p + \\\\left(n - \\\\sum x_i\\\\right) \\\\log(1-p)\\\\)。</p>
                        <p>得分方程：\\\\(\\\\frac{\\\\sum x_i}{p} - \\\\frac{n - \\\\sum x_i}{1 - p} = 0\\\\)。</p>
                        <p>解得 \\\\(\\\\hat{p}_{\\\\text{MLE}} = \\\\bar{x} = \\\\frac{1}{n}\\\\sum_{i=1}^n x_i\\\\)，即样本比例。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.13 (正态分布的 MLE)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu, \\\\sigma^2)\\\\)。对数似然为</p>
                        \\\\[\\\\ell(\\\\mu, \\\\sigma^2) = -\\\\frac{n}{2}\\\\log(2\\\\pi) - \\\\frac{n}{2}\\\\log(\\\\sigma^2) - \\\\frac{1}{2\\\\sigma^2}\\\\sum_{i=1}^n (x_i - \\\\mu)^2.\\\\]
                        <p>分别对 \\\\(\\\\mu\\\\) 和 \\\\(\\\\sigma^2\\\\) 求偏导并令其为零：</p>
                        \\\\[\\\\hat{\\\\mu}_{\\\\text{MLE}} = \\\\bar{x}, \\\\quad \\\\hat{\\\\sigma}^2_{\\\\text{MLE}} = \\\\frac{1}{n}\\\\sum_{i=1}^n(x_i - \\\\bar{x})^2.\\\\]
                        <p>注意 MLE 给出的方差估计量分母是 \\\\(n\\\\) 而非 \\\\(n-1\\\\)，因此是有偏的（但渐近无偏）。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.14 (Poisson 分布的 MLE)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n \\\\overset{\\\\text{iid}}{\\\\sim} \\\\text{Poisson}(\\\\lambda)\\\\)。似然函数：</p>
                        \\\\[L(\\\\lambda) = \\\\prod_{i=1}^n \\\\frac{\\\\lambda^{x_i} e^{-\\\\lambda}}{x_i!} = \\\\frac{\\\\lambda^{\\\\sum x_i} e^{-n\\\\lambda}}{\\\\prod x_i!}\\\\]
                        <p>对数似然：\\\\(\\\\ell(\\\\lambda) = (\\\\sum x_i)\\\\log\\\\lambda - n\\\\lambda - \\\\sum \\\\log(x_i!)\\\\)。令 \\\\(\\\\ell'(\\\\lambda) = \\\\sum x_i / \\\\lambda - n = 0\\\\)，得</p>
                        \\\\[\\\\hat{\\\\lambda}_{\\\\text{MLE}} = \\\\bar{x}\\\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.15 (均匀分布的 MLE -- 非正则情形)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n \\\\overset{\\\\text{iid}}{\\\\sim} U(0, \\\\theta)\\\\)。似然函数为</p>
                        \\\\[L(\\\\theta) = \\\\prod_{i=1}^n \\\\frac{1}{\\\\theta} \\\\cdot \\\\mathbf{1}(0 \\\\le x_i \\\\le \\\\theta) = \\\\theta^{-n} \\\\cdot \\\\mathbf{1}(\\\\theta \\\\ge x_{(n)}).\\\\]
                        <p>对于 \\\\(\\\\theta \\\\ge x_{(n)}\\\\)，\\\\(L(\\\\theta) = \\\\theta^{-n}\\\\) 是 \\\\(\\\\theta\\\\) 的递减函数，因此 \\\\(\\\\hat{\\\\theta}_{\\\\text{MLE}} = x_{(n)} = \\\\max(x_1, \\\\ldots, x_n)\\\\)。</p>
                        <p>这里 MLE 不能通过求解得分方程获得——似然函数在 \\\\(x_{(n)}\\\\) 处不可微。这是非正则情形的典型例子：支撑集依赖于参数。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="likelihood-surface-viz"></div>
            `,
            visualizations: [
                {
                    id: 'likelihood-surface-viz',
                    title: 'Interactive: 似然函数与 MLE',
                    description: '调整参数观察对数似然曲线的形状，MLE 标记在峰值处',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 400, scale: 1, originX: 60, originY: 360});
                        var trueMu = 3.0;
                        var trueSigma = 1.5;
                        var sampleSize = 15;
                        var sampleData = [];
                        var distType = 'normal';

                        function generateSample() {
                            if (distType === 'normal') {
                                sampleData = VizEngine.sampleArray(function() { return VizEngine.randomNormal(trueMu, trueSigma); }, sampleSize);
                            } else if (distType === 'poisson') {
                                sampleData = VizEngine.sampleArray(function() {
                                    var L = Math.exp(-trueMu);
                                    var k = 0;
                                    var p = 1;
                                    do { k++; p *= Math.random(); } while (p > L);
                                    return k - 1;
                                }, sampleSize);
                            } else {
                                sampleData = VizEngine.sampleArray(function() { return VizEngine.randomExponential(1 / trueMu); }, sampleSize);
                            }
                        }
                        generateSample();

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var W = viz.width;
                            var H = viz.height;
                            var padL = 60, padR = 20, padT = 50, padB = 50;
                            var plotW = W - padL - padR;
                            var plotH = H - padT - padB;

                            viz.screenText('Log-Likelihood: ' + (distType === 'normal' ? 'N(\u03bc, \u03c3\u00b2=' + trueSigma.toFixed(1) + '\u00b2)' : distType === 'poisson' ? 'Poisson(\u03bb)' : 'Exp(\u03bb)'), W / 2, 18, viz.colors.white, 14);
                            viz.screenText('n = ' + sampleSize, W / 2, 36, viz.colors.text, 11);

                            // Compute log-likelihood over parameter range
                            var paramMin, paramMax, paramLabel;
                            if (distType === 'normal') {
                                paramMin = Math.max(0.5, VizEngine.mean(sampleData) - 3);
                                paramMax = VizEngine.mean(sampleData) + 3;
                                paramLabel = '\u03bc';
                            } else if (distType === 'poisson') {
                                paramMin = 0.1;
                                paramMax = Math.max(8, VizEngine.mean(sampleData) * 2.5);
                                paramLabel = '\u03bb';
                            } else {
                                paramMin = 0.1;
                                paramMax = Math.max(4, 2 / VizEngine.mean(sampleData) * 3);
                                paramLabel = '\u03bb';
                            }

                            var nPts = 300;
                            var llValues = [];
                            var params = [];
                            for (var i = 0; i <= nPts; i++) {
                                var th = paramMin + (paramMax - paramMin) * i / nPts;
                                params.push(th);
                                var ll = 0;
                                for (var j = 0; j < sampleData.length; j++) {
                                    var lf;
                                    if (distType === 'normal') {
                                        lf = Math.log(VizEngine.normalPDF(sampleData[j], th, trueSigma));
                                    } else if (distType === 'poisson') {
                                        var kk = Math.round(sampleData[j]);
                                        var logp = -th + kk * Math.log(th);
                                        for (var m = 2; m <= kk; m++) logp -= Math.log(m);
                                        lf = logp;
                                    } else {
                                        lf = sampleData[j] >= 0 ? Math.log(th) - th * sampleData[j] : -Infinity;
                                    }
                                    ll += lf;
                                }
                                llValues.push(ll);
                            }

                            // Find MLE
                            var bestIdx = 0;
                            for (var i2 = 1; i2 < llValues.length; i2++) {
                                if (llValues[i2] > llValues[bestIdx]) bestIdx = i2;
                            }
                            var mleParam = params[bestIdx];
                            var mleLL = llValues[bestIdx];

                            // Scale for plotting
                            var llMin = mleLL - 15;
                            var llMax = mleLL + 2;

                            function toPlotX(th) { return padL + (th - paramMin) / (paramMax - paramMin) * plotW; }
                            function toPlotY(ll) { return padT + (1 - (ll - llMin) / (llMax - llMin)) * plotH; }

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(padL, padT);
                            ctx.lineTo(padL, padT + plotH);
                            ctx.lineTo(padL + plotW, padT + plotH);
                            ctx.stroke();

                            // X-axis labels
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            var nTicks = 6;
                            for (var t = 0; t <= nTicks; t++) {
                                var tv = paramMin + (paramMax - paramMin) * t / nTicks;
                                var tx = toPlotX(tv);
                                ctx.fillText(tv.toFixed(1), tx, padT + plotH + 5);
                                ctx.beginPath();
                                ctx.moveTo(tx, padT + plotH);
                                ctx.lineTo(tx, padT + plotH + 3);
                                ctx.stroke();
                            }
                            viz.screenText(paramLabel, padL + plotW / 2, H - 5, viz.colors.text, 12);

                            // Y-axis label
                            ctx.save();
                            ctx.translate(12, padT + plotH / 2);
                            ctx.rotate(-Math.PI / 2);
                            ctx.textAlign = 'center';
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('log L(' + paramLabel + ')', 0, 0);
                            ctx.restore();

                            // Y-axis ticks
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'middle';
                            var yTickStep = Math.max(1, Math.round((llMax - llMin) / 5));
                            for (var yt = Math.ceil(llMin); yt <= llMax; yt += yTickStep) {
                                var yy = toPlotY(yt);
                                if (yy > padT && yy < padT + plotH) {
                                    ctx.fillText(yt.toFixed(0), padL - 5, yy);
                                    ctx.strokeStyle = viz.colors.grid;
                                    ctx.beginPath();
                                    ctx.moveTo(padL, yy);
                                    ctx.lineTo(padL + plotW, yy);
                                    ctx.stroke();
                                }
                            }

                            // Plot log-likelihood curve
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;
                            for (var i3 = 0; i3 <= nPts; i3++) {
                                var px = toPlotX(params[i3]);
                                var py = toPlotY(llValues[i3]);
                                if (py < padT || py > padT + plotH) {
                                    started = false;
                                    continue;
                                }
                                if (!started) { ctx.moveTo(px, py); started = true; }
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Mark MLE
                            var mleX = toPlotX(mleParam);
                            var mleY = toPlotY(mleLL);
                            ctx.strokeStyle = viz.colors.red;
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath();
                            ctx.moveTo(mleX, mleY);
                            ctx.lineTo(mleX, padT + plotH);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            ctx.fillStyle = viz.colors.red;
                            ctx.beginPath();
                            ctx.arc(mleX, mleY, 6, 0, Math.PI * 2);
                            ctx.fill();

                            viz.screenText('MLE: ' + paramLabel + ' = ' + mleParam.toFixed(3), mleX, mleY - 16, viz.colors.red, 12);

                            // Show sample data points on x-axis
                            for (var d = 0; d < sampleData.length; d++) {
                                var dx = toPlotX(sampleData[d]);
                                if (dx >= padL && dx <= padL + plotW) {
                                    ctx.fillStyle = viz.colors.orange + '88';
                                    ctx.beginPath();
                                    ctx.arc(dx, padT + plotH + 22, 3, 0, Math.PI * 2);
                                    ctx.fill();
                                }
                            }
                            viz.screenText('data', padL - 5, padT + plotH + 22, viz.colors.orange, 9, 'right');
                        }

                        draw();

                        VizEngine.createSlider(controls, 'n', 5, 60, sampleSize, 5, function(val) {
                            sampleSize = val;
                            generateSample();
                            draw();
                        });

                        VizEngine.createButton(controls, 'New Sample', function() {
                            generateSample();
                            draw();
                        });

                        VizEngine.createButton(controls, 'Normal', function() {
                            distType = 'normal';
                            trueMu = 3.0;
                            generateSample();
                            draw();
                        });

                        VizEngine.createButton(controls, 'Poisson', function() {
                            distType = 'poisson';
                            trueMu = 3.0;
                            generateSample();
                            draw();
                        });

                        VizEngine.createButton(controls, 'Exponential', function() {
                            distType = 'exponential';
                            trueMu = 1.5;
                            generateSample();
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\\\(X_1, \\\\ldots, X_n \\\\overset{\\\\text{iid}}{\\\\sim} \\\\text{Exp}(\\\\lambda)\\\\)，密度 \\\\(f(x) = \\\\lambda e^{-\\\\lambda x}\\\\)，\\\\(x > 0\\\\)。求 \\\\(\\\\lambda\\\\) 的 MLE 和 Fisher 信息 \\\\(I(\\\\lambda)\\\\)。',
                    hint: '对数似然为 \\\\(\\\\ell(\\\\lambda) = n \\\\log \\\\lambda - \\\\lambda \\\\sum x_i\\\\)。',
                    solution: '得分方程 \\\\(n/\\\\lambda - \\\\sum x_i = 0\\\\) 给出 \\\\(\\\\hat{\\\\lambda} = n / \\\\sum x_i = 1/\\\\bar{x}\\\\)。Fisher 信息：\\\\(\\\\frac{\\\\partial^2}{\\\\partial\\\\lambda^2}\\\\log f(X|\\\\lambda) = -1/\\\\lambda^2\\\\)，故 \\\\(I(\\\\lambda) = 1/\\\\lambda^2\\\\)。观测信息 \\\\(J(\\\\hat{\\\\lambda}) = n/\\\\hat{\\\\lambda}^2 = n\\\\bar{x}^2\\\\)。'
                },
                {
                    question: '为什么在实际计算中我们通常最大化对数似然 \\\\(\\\\ell(\\\\theta)\\\\) 而不是似然 \\\\(L(\\\\theta)\\\\)？',
                    hint: '考虑数值稳定性和计算便利性。',
                    solution: '（1）似然是 \\\\(n\\\\) 个概率的乘积，当 \\\\(n\\\\) 大时极易导致数值下溢（underflow）；取对数后变为求和，数值稳定。（2）对数将乘积化为求和，求导更简便。（3）对数是严格递增函数，不改变极值点位置。'
                },
                {
                    question: '说明 \\\\(U(0, \\\\theta)\\\\) 分布的对数似然在 MLE 处不可微，解释为什么标准得分方程方法失效。',
                    hint: '写出 \\\\(L(\\\\theta)\\\\) 并辨识约束条件。',
                    solution: '\\\\(L(\\\\theta) = \\\\theta^{-n}\\\\) 对 \\\\(\\\\theta \\\\ge x_{(n)}\\\\)，\\\\(L(\\\\theta) = 0\\\\) 对 \\\\(\\\\theta < x_{(n)}\\\\)。在约束区域内 \\\\(\\\\ell\'(\\\\theta) = -n/\\\\theta < 0\\\\)，严格递减，最大值在边界 \\\\(\\\\hat{\\\\theta} = x_{(n)}\\\\) 处取得。该点不可微，得分方程 \\\\(\\\\ell\'(\\\\theta) = 0\\\\) 无解。根本原因：支撑集 \\\\([0, \\\\theta]\\\\) 依赖于 \\\\(\\\\theta\\\\)，违反了正则条件。'
                }
            ]
        },

        // ===== Section 4: Properties of MLE =====
        {
            id: 'ch06-sec04',
            title: 'MLE的性质',
            content: `
                <h2>MLE的性质 · Properties of MLE</h2>

                <p>最大似然估计之所以备受推崇，是因为它在大样本下具有一系列优良的理论性质。本节讨论 MLE 的四个核心性质：不变性、相合性、渐近正态性和渐近有效性。</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.16 (MLE 的不变性 / Invariance of MLE)</div>
                    <div class="env-body">
                        <p>设 \\\\(\\\\hat{\\\\theta}\\\\) 是 \\\\(\\\\theta\\\\) 的 MLE，\\\\(g\\\\) 是 \\\\(\\\\theta\\\\) 的函数。则 \\\\(g(\\\\theta)\\\\) 的 MLE 为 \\\\(g(\\\\hat{\\\\theta})\\\\)。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>设 \\\\(g\\\\) 是一一映射。令 \\\\(\\\\eta = g(\\\\theta)\\\\)，则重参数化后的似然函数为 \\\\(L^*(\\\\eta) = L(g^{-1}(\\\\eta))\\\\)。由于 \\\\(L\\\\) 在 \\\\(\\\\hat{\\\\theta}\\\\) 处取最大值，\\\\(L^*\\\\) 在 \\\\(g(\\\\hat{\\\\theta})\\\\) 处取最大值。</p>
                        <p>对一般（非一一）的 \\\\(g\\\\)，定义诱导似然 \\\\(L^*(\\\\eta) = \\\\sup_{\\\\theta: g(\\\\theta) = \\\\eta} L(\\\\theta)\\\\)。由 \\\\(L^*(g(\\\\hat{\\\\theta})) \\\\ge L(\\\\hat{\\\\theta}) = \\\\sup_{\\\\theta} L(\\\\theta) \\\\ge L^*(\\\\eta)\\\\) 对一切 \\\\(\\\\eta\\\\)，故 \\\\(g(\\\\hat{\\\\theta})\\\\) 最大化 \\\\(L^*\\\\)。</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.17</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu, \\\\sigma^2)\\\\)。我们已知 \\\\(\\\\hat{\\\\sigma}^2_{\\\\text{MLE}} = \\\\frac{1}{n}\\\\sum(X_i - \\\\bar{X})^2\\\\)。</p>
                        <p>由不变性：</p>
                        <ul>
                            <li>标准差 \\\\(\\\\sigma\\\\) 的 MLE 为 \\\\(\\\\hat{\\\\sigma}_{\\\\text{MLE}} = \\\\sqrt{\\\\hat{\\\\sigma}^2_{\\\\text{MLE}}}\\\\)；</li>
                            <li>\\\\(P(X > 0)\\\\) 的 MLE 为 \\\\(1 - \\\\Phi(-\\\\hat{\\\\mu}/\\\\hat{\\\\sigma}) = \\\\Phi(\\\\bar{X}/\\\\hat{\\\\sigma})\\\\)；</li>
                            <li>变异系数 \\\\(\\\\sigma/\\\\mu\\\\) 的 MLE 为 \\\\(\\\\hat{\\\\sigma}_{\\\\text{MLE}} / \\\\bar{X}\\\\)。</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.18 (MLE 的相合性 / Consistency of MLE)</div>
                    <div class="env-body">
                        <p>在适当正则条件下（参数空间 \\\\(\\\\Theta\\\\) 紧，\\\\(\\\\theta_0\\\\) 为真参数的内点，KL 散度可辨识性等），MLE 是相合的：</p>
                        \\\\[\\\\hat{\\\\theta}_n \\\\xrightarrow{P} \\\\theta_0 \\\\quad \\\\text{as } n \\\\to \\\\infty.\\\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>相合性的直觉：归一化的对数似然 \\\\(\\\\frac{1}{n}\\\\ell(\\\\theta) = \\\\frac{1}{n}\\\\sum \\\\log f(X_i; \\\\theta)\\\\) 由大数定律收敛到 \\\\(\\\\mathbb{E}_{\\\\theta_0}[\\\\log f(X; \\\\theta)]\\\\)，而后者在 \\\\(\\\\theta = \\\\theta_0\\\\) 处取唯一最大值（这是 KL 散度 \\\\(D_{\\\\text{KL}}(f_{\\\\theta_0} \\\\| f_{\\\\theta}) \\\\ge 0\\\\) 的推论，等号当且仅当 \\\\(\\\\theta = \\\\theta_0\\\\)）。因此 MLE 作为有限样本最大化者，在 \\\\(n \\\\to \\\\infty\\\\) 时趋向总体最大化者 \\\\(\\\\theta_0\\\\)。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.19 (MLE 的渐近正态性 / Asymptotic Normality)</div>
                    <div class="env-body">
                        <p>在正则条件下，设 \\\\(I(\\\\theta) = \\\\mathbb{E}_{\\\\theta}\\\\left[-\\\\frac{\\\\partial^2}{\\\\partial\\\\theta^2}\\\\log f(X;\\\\theta)\\\\right]\\\\) 为 Fisher 信息。则</p>
                        \\\\[\\\\sqrt{n}(\\\\hat{\\\\theta}_n - \\\\theta_0) \\\\xrightarrow{d} N(0, I(\\\\theta_0)^{-1}).\\\\]
                        <p>等价地，\\\\(\\\\hat{\\\\theta}_n \\\\approx N\\\\left(\\\\theta_0, \\\\frac{1}{nI(\\\\theta_0)}\\\\right)\\\\) 对大 \\\\(n\\\\) 近似成立。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (渐近有效性)</div>
                    <div class="env-body">
                        <p>渐近正态性定理告诉我们 MLE 的渐近方差为 \\\\(1/(nI(\\\\theta_0))\\\\)，恰好达到了 Cramer-Rao 下界。这意味着 MLE 是<strong>渐近有效</strong>的——在正则条件下，没有其他相合估计量的渐近方差能比 MLE 更小。这就是 Fisher 所说的 MLE 的"渐近效率"。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.20 (MLE 的等变性 / Equivariance)</div>
                    <div class="env-body">
                        <p>设参数空间经过可逆变换 \\\\(\\\\eta = h(\\\\theta)\\\\)，模型重新参数化为 \\\\(f(x; h^{-1}(\\\\eta))\\\\)。则在新参数化下的 MLE 为 \\\\(\\\\hat{\\\\eta} = h(\\\\hat{\\\\theta})\\\\)。</p>
                        <p>换言之，MLE 在参数的重新参数化下是等变的：先估计后变换 = 先变换后估计。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="mle-convergence-viz"></div>
            `,
            visualizations: [
                {
                    id: 'mle-convergence-viz',
                    title: 'Interactive: MLE 收敛性与渐近正态性',
                    description: '随着样本量增大，MLE 的抽样分布集中于真实参数，并趋近正态分布',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 400, originX: 280, originY: 340, scale: 80});

                        var trueLambda = 2;
                        var n = 20;

                        function simulate() {
                            var nRep = 2000;

                            // Simulate nRep MLEs from Exponential(lambda), MLE = 1/xbar
                            var mles = [];
                            for (var r = 0; r < nRep; r++) {
                                var sum = 0;
                                for (var i = 0; i < n; i++) {
                                    sum += VizEngine.randomExponential(trueLambda);
                                }
                                var xbar = sum / n;
                                if (xbar > 0) mles.push(1 / xbar);
                            }

                            // Fisher information for Exp(lambda): I(lambda) = 1/lambda^2
                            var asympVar = 1 / (n * (1 / (trueLambda * trueLambda)));
                            var asympSD = Math.sqrt(asympVar);

                            viz.clear();

                            // Histogram of MLEs
                            var lo = trueLambda - 4 * asympSD;
                            var hi = trueLambda + 4 * asympSD;
                            if (lo < 0) lo = 0;
                            var nBins = 40;
                            var binW = (hi - lo) / nBins;
                            var bins = [];
                            for (var b = 0; b < nBins; b++) {
                                var left = lo + b * binW;
                                var right = left + binW;
                                var cnt = 0;
                                for (var j = 0; j < mles.length; j++) {
                                    if (mles[j] >= left && mles[j] < right) cnt++;
                                }
                                bins.push({x: left - trueLambda, width: binW, height: cnt / (nRep * binW)});
                            }
                            viz.drawHistogram(bins, viz.colors.teal + '55', viz.colors.teal, 1);

                            // Asymptotic normal density
                            var normPDF = function(x) { return VizEngine.normalPDF(x, 0, asympSD); };
                            viz.drawFunction(normPDF, lo - trueLambda, hi - trueLambda, viz.colors.orange, 2.5);

                            // True value line
                            viz.drawSegment(0, 0, 0, normPDF(0) * 1.1, viz.colors.green, 2, true);
                            viz.drawText('lambda=' + trueLambda.toFixed(1), 0, normPDF(0) * 1.1 + 0.15, viz.colors.green, 12);

                            // Axis
                            viz.drawSegment(lo - trueLambda, 0, hi - trueLambda, 0, viz.colors.axis, 1);

                            // Info
                            var mleMean = VizEngine.mean(mles);
                            var mleSD = Math.sqrt(VizEngine.sampleVariance(mles));
                            viz.screenText('Sampling distribution of MLE (centered at true value)', 280, 15, viz.colors.text, 12);
                            viz.screenText('Histogram: simulated MLEs (n=' + n + ', ' + nRep + ' reps)', 280, 32, viz.colors.teal, 11);
                            viz.screenText('Orange: N(0, 1/(nI)) asymptotic approx', 280, 49, viz.colors.orange, 11);
                            viz.screenText('Emp mean=' + mleMean.toFixed(3) + ', Emp SD=' + mleSD.toFixed(3) + ', Asymp SD=' + asympSD.toFixed(3), 280, 66, viz.colors.text, 10);
                        }

                        simulate();

                        VizEngine.createSlider(controls, 'True lambda', 0.5, 5, trueLambda, 0.1, function(val) {
                            trueLambda = val;
                            simulate();
                        });

                        VizEngine.createSlider(controls, 'n', 5, 200, n, 5, function(val) {
                            n = val;
                            simulate();
                        });

                        VizEngine.createButton(controls, 'Run Simulation', function() {
                            simulate();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\\\(X_1, \\\\ldots, X_n \\\\overset{\\\\text{iid}}{\\\\sim} N(\\\\mu, \\\\sigma^2)\\\\)。利用 MLE 的不变性，求 \\\\(P(X > 0)\\\\) 的 MLE。',
                    hint: '\\\\(P(X > 0) = 1 - \\\\Phi(-\\\\mu/\\\\sigma)\\\\)，其中 \\\\(\\\\Phi\\\\) 是标准正态 CDF。',
                    solution: '由不变性，\\\\(P(X > 0)\\\\) 的 MLE 为 \\\\(1 - \\\\Phi(-\\\\hat{\\\\mu}/\\\\hat{\\\\sigma}) = \\\\Phi(\\\\bar{X}/\\\\hat{\\\\sigma})\\\\)，其中 \\\\(\\\\hat{\\\\sigma} = \\\\sqrt{\\\\frac{1}{n}\\\\sum(X_i - \\\\bar{X})^2}\\\\)。'
                },
                {
                    question: '利用不变性，求 \\\\(\\\\text{Exp}(\\\\lambda)\\\\) 分布中位数的 MLE。已知 \\\\(X_1, \\\\ldots, X_n \\\\overset{\\\\text{iid}}{\\\\sim} \\\\text{Exp}(\\\\lambda)\\\\)。',
                    hint: '\\\\(\\\\text{Exp}(\\\\lambda)\\\\) 的中位数为 \\\\(\\\\log 2 / \\\\lambda\\\\)。MLE of \\\\(\\\\lambda\\\\) is \\\\(1/\\\\bar{X}\\\\)。',
                    solution: 'MLE of \\\\(\\\\lambda\\\\) is \\\\(\\\\hat{\\\\lambda} = 1/\\\\bar{X}\\\\)。中位数 \\\\(g(\\\\lambda) = \\\\log 2 / \\\\lambda\\\\)。由不变性，中位数的 MLE 为 \\\\(g(\\\\hat{\\\\lambda}) = \\\\log 2 \\\\cdot \\\\bar{X}\\\\)。'
                },
                {
                    question: '解释为什么 MLE 在 \\\\(U(0, \\\\theta)\\\\) 模型中不具有渐近正态性。MLE 的实际极限分布是什么？',
                    hint: '检查正则条件是否满足。考虑 \\\\(n(\\\\theta - X_{(n)})\\\\) 的极限。',
                    solution: '正则条件要求支撑集不依赖于参数。但 \\\\(U(0, \\\\theta)\\\\) 的支撑集 \\\\([0, \\\\theta]\\\\) 随 \\\\(\\\\theta\\\\) 变化，违反正则性。实际上 \\\\(\\\\hat{\\\\theta} = X_{(n)}\\\\) 的收敛速度为 \\\\(O(1/n)\\\\) 而非 \\\\(O(1/\\\\sqrt{n})\\\\)，且极限分布为指数分布而非正态分布：\\\\(n(\\\\theta - X_{(n)}) \\\\xrightarrow{d} \\\\text{Exp}(1/\\\\theta)\\\\)。'
                }
            ]
        },

        // ===== Section 5: EM Algorithm =====
        {
            id: 'ch06-sec05',
            title: 'EM算法',
            content: `
                <h2>EM算法 · The EM Algorithm</h2>

                <p>在许多实际问题中，似然函数的直接最大化是困难的——可能因为含有<strong>潜变量</strong>（latent variables）或<strong>缺失数据</strong>，或者似然函数的解析形式过于复杂。<strong>EM 算法</strong>（Expectation-Maximization Algorithm，Dempster, Laird & Rubin, 1977）提供了一种优雅的迭代求解框架。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.21 (不完全数据与完全数据 / Incomplete and Complete Data)</div>
                    <div class="env-body">
                        <p>设<strong>观测数据</strong>（不完全数据）为 \\\\(\\\\mathbf{X}\\\\)，<strong>潜变量</strong>为 \\\\(\\\\mathbf{Z}\\\\)，<strong>完全数据</strong>为 \\\\((\\\\mathbf{X}, \\\\mathbf{Z})\\\\)。</p>
                        <ul>
                            <li><strong>完全数据似然</strong>：\\\\(L_c(\\\\theta) = f(\\\\mathbf{X}, \\\\mathbf{Z}; \\\\theta)\\\\)，通常形式简单。</li>
                            <li><strong>不完全数据似然</strong>：\\\\(L(\\\\theta) = f(\\\\mathbf{X}; \\\\theta) = \\\\int f(\\\\mathbf{X}, \\\\mathbf{Z}; \\\\theta)\\\\,d\\\\mathbf{Z}\\\\)，常因积分（或求和）而棘手。</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.22 (EM 算法)</div>
                    <div class="env-body">
                        <p>给定当前参数估计 \\\\(\\\\theta^{(t)}\\\\)，EM 算法的第 \\\\((t+1)\\\\) 步为：</p>
                        <p><strong>E-step（期望步）</strong>：计算完全数据对数似然关于潜变量条件分布的期望</p>
                        \\\\[Q(\\\\theta \\\\mid \\\\theta^{(t)}) = \\\\mathbb{E}_{\\\\mathbf{Z} \\\\mid \\\\mathbf{X}, \\\\theta^{(t)}} \\\\left[ \\\\log f(\\\\mathbf{X}, \\\\mathbf{Z}; \\\\theta) \\\\right].\\\\]
                        <p><strong>M-step（最大化步）</strong>：最大化 \\\\(Q\\\\)-函数</p>
                        \\\\[\\\\theta^{(t+1)} = \\\\underset{\\\\theta}{\\\\arg\\\\max} \\; Q(\\\\theta \\\\mid \\\\theta^{(t)}).\\\\]
                        <p>重复直到收敛：\\\\(\\\\|\\\\theta^{(t+1)} - \\\\theta^{(t)}\\\\| < \\\\varepsilon\\\\)。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.23 (EM 单调性)</div>
                    <div class="env-body">
                        <p>EM 算法的每一步迭代不降低不完全数据对数似然：</p>
                        \\\\[\\\\ell(\\\\theta^{(t+1)}) \\\\ge \\\\ell(\\\\theta^{(t)}).\\\\]
                        <p>等号成立当且仅当 \\\\(Q(\\\\theta|\\\\theta^{(t)})\\\\) 在 \\\\(\\\\theta^{(t)}\\\\) 处已取最大值。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p>对数似然可分解为：</p>
                        \\\\[\\\\ell(\\\\theta) = Q(\\\\theta|\\\\theta^{(t)}) - H(\\\\theta|\\\\theta^{(t)})\\\\]
                        <p>其中 \\\\(H(\\\\theta|\\\\theta^{(t)}) = \\\\mathbb{E}_{\\\\mathbf{Z}|\\\\mathbf{X},\\\\theta^{(t)}}[\\\\log f(\\\\mathbf{Z}|\\\\mathbf{X},\\\\theta)]\\\\)。由 Gibbs 不等式（Jensen 不等式的推论），\\\\(H(\\\\theta|\\\\theta^{(t)}) \\\\le H(\\\\theta^{(t)}|\\\\theta^{(t)})\\\\)。因此：</p>
                        \\\\[\\\\ell(\\\\theta^{(t+1)}) - \\\\ell(\\\\theta^{(t)}) \\\\ge Q(\\\\theta^{(t+1)}|\\\\theta^{(t)}) - Q(\\\\theta^{(t)}|\\\\theta^{(t)}) \\\\ge 0\\\\]
                        <p>第二个不等号来自 M-step 的最大化。</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.24 (高斯混合模型的 EM)</div>
                    <div class="env-body">
                        <p>设观测 \\\\(X_1, \\\\ldots, X_n\\\\) 来自两个高斯分量的混合：</p>
                        \\\\[f(x; \\\\theta) = \\\\pi_1 \\\\phi(x; \\\\mu_1, \\\\sigma_1^2) + \\\\pi_2 \\\\phi(x; \\\\mu_2, \\\\sigma_2^2),\\\\]
                        <p>其中 \\\\(\\\\pi_1 + \\\\pi_2 = 1\\\\)，\\\\(\\\\phi(\\\\cdot; \\\\mu, \\\\sigma^2)\\\\) 是正态密度。引入潜变量 \\\\(Z_i \\\\in \\\\{1, 2\\\\}\\\\) 表示第 \\\\(i\\\\) 个数据来自哪个分量。</p>
                        <p><strong>E-step</strong>：计算后验"责任"（responsibility）</p>
                        \\\\[\\\\gamma_{ik}^{(t)} = P(Z_i = k \\\\mid X_i, \\\\theta^{(t)}) = \\\\frac{\\\\pi_k^{(t)} \\\\phi(X_i; \\\\mu_k^{(t)}, (\\\\sigma_k^{(t)})^2)}{\\\\sum_{j=1}^2 \\\\pi_j^{(t)} \\\\phi(X_i; \\\\mu_j^{(t)}, (\\\\sigma_j^{(t)})^2)}.\\\\]
                        <p><strong>M-step</strong>：更新参数</p>
                        \\\\[n_k = \\\\sum_{i=1}^n \\\\gamma_{ik}, \\\\quad \\\\mu_k^{(t+1)} = \\\\frac{1}{n_k}\\\\sum_{i=1}^n \\\\gamma_{ik} X_i, \\\\quad (\\\\sigma_k^{(t+1)})^2 = \\\\frac{1}{n_k}\\\\sum_{i=1}^n \\\\gamma_{ik}(X_i - \\\\mu_k^{(t+1)})^2, \\\\quad \\\\pi_k^{(t+1)} = n_k / n.\\\\]
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>EM 算法的局限性：（1）只保证收敛到<strong>局部极大值</strong>（或鞍点），不一定是全局 MLE；（2）收敛速度可能很慢（线性收敛）；（3）结果依赖于初始值。实践中通常多次随机初始化（random restarts），取似然最大的解。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (EM 的推广)</div>
                    <div class="env-body">
                        <p>EM 框架有许多变体：(1) <strong>Generalized EM (GEM)</strong>: M-step 只需提升（而非最大化）\\\\(Q\\\\) 函数；(2) <strong>Monte Carlo EM</strong>: E-step 用 MCMC 近似无法解析计算的期望；(3) <strong>Variational EM</strong>: 将 E-step 推广为变分推断。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="em-gaussian-mixture-viz"></div>
            `,
            visualizations: [
                {
                    id: 'em-gaussian-mixture-viz',
                    title: 'Interactive: EM 算法 -- 高斯混合模型',
                    description: '观察 E-step 和 M-step 如何交替进行，逐步分离两个高斯分量',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 420, scale: 50, originX: 60, originY: 370});
                        var ctx = viz.ctx;

                        // True parameters
                        var trueMu1 = 1.5, trueSigma1 = 0.6;
                        var trueMu2 = 4.0, trueSigma2 = 0.8;
                        var truePi1 = 0.4;
                        var nData = 120;
                        var data = [];

                        // Current EM parameters
                        var mu1, mu2, sig1, sig2, pi1;
                        var gamma = [];
                        var iteration = 0;

                        function generateData() {
                            data = [];
                            for (var i = 0; i < nData; i++) {
                                if (Math.random() < truePi1) {
                                    data.push(VizEngine.randomNormal(trueMu1, trueSigma1));
                                } else {
                                    data.push(VizEngine.randomNormal(trueMu2, trueSigma2));
                                }
                            }
                        }

                        function initEM() {
                            mu1 = VizEngine.mean(data) - 1 + Math.random() * 0.5;
                            mu2 = VizEngine.mean(data) + 1 + Math.random() * 0.5;
                            sig1 = 1.0;
                            sig2 = 1.0;
                            pi1 = 0.5;
                            gamma = new Array(nData).fill(0.5);
                            iteration = 0;
                        }

                        function eStep() {
                            for (var i = 0; i < nData; i++) {
                                var p1 = pi1 * VizEngine.normalPDF(data[i], mu1, sig1);
                                var p2 = (1 - pi1) * VizEngine.normalPDF(data[i], mu2, sig2);
                                var total = p1 + p2;
                                gamma[i] = total > 0 ? p1 / total : 0.5;
                            }
                        }

                        function mStep() {
                            var n1 = 0, n2 = 0;
                            var sum1 = 0, sum2 = 0;
                            for (var i = 0; i < nData; i++) {
                                n1 += gamma[i];
                                n2 += (1 - gamma[i]);
                                sum1 += gamma[i] * data[i];
                                sum2 += (1 - gamma[i]) * data[i];
                            }
                            if (n1 > 0.01) mu1 = sum1 / n1;
                            if (n2 > 0.01) mu2 = sum2 / n2;

                            var var1 = 0, var2 = 0;
                            for (var j = 0; j < nData; j++) {
                                var1 += gamma[j] * (data[j] - mu1) * (data[j] - mu1);
                                var2 += (1 - gamma[j]) * (data[j] - mu2) * (data[j] - mu2);
                            }
                            if (n1 > 0.01) sig1 = Math.sqrt(Math.max(0.01, var1 / n1));
                            if (n2 > 0.01) sig2 = Math.sqrt(Math.max(0.01, var2 / n2));
                            pi1 = n1 / nData;
                        }

                        function computeLogLik() {
                            var ll = 0;
                            for (var i = 0; i < nData; i++) {
                                var p = pi1 * VizEngine.normalPDF(data[i], mu1, sig1) + (1 - pi1) * VizEngine.normalPDF(data[i], mu2, sig2);
                                if (p > 0) ll += Math.log(p);
                            }
                            return ll;
                        }

                        function draw() {
                            viz.clear();
                            var W = viz.width;
                            var H = viz.height;

                            viz.screenText('EM for 2-Component Gaussian Mixture', W / 2, 16, viz.colors.white, 14);
                            viz.screenText('Iteration: ' + iteration + '  |  log L = ' + computeLogLik().toFixed(1), W / 2, 34, viz.colors.text, 11);

                            // Build histogram
                            var xMin = -1, xMax = 7;
                            var binCount = 30;
                            var binWidth = (xMax - xMin) / binCount;
                            var bins = [];
                            for (var b = 0; b < binCount; b++) {
                                bins.push({x: xMin + b * binWidth, width: binWidth, height: 0});
                            }
                            for (var i = 0; i < data.length; i++) {
                                var idx = Math.floor((data[i] - xMin) / binWidth);
                                if (idx >= 0 && idx < binCount) {
                                    bins[idx].height += 1 / (nData * binWidth);
                                }
                            }

                            // Coordinate mapping
                            var plotScale = viz.scale;
                            var oX = viz.originX;
                            var oY = viz.originY;

                            function toSX(x) { return oX + x * plotScale; }
                            function toSY(y) { return oY - y * plotScale; }

                            // Draw histogram
                            for (var bi = 0; bi < bins.length; bi++) {
                                var bx1 = toSX(bins[bi].x);
                                var bx2 = toSX(bins[bi].x + bins[bi].width);
                                var by1 = toSY(bins[bi].height);
                                var by2 = toSY(0);
                                ctx.fillStyle = viz.colors.text + '33';
                                ctx.fillRect(bx1, by1, bx2 - bx1, by2 - by1);
                                ctx.strokeStyle = viz.colors.text + '55';
                                ctx.lineWidth = 0.5;
                                ctx.strokeRect(bx1, by1, bx2 - bx1, by2 - by1);
                            }

                            // Draw data points colored by responsibility
                            for (var di = 0; di < data.length; di++) {
                                var dx = toSX(data[di]);
                                var g = gamma[di];
                                var r = Math.round(88 + (240 - 88) * (1 - g));
                                var gCol = Math.round(166 + (136 - 166) * (1 - g));
                                var bCol = Math.round(255 + (62 - 255) * (1 - g));
                                ctx.fillStyle = 'rgb(' + r + ',' + gCol + ',' + bCol + ')';
                                ctx.beginPath();
                                ctx.arc(dx, oY + 12, 3, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // Draw fitted densities: Component 1
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var k = 0; k <= 200; k++) {
                                var x1 = xMin + (xMax - xMin) * k / 200;
                                var y1 = pi1 * VizEngine.normalPDF(x1, mu1, sig1);
                                var px = toSX(x1);
                                var py = toSY(y1);
                                if (k === 0) ctx.moveTo(px, py);
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Component 2
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var k2 = 0; k2 <= 200; k2++) {
                                var x2 = xMin + (xMax - xMin) * k2 / 200;
                                var y2 = (1 - pi1) * VizEngine.normalPDF(x2, mu2, sig2);
                                var px2 = toSX(x2);
                                var py2 = toSY(y2);
                                if (k2 === 0) ctx.moveTo(px2, py2);
                                else ctx.lineTo(px2, py2);
                            }
                            ctx.stroke();

                            // Mixture density
                            ctx.strokeStyle = viz.colors.white;
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath();
                            for (var k3 = 0; k3 <= 200; k3++) {
                                var x3 = xMin + (xMax - xMin) * k3 / 200;
                                var y3 = pi1 * VizEngine.normalPDF(x3, mu1, sig1) + (1 - pi1) * VizEngine.normalPDF(x3, mu2, sig2);
                                var px3 = toSX(x3);
                                var py3 = toSY(y3);
                                if (k3 === 0) ctx.moveTo(px3, py3);
                                else ctx.lineTo(px3, py3);
                            }
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // X-axis
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(oX + xMin * plotScale, oY);
                            ctx.lineTo(oX + xMax * plotScale, oY);
                            ctx.stroke();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var tick = Math.ceil(xMin); tick <= Math.floor(xMax); tick++) {
                                ctx.fillText(tick.toString(), toSX(tick), oY + 2);
                            }

                            // Legend
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('\u03bc\u2081=' + mu1.toFixed(2) + ' \u03c3\u2081=' + sig1.toFixed(2) + ' \u03c0\u2081=' + pi1.toFixed(2), W - 220, 52);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('\u03bc\u2082=' + mu2.toFixed(2) + ' \u03c3\u2082=' + sig2.toFixed(2) + ' \u03c0\u2082=' + (1 - pi1).toFixed(2), W - 220, 68);
                        }

                        generateData();
                        initEM();
                        eStep();
                        draw();

                        VizEngine.createButton(controls, 'E-step', function() {
                            eStep();
                            draw();
                        });

                        VizEngine.createButton(controls, 'M-step', function() {
                            mStep();
                            iteration++;
                            draw();
                        });

                        VizEngine.createButton(controls, 'Run 1 EM Step', function() {
                            eStep();
                            mStep();
                            iteration++;
                            eStep();
                            draw();
                        });

                        VizEngine.createButton(controls, 'Run 20 Steps', function() {
                            for (var s = 0; s < 20; s++) {
                                eStep();
                                mStep();
                                iteration++;
                            }
                            eStep();
                            draw();
                        });

                        VizEngine.createButton(controls, 'Reset', function() {
                            generateData();
                            initEM();
                            eStep();
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '证明 EM 算法的单调性：\\\\(\\\\ell(\\\\theta^{(t+1)}) \\\\ge \\\\ell(\\\\theta^{(t)})\\\\)。',
                    hint: '利用 \\\\(\\\\ell(\\\\theta) = Q(\\\\theta \\\\mid \\\\theta^{(t)}) - H(\\\\theta \\\\mid \\\\theta^{(t)})\\\\)，其中 \\\\(H(\\\\theta \\\\mid \\\\theta^{(t)}) = \\\\mathbb{E}_{Z|X,\\\\theta^{(t)}}[\\\\log f(Z|X, \\\\theta)]\\\\)，并利用 Jensen 不等式证明 \\\\(H(\\\\theta \\\\mid \\\\theta^{(t)}) \\\\le H(\\\\theta^{(t)} \\\\mid \\\\theta^{(t)})\\\\)。',
                    solution: '分解 \\\\(\\\\ell(\\\\theta) = Q(\\\\theta | \\\\theta^{(t)}) - H(\\\\theta | \\\\theta^{(t)})\\\\)，其中 \\\\(H(\\\\theta | \\\\theta^{(t)}) = \\\\mathbb{E}_{Z|X,\\\\theta^{(t)}}[\\\\log f(Z|X,\\\\theta)]\\\\)。由 M-step，\\\\(Q(\\\\theta^{(t+1)}|\\\\theta^{(t)}) \\\\ge Q(\\\\theta^{(t)}|\\\\theta^{(t)})\\\\)。由 Gibbs 不等式（Jensen），\\\\(H(\\\\theta|\\\\theta^{(t)}) \\\\le H(\\\\theta^{(t)}|\\\\theta^{(t)})\\\\) 对任意 \\\\(\\\\theta\\\\)。因此 \\\\(\\\\ell(\\\\theta^{(t+1)}) = Q(\\\\theta^{(t+1)}|\\\\theta^{(t)}) - H(\\\\theta^{(t+1)}|\\\\theta^{(t)}) \\\\ge Q(\\\\theta^{(t)}|\\\\theta^{(t)}) - H(\\\\theta^{(t)}|\\\\theta^{(t)}) = \\\\ell(\\\\theta^{(t)})\\\\)。'
                },
                {
                    question: '对于两分量 Poisson 混合 \\\\(f(x) = \\\\pi \\\\cdot \\\\text{Pois}(x|\\\\lambda_1) + (1-\\\\pi) \\\\cdot \\\\text{Pois}(x|\\\\lambda_2)\\\\)，写出 E-step 和 M-step 的具体公式。',
                    hint: '用 Poisson PMF 替换正态 PDF，结构与高斯混合相同。',
                    solution: 'E-step: \\\\(\\\\gamma_i = \\\\frac{\\\\pi \\\\cdot \\\\text{Pois}(x_i|\\\\lambda_1)}{\\\\pi \\\\cdot \\\\text{Pois}(x_i|\\\\lambda_1) + (1-\\\\pi)\\\\cdot \\\\text{Pois}(x_i|\\\\lambda_2)}\\\\)。M-step: \\\\(n_1 = \\\\sum \\\\gamma_i\\\\)，\\\\(\\\\lambda_1 = \\\\sum \\\\gamma_i x_i / n_1\\\\)，\\\\(\\\\lambda_2 = \\\\sum(1-\\\\gamma_i)x_i/(n-n_1)\\\\)，\\\\(\\\\pi = n_1/n\\\\)。加权分量的 Poisson MLE 就是加权样本均值。'
                },
                {
                    question: 'EM 算法在什么情况下收敛特别慢？解释"缺失信息比"（fraction of missing information）的含义。',
                    hint: '考虑完全数据 Fisher 信息与观测数据 Fisher 信息的关系。',
                    solution: 'EM 在解附近的收敛速率由矩阵 \\\\(DM = I_c^{-1}(\\\\theta) I_m(\\\\theta)\\\\) 的特征值决定，其中 \\\\(I_c\\\\) 是完全数据 Fisher 信息，\\\\(I_m = I_c - I_o\\\\) 是"缺失信息"（\\\\(I_o\\\\) 为观测信息）。当缺失信息比 \\\\(I_m/I_c\\\\) 接近 1 时（即大部分信息在潜变量中），\\\\(DM\\\\) 的特征值接近 1，导致极慢的线性收敛。这在混合分量严重重叠或缺失数据比例大时发生。'
                }
            ]
        }
    ]
});

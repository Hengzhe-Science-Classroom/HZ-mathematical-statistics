window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch07',
    number: 7,
    title: '评估准则',
    subtitle: 'Evaluation Criteria for Estimators',
    sections: [
        // ===== Section 1: 无偏性 =====
        {
            id: 'ch07-sec01',
            title: '无偏性',
            content: `
                <h2>无偏性 (Unbiasedness)</h2>

                <p>在上一章中，我们学习了如何构造点估计（矩估计、极大似然估计等）。一个自然的问题是：如何评价不同估计量的优劣？本章介绍统计学中最核心的几个评估准则，从最基本的无偏性开始。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.1 (偏差与无偏估计量)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n\\) 是来自总体 \\(f(x; \\theta)\\) 的随机样本，\\(W = W(X_1, \\ldots, X_n)\\) 是参数 \\(\\tau(\\theta)\\) 的估计量。</p>
                        <p><strong>偏差 (Bias)</strong> 定义为</p>
                        \\[\\operatorname{Bias}_{\\theta}(W) = \\mathbb{E}_{\\theta}[W] - \\tau(\\theta).\\]
                        <p>若对所有 \\(\\theta \\in \\Theta\\) 均有 \\(\\operatorname{Bias}_{\\theta}(W) = 0\\)，即 \\(\\mathbb{E}_{\\theta}[W] = \\tau(\\theta)\\)，则称 \\(W\\) 是 \\(\\tau(\\theta)\\) 的<strong>无偏估计量 (unbiased estimator)</strong>。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>无偏性意味着：如果我们重复进行抽样实验无限次，估计量的平均值恰好等于真实参数值。偏差衡量的是估计量的"系统性偏移"——就像一把尺子的零刻度偏了一样。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.2 (样本均值的无偏性)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} F\\)，且 \\(\\mathbb{E}[X_1] = \\mu\\)。则样本均值</p>
                        \\[\\bar{X} = \\frac{1}{n}\\sum_{i=1}^{n} X_i\\]
                        <p>是 \\(\\mu\\) 的无偏估计量。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>由期望的线性性，</p>
                        \\[\\mathbb{E}[\\bar{X}] = \\mathbb{E}\\left[\\frac{1}{n}\\sum_{i=1}^{n} X_i\\right] = \\frac{1}{n}\\sum_{i=1}^{n} \\mathbb{E}[X_i] = \\frac{1}{n} \\cdot n\\mu = \\mu.\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.3 (样本方差的两种形式)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\sim (\\mu, \\sigma^2)\\)。考虑两个估计量：</p>
                        \\[S_n^2 = \\frac{1}{n}\\sum_{i=1}^{n}(X_i - \\bar{X})^2, \\quad S^2 = \\frac{1}{n-1}\\sum_{i=1}^{n}(X_i - \\bar{X})^2.\\]
                        <p>利用恒等式 \\(\\sum(X_i - \\bar{X})^2 = \\sum X_i^2 - n\\bar{X}^2\\)，可得</p>
                        \\[\\mathbb{E}\\left[\\sum_{i=1}^{n}(X_i - \\bar{X})^2\\right] = n\\sigma^2 + n\\mu^2 - n\\left(\\frac{\\sigma^2}{n} + \\mu^2\\right) = (n-1)\\sigma^2.\\]
                        <p>因此 \\(\\mathbb{E}[S_n^2] = \\frac{n-1}{n}\\sigma^2 \\neq \\sigma^2\\)（有偏），而 \\(\\mathbb{E}[S^2] = \\sigma^2\\)（无偏）。分母用 \\(n-1\\) 正是为了修正偏差。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.4 (无偏性的局限)</div>
                    <div class="env-body">
                        <p>无偏性并非总是最佳准则，存在以下局限：</p>
                        <p>(a) 某些参数不存在无偏估计量。例如，对于 \\(X \\sim \\text{Bernoulli}(p)\\)，\\(1/p\\) 没有无偏估计量。</p>
                        <p>(b) 无偏估计量可能不唯一。例如 \\(X_1\\) 和 \\(\\bar{X}\\) 都是 \\(\\mu\\) 的无偏估计量，但后者更好。</p>
                        <p>(c) 无偏估计量可能给出不合理的值。例如对均匀分布 \\(U(0, \\theta)\\)，\\(\\frac{n+1}{n}X_{(n)}\\) 虽无偏，但可能超出参数空间。</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>无偏性是关于<strong>期望</strong>的性质，不保证单次估计的准确性。一个有偏但方差极小的估计量往往比无偏但方差很大的估计量更实用。这正是我们需要MSE准则的原因。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="bias-repeated-samples"></div>
            `,
            visualizations: [
                {
                    id: 'bias-repeated-samples',
                    title: 'Interactive: 偏差可视化 — 重复抽样',
                    description: '观察有偏和无偏估计量在重复抽样下的表现差异',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 420,
                            originX: 80, originY: 350, scale: 80
                        });

                        var trueTheta = 2.0;
                        var nSamples = 30;
                        var sampleSize = 10;
                        var biasedEstimates = [];
                        var unbiasedEstimates = [];

                        function generateEstimates() {
                            biasedEstimates = [];
                            unbiasedEstimates = [];
                            for (var i = 0; i < nSamples; i++) {
                                var data = VizEngine.sampleArray(function() {
                                    return VizEngine.randomNormal(0, Math.sqrt(trueTheta));
                                }, sampleSize);
                                var m = VizEngine.mean(data);
                                var ss = data.reduce(function(s, x) { return s + (x - m) * (x - m); }, 0);
                                biasedEstimates.push(ss / sampleSize);
                                unbiasedEstimates.push(ss / (sampleSize - 1));
                            }
                        }

                        generateEstimates();

                        function draw() {
                            viz.clear();

                            var ctx = viz.ctx;
                            viz.screenText('Bias Visualization: Repeated Sampling', viz.width / 2, 20, viz.colors.white, 15);

                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(80, 350);
                            ctx.lineTo(540, 350);
                            ctx.stroke();

                            for (var v = 0; v <= 5; v++) {
                                var sx = 80 + v * 80;
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'top';
                                ctx.fillText(v.toFixed(0), sx, 355);
                                ctx.strokeStyle = viz.colors.grid;
                                ctx.lineWidth = 0.5;
                                ctx.beginPath();
                                ctx.moveTo(sx, 50);
                                ctx.lineTo(sx, 350);
                                ctx.stroke();
                            }

                            var trueX = 80 + trueTheta * 80;
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2.5;
                            ctx.setLineDash([8, 4]);
                            ctx.beginPath();
                            ctx.moveTo(trueX, 50);
                            ctx.lineTo(trueX, 350);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            viz.screenText('True ' + '\u03C3' + '\u00B2 = ' + trueTheta.toFixed(1), trueX, 42, viz.colors.green, 12);

                            var biasedMean = VizEngine.mean(biasedEstimates);
                            var unbiasedMean = VizEngine.mean(unbiasedEstimates);

                            viz.screenText('Biased (S\u00B2_n, divide by n)', 310, 75, viz.colors.orange, 12);
                            for (var i = 0; i < biasedEstimates.length; i++) {
                                var bx = 80 + biasedEstimates[i] * 80;
                                var by = 95 + i * 4;
                                ctx.fillStyle = viz.colors.orange + '88';
                                ctx.beginPath();
                                ctx.arc(bx, by, 3, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            var bmx = 80 + biasedMean * 80;
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(bmx, 85);
                            ctx.lineTo(bmx, 95 + nSamples * 4 + 5);
                            ctx.stroke();
                            viz.screenText('Mean = ' + biasedMean.toFixed(3), bmx, 95 + nSamples * 4 + 18, viz.colors.orange, 11);

                            var yOffset = 95 + nSamples * 4 + 40;
                            viz.screenText('Unbiased (S\u00B2, divide by n-1)', 310, yOffset, viz.colors.blue, 12);
                            for (var j = 0; j < unbiasedEstimates.length; j++) {
                                var ux = 80 + unbiasedEstimates[j] * 80;
                                var uy = yOffset + 20 + j * 4;
                                ctx.fillStyle = viz.colors.blue + '88';
                                ctx.beginPath();
                                ctx.arc(ux, uy, 3, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            var umx = 80 + unbiasedMean * 80;
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(umx, yOffset + 10);
                            ctx.lineTo(umx, yOffset + 20 + nSamples * 4 + 5);
                            ctx.stroke();
                            viz.screenText('Mean = ' + unbiasedMean.toFixed(3), umx, yOffset + 20 + nSamples * 4 + 18, viz.colors.blue, 11);

                            viz.screenText('Bias(S\u00B2_n) = ' + (biasedMean - trueTheta).toFixed(3), 310, 350 - 15, viz.colors.orange, 11);
                            viz.screenText('Bias(S\u00B2) = ' + (unbiasedMean - trueTheta).toFixed(3), 310, 350 - 2, viz.colors.blue, 11);
                        }

                        draw();

                        VizEngine.createSlider(controls, 'n (sample size)', 3, 50, sampleSize, 1, function(val) {
                            sampleSize = Math.round(val);
                            generateEstimates();
                            draw();
                        });

                        VizEngine.createSlider(controls, 'True \u03C3\u00B2', 0.5, 4, trueTheta, 0.1, function(val) {
                            trueTheta = val;
                            generateEstimates();
                            draw();
                        });

                        VizEngine.createButton(controls, 'Resample', function() {
                            generateEstimates();
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\(X_1, \\ldots, X_n \\sim \\text{Poisson}(\\lambda)\\)。证明 \\(\\bar{X}\\) 是 \\(\\lambda\\) 的无偏估计量，并说明 \\(\\bar{X}^2\\) 是否是 \\(\\lambda^2\\) 的无偏估计量。',
                    hint: '对于无偏性，计算 \\(\\mathbb{E}[\\bar{X}]\\)。对于 \\(\\bar{X}^2\\)，利用 \\(\\mathbb{E}[\\bar{X}^2] = \\operatorname{Var}(\\bar{X}) + (\\mathbb{E}[\\bar{X}])^2\\)。',
                    solution: '由于 \\(\\mathbb{E}[X_i] = \\lambda\\)，故 \\(\\mathbb{E}[\\bar{X}] = \\lambda\\)，即 \\(\\bar{X}\\) 是无偏的。然而 \\(\\mathbb{E}[\\bar{X}^2] = \\operatorname{Var}(\\bar{X}) + \\lambda^2 = \\lambda/n + \\lambda^2 \\neq \\lambda^2\\)，所以 \\(\\bar{X}^2\\) 不是 \\(\\lambda^2\\) 的无偏估计量。无偏估计为 \\(\\bar{X}^2 - \\bar{X}/n\\)。'
                },
                {
                    question: '设 \\(X_1, \\ldots, X_n \\sim U(0, \\theta)\\)。验证 \\(2\\bar{X}\\) 和 \\(\\frac{n+1}{n}X_{(n)}\\) 都是 \\(\\theta\\) 的无偏估计量，其中 \\(X_{(n)} = \\max_i X_i\\)。',
                    hint: '\\(X_{(n)}\\) 的PDF为 \\(f_{X_{(n)}}(x) = \\frac{n x^{n-1}}{\\theta^n}\\)，\\(0 < x < \\theta\\)。',
                    solution: '\\(\\mathbb{E}[2\\bar{X}] = 2 \\cdot \\theta/2 = \\theta\\)。对于 \\(X_{(n)}\\)：\\(\\mathbb{E}[X_{(n)}] = \\int_0^{\\theta} x \\cdot \\frac{nx^{n-1}}{\\theta^n} dx = \\frac{n}{\\theta^n} \\cdot \\frac{\\theta^{n+1}}{n+1} = \\frac{n\\theta}{n+1}\\)。因此 \\(\\mathbb{E}\\left[\\frac{n+1}{n}X_{(n)}\\right] = \\theta\\)。两者均无偏。'
                },
                {
                    question: '证明：若 \\(W\\) 是 \\(\\tau(\\theta)\\) 的无偏估计量，且 \\(g\\) 是非线性函数，则 \\(g(W)\\) 一般不是 \\(g(\\tau(\\theta))\\) 的无偏估计量。以 \\(g(x) = x^2\\) 为例说明。',
                    hint: '利用 Jensen 不等式：若 \\(g\\) 是严格凸函数，则 \\(\\mathbb{E}[g(W)] > g(\\mathbb{E}[W])\\)。',
                    solution: '取 \\(g(x) = x^2\\)（严格凸）。由 Jensen 不等式，\\(\\mathbb{E}[W^2] \\geq (\\mathbb{E}[W])^2 = \\tau(\\theta)^2\\)，当 \\(\\operatorname{Var}(W) > 0\\) 时严格不等式成立。因此 \\(\\operatorname{Bias}(W^2) = \\mathbb{E}[W^2] - \\tau(\\theta)^2 = \\operatorname{Var}(W) > 0\\)，\\(W^2\\) 正偏于 \\(\\tau(\\theta)^2\\)。'
                }
            ]
        },

        // ===== Section 2: 均方误差 =====
        {
            id: 'ch07-sec02',
            title: '均方误差',
            content: `
                <h2>均方误差 (Mean Squared Error)</h2>

                <p>无偏性只关注估计量的"中心"位置，忽略了其波动程度。均方误差 (MSE) 综合考虑偏差和方差，是评价估计量最常用的准则。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.5 (均方误差)</div>
                    <div class="env-body">
                        <p>估计量 \\(W\\) 对参数 \\(\\tau(\\theta)\\) 的<strong>均方误差 (Mean Squared Error, MSE)</strong> 定义为</p>
                        \\[\\operatorname{MSE}_{\\theta}(W) = \\mathbb{E}_{\\theta}\\left[(W - \\tau(\\theta))^2\\right].\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.6 (Bias-Variance Decomposition)</div>
                    <div class="env-body">
                        <p>对任意估计量 \\(W\\)，其MSE可分解为</p>
                        \\[\\operatorname{MSE}_{\\theta}(W) = \\operatorname{Var}_{\\theta}(W) + \\left[\\operatorname{Bias}_{\\theta}(W)\\right]^2.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>令 \\(b = \\operatorname{Bias}_{\\theta}(W) = \\mathbb{E}[W] - \\tau(\\theta)\\)。则</p>
                        \\[\\begin{aligned}
                        \\operatorname{MSE}(W) &= \\mathbb{E}[(W - \\tau(\\theta))^2] \\\\
                        &= \\mathbb{E}[(W - \\mathbb{E}[W] + b)^2] \\\\
                        &= \\mathbb{E}[(W - \\mathbb{E}[W])^2] + 2b\\,\\mathbb{E}[W - \\mathbb{E}[W]] + b^2 \\\\
                        &= \\operatorname{Var}(W) + 0 + b^2.
                        \\end{aligned}\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>把打靶做类比：偏差是瞄准点偏离靶心的距离，方差是弹着点的分散程度。MSE综合衡量了"打得准不准"。一个完美的射手（小偏差+小方差）优于只瞄得准但手抖（无偏+大方差）的射手，也优于手稳但瞄歪了（有偏+小方差）的射手。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.7 (Bias-Variance Tradeoff)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\sim N(\\mu, \\sigma^2)\\)，考虑估计 \\(\\sigma^2\\) 的一族估计量</p>
                        \\[W_c = \\frac{1}{c}\\sum_{i=1}^{n}(X_i - \\bar{X})^2, \\quad c > 0.\\]
                        <p>可以验证：\\(\\mathbb{E}[W_c] = \\frac{n-1}{c}\\sigma^2\\)，\\(\\operatorname{Var}(W_c) = \\frac{2(n-1)}{c^2}\\sigma^4\\)。</p>
                        <p>于是 \\(\\operatorname{MSE}(W_c) = \\frac{2(n-1)}{c^2}\\sigma^4 + \\left(\\frac{n-1}{c} - 1\\right)^2 \\sigma^4\\)。</p>
                        <p>令 \\(\\frac{d}{dc}\\operatorname{MSE}(W_c) = 0\\)，得到MSE最优的 \\(c^* = n + 1\\)。</p>
                        <p>这意味着<strong>最小MSE估计量是 \\(W_{n+1}\\)，而非无偏的 \\(W_{n-1} = S^2\\)</strong>。为了降低MSE，值得牺牲少量偏差来换取更小的方差。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>MSE准则虽然直观有用，但它是"逐点"（对每个 \\(\\theta\\) 值）的评价。不存在在整个参数空间上MSE一致最优的估计量（否则统计学就太简单了）。这导致了一系列更精细的准则，如minimax、Bayes risk等。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="mse-decomposition"></div>
            `,
            visualizations: [
                {
                    id: 'mse-decomposition',
                    title: 'Interactive: MSE = Bias\u00B2 + Variance 分解',
                    description: '调节偏差和方差，观察MSE如何变化',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 280, originY: 320, scale: 60
                        });

                        var trueVal = 0;
                        var bias = 0.8;
                        var sigma = 0.6;

                        function draw() {
                            viz.clear();
                            viz.screenText('MSE Decomposition: MSE = Bias\u00B2 + Variance', viz.width / 2, 18, viz.colors.white, 14);

                            var ctx = viz.ctx;
                            var center = trueVal + bias;

                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(20, 320);
                            ctx.lineTo(540, 320);
                            ctx.stroke();

                            var trueScreenX = 280 + trueVal * 60;
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 3]);
                            ctx.beginPath();
                            ctx.moveTo(trueScreenX, 50);
                            ctx.lineTo(trueScreenX, 320);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            viz.screenText('\u03C4(\u03B8)', trueScreenX, 335, viz.colors.green, 12);

                            var ewScreenX = 280 + center * 60;
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 3]);
                            ctx.beginPath();
                            ctx.moveTo(ewScreenX, 50);
                            ctx.lineTo(ewScreenX, 320);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            viz.screenText('E[W]', ewScreenX, 348, viz.colors.orange, 12);

                            var pdfFunc = function(x) {
                                return VizEngine.normalPDF(x, center, sigma);
                            };

                            ctx.fillStyle = viz.colors.blue + '33';
                            ctx.beginPath();
                            ctx.moveTo(20, 320);
                            for (var px = 20; px <= 540; px++) {
                                var xVal = (px - 280) / 60;
                                var yVal = pdfFunc(xVal);
                                ctx.lineTo(px, 320 - yVal * 60 * 2.5);
                            }
                            ctx.lineTo(540, 320);
                            ctx.closePath();
                            ctx.fill();

                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;
                            for (var px2 = 20; px2 <= 540; px2++) {
                                var xVal2 = (px2 - 280) / 60;
                                var yVal2 = pdfFunc(xVal2);
                                var sy = 320 - yVal2 * 60 * 2.5;
                                if (!started) { ctx.moveTo(px2, sy); started = true; }
                                else ctx.lineTo(px2, sy);
                            }
                            ctx.stroke();

                            if (Math.abs(bias) > 0.01) {
                                var arrowY = 290;
                                ctx.strokeStyle = viz.colors.red;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.moveTo(trueScreenX, arrowY);
                                ctx.lineTo(ewScreenX, arrowY);
                                ctx.stroke();
                                var dir = bias > 0 ? 1 : -1;
                                ctx.fillStyle = viz.colors.red;
                                ctx.beginPath();
                                ctx.moveTo(ewScreenX, arrowY);
                                ctx.lineTo(ewScreenX - dir * 8, arrowY - 5);
                                ctx.lineTo(ewScreenX - dir * 8, arrowY + 5);
                                ctx.closePath();
                                ctx.fill();
                                viz.screenText('Bias = ' + bias.toFixed(2), (trueScreenX + ewScreenX) / 2, arrowY - 12, viz.colors.red, 11);
                            }

                            var mse = sigma * sigma + bias * bias;
                            var biasContrib = bias * bias;
                            var varContrib = sigma * sigma;

                            var barX = 420;
                            var barW = 30;
                            var barScale = 100;

                            ctx.fillStyle = viz.colors.purple + '88';
                            ctx.fillRect(barX, 320 - mse * barScale, barW, mse * barScale);
                            ctx.strokeStyle = viz.colors.purple;
                            ctx.lineWidth = 1;
                            ctx.strokeRect(barX, 320 - mse * barScale, barW, mse * barScale);

                            ctx.fillStyle = viz.colors.blue + '88';
                            ctx.fillRect(barX + barW + 10, 320 - varContrib * barScale, barW, varContrib * barScale);
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.strokeRect(barX + barW + 10, 320 - varContrib * barScale, barW, varContrib * barScale);

                            ctx.fillStyle = viz.colors.red + '88';
                            ctx.fillRect(barX + barW + 10, 320 - (varContrib + biasContrib) * barScale, barW, biasContrib * barScale);
                            ctx.strokeStyle = viz.colors.red;
                            ctx.strokeRect(barX + barW + 10, 320 - (varContrib + biasContrib) * barScale, barW, biasContrib * barScale);

                            viz.screenText('MSE', barX + barW / 2, 320 - mse * barScale - 12, viz.colors.purple, 10);
                            viz.screenText(mse.toFixed(3), barX + barW / 2, 320 - mse * barScale - 1, viz.colors.purple, 9, 'center', 'bottom');

                            var stackX = barX + barW + 10 + barW / 2;
                            if (biasContrib > 0.01) {
                                viz.screenText('B\u00B2', stackX, 320 - varContrib * barScale - biasContrib * barScale / 2, viz.colors.red, 9);
                            }
                            if (varContrib > 0.01) {
                                viz.screenText('Var', stackX, 320 - varContrib * barScale / 2, viz.colors.blue, 9);
                            }

                            viz.screenText('Var = ' + varContrib.toFixed(3), 130, 45, viz.colors.blue, 12, 'left');
                            viz.screenText('Bias\u00B2 = ' + biasContrib.toFixed(3), 130, 62, viz.colors.red, 12, 'left');
                            viz.screenText('MSE = ' + mse.toFixed(3), 130, 79, viz.colors.purple, 12, 'left');
                        }

                        draw();

                        VizEngine.createSlider(controls, 'Bias', -2, 2, bias, 0.05, function(val) {
                            bias = val;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Std Dev (\u03C3)', 0.1, 2, sigma, 0.05, function(val) {
                            sigma = val;
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\(X \\sim N(\\theta, 1)\\)，考虑估计量 \\(W_a = aX\\)（\\(0 < a < 1\\)）估计 \\(\\theta\\)。求使 \\(\\operatorname{MSE}(W_a)\\) 最小的 \\(a\\) 值（作为 \\(\\theta\\) 的函数）。',
                    hint: '\\(\\operatorname{Bias}(W_a) = (a-1)\\theta\\)，\\(\\operatorname{Var}(W_a) = a^2\\)。',
                    solution: '\\(\\operatorname{MSE}(W_a) = a^2 + (a-1)^2\\theta^2\\)。对 \\(a\\) 求导令其为零：\\(2a + 2(a-1)\\theta^2 = 0\\)，得 \\(a^* = \\frac{\\theta^2}{1+\\theta^2}\\)。当 \\(|\\theta|\\) 很大时 \\(a^* \\to 1\\)，当 \\(\\theta = 0\\) 时 \\(a^* = 0\\)。注意最优的 \\(a\\) 依赖于未知参数 \\(\\theta\\)，因此这个结果理论上有意义但无法直接使用。'
                },
                {
                    question: '证明：在 \\(X_1, \\ldots, X_n \\sim N(\\mu, \\sigma^2)\\) 中，估计 \\(\\sigma^2\\) 时使MSE最小的除数是 \\(n+1\\)，而非 \\(n-1\\)（无偏）或 \\(n\\)（MLE）。',
                    hint: '利用 \\(\\sum(X_i - \\bar{X})^2 / \\sigma^2 \\sim \\chi^2_{n-1}\\)，以及卡方分布的方差为 \\(2(n-1)\\)。',
                    solution: '设 \\(Q = \\sum(X_i - \\bar{X})^2\\)，则 \\(Q/\\sigma^2 \\sim \\chi^2_{n-1}\\)。对 \\(W_c = Q/c\\)：\\(\\operatorname{MSE}(W_c) = \\frac{\\sigma^4}{c^2}[2(n-1) + (n-1-c)^2]\\)。令 \\(\\frac{d}{dc}\\operatorname{MSE} = 0\\)，化简得 \\(c = n+1\\)。此时 \\(\\operatorname{MSE}(W_{n+1}) = \\frac{2(n-1)}{(n+1)^2}\\sigma^4 < \\frac{2}{n-1}\\sigma^4 = \\operatorname{MSE}(S^2)\\)。'
                }
            ]
        },

        // ===== Section 3: Cramer-Rao 下界 =====
        {
            id: 'ch07-sec03',
            title: 'Cramer-Rao下界',
            content: `
                <h2>Cramer-Rao 下界 (Cramer-Rao Lower Bound)</h2>

                <p>上一节我们看到，在无偏估计量中，方差越小越好。一个自然的问题是：无偏估计量的方差能小到什么程度？Cramer-Rao不等式给出了一个漂亮的下界。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.8 (Fisher 信息量)</div>
                    <div class="env-body">
                        <p>设 \\(X \\sim f(x; \\theta)\\)，满足正则条件（支撑集不依赖于 \\(\\theta\\)，可在积分号下求导）。<strong>Fisher 信息量 (Fisher information)</strong> 定义为</p>
                        \\[I(\\theta) = \\mathbb{E}_{\\theta}\\left[\\left(\\frac{\\partial}{\\partial\\theta} \\log f(X; \\theta)\\right)^2\\right] = \\operatorname{Var}_{\\theta}\\left(\\frac{\\partial}{\\partial\\theta} \\log f(X; \\theta)\\right).\\]
                        <p>等价地，在进一步的正则条件下，</p>
                        \\[I(\\theta) = -\\mathbb{E}_{\\theta}\\left[\\frac{\\partial^2}{\\partial\\theta^2} \\log f(X; \\theta)\\right].\\]
                        <p>对于 \\(n\\) 个iid样本，总信息量为 \\(I_n(\\theta) = nI(\\theta)\\)。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Fisher信息量衡量的是数据中关于参数 \\(\\theta\\) 的"信息含量"。如果对数似然函数 \\(\\log f(x;\\theta)\\) 关于 \\(\\theta\\) 的曲率（负二阶导数）越大，说明似然函数在真值附近越"尖锐"，参数越容易被精确估计——这对应更高的Fisher信息量。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.9 (常见分布的Fisher信息量)</div>
                    <div class="env-body">
                        <p><strong>(a) 正态分布 \\(N(\\mu, \\sigma^2)\\)</strong>（\\(\\sigma^2\\) 已知，估计 \\(\\mu\\)）：</p>
                        \\[\\log f = -\\frac{(x-\\mu)^2}{2\\sigma^2} + \\text{const}, \\quad \\frac{\\partial^2}{\\partial\\mu^2}\\log f = -\\frac{1}{\\sigma^2}, \\quad I(\\mu) = \\frac{1}{\\sigma^2}.\\]
                        <p><strong>(b) Poisson(\\(\\lambda\\))</strong>：</p>
                        \\[\\log f = x\\log\\lambda - \\lambda + \\text{const}, \\quad \\frac{\\partial^2}{\\partial\\lambda^2}\\log f = -\\frac{x}{\\lambda^2}, \\quad I(\\lambda) = \\frac{1}{\\lambda}.\\]
                        <p><strong>(c) Bernoulli(\\(p\\))</strong>：</p>
                        \\[I(p) = \\frac{1}{p(1-p)}.\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.10 (Cramer-Rao 不等式)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\sim f(x;\\theta)\\) 满足正则条件，\\(W = W(X_1, \\ldots, X_n)\\) 是任意统计量且 \\(\\mathbb{E}_{\\theta}[W] = m(\\theta)\\) 可微。则</p>
                        \\[\\operatorname{Var}_{\\theta}(W) \\geq \\frac{[m'(\\theta)]^2}{nI(\\theta)}.\\]
                        <p>特别地，若 \\(W\\) 是 \\(\\theta\\) 的无偏估计量（即 \\(m(\\theta) = \\theta\\)，\\(m'(\\theta) = 1\\)），则</p>
                        \\[\\operatorname{Var}_{\\theta}(W) \\geq \\frac{1}{nI(\\theta)}.\\]
                        <p>右端 \\(1/(nI(\\theta))\\) 称为 <strong>Cramer-Rao 下界 (CRLB)</strong>。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p>令 \\(S_n = \\sum_{i=1}^{n} \\frac{\\partial}{\\partial\\theta}\\log f(X_i; \\theta)\\) 为得分函数之和。注意 \\(\\mathbb{E}[S_n] = 0\\)，\\(\\operatorname{Var}(S_n) = nI(\\theta)\\)。</p>
                        <p>由 \\(\\mathbb{E}[W] = m(\\theta)\\)，对 \\(\\theta\\) 求导（正则条件允许交换积分与微分）：</p>
                        \\[m'(\\theta) = \\mathbb{E}[W \\cdot S_n] = \\operatorname{Cov}(W, S_n).\\]
                        <p>最后一步用了 \\(\\mathbb{E}[S_n] = 0\\)。由 Cauchy-Schwarz 不等式：</p>
                        \\[[m'(\\theta)]^2 = [\\operatorname{Cov}(W, S_n)]^2 \\leq \\operatorname{Var}(W) \\cdot \\operatorname{Var}(S_n) = \\operatorname{Var}(W) \\cdot nI(\\theta).\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.11 (有效估计量与效率)</div>
                    <div class="env-body">
                        <p>若无偏估计量 \\(W\\) 的方差恰好等于CRLB，即 \\(\\operatorname{Var}_{\\theta}(W) = \\frac{1}{nI(\\theta)}\\) 对所有 \\(\\theta\\) 成立，则称 \\(W\\) 为<strong>有效估计量 (efficient estimator)</strong>。</p>
                        <p>估计量的<strong>效率 (efficiency)</strong> 定义为 \\(e(W) = \\frac{1/(nI(\\theta))}{\\operatorname{Var}(W)}\\)，满足 \\(0 < e(W) \\leq 1\\)。</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>CRLB的成立需要正则条件，特别是支撑集不依赖于参数。对于 \\(U(0, \\theta)\\) 等分布，CRLB不适用！此时 \\(X_{(n)}\\) 的方差可以以 \\(O(1/n^2)\\) 速度趋于零，快于正则情形的 \\(O(1/n)\\)。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="crlb-variance-plot"></div>
            `,
            visualizations: [
                {
                    id: 'crlb-variance-plot',
                    title: 'Interactive: CRLB vs 实际方差',
                    description: '比较不同估计量的方差与Cramer-Rao下界',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 70, originY: 340, scale: 30
                        });

                        var n = 10;
                        var dist = 'normal';

                        function draw() {
                            viz.clear();
                            viz.screenText('CRLB vs Estimator Variance', viz.width / 2, 18, viz.colors.white, 14);

                            var ctx = viz.ctx;

                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(70, 340);
                            ctx.lineTo(540, 340);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(70, 340);
                            ctx.lineTo(70, 30);
                            ctx.stroke();

                            viz.screenText('n (sample size)', 300, 370, viz.colors.text, 12);
                            viz.screenText('Variance', 20, 185, viz.colors.text, 12, 'center', 'middle');

                            if (dist === 'normal') {
                                var nValues = [];
                                for (var i = 2; i <= 50; i++) nValues.push(i);

                                var xScale = 470 / 50;
                                var yScale = 280;

                                for (var yv = 0; yv <= 1; yv += 0.2) {
                                    var sy = 340 - yv * yScale;
                                    ctx.fillStyle = viz.colors.text;
                                    ctx.font = '10px -apple-system,sans-serif';
                                    ctx.textAlign = 'right';
                                    ctx.textBaseline = 'middle';
                                    ctx.fillText(yv.toFixed(1), 65, sy);
                                    ctx.strokeStyle = viz.colors.grid;
                                    ctx.lineWidth = 0.5;
                                    ctx.beginPath();
                                    ctx.moveTo(70, sy);
                                    ctx.lineTo(540, sy);
                                    ctx.stroke();
                                }

                                for (var xv = 10; xv <= 50; xv += 10) {
                                    var sx = 70 + xv * xScale;
                                    ctx.fillStyle = viz.colors.text;
                                    ctx.font = '10px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'top';
                                    ctx.fillText(xv, sx, 345);
                                }

                                // CRLB = 1/n
                                ctx.strokeStyle = viz.colors.green;
                                ctx.lineWidth = 2.5;
                                ctx.beginPath();
                                for (var j = 0; j < nValues.length; j++) {
                                    var nn = nValues[j];
                                    var px = 70 + nn * xScale;
                                    var py = 340 - (1 / nn) * yScale;
                                    if (j === 0) ctx.moveTo(px, py);
                                    else ctx.lineTo(px, py);
                                }
                                ctx.stroke();

                                // Xbar variance = 1/n (same as CRLB)
                                ctx.strokeStyle = viz.colors.blue;
                                ctx.lineWidth = 2;
                                ctx.setLineDash([4, 3]);
                                ctx.beginPath();
                                for (var j2 = 0; j2 < nValues.length; j2++) {
                                    var nn2 = nValues[j2];
                                    var px2 = 70 + nn2 * xScale;
                                    var py2 = 340 - (1 / nn2) * yScale;
                                    if (j2 === 0) ctx.moveTo(px2, py2);
                                    else ctx.lineTo(px2, py2);
                                }
                                ctx.stroke();
                                ctx.setLineDash([]);

                                // Sample median variance ~ pi/(2n)
                                ctx.strokeStyle = viz.colors.orange;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                for (var j3 = 0; j3 < nValues.length; j3++) {
                                    var nn3 = nValues[j3];
                                    var px3 = 70 + nn3 * xScale;
                                    var py3 = 340 - (Math.PI / (2 * nn3)) * yScale;
                                    if (j3 === 0) ctx.moveTo(px3, py3);
                                    else ctx.lineTo(px3, py3);
                                }
                                ctx.stroke();

                                // Selected n vertical line
                                var selX = 70 + n * xScale;
                                ctx.strokeStyle = viz.colors.white + '44';
                                ctx.lineWidth = 1;
                                ctx.setLineDash([3, 3]);
                                ctx.beginPath();
                                ctx.moveTo(selX, 30);
                                ctx.lineTo(selX, 340);
                                ctx.stroke();
                                ctx.setLineDash([]);

                                var crlbVal = 1 / n;
                                var medianVar = Math.PI / (2 * n);
                                var eff = crlbVal / medianVar;

                                viz.screenText('N(\u03BC, 1): Estimate \u03BC', 310, 44, viz.colors.white, 12);

                                ctx.fillStyle = viz.colors.green;
                                ctx.fillRect(100, 58, 15, 3);
                                viz.screenText('CRLB = 1/n = ' + crlbVal.toFixed(4), 120, 60, viz.colors.green, 11, 'left');

                                ctx.fillStyle = viz.colors.blue;
                                ctx.setLineDash([4, 3]);
                                ctx.strokeStyle = viz.colors.blue;
                                ctx.beginPath(); ctx.moveTo(100, 77); ctx.lineTo(115, 77); ctx.stroke();
                                ctx.setLineDash([]);
                                viz.screenText('Var(X\u0304) = 1/n = ' + crlbVal.toFixed(4) + ' (efficient!)', 120, 78, viz.colors.blue, 11, 'left');

                                ctx.fillStyle = viz.colors.orange;
                                ctx.fillRect(100, 93, 15, 3);
                                viz.screenText('Var(median) \u2248 \u03C0/(2n) = ' + medianVar.toFixed(4) + ' (eff = ' + (eff * 100).toFixed(1) + '%)', 120, 95, viz.colors.orange, 11, 'left');

                            } else {
                                var nValues2 = [];
                                for (var i2 = 2; i2 <= 50; i2++) nValues2.push(i2);

                                var xScale2 = 470 / 50;
                                var yScale2 = 280;

                                for (var yv2 = 0; yv2 <= 1; yv2 += 0.2) {
                                    var sy2 = 340 - yv2 * yScale2;
                                    ctx.fillStyle = viz.colors.text;
                                    ctx.font = '10px -apple-system,sans-serif';
                                    ctx.textAlign = 'right';
                                    ctx.textBaseline = 'middle';
                                    ctx.fillText(yv2.toFixed(1), 65, sy2);
                                    ctx.strokeStyle = viz.colors.grid;
                                    ctx.lineWidth = 0.5;
                                    ctx.beginPath();
                                    ctx.moveTo(70, sy2);
                                    ctx.lineTo(540, sy2);
                                    ctx.stroke();
                                }

                                for (var xv2 = 10; xv2 <= 50; xv2 += 10) {
                                    var sx2 = 70 + xv2 * xScale2;
                                    ctx.fillStyle = viz.colors.text;
                                    ctx.font = '10px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'top';
                                    ctx.fillText(xv2, sx2, 345);
                                }

                                // CRLB = lambda^2/n => normalized: 1/n
                                ctx.strokeStyle = viz.colors.green;
                                ctx.lineWidth = 2.5;
                                ctx.beginPath();
                                for (var k = 0; k < nValues2.length; k++) {
                                    var nn4 = nValues2[k];
                                    var px4 = 70 + nn4 * xScale2;
                                    var py4 = 340 - (1 / nn4) * yScale2;
                                    if (k === 0) ctx.moveTo(px4, py4);
                                    else ctx.lineTo(px4, py4);
                                }
                                ctx.stroke();

                                // Unbiased estimator variance
                                ctx.strokeStyle = viz.colors.blue;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                var first = true;
                                for (var k2 = 0; k2 < nValues2.length; k2++) {
                                    var nn5 = nValues2[k2];
                                    if (nn5 < 3) continue;
                                    var varNorm = nn5 / ((nn5 - 1) * (nn5 - 2));
                                    var px5 = 70 + nn5 * xScale2;
                                    var py5 = 340 - varNorm * yScale2;
                                    if (py5 < 30) { first = true; continue; }
                                    if (first) { ctx.moveTo(px5, py5); first = false; }
                                    else ctx.lineTo(px5, py5);
                                }
                                ctx.stroke();

                                // MLE MSE
                                ctx.strokeStyle = viz.colors.orange;
                                ctx.lineWidth = 2;
                                ctx.setLineDash([6, 3]);
                                ctx.beginPath();
                                first = true;
                                for (var k3 = 0; k3 < nValues2.length; k3++) {
                                    var nn6 = nValues2[k3];
                                    if (nn6 < 3) continue;
                                    var mseNorm = 1 / (nn6 - 2);
                                    var px6 = 70 + nn6 * xScale2;
                                    var py6 = 340 - mseNorm * yScale2;
                                    if (py6 < 30) { first = true; continue; }
                                    if (first) { ctx.moveTo(px6, py6); first = false; }
                                    else ctx.lineTo(px6, py6);
                                }
                                ctx.stroke();
                                ctx.setLineDash([]);

                                var selX2 = 70 + n * xScale2;
                                ctx.strokeStyle = viz.colors.white + '44';
                                ctx.lineWidth = 1;
                                ctx.setLineDash([3, 3]);
                                ctx.beginPath();
                                ctx.moveTo(selX2, 30);
                                ctx.lineTo(selX2, 340);
                                ctx.stroke();
                                ctx.setLineDash([]);

                                viz.screenText('Exp(\u03BB): Estimate \u03BB (normalized by \u03BB\u00B2)', 310, 44, viz.colors.white, 12);

                                ctx.fillStyle = viz.colors.green;
                                ctx.fillRect(100, 58, 15, 3);
                                viz.screenText('CRLB = \u03BB\u00B2/n', 120, 60, viz.colors.green, 11, 'left');

                                ctx.fillStyle = viz.colors.blue;
                                ctx.fillRect(100, 75, 15, 3);
                                viz.screenText('Var(unbiased) = \u03BB\u00B2n/((n-1)(n-2))', 120, 77, viz.colors.blue, 11, 'left');

                                ctx.fillStyle = viz.colors.orange;
                                ctx.setLineDash([6, 3]);
                                ctx.strokeStyle = viz.colors.orange;
                                ctx.beginPath(); ctx.moveTo(100, 93); ctx.lineTo(115, 93); ctx.stroke();
                                ctx.setLineDash([]);
                                viz.screenText('MSE(MLE) = \u03BB\u00B2/(n-2) [biased]', 120, 94, viz.colors.orange, 11, 'left');
                            }
                        }

                        draw();

                        VizEngine.createSlider(controls, 'n', 2, 50, n, 1, function(val) {
                            n = Math.round(val);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Normal \u03BC', function() {
                            dist = 'normal';
                            draw();
                        });

                        VizEngine.createButton(controls, 'Exponential \u03BB', function() {
                            dist = 'exponential';
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '计算 Bernoulli(\\(p\\)) 分布中 \\(p\\) 的Fisher信息量，并由此得到 \\(\\hat{p} = \\bar{X}\\) 的CRLB。验证 \\(\\bar{X}\\) 是有效估计量。',
                    hint: '\\(\\log f(x;p) = x\\log p + (1-x)\\log(1-p)\\)，对 \\(p\\) 求二阶导。',
                    solution: '\\(\\frac{\\partial^2}{\\partial p^2}\\log f = -\\frac{x}{p^2} - \\frac{1-x}{(1-p)^2}\\)。取期望：\\(I(p) = \\frac{1}{p(1-p)}\\)。CRLB = \\(\\frac{1}{nI(p)} = \\frac{p(1-p)}{n}\\)。而 \\(\\operatorname{Var}(\\bar{X}) = \\frac{p(1-p)}{n}\\) 恰好等于CRLB，因此 \\(\\bar{X}\\) 是有效估计量。'
                },
                {
                    question: '设 \\(X_1, \\ldots, X_n \\sim N(0, \\sigma^2)\\)（均值已知为0）。求 \\(\\sigma^2\\) 的Fisher信息量和CRLB，并验证 \\(\\frac{1}{n}\\sum X_i^2\\) 是否为有效估计量。',
                    hint: '\\(\\log f = -\\frac{1}{2}\\log(2\\pi\\sigma^2) - \\frac{x^2}{2\\sigma^2}\\)，令 \\(\\eta = \\sigma^2\\) 后对 \\(\\eta\\) 求导。',
                    solution: '以 \\(\\eta = \\sigma^2\\) 为参数：\\(\\frac{\\partial}{\\partial\\eta}\\log f = -\\frac{1}{2\\eta} + \\frac{x^2}{2\\eta^2}\\)。\\(\\frac{\\partial^2}{\\partial\\eta^2}\\log f = \\frac{1}{2\\eta^2} - \\frac{x^2}{\\eta^3}\\)。取期望：\\(I(\\eta) = -\\frac{1}{2\\eta^2} + \\frac{\\eta}{\\eta^3} = \\frac{1}{2\\sigma^4}\\)。CRLB = \\(\\frac{2\\sigma^4}{n}\\)。而 \\(W = \\frac{1}{n}\\sum X_i^2\\) 有 \\(\\operatorname{Var}(W) = \\frac{2\\sigma^4}{n}\\)（因为 \\(nW/\\sigma^2 \\sim \\chi^2_n\\)），恰等于CRLB，所以 \\(W\\) 是有效估计量。'
                },
                {
                    question: '为什么CRLB不适用于均匀分布 \\(U(0, \\theta)\\)？对该分布，\\(X_{(n)}\\) 的方差衰减速率如何？',
                    hint: '检查正则条件：支撑集 \\([0, \\theta]\\) 是否依赖于参数？',
                    solution: 'CRLB要求支撑集不依赖于 \\(\\theta\\)，但 \\(U(0,\\theta)\\) 的支撑集 \\([0,\\theta]\\) 随 \\(\\theta\\) 变化，违反正则条件。\\(X_{(n)}\\) 的方差为 \\(\\operatorname{Var}(X_{(n)}) = \\frac{n\\theta^2}{(n+1)^2(n+2)} = O(1/n^2)\\)，远快于正则情形的 \\(O(1/n)\\)。这说明非正则分布可以实现"超效率"。'
                }
            ]
        },

        // ===== Section 4: Rao-Blackwell 定理 =====
        {
            id: 'ch07-sec04',
            title: 'Rao-Blackwell定理',
            content: `
                <h2>Rao-Blackwell 定理</h2>

                <p>Rao-Blackwell定理提供了一种系统性地改进估计量的方法：对任意无偏估计量，通过对充分统计量求条件期望，可以得到一个方差不增的无偏估计量。</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.12 (Rao-Blackwell)</div>
                    <div class="env-body">
                        <p>设 \\(W\\) 是 \\(\\tau(\\theta)\\) 的无偏估计量，\\(T\\) 是 \\(\\theta\\) 的充分统计量。令</p>
                        \\[\\phi(T) = \\mathbb{E}[W \\mid T].\\]
                        <p>则：</p>
                        <p>(a) \\(\\phi(T)\\) 是 \\(\\tau(\\theta)\\) 的无偏估计量：\\(\\mathbb{E}[\\phi(T)] = \\tau(\\theta)\\)；</p>
                        <p>(b) \\(\\phi(T)\\) 的方差不超过 \\(W\\) 的方差：\\(\\operatorname{Var}(\\phi(T)) \\leq \\operatorname{Var}(W)\\)；</p>
                        <p>(c) 更强地，\\(\\operatorname{MSE}(\\phi(T)) \\leq \\operatorname{MSE}(W)\\)。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(a)</strong> 由迭代期望：\\(\\mathbb{E}[\\phi(T)] = \\mathbb{E}[\\mathbb{E}[W|T]] = \\mathbb{E}[W] = \\tau(\\theta)\\)。</p>
                        <p><strong>(b)</strong> 由全方差公式 (Eve's law)：</p>
                        \\[\\operatorname{Var}(W) = \\mathbb{E}[\\operatorname{Var}(W|T)] + \\operatorname{Var}(\\mathbb{E}[W|T]) = \\mathbb{E}[\\operatorname{Var}(W|T)] + \\operatorname{Var}(\\phi(T)).\\]
                        <p>由于 \\(\\mathbb{E}[\\operatorname{Var}(W|T)] \\geq 0\\)，即得 \\(\\operatorname{Var}(\\phi(T)) \\leq \\operatorname{Var}(W)\\)。等号成立当且仅当 \\(W\\) 已经是 \\(T\\) 的函数。</p>
                        <p><strong>(c)</strong> 对于MSE的情况，取 \\(L(w) = (w - \\tau(\\theta))^2\\)，利用条件Jensen不等式 \\(\\mathbb{E}[L(W)|T] \\geq L(\\mathbb{E}[W|T])\\)（\\(L\\) 是凸函数），取期望即得结论。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Rao-Blackwell过程可以这样理解：充分统计量 \\(T\\) 已经包含了数据中关于 \\(\\theta\\) 的所有信息。给定 \\(T\\)，\\(W\\) 的随机波动中没有任何关于 \\(\\theta\\) 的信息——这部分纯粹是"噪声"。条件期望 \\(\\mathbb{E}[W|T]\\) 正好去除了这些噪声，保留了有用信号。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.13 (Bernoulli中的Rao-Blackwellization)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\sim \\text{Bernoulli}(p)\\)。估计 \\(p\\)。</p>
                        <p><strong>初始估计量</strong>：\\(W = X_1\\)，显然无偏但方差大：\\(\\operatorname{Var}(W) = p(1-p)\\)。</p>
                        <p><strong>充分统计量</strong>：\\(T = \\sum_{i=1}^{n} X_i \\sim \\text{Binomial}(n, p)\\)。</p>
                        <p><strong>Rao-Blackwellization</strong>：</p>
                        \\[\\phi(T) = \\mathbb{E}[X_1 | T = t] = P(X_1 = 1 | T = t) = \\frac{\\binom{n-1}{t-1}}{\\binom{n}{t}} = \\frac{t}{n} = \\bar{X}.\\]
                        <p>因此 \\(\\phi(T) = \\bar{X}\\)，其方差 \\(\\operatorname{Var}(\\bar{X}) = p(1-p)/n\\)，比 \\(\\operatorname{Var}(X_1) = p(1-p)\\) 小了 \\(n\\) 倍！</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Rao-Blackwell定理保证了改进，但不一定达到最优。若充分统计量 \\(T\\) 不完备，可能存在多个不同的 \\(\\phi(T)\\)（取决于初始估计量 \\(W\\) 的选取）。要确保唯一性和最优性，需要完备性条件——这正是下一节UMVUE理论的核心。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="rao-blackwell-demo"></div>
            `,
            visualizations: [
                {
                    id: 'rao-blackwell-demo',
                    title: 'Interactive: Rao-Blackwellization 效果对比',
                    description: '比较Rao-Blackwell前后估计量的方差缩减',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 420,
                            originX: 80, originY: 350, scale: 50
                        });

                        var trueP = 0.4;
                        var nObs = 15;
                        var numTrials = 200;
                        var results = {before: [], after: []};

                        function simulate() {
                            results.before = [];
                            results.after = [];
                            for (var i = 0; i < numTrials; i++) {
                                var data = VizEngine.sampleArray(function() {
                                    return Math.random() < trueP ? 1 : 0;
                                }, nObs);
                                results.before.push(data[0]);
                                results.after.push(VizEngine.mean(data));
                            }
                        }

                        simulate();

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            viz.screenText('Rao-Blackwellization: X\u2081 vs X\u0304', viz.width / 2, 18, viz.colors.white, 14);

                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(80, 350);
                            ctx.lineTo(530, 350);
                            ctx.stroke();

                            var xScale = 450;
                            for (var v = 0; v <= 1; v += 0.2) {
                                var sx = 80 + v * xScale;
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'top';
                                ctx.fillText(v.toFixed(1), sx, 353);
                                ctx.strokeStyle = viz.colors.grid;
                                ctx.lineWidth = 0.5;
                                ctx.beginPath();
                                ctx.moveTo(sx, 40);
                                ctx.lineTo(sx, 350);
                                ctx.stroke();
                            }

                            var trueSx = 80 + trueP * xScale;
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            ctx.moveTo(trueSx, 40);
                            ctx.lineTo(trueSx, 350);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            viz.screenText('True p = ' + trueP.toFixed(2), trueSx, 365, viz.colors.green, 11);

                            var beforeBins = {};
                            for (var i = 0; i < results.before.length; i++) {
                                var key = results.before[i];
                                beforeBins[key] = (beforeBins[key] || 0) + 1;
                            }

                            var barHeight = 60;
                            var yStart = 80;
                            viz.screenText('Before: W = X\u2081', 310, yStart - 15, viz.colors.orange, 12);

                            var c0 = beforeBins[0] || 0;
                            var c1 = beforeBins[1] || 0;

                            var bw = 30;
                            var sx0 = 80 + 0 * xScale - bw / 2;
                            var h0 = (c0 / numTrials) * barHeight * 3;
                            ctx.fillStyle = viz.colors.orange + '66';
                            ctx.fillRect(sx0, yStart + barHeight - h0, bw, h0);
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 1;
                            ctx.strokeRect(sx0, yStart + barHeight - h0, bw, h0);
                            viz.screenText(c0 + '', 80 + 0 * xScale, yStart + barHeight - h0 - 8, viz.colors.orange, 10);

                            var sx1 = 80 + 1 * xScale - bw / 2;
                            var h1 = (c1 / numTrials) * barHeight * 3;
                            ctx.fillStyle = viz.colors.orange + '66';
                            ctx.fillRect(sx1, yStart + barHeight - h1, bw, h1);
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.strokeRect(sx1, yStart + barHeight - h1, bw, h1);
                            viz.screenText(c1 + '', 80 + 1 * xScale, yStart + barHeight - h1 - 8, viz.colors.orange, 10);

                            var varBefore = VizEngine.sampleVariance(results.before);
                            viz.screenText('Var(X\u2081) = ' + varBefore.toFixed(4), 310, yStart + barHeight + 15, viz.colors.orange, 11);

                            var yStart2 = yStart + barHeight + 45;
                            viz.screenText('After: \u03C6(T) = X\u0304 = T/n', 310, yStart2, viz.colors.blue, 12);

                            var numBins = 20;
                            var binCounts = new Array(numBins + 1).fill(0);
                            for (var j = 0; j < results.after.length; j++) {
                                var binIdx = Math.round(results.after[j] * nObs);
                                if (binIdx >= 0 && binIdx <= nObs) {
                                    var mapped = Math.floor(binIdx / nObs * numBins);
                                    if (mapped >= numBins) mapped = numBins - 1;
                                    binCounts[mapped]++;
                                }
                            }

                            var maxBinCount = Math.max.apply(null, binCounts);
                            var histY = yStart2 + 15;
                            var histH = 80;

                            for (var b = 0; b < numBins; b++) {
                                var bx1 = 80 + (b / numBins) * xScale;
                                var bx2 = 80 + ((b + 1) / numBins) * xScale;
                                var bh = maxBinCount > 0 ? (binCounts[b] / maxBinCount) * histH : 0;
                                if (bh > 0) {
                                    ctx.fillStyle = viz.colors.blue + '55';
                                    ctx.fillRect(bx1, histY + histH - bh, bx2 - bx1, bh);
                                    ctx.strokeStyle = viz.colors.blue + '88';
                                    ctx.lineWidth = 0.5;
                                    ctx.strokeRect(bx1, histY + histH - bh, bx2 - bx1, bh);
                                }
                            }

                            var varAfter = VizEngine.sampleVariance(results.after);
                            viz.screenText('Var(X\u0304) = ' + varAfter.toFixed(4), 310, histY + histH + 15, viz.colors.blue, 11);

                            var reduction = varBefore > 0 ? (1 - varAfter / varBefore) * 100 : 0;
                            viz.screenText('Variance reduction: ' + reduction.toFixed(1) + '%', 310, histY + histH + 35, viz.colors.teal, 12);

                            var theoVarBefore = trueP * (1 - trueP);
                            var theoVarAfter = trueP * (1 - trueP) / nObs;
                            viz.screenText('Theory: Var(X\u2081) = ' + theoVarBefore.toFixed(4) + ', Var(X\u0304) = ' + theoVarAfter.toFixed(4), 310, histY + histH + 52, viz.colors.text, 10);
                        }

                        draw();

                        VizEngine.createSlider(controls, 'True p', 0.05, 0.95, trueP, 0.05, function(val) {
                            trueP = val;
                            simulate();
                            draw();
                        });

                        VizEngine.createSlider(controls, 'n', 3, 50, nObs, 1, function(val) {
                            nObs = Math.round(val);
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
                    question: '设 \\(X_1, \\ldots, X_n \\sim \\text{Poisson}(\\lambda)\\)。以 \\(W = \\mathbf{1}_{\\{X_1 = 0\\}}\\) 作为 \\(e^{-\\lambda}\\) 的初始无偏估计量，对充分统计量 \\(T = \\sum X_i\\) 进行Rao-Blackwellization。',
                    hint: '需要计算 \\(P(X_1 = 0 | T = t) = P(X_1 = 0, \\sum_{i=2}^n X_i = t) / P(T = t)\\)。利用Poisson分布的加法性质。',
                    solution: '\\(P(X_1 = 0 | T = t) = \\frac{P(X_1 = 0) P(\\sum_{i=2}^n X_i = t)}{P(T = t)} = \\frac{e^{-\\lambda} \\cdot \\frac{((n-1)\\lambda)^t e^{-(n-1)\\lambda}}{t!}}{\\frac{(n\\lambda)^t e^{-n\\lambda}}{t!}} = \\left(\\frac{n-1}{n}\\right)^t = \\left(1 - \\frac{1}{n}\\right)^t\\). 因此 \\(\\phi(T) = \\left(1 - 1/n\\right)^T\\) 是 \\(e^{-\\lambda}\\) 的改进无偏估计量。'
                },
                {
                    question: '在Example 7.13中，说明对于估计 \\(p^2\\)，以 \\(W = X_1 X_2\\) 为初始估计量进行Rao-Blackwellization的结果。',
                    hint: '计算 \\(\\mathbb{E}[X_1 X_2 | T = t]\\)，利用 \\(P(X_1 = 1, X_2 = 1 | T = t) = \\binom{n-2}{t-2}/\\binom{n}{t}\\)。',
                    solution: '\\(\\phi(T) = \\mathbb{E}[X_1 X_2 | T = t] = P(X_1 = 1, X_2 = 1 | T = t) = \\frac{\\binom{n-2}{t-2}}{\\binom{n}{t}} = \\frac{t(t-1)}{n(n-1)}\\)。因此 \\(\\phi(T) = \\frac{T(T-1)}{n(n-1)}\\)。可以验证 \\(\\mathbb{E}[\\phi(T)] = p^2\\)，且 \\(\\operatorname{Var}(\\phi(T)) \\leq \\operatorname{Var}(X_1 X_2) = p^2(1-p^2)\\)。'
                },
                {
                    question: '证明：若 \\(W\\) 已经是充分统计量 \\(T\\) 的函数，即 \\(W = g(T)\\)，则Rao-Blackwellization不会进一步改进估计量。',
                    hint: '条件期望的性质：若 \\(W = g(T)\\)，则 \\(\\mathbb{E}[W|T] = ?\\)',
                    solution: '若 \\(W = g(T)\\)，则 \\(\\mathbb{E}[W|T] = \\mathbb{E}[g(T)|T] = g(T) = W\\)。因此 \\(\\phi(T) = W\\)，方差不变。这也可以从全方差公式看出：\\(\\operatorname{Var}(W) = \\operatorname{Var}(\\phi(T)) + \\mathbb{E}[\\operatorname{Var}(W|T)]\\)，而 \\(\\operatorname{Var}(g(T)|T) = 0\\)，所以 \\(\\operatorname{Var}(W) = \\operatorname{Var}(\\phi(T))\\)。'
                }
            ]
        },

        // ===== Section 5: UMVUE =====
        {
            id: 'ch07-sec05',
            title: 'UMVUE',
            content: `
                <h2>一致最小方差无偏估计量 (UMVUE)</h2>

                <p>Rao-Blackwell定理告诉我们如何改进估计量，但最终是否能达到"最优"？Lehmann-Scheffe定理给出了一个完美的答案：当充分统计量是完备的，Rao-Blackwellization直接产生UMVUE。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.14 (UMVUE)</div>
                    <div class="env-body">
                        <p>估计量 \\(W^*\\) 称为 \\(\\tau(\\theta)\\) 的<strong>一致最小方差无偏估计量 (Uniformly Minimum Variance Unbiased Estimator, UMVUE)</strong>，若</p>
                        <p>(a) \\(\\mathbb{E}_{\\theta}[W^*] = \\tau(\\theta)\\) 对所有 \\(\\theta \\in \\Theta\\)；</p>
                        <p>(b) 对任意其他无偏估计量 \\(W\\)，\\(\\operatorname{Var}_{\\theta}(W^*) \\leq \\operatorname{Var}_{\\theta}(W)\\) 对所有 \\(\\theta \\in \\Theta\\)。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.15 (完备统计量)</div>
                    <div class="env-body">
                        <p>设 \\(T\\) 是统计量。若对任意函数 \\(g\\)，</p>
                        \\[\\mathbb{E}_{\\theta}[g(T)] = 0 \\quad \\forall \\theta \\in \\Theta \\implies g(T) = 0 \\text{ a.s. for all } \\theta,\\]
                        <p>则称 \\(T\\) 为<strong>完备统计量 (complete statistic)</strong>。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>完备性是关键。它保证了"基于充分统计量的无偏估计是唯一的"。如果充分统计量不完备，不同的初始估计量 \\(W\\) 可能Rao-Blackwell出不同的结果 \\(\\phi(T)\\)，就无法保证最优性。完备性消除了这种多义性。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.16 (Lehmann-Scheffe)</div>
                    <div class="env-body">
                        <p>设 \\(T\\) 是 \\(\\theta\\) 的<strong>完备充分统计量 (complete sufficient statistic)</strong>。</p>
                        <p>(a) 若 \\(\\phi(T)\\) 是 \\(\\tau(\\theta)\\) 的任意无偏估计量且是 \\(T\\) 的函数，则 \\(\\phi(T)\\) 是 \\(\\tau(\\theta)\\) 的UMVUE。</p>
                        <p>(b) 等价地，若 \\(W\\) 是 \\(\\tau(\\theta)\\) 的任意无偏估计量，则 \\(\\phi(T) = \\mathbb{E}[W|T]\\) 是 \\(\\tau(\\theta)\\) 的UMVUE。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(a)</strong> 设 \\(W\\) 是 \\(\\tau(\\theta)\\) 的任意无偏估计量。由Rao-Blackwell定理，\\(W' = \\mathbb{E}[W|T]\\) 也是无偏的且 \\(\\operatorname{Var}(W') \\leq \\operatorname{Var}(W)\\)。</p>
                        <p>现在 \\(\\phi(T)\\) 和 \\(W'\\) 都是 \\(T\\) 的函数且都无偏估计 \\(\\tau(\\theta)\\)。因此</p>
                        \\[\\mathbb{E}[\\phi(T) - W'] = \\tau(\\theta) - \\tau(\\theta) = 0 \\quad \\forall\\, \\theta.\\]
                        <p>由 \\(T\\) 的<strong>完备性</strong>，\\(\\phi(T) - W' = 0\\) a.s.，即 \\(\\phi(T) = W'\\) a.s. 因此</p>
                        \\[\\operatorname{Var}(\\phi(T)) = \\operatorname{Var}(W') \\leq \\operatorname{Var}(W).\\]
                        <p>由 \\(W\\) 的任意性，\\(\\phi(T)\\) 是UMVUE。</p>
                        <p><strong>(b)</strong> 由(a)和Rao-Blackwell定理直接得到。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Corollary 7.17 (UMVUE的唯一性)</div>
                    <div class="env-body">
                        <p>若UMVUE存在，则它几乎处处唯一。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>设 \\(W_1, W_2\\) 都是UMVUE。则对所有 \\(\\theta\\)，\\(\\operatorname{Var}(W_1) = \\operatorname{Var}(W_2)\\)。令 \\(W_3 = (W_1 + W_2)/2\\)，则 \\(W_3\\) 也是无偏的，且</p>
                        \\[\\operatorname{Var}(W_3) = \\frac{1}{4}\\operatorname{Var}(W_1) + \\frac{1}{4}\\operatorname{Var}(W_2) + \\frac{1}{2}\\operatorname{Cov}(W_1, W_2).\\]
                        <p>由Cauchy-Schwarz，\\(\\operatorname{Cov}(W_1, W_2) \\leq \\sqrt{\\operatorname{Var}(W_1)\\operatorname{Var}(W_2)} = \\operatorname{Var}(W_1)\\)，故 \\(\\operatorname{Var}(W_3) \\leq \\operatorname{Var}(W_1)\\)。</p>
                        <p>但 \\(W_1\\) 是UMVUE，所以等号必须成立，这要求 \\(W_1 = W_2\\) a.s.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.18 (寻找UMVUE的策略)</div>
                    <div class="env-body">
                        <p>寻找 \\(\\tau(\\theta)\\) 的UMVUE有两种基本方法：</p>
                        <p><strong>方法一（直接法）</strong>：找到完备充分统计量 \\(T\\)，然后直接构造 \\(T\\) 的函数 \\(\\phi(T)\\) 使得 \\(\\mathbb{E}[\\phi(T)] = \\tau(\\theta)\\)。</p>
                        <p><strong>方法二（Rao-Blackwell法）</strong>：(i) 找任意无偏估计量 \\(W\\)；(ii) 找完备充分统计量 \\(T\\)；(iii) 计算 \\(\\phi(T) = \\mathbb{E}[W|T]\\)。</p>
                        <p>在指数族中，方法一通常更简洁；对于更复杂的问题，方法二可能更系统。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.19 (常见分布的UMVUE)</div>
                    <div class="env-body">
                        <p><strong>正态分布</strong> \\(N(\\mu, \\sigma^2)\\)（两参数均未知）：完备充分统计量为 \\((\\sum X_i, \\sum X_i^2)\\)。</p>
                        <p>&bull; \\(\\mu\\) 的 UMVUE：\\(\\bar{X}\\)</p>
                        <p>&bull; \\(\\sigma^2\\) 的 UMVUE：\\(S^2 = \\frac{1}{n-1}\\sum(X_i - \\bar{X})^2\\)</p>
                        <p><strong>Poisson</strong> \\(\\text{Poisson}(\\lambda)\\)：完备充分统计量为 \\(T = \\sum X_i\\)。</p>
                        <p>&bull; \\(\\lambda\\) 的 UMVUE：\\(\\bar{X}\\)</p>
                        <p>&bull; \\(P(X = 0) = e^{-\\lambda}\\) 的 UMVUE：\\(\\left(1 - \\frac{1}{n}\\right)^T\\)</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>UMVUE并非万能。(1) 它仅在无偏估计量的类中最优——有偏估计量（如James-Stein估计量）可以有更小的MSE。(2) 不是所有参数都存在UMVUE。(3) UMVUE可能不是可容许的 (admissible)，特别是在高维问题中。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="umvue-flowchart"></div>
            `,
            visualizations: [
                {
                    id: 'umvue-flowchart',
                    title: 'Interactive: UMVUE 寻找决策流程',
                    description: '可视化寻找UMVUE的逻辑流程与实例演示',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 450,
                            originX: 280, originY: 225, scale: 1
                        });

                        var selectedExample = 0;
                        var examples = [
                            {
                                name: 'N(\u03BC, \u03C3\u00B2 known)',
                                param: '\u03BC',
                                css: 'T = X\u0304',
                                complete: true,
                                umvue: '\u03C6(T) = X\u0304',
                                variance: '\u03C3\u00B2/n',
                                crlb: '\u03C3\u00B2/n',
                                efficient: true
                            },
                            {
                                name: 'Poisson(\u03BB)',
                                param: '\u03BB',
                                css: 'T = \u2211X\u1D62',
                                complete: true,
                                umvue: '\u03C6(T) = T/n = X\u0304',
                                variance: '\u03BB/n',
                                crlb: '\u03BB/n',
                                efficient: true
                            },
                            {
                                name: 'Poisson(\u03BB), \u03C4(\u03BB) = e^{-\u03BB}',
                                param: 'e^{-\u03BB}',
                                css: 'T = \u2211X\u1D62',
                                complete: true,
                                umvue: '\u03C6(T) = (1-1/n)^T',
                                variance: '(complex)',
                                crlb: 'e^{-2\u03BB}(e^{\u03BB/n}-1)/n',
                                efficient: false
                            },
                            {
                                name: 'Bernoulli(p)',
                                param: 'p',
                                css: 'T = \u2211X\u1D62',
                                complete: true,
                                umvue: '\u03C6(T) = T/n = X\u0304',
                                variance: 'p(1-p)/n',
                                crlb: 'p(1-p)/n',
                                efficient: true
                            },
                            {
                                name: 'U(0, \u03B8)',
                                param: '\u03B8',
                                css: 'T = X_(n)',
                                complete: true,
                                umvue: '\u03C6(T) = (n+1)/n \u00B7 X_(n)',
                                variance: '\u03B8\u00B2/(n(n+2))',
                                crlb: 'N/A (non-regular)',
                                efficient: false
                            }
                        ];

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var ex = examples[selectedExample];

                            viz.screenText('UMVUE Decision Flowchart', viz.width / 2, 16, viz.colors.white, 15);

                            var boxW = 180;
                            var boxH = 36;

                            function drawBox(x, y, text, color, highlight) {
                                ctx.fillStyle = highlight ? color + '44' : color + '22';
                                ctx.strokeStyle = color;
                                ctx.lineWidth = highlight ? 2.5 : 1.5;
                                var r = 6;
                                ctx.beginPath();
                                ctx.moveTo(x - boxW / 2 + r, y - boxH / 2);
                                ctx.lineTo(x + boxW / 2 - r, y - boxH / 2);
                                ctx.quadraticCurveTo(x + boxW / 2, y - boxH / 2, x + boxW / 2, y - boxH / 2 + r);
                                ctx.lineTo(x + boxW / 2, y + boxH / 2 - r);
                                ctx.quadraticCurveTo(x + boxW / 2, y + boxH / 2, x + boxW / 2 - r, y + boxH / 2);
                                ctx.lineTo(x - boxW / 2 + r, y + boxH / 2);
                                ctx.quadraticCurveTo(x - boxW / 2, y + boxH / 2, x - boxW / 2, y + boxH / 2 - r);
                                ctx.lineTo(x - boxW / 2, y - boxH / 2 + r);
                                ctx.quadraticCurveTo(x - boxW / 2, y - boxH / 2, x - boxW / 2 + r, y - boxH / 2);
                                ctx.closePath();
                                ctx.fill();
                                ctx.stroke();
                                viz.screenText(text, x, y, viz.colors.white, 11);
                            }

                            function drawArrow(x1, y1, x2, y2, label) {
                                ctx.strokeStyle = viz.colors.text;
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                ctx.moveTo(x1, y1);
                                ctx.lineTo(x2, y2);
                                ctx.stroke();
                                var angle = Math.atan2(y2 - y1, x2 - x1);
                                ctx.fillStyle = viz.colors.text;
                                ctx.beginPath();
                                ctx.moveTo(x2, y2);
                                ctx.lineTo(x2 - 8 * Math.cos(angle - 0.4), y2 - 8 * Math.sin(angle - 0.4));
                                ctx.lineTo(x2 - 8 * Math.cos(angle + 0.4), y2 - 8 * Math.sin(angle + 0.4));
                                ctx.closePath();
                                ctx.fill();
                                if (label) {
                                    viz.screenText(label, (x1 + x2) / 2 + 12, (y1 + y2) / 2, viz.colors.teal, 10, 'left');
                                }
                            }

                            drawBox(280, 55, 'Step 1: Find sufficient T', viz.colors.blue, true);
                            drawArrow(280, 55 + boxH / 2, 280, 110 - boxH / 2, ex.css);
                            drawBox(280, 110, 'Step 2: Is T complete?', viz.colors.orange, true);

                            drawArrow(280, 110 + boxH / 2, 180, 170 - boxH / 2, 'Yes');
                            drawBox(180, 170, 'Step 3a: Find \u03C6(T) unbiased', viz.colors.green, ex.complete);

                            drawArrow(180, 170 + boxH / 2, 180, 225 - boxH / 2, '');
                            drawBox(180, 225, '\u03C6(T) is the UMVUE!', viz.colors.green, ex.complete);

                            drawArrow(370, 110 + boxH / 2 - 5, 400, 170 - boxH / 2, 'No');
                            drawBox(400, 170, 'No guaranteed UMVUE', viz.colors.red, !ex.complete);

                            drawArrow(400, 170 + boxH / 2, 400, 225 - boxH / 2, '');
                            drawBox(400, 225, 'Try other methods', viz.colors.red, !ex.complete);

                            drawBox(180, 285, 'Alt: Start with any W', viz.colors.purple, true);
                            drawArrow(180, 285 + boxH / 2, 180, 340 - boxH / 2, '');
                            drawBox(180, 340, 'Compute E[W|T]', viz.colors.purple, true);
                            drawArrow(180, 340 + boxH / 2, 180, 390 - boxH / 2, '');
                            drawBox(180, 390, 'If T complete \u2192 UMVUE', viz.colors.purple, true);

                            ctx.fillStyle = viz.colors.white + '11';
                            ctx.strokeStyle = viz.colors.text + '44';
                            ctx.lineWidth = 1;
                            ctx.fillRect(320, 270, 220, 170);
                            ctx.strokeRect(320, 270, 220, 170);

                            viz.screenText('Current Example:', 430, 282, viz.colors.yellow, 11);
                            viz.screenText(ex.name, 430, 300, viz.colors.white, 12);
                            viz.screenText('Estimate: ' + ex.param, 335, 320, viz.colors.text, 10, 'left');
                            viz.screenText('CSS: ' + ex.css, 335, 338, viz.colors.text, 10, 'left');
                            viz.screenText('Complete? ' + (ex.complete ? 'Yes' : 'N/A'), 335, 356, ex.complete ? viz.colors.green : viz.colors.red, 10, 'left');
                            viz.screenText('UMVUE: ' + ex.umvue, 335, 374, viz.colors.teal, 10, 'left');
                            viz.screenText('Var: ' + ex.variance, 335, 392, viz.colors.text, 10, 'left');
                            viz.screenText('CRLB: ' + ex.crlb, 335, 410, viz.colors.text, 10, 'left');
                            viz.screenText('Efficient? ' + (ex.efficient ? 'Yes \u2713' : 'No'), 335, 428, ex.efficient ? viz.colors.green : viz.colors.orange, 10, 'left');
                        }

                        draw();

                        VizEngine.createButton(controls, 'N(\u03BC, \u03C3\u00B2)', function() { selectedExample = 0; draw(); });
                        VizEngine.createButton(controls, 'Poisson(\u03BB)', function() { selectedExample = 1; draw(); });
                        VizEngine.createButton(controls, 'Poisson: e^{-\u03BB}', function() { selectedExample = 2; draw(); });
                        VizEngine.createButton(controls, 'Bernoulli(p)', function() { selectedExample = 3; draw(); });
                        VizEngine.createButton(controls, 'U(0,\u03B8)', function() { selectedExample = 4; draw(); });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\(X_1, \\ldots, X_n \\sim \\text{Exp}(\\lambda)\\)（参数为速率）。找到 \\(1/\\lambda\\)（即均值）的UMVUE。',
                    hint: '指数分布族的完备充分统计量是 \\(T = \\sum X_i\\)。找 \\(T\\) 的函数使期望等于 \\(1/\\lambda\\)。',
                    solution: '完备充分统计量为 \\(T = \\sum X_i\\)，\\(T \\sim \\text{Gamma}(n, \\lambda)\\)，\\(\\mathbb{E}[T] = n/\\lambda\\)。因此 \\(\\phi(T) = T/n = \\bar{X}\\) 满足 \\(\\mathbb{E}[\\bar{X}] = 1/\\lambda\\)。由Lehmann-Scheffe定理，\\(\\bar{X}\\) 是 \\(1/\\lambda\\) 的UMVUE。其方差为 \\(\\operatorname{Var}(\\bar{X}) = 1/(n\\lambda^2)\\)。'
                },
                {
                    question: '设 \\(X_1, \\ldots, X_n \\sim N(\\mu, \\sigma^2)\\)（两个参数均未知）。证明 \\(S^2 = \\frac{1}{n-1}\\sum(X_i - \\bar{X})^2\\) 是 \\(\\sigma^2\\) 的UMVUE。',
                    hint: '正态分布族中 \\((\\bar{X}, \\sum(X_i - \\bar{X})^2)\\) 是完备充分统计量。',
                    solution: '正态分布属于二参数指数族，完备充分统计量为 \\(T = (\\bar{X}, \\sum(X_i - \\bar{X})^2)\\)。\\(S^2 = \\frac{1}{n-1}\\sum(X_i - \\bar{X})^2\\) 是 \\(T\\) 的函数，且 \\(\\mathbb{E}[S^2] = \\sigma^2\\)（无偏）。由Lehmann-Scheffe定理，\\(S^2\\) 是 \\(\\sigma^2\\) 的UMVUE。注意UMVUE并非MSE最优：\\(\\operatorname{MSE}(S^2) = 2\\sigma^4/(n-1) > 2(n-1)\\sigma^4/(n+1)^2 = \\operatorname{MSE}(W_{n+1})\\)。'
                },
                {
                    question: '(Lehmann-Scheffe的应用) 设 \\(X_1, \\ldots, X_n \\sim \\text{Bernoulli}(p)\\)。找到 \\(\\tau(p) = p(1-p)\\)（即方差）的UMVUE。',
                    hint: '完备充分统计量 \\(T = \\sum X_i \\sim \\text{Bin}(n, p)\\)。需要找 \\(g(T)\\) 使 \\(\\mathbb{E}[g(T)] = p(1-p)\\) 对所有 \\(p\\)。可以从 \\(\\mathbb{E}[T(n-T)] = ?\\) 入手。',
                    solution: '\\(\\mathbb{E}[T] = np\\)，\\(\\mathbb{E}[T^2] = np(1-p) + n^2p^2\\)。因此 \\(\\mathbb{E}[T(n-T)] = n\\mathbb{E}[T] - \\mathbb{E}[T^2] = n^2p - np(1-p) - n^2p^2 = n(n-1)p(1-p)\\)。故 \\(\\phi(T) = \\frac{T(n-T)}{n(n-1)} = \\frac{\\bar{X}(1-\\bar{X})}{1-1/n}\\) 满足 \\(\\mathbb{E}[\\phi(T)] = p(1-p)\\)。由Lehmann-Scheffe，这是 \\(p(1-p)\\) 的UMVUE。注意这正是 \\(S^2 = \\frac{n}{n-1}\\bar{X}(1-\\bar{X})\\) 的另一种写法。'
                }
            ]
        }
    ]
});

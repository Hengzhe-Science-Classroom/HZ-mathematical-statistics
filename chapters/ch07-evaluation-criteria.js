window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch07',
    number: 7,
    title: 'Evaluation Criteria',
    subtitle: 'Evaluation Criteria for Estimators',
    sections: [
        // ===== Section 1: Unbiasedness =====
        {
            id: 'ch07-sec01',
            title: 'Unbiasedness',
            content: `
                <h2>Unbiasedness / 无偏性</h2>

                <p>In the previous chapter, we learned how to construct point estimators (method of moments, maximum likelihood estimation, etc.). A natural question arises: how do we evaluate the quality of different estimators? This chapter introduces several core evaluation criteria in statistics, starting with the most fundamental one — unbiasedness (无偏性).</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.1 (Bias and Unbiased Estimator)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n\\) be a random sample from the population \\(f(x; \\theta)\\), and let \\(W = W(X_1, \\ldots, X_n)\\) be an estimator of the parameter \\(\\tau(\\theta)\\).</p>
                        <p>The <strong>bias (偏差)</strong> is defined as</p>
                        \\[\\operatorname{Bias}_{\\theta}(W) = \\mathbb{E}_{\\theta}[W] - \\tau(\\theta).\\]
                        <p>If \\(\\operatorname{Bias}_{\\theta}(W) = 0\\) for all \\(\\theta \\in \\Theta\\), i.e., \\(\\mathbb{E}_{\\theta}[W] = \\tau(\\theta)\\), then \\(W\\) is called an <strong>unbiased estimator (无偏估计量)</strong> of \\(\\tau(\\theta)\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Unbiasedness means: if we were to repeat the sampling experiment infinitely many times, the average of the estimator would equal exactly the true parameter value. Bias measures the "systematic deviation" of the estimator — like a ruler whose zero mark is off.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.2 (Unbiasedness of the Sample Mean)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} F\\) with \\(\\mathbb{E}[X_1] = \\mu\\). Then the sample mean</p>
                        \\[\\bar{X} = \\frac{1}{n}\\sum_{i=1}^{n} X_i\\]
                        <p>is an unbiased estimator of \\(\\mu\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By linearity of expectation,</p>
                        \\[\\mathbb{E}[\\bar{X}] = \\mathbb{E}\\left[\\frac{1}{n}\\sum_{i=1}^{n} X_i\\right] = \\frac{1}{n}\\sum_{i=1}^{n} \\mathbb{E}[X_i] = \\frac{1}{n} \\cdot n\\mu = \\mu.\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.3 (Two Forms of Sample Variance)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\sim (\\mu, \\sigma^2)\\). Consider two estimators:</p>
                        \\[S_n^2 = \\frac{1}{n}\\sum_{i=1}^{n}(X_i - \\bar{X})^2, \\quad S^2 = \\frac{1}{n-1}\\sum_{i=1}^{n}(X_i - \\bar{X})^2.\\]
                        <p>Using the identity \\(\\sum(X_i - \\bar{X})^2 = \\sum X_i^2 - n\\bar{X}^2\\), we obtain</p>
                        \\[\\mathbb{E}\\left[\\sum_{i=1}^{n}(X_i - \\bar{X})^2\\right] = n\\sigma^2 + n\\mu^2 - n\\left(\\frac{\\sigma^2}{n} + \\mu^2\\right) = (n-1)\\sigma^2.\\]
                        <p>Therefore \\(\\mathbb{E}[S_n^2] = \\frac{n-1}{n}\\sigma^2 \\neq \\sigma^2\\) (biased), while \\(\\mathbb{E}[S^2] = \\sigma^2\\) (unbiased). Dividing by \\(n-1\\) instead of \\(n\\) is precisely the bias correction.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.4 (Limitations of Unbiasedness)</div>
                    <div class="env-body">
                        <p>Unbiasedness is not always the best criterion. It has the following limitations:</p>
                        <p>(a) For some parameters, no unbiased estimator exists. For example, for \\(X \\sim \\text{Bernoulli}(p)\\), there is no unbiased estimator of \\(1/p\\).</p>
                        <p>(b) Unbiased estimators may not be unique. For example, both \\(X_1\\) and \\(\\bar{X}\\) are unbiased estimators of \\(\\mu\\), but the latter is better.</p>
                        <p>(c) Unbiased estimators can yield unreasonable values. For the uniform distribution \\(U(0, \\theta)\\), although \\(\\frac{n+1}{n}X_{(n)}\\) is unbiased, it may exceed the parameter space.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Unbiasedness is a property concerning the <strong>expectation</strong> and does not guarantee the accuracy of any single estimate. A biased estimator with very small variance is often more practical than an unbiased estimator with very large variance. This is precisely why we need the MSE criterion.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="bias-repeated-samples"></div>
            `,
            visualizations: [
                {
                    id: 'bias-repeated-samples',
                    title: 'Interactive: Bias Visualization — Repeated Sampling / 偏差可视化 — 重复抽样',
                    description: 'Observe the difference in performance between biased and unbiased estimators under repeated sampling / 观察有偏和无偏估计量在重复抽样下的表现差异',
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
                    question: 'Let \\(X_1, \\ldots, X_n \\sim \\text{Poisson}(\\lambda)\\). Prove that \\(\\bar{X}\\) is an unbiased estimator of \\(\\lambda\\), and determine whether \\(\\bar{X}^2\\) is an unbiased estimator of \\(\\lambda^2\\).',
                    hint: 'For unbiasedness, compute \\(\\mathbb{E}[\\bar{X}]\\). For \\(\\bar{X}^2\\), use \\(\\mathbb{E}[\\bar{X}^2] = \\operatorname{Var}(\\bar{X}) + (\\mathbb{E}[\\bar{X}])^2\\).',
                    solution: 'Since \\(\\mathbb{E}[X_i] = \\lambda\\), we have \\(\\mathbb{E}[\\bar{X}] = \\lambda\\), so \\(\\bar{X}\\) is unbiased. However, \\(\\mathbb{E}[\\bar{X}^2] = \\operatorname{Var}(\\bar{X}) + \\lambda^2 = \\lambda/n + \\lambda^2 \\neq \\lambda^2\\), so \\(\\bar{X}^2\\) is not an unbiased estimator of \\(\\lambda^2\\). An unbiased estimator is \\(\\bar{X}^2 - \\bar{X}/n\\).'
                },
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\sim U(0, \\theta)\\). Verify that both \\(2\\bar{X}\\) and \\(\\frac{n+1}{n}X_{(n)}\\) are unbiased estimators of \\(\\theta\\), where \\(X_{(n)} = \\max_i X_i\\).',
                    hint: 'The PDF of \\(X_{(n)}\\) is \\(f_{X_{(n)}}(x) = \\frac{n x^{n-1}}{\\theta^n}\\), \\(0 < x < \\theta\\).',
                    solution: '\\(\\mathbb{E}[2\\bar{X}] = 2 \\cdot \\theta/2 = \\theta\\). For \\(X_{(n)}\\): \\(\\mathbb{E}[X_{(n)}] = \\int_0^{\\theta} x \\cdot \\frac{nx^{n-1}}{\\theta^n} dx = \\frac{n}{\\theta^n} \\cdot \\frac{\\theta^{n+1}}{n+1} = \\frac{n\\theta}{n+1}\\). Therefore \\(\\mathbb{E}\\left[\\frac{n+1}{n}X_{(n)}\\right] = \\theta\\). Both are unbiased.'
                },
                {
                    question: 'Prove that if \\(W\\) is an unbiased estimator of \\(\\tau(\\theta)\\) and \\(g\\) is a nonlinear function, then \\(g(W)\\) is generally not an unbiased estimator of \\(g(\\tau(\\theta))\\). Illustrate with \\(g(x) = x^2\\).',
                    hint: 'Use Jensen\'s inequality: if \\(g\\) is strictly convex, then \\(\\mathbb{E}[g(W)] > g(\\mathbb{E}[W])\\).',
                    solution: 'Take \\(g(x) = x^2\\) (strictly convex). By Jensen\'s inequality, \\(\\mathbb{E}[W^2] \\geq (\\mathbb{E}[W])^2 = \\tau(\\theta)^2\\), with strict inequality when \\(\\operatorname{Var}(W) > 0\\). Therefore \\(\\operatorname{Bias}(W^2) = \\mathbb{E}[W^2] - \\tau(\\theta)^2 = \\operatorname{Var}(W) > 0\\), so \\(W^2\\) is positively biased for \\(\\tau(\\theta)^2\\).'
                }
            ]
        },

        // ===== Section 2: Mean Squared Error =====
        {
            id: 'ch07-sec02',
            title: 'Mean Squared Error',
            content: `
                <h2>Mean Squared Error / 均方误差</h2>

                <p>Unbiasedness only concerns the "center" of an estimator, ignoring its variability. The mean squared error (MSE, 均方误差) jointly accounts for bias and variance, making it the most commonly used criterion for evaluating estimators.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.5 (Mean Squared Error)</div>
                    <div class="env-body">
                        <p>The <strong>mean squared error (MSE, 均方误差)</strong> of an estimator \\(W\\) for the parameter \\(\\tau(\\theta)\\) is defined as</p>
                        \\[\\operatorname{MSE}_{\\theta}(W) = \\mathbb{E}_{\\theta}\\left[(W - \\tau(\\theta))^2\\right].\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.6 (Bias-Variance Decomposition)</div>
                    <div class="env-body">
                        <p>For any estimator \\(W\\), its MSE can be decomposed as</p>
                        \\[\\operatorname{MSE}_{\\theta}(W) = \\operatorname{Var}_{\\theta}(W) + \\left[\\operatorname{Bias}_{\\theta}(W)\\right]^2.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(b = \\operatorname{Bias}_{\\theta}(W) = \\mathbb{E}[W] - \\tau(\\theta)\\). Then</p>
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
                        <p>Consider a target-shooting analogy: bias is the distance from the aim point to the bullseye, and variance is the spread of the shots. MSE comprehensively measures "how accurately one shoots." A perfect marksman (small bias + small variance) is better than one who aims well but has shaky hands (unbiased + large variance), and also better than one with steady hands but a misaligned sight (biased + small variance).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.7 (Bias-Variance Tradeoff)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\sim N(\\mu, \\sigma^2)\\). Consider the family of estimators for \\(\\sigma^2\\):</p>
                        \\[W_c = \\frac{1}{c}\\sum_{i=1}^{n}(X_i - \\bar{X})^2, \\quad c > 0.\\]
                        <p>One can verify: \\(\\mathbb{E}[W_c] = \\frac{n-1}{c}\\sigma^2\\), \\(\\operatorname{Var}(W_c) = \\frac{2(n-1)}{c^2}\\sigma^4\\).</p>
                        <p>Thus \\(\\operatorname{MSE}(W_c) = \\frac{2(n-1)}{c^2}\\sigma^4 + \\left(\\frac{n-1}{c} - 1\\right)^2 \\sigma^4\\).</p>
                        <p>Setting \\(\\frac{d}{dc}\\operatorname{MSE}(W_c) = 0\\) yields the MSE-optimal \\(c^* = n + 1\\).</p>
                        <p>This means the <strong>minimum MSE estimator is \\(W_{n+1}\\), not the unbiased \\(W_{n-1} = S^2\\)</strong>. It is worthwhile to sacrifice a small amount of bias in exchange for a smaller variance to reduce the MSE.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Although the MSE criterion is intuitive and useful, it is a "pointwise" evaluation (for each value of \\(\\theta\\)). There is no estimator that is uniformly MSE-optimal over the entire parameter space (otherwise statistics would be too simple). This leads to a series of more refined criteria, such as minimax and Bayes risk.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="mse-decomposition"></div>
            `,
            visualizations: [
                {
                    id: 'mse-decomposition',
                    title: 'Interactive: MSE = Bias\u00B2 + Variance Decomposition / MSE 分解',
                    description: 'Adjust bias and variance to observe how MSE changes / 调节偏差和方差，观察MSE如何变化',
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
                    question: 'Let \\(X \\sim N(\\theta, 1)\\) and consider the estimator \\(W_a = aX\\) (\\(0 < a < 1\\)) for estimating \\(\\theta\\). Find the value of \\(a\\) that minimizes \\(\\operatorname{MSE}(W_a)\\) (as a function of \\(\\theta\\)).',
                    hint: '\\(\\operatorname{Bias}(W_a) = (a-1)\\theta\\), \\(\\operatorname{Var}(W_a) = a^2\\).',
                    solution: '\\(\\operatorname{MSE}(W_a) = a^2 + (a-1)^2\\theta^2\\). Differentiating with respect to \\(a\\) and setting it to zero: \\(2a + 2(a-1)\\theta^2 = 0\\), yielding \\(a^* = \\frac{\\theta^2}{1+\\theta^2}\\). When \\(|\\theta|\\) is large, \\(a^* \\to 1\\); when \\(\\theta = 0\\), \\(a^* = 0\\). Note that the optimal \\(a\\) depends on the unknown parameter \\(\\theta\\), so this result is theoretically meaningful but cannot be directly used.'
                },
                {
                    question: 'Prove that when estimating \\(\\sigma^2\\) with \\(X_1, \\ldots, X_n \\sim N(\\mu, \\sigma^2)\\), the divisor that minimizes MSE is \\(n+1\\), rather than \\(n-1\\) (unbiased) or \\(n\\) (MLE).',
                    hint: 'Use \\(\\sum(X_i - \\bar{X})^2 / \\sigma^2 \\sim \\chi^2_{n-1}\\) and the fact that the variance of a chi-squared distribution is \\(2(n-1)\\).',
                    solution: 'Let \\(Q = \\sum(X_i - \\bar{X})^2\\), then \\(Q/\\sigma^2 \\sim \\chi^2_{n-1}\\). For \\(W_c = Q/c\\): \\(\\operatorname{MSE}(W_c) = \\frac{\\sigma^4}{c^2}[2(n-1) + (n-1-c)^2]\\). Setting \\(\\frac{d}{dc}\\operatorname{MSE} = 0\\) and simplifying gives \\(c = n+1\\). Then \\(\\operatorname{MSE}(W_{n+1}) = \\frac{2(n-1)}{(n+1)^2}\\sigma^4 < \\frac{2}{n-1}\\sigma^4 = \\operatorname{MSE}(S^2)\\).'
                }
            ]
        },

        // ===== Section 3: Cramer-Rao Lower Bound =====
        {
            id: 'ch07-sec03',
            title: 'Cramer-Rao Lower Bound',
            content: `
                <h2>Cramer-Rao Lower Bound / Cramer-Rao 下界</h2>

                <p>In the previous section, we saw that among unbiased estimators, smaller variance is better. A natural question is: how small can the variance of an unbiased estimator be? The Cramer-Rao inequality provides an elegant lower bound.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.8 (Fisher Information)</div>
                    <div class="env-body">
                        <p>Let \\(X \\sim f(x; \\theta)\\) satisfy regularity conditions (the support does not depend on \\(\\theta\\), and differentiation under the integral sign is permitted). The <strong>Fisher information (Fisher 信息量)</strong> is defined as</p>
                        \\[I(\\theta) = \\mathbb{E}_{\\theta}\\left[\\left(\\frac{\\partial}{\\partial\\theta} \\log f(X; \\theta)\\right)^2\\right] = \\operatorname{Var}_{\\theta}\\left(\\frac{\\partial}{\\partial\\theta} \\log f(X; \\theta)\\right).\\]
                        <p>Equivalently, under further regularity conditions,</p>
                        \\[I(\\theta) = -\\mathbb{E}_{\\theta}\\left[\\frac{\\partial^2}{\\partial\\theta^2} \\log f(X; \\theta)\\right].\\]
                        <p>For \\(n\\) iid samples, the total information is \\(I_n(\\theta) = nI(\\theta)\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Fisher information measures the "information content" in the data about the parameter \\(\\theta\\). If the curvature (negative second derivative) of the log-likelihood \\(\\log f(x;\\theta)\\) with respect to \\(\\theta\\) is large, it means the likelihood function is more "peaked" around the true value, and the parameter is easier to estimate precisely — this corresponds to higher Fisher information.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.9 (Fisher Information for Common Distributions)</div>
                    <div class="env-body">
                        <p><strong>(a) Normal distribution \\(N(\\mu, \\sigma^2)\\)</strong> (\\(\\sigma^2\\) known, estimating \\(\\mu\\)):</p>
                        \\[\\log f = -\\frac{(x-\\mu)^2}{2\\sigma^2} + \\text{const}, \\quad \\frac{\\partial^2}{\\partial\\mu^2}\\log f = -\\frac{1}{\\sigma^2}, \\quad I(\\mu) = \\frac{1}{\\sigma^2}.\\]
                        <p><strong>(b) Poisson(\\(\\lambda\\))</strong>:</p>
                        \\[\\log f = x\\log\\lambda - \\lambda + \\text{const}, \\quad \\frac{\\partial^2}{\\partial\\lambda^2}\\log f = -\\frac{x}{\\lambda^2}, \\quad I(\\lambda) = \\frac{1}{\\lambda}.\\]
                        <p><strong>(c) Bernoulli(\\(p\\))</strong>:</p>
                        \\[I(p) = \\frac{1}{p(1-p)}.\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.10 (Cramer-Rao Inequality)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\sim f(x;\\theta)\\) satisfy regularity conditions, and let \\(W = W(X_1, \\ldots, X_n)\\) be any statistic with \\(\\mathbb{E}_{\\theta}[W] = m(\\theta)\\) differentiable. Then</p>
                        \\[\\operatorname{Var}_{\\theta}(W) \\geq \\frac{[m'(\\theta)]^2}{nI(\\theta)}.\\]
                        <p>In particular, if \\(W\\) is an unbiased estimator of \\(\\theta\\) (i.e., \\(m(\\theta) = \\theta\\), \\(m'(\\theta) = 1\\)), then</p>
                        \\[\\operatorname{Var}_{\\theta}(W) \\geq \\frac{1}{nI(\\theta)}.\\]
                        <p>The quantity \\(1/(nI(\\theta))\\) is called the <strong>Cramer-Rao lower bound (CRLB)</strong>.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p>Let \\(S_n = \\sum_{i=1}^{n} \\frac{\\partial}{\\partial\\theta}\\log f(X_i; \\theta)\\) be the sum of score functions. Note that \\(\\mathbb{E}[S_n] = 0\\) and \\(\\operatorname{Var}(S_n) = nI(\\theta)\\).</p>
                        <p>From \\(\\mathbb{E}[W] = m(\\theta)\\), differentiating with respect to \\(\\theta\\) (the regularity conditions allow interchange of integration and differentiation):</p>
                        \\[m'(\\theta) = \\mathbb{E}[W \\cdot S_n] = \\operatorname{Cov}(W, S_n).\\]
                        <p>The last step uses \\(\\mathbb{E}[S_n] = 0\\). By the Cauchy-Schwarz inequality:</p>
                        \\[[m'(\\theta)]^2 = [\\operatorname{Cov}(W, S_n)]^2 \\leq \\operatorname{Var}(W) \\cdot \\operatorname{Var}(S_n) = \\operatorname{Var}(W) \\cdot nI(\\theta).\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.11 (Efficient Estimator and Efficiency)</div>
                    <div class="env-body">
                        <p>If an unbiased estimator \\(W\\) has variance exactly equal to the CRLB, i.e., \\(\\operatorname{Var}_{\\theta}(W) = \\frac{1}{nI(\\theta)}\\) for all \\(\\theta\\), then \\(W\\) is called an <strong>efficient estimator (有效估计量)</strong>.</p>
                        <p>The <strong>efficiency (效率)</strong> of an estimator is defined as \\(e(W) = \\frac{1/(nI(\\theta))}{\\operatorname{Var}(W)}\\), satisfying \\(0 < e(W) \\leq 1\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>The CRLB requires regularity conditions, in particular that the support does not depend on the parameter. For distributions like \\(U(0, \\theta)\\), the CRLB does not apply! In that case, the variance of \\(X_{(n)}\\) can converge to zero at rate \\(O(1/n^2)\\), faster than the \\(O(1/n)\\) rate in the regular case.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="crlb-variance-plot"></div>
            `,
            visualizations: [
                {
                    id: 'crlb-variance-plot',
                    title: 'Interactive: CRLB vs Actual Variance / CRLB vs 实际方差',
                    description: 'Compare the variance of different estimators with the Cramer-Rao lower bound / 比较不同估计量的方差与Cramer-Rao下界',
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
                    question: 'Compute the Fisher information of \\(p\\) for the Bernoulli(\\(p\\)) distribution, and derive the CRLB for \\(\\hat{p} = \\bar{X}\\). Verify that \\(\\bar{X}\\) is an efficient estimator.',
                    hint: '\\(\\log f(x;p) = x\\log p + (1-x)\\log(1-p)\\). Take the second derivative with respect to \\(p\\).',
                    solution: '\\(\\frac{\\partial^2}{\\partial p^2}\\log f = -\\frac{x}{p^2} - \\frac{1-x}{(1-p)^2}\\). Taking the expectation: \\(I(p) = \\frac{1}{p(1-p)}\\). CRLB = \\(\\frac{1}{nI(p)} = \\frac{p(1-p)}{n}\\). Since \\(\\operatorname{Var}(\\bar{X}) = \\frac{p(1-p)}{n}\\) equals the CRLB exactly, \\(\\bar{X}\\) is an efficient estimator.'
                },
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\sim N(0, \\sigma^2)\\) (mean known to be 0). Find the Fisher information and CRLB for \\(\\sigma^2\\), and verify whether \\(\\frac{1}{n}\\sum X_i^2\\) is an efficient estimator.',
                    hint: '\\(\\log f = -\\frac{1}{2}\\log(2\\pi\\sigma^2) - \\frac{x^2}{2\\sigma^2}\\). Let \\(\\eta = \\sigma^2\\) and differentiate with respect to \\(\\eta\\).',
                    solution: 'With \\(\\eta = \\sigma^2\\) as the parameter: \\(\\frac{\\partial}{\\partial\\eta}\\log f = -\\frac{1}{2\\eta} + \\frac{x^2}{2\\eta^2}\\). \\(\\frac{\\partial^2}{\\partial\\eta^2}\\log f = \\frac{1}{2\\eta^2} - \\frac{x^2}{\\eta^3}\\). Taking the expectation: \\(I(\\eta) = -\\frac{1}{2\\eta^2} + \\frac{\\eta}{\\eta^3} = \\frac{1}{2\\sigma^4}\\). CRLB = \\(\\frac{2\\sigma^4}{n}\\). The estimator \\(W = \\frac{1}{n}\\sum X_i^2\\) has \\(\\operatorname{Var}(W) = \\frac{2\\sigma^4}{n}\\) (since \\(nW/\\sigma^2 \\sim \\chi^2_n\\)), which equals the CRLB exactly, so \\(W\\) is an efficient estimator.'
                },
                {
                    question: 'Why does the CRLB not apply to the uniform distribution \\(U(0, \\theta)\\)? For this distribution, at what rate does the variance of \\(X_{(n)}\\) decay?',
                    hint: 'Check the regularity condition: does the support \\([0, \\theta]\\) depend on the parameter?',
                    solution: 'The CRLB requires that the support does not depend on \\(\\theta\\), but for \\(U(0,\\theta)\\) the support \\([0,\\theta]\\) varies with \\(\\theta\\), violating the regularity condition. The variance of \\(X_{(n)}\\) is \\(\\operatorname{Var}(X_{(n)}) = \\frac{n\\theta^2}{(n+1)^2(n+2)} = O(1/n^2)\\), much faster than the \\(O(1/n)\\) rate in the regular case. This shows that non-regular distributions can achieve "super-efficiency."'
                }
            ]
        },

        // ===== Section 4: Rao-Blackwell Theorem =====
        {
            id: 'ch07-sec04',
            title: 'Rao-Blackwell Theorem',
            content: `
                <h2>Rao-Blackwell Theorem / Rao-Blackwell 定理</h2>

                <p>The Rao-Blackwell theorem provides a systematic method for improving estimators: for any unbiased estimator, by conditioning on a sufficient statistic (充分统计量), one obtains an unbiased estimator with no greater variance.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.12 (Rao-Blackwell)</div>
                    <div class="env-body">
                        <p>Let \\(W\\) be an unbiased estimator of \\(\\tau(\\theta)\\), and let \\(T\\) be a sufficient statistic for \\(\\theta\\). Define</p>
                        \\[\\phi(T) = \\mathbb{E}[W \\mid T].\\]
                        <p>Then:</p>
                        <p>(a) \\(\\phi(T)\\) is an unbiased estimator of \\(\\tau(\\theta)\\): \\(\\mathbb{E}[\\phi(T)] = \\tau(\\theta)\\);</p>
                        <p>(b) The variance of \\(\\phi(T)\\) does not exceed that of \\(W\\): \\(\\operatorname{Var}(\\phi(T)) \\leq \\operatorname{Var}(W)\\);</p>
                        <p>(c) More strongly, \\(\\operatorname{MSE}(\\phi(T)) \\leq \\operatorname{MSE}(W)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(a)</strong> By the tower property (iterated expectation): \\(\\mathbb{E}[\\phi(T)] = \\mathbb{E}[\\mathbb{E}[W|T]] = \\mathbb{E}[W] = \\tau(\\theta)\\).</p>
                        <p><strong>(b)</strong> By the law of total variance (Eve's law):</p>
                        \\[\\operatorname{Var}(W) = \\mathbb{E}[\\operatorname{Var}(W|T)] + \\operatorname{Var}(\\mathbb{E}[W|T]) = \\mathbb{E}[\\operatorname{Var}(W|T)] + \\operatorname{Var}(\\phi(T)).\\]
                        <p>Since \\(\\mathbb{E}[\\operatorname{Var}(W|T)] \\geq 0\\), it follows that \\(\\operatorname{Var}(\\phi(T)) \\leq \\operatorname{Var}(W)\\). Equality holds if and only if \\(W\\) is already a function of \\(T\\).</p>
                        <p><strong>(c)</strong> For the MSE case, take \\(L(w) = (w - \\tau(\\theta))^2\\). By the conditional Jensen inequality \\(\\mathbb{E}[L(W)|T] \\geq L(\\mathbb{E}[W|T])\\) (since \\(L\\) is convex), taking expectations yields the result.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The Rao-Blackwell process can be understood as follows: the sufficient statistic \\(T\\) already captures all the information in the data about \\(\\theta\\). Given \\(T\\), the random fluctuation of \\(W\\) contains no information about \\(\\theta\\) — it is pure "noise." The conditional expectation \\(\\mathbb{E}[W|T]\\) removes exactly this noise while preserving the useful signal.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.13 (Rao-Blackwellization in the Bernoulli Model)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\sim \\text{Bernoulli}(p)\\). Estimate \\(p\\).</p>
                        <p><strong>Initial estimator</strong>: \\(W = X_1\\), clearly unbiased but with large variance: \\(\\operatorname{Var}(W) = p(1-p)\\).</p>
                        <p><strong>Sufficient statistic</strong>: \\(T = \\sum_{i=1}^{n} X_i \\sim \\text{Binomial}(n, p)\\).</p>
                        <p><strong>Rao-Blackwellization</strong>:</p>
                        \\[\\phi(T) = \\mathbb{E}[X_1 | T = t] = P(X_1 = 1 | T = t) = \\frac{\\binom{n-1}{t-1}}{\\binom{n}{t}} = \\frac{t}{n} = \\bar{X}.\\]
                        <p>Therefore \\(\\phi(T) = \\bar{X}\\), with variance \\(\\operatorname{Var}(\\bar{X}) = p(1-p)/n\\), which is \\(n\\) times smaller than \\(\\operatorname{Var}(X_1) = p(1-p)\\)!</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The Rao-Blackwell theorem guarantees improvement, but does not necessarily achieve optimality. If the sufficient statistic \\(T\\) is not complete, there may exist multiple different \\(\\phi(T)\\) (depending on the choice of initial estimator \\(W\\)). To ensure uniqueness and optimality, a completeness condition is needed — this is the core of the UMVUE theory in the next section.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="rao-blackwell-demo"></div>
            `,
            visualizations: [
                {
                    id: 'rao-blackwell-demo',
                    title: 'Interactive: Rao-Blackwellization Effect Comparison / Rao-Blackwellization 效果对比',
                    description: 'Compare the variance reduction before and after Rao-Blackwellization / 比较Rao-Blackwell前后估计量的方差缩减',
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
                    question: 'Let \\(X_1, \\ldots, X_n \\sim \\text{Poisson}(\\lambda)\\). Using \\(W = \\mathbf{1}_{\\{X_1 = 0\\}}\\) as an initial unbiased estimator of \\(e^{-\\lambda}\\), perform Rao-Blackwellization with the sufficient statistic \\(T = \\sum X_i\\).',
                    hint: 'Compute \\(P(X_1 = 0 | T = t) = P(X_1 = 0, \\sum_{i=2}^n X_i = t) / P(T = t)\\). Use the additive property of the Poisson distribution.',
                    solution: '\\(P(X_1 = 0 | T = t) = \\frac{P(X_1 = 0) P(\\sum_{i=2}^n X_i = t)}{P(T = t)} = \\frac{e^{-\\lambda} \\cdot \\frac{((n-1)\\lambda)^t e^{-(n-1)\\lambda}}{t!}}{\\frac{(n\\lambda)^t e^{-n\\lambda}}{t!}} = \\left(\\frac{n-1}{n}\\right)^t = \\left(1 - \\frac{1}{n}\\right)^t\\). Therefore \\(\\phi(T) = \\left(1 - 1/n\\right)^T\\) is the improved unbiased estimator of \\(e^{-\\lambda}\\).'
                },
                {
                    question: 'In Example 7.13, determine the result of Rao-Blackwellization for estimating \\(p^2\\) using \\(W = X_1 X_2\\) as the initial estimator.',
                    hint: 'Compute \\(\\mathbb{E}[X_1 X_2 | T = t]\\), using \\(P(X_1 = 1, X_2 = 1 | T = t) = \\binom{n-2}{t-2}/\\binom{n}{t}\\).',
                    solution: '\\(\\phi(T) = \\mathbb{E}[X_1 X_2 | T = t] = P(X_1 = 1, X_2 = 1 | T = t) = \\frac{\\binom{n-2}{t-2}}{\\binom{n}{t}} = \\frac{t(t-1)}{n(n-1)}\\). Therefore \\(\\phi(T) = \\frac{T(T-1)}{n(n-1)}\\). One can verify that \\(\\mathbb{E}[\\phi(T)] = p^2\\) and \\(\\operatorname{Var}(\\phi(T)) \\leq \\operatorname{Var}(X_1 X_2) = p^2(1-p^2)\\).'
                },
                {
                    question: 'Prove that if \\(W\\) is already a function of the sufficient statistic \\(T\\), i.e., \\(W = g(T)\\), then Rao-Blackwellization does not further improve the estimator.',
                    hint: 'Property of conditional expectation: if \\(W = g(T)\\), then \\(\\mathbb{E}[W|T] = ?\\)',
                    solution: 'If \\(W = g(T)\\), then \\(\\mathbb{E}[W|T] = \\mathbb{E}[g(T)|T] = g(T) = W\\). Therefore \\(\\phi(T) = W\\) and the variance is unchanged. This can also be seen from the law of total variance: \\(\\operatorname{Var}(W) = \\operatorname{Var}(\\phi(T)) + \\mathbb{E}[\\operatorname{Var}(W|T)]\\), and \\(\\operatorname{Var}(g(T)|T) = 0\\), so \\(\\operatorname{Var}(W) = \\operatorname{Var}(\\phi(T))\\).'
                }
            ]
        },

        // ===== Section 5: UMVUE =====
        {
            id: 'ch07-sec05',
            title: 'UMVUE',
            content: `
                <h2>Uniformly Minimum Variance Unbiased Estimator (UMVUE) / 一致最小方差无偏估计量</h2>

                <p>The Rao-Blackwell theorem tells us how to improve estimators, but can we ultimately achieve "optimality"? The Lehmann-Scheffe theorem provides a definitive answer: when the sufficient statistic is complete (完备的), Rao-Blackwellization directly yields the UMVUE.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.14 (UMVUE)</div>
                    <div class="env-body">
                        <p>An estimator \\(W^*\\) is called the <strong>uniformly minimum variance unbiased estimator (UMVUE, 一致最小方差无偏估计量)</strong> of \\(\\tau(\\theta)\\) if</p>
                        <p>(a) \\(\\mathbb{E}_{\\theta}[W^*] = \\tau(\\theta)\\) for all \\(\\theta \\in \\Theta\\);</p>
                        <p>(b) For any other unbiased estimator \\(W\\), \\(\\operatorname{Var}_{\\theta}(W^*) \\leq \\operatorname{Var}_{\\theta}(W)\\) for all \\(\\theta \\in \\Theta\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 7.15 (Complete Statistic)</div>
                    <div class="env-body">
                        <p>A statistic \\(T\\) is called a <strong>complete statistic (完备统计量)</strong> if for any function \\(g\\),</p>
                        \\[\\mathbb{E}_{\\theta}[g(T)] = 0 \\quad \\forall \\theta \\in \\Theta \\implies g(T) = 0 \\text{ a.s. for all } \\theta.\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Completeness (完备性) is the key. It guarantees that "an unbiased estimator based on the sufficient statistic is unique." If the sufficient statistic is not complete, different initial estimators \\(W\\) may yield different Rao-Blackwell results \\(\\phi(T)\\), and optimality cannot be guaranteed. Completeness eliminates this ambiguity.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 7.16 (Lehmann-Scheffe)</div>
                    <div class="env-body">
                        <p>Let \\(T\\) be a <strong>complete sufficient statistic (完备充分统计量)</strong> for \\(\\theta\\).</p>
                        <p>(a) If \\(\\phi(T)\\) is any unbiased estimator of \\(\\tau(\\theta)\\) that is a function of \\(T\\), then \\(\\phi(T)\\) is the UMVUE of \\(\\tau(\\theta)\\).</p>
                        <p>(b) Equivalently, if \\(W\\) is any unbiased estimator of \\(\\tau(\\theta)\\), then \\(\\phi(T) = \\mathbb{E}[W|T]\\) is the UMVUE of \\(\\tau(\\theta)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(a)</strong> Let \\(W\\) be any unbiased estimator of \\(\\tau(\\theta)\\). By the Rao-Blackwell theorem, \\(W' = \\mathbb{E}[W|T]\\) is also unbiased and \\(\\operatorname{Var}(W') \\leq \\operatorname{Var}(W)\\).</p>
                        <p>Now both \\(\\phi(T)\\) and \\(W'\\) are functions of \\(T\\) and both unbiasedly estimate \\(\\tau(\\theta)\\). Therefore</p>
                        \\[\\mathbb{E}[\\phi(T) - W'] = \\tau(\\theta) - \\tau(\\theta) = 0 \\quad \\forall\\, \\theta.\\]
                        <p>By the <strong>completeness</strong> of \\(T\\), \\(\\phi(T) - W' = 0\\) a.s., i.e., \\(\\phi(T) = W'\\) a.s. Therefore</p>
                        \\[\\operatorname{Var}(\\phi(T)) = \\operatorname{Var}(W') \\leq \\operatorname{Var}(W).\\]
                        <p>Since \\(W\\) was arbitrary, \\(\\phi(T)\\) is the UMVUE.</p>
                        <p><strong>(b)</strong> Follows directly from (a) and the Rao-Blackwell theorem.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Corollary 7.17 (Uniqueness of the UMVUE)</div>
                    <div class="env-body">
                        <p>If a UMVUE exists, it is almost surely unique.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Suppose \\(W_1, W_2\\) are both UMVUEs. Then for all \\(\\theta\\), \\(\\operatorname{Var}(W_1) = \\operatorname{Var}(W_2)\\). Let \\(W_3 = (W_1 + W_2)/2\\). Then \\(W_3\\) is also unbiased, and</p>
                        \\[\\operatorname{Var}(W_3) = \\frac{1}{4}\\operatorname{Var}(W_1) + \\frac{1}{4}\\operatorname{Var}(W_2) + \\frac{1}{2}\\operatorname{Cov}(W_1, W_2).\\]
                        <p>By Cauchy-Schwarz, \\(\\operatorname{Cov}(W_1, W_2) \\leq \\sqrt{\\operatorname{Var}(W_1)\\operatorname{Var}(W_2)} = \\operatorname{Var}(W_1)\\), so \\(\\operatorname{Var}(W_3) \\leq \\operatorname{Var}(W_1)\\).</p>
                        <p>But \\(W_1\\) is a UMVUE, so equality must hold, which requires \\(W_1 = W_2\\) a.s.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.18 (Strategies for Finding the UMVUE)</div>
                    <div class="env-body">
                        <p>There are two basic methods for finding the UMVUE of \\(\\tau(\\theta)\\):</p>
                        <p><strong>Method 1 (Direct method)</strong>: Find a complete sufficient statistic \\(T\\), then directly construct a function \\(\\phi(T)\\) of \\(T\\) such that \\(\\mathbb{E}[\\phi(T)] = \\tau(\\theta)\\).</p>
                        <p><strong>Method 2 (Rao-Blackwell method)</strong>: (i) Find any unbiased estimator \\(W\\); (ii) Find a complete sufficient statistic \\(T\\); (iii) Compute \\(\\phi(T) = \\mathbb{E}[W|T]\\).</p>
                        <p>In exponential families, Method 1 is usually more concise; for more complex problems, Method 2 may be more systematic.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 7.19 (UMVUEs for Common Distributions)</div>
                    <div class="env-body">
                        <p><strong>Normal distribution</strong> \\(N(\\mu, \\sigma^2)\\) (both parameters unknown): the complete sufficient statistic is \\((\\sum X_i, \\sum X_i^2)\\).</p>
                        <p>&bull; UMVUE of \\(\\mu\\): \\(\\bar{X}\\)</p>
                        <p>&bull; UMVUE of \\(\\sigma^2\\): \\(S^2 = \\frac{1}{n-1}\\sum(X_i - \\bar{X})^2\\)</p>
                        <p><strong>Poisson</strong> \\(\\text{Poisson}(\\lambda)\\): the complete sufficient statistic is \\(T = \\sum X_i\\).</p>
                        <p>&bull; UMVUE of \\(\\lambda\\): \\(\\bar{X}\\)</p>
                        <p>&bull; UMVUE of \\(P(X = 0) = e^{-\\lambda}\\): \\(\\left(1 - \\frac{1}{n}\\right)^T\\)</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>The UMVUE is not a panacea. (1) It is optimal only within the class of unbiased estimators — biased estimators (such as the James-Stein estimator) can have smaller MSE. (2) Not every parameter has a UMVUE. (3) The UMVUE may not be admissible (可容许的), especially in high-dimensional problems.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="umvue-flowchart"></div>
            `,
            visualizations: [
                {
                    id: 'umvue-flowchart',
                    title: 'Interactive: UMVUE Decision Flowchart / UMVUE 寻找决策流程',
                    description: 'Visualize the logical flow for finding the UMVUE with example demonstrations / 可视化寻找UMVUE的逻辑流程与实例演示',
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
                    question: 'Let \\(X_1, \\ldots, X_n \\sim \\text{Exp}(\\lambda)\\) (rate parameterization). Find the UMVUE of \\(1/\\lambda\\) (the mean).',
                    hint: 'The complete sufficient statistic for the exponential family is \\(T = \\sum X_i\\). Find a function of \\(T\\) whose expectation equals \\(1/\\lambda\\).',
                    solution: 'The complete sufficient statistic is \\(T = \\sum X_i\\), where \\(T \\sim \\text{Gamma}(n, \\lambda)\\) with \\(\\mathbb{E}[T] = n/\\lambda\\). Therefore \\(\\phi(T) = T/n = \\bar{X}\\) satisfies \\(\\mathbb{E}[\\bar{X}] = 1/\\lambda\\). By the Lehmann-Scheffe theorem, \\(\\bar{X}\\) is the UMVUE of \\(1/\\lambda\\). Its variance is \\(\\operatorname{Var}(\\bar{X}) = 1/(n\\lambda^2)\\).'
                },
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\sim N(\\mu, \\sigma^2)\\) (both parameters unknown). Prove that \\(S^2 = \\frac{1}{n-1}\\sum(X_i - \\bar{X})^2\\) is the UMVUE of \\(\\sigma^2\\).',
                    hint: 'In the normal family, \\((\\bar{X}, \\sum(X_i - \\bar{X})^2)\\) is a complete sufficient statistic.',
                    solution: 'The normal distribution belongs to a two-parameter exponential family, with complete sufficient statistic \\(T = (\\bar{X}, \\sum(X_i - \\bar{X})^2)\\). Since \\(S^2 = \\frac{1}{n-1}\\sum(X_i - \\bar{X})^2\\) is a function of \\(T\\) and \\(\\mathbb{E}[S^2] = \\sigma^2\\) (unbiased), by the Lehmann-Scheffe theorem, \\(S^2\\) is the UMVUE of \\(\\sigma^2\\). Note that the UMVUE is not MSE-optimal: \\(\\operatorname{MSE}(S^2) = 2\\sigma^4/(n-1) > 2(n-1)\\sigma^4/(n+1)^2 = \\operatorname{MSE}(W_{n+1})\\).'
                },
                {
                    question: '(Application of Lehmann-Scheffe) Let \\(X_1, \\ldots, X_n \\sim \\text{Bernoulli}(p)\\). Find the UMVUE of \\(\\tau(p) = p(1-p)\\) (the variance).',
                    hint: 'The complete sufficient statistic is \\(T = \\sum X_i \\sim \\text{Bin}(n, p)\\). Find \\(g(T)\\) such that \\(\\mathbb{E}[g(T)] = p(1-p)\\) for all \\(p\\). Start from \\(\\mathbb{E}[T(n-T)] = ?\\)',
                    solution: '\\(\\mathbb{E}[T] = np\\), \\(\\mathbb{E}[T^2] = np(1-p) + n^2p^2\\). Therefore \\(\\mathbb{E}[T(n-T)] = n\\mathbb{E}[T] - \\mathbb{E}[T^2] = n^2p - np(1-p) - n^2p^2 = n(n-1)p(1-p)\\). Hence \\(\\phi(T) = \\frac{T(n-T)}{n(n-1)} = \\frac{\\bar{X}(1-\\bar{X})}{1-1/n}\\) satisfies \\(\\mathbb{E}[\\phi(T)] = p(1-p)\\). By Lehmann-Scheffe, this is the UMVUE of \\(p(1-p)\\). Note this is another way of writing \\(S^2 = \\frac{n}{n-1}\\bar{X}(1-\\bar{X})\\).'
                }
            ]
        }
    ]
});

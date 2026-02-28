window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch06',
    number: 6,
    title: 'Point Estimation',
    subtitle: 'Point Estimation',
    sections: [
        // ===== Section 1: Estimators and Estimates =====
        {
            id: 'ch06-sec01',
            title: 'Estimators and Estimates',
            content: `
 <h2>Estimators and Estimates</h2>

 <p>One of the central tasks of statistical inference is to infer unknown population parameters from observed data. The goal of <strong>point estimation</strong> is to use the value of a statistic to "guess" the true value of the parameter.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.1 (Statistical Model and Parameter Space)</div>
                    <div class="env-body">
                        <p>Suppose the observed data \\(X_1, \\ldots, X_n\\) come from a family of distributions \\(\\{P_\\theta : \\theta \\in \\Theta\\}\\), where:</p>
                        <ul>
 <li>\\(\\Theta \\subseteq \\mathbb{R}^k\\) is called the <strong>parameter space</strong>;</li>
 <li>\\(\\theta\\) is the unknown <strong>true parameter</strong>;</li>
 <li>The triple \\((\\mathcal{X}, \\{P_\\theta\\}, \\Theta)\\) constitutes a <strong>parametric statistical model</strong>.</li>
                        </ul>
                        <p>Examples: Bernoulli distribution \\(\\Theta = (0, 1)\\); Normal distribution \\(N(\\mu, \\sigma^2)\\): \\(\\Theta = \\mathbb{R} \\times (0, \\infty)\\); Uniform distribution \\(U(0, \\theta)\\): \\(\\Theta = (0, \\infty)\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.2 (Estimator and Estimate)</div>
                    <div class="env-body">
 <p>Let \\(g(\\theta)\\) be some function of the parameter (called the <strong>estimation target</strong>). An <strong>estimator</strong> is a measurable function of the sample \\(\\hat{g} = T(X_1, \\ldots, X_n)\\), where \\(T\\) does not depend on the unknown parameter \\(\\theta\\).</p>
 <p>After observing specific sample values \\(x_1, \\ldots, x_n\\), the number \\(T(x_1, \\ldots, x_n)\\) is called an <strong>estimate</strong>.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>An estimator is a <em>random variable</em> -- it varies with the randomness of the sample; an estimate is a <em>number</em> -- it is the result computed from a specific observation. Think of a weather forecasting model (estimator) versus today's forecast result (estimate): the two have fundamentally different identities. We evaluate the quality of an estimator at the random variable level (e.g., unbiasedness, variance), while a specific estimate is merely a single realization of that random variable.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.3 (Common Estimators)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\).</p>
                        <p>(a) The sample mean \\(\\bar{X} = \\frac{1}{n}\\sum_{i=1}^n X_i\\) is an estimator of \\(\\mu\\).</p>
                        <p>(b) The sample variance \\(S^2 = \\frac{1}{n-1}\\sum_{i=1}^n (X_i - \\bar{X})^2\\) is an estimator of \\(\\sigma^2\\).</p>
                        <p>(c) The sample median \\(\\operatorname{Med}(X_1, \\ldots, X_n)\\) is also an estimator of \\(\\mu\\).</p>
                        <p>For the same parameter, the estimator is not unique -- we need criteria to judge which is better (see Chapter 7 for details).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The point estimation problem can be abstracted as: given a statistical model \\(\\{f(x; \\theta) : \\theta \\in \\Theta\\}\\) and a function of the parameter \\(g(\\theta)\\), find a statistic \\(T(X_1, \\ldots, X_n)\\) such that \\(T\\) is "close" to \\(g(\\theta)\\) in some sense. This chapter introduces two systematic construction methods: the method of moments and maximum likelihood estimation.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="estimation-concept-viz"></div>
            `,
            visualizations: [
                {
                    id: 'estimation-concept-viz',
 title:'Interactive: Randomness of an Estimator',
                    description: 'Each sample yields a different estimate -- observe how estimator values fluctuate around the true parameter',
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
                                viz.screenText('Samples drawn: ' + estimates.length + ' | Mean of estimates: ' + eMean.toFixed(3) + ' | SD: ' + eStd.toFixed(3), viz.width / 2, viz.height - 10, viz.colors.text, 11);
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
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} U(0, \\theta)\\), where \\(\\theta > 0\\). Explain why both \\(T_1 = 2\\bar{X}\\) and \\(T_2 = \\frac{n+1}{n}X_{(n)}\\) (where \\(X_{(n)} = \\max_i X_i\\)) are estimators of \\(\\theta\\), and verify their unbiasedness.',
                    hint: 'Verify that both are functions of the sample and do not depend on the unknown parameter \\(\\theta\\). For \\(X_{(n)}\\), use the CDF of the maximum order statistic: \\(P(X_{(n)} \\le x) = (x/\\theta)^n\\).',
                    solution: '\\(T_1 = 2\\bar{X} = \\frac{2}{n}\\sum_{i=1}^n X_i\\) depends only on observed values and does not contain \\(\\theta\\), so it is a statistic. \\(T_2 = \\frac{n+1}{n}\\max_i X_i\\) likewise. Since \\(\\mathbb{E}[\\bar{X}] = \\theta/2\\), we have \\(\\mathbb{E}[T_1] = \\theta\\). Also, the PDF of \\(X_{(n)}\\) is \\(f_{(n)}(x) = nx^{n-1}/\\theta^n\\), so \\(\\mathbb{E}[X_{(n)}] = \\frac{n}{n+1}\\theta\\), hence \\(\\mathbb{E}[T_2] = \\theta\\). Both are unbiased estimators of \\(\\theta\\).'
                },
                {
                    question: 'What is the key distinction between an estimator and an estimate? Why is this distinction important in statistical inference?',
                    hint: 'Think in terms of random variables versus real numbers.',
                    solution: 'An estimator is a random variable (a function of the sample) whose value changes with the sample; an estimate is a real number obtained by plugging in specific observations. In statistical inference we care about the sampling distribution of the estimator (e.g., its mean, variance, MSE), which are properties at the random variable level and cannot be captured by a single estimate.'
                },
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Exp}(\\lambda)\\). Write down two different estimators for \\(\\lambda\\).',
                    hint: 'Consider using \\(\\bar{X}\\) and \\(X_{(1)} = \\min_i X_i\\).',
                    solution: 'Since \\(\\mathbb{E}[X] = 1/\\lambda\\), \\(T_1 = 1/\\bar{X}\\) is a natural estimator. Also \\(X_{(1)} \\sim \\text{Exp}(n\\lambda)\\), so \\(\\mathbb{E}[X_{(1)}] = 1/(n\\lambda)\\), hence \\(T_2 = 1/(nX_{(1)})\\) is also an estimator of \\(\\lambda\\) (though not unbiased).'
                }
            ]
        },

        // ===== Section 2: Method of Moments =====
        {
            id: 'ch06-sec02',
            title: 'Method of Moments',
            content: `
 <h2>Method of Moments</h2>

 <p>The <strong>method of moments</strong> (MoM) is one of the oldest and most intuitive parameter estimation methods, proposed by Karl Pearson in 1894. Its basic idea is remarkably simple: replace population moments with sample moments and solve the resulting system of equations for the parameter estimates.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.4 (Population and Sample Moments)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) have distribution \\(f(x; \\theta)\\), \\(\\theta \\in \\Theta \\subseteq \\mathbb{R}^k\\).</p>
 <p>The \\(j\\)-th <strong>population moment</strong> : \\(\\mu_j(\\theta) = \\mathbb{E}_{\\theta}[X^j]\\).</p>
 <p>The \\(j\\)-th <strong>sample moment</strong> : \\(m_j = \\frac{1}{n}\\sum_{i=1}^n X_i^j\\).</p>
 <p>Similarly, <strong>central moments</strong> : the population central moment \\(\\mu_j' = \\mathbb{E}[(X - \\mathbb{E}[X])^j]\\), the sample central moment \\(m_j' = \\frac{1}{n}\\sum(X_i - \\bar{X})^j\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.5 (Method of Moments Estimator)</div>
                    <div class="env-body">
 <p>Suppose the parameter \\(\\theta = (\\theta_1, \\ldots, \\theta_k)\\) has \\(k\\) components. The <strong>method of moments estimator</strong> is the solution \\(\\tilde{\\theta}_{\\text{MoM}}\\) of the system of equations</p>
                        \\[\\mu_j(\\theta) = m_j, \\quad j = 1, 2, \\ldots, k\\]
                        <p>That is, set the first \\(k\\) population moments equal to the corresponding sample moments, and solve for the estimate of \\(\\theta\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
 <p>The logic of the method of moments is straightforward: the law of large numbers guarantees \\(m_j \\xrightarrow{\\text{a.s.}} \\mu_j(\\theta)\\), so replacing \\(\\mu_j(\\theta)\\) with \\(m_j\\) and solving for \\(\\tilde{\\theta}\\) should yield an estimate close to the true \\(\\theta\\) for large samples. This is a direct application of the Continuous Mapping Theorem.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.6 (MoM for the Normal Distribution)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\), with parameter \\(\\theta = (\\mu, \\sigma^2)\\), so \\(k = 2\\).</p>
                        <p>First moment equation: \\(\\mu_1 = \\mathbb{E}[X] = \\mu = m_1 = \\bar{X}\\);</p>
                        <p>Second moment equation: \\(\\mu_2 = \\mathbb{E}[X^2] = \\mu^2 + \\sigma^2 = m_2 = \\frac{1}{n}\\sum X_i^2\\).</p>
                        <p>Solving: \\(\\tilde{\\mu}_{\\text{MoM}} = \\bar{X}\\), \\(\\tilde{\\sigma}^2_{\\text{MoM}} = m_2 - m_1^2 = \\frac{1}{n}\\sum_{i=1}^n (X_i - \\bar{X})^2\\).</p>
                        <p>Note that the MoM variance estimator has denominator \\(n\\) rather than \\(n-1\\), so it is biased.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.7 (MoM for the Gamma Distribution)</div>
                    <div class="env-body">
                        <p>Let \\(X \\sim \\text{Gamma}(\\alpha, \\beta)\\), with density \\(f(x) = \\frac{\\beta^\\alpha}{\\Gamma(\\alpha)} x^{\\alpha-1} e^{-\\beta x}\\), \\(x > 0\\).</p>
                        <p>Population moments: \\(\\mu_1 = \\alpha / \\beta\\), \\(\\mu_2 = \\alpha(\\alpha+1)/\\beta^2\\).</p>
                        <p>Set \\(m_1 = \\alpha/\\beta\\), \\(m_2 = \\alpha(\\alpha+1)/\\beta^2\\). Note \\(\\mu_2 - \\mu_1^2 = \\alpha/\\beta^2 = \\operatorname{Var}(X)\\).</p>
                        <p>Solving: \\(\\tilde{\\beta} = \\bar{X} / (m_2 - \\bar{X}^2)\\), \\(\\tilde{\\alpha} = \\bar{X} \\cdot \\tilde{\\beta} = \\bar{X}^2 / (m_2 - \\bar{X}^2)\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.8 (Consistency of MoM)</div>
                    <div class="env-body">
                        <p>Suppose the solution \\(\\tilde{\\theta}_n\\) of the moment equations \\(\\mu_j(\\theta) = m_j\\) (\\(j=1,\\ldots,k\\)) is a continuous function of \\(m_1,\\ldots,m_k\\), and the true parameter \\(\\theta_0\\) is the unique solution of the system in \\(\\Theta\\). If \\(\\mathbb{E}[X^{2k}] < \\infty\\), then</p>
                        \\[\\tilde{\\theta}_n \\xrightarrow{P} \\theta_0 \\quad (n \\to \\infty)\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p>By the law of large numbers, \\(m_j \\xrightarrow{P} \\mu_j(\\theta_0)\\) for each \\(j = 1, \\ldots, k\\). Let \\(h\\) be the inverse mapping \\((\\mu_1, \\ldots, \\mu_k) \\mapsto \\theta\\). By the Continuous Mapping Theorem, \\(\\tilde{\\theta}_n = h(m_1, \\ldots, m_k) \\xrightarrow{P} h(\\mu_1(\\theta_0), \\ldots, \\mu_k(\\theta_0)) = \\theta_0\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Limitations of the method of moments: (1) When there are many parameters, higher-order moments are needed, and higher-order sample moments have large variance, leading to unstable estimates; (2) MoM estimators may fall outside the parameter space (e.g., estimating a probability could yield a negative value); (3) MoM is generally less efficient than MLE (larger asymptotic variance).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="moment-matching-viz"></div>
            `,
            visualizations: [
                {
                    id: 'moment-matching-viz',
 title:'Interactive: Moment Matching',
                    description: 'Adjust parameters to match the theoretical moments with sample moments -- observe the fit between histogram and density curve',
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
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Beta}(a, b)\\). Find the method of moments estimators for \\(a\\) and \\(b\\).',
                    hint: 'The mean of the Beta distribution is \\(a/(a+b)\\) and the variance is \\(ab/[(a+b)^2(a+b+1)]\\). Set \\(\\bar{X} = m_1\\) and \\(v = m_2 - m_1^2\\), then solve the system.',
                    solution: 'From \\(\\mu_1 = a/(a+b)\\) and \\(\\operatorname{Var}(X) = ab/[(a+b)^2(a+b+1)]\\), set \\(\\bar{x} = m_1\\) and \\(v = m_2 - m_1^2\\). Let \\(r = \\bar{x}(1 - \\bar{x})/v - 1\\). Then \\(\\tilde{a} = \\bar{x} \\cdot r\\), \\(\\tilde{b} = (1 - \\bar{x}) \\cdot r\\). Note that \\(v < \\bar{x}(1-\\bar{x})\\) is required for a positive solution.'
                },
                {
                    question: 'Show the bias of the normal distribution MoM estimator \\(\\tilde{\\sigma}^2 = \\frac{1}{n}\\sum(X_i - \\bar{X})^2\\), and explain why it is asymptotically unbiased.',
                    hint: 'Use the identity \\(\\mathbb{E}[\\sum(X_i - \\bar{X})^2] = (n-1)\\sigma^2\\).',
                    solution: '\\(\\mathbb{E}[\\tilde{\\sigma}^2] = \\frac{n-1}{n}\\sigma^2\\). The bias is \\(\\mathbb{E}[\\tilde{\\sigma}^2] - \\sigma^2 = -\\sigma^2/n\\), which tends to 0 as \\(n \\to \\infty\\), i.e., it is asymptotically unbiased.'
                },
                {
                    question: 'Give an example where the MoM estimator falls outside the parameter space.',
                    hint: 'Consider the \\(U(0, \\theta)\\) distribution or a distribution with parameter constraints.',
                    solution: 'Consider estimating the variance of \\(N(\\mu, \\sigma^2)\\): the MoM estimator \\(\\tilde{\\sigma}^2 = m_2 - \\bar{X}^2\\) equals 0 when all \\(X_i\\) are the same, which lies on the boundary of the parameter space \\((0,\\infty)\\). More extremely, for certain non-standard parameterizations, the MoM solution can be negative.'
                }
            ]
        },

        // ===== Section 3: Maximum Likelihood Estimation =====
        {
            id: 'ch06-sec03',
            title: 'Maximum Likelihood Estimation',
            content: `
 <h2>Maximum Likelihood Estimation</h2>

 <p><strong>Maximum likelihood estimation</strong> (MLE) is the most important and widely used estimation method in modern statistical inference. It was systematically developed by R.A. Fisher in the 1920s. Its core principle is: choose the parameter value that maximizes the probability of the observed data.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.9 (Likelihood Function)</div>
                    <div class="env-body">
 <p>Let \\(X_1, \\ldots, X_n\\) be a random sample from a density (or mass) function \\(f(x; \\theta)\\). The <strong>likelihood function</strong> is defined as the joint density viewed as a function of \\(\\theta\\):</p>
                        \\[L(\\theta \\mid \\mathbf{x}) = \\prod_{i=1}^n f(x_i; \\theta), \\quad \\theta \\in \\Theta.\\]
 <p><strong>Log-likelihood function</strong> : \\(\\ell(\\theta \\mid \\mathbf{x}) = \\log L(\\theta \\mid \\mathbf{x}) = \\sum_{i=1}^n \\log f(x_i; \\theta)\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The likelihood function and the probability density have the same mathematical form but different "perspectives." The density \\(f(x; \\theta)\\) fixes \\(\\theta\\) and looks at how \\(x\\) varies; the likelihood \\(L(\\theta \\mid \\mathbf{x})\\) fixes the data \\(\\mathbf{x}\\) and looks at how \\(\\theta\\) varies. The likelihood is not a probability density over \\(\\theta\\) -- it need not integrate to 1 with respect to \\(\\theta\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.10 (Maximum Likelihood Estimator)</div>
                    <div class="env-body">
 <p>The <strong>maximum likelihood estimator</strong> (MLE) is the parameter value that maximizes the likelihood function:</p>
                        \\[\\hat{\\theta}_{\\text{MLE}} = \\underset{\\theta \\in \\Theta}{\\arg\\max} \; L(\\theta \\mid \\mathbf{x}) = \\underset{\\theta \\in \\Theta}{\\arg\\max} \; \\ell(\\theta \\mid \\mathbf{x}).\\]
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.11 (Score Function and Fisher Information)</div>
                    <div class="env-body">
 <p><strong>Score function</strong> : \\(S(\\theta) = \\frac{\\partial}{\\partial \\theta} \\ell(\\theta \\mid \\mathbf{x}) = \\sum_{i=1}^n \\frac{\\partial}{\\partial \\theta} \\log f(x_i; \\theta)\\).</p>
 <p>The MLE typically satisfies the <strong>score equation</strong> : \\(S(\\hat{\\theta}) = 0\\).</p>
                        <p><strong>Fisher information</strong> (single observation):</p>
                        \\[I(\\theta) = \\operatorname{Var}_{\\theta}\\left[\\frac{\\partial}{\\partial\\theta}\\log f(X;\\theta)\\right] = -\\mathbb{E}_{\\theta}\\left[\\frac{\\partial^2}{\\partial\\theta^2}\\log f(X;\\theta)\\right]\\]
 <p><strong>Observed information</strong> : \\(J(\\theta) = -\\frac{\\partial^2}{\\partial \\theta^2} \\ell(\\theta \\mid \\mathbf{x})\\). At the MLE, \\(J(\\hat{\\theta})> 0\\) indicates that the likelihood indeed attains a maximum there.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.12 (MLE for the Bernoulli Distribution)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Bernoulli}(p)\\). The likelihood function is</p>
                        \\[L(p) = p^{\\sum x_i}(1-p)^{n - \\sum x_i}.\\]
                        <p>Log-likelihood: \\(\\ell(p) = \\left(\\sum x_i\\right) \\log p + \\left(n - \\sum x_i\\right) \\log(1-p)\\).</p>
                        <p>Score equation: \\(\\frac{\\sum x_i}{p} - \\frac{n - \\sum x_i}{1 - p} = 0\\).</p>
                        <p>Solving gives \\(\\hat{p}_{\\text{MLE}} = \\bar{x} = \\frac{1}{n}\\sum_{i=1}^n x_i\\), the sample proportion.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.13 (MLE for the Normal Distribution)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\). The log-likelihood is</p>
                        \\[\\ell(\\mu, \\sigma^2) = -\\frac{n}{2}\\log(2\\pi) - \\frac{n}{2}\\log(\\sigma^2) - \\frac{1}{2\\sigma^2}\\sum_{i=1}^n (x_i - \\mu)^2.\\]
                        <p>Taking partial derivatives with respect to \\(\\mu\\) and \\(\\sigma^2\\) and setting them to zero:</p>
                        \\[\\hat{\\mu}_{\\text{MLE}} = \\bar{x}, \\quad \\hat{\\sigma}^2_{\\text{MLE}} = \\frac{1}{n}\\sum_{i=1}^n(x_i - \\bar{x})^2.\\]
                        <p>Note that the MLE variance estimator has denominator \\(n\\) rather than \\(n-1\\), so it is biased (but asymptotically unbiased).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.14 (MLE for the Poisson Distribution)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Poisson}(\\lambda)\\). The likelihood function:</p>
                        \\[L(\\lambda) = \\prod_{i=1}^n \\frac{\\lambda^{x_i} e^{-\\lambda}}{x_i!} = \\frac{\\lambda^{\\sum x_i} e^{-n\\lambda}}{\\prod x_i!}\\]
                        <p>Log-likelihood: \\(\\ell(\\lambda) = (\\sum x_i)\\log\\lambda - n\\lambda - \\sum \\log(x_i!)\\). Setting \\(\\ell'(\\lambda) = \\sum x_i / \\lambda - n = 0\\) gives</p>
                        \\[\\hat{\\lambda}_{\\text{MLE}} = \\bar{x}\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.15 (MLE for the Uniform Distribution -- Non-Regular Case)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} U(0, \\theta)\\). The likelihood function is</p>
                        \\[L(\\theta) = \\prod_{i=1}^n \\frac{1}{\\theta} \\cdot \\mathbf{1}(0 \\le x_i \\le \\theta) = \\theta^{-n} \\cdot \\mathbf{1}(\\theta \\ge x_{(n)}).\\]
                        <p>For \\(\\theta \\ge x_{(n)}\\), \\(L(\\theta) = \\theta^{-n}\\) is a decreasing function of \\(\\theta\\), so \\(\\hat{\\theta}_{\\text{MLE}} = x_{(n)} = \\max(x_1, \\ldots, x_n)\\).</p>
                        <p>Here the MLE cannot be obtained by solving the score equation -- the likelihood function is not differentiable at \\(x_{(n)}\\). This is a typical example of a non-regular case: the support depends on the parameter.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="likelihood-surface-viz"></div>
            `,
            visualizations: [
                {
                    id: 'likelihood-surface-viz',
 title:'Interactive: Likelihood Function and MLEMLE',
                    description: 'Adjust parameters to observe the shape of the log-likelihood curve, with MLE marked at the peak',
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
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Exp}(\\lambda)\\), with density \\(f(x) = \\lambda e^{-\\lambda x}\\), \\(x > 0\\). Find the MLE of \\(\\lambda\\) and the Fisher information \\(I(\\lambda)\\).',
                    hint: 'The log-likelihood is \\(\\ell(\\lambda) = n \\log \\lambda - \\lambda \\sum x_i\\).',
                    solution: 'The score equation \\(n/\\lambda - \\sum x_i = 0\\) gives \\(\\hat{\\lambda} = n / \\sum x_i = 1/\\bar{x}\\). Fisher information: \\(\\frac{\\partial^2}{\\partial\\lambda^2}\\log f(X|\\lambda) = -1/\\lambda^2\\), so \\(I(\\lambda) = 1/\\lambda^2\\). Observed information \\(J(\\hat{\\lambda}) = n/\\hat{\\lambda}^2 = n\\bar{x}^2\\).'
                },
                {
                    question: 'Why do we usually maximize the log-likelihood \\(\\ell(\\theta)\\) rather than the likelihood \\(L(\\theta)\\) in practice?',
                    hint: 'Consider numerical stability and computational convenience.',
                    solution: '(1) The likelihood is a product of \\(n\\) probabilities, which easily causes numerical underflow when \\(n\\) is large; taking the logarithm converts it to a sum, improving numerical stability. (2) The logarithm turns products into sums, making differentiation simpler. (3) The logarithm is a strictly increasing function, so it does not change the location of the extremum.'
                },
                {
                    question: 'Show that the log-likelihood of the \\(U(0, \\theta)\\) distribution is not differentiable at the MLE, and explain why the standard score equation approach fails.',
                    hint: 'Write out \\(L(\\theta)\\) and identify the constraint.',
                    solution: '\\(L(\\theta) = \\theta^{-n}\\) for \\(\\theta \\ge x_{(n)}\\), and \\(L(\\theta) = 0\\) for \\(\\theta < x_{(n)}\\). In the constrained region, \\(\\ell\'(\\theta) = -n/\\theta < 0\\), strictly decreasing, so the maximum is attained at the boundary \\(\\hat{\\theta} = x_{(n)}\\). This point is not differentiable, and the score equation \\(\\ell\'(\\theta) = 0\\) has no solution. The root cause: the support \\([0, \\theta]\\) depends on \\(\\theta\\), violating regularity conditions.'
                }
            ]
        },

        // ===== Section 4: Properties of MLE =====
        {
            id: 'ch06-sec04',
            title: 'Properties of MLE',
            content: `
 <h2>Properties of MLE</h2>

                <p>Maximum likelihood estimation is highly regarded because it possesses a series of excellent theoretical properties under large samples. This section discusses four core properties of MLE: invariance, consistency, asymptotic normality, and asymptotic efficiency.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.16 (Invariance of MLE)</div>
                    <div class="env-body">
                        <p>Let \\(\\hat{\\theta}\\) be the MLE of \\(\\theta\\), and let \\(g\\) be a function of \\(\\theta\\). Then the MLE of \\(g(\\theta)\\) is \\(g(\\hat{\\theta})\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Suppose \\(g\\) is a one-to-one mapping. Let \\(\\eta = g(\\theta)\\), then the reparameterized likelihood function is \\(L^*(\\eta) = L(g^{-1}(\\eta))\\). Since \\(L\\) attains its maximum at \\(\\hat{\\theta}\\), \\(L^*\\) attains its maximum at \\(g(\\hat{\\theta})\\).</p>
                        <p>For a general (not necessarily one-to-one) \\(g\\), define the induced likelihood \\(L^*(\\eta) = \\sup_{\\theta: g(\\theta) = \\eta} L(\\theta)\\). Since \\(L^*(g(\\hat{\\theta})) \\ge L(\\hat{\\theta}) = \\sup_{\\theta} L(\\theta) \\ge L^*(\\eta)\\) for all \\(\\eta\\), \\(g(\\hat{\\theta})\\) maximizes \\(L^*\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.17</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\). We already know \\(\\hat{\\sigma}^2_{\\text{MLE}} = \\frac{1}{n}\\sum(X_i - \\bar{X})^2\\).</p>
                        <p>By invariance:</p>
                        <ul>
                            <li>The MLE of the standard deviation \\(\\sigma\\) is \\(\\hat{\\sigma}_{\\text{MLE}} = \\sqrt{\\hat{\\sigma}^2_{\\text{MLE}}}\\);</li>
                            <li>The MLE of \\(P(X > 0)\\) is \\(1 - \\Phi(-\\hat{\\mu}/\\hat{\\sigma}) = \\Phi(\\bar{X}/\\hat{\\sigma})\\);</li>
                            <li>The MLE of the coefficient of variation \\(\\sigma/\\mu\\) is \\(\\hat{\\sigma}_{\\text{MLE}} / \\bar{X}\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.18 (Consistency of MLE)</div>
                    <div class="env-body">
                        <p>Under appropriate regularity conditions (compact parameter space \\(\\Theta\\), \\(\\theta_0\\) is an interior point of the true parameter, KL divergence identifiability, etc.), the MLE is consistent:</p>
                        \\[\\hat{\\theta}_n \\xrightarrow{P} \\theta_0 \\quad \\text{as } n \\to \\infty.\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The intuition behind consistency: the normalized log-likelihood \\(\\frac{1}{n}\\ell(\\theta) = \\frac{1}{n}\\sum \\log f(X_i; \\theta)\\) converges by the law of large numbers to \\(\\mathbb{E}_{\\theta_0}[\\log f(X; \\theta)]\\), which attains its unique maximum at \\(\\theta = \\theta_0\\) (this is a consequence of \\(D_{\\text{KL}}(f_{\\theta_0} \\| f_{\\theta}) \\ge 0\\), with equality if and only if \\(\\theta = \\theta_0\\)). Therefore the MLE, as the finite-sample maximizer, converges to the population maximizer \\(\\theta_0\\) as \\(n \\to \\infty\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.19 (Asymptotic Normality of MLE)</div>
                    <div class="env-body">
                        <p>Under regularity conditions, let \\(I(\\theta) = \\mathbb{E}_{\\theta}\\left[-\\frac{\\partial^2}{\\partial\\theta^2}\\log f(X;\\theta)\\right]\\) be the Fisher information. Then</p>
                        \\[\\sqrt{n}(\\hat{\\theta}_n - \\theta_0) \\xrightarrow{d} N(0, I(\\theta_0)^{-1}).\\]
                        <p>Equivalently, \\(\\hat{\\theta}_n \\approx N\\left(\\theta_0, \\frac{1}{nI(\\theta_0)}\\right)\\) holds approximately for large \\(n\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Asymptotic Efficiency)</div>
                    <div class="env-body">
 <p>The asymptotic normality theorem tells us that the asymptotic variance of the MLE is \\(1/(nI(\\theta_0))\\), which exactly achieves the Cramer-Rao lower bound. This means that the MLE is <strong>asymptotically efficient</strong> -- under regularity conditions, no other consistent estimator can have a smaller asymptotic variance than the MLE. This is what Fisher called the "asymptotic efficiency" of the MLE.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.20 (Equivariance of MLE)</div>
                    <div class="env-body">
                        <p>Suppose the parameter space undergoes an invertible transformation \\(\\eta = h(\\theta)\\), and the model is reparameterized as \\(f(x; h^{-1}(\\eta))\\). Then the MLE under the new parameterization is \\(\\hat{\\eta} = h(\\hat{\\theta})\\).</p>
                        <p>In other words, MLE is equivariant under reparameterization: estimate-then-transform = transform-then-estimate.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="mle-convergence-viz"></div>
            `,
            visualizations: [
                {
                    id: 'mle-convergence-viz',
 title:'Interactive: MLE Convergence and Asymptotic Normality',
                    description: 'As sample size increases, the sampling distribution of MLE concentrates around the true parameter and approaches normality',
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
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\). Using the invariance property of MLE, find the MLE of \\(P(X > 0)\\).',
                    hint: '\\(P(X > 0) = 1 - \\Phi(-\\mu/\\sigma)\\), where \\(\\Phi\\) is the standard normal CDF.',
                    solution: 'By invariance, the MLE of \\(P(X > 0)\\) is \\(1 - \\Phi(-\\hat{\\mu}/\\hat{\\sigma}) = \\Phi(\\bar{X}/\\hat{\\sigma})\\), where \\(\\hat{\\sigma} = \\sqrt{\\frac{1}{n}\\sum(X_i - \\bar{X})^2}\\).'
                },
                {
                    question: 'Using invariance, find the MLE of the median of the \\(\\text{Exp}(\\lambda)\\) distribution. Given \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Exp}(\\lambda)\\).',
                    hint: 'The median of \\(\\text{Exp}(\\lambda)\\) is \\(\\log 2 / \\lambda\\). The MLE of \\(\\lambda\\) is \\(1/\\bar{X}\\).',
                    solution: 'The MLE of \\(\\lambda\\) is \\(\\hat{\\lambda} = 1/\\bar{X}\\). The median \\(g(\\lambda) = \\log 2 / \\lambda\\). By invariance, the MLE of the median is \\(g(\\hat{\\lambda}) = \\log 2 \\cdot \\bar{X}\\).'
                },
                {
                    question: 'Explain why the MLE does not have asymptotic normality in the \\(U(0, \\theta)\\) model. What is the actual limiting distribution of the MLE?',
                    hint: 'Check whether the regularity conditions are satisfied. Consider the limit of \\(n(\\theta - X_{(n)})\\).',
                    solution: 'The regularity conditions require the support not to depend on the parameter. But the support of \\(U(0, \\theta)\\) is \\([0, \\theta]\\), which varies with \\(\\theta\\), violating regularity. In fact, \\(\\hat{\\theta} = X_{(n)}\\) converges at rate \\(O(1/n)\\) rather than \\(O(1/\\sqrt{n})\\), and its limiting distribution is exponential rather than normal: \\(n(\\theta - X_{(n)}) \\xrightarrow{d} \\text{Exp}(1/\\theta)\\).'
                }
            ]
        },

        // ===== Section 5: EM Algorithm =====
        {
            id: 'ch06-sec05',
            title: 'The EM Algorithm',
            content: `
 <h2>The EM Algorithm</h2>

 <p>In many practical problems, direct maximization of the likelihood function is difficult -- perhaps because of <strong>latent variables</strong> or <strong>missing data</strong>, or because the analytical form of the likelihood is overly complex. The <strong>EM algorithm</strong> (Expectation-Maximization Algorithm, Dempster, Laird & Rubin, 1977) provides an elegant iterative solution framework.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.21 (Incomplete and Complete Data)</div>
                    <div class="env-body">
                        <p>Let the <strong>observed data</strong> (incomplete data) be \\(\\mathbf{X}\\), the <strong>latent variables</strong> be \\(\\mathbf{Z}\\), and the <strong>complete data</strong> be \\((\\mathbf{X}, \\mathbf{Z})\\).</p>
                        <ul>
 <li><strong>Complete-data likelihood</strong> : \\(L_c(\\theta) = f(\\mathbf{X}, \\mathbf{Z}; \\theta)\\), which usually has a simple form.</li>
 <li><strong>Incomplete-data likelihood</strong> : \\(L(\\theta) = f(\\mathbf{X}; \\theta) = \\int f(\\mathbf{X}, \\mathbf{Z}; \\theta)\\,d\\mathbf{Z}\\), often intractable due to integration (or summation).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 6.22 (The EM Algorithm)</div>
                    <div class="env-body">
                        <p>Given the current parameter estimate \\(\\theta^{(t)}\\), the \\((t+1)\\)-th step of the EM algorithm is:</p>
                        <p><strong>E-step (Expectation step)</strong>: Compute the expected value of the complete-data log-likelihood with respect to the conditional distribution of the latent variables</p>
                        \\[Q(\\theta \\mid \\theta^{(t)}) = \\mathbb{E}_{\\mathbf{Z} \\mid \\mathbf{X}, \\theta^{(t)}} \\left[ \\log f(\\mathbf{X}, \\mathbf{Z}; \\theta) \\right].\\]
                        <p><strong>M-step (Maximization step)</strong>: Maximize the \\(Q\\)-function</p>
                        \\[\\theta^{(t+1)} = \\underset{\\theta}{\\arg\\max} \; Q(\\theta \\mid \\theta^{(t)}).\\]
                        <p>Repeat until convergence: \\(\\|\\theta^{(t+1)} - \\theta^{(t)}\\| < \\varepsilon\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 6.23 (Monotonicity of EM)</div>
                    <div class="env-body">
                        <p>Each iteration of the EM algorithm does not decrease the incomplete-data log-likelihood:</p>
                        \\[\\ell(\\theta^{(t+1)}) \\ge \\ell(\\theta^{(t)}).\\]
                        <p>Equality holds if and only if \\(Q(\\theta|\\theta^{(t)})\\) already attains its maximum at \\(\\theta^{(t)}\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p>The log-likelihood can be decomposed as:</p>
                        \\[\\ell(\\theta) = Q(\\theta|\\theta^{(t)}) - H(\\theta|\\theta^{(t)})\\]
                        <p>where \\(H(\\theta|\\theta^{(t)}) = \\mathbb{E}_{\\mathbf{Z}|\\mathbf{X},\\theta^{(t)}}[\\log f(\\mathbf{Z}|\\mathbf{X},\\theta)]\\). By Gibbs' inequality (a consequence of Jensen's inequality), \\(H(\\theta|\\theta^{(t)}) \\le H(\\theta^{(t)}|\\theta^{(t)})\\). Therefore:</p>
                        \\[\\ell(\\theta^{(t+1)}) - \\ell(\\theta^{(t)}) \\ge Q(\\theta^{(t+1)}|\\theta^{(t)}) - Q(\\theta^{(t)}|\\theta^{(t)}) \\ge 0\\]
                        <p>The second inequality comes from the maximization in the M-step.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 6.24 (EM for Gaussian Mixture Models)</div>
                    <div class="env-body">
                        <p>Suppose the observations \\(X_1, \\ldots, X_n\\) come from a mixture of two Gaussian components:</p>
                        \\[f(x; \\theta) = \\pi_1 \\phi(x; \\mu_1, \\sigma_1^2) + \\pi_2 \\phi(x; \\mu_2, \\sigma_2^2),\\]
                        <p>where \\(\\pi_1 + \\pi_2 = 1\\) and \\(\\phi(\\cdot; \\mu, \\sigma^2)\\) is the normal density. Introduce latent variables \\(Z_i \\in \\{1, 2\\}\\) indicating which component the \\(i\\)-th data point comes from.</p>
                        <p><strong>E-step</strong>: Compute the posterior "responsibility"</p>
                        \\[\\gamma_{ik}^{(t)} = P(Z_i = k \\mid X_i, \\theta^{(t)}) = \\frac{\\pi_k^{(t)} \\phi(X_i; \\mu_k^{(t)}, (\\sigma_k^{(t)})^2)}{\\sum_{j=1}^2 \\pi_j^{(t)} \\phi(X_i; \\mu_j^{(t)}, (\\sigma_j^{(t)})^2)}.\\]
                        <p><strong>M-step</strong>: Update parameters</p>
                        \\[n_k = \\sum_{i=1}^n \\gamma_{ik}, \\quad \\mu_k^{(t+1)} = \\frac{1}{n_k}\\sum_{i=1}^n \\gamma_{ik} X_i, \\quad (\\sigma_k^{(t+1)})^2 = \\frac{1}{n_k}\\sum_{i=1}^n \\gamma_{ik}(X_i - \\mu_k^{(t+1)})^2, \\quad \\pi_k^{(t+1)} = n_k / n.\\]
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Limitations of the EM algorithm: (1) It only guarantees convergence to a <strong>local maximum</strong> (or saddle point), not necessarily the global MLE; (2) Convergence can be slow (linear convergence rate); (3) Results depend on the initial values. In practice, one typically uses multiple random restarts and selects the solution with the largest likelihood.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Generalizations of EM)</div>
                    <div class="env-body">
                        <p>The EM framework has many variants: (1) <strong>Generalized EM (GEM)</strong>: The M-step only needs to increase (rather than maximize) the \\(Q\\) function; (2) <strong>Monte Carlo EM</strong>: The E-step uses MCMC to approximate expectations that cannot be computed analytically; (3) <strong>Variational EM</strong>: The E-step is generalized to variational inference.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="em-gaussian-mixture-viz"></div>
            `,
            visualizations: [
                {
                    id: 'em-gaussian-mixture-viz',
 title:'Interactive: EM Algorithm -- Gaussian Mixture Model',
                    description: 'Observe how E-step and M-step alternate, progressively separating the two Gaussian components',
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
                            viz.screenText('Iteration: ' + iteration + ' | log L = ' + computeLogLik().toFixed(1), W / 2, 34, viz.colors.text, 11);

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
                    question: 'Prove the monotonicity of the EM algorithm: \\(\\ell(\\theta^{(t+1)}) \\ge \\ell(\\theta^{(t)})\\).',
                    hint: 'Use the decomposition \\(\\ell(\\theta) = Q(\\theta \\mid \\theta^{(t)}) - H(\\theta \\mid \\theta^{(t)})\\), where \\(H(\\theta \\mid \\theta^{(t)}) = \\mathbb{E}_{Z|X,\\theta^{(t)}}[\\log f(Z|X, \\theta)]\\), and apply Jensen\'s inequality to show \\(H(\\theta \\mid \\theta^{(t)}) \\le H(\\theta^{(t)} \\mid \\theta^{(t)})\\).',
                    solution: 'Decompose \\(\\ell(\\theta) = Q(\\theta | \\theta^{(t)}) - H(\\theta | \\theta^{(t)})\\), where \\(H(\\theta | \\theta^{(t)}) = \\mathbb{E}_{Z|X,\\theta^{(t)}}[\\log f(Z|X,\\theta)]\\). By the M-step, \\(Q(\\theta^{(t+1)}|\\theta^{(t)}) \\ge Q(\\theta^{(t)}|\\theta^{(t)})\\). By Gibbs\' inequality (Jensen), \\(H(\\theta|\\theta^{(t)}) \\le H(\\theta^{(t)}|\\theta^{(t)})\\) for any \\(\\theta\\). Therefore \\(\\ell(\\theta^{(t+1)}) = Q(\\theta^{(t+1)}|\\theta^{(t)}) - H(\\theta^{(t+1)}|\\theta^{(t)}) \\ge Q(\\theta^{(t)}|\\theta^{(t)}) - H(\\theta^{(t)}|\\theta^{(t)}) = \\ell(\\theta^{(t)})\\).'
                },
                {
                    question: 'For a two-component Poisson mixture \\(f(x) = \\pi \\cdot \\text{Pois}(x|\\lambda_1) + (1-\\pi) \\cdot \\text{Pois}(x|\\lambda_2)\\), write out the specific formulas for the E-step and M-step.',
                    hint: 'Replace the normal PDF with the Poisson PMF; the structure is the same as the Gaussian mixture.',
                    solution: 'E-step: \\(\\gamma_i = \\frac{\\pi \\cdot \\text{Pois}(x_i|\\lambda_1)}{\\pi \\cdot \\text{Pois}(x_i|\\lambda_1) + (1-\\pi)\\cdot \\text{Pois}(x_i|\\lambda_2)}\\). M-step: \\(n_1 = \\sum \\gamma_i\\), \\(\\lambda_1 = \\sum \\gamma_i x_i / n_1\\), \\(\\lambda_2 = \\sum(1-\\gamma_i)x_i/(n-n_1)\\), \\(\\pi = n_1/n\\). The weighted-component Poisson MLE is simply the weighted sample mean.'
                },
                {
                    question: 'Under what circumstances does the EM algorithm converge particularly slowly? Explain the meaning of the "fraction of missing information."',
                    hint: 'Consider the relationship between the complete-data Fisher information and the observed-data Fisher information.',
                    solution: 'The convergence rate of EM near the solution is governed by the eigenvalues of the matrix \\(DM = I_c^{-1}(\\theta) I_m(\\theta)\\), where \\(I_c\\) is the complete-data Fisher information and \\(I_m = I_c - I_o\\) is the "missing information" (\\(I_o\\) being the observed information). When the fraction of missing information \\(I_m/I_c\\) is close to 1 (i.e., most information resides in the latent variables), the eigenvalues of \\(DM\\) are close to 1, resulting in very slow linear convergence. This occurs when mixture components overlap heavily or when the proportion of missing data is large.'
                }
            ]
        }
    ]
});

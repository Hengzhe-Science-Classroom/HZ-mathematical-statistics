// Chapter 4: Random Samples & Statistics
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch04',
    number: 4,
    title: 'Random Samples & Statistics',
    subtitle: 'Random Samples & Statistics',
    sections: [
        // ========== SECTION 1: Random Samples ==========
        {
            id: 'ch04-sec01',
            title: 'Random Samples',
            content: `
                <h2>Random Samples &#8201;|&#8201; 随机样本</h2>
                <p>The core of statistical inference lies in drawing a <strong>sample</strong> (样本) from a <strong>population</strong> (总体) and using the sample to infer properties of the population. This section rigorously defines the concept of a random sample and clarifies the mathematical meaning of the independent and identically distributed (iid) assumption.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.1 (Population and Individual)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) be a random variable with distribution function \\(F(x; \\theta)\\), where \\(\\theta \\in \\Theta\\) is an unknown parameter. We call the probability distribution represented by \\(F\\) the <strong>population</strong> (总体), and each independent observation of \\(X\\) is called an <strong>individual</strong> (个体).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.2 (Random Sample)</div>
                    <div class="env-body">
                        <p>Let the population \\(X\\) have distribution function \\(F\\). If the random variables \\(X_1, X_2, \\ldots, X_n\\) satisfy:</p>
                        <ol>
                            <li><strong>Independence</strong>: \\(X_1, X_2, \\ldots, X_n\\) are mutually independent;</li>
                            <li><strong>Identical distribution</strong>: each \\(X_i\\) has the same distribution as \\(X\\), i.e., \\(X_i \\sim F\\), \\(i = 1, 2, \\ldots, n\\).</li>
                        </ol>
                        <p>then \\(X_1, X_2, \\ldots, X_n\\) is called a <strong>random sample</strong> (随机样本) of size \\(n\\) from the population \\(F\\), or simply a sample. We write</p>
                        \\[X_1, X_2, \\ldots, X_n \\overset{\\text{iid}}{\\sim} F.\\]
                        <p>In this case, the joint distribution function of the sample is</p>
                        \\[F_{X_1, \\ldots, X_n}(x_1, \\ldots, x_n) = \\prod_{i=1}^{n} F(x_i).\\]
                        <p>If \\(F\\) has density \\(f\\), then the joint density is</p>
                        \\[f_{X_1, \\ldots, X_n}(x_1, \\ldots, x_n) = \\prod_{i=1}^{n} f(x_i).\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Think of the sampling process as drawing balls one by one from an "infinitely large urn." Before each draw the urn's composition remains unchanged (independence), and the number written on each ball follows the same distribution (identical distribution). Sampling with replacement from a finite population satisfies the iid condition exactly, whereas sampling without replacement breaks independence.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>It is important to distinguish between the <strong>sample</strong> (the random variables \\(X_1, \\ldots, X_n\\)) and the <strong>sample observation</strong> (样本观测值, the realized values \\(x_1, \\ldots, x_n\\)). A statistic is a function of the sample and is itself a random variable; once specific data are observed, the statistic takes on a definite value.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 4.1 (Joint Density of a Normal Population)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\). The joint density is</p>
                        \\[f(x_1, \\ldots, x_n) = \\prod_{i=1}^{n} \\frac{1}{\\sqrt{2\\pi}\\sigma} \\exp\\!\\left(-\\frac{(x_i - \\mu)^2}{2\\sigma^2}\\right) = \\frac{1}{(2\\pi\\sigma^2)^{n/2}} \\exp\\!\\left(-\\frac{1}{2\\sigma^2}\\sum_{i=1}^{n}(x_i - \\mu)^2\\right).\\]
                        <p>This joint density is fundamental to subsequent discussions of sufficient statistics and maximum likelihood estimation.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.3 (Empirical Distribution Function)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n\\) be a random sample from population \\(F\\). The <strong>empirical distribution function</strong> (经验分布函数, EDF) is defined as</p>
                        \\[\\hat{F}_n(x) = \\frac{1}{n}\\sum_{i=1}^{n} \\mathbf{1}(X_i \\le x),\\]
                        <p>where \\(\\mathbf{1}(\\cdot)\\) is the indicator function. By the Glivenko-Cantelli theorem, \\(\\hat{F}_n(x) \\to F(x)\\) uniformly almost surely.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="population-sampling-sim"></div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>In practice, the iid assumption is often only approximately satisfied. For example, adjacent observations in time series data are often correlated, and individuals within the same cluster may be highly similar in cluster sampling. Violating the iid assumption can lead to severely biased inference, which is why the assumption must be carefully verified in practice.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'population-sampling-sim',
                    title: 'Interactive: Sampling from a Population (从总体中抽样)',
                    description: 'Choose a population distribution and observe how the empirical distribution converges to the true distribution (visual demonstration of the Glivenko-Cantelli theorem)',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400, scale: 50,
                            originX: 60, originY: 340
                        });

                        var distType = 'normal';
                        var samples = [];
                        var n = 0;

                        function truePDF(x) {
                            if (distType === 'normal') return VizEngine.normalPDF(x, 2, 1);
                            if (distType === 'exponential') return VizEngine.exponentialPDF(x, 0.8);
                            if (distType === 'uniform') return VizEngine.uniformPDF(x, 0, 4);
                            return 0;
                        }

                        function trueCDF(x) {
                            if (distType === 'normal') return VizEngine.normalCDF(x, 2, 1);
                            if (distType === 'exponential') return x < 0 ? 0 : 1 - Math.exp(-0.8 * x);
                            if (distType === 'uniform') return x < 0 ? 0 : (x > 4 ? 1 : x / 4);
                            return 0;
                        }

                        function generateSample() {
                            if (distType === 'normal') return VizEngine.randomNormal(2, 1);
                            if (distType === 'exponential') return VizEngine.randomExponential(0.8);
                            if (distType === 'uniform') return Math.random() * 4;
                            return 0;
                        }

                        function empiricalCDF(x) {
                            var count = 0;
                            for (var i = 0; i < samples.length; i++) {
                                if (samples[i] <= x) count++;
                            }
                            return samples.length > 0 ? count / samples.length : 0;
                        }

                        function draw() {
                            viz.clear();
                            // axes
                            var ctx = viz.ctx;
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(60, 340); ctx.lineTo(540, 340); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(60, 340); ctx.lineTo(60, 20); ctx.stroke();

                            // x-axis labels
                            ctx.fillStyle = viz.colors.text; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            for (var x = 0; x <= 8; x++) {
                                var sx = 60 + x * 50;
                                ctx.fillText(x, sx, 344);
                                ctx.strokeStyle = viz.colors.grid; ctx.lineWidth = 0.5;
                                ctx.beginPath(); ctx.moveTo(sx, 20); ctx.lineTo(sx, 340); ctx.stroke();
                            }

                            // y-axis labels
                            ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
                            for (var y = 0; y <= 1; y += 0.2) {
                                var sy = 340 - y * 300;
                                ctx.fillStyle = viz.colors.text;
                                ctx.fillText(y.toFixed(1), 54, sy);
                                ctx.strokeStyle = viz.colors.grid; ctx.lineWidth = 0.5;
                                ctx.beginPath(); ctx.moveTo(60, sy); ctx.lineTo(540, sy); ctx.stroke();
                            }

                            // true CDF
                            ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;
                            for (var i = 0; i <= 400; i++) {
                                var xv = i * 8 / 400;
                                var yv = trueCDF(xv);
                                var px = 60 + xv * 50;
                                var py = 340 - yv * 300;
                                if (!started) { ctx.moveTo(px, py); started = true; }
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // empirical CDF
                            if (samples.length > 0) {
                                var sorted = samples.slice().sort(function(a, b) { return a - b; });
                                ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2;
                                ctx.beginPath();
                                // step function
                                var prevPx = 60;
                                var prevPy = 340;
                                ctx.moveTo(prevPx, prevPy);
                                for (var j = 0; j < sorted.length; j++) {
                                    var xVal = sorted[j];
                                    var cumProb = (j + 1) / sorted.length;
                                    var px2 = 60 + xVal * 50;
                                    var py2 = 340 - cumProb * 300;
                                    var pyPrev = 340 - (j / sorted.length) * 300;
                                    ctx.lineTo(px2, pyPrev);
                                    ctx.lineTo(px2, py2);
                                }
                                ctx.lineTo(540, 340 - 1 * 300);
                                ctx.stroke();

                                // scatter sample points
                                for (var k = 0; k < Math.min(samples.length, 200); k++) {
                                    var spx = 60 + samples[k] * 50;
                                    ctx.fillStyle = viz.colors.teal + '88';
                                    ctx.beginPath(); ctx.arc(spx, 340 + 12, 2.5, 0, Math.PI * 2); ctx.fill();
                                }
                            }

                            // Kolmogorov-Smirnov distance
                            if (samples.length > 0) {
                                var maxD = 0;
                                for (var m = 0; m <= 200; m++) {
                                    var xv2 = m * 8 / 200;
                                    var d = Math.abs(empiricalCDF(xv2) - trueCDF(xv2));
                                    if (d > maxD) maxD = d;
                                }
                                viz.screenText('n = ' + samples.length, 480, 30, viz.colors.white, 14, 'center');
                                viz.screenText('sup|F\u0302\u2099 - F| = ' + maxD.toFixed(4), 440, 50, viz.colors.yellow, 12, 'center');
                            }

                            // legend
                            viz.screenText('True CDF F(x)', 160, 26, viz.colors.orange, 12, 'center');
                            viz.screenText('Empirical CDF F\u0302\u2099(x)', 340, 26, viz.colors.blue, 12, 'center');
                        }

                        // Controls
                        var distSlider = document.createElement('div');
                        distSlider.style.cssText = 'display:flex;gap:6px;margin-bottom:4px;flex-wrap:wrap;';
                        var dists = [
                            {key: 'normal', label: 'N(2,1)'},
                            {key: 'exponential', label: 'Exp(0.8)'},
                            {key: 'uniform', label: 'U(0,4)'}
                        ];
                        dists.forEach(function(d) {
                            var b = document.createElement('button');
                            b.textContent = d.label;
                            b.style.cssText = 'padding:3px 10px;border:1px solid #30363d;border-radius:4px;background:#1a1a40;color:#c9d1d9;font-size:0.75rem;cursor:pointer;';
                            b.addEventListener('click', function() {
                                distType = d.key; samples = []; n = 0; draw();
                            });
                            distSlider.appendChild(b);
                        });
                        controls.appendChild(distSlider);

                        VizEngine.createButton(controls, 'Sample 1', function() {
                            samples.push(generateSample()); n++; draw();
                        });
                        VizEngine.createButton(controls, 'Sample 10', function() {
                            for (var i = 0; i < 10; i++) samples.push(generateSample());
                            n += 10; draw();
                        });
                        VizEngine.createButton(controls, 'Sample 100', function() {
                            for (var i = 0; i < 100; i++) samples.push(generateSample());
                            n += 100; draw();
                        });
                        VizEngine.createButton(controls, 'Reset', function() {
                            samples = []; n = 0; draw();
                        });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Exp}(\\lambda)\\). Write down the joint density of the sample and prove that \\(T = \\sum_{i=1}^n X_i\\) is a sufficient statistic. (Hint: use the factorization theorem.)',
                    hint: 'The joint density is \\(f(x_1, \\ldots, x_n) = \\lambda^n \\exp(-\\lambda \\sum x_i) \\cdot \\mathbf{1}(\\min_i x_i \\ge 0)\\). Note that it factors into a part depending only on \\(\\sum x_i\\) and a part independent of \\(\\lambda\\).',
                    solution: 'The joint density is \\(f(\\mathbf{x}|\\lambda) = \\lambda^n e^{-\\lambda \\sum_{i=1}^n x_i} \\prod_{i=1}^n \\mathbf{1}(x_i \\ge 0)\\). Let \\(g(T|\\lambda) = \\lambda^n e^{-\\lambda T}\\) and \\(h(\\mathbf{x}) = \\prod_{i=1}^n \\mathbf{1}(x_i \\ge 0)\\). Then \\(f(\\mathbf{x}|\\lambda) = g(T(\\mathbf{x})|\\lambda) \\cdot h(\\mathbf{x})\\). By the Fisher-Neyman factorization theorem, \\(T = \\sum_{i=1}^n X_i\\) is a sufficient statistic for \\(\\lambda\\).'
                },
                {
                    question: 'Let \\(X_1, \\ldots, X_n\\) be an iid sample from population \\(F\\), and let \\(\\hat{F}_n(x)\\) be the empirical distribution function. Prove that for fixed \\(x\\), \\(n\\hat{F}_n(x) \\sim \\text{Binomial}(n, F(x))\\).',
                    hint: 'Note that \\(\\mathbf{1}(X_i \\le x)\\) are independent Bernoulli random variables.',
                    solution: 'For fixed \\(x\\), let \\(Y_i = \\mathbf{1}(X_i \\le x)\\). Then \\(Y_i \\overset{\\text{iid}}{\\sim} \\text{Bernoulli}(p)\\) where \\(p = P(X_i \\le x) = F(x)\\). Therefore \\(n\\hat{F}_n(x) = \\sum_{i=1}^n Y_i \\sim \\text{Binomial}(n, F(x))\\). In particular, \\(\\mathbb{E}[\\hat{F}_n(x)] = F(x)\\) and \\(\\operatorname{Var}(\\hat{F}_n(x)) = F(x)(1 - F(x))/n\\).'
                },
                {
                    question: 'Explain why simple random sampling without replacement from a finite population does not satisfy the iid assumption, but can be approximated as iid when the population is much larger than the sample.',
                    hint: 'Consider the relationship between the hypergeometric distribution and the binomial distribution.',
                    solution: 'Under sampling without replacement, the conditional distribution of \\(X_i\\) depends on previous draws, i.e., \\(P(X_{i+1} | X_1, \\ldots, X_i) \\ne P(X_{i+1})\\), so independence fails. However, when the population size \\(N \\gg n\\), the effect of previously drawn elements on the remaining population is negligible. Formally, the hypergeometric distribution \\(\\text{Hypergeometric}(N, K, n)\\) converges to \\(\\text{Binomial}(n, p)\\) as \\(N \\to \\infty\\) with \\(K/N \\to p\\), which is exactly the distribution of a sum of iid Bernoulli samples. It is generally accepted that the iid approximation is quite accurate when \\(n/N < 0.05\\).'
                }
            ]
        },

        // ========== SECTION 2: Statistics and Sampling Distributions ==========
        {
            id: 'ch04-sec02',
            title: 'Statistics and Sampling Distributions',
            content: `
                <h2>Statistics and Sampling Distributions &#8201;|&#8201; 统计量与抽样分布</h2>
                <p>With the concept of a random sample in hand, we now define a <strong>statistic</strong> (统计量): a computable function of the sample. Statistics serve as the bridge for inferring population parameters.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.4 (Statistic)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n\\) be a random sample. If a function \\(T = T(X_1, \\ldots, X_n)\\) <strong>does not depend on any unknown parameters</strong>, then \\(T\\) is called a <strong>statistic</strong> (统计量). The distribution of a statistic is called a <strong>sampling distribution</strong> (抽样分布).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Note that \\(\\bar{X} = \\frac{1}{n}\\sum_{i=1}^n X_i\\) is a statistic, but \\(\\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}}\\) is <strong>not</strong> a statistic when \\(\\mu, \\sigma\\) are unknown (because it depends on unknown parameters). One must replace unknown parameters with sample-based quantities to obtain a statistic, e.g., \\(\\frac{\\bar{X} - \\mu_0}{S/\\sqrt{n}}\\) (where \\(\\mu_0\\) is a known value specified in the hypothesis).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.5 (Common Statistics)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n\\) be a random sample. The following statistics are defined:</p>
                        <ol>
                            <li><strong>Sample mean</strong> (样本均值): \\(\\bar{X} = \\frac{1}{n}\\sum_{i=1}^{n} X_i\\)</li>
                            <li><strong>Sample variance</strong> (样本方差): \\(S^2 = \\frac{1}{n-1}\\sum_{i=1}^{n} (X_i - \\bar{X})^2\\)</li>
                            <li><strong>Sample standard deviation</strong> (样本标准差): \\(S = \\sqrt{S^2}\\)</li>
                            <li><strong>Sample \\(k\\)-th moment</strong> (样本 \\(k\\) 阶矩): \\(M_k = \\frac{1}{n}\\sum_{i=1}^{n} X_i^k\\)</li>
                            <li><strong>Sample \\(k\\)-th central moment</strong> (样本 \\(k\\) 阶中心矩): \\(M_k^* = \\frac{1}{n}\\sum_{i=1}^{n} (X_i - \\bar{X})^k\\)</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.1 (Basic Properties of Sample Mean and Variance)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} F\\), where \\(\\mathbb{E}[X] = \\mu\\) and \\(\\operatorname{Var}(X) = \\sigma^2 < \\infty\\). Then:</p>
                        <ol>
                            <li>\\(\\mathbb{E}[\\bar{X}] = \\mu\\) (unbiasedness)</li>
                            <li>\\(\\operatorname{Var}(\\bar{X}) = \\frac{\\sigma^2}{n}\\) (variance reduction)</li>
                            <li>\\(\\mathbb{E}[S^2] = \\sigma^2\\) (unbiasedness)</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>(1) By linearity, \\(\\mathbb{E}[\\bar{X}] = \\frac{1}{n}\\sum_{i=1}^n \\mathbb{E}[X_i] = \\mu\\).</p>
                        <p>(2) By independence, \\(\\operatorname{Var}(\\bar{X}) = \\frac{1}{n^2}\\sum_{i=1}^n \\operatorname{Var}(X_i) = \\frac{\\sigma^2}{n}\\).</p>
                        <p>(3) Using the identity \\(\\sum_{i=1}^n (X_i - \\bar{X})^2 = \\sum_{i=1}^n X_i^2 - n\\bar{X}^2\\):</p>
                        \\[\\mathbb{E}\\left[\\sum_{i=1}^n (X_i - \\bar{X})^2\\right] = \\sum_{i=1}^n \\mathbb{E}[X_i^2] - n\\mathbb{E}[\\bar{X}^2].\\]
                        <p>Since \\(\\mathbb{E}[X_i^2] = \\sigma^2 + \\mu^2\\) and \\(\\mathbb{E}[\\bar{X}^2] = \\frac{\\sigma^2}{n} + \\mu^2\\), substituting gives</p>
                        \\[\\mathbb{E}\\left[\\sum_{i=1}^n (X_i - \\bar{X})^2\\right] = n(\\sigma^2 + \\mu^2) - n\\left(\\frac{\\sigma^2}{n} + \\mu^2\\right) = (n-1)\\sigma^2.\\]
                        <p>Therefore \\(\\mathbb{E}[S^2] = \\frac{1}{n-1}(n-1)\\sigma^2 = \\sigma^2\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The reason for dividing by \\(n-1\\) instead of \\(n\\) in the sample variance is the "loss of degrees of freedom" (自由度损失): the \\(n\\) deviations \\(X_i - \\bar{X}\\) always sum to zero, so only \\(n-1\\) of them are free. Using \\(n\\) as the divisor would <strong>systematically underestimate</strong> the population variance. The visualization below demonstrates this point intuitively.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.2 (Independence of Sample Mean and Variance &mdash; Normal Case)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\). Then:</p>
                        <ol>
                            <li>\\(\\bar{X}\\) and \\(S^2\\) are independent;</li>
                            <li>\\(\\bar{X} \\sim N\\!\\left(\\mu, \\frac{\\sigma^2}{n}\\right)\\);</li>
                            <li>\\(\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)\\).</li>
                        </ol>
                        <p>This theorem was rigorously proved by Cochran in 1934 and is a cornerstone of inference for normal populations.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sampling-dist-xbar"></div>
            `,
            visualizations: [
                {
                    id: 'sampling-dist-xbar',
                    title: 'Interactive: Sampling Distribution of the Sample Mean (样本均值的抽样分布)',
                    description: 'Repeatedly draw samples from the population and observe how the distribution of the sample mean concentrates around the population mean as n increases',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 420, scale: 80,
                            originX: 80, originY: 380
                        });

                        var n = 5;
                        var nSamples = 0;
                        var means = [];
                        var mu = 3;
                        var sigma = 1.5;

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // axes
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(80, 380); ctx.lineTo(540, 380); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(80, 380); ctx.lineTo(80, 20); ctx.stroke();

                            // x range: 0 to 6, mapped to [80, 560]
                            var xScale = 460 / 6;
                            var yMax = 3.0;
                            var yScale = 340 / yMax;

                            // grid and labels
                            ctx.fillStyle = viz.colors.text; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            for (var x = 0; x <= 6; x++) {
                                var sx = 80 + x * xScale;
                                ctx.fillText(x, sx, 384);
                                ctx.strokeStyle = viz.colors.grid; ctx.lineWidth = 0.5;
                                ctx.beginPath(); ctx.moveTo(sx, 20); ctx.lineTo(sx, 380); ctx.stroke();
                            }

                            // population density N(mu, sigma^2) - light
                            ctx.strokeStyle = viz.colors.text + '66'; ctx.lineWidth = 1.5;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath();
                            for (var i = 0; i <= 300; i++) {
                                var xv = i * 6 / 300;
                                var yv = VizEngine.normalPDF(xv, mu, sigma);
                                var px = 80 + xv * xScale;
                                var py = 380 - yv * yScale;
                                if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                            }
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // theoretical sampling distribution N(mu, sigma^2/n) - orange
                            var sigmaXbar = sigma / Math.sqrt(n);
                            ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (var i2 = 0; i2 <= 300; i2++) {
                                var xv2 = i2 * 6 / 300;
                                var yv2 = VizEngine.normalPDF(xv2, mu, sigmaXbar);
                                var px2 = 80 + xv2 * xScale;
                                var py2 = 380 - yv2 * yScale;
                                if (i2 === 0) ctx.moveTo(px2, py2); else ctx.lineTo(px2, py2);
                            }
                            ctx.stroke();

                            // histogram of sample means
                            if (means.length > 0) {
                                var binW = 0.15;
                                var binCounts = {};
                                for (var j = 0; j < means.length; j++) {
                                    var binIdx = Math.floor(means[j] / binW);
                                    binCounts[binIdx] = (binCounts[binIdx] || 0) + 1;
                                }
                                var maxCount = 0;
                                for (var key in binCounts) {
                                    if (binCounts[key] > maxCount) maxCount = binCounts[key];
                                }
                                // normalize as density
                                for (var key2 in binCounts) {
                                    var k = parseInt(key2);
                                    var height = binCounts[key2] / (means.length * binW);
                                    var bx = 80 + k * binW * xScale;
                                    var bw = binW * xScale;
                                    var bh = height * yScale;
                                    ctx.fillStyle = viz.colors.blue + '55';
                                    ctx.fillRect(bx, 380 - bh, bw, bh);
                                    ctx.strokeStyle = viz.colors.blue + 'aa';
                                    ctx.lineWidth = 0.5;
                                    ctx.strokeRect(bx, 380 - bh, bw, bh);
                                }
                            }

                            // vertical line at mu
                            ctx.strokeStyle = viz.colors.green; ctx.lineWidth = 1;
                            ctx.setLineDash([3, 3]);
                            var muPx = 80 + mu * xScale;
                            ctx.beginPath(); ctx.moveTo(muPx, 20); ctx.lineTo(muPx, 380); ctx.stroke();
                            ctx.setLineDash([]);

                            // info text
                            viz.screenText('Population: N(' + mu + ', ' + sigma.toFixed(1) + '\u00B2)', 310, 18, viz.colors.text, 11, 'center');
                            viz.screenText('n = ' + n + ', samples = ' + nSamples, 310, 34, viz.colors.white, 13, 'center');
                            viz.screenText('Theory: N(\u03BC, \u03C3\u00B2/n)', 460, 54, viz.colors.orange, 11, 'center');
                            viz.screenText('Histogram of X\u0304', 460, 70, viz.colors.blue, 11, 'center');
                            if (means.length > 2) {
                                var empMean = VizEngine.mean(means);
                                var empSD = Math.sqrt(VizEngine.sampleVariance(means));
                                viz.screenText('E\u0302[X\u0304] = ' + empMean.toFixed(3) + ', SD\u0302 = ' + empSD.toFixed(3), 310, 54, viz.colors.teal, 11, 'center');
                            }
                        }

                        var nSlider = VizEngine.createSlider(controls, 'n =', 2, 50, 5, 1, function(val) {
                            n = Math.round(val); means = []; nSamples = 0; draw();
                        });

                        VizEngine.createButton(controls, 'Sample 1', function() {
                            var s = VizEngine.sampleArray(function() { return VizEngine.randomNormal(mu, sigma); }, n);
                            means.push(VizEngine.mean(s)); nSamples++; draw();
                        });
                        VizEngine.createButton(controls, 'Sample 100', function() {
                            for (var j = 0; j < 100; j++) {
                                var s = VizEngine.sampleArray(function() { return VizEngine.randomNormal(mu, sigma); }, n);
                                means.push(VizEngine.mean(s));
                            }
                            nSamples += 100; draw();
                        });
                        VizEngine.createButton(controls, 'Sample 1000', function() {
                            for (var j = 0; j < 1000; j++) {
                                var s = VizEngine.sampleArray(function() { return VizEngine.randomNormal(mu, sigma); }, n);
                                means.push(VizEngine.mean(s));
                            }
                            nSamples += 1000; draw();
                        });
                        VizEngine.createButton(controls, 'Reset', function() {
                            means = []; nSamples = 0; draw();
                        });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} F\\) with \\(\\mathbb{E}[X^4] < \\infty\\). Compute \\(\\operatorname{Var}(S^2)\\) and explain its relationship with the fourth moment of the population.',
                    hint: 'Use \\(S^2 = \\frac{1}{n-1}\\sum(X_i - \\bar{X})^2\\) and the identity \\((n-1)S^2 = \\sum X_i^2 - n\\bar{X}^2\\) to compute \\(\\operatorname{Var}(\\sum X_i^2 - n\\bar{X}^2)\\).',
                    solution: 'Let \\(\\mu_k = \\mathbb{E}[(X - \\mu)^k]\\) denote the \\(k\\)-th central moment. After careful calculation, \\(\\operatorname{Var}(S^2) = \\frac{1}{n}\\left(\\mu_4 - \\frac{n-3}{n-1}\\sigma^4\\right)\\). For a normal population, \\(\\mu_4 = 3\\sigma^4\\), which gives \\(\\operatorname{Var}(S^2) = \\frac{2\\sigma^4}{n-1}\\), consistent with the variance \\(2(n-1)\\) of \\(\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)\\).'
                },
                {
                    question: 'Prove that the sample mean \\(\\bar{X}\\) is the Best Linear Unbiased Estimator (BLUE) of \\(\\mu\\) in the mean-squared-error sense, i.e., among all estimators of the form \\(\\sum a_i X_i\\) satisfying \\(\\mathbb{E}[\\sum a_i X_i] = \\mu\\), \\(\\bar{X}\\) has the smallest variance.',
                    hint: 'Unbiasedness requires \\(\\sum a_i = 1\\). Use the Cauchy-Schwarz inequality or Lagrange multipliers.',
                    solution: 'Let \\(T = \\sum_{i=1}^n a_i X_i\\) satisfy \\(\\mathbb{E}[T] = \\mu\\), i.e., \\(\\sum a_i = 1\\). Then \\(\\operatorname{Var}(T) = \\sigma^2 \\sum a_i^2\\). By the Cauchy-Schwarz inequality, \\(1 = (\\sum a_i)^2 = (\\sum a_i \\cdot 1)^2 \\le (\\sum a_i^2)(n)\\), so \\(\\sum a_i^2 \\ge 1/n\\), with equality if and only if \\(a_1 = \\cdots = a_n = 1/n\\), i.e., \\(T = \\bar{X}\\). Therefore \\(\\operatorname{Var}(T) \\ge \\sigma^2/n = \\operatorname{Var}(\\bar{X})\\).'
                },
                {
                    question: 'What are the relative advantages and disadvantages of the sample median and the sample mean as estimators of a location parameter? Discuss from both the robustness and efficiency perspectives.',
                    hint: 'Consider their asymptotic variances under a normal population and their behavior in the presence of outliers.',
                    solution: 'For the \\(N(\\mu, \\sigma^2)\\) population: (1) \\(\\bar{X}\\) has asymptotic variance \\(\\sigma^2/n\\); (2) the sample median has asymptotic variance \\(\\pi\\sigma^2/(2n)\\), giving an asymptotic relative efficiency (ARE) of \\(2/\\pi \\approx 63.7\\%\\). Thus under normality, the mean is more efficient. However, for heavy-tailed distributions (e.g., Cauchy), the mean does not even converge, while the median still converges at rate \\(\\sqrt{n}\\) and has a bounded influence function, offering far superior robustness. In scenarios with outliers, the median is the safer choice.'
                }
            ]
        },

        // ========== SECTION 3: Sampling Distributions from Normal Populations ==========
        {
            id: 'ch04-sec03',
            title: 'Sampling Distributions from Normal Populations',
            content: `
                <h2>Sampling Distributions from Normal Populations &#8201;|&#8201; 正态总体的抽样分布</h2>
                <p>The normal population is the most central model in statistical theory. This section systematically derives the three major sampling distributions &mdash; the \\(\\chi^2\\) distribution, the \\(t\\) distribution, and the \\(F\\) distribution &mdash; and shows how they arise naturally from normal samples.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.6 (\\(\\chi^2\\) Distribution)</div>
                    <div class="env-body">
                        <p>Let \\(Z_1, \\ldots, Z_k \\overset{\\text{iid}}{\\sim} N(0, 1)\\). Then</p>
                        \\[Q = \\sum_{i=1}^{k} Z_i^2 \\sim \\chi^2(k),\\]
                        <p>and we say \\(Q\\) follows a <strong>chi-squared distribution</strong> (卡方分布) with \\(k\\) degrees of freedom. Its density is</p>
                        \\[f_Q(x) = \\frac{1}{2^{k/2}\\Gamma(k/2)} x^{k/2 - 1} e^{-x/2}, \\quad x > 0.\\]
                        <p>Basic properties: \\(\\mathbb{E}[Q] = k\\), \\(\\operatorname{Var}(Q) = 2k\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.3 (Additivity of the \\(\\chi^2\\) Distribution)</div>
                    <div class="env-body">
                        <p>If \\(Q_1 \\sim \\chi^2(k_1)\\), \\(Q_2 \\sim \\chi^2(k_2)\\), and \\(Q_1 \\perp Q_2\\) (independent), then</p>
                        \\[Q_1 + Q_2 \\sim \\chi^2(k_1 + k_2).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>We use moment generating functions (mgf). The mgf of \\(\\chi^2(k)\\) is \\(M(t) = (1 - 2t)^{-k/2}\\) for \\(t < 1/2\\). By independence,</p>
                        \\[M_{Q_1 + Q_2}(t) = M_{Q_1}(t)M_{Q_2}(t) = (1-2t)^{-k_1/2}(1-2t)^{-k_2/2} = (1-2t)^{-(k_1+k_2)/2},\\]
                        <p>which is the mgf of \\(\\chi^2(k_1 + k_2)\\). By the uniqueness theorem for moment generating functions, \\(Q_1 + Q_2 \\sim \\chi^2(k_1 + k_2)\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.7 (Student's \\(t\\) Distribution)</div>
                    <div class="env-body">
                        <p>Let \\(Z \\sim N(0,1)\\), \\(V \\sim \\chi^2(\\nu)\\), and \\(Z \\perp V\\). Define</p>
                        \\[T = \\frac{Z}{\\sqrt{V/\\nu}} \\sim t(\\nu),\\]
                        <p>and we say \\(T\\) follows a <strong>Student's \\(t\\) distribution</strong> (\\(t\\) 分布) with \\(\\nu\\) degrees of freedom. Its density is</p>
                        \\[f_T(x) = \\frac{\\Gamma\\!\\left(\\frac{\\nu+1}{2}\\right)}{\\sqrt{\\nu\\pi}\\;\\Gamma\\!\\left(\\frac{\\nu}{2}\\right)} \\left(1 + \\frac{x^2}{\\nu}\\right)^{\\!-(\\nu+1)/2}.\\]
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>As \\(\\nu \\to \\infty\\), \\(t(\\nu) \\to N(0,1)\\). The \\(t\\) distribution has heavier tails than the normal distribution, and the smaller the degrees of freedom, the heavier the tails. When \\(\\nu = 1\\), \\(t(1)\\) is the Cauchy distribution, which does not even have a finite mean.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.8 (\\(F\\) Distribution)</div>
                    <div class="env-body">
                        <p>Let \\(U \\sim \\chi^2(d_1)\\), \\(V \\sim \\chi^2(d_2)\\), and \\(U \\perp V\\). Define</p>
                        \\[W = \\frac{U/d_1}{V/d_2} \\sim F(d_1, d_2),\\]
                        <p>and we say \\(W\\) follows an <strong>\\(F\\) distribution</strong> (\\(F\\) 分布) with degrees of freedom \\((d_1, d_2)\\). Note that \\(T \\sim t(\\nu)\\) implies \\(T^2 \\sim F(1, \\nu)\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.4 (Key Results for a Single Normal Population)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\). Then:</p>
                        <ol>
                            <li>\\(\\bar{X} \\sim N\\!\\left(\\mu, \\frac{\\sigma^2}{n}\\right)\\), i.e., \\(\\frac{\\bar{X} - \\mu}{\\sigma / \\sqrt{n}} \\sim N(0,1)\\);</li>
                            <li>\\(\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)\\);</li>
                            <li>\\(\\bar{X}\\) and \\(S^2\\) are independent;</li>
                            <li>\\(\\frac{\\bar{X} - \\mu}{S / \\sqrt{n}} \\sim t(n-1)\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (of (4))</div>
                    <div class="env-body">
                        <p>By (1), \\(Z = \\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}} \\sim N(0,1)\\). By (2), \\(V = \\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)\\). By (3), \\(Z \\perp V\\). Therefore</p>
                        \\[\\frac{Z}{\\sqrt{V/(n-1)}} = \\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}} \\cdot \\frac{1}{\\sqrt{\\frac{(n-1)S^2}{\\sigma^2(n-1)}}} = \\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}} \\cdot \\frac{\\sigma}{S} = \\frac{\\bar{X} - \\mu}{S/\\sqrt{n}} \\sim t(n-1).\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.5 (Two Normal Populations)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_m \\overset{\\text{iid}}{\\sim} N(\\mu_1, \\sigma^2)\\) and \\(Y_1, \\ldots, Y_n \\overset{\\text{iid}}{\\sim} N(\\mu_2, \\sigma^2)\\) be independent, with common variance \\(\\sigma^2\\). Then:</p>
                        <ol>
                            <li>\\(\\bar{X} - \\bar{Y} \\sim N\\!\\left(\\mu_1 - \\mu_2, \\sigma^2\\left(\\frac{1}{m} + \\frac{1}{n}\\right)\\right)\\);</li>
                            <li>The pooled sample variance \\(S_p^2 = \\frac{(m-1)S_X^2 + (n-1)S_Y^2}{m+n-2}\\) satisfies \\(\\frac{(m+n-2)S_p^2}{\\sigma^2} \\sim \\chi^2(m+n-2)\\);</li>
                            <li>\\(\\frac{(\\bar{X} - \\bar{Y}) - (\\mu_1 - \\mu_2)}{S_p\\sqrt{1/m + 1/n}} \\sim t(m+n-2)\\) (two-sample \\(t\\) statistic).</li>
                        </ol>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="t-distribution-emergence"></div>
            `,
            visualizations: [
                {
                    id: 't-distribution-emergence',
                    title: 'Interactive: Birth of the t Distribution (t 分布的诞生)',
                    description: 'Visualize how the chi-squared, t, and F distributions arise from normal samples, and how the t distribution approaches the normal as degrees of freedom increase',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400, scale: 60,
                            originX: 280, originY: 340
                        });

                        var nu = 3;
                        var showMode = 't'; // 't', 'chi2', 'F'
                        var simulated = [];
                        var nSim = 0;

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // axes
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            if (showMode === 't') {
                                // symmetric axes for t
                                ctx.beginPath(); ctx.moveTo(20, 340); ctx.lineTo(540, 340); ctx.stroke();
                                ctx.beginPath(); ctx.moveTo(280, 340); ctx.lineTo(280, 20); ctx.stroke();

                                var xScale = 260 / 5; // [-5, 5]
                                var yMax = 0.5;
                                var yScale = 300 / yMax;

                                // grid
                                ctx.fillStyle = viz.colors.text; ctx.font = '10px -apple-system,sans-serif';
                                ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                                for (var x = -4; x <= 4; x++) {
                                    if (x === 0) continue;
                                    var sx = 280 + x * xScale;
                                    ctx.fillText(x, sx, 344);
                                    ctx.strokeStyle = viz.colors.grid; ctx.lineWidth = 0.5;
                                    ctx.beginPath(); ctx.moveTo(sx, 20); ctx.lineTo(sx, 340); ctx.stroke();
                                }

                                // N(0,1) reference
                                ctx.strokeStyle = viz.colors.text + '55'; ctx.lineWidth = 1.5;
                                ctx.setLineDash([4, 3]);
                                ctx.beginPath();
                                for (var i = 0; i <= 300; i++) {
                                    var xv = -5 + 10 * i / 300;
                                    var yv = VizEngine.normalPDF(xv);
                                    var px = 280 + xv * xScale;
                                    var py = 340 - yv * yScale;
                                    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                                }
                                ctx.stroke();
                                ctx.setLineDash([]);

                                // t(nu) density
                                ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 2.5;
                                ctx.beginPath();
                                for (var i2 = 0; i2 <= 300; i2++) {
                                    var xv2 = -5 + 10 * i2 / 300;
                                    var yv2 = VizEngine.tPDF(xv2, nu);
                                    var px2 = 280 + xv2 * xScale;
                                    var py2 = 340 - yv2 * yScale;
                                    if (i2 === 0) ctx.moveTo(px2, py2); else ctx.lineTo(px2, py2);
                                }
                                ctx.stroke();

                                // shade tails
                                ctx.fillStyle = viz.colors.red + '33';
                                ctx.beginPath();
                                var tCrit = 2;
                                for (var it = 0; it <= 60; it++) {
                                    var xt = tCrit + 3 * it / 60;
                                    var yt = VizEngine.tPDF(xt, nu);
                                    var pxt = 280 + xt * xScale;
                                    var pyt = 340 - yt * yScale;
                                    if (it === 0) { ctx.moveTo(pxt, 340); ctx.lineTo(pxt, pyt); }
                                    else ctx.lineTo(pxt, pyt);
                                }
                                ctx.lineTo(280 + 5 * xScale, 340);
                                ctx.closePath(); ctx.fill();

                                // histogram of simulated
                                if (simulated.length > 0) {
                                    var binW2 = 0.25;
                                    var bins = {};
                                    for (var js = 0; js < simulated.length; js++) {
                                        var bi = Math.floor(simulated[js] / binW2);
                                        bins[bi] = (bins[bi] || 0) + 1;
                                    }
                                    for (var bk in bins) {
                                        var k2 = parseInt(bk);
                                        var h = bins[bk] / (simulated.length * binW2);
                                        var bx = 280 + k2 * binW2 * xScale;
                                        var bw = binW2 * xScale;
                                        var bh = h * yScale;
                                        ctx.fillStyle = viz.colors.blue + '44';
                                        ctx.fillRect(bx, 340 - bh, bw, bh);
                                    }
                                }

                                viz.screenText('t(' + nu + ') distribution', 280, 18, viz.colors.orange, 13, 'center');
                                viz.screenText('N(0,1) reference (dashed)', 280, 36, viz.colors.text, 10, 'center');

                            } else if (showMode === 'chi2') {
                                ctx.beginPath(); ctx.moveTo(40, 340); ctx.lineTo(540, 340); ctx.stroke();
                                ctx.beginPath(); ctx.moveTo(40, 340); ctx.lineTo(40, 20); ctx.stroke();

                                var xMax2 = Math.max(3 * nu, 15);
                                var xScale2 = 490 / xMax2;
                                var yMax2 = 0.3;
                                var yScale2 = 300 / yMax2;

                                ctx.fillStyle = viz.colors.text; ctx.font = '10px -apple-system,sans-serif';
                                ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                                var step = xMax2 > 20 ? 5 : (xMax2 > 10 ? 2 : 1);
                                for (var x2 = 0; x2 <= xMax2; x2 += step) {
                                    var sx2 = 40 + x2 * xScale2;
                                    ctx.fillText(x2, sx2, 344);
                                }

                                // chi2 density
                                ctx.strokeStyle = viz.colors.purple; ctx.lineWidth = 2.5;
                                ctx.beginPath();
                                for (var i3 = 1; i3 <= 300; i3++) {
                                    var xv3 = 0.01 + xMax2 * i3 / 300;
                                    var yv3 = VizEngine.chiSquaredPDF(xv3, nu);
                                    if (!isFinite(yv3)) continue;
                                    var px3 = 40 + xv3 * xScale2;
                                    var py3 = 340 - Math.min(yv3, yMax2) * yScale2;
                                    if (i3 === 1) ctx.moveTo(px3, py3); else ctx.lineTo(px3, py3);
                                }
                                ctx.stroke();

                                // shade under
                                ctx.fillStyle = viz.colors.purple + '22';
                                ctx.beginPath();
                                ctx.moveTo(40, 340);
                                for (var i4 = 1; i4 <= 300; i4++) {
                                    var xv4 = 0.01 + xMax2 * i4 / 300;
                                    var yv4 = VizEngine.chiSquaredPDF(xv4, nu);
                                    if (!isFinite(yv4)) yv4 = 0;
                                    var px4 = 40 + xv4 * xScale2;
                                    var py4 = 340 - Math.min(yv4, yMax2) * yScale2;
                                    ctx.lineTo(px4, py4);
                                }
                                ctx.lineTo(40 + xMax2 * xScale2, 340);
                                ctx.closePath(); ctx.fill();

                                // sim histogram
                                if (simulated.length > 0) {
                                    var binW3 = xMax2 / 40;
                                    var bins3 = {};
                                    for (var j3 = 0; j3 < simulated.length; j3++) {
                                        var bi3 = Math.floor(simulated[j3] / binW3);
                                        bins3[bi3] = (bins3[bi3] || 0) + 1;
                                    }
                                    for (var bk3 in bins3) {
                                        var kk = parseInt(bk3);
                                        if (kk < 0) continue;
                                        var h3 = bins3[bk3] / (simulated.length * binW3);
                                        var bx3 = 40 + kk * binW3 * xScale2;
                                        var bw3 = binW3 * xScale2;
                                        var bh3 = Math.min(h3, yMax2) * yScale2;
                                        ctx.fillStyle = viz.colors.blue + '44';
                                        ctx.fillRect(bx3, 340 - bh3, bw3, bh3);
                                    }
                                }

                                viz.screenText('\u03C7\u00B2(' + nu + ') distribution', 280, 18, viz.colors.purple, 13, 'center');
                                viz.screenText('E = ' + nu + ', Var = ' + (2 * nu), 280, 36, viz.colors.text, 10, 'center');

                            } else { // F distribution
                                ctx.beginPath(); ctx.moveTo(40, 340); ctx.lineTo(540, 340); ctx.stroke();
                                ctx.beginPath(); ctx.moveTo(40, 340); ctx.lineTo(40, 20); ctx.stroke();

                                var d1 = nu;
                                var d2 = 20;
                                var xMaxF = 5;
                                var xScaleF = 490 / xMaxF;
                                var yMaxF = 1.2;
                                var yScaleF = 300 / yMaxF;

                                ctx.fillStyle = viz.colors.text; ctx.font = '10px -apple-system,sans-serif';
                                ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                                for (var xf = 0; xf <= 5; xf++) {
                                    var sxf = 40 + xf * xScaleF;
                                    ctx.fillText(xf, sxf, 344);
                                }

                                // F density
                                ctx.strokeStyle = viz.colors.teal; ctx.lineWidth = 2.5;
                                ctx.beginPath();
                                for (var i5 = 1; i5 <= 300; i5++) {
                                    var xv5 = 0.01 + xMaxF * i5 / 300;
                                    var yv5 = VizEngine.fPDF(xv5, d1, d2);
                                    if (!isFinite(yv5)) continue;
                                    var px5 = 40 + xv5 * xScaleF;
                                    var py5 = 340 - Math.min(yv5, yMaxF) * yScaleF;
                                    if (i5 === 1) ctx.moveTo(px5, py5); else ctx.lineTo(px5, py5);
                                }
                                ctx.stroke();

                                // sim histogram
                                if (simulated.length > 0) {
                                    var binWF = 0.15;
                                    var binsF = {};
                                    for (var jf = 0; jf < simulated.length; jf++) {
                                        var bif = Math.floor(simulated[jf] / binWF);
                                        binsF[bif] = (binsF[bif] || 0) + 1;
                                    }
                                    for (var bkf in binsF) {
                                        var kkf = parseInt(bkf);
                                        if (kkf < 0 || kkf * binWF > xMaxF) continue;
                                        var hf = binsF[bkf] / (simulated.length * binWF);
                                        var bxf = 40 + kkf * binWF * xScaleF;
                                        var bwf = binWF * xScaleF;
                                        var bhf = Math.min(hf, yMaxF) * yScaleF;
                                        ctx.fillStyle = viz.colors.blue + '44';
                                        ctx.fillRect(bxf, 340 - bhf, bwf, bhf);
                                    }
                                }

                                viz.screenText('F(' + d1 + ', ' + d2 + ') distribution', 280, 18, viz.colors.teal, 13, 'center');
                            }

                            if (simulated.length > 0) {
                                viz.screenText('Simulated: ' + simulated.length, 480, 18, viz.colors.blue, 11, 'center');
                            }
                        }

                        // mode buttons
                        var modeRow = document.createElement('div');
                        modeRow.style.cssText = 'display:flex;gap:6px;margin-bottom:4px;flex-wrap:wrap;';
                        var modes = [
                            {key: 't', label: 't distribution'},
                            {key: 'chi2', label: '\u03C7\u00B2 distribution'},
                            {key: 'F', label: 'F distribution'}
                        ];
                        modes.forEach(function(m) {
                            var b = document.createElement('button');
                            b.textContent = m.label;
                            b.style.cssText = 'padding:3px 10px;border:1px solid #30363d;border-radius:4px;background:#1a1a40;color:#c9d1d9;font-size:0.75rem;cursor:pointer;';
                            b.addEventListener('click', function() {
                                showMode = m.key; simulated = []; nSim = 0; draw();
                            });
                            modeRow.appendChild(b);
                        });
                        controls.appendChild(modeRow);

                        var nuSlider = VizEngine.createSlider(controls, '\u03BD =', 1, 30, 3, 1, function(val) {
                            nu = Math.round(val); simulated = []; nSim = 0; draw();
                        });

                        VizEngine.createButton(controls, 'Simulate 500', function() {
                            for (var j = 0; j < 500; j++) {
                                if (showMode === 't') {
                                    // generate t: Z / sqrt(V/nu)
                                    var z = VizEngine.randomNormal(0, 1);
                                    var v = 0;
                                    for (var kk = 0; kk < nu; kk++) {
                                        var zz = VizEngine.randomNormal(0, 1);
                                        v += zz * zz;
                                    }
                                    simulated.push(z / Math.sqrt(v / nu));
                                } else if (showMode === 'chi2') {
                                    var chi = 0;
                                    for (var kk2 = 0; kk2 < nu; kk2++) {
                                        var zz2 = VizEngine.randomNormal(0, 1);
                                        chi += zz2 * zz2;
                                    }
                                    simulated.push(chi);
                                } else {
                                    // F: (U/d1) / (V/d2)
                                    var d1 = nu;
                                    var d2 = 20;
                                    var u = 0;
                                    for (var ka = 0; ka < d1; ka++) { var za = VizEngine.randomNormal(0, 1); u += za * za; }
                                    var vv = 0;
                                    for (var kb = 0; kb < d2; kb++) { var zb = VizEngine.randomNormal(0, 1); vv += zb * zb; }
                                    simulated.push((u / d1) / (vv / d2));
                                }
                            }
                            nSim += 500;
                            draw();
                        });
                        VizEngine.createButton(controls, 'Reset', function() {
                            simulated = []; nSim = 0; draw();
                        });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\). Prove that \\(\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)\\).',
                    hint: 'Use the identity \\(\\sum(X_i - \\bar{X})^2 = \\sum X_i^2 - n\\bar{X}^2\\) and an orthogonal transformation (Helmert matrix) to transform \\((X_1, \\ldots, X_n)\\) into independent components.',
                    solution: 'Let \\(Z_i = (X_i - \\mu)/\\sigma \\overset{\\text{iid}}{\\sim} N(0,1)\\). Consider the orthogonal transformation \\(\\mathbf{Y} = H\\mathbf{Z}\\), where \\(H\\) is the Helmert matrix, so that \\(Y_1 = \\sqrt{n}\\bar{Z}\\) and \\(Y_2, \\ldots, Y_n\\) are the remaining \\(n-1\\) orthogonal components. Since orthogonal transformations preserve the joint distribution of standard normals (rotational invariance), \\(Y_1, \\ldots, Y_n \\overset{\\text{iid}}{\\sim} N(0,1)\\). Also \\(\\sum Z_i^2 = \\sum Y_i^2 = Y_1^2 + \\sum_{i=2}^n Y_i^2\\), so \\(\\sum(Z_i - \\bar{Z})^2 = \\sum Z_i^2 - n\\bar{Z}^2 = \\sum_{i=2}^n Y_i^2 \\sim \\chi^2(n-1)\\).'
                },
                {
                    question: 'Let \\(X_1, \\ldots, X_m \\overset{\\text{iid}}{\\sim} N(\\mu_1, \\sigma_1^2)\\) and \\(Y_1, \\ldots, Y_n \\overset{\\text{iid}}{\\sim} N(\\mu_2, \\sigma_2^2)\\) be independent. Prove that \\(\\frac{S_X^2 / \\sigma_1^2}{S_Y^2 / \\sigma_2^2} \\sim F(m-1, n-1)\\).',
                    hint: 'Use \\(\\frac{(m-1)S_X^2}{\\sigma_1^2} \\sim \\chi^2(m-1)\\) and the definition of the \\(F\\) distribution.',
                    solution: 'By Theorem 4.4, \\(U = \\frac{(m-1)S_X^2}{\\sigma_1^2} \\sim \\chi^2(m-1)\\) and \\(V = \\frac{(n-1)S_Y^2}{\\sigma_2^2} \\sim \\chi^2(n-1)\\), and by the independence of the two samples, \\(U \\perp V\\). Therefore \\(\\frac{U/(m-1)}{V/(n-1)} = \\frac{S_X^2/\\sigma_1^2}{S_Y^2/\\sigma_2^2} \\sim F(m-1, n-1)\\). When \\(\\sigma_1^2 = \\sigma_2^2\\), this reduces to \\(S_X^2/S_Y^2 \\sim F(m-1, n-1)\\), which can be used for testing equality of variances.'
                },
                {
                    question: 'Prove that as \\(\\nu \\to \\infty\\), \\(t(\\nu) \\xrightarrow{d} N(0,1)\\).',
                    hint: 'Use the law of large numbers: \\(V/\\nu \\xrightarrow{P} 1\\) where \\(V \\sim \\chi^2(\\nu)\\), then apply Slutsky\'s theorem.',
                    solution: 'Let \\(T = Z / \\sqrt{V/\\nu}\\), where \\(Z \\sim N(0,1)\\) and \\(V \\sim \\chi^2(\\nu)\\). Write \\(V = \\sum_{i=1}^\\nu Z_i^2\\). By the law of large numbers, \\(V/\\nu = \\frac{1}{\\nu}\\sum_{i=1}^\\nu Z_i^2 \\xrightarrow{P} \\mathbb{E}[Z^2] = 1\\). By Slutsky\'s theorem, \\(\\sqrt{V/\\nu} \\xrightarrow{P} 1\\), so \\(T = Z / \\sqrt{V/\\nu} \\xrightarrow{d} Z \\sim N(0,1)\\). This can also be proved by directly verifying that the characteristic function of \\(t(\\nu)\\) converges pointwise to that of \\(N(0,1)\\).'
                }
            ]
        },

        // ========== SECTION 4: Order Statistics ==========
        {
            id: 'ch04-sec04',
            title: 'Order Statistics',
            content: `
                <h2>Order Statistics &#8201;|&#8201; 顺序统计量</h2>
                <p>The statistics obtained by sorting a sample in increasing order are called <strong>order statistics</strong> (顺序统计量). They form the foundation of nonparametric statistics and provide key tools for quantile estimation, extreme value analysis, and more.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.9 (Order Statistics)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n\\) be a random sample from a continuous distribution \\(F\\). Arrange the sample values in increasing order:</p>
                        \\[X_{(1)} \\le X_{(2)} \\le \\cdots \\le X_{(n)},\\]
                        <p>then \\(X_{(k)}\\) is called the \\(k\\)-th <strong>order statistic</strong> (第 \\(k\\) 个顺序统计量). In particular:</p>
                        <ul>
                            <li>\\(X_{(1)} = \\min_i X_i\\): the minimum order statistic</li>
                            <li>\\(X_{(n)} = \\max_i X_i\\): the maximum order statistic</li>
                            <li>\\(R = X_{(n)} - X_{(1)}\\): the sample range (样本极差)</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.6 (Density of a Single Order Statistic)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} F\\), where \\(F\\) has density \\(f\\). Then the density of the \\(k\\)-th order statistic \\(X_{(k)}\\) is</p>
                        \\[f_{X_{(k)}}(x) = \\frac{n!}{(k-1)!(n-k)!} [F(x)]^{k-1} [1-F(x)]^{n-k} f(x).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Consider the event \\(\\{x < X_{(k)} \\le x + dx\\}\\). This requires exactly \\(k-1\\) observations \\(\\le x\\), one in \\((x, x+dx]\\), and \\(n-k\\) observations \\(> x+dx\\). By the multinomial distribution:</p>
                        \\[P(x < X_{(k)} \\le x+dx) \\approx \\frac{n!}{(k-1)! \\cdot 1! \\cdot (n-k)!} [F(x)]^{k-1} \\cdot f(x)dx \\cdot [1-F(x)]^{n-k}.\\]
                        <p>Taking \\(dx \\to 0\\) yields the density formula.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 4.1 (Distributions of Extremes)</div>
                    <div class="env-body">
                        <p>As special cases of Theorem 4.6:</p>
                        <ul>
                            <li>Minimum: \\(f_{X_{(1)}}(x) = n[1-F(x)]^{n-1}f(x)\\)</li>
                            <li>Maximum: \\(f_{X_{(n)}}(x) = n[F(x)]^{n-1}f(x)\\)</li>
                        </ul>
                        <p>The CDF form is more intuitive: \\(F_{X_{(n)}}(x) = [F(x)]^n\\) (all \\(\\le x\\)), and \\(F_{X_{(1)}}(x) = 1 - [1-F(x)]^n\\) (at least one \\(\\le x\\)).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.7 (Joint Density of Order Statistics)</div>
                    <div class="env-body">
                        <p>The joint density of \\((X_{(1)}, \\ldots, X_{(n)})\\) is</p>
                        \\[f_{X_{(1)}, \\ldots, X_{(n)}}(x_1, \\ldots, x_n) = n! \\prod_{i=1}^n f(x_i), \\quad x_1 < x_2 < \\cdots < x_n.\\]
                        <p>The factor \\(n!\\) arises from the number of permutations needed to arrange \\(n\\) indistinguishable samples into an ordered sequence.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.8 (Probability Integral Transform and Order Statistics)</div>
                    <div class="env-body">
                        <p>Let \\(X \\sim F\\) where \\(F\\) is continuous. Set \\(U = F(X)\\); then \\(U \\sim \\text{Uniform}(0,1)\\). Consequently, if \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} F\\), then \\(U_{(k)} = F(X_{(k)})\\) follows a \\(\\text{Beta}(k, n-k+1)\\) distribution.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Since \\(U_i = F(X_i) \\overset{\\text{iid}}{\\sim} U(0,1)\\), applying Theorem 4.6 to the \\(U(0,1)\\) distribution (\\(f(u) = 1\\), \\(F(u) = u\\)) gives</p>
                        \\[f_{U_{(k)}}(u) = \\frac{n!}{(k-1)!(n-k)!} u^{k-1}(1-u)^{n-k} = \\frac{u^{k-1}(1-u)^{(n-k+1)-1}}{B(k, n-k+1)},\\]
                        <p>which is the density of \\(\\text{Beta}(k, n-k+1)\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 4.2 (Asymptotic Distribution of the Sample Median)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} F\\), where \\(F\\) has positive density \\(f(\\xi_p) > 0\\) at \\(\\xi_p = F^{-1}(p)\\). Then the \\(\\lfloor np \\rfloor\\)-th order statistic \\(X_{(\\lfloor np \\rfloor)}\\) satisfies</p>
                        \\[\\sqrt{n}(X_{(\\lfloor np \\rfloor)} - \\xi_p) \\xrightarrow{d} N\\!\\left(0, \\frac{p(1-p)}{[f(\\xi_p)]^2}\\right).\\]
                        <p>For the median (\\(p = 1/2\\)), the asymptotic variance is \\(\\frac{1}{4[f(\\xi_{1/2})]^2 n}\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The asymptotic variance of an order statistic is inversely proportional to the population density at the quantile. Intuitively, if the density is "steep" (large) at the quantile, a small shift in position causes a significant change in probability, making the quantile estimate more precise. Conversely, estimating a quantile where the density is flat (small) is much harder.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="order-stats-pdf"></div>
            `,
            visualizations: [
                {
                    id: 'order-stats-pdf',
                    title: 'Interactive: Density of Order Statistics (顺序统计量的密度)',
                    description: 'Choose the sample size and order k to observe the theoretical density of X_(k) and compare with a simulation histogram',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400, scale: 50,
                            originX: 60, originY: 340
                        });

                        var n = 10;
                        var k = 1;
                        var simulated = [];
                        var nSim = 0;

                        // U(0,1) population for simplicity
                        function popPDF(x) { return (x >= 0 && x <= 1) ? 1 : 0; }
                        function popCDF(x) { return x < 0 ? 0 : (x > 1 ? 1 : x); }

                        function orderStatPDF(x) {
                            if (x <= 0 || x >= 1) return 0;
                            var Fx = popCDF(x);
                            var fx = popPDF(x);
                            // n! / (k-1)!(n-k)! * F^(k-1) * (1-F)^(n-k) * f
                            var logCoeff = VizEngine.lgamma(n + 1) - VizEngine.lgamma(k) - VizEngine.lgamma(n - k + 1);
                            return Math.exp(logCoeff + (k - 1) * Math.log(Fx) + (n - k) * Math.log(1 - Fx)) * fx;
                        }

                        // Beta(k, n-k+1) PDF for comparison
                        function betaPDF(x) {
                            return VizEngine.betaPDF(x, k, n - k + 1);
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // axes
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(60, 340); ctx.lineTo(540, 340); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(60, 340); ctx.lineTo(60, 20); ctx.stroke();

                            var xRange = 1.2;
                            var xScale = 460 / xRange;
                            var yMax = Math.max(5, n * 0.5);
                            var yScale = 300 / yMax;

                            // x labels
                            ctx.fillStyle = viz.colors.text; ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            for (var x = 0; x <= 1; x += 0.2) {
                                var sx = 60 + x * xScale;
                                ctx.fillText(x.toFixed(1), sx, 344);
                                ctx.strokeStyle = viz.colors.grid; ctx.lineWidth = 0.5;
                                ctx.beginPath(); ctx.moveTo(sx, 20); ctx.lineTo(sx, 340); ctx.stroke();
                            }

                            // theoretical density (Beta distribution)
                            ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;
                            for (var i = 0; i <= 300; i++) {
                                var xv = 0.001 + 0.998 * i / 300;
                                var yv = betaPDF(xv);
                                if (!isFinite(yv) || yv > yMax * 2) { started = false; continue; }
                                var px = 60 + xv * xScale;
                                var py = 340 - Math.min(yv, yMax) * yScale;
                                if (!started) { ctx.moveTo(px, py); started = true; }
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // shade under
                            ctx.fillStyle = viz.colors.orange + '1a';
                            ctx.beginPath();
                            ctx.moveTo(60, 340);
                            for (var i2 = 0; i2 <= 300; i2++) {
                                var xv2 = 0.001 + 0.998 * i2 / 300;
                                var yv2 = betaPDF(xv2);
                                if (!isFinite(yv2)) yv2 = 0;
                                var px2 = 60 + xv2 * xScale;
                                var py2 = 340 - Math.min(yv2, yMax) * yScale;
                                ctx.lineTo(px2, py2);
                            }
                            ctx.lineTo(60 + 0.999 * xScale, 340);
                            ctx.closePath(); ctx.fill();

                            // simulated histogram
                            if (simulated.length > 0) {
                                var binW = 0.03;
                                var bins = {};
                                for (var j = 0; j < simulated.length; j++) {
                                    var bi = Math.floor(simulated[j] / binW);
                                    bins[bi] = (bins[bi] || 0) + 1;
                                }
                                for (var bk in bins) {
                                    var kk = parseInt(bk);
                                    if (kk < 0) continue;
                                    var h = bins[bk] / (simulated.length * binW);
                                    var bx = 60 + kk * binW * xScale;
                                    var bw = binW * xScale;
                                    var bh = Math.min(h, yMax) * yScale;
                                    ctx.fillStyle = viz.colors.blue + '55';
                                    ctx.fillRect(bx, 340 - bh, bw, bh);
                                }
                            }

                            // expected value line
                            var expVal = k / (n + 1);
                            ctx.strokeStyle = viz.colors.green; ctx.lineWidth = 1;
                            ctx.setLineDash([3, 3]);
                            var expPx = 60 + expVal * xScale;
                            ctx.beginPath(); ctx.moveTo(expPx, 30); ctx.lineTo(expPx, 340); ctx.stroke();
                            ctx.setLineDash([]);

                            // info
                            viz.screenText('X_(' + k + ') from U(0,1), n = ' + n, 300, 16, viz.colors.white, 13, 'center');
                            viz.screenText('Theory: Beta(' + k + ', ' + (n - k + 1) + ')', 400, 36, viz.colors.orange, 11, 'center');
                            viz.screenText('E[X_(' + k + ')] = ' + expVal.toFixed(3), 160, 36, viz.colors.green, 11, 'center');
                            if (simulated.length > 0) {
                                viz.screenText('Simulated: ' + simulated.length, 300, 52, viz.colors.blue, 11, 'center');
                            }
                        }

                        var nSlider = VizEngine.createSlider(controls, 'n =', 2, 30, 10, 1, function(val) {
                            n = Math.round(val);
                            if (k > n) k = n;
                            simulated = []; nSim = 0; draw();
                        });

                        var kSlider = VizEngine.createSlider(controls, 'k =', 1, 30, 1, 1, function(val) {
                            k = Math.min(Math.round(val), n);
                            simulated = []; nSim = 0; draw();
                        });

                        VizEngine.createButton(controls, 'Simulate 500', function() {
                            for (var j = 0; j < 500; j++) {
                                // generate n uniform samples and take k-th order stat
                                var samp = [];
                                for (var ii = 0; ii < n; ii++) samp.push(Math.random());
                                samp.sort(function(a, b) { return a - b; });
                                simulated.push(samp[k - 1]);
                            }
                            nSim += 500;
                            draw();
                        });

                        VizEngine.createButton(controls, 'k = min', function() { k = 1; simulated = []; nSim = 0; draw(); });
                        VizEngine.createButton(controls, 'k = median', function() { k = Math.ceil(n / 2); simulated = []; nSim = 0; draw(); });
                        VizEngine.createButton(controls, 'k = max', function() { k = n; simulated = []; nSim = 0; draw(); });
                        VizEngine.createButton(controls, 'Reset', function() { simulated = []; nSim = 0; draw(); });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} U(0, \\theta)\\). Find the density of \\(X_{(n)}\\) and \\(\\mathbb{E}[X_{(n)}]\\), and explain how to use \\(X_{(n)}\\) to estimate \\(\\theta\\).',
                    hint: '\\(F(x) = x/\\theta\\) for \\(0 \\le x \\le \\theta\\). Substitute into the density formula for the maximum order statistic.',
                    solution: '\\(F_{X_{(n)}}(x) = (x/\\theta)^n\\) for \\(0 \\le x \\le \\theta\\). The density is \\(f_{X_{(n)}}(x) = \\frac{n x^{n-1}}{\\theta^n}\\). Then \\(\\mathbb{E}[X_{(n)}] = \\int_0^\\theta \\frac{n x^n}{\\theta^n} dx = \\frac{n}{n+1}\\theta\\). So \\(X_{(n)}\\) is biased (systematically underestimates \\(\\theta\\)), and the unbiased estimator is \\(\\hat{\\theta} = \\frac{n+1}{n}X_{(n)}\\). However, note that \\(X_{(n)}\\) itself is the maximum likelihood estimator (MLE) of \\(\\theta\\). Despite the bias, its mean squared error \\(\\text{MSE}(X_{(n)}) = \\frac{2\\theta^2}{(n+1)(n+2)}\\) converges to zero at rate \\(O(1/n^2)\\), faster than the typical \\(O(1/n)\\) rate.'
                },
                {
                    question: 'Let \\(U_1, \\ldots, U_n \\overset{\\text{iid}}{\\sim} U(0,1)\\). Prove that the sample range \\(R = U_{(n)} - U_{(1)}\\) has density \\(f_R(r) = n(n-1)r^{n-2}(1-r)\\) for \\(0 < r < 1\\).',
                    hint: 'First find the joint density of \\((U_{(1)}, U_{(n)})\\), then apply the change of variables \\((U_{(1)}, R) = (U_{(1)}, U_{(n)} - U_{(1)})\\), and integrate over \\(U_{(1)}\\).',
                    solution: 'By an extension of Theorem 4.6, the joint density of \\((U_{(1)}, U_{(n)})\\) is \\(f(u, v) = n(n-1)(v-u)^{n-2}\\) for \\(0 < u < v < 1\\). Let \\(s = u\\) and \\(r = v - u\\); the Jacobian is 1. The joint density becomes \\(g(s, r) = n(n-1)r^{n-2}\\) over the region \\(0 < s < 1-r\\), \\(0 < r < 1\\). Integrating over \\(s\\): \\(f_R(r) = \\int_0^{1-r} n(n-1)r^{n-2} ds = n(n-1)r^{n-2}(1-r)\\).'
                },
                {
                    question: 'Using the probability integral transform and properties of the Beta distribution, prove that for \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} F\\) (\\(F\\) continuous), \\(\\mathbb{E}[X_{(k)}]\\) can be expressed as \\(\\mathbb{E}[X_{(k)}] = \\int_0^1 F^{-1}(u) \\cdot \\frac{u^{k-1}(1-u)^{n-k}}{B(k, n-k+1)} du\\).',
                    hint: 'Use \\(U_{(k)} = F(X_{(k)}) \\sim \\text{Beta}(k, n-k+1)\\) and \\(X_{(k)} = F^{-1}(U_{(k)})\\).',
                    solution: 'By the probability integral transform, \\(U_i = F(X_i) \\overset{\\text{iid}}{\\sim} U(0,1)\\), so \\(U_{(k)} = F(X_{(k)})\\), i.e., \\(X_{(k)} = F^{-1}(U_{(k)})\\). By Theorem 4.8, \\(U_{(k)} \\sim \\text{Beta}(k, n-k+1)\\). Therefore \\(\\mathbb{E}[X_{(k)}] = \\mathbb{E}[F^{-1}(U_{(k)})] = \\int_0^1 F^{-1}(u) \\cdot \\frac{u^{k-1}(1-u)^{n-k}}{B(k, n-k+1)} du\\). This formula reduces the expected value of an order statistic from any continuous distribution to a one-dimensional integral, which is very useful in theoretical analysis.'
                }
            ]
        }
    ]
});

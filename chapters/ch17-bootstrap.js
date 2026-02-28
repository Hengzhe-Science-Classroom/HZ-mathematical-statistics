window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch17',
    number: 17,
    title: 'Bootstrap & Resampling Methods',
    subtitle: 'Bootstrap & Resampling Methods',
    sections: [
        // === Section 1: Bootstrap Principle ===
        {
            id: 'ch17-sec01',
            title: 'The Bootstrap Principle',
            content: `
 <h2>The Bootstrap Principle</h2>

 <p>The bootstrap is one of the most important computational methods in modern statistics, introduced by Bradley Efron in 1979. Its core idea is remarkably simple: <strong>replace the unknown population distribution \\(F\\) with the empirical distribution \\(\\hat{F}_n\\)</strong>, and approximate the sampling distribution of a statistic through resampling.</p>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Bootstrap World vs. Real World)</div>
                    <div class="env-body">
 <p>In the <strong>real world</strong>, we draw a sample \\(X_1, \\ldots, X_n\\) from an unknown distribution \\(F\\), then compute the statistic \\(\\hat{\\theta}_n = g(X_1, \\ldots, X_n)\\). We wish to know the sampling distribution of \\(\\hat{\\theta}_n\\), but \\(F\\) is unknown.</p>
                        <p>In the <strong>bootstrap world</strong>, the empirical distribution \\(\\hat{F}_n\\) plays the role of \\(F\\). We repeatedly resample from \\(\\hat{F}_n\\) (i.e., sample <strong>with replacement</strong> from the original data), obtaining bootstrap samples \\(X_1^*, \\ldots, X_n^*\\), and compute \\(\\hat{\\theta}_n^* = g(X_1^*, \\ldots, X_n^*)\\). Repeating \\(B\\) times, the distribution of the bootstrap statistics approximates the sampling distribution of \\(\\hat{\\theta}_n\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.1 (Empirical Distribution Function)</div>
                    <div class="env-body">
 <p>Let \\(X_1, \\ldots, X_n\\) be a random sample from distribution \\(F\\). The <strong>empirical distribution function</strong> is defined as</p>
                        \\[\\hat{F}_n(x) = \\frac{1}{n} \\sum_{i=1}^{n} \\mathbf{1}(X_i \\le x).\\]
                        <p>By the Glivenko–Cantelli theorem, \\(\\sup_x |\\hat{F}_n(x) - F(x)| \\xrightarrow{\\text{a.s.}} 0\\), i.e., \\(\\hat{F}_n\\) converges uniformly to \\(F\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.2 (Nonparametric Bootstrap)</div>
                    <div class="env-body">
 <p>Let \\(\\mathbf{X} = (X_1, \\ldots, X_n)\\) be the observed data and \\(\\hat{\\theta}_n = T(\\mathbf{X})\\) the statistic of interest. The <strong>nonparametric bootstrap</strong> (Bootstrap) proceeds as follows:</p>
                        <p><strong>Step 1.</strong> Draw \\(n\\) observations <strong>with replacement</strong> from \\(\\{X_1, \\ldots, X_n\\}\\) to obtain the bootstrap sample \\(\\mathbf{X}^* = (X_1^*, \\ldots, X_n^*)\\).</p>
                        <p><strong>Step 2.</strong> Compute the bootstrap statistic \\(\\hat{\\theta}_n^* = T(\\mathbf{X}^*)\\).</p>
                        <p><strong>Step 3.</strong> Repeat Steps 1–2 a total of \\(B\\) times to obtain \\(\\hat{\\theta}_n^{*(1)}, \\ldots, \\hat{\\theta}_n^{*(B)}\\).</p>
                        <p>The empirical distribution of these \\(B\\) values is the bootstrap approximation to the distribution of \\(\\hat{\\theta}_n\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.3 (Parametric Bootstrap)</div>
                    <div class="env-body">
                        <p>If the distribution family \\(\\{F_{\\theta} : \\theta \\in \\Theta\\}\\) is known, first estimate the parameter \\(\\hat{\\theta}\\) from the data, then generate bootstrap samples from \\(F_{\\hat{\\theta}}\\).</p>
                        <p><strong>Step 1.</strong> Generate \\(X_1^*, \\ldots, X_n^* \\sim F_{\\hat{\\theta}}\\) from the fitted model \\(F_{\\hat{\\theta}}\\).</p>
                        <p><strong>Step 2.</strong> Compute \\(\\hat{\\theta}^* = T(X_1^*, \\ldots, X_n^*)\\).</p>
                        <p><strong>Step 3.</strong> Repeat \\(B\\) times.</p>
 <p>The parametric bootstrap (Bootstrap) is more efficient when the model is correctly specified, but may introduce bias when the model is misspecified.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.4 (Bootstrap Consistency)</div>
                    <div class="env-body">
                        <p>Let the distribution of \\(T_n = \\sqrt{n}(\\hat{\\theta}_n - \\theta)\\) converge to some continuous distribution. Under suitable regularity conditions, the bootstrap distribution</p>
                        \\[T_n^* = \\sqrt{n}(\\hat{\\theta}_n^* - \\hat{\\theta}_n)\\]
 <p>conditional on the data converges almost surely to the limiting distribution of \\(T_n\\). That is, the bootstrap is <strong>consistent</strong>.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 17.5 (Bootstrap Standard Error of the Mean)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\sim F\\) and \\(\\hat{\\theta} = \\bar{X}\\). The bootstrap standard error is</p>
                        \\[\\text{se}_{\\text{boot}} = \\sqrt{\\frac{1}{B} \\sum_{b=1}^{B} \\left(\\bar{X}^{*(b)} - \\frac{1}{B}\\sum_{b=1}^{B} \\bar{X}^{*(b)}\\right)^2}.\\]
                        <p>As \\(B \\to \\infty\\), \\(\\text{se}_{\\text{boot}} \\to \\hat{\\sigma}/\\sqrt{n}\\) (where \\(\\hat{\\sigma}^2\\) is \\((n-1)/n\\) times the sample variance), which agrees with the classical formula.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="bootstrap-resample-viz"></div>
            `,
            visualizations: [
                {
                    id: 'bootstrap-resample-viz',
 title:'Interactive: Bootstrap Resampling Animation',
                    description: 'Observe the process of sampling with replacement from the original sample and build the bootstrap distribution of the statistic',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 420, scale: 1, originX: 60, originY: 210});
                        var n = 15;
                        var B = 200;
                        var originalData = VizEngine.sampleArray(function() { return VizEngine.randomNormal(5, 2); }, n);
                        originalData.sort(function(a, b) { return a - b; });
                        var bootMeans = [];
                        var currentB = 0;
                        var running = false;
                        var speed = 50;

 var bSlider = VizEngine.createSlider(controls,'Bootstrap Replicates BB', 50, 500, B, 50, function(v) { B = Math.round(v); });
 var speedSlider = VizEngine.createSlider(controls,'Speed', 1, 100, speed, 1, function(v) { speed = Math.round(v); });

                        VizEngine.createButton(controls, 'Start Bootstrap', function() {
                            bootMeans = [];
                            currentB = 0;
                            running = true;
                        });
                        VizEngine.createButton(controls, 'Reset', function() {
                            running = false;
                            bootMeans = [];
                            currentB = 0;
                            originalData = VizEngine.sampleArray(function() { return VizEngine.randomNormal(5, 2); }, n);
                            originalData.sort(function(a, b) { return a - b; });
                            draw(null);
                        });

                        function makeBins(arr, lo, hi, nBins) {
                            var bins = [];
                            var w = (hi - lo) / nBins;
                            for (var i = 0; i < nBins; i++) {
                                bins.push({x: lo + i * w, width: w, height: 0});
                            }
                            for (var j = 0; j < arr.length; j++) {
                                var idx = Math.floor((arr[j] - lo) / w);
                                if (idx >= 0 && idx < nBins) bins[idx].height++;
                            }
                            var maxH = 0;
                            for (var k = 0; k < bins.length; k++) {
                                if (bins[k].height > maxH) maxH = bins[k].height;
                            }
                            if (maxH > 0) {
                                for (var m = 0; m < bins.length; m++) {
                                    bins[m].height = bins[m].height / maxH * 160;
                                }
                            }
                            return bins;
                        }

                        function draw(currentSample) {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Original Data (n=' + n + ')', 20, 10);

                            // Draw original data as dots
                            var dataMin = 0, dataMax = 10;
                            var xScale = 460 / (dataMax - dataMin);
                            for (var i = 0; i < originalData.length; i++) {
                                var dx = 60 + (originalData[i] - dataMin) * xScale;
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath(); ctx.arc(dx, 50, 5, 0, Math.PI * 2); ctx.fill();
                            }
                            // axis line
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(60, 65); ctx.lineTo(520, 65); ctx.stroke();

                            // Original mean
                            var origMean = VizEngine.mean(originalData);
                            var origMeanX = 60 + (origMean - dataMin) * xScale;
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(origMeanX, 35); ctx.lineTo(origMeanX, 70); ctx.stroke();
                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('x\u0304 = ' + origMean.toFixed(2), origMeanX, 78);

                            // Current bootstrap sample
                            if (currentSample) {
                                ctx.fillStyle = viz.colors.white;
                                ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('Bootstrap Sample #' + currentB, 20, 100);
                                for (var j = 0; j < currentSample.length; j++) {
                                    var bx = 60 + (currentSample[j] - dataMin) * xScale;
                                    ctx.fillStyle = viz.colors.teal + '99';
                                    ctx.beginPath(); ctx.arc(bx, 135, 4, 0, Math.PI * 2); ctx.fill();
                                }
                                var bMean = VizEngine.mean(currentSample);
                                var bMeanX = 60 + (bMean - dataMin) * xScale;
                                ctx.strokeStyle = viz.colors.green;
                                ctx.lineWidth = 2;
                                ctx.beginPath(); ctx.moveTo(bMeanX, 120); ctx.lineTo(bMeanX, 150); ctx.stroke();
                            }

                            // Bootstrap distribution histogram
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Bootstrap Mean Distribution (' + bootMeans.length + '/' + B + ')', 20, 175);

                            if (bootMeans.length > 1) {
                                var histBins = makeBins(bootMeans, 3, 7, 40);
                                var histScale = 160 / 160;
                                for (var k = 0; k < histBins.length; k++) {
                                    var bx1 = 60 + (histBins[k].x - dataMin) * xScale;
                                    var bw = histBins[k].width * xScale;
                                    var bh = histBins[k].height * histScale;
                                    if (bh > 0) {
                                        ctx.fillStyle = viz.colors.purple + '77';
                                        ctx.fillRect(bx1, 400 - bh, bw, bh);
                                        ctx.strokeStyle = viz.colors.purple;
                                        ctx.lineWidth = 0.5;
                                        ctx.strokeRect(bx1, 400 - bh, bw, bh);
                                    }
                                }
                                // Boot mean line
                                var bootGrandMean = VizEngine.mean(bootMeans);
                                var bgmX = 60 + (bootGrandMean - dataMin) * xScale;
                                ctx.strokeStyle = viz.colors.yellow;
                                ctx.lineWidth = 2;
                                ctx.setLineDash([4, 3]);
                                ctx.beginPath(); ctx.moveTo(bgmX, 190); ctx.lineTo(bgmX, 400); ctx.stroke();
                                ctx.setLineDash([]);

                                // Standard error
                                var bootSE = Math.sqrt(VizEngine.variance(bootMeans));
                                ctx.fillStyle = viz.colors.yellow;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('SE_boot = ' + bootSE.toFixed(3), 350, 190);
                            }

                            // axis for histogram
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(60, 400); ctx.lineTo(520, 400); ctx.stroke();
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            for (var t = 0; t <= 10; t += 1) {
                                var tx = 60 + t * xScale;
                                ctx.fillText(t, tx, 412);
                            }
                        }

                        var frameCount = 0;
                        viz.animate(function() {
                            frameCount++;
                            if (running && currentB < B && frameCount % Math.max(1, 101 - speed) === 0) {
                                var bootSample = [];
                                for (var i = 0; i < n; i++) {
                                    bootSample.push(originalData[Math.floor(Math.random() * n)]);
                                }
                                var bm = VizEngine.mean(bootSample);
                                bootMeans.push(bm);
                                currentB++;
                                draw(bootSample);
                                if (currentB >= B) running = false;
                            } else if (!running) {
                                draw(null);
                            }
                        });

                        draw(null);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, \\ldots, X_{20}\\) be a sample. Explain why a bootstrap sample of size 20 drawn with replacement contains approximately \\(1 - (1 - 1/n)^n \\approx 1 - 1/e \\approx 63.2\\%\\) of the distinct original observations.',
                    hint: 'Consider the probability that a fixed observation \\(X_i\\) is not selected in any of the \\(n\\) draws: \\((1 - 1/n)^n\\).',
                    solution: 'For a fixed \\(X_i\\), the probability of not selecting it in a single draw is \\(1 - 1/n\\). Since the \\(n\\) draws are independent, the probability that \\(X_i\\) is never selected is \\((1 - 1/n)^n \\to 1/e \\approx 0.368\\). Therefore the probability that \\(X_i\\) appears at least once is approximately \\(1 - 1/e \\approx 0.632\\). Averaging over all \\(n\\) observations, we expect about \\(63.2\\%\\) of the distinct observations to appear in the bootstrap sample.'
                },
                {
                    question: 'Compare the advantages and disadvantages of the parametric bootstrap and the nonparametric bootstrap. When should one prefer the parametric bootstrap?',
                    hint: 'Consider the role of model assumptions: what happens when the model is correct vs. incorrect?',
                    solution: 'The parametric bootstrap is more efficient (lower variance) when the model is correctly specified, because it exploits the structural information of the distribution family. For example, for normal data the parametric bootstrap can exactly simulate normal sampling. However, if the model is wrong, the parametric bootstrap may yield seriously biased results. The nonparametric bootstrap does not rely on model assumptions and is more robust, but requires larger sample sizes for a good approximation. When there is strong justification for a parametric model (e.g., supported by physical theory), prefer the parametric bootstrap; otherwise use the nonparametric bootstrap.'
                },
                {
                    question: 'Show that as \\(B \\to \\infty\\), the standard deviation of the bootstrap sample means converges to \\(\\hat{\\sigma}/\\sqrt{n}\\), where \\(\\hat{\\sigma}^2 = \\frac{1}{n}\\sum_{i=1}^{n}(X_i - \\bar{X})^2\\).',
                    hint: 'Compute \\(\\operatorname{Var}^*(\\bar{X}^*) = \\operatorname{Var}^*(X_1^*)/n\\), where \\(\\operatorname{Var}^*\\) denotes the variance in the bootstrap world (i.e., with respect to \\(\\hat{F}_n\\)).',
                    solution: 'In the bootstrap world, \\(X_1^*\\) is drawn from \\(\\hat{F}_n\\), i.e., it equals each \\(X_i\\) with probability \\(1/n\\). Thus \\(E^*(X_1^*) = \\bar{X}\\) and \\(\\operatorname{Var}^*(X_1^*) = \\frac{1}{n}\\sum_{i=1}^{n}(X_i - \\bar{X})^2 = \\hat{\\sigma}^2\\). Since the bootstrap sample elements \\(X_i^*\\) are conditionally independent, \\(\\operatorname{Var}^*(\\bar{X}^*) = \\hat{\\sigma}^2/n\\). As \\(B \\to \\infty\\), the empirical variance of the bootstrap sample means converges by the law of large numbers to \\(\\hat{\\sigma}^2/n\\), so the standard deviation converges to \\(\\hat{\\sigma}/\\sqrt{n}\\).'
                }
            ]
        },

        // === Section 2: Bootstrap Confidence Intervals ===
        {
            id: 'ch17-sec02',
            title: 'Bootstrap Confidence Intervals',
            content: `
 <h2>Bootstrap Confidence Intervals</h2>

 <p>One of the most common applications of the bootstrap is constructing confidence intervals. We introduce three main methods: the percentile method, the basic bootstrap method, and the BCa method.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.6 (Percentile Confidence Interval)</div>
                    <div class="env-body">
 <p>Let \\(\\hat{\\theta}^{*(1)}, \\ldots, \\hat{\\theta}^{*(B)}\\) be the \\(B\\) bootstrap statistics. The <strong>percentile method</strong> \\(1 - \\alpha\\) confidence interval is</p>
                        \\[C_{\\text{perc}} = \\left[\\hat{\\theta}^*_{(\\alpha/2)}, \\; \\hat{\\theta}^*_{(1-\\alpha/2)}\\right],\\]
                        <p>where \\(\\hat{\\theta}^*_{(q)}\\) denotes the \\(q\\)-quantile of the bootstrap statistics.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The percentile method is intuitive and simple, but it assumes that the bias and skewness of the bootstrap distribution are negligible. When the estimator has significant bias, the coverage probability of the percentile method may deviate from the nominal level.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.7 (Basic Bootstrap Confidence Interval)</div>
                    <div class="env-body">
 <p>The <strong>basic bootstrap method</strong> (Bootstrap, also called the pivotal bootstrap) approximates the distribution of \\(\\hat{\\theta} - \\theta\\) using the bootstrap pivot \\(\\hat{\\theta}^* - \\hat{\\theta}\\), yielding</p>
                        \\[C_{\\text{basic}} = \\left[2\\hat{\\theta} - \\hat{\\theta}^*_{(1-\\alpha/2)}, \\; 2\\hat{\\theta} - \\hat{\\theta}^*_{(\\alpha/2)}\\right].\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.8 (Motivation for the Basic Bootstrap)</div>
                    <div class="env-body">
                        <p>If there exists a monotone transformation \\(m\\) such that the distribution of \\(m(\\hat{\\theta}) - m(\\theta)\\) does not depend on \\(\\theta\\) (i.e., it is a pivot), then the basic bootstrap method yields an exact confidence interval under that transformation.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.9 (BCa Confidence Interval)</div>
                    <div class="env-body">
 <p>The <strong>BCa method</strong> (bias-corrected and accelerated) applies bias and acceleration corrections to the percentile method. The \\(1 - \\alpha\\) BCa confidence interval is</p>
                        \\[C_{\\text{BCa}} = \\left[\\hat{\\theta}^*_{(\\alpha_1)}, \\; \\hat{\\theta}^*_{(\\alpha_2)}\\right],\\]
                        <p>where</p>
                        \\[\\alpha_1 = \\Phi\\!\\left(\\hat{z}_0 + \\frac{\\hat{z}_0 + z_{\\alpha/2}}{1 - \\hat{a}(\\hat{z}_0 + z_{\\alpha/2})}\\right), \\quad \\alpha_2 = \\Phi\\!\\left(\\hat{z}_0 + \\frac{\\hat{z}_0 + z_{1-\\alpha/2}}{1 - \\hat{a}(\\hat{z}_0 + z_{1-\\alpha/2})}\\right),\\]
                        <p>the bias-correction factor is \\(\\hat{z}_0 = \\Phi^{-1}\\!\\left(\\frac{\\#\\{\\hat{\\theta}^{*(b)} < \\hat{\\theta}\\}}{B}\\right)\\), and the acceleration factor is</p>
                        \\[\\hat{a} = \\frac{\\sum_{i=1}^{n}(\\hat{\\theta}_{(\\cdot)} - \\hat{\\theta}_{(i)})^3}{6\\left[\\sum_{i=1}^{n}(\\hat{\\theta}_{(\\cdot)} - \\hat{\\theta}_{(i)})^2\\right]^{3/2}},\\]
                        <p>where \\(\\hat{\\theta}_{(i)}\\) is the estimate with the \\(i\\)-th observation deleted, and \\(\\hat{\\theta}_{(\\cdot)} = \\frac{1}{n}\\sum_{i}\\hat{\\theta}_{(i)}\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (When Bootstrap Fails)</div>
                    <div class="env-body">
                        <p>The bootstrap is not universally valid. It may fail in the following situations:</p>
                        <p><strong>1. Non-smooth functionals:</strong> For extremes (e.g., \\(X_{(n)} = \\max_i X_i\\)), the convergence rate of the bootstrap distribution is incorrect.</p>
                        <p><strong>2. Heavy-tailed distributions:</strong> When \\(\\operatorname{Var}(X) = \\infty\\), the bootstrap is inconsistent for inference on the mean.</p>
                        <p><strong>3. Non-independent data:</strong> The simple i.i.d. bootstrap is not applicable to dependent data such as time series (variants like the block bootstrap are needed).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 17.10 (Comparison of Three Bootstrap CIs)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_{20} \\sim \\text{Exp}(1)\\) (a right-skewed distribution), and estimate the mean \\(\\theta = 1\\). Use the visualization below to observe the differences among the three methods. For skewed distributions, BCa typically achieves better coverage than the percentile method.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="bootstrap-ci-viz"></div>
            `,
            visualizations: [
                {
                    id: 'bootstrap-ci-viz',
 title:'Interactive: Bootstrap Confidence Interval Comparison',
                    description: 'Compare confidence intervals constructed by the percentile, basic bootstrap, and BCa methods',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 420, scale: 1, originX: 60, originY: 210});
                        var n = 20;
                        var B = 1000;
                        var alpha = 0.05;

 VizEngine.createSlider(controls,'Sample Size nn', 10, 50, n, 5, function(v) { n = Math.round(v); runBootstrap; });
 VizEngine.createSlider(controls,'Confidence Level 1-a', 0.80, 0.99, 1 - alpha, 0.01, function(v) { alpha = +(1 - v).toFixed(2); runBootstrap; });
                        VizEngine.createButton(controls, 'Resample', function() { runBootstrap(); });

                        var data, bootMeans, percCI, basicCI, bcaCI, thetaHat;

                        function runBootstrap() {
                            // Generate exponential data
                            data = VizEngine.sampleArray(function() { return VizEngine.randomExponential(1); }, n);
                            thetaHat = VizEngine.mean(data);

                            bootMeans = [];
                            for (var b = 0; b < B; b++) {
                                var bootSample = [];
                                for (var i = 0; i < n; i++) {
                                    bootSample.push(data[Math.floor(Math.random() * n)]);
                                }
                                bootMeans.push(VizEngine.mean(bootSample));
                            }
                            bootMeans.sort(function(a, b) { return a - b; });

                            // Percentile CI
                            var qLo = VizEngine.quantile(bootMeans, alpha / 2);
                            var qHi = VizEngine.quantile(bootMeans, 1 - alpha / 2);
                            percCI = [qLo, qHi];

                            // Basic CI
                            basicCI = [2 * thetaHat - qHi, 2 * thetaHat - qLo];

                            // BCa CI
                            var countBelow = 0;
                            for (var j = 0; j < bootMeans.length; j++) {
                                if (bootMeans[j] < thetaHat) countBelow++;
                            }
                            var z0Hat = inverseNormalCDF(countBelow / B);

                            // Jackknife for acceleration
                            var jackVals = [];
                            for (var k = 0; k < n; k++) {
                                var jackData = data.slice(0, k).concat(data.slice(k + 1));
                                jackVals.push(VizEngine.mean(jackData));
                            }
                            var jackMean = VizEngine.mean(jackVals);
                            var num = 0, den = 0;
                            for (var m = 0; m < n; m++) {
                                var diff = jackMean - jackVals[m];
                                num += diff * diff * diff;
                                den += diff * diff;
                            }
                            var aHat = den > 0 ? num / (6 * Math.pow(den, 1.5)) : 0;

                            var zAlphaLo = inverseNormalCDF(alpha / 2);
                            var zAlphaHi = inverseNormalCDF(1 - alpha / 2);

                            var a1 = VizEngine.normalCDF(z0Hat + (z0Hat + zAlphaLo) / (1 - aHat * (z0Hat + zAlphaLo)));
                            var a2 = VizEngine.normalCDF(z0Hat + (z0Hat + zAlphaHi) / (1 - aHat * (z0Hat + zAlphaHi)));
                            a1 = Math.max(0.001, Math.min(0.999, a1));
                            a2 = Math.max(0.001, Math.min(0.999, a2));

                            bcaCI = [VizEngine.quantile(bootMeans, a1), VizEngine.quantile(bootMeans, a2)];

                            draw();
                        }

                        function inverseNormalCDF(p) {
                            if (p <= 0) return -4;
                            if (p >= 1) return 4;
                            // Rational approximation (Abramowitz & Stegun 26.2.23)
                            if (p < 0.5) return -inverseNormalCDF(1 - p);
                            var t = Math.sqrt(-2 * Math.log(1 - p));
                            var c0 = 2.515517, c1 = 0.802853, c2 = 0.010328;
                            var d1 = 1.432788, d2 = 0.189269, d3 = 0.001308;
                            return t - (c0 + c1 * t + c2 * t * t) / (1 + d1 * t + d2 * t * t + d3 * t * t * t);
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Histogram of bootstrap means
                            var lo = Math.min.apply(null, bootMeans) - 0.1;
                            var hi = Math.max.apply(null, bootMeans) + 0.1;
                            var nBins = 40;
                            var binW = (hi - lo) / nBins;
                            var bins = [];
                            for (var i = 0; i < nBins; i++) bins.push(0);
                            for (var j = 0; j < bootMeans.length; j++) {
                                var idx = Math.floor((bootMeans[j] - lo) / binW);
                                if (idx >= 0 && idx < nBins) bins[idx]++;
                            }
                            var maxBin = Math.max.apply(null, bins);

                            var plotLeft = 60, plotRight = 520, plotTop = 30, plotBot = 260;
                            var xScale = (plotRight - plotLeft) / (hi - lo);

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Bootstrap Mean Distribution (B=' + B + ', n=' + n + ')', plotLeft, 10);

                            for (var k = 0; k < nBins; k++) {
                                var barX = plotLeft + k * binW * xScale;
                                var barW = binW * xScale;
                                var barH = maxBin > 0 ? (bins[k] / maxBin) * (plotBot - plotTop - 20) : 0;
                                if (barH > 0) {
                                    ctx.fillStyle = viz.colors.blue + '55';
                                    ctx.fillRect(barX, plotBot - barH, barW, barH);
                                    ctx.strokeStyle = viz.colors.blue + '88';
                                    ctx.lineWidth = 0.5;
                                    ctx.strokeRect(barX, plotBot - barH, barW, barH);
                                }
                            }

                            // Axis
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(plotLeft, plotBot); ctx.lineTo(plotRight, plotBot); ctx.stroke();

                            // Tick labels
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            var tickStep = (hi - lo) > 3 ? 0.5 : 0.2;
                            for (var t = Math.ceil(lo / tickStep) * tickStep; t <= hi; t += tickStep) {
                                var tx = plotLeft + (t - lo) * xScale;
                                ctx.fillText(t.toFixed(1), tx, plotBot + 3);
                            }

                            // True value line
                            var trueX = plotLeft + (1 - lo) * xScale;
                            if (trueX > plotLeft && trueX < plotRight) {
                                ctx.strokeStyle = viz.colors.white;
                                ctx.lineWidth = 2;
                                ctx.setLineDash([5, 3]);
                                ctx.beginPath(); ctx.moveTo(trueX, plotTop); ctx.lineTo(trueX, plotBot); ctx.stroke();
                                ctx.setLineDash([]);
                                ctx.fillStyle = viz.colors.white;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('theta=1', trueX, plotTop - 2);
                            }

                            // theta hat line
                            var thetaHatX = plotLeft + (thetaHat - lo) * xScale;
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(thetaHatX, plotTop + 10); ctx.lineTo(thetaHatX, plotBot); ctx.stroke();

                            // CI comparison
                            var ciY = plotBot + 35;
                            var ciData = [
                                {name: 'Percentile', ci: percCI, color: viz.colors.teal},
                                {name: 'Basic', ci: basicCI, color: viz.colors.orange},
                                {name: 'BCa', ci: bcaCI, color: viz.colors.purple}
                            ];

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('CI Comparison (1-a = ' + (1 - alpha).toFixed(2) + ')', plotLeft, ciY - 5);

                            for (var c = 0; c < ciData.length; c++) {
                                var cy = ciY + 20 + c * 35;
                                var ci = ciData[c].ci;
                                var col = ciData[c].color;
                                var x1 = plotLeft + (ci[0] - lo) * xScale;
                                var x2 = plotLeft + (ci[1] - lo) * xScale;
                                x1 = Math.max(plotLeft, Math.min(plotRight, x1));
                                x2 = Math.max(plotLeft, Math.min(plotRight, x2));

                                // CI bar
                                ctx.strokeStyle = col;
                                ctx.lineWidth = 3;
                                ctx.beginPath(); ctx.moveTo(x1, cy); ctx.lineTo(x2, cy); ctx.stroke();
                                // Caps
                                ctx.beginPath(); ctx.moveTo(x1, cy - 6); ctx.lineTo(x1, cy + 6); ctx.stroke();
                                ctx.beginPath(); ctx.moveTo(x2, cy - 6); ctx.lineTo(x2, cy + 6); ctx.stroke();

                                // Label
                                ctx.fillStyle = col;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'right';
                                ctx.fillText(ciData[c].name, plotLeft - 5, cy + 4);

                                // Values
                                ctx.textAlign = 'left';
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.fillText('[' + ci[0].toFixed(3) + ', ' + ci[1].toFixed(3) + ']', plotRight + 5, cy + 4);
                            }

                            // True value in CI region
                            var trueXCI = plotLeft + (1 - lo) * xScale;
                            if (trueXCI > plotLeft && trueXCI < plotRight) {
                                ctx.strokeStyle = viz.colors.white + '66';
                                ctx.lineWidth = 1;
                                ctx.setLineDash([3, 3]);
                                ctx.beginPath(); ctx.moveTo(trueXCI, ciY + 15); ctx.lineTo(trueXCI, ciY + 110); ctx.stroke();
                                ctx.setLineDash([]);
                            }
                        }

                        runBootstrap();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Show that when the bootstrap distribution is symmetric about \\(\\hat{\\theta}\\) and unbiased, the percentile method and the basic bootstrap method yield the same confidence interval.',
                    hint: 'Symmetry implies \\(\\hat{\\theta}^*_{(\\alpha/2)} = 2\\hat{\\theta} - \\hat{\\theta}^*_{(1-\\alpha/2)}\\).',
                    solution: 'Assume the bootstrap distribution is symmetric about \\(\\hat{\\theta}\\), so \\(\\hat{\\theta}^*_{(q)} + \\hat{\\theta}^*_{(1-q)} = 2\\hat{\\theta}\\) for all \\(q\\). The percentile method gives \\([\\hat{\\theta}^*_{(\\alpha/2)}, \\hat{\\theta}^*_{(1-\\alpha/2)}]\\). The basic method gives \\([2\\hat{\\theta} - \\hat{\\theta}^*_{(1-\\alpha/2)}, 2\\hat{\\theta} - \\hat{\\theta}^*_{(\\alpha/2)}]\\). By symmetry, \\(2\\hat{\\theta} - \\hat{\\theta}^*_{(1-\\alpha/2)} = \\hat{\\theta}^*_{(\\alpha/2)}\\) and \\(2\\hat{\\theta} - \\hat{\\theta}^*_{(\\alpha/2)} = \\hat{\\theta}^*_{(1-\\alpha/2)}\\), so the two intervals are identical.'
                },
                {
                    question: 'What is the intuitive meaning of the bias-correction factor \\(\\hat{z}_0\\) in the BCa method? What method does BCa reduce to when \\(\\hat{z}_0 = 0\\)?',
                    hint: 'Consider what value \\(\\hat{z}_0\\) takes when exactly half of the bootstrap replicates are less than \\(\\hat{\\theta}\\).',
                    solution: '\\(\\hat{z}_0\\) measures the discrepancy between the median of the bootstrap distribution and \\(\\hat{\\theta}\\). When \\(\\hat{z}_0 = 0\\), exactly half of the bootstrap replicates are less than \\(\\hat{\\theta}\\) (i.e., the bootstrap median equals \\(\\hat{\\theta}\\)), meaning there is no bias. If simultaneously \\(\\hat{a} = 0\\) (no acceleration), then \\(\\alpha_1 = \\Phi(z_{\\alpha/2}) = \\alpha/2\\) and \\(\\alpha_2 = 1 - \\alpha/2\\), so BCa reduces to the percentile method.'
                },
                {
                    question: 'Explain why the bootstrap is inconsistent for inference on the sample maximum \\(X_{(n)}\\).',
                    hint: 'Consider whether the true limiting distribution of \\(n(\\theta - X_{(n)})\\) and the bootstrap version \\(n(X_{(n)} - X^*_{(n)})\\) agree (use the uniform distribution as an example).',
                    solution: 'Let \\(X_1, \\ldots, X_n \\sim \\text{Unif}(0, \\theta)\\). In the real world, \\(n(\\theta - X_{(n)}) \\xrightarrow{d} \\text{Exp}(1/\\theta)\\) at rate \\(n\\). But in the bootstrap world, \\(X^*_{(n)} = X_{(n)}\\) with high probability (as long as at least one draw selects the maximum observation). Specifically, \\(P^*(X^*_{(n)} = X_{(n)}) = 1 - (1-1/n)^n \\to 1 - 1/e\\), so \\(n(X_{(n)} - X^*_{(n)})\\) has a point mass of approximately \\(63\\%\\) at 0, which does not match the continuous \\(\\text{Exp}(1/\\theta)\\) distribution. This is because the maximum is a non-smooth functional.'
                }
            ]
        },

        // === Section 3: Bootstrap Hypothesis Testing ===
        {
            id: 'ch17-sec03',
            title: 'Bootstrap Hypothesis Testing',
            content: `
 <h2>Bootstrap Hypothesis Testing</h2>

 <p>The bootstrap is useful not only for estimation and confidence intervals, but also for hypothesis testing. The core idea is to construct the null distribution of the test statistic via resampling.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.11 (Bootstrap p-value)</div>
                    <div class="env-body">
                        <p>Let the observed test statistic be \\(T_{\\text{obs}}\\). Under the null hypothesis \\(H_0\\), generate \\(T^{*(1)}, \\ldots, T^{*(B)}\\) via the bootstrap. The <strong>bootstrap p-value</strong> is defined as</p>
                        \\[p_{\\text{boot}} = \\frac{1}{B} \\sum_{b=1}^{B} \\mathbf{1}\\!\\left(T^{*(b)} \\ge T_{\\text{obs}}\\right).\\]
                        <p>(For a two-sided test, use \\(|T^{*(b)}| \\ge |T_{\\text{obs}}|\\).)</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Bootstrap Under the Null)</div>
                    <div class="env-body">
                        <p>When performing a bootstrap hypothesis test, it is crucial to resample <strong>under the null hypothesis</strong>. For example, when testing \\(H_0: \\mu = \\mu_0\\), one should center the data as \\(Y_i = X_i - \\bar{X} + \\mu_0\\), and then bootstrap from \\(Y_1, \\ldots, Y_n\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.12 (Permutation Test)</div>
                    <div class="env-body">
                        <p>Consider the two-sample problem: \\(X_1, \\ldots, X_m \\sim F\\), \\(Y_1, \\ldots, Y_n \\sim G\\), testing \\(H_0: F = G\\).</p>
 <p>The <strong>permutation test</strong> proceeds as follows:</p>
                        <p><strong>Step 1.</strong> Compute the observed statistic \\(T_{\\text{obs}}\\) (e.g., the difference of group means \\(\\bar{X} - \\bar{Y}\\)).</p>
                        <p><strong>Step 2.</strong> Pool all \\(m + n\\) observations and randomly split them into groups of size \\(m\\) and \\(n\\).</p>
                        <p><strong>Step 3.</strong> Compute the statistic \\(T^{*(b)}\\) for each permutation.</p>
                        <p><strong>Step 4.</strong> The p-value is \\(\\frac{1}{B}\\sum_{b=1}^{B} \\mathbf{1}(|T^{*(b)}| \\ge |T_{\\text{obs}}|)\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.13 (Exactness of the Permutation Test)</div>
                    <div class="env-body">
                        <p>Under \\(H_0: F = G\\), if all \\(\\binom{m+n}{m}\\) permutations are used, the permutation test is an <strong>exact test</strong>, i.e., for any \\(\\alpha\\), its true significance level is exactly (or at most) \\(\\alpha\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Under \\(H_0\\), all \\(N = m + n\\) observations come from the same distribution, so every permutation of the data is equally likely. The test statistic evaluated over all \\(\\binom{N}{m}\\) possible splits constitutes its exact null distribution. The p-value equals the proportion of the null distribution that is at least as extreme as the observed value. By symmetry, the test level is exactly \\(\\alpha\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 17.14 (Bootstrap Two-Sample Test)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_{15} \\sim N(\\mu_1, 1)\\) and \\(Y_1, \\ldots, Y_{15} \\sim N(\\mu_2, 1)\\). Test \\(H_0: \\mu_1 = \\mu_2\\). Use the visualization below, adjusting \\(\\mu_2\\) to observe how the p-value changes. When \\(\\mu_1 = \\mu_2\\), the p-value should be approximately uniformly distributed on \\([0,1]\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="bootstrap-test-viz"></div>
            `,
            visualizations: [
                {
                    id: 'bootstrap-test-viz',
 title:'Interactive: Bootstrap / Permutation Test',
                    description: 'Construct the null distribution of the test statistic via resampling and compute the p-value',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 420, scale: 1, originX: 60, originY: 210});
                        var m = 15, nY = 15;
                        var mu1 = 0, mu2 = 0;
                        var B = 2000;
                        var testType = 'permutation';

                        VizEngine.createSlider(controls, 'mu2 - mu1', 0, 2, mu2, 0.1, function(v) { mu2 = v; runTest(); });
                        VizEngine.createButton(controls, 'Permutation Test', function() { testType = 'permutation'; runTest(); });
                        VizEngine.createButton(controls, 'Bootstrap Test', function() { testType = 'bootstrap'; runTest(); });
                        VizEngine.createButton(controls, 'Resample', function() { runTest(); });

                        var dataX, dataY, Tobs, Tboot, pval;

                        function runTest() {
                            dataX = VizEngine.sampleArray(function() { return VizEngine.randomNormal(mu1, 1); }, m);
                            dataY = VizEngine.sampleArray(function() { return VizEngine.randomNormal(mu1 + mu2, 1); }, nY);
                            Tobs = VizEngine.mean(dataX) - VizEngine.mean(dataY);
                            Tboot = [];

                            if (testType === 'permutation') {
                                var pooled = dataX.concat(dataY);
                                for (var b = 0; b < B; b++) {
                                    // Shuffle
                                    var shuffled = pooled.slice();
                                    for (var i = shuffled.length - 1; i > 0; i--) {
                                        var j = Math.floor(Math.random() * (i + 1));
                                        var tmp = shuffled[i]; shuffled[i] = shuffled[j]; shuffled[j] = tmp;
                                    }
                                    var permX = shuffled.slice(0, m);
                                    var permY = shuffled.slice(m);
                                    Tboot.push(VizEngine.mean(permX) - VizEngine.mean(permY));
                                }
                            } else {
                                // Bootstrap under H0: center both groups
                                var pooled2 = dataX.concat(dataY);
                                var pooledMean = VizEngine.mean(pooled2);
                                var centeredX = dataX.map(function(x) { return x - VizEngine.mean(dataX) + pooledMean; });
                                var centeredY = dataY.map(function(y) { return y - VizEngine.mean(dataY) + pooledMean; });
                                for (var b2 = 0; b2 < B; b2++) {
                                    var bx = [];
                                    for (var i2 = 0; i2 < m; i2++) bx.push(centeredX[Math.floor(Math.random() * m)]);
                                    var by = [];
                                    for (var j2 = 0; j2 < nY; j2++) by.push(centeredY[Math.floor(Math.random() * nY)]);
                                    Tboot.push(VizEngine.mean(bx) - VizEngine.mean(by));
                                }
                            }

                            // Two-sided p-value
                            var count = 0;
                            for (var k = 0; k < Tboot.length; k++) {
                                if (Math.abs(Tboot[k]) >= Math.abs(Tobs)) count++;
                            }
                            pval = count / B;
                            draw();
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            var titleStr = testType === 'permutation' ? 'Permutation Test' : 'Bootstrap Test';
                            ctx.fillText(titleStr + ': H0: mu1 = mu2', 60, 8);

                            // Data points
                            var plotL = 60, plotR = 520, dotY1 = 50, dotY2 = 80;
                            var allData = dataX.concat(dataY);
                            var dMin = Math.min.apply(null, allData) - 0.5;
                            var dMax = Math.max.apply(null, allData) + 0.5;
                            var dScale = (plotR - plotL) / (dMax - dMin);

                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('X:', plotL - 5, dotY1 + 4);
                            for (var i = 0; i < dataX.length; i++) {
                                var dx = plotL + (dataX[i] - dMin) * dScale;
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath(); ctx.arc(dx, dotY1, 4, 0, Math.PI * 2); ctx.fill();
                            }
                            ctx.fillStyle = viz.colors.orange;
                            ctx.textAlign = 'right';
                            ctx.fillText('Y:', plotL - 5, dotY2 + 4);
                            for (var j = 0; j < dataY.length; j++) {
                                var dy = plotL + (dataY[j] - dMin) * dScale;
                                ctx.fillStyle = viz.colors.orange;
                                ctx.beginPath(); ctx.arc(dy, dotY2, 4, 0, Math.PI * 2); ctx.fill();
                            }

                            // Null distribution histogram
                            var histTop = 120, histBot = 370;
                            Tboot.sort(function(a, b) { return a - b; });
                            var tMin = Math.min(Tboot[0], Tobs) - 0.3;
                            var tMax = Math.max(Tboot[Tboot.length - 1], Tobs) + 0.3;
                            var nBins = 50;
                            var binW = (tMax - tMin) / nBins;
                            var bins = [];
                            for (var b = 0; b < nBins; b++) bins.push(0);
                            for (var k = 0; k < Tboot.length; k++) {
                                var idx = Math.floor((Tboot[k] - tMin) / binW);
                                if (idx >= 0 && idx < nBins) bins[idx]++;
                            }
                            var maxBin = Math.max.apply(null, bins);
                            var tScale = (plotR - plotL) / (tMax - tMin);

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Null Distribution of Test Statistic', plotL, histTop - 10);

                            for (var q = 0; q < nBins; q++) {
                                var bx1 = plotL + q * binW * tScale;
                                var bw = binW * tScale;
                                var bh = maxBin > 0 ? (bins[q] / maxBin) * (histBot - histTop - 10) : 0;

                                // Color bins in rejection region
                                var binCenter = tMin + (q + 0.5) * binW;
                                var inReject = Math.abs(binCenter) >= Math.abs(Tobs);

                                if (bh > 0) {
                                    ctx.fillStyle = inReject ? viz.colors.red + '77' : viz.colors.teal + '55';
                                    ctx.fillRect(bx1, histBot - bh, bw, bh);
                                    ctx.strokeStyle = inReject ? viz.colors.red + 'aa' : viz.colors.teal + '88';
                                    ctx.lineWidth = 0.5;
                                    ctx.strokeRect(bx1, histBot - bh, bw, bh);
                                }
                            }

                            // T_obs line
                            var tobsX = plotL + (Tobs - tMin) * tScale;
                            ctx.strokeStyle = viz.colors.yellow;
                            ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(tobsX, histTop); ctx.lineTo(tobsX, histBot); ctx.stroke();
                            ctx.fillStyle = viz.colors.yellow;
                            ctx.font = 'bold 11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('T_obs=' + Tobs.toFixed(3), tobsX, histTop - 2);

                            // Negative mirror
                            var tobsNegX = plotL + (-Tobs - tMin) * tScale;
                            if (tobsNegX > plotL && tobsNegX < plotR) {
                                ctx.strokeStyle = viz.colors.yellow + '66';
                                ctx.lineWidth = 1;
                                ctx.setLineDash([4, 3]);
                                ctx.beginPath(); ctx.moveTo(tobsNegX, histTop); ctx.lineTo(tobsNegX, histBot); ctx.stroke();
                                ctx.setLineDash([]);
                            }

                            // Axis
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(plotL, histBot); ctx.lineTo(plotR, histBot); ctx.stroke();

                            // p-value
                            var pColor = pval < 0.05 ? viz.colors.red : viz.colors.green;
                            ctx.fillStyle = pColor;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('p-value = ' + pval.toFixed(4), plotL, histBot + 15);
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillText(pval < 0.05 ? '(Reject H0 at a=0.05)' : '(Fail to reject H0 at a=0.05)', plotL + 170, histBot + 17);

                            // mu info
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('mu2 - mu1 = ' + mu2.toFixed(1), plotR, histBot + 17);
                        }

                        runTest();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Explain why in a bootstrap hypothesis test one must resample under the null hypothesis, rather than directly from the original data.',
                    hint: 'Consider what the bootstrap resampling is supposed to simulate.',
                    solution: 'The p-value is defined as the probability of observing a statistic at least as extreme as the one observed, assuming H0 is true. If we resample directly from the original data, the bootstrap distribution reflects the true data-generating process rather than the null distribution. For example, when testing H0: mu = 0 but the sample mean is 3, a naive bootstrap would produce a distribution centered at 3, leading to a biased p-value estimate. The correct approach is to center the data to the null value (subtract the sample mean and add mu_0 = 0), then bootstrap, so the resampling distribution reflects the situation under H0.'
                },
                {
                    question: 'What are the main differences between a permutation test and a bootstrap test? Under what circumstances might they give different conclusions?',
                    hint: 'Consider the difference in sampling: permutation reshuffles without replacement, while bootstrap resamples with replacement.',
                    solution: 'The permutation test pools the two groups and reassigns observations without replacement, keeping group sizes fixed. It tests the exact null hypothesis F = G (the two distributions are identical). The bootstrap test constructs the null distribution via sampling with replacement under H0, and can test more specific hypotheses (e.g., mu1 = mu2). When the two groups have different variances but the same mean (H0: mu1 = mu2 but sigma1 != sigma2), the permutation test may be inappropriate (since F != G), while a properly constructed bootstrap test remains valid. Furthermore, for very small samples, the permutation test provides an exact test, whereas the bootstrap is only approximate.'
                },
                {
                    question: 'Suppose you perform a one-sided bootstrap test on \\(n = 100\\) data points with \\(B = 999\\) bootstrap replicates. What values can the p-value take? Why is it typically recommended that \\(B\\) be odd (e.g., 999 rather than 1000)?',
                    hint: 'Consider the resolution of the bootstrap p-value.',
                    solution: 'The bootstrap p-value takes the form k/B (or the corrected form (k+1)/(B+1)), where k = 0, 1, ..., B. Thus the possible values are 0/999, 1/999, ..., 999/999, with a resolution of 1/B. When B = 999 and using the corrected p-value (k+1)/(B+1) = (k+1)/1000, we get p-values in neat thousandths, which are easy to interpret. If B = 1000, the corrected denominator is 1001, producing less "clean" p-values. More importantly, the corrected formula (k+1)/(B+1) ensures the p-value is never exactly 0, which is theoretically more appropriate.'
                }
            ]
        },

        // === Section 4: Jackknife and Cross-Validation ===
        {
            id: 'ch17-sec04',
            title: 'Jackknife and Cross-Validation',
            content: `
 <h2>Jackknife and Cross-Validation</h2>

 <p>The jackknife is a precursor to the bootstrap, developed by Quenouille (1949) and Tukey (1958). It estimates bias and variance by systematically deleting one observation at a time. Cross-validation is the standard tool for evaluating model performance in predictive modeling.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.15 (Jackknife Estimator)</div>
                    <div class="env-body">
                        <p>Let \\(\\hat{\\theta} = T(X_1, \\ldots, X_n)\\) be a statistic. Denote by \\(\\hat{\\theta}_{(i)} = T(X_1, \\ldots, X_{i-1}, X_{i+1}, \\ldots, X_n)\\) the estimate with the \\(i\\)-th observation deleted. Define:</p>
                        <p><strong>Jackknife bias estimate:</strong></p>
                        \\[\\widehat{\\text{Bias}}_{\\text{jack}} = (n-1)\\left(\\hat{\\theta}_{(\\cdot)} - \\hat{\\theta}\\right), \\quad \\hat{\\theta}_{(\\cdot)} = \\frac{1}{n}\\sum_{i=1}^{n} \\hat{\\theta}_{(i)}.\\]
                        <p><strong>Jackknife variance estimate:</strong></p>
                        \\[\\widehat{\\text{Var}}_{\\text{jack}} = \\frac{n-1}{n} \\sum_{i=1}^{n} \\left(\\hat{\\theta}_{(i)} - \\hat{\\theta}_{(\\cdot)}\\right)^2.\\]
                        <p><strong>Bias-corrected jackknife estimate:</strong></p>
                        \\[\\tilde{\\theta}_{\\text{jack}} = \\hat{\\theta} - \\widehat{\\text{Bias}}_{\\text{jack}} = n\\hat{\\theta} - (n-1)\\hat{\\theta}_{(\\cdot)}.\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.16 (Accuracy of Jackknife Bias Correction)</div>
                    <div class="env-body">
                        <p>If the bias of \\(\\hat{\\theta}\\) admits the expansion</p>
                        \\[\\text{Bias}(\\hat{\\theta}) = \\frac{a_1}{n} + \\frac{a_2}{n^2} + \\cdots,\\]
                        <p>then the bias of the jackknife-corrected estimator \\(\\tilde{\\theta}_{\\text{jack}}\\) is \\(O(n^{-2})\\); that is, it eliminates the \\(O(n^{-1})\\) bias term.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p>Write \\(E[\\hat{\\theta}] = \\theta + a_1/n + a_2/n^2 + \\cdots\\). After deleting one observation the sample size is \\(n-1\\), so</p>
                        \\[E[\\hat{\\theta}_{(i)}] = \\theta + \\frac{a_1}{n-1} + \\frac{a_2}{(n-1)^2} + \\cdots.\\]
                        <p>Therefore</p>
                        \\[E[\\tilde{\\theta}_{\\text{jack}}] = nE[\\hat{\\theta}] - (n-1)E[\\hat{\\theta}_{(\\cdot)}] = n\\left(\\theta + \\frac{a_1}{n} + \\frac{a_2}{n^2}\\right) - (n-1)\\left(\\theta + \\frac{a_1}{n-1} + \\frac{a_2}{(n-1)^2}\\right) + \\cdots\\]
                        \\[= \\theta + a_1 + \\frac{a_2}{n} - \\theta - a_1 - \\frac{(n-1)a_2}{(n-1)^2} + \\cdots = \\theta + O(n^{-2}).\\]
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.17 (Jackknife Pseudovalues and Influence)</div>
                    <div class="env-body">
 <p>The <strong>jackknife pseudovalue</strong> for the \\(i\\)-th observation is defined as</p>
                        \\[\\tilde{\\theta}_i = n\\hat{\\theta} - (n-1)\\hat{\\theta}_{(i)}.\\]
 <p>Note that \\(\\tilde{\\theta}_{\\text{jack}} = \\frac{1}{n}\\sum_{i=1}^{n} \\tilde{\\theta}_i\\). The pseudovalue measures the <strong>influence</strong> of the \\(i\\)-th observation on the overall estimate.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.18 (Cross-Validation)</div>
                    <div class="env-body">
 <p>Given data \\(\\mathcal{D} = \\{(x_i, y_i)\\}_{i=1}^{n}\\) and a model \\(\\hat{f}\\), <strong>\\(K\\)-fold cross-validation</strong> (K) proceeds as follows:</p>
                        <p><strong>Step 1.</strong> Randomly partition the data into \\(K\\) roughly equal subsets \\(\\mathcal{D}_1, \\ldots, \\mathcal{D}_K\\).</p>
                        <p><strong>Step 2.</strong> For \\(k = 1, \\ldots, K\\): train the model \\(\\hat{f}^{(-k)}\\) on \\(\\mathcal{D} \\setminus \\mathcal{D}_k\\) and compute the prediction error on \\(\\mathcal{D}_k\\).</p>
                        <p><strong>Step 3.</strong> The cross-validation error is</p>
                        \\[\\text{CV}(K) = \\frac{1}{n} \\sum_{k=1}^{K} \\sum_{i \\in \\mathcal{D}_k} L(y_i, \\hat{f}^{(-k)}(x_i)),\\]
                        <p>where \\(L\\) is the loss function (e.g., squared error \\(L(y, \\hat{y}) = (y - \\hat{y})^2\\)).</p>
 <p>When \\(K = n\\), this is <strong>leave-one-out cross-validation</strong> (LOOCV).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.19 (Relationship Between LOOCV and Jackknife)</div>
                    <div class="env-body">
                        <p>For linear regression models, LOOCV is equivalent to</p>
                        \\[\\text{CV}(n) = \\frac{1}{n} \\sum_{i=1}^{n} \\left(\\frac{y_i - \\hat{y}_i}{1 - h_{ii}}\\right)^2,\\]
                        <p>where \\(h_{ii}\\) is the \\(i\\)-th diagonal element of the hat matrix \\(H = X(X^TX)^{-1}X^T\\). Thus LOOCV can be computed from a single full regression fit without refitting repeatedly.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Connection Between Bootstrap and Jackknife)</div>
                    <div class="env-body">
                        <p>The jackknife can be viewed as a linear approximation to the bootstrap. Specifically, the jackknife variance estimate equals the infinitesimal version of the bootstrap variance estimate (the infinitesimal jackknife). For smooth statistics, the two are asymptotically equivalent. However, for non-smooth statistics (such as the median), the jackknife performs worse than the bootstrap.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="jackknife-influence-viz"></div>

                <div class="viz-placeholder" data-viz="cv-viz"></div>
            `,
            visualizations: [
                {
                    id: 'jackknife-influence-viz',
 title:'Interactive: Jackknife Influence Analysis',
                    description: 'Delete observations one at a time and observe how the estimate changes; identify influential observations',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 400, scale: 1, originX: 60, originY: 200});
                        var n = 15;
                        var data = [];
                        var highlightIdx = -1;

                        function generateData() {
                            data = VizEngine.sampleArray(function() { return VizEngine.randomNormal(5, 1.5); }, n - 1);
                            // Add one potential outlier
                            data.push(5 + 4 * (Math.random() > 0.5 ? 1 : -1));
                            data.sort(function(a, b) { return a - b; });
                        }

 VizEngine.createSlider(controls,'Sample Size nn', 8, 25, n, 1, function(v) { n = Math.round(v); generateData; highlightIdx = -1; draw; });
                        VizEngine.createButton(controls, 'Regenerate', function() { generateData(); highlightIdx = -1; draw(); });

                        generateData();

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            var thetaHat = VizEngine.mean(data);
                            var jackVals = [];
                            for (var i = 0; i < data.length; i++) {
                                var sub = data.slice(0, i).concat(data.slice(i + 1));
                                jackVals.push(VizEngine.mean(sub));
                            }
                            var jackMean = VizEngine.mean(jackVals);
                            var jackBias = (data.length - 1) * (jackMean - thetaHat);
                            var jackVar = 0;
                            for (var j = 0; j < jackVals.length; j++) {
                                jackVar += (jackVals[j] - jackMean) * (jackVals[j] - jackMean);
                            }
                            jackVar *= (data.length - 1) / data.length;
                            var jackSE = Math.sqrt(jackVar);

                            // Pseudovalues
                            var pseudos = [];
                            for (var k = 0; k < data.length; k++) {
                                pseudos.push(data.length * thetaHat - (data.length - 1) * jackVals[k]);
                            }

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Jackknife Influence Analysis (n=' + data.length + ')', 20, 8);

                            // Data points on a number line
                            var plotL = 60, plotR = 530;
                            var dMin = Math.min.apply(null, data) - 1;
                            var dMax = Math.max.apply(null, data) + 1;
                            var dScale = (plotR - plotL) / (dMax - dMin);
                            var dotY = 50;

                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(plotL, dotY + 15); ctx.lineTo(plotR, dotY + 15); ctx.stroke();

                            for (var m = 0; m < data.length; m++) {
                                var dx = plotL + (data[m] - dMin) * dScale;
                                var isHighlight = m === highlightIdx;
                                ctx.fillStyle = isHighlight ? viz.colors.red : viz.colors.blue;
                                ctx.beginPath();
                                ctx.arc(dx, dotY, isHighlight ? 7 : 5, 0, Math.PI * 2);
                                ctx.fill();
                                if (isHighlight) {
                                    ctx.fillStyle = viz.colors.red;
                                    ctx.font = '10px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.fillText('X' + (m + 1), dx, dotY - 14);
                                }
                            }

                            // theta hat line
                            var thetaX = plotL + (thetaHat - dMin) * dScale;
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(thetaX, dotY - 10); ctx.lineTo(thetaX, dotY + 20); ctx.stroke();

                            // Jackknife values bar chart
                            var barTop = 100, barBot = 250;
                            var barW = (plotR - plotL - 20) / data.length;
                            var jMin = Math.min.apply(null, jackVals);
                            var jMax = Math.max.apply(null, jackVals);
                            var jRange = Math.max(jMax - jMin, 0.01);
                            var jMid = (jMin + jMax) / 2;
                            var jScale = (barBot - barTop - 30) / jRange;

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('theta_(i): Mean after deleting i-th obs.', plotL, barTop - 10);

                            // Reference line at theta hat
                            var refY = barBot - (thetaHat - jMin) * jScale;
                            refY = Math.max(barTop + 5, Math.min(barBot - 5, refY));
                            ctx.strokeStyle = viz.colors.orange + '88';
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath(); ctx.moveTo(plotL, refY); ctx.lineTo(plotR, refY); ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('theta=' + thetaHat.toFixed(3), plotR + 2, refY - 8);

                            for (var p = 0; p < data.length; p++) {
                                var bx = plotL + 10 + p * barW;
                                var by = barBot - (jackVals[p] - jMin) * jScale;
                                by = Math.max(barTop + 5, Math.min(barBot - 5, by));
                                var isHL = p === highlightIdx;
                                ctx.fillStyle = isHL ? viz.colors.red : viz.colors.teal;
                                ctx.fillRect(bx, Math.min(by, refY), barW - 2, Math.abs(by - refY));
                                ctx.strokeStyle = isHL ? viz.colors.red : viz.colors.teal + 'aa';
                                ctx.lineWidth = 1;
                                ctx.strokeRect(bx, Math.min(by, refY), barW - 2, Math.abs(by - refY));

                                // Index label
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '9px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(p + 1, bx + barW / 2 - 1, barBot + 5);
                            }

                            // Stats panel
                            var statsY = barBot + 25;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Jackknife Bias Estimate: ' + jackBias.toFixed(5), plotL, statsY);
                            ctx.fillText('Jackknife Std. Error: ' + jackSE.toFixed(4), plotL, statsY + 20);

                            if (highlightIdx >= 0) {
                                ctx.fillStyle = viz.colors.red;
                                ctx.fillText('Delete X' + (highlightIdx + 1) + ' (' + data[highlightIdx].toFixed(2) + '): theta_(i) = ' + jackVals[highlightIdx].toFixed(4) + ', pseudovalue = ' + pseudos[highlightIdx].toFixed(4), plotL, statsY + 40);
                            }

                            // Influence bar
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillText('(Click a data point to select)', plotL + 300, statsY + 40);
                        }

                        // Click handler
                        viz.canvas.addEventListener('click', function(e) {
                            var rect = viz.canvas.getBoundingClientRect();
                            var mx = e.clientX - rect.left;
                            var my = e.clientY - rect.top;
                            var plotL = 60, plotR = 530;
                            var dMin = Math.min.apply(null, data) - 1;
                            var dMax = Math.max.apply(null, data) + 1;
                            var dScale = (plotR - plotL) / (dMax - dMin);
                            var dotY = 50;
                            var best = -1, bestDist = 20;
                            for (var i = 0; i < data.length; i++) {
                                var dx = plotL + (data[i] - dMin) * dScale;
                                var dist = Math.sqrt((mx - dx) * (mx - dx) + (my - dotY) * (my - dotY));
                                if (dist < bestDist) { bestDist = dist; best = i; }
                            }
                            highlightIdx = best;
                            draw();
                        });

                        draw();
                        return viz;
                    }
                },
                {
                    id: 'cv-viz',
 title:'Interactive: K-Fold Cross-Validation',
                    description: 'Visualize K-fold CV data partitioning and prediction errors',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 380, scale: 1, originX: 60, originY: 190});
                        var n = 30;
                        var K = 5;
                        var currentFold = -1;

                        // Generate regression data: y = 2 + 0.5x + noise
                        var dataX = [], dataY = [];
                        function generateRegData() {
                            dataX = []; dataY = [];
                            for (var i = 0; i < n; i++) {
                                var xi = (i / (n - 1)) * 8 - 1;
                                dataX.push(xi);
                                dataY.push(2 + 0.5 * xi + VizEngine.randomNormal(0, 0.8));
                            }
                        }
                        generateRegData();

 VizEngine.createSlider(controls,'K (Folds /)', 2, n, K, 1, function(v) { K = Math.round(v); currentFold = -1; draw; });
                        VizEngine.createButton(controls, 'Regenerate Data', function() { generateRegData(); currentFold = -1; draw(); });
                        VizEngine.createButton(controls, 'Next Fold', function() { currentFold = (currentFold + 1) % K; draw(); });
                        VizEngine.createButton(controls, 'Show All', function() { currentFold = -1; draw(); });

                        function linearFit(xs, ys) {
                            var mx = VizEngine.mean(xs), my = VizEngine.mean(ys);
                            var num = 0, den = 0;
                            for (var i = 0; i < xs.length; i++) {
                                num += (xs[i] - mx) * (ys[i] - my);
                                den += (xs[i] - mx) * (xs[i] - mx);
                            }
                            var slope = den > 0 ? num / den : 0;
                            var intercept = my - slope * mx;
                            return {slope: slope, intercept: intercept};
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Assign folds
                            var foldAssign = [];
                            for (var i = 0; i < n; i++) foldAssign.push(i % K);

                            // Plot setup
                            var plotL = 60, plotR = 380, plotTop = 30, plotBot = 300;
                            var xMin = -2, xMax = 8, yMin = -1, yMax = 7;
                            var xSc = (plotR - plotL) / (xMax - xMin);
                            var ySc = (plotBot - plotTop) / (yMax - yMin);

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            var titleStr = K + '-Fold Cross-Validation';
                            if (K === n) titleStr = 'LOOCV (K=n=' + n + ')';
                            ctx.fillText(titleStr, plotL, 8);

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(plotL, plotBot); ctx.lineTo(plotR, plotBot); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(plotL, plotTop); ctx.lineTo(plotL, plotBot); ctx.stroke();

                            // Fold colors
                            var foldColors = [viz.colors.blue, viz.colors.teal, viz.colors.orange, viz.colors.purple, viz.colors.pink, viz.colors.green, viz.colors.yellow, viz.colors.red];

                            // Draw data points
                            for (var j = 0; j < n; j++) {
                                var px = plotL + (dataX[j] - xMin) * xSc;
                                var py = plotBot - (dataY[j] - yMin) * ySc;
                                var fold = foldAssign[j];
                                var isTest = currentFold >= 0 && fold === currentFold;
                                var col = currentFold < 0 ? foldColors[fold % foldColors.length] : (isTest ? viz.colors.red : viz.colors.blue + '77');
                                ctx.fillStyle = col;
                                ctx.beginPath();
                                ctx.arc(px, py, isTest ? 6 : 4, 0, Math.PI * 2);
                                ctx.fill();
                                if (isTest) {
                                    ctx.strokeStyle = viz.colors.red;
                                    ctx.lineWidth = 2;
                                    ctx.stroke();
                                }
                            }

                            // Fit on training data and show prediction errors for current fold
                            var cvErrors = [];
                            for (var f = 0; f < K; f++) {
                                var trainX = [], trainY = [], testX = [], testY = [];
                                for (var m = 0; m < n; m++) {
                                    if (foldAssign[m] === f) { testX.push(dataX[m]); testY.push(dataY[m]); }
                                    else { trainX.push(dataX[m]); trainY.push(dataY[m]); }
                                }
                                if (trainX.length < 2) continue;
                                var fit = linearFit(trainX, trainY);
                                var foldErr = 0;
                                for (var t = 0; t < testX.length; t++) {
                                    var pred = fit.intercept + fit.slope * testX[t];
                                    foldErr += (testY[t] - pred) * (testY[t] - pred);
                                }
                                cvErrors.push(testX.length > 0 ? foldErr / testX.length : 0);

                                if (f === currentFold) {
                                    // Draw regression line for this fold's training set
                                    var lx1 = xMin, ly1 = fit.intercept + fit.slope * lx1;
                                    var lx2 = xMax, ly2 = fit.intercept + fit.slope * lx2;
                                    ctx.strokeStyle = viz.colors.green;
                                    ctx.lineWidth = 2;
                                    ctx.beginPath();
                                    ctx.moveTo(plotL + (lx1 - xMin) * xSc, plotBot - (ly1 - yMin) * ySc);
                                    ctx.lineTo(plotL + (lx2 - xMin) * xSc, plotBot - (ly2 - yMin) * ySc);
                                    ctx.stroke();

                                    // Draw residuals for test points
                                    for (var t2 = 0; t2 < testX.length; t2++) {
                                        var pred2 = fit.intercept + fit.slope * testX[t2];
                                        var px2 = plotL + (testX[t2] - xMin) * xSc;
                                        var pyObs = plotBot - (testY[t2] - yMin) * ySc;
                                        var pyPred = plotBot - (pred2 - yMin) * ySc;
                                        ctx.strokeStyle = viz.colors.red + 'aa';
                                        ctx.lineWidth = 1.5;
                                        ctx.beginPath(); ctx.moveTo(px2, pyObs); ctx.lineTo(px2, pyPred); ctx.stroke();
                                    }
                                }
                            }

                            // Right panel: CV error per fold
                            var panelL = 400, panelR = 540, panelTop = 50;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 11px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Fold Errors (MSE)', panelL, panelTop - 15);

                            if (cvErrors.length > 0) {
                                var maxErr = Math.max.apply(null, cvErrors);
                                var barH = Math.min(20, 200 / K);
                                for (var e = 0; e < cvErrors.length; e++) {
                                    var ey = panelTop + e * (barH + 2);
                                    var ew = maxErr > 0 ? (cvErrors[e] / maxErr) * (panelR - panelL - 40) : 0;
                                    var eColor = e === currentFold ? viz.colors.red : viz.colors.teal + '88';
                                    ctx.fillStyle = eColor;
                                    ctx.fillRect(panelL, ey, ew, barH - 1);
                                    ctx.fillStyle = viz.colors.text;
                                    ctx.font = '9px -apple-system,sans-serif';
                                    ctx.textAlign = 'left';
                                    ctx.fillText(cvErrors[e].toFixed(3), panelL + ew + 3, ey + barH / 2 + 3);
                                }
                                var totalCV = VizEngine.mean(cvErrors);
                                ctx.fillStyle = viz.colors.yellow;
                                ctx.font = 'bold 12px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                var cvTextY = panelTop + cvErrors.length * (barH + 2) + 10;
                                ctx.fillText('CV = ' + totalCV.toFixed(4), panelL, cvTextY);
                            }

                            // Legend
                            var legY = plotBot + 15;
                            if (currentFold >= 0) {
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath(); ctx.arc(plotL + 5, legY, 4, 0, Math.PI * 2); ctx.fill();
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('Training Set', plotL + 15, legY + 4);

                                ctx.fillStyle = viz.colors.red;
                                ctx.beginPath(); ctx.arc(plotL + 95, legY, 4, 0, Math.PI * 2); ctx.fill();
                                ctx.fillStyle = viz.colors.text;
                                ctx.fillText('Test Fold (fold ' + (currentFold + 1) + ')', plotL + 105, legY + 4);

                                ctx.strokeStyle = viz.colors.green;
                                ctx.lineWidth = 2;
                                ctx.beginPath(); ctx.moveTo(plotL + 240, legY); ctx.lineTo(plotL + 260, legY); ctx.stroke();
                                ctx.fillStyle = viz.colors.text;
                                ctx.fillText('Training Fit', plotL + 265, legY + 4);
                            } else {
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('Each color represents a different fold', plotL, legY + 4);
                            }
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(\\hat{\\theta} = \\bar{X}^2\\) be an estimator of \\(\\mu^2\\) where \\(X_i \\sim N(\\mu, \\sigma^2)\\). Find the bias of \\(\\hat{\\theta}\\) and explain how the jackknife bias correction reduces it.',
                    hint: '\\(E[\\bar{X}^2] = \\mu^2 + \\sigma^2/n\\). The bias is \\(\\sigma^2/n\\), which has the form \\(a_1/n\\).',
                    solution: '\\(E[\\bar{X}^2] = \\operatorname{Var}(\\bar{X}) + (E[\\bar{X}])^2 = \\sigma^2/n + \\mu^2\\). So the bias is \\(\\sigma^2/n\\), which indeed has the \\(O(1/n)\\) form. The jackknife bias estimate is \\((n-1)(\\hat{\\theta}_{(\\cdot)} - \\hat{\\theta})\\). Each \\(\\hat{\\theta}_{(i)} = \\bar{X}_{(i)}^2\\) has expectation \\(\\mu^2 + \\sigma^2/(n-1)\\). Thus the expected jackknife bias estimate is \\((n-1)(\\sigma^2/(n-1) - \\sigma^2/n) = \\sigma^2/n\\), which correctly estimates the bias. After correction, \\(\\tilde{\\theta}_{\\text{jack}} = \\bar{X}^2 - S^2/n\\) (approximately), and the bias is reduced to \\(O(n^{-2})\\).'
                },
                {
                    question: 'Explain why the jackknife variance estimate for the median is inconsistent, while the bootstrap can consistently estimate the variance of the median.',
                    hint: 'Consider the effect of deleting a single observation on the median -- the median is a non-smooth statistic.',
                    solution: 'The median is a non-smooth functional. When one observation is deleted, the sample median can only shift to an adjacent order statistic, so the jackknife values \\(\\hat{\\theta}_{(i)}\\) take only a few distinct values. Specifically, most \\(\\hat{\\theta}_{(i)}\\) equal or are very close to \\(\\hat{\\theta}\\), causing the sum of squared deviations \\((\\hat{\\theta}_{(i)} - \\hat{\\theta}_{(\\cdot)})^2\\) to underestimate the true variance. The multiplicative factor \\((n-1)/n\\) cannot compensate for this step-function effect. The bootstrap, by sampling with replacement, can produce a continuous range of median values and thus better approximates the sampling distribution.'
                },
                {
                    question: 'Discuss the bias-variance tradeoff in the choice of \\(K\\) for K-fold cross-validation. What are the pros and cons of LOOCV (\\(K=n\\)) versus 5-fold CV?',
                    hint: 'Consider the effect of training set size on model bias and the effect of overlap between folds on variance.',
                    solution: 'When K is large (e.g., LOOCV with K=n): the training set size is close to n, so model bias is small (nearly a full-sample fit), but the training sets across folds overlap heavily (sharing n-2 observations), leading to high variance in the CV estimate. When K is small (e.g., 5-fold): the training set has only 4n/5 observations, so bias is slightly larger, but training sets across folds overlap less, yielding lower variance. Additionally, LOOCV requires O(n) model fits (unless shortcuts like the hat matrix formula are available), while 5-fold requires only 5 fits. In practice, K=5 or K=10 usually provides a good bias-variance tradeoff. LOOCV is suitable for small samples or models that can be computed cheaply.'
                }
            ]
        }
    ]
});

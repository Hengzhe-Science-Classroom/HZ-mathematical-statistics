window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch01',
    number: 1,
    title: 'Common Distribution Families',
    subtitle: 'Systematic study of discrete, continuous, and sampling distributions',
    sections: [
        // ===== Section 1: Discrete Distributions =====
        {
            id: 'ch01-sec01',
            title: 'Discrete Distributions',
            content: `
                <h2>Discrete Distributions 离散分布</h2>

                <p>This section systematically introduces the most commonly used discrete distribution families (离散分布族) in statistics. For each distribution, we present its probability mass function (PMF, 概率质量函数), expectation, variance, and moment generating function (MGF, 矩母函数).</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.1 (Bernoulli Distribution)</div>
                    <div class="env-body">
                        <p>A random variable \\(X\\) follows a <strong>Bernoulli distribution</strong>, denoted \\(X \\sim \\operatorname{Bernoulli}(p)\\), if</p>
                        \\[P(X = x) = p^x (1-p)^{1-x}, \quad x \\in \\{0, 1\\}\\]
                        <p>where \\(0 < p < 1\\). Expectation \\(\\mathbb{E}[X] = p\\), variance \\(\\operatorname{Var}(X) = p(1-p)\\), MGF \\(M_X(t) = 1 - p + pe^t\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.2 (Binomial Distribution)</div>
                    <div class="env-body">
                        <p>If \\(X_1, \\ldots, X_n\\) are independent and identically distributed \\(\\operatorname{Bernoulli}(p)\\) random variables, then \\(S_n = \\sum_{i=1}^{n} X_i\\) follows a <strong>binomial distribution</strong> (二项分布), denoted \\(S_n \\sim \\operatorname{Bin}(n, p)\\), with PMF</p>
                        \\[P(S_n = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \quad k = 0, 1, \\ldots, n\\]
                        <p>Expectation \\(\\mathbb{E}[S_n] = np\\), variance \\(\\operatorname{Var}(S_n) = np(1-p)\\), MGF \\(M_{S_n}(t) = (1-p+pe^t)^n\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.3 (Poisson Distribution)</div>
                    <div class="env-body">
                        <p>A random variable \\(X\\) follows a <strong>Poisson distribution</strong>, denoted \\(X \\sim \\operatorname{Poisson}(\\lambda)\\), if</p>
                        \\[P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \quad k = 0, 1, 2, \\ldots\\]
                        <p>where \\(\\lambda > 0\\). Expectation \\(\\mathbb{E}[X] = \\lambda\\), variance \\(\\operatorname{Var}(X) = \\lambda\\), MGF \\(M_X(t) = \\exp\\{\\lambda(e^t - 1)\\}\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The Poisson distribution can be viewed as the limit of the binomial distribution under \\(n \\to \\infty\\), \\(p \\to 0\\), \\(np \\to \\lambda\\). This makes the Poisson distribution especially suitable for describing "rare events" (稀有事件) — in a large number of independent trials, each with a very small success probability, the total number of successes remains finite.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.4 (Geometric Distribution)</div>
                    <div class="env-body">
                        <p>A random variable \\(X\\) follows a <strong>geometric distribution</strong> (几何分布), denoted \\(X \\sim \\operatorname{Geom}(p)\\), if \\(X\\) represents the number of trials needed until the first success:</p>
                        \\[P(X = k) = (1-p)^{k-1} p, \quad k = 1, 2, 3, \\ldots\\]
                        <p>Expectation \\(\\mathbb{E}[X] = 1/p\\), variance \\(\\operatorname{Var}(X) = (1-p)/p^2\\). The geometric distribution is the only discrete distribution possessing the <strong>memoryless property</strong> (无记忆性): \\(P(X > s + t \\mid X > s) = P(X > t)\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.5 (Negative Binomial Distribution)</div>
                    <div class="env-body">
                        <p>A random variable \\(X\\) follows a <strong>negative binomial distribution</strong> (负二项分布), denoted \\(X \\sim \\operatorname{NegBin}(r, p)\\), if \\(X\\) represents the total number of trials needed to achieve the \\(r\\)-th success:</p>
                        \\[P(X = k) = \\binom{k-1}{r-1} p^r (1-p)^{k-r}, \quad k = r, r+1, r+2, \\ldots\\]
                        <p>Expectation \\(\\mathbb{E}[X] = r/p\\), variance \\(\\operatorname{Var}(X) = r(1-p)/p^2\\). When \\(r=1\\), it reduces to the geometric distribution.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.6 (Hypergeometric Distribution)</div>
                    <div class="env-body">
                        <p>From a population of \\(N\\) elements (of which \\(K\\) are "successes"), <strong>sampling without replacement</strong> (不放回抽样) \\(n\\) items, the number of successes \\(X\\) follows a <strong>hypergeometric distribution</strong> (超几何分布):</p>
                        \\[P(X = k) = \\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}, \quad k = \\max(0, n+K-N), \\ldots, \\min(n, K)\\]
                        <p>Expectation \\(\\mathbb{E}[X] = nK/N\\), variance \\(\\operatorname{Var}(X) = n \\frac{K}{N} \\frac{N-K}{N} \\frac{N-n}{N-1}\\). When \\(N \\to \\infty\\) and \\(K/N \\to p\\), the hypergeometric distribution converges to \\(\\operatorname{Bin}(n, p)\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The difference between the hypergeometric and binomial distributions lies in whether sampling is done with replacement: sampling without replacement introduces the <strong>finite population correction</strong> factor \\(\\frac{N-n}{N-1}\\) in the variance.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="discrete-pmf-explorer"></div>
            `,
            visualizations: [
                {
                    id: 'discrete-pmf-explorer',
                    title: 'Interactive: Discrete Distribution PMF Explorer',
                    description: 'Select a distribution type and adjust parameters to observe how the PMF changes',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            scale: 30, originX: 60, originY: 350
                        });

                        var distType = 'binomial';
                        var params = { n: 20, p: 0.5, lambda: 5 };

                        // Distribution selector buttons
                        var btnDiv = document.createElement('div');
                        btnDiv.style.cssText = 'display:flex;gap:6px;margin-bottom:6px;flex-wrap:wrap;';
                        var distNames = ['binomial', 'poisson', 'geometric'];
                        var distLabels = ['Binomial(n,p)', 'Poisson(lambda)', 'Geometric(p)'];
                        var btns = [];
                        distNames.forEach(function(name, idx) {
                            var b = document.createElement('button');
                            b.textContent = distLabels[idx];
                            b.style.cssText = 'padding:4px 10px;border:1px solid #30363d;border-radius:4px;background:#1a1a40;color:#c9d1d9;font-size:0.75rem;cursor:pointer;';
                            b.addEventListener('click', function() {
                                distType = name;
                                btns.forEach(function(bb) { bb.style.background = '#1a1a40'; });
                                b.style.background = '#2a2a60';
                                draw();
                            });
                            btns.push(b);
                            btnDiv.appendChild(b);
                        });
                        btns[0].style.background = '#2a2a60';
                        controls.appendChild(btnDiv);

                        var sliderN = VizEngine.createSlider(controls, 'n', 1, 50, 20, 1, function(v) { params.n = v; draw(); });
                        var sliderP = VizEngine.createSlider(controls, 'p', 0.01, 0.99, 0.5, 0.01, function(v) { params.p = v; draw(); });
                        var sliderLam = VizEngine.createSlider(controls, 'lambda', 0.5, 30, 5, 0.5, function(v) { params.lambda = v; draw(); });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            var maxK, pmfFunc, titleStr, meanVal, varVal;
                            if (distType === 'binomial') {
                                maxK = Math.round(params.n);
                                pmfFunc = function(k) { return VizEngine.binomialPMF(k, Math.round(params.n), params.p); };
                                titleStr = 'Bin(' + Math.round(params.n) + ', ' + params.p.toFixed(2) + ')';
                                meanVal = params.n * params.p;
                                varVal = params.n * params.p * (1 - params.p);
                            } else if (distType === 'poisson') {
                                maxK = Math.max(20, Math.ceil(params.lambda + 4 * Math.sqrt(params.lambda)));
                                pmfFunc = function(k) { return VizEngine.poissonPMF(k, params.lambda); };
                                titleStr = 'Poisson(' + params.lambda.toFixed(1) + ')';
                                meanVal = params.lambda;
                                varVal = params.lambda;
                            } else {
                                maxK = Math.min(30, Math.ceil(5 / params.p));
                                pmfFunc = function(k) { return k >= 1 ? Math.pow(1 - params.p, k - 1) * params.p : 0; };
                                titleStr = 'Geom(' + params.p.toFixed(2) + ')';
                                meanVal = 1 / params.p;
                                varVal = (1 - params.p) / (params.p * params.p);
                            }

                            // Find max PMF for y-axis scaling
                            var maxPMF = 0;
                            for (var k = 0; k <= maxK; k++) {
                                var val = pmfFunc(k);
                                if (val > maxPMF) maxPMF = val;
                            }
                            if (maxPMF < 0.01) maxPMF = 0.01;

                            var yScale = 280 / maxPMF;
                            var barWidth = Math.min(Math.max(460 / (maxK + 1), 3), 25);
                            var xOffset = 60;

                            // Draw axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(55, 350);
                            ctx.lineTo(550, 350);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(55, 350);
                            ctx.lineTo(55, 30);
                            ctx.stroke();

                            // Y-axis labels
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'middle';
                            var yTicks = 5;
                            for (var i = 0; i <= yTicks; i++) {
                                var yVal = (maxPMF * i / yTicks);
                                var yPx = 350 - yVal * yScale;
                                ctx.fillText(yVal.toFixed(2), 50, yPx);
                                ctx.strokeStyle = viz.colors.grid;
                                ctx.lineWidth = 0.5;
                                ctx.beginPath();
                                ctx.moveTo(55, yPx);
                                ctx.lineTo(550, yPx);
                                ctx.stroke();
                            }

                            // Draw bars
                            var startK = (distType === 'geometric') ? 1 : 0;
                            for (var k = startK; k <= maxK; k++) {
                                var p_k = pmfFunc(k);
                                var barH = p_k * yScale;
                                var barX = xOffset + (k - startK) * (barWidth + 1);
                                if (barX + barWidth > 545) break;

                                ctx.fillStyle = viz.colors.blue + '99';
                                ctx.fillRect(barX, 350 - barH, barWidth, barH);
                                ctx.strokeStyle = viz.colors.blue;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(barX, 350 - barH, barWidth, barH);

                                // X labels (skip some if too crowded)
                                if (maxK <= 25 || k % Math.ceil(maxK / 20) === 0) {
                                    ctx.fillStyle = viz.colors.text;
                                    ctx.font = '10px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'top';
                                    ctx.fillText(k.toString(), barX + barWidth / 2, 353);
                                }
                            }

                            // Draw mean line
                            var meanX = xOffset + (meanVal - startK) * (barWidth + 1) + barWidth / 2;
                            if (meanX > 55 && meanX < 545) {
                                ctx.strokeStyle = viz.colors.orange;
                                ctx.lineWidth = 2;
                                ctx.setLineDash([5, 3]);
                                ctx.beginPath();
                                ctx.moveTo(meanX, 350);
                                ctx.lineTo(meanX, 40);
                                ctx.stroke();
                                ctx.setLineDash([]);
                            }

                            // Title and stats
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText(titleStr, 65, 10);

                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('E[X] = ' + meanVal.toFixed(2) + '  (dashed)', 65, 30);

                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('Var(X) = ' + varVal.toFixed(2), 65, 46);
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X \\sim \\operatorname{Bin}(n, p)\\). Prove that \\(\\mathbb{E}[X] = np\\).',
                    hint: 'Use \\(X = \\sum_{i=1}^{n} X_i\\), where \\(X_i \\sim \\operatorname{Bernoulli}(p)\\) are i.i.d., then apply linearity of expectation.',
                    solution: 'Since \\(X = \\sum_{i=1}^{n} X_i\\) where \\(X_i\\) are independent with \\(\\mathbb{E}[X_i] = p\\), by linearity of expectation \\(\\mathbb{E}[X] = \\sum_{i=1}^{n} \\mathbb{E}[X_i] = np\\).'
                },
                {
                    question: 'Prove the memoryless property of the geometric distribution: if \\(X \\sim \\operatorname{Geom}(p)\\), then \\(P(X > s+t \\mid X > s) = P(X > t)\\).',
                    hint: 'First compute \\(P(X > k) = (1-p)^k\\), then use the definition of conditional probability.',
                    solution: '\\(P(X > k) = \\sum_{j=k+1}^{\\infty}(1-p)^{j-1}p = (1-p)^k\\). Therefore \\(P(X > s+t \\mid X > s) = \\frac{P(X > s+t)}{P(X > s)} = \\frac{(1-p)^{s+t}}{(1-p)^s} = (1-p)^t = P(X > t)\\).'
                },
                {
                    question: 'Let \\(X \\sim \\operatorname{Poisson}(\\lambda)\\). Compute \\(\\mathbb{E}[X(X-1)]\\), and use it to derive \\(\\operatorname{Var}(X) = \\lambda\\).',
                    hint: 'Use the factorial moment \\(\\mathbb{E}[X(X-1)] = \\sum_{k=2}^{\\infty} k(k-1) \\frac{\\lambda^k e^{-\\lambda}}{k!}\\), and simplify by factoring out \\(\\lambda^2\\).',
                    solution: '\\(\\mathbb{E}[X(X-1)] = \\sum_{k=2}^{\\infty} k(k-1)\\frac{\\lambda^k e^{-\\lambda}}{k!} = \\lambda^2 \\sum_{j=0}^{\\infty} \\frac{\\lambda^j e^{-\\lambda}}{j!} = \\lambda^2\\). Therefore \\(\\mathbb{E}[X^2] = \\lambda^2 + \\lambda\\), so \\(\\operatorname{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2 = \\lambda^2 + \\lambda - \\lambda^2 = \\lambda\\).'
                }
            ]
        },

        // ===== Section 2: Continuous Distributions =====
        {
            id: 'ch01-sec02',
            title: 'Continuous Distributions',
            content: `
                <h2>Continuous Distributions 连续分布</h2>

                <p>Continuous random variables are characterized by their probability density function (PDF, 概率密度函数). This section introduces three fundamental continuous distribution families: the uniform, exponential, and normal distributions.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.7 (Uniform Distribution)</div>
                    <div class="env-body">
                        <p>A random variable \\(X\\) follows a <strong>uniform distribution</strong> (均匀分布) on \\([a, b]\\), denoted \\(X \\sim \\operatorname{Uniform}(a, b)\\), if</p>
                        \\[f(x) = \\frac{1}{b-a}, \quad a \\le x \\le b\\]
                        <p>CDF: \\(F(x) = \\frac{x-a}{b-a}\\) for \\(x \\in [a, b]\\). Expectation \\(\\mathbb{E}[X] = \\frac{a+b}{2}\\), variance \\(\\operatorname{Var}(X) = \\frac{(b-a)^2}{12}\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.8 (Exponential Distribution)</div>
                    <div class="env-body">
                        <p>A random variable \\(X\\) follows an <strong>exponential distribution</strong> (指数分布), denoted \\(X \\sim \\operatorname{Exp}(\\lambda)\\) (\\(\\lambda > 0\\)), if</p>
                        \\[f(x) = \\lambda e^{-\\lambda x}, \quad x \\ge 0\\]
                        <p>CDF: \\(F(x) = 1 - e^{-\\lambda x}\\). Expectation \\(\\mathbb{E}[X] = 1/\\lambda\\), variance \\(\\operatorname{Var}(X) = 1/\\lambda^2\\), MGF \\(M_X(t) = \\frac{\\lambda}{\\lambda - t}\\) for \\(t < \\lambda\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.9 (Memoryless Property of the Exponential Distribution)</div>
                    <div class="env-body">
                        <p>Let \\(X \\sim \\operatorname{Exp}(\\lambda)\\). Then for any \\(s, t > 0\\),</p>
                        \\[P(X > s + t \\mid X > s) = P(X > t) = e^{-\\lambda t}\\]
                        <p>Moreover, the exponential distribution is the only continuous distribution with the memoryless property.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>\\(P(X > s+t \\mid X > s) = \\frac{P(X > s+t)}{P(X > s)} = \\frac{e^{-\\lambda(s+t)}}{e^{-\\lambda s}} = e^{-\\lambda t} = P(X > t)\\).</p>
                        <p>Conversely, if a continuous random variable \\(X \\ge 0\\) satisfies the memoryless property, let \\(g(t) = P(X > t)\\). Then \\(g(s+t) = g(s)g(t)\\), and by continuity \\(g(t) = e^{-\\lambda t}\\) for some \\(\\lambda > 0\\), so \\(X \\sim \\operatorname{Exp}(\\lambda)\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.10 (Normal / Gaussian Distribution)</div>
                    <div class="env-body">
                        <p>A random variable \\(X\\) follows a <strong>normal distribution</strong> (正态分布), denoted \\(X \\sim N(\\mu, \\sigma^2)\\), if its PDF is</p>
                        \\[f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} \\exp\\left\\{-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right\\}, \quad x \\in \\mathbb{R}\\]
                        <p>Expectation \\(\\mathbb{E}[X] = \\mu\\), variance \\(\\operatorname{Var}(X) = \\sigma^2\\), MGF \\(M_X(t) = \\exp\\{\\mu t + \\sigma^2 t^2/2\\}\\).</p>
                        <p>When \\(\\mu = 0, \\sigma = 1\\), it is called the <strong>standard normal distribution</strong> (标准正态分布), whose PDF and CDF are denoted \\(\\varphi(x)\\) and \\(\\Phi(x)\\), respectively.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The normal distribution occupies a central position in statistics for at least three reasons: (1) The Central Limit Theorem (中心极限定理) guarantees that the sum of independent random variables (suitably standardized) converges to the normal distribution; (2) The normal distribution has maximum entropy among all distributions with a given mean and variance (i.e., it is the "most uncertain" distribution); (3) The normal family is closed under affine transformations: \\(aX + b \\sim N(a\\mu + b, a^2\\sigma^2)\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 1.11</div>
                    <div class="env-body">
                        <p>Let \\(X \\sim N(\\mu, \\sigma^2)\\). The standardization transform \\(Z = (X - \\mu)/\\sigma \\sim N(0,1)\\). Thus</p>
                        \\[P(a \\le X \\le b) = \\Phi\\left(\\frac{b-\\mu}{\\sigma}\\right) - \\Phi\\left(\\frac{a-\\mu}{\\sigma}\\right)\\]
                        <p>In particular, \\(P(\\mu - 1.96\\sigma \\le X \\le \\mu + 1.96\\sigma) \\approx 0.95\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="continuous-pdf-explorer"></div>
            `,
            visualizations: [
                {
                    id: 'continuous-pdf-explorer',
                    title: 'Interactive: Continuous Distribution PDF Explorer',
                    description: 'Adjust parameters to observe the PDF and CDF of uniform, exponential, and normal distributions',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            scale: 50, originX: 100, originY: 320
                        });

                        var distType = 'normal';
                        var params = { mu: 0, sigma: 1, lambda: 1, a: 0, b: 2 };
                        var showCDF = false;

                        // Distribution selector
                        var btnDiv = document.createElement('div');
                        btnDiv.style.cssText = 'display:flex;gap:6px;margin-bottom:6px;flex-wrap:wrap;';
                        var distNames = ['normal', 'exponential', 'uniform'];
                        var distLabels = ['Normal(mu,sigma)', 'Exp(lambda)', 'Uniform(a,b)'];
                        var btns = [];
                        distNames.forEach(function(name, idx) {
                            var b = document.createElement('button');
                            b.textContent = distLabels[idx];
                            b.style.cssText = 'padding:4px 10px;border:1px solid #30363d;border-radius:4px;background:#1a1a40;color:#c9d1d9;font-size:0.75rem;cursor:pointer;';
                            b.addEventListener('click', function() {
                                distType = name;
                                btns.forEach(function(bb) { bb.style.background = '#1a1a40'; });
                                b.style.background = '#2a2a60';
                                draw();
                            });
                            btns.push(b);
                            btnDiv.appendChild(b);
                        });
                        btns[0].style.background = '#2a2a60';
                        controls.appendChild(btnDiv);

                        var sliderMu = VizEngine.createSlider(controls, 'mu', -3, 3, 0, 0.1, function(v) { params.mu = v; draw(); });
                        var sliderSig = VizEngine.createSlider(controls, 'sigma', 0.2, 3, 1, 0.1, function(v) { params.sigma = v; draw(); });
                        var sliderLam = VizEngine.createSlider(controls, 'lambda', 0.2, 5, 1, 0.1, function(v) { params.lambda = v; draw(); });
                        var sliderA = VizEngine.createSlider(controls, 'a', -3, 3, 0, 0.1, function(v) { params.a = v; draw(); });
                        var sliderB = VizEngine.createSlider(controls, 'b', -2, 6, 2, 0.1, function(v) { params.b = v; draw(); });

                        VizEngine.createButton(controls, 'Toggle CDF', function() { showCDF = !showCDF; draw(); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var pdfFunc, cdfFunc, xMin, xMax, titleStr;
                            if (distType === 'normal') {
                                pdfFunc = function(x) { return VizEngine.normalPDF(x, params.mu, params.sigma); };
                                cdfFunc = function(x) { return VizEngine.normalCDF(x, params.mu, params.sigma); };
                                xMin = params.mu - 4 * params.sigma;
                                xMax = params.mu + 4 * params.sigma;
                                titleStr = 'N(' + params.mu.toFixed(1) + ', ' + (params.sigma * params.sigma).toFixed(2) + ')';
                            } else if (distType === 'exponential') {
                                pdfFunc = function(x) { return VizEngine.exponentialPDF(x, params.lambda); };
                                cdfFunc = function(x) { return x < 0 ? 0 : 1 - Math.exp(-params.lambda * x); };
                                xMin = -0.5;
                                xMax = Math.max(5, 5 / params.lambda);
                                titleStr = 'Exp(' + params.lambda.toFixed(1) + ')';
                            } else {
                                var aa = Math.min(params.a, params.b - 0.1);
                                var bb = Math.max(params.b, params.a + 0.1);
                                pdfFunc = function(x) { return VizEngine.uniformPDF(x, aa, bb); };
                                cdfFunc = function(x) { return x < aa ? 0 : (x > bb ? 1 : (x - aa) / (bb - aa)); };
                                xMin = aa - 1;
                                xMax = bb + 1;
                                titleStr = 'Uniform(' + aa.toFixed(1) + ', ' + bb.toFixed(1) + ')';
                            }

                            // Shade under PDF
                            viz.shadeUnder(pdfFunc, xMin, xMax, viz.colors.blue + '33');
                            // Draw PDF curve
                            viz.drawFunction(pdfFunc, xMin, xMax, viz.colors.blue, 2.5);

                            if (showCDF) {
                                viz.drawFunction(cdfFunc, xMin, xMax, viz.colors.orange, 2, 300);
                                viz.screenText('CDF', 520, 100, viz.colors.orange, 12);
                            }

                            viz.screenText(titleStr, 130, 20, viz.colors.white, 14);
                            viz.screenText('PDF', 520, 80, viz.colors.blue, 12);
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X \\sim \\operatorname{Exp}(\\lambda)\\). Compute \\(\\mathbb{E}[X^2]\\), and use it to derive the variance.',
                    hint: 'Use integration by parts to compute \\(\\int_0^{\\infty} x^2 \\lambda e^{-\\lambda x} dx\\).',
                    solution: 'By integration by parts or using the Gamma integral, \\(\\mathbb{E}[X^2] = \\int_0^{\\infty} x^2 \\lambda e^{-\\lambda x} dx = \\frac{2}{\\lambda^2}\\). Therefore \\(\\operatorname{Var}(X) = \\frac{2}{\\lambda^2} - \\left(\\frac{1}{\\lambda}\\right)^2 = \\frac{1}{\\lambda^2}\\).'
                },
                {
                    question: 'If \\(X \\sim N(0,1)\\), prove that \\(\\mathbb{E}[X^{2k}] = (2k-1)!! = 1 \\cdot 3 \\cdot 5 \\cdots (2k-1)\\).',
                    hint: 'Use the recurrence relation via integration by parts: \\(\\mathbb{E}[X^{2k}] = (2k-1) \\mathbb{E}[X^{2k-2}]\\).',
                    solution: 'Integration by parts: \\(\\mathbb{E}[X^{2k}] = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^{\\infty} x^{2k} e^{-x^2/2} dx\\). Let \\(u = x^{2k-1}, dv = x e^{-x^2/2} dx\\), yielding \\(\\mathbb{E}[X^{2k}] = (2k-1) \\mathbb{E}[X^{2k-2}]\\). By induction from \\(\\mathbb{E}[X^0] = 1\\), we obtain \\(\\mathbb{E}[X^{2k}] = (2k-1)!!\\).'
                },
                {
                    question: 'Prove that the MGF of the normal distribution is \\(M_X(t) = \\exp\\{\\mu t + \\sigma^2 t^2 / 2\\}\\).',
                    hint: 'First compute the MGF for the standard normal (by completing the square), then use the relation \\(X = \\mu + \\sigma Z\\).',
                    solution: 'Let \\(Z \\sim N(0,1)\\). \\(M_Z(t) = \\frac{1}{\\sqrt{2\\pi}} \\int e^{tx} e^{-x^2/2} dx = \\frac{1}{\\sqrt{2\\pi}} \\int e^{-(x-t)^2/2 + t^2/2} dx = e^{t^2/2}\\). For \\(X = \\mu + \\sigma Z\\): \\(M_X(t) = e^{\\mu t} M_Z(\\sigma t) = e^{\\mu t + \\sigma^2 t^2/2}\\).'
                }
            ]
        },

        // ===== Section 3: Gamma and Beta Families =====
        {
            id: 'ch01-sec03',
            title: 'Gamma and Beta Families',
            content: `
                <h2>Gamma and Beta Families Gamma 族与 Beta 族</h2>

                <p>The Gamma distribution and Beta distribution are two important parametric families in statistics. The Gamma family encompasses the exponential distribution and the chi-squared distribution as special cases, while the Beta family is naturally defined on \\([0,1]\\), making it well-suited for modeling probabilities and proportions.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.12 (Gamma Function)</div>
                    <div class="env-body">
                        <p>For \\(\\alpha > 0\\), the <strong>Gamma function</strong> is defined as</p>
                        \\[\\Gamma(\\alpha) = \\int_0^{\\infty} x^{\\alpha - 1} e^{-x} dx\\]
                        <p>Properties: \\(\\Gamma(\\alpha + 1) = \\alpha \\Gamma(\\alpha)\\), \\(\\Gamma(n) = (n-1)!\\) for positive integers \\(n\\), \\(\\Gamma(1/2) = \\sqrt{\\pi}\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.13 (Gamma Distribution)</div>
                    <div class="env-body">
                        <p>A random variable \\(X\\) follows a <strong>Gamma distribution</strong>, denoted \\(X \\sim \\operatorname{Gamma}(\\alpha, \\beta)\\), if its PDF is</p>
                        \\[f(x) = \\frac{\\beta^\\alpha}{\\Gamma(\\alpha)} x^{\\alpha - 1} e^{-\\beta x}, \quad x > 0\\]
                        <p>where \\(\\alpha > 0\\) is the shape parameter and \\(\\beta > 0\\) is the rate parameter.</p>
                        <p>Expectation \\(\\mathbb{E}[X] = \\alpha / \\beta\\), variance \\(\\operatorname{Var}(X) = \\alpha / \\beta^2\\), MGF \\(M_X(t) = \\left(\\frac{\\beta}{\\beta - t}\\right)^\\alpha\\) for \\(t < \\beta\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Special Cases)</div>
                    <div class="env-body">
                        <p>The Gamma distribution unifies several important distributions:</p>
                        <ul>
                            <li>\\(\\operatorname{Gamma}(1, \\lambda) = \\operatorname{Exp}(\\lambda)\\) (exponential distribution)</li>
                            <li>\\(\\operatorname{Gamma}(k/2, 1/2) = \\chi^2(k)\\) (chi-squared distribution)</li>
                            <li>\\(\\operatorname{Gamma}(n, \\lambda)\\) is the distribution of the sum of \\(n\\) independent \\(\\operatorname{Exp}(\\lambda)\\) random variables</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.14 (Additivity of Gamma Distributions)</div>
                    <div class="env-body">
                        <p>If \\(X_1 \\sim \\operatorname{Gamma}(\\alpha_1, \\beta)\\) and \\(X_2 \\sim \\operatorname{Gamma}(\\alpha_2, \\beta)\\) are independent, then</p>
                        \\[X_1 + X_2 \\sim \\operatorname{Gamma}(\\alpha_1 + \\alpha_2, \\beta)\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By the uniqueness of MGFs: \\(M_{X_1+X_2}(t) = M_{X_1}(t) M_{X_2}(t) = \\left(\\frac{\\beta}{\\beta-t}\\right)^{\\alpha_1} \\left(\\frac{\\beta}{\\beta-t}\\right)^{\\alpha_2} = \\left(\\frac{\\beta}{\\beta-t}\\right)^{\\alpha_1+\\alpha_2}\\), which is exactly the MGF of \\(\\operatorname{Gamma}(\\alpha_1+\\alpha_2, \\beta)\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="gamma-shape-explorer"></div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.15 (Beta Distribution)</div>
                    <div class="env-body">
                        <p>A random variable \\(X\\) follows a <strong>Beta distribution</strong>, denoted \\(X \\sim \\operatorname{Beta}(a, b)\\), if its PDF is</p>
                        \\[f(x) = \\frac{1}{B(a,b)} x^{a-1}(1-x)^{b-1}, \quad 0 < x < 1\\]
                        <p>where \\(B(a,b) = \\frac{\\Gamma(a)\\Gamma(b)}{\\Gamma(a+b)}\\) is the Beta function.</p>
                        <p>Expectation \\(\\mathbb{E}[X] = \\frac{a}{a+b}\\), variance \\(\\operatorname{Var}(X) = \\frac{ab}{(a+b)^2(a+b+1)}\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The Beta distribution is a "distribution over distributions" — when you are uncertain about the value of a probability parameter, you can use the Beta distribution to describe your uncertainty. In Bayesian statistics, the Beta distribution is the <strong>conjugate prior</strong> (共轭先验) for the Bernoulli/Binomial likelihood: if the prior is \\(p \\sim \\operatorname{Beta}(a, b)\\), then after observing \\(k\\) successes and \\(n-k\\) failures, the posterior is \\(p \\mid \\text{data} \\sim \\operatorname{Beta}(a+k, b+n-k)\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 1.16 (Special Case of Beta)</div>
                    <div class="env-body">
                        <p>\\(\\operatorname{Beta}(1, 1) = \\operatorname{Uniform}(0, 1)\\): substituting \\(a=b=1\\) gives \\(f(x) = 1\\) on \\((0,1)\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="beta-shape-explorer"></div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.17 (Cauchy Distribution)</div>
                    <div class="env-body">
                        <p>A random variable \\(X\\) follows the <strong>standard Cauchy distribution</strong> if its PDF is</p>
                        \\[f(x) = \\frac{1}{\\pi(1 + x^2)}, \quad x \\in \\mathbb{R}\\]
                        <p>More generally, \\(X \\sim \\operatorname{Cauchy}(x_0, \\gamma)\\) has PDF \\(f(x) = \\frac{1}{\\pi\\gamma\\left[1 + \\left(\\frac{x-x_0}{\\gamma}\\right)^2\\right]}\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>The Cauchy distribution has no finite expectation or variance! \\(\\mathbb{E}[|X|] = \\int_{-\\infty}^{\\infty} \\frac{|x|}{\\pi(1+x^2)}dx = \\infty\\). This means the Law of Large Numbers does not apply to Cauchy random variables — the sample mean of \\(n\\) independent Cauchy random variables still follows a Cauchy distribution! Note that the Cauchy distribution is equivalent to the \\(t\\) distribution with \\(\\nu = 1\\) degrees of freedom.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'gamma-shape-explorer',
                    title: 'Interactive: Gamma Distribution Family Shape Explorer',
                    description: 'Adjust alpha and beta parameters to observe how the Gamma PDF shape changes',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380,
                            scale: 35, originX: 60, originY: 320
                        });

                        var alpha = 2, beta = 1;

                        var sliderAlpha = VizEngine.createSlider(controls, 'alpha (shape)', 0.3, 10, 2, 0.1, function(v) { alpha = v; draw(); });
                        var sliderBeta = VizEngine.createSlider(controls, 'beta (rate)', 0.2, 5, 1, 0.1, function(v) { beta = v; draw(); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var xMax = Math.max(8, (alpha + 3 * Math.sqrt(alpha)) / beta);
                            var pdf = function(x) { return VizEngine.gammaPDF(x, alpha, beta); };

                            viz.shadeUnder(pdf, 0.001, xMax, viz.colors.purple + '33');
                            viz.drawFunction(pdf, 0.001, xMax, viz.colors.purple, 2.5);

                            // Draw mean line
                            var mean = alpha / beta;
                            viz.drawSegment(mean, 0, mean, pdf(mean), viz.colors.orange, 2, true);
                            viz.drawPoint(mean, 0, viz.colors.orange, 'E[X]=' + mean.toFixed(2), 4);

                            // Also draw Exp(beta) for reference when alpha is near 1
                            if (alpha < 1.5 && alpha > 0.5) {
                                var expPdf = function(x) { return VizEngine.exponentialPDF(x, beta); };
                                viz.drawFunction(expPdf, 0.001, xMax, viz.colors.teal + '88', 1.5);
                                viz.screenText('Exp(' + beta.toFixed(1) + ') for reference', 200, 20, viz.colors.teal, 11);
                            }

                            viz.screenText('Gamma(' + alpha.toFixed(1) + ', ' + beta.toFixed(1) + ')', 120, 20, viz.colors.white, 14);
                            viz.screenText('Var = ' + (alpha / (beta * beta)).toFixed(2), 120, 38, viz.colors.text, 11);
                        }

                        draw();
                        return viz;
                    }
                },
                {
                    id: 'beta-shape-explorer',
                    title: 'Interactive: Beta Distribution Family Shape Explorer',
                    description: 'Adjust a and b parameters to observe how the Beta PDF shape changes on [0,1]',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380,
                            scale: 400, originX: 50, originY: 320
                        });

                        var a = 2, b = 5;

                        var sliderA = VizEngine.createSlider(controls, 'a', 0.2, 10, 2, 0.1, function(v) { a = v; draw(); });
                        var sliderB = VizEngine.createSlider(controls, 'b', 0.2, 10, 5, 0.1, function(v) { b = v; draw(); });

                        function draw() {
                            viz.clear();

                            var ctx = viz.ctx;

                            // Custom axes for [0,1] domain
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(50, 320);
                            ctx.lineTo(520, 320);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(50, 320);
                            ctx.lineTo(50, 20);
                            ctx.stroke();

                            // X-axis labels for [0, 1]
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var i = 0; i <= 10; i++) {
                                var xVal = i / 10;
                                var px = 50 + xVal * 470;
                                ctx.fillText(xVal.toFixed(1), px, 323);
                                ctx.strokeStyle = viz.colors.grid;
                                ctx.lineWidth = 0.5;
                                ctx.beginPath();
                                ctx.moveTo(px, 320);
                                ctx.lineTo(px, 20);
                                ctx.stroke();
                            }

                            // Find max PDF value for y-scaling
                            var maxY = 0;
                            for (var i = 1; i < 200; i++) {
                                var x = i / 200;
                                var val = VizEngine.betaPDF(x, a, b);
                                if (isFinite(val) && val > maxY) maxY = val;
                            }
                            maxY = Math.max(maxY * 1.1, 0.5);

                            var yScale = 280 / maxY;

                            // Y-axis labels
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'middle';
                            var yTicks = 5;
                            for (var i = 0; i <= yTicks; i++) {
                                var yVal = maxY * i / yTicks;
                                var py = 320 - yVal * yScale;
                                ctx.fillStyle = viz.colors.text;
                                ctx.fillText(yVal.toFixed(1), 45, py);
                            }

                            // Draw shaded region
                            ctx.fillStyle = viz.colors.green + '33';
                            ctx.beginPath();
                            ctx.moveTo(50, 320);
                            for (var i = 1; i < 200; i++) {
                                var x = i / 200;
                                var val = VizEngine.betaPDF(x, a, b);
                                if (!isFinite(val)) val = 0;
                                var px = 50 + x * 470;
                                var py = 320 - Math.min(val, maxY) * yScale;
                                ctx.lineTo(px, py);
                            }
                            ctx.lineTo(50 + 470, 320);
                            ctx.closePath();
                            ctx.fill();

                            // Draw PDF curve
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;
                            for (var i = 1; i < 200; i++) {
                                var x = i / 200;
                                var val = VizEngine.betaPDF(x, a, b);
                                if (!isFinite(val)) { started = false; continue; }
                                var px = 50 + x * 470;
                                var py = 320 - Math.min(val, maxY) * yScale;
                                if (!started) { ctx.moveTo(px, py); started = true; }
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Mean line
                            var mean = a / (a + b);
                            var meanPx = 50 + mean * 470;
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([5, 3]);
                            ctx.beginPath();
                            ctx.moveTo(meanPx, 320);
                            ctx.lineTo(meanPx, 30);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Beta(' + a.toFixed(1) + ', ' + b.toFixed(1) + ')', 60, 10);

                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('E[X] = ' + mean.toFixed(3), 60, 30);

                            var variance = (a * b) / ((a + b) * (a + b) * (a + b + 1));
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('Var(X) = ' + variance.toFixed(4), 60, 46);
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that \\(\\Gamma(\\alpha + 1) = \\alpha \\Gamma(\\alpha)\\) for all \\(\\alpha > 0\\).',
                    hint: 'Apply integration by parts to \\(\\Gamma(\\alpha+1) = \\int_0^{\\infty} x^{\\alpha} e^{-x} dx\\).',
                    solution: '\\(\\Gamma(\\alpha+1) = \\int_0^{\\infty} x^{\\alpha} e^{-x} dx\\). Let \\(u = x^{\\alpha}, dv = e^{-x}dx\\), so \\(du = \\alpha x^{\\alpha-1}dx, v = -e^{-x}\\). Therefore \\(\\Gamma(\\alpha+1) = [-x^{\\alpha}e^{-x}]_0^{\\infty} + \\alpha \\int_0^{\\infty} x^{\\alpha-1} e^{-x} dx = 0 + \\alpha \\Gamma(\\alpha)\\).'
                },
                {
                    question: 'Let \\(X \\sim \\operatorname{Beta}(a, b)\\). Prove that \\(\\mathbb{E}[X] = \\frac{a}{a+b}\\).',
                    hint: 'Use \\(\\mathbb{E}[X] = \\frac{1}{B(a,b)} \\int_0^1 x^a (1-x)^{b-1} dx = \\frac{B(a+1, b)}{B(a, b)}\\), then expand the Beta function using the Gamma function.',
                    solution: '\\(\\mathbb{E}[X] = \\frac{1}{B(a,b)} \\int_0^1 x \\cdot x^{a-1}(1-x)^{b-1} dx = \\frac{B(a+1, b)}{B(a, b)} = \\frac{\\Gamma(a+1)\\Gamma(b)}{\\Gamma(a+b+1)} \\cdot \\frac{\\Gamma(a+b)}{\\Gamma(a)\\Gamma(b)} = \\frac{a\\Gamma(a)}{(a+b)\\Gamma(a)} = \\frac{a}{a+b}\\).'
                },
                {
                    question: 'Explain why the expectation of the Cauchy distribution does not exist.',
                    hint: 'Consider \\(\\mathbb{E}[|X|] = \\frac{1}{\\pi} \\int_{-\\infty}^{\\infty} \\frac{|x|}{1+x^2} dx\\), and show that this integral diverges.',
                    solution: '\\(\\mathbb{E}[|X|] = \\frac{2}{\\pi} \\int_0^{\\infty} \\frac{x}{1+x^2} dx = \\frac{2}{\\pi} \\left[\\frac{1}{2} \\ln(1+x^2)\\right]_0^{\\infty} = \\infty\\). Since \\(\\mathbb{E}[|X|] = \\infty\\), \\(\\mathbb{E}[X]\\) also does not exist (Lebesgue integration requires absolute integrability for the expectation to be well-defined).'
                }
            ]
        },

        // ===== Section 4: Sampling Distributions =====
        {
            id: 'ch01-sec04',
            title: 'Sampling Distributions',
            content: `
                <h2>Sampling Distributions 抽样分布</h2>

                <p>This section introduces three sampling distributions (抽样分布) that are crucial for statistical inference: the chi-squared distribution, the \\(t\\) distribution, and the \\(F\\) distribution. These distributions arise from transformations of standard normal random variables and form the theoretical foundation for confidence intervals and hypothesis testing.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.18 (Chi-Squared Distribution)</div>
                    <div class="env-body">
                        <p>Let \\(Z_1, \\ldots, Z_k\\) be i.i.d. \\(N(0,1)\\) random variables. Then</p>
                        \\[Q = \\sum_{i=1}^k Z_i^2 \\sim \\chi^2(k)\\]
                        <p>We say \\(Q\\) follows a <strong>chi-squared distribution</strong> (卡方分布) with \\(k\\) degrees of freedom. Its PDF is</p>
                        \\[f(x) = \\frac{1}{2^{k/2} \\Gamma(k/2)} x^{k/2-1} e^{-x/2}, \quad x > 0\\]
                        <p>That is, \\(\\chi^2(k) = \\operatorname{Gamma}(k/2, 1/2)\\). Expectation \\(\\mathbb{E}[Q] = k\\), variance \\(\\operatorname{Var}(Q) = 2k\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.19 (Additivity of Chi-Squared Distributions)</div>
                    <div class="env-body">
                        <p>If \\(Q_1 \\sim \\chi^2(k_1)\\) and \\(Q_2 \\sim \\chi^2(k_2)\\) are independent, then</p>
                        \\[Q_1 + Q_2 \\sim \\chi^2(k_1 + k_2)\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>This is a direct corollary of the additivity of Gamma distributions (Theorem 1.14): since \\(\\chi^2(k) = \\operatorname{Gamma}(k/2, 1/2)\\), we have \\(Q_1 + Q_2 \\sim \\operatorname{Gamma}((k_1+k_2)/2, 1/2) = \\chi^2(k_1+k_2)\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.20 (Student's \\(t\\) Distribution)</div>
                    <div class="env-body">
                        <p>Let \\(Z \\sim N(0,1)\\) and \\(Q \\sim \\chi^2(\\nu)\\) be independent. Then</p>
                        \\[T = \\frac{Z}{\\sqrt{Q/\\nu}} \\sim t(\\nu)\\]
                        <p>We say \\(T\\) follows a <strong>Student's \\(t\\) distribution</strong> with \\(\\nu\\) degrees of freedom. Its PDF is</p>
                        \\[f(x) = \\frac{\\Gamma((\\nu+1)/2)}{\\sqrt{\\nu\\pi}\\,\\Gamma(\\nu/2)} \\left(1 + \\frac{x^2}{\\nu}\\right)^{-(\\nu+1)/2}\\]
                        <p>Expectation \\(\\mathbb{E}[T] = 0\\) (\\(\\nu > 1\\)), variance \\(\\operatorname{Var}(T) = \\frac{\\nu}{\\nu-2}\\) (\\(\\nu > 2\\)).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The \\(t\\) distribution can be understood as a "normal distribution with uncertain variance." In a normal population, when the variance \\(\\sigma^2\\) is unknown and we replace \\(\\sigma\\) with the sample standard deviation \\(S\\), the standardized statistic no longer follows a standard normal distribution but instead follows a \\(t\\) distribution. The \\(t\\) distribution has heavier tails than the normal distribution, reflecting the additional uncertainty from estimating the variance. As the degrees of freedom \\(\\nu \\to \\infty\\), \\(t(\\nu) \\to N(0,1)\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.21 (\\(F\\) Distribution)</div>
                    <div class="env-body">
                        <p>Let \\(Q_1 \\sim \\chi^2(d_1)\\) and \\(Q_2 \\sim \\chi^2(d_2)\\) be independent. Then</p>
                        \\[F = \\frac{Q_1/d_1}{Q_2/d_2} \\sim F(d_1, d_2)\\]
                        <p>We say \\(F\\) follows an <strong>\\(F\\) distribution</strong> with degrees of freedom \\((d_1, d_2)\\).</p>
                        <p>Expectation \\(\\mathbb{E}[F] = \\frac{d_2}{d_2 - 2}\\) (\\(d_2 > 2\\)), variance \\(\\operatorname{Var}(F) = \\frac{2d_2^2(d_1+d_2-2)}{d_1(d_2-2)^2(d_2-4)}\\) (\\(d_2 > 4\\)).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.22 (Relationship Between \\(t\\) and \\(F\\))</div>
                    <div class="env-body">
                        <p>If \\(T \\sim t(\\nu)\\), then \\(T^2 \\sim F(1, \\nu)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(T = Z / \\sqrt{Q/\\nu}\\), where \\(Z \\sim N(0,1)\\) and \\(Q \\sim \\chi^2(\\nu)\\) are independent. Then \\(T^2 = Z^2 / (Q/\\nu)\\). Since \\(Z^2 \\sim \\chi^2(1)\\), we have \\(T^2 = \\frac{Z^2/1}{Q/\\nu} \\sim F(1, \\nu)\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sampling-dist-comparison"></div>
            `,
            visualizations: [
                {
                    id: 'sampling-dist-comparison',
                    title: 'Interactive: Sampling Distribution Comparison',
                    description: 'Compare the t distribution with the normal, and explore chi-squared and F distributions with different degrees of freedom',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            scale: 50, originX: 280, originY: 320
                        });

                        var viewMode = 't-vs-normal';
                        var nu = 3;
                        var chiK = 3;
                        var fd1 = 5, fd2 = 10;

                        var btnDiv = document.createElement('div');
                        btnDiv.style.cssText = 'display:flex;gap:6px;margin-bottom:6px;flex-wrap:wrap;';
                        var viewNames = ['t-vs-normal', 'chi-squared', 'f-dist'];
                        var viewLabels = ['t vs Normal', 'Chi-squared', 'F distribution'];
                        var viewBtns = [];
                        viewNames.forEach(function(name, idx) {
                            var b = document.createElement('button');
                            b.textContent = viewLabels[idx];
                            b.style.cssText = 'padding:4px 10px;border:1px solid #30363d;border-radius:4px;background:#1a1a40;color:#c9d1d9;font-size:0.75rem;cursor:pointer;';
                            b.addEventListener('click', function() {
                                viewMode = name;
                                viewBtns.forEach(function(bb) { bb.style.background = '#1a1a40'; });
                                b.style.background = '#2a2a60';
                                draw();
                            });
                            viewBtns.push(b);
                            btnDiv.appendChild(b);
                        });
                        viewBtns[0].style.background = '#2a2a60';
                        controls.appendChild(btnDiv);

                        var sliderNu = VizEngine.createSlider(controls, 'nu (t df)', 1, 50, 3, 1, function(v) { nu = v; draw(); });
                        var sliderChiK = VizEngine.createSlider(controls, 'k (chi-sq df)', 1, 30, 3, 1, function(v) { chiK = v; draw(); });
                        var sliderFd1 = VizEngine.createSlider(controls, 'd1 (F)', 1, 30, 5, 1, function(v) { fd1 = v; draw(); });
                        var sliderFd2 = VizEngine.createSlider(controls, 'd2 (F)', 3, 50, 10, 1, function(v) { fd2 = v; draw(); });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            if (viewMode === 't-vs-normal') {
                                var tFunc = function(x) { return VizEngine.tPDF(x, nu); };
                                var normFunc = function(x) { return VizEngine.normalPDF(x, 0, 1); };

                                viz.shadeUnder(tFunc, -5, 5, viz.colors.blue + '22');
                                viz.drawFunction(tFunc, -5, 5, viz.colors.blue, 2.5);
                                viz.drawFunction(normFunc, -5, 5, viz.colors.orange, 2, 300);

                                viz.screenText('t(' + Math.round(nu) + ')', 400, 30, viz.colors.blue, 13);
                                viz.screenText('N(0,1)', 400, 48, viz.colors.orange, 13);
                                viz.screenText('Var(T) = ' + (nu > 2 ? (nu / (nu - 2)).toFixed(2) : 'undefined'), 400, 66, viz.colors.text, 11);

                            } else if (viewMode === 'chi-squared') {
                                // Shift origin for chi-squared (positive domain)
                                var savedOX = viz.originX;
                                viz.originX = 60;
                                viz.clear();
                                viz.drawGrid(1);
                                viz.drawAxes();

                                var colors = [viz.colors.blue, viz.colors.orange, viz.colors.green, viz.colors.purple];
                                var kVals = [Math.round(chiK)];
                                if (chiK > 2) kVals.push(Math.round(chiK / 2));
                                if (chiK < 25) kVals.push(Math.round(chiK * 2));
                                kVals = kVals.filter(function(v, i, a) { return a.indexOf(v) === i && v >= 1; });
                                kVals.sort(function(a, b) { return a - b; });

                                var xMax = Math.max(15, chiK * 2 + 8);
                                kVals.forEach(function(k, idx) {
                                    var pdf = function(x) { return VizEngine.chiSquaredPDF(x, k); };
                                    var c = colors[idx % colors.length];
                                    if (k === Math.round(chiK)) {
                                        viz.shadeUnder(pdf, 0.01, xMax, c + '22');
                                    }
                                    viz.drawFunction(pdf, 0.01, xMax, c, k === Math.round(chiK) ? 2.5 : 1.5);
                                    viz.screenText('k=' + k, 420, 30 + idx * 18, c, 12);
                                });

                                viz.screenText('Chi-squared distributions', 120, 15, viz.colors.white, 13);
                                viz.originX = savedOX;

                            } else {
                                // F distribution
                                var savedOX = viz.originX;
                                viz.originX = 60;
                                viz.clear();
                                viz.drawGrid(1);
                                viz.drawAxes();

                                var fFunc = function(x) { return VizEngine.fPDF(x, Math.round(fd1), Math.round(fd2)); };
                                var xMax = Math.max(5, fd1 / fd2 * 4 + 3);

                                viz.shadeUnder(fFunc, 0.01, xMax, viz.colors.pink + '33');
                                viz.drawFunction(fFunc, 0.01, xMax, viz.colors.pink, 2.5);

                                var fMean = fd2 > 2 ? fd2 / (fd2 - 2) : NaN;
                                viz.screenText('F(' + Math.round(fd1) + ', ' + Math.round(fd2) + ')', 120, 15, viz.colors.white, 13);
                                if (isFinite(fMean)) {
                                    viz.screenText('E[F] = ' + fMean.toFixed(2), 120, 35, viz.colors.orange, 11);
                                }
                                viz.originX = savedOX;
                            }
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{iid}{\\sim} N(\\mu, \\sigma^2)\\). Prove that \\(\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)\\), where \\(S^2 = \\frac{1}{n-1}\\sum_{i=1}^n (X_i - \\bar{X})^2\\).',
                    hint: 'Standardize \\(X_i - \\bar{X}\\) and write in the form \\(Z_i - \\bar{Z}\\). Use an orthogonal transformation to decompose \\(\\sum(Z_i - \\bar{Z})^2\\) into a sum of squares of \\(n-1\\) independent standard normal variables.',
                    solution: 'Let \\(Z_i = (X_i - \\mu)/\\sigma \\overset{iid}{\\sim} N(0,1)\\). Then \\(\\frac{(n-1)S^2}{\\sigma^2} = \\sum_{i=1}^n (Z_i - \\bar{Z})^2 = \\sum Z_i^2 - n\\bar{Z}^2\\). By orthogonal decomposition (e.g., using the Helmert matrix), \\(\\sum Z_i^2 = n\\bar{Z}^2 + \\sum_{j=1}^{n-1} W_j^2\\), where \\(W_j\\) are independent with \\(W_j \\sim N(0,1)\\). Therefore \\(\\sum (Z_i - \\bar{Z})^2 = \\sum_{j=1}^{n-1} W_j^2 \\sim \\chi^2(n-1)\\).'
                },
                {
                    question: 'Prove that as \\(\\nu \\to \\infty\\), \\(t(\\nu) \\to N(0,1)\\) in distribution.',
                    hint: 'Use the Law of Large Numbers to show \\(Q/\\nu \\xrightarrow{P} 1\\), then apply Slutsky\'s theorem.',
                    solution: 'If \\(Q \\sim \\chi^2(\\nu)\\), i.e., \\(Q = \\sum_{i=1}^{\\nu} Z_i^2\\), by the Law of Large Numbers \\(Q/\\nu \\xrightarrow{P} \\mathbb{E}[Z_1^2] = 1\\). Therefore \\(\\sqrt{Q/\\nu} \\xrightarrow{P} 1\\) (by the continuous mapping theorem). By Slutsky\'s theorem, \\(T = Z / \\sqrt{Q/\\nu} \\xrightarrow{d} Z/1 = Z \\sim N(0,1)\\).'
                },
                {
                    question: 'Let \\(T \\sim t(\\nu)\\) with \\(\\nu > 2\\). Find \\(\\operatorname{Var}(T)\\).',
                    hint: 'Use \\(T = Z/\\sqrt{Q/\\nu}\\) and \\(\\operatorname{Var}(T) = \\mathbb{E}[T^2] = \\mathbb{E}[Z^2] \\mathbb{E}[\\nu/Q]\\) (by independence), then compute \\(\\mathbb{E}[1/Q]\\) for \\(Q \\sim \\chi^2(\\nu)\\).',
                    solution: 'By independence, \\(\\mathbb{E}[T^2] = \\mathbb{E}[Z^2] \\cdot \\mathbb{E}[\\nu/Q]\\). \\(\\mathbb{E}[Z^2]=1\\). For \\(Q \\sim \\chi^2(\\nu) = \\operatorname{Gamma}(\\nu/2, 1/2)\\): \\(\\mathbb{E}[1/Q] = \\frac{1}{\\nu - 2}\\) (using the inverse moment formula: \\(\\mathbb{E}[Q^{-1}] = \\frac{(1/2)}{\\nu/2-1} = \\frac{1}{\\nu-2}\\) when \\(\\nu > 2\\)). Therefore \\(\\operatorname{Var}(T) = 1 \\cdot \\frac{\\nu}{\\nu-2} = \\frac{\\nu}{\\nu-2}\\).'
                }
            ]
        },

        // ===== Section 5: Relationships Between Distributions =====
        {
            id: 'ch01-sec05',
            title: 'Relationships Between Distributions',
            content: `
                <h2>Relationships Between Distributions 分布间关系</h2>

                <p>Statistical distributions do not exist in isolation — they are intimately connected through limits, transformations, and special-case relationships. Understanding these connections is key to mastering statistical inference.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.23 (Poisson Approximation)</div>
                    <div class="env-body">
                        <p>Let \\(X_n \\sim \\operatorname{Bin}(n, p_n)\\) with \\(np_n \\to \\lambda > 0\\). Then for each fixed \\(k \\ge 0\\),</p>
                        \\[P(X_n = k) \\to \\frac{\\lambda^k e^{-\\lambda}}{k!} \quad (n \\to \\infty)\\]
                        <p>That is, \\(X_n \\xrightarrow{d} \\operatorname{Poisson}(\\lambda)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Set \\(p_n = \\lambda/n\\). Then</p>
                        \\[\\binom{n}{k} p_n^k (1-p_n)^{n-k} = \\frac{n!}{k!(n-k)!} \\frac{\\lambda^k}{n^k} \\left(1 - \\frac{\\lambda}{n}\\right)^{n-k}\\]
                        <p>As \\(n \\to \\infty\\): \\(\\frac{n!}{(n-k)! n^k} \\to 1\\) (a product of \\(k\\) factors each tending to 1), \\(\\left(1-\\frac{\\lambda}{n}\\right)^n \\to e^{-\\lambda}\\), and \\(\\left(1-\\frac{\\lambda}{n}\\right)^{-k} \\to 1\\). Therefore the limit is \\(\\frac{\\lambda^k e^{-\\lambda}}{k!}\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.24 (De Moivre-Laplace Theorem — CLT Preview)</div>
                    <div class="env-body">
                        <p>Let \\(X_n \\sim \\operatorname{Bin}(n, p)\\) with fixed \\(0 < p < 1\\). Then</p>
                        \\[\\frac{X_n - np}{\\sqrt{np(1-p)}} \\xrightarrow{d} N(0, 1) \quad (n \\to \\infty)\\]
                        <p>This is the special case of the Central Limit Theorem (CLT) for the binomial distribution.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Overview of Distribution Relationships)</div>
                    <div class="env-body">
                        <p>The following summarizes the main distribution relationships covered in this chapter:</p>
                        <ul>
                            <li><strong>Special cases</strong>:
                                \\(\\operatorname{Gamma}(1, \\lambda) = \\operatorname{Exp}(\\lambda)\\),
                                \\(\\operatorname{Gamma}(k/2, 1/2) = \\chi^2(k)\\),
                                \\(\\operatorname{Beta}(1,1) = \\operatorname{Uniform}(0,1)\\),
                                \\(t(1) = \\operatorname{Cauchy}\\)
                            </li>
                            <li><strong>Limiting relationships</strong>:
                                \\(\\operatorname{Bin}(n, \\lambda/n) \\to \\operatorname{Poisson}(\\lambda)\\),
                                \\(\\operatorname{Bin}(n, p) \\xrightarrow{\\text{CLT}} N(np, np(1-p))\\),
                                \\(t(\\nu) \\to N(0,1)\\) as \\(\\nu \\to \\infty\\)
                            </li>
                            <li><strong>Transformation relationships</strong>:
                                \\(T^2 \\sim F(1, \\nu)\\) if \\(T \\sim t(\\nu)\\),
                                \\(Z^2 \\sim \\chi^2(1)\\) if \\(Z \\sim N(0,1)\\)
                            </li>
                            <li><strong>Additivity</strong>:
                                \\(\\chi^2(k_1) + \\chi^2(k_2) = \\chi^2(k_1+k_2)\\),
                                \\(\\operatorname{Gamma}(\\alpha_1,\\beta) + \\operatorname{Gamma}(\\alpha_2,\\beta) = \\operatorname{Gamma}(\\alpha_1+\\alpha_2,\\beta)\\)
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 1.25</div>
                    <div class="env-body">
                        <p>Let \\(X \\sim \\operatorname{Bin}(100, 0.05)\\). Computing \\(P(X = 3)\\) exactly is cumbersome, but using the Poisson approximation (\\(\\lambda = 5\\)):</p>
                        \\[P(X = 3) \\approx \\frac{5^3 e^{-5}}{3!} = \\frac{125 e^{-5}}{6} \\approx 0.1404\\]
                        <p>The exact value is \\(\\binom{100}{3}(0.05)^3(0.95)^{97} \\approx 0.1396\\), so the approximation works well.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="distribution-relationships"></div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (A Unified View of the Distribution Family Tree)</div>
                    <div class="env-body">
                        <p>The Gamma family can be viewed as the "backbone" of continuous distributions: it unifies the exponential distribution (waiting for the first event), the chi-squared distribution (sum of squared normals), and even the Erlang distribution (waiting for the \\(k\\)-th event). The Beta family connects to the Gamma family through \\(\\operatorname{Beta}(a,b) = \\frac{\\operatorname{Gamma}(a)}{\\operatorname{Gamma}(a) + \\operatorname{Gamma}(b)}\\), and the \\(F\\) distribution can also be expressed as a ratio of Gamma variables. At the core of this entire distribution network is the normal distribution — through the CLT, it is the asymptotic limit of all distributions with finite variance.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'distribution-relationships',
                    title: 'Interactive: Distribution Relationship Network',
                    description: 'Explore the limiting and transformation relationships between distributions',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 440,
                            scale: 1, originX: 0, originY: 0
                        });

                        var selectedEdge = -1;
                        var animProgress = 0;
                        var animating = false;

                        // Node positions (px coords)
                        var nodes = [
                            { name: 'Bernoulli', x: 80,  y: 60,  color: viz.colors.blue },
                            { name: 'Binomial',  x: 200, y: 60,  color: viz.colors.blue },
                            { name: 'Poisson',   x: 350, y: 60,  color: viz.colors.blue },
                            { name: 'Geometric',  x: 80, y: 150, color: viz.colors.blue },
                            { name: 'NegBin',    x: 200, y: 150, color: viz.colors.blue },
                            { name: 'Normal',    x: 350, y: 180, color: viz.colors.orange },
                            { name: 'Exp',       x: 80,  y: 260, color: viz.colors.teal },
                            { name: 'Gamma',     x: 200, y: 260, color: viz.colors.teal },
                            { name: 'Chi-sq',    x: 350, y: 280, color: viz.colors.purple },
                            { name: 'Beta',      x: 80,  y: 370, color: viz.colors.green },
                            { name: 'Uniform',   x: 200, y: 370, color: viz.colors.green },
                            { name: 't',         x: 430, y: 180, color: viz.colors.purple },
                            { name: 'F',         x: 480, y: 280, color: viz.colors.purple },
                            { name: 'Cauchy',    x: 500, y: 120, color: viz.colors.red }
                        ];

                        // Edges: [from, to, label, type]
                        var edges = [
                            [0, 1, 'sum of n', 'transform'],
                            [1, 2, 'n->inf, np->lam', 'limit'],
                            [1, 5, 'CLT', 'limit'],
                            [0, 3, 'first success', 'transform'],
                            [3, 4, 'r-th success', 'transform'],
                            [6, 7, 'alpha=1', 'special'],
                            [7, 8, 'alpha=k/2, beta=1/2', 'special'],
                            [5, 8, 'Z^2 -> chi(1)', 'transform'],
                            [5, 11, 'Z/sqrt(Q/nu)', 'transform'],
                            [8, 12, 'ratio', 'transform'],
                            [8, 11, 'Z/sqrt(Q/nu)', 'transform'],
                            [11, 5, 'nu -> inf', 'limit'],
                            [11, 12, 'T^2 ~ F(1,nu)', 'transform'],
                            [11, 13, 'nu=1', 'special'],
                            [9, 10, 'a=b=1', 'special']
                        ];

                        function drawNetwork() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Distribution Relationship Network', 280, 420);

                            // Draw edges
                            edges.forEach(function(edge, idx) {
                                var fromN = nodes[edge[0]];
                                var toN = nodes[edge[1]];
                                var isSelected = (idx === selectedEdge);

                                var edgeColor;
                                if (edge[3] === 'limit') edgeColor = viz.colors.orange;
                                else if (edge[3] === 'special') edgeColor = viz.colors.green;
                                else edgeColor = viz.colors.blue;

                                ctx.strokeStyle = isSelected ? viz.colors.white : (edgeColor + '88');
                                ctx.lineWidth = isSelected ? 2.5 : 1.2;

                                if (edge[3] === 'limit') {
                                    ctx.setLineDash([5, 3]);
                                } else {
                                    ctx.setLineDash([]);
                                }

                                ctx.beginPath();
                                ctx.moveTo(fromN.x, fromN.y);
                                ctx.lineTo(toN.x, toN.y);
                                ctx.stroke();
                                ctx.setLineDash([]);

                                // Arrow head
                                var dx = toN.x - fromN.x;
                                var dy = toN.y - fromN.y;
                                var len = Math.sqrt(dx * dx + dy * dy);
                                var ux = dx / len, uy = dy / len;
                                var ax = toN.x - ux * 20, ay = toN.y - uy * 20;
                                ctx.fillStyle = isSelected ? viz.colors.white : (edgeColor + '88');
                                ctx.beginPath();
                                ctx.moveTo(toN.x - ux * 15, toN.y - uy * 15);
                                ctx.lineTo(ax - uy * 5, ay + ux * 5);
                                ctx.lineTo(ax + uy * 5, ay - ux * 5);
                                ctx.closePath();
                                ctx.fill();

                                // Edge label
                                if (isSelected) {
                                    var mx = (fromN.x + toN.x) / 2;
                                    var my = (fromN.y + toN.y) / 2;
                                    ctx.fillStyle = viz.colors.yellow;
                                    ctx.font = 'bold 11px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'middle';
                                    ctx.fillText(edge[2], mx, my - 10);
                                }
                            });

                            // Draw nodes
                            nodes.forEach(function(node) {
                                ctx.fillStyle = node.color + '33';
                                ctx.beginPath();
                                ctx.arc(node.x, node.y, 22, 0, Math.PI * 2);
                                ctx.fill();
                                ctx.strokeStyle = node.color;
                                ctx.lineWidth = 2;
                                ctx.stroke();

                                ctx.fillStyle = viz.colors.white;
                                ctx.font = 'bold 11px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(node.name, node.x, node.y);
                            });

                            // Legend
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'middle';

                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('--- Limit', 15, 410);
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('--- Transform', 120, 410);
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('--- Special case', 250, 410);
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('Click edges to see labels', 400, 410);
                        }

                        // Click to select edges
                        viz.canvas.addEventListener('click', function(e) {
                            var rect = viz.canvas.getBoundingClientRect();
                            var mx = e.clientX - rect.left;
                            var my = e.clientY - rect.top;

                            var closestIdx = -1;
                            var closestDist = 15; // threshold

                            edges.forEach(function(edge, idx) {
                                var fromN = nodes[edge[0]];
                                var toN = nodes[edge[1]];
                                // Point-to-segment distance
                                var dx = toN.x - fromN.x, dy = toN.y - fromN.y;
                                var len2 = dx * dx + dy * dy;
                                var t = Math.max(0, Math.min(1, ((mx - fromN.x) * dx + (my - fromN.y) * dy) / len2));
                                var projX = fromN.x + t * dx, projY = fromN.y + t * dy;
                                var dist = Math.sqrt((mx - projX) * (mx - projX) + (my - projY) * (my - projY));
                                if (dist < closestDist) {
                                    closestDist = dist;
                                    closestIdx = idx;
                                }
                            });

                            selectedEdge = (selectedEdge === closestIdx) ? -1 : closestIdx;
                            drawNetwork();
                        });

                        // Animated demo button
                        VizEngine.createButton(controls, 'Animate: Binomial -> Poisson', function() {
                            if (animating) return;
                            animating = true;
                            var nVals = [5, 10, 20, 50, 100, 200];
                            var step = 0;
                            var lambda = 3;

                            function animStep() {
                                if (step >= nVals.length) {
                                    animating = false;
                                    drawNetwork();
                                    return;
                                }
                                var n = nVals[step];
                                var p = lambda / n;
                                viz.clear();
                                var ctx = viz.ctx;

                                ctx.fillStyle = viz.colors.white;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('Bin(' + n + ', ' + p.toFixed(4) + ')  vs  Poisson(' + lambda + ')', 280, 25);

                                var maxK = Math.min(15, n);
                                var barW = Math.min(30, 460 / (maxK + 1));

                                for (var k = 0; k <= maxK; k++) {
                                    var binP = VizEngine.binomialPMF(k, n, p);
                                    var poisP = VizEngine.poissonPMF(k, lambda);

                                    var barX = 50 + k * (barW + 2);
                                    var binH = binP * 1200;
                                    var poisH = poisP * 1200;

                                    // Binomial bar
                                    ctx.fillStyle = viz.colors.blue + '77';
                                    ctx.fillRect(barX, 400 - binH, barW / 2, binH);

                                    // Poisson bar
                                    ctx.fillStyle = viz.colors.orange + '77';
                                    ctx.fillRect(barX + barW / 2, 400 - poisH, barW / 2, poisH);

                                    ctx.fillStyle = viz.colors.text;
                                    ctx.font = '10px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.fillText(k.toString(), barX + barW / 2, 415);
                                }

                                // Legend
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillStyle = viz.colors.blue;
                                ctx.fillText('Binomial', 420, 50);
                                ctx.fillStyle = viz.colors.orange;
                                ctx.fillText('Poisson', 420, 68);

                                step++;
                                setTimeout(animStep, 1200);
                            }

                            animStep();
                        });

                        VizEngine.createButton(controls, 'Animate: t(nu) -> N(0,1)', function() {
                            if (animating) return;
                            animating = true;
                            var nuVals = [1, 2, 3, 5, 10, 30, 100];
                            var step = 0;

                            function animStep() {
                                if (step >= nuVals.length) {
                                    animating = false;
                                    drawNetwork();
                                    return;
                                }
                                var nu = nuVals[step];
                                viz.clear();
                                var ctx = viz.ctx;

                                // Use custom coordinate system for this animation
                                var cOX = 280, cOY = 320, cScale = 50;

                                // Grid
                                ctx.strokeStyle = viz.colors.grid;
                                ctx.lineWidth = 0.5;
                                for (var x = -5; x <= 5; x++) {
                                    var sx = cOX + x * cScale;
                                    ctx.beginPath(); ctx.moveTo(sx, 0); ctx.lineTo(sx, 440); ctx.stroke();
                                }

                                // Axes
                                ctx.strokeStyle = viz.colors.axis;
                                ctx.lineWidth = 1.5;
                                ctx.beginPath(); ctx.moveTo(0, cOY); ctx.lineTo(560, cOY); ctx.stroke();

                                // Normal reference
                                ctx.strokeStyle = viz.colors.orange;
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                for (var i = 0; i <= 200; i++) {
                                    var x = -5 + 10 * i / 200;
                                    var y = VizEngine.normalPDF(x, 0, 1);
                                    var sx = cOX + x * cScale;
                                    var sy = cOY - y * cScale * 8;
                                    i === 0 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
                                }
                                ctx.stroke();

                                // t curve
                                ctx.strokeStyle = viz.colors.blue;
                                ctx.lineWidth = 2.5;
                                ctx.beginPath();
                                for (var i = 0; i <= 200; i++) {
                                    var x = -5 + 10 * i / 200;
                                    var y = VizEngine.tPDF(x, nu);
                                    var sx = cOX + x * cScale;
                                    var sy = cOY - y * cScale * 8;
                                    i === 0 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
                                }
                                ctx.stroke();

                                ctx.fillStyle = viz.colors.white;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('t(' + nu + ')  vs  N(0,1)', 280, 25);

                                ctx.fillStyle = viz.colors.blue;
                                ctx.font = '12px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('t(' + nu + ')', 440, 50);
                                ctx.fillStyle = viz.colors.orange;
                                ctx.fillText('N(0,1)', 440, 68);

                                step++;
                                setTimeout(animStep, 1200);
                            }

                            animStep();
                        });

                        drawNetwork();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Rigorously prove the Poisson Approximation Theorem: when \\(n \\to \\infty\\), \\(p_n \\to 0\\), \\(np_n \\to \\lambda\\), we have \\(\\binom{n}{k} p_n^k (1-p_n)^{n-k} \\to \\frac{\\lambda^k e^{-\\lambda}}{k!}\\).',
                    hint: 'Analyze the limiting behavior of \\(\\frac{n!}{(n-k)! n^k}\\) and \\((1 - \\lambda/n)^n\\) separately.',
                    solution: 'Set \\(p_n = \\lambda/n\\). \\(\\binom{n}{k}p_n^k(1-p_n)^{n-k} = \\frac{n(n-1)\\cdots(n-k+1)}{n^k} \\cdot \\frac{\\lambda^k}{k!} \\cdot (1-\\lambda/n)^n \\cdot (1-\\lambda/n)^{-k}\\). As \\(n \\to \\infty\\): the first factor \\(\\to 1\\) (a product of \\(k\\) factors each tending to 1), the third factor \\(\\to e^{-\\lambda}\\), the fourth factor \\(\\to 1\\). The limit is \\(\\frac{\\lambda^k e^{-\\lambda}}{k!}\\).'
                },
                {
                    question: 'Prove that if \\(X_1 \\sim \\operatorname{Gamma}(a, 1)\\) and \\(X_2 \\sim \\operatorname{Gamma}(b, 1)\\) are independent, then \\(Y = \\frac{X_1}{X_1 + X_2} \\sim \\operatorname{Beta}(a, b)\\).',
                    hint: 'Apply the transformation \\(Y = X_1/(X_1+X_2), W = X_1+X_2\\), compute the Jacobian, then integrate out \\(W\\).',
                    solution: 'Under the transformation \\(Y = X_1/(X_1+X_2), W = X_1+X_2\\), we have \\(X_1 = YW, X_2 = (1-Y)W\\), with Jacobian \\(|J| = W\\). The joint density is \\(f_{Y,W}(y,w) = \\frac{1}{\\Gamma(a)\\Gamma(b)} (yw)^{a-1}((1-y)w)^{b-1} e^{-w} \\cdot w\\). Integrating over \\(w\\) from 0 to \\(\\infty\\) and using \\(\\int_0^{\\infty} w^{a+b-1} e^{-w} dw = \\Gamma(a+b)\\), we obtain \\(f_Y(y) = \\frac{\\Gamma(a+b)}{\\Gamma(a)\\Gamma(b)} y^{a-1}(1-y)^{b-1}\\), which is the Beta(a,b) density.'
                },
                {
                    question: 'Let \\(Z_1, \\ldots, Z_n \\overset{iid}{\\sim} N(0,1)\\). Prove that \\(\\bar{Z}\\) and \\(\\sum_{i=1}^n (Z_i - \\bar{Z})^2\\) are independent.',
                    hint: 'Use an orthogonal transformation. Construct an orthogonal matrix \\(A\\) with first row \\((1/\\sqrt{n}, \\ldots, 1/\\sqrt{n})\\), so that the components of \\(Y = AZ\\) are independent.',
                    solution: 'Let \\(A\\) be an orthogonal matrix with first row \\(n^{-1/2}(1,\\ldots,1)\\). Define \\(Y = AZ\\). Then \\(Y \\sim N(0, I_n)\\) (orthogonal transformations preserve i.i.d. standard normal structure). We have \\(Y_1 = \\sqrt{n}\\bar{Z}\\), and \\(\\sum(Z_i - \\bar{Z})^2 = \\sum Z_i^2 - n\\bar{Z}^2 = \\|Y\\|^2 - Y_1^2 = \\sum_{j=2}^n Y_j^2\\). Since \\(Y_1, Y_2, \\ldots, Y_n\\) are independent, \\(Y_1\\) (a function of \\(\\bar{Z}\\)) and \\(\\sum_{j=2}^n Y_j^2\\) (which equals \\(\\sum(Z_i-\\bar{Z})^2\\)) are independent.'
                }
            ]
        }
    ]
});

window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch01',
    number: 1,
    title: '常见分布族',
    subtitle: 'Common Distribution Families',
    sections: [
        // ===== Section 1: Discrete Distributions =====
        {
            id: 'ch01-sec01',
            title: '离散分布',
            content: `
                <h2>离散分布 Discrete Distributions</h2>

                <p>本节系统介绍统计学中最常用的离散分布族。对每个分布，我们给出其概率质量函数 (PMF)、期望、方差和矩母函数 (MGF)。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.1 (Bernoulli 分布)</div>
                    <div class="env-body">
                        <p>随机变量 \\(X\\) 服从 <strong>Bernoulli 分布</strong>，记作 \\(X \\sim \\operatorname{Bernoulli}(p)\\)，若</p>
                        \\[P(X = x) = p^x (1-p)^{1-x}, \quad x \\in \\{0, 1\\}\\]
                        <p>其中 \\(0 < p < 1\\)。期望 \\(\\mathbb{E}[X] = p\\)，方差 \\(\\operatorname{Var}(X) = p(1-p)\\)，MGF \\(M_X(t) = 1 - p + pe^t\\)。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.2 (二项分布)</div>
                    <div class="env-body">
                        <p>若 \\(X_1, \\ldots, X_n\\) 是独立同分布的 \\(\\operatorname{Bernoulli}(p)\\) 随机变量，则 \\(S_n = \\sum_{i=1}^{n} X_i\\) 服从<strong>二项分布</strong>，记作 \\(S_n \\sim \\operatorname{Bin}(n, p)\\)，其 PMF 为</p>
                        \\[P(S_n = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \quad k = 0, 1, \\ldots, n\\]
                        <p>期望 \\(\\mathbb{E}[S_n] = np\\)，方差 \\(\\operatorname{Var}(S_n) = np(1-p)\\)，MGF \\(M_{S_n}(t) = (1-p+pe^t)^n\\)。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.3 (Poisson 分布)</div>
                    <div class="env-body">
                        <p>随机变量 \\(X\\) 服从 <strong>Poisson 分布</strong>，记作 \\(X \\sim \\operatorname{Poisson}(\\lambda)\\)，若</p>
                        \\[P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \quad k = 0, 1, 2, \\ldots\\]
                        <p>其中 \\(\\lambda > 0\\)。期望 \\(\\mathbb{E}[X] = \\lambda\\)，方差 \\(\\operatorname{Var}(X) = \\lambda\\)，MGF \\(M_X(t) = \\exp\\{\\lambda(e^t - 1)\\}\\)。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Poisson 分布可以看作二项分布在 \\(n \\to \\infty\\), \\(p \\to 0\\), \\(np \\to \\lambda\\) 条件下的极限。这使得 Poisson 分布特别适合描述"稀有事件"——在大量独立试验中，每次成功概率极小，但成功总数保持有限。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.4 (几何分布)</div>
                    <div class="env-body">
                        <p>随机变量 \\(X\\) 服从<strong>几何分布</strong>，记作 \\(X \\sim \\operatorname{Geom}(p)\\)，若 \\(X\\) 表示首次成功所需的试验次数：</p>
                        \\[P(X = k) = (1-p)^{k-1} p, \quad k = 1, 2, 3, \\ldots\\]
                        <p>期望 \\(\\mathbb{E}[X] = 1/p\\)，方差 \\(\\operatorname{Var}(X) = (1-p)/p^2\\)。几何分布是唯一具有<strong>无记忆性</strong>的离散分布：\\(P(X > s + t \\mid X > s) = P(X > t)\\)。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.5 (负二项分布)</div>
                    <div class="env-body">
                        <p>随机变量 \\(X\\) 服从<strong>负二项分布</strong>，记作 \\(X \\sim \\operatorname{NegBin}(r, p)\\)，若 \\(X\\) 表示第 \\(r\\) 次成功所需的总试验次数：</p>
                        \\[P(X = k) = \\binom{k-1}{r-1} p^r (1-p)^{k-r}, \quad k = r, r+1, r+2, \\ldots\\]
                        <p>期望 \\(\\mathbb{E}[X] = r/p\\)，方差 \\(\\operatorname{Var}(X) = r(1-p)/p^2\\)。当 \\(r=1\\) 时退化为几何分布。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.6 (超几何分布)</div>
                    <div class="env-body">
                        <p>从含有 \\(N\\) 个元素（其中 \\(K\\) 个为"成功"类）的总体中<strong>不放回抽样</strong> \\(n\\) 个，成功个数 \\(X\\) 服从<strong>超几何分布</strong>：</p>
                        \\[P(X = k) = \\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}, \quad k = \\max(0, n+K-N), \\ldots, \\min(n, K)\\]
                        <p>期望 \\(\\mathbb{E}[X] = nK/N\\)，方差 \\(\\operatorname{Var}(X) = n \\frac{K}{N} \\frac{N-K}{N} \\frac{N-n}{N-1}\\)。当 \\(N \\to \\infty\\) 且 \\(K/N \\to p\\) 时，超几何分布趋近于 \\(\\operatorname{Bin}(n, p)\\)。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>超几何分布与二项分布的区别在于是否放回：不放回抽样导致了方差中的有限总体修正因子 \\(\\frac{N-n}{N-1}\\)，也称为<strong>finite population correction</strong>。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="discrete-pmf-explorer"></div>
            `,
            visualizations: [
                {
                    id: 'discrete-pmf-explorer',
                    title: 'Interactive: 离散分布 PMF 探索器',
                    description: '选择分布类型并调节参数，观察 PMF 的变化',
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
                    question: '设 \\(X \\sim \\operatorname{Bin}(n, p)\\)。证明 \\(\\mathbb{E}[X] = np\\)。',
                    hint: '利用 \\(X = \\sum_{i=1}^{n} X_i\\)，其中 \\(X_i \\sim \\operatorname{Bernoulli}(p)\\) 独立同分布，再由期望的线性性求和。',
                    solution: '由 \\(X = \\sum_{i=1}^{n} X_i\\) 其中 \\(X_i\\) 独立且 \\(\\mathbb{E}[X_i] = p\\)，由期望线性性 \\(\\mathbb{E}[X] = \\sum_{i=1}^{n} \\mathbb{E}[X_i] = np\\)。'
                },
                {
                    question: '证明几何分布的无记忆性：若 \\(X \\sim \\operatorname{Geom}(p)\\)，则 \\(P(X > s+t \\mid X > s) = P(X > t)\\)。',
                    hint: '先计算 \\(P(X > k) = (1-p)^k\\)，然后利用条件概率的定义。',
                    solution: '\\(P(X > k) = \\sum_{j=k+1}^{\\infty}(1-p)^{j-1}p = (1-p)^k\\)。因此 \\(P(X > s+t \\mid X > s) = \\frac{P(X > s+t)}{P(X > s)} = \\frac{(1-p)^{s+t}}{(1-p)^s} = (1-p)^t = P(X > t)\\)。'
                },
                {
                    question: '设 \\(X \\sim \\operatorname{Poisson}(\\lambda)\\)。求 \\(\\mathbb{E}[X(X-1)]\\)，并由此推导 \\(\\operatorname{Var}(X) = \\lambda\\)。',
                    hint: '利用阶乘矩 \\(\\mathbb{E}[X(X-1)] = \\sum_{k=2}^{\\infty} k(k-1) \\frac{\\lambda^k e^{-\\lambda}}{k!}\\)，化简后提出 \\(\\lambda^2\\)。',
                    solution: '\\(\\mathbb{E}[X(X-1)] = \\sum_{k=2}^{\\infty} k(k-1)\\frac{\\lambda^k e^{-\\lambda}}{k!} = \\lambda^2 \\sum_{j=0}^{\\infty} \\frac{\\lambda^j e^{-\\lambda}}{j!} = \\lambda^2\\)。因此 \\(\\mathbb{E}[X^2] = \\lambda^2 + \\lambda\\)，于是 \\(\\operatorname{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2 = \\lambda^2 + \\lambda - \\lambda^2 = \\lambda\\)。'
                }
            ]
        },

        // ===== Section 2: Continuous Distributions =====
        {
            id: 'ch01-sec02',
            title: '连续分布',
            content: `
                <h2>连续分布 Continuous Distributions</h2>

                <p>连续随机变量的分布由概率密度函数 (PDF) 刻画。本节介绍三个最基本的连续分布族：均匀分布、指数分布和正态分布。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.7 (均匀分布)</div>
                    <div class="env-body">
                        <p>随机变量 \\(X\\) 服从 \\([a, b]\\) 上的<strong>均匀分布</strong>，记作 \\(X \\sim \\operatorname{Uniform}(a, b)\\)，若</p>
                        \\[f(x) = \\frac{1}{b-a}, \quad a \\le x \\le b\\]
                        <p>CDF: \\(F(x) = \\frac{x-a}{b-a}\\) for \\(x \\in [a, b]\\)。期望 \\(\\mathbb{E}[X] = \\frac{a+b}{2}\\)，方差 \\(\\operatorname{Var}(X) = \\frac{(b-a)^2}{12}\\)。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.8 (指数分布)</div>
                    <div class="env-body">
                        <p>随机变量 \\(X\\) 服从<strong>指数分布</strong>，记作 \\(X \\sim \\operatorname{Exp}(\\lambda)\\)（\\(\\lambda > 0\\)），若</p>
                        \\[f(x) = \\lambda e^{-\\lambda x}, \quad x \\ge 0\\]
                        <p>CDF: \\(F(x) = 1 - e^{-\\lambda x}\\)。期望 \\(\\mathbb{E}[X] = 1/\\lambda\\)，方差 \\(\\operatorname{Var}(X) = 1/\\lambda^2\\)，MGF \\(M_X(t) = \\frac{\\lambda}{\\lambda - t}\\) for \\(t < \\lambda\\)。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.9 (指数分布的无记忆性)</div>
                    <div class="env-body">
                        <p>设 \\(X \\sim \\operatorname{Exp}(\\lambda)\\)，则对任意 \\(s, t > 0\\)，</p>
                        \\[P(X > s + t \\mid X > s) = P(X > t) = e^{-\\lambda t}\\]
                        <p>而且指数分布是唯一具有无记忆性的连续分布。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>\\(P(X > s+t \\mid X > s) = \\frac{P(X > s+t)}{P(X > s)} = \\frac{e^{-\\lambda(s+t)}}{e^{-\\lambda s}} = e^{-\\lambda t} = P(X > t)\\)。</p>
                        <p>反之，若连续随机变量 \\(X \\ge 0\\) 满足无记忆性，令 \\(g(t) = P(X > t)\\)，则 \\(g(s+t) = g(s)g(t)\\)，由连续性可知 \\(g(t) = e^{-\\lambda t}\\) 对某个 \\(\\lambda > 0\\)，故 \\(X \\sim \\operatorname{Exp}(\\lambda)\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.10 (正态分布 / 高斯分布)</div>
                    <div class="env-body">
                        <p>随机变量 \\(X\\) 服从<strong>正态分布</strong>，记作 \\(X \\sim N(\\mu, \\sigma^2)\\)，若其 PDF 为</p>
                        \\[f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} \\exp\\left\\{-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right\\}, \quad x \\in \\mathbb{R}\\]
                        <p>期望 \\(\\mathbb{E}[X] = \\mu\\)，方差 \\(\\operatorname{Var}(X) = \\sigma^2\\)，MGF \\(M_X(t) = \\exp\\{\\mu t + \\sigma^2 t^2/2\\}\\)。</p>
                        <p>当 \\(\\mu = 0, \\sigma = 1\\) 时，称为<strong>标准正态分布</strong>，其 PDF 和 CDF 分别记作 \\(\\varphi(x)\\) 和 \\(\\Phi(x)\\)。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>正态分布在统计学中居于核心地位，原因至少有三：(1) 中心极限定理保证了独立随机变量之和（适当标准化后）趋近于正态分布；(2) 正态分布是在给定均值和方差条件下具有最大熵的分布（即"最不确定"的分布）；(3) 正态分布族在仿射变换下封闭：\\(aX + b \\sim N(a\\mu + b, a^2\\sigma^2)\\)。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 1.11</div>
                    <div class="env-body">
                        <p>设 \\(X \\sim N(\\mu, \\sigma^2)\\)，标准化变换 \\(Z = (X - \\mu)/\\sigma \\sim N(0,1)\\)。于是</p>
                        \\[P(a \\le X \\le b) = \\Phi\\left(\\frac{b-\\mu}{\\sigma}\\right) - \\Phi\\left(\\frac{a-\\mu}{\\sigma}\\right)\\]
                        <p>特别地，\\(P(\\mu - 1.96\\sigma \\le X \\le \\mu + 1.96\\sigma) \\approx 0.95\\)。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="continuous-pdf-explorer"></div>
            `,
            visualizations: [
                {
                    id: 'continuous-pdf-explorer',
                    title: 'Interactive: 连续分布 PDF 探索器',
                    description: '调节参数观察均匀、指数、正态分布的 PDF 和 CDF',
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
                    question: '设 \\(X \\sim \\operatorname{Exp}(\\lambda)\\)。计算 \\(\\mathbb{E}[X^2]\\)，并由此推导方差。',
                    hint: '用分部积分计算 \\(\\int_0^{\\infty} x^2 \\lambda e^{-\\lambda x} dx\\)。',
                    solution: '通过分部积分或利用 Gamma 积分，\\(\\mathbb{E}[X^2] = \\int_0^{\\infty} x^2 \\lambda e^{-\\lambda x} dx = \\frac{2}{\\lambda^2}\\)。因此 \\(\\operatorname{Var}(X) = \\frac{2}{\\lambda^2} - \\left(\\frac{1}{\\lambda}\\right)^2 = \\frac{1}{\\lambda^2}\\)。'
                },
                {
                    question: '若 \\(X \\sim N(0,1)\\)，证明 \\(\\mathbb{E}[X^{2k}] = (2k-1)!! = 1 \\cdot 3 \\cdot 5 \\cdots (2k-1)\\)。',
                    hint: '利用递推关系和分部积分：\\(\\mathbb{E}[X^{2k}] = (2k-1) \\mathbb{E}[X^{2k-2}]\\)。',
                    solution: '分部积分：\\(\\mathbb{E}[X^{2k}] = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^{\\infty} x^{2k} e^{-x^2/2} dx\\)。令 \\(u = x^{2k-1}, dv = x e^{-x^2/2} dx\\)，得 \\(\\mathbb{E}[X^{2k}] = (2k-1) \\mathbb{E}[X^{2k-2}]\\)。由 \\(\\mathbb{E}[X^0] = 1\\) 递推得 \\(\\mathbb{E}[X^{2k}] = (2k-1)!!\\)。'
                },
                {
                    question: '证明正态分布的 MGF 为 \\(M_X(t) = \\exp\\{\\mu t + \\sigma^2 t^2 / 2\\}\\)。',
                    hint: '先对标准正态求 MGF（配方法），再利用 \\(X = \\mu + \\sigma Z\\) 的关系。',
                    solution: '设 \\(Z \\sim N(0,1)\\)。\\(M_Z(t) = \\frac{1}{\\sqrt{2\\pi}} \\int e^{tx} e^{-x^2/2} dx = \\frac{1}{\\sqrt{2\\pi}} \\int e^{-(x-t)^2/2 + t^2/2} dx = e^{t^2/2}\\)。对 \\(X = \\mu + \\sigma Z\\)：\\(M_X(t) = e^{\\mu t} M_Z(\\sigma t) = e^{\\mu t + \\sigma^2 t^2/2}\\)。'
                }
            ]
        },

        // ===== Section 3: Gamma and Beta Families =====
        {
            id: 'ch01-sec03',
            title: 'Gamma 族与 Beta 族',
            content: `
                <h2>Gamma 族与 Beta 族</h2>

                <p>Gamma 分布和 Beta 分布是统计学中两个重要的参数族。Gamma 族涵盖了指数分布和卡方分布作为特例，Beta 族则天然地定义在 \\([0,1]\\) 上，非常适合描述概率和比例。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.12 (Gamma 函数)</div>
                    <div class="env-body">
                        <p>对 \\(\\alpha > 0\\)，<strong>Gamma 函数</strong>定义为</p>
                        \\[\\Gamma(\\alpha) = \\int_0^{\\infty} x^{\\alpha - 1} e^{-x} dx\\]
                        <p>性质：\\(\\Gamma(\\alpha + 1) = \\alpha \\Gamma(\\alpha)\\)，\\(\\Gamma(n) = (n-1)!\\) 对正整数 \\(n\\)，\\(\\Gamma(1/2) = \\sqrt{\\pi}\\)。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.13 (Gamma 分布)</div>
                    <div class="env-body">
                        <p>随机变量 \\(X\\) 服从 <strong>Gamma 分布</strong>，记作 \\(X \\sim \\operatorname{Gamma}(\\alpha, \\beta)\\)，若其 PDF 为</p>
                        \\[f(x) = \\frac{\\beta^\\alpha}{\\Gamma(\\alpha)} x^{\\alpha - 1} e^{-\\beta x}, \quad x > 0\\]
                        <p>其中 \\(\\alpha > 0\\) 为形状参数 (shape)，\\(\\beta > 0\\) 为速率参数 (rate)。</p>
                        <p>期望 \\(\\mathbb{E}[X] = \\alpha / \\beta\\)，方差 \\(\\operatorname{Var}(X) = \\alpha / \\beta^2\\)，MGF \\(M_X(t) = \\left(\\frac{\\beta}{\\beta - t}\\right)^\\alpha\\) for \\(t < \\beta\\)。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (特例关系)</div>
                    <div class="env-body">
                        <p>Gamma 分布统一了多个重要分布：</p>
                        <ul>
                            <li>\\(\\operatorname{Gamma}(1, \\lambda) = \\operatorname{Exp}(\\lambda)\\)（指数分布）</li>
                            <li>\\(\\operatorname{Gamma}(k/2, 1/2) = \\chi^2(k)\\)（卡方分布）</li>
                            <li>\\(\\operatorname{Gamma}(n, \\lambda)\\) 是 \\(n\\) 个独立 \\(\\operatorname{Exp}(\\lambda)\\) 随机变量之和的分布</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.14 (Gamma 分布的可加性)</div>
                    <div class="env-body">
                        <p>若 \\(X_1 \\sim \\operatorname{Gamma}(\\alpha_1, \\beta)\\) 和 \\(X_2 \\sim \\operatorname{Gamma}(\\alpha_2, \\beta)\\) 独立，则</p>
                        \\[X_1 + X_2 \\sim \\operatorname{Gamma}(\\alpha_1 + \\alpha_2, \\beta)\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>利用 MGF 唯一性：\\(M_{X_1+X_2}(t) = M_{X_1}(t) M_{X_2}(t) = \\left(\\frac{\\beta}{\\beta-t}\\right)^{\\alpha_1} \\left(\\frac{\\beta}{\\beta-t}\\right)^{\\alpha_2} = \\left(\\frac{\\beta}{\\beta-t}\\right)^{\\alpha_1+\\alpha_2}\\)，这恰是 \\(\\operatorname{Gamma}(\\alpha_1+\\alpha_2, \\beta)\\) 的 MGF。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="gamma-shape-explorer"></div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.15 (Beta 分布)</div>
                    <div class="env-body">
                        <p>随机变量 \\(X\\) 服从 <strong>Beta 分布</strong>，记作 \\(X \\sim \\operatorname{Beta}(a, b)\\)，若其 PDF 为</p>
                        \\[f(x) = \\frac{1}{B(a,b)} x^{a-1}(1-x)^{b-1}, \quad 0 < x < 1\\]
                        <p>其中 \\(B(a,b) = \\frac{\\Gamma(a)\\Gamma(b)}{\\Gamma(a+b)}\\) 为 Beta 函数。</p>
                        <p>期望 \\(\\mathbb{E}[X] = \\frac{a}{a+b}\\)，方差 \\(\\operatorname{Var}(X) = \\frac{ab}{(a+b)^2(a+b+1)}\\)。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Beta 分布是"分布上的分布"——当你不确定一个概率参数的值时，可以用 Beta 分布来描述你的不确定性。在 Bayesian 统计中，Beta 分布是 Bernoulli/Binomial 似然的<strong>共轭先验</strong>：若先验 \\(p \\sim \\operatorname{Beta}(a, b)\\)，观测到 \\(k\\) 次成功和 \\(n-k\\) 次失败后，后验为 \\(p \\mid \\text{data} \\sim \\operatorname{Beta}(a+k, b+n-k)\\)。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 1.16 (Beta 的特例)</div>
                    <div class="env-body">
                        <p>\\(\\operatorname{Beta}(1, 1) = \\operatorname{Uniform}(0, 1)\\)：代入 \\(a=b=1\\)，得 \\(f(x) = 1\\) on \\((0,1)\\)。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="beta-shape-explorer"></div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.17 (Cauchy 分布)</div>
                    <div class="env-body">
                        <p>随机变量 \\(X\\) 服从<strong>标准 Cauchy 分布</strong>，若其 PDF 为</p>
                        \\[f(x) = \\frac{1}{\\pi(1 + x^2)}, \quad x \\in \\mathbb{R}\\]
                        <p>更一般地，\\(X \\sim \\operatorname{Cauchy}(x_0, \\gamma)\\) 有 PDF \\(f(x) = \\frac{1}{\\pi\\gamma\\left[1 + \\left(\\frac{x-x_0}{\\gamma}\\right)^2\\right]}\\)。</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Cauchy 分布没有有限的期望和方差！\\(\\mathbb{E}[|X|] = \\int_{-\\infty}^{\\infty} \\frac{|x|}{\\pi(1+x^2)}dx = \\infty\\)。这意味着大数定律对 Cauchy 随机变量不成立——\\(n\\) 个独立 Cauchy 随机变量的样本均值仍然服从 Cauchy 分布！注意 Cauchy 分布等价于自由度 \\(\\nu = 1\\) 的 \\(t\\) 分布。</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'gamma-shape-explorer',
                    title: 'Interactive: Gamma 分布族形状探索',
                    description: '调节 alpha 和 beta 参数，观察 Gamma PDF 的形状变化',
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
                    title: 'Interactive: Beta 分布族形状探索',
                    description: '调节 a 和 b 参数，观察 Beta PDF 在 [0,1] 上的形状变化',
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
                    question: '证明 \\(\\Gamma(\\alpha + 1) = \\alpha \\Gamma(\\alpha)\\) 对所有 \\(\\alpha > 0\\) 成立。',
                    hint: '对 \\(\\Gamma(\\alpha+1) = \\int_0^{\\infty} x^{\\alpha} e^{-x} dx\\) 进行分部积分。',
                    solution: '\\(\\Gamma(\\alpha+1) = \\int_0^{\\infty} x^{\\alpha} e^{-x} dx\\)。令 \\(u = x^{\\alpha}, dv = e^{-x}dx\\)，则 \\(du = \\alpha x^{\\alpha-1}dx, v = -e^{-x}\\)。因此 \\(\\Gamma(\\alpha+1) = [-x^{\\alpha}e^{-x}]_0^{\\infty} + \\alpha \\int_0^{\\infty} x^{\\alpha-1} e^{-x} dx = 0 + \\alpha \\Gamma(\\alpha)\\)。'
                },
                {
                    question: '设 \\(X \\sim \\operatorname{Beta}(a, b)\\)。证明 \\(\\mathbb{E}[X] = \\frac{a}{a+b}\\)。',
                    hint: '利用 \\(\\mathbb{E}[X] = \\frac{1}{B(a,b)} \\int_0^1 x^a (1-x)^{b-1} dx = \\frac{B(a+1, b)}{B(a, b)}\\)，然后用 Gamma 函数展开 Beta 函数。',
                    solution: '\\(\\mathbb{E}[X] = \\frac{1}{B(a,b)} \\int_0^1 x \\cdot x^{a-1}(1-x)^{b-1} dx = \\frac{B(a+1, b)}{B(a, b)} = \\frac{\\Gamma(a+1)\\Gamma(b)}{\\Gamma(a+b+1)} \\cdot \\frac{\\Gamma(a+b)}{\\Gamma(a)\\Gamma(b)} = \\frac{a\\Gamma(a)}{(a+b)\\Gamma(a)} = \\frac{a}{a+b}\\)。'
                },
                {
                    question: '说明为什么 Cauchy 分布的期望不存在。',
                    hint: '考虑 \\(\\mathbb{E}[|X|] = \\frac{1}{\\pi} \\int_{-\\infty}^{\\infty} \\frac{|x|}{1+x^2} dx\\)，并说明此积分发散。',
                    solution: '\\(\\mathbb{E}[|X|] = \\frac{2}{\\pi} \\int_0^{\\infty} \\frac{x}{1+x^2} dx = \\frac{2}{\\pi} \\left[\\frac{1}{2} \\ln(1+x^2)\\right]_0^{\\infty} = \\infty\\)。由于 \\(\\mathbb{E}[|X|] = \\infty\\)，\\(\\mathbb{E}[X]\\) 也不存在（Lebesgue 积分要求绝对可积才有意义）。'
                }
            ]
        },

        // ===== Section 4: Sampling Distributions =====
        {
            id: 'ch01-sec04',
            title: '抽样分布',
            content: `
                <h2>抽样分布 Sampling Distributions</h2>

                <p>本节介绍三个在统计推断中至关重要的抽样分布：卡方分布、\\(t\\) 分布和 \\(F\\) 分布。这些分布由标准正态随机变量的变换得来，是置信区间和假设检验的理论基础。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.18 (卡方分布)</div>
                    <div class="env-body">
                        <p>设 \\(Z_1, \\ldots, Z_k\\) 为独立同分布的 \\(N(0,1)\\) 随机变量，则</p>
                        \\[Q = \\sum_{i=1}^k Z_i^2 \\sim \\chi^2(k)\\]
                        <p>称 \\(Q\\) 服从自由度为 \\(k\\) 的<strong>卡方分布</strong>。其 PDF 为</p>
                        \\[f(x) = \\frac{1}{2^{k/2} \\Gamma(k/2)} x^{k/2-1} e^{-x/2}, \quad x > 0\\]
                        <p>即 \\(\\chi^2(k) = \\operatorname{Gamma}(k/2, 1/2)\\)。期望 \\(\\mathbb{E}[Q] = k\\)，方差 \\(\\operatorname{Var}(Q) = 2k\\)。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.19 (卡方分布的可加性)</div>
                    <div class="env-body">
                        <p>若 \\(Q_1 \\sim \\chi^2(k_1)\\) 和 \\(Q_2 \\sim \\chi^2(k_2)\\) 独立，则</p>
                        \\[Q_1 + Q_2 \\sim \\chi^2(k_1 + k_2)\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>这是 Gamma 分布可加性 (Theorem 1.14) 的直接推论：\\(\\chi^2(k) = \\operatorname{Gamma}(k/2, 1/2)\\)，故 \\(Q_1 + Q_2 \\sim \\operatorname{Gamma}((k_1+k_2)/2, 1/2) = \\chi^2(k_1+k_2)\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.20 (Student's \\(t\\) 分布)</div>
                    <div class="env-body">
                        <p>设 \\(Z \\sim N(0,1)\\) 和 \\(Q \\sim \\chi^2(\\nu)\\) 独立，则</p>
                        \\[T = \\frac{Z}{\\sqrt{Q/\\nu}} \\sim t(\\nu)\\]
                        <p>称 \\(T\\) 服从自由度为 \\(\\nu\\) 的 <strong>Student's \\(t\\) 分布</strong>。其 PDF 为</p>
                        \\[f(x) = \\frac{\\Gamma((\\nu+1)/2)}{\\sqrt{\\nu\\pi}\\,\\Gamma(\\nu/2)} \\left(1 + \\frac{x^2}{\\nu}\\right)^{-(\\nu+1)/2}\\]
                        <p>期望 \\(\\mathbb{E}[T] = 0\\)（\\(\\nu > 1\\)），方差 \\(\\operatorname{Var}(T) = \\frac{\\nu}{\\nu-2}\\)（\\(\\nu > 2\\)）。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>\\(t\\) 分布可以理解为"方差不确定的正态分布"。在正态总体中，当方差 \\(\\sigma^2\\) 未知时，用样本标准差 \\(S\\) 代替 \\(\\sigma\\) 后，标准化统计量不再服从标准正态，而是服从 \\(t\\) 分布。\\(t\\) 分布比正态分布"尾巴更厚"（heavier tails），反映了估计方差带来的额外不确定性。当自由度 \\(\\nu \\to \\infty\\) 时，\\(t(\\nu) \\to N(0,1)\\)。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 1.21 (\\(F\\) 分布)</div>
                    <div class="env-body">
                        <p>设 \\(Q_1 \\sim \\chi^2(d_1)\\) 和 \\(Q_2 \\sim \\chi^2(d_2)\\) 独立，则</p>
                        \\[F = \\frac{Q_1/d_1}{Q_2/d_2} \\sim F(d_1, d_2)\\]
                        <p>称 \\(F\\) 服从自由度为 \\((d_1, d_2)\\) 的 <strong>\\(F\\) 分布</strong>。</p>
                        <p>期望 \\(\\mathbb{E}[F] = \\frac{d_2}{d_2 - 2}\\)（\\(d_2 > 2\\)），方差 \\(\\operatorname{Var}(F) = \\frac{2d_2^2(d_1+d_2-2)}{d_1(d_2-2)^2(d_2-4)}\\)（\\(d_2 > 4\\)）。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.22 (\\(t\\) 与 \\(F\\) 的关系)</div>
                    <div class="env-body">
                        <p>若 \\(T \\sim t(\\nu)\\)，则 \\(T^2 \\sim F(1, \\nu)\\)。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>设 \\(T = Z / \\sqrt{Q/\\nu}\\)，其中 \\(Z \\sim N(0,1)\\)，\\(Q \\sim \\chi^2(\\nu)\\) 独立。则 \\(T^2 = Z^2 / (Q/\\nu)\\)。由于 \\(Z^2 \\sim \\chi^2(1)\\)，故 \\(T^2 = \\frac{Z^2/1}{Q/\\nu} \\sim F(1, \\nu)\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sampling-dist-comparison"></div>
            `,
            visualizations: [
                {
                    id: 'sampling-dist-comparison',
                    title: 'Interactive: 抽样分布比较',
                    description: '比较 t 分布与正态分布、不同自由度的卡方和 F 分布',
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
                    question: '设 \\(X_1, \\ldots, X_n \\overset{iid}{\\sim} N(\\mu, \\sigma^2)\\)。证明 \\(\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)\\)，其中 \\(S^2 = \\frac{1}{n-1}\\sum_{i=1}^n (X_i - \\bar{X})^2\\)。',
                    hint: '将 \\(X_i - \\bar{X}\\) 标准化后写成 \\(Z_i - \\bar{Z}\\) 的形式，利用正交变换将 \\(\\sum(Z_i - \\bar{Z})^2\\) 分解为 \\(n-1\\) 个独立标准正态变量的平方和。',
                    solution: '令 \\(Z_i = (X_i - \\mu)/\\sigma \\overset{iid}{\\sim} N(0,1)\\)。则 \\(\\frac{(n-1)S^2}{\\sigma^2} = \\sum_{i=1}^n (Z_i - \\bar{Z})^2 = \\sum Z_i^2 - n\\bar{Z}^2\\)。由正交分解（如 Helmert 矩阵），\\(\\sum Z_i^2 = n\\bar{Z}^2 + \\sum_{j=1}^{n-1} W_j^2\\)，其中 \\(W_j\\) 独立且 \\(W_j \\sim N(0,1)\\)。因此 \\(\\sum (Z_i - \\bar{Z})^2 = \\sum_{j=1}^{n-1} W_j^2 \\sim \\chi^2(n-1)\\)。'
                },
                {
                    question: '证明当 \\(\\nu \\to \\infty\\) 时，\\(t(\\nu) \\to N(0,1)\\)（在分布意义下）。',
                    hint: '用大数定律说明 \\(Q/\\nu \\xrightarrow{P} 1\\)，然后用 Slutsky 定理。',
                    solution: '若 \\(Q \\sim \\chi^2(\\nu)\\)，即 \\(Q = \\sum_{i=1}^{\\nu} Z_i^2\\)，由大数定律 \\(Q/\\nu \\xrightarrow{P} \\mathbb{E}[Z_1^2] = 1\\)。因此 \\(\\sqrt{Q/\\nu} \\xrightarrow{P} 1\\)（连续映射定理）。由 Slutsky 定理，\\(T = Z / \\sqrt{Q/\\nu} \\xrightarrow{d} Z/1 = Z \\sim N(0,1)\\)。'
                },
                {
                    question: '设 \\(T \\sim t(\\nu)\\)，\\(\\nu > 2\\)。求 \\(\\operatorname{Var}(T)\\)。',
                    hint: '利用 \\(T = Z/\\sqrt{Q/\\nu}\\)，\\(\\operatorname{Var}(T) = \\mathbb{E}[T^2] = \\mathbb{E}[Z^2] \\mathbb{E}[\\nu/Q]\\)（利用独立性），然后计算 \\(\\mathbb{E}[1/Q]\\) 对 \\(Q \\sim \\chi^2(\\nu)\\)。',
                    solution: '由独立性 \\(\\mathbb{E}[T^2] = \\mathbb{E}[Z^2] \\cdot \\mathbb{E}[\\nu/Q]\\)。\\(\\mathbb{E}[Z^2]=1\\)。对 \\(Q \\sim \\chi^2(\\nu) = \\operatorname{Gamma}(\\nu/2, 1/2)\\)：\\(\\mathbb{E}[1/Q] = \\frac{1}{\\nu - 2}\\)（利用逆矩公式：\\(\\mathbb{E}[Q^{-1}] = \\frac{(1/2)}{\\nu/2-1} = \\frac{1}{\\nu-2}\\) 当 \\(\\nu > 2\\)）。因此 \\(\\operatorname{Var}(T) = 1 \\cdot \\frac{\\nu}{\\nu-2} = \\frac{\\nu}{\\nu-2}\\)。'
                }
            ]
        },

        // ===== Section 5: Relationships Between Distributions =====
        {
            id: 'ch01-sec05',
            title: '分布间关系',
            content: `
                <h2>分布间关系 Relationships Between Distributions</h2>

                <p>统计分布并非孤立存在——它们之间通过极限、变换和特例关系紧密联系。理解这些关系是掌握统计推断的关键。</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.23 (Poisson 逼近)</div>
                    <div class="env-body">
                        <p>设 \\(X_n \\sim \\operatorname{Bin}(n, p_n)\\)，且 \\(np_n \\to \\lambda > 0\\)，则对每个固定的 \\(k \\ge 0\\)，</p>
                        \\[P(X_n = k) \\to \\frac{\\lambda^k e^{-\\lambda}}{k!} \quad (n \\to \\infty)\\]
                        <p>即 \\(X_n \\xrightarrow{d} \\operatorname{Poisson}(\\lambda)\\)。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>令 \\(p_n = \\lambda/n\\)。则</p>
                        \\[\\binom{n}{k} p_n^k (1-p_n)^{n-k} = \\frac{n!}{k!(n-k)!} \\frac{\\lambda^k}{n^k} \\left(1 - \\frac{\\lambda}{n}\\right)^{n-k}\\]
                        <p>当 \\(n \\to \\infty\\) 时，\\(\\frac{n!}{(n-k)! n^k} \\to 1\\)（共 \\(k\\) 项之积，每项趋于 1），\\(\\left(1-\\frac{\\lambda}{n}\\right)^n \\to e^{-\\lambda}\\)，\\(\\left(1-\\frac{\\lambda}{n}\\right)^{-k} \\to 1\\)。因此极限为 \\(\\frac{\\lambda^k e^{-\\lambda}}{k!}\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 1.24 (De Moivre-Laplace 定理 — CLT 预览)</div>
                    <div class="env-body">
                        <p>设 \\(X_n \\sim \\operatorname{Bin}(n, p)\\)，\\(0 < p < 1\\) 固定，则</p>
                        \\[\\frac{X_n - np}{\\sqrt{np(1-p)}} \\xrightarrow{d} N(0, 1) \quad (n \\to \\infty)\\]
                        <p>这是中心极限定理 (CLT) 在二项分布上的特例。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (分布关系总览)</div>
                    <div class="env-body">
                        <p>以下是本章涉及的主要分布关系：</p>
                        <ul>
                            <li><strong>特例关系</strong>：
                                \\(\\operatorname{Gamma}(1, \\lambda) = \\operatorname{Exp}(\\lambda)\\)，
                                \\(\\operatorname{Gamma}(k/2, 1/2) = \\chi^2(k)\\)，
                                \\(\\operatorname{Beta}(1,1) = \\operatorname{Uniform}(0,1)\\)，
                                \\(t(1) = \\operatorname{Cauchy}\\)
                            </li>
                            <li><strong>极限关系</strong>：
                                \\(\\operatorname{Bin}(n, \\lambda/n) \\to \\operatorname{Poisson}(\\lambda)\\)，
                                \\(\\operatorname{Bin}(n, p) \\xrightarrow{\\text{CLT}} N(np, np(1-p))\\)，
                                \\(t(\\nu) \\to N(0,1)\\) as \\(\\nu \\to \\infty\\)
                            </li>
                            <li><strong>变换关系</strong>：
                                \\(T^2 \\sim F(1, \\nu)\\) if \\(T \\sim t(\\nu)\\)，
                                \\(Z^2 \\sim \\chi^2(1)\\) if \\(Z \\sim N(0,1)\\)
                            </li>
                            <li><strong>可加性</strong>：
                                \\(\\chi^2(k_1) + \\chi^2(k_2) = \\chi^2(k_1+k_2)\\)，
                                \\(\\operatorname{Gamma}(\\alpha_1,\\beta) + \\operatorname{Gamma}(\\alpha_2,\\beta) = \\operatorname{Gamma}(\\alpha_1+\\alpha_2,\\beta)\\)
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 1.25</div>
                    <div class="env-body">
                        <p>设 \\(X \\sim \\operatorname{Bin}(100, 0.05)\\)。精确计算 \\(P(X = 3)\\) 比较繁琐，但用 Poisson 逼近（\\(\\lambda = 5\\)）：</p>
                        \\[P(X = 3) \\approx \\frac{5^3 e^{-5}}{3!} = \\frac{125 e^{-5}}{6} \\approx 0.1404\\]
                        <p>精确值为 \\(\\binom{100}{3}(0.05)^3(0.95)^{97} \\approx 0.1396\\)，逼近效果良好。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="distribution-relationships"></div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (分布谱系的统一视角)</div>
                    <div class="env-body">
                        <p>可以将 Gamma 族看作连续分布的"骨干"：它统一了指数分布（等待第一个事件）、卡方分布（正态平方和）、乃至 Erlang 分布（等待第 \\(k\\) 个事件）。Beta 族则通过 \\(\\operatorname{Beta}(a,b) = \\frac{\\operatorname{Gamma}(a)}{\\operatorname{Gamma}(a) + \\operatorname{Gamma}(b)}\\) 与 Gamma 族联系，\\(F\\) 分布也可以用 Gamma 变量的比表示。整个分布网络的核心是正态分布——通过 CLT，它是所有有限方差分布的渐近极限。</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'distribution-relationships',
                    title: 'Interactive: 分布间关系网络',
                    description: '探索分布之间的极限和变换关系',
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
                    question: '严格证明 Poisson 逼近定理：当 \\(n \\to \\infty\\), \\(p_n \\to 0\\), \\(np_n \\to \\lambda\\) 时，\\(\\binom{n}{k} p_n^k (1-p_n)^{n-k} \\to \\frac{\\lambda^k e^{-\\lambda}}{k!}\\)。',
                    hint: '分析 \\(\\frac{n!}{(n-k)! n^k}\\) 和 \\((1 - \\lambda/n)^n\\) 两部分的极限行为。',
                    solution: '令 \\(p_n = \\lambda/n\\)。\\(\\binom{n}{k}p_n^k(1-p_n)^{n-k} = \\frac{n(n-1)\\cdots(n-k+1)}{n^k} \\cdot \\frac{\\lambda^k}{k!} \\cdot (1-\\lambda/n)^n \\cdot (1-\\lambda/n)^{-k}\\)。当 \\(n \\to \\infty\\)：第一因子 \\(\\to 1\\)（\\(k\\) 个趋于 1 的因子之积），第三因子 \\(\\to e^{-\\lambda}\\)，第四因子 \\(\\to 1\\)。极限为 \\(\\frac{\\lambda^k e^{-\\lambda}}{k!}\\)。'
                },
                {
                    question: '证明若 \\(X_1 \\sim \\operatorname{Gamma}(a, 1)\\) 和 \\(X_2 \\sim \\operatorname{Gamma}(b, 1)\\) 独立，则 \\(Y = \\frac{X_1}{X_1 + X_2} \\sim \\operatorname{Beta}(a, b)\\)。',
                    hint: '做变换 \\(Y = X_1/(X_1+X_2), W = X_1+X_2\\)，计算 Jacobian，然后对 \\(W\\) 积分消元。',
                    solution: '变换 \\(Y = X_1/(X_1+X_2), W = X_1+X_2\\)，则 \\(X_1 = YW, X_2 = (1-Y)W\\)，Jacobian \\(|J| = W\\)。联合密度 \\(f_{Y,W}(y,w) = \\frac{1}{\\Gamma(a)\\Gamma(b)} (yw)^{a-1}((1-y)w)^{b-1} e^{-w} \\cdot w\\)。对 \\(w\\) 从 0 到 \\(\\infty\\) 积分，利用 \\(\\int_0^{\\infty} w^{a+b-1} e^{-w} dw = \\Gamma(a+b)\\)，得 \\(f_Y(y) = \\frac{\\Gamma(a+b)}{\\Gamma(a)\\Gamma(b)} y^{a-1}(1-y)^{b-1}\\)，即 Beta(a,b) 的密度。'
                },
                {
                    question: '设 \\(Z_1, \\ldots, Z_n \\overset{iid}{\\sim} N(0,1)\\)。证明 \\(\\bar{Z}\\) 与 \\(\\sum_{i=1}^n (Z_i - \\bar{Z})^2\\) 独立。',
                    hint: '利用正交变换。构造正交矩阵 \\(A\\)，第一行为 \\((1/\\sqrt{n}, \\ldots, 1/\\sqrt{n})\\)，使得 \\(Y = AZ\\) 的分量独立。',
                    solution: '令 \\(A\\) 为正交矩阵，第一行为 \\(n^{-1/2}(1,\\ldots,1)\\)。定义 \\(Y = AZ\\)，则 \\(Y \\sim N(0, I_n)\\)（正交变换保持独立标准正态性）。\\(Y_1 = \\sqrt{n}\\bar{Z}\\)，而 \\(\\sum(Z_i - \\bar{Z})^2 = \\sum Z_i^2 - n\\bar{Z}^2 = \\|Y\\|^2 - Y_1^2 = \\sum_{j=2}^n Y_j^2\\)。由于 \\(Y_1, Y_2, \\ldots, Y_n\\) 独立，\\(Y_1\\)（即 \\(\\bar{Z}\\) 的函数）与 \\(\\sum_{j=2}^n Y_j^2\\)（即 \\(\\sum(Z_i-\\bar{Z})^2\\)）独立。'
                }
            ]
        }
    ]
});

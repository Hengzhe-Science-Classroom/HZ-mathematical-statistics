// Chapter 4: 随机样本与统计量 — Version B
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch04',
    number: 4,
    title: '随机样本与统计量',
    subtitle: 'Random Samples & Statistics',
    sections: [
        // ========== SECTION 1: 随机样本 ==========
        {
            id: 'ch04-sec01',
            title: '随机样本',
            content: `
                <h2>随机样本</h2>
                <p>统计推断的核心在于从<strong>总体</strong>（population）中抽取<strong>样本</strong>（sample），并通过样本来推断总体的性质。本节严格定义随机样本的概念，阐明独立同分布（iid）假设的数学含义。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.1 (总体与个体)</div>
                    <div class="env-body">
                        <p>设 \\(X\\) 为一个具有分布函数 \\(F(x; \\theta)\\) 的随机变量，其中 \\(\\theta \\in \\Theta\\) 为未知参数。我们称 \\(F\\) 所代表的概率分布为<strong>总体</strong>（population），而 \\(X\\) 的每次独立观测值称为<strong>个体</strong>（individual）。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.2 (随机样本)</div>
                    <div class="env-body">
                        <p>设总体 \\(X\\) 的分布函数为 \\(F\\)。若随机变量 \\(X_1, X_2, \\ldots, X_n\\) 满足：</p>
                        <ol>
                            <li><strong>独立性</strong>：\\(X_1, X_2, \\ldots, X_n\\) 相互独立；</li>
                            <li><strong>同分布性</strong>：每个 \\(X_i\\) 均与 \\(X\\) 同分布，即 \\(X_i \\sim F\\)，\\(i = 1, 2, \\ldots, n\\)。</li>
                        </ol>
                        <p>则称 \\(X_1, X_2, \\ldots, X_n\\) 为来自总体 \\(F\\) 的容量为 \\(n\\) 的<strong>随机样本</strong>（random sample），简称样本。记为</p>
                        \\[X_1, X_2, \\ldots, X_n \\overset{\\text{iid}}{\\sim} F.\\]
                        <p>此时，样本的联合分布函数为</p>
                        \\[F_{X_1, \\ldots, X_n}(x_1, \\ldots, x_n) = \\prod_{i=1}^{n} F(x_i).\\]
                        <p>若 \\(F\\) 具有密度 \\(f\\)，则联合密度为</p>
                        \\[f_{X_1, \\ldots, X_n}(x_1, \\ldots, x_n) = \\prod_{i=1}^{n} f(x_i).\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>可以将抽样过程想象为从一个"无限大的罐子"中逐一取球。每次取球前罐子的状态不变（独立性），且每个球上标注的数字服从相同的分布（同分布性）。有限总体中的有放回抽样正好满足 iid 条件，而无放回抽样则打破独立性。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>需要区分<strong>样本</strong>（sample，随机变量 \\(X_1, \\ldots, X_n\\)）与<strong>样本观测值</strong>（sample observation，实现值 \\(x_1, \\ldots, x_n\\)）。统计量是关于样本的函数，其本身也是随机变量；一旦观测到具体数据，统计量便取确定的值。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 4.1 (正态总体的联合密度)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\)，则联合密度为</p>
                        \\[f(x_1, \\ldots, x_n) = \\prod_{i=1}^{n} \\frac{1}{\\sqrt{2\\pi}\\sigma} \\exp\\!\\left(-\\frac{(x_i - \\mu)^2}{2\\sigma^2}\\right) = \\frac{1}{(2\\pi\\sigma^2)^{n/2}} \\exp\\!\\left(-\\frac{1}{2\\sigma^2}\\sum_{i=1}^{n}(x_i - \\mu)^2\\right).\\]
                        <p>这个联合密度是后续讨论充分统计量和极大似然估计的基础。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.3 (经验分布函数)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n\\) 为来自总体 \\(F\\) 的随机样本。<strong>经验分布函数</strong>（empirical distribution function，EDF）定义为</p>
                        \\[\\hat{F}_n(x) = \\frac{1}{n}\\sum_{i=1}^{n} \\mathbf{1}(X_i \\le x),\\]
                        <p>其中 \\(\\mathbf{1}(\\cdot)\\) 为示性函数。由 Glivenko-Cantelli 定理，\\(\\hat{F}_n(x) \\to F(x)\\) 几乎处处一致收敛。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="population-sampling-sim"></div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>在实际应用中，iid 假设常常只是近似成立。例如时间序列数据中相邻观测往往存在相关性，聚类抽样中同一组内的个体可能高度相似。违反 iid 假设可能导致推断结论严重偏差，这也是为什么在实践中需要仔细检验 iid 假设。</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'population-sampling-sim',
                    title: 'Interactive: 从总体中抽样模拟器',
                    description: '选择总体分布，观察样本的经验分布如何逼近总体分布（Glivenko-Cantelli 定理的直观展示）',
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
                    question: '设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Exp}(\\lambda)\\)，写出样本的联合密度函数，并证明 \\(T = \\sum_{i=1}^n X_i\\) 是充分统计量（提示：利用因子分解定理）。',
                    hint: '联合密度为 \\(f(x_1, \\ldots, x_n) = \\lambda^n \\exp(-\\lambda \\sum x_i) \\cdot \\mathbf{1}(\\min_i x_i \\ge 0)\\)。注意它可以分解为只依赖 \\(\\sum x_i\\) 的部分和不依赖 \\(\\lambda\\) 的部分。',
                    solution: '联合密度为 \\(f(\\mathbf{x}|\\lambda) = \\lambda^n e^{-\\lambda \\sum_{i=1}^n x_i} \\prod_{i=1}^n \\mathbf{1}(x_i \\ge 0)\\)。令 \\(g(T|\\lambda) = \\lambda^n e^{-\\lambda T}\\)，\\(h(\\mathbf{x}) = \\prod_{i=1}^n \\mathbf{1}(x_i \\ge 0)\\)，则 \\(f(\\mathbf{x}|\\lambda) = g(T(\\mathbf{x})|\\lambda) \\cdot h(\\mathbf{x})\\)。由 Fisher-Neyman 因子分解定理，\\(T = \\sum_{i=1}^n X_i\\) 是 \\(\\lambda\\) 的充分统计量。'
                },
                {
                    question: '设 \\(X_1, \\ldots, X_n\\) 为来自总体 \\(F\\) 的 iid 样本，经验分布函数为 \\(\\hat{F}_n(x)\\)。证明对固定的 \\(x\\)，\\(n\\hat{F}_n(x) \\sim \\text{Binomial}(n, F(x))\\)。',
                    hint: '注意 \\(\\mathbf{1}(X_i \\le x)\\) 是独立的 Bernoulli 随机变量。',
                    solution: '对固定的 \\(x\\)，令 \\(Y_i = \\mathbf{1}(X_i \\le x)\\)。则 \\(Y_i \\overset{\\text{iid}}{\\sim} \\text{Bernoulli}(p)\\)，其中 \\(p = P(X_i \\le x) = F(x)\\)。因此 \\(n\\hat{F}_n(x) = \\sum_{i=1}^n Y_i \\sim \\text{Binomial}(n, F(x))\\)。特别地，\\(\\mathbb{E}[\\hat{F}_n(x)] = F(x)\\)，\\(\\operatorname{Var}(\\hat{F}_n(x)) = F(x)(1 - F(x))/n\\)。'
                },
                {
                    question: '解释为什么有限总体中的无放回抽样（simple random sampling without replacement）不满足 iid 假设，但当总体远大于样本时可以近似为 iid。',
                    hint: '考虑超几何分布与二项分布的关系。',
                    solution: '无放回抽样中，\\(X_i\\) 的条件分布依赖于先前的抽取结果，即 \\(P(X_{i+1} | X_1, \\ldots, X_i) \\ne P(X_{i+1})\\)，因此不满足独立性。然而，当总体容量 \\(N \\gg n\\) 时，已抽取的元素对剩余总体的影响可忽略。形式上，超几何分布 \\(\\text{Hypergeometric}(N, K, n)\\) 在 \\(N \\to \\infty\\)，\\(K/N \\to p\\) 时收敛于 \\(\\text{Binomial}(n, p)\\)，后者正是 iid Bernoulli 样本之和的分布。通常认为当 \\(n/N < 0.05\\) 时 iid 近似已相当精确。'
                }
            ]
        },

        // ========== SECTION 2: 统计量与抽样分布 ==========
        {
            id: 'ch04-sec02',
            title: '统计量与抽样分布',
            content: `
                <h2>统计量与抽样分布</h2>
                <p>有了随机样本的概念，我们接下来定义<strong>统计量</strong>（statistic）：样本的可计算函数。统计量是推断总体参数的桥梁。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.4 (统计量)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n\\) 为随机样本。若函数 \\(T = T(X_1, \\ldots, X_n)\\) <strong>不依赖于任何未知参数</strong>，则称 \\(T\\) 为一个<strong>统计量</strong>（statistic）。统计量的分布称为<strong>抽样分布</strong>（sampling distribution）。</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>注意 \\(\\bar{X} = \\frac{1}{n}\\sum_{i=1}^n X_i\\) 是统计量，但 \\(\\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}}\\) 在 \\(\\mu, \\sigma\\) 未知时<strong>不是</strong>统计量（因为它依赖于未知参数）。必须用样本量替代未知参数才能得到统计量，如 \\(\\frac{\\bar{X} - \\mu_0}{S/\\sqrt{n}}\\)（这里 \\(\\mu_0\\) 为假设中的已知值）。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.5 (常用统计量)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n\\) 为随机样本，定义以下统计量：</p>
                        <ol>
                            <li><strong>样本均值</strong>：\\(\\bar{X} = \\frac{1}{n}\\sum_{i=1}^{n} X_i\\)</li>
                            <li><strong>样本方差</strong>：\\(S^2 = \\frac{1}{n-1}\\sum_{i=1}^{n} (X_i - \\bar{X})^2\\)</li>
                            <li><strong>样本标准差</strong>：\\(S = \\sqrt{S^2}\\)</li>
                            <li><strong>样本 \\(k\\) 阶矩</strong>：\\(M_k = \\frac{1}{n}\\sum_{i=1}^{n} X_i^k\\)</li>
                            <li><strong>样本 \\(k\\) 阶中心矩</strong>：\\(M_k^* = \\frac{1}{n}\\sum_{i=1}^{n} (X_i - \\bar{X})^k\\)</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.1 (样本均值与方差的基本性质)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} F\\)，其中 \\(\\mathbb{E}[X] = \\mu\\)，\\(\\operatorname{Var}(X) = \\sigma^2 < \\infty\\)。则：</p>
                        <ol>
                            <li>\\(\\mathbb{E}[\\bar{X}] = \\mu\\)（无偏性）</li>
                            <li>\\(\\operatorname{Var}(\\bar{X}) = \\frac{\\sigma^2}{n}\\)（方差衰减）</li>
                            <li>\\(\\mathbb{E}[S^2] = \\sigma^2\\)（无偏性）</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>(1) 由线性性，\\(\\mathbb{E}[\\bar{X}] = \\frac{1}{n}\\sum_{i=1}^n \\mathbb{E}[X_i] = \\mu\\)。</p>
                        <p>(2) 由独立性，\\(\\operatorname{Var}(\\bar{X}) = \\frac{1}{n^2}\\sum_{i=1}^n \\operatorname{Var}(X_i) = \\frac{\\sigma^2}{n}\\)。</p>
                        <p>(3) 利用恒等式 \\(\\sum_{i=1}^n (X_i - \\bar{X})^2 = \\sum_{i=1}^n X_i^2 - n\\bar{X}^2\\)：</p>
                        \\[\\mathbb{E}\\left[\\sum_{i=1}^n (X_i - \\bar{X})^2\\right] = \\sum_{i=1}^n \\mathbb{E}[X_i^2] - n\\mathbb{E}[\\bar{X}^2].\\]
                        <p>由于 \\(\\mathbb{E}[X_i^2] = \\sigma^2 + \\mu^2\\)，\\(\\mathbb{E}[\\bar{X}^2] = \\frac{\\sigma^2}{n} + \\mu^2\\)，代入得</p>
                        \\[\\mathbb{E}\\left[\\sum_{i=1}^n (X_i - \\bar{X})^2\\right] = n(\\sigma^2 + \\mu^2) - n\\left(\\frac{\\sigma^2}{n} + \\mu^2\\right) = (n-1)\\sigma^2.\\]
                        <p>因此 \\(\\mathbb{E}[S^2] = \\frac{1}{n-1}(n-1)\\sigma^2 = \\sigma^2\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>样本方差除以 \\(n-1\\) 而不是 \\(n\\) 的原因在于"自由度损失"：\\(n\\) 个偏差 \\(X_i - \\bar{X}\\) 之和恒为零，因此只有 \\(n-1\\) 个偏差是自由的。用 \\(n\\) 作除数会<strong>系统性地低估</strong>总体方差。下面的可视化将直观展示这一点。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.2 (样本均值与方差的独立性——正态情形)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\)。则：</p>
                        <ol>
                            <li>\\(\\bar{X}\\) 与 \\(S^2\\) 相互独立；</li>
                            <li>\\(\\bar{X} \\sim N\\!\\left(\\mu, \\frac{\\sigma^2}{n}\\right)\\)；</li>
                            <li>\\(\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)\\)。</li>
                        </ol>
                        <p>这一定理由 Cochran 在 1934 年给出严格证明，是正态总体推断的基石。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sampling-dist-xbar"></div>
            `,
            visualizations: [
                {
                    id: 'sampling-dist-xbar',
                    title: 'Interactive: 样本均值的抽样分布',
                    description: '反复从总体抽样，观察样本均值的分布如何随 n 增大而集中于总体均值',
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
                    question: '设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} F\\)，其中 \\(\\mathbb{E}[X^4] < \\infty\\)。计算 \\(\\operatorname{Var}(S^2)\\) 并说明其与总体四阶矩的关系。',
                    hint: '利用 \\(S^2 = \\frac{1}{n-1}\\sum(X_i - \\bar{X})^2\\) 和恒等式 \\((n-1)S^2 = \\sum X_i^2 - n\\bar{X}^2\\)，计算 \\(\\operatorname{Var}(\\sum X_i^2 - n\\bar{X}^2)\\)。',
                    solution: '设 \\(\\mu_k = \\mathbb{E}[(X - \\mu)^k]\\) 为 \\(k\\) 阶中心矩。经过仔细计算可得 \\(\\operatorname{Var}(S^2) = \\frac{1}{n}\\left(\\mu_4 - \\frac{n-3}{n-1}\\sigma^4\\right)\\)。对正态总体，\\(\\mu_4 = 3\\sigma^4\\)，代入得 \\(\\operatorname{Var}(S^2) = \\frac{2\\sigma^4}{n-1}\\)，这与 \\(\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)\\) 的方差 \\(2(n-1)\\) 一致。'
                },
                {
                    question: '证明样本均值 \\(\\bar{X}\\) 在均方误差意义下是 \\(\\mu\\) 的最优线性无偏估计（BLUE），即在所有形如 \\(\\sum a_i X_i\\) 且 \\(\\mathbb{E}[\\sum a_i X_i] = \\mu\\) 的估计中，\\(\\bar{X}\\) 的方差最小。',
                    hint: '无偏性要求 \\(\\sum a_i = 1\\)。利用 Cauchy-Schwarz 不等式或 Lagrange 乘数法。',
                    solution: '设 \\(T = \\sum_{i=1}^n a_i X_i\\) 满足 \\(\\mathbb{E}[T] = \\mu\\)，即 \\(\\sum a_i = 1\\)。则 \\(\\operatorname{Var}(T) = \\sigma^2 \\sum a_i^2\\)。由 Cauchy-Schwarz 不等式，\\(1 = (\\sum a_i)^2 = (\\sum a_i \\cdot 1)^2 \\le (\\sum a_i^2)(n)\\)，故 \\(\\sum a_i^2 \\ge 1/n\\)，等号当且仅当 \\(a_1 = \\cdots = a_n = 1/n\\)，即 \\(T = \\bar{X}\\)。因此 \\(\\operatorname{Var}(T) \\ge \\sigma^2/n = \\operatorname{Var}(\\bar{X})\\)。'
                },
                {
                    question: '样本中位数和样本均值作为位置参数的估计各有什么优劣？从稳健性和效率两个角度讨论。',
                    hint: '考虑正态总体下二者的渐近方差，以及存在离群值时的表现。',
                    solution: '对 \\(N(\\mu, \\sigma^2)\\) 总体：(1) \\(\\bar{X}\\) 的渐近方差为 \\(\\sigma^2/n\\)；(2) 样本中位数的渐近方差为 \\(\\pi\\sigma^2/(2n)\\)，即渐近相对效率（ARE）为 \\(2/\\pi \\approx 63.7\\%\\)。因此在正态总体下，均值效率更高。然而对厚尾分布（如 Cauchy），均值甚至不收敛，而中位数仍以 \\(\\sqrt{n}\\) 速率收敛且有有界影响函数（bounded influence function），稳健性远优于均值。在存在离群值的场景中，中位数是更安全的选择。'
                }
            ]
        },

        // ========== SECTION 3: 正态总体的抽样分布 ==========
        {
            id: 'ch04-sec03',
            title: '正态总体的抽样分布',
            content: `
                <h2>正态总体的抽样分布</h2>
                <p>正态总体是统计理论中最核心的模型。本节系统推导三大抽样分布——\\(\\chi^2\\) 分布、\\(t\\) 分布和 \\(F\\) 分布——以及它们如何从正态样本中自然产生。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.6 (\\(\\chi^2\\) 分布)</div>
                    <div class="env-body">
                        <p>设 \\(Z_1, \\ldots, Z_k \\overset{\\text{iid}}{\\sim} N(0, 1)\\)，则</p>
                        \\[Q = \\sum_{i=1}^{k} Z_i^2 \\sim \\chi^2(k),\\]
                        <p>称 \\(Q\\) 服从自由度为 \\(k\\) 的 \\(\\chi^2\\) 分布。其密度为</p>
                        \\[f_Q(x) = \\frac{1}{2^{k/2}\\Gamma(k/2)} x^{k/2 - 1} e^{-x/2}, \\quad x > 0.\\]
                        <p>基本性质：\\(\\mathbb{E}[Q] = k\\)，\\(\\operatorname{Var}(Q) = 2k\\)。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.3 (\\(\\chi^2\\) 分布的可加性)</div>
                    <div class="env-body">
                        <p>若 \\(Q_1 \\sim \\chi^2(k_1)\\)，\\(Q_2 \\sim \\chi^2(k_2)\\)，且 \\(Q_1 \\perp Q_2\\)（独立），则</p>
                        \\[Q_1 + Q_2 \\sim \\chi^2(k_1 + k_2).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>利用矩生成函数（mgf）。\\(\\chi^2(k)\\) 的 mgf 为 \\(M(t) = (1 - 2t)^{-k/2}\\)，\\(t < 1/2\\)。由独立性，</p>
                        \\[M_{Q_1 + Q_2}(t) = M_{Q_1}(t)M_{Q_2}(t) = (1-2t)^{-k_1/2}(1-2t)^{-k_2/2} = (1-2t)^{-(k_1+k_2)/2},\\]
                        <p>这正是 \\(\\chi^2(k_1 + k_2)\\) 的 mgf。由 mgf 唯一性定理，\\(Q_1 + Q_2 \\sim \\chi^2(k_1 + k_2)\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.7 (Student's \\(t\\) 分布)</div>
                    <div class="env-body">
                        <p>设 \\(Z \\sim N(0,1)\\)，\\(V \\sim \\chi^2(\\nu)\\)，且 \\(Z \\perp V\\)。定义</p>
                        \\[T = \\frac{Z}{\\sqrt{V/\\nu}} \\sim t(\\nu),\\]
                        <p>称 \\(T\\) 服从自由度为 \\(\\nu\\) 的 Student \\(t\\) 分布。其密度为</p>
                        \\[f_T(x) = \\frac{\\Gamma\\!\\left(\\frac{\\nu+1}{2}\\right)}{\\sqrt{\\nu\\pi}\\;\\Gamma\\!\\left(\\frac{\\nu}{2}\\right)} \\left(1 + \\frac{x^2}{\\nu}\\right)^{\\!-(\\nu+1)/2}.\\]
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>当 \\(\\nu \\to \\infty\\) 时，\\(t(\\nu) \\to N(0,1)\\)。\\(t\\) 分布相较于正态分布有更厚的尾巴，自由度越小尾巴越厚。对于 \\(\\nu = 1\\)，\\(t(1)\\) 即 Cauchy 分布，甚至没有有限均值。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.8 (\\(F\\) 分布)</div>
                    <div class="env-body">
                        <p>设 \\(U \\sim \\chi^2(d_1)\\)，\\(V \\sim \\chi^2(d_2)\\)，且 \\(U \\perp V\\)。定义</p>
                        \\[W = \\frac{U/d_1}{V/d_2} \\sim F(d_1, d_2),\\]
                        <p>称 \\(W\\) 服从自由度为 \\((d_1, d_2)\\) 的 \\(F\\) 分布。注意 \\(T \\sim t(\\nu)\\) 意味着 \\(T^2 \\sim F(1, \\nu)\\)。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.4 (单个正态总体的核心结果)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\)。则：</p>
                        <ol>
                            <li>\\(\\bar{X} \\sim N\\!\\left(\\mu, \\frac{\\sigma^2}{n}\\right)\\)，即 \\(\\frac{\\bar{X} - \\mu}{\\sigma / \\sqrt{n}} \\sim N(0,1)\\)；</li>
                            <li>\\(\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)\\)；</li>
                            <li>\\(\\bar{X}\\) 与 \\(S^2\\) 相互独立；</li>
                            <li>\\(\\frac{\\bar{X} - \\mu}{S / \\sqrt{n}} \\sim t(n-1)\\)。</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (of (4))</div>
                    <div class="env-body">
                        <p>由 (1)，\\(Z = \\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}} \\sim N(0,1)\\)。由 (2)，\\(V = \\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)\\)。由 (3)，\\(Z \\perp V\\)。于是</p>
                        \\[\\frac{Z}{\\sqrt{V/(n-1)}} = \\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}} \\cdot \\frac{1}{\\sqrt{\\frac{(n-1)S^2}{\\sigma^2(n-1)}}} = \\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}} \\cdot \\frac{\\sigma}{S} = \\frac{\\bar{X} - \\mu}{S/\\sqrt{n}} \\sim t(n-1).\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.5 (双正态总体)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_m \\overset{\\text{iid}}{\\sim} N(\\mu_1, \\sigma^2)\\) 与 \\(Y_1, \\ldots, Y_n \\overset{\\text{iid}}{\\sim} N(\\mu_2, \\sigma^2)\\) 独立，共同方差为 \\(\\sigma^2\\)。则：</p>
                        <ol>
                            <li>\\(\\bar{X} - \\bar{Y} \\sim N\\!\\left(\\mu_1 - \\mu_2, \\sigma^2\\left(\\frac{1}{m} + \\frac{1}{n}\\right)\\right)\\)；</li>
                            <li>合并样本方差 \\(S_p^2 = \\frac{(m-1)S_X^2 + (n-1)S_Y^2}{m+n-2}\\) 满足 \\(\\frac{(m+n-2)S_p^2}{\\sigma^2} \\sim \\chi^2(m+n-2)\\)；</li>
                            <li>\\(\\frac{(\\bar{X} - \\bar{Y}) - (\\mu_1 - \\mu_2)}{S_p\\sqrt{1/m + 1/n}} \\sim t(m+n-2)\\)（两样本 \\(t\\) 统计量）。</li>
                        </ol>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="t-distribution-emergence"></div>
            `,
            visualizations: [
                {
                    id: 't-distribution-emergence',
                    title: 'Interactive: t 分布的诞生',
                    description: '可视化 chi-squared、t、F 分布如何从正态样本中产生，并展示 t 分布如何随自由度趋近正态分布',
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
                    question: '设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\)。证明 \\(\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)\\)。',
                    hint: '利用恒等式 \\(\\sum(X_i - \\bar{X})^2 = \\sum X_i^2 - n\\bar{X}^2\\)，以及正交变换（Helmert 矩阵）将 \\((X_1, \\ldots, X_n)\\) 变换为独立分量。',
                    solution: '令 \\(Z_i = (X_i - \\mu)/\\sigma \\overset{\\text{iid}}{\\sim} N(0,1)\\)。考虑正交变换 \\(\\mathbf{Y} = H\\mathbf{Z}\\)，其中 \\(H\\) 为 Helmert 矩阵，使得 \\(Y_1 = \\sqrt{n}\\bar{Z}\\)，而 \\(Y_2, \\ldots, Y_n\\) 为剩余 \\(n-1\\) 个正交分量。由于正交变换保持标准正态的联合分布不变（旋转不变性），\\(Y_1, \\ldots, Y_n \\overset{\\text{iid}}{\\sim} N(0,1)\\)。又 \\(\\sum Z_i^2 = \\sum Y_i^2 = Y_1^2 + \\sum_{i=2}^n Y_i^2\\)，故 \\(\\sum(Z_i - \\bar{Z})^2 = \\sum Z_i^2 - n\\bar{Z}^2 = \\sum_{i=2}^n Y_i^2 \\sim \\chi^2(n-1)\\)。'
                },
                {
                    question: '设 \\(X_1, \\ldots, X_m \\overset{\\text{iid}}{\\sim} N(\\mu_1, \\sigma_1^2)\\) 与 \\(Y_1, \\ldots, Y_n \\overset{\\text{iid}}{\\sim} N(\\mu_2, \\sigma_2^2)\\) 独立。证明 \\(\\frac{S_X^2 / \\sigma_1^2}{S_Y^2 / \\sigma_2^2} \\sim F(m-1, n-1)\\)。',
                    hint: '利用 \\(\\frac{(m-1)S_X^2}{\\sigma_1^2} \\sim \\chi^2(m-1)\\) 和 \\(F\\) 分布的定义。',
                    solution: '由 Theorem 4.4，\\(U = \\frac{(m-1)S_X^2}{\\sigma_1^2} \\sim \\chi^2(m-1)\\)，\\(V = \\frac{(n-1)S_Y^2}{\\sigma_2^2} \\sim \\chi^2(n-1)\\)，且由两样本独立性，\\(U \\perp V\\)。因此 \\(\\frac{U/(m-1)}{V/(n-1)} = \\frac{S_X^2/\\sigma_1^2}{S_Y^2/\\sigma_2^2} \\sim F(m-1, n-1)\\)。当 \\(\\sigma_1^2 = \\sigma_2^2\\) 时，此即 \\(S_X^2/S_Y^2 \\sim F(m-1, n-1)\\)，可用于方差齐性检验。'
                },
                {
                    question: '证明当 \\(\\nu \\to \\infty\\) 时，\\(t(\\nu) \\xrightarrow{d} N(0,1)\\)。',
                    hint: '利用大数定律：\\(V/\\nu \\xrightarrow{P} 1\\)，其中 \\(V \\sim \\chi^2(\\nu)\\)，然后结合 Slutsky 定理。',
                    solution: '设 \\(T = Z / \\sqrt{V/\\nu}\\)，其中 \\(Z \\sim N(0,1)\\)，\\(V \\sim \\chi^2(\\nu)\\)。将 \\(V = \\sum_{i=1}^\\nu Z_i^2\\)，由大数定律 \\(V/\\nu = \\frac{1}{\\nu}\\sum_{i=1}^\\nu Z_i^2 \\xrightarrow{P} \\mathbb{E}[Z^2] = 1\\)。由 Slutsky 定理，\\(\\sqrt{V/\\nu} \\xrightarrow{P} 1\\)，故 \\(T = Z / \\sqrt{V/\\nu} \\xrightarrow{d} Z \\sim N(0,1)\\)。也可通过直接验证 \\(t(\\nu)\\) 的特征函数逐点收敛到 \\(N(0,1)\\) 的特征函数来证明。'
                }
            ]
        },

        // ========== SECTION 4: 顺序统计量 ==========
        {
            id: 'ch04-sec04',
            title: '顺序统计量',
            content: `
                <h2>顺序统计量</h2>
                <p>将样本按大小排序后得到的统计量称为<strong>顺序统计量</strong>（order statistics）。它们是非参数统计的基础，也为分位数估计、极值分析等提供核心工具。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.9 (顺序统计量)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n\\) 为来自连续分布 \\(F\\) 的随机样本。将样本值从小到大排列：</p>
                        \\[X_{(1)} \\le X_{(2)} \\le \\cdots \\le X_{(n)},\\]
                        <p>则 \\(X_{(k)}\\) 称为第 \\(k\\) 个<strong>顺序统计量</strong>（\\(k\\)-th order statistic）。特别地：</p>
                        <ul>
                            <li>\\(X_{(1)} = \\min_i X_i\\)：最小顺序统计量</li>
                            <li>\\(X_{(n)} = \\max_i X_i\\)：最大顺序统计量</li>
                            <li>\\(R = X_{(n)} - X_{(1)}\\)：样本极差（range）</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.6 (单个顺序统计量的密度)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} F\\)，其中 \\(F\\) 具有密度 \\(f\\)。则第 \\(k\\) 个顺序统计量 \\(X_{(k)}\\) 的密度为</p>
                        \\[f_{X_{(k)}}(x) = \\frac{n!}{(k-1)!(n-k)!} [F(x)]^{k-1} [1-F(x)]^{n-k} f(x).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>考虑事件 \\(\\{x < X_{(k)} \\le x + dx\\}\\)。需要恰好 \\(k-1\\) 个观测值 \\(\\le x\\)，1 个在 \\((x, x+dx]\\) 中，\\(n-k\\) 个 \\(> x+dx\\)。由多项分布：</p>
                        \\[P(x < X_{(k)} \\le x+dx) \\approx \\frac{n!}{(k-1)! \\cdot 1! \\cdot (n-k)!} [F(x)]^{k-1} \\cdot f(x)dx \\cdot [1-F(x)]^{n-k}.\\]
                        <p>令 \\(dx \\to 0\\) 即得密度公式。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 4.1 (极值的分布)</div>
                    <div class="env-body">
                        <p>作为 Theorem 4.6 的特例：</p>
                        <ul>
                            <li>最小值：\\(f_{X_{(1)}}(x) = n[1-F(x)]^{n-1}f(x)\\)</li>
                            <li>最大值：\\(f_{X_{(n)}}(x) = n[F(x)]^{n-1}f(x)\\)</li>
                        </ul>
                        <p>CDF 形式更直观：\\(F_{X_{(n)}}(x) = [F(x)]^n\\)（全部 \\(\\le x\\)），\\(F_{X_{(1)}}(x) = 1 - [1-F(x)]^n\\)（至少一个 \\(\\le x\\)）。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.7 (顺序统计量的联合密度)</div>
                    <div class="env-body">
                        <p>\\((X_{(1)}, \\ldots, X_{(n)})\\) 的联合密度为</p>
                        \\[f_{X_{(1)}, \\ldots, X_{(n)}}(x_1, \\ldots, x_n) = n! \\prod_{i=1}^n f(x_i), \\quad x_1 < x_2 < \\cdots < x_n.\\]
                        <p>因子 \\(n!\\) 来源于将 \\(n\\) 个不可区分的样本排列为有序序列的置换数。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.8 (概率积分变换与顺序统计量)</div>
                    <div class="env-body">
                        <p>设 \\(X \\sim F\\) 且 \\(F\\) 连续。令 \\(U = F(X)\\)，则 \\(U \\sim \\text{Uniform}(0,1)\\)。因此若 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} F\\)，则 \\(U_{(k)} = F(X_{(k)})\\) 服从 \\(\\text{Beta}(k, n-k+1)\\) 分布。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>\\(U_i = F(X_i) \\overset{\\text{iid}}{\\sim} U(0,1)\\)。将 Theorem 4.6 应用于 \\(U(0,1)\\) 分布（\\(f(u) = 1\\)，\\(F(u) = u\\)），得</p>
                        \\[f_{U_{(k)}}(u) = \\frac{n!}{(k-1)!(n-k)!} u^{k-1}(1-u)^{n-k} = \\frac{u^{k-1}(1-u)^{(n-k+1)-1}}{B(k, n-k+1)},\\]
                        <p>这正是 \\(\\text{Beta}(k, n-k+1)\\) 的密度。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 4.2 (样本中位数的渐近分布)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} F\\)，\\(F\\) 在 \\(\\xi_p = F^{-1}(p)\\) 处有正密度 \\(f(\\xi_p) > 0\\)。则第 \\(\\lfloor np \\rfloor\\) 个顺序统计量 \\(X_{(\\lfloor np \\rfloor)}\\) 满足</p>
                        \\[\\sqrt{n}(X_{(\\lfloor np \\rfloor)} - \\xi_p) \\xrightarrow{d} N\\!\\left(0, \\frac{p(1-p)}{[f(\\xi_p)]^2}\\right).\\]
                        <p>对中位数（\\(p = 1/2\\)），渐近方差为 \\(\\frac{1}{4[f(\\xi_{1/2})]^2 n}\\)。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>顺序统计量的渐近方差与总体密度在分位数处的值成反比。直觉上，如果密度在分位数处很"陡"（值大），则微小的位置偏移便引起概率的显著变化，相应的分位数估计也会更精确。相反，在密度平坦（值小）处估计分位数则困难得多。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="order-stats-pdf"></div>
            `,
            visualizations: [
                {
                    id: 'order-stats-pdf',
                    title: 'Interactive: 顺序统计量的密度',
                    description: '选择总体分布和顺序统计量的阶数 k，观察 X_(k) 的理论密度与模拟直方图',
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
                    question: '设 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} U(0, \\theta)\\)。求 \\(X_{(n)}\\) 的密度和 \\(\\mathbb{E}[X_{(n)}]\\)，并说明如何用 \\(X_{(n)}\\) 估计 \\(\\theta\\)。',
                    hint: '\\(F(x) = x/\\theta\\) for \\(0 \\le x \\le \\theta\\)。代入最大值顺序统计量的密度公式。',
                    solution: '\\(F_{X_{(n)}}(x) = (x/\\theta)^n\\)，\\(0 \\le x \\le \\theta\\)。密度 \\(f_{X_{(n)}}(x) = \\frac{n x^{n-1}}{\\theta^n}\\)。\\(\\mathbb{E}[X_{(n)}] = \\int_0^\\theta \\frac{n x^n}{\\theta^n} dx = \\frac{n}{n+1}\\theta\\)。因此 \\(X_{(n)}\\) 有偏（系统性低估 \\(\\theta\\)），无偏估计为 \\(\\hat{\\theta} = \\frac{n+1}{n}X_{(n)}\\)。但注意 \\(X_{(n)}\\) 本身是 \\(\\theta\\) 的极大似然估计（MLE），尽管有偏，它的均方误差 \\(\\text{MSE}(X_{(n)}) = \\frac{2\\theta^2}{(n+1)(n+2)}\\)，以 \\(O(1/n^2)\\) 速率趋于零（快于一般的 \\(O(1/n)\\) 速率）。'
                },
                {
                    question: '设 \\(U_1, \\ldots, U_n \\overset{\\text{iid}}{\\sim} U(0,1)\\)。证明样本极差 \\(R = U_{(n)} - U_{(1)}\\) 的密度为 \\(f_R(r) = n(n-1)r^{n-2}(1-r)\\)，\\(0 < r < 1\\)。',
                    hint: '先求 \\((U_{(1)}, U_{(n)})\\) 的联合密度，然后做变量替换 \\((U_{(1)}, R) = (U_{(1)}, U_{(n)} - U_{(1)})\\)，对 \\(U_{(1)}\\) 积分。',
                    solution: '由 Theorem 4.6 的推广，\\((U_{(1)}, U_{(n)})\\) 的联合密度为 \\(f(u, v) = n(n-1)(v-u)^{n-2}\\)，\\(0 < u < v < 1\\)。令 \\(s = u\\)，\\(r = v - u\\)，则 Jacobian 为 1，联合密度变为 \\(g(s, r) = n(n-1)r^{n-2}\\)，积分域为 \\(0 < s < 1-r\\)，\\(0 < r < 1\\)。对 \\(s\\) 积分：\\(f_R(r) = \\int_0^{1-r} n(n-1)r^{n-2} ds = n(n-1)r^{n-2}(1-r)\\)。'
                },
                {
                    question: '利用概率积分变换和 Beta 分布的性质，证明对 \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} F\\)（\\(F\\) 连续），\\(\\mathbb{E}[X_{(k)}]\\) 可以表示为 \\(\\mathbb{E}[X_{(k)}] = \\int_0^1 F^{-1}(u) \\cdot \\frac{u^{k-1}(1-u)^{n-k}}{B(k, n-k+1)} du\\)。',
                    hint: '利用 \\(U_{(k)} = F(X_{(k)}) \\sim \\text{Beta}(k, n-k+1)\\) 和 \\(X_{(k)} = F^{-1}(U_{(k)})\\)。',
                    solution: '由概率积分变换，\\(U_i = F(X_i) \\overset{\\text{iid}}{\\sim} U(0,1)\\)，因此 \\(U_{(k)} = F(X_{(k)})\\)，即 \\(X_{(k)} = F^{-1}(U_{(k)})\\)。由 Theorem 4.8，\\(U_{(k)} \\sim \\text{Beta}(k, n-k+1)\\)。因此 \\(\\mathbb{E}[X_{(k)}] = \\mathbb{E}[F^{-1}(U_{(k)})] = \\int_0^1 F^{-1}(u) \\cdot \\frac{u^{k-1}(1-u)^{n-k}}{B(k, n-k+1)} du\\)。这一公式将任意连续分布的顺序统计量期望化为一维积分，在理论分析中非常有用。'
                }
            ]
        }
    ]
});

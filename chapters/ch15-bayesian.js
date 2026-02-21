window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch15',
    number: 15,
    title: 'Bayesian 统计入门',
    subtitle: 'Introduction to Bayesian Statistics',
    sections: [
        // ==================== Section 1: Bayes推断框架 ====================
        {
            id: 'ch15-sec01',
            title: 'Bayes 推断框架',
            content: `
                <h2>Bayes 推断框架</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>频率学派将参数 \\(\\theta\\) 视为固定的未知常数，通过反复抽样来推断其值。Bayes 学派则赋予参数一个<strong>概率分布</strong>：我们先根据已有知识对 \\(\\theta\\) 提出先验信念（prior），再利用观测数据更新信念，得到后验分布（posterior）。这一"从信念到知识"的更新过程正是 Bayes 推断的核心。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.1 (Bayes 推断的基本要素)</div>
                    <div class="env-body">
                        <p>Bayes 推断框架包含以下三个核心成分：</p>
                        <ul>
                            <li><strong>先验分布（Prior）</strong> \\(\\pi(\\theta)\\)：在观测数据之前，对参数 \\(\\theta\\) 的概率分布的描述。</li>
                            <li><strong>似然函数（Likelihood）</strong> \\(L(\\theta | \\mathbf{x}) = f(\\mathbf{x} | \\theta)\\)：给定参数 \\(\\theta\\) 时，观测数据 \\(\\mathbf{x}\\) 出现的概率（密度）。</li>
                            <li><strong>后验分布（Posterior）</strong> \\(\\pi(\\theta | \\mathbf{x})\\)：结合先验与数据后，对参数 \\(\\theta\\) 的更新信念。</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.2 (Bayes 定理 — 参数推断形式)</div>
                    <div class="env-body">
                        <p>设 \\(\\theta \\in \\Theta\\) 为参数，\\(\\mathbf{x} = (x_1, \\ldots, x_n)\\) 为观测数据。若先验密度 \\(\\pi(\\theta)\\) 与似然函数 \\(L(\\theta | \\mathbf{x})\\) 已知，则后验密度为</p>
                        \\[\\pi(\\theta | \\mathbf{x}) = \\frac{L(\\theta | \\mathbf{x}) \\, \\pi(\\theta)}{m(\\mathbf{x})}\\]
                        <p>其中 \\(m(\\mathbf{x}) = \\int_{\\Theta} L(\\theta | \\mathbf{x}) \\, \\pi(\\theta) \\, d\\theta\\) 为<strong>边际似然</strong>（marginal likelihood），也称为 <strong>evidence</strong>。</p>
                        <p>简记为：</p>
                        \\[\\text{posterior} \\propto \\text{likelihood} \\times \\text{prior}\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>由联合密度的两种分解：</p>
                        \\[f(\\mathbf{x}, \\theta) = f(\\mathbf{x} | \\theta) \\, \\pi(\\theta) = \\pi(\\theta | \\mathbf{x}) \\, m(\\mathbf{x})\\]
                        <p>其中 \\(m(\\mathbf{x}) = \\int f(\\mathbf{x} | \\theta) \\, \\pi(\\theta) \\, d\\theta\\) 是 \\(\\mathbf{x}\\) 的边际密度。因此</p>
                        \\[\\pi(\\theta | \\mathbf{x}) = \\frac{f(\\mathbf{x} | \\theta) \\, \\pi(\\theta)}{m(\\mathbf{x})} = \\frac{L(\\theta | \\mathbf{x}) \\, \\pi(\\theta)}{\\int_{\\Theta} L(\\theta | \\mathbf{x}) \\, \\pi(\\theta) \\, d\\theta}\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 15.3 (硬币公平性的 Bayes 推断)</div>
                    <div class="env-body">
                        <p>设硬币正面概率为 \\(\\theta\\)，先验为均匀分布 \\(\\pi(\\theta) = 1\\)（\\(\\theta \\in [0,1]\\)，即 Beta(1,1)）。抛 \\(n = 10\\) 次，观测到 \\(x = 7\\) 次正面。</p>
                        <p>似然函数为 \\(L(\\theta | x) = \\binom{10}{7} \\theta^7 (1-\\theta)^3\\)。</p>
                        <p>后验分布：</p>
                        \\[\\pi(\\theta | x) \\propto \\theta^7 (1-\\theta)^3 \\cdot 1 = \\theta^7 (1-\\theta)^3\\]
                        <p>这正是 \\(\\text{Beta}(8, 4)\\) 分布的核。因此 \\(\\theta | x \\sim \\text{Beta}(8, 4)\\)。</p>
                        <p>后验均值为 \\(\\frac{8}{8+4} = \\frac{2}{3} \\approx 0.667\\)，在 MLE \\(\\hat{\\theta} = 0.7\\) 与先验均值 \\(0.5\\) 之间，体现了数据与先验的折中。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (频率学派 vs. Bayes 学派)</div>
                    <div class="env-body">
                        <p>两种范式的核心区别：</p>
                        <ul>
                            <li><strong>频率学派</strong>：\\(\\theta\\) 是固定常数；概率指"在反复实验中事件发生的频率"。</li>
                            <li><strong>Bayes 学派</strong>：\\(\\theta\\) 有概率分布；概率表示"对不确定性的主观信念程度"。</li>
                        </ul>
                        <p>置信区间的解读也不同：频率学派的 95% 置信区间表示"在反复抽样中，约 95% 的区间会覆盖真值 \\(\\theta\\)"；Bayes 学派的 95% 可信区间表示"给定数据后，\\(\\theta\\) 落在该区间的概率为 0.95"。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.4 (主观先验与客观先验)</div>
                    <div class="env-body">
                        <p><strong>主观先验（Subjective prior）</strong>：基于研究者的领域知识与经验主观设定。例如，一位医生根据临床经验认为某药物有效率约 60%，可选 \\(\\text{Beta}(6, 4)\\)。</p>
                        <p><strong>客观先验（Objective / Non-informative prior）</strong>：旨在尽量减少先验对后验的影响，让数据"自己说话"。常见选择包括：</p>
                        <ul>
                            <li>均匀先验（Uniform/Flat prior）</li>
                            <li>Jeffreys 先验（基于 Fisher 信息量）</li>
                            <li>参考先验（Reference prior）</li>
                        </ul>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="prior-to-posterior-viz"></div>
            `,
            visualizations: [
                {
                    id: 'prior-to-posterior-viz',
                    title: 'Interactive: Prior → Posterior 更新动画',
                    description: '调整先验参数和观测数据，观察后验分布如何在先验与似然之间折中',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380,
                            originX: 60, originY: 340, scale: 480
                        });

                        var priorA = 2, priorB = 2;
                        var nTrials = 10, nSuccess = 5;

                        var sliderA = VizEngine.createSlider(controls, 'Prior a', 0.5, 10, priorA, 0.5, function(v) { priorA = v; draw(); });
                        var sliderB = VizEngine.createSlider(controls, 'Prior b', 0.5, 10, priorB, 0.5, function(v) { priorB = v; draw(); });
                        var sliderN = VizEngine.createSlider(controls, 'n (trials)', 0, 50, nTrials, 1, function(v) { nTrials = Math.round(v); draw(); });
                        var sliderX = VizEngine.createSlider(controls, 'x (successes)', 0, 50, nSuccess, 1, function(v) { nSuccess = Math.min(Math.round(v), nTrials); draw(); });

                        function draw() {
                            if (nSuccess > nTrials) nSuccess = nTrials;
                            viz.clear();

                            var postA = priorA + nSuccess;
                            var postB = priorB + (nTrials - nSuccess);

                            // Find max y for scaling
                            var maxY = 0;
                            for (var i = 0; i <= 200; i++) {
                                var t = i / 200;
                                if (t <= 0 || t >= 1) continue;
                                var yPrior = VizEngine.betaPDF(t, priorA, priorB);
                                var yPost = VizEngine.betaPDF(t, postA, postB);
                                if (yPrior > maxY) maxY = yPrior;
                                if (yPost > maxY) maxY = yPost;
                            }
                            var yScale = maxY > 0 ? 300 / maxY : 1;

                            // Draw axes
                            var ctx = viz.ctx;
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(60, 340);
                            ctx.lineTo(540, 340);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(60, 340);
                            ctx.lineTo(60, 20);
                            ctx.stroke();

                            // X axis labels
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var tick = 0; tick <= 10; tick++) {
                                var xp = 60 + tick * 48;
                                ctx.fillText((tick / 10).toFixed(1), xp, 344);
                                ctx.strokeStyle = viz.colors.grid;
                                ctx.lineWidth = 0.5;
                                ctx.beginPath();
                                ctx.moveTo(xp, 340);
                                ctx.lineTo(xp, 20);
                                ctx.stroke();
                            }
                            ctx.textAlign = 'center';
                            ctx.fillText('θ', 300, 360);

                            // Shade posterior
                            ctx.fillStyle = viz.colors.green + '33';
                            ctx.beginPath();
                            ctx.moveTo(60, 340);
                            for (var i = 0; i <= 200; i++) {
                                var t = i / 200;
                                var y = (t > 0 && t < 1) ? VizEngine.betaPDF(t, postA, postB) : 0;
                                ctx.lineTo(60 + t * 480, 340 - y * yScale);
                            }
                            ctx.lineTo(540, 340);
                            ctx.closePath();
                            ctx.fill();

                            // Draw prior curve
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;
                            for (var i = 1; i < 200; i++) {
                                var t = i / 200;
                                var y = VizEngine.betaPDF(t, priorA, priorB);
                                var px = 60 + t * 480;
                                var py = 340 - y * yScale;
                                if (!started) { ctx.moveTo(px, py); started = true; }
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Draw posterior curve
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            started = false;
                            for (var i = 1; i < 200; i++) {
                                var t = i / 200;
                                var y = VizEngine.betaPDF(t, postA, postB);
                                var px = 60 + t * 480;
                                var py = 340 - y * yScale;
                                if (!started) { ctx.moveTo(px, py); started = true; }
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Draw likelihood (scaled)
                            if (nTrials > 0) {
                                var maxLik = 0;
                                for (var i = 0; i <= 200; i++) {
                                    var t = i / 200;
                                    var lik = Math.pow(t, nSuccess) * Math.pow(1 - t, nTrials - nSuccess);
                                    if (lik > maxLik) maxLik = lik;
                                }
                                ctx.strokeStyle = viz.colors.orange;
                                ctx.lineWidth = 2;
                                ctx.setLineDash([6, 4]);
                                ctx.beginPath();
                                started = false;
                                for (var i = 1; i < 200; i++) {
                                    var t = i / 200;
                                    var lik = Math.pow(t, nSuccess) * Math.pow(1 - t, nTrials - nSuccess);
                                    var scaledLik = maxLik > 0 ? (lik / maxLik) * maxY : 0;
                                    var px = 60 + t * 480;
                                    var py = 340 - scaledLik * yScale;
                                    if (!started) { ctx.moveTo(px, py); started = true; }
                                    else ctx.lineTo(px, py);
                                }
                                ctx.stroke();
                                ctx.setLineDash([]);
                            }

                            // MLE marker
                            if (nTrials > 0) {
                                var mle = nSuccess / nTrials;
                                ctx.strokeStyle = viz.colors.orange;
                                ctx.lineWidth = 1;
                                ctx.setLineDash([3, 3]);
                                ctx.beginPath();
                                ctx.moveTo(60 + mle * 480, 340);
                                ctx.lineTo(60 + mle * 480, 20);
                                ctx.stroke();
                                ctx.setLineDash([]);
                            }

                            // Posterior mean marker
                            var postMean = postA / (postA + postB);
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([3, 3]);
                            ctx.beginPath();
                            ctx.moveTo(60 + postMean * 480, 340);
                            ctx.lineTo(60 + postMean * 480, 20);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Legend
                            var ly = 30;
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('--- Prior: Beta(' + priorA.toFixed(1) + ', ' + priorB.toFixed(1) + ')', 80, ly);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('- - Likelihood (scaled)', 80, ly + 18);
                            ctx.fillStyle = viz.colors.green;
                            ctx.fillText('--- Posterior: Beta(' + postA.toFixed(1) + ', ' + postB.toFixed(1) + ')', 80, ly + 36);
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('Post. mean = ' + postMean.toFixed(3) + (nTrials > 0 ? '  |  MLE = ' + (nSuccess / nTrials).toFixed(3) : ''), 80, ly + 54);
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设先验为 \\(\\pi(\\theta) = 1\\)（\\(\\theta \\in [0,1]\\)），观测到 \\(n\\) 次独立 Bernoulli 试验中有 \\(x\\) 次成功。写出后验分布，并求后验均值。',
                    hint: '均匀先验等价于 Beta(1,1)。利用 Beta-Binomial 共轭性。',
                    solution: '后验为 Beta(1+x, 1+n-x)，后验均值为 (1+x)/(2+n)。注意当 n 很大时，后验均值趋近于 MLE x/n。'
                },
                {
                    question: '证明 Bayes 定理的参数推断形式：若先验为 \\(\\pi(\\theta)\\)，似然为 \\(L(\\theta|\\mathbf{x})\\)，则后验密度为 \\(\\pi(\\theta|\\mathbf{x}) = \\frac{L(\\theta|\\mathbf{x})\\pi(\\theta)}{\\int L(\\theta|\\mathbf{x})\\pi(\\theta)d\\theta}\\)。',
                    hint: '从联合密度 \\(f(\\mathbf{x}, \\theta)\\) 的两种分解出发。',
                    solution: '联合密度 f(x,θ) = f(x|θ)π(θ) = π(θ|x)m(x)，其中 m(x) = ∫f(x|θ)π(θ)dθ 为边际密度。解出 π(θ|x) = f(x|θ)π(θ)/m(x) = L(θ|x)π(θ)/∫L(θ|x)π(θ)dθ。'
                },
                {
                    question: '在 Example 15.3 中，若先验改为 \\(\\text{Beta}(5, 5)\\)（表示对硬币公平性有较强先验信念），求新的后验分布和后验均值，并与均匀先验的结果比较。',
                    hint: 'Beta-Binomial 共轭：Beta(a,b) + Binomial(n,x) → Beta(a+x, b+n-x)。',
                    solution: '后验为 Beta(5+7, 5+3) = Beta(12, 8)，后验均值为 12/20 = 0.6。相比均匀先验的后验均值 0.667，信息先验将估计拉向了 0.5（先验均值），体现了更强先验的"正则化"效应。'
                }
            ]
        },

        // ==================== Section 2: 共轭先验 ====================
        {
            id: 'ch15-sec02',
            title: '共轭先验',
            content: `
                <h2>共轭先验</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>如果先验分布和后验分布属于同一分布族，那么 Bayes 更新就变成了简单地更新超参数——这就是共轭性的魅力。先验的超参数可以理解为"虚拟数据"，而真实数据只是在此基础上叠加信息。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.5 (共轭先验族)</div>
                    <div class="env-body">
                        <p>设 \\(\\mathcal{F} = \\{f(\\mathbf{x}|\\theta) : \\theta \\in \\Theta\\}\\) 为一族似然函数。若先验分布族 \\(\\mathcal{P}\\) 满足：对任意 \\(\\pi(\\theta) \\in \\mathcal{P}\\) 和任意观测 \\(\\mathbf{x}\\)，后验 \\(\\pi(\\theta|\\mathbf{x}) \\in \\mathcal{P}\\)，则称 \\(\\mathcal{P}\\) 为 \\(\\mathcal{F}\\) 的<strong>共轭先验族</strong>。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.6 (Beta-Binomial 共轭)</div>
                    <div class="env-body">
                        <p>设 \\(X | \\theta \\sim \\text{Binomial}(n, \\theta)\\)，先验为 \\(\\theta \\sim \\text{Beta}(a, b)\\)。则后验为</p>
                        \\[\\theta | X = x \\sim \\text{Beta}(a + x, \\, b + n - x)\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>后验密度正比于</p>
                        \\[\\pi(\\theta | x) \\propto L(\\theta | x) \\cdot \\pi(\\theta) = \\binom{n}{x} \\theta^x (1-\\theta)^{n-x} \\cdot \\frac{\\theta^{a-1}(1-\\theta)^{b-1}}{B(a,b)}\\]
                        \\[\\propto \\theta^{(a+x)-1}(1-\\theta)^{(b+n-x)-1}\\]
                        <p>这正是 \\(\\text{Beta}(a+x, b+n-x)\\) 的核。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.7 (Normal-Normal 共轭)</div>
                    <div class="env-body">
                        <p>设 \\(X_1, \\ldots, X_n | \\mu \\sim_{iid} N(\\mu, \\sigma^2)\\)（\\(\\sigma^2\\) 已知），先验为 \\(\\mu \\sim N(\\mu_0, \\tau^2)\\)。则后验为</p>
                        \\[\\mu | \\mathbf{x} \\sim N\\!\\left(\\frac{\\frac{n}{\\sigma^2}\\bar{x} + \\frac{1}{\\tau^2}\\mu_0}{\\frac{n}{\\sigma^2} + \\frac{1}{\\tau^2}}, \\; \\frac{1}{\\frac{n}{\\sigma^2} + \\frac{1}{\\tau^2}}\\right)\\]
                        <p>即后验精度 = 似然精度 + 先验精度，后验均值是先验均值与样本均值的精度加权平均。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>似然函数（关于 \\(\\mu\\)）为</p>
                        \\[L(\\mu | \\mathbf{x}) \\propto \\exp\\!\\left(-\\frac{n}{2\\sigma^2}(\\bar{x} - \\mu)^2\\right)\\]
                        <p>先验为</p>
                        \\[\\pi(\\mu) \\propto \\exp\\!\\left(-\\frac{1}{2\\tau^2}(\\mu - \\mu_0)^2\\right)\\]
                        <p>后验正比于二者之积。令 \\(\\lambda_0 = 1/\\tau^2\\)（先验精度），\\(\\lambda = n/\\sigma^2\\)（似然精度），则</p>
                        \\[\\pi(\\mu|\\mathbf{x}) \\propto \\exp\\!\\left(-\\frac{1}{2}\\left[\\lambda(\\mu - \\bar{x})^2 + \\lambda_0(\\mu - \\mu_0)^2\\right]\\right)\\]
                        <p>展开并整理为关于 \\(\\mu\\) 的二次项，得到后验精度为 \\(\\lambda + \\lambda_0\\)，后验均值为 \\(\\frac{\\lambda \\bar{x} + \\lambda_0 \\mu_0}{\\lambda + \\lambda_0}\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 15.8 (常见共轭先验一览)</div>
                    <div class="env-body">
                        <table style="width:100%; border-collapse:collapse; color:#c9d1d9;">
                            <tr style="border-bottom:1px solid #30363d;">
                                <th style="padding:4px 8px; text-align:left;">似然</th>
                                <th style="padding:4px 8px; text-align:left;">共轭先验</th>
                                <th style="padding:4px 8px; text-align:left;">后验</th>
                            </tr>
                            <tr style="border-bottom:1px solid #30363d;">
                                <td style="padding:4px 8px;">Binomial(n, θ)</td>
                                <td style="padding:4px 8px;">Beta(a, b)</td>
                                <td style="padding:4px 8px;">Beta(a+x, b+n-x)</td>
                            </tr>
                            <tr style="border-bottom:1px solid #30363d;">
                                <td style="padding:4px 8px;">Poisson(λ)</td>
                                <td style="padding:4px 8px;">Gamma(α, β)</td>
                                <td style="padding:4px 8px;">Gamma(α+Σx, β+n)</td>
                            </tr>
                            <tr style="border-bottom:1px solid #30363d;">
                                <td style="padding:4px 8px;">Normal(μ, σ² known)</td>
                                <td style="padding:4px 8px;">Normal(μ₀, τ²)</td>
                                <td style="padding:4px 8px;">Normal(加权均值, 合并精度⁻¹)</td>
                            </tr>
                            <tr style="border-bottom:1px solid #30363d;">
                                <td style="padding:4px 8px;">Normal(μ known, σ²)</td>
                                <td style="padding:4px 8px;">Inv-Gamma(α, β)</td>
                                <td style="padding:4px 8px;">Inv-Gamma(α+n/2, β+Σ(xᵢ-μ)²/2)</td>
                            </tr>
                            <tr>
                                <td style="padding:4px 8px;">Multinomial(n, p)</td>
                                <td style="padding:4px 8px;">Dirichlet(α₁,...,αₖ)</td>
                                <td style="padding:4px 8px;">Dirichlet(α₁+x₁,...,αₖ+xₖ)</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (超参数的"虚拟数据"解释)</div>
                    <div class="env-body">
                        <p>在 Beta-Binomial 共轭中，先验 \\(\\text{Beta}(a, b)\\) 可以理解为"过去已经观察过 \\(a-1\\) 次成功和 \\(b-1\\) 次失败"。新数据中增加了 \\(x\\) 次成功和 \\(n-x\\) 次失败，合并后得到 \\(\\text{Beta}(a+x, b+n-x)\\)。</p>
                        <p>先验的"有效样本量"为 \\(a + b - 2\\)（或 \\(a + b\\)），当实际样本量 \\(n\\) 远大于先验有效样本量时，后验几乎完全由数据决定。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="beta-binomial-viz"></div>
            `,
            visualizations: [
                {
                    id: 'beta-binomial-viz',
                    title: 'Interactive: Beta-Binomial 序贯更新',
                    description: '每次点击"Flip"模拟一次抛硬币，观察 Beta 后验如何逐步更新',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380,
                            originX: 60, originY: 340, scale: 480
                        });

                        var a0 = 1, b0 = 1;
                        var heads = 0, tails = 0;
                        var trueP = 0.6;
                        var history = [];

                        var sliderA0 = VizEngine.createSlider(controls, 'Prior a₀', 0.5, 10, a0, 0.5, function(v) {
                            a0 = v; draw();
                        });
                        var sliderB0 = VizEngine.createSlider(controls, 'Prior b₀', 0.5, 10, b0, 0.5, function(v) {
                            b0 = v; draw();
                        });
                        var sliderP = VizEngine.createSlider(controls, 'True p', 0.1, 0.9, trueP, 0.05, function(v) {
                            trueP = v;
                        });

                        VizEngine.createButton(controls, 'Flip 1', function() {
                            var result = Math.random() < trueP ? 1 : 0;
                            if (result) heads++; else tails++;
                            history.push(result);
                            draw();
                        });
                        VizEngine.createButton(controls, 'Flip 10', function() {
                            for (var i = 0; i < 10; i++) {
                                var result = Math.random() < trueP ? 1 : 0;
                                if (result) heads++; else tails++;
                                history.push(result);
                            }
                            draw();
                        });
                        VizEngine.createButton(controls, 'Reset', function() {
                            heads = 0; tails = 0; history = [];
                            draw();
                        });

                        function draw() {
                            viz.clear();

                            var postA = a0 + heads;
                            var postB = b0 + tails;

                            // Find max y
                            var maxY = 0;
                            for (var i = 1; i < 200; i++) {
                                var t = i / 200;
                                var yPr = VizEngine.betaPDF(t, a0, b0);
                                var yPo = VizEngine.betaPDF(t, postA, postB);
                                if (yPr > maxY) maxY = yPr;
                                if (yPo > maxY) maxY = yPo;
                            }
                            if (maxY < 1) maxY = 1;
                            var yScale = 280 / maxY;

                            var ctx = viz.ctx;

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(60, 340); ctx.lineTo(540, 340); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(60, 340); ctx.lineTo(60, 30); ctx.stroke();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var tick = 0; tick <= 10; tick++) {
                                var xp = 60 + tick * 48;
                                ctx.fillText((tick / 10).toFixed(1), xp, 344);
                            }
                            ctx.fillText('θ', 300, 360);

                            // True p vertical line
                            ctx.strokeStyle = viz.colors.red + '88';
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([4, 4]);
                            ctx.beginPath();
                            ctx.moveTo(60 + trueP * 480, 340);
                            ctx.lineTo(60 + trueP * 480, 30);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Shade posterior
                            ctx.fillStyle = viz.colors.teal + '33';
                            ctx.beginPath();
                            ctx.moveTo(60, 340);
                            for (var i = 0; i <= 200; i++) {
                                var t = i / 200;
                                var y = (t > 0 && t < 1) ? VizEngine.betaPDF(t, postA, postB) : 0;
                                ctx.lineTo(60 + t * 480, 340 - y * yScale);
                            }
                            ctx.lineTo(540, 340);
                            ctx.closePath();
                            ctx.fill();

                            // Prior curve
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            var started = false;
                            for (var i = 1; i < 200; i++) {
                                var t = i / 200;
                                var y = VizEngine.betaPDF(t, a0, b0);
                                var px = 60 + t * 480, py = 340 - y * yScale;
                                if (!started) { ctx.moveTo(px, py); started = true; }
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Posterior curve
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            started = false;
                            for (var i = 1; i < 200; i++) {
                                var t = i / 200;
                                var y = VizEngine.betaPDF(t, postA, postB);
                                var px = 60 + t * 480, py = 340 - y * yScale;
                                if (!started) { ctx.moveTo(px, py); started = true; }
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Legend and stats
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('Prior: Beta(' + a0.toFixed(1) + ', ' + b0.toFixed(1) + ')', 80, 35);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('Posterior: Beta(' + postA.toFixed(1) + ', ' + postB.toFixed(1) + ')', 80, 53);
                            ctx.fillStyle = viz.colors.red;
                            ctx.fillText('True p = ' + trueP.toFixed(2), 80, 71);
                            ctx.fillStyle = viz.colors.text;
                            var total = heads + tails;
                            ctx.fillText('Flips: ' + total + '  |  H: ' + heads + '  T: ' + tails + '  |  Post. mean: ' + (postA / (postA + postB)).toFixed(3), 80, 89);

                            // Coin flip history (last 30)
                            var showHist = history.slice(-30);
                            ctx.font = '10px -apple-system, sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('Recent flips:', 530, 35);
                            for (var i = 0; i < showHist.length; i++) {
                                ctx.fillStyle = showHist[i] ? viz.colors.green : viz.colors.red;
                                ctx.fillText(showHist[i] ? 'H' : 'T', 400 + (i % 15) * 10, 50 + Math.floor(i / 15) * 14);
                            }
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '证明 Gamma-Poisson 共轭性：若 \\(X_1, \\ldots, X_n | \\lambda \\sim_{iid} \\text{Poisson}(\\lambda)\\)，先验 \\(\\lambda \\sim \\text{Gamma}(\\alpha, \\beta)\\)，则后验为 \\(\\lambda | \\mathbf{x} \\sim \\text{Gamma}(\\alpha + \\sum x_i, \\beta + n)\\)。',
                    hint: '写出 Poisson 似然 L(λ|x) ∝ λ^{Σxᵢ} e^{-nλ}，乘以 Gamma 先验的核。',
                    solution: 'L(λ|x) ∝ λ^{Σxᵢ} e^{-nλ}，先验核为 λ^{α-1} e^{-βλ}。后验核为 λ^{α+Σxᵢ-1} e^{-(β+n)λ}，即 Gamma(α+Σxᵢ, β+n) 的核。'
                },
                {
                    question: '在 Normal-Normal 共轭中，证明后验均值可以写成先验均值和 MLE 的加权平均：\\(\\hat{\\mu}_{\\text{Bayes}} = w \\bar{x} + (1-w) \\mu_0\\)，其中 \\(w = \\frac{n/\\sigma^2}{n/\\sigma^2 + 1/\\tau^2}\\)。当 \\(n \\to \\infty\\) 时，\\(w\\) 趋向什么？',
                    hint: '令似然精度 λ = n/σ²，先验精度 λ₀ = 1/τ²，代入后验均值公式。',
                    solution: '后验均值 = (λx̄ + λ₀μ₀)/(λ + λ₀) = [λ/(λ+λ₀)]x̄ + [λ₀/(λ+λ₀)]μ₀ = wx̄ + (1-w)μ₀，其中 w = λ/(λ+λ₀) = (n/σ²)/(n/σ² + 1/τ²)。当 n→∞，w→1，即后验均值趋近 MLE x̄，先验的影响消失。'
                },
                {
                    question: '设 \\(X | \\theta \\sim \\text{Geometric}(\\theta)\\)（\\(P(X=k) = \\theta(1-\\theta)^{k-1}, k=1,2,\\ldots\\)）。Beta(a,b) 是否为其共轭先验？若是，求后验。',
                    hint: '写出似然函数 L(θ|x) 关于 θ 的部分，看能否与 Beta 的核合并。',
                    solution: '对单次观测 x，似然为 L(θ|x) = θ(1-θ)^{x-1}。乘以 Beta(a,b) 先验核 θ^{a-1}(1-θ)^{b-1}，得后验核 θ^a(1-θ)^{b+x-2}，即 Beta(a+1, b+x-1)。对 n 个独立观测，后验为 Beta(a+n, b+Σxᵢ-n)。是的，Beta 是 Geometric 的共轭先验。'
                }
            ]
        },

        // ==================== Section 3: 后验推断 ====================
        {
            id: 'ch15-sec03',
            title: '后验推断',
            content: `
                <h2>后验推断</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>获得后验分布后，我们可以从中提取各种推断结论：点估计（用什么值代表 \\(\\theta\\)？）、区间估计（\\(\\theta\\) 最可能在哪个范围？）、预测（下一个观测值可能是多少？）。后验分布是一切推断的基础。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.9 (Bayes 点估计)</div>
                    <div class="env-body">
                        <p>常见的 Bayes 点估计包括：</p>
                        <ul>
                            <li><strong>后验均值（Posterior mean）</strong>：\\(\\hat{\\theta}_{\\text{PM}} = E[\\theta | \\mathbf{x}] = \\int \\theta \\, \\pi(\\theta | \\mathbf{x}) \\, d\\theta\\)。它最小化后验期望平方损失。</li>
                            <li><strong>后验中位数（Posterior median）</strong>：\\(\\hat{\\theta}_{\\text{Med}}\\) 满足 \\(P(\\theta \\le \\hat{\\theta}_{\\text{Med}} | \\mathbf{x}) = 0.5\\)。它最小化后验期望绝对损失。</li>
                            <li><strong>最大后验估计（MAP）</strong>：\\(\\hat{\\theta}_{\\text{MAP}} = \\arg\\max_{\\theta} \\pi(\\theta | \\mathbf{x})\\)。它最小化后验 0-1 损失。</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.10 (Bayes 估计的最优性)</div>
                    <div class="env-body">
                        <p>设损失函数为 \\(L(\\theta, d)\\)。Bayes 估计 \\(\\hat{\\theta}\\) 最小化后验期望损失（posterior expected loss）：</p>
                        \\[\\hat{\\theta} = \\arg\\min_d \\int L(\\theta, d) \\, \\pi(\\theta | \\mathbf{x}) \\, d\\theta\\]
                        <p>具体地：</p>
                        <ul>
                            <li>平方损失 \\(L(\\theta, d) = (\\theta - d)^2\\) → 后验均值</li>
                            <li>绝对损失 \\(L(\\theta, d) = |\\theta - d|\\) → 后验中位数</li>
                            <li>0-1 损失 \\(L(\\theta, d) = I(|\\theta - d| > \\epsilon)\\)，\\(\\epsilon \\to 0\\) → MAP</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.11 (可信区间)</div>
                    <div class="env-body">
                        <p>给定后验分布 \\(\\pi(\\theta | \\mathbf{x})\\)，\\(100(1-\\alpha)\\%\\) <strong>可信区间</strong>（credible interval）\\(C\\) 满足</p>
                        \\[P(\\theta \\in C | \\mathbf{x}) = \\int_C \\pi(\\theta | \\mathbf{x}) \\, d\\theta = 1 - \\alpha\\]
                        <p>两种常见构造方式：</p>
                        <ul>
                            <li><strong>等尾可信区间（Equal-tail）</strong>：\\(C = [q_{\\alpha/2}, \\, q_{1-\\alpha/2}]\\)，其中 \\(q_p\\) 为后验第 \\(p\\) 分位数。</li>
                            <li><strong>最高后验密度区间（HPD）</strong>：\\(C = \\{\\theta : \\pi(\\theta | \\mathbf{x}) \\ge c\\}\\)，其中 \\(c\\) 选择使得 \\(P(\\theta \\in C | \\mathbf{x}) = 1 - \\alpha\\)。HPD 区间是同等可信度下最短的区间。</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (可信区间 ≠ 置信区间)</div>
                    <div class="env-body">
                        <p>Bayes 可信区间（credible interval）和频率学派置信区间（confidence interval）含义不同：</p>
                        <ul>
                            <li><strong>可信区间</strong>：给定数据后，参数 \\(\\theta\\) 以 \\(1-\\alpha\\) 的概率落在该区间内。这是对参数的<strong>后验概率陈述</strong>。</li>
                            <li><strong>置信区间</strong>：在反复抽样中，约 \\(100(1-\\alpha)\\%\\) 的区间会覆盖真值。这是对<strong>抽样程序</strong>的陈述。</li>
                        </ul>
                        <p>在某些特殊情形下（如 Normal 均值、均匀先验），两者数值上一致；但一般来说它们是不同的。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.12 (后验预测分布)</div>
                    <div class="env-body">
                        <p>给定已有观测 \\(\\mathbf{x}\\)，新观测 \\(X_{n+1}\\) 的<strong>后验预测分布</strong>为</p>
                        \\[f(x_{n+1} | \\mathbf{x}) = \\int f(x_{n+1} | \\theta) \\, \\pi(\\theta | \\mathbf{x}) \\, d\\theta\\]
                        <p>它将参数不确定性（通过后验）整合入预测中，通常比插入点估计 \\(\\hat{\\theta}\\) 的预测分布更加保守（方差更大）。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 15.13 (Beta-Binomial 后验预测)</div>
                    <div class="env-body">
                        <p>若 \\(\\theta | \\mathbf{x} \\sim \\text{Beta}(a', b')\\)（其中 \\(a' = a + x, b' = b + n - x\\)），则下一次试验成功的后验预测概率为</p>
                        \\[P(X_{n+1} = 1 | \\mathbf{x}) = E[\\theta | \\mathbf{x}] = \\frac{a'}{a' + b'} = \\frac{a + x}{a + b + n}\\]
                        <p>这就是著名的 <strong>Laplace 继承规则</strong>（succession rule）的推广：若先验为 Beta(1,1)，则 \\(P(X_{n+1} = 1 | \\mathbf{x}) = \\frac{x + 1}{n + 2}\\)。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="credible-interval-viz"></div>
            `,
            visualizations: [
                {
                    id: 'credible-interval-viz',
                    title: 'Interactive: 可信区间 vs 置信区间',
                    description: '对比 Bayes 可信区间与频率学派置信区间的含义差异',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 60, originY: 360, scale: 480
                        });

                        var postA = 10, postB = 6;
                        var alpha = 0.05;
                        var showHPD = false;

                        VizEngine.createSlider(controls, 'Post. a', 1, 30, postA, 1, function(v) { postA = Math.round(v); draw(); });
                        VizEngine.createSlider(controls, 'Post. b', 1, 30, postB, 1, function(v) { postB = Math.round(v); draw(); });
                        VizEngine.createSlider(controls, 'alpha', 0.01, 0.20, alpha, 0.01, function(v) { alpha = v; draw(); });
                        VizEngine.createButton(controls, 'Toggle HPD / Equal-tail', function() { showHPD = !showHPD; draw(); });

                        // Simple beta quantile via bisection
                        function betaCDF(x, a, b) {
                            if (x <= 0) return 0;
                            if (x >= 1) return 1;
                            // Numerical integration (trapezoidal)
                            var steps = 500;
                            var sum = 0;
                            var dx = x / steps;
                            for (var i = 0; i <= steps; i++) {
                                var t = i * dx;
                                var f = (t > 0 && t < 1) ? VizEngine.betaPDF(t, a, b) : 0;
                                sum += f * (i === 0 || i === steps ? 0.5 : 1);
                            }
                            return sum * dx;
                        }

                        function betaQuantile(p, a, b) {
                            var lo = 0, hi = 1;
                            for (var iter = 0; iter < 60; iter++) {
                                var mid = (lo + hi) / 2;
                                if (betaCDF(mid, a, b) < p) lo = mid;
                                else hi = mid;
                            }
                            return (lo + hi) / 2;
                        }

                        function findHPD(a, b, alpha) {
                            // Find HPD by scanning: shortest interval with 1-alpha coverage
                            var bestLen = 1;
                            var bestLo = 0, bestHi = 1;
                            var steps = 200;
                            for (var i = 0; i < steps; i++) {
                                var lo = betaQuantile(i / steps * alpha, a, b);
                                var hi = betaQuantile(i / steps * alpha + (1 - alpha), a, b);
                                if (hi - lo < bestLen) {
                                    bestLen = hi - lo;
                                    bestLo = lo;
                                    bestHi = hi;
                                }
                            }
                            return [bestLo, bestHi];
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Find max y
                            var maxY = 0;
                            for (var i = 1; i < 200; i++) {
                                var t = i / 200;
                                var y = VizEngine.betaPDF(t, postA, postB);
                                if (y > maxY) maxY = y;
                            }
                            if (maxY < 0.5) maxY = 0.5;
                            var yScale = 300 / maxY;

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(60, 360); ctx.lineTo(540, 360); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(60, 360); ctx.lineTo(60, 30); ctx.stroke();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var tick = 0; tick <= 10; tick++) {
                                ctx.fillText((tick / 10).toFixed(1), 60 + tick * 48, 364);
                            }

                            // Compute interval
                            var lo, hi;
                            if (showHPD) {
                                var hpd = findHPD(postA, postB, alpha);
                                lo = hpd[0]; hi = hpd[1];
                            } else {
                                lo = betaQuantile(alpha / 2, postA, postB);
                                hi = betaQuantile(1 - alpha / 2, postA, postB);
                            }

                            // Shade credible interval
                            ctx.fillStyle = viz.colors.purple + '44';
                            ctx.beginPath();
                            ctx.moveTo(60 + lo * 480, 360);
                            var steps = 200;
                            for (var i = 0; i <= steps; i++) {
                                var t = lo + (hi - lo) * i / steps;
                                var y = VizEngine.betaPDF(t, postA, postB);
                                ctx.lineTo(60 + t * 480, 360 - y * yScale);
                            }
                            ctx.lineTo(60 + hi * 480, 360);
                            ctx.closePath();
                            ctx.fill();

                            // Draw posterior curve
                            ctx.strokeStyle = viz.colors.purple;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;
                            for (var i = 1; i < 200; i++) {
                                var t = i / 200;
                                var y = VizEngine.betaPDF(t, postA, postB);
                                var px = 60 + t * 480, py = 360 - y * yScale;
                                if (!started) { ctx.moveTo(px, py); started = true; }
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Interval markers
                            ctx.strokeStyle = viz.colors.yellow;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([5, 3]);
                            ctx.beginPath();
                            ctx.moveTo(60 + lo * 480, 360);
                            ctx.lineTo(60 + lo * 480, 30);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(60 + hi * 480, 360);
                            ctx.lineTo(60 + hi * 480, 30);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Posterior mean
                            var postMean = postA / (postA + postB);
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([3, 3]);
                            ctx.beginPath();
                            ctx.moveTo(60 + postMean * 480, 360);
                            ctx.lineTo(60 + postMean * 480, 30);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Legend
                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = viz.colors.purple;
                            ctx.fillText('Posterior: Beta(' + postA + ', ' + postB + ')', 80, 35);
                            ctx.fillStyle = viz.colors.yellow;
                            var intType = showHPD ? 'HPD' : 'Equal-tail';
                            ctx.fillText((100 * (1 - alpha)).toFixed(0) + '% ' + intType + ' CI: [' + lo.toFixed(3) + ', ' + hi.toFixed(3) + ']', 80, 53);
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('Width: ' + (hi - lo).toFixed(4) + '  |  Post. mean: ' + postMean.toFixed(3), 80, 71);
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('-- Post. mean', 400, 35);
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '证明：在平方损失下，Bayes 估计为后验均值。即证 \\(\\hat{d} = E[\\theta | \\mathbf{x}]\\) 最小化 \\(E[(\\theta - d)^2 | \\mathbf{x}]\\)。',
                    hint: '对 d 求导并令其为零，或展开为 Var + Bias² 的形式。',
                    solution: 'E[(θ-d)²|x] = E[θ²|x] - 2dE[θ|x] + d²。对 d 求导：-2E[θ|x] + 2d = 0，得 d = E[θ|x]。二阶导 = 2 > 0，确认为最小值点。'
                },
                {
                    question: '设 \\(\\theta | \\mathbf{x} \\sim \\text{Beta}(12, 8)\\)，求 95% 等尾可信区间。（提示：Beta(12,8) 的分位数可查表或用数值方法。）',
                    hint: '等尾可信区间为 [q_{0.025}, q_{0.975}]，其中 q_p 是 Beta(12,8) 的第 p 分位数。',
                    solution: '使用 Beta(12,8) 的分位数函数（可用统计软件计算）：q_{0.025} ≈ 0.383，q_{0.975} ≈ 0.791。95% 等尾可信区间约为 [0.383, 0.791]。后验均值 = 12/20 = 0.6 在区间中心附近。'
                },
                {
                    question: '在 Beta-Binomial 模型中，证明后验预测分布为 Beta-Binomial 分布：若 \\(\\theta | \\mathbf{x} \\sim \\text{Beta}(a,b)\\)，\\(Y | \\theta \\sim \\text{Binomial}(m, \\theta)\\)，则 \\(P(Y = y | \\mathbf{x}) = \\binom{m}{y} \\frac{B(a+y, b+m-y)}{B(a,b)}\\)。',
                    hint: '对 θ 积分：P(Y=y|x) = ∫ P(Y=y|θ) π(θ|x) dθ。',
                    solution: 'P(Y=y|x) = ∫₀¹ C(m,y)θ^y(1-θ)^{m-y} · θ^{a-1}(1-θ)^{b-1}/B(a,b) dθ = C(m,y)/B(a,b) · ∫₀¹ θ^{a+y-1}(1-θ)^{b+m-y-1} dθ = C(m,y) · B(a+y, b+m-y)/B(a,b)。这就是 Beta-Binomial 分布。'
                }
            ]
        },

        // ==================== Section 4: 先验选择 ====================
        {
            id: 'ch15-sec04',
            title: '先验选择',
            content: `
                <h2>先验选择</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>"先验选择"是 Bayes 统计中最具争议也最具艺术性的部分。信息先验引入领域知识可以提高推断效率，但选择不当则可能误导结论；无信息先验旨在"让数据说话"，但也并非完全客观。理解先验敏感性对于负责任地使用 Bayes 方法至关重要。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.14 (信息先验与无信息先验)</div>
                    <div class="env-body">
                        <p><strong>信息先验（Informative prior）</strong>：包含关于参数的实质性先验知识。例如，若已知 \\(\\theta \\in [0.3, 0.7]\\) 的可能性很高，可选 \\(\\text{Beta}(10, 10)\\)。</p>
                        <p><strong>无信息先验（Non-informative prior）</strong>：旨在对参数取值不表达偏好，使后验主要由数据驱动。常见选择：</p>
                        <ul>
                            <li>均匀先验：\\(\\pi(\\theta) \\propto 1\\)</li>
                            <li>Jeffreys 先验：\\(\\pi(\\theta) \\propto \\sqrt{I(\\theta)}\\)，其中 \\(I(\\theta)\\) 是 Fisher 信息量</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.15 (Jeffreys 先验)</div>
                    <div class="env-body">
                        <p>Jeffreys 先验定义为</p>
                        \\[\\pi_J(\\theta) \\propto \\sqrt{\\det I(\\theta)}\\]
                        <p>其中 \\(I(\\theta)\\) 是 Fisher 信息矩阵。Jeffreys 先验具有<strong>参数化不变性</strong>：若 \\(\\phi = h(\\theta)\\) 是一一变换，则在 \\(\\phi\\) 参数化下的 Jeffreys 先验恰好是 \\(\\pi_J(\\theta)\\) 经变量替换后得到的分布。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (参数化不变性)</div>
                    <div class="env-body">
                        <p>设 \\(\\phi = h(\\theta)\\) 为一一可微映射。在 \\(\\phi\\) 参数化下，Fisher 信息为</p>
                        \\[I_\\phi(\\phi) = I_\\theta(h^{-1}(\\phi)) \\cdot \\left(\\frac{d\\theta}{d\\phi}\\right)^2\\]
                        <p>Jeffreys 先验在 \\(\\phi\\) 下为</p>
                        \\[\\pi_J(\\phi) \\propto \\sqrt{I_\\phi(\\phi)} = \\sqrt{I_\\theta(\\theta)} \\cdot \\left|\\frac{d\\theta}{d\\phi}\\right|\\]
                        <p>而 \\(\\pi_J(\\theta)\\) 经变量替换后也给出 \\(\\pi_J(\\theta) \\cdot |d\\theta/d\\phi| \\propto \\sqrt{I_\\theta(\\theta)} \\cdot |d\\theta/d\\phi|\\)。两者一致。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 15.16 (常见模型的 Jeffreys 先验)</div>
                    <div class="env-body">
                        <ul>
                            <li><strong>Bernoulli(θ)</strong>：\\(I(\\theta) = \\frac{1}{\\theta(1-\\theta)}\\)，故 \\(\\pi_J(\\theta) \\propto \\theta^{-1/2}(1-\\theta)^{-1/2}\\)，即 \\(\\text{Beta}(1/2, 1/2)\\)（Jeffreys-Haldane 先验弧正弦分布）。</li>
                            <li><strong>Normal(μ, σ² known)</strong>：\\(I(\\mu) = 1/\\sigma^2\\)（常数），故 \\(\\pi_J(\\mu) \\propto 1\\)，即均匀先验。</li>
                            <li><strong>Normal(μ known, σ²)</strong>：\\(I(\\sigma^2) = \\frac{1}{2\\sigma^4}\\)，故 \\(\\pi_J(\\sigma^2) \\propto 1/\\sigma^2\\)。</li>
                            <li><strong>Poisson(λ)</strong>：\\(I(\\lambda) = 1/\\lambda\\)，故 \\(\\pi_J(\\lambda) \\propto \\lambda^{-1/2}\\)。</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (非正常先验)</div>
                    <div class="env-body">
                        <p>许多无信息先验是<strong>非正常的</strong>（improper），即 \\(\\int \\pi(\\theta) d\\theta = \\infty\\)。例如 \\(\\pi(\\mu) \\propto 1\\) 在 \\(\\mu \\in \\mathbb{R}\\) 上不可积。使用非正常先验时必须验证后验是正常分布（即后验可积），否则推断无意义。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.17 (先验敏感性分析)</div>
                    <div class="env-body">
                        <p><strong>先验敏感性分析</strong>（prior sensitivity analysis）是指在多种合理的先验选择下检查后验推断的变化程度。具体做法：</p>
                        <ul>
                            <li>选取一组代表性的先验（如不同的超参数值），比较对应的后验分布。</li>
                            <li>若后验对先验选择不敏感（即不同先验导致相似的后验），则推断结论是<strong>稳健的</strong>（robust）。</li>
                            <li>若后验对先验高度敏感，说明数据信息不足以压制先验，此时应谨慎报告先验假设。</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (何时先验影响大？)</div>
                    <div class="env-body">
                        <p>先验的影响大小取决于数据量与先验"强度"的相对关系：</p>
                        <ul>
                            <li>样本量 \\(n\\) 很小时，先验对后验影响显著。</li>
                            <li>样本量 \\(n\\) 很大时，后验由数据主导，先验影响可忽略（Bernstein-von Mises 定理的精神）。</li>
                            <li>先验的"有效样本量"（如 Beta(a,b) 中的 \\(a+b\\)）越大，先验的影响越强。</li>
                        </ul>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="prior-sensitivity-viz"></div>
            `,
            visualizations: [
                {
                    id: 'prior-sensitivity-viz',
                    title: 'Interactive: 先验敏感性分析',
                    description: '比较不同先验下的后验分布，观察先验选择如何影响推断结论',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 60, originY: 370, scale: 480
                        });

                        var nObs = 10, xObs = 6;

                        // Three priors to compare
                        var priors = [
                            {a: 1, b: 1, label: 'Uniform Beta(1,1)', color: null},
                            {a: 0.5, b: 0.5, label: 'Jeffreys Beta(0.5,0.5)', color: null},
                            {a: 5, b: 5, label: 'Informative Beta(5,5)', color: null}
                        ];

                        VizEngine.createSlider(controls, 'n (sample)', 1, 100, nObs, 1, function(v) { nObs = Math.round(v); draw(); });
                        VizEngine.createSlider(controls, 'x (successes)', 0, 100, xObs, 1, function(v) { xObs = Math.min(Math.round(v), nObs); draw(); });

                        function draw() {
                            if (xObs > nObs) xObs = nObs;
                            viz.clear();
                            var ctx = viz.ctx;

                            var colors = [viz.colors.blue, viz.colors.orange, viz.colors.green];
                            priors[0].color = colors[0];
                            priors[1].color = colors[1];
                            priors[2].color = colors[2];

                            // Compute posteriors and find max y
                            var maxY = 0;
                            for (var p = 0; p < priors.length; p++) {
                                var pa = priors[p].a + xObs;
                                var pb = priors[p].b + (nObs - xObs);
                                for (var i = 1; i < 200; i++) {
                                    var t = i / 200;
                                    var y = VizEngine.betaPDF(t, pa, pb);
                                    if (y > maxY) maxY = y;
                                }
                            }
                            if (maxY < 1) maxY = 1;
                            var yScale = 300 / maxY;

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(60, 370); ctx.lineTo(540, 370); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(60, 370); ctx.lineTo(60, 30); ctx.stroke();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var tick = 0; tick <= 10; tick++) {
                                ctx.fillText((tick / 10).toFixed(1), 60 + tick * 48, 374);
                            }
                            ctx.fillText('θ', 300, 390);

                            // Draw each posterior
                            for (var p = 0; p < priors.length; p++) {
                                var pa = priors[p].a + xObs;
                                var pb = priors[p].b + (nObs - xObs);
                                var col = priors[p].color;

                                ctx.strokeStyle = col;
                                ctx.lineWidth = 2.5;
                                ctx.beginPath();
                                var started = false;
                                for (var i = 1; i < 200; i++) {
                                    var t = i / 200;
                                    var y = VizEngine.betaPDF(t, pa, pb);
                                    var px = 60 + t * 480, py = 370 - y * yScale;
                                    if (!started) { ctx.moveTo(px, py); started = true; }
                                    else ctx.lineTo(px, py);
                                }
                                ctx.stroke();

                                // Posterior mean marker
                                var postMean = pa / (pa + pb);
                                ctx.fillStyle = col;
                                ctx.beginPath();
                                ctx.arc(60 + postMean * 480, 370, 4, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // MLE marker
                            if (nObs > 0) {
                                var mle = xObs / nObs;
                                ctx.strokeStyle = viz.colors.red + '88';
                                ctx.lineWidth = 1.5;
                                ctx.setLineDash([4, 4]);
                                ctx.beginPath();
                                ctx.moveTo(60 + mle * 480, 370);
                                ctx.lineTo(60 + mle * 480, 30);
                                ctx.stroke();
                                ctx.setLineDash([]);
                            }

                            // Legend
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            for (var p = 0; p < priors.length; p++) {
                                var pa = priors[p].a + xObs;
                                var pb = priors[p].b + (nObs - xObs);
                                var pm = pa / (pa + pb);
                                ctx.fillStyle = priors[p].color;
                                ctx.fillText(priors[p].label + ' -> Post(' + pa.toFixed(1) + ',' + pb.toFixed(1) + ')  mean=' + pm.toFixed(3), 80, 30 + p * 16);
                            }
                            ctx.fillStyle = viz.colors.red;
                            ctx.fillText('MLE = ' + (nObs > 0 ? (xObs / nObs).toFixed(3) : 'N/A') + '  |  n = ' + nObs + ', x = ' + xObs, 80, 30 + 3 * 16);

                            // Spread measure
                            var means = priors.map(function(pr) { return (pr.a + xObs) / (pr.a + pr.b + nObs); });
                            var spread = Math.max.apply(null, means) - Math.min.apply(null, means);
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('Posterior mean spread: ' + spread.toFixed(4) + (spread < 0.01 ? ' (robust!)' : spread < 0.05 ? ' (moderate)' : ' (sensitive to prior)'), 80, 30 + 4 * 16);
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '求 Bernoulli(θ) 模型的 Jeffreys 先验。提示：先求 Fisher 信息 \\(I(\\theta) = E\\left[-\\frac{\\partial^2}{\\partial \\theta^2} \\log f(X|\\theta)\\right]\\)。',
                    hint: 'Bernoulli 的对数似然为 x log θ + (1-x) log(1-θ)。',
                    solution: '对数似然 l(θ) = x log θ + (1-x) log(1-θ)。二阶导 l\'\'(θ) = -x/θ² - (1-x)/(1-θ)²。取期望 I(θ) = E[-l\'\'(θ)] = θ/θ² + (1-θ)/(1-θ)² = 1/θ + 1/(1-θ) = 1/(θ(1-θ))。故 π_J(θ) ∝ √I(θ) = θ^{-1/2}(1-θ)^{-1/2}，即 Beta(1/2, 1/2)。'
                },
                {
                    question: '给出一个非正常先验导致非正常后验的例子，解释为什么这种情况是有问题的。',
                    hint: '考虑观测数据量为零或先验选择过于极端的情况。',
                    solution: '例如：设 X|θ ~ N(θ, 1) 但无观测数据（n=0），先验 π(θ) ∝ 1。则"后验" π(θ|∅) ∝ π(θ) ∝ 1，仍为非正常分布。此时无法定义后验均值、可信区间等，推断完全无意义。这说明非正常先验必须在有充分数据时才能使用。'
                },
                {
                    question: '在 Normal(μ, σ²) 模型中（σ² 已知），比较均匀先验和正态先验 \\(N(0, 100^2)\\) 下的后验。当 \\(n = 5, \\bar{x} = 3, \\sigma = 1\\) 时，两种后验的均值和方差差多少？',
                    hint: 'Normal-Normal 共轭公式。均匀先验可视为 τ² → ∞ 的正态先验。',
                    solution: '正态先验 N(0, 10000)：后验精度 = 5/1 + 1/10000 = 5.0001，后验均值 = (5·3 + 0/10000)/5.0001 ≈ 2.9999，后验方差 ≈ 1/5.0001 ≈ 0.2000。均匀先验（τ²→∞）：后验均值 = x̄ = 3，后验方差 = σ²/n = 0.2。差异极小（均值差约 0.0001，方差差约 0.00004%），说明当先验方差很大时，先验几乎无影响。'
                }
            ]
        },

        // ==================== Section 5: MCMC 初步 ====================
        {
            id: 'ch15-sec05',
            title: 'MCMC 初步',
            content: `
                <h2>MCMC 初步</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>共轭先验使后验有解析表达式，但现实中许多模型的后验无法解析求解：积分 \\(m(\\mathbf{x}) = \\int L(\\theta|\\mathbf{x})\\pi(\\theta)d\\theta\\) 可能非常复杂。<strong>马尔可夫链蒙特卡罗</strong>（MCMC）方法通过构造一条以后验为平稳分布的 Markov 链，从后验分布中产生样本，进而近似任意后验推断。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.18 (MCMC 的基本思想)</div>
                    <div class="env-body">
                        <p>给定目标分布 \\(\\pi(\\theta | \\mathbf{x})\\)（只需知道未归一化的核 \\(q(\\theta) \\propto L(\\theta|\\mathbf{x})\\pi(\\theta)\\)），MCMC 构造一条 Markov 链 \\(\\theta^{(0)}, \\theta^{(1)}, \\theta^{(2)}, \\ldots\\)，使得：</p>
                        <ul>
                            <li>链的平稳分布为 \\(\\pi(\\theta | \\mathbf{x})\\)</li>
                            <li>链是遍历的（ergodic）：经过足够长时间后，\\(\\theta^{(t)}\\) 的分布收敛到 \\(\\pi(\\theta | \\mathbf{x})\\)</li>
                        </ul>
                        <p>收集链上的样本（丢弃初始的 burn-in 部分），即可近似后验的任意期望：</p>
                        \\[E[g(\\theta) | \\mathbf{x}] \\approx \\frac{1}{T - T_0} \\sum_{t=T_0+1}^{T} g(\\theta^{(t)})\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.19 (Metropolis-Hastings 算法)</div>
                    <div class="env-body">
                        <p>设目标分布的未归一化密度为 \\(q(\\theta)\\)，提议分布为 \\(J(\\theta^* | \\theta^{(t)})\\)。Metropolis-Hastings 算法如下：</p>
                        <ol>
                            <li>初始化 \\(\\theta^{(0)}\\)。</li>
                            <li>在第 \\(t\\) 步，从 \\(J(\\cdot | \\theta^{(t)})\\) 产生候选值 \\(\\theta^*\\)。</li>
                            <li>计算接受概率
                            \\[\\alpha(\\theta^{(t)}, \\theta^*) = \\min\\!\\left(1, \\; \\frac{q(\\theta^*) \\, J(\\theta^{(t)} | \\theta^*)}{q(\\theta^{(t)}) \\, J(\\theta^* | \\theta^{(t)})}\\right)\\]
                            </li>
                            <li>以概率 \\(\\alpha\\) 接受：\\(\\theta^{(t+1)} = \\theta^*\\)；以概率 \\(1 - \\alpha\\) 拒绝：\\(\\theta^{(t+1)} = \\theta^{(t)}\\)。</li>
                        </ol>
                        <p>若提议分布对称（\\(J(\\theta^*|\\theta) = J(\\theta|\\theta^*)\\)），则简化为 <strong>Metropolis 算法</strong>：</p>
                        \\[\\alpha = \\min\\!\\left(1, \\; \\frac{q(\\theta^*)}{q(\\theta^{(t)})}\\right)\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (满足 detailed balance)</div>
                    <div class="env-body">
                        <p>MH 算法保证转移核满足 detailed balance 条件：</p>
                        \\[\\pi(\\theta) \\, K(\\theta \\to \\theta') = \\pi(\\theta') \\, K(\\theta' \\to \\theta)\\]
                        <p>其中 \\(K(\\theta \\to \\theta') = J(\\theta' | \\theta) \\alpha(\\theta, \\theta')\\)。</p>
                        <p>不妨设 \\(q(\\theta') J(\\theta | \\theta') \\ge q(\\theta) J(\\theta' | \\theta)\\)。则 \\(\\alpha(\\theta, \\theta') = \\frac{q(\\theta')J(\\theta|\\theta')}{q(\\theta)J(\\theta'|\\theta)}\\)，\\(\\alpha(\\theta', \\theta) = 1\\)。</p>
                        <p>左边：\\(q(\\theta) \\cdot J(\\theta'|\\theta) \\cdot \\frac{q(\\theta')J(\\theta|\\theta')}{q(\\theta)J(\\theta'|\\theta)} = q(\\theta') J(\\theta|\\theta')\\)</p>
                        <p>右边：\\(q(\\theta') \\cdot J(\\theta|\\theta') \\cdot 1 = q(\\theta') J(\\theta|\\theta')\\)</p>
                        <p>两边相等。因此 \\(\\pi(\\theta|\\mathbf{x})\\) 是链的平稳分布。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 15.20 (Random Walk Metropolis)</div>
                    <div class="env-body">
                        <p>最常见的 MH 变体是 <strong>Random Walk Metropolis</strong>：</p>
                        <p>提议 \\(\\theta^* = \\theta^{(t)} + \\epsilon\\)，其中 \\(\\epsilon \\sim N(0, \\sigma_p^2)\\)。由于正态密度对称，接受率简化为</p>
                        \\[\\alpha = \\min\\!\\left(1, \\frac{q(\\theta^*)}{q(\\theta^{(t)})}\\right)\\]
                        <p>步长 \\(\\sigma_p\\) 的选择很关键：太小导致链移动缓慢（高接受率但混合差）；太大导致大量拒绝（低接受率）。经验法则：调整 \\(\\sigma_p\\) 使接受率约为 <strong>23%-44%</strong>（Roberts et al., 1997）。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.21 (收敛诊断)</div>
                    <div class="env-body">
                        <p>MCMC 的收敛诊断包括：</p>
                        <ul>
                            <li><strong>Trace plot</strong>：将 \\(\\theta^{(t)}\\) 对 \\(t\\) 作图。收敛的链应该看起来像"噪声围绕一个稳定值震荡"（caterpillar plot），而非呈现趋势或停滞。</li>
                            <li><strong>自相关函数（ACF）</strong>：理想状态下 ACF 快速衰减。高自相关表示链混合不良。</li>
                            <li><strong>有效样本量（ESS）</strong>：\\(\\text{ESS} = T / (1 + 2\\sum_{k=1}^{\\infty} \\rho_k)\\)，其中 \\(\\rho_k\\) 为滞后 \\(k\\) 的自相关。ESS 反映独立样本等价数。</li>
                            <li><strong>Gelman-Rubin \\(\\hat{R}\\)</strong>：运行多条链，比较链间方差与链内方差。\\(\\hat{R} \\approx 1\\) 表示收敛。</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Burn-in 与 Thinning)</div>
                    <div class="env-body">
                        <p><strong>Burn-in</strong>：Markov 链从任意初始点出发，需要经过一定步数才能接近平稳分布。初始阶段（burn-in period）的样本应丢弃。</p>
                        <p><strong>Thinning</strong>：为减少自相关，有时每隔 \\(k\\) 步取一个样本（如 thin = 10 表示每 10 步取一个）。但注意：从统计效率角度，thinning 不总是必要的（Link & Eaton, 2012）。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="mh-viz"></div>

                <div class="env-block remark">
                    <div class="env-title">Remark (超越 Metropolis-Hastings)</div>
                    <div class="env-body">
                        <p>现代 Bayes 计算的工具箱远不止 MH：</p>
                        <ul>
                            <li><strong>Gibbs 抽样</strong>：多参数模型中，逐一从条件后验抽样。是 MH 的特殊情形（接受率恒为 1）。</li>
                            <li><strong>Hamilton Monte Carlo (HMC)</strong>：利用梯度信息引导提议，大幅提高高维空间中的采样效率。Stan 软件的核心算法。</li>
                            <li><strong>变分推断（Variational Inference）</strong>：将后验近似问题转化为优化问题，速度快但近似可能有偏。</li>
                        </ul>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'mh-viz',
                    title: 'Interactive: Metropolis-Hastings 随机游走',
                    description: '观察 MH 算法如何在目标分布上游走，理解提议步长对混合效率的影响',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 500,
                            originX: 60, originY: 240, scale: 480
                        });

                        // Target: Beta(a, b) distribution
                        var targetA = 6, targetB = 4;
                        var proposalSD = 0.1;
                        var chain = [0.5];
                        var accepted = [true];
                        var maxIter = 500;
                        var running = false;
                        var speed = 50;

                        VizEngine.createSlider(controls, 'Target a', 1, 20, targetA, 1, function(v) { targetA = Math.round(v); resetChain(); });
                        VizEngine.createSlider(controls, 'Target b', 1, 20, targetB, 1, function(v) { targetB = Math.round(v); resetChain(); });
                        VizEngine.createSlider(controls, 'Step size σ', 0.01, 0.5, proposalSD, 0.01, function(v) { proposalSD = v; resetChain(); });

                        VizEngine.createButton(controls, 'Run 200 steps', function() {
                            for (var i = 0; i < 200; i++) doStep();
                            draw();
                        });
                        VizEngine.createButton(controls, 'Step x1', function() {
                            doStep(); draw();
                        });
                        VizEngine.createButton(controls, 'Reset', function() { resetChain(); });

                        function logTarget(theta) {
                            if (theta <= 0 || theta >= 1) return -Infinity;
                            return (targetA - 1) * Math.log(theta) + (targetB - 1) * Math.log(1 - theta);
                        }

                        function doStep() {
                            var current = chain[chain.length - 1];
                            var proposal = current + VizEngine.randomNormal(0, proposalSD);
                            var logAlpha = logTarget(proposal) - logTarget(current);
                            if (Math.log(Math.random()) < logAlpha) {
                                chain.push(proposal);
                                accepted.push(true);
                            } else {
                                chain.push(current);
                                accepted.push(false);
                            }
                        }

                        function resetChain() {
                            chain = [0.5];
                            accepted = [true];
                            draw();
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // --- Top panel: target density + histogram of samples ---
                            var topH = 220;
                            var botTop = 260;
                            var botH = 200;

                            // Find max of target density
                            var maxY = 0;
                            for (var i = 1; i < 200; i++) {
                                var t = i / 200;
                                var y = VizEngine.betaPDF(t, targetA, targetB);
                                if (y > maxY) maxY = y;
                            }
                            if (maxY < 1) maxY = 1;
                            var yScale = (topH - 40) / maxY;

                            // Histogram of chain samples (after burn-in)
                            var burnin = Math.min(50, Math.floor(chain.length * 0.1));
                            var samples = chain.slice(burnin);
                            if (samples.length > 1) {
                                var nBins = 30;
                                var bins = new Array(nBins).fill(0);
                                for (var i = 0; i < samples.length; i++) {
                                    var bi = Math.floor(samples[i] * nBins);
                                    if (bi >= 0 && bi < nBins) bins[bi]++;
                                }
                                var maxBin = Math.max.apply(null, bins);
                                if (maxBin > 0) {
                                    var binScale = maxY / maxBin;
                                    for (var i = 0; i < nBins; i++) {
                                        var bx = 60 + (i / nBins) * 480;
                                        var bw = 480 / nBins;
                                        var bh = bins[i] * binScale * yScale;
                                        ctx.fillStyle = viz.colors.purple + '44';
                                        ctx.fillRect(bx, topH - bh, bw, bh);
                                        ctx.strokeStyle = viz.colors.purple + '66';
                                        ctx.lineWidth = 0.5;
                                        ctx.strokeRect(bx, topH - bh, bw, bh);
                                    }
                                }
                            }

                            // Target density curve
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;
                            for (var i = 1; i < 200; i++) {
                                var t = i / 200;
                                var y = VizEngine.betaPDF(t, targetA, targetB);
                                var px = 60 + t * 480, py = topH - y * yScale;
                                if (!started) { ctx.moveTo(px, py); started = true; }
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Top axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(60, topH); ctx.lineTo(540, topH); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(60, topH); ctx.lineTo(60, 10); ctx.stroke();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system, sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var tick = 0; tick <= 10; tick++) {
                                ctx.fillText((tick / 10).toFixed(1), 60 + tick * 48, topH + 3);
                            }

                            // --- Bottom panel: trace plot ---
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(60, botTop + botH); ctx.lineTo(540, botTop + botH); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(60, botTop + botH); ctx.lineTo(60, botTop); ctx.stroke();

                            // Y-axis labels for trace
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'middle';
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('0', 55, botTop + botH);
                            ctx.fillText('0.5', 55, botTop + botH / 2);
                            ctx.fillText('1', 55, botTop);

                            // X-axis label
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Iteration', 300, botTop + botH + 5);

                            // Draw trace
                            var nShow = Math.min(chain.length, 500);
                            var startIdx = chain.length - nShow;
                            ctx.strokeStyle = viz.colors.blue + 'aa';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            for (var i = 0; i < nShow; i++) {
                                var px = 60 + (i / (nShow - 1 || 1)) * 480;
                                var py = botTop + botH - chain[startIdx + i] * botH;
                                if (i === 0) ctx.moveTo(px, py);
                                else ctx.lineTo(px, py);
                            }
                            ctx.stroke();

                            // Accepted/rejected dots (show last 100)
                            var dotShow = Math.min(chain.length, 100);
                            var dotStart = chain.length - dotShow;
                            for (var i = 0; i < dotShow; i++) {
                                var idx = dotStart + i;
                                var px = 60 + (i / (dotShow - 1 || 1)) * 480;
                                var py = botTop + botH - chain[idx] * botH;
                                ctx.fillStyle = accepted[idx] ? viz.colors.green : viz.colors.red;
                                ctx.beginPath();
                                ctx.arc(px, py, 2, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // Stats
                            var nAccepted = 0;
                            for (var i = 1; i < accepted.length; i++) {
                                if (accepted[i]) nAccepted++;
                            }
                            var accRate = chain.length > 1 ? nAccepted / (chain.length - 1) : 0;
                            var postMean = targetA / (targetA + targetB);

                            ctx.font = '12px -apple-system, sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('Target: Beta(' + targetA + ', ' + targetB + ')  mean=' + postMean.toFixed(3), 80, 10);
                            ctx.fillStyle = viz.colors.purple;
                            ctx.fillText('Histogram of MCMC samples (after burn-in)', 80, 26);
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('Chain length: ' + chain.length + '  |  Accept rate: ' + (accRate * 100).toFixed(1) + '%  |  σ_p = ' + proposalSD.toFixed(3), 80, 242);

                            if (samples.length > 1) {
                                var sampleMean = VizEngine.mean(samples);
                                ctx.fillText('Sample mean: ' + sampleMean.toFixed(3) + '  |  True mean: ' + postMean.toFixed(3), 300, 242);
                            }
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '在 Random Walk Metropolis 中，为什么提议步长 \\(\\sigma_p\\) 的选择如此重要？说明 \\(\\sigma_p\\) 太大和太小分别会导致什么问题。',
                    hint: '考虑接受率和链的移动速度。',
                    solution: 'σ_p 太小：几乎所有提议都被接受（接受率接近 1），但每步只移动很小距离，链需要非常多的步数才能充分探索参数空间，混合很慢。σ_p 太大：提议经常跳到后验密度很低的区域，大量被拒绝（接受率很低），链原地踏步。最优接受率约为 23%（一维时约 44%），此时探索效率最高。'
                },
                {
                    question: '证明：当提议分布对称（\\(J(\\theta^*|\\theta) = J(\\theta|\\theta^*)\\)）时，Metropolis-Hastings 接受率简化为 \\(\\alpha = \\min(1, q(\\theta^*)/q(\\theta^{(t)}))\\)。',
                    hint: '将对称性条件代入 MH 接受概率的一般公式。',
                    solution: 'MH 接受率为 α = min(1, q(θ*)J(θ|θ*) / (q(θ)J(θ*|θ)))。当 J 对称时，J(θ|θ*) = J(θ*|θ)，故 J 项约去，得 α = min(1, q(θ*)/q(θ))。这就是 Metropolis 算法的接受率。'
                },
                {
                    question: '设目标分布为 \\(\\pi(\\theta) \\propto e^{-\\theta^4}\\)（\\(\\theta \\in \\mathbb{R}\\)）。写出使用 Random Walk Metropolis 从此分布抽样的完整算法步骤（包括初始化、提议、接受/拒绝）。为什么不需要知道归一化常数？',
                    hint: '接受率只涉及密度之比，归一化常数在分子分母中约去。',
                    solution: '算法：(1) 初始化 θ⁰ = 0。(2) 对 t = 0,1,2,...，提议 θ* = θ^t + ε，ε ~ N(0, σ²)。(3) 计算 α = min(1, exp(-θ*⁴)/exp(-θ^{(t)⁴})) = min(1, exp(θ^{(t)⁴} - θ*⁴))。(4) 生成 U ~ Uniform(0,1)：若 U < α，则 θ^{t+1} = θ*；否则 θ^{t+1} = θ^t。不需要归一化常数因为 α = min(1, q(θ*)/q(θ^t))，其中 q(θ) = exp(-θ⁴)。真实的归一化密度 π(θ) = q(θ)/Z，在比值中 Z 约去。'
                }
            ]
        }
    ]
});

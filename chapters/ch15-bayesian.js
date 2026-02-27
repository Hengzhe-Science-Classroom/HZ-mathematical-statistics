window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch15',
    number: 15,
    title: 'Introduction to Bayesian Statistics',
    subtitle: 'Introduction to Bayesian Statistics',
    sections: [
        // ==================== Section 1: Bayesian Inference Framework ====================
        {
            id: 'ch15-sec01',
            title: 'Bayesian Inference Framework',
            content: `
                <h2>Bayesian Inference Framework / Bayes 推断框架</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The frequentist school treats the parameter \\(\\theta\\) as a fixed unknown constant and infers its value through repeated sampling. The Bayesian school, by contrast, assigns a <strong>probability distribution</strong> (概率分布) to the parameter: we first express a prior belief about \\(\\theta\\) based on existing knowledge (the prior, 先验), then update that belief using observed data to obtain the posterior distribution (后验分布). This process of "updating from belief to knowledge" lies at the heart of Bayesian inference.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.1 (Fundamental Components of Bayesian Inference)</div>
                    <div class="env-body">
                        <p>The Bayesian inference framework consists of three core components:</p>
                        <ul>
                            <li><strong>Prior distribution</strong> (先验分布) \\(\\pi(\\theta)\\): a probabilistic description of the parameter \\(\\theta\\) before observing data.</li>
                            <li><strong>Likelihood function</strong> (似然函数) \\(L(\\theta | \\mathbf{x}) = f(\\mathbf{x} | \\theta)\\): the probability (density) of observing data \\(\\mathbf{x}\\) given parameter \\(\\theta\\).</li>
                            <li><strong>Posterior distribution</strong> (后验分布) \\(\\pi(\\theta | \\mathbf{x})\\): the updated belief about \\(\\theta\\) after combining the prior with data.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.2 (Bayes' Theorem — Parameter Inference Form)</div>
                    <div class="env-body">
                        <p>Let \\(\\theta \\in \\Theta\\) be the parameter and \\(\\mathbf{x} = (x_1, \\ldots, x_n)\\) the observed data. If the prior density \\(\\pi(\\theta)\\) and likelihood function \\(L(\\theta | \\mathbf{x})\\) are known, the posterior density is</p>
                        \\[\\pi(\\theta | \\mathbf{x}) = \\frac{L(\\theta | \\mathbf{x}) \\, \\pi(\\theta)}{m(\\mathbf{x})}\\]
                        <p>where \\(m(\\mathbf{x}) = \\int_{\\Theta} L(\\theta | \\mathbf{x}) \\, \\pi(\\theta) \\, d\\theta\\) is the <strong>marginal likelihood</strong> (边际似然), also called the <strong>evidence</strong>.</p>
                        <p>In shorthand:</p>
                        \\[\\text{posterior} \\propto \\text{likelihood} \\times \\text{prior}\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>From two decompositions of the joint density:</p>
                        \\[f(\\mathbf{x}, \\theta) = f(\\mathbf{x} | \\theta) \\, \\pi(\\theta) = \\pi(\\theta | \\mathbf{x}) \\, m(\\mathbf{x})\\]
                        <p>where \\(m(\\mathbf{x}) = \\int f(\\mathbf{x} | \\theta) \\, \\pi(\\theta) \\, d\\theta\\) is the marginal density of \\(\\mathbf{x}\\). Therefore</p>
                        \\[\\pi(\\theta | \\mathbf{x}) = \\frac{f(\\mathbf{x} | \\theta) \\, \\pi(\\theta)}{m(\\mathbf{x})} = \\frac{L(\\theta | \\mathbf{x}) \\, \\pi(\\theta)}{\\int_{\\Theta} L(\\theta | \\mathbf{x}) \\, \\pi(\\theta) \\, d\\theta}\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 15.3 (Bayesian Inference for Coin Fairness)</div>
                    <div class="env-body">
                        <p>Let the probability of heads be \\(\\theta\\), with a uniform prior \\(\\pi(\\theta) = 1\\) (\\(\\theta \\in [0,1]\\), i.e., Beta(1,1)). We toss the coin \\(n = 10\\) times and observe \\(x = 7\\) heads.</p>
                        <p>The likelihood function is \\(L(\\theta | x) = \\binom{10}{7} \\theta^7 (1-\\theta)^3\\).</p>
                        <p>The posterior distribution:</p>
                        \\[\\pi(\\theta | x) \\propto \\theta^7 (1-\\theta)^3 \\cdot 1 = \\theta^7 (1-\\theta)^3\\]
                        <p>This is precisely the kernel of \\(\\text{Beta}(8, 4)\\). Hence \\(\\theta | x \\sim \\text{Beta}(8, 4)\\).</p>
                        <p>The posterior mean is \\(\\frac{8}{8+4} = \\frac{2}{3} \\approx 0.667\\), which lies between the MLE \\(\\hat{\\theta} = 0.7\\) and the prior mean \\(0.5\\), reflecting a compromise between data and prior.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Frequentist vs. Bayesian)</div>
                    <div class="env-body">
                        <p>The key distinction between the two paradigms:</p>
                        <ul>
                            <li><strong>Frequentist</strong>: \\(\\theta\\) is a fixed constant; probability refers to "the long-run frequency of events in repeated experiments."</li>
                            <li><strong>Bayesian</strong>: \\(\\theta\\) has a probability distribution; probability represents "the degree of subjective belief about uncertainty."</li>
                        </ul>
                        <p>Interval interpretation also differs: a frequentist 95% confidence interval means "in repeated sampling, about 95% of such intervals will cover the true \\(\\theta\\)"; a Bayesian 95% credible interval means "given the data, the probability that \\(\\theta\\) falls in this interval is 0.95."</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.4 (Subjective and Objective Priors)</div>
                    <div class="env-body">
                        <p><strong>Subjective prior</strong> (主观先验): set based on the researcher's domain knowledge and experience. For example, a physician who believes a drug's efficacy rate is about 60% may choose \\(\\text{Beta}(6, 4)\\).</p>
                        <p><strong>Objective / Non-informative prior</strong> (客观先验): aims to minimize the prior's influence on the posterior, "letting the data speak for themselves." Common choices include:</p>
                        <ul>
                            <li>Uniform / Flat prior (均匀先验)</li>
                            <li>Jeffreys prior (based on Fisher information)</li>
                            <li>Reference prior (参考先验)</li>
                        </ul>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="prior-to-posterior-viz"></div>
            `,
            visualizations: [
                {
                    id: 'prior-to-posterior-viz',
                    title: 'Interactive: Prior to Posterior Update / 先验到后验更新动画',
                    description: 'Adjust prior parameters and observed data to see how the posterior compromises between prior and likelihood / 调整先验参数和观测数据，观察后验分布如何在先验与似然之间折中',
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
                    question: 'Suppose the prior is \\(\\pi(\\theta) = 1\\) (\\(\\theta \\in [0,1]\\)), and we observe \\(x\\) successes in \\(n\\) independent Bernoulli trials. Write down the posterior distribution and compute the posterior mean.',
                    hint: 'A uniform prior is equivalent to Beta(1,1). Use Beta-Binomial conjugacy.',
                    solution: 'The posterior is Beta(1+x, 1+n-x), and the posterior mean is (1+x)/(2+n). Note that as n grows large, the posterior mean approaches the MLE x/n.'
                },
                {
                    question: 'Prove Bayes\' theorem in its parameter inference form: if the prior is \\(\\pi(\\theta)\\) and the likelihood is \\(L(\\theta|\\mathbf{x})\\), then the posterior density is \\(\\pi(\\theta|\\mathbf{x}) = \\frac{L(\\theta|\\mathbf{x})\\pi(\\theta)}{\\int L(\\theta|\\mathbf{x})\\pi(\\theta)d\\theta}\\).',
                    hint: 'Start from two decompositions of the joint density \\(f(\\mathbf{x}, \\theta)\\).',
                    solution: 'The joint density f(x,θ) = f(x|θ)π(θ) = π(θ|x)m(x), where m(x) = ∫f(x|θ)π(θ)dθ is the marginal density. Solving for π(θ|x) gives π(θ|x) = f(x|θ)π(θ)/m(x) = L(θ|x)π(θ)/∫L(θ|x)π(θ)dθ.'
                },
                {
                    question: 'In Example 15.3, if the prior is changed to \\(\\text{Beta}(5, 5)\\) (expressing a stronger prior belief that the coin is fair), find the new posterior distribution and posterior mean, and compare with the uniform-prior result.',
                    hint: 'Beta-Binomial conjugacy: Beta(a,b) + Binomial(n,x) → Beta(a+x, b+n-x).',
                    solution: 'The posterior is Beta(5+7, 5+3) = Beta(12, 8), with posterior mean 12/20 = 0.6. Compared with the uniform-prior posterior mean of 0.667, the informative prior pulls the estimate toward 0.5 (the prior mean), demonstrating the "regularization" effect of a stronger prior.'
                }
            ]
        },

        // ==================== Section 2: Conjugate Priors ====================
        {
            id: 'ch15-sec02',
            title: 'Conjugate Priors',
            content: `
                <h2>Conjugate Priors / 共轭先验</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>If the prior and posterior belong to the same distributional family, then Bayesian updating reduces to simply updating the hyperparameters (超参数) — this is the beauty of conjugacy (共轭性). The hyperparameters of the prior can be interpreted as "virtual data," and the actual data simply adds information on top of them.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.5 (Conjugate Prior Family)</div>
                    <div class="env-body">
                        <p>Let \\(\\mathcal{F} = \\{f(\\mathbf{x}|\\theta) : \\theta \\in \\Theta\\}\\) be a family of likelihood functions. If a family of prior distributions \\(\\mathcal{P}\\) satisfies: for every \\(\\pi(\\theta) \\in \\mathcal{P}\\) and every observation \\(\\mathbf{x}\\), the posterior \\(\\pi(\\theta|\\mathbf{x}) \\in \\mathcal{P}\\), then \\(\\mathcal{P}\\) is called a <strong>conjugate prior family</strong> (共轭先验族) for \\(\\mathcal{F}\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.6 (Beta-Binomial Conjugacy)</div>
                    <div class="env-body">
                        <p>Let \\(X | \\theta \\sim \\text{Binomial}(n, \\theta)\\) with prior \\(\\theta \\sim \\text{Beta}(a, b)\\). Then the posterior is</p>
                        \\[\\theta | X = x \\sim \\text{Beta}(a + x, \\, b + n - x)\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The posterior density is proportional to</p>
                        \\[\\pi(\\theta | x) \\propto L(\\theta | x) \\cdot \\pi(\\theta) = \\binom{n}{x} \\theta^x (1-\\theta)^{n-x} \\cdot \\frac{\\theta^{a-1}(1-\\theta)^{b-1}}{B(a,b)}\\]
                        \\[\\propto \\theta^{(a+x)-1}(1-\\theta)^{(b+n-x)-1}\\]
                        <p>This is precisely the kernel of \\(\\text{Beta}(a+x, b+n-x)\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.7 (Normal-Normal Conjugacy)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n | \\mu \\sim_{iid} N(\\mu, \\sigma^2)\\) (\\(\\sigma^2\\) known) with prior \\(\\mu \\sim N(\\mu_0, \\tau^2)\\). Then the posterior is</p>
                        \\[\\mu | \\mathbf{x} \\sim N\\!\\left(\\frac{\\frac{n}{\\sigma^2}\\bar{x} + \\frac{1}{\\tau^2}\\mu_0}{\\frac{n}{\\sigma^2} + \\frac{1}{\\tau^2}}, \\; \\frac{1}{\\frac{n}{\\sigma^2} + \\frac{1}{\\tau^2}}\\right)\\]
                        <p>That is, the posterior precision equals the likelihood precision plus the prior precision, and the posterior mean is a precision-weighted average of the prior mean and the sample mean.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The likelihood function (as a function of \\(\\mu\\)) is</p>
                        \\[L(\\mu | \\mathbf{x}) \\propto \\exp\\!\\left(-\\frac{n}{2\\sigma^2}(\\bar{x} - \\mu)^2\\right)\\]
                        <p>The prior is</p>
                        \\[\\pi(\\mu) \\propto \\exp\\!\\left(-\\frac{1}{2\\tau^2}(\\mu - \\mu_0)^2\\right)\\]
                        <p>The posterior is proportional to their product. Letting \\(\\lambda_0 = 1/\\tau^2\\) (prior precision) and \\(\\lambda = n/\\sigma^2\\) (likelihood precision), we have</p>
                        \\[\\pi(\\mu|\\mathbf{x}) \\propto \\exp\\!\\left(-\\frac{1}{2}\\left[\\lambda(\\mu - \\bar{x})^2 + \\lambda_0(\\mu - \\mu_0)^2\\right]\\right)\\]
                        <p>Expanding and collecting terms in \\(\\mu\\), the posterior precision is \\(\\lambda + \\lambda_0\\) and the posterior mean is \\(\\frac{\\lambda \\bar{x} + \\lambda_0 \\mu_0}{\\lambda + \\lambda_0}\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 15.8 (Common Conjugate Priors at a Glance)</div>
                    <div class="env-body">
                        <table style="width:100%; border-collapse:collapse; color:#c9d1d9;">
                            <tr style="border-bottom:1px solid #30363d;">
                                <th style="padding:4px 8px; text-align:left;">Likelihood</th>
                                <th style="padding:4px 8px; text-align:left;">Conjugate Prior</th>
                                <th style="padding:4px 8px; text-align:left;">Posterior</th>
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
                                <td style="padding:4px 8px;">Normal(weighted mean, combined precision⁻¹)</td>
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
                    <div class="env-title">Remark ("Virtual Data" Interpretation of Hyperparameters)</div>
                    <div class="env-body">
                        <p>In Beta-Binomial conjugacy, the prior \\(\\text{Beta}(a, b)\\) can be interpreted as "having previously observed \\(a-1\\) successes and \\(b-1\\) failures." The new data adds \\(x\\) successes and \\(n-x\\) failures, yielding the combined posterior \\(\\text{Beta}(a+x, b+n-x)\\).</p>
                        <p>The "effective sample size" of the prior is \\(a + b - 2\\) (or \\(a + b\\)). When the actual sample size \\(n\\) far exceeds the prior effective sample size, the posterior is almost entirely determined by the data.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="beta-binomial-viz"></div>
            `,
            visualizations: [
                {
                    id: 'beta-binomial-viz',
                    title: 'Interactive: Beta-Binomial Sequential Update / Beta-Binomial 序贯更新',
                    description: 'Click "Flip" to simulate coin tosses and watch the Beta posterior update step by step / 每次点击"Flip"模拟一次抛硬币，观察 Beta 后验如何逐步更新',
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
                    question: 'Prove Gamma-Poisson conjugacy: if \\(X_1, \\ldots, X_n | \\lambda \\sim_{iid} \\text{Poisson}(\\lambda)\\) with prior \\(\\lambda \\sim \\text{Gamma}(\\alpha, \\beta)\\), then the posterior is \\(\\lambda | \\mathbf{x} \\sim \\text{Gamma}(\\alpha + \\sum x_i, \\beta + n)\\).',
                    hint: 'Write the Poisson likelihood L(λ|x) ∝ λ^{Σxᵢ} e^{-nλ} and multiply by the Gamma prior kernel.',
                    solution: 'L(λ|x) ∝ λ^{Σxᵢ} e^{-nλ}, and the prior kernel is λ^{α-1} e^{-βλ}. The posterior kernel is λ^{α+Σxᵢ-1} e^{-(β+n)λ}, which is the kernel of Gamma(α+Σxᵢ, β+n).'
                },
                {
                    question: 'In Normal-Normal conjugacy, prove that the posterior mean can be written as a weighted average of the prior mean and the MLE: \\(\\hat{\\mu}_{\\text{Bayes}} = w \\bar{x} + (1-w) \\mu_0\\), where \\(w = \\frac{n/\\sigma^2}{n/\\sigma^2 + 1/\\tau^2}\\). What does \\(w\\) approach as \\(n \\to \\infty\\)?',
                    hint: 'Let likelihood precision λ = n/σ² and prior precision λ₀ = 1/τ², then substitute into the posterior mean formula.',
                    solution: 'Posterior mean = (λx̄ + λ₀μ₀)/(λ + λ₀) = [λ/(λ+λ₀)]x̄ + [λ₀/(λ+λ₀)]μ₀ = wx̄ + (1-w)μ₀, where w = λ/(λ+λ₀) = (n/σ²)/(n/σ² + 1/τ²). As n→∞, w→1, so the posterior mean approaches the MLE x̄ and the prior\'s influence vanishes.'
                },
                {
                    question: 'Let \\(X | \\theta \\sim \\text{Geometric}(\\theta)\\) (\\(P(X=k) = \\theta(1-\\theta)^{k-1}, k=1,2,\\ldots\\)). Is Beta(a,b) a conjugate prior? If so, find the posterior.',
                    hint: 'Write the likelihood L(θ|x) as a function of θ and check whether it combines with the Beta kernel.',
                    solution: 'For a single observation x, the likelihood is L(θ|x) = θ(1-θ)^{x-1}. Multiplying by the Beta(a,b) prior kernel θ^{a-1}(1-θ)^{b-1} gives the posterior kernel θ^a(1-θ)^{b+x-2}, i.e., Beta(a+1, b+x-1). For n independent observations, the posterior is Beta(a+n, b+Σxᵢ-n). Yes, Beta is a conjugate prior for the Geometric.'
                }
            ]
        },

        // ==================== Section 3: Posterior Inference ====================
        {
            id: 'ch15-sec03',
            title: 'Posterior Inference',
            content: `
                <h2>Posterior Inference / 后验推断</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Once the posterior distribution is obtained, we can extract various inferential conclusions from it: point estimates (what single value best represents \\(\\theta\\)?), interval estimates (in what range is \\(\\theta\\) most likely?), and predictions (what might the next observation be?). The posterior distribution is the foundation for all inference.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.9 (Bayes Point Estimators)</div>
                    <div class="env-body">
                        <p>Common Bayes point estimators include:</p>
                        <ul>
                            <li><strong>Posterior mean</strong> (后验均值): \\(\\hat{\\theta}_{\\text{PM}} = E[\\theta | \\mathbf{x}] = \\int \\theta \\, \\pi(\\theta | \\mathbf{x}) \\, d\\theta\\). It minimizes the posterior expected squared loss.</li>
                            <li><strong>Posterior median</strong> (后验中位数): \\(\\hat{\\theta}_{\\text{Med}}\\) satisfying \\(P(\\theta \\le \\hat{\\theta}_{\\text{Med}} | \\mathbf{x}) = 0.5\\). It minimizes the posterior expected absolute loss.</li>
                            <li><strong>Maximum a posteriori (MAP)</strong> (最大后验估计): \\(\\hat{\\theta}_{\\text{MAP}} = \\arg\\max_{\\theta} \\pi(\\theta | \\mathbf{x})\\). It minimizes the posterior 0-1 loss.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.10 (Optimality of Bayes Estimators)</div>
                    <div class="env-body">
                        <p>Let the loss function be \\(L(\\theta, d)\\). The Bayes estimator \\(\\hat{\\theta}\\) minimizes the posterior expected loss:</p>
                        \\[\\hat{\\theta} = \\arg\\min_d \\int L(\\theta, d) \\, \\pi(\\theta | \\mathbf{x}) \\, d\\theta\\]
                        <p>Specifically:</p>
                        <ul>
                            <li>Squared loss \\(L(\\theta, d) = (\\theta - d)^2\\) → posterior mean</li>
                            <li>Absolute loss \\(L(\\theta, d) = |\\theta - d|\\) → posterior median</li>
                            <li>0-1 loss \\(L(\\theta, d) = I(|\\theta - d| > \\epsilon)\\), \\(\\epsilon \\to 0\\) → MAP</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.11 (Credible Interval)</div>
                    <div class="env-body">
                        <p>Given the posterior distribution \\(\\pi(\\theta | \\mathbf{x})\\), a \\(100(1-\\alpha)\\%\\) <strong>credible interval</strong> (可信区间) \\(C\\) satisfies</p>
                        \\[P(\\theta \\in C | \\mathbf{x}) = \\int_C \\pi(\\theta | \\mathbf{x}) \\, d\\theta = 1 - \\alpha\\]
                        <p>Two common constructions:</p>
                        <ul>
                            <li><strong>Equal-tail credible interval</strong> (等尾可信区间): \\(C = [q_{\\alpha/2}, \\, q_{1-\\alpha/2}]\\), where \\(q_p\\) is the \\(p\\)-th posterior quantile.</li>
                            <li><strong>Highest posterior density (HPD) interval</strong> (最高后验密度区间): \\(C = \\{\\theta : \\pi(\\theta | \\mathbf{x}) \\ge c\\}\\), where \\(c\\) is chosen so that \\(P(\\theta \\in C | \\mathbf{x}) = 1 - \\alpha\\). The HPD interval is the shortest interval at the same credibility level.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Credible Interval ≠ Confidence Interval)</div>
                    <div class="env-body">
                        <p>A Bayesian credible interval and a frequentist confidence interval have different meanings:</p>
                        <ul>
                            <li><strong>Credible interval</strong> (可信区间): given the data, the parameter \\(\\theta\\) falls in this interval with probability \\(1-\\alpha\\). This is a <strong>posterior probability statement</strong> about the parameter.</li>
                            <li><strong>Confidence interval</strong> (置信区间): in repeated sampling, approximately \\(100(1-\\alpha)\\%\\) of such intervals will cover the true value. This is a statement about the <strong>sampling procedure</strong>.</li>
                        </ul>
                        <p>In certain special cases (e.g., Normal mean with a uniform prior), the two coincide numerically; but in general they are different.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.12 (Posterior Predictive Distribution)</div>
                    <div class="env-body">
                        <p>Given observed data \\(\\mathbf{x}\\), the <strong>posterior predictive distribution</strong> (后验预测分布) for a new observation \\(X_{n+1}\\) is</p>
                        \\[f(x_{n+1} | \\mathbf{x}) = \\int f(x_{n+1} | \\theta) \\, \\pi(\\theta | \\mathbf{x}) \\, d\\theta\\]
                        <p>It integrates parameter uncertainty (via the posterior) into the prediction and is typically more conservative (larger variance) than plugging in a point estimate \\(\\hat{\\theta}\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 15.13 (Beta-Binomial Posterior Prediction)</div>
                    <div class="env-body">
                        <p>If \\(\\theta | \\mathbf{x} \\sim \\text{Beta}(a', b')\\) (where \\(a' = a + x, b' = b + n - x\\)), the posterior predictive probability of success on the next trial is</p>
                        \\[P(X_{n+1} = 1 | \\mathbf{x}) = E[\\theta | \\mathbf{x}] = \\frac{a'}{a' + b'} = \\frac{a + x}{a + b + n}\\]
                        <p>This is a generalization of the celebrated <strong>Laplace succession rule</strong>: with a Beta(1,1) prior, \\(P(X_{n+1} = 1 | \\mathbf{x}) = \\frac{x + 1}{n + 2}\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="credible-interval-viz"></div>
            `,
            visualizations: [
                {
                    id: 'credible-interval-viz',
                    title: 'Interactive: Credible Interval vs Confidence Interval / 可信区间 vs 置信区间',
                    description: 'Compare the Bayesian credible interval with the frequentist confidence interval / 对比 Bayes 可信区间与频率学派置信区间的含义差异',
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
                    question: 'Prove that under squared loss, the Bayes estimator is the posterior mean. That is, show \\(\\hat{d} = E[\\theta | \\mathbf{x}]\\) minimizes \\(E[(\\theta - d)^2 | \\mathbf{x}]\\).',
                    hint: 'Differentiate with respect to d and set equal to zero, or expand as Var + Bias² form.',
                    solution: 'E[(θ-d)²|x] = E[θ²|x] - 2dE[θ|x] + d². Differentiating w.r.t. d: -2E[θ|x] + 2d = 0, giving d = E[θ|x]. The second derivative is 2 > 0, confirming a minimum.'
                },
                {
                    question: 'Let \\(\\theta | \\mathbf{x} \\sim \\text{Beta}(12, 8)\\). Find the 95% equal-tail credible interval. (Hint: The quantiles of Beta(12,8) can be looked up or computed numerically.)',
                    hint: 'The equal-tail credible interval is [q_{0.025}, q_{0.975}], where q_p is the p-th quantile of Beta(12,8).',
                    solution: 'Using the Beta(12,8) quantile function (computed via statistical software): q_{0.025} ≈ 0.383, q_{0.975} ≈ 0.791. The 95% equal-tail credible interval is approximately [0.383, 0.791]. The posterior mean = 12/20 = 0.6 lies near the center of the interval.'
                },
                {
                    question: 'In the Beta-Binomial model, prove that the posterior predictive distribution is Beta-Binomial: if \\(\\theta | \\mathbf{x} \\sim \\text{Beta}(a,b)\\) and \\(Y | \\theta \\sim \\text{Binomial}(m, \\theta)\\), then \\(P(Y = y | \\mathbf{x}) = \\binom{m}{y} \\frac{B(a+y, b+m-y)}{B(a,b)}\\).',
                    hint: 'Integrate over θ: P(Y=y|x) = ∫ P(Y=y|θ) π(θ|x) dθ.',
                    solution: 'P(Y=y|x) = ∫₀¹ C(m,y)θ^y(1-θ)^{m-y} · θ^{a-1}(1-θ)^{b-1}/B(a,b) dθ = C(m,y)/B(a,b) · ∫₀¹ θ^{a+y-1}(1-θ)^{b+m-y-1} dθ = C(m,y) · B(a+y, b+m-y)/B(a,b). This is the Beta-Binomial distribution.'
                }
            ]
        },

        // ==================== Section 4: Prior Selection ====================
        {
            id: 'ch15-sec04',
            title: 'Prior Selection',
            content: `
                <h2>Prior Selection / 先验选择</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>"Prior selection" (先验选择) is the most debated and most artful aspect of Bayesian statistics. An informative prior that incorporates domain knowledge can improve inference efficiency, but a poor choice may mislead conclusions. Non-informative priors aim to "let the data speak," but they are not entirely objective either. Understanding prior sensitivity is crucial for responsible use of Bayesian methods.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.14 (Informative and Non-informative Priors)</div>
                    <div class="env-body">
                        <p><strong>Informative prior</strong> (信息先验): incorporates substantive prior knowledge about the parameter. For example, if \\(\\theta \\in [0.3, 0.7]\\) is believed to be highly probable, one might choose \\(\\text{Beta}(10, 10)\\).</p>
                        <p><strong>Non-informative prior</strong> (无信息先验): aims to express no preference over parameter values, so that the posterior is mainly driven by the data. Common choices include:</p>
                        <ul>
                            <li>Uniform prior (均匀先验): \\(\\pi(\\theta) \\propto 1\\)</li>
                            <li>Jeffreys prior: \\(\\pi(\\theta) \\propto \\sqrt{I(\\theta)}\\), where \\(I(\\theta)\\) is the Fisher information</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.15 (Jeffreys Prior)</div>
                    <div class="env-body">
                        <p>The Jeffreys prior is defined as</p>
                        \\[\\pi_J(\\theta) \\propto \\sqrt{\\det I(\\theta)}\\]
                        <p>where \\(I(\\theta)\\) is the Fisher information matrix. The Jeffreys prior possesses <strong>parameterization invariance</strong> (参数化不变性): if \\(\\phi = h(\\theta)\\) is a one-to-one transformation, then the Jeffreys prior under the \\(\\phi\\) parameterization is exactly the change-of-variables transform of \\(\\pi_J(\\theta)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Parameterization Invariance)</div>
                    <div class="env-body">
                        <p>Let \\(\\phi = h(\\theta)\\) be a one-to-one differentiable map. Under the \\(\\phi\\) parameterization, the Fisher information is</p>
                        \\[I_\\phi(\\phi) = I_\\theta(h^{-1}(\\phi)) \\cdot \\left(\\frac{d\\theta}{d\\phi}\\right)^2\\]
                        <p>The Jeffreys prior under \\(\\phi\\) is</p>
                        \\[\\pi_J(\\phi) \\propto \\sqrt{I_\\phi(\\phi)} = \\sqrt{I_\\theta(\\theta)} \\cdot \\left|\\frac{d\\theta}{d\\phi}\\right|\\]
                        <p>Meanwhile, applying the change-of-variables formula to \\(\\pi_J(\\theta)\\) also yields \\(\\pi_J(\\theta) \\cdot |d\\theta/d\\phi| \\propto \\sqrt{I_\\theta(\\theta)} \\cdot |d\\theta/d\\phi|\\). The two agree.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 15.16 (Jeffreys Priors for Common Models)</div>
                    <div class="env-body">
                        <ul>
                            <li><strong>Bernoulli(θ)</strong>: \\(I(\\theta) = \\frac{1}{\\theta(1-\\theta)}\\), so \\(\\pi_J(\\theta) \\propto \\theta^{-1/2}(1-\\theta)^{-1/2}\\), i.e., \\(\\text{Beta}(1/2, 1/2)\\) (the arcsine distribution).</li>
                            <li><strong>Normal(μ, σ² known)</strong>: \\(I(\\mu) = 1/\\sigma^2\\) (constant), so \\(\\pi_J(\\mu) \\propto 1\\), a uniform prior.</li>
                            <li><strong>Normal(μ known, σ²)</strong>: \\(I(\\sigma^2) = \\frac{1}{2\\sigma^4}\\), so \\(\\pi_J(\\sigma^2) \\propto 1/\\sigma^2\\).</li>
                            <li><strong>Poisson(λ)</strong>: \\(I(\\lambda) = 1/\\lambda\\), so \\(\\pi_J(\\lambda) \\propto \\lambda^{-1/2}\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Improper Priors)</div>
                    <div class="env-body">
                        <p>Many non-informative priors are <strong>improper</strong> (非正常先验), meaning \\(\\int \\pi(\\theta) d\\theta = \\infty\\). For example, \\(\\pi(\\mu) \\propto 1\\) is not integrable over \\(\\mu \\in \\mathbb{R}\\). When using an improper prior, one must verify that the posterior is a proper distribution (i.e., integrable); otherwise the inference is meaningless.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.17 (Prior Sensitivity Analysis)</div>
                    <div class="env-body">
                        <p><strong>Prior sensitivity analysis</strong> (先验敏感性分析) examines how much the posterior inference changes under various reasonable prior choices. In practice:</p>
                        <ul>
                            <li>Select a range of representative priors (e.g., different hyperparameter values) and compare the resulting posteriors.</li>
                            <li>If the posterior is insensitive to the choice of prior (i.e., different priors yield similar posteriors), the conclusions are <strong>robust</strong> (稳健的).</li>
                            <li>If the posterior is highly sensitive to the prior, the data is insufficient to overcome prior influence, and one should carefully report the prior assumptions.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (When Does the Prior Matter Most?)</div>
                    <div class="env-body">
                        <p>The magnitude of the prior's influence depends on the relative relationship between data volume and prior "strength":</p>
                        <ul>
                            <li>When the sample size \\(n\\) is small, the prior has a significant effect on the posterior.</li>
                            <li>When \\(n\\) is large, the posterior is dominated by the data and the prior's influence becomes negligible (in the spirit of the Bernstein-von Mises theorem).</li>
                            <li>The larger the prior's "effective sample size" (e.g., \\(a+b\\) in Beta(a,b)), the stronger the prior's influence.</li>
                        </ul>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="prior-sensitivity-viz"></div>
            `,
            visualizations: [
                {
                    id: 'prior-sensitivity-viz',
                    title: 'Interactive: Prior Sensitivity Analysis / 先验敏感性分析',
                    description: 'Compare posteriors under different priors and observe how prior choice affects inference / 比较不同先验下的后验分布，观察先验选择如何影响推断结论',
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
                    question: 'Derive the Jeffreys prior for the Bernoulli(θ) model. Hint: first compute the Fisher information \\(I(\\theta) = E\\left[-\\frac{\\partial^2}{\\partial \\theta^2} \\log f(X|\\theta)\\right]\\).',
                    hint: 'The Bernoulli log-likelihood is x log θ + (1-x) log(1-θ).',
                    solution: 'Log-likelihood l(θ) = x log θ + (1-x) log(1-θ). Second derivative l\'\'(θ) = -x/θ² - (1-x)/(1-θ)². Taking expectation: I(θ) = E[-l\'\'(θ)] = θ/θ² + (1-θ)/(1-θ)² = 1/θ + 1/(1-θ) = 1/(θ(1-θ)). Hence π_J(θ) ∝ √I(θ) = θ^{-1/2}(1-θ)^{-1/2}, i.e., Beta(1/2, 1/2).'
                },
                {
                    question: 'Give an example where an improper prior leads to an improper posterior, and explain why this is problematic.',
                    hint: 'Consider the case of zero observations or an overly extreme prior choice.',
                    solution: 'Example: let X|θ ~ N(θ, 1) but with no observations (n=0) and prior π(θ) ∝ 1. Then the "posterior" π(θ|∅) ∝ π(θ) ∝ 1, which is still improper. In this case, the posterior mean, credible intervals, etc. cannot be defined, and inference is entirely meaningless. This shows that improper priors can only be used safely when there is sufficient data.'
                },
                {
                    question: 'In the Normal(μ, σ²) model (σ² known), compare the posteriors under a uniform prior and a normal prior \\(N(0, 100^2)\\). When \\(n = 5, \\bar{x} = 3, \\sigma = 1\\), how much do the two posterior means and variances differ?',
                    hint: 'Use the Normal-Normal conjugacy formula. A uniform prior can be viewed as a normal prior with τ² → ∞.',
                    solution: 'Normal prior N(0, 10000): posterior precision = 5/1 + 1/10000 = 5.0001, posterior mean = (5·3 + 0/10000)/5.0001 ≈ 2.9999, posterior variance ≈ 1/5.0001 ≈ 0.2000. Uniform prior (τ²→∞): posterior mean = x̄ = 3, posterior variance = σ²/n = 0.2. The difference is negligible (mean differs by ~0.0001, variance differs by ~0.00004%), showing that when the prior variance is very large, the prior has almost no influence.'
                }
            ]
        },

        // ==================== Section 5: Introduction to MCMC ====================
        {
            id: 'ch15-sec05',
            title: 'Introduction to MCMC',
            content: `
                <h2>Introduction to MCMC / MCMC 初步</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Conjugate priors yield posteriors in closed form, but in practice many models have posteriors that cannot be solved analytically: the integral \\(m(\\mathbf{x}) = \\int L(\\theta|\\mathbf{x})\\pi(\\theta)d\\theta\\) may be intractable. <strong>Markov chain Monte Carlo</strong> (MCMC, 马尔可夫链蒙特卡罗) methods construct a Markov chain whose stationary distribution is the posterior, thereby generating samples from the posterior to approximate any inferential quantity.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.18 (The Core Idea of MCMC)</div>
                    <div class="env-body">
                        <p>Given a target distribution \\(\\pi(\\theta | \\mathbf{x})\\) (for which we only need to know the unnormalized kernel \\(q(\\theta) \\propto L(\\theta|\\mathbf{x})\\pi(\\theta)\\)), MCMC constructs a Markov chain \\(\\theta^{(0)}, \\theta^{(1)}, \\theta^{(2)}, \\ldots\\) such that:</p>
                        <ul>
                            <li>The stationary distribution (平稳分布) of the chain is \\(\\pi(\\theta | \\mathbf{x})\\).</li>
                            <li>The chain is ergodic (遍历的): after a sufficiently long run, the distribution of \\(\\theta^{(t)}\\) converges to \\(\\pi(\\theta | \\mathbf{x})\\).</li>
                        </ul>
                        <p>Collecting samples from the chain (after discarding an initial burn-in period) allows us to approximate any posterior expectation:</p>
                        \\[E[g(\\theta) | \\mathbf{x}] \\approx \\frac{1}{T - T_0} \\sum_{t=T_0+1}^{T} g(\\theta^{(t)})\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 15.19 (Metropolis-Hastings Algorithm)</div>
                    <div class="env-body">
                        <p>Let the unnormalized target density be \\(q(\\theta)\\) and the proposal distribution be \\(J(\\theta^* | \\theta^{(t)})\\). The Metropolis-Hastings algorithm proceeds as follows:</p>
                        <ol>
                            <li>Initialize \\(\\theta^{(0)}\\).</li>
                            <li>At step \\(t\\), generate a candidate \\(\\theta^*\\) from \\(J(\\cdot | \\theta^{(t)})\\).</li>
                            <li>Compute the acceptance probability
                            \\[\\alpha(\\theta^{(t)}, \\theta^*) = \\min\\!\\left(1, \\; \\frac{q(\\theta^*) \\, J(\\theta^{(t)} | \\theta^*)}{q(\\theta^{(t)}) \\, J(\\theta^* | \\theta^{(t)})}\\right)\\]
                            </li>
                            <li>Accept with probability \\(\\alpha\\): set \\(\\theta^{(t+1)} = \\theta^*\\); reject with probability \\(1 - \\alpha\\): set \\(\\theta^{(t+1)} = \\theta^{(t)}\\).</li>
                        </ol>
                        <p>If the proposal distribution is symmetric (\\(J(\\theta^*|\\theta) = J(\\theta|\\theta^*)\\)), this simplifies to the <strong>Metropolis algorithm</strong>:</p>
                        \\[\\alpha = \\min\\!\\left(1, \\; \\frac{q(\\theta^*)}{q(\\theta^{(t)})}\\right)\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Satisfies Detailed Balance)</div>
                    <div class="env-body">
                        <p>The MH algorithm guarantees that the transition kernel satisfies the detailed balance condition:</p>
                        \\[\\pi(\\theta) \\, K(\\theta \\to \\theta') = \\pi(\\theta') \\, K(\\theta' \\to \\theta)\\]
                        <p>where \\(K(\\theta \\to \\theta') = J(\\theta' | \\theta) \\alpha(\\theta, \\theta')\\).</p>
                        <p>Without loss of generality, assume \\(q(\\theta') J(\\theta | \\theta') \\ge q(\\theta) J(\\theta' | \\theta)\\). Then \\(\\alpha(\\theta, \\theta') = \\frac{q(\\theta')J(\\theta|\\theta')}{q(\\theta)J(\\theta'|\\theta)}\\) and \\(\\alpha(\\theta', \\theta) = 1\\).</p>
                        <p>Left side: \\(q(\\theta) \\cdot J(\\theta'|\\theta) \\cdot \\frac{q(\\theta')J(\\theta|\\theta')}{q(\\theta)J(\\theta'|\\theta)} = q(\\theta') J(\\theta|\\theta')\\)</p>
                        <p>Right side: \\(q(\\theta') \\cdot J(\\theta|\\theta') \\cdot 1 = q(\\theta') J(\\theta|\\theta')\\)</p>
                        <p>Both sides are equal. Therefore \\(\\pi(\\theta|\\mathbf{x})\\) is the stationary distribution of the chain.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 15.20 (Random Walk Metropolis)</div>
                    <div class="env-body">
                        <p>The most common MH variant is the <strong>Random Walk Metropolis</strong>:</p>
                        <p>The proposal is \\(\\theta^* = \\theta^{(t)} + \\epsilon\\), where \\(\\epsilon \\sim N(0, \\sigma_p^2)\\). Since the normal density is symmetric, the acceptance ratio simplifies to</p>
                        \\[\\alpha = \\min\\!\\left(1, \\frac{q(\\theta^*)}{q(\\theta^{(t)})}\\right)\\]
                        <p>The step size \\(\\sigma_p\\) is critical: too small causes slow chain movement (high acceptance rate but poor mixing); too large causes many rejections (low acceptance rate). Rule of thumb: adjust \\(\\sigma_p\\) to achieve an acceptance rate of roughly <strong>23%-44%</strong> (Roberts et al., 1997).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 15.21 (Convergence Diagnostics)</div>
                    <div class="env-body">
                        <p>MCMC convergence diagnostics (收敛诊断) include:</p>
                        <ul>
                            <li><strong>Trace plot</strong>: plot \\(\\theta^{(t)}\\) against \\(t\\). A converged chain should look like "noise oscillating around a stable value" (caterpillar plot), without trends or stagnation.</li>
                            <li><strong>Autocorrelation function (ACF)</strong> (自相关函数): ideally the ACF decays rapidly. High autocorrelation indicates poor mixing.</li>
                            <li><strong>Effective sample size (ESS)</strong> (有效样本量): \\(\\text{ESS} = T / (1 + 2\\sum_{k=1}^{\\infty} \\rho_k)\\), where \\(\\rho_k\\) is the lag-\\(k\\) autocorrelation. ESS measures the equivalent number of independent samples.</li>
                            <li><strong>Gelman-Rubin \\(\\hat{R}\\)</strong>: run multiple chains and compare between-chain variance to within-chain variance. \\(\\hat{R} \\approx 1\\) indicates convergence.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Burn-in and Thinning)</div>
                    <div class="env-body">
                        <p><strong>Burn-in</strong>: starting from an arbitrary initial point, the Markov chain needs a certain number of steps to approach the stationary distribution. Samples from the initial phase (the burn-in period) should be discarded.</p>
                        <p><strong>Thinning</strong>: to reduce autocorrelation, one sometimes retains every \\(k\\)-th sample (e.g., thin = 10 means keep every 10th sample). However, from a statistical efficiency standpoint, thinning is not always necessary (Link & Eaton, 2012).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="mh-viz"></div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Beyond Metropolis-Hastings)</div>
                    <div class="env-body">
                        <p>The modern Bayesian computational toolkit extends far beyond MH:</p>
                        <ul>
                            <li><strong>Gibbs sampling</strong> (Gibbs 抽样): in multi-parameter models, sequentially sample from each conditional posterior. It is a special case of MH (with acceptance probability always 1).</li>
                            <li><strong>Hamiltonian Monte Carlo (HMC)</strong>: uses gradient information to guide proposals, dramatically improving sampling efficiency in high-dimensional spaces. It is the core algorithm of the Stan software.</li>
                            <li><strong>Variational Inference</strong> (变分推断): converts the posterior approximation problem into an optimization problem — fast but potentially biased.</li>
                        </ul>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'mh-viz',
                    title: 'Interactive: Metropolis-Hastings Random Walk / Metropolis-Hastings 随机游走',
                    description: 'Observe how the MH algorithm explores the target distribution and understand the effect of proposal step size on mixing efficiency / 观察 MH 算法如何在目标分布上游走，理解提议步长对混合效率的影响',
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
                    question: 'In Random Walk Metropolis, why is the choice of proposal step size \\(\\sigma_p\\) so important? Explain what happens when \\(\\sigma_p\\) is too large or too small.',
                    hint: 'Consider the acceptance rate and the chain\'s movement speed.',
                    solution: 'σ_p too small: nearly all proposals are accepted (acceptance rate near 1), but each step moves only a tiny distance, so the chain requires very many steps to adequately explore the parameter space — mixing is slow. σ_p too large: proposals frequently land in regions of very low posterior density and are rejected in large numbers (low acceptance rate), causing the chain to stay in place. The optimal acceptance rate is approximately 23% (about 44% in one dimension), where exploration efficiency is highest.'
                },
                {
                    question: 'Prove that when the proposal distribution is symmetric (\\(J(\\theta^*|\\theta) = J(\\theta|\\theta^*)\\)), the Metropolis-Hastings acceptance ratio simplifies to \\(\\alpha = \\min(1, q(\\theta^*)/q(\\theta^{(t)}))\\).',
                    hint: 'Substitute the symmetry condition into the general MH acceptance probability formula.',
                    solution: 'The MH acceptance ratio is α = min(1, q(θ*)J(θ|θ*) / (q(θ)J(θ*|θ))). When J is symmetric, J(θ|θ*) = J(θ*|θ), so the J terms cancel, yielding α = min(1, q(θ*)/q(θ)). This is the Metropolis acceptance ratio.'
                },
                {
                    question: 'Let the target distribution be \\(\\pi(\\theta) \\propto e^{-\\theta^4}\\) (\\(\\theta \\in \\mathbb{R}\\)). Write out the complete algorithm steps for sampling from this distribution using Random Walk Metropolis (including initialization, proposal, and accept/reject). Why is the normalizing constant not needed?',
                    hint: 'The acceptance ratio involves only the density ratio — the normalizing constant cancels in the numerator and denominator.',
                    solution: 'Algorithm: (1) Initialize θ⁰ = 0. (2) For t = 0,1,2,..., propose θ* = θ^t + ε, ε ~ N(0, σ²). (3) Compute α = min(1, exp(-θ*⁴)/exp(-θ^{(t)⁴})) = min(1, exp(θ^{(t)⁴} - θ*⁴)). (4) Generate U ~ Uniform(0,1): if U < α, set θ^{t+1} = θ*; otherwise θ^{t+1} = θ^t. The normalizing constant is not needed because α = min(1, q(θ*)/q(θ^t)), where q(θ) = exp(-θ⁴). The true normalized density π(θ) = q(θ)/Z, and Z cancels in the ratio.'
                }
            ]
        }
    ]
});

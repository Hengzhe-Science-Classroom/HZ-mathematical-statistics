window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch10',
    number: 10,
    title: 'Likelihood Ratio Tests',
    subtitle: 'Likelihood Ratio Tests',
    sections: [
        // ============================================================
        // Section 1: The Neyman-Pearson Lemma
        // ============================================================
        {
            id: 'ch10-sec01',
            title: 'The Neyman-Pearson Lemma',
            content: `
 <h2>The Neyman-Pearson Lemma</h2>

 <p>The central question of hypothesis testing is: given that we control the probability of Type I error (rejecting a true null hypothesis), how can we maximize the power (probability of detection) of a test? The Neyman-Pearson lemma provides the optimal solution for testing a simple hypothesis against a simple hypothesis. This result is not only the cornerstone of hypothesis testing theory but also provides fundamental insight for the likelihood ratio tests developed subsequently.</p>

 <h3>Problem Setup</h3>

                <p>Consider a testing problem where the parameter space \\(\\Theta = \\{\\theta_0, \\theta_1\\}\\) has only two elements:</p>
                \\[H_0: \\theta = \\theta_0 \\quad \\text{vs} \\quad H_1: \\theta = \\theta_1\\]

 <p>Here both \\(H_0\\) and \\(H_1\\) are <strong>simple hypotheses</strong>, meaning the parameter values are fully specified. Let the joint density (or probability mass function) of the observed data \\(X = (X_1, \\ldots, X_n)\\) under \\(\\theta_0\\) be \\(f(\\mathbf{x} \\mid \\theta_0)\\) and under \\(\\theta_1\\) be \\(f(\\mathbf{x} \\mid \\theta_1)\\).</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.1 (Likelihood Ratio)</div>
                    <div class="env-body">
 <p>Given observation \\(\\mathbf{x}\\), the <strong>likelihood ratio</strong> is defined as</p>
                        \\[\\Lambda(\\mathbf{x}) = \\frac{L(\\theta_1 \\mid \\mathbf{x})}{L(\\theta_0 \\mid \\mathbf{x})} = \\frac{f(\\mathbf{x} \\mid \\theta_1)}{f(\\mathbf{x} \\mid \\theta_0)}\\]
                        <p>When \\(\\Lambda(\\mathbf{x})\\) is large, the data are more likely under \\(\\theta_1\\) than under \\(\\theta_0\\), so we are inclined to reject \\(H_0\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.2 (Most Powerful Test)</div>
                    <div class="env-body">
 <p>Let \\(\\mathcal{C}\\) be the collection of all tests at significance level \\(\\alpha\\). A test \\(\\varphi^*\\) is called the <strong>most powerful test</strong> (MP test) at level \\(\\alpha\\) if</p>
                        \\[E_{\\theta_0}[\\varphi^*] \\le \\alpha \\quad \\text{and} \\quad E_{\\theta_1}[\\varphi^*] \\ge E_{\\theta_1}[\\varphi] \\quad \\forall \\varphi \\in \\mathcal{C}\\]
                        <p>where \\(\\varphi(\\mathbf{x}) \\in [0,1]\\) is a randomized test function representing the probability of rejecting \\(H_0\\).</p>
                    </div>
                </div>

 <h3>The Neyman-Pearson Lemma</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.1 (Neyman-Pearson Lemma)</div>
                    <div class="env-body">
                        <p>Consider testing \\(H_0: \\theta = \\theta_0\\) vs \\(H_1: \\theta = \\theta_1\\). For a given \\(\\alpha \\in (0,1)\\), there exist constants \\(k \\ge 0\\) and \\(\\gamma \\in [0,1]\\) such that the test</p>
                        \\[\\varphi^*(\\mathbf{x}) = \\begin{cases} 1 & \\text{if } \\Lambda(\\mathbf{x}) > k \\\\ \\gamma & \\text{if } \\Lambda(\\mathbf{x}) = k \\\\ 0 & \\text{if } \\Lambda(\\mathbf{x}) < k \\end{cases}\\]
                        <p>satisfies \\(E_{\\theta_0}[\\varphi^*] = \\alpha\\), and \\(\\varphi^*\\) is the most powerful test at level \\(\\alpha\\).</p>
                        <p>Furthermore, any MP test at level \\(\\alpha\\) must have the above form almost everywhere.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(\\varphi\\) be any test function satisfying \\(E_{\\theta_0}[\\varphi] \\le \\alpha\\). We need to show that \\(E_{\\theta_1}[\\varphi^*] \\ge E_{\\theta_1}[\\varphi]\\).</p>
                        <p>Consider the difference</p>
                        \\[E_{\\theta_1}[\\varphi^*] - E_{\\theta_1}[\\varphi] = \\int (\\varphi^* - \\varphi) f(\\mathbf{x} \\mid \\theta_1) \\, d\\mu(\\mathbf{x})\\]
                        <p>By the definition of \\(\\varphi^*\\):</p>
                        <ul>
                            <li>When \\(\\Lambda(\\mathbf{x}) > k\\), \\(\\varphi^* = 1\\), so \\(\\varphi^* - \\varphi \\ge 0\\), and \\(f(\\mathbf{x}|\\theta_1) > k \\cdot f(\\mathbf{x}|\\theta_0)\\)</li>
                            <li>When \\(\\Lambda(\\mathbf{x}) < k\\), \\(\\varphi^* = 0\\), so \\(\\varphi^* - \\varphi \\le 0\\), and \\(f(\\mathbf{x}|\\theta_1) < k \\cdot f(\\mathbf{x}|\\theta_0)\\)</li>
                        </ul>
                        <p>In both cases we have \\((\\varphi^* - \\varphi)(f(\\mathbf{x}|\\theta_1) - k \\cdot f(\\mathbf{x}|\\theta_0)) \\ge 0\\). Therefore</p>
                        \\[\\int (\\varphi^* - \\varphi)(f(\\mathbf{x}|\\theta_1) - k f(\\mathbf{x}|\\theta_0)) \\, d\\mu \\ge 0\\]
                        <p>Expanding gives</p>
                        \\[E_{\\theta_1}[\\varphi^*] - E_{\\theta_1}[\\varphi] \\ge k(E_{\\theta_0}[\\varphi^*] - E_{\\theta_0}[\\varphi]) = k(\\alpha - E_{\\theta_0}[\\varphi]) \\ge 0\\]
                        <p>The last inequality holds because \\(k \\ge 0\\) and \\(E_{\\theta_0}[\\varphi] \\le \\alpha\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 10.1 (NP Test for the Normal Mean)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\) with \\(\\sigma^2\\) known. Test \\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu = \\mu_1\\) (where \\(\\mu_1 > \\mu_0\\)). The likelihood ratio is</p>
                        \\[\\Lambda(\\mathbf{x}) = \\frac{\\prod_{i=1}^n \\frac{1}{\\sqrt{2\\pi}\\sigma} e^{-(x_i - \\mu_1)^2/(2\\sigma^2)}}{\\prod_{i=1}^n \\frac{1}{\\sqrt{2\\pi}\\sigma} e^{-(x_i - \\mu_0)^2/(2\\sigma^2)}} = \\exp\\left\\{\\frac{(\\mu_1 - \\mu_0)}{\\sigma^2} \\left(\\sum_{i=1}^n x_i - \\frac{n(\\mu_0 + \\mu_1)}{2}\\right)\\right\\}\\]
                        <p>Since \\(\\mu_1 > \\mu_0\\), \\(\\Lambda(\\mathbf{x}) > k\\) is equivalent to \\(\\bar{x} > c\\). Therefore the NP most powerful test has rejection region \\(\\bar{X} > \\mu_0 + z_\\alpha \\cdot \\sigma / \\sqrt{n}\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition: Why Is the Likelihood Ratio Optimal?</div>
                    <div class="env-body">
                        <p>Imagine you are a detective with two suspects (\\(\\theta_0\\) and \\(\\theta_1\\)). For each piece of evidence (observation), you compute the ratio of "how likely this evidence is if suspect 1 committed the crime" to "how likely it is if suspect 0 did." When this ratio is large enough, you have reason to believe suspect 1 is more likely. The NP lemma tells us: this likelihood-ratio-based judgment is the most sensitive among all possible decision strategies.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="np-lemma-viz"></div>
            `,
            visualizations: [
                {
                    id: 'np-lemma-viz',
 title:'Interactive: The Neyman-Pearson Lemma',
 description:'Visualize the likelihood ratio test under two normal distributions. Drag the threshold to observe changes in the rejection region and power.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 80, originY: 320,
                            scale: 60
                        });

                        var mu0 = 0, mu1 = 2, sigma = 1;
                        var alphaSlider = VizEngine.createSlider(controls, 'alpha (Type I error)', 0.01, 0.30, 0.05, 0.01, function(v) { draw(); });
                        var mu1Slider = VizEngine.createSlider(controls, 'mu1', 0.5, 4.0, 2.0, 0.1, function(v) { mu1 = v; draw(); });

                        function draw() {
                            var alpha = parseFloat(alphaSlider.value);
                            mu1 = parseFloat(mu1Slider.value);

                            viz.clear();

                            // Custom axes
                            var ctx = viz.ctx;
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(80, 320); ctx.lineTo(540, 320); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(80, 320); ctx.lineTo(80, 20); ctx.stroke();

                            // x-axis labels
                            ctx.fillStyle = viz.colors.text; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            for (var tick = -1; tick <= 6; tick++) {
                                var sx = 80 + tick * 60;
                                if (sx > 40 && sx < 550) {
                                    ctx.fillText(tick.toString(), sx, 324);
                                }
                            }

                            var pdf0 = function(x) { return VizEngine.normalPDF(x, mu0, sigma); };
                            var pdf1 = function(x) { return VizEngine.normalPDF(x, mu1, sigma); };

                            // Critical value from standard normal quantile approximation
                            // z_alpha such that P(Z > z_alpha) = alpha
                            var zAlpha = 0;
                            // Simple bisection for inverse normal
                            var lo = -4, hi = 4;
                            for (var iter = 0; iter < 50; iter++) {
                                var mid = (lo + hi) / 2;
                                var pval = 1 - VizEngine.normalCDF(mid, 0, 1);
                                if (pval > alpha) lo = mid; else hi = mid;
                            }
                            zAlpha = (lo + hi) / 2;
                            var criticalValue = mu0 + zAlpha * sigma;

                            // Shade rejection region under H0 (Type I error = alpha)
                            viz.shadeUnder(pdf0, criticalValue, 6, viz.colors.red + '44');

                            // Shade power region under H1
                            viz.shadeUnder(pdf1, criticalValue, 6, viz.colors.green + '44');

                            // Draw PDFs
                            viz.drawFunction(pdf0, -3, 6, viz.colors.blue, 2.5);
                            viz.drawFunction(pdf1, -3, 6, viz.colors.orange, 2.5);

                            // Critical value line
                            var scx = 80 + criticalValue * 60;
                            ctx.strokeStyle = viz.colors.white; ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath(); ctx.moveTo(scx, 20); ctx.lineTo(scx, 320); ctx.stroke();
                            ctx.setLineDash([]);

                            // Compute power
                            var power = 1 - VizEngine.normalCDF(criticalValue, mu1, sigma);

                            // Labels
                            viz.screenText('f(x | H0)', 80 + mu0 * 60, 320 - pdf0(mu0) * 60 - 18, viz.colors.blue, 13, 'center');
                            viz.screenText('f(x | H1)', 80 + mu1 * 60, 320 - pdf1(mu1) * 60 - 18, viz.colors.orange, 13, 'center');
                            viz.screenText('c = ' + criticalValue.toFixed(2), scx + 4, 30, viz.colors.white, 12, 'left');

                            // Info panel
                            viz.screenText('alpha = ' + alpha.toFixed(2), 420, 50, viz.colors.red, 13, 'left');
                            viz.screenText('Power = ' + power.toFixed(3), 420, 70, viz.colors.green, 13, 'left');
                            viz.screenText('Type II = ' + (1 - power).toFixed(3), 420, 90, viz.colors.yellow, 13, 'left');
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X \\sim \\text{Bernoulli}(p)\\). Test \\(H_0: p = 0.5\\) vs \\(H_1: p = 0.7\\) based on \\(n\\) independent observations. Write out the likelihood ratio and describe the form of the NP most powerful test rejection region.',
                    hint: 'The likelihood ratio can be expressed as \\(\\left(\\frac{0.7}{0.5}\\right)^{\\sum x_i} \\left(\\frac{0.3}{0.5}\\right)^{n - \\sum x_i}\\), which is a monotonically increasing function of \\(\\sum x_i\\).',
                    solution: 'The likelihood ratio is \\(\\Lambda = \\prod_{i=1}^n \\frac{0.7^{x_i} \\cdot 0.3^{1-x_i}}{0.5^{x_i} \\cdot 0.5^{1-x_i}} = \\left(\\frac{7}{5}\\right)^{\\sum x_i} \\left(\\frac{3}{5}\\right)^{n - \\sum x_i}\\). Taking logarithms gives \\(\\log \\Lambda = (\\sum x_i) \\log \\frac{7}{3} + n \\log \\frac{3}{5}\\). Since \\(\\log(7/3) > 0\\), \\(\\Lambda > k\\) is equivalent to \\(\\sum X_i > c\\). Under \\(H_0\\), \\(\\sum X_i \\sim \\text{Binomial}(n, 0.5)\\), so we choose \\(c\\) such that \\(P_{H_0}(\\sum X_i > c) = \\alpha\\). Since \\(\\sum X_i\\) is discrete, randomization may be needed to achieve the exact level \\(\\alpha\\).'
                },
                {
                    question: 'Prove that the power function of the Neyman-Pearson test satisfies \\(\\beta(\\theta_1) \\ge \\alpha\\), i.e., the power is no less than the significance level (unless \\(f(\\mathbf{x}|\\theta_0) = f(\\mathbf{x}|\\theta_1)\\) a.e.).',
                    hint: 'Consider the constant test \\(\\varphi(\\mathbf{x}) = \\alpha\\) (reject randomly with probability \\(\\alpha\\)), whose power is exactly \\(\\alpha\\).',
                    solution: 'The constant test \\(\\varphi(\\mathbf{x}) \\equiv \\alpha\\) satisfies \\(E_{\\theta_0}[\\varphi] = \\alpha\\), so it belongs to the class of level \\(\\alpha\\) tests. Its power is \\(E_{\\theta_1}[\\varphi] = \\alpha\\). By the NP lemma, the MP test \\(\\varphi^*\\) satisfies \\(E_{\\theta_1}[\\varphi^*] \\ge E_{\\theta_1}[\\varphi] = \\alpha\\). Equality holds if and only if \\(\\Lambda(\\mathbf{x}) = 1\\) a.e., i.e., the two distributions are almost everywhere identical.'
                },
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Exp}(\\lambda)\\). Test \\(H_0: \\lambda = 1\\) vs \\(H_1: \\lambda = 2\\). Find the NP most powerful test at level \\(\\alpha\\).',
                    hint: 'Write out the likelihood ratio and simplify. Note that \\(\\Lambda\\) is a monotone function of \\(\\sum x_i\\). Under \\(H_0\\), \\(2\\sum X_i \\sim \\chi^2(2n)\\).',
                    solution: 'The likelihood ratio is \\(\\Lambda = \\frac{2^n e^{-2\\sum x_i}}{e^{-\\sum x_i}} = 2^n e^{-\\sum x_i}\\). \\(\\Lambda > k\\) is equivalent to \\(\\sum x_i < c\\) (since the exponential function is decreasing). Under \\(H_0\\), \\(X_i \\sim \\text{Exp}(1)\\), so \\(2\\sum X_i \\sim \\chi^2(2n)\\). The rejection region is \\(2\\sum X_i < \\chi^2_{1-\\alpha}(2n)\\), where \\(\\chi^2_{1-\\alpha}(2n)\\) is the \\(1-\\alpha\\) lower quantile of the \\(\\chi^2(2n)\\) distribution.'
                }
            ]
        },
        // ============================================================
        // Section 2: Uniformly Most Powerful Tests
        // ============================================================
        {
            id: 'ch10-sec02',
            title: 'Uniformly Most Powerful Tests',
            content: `
 <h2>Uniformly Most Powerful Tests</h2>

 <p>The Neyman-Pearson lemma deals with testing simple vs simple hypotheses. In practice, the alternative hypothesis is usually composite, such as \\(H_1: \\theta> \\theta_0\\). A natural question arises: does there exist a test that is most powerful for all values of the alternative? This leads to the concept of the <strong>uniformly most powerful test</strong> (UMP test).</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.3 (UMP Test)</div>
                    <div class="env-body">
 <p>Consider the testing problem \\(H_0: \\theta \\in \\Theta_0\\) vs \\(H_1: \\theta \\in \\Theta_1\\). A test \\(\\varphi^*\\) is called a <strong>uniformly most powerful test</strong> (UMP test) at level \\(\\alpha\\) if:</p>
                        <ol>
                            <li>\\(\\sup_{\\theta \\in \\Theta_0} E_\\theta[\\varphi^*] \\le \\alpha\\) (controls error probability)</li>
                            <li>For all \\(\\theta \\in \\Theta_1\\) and all tests \\(\\varphi\\) satisfying (1), \\(E_\\theta[\\varphi^*] \\ge E_\\theta[\\varphi]\\) (maximizes power at every alternative parameter value)</li>
                        </ol>
                    </div>
                </div>

 <h3>Monotone Likelihood Ratio and the Karlin-Rubin Theorem</h3>

 <p>The existence of UMP tests is closely related to the <strong>monotone likelihood ratio</strong> (MLR) property of the distribution family.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.4 (Monotone Likelihood Ratio)</div>
                    <div class="env-body">
                        <p>Let \\(\\{f(\\mathbf{x} | \\theta): \\theta \\in \\Theta\\}\\) be a parametric family and \\(T(\\mathbf{x})\\) a real-valued statistic. If for all \\(\\theta_1 > \\theta_0\\), the likelihood ratio</p>
                        \\[\\frac{f(\\mathbf{x} | \\theta_1)}{f(\\mathbf{x} | \\theta_0)}\\]
 <p>is a <strong>nondecreasing function</strong> of \\(T(\\mathbf{x})\\) (on the set where \\(f(\\mathbf{x}|\\theta_0)> 0\\)), then the family is said to have the <strong>monotone likelihood ratio</strong> property with respect to \\(T\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 10.2 (MLR Property of Exponential Families)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n\\) come from a one-parameter exponential family</p>
                        \\[f(x | \\theta) = h(x) c(\\theta) \\exp(\\eta(\\theta) T(x))\\]
                        <p>If \\(\\eta(\\theta)\\) is a strictly increasing function of \\(\\theta\\), then the likelihood ratio is</p>
                        \\[\\frac{f(\\mathbf{x}|\\theta_1)}{f(\\mathbf{x}|\\theta_0)} = \\frac{c(\\theta_1)^n}{c(\\theta_0)^n} \\exp\\left\\{(\\eta(\\theta_1) - \\eta(\\theta_0)) \\sum_{i=1}^n T(x_i)\\right\\}\\]
                        <p>When \\(\\theta_1 > \\theta_0\\), we have \\(\\eta(\\theta_1) - \\eta(\\theta_0) > 0\\), so the likelihood ratio is a strictly increasing function of \\(\\sum T(X_i)\\). Therefore exponential families (under the condition that \\(\\eta\\) is increasing) possess the MLR property.</p>
                        <p>Examples include: Normal \\(N(\\mu, \\sigma^2)\\) (\\(\\sigma^2\\) known) with respect to \\(\\bar{X}\\), Poisson with respect to \\(\\sum X_i\\), Exponential with respect to \\(\\sum X_i\\), etc.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.2 (Karlin-Rubin Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(\\{f(\\mathbf{x}|\\theta)\\}\\) have the MLR property with respect to the statistic \\(T(\\mathbf{x})\\). Consider the one-sided test</p>
                        \\[H_0: \\theta \\le \\theta_0 \\quad \\text{vs} \\quad H_1: \\theta > \\theta_0\\]
                        <p>Then the UMP level \\(\\alpha\\) test has a rejection region of the form</p>
                        \\[T(\\mathbf{x}) > t_0\\]
                        <p>where \\(t_0\\) is determined by \\(P_{\\theta_0}(T(\\mathbf{X}) > t_0) = \\alpha\\) (randomization may be needed).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Sketch)</div>
                    <div class="env-body">
                        <p>For any fixed \\(\\theta_1 > \\theta_0\\), by the MLR property and the NP lemma, the MP test at level \\(\\alpha\\) for \\(H_0: \\theta = \\theta_0\\) vs \\(H_1: \\theta = \\theta_1\\) has the form "reject when \\(T > t_0\\)." The key observation is that the critical value \\(t_0\\) depends only on \\(\\theta_0\\) and \\(\\alpha\\), not on the specific value of \\(\\theta_1\\). Therefore the same test is MP for all \\(\\theta_1 > \\theta_0\\), making it UMP.</p>
                        <p>We also need to verify that \\(\\sup_{\\theta \\le \\theta_0} E_\\theta[\\varphi] \\le \\alpha\\). This is guaranteed by the monotonicity of the power function \\(\\beta(\\theta) = P_\\theta(T > t_0)\\) under the MLR condition: for \\(\\theta \\le \\theta_0\\), \\(\\beta(\\theta) \\le \\beta(\\theta_0) = \\alpha\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

 <h3>Non-Existence of UMP for Two-Sided Tests</h3>

                <div class="env-block warning">
                    <div class="env-title">Warning: UMP Tests Do Not Exist for Two-Sided Alternatives</div>
                    <div class="env-body">
                        <p>Consider \\(H_0: \\theta = \\theta_0\\) vs \\(H_1: \\theta \\ne \\theta_0\\). For \\(\\theta_1 > \\theta_0\\), the NP test rejects for large \\(T\\); but for \\(\\theta_1 < \\theta_0\\), the NP test rejects for small \\(T\\). These two directions contradict each other, so it is impossible to achieve maximum power in both directions simultaneously.</p>
                        <p>For two-sided alternatives, common alternatives include:</p>
                        <ul>
 <li><strong>Uniformly most powerful unbiased test</strong> (UMPU test)</li>
 <li><strong>Generalized likelihood ratio test</strong> (GLRT, see the next section)</li>
                        </ul>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="mlr-viz"></div>
            `,
            visualizations: [
                {
                    id: 'mlr-viz',
 title:'Interactive: Monotone Likelihood Ratio and UMP TestsUMP',
 description:'Observe how the likelihood ratio of an exponential family changes monotonically with the statistic T, and how the rejection region remains unchanged for different theta_1 values.Ttheta_1',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 80, originY: 320,
                            scale: 25
                        });

                        var theta0 = 2;
                        var theta1Slider = VizEngine.createSlider(controls, 'theta1', 2.5, 6.0, 4.0, 0.1, function() { draw(); });
                        var nSlider = VizEngine.createSlider(controls, 'n (sample size)', 1, 10, 5, 1, function() { draw(); });

                        function draw() {
                            var theta1 = parseFloat(theta1Slider.value);
                            var n = parseInt(nSlider.value);

                            viz.clear();

                            var ctx = viz.ctx;
                            // Custom axes
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(80, 320); ctx.lineTo(540, 320); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(80, 320); ctx.lineTo(80, 20); ctx.stroke();

                            // Plot likelihood ratio as function of T = sum(Xi)
                            // For Poisson: f(x|theta) = theta^x * e^{-theta} / x!
                            // LR = (theta1/theta0)^T * exp(-n(theta1 - theta0))
                            // where T = sum(Xi)

                            // Plot: log-likelihood ratio vs T for Poisson
                            var logC = -n * (theta1 - theta0);
                            var logR = Math.log(theta1 / theta0);

                            var maxT = Math.floor(n * theta1 * 2);
                            if (maxT > 16) maxT = 16;

                            // Scale for y-axis (log LR)
                            var yMin = logC;
                            var yMax = logC + maxT * logR;
                            var yRange = yMax - yMin;
                            if (yRange < 1) yRange = 1;
                            var yScale = 250 / yRange;

                            // Draw log-LR as a function of T
                            ctx.fillStyle = viz.colors.text; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            for (var t = 0; t <= maxT; t++) {
                                var sx = 80 + t * (440 / maxT);
                                if (t % Math.max(1, Math.floor(maxT / 8)) === 0) {
                                    ctx.fillText(t.toString(), sx, 324);
                                }
                                var logLR = logC + t * logR;
                                var sy = 320 - (logLR - yMin) * yScale;
                                viz.screenText(null, sx, sy, null);

                                // Draw point
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath(); ctx.arc(sx, sy, 4, 0, Math.PI * 2); ctx.fill();

                                // Connect with line
                                if (t > 0) {
                                    var prevLogLR = logC + (t - 1) * logR;
                                    var prevSy = 320 - (prevLogLR - yMin) * yScale;
                                    var prevSx = 80 + (t - 1) * (440 / maxT);
                                    ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2;
                                    ctx.beginPath(); ctx.moveTo(prevSx, prevSy); ctx.lineTo(sx, sy); ctx.stroke();
                                }
                            }

                            // Critical value line: reject when T > t0
                            // Under H0: T ~ Poisson(n * theta0), want P(T > t0) = 0.05
                            var alpha = 0.05;
                            var meanH0 = n * theta0;
                            // Find t0 via Poisson CDF
                            var cumProb = 0;
                            var t0 = 0;
                            for (var t = 0; t <= 200; t++) {
                                var pmf = Math.exp(-meanH0 + t * Math.log(meanH0) - VizEngine.lgamma(t + 1));
                                cumProb += pmf;
                                if (cumProb > 1 - alpha) { t0 = t; break; }
                            }

                            if (t0 <= maxT) {
                                var critSx = 80 + t0 * (440 / maxT);
                                ctx.strokeStyle = viz.colors.red; ctx.lineWidth = 2;
                                ctx.setLineDash([6, 4]);
                                ctx.beginPath(); ctx.moveTo(critSx, 20); ctx.lineTo(critSx, 320); ctx.stroke();
                                ctx.setLineDash([]);

                                // Shade rejection region
                                ctx.fillStyle = viz.colors.red + '22';
                                ctx.fillRect(critSx, 20, 540 - critSx, 300);

                                viz.screenText('Reject H0', (critSx + 540) / 2, 40, viz.colors.red, 12);
                                viz.screenText('t0 = ' + t0, critSx + 4, 310, viz.colors.red, 11, 'left');
                            }

                            // Labels
                            viz.screenText('T = sum(Xi)', 310, 345, viz.colors.text, 12);
                            viz.screenText('log(LR)', 30, 170, viz.colors.blue, 12);
                            viz.screenText('Poisson(' + theta0 + ') vs Poisson(' + theta1.toFixed(1) + '), n=' + n, 310, 10, viz.colors.white, 13);

                            // Show power
                            var meanH1 = n * theta1;
                            var powerCum = 0;
                            for (var t = 0; t <= t0; t++) {
                                var pmf1 = Math.exp(-meanH1 + t * Math.log(meanH1) - VizEngine.lgamma(t + 1));
                                powerCum += pmf1;
                            }
                            var power = 1 - powerCum;
                            viz.screenText('Power = ' + power.toFixed(3), 420, 60, viz.colors.green, 12, 'left');

                            // Y-axis labels
                            ctx.fillStyle = viz.colors.text; ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
                            var nTicks = 5;
                            for (var i = 0; i <= nTicks; i++) {
                                var yVal = yMin + (yRange * i / nTicks);
                                var tickSy = 320 - i * (250 / nTicks);
                                ctx.fillText(yVal.toFixed(1), 75, tickSy);
                            }
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, 1)\\). Prove that for testing \\(H_0: \\mu \\le 0\\) vs \\(H_1: \\mu > 0\\), the UMP level \\(\\alpha\\) test has rejection region \\(\\bar{X} > z_\\alpha / \\sqrt{n}\\).',
                    hint: 'The normal distribution has the MLR property with respect to \\(\\bar{X}\\). Apply the Karlin-Rubin theorem directly.',
                    solution: 'The normal density can be written as \\(f(x|\\mu) = \\frac{1}{\\sqrt{2\\pi}} \\exp(-x^2/2 + \\mu x - \\mu^2/2)\\), which is an exponential family with natural parameter \\(\\eta(\\mu) = \\mu\\) (increasing in \\(\\mu\\)) and sufficient statistic \\(T(x) = x\\). Therefore the joint density has the MLR property with respect to \\(\\sum X_i\\) (equivalently \\(\\bar{X}\\)). By the Karlin-Rubin theorem, the UMP test rejects when \\(\\bar{X} > c\\). Under \\(\\mu = 0\\) (the boundary value), \\(\\bar{X} \\sim N(0, 1/n)\\), so \\(c = z_\\alpha / \\sqrt{n}\\).'
                },
                {
                    question: 'Explain why there is no UMP test for \\(H_0: \\mu = 0\\) vs \\(H_1: \\mu \\ne 0\\) (for a normal population \\(N(\\mu, 1)\\)), and describe what test is typically used instead.',
                    hint: 'Consider the directions of the NP test for \\(\\mu > 0\\) and \\(\\mu < 0\\).',
                    solution: 'For \\(\\mu_1 > 0\\), the NP MP test rejects large \\(\\bar{X}\\) (right tail); for \\(\\mu_1 < 0\\), the NP MP test rejects small \\(\\bar{X}\\) (left tail). If a UMP test \\(\\varphi^*\\) existed, it would have to simultaneously achieve maximum power in both the right and left tails, which is impossible (unless \\(\\varphi^* = \\alpha\\) a.e.). The usual alternative is the two-tailed z-test: reject when \\(|\\bar{X}| > z_{\\alpha/2}/\\sqrt{n}\\). This test is UMPU (uniformly most powerful unbiased).'
                },
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Exp}(\\lambda)\\). For \\(H_0: \\lambda \\ge \\lambda_0\\) vs \\(H_1: \\lambda < \\lambda_0\\), find the UMP level \\(\\alpha\\) test.',
                    hint: 'The exponential family density is \\(f(x|\\lambda) = \\lambda e^{-\\lambda x}\\), with natural parameter \\(\\eta(\\lambda) = -\\lambda\\) which is decreasing in \\(\\lambda\\). Note that the decreasing direction affects the monotonicity of the likelihood ratio with respect to \\(T = \\sum X_i\\).',
                    solution: 'Written in exponential family form: \\(f(x|\\lambda) = \\lambda \\exp(-\\lambda x)\\), with natural parameter \\(\\eta = -\\lambda\\) decreasing in \\(\\lambda\\). Therefore with respect to \\(T = \\sum X_i\\), the likelihood ratio for \\(\\lambda_1 < \\lambda_0\\) (i.e., \\(\\eta_1 > \\eta_0\\)) is an increasing function of \\(T\\). Equivalently, \\(\\Lambda > k\\) is equivalent to \\(T > c\\). The UMP test rejects when \\(\\sum X_i > c\\). Under the boundary \\(\\lambda = \\lambda_0\\) of \\(H_0\\), \\(2\\lambda_0 \\sum X_i \\sim \\chi^2(2n)\\), so \\(c = \\chi^2_\\alpha(2n) / (2\\lambda_0)\\).'
                }
            ]
        },
        // ============================================================
        // Section 3: Generalized Likelihood Ratio Tests
        // ============================================================
        {
            id: 'ch10-sec03',
            title: 'Generalized Likelihood Ratio Tests',
            content: `
 <h2>Generalized Likelihood Ratio Tests</h2>

 <p>When a UMP test does not exist (e.g., for two-sided tests or multi-parameter settings), we need a general method for constructing tests. The <strong>generalized likelihood ratio test</strong> (GLRT) is one of the most widely used approaches. Its basic idea is to compare the maximum likelihood values under the constraint (\\(H_0\\)) and without constraint.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 10.5 (GLRT Statistic)</div>
                    <div class="env-body">
 <p>Let the parameter space be \\(\\Theta\\) and the parameter subspace corresponding to the null hypothesis be \\(\\Theta_0 \\subset \\Theta\\). The <strong>generalized likelihood ratio statistic</strong> is defined as</p>
                        \\[\\Lambda(\\mathbf{x}) = \\frac{\\sup_{\\theta \\in \\Theta_0} L(\\theta | \\mathbf{x})}{\\sup_{\\theta \\in \\Theta} L(\\theta | \\mathbf{x})}\\]
                        <p>Clearly \\(0 \\le \\Lambda(\\mathbf{x}) \\le 1\\). When \\(\\Lambda\\) is close to 0, the best fit under the constrained model (\\(H_0\\)) is far inferior to the unconstrained model, providing reason to reject \\(H_0\\).</p>
                        <p>The GLRT rejection region is \\(\\Lambda(\\mathbf{x}) < c\\), or equivalently \\(-2 \\log \\Lambda(\\mathbf{x}) > c'\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Notation Convention)</div>
                    <div class="env-body">
                        <p>Note that different textbooks may define the likelihood ratio in opposite directions. Some place the unrestricted MLE in the numerator and the restricted MLE in the denominator (so that \\(\\Lambda \\ge 1\\) and large values lead to rejection). This course follows the Casella & Berger convention: the numerator is the constrained maximum likelihood and the denominator is the global maximum likelihood, so \\(\\Lambda \\in [0, 1]\\) and small values lead to rejection.</p>
                    </div>
                </div>

 <h3>Example: GLRT for the Normal Mean</h3>

                <div class="env-block example">
                    <div class="env-title">Example 10.3 (Single Normal Mean Test)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\) with \\(\\sigma^2\\) known. Test \\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu \\ne \\mu_0\\).</p>
                        <p><strong>Denominator</strong>: The unrestricted MLE is \\(\\hat{\\mu} = \\bar{X}\\), giving</p>
                        \\[\\sup_\\mu L(\\mu) = \\left(\\frac{1}{2\\pi\\sigma^2}\\right)^{n/2} \\exp\\left(-\\frac{1}{2\\sigma^2} \\sum (X_i - \\bar{X})^2\\right)\\]
                        <p><strong>Numerator</strong>: Under the constraint \\(\\mu = \\mu_0\\)</p>
                        \\[L(\\mu_0) = \\left(\\frac{1}{2\\pi\\sigma^2}\\right)^{n/2} \\exp\\left(-\\frac{1}{2\\sigma^2} \\sum (X_i - \\mu_0)^2\\right)\\]
                        <p>Therefore</p>
                        \\[\\Lambda = \\exp\\left(-\\frac{n}{2\\sigma^2}(\\bar{X} - \\mu_0)^2\\right)\\]
                        <p>So \\(-2\\log \\Lambda = \\frac{n(\\bar{X} - \\mu_0)^2}{\\sigma^2} = Z^2\\), where \\(Z = \\frac{\\bar{X} - \\mu_0}{\\sigma/\\sqrt{n}} \\sim N(0,1)\\). The rejection region \\(-2\\log\\Lambda > c'\\) is equivalent to \\(|Z| > \\sqrt{c'}\\), which is the standard two-tailed z-test.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 10.4 (Testing Equality of Two Normal Means)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_m \\overset{\\text{iid}}{\\sim} N(\\mu_1, \\sigma^2)\\) and \\(Y_1, \\ldots, Y_n \\overset{\\text{iid}}{\\sim} N(\\mu_2, \\sigma^2)\\) with \\(\\sigma^2\\) known. Test \\(H_0: \\mu_1 = \\mu_2\\) vs \\(H_1: \\mu_1 \\ne \\mu_2\\).</p>
                        <p>The full parameter space is \\(\\Theta = \\{(\\mu_1, \\mu_2): \\mu_1, \\mu_2 \\in \\mathbb{R}\\}\\), and the constrained space is \\(\\Theta_0 = \\{(\\mu, \\mu): \\mu \\in \\mathbb{R}\\}\\).</p>
                        <p>After computation, the GLRT statistic simplifies to</p>
                        \\[-2\\log\\Lambda = \\frac{mn}{m+n} \\cdot \\frac{(\\bar{X} - \\bar{Y})^2}{\\sigma^2}\\]
                        <p>Under \\(H_0\\), \\(\\bar{X} - \\bar{Y} \\sim N(0, \\sigma^2(1/m + 1/n))\\), so \\(-2\\log\\Lambda \\sim \\chi^2(1)\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition: Geometric Intuition for the GLRT</div>
                    <div class="env-body">
                        <p>Think of the likelihood function as a "mountain" over the parameter space. The unrestricted MLE is the summit (highest point), and the constrained MLE is the highest point along a restricted path (\\(\\Theta_0\\)). The GLRT tests whether the gap between standing at the highest point on the constrained path versus the summit is large. If the gap is large (\\(\\Lambda\\) is small), then the constraint is unreasonable and we should reject \\(H_0\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="glrt-viz"></div>
            `,
            visualizations: [
                {
                    id: 'glrt-viz',
 title:'Interactive: Generalized Likelihood Ratio Test',
 description:'Compare the likelihood values under the constrained MLE and unrestricted MLE, and observe the GLRT statistic.MLE MLE GLRT',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 80, originY: 340,
                            scale: 50
                        });

                        var mu0 = 0;
                        var sigma = 1;
                        var n = 10;
                        var xbarSlider = VizEngine.createSlider(controls, 'x-bar (sample mean)', -3, 3, 0.5, 0.05, function() { draw(); });
                        var nSlider = VizEngine.createSlider(controls, 'n', 2, 50, 10, 1, function() { n = parseInt(nSlider.value); draw(); });

                        function draw() {
                            var xbar = parseFloat(xbarSlider.value);
                            n = parseInt(nSlider.value);

                            viz.clear();

                            var ctx = viz.ctx;

                            // Log-likelihood as function of mu: l(mu) = -n/(2sigma^2) * (xbar - mu)^2 + const
                            // We plot the relative log-likelihood (ignoring constant)
                            var logLik = function(mu) {
                                return -n / (2 * sigma * sigma) * (xbar - mu) * (xbar - mu);
                            };

                            // Convert to screen: mu on x-axis, logLik on y-axis
                            var muMin = -3, muMax = 3;
                            var lMax = 0; // at mu = xbar
                            var lMin = logLik(muMin < muMax ? (Math.abs(muMin - xbar) > Math.abs(muMax - xbar) ? muMin : muMax) : muMin);
                            if (lMin > -1) lMin = -1;
                            var yScale = 280 / Math.abs(lMin);

                            // Axes
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(80, 340); ctx.lineTo(540, 340); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(80, 340); ctx.lineTo(80, 30); ctx.stroke();

                            // X-axis labels (mu values)
                            ctx.fillStyle = viz.colors.text; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            for (var mu = -3; mu <= 3; mu++) {
                                var sx = 80 + (mu - muMin) / (muMax - muMin) * 460;
                                ctx.fillText(mu.toString(), sx, 344);
                            }

                            // Plot log-likelihood curve
                            ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;
                            for (var i = 0; i <= 200; i++) {
                                var mu = muMin + (muMax - muMin) * i / 200;
                                var ll = logLik(mu);
                                var sx = 80 + (mu - muMin) / (muMax - muMin) * 460;
                                var sy = 340 + ll * yScale;
                                if (sy < 30) sy = 30;
                                if (!started) { ctx.moveTo(sx, sy); started = true; }
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Mark MLE (unrestricted) at mu = xbar
                            var mleSx = 80 + (xbar - muMin) / (muMax - muMin) * 460;
                            var mleSy = 340; // logLik(xbar) = 0 (relative)
                            ctx.fillStyle = viz.colors.green;
                            ctx.beginPath(); ctx.arc(mleSx, mleSy, 6, 0, Math.PI * 2); ctx.fill();
                            viz.screenText('MLE: mu-hat = ' + xbar.toFixed(2), mleSx, mleSy - 16, viz.colors.green, 11);

                            // Mark restricted MLE at mu = mu0
                            var resSx = 80 + (mu0 - muMin) / (muMax - muMin) * 460;
                            var resLL = logLik(mu0);
                            var resSy = 340 + resLL * yScale;
                            if (resSy < 30) resSy = 30;
                            ctx.fillStyle = viz.colors.orange;
                            ctx.beginPath(); ctx.arc(resSx, resSy, 6, 0, Math.PI * 2); ctx.fill();
                            viz.screenText('H0: mu = ' + mu0, resSx, resSy - 16, viz.colors.orange, 11);

                            // Draw vertical drop showing the gap
                            ctx.strokeStyle = viz.colors.red; ctx.lineWidth = 2;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath(); ctx.moveTo(resSx, mleSy); ctx.lineTo(resSx, resSy); ctx.stroke();
                            ctx.setLineDash([]);

                            // Arrow label for gap
                            var midGapY = (mleSy + resSy) / 2;
                            viz.screenText('gap = ' + Math.abs(resLL).toFixed(2), resSx + 10, midGapY, viz.colors.red, 11, 'left');

                            // Compute and display GLRT statistic
                            var negTwoLogLambda = n * (xbar - mu0) * (xbar - mu0) / (sigma * sigma);
                            var zStat = Math.sqrt(negTwoLogLambda);
                            var pValue = 2 * (1 - VizEngine.normalCDF(zStat));

                            viz.screenText('GLRT Statistics', 420, 40, viz.colors.white, 13, 'left');
                            viz.screenText('-2 log Lambda = ' + negTwoLogLambda.toFixed(3), 420, 60, viz.colors.yellow, 12, 'left');
                            viz.screenText('|Z| = ' + zStat.toFixed(3), 420, 80, viz.colors.teal, 12, 'left');
                            viz.screenText('p-value = ' + (pValue < 0.001 ? pValue.toExponential(2) : pValue.toFixed(4)), 420, 100, viz.colors.pink, 12, 'left');

                            var reject = negTwoLogLambda > 3.841; // chi2(1) at alpha=0.05
                            viz.screenText(reject ? 'Reject H0 (alpha=0.05)' : 'Fail to reject H0', 420, 125, reject ? viz.colors.red : viz.colors.green, 12, 'left');

                            // Axis labels
                            viz.screenText('mu', 530, 355, viz.colors.text, 12);
                            viz.screenText('log L(mu) - log L(MLE)', 30, 20, viz.colors.text, 11, 'left');
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\), where both \\(\\mu\\) and \\(\\sigma^2\\) are unknown. For \\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu \\ne \\mu_0\\), derive the GLRT statistic and state its distribution under \\(H_0\\).',
                    hint: 'The full model MLEs are \\(\\hat{\\mu} = \\bar{X}\\) and \\(\\hat{\\sigma}^2 = \\frac{1}{n}\\sum(X_i - \\bar{X})^2\\). The constrained model MLEs are \\(\\mu = \\mu_0\\) and \\(\\tilde{\\sigma}^2 = \\frac{1}{n}\\sum(X_i - \\mu_0)^2\\).',
                    solution: 'Substituting gives \\(\\Lambda = \\left(\\frac{\\hat{\\sigma}^2}{\\tilde{\\sigma}^2}\\right)^{n/2} = \\left(\\frac{\\sum(X_i - \\bar{X})^2}{\\sum(X_i - \\mu_0)^2}\\right)^{n/2} = \\left(\\frac{1}{1 + T^2/(n-1)}\\right)^{n/2}\\), where \\(T = \\frac{\\bar{X} - \\mu_0}{S/\\sqrt{n}}\\) and \\(S^2 = \\frac{1}{n-1}\\sum(X_i - \\bar{X})^2\\). Therefore \\(\\Lambda < c\\) is equivalent to \\(|T| > c\'\\). Under \\(H_0\\), \\(T \\sim t(n-1)\\), so the GLRT reduces to the t-test.'
                },
                {
                    question: 'For the GLRT, prove that \\(0 \\le \\Lambda(\\mathbf{x}) \\le 1\\) always holds, and explain when \\(\\Lambda = 1\\) occurs.',
                    hint: 'Note that the numerator is the supremum over \\(\\Theta_0 \\subset \\Theta\\).',
                    solution: 'Since \\(\\Theta_0 \\subset \\Theta\\), we have \\(\\sup_{\\theta \\in \\Theta_0} L(\\theta) \\le \\sup_{\\theta \\in \\Theta} L(\\theta)\\), so \\(\\Lambda \\le 1\\). Since the likelihood function is nonnegative, \\(\\Lambda \\ge 0\\). \\(\\Lambda = 1\\) if and only if the unrestricted MLE happens to fall within \\(\\Theta_0\\), meaning the data fully support the null hypothesis. For instance, in Example 10.3, \\(\\Lambda = 1\\) if and only if \\(\\bar{X} = \\mu_0\\).'
                },
                {
                    question: '(The GLRT is not always optimal) Construct a simple example showing that the GLRT does not necessarily yield the UMP test (even when the UMP test exists).',
                    hint: 'Consider the one-sided normal test \\(H_0: \\mu \\le 0\\) vs \\(H_1: \\mu > 0\\) with known \\(\\sigma^2\\). What does the GLRT do?',
                    solution: 'Let \\(X \\sim N(\\mu, 1)\\). For \\(H_0: \\mu \\le 0\\) vs \\(H_1: \\mu > 0\\): the unrestricted MLE is \\(\\hat{\\mu} = X\\). The constrained MLE is \\(\\tilde{\\mu} = \\min(X, 0)\\). When \\(X > 0\\), \\(\\Lambda = \\exp(-X^2/2)\\); when \\(X \\le 0\\), \\(\\Lambda = 1\\). The GLRT rejects when \\(X > c\\), which happens to be the UMP test. However, for more complex constraint forms (such as interval hypotheses \\(H_0: \\mu \\in [a, b]\\)), the GLRT may not be UMP. In general, the GLRT\'s advantage lies in its generality rather than optimality.'
                }
            ]
        },
        // ============================================================
        // Section 4: Wilks' Theorem
        // ============================================================
        {
            id: 'ch10-sec04',
            title: "Wilks' Theorem",
            content: `
 <h2>Wilks' Theorem</h2>

 <p>An important practical issue with the GLRT is: how do we determine the critical value for the rejection region? In finite samples, the exact distribution of \\(-2\\log\\Lambda\\) is usually difficult to obtain. <strong>Wilks' theorem</strong> (Wilks) provides an elegant asymptotic solution: under regularity conditions, the asymptotic distribution of \\(-2\\log\\Lambda\\) is a chi-squared distribution with degrees of freedom equal to the number of constraints.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.3 (Wilks' Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} f(x | \\theta)\\), where \\(\\theta \\in \\Theta \\subset \\mathbb{R}^p\\). Consider testing \\(H_0: \\theta \\in \\Theta_0\\), where \\(\\Theta_0\\) is a subset of \\(\\Theta\\) with dimension \\(q\\) (i.e., \\(\\Theta_0\\) is determined by \\(r = p - q\\) independent constraints). Under the following regularity conditions:</p>
                        <ol>
                            <li>The true parameter value \\(\\theta_0 \\in \\Theta_0\\) is an interior point of \\(\\Theta_0\\)</li>
                            <li>The Fisher information matrix \\(I(\\theta_0)\\) is positive definite</li>
                            <li>Appropriate differentiability and integrability conditions hold</li>
                        </ol>
                        <p>When \\(H_0\\) is true,</p>
                        \\[-2 \\log \\Lambda(\\mathbf{X}) \\xrightarrow{d} \\chi^2(r), \\quad r = \\dim(\\Theta) - \\dim(\\Theta_0) = p - q\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Sketch)</div>
                    <div class="env-body">
                        <p>The key steps are as follows:</p>
                        <p><strong>Step 1.</strong> Second-order Taylor expansion of the log-likelihood at the MLE \\(\\hat{\\theta}\\):</p>
                        \\[\\ell(\\theta) \\approx \\ell(\\hat{\\theta}) - \\frac{1}{2} (\\theta - \\hat{\\theta})^T \\mathcal{J}_n (\\theta - \\hat{\\theta})\\]
                        <p>where \\(\\mathcal{J}_n = -\\nabla^2 \\ell(\\hat{\\theta})\\) is the observed information matrix.</p>

                        <p><strong>Step 2.</strong> Similarly, the constrained MLE \\(\\tilde{\\theta}\\) satisfies</p>
                        \\[\\ell(\\tilde{\\theta}) \\approx \\ell(\\hat{\\theta}) - \\frac{1}{2} (\\tilde{\\theta} - \\hat{\\theta})^T \\mathcal{J}_n (\\tilde{\\theta} - \\hat{\\theta})\\]

                        <p><strong>Step 3.</strong> Therefore</p>
                        \\[-2\\log\\Lambda = 2(\\ell(\\hat{\\theta}) - \\ell(\\tilde{\\theta})) \\approx (\\hat{\\theta} - \\tilde{\\theta})^T \\mathcal{J}_n (\\hat{\\theta} - \\tilde{\\theta})\\]

                        <p><strong>Step 4.</strong> Using the asymptotic normality of the MLE \\(\\sqrt{n}(\\hat{\\theta} - \\theta_0) \\xrightarrow{d} N(0, I(\\theta_0)^{-1})\\) and properties of the constrained MLE, one can show that the right-hand side converges in distribution to \\(\\chi^2(r)\\). Intuitively, \\(\\hat{\\theta} - \\tilde{\\theta}\\) has nontrivial components in \\(r\\) constrained directions, each contributing one degree of freedom.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 10.5 (Verifying Wilks' Theorem)</div>
                    <div class="env-body">
                        <p>Revisiting Example 10.3: \\(X_i \\sim N(\\mu, \\sigma^2)\\) (\\(\\sigma^2\\) known), testing \\(H_0: \\mu = \\mu_0\\). Here \\(p = 1\\), \\(q = 0\\) (\\(\\Theta_0\\) is a single point), \\(r = 1\\). We already derived \\(-2\\log\\Lambda = Z^2\\), and \\(Z \\sim N(0,1)\\) implies \\(Z^2 \\sim \\chi^2(1)\\). This is the <strong>exact distribution</strong>, not just an asymptotic one, perfectly verifying Wilks' theorem.</p>
                    </div>
                </div>

 <h3>Three Asymptotically Equivalent Tests</h3>

                <p>Under regularity conditions, there are three important test statistics that are asymptotically equivalent, all converging to \\(\\chi^2(r)\\):</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 10.4 (Asymptotic Equivalence of Three Tests)</div>
                    <div class="env-body">
                        <p>Under regularity conditions, the following three statistics converge in distribution to \\(\\chi^2(r)\\) under \\(H_0\\), and are asymptotically equivalent under local alternatives:</p>
                        <ol>
 <li><strong>Likelihood ratio test</strong> (LRT): \\(W_{\\text{LR}} = -2\\log\\Lambda = 2(\\ell(\\hat{\\theta}) - \\ell(\\tilde{\\theta}))\\)</li>
 <li><strong>Wald test</strong> (Wald): \\(W_{\\text{Wald}} = (\\hat{\\theta} - \\theta_0)^T [\\widehat{\\operatorname{Var}}(\\hat{\\theta})]^{-1} (\\hat{\\theta} - \\theta_0)\\)</li>
 <li><strong>Score (Rao / LM) test</strong> (Score): \\(W_{\\text{Score}} = U(\\tilde{\\theta})^T I(\\tilde{\\theta})^{-1} U(\\tilde{\\theta})\\), where \\(U(\\theta) = \\nabla \\ell(\\theta)\\) is the score function</li>
                        </ol>
                        <p>When \\(H_0\\) holds, \\(W_{\\text{LR}}, W_{\\text{Wald}}, W_{\\text{Score}} \\xrightarrow{d} \\chi^2(r)\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition: Geometric Meaning of the Three Tests</div>
                    <div class="env-body">
                        <p>Imagine the log-likelihood function as a hill:</p>
                        <ul>
                            <li><strong>LRT</strong>: Compares the height at the summit (unrestricted MLE) with the highest point restricted to \\(\\Theta_0\\). A large gap leads to rejection.</li>
                            <li><strong>Wald test</strong>: Measures how far the unrestricted MLE is from \\(\\Theta_0\\) (in the information metric). A large distance leads to rejection. Only requires the unrestricted MLE.</li>
                            <li><strong>Score test</strong>: Standing at the constrained MLE on \\(\\Theta_0\\), measures how steep the gradient of the log-likelihood is. If the slope is large on \\(\\Theta_0\\), it suggests the true summit is far away, and we should reject. Only requires the constrained MLE.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning: Importance of Regularity Conditions</div>
                    <div class="env-body">
                        <p>Wilks' theorem requires regularity conditions. The following situations cause it to fail:</p>
                        <ul>
                            <li><strong>Parameter on the boundary</strong>: e.g., testing \\(H_0: \\sigma^2 = 0\\), where the parameter lies on the boundary of the parameter space. In this case \\(-2\\log\\Lambda\\) may follow a mixture distribution \\(\\frac{1}{2}\\chi^2(0) + \\frac{1}{2}\\chi^2(1)\\).</li>
                            <li><strong>Parameter dimension grows with \\(n\\)</strong>: In high-dimensional settings, the chi-squared approximation of Wilks' theorem may be inaccurate.</li>
                            <li><strong>Non-identifiability</strong>: e.g., testing the number of components in a mixture model.</li>
                        </ul>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="wilks-sim-viz"></div>

                <div class="viz-placeholder" data-viz="three-tests-viz"></div>
            `,
            visualizations: [
                {
                    id: 'wilks-sim-viz',
 title:"Interactive: Wilks' Theorem Simulation",
 description:"Simulate the distribution of -2 log Lambda under H0 and compare with the chi-squared PDF. Observe convergence as n increases.-2 log Lambda H0 PDFn",
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 60, originY: 340,
                            scale: 40
                        });

                        var nSamples = 2000;
                        var nSlider = VizEngine.createSlider(controls, 'n (observations per test)', 5, 100, 20, 5, function() { simulate(); });
                        var dfSlider = VizEngine.createSlider(controls, 'r (degrees of freedom)', 1, 5, 1, 1, function() { simulate(); });
                        VizEngine.createButton(controls, 'Re-simulate', function() { simulate(); });

                        function simulate() {
                            var n = parseInt(nSlider.value);
                            var r = parseInt(dfSlider.value);

                            viz.clear();

                            var ctx = viz.ctx;

                            // Simulate GLRT for testing H0: mu1=...=mu_r = 0 in N(mu, I_p)
                            // -2 log Lambda = n * sum(xbar_j^2) for j=1..r with sigma=1 known
                            // Each xbar_j ~ N(0, 1/n) under H0
                            var stats = [];
                            for (var sim = 0; sim < nSamples; sim++) {
                                var stat = 0;
                                for (var j = 0; j < r; j++) {
                                    var xbar = VizEngine.randomNormal(0, 1 / Math.sqrt(n));
                                    stat += n * xbar * xbar;
                                }
                                stats.push(stat);
                            }

                            // Histogram
                            var numBins = 30;
                            var maxVal = Math.max(r * 4, VizEngine.quantile(stats, 0.98));
                            var binWidth = maxVal / numBins;
                            var bins = [];
                            for (var b = 0; b < numBins; b++) {
                                bins.push({ x: b * binWidth, width: binWidth, count: 0 });
                            }
                            for (var i = 0; i < stats.length; i++) {
                                var bIdx = Math.min(Math.floor(stats[i] / binWidth), numBins - 1);
                                if (bIdx >= 0) bins[bIdx].count++;
                            }

                            // Normalize to density
                            for (var b = 0; b < numBins; b++) {
                                bins[b].height = bins[b].count / (nSamples * binWidth);
                            }

                            // Find max height for scaling
                            var maxH = 0;
                            for (var b = 0; b < numBins; b++) {
                                if (bins[b].height > maxH) maxH = bins[b].height;
                            }
                            var chiMax = VizEngine.chiSquaredPDF(Math.max(r - 2, 0.01), r);
                            if (r <= 2) chiMax = VizEngine.chiSquaredPDF(0.1, r);
                            if (chiMax > maxH) maxH = chiMax;
                            maxH *= 1.15;

                            // Scaling
                            var xScale = 460 / maxVal;
                            var yScale = 280 / maxH;

                            // Axes
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(60, 340); ctx.lineTo(540, 340); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(60, 340); ctx.lineTo(60, 30); ctx.stroke();

                            // X-axis labels
                            ctx.fillStyle = viz.colors.text; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            var tickStep = maxVal > 15 ? 5 : (maxVal > 8 ? 2 : 1);
                            for (var t = 0; t <= maxVal; t += tickStep) {
                                var sx = 60 + t * xScale;
                                if (sx < 540) ctx.fillText(t.toFixed(0), sx, 344);
                            }

                            // Draw histogram bars
                            for (var b = 0; b < numBins; b++) {
                                var sx1 = 60 + bins[b].x * xScale;
                                var sx2 = 60 + (bins[b].x + bins[b].width) * xScale;
                                var sy = 340 - bins[b].height * yScale;
                                ctx.fillStyle = viz.colors.blue + '55';
                                ctx.fillRect(sx1, sy, sx2 - sx1, 340 - sy);
                                ctx.strokeStyle = viz.colors.blue + '88';
                                ctx.lineWidth = 1;
                                ctx.strokeRect(sx1, sy, sx2 - sx1, 340 - sy);
                            }

                            // Overlay chi-squared PDF
                            ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;
                            for (var i = 0; i <= 300; i++) {
                                var xv = maxVal * i / 300;
                                if (xv < 0.01) xv = 0.01;
                                var yv = VizEngine.chiSquaredPDF(xv, r);
                                if (!isFinite(yv) || yv > maxH * 2) { started = false; continue; }
                                var sx = 60 + xv * xScale;
                                var sy = 340 - yv * yScale;
                                if (!started) { ctx.moveTo(sx, sy); started = true; }
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Legend
                            ctx.fillStyle = viz.colors.blue + '88';
                            ctx.fillRect(380, 40, 15, 12);
                            viz.screenText('Simulated -2 log Lambda', 400, 46, viz.colors.blue, 11, 'left');
                            ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 2.5;
                            ctx.beginPath(); ctx.moveTo(380, 68); ctx.lineTo(395, 68); ctx.stroke();
                            viz.screenText('chi-sq(' + r + ') PDF', 400, 68, viz.colors.orange, 11, 'left');

                            // Title
                            viz.screenText("Wilks' Theorem: n = " + n + ', r = ' + r + ' (' + nSamples + ' simulations)', 300, 15, viz.colors.white, 13);
                            viz.screenText('-2 log Lambda', 300, 360, viz.colors.text, 12);
                        }

                        simulate();
                        return viz;
                    }
                },
                {
                    id: 'three-tests-viz',
 title:'Interactive: Comparison of Three Test Statistics',
 description:'Compare the behavior of LRT, Wald, and Score test statistics in the normal mean test.LRT, Wald, Score',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 60, originY: 340,
                            scale: 40
                        });

                        var nSlider = VizEngine.createSlider(controls, 'n', 5, 100, 20, 5, function() { simulate(); });
                        var muTrueSlider = VizEngine.createSlider(controls, 'true mu (for power comparison)', 0, 2.0, 0, 0.1, function() { simulate(); });
                        VizEngine.createButton(controls, 'Re-simulate', function() { simulate(); });

                        var nSims = 1500;

                        function simulate() {
                            var n = parseInt(nSlider.value);
                            var muTrue = parseFloat(muTrueSlider.value);
                            var mu0 = 0;
                            var sigma = 1;

                            viz.clear();
                            var ctx = viz.ctx;

                            // For H0: mu = 0 vs H1: mu != 0, sigma unknown
                            // LRT: n*log(1 + T^2/(n-1)) where T = sqrt(n)*xbar/S
                            // Wald: T^2
                            // Score: n*xbar^2 / S_0^2 where S_0^2 computed at tilde-theta

                            var lrtStats = [];
                            var waldStats = [];
                            var scoreStats = [];

                            for (var sim = 0; sim < nSims; sim++) {
                                // Generate data
                                var data = VizEngine.sampleArray(function() { return VizEngine.randomNormal(muTrue, sigma); }, n);
                                var xbar = VizEngine.mean(data);
                                var s2 = VizEngine.sampleVariance(data);
                                var s = Math.sqrt(s2);

                                // T statistic
                                var T = Math.sqrt(n) * (xbar - mu0) / s;

                                // LRT: -2 log Lambda = n * log(1 + T^2/(n-1))
                                var lrt = n * Math.log(1 + T * T / (n - 1));

                                // Wald: T^2
                                var wald = T * T;

                                // Score: uses restricted MLE (mu=mu0)
                                // Score = (d/dmu log L at mu0)^2 / I(mu0)
                                // = (n * xbar / sigma_tilde^2)^2 * sigma_tilde^2 / n
                                // = n * xbar^2 / sigma_tilde^2
                                // where sigma_tilde^2 = (1/n) * sum(xi - mu0)^2
                                var sigma_tilde2 = 0;
                                for (var i = 0; i < n; i++) sigma_tilde2 += (data[i] - mu0) * (data[i] - mu0);
                                sigma_tilde2 /= n;
                                var score = n * xbar * xbar / sigma_tilde2;

                                lrtStats.push(lrt);
                                waldStats.push(wald);
                                scoreStats.push(score);
                            }

                            // Draw histograms overlaid
                            var maxVal = Math.max(
                                VizEngine.quantile(lrtStats, 0.95),
                                VizEngine.quantile(waldStats, 0.95),
                                VizEngine.quantile(scoreStats, 0.95),
                                8
                            );
                            var numBins = 25;
                            var binW = maxVal / numBins;

                            function makeBins(stats) {
                                var bins = [];
                                for (var b = 0; b < numBins; b++) bins.push(0);
                                for (var i = 0; i < stats.length; i++) {
                                    var idx = Math.min(Math.floor(stats[i] / binW), numBins - 1);
                                    if (idx >= 0) bins[idx]++;
                                }
                                return bins.map(function(c) { return c / (nSims * binW); });
                            }

                            var lrtBins = makeBins(lrtStats);
                            var waldBins = makeBins(waldStats);
                            var scoreBins = makeBins(scoreStats);

                            var maxH = 0;
                            for (var b = 0; b < numBins; b++) {
                                maxH = Math.max(maxH, lrtBins[b], waldBins[b], scoreBins[b]);
                            }
                            maxH = Math.max(maxH, VizEngine.chiSquaredPDF(0.1, 1)) * 1.15;

                            var xScale = 460 / maxVal;
                            var yScale = 280 / maxH;

                            // Axes
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(60, 340); ctx.lineTo(540, 340); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(60, 340); ctx.lineTo(60, 30); ctx.stroke();

                            // X-axis labels
                            ctx.fillStyle = viz.colors.text; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            var tickStep = maxVal > 15 ? 5 : 2;
                            for (var t = 0; t <= maxVal; t += tickStep) {
                                var sx = 60 + t * xScale;
                                if (sx < 540) ctx.fillText(t.toFixed(0), sx, 344);
                            }

                            // Draw step outlines for each test
                            function drawStepHist(bins, color) {
                                ctx.strokeStyle = color; ctx.lineWidth = 1.8;
                                ctx.beginPath();
                                for (var b = 0; b < numBins; b++) {
                                    var sx1 = 60 + b * binW * xScale;
                                    var sx2 = 60 + (b + 1) * binW * xScale;
                                    var sy = 340 - bins[b] * yScale;
                                    if (b === 0) ctx.moveTo(sx1, 340);
                                    ctx.lineTo(sx1, sy);
                                    ctx.lineTo(sx2, sy);
                                }
                                ctx.lineTo(60 + numBins * binW * xScale, 340);
                                ctx.stroke();
                            }

                            drawStepHist(lrtBins, viz.colors.blue);
                            drawStepHist(waldBins, viz.colors.green);
                            drawStepHist(scoreBins, viz.colors.orange);

                            // chi^2(1) PDF overlay
                            ctx.strokeStyle = viz.colors.white; ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            var started = false;
                            for (var i = 1; i <= 300; i++) {
                                var xv = maxVal * i / 300;
                                var yv = VizEngine.chiSquaredPDF(xv, 1);
                                if (!isFinite(yv) || yv > maxH * 2) { started = false; continue; }
                                var sx = 60 + xv * xScale;
                                var sy = 340 - yv * yScale;
                                if (!started) { ctx.moveTo(sx, sy); started = true; }
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Legend
                            var legendY = 35;
                            ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(370, legendY); ctx.lineTo(390, legendY); ctx.stroke();
                            viz.screenText('LRT', 395, legendY, viz.colors.blue, 11, 'left');

                            ctx.strokeStyle = viz.colors.green;
                            ctx.beginPath(); ctx.moveTo(370, legendY + 18); ctx.lineTo(390, legendY + 18); ctx.stroke();
                            viz.screenText('Wald', 395, legendY + 18, viz.colors.green, 11, 'left');

                            ctx.strokeStyle = viz.colors.orange;
                            ctx.beginPath(); ctx.moveTo(370, legendY + 36); ctx.lineTo(390, legendY + 36); ctx.stroke();
                            viz.screenText('Score', 395, legendY + 36, viz.colors.orange, 11, 'left');

                            ctx.strokeStyle = viz.colors.white; ctx.setLineDash([6, 4]);
                            ctx.beginPath(); ctx.moveTo(370, legendY + 54); ctx.lineTo(390, legendY + 54); ctx.stroke();
                            ctx.setLineDash([]);
                            viz.screenText('chi-sq(1)', 395, legendY + 54, viz.colors.white, 11, 'left');

                            // Rejection rates at alpha = 0.05
                            var critVal = 3.841; // chi2(1, 0.05)
                            var lrtReject = lrtStats.filter(function(s) { return s > critVal; }).length / nSims;
                            var waldReject = waldStats.filter(function(s) { return s > critVal; }).length / nSims;
                            var scoreReject = scoreStats.filter(function(s) { return s > critVal; }).length / nSims;

                            var label = muTrue === 0 ? 'Type I Error (alpha=0.05)' : 'Power (alpha=0.05)';
                            viz.screenText(label, 200, 15, viz.colors.white, 13);
                            viz.screenText('LRT: ' + lrtReject.toFixed(3) + ' Wald: ' + waldReject.toFixed(3) + ' Score: ' + scoreReject.toFixed(3), 250, 360, viz.colors.yellow, 11);
                        }

                        simulate();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'For \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Poisson}(\\lambda)\\), testing \\(H_0: \\lambda = \\lambda_0\\) vs \\(H_1: \\lambda \\ne \\lambda_0\\), derive the GLRT statistic \\(-2\\log\\Lambda\\) and use Wilks\' theorem to determine its asymptotic distribution.',
                    hint: 'The Poisson MLE is \\(\\hat{\\lambda} = \\bar{X}\\). The log-likelihood is \\(\\ell(\\lambda) = (\\sum x_i) \\log \\lambda - n\\lambda - \\sum \\log(x_i!)\\).',
                    solution: '\\(-2\\log\\Lambda = 2[\\ell(\\hat{\\lambda}) - \\ell(\\lambda_0)] = 2[n\\bar{X}\\log(\\bar{X}/\\lambda_0) - n(\\bar{X} - \\lambda_0)]\\). Here \\(p = 1\\), \\(q = 0\\), \\(r = 1\\). By Wilks\' theorem, under \\(H_0\\), \\(-2\\log\\Lambda \\xrightarrow{d} \\chi^2(1)\\). In practice, at the \\(\\alpha = 0.05\\) level, reject when \\(-2\\log\\Lambda > 3.841\\).'
                },
                {
                    question: 'Consider the multivariate normal model \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N_p(\\mu, \\Sigma)\\), testing \\(H_0: \\mu = \\mathbf{0}\\) vs \\(H_1: \\mu \\ne \\mathbf{0}\\) (\\(\\Sigma\\) known). State the degrees of freedom \\(r\\) in Wilks\' theorem and give the asymptotic rejection criterion for the GLRT.',
                    hint: 'The full parameter space has dimension \\(p\\) (the dimension of \\(\\mu\\)), and the constrained space has dimension \\(0\\).',
                    solution: 'The full parameter space is \\(\\Theta = \\mathbb{R}^p\\) with dimension \\(p\\). The constrained space is \\(\\Theta_0 = \\{\\mathbf{0}\\}\\) with dimension \\(0\\). Therefore \\(r = p - 0 = p\\). The GLRT statistic is \\(-2\\log\\Lambda = n \\bar{X}^T \\Sigma^{-1} \\bar{X}\\) (this is the known-\\(\\Sigma\\) version of the Hotelling \\(T^2\\) statistic). Asymptotically, under \\(H_0\\), \\(-2\\log\\Lambda \\sim \\chi^2(p)\\) (in fact this is the exact distribution here). Reject when \\(-2\\log\\Lambda > \\chi^2_\\alpha(p)\\).'
                },
                {
                    question: 'Explain the computational advantages of the Wald test and the Score test, respectively. In what practical scenarios would you prefer the Score test over the Wald test?',
                    hint: 'Consider which test requires only estimation under \\(H_0\\) and which requires the unrestricted estimate.',
                    solution: 'The Wald test only requires the unrestricted MLE \\(\\hat{\\theta}\\) without constrained optimization, making it convenient when the unrestricted MLE is easy to compute. The Score test only requires the constrained MLE \\(\\tilde{\\theta}\\) (i.e., estimation under \\(H_0\\)) without fitting the full model. The Score test is preferable in the following scenarios: (1) when the full model MLE is computationally complex or unstable (e.g., nonlinear models); (2) when testing whether multiple variables should be added to a model (forward selection), since a single constrained model fit suffices to compute multiple Score statistics; (3) the Cochran-Armitage trend test in epidemiology is essentially a Score test. The LRT falls between the two, requiring both MLEs.'
                }
            ]
        }
    ]
});

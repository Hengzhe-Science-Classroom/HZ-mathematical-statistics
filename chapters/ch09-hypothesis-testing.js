// Chapter 9: Hypothesis Testing Fundamentals
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch09',
    number: 9,
    title: 'Hypothesis Testing Fundamentals',
    subtitle: 'Hypothesis Testing Fundamentals',
    sections: [
        // ============================================================
        // Section 1: Basic Framework of Hypothesis Testing
        // ============================================================
        {
            id: 'ch09-sec01',
            title: 'Basic Framework of Hypothesis Testing',
            content: `
 <h2>Basic Framework of Hypothesis Testing</h2>

 <p>In statistical inference, we often need to choose between two opposing hypotheses. Hypothesis testing provides a systematic decision framework: given observed data, we determine whether the data is compatible with a specific hypothesis.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.1 (Statistical Hypothesis)</div>
                    <div class="env-body">
 <p>Let the sample \\(X_1, \\ldots, X_n\\) come from a parametric family \\(\\{f(x; \\theta) : \\theta \\in \\Theta\\}\\). A <strong>statistical hypothesis</strong> is a statement about the parameter \\(\\theta\\), i.e., a subset of \\(\\Theta\\).</p>
                        <p>A hypothesis testing problem consists of a pair of hypotheses:</p>
                        <ul>
 <li><strong>Null hypothesis</strong> : \\(H_0: \\theta \\in \\Theta_0\\)</li>
 <li><strong>Alternative hypothesis</strong> : \\(H_1: \\theta \\in \\Theta_1\\)</li>
                        </ul>
                        <p>where \\(\\Theta_0 \\cap \\Theta_1 = \\emptyset\\), and usually \\(\\Theta_0 \\cup \\Theta_1 = \\Theta\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.2 (Simple and Composite Hypotheses)</div>
                    <div class="env-body">
 <p>If \\(\\Theta_0\\) contains only a single point (i.e., \\(\\Theta_0 = \\{\\theta_0\\}\\)), then \\(H_0\\) is called a <strong>simple hypothesis</strong>; if \\(\\Theta_0\\) contains more than one point, it is called a <strong>composite hypothesis</strong>. The same applies to \\(H_1\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 9.3</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\stackrel{iid}{\\sim} N(\\mu, \\sigma^2)\\), where \\(\\sigma^2\\) is known.</p>
                        <ul>
                            <li>\\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu \\neq \\mu_0\\): simple vs composite (two-sided test)</li>
                            <li>\\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu > \\mu_0\\): simple vs composite (one-sided test)</li>
                            <li>\\(H_0: \\mu \\leq \\mu_0\\) vs \\(H_1: \\mu > \\mu_0\\): composite vs composite</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.4 (Test Statistic and Rejection Region)</div>
                    <div class="env-body">
 <p>A <strong>hypothesis test</strong> consists of three components:</p>
                        <ol>
 <li><strong>Test statistic</strong> : A statistic \\(T(X_1, \\ldots, X_n)\\) that summarizes the information in the data relevant to the hypotheses.</li>
 <li><strong>Rejection region</strong> (also called critical region): A subset \\(R\\) of the range of \\(T\\).</li>
 <li><strong>Decision rule</strong> : If \\(T \\in R\\), reject \\(H_0\\); otherwise, do not reject \\(H_0\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The basic logic of hypothesis testing resembles a "proof by contradiction": we first assume \\(H_0\\) is true, then examine whether the data is "extreme" under \\(H_0\\). If the data falls in the rejection region — a region with very small probability under \\(H_0\\) — we have reason to doubt \\(H_0\\) and reject it.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 9.5 (Z-test)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\stackrel{iid}{\\sim} N(\\mu, \\sigma^2)\\) with \\(\\sigma^2\\) known. Test \\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu \\neq \\mu_0\\).</p>
                        <p>Test statistic:</p>
                        \\[Z = \\frac{\\bar{X} - \\mu_0}{\\sigma / \\sqrt{n}}\\]
 <p>Under \\(H_0\\), \\(Z \\sim N(0,1)\\). For significance level \\(\\alpha\\), the rejection region is:</p>
                        \\[R = \\{z : |z| > z_{\\alpha/2}\\}\\]
                        <p>where \\(z_{\\alpha/2}\\) is the upper \\(\\alpha/2\\) quantile of the standard normal distribution.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Note that "failing to reject \\(H_0\\)" is different from "accepting \\(H_0\\)." Failing to reject merely means the data is insufficient to refute \\(H_0\\), not that \\(H_0\\) is true. This is analogous to the "presumption of innocence" in law: insufficient evidence to convict (reject \\(H_0\\)) does not prove innocence (\\(H_0\\) is true).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="rejection-region-viz"></div>
            `,
            visualizations: [
                {
                    id: 'rejection-region-viz',
 title:'Interactive: Rejection Region and Test Decision',
 description:'Rejection region under the standard normal distribution; drag the observed value to see the test decision',
                    setup: function(container, controls) {
                        const viz = new VizEngine(container, {
                            width: 560, height: 380,
                            originX: 280, originY: 290, scale: 80
                        });

                        var alpha = 0.05;
                        var zCrit = 1.96;

                        function normalInvApprox(p) {
                            // Rational approximation for normal quantile
                            if (p <= 0 || p >= 1) return 0;
                            if (p < 0.5) return -normalInvApprox(1 - p);
                            var t = Math.sqrt(-2 * Math.log(1 - p));
                            var c0 = 2.515517, c1 = 0.802853, c2 = 0.010328;
                            var d1 = 1.432788, d2 = 0.189269, d3 = 0.001308;
                            return t - (c0 + c1 * t + c2 * t * t) / (1 + d1 * t + d2 * t * t + d3 * t * t * t);
                        }

                        var drag = viz.addDraggable('obs', 1.0, 0, viz.colors.yellow, 8, function() {
                            drag.y = 0;
                            draw();
                        });

                        var alphaSlider = VizEngine.createSlider(controls, 'alpha', 0.01, 0.20, 0.05, 0.01, function(val) {
                            alpha = val;
                            zCrit = normalInvApprox(1 - alpha / 2);
                            draw();
                        });

                        function draw() {
                            viz.clear();

                            var pdf = function(x) { return VizEngine.normalPDF(x, 0, 1); };

                            // Shade rejection regions
                            viz.shadeUnder(pdf, -4, -zCrit, viz.colors.red + '55');
                            viz.shadeUnder(pdf, zCrit, 4, viz.colors.red + '55');

                            // Shade acceptance region
                            viz.shadeUnder(pdf, -zCrit, zCrit, viz.colors.green + '22');

                            // Draw PDF
                            viz.drawFunction(pdf, -4, 4, viz.colors.blue, 2.5);

                            // Draw axes
                            viz.drawSegment(-4, 0, 4, 0, viz.colors.axis, 1);

                            // Critical value lines
                            viz.drawSegment(-zCrit, 0, -zCrit, pdf(-zCrit), viz.colors.red, 2, true);
                            viz.drawSegment(zCrit, 0, zCrit, pdf(zCrit), viz.colors.red, 2, true);

                            // Labels
                            viz.drawText('-z_' + String.fromCharCode(945) + '/2', -zCrit, -0.06, viz.colors.red, 11, 'center', 'top');
                            viz.drawText('z_' + String.fromCharCode(945) + '/2', zCrit, -0.06, viz.colors.red, 11, 'center', 'top');

                            // Observation marker
                            var zObs = drag.x;
                            viz.drawSegment(zObs, 0, zObs, pdf(zObs) + 0.02, viz.colors.yellow, 2.5);
                            viz.drawPoint(zObs, 0, viz.colors.yellow, null, 7);

                            // Decision text
                            var rejected = Math.abs(zObs) > zCrit;
                            var decisionText = rejected ? 'Reject H\u2080' : 'Fail to reject H\u2080';
                            var decisionColor = rejected ? viz.colors.red : viz.colors.green;
                            viz.screenText(decisionText, 280, 25, decisionColor, 18, 'center');
                            viz.screenText('z_obs = ' + zObs.toFixed(2), 280, 48, viz.colors.yellow, 13, 'center');
                            viz.screenText('z_crit = \u00B1' + zCrit.toFixed(3), 280, 68, viz.colors.red, 13, 'center');

                            // Region labels
                            viz.screenText('Reject', 40, 200, viz.colors.red + 'aa', 11, 'center');
                            viz.screenText('Reject', 520, 200, viz.colors.red + 'aa', 11, 'center');
                            viz.screenText('Fail to reject', 280, 240, viz.colors.green + 'aa', 12, 'center');

                            viz.drawDraggables();
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, \\ldots, X_{25} \\stackrel{iid}{\\sim} N(\\mu, 4)\\). Test \\(H_0: \\mu = 10\\) vs \\(H_1: \\mu \\neq 10\\). If \\(\\bar{x} = 10.8\\), make a decision at \\(\\alpha = 0.05\\).',
                    hint: 'Compute \\(Z = \\frac{\\bar{X} - \\mu_0}{\\sigma / \\sqrt{n}}\\) and compare with \\(z_{0.025} = 1.96\\).',
                    solution: '\\(Z = \\frac{10.8 - 10}{2/\\sqrt{25}} = \\frac{0.8}{0.4} = 2.0\\). Since \\(|Z| = 2.0 > 1.96 = z_{0.025}\\), we reject \\(H_0\\) at the \\(\\alpha = 0.05\\) level.'
                },
                {
                    question: 'Explain why in hypothesis testing we say "fail to reject \\(H_0\\)" rather than "accept \\(H_0\\)."',
                    hint: 'Consider the asymmetric roles of \\(H_0\\) and \\(H_1\\) in the testing framework.',
                    solution: 'The logic of hypothesis testing is to examine the extremeness of the data under the assumption that \\(H_0\\) is true. Failing to reject \\(H_0\\) means the data is not inconsistent with \\(H_0\\), but this does not rule out that the data may also be compatible with some parameter values in \\(H_1\\). Moreover, the existence of Type II error means we may fail to reject \\(H_0\\) even when \\(H_1\\) is true. Therefore, "fail to reject" more accurately reflects the uncertainty of the inference.'
                },
                {
                    question: 'For the one-sided test \\(H_0: \\mu \\leq \\mu_0\\) vs \\(H_1: \\mu > \\mu_0\\), write out the rejection region and explain why it lies only in the right tail.',
                    hint: 'Consider which values of \\(\\bar{X}\\) provide evidence against \\(H_0\\) and in favor of \\(H_1\\).',
                    solution: 'The rejection region is \\(R = \\{z : z > z_{\\alpha}\\}\\). Since \\(H_1: \\mu > \\mu_0\\), only when the sample mean is significantly larger than \\(\\mu_0\\) (i.e., \\(Z\\) takes a large positive value) does the data provide evidence supporting \\(H_1\\). Small values of \\(Z\\) are consistent with \\(H_0\\) and do not provide evidence against it.'
                }
            ]
        },

        // ============================================================
        // Section 2: Type I/II Errors and Significance Level
        // ============================================================
        {
            id: 'ch09-sec02',
            title: 'Type I/II Errors and Significance Level',
            content: `
 <h2>Type I/II Errors and Significance Level</h2>

                <p>Any hypothesis test can commit two types of errors. Understanding and controlling these errors is at the core of hypothesis testing theory.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.6 (Type I and Type II Errors)</div>
                    <div class="env-body">
                        <p>Given a test of \\(H_0\\) vs \\(H_1\\):</p>
                        <ul>
 <li><strong>Type I error</strong> : Rejecting \\(H_0\\) when \\(H_0\\) is true ("false positive"). Its probability is
                            \\[\\alpha(\\theta) = P_{\\theta}(\\text{Reject } H_0), \\quad \\theta \\in \\Theta_0\\]</li>
 <li><strong>Type II error</strong> : Failing to reject \\(H_0\\) when \\(H_1\\) is true ("false negative"). Its probability is
                            \\[\\beta(\\theta) = P_{\\theta}(\\text{Fail to reject } H_0), \\quad \\theta \\in \\Theta_1\\]</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.7 (Size and Level of a Test)</div>
                    <div class="env-body">
 <p>The <strong>size</strong> of a test is defined as:</p>
                        \\[\\alpha^* = \\sup_{\\theta \\in \\Theta_0} \\alpha(\\theta) = \\sup_{\\theta \\in \\Theta_0} P_{\\theta}(\\text{Reject } H_0)\\]
 <p>If \\(\\alpha^* \\leq \\alpha\\), the test is called a <strong>level</strong> \\(\\alpha\\) <strong>test</strong>. When \\(H_0\\) is a simple hypothesis, the size equals the Type I error probability: \\(\\alpha^* = P_{\\theta_0}(\\text{Reject } H_0)\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>In the Neyman-Pearson framework, there is a fundamental trade-off between \\(\\alpha\\) and \\(\\beta\\): for a given sample size \\(n\\), reducing \\(\\alpha\\) necessarily increases \\(\\beta\\) (i.e., the test becomes more conservative, harder to reject \\(H_0\\), but more likely to miss a real effect). The only way to simultaneously reduce both \\(\\alpha\\) and \\(\\beta\\) is to increase the sample size \\(n\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.8 (\\(\\alpha\\)-\\(\\beta\\) Trade-off)</div>
                    <div class="env-body">
                        <p>Let the test statistic \\(T\\) have distributions \\(F_0\\) and \\(F_1\\) under \\(H_0\\) and \\(H_1\\) respectively, with rejection region \\(R_c = \\{T > c\\}\\). Then:</p>
                        \\[\\alpha(c) = 1 - F_0(c), \\quad \\beta(c) = F_1(c)\\]
                        <p>As \\(c\\) increases, \\(\\alpha\\) decreases while \\(\\beta\\) increases; as \\(c\\) decreases, the reverse holds.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By definition, \\(\\alpha(c) = P_{H_0}(T > c) = 1 - F_0(c)\\) and \\(\\beta(c) = P_{H_1}(T \\leq c) = F_1(c)\\). Since the CDFs \\(F_0, F_1\\) are non-decreasing, as \\(c\\) increases, \\(F_0(c)\\) increases so \\(\\alpha(c)\\) decreases, while \\(F_1(c)\\) increases so \\(\\beta(c)\\) increases.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 9.9</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\stackrel{iid}{\\sim} N(\\mu, 1)\\). Test \\(H_0: \\mu = 0\\) vs \\(H_1: \\mu = 1\\).</p>
                        <p>Test statistic \\(Z = \\sqrt{n} \\bar{X}\\): under \\(H_0\\), \\(Z \\sim N(0,1)\\); under \\(H_1\\), \\(Z \\sim N(\\sqrt{n}, 1)\\).</p>
                        <p>For rejection region \\(\\{Z > c\\}\\):</p>
                        \\[\\alpha = 1 - \\Phi(c), \\quad \\beta = \\Phi(c - \\sqrt{n})\\]
                        <p>Taking \\(n = 9, c = 1.645\\): \\(\\alpha = 0.05\\), \\(\\beta = \\Phi(1.645 - 3) = \\Phi(-1.355) \\approx 0.088\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Imagine two overlapping bell curves: one centered at the parameter under \\(H_0\\), the other at the parameter under \\(H_1\\). The threshold \\(c\\) defines the decision boundary. Shifting \\(c\\) to the left causes more of the \\(H_0\\) area to enter the rejection region (\\(\\alpha\\) increases), but also leaves less of the \\(H_1\\) area in the non-rejection region (\\(\\beta\\) decreases). This is the geometric intuition behind the \\(\\alpha\\)-\\(\\beta\\) trade-off.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="alpha-beta-tradeoff-viz"></div>
            `,
            visualizations: [
                {
                    id: 'alpha-beta-tradeoff-viz',
 title:'Interactive: Type I/II Error Trade-off',
 description:'Drag the threshold to observe how alpha and beta change inverselyalphabeta',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 180, originY: 320, scale: 70
                        });

                        var mu0 = 0, mu1 = 2.5, sigma = 1;

                        var drag = viz.addDraggable('threshold', 1.645, 0, viz.colors.yellow, 8, function() {
                            drag.y = 0;
                            if (drag.x < -2) drag.x = -2;
                            if (drag.x > 5) drag.x = 5;
                            draw();
                        });

                        var nSlider = VizEngine.createSlider(controls, 'Effect size (mu1)', 0.5, 4.0, 2.5, 0.1, function(val) {
                            mu1 = val;
                            draw();
                        });

                        function draw() {
                            viz.clear();
                            var c = drag.x;
                            var pdf0 = function(x) { return VizEngine.normalPDF(x, mu0, sigma); };
                            var pdf1 = function(x) { return VizEngine.normalPDF(x, mu1, sigma); };

                            // Shade alpha (Type I error): area of H0 distribution in rejection region
                            viz.shadeUnder(pdf0, c, 5, viz.colors.red + '55');

                            // Shade beta (Type II error): area of H1 distribution in acceptance region
                            viz.shadeUnder(pdf1, -3, c, viz.colors.orange + '44');

                            // Draw H0 distribution
                            viz.drawFunction(pdf0, -3.5, 5, viz.colors.blue, 2.5);

                            // Draw H1 distribution
                            viz.drawFunction(pdf1, -2, 6, viz.colors.teal, 2.5);

                            // Threshold line
                            viz.drawSegment(c, 0, c, 0.45, viz.colors.yellow, 2, true);

                            // X axis
                            viz.drawSegment(-3.5, 0, 6, 0, viz.colors.axis, 1);

                            // Labels for distributions
                            viz.drawText('H\u2080', mu0, 0.43, viz.colors.blue, 14);
                            viz.drawText('H\u2081', mu1, 0.43, viz.colors.teal, 14);

                            // Compute alpha and beta
                            var alphaVal = 1 - VizEngine.normalCDF(c, mu0, sigma);
                            var betaVal = VizEngine.normalCDF(c, mu1, sigma);

                            // Display alpha and beta
                            viz.screenText('c = ' + c.toFixed(2), 280, 20, viz.colors.yellow, 14, 'center');
                            viz.screenText('\u03B1 (Type I) = ' + alphaVal.toFixed(4), 140, 48, viz.colors.red, 13, 'center');
                            viz.screenText('\u03B2 (Type II) = ' + betaVal.toFixed(4), 420, 48, viz.colors.orange, 13, 'center');
                            viz.screenText('Power = ' + (1 - betaVal).toFixed(4), 420, 68, viz.colors.teal, 13, 'center');

                            // Region labels
                            viz.screenText('\u03B1', 460, 280, viz.colors.red, 16, 'center');
                            viz.screenText('\u03B2', 160, 200, viz.colors.orange, 16, 'center');

                            viz.drawDraggables();
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, \\ldots, X_{16} \\stackrel{iid}{\\sim} N(\\mu, 4)\\). Test \\(H_0: \\mu = 5\\) vs \\(H_1: \\mu = 7\\) with rejection region \\(\\{\\bar{X} > 6\\}\\). Compute \\(\\alpha\\) and \\(\\beta\\).',
                    hint: 'Convert the rejection region to a condition on the standardized statistic \\(Z\\). Under \\(H_0\\), \\(\\bar{X} \\sim N(5, 1/4)\\); under \\(H_1\\), \\(\\bar{X} \\sim N(7, 1/4)\\).',
                    solution: 'Under \\(H_0\\), \\(\\bar{X} \\sim N(5, 4/16) = N(5, 0.25)\\), so \\(\\alpha = P(\\bar{X} > 6 | \\mu=5) = P(Z > (6-5)/0.5) = P(Z > 2) = 1 - \\Phi(2) \\approx 0.0228\\). Under \\(H_1\\), \\(\\bar{X} \\sim N(7, 0.25)\\), so \\(\\beta = P(\\bar{X} \\leq 6 | \\mu=7) = P(Z \\leq (6-7)/0.5) = P(Z \\leq -2) = \\Phi(-2) \\approx 0.0228\\).'
                },
                {
                    question: 'Prove: for a simple vs simple hypothesis test, if the rejection region changes from \\(\\{T > c_1\\}\\) to \\(\\{T > c_2\\}\\) with \\(c_2 > c_1\\), then \\(\\alpha\\) decreases while \\(\\beta\\) increases (assuming the test statistic has continuous distributions under both \\(H_0\\) and \\(H_1\\)).',
                    hint: 'Use the monotone non-decreasing property of CDFs.',
                    solution: 'Let \\(F_0, F_1\\) be the CDFs of \\(T\\) under \\(H_0\\) and \\(H_1\\) respectively. Then \\(\\alpha(c) = P_{H_0}(T > c) = 1 - F_0(c)\\) and \\(\\beta(c) = P_{H_1}(T \\leq c) = F_1(c)\\). Since CDFs are monotone non-decreasing, \\(c_2 > c_1\\) implies \\(F_0(c_2) \\geq F_0(c_1)\\), so \\(\\alpha(c_2) = 1 - F_0(c_2) \\leq 1 - F_0(c_1) = \\alpha(c_1)\\). Similarly, \\(\\beta(c_2) = F_1(c_2) \\geq F_1(c_1) = \\beta(c_1)\\).'
                },
                {
                    question: 'A test has size \\(\\alpha^* = 0.03\\). Is it a level 0.05 test? Is it a level 0.01 test?',
                    hint: 'Recall the definition of a level \\(\\alpha\\) test: the size does not exceed \\(\\alpha\\).',
                    solution: 'Since \\(\\alpha^* = 0.03 \\leq 0.05\\), the test is a level 0.05 test. But \\(\\alpha^* = 0.03 > 0.01\\), so it is not a level 0.01 test.'
                }
            ]
        },

        // ============================================================
        // Section 3: The p-Value
        // ============================================================
        {
            id: 'ch09-sec03',
            title: 'The p-Value',
            content: `
 <h2>The p-Value p</h2>

 <p>The p-value (p) is one of the most commonly used — and most commonly misunderstood — concepts in hypothesis testing. It converts the observed value of the test statistic into a probability measure, avoiding the need to fix the significance level in advance.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.10 (p-Value)</div>
                    <div class="env-body">
                        <p>Given a test statistic \\(T\\) and observed value \\(t_{obs}\\), the <strong>p-value</strong> is defined as the probability, under \\(H_0\\), of observing a test statistic value as extreme as or more extreme than \\(t_{obs}\\):</p>
                        \\[p = P_{H_0}(T \\geq t_{obs})\\]
                        <p>(for a right-tailed test; two-tailed and left-tailed tests are defined similarly.)</p>
                        <p>Equivalently, the p-value is the smallest significance level at which \\(t_{obs}\\) would just fall on the boundary of the rejection region:</p>
                        \\[p = \\inf\\{\\alpha : t_{obs} \\in R_\\alpha\\}\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.11 (p-Value as a Decision Rule)</div>
                    <div class="env-body">
                        <p>A level \\(\\alpha\\) test can be equivalently stated as: reject \\(H_0\\) if and only if \\(p \\leq \\alpha\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let the rejection region be \\(R_\\alpha = \\{T > c_\\alpha\\}\\), where \\(c_\\alpha\\) satisfies \\(P_{H_0}(T > c_\\alpha) = \\alpha\\). Then \\(t_{obs} \\in R_\\alpha \\iff t_{obs} > c_\\alpha \\iff P_{H_0}(T \\geq t_{obs}) \\leq \\alpha \\iff p \\leq \\alpha\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.12 (Distribution of the p-Value under \\(H_0\\))</div>
                    <div class="env-body">
                        <p>If the test statistic \\(T\\) has a continuous distribution under \\(H_0\\), then the p-value follows a \\(\\text{Uniform}(0, 1)\\) distribution under \\(H_0\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(F_0\\) be the CDF of \\(T\\) under \\(H_0\\). For a right-tailed test, \\(p = 1 - F_0(T)\\). By the probability integral transform, if \\(T\\) has continuous distribution \\(F_0\\), then \\(F_0(T) \\sim \\text{Uniform}(0,1)\\), and hence \\(p = 1 - F_0(T) \\sim \\text{Uniform}(0,1)\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning: Common Misconceptions about p-Values</div>
                    <div class="env-body">
                        <p>The following statements are all <strong>incorrect</strong>:</p>
                        <ol>
                            <li>"The p-value is the probability that \\(H_0\\) is true." — The p-value is the probability of data extremeness assuming \\(H_0\\) is true, not the probability of the hypothesis itself.</li>
                            <li>"\\(1 - p\\) is the probability that \\(H_1\\) is true." — Same as above; the p-value is not a posterior probability of the hypotheses.</li>
                            <li>"\\(p = 0.05\\) means there is a 5% chance of having made an incorrect rejection." — The error probability depends on the test's size, not on a single p-value.</li>
                            <li>"A non-significant p-value means the effect does not exist." — It may be that the sample size is too small (insufficient power).</li>
                        </ol>
                        <p>Correct interpretation: the p-value measures the degree of incompatibility between the data and \\(H_0\\). The smaller the p-value, the less the data supports \\(H_0\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (The Debate over p-Values)</div>
                    <div class="env-body">
                        <p>In 2016, the American Statistical Association (ASA) released a statement on p-values, emphasizing that p-values should not serve as the sole basis for scientific conclusions. In 2019, a special issue of <em>The American Statistician</em> went further, calling to "retire statistical significance." Nevertheless, the p-value remains a powerful tool — the problem lies in its misuse, not in the tool itself.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 9.13</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_{25} \\stackrel{iid}{\\sim} N(\\mu, 1)\\). Test \\(H_0: \\mu = 0\\) vs \\(H_1: \\mu \\neq 0\\) (two-sided). Observed \\(\\bar{x} = 0.45\\).</p>
                        <p>Test statistic \\(Z = \\sqrt{25} \\cdot 0.45 = 2.25\\). Two-sided p-value:</p>
                        \\[p = 2 \\cdot P(Z \\geq 2.25) = 2(1 - \\Phi(2.25)) \\approx 2 \\times 0.0122 = 0.0244\\]
                        <p>Reject \\(H_0\\) at \\(\\alpha = 0.05\\); fail to reject at \\(\\alpha = 0.01\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="pvalue-histogram-viz"></div>
            `,
            visualizations: [
                {
                    id: 'pvalue-histogram-viz',
 title:'Interactive: p-Value Distribution — Histogram under H\u2080 vs H\u2081 p',
 description:'Simulate many tests to observe that p-values are uniform under H\u2080 and skewed left under H\u2081pH\u2080H\u2081',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 60, originY: 340, scale: 480
                        });

                        var nSim = 500;
                        var n = 20;
                        var muTrue = 0;
                        var sigma = 1;
                        var pValues = [];

                        function simulate() {
                            pValues = [];
                            for (var i = 0; i < nSim; i++) {
                                var samples = VizEngine.sampleArray(function() {
                                    return VizEngine.randomNormal(muTrue, sigma);
                                }, n);
                                var xbar = VizEngine.mean(samples);
                                var z = xbar * Math.sqrt(n) / sigma;
                                // Two-sided p-value
                                var p = 2 * (1 - VizEngine.normalCDF(Math.abs(z)));
                                pValues.push(p);
                            }
                        }

                        function draw() {
                            viz.clear();

                            // Build histogram of p-values in [0,1] with 20 bins
                            var nBins = 20;
                            var binWidth = 1 / nBins;
                            var counts = new Array(nBins).fill(0);
                            for (var i = 0; i < pValues.length; i++) {
                                var bin = Math.min(Math.floor(pValues[i] / binWidth), nBins - 1);
                                if (bin < 0) bin = 0;
                                counts[bin]++;
                            }

                            // Normalize to density
                            var maxDensity = 0;
                            var bins = [];
                            for (var j = 0; j < nBins; j++) {
                                var density = counts[j] / (nSim * binWidth);
                                if (density > maxDensity) maxDensity = density;
                                bins.push({x: j * binWidth, width: binWidth, height: density});
                            }

                            // Draw y-axis scale
                            var yMax = Math.max(maxDensity * 1.2, 2.5);
                            var yScale = 260 / yMax;

                            // Draw histogram bars
                            for (var k = 0; k < bins.length; k++) {
                                var bx = 60 + bins[k].x * 480;
                                var bw = binWidth * 480;
                                var bh = bins[k].height * yScale;
                                viz.ctx.fillStyle = viz.colors.blue + '88';
                                viz.ctx.fillRect(bx, 340 - bh, bw - 1, bh);
                                viz.ctx.strokeStyle = viz.colors.blue;
                                viz.ctx.lineWidth = 1;
                                viz.ctx.strokeRect(bx, 340 - bh, bw - 1, bh);
                            }

                            // Draw Uniform(0,1) reference line (density = 1)
                            var refY = 340 - 1 * yScale;
                            viz.ctx.strokeStyle = viz.colors.red;
                            viz.ctx.lineWidth = 2;
                            viz.ctx.setLineDash([6, 4]);
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(60, refY);
                            viz.ctx.lineTo(540, refY);
                            viz.ctx.stroke();
                            viz.ctx.setLineDash([]);

                            // Axes
                            viz.ctx.strokeStyle = viz.colors.axis;
                            viz.ctx.lineWidth = 1.5;
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(60, 340);
                            viz.ctx.lineTo(540, 340);
                            viz.ctx.stroke();
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(60, 340);
                            viz.ctx.lineTo(60, 60);
                            viz.ctx.stroke();

                            // X axis labels
                            viz.ctx.fillStyle = viz.colors.text;
                            viz.ctx.font = '11px -apple-system,sans-serif';
                            viz.ctx.textAlign = 'center';
                            viz.ctx.textBaseline = 'top';
                            for (var xi = 0; xi <= 10; xi++) {
                                var xVal = xi / 10;
                                var xPos = 60 + xVal * 480;
                                viz.ctx.fillText(xVal.toFixed(1), xPos, 344);
                            }

                            // Y axis labels
                            viz.ctx.textAlign = 'right';
                            viz.ctx.textBaseline = 'middle';
                            for (var yi = 0; yi <= Math.floor(yMax); yi++) {
                                var yPos = 340 - yi * yScale;
                                if (yPos > 60) {
                                    viz.ctx.fillText(yi.toString(), 54, yPos);
                                }
                            }

                            // Title and info
                            viz.screenText('p-value Distribution (' + nSim + ' simulations)', 300, 20, viz.colors.white, 15, 'center');
                            viz.screenText('mu_true = ' + muTrue.toFixed(1) + ', n = ' + n, 300, 40, viz.colors.text, 12, 'center');
                            viz.screenText('Uniform(0,1) reference', 440, refY - 10, viz.colors.red, 11, 'center');

                            // Show proportion below 0.05
                            var rejCount = 0;
                            for (var ri = 0; ri < pValues.length; ri++) {
                                if (pValues[ri] <= 0.05) rejCount++;
                            }
                            viz.screenText('p < 0.05: ' + (rejCount / nSim * 100).toFixed(1) + '%', 300, 58, viz.colors.yellow, 12, 'center');
                        }

                        simulate();
                        draw();

                        VizEngine.createSlider(controls, 'mu_true', 0.0, 3.0, 0.0, 0.1, function(val) {
                            muTrue = val;
                            simulate();
                            draw();
                        });

                        VizEngine.createSlider(controls, 'n', 5, 100, 20, 5, function(val) {
                            n = Math.round(val);
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
                    question: 'Prove: if the test statistic \\(T\\) has a continuous CDF \\(F_0\\) under \\(H_0\\), then the right-tailed p-value \\(p = 1 - F_0(T)\\) satisfies \\(p \\sim \\text{Uniform}(0,1)\\).',
                    hint: 'Use the probability integral transform: if \\(X\\) has continuous CDF \\(F\\), then \\(F(X) \\sim \\text{Uniform}(0,1)\\).',
                    solution: 'By the probability integral transform, \\(U = F_0(T) \\sim \\text{Uniform}(0,1)\\). Therefore \\(p = 1 - U\\), and \\(1 - U\\) still follows \\(\\text{Uniform}(0,1)\\) (since \\(P(1-U \\leq x) = P(U \\geq 1-x) = x\\) for \\(x \\in [0,1]\\)).'
                },
                {
                    question: 'Let \\(X_1, \\ldots, X_{36} \\stackrel{iid}{\\sim} N(\\mu, 9)\\). Test \\(H_0: \\mu = 20\\) vs \\(H_1: \\mu > 20\\). If \\(\\bar{x} = 21.2\\), compute the p-value.',
                    hint: 'This is a one-sided (right-tailed) test. Compute the \\(Z\\) statistic and then find \\(P(Z \\geq z_{obs})\\).',
                    solution: '\\(Z = \\frac{21.2 - 20}{3/\\sqrt{36}} = \\frac{1.2}{0.5} = 2.4\\). Right-tailed p-value: \\(p = P(Z \\geq 2.4) = 1 - \\Phi(2.4) \\approx 0.0082\\).'
                },
                {
                    question: 'A study reports p = 0.048. Which of the following interpretations are correct? (a) The probability that \\(H_0\\) is true is 4.8%. (b) Reject \\(H_0\\) at \\(\\alpha = 0.05\\). (c) If the experiment is repeated, there is a 4.8% chance of getting the same result. (d) Under \\(H_0\\), the probability of obtaining data this extreme or more extreme is 4.8%.',
                    hint: 'Review the definition and common misconceptions of p-values.',
                    solution: '(b) and (d) are correct. (a) Incorrect: the p-value is not the posterior probability that \\(H_0\\) is true. (c) Incorrect: the p-value measures extremeness under \\(H_0\\), not the probability of replicating the same result. (b) Correct: \\(p = 0.048 < 0.05 = \\alpha\\), so reject \\(H_0\\). (d) Correct: this is the definition of the p-value.'
                }
            ]
        },

        // ============================================================
        // Section 4: Power of a Test
        // ============================================================
        {
            id: 'ch09-sec04',
            title: 'Power of a Test',
            content: `
 <h2>Power of a Test</h2>

 <p>Power measures the ability of a test to correctly reject the null hypothesis when the alternative hypothesis is true. High power means that if an effect truly exists, the test has a high probability of detecting it.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.14 (Power Function)</div>
                    <div class="env-body">
 <p>The <strong>power function</strong> of a test is defined as:</p>
                        \\[\\pi(\\theta) = P_{\\theta}(\\text{Reject } H_0), \\quad \\theta \\in \\Theta\\]
                        <p>The power function completely characterizes the test's performance across all parameter values:</p>
                        <ul>
                            <li>When \\(\\theta \\in \\Theta_0\\), \\(\\pi(\\theta)\\) is the Type I error probability (should be as small as possible)</li>
                            <li>When \\(\\theta \\in \\Theta_1\\), \\(\\pi(\\theta)\\) is the <strong>power</strong> (should be as large as possible)</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.15 (Power)</div>
                    <div class="env-body">
                        <p>For a specific alternative parameter \\(\\theta_1 \\in \\Theta_1\\), the <strong>power</strong> of the test at \\(\\theta_1\\) is:</p>
                        \\[\\text{Power}(\\theta_1) = \\pi(\\theta_1) = 1 - \\beta(\\theta_1)\\]
                        <p>where \\(\\beta(\\theta_1)\\) is the Type II error probability at \\(\\theta = \\theta_1\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 9.16 (Power Function for the Normal Mean)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\stackrel{iid}{\\sim} N(\\mu, \\sigma^2)\\) with \\(\\sigma^2\\) known. Test \\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu \\neq \\mu_0\\) with rejection region \\(|Z| > z_{\\alpha/2}\\).</p>
                        <p>The power function is:</p>
                        \\[\\pi(\\mu) = P_{\\mu}(|Z| > z_{\\alpha/2})\\]
                        <p>where \\(Z = \\frac{\\bar{X} - \\mu_0}{\\sigma/\\sqrt{n}} \\sim N\\left(\\frac{\\mu - \\mu_0}{\\sigma/\\sqrt{n}}, 1\\right)\\) under the true parameter \\(\\mu\\). Let \\(\\delta = \\frac{\\mu - \\mu_0}{\\sigma/\\sqrt{n}}\\) (the noncentrality parameter), then:</p>
                        \\[\\pi(\\mu) = 1 - \\Phi(z_{\\alpha/2} - \\delta) + \\Phi(-z_{\\alpha/2} - \\delta)\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.17 (Factors Affecting Power)</div>
                    <div class="env-body">
                        <p>For the Z-test of \\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu \\neq \\mu_0\\), the power \\(\\pi(\\mu)\\) increases when:</p>
                        <ol>
 <li><strong>Effect size</strong> \\(|\\mu - \\mu_0|\\) increases: the farther the true parameter is from \\(H_0\\), the easier it is to detect.</li>
                            <li><strong>Sample size \\(n\\)</strong> increases: more data provides more information.</li>
                            <li><strong>Significance level \\(\\alpha\\)</strong> increases: the rejection region expands, making it easier to reject \\(H_0\\).</li>
                            <li><strong>Variance \\(\\sigma^2\\)</strong> decreases: less noise makes the signal clearer.</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p>The dominant term of the power is \\(1 - \\Phi(z_{\\alpha/2} - \\delta)\\), where \\(\\delta = \\sqrt{n}|\\mu - \\mu_0|/\\sigma\\). Since \\(\\Phi\\) is increasing, as \\(\\delta\\) increases, \\(z_{\\alpha/2} - \\delta\\) decreases, \\(\\Phi(z_{\\alpha/2} - \\delta)\\) decreases, and hence the power increases. Moreover, \\(\\delta\\) increases with \\(|\\mu - \\mu_0|\\) and \\(n\\), and decreases with \\(\\sigma\\). An increase in \\(\\alpha\\) decreases \\(z_{\\alpha/2}\\), which similarly increases the power.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.18 (Monotonicity of Power Functions in Exponential Families)</div>
                    <div class="env-body">
                        <p>For one-sided tests in a one-parameter exponential family \\(f(x|\\theta) = h(x) \\exp(\\eta(\\theta) T(x) - A(\\theta))\\), if \\(\\eta(\\theta)\\) is a strictly increasing function of \\(\\theta\\), then for the test \\(H_0: \\theta \\leq \\theta_0\\) vs \\(H_1: \\theta > \\theta_0\\) (using rejection region \\(T > c\\)), the power function \\(\\pi(\\theta)\\) is a strictly increasing function of \\(\\theta\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Sketch)</div>
                    <div class="env-body">
 <p>Exponential families possess the <strong>monotone likelihood ratio</strong> (MLR) property: for \\(\\theta_2> \\theta_1\\), the likelihood ratio \\(f(x|\\theta_2)/f(x|\\theta_1)\\) is an increasing function of \\(T(x)\\). This means the larger \\(T\\) is, the more it "supports" a larger \\(\\theta\\).</p>
                        <p>Formally, using the Neyman-Pearson lemma (detailed in Chapter 10), when \\(\\eta(\\theta)\\) is increasing, for any \\(\\theta_2 > \\theta_1\\) we have \\(P_{\\theta_2}(T > c) > P_{\\theta_1}(T > c)\\), i.e., \\(\\pi(\\theta_2) > \\pi(\\theta_1)\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.19 (Unbiased Test)</div>
                    <div class="env-body">
 <p>A test \\(\\delta\\) is called <strong>unbiased</strong> if for all \\(\\theta \\in \\Theta_1\\):</p>
                        \\[\\pi(\\theta) \\geq \\sup_{\\theta' \\in \\Theta_0} \\pi(\\theta') = \\alpha^*\\]
                        <p>That is, the probability of rejection under the alternative is no less than the maximum probability of rejection under the null. An unbiased test guarantees that "the test is at least as good as random guessing."</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Power can be understood as the "sensitivity" of a test. A test with power 0.8 means: if the effect truly exists, we will detect it in approximately 80 out of 100 independent experiments. It is generally required that power be at least 0.8 (Cohen's recommendation), and in critical applications, 0.9 or higher may be required.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="power-function-viz"></div>

                <div class="viz-placeholder" data-viz="power-factors-viz"></div>
            `,
            visualizations: [
                {
                    id: 'power-function-viz',
 title:'Interactive: Power Function pi(mu)',
 description:'Observe how the power function changes with sample size and significance level',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380,
                            originX: 280, originY: 310, scale: 80
                        });

                        var mu0 = 0, sigma = 1;
                        var nVal = 16, alphaVal = 0.05;

                        function normalInvApprox(p) {
                            if (p <= 0 || p >= 1) return 0;
                            if (p < 0.5) return -normalInvApprox(1 - p);
                            var t = Math.sqrt(-2 * Math.log(1 - p));
                            var c0 = 2.515517, c1 = 0.802853, c2 = 0.010328;
                            var d1 = 1.432788, d2 = 0.189269, d3 = 0.001308;
                            return t - (c0 + c1 * t + c2 * t * t) / (1 + d1 * t + d2 * t * t + d3 * t * t * t);
                        }

                        function powerFunc(mu) {
                            var zCrit = normalInvApprox(1 - alphaVal / 2);
                            var delta = (mu - mu0) / (sigma / Math.sqrt(nVal));
                            return 1 - VizEngine.normalCDF(zCrit - delta) + VizEngine.normalCDF(-zCrit - delta);
                        }

                        function draw() {
                            viz.clear();

                            // Draw horizontal reference lines
                            viz.drawSegment(-3.5, alphaVal * 3.5, 3.5, alphaVal * 3.5, viz.colors.text + '44', 1, true);
                            viz.drawSegment(-3.5, 0.8 * 3.5, 3.5, 0.8 * 3.5, viz.colors.green + '44', 1, true);
                            viz.drawSegment(-3.5, 1.0 * 3.5, 3.5, 1.0 * 3.5, viz.colors.axis + '44', 1, true);

                            // Axes
                            viz.drawSegment(-3.5, 0, 3.5, 0, viz.colors.axis, 1.5);
                            viz.drawSegment(0, 0, 0, 3.8, viz.colors.axis, 1);

                            // X-axis labels
                            for (var x = -3; x <= 3; x++) {
                                if (x === 0) continue;
                                viz.drawText(x.toString(), x, -0.15, viz.colors.text, 11);
                            }
                            viz.drawText('mu', 3.3, -0.25, viz.colors.text, 12);

                            // Y-axis labels
                            viz.screenText('0', 270, 310, viz.colors.text, 10, 'right');
                            viz.screenText(alphaVal.toFixed(2), 264, 310 - alphaVal * 3.5 * 80, viz.colors.text, 10, 'right');
                            viz.screenText('0.80', 264, 310 - 0.8 * 3.5 * 80, viz.colors.green, 10, 'right');
                            viz.screenText('1.00', 264, 310 - 1.0 * 3.5 * 80, viz.colors.text, 10, 'right');

                            // Plot power function (scaled: multiply by 3.5 to fit the Y range)
                            var powerScaled = function(mu) { return powerFunc(mu) * 3.5; };
                            viz.drawFunction(powerScaled, -3.5, 3.5, viz.colors.orange, 2.5, 300);

                            // Mark mu0
                            viz.drawPoint(mu0, powerFunc(mu0) * 3.5, viz.colors.red, null, 5);
                            viz.drawText('mu\u2080', mu0, -0.35, viz.colors.red, 12);

                            // Title
                            viz.screenText('Power Function \u03C0(\u03BC)', 280, 18, viz.colors.white, 15, 'center');
                            viz.screenText('n = ' + nVal + ', \u03B1 = ' + alphaVal.toFixed(2) + ', \u03C3 = ' + sigma, 280, 38, viz.colors.text, 12, 'center');
                        }

                        draw();

                        VizEngine.createSlider(controls, 'n', 4, 100, 16, 4, function(val) {
                            nVal = Math.round(val);
                            draw();
                        });

                        VizEngine.createSlider(controls, 'alpha', 0.01, 0.20, 0.05, 0.01, function(val) {
                            alphaVal = val;
                            draw();
                        });

                        return viz;
                    }
                },
                {
                    id: 'power-factors-viz',
 title:'Interactive: Four Factors Affecting Power',
 description:'Adjust n, alpha, effect size, and sigma to observe how power changesn, alpha,, sigma',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380,
                            originX: 180, originY: 310, scale: 70
                        });

                        var mu0 = 0, muTrue = 1.5, sigma = 1, nVal = 20, alphaVal = 0.05;

                        function normalInvApprox(p) {
                            if (p <= 0 || p >= 1) return 0;
                            if (p < 0.5) return -normalInvApprox(1 - p);
                            var t = Math.sqrt(-2 * Math.log(1 - p));
                            var c0 = 2.515517, c1 = 0.802853, c2 = 0.010328;
                            var d1 = 1.432788, d2 = 0.189269, d3 = 0.001308;
                            return t - (c0 + c1 * t + c2 * t * t) / (1 + d1 * t + d2 * t * t + d3 * t * t * t);
                        }

                        function draw() {
                            viz.clear();

                            var se = sigma / Math.sqrt(nVal);
                            var zCrit = normalInvApprox(1 - alphaVal / 2);
                            var crit = mu0 + zCrit * se;

                            var pdf0 = function(x) { return VizEngine.normalPDF(x, mu0, se); };
                            var pdf1 = function(x) { return VizEngine.normalPDF(x, muTrue, se); };

                            // Shade power (correct rejection area under H1 beyond critical value)
                            viz.shadeUnder(pdf1, crit, muTrue + 5 * se, viz.colors.green + '44');

                            // Shade beta under H1 (fail to reject)
                            viz.shadeUnder(pdf1, muTrue - 5 * se, crit, viz.colors.orange + '22');

                            // Shade alpha under H0
                            viz.shadeUnder(pdf0, crit, mu0 + 5 * se, viz.colors.red + '33');

                            // Draw distributions
                            viz.drawFunction(pdf0, mu0 - 5 * se, mu0 + 5 * se, viz.colors.blue, 2);
                            viz.drawFunction(pdf1, muTrue - 5 * se, muTrue + 5 * se, viz.colors.teal, 2);

                            // Critical value line
                            viz.drawSegment(crit, 0, crit, Math.max(pdf0(mu0), pdf1(muTrue)) * 1.05, viz.colors.yellow, 2, true);

                            // X axis
                            var xMin = Math.min(mu0 - 4 * se, -1);
                            var xMax = Math.max(muTrue + 4 * se, 3);
                            viz.drawSegment(xMin, 0, xMax, 0, viz.colors.axis, 1);

                            // Labels
                            viz.drawText('H\u2080', mu0, pdf0(mu0) + pdf0(mu0) * 0.15, viz.colors.blue, 13);
                            viz.drawText('H\u2081', muTrue, pdf1(muTrue) + pdf1(muTrue) * 0.15, viz.colors.teal, 13);

                            // Compute power
                            var delta = (muTrue - mu0) / se;
                            var power = 1 - VizEngine.normalCDF(zCrit - delta) + VizEngine.normalCDF(-zCrit - delta);
                            var betaVal = 1 - power;

                            // Display info
                            viz.screenText('Power Analysis', 280, 18, viz.colors.white, 15, 'center');
                            viz.screenText('Power = ' + power.toFixed(4), 280, 40, viz.colors.green, 14, 'center');
                            viz.screenText('\u03B2 = ' + betaVal.toFixed(4), 400, 40, viz.colors.orange, 12, 'center');
                            viz.screenText('Effect size d = ' + ((muTrue - mu0) / sigma).toFixed(2), 280, 58, viz.colors.text, 11, 'center');
                        }

                        draw();

                        VizEngine.createSlider(controls, 'n', 5, 100, 20, 5, function(val) {
                            nVal = Math.round(val);
                            draw();
                        });

                        VizEngine.createSlider(controls, 'alpha', 0.01, 0.20, 0.05, 0.01, function(val) {
                            alphaVal = val;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'mu_true', 0.2, 3.0, 1.5, 0.1, function(val) {
                            muTrue = val;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'sigma', 0.5, 3.0, 1.0, 0.1, function(val) {
                            sigma = val;
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Write down the power function \\(\\pi(\\mu)\\) for the test \\(H_0: \\mu = 0\\) vs \\(H_1: \\mu > 0\\) (where \\(X_i \\stackrel{iid}{\\sim} N(\\mu, 1)\\), rejection region \\(\\{\\sqrt{n}\\bar{X} > z_\\alpha\\}\\)).',
                    hint: 'Under \\(\\mu\\), \\(\\sqrt{n}\\bar{X} \\sim N(\\sqrt{n}\\mu, 1)\\).',
                    solution: '\\(\\pi(\\mu) = P_\\mu(\\sqrt{n}\\bar{X} > z_\\alpha) = P(N(\\sqrt{n}\\mu, 1) > z_\\alpha) = 1 - \\Phi(z_\\alpha - \\sqrt{n}\\mu)\\). When \\(\\mu = 0\\), \\(\\pi(0) = 1 - \\Phi(z_\\alpha) = \\alpha\\). When \\(\\mu > 0\\), \\(\\pi(\\mu) > \\alpha\\), and as \\(\\mu \\to \\infty\\), \\(\\pi(\\mu) \\to 1\\).'
                },
                {
                    question: 'For the above test, if \\(\\alpha = 0.05\\) and \\(n = 25\\), compute the power at \\(\\mu = 0.5\\).',
                    hint: 'Substitute into \\(\\pi(\\mu) = 1 - \\Phi(z_{0.05} - \\sqrt{n} \\mu)\\), where \\(z_{0.05} = 1.645\\).',
                    solution: '\\(\\pi(0.5) = 1 - \\Phi(1.645 - \\sqrt{25} \\times 0.5) = 1 - \\Phi(1.645 - 2.5) = 1 - \\Phi(-0.855) = \\Phi(0.855) \\approx 0.804\\). The power is approximately 80.4%.'
                },
                {
                    question: 'Explain why the ideal power function equals \\(\\alpha\\) on \\(\\Theta_0\\) (rather than being smaller) and is as close to 1 as possible on \\(\\Theta_1\\).',
                    hint: 'Consider how having power much smaller than \\(\\alpha\\) on \\(\\Theta_0\\) affects the power on \\(\\Theta_1\\).',
                    solution: 'By the \\(\\alpha\\)-\\(\\beta\\) trade-off, the more conservative the test (smaller power on \\(\\Theta_0\\)), the lower the power on \\(\\Theta_1\\). Therefore, the ideal test should "spend" the full significance level budget: achieve \\(\\alpha\\) at the boundary of \\(\\Theta_0\\) (size exactly equal to \\(\\alpha\\)), thereby obtaining the maximum power on \\(\\Theta_1\\). This is precisely the characteristic of the optimal test in the Neyman-Pearson lemma.'
                }
            ]
        },

        // ============================================================
        // Section 5: Sample Size Determination
        // ============================================================
        {
            id: 'ch09-sec05',
            title: 'Sample Size Determination',
            content: `
 <h2>Sample Size Determination</h2>

 <p>At the experimental design stage, a key question is: how many samples are needed to detect an effect of interest with sufficient power? Power analysis answers this question by linking \\(\\alpha\\), power \\(1 - \\beta\\), effect size, and sample size.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 9.20 (Sample Size Formula for the Z-test)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\stackrel{iid}{\\sim} N(\\mu, \\sigma^2)\\) with \\(\\sigma^2\\) known. Test \\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu = \\mu_1\\) (one-sided, \\(\\mu_1 > \\mu_0\\)), requiring Type I error rate no greater than \\(\\alpha\\) and power at \\(\\mu_1\\) no less than \\(1 - \\beta\\). The required sample size is:</p>
                        \\[n = \\left\\lceil \\frac{(z_\\alpha + z_\\beta)^2 \\sigma^2}{(\\mu_1 - \\mu_0)^2} \\right\\rceil\\]
                        <p>For a two-sided test, replace \\(z_\\alpha\\) with \\(z_{\\alpha/2}\\):</p>
                        \\[n = \\left\\lceil \\frac{(z_{\\alpha/2} + z_\\beta)^2 \\sigma^2}{(\\mu_1 - \\mu_0)^2} \\right\\rceil\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>For the one-sided test \\(H_0: \\mu = \\mu_0\\) vs \\(H_1: \\mu > \\mu_0\\), the rejection region is \\(\\{\\bar{X} > \\mu_0 + z_\\alpha \\sigma / \\sqrt{n}\\}\\).</p>
                        <p>Under \\(\\mu = \\mu_1\\), we require power \\(\\geq 1 - \\beta\\):</p>
                        \\[P_{\\mu_1}(\\bar{X} > \\mu_0 + z_\\alpha \\sigma / \\sqrt{n}) \\geq 1 - \\beta\\]
                        <p>Standardizing: \\(\\bar{X} \\sim N(\\mu_1, \\sigma^2/n)\\), we get</p>
                        \\[P\\left(Z > \\frac{\\mu_0 + z_\\alpha \\sigma/\\sqrt{n} - \\mu_1}{\\sigma/\\sqrt{n}}\\right) \\geq 1 - \\beta\\]
                        \\[P\\left(Z > z_\\alpha - \\frac{(\\mu_1 - \\mu_0)\\sqrt{n}}{\\sigma}\\right) \\geq 1 - \\beta\\]
                        <p>That is, \\(z_\\alpha - \\frac{(\\mu_1 - \\mu_0)\\sqrt{n}}{\\sigma} \\leq -z_\\beta\\), which gives:</p>
                        \\[\\sqrt{n} \\geq \\frac{(z_\\alpha + z_\\beta)\\sigma}{\\mu_1 - \\mu_0}\\]
                        <p>Squaring both sides and taking the ceiling yields the result.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 9.21 (Cohen's d — Standardized Effect Size)</div>
                    <div class="env-body">
 <p>The standardized effect size is defined as:</p>
                        \\[d = \\frac{|\\mu_1 - \\mu_0|}{\\sigma}\\]
                        <p>Cohen's benchmarks: \\(d = 0.2\\) is a small effect, \\(d = 0.5\\) is a medium effect, \\(d = 0.8\\) is a large effect.</p>
                        <p>The sample size formula in terms of \\(d\\):</p>
                        \\[n = \\left\\lceil \\frac{(z_{\\alpha/2} + z_\\beta)^2}{d^2} \\right\\rceil\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 9.22</div>
                    <div class="env-body">
                        <p>Design an experiment to detect a drug effect. Known \\(\\sigma = 10\\), wish to detect an effect of \\(\\delta = \\mu_1 - \\mu_0 = 3\\) at \\(\\alpha = 0.05\\) (two-sided) with power \\(1 - \\beta = 0.80\\).</p>
                        <p>\\(z_{0.025} = 1.96\\), \\(z_{0.20} = 0.842\\).</p>
                        \\[n = \\left\\lceil \\frac{(1.96 + 0.842)^2 \\times 10^2}{3^2} \\right\\rceil = \\left\\lceil \\frac{7.8488 \\times 100}{9} \\right\\rceil = \\left\\lceil 87.21 \\right\\rceil = 88\\]
                        <p>At least 88 samples per group are needed.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Power Analysis for the t-test)</div>
                    <div class="env-body">
 <p>When \\(\\sigma\\) is unknown and the t-test is used, power analysis becomes more complex: the test statistic follows a noncentral t-distribution (t) under \\(H_1\\). Exact computation requires numerical methods. In practice, the Z-test formula is often used as an approximation, which is quite accurate for large samples (\\(n> 30\\)).</p>
                        <p>The noncentrality parameter is \\(\\lambda = \\frac{\\mu_1 - \\mu_0}{\\sigma/\\sqrt{n}} = d\\sqrt{n}\\), and the t-statistic approximately follows \\(t_{n-1}(\\lambda)\\) under \\(H_1\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Power analysis must be conducted <strong>before</strong> the experiment begins (a priori). "Post hoc power analysis" performed after observing the data is meaningless, because there is a deterministic relationship between the observed effect size and the p-value, so post hoc power analysis provides no additional information.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sample-size-calc-viz"></div>
            `,
            visualizations: [
                {
                    id: 'sample-size-calc-viz',
 title:'Interactive: Sample Size Calculator',
 description:'Enter alpha, target power, and effect size to compute the required sample size and display the power curvealpha',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 70, originY: 340, scale: 1
                        });

                        var alphaVal = 0.05;
                        var powerTarget = 0.80;
                        var effectSize = 0.5;

                        function normalInvApprox(p) {
                            if (p <= 0 || p >= 1) return 0;
                            if (p < 0.5) return -normalInvApprox(1 - p);
                            var t = Math.sqrt(-2 * Math.log(1 - p));
                            var c0 = 2.515517, c1 = 0.802853, c2 = 0.010328;
                            var d1 = 1.432788, d2 = 0.189269, d3 = 0.001308;
                            return t - (c0 + c1 * t + c2 * t * t) / (1 + d1 * t + d2 * t * t + d3 * t * t * t);
                        }

                        function computeN(a, pow, d) {
                            var za = normalInvApprox(1 - a / 2);
                            var zb = normalInvApprox(pow);
                            return Math.ceil((za + zb) * (za + zb) / (d * d));
                        }

                        function powerForN(n, a, d) {
                            var za = normalInvApprox(1 - a / 2);
                            var delta = d * Math.sqrt(n);
                            return 1 - VizEngine.normalCDF(za - delta) + VizEngine.normalCDF(-za - delta);
                        }

                        function draw() {
                            viz.clear();

                            var requiredN = computeN(alphaVal, powerTarget, effectSize);
                            var maxN = Math.max(requiredN * 2, 100);
                            var plotWidth = 460;
                            var plotHeight = 280;
                            var plotX = 80;
                            var plotY = 40;

                            // Draw plot area
                            viz.ctx.strokeStyle = viz.colors.axis;
                            viz.ctx.lineWidth = 1;
                            viz.ctx.strokeRect(plotX, plotY, plotWidth, plotHeight);

                            // Draw grid lines
                            viz.ctx.strokeStyle = viz.colors.grid;
                            viz.ctx.lineWidth = 0.5;
                            for (var g = 0.2; g <= 1.0; g += 0.2) {
                                var gy = plotY + plotHeight - g * plotHeight;
                                viz.ctx.beginPath();
                                viz.ctx.moveTo(plotX, gy);
                                viz.ctx.lineTo(plotX + plotWidth, gy);
                                viz.ctx.stroke();
                            }

                            // Draw power target line
                            var targetY = plotY + plotHeight - powerTarget * plotHeight;
                            viz.ctx.strokeStyle = viz.colors.green;
                            viz.ctx.lineWidth = 1.5;
                            viz.ctx.setLineDash([6, 4]);
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(plotX, targetY);
                            viz.ctx.lineTo(plotX + plotWidth, targetY);
                            viz.ctx.stroke();
                            viz.ctx.setLineDash([]);

                            // Draw alpha line
                            var alphaY = plotY + plotHeight - alphaVal * plotHeight;
                            viz.ctx.strokeStyle = viz.colors.red + '66';
                            viz.ctx.lineWidth = 1;
                            viz.ctx.setLineDash([4, 4]);
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(plotX, alphaY);
                            viz.ctx.lineTo(plotX + plotWidth, alphaY);
                            viz.ctx.stroke();
                            viz.ctx.setLineDash([]);

                            // Plot power curve
                            viz.ctx.strokeStyle = viz.colors.orange;
                            viz.ctx.lineWidth = 2.5;
                            viz.ctx.beginPath();
                            var first = true;
                            for (var ni = 2; ni <= maxN; ni++) {
                                var px = plotX + (ni / maxN) * plotWidth;
                                var pw = powerForN(ni, alphaVal, effectSize);
                                var py = plotY + plotHeight - pw * plotHeight;
                                if (first) { viz.ctx.moveTo(px, py); first = false; }
                                else viz.ctx.lineTo(px, py);
                            }
                            viz.ctx.stroke();

                            // Mark required n
                            var reqX = plotX + (requiredN / maxN) * plotWidth;
                            var reqPow = powerForN(requiredN, alphaVal, effectSize);
                            var reqY = plotY + plotHeight - reqPow * plotHeight;
                            viz.ctx.strokeStyle = viz.colors.yellow;
                            viz.ctx.lineWidth = 1.5;
                            viz.ctx.setLineDash([4, 3]);
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(reqX, plotY + plotHeight);
                            viz.ctx.lineTo(reqX, reqY);
                            viz.ctx.lineTo(plotX, reqY);
                            viz.ctx.stroke();
                            viz.ctx.setLineDash([]);

                            // Draw dot at required n
                            viz.ctx.fillStyle = viz.colors.yellow;
                            viz.ctx.beginPath();
                            viz.ctx.arc(reqX, reqY, 5, 0, Math.PI * 2);
                            viz.ctx.fill();

                            // X-axis labels
                            viz.ctx.fillStyle = viz.colors.text;
                            viz.ctx.font = '11px -apple-system,sans-serif';
                            viz.ctx.textAlign = 'center';
                            viz.ctx.textBaseline = 'top';
                            var step = Math.max(Math.round(maxN / 10), 1);
                            for (var xl = 0; xl <= maxN; xl += step) {
                                var xp = plotX + (xl / maxN) * plotWidth;
                                viz.ctx.fillText(xl.toString(), xp, plotY + plotHeight + 4);
                            }
                            viz.screenText('Sample size n', plotX + plotWidth / 2, plotY + plotHeight + 22, viz.colors.text, 12, 'center');

                            // Y-axis labels
                            viz.ctx.textAlign = 'right';
                            viz.ctx.textBaseline = 'middle';
                            for (var yl = 0; yl <= 1.0; yl += 0.2) {
                                var yp = plotY + plotHeight - yl * plotHeight;
                                viz.ctx.fillText(yl.toFixed(1), plotX - 6, yp);
                            }
                            viz.screenText('Power', 18, plotY + plotHeight / 2, viz.colors.text, 12, 'center');

                            // Title and result
                            viz.screenText('Sample Size Calculator (Two-sided Z-test)', 280, 14, viz.colors.white, 14, 'center');

                            // Result box
                            viz.ctx.fillStyle = viz.colors.bg;
                            viz.ctx.strokeStyle = viz.colors.yellow;
                            viz.ctx.lineWidth = 1;
                            var boxX = plotX + plotWidth - 180;
                            var boxY = plotY + 10;
                            viz.ctx.fillRect(boxX, boxY, 170, 75);
                            viz.ctx.strokeRect(boxX, boxY, 170, 75);

                            viz.screenText('Required n = ' + requiredN, boxX + 85, boxY + 18, viz.colors.yellow, 14, 'center');
                            viz.screenText('d = ' + effectSize.toFixed(2) + ', \u03B1 = ' + alphaVal.toFixed(2), boxX + 85, boxY + 38, viz.colors.text, 11, 'center');
                            viz.screenText('Target power = ' + powerTarget.toFixed(2), boxX + 85, boxY + 55, viz.colors.green, 11, 'center');

                            // Legend
                            viz.screenText('Target power', plotX + plotWidth + 2, targetY, viz.colors.green, 10, 'left', 'middle');
                        }

                        draw();

                        VizEngine.createSlider(controls, 'Effect size d', 0.1, 1.5, 0.5, 0.05, function(val) {
                            effectSize = val;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'alpha', 0.01, 0.10, 0.05, 0.01, function(val) {
                            alphaVal = val;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Target power', 0.60, 0.99, 0.80, 0.01, function(val) {
                            powerTarget = val;
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Derive the sample size formula for the two-sided Z-test: \\(n = \\lceil (z_{\\alpha/2} + z_\\beta)^2 \\sigma^2 / \\delta^2 \\rceil\\).',
                    hint: 'Start from the power condition: \\(P_{\\mu_1}(|Z| > z_{\\alpha/2}) \\geq 1 - \\beta\\). For \\(\\mu_1 > \\mu_0\\), the right tail contributes the dominant power.',
                    solution: 'Under \\(\\mu_1 > \\mu_0\\), \\(Z = (\\bar{X} - \\mu_0)/(\\sigma/\\sqrt{n}) \\sim N(\\delta\\sqrt{n}/\\sigma, 1)\\); let \\(\\lambda = \\delta\\sqrt{n}/\\sigma\\). The power is approximately \\(1 - \\Phi(z_{\\alpha/2} - \\lambda)\\) (ignoring the small left-tail probability). Requiring \\(1 - \\Phi(z_{\\alpha/2} - \\lambda) \\geq 1 - \\beta\\) gives \\(\\Phi(z_{\\alpha/2} - \\lambda) \\leq \\beta\\), i.e., \\(z_{\\alpha/2} - \\lambda \\leq -z_\\beta\\). Solving yields \\(\\lambda \\geq z_{\\alpha/2} + z_\\beta\\), i.e., \\(\\delta\\sqrt{n}/\\sigma \\geq z_{\\alpha/2} + z_\\beta\\). Squaring gives \\(n \\geq (z_{\\alpha/2} + z_\\beta)^2 \\sigma^2/\\delta^2\\).'
                },
                {
                    question: 'How many samples are needed to detect a small effect of Cohen \\(d = 0.2\\) (two-sided \\(\\alpha = 0.05\\), power 0.80)?',
                    hint: 'Substitute into \\(n = \\lceil (z_{0.025} + z_{0.20})^2 / d^2 \\rceil\\).',
                    solution: '\\(n = \\lceil (1.96 + 0.842)^2 / 0.2^2 \\rceil = \\lceil 7.8488 / 0.04 \\rceil = \\lceil 196.22 \\rceil = 197\\). Detecting a small effect requires nearly 200 samples, far more than the approximately 32 needed for a medium effect (\\(d=0.5\\)) or approximately 13 for a large effect (\\(d=0.8\\)).'
                },
                {
                    question: 'A clinical trial plans to detect a blood pressure reduction of \\(\\delta = 5\\) mmHg at \\(\\alpha = 0.01\\) (two-sided), with known \\(\\sigma = 12\\) mmHg and required power 0.90. Compute the required sample size.',
                    hint: '\\(z_{0.005} \\approx 2.576\\), \\(z_{0.10} \\approx 1.282\\).',
                    solution: '\\(n = \\lceil (2.576 + 1.282)^2 \\times 12^2 / 5^2 \\rceil = \\lceil 14.888 \\times 144 / 25 \\rceil = \\lceil 85.79 \\rceil = 86\\). At least 86 subjects per group are needed.'
                }
            ]
        }
    ]
});

window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch11',
    number: 11,
    title: 'Common Tests',
    subtitle: 'Common Statistical Tests',
    sections: [
        // ============================================================
        // SECTION 1: z-Tests and t-Tests
        // ============================================================
        {
            id: 'ch11-sec01',
            title: 'z-Tests and t-Tests',
            content: `
 <h2>z-Tests and t-Tests (zt)</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
 <p>With the theoretical framework of hypothesis testing established, we now turn to the most commonly used specific test methods. The z-test and t-test are fundamental tools for testing the mean of a normal population : the z-test is used when the population variance is known, and the t-test when it is unknown. They are the most frequently used tests in statistical practice.</p>
                    </div>
                </div>

 <h3>One-Sample z-Test (z, \\(\\sigma\\) Known)</h3>

                <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\), where \\(\\sigma^2\\) is known. Consider the testing problem:</p>
                \\[H_0: \\mu = \\mu_0 \\quad \\text{vs} \\quad H_1: \\mu \\neq \\mu_0\\]

                <div class="env-block definition">
                    <div class="env-title">Definition 11.1 (z-Test Statistic)</div>
                    <div class="env-body">
 <p>The z-test statistic (z) is defined as</p>
                        \\[Z = \\frac{\\bar{X} - \\mu_0}{\\sigma / \\sqrt{n}}\\]
                        <p>Under \\(H_0\\), \\(Z \\sim N(0,1)\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.2 (Rejection Region of the z-Test)</div>
                    <div class="env-body">
 <p>For a two-sided test at significance level \\(\\alpha\\), the rejection region is</p>
                        \\[|Z| > z_{\\alpha/2}\\]
 <p>where \\(z_{\\alpha/2}\\) is the upper \\(\\alpha/2\\) quantile of the standard normal distribution. For one-sided tests:</p>
                        <ul>
                            <li>When \\(H_1: \\mu > \\mu_0\\), the rejection region is \\(Z > z_\\alpha\\)</li>
                            <li>When \\(H_1: \\mu < \\mu_0\\), the rejection region is \\(Z < -z_\\alpha\\)</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
 <p>Under \\(H_0: \\mu = \\mu_0\\), \\(\\bar{X} \\sim N(\\mu_0, \\sigma^2/n)\\), so \\(Z = (\\bar{X} - \\mu_0)/(\\sigma/\\sqrt{n}) \\sim N(0,1)\\). For the probability of Type I error to be exactly \\(\\alpha\\), we need</p>
                        \\[P_{\\mu_0}(|Z| > c) = \\alpha\\]
                        <p>By symmetry of the standard normal distribution, \\(c = z_{\\alpha/2}\\) satisfies the requirement. The one-sided cases follow similarly.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

 <h3>One-Sample t-Test (t, \\(\\sigma\\) Unknown)</h3>

                <p>In practice, the population standard deviation \\(\\sigma\\) is usually unknown. In this case, we replace \\(\\sigma\\) with the sample standard deviation \\(S = \\sqrt{\\frac{1}{n-1}\\sum_{i=1}^n (X_i - \\bar{X})^2}\\).</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.3 (One-Sample t-Statistic)</div>
                    <div class="env-body">
 <p>The one-sample t-statistic (t) is defined as</p>
                        \\[T = \\frac{\\bar{X} - \\mu_0}{S / \\sqrt{n}}\\]
                        <p>Under \\(H_0: \\mu = \\mu_0\\), \\(T \\sim t(n-1)\\) (Student's t-distribution with \\(n-1\\) degrees of freedom).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.4 (Distribution of the t-Statistic)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\). Under \\(H_0: \\mu = \\mu_0\\),</p>
                        \\[T = \\frac{\\bar{X} - \\mu_0}{S/\\sqrt{n}} \\sim t(n-1)\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Under \\(H_0\\), \\(Z = \\frac{\\bar{X} - \\mu_0}{\\sigma/\\sqrt{n}} \\sim N(0,1)\\). By Cochran's theorem, \\(\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)\\), and \\(\\bar{X}\\) and \\(S^2\\) are independent. Therefore</p>
                        \\[T = \\frac{Z}{\\sqrt{\\frac{(n-1)S^2}{\\sigma^2}/(n-1)}} = \\frac{N(0,1)}{\\sqrt{\\chi^2(n-1)/(n-1)}} \\sim t(n-1)\\]
                        <p>This is precisely the definition of Student's t-distribution.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

 <h3>Two-Sample t-Test (t)</h3>

                <p>Let \\(X_1, \\ldots, X_m \\overset{\\text{iid}}{\\sim} N(\\mu_1, \\sigma_1^2)\\) and \\(Y_1, \\ldots, Y_n \\overset{\\text{iid}}{\\sim} N(\\mu_2, \\sigma_2^2)\\) be independent. We test \\(H_0: \\mu_1 = \\mu_2\\).</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.5 (Pooled Two-Sample t-Test)</div>
                    <div class="env-body">
 <p>When \\(\\sigma_1^2 = \\sigma_2^2 = \\sigma^2\\) (the equal variance assumption), the pooled sample variance is</p>
                        \\[S_p^2 = \\frac{(m-1)S_1^2 + (n-1)S_2^2}{m + n - 2}\\]
                        <p>The test statistic is</p>
                        \\[T = \\frac{\\bar{X} - \\bar{Y}}{S_p\\sqrt{\\frac{1}{m} + \\frac{1}{n}}} \\sim t(m+n-2)\\]
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.6 (Welch t-Test)</div>
                    <div class="env-body">
                        <p>When equal variances are not assumed, the Welch approximation uses the statistic</p>
                        \\[T_W = \\frac{\\bar{X} - \\bar{Y}}{\\sqrt{\\frac{S_1^2}{m} + \\frac{S_2^2}{n}}}\\]
                        <p>which approximately follows a \\(t(\\nu)\\) distribution, where the Welch-Satterthwaite degrees of freedom are</p>
                        \\[\\nu = \\frac{\\left(\\frac{S_1^2}{m} + \\frac{S_2^2}{n}\\right)^2}{\\frac{(S_1^2/m)^2}{m-1} + \\frac{(S_2^2/n)^2}{n-1}}\\]
                    </div>
                </div>

 <h3>Paired t-Test (t)</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.7 (Paired t-Test)</div>
                    <div class="env-body">
 <p>Suppose the observations are paired data \\((X_1, Y_1), \\ldots, (X_n, Y_n)\\). Let the differences be \\(D_i = X_i - Y_i\\). Assume \\(D_i \\overset{\\text{iid}}{\\sim} N(\\mu_D, \\sigma_D^2)\\), and test \\(H_0: \\mu_D = 0\\). The test statistic is</p>
                        \\[T = \\frac{\\bar{D}}{S_D / \\sqrt{n}} \\sim t(n-1)\\]
                        <p>where \\(\\bar{D} = \\frac{1}{n}\\sum D_i\\) and \\(S_D^2 = \\frac{1}{n-1}\\sum(D_i - \\bar{D})^2\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
 <p>The paired t-test is essentially a one-sample t-test applied to the difference sequence \\(D_1, \\ldots, D_n\\). By eliminating individual differences, it improves test power and is very important in experimental design.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="test-selector-viz"></div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
 <p>The t-test relies on the normality assumption. For large samples, by the Central Limit Theorem, the t-test remains approximately valid for non-normal populations. However, for small samples with severely skewed distributions, one should consider nonparametric methods such as the Wilcoxon test.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'test-selector-viz',
 title:'Interactive: z/t Test Selector (z/t)',
                    description: 'Switch between different test types and observe the distribution of the test statistic and the rejection region',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380, scale: 55,
                            originX: 280, originY: 300
                        });

                        var testType = 0; // 0=z, 1=one-sample t, 2=two-sample t, 3=paired t
                        var alpha = 0.05;
                        var df = 10;
                        var testNames = ['z-test', 'One-sample t', 'Two-sample t', 'Paired t'];

                        var alphaSlider = VizEngine.createSlider(controls, 'alpha', 0.01, 0.20, 0.05, 0.01, function(v) {
                            alpha = v; draw();
                        });
                        var dfSlider = VizEngine.createSlider(controls, 'df (t-test)', 2, 50, 10, 1, function(v) {
                            df = Math.round(v); draw();
                        });
                        VizEngine.createButton(controls, 'z-test', function() { testType = 0; draw(); });
                        VizEngine.createButton(controls, 'One-sample t', function() { testType = 1; draw(); });
                        VizEngine.createButton(controls, 'Two-sample t', function() { testType = 2; draw(); });
                        VizEngine.createButton(controls, 'Paired t', function() { testType = 3; draw(); });

                        function normalQuantile(p) {
                            // Rational approximation for normal quantile
                            if (p <= 0 || p >= 1) return 0;
                            if (p < 0.5) return -normalQuantile(1 - p);
                            var t = Math.sqrt(-2 * Math.log(1 - p));
                            var c0 = 2.515517, c1 = 0.802853, c2 = 0.010328;
                            var d1 = 1.432788, d2 = 0.189269, d3 = 0.001308;
                            return t - (c0 + c1 * t + c2 * t * t) / (1 + d1 * t + d2 * t * t + d3 * t * t * t);
                        }

                        function tQuantile(p, nu) {
                            // Approximate t quantile via normal with correction
                            var zp = normalQuantile(p);
                            var g1 = (zp * zp * zp + zp) / 4;
                            var g2 = (5 * zp * zp * zp * zp * zp + 16 * zp * zp * zp + 3 * zp) / 96;
                            return zp + g1 / nu + g2 / (nu * nu);
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            var xMin = -4.5, xMax = 4.5;

                            // Draw axes
                            viz.drawSegment(xMin, 0, xMax, 0, viz.colors.axis, 1);

                            // Tick marks
                            for (var t = -4; t <= 4; t++) {
                                viz.drawSegment(t, -0.02, t, 0.02, viz.colors.axis, 1);
                                viz.drawText(String(t), t, -0.08, viz.colors.text, 10);
                            }

                            var pdfFn, critVal, label;
                            if (testType === 0) {
                                pdfFn = function(x) { return VizEngine.normalPDF(x, 0, 1); };
                                critVal = normalQuantile(1 - alpha / 2);
                                label = 'Z ~ N(0,1)';
                            } else {
                                pdfFn = function(x) { return VizEngine.tPDF(x, df); };
                                critVal = tQuantile(1 - alpha / 2, df);
                                label = 'T ~ t(' + df + ')';
                            }

                            // Shade rejection regions
                            viz.shadeUnder(pdfFn, xMin, -critVal, viz.colors.red + '55');
                            viz.shadeUnder(pdfFn, critVal, xMax, viz.colors.red + '55');

                            // Shade acceptance region
                            viz.shadeUnder(pdfFn, -critVal, critVal, viz.colors.green + '22');

                            // Draw PDF curve
                            viz.drawFunction(pdfFn, xMin, xMax, viz.colors.blue, 2.5);

                            // Critical value lines
                            viz.drawSegment(-critVal, 0, -critVal, pdfFn(-critVal), viz.colors.red, 1.5, true);
                            viz.drawSegment(critVal, 0, critVal, pdfFn(critVal), viz.colors.red, 1.5, true);

                            // Labels
                            viz.screenText(testNames[testType], viz.width / 2, 20, viz.colors.white, 16, 'center');
                            viz.screenText(label, viz.width / 2, 42, viz.colors.blue, 13, 'center');
                            viz.screenText('alpha = ' + alpha.toFixed(2), viz.width - 20, 20, viz.colors.orange, 12, 'right');

                            viz.drawText('-c = ' + (-critVal).toFixed(3), -critVal, -0.18, viz.colors.red, 10);
                            viz.drawText('c = ' + critVal.toFixed(3), critVal, -0.18, viz.colors.red, 10);

                            // Rejection / acceptance labels
                            viz.screenText('Reject H0', 50, 60, viz.colors.red, 11, 'left');
                            viz.screenText('Reject H0', viz.width - 50, 60, viz.colors.red, 11, 'right');
                            viz.screenText('Fail to reject', viz.width / 2, 65, viz.colors.green, 11, 'center');

                            if (testType >= 1) {
                                viz.screenText('df = ' + df, viz.width - 20, 38, viz.colors.teal, 12, 'right');
                                // Also show N(0,1) for comparison
                                var normalFn = function(x) { return VizEngine.normalPDF(x, 0, 1); };
                                viz.drawFunction(normalFn, xMin, xMax, viz.colors.text + '66', 1, 200);
                                viz.screenText('(gray: N(0,1) for comparison)', viz.width / 2, viz.height - 10, viz.colors.text, 10, 'center');
                            }
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, \\ldots, X_{25} \\overset{\\text{iid}}{\\sim} N(\\mu, 4)\\), with observed \\(\\bar{x} = 10.3\\). At \\(\\alpha = 0.05\\), test \\(H_0: \\mu = 10\\) vs \\(H_1: \\mu \\neq 10\\). Write the value of the test statistic and the conclusion.',
                    hint: '\\(\\sigma^2 = 4\\) is known, so use the z-test. \\(z_{0.025} = 1.96\\).',
                    solution: '\\(Z = \\frac{10.3 - 10}{2/\\sqrt{25}} = \\frac{0.3}{0.4} = 0.75\\). Since \\(|Z| = 0.75 < 1.96 = z_{0.025}\\), we fail to reject \\(H_0\\). At the \\(\\alpha = 0.05\\) level, there is insufficient evidence to conclude that \\(\\mu \\neq 10\\).'
                },
                {
                    question: 'Explain why the z-test cannot be used directly when \\(\\sigma\\) is unknown and the t-test must be used instead. Explain from the perspective of the distribution of the statistic.',
                    hint: 'Consider how the distribution of the statistic changes when \\(S\\) replaces \\(\\sigma\\).',
                    solution: 'When \\(\\sigma\\) is known, \\(Z = (\\bar{X}-\\mu_0)/(\\sigma/\\sqrt{n}) \\sim N(0,1)\\). However, after replacing \\(\\sigma\\) with \\(S\\), the statistic \\(T = (\\bar{X}-\\mu_0)/(S/\\sqrt{n})\\) no longer follows the standard normal but instead follows \\(t(n-1)\\). The t-distribution has heavier tails than the normal, reflecting the additional uncertainty from estimating \\(\\sigma\\). If we still used normal quantiles as critical values, the actual Type I error probability would exceed the nominal level \\(\\alpha\\).'
                },
                {
                    question: 'Let two independent samples be \\(X_1,\\ldots,X_{10} \\overset{\\text{iid}}{\\sim} N(\\mu_1,\\sigma^2)\\) and \\(Y_1,\\ldots,Y_{15} \\overset{\\text{iid}}{\\sim} N(\\mu_2,\\sigma^2)\\). Under the equal variance assumption, what are the degrees of freedom of the pooled two-sample t-test? Write the expression for the pooled variance \\(S_p^2\\).',
                    hint: 'Degrees of freedom = \\(m + n - 2\\).',
                    solution: 'The degrees of freedom are \\(m + n - 2 = 10 + 15 - 2 = 23\\). The pooled variance is \\(S_p^2 = \\frac{(10-1)S_1^2 + (15-1)S_2^2}{10+15-2} = \\frac{9S_1^2 + 14S_2^2}{23}\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Variance Tests
        // ============================================================
        {
            id: 'ch11-sec02',
            title: 'Variance Tests',
            content: `
 <h2>Variance Tests </h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
 <p>Besides the mean, the variance is also an important population parameter. In quality control, the variance of a product specification directly reflects the stability of the production process. Variance tests address the core question: does the variability of a population meet expectations? Is the variability the same across two populations?</p>
                    </div>
                </div>

 <h3>One-Sample \\(\\chi^2\\) Variance Test (\\(\\chi^2\\))</h3>

                <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\). We test \\(H_0: \\sigma^2 = \\sigma_0^2\\).</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.8 (\\(\\chi^2\\) Variance Test)</div>
                    <div class="env-body">
                        <p>The test statistic is</p>
                        \\[\\chi^2 = \\frac{(n-1)S^2}{\\sigma_0^2}\\]
                        <p>Under \\(H_0\\), \\(\\chi^2 \\sim \\chi^2(n-1)\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.9 (Rejection Region of the \\(\\chi^2\\) Variance Test)</div>
                    <div class="env-body">
                        <p>For the two-sided test \\(H_1: \\sigma^2 \\neq \\sigma_0^2\\), the rejection region at significance level \\(\\alpha\\) is</p>
                        \\[\\chi^2 < \\chi^2_{1-\\alpha/2}(n-1) \\quad \\text{or} \\quad \\chi^2 > \\chi^2_{\\alpha/2}(n-1)\\]
                        <p>where \\(\\chi^2_{p}(k)\\) denotes the upper \\(p\\) quantile of the \\(\\chi^2(k)\\) distribution.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Note that the \\(\\chi^2\\) distribution is asymmetric, so the rejection region for the two-sided test is asymmetric. The upper and lower critical values must be looked up separately. Furthermore, the \\(\\chi^2\\) variance test is highly sensitive to the normality assumption -- far more so than the t-test's dependence on normality.</p>
                    </div>
                </div>

 <h3>F-Test: Comparing Two Population Variances (F)</h3>

                <p>Let \\(X_1,\\ldots,X_m \\overset{\\text{iid}}{\\sim} N(\\mu_1,\\sigma_1^2)\\) and \\(Y_1,\\ldots,Y_n \\overset{\\text{iid}}{\\sim} N(\\mu_2,\\sigma_2^2)\\) be independent. We test \\(H_0: \\sigma_1^2 = \\sigma_2^2\\).</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.10 (F-Test Statistic)</div>
                    <div class="env-body">
 <p>The F-test statistic (F) is</p>
                        \\[F = \\frac{S_1^2}{S_2^2}\\]
                        <p>Under \\(H_0\\), \\(F \\sim F(m-1, n-1)\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.11 (Construction of the F-Test)</div>
                    <div class="env-body">
                        <p>Since \\(\\frac{(m-1)S_1^2}{\\sigma_1^2} \\sim \\chi^2(m-1)\\) and \\(\\frac{(n-1)S_2^2}{\\sigma_2^2} \\sim \\chi^2(n-1)\\) are independent, under \\(H_0: \\sigma_1^2 = \\sigma_2^2\\),</p>
                        \\[F = \\frac{S_1^2/\\sigma_1^2}{S_2^2/\\sigma_2^2} = \\frac{S_1^2}{S_2^2} \\sim F(m-1, n-1)\\]
                        <p>This is the ratio of two independent \\(\\chi^2\\) variables (each divided by its degrees of freedom), which is precisely the definition of the F-distribution.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Recall the definition of the F-distribution: if \\(U \\sim \\chi^2(d_1)\\) and \\(V \\sim \\chi^2(d_2)\\) are independent, then \\(\\frac{U/d_1}{V/d_2} \\sim F(d_1, d_2)\\). Let \\(U = (m-1)S_1^2/\\sigma^2 \\sim \\chi^2(m-1)\\) and \\(V = (n-1)S_2^2/\\sigma^2 \\sim \\chi^2(n-1)\\). Under \\(H_0\\), \\(\\sigma_1^2 = \\sigma_2^2 = \\sigma^2\\), so</p>
                        \\[\\frac{U/(m-1)}{V/(n-1)} = \\frac{S_1^2/\\sigma^2}{S_2^2/\\sigma^2} = \\frac{S_1^2}{S_2^2} \\sim F(m-1,n-1)\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

 <h3>Bartlett's Test: Homogeneity of Variances for k Populations (Bartlettk)</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.12 (Bartlett's Test)</div>
                    <div class="env-body">
                        <p>Suppose there are \\(k\\) independent normal populations, with the \\(i\\)-th group having \\(n_i\\) observations and sample variance \\(S_i^2\\). We test \\(H_0: \\sigma_1^2 = \\cdots = \\sigma_k^2\\). Let \\(N = \\sum n_i\\), and the pooled variance be \\(S_p^2 = \\frac{\\sum (n_i-1)S_i^2}{N-k}\\). Bartlett's statistic is</p>
                        \\[B = \\frac{(N-k)\\ln S_p^2 - \\sum_{i=1}^{k}(n_i-1)\\ln S_i^2}{1 + \\frac{1}{3(k-1)}\\left(\\sum \\frac{1}{n_i-1} - \\frac{1}{N-k}\\right)}\\]
                        <p>Under \\(H_0\\), \\(B \\overset{\\text{approx}}{\\sim} \\chi^2(k-1)\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Bartlett's test is highly sensitive to the normality assumption. When normality is in doubt, one may consider Levene's test, which performs an analysis of variance on the absolute deviations of observations from the group median (or mean) and is more robust to non-normal distributions.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="f-distribution-viz"></div>
            `,
            visualizations: [
                {
                    id: 'f-distribution-viz',
 title:'Interactive: F-Distribution and Rejection Region (F)',
                    description: 'Adjust degrees of freedom and significance level to observe changes in the F-distribution shape and rejection region',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380, scale: 80,
                            originX: 60, originY: 300
                        });

                        var d1 = 5, d2 = 10, alpha = 0.05;

                        VizEngine.createSlider(controls, 'd1', 1, 30, 5, 1, function(v) {
                            d1 = Math.round(v); draw();
                        });
                        VizEngine.createSlider(controls, 'd2', 1, 30, 10, 1, function(v) {
                            d2 = Math.round(v); draw();
                        });
                        VizEngine.createSlider(controls, 'alpha', 0.01, 0.20, 0.05, 0.01, function(v) {
                            alpha = v; draw();
                        });

                        function findFQuantile(p, d1Val, d2Val) {
                            // Bisection search for F quantile
                            var lo = 0.001, hi = 20;
                            for (var iter = 0; iter < 100; iter++) {
                                var mid = (lo + hi) / 2;
                                var cdfVal = fCDF(mid, d1Val, d2Val);
                                if (cdfVal < p) lo = mid;
                                else hi = mid;
                            }
                            return (lo + hi) / 2;
                        }

                        function fCDF(x, d1Val, d2Val) {
                            // Numerical integration of F PDF
                            if (x <= 0) return 0;
                            var steps = 500;
                            var dx = x / steps;
                            var sum = 0;
                            for (var i = 0; i < steps; i++) {
                                var x0 = i * dx;
                                var x1 = (i + 1) * dx;
                                sum += (VizEngine.fPDF(x0, d1Val, d2Val) + VizEngine.fPDF(x1, d1Val, d2Val)) / 2 * dx;
                            }
                            return Math.min(sum, 1);
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            var xMax = 5.5;

                            // Draw axis
                            viz.drawSegment(0, 0, xMax, 0, viz.colors.axis, 1);
                            for (var t = 0; t <= 5; t++) {
                                viz.drawSegment(t, -0.01, t, 0.01, viz.colors.axis, 1);
                                viz.drawText(String(t), t, -0.04, viz.colors.text, 10);
                            }

                            var fPdf = function(x) { return VizEngine.fPDF(x, d1, d2); };

                            // Find critical value
                            var critVal = findFQuantile(1 - alpha, d1, d2);

                            // Shade rejection region (right tail)
                            viz.shadeUnder(fPdf, critVal, xMax, viz.colors.red + '55');

                            // Shade acceptance region
                            viz.shadeUnder(fPdf, 0.001, critVal, viz.colors.green + '22');

                            // Draw PDF
                            viz.drawFunction(fPdf, 0.01, xMax, viz.colors.orange, 2.5);

                            // Critical value line
                            viz.drawSegment(critVal, 0, critVal, fPdf(critVal) + 0.05, viz.colors.red, 1.5, true);
                            viz.drawText('F_crit = ' + critVal.toFixed(3), critVal, -0.08, viz.colors.red, 10);

                            // Labels
                            viz.screenText('F(' + d1 + ', ' + d2 + ') Distribution', viz.width / 2, 20, viz.colors.white, 15, 'center');
                            viz.screenText('alpha = ' + alpha.toFixed(2), viz.width - 20, 20, viz.colors.orange, 12, 'right');
                            viz.screenText('Reject H0', viz.width - 60, 80, viz.colors.red, 11, 'center');

                            // Show mean line
                            if (d2 > 2) {
                                var fMean = d2 / (d2 - 2);
                                viz.drawSegment(fMean, 0, fMean, fPdf(fMean), viz.colors.teal, 1, true);
                                viz.drawText('E[F]=' + fMean.toFixed(2), fMean, -0.12, viz.colors.teal, 10);
                            }
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1,\\ldots,X_{20} \\overset{\\text{iid}}{\\sim} N(\\mu,\\sigma^2)\\), with observed \\(s^2 = 12.5\\). At \\(\\alpha=0.05\\), test \\(H_0: \\sigma^2 = 9\\) vs \\(H_1: \\sigma^2 > 9\\).',
                    hint: 'Use the \\(\\chi^2\\) test, one-sided. \\(\\chi^2_{0.05}(19) \\approx 30.14\\).',
                    solution: 'The test statistic is \\(\\chi^2 = \\frac{(20-1) \\times 12.5}{9} = \\frac{237.5}{9} \\approx 26.39\\). Since \\(26.39 < 30.14 = \\chi^2_{0.05}(19)\\), we fail to reject \\(H_0\\). At the \\(\\alpha=0.05\\) level, there is insufficient evidence to conclude that \\(\\sigma^2 > 9\\).'
                },
                {
                    question: 'Two independent samples: \\(m=12, S_1^2=4.8\\) and \\(n=10, S_2^2=2.1\\). Compute the F-statistic and state the degrees of freedom. Under what circumstances might this F-test give misleading conclusions?',
                    hint: 'F = S_1^2/S_2^2, degrees of freedom (m-1, n-1).',
                    solution: '\\(F = 4.8/2.1 \\approx 2.286\\), with degrees of freedom \\((11, 9)\\). The F-test is highly sensitive to the normality assumption: if the data come from a heavy-tailed distribution (such as a t-distribution or a contaminated normal), the F-test may incorrectly reject \\(H_0\\) even when the two population variances are equal, due to the influence of extreme values, leading to an inflated Type I error rate.'
                },
                {
                    question: 'Prove: under \\(H_0: \\sigma_1^2 = \\sigma_2^2\\), the relationship between \\(F = S_1^2/S_2^2\\) and \\(1/F = S_2^2/S_1^2\\) is \\(1/F \\sim F(n-1, m-1)\\).',
                    hint: 'Use the reciprocal property of the F-distribution.',
                    solution: 'If \\(F \\sim F(d_1, d_2)\\), by definition \\(F = \\frac{U/d_1}{V/d_2}\\), where \\(U \\sim \\chi^2(d_1)\\) and \\(V \\sim \\chi^2(d_2)\\) are independent. Then \\(1/F = \\frac{V/d_2}{U/d_1} \\sim F(d_2, d_1)\\). Therefore \\(S_2^2/S_1^2 \\sim F(n-1, m-1)\\). This is why a two-sided F-test can be implemented by only looking at the upper tail: always place the larger variance in the numerator.'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Goodness-of-Fit Tests
        // ============================================================
        {
            id: 'ch11-sec03',
            title: 'Goodness-of-Fit Tests',
            content: `
 <h2>Goodness-of-Fit Tests </h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
 <p>The previous tests focus on parameters (mean, variance). Goodness-of-fit tests address a more fundamental question: does the data come from a specific distribution? For example, is a die fair? Do genotype proportions conform to Mendel's laws of heredity? This is the first step from parametric testing toward nonparametric thinking.</p>
                    </div>
                </div>

 <h3>Pearson \\(\\chi^2\\) Goodness-of-Fit Test (Pearson \\(\\chi^2\\))</h3>

 <p>Suppose there are \\(k\\) categories with observed frequencies \\(O_1, \\ldots, O_k\\) (\\(\\sum O_i = n\\)). The null hypothesis specifies the probability of each category as \\(p_1, \\ldots, p_k\\), with expected frequencies \\(E_i = np_i\\).</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.13 (Pearson \\(\\chi^2\\) Statistic)</div>
                    <div class="env-body">
                        <p>The Pearson \\(\\chi^2\\) goodness-of-fit statistic is</p>
                        \\[\\chi^2 = \\sum_{i=1}^{k} \\frac{(O_i - E_i)^2}{E_i}\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.14 (Pearson's Theorem)</div>
                    <div class="env-body">
                        <p>Under \\(H_0\\), as \\(n \\to \\infty\\),</p>
                        \\[\\chi^2 = \\sum_{i=1}^{k} \\frac{(O_i - E_i)^2}{E_i} \\xrightarrow{d} \\chi^2(k-1)\\]
                        <p>The degrees of freedom are \\(k-1\\) rather than \\(k\\), because the constraint \\(\\sum O_i = n\\) on the sum of frequencies imposes one linear constraint.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p>Let \\(Z_i = \\frac{O_i - E_i}{\\sqrt{E_i}}\\). By the central limit theorem for the multinomial distribution, the vector \\((Z_1, \\ldots, Z_k)^\\top\\) asymptotically follows a zero-mean multivariate normal, subject to the constraint \\(\\sum \\sqrt{E_i} Z_i = 0\\). The covariance matrix has rank \\(k-1\\), so \\(\\sum Z_i^2 = \\chi^2\\) asymptotically follows \\(\\chi^2(k-1)\\). A rigorous proof can be completed via orthogonal decomposition (a generalization of Cochran's theorem).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

 <h3>Degrees of Freedom Correction When Estimating Parameters </h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.15 (Degrees of Freedom with Parameter Estimation)</div>
                    <div class="env-body">
                        <p>If the null hypothesis contains \\(p\\) unknown parameters estimated by maximum likelihood from the grouped data, then</p>
                        \\[\\chi^2 = \\sum_{i=1}^{k} \\frac{(O_i - \\hat{E}_i)^2}{\\hat{E}_i} \\xrightarrow{d} \\chi^2(k - 1 - p)\\]
                        <p>The degrees of freedom are reduced to \\(k - 1 - p\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 11.16</div>
                    <div class="env-body">
                        <p>Testing whether data follow a Poisson distribution. Divide the data into \\(k\\) categories (e.g., 0, 1, 2, 3, \\(\\geq 4\\)) and estimate the parameter \\(\\hat{\\lambda} = \\bar{X}\\) from the data (\\(p=1\\)). Then the degrees of freedom are \\(k - 1 - 1 = k - 2\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Rule of thumb: the \\(\\chi^2\\) goodness-of-fit test requires each expected frequency \\(E_i \\geq 5\\). When expected frequencies are too small, the \\(\\chi^2\\) approximation is inaccurate, and adjacent categories should be merged.</p>
                    </div>
                </div>

 <h3>Introduction to the Kolmogorov-Smirnov Test (Kolmogorov-Smirnov)</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.17 (KS Statistic)</div>
                    <div class="env-body">
 <p>The Kolmogorov-Smirnov test does not require grouping. Let the empirical distribution function be \\(F_n(x) = \\frac{1}{n}\\sum_{i=1}^n \\mathbf{1}(X_i \\leq x)\\), and the null hypothesis specifies the CDF as \\(F_0\\). The KS statistic is</p>
                        \\[D_n = \\sup_x |F_n(x) - F_0(x)|\\]
                        <p>The Glivenko-Cantelli theorem guarantees \\(D_n \\to 0\\) a.s.; under \\(H_0\\), \\(\\sqrt{n} D_n\\) converges to the Kolmogorov distribution.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The advantages of the KS test are that it does not require grouping (avoiding the arbitrariness of binning choices) and is an exact distribution-free test for continuous distributions. Its disadvantages are low power for detecting deviations in the tails and inapplicability to discrete distributions.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="chi2-gof-viz"></div>
            `,
            visualizations: [
                {
                    id: 'chi2-gof-viz',
 title:'Interactive: Chi-Squared Goodness-of-Fit Test',
                    description: 'Adjust observed frequencies, compute the test statistic, and display it on the chi-squared distribution',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 420, scale: 18,
                            originX: 80, originY: 250
                        });

                        var k = 6; // number of categories (e.g., dice)
                        var n = 60; // total count
                        var observed = [8, 12, 10, 14, 7, 9];

                        VizEngine.createButton(controls, 'Fair die (uniform)', function() {
                            observed = [10, 10, 10, 10, 10, 10];
                            draw();
                        });
                        VizEngine.createButton(controls, 'Slightly biased', function() {
                            observed = [8, 12, 10, 14, 7, 9];
                            draw();
                        });
                        VizEngine.createButton(controls, 'Very biased', function() {
                            observed = [3, 5, 8, 15, 12, 17];
                            draw();
                        });
                        VizEngine.createButton(controls, 'Random sample', function() {
                            // Generate multinomial sample
                            observed = [0, 0, 0, 0, 0, 0];
                            for (var i = 0; i < n; i++) {
                                var cat = Math.floor(Math.random() * k);
                                observed[cat]++;
                            }
                            draw();
                        });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            var total = 0;
                            for (var i = 0; i < k; i++) total += observed[i];
                            var expected = total / k;

                            // Top half: bar chart
                            var barW = 1.8;
                            var gap = 0.5;
                            var startX = 1;

                            // Draw observed vs expected bars
                            var maxVal = 0;
                            for (var i = 0; i < k; i++) {
                                if (observed[i] > maxVal) maxVal = observed[i];
                            }
                            if (expected > maxVal) maxVal = expected;
                            maxVal = Math.max(maxVal, 1);

                            var barScale = 10 / maxVal;

                            // Axis for bar chart
                            viz.drawSegment(0.5, 0, 0.5 + k * (barW + gap), 0, viz.colors.axis, 1);

                            for (var i = 0; i < k; i++) {
                                var x = startX + i * (barW + gap);
                                var obsH = observed[i] * barScale;
                                var expH = expected * barScale;

                                // Observed bar
                                viz.drawBar(x, barW * 0.45, obsH, viz.colors.blue + '88', viz.colors.blue, 1);
                                // Expected bar
                                viz.drawBar(x + barW * 0.45, barW * 0.45, expH, viz.colors.orange + '44', viz.colors.orange, 1);

                                // Label
                                viz.drawText(String(i + 1), x + barW / 2, -0.5, viz.colors.text, 11);
                                viz.drawText(String(observed[i]), x + barW * 0.22, obsH + 0.5, viz.colors.blue, 10);
                            }

                            // Legend
                            viz.screenText('Observed', 420, 20, viz.colors.blue, 11, 'left');
                            viz.screenText('Expected (' + expected.toFixed(1) + ')', 420, 36, viz.colors.orange, 11, 'left');

                            // Compute chi-squared statistic
                            var chi2 = 0;
                            for (var i = 0; i < k; i++) {
                                chi2 += (observed[i] - expected) * (observed[i] - expected) / expected;
                            }

                            var dfVal = k - 1;

                            // Bottom half: chi-squared distribution
                            var chi2Y = -4;
                            var chi2Scale = 3.5;
                            var chi2XMax = 25;

                            // Draw chi2 distribution in bottom area
                            var pdfFn = function(x) {
                                return VizEngine.chiSquaredPDF(x, dfVal) * chi2Scale + chi2Y;
                            };
                            var baselineFn = function() { return chi2Y; };

                            // Axis for chi2
                            viz.drawSegment(0, chi2Y, chi2XMax / viz.scale * 18, chi2Y, viz.colors.axis, 1);

                            // Draw chi2 PDF
                            var xRange = chi2XMax;
                            for (var step = 0; step <= 200; step++) {
                                var x1 = 0.1 + (xRange - 0.1) * step / 200;
                                var x2 = 0.1 + (xRange - 0.1) * (step + 1) / 200;
                                var y1 = pdfFn(x1);
                                var y2 = pdfFn(x2);
                                if (step === 0) {
                                    ctx.beginPath();
                                    ctx.strokeStyle = viz.colors.purple;
                                    ctx.lineWidth = 2;
                                    var scr = viz.toScreen(x1, y1);
                                    ctx.moveTo(scr[0], scr[1]);
                                }
                                var scr2 = viz.toScreen(x2, y2);
                                ctx.lineTo(scr2[0], scr2[1]);
                            }
                            ctx.stroke();

                            // Critical value at alpha=0.05
                            // chi2_0.05(5) approx 11.07
                            var critValues = {3: 7.815, 4: 9.488, 5: 11.07, 6: 12.59, 7: 14.07, 8: 15.51, 9: 16.92, 10: 18.31};
                            var crit = critValues[dfVal] || 11.07;

                            // Shade rejection region
                            var shadeSteps = 100;
                            ctx.fillStyle = viz.colors.red + '44';
                            ctx.beginPath();
                            var scrStart = viz.toScreen(crit, chi2Y);
                            ctx.moveTo(scrStart[0], scrStart[1]);
                            for (var s = 0; s <= shadeSteps; s++) {
                                var xx = crit + (xRange - crit) * s / shadeSteps;
                                var yy = pdfFn(xx);
                                var ss = viz.toScreen(xx, yy);
                                ctx.lineTo(ss[0], ss[1]);
                            }
                            var scrEnd = viz.toScreen(xRange, chi2Y);
                            ctx.lineTo(scrEnd[0], scrEnd[1]);
                            ctx.closePath();
                            ctx.fill();

                            // Mark test statistic
                            if (chi2 <= xRange) {
                                var testScr = viz.toScreen(chi2, chi2Y);
                                var testScrTop = viz.toScreen(chi2, pdfFn(chi2));
                                ctx.strokeStyle = viz.colors.yellow;
                                ctx.lineWidth = 2;
                                ctx.setLineDash([4, 3]);
                                ctx.beginPath();
                                ctx.moveTo(testScr[0], testScr[1]);
                                ctx.lineTo(testScrTop[0], testScrTop[1]);
                                ctx.stroke();
                                ctx.setLineDash([]);
                                viz.drawText('chi2=' + chi2.toFixed(2), chi2, chi2Y - 0.8, viz.colors.yellow, 11);
                            }

                            // Mark critical value
                            viz.drawText('crit=' + crit.toFixed(2), crit, chi2Y - 0.5, viz.colors.red, 10);

                            // Verdict
                            var reject = chi2 > crit;
                            viz.screenText('chi2(' + dfVal + ') distribution, alpha=0.05', viz.width / 2, 265, viz.colors.purple, 12, 'center');
                            viz.screenText(
                                'chi2 = ' + chi2.toFixed(3) + (reject ? ' > ' : ' < ') + crit.toFixed(3) + ' => ' + (reject ? 'REJECT H0' : 'Fail to reject H0'),
                                viz.width / 2, viz.height - 15,
                                reject ? viz.colors.red : viz.colors.green,
                                13, 'center'
                            );
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'A die is rolled 120 times, with the following observed frequencies for each face: Face 1: 25, Face 2: 17, Face 3: 15, Face 4: 23, Face 5: 24, Face 6: 16. At \\(\\alpha = 0.05\\), test whether the die is fair.',
                    hint: 'Expected frequencies are all \\(120/6 = 20\\), degrees of freedom are 5. \\(\\chi^2_{0.05}(5) = 11.07\\).',
                    solution: 'Expected frequencies \\(E_i = 20\\). \\(\\chi^2 = \\frac{(25-20)^2}{20} + \\frac{(17-20)^2}{20} + \\frac{(15-20)^2}{20} + \\frac{(23-20)^2}{20} + \\frac{(24-20)^2}{20} + \\frac{(16-20)^2}{20} = \\frac{25+9+25+9+16+16}{20} = \\frac{100}{20} = 5.0\\). Since \\(5.0 < 11.07 = \\chi^2_{0.05}(5)\\), we fail to reject \\(H_0\\). There is insufficient evidence to conclude that the die is unfair.'
                },
                {
                    question: 'Explain why the degrees of freedom in the Pearson \\(\\chi^2\\) goodness-of-fit test are \\(k-1\\) rather than \\(k\\). How do the degrees of freedom change if \\(p\\) parameters are estimated from the data?',
                    hint: 'Consider the constraints among the frequencies.',
                    solution: 'The sum of frequencies \\(\\sum O_i = n\\) is fixed, so only \\(k-1\\) frequencies can vary freely; this imposes one linear constraint, reducing the degrees of freedom to \\(k-1\\). If \\(p\\) parameters are additionally estimated from the data via MLE (e.g., \\(\\lambda\\) for Poisson), each estimated parameter imposes another constraint, further reducing the degrees of freedom to \\(k-1-p\\).'
                },
                {
                    question: 'Compare the respective advantages and disadvantages of the Pearson \\(\\chi^2\\) test and the Kolmogorov-Smirnov test.',
                    hint: 'Compare in terms of dependence on grouping, conditions for applicability, and detection power.',
                    solution: 'Pearson \\(\\chi^2\\): Advantages -- applicable to both discrete and continuous data, can test composite hypotheses (adjusting degrees of freedom after parameter estimation), can simultaneously detect multiple types of departure. Disadvantages -- requires grouping (the choice of binning affects the conclusion), requires expected frequencies not too small, insensitive to tail deviations. KS test: Advantages -- does not require grouping, is an exact distribution-free test for continuous distributions, sensitive to deviations in the center of the distribution. Disadvantages -- applicable only to continuous distributions, low power for detecting tail deviations, cannot be directly used for composite hypotheses (critical values change when parameters are estimated from data).'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Test of Independence
        // ============================================================
        {
            id: 'ch11-sec04',
            title: 'Test of Independence',
            content: `
 <h2>Test of Independence </h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
 <p>Goodness-of-fit tests focus on whether the distribution of a single variable matches expectations. Tests of independence address whether there is an association between two categorical variables. For example: is smoking related to lung cancer? Is gender independent of career choice? The core tools are the contingency table and the \\(\\chi^2\\) test of independence.</p>
                    </div>
                </div>

 <h3>Contingency Tables and Independence </h3>

                <p>Suppose variable \\(A\\) has \\(r\\) levels and variable \\(B\\) has \\(c\\) levels. From a population of \\(n\\) individuals, the observed frequency falling into cell \\((i,j)\\) is \\(O_{ij}\\).</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.18 (Expected Frequencies in a Contingency Table)</div>
                    <div class="env-body">
                        <p>Under \\(H_0\\): \\(A\\) and \\(B\\) are independent, the expected frequency for cell \\((i,j)\\) is</p>
                        \\[E_{ij} = \\frac{R_i \\cdot C_j}{n}\\]
                        <p>where \\(R_i = \\sum_{j=1}^c O_{ij}\\) is the row total for row \\(i\\), and \\(C_j = \\sum_{i=1}^r O_{ij}\\) is the column total for column \\(j\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.19 (\\(\\chi^2\\) Test of Independence)</div>
                    <div class="env-body">
                        <p>The test statistic</p>
                        \\[\\chi^2 = \\sum_{i=1}^{r} \\sum_{j=1}^{c} \\frac{(O_{ij} - E_{ij})^2}{E_{ij}}\\]
                        <p>Under \\(H_0\\) (independence), \\(\\chi^2 \\xrightarrow{d} \\chi^2((r-1)(c-1))\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof sketch</div>
                    <div class="env-body">
                        <p>Intuition for the degrees of freedom: the contingency table has \\(rc\\) cells. The constraints include: \\(r\\) row totals are fixed (actually \\(r-1\\) independent constraints, since the total = n), \\(c\\) column totals are fixed (\\(c-1\\) independent constraints), plus the total sample size \\(n\\) is fixed. But the total sample size constraint is already included in the row/column totals. Under \\(H_0\\), we estimate \\(r-1\\) row marginal probabilities and \\(c-1\\) column marginal probabilities. Degrees of freedom = \\(rc - 1 - (r-1) - (c-1) = (r-1)(c-1)\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 11.20</div>
                    <div class="env-body">
                        <p>A \\(2 \\times 2\\) contingency table:</p>
                        <table style="margin: 10px auto; border-collapse: collapse;">
                            <tr><td style="padding: 6px 15px; border: 1px solid #30363d;"></td><td style="padding: 6px 15px; border: 1px solid #30363d;">Diseased</td><td style="padding: 6px 15px; border: 1px solid #30363d;">Not diseased</td><td style="padding: 6px 15px; border: 1px solid #30363d;">Total</td></tr>
                            <tr><td style="padding: 6px 15px; border: 1px solid #30363d;">Smoker</td><td style="padding: 6px 15px; border: 1px solid #30363d;">40</td><td style="padding: 6px 15px; border: 1px solid #30363d;">60</td><td style="padding: 6px 15px; border: 1px solid #30363d;">100</td></tr>
                            <tr><td style="padding: 6px 15px; border: 1px solid #30363d;">Non-smoker</td><td style="padding: 6px 15px; border: 1px solid #30363d;">20</td><td style="padding: 6px 15px; border: 1px solid #30363d;">80</td><td style="padding: 6px 15px; border: 1px solid #30363d;">100</td></tr>
                            <tr><td style="padding: 6px 15px; border: 1px solid #30363d;">Total</td><td style="padding: 6px 15px; border: 1px solid #30363d;">60</td><td style="padding: 6px 15px; border: 1px solid #30363d;">140</td><td style="padding: 6px 15px; border: 1px solid #30363d;">200</td></tr>
                        </table>
                        <p>Expected frequencies: \\(E_{11} = 100 \\times 60/200 = 30\\), \\(E_{12} = 70\\), \\(E_{21} = 30\\), \\(E_{22} = 70\\).</p>
                        <p>\\(\\chi^2 = \\frac{(40-30)^2}{30} + \\frac{(60-70)^2}{70} + \\frac{(20-30)^2}{30} + \\frac{(80-70)^2}{70} = \\frac{100}{30} + \\frac{100}{70} + \\frac{100}{30} + \\frac{100}{70} \\approx 9.52\\)</p>
                        <p>Degrees of freedom = \\((2-1)(2-1) = 1\\). \\(\\chi^2_{0.05}(1) = 3.841\\). Since \\(9.52 > 3.841\\), we reject the independence hypothesis.</p>
                    </div>
                </div>

 <h3>Fisher's Exact Test (Fisher)</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.21 (Fisher's Exact Test)</div>
                    <div class="env-body">
 <p>For a \\(2 \\times 2\\) contingency table, when the sample size is small (expected frequencies < 5), the \\(\\chi^2\\) approximation is inaccurate. Fisher's exact test computes the exact p-value under the condition that the row and column marginals are fixed, using the hypergeometric distribution.</p>
                        <p>Let the \\(2 \\times 2\\) table be</p>
                        <table style="margin: 10px auto; border-collapse: collapse;">
                            <tr><td style="padding: 4px 12px; border: 1px solid #30363d;">a</td><td style="padding: 4px 12px; border: 1px solid #30363d;">b</td></tr>
                            <tr><td style="padding: 4px 12px; border: 1px solid #30363d;">c</td><td style="padding: 4px 12px; border: 1px solid #30363d;">d</td></tr>
                        </table>
                        <p>Conditional on the fixed marginals \\(a+b, c+d, a+c, b+d\\), \\(a\\) follows a hypergeometric distribution:</p>
                        \\[P(a) = \\frac{\\binom{a+b}{a}\\binom{c+d}{c}}{\\binom{n}{a+c}}\\]
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Fisher's exact test yields an exact p-value for any sample size (it does not rely on large-sample approximations). Computationally, it may be slow for very large sample sizes, in which case the \\(\\chi^2\\) test's asymptotic approximation is already sufficiently accurate. Modern statistical software handles both methods efficiently.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="contingency-table-viz"></div>
            `,
            visualizations: [
                {
                    id: 'contingency-table-viz',
 title:'Interactive: Contingency Table Independence Test',
                    description: 'Adjust the values in the contingency table and observe changes in the chi-squared statistic and p-value',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400, scale: 1,
                            originX: 0, originY: 0
                        });
                        var ctx = viz.ctx;

                        // 2x3 contingency table
                        var table = [
                            [30, 20, 10],
                            [15, 25, 20]
                        ];

                        var selectedCell = null;

                        VizEngine.createButton(controls, 'Independent', function() {
                            table = [[20, 20, 20], [20, 20, 20]];
                            draw();
                        });
                        VizEngine.createButton(controls, 'Moderate association', function() {
                            table = [[30, 20, 10], [15, 25, 20]];
                            draw();
                        });
                        VizEngine.createButton(controls, 'Strong association', function() {
                            table = [[45, 10, 5], [5, 15, 40]];
                            draw();
                        });
                        VizEngine.createButton(controls, 'Randomize', function() {
                            for (var i = 0; i < 2; i++) {
                                for (var j = 0; j < 3; j++) {
                                    table[i][j] = Math.floor(Math.random() * 40) + 5;
                                }
                            }
                            draw();
                        });

                        function draw() {
                            viz.clear();

                            var r = table.length, c = table[0].length;
                            var n = 0;
                            var rowTotals = [];
                            var colTotals = [];
                            for (var i = 0; i < r; i++) {
                                var rt = 0;
                                for (var j = 0; j < c; j++) rt += table[i][j];
                                rowTotals.push(rt);
                                n += rt;
                            }
                            for (var j = 0; j < c; j++) {
                                var ct = 0;
                                for (var i = 0; i < r; i++) ct += table[i][j];
                                colTotals.push(ct);
                            }

                            // Compute expected and chi2
                            var chi2 = 0;
                            var expected = [];
                            for (var i = 0; i < r; i++) {
                                expected.push([]);
                                for (var j = 0; j < c; j++) {
                                    var e = rowTotals[i] * colTotals[j] / n;
                                    expected[i].push(e);
                                    chi2 += (table[i][j] - e) * (table[i][j] - e) / e;
                                }
                            }
                            var dfVal = (r - 1) * (c - 1);

                            // Draw table
                            var cellW = 80, cellH = 50;
                            var startX = 100, startY = 40;

                            // Headers
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';

                            for (var j = 0; j < c; j++) {
                                ctx.fillStyle = viz.colors.teal;
                                ctx.fillText('B' + (j + 1), startX + j * cellW + cellW / 2, startY - 15);
                            }
                            ctx.fillText('Total', startX + c * cellW + cellW / 2, startY - 15);

                            for (var i = 0; i < r; i++) {
                                ctx.fillStyle = viz.colors.orange;
                                ctx.textAlign = 'right';
                                ctx.fillText('A' + (i + 1), startX - 10, startY + i * cellH + cellH / 2);
                            }
                            ctx.fillText('Total', startX - 10, startY + r * cellH + cellH / 2);

                            // Draw cells
                            for (var i = 0; i < r; i++) {
                                for (var j = 0; j < c; j++) {
                                    var cx = startX + j * cellW;
                                    var cy = startY + i * cellH;

                                    // Color by deviation
                                    var dev = (table[i][j] - expected[i][j]) / Math.max(expected[i][j], 1);
                                    var intensity = Math.min(Math.abs(dev) * 0.5, 0.6);
                                    if (dev > 0) {
                                        ctx.fillStyle = 'rgba(88, 166, 255, ' + intensity + ')';
                                    } else {
                                        ctx.fillStyle = 'rgba(248, 81, 73, ' + intensity + ')';
                                    }
                                    ctx.fillRect(cx, cy, cellW, cellH);

                                    ctx.strokeStyle = viz.colors.axis;
                                    ctx.lineWidth = 1;
                                    ctx.strokeRect(cx, cy, cellW, cellH);

                                    // Observed value
                                    ctx.fillStyle = viz.colors.white;
                                    ctx.font = 'bold 16px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.fillText(String(table[i][j]), cx + cellW / 2, cy + cellH / 2 - 8);

                                    // Expected value
                                    ctx.fillStyle = viz.colors.text;
                                    ctx.font = '10px -apple-system,sans-serif';
                                    ctx.fillText('E=' + expected[i][j].toFixed(1), cx + cellW / 2, cy + cellH / 2 + 12);
                                }
                            }

                            // Row totals
                            for (var i = 0; i < r; i++) {
                                var cx = startX + c * cellW;
                                var cy = startY + i * cellH;
                                ctx.strokeStyle = viz.colors.axis;
                                ctx.strokeRect(cx, cy, cellW, cellH);
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(String(rowTotals[i]), cx + cellW / 2, cy + cellH / 2);
                            }

                            // Column totals
                            for (var j = 0; j < c; j++) {
                                var cx = startX + j * cellW;
                                var cy = startY + r * cellH;
                                ctx.strokeStyle = viz.colors.axis;
                                ctx.strokeRect(cx, cy, cellW, cellH);
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = 'bold 14px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(String(colTotals[j]), cx + cellW / 2, cy + cellH / 2);
                            }

                            // Grand total
                            var cx = startX + c * cellW;
                            var cy = startY + r * cellH;
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.strokeRect(cx, cy, cellW, cellH);
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillText(String(n), cx + cellW / 2, cy + cellH / 2);

                            // Results
                            var resultY = startY + (r + 1) * cellH + 30;
                            ctx.textAlign = 'left';
                            ctx.font = '14px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.white;
                            ctx.fillText('chi-squared = ' + chi2.toFixed(3), 30, resultY);
                            ctx.fillText('df = (' + r + '-1)(' + c + '-1) = ' + dfVal, 30, resultY + 22);

                            // Approximate p-value using chi2 CDF (numerical integration)
                            var pVal = 0;
                            var integSteps = 1000;
                            var integMax = Math.max(chi2, 50);
                            var dx = integMax / integSteps;
                            for (var s = 0; s < integSteps; s++) {
                                var x0 = s * dx;
                                var x1 = (s + 1) * dx;
                                pVal += (VizEngine.chiSquaredPDF(x0, dfVal) + VizEngine.chiSquaredPDF(x1, dfVal)) / 2 * dx;
                            }
                            pVal = 1 - pVal;
                            if (pVal < 0) pVal = 0;

                            ctx.fillStyle = pVal < 0.05 ? viz.colors.red : viz.colors.green;
                            ctx.fillText('p-value approx ' + (pVal < 0.001 ? '< 0.001' : pVal.toFixed(4)), 30, resultY + 44);
                            ctx.fillText(pVal < 0.05 ? 'Reject H0 (alpha=0.05): variables are associated' : 'Fail to reject H0: no evidence of association', 30, resultY + 66);

                            // Legend
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Blue: O > E, Red: O < E (intensity = deviation)', viz.width / 2, viz.height - 8);
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'In a survey, 200 students are classified by gender and whether they chose a math elective: 60 males chose it and 40 did not; 35 females chose it and 65 did not. Test whether gender and choosing math are independent (\\(\\alpha = 0.05\\)).',
                    hint: 'Construct a \\(2 \\times 2\\) contingency table, compute expected frequencies and the \\(\\chi^2\\) statistic. \\(\\chi^2_{0.05}(1) = 3.841\\).',
                    solution: 'Contingency table: Male (60, 40), Female (35, 65); row totals 100, 100; column totals 95, 105; n = 200. Expected frequencies: \\(E_{11} = 100 \\times 95/200 = 47.5\\), \\(E_{12} = 52.5\\), \\(E_{21} = 47.5\\), \\(E_{22} = 52.5\\). \\(\\chi^2 = \\frac{(60-47.5)^2}{47.5} + \\frac{(40-52.5)^2}{52.5} + \\frac{(35-47.5)^2}{47.5} + \\frac{(65-52.5)^2}{52.5} = 3.289 + 2.976 + 3.289 + 2.976 = 12.53\\). Degrees of freedom = 1. Since \\(12.53 > 3.841\\), we reject \\(H_0\\); gender and choosing math are significantly associated.'
                },
                {
                    question: 'Explain why the degrees of freedom in the \\(\\chi^2\\) test of independence are \\((r-1)(c-1)\\) rather than \\(rc - 1\\).',
                    hint: 'Consider how many cells can vary freely when the marginals are fixed.',
                    solution: 'The contingency table has \\(rc\\) cells. First, the total sample size n being fixed means there is 1 constraint. Under \\(H_0\\), we estimate \\(r-1\\) independent row marginal probabilities and \\(c-1\\) independent column marginal probabilities (a total of \\(r+c-2\\) parameters). The total number of parameters is \\(rc - 1\\) (since probabilities sum to 1), minus the \\((r-1)+(c-1)\\) estimated parameters, giving \\(rc - 1 - (r-1) - (c-1) = rc - r - c + 1 = (r-1)(c-1)\\). Equivalently: with row and column totals fixed, one only needs to fill in the upper-left \\((r-1) \\times (c-1)\\) cells, and the rest are uniquely determined by the marginal totals.'
                },
                {
                    question: 'Under what circumstances should Fisher\'s exact test be used instead of the \\(\\chi^2\\) test of independence? Give the decision criteria.',
                    hint: 'Consider the magnitude of expected frequencies.',
                    solution: 'When the contingency table has cells with expected frequencies \\(E_{ij} < 5\\), the \\(\\chi^2\\) asymptotic approximation is unreliable, and Fisher\'s exact test should be used. Specific criteria: (1) For a \\(2 \\times 2\\) table, if any expected frequency < 5 or the total sample size < 20, use Fisher\'s test; (2) For larger tables, if more than 20% of cells have expected frequencies < 5, or any expected frequency < 1, consider merging categories or using the exact test. Fisher\'s test gives an exact p-value based on the hypergeometric distribution, without relying on large-sample approximations.'
                }
            ]
        },

        // ============================================================
        // SECTION 5: One-Way Analysis of Variance
        // ============================================================
        {
            id: 'ch11-sec05',
            title: 'One-Way Analysis of Variance',
            content: `
 <h2>One-Way Analysis of Variance (One-Way ANOVA)</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
 <p>The two-sample t-test compares the means of two groups. When there are \\(k \\geq 3\\) groups, we need to simultaneously compare whether all group means are equal. Performing pairwise t-tests leads to the multiple comparisons problem, where the overall Type I error rate is inflated. Analysis of Variance (ANOVA) decomposes the total variability in the data into between-group and within-group components and uses a single F-test to simultaneously compare all group means.</p>
                    </div>
                </div>

 <h3>Model Specification </h3>

                <p>Suppose there are \\(k\\) groups, with the \\(i\\)-th group having \\(n_i\\) observations:</p>
                \\[X_{ij} = \\mu_i + \\varepsilon_{ij}, \\quad \\varepsilon_{ij} \\overset{\\text{iid}}{\\sim} N(0, \\sigma^2), \\quad j = 1,\\ldots,n_i, \\; i = 1,\\ldots,k\\]

 <p>Equivalently, we write \\(X_{ij} = \\mu + \\alpha_i + \\varepsilon_{ij}\\), where \\(\\mu\\) is the grand mean and \\(\\alpha_i = \\mu_i - \\mu\\) is the effect of group \\(i\\) (\\(i\\)).</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.22 (ANOVA Hypothesis Test)</div>
                    <div class="env-body">
                        <p>The testing problem is</p>
                        \\[H_0: \\mu_1 = \\mu_2 = \\cdots = \\mu_k \\quad \\text{vs} \\quad H_1: \\exists\\, i \\ne j,\\; \\mu_i \\ne \\mu_j\\]
                    </div>
                </div>

 <h3>Sum of Squares Decomposition </h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.23 (Sum of Squares Decomposition)</div>
                    <div class="env-body">
                        <p>Let \\(\\bar{X}_{i\\cdot} = \\frac{1}{n_i}\\sum_j X_{ij}\\) be the group \\(i\\) mean, and \\(\\bar{X}_{\\cdot\\cdot} = \\frac{1}{N}\\sum_i\\sum_j X_{ij}\\) be the grand mean (\\(N = \\sum n_i\\)). The total sum of squares decomposes as</p>
                        \\[\\underbrace{\\sum_{i=1}^{k}\\sum_{j=1}^{n_i}(X_{ij} - \\bar{X}_{\\cdot\\cdot})^2}_{\\text{SST}} = \\underbrace{\\sum_{i=1}^{k} n_i(\\bar{X}_{i\\cdot} - \\bar{X}_{\\cdot\\cdot})^2}_{\\text{SSB}} + \\underbrace{\\sum_{i=1}^{k}\\sum_{j=1}^{n_i}(X_{ij} - \\bar{X}_{i\\cdot})^2}_{\\text{SSW}}\\]
 <p>where SST = Total Sum of Squares, SSB = Between-group Sum of Squares, SSW = Within-group Sum of Squares.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Expand \\((X_{ij} - \\bar{X}_{\\cdot\\cdot})^2 = [(X_{ij} - \\bar{X}_{i\\cdot}) + (\\bar{X}_{i\\cdot} - \\bar{X}_{\\cdot\\cdot})]^2\\). Summing over all \\(i,j\\), the cross term is</p>
                        \\[2\\sum_i \\sum_j (X_{ij} - \\bar{X}_{i\\cdot})(\\bar{X}_{i\\cdot} - \\bar{X}_{\\cdot\\cdot}) = 2\\sum_i (\\bar{X}_{i\\cdot} - \\bar{X}_{\\cdot\\cdot}) \\underbrace{\\sum_j (X_{ij} - \\bar{X}_{i\\cdot})}_{= 0} = 0\\]
                        <p>Therefore SST = SSB + SSW.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

 <h3>F-Statistic and the ANOVA Table (FANOVA)</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.24 (Mean Squares and F-Statistic)</div>
                    <div class="env-body">
 <p>The between-group mean square and within-group mean square are</p>
                        \\[\\text{MSB} = \\frac{\\text{SSB}}{k-1}, \\qquad \\text{MSW} = \\frac{\\text{SSW}}{N-k}\\]
                        <p>The F-statistic is</p>
                        \\[F = \\frac{\\text{MSB}}{\\text{MSW}}\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 11.25 (ANOVA F-Test)</div>
                    <div class="env-body">
 <p>Under the normality and equal variance assumptions:</p>
                        <ol>
                            <li>\\(\\text{SSW}/\\sigma^2 \\sim \\chi^2(N-k)\\), independent of \\(\\text{SSB}\\)</li>
                            <li>Under \\(H_0\\), \\(\\text{SSB}/\\sigma^2 \\sim \\chi^2(k-1)\\)</li>
                            <li>Therefore under \\(H_0\\), \\(F = \\frac{\\text{MSB}}{\\text{MSW}} \\sim F(k-1, N-k)\\)</li>
                        </ol>
                        <p>We reject \\(H_0\\) when \\(F > F_{\\alpha}(k-1, N-k)\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 11.26 (ANOVA Table)</div>
                    <div class="env-body">
                        <table style="margin: 10px auto; border-collapse: collapse; font-size: 0.95em;">
                            <tr style="border-bottom: 2px solid #30363d;">
                                <td style="padding: 6px 15px; font-weight:bold;">Source</td>
                                <td style="padding: 6px 15px; font-weight:bold;">SS</td>
                                <td style="padding: 6px 15px; font-weight:bold;">df</td>
                                <td style="padding: 6px 15px; font-weight:bold;">MS</td>
                                <td style="padding: 6px 15px; font-weight:bold;">F</td>
                            </tr>
                            <tr><td style="padding: 6px 15px;">Between</td><td style="padding: 6px 15px;">SSB</td><td style="padding: 6px 15px;">k-1</td><td style="padding: 6px 15px;">MSB = SSB/(k-1)</td><td style="padding: 6px 15px;">MSB/MSW</td></tr>
                            <tr><td style="padding: 6px 15px;">Within</td><td style="padding: 6px 15px;">SSW</td><td style="padding: 6px 15px;">N-k</td><td style="padding: 6px 15px;">MSW = SSW/(N-k)</td><td style="padding: 6px 15px;"></td></tr>
                            <tr style="border-top: 1px solid #30363d;"><td style="padding: 6px 15px;">Total</td><td style="padding: 6px 15px;">SST</td><td style="padding: 6px 15px;">N-1</td><td style="padding: 6px 15px;"></td><td style="padding: 6px 15px;"></td></tr>
                        </table>
                    </div>
                </div>

 <h3>Post Hoc Multiple Comparisons </h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 11.27 (Post Hoc Tests)</div>
                    <div class="env-body">
                        <p>After ANOVA rejects \\(H_0\\), one needs to further determine which groups differ. Common methods include:</p>
                        <ul>
 <li><strong>Tukey HSD</strong>: Based on the studentized range distribution, it controls the familywise error rate (FWER) for all pairwise comparisons. The comparison statistic for groups \\(i\\) and \\(j\\) is \\(q = \\frac{\\bar{X}_{i\\cdot} - \\bar{X}_{j\\cdot}}{\\sqrt{\\text{MSW}/n}}\\) (for equal group sizes).</li>
                            <li><strong>Bonferroni correction</strong>: Uses \\(\\alpha/\\binom{k}{2}\\) as the significance level for each pairwise comparison. Simple but conservative.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
 <p>The three key assumptions of ANOVA: (1) independence across groups, (2) normality, (3) homoscedasticity (equal variances). In practice, one should first check the equal variance assumption using Bartlett's or Levene's test. When equal variances do not hold, Welch's ANOVA (a corrected method that does not assume equal variances) can be used.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>ANOVA has a deep connection with linear regression: one-way ANOVA is equivalent to linear regression with \\(k-1\\) dummy variables, and the F-statistic is the overall F-test of the regression. This connection will be further developed in Chapter 12 on linear regression.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="anova-viz"></div>
            `,
            visualizations: [
                {
                    id: 'anova-viz',
 title:'Interactive: One-Way ANOVA Visualization (ANOVA)',
                    description: 'Drag group means to observe how the F-statistic and SSB',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 420, scale: 30,
                            originX: 80, originY: 320
                        });

                        var nGroups = 3;
                        var nPerGroup = 15;
                        var groupMeans = [2, 3.5, 5];
                        var sigma = 1.2;
                        var groups = [];

                        function generateData() {
                            groups = [];
                            for (var g = 0; g < nGroups; g++) {
                                var data = VizEngine.sampleArray(function() {
                                    return VizEngine.randomNormal(groupMeans[g], sigma);
                                }, nPerGroup);
                                groups.push(data);
                            }
                        }

                        generateData();

                        var drag0 = viz.addDraggable('m0', 2, 6, viz.colors.blue, 8, function(x, y) {
                            groupMeans[0] = Math.round(y * 10) / 10;
                            drag0.x = 2; drag0.y = groupMeans[0];
                            generateData(); draw();
                        });
                        var drag1 = viz.addDraggable('m1', 6, 6, viz.colors.orange, 8, function(x, y) {
                            groupMeans[1] = Math.round(y * 10) / 10;
                            drag1.x = 6; drag1.y = groupMeans[1];
                            generateData(); draw();
                        });
                        var drag2 = viz.addDraggable('m2', 10, 6, viz.colors.green, 8, function(x, y) {
                            groupMeans[2] = Math.round(y * 10) / 10;
                            drag2.x = 10; drag2.y = groupMeans[2];
                            generateData(); draw();
                        });

                        VizEngine.createSlider(controls, 'sigma', 0.3, 3.0, 1.2, 0.1, function(v) {
                            sigma = v; generateData(); draw();
                        });
                        VizEngine.createButton(controls, 'Re-sample', function() {
                            generateData(); draw();
                        });
                        VizEngine.createButton(controls, 'Equal means', function() {
                            groupMeans = [3.5, 3.5, 3.5];
                            drag0.y = 3.5; drag1.y = 3.5; drag2.y = 3.5;
                            generateData(); draw();
                        });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            var colors = [viz.colors.blue, viz.colors.orange, viz.colors.green];
                            var N = nGroups * nPerGroup;

                            // Compute grand mean
                            var allData = [];
                            for (var g = 0; g < nGroups; g++) {
                                for (var j = 0; j < groups[g].length; j++) {
                                    allData.push(groups[g][j]);
                                }
                            }
                            var grandMean = VizEngine.mean(allData);

                            // Compute SSB, SSW
                            var ssb = 0, ssw = 0;
                            var groupMeansObs = [];
                            for (var g = 0; g < nGroups; g++) {
                                var gm = VizEngine.mean(groups[g]);
                                groupMeansObs.push(gm);
                                ssb += groups[g].length * (gm - grandMean) * (gm - grandMean);
                                for (var j = 0; j < groups[g].length; j++) {
                                    ssw += (groups[g][j] - gm) * (groups[g][j] - gm);
                                }
                            }
                            var sst = ssb + ssw;
                            var msb = ssb / (nGroups - 1);
                            var msw = ssw / (N - nGroups);
                            var fStat = msb / msw;

                            // Draw data points as strip chart
                            var groupX = [2, 6, 10];
                            var yMin = -1, yMax = 9;

                            // Y axis
                            viz.drawSegment(0.5, yMin, 0.5, yMax, viz.colors.axis, 1);
                            for (var y = 0; y <= 8; y++) {
                                viz.drawSegment(0.3, y, 0.5, y, viz.colors.axis, 1);
                                viz.drawText(String(y), 0, y, viz.colors.text, 10);
                            }

                            // Grand mean line
                            viz.drawSegment(0.5, grandMean, 12, grandMean, viz.colors.text + '44', 1, true);
                            viz.drawText('Grand mean=' + grandMean.toFixed(2), 12.5, grandMean, viz.colors.text, 9, 'left');

                            // Draw each group
                            for (var g = 0; g < nGroups; g++) {
                                var gx = groupX[g];
                                var gm = groupMeansObs[g];

                                // Group mean line
                                viz.drawSegment(gx - 0.8, gm, gx + 0.8, gm, colors[g], 2);

                                // Data points with jitter
                                for (var j = 0; j < groups[g].length; j++) {
                                    var jitter = (Math.random() - 0.5) * 1.2;
                                    viz.drawPoint(gx + jitter, groups[g][j], colors[g] + '88', null, 3);
                                }

                                // Group label
                                viz.drawText('Group ' + (g + 1), gx, yMin - 0.5, colors[g], 11);
                                viz.drawText('mean=' + gm.toFixed(2), gx, yMin - 1.0, colors[g], 9);

                                // SSB bracket (group mean to grand mean)
                                viz.drawSegment(gx + 1.0, gm, gx + 1.0, grandMean, viz.colors.yellow + '66', 1.5);
                            }

                            // Update draggable positions
                            drag0.y = groupMeans[0];
                            drag1.y = groupMeans[1];
                            drag2.y = groupMeans[2];
                            viz.drawDraggables();

                            // Statistics panel
                            viz.screenText('ANOVA Results', viz.width / 2, 15, viz.colors.white, 14, 'center');
                            var panelY = 32;
                            viz.screenText('SSB = ' + ssb.toFixed(2) + ' (df=' + (nGroups - 1) + ')', 20, panelY, viz.colors.yellow, 11, 'left');
                            viz.screenText('SSW = ' + ssw.toFixed(2) + ' (df=' + (N - nGroups) + ')', 20, panelY + 16, viz.colors.teal, 11, 'left');
                            viz.screenText('SST = ' + sst.toFixed(2) + ' (df=' + (N - 1) + ')', 20, panelY + 32, viz.colors.text, 11, 'left');

                            viz.screenText('MSB = ' + msb.toFixed(2), 300, panelY, viz.colors.yellow, 11, 'left');
                            viz.screenText('MSW = ' + msw.toFixed(2), 300, panelY + 16, viz.colors.teal, 11, 'left');
                            viz.screenText('F = ' + fStat.toFixed(3), 300, panelY + 32, viz.colors.white, 13, 'left');

                            // Simple critical value lookup for F(2, N-3) at alpha=0.05
                            // F_0.05(2, 42) ~ 3.22
                            var fCrit = 3.22;
                            var reject = fStat > fCrit;
                            viz.screenText(
                                'F = ' + fStat.toFixed(2) + (reject ? ' > ' : ' < ') + fCrit.toFixed(2) + ' (crit, alpha=0.05)',
                                viz.width / 2, panelY + 55,
                                reject ? viz.colors.red : viz.colors.green, 12, 'center'
                            );
                            viz.screenText(
                                reject ? 'Reject H0: means are not all equal' : 'Fail to reject H0',
                                viz.width / 2, panelY + 72,
                                reject ? viz.colors.red : viz.colors.green, 11, 'center'
                            );

                            // SSB / SST ratio (eta-squared)
                            var eta2 = ssb / sst;
                            viz.screenText('eta-squared (SSB/SST) = ' + eta2.toFixed(3), viz.width / 2, viz.height - 10, viz.colors.purple, 11, 'center');
                        }

                        viz.animate(function() { draw(); });
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Three groups of data: Group A (5, 7, 6, 8), Group B (9, 11, 10, 12), Group C (6, 8, 7, 9). Compute SSB, SSW, SST, and construct the ANOVA table. At \\(\\alpha = 0.05\\), test whether the means are equal.',
                    hint: 'First compute the group means and the grand mean. \\(F_{0.05}(2, 9) \\approx 4.26\\).',
                    solution: 'Group means: \\(\\bar{X}_A = 6.5\\), \\(\\bar{X}_B = 10.5\\), \\(\\bar{X}_C = 7.5\\). Grand mean \\(\\bar{X} = (26+42+30)/12 = 8.167\\). SSB = \\(4(6.5-8.167)^2 + 4(10.5-8.167)^2 + 4(7.5-8.167)^2 = 4(2.779+5.443+0.445) = 34.67\\). SSW = \\(\\sum_A(X-6.5)^2 + \\sum_B(X-10.5)^2 + \\sum_C(X-7.5)^2 = (2.25+0.25+0.25+2.25)+(2.25+0.25+0.25+2.25)+(2.25+0.25+0.25+2.25) = 15.00\\). SST = 34.67+15.00 = 49.67. MSB = 34.67/2 = 17.33, MSW = 15.00/9 = 1.667. F = 17.33/1.667 = 10.40 > 4.26. We reject \\(H_0\\); the means are significantly different.'
                },
                {
                    question: 'Explain why pairwise t-tests cannot replace ANOVA for simultaneously comparing \\(k\\) group means.',
                    hint: 'Consider the multiple comparisons problem.',
                    solution: 'With \\(k\\) groups, there are \\(\\binom{k}{2}\\) pairwise comparisons. If each test uses significance level \\(\\alpha = 0.05\\), the probability of committing at least one Type I error is approximately \\(1 - (1-\\alpha)^{\\binom{k}{2}}\\). For example, with \\(k=5\\) there are 10 comparisons, and the overall Type I error rate is approximately \\(1 - 0.95^{10} \\approx 0.40\\), far exceeding the nominal level 0.05. ANOVA controls the overall Type I error rate at \\(\\alpha\\) with a single global F-test. Only after ANOVA rejects \\(H_0\\) does one use post hoc tests with multiple comparison corrections (Tukey, Bonferroni, etc.) to determine which specific groups differ.'
                },
                {
                    question: 'Prove that when \\(k=2\\), the ANOVA F-statistic equals the square of the two-sample t-statistic: \\(F = T^2\\).',
                    hint: 'Set \\(k=2\\) and expand the expressions for SSB and MSW.',
                    solution: 'When \\(k=2\\), SSB = \\(n_1(\\bar{X}_1 - \\bar{X})^2 + n_2(\\bar{X}_2 - \\bar{X})^2\\). The grand mean is \\(\\bar{X} = (n_1\\bar{X}_1+n_2\\bar{X}_2)/N\\). After algebraic simplification, SSB = \\(\\frac{n_1 n_2}{N}(\\bar{X}_1 - \\bar{X}_2)^2\\). MSB = SSB/1 = SSB. MSW = SSW/(N-2) = \\(S_p^2\\). Therefore \\(F = \\frac{n_1 n_2(\\bar{X}_1-\\bar{X}_2)^2}{N S_p^2} = \\left(\\frac{\\bar{X}_1-\\bar{X}_2}{S_p\\sqrt{1/n_1+1/n_2}}\\right)^2 = T^2\\), since \\(\\frac{n_1 n_2}{N} = \\frac{1}{1/n_1+1/n_2}\\). This shows that the two-sample t-test is a special case of ANOVA when \\(k=2\\), and \\(F(1,\\nu) = t^2(\\nu)\\).'
                }
            ]
        }
    ]
});

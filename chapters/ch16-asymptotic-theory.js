window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch16',
    number: 16,
    title: 'Asymptotic Theory',
    subtitle: 'Asymptotic Theory',
    sections: [
        // ============================================================
        // SECTION 1: Consistency
        // ============================================================
        {
            id: 'ch16-sec01',
            title: 'Consistency',
            content: `
 <h2>Consistency</h2>

 <p>Asymptotic theory studies the behavior of statistical inference as the sample size \\(n \\to \\infty\\). This chapter is one of the core chapters of the entire mathematical statistics course: we will rigorously prove the asymptotic normality of the maximum likelihood estimator (MLE) — a result that serves as the cornerstone of modern statistical inference.</p>

 <p>We begin with the most fundamental large-sample property — <strong>consistency </strong>.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.1 (Consistent Estimator)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, X_2, \\ldots\\) be a random sample from \\(P_\\theta\\), and let \\(\\hat{\\theta}_n = \\hat{\\theta}_n(X_1, \\ldots, X_n)\\) be a sequence of estimators for the parameter \\(\\theta\\). If for all \\(\\theta \\in \\Theta\\),</p>
                        \\[\\hat{\\theta}_n \\xrightarrow{P} \\theta, \\quad \\text{i.e.} \\quad \\forall \\varepsilon > 0, \\quad \\lim_{n \\to \\infty} P_\\theta\\bigl(|\\hat{\\theta}_n - \\theta| > \\varepsilon\\bigr) = 0,\\]
 <p>then \\(\\hat{\\theta}_n\\) is called a <strong>consistent estimator</strong> of \\(\\theta\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Consistency is the minimum requirement for an estimator: when the amount of data is sufficiently large, the estimator should "converge" to the true parameter value. An inconsistent estimator cannot "find" the true parameter even with infinitely many data — this is clearly unacceptable.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.2 (Sufficient Conditions for Consistency)</div>
                    <div class="env-body">
                        <p>If the estimator sequence \\(\\hat{\\theta}_n\\) satisfies:</p>
                        <p>(1) \\(\\lim_{n \\to \\infty} \\operatorname{Bias}(\\hat{\\theta}_n) = \\lim_{n \\to \\infty} [E_\\theta(\\hat{\\theta}_n) - \\theta] = 0\\);</p>
                        <p>(2) \\(\\lim_{n \\to \\infty} \\operatorname{Var}_\\theta(\\hat{\\theta}_n) = 0\\).</p>
                        <p>Then \\(\\hat{\\theta}_n\\) is a consistent estimator of \\(\\theta\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By Chebyshev's inequality, for any \\(\\varepsilon > 0\\):</p>
                        \\[P_\\theta(|\\hat{\\theta}_n - \\theta| > \\varepsilon) = P_\\theta(|\\hat{\\theta}_n - E(\\hat{\\theta}_n) + E(\\hat{\\theta}_n) - \\theta| > \\varepsilon).\\]
                        <p>Let \\(b_n = E(\\hat{\\theta}_n) - \\theta\\) be the bias. When \\(n\\) is sufficiently large, \\(|b_n| < \\varepsilon/2\\), so:</p>
                        \\[P_\\theta(|\\hat{\\theta}_n - \\theta| > \\varepsilon) \\le P_\\theta(|\\hat{\\theta}_n - E(\\hat{\\theta}_n)| > \\varepsilon/2) \\le \\frac{\\operatorname{Var}(\\hat{\\theta}_n)}{(\\varepsilon/2)^2} = \\frac{4\\operatorname{Var}(\\hat{\\theta}_n)}{\\varepsilon^2} \\to 0.\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.3 (Consistency of the Sample Mean)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} (\\mu, \\sigma^2)\\). Then \\(\\bar{X}_n = \\frac{1}{n}\\sum_{i=1}^n X_i\\) is a consistent estimator of \\(\\mu\\).</p>
                        <p>Verification: \\(E(\\bar{X}_n) = \\mu\\) (unbiased), \\(\\operatorname{Var}(\\bar{X}_n) = \\sigma^2/n \\to 0\\). The result follows from Theorem 16.2.</p>
                        <p>In fact, the law of large numbers gives an even stronger conclusion: \\(\\bar{X}_n \\xrightarrow{\\text{a.s.}} \\mu\\).</p>
                    </div>
                </div>

 <h3>Consistency of MLE MLE</h3>

                <p>Under what conditions is the maximum likelihood estimator consistent? The following theorem provides the classical answer. The core idea is: the MLE maximizes the log-likelihood function \\(\\ell_n(\\theta)\\), and \\(\\ell_n(\\theta)/n\\) converges in large samples to the negative of the KL divergence, which achieves its unique maximum at the true parameter.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.4 (Kullback-Leibler Divergence)</div>
                    <div class="env-body">
 <p>Let \\(f\\) and \\(g\\) be two density functions. The KL divergence (KL) from \\(f\\) to \\(g\\) is defined as:</p>
                        \\[D_{\\text{KL}}(f \\| g) = E_f\\left[\\log \\frac{f(X)}{g(X)}\\right] = \\int f(x) \\log \\frac{f(x)}{g(x)} \\, dx.\\]
                        <p>The KL divergence satisfies \\(D_{\\text{KL}}(f \\| g) \\ge 0\\), with equality if and only if \\(f = g\\) a.e. (Gibbs' inequality).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.5 (Consistency of MLE)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} f(x; \\theta_0)\\), where \\(\\theta_0 \\in \\Theta\\) is the true parameter. If the following conditions hold:</p>
 <p>(R1) <strong>Identifiability </strong>: \\(\\theta \\ne \\theta'\\) implies \\(f(\\cdot; \\theta) \\ne f(\\cdot; \\theta')\\);</p>
 <p>(R2) The parameter space \\(\\Theta\\) is compact;</p>
                        <p>(R3) \\(\\log f(x; \\theta)\\) is continuous in \\(\\theta\\);</p>
                        <p>(R4) \\(E_{\\theta_0}[\\sup_{\\theta \\in \\Theta} |\\log f(X; \\theta)|] < \\infty\\).</p>
                        <p>Then the MLE satisfies \\(\\hat{\\theta}_n \\xrightarrow{P} \\theta_0\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p>Let \\(M_n(\\theta) = \\frac{1}{n} \\ell_n(\\theta) = \\frac{1}{n} \\sum_{i=1}^n \\log f(X_i; \\theta)\\) be the normalized log-likelihood. The MLE satisfies \\(\\hat{\\theta}_n = \\arg\\max_{\\theta} M_n(\\theta)\\).</p>
                        <p><strong>Step 1.</strong> By the law of large numbers, for each \\(\\theta\\):</p>
                        \\[M_n(\\theta) \\xrightarrow{P} M(\\theta) := E_{\\theta_0}[\\log f(X; \\theta)].\\]
                        <p>Under conditions (R2)-(R4), the convergence is uniform in \\(\\theta\\) (uniform law of large numbers): \\(\\sup_{\\theta} |M_n(\\theta) - M(\\theta)| \\xrightarrow{P} 0\\).</p>
                        <p><strong>Step 2.</strong> The function \\(M(\\theta)\\) achieves its unique maximum at \\(\\theta_0\\). This is because:</p>
                        \\[M(\\theta_0) - M(\\theta) = E_{\\theta_0}\\left[\\log \\frac{f(X; \\theta_0)}{f(X; \\theta)}\\right] = D_{\\text{KL}}(f_{\\theta_0} \\| f_\\theta) \\ge 0,\\]
                        <p>with equality if and only if \\(f_\\theta = f_{\\theta_0}\\) a.e., which by identifiability (R1) implies \\(\\theta = \\theta_0\\).</p>
                        <p><strong>Step 3.</strong> By the general theory of \\(M\\)-estimators, uniform convergence plus a unique maximizer of the limit function imply \\(\\hat{\\theta}_n \\xrightarrow{P} \\theta_0\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The compactness condition (R2) can be relaxed. Wald gave a version that replaces compactness with "an open set containing \\(\\theta_0\\)"; for non-compact parameter spaces, tail conditions are usually needed to rule out the possibility that the estimator "escapes to infinity."</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="consistency-animation"></div>
            `,
            visualizations: [
                {
                    id: 'consistency-animation',
                    title: 'Interactive: Consistency Animation — Estimator Distribution Concentrates as n Grows',
                    description: 'Observe how the distribution of the MLE concentrates around the true parameter value \u03B8\u2080 as the sample size n increases',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380,
                            originX: 280, originY: 300,
                            scale: 70
                        });

                        var theta0 = 2.0;
                        var nValues = [5, 10, 25, 50, 100, 500];
                        var currentIdx = 2;
                        var samples = [];

                        function generateSamples(n, nSims) {
                            var results = [];
                            for (var s = 0; s < nSims; s++) {
                                var data = VizEngine.sampleArray(function() {
                                    return VizEngine.randomExponential(1.0 / theta0);
                                }, n);
                                var mle = VizEngine.mean(data);
                                results.push(mle);
                            }
                            return results;
                        }

                        function draw() {
                            var n = nValues[currentIdx];
                            samples = generateSamples(n, 2000);

                            viz.clear();

                            var xMin = 0;
                            var xMax = 5.5;
                            var nBins = 40;
                            var binW = (xMax - xMin) / nBins;
                            var counts = new Array(nBins).fill(0);
                            for (var i = 0; i < samples.length; i++) {
                                var idx = Math.floor((samples[i] - xMin) / binW);
                                if (idx >= 0 && idx < nBins) counts[idx]++;
                            }
                            var maxCount = Math.max.apply(null, counts);
                            var maxH = 3.5;

                            var bins = [];
                            for (var i = 0; i < nBins; i++) {
                                bins.push({
                                    x: xMin + i * binW,
                                    width: binW,
                                    height: (counts[i] / maxCount) * maxH
                                });
                            }
                            viz.drawHistogram(bins, viz.colors.blue + '55', viz.colors.blue, 1);

                            viz.drawSegment(theta0, 0, theta0, maxH + 0.3, viz.colors.red, 2.5, true);
                            viz.drawText('\u03B8\u2080 = ' + theta0.toFixed(1), theta0, maxH + 0.5, viz.colors.red, 14);

                            var sampleMean = VizEngine.mean(samples);
                            var sampleStd = Math.sqrt(VizEngine.variance(samples));
                            viz.drawSegment(sampleMean, 0, sampleMean, maxH * 0.5, viz.colors.yellow, 2);

                            viz.drawSegment(xMin, 0, xMax, 0, viz.colors.axis, 1);
                            for (var x = 0; x <= 5; x++) {
                                var sx = viz.toScreen(x, 0);
                                viz.ctx.fillStyle = viz.colors.text;
                                viz.ctx.font = '11px -apple-system,sans-serif';
                                viz.ctx.textAlign = 'center';
                                viz.ctx.textBaseline = 'top';
                                viz.ctx.fillText(x.toString(), sx[0], sx[1] + 4);
                            }

                            viz.screenText('n = ' + n, 90, 30, viz.colors.white, 18, 'center');
                            viz.screenText('2000 simulations of Exp(\u03B8\u2080) MLE', 280, 30, viz.colors.text, 12, 'center');
                            viz.screenText('Mean = ' + sampleMean.toFixed(3) + ', SD = ' + sampleStd.toFixed(3), 280, 50, viz.colors.teal, 12, 'center');
                        }

                        // Slider: sample size index
                        var nSlider = VizEngine.createSlider(controls, 'n index', 0, nValues.length - 1, currentIdx, 1, function(v) {
                            currentIdx = Math.round(v);
                            draw();
                        });

                        var nLabel = document.createElement('span');
                        nLabel.style.cssText = 'color:#8b949e;font-size:0.8rem;margin-left:8px;';
                        nLabel.textContent = 'n = [5, 10, 25, 50, 100, 500]';
                        controls.appendChild(nLabel);

                        VizEngine.createButton(controls, 'Resample', function() { draw(); });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Uniform}(0, \\theta)\\). Prove that \\(X_{(n)} = \\max_i X_i\\) is a consistent estimator of \\(\\theta\\).',
                    hint: 'Compute \\(P(|X_{(n)} - \\theta| > \\varepsilon)\\). Note that \\(X_{(n)} \\le \\theta\\), so \\(P(\\theta - X_{(n)} > \\varepsilon) = P(X_{(n)} < \\theta - \\varepsilon)\\).',
                    solution: 'Since \\(X_{(n)} \\le \\theta\\) a.s., we have \\(P(|X_{(n)} - \\theta| > \\varepsilon) = P(X_{(n)} < \\theta - \\varepsilon)\\). When \\(\\varepsilon < \\theta\\), \\(P(X_{(n)} < \\theta - \\varepsilon) = \\left(\\frac{\\theta - \\varepsilon}{\\theta}\\right)^n = \\left(1 - \\frac{\\varepsilon}{\\theta}\\right)^n \\to 0\\). When \\(\\varepsilon \\ge \\theta\\), the probability is trivially 0. Therefore \\(X_{(n)} \\xrightarrow{P} \\theta\\).'
                },
                {
                    question: 'Give an example of an unbiased but inconsistent estimator.',
                    hint: 'Consider an estimator that uses only the first observation \\(X_1\\).',
                    solution: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\), and take \\(\\hat{\\mu}_n = X_1\\). Then \\(E(\\hat{\\mu}_n) = \\mu\\) (unbiased), but \\(\\operatorname{Var}(\\hat{\\mu}_n) = \\sigma^2\\) does not tend to 0 as \\(n \\to \\infty\\). Therefore for any \\(\\varepsilon < \\sigma\\), \\(P(|\\hat{\\mu}_n - \\mu| > \\varepsilon) = P(|Z| > \\varepsilon/\\sigma)\\) does not tend to 0, so \\(\\hat{\\mu}_n\\) is not consistent.'
                },
                {
                    question: 'Prove the non-negativity of KL divergence (Gibbs\\\' inequality): \\(D_{\\text{KL}}(f \\| g) \\ge 0\\), with equality if and only if \\(f = g\\) a.e.',
                    hint: 'Use Jensen\\\'s inequality and the strict convexity of \\(-\\log\\).',
                    solution: '\\(D_{\\text{KL}}(f \\| g) = E_f\\left[-\\log \\frac{g(X)}{f(X)}\\right] \\ge -\\log E_f\\left[\\frac{g(X)}{f(X)}\\right] = -\\log \\int g(x) \\, dx = -\\log 1 = 0\\). The first inequality uses Jensen\\\'s inequality (\\(-\\log\\) is strictly convex). Equality holds if and only if \\(g(X)/f(X)\\) is constant a.s., i.e., \\(f = g\\) a.e.'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Asymptotic Normality of MLE
        // ============================================================
        {
            id: 'ch16-sec02',
            title: 'Asymptotic Normality of MLE',
            content: `
 <h2>Asymptotic Normality of MLE MLE</h2>

 <p>This section contains the <strong>core theorem</strong> of the entire mathematical statistics course. We will give a complete proof that, under regularity conditions, the maximum likelihood estimator has an asymptotic normal distribution, and its asymptotic variance attains the Cram&eacute;r-Rao lower bound — that is, the MLE is asymptotically efficient.</p>

 <h3>Regularity Conditions</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.6 (Regularity Conditions)</div>
                    <div class="env-body">
 <p>Let \\(\\{f(x; \\theta) : \\theta \\in \\Theta\\}\\) be a parametric family, with \\(\\Theta \\subset \\mathbb{R}\\) an open interval. The following conditions are collectively called <strong>regularity conditions</strong>:</p>
 <p><strong>(R1) Identifiability :</strong> \\(\\theta \\ne \\theta'\\) implies \\(f(\\cdot; \\theta) \\ne f(\\cdot; \\theta')\\).</p>
 <p><strong>(R2) Common Support :</strong> The set \\(\\{x : f(x; \\theta)> 0\\}\\) does not depend on \\(\\theta\\).</p>
 <p><strong>(R3) Smoothness :</strong> \\(\\log f(x; \\theta)\\) is three times differentiable in \\(\\theta\\), and the third derivative is uniformly integrable in a neighborhood of \\(\\theta_0\\).</p>
 <p><strong>(R4) Fisher Information (Fisher):</strong></p>
                        \\[0 < I(\\theta_0) = E_{\\theta_0}\\left[\\left(\\frac{\\partial}{\\partial \\theta}\\log f(X; \\theta_0)\\right)^2\\right] = -E_{\\theta_0}\\left[\\frac{\\partial^2}{\\partial \\theta^2}\\log f(X; \\theta_0)\\right] < \\infty.\\]
                        <p><strong>(R5) MLE Existence and Consistency:</strong> There exists a consistent MLE sequence \\(\\hat{\\theta}_n \\xrightarrow{P} \\theta_0\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning: Regularity Conditions Are Indispensable</div>
                    <div class="env-body">
 <p>Condition (R2) excludes distributions such as \\(\\text{Uniform}(0, \\theta)\\) whose support depends on the parameter. For such distributions, the MLE exists but does not converge at the \\(\\sqrt{n}\\) rate — in fact \\(X_{(n)}\\) converges at rate \\(n\\) (i.e., \\(n(\\theta - X_{(n)}) \\to \\text{Exp}(1)\\)), which is an example of super-efficiency.</p>
                    </div>
                </div>

 <h3>Main Theorem: Asymptotic Normality of MLE</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.7 (Asymptotic Normality of MLE)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} f(x; \\theta_0)\\), and suppose the regularity conditions (R1)-(R5) hold. Then:</p>
                        \\[\\sqrt{n}\\bigl(\\hat{\\theta}_n - \\theta_0\\bigr) \\xrightarrow{d} N\\!\\left(0, \\frac{1}{I(\\theta_0)}\\right).\\]
                        <p>Equivalently, \\(\\hat{\\theta}_n\\) is approximately distributed as \\(N\\!\\left(\\theta_0, \\dfrac{1}{nI(\\theta_0)}\\right)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (complete)</div>
                    <div class="env-body">
                        <p>This is the most important proof in this course. We proceed in four steps.</p>

                        <p><strong>Notation.</strong> Let \\(\\ell_n(\\theta) = \\sum_{i=1}^n \\log f(X_i; \\theta)\\) be the log-likelihood function, and \\(\\ell_n'(\\theta), \\ell_n''(\\theta)\\) its first and second derivatives with respect to \\(\\theta\\).</p>

                        <p><strong>Step 1: Taylor expansion of the score function at the true parameter.</strong></p>
                        <p>The MLE \\(\\hat{\\theta}_n\\) satisfies the likelihood equation \\(\\ell_n'(\\hat{\\theta}_n) = 0\\) (first-order condition). Expanding \\(\\ell_n'(\\hat{\\theta}_n)\\) in a Taylor series around \\(\\theta_0\\):</p>
                        \\[0 = \\ell_n'(\\hat{\\theta}_n) = \\ell_n'(\\theta_0) + \\ell_n''(\\tilde{\\theta}_n)(\\hat{\\theta}_n - \\theta_0),\\]
                        <p>where \\(\\tilde{\\theta}_n\\) is some value between \\(\\hat{\\theta}_n\\) and \\(\\theta_0\\) (guaranteed to exist by the mean value theorem in the Taylor remainder).</p>

                        <p><strong>Step 2: Solve and standardize.</strong></p>
                        <p>Solving the above equation:</p>
                        \\[\\hat{\\theta}_n - \\theta_0 = -\\frac{\\ell_n'(\\theta_0)}{\\ell_n''(\\tilde{\\theta}_n)}.\\]
                        <p>Multiplying both sides by \\(\\sqrt{n}\\):</p>
                        \\[\\sqrt{n}(\\hat{\\theta}_n - \\theta_0) = -\\frac{\\ell_n'(\\theta_0)/\\sqrt{n}}{\\ell_n''(\\tilde{\\theta}_n)/n} = \\frac{\\frac{1}{\\sqrt{n}}\\ell_n'(\\theta_0)}{-\\frac{1}{n}\\ell_n''(\\tilde{\\theta}_n)}.\\]

                        <p><strong>Step 3: Analyze the numerator (CLT).</strong></p>
                        <p>The numerator is \\(\\frac{1}{\\sqrt{n}}\\ell_n'(\\theta_0) = \\frac{1}{\\sqrt{n}}\\sum_{i=1}^n \\frac{\\partial}{\\partial\\theta}\\log f(X_i; \\theta_0)\\).</p>
                        <p>Let \\(S_i = \\frac{\\partial}{\\partial\\theta}\\log f(X_i; \\theta_0)\\) (score). Then \\(S_1, S_2, \\ldots\\) are iid random variables satisfying:</p>
                        <p>(a) \\(E_{\\theta_0}[S_i] = 0\\) (the expected score is zero — a standard result under regularity conditions);</p>
                        <p>(b) \\(\\operatorname{Var}_{\\theta_0}(S_i) = I(\\theta_0)\\) (the definition of Fisher information).</p>
                        <p>By the <strong>Central Limit Theorem</strong>:</p>
                        \\[\\frac{1}{\\sqrt{n}}\\sum_{i=1}^n S_i = \\frac{1}{\\sqrt{n}}\\ell_n'(\\theta_0) \\xrightarrow{d} N(0, I(\\theta_0)). \\quad \\cdots (*)\\]

                        <p><strong>Step 4: Analyze the denominator (LLN).</strong></p>
                        <p>The denominator is \\(-\\frac{1}{n}\\ell_n''(\\tilde{\\theta}_n)\\). First consider \\(-\\frac{1}{n}\\ell_n''(\\theta_0) = -\\frac{1}{n}\\sum_{i=1}^n \\frac{\\partial^2}{\\partial\\theta^2}\\log f(X_i; \\theta_0)\\).</p>
                        <p>By the <strong>Law of Large Numbers</strong>:</p>
                        \\[-\\frac{1}{n}\\ell_n''(\\theta_0) \\xrightarrow{P} -E_{\\theta_0}\\left[\\frac{\\partial^2}{\\partial\\theta^2}\\log f(X; \\theta_0)\\right] = I(\\theta_0). \\quad \\cdots (**)\\]
                        <p>The last equality uses the second representation of Fisher information.</p>
                        <p>Since \\(\\hat{\\theta}_n \\xrightarrow{P} \\theta_0\\) (condition R5), and \\(\\tilde{\\theta}_n\\) lies between \\(\\hat{\\theta}_n\\) and \\(\\theta_0\\), we have \\(\\tilde{\\theta}_n \\xrightarrow{P} \\theta_0\\). Under the smoothness of regularity condition (R3) (uniformly bounded third derivative), we can replace \\(\\theta_0\\) in \\((**)\\) with \\(\\tilde{\\theta}_n\\):</p>
                        \\[-\\frac{1}{n}\\ell_n''(\\tilde{\\theta}_n) \\xrightarrow{P} I(\\theta_0). \\quad \\cdots (***)\\]

                        <p><strong>Combining Steps 3 & 4.</strong> By Slutsky's theorem, (*) and (***) together give:</p>
                        \\[\\sqrt{n}(\\hat{\\theta}_n - \\theta_0) = \\frac{\\frac{1}{\\sqrt{n}}\\ell_n'(\\theta_0)}{-\\frac{1}{n}\\ell_n''(\\tilde{\\theta}_n)} \\xrightarrow{d} \\frac{N(0, I(\\theta_0))}{I(\\theta_0)} = N\\!\\left(0, \\frac{I(\\theta_0)}{I(\\theta_0)^2}\\right) = N\\!\\left(0, \\frac{1}{I(\\theta_0)}\\right).\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition: Three Pillars of the Proof</div>
                    <div class="env-body">
                        <p>The structure of this proof is remarkably elegant, relying essentially on three tools:</p>
                        <p><strong>1. Taylor Expansion</strong>: Linearizes the nonlinear problem — it "translates" the MLE's first-order condition into a ratio of the score and the Hessian.</p>
                        <p><strong>2. Central Limit Theorem (CLT)</strong>: The score is an iid sum, and the CLT gives the limiting distribution of the numerator.</p>
                        <p><strong>3. Law of Large Numbers (LLN)</strong>: The Hessian is an iid average, and the LLN makes the denominator converge to the Fisher information.</p>
                        <p>Finally, Slutsky's theorem combines "numerator converges to normal" and "denominator converges to a constant."</p>
                    </div>
                </div>

 <h3>Asymptotic Efficiency</h3>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 16.8 (Asymptotic Efficiency of MLE)</div>
                    <div class="env-body">
 <p>Under regularity conditions, the asymptotic variance of the MLE is \\(1/[nI(\\theta_0)]\\), which is exactly the Cram&eacute;r-Rao lower bound. Therefore the MLE is <strong>asymptotically efficient</strong> : among all asymptotically normal regular estimators, the MLE has the smallest asymptotic variance.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.9 (Asymptotic Distribution of Bernoulli MLE)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Bernoulli}(p)\\).</p>
                        <p>MLE: \\(\\hat{p} = \\bar{X}\\). Fisher information: \\(I(p) = \\frac{1}{p(1-p)}\\).</p>
                        <p>By Theorem 16.7:</p>
                        \\[\\sqrt{n}(\\hat{p} - p) \\xrightarrow{d} N\\!\\left(0, p(1-p)\\right).\\]
                        <p>That is, \\(\\hat{p} \\approx N\\!\\left(p, \\dfrac{p(1-p)}{n}\\right)\\), which is precisely the familiar normal approximation for the binomial proportion.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.10 (Asymptotic Distribution of Poisson MLE)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Poisson}(\\lambda)\\).</p>
                        <p>MLE: \\(\\hat{\\lambda} = \\bar{X}\\). Fisher information: \\(I(\\lambda) = 1/\\lambda\\).</p>
                        <p>By Theorem 16.7:</p>
                        \\[\\sqrt{n}(\\hat{\\lambda} - \\lambda) \\xrightarrow{d} N(0, \\lambda).\\]
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="mle-asymptotic-normality"></div>
            `,
            visualizations: [
                {
                    id: 'mle-asymptotic-normality',
                    title: 'Interactive: MLE Asymptotic Normality — Distribution of \u221An(\u03B8\u0302 - \u03B8\u2080)',
                    description: 'Choose different distribution families and sample sizes n, and observe how the histogram of \u221An(\u03B8\u0302_MLE - \u03B8\u2080) converges to N(0, 1/I(\u03B8\u2080))',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 600, height: 400,
                            originX: 300, originY: 320,
                            scale: 55
                        });

                        var distributions = ['Bernoulli', 'Poisson', 'Exponential'];
                        var currentDist = 0;
                        var currentN = 30;
                        var nSims = 5000;

                        function fisherInfo(dist) {
                            if (dist === 0) return 1 / (0.3 * 0.7);
                            if (dist === 1) return 1 / 3.0;
                            return 1.0;
                        }

                        function trueParam(dist) {
                            if (dist === 0) return 0.3;
                            if (dist === 1) return 3.0;
                            return 1.0;
                        }

                        function simulate(dist, n) {
                            var theta0 = trueParam(dist);
                            var results = [];
                            for (var s = 0; s < nSims; s++) {
                                var mle;
                                if (dist === 0) {
                                    var sum = 0;
                                    for (var i = 0; i < n; i++) sum += (Math.random() < theta0) ? 1 : 0;
                                    mle = sum / n;
                                } else if (dist === 1) {
                                    var sum = 0;
                                    for (var i = 0; i < n; i++) {
                                        var L = Math.exp(-theta0);
                                        var k = 0;
                                        var p = 1;
                                        do { k++; p *= Math.random(); } while (p > L);
                                        sum += (k - 1);
                                    }
                                    mle = sum / n;
                                } else {
                                    var data = VizEngine.sampleArray(function() {
                                        return VizEngine.randomExponential(theta0);
                                    }, n);
                                    mle = VizEngine.mean(data);
                                }
                                results.push(Math.sqrt(n) * (mle - theta0));
                            }
                            return results;
                        }

                        function draw() {
                            var samples = simulate(currentDist, currentN);
                            var Itheta = fisherInfo(currentDist);
                            var asympVar = 1 / Itheta;

                            viz.clear();

                            var xMin = -5;
                            var xMax = 5;
                            var nBins = 50;
                            var binW = (xMax - xMin) / nBins;
                            var counts = new Array(nBins).fill(0);
                            for (var i = 0; i < samples.length; i++) {
                                var idx = Math.floor((samples[i] - xMin) / binW);
                                if (idx >= 0 && idx < nBins) counts[idx]++;
                            }
                            var maxDensity = 0;
                            var bins = [];
                            for (var i = 0; i < nBins; i++) {
                                var density = counts[i] / (nSims * binW);
                                if (density > maxDensity) maxDensity = density;
                                bins.push({
                                    x: xMin + i * binW,
                                    width: binW,
                                    height: density
                                });
                            }
                            viz.drawHistogram(bins, viz.colors.blue + '55', viz.colors.blue, 1);

                            var sigma = Math.sqrt(asympVar);
                            viz.drawFunction(function(x) {
                                return VizEngine.normalPDF(x, 0, sigma);
                            }, xMin, xMax, viz.colors.orange, 2.5);

                            viz.drawSegment(xMin, 0, xMax, 0, viz.colors.axis, 1);
                            for (var x = -4; x <= 4; x += 2) {
                                var sx = viz.toScreen(x, 0);
                                viz.ctx.fillStyle = viz.colors.text;
                                viz.ctx.font = '11px -apple-system,sans-serif';
                                viz.ctx.textAlign = 'center';
                                viz.ctx.textBaseline = 'top';
                                viz.ctx.fillText(x.toString(), sx[0], sx[1] + 4);
                            }

                            var theta0 = trueParam(currentDist);
                            viz.screenText(distributions[currentDist] + '(\u03B8\u2080 = ' + theta0 + '), n = ' + currentN, 300, 25, viz.colors.white, 15, 'center');
                            viz.screenText('\u221An(\u03B8\u0302 - \u03B8\u2080) histogram vs N(0, 1/I(\u03B8\u2080))', 300, 45, viz.colors.text, 12, 'center');
                            viz.screenText('I(\u03B8\u2080) = ' + Itheta.toFixed(3) + ', 1/I(\u03B8\u2080) = ' + asympVar.toFixed(3), 300, 63, viz.colors.teal, 11, 'center');

                            var empirVar = VizEngine.variance(samples);
                            viz.screenText('Empirical var = ' + empirVar.toFixed(3), 300, 80, viz.colors.yellow, 11, 'center');
                        }

                        var distBtns = document.createElement('div');
                        distBtns.style.cssText = 'display:flex;gap:6px;margin-bottom:4px;';
                        distributions.forEach(function(name, i) {
                            var btn = document.createElement('button');
                            btn.textContent = name;
                            btn.style.cssText = 'padding:3px 10px;border:1px solid #30363d;border-radius:4px;background:' + (i === 0 ? '#58a6ff33' : '#1a1a40') + ';color:#c9d1d9;font-size:0.75rem;cursor:pointer;';
                            btn.addEventListener('click', function() {
                                currentDist = i;
                                for (var j = 0; j < distBtns.children.length; j++) {
                                    distBtns.children[j].style.background = (j === i) ? '#58a6ff33' : '#1a1a40';
                                }
                                draw();
                            });
                            distBtns.appendChild(btn);
                        });
                        controls.appendChild(distBtns);

                        VizEngine.createSlider(controls, 'n', 5, 500, currentN, 5, function(v) {
                            currentN = Math.round(v);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Resample', function() { draw(); });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Exp}(\\lambda)\\) with density \\(f(x; \\lambda) = \\lambda e^{-\\lambda x}\\). Find the MLE and its asymptotic distribution.',
                    hint: 'First compute the Fisher information \\(I(\\lambda) = -E[\\ell\'\'(\\lambda)]\\), where \\(\\ell(\\lambda) = n\\log\\lambda - \\lambda \\sum X_i\\).',
                    solution: 'MLE: \\(\\hat{\\lambda} = 1/\\bar{X}\\). Score: \\(\\ell\'(\\lambda) = n/\\lambda - \\sum X_i\\). Second derivative: \\(\\ell\'\'(\\lambda) = -n/\\lambda^2\\). Fisher information: \\(I(\\lambda) = 1/\\lambda^2\\). By Theorem 16.7: \\(\\sqrt{n}(\\hat{\\lambda} - \\lambda) \\xrightarrow{d} N(0, \\lambda^2)\\).'
                },
                {
                    question: 'In the proof of asymptotic normality of the MLE, why is condition (R2) "common support" needed? Give a counterexample showing the conclusion fails when this condition is violated.',
                    hint: 'Consider the MLE for \\(\\text{Uniform}(0, \\theta)\\).',
                    solution: 'For \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Uniform}(0, \\theta)\\), the MLE is \\(\\hat{\\theta}_n = X_{(n)}\\). One can show that \\(n(\\theta - \\hat{\\theta}_n) \\xrightarrow{d} \\text{Exp}(1/\\theta)\\). The convergence rate is \\(n\\) rather than \\(\\sqrt{n}\\), and the limit distribution is exponential rather than normal. This is because the support \\([0, \\theta]\\) depends on the parameter, violating (R2), which causes the log-likelihood to be non-differentiable at the boundary.'
                },
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\) with \\(\\sigma^2\\) known. Verify that the exact distribution of the MLE \\(\\hat{\\mu} = \\bar{X}\\), namely \\(N(\\mu, \\sigma^2/n)\\), coincides exactly with its asymptotic distribution \\(N(\\mu, 1/(nI(\\mu)))\\).',
                    hint: 'Compute the Fisher information of the normal distribution with respect to \\(\\mu\\).',
                    solution: '\\(\\log f(x; \\mu) = -\\frac{1}{2}\\log(2\\pi\\sigma^2) - \\frac{(x-\\mu)^2}{2\\sigma^2}\\). \\(\\frac{\\partial}{\\partial\\mu}\\log f = \\frac{x-\\mu}{\\sigma^2}\\), \\(\\frac{\\partial^2}{\\partial\\mu^2}\\log f = -\\frac{1}{\\sigma^2}\\). Thus \\(I(\\mu) = 1/\\sigma^2\\). The asymptotic variance \\(1/(nI(\\mu)) = \\sigma^2/n\\), which is exactly the exact variance. The normal distribution is one of the rare cases where the asymptotic approximation coincides exactly with the exact distribution.'
                }
            ]
        },

        // ============================================================
        // SECTION 3: The Delta Method
        // ============================================================
        {
            id: 'ch16-sec03',
            title: 'The Delta Method',
            content: `
 <h2>The Delta Method Delta</h2>

 <p>The asymptotic normality of the MLE tells us that \\(\\hat{\\theta}_n\\) is approximately normally distributed. However, in practice we often care about some <strong>transformation</strong> \\(g(\\theta)\\) of the parameter — for example, having estimated \\(\\lambda\\), we may want the asymptotic distribution of \\(1/\\lambda\\) (the mean) or \\(\\log\\lambda\\). The Delta method (Delta) is precisely designed for this purpose.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.11 (Delta Method)</div>
                    <div class="env-body">
                        <p>Suppose \\(\\sqrt{n}(X_n - \\mu) \\xrightarrow{d} N(0, \\sigma^2)\\). If the function \\(g\\) is differentiable at \\(\\mu\\) with \\(g'(\\mu) \\ne 0\\), then:</p>
                        \\[\\sqrt{n}\\bigl(g(X_n) - g(\\mu)\\bigr) \\xrightarrow{d} N\\!\\left(0, \\sigma^2 [g'(\\mu)]^2\\right).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Expand \\(g(X_n)\\) in a Taylor series around \\(\\mu\\):</p>
                        \\[g(X_n) = g(\\mu) + g'(\\mu)(X_n - \\mu) + \\frac{1}{2}g''(\\xi_n)(X_n - \\mu)^2,\\]
                        <p>where \\(\\xi_n\\) lies between \\(X_n\\) and \\(\\mu\\). Therefore:</p>
                        \\[\\sqrt{n}(g(X_n) - g(\\mu)) = g'(\\mu) \\cdot \\sqrt{n}(X_n - \\mu) + \\frac{1}{2}g''(\\xi_n) \\cdot \\sqrt{n}(X_n - \\mu)^2.\\]
                        <p>Since \\(\\sqrt{n}(X_n - \\mu) = O_P(1)\\), we have \\((X_n - \\mu) = O_P(1/\\sqrt{n})\\), and thus:</p>
                        \\[\\sqrt{n}(X_n - \\mu)^2 = \\frac{[\\sqrt{n}(X_n - \\mu)]^2}{\\sqrt{n}} = \\frac{O_P(1)}{\\sqrt{n}} \\xrightarrow{P} 0.\\]
                        <p>The remainder vanishes, and by Slutsky's theorem:</p>
                        \\[\\sqrt{n}(g(X_n) - g(\\mu)) = g'(\\mu) \\cdot \\sqrt{n}(X_n - \\mu) + o_P(1) \\xrightarrow{d} g'(\\mu) \\cdot N(0, \\sigma^2) = N(0, \\sigma^2[g'(\\mu)]^2).\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.12 (Asymptotic Distribution of the Exponential Mean)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Exp}(\\lambda)\\), with MLE \\(\\hat{\\lambda} = 1/\\bar{X}\\). We know \\(\\sqrt{n}(\\hat{\\lambda} - \\lambda) \\xrightarrow{d} N(0, \\lambda^2)\\).</p>
                        <p>The mean parameter is \\(\\mu = g(\\lambda) = 1/\\lambda\\), with \\(g'(\\lambda) = -1/\\lambda^2\\). By the Delta method:</p>
                        \\[\\sqrt{n}(\\bar{X} - 1/\\lambda) \\xrightarrow{d} N\\!\\left(0, \\lambda^2 \\cdot \\frac{1}{\\lambda^4}\\right) = N\\!\\left(0, \\frac{1}{\\lambda^2}\\right).\\]
                        <p>That is, \\(\\bar{X} \\approx N(1/\\lambda, 1/(n\\lambda^2))\\). Of course this can also be obtained directly from the CLT (since \\(\\bar{X}\\) is itself a sample mean), but the value of the Delta method lies in handling more complex transformations.</p>
                    </div>
                </div>

 <h3>Second-Order Delta MethodDelta</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.13 (Second-Order Delta Method)</div>
                    <div class="env-body">
                        <p>Suppose \\(\\sqrt{n}(X_n - \\mu) \\xrightarrow{d} N(0, \\sigma^2)\\), and \\(g'(\\mu) = 0\\) but \\(g''(\\mu) \\ne 0\\). Then:</p>
                        \\[n\\bigl(g(X_n) - g(\\mu)\\bigr) \\xrightarrow{d} \\frac{\\sigma^2 g''(\\mu)}{2} \\chi^2_1.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By Taylor expansion (with \\(g'(\\mu) = 0\\)):</p>
                        \\[g(X_n) - g(\\mu) = \\frac{g''(\\mu)}{2}(X_n - \\mu)^2 + o((X_n - \\mu)^2).\\]
                        <p>Multiplying by \\(n\\):</p>
                        \\[n(g(X_n) - g(\\mu)) = \\frac{g''(\\mu)}{2} [\\sqrt{n}(X_n - \\mu)]^2 + o_P(1).\\]
                        <p>By the continuous mapping theorem, \\([\\sqrt{n}(X_n - \\mu)]^2 \\xrightarrow{d} \\sigma^2 \\chi^2_1\\), so \\(n(g(X_n) - g(\\mu)) \\xrightarrow{d} \\frac{\\sigma^2 g''(\\mu)}{2} \\chi^2_1\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

 <h3>Multivariate Delta MethodDelta</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.14 (Multivariate Delta Method)</div>
                    <div class="env-body">
                        <p>Suppose \\(\\sqrt{n}(\\mathbf{X}_n - \\boldsymbol{\\mu}) \\xrightarrow{d} N(\\mathbf{0}, \\boldsymbol{\\Sigma})\\), where \\(\\mathbf{X}_n \\in \\mathbb{R}^k\\). If \\(g: \\mathbb{R}^k \\to \\mathbb{R}\\) is differentiable at \\(\\boldsymbol{\\mu}\\) with gradient \\(\\nabla g(\\boldsymbol{\\mu}) \\ne \\mathbf{0}\\), then:</p>
                        \\[\\sqrt{n}(g(\\mathbf{X}_n) - g(\\boldsymbol{\\mu})) \\xrightarrow{d} N\\!\\left(0, \\nabla g(\\boldsymbol{\\mu})^T \\boldsymbol{\\Sigma} \\, \\nabla g(\\boldsymbol{\\mu})\\right).\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.15 (Asymptotic Distribution of a Ratio)</div>
                    <div class="env-body">
                        <p>Let \\(\\bar{X}_n \\xrightarrow{P} \\mu_X\\), \\(\\bar{Y}_n \\xrightarrow{P} \\mu_Y \\ne 0\\), and</p>
                        \\[\\sqrt{n}\\begin{pmatrix} \\bar{X}_n - \\mu_X \\\\ \\bar{Y}_n - \\mu_Y \\end{pmatrix} \\xrightarrow{d} N\\!\\left(\\mathbf{0}, \\begin{pmatrix} \\sigma_X^2 & \\sigma_{XY} \\\\ \\sigma_{XY} & \\sigma_Y^2 \\end{pmatrix}\\right).\\]
                        <p>Taking \\(g(x, y) = x/y\\), \\(\\nabla g = (1/\\mu_Y, -\\mu_X/\\mu_Y^2)^T\\). By the multivariate Delta method:</p>
                        \\[\\sqrt{n}\\left(\\frac{\\bar{X}_n}{\\bar{Y}_n} - \\frac{\\mu_X}{\\mu_Y}\\right) \\xrightarrow{d} N\\!\\left(0, \\frac{\\sigma_X^2}{\\mu_Y^2} - \\frac{2\\mu_X \\sigma_{XY}}{\\mu_Y^3} + \\frac{\\mu_X^2 \\sigma_Y^2}{\\mu_Y^4}\\right).\\]
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="delta-method-viz"></div>
            `,
            visualizations: [
                {
                    id: 'delta-method-viz',
                    title: 'Interactive: Delta Method Visualization',
                    description: 'Choose a transformation g(x) and observe how the asymptotic distribution is "scaled" by the derivative of the transformation function',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 600, height: 420,
                            originX: 300, originY: 340,
                            scale: 55
                        });

                        var transforms = [
                            { name: 'g(x) = x\u00B2', fn: function(x) { return x * x; }, deriv: function(x) { return 2 * x; }, label: 'x\u00B2' },
                            { name: 'g(x) = \u221Ax', fn: function(x) { return Math.sqrt(Math.max(x, 0)); }, deriv: function(x) { return 0.5 / Math.sqrt(Math.max(x, 0.001)); }, label: '\u221Ax' },
                            { name: 'g(x) = log(x)', fn: function(x) { return Math.log(Math.max(x, 0.001)); }, deriv: function(x) { return 1 / Math.max(x, 0.001); }, label: 'log(x)' },
                            { name: 'g(x) = 1/x', fn: function(x) { return 1 / Math.max(x, 0.001); }, deriv: function(x) { return -1 / (x * x + 0.001); }, label: '1/x' },
                            { name: 'g(x) = e^x', fn: function(x) { return Math.exp(x); }, deriv: function(x) { return Math.exp(x); }, label: 'e^x' }
                        ];

                        var currentTransform = 0;
                        var mu = 2.0;
                        var sigma2 = 1.0;
                        var currentN = 50;
                        var nSims = 5000;

                        function draw() {
                            var g = transforms[currentTransform];
                            var sigma = Math.sqrt(sigma2);

                            var samples = [];
                            for (var s = 0; s < nSims; s++) {
                                var xBar = mu + VizEngine.randomNormal(0, sigma / Math.sqrt(currentN));
                                samples.push(Math.sqrt(currentN) * (g.fn(xBar) - g.fn(mu)));
                            }

                            viz.clear();

                            var gPrimeMu = g.deriv(mu);
                            var asympVar = sigma2 * gPrimeMu * gPrimeMu;
                            var asympSD = Math.sqrt(asympVar);

                            var xMin = -4 * Math.max(asympSD, 0.5);
                            var xMax = 4 * Math.max(asympSD, 0.5);
                            if (xMax - xMin < 2) { xMin = -2; xMax = 2; }

                            var nBins = 50;
                            var binW = (xMax - xMin) / nBins;
                            var counts = new Array(nBins).fill(0);
                            var inRange = 0;
                            for (var i = 0; i < samples.length; i++) {
                                var idx = Math.floor((samples[i] - xMin) / binW);
                                if (idx >= 0 && idx < nBins) { counts[idx]++; inRange++; }
                            }

                            var maxDensity = 0;
                            var bins = [];
                            for (var i = 0; i < nBins; i++) {
                                var density = counts[i] / (nSims * binW);
                                if (density > maxDensity) maxDensity = density;
                                bins.push({
                                    x: xMin + i * binW,
                                    width: binW,
                                    height: density
                                });
                            }

                            var scaleY = 3.5 / (maxDensity > 0 ? maxDensity : 1);
                            var scaledBins = bins.map(function(b) {
                                return { x: b.x, width: b.width, height: b.height * scaleY };
                            });

                            var scaleX = 5.0 / (xMax > 0 ? xMax : 1);
                            var scaledBins2 = scaledBins.map(function(b) {
                                return { x: b.x * scaleX, width: b.width * scaleX, height: b.height };
                            });

                            viz.drawHistogram(scaledBins2, viz.colors.blue + '44', viz.colors.blue, 1);

                            if (asympSD > 0.01) {
                                viz.drawFunction(function(x) {
                                    var realX = x / scaleX;
                                    return VizEngine.normalPDF(realX, 0, asympSD) * scaleY;
                                }, xMin * scaleX, xMax * scaleX, viz.colors.orange, 2.5);
                            }

                            viz.drawSegment(xMin * scaleX, 0, xMax * scaleX, 0, viz.colors.axis, 1);

                            viz.screenText(g.name + ', \u03BC = ' + mu.toFixed(1) + ', n = ' + currentN, 300, 22, viz.colors.white, 14, 'center');
                            viz.screenText("g'(\u03BC) = " + gPrimeMu.toFixed(3) + ', asymptotic var = \u03C3\u00B2[g\'(\u03BC)]\u00B2 = ' + asympVar.toFixed(3), 300, 42, viz.colors.teal, 11, 'center');

                            var empirVar = VizEngine.variance(samples);
                            viz.screenText('Empirical var of \u221An(g(X\u0304) - g(\u03BC)): ' + empirVar.toFixed(3), 300, 60, viz.colors.yellow, 11, 'center');
                        }

                        var distBtns = document.createElement('div');
                        distBtns.style.cssText = 'display:flex;gap:4px;margin-bottom:4px;flex-wrap:wrap;';
                        transforms.forEach(function(t, i) {
                            var btn = document.createElement('button');
                            btn.textContent = t.name;
                            btn.style.cssText = 'padding:3px 8px;border:1px solid #30363d;border-radius:4px;background:' + (i === 0 ? '#58a6ff33' : '#1a1a40') + ';color:#c9d1d9;font-size:0.72rem;cursor:pointer;';
                            btn.addEventListener('click', function() {
                                currentTransform = i;
                                for (var j = 0; j < distBtns.children.length; j++) {
                                    distBtns.children[j].style.background = (j === i) ? '#58a6ff33' : '#1a1a40';
                                }
                                draw();
                            });
                            distBtns.appendChild(btn);
                        });
                        controls.appendChild(distBtns);

                        VizEngine.createSlider(controls, '\u03BC', 0.5, 5, mu, 0.5, function(v) { mu = v; draw(); });
                        VizEngine.createSlider(controls, 'n', 5, 500, currentN, 5, function(v) { currentN = Math.round(v); draw(); });
                        VizEngine.createButton(controls, 'Resample', function() { draw(); });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Bernoulli}(p)\\). Use the Delta method to find the asymptotic distribution of \\(\\log\\frac{p}{1-p}\\) (log-odds).',
                    hint: 'First write down the asymptotic distribution of \\(\\bar{X}\\), then take \\(g(x) = \\log\\frac{x}{1-x}\\) and compute \\(g\'(p)\\).',
                    solution: '\\(\\sqrt{n}(\\bar{X} - p) \\xrightarrow{d} N(0, p(1-p))\\). Take \\(g(x) = \\log(x/(1-x))\\), then \\(g\'(x) = 1/(x(1-x))\\), so \\(g\'(p) = 1/(p(1-p))\\). By the Delta method: \\(\\sqrt{n}\\left(\\log\\frac{\\hat{p}}{1-\\hat{p}} - \\log\\frac{p}{1-p}\\right) \\xrightarrow{d} N\\left(0, \\frac{p(1-p)}{p^2(1-p)^2}\\right) = N\\left(0, \\frac{1}{p(1-p)}\\right)\\).'
                },
                {
                    question: 'Suppose \\(\\sqrt{n}(\\hat{\\sigma}^2 - \\sigma^2) \\xrightarrow{d} N(0, 2\\sigma^4)\\) (asymptotic distribution of the sample variance under normality). Use the Delta method to find the asymptotic distribution of \\(\\hat{\\sigma} = \\sqrt{\\hat{\\sigma}^2}\\).',
                    hint: 'Take \\(g(x) = \\sqrt{x}\\), so \\(g\'(x) = 1/(2\\sqrt{x})\\).',
                    solution: 'Take \\(g(x) = \\sqrt{x}\\), \\(g\'(\\sigma^2) = \\frac{1}{2\\sigma}\\). By the Delta method: \\(\\sqrt{n}(\\hat{\\sigma} - \\sigma) \\xrightarrow{d} N\\left(0, 2\\sigma^4 \\cdot \\frac{1}{4\\sigma^2}\\right) = N\\left(0, \\frac{\\sigma^2}{2}\\right)\\).'
                },
                {
                    question: 'Prove Theorem 16.13 (second-order Delta method) in full detail. In particular, explain why the convergence rate becomes \\(n\\) instead of \\(\\sqrt{n}\\).',
                    hint: 'When \\(g\'(\\mu) = 0\\), the first-order term vanishes and the second-order term dominates. Use the continuous mapping theorem to handle \\([\\sqrt{n}(X_n - \\mu)]^2\\).',
                    solution: 'Taylor expand to second order: \\(g(X_n) - g(\\mu) = \\frac{g\'\'(\\mu)}{2}(X_n - \\mu)^2 + o((X_n - \\mu)^2)\\) (since \\(g\'(\\mu) = 0\\)). Multiply by \\(n\\): \\(n(g(X_n) - g(\\mu)) = \\frac{g\'\'(\\mu)}{2}[\\sqrt{n}(X_n - \\mu)]^2 + o_P(1)\\). By assumption \\(\\sqrt{n}(X_n - \\mu) \\xrightarrow{d} Z \\sim N(0, \\sigma^2)\\). By the continuous mapping theorem \\(Z^2 \\sim \\sigma^2 \\chi^2_1\\), so \\(n(g(X_n) - g(\\mu)) \\xrightarrow{d} \\frac{\\sigma^2 g\'\'(\\mu)}{2} \\chi^2_1\\). The convergence rate is \\(n\\) because the first derivative of \\(g\\) at \\(\\mu\\) is zero, making the transformation "flat" at that point, so second-order information is needed to detect the change.'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Asymptotic Relative Efficiency
        // ============================================================
        {
            id: 'ch16-sec04',
            title: 'Asymptotic Relative Efficiency',
            content: `
 <h2>Asymptotic Relative Efficiency</h2>

 <p>We already know that the MLE is asymptotically efficient. But how do we compare two different estimators? If estimator A has a smaller asymptotic variance than estimator B, then A is "better in large samples." <strong>Asymptotic relative efficiency</strong> (ARE) precisely quantifies this comparison.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.16 (Asymptotic Relative Efficiency)</div>
                    <div class="env-body">
                        <p>Let \\(T_n\\) and \\(U_n\\) be two asymptotically normal estimators of \\(\\theta\\):</p>
                        \\[\\sqrt{n}(T_n - \\theta) \\xrightarrow{d} N(0, v_T(\\theta)), \\quad \\sqrt{n}(U_n - \\theta) \\xrightarrow{d} N(0, v_U(\\theta)).\\]
                        <p>The <strong>asymptotic relative efficiency</strong> of \\(U_n\\) relative to \\(T_n\\) is defined as:</p>
                        \\[\\text{ARE}(U_n, T_n) = \\frac{v_T(\\theta)}{v_U(\\theta)}.\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The intuitive interpretation of ARE: if \\(\\text{ARE}(U, T) = 2\\), it means that for \\(T\\) to achieve the same precision as \\(U\\), approximately twice the sample size is needed. In other words, \\(U\\) is "more efficient" because it achieves the same estimation precision with less data.</p>
                        <p>More precisely: if \\(\\text{ARE}(U, T) = c\\), then the asymptotic precision of \\(T\\) based on \\(n\\) samples can be achieved by \\(U\\) with only about \\(n/c\\) samples.</p>
                    </div>
                </div>

 <h3>Classical Example: Sample Mean vs. Sample Median</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 16.17 (Asymptotic Distribution of the Sample Median under Normality)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} f\\), where \\(f\\) is a continuous density symmetric about \\(\\mu\\). Let \\(M_n\\) be the sample median. Then:</p>
                        \\[\\sqrt{n}(M_n - \\mu) \\xrightarrow{d} N\\!\\left(0, \\frac{1}{4[f(\\mu)]^2}\\right).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p>Let \\(F\\) be the CDF and \\(m = F^{-1}(1/2) = \\mu\\) (the median of a symmetric distribution equals the mean). The sample median \\(M_n\\) is essentially an estimator of \\(F^{-1}(1/2)\\).</p>
 <p>The general asymptotic theory of sample quantiles gives:</p>
                        \\[\\sqrt{n}(\\hat{q}_p - q_p) \\xrightarrow{d} N\\!\\left(0, \\frac{p(1-p)}{[f(q_p)]^2}\\right).\\]
                        <p>Taking \\(p = 1/2\\): the asymptotic variance is \\(\\frac{(1/2)(1/2)}{[f(\\mu)]^2} = \\frac{1}{4[f(\\mu)]^2}\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 16.18 (Normal Distribution: Sample Mean vs. Sample Median)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\).</p>
                        <p><strong>Sample mean:</strong> \\(\\sqrt{n}(\\bar{X} - \\mu) \\xrightarrow{d} N(0, \\sigma^2)\\), asymptotic variance \\(v_{\\bar{X}} = \\sigma^2\\).</p>
                        <p><strong>Sample median:</strong> \\(f(\\mu) = \\frac{1}{\\sqrt{2\\pi}\\sigma}\\), asymptotic variance \\(v_M = \\frac{1}{4 \\cdot \\frac{1}{2\\pi\\sigma^2}} = \\frac{\\pi\\sigma^2}{2}\\).</p>
                        <p>Therefore:</p>
                        \\[\\text{ARE}(\\bar{X}, M_n) = \\frac{v_M}{v_{\\bar{X}}} = \\frac{\\pi\\sigma^2 / 2}{\\sigma^2} = \\frac{\\pi}{2} \\approx 1.571.\\]
                        <p>The sample mean is about 57% more efficient than the sample median. Equivalently, the sample median requires about \\(\\pi n/2\\) observations to achieve the same precision as the sample mean with \\(n\\) observations.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark: Robustness Advantage of the Median</div>
                    <div class="env-body">
 <p>Although the sample mean is more efficient under the normal distribution, for heavy-tailed distributions (such as the Cauchy distribution) the variance of the sample mean may not even exist, whereas the sample median still has finite asymptotic variance. In the presence of outliers, the robustness of the median far exceeds that of the mean. The trade-off between efficiency and robustness is one of the central topics in statistics.</p>
                    </div>
                </div>

 <h3>Pitman Asymptotic Relative Efficiency Pitman</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 16.19 (Pitman ARE)</div>
                    <div class="env-body">
 <p>In the context of hypothesis testing, Pitman ARE compares the power of two tests under <strong>local alternatives</strong>. Suppose test \\(T_n\\) is based on \\(n_T\\) samples and test \\(U_n\\) on \\(n_U\\) samples, and both achieve the same asymptotic power under the same sequence of local alternatives. The Pitman ARE is defined as:</p>
                        \\[e(U, T) = \\lim_{n \\to \\infty} \\frac{n_T}{n_U}.\\]
                        <p>For asymptotically normal estimators in location parameter problems, the Pitman ARE coincides with the ARE in Definition 16.16.</p>
                    </div>
                </div>

 <h3>ARE of MLE vs. Method of Moments MLEARE</h3>

                <div class="env-block example">
                    <div class="env-title">Example 16.20 (Gamma Distribution: MLE vs. Method of Moments)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Gamma}(\\alpha, \\beta)\\) with density \\(f(x) = \\frac{\\beta^\\alpha}{\\Gamma(\\alpha)} x^{\\alpha-1} e^{-\\beta x}\\).</p>
 <p>The <strong>method of moments</strong> estimator uses \\(E[X] = \\alpha/\\beta\\) and \\(\\operatorname{Var}(X) = \\alpha/\\beta^2\\) to obtain:</p>
                        \\[\\hat{\\alpha}_{\\text{MOM}} = \\frac{\\bar{X}^2}{S^2}, \\quad \\hat{\\beta}_{\\text{MOM}} = \\frac{\\bar{X}}{S^2}.\\]
                        <p>The <strong>MLE</strong> requires numerically solving the likelihood equations, and its asymptotic variance attains the inverse of the Fisher information matrix. The asymptotic variance of the moment estimator can be computed via the multivariate Delta method, and it is typically strictly larger than the CRLB.</p>
                        <p>For instance, when \\(\\alpha = 1\\) (i.e., the exponential distribution), the MLE and the moment estimator for \\(\\beta\\) coincide. However, when \\(\\alpha\\) is large, the efficiency loss of the moment estimator can be substantial.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="are-comparison"></div>

                <div class="viz-placeholder" data-viz="mean-vs-median-are"></div>
            `,
            visualizations: [
                {
                    id: 'are-comparison',
                    title: 'Interactive: ARE Comparison — Asymptotic Distributions of Two Estimators',
                    description: 'Compare the asymptotic efficiency of the sample mean and sample median under different distributions',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 600, height: 380,
                            originX: 300, originY: 310,
                            scale: 80
                        });

                        var currentN = 100;
                        var nSims = 5000;
                        var mu = 0;
                        var sigma = 1;

                        function draw() {
                            var meanResults = [];
                            var medianResults = [];

                            for (var s = 0; s < nSims; s++) {
                                var data = VizEngine.sampleArray(function() {
                                    return VizEngine.randomNormal(mu, sigma);
                                }, currentN);
                                meanResults.push(Math.sqrt(currentN) * (VizEngine.mean(data) - mu));
                                medianResults.push(Math.sqrt(currentN) * (VizEngine.median(data) - mu));
                            }

                            viz.clear();

                            var xMin = -4;
                            var xMax = 4;
                            var nBins = 60;
                            var binW = (xMax - xMin) / nBins;

                            function makeBins(results) {
                                var counts = new Array(nBins).fill(0);
                                for (var i = 0; i < results.length; i++) {
                                    var idx = Math.floor((results[i] - xMin) / binW);
                                    if (idx >= 0 && idx < nBins) counts[idx]++;
                                }
                                var bins = [];
                                for (var i = 0; i < nBins; i++) {
                                    bins.push({
                                        x: xMin + i * binW,
                                        width: binW,
                                        height: counts[i] / (nSims * binW)
                                    });
                                }
                                return bins;
                            }

                            var meanBins = makeBins(meanResults);
                            var medianBins = makeBins(medianResults);

                            var maxH = 0;
                            for (var i = 0; i < nBins; i++) {
                                if (meanBins[i].height > maxH) maxH = meanBins[i].height;
                                if (medianBins[i].height > maxH) maxH = medianBins[i].height;
                            }
                            var scaleY = 3.5 / (maxH > 0 ? maxH : 1);

                            var scaledMean = meanBins.map(function(b) { return { x: b.x, width: b.width, height: b.height * scaleY }; });
                            var scaledMedian = medianBins.map(function(b) { return { x: b.x, width: b.width, height: b.height * scaleY }; });

                            viz.drawHistogram(scaledMedian, viz.colors.purple + '33', viz.colors.purple, 1);
                            viz.drawHistogram(scaledMean, viz.colors.blue + '33', viz.colors.blue, 1);

                            var varMean = sigma * sigma;
                            var varMedian = Math.PI * sigma * sigma / 2;

                            viz.drawFunction(function(x) { return VizEngine.normalPDF(x, 0, Math.sqrt(varMean)) * scaleY; }, xMin, xMax, viz.colors.blue, 2);
                            viz.drawFunction(function(x) { return VizEngine.normalPDF(x, 0, Math.sqrt(varMedian)) * scaleY; }, xMin, xMax, viz.colors.purple, 2);

                            viz.drawSegment(xMin, 0, xMax, 0, viz.colors.axis, 1);

                            viz.screenText('n = ' + currentN + ', Normal(\u03BC, \u03C3\u00B2)', 300, 22, viz.colors.white, 14, 'center');

                            viz.screenText('\u25A0', 150, 45, viz.colors.blue, 12, 'center');
                            viz.screenText(' Mean: var = ' + VizEngine.variance(meanResults).toFixed(3) + ' (theory: ' + varMean.toFixed(3) + ')', 240, 45, viz.colors.blue, 11, 'left');

                            viz.screenText('\u25A0', 150, 62, viz.colors.purple, 12, 'center');
                            viz.screenText(' Median: var = ' + VizEngine.variance(medianResults).toFixed(3) + ' (theory: ' + varMedian.toFixed(3) + ')', 240, 62, viz.colors.purple, 11, 'left');

                            var are = varMedian / varMean;
                            viz.screenText('ARE(Mean, Median) = \u03C0/2 \u2248 ' + are.toFixed(3), 300, 82, viz.colors.orange, 12, 'center');
                        }

                        VizEngine.createSlider(controls, 'n', 10, 500, currentN, 10, function(v) {
                            currentN = Math.round(v);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Resample', function() { draw(); });

                        draw();
                        return viz;
                    }
                },
                {
                    id: 'mean-vs-median-are',
                    title: 'Interactive: ARE under Different Distributions',
                    description: 'Compare the performance of sample mean vs. median under normal and heavy-tailed distributions',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 600, height: 380,
                            originX: 300, originY: 310,
                            scale: 50
                        });

                        var distributions = ['Normal', 'Laplace', 'Cauchy-mix'];
                        var currentDist = 0;
                        var currentN = 100;
                        var nSims = 3000;

                        function sampleFrom(dist) {
                            if (dist === 0) return VizEngine.randomNormal(0, 1);
                            if (dist === 1) {
                                var u = Math.random() - 0.5;
                                return -Math.sign(u) * Math.log(1 - 2 * Math.abs(u));
                            }
                            if (dist === 2) {
                                if (Math.random() < 0.9) return VizEngine.randomNormal(0, 1);
                                return VizEngine.randomNormal(0, 1) / (Math.random() < 0.5 ? 0.1 : -0.1 + VizEngine.randomNormal(0, 0.3));
                            }
                            return VizEngine.randomNormal(0, 1);
                        }

                        function draw() {
                            var meanResults = [];
                            var medianResults = [];

                            for (var s = 0; s < nSims; s++) {
                                var data = [];
                                for (var i = 0; i < currentN; i++) data.push(sampleFrom(currentDist));
                                meanResults.push(VizEngine.mean(data));
                                medianResults.push(VizEngine.median(data));
                            }

                            viz.clear();

                            var meanVar = VizEngine.variance(meanResults);
                            var medianVar = VizEngine.variance(medianResults);
                            var are = meanVar / medianVar;

                            var allRes = meanResults.concat(medianResults);
                            var q01 = VizEngine.quantile(allRes, 0.01);
                            var q99 = VizEngine.quantile(allRes, 0.99);
                            var xMin = q01 - 0.2;
                            var xMax = q99 + 0.2;
                            var range = xMax - xMin;
                            if (range < 0.5) { xMin -= 0.5; xMax += 0.5; range = xMax - xMin; }

                            var nBins = 50;
                            var binW = range / nBins;

                            function makeBins(results) {
                                var counts = new Array(nBins).fill(0);
                                for (var i = 0; i < results.length; i++) {
                                    var idx = Math.floor((results[i] - xMin) / binW);
                                    if (idx >= 0 && idx < nBins) counts[idx]++;
                                }
                                return counts;
                            }

                            var meanCounts = makeBins(meanResults);
                            var medianCounts = makeBins(medianResults);
                            var maxCount = 0;
                            for (var i = 0; i < nBins; i++) {
                                if (meanCounts[i] > maxCount) maxCount = meanCounts[i];
                                if (medianCounts[i] > maxCount) maxCount = medianCounts[i];
                            }

                            var scaleX = 10 / range;
                            var scaleH = 3.5 / (maxCount > 0 ? maxCount : 1);

                            function drawHist(counts, color) {
                                var bins = [];
                                for (var i = 0; i < nBins; i++) {
                                    bins.push({
                                        x: (xMin + i * binW) * scaleX,
                                        width: binW * scaleX,
                                        height: counts[i] * scaleH
                                    });
                                }
                                viz.drawHistogram(bins, color + '33', color, 1);
                            }

                            drawHist(medianCounts, viz.colors.purple);
                            drawHist(meanCounts, viz.colors.blue);

                            viz.drawSegment(xMin * scaleX, 0, xMax * scaleX, 0, viz.colors.axis, 1);

                            viz.screenText(distributions[currentDist] + ' distribution, n = ' + currentN, 300, 22, viz.colors.white, 14, 'center');

                            viz.screenText('\u25A0', 120, 42, viz.colors.blue, 12, 'center');
                            viz.screenText(' Mean: MSE \u2248 ' + (meanVar * currentN).toFixed(3), 195, 42, viz.colors.blue, 11, 'left');

                            viz.screenText('\u25A0', 350, 42, viz.colors.purple, 12, 'center');
                            viz.screenText(' Median: MSE \u2248 ' + (medianVar * currentN).toFixed(3), 425, 42, viz.colors.purple, 11, 'left');

                            var interpretation = are > 1 ? 'Median wins!' : (are < 1 ? 'Mean wins!' : 'Tie');
                            viz.screenText('ARE(Median, Mean) = ' + are.toFixed(3) + ' ' + interpretation, 300, 62, viz.colors.orange, 12, 'center');
                        }

                        var distBtns = document.createElement('div');
                        distBtns.style.cssText = 'display:flex;gap:6px;margin-bottom:4px;';
                        distributions.forEach(function(name, i) {
                            var btn = document.createElement('button');
                            btn.textContent = name;
                            btn.style.cssText = 'padding:3px 10px;border:1px solid #30363d;border-radius:4px;background:' + (i === 0 ? '#58a6ff33' : '#1a1a40') + ';color:#c9d1d9;font-size:0.75rem;cursor:pointer;';
                            btn.addEventListener('click', function() {
                                currentDist = i;
                                for (var j = 0; j < distBtns.children.length; j++) {
                                    distBtns.children[j].style.background = (j === i) ? '#58a6ff33' : '#1a1a40';
                                }
                                draw();
                            });
                            distBtns.appendChild(btn);
                        });
                        controls.appendChild(distBtns);

                        VizEngine.createSlider(controls, 'n', 10, 500, currentN, 10, function(v) {
                            currentN = Math.round(v);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Resample', function() { draw(); });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} \\text{Laplace}(\\mu, b)\\) with density \\(f(x) = \\frac{1}{2b}e^{-|x-\\mu|/b}\\). Compute the ARE of the sample mean and the sample median for estimating \\(\\mu\\).',
                    hint: 'Laplace distribution: \\(\\operatorname{Var}(X) = 2b^2\\), \\(f(\\mu) = 1/(2b)\\).',
                    solution: 'Sample mean: asymptotic variance \\(v_{\\bar{X}} = 2b^2\\). Sample median: \\(f(\\mu) = 1/(2b)\\), asymptotic variance \\(v_M = \\frac{1}{4 \\cdot (1/(2b))^2} = b^2\\). ARE(Median, Mean) = \\(v_{\\bar{X}}/v_M = 2b^2/b^2 = 2\\). The sample median is twice as efficient as the sample mean! This is the complete opposite of the normal distribution result — under the Laplace (heavy-tailed) distribution, the median is more efficient than the mean.'
                },
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\). Compare two estimators of \\(\\sigma^2\\): (1) the MLE \\(\\hat{\\sigma}^2_{\\text{MLE}} = \\frac{1}{n}\\sum(X_i - \\bar{X})^2\\); (2) the unbiased estimator \\(S^2 = \\frac{1}{n-1}\\sum(X_i - \\bar{X})^2\\). Find their ARE.',
                    hint: 'Both are asymptotically normal, with asymptotic variances determined by the coefficient of \\(\\frac{2\\sigma^4}{n}\\). Note that \\(\\hat{\\sigma}^2_{\\text{MLE}} = \\frac{n-1}{n} S^2\\).',
                    solution: 'Since \\(\\hat{\\sigma}^2_{\\text{MLE}} = \\frac{n-1}{n} S^2\\), their ratio tends to 1 as \\(n \\to \\infty\\). Specifically, both have \\(\\sqrt{n}(\\hat{\\sigma}^2 - \\sigma^2) \\xrightarrow{d} N(0, 2\\sigma^4)\\) (the same asymptotic variance). Therefore ARE = 1. They are asymptotically equivalent in large samples, although in finite samples \\(S^2\\) is unbiased while the MLE is biased.'
                },
                {
                    question: 'Explain why ARE is a large-sample concept that may not accurately reflect finite-sample performance. Give an example where ARE = 1 but the finite-sample behavior differs significantly.',
                    hint: 'Consider that two estimators may have the same asymptotic variance but different bias or higher-order terms.',
                    solution: 'ARE only compares the leading term (coefficient of \\(1/n\\)) of the asymptotic variance, ignoring higher-order terms (\\(1/n^2\\), etc.) and finite-sample bias. For example, when estimating \\(\\sigma^2\\) under the normal distribution, the MLE \\(\\hat{\\sigma}^2 = \\frac{1}{n}\\sum(X_i - \\bar{X})^2\\) and \\(S^2 = \\frac{1}{n-1}\\sum(X_i - \\bar{X})^2\\) have ARE = 1, but for small \\(n\\) (e.g., \\(n=5\\)), the bias of the MLE \\(-\\sigma^2/n\\) leads to MSE \\(\\frac{2(n-1)}{n^2}\\sigma^4\\), while \\(S^2\\) has MSE \\(\\frac{2}{n-1}\\sigma^4\\). When \\(n=5\\), these are \\(0.32\\sigma^4\\) and \\(0.50\\sigma^4\\) respectively, a difference exceeding 50%.'
                }
            ]
        }
    ]
});

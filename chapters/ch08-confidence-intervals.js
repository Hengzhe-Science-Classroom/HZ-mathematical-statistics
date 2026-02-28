// Chapter 8: Confidence Intervals
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch08',
    number: 8,
    title: 'Confidence Intervals',
    subtitle: 'Confidence Intervals',
    sections: [
        // ============================================================
        // Section 1: The Concept of Confidence Intervals
        // ============================================================
        {
            id: 'ch08-sec01',
            title: 'The Concept of Confidence Intervals',
            content: `
 <h2>The Concept of Confidence Intervals</h2>

 <p>A point estimate provides a single "best guess" for a parameter, but it cannot tell us how accurate that guess is. A <strong>confidence interval</strong> quantifies estimation uncertainty by providing a random interval that covers the true parameter value with a specified probability.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 8.1 (Confidence Interval)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n\\) be a random sample from a population with parameter \\(\\theta \\in \\Theta\\). If statistics \\(L = L(X_1,\\ldots,X_n)\\) and \\(U = U(X_1,\\ldots,X_n)\\) satisfy</p>
                        \\[P_{\\theta}(L \\leq \\theta \\leq U) \\geq 1 - \\alpha, \\quad \\forall \\theta \\in \\Theta,\\]
 <p>then the random interval \\([L, U]\\) is called a <strong>\\(1-\\alpha\\) confidence interval</strong> for \\(\\theta\\), and \\(1-\\alpha\\) is called the <strong>confidence level</strong>.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition: Frequentist Interpretation</div>
                    <div class="env-body">
 <p>The correct interpretation of a confidence interval is <strong>frequentist</strong> : if we repeatedly draw samples infinitely many times and construct a 95% confidence interval each time, then 95% of these intervals will contain the true parameter \\(\\theta\\).</p>
                        <p>Note: for a <strong>specific computed</strong> interval \\([l, u]\\), one cannot say "\\(\\theta\\) falls in \\([l, u]\\) with 95% probability," because \\(\\theta\\) is a fixed constant and \\([l, u]\\) is a determined numerical value -- there is no randomness. The correct statement is: "we are 95% confident that this interval covers \\(\\theta\\)," where the "confidence" derives from the long-run performance of the method.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 8.2 (Pivotal Quantity)</div>
                    <div class="env-body">
 <p>Let \\(Q = Q(X_1,\\ldots,X_n; \\theta)\\) be a function of the sample and the parameter. If the distribution of \\(Q\\) does not depend on any unknown parameter, then \\(Q\\) is called a <strong>pivotal quantity</strong>.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.3 (Constructing CIs via Pivotal Quantities)</div>
                    <div class="env-body">
                        <p>Let \\(Q(X_1, \\ldots, X_n; \\theta)\\) be a pivotal quantity with distribution function \\(F_Q\\). If there exist constants \\(a < b\\) such that</p>
                        \\[P(a \\leq Q \\leq b) = 1 - \\alpha,\\]
                        <p>and the inequality \\(a \\leq Q(\\mathbf{X}; \\theta) \\leq b\\) can be equivalently rewritten as \\(L(\\mathbf{X}) \\leq \\theta \\leq U(\\mathbf{X})\\), then \\([L(\\mathbf{X}), U(\\mathbf{X})]\\) is a \\(100(1-\\alpha)\\%\\) confidence interval for \\(\\theta\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By the definition of a pivotal quantity, the distribution of \\(Q\\) does not depend on \\(\\theta\\), so \\(P(a \\leq Q \\leq b) = 1 - \\alpha\\) holds for all \\(\\theta\\). Since \\(\{a \\leq Q \\leq b\}\\) is equivalent to \\(\{L \\leq \\theta \\leq U\}\\), we have</p>
                        \\[P_{\\theta}(L \\leq \\theta \\leq U) = P(a \\leq Q \\leq b) = 1 - \\alpha, \\quad \\forall\\, \\theta.\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <p>The pivotal quantity method is the core technique for constructing confidence intervals. The basic steps are as follows:</p>
                <ol>
                    <li>Find a pivotal quantity \\(Q(X_1,\\ldots,X_n;\\theta)\\) whose distribution is known and free of unknown parameters;</li>
                    <li>Find quantiles \\(q_1, q_2\\) from the distribution of \\(Q\\) such that \\(P(q_1 \\leq Q \\leq q_2) = 1-\\alpha\\);</li>
                    <li>Solve the inequality \\(q_1 \\leq Q \\leq q_2\\) for \\(\\theta\\) to obtain \\(L \\leq \\theta \\leq U\\).</li>
                </ol>

                <div class="env-block example">
                    <div class="env-title">Example 8.4 (Pivotal Quantity for Normal Mean)</div>
                    <div class="env-body">
                        <p>Let \\(X_1,\\ldots,X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\) with \\(\\sigma^2\\) known. Then</p>
                        \\[Q = \\frac{\\bar{X} - \\mu}{\\sigma / \\sqrt{n}} \\sim N(0,1)\\]
                        <p>is a pivotal quantity. From \\(P(-z_{\\alpha/2} \\leq Q \\leq z_{\\alpha/2}) = 1-\\alpha\\), solving for \\(\\mu\\) yields</p>
                        \\[\\bar{X} - z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} \\leq \\mu \\leq \\bar{X} + z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}.\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 8.5 (Pivotal Quantity for Exponential Distribution)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\sim \\text{Exp}(\\lambda)\\). Then \\(2\\lambda \\sum_{i=1}^n X_i \\sim \\chi^2(2n)\\), which is a pivotal quantity for \\(\\lambda\\). Let \\(\\chi^2_{\\alpha/2}(2n)\\) and \\(\\chi^2_{1-\\alpha/2}(2n)\\) denote the \\(\\alpha/2\\) and \\(1-\\alpha/2\\) quantiles of the \\(\\chi^2(2n)\\) distribution, respectively. Then</p>
                        \\[P\\!\\left(\\chi^2_{\\alpha/2}(2n) \\leq 2\\lambda \\sum X_i \\leq \\chi^2_{1-\\alpha/2}(2n)\\right) = 1 - \\alpha,\\]
                        <p>and rearranging gives the \\(100(1-\\alpha)\\%\\) confidence interval for \\(\\lambda\\):</p>
                        \\[\\left[\\frac{\\chi^2_{\\alpha/2}(2n)}{2\\sum X_i},\; \\frac{\\chi^2_{1-\\alpha/2}(2n)}{2\\sum X_i}\\right].\\]
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 8.6 (Coverage Probability)</div>
                    <div class="env-body">
 <p>The <strong>coverage probability</strong> of a confidence interval \\([L, U]\\) is defined as</p>
                        \\[C(\\theta) = P_{\\theta}(L \\leq \\theta \\leq U).\\]
 <p>If \\(C(\\theta) \\geq 1-\\alpha\\) for all \\(\\theta\\), then \\([L,U]\\) is a valid \\(1-\\alpha\\) confidence interval. If \\(C(\\theta) = 1-\\alpha\\) holds for all \\(\\theta\\), the interval is called <strong>exact</strong>.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>At the same confidence level, shorter intervals are better -- a shorter interval means a more precise estimate. For pivotal quantities with symmetric distributions, using equal-tail quantiles \\(q_{\\alpha/2}\\) and \\(q_{1-\\alpha/2}\\) typically yields the shortest interval; however, for skewed distributions (such as \\(\\chi^2\\)), the equal-tail interval is not necessarily the shortest.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="coverage-demo"></div>
            `,
            visualizations: [
                {
                    id: 'coverage-demo',
 title:'Interactive Demo: Confidence Interval Coverage',
                    description: 'Generate 100 confidence intervals and observe which ones contain the true mean, tracking coverage rate',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 420,
                            originX: 80, originY: 380, scale: 40
                        });

                        var trueMu = 5;
                        var sigma = 2;
                        var n = 25;
                        var alpha = 0.05;
                        var intervals = [];

                        function generateIntervals() {
                            intervals = [];
                            var zCrit = 1.96; // z_{0.025}
                            var halfWidth = zCrit * sigma / Math.sqrt(n);
                            for (var i = 0; i < 100; i++) {
                                var sample = VizEngine.sampleArray(function() { return VizEngine.randomNormal(trueMu, sigma); }, n);
                                var xbar = VizEngine.mean(sample);
                                intervals.push({
                                    lower: xbar - halfWidth,
                                    upper: xbar + halfWidth,
                                    covers: (xbar - halfWidth <= trueMu) && (trueMu <= xbar + halfWidth)
                                });
                            }
                        }

                        generateIntervals();

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Title
                            viz.screenText('100 Confidence Intervals (95% level)', viz.width / 2, 16, viz.colors.white, 14);

                            var coverCount = 0;
                            var yStep = (viz.height - 60) / 100;

                            // Draw true mu vertical line
                            var muScreenX = viz.originX + (trueMu - 2) * viz.scale;
                            ctx.strokeStyle = viz.colors.yellow;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            ctx.moveTo(muScreenX, 30);
                            ctx.lineTo(muScreenX, viz.height - 10);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            viz.screenText('true ' + String.fromCharCode(956), muScreenX, 28, viz.colors.yellow, 11);

                            for (var i = 0; i < intervals.length; i++) {
                                var ci = intervals[i];
                                var yPos = 38 + i * yStep;
                                var lx = viz.originX + (ci.lower - 2) * viz.scale;
                                var ux = viz.originX + (ci.upper - 2) * viz.scale;
                                var color = ci.covers ? viz.colors.blue : viz.colors.red;

                                ctx.strokeStyle = color;
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                ctx.moveTo(lx, yPos);
                                ctx.lineTo(ux, yPos);
                                ctx.stroke();

                                // caps
                                ctx.beginPath();
                                ctx.moveTo(lx, yPos - 2);
                                ctx.lineTo(lx, yPos + 2);
                                ctx.stroke();
                                ctx.beginPath();
                                ctx.moveTo(ux, yPos - 2);
                                ctx.lineTo(ux, yPos + 2);
                                ctx.stroke();

                                if (ci.covers) coverCount++;
                            }

                            // Legend
                            var rate = (coverCount / 100 * 100).toFixed(0);
                            viz.screenText('Coverage: ' + coverCount + '/100 = ' + rate + '%', viz.width / 2, viz.height - 5, viz.colors.white, 13);

                            // Color legend
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillRect(viz.width - 170, viz.height - 50, 10, 10);
                            viz.screenText('contains ' + String.fromCharCode(956), viz.width - 105, viz.height - 44, viz.colors.blue, 11, 'center');

                            ctx.fillStyle = viz.colors.red;
                            ctx.fillRect(viz.width - 170, viz.height - 35, 10, 10);
                            viz.screenText('misses ' + String.fromCharCode(956), viz.width - 113, viz.height - 29, viz.colors.red, 11, 'center');
                        }

                        draw();

                        VizEngine.createButton(controls, 'Resample', function() {
                            generateIntervals();
                            draw();
                        });

                        VizEngine.createSlider(controls, 'n (sample size)', 5, 100, n, 5, function(val) {
                            n = val;
                            generateIntervals();
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1,\\ldots,X_n \\overset{\\text{iid}}{\\sim} U(0, \\theta)\\) and \\(X_{(n)} = \\max_i X_i\\). Prove that \\(Q = X_{(n)}/\\theta\\) is a pivotal quantity and use it to construct a \\(1-\\alpha\\) confidence interval for \\(\\theta\\).',
                    hint: 'The CDF of \\(X_{(n)}/\\theta\\) is \\(P(X_{(n)}/\\theta \\leq t) = t^n\\) for \\(0 \\leq t \\leq 1\\).',
                    solution: 'Since \\(P(X_{(n)} \\leq x) = (x/\\theta)^n\\) for \\(0 \\leq x \\leq \\theta\\), letting \\(Q = X_{(n)}/\\theta\\) gives \\(P(Q \\leq t) = t^n\\), which does not involve \\(\\theta\\), so \\(Q\\) is a pivotal quantity. Taking \\(P(\\alpha^{1/n} \\leq Q \\leq 1) = 1 - \\alpha\\) and solving yields \\(X_{(n)} \\leq \\theta \\leq X_{(n)} / \\alpha^{1/n}\\).'
                },
                {
                    question: 'A professor claims: "I computed a 95% confidence interval for \\(\\mu\\) to be \\([3.2, 5.8]\\), so \\(\\mu\\) has a 95% probability of being between 3.2 and 5.8." Is this statement correct? Explain.',
                    hint: 'Consider the frequentist interpretation of confidence intervals.',
                    solution: 'This is incorrect. Under the frequentist framework, \\(\\mu\\) is a fixed constant and there is no "probability" associated with it. The correct interpretation is: if we were to repeatedly draw samples and construct 95% confidence intervals, then in the long run 95% of these intervals would contain \\(\\mu\\). For this particular interval \\([3.2, 5.8]\\), \\(\\mu\\) is either in it or not -- it is a deterministic event.'
                },
                {
                    question: 'Why must the distribution of a pivotal quantity not depend on any unknown parameter? What problem would arise if it did?',
                    hint: 'Consider the process of determining quantiles from \\(P(q_1 \\leq Q \\leq q_2) = 1-\\alpha\\).',
                    solution: 'Since the distribution of a pivotal quantity contains no unknown parameters, the quantiles \\(q_1, q_2\\) can be looked up directly from known distribution tables. If the distribution depended on an unknown parameter \\(\\theta\\), then the quantiles would also be functions of \\(\\theta\\), making it impossible to determine them without knowing \\(\\theta\\), and hence impossible to construct the confidence interval.'
                }
            ]
        },

        // ============================================================
        // Section 2: CIs for Normal Mean
        // ============================================================
        {
            id: 'ch08-sec02',
            title: 'CIs for Normal Mean',
            content: `
 <h2>CIs for Normal Mean</h2>

                <p>This section discusses interval estimation for the mean \\(\\mu\\) of a normal population, one of the most classical problems in statistical inference. Depending on whether the variance \\(\\sigma^2\\) is known, different pivotal quantities are required.</p>

 <h3>Known Variance: The Z IntervalZ</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.7 (Z Confidence Interval)</div>
                    <div class="env-body">
                        <p>Let \\(X_1,\\ldots,X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\) with \\(\\sigma^2\\) known. The \\(1-\\alpha\\) confidence interval for \\(\\mu\\) is</p>
                        \\[\\left[\\bar{X} - z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}},\\; \\bar{X} + z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}\\right],\\]
                        <p>where \\(z_{\\alpha/2}\\) is the upper \\(\\alpha/2\\) quantile of the standard normal distribution, i.e., \\(P(Z > z_{\\alpha/2}) = \\alpha/2\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The pivotal quantity is \\(Q = \\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}} \\sim N(0,1)\\). By the symmetry of the standard normal distribution,</p>
                        \\[P\\left(-z_{\\alpha/2} \\leq \\frac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}} \\leq z_{\\alpha/2}\\right) = 1 - \\alpha.\\]
                        <p>Multiplying each part of the inequality by \\(\\sigma/\\sqrt{n}\\), subtracting \\(\\bar{X}\\), and multiplying by \\(-1\\) (note the sign reversal) gives</p>
                        \\[P\\left(\\bar{X} - z_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}} \\leq \\mu \\leq \\bar{X} + z_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}}\\right) = 1-\\alpha.\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
 <p>The half-width of the Z interval, \\(z_{\\alpha/2} \\cdot \\sigma/\\sqrt{n}\\), is also called the <strong>margin of error</strong>. Common values: when \\(\\alpha = 0.05\\), \\(z_{0.025} = 1.96\\); when \\(\\alpha = 0.01\\), \\(z_{0.005} = 2.576\\).</p>
                    </div>
                </div>

 <h3>Unknown Variance: The t Intervalt</h3>

                <p>In practice, the variance \\(\\sigma^2\\) is usually unknown and must be replaced by the sample variance \\(S^2 = \\frac{1}{n-1}\\sum_{i=1}^n (X_i - \\bar{X})^2\\). In this case, the distribution of the pivotal quantity changes from the standard normal to Student's t distribution.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.8 (t Confidence Interval)</div>
                    <div class="env-body">
                        <p>Let \\(X_1,\\ldots,X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\) with \\(\\sigma^2\\) unknown. The \\(1-\\alpha\\) confidence interval for \\(\\mu\\) is</p>
                        \\[\\left[\\bar{X} - t_{\\alpha/2,\\, n-1} \\frac{S}{\\sqrt{n}},\\; \\bar{X} + t_{\\alpha/2,\\, n-1} \\frac{S}{\\sqrt{n}}\\right],\\]
                        <p>where \\(t_{\\alpha/2,\\,n-1}\\) is the upper \\(\\alpha/2\\) quantile of the t distribution with \\(n-1\\) degrees of freedom.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By the properties of normal populations, \\(\\bar{X}\\) and \\(S^2\\) are independent, and</p>
                        \\[T = \\frac{\\bar{X} - \\mu}{S/\\sqrt{n}} = \\frac{(\\bar{X} - \\mu)/(\\sigma/\\sqrt{n})}{\\sqrt{S^2/\\sigma^2}} = \\frac{Z}{\\sqrt{\\chi^2_{n-1}/(n-1)}} \\sim t_{n-1},\\]
                        <p>where \\(Z \\sim N(0,1)\\) and \\((n-1)S^2/\\sigma^2 \\sim \\chi^2_{n-1}\\). Since the distribution of \\(T\\) contains no unknown parameters, it is a pivotal quantity. The remaining steps follow those of the Z interval.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition: Z Interval vs t Interval</div>
                    <div class="env-body">
                        <p>The t distribution has heavier tails than the standard normal, so \\(t_{\\alpha/2, n-1} > z_{\\alpha/2}\\). This means the t interval is wider than the Z interval -- it "pays" for the additional uncertainty introduced by replacing \\(\\sigma\\) with \\(S\\). As \\(n \\to \\infty\\), \\(t_{n-1} \\to N(0,1)\\), and the two intervals converge.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 8.9</div>
                    <div class="env-body">
                        <p>Battery lifetimes from a factory follow a normal distribution. A random sample of \\(n=16\\) batteries yields \\(\\bar{x} = 300\\) hours and \\(s = 20\\) hours. Find the 95% confidence interval for \\(\\mu\\).</p>
                        <p>From the table, \\(t_{0.025, 15} = 2.131\\). The confidence interval is</p>
                        \\[300 \\pm 2.131 \\times \\frac{20}{\\sqrt{16}} = 300 \\pm 10.66 = [289.34,\; 310.66].\\]
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="z-vs-t-intervals"></div>
            `,
            visualizations: [
                {
                    id: 'z-vs-t-intervals',
 title:'Interactive Demo: Z Interval vs t Interval Zvs t',
                    description: 'Compare confidence interval widths when variance is known vs unknown; observe convergence as sample size grows',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 280, originY: 320, scale: 50
                        });

                        var n = 10;
                        var trueMu = 0;
                        var trueSigma = 1;

                        // Approximate t critical value using Cornish-Fisher expansion
                        function tCritical(alpha2, df) {
                            var z = 1.96; // z_{0.025}
                            if (alpha2 !== 0.025) {
                                z = 2.576; // z_{0.005} for 99%
                            }
                            var g1 = (z * z * z + z) / (4 * df);
                            var g2 = (5 * z * z * z * z * z + 16 * z * z * z + 3 * z) / (96 * df * df);
                            return z + g1 + g2;
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            var zCrit = 1.96;
                            var tCrit = tCritical(0.025, n - 1);

                            // Generate one sample
                            var sample = VizEngine.sampleArray(function() { return VizEngine.randomNormal(trueMu, trueSigma); }, n);
                            var xbar = VizEngine.mean(sample);
                            var s = Math.sqrt(VizEngine.sampleVariance(sample));

                            var zHalf = zCrit * trueSigma / Math.sqrt(n);
                            var tHalf = tCrit * s / Math.sqrt(n);

                            // Draw density backgrounds
                            var pdfScale = 3.5;

                            // Normal PDF
                            viz.drawFunction(function(x) { return VizEngine.normalPDF(x, 0, 1) * pdfScale; }, -4, 4, viz.colors.blue + '55', 1.5);

                            // t PDF
                            viz.drawFunction(function(x) { return VizEngine.tPDF(x, n - 1) * pdfScale; }, -4, 4, viz.colors.orange + '55', 1.5);

                            // Axes
                            viz.drawSegment(-5, 0, 5, 0, viz.colors.axis, 1);

                            // True mu line
                            viz.drawSegment(trueMu, -0.3, trueMu, 2.5, viz.colors.yellow, 2, true);
                            viz.drawText(String.fromCharCode(956), trueMu, 2.7, viz.colors.yellow, 12);

                            // Z interval (upper bar)
                            var yZ = 1.8;
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 4;
                            var lz = viz.toScreen(xbar - zHalf, yZ);
                            var rz = viz.toScreen(xbar + zHalf, yZ);
                            ctx.beginPath(); ctx.moveTo(lz[0], lz[1]); ctx.lineTo(rz[0], rz[1]); ctx.stroke();
                            // caps
                            ctx.lineWidth = 2;
                            var capH = 0.15;
                            viz.drawSegment(xbar - zHalf, yZ - capH, xbar - zHalf, yZ + capH, viz.colors.blue, 2);
                            viz.drawSegment(xbar + zHalf, yZ - capH, xbar + zHalf, yZ + capH, viz.colors.blue, 2);
                            viz.drawPoint(xbar, yZ, viz.colors.blue, null, 4);
                            viz.drawText('Z interval', -4.2, yZ, viz.colors.blue, 12, 'left');

                            // t interval (lower bar)
                            var yT = 1.2;
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 4;
                            var lt = viz.toScreen(xbar - tHalf, yT);
                            var rt = viz.toScreen(xbar + tHalf, yT);
                            ctx.beginPath(); ctx.moveTo(lt[0], lt[1]); ctx.lineTo(rt[0], rt[1]); ctx.stroke();
                            ctx.lineWidth = 2;
                            viz.drawSegment(xbar - tHalf, yT - capH, xbar - tHalf, yT + capH, viz.colors.orange, 2);
                            viz.drawSegment(xbar + tHalf, yT - capH, xbar + tHalf, yT + capH, viz.colors.orange, 2);
                            viz.drawPoint(xbar, yT, viz.colors.orange, null, 4);
                            viz.drawText('t interval', -4.2, yT, viz.colors.orange, 12, 'left');

                            // Info text
                            viz.screenText('n = ' + n + ' df = ' + (n - 1), viz.width / 2, 18, viz.colors.white, 13);
                            viz.screenText('Z half-width: ' + zHalf.toFixed(3) + ' t half-width: ' + tHalf.toFixed(3), viz.width / 2, 36, viz.colors.text, 11);
                            viz.screenText('z_0.025 = ' + zCrit.toFixed(3) + ' t_0.025,' + (n - 1) + ' = ' + tCrit.toFixed(3), viz.width / 2, 52, viz.colors.text, 11);

                            // Legend
                            viz.screenText('Blue: N(0,1) density Orange: t(' + (n - 1) + ') density', viz.width / 2, viz.height - 10, viz.colors.text, 10);
                        }

                        draw();

                        VizEngine.createSlider(controls, 'n', 3, 100, n, 1, function(val) {
                            n = Math.round(val);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Resample', function() {
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1,\\ldots,X_{25} \\overset{\\text{iid}}{\\sim} N(\\mu, 9)\\) (\\(\\sigma^2 = 9\\) known) with observed \\(\\bar{x} = 12.5\\). (a) Construct a 95% confidence interval for \\(\\mu\\); (b) What is the minimum sample size needed so that the half-width does not exceed 0.5?',
                    hint: '(a) Use the Z interval formula; (b) Solve \\(z_{0.025} \\cdot \\sigma / \\sqrt{n} \\leq 0.5\\) for \\(n\\).',
                    solution: '(a) \\(\\bar{x} \\pm z_{0.025} \\cdot \\sigma/\\sqrt{n} = 12.5 \\pm 1.96 \\times 3/5 = 12.5 \\pm 1.176 = [11.324, 13.676]\\). (b) We need \\(1.96 \\times 3/\\sqrt{n} \\leq 0.5\\), i.e., \\(\\sqrt{n} \\geq 11.76\\), so \\(n \\geq 138.3\\). Therefore the minimum sample size is \\(n = 139\\).'
                },
                {
                    question: 'When the sample size \\(n\\) increases from 5 to 50, by approximately what factor does the width of a 95% t confidence interval shrink? (Hint: ignore changes in the t quantile and consider only the \\(1/\\sqrt{n}\\) effect.)',
                    hint: 'The confidence interval width is proportional to \\(1/\\sqrt{n}\\).',
                    solution: 'Ignoring the change in the t quantile, the width ratio is approximately \\(\\sqrt{5}/\\sqrt{50} = 1/\\sqrt{10} \\approx 0.316\\), i.e., the width shrinks to about 31.6% of the original. In reality, \\(t_{0.025,4} \\approx 2.776\\) while \\(t_{0.025,49} \\approx 2.010\\), so the actual shrinkage ratio is approximately \\((2.010/2.776) \\times (1/\\sqrt{10}) \\approx 0.229\\), shrinking to about 23%.'
                },
                {
                    question: 'Prove that as the degrees of freedom \\(\\nu \\to \\infty\\), the \\(t_{\\nu}\\) distribution converges to \\(N(0,1)\\).',
                    hint: 'Use the definition \\(t_{\\nu} = Z / \\sqrt{\\chi^2_{\\nu}/\\nu}\\) and the law of large numbers.',
                    solution: 'By definition, \\(T = Z/\\sqrt{V/\\nu}\\) where \\(V \\sim \\chi^2_{\\nu}\\) and \\(Z \\sim N(0,1)\\) are independent. Since \\(V/\\nu \\xrightarrow{P} 1\\) (by the law of large numbers, as \\(E[V/\\nu]=1\\) and \\(\\operatorname{Var}(V/\\nu)=2/\\nu \\to 0\\)), by Slutsky\'s theorem, \\(T = Z/\\sqrt{V/\\nu} \\xrightarrow{d} Z/1 = Z \\sim N(0,1)\\).'
                }
            ]
        },

        // ============================================================
        // Section 3: CIs for Normal Variance
        // ============================================================
        {
            id: 'ch08-sec03',
            title: 'CIs for Normal Variance',
            content: `
 <h2>CIs for Normal Variance</h2>

                <p>Beyond the mean \\(\\mu\\), the variance \\(\\sigma^2\\) is also of great importance in areas such as quality control and risk assessment. Constructing a confidence interval for \\(\\sigma^2\\) requires the \\(\\chi^2\\) distribution.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.10 (\\(\\chi^2\\) Confidence Interval)</div>
                    <div class="env-body">
                        <p>Let \\(X_1,\\ldots,X_n \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\) with \\(\\mu\\) unknown. The \\(1-\\alpha\\) confidence interval for \\(\\sigma^2\\) is</p>
                        \\[\\left[\\frac{(n-1)S^2}{\\chi^2_{\\alpha/2,\\,n-1}},\\; \\frac{(n-1)S^2}{\\chi^2_{1-\\alpha/2,\\,n-1}}\\right],\\]
                        <p>where \\(\\chi^2_{\\alpha/2,\\,n-1}\\) and \\(\\chi^2_{1-\\alpha/2,\\,n-1}\\) are the upper \\(\\alpha/2\\) and upper \\(1-\\alpha/2\\) quantiles of the \\(\\chi^2_{n-1}\\) distribution, respectively.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The pivotal quantity is</p>
                        \\[Q = \\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2_{n-1}.\\]
                        <p>Choose quantiles such that \\(P(\\chi^2_{1-\\alpha/2,\\,n-1} \\leq Q \\leq \\chi^2_{\\alpha/2,\\,n-1}) = 1-\\alpha\\). Taking reciprocals of the inequality</p>
                        \\[\\chi^2_{1-\\alpha/2} \\leq \\frac{(n-1)S^2}{\\sigma^2} \\leq \\chi^2_{\\alpha/2}\\]
                        <p>(note the sign reversal when inverting) and multiplying by \\((n-1)S^2\\) yields</p>
                        \\[\\frac{(n-1)S^2}{\\chi^2_{\\alpha/2}} \\leq \\sigma^2 \\leq \\frac{(n-1)S^2}{\\chi^2_{1-\\alpha/2}}.\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning: Asymmetric Interval</div>
                    <div class="env-body">
                        <p>Since the \\(\\chi^2\\) distribution is <strong>right-skewed</strong> (asymmetric), the confidence interval is not symmetric about \\(S^2\\). The upper bound is farther from \\(S^2\\). This is fundamentally different from the symmetric intervals for the normal mean.</p>
                        <p>Also note the quantile notation convention: \\(\\chi^2_{\\alpha/2,\\,n-1}\\) denotes the quantile with right-tail area \\(\\alpha/2\\) (a larger value), while \\(\\chi^2_{1-\\alpha/2,\\,n-1}\\) denotes the quantile with right-tail area \\(1-\\alpha/2\\) (a smaller value).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 8.11</div>
                    <div class="env-body">
                        <p>A random sample of \\(n=20\\) resistors yields a sample variance of \\(s^2 = 0.045\\,\\Omega^2\\). Find the 95% confidence interval for \\(\\sigma^2\\).</p>
                        <p>With degrees of freedom \\(\\nu = 19\\), the table gives \\(\\chi^2_{0.025, 19} = 32.852\\) and \\(\\chi^2_{0.975, 19} = 8.907\\).</p>
                        \\[\\left[\\frac{19 \\times 0.045}{32.852},\; \\frac{19 \\times 0.045}{8.907}\\right] = [0.0260, 0.0960]\;\\Omega^2.\\]
                        <p>Note that the interval is not centered at \\(s^2 = 0.045\\): the lower bound is 0.019 away from \\(s^2\\), while the upper bound is 0.051 away.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark: CI for \\(\\sigma\\)</div>
                    <div class="env-body">
                        <p>If a confidence interval for the standard deviation \\(\\sigma\\) is needed, simply take the square root of both endpoints of the \\(\\sigma^2\\) interval:</p>
                        \\[\\left[\\sqrt{\\frac{(n-1)S^2}{\\chi^2_{\\alpha/2,\\,n-1}}},\; \\sqrt{\\frac{(n-1)S^2}{\\chi^2_{1-\\alpha/2,\\,n-1}}}\\right].\\]
                        <p>This exploits the monotonicity of the square root function.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark: Sensitivity to the Normality Assumption</div>
                    <div class="env-body">
                        <p>The \\(\\chi^2\\) confidence interval for variance is <strong>highly sensitive to the normality assumption</strong>. Even slight departures from normality (such as mild skewness or heavy tails) can cause the actual coverage probability to deviate severely from the nominal level. This contrasts with the t interval for the mean, which is much more robust to departures from normality (especially for large samples).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="chi2-ci-viz"></div>
            `,
            visualizations: [
                {
                    id: 'chi2-ci-viz',
 title:'Interactive Demo: Chi-Squared Confidence Interval',
                    description: 'Visualize the asymmetric confidence interval for variance on the chi-squared distribution',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 50, originY: 300, scale: 16
                        });

                        var df = 15;
                        var alphaVal = 0.05;

                        // Numerical chi-squared CDF via integration
                        function chiSquaredCDF(x, k) {
                            if (x <= 0) return 0;
                            var steps = 1000;
                            var dx2 = x / steps;
                            var sum = 0;
                            for (var i = 0; i < steps; i++) {
                                var t = (i + 0.5) * dx2;
                                sum += VizEngine.chiSquaredPDF(t, k) * dx2;
                            }
                            return Math.min(sum, 1);
                        }

                        // Find quantile by bisection
                        function chiSquaredQuantile(p, k) {
                            var lo = 0, hi = k + 10 * Math.sqrt(2 * k);
                            for (var iter = 0; iter < 80; iter++) {
                                var mid = (lo + hi) / 2;
                                if (chiSquaredCDF(mid, k) < p) lo = mid;
                                else hi = mid;
                            }
                            return (lo + hi) / 2;
                        }

                        function draw() {
                            viz.clear();

                            var ctx = viz.ctx;
                            var currentDf = df;
                            var xMax = Math.max(currentDf + 4 * Math.sqrt(2 * currentDf), 30);

                            // Draw PDF
                            viz.drawFunction(function(x) { return VizEngine.chiSquaredPDF(x, currentDf); }, 0.01, xMax, viz.colors.blue, 2.5);

                            // Draw axis
                            viz.drawSegment(0, 0, xMax, 0, viz.colors.axis, 1.5);
                            // Y axis
                            viz.drawSegment(0, 0, 0, 0.25, viz.colors.axis, 1.5);

                            // X axis labels
                            var step = xMax > 40 ? 10 : 5;
                            for (var x = step; x < xMax; x += step) {
                                viz.drawText(x.toString(), x, -0.015, viz.colors.text, 11);
                            }

                            // Find quantiles
                            var lower = chiSquaredQuantile(alphaVal / 2, currentDf);
                            var upper = chiSquaredQuantile(1 - alphaVal / 2, currentDf);

                            // Shade rejection regions
                            viz.shadeUnder(function(x) { return VizEngine.chiSquaredPDF(x, currentDf); }, 0.01, lower, viz.colors.red + '55');
                            viz.shadeUnder(function(x) { return VizEngine.chiSquaredPDF(x, currentDf); }, upper, xMax, viz.colors.red + '55');

                            // Shade acceptance region
                            viz.shadeUnder(function(x) { return VizEngine.chiSquaredPDF(x, currentDf); }, lower, upper, viz.colors.green + '33');

                            // Mark quantiles
                            viz.drawSegment(lower, 0, lower, VizEngine.chiSquaredPDF(lower, currentDf), viz.colors.yellow, 1.5, true);
                            viz.drawSegment(upper, 0, upper, VizEngine.chiSquaredPDF(upper, currentDf), viz.colors.yellow, 1.5, true);

                            viz.drawText(lower.toFixed(2), lower, -0.03, viz.colors.yellow, 11);
                            viz.drawText(upper.toFixed(2), upper, -0.03, viz.colors.yellow, 11);

                            // Title and legend
                            var pctStr = ((1 - alphaVal) * 100).toFixed(0);
                            viz.screenText('Chi-squared(' + currentDf + ') — ' + pctStr + '% CI region', viz.width / 2, 16, viz.colors.white, 14, 'center');

                            // Show asymmetry info
                            var mean = currentDf;
                            viz.screenText('Mean = ' + mean, viz.width - 15, 38, viz.colors.text, 11, 'right');
                            viz.screenText('Lower quantile: ' + lower.toFixed(3), viz.width - 15, 54, viz.colors.text, 11, 'right');
                            viz.screenText('Upper quantile: ' + upper.toFixed(3), viz.width - 15, 70, viz.colors.text, 11, 'right');
                            var ratio = (upper / lower).toFixed(2);
                            viz.screenText('Upper/Lower ratio: ' + ratio, viz.width - 15, 86, viz.colors.orange, 11, 'right');
                        }

                        draw();

                        VizEngine.createSlider(controls, 'Degrees of freedom', 2, 40, df, 1, function(val) {
                            df = Math.round(val);
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Confidence level (%)', 80, 99, (1 - alphaVal) * 100, 1, function(val) {
                            alphaVal = 1 - val / 100;
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1,\\ldots,X_{26} \\overset{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)\\) with observed \\(s^2 = 4.5\\). (a) Find the 90% confidence interval for \\(\\sigma^2\\); (b) Find the 90% confidence interval for \\(\\sigma\\). Given: \\(\\chi^2_{0.05,25} = 37.652\\), \\(\\chi^2_{0.95,25} = 14.611\\).',
                    hint: 'Use the \\(\\chi^2\\) interval formula; for (b), take square roots.',
                    solution: '(a) 90% CI for \\(\\sigma^2\\): \\([25 \\times 4.5 / 37.652, \; 25 \\times 4.5 / 14.611] = [2.989, 7.700]\\). (b) Taking square roots gives the 90% CI for \\(\\sigma\\): \\([\\sqrt{2.989}, \\sqrt{7.700}] = [1.729, 2.775]\\).'
                },
                {
                    question: 'Explain why the \\(\\chi^2\\) confidence interval is not symmetric about \\(S^2\\), and describe under what conditions the interval becomes approximately symmetric.',
                    hint: 'Consider the skewness of the \\(\\chi^2\\) distribution and the central limit theorem.',
                    solution: 'The \\(\\chi^2_k\\) distribution is right-skewed with skewness \\(2\\sqrt{2/k}\\). Taking reciprocals of \\((n-1)S^2/\\sigma^2\\) means that large \\(\\chi^2\\) values correspond to small \\(\\sigma^2\\) estimates, making the distances from \\(S^2\\) to the upper and lower bounds unequal. When the degrees of freedom \\(k = n-1\\) are large, by the CLT, \\(\\chi^2_k\\) is approximately \\(N(k, 2k)\\) and the distribution becomes nearly symmetric, so the confidence interval also becomes approximately symmetric about \\(S^2\\).'
                },
                {
                    question: 'If we simultaneously construct 95% confidence intervals for both \\(\\mu\\) and \\(\\sigma^2\\), can we guarantee that the probability of both intervals covering their respective parameters is at least 90%? Justify using the Bonferroni inequality.',
                    hint: '\\(P(A \\cap B) \\geq 1 - P(A^c) - P(B^c)\\).',
                    solution: 'Let \\(A\\) = "the CI for \\(\\mu\\) covers \\(\\mu\\)" and \\(B\\) = "the CI for \\(\\sigma^2\\) covers \\(\\sigma^2\\)." By the Bonferroni inequality: \\(P(A \\cap B) \\geq 1 - P(A^c) - P(B^c) = 1 - 0.05 - 0.05 = 0.90\\). So the simultaneous coverage probability is at least 90%. In fact, since \\(\\bar{X}\\) and \\(S^2\\) are independent for normal populations, \\(P(A \\cap B) = P(A) \\cdot P(B) = 0.95^2 = 0.9025\\), slightly above 90%.'
                }
            ]
        },

        // ============================================================
        // Section 4: Two-Sample CIs
        // ============================================================
        {
            id: 'ch08-sec04',
            title: 'Two-Sample CIs',
            content: `
 <h2>Two-Sample CIs</h2>

                <p>Many practical problems require comparing parameters of two populations, such as comparing the efficacy of two drugs or the precision of two production lines. This section discusses interval estimation for differences of parameters from two normal populations.</p>

 <h3>Difference of Means: Equal Variances (Pooled t Interval)</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.12 (Pooled t Interval)</div>
                    <div class="env-body">
                        <p>Let \\(X_1,\\ldots,X_{n_1} \\overset{\\text{iid}}{\\sim} N(\\mu_1, \\sigma^2)\\) and \\(Y_1,\\ldots,Y_{n_2} \\overset{\\text{iid}}{\\sim} N(\\mu_2, \\sigma^2)\\) be independent, with common but unknown variance \\(\\sigma^2\\). The \\(1-\\alpha\\) confidence interval for \\(\\mu_1 - \\mu_2\\) is</p>
                        \\[(\\bar{X} - \\bar{Y}) \\pm t_{\\alpha/2,\\, n_1+n_2-2} \\cdot S_p \\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}},\\]
 <p>where the <strong>pooled standard deviation</strong> is</p>
                        \\[S_p = \\sqrt{\\frac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1 + n_2 - 2}}.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Under the equal variance assumption, \\(\\bar{X} - \\bar{Y} \\sim N\\big(\\mu_1 - \\mu_2,\; \\sigma^2(1/n_1 + 1/n_2)\\big)\\). The pooled estimator \\(S_p^2\\) satisfies</p>
                        \\[\\frac{(n_1+n_2-2)S_p^2}{\\sigma^2} = \\frac{(n_1-1)S_1^2}{\\sigma^2} + \\frac{(n_2-1)S_2^2}{\\sigma^2} \\sim \\chi^2_{n_1+n_2-2},\\]
                        <p>and is independent of \\(\\bar{X} - \\bar{Y}\\). Therefore</p>
                        \\[T = \\frac{(\\bar{X} - \\bar{Y}) - (\\mu_1 - \\mu_2)}{S_p\\sqrt{1/n_1 + 1/n_2}} \\sim t_{n_1+n_2-2}\\]
                        <p>is a pivotal quantity, from which the confidence interval follows.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

 <h3>Difference of Means: Unequal Variances (Welch's t Interval)</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.13 (Welch's t Interval)</div>
                    <div class="env-body">
                        <p>Let \\(X_i \\overset{\\text{iid}}{\\sim} N(\\mu_1, \\sigma_1^2)\\) and \\(Y_j \\overset{\\text{iid}}{\\sim} N(\\mu_2, \\sigma_2^2)\\) be independent with \\(\\sigma_1^2 \\neq \\sigma_2^2\\) (the Behrens-Fisher problem). Welch's approximate \\(1-\\alpha\\) confidence interval is</p>
                        \\[(\\bar{X} - \\bar{Y}) \\pm t_{\\alpha/2,\\,\\hat{\\nu}} \\sqrt{\\frac{S_1^2}{n_1} + \\frac{S_2^2}{n_2}},\\]
                        <p>where the approximate degrees of freedom (Welch-Satterthwaite) are</p>
                        \\[\\hat{\\nu} = \\frac{\\left(\\frac{S_1^2}{n_1} + \\frac{S_2^2}{n_2}\\right)^2}{\\frac{(S_1^2/n_1)^2}{n_1-1} + \\frac{(S_2^2/n_2)^2}{n_2-1}}.\\]
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark: Pooled vs Welch</div>
                    <div class="env-body">
                        <p>Welch's t test is more robust when variances are unequal. Even when variances are equal, the Welch method achieves coverage close to the nominal level. For this reason, many statisticians recommend <strong>using the Welch method by default</strong>. The pooled t has a slight power advantage when variances are truly equal.</p>
                    </div>
                </div>

 <h3>Variance Ratio: The F IntervalF</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.14 (F Confidence Interval)</div>
                    <div class="env-body">
                        <p>Let two independent normal samples have sample variances \\(S_1^2\\) and \\(S_2^2\\). The \\(1-\\alpha\\) confidence interval for \\(\\sigma_1^2 / \\sigma_2^2\\) is</p>
                        \\[\\left[\\frac{S_1^2}{S_2^2} \\cdot \\frac{1}{F_{\\alpha/2,\\,n_1-1,\\,n_2-1}},\;\; \\frac{S_1^2}{S_2^2} \\cdot F_{\\alpha/2,\\,n_2-1,\\,n_1-1}\\right],\\]
                        <p>where \\(F_{\\alpha/2,\\,d_1,\\,d_2}\\) is the upper \\(\\alpha/2\\) quantile of the \\(F(d_1, d_2)\\) distribution.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The pivotal quantity is</p>
                        \\[F = \\frac{S_1^2 / \\sigma_1^2}{S_2^2 / \\sigma_2^2} = \\frac{S_1^2}{S_2^2} \\cdot \\frac{\\sigma_2^2}{\\sigma_1^2} \\sim F(n_1-1, n_2-1).\\]
                        <p>From \\(P(F_{1-\\alpha/2} \\leq F \\leq F_{\\alpha/2}) = 1 - \\alpha\\), solve for \\(\\sigma_1^2/\\sigma_2^2\\). Use the identity \\(F_{1-\\alpha/2,\\,d_1,\\,d_2} = 1/F_{\\alpha/2,\\,d_2,\\,d_1}\\) to simplify the expression.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

 <h3>Paired Samples</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.15 (Paired t Interval)</div>
                    <div class="env-body">
                        <p>Let \\((X_i, Y_i)\\) be \\(n\\) paired observations and define \\(D_i = X_i - Y_i\\). If \\(D_i \\overset{\\text{iid}}{\\sim} N(\\mu_D, \\sigma_D^2)\\), the \\(1-\\alpha\\) confidence interval for \\(\\mu_D = \\mu_1 - \\mu_2\\) is</p>
                        \\[\\bar{D} \\pm t_{\\alpha/2,\\,n-1} \\frac{S_D}{\\sqrt{n}},\\]
                        <p>where \\(\\bar{D}\\) and \\(S_D\\) are the sample mean and sample standard deviation of the differences, respectively.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition: Why Is Pairing Better Than Independence?</div>
                    <div class="env-body">
                        <p>A paired design reduces variability by controlling for individual differences. For example, when testing a drug's effect on blood pressure, the "before" and "after" measurements of the same patient form a pair. The difference \\(D_i\\) eliminates inter-individual baseline variation, so \\(\\sigma_D^2\\) is typically much smaller than \\(\\sigma_1^2 + \\sigma_2^2\\), yielding a shorter confidence interval.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="two-sample-ci-viz"></div>
            `,
            visualizations: [
                {
                    id: 'two-sample-ci-viz',
 title:'Interactive Demo: Two-Sample CI Comparison',
                    description: 'Compare coverage rates of Pooled t and Welch t methods under different variance ratios',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 420,
                            originX: 280, originY: 340, scale: 70
                        });

                        var m = 15;
                        var n = 15;
                        var mu1 = 0;
                        var mu2 = 0;
                        var sigma1 = 1;
                        var sigma2 = 1;
                        var numSims = 200;

                        function tQuantile(p, nu) {
                            // Approximate t CDF via integration of tPDF
                            function tCDF(x, df) {
                                var steps = 2000;
                                var lo = -15;
                                var dx2 = (x - lo) / steps;
                                var sum = 0;
                                for (var i = 0; i < steps; i++) {
                                    var t = lo + (i + 0.5) * dx2;
                                    sum += VizEngine.tPDF(t, df) * dx2;
                                }
                                return sum;
                            }
                            var lo2 = -10, hi2 = 10;
                            for (var iter = 0; iter < 60; iter++) {
                                var mid2 = (lo2 + hi2) / 2;
                                if (tCDF(mid2, nu) < p) lo2 = mid2;
                                else hi2 = mid2;
                            }
                            return (lo2 + hi2) / 2;
                        }

                        function simulate() {
                            var pooledCov = 0;
                            var welchCov = 0;
                            var trueDiff = mu1 - mu2;

                            for (var sim = 0; sim < numSims; sim++) {
                                var xs = VizEngine.sampleArray(function() { return VizEngine.randomNormal(mu1, sigma1); }, m);
                                var ys = VizEngine.sampleArray(function() { return VizEngine.randomNormal(mu2, sigma2); }, n);

                                var xbar = VizEngine.mean(xs);
                                var ybar = VizEngine.mean(ys);
                                var s1sq = VizEngine.sampleVariance(xs);
                                var s2sq = VizEngine.sampleVariance(ys);
                                var diff = xbar - ybar;

                                // Pooled t
                                var sp2 = ((m - 1) * s1sq + (n - 1) * s2sq) / (m + n - 2);
                                var sp = Math.sqrt(sp2);
                                var sePooled = sp * Math.sqrt(1 / m + 1 / n);
                                var tCritPooled = tQuantile(1 - 0.025, m + n - 2);
                                var pLower = diff - tCritPooled * sePooled;
                                var pUpper = diff + tCritPooled * sePooled;
                                if (pLower <= trueDiff && trueDiff <= pUpper) pooledCov++;

                                // Welch
                                var seWelch = Math.sqrt(s1sq / m + s2sq / n);
                                var nuStar = Math.pow(s1sq / m + s2sq / n, 2) /
                                    (Math.pow(s1sq / m, 2) / (m - 1) + Math.pow(s2sq / n, 2) / (n - 1));
                                var tCritWelch = tQuantile(1 - 0.025, Math.max(1, Math.floor(nuStar)));
                                var wLower = diff - tCritWelch * seWelch;
                                var wUpper = diff + tCritWelch * seWelch;
                                if (wLower <= trueDiff && trueDiff <= wUpper) welchCov++;
                            }

                            return {
                                pooledCoverage: pooledCov / numSims,
                                welchCoverage: welchCov / numSims
                            };
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Draw the two population distributions
                            var currentSigma1 = sigma1;
                            var currentSigma2 = sigma2;
                            viz.drawFunction(function(x) { return VizEngine.normalPDF(x, mu1, currentSigma1); }, -4, 4, viz.colors.blue, 2);
                            viz.drawFunction(function(x) { return VizEngine.normalPDF(x, mu2, currentSigma2); }, -4, 4, viz.colors.orange, 2);

                            viz.drawAxes();

                            viz.screenText('Population 1: N(0, ' + sigma1.toFixed(1) + String.fromCharCode(178) + ')', 15, 18, viz.colors.blue, 12, 'left');
                            viz.screenText('Population 2: N(0, ' + sigma2.toFixed(1) + String.fromCharCode(178) + ')', 15, 36, viz.colors.orange, 12, 'left');
                            viz.screenText('Variance ratio: ' + (sigma1 * sigma1 / (sigma2 * sigma2)).toFixed(2), 15, 54, viz.colors.white, 12, 'left');

                            // Simulate and show coverage
                            var result = simulate();
                            var pooledColor = Math.abs(result.pooledCoverage - 0.95) < 0.03 ? viz.colors.green : viz.colors.red;
                            var welchColor = Math.abs(result.welchCoverage - 0.95) < 0.03 ? viz.colors.green : viz.colors.red;

                            viz.screenText('Coverage (' + numSims + ' sims, nominal 95%):', viz.width / 2, viz.height - 70, viz.colors.white, 13, 'center');
                            viz.screenText('Pooled t: ' + (result.pooledCoverage * 100).toFixed(1) + '%', viz.width / 2 - 80, viz.height - 48, pooledColor, 14, 'center');
                            viz.screenText('Welch t: ' + (result.welchCoverage * 100).toFixed(1) + '%', viz.width / 2 + 80, viz.height - 48, welchColor, 14, 'center');

                            if (sigma1 !== sigma2) {
                                viz.screenText('Unequal variances: Welch is more reliable!', viz.width / 2, viz.height - 25, viz.colors.yellow, 11, 'center');
                            }
                        }

                        draw();

                        VizEngine.createSlider(controls, String.fromCharCode(963) + String.fromCharCode(8321), 0.5, 3, sigma1, 0.1, function(val) {
                            sigma1 = val;
                            draw();
                        });

                        VizEngine.createSlider(controls, String.fromCharCode(963) + String.fromCharCode(8322), 0.5, 3, sigma2, 0.1, function(val) {
                            sigma2 = val;
                            draw();
                        });

                        VizEngine.createButton(controls, 'Re-simulate', function() {
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Two independent samples: Group 1 has \\(n_1 = 15\\), \\(\\bar{x} = 42.3\\), \\(s_1 = 5.1\\); Group 2 has \\(n_2 = 12\\), \\(\\bar{y} = 38.7\\), \\(s_2 = 4.8\\). Assuming equal variances, find the 95% pooled t confidence interval for \\(\\mu_1 - \\mu_2\\). Given: \\(t_{0.025, 25} = 2.060\\).',
                    hint: 'First compute \\(S_p\\), then substitute into the formula.',
                    solution: '\\(S_p^2 = (14 \\times 5.1^2 + 11 \\times 4.8^2)/25 = (364.14 + 253.44)/25 = 24.703\\), so \\(S_p = 4.970\\). \\(\\text{SE} = 4.970\\sqrt{1/15 + 1/12} = 4.970 \\times 0.3892 = 1.934\\). CI: \\((42.3 - 38.7) \\pm 2.060 \\times 1.934 = 3.6 \\pm 3.984 = [-0.384, 7.584]\\). The interval contains 0, so at the 95% level we cannot conclude that the two means differ significantly.'
                },
                {
                    question: 'Explain the intuition behind the Welch-Satterthwaite degrees of freedom formula. Why does it approximately equal \\(n_1 + n_2 - 2\\) when \\(\\sigma_1^2 = \\sigma_2^2\\)?',
                    hint: 'Consider simplifying the formula when \\(S_1^2/n_1 \\approx S_2^2/n_2\\).',
                    solution: 'The Welch-Satterthwaite formula approximates the degrees of freedom of a scaled \\(\\chi^2\\) distribution for \\((S_1^2/n_1 + S_2^2/n_2)\\) via moment matching. When \\(\\sigma_1^2 = \\sigma_2^2 = \\sigma^2\\), \\(S_1^2/n_1 \\approx S_2^2/n_2 \\approx \\sigma^2/n\\) (if \\(n_1 \\approx n_2\\)), the numerator becomes \\((\\sigma^2/n_1 + \\sigma^2/n_2)^2\\) and the denominator becomes \\((\\sigma^2/n_1)^2/(n_1-1) + (\\sigma^2/n_2)^2/(n_2-1)\\). Simplification yields \\(\\hat{\\nu} \\approx n_1 + n_2 - 2\\), reducing to the pooled t degrees of freedom.'
                },
                {
                    question: 'In a drug trial, the blood pressure differences (before minus after) for 10 patients are \\(d_1=5, d_2=3, d_3=8, d_4=2, d_5=6, d_6=4, d_7=7, d_8=1, d_9=5, d_{10}=4\\). Construct a 95% paired t confidence interval for \\(\\mu_D\\). Given: \\(t_{0.025,9} = 2.262\\).',
                    hint: 'First compute \\(\\bar{d}\\) and \\(s_D\\).',
                    solution: '\\(\\bar{d} = (5+3+8+2+6+4+7+1+5+4)/10 = 4.5\\). \\(s_D^2 = \\frac{1}{9}\\sum(d_i - 4.5)^2 = \\frac{(0.25+2.25+12.25+6.25+2.25+0.25+6.25+12.25+0.25+0.25)}{9} = \\frac{42.5}{9} = 4.722\\), so \\(s_D = 2.173\\). CI: \\(4.5 \\pm 2.262 \\times 2.173/\\sqrt{10} = 4.5 \\pm 1.554 = [2.946, 6.054]\\). The interval does not contain 0, indicating a significant blood pressure reduction.'
                },
                {
                    question: 'Prove that for paired data \\((X_i, Y_i)\\), when the correlation coefficient \\(\\rho > 0\\), the paired t interval is (in expectation) narrower than the independent two-sample t interval. What happens when \\(\\rho < 0\\)?',
                    hint: 'Compare \\(\\operatorname{Var}(\\bar{D})\\) with \\(\\operatorname{Var}(\\bar{X} - \\bar{Y})\\) under independence and correlation.',
                    solution: 'For paired data, \\(\\operatorname{Var}(D_i) = \\sigma_1^2 + \\sigma_2^2 - 2\\rho\\sigma_1\\sigma_2\\), so \\(\\operatorname{Var}(\\bar{D}) = (\\sigma_1^2 + \\sigma_2^2 - 2\\rho\\sigma_1\\sigma_2)/n\\). For independent two-sample, \\(\\operatorname{Var}(\\bar{X} - \\bar{Y}) = \\sigma_1^2/n + \\sigma_2^2/n = (\\sigma_1^2 + \\sigma_2^2)/n\\). Pairing reduces the variance by \\(2\\rho\\sigma_1\\sigma_2/n\\). When \\(\\rho > 0\\), this reduction is positive, so the paired interval is narrower. When \\(\\rho < 0\\), pairing actually increases the variance, making the interval wider -- but in practice \\(\\rho < 0\\) is rare.'
                }
            ]
        },

        // ============================================================
        // Section 5: Large-Sample Approximate CIs
        // ============================================================
        {
            id: 'ch08-sec05',
            title: 'Large-Sample Approximate CIs',
            content: `
 <h2>Large-Sample Approximate CIs</h2>

                <p>The exact confidence intervals discussed in previous sections rely on the normality assumption. When the population distribution is unknown or non-normal, we can use the asymptotic normality of maximum likelihood estimators to construct large-sample approximate confidence intervals.</p>

 <h3>The Wald Interval Wald</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.16 (Wald Confidence Interval)</div>
                    <div class="env-body">
                        <p>Let \\(\\hat{\\theta}_n\\) be the maximum likelihood estimator of \\(\\theta\\). Under regularity conditions,</p>
                        \\[\\frac{\\hat{\\theta}_n - \\theta}{\\operatorname{se}(\\hat{\\theta}_n)} \\xrightarrow{d} N(0,1),\\]
                        <p>where \\(\\operatorname{se}(\\hat{\\theta}_n)\\) is the estimated standard error of \\(\\hat{\\theta}_n\\). Hence an approximate \\(1-\\alpha\\) Wald confidence interval for \\(\\theta\\) is</p>
                        \\[\\hat{\\theta}_n \\pm z_{\\alpha/2} \\cdot \\operatorname{se}(\\hat{\\theta}_n).\\]
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark: Source of the Standard Error</div>
                    <div class="env-body">
                        <p>The standard error \\(\\operatorname{se}(\\hat{\\theta}_n)\\) typically comes from the Fisher information:</p>
                        \\[\\operatorname{se}(\\hat{\\theta}_n) = \\frac{1}{\\sqrt{n\\,I(\\hat{\\theta}_n)}},\\]
                        <p>where \\(I(\\theta) = -E\\left[\\frac{\\partial^2}{\\partial\\theta^2}\\log f(X;\\theta)\\right]\\) is the single-observation Fisher information. Alternatively, one may use the observed Fisher information \\(\\hat{I}_n(\\hat{\\theta}_n) = -\\frac{1}{n}\\sum \\frac{\\partial^2}{\\partial\\theta^2}\\log f(X_i; \\hat{\\theta}_n)\\).</p>
                    </div>
                </div>

 <h3>Confidence Interval for a Proportion</h3>

                <div class="env-block example">
                    <div class="env-title">Example 8.17 (Wald Interval for a Proportion)</div>
                    <div class="env-body">
                        <p>Let \\(X \\sim \\text{Bin}(n, p)\\) with MLE \\(\\hat{p} = X/n\\). The Wald interval is</p>
                        \\[\\hat{p} \\pm z_{\\alpha/2} \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}.\\]
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning: Problems with the Wald Interval for Proportions</div>
                    <div class="env-body">
                        <p>The Wald interval performs poorly when \\(p\\) is close to 0 or 1:</p>
                        <ul>
                            <li>The actual coverage can be far below the nominal level (e.g., nominal 95% but actual only 88%);</li>
                            <li>When \\(\\hat{p} = 0\\) or 1, the interval degenerates to a single point;</li>
                            <li>Even for moderate \\(p\\), coverage exhibits noticeable fluctuations for moderate sample sizes (the "sawtooth" phenomenon).</li>
                        </ul>
                    </div>
                </div>

 <h3>The Wilson Score Interval Wilson Score</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 8.18 (Wilson Score Interval)</div>
                    <div class="env-body">
                        <p>The Wilson score interval is obtained not from the Wald statistic but by inverting the score test:</p>
                        \\[\\frac{\\hat{p} + \\frac{z^2}{2n} \\pm z\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n} + \\frac{z^2}{4n^2}}}{1 + \\frac{z^2}{n}},\\]
                        <p>where \\(z = z_{\\alpha/2}\\). This is equivalent to solving the inequality in \\(p\\):</p>
                        \\[\\left|\\frac{\\hat{p} - p}{\\sqrt{p(1-p)/n}}\\right| \\leq z_{\\alpha/2}.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Starting from \\(\\left(\\frac{\\hat{p}-p}{\\sqrt{p(1-p)/n}}\\right)^2 \\leq z^2\\), expand to get</p>
                        \\[n(\\hat{p}-p)^2 \\leq z^2 p(1-p).\\]
                        <p>Rearranging yields a quadratic inequality in \\(p\\):</p>
                        \\[(n + z^2)p^2 - (2n\\hat{p} + z^2)p + n\\hat{p}^2 \\leq 0.\\]
                        <p>Applying the quadratic formula gives the endpoints of the Wilson interval.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition: Why Is Wilson Better Than Wald?</div>
                    <div class="env-body">
                        <p>The Wald interval uses \\(\\hat{p}\\) in the denominator as a plug-in estimate for \\(p\\), introducing extra error when \\(\\hat{p}\\) deviates from the true value. The Wilson interval directly solves for \\(p\\), using the true \\(p\\) in the denominator -- although this requires solving a quadratic equation, it avoids the bias of plug-in estimation.</p>
                        <p>Intuitively, the Wilson interval can be understood as "shrinking \\(\\hat{p}\\) toward 1/2": its center is a weighted average of \\(\\hat{p}\\) and \\(1/2\\), with weights depending on \\(n\\) and \\(z^2\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark: Agresti-Coull Interval</div>
                    <div class="env-body">
                        <p>A convenient improvement is the Agresti-Coull ("add-four") interval: let \\(\\tilde{n} = n + z^2\\), \\(\\tilde{p} = (X + z^2/2)/\\tilde{n}\\) (where \\(X = n\\hat{p}\\) is the number of successes), and then construct the standard Wald interval \\(\\tilde{p} \\pm z \\sqrt{\\tilde{p}(1-\\tilde{p})/\\tilde{n}}\\). At the 95% level, this amounts to adding 2 successes and 2 failures as "pseudo-observations." This method is simple and achieves good coverage.</p>
                    </div>
                </div>

 <h3>Confidence Level vs Interval Width Trade-off</h3>

                <div class="env-block remark">
                    <div class="env-title">Remark: Confidence Level-Precision Trade-off</div>
                    <div class="env-body">
                        <p>The width of a confidence interval is determined by three factors:</p>
                        <ol>
                            <li><strong>Confidence level \\(1-\\alpha\\)</strong>: a higher level (smaller \\(\\alpha\\)) means a larger \\(z_{\\alpha/2}\\), hence a wider interval;</li>
                            <li><strong>Sample size \\(n\\)</strong>: a larger \\(n\\) means a smaller standard error, hence a narrower interval;</li>
                            <li><strong>Population variability \\(\\sigma^2\\)</strong>: greater variability means a wider interval.</li>
                        </ol>
                        <p>For a fixed \\(n\\), increasing the confidence level necessarily widens the interval -- this is the fundamental trade-off between "certainty" and "precision."</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="confidence-level-slider"></div>

                <div class="viz-placeholder" data-viz="wald-vs-wilson"></div>
            `,
            visualizations: [
                {
                    id: 'confidence-level-slider',
 title:'Interactive Demo: Confidence Level and Interval Width',
                    description: 'Drag the confidence level slider to see how the interval width changes in real time',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380,
                            originX: 280, originY: 280, scale: 80
                        });

                        var confLevel = 0.95;
                        var n = 30;
                        var sigma = 1.0;

                        function inverseNormal(p) {
                            if (p <= 0) return -6;
                            if (p >= 1) return 6;
                            if (p < 0.5) return -inverseNormal(1 - p);
                            var t = Math.sqrt(-2 * Math.log(1 - p));
                            var c0 = 2.515517, c1 = 0.802853, c2 = 0.010328;
                            var d1 = 1.432788, d2 = 0.189269, d3 = 0.001308;
                            return t - (c0 + c1 * t + c2 * t * t) / (1 + d1 * t + d2 * t * t + d3 * t * t * t);
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            var alpha = 1 - confLevel;
                            var zCrit = inverseNormal(1 - alpha / 2);
                            var halfWidth = zCrit * sigma / Math.sqrt(n);

                            // Draw normal PDF
                            var pdfScale = 2.5;
                            var pdfFunc = function(x) { return VizEngine.normalPDF(x, 0, 1) * pdfScale; };

                            // Shade confidence region
                            viz.shadeUnder(pdfFunc, -zCrit, zCrit, viz.colors.blue + '44');

                            // Shade tails
                            viz.shadeUnder(pdfFunc, -4, -zCrit, viz.colors.red + '44');
                            viz.shadeUnder(pdfFunc, zCrit, 4, viz.colors.red + '44');

                            // Draw PDF
                            viz.drawFunction(pdfFunc, -4, 4, viz.colors.white, 2);

                            // Axis
                            viz.drawSegment(-4, 0, 4, 0, viz.colors.axis, 1);

                            // Quantile markers
                            viz.drawSegment(-zCrit, 0, -zCrit, pdfFunc(-zCrit), viz.colors.teal, 2);
                            viz.drawSegment(zCrit, 0, zCrit, pdfFunc(zCrit), viz.colors.teal, 2);
                            viz.drawText('-z', -zCrit, -0.25, viz.colors.teal, 11);
                            viz.drawText('+z', zCrit, -0.25, viz.colors.teal, 11);

                            // CI bar below
                            var yBar = -0.6;
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 5;
                            var lb = viz.toScreen(-halfWidth, yBar);
                            var rb = viz.toScreen(halfWidth, yBar);
                            ctx.beginPath(); ctx.moveTo(lb[0], lb[1]); ctx.lineTo(rb[0], rb[1]); ctx.stroke();
                            viz.drawSegment(-halfWidth, yBar - 0.1, -halfWidth, yBar + 0.1, viz.colors.green, 2);
                            viz.drawSegment(halfWidth, yBar - 0.1, halfWidth, yBar + 0.1, viz.colors.green, 2);
                            viz.drawPoint(0, yBar, viz.colors.green, null, 4);

                            // Info
                            viz.screenText('Confidence level: ' + (confLevel * 100).toFixed(1) + '%', viz.width / 2, 16, viz.colors.white, 14);
                            viz.screenText('z = ' + zCrit.toFixed(3) + ' Half-width = ' + halfWidth.toFixed(3), viz.width / 2, 36, viz.colors.text, 12);
                            viz.screenText('CI width = ' + (2 * halfWidth).toFixed(3) + ' (n=' + n + ', ' + String.fromCharCode(963) + '=' + sigma.toFixed(1) + ')', viz.width / 2, 54, viz.colors.text, 11);

                            // Tail annotation
                            viz.screenText(String.fromCharCode(945) + '/2 = ' + (alpha / 2).toFixed(4), 50, viz.height - 70, viz.colors.red, 10, 'left');
                            viz.screenText(String.fromCharCode(945) + '/2', viz.width - 50, viz.height - 70, viz.colors.red, 10, 'right');
                            viz.screenText('1 - ' + String.fromCharCode(945) + ' = ' + confLevel.toFixed(3), viz.width / 2, viz.height - 70, viz.colors.blue, 11);
                        }

                        draw();

                        VizEngine.createSlider(controls, 'Confidence %', 50, 99.9, confLevel * 100, 0.5, function(val) {
                            confLevel = val / 100;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'n', 5, 200, n, 5, function(val) {
                            n = Math.round(val);
                            draw();
                        });

                        return viz;
                    }
                },
                {
                    id: 'wald-vs-wilson',
 title:'Interactive Demo: Wald vs Wilson Score Interval Wald vs Wilson Score',
                    description: 'Compare two confidence intervals for proportions; observe the Wald interval degeneracy at extreme p',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380,
                            originX: 60, originY: 300, scale: 440
                        });

                        var trueP = 0.5;
                        var n = 30;

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Simulate one binomial observation
                            var x = 0;
                            for (var i = 0; i < n; i++) {
                                if (Math.random() < trueP) x++;
                            }
                            var phat = x / n;

                            var z = 1.96;

                            // Wald CI
                            var waldSE = Math.sqrt(phat * (1 - phat) / n);
                            var waldLo = phat - z * waldSE;
                            var waldHi = phat + z * waldSE;

                            // Wilson CI
                            var denom = 1 + z * z / n;
                            var center = (phat + z * z / (2 * n)) / denom;
                            var margin = z * Math.sqrt(phat * (1 - phat) / n + z * z / (4 * n * n)) / denom;
                            var wilsonLo = center - margin;
                            var wilsonHi = center + margin;

                            // Draw [0, 1] axis
                            viz.drawSegment(0, 0, 1, 0, viz.colors.axis, 1.5);

                            // Tick marks
                            for (var t = 0; t <= 10; t++) {
                                var xTick = t / 10;
                                viz.drawSegment(xTick, -0.02, xTick, 0.02, viz.colors.axis, 1);
                                viz.drawText(xTick.toFixed(1), xTick, -0.06, viz.colors.text, 10);
                            }

                            // True p
                            viz.drawSegment(trueP, -0.15, trueP, 0.7, viz.colors.yellow, 2, true);
                            viz.drawText('true p = ' + trueP.toFixed(2), trueP, 0.75, viz.colors.yellow, 11);

                            // Wald CI
                            var yW = 0.45;
                            var wLo = Math.max(waldLo, -0.05);
                            var wHi = Math.min(waldHi, 1.05);
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 5;
                            var lwPt = viz.toScreen(wLo, yW);
                            var rwPt = viz.toScreen(wHi, yW);
                            ctx.beginPath(); ctx.moveTo(lwPt[0], lwPt[1]); ctx.lineTo(rwPt[0], rwPt[1]); ctx.stroke();
                            viz.drawPoint(phat, yW, viz.colors.blue, null, 4);
                            viz.screenText('Wald: [' + waldLo.toFixed(3) + ', ' + waldHi.toFixed(3) + ']', viz.width / 2, viz.toScreen(0, yW)[1] - 14, viz.colors.blue, 11);

                            // Wilson CI
                            var yS = 0.2;
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 5;
                            var lsPt = viz.toScreen(Math.max(wilsonLo, -0.05), yS);
                            var rsPt = viz.toScreen(Math.min(wilsonHi, 1.05), yS);
                            ctx.beginPath(); ctx.moveTo(lsPt[0], lsPt[1]); ctx.lineTo(rsPt[0], rsPt[1]); ctx.stroke();
                            viz.drawPoint(center, yS, viz.colors.orange, null, 4);
                            viz.screenText('Wilson: [' + wilsonLo.toFixed(3) + ', ' + wilsonHi.toFixed(3) + ']', viz.width / 2, viz.toScreen(0, yS)[1] - 14, viz.colors.orange, 11);

                            // Header
                            viz.screenText('Wald vs Wilson Score CI for proportion (95%)', viz.width / 2, 16, viz.colors.white, 14);
                            viz.screenText('n = ' + n + ' X = ' + x + ' p-hat = ' + phat.toFixed(3), viz.width / 2, 36, viz.colors.text, 11);
                        }

                        draw();

                        VizEngine.createSlider(controls, 'true p', 0.01, 0.99, trueP, 0.01, function(val) {
                            trueP = val;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'n', 5, 200, n, 5, function(val) {
                            n = Math.round(val);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Resample', function() {
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'In a poll, \\(224\\) out of \\(n = 400\\) voters support Candidate A. (a) Compute the Wald 95% confidence interval for \\(p\\); (b) Compute the Wilson score 95% confidence interval; (c) Compare the two.',
                    hint: '\\(\\hat{p} = 224/400 = 0.56\\), \\(z = 1.96\\).',
                    solution: '(a) Wald: \\(0.56 \\pm 1.96\\sqrt{0.56 \\times 0.44 / 400} = 0.56 \\pm 0.0487 = [0.5113, 0.6087]\\). (b) Wilson: denominator \\(1 + 1.96^2/400 = 1.0096\\); center \\((0.56 + 1.96^2/800)/1.0096 = 0.5583\\); margin \\(1.96\\sqrt{0.56 \\times 0.44/400 + 1.96^2/640000}/1.0096 = 0.0483\\); Wilson CI: \\([0.510, 0.607]\\). (c) When \\(\\hat{p}\\) is near 0.5 and \\(n\\) is large, the two are very close. The Wilson center is slightly shrunk toward 0.5.'
                },
                {
                    question: 'Let \\(X_1,\\ldots,X_n \\overset{\\text{iid}}{\\sim} \\text{Exp}(\\lambda)\\). Using the MLE \\(\\hat{\\lambda} = 1/\\bar{X}\\) and Fisher information, construct a Wald confidence interval for \\(\\lambda\\).',
                    hint: 'The Fisher information for the exponential distribution is \\(I(\\lambda) = 1/\\lambda^2\\).',
                    solution: 'Single-observation Fisher information: \\(I(\\lambda) = 1/\\lambda^2\\). Standard error: \\(\\operatorname{se}(\\hat{\\lambda}) = 1/\\sqrt{nI(\\hat{\\lambda})} = \\hat{\\lambda}/\\sqrt{n} = 1/(\\bar{X}\\sqrt{n})\\). Wald CI: \\(\\hat{\\lambda} \\pm z_{\\alpha/2} \\hat{\\lambda}/\\sqrt{n} = \\hat{\\lambda}(1 \\pm z_{\\alpha/2}/\\sqrt{n})\\), i.e., \\([\\hat{\\lambda}(1 - z_{\\alpha/2}/\\sqrt{n}), \; \\hat{\\lambda}(1 + z_{\\alpha/2}/\\sqrt{n})]\\).'
                },
                {
                    question: 'Using the Delta method, construct an approximate confidence interval for \\(g(\\mu) = e^{\\mu}\\), where \\(X_1, \\ldots, X_n \\sim N(\\mu, \\sigma^2)\\) with \\(\\sigma\\) known. Compare the Delta method with the direct transformation approach.',
                    hint: 'The Delta method gives \\(\\sqrt{n}(g(\\bar{X}) - g(\\mu)) \\xrightarrow{d} N(0, [g\'(\\mu)]^2 \\sigma^2)\\), where \\(g\'(\\mu) = e^{\\mu}\\).',
                    solution: 'Delta method: \\(\\sqrt{n}(e^{\\bar{X}} - e^{\\mu}) \\xrightarrow{d} N(0, e^{2\\mu} \\sigma^2)\\). Estimating \\(e^{\\mu}\\) by \\(e^{\\bar{X}}\\), the approximate CI is \\(e^{\\bar{X}} \\pm z_{\\alpha/2} \\cdot e^{\\bar{X}} \\cdot \\sigma / \\sqrt{n}\\), i.e., \\(e^{\\bar{X}}(1 \\pm z_{\\alpha/2} \\sigma/\\sqrt{n})\\). Direct transformation: first construct the exact CI for \\(\\mu\\): \\([\\bar{X} - z_{\\alpha/2}\\sigma/\\sqrt{n}, \\bar{X} + z_{\\alpha/2}\\sigma/\\sqrt{n}]\\), then exponentiate to get \\([e^{\\bar{X} - z_{\\alpha/2}\\sigma/\\sqrt{n}}, e^{\\bar{X} + z_{\\alpha/2}\\sigma/\\sqrt{n}}]\\). The latter avoids the Delta method approximation error and is exact.'
                },
                {
                    question: 'Explain why increasing the confidence level from 95% to 99% increases the interval width by about 31%, rather than by 4%.',
                    hint: 'Compare the values of \\(z_{0.025}\\) and \\(z_{0.005}\\).',
                    solution: 'The interval width is proportional to \\(z_{\\alpha/2}\\). For 95%, \\(z_{0.025} = 1.96\\); for 99%, \\(z_{0.005} = 2.576\\). The width ratio is \\(2.576/1.96 \\approx 1.314\\), an increase of about 31.4%. This is because the tails of the normal distribution decay rapidly -- to cover an additional 4% of probability (from 95% to 99%), the interval must extend considerably farther on each side, since that 4% is distributed in the far tails.'
                }
            ]
        }
    ]
});

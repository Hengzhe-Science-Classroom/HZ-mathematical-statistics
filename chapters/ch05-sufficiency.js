// Chapter 5: Sufficient Statistics & Completeness
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch05',
    number: 5,
    title: 'Sufficient Statistics & Completeness',
    subtitle: 'Sufficiency & Completeness',
    sections: [
        // ============================================================
        // Section 1: Sufficient Statistics
        // ============================================================
        {
            id: 'ch05-sec01',
            title: 'Sufficient Statistics',
            content: `
 <h2>Sufficient Statistics &mdash;</h2>

                <p>One of the central questions in statistical inference is: given observed data \\(X_1, \\ldots, X_n\\), how can we "compress" the data without losing any information about the parameter \\(\\theta\\)?
 The sufficient statistic is the key concept that answers this question &mdash; it extracts all the information the data carry about the parameter.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.1 (Sufficient Statistic)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n\\) be a random sample from the parametric family \\(\\{f(x; \\theta) : \\theta \\in \\Theta\\}\\).
 A statistic \\(T = T(X_1, \\ldots, X_n)\\) is called a <strong>sufficient statistic</strong> for \\(\\theta\\)
                        if the conditional distribution of the sample \\((X_1, \\ldots, X_n)\\) given \\(T = t\\) does not depend on \\(\\theta\\):</p>
                        \\[P(X_1 \\in A_1, \\ldots, X_n \\in A_n \\mid T = t) \\perp \\theta, \\quad \\forall t, \\forall A_i.\\]
                        <p>That is, the conditional distribution is free of \\(\\theta\\).</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Think of the data as a "signal" and the parameter \\(\\theta\\) as the hidden "truth."
 A sufficient statistic is the result of lossless compression of that signal &mdash; although the dimensionality of the data is reduced,
                        all information about \\(\\theta\\) is perfectly preserved.
                        Once we know the value of \\(T\\), the remaining variation in the raw data is pure "noise" (unrelated to \\(\\theta\\)).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.2 (Bernoulli Sample)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\stackrel{\\mathrm{iid}}{\\sim} \\operatorname{Bernoulli}(p)\\).
                        Set \\(T = \\sum_{i=1}^n X_i\\).
                        Given \\(T = t\\), the conditional distribution of \\((X_1, \\ldots, X_n)\\) is the uniform distribution over all 0&ndash;1 sequences satisfying
                        \\(\\sum x_i = t\\) (i.e., each of the \\(\\binom{n}{t}\\) sequences is equally likely),
                        which does not depend on \\(p\\). Therefore \\(T = \\sum X_i\\) is a sufficient statistic for \\(p\\).</p>
                    </div>
                </div>

 <p>Directly verifying the definition is often difficult. The Fisher&ndash;Neyman factorization theorem provides an elegant and practical criterion.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.3 (Fisher&ndash;Neyman Factorization Theorem)</div>
                    <div class="env-body">
                        <p>Let the population density (or mass) function be \\(f(\\mathbf{x}; \\theta)\\).
                        The statistic \\(T(\\mathbf{X})\\) is a sufficient statistic for \\(\\theta\\) if and only if there exist nonnegative functions \\(g(t; \\theta)\\)
                        and \\(h(\\mathbf{x})\\) (not depending on \\(\\theta\\)) such that</p>
                        \\[f(\\mathbf{x}; \\theta) = g\\bigl(T(\\mathbf{x}); \\theta\\bigr) \\cdot h(\\mathbf{x}), \\quad \\forall \\mathbf{x}, \\forall \\theta.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Outline for the Discrete Case)</div>
                    <div class="env-body">
                        <p><strong>Sufficiency (\\(\\Rightarrow\\)):</strong>
                        If \\(T\\) is sufficient, set \\(g(t; \\theta) = P_\\theta(T = t)\\) and
                        \\(h(\\mathbf{x}) = P(\\mathbf{X} = \\mathbf{x} \\mid T = T(\\mathbf{x}))\\) (which does not depend on \\(\\theta\\)).
                        Then \\(f(\\mathbf{x}; \\theta) = P_\\theta(\\mathbf{X} = \\mathbf{x}) = P_\\theta(T = T(\\mathbf{x})) \\cdot P(\\mathbf{X} = \\mathbf{x} \\mid T = T(\\mathbf{x})) = g(T(\\mathbf{x}); \\theta) \\cdot h(\\mathbf{x})\\).</p>
                        <p><strong>Necessity (\\(\\Leftarrow\\)):</strong>
                        If the factorization holds, then
                        \\(P_\\theta(\\mathbf{X} = \\mathbf{x} \\mid T = t) = \\frac{f(\\mathbf{x}; \\theta)}{P_\\theta(T = t)} \\cdot \\mathbf{1}\\{T(\\mathbf{x}) = t\\}\\).
                        The numerator equals \\(g(t; \\theta) h(\\mathbf{x})\\), and the denominator is \\(P_\\theta(T = t) = \\sum_{\\mathbf{y}: T(\\mathbf{y}) = t} g(t; \\theta) h(\\mathbf{y}) = g(t; \\theta) \\sum_{\\mathbf{y}: T(\\mathbf{y}) = t} h(\\mathbf{y})\\).
                        Hence the conditional probability equals \\(h(\\mathbf{x}) / \\sum_{\\mathbf{y}: T(\\mathbf{y}) = t} h(\\mathbf{y})\\), which is free of \\(\\theta\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.4 (Normal Sufficient Statistic)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\stackrel{\\mathrm{iid}}{\\sim} N(\\mu, \\sigma^2)\\) with \\(\\theta = (\\mu, \\sigma^2)\\).
                        The joint density is</p>
                        \\[f(\\mathbf{x}; \\mu, \\sigma^2) = \\frac{1}{(2\\pi\\sigma^2)^{n/2}} \\exp\\!\\left(-\\frac{1}{2\\sigma^2} \\sum_{i=1}^n (x_i - \\mu)^2\\right).\\]
                        <p>Expanding the exponent: \\(\\sum(x_i - \\mu)^2 = \\sum x_i^2 - 2\\mu \\sum x_i + n\\mu^2\\).
                        Thus the density factors as \\(g\\bigl(\\sum x_i, \\sum x_i^2; \\mu, \\sigma^2\\bigr) \\cdot 1\\).
                        Therefore \\(T = \\bigl(\\sum X_i, \\sum X_i^2\\bigr)\\) is a sufficient statistic for \\((\\mu, \\sigma^2)\\);
                        equivalently, \\(T = (\\bar{X}, S^2)\\) is also sufficient.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The key insight of the factorization theorem is that the part of the likelihood depending on \\(\\theta\\) connects to the data only through \\(T(\\mathbf{x})\\).
                        In practice, once you write down the likelihood, identify which data summaries appear in the \\(\\theta\\)-dependent terms to determine the sufficient statistic.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="data-compression-viz"></div>
            `,
            visualizations: [
                {
                    id: 'data-compression-viz',
 title:'Interactive: Data Compression via Sufficient Statistics',
                    description: 'Observe how a sufficient statistic compresses n data points into a low-dimensional summary without losing parameter information',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 420,
                            originX: 280, originY: 370,
                            scale: 50
                        });

                        var n = 20;
                        var trueMu = 3.0;
                        var samples = [];

                        function generateSamples() {
                            samples = VizEngine.sampleArray(function() {
                                return VizEngine.randomNormal(trueMu, 1.0);
                            }, n);
                        }
                        generateSamples();

                        var muSlider = VizEngine.createSlider(controls, 'True mu', 0, 6, trueMu, 0.1, function(val) {
                            trueMu = val;
                            generateSamples();
                            draw();
                        });

                        VizEngine.createButton(controls, 'Resample', function() {
                            generateSamples();
                            draw();
                        });

                        function draw() {
                            viz.clear();

                            var ctx = viz.ctx;

                            // Title
                            viz.screenText('Data Compression via Sufficiency', viz.width / 2, 18, viz.colors.white, 15, 'center', 'top');

                            // Draw raw data points (left side)
                            viz.screenText('Raw Data (n = ' + n + ')', 140, 45, viz.colors.text, 12, 'center', 'top');
                            for (var i = 0; i < samples.length; i++) {
                                var row = Math.floor(i / 5);
                                var col = i % 5;
                                var px = 50 + col * 40;
                                var py = 70 + row * 30;
                                ctx.fillStyle = viz.colors.blue + 'aa';
                                ctx.beginPath();
                                ctx.arc(px, py, 10, 0, Math.PI * 2);
                                ctx.fill();
                                ctx.fillStyle = viz.colors.white;
                                ctx.font = '9px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(samples[i].toFixed(1), px, py);
                            }

                            // Arrow showing compression
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([5, 3]);
                            ctx.beginPath();
                            ctx.moveTo(260, 140);
                            ctx.lineTo(330, 140);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            // arrowhead
                            ctx.fillStyle = viz.colors.orange;
                            ctx.beginPath();
                            ctx.moveTo(335, 140);
                            ctx.lineTo(325, 134);
                            ctx.lineTo(325, 146);
                            ctx.closePath();
                            ctx.fill();
                            viz.screenText('T(X)', 295, 128, viz.colors.orange, 11, 'center', 'bottom');

                            // Sufficient statistic (right side)
                            var xbar = VizEngine.mean(samples);
                            viz.screenText('Sufficient Statistic', 430, 45, viz.colors.text, 12, 'center', 'top');

                            ctx.fillStyle = viz.colors.green + '44';
                            ctx.beginPath();
                            ctx.arc(430, 120, 40, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.arc(430, 120, 40, 0, Math.PI * 2);
                            ctx.stroke();

                            viz.screenText('X-bar', 430, 108, viz.colors.green, 13, 'center', 'middle');
                            viz.screenText('= ' + xbar.toFixed(3), 430, 128, viz.colors.green, 12, 'center', 'middle');

                            // Draw likelihood comparison at bottom
                            viz.screenText('Likelihood (function of mu)', viz.width / 2, 210, viz.colors.text, 12, 'center', 'top');

                            // Plot likelihood from raw data
                            var muMin = 0;
                            var muMax = 6;
                            var maxLik = 0;
                            var likVals = [];
                            for (var mi = 0; mi <= 100; mi++) {
                                var mu = muMin + (muMax - muMin) * mi / 100;
                                var logL = 0;
                                for (var j = 0; j < samples.length; j++) {
                                    logL += -0.5 * (samples[j] - mu) * (samples[j] - mu);
                                }
                                likVals.push(Math.exp(logL - (-0.5 * n * 0)));
                                // Normalize later
                            }
                            // Normalize
                            var maxLog = -Infinity;
                            for (var mi2 = 0; mi2 <= 100; mi2++) {
                                var mu2 = muMin + (muMax - muMin) * mi2 / 100;
                                var logL2 = 0;
                                for (var j2 = 0; j2 < samples.length; j2++) {
                                    logL2 += -0.5 * (samples[j2] - mu2) * (samples[j2] - mu2);
                                }
                                if (logL2 > maxLog) maxLog = logL2;
                            }

                            // Draw the likelihood curve from raw data
                            var plotLeft = 60;
                            var plotRight = 500;
                            var plotTop = 235;
                            var plotBottom = 370;
                            var plotH = plotBottom - plotTop;

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(plotLeft, plotBottom);
                            ctx.lineTo(plotRight, plotBottom);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(plotLeft, plotTop);
                            ctx.lineTo(plotLeft, plotBottom);
                            ctx.stroke();

                            // mu axis labels
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var lab = 0; lab <= 6; lab++) {
                                var lx = plotLeft + (plotRight - plotLeft) * lab / 6;
                                ctx.fillText(lab.toString(), lx, plotBottom + 4);
                            }
                            viz.screenText('mu', plotRight + 10, plotBottom, viz.colors.text, 11, 'left', 'middle');

                            // Raw data likelihood (blue)
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var first = true;
                            for (var mi3 = 0; mi3 <= 200; mi3++) {
                                var mu3 = muMin + (muMax - muMin) * mi3 / 200;
                                var logL3 = 0;
                                for (var j3 = 0; j3 < samples.length; j3++) {
                                    logL3 += -0.5 * (samples[j3] - mu3) * (samples[j3] - mu3);
                                }
                                var relL = Math.exp(logL3 - maxLog);
                                var sx = plotLeft + (plotRight - plotLeft) * (mu3 - muMin) / (muMax - muMin);
                                var sy = plotBottom - relL * plotH * 0.9;
                                if (first) { ctx.moveTo(sx, sy); first = false; }
                                else ctx.lineTo(sx, sy);
                            }
                            ctx.stroke();

                            // Sufficient statistic likelihood (green, dashed)
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2.5;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            first = true;
                            for (var mi4 = 0; mi4 <= 200; mi4++) {
                                var mu4 = muMin + (muMax - muMin) * mi4 / 200;
                                var logL4 = -0.5 * n * (xbar - mu4) * (xbar - mu4);
                                var maxLogSuff = 0;
                                var relL4 = Math.exp(logL4 - maxLogSuff);
                                // Normalize to same peak
                                if (mi4 === 0) {
                                    var peakLogSuff = 0;
                                    var peakRelSuff = 1.0;
                                }
                                var sx4 = plotLeft + (plotRight - plotLeft) * (mu4 - muMin) / (muMax - muMin);
                                var sy4 = plotBottom - Math.exp(logL4) * plotH * 0.9;
                                if (first) { ctx.moveTo(sx4, sy4); first = false; }
                                else ctx.lineTo(sx4, sy4);
                            }
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // True mu vertical line
                            var trueX = plotLeft + (plotRight - plotLeft) * (trueMu - muMin) / (muMax - muMin);
                            ctx.strokeStyle = viz.colors.red + '88';
                            ctx.lineWidth = 1;
                            ctx.setLineDash([3, 3]);
                            ctx.beginPath();
                            ctx.moveTo(trueX, plotTop);
                            ctx.lineTo(trueX, plotBottom);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            viz.screenText('True mu', trueX, plotTop - 4, viz.colors.red, 10, 'center', 'bottom');

                            // X-bar vertical line
                            var xbarX = plotLeft + (plotRight - plotLeft) * (xbar - muMin) / (muMax - muMin);
                            ctx.strokeStyle = viz.colors.green + '88';
                            ctx.lineWidth = 1;
                            ctx.setLineDash([3, 3]);
                            ctx.beginPath();
                            ctx.moveTo(xbarX, plotTop);
                            ctx.lineTo(xbarX, plotBottom);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Legend
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillRect(100, plotBottom + 20, 20, 3);
                            viz.screenText('L(mu | raw data)', 125, plotBottom + 22, viz.colors.blue, 10, 'left', 'middle');

                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([5, 3]);
                            ctx.beginPath();
                            ctx.moveTo(300, plotBottom + 21);
                            ctx.lineTo(320, plotBottom + 21);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            viz.screenText('L(mu | X-bar)', 325, plotBottom + 22, viz.colors.green, 10, 'left', 'middle');
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\stackrel{\\mathrm{iid}}{\\sim} \\operatorname{Poisson}(\\lambda)\\). Use the factorization theorem to prove that \\(T = \\sum_{i=1}^n X_i\\) is a sufficient statistic for \\(\\lambda\\).',
                    hint: 'Write out the joint mass function \\(\\prod_{i=1}^n \\frac{\\lambda^{x_i} e^{-\\lambda}}{x_i!}\\), then factor it into a part that depends on \\(\\lambda\\) only through \\(\\sum x_i\\) and a part that does not depend on \\(\\lambda\\).',
                    solution: 'The joint mass function is \\(f(\\mathbf{x}; \\lambda) = \\prod_{i=1}^n \\frac{\\lambda^{x_i} e^{-\\lambda}}{x_i!} = \\frac{\\lambda^{\\sum x_i} e^{-n\\lambda}}{\\prod_{i=1}^n x_i!} = \\underbrace{\\lambda^{t} e^{-n\\lambda}}_{g(t; \\lambda)} \\cdot \\underbrace{\\frac{1}{\\prod_{i=1}^n x_i!}}_{h(\\mathbf{x})}\\), where \\(t = \\sum x_i\\). By the factorization theorem, \\(T = \\sum X_i\\) is a sufficient statistic for \\(\\lambda\\).'
                },
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\stackrel{\\mathrm{iid}}{\\sim} \\operatorname{Uniform}(0, \\theta)\\). Prove that \\(T = X_{(n)} = \\max(X_1, \\ldots, X_n)\\) is a sufficient statistic for \\(\\theta\\).',
                    hint: 'The joint density is \\(f(\\mathbf{x}; \\theta) = \\theta^{-n} \\prod_{i=1}^n \\mathbf{1}(0 \\le x_i \\le \\theta) = \\theta^{-n} \\mathbf{1}(x_{(n)} \\le \\theta) \\prod_{i=1}^n \\mathbf{1}(x_i \\ge 0)\\).',
                    solution: 'The joint density is \\(f(\\mathbf{x}; \\theta) = \\theta^{-n} \\prod_{i=1}^n \\mathbf{1}(0 \\le x_i \\le \\theta) = \\underbrace{\\theta^{-n} \\mathbf{1}(x_{(n)} \\le \\theta)}_{g(x_{(n)}; \\theta)} \\cdot \\underbrace{\\prod_{i=1}^n \\mathbf{1}(x_i \\ge 0)}_{h(\\mathbf{x})}\\). By the factorization theorem, \\(T = X_{(n)}\\) is a sufficient statistic for \\(\\theta\\).'
                },
                {
                    question: 'Show that a function of a sufficient statistic need not be sufficient: give an example where \\(T\\) is sufficient but \\(g(T)\\) is not.',
                    hint: 'Consider a normal sample \\(N(\\mu, \\sigma^2)\\) where \\(T = (\\bar{X}, S^2)\\) is sufficient. Is \\(g(T) = \\bar{X} + S^2\\) still sufficient?',
                    solution: 'Let \\(X_1, \\ldots, X_n \\sim N(\\mu, \\sigma^2)\\) with both \\(\\mu, \\sigma^2\\) unknown. Then \\(T = (\\bar{X}, S^2)\\) is a sufficient statistic for \\((\\mu, \\sigma^2)\\). However, \\(g(T) = \\bar{X} + S^2\\) is not sufficient because from the value of \\(g(T)\\) alone one cannot recover both \\(\\bar{X}\\) and \\(S^2\\), so the joint density cannot be factored to depend on the parameter only through \\(g(T)\\). In general, only invertible functions of \\(T\\) preserve sufficiency.'
                }
            ]
        },

        // ============================================================
        // Section 2: Minimal Sufficient Statistics
        // ============================================================
        {
            id: 'ch05-sec02',
            title: 'Minimal Sufficient Statistics',
            content: `
 <h2>Minimal Sufficient Statistics &mdash;</h2>

                <p>Sufficient statistics are not unique: the entire sample \\((X_1, \\ldots, X_n)\\) itself is a (trivial) sufficient statistic.
 We naturally seek the "most parsimonious" sufficient statistic &mdash; the minimal sufficient statistic &mdash; which achieves maximum data compression.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.5 (Minimal Sufficient Statistic)</div>
                    <div class="env-body">
 <p>A sufficient statistic \\(T\\) is called a <strong>minimal sufficient statistic</strong> if for every other sufficient statistic \\(T'\\),
                        there exists a function \\(g\\) such that \\(T = g(T')\\) (almost surely).</p>
                        <p>Equivalently, \\(T\\) is a function of every sufficient statistic &mdash; it is the "coarsest" sufficient compression.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Rank all statistics by "information granularity": raw data is the finest, a constant is the coarsest.
                        Sufficient statistics lie above the "no information loss" boundary.
                        The minimal sufficient statistic is the coarsest one on that boundary &mdash; any coarser and you would lose information about \\(\\theta\\).
                        Think of it as "the limit of lossy compression" &mdash; maximum compression rate with zero information loss.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.6 (Lehmann&ndash;Scheff&eacute; Characterization Theorem)</div>
                    <div class="env-body">
                        <p>Let the population density be \\(f(x; \\theta)\\). The statistic \\(T(\\mathbf{X})\\) is a minimal sufficient statistic
                        if and only if for any two sample points \\(\\mathbf{x}\\) and \\(\\mathbf{y}\\),</p>
                        \\[\\frac{f(\\mathbf{x}; \\theta)}{f(\\mathbf{y}; \\theta)} \\text{ does not depend on } \\theta \\quad \\Longleftrightarrow \\quad T(\\mathbf{x}) = T(\\mathbf{y}).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Sketch)</div>
                    <div class="env-body">
                        <p>Define an equivalence relation \\(\\mathbf{x} \\sim \\mathbf{y}\\) iff the likelihood ratio \\(f(\\mathbf{x}; \\theta)/f(\\mathbf{y}; \\theta)\\) does not depend on \\(\\theta\\).
                        The mapping defined on equivalence classes naturally yields a statistic. One verifies:</p>
                        <p>(1) This statistic is sufficient (by the factorization theorem: within the same equivalence class, likelihoods differ only by a \\(\\theta\\)-free constant).</p>
                        <p>(2) It is minimal: if \\(T'\\) is also sufficient, then \\(T'(\\mathbf{x}) = T'(\\mathbf{y})\\) implies
                        \\(f(\\mathbf{x}; \\theta)/f(\\mathbf{y}; \\theta)\\) is free of \\(\\theta\\) (the factorization gives this),
                        so \\(T(\\mathbf{x}) = T(\\mathbf{y})\\), meaning \\(T\\) is a function of \\(T'\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.7 (Minimal Sufficient Statistic for the Normal Distribution)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\sim N(\\mu, \\sigma^2)\\) with both \\((\\mu, \\sigma^2)\\) unknown. For two sample points \\(\\mathbf{x}, \\mathbf{y}\\),
                        the likelihood ratio is</p>
                        \\[\\frac{f(\\mathbf{x}; \\mu, \\sigma^2)}{f(\\mathbf{y}; \\mu, \\sigma^2)} = \\exp\\!\\left(-\\frac{1}{2\\sigma^2}\\bigl[\\sum x_i^2 - \\sum y_i^2 - 2\\mu(\\sum x_i - \\sum y_i)\\bigr]\\right).\\]
                        <p>This ratio is free of \\((\\mu, \\sigma^2)\\) if and only if \\(\\sum x_i = \\sum y_i\\) and \\(\\sum x_i^2 = \\sum y_i^2\\).
                        Therefore \\(T = \\bigl(\\sum X_i, \\sum X_i^2\\bigr)\\) is the minimal sufficient statistic.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Not every parametric family admits a minimal sufficient statistic whose dimension is lower than the sample size.
                        For example, the Cauchy distribution \\(\\operatorname{Cauchy}(\\theta, 1)\\) has the full set of order statistics
                        \\((X_{(1)}, \\ldots, X_{(n)})\\) as its minimal sufficient statistic &mdash; no further compression is possible.
                        Only exponential families guarantee that the dimension of the minimal sufficient statistic equals the parameter dimension.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="statistics-hierarchy-viz"></div>
            `,
            visualizations: [
                {
                    id: 'statistics-hierarchy-viz',
 title:'Interactive: Information Hierarchy of Statistics',
                    description: 'Displays the hierarchy of statistics between raw data and constants in terms of information retention',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 280, originY: 200,
                            scale: 40
                        });

                        var selectedLevel = -1;

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            viz.screenText('Statistics Information Hierarchy', viz.width / 2, 18, viz.colors.white, 15, 'center', 'top');

                            // Hierarchy levels (top = most information, bottom = least)
                            var levels = [
                                { y: 60, label: 'Raw Data (X1, ..., Xn)', color: viz.colors.blue, desc: 'All information, no compression' },
                                { y: 120, label: 'Order Statistics (X(1),...,X(n))', color: viz.colors.teal, desc: 'Loses only labeling' },
                                { y: 180, label: 'Sufficient Statistic T(X)', color: viz.colors.green, desc: 'No information loss about theta' },
                                { y: 240, label: 'Minimal Sufficient T*(X)', color: viz.colors.orange, desc: 'Maximum compression, zero loss' },
                                { y: 300, label: 'Non-sufficient (e.g. median)', color: viz.colors.purple, desc: 'Some information lost!' },
                                { y: 355, label: 'Constant', color: viz.colors.text, desc: 'All information lost' }
                            ];

                            // Arrows showing inclusion
                            for (var i = 0; i < levels.length - 1; i++) {
                                if (i === 3) {
                                    // Dashed line to non-sufficient (not a subset relationship)
                                    ctx.strokeStyle = viz.colors.red + '66';
                                    ctx.lineWidth = 1.5;
                                    ctx.setLineDash([4, 4]);
                                    ctx.beginPath();
                                    ctx.moveTo(viz.width / 2, levels[i].y + 14);
                                    ctx.lineTo(viz.width / 2, levels[i + 1].y - 14);
                                    ctx.stroke();
                                    ctx.setLineDash([]);
                                    // "X" mark
                                    viz.screenText('(information barrier)', viz.width / 2 + 120, (levels[i].y + levels[i + 1].y) / 2, viz.colors.red, 10, 'left', 'middle');
                                } else {
                                    ctx.strokeStyle = viz.colors.axis;
                                    ctx.lineWidth = 1.5;
                                    ctx.beginPath();
                                    ctx.moveTo(viz.width / 2, levels[i].y + 14);
                                    ctx.lineTo(viz.width / 2, levels[i + 1].y - 14);
                                    ctx.stroke();
                                    // arrowhead
                                    ctx.fillStyle = viz.colors.axis;
                                    ctx.beginPath();
                                    ctx.moveTo(viz.width / 2, levels[i + 1].y - 14);
                                    ctx.lineTo(viz.width / 2 - 4, levels[i + 1].y - 22);
                                    ctx.lineTo(viz.width / 2 + 4, levels[i + 1].y - 22);
                                    ctx.closePath();
                                    ctx.fill();
                                }
                            }

                            // Draw level boxes
                            for (var j = 0; j < levels.length; j++) {
                                var lvl = levels[j];
                                var boxW = 280;
                                var boxH = 26;
                                var bx = viz.width / 2 - boxW / 2;
                                var by = lvl.y - boxH / 2;

                                var isSelected = (selectedLevel === j);

                                ctx.fillStyle = isSelected ? lvl.color + '44' : lvl.color + '18';
                                ctx.strokeStyle = lvl.color;
                                ctx.lineWidth = isSelected ? 2.5 : 1.5;
                                ctx.beginPath();
                                ctx.roundRect(bx, by, boxW, boxH, 6);
                                ctx.fill();
                                ctx.stroke();

                                viz.screenText(lvl.label, viz.width / 2, lvl.y, lvl.color, 12, 'center', 'middle');

                                if (isSelected) {
                                    viz.screenText(lvl.desc, viz.width / 2, lvl.y + boxH / 2 + 10, viz.colors.white, 11, 'center', 'top');
                                }
                            }

                            // Information axis label
                            ctx.save();
                            ctx.translate(28, viz.height / 2);
                            ctx.rotate(-Math.PI / 2);
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Information about theta -->', 0, 0);
                            ctx.restore();

                            // Compression axis label
                            ctx.save();
                            ctx.translate(viz.width - 18, viz.height / 2);
                            ctx.rotate(Math.PI / 2);
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Compression -->', 0, 0);
                            ctx.restore();
                        }

                        // Click interaction
                        viz.canvas.addEventListener('click', function(e) {
                            var rect = viz.canvas.getBoundingClientRect();
                            var cy = e.clientY - rect.top;
                            var levels_y = [60, 120, 180, 240, 300, 355];
                            selectedLevel = -1;
                            for (var k = 0; k < levels_y.length; k++) {
                                if (Math.abs(cy - levels_y[k]) < 18) {
                                    selectedLevel = k;
                                    break;
                                }
                            }
                            draw();
                        });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\stackrel{\\mathrm{iid}}{\\sim} \\operatorname{Exp}(\\lambda)\\). Use the Lehmann\\u2013Scheff\\u00e9 theorem to find the minimal sufficient statistic for \\(\\lambda\\).',
                    hint: 'Write out the likelihood ratio \\(\\frac{f(\\mathbf{x}; \\lambda)}{f(\\mathbf{y}; \\lambda)} = \\exp\\bigl(-\\lambda(\\sum x_i - \\sum y_i)\\bigr)\\) and determine when it does not depend on \\(\\lambda\\).',
                    solution: 'The likelihood ratio is \\(\\frac{f(\\mathbf{x}; \\lambda)}{f(\\mathbf{y}; \\lambda)} = \\frac{\\lambda^n e^{-\\lambda \\sum x_i}}{\\lambda^n e^{-\\lambda \\sum y_i}} = e^{-\\lambda(\\sum x_i - \\sum y_i)}\\). This is free of \\(\\lambda\\) if and only if \\(\\sum x_i = \\sum y_i\\). By the Lehmann\\u2013Scheff\\u00e9 theorem, \\(T = \\sum_{i=1}^n X_i\\) is the minimal sufficient statistic.'
                },
                {
                    question: 'Prove that the minimal sufficient statistic is unique in the almost-sure sense: if \\(T_1\\) and \\(T_2\\) are both minimal sufficient, then there exists a one-to-one mapping \\(g\\) such that \\(T_1 = g(T_2)\\) a.s.',
                    hint: 'By minimality, \\(T_1\\) is a function of \\(T_2\\), and \\(T_2\\) is also a function of \\(T_1\\).',
                    solution: 'By the definition of minimal sufficiency, since \\(T_1\\) is minimal and \\(T_2\\) is sufficient, there exists a function \\(g_1\\) with \\(T_1 = g_1(T_2)\\) a.s. Since \\(T_2\\) is minimal and \\(T_1\\) is sufficient, there exists \\(g_2\\) with \\(T_2 = g_2(T_1)\\) a.s. Therefore \\(T_1 = g_1(g_2(T_1))\\) a.s., i.e., \\(g_1 \\circ g_2 = \\mathrm{id}\\) a.s., and similarly \\(g_2 \\circ g_1 = \\mathrm{id}\\) a.s. Hence \\(g_1\\) is a bijection (with inverse \\(g_2\\)).'
                },
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\stackrel{\\mathrm{iid}}{\\sim} \\operatorname{Uniform}(\\alpha, \\beta)\\) with both \\(\\alpha < \\beta\\) unknown. Find the minimal sufficient statistic.',
                    hint: 'The likelihood ratio involves indicator functions \\(\\mathbf{1}(\\alpha \\le x_{(1)}) \\mathbf{1}(x_{(n)} \\le \\beta)\\). For it not to depend on \\(\\alpha, \\beta\\), we need \\(x_{(1)} = y_{(1)}\\) and \\(x_{(n)} = y_{(n)}\\).',
                    solution: 'The joint density is \\(f(\\mathbf{x}; \\alpha, \\beta) = (\\beta - \\alpha)^{-n} \\mathbf{1}(\\alpha \\le x_{(1)}) \\mathbf{1}(x_{(n)} \\le \\beta)\\). The likelihood ratio \\(\\frac{f(\\mathbf{x})}{f(\\mathbf{y})} = \\frac{\\mathbf{1}(\\alpha \\le x_{(1)}) \\mathbf{1}(x_{(n)} \\le \\beta)}{\\mathbf{1}(\\alpha \\le y_{(1)}) \\mathbf{1}(y_{(n)} \\le \\beta)}\\). This is free of \\((\\alpha, \\beta)\\) for all parameter values if and only if \\(x_{(1)} = y_{(1)}\\) and \\(x_{(n)} = y_{(n)}\\). Hence the minimal sufficient statistic is \\(T = (X_{(1)}, X_{(n)})\\).'
                }
            ]
        },

        // ============================================================
        // Section 3: Completeness & Exponential Families
        // ============================================================
        {
            id: 'ch05-sec03',
            title: 'Completeness & Exponential Families',
            content: `
 <h2>Completeness & Exponential Families &mdash;</h2>

 <p>Completeness is a strengthening of sufficiency. Intuitively, if a sufficient statistic is "complete,"
                then no nontrivial unbiased estimator based on it can be identically zero &mdash; this rules out the existence of "redundant information."
                Complete sufficient statistics play a central role in the Rao&ndash;Blackwell theorem and the Lehmann&ndash;Scheff&eacute; theorem.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.8 (Complete Statistic)</div>
                    <div class="env-body">
                        <p>Let \\(T\\) be a statistic whose distribution family is \\(\\{f_T(t; \\theta) : \\theta \\in \\Theta\\}\\).
 We say \\(T\\) is <strong>complete</strong> if for every measurable function \\(g\\),</p>
                        \\[E_\\theta[g(T)] = 0 \\; \\forall \\theta \\in \\Theta \\quad \\Longrightarrow \\quad P_\\theta(g(T) = 0) = 1 \\; \\forall \\theta.\\]
                        <p>In other words, "a zero-expectation function must be the zero function."</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Completeness means the distribution family of \\(T\\) is "rich" enough
                        that no nontrivial function \\(g(T)\\) can have expectation zero simultaneously for all parameter values.
                        This can be understood as saying there are no "hidden constraints" in the distribution family of \\(T\\) &mdash;
                        the parameter space is large enough to "distinguish" different functions \\(g\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.9 (Complete Sufficient Implies Minimal Sufficient)</div>
                    <div class="env-body">
                        <p>If \\(T\\) is a complete sufficient statistic, then \\(T\\) is a minimal sufficient statistic.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(T'\\) be any sufficient statistic. We need to show \\(T\\) is a function of \\(T'\\).
                        Since \\(T\\) is sufficient, \\(E_\\theta[T \\mid T']\\) does not depend on \\(\\theta\\) (denote it \\(h(T')\\)).
                        Consider \\(g(T) = T - E[T \\mid T'] = T - h(T')\\). By the tower property,
                        \\(E_\\theta[T - h(T')] = E_\\theta[T] - E_\\theta[h(T')]\\).
                        In fact, \\(E_\\theta[T - h(T') \\mid T'] = E_\\theta[T \\mid T'] - h(T') = h(T') - h(T') = 0\\) a.s.,
                        so \\(E_\\theta[T - h(T')] = 0\\). For a more precise argument: define \\(U = T - h(T')\\),
                        then \\(E_\\theta[U \\mid T'] = 0\\) a.s.,
                        which gives \\(E_\\theta[U] = 0\\). Restricting to functions of \\(T\\),
                        since \\(h(T')\\) can be viewed as an indirect function of \\(T\\) (through \\(T' = T'(\\mathbf{X})\\)),
                        completeness guarantees \\(T = h(T')\\) a.s.</p>
                        <p>A more standard proof: let \\(T_0\\) be the minimal sufficient statistic given by the Lehmann&ndash;Scheff&eacute; theorem.
                        Then \\(T\\) is a function of \\(T_0\\) (\\(T = \\varphi(T_0)\\), since \\(T\\) is sufficient).
                        Conversely, \\(T_0 = \\psi(T)\\) (since \\(T_0\\) is minimal sufficient and \\(T\\) is sufficient).
                        Using completeness: for any measurable function \\(g\\) of \\(T_0\\),
                        if \\(E_\\theta[g(T_0)] = 0\\) for all \\(\\theta\\),
                        then since \\(T_0 = \\psi(T)\\) we have \\(g(T_0) = g(\\psi(T))\\),
                        and by the completeness of \\(T\\), \\(g(\\psi(T)) = 0\\) a.s.,
                        i.e., \\(g(T_0) = 0\\) a.s. This shows \\(T_0\\) is also complete, hence \\(T\\) is minimal sufficient.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

 <p>Completeness may seem abstract, but the exponential family provides an important general criterion for verifying it.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.10 (Exponential Family)</div>
                    <div class="env-body">
 <p>A parametric family \\(\\{f(x; \\theta) : \\theta \\in \\Theta\\}\\) is called a <strong>k-parameter exponential family</strong> (k-)
                        if its density can be written as</p>
                        \\[f(x; \\boldsymbol{\\eta}) = h(x) \\exp\\!\\left(\\sum_{j=1}^k \\eta_j T_j(x) - A(\\boldsymbol{\\eta})\\right),\\]
 <p>where \\(\\boldsymbol{\\eta} = (\\eta_1, \\ldots, \\eta_k)\\) is the <strong>natural parameter</strong>,
 \\(T_1(x), \\ldots, T_k(x)\\) are the <strong>sufficient statistics</strong>,
 \\(A(\\boldsymbol{\\eta})\\) is the <strong>log-partition function</strong>,
                        and \\(h(x) \\ge 0\\) is the base measure.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.11 (Complete Sufficient Statistics for Exponential Families)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n\\) be an iid sample from a \\(k\\)-parameter exponential family
                        whose natural parameter space \\(\\mathcal{H} = \\{\\boldsymbol{\\eta} : A(\\boldsymbol{\\eta}) < \\infty\\}\\)
                        contains an open set in \\(\\mathbb{R}^k\\). Then</p>
                        \\[T = \\left(\\sum_{i=1}^n T_1(X_i), \\ldots, \\sum_{i=1}^n T_k(X_i)\\right)\\]
 <p>is a <strong>complete sufficient statistic</strong> for \\(\\boldsymbol{\\eta}\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.12</div>
                    <div class="env-body">
                        <p>Common exponential families and their complete sufficient statistics:</p>
                        <p>(i) \\(\\operatorname{Poisson}(\\lambda)\\): natural parameter \\(\\eta = \\log \\lambda\\),
                        sufficient statistic \\(T(x) = x\\).
                        The complete sufficient statistic for an iid sample is \\(\\sum X_i\\).</p>
                        <p>(ii) \\(N(\\mu, \\sigma^2)\\) (two parameters): natural parameters \\(\\eta_1 = \\mu/\\sigma^2, \\eta_2 = -1/(2\\sigma^2)\\),
                        sufficient statistics \\(T_1(x) = x, T_2(x) = x^2\\).
                        The complete sufficient statistic is \\((\\sum X_i, \\sum X_i^2)\\).</p>
                        <p>(iii) \\(\\operatorname{Gamma}(\\alpha, \\beta)\\):
                        the complete sufficient statistic is \\((\\sum \\log X_i, \\sum X_i)\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>The condition that the natural parameter space contains an open set is crucial. If the parameter space is restricted (e.g., the normal distribution with known \\(\\sigma^2\\)),
                        the sufficient statistic may not be complete. For instance, \\(X \\sim N(\\theta, \\theta)\\) (\\(\\theta > 0\\))
                        belongs to an exponential family, but because \\(\\eta_1, \\eta_2\\) are constrained (a curved exponential family),
                        \\((\\sum X_i, \\sum X_i^2)\\) is sufficient but not complete.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="expfamily-morphing-viz"></div>
            `,
            visualizations: [
                {
                    id: 'expfamily-morphing-viz',
 title:'Interactive: Exponential Family PDF Morphing (PDF)',
                    description: 'Adjust the natural parameters to observe how exponential family densities smoothly morph, and see the dimension of the sufficient statistic',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 70, originY: 340,
                            scale: 50
                        });

                        var family = 'normal';
                        var param1 = 2.0;
                        var param2 = 1.0;

                        var familySelect = document.createElement('div');
                        familySelect.style.cssText = 'display:flex;gap:6px;margin-bottom:4px;flex-wrap:wrap;';
                        var families = [
                            { key: 'normal', label: 'Normal(mu,sigma2)' },
                            { key: 'exponential', label: 'Exp(lambda)' },
                            { key: 'gamma', label: 'Gamma(alpha,beta)' },
                            { key: 'beta', label: 'Beta(a,b)' }
                        ];
                        families.forEach(function(f) {
                            var btn = document.createElement('button');
                            btn.textContent = f.label;
                            btn.style.cssText = 'padding:3px 8px;border:1px solid #30363d;border-radius:4px;background:#1a1a40;color:#c9d1d9;font-size:0.72rem;cursor:pointer;';
                            btn.addEventListener('click', function() {
                                family = f.key;
                                updateSliders();
                                draw();
                            });
                            familySelect.appendChild(btn);
                        });
                        controls.appendChild(familySelect);

                        var slider1 = VizEngine.createSlider(controls, 'Param 1', 0.1, 5, param1, 0.1, function(v) { param1 = v; draw(); });
                        var slider2 = VizEngine.createSlider(controls, 'Param 2', 0.1, 5, param2, 0.1, function(v) { param2 = v; draw(); });

                        function updateSliders() {
                            if (family === 'normal') {
                                slider1.min = -3; slider1.max = 5; slider1.value = 2; param1 = 2;
                                slider2.min = 0.3; slider2.max = 3; slider2.value = 1; param2 = 1;
                            } else if (family === 'exponential') {
                                slider1.min = 0.2; slider1.max = 5; slider1.value = 1; param1 = 1;
                                slider2.min = 0.1; slider2.max = 5; slider2.value = 1; param2 = 1;
                            } else if (family === 'gamma') {
                                slider1.min = 0.5; slider1.max = 5; slider1.value = 2; param1 = 2;
                                slider2.min = 0.5; slider2.max = 5; slider2.value = 1; param2 = 1;
                            } else if (family === 'beta') {
                                slider1.min = 0.3; slider1.max = 5; slider1.value = 2; param1 = 2;
                                slider2.min = 0.3; slider2.max = 5; slider2.value = 2; param2 = 2;
                            }
                        }

                        function getPDF(x) {
                            if (family === 'normal') return VizEngine.normalPDF(x, param1, param2);
                            if (family === 'exponential') return VizEngine.exponentialPDF(x, param1);
                            if (family === 'gamma') return VizEngine.gammaPDF(x, param1, param2);
                            if (family === 'beta') return VizEngine.betaPDF(x, param1, param2);
                            return 0;
                        }

                        function getXRange() {
                            if (family === 'normal') return [-3, 8];
                            if (family === 'exponential') return [0, 6];
                            if (family === 'gamma') return [0, 8];
                            if (family === 'beta') return [0.01, 0.99];
                            return [0, 5];
                        }

                        function getInfo() {
                            if (family === 'normal') return {
                                eta: 'eta = (mu/sigma2, -1/(2*sigma2))',
                                T: 'T(x) = (x, x2)',
                                dim: 2
                            };
                            if (family === 'exponential') return {
                                eta: 'eta = -lambda',
                                T: 'T(x) = x',
                                dim: 1
                            };
                            if (family === 'gamma') return {
                                eta: 'eta = (alpha-1, -beta)',
                                T: 'T(x) = (log x, x)',
                                dim: 2
                            };
                            if (family === 'beta') return {
                                eta: 'eta = (a-1, b-1)',
                                T: 'T(x) = (log x, log(1-x))',
                                dim: 2
                            };
                            return { eta: '', T: '', dim: 0 };
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            viz.screenText('Exponential Family PDF Morphing', viz.width / 2, 12, viz.colors.white, 14, 'center', 'top');

                            var range = getXRange();
                            var xMin = range[0];
                            var xMax = range[1];

                            // Adjust scale for beta
                            var xScale, yScaleMax;
                            if (family === 'beta') {
                                xScale = 400 / (xMax - xMin);
                                yScaleMax = 5;
                            } else {
                                xScale = 400 / (xMax - xMin);
                                yScaleMax = 1.5;
                            }

                            var plotLeft = 70;
                            var plotBottom = 310;
                            var plotH = 230;
                            var plotW = 430;

                            // Find max for scaling
                            var maxY = 0;
                            for (var i = 0; i <= 200; i++) {
                                var x = xMin + (xMax - xMin) * i / 200;
                                var y = getPDF(x);
                                if (isFinite(y) && y > maxY) maxY = y;
                            }
                            if (maxY < 0.1) maxY = 0.1;
                            var yScale = plotH / (maxY * 1.15);

                            // Draw axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(plotLeft, plotBottom);
                            ctx.lineTo(plotLeft + plotW, plotBottom);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(plotLeft, plotBottom);
                            ctx.lineTo(plotLeft, plotBottom - plotH);
                            ctx.stroke();

                            // X labels
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            var numTicks = family === 'beta' ? 5 : 6;
                            for (var t = 0; t <= numTicks; t++) {
                                var xv = xMin + (xMax - xMin) * t / numTicks;
                                var sx = plotLeft + plotW * t / numTicks;
                                ctx.fillText(xv.toFixed(1), sx, plotBottom + 4);
                            }

                            // Shade under curve
                            ctx.fillStyle = viz.colors.teal + '25';
                            ctx.beginPath();
                            ctx.moveTo(plotLeft, plotBottom);
                            for (var i2 = 0; i2 <= 300; i2++) {
                                var x2 = xMin + (xMax - xMin) * i2 / 300;
                                var y2 = getPDF(x2);
                                if (!isFinite(y2)) y2 = 0;
                                var sx2 = plotLeft + plotW * (x2 - xMin) / (xMax - xMin);
                                var sy2 = plotBottom - y2 * yScale;
                                ctx.lineTo(sx2, sy2);
                            }
                            ctx.lineTo(plotLeft + plotW, plotBottom);
                            ctx.closePath();
                            ctx.fill();

                            // Draw PDF curve
                            ctx.strokeStyle = viz.colors.teal;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;
                            for (var i3 = 0; i3 <= 300; i3++) {
                                var x3 = xMin + (xMax - xMin) * i3 / 300;
                                var y3 = getPDF(x3);
                                if (!isFinite(y3) || y3 > maxY * 3) { started = false; continue; }
                                var sx3 = plotLeft + plotW * (x3 - xMin) / (xMax - xMin);
                                var sy3 = plotBottom - y3 * yScale;
                                if (!started) { ctx.moveTo(sx3, sy3); started = true; }
                                else ctx.lineTo(sx3, sy3);
                            }
                            ctx.stroke();

                            // Info box
                            var info = getInfo();
                            var infoY = plotBottom + 30;
                            ctx.fillStyle = viz.colors.green + '22';
                            ctx.fillRect(plotLeft, infoY, plotW, 50);
                            ctx.strokeStyle = viz.colors.green + '44';
                            ctx.lineWidth = 1;
                            ctx.strokeRect(plotLeft, infoY, plotW, 50);

                            viz.screenText('Natural param: ' + info.eta, plotLeft + plotW / 2, infoY + 12, viz.colors.green, 11, 'center', 'top');
                            viz.screenText('Sufficient stat: ' + info.T, plotLeft + plotW / 2, infoY + 26, viz.colors.orange, 11, 'center', 'top');
                            viz.screenText('Dimension of T: ' + info.dim + ' (complete sufficient for iid sample)', plotLeft + plotW / 2, infoY + 40, viz.colors.text, 10, 'center', 'top');
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that the Bernoulli(p) distribution belongs to the exponential family, and write down its natural parameter and sufficient statistic.',
                    hint: 'Write \\(p^x (1-p)^{1-x}\\) as \\(\\exp(x \\log \\frac{p}{1-p} + \\log(1-p))\\).',
                    solution: '\\(f(x; p) = p^x(1-p)^{1-x} = \\exp\\bigl(x \\log \\frac{p}{1-p} + \\log(1-p)\\bigr)\\). This is in exponential family form with natural parameter \\(\\eta = \\log \\frac{p}{1-p}\\) (the logit), sufficient statistic \\(T(x) = x\\), log-partition function \\(A(\\eta) = -\\log(1-p) = \\log(1 + e^\\eta)\\), and base measure \\(h(x) = 1\\). For an iid sample, \\(\\sum X_i\\) is the complete sufficient statistic.'
                },
                {
                    question: 'Let \\(T\\) be a complete sufficient statistic, and let \\(g(T)\\) be an unbiased estimator of \\(\\tau(\\theta)\\). Prove that \\(g(T)\\) is the unique unbiased estimator of \\(\\tau(\\theta)\\) based on \\(T\\).',
                    hint: 'If both \\(g_1(T)\\) and \\(g_2(T)\\) are unbiased estimators of \\(\\tau(\\theta)\\), consider the expectation of \\(g_1(T) - g_2(T)\\).',
                    solution: 'Suppose \\(g_1(T), g_2(T)\\) are both unbiased estimators of \\(\\tau(\\theta)\\). Then \\(E_\\theta[g_1(T) - g_2(T)] = \\tau(\\theta) - \\tau(\\theta) = 0\\) for all \\(\\theta\\). Let \\(u(T) = g_1(T) - g_2(T)\\). By completeness, \\(P_\\theta(u(T) = 0) = 1\\) for all \\(\\theta\\), i.e., \\(g_1(T) = g_2(T)\\) a.s. for all \\(\\theta\\). This is the core of the Lehmann\\u2013Scheff\\u00e9 theorem: an unbiased estimator based on a complete sufficient statistic is unique and is the UMVUE.'
                },
                {
                    question: 'Prove that the \\(\\operatorname{Cauchy}(\\theta, 1)\\) distribution does not belong to the exponential family.',
                    hint: 'The support of an exponential family does not depend on the parameter, and its moment generating function exists in a neighborhood of the origin. Consider the moments of the Cauchy distribution.',
                    solution: 'The Cauchy density is \\(f(x; \\theta) = \\frac{1}{\\pi(1 + (x - \\theta)^2)}\\). A key property of exponential families is: when the interior of the natural parameter space is nonempty, all moments exist. But the Cauchy distribution does not even have a finite first moment (\\(E|X| = \\infty\\)). Moreover, \\(\\frac{1}{1 + (x-\\theta)^2}\\) cannot be written in the form \\(\\exp(\\eta(\\theta) T(x) - A(\\theta)) h(x)\\) because \\(\\theta\\) and \\(x\\) are nonlinearly coupled in the denominator. Therefore the Cauchy distribution does not belong to the exponential family.'
                }
            ]
        },

        // ============================================================
        // Section 4: Ancillary Statistics & Basu's Theorem
        // ============================================================
        {
            id: 'ch05-sec04',
            title: 'Ancillary Statistics & Basu\'s Theorem',
            content: `
 <h2>Ancillary Statistics & Basu's Theorem &mdash; Basu</h2>

 <p>In contrast to sufficient statistics, an <strong>ancillary statistic</strong> is one whose distribution carries no information about the parameter at all.
                Basu's theorem establishes a deep connection between complete sufficient statistics and ancillary statistics:
                they are independent. This seemingly simple result has far-reaching implications in both theory and practice.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.13 (Ancillary Statistic)</div>
                    <div class="env-body">
 <p>A statistic \\(V = V(X_1, \\ldots, X_n)\\) is called an <strong>ancillary statistic</strong>
                        if the distribution of \\(V\\) does not depend on the parameter \\(\\theta\\):</p>
                        \\[P_\\theta(V \\in B) = P(V \\in B) \\quad \\forall \\theta \\in \\Theta, \\; \\forall B.\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.14</div>
                    <div class="env-body">
                        <p>(i) Let \\(X_1, \\ldots, X_n \\stackrel{\\mathrm{iid}}{\\sim} N(\\mu, 1)\\).
                        Then the sample variance \\(S^2 = \\frac{1}{n-1}\\sum(X_i - \\bar{X})^2 \\sim \\frac{\\chi^2_{n-1}}{n-1}\\),
                        whose distribution does not depend on \\(\\mu\\). Therefore \\(S^2\\) is an ancillary statistic for \\(\\mu\\).</p>
                        <p>(ii) Let \\(X_1, X_2 \\stackrel{\\mathrm{iid}}{\\sim} \\operatorname{Exp}(\\lambda)\\).
                        Then the ratio \\(V = X_1 / (X_1 + X_2) \\sim \\operatorname{Uniform}(0, 1)\\),
                        which does not depend on \\(\\lambda\\). Therefore \\(V\\) is an ancillary statistic.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>If a sufficient statistic captures all the information in the data about \\(\\theta\\),
                        then an ancillary statistic contains none of it &mdash; it reflects only the "shape" or "configuration" of the data,
                        not its "location" or "scale."
                        The two sit at opposite ends of the information spectrum.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.15 (Basu's Theorem)</div>
                    <div class="env-body">
                        <p>If \\(T\\) is a <strong>complete sufficient statistic</strong> for \\(\\theta\\)
                        and \\(V\\) is an <strong>ancillary statistic</strong>,
                        then \\(T\\) and \\(V\\) are mutually independent (for all \\(\\theta\\)).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>For any Borel set \\(B\\), define \\(g(t) = P_\\theta(V \\in B \\mid T = t) - P(V \\in B)\\).
                        Since \\(V\\) is ancillary, \\(P_\\theta(V \\in B) = P(V \\in B)\\) does not depend on \\(\\theta\\).
                        Therefore</p>
                        \\[E_\\theta[g(T)] = E_\\theta[P_\\theta(V \\in B \\mid T)] - P(V \\in B) = P_\\theta(V \\in B) - P(V \\in B) = 0\\]
                        <p>for all \\(\\theta\\). By the completeness of \\(T\\),
                        \\(g(T) = 0\\) a.s., i.e.,</p>
                        \\[P_\\theta(V \\in B \\mid T = t) = P(V \\in B) \\quad \\text{a.s.}\\]
                        <p>This is precisely the statement that \\(V\\) and \\(T\\) are independent.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.16 (A Classic Application of Basu's Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\stackrel{\\mathrm{iid}}{\\sim} N(\\mu, \\sigma^2)\\) with \\(\\sigma^2\\) known.</p>
                        <p>(a) \\(\\bar{X}\\) is a complete sufficient statistic for \\(\\mu\\) (one-dimensional normal exponential family).</p>
                        <p>(b) \\(S^2 = \\frac{1}{n-1}\\sum(X_i - \\bar{X})^2\\) is ancillary (its distribution \\(\\frac{\\sigma^2}{n-1} \\chi^2_{n-1}\\) does not depend on \\(\\mu\\)).</p>
                        <p>By Basu's theorem: \\(\\bar{X}\\) and \\(S^2\\) are independent.</p>
                        <p>This is an extremely elegant proof of independence &mdash; no moment generating functions or distributional calculations needed!
                        The traditional proof requires special properties of the normal distribution (Cochran's theorem),
                        whereas Basu's theorem only requires verifying sufficiency, completeness, and ancillarity.</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 5.17</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\stackrel{\\mathrm{iid}}{\\sim} \\operatorname{Exp}(\\lambda)\\).
                        Then \\(T = \\sum X_i\\) is a complete sufficient statistic,
                        and \\(V_i = X_i / \\sum X_j\\) (each ratio component) is ancillary.
                        By Basu's theorem, \\(\\sum X_i\\) and \\((X_1/\\sum X_j, \\ldots, X_n/\\sum X_j)\\) are independent.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Applications of Basu's Theorem)</div>
                    <div class="env-body">
                        <p>The power of Basu's theorem lies in the fact that once a complete sufficient statistic and an ancillary statistic are identified,
                        independence follows for free. This is especially useful in the following scenarios:</p>
                        <p>(1) Simplifying variance calculations: if \\(T \\perp V\\), then \\(\\operatorname{Var}(aT + bV) = a^2\\operatorname{Var}(T) + b^2\\operatorname{Var}(V)\\).</p>
                        <p>(2) Constructing pivotal quantities: independence ensures the pivot's distribution is parameter-free.</p>
                        <p>(3) Proving optimality of estimators: independence is a key technical tool in UMVUE theory.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sufficient-ancillary-scatter-viz"></div>
            `,
            visualizations: [
                {
                    id: 'sufficient-ancillary-scatter-viz',
 title:'Interactive: Sufficient vs. Ancillary Statistic Scatter Plot (vs)',
                    description: 'Monte Carlo simulation demonstrating the independence of a complete sufficient statistic and an ancillary statistic (Basu\'s theorem)',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 420,
                            originX: 90, originY: 340,
                            scale: 30
                        });

                        var n = 10;
                        var lambda = 2.0;
                        var nSim = 200;
                        var simData = [];

                        function simulate() {
                            simData = [];
                            for (var s = 0; s < nSim; s++) {
                                var samples = VizEngine.sampleArray(function() {
                                    return VizEngine.randomExponential(lambda);
                                }, n);
                                var total = 0;
                                for (var i = 0; i < n; i++) total += samples[i];
                                // Ancillary: X1 / sum(Xi)
                                var ratio = samples[0] / total;
                                simData.push({ T: total, V: ratio });
                            }
                        }

                        simulate();

                        var lambdaSlider = VizEngine.createSlider(controls, 'lambda', 0.5, 5, lambda, 0.1, function(v) {
                            lambda = v;
                            simulate();
                            draw();
                        });

                        VizEngine.createButton(controls, 'Resimulate', function() {
                            simulate();
                            draw();
                        });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            viz.screenText('Basu Theorem: T = sum(Xi) vs V = X1/sum(Xi)', viz.width / 2, 12, viz.colors.white, 13, 'center', 'top');
                            viz.screenText('Exp(lambda), n = ' + n + ', lambda = ' + lambda.toFixed(1), viz.width / 2, 30, viz.colors.text, 11, 'center', 'top');

                            // Plot area
                            var plotLeft = 90;
                            var plotBottom = 350;
                            var plotTop = 55;
                            var plotRight = 530;
                            var plotW = plotRight - plotLeft;
                            var plotH = plotBottom - plotTop;

                            // Find ranges
                            var maxT = 0;
                            for (var i = 0; i < simData.length; i++) {
                                if (simData[i].T > maxT) maxT = simData[i].T;
                            }
                            maxT = Math.ceil(maxT * 1.1);
                            if (maxT < 2) maxT = 2;

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(plotLeft, plotBottom);
                            ctx.lineTo(plotRight, plotBottom);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(plotLeft, plotTop);
                            ctx.lineTo(plotLeft, plotBottom);
                            ctx.stroke();

                            // X axis labels (T = sum Xi)
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            var nTickX = 5;
                            for (var tx = 0; tx <= nTickX; tx++) {
                                var tv = maxT * tx / nTickX;
                                var tsx = plotLeft + plotW * tx / nTickX;
                                ctx.fillText(tv.toFixed(1), tsx, plotBottom + 4);
                            }
                            viz.screenText('T = sum(Xi) [Sufficient]', (plotLeft + plotRight) / 2, plotBottom + 20, viz.colors.green, 11, 'center', 'top');

                            // Y axis labels (V = X1/sum)
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'middle';
                            for (var ty = 0; ty <= 5; ty++) {
                                var vv = ty / 5;
                                var tsy = plotBottom - plotH * vv;
                                ctx.fillText(vv.toFixed(1), plotLeft - 6, tsy);
                            }
                            ctx.save();
                            ctx.translate(20, (plotTop + plotBottom) / 2);
                            ctx.rotate(-Math.PI / 2);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('V = X1/sum(Xi) [Ancillary]', 0, 0);
                            ctx.restore();

                            // Plot points
                            for (var j = 0; j < simData.length; j++) {
                                var pt = simData[j];
                                var px = plotLeft + plotW * (pt.T / maxT);
                                var py = plotBottom - plotH * pt.V;
                                ctx.fillStyle = viz.colors.blue + '66';
                                ctx.beginPath();
                                ctx.arc(px, py, 3, 0, Math.PI * 2);
                                ctx.fill();
                            }

                            // Compute and display correlation
                            var tArr = simData.map(function(d) { return d.T; });
                            var vArr = simData.map(function(d) { return d.V; });
                            var mT = VizEngine.mean(tArr);
                            var mV = VizEngine.mean(vArr);
                            var cov = 0, varT2 = 0, varV2 = 0;
                            for (var k = 0; k < simData.length; k++) {
                                cov += (tArr[k] - mT) * (vArr[k] - mV);
                                varT2 += (tArr[k] - mT) * (tArr[k] - mT);
                                varV2 += (vArr[k] - mV) * (vArr[k] - mV);
                            }
                            var corr = (varT2 > 0 && varV2 > 0) ? cov / Math.sqrt(varT2 * varV2) : 0;

                            // Info box
                            ctx.fillStyle = '#0c0c20cc';
                            ctx.fillRect(plotRight - 185, plotTop + 5, 180, 55);
                            ctx.strokeStyle = viz.colors.green + '66';
                            ctx.lineWidth = 1;
                            ctx.strokeRect(plotRight - 185, plotTop + 5, 180, 55);

                            viz.screenText('Sample corr(T, V) = ' + corr.toFixed(4), plotRight - 95, plotTop + 18, viz.colors.white, 11, 'center', 'top');
                            viz.screenText('Basu: T indep V for all lambda', plotRight - 95, plotTop + 33, viz.colors.green, 10, 'center', 'top');
                            viz.screenText('V ~ Uniform(0,1) regardless', plotRight - 95, plotTop + 48, viz.colors.orange, 10, 'center', 'top');

                            // Marginal histogram for V (right side)
                            var histBins = 10;
                            var histCounts = new Array(histBins).fill(0);
                            for (var m = 0; m < simData.length; m++) {
                                var bin = Math.floor(simData[m].V * histBins);
                                if (bin >= histBins) bin = histBins - 1;
                                if (bin < 0) bin = 0;
                                histCounts[bin]++;
                            }
                            var maxCount = 0;
                            for (var mc = 0; mc < histBins; mc++) {
                                if (histCounts[mc] > maxCount) maxCount = histCounts[mc];
                            }
                            if (maxCount === 0) maxCount = 1;

                            // Draw small histogram on right margin
                            var histLeft = plotRight + 8;
                            var histW = 20;
                            for (var hb = 0; hb < histBins; hb++) {
                                var hbTop = plotBottom - plotH * (hb + 1) / histBins;
                                var hbBot = plotBottom - plotH * hb / histBins;
                                var barW = histW * histCounts[hb] / maxCount;
                                ctx.fillStyle = viz.colors.orange + '55';
                                ctx.fillRect(histLeft, hbTop, barW, hbBot - hbTop - 1);
                            }
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X_1, X_2 \\stackrel{\\mathrm{iid}}{\\sim} N(\\mu, 1)\\). Use Basu\'s theorem to prove that \\(\\bar{X} = (X_1 + X_2)/2\\) and \\(X_1 - X_2\\) are independent.',
                    hint: '\\(\\bar{X}\\) is the complete sufficient statistic for \\(\\mu\\). Verify that \\(X_1 - X_2\\) is ancillary (what is its distribution?).',
                    solution: '(1) \\(\\bar{X}\\) is a complete sufficient statistic for \\(\\mu\\) (\\(N(\\mu, 1)\\) is a one-dimensional exponential family). (2) \\(X_1 - X_2 \\sim N(0, 2)\\) (mean \\(\\mu - \\mu = 0\\)), so its distribution does not depend on \\(\\mu\\); hence \\(X_1 - X_2\\) is ancillary. By Basu\'s theorem, \\(\\bar{X}\\) and \\(X_1 - X_2\\) are independent.'
                },
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\stackrel{\\mathrm{iid}}{\\sim} \\operatorname{Uniform}(0, \\theta)\\). (a) Prove that \\(X_{(n)}\\) is a complete sufficient statistic. (b) Prove that \\(X_{(1)}/X_{(n)}\\) is ancillary. (c) What does Basu\'s theorem give us?',
                    hint: 'For (a), use the exponential family criterion or verify directly. For (b), let \\(U_i = X_i/\\theta\\), then \\(U_i \\sim \\operatorname{Uniform}(0,1)\\); consider \\(U_{(1)}/U_{(n)}\\).',
                    solution: '(a) The density of \\(X_{(n)}\\) is \\(f_{X_{(n)}}(t; \\theta) = n t^{n-1}/\\theta^n \\cdot \\mathbf{1}(0 < t < \\theta)\\). Suppose \\(E_\\theta[g(X_{(n)})] = 0\\) for all \\(\\theta > 0\\), i.e., \\(\\int_0^\\theta g(t) n t^{n-1}/\\theta^n \\, dt = 0\\) for all \\(\\theta > 0\\). Differentiating both sides with respect to \\(\\theta\\) and simplifying yields \\(g(\\theta) = 0\\) a.e., so completeness holds. (b) Let \\(U_i = X_i/\\theta\\), then \\(U_i \\sim U(0,1)\\), so \\(X_{(1)}/X_{(n)} = U_{(1)}/U_{(n)}\\), whose distribution does not depend on \\(\\theta\\). (c) By Basu\'s theorem, \\(X_{(n)} \\perp X_{(1)}/X_{(n)}\\).'
                },
                {
                    question: 'Give an example showing that ancillary statistics are not unique, and explain why Basu\'s theorem does not require uniqueness of the ancillary statistic.',
                    hint: 'In a location family \\(f(x - \\theta)\\), any "inter-sample difference" is ancillary.',
                    solution: 'Let \\(X_1, X_2, X_3 \\sim N(\\mu, 1)\\). Then \\(V_1 = X_1 - X_2\\), \\(V_2 = X_2 - X_3\\), \\(V_3 = X_1 - X_3\\) are all ancillary statistics (their distributions do not depend on \\(\\mu\\)), and \\(S^2\\) is also ancillary. There are infinitely many ancillary statistics. Basu\'s theorem applies to every ancillary statistic &mdash; each one is independent of the complete sufficient statistic. The theorem does not need uniqueness because its proof only uses the "ancillary" property (distribution free of the parameter), not the specific form of the ancillary statistic.'
                }
            ]
        }
    ]
});

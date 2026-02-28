window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch12',
    number: 12,
    title: 'Linear Regression',
    subtitle: 'Linear Regression',
    sections: [
        // ============================================================
        // Section 1: Simple Linear Regression Model
        // ============================================================
        {
            id: 'ch12-sec01',
            title: 'Simple Linear Regression Model',
            content: `
 <h2>Simple Linear Regression Model</h2>

 <p>Regression analysis is one of the most fundamental and important methods in statistics. Given a response variable \\(Y\\) and an explanatory variable \\(X\\), we wish to build a model that quantitatively describes how \\(Y\\) varies with \\(X\\). Simple linear regression assumes this relationship is linear in the parameters.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 12.1 (Simple Linear Regression Model)</div>
                    <div class="env-body">
 <p>Let \\((X_1, Y_1), \\ldots, (X_n, Y_n)\\) be \\(n\\) observations. The <strong>simple linear regression model</strong> assumes:</p>
                        \\[Y_i = \\beta_0 + \\beta_1 X_i + \\varepsilon_i, \\quad i = 1, \\ldots, n\\]
 <p>where \\(\\beta_0\\) is the intercept, \\(\\beta_1\\) is the slope, and \\(\\varepsilon_i\\) are random error terms satisfying:</p>
                        <ol>
                            <li>\\(\\mathbb{E}[\\varepsilon_i] = 0\\) (zero mean)</li>
 <li>\\(\\operatorname{Var}(\\varepsilon_i) = \\sigma^2\\) (homoscedasticity)</li>
                            <li>\\(\\operatorname{Cov}(\\varepsilon_i, \\varepsilon_j) = 0\\) for \\(i \\neq j\\) (uncorrelated errors)</li>
                        </ol>
                        <p>Under the normality assumption, we further require \\(\\varepsilon_i \\sim N(0, \\sigma^2)\\) i.i.d.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The geometric interpretation of the model is highly intuitive: on a scatterplot, the regression line \\(y = \\beta_0 + \\beta_1 x\\) passes through the center of the data "cloud." Each observation \\(Y_i\\) is the sum of a deterministic component \\(\\beta_0 + \\beta_1 X_i\\) and a random perturbation \\(\\varepsilon_i\\). The goal of regression is to recover this "true" line from the noisy data.</p>
                    </div>
                </div>

 <h3>Ordinary Least Squares</h3>

 <p>We estimate the parameters by minimizing the Residual Sum of Squares (RSS):</p>
                \\[Q(\\beta_0, \\beta_1) = \\sum_{i=1}^{n} (Y_i - \\beta_0 - \\beta_1 X_i)^2\\]

                <div class="env-block theorem">
                    <div class="env-title">Theorem 12.2 (OLS Estimators)</div>
                    <div class="env-body">
                        <p>Let \\(\\bar{X} = \\frac{1}{n}\\sum_{i=1}^{n} X_i\\), \\(\\bar{Y} = \\frac{1}{n}\\sum_{i=1}^{n} Y_i\\), \\(S_{xx} = \\sum_{i=1}^{n}(X_i - \\bar{X})^2\\), \\(S_{xy} = \\sum_{i=1}^{n}(X_i - \\bar{X})(Y_i - \\bar{Y})\\). Then the minimum of \\(Q(\\beta_0, \\beta_1)\\) is attained at:</p>
                        \\[\\hat{\\beta}_1 = \\frac{S_{xy}}{S_{xx}} = \\frac{\\sum_{i=1}^{n}(X_i - \\bar{X})(Y_i - \\bar{Y})}{\\sum_{i=1}^{n}(X_i - \\bar{X})^2}\\]
                        \\[\\hat{\\beta}_0 = \\bar{Y} - \\hat{\\beta}_1 \\bar{X}\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Take partial derivatives of \\(Q\\) with respect to \\(\\beta_0, \\beta_1\\) and set them to zero:</p>
                        \\[\\frac{\\partial Q}{\\partial \\beta_0} = -2\\sum_{i=1}^{n}(Y_i - \\beta_0 - \\beta_1 X_i) = 0\\]
                        \\[\\frac{\\partial Q}{\\partial \\beta_1} = -2\\sum_{i=1}^{n} X_i(Y_i - \\beta_0 - \\beta_1 X_i) = 0\\]
                        <p>From the first equation: \\(n\\beta_0 = \\sum Y_i - \\beta_1 \\sum X_i\\), i.e., \\(\\hat{\\beta}_0 = \\bar{Y} - \\hat{\\beta}_1\\bar{X}\\).</p>
                        <p>Substituting into the second equation and simplifying:</p>
                        \\[\\sum X_i Y_i - \\bar{Y}\\sum X_i - \\hat{\\beta}_1\\sum X_i^2 + \\hat{\\beta}_1 \\bar{X}\\sum X_i = 0\\]
                        <p>Using \\(\\sum(X_i - \\bar{X})(Y_i - \\bar{Y}) = \\sum X_i Y_i - n\\bar{X}\\bar{Y}\\) and \\(\\sum(X_i - \\bar{X})^2 = \\sum X_i^2 - n\\bar{X}^2\\), we obtain \\(\\hat{\\beta}_1 = S_{xy}/S_{xx}\\).</p>
                        <p>The Hessian matrix \\(H = 2\\begin{pmatrix} n & \\sum X_i \\\\ \\sum X_i & \\sum X_i^2 \\end{pmatrix}\\) is positive definite (when the \\(X_i\\) are not all equal), confirming a minimum.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Note that \\(\\hat{\\beta}_1\\) can be written as a linear combination of the \\(Y_i\\): \\(\\hat{\\beta}_1 = \\sum_{i=1}^{n} c_i Y_i\\) where \\(c_i = (X_i - \\bar{X})/S_{xx}\\). This representation is crucial for analyzing the properties of the estimator. Also, the regression line necessarily passes through the sample centroid \\((\\bar{X}, \\bar{Y})\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="scatter-regression-viz"></div>

                <div class="env-block example">
                    <div class="env-title">Example 12.3</div>
                    <div class="env-body">
                        <p>Suppose we have 5 observations \\((X_i, Y_i)\\): \\((1,2.1),\\; (2,3.9),\\; (3,6.2),\\; (4,7.8),\\; (5,10.1)\\).</p>
                        <p>We compute: \\(\\bar{X}=3, \\bar{Y}=6.02, S_{xx}=10, S_{xy}=19.9\\), so \\(\\hat{\\beta}_1 = 1.99\\), \\(\\hat{\\beta}_0 = 6.02 - 1.99 \\times 3 = 0.05\\).</p>
                        <p>The regression equation is: \\(\\hat{Y} = 0.05 + 1.99X\\).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'scatter-regression-viz',
 title:'Interactive: Drag Data Points to See Regression Line Changes',
                    description: 'Drag scatter points to see how the OLS regression line updates in real time; residuals shown as dashed lines',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400, scale: 40,
                            originX: 60, originY: 350
                        });

                        var pts = [
                            {x: 1, y: 2.1}, {x: 2, y: 3.8}, {x: 3, y: 5.5},
                            {x: 4, y: 7.2}, {x: 5, y: 6.8}, {x: 6, y: 8.5},
                            {x: 7, y: 10.1}, {x: 8, y: 9.5}
                        ];

                        var drags = [];
                        for (var i = 0; i < pts.length; i++) {
                            drags.push(viz.addDraggable('pt' + i, pts[i].x, pts[i].y, viz.colors.blue, 7, function() {}));
                        }

                        function computeOLS() {
                            var n = drags.length;
                            var sx = 0, sy = 0;
                            for (var i = 0; i < n; i++) { sx += drags[i].x; sy += drags[i].y; }
                            var mx = sx / n, my = sy / n;
                            var sxx = 0, sxy = 0;
                            for (var i = 0; i < n; i++) {
                                sxx += (drags[i].x - mx) * (drags[i].x - mx);
                                sxy += (drags[i].x - mx) * (drags[i].y - my);
                            }
                            if (sxx < 1e-10) return { b0: my, b1: 0, mx: mx, my: my };
                            var b1 = sxy / sxx;
                            var b0 = my - b1 * mx;
                            return { b0: b0, b1: b1, mx: mx, my: my };
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var ols = computeOLS();

                            // Draw regression line
                            var xMin = -0.5, xMax = 10;
                            viz.drawFunction(function(x) { return ols.b0 + ols.b1 * x; }, xMin, xMax, viz.colors.orange, 2.5);

                            // Draw residuals
                            for (var i = 0; i < drags.length; i++) {
                                var yHat = ols.b0 + ols.b1 * drags[i].x;
                                viz.drawSegment(drags[i].x, drags[i].y, drags[i].x, yHat, viz.colors.red + '88', 1.5, true);
                            }

                            // Draw mean point
                            viz.drawPoint(ols.mx, ols.my, viz.colors.green, null, 6);

                            viz.drawDraggables();

                            // Display equation
                            var b0Str = ols.b0.toFixed(2);
                            var b1Str = ols.b1.toFixed(2);
                            viz.screenText('y = ' + b0Str + ' + ' + b1Str + 'x', 300, 25, viz.colors.orange, 15, 'center');

                            // Display RSS
                            var rss = 0;
                            for (var i = 0; i < drags.length; i++) {
                                var res = drags[i].y - (ols.b0 + ols.b1 * drags[i].x);
                                rss += res * res;
                            }
                            viz.screenText('RSS = ' + rss.toFixed(3), 300, 48, viz.colors.text, 12, 'center');
                        }

                        viz.animate(draw);

                        VizEngine.createButton(controls, 'Reset Data', function() {
                            var defaults = [
                                {x: 1, y: 2.1}, {x: 2, y: 3.8}, {x: 3, y: 5.5},
                                {x: 4, y: 7.2}, {x: 5, y: 6.8}, {x: 6, y: 8.5},
                                {x: 7, y: 10.1}, {x: 8, y: 9.5}
                            ];
                            for (var i = 0; i < drags.length; i++) {
                                drags[i].x = defaults[i].x;
                                drags[i].y = defaults[i].y;
                            }
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that the OLS regression line must pass through the sample mean point \\((\\bar{X}, \\bar{Y})\\).',
                    hint: 'Substitute \\(x = \\bar{X}\\) into \\(\\hat{Y} = \\hat{\\beta}_0 + \\hat{\\beta}_1 x\\) and use \\(\\hat{\\beta}_0 = \\bar{Y} - \\hat{\\beta}_1\\bar{X}\\).',
                    solution: '\\(\\hat{Y}|_{x=\\bar{X}} = \\hat{\\beta}_0 + \\hat{\\beta}_1\\bar{X} = (\\bar{Y} - \\hat{\\beta}_1\\bar{X}) + \\hat{\\beta}_1\\bar{X} = \\bar{Y}\\). Therefore the regression line passes through \\((\\bar{X}, \\bar{Y})\\).'
                },
                {
                    question: 'Let \\(Y_i = \\beta_0 + \\beta_1 X_i + \\varepsilon_i\\). Prove that the residuals \\(e_i = Y_i - \\hat{Y}_i\\) satisfy \\(\\sum_{i=1}^{n} e_i = 0\\) and \\(\\sum_{i=1}^{n} X_i e_i = 0\\).',
                    hint: 'These two conditions are direct consequences of the normal equations.',
                    solution: 'The normal equations are \\(\\sum(Y_i - \\hat{\\beta}_0 - \\hat{\\beta}_1 X_i)=0\\) and \\(\\sum X_i(Y_i - \\hat{\\beta}_0 - \\hat{\\beta}_1 X_i)=0\\). Since \\(e_i = Y_i - \\hat{\\beta}_0 - \\hat{\\beta}_1 X_i\\), we directly obtain \\(\\sum e_i = 0\\) and \\(\\sum X_i e_i = 0\\). Geometrically, the residual vector \\(\\mathbf{e}\\) is orthogonal to both \\(\\mathbf{1}\\) and \\(\\mathbf{X}\\).'
                },
                {
                    question: 'In simple linear regression, if all \\(X_i\\) are replaced by \\(X_i^* = a + bX_i\\) (\\(b \\neq 0\\)), what is the relationship between the new OLS estimate \\(\\hat{\\beta}_1^*\\) and the original \\(\\hat{\\beta}_1\\)?',
                    hint: 'Compute \\(S_{x^*y}\\) and \\(S_{x^*x^*}\\) in terms of \\(S_{xy}\\) and \\(S_{xx}\\).',
                    solution: '\\(\\bar{X}^* = a + b\\bar{X}\\), so \\(X_i^* - \\bar{X}^* = b(X_i - \\bar{X})\\). Therefore \\(S_{x^*x^*} = b^2 S_{xx}\\), \\(S_{x^*y} = b S_{xy}\\), giving \\(\\hat{\\beta}_1^* = S_{x^*y}/S_{x^*x^*} = \\hat{\\beta}_1/b\\). The intercept becomes \\(\\hat{\\beta}_0^* = \\bar{Y} - \\hat{\\beta}_1^* (a + b\\bar{X}) = \\hat{\\beta}_0 - a\\hat{\\beta}_1/b\\). The fitted values \\(\\hat{Y}_i\\) remain unchanged.'
                }
            ]
        },

        // ============================================================
        // Section 2: Properties of OLS Estimators
        // ============================================================
        {
            id: 'ch12-sec02',
            title: 'Properties of OLS Estimators',
            content: `
 <h2>Properties of OLS Estimators</h2>

 <p>The OLS estimators \\(\\hat{\\beta}_0, \\hat{\\beta}_1\\) not only provide natural estimates of the parameters but also possess optimality among the broad class of linear unbiased estimators. This is characterized by the classical Gauss-Markov theorem.</p>

 <h3>Expectation and Variance of OLS Estimators OLS</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 12.4 (Distribution of OLS Estimators)</div>
                    <div class="env-body">
                        <p>In the simple linear regression model (assuming the \\(X_i\\) are fixed, non-random design points), the OLS estimators satisfy:</p>
                        <ol>
 <li>\\(\\mathbb{E}[\\hat{\\beta}_1] = \\beta_1\\), \\(\\mathbb{E}[\\hat{\\beta}_0] = \\beta_0\\) (unbiasedness)</li>
                            <li>\\(\\operatorname{Var}(\\hat{\\beta}_1) = \\dfrac{\\sigma^2}{S_{xx}}\\)</li>
                            <li>\\(\\operatorname{Var}(\\hat{\\beta}_0) = \\sigma^2\\left(\\dfrac{1}{n} + \\dfrac{\\bar{X}^2}{S_{xx}}\\right)\\)</li>
                            <li>\\(\\operatorname{Cov}(\\hat{\\beta}_0, \\hat{\\beta}_1) = -\\dfrac{\\sigma^2 \\bar{X}}{S_{xx}}\\)</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (for \\(\\hat{\\beta}_1\\))</div>
                    <div class="env-body">
                        <p>Since \\(\\hat{\\beta}_1 = \\sum c_i Y_i\\) where \\(c_i = (X_i - \\bar{X})/S_{xx}\\), note that \\(\\sum c_i = 0\\) and \\(\\sum c_i X_i = 1\\).</p>
                        <p><strong>Unbiasedness</strong>: \\(\\mathbb{E}[\\hat{\\beta}_1] = \\sum c_i \\mathbb{E}[Y_i] = \\sum c_i(\\beta_0 + \\beta_1 X_i) = \\beta_0 \\cdot 0 + \\beta_1 \\cdot 1 = \\beta_1\\).</p>
                        <p><strong>Variance</strong>: Since the \\(Y_i\\) are uncorrelated with equal variance \\(\\sigma^2\\),</p>
                        \\[\\operatorname{Var}(\\hat{\\beta}_1) = \\sum c_i^2 \\sigma^2 = \\sigma^2 \\sum \\frac{(X_i - \\bar{X})^2}{S_{xx}^2} = \\frac{\\sigma^2}{S_{xx}}\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

 <h3>Gauss-Markov Theorem Gauss-Markov</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 12.5 (Gauss-Markov)</div>
                    <div class="env-body">
 <p>Under the three basic assumptions of the simple linear regression model (zero mean, homoscedasticity, uncorrelated errors), the OLS estimators \\(\\hat{\\beta}_0\\) and \\(\\hat{\\beta}_1\\) are the <strong>Best Linear Unbiased Estimators</strong> (BLUE). That is, for any linear unbiased estimator of the form \\(\\tilde{\\beta}_1 = \\sum a_i Y_i\\), we have:</p>
                        \\[\\operatorname{Var}(\\hat{\\beta}_1) \\leq \\operatorname{Var}(\\tilde{\\beta}_1)\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(\\tilde{\\beta}_1 = \\sum a_i Y_i\\) be a linear unbiased estimator of \\(\\beta_1\\). Define \\(d_i = a_i - c_i\\) where \\(c_i = (X_i - \\bar{X})/S_{xx}\\).</p>
                        <p>Unbiasedness requires: \\(\\sum a_i = 0\\) and \\(\\sum a_i X_i = 1\\). Since \\(c_i\\) also satisfies these conditions, we get \\(\\sum d_i = 0\\) and \\(\\sum d_i X_i = 0\\).</p>
                        <p>The latter implies \\(\\sum d_i(X_i - \\bar{X}) = 0\\), i.e., \\(\\sum d_i c_i S_{xx} = 0\\), so \\(\\sum c_i d_i = 0\\).</p>
                        \\[\\operatorname{Var}(\\tilde{\\beta}_1) = \\sigma^2 \\sum a_i^2 = \\sigma^2 \\sum (c_i + d_i)^2 = \\sigma^2\\left(\\sum c_i^2 + 2\\sum c_i d_i + \\sum d_i^2\\right)\\]
                        \\[= \\sigma^2\\sum c_i^2 + \\sigma^2\\sum d_i^2 = \\operatorname{Var}(\\hat{\\beta}_1) + \\sigma^2\\sum d_i^2 \\geq \\operatorname{Var}(\\hat{\\beta}_1)\\]
                        <p>Equality holds if and only if \\(d_i = 0\\) for all \\(i\\), i.e., \\(\\tilde{\\beta}_1 = \\hat{\\beta}_1\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>The Gauss-Markov theorem does <strong>not</strong> assume normality. It relies only on first- and second-moment conditions. However, it only guarantees optimality within the class of linear unbiased estimators -- there may exist nonlinear or biased estimators (such as ridge regression or LASSO) with smaller mean squared error.</p>
                    </div>
                </div>

 <h3>Unbiased Estimation of Variance</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 12.6</div>
                    <div class="env-body">
                        <p>Let \\(\\hat{Y}_i = \\hat{\\beta}_0 + \\hat{\\beta}_1 X_i\\) be the fitted values and \\(e_i = Y_i - \\hat{Y}_i\\) be the residuals. Then</p>
                        \\[s^2 = \\frac{\\text{RSS}}{n-2} = \\frac{\\sum_{i=1}^{n} e_i^2}{n-2}\\]
 <p>is an unbiased estimator of \\(\\sigma^2\\), i.e., \\(\\mathbb{E}[s^2] = \\sigma^2\\). The \\(n-2\\) in the denominator reflects the degrees of freedom consumed by estimating the two parameters \\(\\beta_0, \\beta_1\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ols-comparison-viz"></div>
            `,
            visualizations: [
                {
                    id: 'ols-comparison-viz',
 title:'Interactive: OLS vs Other Linear Estimators OLS',
                    description: 'Monte Carlo simulation comparing variance of OLS vs another linear unbiased estimator, verifying the Gauss-Markov theorem',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400, scale: 30,
                            originX: 280, originY: 350
                        });

                        var nSim = 200;
                        var nObs = 20;
                        var trueBeta1 = 1.5;
                        var trueBeta0 = 2;
                        var sigma = 1.5;

                        function simulate() {
                            var xs = [];
                            for (var i = 0; i < nObs; i++) xs.push(0.5 + i * 0.5);

                            var olsEstimates = [];
                            var altEstimates = [];

                            for (var sim = 0; sim < nSim; sim++) {
                                var ys = [];
                                for (var i = 0; i < nObs; i++) {
                                    ys.push(trueBeta0 + trueBeta1 * xs[i] + VizEngine.randomNormal(0, sigma));
                                }

                                // OLS
                                var mx = VizEngine.mean(xs);
                                var my = VizEngine.mean(ys);
                                var sxx = 0, sxy = 0;
                                for (var i = 0; i < nObs; i++) {
                                    sxx += (xs[i] - mx) * (xs[i] - mx);
                                    sxy += (xs[i] - mx) * (ys[i] - my);
                                }
                                olsEstimates.push(sxy / sxx);

                                // Alternative linear unbiased (group mean method)
                                var half = Math.floor(nObs / 2);
                                var myLow = 0, myHigh = 0, mxLow = 0, mxHigh = 0;
                                for (var i = 0; i < half; i++) {
                                    myLow += ys[i]; mxLow += xs[i];
                                }
                                for (var i = half; i < nObs; i++) {
                                    myHigh += ys[i]; mxHigh += xs[i];
                                }
                                myLow /= half; mxLow /= half;
                                myHigh /= (nObs - half); mxHigh /= (nObs - half);
                                altEstimates.push((myHigh - myLow) / (mxHigh - mxLow));
                            }
                            return { ols: olsEstimates, alt: altEstimates };
                        }

                        var results = simulate();

                        function makeBins(data, binMin, binMax, nBins) {
                            var bins = [];
                            var w = (binMax - binMin) / nBins;
                            for (var b = 0; b < nBins; b++) {
                                bins.push({ x: binMin + b * w, width: w, height: 0 });
                            }
                            for (var i = 0; i < data.length; i++) {
                                var idx = Math.floor((data[i] - binMin) / w);
                                if (idx >= 0 && idx < nBins) bins[idx].height++;
                            }
                            // normalize to density
                            for (var b = 0; b < nBins; b++) {
                                bins[b].height = bins[b].height / (data.length * w);
                            }
                            return bins;
                        }

                        function draw() {
                            viz.clear();

                            // Custom axes
                            var ctx = viz.ctx;
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            var sy0 = viz.toScreen(0, 0)[1];
                            ctx.moveTo(30, sy0); ctx.lineTo(viz.width - 10, sy0); ctx.stroke();

                            // Draw histogram bins
                            var binMin = -1, binMax = 4, nBins = 30;
                            var olsBins = makeBins(results.ols, binMin, binMax, nBins);
                            var altBins = makeBins(results.alt, binMin, binMax, nBins);

                            viz.drawHistogram(altBins, viz.colors.red + '44', viz.colors.red, 1);
                            viz.drawHistogram(olsBins, viz.colors.blue + '44', viz.colors.blue, 1);

                            // True value line
                            var trueX = viz.toScreen(trueBeta1, 0)[0];
                            ctx.strokeStyle = viz.colors.green; ctx.lineWidth = 2;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath(); ctx.moveTo(trueX, 20); ctx.lineTo(trueX, sy0); ctx.stroke();
                            ctx.setLineDash([]);

                            // Stats
                            var olsVar = VizEngine.sampleVariance(results.ols);
                            var altVar = VizEngine.sampleVariance(results.alt);

                            viz.screenText('OLS (BLUE)', 120, 25, viz.colors.blue, 14, 'center');
                            viz.screenText('Var = ' + olsVar.toFixed(4), 120, 45, viz.colors.blue, 12, 'center');
                            viz.screenText('Group Mean Method', 420, 25, viz.colors.red, 14, 'center');
                            viz.screenText('Var = ' + altVar.toFixed(4), 420, 45, viz.colors.red, 12, 'center');
                            viz.screenText('true beta1 = ' + trueBeta1, 280, 70, viz.colors.green, 12, 'center');

                            // X-axis labels
                            for (var x = 0; x <= 3; x++) {
                                var sx = viz.toScreen(x, 0)[0];
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                                ctx.fillText(x.toString(), sx, sy0 + 4);
                            }
                        }

                        draw();

                        VizEngine.createButton(controls, 'Re-simulate', function() {
                            results = simulate();
                            draw();
                        });

                        VizEngine.createSlider(controls, 'sigma', 0.5, 4, sigma, 0.5, function(v) {
                            sigma = v;
                            results = simulate();
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Verify that \\(\\operatorname{Var}(\\hat{\\beta}_0) = \\sigma^2\\left(\\frac{1}{n} + \\frac{\\bar{X}^2}{S_{xx}}\\right)\\). When is \\(\\operatorname{Var}(\\hat{\\beta}_0)\\) minimized?',
                    hint: 'Use \\(\\hat{\\beta}_0 = \\bar{Y} - \\hat{\\beta}_1\\bar{X}\\) and the covariance between \\(\\bar{Y}\\) and \\(\\hat{\\beta}_1\\).',
                    solution: '\\(\\operatorname{Var}(\\hat{\\beta}_0) = \\operatorname{Var}(\\bar{Y}) + \\bar{X}^2\\operatorname{Var}(\\hat{\\beta}_1) - 2\\bar{X}\\operatorname{Cov}(\\bar{Y}, \\hat{\\beta}_1)\\). Since \\(\\operatorname{Cov}(\\bar{Y}, \\hat{\\beta}_1) = \\frac{1}{n}\\sum c_i \\sigma^2 = 0\\), we get \\(\\operatorname{Var}(\\hat{\\beta}_0) = \\sigma^2/n + \\bar{X}^2\\sigma^2/S_{xx}\\). The variance is minimized when \\(\\bar{X} = 0\\), meaning that centering the data yields the most precise intercept estimate.'
                },
                {
                    question: 'Prove that \\(\\text{RSS}/\\sigma^2\\) follows a \\(\\chi^2(n-2)\\) distribution under the normality assumption, and show that \\(\\text{RSS}\\) is independent of \\(\\hat{\\beta}_1\\).',
                    hint: 'Use properties of the hat matrix \\(H = X(X^TX)^{-1}X^T\\). Note that \\(\\text{RSS} = \\mathbf{Y}^T(I-H)\\mathbf{Y}\\) and \\(I-H\\) is idempotent with rank \\(n-2\\).',
                    solution: 'Let \\(\\mathbf{Y} \\sim N(X\\boldsymbol{\\beta}, \\sigma^2 I)\\). Define the hat matrix \\(H = X(X^TX)^{-1}X^T\\). Then \\(\\hat{\\mathbf{Y}} = H\\mathbf{Y}\\) and \\(\\mathbf{e} = (I-H)\\mathbf{Y}\\). Since \\(I-H\\) is idempotent with rank \\(n-2\\), by Cochran\'s theorem, \\(\\mathbf{e}^T\\mathbf{e}/\\sigma^2 \\sim \\chi^2(n-2)\\). Moreover, \\(\\hat{\\boldsymbol{\\beta}} = (X^TX)^{-1}X^T\\mathbf{Y}\\) has covariance with \\(\\mathbf{e}\\) equal to \\((X^TX)^{-1}X^T \\cdot \\sigma^2(I-H) = 0\\); under normality, zero correlation implies independence.'
                }
            ]
        },

        // ============================================================
        // Section 3: Inference and Hypothesis Testing
        // ============================================================
        {
            id: 'ch12-sec03',
            title: 'Inference and Hypothesis Testing',
            content: `
 <h2>Inference and Hypothesis Testing</h2>

 <p>Under the normal error assumption, the OLS estimators have exact sampling distributions, enabling rigorous statistical inference on the regression coefficients.</p>

 <h3>Exact Distributions Under Normality</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 12.7</div>
                    <div class="env-body">
                        <p>If \\(\\varepsilon_i \\overset{\\text{iid}}{\\sim} N(0, \\sigma^2)\\), then:</p>
                        <ol>
                            <li>\\(\\hat{\\beta}_1 \\sim N\\!\\left(\\beta_1,\\; \\dfrac{\\sigma^2}{S_{xx}}\\right)\\)</li>
                            <li>\\(\\hat{\\beta}_0 \\sim N\\!\\left(\\beta_0,\\; \\sigma^2\\left(\\dfrac{1}{n} + \\dfrac{\\bar{X}^2}{S_{xx}}\\right)\\right)\\)</li>
                            <li>\\(\\dfrac{(n-2)s^2}{\\sigma^2} \\sim \\chi^2(n-2)\\), and \\(s^2\\) is independent of \\((\\hat{\\beta}_0, \\hat{\\beta}_1)\\)</li>
                        </ol>
                    </div>
                </div>

 <h3>t-Test for the Slopet</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 12.8 (t-Statistic for the Slope)</div>
                    <div class="env-body">
                        <p>The t-statistic for testing \\(H_0: \\beta_1 = \\beta_{1,0}\\) vs \\(H_1: \\beta_1 \\neq \\beta_{1,0}\\) is:</p>
                        \\[T = \\frac{\\hat{\\beta}_1 - \\beta_{1,0}}{\\text{SE}(\\hat{\\beta}_1)} = \\frac{\\hat{\\beta}_1 - \\beta_{1,0}}{s / \\sqrt{S_{xx}}}\\]
                        <p>Under \\(H_0\\), \\(T \\sim t(n-2)\\). The most common case is \\(\\beta_{1,0} = 0\\), testing whether there is a linear relationship between \\(X\\) and \\(Y\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 12.9</div>
                    <div class="env-body">
                        <p>Using the data from Example 12.3 (\\(n=5\\)), we have \\(\\hat{\\beta}_1 = 1.99\\) and \\(S_{xx} = 10\\). Computing \\(\\text{RSS} = \\sum(Y_i - \\hat{Y}_i)^2 = 0.088\\), we get \\(s^2 = 0.088/3 = 0.0293\\).</p>
                        <p>Testing \\(H_0: \\beta_1 = 0\\): \\(T = 1.99/(\\sqrt{0.0293}/\\sqrt{10}) = 1.99/0.0541 = 36.8\\).</p>
                        <p>Comparing with the critical value \\(t_{0.025,3} = 3.182\\), since \\(|T| \\gg 3.182\\), we reject \\(H_0\\) with overwhelming significance.</p>
                    </div>
                </div>

 <h3>Confidence Interval for the Slope</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 12.10 (Confidence Interval for \\(\\beta_1\\))</div>
                    <div class="env-body">
                        <p>A \\(100(1-\\alpha)\\%\\) confidence interval for \\(\\beta_1\\) is:</p>
                        \\[\\hat{\\beta}_1 \\pm t_{\\alpha/2,\\, n-2} \\cdot \\frac{s}{\\sqrt{S_{xx}}}\\]
                        <p>Similarly, the confidence interval for \\(\\beta_0\\) is \\(\\hat{\\beta}_0 \\pm t_{\\alpha/2,\\, n-2} \\cdot s\\sqrt{1/n + \\bar{X}^2/S_{xx}}\\).</p>
                    </div>
                </div>

 <h3>Overall F-Test for Regression F</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 12.11 (ANOVA Decomposition and F-Test)</div>
                    <div class="env-body">
                        <p>Define the total variation decomposition:</p>
                        \\[\\underbrace{\\sum_{i=1}^{n}(Y_i - \\bar{Y})^2}_{\\text{SST}} = \\underbrace{\\sum_{i=1}^{n}(\\hat{Y}_i - \\bar{Y})^2}_{\\text{SSR}} + \\underbrace{\\sum_{i=1}^{n}(Y_i - \\hat{Y}_i)^2}_{\\text{RSS}}\\]
                        <p>The F-statistic for testing \\(H_0: \\beta_1 = 0\\) is:</p>
                        \\[F = \\frac{\\text{SSR}/1}{\\text{RSS}/(n-2)} = \\frac{\\text{MSR}}{\\text{MSE}}\\]
                        <p>Under \\(H_0\\), \\(F \\sim F(1, n-2)\\). In simple linear regression, \\(F = T^2\\) where \\(T\\) is the t-statistic for the slope.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The logic of the F-test: if \\(\\beta_1 = 0\\) (i.e., \\(X\\) has no linear effect on \\(Y\\)), then the model-explained variation SSR should be small and the F-value should be close to 0. If \\(\\beta_1 \\neq 0\\), SSR will be much larger than expected from pure noise, producing a large F-value. The larger the F, the stronger the evidence against the null hypothesis.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="t-test-viz"></div>
            `,
            visualizations: [
                {
                    id: 't-test-viz',
 title:'Interactive: Sampling Distribution of the Slope t-Statistict',
                    description: 'Simulate the t-statistic under H0 and H1; adjust beta1 to observe changes in test power',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400, scale: 40,
                            originX: 280, originY: 300
                        });

                        var nObs = 15;
                        var trueBeta1 = 0;
                        var sigma = 2;
                        var nSim = 1000;
                        var alpha = 0.05;

                        function runSimulation() {
                            var xs = [];
                            for (var i = 0; i < nObs; i++) xs.push(1 + i * 0.6);
                            var mx = VizEngine.mean(xs);
                            var sxx = 0;
                            for (var i = 0; i < nObs; i++) sxx += (xs[i] - mx) * (xs[i] - mx);

                            var tStats = [];
                            for (var sim = 0; sim < nSim; sim++) {
                                var ys = [];
                                for (var i = 0; i < nObs; i++) {
                                    ys.push(2 + trueBeta1 * xs[i] + VizEngine.randomNormal(0, sigma));
                                }
                                var my = VizEngine.mean(ys);
                                var sxy = 0;
                                for (var i = 0; i < nObs; i++) sxy += (xs[i] - mx) * (ys[i] - my);
                                var b1Hat = sxy / sxx;
                                var rss = 0;
                                var b0Hat = my - b1Hat * mx;
                                for (var i = 0; i < nObs; i++) {
                                    var ei = ys[i] - b0Hat - b1Hat * xs[i];
                                    rss += ei * ei;
                                }
                                var s2 = rss / (nObs - 2);
                                var se = Math.sqrt(s2 / sxx);
                                if (se > 1e-10) tStats.push(b1Hat / se);
                            }
                            return tStats;
                        }

                        var tStats = runSimulation();

                        function draw() {
                            viz.clear();

                            var ctx = viz.ctx;
                            // Axes
                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1.5;
                            var sy0 = viz.toScreen(0, 0)[1];
                            ctx.beginPath(); ctx.moveTo(10, sy0); ctx.lineTo(viz.width - 10, sy0); ctx.stroke();

                            // Theoretical t-distribution under H0
                            var df = nObs - 2;
                            viz.drawFunction(function(x) { return VizEngine.tPDF(x, df); }, -6, 6, viz.colors.text + '88', 1.5);

                            // Histogram of simulated t-stats
                            var binMin = -6, binMax = 6, nBins = 40;
                            var bins = [];
                            var w = (binMax - binMin) / nBins;
                            for (var b = 0; b < nBins; b++) {
                                bins.push({ x: binMin + b * w, width: w, height: 0 });
                            }
                            for (var i = 0; i < tStats.length; i++) {
                                var idx = Math.floor((tStats[i] - binMin) / w);
                                if (idx >= 0 && idx < nBins) bins[idx].height++;
                            }
                            for (var b = 0; b < nBins; b++) {
                                bins[b].height = bins[b].height / (tStats.length * w);
                            }
                            viz.drawHistogram(bins, viz.colors.blue + '44', viz.colors.blue, 1);

                            // Critical values (approximate for t-distribution)
                            var tCrit = 2.16; // approx for df=13
                            if (df >= 30) tCrit = 1.96;
                            else if (df >= 20) tCrit = 2.09;
                            else if (df >= 15) tCrit = 2.13;
                            else if (df >= 10) tCrit = 2.23;

                            // Shade rejection regions
                            viz.shadeUnder(function(x) { return VizEngine.tPDF(x, df); }, -6, -tCrit, viz.colors.red + '44');
                            viz.shadeUnder(function(x) { return VizEngine.tPDF(x, df); }, tCrit, 6, viz.colors.red + '44');

                            // Critical value lines
                            var sxCritL = viz.toScreen(-tCrit, 0)[0];
                            var sxCritR = viz.toScreen(tCrit, 0)[0];
                            ctx.strokeStyle = viz.colors.red; ctx.lineWidth = 1.5;
                            ctx.setLineDash([4, 4]);
                            ctx.beginPath(); ctx.moveTo(sxCritL, sy0); ctx.lineTo(sxCritL, 50); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(sxCritR, sy0); ctx.lineTo(sxCritR, 50); ctx.stroke();
                            ctx.setLineDash([]);

                            // Count rejections
                            var nReject = 0;
                            for (var i = 0; i < tStats.length; i++) {
                                if (Math.abs(tStats[i]) > tCrit) nReject++;
                            }
                            var power = nReject / tStats.length;

                            viz.screenText('true beta1 = ' + trueBeta1.toFixed(1), 280, 20, viz.colors.orange, 14, 'center');
                            viz.screenText('Rejection rate (power) = ' + (power * 100).toFixed(1) + '%', 280, 42, viz.colors.green, 13, 'center');
                            viz.screenText('t(' + df + ') distribution, alpha = ' + alpha, 280, 62, viz.colors.text, 11, 'center');

                            // x labels
                            ctx.fillStyle = viz.colors.text; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            for (var x = -5; x <= 5; x += 1) {
                                var sx = viz.toScreen(x, 0)[0];
                                ctx.fillText(x.toString(), sx, sy0 + 4);
                            }
                        }

                        draw();

                        VizEngine.createSlider(controls, 'true beta1', 0, 3, 0, 0.1, function(v) {
                            trueBeta1 = v;
                            tStats = runSimulation();
                            draw();
                        });

                        VizEngine.createSlider(controls, 'sigma', 0.5, 5, sigma, 0.5, function(v) {
                            sigma = v;
                            tStats = runSimulation();
                            draw();
                        });

                        VizEngine.createButton(controls, 'Re-simulate', function() {
                            tStats = runSimulation();
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'In simple linear regression, prove that the F-statistic equals the square of the t-statistic: \\(F = T^2\\).',
                    hint: 'Express SSR in terms of \\(\\hat{\\beta}_1\\): \\(\\text{SSR} = \\hat{\\beta}_1^2 S_{xx}\\).',
                    solution: '\\(\\text{SSR} = \\sum(\\hat{Y}_i - \\bar{Y})^2 = \\hat{\\beta}_1^2 \\sum(X_i - \\bar{X})^2 = \\hat{\\beta}_1^2 S_{xx}\\). Therefore \\(F = \\hat{\\beta}_1^2 S_{xx} / s^2 = (\\hat{\\beta}_1 / (s/\\sqrt{S_{xx}}))^2 = T^2\\). This also explains why the t-test and the F-test are equivalent in simple linear regression.'
                },
                {
                    question: 'Construct a 95% confidence interval for \\(\\beta_1\\). Given: \\(n=20\\), \\(\\hat{\\beta}_1=2.5\\), \\(S_{xx}=50\\), \\(s^2=4\\).',
                    hint: 'Use the formula \\(\\hat{\\beta}_1 \\pm t_{0.025,18} \\cdot s/\\sqrt{S_{xx}}\\). From the t-table, \\(t_{0.025,18} \\approx 2.101\\).',
                    solution: '\\(\\text{SE}(\\hat{\\beta}_1) = s/\\sqrt{S_{xx}} = 2/\\sqrt{50} = 0.2828\\). The confidence interval is \\(2.5 \\pm 2.101 \\times 0.2828 = 2.5 \\pm 0.594 = [1.906, 3.094]\\). Since 0 is not in the interval, we reject \\(H_0:\\beta_1=0\\) at the 5% significance level.'
                },
                {
                    question: 'If the sample size \\(n\\) is fixed, what effect does increasing \\(S_{xx}\\) (i.e., increasing the spread of the \\(X_i\\)) have on inference about \\(\\hat{\\beta}_1\\)? What are the implications for experimental design?',
                    hint: 'Examine \\(\\operatorname{Var}(\\hat{\\beta}_1)\\) and the t-statistic as functions of \\(S_{xx}\\).',
                    solution: '\\(\\operatorname{Var}(\\hat{\\beta}_1) = \\sigma^2/S_{xx}\\) decreases as \\(S_{xx}\\) increases. Consequently the t-statistic \\(|T| = |\\hat{\\beta}_1|\\sqrt{S_{xx}}/s\\) increases, confidence intervals narrow, and test power increases. The design implication is that design points \\(X_i\\) should be spread as widely as possible (e.g., placed at the extremes of the range of \\(X\\)) to obtain the most precise slope estimate. However, a tradeoff is needed: if the linearity assumption does not hold in the extreme regions, extrapolation may cause model failure.'
                }
            ]
        },

        // ============================================================
        // Section 4: Residual Analysis and Model Diagnostics
        // ============================================================
        {
            id: 'ch12-sec04',
            title: 'Residual Analysis and Model Diagnostics',
            content: `
 <h2>Residual Analysis and Model Diagnostics</h2>

 <p>The validity of a regression model depends on whether its assumptions are reasonable. Residual analysis is the primary tool for checking model assumptions. By examining graphical patterns in the residuals, we can detect nonlinearity, heteroscedasticity, correlation, and outliers.</p>

 <h3>Residuals and Standardized Residuals</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 12.12 (Types of Residuals)</div>
                    <div class="env-body">
 <p>Let the hat matrix be \\(H = X(X^TX)^{-1}X^T\\) with diagonal elements \\(h_{ii}\\) (leverage values).</p>
                        <ul>
 <li><strong>Ordinary residuals</strong> : \\(e_i = Y_i - \\hat{Y}_i\\)</li>
 <li><strong>Standardized residuals</strong> : \\(r_i = \\dfrac{e_i}{s\\sqrt{1-h_{ii}}}\\), where \\(\\operatorname{Var}(e_i) = \\sigma^2(1-h_{ii})\\)</li>
 <li><strong>Studentized deleted residuals</strong> : \\(t_i = \\dfrac{e_i}{s_{(i)}\\sqrt{1-h_{ii}}}\\), where \\(s_{(i)}\\) is the standard error estimate with the \\(i\\)-th observation deleted. Under \\(H_0\\), \\(t_i \\sim t(n-3)\\)</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 12.13 (Properties of Leverage Values)</div>
                    <div class="env-body">
                        <p>In simple linear regression, the leverage values are:</p>
                        \\[h_{ii} = \\frac{1}{n} + \\frac{(X_i - \\bar{X})^2}{S_{xx}}\\]
                        <p>They satisfy \\(1/n \\leq h_{ii} \\leq 1\\) and \\(\\sum_{i=1}^n h_{ii} = 2\\) (equal to the number of parameters). The farther \\(X_i\\) is from the mean, the larger its leverage value and the stronger its influence on the regression line.</p>
                    </div>
                </div>

 <h3>Coefficient of Determination \\(R^2\\)</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 12.14 (Coefficient of Determination)</div>
                    <div class="env-body">
 <p>The <strong>coefficient of determination</strong> is defined as:</p>
                        \\[R^2 = \\frac{\\text{SSR}}{\\text{SST}} = 1 - \\frac{\\text{RSS}}{\\text{SST}} = 1 - \\frac{\\sum e_i^2}{\\sum(Y_i - \\bar{Y})^2}\\]
                        <p>\\(R^2 \\in [0, 1]\\) measures the proportion of total variation explained by the model. In simple linear regression, \\(R^2 = r_{XY}^2\\), the square of the sample correlation coefficient.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>A high \\(R^2\\) does not mean the model is correct. Anscombe's quartet classically demonstrates that completely different data patterns can produce nearly identical \\(R^2\\) values and regression equations. Therefore, visual inspection of residual plots is indispensable. Furthermore, \\(R^2\\) monotonically increases when adding variables, even meaningless ones. In multiple regression, the adjusted \\(R^2_{\\text{adj}} = 1 - \\frac{\\text{RSS}/(n-p)}{\\text{SST}/(n-1)}\\) should be used instead.</p>
                    </div>
                </div>

 <h3>Diagnostic Plots</h3>

                <p>A typical four-panel residual diagnostic display includes:</p>
                <ol>
                    <li><strong>Residuals vs Fitted</strong>: checks linearity and homoscedasticity; ideally shows no systematic pattern</li>
                    <li><strong>Normal Q-Q Plot</strong>: checks normality of residuals</li>
                    <li><strong>Scale-Location Plot</strong>: \\(\\sqrt{|r_i|}\\) vs \\(\\hat{Y}_i\\), checks variance homogeneity</li>
                    <li><strong>Residuals vs Leverage</strong>: identifies high-influence points (high leverage + large residual)</li>
                </ol>

                <div class="env-block definition">
                    <div class="env-title">Definition 12.15 (Cook's Distance)</div>
                    <div class="env-body">
                        <p>Cook's distance measures the overall influence of deleting the \\(i\\)-th observation on all fitted values:</p>
                        \\[D_i = \\frac{(\\hat{\\mathbf{Y}} - \\hat{\\mathbf{Y}}_{(i)})^T(\\hat{\\mathbf{Y}} - \\hat{\\mathbf{Y}}_{(i)})}{p \\cdot s^2} = \\frac{r_i^2}{p} \\cdot \\frac{h_{ii}}{1-h_{ii}}\\]
                        <p>where \\(p\\) is the number of parameters. Rule of thumb: \\(D_i > 1\\) or \\(D_i > 4/n\\) suggests a highly influential point.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="residual-diagnostics-viz"></div>
            `,
            visualizations: [
                {
                    id: 'residual-diagnostics-viz',
 title:'Interactive: Four-Panel Residual Diagnostics',
                    description: 'Generate random regression data and view four diagnostic plots; select different data patterns to observe violations',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 500, scale: 1,
                            originX: 0, originY: 0
                        });

                        var dataMode = 'normal';
                        var nPts = 40;

                        function generateData() {
                            var xs = [], ys = [];
                            for (var i = 0; i < nPts; i++) {
                                var x = 0.5 + i * 9.5 / nPts + VizEngine.randomNormal(0, 0.1);
                                xs.push(x);
                            }
                            xs.sort(function(a, b) { return a - b; });

                            if (dataMode === 'normal') {
                                for (var i = 0; i < nPts; i++) ys.push(2 + 1.5 * xs[i] + VizEngine.randomNormal(0, 1.5));
                            } else if (dataMode === 'nonlinear') {
                                for (var i = 0; i < nPts; i++) ys.push(2 + 0.3 * xs[i] * xs[i] + VizEngine.randomNormal(0, 1.5));
                            } else if (dataMode === 'heteroscedastic') {
                                for (var i = 0; i < nPts; i++) ys.push(2 + 1.5 * xs[i] + VizEngine.randomNormal(0, 0.3 * xs[i]));
                            } else if (dataMode === 'outlier') {
                                for (var i = 0; i < nPts; i++) {
                                    var y = 2 + 1.5 * xs[i] + VizEngine.randomNormal(0, 1);
                                    if (i === nPts - 1) y = 2 + 1.5 * xs[i] + 12; // outlier
                                    ys.push(y);
                                }
                            }
                            return { xs: xs, ys: ys };
                        }

                        function fitOLS(xs, ys) {
                            var n = xs.length;
                            var mx = VizEngine.mean(xs), my = VizEngine.mean(ys);
                            var sxx = 0, sxy = 0;
                            for (var i = 0; i < n; i++) {
                                sxx += (xs[i] - mx) * (xs[i] - mx);
                                sxy += (xs[i] - mx) * (ys[i] - my);
                            }
                            var b1 = sxy / sxx, b0 = my - b1 * mx;
                            var yhat = [], resid = [];
                            var rss = 0;
                            for (var i = 0; i < n; i++) {
                                yhat.push(b0 + b1 * xs[i]);
                                resid.push(ys[i] - yhat[i]);
                                rss += resid[i] * resid[i];
                            }
                            var s2 = rss / (n - 2);
                            var hii = [];
                            for (var i = 0; i < n; i++) {
                                hii.push(1 / n + (xs[i] - mx) * (xs[i] - mx) / sxx);
                            }
                            var stdResid = [];
                            for (var i = 0; i < n; i++) {
                                stdResid.push(resid[i] / (Math.sqrt(s2) * Math.sqrt(1 - hii[i])));
                            }
                            var sst = 0;
                            for (var i = 0; i < n; i++) sst += (ys[i] - my) * (ys[i] - my);
                            var r2 = 1 - rss / sst;
                            return { b0: b0, b1: b1, yhat: yhat, resid: resid, stdResid: stdResid, hii: hii, s2: s2, r2: r2 };
                        }

                        var data = generateData();
                        var fit = fitOLS(data.xs, data.ys);

                        function drawPanel(ctx, px, py, pw, ph, title) {
                            ctx.strokeStyle = '#30363d';
                            ctx.lineWidth = 1;
                            ctx.strokeRect(px, py, pw, ph);
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 11px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.textBaseline = 'top';
                            ctx.fillText(title, px + pw / 2, py + 4);
                        }

                        function mapRange(val, srcMin, srcMax, dstMin, dstMax) {
                            return dstMin + (val - srcMin) / (srcMax - srcMin) * (dstMax - dstMin);
                        }

                        function draw() {
                            var ctx = viz.ctx;
                            ctx.fillStyle = viz.colors.bg;
                            ctx.fillRect(0, 0, viz.width, viz.height);

                            var pw = 260, ph = 220;
                            var panels = [
                                { x: 15, y: 15, title: 'Residuals vs Fitted' },
                                { x: 285, y: 15, title: 'Normal Q-Q' },
                                { x: 15, y: 255, title: 'Scale-Location' },
                                { x: 285, y: 255, title: 'Residuals vs Leverage' }
                            ];

                            for (var p = 0; p < 4; p++) {
                                drawPanel(ctx, panels[p].x, panels[p].y, pw, ph, panels[p].title);
                            }

                            var n = data.xs.length;
                            var margin = 30;

                            // Panel 1: Residuals vs Fitted
                            (function() {
                                var px = panels[0].x, py = panels[0].y;
                                var yhatMin = Math.min.apply(null, fit.yhat) - 0.5;
                                var yhatMax = Math.max.apply(null, fit.yhat) + 0.5;
                                var rMin = Math.min.apply(null, fit.resid) - 0.5;
                                var rMax = Math.max.apply(null, fit.resid) + 0.5;

                                // zero line
                                var zy = mapRange(0, rMax, rMin, py + 20, py + ph - margin);
                                ctx.strokeStyle = viz.colors.text + '66'; ctx.lineWidth = 1;
                                ctx.setLineDash([4, 4]);
                                ctx.beginPath(); ctx.moveTo(px + margin, zy); ctx.lineTo(px + pw - 10, zy); ctx.stroke();
                                ctx.setLineDash([]);

                                for (var i = 0; i < n; i++) {
                                    var sx = mapRange(fit.yhat[i], yhatMin, yhatMax, px + margin, px + pw - 10);
                                    var sy = mapRange(fit.resid[i], rMax, rMin, py + 20, py + ph - margin);
                                    ctx.fillStyle = viz.colors.blue;
                                    ctx.beginPath(); ctx.arc(sx, sy, 3, 0, Math.PI * 2); ctx.fill();
                                }
                            })();

                            // Panel 2: Normal Q-Q
                            (function() {
                                var px = panels[1].x, py = panels[1].y;
                                var sorted = fit.stdResid.slice().sort(function(a, b) { return a - b; });
                                var theoretical = [];
                                for (var i = 0; i < n; i++) {
                                    var p = (i + 0.5) / n;
                                    // inverse normal approximation
                                    var t = p < 0.5 ? p : 1 - p;
                                    var sign = p < 0.5 ? -1 : 1;
                                    var a = Math.sqrt(-2 * Math.log(t));
                                    var z = sign * (a - (2.30753 + 0.27061 * a) / (1 + 0.99229 * a + 0.04481 * a * a));
                                    theoretical.push(z);
                                }

                                var qMin = Math.min(theoretical[0], sorted[0]) - 0.3;
                                var qMax = Math.max(theoretical[n - 1], sorted[n - 1]) + 0.3;

                                // 45-degree line
                                ctx.strokeStyle = viz.colors.red + '88'; ctx.lineWidth = 1.5;
                                var lx1 = mapRange(qMin, qMin, qMax, px + margin, px + pw - 10);
                                var ly1 = mapRange(qMin, qMax, qMin, py + 20, py + ph - margin);
                                var lx2 = mapRange(qMax, qMin, qMax, px + margin, px + pw - 10);
                                var ly2 = mapRange(qMax, qMax, qMin, py + 20, py + ph - margin);
                                ctx.beginPath(); ctx.moveTo(lx1, ly1); ctx.lineTo(lx2, ly2); ctx.stroke();

                                for (var i = 0; i < n; i++) {
                                    var sx = mapRange(theoretical[i], qMin, qMax, px + margin, px + pw - 10);
                                    var sy = mapRange(sorted[i], qMax, qMin, py + 20, py + ph - margin);
                                    ctx.fillStyle = viz.colors.blue;
                                    ctx.beginPath(); ctx.arc(sx, sy, 3, 0, Math.PI * 2); ctx.fill();
                                }
                            })();

                            // Panel 3: Scale-Location
                            (function() {
                                var px = panels[2].x, py = panels[2].y;
                                var sqrtAbs = [];
                                for (var i = 0; i < n; i++) sqrtAbs.push(Math.sqrt(Math.abs(fit.stdResid[i])));

                                var yhatMin = Math.min.apply(null, fit.yhat) - 0.5;
                                var yhatMax = Math.max.apply(null, fit.yhat) + 0.5;
                                var sMax = Math.max.apply(null, sqrtAbs) + 0.2;

                                for (var i = 0; i < n; i++) {
                                    var sx = mapRange(fit.yhat[i], yhatMin, yhatMax, px + margin, px + pw - 10);
                                    var sy = mapRange(sqrtAbs[i], sMax, 0, py + 20, py + ph - margin);
                                    ctx.fillStyle = viz.colors.teal;
                                    ctx.beginPath(); ctx.arc(sx, sy, 3, 0, Math.PI * 2); ctx.fill();
                                }
                            })();

                            // Panel 4: Residuals vs Leverage
                            (function() {
                                var px = panels[3].x, py = panels[3].y;
                                var hMin = 0, hMax = Math.max.apply(null, fit.hii) * 1.2;
                                var rMin = Math.min.apply(null, fit.stdResid) - 0.5;
                                var rMax = Math.max.apply(null, fit.stdResid) + 0.5;

                                // zero line
                                var zy = mapRange(0, rMax, rMin, py + 20, py + ph - margin);
                                ctx.strokeStyle = viz.colors.text + '66'; ctx.lineWidth = 1;
                                ctx.setLineDash([4, 4]);
                                ctx.beginPath(); ctx.moveTo(px + margin, zy); ctx.lineTo(px + pw - 10, zy); ctx.stroke();
                                ctx.setLineDash([]);

                                // Cook's distance = 0.5 contour
                                ctx.strokeStyle = viz.colors.red + '44'; ctx.lineWidth = 1;
                                ctx.setLineDash([3, 3]);
                                for (var sign = -1; sign <= 1; sign += 2) {
                                    ctx.beginPath();
                                    var started = false;
                                    for (var h = 0.01; h <= hMax; h += 0.005) {
                                        var r = sign * Math.sqrt(0.5 * 2 * (1 - h) / h);
                                        if (r > rMax || r < rMin) continue;
                                        var sx = mapRange(h, hMin, hMax, px + margin, px + pw - 10);
                                        var sy = mapRange(r, rMax, rMin, py + 20, py + ph - margin);
                                        if (!started) { ctx.moveTo(sx, sy); started = true; }
                                        else ctx.lineTo(sx, sy);
                                    }
                                    ctx.stroke();
                                }
                                ctx.setLineDash([]);

                                for (var i = 0; i < n; i++) {
                                    var sx = mapRange(fit.hii[i], hMin, hMax, px + margin, px + pw - 10);
                                    var sy = mapRange(fit.stdResid[i], rMax, rMin, py + 20, py + ph - margin);
                                    ctx.fillStyle = viz.colors.orange;
                                    ctx.beginPath(); ctx.arc(sx, sy, 3, 0, Math.PI * 2); ctx.fill();
                                }
                            })();

                            // R-squared display
                            ctx.fillStyle = viz.colors.green;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'right'; ctx.textBaseline = 'bottom';
                            ctx.fillText('R-squared = ' + fit.r2.toFixed(4), viz.width - 20, viz.height - 5);

                            ctx.fillStyle = viz.colors.text;
                            ctx.textAlign = 'left';
                            ctx.fillText('Mode: ' + dataMode, 20, viz.height - 5);
                        }

                        draw();

                        VizEngine.createButton(controls, 'Normal', function() {
                            dataMode = 'normal'; data = generateData(); fit = fitOLS(data.xs, data.ys); draw();
                        });
                        VizEngine.createButton(controls, 'Nonlinear', function() {
                            dataMode = 'nonlinear'; data = generateData(); fit = fitOLS(data.xs, data.ys); draw();
                        });
                        VizEngine.createButton(controls, 'Heteroscedastic', function() {
                            dataMode = 'heteroscedastic'; data = generateData(); fit = fitOLS(data.xs, data.ys); draw();
                        });
                        VizEngine.createButton(controls, 'Outlier', function() {
                            dataMode = 'outlier'; data = generateData(); fit = fitOLS(data.xs, data.ys); draw();
                        });
                        VizEngine.createButton(controls, 'Regenerate', function() {
                            data = generateData(); fit = fitOLS(data.xs, data.ys); draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that in simple linear regression, \\(R^2 = r_{XY}^2\\), i.e., the coefficient of determination equals the square of the Pearson correlation coefficient.',
                    hint: 'Express SSR and SST using \\(S_{xx}, S_{xy}, S_{yy}\\).',
                    solution: '\\(\\text{SSR} = \\hat{\\beta}_1^2 S_{xx} = S_{xy}^2/S_{xx}\\) and \\(\\text{SST} = S_{yy}\\). Therefore \\(R^2 = \\text{SSR}/\\text{SST} = S_{xy}^2/(S_{xx} \\cdot S_{yy}) = r_{XY}^2\\), where \\(r_{XY} = S_{xy}/\\sqrt{S_{xx} S_{yy}}\\) is the sample Pearson correlation coefficient.'
                },
                {
                    question: 'A residuals vs fitted values plot shows a "funnel shape" (narrow on the left, wide on the right). What does this indicate and how should it be addressed?',
                    hint: 'Consider violation of the homoscedasticity assumption and possible variance-stabilizing transformations.',
                    solution: 'A funnel-shaped residual plot indicates heteroscedasticity: the variance increases with the fitted values, violating the \\(\\operatorname{Var}(\\varepsilon_i) = \\sigma^2\\) assumption. Remedies include: (1) applying a log or Box-Cox transformation to the response variable to stabilize the variance; (2) using weighted least squares (WLS), assigning smaller weights to observations with larger variance; (3) using Huber-White sandwich estimators to obtain heteroscedasticity-robust standard errors.'
                },
                {
                    question: 'Prove that \\(\\sum_{i=1}^n h_{ii} = p\\) (the number of parameters), and explain why \\(h_{ii}\\) is called the "leverage" value.',
                    hint: 'Use \\(\\operatorname{tr}(H) = \\operatorname{tr}(X(X^TX)^{-1}X^T)\\) and the cyclic property of the trace. For the "leverage" interpretation, examine the sensitivity of \\(\\hat{Y}_i\\) to \\(Y_i\\).',
                    solution: '\\(\\sum h_{ii} = \\operatorname{tr}(H) = \\operatorname{tr}(X(X^TX)^{-1}X^T) = \\operatorname{tr}((X^TX)^{-1}X^TX) = \\operatorname{tr}(I_p) = p\\). The name "leverage" comes from the fact that \\(\\partial \\hat{Y}_i / \\partial Y_i = h_{ii}\\): changing the \\(i\\)-th response value by one unit changes the fitted value by \\(h_{ii}\\) units. When \\(h_{ii}\\) is close to 1, that observation almost entirely "leverages" its fitted value, exerting extreme influence on the regression surface.'
                }
            ]
        },

        // ============================================================
        // Section 5: Prediction and Confidence Bands
        // ============================================================
        {
            id: 'ch12-sec05',
            title: 'Prediction and Confidence Bands',
            content: `
 <h2>Prediction and Confidence Bands</h2>

                <p>One of the key applications of regression analysis is prediction. Given a new \\(X\\) value \\(x_0\\), we need interval estimates for \\(\\mathbb{E}[Y|X=x_0]\\) or for a new observation \\(Y_0\\). The sources of uncertainty differ between these two, leading to fundamentally different interval widths.</p>

 <h3>Confidence Interval for Mean Response</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 12.16 (CI for Mean Response)</div>
                    <div class="env-body">
                        <p>For a given \\(x_0\\), \\(\\hat{Y}_0 = \\hat{\\beta}_0 + \\hat{\\beta}_1 x_0\\) is an unbiased estimator of \\(\\mathbb{E}[Y|X=x_0] = \\beta_0 + \\beta_1 x_0\\), with variance:</p>
                        \\[\\operatorname{Var}(\\hat{Y}_0) = \\sigma^2 \\left(\\frac{1}{n} + \\frac{(x_0 - \\bar{X})^2}{S_{xx}}\\right)\\]
                        <p>A \\(100(1-\\alpha)\\%\\) confidence interval for \\(\\mathbb{E}[Y|X=x_0]\\) is:</p>
                        \\[\\hat{Y}_0 \\pm t_{\\alpha/2,\\,n-2} \\cdot s\\sqrt{\\frac{1}{n} + \\frac{(x_0 - \\bar{X})^2}{S_{xx}}}\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The width of the confidence interval depends on \\((x_0 - \\bar{X})^2/S_{xx}\\): it is narrowest at \\(x_0 = \\bar{X}\\) and gradually widens as we move away from the mean, forming a hyperbolic "confidence band." This reflects a natural phenomenon: we are most certain about the regression line's position near the center of the data, and least certain in the extrapolation region.</p>
                    </div>
                </div>

 <h3>Prediction Interval for a New Observation</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 12.17 (Prediction Interval)</div>
                    <div class="env-body">
                        <p>For a new independent observation \\(Y_0 = \\beta_0 + \\beta_1 x_0 + \\varepsilon_0\\), the variance of the prediction error \\(Y_0 - \\hat{Y}_0\\) is:</p>
                        \\[\\operatorname{Var}(Y_0 - \\hat{Y}_0) = \\sigma^2 \\left(1 + \\frac{1}{n} + \\frac{(x_0 - \\bar{X})^2}{S_{xx}}\\right)\\]
                        <p>Therefore a \\(100(1-\\alpha)\\%\\) prediction interval for \\(Y_0\\) is:</p>
                        \\[\\hat{Y}_0 \\pm t_{\\alpha/2,\\,n-2} \\cdot s\\sqrt{1 + \\frac{1}{n} + \\frac{(x_0 - \\bar{X})^2}{S_{xx}}}\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The prediction error is \\(Y_0 - \\hat{Y}_0 = (\\beta_0 + \\beta_1 x_0 + \\varepsilon_0) - (\\hat{\\beta}_0 + \\hat{\\beta}_1 x_0)\\).</p>
                        <p>Since \\(\\varepsilon_0\\) is independent of the training data, \\(Y_0\\) and \\(\\hat{Y}_0\\) are uncorrelated, so:</p>
                        \\[\\operatorname{Var}(Y_0 - \\hat{Y}_0) = \\operatorname{Var}(Y_0) + \\operatorname{Var}(\\hat{Y}_0) = \\sigma^2 + \\sigma^2\\left(\\frac{1}{n} + \\frac{(x_0 - \\bar{X})^2}{S_{xx}}\\right)\\]
                        <p>The first \\(\\sigma^2\\) comes from the inherent randomness of the new observation (irreducible noise). After standardization, \\((Y_0 - \\hat{Y}_0)/\\text{se} \\sim t(n-2)\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>The prediction interval is always wider than the confidence interval because it includes the irreducible random error \\(\\sigma^2\\). Even as \\(n \\to \\infty\\), the prediction interval width does not shrink to zero (it approaches \\(\\pm t_{\\alpha/2,\\infty} \\cdot \\sigma \\approx \\pm z_{\\alpha/2} \\cdot \\sigma\\)), whereas the confidence interval does shrink to zero.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>For a simultaneous confidence band over all \\(x_0\\) (the Working-Hotelling band), replace \\(t_{\\alpha/2,n-2}\\) with \\(\\sqrt{2F_{\\alpha,2,n-2}}\\) to control the simultaneous coverage probability. The Scheffe method is also applicable. These bands are more conservative than pointwise confidence intervals.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="confidence-prediction-bands-viz"></div>

                <div class="env-block example">
                    <div class="env-title">Example 12.18</div>
                    <div class="env-body">
                        <p>Consider the data from Example 12.3 (\\(n=5, \\hat{\\beta}_0=0.05, \\hat{\\beta}_1=1.99, s^2=0.0293, \\bar{X}=3, S_{xx}=10\\)). At \\(x_0 = 4\\):</p>
                        <ul>
                            <li>Point prediction: \\(\\hat{Y}_0 = 0.05 + 1.99 \\times 4 = 8.01\\)</li>
                            <li>95% CI for the mean (\\(t_{0.025,3}=3.182\\)): \\(8.01 \\pm 3.182 \\times \\sqrt{0.0293} \\times \\sqrt{0.2+0.1} = 8.01 \\pm 0.30\\), i.e., \\([7.71, 8.31]\\)</li>
                            <li>95% prediction interval: \\(8.01 \\pm 3.182 \\times \\sqrt{0.0293} \\times \\sqrt{1.3} = 8.01 \\pm 0.62\\), i.e., \\([7.39, 8.63]\\)</li>
                        </ul>
                        <p>The prediction interval is indeed wider.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'confidence-prediction-bands-viz',
 title:'Interactive: Confidence Band and Prediction Band',
                    description: 'View the confidence band (narrow) and prediction band (wide) for the regression line; adjust sample size and noise level',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400, scale: 35,
                            originX: 60, originY: 340
                        });

                        var nObs = 25;
                        var trueBeta0 = 1;
                        var trueBeta1 = 1.2;
                        var sigma = 1.5;

                        function generateAndFit() {
                            var xs = [], ys = [];
                            for (var i = 0; i < nObs; i++) {
                                var x = 0.5 + i * 9 / (nObs - 1);
                                xs.push(x);
                                ys.push(trueBeta0 + trueBeta1 * x + VizEngine.randomNormal(0, sigma));
                            }

                            var mx = VizEngine.mean(xs), my = VizEngine.mean(ys);
                            var sxx = 0, sxy = 0;
                            for (var i = 0; i < nObs; i++) {
                                sxx += (xs[i] - mx) * (xs[i] - mx);
                                sxy += (xs[i] - mx) * (ys[i] - my);
                            }
                            var b1 = sxy / sxx, b0 = my - b1 * mx;
                            var rss = 0;
                            for (var i = 0; i < nObs; i++) {
                                var e = ys[i] - b0 - b1 * xs[i];
                                rss += e * e;
                            }
                            var s2 = rss / (nObs - 2);
                            var s = Math.sqrt(s2);

                            // t critical value approximation for alpha=0.05
                            var df = nObs - 2;
                            var tCrit;
                            if (df >= 120) tCrit = 1.98;
                            else if (df >= 60) tCrit = 2.00;
                            else if (df >= 40) tCrit = 2.02;
                            else if (df >= 30) tCrit = 2.04;
                            else if (df >= 25) tCrit = 2.06;
                            else if (df >= 20) tCrit = 2.09;
                            else if (df >= 15) tCrit = 2.13;
                            else if (df >= 10) tCrit = 2.23;
                            else if (df >= 5) tCrit = 2.57;
                            else tCrit = 3.18;

                            return {
                                xs: xs, ys: ys, b0: b0, b1: b1, s: s, s2: s2,
                                mx: mx, sxx: sxx, tCrit: tCrit, df: df
                            };
                        }

                        var model = generateAndFit();

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var m = model;
                            var xPlotMin = -0.5, xPlotMax = 10.5;

                            // Prediction band (wider, drawn first)
                            viz.shadeBetween(
                                function(x) {
                                    var se = m.s * Math.sqrt(1 + 1 / nObs + (x - m.mx) * (x - m.mx) / m.sxx);
                                    return m.b0 + m.b1 * x + m.tCrit * se;
                                },
                                function(x) {
                                    var se = m.s * Math.sqrt(1 + 1 / nObs + (x - m.mx) * (x - m.mx) / m.sxx);
                                    return m.b0 + m.b1 * x - m.tCrit * se;
                                },
                                xPlotMin, xPlotMax, viz.colors.purple + '22'
                            );

                            // Confidence band (narrower)
                            viz.shadeBetween(
                                function(x) {
                                    var se = m.s * Math.sqrt(1 / nObs + (x - m.mx) * (x - m.mx) / m.sxx);
                                    return m.b0 + m.b1 * x + m.tCrit * se;
                                },
                                function(x) {
                                    var se = m.s * Math.sqrt(1 / nObs + (x - m.mx) * (x - m.mx) / m.sxx);
                                    return m.b0 + m.b1 * x - m.tCrit * se;
                                },
                                xPlotMin, xPlotMax, viz.colors.blue + '33'
                            );

                            // Upper/lower CI lines
                            viz.drawFunction(function(x) {
                                var se = m.s * Math.sqrt(1 / nObs + (x - m.mx) * (x - m.mx) / m.sxx);
                                return m.b0 + m.b1 * x + m.tCrit * se;
                            }, xPlotMin, xPlotMax, viz.colors.blue, 1.5);
                            viz.drawFunction(function(x) {
                                var se = m.s * Math.sqrt(1 / nObs + (x - m.mx) * (x - m.mx) / m.sxx);
                                return m.b0 + m.b1 * x - m.tCrit * se;
                            }, xPlotMin, xPlotMax, viz.colors.blue, 1.5);

                            // Upper/lower PI lines
                            viz.drawFunction(function(x) {
                                var se = m.s * Math.sqrt(1 + 1 / nObs + (x - m.mx) * (x - m.mx) / m.sxx);
                                return m.b0 + m.b1 * x + m.tCrit * se;
                            }, xPlotMin, xPlotMax, viz.colors.purple, 1.5, 200);
                            viz.drawFunction(function(x) {
                                var se = m.s * Math.sqrt(1 + 1 / nObs + (x - m.mx) * (x - m.mx) / m.sxx);
                                return m.b0 + m.b1 * x - m.tCrit * se;
                            }, xPlotMin, xPlotMax, viz.colors.purple, 1.5, 200);

                            // Regression line
                            viz.drawFunction(function(x) { return m.b0 + m.b1 * x; }, xPlotMin, xPlotMax, viz.colors.orange, 2.5);

                            // True line
                            viz.drawFunction(function(x) { return trueBeta0 + trueBeta1 * x; }, xPlotMin, xPlotMax, viz.colors.green, 1.5, 200);

                            // Data points
                            for (var i = 0; i < m.xs.length; i++) {
                                viz.drawPoint(m.xs[i], m.ys[i], viz.colors.white, null, 3);
                            }

                            // Legend
                            viz.screenText('Regression line', 400, 18, viz.colors.orange, 11, 'left');
                            viz.screenText('True line', 400, 34, viz.colors.green, 11, 'left');
                            viz.screenText('95% CI band', 400, 50, viz.colors.blue, 11, 'left');
                            viz.screenText('95% PI band', 400, 66, viz.colors.purple, 11, 'left');

                            viz.screenText('n=' + nObs + ' s=' + m.s.toFixed(2) + ' df=' + m.df, 200, 18, viz.colors.text, 11, 'center');
                        }

                        draw();

                        VizEngine.createSlider(controls, 'n (sample)', 8, 80, nObs, 1, function(v) {
                            nObs = Math.round(v);
                            model = generateAndFit();
                            draw();
                        });

                        VizEngine.createSlider(controls, 'sigma', 0.5, 4, sigma, 0.25, function(v) {
                            sigma = v;
                            model = generateAndFit();
                            draw();
                        });

                        VizEngine.createButton(controls, 'Resample', function() {
                            model = generateAndFit();
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Explain why the prediction interval cannot shrink to zero width as \\(n \\to \\infty\\), whereas the confidence interval can. What questions do these two types of intervals answer in practice?',
                    hint: 'Compare the terms in the two variance formulas, especially the leading "1".',
                    solution: 'All terms in the confidence interval variance \\(\\sigma^2(1/n + (x_0-\\bar{X})^2/S_{xx})\\) vanish as \\(n \\to \\infty\\), since it only reflects uncertainty in parameter estimation. The prediction interval variance \\(\\sigma^2(1 + 1/n + (x_0-\\bar{X})^2/S_{xx})\\) contains an irreducible "1" from the new observation\'s own randomness \\(\\varepsilon_0\\). The confidence interval answers "where is the true height of the regression line at \\(x_0\\)?" while the prediction interval answers "where will the next new observation at \\(x_0\\) fall?"'
                },
                {
                    question: 'Prove that for all \\(x_0\\), the confidence interval for the mean response is narrowest at \\(x_0 = \\bar{X}\\). If one needs the most precise prediction at a particular point, what is the optimal experimental design?',
                    hint: 'Analyze \\(\\operatorname{Var}(\\hat{Y}_0)\\) as a function of \\(x_0\\).',
                    solution: '\\(\\operatorname{Var}(\\hat{Y}_0) = \\sigma^2(1/n + (x_0-\\bar{X})^2/S_{xx})\\) is a quadratic function of \\(x_0\\), minimized at \\(x_0 = \\bar{X}\\) with value \\(\\sigma^2/n\\). If one needs the most precise prediction at a specific point \\(x^*\\), the design points should be chosen so that \\(\\bar{X} = x^*\\). Additionally, to minimize \\(1/S_{xx}\\) (i.e., maximize \\(S_{xx}\\)), the design points should be spread as widely as possible. The optimal design (for slope estimation) places half the observations at each end of the design space.'
                },
                {
                    question: 'Suppose in a regression analysis one mistakenly uses the confidence interval instead of the prediction interval to assess the coverage probability of a single new observation. How does the actual coverage probability compare to the nominal level \\(1-\\alpha\\)? Provide a qualitative argument.',
                    hint: 'The confidence interval is narrower than the prediction interval; coverage probability refers to the probability that the new observation falls within the interval.',
                    solution: 'The confidence interval is narrower than the prediction interval (it lacks the irreducible \\(\\sigma^2\\) term), so the probability of a new observation falling within the confidence interval is less than \\(1-\\alpha\\), i.e., the actual coverage probability is below the nominal level. Specifically, when \\(n\\) is large, the confidence interval is approximately \\(\\hat{Y}_0 \\pm z_{\\alpha/2}\\sigma/\\sqrt{n}\\) (very narrow), while a new observation \\(Y_0\\) fluctuates by roughly \\(\\pm z_{\\alpha/2}\\sigma\\), so the coverage probability approaches 0. This is a common mistake in practice.'
                }
            ]
        }
    ]
});

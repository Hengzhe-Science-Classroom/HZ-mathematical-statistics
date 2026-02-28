window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch13',
    number: 13,
    title: 'Multiple Regression & Model Selection',
    subtitle: 'Multiple Regression & Model Selection',
    sections: [
        // ============================================================
        // Section 1: The Multiple Linear Model
        // ============================================================
        {
            id: 'ch13-sec01',
            title: 'The Multiple Linear Model',
            content: `
 <h2>The Multiple Linear Model</h2>

 <p>In simple linear regression we studied the relationship between a single predictor and a response. In practice, the response variable is often jointly influenced by multiple explanatory variables. <strong>Multiple linear regression </strong> extends the model to \(p\) predictors, using matrix notation for an elegant theoretical formulation.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.1 (Multiple Linear Model)</div>
                    <div class="env-body">
 <p>Given observed data \((y_i, x_{i1}, \ldots, x_{ip})\), \(i = 1, \ldots, n\). The <strong>multiple linear model </strong> is</p>
                        \[y_i = \beta_0 + \beta_1 x_{i1} + \cdots + \beta_p x_{ip} + \varepsilon_i, \quad i = 1, \ldots, n,\]
                        <p>where \(\varepsilon_1, \ldots, \varepsilon_n\) are i.i.d. with \(\mathbb{E}[\varepsilon_i] = 0\) and \(\operatorname{Var}(\varepsilon_i) = \sigma^2\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.2 (Matrix Form)</div>
                    <div class="env-body">
 <p>Define the \(n \times (p+1)\) design matrix \(\mathbf{X}\), response vector \(\mathbf{y}\), and parameter vector \(\boldsymbol{\beta}\):</p>
                        \[\mathbf{X} = \begin{pmatrix} 1 & x_{11} & \cdots & x_{1p} \\ 1 & x_{21} & \cdots & x_{2p} \\ \vdots & \vdots & \ddots & \vdots \\ 1 & x_{n1} & \cdots & x_{np} \end{pmatrix}, \quad \mathbf{y} = \begin{pmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{pmatrix}, \quad \boldsymbol{\beta} = \begin{pmatrix} \beta_0 \\ \beta_1 \\ \vdots \\ \beta_p \end{pmatrix}.\]
                        <p>The model is written compactly as \(\mathbf{y} = \mathbf{X}\boldsymbol{\beta} + \boldsymbol{\varepsilon}\), where \(\boldsymbol{\varepsilon} \sim (\mathbf{0}, \sigma^2 \mathbf{I}_n)\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.3 (OLS Estimator)</div>
                    <div class="env-body">
 <p>If \(\mathbf{X}^\top \mathbf{X}\) is invertible, the ordinary least squares estimator is</p>
                        \[\hat{\boldsymbol{\beta}} = (\mathbf{X}^\top \mathbf{X})^{-1} \mathbf{X}^\top \mathbf{y}.\]
 <p>The fitted values are \(\hat{\mathbf{y}} = \mathbf{H} \mathbf{y}\), where \(\mathbf{H} = \mathbf{X}(\mathbf{X}^\top \mathbf{X})^{-1}\mathbf{X}^\top\) is the <strong>hat matrix </strong>.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Minimize the residual sum of squares \(S(\boldsymbol{\beta}) = (\mathbf{y} - \mathbf{X}\boldsymbol{\beta})^\top(\mathbf{y} - \mathbf{X}\boldsymbol{\beta})\). Taking the derivative with respect to \(\boldsymbol{\beta}\):</p>
                        \[\frac{\partial S}{\partial \boldsymbol{\beta}} = -2\mathbf{X}^\top(\mathbf{y} - \mathbf{X}\boldsymbol{\beta}) = \mathbf{0}\]
                        <p>This gives the normal equations \(\mathbf{X}^\top \mathbf{X} \boldsymbol{\beta} = \mathbf{X}^\top \mathbf{y}\). By the invertibility of \(\mathbf{X}^\top \mathbf{X}\), we immediately obtain \(\hat{\boldsymbol{\beta}} = (\mathbf{X}^\top \mathbf{X})^{-1}\mathbf{X}^\top \mathbf{y}\). The Hessian \(2\mathbf{X}^\top \mathbf{X}\) is positive definite, confirming this is a minimum.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.4 (Properties of the Hat Matrix)</div>
                    <div class="env-body">
 <p>The hat matrix \(\mathbf{H}\) satisfies: (i) \(\mathbf{H}^2 = \mathbf{H}\) (idempotent); (ii) \(\mathbf{H}^\top = \mathbf{H}\) (symmetric); (iii) \(\operatorname{tr}(\mathbf{H}) = p + 1\); (iv) the diagonal elements \(0 \leq h_{ii} \leq 1\) are called the <strong>leverage </strong> of the \(i\)-th observation.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The hat matrix \(\mathbf{H}\) orthogonally projects the observation vector \(\mathbf{y}\) onto the column space \(\mathcal{C}(\mathbf{X})\) of \(\mathbf{X}\). The leverage \(h_{ii}\) measures how "extreme" the \(i\)-th observation is in the predictor space -- points farther from the center exert greater influence on the fit. The residual vector \(\mathbf{e} = (\mathbf{I} - \mathbf{H})\mathbf{y}\) is the projection of \(\mathbf{y}\) onto the orthogonal complement of the column space.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.5 (Unbiased Estimator of \\(\\sigma^2\\))</div>
                    <div class="env-body">
 <p>An unbiased estimator of \(\sigma^2\) is</p>
                        \[s^2 = \frac{\text{RSS}}{n - p - 1} = \frac{\mathbf{e}^\top \mathbf{e}}{n - p - 1},\]
 <p>where \(\text{RSS} = \sum_{i=1}^n (y_i - \hat{y}_i)^2\) is the residual sum of squares and \(n - p - 1\) is the degrees of freedom.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="regression-plane-viz"></div>
            `,
            visualizations: [
                {
                    id: 'regression-plane-viz',
 title:'Interactive: 3D Regression Plane (2D Projection) 3D(2D)',
 description:'Drag data points to observe how the regression surface fits -- the projection shows the joint influence of two variables on the response',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 580, height: 420, scale: 35, originX: 290, originY: 350});

                        var n = 20;
                        var dataX1 = [];
                        var dataX2 = [];
                        var dataY = [];
                        var beta0True = 1.0, beta1True = 0.8, beta2True = -0.5;
                        for (var i = 0; i < n; i++) {
                            var x1 = -3 + 6 * Math.random();
                            var x2 = -3 + 6 * Math.random();
                            var eps = VizEngine.randomNormal(0, 0.8);
                            dataX1.push(x1);
                            dataX2.push(x2);
                            dataY.push(beta0True + beta1True * x1 + beta2True * x2 + eps);
                        }

                        function fitOLS(x1, x2, y) {
                            var nn = x1.length;
                            var sx1 = 0, sx2 = 0, sy = 0, sx1x1 = 0, sx2x2 = 0, sx1x2 = 0, sx1y = 0, sx2y = 0;
                            for (var i = 0; i < nn; i++) {
                                sx1 += x1[i]; sx2 += x2[i]; sy += y[i];
                                sx1x1 += x1[i]*x1[i]; sx2x2 += x2[i]*x2[i];
                                sx1x2 += x1[i]*x2[i]; sx1y += x1[i]*y[i]; sx2y += x2[i]*y[i];
                            }
                            var XtX = [
                                [nn, sx1, sx2],
                                [sx1, sx1x1, sx1x2],
                                [sx2, sx1x2, sx2x2]
                            ];
                            var XtY = [sy, sx1y, sx2y];
                            var det = XtX[0][0]*(XtX[1][1]*XtX[2][2]-XtX[1][2]*XtX[2][1])
                                     -XtX[0][1]*(XtX[1][0]*XtX[2][2]-XtX[1][2]*XtX[2][0])
                                     +XtX[0][2]*(XtX[1][0]*XtX[2][1]-XtX[1][1]*XtX[2][0]);
                            if (Math.abs(det) < 1e-10) return [0,0,0];
                            var inv00 = (XtX[1][1]*XtX[2][2]-XtX[1][2]*XtX[2][1])/det;
                            var inv01 = -(XtX[0][1]*XtX[2][2]-XtX[0][2]*XtX[2][1])/det;
                            var inv02 = (XtX[0][1]*XtX[1][2]-XtX[0][2]*XtX[1][1])/det;
                            var inv10 = -(XtX[1][0]*XtX[2][2]-XtX[1][2]*XtX[2][0])/det;
                            var inv11 = (XtX[0][0]*XtX[2][2]-XtX[0][2]*XtX[2][0])/det;
                            var inv12 = -(XtX[0][0]*XtX[1][2]-XtX[0][2]*XtX[1][0])/det;
                            var inv20 = (XtX[1][0]*XtX[2][1]-XtX[1][1]*XtX[2][0])/det;
                            var inv21 = -(XtX[0][0]*XtX[2][1]-XtX[0][1]*XtX[2][0])/det;
                            var inv22 = (XtX[0][0]*XtX[1][1]-XtX[0][1]*XtX[1][0])/det;
                            return [
                                inv00*XtY[0]+inv01*XtY[1]+inv02*XtY[2],
                                inv10*XtY[0]+inv11*XtY[1]+inv12*XtY[2],
                                inv20*XtY[0]+inv21*XtY[1]+inv22*XtY[2]
                            ];
                        }

                        var viewAngle = 0.6;
 var angleSlider = VizEngine.createSlider(controls,'View angle', 0, Math.PI, viewAngle, 0.05, function(v) {
                            viewAngle = v;
                        });

                        function project3D(x1, x2, y, angle) {
                            var px = x1 * Math.cos(angle) + x2 * Math.sin(angle);
                            var py = y;
                            return [px, py];
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var betas = fitOLS(dataX1, dataX2, dataY);
                            var b0 = betas[0], b1 = betas[1], b2 = betas[2];

                            var gridPts = [];
                            for (var gx = -3; gx <= 3; gx += 0.5) {
                                for (var gy = -3; gy <= 3; gy += 0.5) {
                                    var pred = b0 + b1 * gx + b2 * gy;
                                    var pp = project3D(gx, gy, pred, viewAngle);
                                    gridPts.push(pp);
                                }
                            }
                            for (var k = 0; k < gridPts.length; k++) {
                                viz.drawPoint(gridPts[k][0], gridPts[k][1], viz.colors.teal + '30', null, 1.5);
                            }

                            for (var ll = -3; ll <= 3; ll += 1) {
                                var startP = project3D(ll, -3, b0 + b1*ll + b2*(-3), viewAngle);
                                var endP = project3D(ll, 3, b0 + b1*ll + b2*3, viewAngle);
                                viz.drawSegment(startP[0], startP[1], endP[0], endP[1], viz.colors.teal + '40', 0.8);
                                startP = project3D(-3, ll, b0 + b1*(-3) + b2*ll, viewAngle);
                                endP = project3D(3, ll, b0 + b1*3 + b2*ll, viewAngle);
                                viz.drawSegment(startP[0], startP[1], endP[0], endP[1], viz.colors.teal + '40', 0.8);
                            }

                            for (var j = 0; j < n; j++) {
                                var predY = b0 + b1 * dataX1[j] + b2 * dataX2[j];
                                var projObs = project3D(dataX1[j], dataX2[j], dataY[j], viewAngle);
                                var projPred = project3D(dataX1[j], dataX2[j], predY, viewAngle);
                                viz.drawSegment(projObs[0], projObs[1], projPred[0], projPred[1], viz.colors.red + '60', 1);
                                viz.drawPoint(projObs[0], projObs[1], viz.colors.orange, null, 4);
                            }

                            var rss = 0, tss = 0;
                            var ybar = VizEngine.mean(dataY);
                            for (var m = 0; m < n; m++) {
                                var res = dataY[m] - (b0 + b1*dataX1[m] + b2*dataX2[m]);
                                rss += res * res;
                                tss += (dataY[m] - ybar) * (dataY[m] - ybar);
                            }
                            var r2 = 1 - rss / tss;

                            viz.screenText('Projected view of Y = b0 + b1*X1 + b2*X2', viz.width/2, 18, viz.colors.white, 13);
                            viz.screenText('b0=' + b0.toFixed(2) + ' b1=' + b1.toFixed(2) + ' b2=' + b2.toFixed(2) + ' R\u00B2=' + r2.toFixed(3), viz.width/2, 38, viz.colors.teal, 12);
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that the hat matrix \\(\\mathbf{H} = \\mathbf{X}(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top\\) is a symmetric idempotent matrix, i.e., \\(\\mathbf{H}^\\top = \\mathbf{H}\\) and \\(\\mathbf{H}^2 = \\mathbf{H}\\).',
                    hint: 'Directly expand \\(\\mathbf{H}^2\\) using matrix multiplication, and use \\((\\mathbf{AB})^\\top = \\mathbf{B}^\\top \\mathbf{A}^\\top\\) to prove symmetry.',
                    solution: 'Symmetry: \\(\\mathbf{H}^\\top = (\\mathbf{X}(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top)^\\top = \\mathbf{X}((\\mathbf{X}^\\top\\mathbf{X})^{-1})^\\top\\mathbf{X}^\\top = \\mathbf{X}(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top = \\mathbf{H}\\), since \\((\\mathbf{X}^\\top\\mathbf{X})^{-1}\\) is symmetric. Idempotency: \\(\\mathbf{H}^2 = \\mathbf{X}(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top \\mathbf{X}(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top = \\mathbf{X}(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top = \\mathbf{H}\\).'
                },
                {
                    question: 'Prove that \\(\\operatorname{tr}(\\mathbf{H}) = p + 1\\).',
                    hint: 'Use the cyclic property of the trace: \\(\\operatorname{tr}(\\mathbf{ABC}) = \\operatorname{tr}(\\mathbf{CAB})\\).',
                    solution: '\\(\\operatorname{tr}(\\mathbf{H}) = \\operatorname{tr}(\\mathbf{X}(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top) = \\operatorname{tr}((\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top\\mathbf{X}) = \\operatorname{tr}(\\mathbf{I}_{p+1}) = p + 1\\).'
                },
                {
                    question: 'Under the model \\(\\mathbf{y} = \\mathbf{X}\\boldsymbol{\\beta} + \\boldsymbol{\\varepsilon}\\), prove that the covariance matrix of \\(\\hat{\\boldsymbol{\\beta}}\\) is \\(\\operatorname{Cov}(\\hat{\\boldsymbol{\\beta}}) = \\sigma^2 (\\mathbf{X}^\\top\\mathbf{X})^{-1}\\).',
                    hint: 'View \\(\\hat{\\boldsymbol{\\beta}} = (\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top\\mathbf{y}\\) as a linear transformation of \\(\\mathbf{y}\\).',
                    solution: '\\(\\operatorname{Cov}(\\hat{\\boldsymbol{\\beta}}) = (\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top \\operatorname{Cov}(\\mathbf{y}) \\mathbf{X}(\\mathbf{X}^\\top\\mathbf{X})^{-1} = (\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top (\\sigma^2\\mathbf{I}) \\mathbf{X}(\\mathbf{X}^\\top\\mathbf{X})^{-1} = \\sigma^2(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\).'
                }
            ]
        },
        // ============================================================
        // Section 2: Inference and Testing
        // ============================================================
        {
            id: 'ch13-sec02',
            title: 'Inference and Testing',
            content: `
 <h2>Inference and Testing</h2>

                <p>In multiple regression, we typically ask: (1) whether a single coefficient is significant (t-test), (2) whether a group of coefficients are simultaneously zero (F-test), and (3) how well the model fits overall. These inferential tools form the foundation for model interpretation and variable screening.</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.6 (Distribution under Normality)</div>
                    <div class="env-body">
                        <p>If we further assume \(\boldsymbol{\varepsilon} \sim N(\mathbf{0}, \sigma^2\mathbf{I}_n)\), then:</p>
                        <p>(a) \(\hat{\boldsymbol{\beta}} \sim N(\boldsymbol{\beta}, \sigma^2(\mathbf{X}^\top\mathbf{X})^{-1})\);</p>
                        <p>(b) \(\text{RSS}/\sigma^2 \sim \chi^2_{n-p-1}\);</p>
                        <p>(c) \(\hat{\boldsymbol{\beta}}\) and \(s^2\) are independent.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.7 (Individual Coefficient t-Test)</div>
                    <div class="env-body">
                        <p>To test \(H_0: \beta_j = 0\) vs \(H_1: \beta_j \neq 0\), the test statistic is</p>
                        \[t_j = \frac{\hat{\beta}_j}{\operatorname{se}(\hat{\beta}_j)} = \frac{\hat{\beta}_j}{s \sqrt{c_{jj}}},\]
                        <p>where \(c_{jj}\) is the \(j\)-th diagonal element of \((\mathbf{X}^\top\mathbf{X})^{-1}\). Under \(H_0\), \(t_j \sim t_{n-p-1}\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning: Conditional Nature of the t-Test</div>
                    <div class="env-body">
 <p>The t-test conclusion is <strong>conditional on all other variables being in the model</strong>. When \(x_j\) and \(x_k\) are highly correlated, both individual t-tests may be non-significant, yet the joint F-test can be highly significant -- this is the effect of <strong>multicollinearity </strong>.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.8 (Overall F-test)</div>
                    <div class="env-body">
                        <p>To test \(H_0: \beta_1 = \cdots = \beta_p = 0\) (i.e., all variables in the model are ineffective), the test statistic is</p>
                        \[F = \frac{(\text{TSS} - \text{RSS})/p}{\text{RSS}/(n - p - 1)} = \frac{\text{RegSS}/p}{\text{RSS}/(n-p-1)} \sim F_{p, n-p-1}.\]
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.9 (Partial F-test)</div>
                    <div class="env-body">
                        <p>Comparing a full model (\(p\) variables) with a reduced model (\(q\) variables, \(q < p\)):</p>
                        \[F = \frac{(\text{RSS}_{\text{reduced}} - \text{RSS}_{\text{full}})/(p - q)}{\text{RSS}_{\text{full}}/(n - p - 1)} \sim F_{p-q, \, n-p-1}.\]
                        <p>This tests the <strong>joint</strong> contribution of the removed variables to the model.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.10 (Coefficient of Determination)</div>
                    <div class="env-body">
 <p>\(R^2 = 1 - \frac{\text{RSS}}{\text{TSS}}\) measures the proportion of variance explained by the model. The adjusted \(R^2\) is</p>
                        \[R^2_{\text{adj}} = 1 - \frac{\text{RSS}/(n-p-1)}{\text{TSS}/(n-1)}.\]
                        <p>\(R^2\) is non-decreasing as variables are added, while \(R^2_{\text{adj}}\) penalizes model complexity.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 13.11</div>
                    <div class="env-body">
                        <p>Consider a regression with \(n = 50\) and \(p = 3\). If \(\text{TSS} = 200\) and \(\text{RSS} = 80\), then \(R^2 = 0.6\). The overall F statistic is</p>
                        \[F = \frac{120/3}{80/46} = \frac{40}{1.739} \approx 23.0,\]
                        <p>which has an extremely small p-value under \(F_{3,46}\), indicating the model is highly significant overall.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="coefficient-significance-viz"></div>
            `,
            visualizations: [
                {
                    id: 'coefficient-significance-viz',
 title:'Interactive: Coefficient Significance (t-statistics)',
 description:'Adjust sample size and error variance to observe how t-statistics and confidence intervals changet',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 580, height: 400, scale: 30, originX: 290, originY: 200});

                        var sampleN = 50;
                        var noiseSD = 1.0;
                        var trueB = [1.5, -0.8, 0.3, 0.0];
                        var varNames = ['x1', 'x2', 'x3', 'x4'];

                        VizEngine.createSlider(controls, 'n =', 20, 200, sampleN, 10, function(v) { sampleN = Math.round(v); });
                        VizEngine.createSlider(controls, 'sigma =', 0.3, 3, noiseSD, 0.1, function(v) { noiseSD = v; });
                        VizEngine.createButton(controls, 'Resample', function() {});

                        function draw() {
                            viz.clear();
                            var p = trueB.length;
                            var X = [];
                            var Y = [];
                            for (var i = 0; i < sampleN; i++) {
                                var row = [1];
                                for (var j = 0; j < p; j++) row.push(VizEngine.randomNormal(0, 1));
                                X.push(row);
                                var yval = row[0] * 0;
                                for (var j2 = 0; j2 < p; j2++) yval += trueB[j2] * row[j2+1];
                                yval += VizEngine.randomNormal(0, noiseSD);
                                Y.push(yval);
                            }

                            var pp1 = p + 1;
                            var XtX = [];
                            for (var a = 0; a < pp1; a++) {
                                XtX[a] = [];
                                for (var b = 0; b < pp1; b++) {
                                    var s = 0;
                                    for (var ii = 0; ii < sampleN; ii++) s += X[ii][a] * X[ii][b];
                                    XtX[a][b] = s;
                                }
                            }
                            var XtY = [];
                            for (var a2 = 0; a2 < pp1; a2++) {
                                var s2 = 0;
                                for (var ii2 = 0; ii2 < sampleN; ii2++) s2 += X[ii2][a2] * Y[ii2];
                                XtY.push(s2);
                            }

                            var inv = [];
                            var aug = [];
                            for (var r = 0; r < pp1; r++) {
                                aug[r] = [];
                                for (var c = 0; c < pp1; c++) aug[r][c] = XtX[r][c];
                                for (var c2 = 0; c2 < pp1; c2++) aug[r][pp1 + c2] = (r === c2) ? 1 : 0;
                            }
                            for (var col = 0; col < pp1; col++) {
                                var maxR = col;
                                for (var rr = col+1; rr < pp1; rr++) {
                                    if (Math.abs(aug[rr][col]) > Math.abs(aug[maxR][col])) maxR = rr;
                                }
                                var tmp = aug[col]; aug[col] = aug[maxR]; aug[maxR] = tmp;
                                var piv = aug[col][col];
                                if (Math.abs(piv) < 1e-12) continue;
                                for (var c3 = 0; c3 < 2*pp1; c3++) aug[col][c3] /= piv;
                                for (var rr2 = 0; rr2 < pp1; rr2++) {
                                    if (rr2 === col) continue;
                                    var factor = aug[rr2][col];
                                    for (var c4 = 0; c4 < 2*pp1; c4++) aug[rr2][c4] -= factor * aug[col][c4];
                                }
                            }
                            for (var r2 = 0; r2 < pp1; r2++) {
                                inv[r2] = [];
                                for (var c5 = 0; c5 < pp1; c5++) inv[r2][c5] = aug[r2][pp1 + c5];
                            }

                            var betaHat = [];
                            for (var a3 = 0; a3 < pp1; a3++) {
                                var s3 = 0;
                                for (var b3 = 0; b3 < pp1; b3++) s3 += inv[a3][b3] * XtY[b3];
                                betaHat.push(s3);
                            }

                            var rss = 0;
                            for (var i3 = 0; i3 < sampleN; i3++) {
                                var pred = 0;
                                for (var j3 = 0; j3 < pp1; j3++) pred += X[i3][j3] * betaHat[j3];
                                rss += (Y[i3] - pred) * (Y[i3] - pred);
                            }
                            var s2est = rss / (sampleN - pp1);

                            var barW = 1.2;
                            var gap = 2.2;
                            var startX = -(p - 1) * gap / 2;

                            for (var j4 = 0; j4 < p; j4++) {
                                var bj = betaHat[j4 + 1];
                                var se = Math.sqrt(s2est * inv[j4+1][j4+1]);
                                var tStat = bj / se;
                                var ci95 = 1.96 * se;

                                var cx = startX + j4 * gap;
                                var barColor = (Math.abs(tStat) > 2) ? viz.colors.green : viz.colors.red;

                                viz.drawBar(cx - barW/2, barW, bj, barColor + '88', barColor, 1.5);
                                viz.drawErrorBar(cx, bj, ci95, viz.colors.white, 1.5, 0.2);

                                viz.drawSegment(cx - barW/2 - 0.3, trueB[j4], cx + barW/2 + 0.3, trueB[j4], viz.colors.yellow, 1.5, true);

                                viz.drawText(varNames[j4], cx, -4.8, viz.colors.white, 13);
                                viz.drawText('t=' + tStat.toFixed(1), cx, -5.5, barColor, 11);
                                viz.drawText('true=' + trueB[j4].toFixed(1), cx, -6.2, viz.colors.yellow, 10);
                            }

                            viz.drawSegment(-7, 0, 7, 0, viz.colors.text + '80', 1, true);

                            viz.screenText('Coefficient estimates with 95% CI', viz.width/2, 16, viz.colors.white, 13);
                            viz.screenText('Green = |t| > 2 (sig at 5%), Red = not significant', viz.width/2, 34, viz.colors.text, 11);
                            viz.screenText('Dashed = true value, n=' + sampleN + ', sigma=' + noiseSD.toFixed(1), viz.width/2, 50, viz.colors.text, 11);
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that \\(R^2 = 1 - \\text{RSS}/\\text{TSS}\\) can equivalently be written as \\(R^2 = \\hat{\\mathbf{y}}^\\top \\hat{\\mathbf{y}} / \\mathbf{y}_c^\\top \\mathbf{y}_c\\), where \\(\\mathbf{y}_c = \\mathbf{y} - \\bar{y}\\mathbf{1}\\) is the centered response vector (assuming the model includes an intercept).',
                    hint: 'Use \\(\\text{TSS} = \\text{RegSS} + \\text{RSS}\\) and the orthogonality of \\(\\hat{\\mathbf{y}}\\) and \\(\\mathbf{e}\\).',
                    solution: 'When the model includes an intercept, \\(\\hat{\\mathbf{y}}^\\top \\mathbf{e} = 0\\) and \\(\\mathbf{1}^\\top \\mathbf{e} = 0\\). Therefore \\(\\|\\mathbf{y}_c\\|^2 = \\|\\hat{\\mathbf{y}}_c\\|^2 + \\|\\mathbf{e}\\|^2\\), i.e., \\(\\text{TSS} = \\text{RegSS} + \\text{RSS}\\). Hence \\(R^2 = \\text{RegSS}/\\text{TSS}\\). Since \\(\\hat{\\mathbf{y}}_c = \\hat{\\mathbf{y}} - \\bar{y}\\mathbf{1}\\), we have \\(\\text{RegSS} = \\|\\hat{\\mathbf{y}}_c\\|^2\\).'
                },
                {
                    question: 'Suppose a full model has \\(p = 5\\) variables with \\(\\text{RSS}_{\\text{full}} = 40\\). A reduced model that removes 2 variables has \\(\\text{RSS}_{\\text{red}} = 52\\), and \\(n = 60\\). Compute the partial F statistic and determine whether it is significant at the 5% level (the 5% critical value of \\(F_{2,54}\\) is approximately 3.17).',
                    hint: 'Substitute into the partial F formula; note the numerator degrees of freedom equals the number of removed variables.',
                    solution: '\\(F = \\frac{(52 - 40)/2}{40/54} = \\frac{6}{0.741} \\approx 8.10\\). Since \\(8.10 > 3.17\\), we reject \\(H_0\\) at the 5% level; the two removed variables make a significant joint contribution to the model.'
                },
                {
                    question: 'Explain why two highly collinear variables may each have non-significant individual t-tests, yet their joint F-test is significant.',
                    hint: 'Consider the behavior of the diagonal elements of \\((\\mathbf{X}^\\top\\mathbf{X})^{-1}\\) under collinearity.',
                    solution: 'When \\(x_j\\) and \\(x_k\\) are highly correlated, the corresponding diagonal elements \\(c_{jj}\\) and \\(c_{kk}\\) of \\((\\mathbf{X}^\\top\\mathbf{X})^{-1}\\) become very large (because the matrix is nearly singular), inflating the standard errors and shrinking the t-statistics. However, the partial F-test considers the joint contribution of both variables simultaneously and is not affected by this "variance inflation" -- removing both variables causes RSS to increase substantially, keeping the F-value large.'
                }
            ]
        },
        // ============================================================
        // Section 3: Regression Diagnostics
        // ============================================================
        {
            id: 'ch13-sec03',
            title: 'Regression Diagnostics',
            content: `
 <h2>Regression Diagnostics</h2>

 <p>After fitting a model, one must check whether the model assumptions are reasonable and whether anomalous observations exist. <strong>Regression diagnostics </strong> use residual analysis, leverage values, and influence measures to assess model reliability.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.12 (Standardized and Studentized Residuals)</div>
                    <div class="env-body">
 <p>The <strong>standardized residual </strong> for the \(i\)-th observation is</p>
                        \[r_i = \frac{e_i}{s\sqrt{1 - h_{ii}}},\]
 <p>where \(h_{ii}\) is the leverage. The <strong>externally studentized residual </strong> is</p>
                        \[t_i = \frac{e_i}{s_{(i)}\sqrt{1 - h_{ii}}},\]
                        <p>where \(s_{(i)}^2\) is the residual variance estimate computed with the \(i\)-th observation deleted. Under normality, \(t_i \sim t_{n-p-2}\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.13 (Variance Inflation Factor, VIF)</div>
                    <div class="env-body">
 <p>The <strong>variance inflation factor </strong> for the \(j\)-th variable is</p>
                        \[\text{VIF}_j = \frac{1}{1 - R_j^2},\]
                        <p>where \(R_j^2\) is the \(R^2\) from regressing \(x_j\) on all other predictors. \(\text{VIF}_j\) measures the factor by which collinearity inflates the variance of \(\hat{\beta}_j\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (VIF Thresholds)</div>
                    <div class="env-body">
                        <p>A common rule of thumb: \(\text{VIF} > 10\) (i.e., \(R_j^2 > 0.9\)) suggests serious collinearity; \(\text{VIF} > 5\) warrants attention. However, these thresholds are not absolute -- they should be considered alongside the condition number \(\kappa(\mathbf{X}^\top\mathbf{X})\) for a comprehensive assessment.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.14 (Cook's Distance)</div>
                    <div class="env-body">
                        <p><strong>Cook's distance</strong> for the \(i\)-th observation combines leverage and residual magnitude:</p>
                        \[D_i = \frac{r_i^2}{p + 1} \cdot \frac{h_{ii}}{1 - h_{ii}}.\]
                        <p>Equivalently, \(D_i = \frac{(\hat{\boldsymbol{\beta}} - \hat{\boldsymbol{\beta}}_{(i)})^\top (\mathbf{X}^\top\mathbf{X}) (\hat{\boldsymbol{\beta}} - \hat{\boldsymbol{\beta}}_{(i)})}{(p+1)s^2}\), measuring the change in the coefficients when the \(i\)-th observation is deleted.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
 <p>Cook's distance decomposes as "outlyingness" \(\times\)"leverage effect." A high-leverage point (at the periphery of the predictor space) that also has a large residual is an <strong>influential point </strong>. Rules of thumb: \(D_i> 4/n\) or \(D_i> 1\) indicates significant influence.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.15 (DFFITS and DFBETAS)</div>
                    <div class="env-body">
                        <p><strong>DFFITS</strong> measures the change in the fitted value when the \(i\)-th observation is deleted:</p>
                        \[\text{DFFITS}_i = t_i \sqrt{\frac{h_{ii}}{1 - h_{ii}}}.\]
                        <p><strong>DFBETAS</strong> measures the influence on each individual coefficient: \(\text{DFBETAS}_{j,i} = \frac{\hat{\beta}_j - \hat{\beta}_{j(i)}}{s_{(i)}\sqrt{c_{jj}}}\). Thresholds: \(|\text{DFFITS}| > 2\sqrt{(p+1)/n}\), \(|\text{DFBETAS}| > 2/\sqrt{n}\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="leverage-cook-viz"></div>
            `,
            visualizations: [
                {
                    id: 'leverage-cook-viz',
 title:'Interactive: Leverage vs Cook\'s DistanceCook',
 description:'Drag the outlier point to observe how leverage and Cook\'s distance changeCook',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 580, height: 420, scale: 1, originX: 70, originY: 370});
                        viz.scale = 1;

                        var n = 30;
                        var p = 2;
                        var baseX = [];
                        var baseY = [];
                        for (var i = 0; i < n - 1; i++) {
                            baseX.push(VizEngine.randomNormal(0, 1));
                            baseY.push(0.5 + 1.2 * baseX[i] + VizEngine.randomNormal(0, 0.5));
                        }

                        var outlier = viz.addDraggable('outlier', 350, 150, viz.colors.red, 10, function() {});

                        function computeDiagnostics(ox, oy) {
                            var allX1 = baseX.slice();
                            var allY = baseY.slice();
                            allX1.push(ox);
                            allY.push(oy);
                            var nn = allX1.length;
                            var pp1 = p + 1;

                            var X = [];
                            for (var i = 0; i < nn; i++) {
                                X.push([1, allX1[i], allX1[i] * allX1[i] * 0.1]);
                            }

                            var XtX = [];
                            for (var a = 0; a < pp1; a++) {
                                XtX[a] = [];
                                for (var b = 0; b < pp1; b++) {
                                    var s = 0;
                                    for (var ii = 0; ii < nn; ii++) s += X[ii][a] * X[ii][b];
                                    XtX[a][b] = s;
                                }
                            }
                            var XtY = [];
                            for (var a2 = 0; a2 < pp1; a2++) {
                                var s2 = 0;
                                for (var ii2 = 0; ii2 < nn; ii2++) s2 += X[ii2][a2] * allY[ii2];
                                XtY.push(s2);
                            }

                            var aug = [];
                            for (var r = 0; r < pp1; r++) {
                                aug[r] = [];
                                for (var c = 0; c < pp1; c++) aug[r][c] = XtX[r][c];
                                for (var c2 = 0; c2 < pp1; c2++) aug[r][pp1 + c2] = (r === c2) ? 1 : 0;
                            }
                            for (var col = 0; col < pp1; col++) {
                                var maxR = col;
                                for (var rr = col+1; rr < pp1; rr++) {
                                    if (Math.abs(aug[rr][col]) > Math.abs(aug[maxR][col])) maxR = rr;
                                }
                                var tmp2 = aug[col]; aug[col] = aug[maxR]; aug[maxR] = tmp2;
                                var piv = aug[col][col];
                                if (Math.abs(piv) < 1e-12) continue;
                                for (var c3 = 0; c3 < 2*pp1; c3++) aug[col][c3] /= piv;
                                for (var rr2 = 0; rr2 < pp1; rr2++) {
                                    if (rr2 === col) continue;
                                    var factor = aug[rr2][col];
                                    for (var c4 = 0; c4 < 2*pp1; c4++) aug[rr2][c4] -= factor * aug[col][c4];
                                }
                            }
                            var inv = [];
                            for (var r2 = 0; r2 < pp1; r2++) {
                                inv[r2] = [];
                                for (var c5 = 0; c5 < pp1; c5++) inv[r2][c5] = aug[r2][pp1 + c5];
                            }

                            var betaH = [];
                            for (var a3 = 0; a3 < pp1; a3++) {
                                var s3 = 0;
                                for (var b3 = 0; b3 < pp1; b3++) s3 += inv[a3][b3] * XtY[b3];
                                betaH.push(s3);
                            }

                            var leverages = [];
                            var residuals = [];
                            for (var i2 = 0; i2 < nn; i2++) {
                                var hii = 0;
                                for (var a4 = 0; a4 < pp1; a4++) {
                                    for (var b4 = 0; b4 < pp1; b4++) {
                                        hii += X[i2][a4] * inv[a4][b4] * X[i2][b4];
                                    }
                                }
                                leverages.push(hii);
                                var pred = 0;
                                for (var j = 0; j < pp1; j++) pred += X[i2][j] * betaH[j];
                                residuals.push(allY[i2] - pred);
                            }

                            var rss = 0;
                            for (var k = 0; k < nn; k++) rss += residuals[k] * residuals[k];
                            var s2val = rss / (nn - pp1);

                            var cooks = [];
                            for (var i3 = 0; i3 < nn; i3++) {
                                var ri = residuals[i3] / (Math.sqrt(s2val) * Math.sqrt(Math.max(1 - leverages[i3], 0.001)));
                                cooks.push(ri * ri / pp1 * leverages[i3] / Math.max(1 - leverages[i3], 0.001));
                            }

                            return {leverages: leverages, cooks: cooks};
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            var mapOx = (outlier.x - 70) / 460 * 6 - 3;
                            var mapOy = (370 - outlier.y) / 320 * 8 - 2;

                            var diag = computeDiagnostics(mapOx, mapOy);
                            var lev = diag.leverages;
                            var cook = diag.cooks;

                            var maxCook = 0;
                            for (var k = 0; k < cook.length; k++) {
                                if (cook[k] > maxCook) maxCook = cook[k];
                            }
                            maxCook = Math.max(maxCook, 0.5);

                            var plotL = 80, plotR = 540, plotT = 50, plotB = 370;
                            var pW = plotR - plotL, pH = plotB - plotT;

                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(plotL, plotB); ctx.lineTo(plotR, plotB);
                            ctx.moveTo(plotL, plotB); ctx.lineTo(plotL, plotT);
                            ctx.stroke();

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            for (var t = 0; t <= 5; t++) {
                                var lVal = t * 0.2;
                                var sx = plotL + lVal * pW;
                                ctx.fillText(lVal.toFixed(1), sx, plotB + 16);
                                ctx.strokeStyle = viz.colors.grid;
                                ctx.beginPath(); ctx.moveTo(sx, plotT); ctx.lineTo(sx, plotB); ctx.stroke();
                            }
                            ctx.textAlign = 'right';
                            for (var t2 = 0; t2 <= 4; t2++) {
                                var cVal = t2 * maxCook / 4;
                                var sy = plotB - (cVal / maxCook) * pH;
                                ctx.fillText(cVal.toFixed(2), plotL - 6, sy + 4);
                                ctx.strokeStyle = viz.colors.grid;
                                ctx.beginPath(); ctx.moveTo(plotL, sy); ctx.lineTo(plotR, sy); ctx.stroke();
                            }

                            var threshLev = 2 * (p + 1) / (n);
                            var threshCook = 4 / n;
                            var txl = plotL + threshLev * pW;
                            ctx.strokeStyle = viz.colors.yellow + '80';
                            ctx.setLineDash([5, 3]);
                            ctx.beginPath(); ctx.moveTo(txl, plotT); ctx.lineTo(txl, plotB); ctx.stroke();
                            var tyc = plotB - (threshCook / maxCook) * pH;
                            ctx.beginPath(); ctx.moveTo(plotL, tyc); ctx.lineTo(plotR, tyc); ctx.stroke();
                            ctx.setLineDash([]);

                            for (var i = 0; i < lev.length; i++) {
                                var px = plotL + Math.min(lev[i], 1) * pW;
                                var py = plotB - Math.min(cook[i] / maxCook, 1) * pH;
                                var isOutlier = (i === lev.length - 1);
                                var isInfluential = lev[i] > threshLev && cook[i] > threshCook;
                                var col = isOutlier ? viz.colors.red : (isInfluential ? viz.colors.orange : viz.colors.blue);
                                var rad = isOutlier ? 7 : 4;
                                ctx.fillStyle = col;
                                ctx.beginPath(); ctx.arc(px, py, rad, 0, Math.PI * 2); ctx.fill();
                            }

                            viz.screenText('Leverage (h_ii)', (plotL + plotR) / 2, plotB + 34, viz.colors.white, 12);
                            ctx.save(); ctx.translate(18, (plotT + plotB) / 2); ctx.rotate(-Math.PI/2);
                            ctx.fillStyle = viz.colors.white; ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'center'; ctx.fillText("Cook's D", 0, 0);
                            ctx.restore();

                            viz.screenText('Leverage vs Cook\'s Distance', viz.width/2, 18, viz.colors.white, 14);
                            viz.screenText('Drag red point to see influence change. Dashed = thresholds.', viz.width/2, 36, viz.colors.text, 11);

                            viz.drawDraggables();
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that Cook\'s distance can be written as \\(D_i = \\frac{r_i^2}{p+1} \\cdot \\frac{h_{ii}}{1 - h_{ii}}\\), where \\(r_i\\) is the standardized residual.',
                    hint: 'Use the Sherman-Morrison-Woodbury formula or directly expand the expression for \\(\\hat{\\boldsymbol{\\beta}}_{(i)}\\) after deleting one observation.',
                    solution: 'From the leave-one-out formula \\(\\hat{\\boldsymbol{\\beta}} - \\hat{\\boldsymbol{\\beta}}_{(i)} = (\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{x}_i e_i/(1 - h_{ii})\\), substitute into the original definition \\(D_i = \\frac{(\\hat{\\boldsymbol{\\beta}} - \\hat{\\boldsymbol{\\beta}}_{(i)})^\\top(\\mathbf{X}^\\top\\mathbf{X})(\\hat{\\boldsymbol{\\beta}} - \\hat{\\boldsymbol{\\beta}}_{(i)})}{(p+1)s^2}\\) to get \\(D_i = \\frac{e_i^2 \\mathbf{x}_i^\\top(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{x}_i}{(p+1)s^2(1-h_{ii})^2} = \\frac{e_i^2 h_{ii}}{(p+1)s^2(1-h_{ii})^2} = \\frac{r_i^2}{p+1}\\frac{h_{ii}}{1-h_{ii}}\\).'
                },
                {
                    question: 'In a regression with \\(n = 100\\) and \\(p = 4\\), a certain observation has leverage \\(h_{ii} = 0.15\\) and standardized residual \\(r_i = 3.2\\). Compute its Cook\'s distance and determine whether it is an influential point.',
                    hint: 'Substitute directly into the formula and compare with the threshold \\(4/n\\).',
                    solution: '\\(D_i = \\frac{3.2^2}{5} \\cdot \\frac{0.15}{0.85} = \\frac{10.24}{5} \\cdot 0.176 = 2.048 \\times 0.176 \\approx 0.361\\). The threshold is \\(4/100 = 0.04\\). Since \\(0.361 \\gg 0.04\\), this point is strongly influential and should be investigated for possible data entry errors or outlier status.'
                }
            ]
        },
        // ============================================================
        // Section 4: Model Selection
        // ============================================================
        {
            id: 'ch13-sec04',
            title: 'Model Selection',
            content: `
 <h2>Model Selection</h2>

 <p>When many candidate variables are available, how do we choose the "best" subset? The trade-off between overfitting and underfitting is a central problem in statistical modeling. <strong>Model selection </strong> seeks a balance between model complexity and goodness of fit through information criteria or cross-validation.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.16 (AIC -- Akaike Information Criterion)</div>
                    <div class="env-body">
                        <p>For a model with \(k\) parameters, the AIC is defined as</p>
                        \[\text{AIC} = -2 \ln \hat{L} + 2k,\]
                        <p>where \(\hat{L}\) is the maximized likelihood. Under the normal linear model this is equivalent to</p>
                        \[\text{AIC} = n \ln(\text{RSS}/n) + 2(p + 2).\]
                        <p>Smaller AIC is better. The first term measures fit; the second penalizes complexity.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.17 (BIC -- Bayesian Information Criterion)</div>
                    <div class="env-body">
                        <p>BIC uses a heavier penalty:</p>
                        \[\text{BIC} = -2 \ln \hat{L} + k \ln n.\]
                        <p>When \(n \geq 8\), \(\ln n > 2\), so BIC tends to select more parsimonious models.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.18 (AIC and KL Divergence)</div>
                    <div class="env-body">
                        <p>Let the true distribution be \(f\) and the candidate model family be \(g(\cdot | \theta)\). AIC is an asymptotically unbiased estimate of the Kullback-Leibler divergence \(\text{KL}(f \| g_{\hat{\theta}})\) (up to a model-independent constant). That is, AIC approximately measures how well the model approximates the true distribution.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.19 (Consistency of BIC)</div>
                    <div class="env-body">
 <p>If the true model belongs to the candidate set, then BIC selects the true model with probability 1 as \(n \to \infty\) (<strong>selection consistency </strong>). AIC does not possess this property -- it asymptotically tends to over-select.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.20 (Mallow's Cp)</div>
                    <div class="env-body">
                        <p>For a sub-model with \(k\) variables, Mallow's \(C_p\) is</p>
                        \[C_p = \frac{\text{RSS}_k}{s^2_{\text{full}}} - n + 2(k + 1),\]
                        <p>where \(s^2_{\text{full}}\) is the \(\sigma^2\) estimate from the full model. A good model has \(C_p \approx k + 1\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Stepwise Regression)</div>
                    <div class="env-body">
 <p><strong>Forward selection </strong>: starting from the null model, add the variable that most improves a criterion at each step. <strong>Backward elimination </strong>: starting from the full model, remove the least significant variable at each step. <strong>Stepwise </strong>: a combination of forward and backward. These greedy strategies are computationally fast but do not guarantee global optimality; when \(p\) is small, <strong>best subset selection </strong>, which enumerates all \(2^p\) subsets, is more reliable.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning: Over-Searching and Inference Failure</div>
                    <div class="env-body">
 <p>After model selection, the p-values and confidence intervals of the selected variables are no longer valid -- they ignore the uncertainty introduced by the selection process. This is known as the <strong>post-selection inference </strong> problem. Recent research (e.g., selective inference, data splitting) attempts to correct this bias.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="model-selection-viz"></div>
            `,
            visualizations: [
                {
                    id: 'model-selection-viz',
 title:'Interactive: AIC/BIC vs Model Complexity AIC/BIC',
 description:'Adjust the true number of variables and sample size to observe how AIC/BIC select the optimal modelAIC',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 580, height: 400, scale: 1, originX: 70, originY: 350});

                        var nObs = 80;
                        var trueK = 4;

                        VizEngine.createSlider(controls, 'n =', 30, 200, nObs, 10, function(v) { nObs = Math.round(v); });
                        VizEngine.createSlider(controls, 'True k =', 1, 10, trueK, 1, function(v) { trueK = Math.round(v); });

                        var maxP = 12;

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var plotL = 70, plotR = 550, plotT = 50, plotB = 340;
                            var pW = plotR - plotL, pH = plotB - plotT;

                            var trueCoefs = [];
                            for (var j = 0; j < maxP; j++) {
                                trueCoefs.push(j < trueK ? 1.5 * Math.pow(-0.7, j) : 0);
                            }

                            var X = [];
                            var Y = [];
                            for (var i = 0; i < nObs; i++) {
                                var row = [];
                                for (var j2 = 0; j2 < maxP; j2++) row.push(VizEngine.randomNormal(0, 1));
                                X.push(row);
                                var yi = 2;
                                for (var j3 = 0; j3 < maxP; j3++) yi += trueCoefs[j3] * row[j3];
                                yi += VizEngine.randomNormal(0, 1);
                                Y.push(yi);
                            }

                            var aics = [];
                            var bics = [];
                            var adjR2s = [];

                            var ybar = VizEngine.mean(Y);
                            var tss = 0;
                            for (var i2 = 0; i2 < nObs; i2++) tss += (Y[i2] - ybar) * (Y[i2] - ybar);

                            for (var k = 1; k <= maxP; k++) {
                                var kk = k + 1;
                                var XtX = [];
                                for (var a = 0; a < kk; a++) {
                                    XtX[a] = [];
                                    for (var b = 0; b < kk; b++) {
                                        var s = 0;
                                        for (var ii = 0; ii < nObs; ii++) {
                                            var xa = a === 0 ? 1 : X[ii][a-1];
                                            var xb = b === 0 ? 1 : X[ii][b-1];
                                            s += xa * xb;
                                        }
                                        XtX[a][b] = s;
                                    }
                                }
                                var XtY2 = [];
                                for (var a2 = 0; a2 < kk; a2++) {
                                    var s2 = 0;
                                    for (var ii2 = 0; ii2 < nObs; ii2++) {
                                        s2 += (a2 === 0 ? 1 : X[ii2][a2-1]) * Y[ii2];
                                    }
                                    XtY2.push(s2);
                                }
                                var aug = [];
                                for (var r = 0; r < kk; r++) {
                                    aug[r] = [];
                                    for (var c = 0; c < kk; c++) aug[r][c] = XtX[r][c];
                                    for (var c2 = 0; c2 < kk; c2++) aug[r][kk + c2] = (r === c2) ? 1 : 0;
                                }
                                for (var col = 0; col < kk; col++) {
                                    var maxRow = col;
                                    for (var rr = col+1; rr < kk; rr++) {
                                        if (Math.abs(aug[rr][col]) > Math.abs(aug[maxRow][col])) maxRow = rr;
                                    }
                                    var tmp3 = aug[col]; aug[col] = aug[maxRow]; aug[maxRow] = tmp3;
                                    var piv2 = aug[col][col];
                                    if (Math.abs(piv2) < 1e-12) continue;
                                    for (var c3 = 0; c3 < 2*kk; c3++) aug[col][c3] /= piv2;
                                    for (var rr2 = 0; rr2 < kk; rr2++) {
                                        if (rr2 === col) continue;
                                        var f = aug[rr2][col];
                                        for (var c4 = 0; c4 < 2*kk; c4++) aug[rr2][c4] -= f * aug[col][c4];
                                    }
                                }
                                var inv2 = [];
                                for (var r2 = 0; r2 < kk; r2++) {
                                    inv2[r2] = [];
                                    for (var c5 = 0; c5 < kk; c5++) inv2[r2][c5] = aug[r2][kk + c5];
                                }
                                var bhat = [];
                                for (var a3 = 0; a3 < kk; a3++) {
                                    var s3 = 0;
                                    for (var b3 = 0; b3 < kk; b3++) s3 += inv2[a3][b3] * XtY2[b3];
                                    bhat.push(s3);
                                }
                                var rss2 = 0;
                                for (var i3 = 0; i3 < nObs; i3++) {
                                    var pred = 0;
                                    for (var j4 = 0; j4 < kk; j4++) pred += (j4 === 0 ? 1 : X[i3][j4-1]) * bhat[j4];
                                    rss2 += (Y[i3] - pred) * (Y[i3] - pred);
                                }

                                var aic = nObs * Math.log(rss2 / nObs) + 2 * (kk + 1);
                                var bic = nObs * Math.log(rss2 / nObs) + (kk + 1) * Math.log(nObs);
                                var adjR2 = 1 - (rss2 / (nObs - kk)) / (tss / (nObs - 1));

                                aics.push(aic);
                                bics.push(bic);
                                adjR2s.push(adjR2);
                            }

                            var minAIC = Math.min.apply(null, aics), maxAIC = Math.max.apply(null, aics);
                            var minBIC = Math.min.apply(null, bics), maxBIC = Math.max.apply(null, bics);
                            var allMin = Math.min(minAIC, minBIC);
                            var allMax = Math.max(maxAIC, maxBIC);
                            var range = allMax - allMin;
                            if (range < 1) range = 1;

                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(plotL, plotB); ctx.lineTo(plotR, plotB);
                            ctx.moveTo(plotL, plotB); ctx.lineTo(plotL, plotT);
                            ctx.stroke();

                            ctx.fillStyle = viz.colors.text; ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            for (var t = 1; t <= maxP; t++) {
                                var sx = plotL + (t - 0.5) / maxP * pW;
                                ctx.fillText(t.toString(), sx, plotB + 16);
                            }

                            var bestAICk = 0, bestBICk = 0;
                            for (var m = 0; m < maxP; m++) {
                                if (aics[m] < aics[bestAICk]) bestAICk = m;
                                if (bics[m] < bics[bestBICk]) bestBICk = m;
                            }

                            for (var m2 = 0; m2 < maxP; m2++) {
                                var cx = plotL + (m2 + 0.5) / maxP * pW;
                                var yAIC = plotB - ((aics[m2] - allMin) / range) * pH * 0.85;
                                var yBIC = plotB - ((bics[m2] - allMin) / range) * pH * 0.85;

                                ctx.fillStyle = (m2 === bestAICk) ? viz.colors.blue : viz.colors.blue + '88';
                                ctx.beginPath(); ctx.arc(cx - 6, yAIC, (m2 === bestAICk) ? 6 : 4, 0, Math.PI * 2); ctx.fill();

                                ctx.fillStyle = (m2 === bestBICk) ? viz.colors.orange : viz.colors.orange + '88';
                                ctx.beginPath(); ctx.arc(cx + 6, yBIC, (m2 === bestBICk) ? 6 : 4, 0, Math.PI * 2); ctx.fill();

                                if (m2 > 0) {
                                    var prevCx = plotL + (m2 - 0.5) / maxP * pW;
                                    var prevAIC = plotB - ((aics[m2-1] - allMin) / range) * pH * 0.85;
                                    var prevBIC = plotB - ((bics[m2-1] - allMin) / range) * pH * 0.85;
                                    ctx.strokeStyle = viz.colors.blue; ctx.lineWidth = 1.5;
                                    ctx.beginPath(); ctx.moveTo(prevCx - 6, prevAIC); ctx.lineTo(cx - 6, yAIC); ctx.stroke();
                                    ctx.strokeStyle = viz.colors.orange; ctx.lineWidth = 1.5;
                                    ctx.beginPath(); ctx.moveTo(prevCx + 6, prevBIC); ctx.lineTo(cx + 6, yBIC); ctx.stroke();
                                }
                            }

                            var trueX = plotL + (trueK - 0.5) / maxP * pW;
                            ctx.strokeStyle = viz.colors.green + '80';
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath(); ctx.moveTo(trueX, plotT); ctx.lineTo(trueX, plotB); ctx.stroke();
                            ctx.setLineDash([]);

                            viz.screenText('Number of variables (k)', (plotL + plotR) / 2, plotB + 34, viz.colors.white, 12);
                            viz.screenText('AIC / BIC vs Model Complexity', viz.width / 2, 18, viz.colors.white, 14);

                            ctx.fillStyle = viz.colors.blue;
                            ctx.beginPath(); ctx.arc(plotR - 130, plotT + 10, 5, 0, Math.PI * 2); ctx.fill();
                            viz.screenText('AIC (best k=' + (bestAICk+1) + ')', plotR - 60, plotT + 13, viz.colors.blue, 11);

                            ctx.fillStyle = viz.colors.orange;
                            ctx.beginPath(); ctx.arc(plotR - 130, plotT + 28, 5, 0, Math.PI * 2); ctx.fill();
                            viz.screenText('BIC (best k=' + (bestBICk+1) + ')', plotR - 60, plotT + 31, viz.colors.orange, 11);

                            viz.screenText('True k=' + trueK, trueX, plotT - 6, viz.colors.green, 11);
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that under the normal linear model, AIC can be written as \\(\\text{AIC} = n \\ln(\\text{RSS}/n) + 2(p + 2)\\) (up to additive constants).',
                    hint: 'Write the normal log-likelihood \\(\\ell(\\boldsymbol{\\beta}, \\sigma^2) = -\\frac{n}{2}\\ln(2\\pi) - \\frac{n}{2}\\ln\\sigma^2 - \\frac{1}{2\\sigma^2}\\text{RSS}\\), then substitute the MLE \\(\\hat{\\sigma}^2 = \\text{RSS}/n\\).',
                    solution: 'The normal log-likelihood at the MLE is \\(\\hat{\\ell} = -\\frac{n}{2}\\ln(2\\pi) - \\frac{n}{2}\\ln(\\text{RSS}/n) - \\frac{n}{2}\\). Then AIC = \\(-2\\hat{\\ell} + 2k = n\\ln(2\\pi) + n\\ln(\\text{RSS}/n) + n + 2(p+2)\\). Since \\(n\\ln(2\\pi) + n\\) is the same for all models, it can be dropped in comparisons, yielding \\(\\text{AIC} = n\\ln(\\text{RSS}/n) + 2(p+2)\\) (where the parameter count is \\(p+1\\) regression coefficients plus 1 for \\(\\sigma^2\\)).'
                },
                {
                    question: 'Why does BIC possess selection consistency while AIC does not? Give an intuitive explanation based on the growth rate of the penalty terms.',
                    hint: 'Compare the AIC penalty \\(2k\\) with the BIC penalty \\(k \\ln n\\) relative to the change in \\(-2\\hat{\\ell}\\).',
                    solution: 'The AIC penalty \\(2k\\) does not grow with \\(n\\). As \\(n \\to \\infty\\), adding an irrelevant variable reduces RSS by an amount that is asymptotically \\(\\sigma^2 \\chi^2_1\\), whose expected decrease in \\(-2\\hat{\\ell}\\) is about 1 -- which is not sufficiently counterbalanced by the AIC penalty of 2, so AIC selects overly complex models with positive probability. In contrast, the BIC penalty \\(k\\ln n \\to \\infty\\), increasingly penalizing complex models as the sample grows, eventually distinguishing true variables from noise variables.'
                },
                {
                    question: 'With \\(p = 8\\) candidate variables, discuss the relative advantages and disadvantages of best subset selection, forward selection, and Lasso in terms of computational complexity and statistical properties.',
                    hint: 'Consider the total number of subsets \\(2^8 = 256\\), the greedy search path size, and the advantages of continuous relaxation.',
                    solution: 'Best subset: enumerates \\(2^8 = 256\\) models, entirely feasible for this \\(p\\), and guarantees the global optimum; however, computation explodes for \\(p > 25\\). Forward selection: fits at most \\(O(p^2)\\) models, fast but may miss good variable combinations (due to greediness). Lasso: solves a convex optimization, implicitly searching all models via the continuous regularization path, can handle \\(p \\gg n\\), and achieves variable selection consistency (under the irrepresentable condition); however, estimates are biased. Overall, for \\(p = 8\\) all three methods are viable, with best subset being the most straightforward.'
                }
            ]
        },
        // ============================================================
        // Section 5: Regularization Methods
        // ============================================================
        {
            id: 'ch13-sec05',
            title: 'Regularization Methods',
            content: `
 <h2>Regularization Methods</h2>

 <p>When \(p\) is large or strong collinearity exists among the variables, OLS can have very large variance. <strong>Regularization </strong> imposes constraints or penalties on the coefficients, trading bias for variance to achieve better predictive performance.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.21 (Ridge Regression)</div>
                    <div class="env-body">
 <p><strong>Ridge regression </strong> adds an \(L_2\) penalty to the OLS objective:</p>
                        \[\hat{\boldsymbol{\beta}}^{\text{ridge}} = \arg\min_{\boldsymbol{\beta}} \left\{ \|\mathbf{y} - \mathbf{X}\boldsymbol{\beta}\|^2 + \lambda \|\boldsymbol{\beta}\|^2 \right\} = (\mathbf{X}^\top\mathbf{X} + \lambda\mathbf{I})^{-1}\mathbf{X}^\top\mathbf{y}.\]
                        <p>Ridge performs uniform shrinkage on all coefficients but does not produce sparse solutions.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.22 (SVD Representation of Ridge)</div>
                    <div class="env-body">
                        <p>Let \(\mathbf{X} = \mathbf{U}\mathbf{D}\mathbf{V}^\top\) be the SVD, where \(d_1 \geq \cdots \geq d_p > 0\) are the singular values. Then</p>
                        \[\hat{\mathbf{y}}^{\text{ridge}} = \sum_{j=1}^{p} \frac{d_j^2}{d_j^2 + \lambda} \mathbf{u}_j \mathbf{u}_j^\top \mathbf{y}.\]
                        <p>The factor \(d_j^2/(d_j^2 + \lambda)\) shrinks coefficients more strongly in directions with small singular values.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.23 (Lasso Regression)</div>
                    <div class="env-body">
                        <p><strong>Lasso</strong> (Least Absolute Shrinkage and Selection Operator) uses an \(L_1\) penalty:</p>
                        \[\hat{\boldsymbol{\beta}}^{\text{lasso}} = \arg\min_{\boldsymbol{\beta}} \left\{ \frac{1}{2n}\|\mathbf{y} - \mathbf{X}\boldsymbol{\beta}\|^2 + \lambda \|\boldsymbol{\beta}\|_1 \right\}.\]
 <p>The geometric property of the \(L_1\) penalty causes Lasso to produce <strong>sparse solutions </strong> -- some coefficients are set exactly to zero, achieving automatic variable selection.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Geometry of \\(L_1\\) vs \\(L_2\\))</div>
                    <div class="env-body">
                        <p>The OLS contours are ellipses. The \(L_2\) constraint region is a ball (smooth), so the tangent point is typically not on a coordinate axis -- coefficients are shrunk but not zeroed. The \(L_1\) constraint region is a diamond (with corners), so the contours often touch at a corner -- corners correspond to solutions where some coordinates are zero, producing sparsity.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.24 (Elastic Net)</div>
                    <div class="env-body">
 <p><strong>Elastic Net </strong> combines \(L_1\) and \(L_2\) penalties:</p>
                        \[\hat{\boldsymbol{\beta}}^{\text{EN}} = \arg\min_{\boldsymbol{\beta}} \left\{ \frac{1}{2n}\|\mathbf{y} - \mathbf{X}\boldsymbol{\beta}\|^2 + \lambda\left(\alpha\|\boldsymbol{\beta}\|_1 + \frac{1-\alpha}{2}\|\boldsymbol{\beta}\|^2\right) \right\},\]
                        <p>where \(\alpha \in [0, 1]\) controls the mixing ratio. \(\alpha = 1\) gives Lasso, \(\alpha = 0\) gives Ridge. Elastic Net tends to select or exclude highly correlated variables together -- the grouping effect.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.25 (K-fold Cross-Validation for \\(\\lambda\\))</div>
                    <div class="env-body">
                        <p>Randomly partition the data into \(K\) folds. For each candidate \(\lambda\), train on \(K-1\) folds and validate on 1 fold in turn, computing the average prediction error:</p>
                        \[\text{CV}(\lambda) = \frac{1}{K} \sum_{k=1}^{K} \frac{1}{|\mathcal{V}_k|} \sum_{i \in \mathcal{V}_k} (y_i - \hat{y}_i^{(-k)})^2.\]
                        <p>Select the \(\lambda_{\min}\) that minimizes \(\text{CV}(\lambda)\), or more conservatively use the "one-SE rule": the largest \(\lambda\) whose CV error is within one standard error of \(\lambda_{\min}\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.26 (Variable Selection Consistency of Lasso)</div>
                    <div class="env-body">
                        <p>Let \(\mathcal{S} = \{j : \beta_j \neq 0\}\) be the true support set. Under the <strong>irrepresentable condition</strong> (i.e., \(\|\mathbf{X}_{\mathcal{S}^c}^\top \mathbf{X}_{\mathcal{S}} (\mathbf{X}_{\mathcal{S}}^\top \mathbf{X}_{\mathcal{S}})^{-1} \operatorname{sign}(\boldsymbol{\beta}_{\mathcal{S}})\|_\infty < 1\)), with an appropriate choice of \(\lambda\), Lasso recovers the true support \(\mathcal{S}\) with probability tending to 1 (sign consistency).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="coefficient-path-viz"></div>
            `,
            visualizations: [
                {
                    id: 'coefficient-path-viz',
 title:'Interactive: Coefficient Shrinkage Paths (Ridge vs Lasso)',
 description:'Adjust the regularization strength lambda to observe how coefficients are shrunk -- notice Lasso produces sparse solutionslambda',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 580, height: 420, scale: 1, originX: 70, originY: 210});

                        var nObs = 60;
                        var p = 6;
                        var trueB = [2.0, -1.5, 0, 1.0, 0, -0.5];
                        var varColors = [viz.colors.blue, viz.colors.orange, viz.colors.green, viz.colors.purple, viz.colors.pink, viz.colors.teal];
                        var varNames = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6'];

                        var X = [];
                        var Y = [];
                        for (var i = 0; i < nObs; i++) {
                            var row = [];
                            for (var j = 0; j < p; j++) row.push(VizEngine.randomNormal(0, 1));
                            X.push(row);
                            var yi = 0;
                            for (var j2 = 0; j2 < p; j2++) yi += trueB[j2] * row[j2];
                            yi += VizEngine.randomNormal(0, 0.8);
                            Y.push(yi);
                        }

                        var XtX = [];
                        for (var a = 0; a < p; a++) {
                            XtX[a] = [];
                            for (var b = 0; b < p; b++) {
                                var s = 0;
                                for (var ii = 0; ii < nObs; ii++) s += X[ii][a] * X[ii][b];
                                XtX[a][b] = s;
                            }
                        }
                        var XtY = [];
                        for (var a2 = 0; a2 < p; a2++) {
                            var s2 = 0;
                            for (var ii2 = 0; ii2 < nObs; ii2++) s2 += X[ii2][a2] * Y[ii2];
                            XtY.push(s2);
                        }

                        function solveRidge(lam) {
                            var M = [];
                            for (var a = 0; a < p; a++) {
                                M[a] = [];
                                for (var b = 0; b < p; b++) M[a][b] = XtX[a][b] + (a === b ? lam : 0);
                            }
                            var aug2 = [];
                            for (var r = 0; r < p; r++) {
                                aug2[r] = [];
                                for (var c = 0; c < p; c++) aug2[r][c] = M[r][c];
                                for (var c2 = 0; c2 < p; c2++) aug2[r][p + c2] = (r === c2) ? 1 : 0;
                            }
                            for (var col = 0; col < p; col++) {
                                var maxR = col;
                                for (var rr = col+1; rr < p; rr++) {
                                    if (Math.abs(aug2[rr][col]) > Math.abs(aug2[maxR][col])) maxR = rr;
                                }
                                var tmp = aug2[col]; aug2[col] = aug2[maxR]; aug2[maxR] = tmp;
                                var pv = aug2[col][col];
                                if (Math.abs(pv) < 1e-14) continue;
                                for (var c3 = 0; c3 < 2*p; c3++) aug2[col][c3] /= pv;
                                for (var rr2 = 0; rr2 < p; rr2++) {
                                    if (rr2 === col) continue;
                                    var f = aug2[rr2][col];
                                    for (var c4 = 0; c4 < 2*p; c4++) aug2[rr2][c4] -= f * aug2[col][c4];
                                }
                            }
                            var bhat = [];
                            for (var a3 = 0; a3 < p; a3++) {
                                var v = 0;
                                for (var b3 = 0; b3 < p; b3++) v += aug2[a3][p + b3] * XtY[b3];
                                bhat.push(v);
                            }
                            return bhat;
                        }

                        function softThresh(z, g) {
                            if (z > g) return z - g;
                            if (z < -g) return z + g;
                            return 0;
                        }

                        function solveLasso(lam) {
                            var beta = solveRidge(0).slice();
                            for (var iter = 0; iter < 200; iter++) {
                                for (var j3 = 0; j3 < p; j3++) {
                                    var rj = XtY[j3];
                                    for (var k = 0; k < p; k++) {
                                        if (k !== j3) rj -= XtX[j3][k] * beta[k];
                                    }
                                    beta[j3] = softThresh(rj, lam) / XtX[j3][j3];
                                }
                            }
                            return beta;
                        }

                        var nLambdas = 60;
                        var lambdas = [];
                        var logMin = -1, logMax = 4;
                        for (var ll = 0; ll < nLambdas; ll++) {
                            lambdas.push(Math.pow(10, logMin + (logMax - logMin) * ll / (nLambdas - 1)));
                        }

                        var ridgePaths = [];
                        var lassoPaths = [];
                        for (var j5 = 0; j5 < p; j5++) { ridgePaths.push([]); lassoPaths.push([]); }
                        for (var ll2 = 0; ll2 < nLambdas; ll2++) {
                            var rb = solveRidge(lambdas[ll2]);
                            var lb = solveLasso(lambdas[ll2]);
                            for (var j6 = 0; j6 < p; j6++) {
                                ridgePaths[j6].push(rb[j6]);
                                lassoPaths[j6].push(lb[j6]);
                            }
                        }

                        var showRidge = true;
                        VizEngine.createButton(controls, 'Toggle Ridge/Lasso', function() { showRidge = !showRidge; });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var plotL = 70, plotR = 550, plotT = 45, plotB = 380;
                            var pW = plotR - plotL, pH = plotB - plotT;
                            var midY = (plotT + plotB) / 2;

                            ctx.strokeStyle = viz.colors.axis; ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(plotL, plotB); ctx.lineTo(plotR, plotB);
                            ctx.moveTo(plotL, plotT); ctx.lineTo(plotL, plotB);
                            ctx.stroke();

                            ctx.strokeStyle = viz.colors.text + '40'; ctx.lineWidth = 0.5;
                            ctx.beginPath(); ctx.moveTo(plotL, midY); ctx.lineTo(plotR, midY); ctx.stroke();

                            ctx.fillStyle = viz.colors.text; ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            for (var t = 0; t <= 5; t++) {
                                var logV = logMin + (logMax - logMin) * t / 5;
                                var sx = plotL + t / 5 * pW;
                                ctx.fillText('1e' + logV.toFixed(0), sx, plotB + 14);
                            }

                            var maxAbsB = 0;
                            var paths = showRidge ? ridgePaths : lassoPaths;
                            for (var j7 = 0; j7 < p; j7++) {
                                for (var ll3 = 0; ll3 < nLambdas; ll3++) {
                                    if (Math.abs(paths[j7][ll3]) > maxAbsB) maxAbsB = Math.abs(paths[j7][ll3]);
                                }
                            }
                            if (maxAbsB < 0.1) maxAbsB = 0.1;

                            for (var j8 = 0; j8 < p; j8++) {
                                ctx.strokeStyle = varColors[j8];
                                ctx.lineWidth = trueB[j8] === 0 ? 1 : 2;
                                ctx.beginPath();
                                for (var ll4 = 0; ll4 < nLambdas; ll4++) {
                                    var sx2 = plotL + ll4 / (nLambdas - 1) * pW;
                                    var sy = midY - (paths[j8][ll4] / maxAbsB) * (pH / 2) * 0.9;
                                    if (ll4 === 0) ctx.moveTo(sx2, sy);
                                    else ctx.lineTo(sx2, sy);
                                }
                                ctx.stroke();
                            }

                            for (var j9 = 0; j9 < p; j9++) {
                                var endY = midY - (paths[j9][0] / maxAbsB) * (pH / 2) * 0.9;
                                ctx.fillStyle = varColors[j9];
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText(varNames[j9] + '=' + trueB[j9].toFixed(1), plotL + 4, endY - 6);
                            }

                            var title = showRidge ? 'Ridge Coefficient Paths' : 'Lasso Coefficient Paths';
                            viz.screenText(title, viz.width / 2, 18, viz.colors.white, 14);
                            viz.screenText('log10(lambda) --->', (plotL + plotR) / 2, plotB + 32, viz.colors.white, 11);
                            viz.screenText('Dashed = zero coefficients. ' + (showRidge ? 'Ridge shrinks but never zeros.' : 'Lasso sets coefficients exactly to 0.'), viz.width / 2, plotB + 48, viz.colors.text, 10);
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that the Ridge regression solution is \\(\\hat{\\boldsymbol{\\beta}}^{\\text{ridge}} = (\\mathbf{X}^\\top\\mathbf{X} + \\lambda\\mathbf{I})^{-1}\\mathbf{X}^\\top\\mathbf{y}\\), and explain why \\(\\lambda > 0\\) guarantees invertibility.',
                    hint: 'Take the derivative of the Ridge objective function, using the facts that \\(\\mathbf{X}^\\top\\mathbf{X}\\) is positive semi-definite and \\(\\lambda\\mathbf{I}\\) is positive definite.',
                    solution: 'The objective is \\(L = (\\mathbf{y} - \\mathbf{X}\\boldsymbol{\\beta})^\\top(\\mathbf{y} - \\mathbf{X}\\boldsymbol{\\beta}) + \\lambda\\boldsymbol{\\beta}^\\top\\boldsymbol{\\beta}\\). Taking the derivative with respect to \\(\\boldsymbol{\\beta}\\): \\(-2\\mathbf{X}^\\top(\\mathbf{y} - \\mathbf{X}\\boldsymbol{\\beta}) + 2\\lambda\\boldsymbol{\\beta} = 0\\), i.e., \\((\\mathbf{X}^\\top\\mathbf{X} + \\lambda\\mathbf{I})\\boldsymbol{\\beta} = \\mathbf{X}^\\top\\mathbf{y}\\). Since \\(\\mathbf{X}^\\top\\mathbf{X}\\) is positive semi-definite, the smallest eigenvalue of \\(\\mathbf{X}^\\top\\mathbf{X} + \\lambda\\mathbf{I}\\) is \\(\\geq \\lambda > 0\\), so the matrix is positive definite and hence invertible.'
                },
                {
                    question: 'Under the orthogonal design \\(\\mathbf{X}^\\top\\mathbf{X} = n\\mathbf{I}\\), write the shrinkage formulas for Ridge and Lasso applied to the OLS estimate \\(\\hat{\\beta}_j^{\\text{OLS}}\\).',
                    hint: 'After diagonalization, Ridge treats each component independently. Lasso has a soft-thresholding closed-form solution in the orthogonal case.',
                    solution: 'Ridge: \\(\\hat{\\beta}_j^{\\text{ridge}} = \\frac{n}{n + \\lambda} \\hat{\\beta}_j^{\\text{OLS}}\\) (proportional shrinkage). Lasso: \\(\\hat{\\beta}_j^{\\text{lasso}} = \\text{sign}(\\hat{\\beta}_j^{\\text{OLS}}) \\max(|\\hat{\\beta}_j^{\\text{OLS}}| - \\lambda/n, 0)\\) (soft thresholding, setting small coefficients exactly to zero).'
                },
                {
                    question: 'Explain why Elastic Net handles groups of highly correlated variables better than Lasso.',
                    hint: 'Consider what happens when a group of variables are nearly identical: how does Lasso choose among them? What role does the \\(L_2\\) component play?',
                    solution: 'When a group of variables are highly correlated, the \\(L_1\\) penalty in Lasso tends to select only one of them along the solution path (because the \\(L_1\\) ball corners favor coordinate-axis directions), leading to unstable selection -- small data perturbations can switch which variable is selected. The \\(L_2\\) penalty term in Elastic Net introduces strict convexity into the objective, causing correlated variables to have similar coefficient estimates (the grouping effect). Zou and Hastie (2005) proved: if \\(|\\rho(x_i, x_j)| \\to 1\\), then \\(|\\hat{\\beta}_i^{\\text{EN}} - \\hat{\\beta}_j^{\\text{EN}}| \\to 0\\).'
                }
            ]
        }
    ]
});

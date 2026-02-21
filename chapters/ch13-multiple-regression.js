window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch13',
    number: 13,
    title: '多元回归与模型选择',
    subtitle: 'Multiple Regression & Model Selection',
    sections: [
        // ============================================================
        // Section 1: 多元线性模型
        // ============================================================
        {
            id: 'ch13-sec01',
            title: '多元线性模型',
            content: `
                <h2>多元线性模型</h2>

                <p>在简单线性回归中我们研究了单个自变量与因变量的关系。实际问题中，响应变量往往受到多个解释变量的共同影响。<strong>多元线性回归 (multiple linear regression)</strong> 将模型推广到 \\(p\\) 个自变量的情形，并借助矩阵语言获得优雅的理论表述。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.1 (多元线性模型)</div>
                    <div class="env-body">
                        <p>设观测数据 \\((y_i, x_{i1}, \\ldots, x_{ip})\\)，\\(i = 1, \\ldots, n\\)。<strong>多元线性模型</strong>为</p>
                        \\[y_i = \\beta_0 + \\beta_1 x_{i1} + \\cdots + \\beta_p x_{ip} + \\varepsilon_i, \\quad i = 1, \\ldots, n,\\]
                        <p>其中 \\(\\varepsilon_1, \\ldots, \\varepsilon_n\\) 独立同分布，\\(\\mathbb{E}[\\varepsilon_i] = 0\\)，\\(\\operatorname{Var}(\\varepsilon_i) = \\sigma^2\\)。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.2 (矩阵形式)</div>
                    <div class="env-body">
                        <p>定义 \\(n \\times (p+1)\\) 设计矩阵 \\(\\mathbf{X}\\)，响应向量 \\(\\mathbf{y}\\) 和参数向量 \\(\\boldsymbol{\\beta}\\)：</p>
                        \\[\\mathbf{X} = \\begin{pmatrix} 1 & x_{11} & \\cdots & x_{1p} \\\\ 1 & x_{21} & \\cdots & x_{2p} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 1 & x_{n1} & \\cdots & x_{np} \\end{pmatrix}, \\quad \\mathbf{y} = \\begin{pmatrix} y_1 \\\\ y_2 \\\\ \\vdots \\\\ y_n \\end{pmatrix}, \\quad \\boldsymbol{\\beta} = \\begin{pmatrix} \\beta_0 \\\\ \\beta_1 \\\\ \\vdots \\\\ \\beta_p \\end{pmatrix}.\\]
                        <p>模型简写为 \\(\\mathbf{y} = \\mathbf{X}\\boldsymbol{\\beta} + \\boldsymbol{\\varepsilon}\\)，其中 \\(\\boldsymbol{\\varepsilon} \\sim (\\mathbf{0}, \\sigma^2 \\mathbf{I}_n)\\)。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.3 (OLS 估计量)</div>
                    <div class="env-body">
                        <p>若 \\(\\mathbf{X}^\\top \\mathbf{X}\\) 可逆，则最小二乘估计量为</p>
                        \\[\\hat{\\boldsymbol{\\beta}} = (\\mathbf{X}^\\top \\mathbf{X})^{-1} \\mathbf{X}^\\top \\mathbf{y}.\\]
                        <p>预测值 \\(\\hat{\\mathbf{y}} = \\mathbf{H} \\mathbf{y}\\)，其中 \\(\\mathbf{H} = \\mathbf{X}(\\mathbf{X}^\\top \\mathbf{X})^{-1}\\mathbf{X}^\\top\\) 为<strong>帽子矩阵 (hat matrix)</strong>。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>最小化残差平方和 \\(S(\\boldsymbol{\\beta}) = (\\mathbf{y} - \\mathbf{X}\\boldsymbol{\\beta})^\\top(\\mathbf{y} - \\mathbf{X}\\boldsymbol{\\beta})\\)。对 \\(\\boldsymbol{\\beta}\\) 求导：</p>
                        \\[\\frac{\\partial S}{\\partial \\boldsymbol{\\beta}} = -2\\mathbf{X}^\\top(\\mathbf{y} - \\mathbf{X}\\boldsymbol{\\beta}) = \\mathbf{0}\\]
                        <p>即正规方程 \\(\\mathbf{X}^\\top \\mathbf{X} \\boldsymbol{\\beta} = \\mathbf{X}^\\top \\mathbf{y}\\)。由 \\(\\mathbf{X}^\\top \\mathbf{X}\\) 可逆性立得 \\(\\hat{\\boldsymbol{\\beta}} = (\\mathbf{X}^\\top \\mathbf{X})^{-1}\\mathbf{X}^\\top \\mathbf{y}\\)。Hessian \\(2\\mathbf{X}^\\top \\mathbf{X}\\) 正定，故为最小值点。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.4 (Hat Matrix 性质)</div>
                    <div class="env-body">
                        <p>帽子矩阵 \\(\\mathbf{H}\\) 满足：(i) \\(\\mathbf{H}^2 = \\mathbf{H}\\)（幂等）；(ii) \\(\\mathbf{H}^\\top = \\mathbf{H}\\)（对称）；(iii) \\(\\operatorname{tr}(\\mathbf{H}) = p + 1\\)；(iv) 对角元素 \\(0 \\leq h_{ii} \\leq 1\\)，称为第 \\(i\\) 个观测的<strong>杠杆值 (leverage)</strong>。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>帽子矩阵 \\(\\mathbf{H}\\) 将观测向量 \\(\\mathbf{y}\\) 正交投影到 \\(\\mathbf{X}\\) 的列空间 \\(\\mathcal{C}(\\mathbf{X})\\)。杠杆值 \\(h_{ii}\\) 度量第 \\(i\\) 个观测在自变量空间中的"极端程度"——越远离中心的点对拟合的影响越大。残差 \\(\\mathbf{e} = (\\mathbf{I} - \\mathbf{H})\\mathbf{y}\\) 是 \\(\\mathbf{y}\\) 在列空间正交补上的投影。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.5 (无偏估计 \\(\\sigma^2\\))</div>
                    <div class="env-body">
                        <p>\\(\\sigma^2\\) 的无偏估计为</p>
                        \\[s^2 = \\frac{\\text{RSS}}{n - p - 1} = \\frac{\\mathbf{e}^\\top \\mathbf{e}}{n - p - 1},\\]
                        <p>其中 \\(\\text{RSS} = \\sum_{i=1}^n (y_i - \\hat{y}_i)^2\\) 为残差平方和，\\(n - p - 1\\) 为自由度。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="regression-plane-viz"></div>
            `,
            visualizations: [
                {
                    id: 'regression-plane-viz',
                    title: 'Interactive: 3D 回归平面 (2D 投影)',
                    description: '拖动数据点观察回归面如何拟合——投影展示两个变量对响应的联合影响',
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
                        var angleSlider = VizEngine.createSlider(controls, 'View angle', 0, Math.PI, viewAngle, 0.05, function(v) {
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
                            viz.screenText('b0=' + b0.toFixed(2) + '  b1=' + b1.toFixed(2) + '  b2=' + b2.toFixed(2) + '  R\u00B2=' + r2.toFixed(3), viz.width/2, 38, viz.colors.teal, 12);
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '证明帽子矩阵 \\(\\mathbf{H} = \\mathbf{X}(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top\\) 是对称幂等矩阵，即 \\(\\mathbf{H}^\\top = \\mathbf{H}\\) 且 \\(\\mathbf{H}^2 = \\mathbf{H}\\)。',
                    hint: '直接利用矩阵乘法展开 \\(\\mathbf{H}^2\\)，并利用 \\((\\mathbf{AB})^\\top = \\mathbf{B}^\\top \\mathbf{A}^\\top\\) 证明对称性。',
                    solution: '对称性：\\(\\mathbf{H}^\\top = (\\mathbf{X}(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top)^\\top = \\mathbf{X}((\\mathbf{X}^\\top\\mathbf{X})^{-1})^\\top\\mathbf{X}^\\top = \\mathbf{X}(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top = \\mathbf{H}\\)，因为 \\((\\mathbf{X}^\\top\\mathbf{X})^{-1}\\) 对称。幂等性：\\(\\mathbf{H}^2 = \\mathbf{X}(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top \\mathbf{X}(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top = \\mathbf{X}(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top = \\mathbf{H}\\)。'
                },
                {
                    question: '证明 \\(\\operatorname{tr}(\\mathbf{H}) = p + 1\\)。',
                    hint: '利用迹的循环性质 \\(\\operatorname{tr}(\\mathbf{ABC}) = \\operatorname{tr}(\\mathbf{CAB})\\)。',
                    solution: '\\(\\operatorname{tr}(\\mathbf{H}) = \\operatorname{tr}(\\mathbf{X}(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top) = \\operatorname{tr}((\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top\\mathbf{X}) = \\operatorname{tr}(\\mathbf{I}_{p+1}) = p + 1\\)。'
                },
                {
                    question: '在模型 \\(\\mathbf{y} = \\mathbf{X}\\boldsymbol{\\beta} + \\boldsymbol{\\varepsilon}\\) 下，证明 \\(\\hat{\\boldsymbol{\\beta}}\\) 的协方差矩阵为 \\(\\operatorname{Cov}(\\hat{\\boldsymbol{\\beta}}) = \\sigma^2 (\\mathbf{X}^\\top\\mathbf{X})^{-1}\\)。',
                    hint: '将 \\(\\hat{\\boldsymbol{\\beta}} = (\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top\\mathbf{y}\\) 看作 \\(\\mathbf{y}\\) 的线性变换。',
                    solution: '\\(\\operatorname{Cov}(\\hat{\\boldsymbol{\\beta}}) = (\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top \\operatorname{Cov}(\\mathbf{y}) \\mathbf{X}(\\mathbf{X}^\\top\\mathbf{X})^{-1} = (\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{X}^\\top (\\sigma^2\\mathbf{I}) \\mathbf{X}(\\mathbf{X}^\\top\\mathbf{X})^{-1} = \\sigma^2(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\)。'
                }
            ]
        },
        // ============================================================
        // Section 2: 推断与检验
        // ============================================================
        {
            id: 'ch13-sec02',
            title: '推断与检验',
            content: `
                <h2>推断与检验</h2>

                <p>在多元回归中，我们通常关心：(1) 某个单独的系数是否显著（t 检验），(2) 一组系数是否同时为零（F 检验），以及 (3) 模型整体的拟合优度。这些推断工具是模型解释和变量筛选的基础。</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.6 (正态假设下的分布)</div>
                    <div class="env-body">
                        <p>若进一步假设 \\(\\boldsymbol{\\varepsilon} \\sim N(\\mathbf{0}, \\sigma^2\\mathbf{I}_n)\\)，则：</p>
                        <p>(a) \\(\\hat{\\boldsymbol{\\beta}} \\sim N(\\boldsymbol{\\beta}, \\sigma^2(\\mathbf{X}^\\top\\mathbf{X})^{-1})\\)；</p>
                        <p>(b) \\(\\text{RSS}/\\sigma^2 \\sim \\chi^2_{n-p-1}\\)；</p>
                        <p>(c) \\(\\hat{\\boldsymbol{\\beta}}\\) 与 \\(s^2\\) 独立。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.7 (单系数 t 检验)</div>
                    <div class="env-body">
                        <p>检验 \\(H_0: \\beta_j = 0\\) vs \\(H_1: \\beta_j \\neq 0\\)。检验统计量为</p>
                        \\[t_j = \\frac{\\hat{\\beta}_j}{\\operatorname{se}(\\hat{\\beta}_j)} = \\frac{\\hat{\\beta}_j}{s \\sqrt{c_{jj}}},\\]
                        <p>其中 \\(c_{jj}\\) 是 \\((\\mathbf{X}^\\top\\mathbf{X})^{-1}\\) 的第 \\(j\\) 个对角元素。在 \\(H_0\\) 下 \\(t_j \\sim t_{n-p-1}\\)。</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning: t 检验的条件性</div>
                    <div class="env-body">
                        <p>t 检验的结论是<strong>条件于其他变量都在模型中</strong>的。当 \\(x_j\\) 和 \\(x_k\\) 高度相关时，两者的 t 检验可能都不显著，但联合 F 检验却高度显著——这就是<strong>多重共线性 (multicollinearity)</strong> 的效应。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.8 (Overall F-test)</div>
                    <div class="env-body">
                        <p>检验 \\(H_0: \\beta_1 = \\cdots = \\beta_p = 0\\)（即模型中所有变量都无效）的统计量为</p>
                        \\[F = \\frac{(\\text{TSS} - \\text{RSS})/p}{\\text{RSS}/(n - p - 1)} = \\frac{\\text{RegSS}/p}{\\text{RSS}/(n-p-1)} \\sim F_{p, n-p-1}.\\]
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.9 (Partial F-test)</div>
                    <div class="env-body">
                        <p>比较完整模型 (full, \\(p\\) 个变量) 和缩减模型 (reduced, \\(q\\) 个变量, \\(q < p\\))：</p>
                        \\[F = \\frac{(\\text{RSS}_{\\text{reduced}} - \\text{RSS}_{\\text{full}})/(p - q)}{\\text{RSS}_{\\text{full}}/(n - p - 1)} \\sim F_{p-q, \\, n-p-1}.\\]
                        <p>这检验了被剔除变量<strong>联合</strong>对模型的贡献。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.10 (决定系数)</div>
                    <div class="env-body">
                        <p>\\(R^2 = 1 - \\frac{\\text{RSS}}{\\text{TSS}}\\) 度量模型解释的变异比例。调整 \\(R^2\\) 为</p>
                        \\[R^2_{\\text{adj}} = 1 - \\frac{\\text{RSS}/(n-p-1)}{\\text{TSS}/(n-1)}.\\]
                        <p>\\(R^2\\) 随变量增加单调不减，而 \\(R^2_{\\text{adj}}\\) 对模型复杂度有惩罚。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 13.11</div>
                    <div class="env-body">
                        <p>考虑 \\(n = 50\\)，\\(p = 3\\) 的回归。若 \\(\\text{TSS} = 200\\)，\\(\\text{RSS} = 80\\)，则 \\(R^2 = 0.6\\)。Overall F 统计量为</p>
                        \\[F = \\frac{120/3}{80/46} = \\frac{40}{1.739} \\approx 23.0,\\]
                        <p>在 \\(F_{3,46}\\) 下 p-value 极小，模型整体高度显著。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="coefficient-significance-viz"></div>
            `,
            visualizations: [
                {
                    id: 'coefficient-significance-viz',
                    title: 'Interactive: 系数显著性 (t-statistics)',
                    description: '调整样本量和误差方差，观察系数的 t 统计量和置信区间变化',
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
                            viz.screenText('Green = |t| > 2 (sig at 5%),  Red = not significant', viz.width/2, 34, viz.colors.text, 11);
                            viz.screenText('Dashed = true value,  n=' + sampleN + ', sigma=' + noiseSD.toFixed(1), viz.width/2, 50, viz.colors.text, 11);
                        }

                        viz.animate(draw);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '证明 \\(R^2 = 1 - \\text{RSS}/\\text{TSS}\\) 可以等价地写成 \\(R^2 = \\hat{\\mathbf{y}}^\\top \\hat{\\mathbf{y}} / \\mathbf{y}_c^\\top \\mathbf{y}_c\\)，其中 \\(\\mathbf{y}_c = \\mathbf{y} - \\bar{y}\\mathbf{1}\\) 是中心化后的响应向量（假设模型含截距）。',
                    hint: '利用 \\(\\text{TSS} = \\text{RegSS} + \\text{RSS}\\) 以及 \\(\\hat{\\mathbf{y}}\\) 与 \\(\\mathbf{e}\\) 正交。',
                    solution: '当模型含截距时，\\(\\hat{\\mathbf{y}}^\\top \\mathbf{e} = 0\\) 且 \\(\\mathbf{1}^\\top \\mathbf{e} = 0\\)。因此 \\(\\|\\mathbf{y}_c\\|^2 = \\|\\hat{\\mathbf{y}}_c\\|^2 + \\|\\mathbf{e}\\|^2\\)，即 \\(\\text{TSS} = \\text{RegSS} + \\text{RSS}\\)。故 \\(R^2 = \\text{RegSS}/\\text{TSS}\\)。由于 \\(\\hat{\\mathbf{y}}_c = \\hat{\\mathbf{y}} - \\bar{y}\\mathbf{1}\\)，\\(\\text{RegSS} = \\|\\hat{\\mathbf{y}}_c\\|^2\\)。'
                },
                {
                    question: '设 full model 有 \\(p = 5\\) 个变量，\\(\\text{RSS}_{\\text{full}} = 40\\)。reduced model 去掉 2 个变量后 \\(\\text{RSS}_{\\text{red}} = 52\\)，\\(n = 60\\)。计算 partial F 统计量并判断是否在 5% 水平显著（\\(F_{2,54}\\) 的 5% 临界值约 3.17）。',
                    hint: '代入 partial F 公式，注意分子自由度为被剔除的变量数。',
                    solution: '\\(F = \\frac{(52 - 40)/2}{40/54} = \\frac{6}{0.741} \\approx 8.10\\)。由于 \\(8.10 > 3.17\\)，在 5% 水平拒绝 \\(H_0\\)，被剔除的两个变量对模型有显著贡献。'
                },
                {
                    question: '解释为什么高度共线的两个变量可能各自的 t 检验不显著，但联合 F 检验显著。',
                    hint: '考虑 \\((\\mathbf{X}^\\top\\mathbf{X})^{-1}\\) 对角元素在共线时的行为。',
                    solution: '当 \\(x_j\\) 和 \\(x_k\\) 高度相关时，\\((\\mathbf{X}^\\top\\mathbf{X})^{-1}\\) 的对应对角元素 \\(c_{jj}\\) 和 \\(c_{kk}\\) 变得很大（因为矩阵接近奇异），导致标准误膨胀，t 统计量缩小。但 partial F 检验同时考虑两个变量的联合贡献，不受这种"方差膨胀"影响——去掉两个变量后 RSS 显著增大，F 值仍然大。'
                }
            ]
        },
        // ============================================================
        // Section 3: 模型诊断
        // ============================================================
        {
            id: 'ch13-sec03',
            title: '模型诊断',
            content: `
                <h2>模型诊断</h2>

                <p>拟合模型后，必须检查模型假设是否合理、是否存在异常观测。<strong>模型诊断 (regression diagnostics)</strong> 借助残差分析、杠杆值和影响度量来评估模型的可靠性。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.12 (标准化残差与学生化残差)</div>
                    <div class="env-body">
                        <p>第 \\(i\\) 个观测的<strong>标准化残差</strong>为</p>
                        \\[r_i = \\frac{e_i}{s\\sqrt{1 - h_{ii}}},\\]
                        <p>其中 \\(h_{ii}\\) 为杠杆值。<strong>外学生化残差 (externally studentized residual)</strong> 为</p>
                        \\[t_i = \\frac{e_i}{s_{(i)}\\sqrt{1 - h_{ii}}},\\]
                        <p>其中 \\(s_{(i)}^2\\) 是删去第 \\(i\\) 个观测后的残差方差估计。在正态假设下 \\(t_i \\sim t_{n-p-2}\\)。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.13 (方差膨胀因子 VIF)</div>
                    <div class="env-body">
                        <p>第 \\(j\\) 个变量的<strong>方差膨胀因子</strong>为</p>
                        \\[\\text{VIF}_j = \\frac{1}{1 - R_j^2},\\]
                        <p>其中 \\(R_j^2\\) 是以 \\(x_j\\) 为因变量、其余自变量为解释变量的回归 \\(R^2\\)。\\(\\text{VIF}_j\\) 衡量共线性对 \\(\\hat{\\beta}_j\\) 方差的放大倍数。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (VIF 判断标准)</div>
                    <div class="env-body">
                        <p>实务中常用准则：\\(\\text{VIF} > 10\\)（即 \\(R_j^2 > 0.9\\)）提示严重共线性；\\(\\text{VIF} > 5\\) 值得关注。但这些阈值并非绝对——应结合 condition number \\(\\kappa(\\mathbf{X}^\\top\\mathbf{X})\\) 综合判断。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.14 (Cook's Distance)</div>
                    <div class="env-body">
                        <p>第 \\(i\\) 个观测的<strong>Cook's distance</strong> 综合了杠杆值和残差大小：</p>
                        \\[D_i = \\frac{r_i^2}{p + 1} \\cdot \\frac{h_{ii}}{1 - h_{ii}}.\\]
                        <p>等价地，\\(D_i = \\frac{(\\hat{\\boldsymbol{\\beta}} - \\hat{\\boldsymbol{\\beta}}_{(i)})^\\top (\\mathbf{X}^\\top\\mathbf{X}) (\\hat{\\boldsymbol{\\beta}} - \\hat{\\boldsymbol{\\beta}}_{(i)})}{(p+1)s^2}\\)，度量删去第 \\(i\\) 个观测后系数的变化。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Cook's distance 可以分解为"离群程度" \\(\\times\\) "杠杆效应"。高杠杆点（在自变量空间的边缘）如果同时有大残差，就是<strong>影响点 (influential point)</strong>。经验法则：\\(D_i > 4/n\\) 或 \\(D_i > 1\\) 表示该点有显著影响。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.15 (DFFITS 与 DFBETAS)</div>
                    <div class="env-body">
                        <p><strong>DFFITS</strong> 度量删去第 \\(i\\) 个观测后拟合值的变化：</p>
                        \\[\\text{DFFITS}_i = t_i \\sqrt{\\frac{h_{ii}}{1 - h_{ii}}}.\\]
                        <p><strong>DFBETAS</strong> 度量对单个系数的影响：\\(\\text{DFBETAS}_{j,i} = \\frac{\\hat{\\beta}_j - \\hat{\\beta}_{j(i)}}{s_{(i)}\\sqrt{c_{jj}}}\\)。判断标准：\\(|\\text{DFFITS}| > 2\\sqrt{(p+1)/n}\\)，\\(|\\text{DFBETAS}| > 2/\\sqrt{n}\\)。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="leverage-cook-viz"></div>
            `,
            visualizations: [
                {
                    id: 'leverage-cook-viz',
                    title: 'Interactive: Leverage vs Cook\'s Distance',
                    description: '拖动异常点观察杠杆值和 Cook\'s distance 如何变化',
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
                    question: '证明 Cook\'s distance 可以写成 \\(D_i = \\frac{r_i^2}{p+1} \\cdot \\frac{h_{ii}}{1 - h_{ii}}\\)，其中 \\(r_i\\) 是标准化残差。',
                    hint: '利用 Sherman-Morrison-Woodbury 公式或直接展开删一观测后的 \\(\\hat{\\boldsymbol{\\beta}}_{(i)}\\) 表达式。',
                    solution: '由 \\(\\hat{\\boldsymbol{\\beta}} - \\hat{\\boldsymbol{\\beta}}_{(i)} = (\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{x}_i e_i/(1 - h_{ii})\\)（删一公式），代入 Cook\'s distance 原始定义 \\(D_i = \\frac{(\\hat{\\boldsymbol{\\beta}} - \\hat{\\boldsymbol{\\beta}}_{(i)})^\\top(\\mathbf{X}^\\top\\mathbf{X})(\\hat{\\boldsymbol{\\beta}} - \\hat{\\boldsymbol{\\beta}}_{(i)})}{(p+1)s^2}\\)，展开得 \\(D_i = \\frac{e_i^2 \\mathbf{x}_i^\\top(\\mathbf{X}^\\top\\mathbf{X})^{-1}\\mathbf{x}_i}{(p+1)s^2(1-h_{ii})^2} = \\frac{e_i^2 h_{ii}}{(p+1)s^2(1-h_{ii})^2} = \\frac{r_i^2}{p+1}\\frac{h_{ii}}{1-h_{ii}}\\)。'
                },
                {
                    question: '一个有 \\(n = 100\\), \\(p = 4\\) 的回归中，某观测的杠杆值 \\(h_{ii} = 0.15\\)，标准化残差 \\(r_i = 3.2\\)。计算其 Cook\'s distance 并判断是否为影响点。',
                    hint: '直接代入公式并与阈值 \\(4/n\\) 比较。',
                    solution: '\\(D_i = \\frac{3.2^2}{5} \\cdot \\frac{0.15}{0.85} = \\frac{10.24}{5} \\cdot 0.176 = 2.048 \\times 0.176 \\approx 0.361\\)。阈值 \\(4/100 = 0.04\\)。由于 \\(0.361 \\gg 0.04\\)，该点是强影响点，应检查是否为异常值或数据录入错误。'
                }
            ]
        },
        // ============================================================
        // Section 4: 模型选择
        // ============================================================
        {
            id: 'ch13-sec04',
            title: '模型选择',
            content: `
                <h2>模型选择</h2>

                <p>当候选变量较多时，如何选择"最佳"子集？过拟合 (overfitting) 与欠拟合 (underfitting) 之间的权衡是统计建模的核心问题。<strong>模型选择 (model selection)</strong> 通过信息准则或交叉验证，在模型复杂度与拟合优度之间寻求平衡。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.16 (AIC — Akaike 信息准则)</div>
                    <div class="env-body">
                        <p>对含 \\(k\\) 个参数的模型，AIC 定义为</p>
                        \\[\\text{AIC} = -2 \\ln \\hat{L} + 2k,\\]
                        <p>其中 \\(\\hat{L}\\) 是最大似然值。在正态线性模型下等价为</p>
                        \\[\\text{AIC} = n \\ln(\\text{RSS}/n) + 2(p + 2).\\]
                        <p>AIC 越小越好。第一项衡量拟合，第二项惩罚复杂度。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.17 (BIC — Bayesian 信息准则)</div>
                    <div class="env-body">
                        <p>BIC 使用更重的惩罚：</p>
                        \\[\\text{BIC} = -2 \\ln \\hat{L} + k \\ln n.\\]
                        <p>当 \\(n \\geq 8\\) 时 \\(\\ln n > 2\\)，BIC 倾向选择更简洁的模型。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.18 (AIC 与 KL 散度)</div>
                    <div class="env-body">
                        <p>设真实分布为 \\(f\\)，候选模型族 \\(g(\\cdot | \\theta)\\)。AIC 是 Kullback-Leibler 散度 \\(\\text{KL}(f \\| g_{\\hat{\\theta}})\\) 的渐近无偏估计（差一个与模型无关的常数）。即 AIC 近似衡量模型对真实分布的逼近程度。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.19 (BIC 的一致性)</div>
                    <div class="env-body">
                        <p>若真实模型在候选集中，则 BIC 在 \\(n \\to \\infty\\) 时以概率 1 选到真实模型（<strong>选择一致性</strong>）。AIC 不具有此性质——它渐近地倾向于过度选择。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.20 (Mallow's Cp)</div>
                    <div class="env-body">
                        <p>对含 \\(k\\) 个变量的子模型，Mallow's \\(C_p\\) 为</p>
                        \\[C_p = \\frac{\\text{RSS}_k}{s^2_{\\text{full}}} - n + 2(k + 1),\\]
                        <p>其中 \\(s^2_{\\text{full}}\\) 是全模型的 \\(\\sigma^2\\) 估计。好模型的 \\(C_p \\approx k + 1\\)。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (逐步回归)</div>
                    <div class="env-body">
                        <p><strong>前向选择 (forward selection)</strong>：从空模型出发，每步加入使某准则改善最大的变量。<strong>后向消除 (backward elimination)</strong>：从全模型出发，每步剔除最不显著的变量。<strong>逐步法 (stepwise)</strong>：前向+后向结合。这些贪心策略计算快但不保证全局最优；当 \\(p\\) 不大时，<strong>最优子集选择 (best subset selection)</strong> 枚举所有 \\(2^p\\) 个子集更为可靠。</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning: 过度搜索与推断失效</div>
                    <div class="env-body">
                        <p>经过模型选择后，被选中变量的 p-value 和置信区间不再有效——它们忽略了选择过程引入的不确定性。这称为<strong>选择后推断 (post-selection inference)</strong> 问题。近年的研究（如 selective inference, data splitting）试图修正这一偏差。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="model-selection-viz"></div>
            `,
            visualizations: [
                {
                    id: 'model-selection-viz',
                    title: 'Interactive: AIC/BIC vs 模型复杂度',
                    description: '调整真实模型的变量数和样本量，观察 AIC/BIC 如何选择最优模型',
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
                    question: '证明在正态线性模型下，AIC 可以写成 \\(\\text{AIC} = n \\ln(\\text{RSS}/n) + 2(p + 2)\\)（不计常数项）。',
                    hint: '写出正态对数似然函数 \\(\\ell(\\boldsymbol{\\beta}, \\sigma^2) = -\\frac{n}{2}\\ln(2\\pi) - \\frac{n}{2}\\ln\\sigma^2 - \\frac{1}{2\\sigma^2}\\text{RSS}\\)，然后代入 MLE \\(\\hat{\\sigma}^2 = \\text{RSS}/n\\)。',
                    solution: '正态对数似然在 MLE 处为 \\(\\hat{\\ell} = -\\frac{n}{2}\\ln(2\\pi) - \\frac{n}{2}\\ln(\\text{RSS}/n) - \\frac{n}{2}\\)。AIC = \\(-2\\hat{\\ell} + 2k = n\\ln(2\\pi) + n\\ln(\\text{RSS}/n) + n + 2(p+2)\\)。由于 \\(n\\ln(2\\pi) + n\\) 对所有模型相同，在比较时可省略，得 \\(\\text{AIC} = n\\ln(\\text{RSS}/n) + 2(p+2)\\)（其中参数数为 \\(p+1\\) 个回归系数加 1 个 \\(\\sigma^2\\)）。'
                },
                {
                    question: '为什么 BIC 具有选择一致性而 AIC 不具有？从惩罚项的增长速率给出直观解释。',
                    hint: '比较 AIC 惩罚 \\(2k\\) 和 BIC 惩罚 \\(k \\ln n\\) 相对于 \\(-2\\hat{\\ell}\\) 的变化。',
                    solution: 'AIC 的惩罚 \\(2k\\) 不随 \\(n\\) 增长。当 \\(n \\to \\infty\\) 时，加入一个无关变量导致 RSS 减少的量渐近为 \\(\\sigma^2 \\chi^2_1\\)，其对 \\(-2\\hat{\\ell}\\) 的减少量期望约为 1，恰好被 AIC 的惩罚 2 抵消不足——AIC 以正概率选择过大的模型。而 BIC 惩罚 \\(k\\ln n \\to \\infty\\)，随样本增大对复杂模型的惩罚不断加强，最终能区分出真实变量与噪声变量。'
                },
                {
                    question: '设有 \\(p = 8\\) 个候选变量，讨论最优子集选择、前向选择和 Lasso 三种方法在计算复杂度和统计性质上的优劣。',
                    hint: '考虑子集总数 \\(2^8 = 256\\)、贪心搜索路径数、以及连续松弛的优点。',
                    solution: '最优子集：枚举 \\(2^8 = 256\\) 个模型，对此 \\(p\\) 完全可行，保证全局最优；但 \\(p > 25\\) 时计算量爆炸。前向选择：最多拟合 \\(O(p^2)\\) 个模型，快速但可能错过好的变量组合（因为贪心）。Lasso：求解凸优化，通过连续正则化路径隐式搜索所有模型，可处理 \\(p \\gg n\\)，且具有变量选择一致性（在 irrepresentable condition 下）；但估计有偏。综合来看，\\(p = 8\\) 时三者都可用，最优子集最直接。'
                }
            ]
        },
        // ============================================================
        // Section 5: 正则化方法
        // ============================================================
        {
            id: 'ch13-sec05',
            title: '正则化方法',
            content: `
                <h2>正则化方法</h2>

                <p>当 \\(p\\) 较大或变量间存在强共线性时，OLS 的方差会非常大。<strong>正则化 (regularization)</strong> 通过对系数施加约束或惩罚，以偏差换方差，获得更好的预测性能。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.21 (Ridge 回归)</div>
                    <div class="env-body">
                        <p><strong>Ridge 回归</strong>在 OLS 目标中加入 \\(L_2\\) 惩罚：</p>
                        \\[\\hat{\\boldsymbol{\\beta}}^{\\text{ridge}} = \\arg\\min_{\\boldsymbol{\\beta}} \\left\\{ \\|\\mathbf{y} - \\mathbf{X}\\boldsymbol{\\beta}\\|^2 + \\lambda \\|\\boldsymbol{\\beta}\\|^2 \\right\\} = (\\mathbf{X}^\\top\\mathbf{X} + \\lambda\\mathbf{I})^{-1}\\mathbf{X}^\\top\\mathbf{y}.\\]
                        <p>Ridge 对所有系数做均匀收缩 (shrinkage)，但不产生稀疏解。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.22 (Ridge 的 SVD 表示)</div>
                    <div class="env-body">
                        <p>设 \\(\\mathbf{X} = \\mathbf{U}\\mathbf{D}\\mathbf{V}^\\top\\) 为 SVD，其中 \\(d_1 \\geq \\cdots \\geq d_p > 0\\) 为奇异值。则</p>
                        \\[\\hat{\\mathbf{y}}^{\\text{ridge}} = \\sum_{j=1}^{p} \\frac{d_j^2}{d_j^2 + \\lambda} \\mathbf{u}_j \\mathbf{u}_j^\\top \\mathbf{y}.\\]
                        <p>因子 \\(d_j^2/(d_j^2 + \\lambda)\\) 对小奇异值方向的系数收缩更强。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.23 (Lasso 回归)</div>
                    <div class="env-body">
                        <p><strong>Lasso</strong> (Least Absolute Shrinkage and Selection Operator) 使用 \\(L_1\\) 惩罚：</p>
                        \\[\\hat{\\boldsymbol{\\beta}}^{\\text{lasso}} = \\arg\\min_{\\boldsymbol{\\beta}} \\left\\{ \\frac{1}{2n}\\|\\mathbf{y} - \\mathbf{X}\\boldsymbol{\\beta}\\|^2 + \\lambda \\|\\boldsymbol{\\beta}\\|_1 \\right\\}.\\]
                        <p>\\(L_1\\) 惩罚的几何特性使得 Lasso 产生<strong>稀疏解</strong>——部分系数恰好为零，实现自动变量选择。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (\\(L_1\\) vs \\(L_2\\) 的几何)</div>
                    <div class="env-body">
                        <p>OLS 的等高线是椭圆。\\(L_2\\) 约束域是球（光滑），切点一般不在坐标轴上——系数被收缩但不为零。\\(L_1\\) 约束域是菱形（有角），等高线往往在角点相切——角点对应某些坐标为零的解，产生稀疏性。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.24 (Elastic Net)</div>
                    <div class="env-body">
                        <p><strong>Elastic Net</strong> 结合 \\(L_1\\) 和 \\(L_2\\) 惩罚：</p>
                        \\[\\hat{\\boldsymbol{\\beta}}^{\\text{EN}} = \\arg\\min_{\\boldsymbol{\\beta}} \\left\\{ \\frac{1}{2n}\\|\\mathbf{y} - \\mathbf{X}\\boldsymbol{\\beta}\\|^2 + \\lambda\\left(\\alpha\\|\\boldsymbol{\\beta}\\|_1 + \\frac{1-\\alpha}{2}\\|\\boldsymbol{\\beta}\\|^2\\right) \\right\\},\\]
                        <p>其中 \\(\\alpha \\in [0, 1]\\) 控制混合比例。\\(\\alpha = 1\\) 为 Lasso，\\(\\alpha = 0\\) 为 Ridge。Elastic Net 在高度相关变量组中倾向于同时选入或排除——具有 grouping 效应。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 13.25 (K-fold 交叉验证选 \\(\\lambda\\))</div>
                    <div class="env-body">
                        <p>将数据随机分为 \\(K\\) 折。对每个候选 \\(\\lambda\\)，轮流用 \\(K-1\\) 折训练、1 折验证，计算平均预测误差：</p>
                        \\[\\text{CV}(\\lambda) = \\frac{1}{K} \\sum_{k=1}^{K} \\frac{1}{|\\mathcal{V}_k|} \\sum_{i \\in \\mathcal{V}_k} (y_i - \\hat{y}_i^{(-k)})^2.\\]
                        <p>选取使 \\(\\text{CV}(\\lambda)\\) 最小的 \\(\\lambda_{\\min}\\)，或更保守地选 "one-SE rule"：最简模型中 CV 误差在 \\(\\lambda_{\\min}\\) 的一个标准误之内的最大 \\(\\lambda\\)。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 13.26 (Lasso 的变量选择一致性)</div>
                    <div class="env-body">
                        <p>设 \\(\\mathcal{S} = \\{j : \\beta_j \\neq 0\\}\\) 为真实支撑集。在<strong>irrepresentable condition</strong>（即 \\(\\|\\mathbf{X}_{\\mathcal{S}^c}^\\top \\mathbf{X}_{\\mathcal{S}} (\\mathbf{X}_{\\mathcal{S}}^\\top \\mathbf{X}_{\\mathcal{S}})^{-1} \\operatorname{sign}(\\boldsymbol{\\beta}_{\\mathcal{S}})\\|_\\infty < 1\\)）下，适当选取 \\(\\lambda\\) 时，Lasso 以概率趋于 1 恢复真实支撑 \\(\\mathcal{S}\\)（sign consistency）。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="coefficient-path-viz"></div>
            `,
            visualizations: [
                {
                    id: 'coefficient-path-viz',
                    title: 'Interactive: 系数收缩路径 (Ridge vs Lasso)',
                    description: '调整正则化强度 lambda 观察系数如何被收缩——注意 Lasso 产生稀疏解',
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
                    question: '证明 Ridge 回归的解为 \\(\\hat{\\boldsymbol{\\beta}}^{\\text{ridge}} = (\\mathbf{X}^\\top\\mathbf{X} + \\lambda\\mathbf{I})^{-1}\\mathbf{X}^\\top\\mathbf{y}\\)，并说明为什么 \\(\\lambda > 0\\) 保证了可逆性。',
                    hint: '对 Ridge 目标函数求导，利用 \\(\\mathbf{X}^\\top\\mathbf{X}\\) 半正定和 \\(\\lambda\\mathbf{I}\\) 正定的事实。',
                    solution: '目标为 \\(L = (\\mathbf{y} - \\mathbf{X}\\boldsymbol{\\beta})^\\top(\\mathbf{y} - \\mathbf{X}\\boldsymbol{\\beta}) + \\lambda\\boldsymbol{\\beta}^\\top\\boldsymbol{\\beta}\\)。对 \\(\\boldsymbol{\\beta}\\) 求导：\\(-2\\mathbf{X}^\\top(\\mathbf{y} - \\mathbf{X}\\boldsymbol{\\beta}) + 2\\lambda\\boldsymbol{\\beta} = 0\\)，即 \\((\\mathbf{X}^\\top\\mathbf{X} + \\lambda\\mathbf{I})\\boldsymbol{\\beta} = \\mathbf{X}^\\top\\mathbf{y}\\)。由于 \\(\\mathbf{X}^\\top\\mathbf{X}\\) 半正定，\\(\\mathbf{X}^\\top\\mathbf{X} + \\lambda\\mathbf{I}\\) 的最小特征值 \\(\\geq \\lambda > 0\\)，故矩阵正定可逆。'
                },
                {
                    question: '在正交设计 \\(\\mathbf{X}^\\top\\mathbf{X} = n\\mathbf{I}\\) 下，分别写出 Ridge 和 Lasso 对 OLS 估计 \\(\\hat{\\beta}_j^{\\text{OLS}}\\) 的收缩公式。',
                    hint: 'Ridge 对角化后每个分量独立。Lasso 在正交情形下有 soft-thresholding 闭式解。',
                    solution: 'Ridge: \\(\\hat{\\beta}_j^{\\text{ridge}} = \\frac{n}{n + \\lambda} \\hat{\\beta}_j^{\\text{OLS}}\\)（比例收缩）。Lasso: \\(\\hat{\\beta}_j^{\\text{lasso}} = \\text{sign}(\\hat{\\beta}_j^{\\text{OLS}}) \\max(|\\hat{\\beta}_j^{\\text{OLS}}| - \\lambda/n, 0)\\)（soft thresholding，小系数直接变为零）。'
                },
                {
                    question: '解释 Elastic Net 为什么在高度共线变量组的处理上优于 Lasso。',
                    hint: '考虑一组几乎相同的变量，Lasso 会如何选择？Elastic Net 的 \\(L_2\\) 部分起什么作用？',
                    solution: '当一组变量高度相关时，Lasso 的 \\(L_1\\) 惩罚在解路径上趋向于只选其中一个（因为 \\(L_1\\) 球的角点偏好坐标轴方向），导致选择不稳定——微小的数据扰动可能切换被选中的变量。Elastic Net 的 \\(L_2\\) 惩罚项为目标函数引入严格凸性，使得相关变量的系数估计趋于相近（grouping effect）。Zou and Hastie (2005) 证明：若 \\(|\\rho(x_i, x_j)| \\to 1\\)，则 \\(|\\hat{\\beta}_i^{\\text{EN}} - \\hat{\\beta}_j^{\\text{EN}}| \\to 0\\)。'
                }
            ]
        }
    ]
});

window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch12',
    number: 12,
    title: '线性回归',
    subtitle: 'Linear Regression',
    sections: [
        // ============================================================
        // Section 1: 简单线性回归模型
        // ============================================================
        {
            id: 'ch12-sec01',
            title: '简单线性回归模型',
            content: `
                <h2>简单线性回归模型</h2>

                <p>回归分析是统计学中最基本也是最重要的方法之一。给定响应变量 \\\\(Y\\\\) 与解释变量 \\\\(X\\\\)，我们希望建立一个定量描述 \\\\(Y\\\\) 随 \\\\(X\\\\) 变化关系的模型。简单线性回归假设这种关系在参数上是线性的。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 12.1 (简单线性回归模型)</div>
                    <div class="env-body">
                        <p>设 \\\\((X_1, Y_1), \\\\ldots, (X_n, Y_n)\\\\) 是 \\\\(n\\\\) 组观测值。<strong>简单线性回归模型</strong>假设：</p>
                        \\\\[Y_i = \\\\beta_0 + \\\\beta_1 X_i + \\\\varepsilon_i, \\\\quad i = 1, \\\\ldots, n\\\\]
                        <p>其中 \\\\(\\\\beta_0\\\\) 为截距 (intercept)，\\\\(\\\\beta_1\\\\) 为斜率 (slope)，\\\\(\\\\varepsilon_i\\\\) 为随机误差项，满足：</p>
                        <ol>
                            <li>\\\\(\\\\mathbb{E}[\\\\varepsilon_i] = 0\\\\)（零均值）</li>
                            <li>\\\\(\\\\operatorname{Var}(\\\\varepsilon_i) = \\\\sigma^2\\\\)（同方差性，homoscedasticity）</li>
                            <li>\\\\(\\\\operatorname{Cov}(\\\\varepsilon_i, \\\\varepsilon_j) = 0\\\\)（对 \\\\(i \\\\neq j\\\\)，误差不相关）</li>
                        </ol>
                        <p>在正态假设下，进一步要求 \\\\(\\\\varepsilon_i \\\\sim N(0, \\\\sigma^2)\\\\) 独立同分布。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>模型的几何含义非常直观：在散点图上，回归直线 \\\\(y = \\\\beta_0 + \\\\beta_1 x\\\\) 穿过数据"云"的中心。每个观测点 \\\\(Y_i\\\\) 是确定性部分 \\\\(\\\\beta_0 + \\\\beta_1 X_i\\\\) 加上随机扰动 \\\\(\\\\varepsilon_i\\\\) 的结果。回归的目标就是从含噪声的数据中恢复出这条"真实"直线。</p>
                    </div>
                </div>

                <h3>最小二乘法 (Ordinary Least Squares)</h3>

                <p>我们通过最小化残差平方和 (Residual Sum of Squares, RSS) 来估计参数：</p>
                \\\\[Q(\\\\beta_0, \\\\beta_1) = \\\\sum_{i=1}^{n} (Y_i - \\\\beta_0 - \\\\beta_1 X_i)^2\\\\]

                <div class="env-block theorem">
                    <div class="env-title">Theorem 12.2 (OLS 估计量)</div>
                    <div class="env-body">
                        <p>令 \\\\(\\\\bar{X} = \\\\frac{1}{n}\\\\sum_{i=1}^{n} X_i\\\\)，\\\\(\\\\bar{Y} = \\\\frac{1}{n}\\\\sum_{i=1}^{n} Y_i\\\\)，\\\\(S_{xx} = \\\\sum_{i=1}^{n}(X_i - \\\\bar{X})^2\\\\)，\\\\(S_{xy} = \\\\sum_{i=1}^{n}(X_i - \\\\bar{X})(Y_i - \\\\bar{Y})\\\\)。则 \\\\(Q(\\\\beta_0, \\\\beta_1)\\\\) 的最小值在以下点取得：</p>
                        \\\\[\\\\hat{\\\\beta}_1 = \\\\frac{S_{xy}}{S_{xx}} = \\\\frac{\\\\sum_{i=1}^{n}(X_i - \\\\bar{X})(Y_i - \\\\bar{Y})}{\\\\sum_{i=1}^{n}(X_i - \\\\bar{X})^2}\\\\]
                        \\\\[\\\\hat{\\\\beta}_0 = \\\\bar{Y} - \\\\hat{\\\\beta}_1 \\\\bar{X}\\\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>对 \\\\(Q\\\\) 关于 \\\\(\\\\beta_0, \\\\beta_1\\\\) 分别求偏导并令其为零：</p>
                        \\\\[\\\\frac{\\\\partial Q}{\\\\partial \\\\beta_0} = -2\\\\sum_{i=1}^{n}(Y_i - \\\\beta_0 - \\\\beta_1 X_i) = 0\\\\]
                        \\\\[\\\\frac{\\\\partial Q}{\\\\partial \\\\beta_1} = -2\\\\sum_{i=1}^{n} X_i(Y_i - \\\\beta_0 - \\\\beta_1 X_i) = 0\\\\]
                        <p>由第一个方程：\\\\(n\\\\beta_0 = \\\\sum Y_i - \\\\beta_1 \\\\sum X_i\\\\)，即 \\\\(\\\\hat{\\\\beta}_0 = \\\\bar{Y} - \\\\hat{\\\\beta}_1\\\\bar{X}\\\\)。</p>
                        <p>代入第二个方程并化简：</p>
                        \\\\[\\\\sum X_i Y_i - \\\\bar{Y}\\\\sum X_i - \\\\hat{\\\\beta}_1\\\\sum X_i^2 + \\\\hat{\\\\beta}_1 \\\\bar{X}\\\\sum X_i = 0\\\\]
                        <p>利用 \\\\(\\\\sum(X_i - \\\\bar{X})(Y_i - \\\\bar{Y}) = \\\\sum X_i Y_i - n\\\\bar{X}\\\\bar{Y}\\\\) 和 \\\\(\\\\sum(X_i - \\\\bar{X})^2 = \\\\sum X_i^2 - n\\\\bar{X}^2\\\\)，得到 \\\\(\\\\hat{\\\\beta}_1 = S_{xy}/S_{xx}\\\\)。</p>
                        <p>Hessian 矩阵 \\\\(H = 2\\\\begin{pmatrix} n & \\\\sum X_i \\\\\\\\ \\\\sum X_i & \\\\sum X_i^2 \\\\end{pmatrix}\\\\) 正定（当 \\\\(X_i\\\\) 不全相同时），故为极小值。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>注意 \\\\(\\\\hat{\\\\beta}_1\\\\) 可以写成 \\\\(Y_i\\\\) 的线性组合：\\\\(\\\\hat{\\\\beta}_1 = \\\\sum_{i=1}^{n} c_i Y_i\\\\)，其中 \\\\(c_i = (X_i - \\\\bar{X})/S_{xx}\\\\)。这一形式对后续分析估计量性质至关重要。同时，回归直线必经过样本中心点 \\\\((\\\\bar{X}, \\\\bar{Y})\\\\)。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="scatter-regression-viz"></div>

                <div class="env-block example">
                    <div class="env-title">Example 12.3</div>
                    <div class="env-body">
                        <p>设有 5 组观测 \\\\((X_i, Y_i)\\\\)：\\\\((1,2.1),\\; (2,3.9),\\; (3,6.2),\\; (4,7.8),\\; (5,10.1)\\\\)。</p>
                        <p>计算：\\\\(\\\\bar{X}=3, \\\\bar{Y}=6.02, S_{xx}=10, S_{xy}=19.9\\\\)，故 \\\\(\\\\hat{\\\\beta}_1 = 1.99\\\\)，\\\\(\\\\hat{\\\\beta}_0 = 6.02 - 1.99 \\\\times 3 = 0.05\\\\)。</p>
                        <p>回归方程：\\\\(\\\\hat{Y} = 0.05 + 1.99X\\\\)。</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'scatter-regression-viz',
                    title: 'Interactive: 拖动数据点观察回归线变化',
                    description: '拖动散点查看最小二乘回归线如何实时更新，残差用虚线显示',
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

                        VizEngine.createButton(controls, '重置数据', function() {
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
                    question: '证明 OLS 估计的回归直线必经过样本均值点 \\\\((\\\\bar{X}, \\\\bar{Y})\\\\)。',
                    hint: '将 \\\\(x = \\\\bar{X}\\\\) 代入 \\\\(\\\\hat{Y} = \\\\hat{\\\\beta}_0 + \\\\hat{\\\\beta}_1 x\\\\)，利用 \\\\(\\\\hat{\\\\beta}_0 = \\\\bar{Y} - \\\\hat{\\\\beta}_1\\\\bar{X}\\\\)。',
                    solution: '\\\\(\\\\hat{Y}|_{x=\\\\bar{X}} = \\\\hat{\\\\beta}_0 + \\\\hat{\\\\beta}_1\\\\bar{X} = (\\\\bar{Y} - \\\\hat{\\\\beta}_1\\\\bar{X}) + \\\\hat{\\\\beta}_1\\\\bar{X} = \\\\bar{Y}\\\\)。因此回归直线经过 \\\\((\\\\bar{X}, \\\\bar{Y})\\\\)。'
                },
                {
                    question: '设 \\\\(Y_i = \\\\beta_0 + \\\\beta_1 X_i + \\\\varepsilon_i\\\\)。证明残差 \\\\(e_i = Y_i - \\\\hat{Y}_i\\\\) 满足 \\\\(\\\\sum_{i=1}^{n} e_i = 0\\\\) 和 \\\\(\\\\sum_{i=1}^{n} X_i e_i = 0\\\\)。',
                    hint: '这两个条件恰好是正规方程 (normal equations) 的直接推论。',
                    solution: '正规方程为 \\\\(\\\\sum(Y_i - \\\\hat{\\\\beta}_0 - \\\\hat{\\\\beta}_1 X_i)=0\\\\) 和 \\\\(\\\\sum X_i(Y_i - \\\\hat{\\\\beta}_0 - \\\\hat{\\\\beta}_1 X_i)=0\\\\)。由于 \\\\(e_i = Y_i - \\\\hat{\\\\beta}_0 - \\\\hat{\\\\beta}_1 X_i\\\\)，直接得到 \\\\(\\\\sum e_i = 0\\\\) 和 \\\\(\\\\sum X_i e_i = 0\\\\)。几何意义：残差向量 \\\\(\\\\mathbf{e}\\\\) 与 \\\\(\\\\mathbf{1}\\\\) 和 \\\\(\\\\mathbf{X}\\\\) 正交。'
                },
                {
                    question: '在简单线性回归中，若将所有 \\\\(X_i\\\\) 替换为 \\\\(X_i^* = a + bX_i\\\\)（\\\\(b \\\\neq 0\\\\)），新的 OLS 估计 \\\\(\\\\hat{\\\\beta}_1^*\\\\) 与原来的 \\\\(\\\\hat{\\\\beta}_1\\\\) 有什么关系？',
                    hint: '计算 \\\\(S_{x^*y}\\\\) 和 \\\\(S_{x^*x^*}\\\\) 关于 \\\\(S_{xy}\\\\) 和 \\\\(S_{xx}\\\\) 的表达式。',
                    solution: '\\\\(\\\\bar{X}^* = a + b\\\\bar{X}\\\\)，故 \\\\(X_i^* - \\\\bar{X}^* = b(X_i - \\\\bar{X})\\\\)。因此 \\\\(S_{x^*x^*} = b^2 S_{xx}\\\\)，\\\\(S_{x^*y} = b S_{xy}\\\\)，从而 \\\\(\\\\hat{\\\\beta}_1^* = S_{x^*y}/S_{x^*x^*} = \\\\hat{\\\\beta}_1/b\\\\)。截距相应变为 \\\\(\\\\hat{\\\\beta}_0^* = \\\\bar{Y} - \\\\hat{\\\\beta}_1^* (a + b\\\\bar{X}) = \\\\hat{\\\\beta}_0 - a\\\\hat{\\\\beta}_1/b\\\\)。拟合值 \\\\(\\\\hat{Y}_i\\\\) 不变。'
                }
            ]
        },

        // ============================================================
        // Section 2: 最小二乘估计的性质
        // ============================================================
        {
            id: 'ch12-sec02',
            title: '最小二乘估计的性质',
            content: `
                <h2>最小二乘估计的性质</h2>

                <p>OLS 估计量 \\\\(\\\\hat{\\\\beta}_0, \\\\hat{\\\\beta}_1\\\\) 不仅提供了参数的自然估计，还在一大类线性无偏估计中具有最优性。这由经典的 Gauss-Markov 定理刻画。</p>

                <h3>OLS 估计量的期望与方差</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 12.4 (OLS 估计量的分布)</div>
                    <div class="env-body">
                        <p>在简单线性回归模型中（假设 \\\\(X_i\\\\) 为固定的，非随机的设计点），OLS 估计量满足：</p>
                        <ol>
                            <li>\\\\(\\\\mathbb{E}[\\\\hat{\\\\beta}_1] = \\\\beta_1\\\\)，\\\\(\\\\mathbb{E}[\\\\hat{\\\\beta}_0] = \\\\beta_0\\\\)（无偏性）</li>
                            <li>\\\\(\\\\operatorname{Var}(\\\\hat{\\\\beta}_1) = \\\\dfrac{\\\\sigma^2}{S_{xx}}\\\\)</li>
                            <li>\\\\(\\\\operatorname{Var}(\\\\hat{\\\\beta}_0) = \\\\sigma^2\\\\left(\\\\dfrac{1}{n} + \\\\dfrac{\\\\bar{X}^2}{S_{xx}}\\\\right)\\\\)</li>
                            <li>\\\\(\\\\operatorname{Cov}(\\\\hat{\\\\beta}_0, \\\\hat{\\\\beta}_1) = -\\\\dfrac{\\\\sigma^2 \\\\bar{X}}{S_{xx}}\\\\)</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (\\\\(\\\\hat{\\\\beta}_1\\\\) 的部分)</div>
                    <div class="env-body">
                        <p>由于 \\\\(\\\\hat{\\\\beta}_1 = \\\\sum c_i Y_i\\\\)，其中 \\\\(c_i = (X_i - \\\\bar{X})/S_{xx}\\\\)，注意到 \\\\(\\\\sum c_i = 0\\\\) 和 \\\\(\\\\sum c_i X_i = 1\\\\)。</p>
                        <p><strong>无偏性</strong>：\\\\(\\\\mathbb{E}[\\\\hat{\\\\beta}_1] = \\\\sum c_i \\\\mathbb{E}[Y_i] = \\\\sum c_i(\\\\beta_0 + \\\\beta_1 X_i) = \\\\beta_0 \\\\cdot 0 + \\\\beta_1 \\\\cdot 1 = \\\\beta_1\\\\)。</p>
                        <p><strong>方差</strong>：由于 \\\\(Y_i\\\\) 不相关且等方差 \\\\(\\\\sigma^2\\\\)，</p>
                        \\\\[\\\\operatorname{Var}(\\\\hat{\\\\beta}_1) = \\\\sum c_i^2 \\\\sigma^2 = \\\\sigma^2 \\\\sum \\\\frac{(X_i - \\\\bar{X})^2}{S_{xx}^2} = \\\\frac{\\\\sigma^2}{S_{xx}}\\\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h3>Gauss-Markov 定理</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 12.5 (Gauss-Markov)</div>
                    <div class="env-body">
                        <p>在简单线性回归模型的三个基本假设下（零均值、同方差、不相关），OLS 估计量 \\\\(\\\\hat{\\\\beta}_0\\\\) 和 \\\\(\\\\hat{\\\\beta}_1\\\\) 是<strong>最优线性无偏估计量</strong> (BLUE: Best Linear Unbiased Estimator)。即对任何形如 \\\\(\\\\tilde{\\\\beta}_1 = \\\\sum a_i Y_i\\\\) 的线性无偏估计，都有：</p>
                        \\\\[\\\\operatorname{Var}(\\\\hat{\\\\beta}_1) \\\\leq \\\\operatorname{Var}(\\\\tilde{\\\\beta}_1)\\\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>设 \\\\(\\\\tilde{\\\\beta}_1 = \\\\sum a_i Y_i\\\\) 是 \\\\(\\\\beta_1\\\\) 的线性无偏估计。令 \\\\(d_i = a_i - c_i\\\\)，其中 \\\\(c_i = (X_i - \\\\bar{X})/S_{xx}\\\\)。</p>
                        <p>无偏性要求：\\\\(\\\\sum a_i = 0\\\\) 且 \\\\(\\\\sum a_i X_i = 1\\\\)。由于 \\\\(c_i\\\\) 也满足这些条件，故 \\\\(\\\\sum d_i = 0\\\\)，\\\\(\\\\sum d_i X_i = 0\\\\)。</p>
                        <p>后者意味着 \\\\(\\\\sum d_i(X_i - \\\\bar{X}) = 0\\\\)，即 \\\\(\\\\sum d_i c_i S_{xx} = 0\\\\)，从而 \\\\(\\\\sum c_i d_i = 0\\\\)。</p>
                        \\\\[\\\\operatorname{Var}(\\\\tilde{\\\\beta}_1) = \\\\sigma^2 \\\\sum a_i^2 = \\\\sigma^2 \\\\sum (c_i + d_i)^2 = \\\\sigma^2\\\\left(\\\\sum c_i^2 + 2\\\\sum c_i d_i + \\\\sum d_i^2\\\\right)\\\\]
                        \\\\[= \\\\sigma^2\\\\sum c_i^2 + \\\\sigma^2\\\\sum d_i^2 = \\\\operatorname{Var}(\\\\hat{\\\\beta}_1) + \\\\sigma^2\\\\sum d_i^2 \\\\geq \\\\operatorname{Var}(\\\\hat{\\\\beta}_1)\\\\]
                        <p>等号当且仅当 \\\\(d_i = 0\\\\) 对所有 \\\\(i\\\\) 成立，即 \\\\(\\\\tilde{\\\\beta}_1 = \\\\hat{\\\\beta}_1\\\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Gauss-Markov 定理<strong>不</strong>假设正态性。它仅依赖一阶和二阶矩条件。但同时它也只保证在线性无偏估计类中最优——存在非线性或有偏估计（如岭回归, LASSO）可能有更小的均方误差。</p>
                    </div>
                </div>

                <h3>方差的无偏估计</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 12.6</div>
                    <div class="env-body">
                        <p>令 \\\\(\\\\hat{Y}_i = \\\\hat{\\\\beta}_0 + \\\\hat{\\\\beta}_1 X_i\\\\) 为拟合值，\\\\(e_i = Y_i - \\\\hat{Y}_i\\\\) 为残差。则</p>
                        \\\\[s^2 = \\\\frac{\\\\text{RSS}}{n-2} = \\\\frac{\\\\sum_{i=1}^{n} e_i^2}{n-2}\\\\]
                        <p>是 \\\\(\\\\sigma^2\\\\) 的无偏估计量，即 \\\\(\\\\mathbb{E}[s^2] = \\\\sigma^2\\\\)。分母中的 \\\\(n-2\\\\) 反映了估计两个参数 \\\\(\\\\beta_0, \\\\beta_1\\\\) 所消耗的自由度。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ols-comparison-viz"></div>
            `,
            visualizations: [
                {
                    id: 'ols-comparison-viz',
                    title: 'Interactive: OLS vs 其他线性估计量',
                    description: 'Monte Carlo 模拟比较 OLS 与其他线性无偏估计量的方差，验证 Gauss-Markov 定理',
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

                                // Alternative linear unbiased (use endpoint difference)
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
                            viz.screenText('分组均值法', 420, 25, viz.colors.red, 14, 'center');
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

                        VizEngine.createButton(controls, '重新模拟', function() {
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
                    question: '验证 \\\\(\\\\operatorname{Var}(\\\\hat{\\\\beta}_0) = \\\\sigma^2\\\\left(\\\\frac{1}{n} + \\\\frac{\\\\bar{X}^2}{S_{xx}}\\\\right)\\\\)。何时 \\\\(\\\\hat{\\\\beta}_0\\\\) 的方差最小？',
                    hint: '利用 \\\\(\\\\hat{\\\\beta}_0 = \\\\bar{Y} - \\\\hat{\\\\beta}_1\\\\bar{X}\\\\) 以及 \\\\(\\\\bar{Y}\\\\) 与 \\\\(\\\\hat{\\\\beta}_1\\\\) 的协方差。',
                    solution: '\\\\(\\\\operatorname{Var}(\\\\hat{\\\\beta}_0) = \\\\operatorname{Var}(\\\\bar{Y}) + \\\\bar{X}^2\\\\operatorname{Var}(\\\\hat{\\\\beta}_1) - 2\\\\bar{X}\\\\operatorname{Cov}(\\\\bar{Y}, \\\\hat{\\\\beta}_1)\\\\)。由于 \\\\(\\\\operatorname{Cov}(\\\\bar{Y}, \\\\hat{\\\\beta}_1) = \\\\frac{1}{n}\\\\sum c_i \\\\sigma^2 = 0\\\\)，故 \\\\(\\\\operatorname{Var}(\\\\hat{\\\\beta}_0) = \\\\sigma^2/n + \\\\bar{X}^2\\\\sigma^2/S_{xx}\\\\)。当 \\\\(\\\\bar{X} = 0\\\\) 时方差最小，说明将数据中心化后截距估计最精确。'
                },
                {
                    question: '证明 \\\\(\\\\text{RSS}/\\\\sigma^2\\\\) 在正态假设下服从 \\\\(\\\\chi^2(n-2)\\\\) 分布，并说明 \\\\(\\\\text{RSS}\\\\) 与 \\\\(\\\\hat{\\\\beta}_1\\\\) 独立。',
                    hint: '用投影矩阵 \\\\(H = X(X^TX)^{-1}X^T\\\\) 的性质。\\\\(\\\\text{RSS} = \\\\mathbf{Y}^T(I-H)\\\\mathbf{Y}\\\\)，利用 \\\\(I-H\\\\) 是幂等矩阵且秩为 \\\\(n-2\\\\)。',
                    solution: '设 \\\\(\\\\mathbf{Y} \\\\sim N(X\\\\boldsymbol{\\\\beta}, \\\\sigma^2 I)\\\\)。令 \\\\(H = X(X^TX)^{-1}X^T\\\\) 为帽子矩阵。则 \\\\(\\\\hat{\\\\mathbf{Y}} = H\\\\mathbf{Y}\\\\)，\\\\(\\\\mathbf{e} = (I-H)\\\\mathbf{Y}\\\\)。由于 \\\\(I-H\\\\) 幂等且秩 \\\\(n-2\\\\)，由 Cochran 定理，\\\\(\\\\mathbf{e}^T\\\\mathbf{e}/\\\\sigma^2 \\\\sim \\\\chi^2(n-2)\\\\)。又 \\\\(\\\\hat{\\\\boldsymbol{\\\\beta}} = (X^TX)^{-1}X^T\\\\mathbf{Y}\\\\)，其与 \\\\(\\\\mathbf{e}\\\\) 的协方差矩阵为 \\\\((X^TX)^{-1}X^T \\\\cdot \\\\sigma^2(I-H) = 0\\\\)，正态下不相关即独立。'
                }
            ]
        },

        // ============================================================
        // Section 3: 推断与假设检验
        // ============================================================
        {
            id: 'ch12-sec03',
            title: '推断与假设检验',
            content: `
                <h2>推断与假设检验</h2>

                <p>在正态误差假设下，OLS 估计量有精确的抽样分布，使得我们可以对回归系数进行严格的统计推断。</p>

                <h3>正态假设下的精确分布</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 12.7</div>
                    <div class="env-body">
                        <p>若 \\\\(\\\\varepsilon_i \\\\overset{\\\\text{iid}}{\\\\sim} N(0, \\\\sigma^2)\\\\)，则：</p>
                        <ol>
                            <li>\\\\(\\\\hat{\\\\beta}_1 \\\\sim N\\\\!\\\\left(\\\\beta_1,\\; \\\\dfrac{\\\\sigma^2}{S_{xx}}\\\\right)\\\\)</li>
                            <li>\\\\(\\\\hat{\\\\beta}_0 \\\\sim N\\\\!\\\\left(\\\\beta_0,\\; \\\\sigma^2\\\\left(\\\\dfrac{1}{n} + \\\\dfrac{\\\\bar{X}^2}{S_{xx}}\\\\right)\\\\right)\\\\)</li>
                            <li>\\\\(\\\\dfrac{(n-2)s^2}{\\\\sigma^2} \\\\sim \\\\chi^2(n-2)\\\\)，且 \\\\(s^2\\\\) 与 \\\\((\\\\hat{\\\\beta}_0, \\\\hat{\\\\beta}_1)\\\\) 独立</li>
                        </ol>
                    </div>
                </div>

                <h3>斜率的 t-检验</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 12.8 (斜率的 t-统计量)</div>
                    <div class="env-body">
                        <p>检验 \\\\(H_0: \\\\beta_1 = \\\\beta_{1,0}\\\\) vs \\\\(H_1: \\\\beta_1 \\\\neq \\\\beta_{1,0}\\\\) 的 t-统计量为：</p>
                        \\\\[T = \\\\frac{\\\\hat{\\\\beta}_1 - \\\\beta_{1,0}}{\\\\text{SE}(\\\\hat{\\\\beta}_1)} = \\\\frac{\\\\hat{\\\\beta}_1 - \\\\beta_{1,0}}{s / \\\\sqrt{S_{xx}}}\\\\]
                        <p>在 \\\\(H_0\\\\) 下，\\\\(T \\\\sim t(n-2)\\\\)。最常见的情形是 \\\\(\\\\beta_{1,0} = 0\\\\)，即检验 \\\\(X\\\\) 与 \\\\(Y\\\\) 是否存在线性关系。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 12.9</div>
                    <div class="env-body">
                        <p>在 Example 12.3 的数据中（\\\\(n=5\\\\)），我们有 \\\\(\\\\hat{\\\\beta}_1 = 1.99\\\\)，\\\\(S_{xx} = 10\\\\)。计算 \\\\(\\\\text{RSS} = \\\\sum(Y_i - \\\\hat{Y}_i)^2 = 0.088\\\\)，\\\\(s^2 = 0.088/3 = 0.0293\\\\)。</p>
                        <p>检验 \\\\(H_0: \\\\beta_1 = 0\\\\)：\\\\(T = 1.99/(\\\\sqrt{0.0293}/\\\\sqrt{10}) = 1.99/0.0541 = 36.8\\\\)。</p>
                        <p>与 \\\\(t(3)\\\\) 的临界值 \\\\(t_{0.025,3} = 3.182\\\\) 比较，\\\\(|T| \\\\gg 3.182\\\\)，极显著拒绝 \\\\(H_0\\\\)。</p>
                    </div>
                </div>

                <h3>斜率的置信区间</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 12.10 (\\\\(\\\\beta_1\\\\) 的置信区间)</div>
                    <div class="env-body">
                        <p>\\\\(\\\\beta_1\\\\) 的 \\\\(100(1-\\\\alpha)\\\\%\\\\) 置信区间为：</p>
                        \\\\[\\\\hat{\\\\beta}_1 \\\\pm t_{\\\\alpha/2,\\, n-2} \\\\cdot \\\\frac{s}{\\\\sqrt{S_{xx}}}\\\\]
                        <p>类似地，\\\\(\\\\beta_0\\\\) 的置信区间为 \\\\(\\\\hat{\\\\beta}_0 \\\\pm t_{\\\\alpha/2,\\, n-2} \\\\cdot s\\\\sqrt{1/n + \\\\bar{X}^2/S_{xx}}\\\\)。</p>
                    </div>
                </div>

                <h3>整体回归的 F-检验</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 12.11 (ANOVA 分解与 F-检验)</div>
                    <div class="env-body">
                        <p>定义总变差分解：</p>
                        \\\\[\\\\underbrace{\\\\sum_{i=1}^{n}(Y_i - \\\\bar{Y})^2}_{\\\\text{SST}} = \\\\underbrace{\\\\sum_{i=1}^{n}(\\\\hat{Y}_i - \\\\bar{Y})^2}_{\\\\text{SSR}} + \\\\underbrace{\\\\sum_{i=1}^{n}(Y_i - \\\\hat{Y}_i)^2}_{\\\\text{RSS}}\\\\]
                        <p>检验 \\\\(H_0: \\\\beta_1 = 0\\\\) 的 F-统计量为：</p>
                        \\\\[F = \\\\frac{\\\\text{SSR}/1}{\\\\text{RSS}/(n-2)} = \\\\frac{\\\\text{MSR}}{\\\\text{MSE}}\\\\]
                        <p>在 \\\\(H_0\\\\) 下 \\\\(F \\\\sim F(1, n-2)\\\\)。在简单线性回归中，\\\\(F = T^2\\\\)，其中 \\\\(T\\\\) 是斜率的 t-统计量。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>F-检验的逻辑：如果 \\\\(\\\\beta_1 = 0\\\\)（即 \\\\(X\\\\) 对 \\\\(Y\\\\) 没有线性效应），那么模型解释的变异 SSR 应该很小，F 值接近 0。如果 \\\\(\\\\beta_1 \\\\neq 0\\\\)，SSR 会比纯噪声预期的大得多，F 值变大。F 越大，拒绝零假设的证据越强。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="t-test-viz"></div>
            `,
            visualizations: [
                {
                    id: 't-test-viz',
                    title: 'Interactive: 斜率 t-检验的抽样分布',
                    description: '模拟 t-统计量在 H0 和 H1 下的分布，调节 beta1 观察检验功效变化',
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
                            // Use 1.96 as approximation or exact for large df
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

                        VizEngine.createButton(controls, '重新模拟', function() {
                            tStats = runSimulation();
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '在简单线性回归中，证明 F-统计量等于 t-统计量的平方：\\\\(F = T^2\\\\)。',
                    hint: '将 SSR 用 \\\\(\\\\hat{\\\\beta}_1\\\\) 表示：\\\\(\\\\text{SSR} = \\\\hat{\\\\beta}_1^2 S_{xx}\\\\)。',
                    solution: '\\\\(\\\\text{SSR} = \\\\sum(\\\\hat{Y}_i - \\\\bar{Y})^2 = \\\\hat{\\\\beta}_1^2 \\\\sum(X_i - \\\\bar{X})^2 = \\\\hat{\\\\beta}_1^2 S_{xx}\\\\)。因此 \\\\(F = \\\\hat{\\\\beta}_1^2 S_{xx} / s^2 = (\\\\hat{\\\\beta}_1 / (s/\\\\sqrt{S_{xx}}))^2 = T^2\\\\)。这也解释了为什么在简单线性回归中 t-检验和 F-检验是等价的。'
                },
                {
                    question: '构造 \\\\(\\\\beta_1\\\\) 的 95% 置信区间。给定 \\\\(n=20\\\\)，\\\\(\\\\hat{\\\\beta}_1=2.5\\\\)，\\\\(S_{xx}=50\\\\)，\\\\(s^2=4\\\\)。',
                    hint: '使用公式 \\\\(\\\\hat{\\\\beta}_1 \\\\pm t_{0.025,18} \\\\cdot s/\\\\sqrt{S_{xx}}\\\\)，查表得 \\\\(t_{0.025,18} \\\\approx 2.101\\\\)。',
                    solution: '\\\\(\\\\text{SE}(\\\\hat{\\\\beta}_1) = s/\\\\sqrt{S_{xx}} = 2/\\\\sqrt{50} = 0.2828\\\\)。置信区间为 \\\\(2.5 \\\\pm 2.101 \\\\times 0.2828 = 2.5 \\\\pm 0.594 = [1.906, 3.094]\\\\)。由于 0 不在区间内，在 5% 水平下拒绝 \\\\(H_0:\\\\beta_1=0\\\\)。'
                },
                {
                    question: '如果样本量 \\\\(n\\\\) 固定，增大 \\\\(S_{xx}\\\\)（即增大 \\\\(X_i\\\\) 的离散程度）对 \\\\(\\\\hat{\\\\beta}_1\\\\) 的推断有何影响？在实验设计中有何指导意义？',
                    hint: '考察 \\\\(\\\\operatorname{Var}(\\\\hat{\\\\beta}_1)\\\\) 和 t-统计量作为 \\\\(S_{xx}\\\\) 的函数。',
                    solution: '\\\\(\\\\operatorname{Var}(\\\\hat{\\\\beta}_1) = \\\\sigma^2/S_{xx}\\\\) 随 \\\\(S_{xx}\\\\) 增大而减小。因此 t-统计量 \\\\(|T| = |\\\\hat{\\\\beta}_1|\\\\sqrt{S_{xx}}/s\\\\) 增大，置信区间变窄，检验功效增大。实验设计启示：应尽量让设计点 \\\\(X_i\\\\) 分散（例如选取 \\\\(X\\\\) 取值范围的两端），以获得最精确的斜率估计。但需权衡：如果线性假设在极端区域不成立，过度外推可能导致模型失效。'
                }
            ]
        },

        // ============================================================
        // Section 4: 残差分析与模型诊断
        // ============================================================
        {
            id: 'ch12-sec04',
            title: '残差分析与模型诊断',
            content: `
                <h2>残差分析与模型诊断</h2>

                <p>回归模型的有效性取决于其假设是否合理。残差分析是检验模型假设的主要工具。通过考察残差的图形模式，我们可以发现非线性、异方差、相关性和异常点等问题。</p>

                <h3>残差与标准化残差</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 12.12 (各类残差)</div>
                    <div class="env-body">
                        <p>设帽子矩阵为 \\\\(H = X(X^TX)^{-1}X^T\\\\)，对角元素为 \\\\(h_{ii}\\\\)（杠杆值, leverage）。</p>
                        <ul>
                            <li><strong>普通残差</strong>：\\\\(e_i = Y_i - \\\\hat{Y}_i\\\\)</li>
                            <li><strong>标准化残差</strong>：\\\\(r_i = \\\\dfrac{e_i}{s\\\\sqrt{1-h_{ii}}}\\\\)，其中 \\\\(\\\\operatorname{Var}(e_i) = \\\\sigma^2(1-h_{ii})\\\\)</li>
                            <li><strong>学生化残差</strong> (studentized deleted residual)：\\\\(t_i = \\\\dfrac{e_i}{s_{(i)}\\\\sqrt{1-h_{ii}}}\\\\)，其中 \\\\(s_{(i)}\\\\) 是删除第 \\\\(i\\\\) 个观测后的标准误估计。在 \\\\(H_0\\\\) 下 \\\\(t_i \\\\sim t(n-3)\\\\)</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 12.13 (杠杆值的性质)</div>
                    <div class="env-body">
                        <p>在简单线性回归中，杠杆值为：</p>
                        \\\\[h_{ii} = \\\\frac{1}{n} + \\\\frac{(X_i - \\\\bar{X})^2}{S_{xx}}\\\\]
                        <p>满足 \\\\(1/n \\\\leq h_{ii} \\\\leq 1\\\\) 且 \\\\(\\\\sum_{i=1}^n h_{ii} = 2\\\\)（等于参数个数）。\\\\(X_i\\\\) 离均值越远，其杠杆值越大，对回归线的影响力也越强。</p>
                    </div>
                </div>

                <h3>决定系数 \\\\(R^2\\\\)</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 12.14 (决定系数)</div>
                    <div class="env-body">
                        <p><strong>决定系数</strong> (coefficient of determination) 定义为：</p>
                        \\\\[R^2 = \\\\frac{\\\\text{SSR}}{\\\\text{SST}} = 1 - \\\\frac{\\\\text{RSS}}{\\\\text{SST}} = 1 - \\\\frac{\\\\sum e_i^2}{\\\\sum(Y_i - \\\\bar{Y})^2}\\\\]
                        <p>\\\\(R^2 \\\\in [0, 1]\\\\) 度量了模型解释的变异占总变异的比例。在简单线性回归中 \\\\(R^2 = r_{XY}^2\\\\)，即样本相关系数的平方。</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>\\\\(R^2\\\\) 高不等于模型正确。Anscombe 四重奏 (Anscombe's quartet) 经典地说明了：完全不同的数据模式可以产生几乎相同的 \\\\(R^2\\\\) 和回归方程。因此，残差图的视觉检查不可或缺。此外，\\\\(R^2\\\\) 会随着添加变量而单调增加，即使新变量无意义，所以多元回归中应使用调整后的 \\\\(R^2_{\\\\text{adj}} = 1 - \\\\frac{\\\\text{RSS}/(n-p)}{\\\\text{SST}/(n-1)}\\\\)。</p>
                    </div>
                </div>

                <h3>诊断图</h3>

                <p>典型的四面板残差诊断图包括：</p>
                <ol>
                    <li><strong>残差 vs 拟合值</strong>：检查线性和同方差性，理想下无系统模式</li>
                    <li><strong>正态 Q-Q 图</strong>：检查残差的正态性</li>
                    <li><strong>Scale-Location 图</strong>：\\\\(\\\\sqrt{|r_i|}\\\\) vs \\\\(\\\\hat{Y}_i\\\\)，检查方差齐性</li>
                    <li><strong>残差 vs 杠杆值</strong>：识别高影响点（高杠杆 + 大残差）</li>
                </ol>

                <div class="env-block definition">
                    <div class="env-title">Definition 12.15 (Cook 距离)</div>
                    <div class="env-body">
                        <p>Cook 距离度量删除第 \\\\(i\\\\) 个观测对所有拟合值的综合影响：</p>
                        \\\\[D_i = \\\\frac{(\\\\hat{\\\\mathbf{Y}} - \\\\hat{\\\\mathbf{Y}}_{(i)})^T(\\\\hat{\\\\mathbf{Y}} - \\\\hat{\\\\mathbf{Y}}_{(i)})}{p \\\\cdot s^2} = \\\\frac{r_i^2}{p} \\\\cdot \\\\frac{h_{ii}}{1-h_{ii}}\\\\]
                        <p>其中 \\\\(p\\\\) 为参数个数。经验法则：\\\\(D_i > 1\\\\) 或 \\\\(D_i > 4/n\\\\) 提示该点为强影响点。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="residual-diagnostics-viz"></div>
            `,
            visualizations: [
                {
                    id: 'residual-diagnostics-viz',
                    title: 'Interactive: 四面板残差诊断图',
                    description: '生成随机回归数据并查看四种诊断图，可选择不同数据模式',
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

                        VizEngine.createButton(controls, '正常数据', function() {
                            dataMode = 'normal'; data = generateData(); fit = fitOLS(data.xs, data.ys); draw();
                        });
                        VizEngine.createButton(controls, '非线性', function() {
                            dataMode = 'nonlinear'; data = generateData(); fit = fitOLS(data.xs, data.ys); draw();
                        });
                        VizEngine.createButton(controls, '异方差', function() {
                            dataMode = 'heteroscedastic'; data = generateData(); fit = fitOLS(data.xs, data.ys); draw();
                        });
                        VizEngine.createButton(controls, '离群值', function() {
                            dataMode = 'outlier'; data = generateData(); fit = fitOLS(data.xs, data.ys); draw();
                        });
                        VizEngine.createButton(controls, '重新生成', function() {
                            data = generateData(); fit = fitOLS(data.xs, data.ys); draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '证明在简单线性回归中，\\\\(R^2 = r_{XY}^2\\\\)，即决定系数等于 Pearson 相关系数的平方。',
                    hint: '将 SSR 和 SST 用 \\\\(S_{xx}, S_{xy}, S_{yy}\\\\) 表示。',
                    solution: '\\\\(\\\\text{SSR} = \\\\hat{\\\\beta}_1^2 S_{xx} = S_{xy}^2/S_{xx}\\\\)，\\\\(\\\\text{SST} = S_{yy}\\\\)。因此 \\\\(R^2 = \\\\text{SSR}/\\\\text{SST} = S_{xy}^2/(S_{xx} \\\\cdot S_{yy}) = r_{XY}^2\\\\)。其中 \\\\(r_{XY} = S_{xy}/\\\\sqrt{S_{xx} S_{yy}}\\\\) 是样本 Pearson 相关系数。'
                },
                {
                    question: '一组数据的残差 vs 拟合值图呈现"喇叭形"（左窄右宽）。这意味着什么？应如何处理？',
                    hint: '考虑方差齐性假设的违背以及可能的变换方法。',
                    solution: '喇叭形残差图表明存在异方差 (heteroscedasticity)：方差随拟合值增大而增大，违背了 \\\\(\\\\operatorname{Var}(\\\\varepsilon_i) = \\\\sigma^2\\\\) 的假设。处理方法包括：(1) 对响应变量取对数或 Box-Cox 变换以稳定方差；(2) 使用加权最小二乘 (WLS)，赋予方差较大的观测较小的权重；(3) 使用 Huber-White sandwich 估计获得异方差稳健标准误。'
                },
                {
                    question: '证明 \\\\(\\\\sum_{i=1}^n h_{ii} = p\\\\)（参数个数），并解释为什么 \\\\(h_{ii}\\\\) 被称为"杠杆值"。',
                    hint: '利用 \\\\(\\\\operatorname{tr}(H) = \\\\operatorname{tr}(X(X^TX)^{-1}X^T)\\\\) 和迹的轮换性质。对于"杠杆"的解释，考察 \\\\(\\\\hat{Y}_i\\\\) 对 \\\\(Y_i\\\\) 的敏感度。',
                    solution: '\\\\(\\\\sum h_{ii} = \\\\operatorname{tr}(H) = \\\\operatorname{tr}(X(X^TX)^{-1}X^T) = \\\\operatorname{tr}((X^TX)^{-1}X^TX) = \\\\operatorname{tr}(I_p) = p\\\\)。杠杆值的命名来自 \\\\(\\\\partial \\\\hat{Y}_i / \\\\partial Y_i = h_{ii}\\\\)：改变第 \\\\(i\\\\) 个响应值一个单位，拟合值改变 \\\\(h_{ii}\\\\) 个单位。当 \\\\(h_{ii}\\\\) 接近 1 时，该观测几乎完全"杠杆"了拟合值，即它对回归面施加了极大的影响力。'
                }
            ]
        },

        // ============================================================
        // Section 5: 预测与置信带
        // ============================================================
        {
            id: 'ch12-sec05',
            title: '预测与置信带',
            content: `
                <h2>预测与置信带</h2>

                <p>回归分析的重要应用之一是预测。给定一个新的 \\\\(X\\\\) 值 \\\\(x_0\\\\)，我们需要对 \\\\(\\\\mathbb{E}[Y|X=x_0]\\\\) 或新观测 \\\\(Y_0\\\\) 给出区间估计。两者的不确定性来源不同，导致区间宽度有本质差异。</p>

                <h3>均值响应的置信区间</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 12.16 (均值响应的 CI)</div>
                    <div class="env-body">
                        <p>对给定 \\\\(x_0\\\\)，\\\\(\\\\hat{Y}_0 = \\\\hat{\\\\beta}_0 + \\\\hat{\\\\beta}_1 x_0\\\\) 是 \\\\(\\\\mathbb{E}[Y|X=x_0] = \\\\beta_0 + \\\\beta_1 x_0\\\\) 的无偏估计，方差为：</p>
                        \\\\[\\\\operatorname{Var}(\\\\hat{Y}_0) = \\\\sigma^2 \\\\left(\\\\frac{1}{n} + \\\\frac{(x_0 - \\\\bar{X})^2}{S_{xx}}\\\\right)\\\\]
                        <p>\\\\(\\\\mathbb{E}[Y|X=x_0]\\\\) 的 \\\\(100(1-\\\\alpha)\\\\%\\\\) 置信区间为：</p>
                        \\\\[\\\\hat{Y}_0 \\\\pm t_{\\\\alpha/2,\\,n-2} \\\\cdot s\\\\sqrt{\\\\frac{1}{n} + \\\\frac{(x_0 - \\\\bar{X})^2}{S_{xx}}}\\\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>置信区间的宽度取决于 \\\\((x_0 - \\\\bar{X})^2/S_{xx}\\\\)：在 \\\\(x_0 = \\\\bar{X}\\\\) 处最窄，远离均值时逐渐展宽，形成双曲线形的"置信带"。这反映了一个自然现象：我们对数据中心附近的回归线位置最有把握，对外推区域最不确定。</p>
                    </div>
                </div>

                <h3>单个新观测的预测区间</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 12.17 (预测区间)</div>
                    <div class="env-body">
                        <p>对新的独立观测 \\\\(Y_0 = \\\\beta_0 + \\\\beta_1 x_0 + \\\\varepsilon_0\\\\)，预测误差 \\\\(Y_0 - \\\\hat{Y}_0\\\\) 的方差为：</p>
                        \\\\[\\\\operatorname{Var}(Y_0 - \\\\hat{Y}_0) = \\\\sigma^2 \\\\left(1 + \\\\frac{1}{n} + \\\\frac{(x_0 - \\\\bar{X})^2}{S_{xx}}\\\\right)\\\\]
                        <p>因此 \\\\(Y_0\\\\) 的 \\\\(100(1-\\\\alpha)\\\\%\\\\) 预测区间为：</p>
                        \\\\[\\\\hat{Y}_0 \\\\pm t_{\\\\alpha/2,\\,n-2} \\\\cdot s\\\\sqrt{1 + \\\\frac{1}{n} + \\\\frac{(x_0 - \\\\bar{X})^2}{S_{xx}}}\\\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>预测误差为 \\\\(Y_0 - \\\\hat{Y}_0 = (\\\\beta_0 + \\\\beta_1 x_0 + \\\\varepsilon_0) - (\\\\hat{\\\\beta}_0 + \\\\hat{\\\\beta}_1 x_0)\\\\)。</p>
                        <p>由于 \\\\(\\\\varepsilon_0\\\\) 独立于训练数据，\\\\(Y_0\\\\) 与 \\\\(\\\\hat{Y}_0\\\\) 不相关，故：</p>
                        \\\\[\\\\operatorname{Var}(Y_0 - \\\\hat{Y}_0) = \\\\operatorname{Var}(Y_0) + \\\\operatorname{Var}(\\\\hat{Y}_0) = \\\\sigma^2 + \\\\sigma^2\\\\left(\\\\frac{1}{n} + \\\\frac{(x_0 - \\\\bar{X})^2}{S_{xx}}\\\\right)\\\\]
                        <p>前面的 \\\\(\\\\sigma^2\\\\) 来自新观测自身的随机性（不可约噪声）。标准化后 \\\\((Y_0 - \\\\hat{Y}_0)/\\\\text{se} \\\\sim t(n-2)\\\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>预测区间总是比置信区间宽，因为预测区间包含了不可约的随机误差 \\\\(\\\\sigma^2\\\\)。即使 \\\\(n \\\\to \\\\infty\\\\)，预测区间的宽度也不会收缩到零（趋于 \\\\(\\\\pm t_{\\\\alpha/2,\\\\infty} \\\\cdot \\\\sigma \\\\approx \\\\pm z_{\\\\alpha/2} \\\\cdot \\\\sigma\\\\)），而置信区间会趋于零。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>同时对所有 \\\\(x_0\\\\) 的置信带（Working-Hotelling 带）使用 \\\\(\\\\sqrt{2F_{\\\\alpha,2,n-2}}\\\\) 替代 \\\\(t_{\\\\alpha/2,n-2}\\\\)，以控制同时覆盖概率。Scheffé 方法同样适用。这比逐点置信区间更保守。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="confidence-prediction-bands-viz"></div>

                <div class="env-block example">
                    <div class="env-title">Example 12.18</div>
                    <div class="env-body">
                        <p>考虑 Example 12.3 的数据（\\\\(n=5, \\\\hat{\\\\beta}_0=0.05, \\\\hat{\\\\beta}_1=1.99, s^2=0.0293, \\\\bar{X}=3, S_{xx}=10\\\\)）。在 \\\\(x_0 = 4\\\\) 处：</p>
                        <ul>
                            <li>点预测：\\\\(\\\\hat{Y}_0 = 0.05 + 1.99 \\\\times 4 = 8.01\\\\)</li>
                            <li>均值 CI（95%，\\\\(t_{0.025,3}=3.182\\\\)）：\\\\(8.01 \\\\pm 3.182 \\\\times \\\\sqrt{0.0293} \\\\times \\\\sqrt{0.2+0.1} = 8.01 \\\\pm 0.30\\\\)，即 \\\\([7.71, 8.31]\\\\)</li>
                            <li>预测 PI（95%）：\\\\(8.01 \\\\pm 3.182 \\\\times \\\\sqrt{0.0293} \\\\times \\\\sqrt{1.3} = 8.01 \\\\pm 0.62\\\\)，即 \\\\([7.39, 8.63]\\\\)</li>
                        </ul>
                        <p>预测区间确实更宽。</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'confidence-prediction-bands-viz',
                    title: 'Interactive: 置信带与预测带',
                    description: '查看回归线的置信带（窄）和预测带（宽），滑动调节样本量和噪声水平',
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

                            viz.screenText('n=' + nObs + '  s=' + m.s.toFixed(2) + '  df=' + m.df, 200, 18, viz.colors.text, 11, 'center');
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

                        VizEngine.createButton(controls, '重新采样', function() {
                            model = generateAndFit();
                            draw();
                        });

                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '解释为什么预测区间不能随 \\\\(n \\\\to \\\\infty\\\\) 趋于零宽度，而置信区间可以。这两种区间在实际应用中分别回答什么问题？',
                    hint: '比较两种方差公式中的项，特别是前面的"1"。',
                    solution: '置信区间的方差 \\\\(\\\\sigma^2(1/n + (x_0-\\\\bar{X})^2/S_{xx})\\\\) 中所有项随 \\\\(n \\\\to \\\\infty\\\\) 趋于零，因为它只反映参数估计的不确定性。预测区间的方差 \\\\(\\\\sigma^2(1 + 1/n + (x_0-\\\\bar{X})^2/S_{xx})\\\\) 中的"1"来自新观测自身的随机性 \\\\(\\\\varepsilon_0\\\\)，这是不可约的。置信区间回答"回归线在 \\\\(x_0\\\\) 处的真实高度是多少"，预测区间回答"下一个在 \\\\(x_0\\\\) 处的新观测值会落在哪里"。'
                },
                {
                    question: '证明：对所有 \\\\(x_0\\\\)，均值响应置信区间在 \\\\(x_0 = \\\\bar{X}\\\\) 处最窄。如果需要在某点做最精确的预测，最优的实验设计是什么？',
                    hint: '分析 \\\\(\\\\operatorname{Var}(\\\\hat{Y}_0)\\\\) 关于 \\\\(x_0\\\\) 的变化。',
                    solution: '\\\\(\\\\operatorname{Var}(\\\\hat{Y}_0) = \\\\sigma^2(1/n + (x_0-\\\\bar{X})^2/S_{xx})\\\\) 是 \\\\(x_0\\\\) 的二次函数，在 \\\\(x_0 = \\\\bar{X}\\\\) 处取最小值 \\\\(\\\\sigma^2/n\\\\)。如果需要在某特定点 \\\\(x^*\\\\) 做最精确预测，应选择设计点使得 \\\\(\\\\bar{X} = x^*\\\\)。同时，为使 \\\\(1/S_{xx}\\\\) 最小（即 \\\\(S_{xx}\\\\) 最大），应让设计点尽量分散。最优设计（对斜率估计）是将一半观测放在设计空间的两端。'
                },
                {
                    question: '假设在回归分析中，我们错误地使用置信区间而非预测区间来评估单个新观测的覆盖概率。真实的覆盖概率与名义水平 \\\\(1-\\\\alpha\\\\) 相比如何？给出定性论证。',
                    hint: '置信区间比预测区间窄，覆盖概率意味着新观测落在区间内的概率。',
                    solution: '置信区间比预测区间窄（缺少 \\\\(\\\\sigma^2\\\\) 的不可约项），因此新观测落在置信区间内的概率小于 \\\\(1-\\\\alpha\\\\)，即真实覆盖概率低于名义水平。具体地，当 \\\\(n\\\\) 很大时，置信区间近似为 \\\\(\\\\hat{Y}_0 \\\\pm z_{\\\\alpha/2}\\\\sigma/\\\\sqrt{n}\\\\)（非常窄），而新观测 \\\\(Y_0\\\\) 的波动约为 \\\\(\\\\pm z_{\\\\alpha/2}\\\\sigma\\\\)，覆盖概率趋近于 0。这是一个在实践中常见的错误。'
                }
            ]
        }
    ]
});

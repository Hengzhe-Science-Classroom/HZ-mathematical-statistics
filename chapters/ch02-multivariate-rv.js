window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch02',
    number: 2,
    title: 'Multivariate Random Variables',
    subtitle: 'Multivariate Random Variables',
    sections: [
        // ============================================================
        // Section 1: Joint and Marginal Distributions
        // ============================================================
        {
            id: 'ch02-sec01',
            title: 'Joint and Marginal Distributions',
            content: `
                <h2>Joint Distributions and Marginal Distributions 联合分布与边际分布</h2>
                <p>The distribution of a single random variable describes uncertainty in one dimension. However, in practice, we often need to study the joint behavior of multiple random variables simultaneously — for example, height and weight, income and consumption, temperature and atmospheric pressure. The theory of <strong>multivariate random variables</strong> (多维随机变量, also called random vectors) provides a rigorous mathematical framework for this purpose.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.1 (Joint Cumulative Distribution Function)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) and \\(Y\\) be two random variables defined on the same probability space \\((\\Omega, \\mathcal{F}, P)\\). Their <strong>joint cumulative distribution function</strong> (联合累积分布函数, joint CDF) is defined as</p>
                        \\[F_{X,Y}(x, y) = P(X \\leq x, Y \\leq y), \\quad (x, y) \\in \\mathbb{R}^2.\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.2 (Basic Properties of the Joint CDF)</div>
                    <div class="env-body">
                        <p>The joint CDF \\(F_{X,Y}\\) satisfies:</p>
                        <ol>
                            <li>\\(F_{X,Y}\\) is non-decreasing in each of \\(x\\) and \\(y\\);</li>
                            <li>\\(F_{X,Y}(-\\infty, y) = 0\\), \\(F_{X,Y}(x, -\\infty) = 0\\), \\(F_{X,Y}(\\infty, \\infty) = 1\\);</li>
                            <li>\\(F_{X,Y}\\) is right-continuous in each of \\(x\\) and \\(y\\);</li>
                            <li>For any \\(a_1 < a_2\\), \\(b_1 < b_2\\): \\(P(a_1 < X \\leq a_2, b_1 < Y \\leq b_2) = F(a_2,b_2) - F(a_1,b_2) - F(a_2,b_1) + F(a_1,b_1) \\geq 0\\).</li>
                        </ol>
                    </div>
                </div>

                <h3>Discrete Case: Joint Probability Mass Function 离散情形：联合概率质量函数</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.3 (Joint PMF)</div>
                    <div class="env-body">
                        <p>If \\((X, Y)\\) is a discrete random vector, its <strong>joint probability mass function</strong> (联合概率质量函数) is</p>
                        \\[p_{X,Y}(x, y) = P(X = x, Y = y).\\]
                        <p>It satisfies \\(p_{X,Y}(x,y) \\geq 0\\) and \\(\\sum_x \\sum_y p_{X,Y}(x,y) = 1\\).</p>
                    </div>
                </div>

                <h3>Continuous Case: Joint Probability Density Function 连续情形：联合概率密度函数</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.4 (Joint PDF)</div>
                    <div class="env-body">
                        <p>If there exists a non-negative integrable function \\(f_{X,Y}\\) such that</p>
                        \\[F_{X,Y}(x,y) = \\int_{-\\infty}^{x} \\int_{-\\infty}^{y} f_{X,Y}(s,t) \\, dt \\, ds,\\]
                        <p>then \\((X,Y)\\) is called a continuous random vector and \\(f_{X,Y}\\) is its <strong>joint probability density function</strong> (联合概率密度函数).</p>
                        <p>It satisfies \\(f_{X,Y}(x,y) \\geq 0\\) and \\(\\int_{-\\infty}^{\\infty}\\int_{-\\infty}^{\\infty} f_{X,Y}(x,y) \\, dx \\, dy = 1\\).</p>
                    </div>
                </div>

                <h3>Marginal Distributions 边际分布</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.5 (Marginal Distribution)</div>
                    <div class="env-body">
                        <p>By "integrating out" one variable from the joint distribution, we obtain the individual distribution of the other variable, called the <strong>marginal distribution</strong> (边际分布).</p>
                        <p><strong>Discrete case:</strong></p>
                        \\[p_X(x) = \\sum_{y} p_{X,Y}(x, y), \\qquad p_Y(y) = \\sum_{x} p_{X,Y}(x, y).\\]
                        <p><strong>Continuous case:</strong></p>
                        \\[f_X(x) = \\int_{-\\infty}^{\\infty} f_{X,Y}(x, y) \\, dy, \\qquad f_Y(y) = \\int_{-\\infty}^{\\infty} f_{X,Y}(x, y) \\, dx.\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Think of the joint distribution as a two-dimensional table (discrete case) or a two-dimensional terrain map (continuous case). The marginal distribution is obtained by "projecting" or "collapsing" the table/terrain along one direction — summing the columns gives the row marginal, and summing the rows gives the column marginal.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2.6</div>
                    <div class="env-body">
                        <p>Consider a discrete joint distribution where \\(X \\in \\{0, 1, 2\\}\\) and \\(Y \\in \\{0, 1, 2\\}\\). The interactive table below shows how to obtain the marginal distributions by summing over rows or columns.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="joint-pmf-table"></div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Knowing the marginal distributions \\(p_X\\) and \\(p_Y\\) does <strong>not</strong> uniquely determine the joint distribution \\(p_{X,Y}\\). Different joint distributions can share the same marginals. The joint distribution contains strictly more information than the sum of the two marginal distributions.</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'joint-pmf-table',
                    title: 'Interactive: Joint PMF Table and Marginal Distributions',
                    description: 'Click a cell to select it, then use the slider to modify the joint probability and observe how the marginals change. Row/column sums are highlighted automatically.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 420, scale: 40});
                        // Joint PMF data (3x3)
                        var pmf = [
                            [0.10, 0.05, 0.05],
                            [0.10, 0.20, 0.10],
                            [0.05, 0.15, 0.20]
                        ];
                        var labels = ['0', '1', '2'];
                        var selectedCell = null;

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var offsetX = 120, offsetY = 60;
                            var cellW = 90, cellH = 55;
                            // Compute marginals
                            var margX = [0, 0, 0];
                            var margY = [0, 0, 0];
                            for (var i = 0; i < 3; i++) {
                                for (var j = 0; j < 3; j++) {
                                    margX[i] += pmf[i][j];
                                    margY[j] += pmf[i][j];
                                }
                            }
                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Joint PMF p(x, y)', offsetX + cellW * 1.5, 25);
                            // Column headers (Y values)
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('Y = 0', offsetX + cellW * 0.5, offsetY - 10);
                            ctx.fillText('Y = 1', offsetX + cellW * 1.5, offsetY - 10);
                            ctx.fillText('Y = 2', offsetX + cellW * 2.5, offsetY - 10);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('p_X(x)', offsetX + cellW * 3.5, offsetY - 10);
                            // Row headers (X values)
                            ctx.textAlign = 'right';
                            ctx.fillStyle = viz.colors.teal;
                            ctx.fillText('X = 0', offsetX - 10, offsetY + cellH * 0.5 + 4);
                            ctx.fillText('X = 1', offsetX - 10, offsetY + cellH * 1.5 + 4);
                            ctx.fillText('X = 2', offsetX - 10, offsetY + cellH * 2.5 + 4);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.fillText('p_Y(y)', offsetX - 10, offsetY + cellH * 3.5 + 4);
                            // Draw cells
                            ctx.textAlign = 'center';
                            for (var i = 0; i < 3; i++) {
                                for (var j = 0; j < 3; j++) {
                                    var x = offsetX + j * cellW;
                                    var y = offsetY + i * cellH;
                                    // Cell background — intensity based on value
                                    var alpha = Math.min(pmf[i][j] / 0.25, 1);
                                    ctx.fillStyle = 'rgba(88,166,255,' + (0.1 + alpha * 0.4) + ')';
                                    if (selectedCell && selectedCell[0] === i && selectedCell[1] === j) {
                                        ctx.fillStyle = 'rgba(240,136,62,0.5)';
                                    }
                                    ctx.fillRect(x + 1, y + 1, cellW - 2, cellH - 2);
                                    ctx.strokeStyle = viz.colors.text;
                                    ctx.lineWidth = 0.5;
                                    ctx.strokeRect(x, y, cellW, cellH);
                                    // Value text
                                    ctx.fillStyle = viz.colors.white;
                                    ctx.font = '15px -apple-system,sans-serif';
                                    ctx.fillText(pmf[i][j].toFixed(2), x + cellW / 2, y + cellH / 2 + 5);
                                }
                            }
                            // Marginal X column (row sums)
                            for (var i = 0; i < 3; i++) {
                                var x = offsetX + 3 * cellW;
                                var y = offsetY + i * cellH;
                                ctx.fillStyle = 'rgba(240,136,62,0.3)';
                                ctx.fillRect(x + 1, y + 1, cellW - 2, cellH - 2);
                                ctx.strokeStyle = viz.colors.orange;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(x, y, cellW, cellH);
                                ctx.fillStyle = viz.colors.orange;
                                ctx.font = 'bold 15px -apple-system,sans-serif';
                                ctx.fillText(margX[i].toFixed(2), x + cellW / 2, y + cellH / 2 + 5);
                            }
                            // Marginal Y row (column sums)
                            for (var j = 0; j < 3; j++) {
                                var x = offsetX + j * cellW;
                                var y = offsetY + 3 * cellH;
                                ctx.fillStyle = 'rgba(240,136,62,0.3)';
                                ctx.fillRect(x + 1, y + 1, cellW - 2, cellH - 2);
                                ctx.strokeStyle = viz.colors.orange;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(x, y, cellW, cellH);
                                ctx.fillStyle = viz.colors.orange;
                                ctx.font = 'bold 15px -apple-system,sans-serif';
                                ctx.fillText(margY[j].toFixed(2), x + cellW / 2, y + cellH / 2 + 5);
                            }
                            // Total cell
                            var tx = offsetX + 3 * cellW;
                            var ty = offsetY + 3 * cellH;
                            ctx.fillStyle = 'rgba(63,185,80,0.3)';
                            ctx.fillRect(tx + 1, ty + 1, cellW - 2, cellH - 2);
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 1;
                            ctx.strokeRect(tx, ty, cellW, cellH);
                            var total = margX.reduce(function(a, b) { return a + b; }, 0);
                            ctx.fillStyle = viz.colors.green;
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.fillText(total.toFixed(2), tx + cellW / 2, ty + cellH / 2 + 5);
                            // Instructions
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillText('Use slider to adjust selected cell probability', viz.width / 2, viz.height - 15);
                        }

                        // Click handler
                        viz.canvas.addEventListener('click', function(e) {
                            var rect = viz.canvas.getBoundingClientRect();
                            var mx = e.clientX - rect.left;
                            var my = e.clientY - rect.top;
                            var offsetX = 120, offsetY = 60, cellW = 90, cellH = 55;
                            var col = Math.floor((mx - offsetX) / cellW);
                            var row = Math.floor((my - offsetY) / cellH);
                            if (row >= 0 && row < 3 && col >= 0 && col < 3) {
                                selectedCell = [row, col];
                                probSlider.value = pmf[row][col];
                                probSlider.dispatchEvent(new Event('input'));
                            }
                            draw();
                        });

                        var probSlider = VizEngine.createSlider(controls, 'P(x,y)', 0, 0.4, 0.1, 0.01, function(val) {
                            if (selectedCell) {
                                pmf[selectedCell[0]][selectedCell[1]] = val;
                                // Normalize: scale other cells so total = 1
                                var total = 0;
                                for (var i = 0; i < 3; i++)
                                    for (var j = 0; j < 3; j++)
                                        total += pmf[i][j];
                                if (total > 0 && Math.abs(total - 1) > 0.001) {
                                    var excess = total - 1;
                                    var others = 0;
                                    for (var i = 0; i < 3; i++)
                                        for (var j = 0; j < 3; j++)
                                            if (!(i === selectedCell[0] && j === selectedCell[1]))
                                                others += pmf[i][j];
                                    if (others > 0) {
                                        var scale = (others - excess) / others;
                                        if (scale >= 0) {
                                            for (var i = 0; i < 3; i++)
                                                for (var j = 0; j < 3; j++)
                                                    if (!(i === selectedCell[0] && j === selectedCell[1]))
                                                        pmf[i][j] *= scale;
                                        }
                                    }
                                }
                                draw();
                            }
                        });

                        VizEngine.createButton(controls, 'Reset', function() {
                            pmf = [
                                [0.10, 0.05, 0.05],
                                [0.10, 0.20, 0.10],
                                [0.05, 0.15, 0.20]
                            ];
                            selectedCell = null;
                            draw();
                        });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\((X,Y)\\) have joint PDF \\(f(x,y) = 6(1 - y)\\) for \\(0 < x < y < 1\\) and \\(0\\) otherwise. Find the marginal PDF \\(f_Y(y)\\).',
                    hint: 'Integrate \\(f(x,y)\\) over \\(x\\) from \\(0\\) to \\(y\\).',
                    solution: 'For \\(0 < y < 1\\): \\(f_Y(y) = \\int_0^y 6(1-y) \\, dx = 6y(1-y)\\). This is a Beta(2,2) density (up to a constant that works out exactly).'
                },
                {
                    question: 'Suppose \\(X\\) and \\(Y\\) each take values in \\(\\{1, 2, 3\\}\\) with joint PMF \\(p(i,j) = c(i + j)\\). Find the constant \\(c\\) and the marginal PMF \\(p_X(2)\\).',
                    hint: 'Sum \\(c(i+j)\\) over all 9 pairs to find \\(c\\). Then sum over \\(j\\) for \\(i=2\\).',
                    solution: '\\(\\sum_{i=1}^{3}\\sum_{j=1}^{3}(i+j) = 9 \\cdot 4 = 36\\), so \\(c = 1/36\\). Then \\(p_X(2) = \\sum_{j=1}^{3}\\frac{2+j}{36} = \\frac{3+4+5}{36} = \\frac{12}{36} = \\frac{1}{3}\\).'
                },
                {
                    question: 'Prove that if \\(f_{X,Y}(x,y) = g(x)h(y)\\) for non-negative functions \\(g, h\\), then the marginal PDFs satisfy \\(f_X(x) \\propto g(x)\\) and \\(f_Y(y) \\propto h(y)\\).',
                    hint: 'Compute \\(f_X(x) = \\int f_{X,Y}(x,y) \\, dy = g(x) \\int h(y) \\, dy\\).',
                    solution: '\\(f_X(x) = \\int_{-\\infty}^{\\infty} g(x)h(y)\\,dy = g(x)\\cdot \\int_{-\\infty}^{\\infty} h(y)\\,dy\\). Since \\(\\int h(y)\\,dy\\) is a positive constant, \\(f_X(x) \\propto g(x)\\). By symmetry, \\(f_Y(y) \\propto h(y)\\).'
                }
            ]
        },

        // ============================================================
        // Section 2: Conditional Distributions and Independence
        // ============================================================
        {
            id: 'ch02-sec02',
            title: 'Conditional Distributions and Independence',
            content: `
                <h2>Conditional Distributions and Independence 条件分布与独立性</h2>
                <p>The joint distribution tells us everything about two variables. But we often need to answer questions like: <em>Given \\(Y = y\\), what is the distribution of \\(X\\)?</em> This leads to the concept of conditional distributions (条件分布).</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.7 (Conditional Distribution)</div>
                    <div class="env-body">
                        <p><strong>Discrete case:</strong> If \\(p_Y(y) > 0\\), the <strong>conditional PMF</strong> (条件概率质量函数) of \\(X\\) given \\(Y = y\\) is</p>
                        \\[p_{X|Y}(x|y) = \\frac{p_{X,Y}(x,y)}{p_Y(y)}.\\]
                        <p><strong>Continuous case:</strong> If \\(f_Y(y) > 0\\), the <strong>conditional PDF</strong> (条件概率密度函数) of \\(X\\) given \\(Y = y\\) is</p>
                        \\[f_{X|Y}(x|y) = \\frac{f_{X,Y}(x,y)}{f_Y(y)}.\\]
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>In the continuous case, \\(P(Y = y) = 0\\), so the conditional distribution cannot be obtained directly from the definition of conditional probability. The correct interpretation of the conditional PDF is through a limit: \\(f_{X|Y}(x|y) = \\lim_{\\epsilon \\to 0} \\frac{P(X \\leq x \\mid y < Y \\leq y + \\epsilon)}{dx}\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.8 (Bayes' Rule for Densities)</div>
                    <div class="env-body">
                        <p>If \\(f_X(x) > 0\\) and \\(f_Y(y) > 0\\), then</p>
                        \\[f_{X|Y}(x|y) = \\frac{f_{Y|X}(y|x) \\cdot f_X(x)}{f_Y(y)}.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By the definition of conditional density: \\(f_{X|Y}(x|y) = \\frac{f_{X,Y}(x,y)}{f_Y(y)}\\). Since \\(f_{X,Y}(x,y) = f_{Y|X}(y|x) \\cdot f_X(x)\\), substituting yields the result.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h3>Independence 独立性</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.9 (Independent Random Variables)</div>
                    <div class="env-body">
                        <p>Random variables \\(X\\) and \\(Y\\) are said to be <strong>(statistically) independent</strong> (独立) if for all \\((x, y) \\in \\mathbb{R}^2\\):</p>
                        \\[F_{X,Y}(x,y) = F_X(x) \\cdot F_Y(y).\\]
                        <p>Equivalently:</p>
                        <ul>
                            <li>Discrete case: \\(p_{X,Y}(x,y) = p_X(x) \\cdot p_Y(y)\\) for all \\(x, y\\);</li>
                            <li>Continuous case: \\(f_{X,Y}(x,y) = f_X(x) \\cdot f_Y(y)\\) almost everywhere.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.10 (Factorization Criterion for Independence)</div>
                    <div class="env-body">
                        <p>\\(X\\) and \\(Y\\) are independent \\(\\iff\\) the joint density (or mass) function can be factored as</p>
                        \\[f_{X,Y}(x,y) = g(x) \\cdot h(y)\\]
                        <p>for some non-negative functions \\(g\\) and \\(h\\) (they need not be the marginal densities themselves, only separable).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>(\\(\\Rightarrow\\)) Obvious. (\\(\\Leftarrow\\)) If \\(f_{X,Y}(x,y) = g(x)h(y)\\), then \\(f_X(x) = g(x)\\int h(y)\\,dy = g(x) \\cdot c_h\\) and \\(f_Y(y) = h(y)\\int g(x)\\,dx = h(y) \\cdot c_g\\). Therefore \\(f_X(x)f_Y(y) = c_g c_h \\cdot g(x)h(y)\\). Since \\(1 = \\iint g(x)h(y)\\,dx\\,dy = c_g c_h\\), we have \\(f_X(x)f_Y(y) = g(x)h(y) = f_{X,Y}(x,y)\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Independence means "knowing the value of \\(Y\\) does not change our knowledge about the distribution of \\(X\\)." The conditional distribution equals the marginal distribution: \\(f_{X|Y}(x|y) = f_X(x)\\). In the interactive plot below, you can drag the slice position to observe: when \\(X\\) and \\(Y\\) are independent, the shape of the conditional density does not change with the slice position; when they are dependent, it changes noticeably.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="conditional-slicer"></div>

                <div class="env-block example">
                    <div class="env-title">Example 2.11</div>
                    <div class="env-body">
                        <p>Let \\(f_{X,Y}(x,y) = 2\\) on the triangular region \\(0 < x < y < 1\\).</p>
                        <p>Marginal densities: \\(f_X(x) = \\int_x^1 2\\,dy = 2(1-x)\\), \\(f_Y(y) = \\int_0^y 2\\,dx = 2y\\).</p>
                        <p>Testing for independence: \\(f_X(x) \\cdot f_Y(y) = 4y(1-x) \\neq 2 = f_{X,Y}(x,y)\\).</p>
                        <p>Therefore \\(X\\) and \\(Y\\) are not independent (intuitively obvious as well: the constraint \\(X < Y\\) couples the two).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'conditional-slicer',
                    title: 'Interactive: Conditional Distribution Slicer',
                    description: 'Drag the vertical line to see how the conditional density of Y changes at a fixed x position.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400, scale: 80,
                            originX: 80, originY: 340
                        });
                        var mode = 'dependent';

                        // Two modes: independent (uniform on [0,1]^2) and dependent (triangle 0<x<y<1)
                        function jointPDF(x, y) {
                            if (mode === 'independent') {
                                return (x >= 0 && x <= 1 && y >= 0 && y <= 1) ? 1.0 : 0;
                            } else {
                                return (x > 0 && y > x && y < 1) ? 2.0 : 0;
                            }
                        }

                        function marginalY(y) {
                            if (mode === 'independent') {
                                return (y >= 0 && y <= 1) ? 1.0 : 0;
                            } else {
                                return (y > 0 && y < 1) ? 2 * y : 0;
                            }
                        }

                        function conditionalY(y, xFixed) {
                            if (mode === 'independent') {
                                return (y >= 0 && y <= 1) ? 1.0 : 0;
                            } else {
                                if (xFixed <= 0 || xFixed >= 1) return 0;
                                // f(y|x) = f(x,y)/f_X(x) = 2 / (2(1-x)) = 1/(1-x) for x < y < 1
                                if (y > xFixed && y < 1) return 1 / (1 - xFixed);
                                return 0;
                            }
                        }

                        var sliceX = viz.addDraggable('slice', 0.5, 0, viz.colors.orange, 7, function(mx) {
                            sliceX.x = Math.max(0.01, Math.min(0.99, mx));
                            sliceX.y = 0;
                            draw();
                        });

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            // Draw axes
                            viz.drawSegment(0, 0, 1.2, 0, viz.colors.axis, 1.5);
                            viz.drawSegment(0, 0, 0, 3.2, viz.colors.axis, 1.5);
                            // Axis labels
                            viz.drawText('y', 1.25, -0.1, viz.colors.text, 13);
                            viz.drawText('f', -0.15, 3.2, viz.colors.text, 13);
                            // Tick marks
                            for (var t = 0; t <= 1; t += 0.5) {
                                viz.drawSegment(t, -0.03, t, 0.03, viz.colors.text, 1);
                                viz.drawText(t.toFixed(1), t, -0.15, viz.colors.text, 11);
                            }

                            // Draw marginal f_Y(y)
                            viz.drawFunction(function(y) { return marginalY(y); }, -0.1, 1.3, viz.colors.blue, 2);
                            viz.screenText('f_Y(y)', 500, 30, viz.colors.blue, 13, 'right');

                            // Draw conditional f(y|x = xFixed)
                            var xf = sliceX.x;
                            viz.drawFunction(function(y) { return conditionalY(y, xf); }, -0.1, 1.3, viz.colors.orange, 2.5);
                            viz.screenText('f(y | X=' + xf.toFixed(2) + ')', 500, 50, viz.colors.orange, 13, 'right');

                            // Shade conditional
                            viz.shadeUnder(function(y) { return conditionalY(y, xf); }, Math.max(0, xf), 1, viz.colors.orange + '33');

                            // Draw slice line
                            viz.drawSegment(xf, 0, xf, 3, viz.colors.orange, 1.5, true);

                            // Mode label
                            var label = mode === 'independent' ? 'Independent: f(x,y)=1 on [0,1]^2' : 'Dependent: f(x,y)=2 on {0<x<y<1}';
                            viz.screenText(label, viz.width / 2, viz.height - 10, viz.colors.text, 12);

                            viz.drawDraggables();
                        }

                        VizEngine.createButton(controls, 'Independent', function() {
                            mode = 'independent';
                            draw();
                        });
                        VizEngine.createButton(controls, 'Dependent', function() {
                            mode = 'dependent';
                            draw();
                        });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\(X \\sim \\text{Uniform}(0,1)\\) and \\(Y | X = x \\sim \\text{Uniform}(0, x)\\). Find the joint density \\(f_{X,Y}(x,y)\\) and verify that \\(X\\) and \\(Y\\) are not independent.',
                    hint: 'Use \\(f_{X,Y}(x,y) = f_{Y|X}(y|x) \\cdot f_X(x)\\). Then check if the joint factors as a product of functions of \\(x\\) alone and \\(y\\) alone.',
                    solution: '\\(f_{Y|X}(y|x) = 1/x\\) for \\(0 < y < x\\), and \\(f_X(x) = 1\\) for \\(0 < x < 1\\). So \\(f_{X,Y}(x,y) = 1/x\\) on \\(\\{0 < y < x < 1\\}\\). The support depends on both \\(x\\) and \\(y\\), so the density cannot factor as \\(g(x)h(y)\\). Hence \\(X\\) and \\(Y\\) are not independent.'
                },
                {
                    question: 'Suppose \\(X\\) and \\(Y\\) are independent with \\(X \\sim \\text{Exp}(1)\\) and \\(Y \\sim \\text{Exp}(2)\\). Find \\(P(X > Y)\\).',
                    hint: 'Compute \\(\\int_0^\\infty \\int_0^x f_X(x) f_Y(y) \\, dy \\, dx\\).',
                    solution: '\\(P(X>Y) = \\int_0^\\infty e^{-x} \\int_0^x 2e^{-2y}\\,dy\\,dx = \\int_0^\\infty e^{-x}(1-e^{-2x})\\,dx = 1 - \\int_0^\\infty e^{-3x}\\,dx = 1 - 1/3 = 2/3\\).'
                },
                {
                    question: 'Show that if \\(X\\) and \\(Y\\) are independent, then \\(g(X)\\) and \\(h(Y)\\) are independent for any measurable functions \\(g, h\\).',
                    hint: 'Use the fact that \\(\\{g(X) \\leq a\\} = X^{-1}(g^{-1}((-\\infty, a]))\\) is a measurable set depending only on \\(X\\).',
                    solution: 'For any Borel sets \\(A, B\\): \\(P(g(X) \\in A, h(Y) \\in B) = P(X \\in g^{-1}(A), Y \\in h^{-1}(B))\\). Since \\(X \\perp Y\\), this equals \\(P(X \\in g^{-1}(A)) \\cdot P(Y \\in h^{-1}(B)) = P(g(X) \\in A) \\cdot P(h(Y) \\in B)\\).'
                }
            ]
        },

        // ============================================================
        // Section 3: Covariance and Correlation
        // ============================================================
        {
            id: 'ch02-sec03',
            title: 'Covariance and Correlation',
            content: `
                <h2>Covariance and Correlation 协方差与相关系数</h2>
                <p>Marginal and conditional distributions describe the probabilistic behavior of individual variables. But what we often care about most is a concise measure: <em>the strength and direction of the linear association between two variables</em>. Covariance (协方差) and the correlation coefficient (相关系数) are designed precisely for this purpose.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.12 (Covariance)</div>
                    <div class="env-body">
                        <p>If the expectations of \\(X\\) and \\(Y\\) are finite, their <strong>covariance</strong> (协方差) is defined as</p>
                        \\[\\operatorname{Cov}(X, Y) = \\mathbb{E}[(X - \\mathbb{E}[X])(Y - \\mathbb{E}[Y])] = \\mathbb{E}[XY] - \\mathbb{E}[X]\\mathbb{E}[Y].\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.13 (Properties of Covariance)</div>
                    <div class="env-body">
                        <p>Let \\(X, Y, Z\\) be random variables and \\(a, b \\in \\mathbb{R}\\):</p>
                        <ol>
                            <li>\\(\\operatorname{Cov}(X, X) = \\operatorname{Var}(X)\\);</li>
                            <li>\\(\\operatorname{Cov}(X, Y) = \\operatorname{Cov}(Y, X)\\) (symmetry);</li>
                            <li>\\(\\operatorname{Cov}(aX + b, Y) = a \\operatorname{Cov}(X, Y)\\) (one half of bilinearity);</li>
                            <li>\\(\\operatorname{Cov}(X + Y, Z) = \\operatorname{Cov}(X, Z) + \\operatorname{Cov}(Y, Z)\\);</li>
                            <li>\\(\\operatorname{Var}(X + Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y) + 2\\operatorname{Cov}(X, Y)\\);</li>
                            <li>If \\(X \\perp Y\\) (independent), then \\(\\operatorname{Cov}(X, Y) = 0\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>\\(\\operatorname{Cov}(X, Y) = 0\\) does <strong>not</strong> imply that \\(X\\) and \\(Y\\) are independent! Classic counterexample: \\(X \\sim N(0,1)\\), \\(Y = X^2\\). Then \\(\\operatorname{Cov}(X, X^2) = \\mathbb{E}[X^3] - \\mathbb{E}[X]\\mathbb{E}[X^2] = 0\\), yet \\(Y\\) is completely determined by \\(X\\). Covariance captures only <strong>linear</strong> association.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.14 (Correlation Coefficient)</div>
                    <div class="env-body">
                        <p>If \\(\\operatorname{Var}(X) > 0\\) and \\(\\operatorname{Var}(Y) > 0\\), the <strong>Pearson correlation coefficient</strong> (Pearson 相关系数) is</p>
                        \\[\\rho(X, Y) = \\frac{\\operatorname{Cov}(X, Y)}{\\sqrt{\\operatorname{Var}(X)} \\cdot \\sqrt{\\operatorname{Var}(Y)}} = \\frac{\\operatorname{Cov}(X,Y)}{\\sigma_X \\sigma_Y}.\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.15 (Cauchy-Schwarz Inequality and \\(|\\rho| \\leq 1\\))</div>
                    <div class="env-body">
                        <p>For any two square-integrable random variables:</p>
                        \\[|\\mathbb{E}[XY]|^2 \\leq \\mathbb{E}[X^2] \\cdot \\mathbb{E}[Y^2].\\]
                        <p>From this it follows that \\(-1 \\leq \\rho(X, Y) \\leq 1\\). Equality holds if and only if \\(Y = aX + b\\) a.s. for some constants \\(a \\neq 0, b\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(U = X - \\mathbb{E}[X]\\), \\(V = Y - \\mathbb{E}[Y]\\). For any \\(t \\in \\mathbb{R}\\):</p>
                        \\[0 \\leq \\mathbb{E}[(U + tV)^2] = \\mathbb{E}[U^2] + 2t\\mathbb{E}[UV] + t^2 \\mathbb{E}[V^2].\\]
                        <p>This is a non-negative quadratic function of \\(t\\), so the discriminant \\(\\leq 0\\):</p>
                        \\[4(\\mathbb{E}[UV])^2 - 4\\mathbb{E}[U^2]\\mathbb{E}[V^2] \\leq 0 \\implies (\\operatorname{Cov}(X,Y))^2 \\leq \\operatorname{Var}(X) \\operatorname{Var}(Y).\\]
                        <p>Dividing both sides by \\(\\sigma_X^2 \\sigma_Y^2\\) gives \\(\\rho^2 \\leq 1\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>\\(\\rho\\) measures how tightly data points cluster around a straight line. \\(\\rho = 1\\) indicates a perfect positive linear relationship (all points lie on a positively sloped line), \\(\\rho = -1\\) indicates a perfect negative linear relationship, and \\(\\rho = 0\\) indicates no linear trend (though a nonlinear relationship may still exist). The scatter plot visualization below demonstrates the data distribution for different values of \\(\\rho\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="correlation-scatter"></div>
            `,
            visualizations: [
                {
                    id: 'correlation-scatter',
                    title: 'Interactive: Correlation Coefficient Scatter Plot',
                    description: 'Drag the slider to change rho and observe how the scatter plot shape changes.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 420, scale: 55, originX: 280, originY: 210});
                        var rho = 0.7;
                        var nPoints = 200;
                        var points = [];

                        function generatePoints() {
                            points = [];
                            for (var i = 0; i < nPoints; i++) {
                                var z1 = VizEngine.randomNormal(0, 1);
                                var z2 = VizEngine.randomNormal(0, 1);
                                var x = z1;
                                var y = rho * z1 + Math.sqrt(1 - rho * rho) * z2;
                                points.push([x, y]);
                            }
                        }

                        function computeR() {
                            var mx = 0, my = 0;
                            for (var i = 0; i < points.length; i++) {
                                mx += points[i][0];
                                my += points[i][1];
                            }
                            mx /= points.length;
                            my /= points.length;
                            var sxy = 0, sxx = 0, syy = 0;
                            for (var i = 0; i < points.length; i++) {
                                var dx = points[i][0] - mx;
                                var dy = points[i][1] - my;
                                sxy += dx * dy;
                                sxx += dx * dx;
                                syy += dy * dy;
                            }
                            return sxy / Math.sqrt(sxx * syy);
                        }

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            // Draw points
                            for (var i = 0; i < points.length; i++) {
                                viz.drawPoint(points[i][0], points[i][1], viz.colors.blue + '99', null, 3);
                            }

                            // Compute and show sample correlation
                            var r = computeR();
                            viz.screenText('Target rho = ' + rho.toFixed(2), viz.width - 15, 25, viz.colors.orange, 14, 'right');
                            viz.screenText('Sample r = ' + r.toFixed(3), viz.width - 15, 45, viz.colors.teal, 14, 'right');
                            viz.screenText('n = ' + nPoints, viz.width - 15, 65, viz.colors.text, 12, 'right');

                            // If |rho| close to 1, draw regression line
                            if (Math.abs(rho) > 0.1) {
                                var mx = VizEngine.mean(points.map(function(p) { return p[0]; }));
                                var my = VizEngine.mean(points.map(function(p) { return p[1]; }));
                                var slope = rho; // for standard normal, slope ~ rho
                                viz.drawLine(mx - 3, my - 3 * slope, mx + 3, my + 3 * slope, viz.colors.orange + '88', 1.5, true);
                            }
                        }

                        generatePoints();

                        VizEngine.createSlider(controls, 'rho', -1, 1, rho, 0.05, function(val) {
                            rho = val;
                            generatePoints();
                            draw();
                        });

                        VizEngine.createSlider(controls, 'n', 50, 500, nPoints, 50, function(val) {
                            nPoints = Math.round(val);
                            generatePoints();
                            draw();
                        });

                        VizEngine.createButton(controls, 'Resample', function() {
                            generatePoints();
                            draw();
                        });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Compute \\(\\operatorname{Cov}(X, X+Y)\\) in terms of \\(\\operatorname{Var}(X)\\) and \\(\\operatorname{Cov}(X,Y)\\).',
                    hint: 'Use the bilinearity of covariance: \\(\\operatorname{Cov}(X, X+Y) = \\operatorname{Cov}(X,X) + \\operatorname{Cov}(X,Y)\\).',
                    solution: '\\(\\operatorname{Cov}(X, X+Y) = \\operatorname{Cov}(X,X) + \\operatorname{Cov}(X,Y) = \\operatorname{Var}(X) + \\operatorname{Cov}(X,Y)\\).'
                },
                {
                    question: 'Let \\(X \\sim N(0,1)\\) and \\(Y = X^2\\). Show that \\(\\operatorname{Cov}(X,Y) = 0\\) but \\(X\\) and \\(Y\\) are not independent.',
                    hint: 'Compute \\(\\mathbb{E}[XY] = \\mathbb{E}[X^3]\\) using the symmetry of the standard normal. For non-independence, note that \\(P(Y \\leq 1 | X = 2) = 0\\) but \\(P(Y \\leq 1) > 0\\).',
                    solution: '\\(\\mathbb{E}[XY] = \\mathbb{E}[X^3] = 0\\) (odd moment of symmetric distribution). \\(\\mathbb{E}[X]\\mathbb{E}[Y] = 0 \\cdot 1 = 0\\). So \\(\\operatorname{Cov}(X,Y) = 0\\). But \\(Y = X^2\\) is completely determined by \\(X\\), so clearly not independent: \\(P(|X| > 2, Y < 1) = 0 \\neq P(|X|>2)P(Y<1) > 0\\).'
                },
                {
                    question: 'If \\(\\operatorname{Var}(X) = 4\\), \\(\\operatorname{Var}(Y) = 9\\), and \\(\\rho(X,Y) = -0.5\\), find \\(\\operatorname{Var}(2X - 3Y + 1)\\).',
                    hint: 'Use \\(\\operatorname{Var}(aX + bY + c) = a^2\\operatorname{Var}(X) + b^2\\operatorname{Var}(Y) + 2ab\\operatorname{Cov}(X,Y)\\) and compute \\(\\operatorname{Cov}(X,Y) = \\rho \\sigma_X \\sigma_Y\\).',
                    solution: '\\(\\operatorname{Cov}(X,Y) = (-0.5)(2)(3) = -3\\). Then \\(\\operatorname{Var}(2X - 3Y + 1) = 4 \\cdot 4 + 9 \\cdot 9 + 2(2)(-3)(-3) = 16 + 81 + 36 = 133\\).'
                }
            ]
        },

        // ============================================================
        // Section 4: Multivariate Normal Distribution
        // ============================================================
        {
            id: 'ch02-sec04',
            title: 'Multivariate Normal Distribution',
            content: `
                <h2>Multivariate Normal Distribution 多维正态分布</h2>
                <p>The normal distribution is the most important distribution family in probability theory and statistics. Its multivariate generalization — the <strong>multivariate normal distribution</strong> (多维正态分布, MVN) — plays a central role in statistical inference because it is closed under linear transformations, and its marginal and conditional distributions are also normal.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.16 (Bivariate Normal Distribution)</div>
                    <div class="env-body">
                        <p>The random vector \\((X, Y)^T\\) follows a <strong>bivariate normal distribution</strong> (二维正态分布), written \\((X,Y)^T \\sim N_2(\\boldsymbol{\\mu}, \\boldsymbol{\\Sigma})\\), if its joint PDF is</p>
                        \\[f(x,y) = \\frac{1}{2\\pi \\sigma_1 \\sigma_2 \\sqrt{1-\\rho^2}} \\exp\\left(-\\frac{1}{2(1-\\rho^2)}\\left[\\frac{(x-\\mu_1)^2}{\\sigma_1^2} - 2\\rho\\frac{(x-\\mu_1)(y-\\mu_2)}{\\sigma_1 \\sigma_2} + \\frac{(y-\\mu_2)^2}{\\sigma_2^2}\\right]\\right),\\]
                        <p>where \\(\\boldsymbol{\\mu} = (\\mu_1, \\mu_2)^T\\) is the mean vector (均值向量) and \\(\\boldsymbol{\\Sigma} = \\begin{pmatrix} \\sigma_1^2 & \\rho\\sigma_1\\sigma_2 \\\\ \\rho\\sigma_1\\sigma_2 & \\sigma_2^2 \\end{pmatrix}\\) is the covariance matrix (协方差矩阵).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.17 (General Multivariate Normal Distribution)</div>
                    <div class="env-body">
                        <p>The \\(p\\)-dimensional random vector \\(\\mathbf{X} = (X_1, \\ldots, X_p)^T\\) follows \\(N_p(\\boldsymbol{\\mu}, \\boldsymbol{\\Sigma})\\) if</p>
                        \\[f(\\mathbf{x}) = \\frac{1}{(2\\pi)^{p/2} |\\boldsymbol{\\Sigma}|^{1/2}} \\exp\\left(-\\frac{1}{2}(\\mathbf{x} - \\boldsymbol{\\mu})^T \\boldsymbol{\\Sigma}^{-1} (\\mathbf{x} - \\boldsymbol{\\mu})\\right),\\]
                        <p>where \\(\\boldsymbol{\\mu} \\in \\mathbb{R}^p\\) is the mean vector and \\(\\boldsymbol{\\Sigma} \\in \\mathbb{R}^{p \\times p}\\) is a positive definite covariance matrix.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.18 (Key Properties of the MVN)</div>
                    <div class="env-body">
                        <p>Let \\(\\mathbf{X} \\sim N_p(\\boldsymbol{\\mu}, \\boldsymbol{\\Sigma})\\):</p>
                        <ol>
                            <li><strong>Closure under linear transformations:</strong> \\(\\mathbf{A}\\mathbf{X} + \\mathbf{b} \\sim N_q(\\mathbf{A}\\boldsymbol{\\mu} + \\mathbf{b}, \\mathbf{A}\\boldsymbol{\\Sigma}\\mathbf{A}^T)\\) for any \\(\\mathbf{A} \\in \\mathbb{R}^{q \\times p}, \\mathbf{b} \\in \\mathbb{R}^q\\);</li>
                            <li><strong>Marginal normality:</strong> Any sub-vector also follows a normal distribution;</li>
                            <li><strong>Conditional normality:</strong> Conditional distributions are also normal, with mean being a linear function and variance not depending on the conditioning variable's value;</li>
                            <li><strong>Uncorrelated \\(\\iff\\) Independent:</strong> For multivariate normal, \\(\\operatorname{Cov}(X_i, X_j) = 0 \\iff X_i \\perp X_j\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (Uncorrelated \\(\\Rightarrow\\) Independent)</div>
                    <div class="env-body">
                        <p>Suppose \\((X, Y)^T \\sim N_2\\) with \\(\\rho = 0\\). Then the covariance matrix \\(\\boldsymbol{\\Sigma}\\) is diagonal, and the exponent decomposes as</p>
                        \\[\\frac{(x-\\mu_1)^2}{\\sigma_1^2} + \\frac{(y-\\mu_2)^2}{\\sigma_2^2},\\]
                        <p>so that \\(f(x,y) = \\frac{1}{\\sqrt{2\\pi}\\sigma_1}e^{-(x-\\mu_1)^2/(2\\sigma_1^2)} \\cdot \\frac{1}{\\sqrt{2\\pi}\\sigma_2}e^{-(y-\\mu_2)^2/(2\\sigma_2^2)} = f_X(x) \\cdot f_Y(y)\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.19 (Conditional Normal Distribution)</div>
                    <div class="env-body">
                        <p>Let \\((X,Y)^T \\sim N_2(\\boldsymbol{\\mu}, \\boldsymbol{\\Sigma})\\). Then</p>
                        \\[X | Y = y \\sim N\\left(\\mu_1 + \\rho \\frac{\\sigma_1}{\\sigma_2}(y - \\mu_2), \\; \\sigma_1^2(1 - \\rho^2)\\right).\\]
                        <p>Note that the conditional variance \\(\\sigma_1^2(1 - \\rho^2)\\) does not depend on \\(y\\), and the larger \\(|\\rho|\\) is, the smaller the conditional variance.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The level curves of a bivariate normal distribution are ellipses. The direction of the major axis is determined by the eigenvectors of the covariance matrix, and the aspect ratio of the axes is determined by the eigenvalues. When \\(\\rho = 0\\), the ellipse axes align with the coordinate axes; as \\(|\\rho|\\) increases, the ellipse tilts and becomes narrower. The interactive visualization below lets you directly observe how parameter changes affect the density contours.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="mvn-contour"></div>

                <div class="env-block example">
                    <div class="env-title">Example 2.20</div>
                    <div class="env-body">
                        <p>Let \\((X, Y)^T \\sim N_2\\left(\\begin{pmatrix}1\\\\2\\end{pmatrix}, \\begin{pmatrix}4 & 3\\\\3 & 9\\end{pmatrix}\\right)\\). Then \\(\\sigma_1 = 2, \\sigma_2 = 3, \\rho = 3/(2 \\cdot 3) = 0.5\\).</p>
                        <p>Conditional distribution: \\(X | Y = 5 \\sim N(1 + 0.5 \\cdot \\frac{2}{3}(5 - 2), \\; 4(1 - 0.25)) = N(2, 3)\\).</p>
                    </div>
                </div>
            `,
            visualizations: [
                {
                    id: 'mvn-contour',
                    title: 'Interactive: Bivariate Normal Contour Plot',
                    description: 'Adjust the parameters to observe how the contour ellipses change. Drag the center point to move the mean.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 420, scale: 50, originX: 280, originY: 210});
                        var sigma1 = 1.0, sigma2 = 1.0, rhoVal = 0.5;

                        var center = viz.addDraggable('center', 0, 0, viz.colors.green, 7, function(mx, my) {
                            draw();
                        });

                        function draw() {
                            viz.clear();
                            viz.drawGrid(1);
                            viz.drawAxes();

                            var mu1 = center.x, mu2 = center.y;
                            var ctx = viz.ctx;

                            // Draw contour ellipses at different levels
                            // For bivariate normal, constant density => (x-mu)^T Sigma^{-1} (x-mu) = c
                            // Eigenvalue decomposition for ellipse
                            var s11 = sigma1 * sigma1, s22 = sigma2 * sigma2;
                            var s12 = rhoVal * sigma1 * sigma2;
                            // Eigenvalues of Sigma
                            var tr = s11 + s22;
                            var det = s11 * s22 - s12 * s12;
                            var disc = Math.sqrt(Math.max(0, tr * tr - 4 * det));
                            var lam1 = (tr + disc) / 2;
                            var lam2 = (tr - disc) / 2;
                            // Eigenvector for lam1
                            var angle = 0;
                            if (Math.abs(s12) > 1e-10) {
                                angle = Math.atan2(lam1 - s11, s12);
                            }

                            // Draw 3 contour levels: 1-sigma, 2-sigma, 3-sigma (c = 1, 4, 9)
                            var contourColors = [viz.colors.blue, viz.colors.teal, viz.colors.purple];
                            var contourAlphas = ['66', '44', '22'];
                            var contourLabels = ['1-sigma', '2-sigma', '3-sigma'];
                            for (var k = 3; k >= 1; k--) {
                                var rx = Math.sqrt(lam1) * k;
                                var ry = Math.sqrt(lam2) * k;
                                viz.drawEllipse(mu1, mu2, rx, ry, angle,
                                    contourColors[k-1] + contourAlphas[k-1],
                                    contourColors[k-1]);
                            }

                            // Labels
                            for (var k = 1; k <= 3; k++) {
                                var rx = Math.sqrt(lam1) * k;
                                var labelX = mu1 + rx * Math.cos(angle);
                                var labelY = mu2 + rx * Math.sin(angle);
                                viz.drawText(k + 'sigma', labelX, labelY + 0.15, contourColors[k-1], 10);
                            }

                            // Show parameters
                            viz.screenText('mu = (' + mu1.toFixed(1) + ', ' + mu2.toFixed(1) + ')', 15, 20, viz.colors.white, 13, 'left');
                            viz.screenText('sigma1 = ' + sigma1.toFixed(1) + ', sigma2 = ' + sigma2.toFixed(1), 15, 38, viz.colors.text, 12, 'left');
                            viz.screenText('rho = ' + rhoVal.toFixed(2), 15, 56, viz.colors.orange, 13, 'left');
                            viz.screenText('det(Sigma) = ' + det.toFixed(2), 15, 74, viz.colors.text, 11, 'left');

                            viz.drawDraggables();
                        }

                        VizEngine.createSlider(controls, 'sigma1', 0.3, 2.5, sigma1, 0.1, function(val) {
                            sigma1 = val;
                            draw();
                        });
                        VizEngine.createSlider(controls, 'sigma2', 0.3, 2.5, sigma2, 0.1, function(val) {
                            sigma2 = val;
                            draw();
                        });
                        VizEngine.createSlider(controls, 'rho', -0.95, 0.95, rhoVal, 0.05, function(val) {
                            rhoVal = val;
                            draw();
                        });

                        VizEngine.createButton(controls, 'Reset', function() {
                            sigma1 = 1; sigma2 = 1; rhoVal = 0.5;
                            center.x = 0; center.y = 0;
                            draw();
                        });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Let \\((X, Y)^T \\sim N_2(\\mathbf{0}, \\begin{pmatrix}1 & \\rho \\\\ \\rho & 1\\end{pmatrix})\\). Find the conditional distribution of \\(Y | X = x\\).',
                    hint: 'Apply Theorem 2.19 with \\(\\mu_1 = \\mu_2 = 0\\), \\(\\sigma_1 = \\sigma_2 = 1\\).',
                    solution: '\\(Y | X = x \\sim N(\\rho x, 1 - \\rho^2)\\). The conditional mean is a linear function of \\(x\\) with slope \\(\\rho\\), and the conditional variance \\(1 - \\rho^2\\) does not depend on \\(x\\).'
                },
                {
                    question: 'Let \\(X_1, X_2 \\stackrel{iid}{\\sim} N(0,1)\\). Define \\(Y_1 = X_1 + X_2\\) and \\(Y_2 = X_1 - X_2\\). Show that \\(Y_1\\) and \\(Y_2\\) are independent.',
                    hint: 'Show that \\((Y_1, Y_2)^T\\) is MVN (as a linear transformation of MVN), then compute \\(\\operatorname{Cov}(Y_1, Y_2)\\) and use the "uncorrelated implies independent" property for MVN.',
                    solution: '\\((Y_1, Y_2)^T = \\begin{pmatrix}1 & 1 \\\\ 1 & -1\\end{pmatrix}(X_1, X_2)^T\\) is MVN. \\(\\operatorname{Cov}(Y_1, Y_2) = \\operatorname{Var}(X_1) - \\operatorname{Var}(X_2) = 1 - 1 = 0\\). Since uncorrelated MVN components are independent, \\(Y_1 \\perp Y_2\\).'
                },
                {
                    question: 'For \\(\\mathbf{X} \\sim N_p(\\boldsymbol{\\mu}, \\boldsymbol{\\Sigma})\\), show that \\(\\mathbf{a}^T \\mathbf{X} \\sim N(\\mathbf{a}^T \\boldsymbol{\\mu}, \\mathbf{a}^T \\boldsymbol{\\Sigma} \\mathbf{a})\\) for any fixed \\(\\mathbf{a} \\in \\mathbb{R}^p\\).',
                    hint: 'This is a special case of Theorem 2.18 (1) with \\(\\mathbf{A} = \\mathbf{a}^T\\) (a \\(1 \\times p\\) matrix) and \\(\\mathbf{b} = 0\\).',
                    solution: 'By Theorem 2.18, \\(\\mathbf{A}\\mathbf{X} + \\mathbf{b} \\sim N_q(\\mathbf{A}\\boldsymbol{\\mu} + \\mathbf{b}, \\mathbf{A}\\boldsymbol{\\Sigma}\\mathbf{A}^T)\\). Setting \\(\\mathbf{A} = \\mathbf{a}^T\\), \\(q=1\\), \\(\\mathbf{b}=0\\): \\(\\mathbf{a}^T\\mathbf{X} \\sim N(\\mathbf{a}^T\\boldsymbol{\\mu}, \\mathbf{a}^T\\boldsymbol{\\Sigma}\\mathbf{a})\\).'
                }
            ]
        },

        // ============================================================
        // Section 5: Transformations of Random Variables
        // ============================================================
        {
            id: 'ch02-sec05',
            title: 'Transformations of Random Variables',
            content: `
                <h2>Transformations of Random Variables 随机变量的变换</h2>
                <p>In probability theory and statistics, we frequently need to study the distribution of a random variable after it undergoes some function transformation. For example: if \\(X \\sim N(0,1)\\), what is the distribution of \\(X^2\\)? If \\(X, Y\\) are independent, what is the distribution of \\(X + Y\\)? The systematic answer to these questions relies on the <strong>change of variables</strong> (变量变换) technique.</p>

                <h3>CDF Method CDF 方法</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.21 (CDF Method)</div>
                    <div class="env-body">
                        <p>Given \\(Y = g(X)\\), find the distribution of \\(Y\\). The <strong>CDF method</strong>: first compute the CDF</p>
                        \\[F_Y(y) = P(Y \\leq y) = P(g(X) \\leq y),\\]
                        <p>then differentiate with respect to \\(y\\) to obtain the PDF: \\(f_Y(y) = F_Y'(y)\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2.22 (The \\(\\chi^2(1)\\) Distribution)</div>
                    <div class="env-body">
                        <p>Let \\(Z \\sim N(0,1)\\) and \\(Y = Z^2\\). For \\(y > 0\\):</p>
                        \\[F_Y(y) = P(Z^2 \\leq y) = P(-\\sqrt{y} \\leq Z \\leq \\sqrt{y}) = \\Phi(\\sqrt{y}) - \\Phi(-\\sqrt{y}) = 2\\Phi(\\sqrt{y}) - 1.\\]
                        <p>Differentiating:</p>
                        \\[f_Y(y) = 2\\phi(\\sqrt{y}) \\cdot \\frac{1}{2\\sqrt{y}} = \\frac{1}{\\sqrt{2\\pi y}} e^{-y/2}, \\quad y > 0.\\]
                        <p>This is exactly the density of the \\(\\chi^2(1) = \\text{Gamma}(1/2, 1/2)\\) distribution.</p>
                    </div>
                </div>

                <h3>PDF Transformation Theorem (Jacobian Method) PDF 变换定理（Jacobian 方法）</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.23 (Univariate Change of Variables)</div>
                    <div class="env-body">
                        <p>Let \\(X\\) have PDF \\(f_X(x)\\) and \\(Y = g(X)\\), where \\(g\\) is strictly monotone and differentiable on the region where \\(f_X > 0\\). Then</p>
                        \\[f_Y(y) = f_X(g^{-1}(y)) \\cdot \\left|\\frac{d}{dy} g^{-1}(y)\\right|.\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.24 (Bivariate Change of Variables — Jacobian)</div>
                    <div class="env-body">
                        <p>Let \\((X_1, X_2)\\) have joint PDF \\(f_{X_1, X_2}\\), and let the transformation \\((Y_1, Y_2) = (g_1(X_1,X_2), g_2(X_1,X_2))\\) be a one-to-one, continuously differentiable mapping. Let the inverse transformation be \\((X_1,X_2) = (h_1(Y_1,Y_2), h_2(Y_1,Y_2))\\), and the <strong>Jacobian determinant</strong> (Jacobian 行列式) be</p>
                        \\[J = \\det \\begin{pmatrix} \\frac{\\partial h_1}{\\partial y_1} & \\frac{\\partial h_1}{\\partial y_2} \\\\ \\frac{\\partial h_2}{\\partial y_1} & \\frac{\\partial h_2}{\\partial y_2} \\end{pmatrix}.\\]
                        <p>Then</p>
                        \\[f_{Y_1, Y_2}(y_1, y_2) = f_{X_1, X_2}(h_1(y_1,y_2), h_2(y_1,y_2)) \\cdot |J|.\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 2.25 (Box-Muller Transform)</div>
                    <div class="env-body">
                        <p>Let \\(U_1, U_2 \\stackrel{iid}{\\sim} \\text{Uniform}(0,1)\\). Define</p>
                        \\[Z_1 = \\sqrt{-2\\ln U_1} \\cos(2\\pi U_2), \\quad Z_2 = \\sqrt{-2\\ln U_1} \\sin(2\\pi U_2).\\]
                        <p>Using the Jacobian method, one can verify that \\(Z_1, Z_2 \\stackrel{iid}{\\sim} N(0,1)\\). This is the famous Box-Muller transform.</p>
                    </div>
                </div>

                <h3>Convolution Formula 卷积公式</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.26 (Distribution of the Sum of Independent Random Variables)</div>
                    <div class="env-body">
                        <p>If \\(X\\) and \\(Y\\) are independent and \\(Z = X + Y\\), then the PDF of \\(Z\\) is the convolution</p>
                        \\[f_Z(z) = \\int_{-\\infty}^{\\infty} f_X(x) f_Y(z - x) \\, dx = (f_X * f_Y)(z).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(Z = X + Y\\) and \\(W = X\\). The inverse transformation is \\(X = W\\), \\(Y = Z - W\\), with Jacobian \\(|J| = 1\\). Therefore</p>
                        \\[f_{Z,W}(z,w) = f_{X,Y}(w, z-w) = f_X(w)f_Y(z-w).\\]
                        <p>Integrating over \\(w\\) gives the marginal \\(f_Z(z) = \\int f_X(w)f_Y(z-w)\\,dw\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h3>Order Statistics 顺序统计量</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 2.27 (Order Statistics)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n\\) be iid random variables. Arranging them in non-decreasing order \\(X_{(1)} \\leq X_{(2)} \\leq \\cdots \\leq X_{(n)}\\), where \\(X_{(k)}\\) is called the \\(k\\)-th <strong>order statistic</strong> (顺序统计量).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 2.28 (Density of Order Statistics)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\stackrel{iid}{\\sim} f_X\\) with CDF \\(F_X\\). The PDF of the \\(k\\)-th order statistic is</p>
                        \\[f_{X_{(k)}}(x) = \\frac{n!}{(k-1)!(n-k)!} [F_X(x)]^{k-1} [1 - F_X(x)]^{n-k} f_X(x).\\]
                        <p>In particular, the CDFs of the minimum \\(X_{(1)}\\) and maximum \\(X_{(n)}\\) are</p>
                        \\[F_{X_{(1)}}(x) = 1 - [1 - F_X(x)]^n, \\qquad F_{X_{(n)}}(x) = [F_X(x)]^n.\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The combinatorial factor in the order statistic density has an intuitive interpretation: for \\(X_{(k)} = x\\), exactly \\(k-1\\) observations must fall in \\((-\\infty, x)\\) (probability \\(F(x)^{k-1}\\)), exactly \\(n-k\\) must fall in \\((x, \\infty)\\) (probability \\((1-F(x))^{n-k}\\)), and one must be at \\(x\\) (density \\(f(x)\\)). The multinomial coefficient accounts for the number of ways to assign these roles.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="transformation-viz"></div>

                <div class="viz-placeholder" data-viz="order-stats-viz"></div>
            `,
            visualizations: [
                {
                    id: 'transformation-viz',
                    title: 'Interactive: Random Variable Transformation Visualization',
                    description: 'Choose a transformation function g(x) and observe how the input PDF maps to the output PDF.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 400, scale: 40, originX: 60, originY: 200});
                        var transformType = 'square';

                        var transforms = {
                            'square': {
                                name: 'Y = X^2',
                                g: function(x) { return x * x; },
                                outputPDF: function(y) {
                                    if (y <= 0) return 0;
                                    // f_Y(y) = f_X(sqrt(y))/(2*sqrt(y)) + f_X(-sqrt(y))/(2*sqrt(y))
                                    var sqy = Math.sqrt(y);
                                    return (VizEngine.normalPDF(sqy) + VizEngine.normalPDF(-sqy)) / (2 * sqy);
                                },
                                xRange: [-3, 3],
                                yRange: [0, 6]
                            },
                            'exp': {
                                name: 'Y = e^X',
                                g: function(x) { return Math.exp(x); },
                                outputPDF: function(y) {
                                    if (y <= 0) return 0;
                                    // X ~ N(0,1), Y = e^X => lognormal
                                    return VizEngine.normalPDF(Math.log(y)) / y;
                                },
                                xRange: [-3, 3],
                                yRange: [0, 6]
                            },
                            'abs': {
                                name: 'Y = |X|',
                                g: function(x) { return Math.abs(x); },
                                outputPDF: function(y) {
                                    if (y < 0) return 0;
                                    return 2 * VizEngine.normalPDF(y);
                                },
                                xRange: [-3, 3],
                                yRange: [0, 4]
                            }
                        };

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var t = transforms[transformType];

                            // Left panel: input PDF
                            var panelW = 240, gap = 80;
                            // Draw input axes
                            viz.drawSegment(-3, 0, 3.5, 0, viz.colors.axis, 1);
                            viz.drawSegment(-3, 0, -3, 4, viz.colors.axis, 1);
                            // Input PDF (standard normal)
                            viz.drawFunction(function(x) { return VizEngine.normalPDF(x); }, -3.5, 3.5, viz.colors.blue, 2);
                            viz.shadeUnder(function(x) { return VizEngine.normalPDF(x); }, -3, 3, viz.colors.blue + '33');
                            viz.drawText('X ~ N(0,1)', 0, 4.2, viz.colors.blue, 13);
                            viz.drawText('x', 3.8, -0.3, viz.colors.text, 12);

                            // Right panel: output PDF
                            var rightOffset = 7;
                            viz.drawSegment(rightOffset, 0, rightOffset + 6.5, 0, viz.colors.axis, 1);
                            viz.drawSegment(rightOffset, 0, rightOffset, 4, viz.colors.axis, 1);
                            // Tick marks on right panel
                            for (var v = 1; v <= 5; v++) {
                                viz.drawSegment(rightOffset + v, -0.05, rightOffset + v, 0.05, viz.colors.text, 0.5);
                                viz.drawText(v.toString(), rightOffset + v, -0.3, viz.colors.text, 10);
                            }

                            viz.drawFunction(function(y) {
                                return t.outputPDF(y - rightOffset);
                            }, rightOffset + 0.01, rightOffset + 5.5, viz.colors.orange, 2);
                            viz.shadeUnder(function(y) {
                                return t.outputPDF(y - rightOffset);
                            }, rightOffset + 0.01, rightOffset + 5.5, viz.colors.orange + '33');
                            viz.drawText(t.name, rightOffset + 3, 4.2, viz.colors.orange, 13);
                            viz.drawText('y', rightOffset + 6.8, -0.3, viz.colors.text, 12);

                            // Arrow between panels
                            viz.drawVector(4, 2, rightOffset - 0.5, 2, viz.colors.green, 'g(x)', 2);
                        }

                        VizEngine.createButton(controls, 'Y = X^2', function() { transformType = 'square'; draw(); });
                        VizEngine.createButton(controls, 'Y = e^X', function() { transformType = 'exp'; draw(); });
                        VizEngine.createButton(controls, 'Y = |X|', function() { transformType = 'abs'; draw(); });

                        draw();
                        return viz;
                    }
                },
                {
                    id: 'order-stats-viz',
                    title: 'Interactive: Order Statistics Distribution',
                    description: 'Sample n values from Uniform(0,1) and observe the distribution of the k-th order statistic.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 380, scale: 100, originX: 60, originY: 310});
                        var n = 5, k = 1;
                        var nSim = 2000;

                        function orderStatPDF(x, n, k) {
                            if (x <= 0 || x >= 1) return 0;
                            // f_{X(k)}(x) = n! / ((k-1)!(n-k)!) * x^{k-1} * (1-x)^{n-k}
                            // This is Beta(k, n-k+1)
                            return VizEngine.betaPDF(x, k, n - k + 1);
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            // Axes
                            viz.drawSegment(0, 0, 5.2, 0, viz.colors.axis, 1.5);
                            viz.drawSegment(0, 0, 0, 2.8, viz.colors.axis, 1.5);
                            // Ticks
                            for (var t = 0; t <= 1; t += 0.2) {
                                viz.drawSegment(t, -0.02, t, 0.02, viz.colors.text, 1);
                                viz.drawText(t.toFixed(1), t, -0.1, viz.colors.text, 10);
                            }
                            viz.drawText('x', 5.4, -0.1, viz.colors.text, 12);

                            // Simulate
                            var orderSamples = [];
                            for (var sim = 0; sim < nSim; sim++) {
                                var sample = [];
                                for (var i = 0; i < n; i++) sample.push(Math.random());
                                sample.sort(function(a, b) { return a - b; });
                                orderSamples.push(sample[k - 1]);
                            }

                            // Histogram
                            var nBins = 30;
                            var bins = [];
                            for (var b = 0; b < nBins; b++) {
                                bins.push({x: b / nBins, width: 1 / nBins, height: 0});
                            }
                            for (var i = 0; i < orderSamples.length; i++) {
                                var idx = Math.min(Math.floor(orderSamples[i] * nBins), nBins - 1);
                                if (idx >= 0) bins[idx].height += 1;
                            }
                            for (var b = 0; b < nBins; b++) {
                                bins[b].height = bins[b].height / nSim / (1 / nBins);
                            }
                            viz.drawHistogram(bins, viz.colors.blue + '44', viz.colors.blue, 1);

                            // Theoretical PDF = Beta(k, n-k+1)
                            viz.drawFunction(function(x) { return orderStatPDF(x, n, k); }, 0.001, 0.999, viz.colors.orange, 2.5);

                            // Legend
                            viz.screenText('X_(k) from Uniform(0,1), n=' + n + ', k=' + k, viz.width / 2, 20, viz.colors.white, 14);
                            viz.screenText('Theoretical: Beta(' + k + ', ' + (n - k + 1) + ')', viz.width - 15, 40, viz.colors.orange, 12, 'right');
                            viz.screenText('Simulation (' + nSim + ' runs)', viz.width - 15, 58, viz.colors.blue, 12, 'right');
                        }

                        VizEngine.createSlider(controls, 'n', 2, 20, n, 1, function(val) {
                            n = Math.round(val);
                            if (k > n) k = n;
                            draw();
                        });
                        VizEngine.createSlider(controls, 'k', 1, 20, k, 1, function(val) {
                            k = Math.min(Math.round(val), n);
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
                    question: 'Let \\(X \\sim \\text{Exp}(\\lambda)\\). Use the CDF method to find the PDF of \\(Y = \\sqrt{X}\\).',
                    hint: 'Compute \\(F_Y(y) = P(\\sqrt{X} \\leq y) = P(X \\leq y^2)\\) for \\(y > 0\\), then differentiate.',
                    solution: 'For \\(y > 0\\): \\(F_Y(y) = F_X(y^2) = 1 - e^{-\\lambda y^2}\\). Differentiating: \\(f_Y(y) = 2\\lambda y \\, e^{-\\lambda y^2}\\) for \\(y > 0\\). This is a Weibull distribution with shape 2 and scale \\(1/\\sqrt{\\lambda}\\).'
                },
                {
                    question: 'Let \\(X, Y \\stackrel{iid}{\\sim} \\text{Exp}(1)\\). Find the PDF of \\(Z = X/(X+Y)\\) using the Jacobian method.',
                    hint: 'Set \\(Z = X/(X+Y)\\) and \\(W = X+Y\\). Find the inverse transform \\(X = ZW\\), \\(Y = W(1-Z)\\) and compute the Jacobian.',
                    solution: 'Let \\(Z = X/(X+Y)\\), \\(W = X+Y\\). Then \\(X = ZW\\), \\(Y = W(1-Z)\\). Jacobian: \\(|J| = \\left|\\det\\begin{pmatrix}W & Z \\\\ -W & 1-Z\\end{pmatrix}\\right| = W\\). Joint: \\(f_{Z,W}(z,w) = e^{-zw} \\cdot e^{-w(1-z)} \\cdot w = we^{-w}\\) for \\(0 < z < 1\\), \\(w > 0\\). Integrating out \\(w\\): \\(f_Z(z) = \\int_0^\\infty we^{-w}\\,dw = 1\\). So \\(Z \\sim \\text{Uniform}(0,1)\\).'
                },
                {
                    question: 'Let \\(X_1, \\ldots, X_n \\stackrel{iid}{\\sim} \\text{Uniform}(0, \\theta)\\). Find the CDF and PDF of \\(X_{(n)} = \\max(X_1, \\ldots, X_n)\\). Show that \\(X_{(n)}/\\theta \\sim \\text{Beta}(n, 1)\\).',
                    hint: 'Use \\(F_{X_{(n)}}(x) = [F_X(x)]^n = (x/\\theta)^n\\) for \\(0 \\leq x \\leq \\theta\\).',
                    solution: '\\(F_{X_{(n)}}(x) = (x/\\theta)^n\\) for \\(0 \\leq x \\leq \\theta\\). Differentiating: \\(f_{X_{(n)}}(x) = n x^{n-1}/\\theta^n\\). Setting \\(U = X_{(n)}/\\theta\\): \\(f_U(u) = nu^{n-1}\\) for \\(0 < u < 1\\), which is \\(\\text{Beta}(n,1)\\).'
                }
            ]
        }
    ]
});

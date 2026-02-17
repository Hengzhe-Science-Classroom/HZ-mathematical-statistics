window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch14',
    number: 14,
    title: '非参数方法',
    subtitle: 'Nonparametric Methods',
    sections: [
        // ===== Section 1: 秩检验 (Rank-Based Tests) =====
        {
            id: 'ch14-sec01',
            title: '秩检验',
            content: `
                <h2>秩检验 Rank-Based Tests</h2>

                <p>参数检验（如 \\\\(t\\\\) 检验、\\\\(F\\\\) 检验）依赖于对总体分布的假设，通常要求正态性。
                当这些假设不成立时，<strong>非参数方法</strong>提供了一类不依赖分布形式的替代方案。
                非参数检验的核心思想是用数据的<strong>秩 (rank)</strong>代替原始观测值，从而消除分布假设。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.1 (秩 Rank)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n\\\\) 为一组样本。将其从小到大排列为
                        \\\\(X_{(1)} \\\\leq X_{(2)} \\\\leq \\\\cdots \\\\leq X_{(n)}\\\\)。
                        样本 \\\\(X_i\\\\) 的<strong>秩</strong> \\\\(R_i\\\\) 定义为 \\\\(X_i\\\\) 在排列中的位置：</p>
                        \\\\[R_i = \\\\#\\\\{j : X_j \\\\leq X_i\\\\}\\\\]
                        <p>当存在<strong>结 (ties)</strong>（即相同值）时，通常取<strong>平均秩</strong>。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>秩保留了数据的顺序信息但丢弃了具体数值。这使得基于秩的统计量对异常值和分布偏斜具有天然的<strong>稳健性 (robustness)</strong>。
                        正如"名次"比"分数"更能反映相对位置一样，秩反映的是观测值之间的相对大小关系。</p>
                    </div>
                </div>

                <h3>符号检验 (Sign Test)</h3>

                <p>符号检验是最简单的非参数检验，用于检验总体中位数。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.2 (符号检验)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n \\\\sim F\\\\)，检验 \\\\(H_0: \\\\operatorname{median}(F) = m_0\\\\)。
                        令 \\\\(S^+ = \\\\#\\\\{i : X_i > m_0\\\\}\\\\)。在 \\\\(H_0\\\\) 下（假设 \\\\(F\\\\) 在 \\\\(m_0\\\\) 处连续），</p>
                        \\\\[S^+ \\\\sim \\\\operatorname{Binomial}(n, 1/2)\\\\]
                        <p>拒绝域根据备择假设确定：双侧时拒绝当 \\\\(S^+\\\\) 太大或太小。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.3</div>
                    <div class="env-body">
                        <p>10 名学生的考试成绩为 72, 85, 63, 91, 78, 55, 88, 79, 82, 70。
                        检验中位数是否为 75。正号个数 \\\\(S^+ = \\\\#\\\\{85, 91, 78, 88, 79, 82\\\\} = 6\\\\)。
                        在 \\\\(H_0\\\\) 下 \\\\(S^+ \\\\sim \\\\operatorname{Bin}(10, 0.5)\\\\)，
                        \\\\(P(S^+ \\\\geq 6) = \\\\sum_{k=6}^{10} \\\\binom{10}{k} 0.5^{10} \\\\approx 0.377\\\\)，
                        双侧 \\\\(p\\\\)-值约 0.754，不拒绝 \\\\(H_0\\\\)。</p>
                    </div>
                </div>

                <h3>Wilcoxon 符号秩检验 (Signed-Rank Test)</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.4 (Wilcoxon 符号秩检验)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n\\\\) 来自关于 \\\\(m_0\\\\) 对称的连续分布 \\\\(F\\\\)。
                        检验 \\\\(H_0: m_0 = 0\\\\)（即 \\\\(F\\\\) 关于 0 对称）。</p>
                        <ol>
                            <li>计算 \\\\(|X_i|\\\\) 并对其排秩，得到秩 \\\\(R_i^*\\\\)。</li>
                            <li>Wilcoxon 符号秩统计量为
                            \\\\[W^+ = \\\\sum_{i: X_i > 0} R_i^*\\\\]
                            即正值样本的秩之和。</li>
                        </ol>
                        <p>在 \\\\(H_0\\\\) 下，\\\\(\\\\mathbb{E}[W^+] = n(n+1)/4\\\\)，\\\\(\\\\operatorname{Var}(W^+) = n(n+1)(2n+1)/24\\\\)。
                        当 \\\\(n\\\\) 较大时，\\\\(W^+\\\\) 近似正态。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.5 (Wilcoxon 符号秩检验的渐近正态性)</div>
                    <div class="env-body">
                        <p>在 \\\\(H_0\\\\) 下，当 \\\\(n \\\\to \\\\infty\\\\) 时，</p>
                        \\\\[Z = \\\\frac{W^+ - n(n+1)/4}{\\\\sqrt{n(n+1)(2n+1)/24}} \\\\xrightarrow{d} N(0, 1)\\\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p>在 \\\\(H_0\\\\) 下，每个 \\\\(X_i\\\\) 为正或为负的概率各为 \\\\(1/2\\\\)，且符号相互独立。
                        \\\\(W^+ = \\\\sum_{i=1}^n R_i^* \\\\cdot \\\\mathbf{1}(X_i > 0)\\\\) 是独立随机变量之和。
                        由 Lindeberg CLT，标准化后趋于标准正态分布。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h3>Wilcoxon 秩和检验 (Rank-Sum Test / Mann-Whitney U)</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.6 (Wilcoxon 秩和检验)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_m \\\\sim F\\\\) 和 \\\\(Y_1, \\\\ldots, Y_n \\\\sim G\\\\) 为两个独立样本。
                        检验 \\\\(H_0: F = G\\\\)。</p>
                        <ol>
                            <li>合并两组数据共 \\\\(N = m + n\\\\) 个，对全体排秩。</li>
                            <li>Wilcoxon 秩和统计量为第一组样本秩的总和：
                            \\\\[W = \\\\sum_{i=1}^m R_i\\\\]
                            其中 \\\\(R_i\\\\) 是 \\\\(X_i\\\\) 在合并样本中的秩。</li>
                        </ol>
                        <p>在 \\\\(H_0\\\\) 下，\\\\(\\\\mathbb{E}[W] = m(N+1)/2\\\\)，\\\\(\\\\operatorname{Var}(W) = mn(N+1)/12\\\\)。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Mann-Whitney U 统计量)</div>
                    <div class="env-body">
                        <p>Mann-Whitney \\\\(U\\\\) 统计量与 Wilcoxon 秩和统计量的关系为：</p>
                        \\\\[U = W - \\\\frac{m(m+1)}{2}\\\\]
                        <p>\\\\(U\\\\) 等于"第一组的值大于第二组的值"的配对数。两者是等价的检验。</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Wilcoxon 秩和检验严格来说检验的是 \\\\(F = G\\\\)，而非仅仅"位置相同"。
                        若两分布有不同的形状或方差，拒绝 \\\\(H_0\\\\) 不一定意味着均值（或中位数）不同。
                        在位置偏移模型 \\\\(G(x) = F(x - \\\\Delta)\\\\) 下，才可解读为 \\\\(\\\\Delta \\\\neq 0\\\\) 的检验。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="rank-assignment-viz"></div>
            `,
            visualizations: [
                {
                    id: 'rank-assignment-viz',
                    title: 'Interactive: 秩分配与 Wilcoxon 秩和检验',
                    description: '观察两组数据如何合并排秩，以及秩和统计量的计算过程',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 420,
                            originX: 50, originY: 340, scale: 40
                        });

                        var groupA = [2.1, 3.5, 4.8, 1.9, 5.2];
                        var groupB = [3.1, 6.3, 4.2, 7.1, 5.8];

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var combined = [];
                            for (var i = 0; i < groupA.length; i++) {
                                combined.push({val: groupA[i], group: 'A', idx: i});
                            }
                            for (var i = 0; i < groupB.length; i++) {
                                combined.push({val: groupB[i], group: 'B', idx: i});
                            }
                            combined.sort(function(a, b) { return a.val - b.val; });

                            // Assign ranks
                            for (var i = 0; i < combined.length; i++) {
                                combined[i].rank = i + 1;
                            }

                            // Title
                            viz.screenText('Rank Assignment Visualization', viz.width / 2, 20, viz.colors.white, 16);

                            // Draw Group A (original)
                            viz.screenText('Group A:', 50, 55, viz.colors.blue, 13, 'left');
                            for (var i = 0; i < groupA.length; i++) {
                                var px = 130 + i * 80;
                                ctx.fillStyle = viz.colors.blue + '44';
                                ctx.fillRect(px - 25, 42, 50, 26);
                                ctx.strokeStyle = viz.colors.blue;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(px - 25, 42, 50, 26);
                                viz.screenText(groupA[i].toFixed(1), px, 55, viz.colors.blue, 13);
                            }

                            // Draw Group B (original)
                            viz.screenText('Group B:', 50, 95, viz.colors.orange, 13, 'left');
                            for (var i = 0; i < groupB.length; i++) {
                                var px = 130 + i * 80;
                                ctx.fillStyle = viz.colors.orange + '44';
                                ctx.fillRect(px - 25, 82, 50, 26);
                                ctx.strokeStyle = viz.colors.orange;
                                ctx.lineWidth = 1;
                                ctx.strokeRect(px - 25, 82, 50, 26);
                                viz.screenText(groupB[i].toFixed(1), px, 95, viz.colors.orange, 13);
                            }

                            // Draw combined sorted
                            viz.screenText('Combined & Sorted:', 50, 145, viz.colors.white, 13, 'left');
                            var rankSumA = 0;
                            var rankSumB = 0;
                            for (var i = 0; i < combined.length; i++) {
                                var px = 40 + i * 50;
                                var color = combined[i].group === 'A' ? viz.colors.blue : viz.colors.orange;
                                ctx.fillStyle = color + '44';
                                ctx.fillRect(px - 22, 160, 44, 28);
                                ctx.strokeStyle = color;
                                ctx.lineWidth = 1.5;
                                ctx.strokeRect(px - 22, 160, 44, 28);
                                viz.screenText(combined[i].val.toFixed(1), px, 174, color, 11);

                                // Draw rank below
                                viz.screenText('R=' + combined[i].rank, px, 205, viz.colors.text, 11);

                                if (combined[i].group === 'A') {
                                    rankSumA += combined[i].rank;
                                } else {
                                    rankSumB += combined[i].rank;
                                }
                            }

                            // Draw results
                            var m = groupA.length;
                            var n = groupB.length;
                            var N = m + n;
                            var EW = m * (N + 1) / 2;
                            var VW = m * n * (N + 1) / 12;
                            var Z = (rankSumA - EW) / Math.sqrt(VW);

                            viz.screenText('Rank Sum Statistics', viz.width / 2, 245, viz.colors.white, 14);

                            viz.screenText('W_A = ' + rankSumA + '  (Group A rank sum)', viz.width / 2, 270, viz.colors.blue, 13);
                            viz.screenText('W_B = ' + rankSumB + '  (Group B rank sum)', viz.width / 2, 290, viz.colors.orange, 13);
                            viz.screenText('E[W_A] = m(N+1)/2 = ' + EW.toFixed(1), viz.width / 2, 315, viz.colors.text, 12);
                            viz.screenText('Var(W_A) = mn(N+1)/12 = ' + VW.toFixed(1), viz.width / 2, 335, viz.colors.text, 12);
                            viz.screenText('Z = (W_A - E[W_A]) / sqrt(Var) = ' + Z.toFixed(3), viz.width / 2, 360, viz.colors.green, 13);

                            var pval = 2 * (1 - VizEngine.normalCDF(Math.abs(Z)));
                            viz.screenText('Two-sided p-value = ' + pval.toFixed(4), viz.width / 2, 385, viz.colors.yellow, 13);
                        }

                        VizEngine.createButton(controls, 'Resample Group A', function() {
                            groupA = VizEngine.sampleArray(function() {
                                return Math.round((VizEngine.randomNormal(3.5, 1.5)) * 10) / 10;
                            }, 5);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Resample Group B', function() {
                            groupB = VizEngine.sampleArray(function() {
                                return Math.round((VizEngine.randomNormal(5.0, 1.5)) * 10) / 10;
                            }, 5);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Same Distribution', function() {
                            groupA = VizEngine.sampleArray(function() {
                                return Math.round((VizEngine.randomNormal(4, 1.5)) * 10) / 10;
                            }, 5);
                            groupB = VizEngine.sampleArray(function() {
                                return Math.round((VizEngine.randomNormal(4, 1.5)) * 10) / 10;
                            }, 5);
                            draw();
                        });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设有样本 3, 7, 2, 9, 5。用符号检验检验 \\\\(H_0: \\\\text{median} = 4\\\\) 对 \\\\(H_1: \\\\text{median} > 4\\\\)。计算 \\\\(S^+\\\\) 和 \\\\(p\\\\)-值。',
                    hint: '计算大于 4 的样本个数，然后用 Binomial(5, 0.5) 分布求概率。',
                    solution: '大于 4 的有 7, 9, 5，故 \\\\(S^+ = 3\\\\)。在 \\\\(H_0\\\\) 下 \\\\(S^+ \\\\sim \\\\text{Bin}(5, 0.5)\\\\)。\\\\(p = P(S^+ \\\\geq 3) = \\\\binom{5}{3}(0.5)^5 + \\\\binom{5}{4}(0.5)^5 + \\\\binom{5}{5}(0.5)^5 = (10 + 5 + 1)/32 = 0.5\\\\)。不拒绝 \\\\(H_0\\\\)。'
                },
                {
                    question: '解释为什么 Wilcoxon 符号秩检验比符号检验更有效率（power 更高）。',
                    hint: '考虑两种检验分别使用了数据的哪些信息。',
                    solution: '符号检验只利用了 \\\\(X_i - m_0\\\\) 的正负号（二值信息），而 Wilcoxon 符号秩检验还利用了 \\\\(|X_i - m_0|\\\\) 的相对大小（秩信息）。秩信息捕捉了偏离零的程度，因此在对称分布假设下检验功效更高。对于正态分布，Wilcoxon 的渐近相对效率 (ARE) 约为 \\\\(3/\\\\pi \\\\approx 0.955\\\\)。'
                },
                {
                    question: '两组独立样本 \\\\(X: 1.2, 3.4, 2.7\\\\) 和 \\\\(Y: 4.1, 5.3, 3.8\\\\)。计算 Wilcoxon 秩和统计量 \\\\(W\\\\) 和 Mann-Whitney \\\\(U\\\\) 统计量。',
                    hint: '先合并排秩：1.2, 2.7, 3.4, 3.8, 4.1, 5.3。然后求 X 组的秩之和。',
                    solution: '合并排序：1.2(X), 2.7(X), 3.4(X), 3.8(Y), 4.1(Y), 5.3(Y)。X 组秩为 1, 2, 3，故 \\\\(W = 1 + 2 + 3 = 6\\\\)。Mann-Whitney \\\\(U = W - m(m+1)/2 = 6 - 3 \\\\cdot 4/2 = 0\\\\)。\\\\(U = 0\\\\) 意味着 X 的每个值都小于 Y 的每个值，暗示强烈的位置差异。'
                }
            ]
        },

        // ===== Section 2: 多样本非参数检验 (Multi-Sample Nonparametric Tests) =====
        {
            id: 'ch14-sec02',
            title: '多样本非参数检验',
            content: `
                <h2>多样本非参数检验 Multi-Sample Nonparametric Tests</h2>

                <p>当比较两组以上时，参数方法使用单因素 ANOVA（假设正态和等方差）。
                非参数替代方案是 <strong>Kruskal-Wallis 检验</strong>（独立样本）和 <strong>Friedman 检验</strong>（配对/重复测量）。</p>

                <h3>Kruskal-Wallis 检验</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.7 (Kruskal-Wallis 检验)</div>
                    <div class="env-body">
                        <p>设有 \\\\(k\\\\) 组独立样本，第 \\\\(j\\\\) 组样本量为 \\\\(n_j\\\\)，总量 \\\\(N = \\\\sum_{j=1}^k n_j\\\\)。
                        合并全部数据排秩，设第 \\\\(j\\\\) 组的秩和为 \\\\(R_j = \\\\sum_{i=1}^{n_j} R_{ji}\\\\)，
                        平均秩为 \\\\(\\\\bar{R}_j = R_j / n_j\\\\)。Kruskal-Wallis 统计量为：</p>
                        \\\\[H = \\\\frac{12}{N(N+1)} \\\\sum_{j=1}^{k} n_j \\\\left(\\\\bar{R}_j - \\\\frac{N+1}{2}\\\\right)^2\\\\]
                        <p>等价形式：</p>
                        \\\\[H = \\\\frac{12}{N(N+1)} \\\\sum_{j=1}^{k} \\\\frac{R_j^2}{n_j} - 3(N+1)\\\\]
                        <p>在 \\\\(H_0: F_1 = F_2 = \\\\cdots = F_k\\\\) 下，当各 \\\\(n_j\\\\) 充分大时，</p>
                        \\\\[H \\\\xrightarrow{d} \\\\chi^2_{k-1}\\\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Kruskal-Wallis 检验本质上是对秩做单因素 ANOVA。
                        如果各组的分布相同，那么秩在各组中应该均匀分布，
                        每组的平均秩应接近总体平均秩 \\\\((N+1)/2\\\\)。
                        \\\\(H\\\\) 统计量衡量各组平均秩偏离总平均秩的程度。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.8 (Kruskal-Wallis 与 ANOVA 的关系)</div>
                    <div class="env-body">
                        <p>Kruskal-Wallis 统计量 \\\\(H\\\\) 等价于对秩数据进行单因素 ANOVA 得到的 \\\\(F\\\\) 统计量的单调变换。
                        具体地，若对秩 \\\\(R_1, \\\\ldots, R_N\\\\) 按组做 ANOVA 得到 \\\\(F\\\\) 值，则</p>
                        \\\\[H = \\\\frac{(N-1) \\\\cdot F}{F \\\\cdot (k-1)/(N-k) + (N-k)/(k-1)}\\\\]
                        <p>（精确关系取决于具体参数化形式，但核心思想成立）。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.9</div>
                    <div class="env-body">
                        <p>三组数据：A = {2.1, 3.4, 1.8}，B = {5.2, 4.7, 6.1}，C = {3.9, 4.0, 3.5}。</p>
                        <p>合并排序：1.8(A), 2.1(A), 3.4(A), 3.5(C), 3.9(C), 4.0(C), 4.7(B), 5.2(B), 6.1(B)。</p>
                        <p>秩和：\\\\(R_A = 1+2+3 = 6\\\\)，\\\\(R_B = 7+8+9 = 24\\\\)，\\\\(R_C = 4+5+6 = 15\\\\)。</p>
                        <p>\\\\(H = \\\\frac{12}{9 \\\\cdot 10}\\\\left(\\\\frac{36}{3} + \\\\frac{576}{3} + \\\\frac{225}{3}\\\\right) - 30 = \\\\frac{12}{90} \\\\cdot 279 - 30 = 37.2 - 30 = 7.2\\\\)</p>
                        <p>在 \\\\(\\\\chi^2_2\\\\) 下，\\\\(P(\\\\chi^2_2 > 7.2) \\\\approx 0.027\\\\)，在 \\\\(\\\\alpha = 0.05\\\\) 下拒绝 \\\\(H_0\\\\)。</p>
                    </div>
                </div>

                <h3>Friedman 检验</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.10 (Friedman 检验)</div>
                    <div class="env-body">
                        <p>设有 \\\\(n\\\\) 个区组 (blocks)，每个区组内有 \\\\(k\\\\) 个处理。
                        <strong>在每个区组内</strong>对 \\\\(k\\\\) 个观测排秩（秩为 1 到 \\\\(k\\\\)）。
                        设第 \\\\(j\\\\) 个处理的秩和为 \\\\(R_j = \\\\sum_{i=1}^n R_{ij}\\\\)。
                        Friedman 统计量为：</p>
                        \\\\[Q = \\\\frac{12}{nk(k+1)} \\\\sum_{j=1}^{k} R_j^2 - 3n(k+1)\\\\]
                        <p>在 \\\\(H_0\\\\) 下（各处理效果相同），当 \\\\(n\\\\) 充分大时，\\\\(Q \\\\xrightarrow{d} \\\\chi^2_{k-1}\\\\)。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>Friedman 检验是非参数的"重复测量 ANOVA"。它适用于配对或区组设计，
                        如同一批受试者接受不同处理。
                        与 Kruskal-Wallis 不同，Friedman 在区组内排秩以消除区组效应。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="kruskal-wallis-viz"></div>
            `,
            visualizations: [
                {
                    id: 'kruskal-wallis-viz',
                    title: 'Interactive: Kruskal-Wallis 检验',
                    description: '观察多组数据的秩分布和 H 统计量',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 440,
                            originX: 80, originY: 380, scale: 50
                        });

                        var groups = [
                            VizEngine.sampleArray(function() { return VizEngine.randomNormal(3, 1); }, 8),
                            VizEngine.sampleArray(function() { return VizEngine.randomNormal(3, 1); }, 8),
                            VizEngine.sampleArray(function() { return VizEngine.randomNormal(3, 1); }, 8)
                        ];
                        var shift = [0, 0, 0];
                        var groupColors = [viz.colors.blue, viz.colors.orange, viz.colors.green];
                        var groupLabels = ['Group 1', 'Group 2', 'Group 3'];

                        function computeKW(groups) {
                            var combined = [];
                            for (var g = 0; g < groups.length; g++) {
                                for (var i = 0; i < groups[g].length; i++) {
                                    combined.push({val: groups[g][i] + shift[g], group: g});
                                }
                            }
                            combined.sort(function(a, b) { return a.val - b.val; });
                            for (var i = 0; i < combined.length; i++) {
                                combined[i].rank = i + 1;
                            }
                            // Handle ties: average rank
                            var i2 = 0;
                            while (i2 < combined.length) {
                                var j = i2;
                                while (j < combined.length && combined[j].val === combined[i2].val) j++;
                                if (j > i2 + 1) {
                                    var avgRank = 0;
                                    for (var t = i2; t < j; t++) avgRank += combined[t].rank;
                                    avgRank /= (j - i2);
                                    for (var t = i2; t < j; t++) combined[t].rank = avgRank;
                                }
                                i2 = j;
                            }
                            var N = combined.length;
                            var k = groups.length;
                            var rankSums = [];
                            for (var g = 0; g < k; g++) rankSums.push(0);
                            for (var i = 0; i < combined.length; i++) {
                                rankSums[combined[i].group] += combined[i].rank;
                            }
                            var H = 0;
                            for (var g = 0; g < k; g++) {
                                H += (rankSums[g] * rankSums[g]) / groups[g].length;
                            }
                            H = 12 / (N * (N + 1)) * H - 3 * (N + 1);
                            return {H: H, rankSums: rankSums, combined: combined, N: N, k: k};
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var result = computeKW(groups);

                            viz.screenText('Kruskal-Wallis Test', viz.width / 2, 20, viz.colors.white, 16);

                            // Draw number line
                            var lineY = 130;
                            var allVals = [];
                            for (var g = 0; g < groups.length; g++) {
                                for (var i = 0; i < groups[g].length; i++) {
                                    allVals.push(groups[g][i] + shift[g]);
                                }
                            }
                            var minV = Math.min.apply(null, allVals) - 0.5;
                            var maxV = Math.max.apply(null, allVals) + 0.5;
                            var range = maxV - minV;
                            if (range < 1) range = 1;
                            var lineLeft = 40;
                            var lineRight = viz.width - 40;
                            var lineW = lineRight - lineLeft;

                            function valToX(v) { return lineLeft + (v - minV) / range * lineW; }

                            // axis
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(lineLeft, lineY);
                            ctx.lineTo(lineRight, lineY);
                            ctx.stroke();

                            // ticks
                            var step = Math.pow(10, Math.floor(Math.log10(range)));
                            if (range / step < 3) step /= 2;
                            var tickStart = Math.ceil(minV / step) * step;
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var t = tickStart; t <= maxV; t += step) {
                                var tx = valToX(t);
                                ctx.beginPath();
                                ctx.moveTo(tx, lineY - 3);
                                ctx.lineTo(tx, lineY + 3);
                                ctx.stroke();
                                ctx.fillText(t.toFixed(1), tx, lineY + 5);
                            }

                            // Plot points with jitter by group
                            var offsets = [-18, 0, 18];
                            for (var g = 0; g < groups.length; g++) {
                                for (var i = 0; i < groups[g].length; i++) {
                                    var v = groups[g][i] + shift[g];
                                    var px = valToX(v);
                                    var py = lineY + offsets[g] + 35;
                                    ctx.beginPath();
                                    ctx.arc(px, py, 5, 0, Math.PI * 2);
                                    ctx.fillStyle = groupColors[g] + 'aa';
                                    ctx.fill();
                                    ctx.strokeStyle = groupColors[g];
                                    ctx.lineWidth = 1;
                                    ctx.stroke();
                                }
                            }

                            // Legend
                            for (var g = 0; g < 3; g++) {
                                var lx = 60 + g * 170;
                                ctx.fillStyle = groupColors[g];
                                ctx.beginPath();
                                ctx.arc(lx, 55, 5, 0, Math.PI * 2);
                                ctx.fill();
                                viz.screenText(groupLabels[g] + ' (n=' + groups[g].length + ')', lx + 10, 55, groupColors[g], 12, 'left');
                            }

                            // Rank display
                            var ry = 220;
                            viz.screenText('Rank Sums:', 50, ry, viz.colors.white, 13, 'left');
                            for (var g = 0; g < 3; g++) {
                                var meanRank = result.rankSums[g] / groups[g].length;
                                viz.screenText(groupLabels[g] + ': R = ' + result.rankSums[g].toFixed(1) + ', mean rank = ' + meanRank.toFixed(2),
                                    70, ry + 22 + g * 20, groupColors[g], 12, 'left');
                            }

                            // Draw bar chart of mean ranks
                            var barY = 310;
                            var barH = 80;
                            var barW = 60;
                            var barGap = 30;
                            var barStart = viz.width / 2 - (3 * barW + 2 * barGap) / 2;
                            var expectedMeanRank = (result.N + 1) / 2;
                            var maxMeanRank = 0;
                            for (var g = 0; g < 3; g++) {
                                var mr = result.rankSums[g] / groups[g].length;
                                if (mr > maxMeanRank) maxMeanRank = mr;
                            }
                            var barScale = barH / (maxMeanRank * 1.2);

                            // Expected line
                            var expLineY = barY - expectedMeanRank * barScale;
                            ctx.strokeStyle = viz.colors.yellow;
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath();
                            ctx.moveTo(barStart - 10, expLineY);
                            ctx.lineTo(barStart + 3 * barW + 2 * barGap + 10, expLineY);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            viz.screenText('E[R] = ' + expectedMeanRank.toFixed(1), barStart + 3 * barW + 2 * barGap + 15, expLineY, viz.colors.yellow, 10, 'left');

                            for (var g = 0; g < 3; g++) {
                                var mr = result.rankSums[g] / groups[g].length;
                                var bx = barStart + g * (barW + barGap);
                                var bh = mr * barScale;
                                ctx.fillStyle = groupColors[g] + '66';
                                ctx.fillRect(bx, barY - bh, barW, bh);
                                ctx.strokeStyle = groupColors[g];
                                ctx.lineWidth = 1.5;
                                ctx.strokeRect(bx, barY - bh, barW, bh);
                                viz.screenText(mr.toFixed(1), bx + barW / 2, barY - bh - 10, groupColors[g], 11);
                                viz.screenText('G' + (g + 1), bx + barW / 2, barY + 12, groupColors[g], 11);
                            }
                            viz.screenText('Mean Rank by Group', viz.width / 2, barY + 30, viz.colors.text, 11);

                            // Results
                            viz.screenText('H = ' + result.H.toFixed(3), viz.width / 2, 395, viz.colors.white, 14);
                            var df = result.k - 1;
                            // Approximate p-value using chi-squared
                            // P(chi2 > H) approximation
                            var pval = 1 - VizEngine.normalCDF(Math.sqrt(2 * result.H) - Math.sqrt(2 * df - 1));
                            if (result.H <= 0) pval = 1;
                            viz.screenText('df = ' + df + ',  approx p-value = ' + pval.toFixed(4), viz.width / 2, 415, viz.colors.text, 12);
                            if (pval < 0.05) {
                                viz.screenText('Reject H0 at alpha=0.05', viz.width / 2, 433, viz.colors.red, 12);
                            } else {
                                viz.screenText('Fail to reject H0 at alpha=0.05', viz.width / 2, 433, viz.colors.green, 12);
                            }
                        }

                        VizEngine.createSlider(controls, 'Group 2 shift', -3, 3, 0, 0.2, function(v) {
                            shift[1] = v;
                            draw();
                        });

                        VizEngine.createSlider(controls, 'Group 3 shift', -3, 3, 0, 0.2, function(v) {
                            shift[2] = v;
                            draw();
                        });

                        VizEngine.createButton(controls, 'Resample All', function() {
                            for (var g = 0; g < 3; g++) {
                                groups[g] = VizEngine.sampleArray(function() { return VizEngine.randomNormal(3, 1.2); }, 8);
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
                    question: '证明 Kruskal-Wallis 统计量 \\\\(H\\\\) 在只有 \\\\(k=2\\\\) 组时与 Wilcoxon 秩和检验等价。',
                    hint: '当 \\\\(k=2\\\\) 时，\\\\(R_2 = N(N+1)/2 - R_1\\\\)。将此代入 \\\\(H\\\\) 的公式并化简。',
                    solution: '当 \\\\(k = 2\\\\) 时，\\\\(R_1 + R_2 = N(N+1)/2\\\\)，所以 \\\\(R_2\\\\) 由 \\\\(R_1\\\\) 决定。代入 \\\\(H\\\\) 的公式后，\\\\(H\\\\) 是 \\\\(R_1\\\\)（即 Wilcoxon 秩和 \\\\(W\\\\)）的单调递增函数。具体地，\\\\(H = Z^2\\\\)，其中 \\\\(Z\\\\) 是 Wilcoxon 秩和统计量的标准化版本。因此 \\\\(H \\\\sim \\\\chi^2_1\\\\) 与 \\\\(Z \\\\sim N(0,1)\\\\) 给出的 \\\\(p\\\\)-值相同，两检验等价。'
                },
                {
                    question: '为什么 Friedman 检验要在区组内排秩而不是对全体数据排秩？',
                    hint: '考虑区组效应对全局秩的影响。',
                    solution: '如果直接对全体数据排秩，则区组间的系统差异会混入秩中，使得处理效应难以识别。在区组内排秩相当于消除了区组效应，只比较同一区组内不同处理的相对表现。这与参数方法中用区组因子消除区组变异的逻辑一致。'
                },
                {
                    question: '三个处理在 4 个区组中的观测值如下：区组 1: (5.2, 4.8, 6.1), 区组 2: (3.1, 2.7, 3.5), 区组 3: (7.0, 6.2, 7.3), 区组 4: (4.5, 4.1, 5.0)。计算 Friedman 统计量 \\\\(Q\\\\)。',
                    hint: '先在每个区组内排秩（1, 2, 3），然后对每个处理的秩求和，代入公式。',
                    solution: '区组内排秩：区组 1: (2, 1, 3)，区组 2: (2, 1, 3)，区组 3: (2, 1, 3)，区组 4: (2, 1, 3)。处理秩和：\\\\(R_1 = 8, R_2 = 4, R_3 = 12\\\\)。\\\\(Q = \\\\frac{12}{4 \\\\cdot 3 \\\\cdot 4}(64 + 16 + 144) - 3 \\\\cdot 4 \\\\cdot 4 = \\\\frac{12}{48} \\\\cdot 224 - 48 = 56 - 48 = 8\\\\)。在 \\\\(\\\\chi^2_2\\\\) 下 \\\\(P > 8\\\\) 约 0.018，拒绝 \\\\(H_0\\\\)。'
                }
            ]
        },

        // ===== Section 3: 核密度估计 (Kernel Density Estimation) =====
        {
            id: 'ch14-sec03',
            title: '核密度估计',
            content: `
                <h2>核密度估计 Kernel Density Estimation</h2>

                <p>非参数方法不仅用于检验，也可用于<strong>密度估计</strong>。
                核密度估计 (KDE) 是一种非参数方法，用于从数据中估计未知的概率密度函数。</p>

                <h3>从直方图到 KDE</h3>

                <p>直方图是最简单的密度估计，但它有明显的缺点：不连续、依赖于箱子的起点和宽度。
                KDE 通过在每个数据点处放置一个核函数来构造一个平滑的密度估计。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.11 (核密度估计)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n\\\\) 为来自未知密度 \\\\(f\\\\) 的 i.i.d. 样本。
                        <strong>核密度估计</strong>定义为：</p>
                        \\\\[\\\\hat{f}_h(x) = \\\\frac{1}{nh} \\\\sum_{i=1}^{n} K\\\\left(\\\\frac{x - X_i}{h}\\\\right)\\\\]
                        <p>其中 \\\\(K\\\\) 为<strong>核函数 (kernel)</strong>，满足 \\\\(\\\\int K(u)\\\\,du = 1\\\\)、\\\\(K(u) \\\\geq 0\\\\)，
                        \\\\(h > 0\\\\) 为<strong>带宽 (bandwidth)</strong>。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.12 (常用核函数)</div>
                    <div class="env-body">
                        <p><strong>Gaussian 核</strong>：\\\\(K(u) = \\\\frac{1}{\\\\sqrt{2\\\\pi}} e^{-u^2/2}\\\\)</p>
                        <p><strong>Epanechnikov 核</strong>：\\\\(K(u) = \\\\frac{3}{4}(1-u^2) \\\\cdot \\\\mathbf{1}(|u| \\\\leq 1)\\\\)</p>
                        <p><strong>Uniform 核</strong>（矩形核）：\\\\(K(u) = \\\\frac{1}{2} \\\\cdot \\\\mathbf{1}(|u| \\\\leq 1)\\\\)</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>想象在每个数据点处放一个"小山丘"（核函数），高度为 \\\\(1/(nh)\\\\)，宽度由 \\\\(h\\\\) 控制。
                        KDE 就是所有小山丘叠加的结果。带宽 \\\\(h\\\\) 控制平滑程度：
                        \\\\(h\\\\) 太小时每个数据点产生一个尖峰（<strong>欠平滑 undersmoothing</strong>），
                        \\\\(h\\\\) 太大时所有细节被模糊掉（<strong>过平滑 oversmoothing</strong>）。</p>
                    </div>
                </div>

                <h3>偏差-方差权衡</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.13 (KDE 的 MSE 分解)</div>
                    <div class="env-body">
                        <p>设 \\\\(f\\\\) 二阶可导，\\\\(K\\\\) 为对称核且 \\\\(\\\\int u^2 K(u)\\\\,du = \\\\kappa_2 < \\\\infty\\\\)，
                        \\\\(\\\\int K^2(u)\\\\,du = R(K) < \\\\infty\\\\)。则 KDE 在点 \\\\(x\\\\) 处的均方误差为：</p>
                        \\\\[\\\\operatorname{MSE}(\\\\hat{f}_h(x)) = \\\\frac{1}{4}\\\\kappa_2^2 h^4 [f''(x)]^2 + \\\\frac{R(K)}{nh} f(x) + o(h^4 + (nh)^{-1})\\\\]
                        <p>其中第一项是<strong>偏差的平方</strong>（与 \\\\(h^4\\\\) 成正比），第二项是<strong>方差</strong>（与 \\\\((nh)^{-1}\\\\) 成正比）。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p><strong>偏差</strong>：\\\\(\\\\mathbb{E}[\\\\hat{f}_h(x)] = \\\\int \\\\frac{1}{h} K\\\\left(\\\\frac{x-t}{h}\\\\right) f(t)\\\\,dt\\\\)。
                        令 \\\\(u = (x-t)/h\\\\)，Taylor 展开 \\\\(f(x - uh)\\\\) 到二阶：</p>
                        \\\\[\\\\mathbb{E}[\\\\hat{f}_h(x)] \\\\approx f(x) + \\\\frac{1}{2}h^2 \\\\kappa_2 f''(x)\\\\]
                        <p>故 \\\\(\\\\operatorname{Bias} \\\\approx \\\\frac{1}{2} h^2 \\\\kappa_2 f''(x)\\\\)。</p>
                        <p><strong>方差</strong>：\\\\(\\\\operatorname{Var}(\\\\hat{f}_h(x)) = \\\\frac{1}{n}\\\\operatorname{Var}\\\\left(\\\\frac{1}{h}K\\\\left(\\\\frac{x-X_1}{h}\\\\right)\\\\right) \\\\approx \\\\frac{R(K)}{nh} f(x)\\\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h3>最优带宽选择</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.14 (MISE 最优带宽)</div>
                    <div class="env-body">
                        <p>最小化积分均方误差 \\\\(\\\\operatorname{MISE} = \\\\int \\\\operatorname{MSE}(\\\\hat{f}_h(x))\\\\,dx\\\\)，
                        最优带宽为：</p>
                        \\\\[h^* = \\\\left(\\\\frac{R(K)}{\\\\kappa_2^2 R(f'')}\\\\right)^{1/5} n^{-1/5}\\\\]
                        <p>其中 \\\\(R(f'') = \\\\int [f''(x)]^2\\\\,dx\\\\)。对应的最优 MISE 收敛速率为 \\\\(O(n^{-4/5})\\\\)。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.15 (Silverman 经验法则)</div>
                    <div class="env-body">
                        <p>对 Gaussian 核，假设真实分布为 \\\\(N(\\\\mu, \\\\sigma^2)\\\\)，Silverman 建议：</p>
                        \\\\[h_{\\\\text{Silverman}} = 1.06 \\\\cdot \\\\hat{\\\\sigma} \\\\cdot n^{-1/5}\\\\]
                        <p>其中 \\\\(\\\\hat{\\\\sigma}\\\\) 为样本标准差。更稳健的版本使用
                        \\\\(\\\\hat{\\\\sigma} = \\\\min(\\\\text{sd}, \\\\text{IQR}/1.34)\\\\)。</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Silverman 法则基于正态参考分布，对多峰分布会过度平滑。
                        对于复杂分布，应使用交叉验证 (cross-validation) 选择带宽。
                        留一交叉验证 (LOOCV) 最小化
                        \\\\(\\\\operatorname{CV}(h) = \\\\int \\\\hat{f}_h^2 - \\\\frac{2}{n}\\\\sum_i \\\\hat{f}_{h,-i}(X_i)\\\\)，
                        其中 \\\\(\\\\hat{f}_{h,-i}\\\\) 是去掉第 \\\\(i\\\\) 个点后的 KDE。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Epanechnikov 核的最优性)</div>
                    <div class="env-body">
                        <p>在最小化 MISE 的意义下，Epanechnikov 核在所有非负核中是渐近最优的。
                        但不同核之间的效率差异很小（Gaussian 核的效率约为 Epanechnikov 的 95.1%），
                        因此实践中核的选择远不如带宽的选择重要。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="kde-bandwidth-viz"></div>
            `,
            visualizations: [
                {
                    id: 'kde-bandwidth-viz',
                    title: 'Interactive: KDE 带宽探索器',
                    description: '调节带宽 h，观察欠平滑与过平滑的效果',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 400,
                            originX: 60, originY: 330, scale: 55
                        });

                        // Generate mixture distribution sample
                        var n = 60;
                        var data = [];
                        for (var i = 0; i < n; i++) {
                            if (Math.random() < 0.4) {
                                data.push(VizEngine.randomNormal(1.5, 0.6));
                            } else {
                                data.push(VizEngine.randomNormal(4.0, 0.8));
                            }
                        }

                        var bandwidth = 0.4;
                        var kernelType = 'gaussian';

                        function gaussianKernel(u) {
                            return Math.exp(-0.5 * u * u) / Math.sqrt(2 * Math.PI);
                        }

                        function epanechnikovKernel(u) {
                            return Math.abs(u) <= 1 ? 0.75 * (1 - u * u) : 0;
                        }

                        function getKernel() {
                            return kernelType === 'gaussian' ? gaussianKernel : epanechnikovKernel;
                        }

                        function kde(x, h, kernel) {
                            var sum = 0;
                            for (var i = 0; i < data.length; i++) {
                                sum += kernel((x - data[i]) / h);
                            }
                            return sum / (data.length * h);
                        }

                        function trueDensity(x) {
                            return 0.4 * VizEngine.normalPDF(x, 1.5, 0.6) + 0.6 * VizEngine.normalPDF(x, 4.0, 0.8);
                        }

                        function silvermanBW() {
                            var sd = Math.sqrt(VizEngine.sampleVariance(data));
                            return 1.06 * sd * Math.pow(data.length, -0.2);
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Draw grid and axes
                            var xMin = -1;
                            var xMax = 7.5;
                            var yMax = 0.55;

                            // Custom axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            // x axis
                            var axisY = viz.originY;
                            var axisXLeft = viz.originX;
                            var axisXRight = viz.originX + xMax * viz.scale;
                            ctx.beginPath();
                            ctx.moveTo(axisXLeft - 10, axisY);
                            ctx.lineTo(axisXRight, axisY);
                            ctx.stroke();
                            // y axis
                            ctx.beginPath();
                            ctx.moveTo(viz.originX, axisY + 5);
                            ctx.lineTo(viz.originX, axisY - yMax * viz.scale - 10);
                            ctx.stroke();

                            // x ticks
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            for (var x = 0; x <= 7; x++) {
                                var sx = viz.originX + x * viz.scale;
                                ctx.beginPath();
                                ctx.moveTo(sx, axisY);
                                ctx.lineTo(sx, axisY + 4);
                                ctx.stroke();
                                ctx.fillText(x.toString(), sx, axisY + 6);
                            }

                            // y ticks
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'middle';
                            for (var y = 0.1; y <= yMax; y += 0.1) {
                                var sy = axisY - y * viz.scale;
                                ctx.beginPath();
                                ctx.moveTo(viz.originX - 4, sy);
                                ctx.lineTo(viz.originX, sy);
                                ctx.stroke();
                                ctx.fillText(y.toFixed(1), viz.originX - 6, sy);
                            }

                            // Draw data rug
                            for (var i = 0; i < data.length; i++) {
                                var sx = viz.originX + data[i] * viz.scale;
                                ctx.strokeStyle = viz.colors.text + '66';
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(sx, axisY);
                                ctx.lineTo(sx, axisY + 12);
                                ctx.stroke();
                            }

                            // Draw true density
                            var kernel = getKernel();
                            ctx.strokeStyle = viz.colors.yellow;
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([5, 3]);
                            ctx.beginPath();
                            var started = false;
                            for (var px = 0; px < viz.width; px += 1) {
                                var x = (px - viz.originX) / viz.scale;
                                var y = trueDensity(x);
                                var sy = axisY - y * viz.scale;
                                if (!started) { ctx.moveTo(px, sy); started = true; }
                                else ctx.lineTo(px, sy);
                            }
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Draw KDE
                            // Shade area
                            ctx.fillStyle = viz.colors.blue + '22';
                            ctx.beginPath();
                            ctx.moveTo(viz.originX, axisY);
                            for (var px = 0; px < viz.width; px += 1) {
                                var x = (px - viz.originX) / viz.scale;
                                var y = kde(x, bandwidth, kernel);
                                var sy = axisY - y * viz.scale;
                                ctx.lineTo(px, sy);
                            }
                            ctx.lineTo(viz.width, axisY);
                            ctx.closePath();
                            ctx.fill();

                            // KDE curve
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            started = false;
                            for (var px = 0; px < viz.width; px += 1) {
                                var x = (px - viz.originX) / viz.scale;
                                var y = kde(x, bandwidth, kernel);
                                var sy = axisY - y * viz.scale;
                                if (!started) { ctx.moveTo(px, sy); started = true; }
                                else ctx.lineTo(px, sy);
                            }
                            ctx.stroke();

                            // Legend
                            ctx.setLineDash([5, 3]);
                            ctx.strokeStyle = viz.colors.yellow;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(380, 20);
                            ctx.lineTo(410, 20);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            viz.screenText('True density', 415, 20, viz.colors.yellow, 11, 'left');

                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(380, 38);
                            ctx.lineTo(410, 38);
                            ctx.stroke();
                            viz.screenText('KDE', 415, 38, viz.colors.blue, 11, 'left');

                            // Info
                            var silv = silvermanBW();
                            viz.screenText('h = ' + bandwidth.toFixed(3) + '   (Silverman: ' + silv.toFixed(3) + ')', viz.width / 2, 16, viz.colors.white, 13);
                            viz.screenText('n = ' + data.length + ',  Kernel: ' + kernelType, viz.width / 2, 365, viz.colors.text, 11);
                        }

                        VizEngine.createSlider(controls, 'Bandwidth h', 0.05, 2.0, 0.4, 0.01, function(v) {
                            bandwidth = v;
                            draw();
                        });

                        VizEngine.createButton(controls, 'Gaussian Kernel', function() {
                            kernelType = 'gaussian';
                            draw();
                        });

                        VizEngine.createButton(controls, 'Epanechnikov Kernel', function() {
                            kernelType = 'epanechnikov';
                            draw();
                        });

                        VizEngine.createButton(controls, 'Silverman BW', function() {
                            bandwidth = silvermanBW();
                            draw();
                        });

                        VizEngine.createButton(controls, 'New Sample', function() {
                            data = [];
                            for (var i = 0; i < n; i++) {
                                if (Math.random() < 0.4) {
                                    data.push(VizEngine.randomNormal(1.5, 0.6));
                                } else {
                                    data.push(VizEngine.randomNormal(4.0, 0.8));
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
                    question: '证明 KDE 是一个合法的概率密度函数，即 \\\\(\\\\hat{f}_h(x) \\\\geq 0\\\\) 且 \\\\(\\\\int \\\\hat{f}_h(x)\\\\,dx = 1\\\\)。',
                    hint: '利用核函数 \\\\(K\\\\) 的性质和积分的线性性。',
                    solution: '由于 \\\\(K(u) \\\\geq 0\\\\)，每个 \\\\(\\\\frac{1}{nh} K\\\\left(\\\\frac{x - X_i}{h}\\\\right) \\\\geq 0\\\\)，所以 \\\\(\\\\hat{f}_h(x) \\\\geq 0\\\\)。积分：\\\\(\\\\int \\\\hat{f}_h(x)\\\\,dx = \\\\frac{1}{n} \\\\sum_{i=1}^n \\\\int \\\\frac{1}{h} K\\\\left(\\\\frac{x - X_i}{h}\\\\right) dx\\\\)。令 \\\\(u = (x - X_i)/h\\\\)，\\\\(dx = h\\\\,du\\\\)，每项变为 \\\\(\\\\int K(u)\\\\,du = 1\\\\)。所以 \\\\(\\\\int \\\\hat{f}_h = \\\\frac{1}{n} \\\\cdot n = 1\\\\)。'
                },
                {
                    question: '对于带宽 \\\\(h\\\\) 和样本量 \\\\(n\\\\)，KDE 的偏差和方差分别如何随 \\\\(h\\\\) 变化？由此解释偏差-方差权衡。',
                    hint: '回顾 Theorem 14.13 中 MSE 的两个组成部分。',
                    solution: '偏差 \\\\(\\\\approx \\\\frac{1}{2} h^2 \\\\kappa_2 f\'\'(x)\\\\)，随 \\\\(h\\\\) 增大而增大（过度平滑导致高偏差）。方差 \\\\(\\\\approx \\\\frac{R(K)}{nh} f(x)\\\\)，随 \\\\(h\\\\) 增大而减小（平滑降低了波动）。这构成经典的偏差-方差权衡。MSE 最优带宽 \\\\(h^* \\\\propto n^{-1/5}\\\\) 平衡两者，使 MISE 以 \\\\(O(n^{-4/5})\\\\) 的速率收敛。'
                },
                {
                    question: '对 \\\\(n = 100\\\\) 个标准正态样本，计算 Silverman 经验法则给出的带宽，并与 MISE 最优带宽比较。',
                    hint: '标准正态的标准差为 1，且 \\\\(R(\\\\phi\'\') = \\\\frac{3}{8\\\\sqrt{\\\\pi}}\\\\)（其中 \\\\(\\\\phi\\\\) 是标准正态密度）。',
                    solution: 'Silverman: \\\\(h = 1.06 \\\\cdot 1 \\\\cdot 100^{-1/5} = 1.06 \\\\cdot 0.3981 \\\\approx 0.422\\\\)。MISE 最优带宽（Gaussian 核估计标准正态）：\\\\(h^* = \\\\left(\\\\frac{R(K)}{\\\\kappa_2^2 R(f\'\')}\\\\right)^{1/5} n^{-1/5}\\\\)。对 Gaussian 核 \\\\(R(K) = 1/(2\\\\sqrt{\\\\pi})\\\\)，\\\\(\\\\kappa_2 = 1\\\\)，\\\\(R(f\'\') = 3/(8\\\\sqrt{\\\\pi})\\\\)，代入得 \\\\(h^* = (4/3)^{1/5} \\\\cdot 100^{-1/5} \\\\approx 1.06 \\\\cdot 0.398 \\\\approx 0.422\\\\)。两者一致，因为 Silverman 法则正是基于正态参考分布推导的。'
                }
            ]
        },

        // ===== Section 4: 排列检验与 Bootstrap 预览 =====
        {
            id: 'ch14-sec04',
            title: '排列检验与Bootstrap预览',
            content: `
                <h2>排列检验与 Bootstrap 预览 Permutation Tests & Bootstrap Preview</h2>

                <p>排列检验（置换检验）是另一类强大的非参数方法。它通过直接枚举或模拟获得零假设下统计量的分布，
                无需任何分布假设。</p>

                <h3>排列检验的原理</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.16 (排列检验)</div>
                    <div class="env-body">
                        <p>设两组样本 \\\\(\\\\mathbf{X} = (X_1, \\\\ldots, X_m)\\\\) 和 \\\\(\\\\mathbf{Y} = (Y_1, \\\\ldots, Y_n)\\\\)，
                        检验 \\\\(H_0: F_X = F_Y\\\\)。选择检验统计量 \\\\(T\\\\)（如两组均值之差 \\\\(\\\\bar{X} - \\\\bar{Y}\\\\)）。</p>
                        <p><strong>排列检验</strong>的步骤：</p>
                        <ol>
                            <li>计算观测统计量 \\\\(T_{\\\\text{obs}}\\\\)。</li>
                            <li>在 \\\\(H_0\\\\) 下，组标签是可交换的。将 \\\\(N = m + n\\\\) 个观测随机分配为大小 \\\\(m\\\\) 和 \\\\(n\\\\) 的两组。</li>
                            <li>对每种排列计算 \\\\(T\\\\)，得到<strong>排列零分布 (permutation null distribution)</strong>。</li>
                            <li>\\\\(p\\\\)-值 = 排列中 \\\\(|T| \\\\geq |T_{\\\\text{obs}}|\\\\) 的比例。</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.17 (排列检验的精确性)</div>
                    <div class="env-body">
                        <p>在 \\\\(H_0: F_X = F_Y\\\\) 下，排列检验的 \\\\(p\\\\)-值是<strong>精确的</strong>（exact），即对任意 \\\\(\\\\alpha \\\\in (0, 1)\\\\)，</p>
                        \\\\[P_{H_0}(p\\\\text{-value} \\\\leq \\\\alpha) \\\\leq \\\\alpha\\\\]
                        <p>这一性质不依赖任何分布假设，也不依赖渐近近似。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>在 \\\\(H_0\\\\) 下，所有 \\\\(N\\\\) 个观测是 i.i.d. 的，因此
                        \\\\((X_1, \\\\ldots, X_m, Y_1, \\\\ldots, Y_n)\\\\) 的联合分布关于任意置换不变。
                        观测到的分组只是 \\\\(\\\\binom{N}{m}\\\\) 种等概率排列之一，
                        因此 \\\\(T_{\\\\text{obs}}\\\\) 在排列分布中的位置是均匀随机的，
                        \\\\(p\\\\)-值在 \\\\([0,1]\\\\) 上（离散地）均匀分布，从而保证了 Type I 错误率的精确控制。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <h3>精确排列与 Monte Carlo 排列</h3>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p><strong>精确排列检验</strong>：枚举所有 \\\\(\\\\binom{N}{m}\\\\) 种排列，计算每种排列下的统计量。
                        当 \\\\(N\\\\) 小时可行，但组合数增长极快（如 \\\\(N = 20, m = 10\\\\) 时有 184,756 种排列）。</p>
                        <p><strong>Monte Carlo 排列检验</strong>：随机抽取 \\\\(B\\\\) 次排列（通常 \\\\(B = 10000\\\\)），
                        用蒙特卡洛比例近似 \\\\(p\\\\)-值：</p>
                        \\\\[\\\\hat{p} = \\\\frac{\\\\#\\\\{b : |T^{(b)}| \\\\geq |T_{\\\\text{obs}}|\\\\} + 1}{B + 1}\\\\]
                        <p>分子和分母加 1 是为了避免 \\\\(p = 0\\\\) 并保证保守性。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.18</div>
                    <div class="env-body">
                        <p>治疗组（5 人）和对照组（5 人）的恢复时间如下：</p>
                        <p>治疗组：3.2, 2.8, 4.1, 3.0, 2.5</p>
                        <p>对照组：5.1, 4.8, 6.2, 5.5, 4.3</p>
                        <p>\\\\(T_{\\\\text{obs}} = \\\\bar{X} - \\\\bar{Y} = 3.12 - 5.18 = -2.06\\\\)。</p>
                        <p>共有 \\\\(\\\\binom{10}{5} = 252\\\\) 种排列。通过枚举，仅 1 种排列的
                        \\\\(|T| \\\\geq 2.06\\\\)（即当前观测本身），故 \\\\(p \\\\approx 1/252 \\\\approx 0.004\\\\)。
                        强烈拒绝 \\\\(H_0\\\\)。</p>
                    </div>
                </div>

                <h3>与 Bootstrap 的联系</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.19 (Bootstrap 预览)</div>
                    <div class="env-body">
                        <p><strong>Bootstrap</strong>（第 17 章详述）是另一种基于重抽样的方法：</p>
                        <ul>
                            <li><strong>排列检验</strong>：在零假设下，对标签进行<strong>无放回</strong>重排列。</li>
                            <li><strong>Bootstrap</strong>：从经验分布 \\\\(\\\\hat{F}_n\\\\) 中<strong>有放回</strong>重抽样，用于估计统计量的分布。</li>
                        </ul>
                        <p>排列检验用于<strong>假设检验</strong>（生成零分布），而 Bootstrap 更多用于<strong>区间估计</strong>（构造置信区间）和<strong>标准误估计</strong>。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>排列检验的思想可以这样理解："如果两组真的没有区别，那么打乱组标签应该不影响统计量。"
                        我们通过大量打乱来看当前观测到的差异有多极端。
                        Bootstrap 的思想则是："用手头的样本模拟抽样过程，了解统计量本身的不确定性。"
                        两者都是"让数据自己说话"的非参数哲学的体现。</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>排列检验虽然"精确"，但它检验的 \\\\(H_0\\\\) 是<strong>所有分布特征完全相同</strong>，
                        不仅是均值或中位数。拒绝 \\\\(H_0\\\\) 可能是因为均值不同、方差不同或分布形状不同。
                        解释结果时需谨慎。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="permutation-test-viz"></div>

                <div class="viz-placeholder" data-viz="kde-vs-histogram-viz"></div>
            `,
            visualizations: [
                {
                    id: 'permutation-test-viz',
                    title: 'Interactive: 排列检验模拟器',
                    description: '动态生成排列零分布，观察 p-值的计算过程',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 420,
                            originX: 60, originY: 350, scale: 40
                        });

                        var groupX = [3.2, 2.8, 4.1, 3.0, 2.5];
                        var groupY = [5.1, 4.8, 6.2, 5.5, 4.3];
                        var permDiffs = [];
                        var totalPerms = 0;
                        var extremeCount = 0;

                        function computeObsDiff() {
                            return VizEngine.mean(groupX) - VizEngine.mean(groupY);
                        }

                        function doPermutations(B) {
                            var combined = groupX.concat(groupY);
                            var m = groupX.length;
                            for (var b = 0; b < B; b++) {
                                // Fisher-Yates shuffle
                                var perm = combined.slice();
                                for (var i = perm.length - 1; i > 0; i--) {
                                    var j = Math.floor(Math.random() * (i + 1));
                                    var tmp = perm[i];
                                    perm[i] = perm[j];
                                    perm[j] = tmp;
                                }
                                var xPerm = perm.slice(0, m);
                                var yPerm = perm.slice(m);
                                var diff = VizEngine.mean(xPerm) - VizEngine.mean(yPerm);
                                permDiffs.push(diff);
                                totalPerms++;
                                if (Math.abs(diff) >= Math.abs(computeObsDiff())) {
                                    extremeCount++;
                                }
                            }
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;
                            var obsDiff = computeObsDiff();

                            viz.screenText('Permutation Test', viz.width / 2, 18, viz.colors.white, 16);

                            // Show groups
                            viz.screenText('Group X:', 30, 48, viz.colors.blue, 12, 'left');
                            viz.screenText('[' + groupX.map(function(v) { return v.toFixed(1); }).join(', ') + ']', 100, 48, viz.colors.blue, 11, 'left');
                            viz.screenText('Group Y:', 30, 66, viz.colors.orange, 12, 'left');
                            viz.screenText('[' + groupY.map(function(v) { return v.toFixed(1); }).join(', ') + ']', 100, 66, viz.colors.orange, 11, 'left');
                            viz.screenText('T_obs = mean(X) - mean(Y) = ' + obsDiff.toFixed(3), viz.width / 2, 88, viz.colors.green, 13);

                            if (permDiffs.length === 0) {
                                viz.screenText('Click "Run Permutations" to start', viz.width / 2, 220, viz.colors.text, 14);
                                return;
                            }

                            // Build histogram of permutation differences
                            var histMin = Math.min.apply(null, permDiffs.concat([obsDiff])) - 0.3;
                            var histMax = Math.max.apply(null, permDiffs.concat([obsDiff])) + 0.3;
                            var nBins = 30;
                            var binWidth = (histMax - histMin) / nBins;
                            var counts = [];
                            for (var i = 0; i < nBins; i++) counts.push(0);
                            for (var i = 0; i < permDiffs.length; i++) {
                                var idx = Math.floor((permDiffs[i] - histMin) / binWidth);
                                if (idx >= 0 && idx < nBins) counts[idx]++;
                            }
                            var maxCount = Math.max.apply(null, counts);
                            if (maxCount === 0) maxCount = 1;

                            // Draw histogram
                            var plotLeft = 50;
                            var plotRight = viz.width - 30;
                            var plotTop = 110;
                            var plotBottom = 320;
                            var plotW = plotRight - plotLeft;
                            var plotH = plotBottom - plotTop;

                            function valToX(v) { return plotLeft + (v - histMin) / (histMax - histMin) * plotW; }
                            function countToY(c) { return plotBottom - (c / maxCount) * plotH; }

                            // histogram bars
                            for (var i = 0; i < nBins; i++) {
                                var bx = valToX(histMin + i * binWidth);
                                var bw = valToX(histMin + (i + 1) * binWidth) - bx;
                                var by = countToY(counts[i]);
                                var bh = plotBottom - by;

                                var binCenter = histMin + (i + 0.5) * binWidth;
                                var isExtreme = Math.abs(binCenter) >= Math.abs(obsDiff) - binWidth / 2;

                                ctx.fillStyle = isExtreme ? viz.colors.red + '88' : viz.colors.purple + '55';
                                ctx.fillRect(bx, by, bw, bh);
                                ctx.strokeStyle = isExtreme ? viz.colors.red : viz.colors.purple;
                                ctx.lineWidth = 0.5;
                                ctx.strokeRect(bx, by, bw, bh);
                            }

                            // Draw observed value line
                            var obsX = valToX(obsDiff);
                            ctx.strokeStyle = viz.colors.green;
                            ctx.lineWidth = 2;
                            ctx.setLineDash([6, 3]);
                            ctx.beginPath();
                            ctx.moveTo(obsX, plotTop);
                            ctx.lineTo(obsX, plotBottom);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            viz.screenText('T_obs', obsX, plotTop - 8, viz.colors.green, 11);

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(plotLeft, plotBottom);
                            ctx.lineTo(plotRight, plotBottom);
                            ctx.stroke();

                            // X labels
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            var tickStep = (histMax - histMin) / 5;
                            for (var v = histMin; v <= histMax; v += tickStep) {
                                var tx = valToX(v);
                                ctx.fillText(v.toFixed(1), tx, plotBottom + 4);
                            }

                            // Info
                            var pval = (extremeCount + 1) / (totalPerms + 1);
                            viz.screenText('Permutations: ' + totalPerms, viz.width / 2, 342, viz.colors.text, 12);
                            viz.screenText('|T| >= |T_obs|: ' + extremeCount + '    p-value = ' + pval.toFixed(4), viz.width / 2, 360, viz.colors.yellow, 13);
                            if (pval < 0.05) {
                                viz.screenText('Reject H0 (p < 0.05)', viz.width / 2, 380, viz.colors.red, 12);
                            } else {
                                viz.screenText('Fail to reject H0 (p >= 0.05)', viz.width / 2, 380, viz.colors.green, 12);
                            }
                            viz.screenText('Red bars: |T| >= |T_obs|', viz.width / 2, 400, viz.colors.red + 'aa', 10);
                        }

                        VizEngine.createButton(controls, 'Run 100 Permutations', function() {
                            doPermutations(100);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Run 1000 Permutations', function() {
                            doPermutations(1000);
                            draw();
                        });

                        VizEngine.createButton(controls, 'Reset', function() {
                            permDiffs = [];
                            totalPerms = 0;
                            extremeCount = 0;
                            draw();
                        });

                        VizEngine.createButton(controls, 'New Data (same dist)', function() {
                            groupX = VizEngine.sampleArray(function() { return VizEngine.randomNormal(4, 1); }, 5);
                            groupY = VizEngine.sampleArray(function() { return VizEngine.randomNormal(4, 1); }, 5);
                            permDiffs = [];
                            totalPerms = 0;
                            extremeCount = 0;
                            draw();
                        });

                        VizEngine.createButton(controls, 'New Data (diff dist)', function() {
                            groupX = VizEngine.sampleArray(function() { return VizEngine.randomNormal(3, 1); }, 5);
                            groupY = VizEngine.sampleArray(function() { return VizEngine.randomNormal(5, 1); }, 5);
                            permDiffs = [];
                            totalPerms = 0;
                            extremeCount = 0;
                            draw();
                        });

                        draw();
                        return viz;
                    }
                },
                {
                    id: 'kde-vs-histogram-viz',
                    title: 'Interactive: 非参数方法总览 — 直方图 vs KDE',
                    description: '比较直方图和 KDE 对同一组数据的密度估计',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {
                            width: 560, height: 380,
                            originX: 60, originY: 310, scale: 55
                        });

                        var n = 80;
                        var data = VizEngine.sampleArray(function() { return VizEngine.randomNormal(3, 1.2); }, n);
                        var nBinsParam = 15;
                        var bandwidth = 0.4;

                        function gaussianKernel(u) {
                            return Math.exp(-0.5 * u * u) / Math.sqrt(2 * Math.PI);
                        }

                        function kde(x, h) {
                            var sum = 0;
                            for (var i = 0; i < data.length; i++) {
                                sum += gaussianKernel((x - data[i]) / h);
                            }
                            return sum / (data.length * h);
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            var dMin = Math.min.apply(null, data) - 1;
                            var dMax = Math.max.apply(null, data) + 1;
                            var xRange = dMax - dMin;
                            var binW = xRange / nBinsParam;

                            // Build histogram bins
                            var counts = [];
                            for (var i = 0; i < nBinsParam; i++) counts.push(0);
                            for (var i = 0; i < data.length; i++) {
                                var idx = Math.floor((data[i] - dMin) / binW);
                                if (idx >= 0 && idx < nBinsParam) counts[idx]++;
                            }
                            // Convert to density
                            var densities = counts.map(function(c) { return c / (data.length * binW); });
                            var maxDens = Math.max.apply(null, densities);

                            // Find KDE max
                            var kdeMax = 0;
                            for (var px = 0; px < viz.width; px += 2) {
                                var x = (px - viz.originX) / viz.scale;
                                var y = kde(x, bandwidth);
                                if (y > kdeMax) kdeMax = y;
                            }
                            var yMax = Math.max(maxDens, kdeMax) * 1.15;

                            // Axes
                            var axisY = viz.originY;
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(viz.originX - 5, axisY);
                            ctx.lineTo(viz.originX + xRange * viz.scale + 10, axisY);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(viz.originX, axisY + 5);
                            ctx.lineTo(viz.originX, axisY - yMax * viz.scale - 10);
                            ctx.stroke();

                            // X ticks
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            var xStep = Math.ceil(xRange / 8);
                            for (var x = Math.ceil(dMin); x <= Math.floor(dMax); x += xStep) {
                                var sx = viz.originX + (x - dMin) * viz.scale;
                                ctx.beginPath();
                                ctx.moveTo(sx, axisY);
                                ctx.lineTo(sx, axisY + 4);
                                ctx.stroke();
                                ctx.fillText(x.toString(), sx, axisY + 6);
                            }

                            // Histogram bars
                            for (var i = 0; i < nBinsParam; i++) {
                                var bx = viz.originX + i * binW * viz.scale;
                                var bw = binW * viz.scale;
                                var bh = densities[i] * viz.scale;
                                ctx.fillStyle = viz.colors.purple + '44';
                                ctx.fillRect(bx, axisY - bh, bw, bh);
                                ctx.strokeStyle = viz.colors.purple + 'aa';
                                ctx.lineWidth = 1;
                                ctx.strokeRect(bx, axisY - bh, bw, bh);
                            }

                            // KDE curve
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            var started = false;
                            for (var px = viz.originX; px < viz.originX + xRange * viz.scale; px += 1) {
                                var x = dMin + (px - viz.originX) / viz.scale;
                                var y = kde(x, bandwidth);
                                var sy = axisY - y * viz.scale;
                                if (!started) { ctx.moveTo(px, sy); started = true; }
                                else ctx.lineTo(px, sy);
                            }
                            ctx.stroke();

                            // Rug plot
                            for (var i = 0; i < data.length; i++) {
                                var sx = viz.originX + (data[i] - dMin) * viz.scale;
                                ctx.strokeStyle = viz.colors.text + '55';
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(sx, axisY);
                                ctx.lineTo(sx, axisY + 10);
                                ctx.stroke();
                            }

                            // Legend
                            ctx.fillStyle = viz.colors.purple + '44';
                            ctx.fillRect(380, 12, 16, 12);
                            ctx.strokeStyle = viz.colors.purple + 'aa';
                            ctx.strokeRect(380, 12, 16, 12);
                            viz.screenText('Histogram', 400, 18, viz.colors.purple, 11, 'left');

                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2.5;
                            ctx.beginPath();
                            ctx.moveTo(380, 36);
                            ctx.lineTo(396, 36);
                            ctx.stroke();
                            viz.screenText('KDE', 400, 36, viz.colors.blue, 11, 'left');

                            viz.screenText('Histogram vs KDE', viz.width / 2, 16, viz.colors.white, 15);
                            viz.screenText('n = ' + data.length + ', bins = ' + nBinsParam + ', h = ' + bandwidth.toFixed(2), viz.width / 2, 345, viz.colors.text, 11);
                        }

                        VizEngine.createSlider(controls, 'Number of bins', 5, 40, 15, 1, function(v) {
                            nBinsParam = Math.round(v);
                            draw();
                        });

                        VizEngine.createSlider(controls, 'KDE bandwidth', 0.05, 2.0, 0.4, 0.01, function(v) {
                            bandwidth = v;
                            draw();
                        });

                        VizEngine.createButton(controls, 'New Sample (Normal)', function() {
                            data = VizEngine.sampleArray(function() { return VizEngine.randomNormal(3, 1.2); }, n);
                            draw();
                        });

                        VizEngine.createButton(controls, 'New Sample (Bimodal)', function() {
                            data = [];
                            for (var i = 0; i < n; i++) {
                                if (Math.random() < 0.5) data.push(VizEngine.randomNormal(1.5, 0.5));
                                else data.push(VizEngine.randomNormal(4.5, 0.7));
                            }
                            draw();
                        });

                        VizEngine.createButton(controls, 'New Sample (Skewed)', function() {
                            data = VizEngine.sampleArray(function() { return VizEngine.randomExponential(0.5) + 0.5; }, n);
                            draw();
                        });

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '说明排列检验与参数 \\\\(t\\\\) 检验的主要区别。在什么情况下你会优先选择排列检验？',
                    hint: '考虑分布假设、样本量和精确性。',
                    solution: '\\\\(t\\\\) 检验假设数据来自正态分布（或依赖大样本 CLT 近似），而排列检验无需任何分布假设，其 \\\\(p\\\\)-值是精确的。优先选择排列检验的情况：(1) 样本量很小，CLT 近似不可靠；(2) 数据明显偏离正态；(3) 需要精确的 \\\\(p\\\\)-值控制。但当正态假设成立且样本量较大时，\\\\(t\\\\) 检验更高效（power 更高）。'
                },
                {
                    question: '在 Monte Carlo 排列检验中，为什么 \\\\(p\\\\)-值公式用 \\\\((\\\\#\\\\{|T^{(b)}| \\\\geq |T_{\\\\text{obs}}|\\\\} + 1)/(B + 1)\\\\) 而非 \\\\(\\\\#/B\\\\)？',
                    hint: '考虑观测数据本身也是排列分布的一部分。',
                    solution: '观测到的数据排列本身就是 \\\\(H_0\\\\) 下所有可能排列之一。将其计入分子（+1）和分母（+1）保证了：(1) \\\\(p\\\\)-值永远不为 0，这是合理的——即使所有模拟排列的统计量都更小，也不能完全排除 \\\\(H_0\\\\)；(2) 保证了保守性，即实际 Type I 错误率不超过名义水平 \\\\(\\\\alpha\\\\)。这相当于把观测本身看作"第 0 次"排列。'
                },
                {
                    question: '排列检验和 Bootstrap 检验的核心区别是什么？各自的重抽样策略是什么？',
                    hint: '关键区别在于"有放回"与"无放回"以及各自的目标。',
                    solution: '排列检验：对标签进行<strong>无放回</strong>排列（保持组大小不变），目的是在 \\\\(H_0\\\\) 下生成零分布，用于假设检验。Bootstrap：从经验分布中<strong>有放回</strong>重抽样，目的是估计统计量的抽样分布，主要用于标准误估计和置信区间构造。排列检验利用 \\\\(H_0\\\\) 下的对称性/可交换性，Bootstrap 则直接模拟抽样过程而不需要 \\\\(H_0\\\\) 的结构。'
                }
            ]
        }
    ]
});

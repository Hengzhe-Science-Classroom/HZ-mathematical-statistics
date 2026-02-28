window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch14',
    number: 14,
    title: 'Nonparametric Methods',
    subtitle: 'Nonparametric Methods',
    sections: [
        // ===== Section 1: Rank-Based Tests =====
        {
            id: 'ch14-sec01',
            title: 'Rank-Based Tests',
            content: `
 <h2>Rank-Based Tests</h2>

                <p>Parametric tests (such as the \\(t\\)-test and \\(F\\)-test) rely on assumptions about the population distribution, typically requiring normality.
 When these assumptions do not hold, <strong>nonparametric methods </strong> provide alternatives that do not depend on the form of the distribution.
 The core idea of nonparametric tests is to replace raw observations with their <strong>ranks </strong>, thereby eliminating distributional assumptions.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.1 (Rank)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n\\) be a sample. Arrange them in increasing order as
                        \\(X_{(1)} \\leq X_{(2)} \\leq \\cdots \\leq X_{(n)}\\).
                        The <strong>rank</strong> \\(R_i\\) of sample \\(X_i\\) is defined as the position of \\(X_i\\) in the ordered arrangement:</p>
                        \\[R_i = \\#\\{j : X_j \\leq X_i\\}\\]
 <p>When there are <strong>ties </strong> (i.e., equal values), one typically uses <strong>average ranks</strong>.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
 <p>Ranks preserve the order information in the data but discard the actual numerical values. This gives rank-based statistics a natural <strong>robustness </strong> against outliers and distributional skewness.
                        Just as "placement" is more informative about relative position than "raw score," ranks reflect the relative magnitude among observations.</p>
                    </div>
                </div>

 <h3>Sign Test</h3>

 <p>The sign test is the simplest nonparametric test, used to test the population median.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.2 (Sign Test)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n \\sim F\\). Test \\(H_0: \\operatorname{median}(F) = m_0\\).
                        Let \\(S^+ = \\#\\{i : X_i > m_0\\}\\). Under \\(H_0\\) (assuming \\(F\\) is continuous at \\(m_0\\)),</p>
                        \\[S^+ \\sim \\operatorname{Binomial}(n, 1/2)\\]
                        <p>The rejection region is determined by the alternative hypothesis: for a two-sided test, reject when \\(S^+\\) is too large or too small.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.3</div>
                    <div class="env-body">
                        <p>The exam scores of 10 students are 72, 85, 63, 91, 78, 55, 88, 79, 82, 70.
                        Test whether the median is 75. The number of positive signs is \\(S^+ = \\#\\{85, 91, 78, 88, 79, 82\\} = 6\\).
                        Under \\(H_0\\), \\(S^+ \\sim \\operatorname{Bin}(10, 0.5)\\),
                        \\(P(S^+ \\geq 6) = \\sum_{k=6}^{10} \\binom{10}{k} 0.5^{10} \\approx 0.377\\),
                        so the two-sided \\(p\\)-value is approximately 0.754. We do not reject \\(H_0\\).</p>
                    </div>
                </div>

 <h3>Wilcoxon Signed-Rank Test Wilcoxon</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.4 (Wilcoxon Signed-Rank Test)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n\\) come from a continuous distribution \\(F\\) that is symmetric about \\(m_0\\).
                        Test \\(H_0: m_0 = 0\\) (i.e., \\(F\\) is symmetric about 0).</p>
                        <ol>
                            <li>Compute \\(|X_i|\\) and rank them, obtaining ranks \\(R_i^*\\).</li>
                            <li>The Wilcoxon signed-rank statistic is
                            \\[W^+ = \\sum_{i: X_i > 0} R_i^*\\]
                            i.e., the sum of ranks of the positive observations.</li>
                        </ol>
                        <p>Under \\(H_0\\), \\(\\mathbb{E}[W^+] = n(n+1)/4\\) and \\(\\operatorname{Var}(W^+) = n(n+1)(2n+1)/24\\).
                        For large \\(n\\), \\(W^+\\) is approximately normal.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.5 (Asymptotic Normality of the Wilcoxon Signed-Rank Test)</div>
                    <div class="env-body">
                        <p>Under \\(H_0\\), as \\(n \\to \\infty\\),</p>
                        \\[Z = \\frac{W^+ - n(n+1)/4}{\\sqrt{n(n+1)(2n+1)/24}} \\xrightarrow{d} N(0, 1)\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p>Under \\(H_0\\), each \\(X_i\\) is positive or negative with equal probability \\(1/2\\), and the signs are mutually independent.
                        \\(W^+ = \\sum_{i=1}^n R_i^* \\cdot \\mathbf{1}(X_i > 0)\\) is a sum of independent random variables.
                        By the Lindeberg CLT, the standardized version converges to a standard normal distribution.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

 <h3>Wilcoxon Rank-Sum Test (Mann-Whitney U) Wilcoxon</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.6 (Wilcoxon Rank-Sum Test)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_m \\sim F\\) and \\(Y_1, \\ldots, Y_n \\sim G\\) be two independent samples.
                        Test \\(H_0: F = G\\).</p>
                        <ol>
                            <li>Combine both groups into \\(N = m + n\\) observations and rank all of them together.</li>
                            <li>The Wilcoxon rank-sum statistic is the sum of ranks of the first group:
                            \\[W = \\sum_{i=1}^m R_i\\]
                            where \\(R_i\\) is the rank of \\(X_i\\) in the combined sample.</li>
                        </ol>
                        <p>Under \\(H_0\\), \\(\\mathbb{E}[W] = m(N+1)/2\\) and \\(\\operatorname{Var}(W) = mn(N+1)/12\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Mann-Whitney U Statistic)</div>
                    <div class="env-body">
                        <p>The Mann-Whitney \\(U\\) statistic is related to the Wilcoxon rank-sum statistic by:</p>
                        \\[U = W - \\frac{m(m+1)}{2}\\]
                        <p>\\(U\\) equals the number of pairs where a value from the first group exceeds a value from the second group. The two tests are equivalent.</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Strictly speaking, the Wilcoxon rank-sum test tests \\(F = G\\), not merely "equal locations."
                        If the two distributions differ in shape or variance, rejecting \\(H_0\\) does not necessarily imply different means (or medians).
                        Only under the location-shift model \\(G(x) = F(x - \\Delta)\\) can the test be interpreted as testing \\(\\Delta \\neq 0\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="rank-assignment-viz"></div>
            `,
            visualizations: [
                {
                    id: 'rank-assignment-viz',
 title:'Interactive: Rank Assignment & Wilcoxon Rank-Sum Test Wilcoxon',
 description:'Observe how two groups are combined and ranked, and how the rank-sum statistic is computed',
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

                            viz.screenText('W_A = ' + rankSumA + ' (Group A rank sum)', viz.width / 2, 270, viz.colors.blue, 13);
                            viz.screenText('W_B = ' + rankSumB + ' (Group B rank sum)', viz.width / 2, 290, viz.colors.orange, 13);
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
                    question: 'Given the sample 3, 7, 2, 9, 5, use the sign test to test \\(H_0: \\text{median} = 4\\) against \\(H_1: \\text{median} > 4\\). Compute \\(S^+\\) and the \\(p\\)-value.',
                    hint: 'Count the number of observations greater than 4, then use the Binomial(5, 0.5) distribution to compute the probability.',
                    solution: 'The values greater than 4 are 7, 9, 5, so \\(S^+ = 3\\). Under \\(H_0\\), \\(S^+ \\sim \\text{Bin}(5, 0.5)\\). \\(p = P(S^+ \\geq 3) = \\binom{5}{3}(0.5)^5 + \\binom{5}{4}(0.5)^5 + \\binom{5}{5}(0.5)^5 = (10 + 5 + 1)/32 = 0.5\\). We do not reject \\(H_0\\).'
                },
                {
                    question: 'Explain why the Wilcoxon signed-rank test has higher power than the sign test.',
                    hint: 'Consider what information each test uses from the data.',
                    solution: 'The sign test uses only the signs of \\(X_i - m_0\\) (binary information), whereas the Wilcoxon signed-rank test also uses the relative magnitudes of \\(|X_i - m_0|\\) (rank information). Rank information captures the degree of departure from zero, so the test has higher power under symmetric distributions. For normal distributions, the asymptotic relative efficiency (ARE) of the Wilcoxon signed-rank test is approximately \\(3/\\pi \\approx 0.955\\).'
                },
                {
                    question: 'Two independent samples are \\(X: 1.2, 3.4, 2.7\\) and \\(Y: 4.1, 5.3, 3.8\\). Compute the Wilcoxon rank-sum statistic \\(W\\) and the Mann-Whitney \\(U\\) statistic.',
                    hint: 'First combine and rank: 1.2, 2.7, 3.4, 3.8, 4.1, 5.3. Then sum the ranks of the X group.',
                    solution: 'Combined sorted: 1.2(X), 2.7(X), 3.4(X), 3.8(Y), 4.1(Y), 5.3(Y). The ranks of the X group are 1, 2, 3, so \\(W = 1 + 2 + 3 = 6\\). Mann-Whitney \\(U = W - m(m+1)/2 = 6 - 3 \\cdot 4/2 = 0\\). \\(U = 0\\) means every value in X is less than every value in Y, suggesting a strong location difference.'
                }
            ]
        },

        // ===== Section 2: Multi-Sample Nonparametric Tests =====
        {
            id: 'ch14-sec02',
            title: 'Multi-Sample Nonparametric Tests',
            content: `
 <h2>Multi-Sample Nonparametric Tests</h2>

                <p>When comparing more than two groups, the parametric approach uses one-way ANOVA (assuming normality and equal variances).
                The nonparametric alternatives are the <strong>Kruskal-Wallis test</strong> (for independent samples) and the <strong>Friedman test</strong> (for paired/repeated measures).</p>

 <h3>Kruskal-Wallis Test Kruskal-Wallis</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.7 (Kruskal-Wallis Test)</div>
                    <div class="env-body">
                        <p>Suppose there are \\(k\\) independent groups with sample sizes \\(n_j\\) for the \\(j\\)-th group and total size \\(N = \\sum_{j=1}^k n_j\\).
                        Combine all data and assign ranks. Let \\(R_j = \\sum_{i=1}^{n_j} R_{ji}\\) be the rank sum of the \\(j\\)-th group
                        and \\(\\bar{R}_j = R_j / n_j\\) be the mean rank. The Kruskal-Wallis statistic is:</p>
                        \\[H = \\frac{12}{N(N+1)} \\sum_{j=1}^{k} n_j \\left(\\bar{R}_j - \\frac{N+1}{2}\\right)^2\\]
                        <p>Equivalent form:</p>
                        \\[H = \\frac{12}{N(N+1)} \\sum_{j=1}^{k} \\frac{R_j^2}{n_j} - 3(N+1)\\]
                        <p>Under \\(H_0: F_1 = F_2 = \\cdots = F_k\\), when each \\(n_j\\) is sufficiently large,</p>
                        \\[H \\xrightarrow{d} \\chi^2_{k-1}\\]
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The Kruskal-Wallis test is essentially a one-way ANOVA on ranks.
                        If all groups share the same distribution, then ranks should be evenly spread across groups,
                        and each group's mean rank should be close to the overall mean rank \\((N+1)/2\\).
                        The \\(H\\) statistic measures how much the group mean ranks deviate from the overall mean rank.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.8 (Relationship Between Kruskal-Wallis and ANOVA)</div>
                    <div class="env-body">
                        <p>The Kruskal-Wallis statistic \\(H\\) is equivalent to a monotone transformation of the \\(F\\) statistic obtained from a one-way ANOVA on the ranks.
                        Specifically, if one performs ANOVA on the ranks \\(R_1, \\ldots, R_N\\) grouped by treatment and obtains an \\(F\\) value, then</p>
                        \\[H = \\frac{(N-1) \\cdot F}{F \\cdot (k-1)/(N-k) + (N-k)/(k-1)}\\]
                        <p>(The exact relationship depends on the specific parameterization, but the core idea holds.)</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.9</div>
                    <div class="env-body">
                        <p>Three groups: A = {2.1, 3.4, 1.8}, B = {5.2, 4.7, 6.1}, C = {3.9, 4.0, 3.5}.</p>
                        <p>Combined sorted: 1.8(A), 2.1(A), 3.4(A), 3.5(C), 3.9(C), 4.0(C), 4.7(B), 5.2(B), 6.1(B).</p>
                        <p>Rank sums: \\(R_A = 1+2+3 = 6\\), \\(R_B = 7+8+9 = 24\\), \\(R_C = 4+5+6 = 15\\).</p>
                        <p>\\(H = \\frac{12}{9 \\cdot 10}\\left(\\frac{36}{3} + \\frac{576}{3} + \\frac{225}{3}\\right) - 30 = \\frac{12}{90} \\cdot 279 - 30 = 37.2 - 30 = 7.2\\)</p>
                        <p>Under \\(\\chi^2_2\\), \\(P(\\chi^2_2 > 7.2) \\approx 0.027\\). At \\(\\alpha = 0.05\\), we reject \\(H_0\\).</p>
                    </div>
                </div>

 <h3>Friedman Test Friedman</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.10 (Friedman Test)</div>
                    <div class="env-body">
                        <p>Suppose there are \\(n\\) blocks, each containing \\(k\\) treatments.
                        <strong>Within each block</strong>, rank the \\(k\\) observations (ranks from 1 to \\(k\\)).
                        Let \\(R_j = \\sum_{i=1}^n R_{ij}\\) be the rank sum of the \\(j\\)-th treatment.
                        The Friedman statistic is:</p>
                        \\[Q = \\frac{12}{nk(k+1)} \\sum_{j=1}^{k} R_j^2 - 3n(k+1)\\]
                        <p>Under \\(H_0\\) (all treatments have the same effect), when \\(n\\) is sufficiently large, \\(Q \\xrightarrow{d} \\chi^2_{k-1}\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The Friedman test is the nonparametric counterpart of repeated-measures ANOVA. It is suitable for paired or block designs,
                        such as when the same set of subjects receives different treatments.
                        Unlike the Kruskal-Wallis test, the Friedman test ranks within blocks to eliminate the block effect.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="kruskal-wallis-viz"></div>
            `,
            visualizations: [
                {
                    id: 'kruskal-wallis-viz',
 title:'Interactive: Kruskal-Wallis Test Kruskal-Wallis',
 description:'Observe the rank distribution across multiple groups and the H statistic H',
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
                            var pval = 1 - VizEngine.normalCDF(Math.sqrt(2 * result.H) - Math.sqrt(2 * df - 1));
                            if (result.H <= 0) pval = 1;
                            viz.screenText('df = ' + df + ', approx p-value = ' + pval.toFixed(4), viz.width / 2, 415, viz.colors.text, 12);
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
                    question: 'Prove that the Kruskal-Wallis statistic \\(H\\) is equivalent to the Wilcoxon rank-sum test when there are only \\(k=2\\) groups.',
                    hint: 'When \\(k=2\\), \\(R_2 = N(N+1)/2 - R_1\\). Substitute this into the formula for \\(H\\) and simplify.',
                    solution: 'When \\(k = 2\\), \\(R_1 + R_2 = N(N+1)/2\\), so \\(R_2\\) is determined by \\(R_1\\). Substituting into the formula for \\(H\\), we see that \\(H\\) is a monotonically increasing function of \\(R_1\\) (which is the Wilcoxon rank-sum \\(W\\)). Specifically, \\(H = Z^2\\), where \\(Z\\) is the standardized version of the Wilcoxon rank-sum statistic. Therefore \\(H \\sim \\chi^2_1\\) and \\(Z \\sim N(0,1)\\) yield the same \\(p\\)-value, making the two tests equivalent.'
                },
                {
                    question: 'Why does the Friedman test rank within blocks rather than ranking all data globally?',
                    hint: 'Consider the effect of block-level systematic differences on the global ranks.',
                    solution: 'If one ranks all data globally, systematic differences between blocks would be mixed into the ranks, making it difficult to identify treatment effects. Ranking within blocks effectively removes the block effect and compares only the relative performance of different treatments within the same block. This is analogous to how parametric methods use a block factor to remove block variability.'
                },
                {
                    question: 'Three treatments are observed in 4 blocks as follows: Block 1: (5.2, 4.8, 6.1), Block 2: (3.1, 2.7, 3.5), Block 3: (7.0, 6.2, 7.3), Block 4: (4.5, 4.1, 5.0). Compute the Friedman statistic \\(Q\\).',
                    hint: 'First rank within each block (1, 2, 3), then sum the ranks for each treatment and substitute into the formula.',
                    solution: 'Within-block ranks: Block 1: (2, 1, 3), Block 2: (2, 1, 3), Block 3: (2, 1, 3), Block 4: (2, 1, 3). Treatment rank sums: \\(R_1 = 8, R_2 = 4, R_3 = 12\\). \\(Q = \\frac{12}{4 \\cdot 3 \\cdot 4}(64 + 16 + 144) - 3 \\cdot 4 \\cdot 4 = \\frac{12}{48} \\cdot 224 - 48 = 56 - 48 = 8\\). Under \\(\\chi^2_2\\), \\(P > 8\\) is approximately 0.018. We reject \\(H_0\\).'
                }
            ]
        },

        // ===== Section 3: Kernel Density Estimation =====
        {
            id: 'ch14-sec03',
            title: 'Kernel Density Estimation',
            content: `
 <h2>Kernel Density Estimation</h2>

 <p>Nonparametric methods are used not only for testing but also for <strong>density estimation </strong>.
 Kernel density estimation (KDE) is a nonparametric method for estimating an unknown probability density function from data.</p>

 <h3>From Histograms to KDE KDE</h3>

                <p>The histogram is the simplest density estimate, but it has obvious drawbacks: it is discontinuous and depends on the bin origin and width.
                KDE constructs a smooth density estimate by placing a kernel function at each data point.</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.11 (Kernel Density Estimator)</div>
                    <div class="env-body">
                        <p>Let \\(X_1, \\ldots, X_n\\) be an i.i.d. sample from an unknown density \\(f\\).
                        The <strong>kernel density estimator</strong> is defined as:</p>
                        \\[\\hat{f}_h(x) = \\frac{1}{nh} \\sum_{i=1}^{n} K\\left(\\frac{x - X_i}{h}\\right)\\]
 <p>where \\(K\\) is a <strong>kernel function </strong> satisfying \\(\\int K(u)\\,du = 1\\) and \\(K(u) \\geq 0\\),
 and \\(h> 0\\) is the <strong>bandwidth </strong>.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.12 (Common Kernel Functions)</div>
                    <div class="env-body">
                        <p><strong>Gaussian kernel</strong>: \\(K(u) = \\frac{1}{\\sqrt{2\\pi}} e^{-u^2/2}\\)</p>
                        <p><strong>Epanechnikov kernel</strong>: \\(K(u) = \\frac{3}{4}(1-u^2) \\cdot \\mathbf{1}(|u| \\leq 1)\\)</p>
                        <p><strong>Uniform kernel</strong> (rectangular): \\(K(u) = \\frac{1}{2} \\cdot \\mathbf{1}(|u| \\leq 1)\\)</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Imagine placing a small "bump" (kernel function) at each data point, with height \\(1/(nh)\\) and width controlled by \\(h\\).
                        The KDE is the sum of all these bumps. The bandwidth \\(h\\) controls the degree of smoothing:
                        when \\(h\\) is too small, each data point produces a spike (<strong>undersmoothing</strong>);
                        when \\(h\\) is too large, all detail is blurred out (<strong>oversmoothing</strong>).</p>
                    </div>
                </div>

 <h3>Bias-Variance Tradeoff-</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.13 (MSE Decomposition of KDE)</div>
                    <div class="env-body">
                        <p>Let \\(f\\) be twice differentiable, \\(K\\) be a symmetric kernel with \\(\\int u^2 K(u)\\,du = \\kappa_2 < \\infty\\)
                        and \\(\\int K^2(u)\\,du = R(K) < \\infty\\). Then the mean squared error of the KDE at point \\(x\\) is:</p>
                        \\[\\operatorname{MSE}(\\hat{f}_h(x)) = \\frac{1}{4}\\kappa_2^2 h^4 [f''(x)]^2 + \\frac{R(K)}{nh} f(x) + o(h^4 + (nh)^{-1})\\]
                        <p>The first term is the <strong>squared bias</strong> (proportional to \\(h^4\\)), and the second term is the <strong>variance</strong> (proportional to \\((nh)^{-1}\\)).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p><strong>Bias</strong>: \\(\\mathbb{E}[\\hat{f}_h(x)] = \\int \\frac{1}{h} K\\left(\\frac{x-t}{h}\\right) f(t)\\,dt\\).
                        Substituting \\(u = (x-t)/h\\) and applying a second-order Taylor expansion of \\(f(x - uh)\\):</p>
                        \\[\\mathbb{E}[\\hat{f}_h(x)] \\approx f(x) + \\frac{1}{2}h^2 \\kappa_2 f''(x)\\]
                        <p>Hence \\(\\operatorname{Bias} \\approx \\frac{1}{2} h^2 \\kappa_2 f''(x)\\).</p>
                        <p><strong>Variance</strong>: \\(\\operatorname{Var}(\\hat{f}_h(x)) = \\frac{1}{n}\\operatorname{Var}\\left(\\frac{1}{h}K\\left(\\frac{x-X_1}{h}\\right)\\right) \\approx \\frac{R(K)}{nh} f(x)\\).</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

 <h3>Optimal Bandwidth Selection</h3>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.14 (MISE-Optimal Bandwidth)</div>
                    <div class="env-body">
                        <p>Minimizing the mean integrated squared error \\(\\operatorname{MISE} = \\int \\operatorname{MSE}(\\hat{f}_h(x))\\,dx\\),
                        the optimal bandwidth is:</p>
                        \\[h^* = \\left(\\frac{R(K)}{\\kappa_2^2 R(f'')}\\right)^{1/5} n^{-1/5}\\]
                        <p>where \\(R(f'') = \\int [f''(x)]^2\\,dx\\). The corresponding optimal MISE converges at rate \\(O(n^{-4/5})\\).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.15 (Silverman's Rule of Thumb)</div>
                    <div class="env-body">
                        <p>For the Gaussian kernel, assuming the true distribution is \\(N(\\mu, \\sigma^2)\\), Silverman suggests:</p>
                        \\[h_{\\text{Silverman}} = 1.06 \\cdot \\hat{\\sigma} \\cdot n^{-1/5}\\]
                        <p>where \\(\\hat{\\sigma}\\) is the sample standard deviation. A more robust version uses
                        \\(\\hat{\\sigma} = \\min(\\text{sd}, \\text{IQR}/1.34)\\).</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Silverman's rule is based on a normal reference distribution and will oversmooth multimodal distributions.
                        For complex distributions, one should use cross-validation to select the bandwidth.
                        Leave-one-out cross-validation (LOOCV) minimizes
                        \\(\\operatorname{CV}(h) = \\int \\hat{f}_h^2 - \\frac{2}{n}\\sum_i \\hat{f}_{h,-i}(X_i)\\),
                        where \\(\\hat{f}_{h,-i}\\) is the KDE computed without the \\(i\\)-th observation.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Optimality of the Epanechnikov Kernel)</div>
                    <div class="env-body">
                        <p>In the sense of minimizing MISE, the Epanechnikov kernel is asymptotically optimal among all nonnegative kernels.
                        However, the efficiency difference between kernels is small (the Gaussian kernel achieves about 95.1% efficiency relative to Epanechnikov),
                        so in practice the choice of kernel matters far less than the choice of bandwidth.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="kde-bandwidth-viz"></div>
            `,
            visualizations: [
                {
                    id: 'kde-bandwidth-viz',
 title:'Interactive: KDE Bandwidth Explorer KDE',
 description:'Adjust the bandwidth h to observe the effects of undersmoothing and oversmoothingh',
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
                            viz.screenText('h = ' + bandwidth.toFixed(3) + ' (Silverman: ' + silv.toFixed(3) + ')', viz.width / 2, 16, viz.colors.white, 13);
                            viz.screenText('n = ' + data.length + ', Kernel: ' + kernelType, viz.width / 2, 365, viz.colors.text, 11);
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
                    question: 'Prove that the KDE is a valid probability density function, i.e., \\(\\hat{f}_h(x) \\geq 0\\) and \\(\\int \\hat{f}_h(x)\\,dx = 1\\).',
                    hint: 'Use the properties of the kernel function \\(K\\) and the linearity of integration.',
                    solution: 'Since \\(K(u) \\geq 0\\), each \\(\\frac{1}{nh} K\\left(\\frac{x - X_i}{h}\\right) \\geq 0\\), so \\(\\hat{f}_h(x) \\geq 0\\). For integration: \\(\\int \\hat{f}_h(x)\\,dx = \\frac{1}{n} \\sum_{i=1}^n \\int \\frac{1}{h} K\\left(\\frac{x - X_i}{h}\\right) dx\\). Substituting \\(u = (x - X_i)/h\\), \\(dx = h\\,du\\), each term becomes \\(\\int K(u)\\,du = 1\\). Therefore \\(\\int \\hat{f}_h = \\frac{1}{n} \\cdot n = 1\\).'
                },
                {
                    question: 'For bandwidth \\(h\\) and sample size \\(n\\), how do the bias and variance of the KDE change with \\(h\\)? Use this to explain the bias-variance tradeoff.',
                    hint: 'Recall the two components of the MSE in Theorem 14.13.',
                    solution: 'Bias \\(\\approx \\frac{1}{2} h^2 \\kappa_2 f\'\'(x)\\) increases with \\(h\\) (oversmoothing leads to high bias). Variance \\(\\approx \\frac{R(K)}{nh} f(x)\\) decreases with \\(h\\) (smoothing reduces fluctuations). This constitutes the classical bias-variance tradeoff. The MSE-optimal bandwidth \\(h^* \\propto n^{-1/5}\\) balances the two, yielding an MISE convergence rate of \\(O(n^{-4/5})\\).'
                },
                {
                    question: 'For \\(n = 100\\) standard normal samples, compute the bandwidth given by Silverman\'s rule of thumb and compare it with the MISE-optimal bandwidth.',
                    hint: 'The standard normal has standard deviation 1, and \\(R(\\phi\'\') = \\frac{3}{8\\sqrt{\\pi}}\\) (where \\(\\phi\\) is the standard normal density).',
                    solution: 'Silverman: \\(h = 1.06 \\cdot 1 \\cdot 100^{-1/5} = 1.06 \\cdot 0.3981 \\approx 0.422\\). MISE-optimal bandwidth (Gaussian kernel estimating a standard normal): \\(h^* = \\left(\\frac{R(K)}{\\kappa_2^2 R(f\'\')}\\right)^{1/5} n^{-1/5}\\). For the Gaussian kernel, \\(R(K) = 1/(2\\sqrt{\\pi})\\), \\(\\kappa_2 = 1\\), \\(R(f\'\') = 3/(8\\sqrt{\\pi})\\). Substituting gives \\(h^* = (4/3)^{1/5} \\cdot 100^{-1/5} \\approx 1.06 \\cdot 0.398 \\approx 0.422\\). The two agree because Silverman\'s rule is derived precisely from the normal reference distribution.'
                }
            ]
        },

        // ===== Section 4: Permutation Tests & Bootstrap Preview =====
        {
            id: 'ch14-sec04',
            title: 'Permutation Tests & Bootstrap Preview',
            content: `
 <h2>Permutation Tests & Bootstrap Preview Bootstrap</h2>

 <p>Permutation tests (also called permutation tests) are another powerful class of nonparametric methods. They obtain the distribution of the test statistic under the null hypothesis by direct enumeration or simulation,
                requiring no distributional assumptions.</p>

 <h3>Principle of Permutation Tests</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.16 (Permutation Test)</div>
                    <div class="env-body">
                        <p>Given two samples \\(\\mathbf{X} = (X_1, \\ldots, X_m)\\) and \\(\\mathbf{Y} = (Y_1, \\ldots, Y_n)\\),
                        test \\(H_0: F_X = F_Y\\). Choose a test statistic \\(T\\) (e.g., the difference in group means \\(\\bar{X} - \\bar{Y}\\)).</p>
                        <p>The <strong>permutation test</strong> proceeds as follows:</p>
                        <ol>
                            <li>Compute the observed statistic \\(T_{\\text{obs}}\\).</li>
                            <li>Under \\(H_0\\), the group labels are exchangeable. Randomly assign the \\(N = m + n\\) observations into groups of sizes \\(m\\) and \\(n\\).</li>
                            <li>Compute \\(T\\) for each permutation, obtaining the <strong>permutation null distribution</strong>.</li>
                            <li>\\(p\\)-value = the proportion of permutations where \\(|T| \\geq |T_{\\text{obs}}|\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.17 (Exactness of the Permutation Test)</div>
                    <div class="env-body">
                        <p>Under \\(H_0: F_X = F_Y\\), the \\(p\\)-value of the permutation test is <strong>exact</strong>, i.e., for any \\(\\alpha \\in (0, 1)\\),</p>
                        \\[P_{H_0}(p\\text{-value} \\leq \\alpha) \\leq \\alpha\\]
                        <p>This property does not rely on any distributional assumption or asymptotic approximation.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Under \\(H_0\\), all \\(N\\) observations are i.i.d., so
                        the joint distribution of \\((X_1, \\ldots, X_m, Y_1, \\ldots, Y_n)\\) is invariant under any permutation.
                        The observed grouping is just one of the \\(\\binom{N}{m}\\) equally likely permutations,
                        so \\(T_{\\text{obs}}\\) occupies a uniformly random position in the permutation distribution.
                        The \\(p\\)-value is therefore (discretely) uniformly distributed on \\([0,1]\\), guaranteeing exact control of the Type I error rate.</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

 <h3>Exact Permutation vs. Monte Carlo Permutation Monte Carlo</h3>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p><strong>Exact permutation test</strong>: Enumerate all \\(\\binom{N}{m}\\) permutations and compute the statistic for each.
                        This is feasible when \\(N\\) is small, but the number of combinations grows rapidly (e.g., \\(N = 20, m = 10\\) yields 184,756 permutations).</p>
                        <p><strong>Monte Carlo permutation test</strong>: Randomly draw \\(B\\) permutations (typically \\(B = 10000\\))
                        and approximate the \\(p\\)-value by the Monte Carlo proportion:</p>
                        \\[\\hat{p} = \\frac{\\#\\{b : |T^{(b)}| \\geq |T_{\\text{obs}}|\\} + 1}{B + 1}\\]
                        <p>Adding 1 to both the numerator and denominator avoids \\(p = 0\\) and ensures conservativeness.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.18</div>
                    <div class="env-body">
                        <p>The recovery times for a treatment group (5 subjects) and a control group (5 subjects) are:</p>
                        <p>Treatment: 3.2, 2.8, 4.1, 3.0, 2.5</p>
                        <p>Control: 5.1, 4.8, 6.2, 5.5, 4.3</p>
                        <p>\\(T_{\\text{obs}} = \\bar{X} - \\bar{Y} = 3.12 - 5.18 = -2.06\\).</p>
                        <p>There are \\(\\binom{10}{5} = 252\\) permutations in total. By enumeration, only 1 permutation has
                        \\(|T| \\geq 2.06\\) (namely the observed partition itself), so \\(p \\approx 1/252 \\approx 0.004\\).
                        We strongly reject \\(H_0\\).</p>
                    </div>
                </div>

 <h3>Connection to Bootstrap Bootstrap</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.19 (Bootstrap Preview)</div>
                    <div class="env-body">
                        <p>The <strong>Bootstrap</strong> (discussed in detail in Chapter 17) is another resampling-based method:</p>
                        <ul>
                            <li><strong>Permutation test</strong>: Permutes labels <strong>without replacement</strong> under the null hypothesis.</li>
                            <li><strong>Bootstrap</strong>: Resamples <strong>with replacement</strong> from the empirical distribution \\(\\hat{F}_n\\) to estimate the distribution of a statistic.</li>
                        </ul>
                        <p>Permutation tests are used for <strong>hypothesis testing</strong> (generating a null distribution), while the Bootstrap is primarily used for <strong>interval estimation</strong> (constructing confidence intervals) and <strong>standard error estimation</strong>.</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The idea behind permutation tests can be understood as follows: "If the two groups truly have no difference, then shuffling the group labels should not affect the statistic."
                        We perform many such shuffles to see how extreme the observed difference is.
                        The Bootstrap idea is: "Use the sample at hand to simulate the sampling process and learn about the uncertainty of the statistic itself."
                        Both embody the nonparametric philosophy of "letting the data speak for themselves."</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>Although the permutation test is "exact," the \\(H_0\\) it tests is that <strong>all distributional characteristics are identical</strong>,
                        not just the mean or the median. Rejecting \\(H_0\\) could be due to differences in means, variances, or distributional shapes.
                        One must interpret the results with care.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="permutation-test-viz"></div>

                <div class="viz-placeholder" data-viz="kde-vs-histogram-viz"></div>
            `,
            visualizations: [
                {
                    id: 'permutation-test-viz',
 title:'Interactive: Permutation Test Simulator',
 description:'Dynamically generate the permutation null distribution and observe how the p-value is computedp',
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
                            viz.screenText('|T| >= |T_obs|: ' + extremeCount + ' p-value = ' + pval.toFixed(4), viz.width / 2, 360, viz.colors.yellow, 13);
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
 title:'Interactive: Nonparametric Overview — Histogram vs KDEvs KDE',
 description:'Compare histogram and KDE density estimates for the same data KDE',
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
                    question: 'Describe the main differences between the permutation test and the parametric \\(t\\)-test. In what situations would you prefer the permutation test?',
                    hint: 'Consider distributional assumptions, sample size, and exactness.',
                    solution: 'The \\(t\\)-test assumes data come from a normal distribution (or relies on large-sample CLT approximation), whereas the permutation test requires no distributional assumption and its \\(p\\)-value is exact. One would prefer the permutation test when: (1) the sample size is very small so that CLT approximation is unreliable; (2) the data clearly deviate from normality; (3) exact \\(p\\)-value control is needed. However, when the normality assumption holds and the sample size is large, the \\(t\\)-test is more efficient (higher power).'
                },
                {
                    question: 'In a Monte Carlo permutation test, why is the \\(p\\)-value formula \\((\\#\\{|T^{(b)}| \\geq |T_{\\text{obs}}|\\} + 1)/(B + 1)\\) rather than \\(\\#/B\\)?',
                    hint: 'Consider that the observed data arrangement is itself one member of the permutation distribution.',
                    solution: 'The observed data arrangement is itself one of the equally likely permutations under \\(H_0\\). Including it in the numerator (+1) and denominator (+1) ensures: (1) the \\(p\\)-value is never zero, which is reasonable since we cannot completely rule out \\(H_0\\) even if all simulated permutation statistics are smaller; (2) conservativeness is guaranteed, so the actual Type I error rate does not exceed the nominal level \\(\\alpha\\). This is equivalent to treating the observation as the "0th" permutation.'
                },
                {
                    question: 'What is the core difference between the permutation test and the Bootstrap test? What is the resampling strategy of each?',
                    hint: 'The key distinction is "with replacement" vs. "without replacement" and their respective goals.',
                    solution: 'Permutation test: Permutes labels <strong>without replacement</strong> (keeping group sizes fixed). Its purpose is to generate the null distribution under \\(H_0\\) for hypothesis testing. Bootstrap: Resamples <strong>with replacement</strong> from the empirical distribution. Its purpose is to estimate the sampling distribution of a statistic, primarily for standard error estimation and confidence interval construction. The permutation test exploits the symmetry/exchangeability under \\(H_0\\), while the Bootstrap directly simulates the sampling process without requiring the structure of \\(H_0\\).'
                }
            ]
        }
    ]
});

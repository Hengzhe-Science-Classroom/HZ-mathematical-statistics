window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch05',
    number: 5,
    title: '充分统计量与完备性',
    subtitle: 'Sufficiency & Completeness',
    sections: [
        // ============================================================
        //  Section 1: 充分统计量
        // ============================================================
        {
            id: 'ch05-sec01',
            title: '充分统计量',
            content: `
                <h2>充分统计量</h2>

                <p>统计推断的核心问题之一是：给定一组观测数据 \\\\(X_1, \\\\ldots, X_n\\\\)，如何在不丢失关于参数 \\\\(\\\\theta\\\\) 信息的前提下对数据进行"压缩"？
                充分统计量正是回答这一问题的关键概念——它提取了数据中关于参数的全部信息。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.1 (充分统计量 / Sufficient Statistic)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n\\\\) 是来自参数族 \\\\(\\\\{f(x; \\\\theta) : \\\\theta \\\\in \\\\Theta\\\\}\\\\) 的随机样本。
                        统计量 \\\\(T = T(X_1, \\\\ldots, X_n)\\\\) 称为 \\\\(\\\\theta\\\\) 的<strong>充分统计量</strong>，
                        如果给定 \\\\(T = t\\\\) 后，样本 \\\\((X_1, \\\\ldots, X_n)\\\\) 的条件分布不依赖于 \\\\(\\\\theta\\\\)：</p>
                        \\\\[P(X_1 \\\\in A_1, \\\\ldots, X_n \\\\in A_n \\\\mid T = t) \\\\perp \\\\theta, \\\\quad \\\\forall t, \\\\forall A_i.\\\\]
                        <p>即条件分布与 \\\\(\\\\theta\\\\) 无关。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>可以把数据看作一段"信号"，参数 \\\\(\\\\theta\\\\) 是隐藏的"真相"。
                        充分统计量是对信号进行无损压缩的结果——虽然数据的维度降低了，
                        但关于 \\\\(\\\\theta\\\\) 的所有信息被完整保留。
                        一旦知道了 \\\\(T\\\\) 的值，原始数据的剩余变异就纯粹是"噪声"（与 \\\\(\\\\theta\\\\) 无关）。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.2 (Bernoulli 样本)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n \\\\stackrel{\\\\mathrm{iid}}{\\\\sim} \\\\operatorname{Bernoulli}(p)\\\\)。
                        令 \\\\(T = \\\\sum_{i=1}^n X_i\\\\)。
                        给定 \\\\(T = t\\\\) 后，样本 \\\\((X_1, \\\\ldots, X_n)\\\\) 的条件分布为所有使得
                        \\\\(\\\\sum x_i = t\\\\) 的 0-1 序列上的均匀分布（即从 \\\\(\\\\binom{n}{t}\\\\) 个序列中等概率选取），
                        这与 \\\\(p\\\\) 无关。因此 \\\\(T = \\\\sum X_i\\\\) 是 \\\\(p\\\\) 的充分统计量。</p>
                    </div>
                </div>

                <p>直接验证定义往往比较困难。Fisher-Neyman 因子分解定理提供了一个优美且实用的判定准则。</p>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.3 (Fisher-Neyman 因子分解定理)</div>
                    <div class="env-body">
                        <p>设总体的密度（或质量）函数为 \\\\(f(\\\\mathbf{x}; \\\\theta)\\\\)。
                        统计量 \\\\(T(\\\\mathbf{X})\\\\) 是 \\\\(\\\\theta\\\\) 的充分统计量，当且仅当存在非负函数 \\\\(g(t; \\\\theta)\\\\)
                        和 \\\\(h(\\\\mathbf{x})\\\\)（不依赖 \\\\(\\\\theta\\\\)），使得</p>
                        \\\\[f(\\\\mathbf{x}; \\\\theta) = g\\\\bigl(T(\\\\mathbf{x}); \\\\theta\\\\bigr) \\\\cdot h(\\\\mathbf{x}), \\\\quad \\\\forall \\\\mathbf{x}, \\\\forall \\\\theta.\\\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (离散情形概要)</div>
                    <div class="env-body">
                        <p><strong>充分性 (\\\\(\\\\Rightarrow\\\\))：</strong>
                        若 \\\\(T\\\\) 充分，令 \\\\(g(t; \\\\theta) = P_\\\\theta(T = t)\\\\)，
                        \\\\(h(\\\\mathbf{x}) = P(\\\\mathbf{X} = \\\\mathbf{x} \\\\mid T = T(\\\\mathbf{x}))\\\\)（不依赖 \\\\(\\\\theta\\\\)）。
                        则 \\\\(f(\\\\mathbf{x}; \\\\theta) = P_\\\\theta(\\\\mathbf{X} = \\\\mathbf{x}) = P_\\\\theta(T = T(\\\\mathbf{x})) \\\\cdot P(\\\\mathbf{X} = \\\\mathbf{x} \\\\mid T = T(\\\\mathbf{x})) = g(T(\\\\mathbf{x}); \\\\theta) \\\\cdot h(\\\\mathbf{x})\\\\)。</p>
                        <p><strong>必要性 (\\\\(\\\\Leftarrow\\\\))：</strong>
                        若因子分解成立，则
                        \\\\(P_\\\\theta(\\\\mathbf{X} = \\\\mathbf{x} \\\\mid T = t) = \\\\frac{f(\\\\mathbf{x}; \\\\theta)}{P_\\\\theta(T = t)} \\\\cdot \\\\mathbf{1}\\\\{T(\\\\mathbf{x}) = t\\\\}\\\\)。
                        分子 \\\\(= g(t; \\\\theta) h(\\\\mathbf{x})\\\\)，分母 \\\\(P_\\\\theta(T = t) = \\\\sum_{\\\\mathbf{y}: T(\\\\mathbf{y}) = t} g(t; \\\\theta) h(\\\\mathbf{y}) = g(t; \\\\theta) \\\\sum_{\\\\mathbf{y}: T(\\\\mathbf{y}) = t} h(\\\\mathbf{y})\\\\)，
                        故条件概率 \\\\(= h(\\\\mathbf{x}) / \\\\sum_{\\\\mathbf{y}: T(\\\\mathbf{y}) = t} h(\\\\mathbf{y})\\\\)，与 \\\\(\\\\theta\\\\) 无关。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.4 (正态充分统计量)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n \\\\stackrel{\\\\mathrm{iid}}{\\\\sim} N(\\\\mu, \\\\sigma^2)\\\\)，\\\\(\\\\theta = (\\\\mu, \\\\sigma^2)\\\\)。
                        联合密度为</p>
                        \\\\[f(\\\\mathbf{x}; \\\\mu, \\\\sigma^2) = \\\\frac{1}{(2\\\\pi\\\\sigma^2)^{n/2}} \\\\exp\\\\!\\\\left(-\\\\frac{1}{2\\\\sigma^2} \\\\sum_{i=1}^n (x_i - \\\\mu)^2\\\\right).\\\\]
                        <p>将指数部分展开：\\\\(\\\\sum(x_i - \\\\mu)^2 = \\\\sum x_i^2 - 2\\\\mu \\\\sum x_i + n\\\\mu^2\\\\)。
                        因此密度可分解为 \\\\(g\\\\bigl(\\\\sum x_i, \\\\sum x_i^2; \\\\mu, \\\\sigma^2\\\\bigr) \\\\cdot 1\\\\)。
                        故 \\\\(T = \\\\bigl(\\\\sum X_i, \\\\sum X_i^2\\\\bigr)\\\\) 是 \\\\((\\\\mu, \\\\sigma^2)\\\\) 的充分统计量，
                        等价地，\\\\(T = (\\\\bar{X}, S^2)\\\\) 也是充分统计量。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>因子分解定理的关键在于：似然函数中依赖 \\\\(\\\\theta\\\\) 的部分仅通过 \\\\(T(\\\\mathbf{x})\\\\) 与数据产生联系。
                        在实际应用中，写出似然函数后，识别哪些数据摘要出现在 \\\\(\\\\theta\\\\) 相关项中即可判定充分统计量。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="data-compression-viz"></div>
            `,
            visualizations: [
                {
                    id: 'data-compression-viz',
                    title: 'Interactive: 数据压缩与充分统计量',
                    description: '观察如何通过充分统计量将 n 个数据点压缩为低维摘要而不丢失参数信息',
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
                    question: '设 \\\\(X_1, \\\\ldots, X_n \\\\stackrel{\\\\mathrm{iid}}{\\\\sim} \\\\operatorname{Poisson}(\\\\lambda)\\\\)。利用因子分解定理证明 \\\\(T = \\\\sum_{i=1}^n X_i\\\\) 是 \\\\(\\\\lambda\\\\) 的充分统计量。',
                    hint: '写出联合质量函数 \\\\(\\\\prod_{i=1}^n \\\\frac{\\\\lambda^{x_i} e^{-\\\\lambda}}{x_i!}\\\\)，然后将其分解为只通过 \\\\(\\\\sum x_i\\\\) 依赖 \\\\(\\\\lambda\\\\) 的部分和不依赖 \\\\(\\\\lambda\\\\) 的部分。',
                    solution: '联合质量函数为 \\\\(f(\\\\mathbf{x}; \\\\lambda) = \\\\prod_{i=1}^n \\\\frac{\\\\lambda^{x_i} e^{-\\\\lambda}}{x_i!} = \\\\frac{\\\\lambda^{\\\\sum x_i} e^{-n\\\\lambda}}{\\\\prod_{i=1}^n x_i!} = \\\\underbrace{\\\\lambda^{t} e^{-n\\\\lambda}}_{g(t; \\\\lambda)} \\\\cdot \\\\underbrace{\\\\frac{1}{\\\\prod_{i=1}^n x_i!}}_{h(\\\\mathbf{x})}\\\\)，其中 \\\\(t = \\\\sum x_i\\\\)。由因子分解定理，\\\\(T = \\\\sum X_i\\\\) 是 \\\\(\\\\lambda\\\\) 的充分统计量。'
                },
                {
                    question: '设 \\\\(X_1, \\\\ldots, X_n \\\\stackrel{\\\\mathrm{iid}}{\\\\sim} \\\\operatorname{Uniform}(0, \\\\theta)\\\\)。证明 \\\\(T = X_{(n)} = \\\\max(X_1, \\\\ldots, X_n)\\\\) 是 \\\\(\\\\theta\\\\) 的充分统计量。',
                    hint: '联合密度为 \\\\(f(\\\\mathbf{x}; \\\\theta) = \\\\theta^{-n} \\\\prod_{i=1}^n \\\\mathbf{1}(0 \\\\le x_i \\\\le \\\\theta) = \\\\theta^{-n} \\\\mathbf{1}(x_{(n)} \\\\le \\\\theta) \\\\prod_{i=1}^n \\\\mathbf{1}(x_i \\\\ge 0)\\\\)。',
                    solution: '联合密度为 \\\\(f(\\\\mathbf{x}; \\\\theta) = \\\\theta^{-n} \\\\prod_{i=1}^n \\\\mathbf{1}(0 \\\\le x_i \\\\le \\\\theta) = \\\\underbrace{\\\\theta^{-n} \\\\mathbf{1}(x_{(n)} \\\\le \\\\theta)}_{g(x_{(n)}; \\\\theta)} \\\\cdot \\\\underbrace{\\\\prod_{i=1}^n \\\\mathbf{1}(x_i \\\\ge 0)}_{h(\\\\mathbf{x})}\\\\)。由因子分解定理，\\\\(T = X_{(n)}\\\\) 是 \\\\(\\\\theta\\\\) 的充分统计量。'
                },
                {
                    question: '证明充分统计量的函数一般不是充分统计量：给出一个例子说明若 \\\\(T\\\\) 是充分统计量，\\\\(g(T)\\\\) 不一定充分。',
                    hint: '考虑正态样本 \\\\(N(\\\\mu, \\\\sigma^2)\\\\) 中 \\\\(T = (\\\\bar{X}, S^2)\\\\) 充分，但只取 \\\\(g(T) = \\\\bar{X} + S^2\\\\) 是否仍然充分？',
                    solution: '设 \\\\(X_1, \\\\ldots, X_n \\\\sim N(\\\\mu, \\\\sigma^2)\\\\)，其中 \\\\(\\\\mu, \\\\sigma^2\\\\) 均未知。\\\\(T = (\\\\bar{X}, S^2)\\\\) 是 \\\\((\\\\mu, \\\\sigma^2)\\\\) 的充分统计量。但 \\\\(g(T) = \\\\bar{X} + S^2\\\\) 不是充分的，因为从 \\\\(g(T)\\\\) 的值无法同时还原 \\\\(\\\\bar{X}\\\\) 和 \\\\(S^2\\\\)，因此联合密度无法分解为仅通过 \\\\(g(T)\\\\) 依赖参数的形式。一般地，只有 \\\\(T\\\\) 的可逆函数才保持充分性。'
                }
            ]
        },

        // ============================================================
        //  Section 2: 最小充分统计量
        // ============================================================
        {
            id: 'ch05-sec02',
            title: '最小充分统计量',
            content: `
                <h2>最小充分统计量</h2>

                <p>充分统计量并非唯一的：整个样本 \\\\((X_1, \\\\ldots, X_n)\\\\) 本身就是一个（平凡的）充分统计量。
                我们自然希望找到"最精简"的充分统计量——最小充分统计量——它实现了数据的最大程度压缩。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.5 (最小充分统计量 / Minimal Sufficient Statistic)</div>
                    <div class="env-body">
                        <p>充分统计量 \\\\(T\\\\) 称为<strong>最小充分统计量</strong>，如果对任何其他充分统计量 \\\\(T'\\\\)，
                        存在函数 \\\\(g\\\\) 使得 \\\\(T = g(T')\\\\)（几乎处处成立）。</p>
                        <p>等价地，\\\\(T\\\\) 是所有充分统计量的函数——它是"最粗"的充分压缩。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>将所有统计量按"信息粗细"排序：原始数据最细，常数最粗。
                        充分统计量位于"不丢信息"的边界以上。
                        最小充分统计量就是这条边界上最粗的那一个——再粗就会丢失关于 \\\\(\\\\theta\\\\) 的信息。
                        你可以将其想象为"有损压缩的极限"——达到最大压缩率且零信息损失。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.6 (Lehmann-Scheffe 判定定理)</div>
                    <div class="env-body">
                        <p>设总体密度为 \\\\(f(x; \\\\theta)\\\\)。统计量 \\\\(T(\\\\mathbf{X})\\\\) 是最小充分统计量，
                        如果且仅如果对任意两个样本点 \\\\(\\\\mathbf{x}\\\\) 和 \\\\(\\\\mathbf{y}\\\\)，</p>
                        \\\\[\\\\frac{f(\\\\mathbf{x}; \\\\theta)}{f(\\\\mathbf{y}; \\\\theta)} \\\\text{ does not depend on } \\\\theta \\\\quad \\\\Longleftrightarrow \\\\quad T(\\\\mathbf{x}) = T(\\\\mathbf{y}).\\\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (思路概要)</div>
                    <div class="env-body">
                        <p>定义等价关系 \\\\(\\\\mathbf{x} \\\\sim \\\\mathbf{y}\\\\) 当且仅当似然比 \\\\(f(\\\\mathbf{x}; \\\\theta)/f(\\\\mathbf{y}; \\\\theta)\\\\) 不依赖 \\\\(\\\\theta\\\\)。
                        等价类上定义的映射自然给出一个统计量。可以验证：</p>
                        <p>(1) 这个统计量是充分的（由因子分解定理：在同一等价类中，似然之间仅差不依赖 \\\\(\\\\theta\\\\) 的常数）。</p>
                        <p>(2) 它是最小的：若 \\\\(T'\\\\) 也充分，则 \\\\(T'(\\\\mathbf{x}) = T'(\\\\mathbf{y})\\\\) 蕴含
                        \\\\(f(\\\\mathbf{x}; \\\\theta)/f(\\\\mathbf{y}; \\\\theta)\\\\) 不依赖 \\\\(\\\\theta\\\\)（因子分解给出这一点），
                        故 \\\\(T(\\\\mathbf{x}) = T(\\\\mathbf{y})\\\\)，即 \\\\(T\\\\) 是 \\\\(T'\\\\) 的函数。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.7 (正态分布的最小充分统计量)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n \\\\sim N(\\\\mu, \\\\sigma^2)\\\\)，参数 \\\\((\\\\mu, \\\\sigma^2)\\\\) 均未知。对两个样本点 \\\\(\\\\mathbf{x}, \\\\mathbf{y}\\\\)，
                        似然比为</p>
                        \\\\[\\\\frac{f(\\\\mathbf{x}; \\\\mu, \\\\sigma^2)}{f(\\\\mathbf{y}; \\\\mu, \\\\sigma^2)} = \\\\exp\\\\!\\\\left(-\\\\frac{1}{2\\\\sigma^2}\\\\bigl[\\\\sum x_i^2 - \\\\sum y_i^2 - 2\\\\mu(\\\\sum x_i - \\\\sum y_i)\\\\bigr]\\\\right).\\\\]
                        <p>此比值不依赖 \\\\((\\\\mu, \\\\sigma^2)\\\\) 当且仅当 \\\\(\\\\sum x_i = \\\\sum y_i\\\\) 且 \\\\(\\\\sum x_i^2 = \\\\sum y_i^2\\\\)。
                        因此 \\\\(T = \\\\bigl(\\\\sum X_i, \\\\sum X_i^2\\\\bigr)\\\\) 是最小充分统计量。</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>并非所有参数族都存在维度低于样本量的最小充分统计量。
                        例如，Cauchy 分布 \\\\(\\\\operatorname{Cauchy}(\\\\theta, 1)\\\\) 的最小充分统计量是整个顺序统计量
                        \\\\((X_{(1)}, \\\\ldots, X_{(n)})\\\\)——无法进一步压缩。
                        只有指数族才保证最小充分统计量的维度等于参数维度。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="statistics-hierarchy-viz"></div>
            `,
            visualizations: [
                {
                    id: 'statistics-hierarchy-viz',
                    title: 'Interactive: 统计量的信息层次',
                    description: '展示从原始数据到常数之间，各类统计量在"信息保留"维度上的层次关系',
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
                                { y: 60,  label: 'Raw Data (X1, ..., Xn)',       color: viz.colors.blue,   desc: 'All information, no compression' },
                                { y: 120, label: 'Order Statistics (X(1),...,X(n))', color: viz.colors.teal, desc: 'Loses only labeling' },
                                { y: 180, label: 'Sufficient Statistic T(X)',    color: viz.colors.green,  desc: 'No information loss about theta' },
                                { y: 240, label: 'Minimal Sufficient T*(X)',     color: viz.colors.orange, desc: 'Maximum compression, zero loss' },
                                { y: 300, label: 'Non-sufficient (e.g. median)', color: viz.colors.purple, desc: 'Some information lost!' },
                                { y: 355, label: 'Constant',                     color: viz.colors.text,   desc: 'All information lost' }
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
                            ctx.fillText('Information about theta  -->', 0, 0);
                            ctx.restore();

                            // Compression axis label
                            ctx.save();
                            ctx.translate(viz.width - 18, viz.height / 2);
                            ctx.rotate(Math.PI / 2);
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Compression  -->', 0, 0);
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
                    question: '设 \\\\(X_1, \\\\ldots, X_n \\\\stackrel{\\\\mathrm{iid}}{\\\\sim} \\\\operatorname{Exp}(\\\\lambda)\\\\)。利用 Lehmann-Scheffe 定理找出 \\\\(\\\\lambda\\\\) 的最小充分统计量。',
                    hint: '写出似然比 \\\\(\\\\frac{f(\\\\mathbf{x}; \\\\lambda)}{f(\\\\mathbf{y}; \\\\lambda)} = \\\\exp\\\\bigl(-\\\\lambda(\\\\sum x_i - \\\\sum y_i)\\\\bigr)\\\\)，分析何时不依赖 \\\\(\\\\lambda\\\\)。',
                    solution: '似然比为 \\\\(\\\\frac{f(\\\\mathbf{x}; \\\\lambda)}{f(\\\\mathbf{y}; \\\\lambda)} = \\\\frac{\\\\lambda^n e^{-\\\\lambda \\\\sum x_i}}{\\\\lambda^n e^{-\\\\lambda \\\\sum y_i}} = e^{-\\\\lambda(\\\\sum x_i - \\\\sum y_i)}\\\\)。此式不依赖 \\\\(\\\\lambda\\\\) 当且仅当 \\\\(\\\\sum x_i = \\\\sum y_i\\\\)。由 Lehmann-Scheffe 定理，\\\\(T = \\\\sum_{i=1}^n X_i\\\\) 是最小充分统计量。'
                },
                {
                    question: '证明最小充分统计量在几乎处处意义下是唯一的：若 \\\\(T_1\\\\) 和 \\\\(T_2\\\\) 都是最小充分统计量，则存在一一映射 \\\\(g\\\\) 使得 \\\\(T_1 = g(T_2)\\\\) a.s.',
                    hint: '由最小性，\\\\(T_1\\\\) 是 \\\\(T_2\\\\) 的函数，\\\\(T_2\\\\) 也是 \\\\(T_1\\\\) 的函数。',
                    solution: '由最小充分性的定义，\\\\(T_1\\\\) 充分且 \\\\(T_2\\\\) 也充分。因为 \\\\(T_1\\\\) 最小，存在函数 \\\\(g_1\\\\) 使得 \\\\(T_1 = g_1(T_2)\\\\) a.s.。因为 \\\\(T_2\\\\) 最小，存在函数 \\\\(g_2\\\\) 使得 \\\\(T_2 = g_2(T_1)\\\\) a.s.。故 \\\\(T_1 = g_1(g_2(T_1))\\\\) a.s.，即 \\\\(g_1 \\\\circ g_2 = \\\\mathrm{id}\\\\) a.s.，同理 \\\\(g_2 \\\\circ g_1 = \\\\mathrm{id}\\\\) a.s.，所以 \\\\(g_1\\\\) 是一一映射（\\\\(g_2\\\\) 为其逆）。'
                },
                {
                    question: '设 \\\\(X_1, \\\\ldots, X_n \\\\stackrel{\\\\mathrm{iid}}{\\\\sim} \\\\operatorname{Uniform}(\\\\alpha, \\\\beta)\\\\)，\\\\(\\\\alpha < \\\\beta\\\\) 均未知。求最小充分统计量。',
                    hint: '似然比涉及指示函数 \\\\(\\\\mathbf{1}(\\\\alpha \\\\le x_{(1)}) \\\\mathbf{1}(x_{(n)} \\\\le \\\\beta)\\\\)，对所有 \\\\(\\\\alpha, \\\\beta\\\\) 不依赖参数需要 \\\\(x_{(1)} = y_{(1)}\\\\) 且 \\\\(x_{(n)} = y_{(n)}\\\\)。',
                    solution: '联合密度为 \\\\(f(\\\\mathbf{x}; \\\\alpha, \\\\beta) = (\\\\beta - \\\\alpha)^{-n} \\\\mathbf{1}(\\\\alpha \\\\le x_{(1)}) \\\\mathbf{1}(x_{(n)} \\\\le \\\\beta)\\\\)。似然比 \\\\(\\\\frac{f(\\\\mathbf{x})}{f(\\\\mathbf{y})} = \\\\frac{\\\\mathbf{1}(\\\\alpha \\\\le x_{(1)}) \\\\mathbf{1}(x_{(n)} \\\\le \\\\beta)}{\\\\mathbf{1}(\\\\alpha \\\\le y_{(1)}) \\\\mathbf{1}(y_{(n)} \\\\le \\\\beta)}\\\\)。此比对所有 \\\\((\\\\alpha, \\\\beta)\\\\) 不依赖参数当且仅当 \\\\(x_{(1)} = y_{(1)}\\\\) 且 \\\\(x_{(n)} = y_{(n)}\\\\)。故最小充分统计量为 \\\\(T = (X_{(1)}, X_{(n)})\\\\)。'
                }
            ]
        },

        // ============================================================
        //  Section 3: 完备性与指数族
        // ============================================================
        {
            id: 'ch05-sec03',
            title: '完备性与指数族',
            content: `
                <h2>完备性与指数族</h2>

                <p>完备性是充分性的一个强化概念。直观上，如果一个充分统计量是"完备的"，
                那么不存在基于它的非平凡无偏估计能恒等于零——这排除了"冗余信息"的存在。
                完备充分统计量在 Rao-Blackwell 定理和 Lehmann-Scheffe 定理中扮演核心角色。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.8 (完备统计量 / Complete Statistic)</div>
                    <div class="env-body">
                        <p>设 \\\\(T\\\\) 是一个统计量，其分布族为 \\\\(\\\\{f_T(t; \\\\theta) : \\\\theta \\\\in \\\\Theta\\\\}\\\\)。
                        称 \\\\(T\\\\) 是<strong>完备的</strong>，如果对任意可测函数 \\\\(g\\\\)，</p>
                        \\\\[E_\\\\theta[g(T)] = 0 \\\\; \\\\forall \\\\theta \\\\in \\\\Theta \\\\quad \\\\Longrightarrow \\\\quad P_\\\\theta(g(T) = 0) = 1 \\\\; \\\\forall \\\\theta.\\\\]
                        <p>即"零期望函数只能是零函数"。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>完备性意味着 \\\\(T\\\\) 的分布族足够"丰富"，
                        以至于没有非平凡函数 \\\\(g(T)\\\\) 能够在所有参数值下同时取期望为零。
                        这可以理解为 \\\\(T\\\\) 的分布族中没有"隐藏的约束"——
                        参数空间足够大，能够"区分"不同的函数 \\\\(g\\\\)。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.9 (完备充分统计量的唯一性)</div>
                    <div class="env-body">
                        <p>若 \\\\(T\\\\) 是完备充分统计量，则 \\\\(T\\\\) 是最小充分统计量。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>设 \\\\(T'\\\\) 是任一充分统计量。需证 \\\\(T\\\\) 是 \\\\(T'\\\\) 的函数。
                        因为 \\\\(T\\\\) 充分，\\\\(E_\\\\theta[T \\\\mid T']\\\\) 不依赖 \\\\(\\\\theta\\\\)（记为 \\\\(h(T')\\\\)）。
                        考虑 \\\\(g(T) = T - E[T \\\\mid T'] = T - h(T')\\\\)。由全期望定理，
                        \\\\(E_\\\\theta[T - h(T')] = E_\\\\theta[T] - E_\\\\theta[h(T')]\\\\)。
                        但事实上 \\\\(E_\\\\theta[T - h(T') \\\\mid T'] = E_\\\\theta[T \\\\mid T'] - h(T') = h(T') - h(T') = 0\\\\) a.s.，
                        故 \\\\(E_\\\\theta[T - h(T')] = 0\\\\)。但需要更精确的论证：定义 \\\\(U = T - h(T')\\\\)，
                        则 \\\\(E_\\\\theta[U \\\\mid T'] = 0\\\\) a.s.。
                        这意味着 \\\\(E_\\\\theta[U] = 0\\\\)。如果将问题限制在 \\\\(T\\\\) 的函数上，
                        由于 \\\\(h(T')\\\\) 可以被视为 \\\\(T\\\\) 的（通过 \\\\(T' = T'(\\\\mathbf{X})\\\\)）间接函数，
                        完备性保证 \\\\(T = h(T')\\\\) a.s.。</p>
                        <p>更标准的证法：设 \\\\(T_0\\\\) 是由 Lehmann-Scheffe 定理给出的最小充分统计量。
                        则 \\\\(T\\\\) 是 \\\\(T_0\\\\) 的函数（\\\\(T = \\\\varphi(T_0)\\\\)，因为 \\\\(T\\\\) 充分）。
                        反过来，\\\\(T_0 = \\\\psi(T)\\\\)（因为 \\\\(T_0\\\\) 最小充分且 \\\\(T\\\\) 充分），
                        但我们需要证这一点。
                        利用完备性：对任意 \\\\(T_0\\\\) 的可测函数 \\\\(g\\\\)，
                        若 \\\\(E_\\\\theta[g(T_0)] = 0\\\\) 对所有 \\\\(\\\\theta\\\\)，
                        因为 \\\\(T_0 = \\\\psi(T)\\\\) 所以 \\\\(g(T_0) = g(\\\\psi(T))\\\\)，
                        由 \\\\(T\\\\) 的完备性得 \\\\(g(\\\\psi(T)) = 0\\\\) a.s.，
                        即 \\\\(g(T_0) = 0\\\\) a.s.。这说明 \\\\(T_0\\\\) 也完备，从而 \\\\(T\\\\) 是最小充分的。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <p>完备性看似抽象，但指数族为我们提供了一个重要的通用判定方法。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.10 (指数族 / Exponential Family)</div>
                    <div class="env-body">
                        <p>参数族 \\\\(\\\\{f(x; \\\\theta) : \\\\theta \\\\in \\\\Theta\\\\}\\\\) 称为<strong>k-参数指数族</strong>，
                        若密度可以写成</p>
                        \\\\[f(x; \\\\boldsymbol{\\\\eta}) = h(x) \\\\exp\\\\!\\\\left(\\\\sum_{j=1}^k \\\\eta_j T_j(x) - A(\\\\boldsymbol{\\\\eta})\\\\right),\\\\]
                        <p>其中 \\\\(\\\\boldsymbol{\\\\eta} = (\\\\eta_1, \\\\ldots, \\\\eta_k)\\\\) 是<strong>自然参数</strong>，
                        \\\\(T_1(x), \\\\ldots, T_k(x)\\\\) 是<strong>充分统计量</strong>，
                        \\\\(A(\\\\boldsymbol{\\\\eta})\\\\) 是<strong>对数配分函数</strong>（log-partition function），
                        \\\\(h(x) \\\\ge 0\\\\) 是基底测度。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.11 (指数族的完备充分统计量)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n\\\\) 是来自 \\\\(k\\\\)-参数指数族的 iid 样本，
                        且自然参数空间 \\\\(\\\\mathcal{H} = \\\\{\\\\boldsymbol{\\\\eta} : A(\\\\boldsymbol{\\\\eta}) < \\\\infty\\\\}\\\\)
                        包含 \\\\(\\\\mathbb{R}^k\\\\) 中的一个开集。则</p>
                        \\\\[T = \\\\left(\\\\sum_{i=1}^n T_1(X_i), \\\\ldots, \\\\sum_{i=1}^n T_k(X_i)\\\\right)\\\\]
                        <p>是 \\\\(\\\\boldsymbol{\\\\eta}\\\\) 的<strong>完备充分统计量</strong>。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.12</div>
                    <div class="env-body">
                        <p>常见指数族及其完备充分统计量：</p>
                        <p>(i) \\\\(\\\\operatorname{Poisson}(\\\\lambda)\\\\)：自然参数 \\\\(\\\\eta = \\\\log \\\\lambda\\\\)，
                        充分统计量 \\\\(T(x) = x\\\\)。
                        iid 样本的完备充分统计量为 \\\\(\\\\sum X_i\\\\)。</p>
                        <p>(ii) \\\\(N(\\\\mu, \\\\sigma^2)\\\\)（两参数）：自然参数 \\\\(\\\\eta_1 = \\\\mu/\\\\sigma^2, \\\\eta_2 = -1/(2\\\\sigma^2)\\\\)，
                        充分统计量 \\\\(T_1(x) = x, T_2(x) = x^2\\\\)。
                        完备充分统计量为 \\\\((\\\\sum X_i, \\\\sum X_i^2)\\\\)。</p>
                        <p>(iii) \\\\(\\\\operatorname{Gamma}(\\\\alpha, \\\\beta)\\\\)：
                        完备充分统计量为 \\\\((\\\\sum \\\\log X_i, \\\\sum X_i)\\\\)。</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning</div>
                    <div class="env-body">
                        <p>自然参数空间包含开集的条件很关键。若参数空间受限（如已知 \\\\(\\\\sigma^2\\\\) 时的正态分布），
                        充分统计量可能不完备。例如 \\\\(X \\\\sim N(\\\\theta, \\\\theta)\\\\)（\\\\(\\\\theta > 0\\\\)）
                        虽属于指数族，但由于 \\\\(\\\\eta_1, \\\\eta_2\\\\) 之间存在约束关系（曲线指数族），
                        \\\\((\\\\sum X_i, \\\\sum X_i^2)\\\\) 充分但不完备。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="expfamily-morphing-viz"></div>
            `,
            visualizations: [
                {
                    id: 'expfamily-morphing-viz',
                    title: 'Interactive: 指数族 PDF 变形',
                    description: '通过调节自然参数观察指数族密度如何平滑变形，并展示充分统计量维度',
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
                            viz.screenText('Dimension of T: ' + info.dim + '  (complete sufficient for iid sample)', plotLeft + plotW / 2, infoY + 40, viz.colors.text, 10, 'center', 'top');
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '证明 Bernoulli(p) 分布属于指数族，并写出其自然参数和充分统计量。',
                    hint: '将 \\\\(p^x (1-p)^{1-x}\\\\) 写成 \\\\(\\\\exp(x \\\\log \\\\frac{p}{1-p} + \\\\log(1-p))\\\\)。',
                    solution: '\\\\(f(x; p) = p^x(1-p)^{1-x} = \\\\exp\\\\bigl(x \\\\log \\\\frac{p}{1-p} + \\\\log(1-p)\\\\bigr)\\\\)。这是指数族形式，其中自然参数 \\\\(\\\\eta = \\\\log \\\\frac{p}{1-p}\\\\)（logit），充分统计量 \\\\(T(x) = x\\\\)，对数配分函数 \\\\(A(\\\\eta) = -\\\\log(1-p) = \\\\log(1 + e^\\\\eta)\\\\)，基底测度 \\\\(h(x) = 1\\\\)。对 iid 样本，\\\\(\\\\sum X_i\\\\) 是完备充分统计量。'
                },
                {
                    question: '设 \\\\(T\\\\) 是完备充分统计量，\\\\(g(T)\\\\) 是 \\\\(\\\\tau(\\\\theta)\\\\) 的无偏估计。证明 \\\\(g(T)\\\\) 是 \\\\(\\\\tau(\\\\theta)\\\\) 的唯一无偏估计（基于 \\\\(T\\\\)）。',
                    hint: '若 \\\\(g_1(T)\\\\) 和 \\\\(g_2(T)\\\\) 都是 \\\\(\\\\tau(\\\\theta)\\\\) 的无偏估计，考虑 \\\\(g_1(T) - g_2(T)\\\\) 的期望。',
                    solution: '设 \\\\(g_1(T), g_2(T)\\\\) 都是 \\\\(\\\\tau(\\\\theta)\\\\) 的无偏估计。则 \\\\(E_\\\\theta[g_1(T) - g_2(T)] = \\\\tau(\\\\theta) - \\\\tau(\\\\theta) = 0\\\\) 对所有 \\\\(\\\\theta\\\\)。令 \\\\(u(T) = g_1(T) - g_2(T)\\\\)，由完备性得 \\\\(P_\\\\theta(u(T) = 0) = 1\\\\) 对所有 \\\\(\\\\theta\\\\)，即 \\\\(g_1(T) = g_2(T)\\\\) a.s. 对所有 \\\\(\\\\theta\\\\)。这正是 Lehmann-Scheffe 定理的核心——完备充分统计量上的无偏估计唯一且为 UMVUE。'
                },
                {
                    question: '证明 \\\\(\\\\operatorname{Cauchy}(\\\\theta, 1)\\\\) 分布不属于指数族。',
                    hint: '指数族的支撑集不依赖参数，且其矩母函数在原点附近存在。考虑 Cauchy 分布的矩。',
                    solution: 'Cauchy 分布的密度为 \\\\(f(x; \\\\theta) = \\\\frac{1}{\\\\pi(1 + (x - \\\\theta)^2)}\\\\)。指数族的一个关键性质是：自然参数空间的内部非空时，所有阶矩存在。但 Cauchy 分布连一阶矩都不存在（\\\\(E|X| = \\\\infty\\\\)）。此外，无法将 \\\\(\\\\frac{1}{1 + (x-\\\\theta)^2}\\\\) 写成 \\\\(\\\\exp(\\\\eta(\\\\theta) T(x) - A(\\\\theta)) h(x)\\\\) 的形式（因为 \\\\(\\\\theta\\\\) 和 \\\\(x\\\\) 在分母中非线性耦合）。因此 Cauchy 分布不属于指数族。'
                }
            ]
        },

        // ============================================================
        //  Section 4: 辅助统计量与 Basu 定理
        // ============================================================
        {
            id: 'ch05-sec04',
            title: '辅助统计量与Basu定理',
            content: `
                <h2>辅助统计量与 Basu 定理</h2>

                <p>与充分统计量相对的是<strong>辅助统计量</strong>（ancillary statistic）——
                其分布完全不含参数信息。Basu 定理建立了完备充分统计量与辅助统计量之间的深刻联系：
                它们是独立的。这一看似简单的结果在理论和应用中都有重要意义。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.13 (辅助统计量 / Ancillary Statistic)</div>
                    <div class="env-body">
                        <p>统计量 \\\\(V = V(X_1, \\\\ldots, X_n)\\\\) 称为<strong>辅助统计量</strong>，
                        如果 \\\\(V\\\\) 的分布不依赖于参数 \\\\(\\\\theta\\\\)：</p>
                        \\\\[P_\\\\theta(V \\\\in B) = P(V \\\\in B) \\\\quad \\\\forall \\\\theta \\\\in \\\\Theta, \\\\; \\\\forall B.\\\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.14</div>
                    <div class="env-body">
                        <p>(i) 设 \\\\(X_1, \\\\ldots, X_n \\\\stackrel{\\\\mathrm{iid}}{\\\\sim} N(\\\\mu, 1)\\\\)。
                        则样本方差 \\\\(S^2 = \\\\frac{1}{n-1}\\\\sum(X_i - \\\\bar{X})^2 \\\\sim \\\\frac{\\\\chi^2_{n-1}}{n-1}\\\\)，
                        其分布不依赖 \\\\(\\\\mu\\\\)。因此 \\\\(S^2\\\\) 是 \\\\(\\\\mu\\\\) 的辅助统计量。</p>
                        <p>(ii) 设 \\\\(X_1, X_2 \\\\stackrel{\\\\mathrm{iid}}{\\\\sim} \\\\operatorname{Exp}(\\\\lambda)\\\\)。
                        则比值 \\\\(V = X_1 / (X_1 + X_2) \\\\sim \\\\operatorname{Uniform}(0, 1)\\\\)，
                        不依赖 \\\\(\\\\lambda\\\\)。因此 \\\\(V\\\\) 是辅助统计量。</p>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>如果充分统计量捕获了数据中关于 \\\\(\\\\theta\\\\) 的全部信息，
                        那么辅助统计量则完全不含 \\\\(\\\\theta\\\\) 的信息——它只反映数据的"形状"或"配置"，
                        而不反映"位置"或"尺度"。
                        二者是信息谱的两个极端。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.15 (Basu 定理)</div>
                    <div class="env-body">
                        <p>若 \\\\(T\\\\) 是 \\\\(\\\\theta\\\\) 的<strong>完备充分统计量</strong>，
                        \\\\(V\\\\) 是<strong>辅助统计量</strong>，
                        则 \\\\(T\\\\) 与 \\\\(V\\\\) 相互独立（对所有 \\\\(\\\\theta\\\\)）。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>对任意 Borel 集 \\\\(B\\\\)，定义 \\\\(g(t) = P_\\\\theta(V \\\\in B \\\\mid T = t) - P(V \\\\in B)\\\\)。
                        因为 \\\\(V\\\\) 辅助，\\\\(P_\\\\theta(V \\\\in B) = P(V \\\\in B)\\\\) 不依赖 \\\\(\\\\theta\\\\)。
                        因此</p>
                        \\\\[E_\\\\theta[g(T)] = E_\\\\theta[P_\\\\theta(V \\\\in B \\\\mid T)] - P(V \\\\in B) = P_\\\\theta(V \\\\in B) - P(V \\\\in B) = 0\\\\]
                        <p>对所有 \\\\(\\\\theta\\\\) 成立。由 \\\\(T\\\\) 的完备性，
                        \\\\(g(T) = 0\\\\) a.s.，即</p>
                        \\\\[P_\\\\theta(V \\\\in B \\\\mid T = t) = P(V \\\\in B) \\\\quad \\\\text{a.s.}\\\\]
                        <p>这正意味着 \\\\(V\\\\) 和 \\\\(T\\\\) 独立。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.16 (Basu 定理的经典应用)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n \\\\stackrel{\\\\mathrm{iid}}{\\\\sim} N(\\\\mu, \\\\sigma^2)\\\\)，\\\\(\\\\sigma^2\\\\) 已知。</p>
                        <p>(a) \\\\(\\\\bar{X}\\\\) 是 \\\\(\\\\mu\\\\) 的完备充分统计量（一维正态指数族）。</p>
                        <p>(b) \\\\(S^2 = \\\\frac{1}{n-1}\\\\sum(X_i - \\\\bar{X})^2\\\\) 是辅助统计量（其分布 \\\\(\\\\frac{\\\\sigma^2}{n-1} \\\\chi^2_{n-1}\\\\) 不依赖 \\\\(\\\\mu\\\\)）。</p>
                        <p>由 Basu 定理：\\\\(\\\\bar{X}\\\\) 与 \\\\(S^2\\\\) 独立。</p>
                        <p>这是一个非常优雅的独立性证明——无需任何矩母函数或分布计算！
                        传统证法需要利用正态分布的特殊性质（Cochran 定理），
                        而 Basu 定理仅需验证充分性、完备性和辅助性。</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 5.17</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n \\\\stackrel{\\\\mathrm{iid}}{\\\\sim} \\\\operatorname{Exp}(\\\\lambda)\\\\)。
                        则 \\\\(T = \\\\sum X_i\\\\) 是完备充分统计量，
                        而 \\\\(V_i = X_i / \\\\sum X_j\\\\)（各比例分量）是辅助的。
                        由 Basu 定理，\\\\(\\\\sum X_i\\\\) 与 \\\\((X_1/\\\\sum X_j, \\\\ldots, X_n/\\\\sum X_j)\\\\) 独立。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Basu 定理的应用场景)</div>
                    <div class="env-body">
                        <p>Basu 定理的力量在于：一旦确认了完备充分统计量和辅助统计量的身份，
                        就能免费获得独立性结论。这在以下场景特别有用：</p>
                        <p>(1) 简化方差计算：若 \\\\(T \\\\perp V\\\\)，则 \\\\(\\\\operatorname{Var}(aT + bV) = a^2\\\\operatorname{Var}(T) + b^2\\\\operatorname{Var}(V)\\\\)。</p>
                        <p>(2) 构造枢轴量：独立性保证了枢轴量的分布不依赖参数。</p>
                        <p>(3) 证明估计量的最优性：在 UMVUE 理论中，独立性是关键技术工具。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="sufficient-ancillary-scatter-viz"></div>
            `,
            visualizations: [
                {
                    id: 'sufficient-ancillary-scatter-viz',
                    title: 'Interactive: 充分统计量 vs 辅助统计量散点图',
                    description: '通过 Monte Carlo 模拟展示完备充分统计量与辅助统计量的独立性 (Basu 定理)',
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
                            viz.screenText('T = sum(Xi)  [Sufficient]', (plotLeft + plotRight) / 2, plotBottom + 20, viz.colors.green, 11, 'center', 'top');

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
                            ctx.fillText('V = X1/sum(Xi)  [Ancillary]', 0, 0);
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
                    question: '设 \\\\(X_1, X_2 \\\\stackrel{\\\\mathrm{iid}}{\\\\sim} N(\\\\mu, 1)\\\\)。利用 Basu 定理证明 \\\\(\\\\bar{X} = (X_1 + X_2)/2\\\\) 与 \\\\(X_1 - X_2\\\\) 独立。',
                    hint: '\\\\(\\\\bar{X}\\\\) 是 \\\\(\\\\mu\\\\) 的完备充分统计量。验证 \\\\(X_1 - X_2\\\\) 是辅助统计量（其分布是什么？）',
                    solution: '(1) \\\\(\\\\bar{X}\\\\) 是 \\\\(\\\\mu\\\\) 的完备充分统计量（\\\\(N(\\\\mu, 1)\\\\) 是一维指数族）。(2) \\\\(X_1 - X_2 \\\\sim N(0, 2)\\\\)（均值为 \\\\(\\\\mu - \\\\mu = 0\\\\)），其分布不依赖 \\\\(\\\\mu\\\\)，故 \\\\(X_1 - X_2\\\\) 是辅助统计量。由 Basu 定理，\\\\(\\\\bar{X}\\\\) 与 \\\\(X_1 - X_2\\\\) 独立。'
                },
                {
                    question: '设 \\\\(X_1, \\\\ldots, X_n \\\\stackrel{\\\\mathrm{iid}}{\\\\sim} \\\\operatorname{Uniform}(0, \\\\theta)\\\\)。(a) 证明 \\\\(X_{(n)}\\\\) 是完备充分统计量。(b) 证明 \\\\(X_{(1)}/X_{(n)}\\\\) 是辅助统计量。(c) 由 Basu 定理推出什么？',
                    hint: '对 (a)，利用指数族判据或直接验证。对 (b)，令 \\\\(U_i = X_i/\\\\theta\\\\)，则 \\\\(U_i \\\\sim \\\\operatorname{Uniform}(0,1)\\\\)，考虑 \\\\(U_{(1)}/U_{(n)}\\\\)。',
                    solution: '(a) \\\\(X_{(n)}\\\\) 的密度为 \\\\(f_{X_{(n)}}(t; \\\\theta) = n t^{n-1}/\\\\theta^n \\\\cdot \\\\mathbf{1}(0 < t < \\\\theta)\\\\)。设 \\\\(E_\\\\theta[g(X_{(n)})] = 0\\\\) 对所有 \\\\(\\\\theta > 0\\\\)，即 \\\\(\\\\int_0^\\\\theta g(t) n t^{n-1}/\\\\theta^n \\\\, dt = 0\\\\) 对所有 \\\\(\\\\theta > 0\\\\)。两边对 \\\\(\\\\theta\\\\) 微分并整理可得 \\\\(g(\\\\theta) = 0\\\\) a.e.，故完备。(b) 令 \\\\(U_i = X_i/\\\\theta\\\\)，则 \\\\(U_i \\\\sim U(0,1)\\\\)，故 \\\\(X_{(1)}/X_{(n)} = U_{(1)}/U_{(n)}\\\\)，其分布不依赖 \\\\(\\\\theta\\\\)。(c) 由 Basu 定理，\\\\(X_{(n)} \\\\perp X_{(1)}/X_{(n)}\\\\)。'
                },
                {
                    question: '给出一个辅助统计量不唯一的例子，并解释为什么 Basu 定理不要求辅助统计量的唯一性。',
                    hint: '在位置族 \\\\(f(x - \\\\theta)\\\\) 中，任何"样本间差值"都是辅助的。',
                    solution: '设 \\\\(X_1, X_2, X_3 \\\\sim N(\\\\mu, 1)\\\\)。则 \\\\(V_1 = X_1 - X_2\\\\), \\\\(V_2 = X_2 - X_3\\\\), \\\\(V_3 = X_1 - X_3\\\\) 都是辅助统计量（它们的分布均不依赖 \\\\(\\\\mu\\\\)），且 \\\\(S^2\\\\) 也是辅助统计量。辅助统计量有无穷多个。Basu 定理的陈述是对所有辅助统计量成立的——任何一个辅助统计量都与完备充分统计量独立。定理不需要辅助统计量的唯一性，因为其证明仅利用了"辅助"这一性质（分布不依赖参数），而非辅助统计量的具体形式。'
                }
            ]
        }
    ]
});

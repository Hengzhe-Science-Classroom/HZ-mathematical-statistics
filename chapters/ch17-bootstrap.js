window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch17',
    number: 17,
    title: 'Bootstrap 与重抽样',
    subtitle: 'Bootstrap & Resampling Methods',
    sections: [
        // === Section 1: Bootstrap原理 ===
        {
            id: 'ch17-sec01',
            title: 'Bootstrap 原理',
            content: `
                <h2>Bootstrap 原理</h2>

                <p>Bootstrap 是现代统计学中最重要的计算方法之一，由 Bradley Efron 于 1979 年提出。其核心思想极为简洁：<strong>用经验分布 \\\\(\\\\hat{F}_n\\\\) 代替未知的总体分布 \\\\(F\\\\)</strong>，通过重抽样来近似统计量的抽样分布。</p>

                <div class="env-block intuition">
                    <div class="env-title">Intuition (Bootstrap 世界 vs 真实世界)</div>
                    <div class="env-body">
                        <p>在<strong>真实世界</strong>中，我们从未知分布 \\\\(F\\\\) 中抽取样本 \\\\(X_1, \\\\ldots, X_n\\\\)，然后计算统计量 \\\\(\\\\hat{\\\\theta}_n = g(X_1, \\\\ldots, X_n)\\\\)。我们想知道 \\\\(\\\\hat{\\\\theta}_n\\\\) 的抽样分布，但 \\\\(F\\\\) 未知。</p>
                        <p>在<strong>Bootstrap 世界</strong>中，经验分布 \\\\(\\\\hat{F}_n\\\\) 扮演 \\\\(F\\\\) 的角色。我们从 \\\\(\\\\hat{F}_n\\\\) 中重复抽样（即从原始数据中<strong>有放回地抽样</strong>），得到 Bootstrap 样本 \\\\(X_1^*, \\\\ldots, X_n^*\\\\)，计算 \\\\(\\\\hat{\\\\theta}_n^* = g(X_1^*, \\\\ldots, X_n^*)\\\\)。重复 \\\\(B\\\\) 次，Bootstrap 统计量的分布就近似了 \\\\(\\\\hat{\\\\theta}_n\\\\) 的抽样分布。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.1 (经验分布函数)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n\\\\) 是来自分布 \\\\(F\\\\) 的随机样本。<strong>经验分布函数</strong> (empirical distribution function) 定义为</p>
                        \\\\[\\\\hat{F}_n(x) = \\\\frac{1}{n} \\\\sum_{i=1}^{n} \\\\mathbf{1}(X_i \\\\le x).\\\\]
                        <p>由 Glivenko-Cantelli 定理，\\\\(\\\\sup_x |\\\\hat{F}_n(x) - F(x)| \\\\xrightarrow{\\\\text{a.s.}} 0\\\\)，即 \\\\(\\\\hat{F}_n\\\\) 一致地逼近 \\\\(F\\\\)。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.2 (非参数 Bootstrap)</div>
                    <div class="env-body">
                        <p>设 \\\\(\\\\mathbf{X} = (X_1, \\\\ldots, X_n)\\\\) 为观测数据，\\\\(\\\\hat{\\\\theta}_n = T(\\\\mathbf{X})\\\\) 为感兴趣的统计量。<strong>非参数 Bootstrap</strong> 的步骤如下：</p>
                        <p><strong>Step 1.</strong> 从 \\\\(\\\\{X_1, \\\\ldots, X_n\\\\}\\\\) 中<strong>有放回地</strong>抽取 \\\\(n\\\\) 个观测值，得到 Bootstrap 样本 \\\\(\\\\mathbf{X}^* = (X_1^*, \\\\ldots, X_n^*)\\\\)。</p>
                        <p><strong>Step 2.</strong> 计算 Bootstrap 统计量 \\\\(\\\\hat{\\\\theta}_n^* = T(\\\\mathbf{X}^*)\\\\)。</p>
                        <p><strong>Step 3.</strong> 重复 Steps 1-2 共 \\\\(B\\\\) 次，得到 \\\\(\\\\hat{\\\\theta}_n^{*(1)}, \\\\ldots, \\\\hat{\\\\theta}_n^{*(B)}\\\\)。</p>
                        <p>这 \\\\(B\\\\) 个值的经验分布即为 \\\\(\\\\hat{\\\\theta}_n\\\\) 的 Bootstrap 近似分布。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.3 (参数 Bootstrap)</div>
                    <div class="env-body">
                        <p>若已知分布族 \\\\(\\\\{F_{\\\\theta} : \\\\theta \\\\in \\\\Theta\\\\}\\\\)，先用数据估计参数 \\\\(\\\\hat{\\\\theta}\\\\)，然后从 \\\\(F_{\\\\hat{\\\\theta}}\\\\) 中生成 Bootstrap 样本。</p>
                        <p><strong>Step 1.</strong> 从拟合模型 \\\\(F_{\\\\hat{\\\\theta}}\\\\) 中生成 \\\\(X_1^*, \\\\ldots, X_n^* \\\\sim F_{\\\\hat{\\\\theta}}\\\\)。</p>
                        <p><strong>Step 2.</strong> 计算 \\\\(\\\\hat{\\\\theta}^* = T(X_1^*, \\\\ldots, X_n^*)\\\\)。</p>
                        <p><strong>Step 3.</strong> 重复 \\\\(B\\\\) 次。</p>
                        <p>参数 Bootstrap 在模型正确指定时更高效，但在模型错误时可能导致偏差。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.4 (Bootstrap 的一致性)</div>
                    <div class="env-body">
                        <p>设 \\\\(T_n = \\\\sqrt{n}(\\\\hat{\\\\theta}_n - \\\\theta)\\\\) 的分布收敛到某个连续分布。在适当的正则条件下，Bootstrap 分布</p>
                        \\\\[T_n^* = \\\\sqrt{n}(\\\\hat{\\\\theta}_n^* - \\\\hat{\\\\theta}_n)\\\\]
                        <p>的条件分布（给定数据）以概率 1 收敛到 \\\\(T_n\\\\) 的极限分布。即 Bootstrap 是<strong>一致的</strong> (consistent)。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 17.5 (Bootstrap 估计均值的标准误)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_n \\\\sim F\\\\)，\\\\(\\\\hat{\\\\theta} = \\\\bar{X}\\\\)。Bootstrap 标准误为</p>
                        \\\\[\\\\text{se}_{\\\\text{boot}} = \\\\sqrt{\\\\frac{1}{B} \\\\sum_{b=1}^{B} \\\\left(\\\\bar{X}^{*(b)} - \\\\frac{1}{B}\\\\sum_{b=1}^{B} \\\\bar{X}^{*(b)}\\\\right)^2}.\\\\]
                        <p>当 \\\\(B \\\\to \\\\infty\\\\)，\\\\(\\\\text{se}_{\\\\text{boot}} \\\\to \\\\hat{\\\\sigma}/\\\\sqrt{n}\\\\)（其中 \\\\(\\\\hat{\\\\sigma}^2\\\\) 是样本方差的 \\\\((n-1)/n\\\\) 倍），这与经典公式一致。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="bootstrap-resample-viz"></div>
            `,
            visualizations: [
                {
                    id: 'bootstrap-resample-viz',
                    title: 'Interactive: Bootstrap 重抽样动画',
                    description: '观察从原始样本有放回抽样的过程，建立Bootstrap统计量的分布',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 420, scale: 1, originX: 60, originY: 210});
                        var n = 15;
                        var B = 200;
                        var originalData = VizEngine.sampleArray(function() { return VizEngine.randomNormal(5, 2); }, n);
                        originalData.sort(function(a, b) { return a - b; });
                        var bootMeans = [];
                        var currentB = 0;
                        var running = false;
                        var speed = 50;

                        var bSlider = VizEngine.createSlider(controls, 'Bootstrap 次数 B', 50, 500, B, 50, function(v) { B = Math.round(v); });
                        var speedSlider = VizEngine.createSlider(controls, '速度', 1, 100, speed, 1, function(v) { speed = Math.round(v); });

                        VizEngine.createButton(controls, '开始 Bootstrap', function() {
                            bootMeans = [];
                            currentB = 0;
                            running = true;
                        });
                        VizEngine.createButton(controls, '重置', function() {
                            running = false;
                            bootMeans = [];
                            currentB = 0;
                            originalData = VizEngine.sampleArray(function() { return VizEngine.randomNormal(5, 2); }, n);
                            originalData.sort(function(a, b) { return a - b; });
                            draw(null);
                        });

                        function makeBins(arr, lo, hi, nBins) {
                            var bins = [];
                            var w = (hi - lo) / nBins;
                            for (var i = 0; i < nBins; i++) {
                                bins.push({x: lo + i * w, width: w, height: 0});
                            }
                            for (var j = 0; j < arr.length; j++) {
                                var idx = Math.floor((arr[j] - lo) / w);
                                if (idx >= 0 && idx < nBins) bins[idx].height++;
                            }
                            var maxH = 0;
                            for (var k = 0; k < bins.length; k++) {
                                if (bins[k].height > maxH) maxH = bins[k].height;
                            }
                            if (maxH > 0) {
                                for (var m = 0; m < bins.length; m++) {
                                    bins[m].height = bins[m].height / maxH * 160;
                                }
                            }
                            return bins;
                        }

                        function draw(currentSample) {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('原始数据 (n=' + n + ')', 20, 10);

                            // Draw original data as dots
                            var dataMin = 0, dataMax = 10;
                            var xScale = 460 / (dataMax - dataMin);
                            for (var i = 0; i < originalData.length; i++) {
                                var dx = 60 + (originalData[i] - dataMin) * xScale;
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath(); ctx.arc(dx, 50, 5, 0, Math.PI * 2); ctx.fill();
                            }
                            // axis line
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(60, 65); ctx.lineTo(520, 65); ctx.stroke();

                            // Original mean
                            var origMean = VizEngine.mean(originalData);
                            var origMeanX = 60 + (origMean - dataMin) * xScale;
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(origMeanX, 35); ctx.lineTo(origMeanX, 70); ctx.stroke();
                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('x\u0304 = ' + origMean.toFixed(2), origMeanX, 78);

                            // Current bootstrap sample
                            if (currentSample) {
                                ctx.fillStyle = viz.colors.white;
                                ctx.font = 'bold 13px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('Bootstrap 样本 #' + currentB, 20, 100);
                                for (var j = 0; j < currentSample.length; j++) {
                                    var bx = 60 + (currentSample[j] - dataMin) * xScale;
                                    ctx.fillStyle = viz.colors.teal + '99';
                                    ctx.beginPath(); ctx.arc(bx, 135, 4, 0, Math.PI * 2); ctx.fill();
                                }
                                var bMean = VizEngine.mean(currentSample);
                                var bMeanX = 60 + (bMean - dataMin) * xScale;
                                ctx.strokeStyle = viz.colors.green;
                                ctx.lineWidth = 2;
                                ctx.beginPath(); ctx.moveTo(bMeanX, 120); ctx.lineTo(bMeanX, 150); ctx.stroke();
                            }

                            // Bootstrap distribution histogram
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Bootstrap 均值分布 (' + bootMeans.length + '/' + B + ')', 20, 175);

                            if (bootMeans.length > 1) {
                                var histBins = makeBins(bootMeans, 3, 7, 40);
                                var histScale = 160 / 160;
                                for (var k = 0; k < histBins.length; k++) {
                                    var bx1 = 60 + (histBins[k].x - dataMin) * xScale;
                                    var bw = histBins[k].width * xScale;
                                    var bh = histBins[k].height * histScale;
                                    if (bh > 0) {
                                        ctx.fillStyle = viz.colors.purple + '77';
                                        ctx.fillRect(bx1, 400 - bh, bw, bh);
                                        ctx.strokeStyle = viz.colors.purple;
                                        ctx.lineWidth = 0.5;
                                        ctx.strokeRect(bx1, 400 - bh, bw, bh);
                                    }
                                }
                                // Boot mean line
                                var bootGrandMean = VizEngine.mean(bootMeans);
                                var bgmX = 60 + (bootGrandMean - dataMin) * xScale;
                                ctx.strokeStyle = viz.colors.yellow;
                                ctx.lineWidth = 2;
                                ctx.setLineDash([4, 3]);
                                ctx.beginPath(); ctx.moveTo(bgmX, 190); ctx.lineTo(bgmX, 400); ctx.stroke();
                                ctx.setLineDash([]);

                                // Standard error
                                var bootSE = Math.sqrt(VizEngine.variance(bootMeans));
                                ctx.fillStyle = viz.colors.yellow;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('SE_boot = ' + bootSE.toFixed(3), 350, 190);
                            }

                            // axis for histogram
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(60, 400); ctx.lineTo(520, 400); ctx.stroke();
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            for (var t = 0; t <= 10; t += 1) {
                                var tx = 60 + t * xScale;
                                ctx.fillText(t, tx, 412);
                            }
                        }

                        var frameCount = 0;
                        viz.animate(function() {
                            frameCount++;
                            if (running && currentB < B && frameCount % Math.max(1, 101 - speed) === 0) {
                                var bootSample = [];
                                for (var i = 0; i < n; i++) {
                                    bootSample.push(originalData[Math.floor(Math.random() * n)]);
                                }
                                var bm = VizEngine.mean(bootSample);
                                bootMeans.push(bm);
                                currentB++;
                                draw(bootSample);
                                if (currentB >= B) running = false;
                            } else if (!running) {
                                draw(null);
                            }
                        });

                        draw(null);
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\\\(X_1, \\\\ldots, X_{20}\\\\) 是样本，解释为什么从中有放回抽取 20 个观测构成的 Bootstrap 样本中，大约有 \\\\(1 - (1 - 1/n)^n \\\\approx 1 - 1/e \\\\approx 63.2\\\\%\\\\) 的原始观测会至少出现一次。',
                    hint: '考虑某个固定观测 \\\\(X_i\\\\) 在一次 Bootstrap 抽样中不被选中的概率是 \\\\((1 - 1/n)^n\\\\)。',
                    solution: '对于固定的 \\\\(X_i\\\\)，在 Bootstrap 样本中每次抽样不选中它的概率是 \\\\(1 - 1/n\\\\)。由于 \\\\(n\\\\) 次抽样独立，\\\\(X_i\\\\) 一次都不被选中的概率为 \\\\((1 - 1/n)^n \\\\to 1/e \\\\approx 0.368\\\\)。因此 \\\\(X_i\\\\) 至少出现一次的概率约为 \\\\(1 - 1/e \\\\approx 0.632\\\\)。对所有 \\\\(n\\\\) 个观测取平均，预期约 \\\\(63.2\\\\%\\\\) 的不同观测会出现在 Bootstrap 样本中。'
                },
                {
                    question: '比较参数 Bootstrap 和非参数 Bootstrap 的优缺点。在什么情况下应优先使用参数 Bootstrap？',
                    hint: '考虑模型假设的角色：当模型正确时和错误时分别会怎样？',
                    solution: '参数 Bootstrap 在模型正确指定时更高效（方差更小），因为它利用了分布族的结构信息。例如对正态数据，参数 Bootstrap 可以精确模拟正态抽样。但如果模型错误，参数 Bootstrap 的结果可能严重偏差。非参数 Bootstrap 不依赖模型假设，更加稳健，但需要更大的样本量来获得好的近似。当有充分理由相信参数模型时（如物理理论支持），优先使用参数 Bootstrap；否则使用非参数 Bootstrap。'
                },
                {
                    question: '证明当 \\\\(B \\\\to \\\\infty\\\\) 时，Bootstrap 样本均值的标准差收敛于 \\\\(\\\\hat{\\\\sigma}/\\\\sqrt{n}\\\\)（其中 \\\\(\\\\hat{\\\\sigma}^2 = \\\\frac{1}{n}\\\\sum_{i=1}^{n}(X_i - \\\\bar{X})^2\\\\)）。',
                    hint: '计算 \\\\(\\\\operatorname{Var}^*(\\\\bar{X}^*) = \\\\operatorname{Var}^*(X_1^*)/n\\\\)，其中 \\\\(\\\\operatorname{Var}^*\\\\) 是在 Bootstrap 世界（即关于 \\\\(\\\\hat{F}_n\\\\)）中的方差。',
                    solution: '在 Bootstrap 世界中，\\\\(X_1^*\\\\) 从 \\\\(\\\\hat{F}_n\\\\) 中抽取，即等概率取 \\\\(X_1, \\\\ldots, X_n\\\\) 中的一个。因此 \\\\(E^*(X_1^*) = \\\\bar{X}\\\\)，\\\\(\\\\operatorname{Var}^*(X_1^*) = \\\\frac{1}{n}\\\\sum_{i=1}^{n}(X_i - \\\\bar{X})^2 = \\\\hat{\\\\sigma}^2\\\\)。由于 Bootstrap 样本中各 \\\\(X_i^*\\\\) 条件独立，\\\\(\\\\operatorname{Var}^*(\\\\bar{X}^*) = \\\\hat{\\\\sigma}^2/n\\\\)。当 \\\\(B \\\\to \\\\infty\\\\) 时，Bootstrap 样本均值的经验方差依大数律收敛于 \\\\(\\\\hat{\\\\sigma}^2/n\\\\)，故其标准差收敛于 \\\\(\\\\hat{\\\\sigma}/\\\\sqrt{n}\\\\)。'
                }
            ]
        },

        // === Section 2: Bootstrap 置信区间 ===
        {
            id: 'ch17-sec02',
            title: 'Bootstrap 置信区间',
            content: `
                <h2>Bootstrap 置信区间</h2>

                <p>Bootstrap 最常见的应用之一是构造置信区间。我们介绍三种主要方法：百分位法、基本 Bootstrap 法和 BCa 法。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.6 (百分位法置信区间)</div>
                    <div class="env-body">
                        <p>设 \\\\(\\\\hat{\\\\theta}^{*(1)}, \\\\ldots, \\\\hat{\\\\theta}^{*(B)}\\\\) 为 \\\\(B\\\\) 个 Bootstrap 统计量。<strong>百分位法</strong> (percentile method) 的 \\\\(1 - \\\\alpha\\\\) 置信区间为</p>
                        \\\\[C_{\\\\text{perc}} = \\\\left[\\\\hat{\\\\theta}^*_{(\\\\alpha/2)}, \\\\; \\\\hat{\\\\theta}^*_{(1-\\\\alpha/2)}\\\\right],\\\\]
                        <p>其中 \\\\(\\\\hat{\\\\theta}^*_{(q)}\\\\) 表示 Bootstrap 统计量的 \\\\(q\\\\)-分位数。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>百分位法直观简洁，但它假设 Bootstrap 分布的偏差和偏度可以忽略。当估计量有显著偏差时，百分位法的覆盖率可能偏离名义水平。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.7 (基本 Bootstrap 置信区间)</div>
                    <div class="env-body">
                        <p><strong>基本 Bootstrap 法</strong> (basic/pivotal bootstrap) 基于 Bootstrap 枢轴量 \\\\(\\\\hat{\\\\theta}^* - \\\\hat{\\\\theta}\\\\) 近似 \\\\(\\\\hat{\\\\theta} - \\\\theta\\\\) 的分布，得到</p>
                        \\\\[C_{\\\\text{basic}} = \\\\left[2\\\\hat{\\\\theta} - \\\\hat{\\\\theta}^*_{(1-\\\\alpha/2)}, \\\\; 2\\\\hat{\\\\theta} - \\\\hat{\\\\theta}^*_{(\\\\alpha/2)}\\\\right].\\\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.8 (基本 Bootstrap 法的动机)</div>
                    <div class="env-body">
                        <p>若存在单调变换 \\\\(m\\\\) 使得 \\\\(m(\\\\hat{\\\\theta}) - m(\\\\theta)\\\\) 的分布与 \\\\(\\\\theta\\\\) 无关（即为枢轴量），则基本 Bootstrap 法在该变换下给出精确的置信区间。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.9 (BCa 置信区间)</div>
                    <div class="env-body">
                        <p><strong>BCa 法</strong> (bias-corrected and accelerated) 对百分位法进行偏差和加速度校正。\\\\(1 - \\\\alpha\\\\) BCa 置信区间为</p>
                        \\\\[C_{\\\\text{BCa}} = \\\\left[\\\\hat{\\\\theta}^*_{(\\\\alpha_1)}, \\\\; \\\\hat{\\\\theta}^*_{(\\\\alpha_2)}\\\\right],\\\\]
                        <p>其中</p>
                        \\\\[\\\\alpha_1 = \\\\Phi\\\\!\\\\left(\\\\hat{z}_0 + \\\\frac{\\\\hat{z}_0 + z_{\\\\alpha/2}}{1 - \\\\hat{a}(\\\\hat{z}_0 + z_{\\\\alpha/2})}\\\\right), \\\\quad \\\\alpha_2 = \\\\Phi\\\\!\\\\left(\\\\hat{z}_0 + \\\\frac{\\\\hat{z}_0 + z_{1-\\\\alpha/2}}{1 - \\\\hat{a}(\\\\hat{z}_0 + z_{1-\\\\alpha/2})}\\\\right),\\\\]
                        <p>偏差校正因子 \\\\(\\\\hat{z}_0 = \\\\Phi^{-1}\\\\!\\\\left(\\\\frac{\\\\#\\\\{\\\\hat{\\\\theta}^{*(b)} < \\\\hat{\\\\theta}\\\\}}{B}\\\\right)\\\\)，加速度因子</p>
                        \\\\[\\\\hat{a} = \\\\frac{\\\\sum_{i=1}^{n}(\\\\hat{\\\\theta}_{(\\\\cdot)} - \\\\hat{\\\\theta}_{(i)})^3}{6\\\\left[\\\\sum_{i=1}^{n}(\\\\hat{\\\\theta}_{(\\\\cdot)} - \\\\hat{\\\\theta}_{(i)})^2\\\\right]^{3/2}},\\\\]
                        <p>其中 \\\\(\\\\hat{\\\\theta}_{(i)}\\\\) 是删去第 \\\\(i\\\\) 个观测后的估计值，\\\\(\\\\hat{\\\\theta}_{(\\\\cdot)} = \\\\frac{1}{n}\\\\sum_{i}\\\\hat{\\\\theta}_{(i)}\\\\)。</p>
                    </div>
                </div>

                <div class="env-block warning">
                    <div class="env-title">Warning (Bootstrap 失效的情形)</div>
                    <div class="env-body">
                        <p>Bootstrap 并非万能。以下情形中 Bootstrap 可能失效：</p>
                        <p><strong>1. 不光滑泛函：</strong>对于极值（如 \\\\(X_{(n)} = \\\\max_i X_i\\\\)），Bootstrap 分布的收敛速率不正确。</p>
                        <p><strong>2. 重尾分布：</strong>当 \\\\(\\\\operatorname{Var}(X) = \\\\infty\\\\) 时，Bootstrap 对均值的推断不一致。</p>
                        <p><strong>3. 非独立数据：</strong>简单的 i.i.d. Bootstrap 不适用于时间序列等相依数据（需要 block bootstrap 等变体）。</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 17.10 (三种 Bootstrap CI 的比较)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_{20} \\\\sim \\\\text{Exp}(1)\\\\)（右偏分布），估计均值 \\\\(\\\\theta = 1\\\\)。使用下面的可视化工具观察三种方法的差异。对于偏态分布，BCa 通常比百分位法有更好的覆盖率。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="bootstrap-ci-viz"></div>
            `,
            visualizations: [
                {
                    id: 'bootstrap-ci-viz',
                    title: 'Interactive: Bootstrap 置信区间比较',
                    description: '比较百分位法、基本Bootstrap法和BCa法构造的置信区间',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 420, scale: 1, originX: 60, originY: 210});
                        var n = 20;
                        var B = 1000;
                        var alpha = 0.05;

                        VizEngine.createSlider(controls, '样本量 n', 10, 50, n, 5, function(v) { n = Math.round(v); runBootstrap(); });
                        VizEngine.createSlider(controls, '置信水平 1-a', 0.80, 0.99, 1 - alpha, 0.01, function(v) { alpha = +(1 - v).toFixed(2); runBootstrap(); });
                        VizEngine.createButton(controls, '重新抽样', function() { runBootstrap(); });

                        var data, bootMeans, percCI, basicCI, bcaCI, thetaHat;

                        function runBootstrap() {
                            // Generate exponential data
                            data = VizEngine.sampleArray(function() { return VizEngine.randomExponential(1); }, n);
                            thetaHat = VizEngine.mean(data);

                            bootMeans = [];
                            for (var b = 0; b < B; b++) {
                                var bootSample = [];
                                for (var i = 0; i < n; i++) {
                                    bootSample.push(data[Math.floor(Math.random() * n)]);
                                }
                                bootMeans.push(VizEngine.mean(bootSample));
                            }
                            bootMeans.sort(function(a, b) { return a - b; });

                            // Percentile CI
                            var qLo = VizEngine.quantile(bootMeans, alpha / 2);
                            var qHi = VizEngine.quantile(bootMeans, 1 - alpha / 2);
                            percCI = [qLo, qHi];

                            // Basic CI
                            basicCI = [2 * thetaHat - qHi, 2 * thetaHat - qLo];

                            // BCa CI
                            var countBelow = 0;
                            for (var j = 0; j < bootMeans.length; j++) {
                                if (bootMeans[j] < thetaHat) countBelow++;
                            }
                            var z0Hat = inverseNormalCDF(countBelow / B);

                            // Jackknife for acceleration
                            var jackVals = [];
                            for (var k = 0; k < n; k++) {
                                var jackData = data.slice(0, k).concat(data.slice(k + 1));
                                jackVals.push(VizEngine.mean(jackData));
                            }
                            var jackMean = VizEngine.mean(jackVals);
                            var num = 0, den = 0;
                            for (var m = 0; m < n; m++) {
                                var diff = jackMean - jackVals[m];
                                num += diff * diff * diff;
                                den += diff * diff;
                            }
                            var aHat = den > 0 ? num / (6 * Math.pow(den, 1.5)) : 0;

                            var zAlphaLo = inverseNormalCDF(alpha / 2);
                            var zAlphaHi = inverseNormalCDF(1 - alpha / 2);

                            var a1 = VizEngine.normalCDF(z0Hat + (z0Hat + zAlphaLo) / (1 - aHat * (z0Hat + zAlphaLo)));
                            var a2 = VizEngine.normalCDF(z0Hat + (z0Hat + zAlphaHi) / (1 - aHat * (z0Hat + zAlphaHi)));
                            a1 = Math.max(0.001, Math.min(0.999, a1));
                            a2 = Math.max(0.001, Math.min(0.999, a2));

                            bcaCI = [VizEngine.quantile(bootMeans, a1), VizEngine.quantile(bootMeans, a2)];

                            draw();
                        }

                        function inverseNormalCDF(p) {
                            if (p <= 0) return -4;
                            if (p >= 1) return 4;
                            // Rational approximation (Abramowitz & Stegun 26.2.23)
                            if (p < 0.5) return -inverseNormalCDF(1 - p);
                            var t = Math.sqrt(-2 * Math.log(1 - p));
                            var c0 = 2.515517, c1 = 0.802853, c2 = 0.010328;
                            var d1 = 1.432788, d2 = 0.189269, d3 = 0.001308;
                            return t - (c0 + c1 * t + c2 * t * t) / (1 + d1 * t + d2 * t * t + d3 * t * t * t);
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Histogram of bootstrap means
                            var lo = Math.min.apply(null, bootMeans) - 0.1;
                            var hi = Math.max.apply(null, bootMeans) + 0.1;
                            var nBins = 40;
                            var binW = (hi - lo) / nBins;
                            var bins = [];
                            for (var i = 0; i < nBins; i++) bins.push(0);
                            for (var j = 0; j < bootMeans.length; j++) {
                                var idx = Math.floor((bootMeans[j] - lo) / binW);
                                if (idx >= 0 && idx < nBins) bins[idx]++;
                            }
                            var maxBin = Math.max.apply(null, bins);

                            var plotLeft = 60, plotRight = 520, plotTop = 30, plotBot = 260;
                            var xScale = (plotRight - plotLeft) / (hi - lo);

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Bootstrap 均值分布 (B=' + B + ', n=' + n + ')', plotLeft, 10);

                            for (var k = 0; k < nBins; k++) {
                                var barX = plotLeft + k * binW * xScale;
                                var barW = binW * xScale;
                                var barH = maxBin > 0 ? (bins[k] / maxBin) * (plotBot - plotTop - 20) : 0;
                                if (barH > 0) {
                                    ctx.fillStyle = viz.colors.blue + '55';
                                    ctx.fillRect(barX, plotBot - barH, barW, barH);
                                    ctx.strokeStyle = viz.colors.blue + '88';
                                    ctx.lineWidth = 0.5;
                                    ctx.strokeRect(barX, plotBot - barH, barW, barH);
                                }
                            }

                            // Axis
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(plotLeft, plotBot); ctx.lineTo(plotRight, plotBot); ctx.stroke();

                            // Tick labels
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            var tickStep = (hi - lo) > 3 ? 0.5 : 0.2;
                            for (var t = Math.ceil(lo / tickStep) * tickStep; t <= hi; t += tickStep) {
                                var tx = plotLeft + (t - lo) * xScale;
                                ctx.fillText(t.toFixed(1), tx, plotBot + 3);
                            }

                            // True value line
                            var trueX = plotLeft + (1 - lo) * xScale;
                            if (trueX > plotLeft && trueX < plotRight) {
                                ctx.strokeStyle = viz.colors.white;
                                ctx.lineWidth = 2;
                                ctx.setLineDash([5, 3]);
                                ctx.beginPath(); ctx.moveTo(trueX, plotTop); ctx.lineTo(trueX, plotBot); ctx.stroke();
                                ctx.setLineDash([]);
                                ctx.fillStyle = viz.colors.white;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('theta=1', trueX, plotTop - 2);
                            }

                            // theta hat line
                            var thetaHatX = plotLeft + (thetaHat - lo) * xScale;
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(thetaHatX, plotTop + 10); ctx.lineTo(thetaHatX, plotBot); ctx.stroke();

                            // CI comparison
                            var ciY = plotBot + 35;
                            var ciData = [
                                {name: 'Percentile', ci: percCI, color: viz.colors.teal},
                                {name: 'Basic', ci: basicCI, color: viz.colors.orange},
                                {name: 'BCa', ci: bcaCI, color: viz.colors.purple}
                            ];

                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('置信区间比较 (1-a = ' + (1 - alpha).toFixed(2) + ')', plotLeft, ciY - 5);

                            for (var c = 0; c < ciData.length; c++) {
                                var cy = ciY + 20 + c * 35;
                                var ci = ciData[c].ci;
                                var col = ciData[c].color;
                                var x1 = plotLeft + (ci[0] - lo) * xScale;
                                var x2 = plotLeft + (ci[1] - lo) * xScale;
                                x1 = Math.max(plotLeft, Math.min(plotRight, x1));
                                x2 = Math.max(plotLeft, Math.min(plotRight, x2));

                                // CI bar
                                ctx.strokeStyle = col;
                                ctx.lineWidth = 3;
                                ctx.beginPath(); ctx.moveTo(x1, cy); ctx.lineTo(x2, cy); ctx.stroke();
                                // Caps
                                ctx.beginPath(); ctx.moveTo(x1, cy - 6); ctx.lineTo(x1, cy + 6); ctx.stroke();
                                ctx.beginPath(); ctx.moveTo(x2, cy - 6); ctx.lineTo(x2, cy + 6); ctx.stroke();

                                // Label
                                ctx.fillStyle = col;
                                ctx.font = '11px -apple-system,sans-serif';
                                ctx.textAlign = 'right';
                                ctx.fillText(ciData[c].name, plotLeft - 5, cy + 4);

                                // Values
                                ctx.textAlign = 'left';
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.fillText('[' + ci[0].toFixed(3) + ', ' + ci[1].toFixed(3) + ']', plotRight + 5, cy + 4);
                            }

                            // True value in CI region
                            var trueXCI = plotLeft + (1 - lo) * xScale;
                            if (trueXCI > plotLeft && trueXCI < plotRight) {
                                ctx.strokeStyle = viz.colors.white + '66';
                                ctx.lineWidth = 1;
                                ctx.setLineDash([3, 3]);
                                ctx.beginPath(); ctx.moveTo(trueXCI, ciY + 15); ctx.lineTo(trueXCI, ciY + 110); ctx.stroke();
                                ctx.setLineDash([]);
                            }
                        }

                        runBootstrap();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '证明当 Bootstrap 分布关于 \\\\(\\\\hat{\\\\theta}\\\\) 对称且无偏时，百分位法和基本 Bootstrap 法给出相同的置信区间。',
                    hint: '对称意味着 \\\\(\\\\hat{\\\\theta}^*_{(\\\\alpha/2)} = 2\\\\hat{\\\\theta} - \\\\hat{\\\\theta}^*_{(1-\\\\alpha/2)}\\\\)。',
                    solution: '设 Bootstrap 分布关于 \\\\(\\\\hat{\\\\theta}\\\\) 对称，则 \\\\(\\\\hat{\\\\theta}^*_{(q)} + \\\\hat{\\\\theta}^*_{(1-q)} = 2\\\\hat{\\\\theta}\\\\) 对所有 \\\\(q\\\\)。百分位法给出 \\\\([\\\\hat{\\\\theta}^*_{(\\\\alpha/2)}, \\\\hat{\\\\theta}^*_{(1-\\\\alpha/2)}]\\\\)。基本法给出 \\\\([2\\\\hat{\\\\theta} - \\\\hat{\\\\theta}^*_{(1-\\\\alpha/2)}, 2\\\\hat{\\\\theta} - \\\\hat{\\\\theta}^*_{(\\\\alpha/2)}]\\\\)。由对称性，\\\\(2\\\\hat{\\\\theta} - \\\\hat{\\\\theta}^*_{(1-\\\\alpha/2)} = \\\\hat{\\\\theta}^*_{(\\\\alpha/2)}\\\\) 且 \\\\(2\\\\hat{\\\\theta} - \\\\hat{\\\\theta}^*_{(\\\\alpha/2)} = \\\\hat{\\\\theta}^*_{(1-\\\\alpha/2)}\\\\)，两者一致。'
                },
                {
                    question: '在 BCa 方法中，偏差校正因子 \\\\(\\\\hat{z}_0\\\\) 的直觉含义是什么？当 \\\\(\\\\hat{z}_0 = 0\\\\) 时，BCa 退化为什么方法？',
                    hint: '考虑当正好一半的 Bootstrap 复制值小于 \\\\(\\\\hat{\\\\theta}\\\\) 时，\\\\(\\\\hat{z}_0\\\\) 等于多少。',
                    solution: '\\\\(\\\\hat{z}_0\\\\) 度量 Bootstrap 分布中位数相对于 \\\\(\\\\hat{\\\\theta}\\\\) 的偏差。当 \\\\(\\\\hat{z}_0 = 0\\\\) 时，意味着恰好一半的 Bootstrap 复制值小于 \\\\(\\\\hat{\\\\theta}\\\\)（Bootstrap 分布的中位数等于 \\\\(\\\\hat{\\\\theta}\\\\)），即无偏差。此时若同时 \\\\(\\\\hat{a} = 0\\\\)（无加速度），则 \\\\(\\\\alpha_1 = \\\\Phi(z_{\\\\alpha/2}) = \\\\alpha/2\\\\)，\\\\(\\\\alpha_2 = 1 - \\\\alpha/2\\\\)，BCa 退化为百分位法。'
                },
                {
                    question: '解释为什么 Bootstrap 对样本最大值 \\\\(X_{(n)}\\\\) 的推断不一致。',
                    hint: '考虑 \\\\(n(\\\\theta - X_{(n)})\\\\) 的真实极限分布与 Bootstrap 版本 \\\\(n(X_{(n)} - X^*_{(n)})\\\\) 的极限分布是否一致（以均匀分布为例）。',
                    solution: '设 \\\\(X_1, \\\\ldots, X_n \\\\sim \\\\text{Unif}(0, \\\\theta)\\\\)。真实世界中 \\\\(n(\\\\theta - X_{(n)}) \\\\xrightarrow{d} \\\\text{Exp}(1/\\\\theta)\\\\)，收敛率为 \\\\(n\\\\)。但在 Bootstrap 世界中，\\\\(X^*_{(n)} = X_{(n)}\\\\) 以高概率成立（只要某次抽到了最大观测值）。具体而言，\\\\(P^*(X^*_{(n)} = X_{(n)}) = 1 - (1-1/n)^n \\\\to 1 - 1/e\\\\)，所以 \\\\(n(X_{(n)} - X^*_{(n)})\\\\) 的分布在 0 处有质量约 \\\\(63\\\\%\\\\)，与 \\\\(\\\\text{Exp}(1/\\\\theta)\\\\) 的连续分布不一致。这是因为极值是不光滑泛函。'
                }
            ]
        },

        // === Section 3: Bootstrap 假设检验 ===
        {
            id: 'ch17-sec03',
            title: 'Bootstrap 假设检验',
            content: `
                <h2>Bootstrap 假设检验</h2>

                <p>Bootstrap 不仅用于估计和置信区间，还可以用于假设检验。其核心思想是通过重抽样构造检验统计量在零假设下的分布。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.11 (Bootstrap p 值)</div>
                    <div class="env-body">
                        <p>设观测到的检验统计量为 \\\\(T_{\\\\text{obs}}\\\\)，在零假设 \\\\(H_0\\\\) 下通过 Bootstrap 生成 \\\\(T^{*(1)}, \\\\ldots, T^{*(B)}\\\\)。<strong>Bootstrap p 值</strong>定义为</p>
                        \\\\[p_{\\\\text{boot}} = \\\\frac{1}{B} \\\\sum_{b=1}^{B} \\\\mathbf{1}\\\\!\\\\left(T^{*(b)} \\\\ge T_{\\\\text{obs}}\\\\right).\\\\]
                        <p>（对于双侧检验，使用 \\\\(|T^{*(b)}| \\\\ge |T_{\\\\text{obs}}|\\\\)。）</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (零假设下的 Bootstrap)</div>
                    <div class="env-body">
                        <p>进行 Bootstrap 假设检验时，关键是要在<strong>零假设下</strong>进行重抽样。例如检验 \\\\(H_0: \\\\mu = \\\\mu_0\\\\) 时，应将数据中心化为 \\\\(Y_i = X_i - \\\\bar{X} + \\\\mu_0\\\\)，然后从 \\\\(Y_1, \\\\ldots, Y_n\\\\) 中进行 Bootstrap 抽样。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.12 (置换检验)</div>
                    <div class="env-body">
                        <p>考虑两样本问题：\\\\(X_1, \\\\ldots, X_m \\\\sim F\\\\)，\\\\(Y_1, \\\\ldots, Y_n \\\\sim G\\\\)，检验 \\\\(H_0: F = G\\\\)。</p>
                        <p><strong>置换检验</strong> (permutation test) 的步骤：</p>
                        <p><strong>Step 1.</strong> 计算观测统计量 \\\\(T_{\\\\text{obs}}\\\\)（如两组均值之差 \\\\(\\\\bar{X} - \\\\bar{Y}\\\\)）。</p>
                        <p><strong>Step 2.</strong> 将所有 \\\\(m + n\\\\) 个观测值混合，随机划分为大小 \\\\(m\\\\) 和 \\\\(n\\\\) 的两组。</p>
                        <p><strong>Step 3.</strong> 对每次置换计算统计量 \\\\(T^{*(b)}\\\\)。</p>
                        <p><strong>Step 4.</strong> p 值为 \\\\(\\\\frac{1}{B}\\\\sum_{b=1}^{B} \\\\mathbf{1}(|T^{*(b)}| \\\\ge |T_{\\\\text{obs}}|)\\\\)。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.13 (置换检验的精确性)</div>
                    <div class="env-body">
                        <p>在 \\\\(H_0: F = G\\\\) 下，若使用所有 \\\\(\\\\binom{m+n}{m}\\\\) 种置换，则置换检验是<strong>精确检验</strong>，即对任意 \\\\(\\\\alpha\\\\)，其真实水平恰好等于（或不超过）\\\\(\\\\alpha\\\\)。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>在 \\\\(H_0\\\\) 下，所有 \\\\(N = m + n\\\\) 个观测值来自同一分布。因此数据的任何排列都是等可能的。检验统计量在所有 \\\\(\\\\binom{N}{m}\\\\) 种划分上取值构成了其精确的零分布。p 值等于零分布中不小于观测值的比例，由对称性可知检验水平精确为 \\\\(\\\\alpha\\\\)。</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 17.14 (Bootstrap 双样本检验)</div>
                    <div class="env-body">
                        <p>设 \\\\(X_1, \\\\ldots, X_{15} \\\\sim N(\\\\mu_1, 1)\\\\)，\\\\(Y_1, \\\\ldots, Y_{15} \\\\sim N(\\\\mu_2, 1)\\\\)。检验 \\\\(H_0: \\\\mu_1 = \\\\mu_2\\\\)。使用下面的可视化工具，调整 \\\\(\\\\mu_2\\\\) 观察 p 值如何变化。当 \\\\(\\\\mu_1 = \\\\mu_2\\\\) 时，p 值应大致均匀分布在 \\\\([0,1]\\\\) 上。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="bootstrap-test-viz"></div>
            `,
            visualizations: [
                {
                    id: 'bootstrap-test-viz',
                    title: 'Interactive: Bootstrap / 置换检验',
                    description: '通过重抽样构造检验统计量的零分布，计算p值',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 420, scale: 1, originX: 60, originY: 210});
                        var m = 15, nY = 15;
                        var mu1 = 0, mu2 = 0;
                        var B = 2000;
                        var testType = 'permutation';

                        VizEngine.createSlider(controls, 'mu2 - mu1', 0, 2, mu2, 0.1, function(v) { mu2 = v; runTest(); });
                        VizEngine.createButton(controls, '置换检验', function() { testType = 'permutation'; runTest(); });
                        VizEngine.createButton(controls, 'Bootstrap 检验', function() { testType = 'bootstrap'; runTest(); });
                        VizEngine.createButton(controls, '重新抽样', function() { runTest(); });

                        var dataX, dataY, Tobs, Tboot, pval;

                        function runTest() {
                            dataX = VizEngine.sampleArray(function() { return VizEngine.randomNormal(mu1, 1); }, m);
                            dataY = VizEngine.sampleArray(function() { return VizEngine.randomNormal(mu1 + mu2, 1); }, nY);
                            Tobs = VizEngine.mean(dataX) - VizEngine.mean(dataY);
                            Tboot = [];

                            if (testType === 'permutation') {
                                var pooled = dataX.concat(dataY);
                                for (var b = 0; b < B; b++) {
                                    // Shuffle
                                    var shuffled = pooled.slice();
                                    for (var i = shuffled.length - 1; i > 0; i--) {
                                        var j = Math.floor(Math.random() * (i + 1));
                                        var tmp = shuffled[i]; shuffled[i] = shuffled[j]; shuffled[j] = tmp;
                                    }
                                    var permX = shuffled.slice(0, m);
                                    var permY = shuffled.slice(m);
                                    Tboot.push(VizEngine.mean(permX) - VizEngine.mean(permY));
                                }
                            } else {
                                // Bootstrap under H0: center both groups
                                var pooled2 = dataX.concat(dataY);
                                var pooledMean = VizEngine.mean(pooled2);
                                var centeredX = dataX.map(function(x) { return x - VizEngine.mean(dataX) + pooledMean; });
                                var centeredY = dataY.map(function(y) { return y - VizEngine.mean(dataY) + pooledMean; });
                                for (var b2 = 0; b2 < B; b2++) {
                                    var bx = [];
                                    for (var i2 = 0; i2 < m; i2++) bx.push(centeredX[Math.floor(Math.random() * m)]);
                                    var by = [];
                                    for (var j2 = 0; j2 < nY; j2++) by.push(centeredY[Math.floor(Math.random() * nY)]);
                                    Tboot.push(VizEngine.mean(bx) - VizEngine.mean(by));
                                }
                            }

                            // Two-sided p-value
                            var count = 0;
                            for (var k = 0; k < Tboot.length; k++) {
                                if (Math.abs(Tboot[k]) >= Math.abs(Tobs)) count++;
                            }
                            pval = count / B;
                            draw();
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            var titleStr = testType === 'permutation' ? '置换检验' : 'Bootstrap 检验';
                            ctx.fillText(titleStr + ': H0: mu1 = mu2', 60, 8);

                            // Data points
                            var plotL = 60, plotR = 520, dotY1 = 50, dotY2 = 80;
                            var allData = dataX.concat(dataY);
                            var dMin = Math.min.apply(null, allData) - 0.5;
                            var dMax = Math.max.apply(null, allData) + 0.5;
                            var dScale = (plotR - plotL) / (dMax - dMin);

                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('X:', plotL - 5, dotY1 + 4);
                            for (var i = 0; i < dataX.length; i++) {
                                var dx = plotL + (dataX[i] - dMin) * dScale;
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath(); ctx.arc(dx, dotY1, 4, 0, Math.PI * 2); ctx.fill();
                            }
                            ctx.fillStyle = viz.colors.orange;
                            ctx.textAlign = 'right';
                            ctx.fillText('Y:', plotL - 5, dotY2 + 4);
                            for (var j = 0; j < dataY.length; j++) {
                                var dy = plotL + (dataY[j] - dMin) * dScale;
                                ctx.fillStyle = viz.colors.orange;
                                ctx.beginPath(); ctx.arc(dy, dotY2, 4, 0, Math.PI * 2); ctx.fill();
                            }

                            // Null distribution histogram
                            var histTop = 120, histBot = 370;
                            Tboot.sort(function(a, b) { return a - b; });
                            var tMin = Math.min(Tboot[0], Tobs) - 0.3;
                            var tMax = Math.max(Tboot[Tboot.length - 1], Tobs) + 0.3;
                            var nBins = 50;
                            var binW = (tMax - tMin) / nBins;
                            var bins = [];
                            for (var b = 0; b < nBins; b++) bins.push(0);
                            for (var k = 0; k < Tboot.length; k++) {
                                var idx = Math.floor((Tboot[k] - tMin) / binW);
                                if (idx >= 0 && idx < nBins) bins[idx]++;
                            }
                            var maxBin = Math.max.apply(null, bins);
                            var tScale = (plotR - plotL) / (tMax - tMin);

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('零假设下的统计量分布', plotL, histTop - 10);

                            for (var q = 0; q < nBins; q++) {
                                var bx1 = plotL + q * binW * tScale;
                                var bw = binW * tScale;
                                var bh = maxBin > 0 ? (bins[q] / maxBin) * (histBot - histTop - 10) : 0;

                                // Color bins in rejection region
                                var binCenter = tMin + (q + 0.5) * binW;
                                var inReject = Math.abs(binCenter) >= Math.abs(Tobs);

                                if (bh > 0) {
                                    ctx.fillStyle = inReject ? viz.colors.red + '77' : viz.colors.teal + '55';
                                    ctx.fillRect(bx1, histBot - bh, bw, bh);
                                    ctx.strokeStyle = inReject ? viz.colors.red + 'aa' : viz.colors.teal + '88';
                                    ctx.lineWidth = 0.5;
                                    ctx.strokeRect(bx1, histBot - bh, bw, bh);
                                }
                            }

                            // T_obs line
                            var tobsX = plotL + (Tobs - tMin) * tScale;
                            ctx.strokeStyle = viz.colors.yellow;
                            ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(tobsX, histTop); ctx.lineTo(tobsX, histBot); ctx.stroke();
                            ctx.fillStyle = viz.colors.yellow;
                            ctx.font = 'bold 11px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('T_obs=' + Tobs.toFixed(3), tobsX, histTop - 2);

                            // Negative mirror
                            var tobsNegX = plotL + (-Tobs - tMin) * tScale;
                            if (tobsNegX > plotL && tobsNegX < plotR) {
                                ctx.strokeStyle = viz.colors.yellow + '66';
                                ctx.lineWidth = 1;
                                ctx.setLineDash([4, 3]);
                                ctx.beginPath(); ctx.moveTo(tobsNegX, histTop); ctx.lineTo(tobsNegX, histBot); ctx.stroke();
                                ctx.setLineDash([]);
                            }

                            // Axis
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(plotL, histBot); ctx.lineTo(plotR, histBot); ctx.stroke();

                            // p-value
                            var pColor = pval < 0.05 ? viz.colors.red : viz.colors.green;
                            ctx.fillStyle = pColor;
                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('p-value = ' + pval.toFixed(4), plotL, histBot + 15);
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillText(pval < 0.05 ? '(在 a=0.05 下拒绝 H0)' : '(在 a=0.05 下不拒绝 H0)', plotL + 170, histBot + 17);

                            // mu info
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('mu2 - mu1 = ' + mu2.toFixed(1), plotR, histBot + 17);
                        }

                        runTest();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '解释为什么在 Bootstrap 假设检验中，必须在零假设下进行重抽样，而不是直接从原始数据进行重抽样。',
                    hint: '考虑 Bootstrap 重抽样的目的是模拟什么。',
                    solution: 'p 值的定义是在 H0 为真时观测到至少同样极端的统计量的概率。如果我们直接从原始数据重抽样，Bootstrap 分布反映的是数据生成过程的真实分布，而非零假设下的分布。例如检验 H0: mu = 0 但数据均值为 3 时，直接 Bootstrap 会产生以 3 为中心的分布，导致 p 值估计有偏。正确的做法是将数据中心化到 H0 下的值（减去 x_bar 加上 mu_0 = 0），然后再 Bootstrap，这样重抽样分布才反映 H0 下的情形。'
                },
                {
                    question: '置换检验和 Bootstrap 检验的主要区别是什么？什么情况下它们会给出不同的结论？',
                    hint: '考虑抽样方式的差异：置换是无放回的重排列，Bootstrap 是有放回的重抽样。',
                    solution: '置换检验将两组数据混合后无放回地重新分配，保持组的大小不变。它检验的精确零假设是 F = G（两个分布完全相同）。Bootstrap 检验则通过有放回抽样在 H0 下构造零分布，检验的可以是更具体的假设（如 mu1 = mu2）。当两组方差不同但均值相同时（H0: mu1 = mu2 但 sigma1 != sigma2），置换检验可能不恰当（因为 F != G），而适当构造的 Bootstrap 检验仍然有效。此外，对于非常小的样本，置换检验提供精确检验，而 Bootstrap 只是近似的。'
                },
                {
                    question: '假设你对 \\\\(n = 100\\\\) 个数据点用 \\\\(B = 999\\\\) 次 Bootstrap 进行单侧检验。得到的 p 值可能取哪些值？为什么通常建议 \\\\(B\\\\) 取奇数（如 999 而非 1000）？',
                    hint: '考虑 Bootstrap p 值的分辨率。',
                    solution: 'Bootstrap p 值的形式为 k/B（或 (k+1)/(B+1) 的修正形式），其中 k = 0, 1, ..., B。因此可能的 p 值为 0/999, 1/999, ..., 999/999。分辨率为 1/B。取 B = 999 时，若使用修正 p 值 (k+1)/(B+1) = (k+1)/1000，恰好得到千分之一为单位的 p 值，便于解读。若 B = 1000，修正后分母为 1001，p 值不那么"整"。更重要的是，修正公式 (k+1)/(B+1) 确保 p 值不会为 0，这在理论上更合理。'
                }
            ]
        },

        // === Section 4: Jackknife 与交叉验证 ===
        {
            id: 'ch17-sec04',
            title: 'Jackknife 与交叉验证',
            content: `
                <h2>Jackknife 与交叉验证</h2>

                <p>Jackknife 是 Bootstrap 的前身，由 Quenouille (1949) 和 Tukey (1958) 发展。它通过系统性地逐个删除观测值来估计偏差和方差。交叉验证则是预测建模中评估模型性能的标准工具。</p>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.15 (Jackknife 估计)</div>
                    <div class="env-body">
                        <p>设 \\\\(\\\\hat{\\\\theta} = T(X_1, \\\\ldots, X_n)\\\\) 为统计量。记 \\\\(\\\\hat{\\\\theta}_{(i)} = T(X_1, \\\\ldots, X_{i-1}, X_{i+1}, \\\\ldots, X_n)\\\\) 为删去第 \\\\(i\\\\) 个观测后的估计值。定义：</p>
                        <p><strong>Jackknife 偏差估计：</strong></p>
                        \\\\[\\\\widehat{\\\\text{Bias}}_{\\\\text{jack}} = (n-1)\\\\left(\\\\hat{\\\\theta}_{(\\\\cdot)} - \\\\hat{\\\\theta}\\\\right), \\\\quad \\\\hat{\\\\theta}_{(\\\\cdot)} = \\\\frac{1}{n}\\\\sum_{i=1}^{n} \\\\hat{\\\\theta}_{(i)}.\\\\]
                        <p><strong>Jackknife 方差估计：</strong></p>
                        \\\\[\\\\widehat{\\\\text{Var}}_{\\\\text{jack}} = \\\\frac{n-1}{n} \\\\sum_{i=1}^{n} \\\\left(\\\\hat{\\\\theta}_{(i)} - \\\\hat{\\\\theta}_{(\\\\cdot)}\\\\right)^2.\\\\]
                        <p><strong>偏差校正 Jackknife 估计：</strong></p>
                        \\\\[\\\\tilde{\\\\theta}_{\\\\text{jack}} = \\\\hat{\\\\theta} - \\\\widehat{\\\\text{Bias}}_{\\\\text{jack}} = n\\\\hat{\\\\theta} - (n-1)\\\\hat{\\\\theta}_{(\\\\cdot)}.\\\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.16 (Jackknife 偏差校正的精度)</div>
                    <div class="env-body">
                        <p>若 \\\\(\\\\hat{\\\\theta}\\\\) 的偏差可以展开为</p>
                        \\\\[\\\\text{Bias}(\\\\hat{\\\\theta}) = \\\\frac{a_1}{n} + \\\\frac{a_2}{n^2} + \\\\cdots,\\\\]
                        <p>则 Jackknife 偏差校正后的估计量 \\\\(\\\\tilde{\\\\theta}_{\\\\text{jack}}\\\\) 的偏差为 \\\\(O(n^{-2})\\\\)，即消除了 \\\\(O(n^{-1})\\\\) 阶的偏差。</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p>记 \\\\(E[\\\\hat{\\\\theta}] = \\\\theta + a_1/n + a_2/n^2 + \\\\cdots\\\\)。删去一个观测后样本量为 \\\\(n-1\\\\)，因此</p>
                        \\\\[E[\\\\hat{\\\\theta}_{(i)}] = \\\\theta + \\\\frac{a_1}{n-1} + \\\\frac{a_2}{(n-1)^2} + \\\\cdots.\\\\]
                        <p>于是</p>
                        \\\\[E[\\\\tilde{\\\\theta}_{\\\\text{jack}}] = nE[\\\\hat{\\\\theta}] - (n-1)E[\\\\hat{\\\\theta}_{(\\\\cdot)}] = n\\\\left(\\\\theta + \\\\frac{a_1}{n} + \\\\frac{a_2}{n^2}\\\\right) - (n-1)\\\\left(\\\\theta + \\\\frac{a_1}{n-1} + \\\\frac{a_2}{(n-1)^2}\\\\right) + \\\\cdots\\\\]
                        \\\\[= \\\\theta + a_1 + \\\\frac{a_2}{n} - \\\\theta - a_1 - \\\\frac{(n-1)a_2}{(n-1)^2} + \\\\cdots = \\\\theta + O(n^{-2}).\\\\]
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.17 (Jackknife 伪值与影响)</div>
                    <div class="env-body">
                        <p>第 \\\\(i\\\\) 个观测的 <strong>Jackknife 伪值</strong> (pseudovalue) 定义为</p>
                        \\\\[\\\\tilde{\\\\theta}_i = n\\\\hat{\\\\theta} - (n-1)\\\\hat{\\\\theta}_{(i)}.\\\\]
                        <p>注意 \\\\(\\\\tilde{\\\\theta}_{\\\\text{jack}} = \\\\frac{1}{n}\\\\sum_{i=1}^{n} \\\\tilde{\\\\theta}_i\\\\)。伪值度量了第 \\\\(i\\\\) 个观测对整体估计的<strong>影响</strong>。</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 17.18 (交叉验证)</div>
                    <div class="env-body">
                        <p>设数据 \\\\(\\\\mathcal{D} = \\\\{(x_i, y_i)\\\\}_{i=1}^{n}\\\\)，模型为 \\\\(\\\\hat{f}\\\\)。<strong>\\\\(K\\\\)-折交叉验证</strong> (K-fold cross-validation) 的步骤：</p>
                        <p><strong>Step 1.</strong> 将数据随机等分为 \\\\(K\\\\) 个子集 \\\\(\\\\mathcal{D}_1, \\\\ldots, \\\\mathcal{D}_K\\\\)。</p>
                        <p><strong>Step 2.</strong> 对 \\\\(k = 1, \\\\ldots, K\\\\)：用 \\\\(\\\\mathcal{D} \\\\setminus \\\\mathcal{D}_k\\\\) 训练模型 \\\\(\\\\hat{f}^{(-k)}\\\\)，在 \\\\(\\\\mathcal{D}_k\\\\) 上计算预测误差。</p>
                        <p><strong>Step 3.</strong> 交叉验证误差为</p>
                        \\\\[\\\\text{CV}(K) = \\\\frac{1}{n} \\\\sum_{k=1}^{K} \\\\sum_{i \\\\in \\\\mathcal{D}_k} L(y_i, \\\\hat{f}^{(-k)}(x_i)),\\\\]
                        <p>其中 \\\\(L\\\\) 是损失函数（如平方误差 \\\\(L(y, \\\\hat{y}) = (y - \\\\hat{y})^2\\\\)）。</p>
                        <p>当 \\\\(K = n\\\\) 时为<strong>留一交叉验证</strong> (LOOCV)。</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 17.19 (LOOCV 与 Jackknife 的关系)</div>
                    <div class="env-body">
                        <p>对于线性回归模型，LOOCV 等价于</p>
                        \\\\[\\\\text{CV}(n) = \\\\frac{1}{n} \\\\sum_{i=1}^{n} \\\\left(\\\\frac{y_i - \\\\hat{y}_i}{1 - h_{ii}}\\\\right)^2,\\\\]
                        <p>其中 \\\\(h_{ii}\\\\) 是帽子矩阵 \\\\(H = X(X^TX)^{-1}X^T\\\\) 的第 \\\\(i\\\\) 个对角元素。因此 LOOCV 可以从一次完整回归中计算，无需反复拟合。</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Bootstrap 与 Jackknife 的联系)</div>
                    <div class="env-body">
                        <p>Jackknife 可以视为 Bootstrap 的线性近似。具体而言，Jackknife 方差估计等于 Bootstrap 方差估计的无穷小版本 (infinitesimal jackknife)。对于光滑统计量，两者渐近等价。但对于不光滑的统计量（如中位数），Jackknife 的表现不如 Bootstrap。</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="jackknife-influence-viz"></div>

                <div class="viz-placeholder" data-viz="cv-viz"></div>
            `,
            visualizations: [
                {
                    id: 'jackknife-influence-viz',
                    title: 'Interactive: Jackknife 影响分析',
                    description: '逐个删除观测值，观察估计如何变化，识别有影响力的观测',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 400, scale: 1, originX: 60, originY: 200});
                        var n = 15;
                        var data = [];
                        var highlightIdx = -1;

                        function generateData() {
                            data = VizEngine.sampleArray(function() { return VizEngine.randomNormal(5, 1.5); }, n - 1);
                            // Add one potential outlier
                            data.push(5 + 4 * (Math.random() > 0.5 ? 1 : -1));
                            data.sort(function(a, b) { return a - b; });
                        }

                        VizEngine.createSlider(controls, '样本量 n', 8, 25, n, 1, function(v) { n = Math.round(v); generateData(); highlightIdx = -1; draw(); });
                        VizEngine.createButton(controls, '重新生成', function() { generateData(); highlightIdx = -1; draw(); });

                        generateData();

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            var thetaHat = VizEngine.mean(data);
                            var jackVals = [];
                            for (var i = 0; i < data.length; i++) {
                                var sub = data.slice(0, i).concat(data.slice(i + 1));
                                jackVals.push(VizEngine.mean(sub));
                            }
                            var jackMean = VizEngine.mean(jackVals);
                            var jackBias = (data.length - 1) * (jackMean - thetaHat);
                            var jackVar = 0;
                            for (var j = 0; j < jackVals.length; j++) {
                                jackVar += (jackVals[j] - jackMean) * (jackVals[j] - jackMean);
                            }
                            jackVar *= (data.length - 1) / data.length;
                            var jackSE = Math.sqrt(jackVar);

                            // Pseudovalues
                            var pseudos = [];
                            for (var k = 0; k < data.length; k++) {
                                pseudos.push(data.length * thetaHat - (data.length - 1) * jackVals[k]);
                            }

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Jackknife 影响分析 (n=' + data.length + ')', 20, 8);

                            // Data points on a number line
                            var plotL = 60, plotR = 530;
                            var dMin = Math.min.apply(null, data) - 1;
                            var dMax = Math.max.apply(null, data) + 1;
                            var dScale = (plotR - plotL) / (dMax - dMin);
                            var dotY = 50;

                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(plotL, dotY + 15); ctx.lineTo(plotR, dotY + 15); ctx.stroke();

                            for (var m = 0; m < data.length; m++) {
                                var dx = plotL + (data[m] - dMin) * dScale;
                                var isHighlight = m === highlightIdx;
                                ctx.fillStyle = isHighlight ? viz.colors.red : viz.colors.blue;
                                ctx.beginPath();
                                ctx.arc(dx, dotY, isHighlight ? 7 : 5, 0, Math.PI * 2);
                                ctx.fill();
                                if (isHighlight) {
                                    ctx.fillStyle = viz.colors.red;
                                    ctx.font = '10px -apple-system,sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.fillText('X' + (m + 1), dx, dotY - 14);
                                }
                            }

                            // theta hat line
                            var thetaX = plotL + (thetaHat - dMin) * dScale;
                            ctx.strokeStyle = viz.colors.orange;
                            ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(thetaX, dotY - 10); ctx.lineTo(thetaX, dotY + 20); ctx.stroke();

                            // Jackknife values bar chart
                            var barTop = 100, barBot = 250;
                            var barW = (plotR - plotL - 20) / data.length;
                            var jMin = Math.min.apply(null, jackVals);
                            var jMax = Math.max.apply(null, jackVals);
                            var jRange = Math.max(jMax - jMin, 0.01);
                            var jMid = (jMin + jMax) / 2;
                            var jScale = (barBot - barTop - 30) / jRange;

                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('theta_(i): 删去第 i 个观测后的均值', plotL, barTop - 10);

                            // Reference line at theta hat
                            var refY = barBot - (thetaHat - jMin) * jScale;
                            refY = Math.max(barTop + 5, Math.min(barBot - 5, refY));
                            ctx.strokeStyle = viz.colors.orange + '88';
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath(); ctx.moveTo(plotL, refY); ctx.lineTo(plotR, refY); ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = viz.colors.orange;
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'right';
                            ctx.fillText('theta=' + thetaHat.toFixed(3), plotR + 2, refY - 8);

                            for (var p = 0; p < data.length; p++) {
                                var bx = plotL + 10 + p * barW;
                                var by = barBot - (jackVals[p] - jMin) * jScale;
                                by = Math.max(barTop + 5, Math.min(barBot - 5, by));
                                var isHL = p === highlightIdx;
                                ctx.fillStyle = isHL ? viz.colors.red : viz.colors.teal;
                                ctx.fillRect(bx, Math.min(by, refY), barW - 2, Math.abs(by - refY));
                                ctx.strokeStyle = isHL ? viz.colors.red : viz.colors.teal + 'aa';
                                ctx.lineWidth = 1;
                                ctx.strokeRect(bx, Math.min(by, refY), barW - 2, Math.abs(by - refY));

                                // Index label
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '9px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(p + 1, bx + barW / 2 - 1, barBot + 5);
                            }

                            // Stats panel
                            var statsY = barBot + 25;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Jackknife 偏差估计: ' + jackBias.toFixed(5), plotL, statsY);
                            ctx.fillText('Jackknife 标准误: ' + jackSE.toFixed(4), plotL, statsY + 20);

                            if (highlightIdx >= 0) {
                                ctx.fillStyle = viz.colors.red;
                                ctx.fillText('删去 X' + (highlightIdx + 1) + ' (' + data[highlightIdx].toFixed(2) + '): theta_(i) = ' + jackVals[highlightIdx].toFixed(4) + ', 伪值 = ' + pseudos[highlightIdx].toFixed(4), plotL, statsY + 40);
                            }

                            // Influence bar
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillText('(点击数据点选中)', plotL + 300, statsY + 40);
                        }

                        // Click handler
                        viz.canvas.addEventListener('click', function(e) {
                            var rect = viz.canvas.getBoundingClientRect();
                            var mx = e.clientX - rect.left;
                            var my = e.clientY - rect.top;
                            var plotL = 60, plotR = 530;
                            var dMin = Math.min.apply(null, data) - 1;
                            var dMax = Math.max.apply(null, data) + 1;
                            var dScale = (plotR - plotL) / (dMax - dMin);
                            var dotY = 50;
                            var best = -1, bestDist = 20;
                            for (var i = 0; i < data.length; i++) {
                                var dx = plotL + (data[i] - dMin) * dScale;
                                var dist = Math.sqrt((mx - dx) * (mx - dx) + (my - dotY) * (my - dotY));
                                if (dist < bestDist) { bestDist = dist; best = i; }
                            }
                            highlightIdx = best;
                            draw();
                        });

                        draw();
                        return viz;
                    }
                },
                {
                    id: 'cv-viz',
                    title: 'Interactive: K-折交叉验证',
                    description: '可视化K-fold CV的数据划分和预测误差',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, {width: 560, height: 380, scale: 1, originX: 60, originY: 190});
                        var n = 30;
                        var K = 5;
                        var currentFold = -1;

                        // Generate regression data: y = 2 + 0.5x + noise
                        var dataX = [], dataY = [];
                        function generateRegData() {
                            dataX = []; dataY = [];
                            for (var i = 0; i < n; i++) {
                                var xi = (i / (n - 1)) * 8 - 1;
                                dataX.push(xi);
                                dataY.push(2 + 0.5 * xi + VizEngine.randomNormal(0, 0.8));
                            }
                        }
                        generateRegData();

                        VizEngine.createSlider(controls, 'K (折数)', 2, n, K, 1, function(v) { K = Math.round(v); currentFold = -1; draw(); });
                        VizEngine.createButton(controls, '重新生成数据', function() { generateRegData(); currentFold = -1; draw(); });
                        VizEngine.createButton(controls, '下一折', function() { currentFold = (currentFold + 1) % K; draw(); });
                        VizEngine.createButton(controls, '显示全部', function() { currentFold = -1; draw(); });

                        function linearFit(xs, ys) {
                            var mx = VizEngine.mean(xs), my = VizEngine.mean(ys);
                            var num = 0, den = 0;
                            for (var i = 0; i < xs.length; i++) {
                                num += (xs[i] - mx) * (ys[i] - my);
                                den += (xs[i] - mx) * (xs[i] - mx);
                            }
                            var slope = den > 0 ? num / den : 0;
                            var intercept = my - slope * mx;
                            return {slope: slope, intercept: intercept};
                        }

                        function draw() {
                            viz.clear();
                            var ctx = viz.ctx;

                            // Assign folds
                            var foldAssign = [];
                            for (var i = 0; i < n; i++) foldAssign.push(i % K);

                            // Plot setup
                            var plotL = 60, plotR = 380, plotTop = 30, plotBot = 300;
                            var xMin = -2, xMax = 8, yMin = -1, yMax = 7;
                            var xSc = (plotR - plotL) / (xMax - xMin);
                            var ySc = (plotBot - plotTop) / (yMax - yMin);

                            // Title
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            var titleStr = K + '-fold 交叉验证';
                            if (K === n) titleStr = 'LOOCV (K=n=' + n + ')';
                            ctx.fillText(titleStr, plotL, 8);

                            // Axes
                            ctx.strokeStyle = viz.colors.axis;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(plotL, plotBot); ctx.lineTo(plotR, plotBot); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(plotL, plotTop); ctx.lineTo(plotL, plotBot); ctx.stroke();

                            // Fold colors
                            var foldColors = [viz.colors.blue, viz.colors.teal, viz.colors.orange, viz.colors.purple, viz.colors.pink, viz.colors.green, viz.colors.yellow, viz.colors.red];

                            // Draw data points
                            for (var j = 0; j < n; j++) {
                                var px = plotL + (dataX[j] - xMin) * xSc;
                                var py = plotBot - (dataY[j] - yMin) * ySc;
                                var fold = foldAssign[j];
                                var isTest = currentFold >= 0 && fold === currentFold;
                                var col = currentFold < 0 ? foldColors[fold % foldColors.length] : (isTest ? viz.colors.red : viz.colors.blue + '77');
                                ctx.fillStyle = col;
                                ctx.beginPath();
                                ctx.arc(px, py, isTest ? 6 : 4, 0, Math.PI * 2);
                                ctx.fill();
                                if (isTest) {
                                    ctx.strokeStyle = viz.colors.red;
                                    ctx.lineWidth = 2;
                                    ctx.stroke();
                                }
                            }

                            // Fit on training data and show prediction errors for current fold
                            var cvErrors = [];
                            for (var f = 0; f < K; f++) {
                                var trainX = [], trainY = [], testX = [], testY = [];
                                for (var m = 0; m < n; m++) {
                                    if (foldAssign[m] === f) { testX.push(dataX[m]); testY.push(dataY[m]); }
                                    else { trainX.push(dataX[m]); trainY.push(dataY[m]); }
                                }
                                if (trainX.length < 2) continue;
                                var fit = linearFit(trainX, trainY);
                                var foldErr = 0;
                                for (var t = 0; t < testX.length; t++) {
                                    var pred = fit.intercept + fit.slope * testX[t];
                                    foldErr += (testY[t] - pred) * (testY[t] - pred);
                                }
                                cvErrors.push(testX.length > 0 ? foldErr / testX.length : 0);

                                if (f === currentFold) {
                                    // Draw regression line for this fold's training set
                                    var lx1 = xMin, ly1 = fit.intercept + fit.slope * lx1;
                                    var lx2 = xMax, ly2 = fit.intercept + fit.slope * lx2;
                                    ctx.strokeStyle = viz.colors.green;
                                    ctx.lineWidth = 2;
                                    ctx.beginPath();
                                    ctx.moveTo(plotL + (lx1 - xMin) * xSc, plotBot - (ly1 - yMin) * ySc);
                                    ctx.lineTo(plotL + (lx2 - xMin) * xSc, plotBot - (ly2 - yMin) * ySc);
                                    ctx.stroke();

                                    // Draw residuals for test points
                                    for (var t2 = 0; t2 < testX.length; t2++) {
                                        var pred2 = fit.intercept + fit.slope * testX[t2];
                                        var px2 = plotL + (testX[t2] - xMin) * xSc;
                                        var pyObs = plotBot - (testY[t2] - yMin) * ySc;
                                        var pyPred = plotBot - (pred2 - yMin) * ySc;
                                        ctx.strokeStyle = viz.colors.red + 'aa';
                                        ctx.lineWidth = 1.5;
                                        ctx.beginPath(); ctx.moveTo(px2, pyObs); ctx.lineTo(px2, pyPred); ctx.stroke();
                                    }
                                }
                            }

                            // Right panel: CV error per fold
                            var panelL = 400, panelR = 540, panelTop = 50;
                            ctx.fillStyle = viz.colors.white;
                            ctx.font = 'bold 11px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('各折误差 (MSE)', panelL, panelTop - 15);

                            if (cvErrors.length > 0) {
                                var maxErr = Math.max.apply(null, cvErrors);
                                var barH = Math.min(20, 200 / K);
                                for (var e = 0; e < cvErrors.length; e++) {
                                    var ey = panelTop + e * (barH + 2);
                                    var ew = maxErr > 0 ? (cvErrors[e] / maxErr) * (panelR - panelL - 40) : 0;
                                    var eColor = e === currentFold ? viz.colors.red : viz.colors.teal + '88';
                                    ctx.fillStyle = eColor;
                                    ctx.fillRect(panelL, ey, ew, barH - 1);
                                    ctx.fillStyle = viz.colors.text;
                                    ctx.font = '9px -apple-system,sans-serif';
                                    ctx.textAlign = 'left';
                                    ctx.fillText(cvErrors[e].toFixed(3), panelL + ew + 3, ey + barH / 2 + 3);
                                }
                                var totalCV = VizEngine.mean(cvErrors);
                                ctx.fillStyle = viz.colors.yellow;
                                ctx.font = 'bold 12px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                var cvTextY = panelTop + cvErrors.length * (barH + 2) + 10;
                                ctx.fillText('CV = ' + totalCV.toFixed(4), panelL, cvTextY);
                            }

                            // Legend
                            var legY = plotBot + 15;
                            if (currentFold >= 0) {
                                ctx.fillStyle = viz.colors.blue;
                                ctx.beginPath(); ctx.arc(plotL + 5, legY, 4, 0, Math.PI * 2); ctx.fill();
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('训练集', plotL + 15, legY + 4);

                                ctx.fillStyle = viz.colors.red;
                                ctx.beginPath(); ctx.arc(plotL + 75, legY, 4, 0, Math.PI * 2); ctx.fill();
                                ctx.fillStyle = viz.colors.text;
                                ctx.fillText('测试折 (fold ' + (currentFold + 1) + ')', plotL + 85, legY + 4);

                                ctx.strokeStyle = viz.colors.green;
                                ctx.lineWidth = 2;
                                ctx.beginPath(); ctx.moveTo(plotL + 200, legY); ctx.lineTo(plotL + 220, legY); ctx.stroke();
                                ctx.fillStyle = viz.colors.text;
                                ctx.fillText('训练集拟合', plotL + 225, legY + 4);
                            } else {
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '10px -apple-system,sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('各颜色代表不同的折 (fold)', plotL, legY + 4);
                            }
                        }

                        draw();
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: '设 \\\\(\\\\hat{\\\\theta} = \\\\bar{X}^2\\\\) 是 \\\\(\\\\mu^2\\\\) 的估计量（其中 \\\\(X_i \\\\sim N(\\\\mu, \\\\sigma^2)\\\\)）。求 \\\\(\\\\hat{\\\\theta}\\\\) 的偏差，并说明 Jackknife 偏差校正如何减小它。',
                    hint: '\\\\(E[\\\\bar{X}^2] = \\\\mu^2 + \\\\sigma^2/n\\\\)。偏差是 \\\\(\\\\sigma^2/n\\\\)，形式为 \\\\(a_1/n\\\\)。',
                    solution: '\\\\(E[\\\\bar{X}^2] = \\\\operatorname{Var}(\\\\bar{X}) + (E[\\\\bar{X}])^2 = \\\\sigma^2/n + \\\\mu^2\\\\)。因此偏差为 \\\\(\\\\sigma^2/n\\\\)，确实是 \\\\(O(1/n)\\\\) 的形式。Jackknife 偏差估计为 \\\\((n-1)(\\\\hat{\\\\theta}_{(\\\\cdot)} - \\\\hat{\\\\theta})\\\\)。每个 \\\\(\\\\hat{\\\\theta}_{(i)} = \\\\bar{X}_{(i)}^2\\\\) 的期望为 \\\\(\\\\mu^2 + \\\\sigma^2/(n-1)\\\\)。因此 Jackknife 偏差估计的期望为 \\\\((n-1)(\\\\sigma^2/(n-1) - \\\\sigma^2/n) = \\\\sigma^2/n\\\\)，正确估计了偏差。校正后 \\\\(\\\\tilde{\\\\theta}_{\\\\text{jack}} = \\\\bar{X}^2 - S^2/n\\\\)（近似），偏差降为 \\\\(O(n^{-2})\\\\)。'
                },
                {
                    question: '解释为什么 Jackknife 对中位数的方差估计不一致，而 Bootstrap 可以一致估计中位数的方差。',
                    hint: '考虑删去一个观测对中位数的影响——中位数是不光滑统计量。',
                    solution: '中位数是不光滑 (non-smooth) 泛函。删去一个观测时，样本中位数只可能变为相邻的次序统计量，因此 Jackknife 值 \\\\(\\\\hat{\\\\theta}_{(i)}\\\\) 只能取少数几个不同的值。具体而言，大多数 \\\\(\\\\hat{\\\\theta}_{(i)}\\\\) 等于 \\\\(\\\\hat{\\\\theta}\\\\) 或非常接近，导致 Jackknife 方差估计中 \\\\((\\\\hat{\\\\theta}_{(i)} - \\\\hat{\\\\theta}_{(\\\\cdot)})^2\\\\) 的求和低估了真实方差。乘以 \\\\((n-1)/n\\\\) 的放大因子也无法补偿这种阶梯效应。而 Bootstrap 通过有放回抽样可以产生连续范围的中位数值，能更好地近似其抽样分布。'
                },
                {
                    question: '在 K-折交叉验证中，讨论 K 的选择对偏差-方差权衡的影响。LOOCV (K=n) 与 5-fold CV 各有什么优缺点？',
                    hint: '考虑训练集大小对模型偏差的影响，以及不同折之间的相关性对方差的影响。',
                    solution: '当 K 增大（如 LOOCV，K=n）：训练集大小接近 n，模型偏差小（近似全样本训练），但各折的训练集高度重叠（共享 n-2 个观测），导致 CV 估计的方差大。当 K 小（如 5-fold）：训练集只有 4n/5，偏差略大，但各折训练集重叠较少，CV 估计方差较小。此外 LOOCV 计算开销为 O(n) 次模型拟合（除非有如帽子矩阵的简化公式），而 5-fold 只需 5 次。实践中 K=5 或 K=10 通常是偏差与方差的良好折中。LOOCV 适用于小样本或可以廉价计算的模型。'
                }
            ]
        }
    ]
});

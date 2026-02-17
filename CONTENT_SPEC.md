# Content Specification for Chapter Files

## JS File Format (follow exactly)

```javascript
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch00',       // match CHAPTER_MANIFEST exactly
    number: 0,
    title: '概率空间与随机变量',
    subtitle: 'Probability Spaces & Random Variables',
    sections: [
        {
            id: 'ch00-sec01',
            title: 'Section Title',
            content: `
                <h2>Section Title</h2>
                <p>Paragraph with \\\\(inline math\\\\). Display math below:</p>
                \\\\[P(A \\\\cup B) = P(A) + P(B) - P(A \\\\cap B)\\\\]

                <div class="env-block definition">
                    <div class="env-title">Definition 0.1 (Probability Space)</div>
                    <div class="env-body"><p>A <strong>probability space</strong> is a triple \\\\((\\\\Omega, \\\\mathcal{F}, P)\\\\)...</p></div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 0.2 (Bayes' Rule)</div>
                    <div class="env-body"><p>If \\\\(P(B) &gt; 0\\\\), then \\\\(P(A|B) = \\\\frac{P(B|A)P(A)}{P(B)}\\\\).</p></div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By definition of conditional probability...</p>
                        <div class="qed">∎</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 0.3</div>
                    <div class="env-body"><p>Consider tossing a fair die...</p></div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body"><p>Think of the CDF as the cumulative area under the PDF curve...</p></div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body"><p>This generalizes to σ-finite measures...</p></div>
                </div>

                <div class="viz-placeholder" data-viz="cdf-viz"></div>
            `,
            visualizations: [
                {
                    id: 'cdf-viz',
                    title: 'Interactive: CDF Step Function',
                    description: 'Drag to see how the CDF accumulates probability',
                    setup: function(container, controls) {
                        const viz = new VizEngine(container, {width: 560, height: 400, scale: 40});
                        // ... visualization code ...
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that \\\\(P(A^c) = 1 - P(A)\\\\) using the axioms of probability.',
                    hint: 'Use the fact that \\\\(A \\\\cup A^c = \\\\Omega\\\\) and \\\\(A \\\\cap A^c = \\\\emptyset\\\\).',
                    solution: 'Since \\\\(\\\\Omega = A \\\\cup A^c\\\\) and the union is disjoint, by countable additivity \\\\(1 = P(\\\\Omega) = P(A) + P(A^c)\\\\), hence \\\\(P(A^c) = 1 - P(A)\\\\).'
                }
            ]
        }
        // ... more sections
    ]
});
```

## Available env-block Classes

| Class | Color | Use for |
|-------|-------|---------|
| definition | Green | Formal definitions |
| theorem | Orange | Theorems |
| proposition | Orange | Propositions |
| lemma | Yellow | Lemmas |
| corollary | Yellow | Corollaries |
| proof | Purple | Proofs (end with `<div class="qed">∎</div>`) |
| example | Blue | Worked examples |
| intuition | Teal | Geometric insight, metaphors, "why this matters" |
| remark | Gray | Side notes, connections |
| warning | Red | Common mistakes, subtle points |

## Math Delimiters (CRITICAL)

Content lives inside JS template literals (backticks). This means:

- **Inline math**: `\\\\(` and `\\\\)` — e.g., `\\\\(x + y\\\\)` renders as x + y
- **Display math**: `\\\\[` and `\\\\]` — e.g., `\\\\[\\\\sum_{i=1}^{n} x_i\\\\]`
- **LaTeX commands**: DOUBLE backslash — `\\\\alpha`, `\\\\mathbb{R}`, `\\\\frac{a}{b}`, `\\\\operatorname{Var}`
- **NEVER use `$` or `$$` delimiters** — they break in template literals when `$` precedes `{`

Examples of correct math in template literals:
- `\\\\(\\\\mathbb{E}[X]\\\\)` → E[X]
- `\\\\(\\\\operatorname{Var}(X)\\\\)` → Var(X)
- `\\\\[\\\\hat{\\\\theta}_n \\\\xrightarrow{P} \\\\theta\\\\]` → display: θ̂ₙ →ᴾ θ
- `\\\\(\\\\frac{1}{n}\\\\sum_{i=1}^{n} X_i\\\\)` → sample mean

## VizEngine API

### Constructor
```javascript
const viz = new VizEngine(container, { width: 560, height: 400, scale: 40 });
```
- `scale`: pixels per math unit (40 means 1 unit = 40px)
- Origin is at center of canvas by default

### Drawing Methods
- `viz.clear()` — clear canvas with dark background
- `viz.drawGrid(spacing)` — draw grid lines (default spacing=1)
- `viz.drawAxes()` — draw X/Y axes with numeric labels
- `viz.drawVector(x1, y1, x2, y2, color, label, lineWidth)` — arrow from (x1,y1) to (x2,y2)
- `viz.drawPoint(x, y, color, label, radius)` — dot at math coords
- `viz.drawLine(x1, y1, x2, y2, color, lineWidth, dashed)` — infinite line through two points
- `viz.drawSegment(x1, y1, x2, y2, color, lineWidth, dashed)` — line segment
- `viz.drawPolygon(points, fillColor, strokeColor, lineWidth)` — points = [[x,y],...]
- `viz.drawCircle(cx, cy, r, fillColor, strokeColor)` — circle at (cx,cy) radius r (math units)
- `viz.drawEllipse(cx, cy, rx, ry, angle, fillColor, strokeColor)`
- `viz.drawText(text, x, y, color, fontSize, textAlign, textBaseline)`
- `viz.screenText(text, px, py, color, fontSize, align, baseline)` — raw pixel coords

### Statistics-Specific Drawing
- `viz.drawFunction(f, xMin, xMax, color, lw, steps)` — plot a function curve
- `viz.shadeUnder(f, xMin, xMax, color, steps)` — shade area under curve
- `viz.shadeBetween(f1, f2, xMin, xMax, color, steps)` — shade between two curves
- `viz.drawHistogram(bins, color, strokeColor, lw)` — bins = [{x, width, height}]
- `viz.drawSequence(seq, nMax, color, r)` — plot sequence points
- `viz.drawHorizontalBand(yCenter, halfWidth, color)` — horizontal band
- `viz.drawVerticalBand(xCenter, halfWidth, color)` — vertical band
- `viz.drawErrorBar(x, y, err, color, lw, capWidth)` — error bar with caps
- `viz.drawBar(x, width, height, color, strokeColor, lw)` — single bar

### Distribution Functions (static)
- `VizEngine.normalPDF(x, mu, sigma)`, `VizEngine.normalCDF(x, mu, sigma)`
- `VizEngine.exponentialPDF(x, lambda)`
- `VizEngine.gammaPDF(x, alpha, beta)`, `VizEngine.betaPDF(x, a, b)`
- `VizEngine.chiSquaredPDF(x, k)`, `VizEngine.tPDF(x, nu)`, `VizEngine.fPDF(x, d1, d2)`
- `VizEngine.poissonPMF(k, lambda)`, `VizEngine.binomialPMF(k, n, p)`
- `VizEngine.uniformPDF(x, a, b)`
- `VizEngine.gamma(z)`, `VizEngine.lgamma(z)`, `VizEngine.beta(a, b)`, `VizEngine.erf(x)`

### Random Number Generation (static)
- `VizEngine.randomNormal(mu, sigma)` — Box-Muller normal sample
- `VizEngine.randomExponential(lambda)` — exponential sample
- `VizEngine.sampleArray(generator, n)` — generate n samples

### Descriptive Statistics (static)
- `VizEngine.mean(arr)`, `VizEngine.variance(arr)`, `VizEngine.sampleVariance(arr)`
- `VizEngine.std(arr)`, `VizEngine.median(arr)`, `VizEngine.quantile(arr, p)`

### Interaction
- `viz.addDraggable(id, x, y, color, radius, onDragCallback)` — returns draggable with .x, .y
- `viz.drawDraggables()` — render all draggable points
- `viz.animate(drawFrameFunction)` — start animation loop
- `viz.stopAnimation()` — stop animation

### Controls
- `VizEngine.createSlider(controlsElement, label, min, max, value, step, onChange)` — returns slider
- `VizEngine.createButton(controlsElement, label, onClick)` — returns button

### Color Palette
`viz.colors.blue` (#58a6ff), `.teal` (#3fb9a0), `.orange` (#f0883e), `.green` (#3fb950), `.purple` (#bc8cff), `.red` (#f85149), `.yellow` (#d29922), `.pink` (#f778ba), `.white` (#f0f6fc), `.text` (#8b949e)

Use with transparency: `viz.colors.blue + '44'` for 27% opacity.

## Quality Guidelines

- **Graduate-level rigor**: Precise definitions, proper theorem statements, proofs for all key results
- **Intuition blocks**: Use metaphors and geometric insight to build understanding, but NEVER sacrifice mathematical accuracy for simplicity
- **Bilingual**: Chinese explanations with English mathematical terminology where appropriate
- **Each section**: Should contain 2-3 exercises with hints and solutions
- **Substantial content**: Each section is a real lesson (not a stub). Aim for rich explanations.
- **Visualizations**: Make them genuinely interactive (draggable points, sliders, animations). Return the VizEngine instance from setup().
- **Statistical simulations**: Use VizEngine.randomNormal(), sampleArray(), etc. for Monte Carlo demonstrations

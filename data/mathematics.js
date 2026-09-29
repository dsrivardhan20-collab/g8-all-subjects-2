/**
 * Telangana SCERT Class 8 - Mathematics Curriculum Data
 * Interactive Telangana SCERT Learning Platform
 * Official English Medium Textbook Structure
 * All 10 Core Chapters Populated with Authentic Curriculum
 */
window.SCERT_DATA = window.SCERT_DATA || {};
window.SCERT_DATA['mathematics'] = {
    id: 'mathematics',
    name: 'Mathematics',
    class: 'Class 8',
    icon: '📐',
    accentColor: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    bgTheme: 'mathematics',
    tagline: 'Rational Numbers, Geometry, Algebra, Commercial Math & Data',
    chapters: [
        {
            chapterNum: 1,
            title: "Rational Numbers",
            summary: "Master rational numbers, algebraic properties, operations on number line, and density principles.",
            topics: [
                {
                    topicNum: 1,
                    title: "Properties and Operations on Rational Numbers",
                    visualScene: "math-numberline",
                    visualLabel: "3D Zoomable Rational Number Line & Density Visualizer",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Definition of Rational Numbers",
                            textbookIdea: "A number that can be expressed in the form <span class=\"underlined-concept\" data-concept=\"rational-definition\">p/q</span>, where p and q are integers and q ≠ 0, is called a rational number (represented by symbol ℚ). Rational numbers include all natural numbers, whole numbers, integers, and fractions. Every terminating or non-terminating repeating decimal is a rational number.",
                            easyExplanation: "A rational number is any number you can write as a clean fraction: one integer on top (numerator) and another non-zero integer on the bottom (denominator). Numbers like 3/4, -5/2, 7 (which is 7/1), and 0 (which is 0/1) are all rational numbers!",
                            visualScene: "math-numberline",
                            visualLabel: "3D Integer to Fraction Ratio Expansion"
                        },
                        {
                            num: 2,
                            heading: "Closure, Commutative & Associative Properties",
                            textbookIdea: "Rational numbers satisfy the <span class=\"underlined-concept\" data-concept=\"closure-property\">Closure property</span> under addition, subtraction, and multiplication (the result is always rational), but not under division (division by zero is undefined). They are <span class=\"underlined-concept\" data-concept=\"commutative-property\">commutative</span> and associative under addition and multiplication: a + b = b + a and a × b = b × a.",
                            easyExplanation: "Adding, subtracting, or multiplying two fractions always gives you another fraction! Also, the order doesn't matter when you add or multiply: 1/2 + 1/3 is the exact same as 1/3 + 1/2. But be careful: order DOES matter for subtraction and division!",
                            visualScene: "math-balance-scale",
                            visualLabel: "3D Algebraic Balance Scale Property Verification"
                        },
                        {
                            num: 3,
                            heading: "Distributive Property & Density on the Number Line",
                            textbookIdea: "Multiplication is distributive over addition: a(b + c) = ab + ac. 0 is the additive identity (a + 0 = a), and 1 is the multiplicative identity (a × 1 = a). The <span class=\"underlined-concept\" data-concept=\"density-property\">Density Property</span> states that between any two rational numbers, there are an infinite number of rational numbers, calculated via the mean formula: (a + b) / 2.",
                            easyExplanation: "Numbers have no gaps! Zoom into the number line between 0 and 1, and you find 1/2. Zoom between 0 and 1/2, and you find 1/4. You can keep zooming in forever—there are infinite fractions squeezed between any two numbers!",
                            visualScene: "math-numberline",
                            visualLabel: "3D Microscopic Fractional Zoom Between 0 and 1"
                        }
                    ],
                    underlinedCards: [
                        { id: "rational-definition", word: "Rational Number", meaning: "Any number expressible in the fraction form p/q where p and q are integers and q is not zero.", simpleExplanation: "A number written as one whole number divided by another.", example: "3/5, -7/9, 0 = 0/1, 4 = 4/1.", visual: "🔢" },
                        { id: "closure-property", word: "Closure Property", meaning: "A mathematical set is closed under an operation if applying that operation to members always yields a member of that set.", simpleExplanation: "When fractions combine and always produce another fraction.", example: "1/4 + 2/3 = 11/12 (which is rational).", visual: "🔒" },
                        { id: "commutative-property", word: "Commutative Property", meaning: "An operation where changing the order of operands does not change the result: a + b = b + a.", simpleExplanation: "Flipping numbers around without changing the answer.", example: "2/5 × 3/7 = 3/7 × 2/5 = 6/35.", visual: "↔️" },
                        { id: "density-property", word: "Density Property", meaning: "Between any two distinct rational numbers on the real line, there exist infinitely many other rational numbers.", simpleExplanation: "An endless sea of fractions tucked between any two numbers.", example: "Between 1/3 and 1/2 lies the midpoint (1/3 + 1/2)/2 = 5/12.", visual: "🔍" }
                    ],
                    remember: "Zero has NO multiplicative inverse (reciprocal) because 1/0 is mathematically undefined and cannot equal any real number.",
                    funFact: "Ancient Egyptian mathematicians only used unit fractions with numerator 1 (like 1/2, 1/3, 1/7); they wrote 3/4 as the sum of 1/2 + 1/4!",
                    realLife: "Carpenters, architects, and culinary chefs use rational fractions constantly—measuring 3/8-inch screws, 5/16 drill bits, or 2/3 cups of flour.",
                    vocabulary: [
                        { word: "Additive Inverse", meaning: "The negative of a number such that a + (-a) = 0." },
                        { word: "Multiplicative Inverse", meaning: "The reciprocal of a number such that a × (1/a) = 1." },
                        { word: "Reciprocal", meaning: "Inverting numerator and denominator." },
                        { word: "Density", meaning: "The presence of infinitely many numbers between any two points." }
                    ],
                    summary: [
                        "Rational numbers are numbers expressible as p/q where p, q are integers and q ≠ 0.",
                        "Closed under addition, subtraction, and multiplication, but not division by zero.",
                        "Addition and multiplication are commutative and associative.",
                        "0 is the additive identity; 1 is the multiplicative identity.",
                        "Between any two rational numbers, there exist infinitely many rational numbers (density)."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What is the additive identity for rational numbers?", a: "0 is the additive identity (a + 0 = a)." },
                        { level: "Understanding", q: "Why is the set of rational numbers NOT closed under division?", a: "Because dividing any rational number by zero is mathematically undefined." },
                        { level: "Applying", q: "Find a rational number lying exactly halfway between 1/4 and 1/2.", a: "Mean = (1/4 + 1/2) / 2 = (3/4) / 2 = 3/8." },
                        { level: "Analyzing", q: "What is the multiplicative inverse of -5/8?", a: "The multiplicative inverse (reciprocal) is -8/5, since (-5/8) × (-8/5) = 1." },
                        { level: "Evaluating", q: "Verify whether subtraction of rational numbers is associative: (a - b) - c vs a - (b - c).", a: "It is NOT associative. Example: (5 - 3) - 2 = 0, but 5 - (3 - 2) = 4; results differ." },
                        { level: "Creating", q: "Construct three distinct rational numbers between -1 and 0.", a: "-1/2, -1/4, -3/4 (or -0.5, -0.25, -0.75)." }
                    ],
                    quiz: [
                        { q: "Which number has no reciprocal (multiplicative inverse)?", options: ["1", "-1", "0", "1/2"], correct: 2, exp: "1/0 is undefined, so 0 has no reciprocal." },
                        { q: "What is the additive inverse of -7/19?", options: ["-19/7", "7/19", "19/7", "-7/19"], correct: 1, exp: "The additive inverse has the opposite sign: -(-7/19) = +7/19." },
                        { q: "What is the multiplicative inverse of -13?", options: ["13", "-1/13", "1/13", "0"], correct: 1, exp: "The reciprocal of -13 is -1/13, since -13 × (-1/13) = 1." },
                        { q: "The value of (a × b) × c = a × (b × c) represents which mathematical property?", options: ["Commutative property", "Associative property", "Closure property", "Distributive property"], correct: 1, exp: "Associative property of multiplication." },
                        { q: "Between any two distinct rational numbers, there are:", options: ["Exactly one rational number", "Exactly 10 rational numbers", "An infinite number of rational numbers", "No rational numbers"], correct: 2, exp: "The density property proves infinite fractions lie between any two numbers." }
                    ],
                    flashcards: [
                        { q: "What is a rational number?", a: "Any number expressible as p/q where p, q are integers and q ≠ 0." },
                        { q: "What is the additive identity?", a: "0 (a + 0 = a)." },
                        { q: "What is the multiplicative identity?", a: "1 (a × 1 = a)." },
                        { q: "State the distributive property.", a: "a(b + c) = ab + ac." },
                        { q: "How do you find the midpoint between two rational numbers a and b?", a: "(a + b) / 2." }
                    ],
                    comparison: {
                        title: "Rational Numbers vs. Integers",
                        headers: ["Feature", "Rational Numbers (ℚ)", "Integers (ℤ)"],
                        rows: [
                            ["Representation", "p/q fractions where q ≠ 0 (e.g. 3/4, -5/2)", "Whole positive and negative numbers (..., -2, -1, 0, 1, 2, ...)"],
                            ["Closure under Division", "Closed (except division by zero)", "Not closed (e.g. 3 ÷ 2 = 1.5, not an integer)"],
                            ["Density Property", "Dense (infinite numbers between any two points)", "Discrete (no integer lies between 2 and 3)"]
                        ],
                        vsSummary: "Rational numbers include all fractional subdivisions, forming a dense continuum, while integers are discrete points without fractions."
                    }
                }
            ],
            exam: [
                { q: "The product of two rational numbers is always a:", options: ["Natural number", "Whole number", "Rational number", "Irrational number"], correct: 2, exp: "Rational numbers are closed under multiplication." },
                { q: "What is the result of 2/3 + (-5/6)?", options: ["-1/6", "1/6", "-3/6", "7/6"], correct: 0, exp: "4/6 - 5/6 = -1/6." },
                { q: "Multiplicative inverse of -3/8 × -7/13 is:", options: ["21/104", "-21/104", "104/21", "-104/21"], correct: 2, exp: "Product is +21/104; reciprocal is 104/21." },
                { q: "Which property is illustrated by: 2/5 × (3/7 + 1/4) = (2/5 × 3/7) + (2/5 × 1/4)?", options: ["Associative", "Commutative", "Distributive of multiplication over addition", "Closure"], correct: 2, exp: "Distributive property: a(b + c) = ab + ac." },
                { q: "What is the additive identity of rational numbers?", options: ["1", "-1", "0", "1/2"], correct: 2, exp: "Adding 0 leaves the number unchanged." },
                { q: "The sum of a rational number and its additive inverse is always:", options: ["1", "0", "-1", "Infinity"], correct: 1, exp: "a + (-a) = 0." },
                { q: "Which rational number is equal to its own reciprocal?", options: ["0", "2", "1 and -1", "1/2"], correct: 2, exp: "1/1 = 1, and 1/(-1) = -1." },
                { q: "Solve for x: x + 2/3 = -1/3.", options: ["-1", "1", "1/3", "-2/3"], correct: 0, exp: "x = -1/3 - 2/3 = -3/3 = -1." },
                { q: "How many rational numbers lie strictly between 3 and 4?", options: ["None", "10", "100", "Infinitely many"], correct: 3, exp: "Density property dictates infinite fractions between any two numbers." },
                { q: "The reciprocal of a positive rational number is always:", options: ["Negative", "Positive", "Zero", "Not defined"], correct: 1, exp: "Inverting a positive fraction yields a positive fraction." },
                { q: "The reciprocal of a negative rational number is always:", options: ["Positive", "Negative", "Zero", "1"], correct: 1, exp: "1 / (-x) = -1/x, which remains negative." },
                { q: "What is the value of -5/7 ÷ -5/7?", options: ["0", "1", "-1", "25/49"], correct: 1, exp: "Any non-zero number divided by itself equals 1." },
                { q: "Which of the following is equivalent to 2/3?", options: ["4/6", "6/9", "8/12", "All of the above"], correct: 3, exp: "Multiplying numerator and denominator by 2, 3, 4 generates equivalent fractions." },
                { q: "Find the mean of 1/2 and 1/3.", options: ["5/12", "2/5", "1/5", "5/6"], correct: 0, exp: "(1/2 + 1/3) / 2 = (5/6) / 2 = 5/12." },
                { q: "What is the standard form of 28 / -70?", options: ["-2/5", "2/5", "-14/35", "4/-10"], correct: 0, exp: "Divide by 14 and put negative sign on numerator: -2/5." },
                { q: "Can a rational number have a denominator equal to 0?", options: ["Yes, always", "No, division by zero is undefined", "Only for negative numbers", "Only in geometry"], correct: 1, exp: "By definition, in p/q, q cannot equal zero." },
                { q: "The decimal expansion of 3/8 is:", options: ["0.375 (terminating)", "0.333... (repeating)", "0.125", "0.5"], correct: 0, exp: "3 ÷ 8 = 0.375, a terminating decimal." },
                { q: "Which number is both an integer and a rational number?", options: ["-7", "0", "15", "All of the above"], correct: 3, exp: "All integers can be written as n/1, hence are rational." },
                { q: "Solve: (3/7) × (2/5) + (3/7) × (3/5) = ?", options: ["3/7", "6/35", "9/35", "1"], correct: 0, exp: "(3/7)(2/5 + 3/5) = (3/7)(5/5) = 3/7 × 1 = 3/7." },
                { q: "If the product of two rational numbers is 1, they are called:", options: ["Additive inverses", "Reciprocals (Multiplicative inverses)", "Equal numbers", "Prime numbers"], correct: 1, exp: "Two numbers whose product is 1 are reciprocals." }
            ]
        },
        {
            chapterNum: 2,
            title: "Linear Equations in One Variable",
            summary: "Formulate, balance, and solve linear algebraic equations in one variable and model real-world problems.",
            topics: [
                {
                    topicNum: 1,
                    title: "Solving Linear Equations & Transposition Method",
                    visualScene: "math-balance-scale",
                    visualLabel: "3D Algebraic Balance Scale & Transposition Simulator",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Linear Equations & The Balance Method",
                            textbookIdea: "An algebraic equation where the highest exponent of the variable is 1 is called a <span class=\"underlined-concept\" data-concept=\"linear-equation\">Linear Equation</span>. An equation behaves like a balanced weighing scale: performing the identical operation (adding, subtracting, multiplying, or dividing by non-zero numbers) on both sides preserves the equality.",
                            easyExplanation: "Think of an equation like a balanced see-saw! If you add 5 kg to the left side, you must add 5 kg to the right side to keep it perfectly balanced. The goal is to isolate the mystery variable x all by itself!",
                            visualScene: "math-balance-scale",
                            visualLabel: "3D Balanced Scale Equal Weight Demonstration"
                        },
                        {
                            num: 2,
                            heading: "Transposition of Terms",
                            textbookIdea: "The process of moving a term from one side of an equation to the other while changing its operation sign is called <span class=\"underlined-concept\" data-concept=\"transposition\">transposition</span>. A positive term becomes negative, a negative becomes positive, multiplication becomes division, and division becomes multiplication.",
                            easyExplanation: "Transposition is a math shortcut for balancing! When a number hops across the equals sign (=), it flips its action: + becomes -, - becomes +, × becomes ÷, and ÷ becomes ×!",
                            visualScene: "math-balance-scale",
                            visualLabel: "3D Algebraic Term Transposition Migration"
                        }
                    ],
                    underlinedCards: [
                        { id: "linear-equation", word: "Linear Equation", meaning: "An algebraic equation of degree 1 having at most one power on the unknown variable.", simpleExplanation: "An equation with simple x or y without powers like x².", example: "3x + 7 = 22.", visual: "⚖️" },
                        { id: "transposition", word: "Transposition", meaning: "Transferring an algebraic term across the equality sign while changing its operational sign.", simpleExplanation: "Flipping operations when jumping over the = sign.", example: "If x - 4 = 10, then x = 10 + 4 = 14.", visual: "🔄" }
                    ],
                    remember: "Always verify your solution by substituting the value of the variable back into the original LHS and RHS expressions.",
                    funFact: "Algebra comes from the Arabic word 'Al-Jabr' written by Persian polymath Al-Khwarizmi in 820 AD, meaning 'reunion of broken parts'!",
                    realLife: "Economists calculate break-even profit points and retail stores determine sale prices using linear equations: Total Cost = Fixed Cost + Variable Cost.",
                    vocabulary: [
                        { word: "Variable", meaning: "A symbol (usually x, y, z) representing an unknown numerical quantity." },
                        { word: "Constant", meaning: "A fixed numerical value that does not change." },
                        { word: "LHS & RHS", meaning: "Left Hand Side and Right Hand Side of an equation." }
                    ],
                    summary: [
                        "A linear equation in one variable has degree 1 in the standard form ax + b = c (a ≠ 0).",
                        "Equality is maintained by doing identical operations on both sides.",
                        "Transposing changes addition to subtraction, and multiplication to division.",
                        "Real-world word problems are solved by translating verbal statements into algebraic equations."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What is the maximum degree of the variable in a linear equation?", a: "Degree 1." },
                        { level: "Understanding", q: "Why does the sign change when a term is transposed across the equals sign?", a: "Because transposition is mathematically subtracting or adding that quantity to both sides." },
                        { level: "Applying", q: "Solve for x: 5x - 7 = 2x + 8.", a: "5x - 2x = 8 + 7 => 3x = 15 => x = 5." },
                        { level: "Analyzing", q: "The perimeter of a rectangle is 40 cm. If its length is 4 cm more than its breadth, find the breadth.", a: "Let breadth = b. Length = b + 4. 2(b + b + 4) = 40 => 4b + 8 = 40 => 4b = 32 => b = 8 cm." },
                        { level: "Evaluating", q: "Check if x = 3 is the root of the equation 4x - 5 = 7.", a: "LHS = 4(3) - 5 = 12 - 5 = 7 = RHS. Yes, x = 3 is correct." },
                        { level: "Creating", q: "Construct a real-life scenario that models the linear equation 2x + 10 = 50.", a: "You buy two identical books and pay Rs. 10 delivery fee, giving a total cost of Rs. 50." }
                    ],
                    quiz: [
                        { q: "What is the degree of a linear equation?", options: ["0", "1", "2", "3"], correct: 1, exp: "Linear equations have degree 1." },
                        { q: "Solve: 3x + 5 = 20.", options: ["3", "5", "15", "25"], correct: 1, exp: "3x = 20 - 5 = 15 => x = 5." },
                        { q: "If x / 4 = 7, then the value of x is:", options: ["11", "28", "3", "1.75"], correct: 1, exp: "x = 7 × 4 = 28." },
                        { q: "The sum of three consecutive integers is 36. What is the middle integer?", options: ["11", "12", "13", "14"], correct: 1, exp: "(x-1) + x + (x+1) = 3x = 36 => x = 12." },
                        { q: "Solve: 2(x - 3) = 14.", options: ["7", "10", "4", "17"], correct: 1, exp: "2x - 6 = 14 => 2x = 20 => x = 10." }
                    ],
                    flashcards: [
                        { q: "What is a linear equation?", a: "An equation where the highest power of the variable is 1." },
                        { q: "What happens when you transpose +7 to the other side?", a: "It becomes -7." },
                        { q: "Solve 7x = 42.", a: "x = 42 / 7 = 6." },
                        { q: "What is a root or solution of an equation?", a: "The numerical value that makes the LHS equal to RHS." },
                        { q: "How do you clear fractions in an equation?", a: "Multiply both sides by the LCM of all denominators." }
                    ],
                    comparison: {
                        title: "Linear Equation vs. Algebraic Expression",
                        headers: ["Feature", "Linear Equation", "Algebraic Expression"],
                        rows: [
                            ["Equality Sign (=)", "Always contains an '=' sign connecting two sides", "Does not contain an '=' sign"],
                            ["Solvability", "Can be solved to find the specific root value", "Can only be simplified or evaluated for given values"],
                            ["Example", "2x + 5 = 15 (gives x = 5)", "2x + 5 (value depends on x)"]
                        ],
                        vsSummary: "Equations have an equals sign and can be solved; expressions are mathematical phrases without an equals sign."
                    }
                }
            ],
            exam: [
                { q: "Solve for x: 7x - 9 = 16.", options: ["25/7", "7", "25", "16"], correct: 0, exp: "7x = 16 + 9 = 25 => x = 25/7." },
                { q: "If 2x/3 = 18, then x is:", options: ["12", "27", "36", "54"], correct: 1, exp: "2x = 54 => x = 27." },
                { q: "Solve: 6x + 1 = 2x + 17.", options: ["4", "2", "6", "8"], correct: 0, exp: "6x - 2x = 17 - 1 => 4x = 16 => x = 4." },
                { q: "The present ages of A and B are in the ratio 4:5. Five years later the sum of their ages will be 55. Find A's age.", options: ["20", "25", "16", "30"], correct: 0, exp: "4x + 5 + 5x + 5 = 55 => 9x = 45 => x = 5. A = 4(5) = 20." },
                { q: "Solve: (x + 1) / (2x + 3) = 3/8.", options: ["1/2", "1", "2", "3"], correct: 0, exp: "8(x + 1) = 3(2x + 3) => 8x + 8 = 6x + 9 => 2x = 1 => x = 1/2." },
                { q: "A number whose fifth part increased by 5 equals its fourth part diminished by 5 is:", options: ["100", "200", "50", "150"], correct: 1, exp: "x/5 + 5 = x/4 - 5 => 10 = x/4 - x/5 = x/20 => x = 200." },
                { q: "What value of y satisfies 3y + 4 = 2 - 2y?", options: ["-2/5", "2/5", "-6/5", "6/5"], correct: 0, exp: "5y = -2 => y = -2/5." },
                { q: "Two numbers are in ratio 5:3. If they differ by 18, what are the numbers?", options: ["45 and 27", "50 and 32", "30 and 12", "90 and 54"], correct: 0, exp: "5x - 3x = 2x = 18 => x = 9. Numbers are 45 and 27." },
                { q: "Solve for z: 4z + 3 = 6 + 2z.", options: ["3/2", "2/3", "1", "2"], correct: 0, exp: "2z = 3 => z = 3/2." },
                { q: "The sum of three consecutive multiples of 8 is 888. The greatest multiple is:", options: ["288", "296", "304", "312"], correct: 2, exp: "8x + 8(x+1) + 8(x+2) = 888 => 24x + 24 = 888 => 24x = 864 => x = 36. Multiples are 288, 296, 304." },
                { q: "Solve: m - (m - 1)/2 = 1 - (m - 2)/3.", options: ["7/5", "5/7", "3/5", "5/3"], correct: 1, exp: "(m + 1)/2 = (5 - m)/3 => 3m + 3 = 10 - 2m => 5m = 7 => m = 7/5." },
                { q: "An identity in algebra is valid for:", options: ["Only one value of variable", "Only positive values", "All real values of the variable", "Zero only"], correct: 2, exp: "An identity holds true for every substitution of the variable." },
                { q: "If 15 is subtracted from a number, the result is 35. What is the number?", options: ["20", "50", "40", "60"], correct: 1, exp: "x - 15 = 35 => x = 50." },
                { q: "Solve: 8x + 4 = 3(x - 1) + 7.", options: ["0", "1", "2", "3"], correct: 0, exp: "8x + 4 = 3x + 4 => 5x = 0 => x = 0." },
                { q: "The perimeter of a rectangular swimming pool is 154 m. Its length is 2 m more than twice its breadth. Find the length.", options: ["52 m", "25 m", "50 m", "28 m"], correct: 0, exp: "2(2b + 2 + b) = 154 => 6b + 4 = 154 => 6b = 150 => b = 25. Length = 2(25) + 2 = 52 m." },
                { q: "Solve: 0.25(4f - 3) = 0.05(10f - 9).", options: ["0.6", "0.8", "1.0", "1.2"], correct: 0, exp: "f - 0.75 = 0.5f - 0.45 => 0.5f = 0.3 => f = 0.6." },
                { q: "The base of an isosceles triangle is 4/3 cm. The perimeter is 62/15 cm. What is the length of equal sides?", options: ["7/5 cm", "5/7 cm", "4/5 cm", "11/5 cm"], correct: 0, exp: "2s + 4/3 = 62/15 => 2s = 42/15 = 14/5 => s = 7/5 cm." },
                { q: "Solve: 3(t - 3) = 5(2t - 1).", options: ["-4/7", "-7/4", "4/7", "7/4"], correct: 0, exp: "3t - 9 = 10t - 5 => -7t = 4 => t = -4/7." },
                { q: "If 5 is added to three times a number, the sum is 26. Find the number.", options: ["6", "7", "8", "9"], correct: 1, exp: "3x + 5 = 26 => 3x = 21 => x = 7." },
                { q: "Solve: (7y + 4) / (y + 2) = -4/3.", options: ["-4/5", "-5/4", "4/5", "5/4"], correct: 0, exp: "21y + 12 = -4y - 8 => 25y = -20 => y = -4/5." }
            ]
        },
        {
            chapterNum: 3,
            title: "Construction of Quadrilaterals",
            summary: "Understand geometric properties of 4-sided polygons, requirements for unique construction, compass-ruler techniques.",
            topics: [
                {
                    topicNum: 1,
                    title: "Geometric Construction of Unique Quadrilaterals",
                    visualScene: "math-polyhedra",
                    visualLabel: "3D Dynamic Polygon & Angle Bisector Visualizer",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Condition for a Unique Quadrilateral",
                            textbookIdea: "To construct a unique quadrilateral, exactly <span class=\"underlined-concept\" data-concept=\"five-measurements\">5 independent measurements</span> (elements) are required: such as 4 sides and 1 diagonal, 3 sides and 2 diagonals, or 3 sides and 2 included angles. The sum of all interior angles of any quadrilateral is always 360°.",
                            easyExplanation: "A triangle only needs 3 measurements to fix its shape, but a quadrilateral is wobbly! To lock a 4-sided shape completely in place without wobbling, you must know at least 5 measurements!",
                            visualScene: "math-polyhedra",
                            visualLabel: "3D Quadrilateral Vertex Angle Sum"
                        }
                    ],
                    underlinedCards: [
                        { id: "five-measurements", word: "Five Independent Measurements", meaning: "The minimal geometric data (sides, angles, diagonals) required to determine a unique 4-sided figure.", simpleExplanation: "The 5 clues needed to draw a precise, unchanging quadrilateral.", example: "Sides AB, BC, CD, DA and diagonal AC.", visual: "📐" }
                    ],
                    remember: "The sum of interior angles of an n-sided polygon is given by (n - 2) × 180°. For a quadrilateral (n = 4), (4 - 2) × 180° = 360°.",
                    funFact: "A quadrilateral is inherently flexible unless braced by a diagonal line—that is why builders add diagonal beams to roofs and bridges!",
                    realLife: "Structural engineers and surveyors triangulate land plots into two triangles using a diagonal to map real-estate boundaries.",
                    vocabulary: [
                        { word: "Diagonal", meaning: "A straight line segment joining two non-consecutive vertices of a polygon." },
                        { word: "Adjacent Angles", meaning: "Two angles of a polygon sharing a common side." }
                    ],
                    summary: [
                        "A quadrilateral is a 4-sided closed plane polygon with interior angles summing to 360°.",
                        "Exactly 5 independent measurements are needed to construct a unique quadrilateral.",
                        "Special quadrilaterals require fewer elements: a square needs 1 side, a rectangle needs 2 sides."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What is the sum of interior angles of a quadrilateral?", a: "360°." },
                        { level: "Understanding", q: "Why can't 4 sides alone determine a unique quadrilateral?", a: "Because without fixing angles or diagonals, the 4 hinges can flex into infinitely many shapes." },
                        { level: "Applying", q: "Three angles of a quadrilateral are 80°, 110°, and 75°. Find the fourth angle.", a: "Fourth angle = 360° - (80° + 110° + 75°) = 360° - 265° = 95°." },
                        { level: "Analyzing", q: "Can a quadrilateral have all 4 angles acute? Explain.", a: "No, because if all 4 angles are less than 90°, their sum would be less than 360°." },
                        { level: "Evaluating", q: "How many independent measurements are needed to construct a square?", a: "Only 1 measurement (side length), since all 4 angles are known to be 90° and all sides equal." },
                        { level: "Creating", q: "Plan the steps to construct a rhombus given both diagonal lengths.", a: "Draw one diagonal AC, construct its perpendicular bisector, mark half the second diagonal length on both sides, and join vertices." }
                    ],
                    quiz: [
                        { q: "How many independent measurements are needed to construct a general unique quadrilateral?", options: ["3", "4", "5", "6"], correct: 2, exp: "Exactly 5 independent elements are required." },
                        { q: "The sum of interior angles of any quadrilateral is:", options: ["180°", "270°", "360°", "540°"], correct: 2, exp: "Sum is (4 - 2) × 180° = 360°." },
                        { q: "To construct a unique square, how many measurements are required?", options: ["1", "2", "4", "5"], correct: 0, exp: "Only 1 side length is needed since all angles are 90°." },
                        { q: "A quadrilateral having both pairs of opposite sides parallel is called a:", options: ["Trapezium", "Parallelogram", "Kite", "Triangle"], correct: 1, exp: "Definition of a parallelogram." },
                        { q: "In a rhombus, diagonals intersect at:", options: ["45°", "60°", "90° (perpendicular bisectors)", "180°"], correct: 2, exp: "Rhombus diagonals are mutually perpendicular bisectors." }
                    ],
                    flashcards: [
                        { q: "How many elements does a quadrilateral have?", a: "10 elements (4 sides, 4 angles, 2 diagonals)." },
                        { q: "How many elements are needed to construct a unique quadrilateral?", a: "5 independent elements." },
                        { q: "What is the angle sum of a quadrilateral?", a: "360°." },
                        { q: "What is a trapezium?", a: "A quadrilateral with at least one pair of parallel opposite sides." },
                        { q: "Are rectangle diagonals equal?", a: "Yes, diagonals of a rectangle are equal in length." }
                    ],
                    comparison: {
                        title: "Rhombus vs. Rectangle",
                        headers: ["Property", "Rhombus", "Rectangle"],
                        rows: [
                            ["Sides", "All 4 sides are strictly equal", "Opposite sides are equal in length"],
                            ["Angles", "Opposite angles equal (not necessarily 90°)", "All 4 angles are exactly 90°"],
                            ["Diagonals", "Bisect each other at 90° perpendicularly", "Equal in length, but not perpendicular"]
                        ],
                        vsSummary: "A rhombus has equal sides with perpendicular diagonals, while a rectangle has equal 90° angles with equal length diagonals."
                    }
                }
            ],
            exam: [
                { q: "A quadrilateral has how many vertices?", options: ["3", "4", "5", "6"], correct: 1, exp: "Quadrilateral has 4 vertices." },
                { q: "The diagonals of which quadrilateral are equal and bisect each other at right angles?", options: ["Rhombus", "Rectangle", "Square", "Trapezium"], correct: 2, exp: "A square has both equal diagonals and 90° perpendicular bisection." },
                { q: "How many measurements are needed to construct a rectangle?", options: ["1", "2", "3", "4"], correct: 1, exp: "Two adjacent sides (length and breadth) are needed." },
                { q: "If adjacent angles of a parallelogram are in ratio 2:3, the smaller angle is:", options: ["36°", "72°", "108°", "144°"], correct: 1, exp: "Adjacent angles are supplementary: 2x + 3x = 180° => 5x = 180° => x = 36°. Smaller is 2(36) = 72°." },
                { q: "The diagonal of a quadrilateral divides it into how many triangles?", options: ["1", "2", "3", "4"], correct: 1, exp: "One diagonal splits it into 2 triangles." },
                { q: "Which quadrilateral has only one pair of parallel opposite sides?", options: ["Parallelogram", "Trapezium", "Kite", "Rhombus"], correct: 1, exp: "Trapezium has exactly one pair of parallel sides." },
                { q: "The angle sum property of an n-sided polygon is:", options: ["(n - 2) × 180°", "(n + 2) × 180°", "n × 180°", "(2n - 4) × 90°"], correct: 0, exp: "Formula is (n - 2) × 180°." },
                { q: "Can a quadrilateral have angles 100°, 120°, 90°, and 60°?", options: ["Yes", "No", "Only if it is a kite", "Cannot say"], correct: 1, exp: "Sum = 100 + 120 + 90 + 60 = 370° ≠ 360°, so impossible." },
                { q: "To construct a kite uniquely, how many independent elements are needed?", options: ["2", "3", "4", "5"], correct: 1, exp: "Two distinct adjacent side lengths and one included angle (3 elements)." },
                { q: "A quadrilateral having two pairs of equal adjacent sides is called a:", options: ["Kite", "Trapezium", "Rhombus", "Parallelogram"], correct: 0, exp: "Definition of a kite." },
                { q: "The diagonals of a parallelogram:", options: ["Are equal", "Bisect each other", "Are perpendicular", "All of above"], correct: 1, exp: "Parallelogram diagonals bisect each other." },
                { q: "A polygon is called regular if:", options: ["All sides and all angles are equal", "Only sides are equal", "Only angles are equal", "It has 4 sides"], correct: 0, exp: "Equiangular and equilateral." },
                { q: "The sum of exterior angles of any polygon is always:", options: ["180°", "360°", "540°", "720°"], correct: 1, exp: "Sum of exterior angles of any convex polygon is 360°." },
                { q: "If one diagonal of a rhombus equals one of its sides, its smaller angle is:", options: ["30°", "60°", "90°", "120°"], correct: 1, exp: "It forms two equilateral triangles, so angles are 60° and 120°." },
                { q: "Which of the following is NOT a convex quadrilateral?", options: ["Square", "Trapezium", "An arrowhead with one reflex angle", "Rectangle"], correct: 2, exp: "An arrowhead has an interior angle > 180°, making it concave." },
                { q: "In a square ABCD, AC and BD intersect at O. What is ∠AOB?", options: ["45°", "60°", "90°", "180°"], correct: 2, exp: "Diagonals of a square intersect at 90°." },
                { q: "To construct a parallelogram, how many independent measurements are needed?", options: ["2", "3", "4", "5"], correct: 1, exp: "3 measurements (e.g. 2 adjacent sides and 1 angle)." },
                { q: "If angles of a quadrilateral are in ratio 1:2:3:4, find the smallest angle.", options: ["36°", "18°", "72°", "108°"], correct: 0, exp: "x + 2x + 3x + 4x = 10x = 360° => x = 36°." },
                { q: "An isosceles trapezium has:", options: ["Parallel sides equal", "Non-parallel sides equal", "All sides equal", "Diagonals perpendicular"], correct: 1, exp: "Non-parallel legs are equal in length." },
                { q: "Can a triangle have 4 sides?", options: ["Yes", "No, by definition a triangle has 3 sides", "Only in 3D", "Sometimes"], correct: 1, exp: "Triangles strictly have 3 sides." }
            ]
        },
        {
            chapterNum: 4,
            title: "Exponents and Powers",
            summary: "Master powers with negative exponents, laws of exponents, and scientific standard notation for tiny and massive numbers.",
            topics: [
                {
                    topicNum: 1,
                    title: "Laws of Exponents & Scientific Notation",
                    visualScene: "math-numberline",
                    visualLabel: "3D Exponential Scale & Microscopic Powers of Ten Visualizer",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Negative Exponents & Laws of Indices",
                            textbookIdea: "For any non-zero rational number a and positive integer m, <span class=\"underlined-concept\" data-concept=\"negative-exponent\">a⁻ᵐ = 1 / aᵐ</span>. The key laws of exponents include: aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ / aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, (ab)ᵐ = aᵐbᵐ, and a⁰ = 1.",
                            easyExplanation: "A negative power doesn't mean a negative number! It just means 'flip it into the denominator'. So 10⁻³ is simply 1 / 10³ = 1/1000 = 0.001!",
                            visualScene: "math-numberline",
                            visualLabel: "3D Powers of Ten Contraction & Expansion"
                        }
                    ],
                    underlinedCards: [
                        { id: "negative-exponent", word: "Negative Exponent", meaning: "A mathematical power representing the multiplicative inverse: a⁻ⁿ = 1/aⁿ.", simpleExplanation: "A power that flips a number into a fraction denominator.", example: "2⁻⁴ = 1 / 2⁴ = 1/16.", visual: "🔟" }
                    ],
                    remember: "Any non-zero number raised to the power of 0 equals 1: a⁰ = 1 (where a ≠ 0).",
                    funFact: "The size of a single coronavirus is about 0.00000012 meters, which scientists write compactly as 1.2 × 10⁻⁷ m!",
                    realLife: "Computer processors store memory in binary powers: 2¹⁰ bytes = 1,024 bytes = 1 Kilobyte (KB).",
                    vocabulary: [
                        { word: "Base", meaning: "The number that is being multiplied by itself." },
                        { word: "Exponent / Power", meaning: "The number of times the base is used as a factor." }
                    ],
                    summary: [
                        "a⁻ᵐ is the reciprocal of aᵐ (a⁻ᵐ = 1/aᵐ).",
                        "Multiplying powers with identical base: add powers (aᵐ × aⁿ = aᵐ⁺ⁿ).",
                        "Dividing powers with identical base: subtract powers (aᵐ / aⁿ = aᵐ⁻ⁿ).",
                        "Standard form expresses numbers as m × 10ⁿ where 1 ≤ m < 10."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What is the value of 5⁰?", a: "1." },
                        { level: "Understanding", q: "Why is 2⁻³ equal to 1/8 and not -8?", a: "Because a negative exponent indicates reciprocal division, not a negative magnitude: 1 / 2³ = 1/8." },
                        { level: "Applying", q: "Simplify: (3⁻² × 3⁵) / 3².", a: "3⁻²⁺⁵ / 3² = 3³ / 3² = 3³⁻² = 3¹ = 3." },
                        { level: "Analyzing", q: "Express 0.000035 in standard scientific form.", a: "3.5 × 10⁻⁵." },
                        { level: "Evaluating", q: "Compare 2.5 × 10⁻⁴ and 3.1 × 10⁻⁵. Which is larger?", a: "2.5 × 10⁻⁴ = 0.00025; 3.1 × 10⁻⁵ = 0.000031. Therefore, 2.5 × 10⁻⁴ is larger." },
                        { level: "Creating", q: "Write the mass of Earth (5,970,000,000,000,000,000,000,000 kg) in standard form.", a: "5.97 × 10²⁴ kg." }
                    ],
                    quiz: [
                        { q: "What is the value of 2⁻³?", options: ["-6", "-8", "1/8", "1/6"], correct: 2, exp: "2⁻³ = 1 / 2³ = 1/8." },
                        { q: "The value of 7⁰ is:", options: ["0", "7", "1", "70"], correct: 2, exp: "Any non-zero number to power 0 is 1." },
                        { q: "Simplify: (2/3)⁻².", options: ["4/9", "-4/9", "9/4", "-9/4"], correct: 2, exp: "(2/3)⁻² = (3/2)² = 9/4." },
                        { q: "Standard form of 0.000007 m is:", options: ["7 × 10⁻⁶ m", "7 × 10⁶ m", "0.7 × 10⁻⁵ m", "7 × 10⁻⁵ m"], correct: 0, exp: "Decimal moves 6 places right: 7 × 10⁻⁶." },
                        { q: "Calculate: 3² × 3⁻² = ?", options: ["0", "1", "9", "81"], correct: 1, exp: "3²⁺⁽⁻²⁾ = 3⁰ = 1." }
                    ],
                    flashcards: [
                        { q: "What is a⁻ᵐ?", a: "1 / aᵐ." },
                        { q: "What is aᵐ × aⁿ?", a: "aᵐ⁺ⁿ." },
                        { q: "What is (aᵐ)ⁿ?", a: "aᵐⁿ." },
                        { q: "What is standard scientific form?", a: "A number written as k × 10ⁿ where 1 ≤ k < 10." },
                        { q: "What is (-1) to an odd power?", a: "-1." }
                    ],
                    comparison: {
                        title: "Standard Form vs. Usual Form",
                        headers: ["Aspect", "Standard Scientific Form", "Usual Decimal Form"],
                        rows: [
                            ["Format", "k × 10ⁿ where 1 ≤ k < 10", "Full expanded decimal with multiple zeros"],
                            ["Readability", "Compact, easy to compare orders of magnitude", "Prone to counting errors with many zeros"],
                            ["Example", "3.0 × 10⁸ m/s (Speed of Light)", "300,000,000 m/s"]
                        ],
                        vsSummary: "Standard scientific form provides an error-free, compact notation for astronomically large and microscopically tiny quantities."
                    }
                }
            ],
            exam: [
                { q: "The value of (-2)⁻⁴ is:", options: ["-16", "16", "1/16", "-1/16"], correct: 2, exp: "1 / (-2)⁴ = 1/16." },
                { q: "Simplify: 5³ × 5⁻⁵.", options: ["5⁻² = 1/25", "5⁸", "-25", "0"], correct: 0, exp: "5³⁻⁵ = 5⁻² = 1/25." },
                { q: "The multiplicative inverse of 10⁻¹⁰ is:", options: ["10¹⁰", "10⁻¹⁰", "-10¹⁰", "1"], correct: 0, exp: "Reciprocal is 1 / 10⁻¹⁰ = 10¹⁰." },
                { q: "What is (1/2)⁻⁵?", options: ["32", "1/32", "-32", "10"], correct: 0, exp: "2⁵ = 32." },
                { q: "Write 149,600,000,000 m in standard form:", options: ["1.496 × 10¹¹ m", "14.96 × 10¹⁰ m", "1.496 × 10¹² m", "0.1496 × 10¹² m"], correct: 0, exp: "11 places to the left: 1.496 × 10¹¹." },
                { q: "Find the value of (3⁰ + 4⁻¹) × 2².", options: ["5", "4", "2", "1"], correct: 0, exp: "(1 + 1/4) × 4 = (5/4) × 4 = 5." },
                { q: "Simplify: (5⁻¹ × 2⁻¹) ÷ 6⁻¹.", options: ["3/5", "5/3", "1/15", "1/60"], correct: 0, exp: "(1/10) ÷ (1/6) = (1/10) × 6 = 6/10 = 3/5." },
                { q: "If 2ˣ⁻³ = 1, find x.", options: ["0", "1", "2", "3"], correct: 3, exp: "2ˣ⁻³ = 2⁰ => x - 3 = 0 => x = 3." },
                { q: "What is the value of (-1)¹⁰⁰?", options: ["-1", "1", "100", "-100"], correct: 1, exp: "-1 raised to an even power is always +1." },
                { q: "What is the value of (-1)⁹⁹?", options: ["-1", "1", "99", "-99"], correct: 0, exp: "-1 raised to an odd power is always -1." },
                { q: "Express 0.0000000000085 in standard form:", options: ["8.5 × 10⁻¹²", "8.5 × 10⁻¹¹", "85 × 10⁻¹³", "8.5 × 10¹²"], correct: 0, exp: "Decimal moves 12 places: 8.5 × 10⁻¹²." },
                { q: "Simplify: [(1/3)⁻² - (1/2)⁻³] ÷ (1/4)⁻².", options: ["1/16", "1", "16", "0"], correct: 0, exp: "[9 - 8] ÷ 16 = 1 ÷ 16 = 1/16." },
                { q: "The value of (2⁻¹ + 3⁻¹ + 4⁻¹)⁰ is:", options: ["12/13", "13/12", "1", "0"], correct: 2, exp: "Any non-zero expression raised to power 0 equals 1." },
                { q: "Simplify: 3⁻⁵ × 10⁻⁵ × 125 / (5⁻⁷ × 6⁻⁵).", options: ["1", "5", "5⁵ = 3125", "125"], correct: 2, exp: "Resolving prime factors 2, 3, 5 results in 5³⁺² = 5⁵ = 3125." },
                { q: "Solve for m: 5ᵐ ÷ 5⁻³ = 5⁵.", options: ["2", "8", "-2", "15"], correct: 0, exp: "m - (-3) = 5 => m + 3 = 5 => m = 2." },
                { q: "Which is greater: 5² or 2⁵?", options: ["5² (25)", "2⁵ (32)", "They are equal", "Cannot be determined"], correct: 1, exp: "5² = 25; 2⁵ = 32. 32 > 25." },
                { q: "What is the usual form of 3.02 × 10⁻⁶?", options: ["0.0000302", "0.00000302", "0.000302", "3020000"], correct: 1, exp: "Shift decimal 6 places left: 0.00000302." },
                { q: "Simplify: (4/7)³ × (4/7)⁻⁵.", options: ["(4/7)⁻² = 49/16", "16/49", "-49/16", "1"], correct: 0, exp: "(4/7)³⁻⁵ = (4/7)⁻² = (7/4)² = 49/16." },
                { q: "If x = 2 and y = -1, find the value of xʸ - yˣ.", options: ["1/2 - 1 = -1/2", "3/2", "-3/2", "0"], correct: 0, exp: "2⁻¹ - (-1)² = 1/2 - 1 = -1/2." },
                { q: "1 micron is equal to 1 / 1,000,000 meter. In standard form it is:", options: ["10⁻⁶ m", "10⁶ m", "10⁻⁵ m", "10⁻⁷ m"], correct: 0, exp: "1/10⁶ = 10⁻⁶ m." }
            ]
        },
        {
            chapterNum: 5,
            title: "Comparing Quantities using Proportion",
            summary: "Explore financial mathematics: ratios, percentages, discount, profit & loss, GST, and Compound Interest.",
            topics: [
                {
                    topicNum: 1,
                    title: "Commercial Arithmetic & Compound Interest",
                    visualScene: "math-balance-scale",
                    visualLabel: "3D Compound Interest Exponential Curve Visualizer",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Simple vs. Compound Interest",
                            textbookIdea: "Simple Interest (SI = PTR / 100) is calculated only on the initial principal. <span class=\"underlined-concept\" data-concept=\"compound-interest\">Compound Interest</span> (CI) is interest earned on both the initial principal and previous accumulated interest periods: A = P(1 + R/100)ⁿ, where CI = A - P.",
                            easyExplanation: "With simple interest, you earn the exact same interest each year. With compound interest, your interest itself earns interest! It grows like a rolling snowball, getting bigger and bigger each year!",
                            visualScene: "math-balance-scale",
                            visualLabel: "3D Principal Growth Comparison"
                        }
                    ],
                    underlinedCards: [
                        { id: "compound-interest", word: "Compound Interest", meaning: "Interest calculated on the initial principal and accumulated interest of previous compounding periods.", simpleExplanation: "Interest on top of interest over time.", example: "Rs. 1000 at 10% becomes Rs. 1100 after year 1, and Rs. 1210 after year 2.", visual: "📈" }
                    ],
                    remember: "Compound interest is always greater than or equal to simple interest for any investment period greater than 1 year.",
                    funFact: "Albert Einstein famously called compound interest the 'eighth wonder of the world: he who understands it, earns it; he who doesn't, pays it!'",
                    realLife: "Bank fixed deposits (FD), mutual funds, home loans, and credit card balances all calculate earnings or debts via compound interest.",
                    vocabulary: [
                        { word: "Principal (P)", meaning: "The initial sum of money borrowed or invested." },
                        { word: "Amount (A)", meaning: "Total sum including principal and accrued interest (A = P + I)." },
                        { word: "Discount", meaning: "Deduction from the marked price (Marked Price - Sale Price)." }
                    ],
                    summary: [
                        "Discount = Marked Price (MP) - Selling Price (SP).",
                        "Profit% = (Profit / CP) × 100; Loss% = (Loss / CP) × 100.",
                        "Simple Interest = (P × T × R) / 100.",
                        "Compound Amount = P(1 + R/100)ⁿ; CI = Amount - Principal."
                    ],
                    blooms: [
                        { level: "Remembering", q: "State the formula for amount in compound interest compounded annually.", a: "A = P(1 + R/100)ⁿ." },
                        { level: "Understanding", q: "Why is compound interest higher than simple interest after the first year?", a: "Because in compound interest, the principal increases each year by the addition of the prior year's interest." },
                        { level: "Applying", q: "Calculate the compound amount on Rs. 10,000 for 2 years at 10% per annum.", a: "A = 10000(1 + 10/100)² = 10000(1.1)² = 10000 × 1.21 = Rs. 12,100." },
                        { level: "Analyzing", q: "A shirt marked at Rs. 800 is sold for Rs. 680. Find the discount percentage.", a: "Discount = 800 - 680 = 120. Discount% = (120/800) × 100 = 15%." },
                        { level: "Evaluating", q: "Which investment yields more over 2 years: Simple interest at 12% or Compound interest at 10% on Rs. 10,000?", a: "SI = (10000×2×12)/100 = Rs. 2400. CI = 10000(1.21) - 10000 = Rs. 2100. SI yields Rs. 300 more." },
                        { level: "Creating", q: "Formulate a savings plan showing how Rs. 5,000 doubles at 10% compound interest in about 7.2 years (Rule of 72).", a: "Using Rule of 72: Years = 72 / Rate = 72 / 10 ≈ 7.2 years to double to Rs. 10,000." }
                    ],
                    quiz: [
                        { q: "What is the formula for calculating Simple Interest?", options: ["(P × T × R) / 100", "P(1 + R/100)ⁿ", "P × R / 100", "Amount - Principal"], correct: 0, exp: "SI = PTR / 100." },
                        { q: "If Cost Price is Rs. 500 and Selling Price is Rs. 600, what is the profit percentage?", options: ["10%", "20%", "25%", "15%"], correct: 1, exp: "Profit = 100. Profit% = (100 / 500) × 100 = 20%." },
                        { q: "Discount is always calculated on which price?", options: ["Cost Price", "Marked Price (List Price)", "Selling Price", "Profit"], correct: 1, exp: "Discount is given on the Marked Price." },
                        { q: "In compound interest compounded semi-annually (half-yearly), time n is multiplied by 2 and rate R is:", options: ["Doubled", "Halved (R/2)", "Quadrupled", "Unchanged"], correct: 1, exp: "Half-yearly compounding halves the rate and doubles the periods." },
                        { q: "Find the ratio of 5 m to 10 km.", options: ["1 : 2", "1 : 200", "1 : 2000", "1 : 20"], correct: 2, exp: "10 km = 10,000 m. Ratio 5 : 10000 = 1 : 2000." }
                    ],
                    flashcards: [
                        { q: "What is Profit% formula?", a: "(Profit / Cost Price) × 100." },
                        { q: "What is Discount?", a: "Marked Price - Selling Price." },
                        { q: "What is Compound Amount formula?", a: "A = P(1 + R/100)ⁿ." },
                        { q: "What does GST stand for?", a: "Goods and Services Tax." },
                        { q: "What is the ratio of 50 paise to Rs. 5?", a: "50 : 500 = 1 : 10." }
                    ],
                    comparison: {
                        title: "Simple Interest vs. Compound Interest",
                        headers: ["Parameter", "Simple Interest (SI)", "Compound Interest (CI)"],
                        rows: [
                            ["Principal Base", "Constant initial principal throughout the tenure", "Principal increases annually by adding earned interest"],
                            ["Growth Rate", "Linear straight-line growth", "Exponential compounding curve growth"],
                            ["Total Return", "Lower total interest over multi-year terms", "Significantly higher return due to interest on interest"]
                        ],
                        vsSummary: "Simple interest calculates returns strictly on the base principal, while compound interest accumulates returns exponentially on both principal and interest."
                    }
                }
            ],
            exam: [
                { q: "A fan marked at Rs. 1500 is sold at 20% discount. What is the selling price?", options: ["Rs. 1200", "Rs. 1300", "Rs. 1100", "Rs. 1250"], correct: 0, exp: "Discount = 20% of 1500 = 300. SP = 1500 - 300 = Rs. 1200." },
                { q: "Find the compound interest on Rs. 8000 at 5% per annum for 2 years compounded annually.", options: ["Rs. 820", "Rs. 800", "Rs. 850", "Rs. 900"], correct: 0, exp: "A = 8000(1.05)² = 8000 × 1.1025 = 8820. CI = 8820 - 8000 = Rs. 820." },
                { q: "72% of 25 students are good in mathematics. How many students are NOT good?", options: ["7", "8", "9", "6"], correct: 0, exp: "100% - 72% = 28% of 25 = 0.28 × 25 = 7 students." },
                { q: "An item purchased for Rs. 250 is sold for Rs. 200. What is the loss percentage?", options: ["20%", "25%", "15%", "10%"], correct: 0, exp: "Loss = 50. Loss% = (50 / 250) × 100 = 20%." },
                { q: "The population of a city was 20,000. It increases at 5% per year. What will it be after 2 years?", options: ["22,050", "22,000", "21,000", "22,500"], correct: 0, exp: "20000(1.05)² = 22,050." },
                { q: "If 12% GST is added to a bill of Rs. 500, what is the total amount payable?", options: ["Rs. 560", "Rs. 512", "Rs. 600", "Rs. 550"], correct: 0, exp: "GST = 12% of 500 = 60. Total = Rs. 560." },
                { q: "Ratio of 15 days to 30 hours is:", options: ["12 : 1", "1 : 2", "6 : 1", "24 : 1"], correct: 0, exp: "15 days = 360 hours. 360 : 30 = 12 : 1." },
                { q: "A machine depreciates at 10% per year. If its current value is Rs. 100,000, value after 1 year is:", options: ["Rs. 90,000", "Rs. 80,000", "Rs. 95,000", "Rs. 85,000"], correct: 0, exp: "100000 - 10% = Rs. 90,000." },
                { q: "If 8 men can complete a job in 6 days, how many men can do it in 4 days?", options: ["12 men", "10 men", "14 men", "16 men"], correct: 0, exp: "Man-days = 8 × 6 = 48. Men needed = 48 / 4 = 12 men." },
                { q: "Convert 3:4 into percentage:", options: ["75%", "60%", "80%", "43%"], correct: 0, exp: "(3/4) × 100 = 75%." },
                { q: "The difference between CI and SI on Rs. 1000 for 2 years at 10% per annum is:", options: ["Rs. 10", "Rs. 20", "Rs. 100", "Rs. 5"], correct: 0, exp: "Difference = P(R/100)² = 1000(10/100)² = 1000(1/100) = Rs. 10." },
                { q: "A shopkeeper offers two successive discounts of 10% and 10%. The single equivalent discount is:", options: ["19%", "20%", "18%", "21%"], correct: 0, exp: "Equivalent = 10 + 10 - (10×10)/100 = 20 - 1 = 19%." },
                { q: "If the sale price of 10 articles equals the cost price of 12 articles, what is the profit percentage?", options: ["20%", "25%", "16.66%", "15%"], correct: 0, exp: "Profit = (2/10) × 100 = 20%." },
                { q: "What is 0.05 expressed as a percentage?", options: ["5%", "50%", "0.5%", "0.05%"], correct: 0, exp: "0.05 × 100 = 5%." },
                { q: "Find the principal if SI for 3 years at 8% per annum is Rs. 1200.", options: ["Rs. 5000", "Rs. 4000", "Rs. 6000", "Rs. 4500"], correct: 0, exp: "P = (100 × 1200) / (3 × 8) = 120000 / 24 = Rs. 5000." },
                { q: "In what time will Rs. 2000 amount to Rs. 2420 at 10% CI compounded annually?", options: ["2 years", "3 years", "1 year", "4 years"], correct: 0, exp: "2420/2000 = 1.21 = (1.1)ⁿ => n = 2 years." },
                { q: "Overhead expenses (transportation, repairs) are added to:", options: ["Cost Price", "Selling Price", "Marked Price", "Profit"], correct: 0, exp: "Effective Cost Price = Buying Price + Overhead expenses." },
                { q: "Sales tax is always calculated as a percentage of:", options: ["Selling Price", "Cost Price", "Profit", "List Price"], correct: 0, exp: "Sales tax is calculated on the billing selling price." },
                { q: "If 60% of people in a town like cricket and total population is 50,000, how many like cricket?", options: ["30,000", "25,000", "35,000", "20,000"], correct: 0, exp: "60% of 50000 = 30,000." },
                { q: "A cycle bought for Rs. 2000 is sold for Rs. 1800. What is the loss percentage?", options: ["10%", "15%", "20%", "5%"], correct: 0, exp: "Loss = 200. Loss% = (200 / 2000) × 100 = 10%." }
            ]
        },
        {
            chapterNum: 6,
            title: "Square Roots and Cube Roots",
            summary: "Master perfect squares, prime factorization, long division square roots, Pythagorean triplets, and cube roots.",
            topics: [
                {
                    topicNum: 1,
                    title: "Square Roots, Long Division & Cube Roots",
                    visualScene: "math-polyhedra",
                    visualLabel: "3D Geometric Square & Cube Volume Model",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Properties of Perfect Squares & Roots",
                            textbookIdea: "A natural number n is a <span class=\"underlined-concept\" data-concept=\"perfect-square\">perfect square</span> if n = m² for some natural number m. Perfect squares never end in the digits 2, 3, 7, or 8. The square root (√n) is found via prime factorization for perfect squares or the <span class=\"underlined-concept\" data-concept=\"division-method\">long division method</span> for large numbers.",
                            easyExplanation: "A square number is what you get when you multiply a number by itself: 4 × 4 = 16. Finding the square root is doing the exact reverse: asking 'What number multiplied by itself equals 16?' The answer is 4!",
                            visualScene: "math-polyhedra",
                            visualLabel: "3D Grid Square Expansion"
                        }
                    ],
                    underlinedCards: [
                        { id: "perfect-square", word: "Perfect Square", meaning: "A whole number that can be expressed as the product of two equal integers.", simpleExplanation: "A number formed by multiplying a whole number by itself.", example: "1, 4, 9, 16, 25, 36, 49, 64, 81, 100.", visual: "⏹️" },
                        { id: "division-method", word: "Long Division Method", meaning: "An algorithmic pairing method from right to left to extract square roots of large numbers.", simpleExplanation: "A step-by-step division technique to calculate square roots.", example: "√625 = 25.", visual: "➗" }
                    ],
                    remember: "Pythagorean triplets are three positive integers a, b, c satisfying a² + b² = c² (such as 3, 4, 5 and 6, 8, 10). Form: 2m, m² - 1, m² + 1.",
                    funFact: "The sum of the first n consecutive odd natural numbers always equals n²: 1 = 1², 1 + 3 = 4 = 2², 1 + 3 + 5 = 9 = 3²!",
                    realLife: "Construction workers verify 90° right angles on building foundations using the 3-4-5 Pythagorean theorem string method.",
                    vocabulary: [
                        { word: "Square Root (√)", meaning: "A value that, when multiplied by itself, gives the original number." },
                        { word: "Cube Root (∛)", meaning: "A value that, when multiplied by itself three times, gives the original number." }
                    ],
                    summary: [
                        "Numbers ending in 2, 3, 7, or 8 can never be perfect squares.",
                        "Square of an even number is even; square of an odd number is odd.",
                        "Pythagorean triplets satisfy a² + b² = c² in the form (2m, m²-1, m²+1).",
                        "Cube root (∛n) is found by grouping prime factors into triplets of three."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What are the possible unit digits of a perfect square?", a: "0, 1, 4, 5, 6, 9." },
                        { level: "Understanding", q: "Why can the number 1,057 never be a perfect square?", a: "Because it ends in the digit 7, and no square of any integer ends in 7." },
                        { level: "Applying", q: "Find the square root of 729 using prime factorization.", a: "729 = 3 × 3 × 3 × 3 × 3 × 3 = 3⁶. Square root = 3³ = 27." },
                        { level: "Analyzing", q: "Write a Pythagorean triplet whose smallest member is 6.", a: "2m = 6 => m = 3. Members: 2m = 6, m² - 1 = 8, m² + 1 = 10. Triplet is (6, 8, 10)." },
                        { level: "Evaluating", q: "Find the smallest number by which 180 must be multiplied so that the product becomes a perfect square.", a: "180 = 2² × 3² × 5¹. 5 is unpaired. Thus, multiply by 5 to get 900 (30²)." },
                        { level: "Creating", q: "Calculate the cube root of 13,824 by grouping prime factors.", a: "13,824 = 2⁹ × 3³ = (2³ × 3)³ = 24³. Cube root = 24." }
                    ],
                    quiz: [
                        { q: "Which digit can never be at the unit place of a perfect square?", options: ["1", "4", "7", "9"], correct: 2, exp: "Perfect squares never end in 2, 3, 7, or 8." },
                        { q: "What is the square root of 0.04?", options: ["0.2", "0.02", "0.002", "2"], correct: 0, exp: "0.2 × 0.2 = 0.04." },
                        { q: "How many non-square natural numbers lie between 12² and 13²?", options: ["24", "25", "26", "12"], correct: 0, exp: "Formula is 2n = 2(12) = 24 numbers." },
                        { q: "What is the cube root of 512?", options: ["6", "7", "8", "9"], correct: 2, exp: "8 × 8 × 8 = 512." },
                        { q: "The value of √(100 + 44) is:", options: ["14", "12", "16", "10.4"], correct: 1, exp: "√(144) = 12." }
                    ],
                    flashcards: [
                        { q: "What is 15²?", a: "225." },
                        { q: "What is 25²?", a: "625." },
                        { q: "What is ∛1000?", a: "10." },
                        { q: "What is the Pythagorean triplet with 8?", a: "8, 15, 17." },
                        { q: "What is √1764?", a: "42." }
                    ],
                    comparison: {
                        title: "Square Root vs. Cube Root",
                        headers: ["Characteristic", "Square Root (√x)", "Cube Root (∛x)"],
                        rows: [
                            ["Exponent Power", "x^(1/2)", "x^(1/3)"],
                            ["Prime Factor Grouping", "Pairs of two identical factors", "Triplets of three identical factors"],
                            ["Negative Numbers", "Undefined in real numbers (imaginary)", "Defined in real numbers (e.g. ∛-8 = -2)"]
                        ],
                        vsSummary: "Square roots require pairs of factors and are undefined for negative reals, whereas cube roots require triplets and exist for negative numbers."
                    }
                }
            ],
            exam: [
                { q: "Which of the following is a perfect square?", options: ["1057", "23453", "7928", "1024"], correct: 3, exp: "1024 = 32², ending in 4." },
                { q: "What is the square of 0.7?", options: ["4.9", "0.49", "0.049", "0.0049"], correct: 1, exp: "0.7 × 0.7 = 0.49." },
                { q: "Find the square root of 6400.", options: ["80", "800", "40", "160"], correct: 0, exp: "80 × 80 = 6400." },
                { q: "What is the value of ∛(-216)?", options: ["-6", "6", "-36", "undefined"], correct: 0, exp: "(-6)³ = -216." },
                { q: "Find the smallest square number divisible by 6, 9, and 15.", options: ["90", "180", "900", "3600"], correct: 2, exp: "LCM(6,9,15) = 90 = 2 × 3² × 5. To make it a square: 90 × 2 × 5 = 900." },
                { q: "How many natural numbers lie between 9² and 10²?", options: ["18", "19", "20", "17"], correct: 0, exp: "2n = 2(9) = 18 numbers." },
                { q: "The square root of 1.44 is:", options: ["1.2", "0.12", "12", "0.012"], correct: 0, exp: "1.2 × 1.2 = 1.44." },
                { q: "Which is a Pythagorean triplet?", options: ["(3, 4, 6)", "(6, 8, 10)", "(5, 12, 14)", "(7, 24, 26)"], correct: 1, exp: "6² + 8² = 36 + 64 = 100 = 10²." },
                { q: "What is the cube of 0.2?", options: ["0.008", "0.08", "0.8", "0.0008"], correct: 0, exp: "0.2 × 0.2 × 0.2 = 0.008." },
                { q: "Find the value of √(25/36).", options: ["5/6", "6/5", "25/6", "5/36"], correct: 0, exp: "√25 / √36 = 5/6." },
                { q: "The number of digits in the square root of 1234321 is:", options: ["3", "4", "5", "6"], correct: 1, exp: "7 digits => (7 + 1) / 2 = 4 digits." },
                { q: "Smallest number by which 675 must be multiplied to obtain a perfect cube is:", options: ["3", "5", "25", "2"], correct: 1, exp: "675 = 5² × 3³. To complete the cube of 5, multiply by 5." },
                { q: "What is the value of ∛(27 × 64)?", options: ["12", "14", "16", "18"], correct: 0, exp: "3 × 4 = 12." },
                { q: "What is 1 + 3 + 5 + 7 + 9 + 11 + 13 equal to?", options: ["49 (7²)", "64 (8²)", "36 (6²)", "50"], correct: 0, exp: "Sum of first 7 odd numbers = 7² = 49." },
                { q: "Find the square root of 17.64.", options: ["4.2", "4.8", "3.2", "4.4"], correct: 0, exp: "4.2 × 4.2 = 17.64." },
                { q: "The cube of an odd number is always:", options: ["Even", "Odd", "Zero", "Prime"], correct: 1, exp: "Odd × Odd × Odd is always Odd." },
                { q: "What is ∛(1/125)?", options: ["1/5", "1/25", "5", "1/15"], correct: 0, exp: "1 / 5 = 0.2." },
                { q: "Evaluate: √(49) + ∛(343).", options: ["14", "21", "49", "7"], correct: 0, exp: "7 + 7 = 14." },
                { q: "If the area of a square park is 2025 m², find its side length.", options: ["45 m", "55 m", "35 m", "50 m"], correct: 0, exp: "√2025 = 45 m." },
                { q: "Can the square of any integer end in an odd number of zeros?", options: ["Yes", "No, always an even number of zeros", "Only for 10", "Depends on base"], correct: 1, exp: "Squares always end in an even number of zeros (e.g. 10² = 100, 20² = 400)." }
            ]
        },
        {
            chapterNum: 7,
            title: "Frequency Distribution Tables and Graphs",
            summary: "Organize raw data, construct grouped frequency distributions, tally marks, histograms, and frequency polygons.",
            topics: [
                {
                    topicNum: 1,
                    title: "Grouped Frequency Tables & Histograms",
                    visualScene: "math-polyhedra",
                    visualLabel: "3D Statistical Histogram & Frequency Distribution Bars",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Organizing Data into Class Intervals",
                            textbookIdea: "Raw data is systematically grouped into <span class=\"underlined-concept\" data-concept=\"class-intervals\">class intervals</span> with lower and upper limits. The difference between limits is the class size (or width). A <span class=\"underlined-concept\" data-concept=\"histogram\">histogram</span> is a graphical representation consisting of adjacent vertical bars whose areas are proportional to the frequencies of the class intervals.",
                            easyExplanation: "When you have 100 test scores, looking at a giant list of numbers is confusing. Grouping them into buckets like 0–10, 10–20, 20–30 and drawing bars shows instantly where most students scored!",
                            visualScene: "math-polyhedra",
                            visualLabel: "3D Grouped Histogram Column Visualization"
                        }
                    ],
                    underlinedCards: [
                        { id: "class-intervals", word: "Class Intervals", meaning: "Numerical sub-ranges grouping continuous data, bounded by lower and upper limits.", simpleExplanation: "Data buckets like 10-20 or 20-30.", example: "Class 10-20 has class mark (midpoint) = (10+20)/2 = 15.", visual: "📊" },
                        { id: "histogram", word: "Histogram", meaning: "A 2D graphical display of grouped frequency data using contiguous adjacent rectangles without gaps.", simpleExplanation: "A bar graph with touching bars representing continuous ranges.", example: "Exam score distributions across a classroom.", visual: "📶" }
                    ],
                    remember: "In a histogram, the rectangles touch each other without gaps because class intervals for continuous data have no breaks.",
                    funFact: "Florence Nightingale pioneered data visualization in the 1850s, creating the polar area diagram to prove that sanitation saved soldier lives in hospitals!",
                    realLife: "Weather departments analyze daily rainfall patterns over decades using histograms to predict monsoon cycles.",
                    vocabulary: [
                        { word: "Frequency", meaning: "The count of times a particular observation occurs." },
                        { word: "Range", meaning: "The difference between the highest and lowest values in a dataset." },
                        { word: "Class Mark", meaning: "The midpoint of a class interval: (Lower limit + Upper limit) / 2." }
                    ],
                    summary: [
                        "Raw data is condensed into frequency tables using tally marks.",
                        "Class mark (midpoint) = (Upper Limit + Lower Limit) / 2.",
                        "Range = Maximum Value - Minimum Value.",
                        "Histograms display continuous grouped data with no gaps between bars."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What is the class mark of interval 20 - 30?", a: "Class mark = (20 + 30) / 2 = 50 / 2 = 25." },
                        { level: "Understanding", q: "Why are there no spaces between bars in a histogram?", a: "Because histograms represent continuous data where the upper limit of one class is the lower limit of the next." },
                        { level: "Applying", q: "The marks of 5 students are 15, 28, 42, 12, 35. Find the range.", a: "Range = Maximum - Minimum = 42 - 12 = 30." },
                        { level: "Analyzing", q: "Differentiate between inclusive and exclusive class intervals.", a: "Exclusive intervals (10-20, 20-30) exclude the upper limit; inclusive intervals (10-19, 20-29) include both limits." },
                        { level: "Evaluating", q: "When is a grouped frequency distribution preferred over an ungrouped frequency distribution?", a: "When the dataset is very large and the range of values is wide, preventing unwieldy individual tally tables." },
                        { level: "Creating", q: "Sketch the steps to construct a frequency polygon from a histogram.", a: "Plot midpoints of the top edges of each histogram bar, join them with straight line segments, and ground both ends to the baseline." }
                    ],
                    quiz: [
                        { q: "What is the class mark of interval 40 - 50?", options: ["40", "45", "50", "10"], correct: 1, exp: "(40 + 50) / 2 = 45." },
                        { q: "The difference between upper and lower class limits is called:", options: ["Class size (width)", "Class mark", "Frequency", "Range"], correct: 0, exp: "Upper limit - Lower limit = Class size." },
                        { q: "In a histogram, the area of each rectangle is proportional to the:", options: ["Class mark", "Frequency of the class", "Total range", "Lower limit"], correct: 1, exp: "Bar height/area reflects the frequency." },
                        { q: "The tally mark bundle represents which numerical count?", options: ["4", "5 (four vertical bars crossed by a diagonal)", "10", "6"], correct: 1, exp: "Standard tally bundles represent 5." },
                        { q: "The range of data 12, 25, 40, 8, 19, 31 is:", options: ["32", "40", "8", "23"], correct: 0, exp: "40 - 8 = 32." }
                    ],
                    flashcards: [
                        { q: "What is Range?", a: "Maximum value - Minimum value." },
                        { q: "What is Class Mark?", a: "(Lower Limit + Upper Limit) / 2." },
                        { q: "What is a Histogram?", a: "A graphical chart of continuous grouped data with touching bars." },
                        { q: "What is Frequency?", a: "How many times a value occurs." },
                        { q: "What is a Frequency Polygon?", a: "A line graph connecting the midpoints of histogram bars." }
                    ],
                    comparison: {
                        title: "Bar Chart vs. Histogram",
                        headers: ["Feature", "Bar Chart", "Histogram"],
                        rows: [
                            ["Data Type", "Categorical / discrete data (e.g. car colors, fruits)", "Continuous quantitative numerical data (e.g. heights, test scores)"],
                            ["Spacing", "Separated by uniform gaps between bars", "Touching bars without gaps"],
                            ["Width of Bars", "Arbitrary width; only height matters", "Width represents the class interval size"]
                        ],
                        vsSummary: "Bar charts display separate categories with gaps, whereas histograms plot continuous data ranges with touching bars."
                    }
                }
            ],
            exam: [
                { q: "In class interval 25 - 35, the lower limit is:", options: ["25", "35", "30", "10"], correct: 0, exp: "Lower limit is 25." },
                { q: "The class size of interval 100 - 120 is:", options: ["20", "110", "100", "120"], correct: 0, exp: "120 - 100 = 20." },
                { q: "In an exclusive class interval 10 - 20, the number 20 is counted in:", options: ["Class 10 - 20", "Class 20 - 30", "Both classes", "Neither class"], correct: 1, exp: "Upper limits are included in the subsequent interval." },
                { q: "What is the mean of the first 5 prime numbers (2, 3, 5, 7, 11)?", options: ["5.6", "5", "6", "7"], correct: 0, exp: "(2 + 3 + 5 + 7 + 11) / 5 = 28 / 5 = 5.6." },
                { q: "The median of 3, 5, 7, 9, 11 is:", options: ["7", "5", "9", "6"], correct: 0, exp: "The central middle value is 7." },
                { q: "The mode of data 2, 3, 4, 3, 5, 3, 6 is:", options: ["3", "4", "2", "5"], correct: 0, exp: "3 occurs most frequently (3 times)." },
                { q: "A kink (zig-zag line) on the horizontal axis of a graph indicates:", options: ["Values from 0 to that point are omitted", "Data is wrong", "Axis is infinite", "Negative values"], correct: 0, exp: "Kink breaks the axis when values don't start at zero." },
                { q: "What is the class mark of 15 - 25?", options: ["20", "10", "15", "25"], correct: 0, exp: "(15 + 25) / 2 = 20." },
                { q: "The total of all frequencies in a distribution equals:", options: ["Total number of observations (N)", "Range", "Class mark", "Mean"], correct: 0, exp: "Sum of frequencies = Total observations N." },
                { q: "The graph obtained by joining class marks of a histogram with straight lines is a:", options: ["Frequency polygon", "Pie chart", "Bar graph", "Ogive"], correct: 0, exp: "Connecting midpoints yields a frequency polygon." },
                { q: "What is the range of 100, 150, 200, 250, 300?", options: ["200", "300", "100", "150"], correct: 0, exp: "300 - 100 = 200." },
                { q: "If the mean of 6, 8, 5, x, 4 is 7, find x.", options: ["12", "10", "14", "8"], correct: 0, exp: "(23 + x) / 5 = 7 => 23 + x = 35 => x = 12." },
                { q: "In a pie chart, the angle of the full central circle is:", options: ["360°", "180°", "90°", "100°"], correct: 0, exp: "A full circle is 360°." },
                { q: "Can a dataset have more than one mode?", options: ["Yes (bimodal or multimodal)", "No, always only one", "Only if mean is 0", "Never"], correct: 0, exp: "Datasets with multiple peak frequencies are multimodal." },
                { q: "The width of each rectangle in a histogram represents:", options: ["Class width", "Frequency", "Cumulative frequency", "Range"], correct: 0, exp: "Horizontal bar width represents class size." },
                { q: "Class interval with boundaries 30.5 - 40.5 has class size:", options: ["10", "11", "35.5", "5"], correct: 0, exp: "40.5 - 30.5 = 10." },
                { q: "Which measure of central tendency is most affected by extreme outlier values?", options: ["Mean", "Median", "Mode", "None"], correct: 0, exp: "The arithmetic mean shifts heavily with extreme outliers." },
                { q: "Cumulative frequency table is used to determine:", options: ["Median", "Mode", "Range", "Class mark"], correct: 0, exp: "Cumulative frequencies allow median computation." },
                { q: "If class mark is 25 and class size is 10, the class interval is:", options: ["20 - 30", "15 - 25", "25 - 35", "10 - 20"], correct: 0, exp: "25 - 5 = 20 to 25 + 5 = 30." },
                { q: "A frequency table provides information about:", options: ["Distribution of values across classes", "Color of data", "Names only", "None"], correct: 0, exp: "Shows counts across intervals." }
            ]
        },
        {
            chapterNum: 8,
            title: "Exploring Geometrical Figures",
            summary: "Explore 2D and 3D solids, polyhedra, prisms, pyramids, net unfolding patterns, and Euler's formula V - E + F = 2.",
            topics: [
                {
                    topicNum: 1,
                    title: "Polyhedra, Nets & Euler's Formula",
                    visualScene: "math-polyhedra",
                    visualLabel: "3D Polyhedra Explorer & Real-Time Net Unfolding",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "3D Polyhedra: Prisms & Pyramids",
                            textbookIdea: "A solid figure whose surfaces are all flat polygon faces is called a <span class=\"underlined-concept\" data-concept=\"polyhedron\">polyhedron</span>. A <span class=\"underlined-concept\" data-concept=\"prism\">prism</span> has two identical congruent parallel polygon bases joined by rectangular lateral faces. A <span class=\"underlined-concept\" data-concept=\"pyramid\">pyramid</span> has a single polygon base with triangular lateral faces meeting at a single common vertex (apex).",
                            easyExplanation: "A polyhedron is any 3D solid with flat polygon sides (no curved circles or balls!). A prism is like a skyscraper: its roof and floor are identical polygons connected by straight walls. A pyramid is like the Great Pyramids of Egypt: a flat base with triangular walls meeting at a sharp peak!",
                            visualScene: "math-polyhedra",
                            visualLabel: "3D Rotating Prism vs Pyramid Morphing"
                        },
                        {
                            num: 2,
                            heading: "Euler's Formula & Net Patterns",
                            textbookIdea: "For any convex polyhedron with Vertices (V), Edges (E), and Faces (F), the famous Swiss mathematician Leonhard Euler established <span class=\"underlined-concept\" data-concept=\"eulers-formula\">Euler's Formula</span>: V - E + F = 2. A 2D flat shape that can be folded along edges to form a 3D solid is called a <span class=\"underlined-concept\" data-concept=\"net-pattern\">net</span> of the polyhedron.",
                            easyExplanation: "Every single flat-sided 3D shape obeys a magical mathematical equation: take the number of corners (V), subtract the number of lines (E), and add the number of flat faces (F), and you ALWAYS get exactly 2! A net is just the cardboard cutout you unfold flat on a table.",
                            visualScene: "math-polyhedra",
                            visualLabel: "3D Unfolding of Cube into 2D Cross Net"
                        }
                    ],
                    underlinedCards: [
                        { id: "polyhedron", word: "Polyhedron", meaning: "A 3D solid bounded by planar polygonal faces intersecting at straight edges and vertices.", simpleExplanation: "A 3D shape made entirely of flat polygon faces.", example: "Cube, octahedron, and dodecahedron.", visual: "🎲" },
                        { id: "prism", word: "Prism", meaning: "A polyhedron with two parallel congruent bases connected by rectangular lateral faces.", simpleExplanation: "A solid with identical top and bottom faces joined by flat walls.", example: "Triangular glass optical prism and rectangular cereal box.", visual: "📦" },
                        { id: "pyramid", word: "Pyramid", meaning: "A polyhedron whose base is a polygon and whose lateral faces are triangles meeting at a common apex.", simpleExplanation: "A solid with one base and triangular sides that meet at a point.", example: "Square pyramids of Giza in Egypt.", visual: "🔺" },
                        { id: "eulers-formula", word: "Euler's Formula", meaning: "Fundamental topological invariant for convex polyhedra: V - E + F = 2.", simpleExplanation: "Vertices minus Edges plus Faces equals 2 for all flat-faced 3D solids.", example: "For a cube: 8 vertices - 12 edges + 6 faces = 2.", visual: "✨" },
                        { id: "net-pattern", word: "Net Pattern", meaning: "A 2D plane arrangement of connected polygons that folds along edges into a 3D solid.", simpleExplanation: "The 2D paper cutout you can fold into a box.", example: "A cross of six squares that folds into a cube.", visual: "📄" }
                    ],
                    remember: "Euler's Formula V - E + F = 2 holds true strictly for convex polyhedra; it does NOT apply to solids with curved surfaces like spheres, cones, or cylinders.",
                    funFact: "There are ONLY five regular Platonic solids in the entire universe where every face is an identical regular polygon: Tetrahedron, Cube, Octahedron, Dodecahedron, and Icosahedron!",
                    realLife: "Cardboard packaging companies design complex 2D die-cut net templates that machines automatically fold, glue, and assemble into delivery boxes.",
                    vocabulary: [
                        { word: "Vertex", meaning: "A corner point where three or more edges intersect (plural: vertices)." },
                        { word: "Edge", meaning: "A line segment where two polygonal faces meet." },
                        { word: "Face", meaning: "A flat polygonal surface bounding a polyhedron." },
                        { word: "Apex", meaning: "The highest vertex of a pyramid opposite the base." }
                    ],
                    summary: [
                        "Polyhedra are 3D solids bounded entirely by flat polygonal faces.",
                        "Prisms have two identical congruent parallel bases connected by rectangles.",
                        "Pyramids have a polygon base with triangular faces meeting at a single apex.",
                        "Euler's Formula states: Vertices - Edges + Faces = 2 (V - E + F = 2).",
                        "Nets are 2D paper patterns that fold into 3D polyhedra."
                    ],
                    blooms: [
                        { level: "Remembering", q: "State Euler's Formula for polyhedra.", a: "V - E + F = 2 (Vertices - Edges + Faces = 2)." },
                        { level: "Understanding", q: "Why is a cylinder NOT classified as a polyhedron?", a: "Because a cylinder has a curved lateral surface, whereas polyhedra must be bounded entirely by flat polygon faces." },
                        { level: "Applying", q: "A polyhedron has 12 edges and 6 faces. Find its number of vertices using Euler's formula.", a: "V - E + F = 2 => V - 12 + 6 = 2 => V - 6 = 2 => V = 8 vertices." },
                        { level: "Analyzing", q: "Verify Euler's formula for a triangular prism.", a: "A triangular prism has V = 6, E = 9, F = 5. Checking: 6 - 9 + 5 = 2. Verified." },
                        { level: "Evaluating", q: "Can a polyhedron have 10 faces, 20 edges, and 15 vertices? Prove mathematically.", a: "V - E + F = 15 - 20 + 10 = 5 ≠ 2. Since the result is 5 instead of 2, such a polyhedron cannot exist." },
                        { level: "Creating", q: "Draw the 2D net of a square-based pyramid.", a: "Draw a central square base with four congruent isosceles triangles attached to its four sides." }
                    ],
                    quiz: [
                        { q: "How many faces, edges, and vertices does a cube have?", options: ["6 faces, 12 edges, 8 vertices", "8 faces, 12 edges, 6 vertices", "6 faces, 8 edges, 12 vertices", "4 faces, 6 edges, 4 vertices"], correct: 0, exp: "A cube has 6 square faces, 12 edges, and 8 corner vertices." },
                        { q: "What is Euler's Formula for any convex polyhedron?", options: ["V + E + F = 2", "V - E + F = 2", "V + E - F = 2", "V - E - F = 2"], correct: 1, exp: "Euler's Formula is V - E + F = 2." },
                        { q: "A polyhedron with a triangular base and 3 triangular side faces meeting at a vertex is called a:", options: ["Triangular prism", "Tetrahedron (Triangular pyramid)", "Square pyramid", "Octahedron"], correct: 1, exp: "A triangular pyramid is a tetrahedron with 4 triangular faces." },
                        { q: "If a polyhedron has 20 vertices and 30 edges, how many faces does it have?", options: ["10", "12", "15", "8"], correct: 1, exp: "V - E + F = 2 => 20 - 30 + F = 2 => -10 + F = 2 => F = 12 faces." },
                        { q: "Which of the following 3D shapes is NOT a polyhedron?", options: ["Cube", "Cone", "Triangular Prism", "Square Pyramid"], correct: 1, exp: "A cone has a curved lateral surface, so it is not a polyhedron." }
                    ],
                    flashcards: [
                        { q: "What is Euler's formula?", a: "V - E + F = 2." },
                        { q: "How many vertices does a cube have?", a: "8 vertices." },
                        { q: "How many edges does a cube have?", a: "12 edges." },
                        { q: "What is a prism?", a: "A polyhedron with two congruent parallel bases and rectangular sides." },
                        { q: "Can a sphere be a polyhedron?", a: "No, a sphere has a curved continuous surface." }
                    ],
                    comparison: {
                        title: "Prism vs. Pyramid",
                        headers: ["Feature", "Prism", "Pyramid"],
                        rows: [
                            ["Bases", "Two identical parallel congruent polygon bases", "Single polygon base"],
                            ["Lateral Faces", "Rectangular parallelogram faces", "Triangular faces meeting at a single apex"],
                            ["Vertex Peak", "No single apex; parallel vertices", "Single top apex point opposite base"]
                        ],
                        vsSummary: "Prisms have two identical bases linked by rectangles, while pyramids have one base with triangular sides tapering to an apex."
                    }
                }
            ],
            exam: [
                { q: "How many faces does a triangular pyramid (tetrahedron) have?", options: ["3", "4", "5", "6"], correct: 1, exp: "A tetrahedron has 4 triangular faces." },
                { q: "A solid with two congruent circular bases and a curved surface is a:", options: ["Cone", "Cylinder", "Sphere", "Prism"], correct: 1, exp: "A cylinder has two parallel circular faces and a curved wall." },
                { q: "If a polyhedron has 8 vertices and 6 faces, its number of edges is:", options: ["12", "14", "10", "16"], correct: 0, exp: "V - E + F = 2 => 8 - E + 6 = 2 => 14 - E = 2 => E = 12." },
                { q: "How many rectangular lateral faces does a pentagonal prism have?", options: ["3", "5", "7", "10"], correct: 1, exp: "A pentagonal prism has 5 sides, hence 5 lateral rectangular faces." },
                { q: "The net of a cylinder consists of two circles and one:", options: ["Triangle", "Rectangle", "Square", "Trapezium"], correct: 1, exp: "Unrolling a cylinder's curved surface forms a flat rectangle." },
                { q: "Which 3D shape has 0 vertices and 0 straight edges?", options: ["Cube", "Sphere", "Cone", "Cylinder"], correct: 1, exp: "A sphere is a perfectly continuous curved surface without edges or vertices." },
                { q: "A polyhedron with 8 faces and 12 vertices has how many edges?", options: ["16", "18", "20", "22"], correct: 1, exp: "V - E + F = 2 => 12 - E + 8 = 2 => 20 - E = 2 => E = 18 edges." },
                { q: "How many faces meet at each vertex of a cube?", options: ["2", "3", "4", "6"], correct: 1, exp: "Three square faces meet at every corner vertex of a cube." },
                { q: "The 3D views of an object from top, front, and side are known as:", options: ["Orthogonal projections", "Isometric sketches only", "Parallax views", "Topographies"], correct: 0, exp: "Orthogonal projections display top, front, and side elevations." },
                { q: "Which Platonic solid has 20 triangular faces?", options: ["Dodecahedron", "Icosahedron", "Octahedron", "Tetrahedron"], correct: 1, exp: "An icosahedron has 20 equilateral triangular faces." },
                { q: "What is the base shape of a hexagonal pyramid?", options: ["Triangle", "Pentagon", "Hexagon", "Circle"], correct: 2, exp: "A hexagonal pyramid has a 6-sided hexagon base." },
                { q: "How many edges does a triangular prism have?", options: ["6", "9", "12", "5"], correct: 1, exp: "3 base edges + 3 top edges + 3 vertical pillar edges = 9 edges." },
                { q: "A dice is an example of a:", options: ["Cuboid", "Cube", "Cone", "Cylinder"], correct: 1, exp: "A standard playing die is a symmetrical 6-faced cube." },
                { q: "How many vertices does a square pyramid have?", options: ["4", "5", "6", "8"], correct: 1, exp: "4 base corners + 1 top apex = 5 vertices." },
                { q: "Which solid cannot be unfolded into a flat polygon net?", options: ["Cube", "Pyramid", "Sphere", "Prism"], correct: 2, exp: "A sphere has Gaussian curvature and cannot flatten into planar polygons without distortion." },
                { q: "A matchbox is a physical model of a:", options: ["Cube", "Cuboid (Rectangular Prism)", "Cylinder", "Sphere"], correct: 1, exp: "A matchbox has rectangular faces of three different dimensions." },
                { q: "How many triangular faces does an octahedron have?", options: ["6", "8", "10", "12"], correct: 1, exp: "An octahedron has 8 congruent equilateral triangular faces." },
                { q: "Can a polyhedron have 3 faces?", options: ["Yes, a small pyramid", "No, at least 4 faces are needed to enclose 3D space", "Only in space", "Depends on size"], correct: 1, exp: "A minimum of 4 non-coplanar faces (tetrahedron) is needed to bound 3D volume." },
                { q: "An Egyptian pyramid with a square base has how many edges?", options: ["4", "6", "8", "12"], correct: 2, exp: "4 base edges + 4 sloping ridge edges = 8 edges." },
                { q: "If all faces of a polyhedron are congruent regular polygons and the same number of faces meet at each vertex, it is a:", options: ["Regular Polyhedron (Platonic Solid)", "Irregular Prism", "Cylinder", "Cone"], correct: 0, exp: "Regular polyhedra feature identical regular polygon faces." }
            ]
        },
        {
            chapterNum: 9,
            title: "Area of Plane Figures",
            summary: "Calculate areas of trapeziums, rhombuses, general quadrilaterals, polygons, and surface areas of 3D solids.",
            topics: [
                {
                    topicNum: 1,
                    title: "Area of Trapezium, Rhombus & General Polygons",
                    visualScene: "math-polyhedra",
                    visualLabel: "3D Geometric Area Decomposition Visualizer",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Area Formulas for Trapezium and Rhombus",
                            textbookIdea: "The <span class=\"underlined-concept\" data-concept=\"trapezium-area\">Area of a Trapezium</span> is half the product of the sum of parallel sides and the perpendicular distance between them: Area = 1/2 × (a + b) × h. The <span class=\"underlined-concept\" data-concept=\"rhombus-area\">Area of a Rhombus</span> is half the product of its diagonals: Area = 1/2 × d₁ × d₂.",
                            easyExplanation: "To find the area of a trapezium, average the two parallel sides and multiply by the height! For a diamond (rhombus), multiply both diagonal lines across it and cut in half!",
                            visualScene: "math-polyhedra",
                            visualLabel: "3D Trapezium Decomposition into Triangles"
                        }
                    ],
                    underlinedCards: [
                        { id: "trapezium-area", word: "Area of Trapezium", meaning: "A = 1/2 × (sum of parallel sides) × perpendicular height.", simpleExplanation: "Half of (a + b) times h.", example: "Parallel sides 8 cm and 12 cm with height 5 cm gives Area = 1/2 × 20 × 5 = 50 cm².", visual: "⏢" },
                        { id: "rhombus-area", word: "Area of Rhombus", meaning: "A = 1/2 × d₁ × d₂ where d₁ and d₂ are the lengths of the diagonals.", simpleExplanation: "Half of diagonal 1 times diagonal 2.", example: "Diagonals 10 cm and 16 cm yield Area = 1/2 × 10 × 16 = 80 cm².", visual: "🔷" }
                    ],
                    remember: "Any complex irregular polygon can be split into simple triangles and trapeziums by drawing a central baseline and vertical offsets.",
                    funFact: "Surveyors map giant agricultural fields in Telangana using the 'field book' method by decomposing plots into simple triangles and trapeziums!",
                    realLife: "Flooring tile contractors calculate total room square footage and required ceramic tiles using area decomposition formulas.",
                    vocabulary: [
                        { word: "Perpendicular Height (h)", meaning: "The shortest straight distance at 90° between two parallel lines." },
                        { word: "Diagonal", meaning: "Segment connecting opposite vertices." }
                    ],
                    summary: [
                        "Area of Trapezium = 1/2 × (a + b) × h.",
                        "Area of Rhombus = 1/2 × d₁ × d₂.",
                        "Area of General Quadrilateral = 1/2 × d × (h₁ + h₂).",
                        "Total surface area of a cuboid = 2(lb + bh + hl); Cube = 6a²."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What is the formula for the area of a rhombus?", a: "Area = 1/2 × d₁ × d₂." },
                        { level: "Understanding", q: "Why is the area of a rhombus half the product of its diagonals?", a: "Because the perpendicular diagonals split the rhombus into 4 congruent right triangles whose total area is 4 × (1/2 × (d₁/2) × (d₂/2)) = 1/2 × d₁ × d₂." },
                        { level: "Applying", q: "The parallel sides of a trapezium are 10 cm and 16 cm, and height is 8 cm. Find its area.", a: "Area = 1/2 × (10 + 16) × 8 = 1/2 × 26 × 8 = 104 cm²." },
                        { level: "Analyzing", q: "The diagonals of a rhombus are 12 cm and 16 cm. Find the length of each side.", a: "Half diagonals are 6 cm and 8 cm. By Pythagoras: Side = √(6² + 8²) = √(36 + 64) = √100 = 10 cm." },
                        { level: "Evaluating", q: "A cubical box has side 5 cm. Find its Total Surface Area and Lateral Surface Area.", a: "TSA = 6a² = 6(25) = 150 cm². LSA = 4a² = 4(25) = 100 cm²." },
                        { level: "Creating", q: "Calculate the area of a regular hexagon with side 6 cm.", a: "A regular hexagon consists of 6 equilateral triangles: Area = 6 × (√3/4 × s²) = 6 × (√3/4 × 36) = 54√3 ≈ 93.53 cm²." }
                    ],
                    quiz: [
                        { q: "What is the formula for the area of a trapezium?", options: ["1/2 × (a + b) × h", "(a + b) × h", "1/2 × a × b", "a × h"], correct: 0, exp: "Area = 1/2 × (a + b) × h." },
                        { q: "The diagonals of a rhombus are 8 cm and 6 cm. Its area is:", options: ["24 cm²", "48 cm²", "14 cm²", "28 cm²"], correct: 0, exp: "1/2 × 8 × 6 = 24 cm²." },
                        { q: "The total surface area of a cube of edge 4 cm is:", options: ["96 cm²", "64 cm²", "16 cm²", "24 cm²"], correct: 0, exp: "TSA = 6a² = 6(16) = 96 cm²." },
                        { q: "The lateral surface area of a cuboid with length l, breadth b, and height h is:", options: ["2(l + b)h", "2(lb + bh + hl)", "lbh", "(l + b)h"], correct: 0, exp: "LSA = 2h(l + b) (area of 4 walls)." },
                        { q: "Find the area of a rhombus whose side is 5 cm and altitude is 4.8 cm.", options: ["24 cm²", "20 cm²", "12 cm²", "9.6 cm²"], correct: 0, exp: "A rhombus is a parallelogram: Base × Altitude = 5 × 4.8 = 24 cm²." }
                    ],
                    flashcards: [
                        { q: "Area of a Trapezium?", a: "1/2 × (sum of parallel sides) × height." },
                        { q: "Area of a Rhombus?", a: "1/2 × d₁ × d₂." },
                        { q: "Area of General Quadrilateral?", a: "1/2 × diagonal × (h₁ + h₂)." },
                        { q: "TSA of a Cube?", a: "6a²." },
                        { q: "Volume of a Cuboid?", a: "length × breadth × height (l × b × h)." }
                    ],
                    comparison: {
                        title: "Total Surface Area vs. Lateral Surface Area",
                        headers: ["Characteristic", "Total Surface Area (TSA)", "Lateral Surface Area (LSA)"],
                        rows: [
                            ["Faces Included", "All bounding faces (including top roof and bottom floor)", "Only side vertical perimeter walls (excludes top and bottom)"],
                            ["Cube Formula", "6a²", "4a²"],
                            ["Real-Life Context", "Wrapping a gift box entirely in paper", "Painting the four interior walls of a room"]
                        ],
                        vsSummary: "TSA includes all outer surfaces, whereas LSA accounts exclusively for vertical side walls."
                    }
                }
            ],
            exam: [
                { q: "Area of a trapezium with parallel sides 12 cm, 20 cm and height 10 cm is:", options: ["160 cm²", "320 cm²", "150 cm²", "180 cm²"], correct: 0, exp: "1/2 × 32 × 10 = 160 cm²." },
                { q: "If the area of a trapezium is 34 cm² and parallel sides are 10 cm and 7 cm, find its height.", options: ["4 cm", "2 cm", "8 cm", "6 cm"], correct: 0, exp: "34 = 1/2 × 17 × h => 17h = 68 => h = 4 cm." },
                { q: "Find the area of a rhombus with diagonals 10 cm and 8.2 cm.", options: ["41 cm²", "82 cm²", "20.5 cm²", "50 cm²"], correct: 0, exp: "1/2 × 10 × 8.2 = 41 cm²." },
                { q: "The surface area of a cube is 294 cm². What is the length of its edge?", options: ["7 cm", "6 cm", "8 cm", "9 cm"], correct: 0, exp: "6a² = 294 => a² = 49 => a = 7 cm." },
                { q: "A cuboid has dimensions 5 cm × 4 cm × 2 cm. What is its volume?", options: ["40 cm³", "20 cm³", "76 cm³", "50 cm³"], correct: 0, exp: "Volume = l × b × h = 5 × 4 × 2 = 40 cm³." },
                { q: "The area of a rhombus is 240 cm² and one diagonal is 16 cm. Find the other diagonal.", options: ["30 cm", "15 cm", "20 cm", "25 cm"], correct: 0, exp: "240 = 1/2 × 16 × d₂ => 8d₂ = 240 => d₂ = 30 cm." },
                { q: "Find the perimeter of a rhombus with diagonals 6 cm and 8 cm.", options: ["20 cm", "24 cm", "14 cm", "28 cm"], correct: 0, exp: "Side = √(3² + 4²) = 5 cm. Perimeter = 4 × 5 = 20 cm." },
                { q: "Area of 4 walls of a room of length 10 m, breadth 6 m, and height 4 m is:", options: ["128 m²", "64 m²", "240 m²", "100 m²"], correct: 0, exp: "2h(l + b) = 2(4)(16) = 128 m²." },
                { q: "How many 1 cm cubes can fit into a 10 cm cube?", options: ["1,000", "100", "10", "10,000"], correct: 0, exp: "10³ / 1³ = 1000 cubes." },
                { q: "1 liter is equal to how many cubic centimeters?", options: ["1,000 cm³", "100 cm³", "10 cm³", "10,000 cm³"], correct: 0, exp: "1 liter = 1000 cm³." },
                { q: "1 cubic meter (1 m³) is equal to how many liters?", options: ["1,000 liters", "100 liters", "10,000 liters", "500 liters"], correct: 0, exp: "1 m³ = 1,000 liters." },
                { q: "The area of a parallelogram is 84 cm² and its base is 14 cm. Find its height.", options: ["6 cm", "7 cm", "8 cm", "12 cm"], correct: 0, exp: "Height = Area / Base = 84 / 14 = 6 cm." },
                { q: "What is the area of a triangle with base 12 cm and height 5 cm?", options: ["30 cm²", "60 cm²", "17 cm²", "24 cm²"], correct: 0, exp: "1/2 × 12 × 5 = 30 cm²." },
                { q: "The diagonals of a rhombus are equal. The rhombus must be a:", options: ["Square", "Trapezium", "Rectangle", "Kite"], correct: 0, exp: "A rhombus with equal diagonals is a square." },
                { q: "If the edge of a cube is doubled, its volume becomes:", options: ["8 times", "2 times", "4 times", "16 times"], correct: 0, exp: "(2a)³ = 8a³." },
                { q: "If the edge of a cube is doubled, its surface area becomes:", options: ["4 times", "2 times", "8 times", "6 times"], correct: 0, exp: "6(2a)² = 4(6a²)." },
                { q: "Find the cost of painting a 2 m × 1.5 m table top at Rs. 20 per m².", options: ["Rs. 60", "Rs. 30", "Rs. 70", "Rs. 50"], correct: 0, exp: "Area = 3 m². Cost = 3 × 20 = Rs. 60." },
                { q: "What is the circumference of a circle of radius 7 cm? (π = 22/7)", options: ["44 cm", "88 cm", "154 cm", "22 cm"], correct: 0, exp: "2πr = 2(22/7)(7) = 44 cm." },
                { q: "What is the area of a circular garden with radius 7 m?", options: ["154 m²", "44 m²", "308 m²", "77 m²"], correct: 0, exp: "πr² = (22/7)(49) = 154 m²." },
                { q: "A road roller makes 750 complete revolutions to move once over a road. It levels an area equal to:", options: ["750 × Curved Surface Area", "750 × Total Surface Area", "750 × Volume", "750 × Base Area"], correct: 0, exp: "The curved cylindrical surface contacts the road on each turn." }
            ]
        },
        {
            chapterNum: 10,
            title: "Direct and Inverse Proportions",
            summary: "Understand proportional reasoning, constant of variation, direct variation (x/y = k), and inverse variation (xy = k).",
            topics: [
                {
                    topicNum: 1,
                    title: "Direct and Inverse Variation Mechanics",
                    visualScene: "math-balance-scale",
                    visualLabel: "3D Direct vs Inverse Proportions Curve Simulator",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Direct and Inverse Variation Rules",
                            textbookIdea: "Two quantities x and y are in <span class=\"underlined-concept\" data-concept=\"direct-proportion\">Direct Proportion</span> if an increase in x produces a proportional increase in y: x/y = k (constant). They are in <span class=\"underlined-concept\" data-concept=\"inverse-proportion\">Inverse Proportion</span> if an increase in x causes a proportional decrease in y: x × y = k.",
                            easyExplanation: "Direct proportion means they move in the SAME direction: more petrol in your tank = more distance you can drive! Inverse proportion means they move in OPPOSITE directions: more workers on a building job = less days to finish!",
                            visualScene: "math-balance-scale",
                            visualLabel: "3D Speed vs Time Balancing Mechanism"
                        }
                    ],
                    underlinedCards: [
                        { id: "direct-proportion", word: "Direct Proportion", meaning: "Relationship where two variables maintain a constant ratio: x₁/y₁ = x₂/y₂ = k.", simpleExplanation: "When one quantity doubles, the other doubles.", example: "Number of pens and total cost.", visual: "↗️" },
                        { id: "inverse-proportion", word: "Inverse Proportion", meaning: "Relationship where the product of two variables remains constant: x₁y₁ = x₂y₂ = k.", simpleExplanation: "When one quantity doubles, the other drops to half.", example: "Car speed and travel time.", visual: "↘️" }
                    ],
                    remember: "Check the constant: If x/y is constant, it is DIRECT. If x × y is constant, it is INVERSE.",
                    funFact: "Boyle's Law in physics is a pure inverse proportion: at constant temperature, gas pressure × volume = constant (P₁V₁ = P₂V₂)!",
                    realLife: "Chefs scale recipe ingredient quantities directly in proportion to the number of dinner guests.",
                    vocabulary: [
                        { word: "Constant of Proportion (k)", meaning: "The invariant ratio or product linking two variables." },
                        { word: "Unitary Method", meaning: "Finding the value of a single unit first to find the value of required units." }
                    ],
                    summary: [
                        "Direct variation: x / y = k or x₁/y₁ = x₂/y₂.",
                        "Inverse variation: x × y = k or x₁y₁ = x₂y₂.",
                        "Speed and Time are inversely proportional for a fixed journey distance.",
                        "Workers and Time are inversely proportional for a fixed task."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What is the condition for inverse variation between x and y?", a: "The product x × y = k (constant)." },
                        { level: "Understanding", q: "Why is speed inversely proportional to travel time?", a: "Because Distance = Speed × Time; for a fixed distance, increasing speed decreases travel time." },
                        { level: "Applying", q: "If 15 sheets of paper weigh 50 grams, how many sheets weigh 1 kg (1,000 g)?", a: "Direct proportion: 15 / 50 = x / 1000 => x = (15 × 1000) / 50 = 300 sheets." },
                        { level: "Analyzing", q: "Identify whether the number of pipes filling a tank and time taken is direct or inverse.", a: "Inverse proportion: more inlet pipes fill the cistern in less time." },
                        { level: "Evaluating", q: "A car travels 60 km/h and takes 2 hours. If it increases speed to 80 km/h, find the new time.", a: "Inverse proportion: 60 × 2 = 80 × t => 120 = 80t => t = 1.5 hours (1 hr 30 min)." },
                        { level: "Creating", q: "Formulate a direct proportion table for petrol consumed (liters) vs. kilometers driven.", a: "1 L -> 15 km, 2 L -> 30 km, 5 L -> 75 km (ratio Distance/Petrol = 15 km/L)." }
                    ],
                    quiz: [
                        { q: "If x and y vary directly, which expression remains constant?", options: ["x / y", "x × y", "x + y", "x - y"], correct: 0, exp: "Direct proportion has constant ratio x/y = k." },
                        { q: "If x and y vary inversely, which expression remains constant?", options: ["x × y", "x / y", "x + y", "x²y"], correct: 0, exp: "Inverse proportion has constant product xy = k." },
                        { q: "If 8 oranges cost Rs. 40, how much do 12 oranges cost?", options: ["Rs. 60", "Rs. 50", "Rs. 72", "Rs. 48"], correct: 0, exp: "Cost per orange = 40/8 = Rs. 5. 12 oranges = 12 × 5 = Rs. 60." },
                        { q: "A hostel has food for 100 students for 20 days. If 25 more students join, how long will food last?", options: ["16 days", "15 days", "18 days", "12 days"], correct: 0, exp: "100 × 20 = 125 × d => d = 2000 / 125 = 16 days." },
                        { q: "Which of the following is in direct proportion?", options: ["Number of workers and time taken to build a wall", "Speed and time taken for a fixed distance", "Quantity of goods and their total cost", "Population and land area per person"], correct: 2, exp: "More goods cost proportionally more money." }
                    ],
                    flashcards: [
                        { q: "Formula for Direct Proportion?", a: "x₁ / y₁ = x₂ / y₂." },
                        { q: "Formula for Inverse Proportion?", a: "x₁ × y₁ = x₂ × y₂." },
                        { q: "Are Speed and Time directly or inversely proportional?", a: "Inversely proportional." },
                        { q: "Are Work and Number of Men directly or inversely proportional?", a: "Directly proportional (more men do more work in given time)." },
                        { q: "If 1 pen is Rs. 10, how much are 10 pens?", a: "Rs. 100 (Direct proportion)." }
                    ],
                    comparison: {
                        title: "Direct vs. Inverse Proportion",
                        headers: ["Aspect", "Direct Proportion", "Inverse Proportion"],
                        rows: [
                            ["Direction of Change", "Variables move in identical directions (both increase or both decrease)", "Variables move in opposite directions (one increases, other decreases)"],
                            ["Mathematical Invariant", "Ratio is constant (x / y = k)", "Product is constant (x × y = k)"],
                            ["Real-World Example", "Purchasing kilos of apples vs total price", "Speed of train vs duration to reach Hyderabad"]
                        ],
                        vsSummary: "Direct proportion maintains a constant quotient (x/y = k), while inverse proportion maintains a constant product (xy = k)."
                    }
                }
            ],
            exam: [
                { q: "If 14 workers build a wall in 45 hours, how many workers are needed to do it in 30 hours?", options: ["21 workers", "20 workers", "25 workers", "18 workers"], correct: 0, exp: "14 × 45 = W × 30 => W = 630 / 30 = 21 workers." },
                { q: "A car covers 432 km on 36 liters of petrol. How far will it travel on 25 liters?", options: ["300 km", "250 km", "320 km", "280 km"], correct: 0, exp: "432 / 36 = 12 km/L. 25 × 12 = 300 km." },
                { q: "If 56 men can dig a trench in 14 days, how many men can dig it in 8 days?", options: ["98 men", "84 men", "72 men", "100 men"], correct: 0, exp: "56 × 14 = M × 8 => M = 784 / 8 = 98 men." },
                { q: "If x and y are in inverse proportion and x = 4 when y = 6, find y when x = 8.", options: ["3", "12", "2", "6"], correct: 0, exp: "4 × 6 = 8 × y => 24 = 8y => y = 3." },
                { q: "If 20 meters of cloth costs Rs. 1600, what is the cost of 24.5 meters of cloth?", options: ["Rs. 1960", "Rs. 1800", "Rs. 2000", "Rs. 1920"], correct: 0, exp: "Cost per m = 1600 / 20 = Rs. 80. 24.5 × 80 = Rs. 1960." },
                { q: "A train moves at a uniform speed of 75 km/h. How much time will it take to cover 350 km?", options: ["4 hours 40 min", "4 hours 30 min", "5 hours", "4 hours 15 min"], correct: 0, exp: "Time = 350 / 75 = 14 / 3 hours = 4 hours 40 minutes." },
                { q: "6 pumps can empty a water reservoir in 28 minutes. How long will 4 pumps take?", options: ["42 minutes", "36 minutes", "40 minutes", "45 minutes"], correct: 0, exp: "6 × 28 = 4 × t => 168 = 4t => t = 42 minutes." },
                { q: "If a 5 m 60 cm vertical pole casts a shadow 3 m 20 cm long, find the length of shadow cast by a 10 m 50 cm pole.", options: ["6 m", "5 m", "7 m", "6.5 m"], correct: 0, exp: "560 / 320 = 1050 / s => 7 / 4 = 1050 / s => s = 600 cm = 6 m." },
                { q: "Which quantity is inversely proportional to the price of an article for a fixed total budget?", options: ["Quantity of articles that can be bought", "Tax on article", "Cost of wrapping", "Weight"], correct: 0, exp: "Higher price allows fewer articles to be bought with fixed funds." },
                { q: "A box of sweets is divided among 24 children, each getting 5 sweets. If children decrease by 4 (to 20), each gets:", options: ["6 sweets", "7 sweets", "4 sweets", "8 sweets"], correct: 0, exp: "24 × 5 = 20 × s => 120 = 20s => s = 6 sweets." },
                { q: "If x = 3y, then x and y vary:", options: ["Directly", "Inversely", "Not proportional", "Quadratically"], correct: 0, exp: "x / y = 3 (constant), so direct variation." },
                { q: "If xy = 10, then x and y vary:", options: ["Inversely", "Directly", "Linearly", "Exponentially"], correct: 0, exp: "Constant product means inverse variation." },
                { q: "If 12 cardboard boxes occupy 500 cm³ volume, how many boxes occupy 2000 cm³?", options: ["48 boxes", "36 boxes", "24 boxes", "50 boxes"], correct: 0, exp: "Direct proportion: 12 × 4 = 48 boxes." },
                { q: "If 8 men take 12 days to harvest a field, 6 men will take:", options: ["16 days", "14 days", "18 days", "20 days"], correct: 0, exp: "8 × 12 = 6 × d => 96 = 6d => d = 16 days." },
                { q: "Speed of a car and time taken to cover a fixed distance are:", options: ["Inversely proportional", "Directly proportional", "Unrelated", "Equal"], correct: 0, exp: "Higher speed requires lower time." },
                { q: "The scale of a map is 1 : 30,000,000. Two cities are 4 cm apart on the map. Real distance is:", options: ["1,200 km", "120 km", "12,000 km", "1,500 km"], correct: 0, exp: "4 × 30,000,000 cm = 120,000,000 cm = 1,200 km." },
                { q: "An electric pole 14 m high casts a shadow of 10 m. Find the height of a tree casting a 15 m shadow.", options: ["21 m", "20 m", "18 m", "25 m"], correct: 0, exp: "14 / 10 = H / 15 => H = (14 × 15) / 10 = 21 m." },
                { q: "If 15 workers complete a road in 48 days, how many workers can finish it in 30 days?", options: ["24 workers", "20 workers", "30 workers", "28 workers"], correct: 0, exp: "15 × 48 = W × 30 => W = 720 / 30 = 24 workers." },
                { q: "If 3 men or 6 women can do a work in 16 days, in how many days will 12 men and 8 women do it?", options: ["3 days", "4 days", "2 days", "5 days"], correct: 0, exp: "1 man = 2 women. 12 men + 8 women = 24 + 8 = 32 women. 6 × 16 = 32 × d => d = 3 days." },
                { q: "Two quantities x and y vary directly. If x = 2.5 when y = 5, find x when y = 8.", options: ["4", "3", "5", "6"], correct: 0, exp: "2.5 / 5 = x / 8 => 1/2 = x / 8 => x = 4." }
            ]
        }
    ]
};

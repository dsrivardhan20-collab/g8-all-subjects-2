/**
 * Telangana SCERT Class 8 - Biological Science Curriculum Data
 * Interactive Telangana SCERT Learning Platform
 * Official English Medium Textbook Structure
 */
window.SCERT_DATA = window.SCERT_DATA || {};
window.SCERT_DATA['biology'] = {
    id: 'biology',
    name: 'Biology',
    class: 'Class 8',
    icon: '🧬',
    accentColor: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    bgTheme: 'biology',
    tagline: 'Cells, Microorganisms, Genetics, Ecosystems & Agriculture',
    chapters: [
        {
            chapterNum: 1,
            title: "What is Science?",
            summary: "Explore scientific inquiry, controlled experimentation, hypotheses, and ethical scientific practices.",
            topics: [
                {
                    topicNum: 1,
                    title: "Scientific Method and Inquiry",
                    visualScene: "scientific-inquiry",
                    visualLabel: "3D Scientific Inquiry Cycle & Lab Apparatus",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Science as Process and Product",
                            textbookIdea: "Science is both an organized body of knowledge and an ongoing process of inquiry. The scientific method involves <span class=\"underlined-concept\" data-concept=\"observation\">systematic observation</span>, asking focused questions, formulating a testable <span class=\"underlined-concept\" data-concept=\"hypothesis\">hypothesis</span>, conducting controlled experiments, recording quantitative data, and drawing objective conclusions.",
                            easyExplanation: "Science is not just memorizing facts from a book; it is detective work! When a scientist sees something puzzling in nature, they ask why, guess an explanation (hypothesis), test it with an experiment, and check if their guess was correct.",
                            visualScene: "scientific-inquiry",
                            visualLabel: "3D Scientific Inquiry Steps & Laboratory Bench"
                        }
                    ],
                    underlinedCards: [
                        { id: "observation", word: "Systematic Observation", meaning: "Careful monitoring and recording of natural phenomena using scientific instruments and human senses.", simpleExplanation: "Watching closely and noting exact measurements without making wild guesses.", example: "Recording daily plant height with a millimeter ruler.", visual: "🔍" },
                        { id: "hypothesis", word: "Hypothesis", meaning: "A proposed, testable scientific explanation made on the basis of limited evidence as a starting point for further investigation.", simpleExplanation: "An educated guess that can be proven right or wrong through experimentation.", example: "Hypothesizing that plants grow faster in sunlight than in complete darkness.", visual: "💡" }
                    ],
                    remember: "A controlled experiment changes only one variable at a time (independent variable) while keeping all other conditions constant to ensure a fair test.",
                    funFact: "Alexander Fleming discovered penicillin in 1928 simply by observing that a green mould contaminating his bacterial petri dish had killed all surrounding staphylococcus bacteria!",
                    realLife: "Agricultural scientists in Telangana test new drought-resistant rice strains in controlled test plots with measured irrigation before releasing seeds to farmers.",
                    vocabulary: [
                        { word: "Variable", meaning: "Any condition or factor that can be changed or controlled in an experiment." },
                        { word: "Hypothesis", meaning: "A testable proposal explaining a phenomenon." }
                    ],
                    summary: [
                        "Science is organized knowledge derived through observation and experimentation.",
                        "The scientific method follows: Observation -> Question -> Hypothesis -> Experiment -> Conclusion.",
                        "Controlled experiments test one independent variable at a time.",
                        "Scientific conclusions must be peer-reviewed, reproducible, and verifiable.",
                        "Ethical scientific practices protect the biosphere and human welfare."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What is a hypothesis?", a: "A testable proposed explanation for an observed natural phenomenon." },
                        { level: "Understanding", q: "Why is a control group necessary in a scientific experiment?", a: "It provides a baseline standard for comparison to prove that the variable alone caused the observed effect." },
                        { level: "Applying", q: "Identify the independent variable when testing how different fertilizer amounts affect tomato yield.", a: "The amount of fertilizer added to each plant." },
                        { level: "Analyzing", q: "Distinguish between qualitative observation and quantitative observation.", a: "Qualitative uses descriptive senses (color, smell); quantitative uses measurable numerical data (mass, height)." },
                        { level: "Evaluating", q: "Why must scientific experiments be repeated multiple times before conclusions are accepted?", a: "To eliminate random errors, verify reproducibility, and ensure reliable data." },
                        { level: "Creating", q: "Design a simple controlled experiment to investigate whether earthworms prefer moist or dry soil.", a: "Place dry soil in one half of a tray and moist soil in the other; place 10 earthworms in the center and record their position after 1 hour." }
                    ],
                    quiz: [
                        { q: "What is the first step in the scientific method?", options: ["Drawing a conclusion", "Conducting an experiment", "Making an observation and asking a question", "Writing a textbook"], correct: 2, exp: "Scientific inquiry begins with keen observation and curiosity." },
                        { q: "An educated guess that can be tested through experimentation is called a:", options: ["Conclusion", "Theory", "Hypothesis", "Fact"], correct: 2, exp: "A hypothesis is a testable proposition." },
                        { q: "In a controlled experiment, how many independent variables should be altered at once?", options: ["Only one", "At least five", "Zero", "As many as possible"], correct: 0, exp: "Testing only one variable ensures changes are directly attributable to that factor." },
                        { q: "Which tool is essential for viewing microscopic microorganisms invisible to the naked eye?", options: ["Telescope", "Compound Microscope", "Barometer", "Stethoscope"], correct: 1, exp: "Compound microscopes magnify microscopic biological specimens." },
                        { q: "Data recorded as numbers and measurements (e.g. 15 cm, 25°C) is known as:", options: ["Qualitative data", "Quantitative data", "Theoretical data", "Imaginary data"], correct: 1, exp: "Quantitative data consists of measurable numerical values." }
                    ],
                    flashcards: [
                        { q: "What is Science?", a: "An organized body of knowledge and ongoing process of inquiry." },
                        { q: "What is a hypothesis?", a: "A testable proposed explanation." },
                        { q: "What is a controlled experiment?", a: "An experiment testing one variable while holding all others constant." },
                        { q: "Why is repetition important in science?", a: "To ensure accuracy, eliminate anomalies, and prove reproducibility." },
                        { q: "What instrument magnifies cells?", a: "A compound optical microscope." }
                    ],
                    comparison: {
                        title: "Qualitative Observation vs. Quantitative Observation",
                        headers: ["Feature", "Qualitative Observation", "Quantitative Observation"],
                        rows: [
                            ["Nature of Data", "Descriptive characteristics (color, texture, odor)", "Numerical measurements with standard scientific units"],
                            ["Measurement Tool", "Human senses (eyes, nose, touch)", "Calibrated instruments (balance, thermometer, ruler)"],
                            ["Example", "The leaf turned dark brown and crispy", "The leaf area is 24 cm² with a mass of 1.2 grams"]
                        ],
                        vsSummary: "Qualitative describes sensory qualities, while quantitative provides precise numerical measurements."
                    }
                }
            ],
            exam: [
                { q: "Science derived from the Latin word 'Scientia' means:", options: ["Magic", "Knowledge", "Power", "Nature"], correct: 1, exp: "Scientia means knowledge acquired through learning." },
                { q: "The variable deliberately changed by the experimenter is the:", options: ["Dependent variable", "Independent variable", "Controlled variable", "Extraneous variable"], correct: 1, exp: "The independent variable is intentionally manipulated." },
                { q: "Who is known as the father of modern observational science?", options: ["Galileo Galilei", "Aristotle", "Darwin", "Mendel"], correct: 0, exp: "Galileo emphasized experimental verification." },
                { q: "A scientific theory is:", options: ["Just a random guess", "A well-substantiated explanation supported by vast evidence", "A law that cannot change", "An unproven myth"], correct: 1, exp: "Scientific theories are rigorously tested comprehensive explanations." },
                { q: "Which of the following is NOT an attitude of a good scientist?", options: ["Curiosity", "Open-mindedness", "Dogmatic stubbornness refusing to accept new evidence", "Honesty in recording data"], correct: 2, exp: "Scientists must update views based on empirical evidence." },
                { q: "When experimental data contradicts a hypothesis, a scientist should:", options: ["Change the data", "Discard or modify the hypothesis and retest", "Stop the experiment", "Ignore the anomaly"], correct: 1, exp: "Hypotheses must align with empirical evidence." },
                { q: "A safety rule in a biology laboratory is:", options: ["Taste chemicals", "Wear safety goggles and lab coat; never eat in lab", "Run around", "Leave flames unattended"], correct: 1, exp: "Lab safety protects students from chemical and biological hazards." },
                { q: "Peer review in science means:", options: ["Review by children", "Evaluation of research by independent qualified experts before publication", "Selling papers", "Public voting"], correct: 1, exp: "Peer review verifies scientific rigor and accuracy." },
                { q: "Which part of a microscope controls the amount of light passing through the specimen?", options: ["Eyepiece", "Diaphragm", "Coarse adjustment knob", "Stage clip"], correct: 1, exp: "The diaphragm regulates illumination aperture." },
                { q: "An observation that uses only the five human senses without numbers is:", options: ["Quantitative", "Qualitative", "Statistical", "Mathematical"], correct: 1, exp: "Qualitative observations describe qualities." },
                { q: "What is an inference in scientific inquiry?", options: ["Direct measurement", "A logical conclusion drawn from observations and prior knowledge", "A guess with no data", "A chemical reaction"], correct: 1, exp: "Inferences interpret factual observations." },
                { q: "Why do scientists publish their findings in scientific journals?", options: ["To make money", "To share knowledge and allow other scientists to test and verify results", "For fame", "To keep secrets"], correct: 1, exp: "Publication enables global replication and validation." },
                { q: "The factor that changes in response to the independent variable is the:", options: ["Controlled factor", "Dependent variable", "Constant", "Hypothesis"], correct: 1, exp: "The dependent variable is the measured outcome." },
                { q: "Magnification of a compound microscope with 10x eyepiece and 40x objective lens is:", options: ["50x", "400x", "30x", "40x"], correct: 1, exp: "Total magnification = 10 × 40 = 400x." },
                { q: "Which Indian scientist won the Nobel Prize in Physics for light scattering?", options: ["C.V. Raman", "Homi Bhabha", "A.P.J. Abdul Kalam", "Jagadish Chandra Bose"], correct: 0, exp: "Sir C.V. Raman won the Nobel Prize in 1930 for the Raman Effect." },
                { q: "Science that deals with living organisms and vital processes is:", options: ["Geology", "Biology", "Astronomy", "Physics"], correct: 1, exp: "Biology is the study of living matter." },
                { q: "In a graph, the independent variable is customarily plotted on the:", options: ["Y-axis (vertical)", "X-axis (horizontal)", "Legend box", "Title"], correct: 1, exp: "The X-axis displays the independent variable." },
                { q: "What provides ethical guidelines for biological research involving animals?", options: ["Bioethics", "Cosmology", "Alchemy", "Thermodynamics"], correct: 0, exp: "Bioethics ensures ethical animal treatment and research integrity." },
                { q: "A stained plant cell slide is covered with a thin glass square called a:", options: ["Slide cover", "Coverslip", "Lens wiper", "Filter pad"], correct: 1, exp: "A coverslip protects the objective lens and flattens the specimen." },
                { q: "Science helps society by:", options: ["Creating superstition", "Developing medicine, agriculture, and sustainable technology", "Depleting resources", "Halting education"], correct: 1, exp: "Science drives societal health, food security, and technological progress." }
            ]
        },
        {
            chapterNum: 2,
            title: "Cell - The Basic Unit of Life",
            summary: "Examine cell theory, discovery by Robert Hooke, plant vs animal cells, and organelle functions.",
            topics: [
                {
                    topicNum: 1,
                    title: "Cell Structure and Organelles",
                    visualScene: "cell-explorer",
                    visualLabel: "3D Animal and Plant Cell Organelle Explorer",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Discovery of the Cell & Cell Theory",
                            textbookIdea: "In 1665, <span class=\"underlined-concept\" data-concept=\"robert-hooke\">Robert Hooke</span> discovered cells by observing thin slices of cork under his primitive microscope; he named the compartment-like chambers 'cells' (from Latin cella, small room). Later, Schleiden and Schwann established the <span class=\"underlined-concept\" data-concept=\"cell-theory\">Cell Theory</span>: all living organisms are composed of one or more cells, and the cell is the structural and functional unit of life.",
                            easyExplanation: "In 1665, an English scientist named Robert Hooke sliced a bottle cork and looked through his microscope. He saw honeycomb-like tiny rooms and named them cells! All plants, animals, and humans are built of trillions of these microscopic living building blocks.",
                            visualScene: "cell-explorer",
                            visualLabel: "3D Honeycomb Cork Cells to Modern Cell"
                        },
                        {
                            num: 2,
                            heading: "Plant Cell vs. Animal Cell & Organelles",
                            textbookIdea: "Cells contain specialized microscopic structures called organelles suspended in cytoplasm. The <span class=\"underlined-concept\" data-concept=\"nucleus\">nucleus</span> controls all cellular metabolic activities and houses genetic chromosomes. <span class=\"underlined-concept\" data-concept=\"mitochondria\">Mitochondria</span> generate energy through cellular respiration (ATP) and are known as the powerhouses of the cell. Plant cells possess a rigid cellulose <span class=\"underlined-concept\" data-concept=\"cell-wall\">cell wall</span>, green <span class=\"underlined-concept\" data-concept=\"chloroplasts\">chloroplasts</span> for photosynthesis, and a large central vacuole, which animal cells lack.",
                            easyExplanation: "Every cell is like a bustling mini city! The nucleus is city hall giving orders. Mitochondria are power plants making energy (ATP). Plant cells have two special superpowers that animal cells don't have: a tough outer fence (cell wall) and solar power kitchens (chloroplasts) that make food from sunlight!",
                            visualScene: "cell-explorer",
                            visualLabel: "3D Interactive Plant vs Animal Cell Cutaway"
                        }
                    ],
                    underlinedCards: [
                        { id: "robert-hooke", word: "Robert Hooke", meaning: "English natural philosopher who first coined the term 'cell' in 1665 after viewing dead cork cells.", simpleExplanation: "The scientist who discovered cells and named them after tiny monastery rooms.", example: "Microscopic observations recorded in his historic book Micrographia.", visual: "🔬" },
                        { id: "cell-theory", word: "Cell Theory", meaning: "Fundamental biological doctrine stating all living things consist of cells arising from pre-existing cells.", simpleExplanation: "The universal rule that all life is made of cells.", example: "Bacteria, trees, and humans all share basic cellular architecture.", visual: "📜" },
                        { id: "nucleus", word: "Nucleus", meaning: "The membrane-bound organelle containing genetic DNA that directs cellular growth and reproduction.", simpleExplanation: "The brain and control center of the cell.", example: "Chromosomes inside the nucleus carrying hereditary traits.", visual: "🧬" },
                        { id: "mitochondria", word: "Mitochondria", meaning: "Double-membraned organelle where cellular respiration occurs, producing ATP energy molecules.", simpleExplanation: "The cell's powerhouse generating energy.", example: "Muscle cells contain thousands of mitochondria to fuel movement.", visual: "⚡" },
                        { id: "cell-wall", word: "Cell Wall", meaning: "A tough, rigid cellulose layer surrounding plant cells providing mechanical support and shape.", simpleExplanation: "A rigid outer protective shield found only in plants and fungi.", example: "Bark and plant stems staying upright against wind.", visual: "🧱" },
                        { id: "chloroplasts", word: "Chloroplasts", meaning: "Plastid organelles containing green chlorophyll pigment that capture solar energy for photosynthesis.", simpleExplanation: "The solar kitchen of plant cells making sugar from sunlight.", example: "Green leaves synthesizing glucose from CO2 and water.", visual: "🍃" }
                    ],
                    remember: "Prokaryotic cells (like bacteria) lack a membrane-bound nucleus, while Eukaryotic cells (plants, animals, fungi) have an organized nucleus enclosed by a nuclear membrane.",
                    funFact: "The largest single biological cell in the world is an unfertilized ostrich egg, weighing over 1.4 kilograms and measuring 15 cm across!",
                    realLife: "Cheek cells gently scraped from the inside of your mouth with a clean toothpick and stained with methylene blue clearly show cell membranes, cytoplasm, and dark nuclei under a school microscope.",
                    vocabulary: [
                        { word: "Cytoplasm", meaning: "The jelly-like fluid matrix filling the cell between membrane and nucleus." },
                        { word: "Prokaryote", meaning: "Organism lacking a distinct membrane-bound nucleus (e.g. bacteria)." },
                        { word: "Eukaryote", meaning: "Organism with membrane-bound nucleus and organelles (e.g. plants, animals)." },
                        { word: "Vacuole", meaning: "Membrane-bound storage sac for water, waste, and cell sap." }
                    ],
                    summary: [
                        "Robert Hooke discovered cells in cork slices in 1665.",
                        "Cell theory states that all living organisms are made of cells, the basic units of life.",
                        "Prokaryotes lack a nuclear membrane; Eukaryotes have an organized nucleus.",
                        "Mitochondria produce ATP energy; Nucleus directs all cell activities.",
                        "Plant cells possess rigid cell walls, large vacuoles, and green chloroplasts absent in animal cells."
                    ],
                    blooms: [
                        { level: "Remembering", q: "Who discovered the cell and in which year?", a: "Robert Hooke discovered cells in the year 1665." },
                        { level: "Understanding", q: "Why are mitochondria called the powerhouses of the cell?", a: "Because they oxidize food during cellular respiration to release energy stored in ATP molecules." },
                        { level: "Applying", q: "Why does an onion peel cell have a cell wall while human cheek cells do not?", a: "Onion cells are plant cells requiring a rigid cellulose wall for structural support; animal cells need flexibility." },
                        { level: "Analyzing", q: "Compare prokaryotic and eukaryotic cells with examples.", a: "Prokaryotes (bacteria) lack nuclear membranes and organelles; eukaryotes (amoeba, human cells) have membrane-bound nuclei." },
                        { level: "Evaluating", q: "What would happen to a plant leaf cell if its chloroplasts were chemically destroyed?", a: "The cell could no longer synthesize glucose through photosynthesis and would starve." },
                        { level: "Creating", q: "Design a 3D edible cell model using kitchen ingredients.", a: "Use a gelatin base for cytoplasm, a plum for the nucleus, raisins for mitochondria, and fruit roll-ups for endoplasmic reticulum." }
                    ],
                    quiz: [
                        { q: "Who named the microscopic chambers observed in cork 'cells'?", options: ["Leeuwenhoek", "Robert Hooke", "Robert Brown", "Rudolf Virchow"], correct: 1, exp: "Robert Hooke coined the word 'cell' in 1665." },
                        { q: "Which organelle is called the 'Powerhouse of the Cell'?", options: ["Ribosome", "Mitochondrion", "Golgi body", "Lysosome"], correct: 1, exp: "Mitochondria produce cellular ATP energy." },
                        { q: "Which structure is present in plant cells but absent in animal cells?", options: ["Cell membrane", "Mitochondria", "Cellulose cell wall", "Nucleus"], correct: 2, exp: "Animal cells have only a cell membrane, lacking a rigid cell wall." },
                        { q: "The green pigment inside chloroplasts essential for photosynthesis is:", options: ["Hemoglobin", "Chlorophyll", "Melanin", "Carotene"], correct: 1, exp: "Chlorophyll absorbs red and blue sunlight for photosynthesis." },
                        { q: "Cells that lack a membrane-bound nucleus are called:", options: ["Eukaryotic cells", "Prokaryotic cells", "Somatic cells", "Gametes"], correct: 1, exp: "Prokaryotes (like bacteria) lack a true nuclear membrane." }
                    ],
                    flashcards: [
                        { q: "Who discovered cells?", a: "Robert Hooke in 1665." },
                        { q: "What is the powerhouse of the cell?", a: "Mitochondria (generates ATP)." },
                        { q: "Name three structures unique to plant cells.", a: "Cell wall, chloroplasts, and large central vacuole." },
                        { q: "What is the function of the cell nucleus?", a: "Controls cell activities and stores genetic DNA." },
                        { q: "What are cells without a nuclear membrane called?", a: "Prokaryotes." }
                    ],
                    comparison: {
                        title: "Plant Cell vs. Animal Cell",
                        headers: ["Feature", "Plant Cell", "Animal Cell"],
                        rows: [
                            ["Cell Wall", "Present (composed of tough cellulose)", "Absent (only flexible cell membrane)"],
                            ["Chloroplasts", "Present (contains chlorophyll for photosynthesis)", "Absent (animals cannot make their own food)"],
                            ["Vacuole Size", "One large permanent central vacuole", "Small, temporary vacuoles"],
                            ["Shape", "Fixed, rigid rectangular shape", "Irregular, flexible shape"]
                        ],
                        vsSummary: "Plant cells feature rigid cellulose walls, chloroplasts, and large central vacuoles, whereas animal cells are flexible and lack walls and plastids."
                    }
                }
            ],
            exam: [
                { q: "Who discovered the nucleus of the cell in 1831?", options: ["Robert Hooke", "Robert Brown", "Anton von Leeuwenhoek", "Theodor Schwann"], correct: 1, exp: "Robert Brown discovered the cell nucleus in orchid cells." },
                { q: "Which organelle is nicknamed the 'Suicide Bag' of the cell?", options: ["Lysosome", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"], correct: 0, exp: "Lysosomes contain powerful digestive enzymes that digest damaged cell components." },
                { q: "Which organelle is responsible for synthesizing proteins?", options: ["Vacuole", "Ribosome", "Golgi apparatus", "Centrosome"], correct: 1, exp: "Ribosomes translate genetic mRNA into protein chains." },
                { q: "The control center of the cell containing hereditary genetic chromosomes is the:", options: ["Cytoplasm", "Nucleus", "Cell membrane", "Plastid"], correct: 1, exp: "The nucleus houses chromosomes composed of DNA." },
                { q: "Who first observed living cells like bacteria and protozoa under improved lenses?", options: ["Robert Hooke", "Anton van Leeuwenhoek", "Schleiden", "Virchow"], correct: 1, exp: "Leeuwenhoek observed living microbes ('animalcules') in 1674." },
                { q: "The cell membrane is chemically composed of:", options: ["Cellulose only", "Lipids and proteins (phospholipid bilayer)", "Starch", "Pure DNA"], correct: 1, exp: "Cell membranes consist of a fluid phospholipid bilayer with embedded proteins." },
                { q: "Which of the following is a unicellular organism?", options: ["Amoeba", "Earthworm", "Hydra", "Mosquito"], correct: 0, exp: "Amoeba performs all life functions within a single cell." },
                { q: "Plastids that store starch, oils, and protein granules in plant roots are called:", options: ["Chloroplasts", "Chromoplasts", "Leucoplasts", "Centrosomes"], correct: 2, exp: "Leucoplasts are non-pigmented storage plastids." },
                { q: "What gives ripe tomatoes and colorful flowers their bright red and yellow colors?", options: ["Chloroplasts", "Chromoplasts", "Lysosomes", "Ribosomes"], correct: 1, exp: "Chromoplasts contain carotenoid pigments giving orange and red colors." },
                { q: "The cell membrane is described as 'selectively permeable' because:", options: ["It lets everything pass through", "It permits only certain substances to enter and exit the cell", "It is completely impermeable", "It dissolves in water"], correct: 1, exp: "Selective permeability controls molecular transport in and out." },
                { q: "Cell division is necessary for:", options: ["Growth of the body", "Repair of worn-out damaged tissues", "Reproduction", "All of the above"], correct: 3, exp: "Cell division fuels somatic growth, wound repair, and gametogenesis." },
                { q: "Human red blood cells (RBCs) are unique because mature human RBCs lack:", options: ["Hemoglobin", "A nucleus", "A membrane", "Iron"], correct: 1, exp: "Mature mammalian RBCs lose their nucleus to maximize oxygen carrying capacity." },
                { q: "Longest cells in the human body are:", options: ["Muscle cells", "Nerve cells (neurons)", "Bone cells", "Epithelial cells"], correct: 1, exp: "Neurons can reach over 1 meter in length, transmitting electrical nerve signals." },
                { q: "The jelly-like living substance inside a cell, including cytoplasm and nucleus, is called:", options: ["Protoplasm", "Cell sap", "Ectoplasm", "Vacuole"], correct: 0, exp: "Purkinje coined 'protoplasm' for the living substance of the cell." },
                { q: "Which organelle packs and secretes proteins and enzymes into vesicles?", options: ["Golgi apparatus (Golgi body)", "Lysosome", "Centriole", "Mitochondria"], correct: 0, exp: "Golgi complexes package cellular secretions." },
                { q: "A plant cell placed in hypertonic concentrated salt solution shrinks due to:", options: ["Endosmosis", "Exosmosis (plasmolysis)", "Active pumping", "Lysis"], correct: 1, exp: "Water leaves the cell by exosmosis, causing cytoplasm to pull away from the cell wall." },
                { q: "Chromosomes are composed of:", options: ["Lipids and sugars", "DNA and histone proteins", "RNA only", "Cellulose"], correct: 1, exp: "Chromosomes are condensed complexes of DNA and proteins." },
                { q: "Which organism changes its body shape continuously using pseudopodia?", options: ["Paramecium", "Euglena", "Amoeba", "Spirogyra"], correct: 2, exp: "Amoeba projects cytoplasmic pseudopodia for locomotion and feeding." },
                { q: "Tissues are formed by groups of:", options: ["Unrelated organs", "Similar cells performing a specific specialized function", "Molecules", "Chemicals"], correct: 1, exp: "Specialized cells aggregate to form tissues (e.g. xylem, muscle tissue)." },
                { q: "What is the function of the large central vacuole in plant cells?", options: ["Photosynthesis", "Maintaining cell turgidity and storing water/cell sap", "Protein synthesis", "Respiration"], correct: 1, exp: "Turgid vacuoles push against cell walls, keeping plants upright." }
            ]
        },
        {
            chapterNum: 3,
            title: "The World of Microorganisms",
            summary: "Explore bacteria, fungi, protozoa, algae, viruses, fermentation, antibiotics, vaccines, and food preservation.",
            topics: [
                {
                    topicNum: 1,
                    title: "Microbial Diversity, Friendly & Harmful Microbes",
                    visualScene: "microbe-microscope",
                    visualLabel: "3D Virtual Microscope: Amoeba, Paramecium & Bacterium",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Microbial Groups & Useful Microorganisms",
                            textbookIdea: "Microorganisms are microscopic single-celled or colonial living organisms categorized into bacteria, fungi, protozoa, algae, and <span class=\"underlined-concept\" data-concept=\"viruses\">viruses</span> (which reproduce only inside host cells). Beneficial microbes include <span class=\"underlined-concept\" data-concept=\"lactobacillus\">Lactobacillus</span> (curdling milk into curd), Yeast (fermentation in bread baking and alcohol brewing), and <span class=\"underlined-concept\" data-concept=\"rhizobium\">Rhizobium</span> (fixing atmospheric nitrogen in legume root nodules).",
                            easyExplanation: "Most microbes are invisible friends! Bacteria called Lactobacillus turn sweet milk into delicious curd. Baker's yeast produces bubbles of carbon dioxide gas that make bread loaves soft and fluffy, while garden soil bacteria feed nitrogen to bean plants.",
                            visualScene: "microbe-microscope",
                            visualLabel: "3D Paramecium Cilia & Bacterial Flagella"
                        },
                        {
                            num: 2,
                            heading: "Antibiotics, Vaccines & Disease Pathogens",
                            textbookIdea: "Alexander Fleming discovered the first <span class=\"underlined-concept\" data-concept=\"antibiotic\">antibiotic</span> (Penicillin) from Penicillium mould in 1928 to cure bacterial infections. Edward Jenner developed the first smallpox <span class=\"underlined-concept\" data-concept=\"vaccine\">vaccine</span> in 1796. Harmful microorganisms (pathogens) transmit communicable diseases via air, water, food, or insect vectors (e.g. female Anopheles mosquito transmitting malaria protozoa).",
                            easyExplanation: "When bad germs attack your body, antibiotics are medicines made from good fungi that destroy bacterial walls. Vaccines are like training drills: doctors give your immune system a weakened germ so your antibodies learn to fight the real disease before it ever hurts you!",
                            visualScene: "vaccine-immunity",
                            visualLabel: "3D Antibody Neutralization of Viral Pathogen"
                        }
                    ],
                    underlinedCards: [
                        { id: "viruses", word: "Viruses", meaning: "Sub-microscopic infectious agents that lie at the boundary of living and non-living, reproducing only within host cells.", simpleExplanation: "Microscopic invaders that cannot reproduce on their own until they hijack a living cell.", example: "Influenza virus, COVID-19, and Bacteriophage.", visual: "🦠" },
                        { id: "lactobacillus", word: "Lactobacillus", meaning: "A friendly probiotic bacterium that ferments lactose sugar in milk into lactic acid, producing curd.", simpleExplanation: "The good bacterium that turns milk into curd.", example: "Adding a spoonful of starter curd to warm milk overnight.", visual: "🥛" },
                        { id: "rhizobium", word: "Rhizobium", meaning: "Symbiotic nitrogen-fixing bacteria living in root nodules of leguminous plants that enrich soil fertility.", simpleExplanation: "Soil-friendly bacteria that turn air nitrogen into plant food.", example: "Root nodules of groundnut and pea crops.", visual: "🌱" },
                        { id: "antibiotic", word: "Antibiotics", meaning: "Medicines derived from microorganisms that kill or inhibit the growth of pathogenic bacteria.", simpleExplanation: "Medicines that kill bad bacteria without harming human cells.", example: "Penicillin, Streptomycin, and Tetracycline.", visual: "💊" },
                        { id: "vaccine", word: "Vaccine", meaning: "A biological preparation of weakened or dead pathogens that stimulates active antibody immunity.", simpleExplanation: "A safe protective shield teaching your body to defeat viral and bacterial infections.", example: "Polio drops, BCG, and COVID-19 vaccines.", visual: "💉" }
                    ],
                    remember: "Antibiotics are effective strictly against bacteria and fungi; they have ZERO effect against viral diseases like the common cold or influenza.",
                    funFact: "There are more bacterial cells living peacefully in your digestive gut right now than there are stars in the entire Milky Way galaxy!",
                    realLife: "Pasteurization is the milk preservation process developed by Louis Pasteur: heating milk to 70°C for 15-30 seconds and rapidly chilling it to kill pathogens without spoiling flavor.",
                    vocabulary: [
                        { word: "Pathogen", meaning: "A disease-causing microorganism." },
                        { word: "Fermentation", meaning: "Anaerobic conversion of sugar into alcohol and CO2 by yeast." },
                        { word: "Pasteurization", meaning: "Thermal sterilization of milk without boiling away nutrients." },
                        { word: "Vector", meaning: "An organism (like a mosquito or housefly) that carries pathogens between hosts." }
                    ],
                    summary: [
                        "Microorganisms include bacteria, fungi, protozoa, algae, and viruses.",
                        "Lactobacillus turns milk into curd; Yeast ferments dough for bread and brewing.",
                        "Rhizobium fixes atmospheric nitrogen in leguminous root nodules, enriching soil.",
                        "Alexander Fleming discovered penicillin; Edward Jenner created the first smallpox vaccine.",
                        "Female Anopheles mosquito transmits malaria; Female Aedes mosquito transmits dengue.",
                        "Food is preserved by pasteurization, refrigeration, salting, sugaring, and canning."
                    ],
                    blooms: [
                        { level: "Remembering", q: "Who discovered the smallpox vaccine and in which year?", a: "Edward Jenner in the year 1796." },
                        { level: "Understanding", q: "Why does bakery dough rise when yeast is kneaded into it?", a: "Yeast respires anaerobically, rapidly releasing carbon dioxide gas bubbles that expand the dough." },
                        { level: "Applying", q: "Why should a patient always finish the complete prescribed course of antibiotics?", a: "To ensure all pathogenic bacteria are killed, preventing surviving bacteria from developing drug-resistant mutations." },
                        { level: "Analyzing", q: "Why are viruses considered borderline entities between living and non-living things?", a: "Viruses crystallize like inert minerals outside hosts, but show reproduction and genetic replication inside living cells." },
                        { level: "Evaluating", q: "Assess why adding excess salt preserves raw mangoes from rotting.", a: "Salt creates a hypertonic solution; water is drawn out of bacterial cells by exosmosis, dehydrating and killing them." },
                        { level: "Creating", q: "Design a community awareness poster highlighting stagnant water elimination to prevent dengue outbreaks.", a: "Create illustrations showing flowerpots, discarded tyres, and coolers drained weekly to break the Aedes mosquito breeding cycle." }
                    ],
                    quiz: [
                        { q: "Which bacterium converts milk into curd?", options: ["Rhizobium", "Lactobacillus", "Spirogyra", "Salmonella"], correct: 1, exp: "Lactobacillus ferments milk lactose into lactic acid." },
                        { q: "Who discovered Penicillin in 1928?", options: ["Edward Jenner", "Alexander Fleming", "Louis Pasteur", "Robert Koch"], correct: 1, exp: "Alexander Fleming discovered penicillin from Penicillium notatum mould." },
                        { q: "Malaria is caused by a protozoan called Plasmodium transmitted by:", options: ["Housefly", "Female Anopheles mosquito", "Male Anopheles mosquito", "Aedes mosquito"], correct: 1, exp: "Female Anopheles mosquitoes carry and inject Plasmodium sporozoites." },
                        { q: "Which microorganism is used in the commercial production of alcohol and bread?", options: ["Amoeba", "Yeast", "Paramecium", "Chlamydomonas"], correct: 1, exp: "Yeast conducts anaerobic alcoholic fermentation." },
                        { q: "The process of heating milk to 70°C and chilling it quickly to kill microbes is called:", options: ["Fermentation", "Pasteurization", "Distillation", "Condensation"], correct: 1, exp: "Pasteurization was pioneered by French microbiologist Louis Pasteur." }
                    ],
                    flashcards: [
                        { q: "What is an antibiotic?", a: "A medicine derived from microbes that kills pathogenic bacteria." },
                        { q: "Who discovered the smallpox vaccine?", a: "Edward Jenner in 1796." },
                        { q: "Which mosquito transmits Dengue fever?", a: "Female Aedes mosquito." },
                        { q: "What is fermentation?", a: "Conversion of sugars into alcohol and CO2 by yeast." },
                        { q: "Can antibiotics cure viral colds?", a: "No, antibiotics work only against bacteria and fungi." }
                    ],
                    comparison: {
                        title: "Bacteria vs. Viruses",
                        headers: ["Feature", "Bacteria", "Viruses"],
                        rows: [
                            ["Cellular Structure", "Full prokaryotic living single cells", "Non-cellular genetic core inside a protein capsid"],
                            ["Reproduction", "Reproduce independently by binary fission", "Can only replicate by hijacking host cellular machinery"],
                            ["Antibiotic Treatment", "Effectively killed by antibiotics (penicillin)", "Completely immune to antibiotics; require antivirals/vaccines"]
                        ],
                        vsSummary: "Bacteria are living cellular organisms treatable with antibiotics, while viruses are non-cellular genetic invaders treatable only with vaccines and antivirals."
                    }
                }
            ],
            exam: [
                { q: "Which scientist discovered the bacterium Bacillus anthracis causing anthrax disease?", options: ["Alexander Fleming", "Robert Koch", "Louis Pasteur", "Edward Jenner"], correct: 1, exp: "Robert Koch identified Bacillus anthracis in 1876, establishing Koch's postulates." },
                { q: "Rust of wheat is a plant disease caused by:", options: ["Bacteria", "Fungi (Puccinia)", "Virus", "Protozoa"], correct: 1, exp: "Wheat rust is caused by airborne fungal spores of Puccinia." },
                { q: "Citrus canker disease in lemon trees is caused by:", options: ["Bacteria (Xanthomonas)", "Fungi", "Virus", "Insect bite"], correct: 0, exp: "Citrus canker is a destructive bacterial plant disease." },
                { q: "Yellow vein mosaic of bhindi (okra) is transmitted by:", options: ["Water", "Whitefly (insect vector)", "Soil fungi", "Wind alone"], correct: 1, exp: "Whiteflies transmit the yellow vein mosaic viral pathogen." },
                { q: "What chemical preservative is commonly added to packaged fruit jams and squashes?", options: ["Sodium benzoate and sodium metabisulphite", "Sulphuric acid", "Copper sulphate", "Sodium chloride only"], correct: 0, exp: "Sodium benzoate prevents bacterial and fungal spoilage in food." },
                { q: "Athlete's foot is a common human skin infection caused by:", options: ["Fungi", "Protozoa", "Bacteria", "Virus"], correct: 0, exp: "Tinea fungal species infect warm, moist foot skin." },
                { q: "Which protozoan moves using whip-like flagella?", options: ["Amoeba", "Euglena", "Paramecium", "Plasmodium"], correct: 1, exp: "Euglena possesses a single anterior whip-like flagellum." },
                { q: "Nitrogen gas makes up what percentage of Earth's atmosphere?", options: ["21%", "78%", "0.04%", "50%"], correct: 1, exp: "Atmospheric air consists of about 78% elemental nitrogen." },
                { q: "Which organism is capable of biological nitrogen fixation alongside Rhizobium?", options: ["Blue-green algae (Cyanobacteria / Nostoc / Anabaena)", "Yeast", "Penicillium", "Amoeba"], correct: 0, exp: "Cyanobacteria fix gaseous nitrogen in paddy fields." },
                { q: "Tuberculosis (TB) is an airborne human infection caused by:", options: ["Virus", "Mycobacterium tuberculosis (Bacterium)", "Protozoa", "Fungi"], correct: 1, exp: "Mycobacterium tuberculosis attacks lung tissue." },
                { q: "Cholera is transmitted primarily through:", options: ["Contaminated food and drinking water", "Mosquito bites", "Air droplets", "Direct touch"], correct: 0, exp: "Vibrio cholerae spreads through sewage-contaminated water." },
                { q: "Which vaccine is given at birth to protect babies against Tuberculosis?", options: ["BCG (Bacille Calmette-Guérin)", "Polio", "DPT", "MMR"], correct: 0, exp: "BCG immunization confers protection against severe tuberculosis." },
                { q: "Alexander Fleming was working on which culture when he discovered penicillin?", options: ["E. coli", "Staphylococci bacteria", "Yeast", "Salmonella"], correct: 1, exp: "Staphylococcus culture plates were cleared by Penicillium mould." },
                { q: "Food poisoning can be caused by bacterial toxins produced by:", options: ["Lactobacillus", "Clostridium botulinum and Salmonella", "Rhizobium", "Yeast"], correct: 1, exp: "Clostridium botulinum produces deadly botulinum neurotoxin in spoiled food." },
                { q: "Which of the following is an algae commonly found in stagnant green pond water?", options: ["Spirogyra", "Amoeba", "Mucor", "Rhizopus"], correct: 0, exp: "Spirogyra is a filamentous green photosynthetic freshwater alga." },
                { q: "Sleeping sickness disease in Africa is transmitted by the bite of the:", options: ["Tsetse fly", "Housefly", "Mosquito", "Tick"], correct: 0, exp: "The tsetse fly transmits the protozoan Trypanosoma." },
                { q: "The foot-and-mouth disease of cattle is caused by a:", options: ["Bacterium", "Virus", "Fungus", "Protozoan"], correct: 1, exp: "Foot-and-mouth is a highly contagious viral disease of livestock." },
                { q: "Why is sugar used in preserving fruit jams and jellies?", options: ["It adds color", "It reduces moisture content, inhibiting microbial growth", "It increases acidity", "It creates gas"], correct: 1, exp: "High sugar concentrations dehydrate microbes via osmosis." },
                { q: "Which of the following is an edible mushroom (fungus)?", options: ["Agaricus bisporus", "Amanita (poisonous)", "Penicillium", "Rhizopus"], correct: 0, exp: "Agaricus bisporus is the common edible button mushroom." },
                { q: "Vaccines stimulate the human body's white blood cells to produce:", options: ["Antigens", "Antibodies", "Hormones", "Red blood cells"], correct: 1, exp: "Antibodies are specialized defense proteins that neutralize pathogens." }
            ]
        },
        {
            chapterNum: 4,
            title: "Reproduction in Animals",
            summary: "Examine sexual vs asexual reproduction, binary fission, budding, human gametes, fertilization, and frog metamorphosis.",
            topics: [
                {
                    topicNum: 1,
                    title: "Reproductive Modes and Development",
                    visualScene: "reproduction-cycles",
                    visualLabel: "3D Binary Fission & Frog Metamorphosis Lifecycle",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Asexual Reproduction: Binary Fission & Budding",
                            textbookIdea: "Reproduction ensures the continuity of life across generations. In <span class=\"underlined-concept\" data-concept=\"asexual-reproduction\">asexual reproduction</span>, a single parent produces genetically identical offspring without gamete fusion. In <span class=\"underlined-concept\" data-concept=\"binary-fission\">binary fission</span> (Amoeba), the nucleus and cytoplasm divide equally into two daughter cells. In <span class=\"underlined-concept\" data-concept=\"budding\">budding</span> (Hydra), an outgrowth or bud develops on the parent body, detaching when mature.",
                            easyExplanation: "Asexual reproduction needs only one parent! Amoeba reproduces by simply splitting itself down the middle into two identical twins (binary fission). Hydra grows a mini baby bump on its side that pops off when ready (budding)!",
                            visualScene: "reproduction-cycles",
                            visualLabel: "3D Amoeba Binary Fission Cytoplasmic Division"
                        },
                        {
                            num: 2,
                            heading: "Sexual Reproduction, Fertilization & Metamorphosis",
                            textbookIdea: "Sexual reproduction involves fusion of male sperm and female ovum (<span class=\"underlined-concept\" data-concept=\"fertilization\">fertilization</span>) to form a zygote that develops into an embryo. Fertilization can be internal (humans, birds) or external in water (frogs, fish). Animals that lay eggs are <span class=\"underlined-concept\" data-concept=\"oviparous\">oviparous</span>; animals that give birth to live young are <span class=\"underlined-concept\" data-concept=\"viviparous\">viviparous</span>. The dramatic transformation from larva to adult is <span class=\"underlined-concept\" data-concept=\"metamorphosis\">metamorphosis</span> (Egg -> Tadpole -> Adult frog), regulated by the thyroid hormone thyroxine.",
                            easyExplanation: "In sexual reproduction, father's sperm and mother's egg fuse to create a zygote. Birds lay eggs (oviparous), while cows and humans give birth directly to babies (viviparous). A swimming tadpole with gills transforming into a leaping frog with lungs is called metamorphosis!",
                            visualScene: "frog-metamorphosis",
                            visualLabel: "3D Egg to Tadpole to Adult Frog Transformation"
                        }
                    ],
                    underlinedCards: [
                        { id: "asexual-reproduction", word: "Asexual Reproduction", meaning: "A mode of reproduction involving a single parent producing offspring without formation or fusion of gametes.", simpleExplanation: "Reproduction using only one parent with no seeds or eggs required.", example: "Budding in yeast and binary fission in amoeba.", visual: "🔄" },
                        { id: "binary-fission", word: "Binary Fission", meaning: "Asexual division where a parent unicellular organism divides into two approximately equal daughter cells.", simpleExplanation: "Splitting cleanly into two identical cells.", example: "Amoeba dividing its nucleus and cytoplasm.", visual: "➗" },
                        { id: "budding", word: "Budding", meaning: "Asexual reproduction in which a new individual develops from a regenerative outgrowth on the parent.", simpleExplanation: "Growing a baby branch that detaches to live independently.", example: "Hydra growing a lateral bud in freshwater.", visual: "🌱" },
                        { id: "fertilization", word: "Fertilization", meaning: "The physical fusion of male haploid sperm with female haploid ovum to form a diploid zygote.", simpleExplanation: "The union of sperm and egg that sparks a new life.", example: "Sperm fertilizing an ovum in the human fallopian tube.", visual: "🎯" },
                        { id: "oviparous", word: "Oviparous Animals", meaning: "Animals that reproduce by laying eggs which hatch outside the mother's body.", simpleExplanation: "Egg-laying animals like hens, sparrows, and lizards.", example: "Birds laying calcium-shelled eggs in nests.", visual: "🥚" },
                        { id: "viviparous", word: "Viviparous Animals", meaning: "Animals that give birth directly to live young nourished internally in a uterus.", simpleExplanation: "Animals that give birth to live babies, like humans and cows.", example: "Mammals nursing newborn calves and infants.", visual: "👶" },
                        { id: "metamorphosis", word: "Metamorphosis", meaning: "The biological transformation in body structure from larva/tadpole to sexually mature adult.", simpleExplanation: "Drastic physical changes transforming an aquatic swimmer into a land frog.", example: "Tadpoles absorbing tails and developing lungs and legs.", visual: "🐸" }
                    ],
                    remember: "Thyroxine hormone from the thyroid gland controls metamorphosis in tadpoles; if water lacks iodine, tadpoles cannot synthesize thyroxine and remain tadpoles forever!",
                    funFact: "Dolly the sheep was the first mammal ever cloned from an adult somatic mammary cell, born in Scotland in 1996!",
                    realLife: "IVF (In Vitro Fertilization) is a medical technique where sperm and egg are fertilized in a laboratory test tube before transferring the embryo into the mother's uterus (giving rise to 'test-tube babies').",
                    vocabulary: [
                        { word: "Zygote", meaning: "The single cell formed immediately after fertilization of sperm and egg." },
                        { word: "Embryo", meaning: "An early developmental stage formed by repeated mitotic division of the zygote." },
                        { word: "Foetus", meaning: "Developmental stage where identifiable human body parts (limbs, eyes, ears) are distinguishable." }
                    ],
                    summary: [
                        "Asexual reproduction requires one parent (binary fission in Amoeba, budding in Hydra).",
                        "Sexual reproduction involves male sperm and female ovum fusing into a single zygote.",
                        "Internal fertilization occurs inside female body; External fertilization occurs in water.",
                        "Viviparous animals give birth to live young; Oviparous animals lay eggs.",
                        "Metamorphosis transforms larvae into adults, controlled by iodine and thyroxine hormone."
                    ],
                    blooms: [
                        { level: "Remembering", q: "Define fertilization.", a: "The fusion of a male sperm with a female ovum to form a single diploid zygote." },
                        { level: "Understanding", q: "Why do frogs and fish lay hundreds of eggs in water while hens lay only one egg at a time?", a: "Aquatic external eggs face high predation and water currents; laying hundreds ensures at least a few survive." },
                        { level: "Applying", q: "What will happen to tadpoles living in a pond where water is completely deficient in iodine?", a: "They cannot synthesize thyroxine hormone and will fail to undergo metamorphosis, never becoming frogs." },
                        { level: "Analyzing", q: "Contrast internal fertilization with external fertilization with examples.", a: "Internal takes place inside the female body (humans, birds); external takes place in open water (frogs, fish)." },
                        { level: "Evaluating", q: "Assess the evolutionary advantages of viviparity over oviparity.", a: "Developing inside the mother's uterus provides warmth, nutrition, and superior protection from predators." },
                        { level: "Creating", q: "Construct a flow diagram of the life cycle of a silk moth from egg to adult.", a: "Egg -> Caterpillar (Silkworm) -> Pupa inside silk Cocoon -> Adult Silk Moth." }
                    ],
                    quiz: [
                        { q: "Binary fission is the primary mode of asexual reproduction in:", options: ["Hydra", "Amoeba", "Frog", "Human"], correct: 1, exp: "Amoeba divides into two daughter cells by binary fission." },
                        { q: "Animals that lay eggs are called:", options: ["Viviparous", "Oviparous", "Carnivorous", "Herbivorous"], correct: 1, exp: "Oviparous animals lay eggs." },
                        { q: "In human females, fertilization of the ovum by sperm typically occurs in the:", options: ["Ovary", "Uterus", "Fallopian tube (oviduct)", "Cervix"], correct: 2, exp: "Fertilization takes place within the fallopian tube." },
                        { q: "The transformation of a tadpole into an adult frog is called:", options: ["Binary fission", "Metamorphosis", "Budding", "Cloning"], correct: 1, exp: "Metamorphosis encompasses drastic post-embryonic structural transformations." },
                        { q: "Which mineral element in pond water is essential for tadpole metamorphosis?", options: ["Iron", "Iodine", "Calcium", "Zinc"], correct: 1, exp: "Iodine is required to synthesize the thyroid hormone thyroxine." }
                    ],
                    flashcards: [
                        { q: "What is a zygote?", a: "The single cell formed by the fusion of sperm and ovum." },
                        { q: "Give an example of budding.", a: "Hydra." },
                        { q: "What is external fertilization?", a: "Fertilization occurring outside the body, in water (e.g. frogs)." },
                        { q: "What is an oviparous animal?", a: "An egg-laying animal (e.g. birds, reptiles)." },
                        { q: "What hormone controls metamorphosis in frogs?", a: "Thyroxine (requiring iodine)." }
                    ],
                    comparison: {
                        title: "Viviparous Animals vs. Oviparous Animals",
                        headers: ["Feature", "Viviparous Animals", "Oviparous Animals"],
                        rows: [
                            ["Birth Process", "Give birth directly to live young", "Lay eggs covered with protective shells"],
                            ["Embryo Nourishment", "Directly from mother via placenta", "From stored egg yolk inside the egg"],
                            ["Examples", "Humans, dogs, cows, whales, cats", "Birds, frogs, lizards, snakes, insects"]
                        ],
                        vsSummary: "Viviparous animals give birth to developed offspring nourished internally, while oviparous animals lay eggs that hatch externally."
                    }
                }
            ],
            exam: [
                { q: "The male reproductive gamete in humans is called the:", options: ["Ovum", "Sperm", "Zygote", "Embryo"], correct: 1, exp: "Spermatozoa are the motile male gametes produced in testes." },
                { q: "How many chromosomes are present in a normal human zygote?", options: ["23 chromosomes", "46 chromosomes (23 pairs)", "92 chromosomes", "48 chromosomes"], correct: 1, exp: "23 from father + 23 from mother = 46 chromosomes." },
                { q: "Which organ produces ova (eggs) in human females?", options: ["Uterus", "Ovary", "Fallopian tube", "Vagina"], correct: 1, exp: "Ovaries produce female gametes (ova) and hormones." },
                { q: "Dolly the sheep was produced by the scientific technique of:", options: ["Cloning", "Budding", "Tissue culture", "Hydroponics"], correct: 0, exp: "Ian Wilmut and team cloned Dolly using somatic cell nuclear transfer." },
                { q: "The stage of the embryo in which all body parts can be identified is called a:", options: ["Zygote", "Blastocyst", "Foetus", "Larva"], correct: 2, exp: "A foetus has distinct human limbs and facial features." },
                { q: "Hydra reproduces asexually by:", options: ["Budding", "Binary fission", "Spore formation", "Fragmentation"], correct: 0, exp: "Hydra develops regenerative buds on its column." },
                { q: "External fertilization is common among:", options: ["Birds and mammals", "Fish and amphibians (frogs)", "Reptiles", "Insects"], correct: 1, exp: "Aquatic animals release eggs and sperm simultaneously into water." },
                { q: "A sperm cell consists of three anatomical parts: head, middle piece, and:", options: ["Tail (flagellum)", "Tentacle", "Cilia", "Fin"], correct: 0, exp: "The whip-like tail provides motility to reach the ovum." },
                { q: "The embedding of an embryo into the thick wall of the uterus is termed:", options: ["Fertilization", "Implantation", "Ovulation", "Menstruation"], correct: 1, exp: "Implantation anchors the blastocyst to the uterine endometrium." },
                { q: "Which animal undergoes metamorphosis during its lifecycle?", options: ["Human", "Butterfly and Frog", "Dog", "Cow"], correct: 1, exp: "Butterflies (caterpillar to adult) and frogs (tadpole to frog) undergo metamorphosis." },
                { q: "Eggs of birds have a hard protective outer shell made of:", options: ["Cellulose", "Calcium carbonate", "Silica", "Keratin"], correct: 1, exp: "Bird eggshells consist of calcium carbonate crystals." },
                { q: "Male sex hormone testosterone is secreted by the:", options: ["Pituitary gland", "Testes", "Pancreas", "Adrenal gland"], correct: 1, exp: "Leydig cells in the testes secrete testosterone." },
                { q: "Where does the development of the human baby take place inside the mother?", options: ["Ovary", "Uterus (womb)", "Stomach", "Oviduct"], correct: 1, exp: "The fetus grows inside the muscular uterus." },
                { q: "Test-tube babies are conceived through:", options: ["Cloning", "In Vitro Fertilization (IVF)", "Asexual budding", "Surrogacy only"], correct: 1, exp: "IVF accomplishes fertilization outside the body in laboratory glassware." },
                { q: "In humans, sex of the unborn child is genetically determined by the:", options: ["Mother", "Father's sperm (X or Y chromosome)", "Nutrition", "Temperature"], correct: 1, exp: "Father provides either an X chromosome (female) or Y chromosome (male)." },
                { q: "Which animal reproduces by multiple fission during harsh conditions?", options: ["Plasmodium", "Hydra", "Frog", "Earthworm"], correct: 0, exp: "Malarial parasite Plasmodium divides into dozens of daughter cells inside a cyst." },
                { q: "What provides nutrition to the developing fetus inside the mother's womb?", options: ["Amniotic fluid", "Placenta and umbilical cord", "Lungs", "Stomach"], correct: 1, exp: "The placenta exchanges nutrients, gases, and wastes between maternal and fetal blood." },
                { q: "Which of the following is an oviparous mammal?", options: ["Kangaroo", "Duck-billed Platypus", "Bat", "Whale"], correct: 1, exp: "Platypus and echidna are monotremes that lay eggs." },
                { q: "Gestation period in humans (pregnancy duration) is approximately:", options: ["9 months (about 280 days)", "5 months", "12 months", "3 months"], correct: 0, exp: "Human gestation lasts approximately 40 weeks (280 days)." },
                { q: "The caterpillar of a silk moth weaves a silk casing around itself called a:", options: ["Chrysalis", "Cocoon", "Nodule", "Capsule"], correct: 1, exp: "The cocoon is constructed of continuous silk protein threads." }
            ]
        },
        {
            chapterNum: 5,
            title: "Reaching the Age of Adolescence",
            summary: "Explore puberty, physical and emotional changes, endocrine glands, hormones, and adolescent nutrition.",
            topics: [
                {
                    topicNum: 1,
                    title: "Puberty, Hormones & Endocrine Glands",
                    visualScene: "endocrine-system",
                    visualLabel: "3D Human Endocrine Glands & Hormonal Network",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Puberty & Secondary Sexual Characteristics",
                            textbookIdea: "<span class=\"underlined-concept\" data-concept=\"adolescence\">Adolescence</span> is the transitional phase of physical and psychological development between childhood and adulthood (approx. 10 to 19 years). <span class=\"underlined-concept\" data-concept=\"puberty\">Puberty</span> marks the onset of sexual maturity, characterized by growth spurts, development of secondary sexual characteristics (growth of facial and body hair, deepening of voice with protruding Adam's apple in boys; development of breasts and widening of hips in girls).",
                            easyExplanation: "Between ages 10 and 19, your body transforms from a child into a young adult! Boys grow taller rapidly, their voices deepen, and Adam's apple becomes visible. Girls develop curvier frames and begin their menstrual cycle. These changes are completely natural steps of growing up!",
                            visualScene: "endocrine-system",
                            visualLabel: "3D Puberty Growth Chart & Hormonal Triggers"
                        },
                        {
                            num: 2,
                            heading: "Endocrine Glands & Chemical Messengers",
                            textbookIdea: "Hormones are chemical messengers secreted directly into the bloodstream by ductless <span class=\"underlined-concept\" data-concept=\"endocrine-glands\">endocrine glands</span>. The <span class=\"underlined-concept\" data-concept=\"pituitary-gland\">Pituitary Gland</span> is the master gland attached to the brain that controls other glands. The thyroid secretes thyroxine; adrenal glands secrete adrenaline (fight-or-flight hormone); the pancreas secretes insulin (regulating blood glucose); testes secrete testosterone; ovaries secrete estrogen.",
                            easyExplanation: "Endocrine glands are chemical control towers in your body. The pituitary gland in your brain is the master boss sending signals to all other glands. The pancreas makes insulin to manage sugar, while adrenals make adrenaline when you get scared or excited before a big race!",
                            visualScene: "endocrine-system",
                            visualLabel: "3D Endocrine Organs Map: Pituitary to Adrenals"
                        }
                    ],
                    underlinedCards: [
                        { id: "adolescence", word: "Adolescence", meaning: "The developmental period of life leading to physical, physiological, and emotional reproductive maturity.", simpleExplanation: "The teenage transition years between childhood and adulthood.", example: "Rapid height spurts between ages 11 and 16.", visual: "🌱" },
                        { id: "puberty", word: "Puberty", meaning: "The developmental milestone when the human body undergoes physical changes to become capable of sexual reproduction.", simpleExplanation: "When the reproductive organs mature and secondary sexual traits appear.", example: "Voice breaking and beard growth in boys; breast development in girls.", visual: "⚡" },
                        { id: "endocrine-glands", word: "Endocrine Glands", meaning: "Ductless glands that release chemical hormone secretions directly into the circulating bloodstream.", simpleExplanation: "Internal organs that release hormones directly into your blood without tubes.", example: "Thyroid, pancreas, and adrenal glands.", visual: "🩸" },
                        { id: "pituitary-gland", word: "Pituitary Gland", meaning: "The master endocrine gland located at the base of the brain regulating growth hormone and other endocrine organs.", simpleExplanation: "The chief control gland of the body located in the brain.", example: "Releasing growth hormone to control adult height.", visual: "🧠" }
                    ],
                    remember: "Sex of the baby is decided at the instant of fertilization: an X sperm yields a baby girl (XX), while a Y sperm yields a baby boy (XY). The mother has only X chromosomes and has zero genetic role in gender determination.",
                    funFact: "Adrenaline is nicknamed the 'Fight-or-Flight' hormone because it instantly increases heart rate, dilates bronchial airways, and pumps glucose into muscles during sudden danger!",
                    realLife: "Deficiency of iodine in drinking water and food prevents the thyroid gland from making thyroxine, causing goitre—a swollen neck condition prevented by using iodized salt.",
                    vocabulary: [
                        { word: "Hormone", meaning: "Chemical messenger molecule transported in the bloodstream to target organs." },
                        { word: "Adam's Apple", meaning: "The prominent protruding larynx cartilage visible in the throat of adolescent boys." },
                        { word: "Menstruation", meaning: "Monthly shedding of the uterine lining and unfertilized ovum." }
                    ],
                    summary: [
                        "Adolescence is the transitional period from childhood to adulthood marked by puberty.",
                        "Puberty brings growth spurts, voice changes, hair growth, and emotional maturity.",
                        "Endocrine glands secrete hormones directly into the blood without ducts.",
                        "Pituitary gland is the master gland; Pancreas secretes insulin; Thyroid secretes thyroxine.",
                        "Adolescents require balanced nutrition rich in iron, calcium, and proteins for healthy growth."
                    ],
                    blooms: [
                        { level: "Remembering", q: "Which endocrine gland is known as the Master Gland of the human body?", a: "The Pituitary Gland." },
                        { level: "Understanding", q: "Why do adolescent boys develop a protruding Adam's apple in their throat?", a: "During puberty, testosterone stimulates the rapid enlargement of the larynx (voice box), causing it to protrude forward." },
                        { level: "Applying", q: "Why is a diet rich in iron particularly crucial for adolescent girls?", a: "To replenish hemoglobin and red blood cells lost during monthly menstruation, preventing iron-deficiency anemia." },
                        { level: "Analyzing", q: "Explain why scientifically it is incorrect to blame the mother for the birth of a female child.", a: "Mothers contribute only X chromosomes; it is the father's sperm carrying either an X or Y chromosome that determines the child's sex." },
                        { level: "Evaluating", q: "Assess the health hazards of adolescent addiction to junk foods and sugary soft drinks.", a: "Junk foods lack essential iron, calcium, and proteins, causing obesity, dental caries, stunted bone mineralization, and lethargy." },
                        { level: "Creating", q: "Plan a balanced, low-cost daily meal plan for an adolescent student.", a: "Morning: boiled egg or sprouted lentils with milk; Lunch: rice/roti with dal, leafy greens (palak), and curd; Evening: roasted peanuts and a seasonal fruit." }
                    ],
                    quiz: [
                        { q: "Which hormone is responsible for male secondary sexual characteristics like facial hair?", options: ["Estrogen", "Testosterone", "Insulin", "Thyroxine"], correct: 1, exp: "Testosterone drives male reproductive maturation and physical changes." },
                        { q: "Which gland secretes insulin that regulates blood glucose levels?", options: ["Pancreas", "Thyroid", "Adrenal", "Pituitary"], correct: 0, exp: "The islets of Langerhans in the pancreas secrete insulin." },
                        { q: "The emergency 'Fight or Flight' hormone secreted during sudden fear is:", options: ["Adrenaline", "Thyroxine", "Growth hormone", "Progesterone"], correct: 0, exp: "Adrenal glands release adrenaline to prepare muscles for emergency response." },
                        { q: "Goitre disease with a swollen neck is caused by deficiency of:", options: ["Iron", "Iodine", "Vitamin C", "Calcium"], correct: 1, exp: "Iodine is mandatory for thyroxine synthesis; deficiency leads to goitre." },
                        { q: "Which combination of sex chromosomes produces a biological male child?", options: ["XX", "XY", "YY", "XO"], correct: 1, exp: "XY chromosome combination determines male sex in humans." }
                    ],
                    flashcards: [
                        { q: "What is the master endocrine gland?", a: "Pituitary gland." },
                        { q: "What hormone does the thyroid gland secrete?", a: "Thyroxine (needs iodine)." },
                        { q: "What hormone regulates blood sugar?", a: "Insulin (from pancreas)." },
                        { q: "Which chromosomes determine a female child?", a: "XX chromosomes." },
                        { q: "What is Adam's apple?", a: "The enlarged protruding larynx in adolescent boys." }
                    ],
                    comparison: {
                        title: "Endocrine Glands vs. Exocrine Glands",
                        headers: ["Feature", "Endocrine Glands", "Exocrine Glands"],
                        rows: [
                            ["Duct System", "Ductless; secrete directly into bloodstream", "Have ducts (tubes) to transport secretions to target site"],
                            ["Secretions", "Hormones (chemical messengers)", "Enzymes, sweat, saliva, tears, digestive juices"],
                            ["Examples", "Pituitary, Thyroid, Adrenal, Pancreas", "Salivary glands, Sweat glands, Tear glands"]
                        ],
                        vsSummary: "Endocrine glands release hormones into the bloodstream without ducts, while exocrine glands deliver enzymes and fluids through dedicated ducts."
                    }
                }
            ],
            exam: [
                { q: "What is the legal minimum age of marriage for girls and boys in India?", options: ["16 and 18 years", "18 and 21 years", "21 and 25 years", "18 and 18 years"], correct: 1, exp: "Indian law sets 18 for women and 21 for men." },
                { q: "Diabetes mellitus is caused by insufficient secretion of which hormone?", options: ["Thyroxine", "Insulin", "Adrenaline", "Testosterone"], correct: 1, exp: "Deficiency of insulin leads to high blood sugar levels." },
                { q: "The onset of menstruation in adolescent girls at puberty is termed:", options: ["Menopause", "Menarche", "Gestation", "Lactation"], correct: 1, exp: "Menarche is the first occurrence of menstruation." },
                { q: "The permanent cessation of menstruation in women around age 45-50 is termed:", options: ["Menarche", "Menopause", "Puberty", "Ovulation"], correct: 1, exp: "Menopause marks the end of female reproductive fertility." },
                { q: "Which gland secretes growth hormone that regulates normal human height?", options: ["Thyroid", "Pituitary gland", "Adrenal", "Testis"], correct: 1, exp: "Growth hormone (GH) is secreted by the anterior pituitary." },
                { q: "Excessive secretion of growth hormone in childhood causes:", options: ["Dwarfism", "Gigantism", "Goitre", "Scurvy"], correct: 1, exp: "Hypersecretion of GH causes abnormal extreme height (gigantism)." },
                { q: "Acne and pimples are common in adolescents due to increased activity of:", options: ["Sweat and sebaceous (oil) glands", "Salivary glands", "Thyroid glands", "Tear glands"], correct: 0, exp: "Overactive sebaceous glands clog skin pores with sebum oil and bacteria." },
                { q: "Adolescent emotional mood swings are primarily caused by:", options: ["Rapid hormonal shifts influencing brain neurotransmitters", "Poor eyesight", "Muscle growth", "Lack of sleep only"], correct: 0, exp: "Surging reproductive hormones impact neurological emotional centers." },
                { q: "Which nutrient is essential for strong bone and tooth mineralization during puberty?", options: ["Iron", "Calcium and Vitamin D", "Sodium", "Iodine"], correct: 1, exp: "Calcium and vitamin D build peak bone mass." },
                { q: "What disease results from dietary iron deficiency in adolescent girls?", options: ["Rickets", "Anemia", "Scurvy", "Beriberi"], correct: 1, exp: "Anemia is insufficient hemoglobin causing pallor and fatigue." },
                { q: "A human egg cell (ovum) always carries which sex chromosome?", options: ["Always X chromosome", "Always Y chromosome", "Both X and Y", "Neither"], correct: 0, exp: "Human females are homogametic (XX), so all ova contain an X chromosome." },
                { q: "The target site of a hormone is the:", options: ["Heart only", "Specific organ or tissue with receptor cells responding to the hormone", "Brain only", "Stomach"], correct: 1, exp: "Target cells express specific receptors for specific hormones." },
                { q: "Which gland sits like a cap on top of each human kidney?", options: ["Adrenal gland", "Thyroid", "Thymus", "Pancreas"], correct: 0, exp: "Adrenal glands are suprarenal glands located atop the kidneys." },
                { q: "Female sex hormone estrogen is produced by the:", options: ["Pituitary", "Ovaries", "Pancreas", "Thyroid"], correct: 1, exp: "Ovarian follicles synthesize estrogen." },
                { q: "Which habit is extremely hazardous to adolescent physical and mental health?", options: ["Regular outdoor sports", "Consuming addictive drugs and tobacco", "Reading books", "Drinking milk"], correct: 1, exp: "Substance abuse causes irreversible neural and bodily harm." },
                { q: "HIV (Human Immunodeficiency Virus) causes AIDS by attacking the body's:", options: ["Digestive system", "Immune system (T-helper lymphocytes)", "Skeletal bones", "Kidneys"], correct: 1, exp: "HIV destroys CD4+ immune cells, leaving patients vulnerable to opportunistic infections." },
                { q: "Which of the following is NOT a mode of HIV transmission?", options: ["Sharing infected injection syringes", "Unprotected sexual contact", "Mosquito bites or shaking hands", "Infected mother to child during childbirth"], correct: 2, exp: "HIV cannot be transmitted by casual touch, saliva, or mosquito bites." },
                { q: "Nutritional requirement during adolescence is highest because:", options: ["They sleep less", "The body is undergoing rapid cellular growth and tissue development", "They study more", "Digestion slows down"], correct: 1, exp: "Adolescent growth spurt demands high caloric and micronutrient density." },
                { q: "The voice box enlargement that produces a cracked, deeper voice in boys is due to:", options: ["Larynx enlargement stimulated by testosterone", "Tongue thickening", "Tooth loss", "Cold infection"], correct: 0, exp: "Testosterone thickens vocal cords and enlarges the laryngeal cartilage." },
                { q: "Which food item is considered a complete nutritional food for human babies?", options: ["Fruit juice", "Mother's milk", "Cow milk only", "Rice water"], correct: 1, exp: "Maternal milk provides ideal balanced macronutrients and protective antibodies." }
            ]
        },
        {
            chapterNum: 6,
            title: "Biodiversity and its Conservation",
            summary: "Explore ecosystem variety, endemic & endangered species, Red Data Book, sanctuaries, national parks, and reforestation.",
            topics: [
                {
                    topicNum: 1,
                    title: "Biodiversity, Extinction & Wildlife Sanctuaries",
                    visualScene: "cell-organelles",
                    visualLabel: "3D Biodiversity Web & Ecosystem Habitat Explorer",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Flora, Fauna & Endemic Species",
                            textbookIdea: "The variety of living organisms existing on Earth, their interrelationships, and their relationships with the environment is called <span class=\"underlined-concept\" data-concept=\"biodiversity\">Biodiversity</span>. Plants occurring in a particular region are called <span class=\"underlined-concept\" data-concept=\"flora\">Flora</span>, and animals are called Fauna. Species found exclusively in a restricted geographic region and nowhere else naturally are termed <span class=\"underlined-concept\" data-concept=\"endemic-species\">Endemic Species</span>.",
                            easyExplanation: "Biodiversity is Earth's magnificent living tapestry—from invisible soil microbes to towering teak trees and Bengal tigers! When a species only lives in one specific forest in Telangana and nowhere else on Earth, scientists call it endemic.",
                            visualScene: "cell-organelles",
                            visualLabel: "3D Forest Canopy & Species Food Web"
                        }
                    ],
                    underlinedCards: [
                        { id: "biodiversity", word: "Biodiversity", meaning: "The totality of genes, species, and ecosystems of a region.", simpleExplanation: "The rich variety of all living plants, animals, and microorganisms.", example: "Tropical rainforests harbor the richest biodiversity on Earth.", visual: "🌿" },
                        { id: "flora", word: "Flora & Fauna", meaning: "Flora refers to native plant life, and fauna refers to native animal life of a designated region.", simpleExplanation: "Plants and animals of a particular area.", example: "Teak and deer in Kawal Tiger Reserve.", visual: "🦌" },
                        { id: "endemic-species", word: "Endemic Species", meaning: "Species confined exclusively to a designated geographic area.", simpleExplanation: "Organisms naturally found only in one single place on the planet.", example: "The Indian Giant Squirrel in deciduous forests of the Deccan.", visual: "🐿️" }
                    ],
                    remember: "The Red Data Book, published by IUCN (International Union for Conservation of Nature), keeps an official international record of all endangered and threatened animal and plant species.",
                    funFact: "India contains 4 out of the world's 36 recognized biodiversity hotspots: Western Ghats, Eastern Himalayas, Indo-Burma region, and Sundaland!",
                    realLife: "Telangana state established Kawal Wildlife Sanctuary and Amrabad Tiger Reserve to protect the endangered Royal Bengal Tiger and leopards.",
                    vocabulary: [
                        { word: "Endangered Species", meaning: "Organisms facing an immediate high risk of extinction in the wild." },
                        { word: "Reforestation", meaning: "Restocking of destroyed forests by planting new native saplings." },
                        { word: "Sanctuary", meaning: "A protected natural area where hunting and habitat exploitation are prohibited." }
                    ],
                    summary: [
                        "Biodiversity represents the rich variety of all living organisms on Earth.",
                        "Deforestation causes soil erosion, climatic disruption, and loss of animal habitats.",
                        "Endemic species are restricted strictly to specific geographic zones.",
                        "IUCN publishes the Red Data Book tracking endangered species.",
                        "National Parks, Sanctuaries, and Biosphere Reserves safeguard biological habitats."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What is the Red Data Book?", a: "A source book maintained by IUCN recording endangered animal and plant species." },
                        { level: "Understanding", q: "Why is deforestation linked directly to global warming?", a: "Trees absorb atmospheric CO2 through photosynthesis; cutting trees increases CO2 concentrations, trapping infrared heat." },
                        { level: "Applying", q: "How does paper recycling conserve natural biodiversity?", a: "Manufacturing 1 ton of paper requires felling 17 full-grown trees; recycling paper 5 to 7 times prevents massive forest destruction." },
                        { level: "Analyzing", q: "Distinguish between a National Park and a Wildlife Sanctuary.", a: "A Sanctuary protects wild animals with limited human grazing allowed; a National Park strictly preserves the entire ecosystem, landscape, and historical objects with zero human exploitation." },
                        { level: "Evaluating", q: "Assess the importance of 'Project Tiger' launched in India in 1973.", a: "It successfully prevented the extinction of the Bengal Tiger by declaring dedicated tiger reserves and securing apex predator habitats." },
                        { level: "Creating", q: "Design a community tree planting campaign slogan for Telangana Haritha Haram.", a: "'Plant a Sapling Today, Protect Telangana's Green Future Tomorrow!'" }
                    ],
                    quiz: [
                        { q: "What book maintains records of all endangered species internationally?", options: ["Green Data Book", "Red Data Book", "Blue Record", "Yellow Book"], correct: 1, exp: "The IUCN Red Data Book tracks endangered species." },
                        { q: "Species restricted exclusively to a specific geographic zone are termed:", options: ["Extinct species", "Endemic species", "Exotic species", "Invasive species"], correct: 1, exp: "Endemic species exist only in their native specific territory." },
                        { q: "Approximately how many full-grown trees are cut down to manufacture 1 ton of virgin paper?", options: ["2 trees", "5 trees", "17 trees", "50 trees"], correct: 2, exp: "17 mature trees are felled to make 1 ton of paper." },
                        { q: "Which tiger reserve is located in the Nallamala forest of Telangana?", options: ["Amrabad Tiger Reserve", "Jim Corbett Park", "Kaziranga", "Sundarbans"], correct: 0, exp: "Amrabad Tiger Reserve spans the Nallamala forest in Telangana." },
                        { q: "The primary driving cause of global biodiversity loss is:", options: ["Deforestation and habitat destruction", "Rainfall", "Earthquakes", "Photosynthesis"], correct: 0, exp: "Habitat fragmentation and forest felling cause rapid extinctions." }
                    ],
                    flashcards: [
                        { q: "What is Biodiversity?", a: "The rich variety of all living lifeforms on Earth." },
                        { q: "What is Flora?", a: "The plants of a specific region." },
                        { q: "What is Fauna?", a: "The animals of a specific region." },
                        { q: "What is an Endemic Species?", a: "A species found naturally only in one specific geographic area." },
                        { q: "When was Project Tiger launched?", a: "In 1973 by the Government of India." }
                    ],
                    comparison: {
                        title: "National Park vs. Wildlife Sanctuary",
                        headers: ["Parameter", "Wildlife Sanctuary", "National Park"],
                        rows: [
                            ["Protection Focus", "Focuses primarily on preserving specific faunal wildlife", "Protects the entire holistic ecosystem (flora, fauna, historical monuments)"],
                            ["Human Activity", "Limited activities like timber gathering and livestock grazing permitted", "Strictly zero human exploitation, grazing, or habitation allowed"],
                            ["Boundaries", "Boundaries are not strictly demarcated by state legislation", "Boundaries are strictly defined by legislative statute"]
                        ],
                        vsSummary: "National parks enforce complete statutory protection of the entire ecosystem, while wildlife sanctuaries allow limited, regulated traditional human activities."
                    }
                }
            ],
            exam: [
                { q: "Kawal Wildlife Sanctuary is situated in which district of Telangana?", options: ["Mancherial / Nirmal", "Hyderabad", "Warangal", "Khammam"], correct: 0, exp: "Kawal is in Nirmal and Mancherial districts of Telangana." },
                { q: "The restocking of destroyed forests by planting new trees is called:", options: ["Deforestation", "Reforestation (Afforestation)", "Desertification", "Eutrophication"], correct: 1, exp: "Reforestation replants destroyed woodlands." },
                { q: "The Indian Giant Squirrel is an endemic species of:", options: ["Pachmarhi Biosphere Reserve", "Thar Desert", "Sundarbans", "Ladakh"], correct: 0, exp: "Native to the central Indian deciduous forests and Pachmarhi." },
                { q: "Which animal is the state animal of Telangana?", options: ["Spotted Deer (Jinka)", "Blackbuck", "Tiger", "Elephant"], correct: 0, exp: "The Spotted Deer (Axis axis) is the official state animal of Telangana." },
                { q: "What is the state bird of Telangana?", options: ["Indian Roller (Palapitta)", "Peacock", "House Sparrow", "Parrot"], correct: 0, exp: "The Indian Roller (Coracias benghalensis) is Telangana's state bird." },
                { q: "What is the state tree of Telangana?", options: ["Jammi Chettu (Prosopis cineraria)", "Neem", "Banyan", "Teak"], correct: 0, exp: "Jammi Chettu is the state tree of Telangana." },
                { q: "What is the official state flower of Telangana?", options: ["Tangedu (Senna auriculata)", "Lotus", "Rose", "Jasmine"], correct: 0, exp: "Tangedu flowers are prominently used during the Bathukamma festival." },
                { q: "The illegal hunting, capturing, or killing of wild animals is called:", options: ["Poaching", "Grazing", "Afforestation", "Silviculture"], correct: 0, exp: "Poaching threatens endangered wildlife globally." },
                { q: "Dodo bird became completely extinct from:", options: ["Mauritius", "India", "Australia", "Madagascar"], correct: 0, exp: "The flightless Dodo lived in Mauritius until humans drove it extinct in the 17th century." },
                { q: "Conversion of fertile land into arid, barren desert due to soil erosion is:", options: ["Desertification", "Afforestation", "Eutrophication", "Salinization"], correct: 0, exp: "Desertification strips topsoil and depletes vegetation." },
                { q: "How many times can paper be recycled before paper fibers break down?", options: ["1 to 2 times", "5 to 7 times", "20 times", "Infinite times"], correct: 1, exp: "Cellulose fibers can be reprocessed 5 to 7 times." },
                { q: "Species whose population has diminished to a critical level facing extinction are:", options: ["Endangered species", "Endemic species", "Vulnerable only", "Extinct"], correct: 0, exp: "Endangered species face imminent extinction." },
                { q: "Eravikulam National Park in Kerala protects which endangered mountain goat?", options: ["Nilgiri Tahr", "Chinkara", "Himalayan Ibex", "Blackbuck"], correct: 0, exp: "Home to the Nilgiri Tahr." },
                { q: "Which biosphere reserve spans across Karnataka, Kerala, and Tamil Nadu?", options: ["Nilgiri Biosphere Reserve", "Nanda Devi", "Sundarbans", "Gulf of Mannar"], correct: 0, exp: "Nilgiri was India's first designated biosphere reserve in 1986." },
                { q: "Parthenium hysterophorus (Congress grass) in India is an example of:", options: ["Invasive alien weed species", "Endemic crop", "Medicinal herb", "Native flora"], correct: 0, exp: "An invasive weed brought accidentally from America with wheat." },
                { q: "The process of preserving wildlife inside their natural native habitat is called:", options: ["In-situ conservation", "Ex-situ conservation", "Cryopreservation", "Zoological garden"], correct: 0, exp: "In-situ protects species within their wild home reserves." },
                { q: "Preserving wildlife in zoos, seed banks, or botanical gardens is called:", options: ["Ex-situ conservation", "In-situ conservation", "Sanctuary", "National Park"], correct: 0, exp: "Ex-situ conserves organisms outside their natural habitat." },
                { q: "Which gas is primarily responsible for the anthropogenic greenhouse effect?", options: ["Carbon dioxide (CO2)", "Oxygen (O2)", "Nitrogen (N2)", "Argon"], correct: 0, exp: "CO2 emissions trap escaping thermal radiation." },
                { q: "What percentage of India's geographic area is covered by forests currently?", options: ["Around 21-24%", "50%", "10%", "5%"], correct: 0, exp: "India's forest cover stands at approximately 21.7%." },
                { q: "World Environment Day is observed across the globe on:", options: ["June 5th", "April 22nd", "March 21st", "December 1st"], correct: 0, exp: "June 5th is celebrated as United Nations World Environment Day." }
            ]
        },
        {
            chapterNum: 7,
            title: "Different Ecosystems",
            summary: "Examine ecological communities, biotic and abiotic elements, food chains, energy pyramids, and mangrove ecosystems.",
            topics: [
                {
                    topicNum: 1,
                    title: "Structure and Dynamics of Ecosystems",
                    visualScene: "cell-organelles",
                    visualLabel: "3D Trophic Pyramids & Ecological Food Web Visualizer",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Biotic and Abiotic Interactions",
                            textbookIdea: "An <span class=\"underlined-concept\" data-concept=\"ecosystem\">Ecosystem</span> is a structural and functional unit of the biosphere comprising living organisms (<span class=\"underlined-concept\" data-concept=\"biotic-factors\">Biotic components</span>: producers, consumers, decomposers) interacting with non-living physical factors (<span class=\"underlined-concept\" data-concept=\"abiotic-factors\">Abiotic components</span>: sunlight, soil, water, air, temperature). Energy flows unidirectionally from the Sun through trophic levels.",
                            easyExplanation: "An ecosystem is a living community where everyone depends on everyone else! Plants capture sunlight to make food, herbivores eat the plants, carnivores eat the herbivores, and fungus and bacteria recycle everything back into the soil when they die.",
                            visualScene: "cell-organelles",
                            visualLabel: "3D Energy Flow Across Trophic Pyramids"
                        }
                    ],
                    underlinedCards: [
                        { id: "ecosystem", word: "Ecosystem", meaning: "A biological community of interacting organisms and their physical abiotic environment.", simpleExplanation: "A self-sustaining natural system of living and non-living things.", example: "A forest, freshwater pond, or marine coral reef.", visual: "🌐" },
                        { id: "biotic-factors", word: "Biotic Components", meaning: "All living organisms in an ecosystem: autotrophs (producers), heterotrophs (consumers), and saprotrophs (decomposers).", simpleExplanation: "The living members of a habitat.", example: "Trees, fish, frogs, bacteria.", visual: "🐠" },
                        { id: "abiotic-factors", word: "Abiotic Components", meaning: "Non-living physical and chemical elements of the ecosystem.", simpleExplanation: "Non-living environmental factors.", example: "Sunlight, rainfall, soil minerals, temperature.", visual: "☀️" }
                    ],
                    remember: "Energy flow in an ecosystem is strictly UNIDIRECTIONAL (one-way); it can never be cycled back from higher trophic levels to the Sun.",
                    funFact: "Mangrove trees survive in salty coastal swamp mud by producing special breathing roots called pneumatophores that poke straight up into the air!",
                    realLife: "The Coringa Mangrove Sanctuary near the Godavari delta prevents catastrophic tidal surges and protects coastal villages from cyclones.",
                    vocabulary: [
                        { word: "Autotroph", meaning: "Organisms (green plants) that synthesize their own food using sunlight." },
                        { word: "Trophic Level", meaning: "A distinct feeding level occupied by an organism in a food chain." },
                        { word: "Decomposer", meaning: "Microorganisms breaking down dead organic matter into soil nutrients." }
                    ],
                    summary: [
                        "An ecosystem combines biotic (living) and abiotic (physical) factors.",
                        "Producers (green plants) fix solar energy via photosynthesis.",
                        "Food chains link together into complex interlocking food webs.",
                        "Energy decreases by approximately 90% at each successive trophic level (10% law).",
                        "Mangroves possess stilt roots and respiratory roots (pneumatophores)."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What is an autotroph?", a: "An organism capable of producing its own organic food from inorganic substances using photosynthesis." },
                        { level: "Understanding", q: "Why is a food web more ecologically stable than a single simple food chain?", a: "Because if one prey species declines, predators have alternate food sources, preventing community collapse." },
                        { level: "Applying", q: "Construct a 4-step grassland food chain.", a: "Grass (Producer) -> Grasshopper (Primary Consumer) -> Frog (Secondary Consumer) -> Snake (Tertiary Consumer)." },
                        { level: "Analyzing", q: "What happens to the apex predators if all primary decomposers are eradicated?", a: "Dead biomass would accumulate without recycling nutrients; soil fertility would crash, plants would starve, leading to top-down ecosystem collapse." },
                        { level: "Evaluating", q: "Why are trophic pyramids in terrestrial ecosystems almost always upright in energy?", a: "Because metabolic heat is lost at every step; second law of thermodynamics dictates available energy always decreases at higher levels." },
                        { level: "Creating", q: "Propose an artificial miniature ecosystem in a sealed transparent glass jar (Vivarium).", a: "Layer gravel, activated charcoal, potting soil, moss, ferns, small springtails, and water sealed tightly under indirect sunlight." }
                    ],
                    quiz: [
                        { q: "Who coined the biological term 'Ecosystem' in 1935?", options: ["A.G. Tansley", "Charles Darwin", "Gregor Mendel", "Robert Hooke"], correct: 0, exp: "Sir Arthur Tansley introduced the term ecosystem in 1935." },
                        { q: "In an ecosystem, energy flow is strictly:", options: ["Unidirectional (one-way)", "Bidirectional", "Multidirectional", "Cyclic"], correct: 0, exp: "Energy enters from the sun and is lost as heat; it never flows backward." },
                        { q: "The breathing roots of mangrove vegetation are called:", options: ["Pneumatophores", "Tap roots", "Fibrous roots", "Adventitious roots"], correct: 0, exp: "Pneumatophores rise vertically to absorb oxygen in saline marsh mud." },
                        { q: "Which trophic level contains the maximum total energy in a terrestrial ecosystem?", options: ["Primary Producers (Plants)", "Primary Consumers", "Secondary Consumers", "Tertiary Apex Predators"], correct: 0, exp: "Plants capture solar radiation first, holding the base energy reservoir." },
                        { q: "An interlocking interconnected network of multiple food chains is called a:", options: ["Food Web", "Food Pyramid", "Biome", "Biomass"], correct: 0, exp: "Interconnected feeding chains form a resilient food web." }
                    ],
                    flashcards: [
                        { q: "What is an Ecosystem?", a: "A community of living organisms interacting with their physical non-living environment." },
                        { q: "What are Producers?", a: "Green plants that produce food via photosynthesis." },
                        { q: "What are Decomposers?", a: "Fungi and bacteria that recycle dead organic matter." },
                        { q: "What is a Food Web?", a: "A network of interconnected food chains in an ecosystem." },
                        { q: "What are Pneumatophores?", a: "Specialized aerial roots in mangroves for gas exchange." }
                    ],
                    comparison: {
                        title: "Food Chain vs. Food Web",
                        headers: ["Characteristic", "Food Chain", "Food Web"],
                        rows: [
                            ["Structure", "A single linear sequence of organisms eating and being eaten", "A complex interlocking network of multiple overlapping food chains"],
                            ["Stability", "Vulnerable: removing one link disrupts the entire chain", "Highly stable: alternative feeding pathways provide resilience"],
                            ["Realism", "Theoretical simplified model", "Accurate depiction of real ecological nature"]
                        ],
                        vsSummary: "Food chains are single linear diagrams, while food webs reflect the interconnected feeding networks of natural habitats."
                    }
                }
            ],
            exam: [
                { q: "Which of the following is an abiotic component of a pond ecosystem?", options: ["Dissolved oxygen", "Water lilies", "Tadpoles", "Bacteria"], correct: 0, exp: "Dissolved oxygen is a non-living chemical factor." },
                { q: "What percentage of energy is approximately transferred to the next trophic level?", options: ["10%", "50%", "90%", "100%"], correct: 0, exp: "Lindeman's 10% law states only ~10% of chemical energy passes upward." },
                { q: "Coringa Mangrove Sanctuary is situated near the mouth of which river?", options: ["Godavari", "Krishna", "Tapti", "Narmada"], correct: 0, exp: "Located at the Godavari river delta in coastal Andhra Pradesh." },
                { q: "The position of an organism in a food chain is referred to as its:", options: ["Trophic level", "Niche", "Habitat", "Stratum"], correct: 0, exp: "Trophic level denotes the feeding tier." },
                { q: "Organisms that feed on both plants and animals are classified as:", options: ["Omnivores", "Herbivores", "Carnivores", "Decomposers"], correct: 0, exp: "Omnivores consume both animal and plant matter." },
                { q: "Fungi and bacteria that break down dead bodies are classified as:", options: ["Decomposers (Saprotrophs)", "Producers", "Parasites", "Herbivores"], correct: 0, exp: "Decomposers recycle complex organics into soil minerals." },
                { q: "An example of a micro-ecosystem is:", options: ["A drop of pond water under a microscope", "A desert", "The Pacific Ocean", "Amazon rainforest"], correct: 0, exp: "A single water droplet functions as a microscopic ecosystem." },
                { q: "In a forest food chain, deer represent which trophic level?", options: ["Primary Consumer (Herbivore)", "Producer", "Secondary Consumer", "Tertiary Consumer"], correct: 0, exp: "Deer feed directly on producer plants." },
                { q: "The pyramid of energy is ALWAYS:", options: ["Upright", "Inverted", "Spindle-shaped", "Horizontal"], correct: 0, exp: "Energy is progressively lost as heat, so energy pyramids are always upright." },
                { q: "Animals that live in water and can withstand extreme salinity fluctuations in estuaries are:", options: ["Euryhaline", "Stenohaline", "Freshwater only", "Marine only"], correct: 0, exp: "Euryhaline organisms tolerate broad salt gradients." },
                { q: "Vivipary (seeds germinating while still attached to the parent plant) is an adaptation of:", options: ["Mangrove plants", "Desert cactus", "Alpine pine", "Water lily"], correct: 0, exp: "Mangroves drop germinated seedlings to anchor quickly in coastal tides." },
                { q: "What is the primary ultimate source of energy for almost all terrestrial ecosystems?", options: ["The Sun", "Wind", "Geothermal vents", "Biomass"], correct: 0, exp: "Solar radiation powers photosynthesis." },
                { q: "A pesticide like DDT accumulating in higher concentrations in top carnivores is called:", options: ["Biomagnification", "Eutrophication", "Bioaccumulation only", "Decomposition"], correct: 0, exp: "Biomagnification concentrates toxins up the food chain." },
                { q: "Algal bloom causing severe oxygen depletion in polluted water bodies is termed:", options: ["Eutrophication", "Salinization", "Biomagnification", "Acidification"], correct: 0, exp: "Nutrient runoff causes eutrophication." },
                { q: "Which organism is an apex tertiary consumer in a forest food chain?", options: ["Tiger", "Rabbit", "Grasshopper", "Tree"], correct: 0, exp: "Tigers sit at the top trophic tier." },
                { q: "Parasitism is an ecological relationship where:", options: ["One organism benefits while the other is harmed", "Both benefit", "Neither is affected", "Both are killed"], correct: 0, exp: "Parasites exploit hosts for nutrition." },
                { q: "Mutualism is exemplified in biology by:", options: ["Lichens (alga and fungus symbiosis)", "Lions and deer", "Tapeworm in human", "Mosquito and bird"], correct: 0, exp: "Alga provides food and fungus provides anchorage/water mutually." },
                { q: "Decomposers play a critical role in ecosystems by:", options: ["Recycling mineral nutrients back into the soil", "Creating sunlight", "Decreasing plant growth", "Consuming oxygen only"], correct: 0, exp: "They close the biogeochemical nutrient loops." },
                { q: "The physical place where an organism naturally lives and reproduces is called its:", options: ["Habitat", "Trophic level", "Food web", "Ecosystem"], correct: 0, exp: "Habitat is the home address of an organism." },
                { q: "Can energy be recycled back into the food chain from apex carnivores to plants?", options: ["No, energy flow is strictly irreversible and one-way", "Yes, plants absorb heat energy", "Only in oceans", "Always"], correct: 0, exp: "Energy degrades into metabolic heat and radiates into space." }
            ]
        },
        {
            chapterNum: 8,
            title: "Production and Management of Food from Animals",
            summary: "Understand animal husbandry, dairy production, poultry breeds, pisciculture, apiculture, and veterinary healthcare.",
            topics: [
                {
                    topicNum: 1,
                    title: "Animal Husbandry, Dairy & Poultry Farming",
                    visualScene: "cell-organelles",
                    visualLabel: "3D Livestock Breeds & Poultry Management Simulator",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Dairy Farming & Cattle Breeds",
                            textbookIdea: "The agricultural branch concerned with breeding, feeding, and care of livestock is called <span class=\"underlined-concept\" data-concept=\"animal-husbandry\">Animal Husbandry</span>. Indigenous high-milk cattle breeds include Sahiwal, Red Sindhi, and Gir, while prominent draught breeds include Ongole and Hallikar. Murrah is India's most celebrated high-yield dairy buffalo breed. Operation Flood launched in 1970 led to the White Revolution.",
                            easyExplanation: "Animal husbandry is modern science applied to raising farm animals! Farmers select superior cows and buffaloes for rich milk, feed them nutritious fodder, keep clean sheds, and ensure regular vaccinations so milk and eggs remain pure and plentiful.",
                            visualScene: "cell-organelles",
                            visualLabel: "3D Livestock Health & Milk Composition"
                        }
                    ],
                    underlinedCards: [
                        { id: "animal-husbandry", word: "Animal Husbandry", meaning: "Agricultural science of breeding, raising, and care of domesticated farm animals.", simpleExplanation: "Caring for and breeding farm animals for milk, meat, and eggs.", example: "Dairy cattle ranches and poultry hatcheries.", visual: "🐄" }
                    ],
                    remember: "Poultry birds reared exclusively for egg production are called 'Layers', while chickens grown specifically for tender meat are called 'Broilers'.",
                    funFact: "Dr. Verghese Kurien is known as the 'Father of the White Revolution' in India for transforming the country into the world's largest milk producer!",
                    realLife: "Telangana state operates Vijaya Dairy cooperative dairies and supports shepherd communities with sheep distribution schemes.",
                    vocabulary: [
                        { word: "Lactation Period", meaning: "The period of milk yield between giving birth to a calf and going dry." },
                        { word: "Broiler", meaning: "A fast-growing young chicken raised for high protein meat." },
                        { word: "Apiculture", meaning: "The commercial rearing of honeybees for honey and beeswax." }
                    ],
                    summary: [
                        "Animal husbandry manages livestock for food, fiber, and labor.",
                        "Murrah buffalo is renowned for high butterfat milk production.",
                        "Poultry farming divides chickens into Layers (eggs) and Broilers (meat).",
                        "Pisciculture cultivates fish in freshwater ponds and coastal cages.",
                        "Apiculture domesticates honeybees (Apis cerana, Apis mellifera) for honey."
                    ],
                    blooms: [
                        { level: "Remembering", q: "Who is celebrated as the Father of India's White Revolution?", a: "Dr. Verghese Kurien." },
                        { level: "Understanding", q: "Why are the dietary requirements of broilers different from layers?", a: "Broilers need daily feed rich in proteins and vitamins A and K for fast muscular weight gain; layers require high calcium for eggshell formation." },
                        { level: "Applying", q: "Which honeybee species is commonly cultivated in Indian commercial apiaries?", a: "Apis cerana indica (Indian bee) and Apis mellifera (Italian bee)." },
                        { level: "Analyzing", q: "Distinguish between indigenous cattle breeds and exotic cattle breeds.", a: "Indigenous breeds (Gir, Sahiwal) have high disease resistance and heat tolerance; exotic breeds (Jersey, Holstein-Friesian) produce larger daily milk volumes." },
                        { level: "Evaluating", q: "Why is composite fish culture more productive than monoculture?", a: "Composite culture combines five or six fish species occupying different water layers (Catla on surface, Rohu in column, Mrigal at bottom), avoiding food competition." },
                        { level: "Creating", q: "Design a hygienic checklist for a modern poultry shed.", a: "Ensure proper cross ventilation, clean dry sawdust bedding, daily fresh water, automated feed dispensers, and routine Newcastle disease vaccinations." }
                    ],
                    quiz: [
                        { q: "Which buffalo breed is famous across India for exceptionally high milk yield?", options: ["Murrah", "Nagpuri", "Surti", "Jaffarabadi"], correct: 0, exp: "Murrah buffaloes produce high volumes of rich milk." },
                        { q: "Chickens raised specifically for egg production are known as:", options: ["Layers", "Broilers", "Roosters", "Pullets"], correct: 0, exp: "Layers are reared for continuous egg laying." },
                        { q: "The scientific rearing and management of honeybees is termed:", options: ["Apiculture", "Pisciculture", "Sericulture", "Floriculture"], correct: 0, exp: "Apiculture is commercial beekeeping." },
                        { q: "Which fish species is a surface feeder in composite fish culture ponds?", options: ["Catla", "Rohu", "Mrigal", "Common Carp"], correct: 0, exp: "Catla feeds exclusively at the water surface." },
                        { q: "The White Revolution in India is associated with the massive production of:", options: ["Milk", "Eggs", "Cotton", "Fish"], correct: 0, exp: "White Revolution revolutionized Indian dairy through cooperatives." }
                    ],
                    flashcards: [
                        { q: "What is Animal Husbandry?", a: "The agricultural care, breeding, and management of livestock." },
                        { q: "What is a Broiler?", a: "A chicken raised specifically for meat production." },
                        { q: "What is a Layer?", a: "A poultry hen raised for commercial egg laying." },
                        { q: "What is Pisciculture?", a: "The artificial rearing and breeding of fish." },
                        { q: "What is Apiculture?", a: "The scientific rearing of honeybees for honey." }
                    ],
                    comparison: {
                        title: "Layers vs. Broilers",
                        headers: ["Characteristic", "Layers", "Broilers"],
                        rows: [
                            ["Primary Purpose", "Commercial egg production", "Meat production"],
                            ["Growth Duration", "Reared for 72 to 80 weeks", "Reared for 6 to 7 weeks for rapid weight gain"],
                            ["Feed Composition", "Rich in calcium and minerals for strong eggshells", "High in protein and fats with vitamins A & K"]
                        ],
                        vsSummary: "Layers are raised long-term for egg production on mineral-rich diets, whereas broilers are raised short-term for meat on high-protein feed."
                    }
                }
            ],
            exam: [
                { q: "Which organ produces royal jelly used by worker honeybees to feed the queen larva?", options: ["Hypopharyngeal glands", "Stomach", "Legs", "Antennae"], correct: 0, exp: "Secreted by nurse worker bee glands." },
                { q: "Which of the following is a viral disease affecting poultry flocks?", options: ["Ranikhet disease (Newcastle disease)", "Anthrax", "Foot and mouth disease", "Mastitis"], correct: 0, exp: "Ranikhet is a devastating contagious viral poultry disease." },
                { q: "Foot and Mouth disease primarily infects:", options: ["Cattle and buffaloes", "Poultry chickens", "Honeybees", "Fish"], correct: 0, exp: "FMD is a contagious viral disease of cloven-hoofed livestock." },
                { q: "The breed of sheep famous in Jammu & Kashmir for fine Pashmina wool is:", options: ["Pashmina / Changthangi goat", "Deccani", "Nellore", "Marwari"], correct: 0, exp: "Fine Pashmina underfur comes from Changthangi goats." },
                { q: "Which bottom-feeding fish is utilized in composite aquaculture?", options: ["Mrigal", "Catla", "Rohu", "Silver Carp"], correct: 0, exp: "Mrigal and Common Carp scavenge the pond bottom." },
                { q: "The artificial hatching of poultry eggs requires an incubator temperature of approximately:", options: ["37.5°C to 38°C", "25°C", "50°C", "45°C"], correct: 0, exp: "Standard incubation runs at 37.5°C for 21 days." },
                { q: "Colostrum is the name given to:", options: ["The first nutrient-rich antibody milk produced after giving birth", "Powdered milk", "Spoiled curd", "Boiled cream"], correct: 0, exp: "Colostrum delivers vital maternal antibodies to newborns." },
                { q: "Which of the following is an exotic high milk yielding dairy cow?", options: ["Holstein-Friesian", "Gir", "Sahiwal", "Ongole"], correct: 0, exp: "Originating in Netherlands, famous for huge milk yields." },
                { q: "The Blue Revolution in India refers to the rapid expansion of:", options: ["Aquaculture and fisheries", "Indigo cultivation", "Water supply", "Ocean oil"], correct: 0, exp: "Blue Revolution expanded freshwater and marine fish farming." },
                { q: "Which honeybee species is the largest wild rock bee of India?", options: ["Apis dorsata", "Apis florea", "Apis mellifera", "Apis cerana"], correct: 0, exp: "Apis dorsata is the giant fierce rock bee." },
                { q: "Worker bees in a beehive are all:", options: ["Sterile females", "Fertile males", "Drones", "Queens"], correct: 0, exp: "Workers are sterile females performing all hive maintenance." },
                { q: "The process of removing unwanted, unproductive, or diseased birds from a poultry flock is:", options: ["Culling", "Hatching", "Brooding", "Molting"], correct: 0, exp: "Culling maintains flock health and economic viability." },
                { q: "Which nutrient is honey predominantly composed of?", options: ["Carbohydrate sugars (Fructose and Glucose)", "Fats", "Protein only", "Salt"], correct: 0, exp: "Honey is rich in simple sugars fructose and glucose." },
                { q: "Which feed ingredient provides roughage to cattle?", options: ["Green grass, straw, and silage", "Cottonseed cake", "Fish meal", "Salt lick"], correct: 0, exp: "Fodder and straw provide essential fibrous roughage." },
                { q: "Anthrax is a deadly acute bacterial disease of cattle caused by:", options: ["Bacillus anthracis", "Salmonella", "Mycobacterium", "Clostridium"], correct: 0, exp: "Bacillus anthracis spore-forming bacteria." },
                { q: "A drone in a bee colony develops from an unfertilized egg by:", options: ["Parthenogenesis", "Budding", "Fission", "Cloning"], correct: 0, exp: "Drones are haploid males produced through parthenogenesis." },
                { q: "Which poultry product is an exceptionally rich source of albumin protein?", options: ["Egg white", "Egg shell", "Yolk only", "Fat"], correct: 0, exp: "Egg white is almost pure ovalbumin protein." },
                { q: "Fish liver oil (Cod liver oil) is especially rich in which essential vitamins?", options: ["Vitamin A and Vitamin D", "Vitamin C", "Vitamin B12 only", "Vitamin K only"], correct: 0, exp: "Fish liver oils are therapeutic sources of vitamins A and D." },
                { q: "The duration of pregnancy (gestation period) in dairy cows is approximately:", options: ["280 days (about 9 months)", "150 days", "365 days", "60 days"], correct: 0, exp: "Cows have an average gestation period of 283 days." },
                { q: "Ongole cattle breed, famous globally for heat resistance and strength, originated in:", options: ["Prakasam district (Andhra Pradesh/Deccan region)", "Punjab", "Gujarat", "Kerala"], correct: 0, exp: "Ongole bull breed originated in coastal Andhra and the Deccan." }
            ]
        },
        {
            chapterNum: 9,
            title: "Not For Drinking Not For Breathing",
            summary: "Investigate air and water pollution, toxic emissions, acid rain, greenhouse effect, and potable water purification.",
            topics: [
                {
                    topicNum: 1,
                    title: "Pollution of Air & Water: Causes & Remedies",
                    visualScene: "cell-organelles",
                    visualLabel: "3D Atmospheric Pollution & Water Purification Simulator",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Air Contaminants & The Greenhouse Phenomenon",
                            textbookIdea: "Contamination of air by undesirable toxic substances which have a harmful effect on both biotic and abiotic components is called <span class=\"underlined-concept\" data-concept=\"air-pollution\">Air Pollution</span>. Pollutants include Carbon Monoxide (CO), Sulphur Dioxide (SO2), Nitrogen Oxides (NOx), and Chlorofluorocarbons (CFCs). Sulphur dioxide and nitrogen dioxide react with atmospheric water vapor to form <span class=\"underlined-concept\" data-concept=\"acid-rain\">Acid Rain</span>, which corrodes monuments (marble cancer).",
                            easyExplanation: "When vehicle exhaust and factory chimneys pump toxic smoke into our sky, the air we breathe becomes poisoned! Rain clouds absorb these acid gases and pour down acid rain, which harms green leaves, kills river fish, and even eats away at marble monuments like the Taj Mahal.",
                            visualScene: "cell-organelles",
                            visualLabel: "3D Acid Rain Formation & Marble Degradation"
                        }
                    ],
                    underlinedCards: [
                        { id: "air-pollution", word: "Air Pollution", meaning: "Introduction of harmful particulates, biological molecules, or noxious gases into Earth's atmosphere.", simpleExplanation: "Poisoning our breathable sky with smoke and chemicals.", example: "Smog blanketing cities during winter.", visual: "🏭" },
                        { id: "acid-rain", word: "Acid Rain", meaning: "Precipitation containing elevated concentrations of sulfuric and nitric acids (pH < 5.6).", simpleExplanation: "Corrosive rain created when air pollutants dissolve in clouds.", example: "Discoloration and pitting of the Taj Mahal marble.", visual: "🌧️" }
                    ],
                    remember: "Water suitable for safe human drinking without causing illness is termed 'Potable Water'. Boiling water kills all harmful pathogenic microbes.",
                    funFact: "The hole in Earth's stratospheric ozone layer over Antarctica is slowly healing thanks to the global ban on CFC refrigerants mandated by the Montreal Protocol!",
                    realLife: "The Musi River flowing through Hyderabad has suffered from severe industrial effluent and domestic sewage discharge, prompting major rejuvenation missions.",
                    vocabulary: [
                        { word: "Potable Water", meaning: "Water that is wholesome and completely safe for human consumption." },
                        { word: "Smog", meaning: "A toxic mixture of smoke and atmospheric fog." },
                        { word: "Chlorination", meaning: "Adding chlorine tablets to water to destroy pathogenic bacteria." }
                    ],
                    summary: [
                        "Air pollutants include CO, SO2, NOx, unburnt hydrocarbons, and particulate matter.",
                        "Acid rain contains dilute sulfuric and nitric acids corroding buildings and aquatic life.",
                        "Excess CO2 causes enhanced greenhouse effect and catastrophic global warming.",
                        "Sewage and chemical fertilizers cause eutrophication and oxygen starvation in lakes.",
                        "Methods to purify drinking water include filtration, boiling, and chlorination."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What is potable water?", a: "Water that is purified, chemically safe, and suitable for human drinking." },
                        { level: "Understanding", q: "Why is carbon monoxide gas (CO) extremely lethal to humans?", a: "CO binds to blood hemoglobin 200 times faster than oxygen, forming carboxyhemoglobin which chokes cellular oxygen supply." },
                        { level: "Applying", q: "How can individual students reduce household air pollution?", a: "By carpooling, using public transit, riding bicycles, switching off unused electricity, and planting native trees." },
                        { level: "Analyzing", q: "Explain the phenomenon of 'Marble Cancer' on the Taj Mahal.", a: "Acid rain reacts with calcium carbonate (marble) of the monument: CaCO3 + H2SO4 -> CaSO4 + H2O + CO2, producing yellowing, pitting, and crumbling." },
                        { level: "Evaluating", q: "Why is water chlorination strictly controlled in municipal water supplies?", a: "Because while adequate chlorine kills lethal bacteria, excessive chlorine leaves toxic chloramines and unpleasant tastes." },
                        { level: "Creating", q: "Design a household 3-stage emergency sand-gravel-charcoal water filter.", a: "Top layer: fine sand (filters suspended dirt); middle layer: activated charcoal (absorbs odors and dyes); bottom layer: clean coarse gravel over a filter cloth." }
                    ],
                    quiz: [
                        { q: "Which toxic gas binds with blood hemoglobin preventing oxygen transport?", options: ["Carbon monoxide (CO)", "Carbon dioxide", "Nitrogen", "Oxygen"], correct: 0, exp: "Carbon monoxide forms carboxyhemoglobin, causing asphyxiation." },
                        { q: "The two primary atmospheric acids causing acid rain are:", options: ["Sulfuric acid and Nitric acid", "Hydrochloric acid and Citric acid", "Acetic acid and Formic acid", "Carbonic acid only"], correct: 0, exp: "SO2 and NOx generate H2SO4 and HNO3 in rain clouds." },
                        { q: "What chemicals, formerly used in refrigerators, caused depletion of the ozone layer?", options: ["Chlorofluorocarbons (CFCs)", "Carbon monoxide", "Methane", "Argon"], correct: 0, exp: "CFCs release chlorine free radicals that destroy ozone." },
                        { q: "Water that is completely safe and wholesome for drinking is called:", options: ["Potable water", "Distilled water", "Saline water", "Heavy water"], correct: 0, exp: "Potable water is safe drinking water." },
                        { q: "A common chemical disinfectant added to municipal drinking water is:", options: ["Chlorine", "Sodium chloride", "Sulfur", "Nitrogen"], correct: 0, exp: "Chlorine kills waterborne bacteria and viruses." }
                    ],
                    flashcards: [
                        { q: "What is Acid Rain?", a: "Rain containing sulfuric and nitric acids resulting from industrial air pollution." },
                        { q: "What is Marble Cancer?", a: "The corrosion of marble monuments caused by acid rain." },
                        { q: "What is Potable Water?", a: "Water that is purified and safe for drinking." },
                        { q: "Which gas causes the Greenhouse Effect?", a: "Carbon dioxide (CO2) and Methane (CH4)." },
                        { q: "Why is boiling water effective?", a: "Boiling destroys all pathogenic disease-causing microbes." }
                    ],
                    comparison: {
                        title: "Boiling vs. Chlorination of Water",
                        headers: ["Parameter", "Boiling", "Chlorination"],
                        rows: [
                            ["Mechanism", "Thermal heat denatures microbial proteins and pathogens", "Chemical oxidation lyses bacterial cell walls"],
                            ["Cost & Infrastructure", "Requires fuel/energy; effective for small household quantities", "Inexpensive and suitable for large municipal city reservoirs"],
                            ["Residual Protection", "Zero residual protection once cooled and stored", "Provides residual disinfectant that prevents re-contamination in pipes"]
                        ],
                        vsSummary: "Boiling is ideal for home sterilization, whereas chlorination provides continuous chemical disinfection in large municipal water pipe networks."
                    }
                }
            ],
            exam: [
                { q: "Which greenhouse gas is produced extensively by rotting trash and paddy fields?", options: ["Methane (CH4)", "Oxygen", "Argon", "Helium"], correct: 0, exp: "Anaerobic decomposition in flooded paddies produces methane." },
                { q: "The pH of normal clean rainwater is approximately:", options: ["5.6", "7.0", "2.0", "9.0"], correct: 0, exp: "Dissolved atmospheric CO2 makes clean rain mildly acidic at pH ~5.6." },
                { q: "Which international treaty was signed in 1987 to phase out ozone-depleting substances?", options: ["Montreal Protocol", "Kyoto Protocol", "Paris Agreement", "Ramsar Convention"], correct: 0, exp: "The Montreal Protocol phased out CFC production." },
                { q: "The Taj Mahal is threatened primarily by air emissions from:", options: ["Mathura Oil Refinery and local foundry industries", "Lawnmowers", "Airplanes only", "Ships"], correct: 0, exp: "SO2 from Mathura refinery catalyzed acid rain over Agra." },
                { q: "Which of the following is a waterborne bacterial disease?", options: ["Cholera", "Malaria", "Dengue", "Influenza"], correct: 0, exp: "Vibrio cholerae is spread via contaminated water." },
                { q: "Minamata disease in Japan was caused by severe industrial poisoning from:", options: ["Methylmercury", "Lead", "Cadmium", "Arsenic"], correct: 0, exp: "Industrial mercury runoff contaminated bay fish." },
                { q: "Itai-itai disease is caused by chronic toxic exposure to:", options: ["Cadmium", "Mercury", "Copper", "Iron"], correct: 0, exp: "Cadmium poisoning causes severe bone softening." },
                { q: "Suspended tiny liquid and solid soot particles floating in air are called:", options: ["Aerosols / SPM", "Dissolved solids", "Gases", "Clouds"], correct: 0, exp: "Suspended Particulate Matter (SPM)." },
                { q: "Which device is fitted to vehicle exhaust systems to convert toxic gases into harmless emissions?", options: ["Catalytic converter", "Radiator", "Carburetor", "Dynamo"], correct: 0, exp: "Catalytic converters oxidize CO and hydrocarbons." },
                { q: "Excessive growth of algae in a lake caused by fertilizer runoff is called:", options: ["Eutrophication", "Salinization", "Biomagnification", "Desalination"], correct: 0, exp: "Nutrient overload triggers rapid algal blooms." },
                { q: "The gas that shields Earth from harmful solar ultraviolet (UV) radiation is:", options: ["Ozone (O3)", "Nitrogen", "Carbon dioxide", "Argon"], correct: 0, exp: "Stratospheric ozone absorbs mutagenic UV-B rays." },
                { q: "In complete combustion of LPG fuel, the flame color is:", options: ["Blue", "Yellow", "Red", "Smoky black"], correct: 0, exp: "Clean, complete hydrocarbon combustion burns with a blue flame." },
                { q: "Which water purification method uses a semi-permeable membrane to remove dissolved salts?", options: ["Reverse Osmosis (RO)", "Simple filtration", "Sedimentation", "Decantation"], correct: 0, exp: "RO forces water against osmotic pressure across fine membranes." },
                { q: "The primary air pollutant emitted by incomplete combustion of vehicle diesel and petrol is:", options: ["Carbon monoxide (CO)", "Pure oxygen", "Nitrogen gas", "Hydrogen"], correct: 0, exp: "Incomplete fuel oxidation generates lethal CO." },
                { q: "Smog is an atmospheric combination of:", options: ["Smoke and fog", "Snow and wind", "Rain and dust", "Sunlight and oxygen"], correct: 0, exp: "Smoke particulates trapped inside cool surface fog." },
                { q: "What does the 3R environmental principle stand for?", options: ["Reduce, Reuse, Recycle", "Read, Record, Review", "Run, Rest, Repeat", "Rethink, Repair, Release"], correct: 0, exp: "Reduce consumption, Reuse materials, Recycle waste." },
                { q: "Lead poisoning in children primarily affects the development of the:", options: ["Brain and nervous system", "Bones only", "Skin", "Hair"], correct: 0, exp: "Lead is a neurotoxin causing intellectual deficits." },
                { q: "Which river cleaning action plan was launched by the Government of India in 1985?", options: ["Ganga Action Plan", "Yamuna Plan", "Godavari Mission", "Narmada Plan"], correct: 0, exp: "Ganga Action Plan was initiated in 1985 to treat river sewage." },
                { q: "Dissolved oxygen levels in water decrease drastically when:", options: ["Aerobic bacteria decompose massive amounts of organic waste", "Water freezes", "Plants photosynthesize", "Wind blows"], correct: 0, exp: "Bacterial respiration depletes dissolved oxygen." },
                { q: "Can transparent, clear-looking tap water be unsafe for drinking?", options: ["Yes, it may contain dissolved microscopic pathogens or toxic chemical salts", "No, clear water is always 100% pure", "Never", "Only if it is cold"], correct: 0, exp: "Microbes and heavy metals are invisible to the naked eye." }
            ]
        },
        {
            chapterNum: 10,
            title: "Why Do We Fall Ill?",
            summary: "Explore principles of human pathology, acute vs chronic illness, pathogens, immune defenses, antibiotics, and vaccines.",
            topics: [
                {
                    topicNum: 1,
                    title: "Health, Infectious Diseases & Immunity",
                    visualScene: "cell-organelles",
                    visualLabel: "3D Pathogen-Antibody Immune Interaction Visualizer",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Health vs. Disease & Disease Classes",
                            textbookIdea: "Health is defined by the WHO as a state of complete physical, mental, and social well-being, and not merely the absence of disease or infirmity. Diseases lasting for only short periods are <span class=\"underlined-concept\" data-concept=\"acute-disease\">Acute Diseases</span> (e.g. common cold), whereas those persisting for prolonged times or life are <span class=\"underlined-concept\" data-concept=\"chronic-disease\">Chronic Diseases</span> (e.g. tuberculosis, diabetes). Pathogens include viruses, bacteria, fungi, protozoans, and helminths.",
                            easyExplanation: "Being healthy doesn't just mean your thermometer says 98.6°F—it means your body, your thoughts, and your feelings are thriving! A cold is acute because it leaves after a week, but chronic illnesses stick around for months or years.",
                            visualScene: "cell-organelles",
                            visualLabel: "3D Immune Cells Attacking Bacterial Pathogens"
                        }
                    ],
                    underlinedCards: [
                        { id: "acute-disease", word: "Acute Disease", meaning: "A medical condition that develops rapidly and runs a relatively short course.", simpleExplanation: "A disease that comes fast and goes away quickly.", example: "Common cold, viral fever, influenza.", visual: "⏱️" },
                        { id: "chronic-disease", word: "Chronic Disease", meaning: "A long-lasting condition that progresses slowly and often lasts for years or a lifetime.", simpleExplanation: "A long-term illness that stays for a long time.", example: "Tuberculosis, elephantiasis, asthma.", visual: "⏳" }
                    ],
                    remember: "Antibiotics work specifically against BACTERIAL biochemical pathways (such as cell wall synthesis); they are completely INEFFECTIVE against viral infections like colds, flu, and Covid-19.",
                    funFact: "Edward Jenner developed the world's very first vaccine in 1796 using cowpox blisters to protect children from deadly smallpox!",
                    realLife: "Pulse Polio immunization campaigns in Telangana have successfully eliminated wild poliovirus transmission through routine oral polio drops.",
                    vocabulary: [
                        { word: "Pathogen", meaning: "A biological disease-causing microscopic organism." },
                        { word: "Antibody", meaning: "A Y-shaped blood protein produced by lymphocytes to neutralize antigens." },
                        { word: "Vector", meaning: "An animal carrier (like female Anopheles mosquito) transmitting parasites between hosts." }
                    ],
                    summary: [
                        "Health encompasses physical, mental, and social harmony.",
                        "Acute diseases are short-term; chronic diseases produce long-term debility.",
                        "Infectious diseases transmit through air, water, direct contact, and vectors.",
                        "Antibiotics block bacterial enzymatic pathways without harming human cells.",
                        "Vaccination provides active immunological memory against future infections."
                    ],
                    blooms: [
                        { level: "Remembering", q: "Who discovered the first antibiotic, Penicillin, in 1928?", a: "Sir Alexander Fleming." },
                        { level: "Understanding", q: "Why don't antibiotics cure viral infections like the common cold?", a: "Viruses have no cell walls, ribosomes, or independent metabolic pathways; they hijack host machinery, making bacterial antibiotics ineffective." },
                        { level: "Applying", q: "Why is clean drinking water and mosquito eradication essential for public health?", a: "They eliminate transmission vectors for waterborne cholera/typhoid and vector-borne malaria/dengue." },
                        { level: "Analyzing", q: "How does the human immune system acquire memory through vaccination?", a: "Vaccines expose the body to weakened or killed pathogens, prompting B-cells to generate long-lived memory cells that rapidly destroy future virulent pathogens." },
                        { level: "Evaluating", q: "Explain why personal hygiene alone is insufficient for disease prevention without community sanitation.", a: "Airborne viruses and contaminated public water tables cross household boundaries; collective civic hygiene is mandatory for public health." },
                        { level: "Creating", q: "Devise a public awareness protocol for preventing monsoon dengue outbreaks.", a: "Empty outdoor water containers weekly, apply mosquito repellents, sleep under bed nets, and spray larvicide in stagnant drainage." }
                    ],
                    quiz: [
                        { q: "Who developed the first smallpox vaccine in 1796?", options: ["Edward Jenner", "Louis Pasteur", "Alexander Fleming", "Robert Koch"], correct: 0, exp: "Edward Jenner pioneered vaccination using cowpox fluid." },
                        { q: "Antibiotics are drugs that specifically kill or inhibit:", options: ["Bacteria", "Viruses", "All microbes equally", "Human cells"], correct: 0, exp: "Antibiotics target bacterial metabolic pathways." },
                        { q: "Which mosquito species is the vector for malaria parasite (Plasmodium)?", options: ["Female Anopheles mosquito", "Aedes aegypti", "Culex", "Housefly"], correct: 0, exp: "Female Anopheles transmits malaria." },
                        { q: "Tuberculosis (TB) primarily attacks which human organ system?", options: ["Lungs", "Heart", "Stomach", "Skin"], correct: 0, exp: "Mycobacterium tuberculosis predominantly infects the lungs." },
                        { q: "A disease that persists for prolonged periods, causing long-term damage, is called:", options: ["Chronic disease", "Acute disease", "Inborn trait", "Allergy"], correct: 0, exp: "Chronic conditions linger for months or years." }
                    ],
                    flashcards: [
                        { q: "What is an Acute Disease?", a: "A short-lived disease that resolves quickly." },
                        { q: "What is a Chronic Disease?", a: "A long-lasting disease with prolonged health impacts." },
                        { q: "What causes Malaria?", a: "Plasmodium protozoan, carried by female Anopheles mosquitoes." },
                        { q: "What did Alexander Fleming discover?", a: "Penicillin, the first antibiotic." },
                        { q: "What is a Vaccine?", a: "A biological preparation that provides acquired immunity to a specific pathogen." }
                    ],
                    comparison: {
                        title: "Infectious vs. Non-Infectious Diseases",
                        headers: ["Characteristic", "Infectious (Communicable) Diseases", "Non-Infectious (Non-Communicable) Diseases"],
                        rows: [
                            ["Cause", "Biological pathogens (viruses, bacteria, fungi, protozoa)", "Internal metabolic, genetic, nutritional, or lifestyle defects"],
                            ["Transmission", "Transmitted from person to person via air, water, contact, or vectors", "Cannot spread from one person to another"],
                            ["Examples", "Tuberculosis, Cholera, Typhoid, Covid-19, Malaria", "Diabetes, Hypertension, Cancer, Cataract, Scurvy"]
                        ],
                        vsSummary: "Infectious diseases are caused by transmissible external pathogens, whereas non-infectious diseases stem from internal body dysfunction."
                    }
                }
            ],
            exam: [
                { q: "Which organ produces insulin, deficient in diabetic patients?", options: ["Pancreas", "Liver", "Kidney", "Stomach"], correct: 0, exp: "Pancreatic beta-cells synthesize insulin." },
                { q: "Dengue fever virus is transmitted by which vector mosquito?", options: ["Aedes aegypti (Tiger mosquito)", "Female Anopheles", "Culex", "Tsetse fly"], correct: 0, exp: "Aedes mosquitoes bite during daytime and transmit dengue." },
                { q: "Sleeping sickness is caused by which protozoan organism?", options: ["Trypanosoma", "Amoeba", "Paramecium", "Plasmodium"], correct: 0, exp: "Trypanosoma transmitted by the tsetse fly." },
                { q: "Kala-azar (Leishmaniasis) is transmitted by:", options: ["Sandfly", "Mosquito", "Tick", "Flea"], correct: 0, exp: "Sandflies transmit Leishmania protozoans." },
                { q: "Which bacterial pathogen causes typhoid fever?", options: ["Salmonella typhi", "Vibrio cholerae", "Mycobacterium", "Streptococcus"], correct: 0, exp: "Salmonella typhi causes typhoid through contaminated food/water." },
                { q: "The diagnostic medical test used to confirm Typhoid fever is:", options: ["Widal test", "ELISA", "Biopsy", "X-ray"], correct: 0, exp: "The Widal agglutination test detects typhoid antibodies." },
                { q: "A condition caused by deficiency of Vitamin C in human diet is:", options: ["Scurvy", "Rickets", "Beriberi", "Night blindness"], correct: 0, exp: "Vitamin C deficiency causes bleeding gums and scurvy." },
                { q: "Night blindness is caused by a dietary deficiency of which vitamin?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], correct: 0, exp: "Vitamin A is essential for retinal rhodopsin synthesis." },
                { q: "Rickets in children is characterized by soft, curved bones due to deficiency of:", options: ["Vitamin D and Calcium", "Iron", "Vitamin K", "Protein"], correct: 0, exp: "Vitamin D enables intestinal calcium absorption." },
                { q: "Goitre is the enlargement of the thyroid gland caused by deficiency of:", options: ["Iodine", "Iron", "Magnesium", "Zinc"], correct: 0, exp: "Iodine is a necessary structural component of thyroxine." },
                { q: "Anemia is primarily caused by dietary deficiency of which mineral element?", options: ["Iron", "Calcium", "Sodium", "Potassium"], correct: 0, exp: "Iron is the central binding atom in blood hemoglobin." },
                { q: "Rabies virus is transmitted to humans through:", options: ["The bite of an infected rabid animal (e.g. dog, monkey)", "Airborne droplets", "Drinking milk", "Mosquito bites"], correct: 0, exp: "Rabies travels via infected animal saliva entering bite wounds." },
                { q: "Which organ does Hepatitis virus primarily attack and inflame?", options: ["Liver", "Heart", "Lungs", "Brain"], correct: 0, exp: "Hepatitis causes viral inflammation of liver tissue." },
                { q: "Elephantiasis (Filariasis) is caused by a filarial worm transmitted by:", options: ["Culex mosquito", "Anopheles", "Aedes", "Housefly"], correct: 0, exp: "Culex mosquitoes spread Wuchereria bancrofti filarial worms." },
                { q: "Which human cells are selectively attacked and destroyed by HIV?", options: ["CD4+ Helper T-lymphocytes", "Red blood cells", "Neurons", "Platelets"], correct: 0, exp: "HIV depletes CD4+ T-cells, collapsing adaptive immunity." },
                { q: "The BCG vaccine is administered to infants to provide immunity against:", options: ["Tuberculosis (TB)", "Polio", "Diphtheria", "Tetanus"], correct: 0, exp: "Bacillus Calmette-Guérin protects against severe childhood TB." },
                { q: "The DPT triple vaccine protects children against Diphtheria, Pertussis (Whooping cough), and:", options: ["Tetanus", "Polio", "Typhoid", "Tuberculosis"], correct: 0, exp: "DPT stands for Diphtheria, Pertussis, Tetanus." },
                { q: "Oral Rehydration Solution (ORS) is administered to treat:", options: ["Severe dehydration caused by diarrhea or cholera", "Headaches", "Bone fractures", "Cough"], correct: 0, exp: "ORS restores electrolytes and water balance in dehydrated patients." },
                { q: "Which scientist discovered that the bacterium Helicobacter pylori causes peptic stomach ulcers?", options: ["Robin Warren and Barry Marshall", "Louis Pasteur", "Robert Hooke", "Gregor Mendel"], correct: 0, exp: "Warren and Marshall won the Nobel Prize in 2005 for H. pylori discovery." },
                { q: "A disease that is constantly present in a specific geographic population at a baseline level is:", options: ["Endemic", "Epidemic", "Pandemic", "Sporadic"], correct: 0, exp: "Endemic diseases exist permanently in a region." }
            ]
        }
    ]
};

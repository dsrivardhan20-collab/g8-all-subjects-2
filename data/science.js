/**
 * Telangana SCERT Class 8 - General / Integrated Science Curriculum Data
 * Interactive Telangana SCERT Learning Platform
 * Official English Medium Textbook Structure
 */
window.SCERT_DATA = window.SCERT_DATA || {};
window.SCERT_DATA['science'] = {
    id: 'science',
    name: 'Science',
    class: 'Class 8',
    icon: '🔬',
    accentColor: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    bgTheme: 'science',
    tagline: 'Forces, Cells, Materials, Energy, Ecosystems & Agriculture',
    chapters: [
        {
            chapterNum: 1,
            title: "Force and Motion",
            summary: "Understand fundamentals of mechanics, contact vs non-contact forces, friction dynamics, and pressure.",
            topics: [
                {
                    topicNum: 1,
                    title: "Mechanics of Force and Pressure",
                    visualScene: "force-vectors",
                    visualLabel: "3D Force Vectors & Surface Pressure Distribution",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Force & Atmospheric Pressure",
                            textbookIdea: "Force is a push or pull that can change the state of rest, motion, speed, direction, or shape of an object. Force per unit surface area is defined as <span class=\"underlined-concept\" data-concept=\"pressure\">Pressure</span> (P = F / A), measured in Pascals (N/m²). Atmospheric pressure is the weight of atmospheric air pressing on Earth's surface.",
                            easyExplanation: "A force is any push or pull. Pressure is how much force is squished into a tiny area. That's why a sharp knife cuts an apple easily (tiny blade area = huge pressure), but a blunt spoon cannot!",
                            visualScene: "force-vectors",
                            visualLabel: "3D Applied Force Vector & Pressure Gauge"
                        }
                    ],
                    underlinedCards: [
                        { id: "pressure", word: "Pressure", meaning: "Force acting perpendicularly per unit surface area (P = F/A).", simpleExplanation: "Concentration of force over a specific contact area.", example: "Sharp needle puncturing fabric effortlessly compared to a wide finger.", visual: "📌" }
                    ],
                    remember: "Pressure is inversely proportional to surface area: reducing contact area increases pressure dramatically for the same applied force.",
                    funFact: "A person lying flat on a mattress exerts much less pressure than when standing on one foot because their weight is spread across a larger surface area!",
                    realLife: "Heavy transport trucks are fitted with 10 to 14 wide wheels to spread their massive load over a larger road surface, minimizing road damage.",
                    vocabulary: [
                        { word: "Pascal (Pa)", meaning: "SI unit of pressure equal to one Newton per square meter (N/m²)." },
                        { word: "Atmospheric Pressure", meaning: "Force exerted by the column of atmospheric air per unit ground area." }
                    ],
                    summary: [
                        "Force is a push or pull acting upon an object, measured in Newtons (N).",
                        "Pressure equals Force divided by Area (P = F / A), measured in Pascals (Pa).",
                        "Decreasing area increases pressure; increasing area decreases pressure.",
                        "Fluids (liquids and gases) exert pressure in all directions equally at a given depth.",
                        "Atmospheric pressure decreases with increasing altitude above sea level."
                    ],
                    blooms: [
                        { level: "Remembering", q: "Define pressure and state its SI unit.", a: "Pressure is force acting per unit area (P = F/A); its SI unit is the Pascal (Pa) or N/m²." },
                        { level: "Understanding", q: "Why do porter porters place a round folded cloth on their heads when carrying heavy luggage?", a: "The cloth increases contact surface area, reducing downward pressure on their head." },
                        { level: "Applying", q: "A force of 100 N acts on an area of 0.2 m². Calculate the pressure exerted.", a: "P = F / A = 100 N / 0.2 m² = 500 Pascals (Pa)." },
                        { level: "Analyzing", q: "Why are camel hooves broad and flat compared to horse hooves?", a: "Broad hooves increase surface area on desert sand, lowering pressure so camels do not sink while walking." },
                        { level: "Evaluating", q: "Why does water spurting from a deep hole in a bucket shoot farther than from a top hole?", a: "Liquid pressure increases directly with depth; water at the bottom experiences greater hydrostatic pressure." },
                        { level: "Creating", q: "Design a simple hydraulic lift model using two medical syringes of different diameters connected by a tube.", a: "Connect a 5 mL syringe and 20 mL syringe filled with water; pressing the small syringe lifts a heavy weight on the large syringe." }
                    ],
                    quiz: [
                        { q: "What is the formula to calculate pressure?", options: ["P = Force × Area", "P = Force / Area", "P = Area / Force", "P = Force + Area"], correct: 1, exp: "Pressure is defined as Force divided by Area (P = F/A)." },
                        { q: "Why do cutting knives have very sharp, thin edges?", options: ["To look attractive", "To decrease contact area, thereby maximizing cutting pressure", "To increase friction", "To prevent rust"], correct: 1, exp: "Smaller contact area yields enormous pressure with minimal muscle effort." },
                        { q: "Liquid pressure at a given depth acts:", options: ["Only downwards", "Only upwards", "In all directions equally", "Only horizontally"], correct: 2, exp: "Fluids exert isotropic hydrostatic pressure equally in all directions at the same depth." },
                        { q: "The pressure exerted by air surrounding Earth is known as:", options: ["Hydrostatic pressure", "Atmospheric pressure", "Electrostatic pressure", "Magnetic pressure"], correct: 1, exp: "Atmospheric pressure is caused by the weight of the air column." },
                        { q: "As you climb higher up a mountain, atmospheric pressure:", options: ["Increases", "Decreases", "Remains constant", "Becomes zero immediately"], correct: 1, exp: "Air column height and density decrease with altitude, lowering atmospheric pressure." }
                    ],
                    flashcards: [
                        { q: "What is Pressure?", a: "Force acting per unit area (P = F / A)." },
                        { q: "What is the SI unit of pressure?", a: "Pascal (Pa) or N/m²." },
                        { q: "Why are school bag straps wide?", a: "Wide straps spread weight over larger shoulder area, reducing painful pressure." },
                        { q: "How does water pressure change with depth?", a: "Pressure increases directly with increasing depth." },
                        { q: "What instrument measures atmospheric pressure?", a: "A barometer." }
                    ],
                    comparison: {
                        title: "Force vs. Pressure",
                        headers: ["Feature", "Force", "Pressure"],
                        rows: [
                            ["Definition", "Total push or pull exerted on an entire body", "Force concentrated per unit surface area"],
                            ["SI Unit", "Newton (N)", "Pascal (Pa) or N/m²"],
                            ["Area Dependency", "Independent of contact surface area", "Inversely proportional to contact surface area"]
                        ],
                        vsSummary: "Force is the total mechanical push or pull, while pressure is how intensely that force is focused onto a specific area."
                    }
                }
            ],
            exam: [
                { q: "The SI unit of force is the Newton, named after:", options: ["Albert Einstein", "Sir Isaac Newton", "James Watt", "Blaise Pascal"], correct: 1, exp: "Sir Isaac Newton formulated the laws of motion." },
                { q: "A suction cup sticks to a smooth wall because of:", options: ["Glue", "Atmospheric air pressure pressing from the outside", "Magnetic force", "Gravitational pull"], correct: 1, exp: "Expelling air from inside leaves higher external atmospheric pressure holding the cup." },
                { q: "Which tool measures atmospheric air pressure?", options: ["Thermometer", "Barometer", "Manometer", "Hygrometer"], correct: 1, exp: "Torricelli invented the mercury barometer to measure air pressure." },
                { q: "If the area of contact is doubled while keeping force constant, the pressure becomes:", options: ["Doubled", "Halved", "Quadrupled", "Zero"], correct: 1, exp: "Pressure is inversely proportional to area: doubling area cuts pressure in half." },
                { q: "Deep sea divers must wear reinforced pressurized diving suits because:", options: ["Water is cold", "Immense water pressure at great depths could crush the human body", "To swim faster", "To stay visible"], correct: 1, exp: "Hydrostatic water pressure increases by 1 atmosphere for every 10 meters of depth." },
                { q: "Why are foundation bases of tall buildings and dams made very broad?", options: ["To save concrete", "To distribute massive building weight over a large area, lowering ground pressure", "For drainage", "To resist wind only"], correct: 1, exp: "Broad foundations reduce ground pressure, preventing soil subsidence." },
                { q: "Atmospheric pressure at sea level is approximately:", options: ["1,000 Pa", "101,325 Pa (about 100 kPa)", "10 Pa", "500 kPa"], correct: 1, exp: "Standard atmospheric pressure is 101.3 kPa (1 atmosphere)." },
                { q: "Why does water leak out equally from holes made at the same height around a plastic bottle?", options: ["Gravity is equal", "Liquid exerts equal pressure at the same horizontal depth in all directions", "Water is magnetic", "Air pushes it"], correct: 1, exp: "Hydrostatic pressure is identical at all points along the same horizontal depth." },
                { q: "When a rubber balloon is inflated with air, pressure is exerted on its:", options: ["Top only", "Bottom only", "Inner walls in all directions uniformly", "Outside only"], correct: 2, exp: "Gas particles collide with the entire interior surface uniformly." },
                { q: "Why do nosebleeds sometimes occur at very high altitudes in the Himalayas?", options: ["Cold temperature", "Atmospheric pressure drops low while internal blood pressure remains high, bursting capillaries", "Lack of water", "Sunlight"], correct: 1, exp: "Low ambient air pressure causes delicate nasal blood vessels to rupture." },
                { q: "Which of the following experiences the greatest pressure on a table?", options: ["A brick lying flat on its broadest face", "The same brick standing vertically on its smallest face", "The brick cut in half", "Pressure is identical"], correct: 1, exp: "Smallest contact face generates the highest pressure." },
                { q: "A hydraulic brake system in cars operates on which scientific principle?", options: ["Archimedes principle", "Pascal's law of fluid pressure transmission", "Bernoulli's principle", "Boyle's law"], correct: 1, exp: "Pascal's law states enclosed fluids transmit pressure undiminished in all directions." },
                { q: "Why do elephants have large padded flat foot soles?", options: ["To run silently", "To spread their multi-ton body weight, preventing them from sinking into mud", "To cool down", "To jump"], correct: 1, exp: "Large foot surface area minimizes ground pressure." },
                { q: "What happens when you drink juice with a straw?", options: ["You push liquid up", "Sucking removes air inside the straw, and external atmospheric pressure pushes juice up into your mouth", "Juice evaporates", "Capillary action alone"], correct: 1, exp: "Atmospheric pressure pushing on the surface of the juice forces it up the low-pressure straw." },
                { q: "Which gas law relates gas pressure and volume at constant temperature?", options: ["Charles's law", "Boyle's law", "Newton's law", "Ohm's law"], correct: 1, exp: "Boyle's law: P1 V1 = P2 V2." },
                { q: "The pressure exerted by the blood on the walls of arteries is called:", options: ["Atmospheric pressure", "Blood pressure", "Hydrostatic pressure", "Osmotic pressure"], correct: 1, exp: "Blood pressure is monitored with a sphygmomanometer." },
                { q: "Why is a pin point sharp rather than flat?", options: ["To enter walls with minimal applied force due to concentrated pressure", "To look shiny", "To save steel", "To be lightweight"], correct: 0, exp: "Microscopic tip area concentrates applied thumb force into immense penetrating pressure." },
                { q: "If force is 50 N and area is 5 m², pressure is:", options: ["250 Pa", "10 Pa", "0.1 Pa", "45 Pa"], correct: 1, exp: "P = 50 / 5 = 10 Pascals." },
                { q: "What keeps Earth's atmosphere anchored to the planet rather than drifting into outer space?", options: ["Magnetic field", "Earth's gravitational force", "Centrifugal force", "Solar wind"], correct: 1, exp: "Gravity holds gas molecules within Earth's atmospheric envelope." },
                { q: "Magdeburg hemispheres experiment demonstrated the immense power of:", options: ["Electricity", "Atmospheric air pressure", "Magnetism", "Steam"], correct: 1, exp: "Otto von Guericke evacuated two bronze hemispheres in 1654, proving teams of horses couldn't pull them apart against air pressure." }
            ]
        },
        {
            chapterNum: 2,
            title: "Friction and Surfaces",
            summary: "Explore microscopic surface roughness, static vs kinetic friction, rolling friction, fluid drag, and lubricants.",
            topics: [
                {
                    topicNum: 1,
                    title: "Frictional Forces & Surface Interlocking",
                    visualScene: "friction-microscopy",
                    visualLabel: "3D Interlocking Asperities & Lubricant Film Visualizer",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Microscopic Asperities & Frictional Resistance",
                            textbookIdea: "Friction is a contact force that opposes the relative motion between two surfaces in contact. Even surfaces that appear perfectly smooth to the naked eye possess microscopic hills and valleys called <span class=\"underlined-concept\" data-concept=\"asperities\">asperities</span> that interlock. Friction depends on the nature of surfaces and the normal force pressing them together.",
                            easyExplanation: "No surface is completely flat! Under a microscope, even smooth glass looks like a rugged mountain range. When two surfaces slide against each other, their microscopic jagged teeth lock together—that gripping resistance is friction!",
                            visualScene: "friction-microscopy",
                            visualLabel: "3D Zoom into Surface Asperities"
                        }
                    ],
                    underlinedCards: [
                        { id: "asperities", word: "Microscopic Asperities", meaning: "Microscopic irregularities, ridges, and valleys on solid surfaces that physically interlock to produce frictional resistance.", simpleExplanation: "Tiny microscopic bumps on surfaces that snag together.", example: "Tread patterns on shoes gripping concrete.", visual: "🔬" }
                    ],
                    remember: "Rolling friction is significantly smaller than sliding friction, which is why the wheel is considered one of humanity's greatest mechanical inventions.",
                    funFact: "Without friction, you could never walk forward, cars could not brake, and nails would instantly slip out of walls!",
                    realLife: "Athletes wear spiked track shoes to maximize ground friction, while car engines circulate synthetic engine oil to minimize destructive friction.",
                    vocabulary: [
                        { word: "Static Friction", meaning: "The maximum opposing force preventing stationary surfaces from sliding." },
                        { word: "Rolling Friction", meaning: "The frictional resistance encountered when a spherical or cylindrical body rolls over a surface." }
                    ],
                    summary: [
                        "Friction opposes relative motion between contacting surfaces.",
                        "Static friction > Sliding friction > Rolling friction.",
                        "Lubricants reduce friction by forming a thin fluid film separating asperities.",
                        "Fluid friction (drag) is minimized by streamlined aerodynamic shapes."
                    ],
                    blooms: [
                        { level: "Remembering", q: "Which friction is the smallest: static, sliding, or rolling?", a: "Rolling friction." },
                        { level: "Understanding", q: "Why do gymnasts apply chalk powder to their hands before performing?", a: "Chalk absorbs sweat and increases hand-surface roughness, enhancing grip friction." },
                        { level: "Applying", q: "Why are ball bearings installed in ceiling fans and bicycle wheel hubs?", a: "Ball bearings convert sliding friction into much lower rolling friction, reducing energy loss and wear." },
                        { level: "Analyzing", q: "Explain why airplanes and high-speed bullet trains have pointed, streamlined noses.", a: "Streamlining cuts through air smoothly, reducing air resistance (fluid drag)." },
                        { level: "Evaluating", q: "Why is friction described as a 'necessary evil'?", a: "It is necessary because walking, writing, and braking require it; an evil because it causes machine wear, tear, and wasted heat energy." },
                        { level: "Creating", q: "Design an experiment to prove that rolling friction is smaller than sliding friction.", a: "Pull a heavy wooden block with a spring balance and record the force; then place cylindrical pencils underneath and pull again to observe a drastic force reduction." }
                    ],
                    quiz: [
                        { q: "Friction always acts in a direction:", options: ["Opposite to the direction of motion", "Same as motion", "Perpendicular to motion", "Downward towards Earth"], correct: 0, exp: "Friction opposes relative sliding motion." },
                        { q: "Which of the following creates the highest frictional resistance?", options: ["Static friction", "Sliding friction", "Rolling friction", "Fluid drag"], correct: 0, exp: "Static friction is higher than kinetic sliding and rolling friction." },
                        { q: "Substances introduced between machine parts to reduce friction are called:", options: ["Lubricants", "Abrasives", "Adhesives", "Insulators"], correct: 0, exp: "Lubricants create a smooth separating barrier." },
                        { q: "Why are the soles of sports shoes grooved and treaded?", options: ["To look trendy", "To increase friction and prevent slipping", "To reduce shoe weight", "To make them waterproof"], correct: 1, exp: "Treads provide interlocking grip on sports surfaces." },
                        { q: "The frictional drag exerted by fluids (liquids and gases) on moving objects is called:", options: ["Drag", "Gravity", "Upthrust", "Tension"], correct: 0, exp: "Fluid resistance is scientifically termed drag." }
                    ],
                    flashcards: [
                        { q: "What is Friction?", a: "A contact force opposing relative motion between surfaces." },
                        { q: "What is Static Friction?", a: "Friction resisting the initiation of sliding motion." },
                        { q: "What is Rolling Friction?", a: "Friction when a cylindrical or spherical body rolls on a surface." },
                        { q: "What is a Lubricant?", a: "A substance like oil or grease that reduces friction." },
                        { q: "What is Fluid Drag?", a: "Frictional resistance exerted by liquids or gases on moving bodies." }
                    ],
                    comparison: {
                        title: "Sliding Friction vs. Rolling Friction",
                        headers: ["Parameter", "Sliding Friction", "Rolling Friction"],
                        rows: [
                            ["Contact Nature", "Surfaces continuously slide and rub across each other", "A wheel or sphere makes momentary point contact as it rolls"],
                            ["Magnitude", "Substantially higher resistance and heat generation", "Much lower resistance (often 100 to 1000 times less)"],
                            ["Mechanical Device", "Brake pads clamping on a wheel rim", "Ball bearings inside an axle hub"]
                        ],
                        vsSummary: "Rolling friction is vastly smaller than sliding friction because contact surfaces roll away rather than grind across asperities."
                    }
                }
            ],
            exam: [
                { q: "Friction between two smooth flat surfaces can be reduced by:", options: ["Applying lubricating oil or graphite", "Sprinkling sand", "Making surfaces rougher", "Pressing them harder"], correct: 0, exp: "Lubricants form a separating film." },
                { q: "Why are car tires treaded with deep rubber patterns?", options: ["To channel away water and maintain high grip friction", "To look attractive", "To decrease tire weight", "To burn rubber"], correct: 0, exp: "Treads prevent hydroplaning and ensure road grip." },
                { q: "The streamlined aerodynamic shape of airplanes is inspired by:", options: ["Birds flying in air", "Fish swimming in water", "Both birds and aquatic creatures", "Trees"], correct: 2, exp: "Nature's flyers and swimmers evolved streamlined contours." },
                { q: "When a car skids on a wet slippery road, it is because:", options: ["Water layer reduces friction between tires and tarmac", "Friction increased", "Gravity vanished", "Tires melted"], correct: 0, exp: "Water acts as a low-friction lubricant barrier." },
                { q: "Sprinkling fine talcum powder on a carrom board:", options: ["Reduces friction, allowing the striker to glide smoothly", "Increases friction", "Stops the striker", "Protects the wood from water"], correct: 0, exp: "Talcum fills surface micro-crevices, smoothing motion." },
                { q: "A ball rolling on a horizontal floor eventually stops due to:", options: ["Friction between the ball and ground", "Lack of gravity", "Air pressure pushing down", "Magnetic pull"], correct: 0, exp: "Rolling friction and air resistance bring it to rest." },
                { q: "Friction generates which form of energy in machine parts?", options: ["Thermal heat energy", "Chemical energy", "Nuclear energy", "Electrical charge only"], correct: 0, exp: "Rubbing surfaces convert kinetic energy into friction heat." },
                { q: "Which of the following is used as a dry solid lubricant in heavy machinery?", options: ["Graphite powder", "Water", "Sand", "Crushed ice"], correct: 0, exp: "Graphite has slippery planar carbon sheets." },
                { q: "Fluid friction does NOT depend on:", options: ["Color of the moving object", "Speed of the object relative to the fluid", "Shape of the body", "Viscosity of the fluid"], correct: 0, exp: "Color has zero influence on fluid dynamics." },
                { q: "The use of ball bearings in machine axles converts:", options: ["Sliding friction into rolling friction", "Rolling friction into sliding", "Static into sliding", "Fluid drag into static"], correct: 0, exp: "Ball bearings facilitate rolling motion." },
                { q: "Why do meteorites burn up upon entering Earth's upper atmosphere?", options: ["Enormous air friction generates intense incandescent heat", "Sunlight burns them", "They contain fuel", "Clouds ignite them"], correct: 0, exp: "Extreme atmospheric friction vaporizes falling meteors." },
                { q: "Which surface provides the least friction for a moving toy car?", options: ["Wet glass sheet", "Rough sandpaper", "Cement road", "Coarse jute carpet"], correct: 0, exp: "Wet polished glass has minimal surface asperities." },
                { q: "If you push a heavy wooden crate on a carpeted floor with 200 N and it does not move, the static friction is:", options: ["Exactly 200 N", "Less than 200 N", "More than 200 N", "Zero"], correct: 0, exp: "Static friction balances applied force exactly up to the threshold." },
                { q: "Why is it difficult to walk on a smooth frozen ice sheet?", options: ["Friction between shoe sole and ice is almost zero", "Ice is cold", "Gravity is weaker on ice", "Shoes become heavy"], correct: 0, exp: "Low friction prevents shoes from pushing backward." },
                { q: "Ship hulls and submarine bodies are designed with streamlined shapes to:", options: ["Minimize hydrodynamic fluid drag in water", "Save steel", "Carry more cargo", "Look modern"], correct: 0, exp: "Streamlining reduces water drag." },
                { q: "When two rough bricks are pressed together with twice the downward force, the sliding friction:", options: ["Doubles", "Halves", "Remains unchanged", "Drops to zero"], correct: 0, exp: "Friction is directly proportional to normal pressing force." },
                { q: "The maximum value of static friction just before an object begins sliding is called:", options: ["Limiting friction", "Rolling friction", "Kinetic friction", "Fluid drag"], correct: 0, exp: "Limiting friction is the static friction threshold." },
                { q: "Brake shoes in motor vehicles operate by:", options: ["Increasing sliding friction against brake drums/rotors to halt wheels", "Decreasing friction", "Cooling wheels", "Adding oil"], correct: 0, exp: "Brake friction dissipates kinetic energy as heat." },
                { q: "Why do mountain climbers wear spiked crampon boots?", options: ["To dig into hard ice, creating mechanical traction friction", "To look tall", "To keep feet warm", "To walk fast"], correct: 0, exp: "Spikes bite into icy terrain." },
                { q: "Can friction ever be completely eliminated between two real solid objects?", options: ["No, microscopic atomic attractions and irregularities always remain", "Yes, with enough oil", "Yes, in space", "Yes, by polishing for hours"], correct: 0, exp: "Atomic adhesion prevents zero friction in solid mechanics." }
            ]
        },
        {
            chapterNum: 3,
            title: "Synthetic Fibres and Plastics",
            summary: "Examine polymer chemistry, natural vs synthetic fibers (Nylon, Rayon, Polyester, Acrylic), thermoplastics, and thermosets.",
            topics: [
                {
                    topicNum: 1,
                    title: "Polymer Science, Fibers & Modern Plastics",
                    visualScene: "cell-organelles",
                    visualLabel: "3D Polymer Chain & Monomer Linkage Visualizer",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Polymers, Monomers & Synthetic Textiles",
                            textbookIdea: "Synthetic fibres and plastics are made of giant molecules called <span class=\"underlined-concept\" data-concept=\"polymers\">Polymers</span> formed by linking thousands of small chemical units called monomers. <span class=\"underlined-concept\" data-concept=\"rayon\">Rayon</span> (artificial silk) is prepared from chemical processing of wood pulp. <span class=\"underlined-concept\" data-concept=\"nylon\">Nylon</span> was the first fully synthetic fiber made without any natural raw materials (from coal, water, and air in 1931).",
                            easyExplanation: "A polymer is like a long paperclip chain made of thousands of tiny individual paperclips hooked together! While cotton grows on plants and wool grows on sheep, synthetic fibres like Nylon and Polyester are engineered in laboratories to be incredibly strong, lightweight, and wrinkle-free.",
                            visualScene: "cell-organelles",
                            visualLabel: "3D Polymer Monomer Cross-linking"
                        }
                    ],
                    underlinedCards: [
                        { id: "polymers", word: "Polymer", meaning: "A large high-molecular-weight macromolecule composed of repeated chemical subunits called monomers.", simpleExplanation: "A giant molecular chain made of repeating monomer links.", example: "Polyethylene, cellulose, nylon.", visual: "🔗" },
                        { id: "rayon", word: "Rayon", meaning: "A semi-synthetic regenerated cellulose fiber having lustrous silk-like texture.", simpleExplanation: "Artificial silk made by treating natural wood pulp chemically.", example: "Silky dresses, upholstery fabrics.", visual: "👗" },
                        { id: "nylon", word: "Nylon", meaning: "A polyamide synthetic fiber celebrated for extreme tensile strength, elasticity, and abrasion resistance.", simpleExplanation: "Strong synthetic fiber tougher than steel wire of the same thickness.", example: "Parachutes, climbing ropes, toothbrushes.", visual: "🪢" }
                    ],
                    remember: "Thermoplastics soften repeatedly when heated and can be remolded (e.g. Polythene, PVC), whereas Thermosetting plastics set permanently and cannot be softened by heating (e.g. Bakelite, Melamine).",
                    funFact: "A single strand of nylon climbing rope is literally stronger than a steel wire of the exact same diameter!",
                    realLife: "Firefighter safety suits are coated with Melamine plastic because it resists intense heat and does not catch fire easily.",
                    vocabulary: [
                        { word: "Tensile Strength", meaning: "The resistance of a material to breaking under tension or pulling force." },
                        { word: "Thermosetting Plastic", meaning: "A cross-linked plastic that hardens permanently upon cooling and cannot be remelted." }
                    ],
                    summary: [
                        "Fibers are either natural (cotton, wool, silk) or synthetic (nylon, polyester, acrylic).",
                        "Rayon is regenerated cellulose mimicking natural silk.",
                        "Nylon is exceptionally strong, lightweight, elastic, and quick-drying.",
                        "Thermoplastics (PVC, Polythene) can be recycled and remolded.",
                        "Thermosets (Bakelite, Melamine) form permanent cross-links and resist heat."
                    ],
                    blooms: [
                        { level: "Remembering", q: "Which synthetic fiber is popularly known as 'artificial silk'?", a: "Rayon." },
                        { level: "Understanding", q: "Why are electrical switches and plug handles made from Bakelite?", a: "Because Bakelite is a thermosetting plastic that is a poor conductor of electricity and does not melt when warm." },
                        { level: "Applying", q: "Why should you never wear synthetic clothes (nylon/polyester) while cooking in a kitchen or bursting firecrackers?", a: "Synthetic polymers melt upon catching fire and stick painfully to human skin, inflicting deep burn trauma." },
                        { level: "Analyzing", q: "Differentiate between thermoplastics and thermosetting plastics based on molecular structure.", a: "Thermoplastics have linear or branched polymer chains that slide when heated; thermosets have rigid 3D cross-linked networks preventing remelting." },
                        { level: "Evaluating", q: "Critique the environmental impact of single-use non-biodegradable polythene bags.", a: "They persist in soil for hundreds of years, choke municipal drainage channels, release dioxins when burned, and kill cattle that ingest them." },
                        { level: "Creating", q: "Formulate a school action plan for implementing the 4R plastic principle (Reduce, Reuse, Recycle, Recover).", a: "Ban disposable plastic bottles, mandate reusable canvas lunch bags, set up segregated plastic recycling bins, and compost biodegradable cafeteria waste." }
                    ],
                    quiz: [
                        { q: "Which was the world's first fully synthetic fiber synthesized in 1931?", options: ["Nylon", "Rayon", "Cotton", "Wool"], correct: 0, exp: "Nylon was made from coal, water, and air without plant materials." },
                        { q: "Rayon is obtained from the chemical processing of:", options: ["Wood pulp", "Coal", "Petroleum", "Cotton seeds"], correct: 0, exp: "Rayon is regenerated cellulose obtained from wood pulp." },
                        { q: "Which thermosetting plastic is used to make electrical plugs, sockets, and switches?", options: ["Bakelite", "Polythene", "PVC", "Polystyrene"], correct: 0, exp: "Bakelite is heat-resistant and an electrical insulator." },
                        { q: "Plastics that deform easily on heating and can be bent repeatedly are called:", options: ["Thermoplastics", "Thermosetting plastics", "Elastomers", "Ceramics"], correct: 0, exp: "Thermoplastics soften repeatedly when heated." },
                        { q: "Which synthetic fiber resembles natural sheep's wool and is used to weave winter blankets?", options: ["Acrylic", "Nylon", "Rayon", "Jute"], correct: 0, exp: "Acrylic (or Orlon) is artificial wool." }
                    ],
                    flashcards: [
                        { q: "What is Rayon?", a: "Artificial silk made from chemically processed wood pulp." },
                        { q: "What is Nylon?", a: "First fully synthetic polyamide fiber synthesized in 1931." },
                        { q: "What is a Thermoplastic?", a: "Plastic that softens on heating and can be remolded (e.g. PVC)." },
                        { q: "What is a Thermoset?", a: "Plastic that sets permanently and cannot be remelted (e.g. Bakelite)." },
                        { q: "What is PET?", a: "Polyethylene Terephthalate, used for bottles and food jars." }
                    ],
                    comparison: {
                        title: "Thermoplastics vs. Thermosetting Plastics",
                        headers: ["Characteristic", "Thermoplastics", "Thermosetting Plastics"],
                        rows: [
                            ["Thermal Behavior", "Softens repeatedly on heating; can be reshaped and remolded", "Sets permanently upon first molding; will not soften or melt when heated"],
                            ["Molecular Architecture", "Linear or branched polymer chains without cross-links", "Dense three-dimensional cross-linked covalent polymer lattices"],
                            ["Prominent Examples", "Polythene, Polyvinyl Chloride (PVC), Polystyrene", "Bakelite, Melamine, Vulcanized rubber"]
                        ],
                        vsSummary: "Thermoplastics can be repeatedly melted and recycled, whereas thermosets set into permanent rigid networks that cannot be remelted."
                    }
                }
            ],
            exam: [
                { q: "Parachutes and rock-climbing ropes are manufactured from:", options: ["Nylon", "Rayon", "Cotton", "Jute"], correct: 0, exp: "Nylon possesses extraordinary tensile breaking strength." },
                { q: "The non-stick coating applied to kitchen frying pans is made of:", options: ["Teflon (PTFE)", "Bakelite", "PVC", "Melamine"], correct: 0, exp: "Teflon provides a slick, heat-resistant non-stick surface." },
                { q: "Which plastic is used for making lightweight, shatterproof soda bottles and containers?", options: ["PET (Polyethylene Terephthalate)", "Bakelite", "Melamine", "Nylon"], correct: 0, exp: "PET is standard for clear beverage packaging." },
                { q: "Melamine is extensively used for manufacturing:", options: ["Unbreakable dinnerware and firefighter uniforms", "Water pipes", "Shoe soles", "Fishing nets"], correct: 0, exp: "Melamine resists heat and open flame." },
                { q: "Polyester fabrics are popular for school uniforms because they:", options: ["Do not wrinkle easily and are easy to wash and dry", "Are very heavy", "Melt in water", "Shrink every wash"], correct: 0, exp: "Polyester fibers maintain crispness and dry rapidly." },
                { q: "Terylene combined with cotton produces a blended textile called:", options: ["Polycot", "Polywool", "Terrysilk", "Acrylic"], correct: 0, exp: "Terylene + Cotton = Polycot." },
                { q: "Which plastic material is used to insulate electrical household wiring cables?", options: ["Polyvinyl Chloride (PVC)", "Bakelite", "Melamine", "Teflon"], correct: 0, exp: "PVC provides flexible electrical insulation." },
                { q: "Materials that do not decompose through natural biological microbial actions are called:", options: ["Non-biodegradable", "Biodegradable", "Organic", "Compostable"], correct: 0, exp: "Non-biodegradable plastics resist biological decay." },
                { q: "Approximately how many years does a typical plastic bottle take to decompose in a landfill?", options: ["Several hundred years (400-500 years)", "1 year", "5 years", "10 years"], correct: 0, exp: "Plastics endure for centuries in landfills." },
                { q: "Which fiber burns with the smell of burning paper?", options: ["Cotton and Rayon (both cellulose)", "Nylon", "Wool", "Silk"], correct: 0, exp: "Plant cellulose fibers smell like burning paper." },
                { q: "Which fiber burns with the characteristic smell of burning hair?", options: ["Wool and Silk (both animal proteins)", "Cotton", "Nylon", "Polyester"], correct: 0, exp: "Keratin and fibroin proteins smell like singed hair." },
                { q: "Synthetic fibers melt and shrink into a hard chemical bead when exposed to:", options: ["Flame heat", "Cold water", "Sunlight only", "Wind"], correct: 0, exp: "Synthetic polymers melt into hard petrochemical beads." },
                { q: "The raw chemical building blocks used to manufacture synthetic fibers and plastics are derived from:", options: ["Petroleum and petrochemicals", "Clay", "Sand", "Limestone"], correct: 0, exp: "Fossil fuels and naphtha provide monomer feedstocks." },
                { q: "Which synthetic fiber is used as an artificial glass substitute in aircraft windows?", options: ["Perspex (Acrylic glass)", "Bakelite", "Nylon", "Polyester"], correct: 0, exp: "Transparent poly(methyl methacrylate) / Perspex." },
                { q: "Why are plastic containers universally favored over tin cans for storing pickles and acids?", options: ["Plastics do not corrode or react with food acids", "Tin is toxic", "Plastics are heavy", "Tin dissolves in water"], correct: 0, exp: "Plastics are chemically inert to organic food acids." },
                { q: "The 4R principle in environmental plastic stewardship stands for:", options: ["Reduce, Reuse, Recycle, Recover", "Read, Repeat, Review, Remember", "Run, Rest, Return, Replace", "Reshape, Refuse, Remove, Replant"], correct: 0, exp: "Reduce, Reuse, Recycle, Recover." },
                { q: "Which of the following is a completely natural polymer synthesized by plants?", options: ["Cellulose", "Nylon", "Teflon", "PVC"], correct: 0, exp: "Cellulose is the natural structural polymer of plant cell walls." },
                { q: "The monomer unit of cellulose is:", options: ["Glucose", "Amino acid", "Ester", "Ethylene"], correct: 0, exp: "Cellulose is a polymer composed of linked glucose units." },
                { q: "Which synthetic fiber is blended with wool to create affordable winter shawls?", options: ["Acrylic", "Nylon", "Rayon", "Polyester"], correct: 0, exp: "Acrylic mimics natural sheep wool." },
                { q: "Burning plastic waste releases which hazardous environmental pollutants?", options: ["Toxic dioxins, furans, and poisonous fumes", "Pure oxygen", "Water vapor only", "Nitrogen fertilizer"], correct: 0, exp: "Open incineration of chlorinated plastics emits carcinogenic dioxins." }
            ]
        },
        {
            chapterNum: 4,
            title: "Metals and Non-Metals",
            summary: "Examine physical and chemical properties of elements, malleability, ductility, reactivity series, and displacement reactions.",
            topics: [
                {
                    topicNum: 1,
                    title: "Physical and Chemical Metallurgy & Reactivity",
                    visualScene: "cell-organelles",
                    visualLabel: "3D Metallic Lattice & Electron Sea Model",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Malleability, Ductility & Chemical Reactivity",
                            textbookIdea: "Elements are broadly classified into metals and non-metals. Metals are lustrous, sonorous, good conductors of heat and electricity, <span class=\"underlined-concept\" data-concept=\"malleability\">malleable</span> (beaten into thin sheets), and <span class=\"underlined-concept\" data-concept=\"ductility\">ductile</span> (drawn into thin wires). Metals react with oxygen to form basic oxides (e.g. 2Mg + O2 -> 2MgO). In a <span class=\"underlined-concept\" data-concept=\"displacement-reaction\">displacement reaction</span>, a more reactive metal displaces a less reactive metal from its salt solution.",
                            easyExplanation: "Metals are the tough superstars of chemistry! You can hammer gold into microscopically thin sheets (malleability) or stretch copper into miles of electric wire (ductility). More aggressive metals like Zinc can bully weaker metals like Copper and steal their chemical partners!",
                            visualScene: "cell-organelles",
                            visualLabel: "3D Displacement Reaction Atom Exchange"
                        }
                    ],
                    underlinedCards: [
                        { id: "malleability", word: "Malleability", meaning: "The physical property of a metal allowing it to be hammered or rolled into thin sheets without shattering.", simpleExplanation: "Ability to be hammered flat into foil.", example: "Aluminum foil wrapping food, gold leaf (vark).", visual: "🔨" },
                        { id: "ductility", word: "Ductility", meaning: "The physical capacity of a metal to be drawn out longitudinally into thin wires.", simpleExplanation: "Ability to be stretched into long thin wire.", example: "Copper electrical wiring, tungsten light filaments.", visual: "〰️" },
                        { id: "displacement-reaction", word: "Displacement Reaction", meaning: "A chemical reaction in which a more electropositive, reactive element displaces a less reactive element from its aqueous salt solution.", simpleExplanation: "A stronger metal kicks out a weaker metal from its compound.", example: "Zn + CuSO4 -> ZnSO4 + Cu (blue copper sulfate turns colorless).", visual: "⚡" }
                    ],
                    remember: "Mercury (Hg) is the ONLY metal that exists as a liquid at room temperature; Bromine (Br) is the only non-metal that exists as a liquid at room temperature.",
                    funFact: "Gold is the most malleable metal on Earth: a single gram of gold can be beaten into a sheet covering one square meter, or drawn into a wire 2 kilometers long!",
                    realLife: "Galvanized iron roofing sheets in Telangana are coated with a thin layer of zinc to prevent rust oxidation.",
                    vocabulary: [
                        { word: "Sonorous", meaning: "Producing a deep, resonant ringing sound when struck." },
                        { word: "Reactivity Series", meaning: "An arranged vertical hierarchy of metals in decreasing order of chemical reactivity." }
                    ],
                    summary: [
                        "Metals are malleable, ductile, lustrous, sonorous, and conduct heat/electricity.",
                        "Non-metals (except graphite) are non-conductors, brittle, and non-sonorous.",
                        "Metallic oxides are basic in nature; non-metallic oxides are acidic.",
                        "Sodium and Potassium are soft metals stored under kerosene due to violent reactivity.",
                        "More reactive metals displace less reactive metals from aqueous solutions."
                    ],
                    blooms: [
                        { level: "Remembering", q: "Name a non-metal that is a good conductor of electricity.", a: "Graphite (an allotrope of carbon)." },
                        { level: "Understanding", q: "Why are sodium and potassium stored submerged in kerosene oil?", a: "They react violently and exothermically with atmospheric oxygen and moisture, catching fire instantly." },
                        { level: "Applying", q: "What happens when an iron nail is immersed in a blue copper sulfate solution for 30 minutes?", a: "Iron displaces copper: Fe + CuSO4 -> FeSO4 + Cu; the blue solution turns pale green and reddish-brown copper deposits on the nail." },
                        { level: "Analyzing", q: "Why are cooking pan handles made of wood or ebonite rather than aluminum?", a: "Aluminum is a good thermal conductor and would burn hands; wood and ebonite are thermal insulators." },
                        { level: "Evaluating", q: "Can lemon pickle be safely stored in an aluminum container? Justify.", a: "No, because the citric acid in lemon reacts with aluminum metal to form toxic metallic salts and hydrogen gas." },
                        { level: "Creating", q: "Design an experiment to test whether sulfur dioxide gas forms an acidic or basic oxide.", a: "Burn sulfur powder in a deflagrating spoon, collect SO2 gas in a jar, add water to make sulfurous acid (H2SO3), and test with blue litmus paper (turns red, proving acidity)." }
                    ],
                    quiz: [
                        { q: "Which metal is liquid at standard room temperature?", options: ["Mercury (Hg)", "Iron", "Gold", "Lead"], correct: 0, exp: "Mercury is liquid at room temperature." },
                        { q: "The property of metals enabling them to be beaten into thin sheets is:", options: ["Malleability", "Ductility", "Sonority", "Hardness"], correct: 0, exp: "Malleability allows hammering into sheets." },
                        { q: "Which non-metal is exceptionally lustrous with shiny crystals?", options: ["Iodine", "Sulfur", "Carbon", "Phosphorus"], correct: 0, exp: "Iodine crystals display metallic luster." },
                        { q: "What gas is produced when metals react with dilute hydrochloric acid?", options: ["Hydrogen gas (H2)", "Oxygen", "Carbon dioxide", "Nitrogen"], correct: 0, exp: "Metals displace hydrogen, which burns with a 'pop' sound." },
                        { q: "Which non-metal is stored under water because it catches fire in air?", options: ["White Phosphorus", "Sulfur", "Carbon", "Silicon"], correct: 0, exp: "White phosphorus ignites spontaneously in air at 35°C." }
                    ],
                    flashcards: [
                        { q: "What is Malleability?", a: "Ability to be hammered into thin flat sheets." },
                        { q: "What is Ductility?", a: "Ability to be drawn into thin wires." },
                        { q: "What is the only liquid metal?", a: "Mercury (Hg)." },
                        { q: "What is the only liquid non-metal?", a: "Bromine (Br)." },
                        { q: "Nature of metallic oxides?", a: "Basic in nature (turns red litmus blue)." }
                    ],
                    comparison: {
                        title: "Metals vs. Non-Metals",
                        headers: ["Property", "Metals", "Non-Metals"],
                        rows: [
                            ["Physical State", "Mostly solids at room temperature (except Mercury)", "Solids, liquids (Bromine), or gases (Oxygen, Nitrogen)"],
                            ["Malleability & Ductility", "Highly malleable and ductile", "Brittle when solid; crumble into powder when struck"],
                            ["Oxide Nature", "Basic or amphoteric oxides (e.g. MgO, Na2O)", "Acidic or neutral oxides (e.g. SO2, CO2, NO)"]
                        ],
                        vsSummary: "Metals are malleable, ductile conductors with basic oxides; non-metals are brittle insulators that form acidic oxides."
                    }
                }
            ],
            exam: [
                { q: "Which of the following metals can be easily sliced with a kitchen knife?", options: ["Sodium and Potassium", "Iron", "Copper", "Zinc"], correct: 0, exp: "Alkali metals sodium and potassium are soft wax-like metals." },
                { q: "Rusting of iron requires the simultaneous presence of:", options: ["Both Oxygen and Moisture (water)", "Dry oxygen only", "Water without air", "Nitrogen"], correct: 0, exp: "4Fe + 3O2 + 2xH2O -> 2Fe2O3.xH2O (hydrated iron oxide)." },
                { q: "The green coating formed on copper statues exposed to moist air is a mixture of:", options: ["Copper carbonate and Copper hydroxide", "Copper oxide", "Copper sulfate", "Pure copper"], correct: 0, exp: "CuCO3.Cu(OH)2 (basic copper carbonate)." },
                { q: "Which metal is the best conductor of electricity?", options: ["Silver (Ag)", "Copper (Cu)", "Aluminum (Al)", "Gold (Au)"], correct: 0, exp: "Silver possesses the highest electrical conductivity." },
                { q: "Why is copper universally preferred over silver for household electrical wiring?", options: ["Copper is far more affordable and abundantly available", "Copper conducts better than silver", "Silver melts in water", "Silver is too heavy"], correct: 0, exp: "Silver is an expensive precious metal." },
                { q: "Which metal does NOT react even with boiling water or steam?", options: ["Gold and Platinum", "Magnesium", "Iron", "Calcium"], correct: 0, exp: "Noble metals gold and platinum are unreactive." },
                { q: "When zinc reacts with copper sulfate solution, the observed color change is:", options: ["Blue changes to colorless with red copper deposit", "Colorless turns blue", "Turns bright yellow", "No change"], correct: 0, exp: "Zn + CuSO4 -> ZnSO4 (colorless) + Cu." },
                { q: "Non-metallic oxides dissolved in water turn litmus paper:", options: ["Blue litmus to Red (acidic)", "Red to Blue", "No change", "Green"], correct: 0, exp: "Acidic non-metal oxides form acids in water." },
                { q: "Which of the following is the hardest natural substance known on Earth?", options: ["Diamond (an allotrope of carbon)", "Iron", "Titanium", "Granite"], correct: 0, exp: "Diamond has a rigid tetrahedral covalent carbon lattice." },
                { q: "Which metal is applied to sheet iron during the process of Galvanization?", options: ["Zinc (Zn)", "Tin (Sn)", "Lead (Pb)", "Copper (Cu)"], correct: 0, exp: "Zinc protects iron through sacrificial corrosion resistance." },
                { q: "Which metal is used as the filament in traditional incandescent electric bulbs?", options: ["Tungsten (W)", "Copper", "Iron", "Platinum"], correct: 0, exp: "Tungsten has an ultra-high melting point (3,422°C)." },
                { q: "An alloy of Copper and Zinc is called:", options: ["Brass", "Bronze", "Solder", "Steel"], correct: 0, exp: "Brass is Cu + Zn (Bronze is Cu + Sn)." },
                { q: "Bronze is an alloy composed of:", options: ["Copper and Tin", "Copper and Zinc", "Lead and Tin", "Iron and Carbon"], correct: 0, exp: "Bronze consists of copper and tin." },
                { q: "Which non-metal is an essential element in the vulcanization of natural rubber?", options: ["Sulfur", "Phosphorus", "Carbon", "Silicon"], correct: 0, exp: "Sulfur forms cross-links, toughening rubber." },
                { q: "Which metal is extracted from its principal ore Bauxite?", options: ["Aluminum (Al)", "Iron (Fe)", "Copper (Cu)", "Gold (Au)"], correct: 0, exp: "Bauxite (Al2O3.2H2O) is the ore of aluminum." },
                { q: "Haematite is the primary natural ore of which metal?", options: ["Iron (Fe)", "Zinc", "Lead", "Magnesium"], correct: 0, exp: "Fe2O3 is haematite iron ore." },
                { q: "Which non-metal is widely used in water purification as a germicide?", options: ["Chlorine", "Iodine", "Sulfur", "Carbon"], correct: 0, exp: "Chlorine gas/tablets disinfect municipal water." },
                { q: "Which gas ignites with a distinctive 'pop' sound during a flame test?", options: ["Hydrogen gas", "Oxygen", "Carbon dioxide", "Methane"], correct: 0, exp: "Hydrogen combustion produces a characteristic pop." },
                { q: "Amalgam is an alloy of any metal with:", options: ["Mercury", "Gold", "Lead", "Silver"], correct: 0, exp: "Alloys containing mercury are amalgams." },
                { q: "Can a piece of copper displace zinc from a zinc sulfate solution?", options: ["No, because copper is less reactive than zinc", "Yes, easily", "Only if heated to 500°C", "Only in space"], correct: 0, exp: "Copper sits below zinc on the reactivity series and cannot displace it." }
            ]
        },
        {
            chapterNum: 5,
            title: "Sound and Wave Mechanics",
            summary: "Explore acoustic vibrations, longitudinal sound waves, human ear anatomy, amplitude, frequency, and noise pollution.",
            topics: [
                {
                    topicNum: 1,
                    title: "Acoustics, Vocal Chords & Wave Mechanics",
                    visualScene: "cell-organelles",
                    visualLabel: "3D Longitudinal Compression Sound Wave Visualizer",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Vibrations, Medium Propagation & Hearing Range",
                            textbookIdea: "Sound is produced by <span class=\"underlined-concept\" data-concept=\"vibrating-bodies\">vibrating bodies</span>. It travels as a longitudinal mechanical wave requiring a material medium (solid, liquid, or gas) and cannot travel through a vacuum. The human ear perceives frequencies between <span class=\"underlined-concept\" data-concept=\"audible-range\">20 Hz and 20,000 Hz</span>. Loudness depends on amplitude (Loudness ∝ Amplitude²), while pitch (shrillness) depends on frequency.",
                            easyExplanation: "Every sound you hear began as a physical jiggle! When you pluck a guitar string, it rapidly shakes the surrounding air molecules back and forth in waves. Those invisible ripples strike your eardrum, and your brain translates them into music!",
                            visualScene: "cell-organelles",
                            visualLabel: "3D Tympanic Eardrum Vibration Mechanics"
                        }
                    ],
                    underlinedCards: [
                        { id: "vibrating-bodies", word: "Vibrating Body", meaning: "A physical object undergoing rapid back-and-forth periodic oscillation that generates acoustic pressure waves.", simpleExplanation: "Something shaking rapidly back and forth to create sound.", example: "Vocal cords vibrating inside your throat as you speak.", visual: "🔊" },
                        { id: "audible-range", word: "Audible Range", meaning: "The acoustic spectrum detectable by normal human hearing: approximately 20 Hertz to 20,000 Hertz.", simpleExplanation: "The sound pitches human ears can actually hear.", example: "Frequencies below 20 Hz (infrasound) and above 20 kHz (ultrasound) are inaudible to humans.", visual: "👂" }
                    ],
                    remember: "Sound travels FASTEST in solids (e.g. steel ~5,000 m/s), slower in liquids (~1,500 m/s in water), and slowest in gases (~340 m/s in air). It CANNOT travel through a vacuum.",
                    funFact: "Bats navigate pitch-black caves and capture mosquitoes using ultrasonic echo echolocation beyond 100,000 Hertz!",
                    realLife: "Ultrasound scanning machines in medical clinics use frequencies above 2 MHz to image developing babies inside the womb without harmful radiation.",
                    vocabulary: [
                        { word: "Frequency (Hz)", meaning: "Number of complete oscillations or wave cycles occurring per second." },
                        { word: "Amplitude", meaning: "The maximum displacement of a vibrating particle from its mean resting position." }
                    ],
                    summary: [
                        "Sound is mechanical energy produced by vibrating physical matter.",
                        "Sound requires a material medium to propagate; it cannot travel in a vacuum.",
                        "Audible human hearing range spans 20 Hz to 20,000 Hz.",
                        "Loudness is determined by amplitude; Pitch is determined by frequency.",
                        "Noise pollution causes hypertension, insomnia, and hearing impairment."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What is the audible frequency range of normal human hearing?", a: "20 Hz to 20,000 Hz." },
                        { level: "Understanding", q: "Why can astronauts on the Moon's surface not hear each other directly without radio headsets?", a: "The Moon has no atmosphere (vacuum), and mechanical sound waves cannot propagate without a material medium." },
                        { level: "Applying", q: "A tuning fork oscillates 500 times in 2 seconds. Calculate its frequency and time period.", a: "Frequency = 500 / 2 = 250 Hz. Time period T = 1 / 250 = 0.004 seconds." },
                        { level: "Analyzing", q: "How does the voice of a woman differ acoustically from the voice of a man?", a: "A woman's vocal cords are shorter and thinner, vibrating at a higher frequency, producing a higher pitch (shrillness); a man's voice has lower frequency and deeper pitch." },
                        { level: "Evaluating", q: "Why does lightning flash become visible several seconds before the thunderclap is heard?", a: "Light travels at 300,000,000 m/s (nearly instantaneous), while sound travels at only ~340 m/s through air." },
                        { level: "Creating", q: "Design a musical jal-tarang instrument using glass bowls and water.", a: "Fill 6 identical ceramic bowls with incrementally increasing water levels; striking them with wooden sticks produces distinct musical notes because shorter vibrating air columns yield higher frequencies." }
                    ],
                    quiz: [
                        { q: "Sound cannot propagate through which of the following?", options: ["Vacuum", "Steel rail", "Water", "Air"], correct: 0, exp: "Sound is a mechanical wave requiring a material medium." },
                        { q: "The pitch or shrillness of a sound is determined by its:", options: ["Frequency", "Amplitude", "Speed", "Loudness"], correct: 0, exp: "Higher frequency produces higher pitch." },
                        { q: "The loudness of sound depends on the wave's:", options: ["Amplitude", "Frequency", "Time period", "Pitch"], correct: 0, exp: "Loudness is proportional to amplitude squared." },
                        { q: "What is the SI unit of wave frequency?", options: ["Hertz (Hz)", "Decibel (dB)", "Meter", "Pascal"], correct: 0, exp: "Frequency is measured in Hertz (cycles per second)." },
                        { q: "Frequencies below 20 Hz, inaudible to human ears, are termed:", options: ["Infrasonic sounds", "Ultrasonic sounds", "Supersonic", "Audible"], correct: 0, exp: "Infrasound has frequencies below 20 Hz." }
                    ],
                    flashcards: [
                        { q: "What is the speed of sound in air?", a: "Approximately 340 meters per second (at 20°C)." },
                        { q: "What is Pitch?", a: "The shrillness of sound, governed by frequency." },
                        { q: "What is Loudness?", a: "The volume of sound, governed by amplitude." },
                        { q: "What is Infrasound?", a: "Sound below 20 Hz." },
                        { q: "What is Ultrasound?", a: "Sound above 20,000 Hz." }
                    ],
                    comparison: {
                        title: "Loudness vs. Pitch",
                        headers: ["Characteristic", "Loudness", "Pitch (Shrillness)"],
                        rows: [
                            ["Determining Factor", "Amplitude of the vibrating wave (Loudness ∝ Amplitude²)", "Frequency of wave oscillations (cycles per second)"],
                            ["Perception", "Volume intensity: faint whisper vs. roaring thunder", "Acoustic shrillness: deep lion roar vs. high-pitched bird chirp"],
                            ["Measurement Unit", "Decibels (dB)", "Hertz (Hz)"]
                        ],
                        vsSummary: "Loudness corresponds to wave amplitude and energy, whereas pitch corresponds to vibration frequency and shrillness."
                    }
                }
            ],
            exam: [
                { q: "In human beings, sound is produced by the vibration of vocal cords in the:", options: ["Larynx (Voice Box)", "Pharynx", "Trachea", "Esophagus"], correct: 0, exp: "Vocal cords in the larynx vibrate during exhalation." },
                { q: "The thin membrane stretched tightly across the human ear canal is the:", options: ["Eardrum (Tympanic membrane)", "Cochlea", "Pinna", "Auditory nerve"], correct: 0, exp: "The eardrum vibrates when struck by sound waves." },
                { q: "The unit used to measure the loudness intensity of sound is:", options: ["Decibel (dB)", "Hertz", "Newton", "Joule"], correct: 0, exp: "Loudness is measured in decibels." },
                { q: "Sound levels exceeding what threshold become physically painful and hazardous noise pollution?", options: ["80 dB", "40 dB", "20 dB", "60 dB"], correct: 0, exp: "Continuous exposure above 80 dB damages auditory hair cells." },
                { q: "In which medium does sound travel with the greatest velocity?", options: ["Solid steel", "Water", "Air", "Vacuum"], correct: 0, exp: "Steel transmits sound at ~5,000 m/s due to high elastic density." },
                { q: "Ultrasound scanners used in medical diagnostics utilize sound frequencies:", options: ["Above 20,000 Hz", "Below 20 Hz", "Between 20 and 100 Hz", "At 500 Hz"], correct: 0, exp: "Medical ultrasound uses 2 MHz to 15 MHz." },
                { q: "Which animal communicates using infrasonic rumbles over long distances?", options: ["Elephants and Whales", "Dogs", "Bats", "Mosquitoes"], correct: 0, exp: "Elephants generate infrasound below 20 Hz." },
                { q: "Dogs can perceive high-pitched ultrasonic whistles up to what frequency?", options: ["40,000 Hz to 50,000 Hz", "1,000 Hz", "20,000 Hz", "5,000 Hz"], correct: 0, exp: "Galton whistles emit sounds dogs hear easily." },
                { q: "The time taken by a vibrating pendulum to complete one full oscillation is its:", options: ["Time period", "Frequency", "Amplitude", "Wavelength"], correct: 0, exp: "Time period T = 1 / frequency." },
                { q: "If the amplitude of a vibrating body is tripled, its loudness increases by:", options: ["9 times", "3 times", "6 times", "27 times"], correct: 0, exp: "Loudness is proportional to amplitude squared: 3² = 9." },
                { q: "The shrill, buzzing sound of a buzzing mosquito is due to:", options: ["High vibration frequency of wings (~500 Hz)", "High amplitude", "Low frequency", "Large body"], correct: 0, exp: "Rapid wing beats produce high pitch." },
                { q: "A lion's roar is extremely loud because of its:", options: ["Large amplitude", "High frequency", "Short wavelength", "Zero amplitude"], correct: 0, exp: "Deep roars have large amplitude." },
                { q: "Noise pollution can cause which human physiological condition?", options: ["Hypertension (high blood pressure) and insomnia", "Malaria", "Fractures", "Anemia"], correct: 0, exp: "Chronic noise induces cardiovascular stress." },
                { q: "Planting rows of green trees along highways to absorb and muffle traffic sound is called:", options: ["Green Muffler project", "Afforestation only", "Greenhouse effect", "Sound barrier wall"], correct: 0, exp: "Green Mufflers use foliage to attenuate acoustic noise." },
                { q: "The three tiny interconnected bones in the human middle ear are:", options: ["Malleus (Hammer), Incus (Anvil), Stapes (Stirrup)", "Femur, Tibia, Fibula", "Radius, Ulna, Humerus", "Carpals, Metacarpals, Phalanges"], correct: 0, exp: "Auditory ossicles amplify tympanic vibrations." },
                { q: "The smallest bone in the entire human body is the:", options: ["Stapes (Stirrup) in the middle ear", "Nasal bone", "Finger phalanx", "Rib"], correct: 0, exp: "The stapes measures only 3 mm in length." },
                { q: "An echo can be clearly heard if the minimum distance to the reflecting wall is at least:", options: ["17.2 meters (in air at 20°C)", "5 meters", "100 meters", "1 meter"], correct: 0, exp: "Brain retains sound for 0.1 s; 344 × 0.1 / 2 = 17.2 m." },
                { q: "SONAR (Sound Navigation and Ranging) on submarines uses which sound waves?", options: ["Ultrasonic sound waves", "Infrasonic sound waves", "Audible speech", "Radio waves only"], correct: 0, exp: "High-frequency ultrasound maps ocean beds." },
                { q: "Which part of the inner ear converts fluid wave vibrations into electrical nerve impulses?", options: ["Cochlea", "Eardrum", "Pinna", "Eustachian tube"], correct: 0, exp: "The cochlea contains hair cells generating neural signals." },
                { q: "Can sound travel through an empty bell jar from which all air has been evacuated with a vacuum pump?", options: ["No, sound completely disappears in a vacuum", "Yes, louder than before", "Yes, at half speed", "Only if it is loud"], correct: 0, exp: "Sound cannot travel across empty space without particles." }
            ]
        },
        {
            chapterNum: 6,
            title: "Coal and Petroleum",
            summary: "Understand fossil fuel genesis, carbonization, fractional distillation fractions, coke, coal tar, and energy conservation.",
            topics: [
                {
                    topicNum: 1,
                    title: "Fossil Fuel Formation & Fractional Distillation",
                    visualScene: "cell-organelles",
                    visualLabel: "3D Fractional Distillation Tower & Hydrocarbon Separation",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Carbonization & Petroleum Refining",
                            textbookIdea: "Coal, petroleum, and natural gas are exhaustible natural resources formed from the dead remains of living organisms buried deep under the Earth millions of years ago, known as <span class=\"underlined-concept\" data-concept=\"fossil-fuels\">Fossil Fuels</span>. The slow chemical process of conversion of dead vegetation into coal under extreme heat and pressure is called <span class=\"underlined-concept\" data-concept=\"carbonization\">carbonization</span>. Petroleum is refined by <span class=\"underlined-concept\" data-concept=\"fractional-distillation\">fractional distillation</span> in a fractionating column based on boiling points.",
                            easyExplanation: "Millions of years before humans existed, dense ancient forests and microscopic sea creatures died and were buried under tons of mud and rock. Crushed under planetary heat and pressure, they slowly transformed into the black coal and golden crude oil that power our cars and factories today!",
                            visualScene: "cell-organelles",
                            visualLabel: "3D Geologic Fossilization & Petroleum Seepage"
                        }
                    ],
                    underlinedCards: [
                        { id: "fossil-fuels", word: "Fossil Fuels", meaning: "Combustible geologic deposits of organic materials, formed from decayed plants and animals converted by heat and pressure over hundreds of millions of years.", simpleExplanation: "Ancient buried sunlight turned into coal, oil, and gas.", example: "Coal, crude oil, natural gas.", visual: "🪨" },
                        { id: "carbonization", word: "Carbonization", meaning: "The slow biological and thermodynamic conversion of dead vegetable matter into high-carbon coal over geologic eras.", simpleExplanation: "Slow cooking of ancient forests into black coal.", example: "Formation of anthracite and bituminous coal.", visual: "⛏️" },
                        { id: "fractional-distillation", word: "Fractional Distillation", meaning: "Separation of crude petroleum into fractions having different boiling point ranges in a tall fractionating column.", simpleExplanation: "Boiling crude oil to separate petrol, diesel, and kerosene.", example: "Refining crude oil into LPG, petrol, aviation fuel, and bitumen.", visual: "🏭" }
                    ],
                    remember: "Petroleum is often called 'Black Gold' because of its extraordinary commercial value and versatility in manufacturing thousands of petrochemicals.",
                    funFact: "The world's very first oil well was drilled in Titusville, Pennsylvania, USA in 1859; India's first oil well was drilled at Makum in Assam in 1867!",
                    realLife: "The Petroleum Conservation Research Association (PCRA) in India advises citizens to drive at moderate constant speeds and check tire pressures to conserve fuel.",
                    vocabulary: [
                        { word: "Coke", meaning: "An almost pure, tough, porous black form of carbon left after destructive distillation of coal." },
                        { word: "Bitumen", meaning: "A heavy black petroleum residue used for surfacing roads, replacing traditional coal tar." }
                    ],
                    summary: [
                        "Fossil fuels (coal, petroleum, natural gas) are non-renewable exhaustible resources.",
                        "Carbonization converts ancient vegetation into carbon-rich coal.",
                        "Destructive distillation of coal yields coke, coal tar, and coal gas.",
                        "Fractional distillation of petroleum yields LPG, petrol, kerosene, diesel, lubricating oil, and bitumen.",
                        "Compressed Natural Gas (CNG) is a cleaner alternative fuel producing minimal pollution."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What is carbonization?", a: "The slow geological process of conversion of dead organic vegetation into coal under extreme heat and pressure." },
                        { level: "Understanding", q: "Why is Compressed Natural Gas (CNG) called a cleaner fuel than diesel?", a: "CNG burns completely without leaving toxic soot, unburnt smoke, or high sulfur emissions." },
                        { level: "Applying", q: "Name two fractions of petroleum used as household and vehicle fuels.", a: "LPG (Liquefied Petroleum Gas for cooking) and Petrol / Diesel (for automobiles)." },
                        { level: "Analyzing", q: "Why are fossil fuels categorized as exhaustible natural resources?", a: "Because nature requires millions of years to synthesize them, while human society is consuming them in just a few centuries." },
                        { level: "Evaluating", q: "Assess the role of coke in the industrial manufacturing of steel.", a: "Coke acts as an almost pure carbon reducing agent that strips oxygen from iron ore (haematite) inside blast furnaces to produce elemental iron." },
                        { level: "Creating", q: "Propose three practical driving tips recommended by PCRA to maximize vehicle fuel economy.", a: "Drive at constant moderate speeds (45-55 km/h), switch off the engine at traffic red lights, and ensure correct tire pressure." }
                    ],
                    quiz: [
                        { q: "The slow process of conversion of dead vegetation into coal is termed:", options: ["Carbonization", "Distillation", "Combustion", "Vaporization"], correct: 0, exp: "Carbonization creates coal over geologic time." },
                        { q: "Which almost pure form of carbon is used in the extraction of metals like iron?", options: ["Coke", "Coal tar", "Coal gas", "Bitumen"], correct: 0, exp: "Coke is ~98% pure carbon used as a metallurgical reducing agent." },
                        { q: "Petroleum is referred to in global commerce as:", options: ["Black Gold", "Liquid Diamond", "Brown Platinum", "Black Silver"], correct: 0, exp: "Due to immense commercial value, petroleum is called Black Gold." },
                        { q: "Which product obtained from petroleum refining is used for surfacing roads?", options: ["Bitumen", "Coke", "Coal gas", "Paraffin wax"], correct: 0, exp: "Bitumen has largely replaced coal tar for road macadam." },
                        { q: "The cleanest burning fossil fuel with minimal carbon soot is:", options: ["Compressed Natural Gas (CNG)", "Diesel", "Coal", "Furnace oil"], correct: 0, exp: "CNG burns cleanly with high efficiency." }
                    ],
                    flashcards: [
                        { q: "What are Fossil Fuels?", a: "Exhaustible fuels formed from ancient organic remains over millions of years." },
                        { q: "What is Carbonization?", a: "Slow conversion of dead plants into coal under heat and pressure." },
                        { q: "What is Coke?", a: "A tough, porous, almost pure carbon residue of coal." },
                        { q: "What is CNG?", a: "Compressed Natural Gas, stored under high pressure." },
                        { q: "What is Bitumen used for?", a: "Surfacing roads and manufacturing paints." }
                    ],
                    comparison: {
                        title: "Coal vs. Petroleum",
                        headers: ["Characteristic", "Coal", "Petroleum (Crude Oil)"],
                        rows: [
                            ["Origin", "Formed primarily from ancient swamp vegetation and dense terrestrial forests", "Formed from marine microscopic organisms and algae on ancient ocean beds"],
                            ["Physical State", "Solid black sedimentary mineral rock", "Dark, viscous, oily liquid mixture of hydrocarbons"],
                            ["Primary Byproducts", "Coke, Coal Tar, Coal Gas", "LPG, Petrol, Kerosene, Diesel, Lubricating Oil, Bitumen"]
                        ],
                        vsSummary: "Coal originates from terrestrial forest swamps, while petroleum forms from marine plankton under ocean sediments."
                    }
                }
            ],
            exam: [
                { q: "Where was India's first commercial petroleum oil well drilled in 1867?", options: ["Makum, Assam", "Bombay High", "Ankleshwar, Gujarat", "KG Basin, Andhra Pradesh"], correct: 0, exp: "Drilled at Makum in Assam." },
                { q: "Which fraction of petroleum is used as aviation fuel in jet passenger planes?", options: ["Special purified Kerosene", "Diesel", "Petrol", "LPG"], correct: 0, exp: "Aviation turbine fuel is specialized purified kerosene." },
                { q: "Paraffin wax obtained from petroleum refining is used to make:", options: ["Candles, vaseline, and ointments", "Car tires", "Steel", "Cement"], correct: 0, exp: "Used for candles and pharmaceutical ointments." },
                { q: "Coal gas was first used for municipal street lighting in London around:", options: ["1810", "1900", "1750", "1950"], correct: 0, exp: "London introduced coal gas street lighting in 1810." },
                { q: "The main constituent hydrocarbon present in Natural Gas is:", options: ["Methane (CH4)", "Butane", "Propane", "Ethane"], correct: 0, exp: "Natural gas contains over 85-95% methane." },
                { q: "LPG supplied in domestic household cooking cylinders consists primarily of:", options: ["Butane and Propane", "Methane only", "Hydrogen", "Carbon monoxide"], correct: 0, exp: "LPG is pressurized liquefied butane and propane." },
                { q: "The pungent odor added to LPG cylinders to detect dangerous gas leaks is caused by:", options: ["Ethyl mercaptan", "Ammonia", "Sulfur dioxide", "Chlorine"], correct: 0, exp: "Ethyl mercaptan provides a telltale odor for safety." },
                { q: "Which country holds the largest proven coal reserves in the world?", options: ["United States", "India", "Saudi Arabia", "Australia"], correct: 0, exp: "The USA holds the largest global coal reserves." },
                { q: "Petrochemicals are chemical substances derived from:", options: ["Petroleum and Natural Gas", "Wood pulp", "Iron ore", "Limestone"], correct: 0, exp: "Petrochemicals synthesize plastics, drugs, and synthetic fibers." },
                { q: "Which variety of coal has the highest carbon percentage (~90%) and calorific value?", options: ["Anthracite", "Bituminous", "Lignite", "Peat"], correct: 0, exp: "Anthracite is the highest rank metamorphic coal." },
                { q: "The lowest rank, brown-colored early-stage coal with high moisture is:", options: ["Lignite / Peat", "Anthracite", "Bituminous", "Coke"], correct: 0, exp: "Peat and lignite have low carbon and high moisture." },
                { q: "Offshore oil drilling platform 'Bombay High' is located in the:", options: ["Arabian Sea", "Bay of Bengal", "Indian Ocean", "Gulf of Mannar"], correct: 0, exp: "Located ~160 km off the coast of Mumbai in the Arabian Sea." },
                { q: "What environmental organization promotes fuel conservation in India?", options: ["PCRA (Petroleum Conservation Research Association)", "ISRO", "DRDO", "CSIR"], correct: 0, exp: "PCRA educates the public on petroleum conservation." },
                { q: "Destructive distillation of coal involves heating coal strongly:", options: ["In the complete absence of air", "In excess oxygen", "With boiling water", "Under open sunlight"], correct: 0, exp: "Pyrolysis without oxygen breaks coal into volatiles." },
                { q: "Naphthalene balls used to repel moths and insects are obtained from:", options: ["Coal tar", "Petroleum jelly", "Coke", "Natural gas"], correct: 0, exp: "Distillation of coal tar yields naphthalene." },
                { q: "Uncontrolled combustion of coal and petroleum in vehicles releases soot and:", options: ["Greenhouse gases and acid rain precursors (CO2, SO2, NOx)", "Pure oxygen", "Ozone only", "Helium"], correct: 0, exp: "Fossil combustion emits greenhouse gases and sulfur oxides." },
                { q: "Can fossil fuels be synthesized artificially in high school laboratories?", options: ["No, nature requires specific geologic pressure and millions of years", "Yes, in 10 minutes", "Yes, using sugar and acid", "Always"], correct: 0, exp: "Geologic timescales cannot be artificially accelerated." },
                { q: "Which of the following is an inexhaustible natural resource?", options: ["Sunlight and Wind energy", "Coal", "Petroleum", "Natural gas"], correct: 0, exp: "Solar and wind are limitless renewable energies." },
                { q: "Petroleum was formed from the remains of organisms that lived in the:", options: ["Sea / Oceans", "Dense mountain forests", "Deserts", "Polar ice caps"], correct: 0, exp: "Marine plankton buried under ocean sediment." },
                { q: "Refining of petroleum involves separation of fractions by exploiting differences in their:", options: ["Boiling points", "Colors", "Densities only", "Magnetism"], correct: 0, exp: "Fractional distillation separates hydrocarbons by boiling point." }
            ]
        },
        {
            chapterNum: 7,
            title: "Combustion and Flame",
            summary: "Explore ignition temperatures, fire triangle, fire extinguishers, flame zones, and fuel calorific values.",
            topics: [
                {
                    topicNum: 1,
                    title: "Combustion Dynamics, Flame Structure & Fuels",
                    visualScene: "cell-organelles",
                    visualLabel: "3D Candle Flame Zones & Combustion Thermals Visualizer",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Ignition Temperature & The Fire Triangle",
                            textbookIdea: "A chemical process in which a substance reacts with oxygen to give off heat and light is called <span class=\"underlined-concept\" data-concept=\"combustion\">Combustion</span>. The lowest temperature at which a substance catches fire is its <span class=\"underlined-concept\" data-concept=\"ignition-temperature\">Ignition Temperature</span>. Substances with very low ignition temperatures that catch fire easily with a flame are called inflammable substances (e.g. petrol, alcohol, LPG). A candle flame has three distinct zones: dark inner zone, luminous middle zone, and non-luminous outer zone.",
                            easyExplanation: "For fire to burn, you need three ingredients together: Fuel to burn, Oxygen from the air, and enough Heat to reach the ignition temperature! If you remove any one of these three—by spraying water to cool it down, or smothering it with a blanket—the fire instantly dies!",
                            visualScene: "cell-organelles",
                            visualLabel: "3D Three Zones of Candle Flame"
                        }
                    ],
                    underlinedCards: [
                        { id: "combustion", word: "Combustion", meaning: "An exothermic chemical reaction between a fuel and an oxidant (oxygen) accompanied by the production of heat and light.", simpleExplanation: "Rapid burning of a fuel with oxygen releasing heat.", example: "Burning of wood, wax, or LPG gas.", visual: "🔥" },
                        { id: "ignition-temperature", word: "Ignition Temperature", meaning: "The minimum critical temperature to which a combustible substance must be heated in air before it can catch fire.", simpleExplanation: "The temperature a fuel must reach before it can burst into flame.", example: "Kerosene catches fire at a lower temperature than firewood.", visual: "🌡️" }
                    ],
                    remember: "Water should NEVER be used to extinguish electrical fires (risk of electrocution) or petrol/oil fires (oil floats on water and spreads the fire). Carbon dioxide (CO2) is the best extinguisher for both.",
                    funFact: "Goldsmiths blow through a brass blowpipe into the outermost non-luminous blue zone of a flame because it is the hottest zone (>1400°C) with complete oxygen combustion!",
                    realLife: "Modern commercial buildings and school science labs are equipped with pressurized Carbon Dioxide (CO2) fire extinguishers that smother flames without conducting electricity.",
                    vocabulary: [
                        { word: "Calorific Value", meaning: "The amount of heat energy liberated by the complete combustion of 1 kilogram of a fuel, measured in kJ/kg." },
                        { word: "Spontaneous Combustion", meaning: "Combustion occurring suddenly without the application of any external heat source." }
                    ],
                    summary: [
                        "Combustion requires fuel, oxygen, and heat exceeding the ignition temperature.",
                        "Inflammable substances have low ignition temperatures and catch fire easily.",
                        "Water cools fires; CO2 displaces oxygen and blankets electrical and oil fires.",
                        "Flame zones: Outer (blue, hottest, complete combustion), Middle (yellow, luminous), Inner (black, unburnt wax).",
                        "Hydrogen possesses the highest calorific value (~150,000 kJ/kg)."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What are the three essential requirements for combustion to occur?", a: "Fuel, Oxygen (air), and Heat (to attain ignition temperature) — the Fire Triangle." },
                        { level: "Understanding", q: "Why is water ineffective and dangerous for extinguishing oil and petrol fires?", a: "Oil is less dense than water and floats on top, continuing to burn while spreading across flowing water." },
                        { level: "Applying", q: "A paper cup filled with water can be heated over a candle without catching fire. Explain why.", a: "Heat supplied to the cup is immediately transferred to water via conduction; the paper never reaches its ignition temperature until water boils off." },
                        { level: "Analyzing", q: "Why does a goldsmith use the outermost zone of a flame to melt gold and silver?", a: "The outermost zone has unlimited oxygen for complete combustion, making it the hottest non-luminous part of the flame." },
                        { level: "Evaluating", q: "Calculate the calorific value if 4.5 kg of fuel produces 180,000 kJ of heat.", a: "Calorific value = Total heat / Mass = 180,000 kJ / 4.5 kg = 40,000 kJ/kg." },
                        { level: "Creating", q: "Design a household fire-safety evacuation protocol for an apartment complex.", a: "Sound alarm, never use elevators, crawl low beneath smoke, close doors to isolate flame, and assemble at designated open-ground points." }
                    ],
                    quiz: [
                        { q: "The lowest temperature at which a substance catches fire is called its:", options: ["Ignition temperature", "Boiling point", "Melting point", "Critical point"], correct: 0, exp: "Ignition temperature is the threshold for burning." },
                        { q: "Which gas is universally regarded as the best extinguisher for electrical and oil fires?", options: ["Carbon dioxide (CO2)", "Water", "Oxygen", "Nitrogen"], correct: 0, exp: "CO2 cuts off oxygen without conducting electrical current." },
                        { q: "Which zone of a candle flame is the hottest?", options: ["Outermost non-luminous blue zone", "Middle luminous yellow zone", "Innermost dark zone", "The wick base"], correct: 0, exp: "Complete combustion occurs in the outer blue mantle." },
                        { q: "The amount of heat liberated by burning 1 kg of fuel completely is called its:", options: ["Calorific value", "Specific heat", "Ignition value", "Thermal capacity"], correct: 0, exp: "Calorific value is measured in kJ/kg." },
                        { q: "Which fuel has the highest calorific value of all known fuels?", options: ["Hydrogen (150,000 kJ/kg)", "LPG (55,000 kJ/kg)", "Petrol (45,000 kJ/kg)", "Coal (30,000 kJ/kg)"], correct: 0, exp: "Hydrogen generates 150,000 kJ per kilogram." }
                    ],
                    flashcards: [
                        { q: "What is the Fire Triangle?", a: "Fuel, Oxygen, and Heat." },
                        { q: "What is Ignition Temperature?", a: "The minimum temperature at which a substance catches fire." },
                        { q: "What is the hottest flame zone?", a: "The outer non-luminous blue zone." },
                        { q: "What is Calorific Value unit?", a: "Kilojoules per kilogram (kJ/kg)." },
                        { q: "Why does CO2 extinguish fire?", a: "It is denser than air, blanketing fuel and cutting off oxygen." }
                    ],
                    comparison: {
                        title: "Rapid Combustion vs. Spontaneous Combustion",
                        headers: ["Parameter", "Rapid Combustion", "Spontaneous Combustion"],
                        rows: [
                            ["Trigger", "Requires an external spark, match, or ignition flame to start", "Occurs spontaneously without any external heat source"],
                            ["Speed & Heat", "Burns swiftly releasing large amounts of heat and light instantly", "Slow internal oxidation builds up heat until spontaneous ignition"],
                            ["Real Example", "Lighting a kitchen gas burner with a spark lighter", "Spontaneous coal dust explosions in deep mines or phosphorus igniting in air"]
                        ],
                        vsSummary: "Rapid combustion requires an external spark to trigger burning, whereas spontaneous combustion ignites without an external heat source."
                    }
                }
            ],
            exam: [
                { q: "Which element catches fire spontaneously in air at room temperature?", options: ["White Phosphorus", "Sulfur", "Iron", "Carbon"], correct: 0, exp: "White phosphorus ignites spontaneously at ~35°C." },
                { q: "The substance on the head of a modern safety matchstick contains a mixture of:", options: ["Antimony trisulfide and Potassium chlorate", "White phosphorus and sulfur", "Sodium chloride", "Charcoal only"], correct: 0, exp: "Striking surface has red phosphorus; head has antimony trisulfide and potassium chlorate." },
                { q: "The chemical present on the rubbing striking strip of a matchbox is:", options: ["Red phosphorus and powdered glass", "White phosphorus", "Pure sulfur", "Potassium chlorate"], correct: 0, exp: "Red phosphorus converts to white phosphorus upon friction." },
                { q: "Which of the following is an inflammable substance?", options: ["Petrol and Alcohol", "Glass", "Stone piece", "Iron nail"], correct: 0, exp: "Petrol and alcohol have very low ignition temperatures." },
                { q: "A person whose clothes catch fire should be immediately wrapped in a:", options: ["Thick woollen blanket", "Nylon cloth", "Polyester sheet", "Plastic cover"], correct: 0, exp: "A thick blanket smothers oxygen, extinguishing the flame." },
                { q: "Incomplete combustion of hydrocarbon fuels produces which deadly poisonous gas?", options: ["Carbon monoxide (CO)", "Carbon dioxide", "Oxygen", "Nitrogen"], correct: 0, exp: "Insufficient oxygen generates lethal carbon monoxide." },
                { q: "Combustion of which fuel produces sulfur dioxide gas responsible for respiratory diseases?", options: ["Coal and Diesel", "CNG", "Hydrogen", "Biogas"], correct: 0, exp: "Coal and diesel contain sulfur impurities." },
                { q: "Global warming caused by fossil fuel combustion is primarily driven by elevated levels of:", options: ["Carbon dioxide (CO2)", "Argon", "Oxygen", "Helium"], correct: 0, exp: "CO2 traps infrared radiation in the troposphere." },
                { q: "Unburnt fine carbon soot particles emitted during diesel combustion cause severe:", options: ["Respiratory illnesses such as asthma", "Skin burns only", "Broken bones", "Anemia"], correct: 0, exp: "Particulates lodge deep in human alveoli." },
                { q: "The unit of calorific value is expressed as:", options: ["kJ/kg", "J/s", "kJ/mol", "Calories/m"], correct: 0, exp: "Kilojoules per kilogram (kJ/kg)." },
                { q: "An explosion is a type of combustion where:", options: ["A sudden reaction produces immense heat, light, sound, and large gas volumes", "No gas is produced", "It only happens in water", "It is silent"], correct: 0, exp: "Explosions rapidly generate expanding shockwaves and gas." },
                { q: "Why does charcoal burn with a glow without producing a visible tall flame?", options: ["Charcoal does not vaporize during burning; only vaporizing substances form flames", "Charcoal is not combustible", "It has no heat", "It is made of water"], correct: 0, exp: "Only substances that vaporize when heated create flames (like wax or kerosene)." },
                { q: "The middle luminous zone of a candle flame appears yellow due to:", options: ["Glowing unburnt incandescent carbon particles", "Hydrogen burning", "Oxygen gas", "Wick burning"], correct: 0, exp: "Incandescent soot particles glow yellow in partial combustion." },
                { q: "Calorific value of Liquefied Petroleum Gas (LPG) is approximately:", options: ["55,000 kJ/kg", "10,000 kJ/kg", "25,000 kJ/kg", "150,000 kJ/kg"], correct: 0, exp: "LPG yields ~55,000 kJ/kg." },
                { q: "Calorific value of dry cow dung cake is approximately:", options: ["6,000 to 8,000 kJ/kg", "50,000 kJ/kg", "100,000 kJ/kg", "2,000 kJ/kg"], correct: 0, exp: "Cow dung has low calorific density (6,000-8,000 kJ/kg)." },
                { q: "What happens when a burning candle is covered with an inverted glass tumbler?", options: ["It extinguishes after a few seconds when oxygen is exhausted", "It burns brighter", "It burns forever", "The glass explodes"], correct: 0, exp: "Oxygen is depleted, collapsing combustion." },
                { q: "Which fuel is best suited for domestic rural cooking to minimize indoor smoke?", options: ["Biogas", "Wet firewood", "Dried leaves", "Crude oil"], correct: 0, exp: "Biogas burns smokelessly with high efficiency." },
                { q: "Forest fires during hot dry summers are examples of:", options: ["Spontaneous combustion of dry grass", "Explosion", "Slow rust", "Chemical synthesis"], correct: 0, exp: "Intense solar heat and dry winds spark spontaneous grass fires." },
                { q: "The black innermost zone around a candle wick consists of:", options: ["Unburnt wax vapors", "Hottest fire", "Carbon dioxide only", "Steam only"], correct: 0, exp: "No oxygen reaches the innermost zone; wax vapors remain unburnt." },
                { q: "Can a wet piece of green firewood catch fire as easily as dry wood?", options: ["No, moisture must evaporate first, keeping temperature below ignition point", "Yes, green wood burns faster", "They catch fire at identical speeds", "Water accelerates fire"], correct: 0, exp: "Water absorbs heat during evaporation, preventing ignition." }
            ]
        },
        {
            chapterNum: 8,
            title: "Conservation of Plants and Animals",
            summary: "Examine wildlife ecology, deforestation, biosphere reserves, Pachmarhi, Project Tiger, Red Data Book, and reforestation.",
            topics: [
                {
                    topicNum: 1,
                    title: "Ecosystem Conservation & Protected Reserves",
                    visualScene: "cell-organelles",
                    visualLabel: "3D Biosphere Reserve Zones & Wildlife Sanctuary Map",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Deforestation & Protected Conservation Areas",
                            textbookIdea: "Deforestation is the clearing of forests on a wide scale. It leads to increased atmospheric CO2, decreased rainfall, severe soil erosion, and desertification. To protect vulnerable biodiversity, governments establish <span class=\"underlined-concept\" data-concept=\"biosphere-reserves\">Biosphere Reserves</span>, <span class=\"underlined-concept\" data-concept=\"national-parks\">National Parks</span>, and Wildlife Sanctuaries. Pachmarhi Biosphere Reserve contains Satpura National Park and Bori Sanctuary.",
                            easyExplanation: "Forests are Earth's lungs and the natural home of millions of animals! When bulldozers cut down trees, topsoil washes away and animals lose their homes. By setting up national parks and biosphere reserves, we create safe, protected havens where nature thrives untouched.",
                            visualScene: "cell-organelles",
                            visualLabel: "3D Wildlife Sanctuary Habitat Zones"
                        }
                    ],
                    underlinedCards: [
                        { id: "biosphere-reserves", word: "Biosphere Reserve", meaning: "A large multipurpose protected area dedicated to the conservation of biodiversity and traditional tribal lifestyles.", simpleExplanation: "A massive protected zone for wildlife, plants, and local tribes.", example: "Pachmarhi Biosphere Reserve, Nilgiri Biosphere Reserve.", visual: "🏞️" },
                        { id: "national-parks", word: "National Park", meaning: "A strictly protected government reserve maintaining the natural ecosystem, wildlife, and historic monuments with zero human exploitation.", simpleExplanation: "Strictly protected wilderness where no grazing or hunting is allowed.", example: "Satpura National Park, Kaziranga National Park.", visual: "🐅" }
                    ],
                    remember: "Project Tiger was launched by the Government of India in 1973 to ensure the survival and maintenance of the tiger population in dedicated reserves.",
                    funFact: "Migratory birds like the Siberian Crane fly over 4,000 kilometers from freezing Siberia every winter to reach warm wetlands in India!",
                    realLife: "The Amrabad and Kawal tiger reserves in Telangana provide protected migratory corridors for Royal Bengal Tigers across the Deccan plateau.",
                    vocabulary: [
                        { word: "Endemic Species", meaning: "Species restricted exclusively to a specific geographic territory." },
                        { word: "Red Data Book", meaning: "International record maintained by IUCN cataloging endangered species." }
                    ],
                    summary: [
                        "Deforestation leads to global warming, erratic rainfall, and desertification.",
                        "Biosphere reserves contain Core, Buffer, and Transition zones.",
                        "Sanctuaries protect wild animals with regulated human rights.",
                        "Red Data Book records species threatened with extinction.",
                        "Recycling paper saves mature trees and conserves water/energy."
                    ],
                    blooms: [
                        { level: "Remembering", q: "Name India's first National Park established in 1936.", a: "Jim Corbett National Park (originally Hailey National Park)." },
                        { level: "Understanding", q: "Why does deforestation lead to an increased frequency of floods?", a: "Tree roots bind soil and foliage slows surface runoff; felling trees reduces water infiltration, causing immediate rapid surface flooding." },
                        { level: "Applying", q: "How does purchasing recycled paper notebooks support wildlife conservation?", a: "Every ton of recycled paper spares 17 mature trees and saves thousands of liters of clean water and electricity in pulp mills." },
                        { level: "Analyzing", q: "Explain the zonation of a Biosphere Reserve (Core, Buffer, Transition).", a: "Core zone: strictly zero human interference; Buffer zone: limited research and education; Transition zone: sustainable human settlements and agriculture." },
                        { level: "Evaluating", q: "Critique the role of apex predators like tigers in forest conservation.", a: "Tigers control herbivore populations (deer, wild boar); without tigers, overgrazing destroys forest saplings and destroys the ecosystem." },
                        { level: "Creating", q: "Propose a community-driven afforestation plan for degraded village commons.", a: "Select indigenous drought-hardy species (Neem, Jammi, Tamarind), establish a student-tended nursery, and protect saplings with bamboo tree guards." }
                    ],
                    quiz: [
                        { q: "In which year was Project Tiger launched in India?", options: ["1973", "1950", "1985", "2000"], correct: 0, exp: "Project Tiger began in 1973 to preserve tigers." },
                        { q: "Pachmarhi Biosphere Reserve is located in which Indian state?", options: ["Madhya Pradesh", "Telangana", "Kerala", "Assam"], correct: 0, exp: "Pachmarhi is located in the Satpura range of Madhya Pradesh." },
                        { q: "The IUCN Red Data Book records:", options: ["Endangered and threatened species", "Historical monuments", "Weather patterns", "Mining sites"], correct: 0, exp: "IUCN tracks endangered global biodiversity." },
                        { q: "Which migratory bird flies thousands of miles from the Arctic tundra to India in winter?", options: ["Siberian Crane", "Peacock", "Pigeon", "Crow"], correct: 0, exp: "Siberian Cranes migrate to Bharatpur wetlands." },
                        { q: "The gradual conversion of fertile agricultural topsoil into arid desert is called:", options: ["Desertification", "Reforestation", "Eutrophication", "Salinization"], correct: 0, exp: "Desertification strips organic matter." }
                    ],
                    flashcards: [
                        { q: "What is Deforestation?", a: "Large-scale clearing and destruction of forests." },
                        { q: "What is an Endemic Species?", a: "Species found naturally only in one specific geographic area." },
                        { q: "What is the Red Data Book?", a: "Official international record of endangered species." },
                        { q: "What is Project Tiger?", a: "Government initiative launched in 1973 to protect tigers." },
                        { q: "What is Reforestation?", a: "Planting new trees to regenerate destroyed forests." }
                    ],
                    comparison: {
                        title: "In-situ vs. Ex-situ Conservation",
                        headers: ["Parameter", "In-situ Conservation (On-site)", "Ex-situ Conservation (Off-site)"],
                        rows: [
                            ["Location", "Protection inside the natural wild native habitat", "Protection outside the native habitat in artificial human-managed facilities"],
                            ["Ecological Context", "Species continue evolutionary processes in wilderness", "Species isolated from natural predator-prey dynamics"],
                            ["Examples", "National Parks, Biosphere Reserves, Wildlife Sanctuaries", "Zoological parks, Botanical gardens, Cryogenic seed banks"]
                        ],
                        vsSummary: "In-situ protects species in their native wild ecosystems, whereas ex-situ safeguards threatened organisms in controlled artificial environments."
                    }
                }
            ],
            exam: [
                { q: "Kaziranga National Park in Assam is world-famous for protecting the:", options: ["One-horned Rhinoceros", "Royal Bengal Tiger only", "Asiatic Lion", "Snow Leopard"], correct: 0, exp: "Kaziranga harbors the world's largest population of great one-horned rhinos." },
                { q: "Gir National Park in Gujarat is the exclusive natural home of the:", options: ["Asiatic Lion", "Bengal Tiger", "Cheetah", "Indian Rhino"], correct: 0, exp: "Gir is the last refuge of wild Asiatic lions." },
                { q: "Which national park is situated inside the Pachmarhi Biosphere Reserve?", options: ["Satpura National Park", "Kanha", "Bandhavgarh", "Pench"], correct: 0, exp: "Satpura National Park forms the core of Pachmarhi." },
                { q: "The finest teak wood forest in India is protected within:", options: ["Satpura National Park", "Sundarbans", "Jim Corbett", "Periyar"], correct: 0, exp: "Satpura is celebrated for virgin teak trees." },
                { q: "Prehistoric rock shelters with ancient cave paintings are preserved inside:", options: ["Satpura National Park (Bhimbetka region)", "Sundarbans", "Thar Desert", "Manas"], correct: 0, exp: "55 rock shelters depict Stone Age human history." },
                { q: "Species that no longer exist anywhere on planet Earth are called:", options: ["Extinct species", "Endemic species", "Endangered species", "Vulnerable species"], correct: 0, exp: "Extinct species have died out completely (e.g. Dodo, Passenger Pigeon)." },
                { q: "The Indian Wild Ass is an endemic mammal found exclusively in the:", options: ["Rann of Kutch (Gujarat)", "Thar Desert", "Himalayas", "Nilgiris"], correct: 0, exp: "Native to the saline mud flats of the Rann of Kutch." },
                { q: "How many biosphere reserves have been established across India to date?", options: ["18 Biosphere Reserves", "5", "50", "100"], correct: 0, exp: "India has 18 designated biosphere reserves." },
                { q: "What is the primary objective of the Forest Conservation Act passed in India in 1980?", options: ["Preservation of natural forests and meeting basic community needs", "Commercial logging", "Building dams", "Clearing farmland"], correct: 0, exp: "The 1980 Act strictly regulates forest diversion." },
                { q: "Removal of topsoil by wind and water, exposing hard rocky subsoil, leads to:", options: ["Desertification", "Reforestation", "Humus creation", "Biodiversity boom"], correct: 0, exp: "Loss of topsoil destroys fertility, causing desertification." },
                { q: "Paper manufacturing consumes large quantities of which natural resources?", options: ["Forest trees, clean water, and harmful bleaching chemicals", "Only sand", "Plastic only", "Petroleum"], correct: 0, exp: "Pulp mills require massive wood and water volumes." },
                { q: "Which animal is the mascot of the World Wildlife Fund (WWF)?", options: ["Giant Panda", "Bengal Tiger", "Polar Bear", "Elephant"], correct: 0, exp: "The Giant Panda is WWF's global emblem." },
                { q: "Bharatpur Bird Sanctuary (Keoladeo Ghana National Park) is famous for:", options: ["Winter migratory wetland birds", "Desert reptiles", "Tigers only", "Lions"], correct: 0, exp: "Renowned stopover for migratory waterfowl in Rajasthan." },
                { q: "A species facing an extremely high risk of extinction in the immediate future is:", options: ["Critically endangered", "Endemic", "Exotic", "Secure"], correct: 0, exp: "Critically endangered species stand on the brink of extinction." },
                { q: "The core zone of a biosphere reserve is legally reserved for:", options: ["Strict wildlife protection with zero human activity", "Hotels and tourism", "Mining", "Farming"], correct: 0, exp: "Core zones are strictly pristine sanctuaries." },
                { q: "Sundarbans National Park in West Bengal is globally renowned for its:", options: ["Mangrove forests and Royal Bengal Tigers", "Snow leopards", "One-horned rhinos", "Desert foxes"], correct: 0, exp: "World's largest halophytic tidal mangrove forest." },
                { q: "Migratory birds fly to distant lands during winter primarily to:", options: ["Escape inhospitable freezing climates and find food/nesting grounds", "Play", "Exercise", "Change feathers"], correct: 0, exp: "Extreme Arctic freezes force southward migration." },
                { q: "Reforestation can take place naturally if the deforested area is:", options: ["Left undisturbed without human interference", "Paved with asphalt", "Plowed for corn", "Sprayed with weedkiller"], correct: 0, exp: "Natural regeneration restores forest canopy over time." },
                { q: "Which bird species was driven to extinction by excessive hunting in North America by 1914?", options: ["Passenger Pigeon", "Eagle", "Penguin", "Ostrich"], correct: 0, exp: "Martha, the last Passenger Pigeon, died in Cincinnati Zoo in 1914." },
                { q: "Can planting non-native exotic eucalyptus trees restore a native biodiversity hotspot?", options: ["No, exotic monocultures deplete groundwater and do not support native fauna", "Yes, eucalyptus feeds all animals", "Yes, it is native", "Always"], correct: 0, exp: "Exotic species disrupt local ecological food webs." }
            ]
        },
        {
            chapterNum: 9,
            title: "Cellular Structure and Functions",
            summary: "Examine microscopic cytology, cell organelles, nucleus, chromosome genetics, and plant vs animal cell architecture.",
            topics: [
                {
                    topicNum: 1,
                    title: "Cell Organelles & Cytological Microscopy",
                    visualScene: "cell-organelles",
                    visualLabel: "3D Plant vs Animal Cell Interactive Organelle Model",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Cytology, Organelles & Cell Theory",
                            textbookIdea: "The cell is the basic structural and functional unit of all living organisms, first discovered in cork tissue by Robert Hooke in 1665. Organisms composed of a single cell are <span class=\"underlined-concept\" data-concept=\"unicellular\">unicellular</span> (e.g. Amoeba, Paramecium), while those with billions of cells are multicellular. A typical cell comprises a cell membrane, cytoplasm, and <span class=\"underlined-concept\" data-concept=\"nucleus\">nucleus</span>. Plant cells possess a rigid outer <span class=\"underlined-concept\" data-concept=\"cell-wall\">cell wall</span>, chloroplasts, and a large central vacuole.",
                            easyExplanation: "Cells are the microscopic living Lego bricks that build every living thing on Earth! Your skin, eyes, and muscles are made of trillions of cells. Inside each cell, tiny mini-organs called organelles make energy, clean up waste, and follow instructions from the master computer: the nucleus!",
                            visualScene: "cell-organelles",
                            visualLabel: "3D Clickable Organelles: Mitochondria & Nucleus"
                        }
                    ],
                    underlinedCards: [
                        { id: "unicellular", word: "Unicellular Organism", meaning: "A living entity consisting of only a single independent cell performing all vital metabolic functions.", simpleExplanation: "A microscopic creature made of only one cell.", example: "Amoeba, Paramecium, Chlamydomonas.", visual: "🔬" },
                        { id: "nucleus", word: "Nucleus", meaning: "The master control center of a eukaryotic cell bounded by a double nuclear membrane, containing nucleoplasm, nucleolus, and genetic chromosomes.", simpleExplanation: "The cell's brain carrying DNA instructions.", example: "Houses chromosomes that pass traits from parents to offspring.", visual: "🧬" },
                        { id: "cell-wall", word: "Plant Cell Wall", meaning: "A rigid, protective outer layer composed of tough cellulose surrounding plant cell membranes, providing structural rigidity and turgor.", simpleExplanation: "A strong cardboard-like outer shell found only in plant cells.", example: "Enables tall trees to stand upright against wind and weather.", visual: "🛡️" }
                    ],
                    remember: "Mitochondria are celebrated as the 'Powerhouses of the Cell' because they generate adenosine triphosphate (ATP) through cellular respiration.",
                    funFact: "The largest single cell in the world is the egg of an ostrich, measuring over 15 centimeters in diameter and weighing over 1.4 kilograms!",
                    realLife: "Onion peel epidermal cells are used in school laboratories because single-layer transparent cells with clear cell walls and nuclei are easily stained with iodine.",
                    vocabulary: [
                        { word: "Cytoplasm", meaning: "The jelly-like fluid protoplasmic matrix filling the cell between membrane and nucleus." },
                        { word: "Chloroplast", meaning: "Green plastid containing chlorophyll for solar photosynthesis in plants." },
                        { word: "Vacuole", meaning: "A fluid-filled cellular storage vesicle; large in plants, tiny in animals." }
                    ],
                    summary: [
                        "Cells were first observed by Robert Hooke in 1665 using a primitive microscope.",
                        "Prokaryotic cells lack a defined nuclear membrane (bacteria); Eukaryotic cells possess a true membrane-bound nucleus.",
                        "Plant cells feature a cellulose cell wall, chloroplasts, and a large central vacuole.",
                        "Animal cells have flexible cell membranes, centrosomes, and smaller vacuoles.",
                        "Chromosomes in the nucleus carry genes transmitting hereditary characteristics."
                    ],
                    blooms: [
                        { level: "Remembering", q: "Who discovered the living cell and free-living microbes in pond water?", a: "Antonie van Leeuwenhoek in 1674 (Robert Hooke saw dead cork cells in 1665)." },
                        { level: "Understanding", q: "Why do plant cells require a rigid cell wall in addition to a cell membrane?", a: "Plants cannot move to escape harsh weather; the rigid cellulose wall withstands osmotic turgor pressure, wind, and temperature fluctuations." },
                        { level: "Applying", q: "Identify the stain used to visualize nuclei in human cheek cell temporary mounts.", a: "Methylene blue stain." },
                        { level: "Analyzing", q: "Differentiate between prokaryotic cells and eukaryotic cells.", a: "Prokaryotes (bacteria, blue-green algae) lack a nuclear membrane and membrane-bound organelles; eukaryotes (plants, animals, fungi) have a defined nucleus." },
                        { level: "Evaluating", q: "Why are lysosomes designated as the 'Suicide Bags' of a cell?", a: "When a cell is damaged or dies, lysosomes burst, and their powerful hydrolytic digestive enzymes consume and destroy their own cellular debris." },
                        { level: "Creating", q: "Construct a comparative table distinguishing an onion peel cell from a human cheek cell.", a: "Onion cell: rectangular, has rigid cell wall, large central vacuole, no centrosome; Cheek cell: irregular rounded shape, no cell wall, tiny vacuoles, has centrosome." }
                    ],
                    quiz: [
                        { q: "Who first discovered and named 'cells' in 1665 using cork bark?", options: ["Robert Hooke", "Robert Brown", "Louis Pasteur", "Gregor Mendel"], correct: 0, exp: "Robert Hooke examined thin cork slices under a microscope." },
                        { q: "The 'Powerhouse of the Cell' responsible for ATP energy synthesis is:", options: ["Mitochondria", "Ribosome", "Golgi apparatus", "Lysosome"], correct: 0, exp: "Mitochondria produce ATP via cellular respiration." },
                        { q: "Which organelle is found in plant cells but strictly ABSENT in animal cells?", options: ["Cell Wall and Chloroplasts", "Mitochondria", "Nucleus", "Ribosomes"], correct: 0, exp: "Cellulose cell walls and chloroplasts are exclusive to plants." },
                        { q: "The green pigment inside chloroplasts responsible for capturing sunlight is:", options: ["Chlorophyll", "Carotene", "Anthocyanin", "Hemoglobin"], correct: 0, exp: "Chlorophyll absorbs red and blue solar wavelengths." },
                        { q: "Thread-like genetic structures visible inside the nucleus during cell division are:", options: ["Chromosomes", "Ribosomes", "Vacuoles", "Plastids"], correct: 0, exp: "Chromosomes carry genes composed of DNA." }
                    ],
                    flashcards: [
                        { q: "What is a Cell?", a: "The fundamental structural and functional unit of life." },
                        { q: "Who discovered the cell?", a: "Robert Hooke in 1665." },
                        { q: "What is the Nucleus?", a: "The master control organelle carrying genetic information." },
                        { q: "What is a Prokaryote?", a: "A cell lacking a membrane-bound nucleus (e.g. bacteria)." },
                        { q: "What is the Powerhouse of the Cell?", a: "Mitochondria." }
                    ],
                    comparison: {
                        title: "Plant Cell vs. Animal Cell",
                        headers: ["Characteristic", "Plant Cell", "Animal Cell"],
                        rows: [
                            ["Cell Wall", "Present: a rigid outer cellulose wall provides shape and protection", "Absent: bounded solely by a flexible plasma membrane"],
                            ["Plastids / Chloroplasts", "Present: chloroplasts conduct photosynthesis", "Completely absent"],
                            ["Vacuole Size", "A single immense central vacuole occupying up to 90% volume", "Several tiny, transient, dispersed vacuoles"]
                        ],
                        vsSummary: "Plant cells feature rigid cellulose cell walls, chloroplasts, and massive vacuoles, which animal cells lack."
                    }
                }
            ],
            exam: [
                { q: "The jelly-like living substance encompassing cytoplasm and nucleus inside a cell is called:", options: ["Protoplasm", "Cell sap", "Serum", "Chlorophyll"], correct: 0, exp: "Purkinje coined 'protoplasm' for the living contents of the cell." },
                { q: "The largest single cell known to science is the:", options: ["Ostrich egg", "Human ovum", "Nerve cell (neuron)", "Amoeba"], correct: 0, exp: "An ostrich egg is a single giant cell ~15 cm long." },
                { q: "Long, branched cells that transmit electrical messages across the human nervous system are:", options: ["Neurons (Nerve cells)", "Red blood cells", "Muscle fibers", "Epithelial cells"], correct: 0, exp: "Neurons transmit electrical nerve impulses." },
                { q: "Which organelle manufactures proteins inside living cells?", options: ["Ribosomes", "Lysosomes", "Vacuoles", "Centrosome"], correct: 0, exp: "Ribosomes translate mRNA into polypeptide chains." },
                { q: "The cell membrane is scientifically described as selectively permeable because:", options: ["It allows only specific molecules to pass in and out while blocking others", "It lets everything pass", "It lets nothing pass", "It only allows air"], correct: 0, exp: "Selectively controls molecular transport." },
                { q: "Which scientist discovered the cell nucleus in 1831?", options: ["Robert Brown", "Robert Hooke", "Antonie van Leeuwenhoek", "Rudolf Virchow"], correct: 0, exp: "Robert Brown described the nucleus in orchid cells." },
                { q: "The units of inheritance located on chromosomes are called:", options: ["Genes", "Ribosomes", "Plastids", "Chromoplasts"], correct: 0, exp: "Genes are functional segments of DNA molecules." },
                { q: "Which of the following is a prokaryotic organism?", options: ["Cyanobacteria (Blue-green algae)", "Yeast", "Spirogyra", "Amoeba"], correct: 0, exp: "Bacteria and blue-green algae lack nuclear membranes." },
                { q: "Organelles that package and dispatch proteins synthesized in the cell are:", options: ["Golgi apparatus (Golgi bodies)", "Endoplasmic reticulum", "Mitochondria", "Lysosomes"], correct: 0, exp: "Golgi complexes modify, sort, and package proteins." },
                { q: "The rough appearance of Rough Endoplasmic Reticulum (RER) is due to attached:", options: ["Ribosomes", "Lysosomes", "Vacuoles", "Plastids"], correct: 0, exp: "Ribosomes stud the outer cytosolic face of RER." },
                { q: "A human red blood cell (RBC) is unique because mature human RBCs:", options: ["Lack a nucleus, maximizing hemoglobin oxygen-carrying capacity", "Have 10 nuclei", "Are rectangular", "Live forever"], correct: 0, exp: "Mature mammalian erythrocytes enucleate to carry more oxygen." },
                { q: "Amoeba captures food particles by extending temporary cell projections called:", options: ["Pseudopodia (false feet)", "Cilia", "Flagella", "Tentacles"], correct: 0, exp: "Pseudopodia engulf food via phagocytosis." },
                { q: "Chromoplasts containing orange and yellow pigments are responsible for the color of:", options: ["Ripe fruits and flower petals", "Green leaves", "White roots", "Bark"], correct: 0, exp: "Carotenoid-rich chromoplasts color petals and fruits." },
                { q: "Leucoplasts are specialized colorless plastids that store:", options: ["Starch, proteins, and oils", "Chlorophyll", "DNA only", "Waste"], correct: 0, exp: "Leucoplasts store starch (amyloplasts) and lipids." },
                { q: "The cell theory principle 'Omnis cellula e cellula' (all cells arise from pre-existing cells) was stated by:", options: ["Rudolf Virchow in 1855", "Schleiden", "Schwann", "Robert Hooke"], correct: 0, exp: "Virchow completed the cell doctrine." },
                { q: "The liquid present inside the large central vacuole of a plant cell is called:", options: ["Cell sap", "Blood", "Cytosol", "Serum"], correct: 0, exp: "Cell sap maintains cellular turgidity." },
                { q: "Which organelle aids in organizing spindle fibers during animal cell division?", options: ["Centrosome / Centriole", "Chloroplast", "Vacuole", "Ribosome"], correct: 0, exp: "Centrioles organize animal mitotic spindles." },
                { q: "White Blood Cells (WBCs) can change their shape like an Amoeba to:", options: ["Squeeze through capillary walls to engulf invading pathogens", "Carry oxygen", "Form clots", "Sleep"], correct: 0, exp: "Diapedesis and phagocytosis." },
                { q: "The magnification of a compound microscope with 10x eyepiece and 40x objective lens is:", options: ["400x", "50x", "4x", "4000x"], correct: 0, exp: "Total magnification = 10 × 40 = 400x." },
                { q: "Can an electron microscope resolve sub-cellular organelles in living, moving cells?", options: ["No, specimens must be dehydrated and placed in a high-vacuum chamber", "Yes, with color video", "Always", "In water"], correct: 0, exp: "Electron microscopy operates strictly in a high vacuum, killing specimens." }
            ]
        },
        {
            chapterNum: 10,
            title: "Reaching the Age of Adolescence",
            summary: "Explore adolescent puberty, endocrine glands, hormonal regulation, sex determination, reproductive hygiene, and emotional well-being.",
            topics: [
                {
                    topicNum: 1,
                    title: "Puberty, Endocrine Hormones & Genetics",
                    visualScene: "cell-organelles",
                    visualLabel: "3D Endocrine Gland System & Chromosomal Sex Determination",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Puberty, Hormonal Triggers & Secondary Sexual Traits",
                            textbookIdea: "The developmental period during which the human body undergoes changes leading to reproductive maturity is called <span class=\"underlined-concept\" data-concept=\"adolescence\">Adolescence</span> (typically ages 11 to 19). The onset of puberty is coordinated by hormones secreted by the pituitary gland (the master gland). Testes produce <span class=\"underlined-concept\" data-concept=\"testosterone\">testosterone</span> in boys, and ovaries produce <span class=\"underlined-concept\" data-concept=\"estrogen\">estrogen</span> in girls. Human body cells contain 23 pairs of chromosomes, including 1 pair of sex chromosomes (XX in females, XY in males).",
                            easyExplanation: "Adolescence is the bridge connecting childhood to adulthood! Your brain's master gland (the pituitary) flips on chemical messengers called hormones. These hormones trigger growth spurts, deepen boys' voices, develop girls' figures, and prepare your body for mature adulthood.",
                            visualScene: "cell-organelles",
                            visualLabel: "3D XX vs XY Chromosomal Fertilization Diagram"
                        }
                    ],
                    underlinedCards: [
                        { id: "adolescence", word: "Adolescence", meaning: "The transitional stage of physical and psychological human development occurring from puberty to adulthood (ages 11-19).", simpleExplanation: "The teenage growth period turning a child into an adult.", example: "Growth spurts, development of secondary sexual characteristics.", visual: "🌱" },
                        { id: "testosterone", word: "Testosterone", meaning: "The primary male sex hormone synthesized by the interstitial cells of the testes.", simpleExplanation: "Male hormone deepening the voice and building muscle.", example: "Facial beard growth, broadening of shoulders in boys.", visual: "💪" },
                        { id: "estrogen", word: "Estrogen", meaning: "The primary female sex hormone synthesized by the developing ovarian follicles.", simpleExplanation: "Female hormone guiding development during puberty.", example: "Breast enlargement, initiation of the menstrual cycle in girls.", visual: "🌸" }
                    ],
                    remember: "The biological sex of a human baby is determined ENTIRELY by the father's sperm: an X-bearing sperm produces a girl (XX), while a Y-bearing sperm produces a boy (XY). The mother contributes only an X chromosome.",
                    funFact: "The thyroid gland requires dietary iodine to produce thyroxine; lack of iodine causes the thyroid to swell into a visible neck lump called goitre!",
                    realLife: "The Adolescent Health programs across Telangana schools provide iron and folic acid (WIFS) tablets weekly to prevent teenage anemia.",
                    vocabulary: [
                        { word: "Adam's Apple", meaning: "The prominent projection of the laryngeal cartilage in the throat of adolescent males." },
                        { word: "Menarche", meaning: "The first occurrence of menstruation in adolescent girls (around age 11-13)." },
                        { word: "Menopause", meaning: "The permanent cessation of the menstrual cycle around age 45-50." }
                    ],
                    summary: [
                        "Adolescence (ages 11-19) leads to reproductive maturity at puberty.",
                        "Pituitary gland directs target endocrine glands via pituitary hormones.",
                        "Testosterone triggers male secondary traits; Estrogen triggers female traits.",
                        "Human somatic cells carry 46 chromosomes (23 pairs); gametes carry 23 chromosomes.",
                        "Balanced diet, physical exercise, and drug abstinence are vital for adolescent health."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What is the master endocrine gland of the human body?", a: "The Pituitary Gland located at the base of the brain." },
                        { level: "Understanding", q: "Why is the father's sperm, and not the mother's ovum, decisive in determining the sex of a child?", a: "Mother's ova always carry an X chromosome; father's sperm can carry either an X or a Y chromosome. Fertilization by Y yields XY (boy); by X yields XX (girl)." },
                        { level: "Applying", q: "Why are adolescent girls advised to consume diets rich in green leafy vegetables, jaggery, and citrus fruits?", a: "To replenish blood iron lost during monthly menstruation, preventing iron-deficiency anemia." },
                        { level: "Analyzing", q: "Explain the formation of the prominent 'Adam's Apple' in adolescent boys.", a: "Under the influence of testosterone, the larynx (voice box) expands significantly, and its protruding thyroid cartilage forms the visible Adam's apple." },
                        { level: "Evaluating", q: "Critique the social myth blaming mothers for giving birth to female children in some rural societies.", a: "It is scientifically erroneous and unjust: the mother's egg always provides an X chromosome; it is the father's X or Y sperm that determines gender." },
                        { level: "Creating", q: "Design a healthy daily balanced diet plan for an active 13-year-old student.", a: "Breakfast: boiled eggs/sprouts, milk, and bananas; Lunch: brown rice/millets, dal, green leafy vegetables, and curd; Snack: roasted groundnuts and jaggery; Dinner: whole wheat roti, mixed vegetables, and salad." }
                    ],
                    quiz: [
                        { q: "The master endocrine gland directing other glands from the brain is the:", options: ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Pancreas"], correct: 0, exp: "The pituitary regulates thyroid, adrenals, and gonads." },
                        { q: "Which chromosome combination produces a biological human female baby?", options: ["XX", "XY", "YY", "XO"], correct: 0, exp: "XX produces female; XY produces male." },
                        { q: "The first occurrence of menstruation at puberty is termed:", options: ["Menarche", "Menopause", "Ovulation", "Gestation"], correct: 0, exp: "Menarche marks the onset of female reproductive cycles." },
                        { q: "Which endocrine gland secretes the hormone insulin to control blood sugar levels?", options: ["Pancreas", "Thyroid", "Pituitary", "Adrenal"], correct: 0, exp: "Pancreatic beta cells produce insulin." },
                        { q: "Which hormone is released by adrenal glands during intense fear or emergency stress?", options: ["Adrenaline (Fight-or-Flight hormone)", "Thyroxine", "Insulin", "Growth hormone"], correct: 0, exp: "Adrenaline elevates heart rate and blood flow during emergencies." }
                    ],
                    flashcards: [
                        { q: "What is Puberty?", a: "The period during which adolescents reach sexual and reproductive maturity." },
                        { q: "What is the Male Sex Hormone?", a: "Testosterone (secreted by the testes)." },
                        { q: "What is the Female Sex Hormone?", a: "Estrogen (secreted by the ovaries)." },
                        { q: "What is Menarche?", a: "The first onset of menstruation at puberty." },
                        { q: "What determines the sex of a baby?", a: "The father's sperm carrying either an X or Y chromosome." }
                    ],
                    comparison: {
                        title: "Exocrine Glands vs. Endocrine Glands",
                        headers: ["Characteristic", "Exocrine Glands (Duct Glands)", "Endocrine Glands (Ductless Glands)"],
                        rows: [
                            ["Secretory Ducts", "Possess dedicated physical tubes or ducts to discharge secretions", "Ductless: release chemical hormones directly into the bloodstream"],
                            ["Secretory Product", "Enzymes, sweat, saliva, tears, digestive juices", "Chemical regulatory hormones"],
                            ["Examples", "Sweat glands, salivary glands, tear glands, sebaceous glands", "Pituitary, Thyroid, Adrenals, Pancreas, Ovaries, Testes"]
                        ],
                        vsSummary: "Exocrine glands discharge through ducts to target surfaces, while endocrine glands release hormones directly into circulating blood."
                    }
                }
            ],
            exam: [
                { q: "Adolescent growth spurt is stimulated directly by growth hormone secreted by the:", options: ["Pituitary gland", "Thyroid", "Adrenals", "Thymus"], correct: 0, exp: "Pituitary growth hormone stimulates bone and tissue elongation." },
                { q: "The chemical messengers secreted by endocrine glands directly into the bloodstream are called:", options: ["Hormones", "Enzymes", "Antigens", "Antibodies"], correct: 0, exp: "Hormones travel via blood to specific target organs." },
                { q: "Goitre is caused by a nutritional deficiency of which mineral in diet?", options: ["Iodine", "Iron", "Calcium", "Zinc"], correct: 0, exp: "Iodine is required by the thyroid to synthesize thyroxine." },
                { q: "A person suffering from diabetes has insufficient secretion of which hormone?", options: ["Insulin", "Thyroxine", "Adrenaline", "Estrogen"], correct: 0, exp: "Insulin deficiency impairs blood glucose absorption." },
                { q: "Metamorphosis in tadpoles into adult frogs is controlled by which hormone?", options: ["Thyroxine (requires iodine in pond water)", "Adrenaline", "Insulin", "Growth hormone"], correct: 0, exp: "Tadpoles cannot metamorphose without iodine and thyroxine." },
                { q: "The stoppage of the menstrual cycle in women around age 45-50 is termed:", options: ["Menopause", "Menarche", "Ovulation", "Puberty"], correct: 0, exp: "Menopause marks the conclusion of the reproductive phase." },
                { q: "How many pairs of chromosomes are present inside human somatic cells?", options: ["23 pairs (46 chromosomes)", "46 pairs", "22 pairs", "24 pairs"], correct: 0, exp: "Humans have 22 pairs of autosomes and 1 pair of sex chromosomes." },
                { q: "Human unfertilized egg (ovum) ALWAYS contains which sex chromosome?", options: ["One X chromosome", "One Y chromosome", "Both X and Y", "Zero chromosomes"], correct: 0, exp: "Ova always contribute a single X chromosome." },
                { q: "A sperm carrying a Y chromosome fertilizing an ovum results in a zygote that develops into a:", options: ["Male child (XY)", "Female child (XX)", "Twin girls", "None"], correct: 0, exp: "XY combination produces a biological male." },
                { q: "Acne and pimples on the face of adolescents are caused by increased activity of:", options: ["Sebaceous (oil) glands and sweat glands in skin", "Thyroid gland", "Tear glands", "Pancreas"], correct: 0, exp: "Hyperactive sebaceous glands clog hair follicles during puberty." },
                { q: "The prominent voice box visible on an adolescent boy's neck is called the:", options: ["Adam's apple", "Epiglottis", "Pharynx", "Trachea"], correct: 0, exp: "Enlarged thyroid cartilage of the larynx." },
                { q: "Which endocrine gland sits like a cap on top of each human kidney?", options: ["Adrenal gland", "Thyroid", "Pancreas", "Pituitary"], correct: 0, exp: "Suprarenal adrenal glands secrete adrenaline and aldosterone." },
                { q: "The legal minimum age of marriage in India is:", options: ["18 for girls, 21 for boys", "16 for both", "25 for both", "18 for both"], correct: 0, exp: "18 years for females and 21 years for males." },
                { q: "Teenage pregnancy carries severe risks primarily because:", options: ["The mother's body and reproductive organs are not yet fully mature", "Babies grow too big", "It costs less", "None"], correct: 0, exp: "Immature maternal physiology increases mortality and complication risks." },
                { q: "Which mineral is indispensable for blood hemoglobin synthesis, preventing anemia?", options: ["Iron", "Calcium", "Phosphorus", "Potassium"], correct: 0, exp: "Iron forms the heme core of hemoglobin." },
                { q: "Which of the following is an addictive, hazardous drug that adolescents must strictly avoid?", options: ["Tobacco, alcohol, and narcotics", "Milk", "Citrus fruit", "Sprouted grams"], correct: 0, exp: "Substance abuse causes catastrophic neurobiological and physical harm." },
                { q: "HIV (Human Immunodeficiency Virus) attacks which bodily defense system?", options: ["Immune system (destroying CD4+ T-cells)", "Digestive system", "Skeletal bones", "Teeth"], correct: 0, exp: "HIV devastates cellular immune protection against infections." },
                { q: "Can HIV be transmitted through sharing classroom books or shaking hands?", options: ["No, HIV requires bodily fluids (infected blood, sexual contact, unsterilized needles)", "Yes, instantly", "Through air", "Through water"], correct: 0, exp: "Casual non-sexual social contact cannot spread HIV." },
                { q: "Regular physical outdoor sports and aerobic exercise during adolescence helps:", options: ["Build strong bones, lean muscle, and mental resilience", "Cause diseases", "Decrease height", "Weaken heart"], correct: 0, exp: "Exercise stimulates bone mineralization and cardiovascular fitness." },
                { q: "Who determines the biological gender of an infant at conception?", options: ["The father's fertilizing sperm cell (contributing X or Y)", "The mother's ovum", "The weather", "Diet of the mother"], correct: 0, exp: "Fathers contribute the variable X or Y sex chromosome." }
            ]
        }
    ]
};

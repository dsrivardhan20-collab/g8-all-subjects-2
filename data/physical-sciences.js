/**
 * Telangana SCERT Class 8 - Physical Sciences Curriculum Data
 * Interactive Telangana SCERT Learning Platform
 * Official English Medium Textbook Structure
 */
window.SCERT_DATA = window.SCERT_DATA || {};
window.SCERT_DATA['physical-sciences'] = {
    id: 'physical-sciences',
    name: 'Physical Sciences',
    class: 'Class 8',
    icon: '⚡',
    accentColor: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    bgTheme: 'physical-sciences',
    tagline: 'Forces, Motion, Waves, Chemical Reactions & Light',
    chapters: [
        {
            chapterNum: 1,
            title: "Force",
            summary: "Explore contact and non-contact forces, net force vectors, and principles of mechanical equilibrium.",
            topics: [
                {
                    topicNum: 1,
                    title: "Types of Forces & Net Force",
                    visualScene: "force-vectors",
                    visualLabel: "3D Force Vectors & Equilibrium Simulator",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Definition of Force & Contact Forces",
                            textbookIdea: "A force is a push or pull upon an object resulting from its interaction with another object. Forces are categorized into <span class=\"underlined-concept\" data-concept=\"contact-forces\">contact forces</span> and non-contact forces. Contact forces require physical touch between interacting bodies, such as muscular force, frictional force, and normal force.",
                            easyExplanation: "A force is simply pushing or pulling something. When two surfaces physically touch each other to exert this push or pull—like lifting a heavy school bag with muscles—it is called a contact force.",
                            visualScene: "force-vectors",
                            visualLabel: "3D Applied Force vs Friction Vector Dynamics"
                        },
                        {
                            num: 2,
                            heading: "Non-Contact Field Forces",
                            textbookIdea: "Forces that act through space without physical contact are called <span class=\"underlined-concept\" data-concept=\"field-forces\">field forces</span> or non-contact forces. Examples include gravitational attraction towards Earth's center, magnetic attraction or repulsion between magnetic poles, and electrostatic forces between charged particles.",
                            easyExplanation: "Some forces can act across empty space without touching! An apple falling from a tree is pulled down by Earth's gravity, and a magnet attracts iron pins without needing to touch them first.",
                            visualScene: "force-vectors",
                            visualLabel: "3D Gravitational & Magnetic Force Field Lines"
                        },
                        {
                            num: 3,
                            heading: "Net Force & Vector Summation",
                            textbookIdea: "When multiple forces act simultaneously on a body, their vector sum is called the <span class=\"underlined-concept\" data-concept=\"net-force\">Net Force (Fnet)</span>. If forces act in the same direction, they add up: Fnet = F1 + F2. If they act in opposite directions, the resultant force equals the difference: Fnet = F1 - F2, acting towards the larger force.",
                            easyExplanation: "If you and your friend push a heavy table in the same direction, your forces combine and the table moves easily. If you push from opposite sides with equal strength, the net force is zero and the table stays still.",
                            visualScene: "force-vectors",
                            visualLabel: "3D Net Force Vector Simulator"
                        }
                    ],
                    underlinedCards: [
                        {
                            id: "contact-forces",
                            word: "Contact Forces",
                            meaning: "Forces that occur only when two physical bodies touch each other.",
                            simpleExplanation: "Forces like friction, normal reaction, and muscle force that require surface contact.",
                            example: "Kicking a football with your boot or pulling a bucket of water with a rope.",
                            visual: "⚽"
                        },
                        {
                            id: "field-forces",
                            word: "Field Forces",
                            meaning: "Forces exerted by a field over a distance without physical contact.",
                            simpleExplanation: "Forces that operate across distance, including gravity, magnetism, and electrostatic attraction.",
                            example: "A magnet attracting iron filings across a sheet of paper.",
                            visual: "🧲"
                        },
                        {
                            id: "net-force",
                            word: "Net Force (Fnet)",
                            meaning: "The overall resultant vector sum of all forces acting upon an object.",
                            simpleExplanation: "The total unbalanced force that decides if and how fast an object accelerates.",
                            example: "In a tug-of-war, the team pulling with 500 N beats the team pulling with 450 N by a net force of 50 N.",
                            visual: "⚖️"
                        }
                    ],
                    remember: "Normal force acts perpendicular (90 degrees) to the surface of contact, balancing gravity for an object resting on a table.",
                    funFact: "Even though you cannot feel it, Earth's atmospheric pressure exerts about 100,000 Newtons of force on every square meter of your body!",
                    realLife: "A car accelerating on a highway relies on the forward frictional force exerted by the road on the rotating tyres to push the vehicle forward.",
                    vocabulary: [
                        { word: "Force", meaning: "A push or pull acting upon an object measured in Newtons (N)." },
                        { word: "Normal Force", meaning: "The perpendicular contact force exerted by a supporting surface." },
                        { word: "Tension", meaning: "The pulling contact force transmitted through a string, rope, or cable." },
                        { word: "Electrostatic Force", meaning: "The non-contact attraction or repulsion between stationary electric charges." },
                        { word: "Equilibrium", meaning: "A state where the net force on an object is exactly zero." }
                    ],
                    summary: [
                        "A force is a push or pull that can change the state of motion or shape of a body.",
                        "Contact forces require direct physical interaction: muscular force, friction, normal force, tension.",
                        "Non-contact forces act across distance through fields: gravity, electrostatic, magnetic.",
                        "Net force (Fnet) is the vector sum of all individual forces acting upon an object.",
                        "When Fnet = 0, forces are balanced and the object remains at rest or moves at constant velocity."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What is the SI unit of force?", a: "The SI unit of force is the Newton (N)." },
                        { level: "Understanding", q: "Why is gravitational force considered a non-contact force?", a: "Because it pulls objects toward Earth's center through empty space without physical touching." },
                        { level: "Applying", q: "If two boys push a box in opposite directions with 40 N and 60 N, what is the net force?", a: "The net force is 60 N - 40 N = 20 N in the direction of the 60 N push." },
                        { level: "Analyzing", q: "Why doesn't a heavy book on a wooden table fall through to the ground?", a: "The table pushes upwards with a normal contact force exactly equal to the downward gravitational weight." },
                        { level: "Evaluating", q: "Assess what would happen to Earth's satellite orbit if gravitational force suddenly disappeared.", a: "Without gravity's centripetal pull, satellites would fly off in a straight line tangent to their orbit." },
                        { level: "Creating", q: "Design an experiment to prove that electrostatic force can attract neutral paper bits.", a: "Rub a plastic comb briskly on dry hair to charge it negatively, then bring it near tiny paper bits to watch them leap." }
                    ],
                    quiz: [
                        {
                            q: "Which of the following is an example of a non-contact force?",
                            options: ["Frictional force", "Muscular force", "Magnetic force", "Tension in a rope"],
                            correct: 2,
                            exp: "Magnetic force acts through magnetic fields across distance without physical contact."
                        },
                        {
                            q: "What happens when two forces of 15 N act on an object in exactly opposite directions?",
                            options: ["The object moves rapidly", "The net force is 30 N", "The net force is 0 N", "The object rotates"],
                            correct: 2,
                            exp: "Equal and opposite forces cancel each other out, resulting in a net force of 0 N (balanced equilibrium)."
                        },
                        {
                            q: "In which direction does the normal force act relative to the contact surface?",
                            options: ["Parallel to the surface", "Perpendicular (at 90 degrees) to the surface", "Directly downwards", "In the direction of motion"],
                            correct: 1,
                            exp: "Normal force is always perpendicular (at right angles) to the supporting contact surface."
                        },
                        {
                            q: "What type of force brings a rolling ball on a grass lawn to a stop?",
                            options: ["Gravitational force", "Frictional force", "Electrostatic force", "Muscular force"],
                            correct: 1,
                            exp: "Friction between the ball's surface and the grass opposes motion and slows it down to a stop."
                        },
                        {
                            q: "Which instrument is commonly used in laboratory experiments to measure force?",
                            options: ["Thermometer", "Spring balance", "Barometer", "Ammeter"],
                            correct: 1,
                            exp: "A spring balance measures force by calibrating the extension of an internal spring under load."
                        }
                    ],
                    flashcards: [
                        { q: "What is Force?", a: "A push or pull upon an object that alters its speed, direction, or shape." },
                        { q: "What is the SI unit of force?", a: "Newton (N)." },
                        { q: "Give two examples of contact forces.", a: "Muscular force and Frictional force." },
                        { q: "Give two examples of non-contact forces.", a: "Gravitational force and Magnetic force." },
                        { q: "What is Net Force?", a: "The algebraic or vector sum of all forces acting simultaneously on a body." }
                    ],
                    comparison: {
                        title: "Contact Forces vs. Non-Contact Forces",
                        headers: ["Feature", "Contact Forces", "Non-Contact Forces"],
                        rows: [
                            ["Physical Touch", "Mandatory between interacting bodies", "Not required; acts across empty space"],
                            ["Origin", "Direct mechanical surface interaction", "Interaction with an invisible force field"],
                            ["Examples", "Friction, Muscular, Normal, Tension", "Gravity, Magnetic, Electrostatic"]
                        ],
                        vsSummary: "Contact forces require physical surface touch, while non-contact field forces act over a distance through gravitational, electric, or magnetic fields."
                    }
                }
            ],
            exam: [
                { q: "What is the SI unit of force?", options: ["Joule", "Newton", "Pascal", "Watt"], correct: 1, exp: "Newton is the standard unit of force." },
                { q: "Which force is always directed toward the center of the Earth?", options: ["Frictional force", "Gravitational force", "Normal force", "Magnetic force"], correct: 1, exp: "Earth's gravity pulls all objects toward its center." },
                { q: "When two forces of 20 N act in the same direction, the resultant net force is:", options: ["0 N", "20 N", "40 N", "400 N"], correct: 2, exp: "Forces in the same direction add up: 20 N + 20 N = 40 N." },
                { q: "Which of the following is a contact force?", options: ["Magnetic force", "Frictional force", "Electrostatic force", "Gravitational force"], correct: 1, exp: "Friction requires physical contact between surfaces." },
                { q: "A spring balance works on the principle of:", options: ["Archimedes principle", "Extension of a spring proportional to force", "Conservation of momentum", "Pascal law"], correct: 1, exp: "Hooke's law governs spring balance extension." },
                { q: "The upward contact force exerted by a table on a resting book is called:", options: ["Tension", "Normal force", "Friction", "Gravity"], correct: 1, exp: "Normal force acts perpendicular to the surface." },
                { q: "Forces that produce a net force of zero are called:", options: ["Unbalanced forces", "Balanced forces", "Contact forces", "Frictional forces"], correct: 1, exp: "Balanced forces cancel each other completely." },
                { q: "What causes a charged plastic comb to attract dry paper bits?", options: ["Magnetic force", "Electrostatic force", "Nuclear force", "Frictional force"], correct: 1, exp: "Static electric charges create electrostatic attraction." },
                { q: "If an object moves with constant velocity in a straight line, the net force on it is:", options: ["Zero", "Equal to its weight", "Continuously increasing", "Infinite"], correct: 0, exp: "Newton's first law: constant velocity implies net force is zero." },
                { q: "Which force always opposes the relative motion between two contacting surfaces?", options: ["Normal force", "Frictional force", "Muscular force", "Tension"], correct: 1, exp: "Friction always acts in the direction opposing relative motion." },
                { q: "The state of motion of an object is described by its:", options: ["Color and size", "Speed and direction of motion", "Mass only", "Temperature"], correct: 1, exp: "Speed and direction define an object's state of motion." },
                { q: "What happens when an unbalanced force acts on an object?", options: ["Its speed or direction changes", "It stays completely still", "Its mass increases", "Its temperature drops"], correct: 0, exp: "Unbalanced forces cause acceleration." },
                { q: "Which force is responsible for holding the planets in orbit around the Sun?", options: ["Electrostatic force", "Magnetic force", "Gravitational force", "Nuclear force"], correct: 2, exp: "The Sun's gravity provides the centripetal force for planetary orbits." },
                { q: "A tug of war team pulls with 800 N to the left, and the other with 750 N to the right. The net force is:", options: ["1550 N right", "50 N left", "50 N right", "Zero"], correct: 1, exp: "800 N - 750 N = 50 N in the direction of the stronger pull (left)." },
                { q: "What kind of force is exerted by our muscles when lifting a school bag?", options: ["Electrostatic force", "Muscular contact force", "Gravitational force", "Magnetic force"], correct: 1, exp: "Muscles generate mechanical contact force." },
                { q: "Can a force change the shape of an object?", options: ["No, never", "Yes, when applied to a malleable or elastic body", "Only in space", "Only if it is magnetic"], correct: 1, exp: "Forces can deform objects, like stretching a rubber band or kneading dough." },
                { q: "Why do astronauts float inside the International Space Station?", options: ["There is zero gravity in orbit", "They are in continuous free fall creating apparent weightlessness", "Magnetic boots repel them", "The atmosphere is too thick"], correct: 1, exp: "Orbiting spacecraft are in free fall around Earth, producing apparent weightlessness." },
                { q: "The force per unit area is called:", options: ["Work", "Pressure", "Power", "Momentum"], correct: 1, exp: "Pressure = Force / Area, measured in Pascals." },
                { q: "Which factor does NOT affect the magnitude of frictional force between solid surfaces?", options: ["Roughness of surfaces", "Normal force pressing surfaces together", "Apparent area of contact", "Nature of surface materials"], correct: 2, exp: "Friction is independent of apparent surface contact area for dry solids." },
                { q: "If a force of 10 N acts on an area of 2 square meters, the pressure exerted is:", options: ["20 Pa", "5 Pa", "0.2 Pa", "12 Pa"], correct: 1, exp: "Pressure = Force / Area = 10 N / 2 m² = 5 Pa." }
            ]
        },
        {
            chapterNum: 2,
            title: "Friction",
            summary: "Examine static, sliding, and rolling friction, microscopic asperities, and methods of reducing friction.",
            topics: [
                {
                    topicNum: 1,
                    title: "Dynamics of Friction & Lubrication",
                    visualScene: "friction-asperities",
                    visualLabel: "3D Microscopic Surface Asperities & Interlocking Teeth",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Microscopic Causes of Friction",
                            textbookIdea: "Friction arises due to the <span class=\"underlined-concept\" data-concept=\"asperities\">interlocking of microscopic irregularities</span> (asperities) present on even the smoothest appearing surfaces. When two surfaces are pressed together under a normal load, these tiny peaks cold-weld at points of contact, resisting relative motion.",
                            easyExplanation: "Even a mirror or polished table has microscopic hills and valleys when viewed under a microscope. When two surfaces touch, these jagged hills lock into each other like puzzle pieces, requiring force to break free.",
                            visualScene: "friction-asperities",
                            visualLabel: "3D Microscopic Asperities & Contact Cold-Welds"
                        },
                        {
                            num: 2,
                            heading: "Types of Friction: Static, Sliding, Rolling",
                            textbookIdea: "The force that resists the initiation of sliding motion is <span class=\"underlined-concept\" data-concept=\"static-friction\">static friction</span>. Once motion begins, sliding friction is slightly smaller than maximum static friction. <span class=\"underlined-concept\" data-concept=\"rolling-friction\">Rolling friction</span> is dramatically lower than sliding friction, which is why wheels were invented.",
                            easyExplanation: "It is hardest to get a heavy almirah to start moving from rest (static friction). Once it starts sliding, pushing it requires less effort (sliding friction). Putting rollers or wheels underneath makes it easiest of all (rolling friction)!",
                            visualScene: "friction-types",
                            visualLabel: "3D Static vs Sliding vs Rolling Friction Graph"
                        },
                        {
                            num: 3,
                            heading: "Friction: Necessary Evil & Lubricants",
                            textbookIdea: "Friction is a necessary evil. Without friction, we could not walk, cars could not brake, and nails would not hold walls. However, friction causes energy loss as heat and wears down machinery. <span class=\"underlined-concept\" data-concept=\"lubricants\">Lubricants</span> (oil, grease, graphite) form a thin separating film between surfaces to reduce wear and friction.",
                            easyExplanation: "We need friction to walk without slipping, but inside a motorcycle engine, friction wastes fuel and destroys metal parts. Pouring motor oil creates a slippery cushion so the metal parts glide without scratching.",
                            visualScene: "friction-lubrication",
                            visualLabel: "3D Fluid Lubrication Film Barrier"
                        }
                    ],
                    underlinedCards: [
                        {
                            id: "asperities",
                            word: "Microscopic Asperities",
                            meaning: "Microscopic peaks and roughness present on surfaces that interlock to produce friction.",
                            simpleExplanation: "Tiny microscopic jagged teeth that lock together when two materials touch.",
                            example: "The rough tread pattern on running shoes gripping an athletic track.",
                            visual: "🔬"
                        },
                        {
                            id: "static-friction",
                            word: "Static Friction",
                            meaning: "The self-adjusting frictional force that opposes the beginning of motion between two resting surfaces.",
                            simpleExplanation: "The initial resistance holding a stationary object still until the applied force exceeds its limit.",
                            example: "A heavy boulder refusing to budge until several people push together.",
                            visual: "🛑"
                        },
                        {
                            id: "rolling-friction",
                            word: "Rolling Friction",
                            meaning: "The frictional resistance encountered when a spherical or cylindrical body rolls over a surface.",
                            simpleExplanation: "The tiny resistance when round balls roll instead of drag.",
                            example: "Ball bearings inside ceiling fans and bicycle wheel hubs.",
                            visual: "⚙️"
                        },
                        {
                            id: "lubricants",
                            word: "Lubricants",
                            meaning: "Substances introduced between moving surfaces to reduce friction and wear.",
                            simpleExplanation: "Slippery liquids like oil or grease that coat rough surfaces so they glide smoothly.",
                            example: "Applying fine talcum powder on a carrom board to let the striker glide fast.",
                            visual: "🛢️"
                        }
                    ],
                    remember: "Static friction is always greater than sliding friction, and sliding friction is much greater than rolling friction: F_static > F_sliding > F_rolling.",
                    funFact: "If you could eliminate all friction on Earth for just 5 seconds, all buildings held by nails and screws would instantly collapse!",
                    realLife: "Vehicle tyres are designed with deep grooves (treads) to channel away rainwater and maintain friction, preventing dangerous skidding (aquaplaning).",
                    vocabulary: [
                        { word: "Friction", meaning: "A force that opposes relative motion between two surfaces in contact." },
                        { word: "Asperities", meaning: "Microscopic jagged peaks on a material surface." },
                        { word: "Lubricant", meaning: "A substance like oil, grease, or graphite that reduces friction." },
                        { word: "Fluid Friction (Drag)", meaning: "The frictional resistance exerted by fluids (liquids and gases) on moving objects." },
                        { word: "Streamlining", meaning: "Shaping an object to minimize fluid resistance (like fish or airplanes)." }
                    ],
                    summary: [
                        "Friction is caused by the microscopic interlocking of surface irregularities (asperities).",
                        "Static friction is self-adjusting up to a maximum limiting value.",
                        "Static friction > Sliding friction > Rolling friction.",
                        "Friction produces heat and causes mechanical wear and tear.",
                        "Friction can be reduced by using lubricants, ball bearings, and streamlined shapes."
                    ],
                    blooms: [
                        { level: "Remembering", q: "Why is rolling friction smaller than sliding friction?", a: "Because rolling involves very small instantaneous contact areas and minimal surface interlocking." },
                        { level: "Understanding", q: "Why do kabaddi players rub their hands with dry soil before playing?", a: "To increase friction so they can get a firm grip on opponents without slipping." },
                        { level: "Applying", q: "Why are aeroplanes and high-speed trains given special curved, pointed shapes?", a: "To streamline their bodies and reduce fluid friction (air drag) at high speeds." },
                        { level: "Analyzing", q: "Why does sprinkling fine powder on a carrom board make coins glide faster?", a: "The fine powder particles fill the microscopic pores of the wooden board, creating a smooth surface." },
                        { level: "Evaluating", q: "Why is friction described as a 'necessary evil'?", a: "It is an evil because it wastes energy and wears parts, but necessary because walking and braking are impossible without it." },
                        { level: "Creating", q: "Design a shoe sole tread pattern optimized for wet muddy terrain.", a: "Create deep multi-directional chevron grooves that channel mud outward while providing biting rubber edges." }
                    ],
                    quiz: [
                        { q: "Which type of friction has the highest magnitude between the same two surfaces?", options: ["Rolling friction", "Sliding friction", "Static friction", "Fluid friction"], correct: 2, exp: "Static friction is the greatest because surface asperities have time to interlock deeply." },
                        { q: "Why are ball bearings used in ceiling fans and bicycle wheels?", options: ["To convert sliding friction into rolling friction", "To increase friction", "To look attractive", "To generate electric current"], correct: 0, exp: "Ball bearings replace high sliding friction with much lower rolling friction." },
                        { q: "Fluid friction exerted on objects moving through air or water is called:", options: ["Tension", "Drag", "Inertia", "Buoyancy"], correct: 1, exp: "Drag is the resisting force exerted by fluids on moving objects." },
                        { q: "What is the primary cause of friction between two polished metal plates?", options: ["Electrostatic charge only", "Interlocking of microscopic asperities and molecular bonding", "Gravity pulling them down", "Air trapped between them"], correct: 1, exp: "Microscopic asperities interlock and form micro-welds at contact points." },
                        { q: "Which of the following substances acts as a solid lubricant?", options: ["Water", "Graphite", "Mercury", "Alcohol"], correct: 1, exp: "Graphite has slippery sheet layers that make it an excellent solid lubricant." }
                    ],
                    flashcards: [
                        { q: "What causes friction?", a: "Microscopic interlocking of irregularities on contacting surfaces." },
                        { q: "Arrange the three types of friction in descending order of strength.", a: "Static friction > Sliding friction > Rolling friction." },
                        { q: "What is fluid friction called?", a: "Drag." },
                        { q: "Name two common lubricants.", a: "Machine oil and grease." },
                        { q: "What is streamlining?", a: "Designing an aerodynamic shape to minimize fluid friction." }
                    ],
                    comparison: {
                        title: "Sliding Friction vs. Rolling Friction",
                        headers: ["Feature", "Sliding Friction", "Rolling Friction"],
                        rows: [
                            ["Type of Motion", "One body slides directly over another", "A spherical or cylindrical body rolls over a surface"],
                            ["Magnitude", "Significantly higher", "Dramatically lower (about 10 to 100 times less)"],
                            ["Real-World Application", "Brake pads clamping a disc", "Wheels, rollers, and ball bearings"]
                        ],
                        vsSummary: "Rolling friction is far lower than sliding friction, which is why wheels and ball bearings are universal across transport machinery."
                    }
                }
            ],
            exam: [
                { q: "Friction always acts in a direction that:", options: ["Supports the motion", "Opposes the relative motion", "Is perpendicular to the surface", "Has no relation to motion"], correct: 1, exp: "Frictional resistance always opposes relative motion between contacting surfaces." },
                { q: "Which of the following is NOT a method of reducing friction?", options: ["Using ball bearings", "Applying lubricants", "Streamlining", "Treading tyres with deep grooves"], correct: 3, exp: "Treading tyres increases friction to prevent skidding." },
                { q: "The friction experienced when a book is just about to slide is called:", options: ["Rolling friction", "Limiting static friction", "Kinetic friction", "Fluid drag"], correct: 1, exp: "Limiting static friction is the maximum static friction before motion begins." },
                { q: "Why do meteorites burn upon entering Earth's atmosphere?", options: ["Solar radiation", "Immense atmospheric air friction generating extreme heat", "Volcanic eruptions", "Chemical explosions"], correct: 1, exp: "High-speed air compression and friction convert kinetic energy into extreme heat." },
                { q: "A smooth surface has:", options: ["Zero irregularities", "Fewer and smaller microscopic irregularities", "Infinite friction", "No normal force"], correct: 1, exp: "All solid surfaces have microscopic irregularities, though smooth ones have fewer." },
                { q: "The shape of a fish or bird that minimizes fluid drag is called:", options: ["Spherical", "Streamlined", "Cubical", "Conical"], correct: 1, exp: "Streamlined shapes cut through fluids with minimal turbulence and resistance." },
                { q: "Which friction is the easiest to overcome?", options: ["Static friction", "Sliding friction", "Rolling friction", "All are identical"], correct: 2, exp: "Rolling friction is the smallest in magnitude." },
                { q: "Why is it difficult to walk on an icy or wet marble floor?", options: ["Ice has too much friction", "Friction is drastically reduced, causing slipping", "Gravity is weaker on ice", "The floor is too hard"], correct: 1, exp: "Water or ice reduces friction, preventing feet from gripping the floor." },
                { q: "What type of substance is graphite when used in high-temperature machinery?", options: ["Liquid fuel", "Dry solid lubricant", "Coolant", "Abrasive"], correct: 1, exp: "Graphite powder acts as a solid lubricant where oils would evaporate." },
                { q: "Bicycle brake pads stop the wheel by:", options: ["Decreasing normal force", "Increasing friction against the metallic wheel rim", "Sprinkling oil on the tyre", "Decreasing air drag"], correct: 1, exp: "Rubber brake pads press hard against the rim, generating large friction." },
                { q: "Does friction depend on the apparent surface area in contact?", options: ["Yes, directly proportional", "No, independent of apparent contact area for dry solids", "Yes, inversely proportional", "Only on wet surfaces"], correct: 1, exp: "For dry solids, friction depends on normal load and roughness, not surface area." },
                { q: "What happens to moving machine parts when friction is not controlled?", options: ["They cool down", "They wear out and overheat", "They become frictionless", "They gain mass"], correct: 1, exp: "Unchecked friction causes excessive mechanical wear and overheating." },
                { q: "Treaded tyres are used in vehicles because:", options: ["They look modern", "They provide good road grip by increasing friction", "They reduce tyre weight", "They save petrol"], correct: 1, exp: "Treads increase friction and disperse water on wet roads." },
                { q: "Which fluid exerts the least drag on a slow moving object?", options: ["Water", "Honey", "Air", "Glycerine"], correct: 2, exp: "Air has much lower viscosity and density than liquids, exerting lower drag." },
                { q: "When you push a heavy box and it does not move, the applied force is balanced by:", options: ["Gravitational force", "Static frictional force", "Rolling friction", "Centrifugal force"], correct: 1, exp: "Static friction automatically increases to match and balance the applied push." },
                { q: "What is the unit of the coefficient of friction?", options: ["Newtons", "Joules", "Dimensionless (no unit)", "Pascals"], correct: 2, exp: "The coefficient of friction is a ratio of two forces, so it has no units." },
                { q: "Why are gymnasts seen applying chalk powder to their hands?", options: ["To absorb sweat and increase grip friction", "To make hands slippery", "To heal cuts", "For decoration"], correct: 0, exp: "Chalk absorbs sweat and moisture, increasing friction for a secure grip." },
                { q: "Which of the following uses ball bearings?", options: ["Skateboards and roller skates", "Electric motor shafts", "Bicycle wheel axles", "All of the above"], correct: 3, exp: "Ball bearings are widely used in all rotating mechanical joints." },
                { q: "Lubricants work by:", options: ["Destroying the atoms of the surface", "Forming a thin fluid layer between surface peaks", "Increasing surface roughness", "Cooling below freezing point"], correct: 1, exp: "Lubricants fill valleys and separate surface asperities." },
                { q: "If the normal pressing force between two surfaces is doubled, the frictional force will:", options: ["Become half", "Double", "Remain unchanged", "Become zero"], correct: 1, exp: "Frictional force is directly proportional to the normal pressing force." }
            ]
        },
        {
            chapterNum: 3,
            title: "Synthetic Fibres and Plastics",
            summary: "Explore polymer chemistry, rayon, nylon, acrylic, thermoplastics vs thermosetting plastics, and the 4R environmental principle.",
            topics: [
                {
                    topicNum: 1,
                    title: "Polymer Structure, Fibres & Plastics",
                    visualScene: "polymer-structure",
                    visualLabel: "3D Polymer Chain Linkages & Thermoplastic Matrices",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Polymers & Synthetic Fibres",
                            textbookIdea: "Synthetic fibres are made of giant molecules called <span class=\"underlined-concept\" data-concept=\"polymer\">polymers</span>, constructed by joining thousands of small chemical repeating units called monomers. <span class=\"underlined-concept\" data-concept=\"rayon\">Rayon</span> is prepared by chemical processing of natural wood cellulose and is called artificial silk. <span class=\"underlined-concept\" data-concept=\"nylon\">Nylon</span> was the first fully synthetic fibre, synthesized from coal, water, and air in 1931.",
                            easyExplanation: "Just like a pearl necklace is made by threading hundreds of small beads together, a polymer is made by linking thousands of small chemical molecules. Rayon is artificial silk made from tree pulp, while Nylon is a super-strong plastic thread made in factories.",
                            visualScene: "polymer-chain",
                            visualLabel: "3D Monomer to Polymer Chain Polymerization"
                        },
                        {
                            num: 2,
                            heading: "Thermoplastics vs. Thermosetting Plastics",
                            textbookIdea: "Plastics are classified by their thermal behavior. <span class=\"underlined-concept\" data-concept=\"thermoplastics\">Thermoplastics</span> have linear or branched chains that soften when heated and can be remolded repeatedly (e.g. Polythene, PVC). In contrast, <span class=\"underlined-concept\" data-concept=\"thermosetting\">Thermosetting plastics</span> have heavily cross-linked chains that once molded and set, cannot be softened by heating (e.g. Bakelite, Melamine).",
                            easyExplanation: "Thermoplastics are like candle wax: heat them up, they melt, and you can reshape them again and again. Thermosetting plastics are like a baked cake: once baked in an oven, heating them again won't turn them back into batter—they stay rigid forever!",
                            visualScene: "polymer-structure",
                            visualLabel: "3D Linear vs Cross-Linked Polymer Network"
                        },
                        {
                            num: 3,
                            heading: "Environmental Impact & The 4R Principle",
                            textbookIdea: "Plastics are non-biodegradable and persist in the environment for centuries, choking drainage systems and releasing toxic fumes when burned. Citizens and industries must follow the <span class=\"underlined-concept\" data-concept=\"four-r\">4R Principle</span>: Reduce plastic consumption, Reuse plastic containers, Recycle recyclable plastics, and Recover energy from waste.",
                            easyExplanation: "Plastic never rots or decays naturally. To save our soil and animals from plastic pollution, we must follow the 4R golden rule: Reduce single-use plastic, Reuse shopping bags, Recycle bottles, and Recover usable energy.",
                            visualScene: "recycling-cycle",
                            visualLabel: "3D Sustainable 4R Recycling Loop"
                        }
                    ],
                    underlinedCards: [
                        {
                            id: "polymer",
                            word: "Polymer",
                            meaning: "A high molecular weight compound formed by linking many small repeating chemical units (monomers).",
                            simpleExplanation: "A long chain molecule formed by stringing together smaller chemical building blocks.",
                            example: "Cellulose in cotton and polyethylene in plastic bags.",
                            visual: "⛓️"
                        },
                        {
                            id: "rayon",
                            word: "Rayon (Artificial Silk)",
                            meaning: "A semi-synthetic regenerated fibre manufactured by treating natural wood pulp with chemicals.",
                            simpleExplanation: "A lustrous, silky fabric made from tree pulp that drapes like real silk at a lower price.",
                            example: "Luxurious sarees, bedsheets, and surgical dressings.",
                            visual: "🧵"
                        },
                        {
                            id: "nylon",
                            word: "Nylon",
                            meaning: "The first completely synthetic thermoplastic polyamide fibre synthesized without using natural raw materials.",
                            simpleExplanation: "A strong, lightweight, waterproof fibre that is stronger than steel wire of the same thickness.",
                            example: "Parachute ropes, rock climbing ropes, toothbrushes, and socks.",
                            visual: "🪂"
                        },
                        {
                            id: "thermoplastics",
                            word: "Thermoplastics",
                            meaning: "Polymers with linear chains that deform easily on heating and can be melted and remolded repeatedly.",
                            simpleExplanation: "Plastics that melt easily when heated and can be recycled into new shapes.",
                            example: "Polythene carry bags, PVC water pipes, and toy cars.",
                            visual: "🥤"
                        },
                        {
                            id: "thermosetting",
                            word: "Thermosetting Plastics",
                            meaning: "Cross-linked polymers that undergo permanent chemical setting during initial molding and cannot be remelted.",
                            simpleExplanation: "Heat-resistant hard plastics that do not soften upon heating.",
                            example: "Electrical switchboards (Bakelite) and fire-resistant kitchen crockeries (Melamine).",
                            visual: "🔌"
                        },
                        {
                            id: "four-r",
                            word: "4R Principle",
                            meaning: "An environmental sustainability framework: Reduce, Reuse, Recycle, and Recover.",
                            simpleExplanation: "Four actionable steps to eliminate plastic pollution and protect our planet.",
                            example: "Carrying a washable cloth bag instead of accepting disposable polythene bags.",
                            visual: "♻️"
                        }
                    ],
                    remember: "Bakelite is a poor conductor of heat and electricity, which is why it is universally used for making electrical switches, plugs, and frying pan handles.",
                    funFact: "A nylon parachute thread is scientifically proven to be stronger than a steel wire of the exact same diameter!",
                    realLife: "Firefighters wear uniforms coated with Melamine plastic because Melamine resists heat, tolerates flames, and does not burn easily.",
                    vocabulary: [
                        { word: "Polymer", meaning: "A large molecule composed of repeating structural units." },
                        { word: "Monomer", meaning: "The single small chemical molecule that forms polymer chains." },
                        { word: "Petrochemicals", meaning: "Raw chemicals derived from crude petroleum used to manufacture synthetic plastics." },
                        { word: "Biodegradable", meaning: "Materials that decompose naturally through bacterial action." },
                        { word: "Non-biodegradable", meaning: "Materials like plastics that do not rot or decay naturally." }
                    ],
                    summary: [
                        "Synthetic fibres are man-made polymers synthesized from petrochemical raw materials.",
                        "Rayon is regenerated cellulose (artificial silk); Nylon is the first fully synthetic fibre.",
                        "Thermoplastics (Polythene, PVC) soften on heating and can be recycled repeatedly.",
                        "Thermosetting plastics (Bakelite, Melamine) retain their shape permanently and resist heat.",
                        "Managing plastic pollution requires strict adherence to the 4R principle (Reduce, Reuse, Recycle, Recover)."
                    ],
                    blooms: [
                        { level: "Remembering", q: "Why is rayon termed an 'artificial silk'?", a: "Because it has a lustrous appearance and texture similar to natural silk, but is chemically prepared from wood cellulose." },
                        { level: "Understanding", q: "Why should you never wear synthetic clothes while working in a chemistry lab or kitchen?", a: "Synthetic fibres melt when heated and stick to the human skin, causing severe burns." },
                        { level: "Applying", q: "Why are electrical switches made of Bakelite instead of Polythene?", a: "Bakelite is a thermosetting insulator that will not melt or conduct electricity even during high electrical heat." },
                        { level: "Analyzing", q: "Contrast the molecular chain structure of thermoplastics with thermosetting plastics.", a: "Thermoplastics have loose linear chains that slide over each other, while thermosetting plastics have rigid 3D cross-linked networks." },
                        { level: "Evaluating", q: "Evaluate the environmental impact of burning plastic waste in open landfills.", a: "Burning releases deadly toxic dioxins and greenhouse gases, causing severe air pollution and respiratory damage." },
                        { level: "Creating", q: "Propose three practical school policies to implement the 4R principle.", a: "Ban disposable water bottles, mandate cloth tiffin napkins, and establish a paper-and-metal recycling corner." }
                    ],
                    quiz: [
                        { q: "Which synthetic fibre is known as artificial silk?", options: ["Nylon", "Rayon", "Polyester", "Acrylic"], correct: 1, exp: "Rayon is called artificial silk because it mimics the texture and shine of natural silk." },
                        { q: "Which was the first fully synthetic fibre created without natural plant or animal raw materials?", options: ["Rayon", "Cotton", "Nylon", "Jute"], correct: 2, exp: "Nylon was synthesized in 1931 using coal, water, and air without any natural plant cellulose." },
                        { q: "Which of the following is a thermosetting plastic?", options: ["Polythene", "PVC", "Bakelite", "Polystyrene"], correct: 2, exp: "Bakelite is a thermosetting plastic that stays permanently rigid once molded." },
                        { q: "Why is Melamine used for making floor tiles and firefighter uniforms?", options: ["It is cheap", "It resists fire and tolerates heat better than other plastics", "It is flexible like rubber", "It is transparent"], correct: 1, exp: "Melamine has exceptional flame-retardant and thermal-insulating properties." },
                        { q: "What does the 4R environmental principle stand for?", options: ["Read, Run, Rest, Repeat", "Reduce, Reuse, Recycle, Recover", "Remove, Replace, Retain, Refill", "Rebuild, Resell, Return, Reheat"], correct: 1, exp: "The 4R principle stands for Reduce, Reuse, Recycle, and Recover." }
                    ],
                    flashcards: [
                        { q: "What is a polymer?", a: "A giant molecule made of repeating monomer chemical units." },
                        { q: "What is Rayon made from?", a: "Natural wood cellulose treated chemically." },
                        { q: "Why is Nylon used for parachutes?", a: "It is exceptionally strong, lightweight, elastic, and moisture resistant." },
                        { q: "Name two thermoplastics.", a: "Polythene and PVC." },
                        { q: "Name two thermosetting plastics.", a: "Bakelite and Melamine." }
                    ],
                    comparison: {
                        title: "Thermoplastics vs. Thermosetting Plastics",
                        headers: ["Feature", "Thermoplastics", "Thermosetting Plastics"],
                        rows: [
                            ["Chain Structure", "Linear or slightly branched polymer chains", "Heavily cross-linked 3D network"],
                            ["Effect of Heat", "Softens on heating; melts easily", "Does not soften on reheating; stays rigid"],
                            ["Recyclability", "Can be remolded and recycled repeatedly", "Cannot be remelted or reshaped"],
                            ["Examples", "Polythene, PVC, Polystyrene", "Bakelite, Melamine"]
                        ],
                        vsSummary: "Thermoplastics melt and reshape repeatedly due to linear chains, whereas thermosetting plastics are permanently locked into rigid shapes by 3D cross-links."
                    }
                }
            ],
            exam: [
                { q: "Which fibre is synthesized from coal, water, and air?", options: ["Rayon", "Nylon", "Cotton", "Wool"], correct: 1, exp: "Nylon was the first completely synthetic fibre synthesized from coal, water, and air." },
                { q: "Electrical plugs and switches are made of:", options: ["PVC", "Bakelite", "Polythene", "Teflon"], correct: 1, exp: "Bakelite is a heat-resistant, electrical-insulating thermosetting plastic." },
                { q: "Non-stick coating on cooking pans is made of:", options: ["Bakelite", "Teflon (PTFE)", "Melamine", "PVC"], correct: 1, exp: "Teflon has a very low coefficient of friction and resists sticking with oil and water." },
                { q: "The repeating units that combine to form a polymer are called:", options: ["Isotopes", "Monomers", "Crystals", "Isomers"], correct: 1, exp: "Monomers are single building blocks that join to form polymers." },
                { q: "Which plastic is used for making water drainage pipes?", options: ["Bakelite", "PVC (Polyvinyl Chloride)", "Melamine", "Rayon"], correct: 1, exp: "PVC is durable, rigid, and resistant to water corrosion." },
                { q: "Synthetic fibres catch fire easily and:", options: ["Turn into ash like cotton", "Melt and stick to the skin", "Extinguish themselves", "Do not produce any fumes"], correct: 1, exp: "Synthetic fabrics melt into hot plastic that severely burns human flesh." },
                { q: "Which synthetic fibre resembles natural sheep wool?", options: ["Acrylic", "Rayon", "Nylon", "Terylene"], correct: 0, exp: "Acrylic is manufactured as an affordable, moth-resistant artificial wool." },
                { q: "PET is a very familiar form of:", options: ["Polyester", "Nylon", "Rayon", "Bakelite"], correct: 0, exp: "PET (Polyethylene Terephthalate) is a widely used polyester for bottles and jars." },
                { q: "Why are plastics favored over metals for packaging food?", options: ["Plastics are unreactive with water and air", "Plastics are heavy", "Plastics conduct electricity", "Plastics are biodegradable"], correct: 0, exp: "Plastics do not corrode or react with food, water, or air." },
                { q: "Which material is biodegradable?", options: ["Plastic bottle", "Tin can", "Banana peel", "Glass container"], correct: 2, exp: "Fruit peels are organic matter decomposed by bacteria within weeks." },
                { q: "What dangerous gas is released when PVC plastic is incinerated?", options: ["Oxygen", "Hydrogen Chloride and toxic dioxins", "Pure Nitrogen", "Helium"], correct: 1, exp: "Burning PVC releases acidic hydrogen chloride and cancer-causing dioxins." },
                { q: "The property of plastics that makes them ideal for tool handles is:", options: ["High thermal conductivity", "Poor thermal and electrical conductivity", "High density", "Solubility in water"], correct: 1, exp: "Plastics are poor conductors of heat and electricity." },
                { q: "Rayon is obtained from which natural source?", options: ["Petroleum", "Wood pulp cellulose", "Silkworm cocoons", "Coal tar"], correct: 1, exp: "Rayon is manufactured by chemical dissolution and regeneration of wood cellulose." },
                { q: "Which property does NOT belong to synthetic fibres?", options: ["Dries quickly", "Durable and cheap", "Highly water absorbent like cotton", "Readily available"], correct: 2, exp: "Synthetic fibres have low water absorbency compared to natural cotton." },
                { q: "Melamine is classified under:", options: ["Thermoplastics", "Thermosetting plastics", "Natural fibres", "Elastomers"], correct: 1, exp: "Melamine forms a rigid thermoset 3D cross-linked structure." },
                { q: "Parachute canopies and ropes are predominantly manufactured using:", options: ["Rayon", "Nylon", "Jute", "Cotton"], correct: 1, exp: "Nylon's extraordinary tensile strength and lightweight nature make it ideal for parachutes." },
                { q: "The disposal of plastic is a major global issue because:", options: ["It dissolves in drinking water", "It is non-biodegradable and takes hundreds of years to decompose", "It attracts insects", "It rusts quickly"], correct: 1, exp: "Plastics do not break down naturally, persisting in landfills and oceans." },
                { q: "Which polymer is formed by glucose monomer units in nature?", options: ["Polyester", "Cellulose", "Nylon", "Polythene"], correct: 1, exp: "Cellulose in plant cell walls is a natural polymer made of glucose units." },
                { q: "What should be used as an eco-friendly alternative to plastic carry bags?", options: ["Cotton or jute cloth bags", "Aluminium foil", "Thicker plastic bags", "Styrofoam boxes"], correct: 0, exp: "Biodegradable cotton and jute bags can be washed and reused repeatedly." },
                { q: "Which 'R' in the 4R principle focuses on processing waste plastic into new utility items?", options: ["Reduce", "Reuse", "Recycle", "Recover"], correct: 2, exp: "Recycling collects and melts used thermoplastics to manufacture new goods." }
            ]
        },
        {
            chapterNum: 4,
            title: "Metals and Non-Metals",
            summary: "Compare physical and chemical properties of metals and non-metals, displacement reactions, and reactivity series.",
            topics: [
                {
                    topicNum: 1,
                    title: "Properties of Elements & Reactivity Series",
                    visualScene: "reactivity-series",
                    visualLabel: "3D Displacement Reaction & Chemical Reactivity Tower",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Physical Properties: Malleability, Ductility, Sonority",
                            textbookIdea: "Metals are typically hard, lustrous, good conductors of heat and electricity, <span class=\"underlined-concept\" data-concept=\"malleability\">malleable</span> (can be beaten into thin sheets), and <span class=\"underlined-concept\" data-concept=\"ductility\">ductile</span> (can be drawn into thin wires). They produce a ringing sound when struck (<span class=\"underlined-concept\" data-concept=\"sonorous\">sonorous</span>). Non-metals are dull, brittle, poor conductors, and non-sonorous.",
                            easyExplanation: "Metals like iron, gold, and aluminium can be hammered flat into foil (malleability) or stretched into wires (ductility), and they ring like a temple bell when hit (sonority). Non-metals like coal or sulphur shatter into powder if hit with a hammer.",
                            visualScene: "metal-properties",
                            visualLabel: "3D Malleability & Ductility Deformation Simulator"
                        },
                        {
                            num: 2,
                            heading: "Chemical Reactions with Oxygen & Water",
                            textbookIdea: "Metals react with oxygen to form metal oxides that are basic in nature (turning red litmus paper blue). Non-metals react with oxygen to form non-metal oxides that are acidic in nature (turning blue litmus paper red, e.g. SO2 forming sulfurous acid). Highly reactive metals like <span class=\"underlined-concept\" data-concept=\"sodium-reaction\">Sodium (Na)</span> react violently with water and air, producing hydrogen gas and catching fire, so sodium is preserved under kerosene.",
                            easyExplanation: "When iron rusts, it makes a basic oxide. When coal burns, it makes acidic carbon dioxide gas. Sodium metal is so greedy for oxygen that the moment air or a drop of water touches it, it explodes in flames—which is why scientists store it submerged in kerosene oil!",
                            visualScene: "oxidation-reactions",
                            visualLabel: "3D Chemical Oxidation & Litmus pH Indicator"
                        },
                        {
                            num: 3,
                            heading: "Displacement Reactions & The Reactivity Series",
                            textbookIdea: "In a chemical reaction, a more reactive metal displaces a less reactive metal from its salt solution in water: <span class=\"underlined-concept\" data-concept=\"displacement\">Displacement Reaction</span>. For example, when zinc is added to blue copper sulphate solution, zinc displaces copper: Zn + CuSO4 -> ZnSO4 (colorless) + Cu (reddish-brown precipitate). A less reactive metal cannot displace a more reactive metal.",
                            easyExplanation: "Think of a strong wrestling champion taking the seat of a weaker player. Zinc is chemically stronger than copper, so when zinc enters a blue copper solution, it kicks out copper and turns the solution clear, leaving reddish copper at the bottom!",
                            visualScene: "reactivity-series",
                            visualLabel: "3D Zinc-Copper Displacement Reaction Vessel"
                        }
                    ],
                    underlinedCards: [
                        {
                            id: "malleability",
                            word: "Malleability",
                            meaning: "The mechanical property of a metal to be beaten or rolled into extremely thin foils without fracturing.",
                            simpleExplanation: "The ability of metal to flatten out like paper under a hammer.",
                            example: "Silver foil (vark) decorating Indian sweets and aluminium foil wrapping sandwiches.",
                            visual: "🔨"
                        },
                        {
                            id: "ductility",
                            word: "Ductility",
                            meaning: "The physical property of a material to be drawn or stretched out into long, thin wires.",
                            simpleExplanation: "The ability of a metal to stretch into thin wires without snapping.",
                            example: "Copper wires inside household electrical cables and tungsten filaments in light bulbs.",
                            visual: "〰️"
                        },
                        {
                            id: "sonorous",
                            word: "Sonorous",
                            meaning: "The property of metals producing a deep, ringing musical tone when struck by a hard object.",
                            simpleExplanation: "The ringing acoustic chime made by metal bells.",
                            example: "Brass temple bells and bronze school gongs.",
                            visual: "🔔"
                        },
                        {
                            id: "sodium-reaction",
                            word: "Sodium Reactivity",
                            meaning: "The vigorous exothermic reaction of alkali metals with atmospheric moisture and oxygen.",
                            simpleExplanation: "Sodium reacts so fast with water that it catches fire and must be kept in kerosene.",
                            example: "Sodium metal bursting into yellow flames when dropped into water.",
                            visual: "💥"
                        },
                        {
                            id: "displacement",
                            word: "Displacement Reaction",
                            meaning: "A chemical reaction in which a more electropositive, reactive element replaces a less reactive element from its aqueous salt solution.",
                            simpleExplanation: "A chemical duel where a stronger metal pushes out a weaker metal from its liquid compound.",
                            example: "Zinc displacing copper from copper sulphate solution to yield zinc sulphate and solid copper.",
                            visual: "🧪"
                        }
                    ],
                    remember: "Mercury is the only metal that remains in a liquid state at room temperature, while Bromine is the only non-metal that is liquid at room temperature.",
                    funFact: "Gold is the most ductile metal on Earth! Just 1 single gram of pure gold can be drawn into a microscopic wire over 2 kilometers long!",
                    realLife: "Galvanization is the industrial process of coating steel water pipes with a layer of zinc to prevent iron rust, because zinc acts as a sacrificial barrier.",
                    vocabulary: [
                        { word: "Malleability", meaning: "Ability of metals to be beaten into thin sheets." },
                        { word: "Ductility", meaning: "Ability of metals to be drawn into wires." },
                        { word: "Lustre", meaning: "The shiny, reflective appearance of a fresh metal surface." },
                        { word: "Displacement", meaning: "A reaction where a more reactive element displaces a less reactive element." },
                        { word: "Metalloid", meaning: "Elements like Silicon and Germanium possessing properties intermediate between metals and non-metals." }
                    ],
                    summary: [
                        "Metals are malleable, ductile, sonorous, lustrous, and good thermal/electrical conductors.",
                        "Non-metals are generally dull, brittle, non-sonorous, and poor conductors (except graphite).",
                        "Metal oxides are basic (turn red litmus blue); non-metal oxides are acidic (turn blue litmus red).",
                        "Sodium and potassium are extremely reactive and are stored under kerosene oil.",
                        "In displacement reactions, more reactive metals displace less reactive metals from salt solutions."
                    ],
                    blooms: [
                        { level: "Remembering", q: "Name a non-metal that is a good conductor of electricity.", a: "Graphite (an allotrope of carbon) conducts electricity due to delocalized electrons." },
                        { level: "Understanding", q: "Why are electrical wires made of copper rather than iron or silver?", a: "Copper has very high electrical conductivity, is ductile and affordable; silver is too expensive, and iron has higher resistance." },
                        { level: "Applying", q: "What gas is evolved when a metal reacts with dilute hydrochloric acid, and how do you test it?", a: "Hydrogen gas (H2) is evolved; bringing a burning splinter near it makes it pop with a 'pop' sound." },
                        { level: "Analyzing", q: "Will a displacement reaction occur if a copper coin is dropped into zinc sulphate solution? Explain.", a: "No, because copper is less reactive than zinc and cannot displace zinc from its salt solution." },
                        { level: "Evaluating", q: "Why is phosphorus stored submerged in water while sodium is stored in kerosene?", a: "Phosphorus catches fire when exposed to air but does not react with water; sodium reacts vigorously with water but not kerosene." },
                        { level: "Creating", q: "Devise an electrical circuit experiment to test whether sulphur powder conducts electricity.", a: "Connect a battery, bulb, and switch with test leads touching compressed sulphur; the bulb fails to glow, proving it is an insulator." }
                    ],
                    quiz: [
                        { q: "Which metal exists in liquid state at normal room temperature?", options: ["Lead", "Mercury", "Aluminium", "Sodium"], correct: 1, exp: "Mercury (Hg) is the only metal that is liquid at standard room temperature." },
                        { q: "Which property allows gold and silver to be made into ultra-thin ornamental foils?", options: ["Ductility", "Malleability", "Sonority", "Hardness"], correct: 1, exp: "Malleability allows metals to be hammered into microscopically thin foils." },
                        { q: "What color change occurs when zinc is added to blue copper sulphate solution?", options: ["It turns deep green", "The blue color fades and becomes colorless with reddish copper deposit", "It turns bright yellow", "It turns pitch black"], correct: 1, exp: "Zn displaces Cu, forming colorless ZnSO4 solution and reddish-brown solid copper." },
                        { q: "Metal oxides are generally ________ in nature.", options: ["Acidic", "Basic", "Neutral", "Amphoteric only"], correct: 1, exp: "Metal oxides react with water to form bases that turn red litmus paper blue." },
                        { q: "Why is sodium metal stored immersed in kerosene?", options: ["To keep it cool", "It reacts vigorously with moisture and oxygen in air", "To prevent it from evaporating", "To dissolve it"], correct: 1, exp: "Sodium is violently reactive with water and air, so it is safely shielded under kerosene." }
                    ],
                    flashcards: [
                        { q: "What is malleability?", a: "The property of metals to be hammered into thin sheets without breaking." },
                        { q: "What is ductility?", a: "The property of metals to be stretched into thin wires." },
                        { q: "Which non-metal conducts electricity?", a: "Graphite." },
                        { q: "What gas is produced when metals react with acids?", a: "Hydrogen gas (H2)." },
                        { q: "State the law of displacement reactions.", a: "A more reactive metal displaces a less reactive metal from its aqueous salt solution." }
                    ],
                    comparison: {
                        title: "Metals vs. Non-Metals",
                        headers: ["Property", "Metals", "Non-Metals"],
                        rows: [
                            ["Physical State", "Mostly solids at room temp (except Mercury)", "Solids, gases, and one liquid (Bromine)"],
                            ["Malleability & Ductility", "Highly malleable and ductile", "Brittle, breaks into powder when struck"],
                            ["Electrical Conductivity", "Good conductors of electricity", "Poor conductors (insulators), except graphite"],
                            ["Nature of Oxides", "Basic oxides (turn red litmus blue)", "Acidic oxides (turn blue litmus red)"]
                        ],
                        vsSummary: "Metals are lustrous, malleable, ductile electrical conductors forming basic oxides, while non-metals are brittle insulators forming acidic oxides."
                    }
                }
            ],
            exam: [
                { q: "Which of the following is the most reactive metal in the reactivity series?", options: ["Copper", "Iron", "Potassium", "Silver"], correct: 2, exp: "Potassium sits at the very top of the chemical reactivity series." },
                { q: "The property of producing a ringing sound when struck is called:", options: ["Lustre", "Sonority", "Malleability", "Ductility"], correct: 1, exp: "Sonority is the acoustic property of metals producing resonant ringing tones." },
                { q: "What gas is produced when magnesium reacts with hydrochloric acid?", options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Chlorine"], correct: 2, exp: "Mg + 2HCl -> MgCl2 + H2 (hydrogen gas)." },
                { q: "Which non-metal is essential for human respiration and burning of fuels?", options: ["Nitrogen", "Oxygen", "Hydrogen", "Argon"], correct: 1, exp: "Oxygen is necessary for cellular respiration and combustion." },
                { q: "Which metal is soft enough to be easily cut with a butter knife?", options: ["Iron", "Sodium", "Copper", "Aluminium"], correct: 1, exp: "Sodium and potassium are soft alkali metals with low density." },
                { q: "What happens when sulphur dioxide gas dissolves in water?", options: ["Sulphuric acid is formed", "Sulphurous acid is formed which turns blue litmus red", "No reaction occurs", "Hydrogen gas explodes"], correct: 1, exp: "SO2 + H2O -> H2SO3 (sulfurous acid, an acidic non-metal solution)." },
                { q: "Rusting of iron requires the presence of both:", options: ["Oxygen and water/moisture", "Nitrogen and carbon", "Hydrogen and sunlight", "Carbon dioxide and oil"], correct: 0, exp: "Iron rusts to hydrated ferric oxide (Fe2O3.xH2O) in the presence of oxygen and water." },
                { q: "Which metal does not react even with boiling water or steam?", options: ["Sodium", "Magnesium", "Gold", "Iron"], correct: 2, exp: "Gold is an unreactive noble metal at the bottom of the reactivity series." },
                { q: "Which non-metal is used in the vulcanization of rubber to make tyres tough?", options: ["Sulphur", "Phosphorus", "Carbon", "Iodine"], correct: 0, exp: "Sulphur cross-links rubber polymers during vulcanization." },
                { q: "Which non-metal is kept submerged in water to prevent it from catching fire in air?", options: ["Sodium", "Phosphorus", "Sulphur", "Carbon"], correct: 1, exp: "White phosphorus catches fire spontaneously in air, so it is stored under water." },
                { q: "Food cans are coated with tin rather than zinc because:", options: ["Zinc is costlier", "Zinc is more reactive than tin and would contaminate food", "Tin has a higher melting point", "Zinc is brittle"], correct: 1, exp: "Zinc is more reactive and could react with food acids, making it toxic." },
                { q: "The green coating that forms on copper statues exposed to moist air is:", options: ["Copper oxide", "Basic copper carbonate [CuCO3.Cu(OH)2]", "Copper sulphate", "Copper chloride"], correct: 1, exp: "Moist air with CO2 and water forms a basic copper carbonate patina." },
                { q: "Which non-metal is an antiseptic applied on cuts and wounds as a purple tincture?", options: ["Bromine", "Iodine", "Chlorine", "Fluorine"], correct: 1, exp: "Tincture of iodine is a widely used medicinal antiseptic." },
                { q: "Which element is used to manufacture computer microprocessor chips?", options: ["Iron", "Silicon (a metalloid)", "Lead", "Sulphur"], correct: 1, exp: "Silicon is a semiconductor metalloid foundational to modern computing." },
                { q: "Which metal is used in thermometers because of its uniform expansion?", options: ["Silver", "Mercury", "Copper", "Lead"], correct: 1, exp: "Mercury expands uniformly across a wide liquid temperature range." },
                { q: "When iron nails are placed in blue copper sulphate solution, the solution turns:", options: ["Deep red", "Greenish due to iron sulphate formation", "Colorless", "Yellow"], correct: 1, exp: "Fe + CuSO4 -> FeSO4 (light green solution) + Cu (red precipitate)." },
                { q: "Which metal burns with a dazzling white flame when ignited in air?", options: ["Sodium", "Magnesium", "Copper", "Iron"], correct: 1, exp: "Magnesium ribbon burns with an intense, dazzling white light forming MgO." },
                { q: "The ability of metals to reflect light and shine brilliantly is called:", options: ["Metallic lustre", "Phosphorescence", "Malleability", "Opacity"], correct: 0, exp: "Lustre refers to the specular shine of clean metallic surfaces." },
                { q: "Which non-metal is the hardest naturally occurring substance on Earth?", options: ["Graphite", "Diamond (allotrope of carbon)", "Silicon", "Phosphorus"], correct: 1, exp: "Diamond has a rigid 3D tetrahedral carbon covalent network." },
                { q: "Which of the following displacement reactions will NOT take place?", options: ["Zn + CuSO4 -> ZnSO4 + Cu", "Fe + CuSO4 -> FeSO4 + Cu", "Cu + FeSO4 -> CuSO4 + Fe", "Mg + CuSO4 -> MgSO4 + Cu"], correct: 2, exp: "Copper is less reactive than iron, so it cannot displace iron from FeSO4." }
            ]
        },
        {
            chapterNum: 5,
            title: "Sound",
            summary: "Investigate acoustic vibrations, amplitude, frequency, pitch, loudness, and human ear anatomy.",
            topics: [
                {
                    topicNum: 1,
                    title: "Production and Characteristics of Sound",
                    visualScene: "sound-wave",
                    visualLabel: "3D Vibrating Tuning Fork & Longitudinal Wave Simulator",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Vibrations & Sound Propagation",
                            textbookIdea: "Sound is produced by <span class=\"underlined-concept\" data-concept=\"vibrations\">vibrating bodies</span>. It propagates as mechanical longitudinal waves consisting of alternate compressions and rarefactions through solids, liquids, and gases. Sound cannot travel through a vacuum because it requires a material medium.",
                            easyExplanation: "When you strike a tuning fork or guitar string, it shakes back and forth rapidly (vibrates). This pushes nearby air molecules into bunches (compressions) and stretches (rarefactions), carrying sound to your ears. In empty space, there are no air molecules, so sound cannot travel!",
                            visualScene: "sound-wave",
                            visualLabel: "3D Compression & Rarefaction Wave Pulses"
                        },
                        {
                            num: 2,
                            heading: "Amplitude, Frequency, Loudness & Pitch",
                            textbookIdea: "The loudness of sound depends on the square of its <span class=\"underlined-concept\" data-concept=\"amplitude\">amplitude</span> of vibration, measured in decibels (dB). The pitch or shrillness depends on the <span class=\"underlined-concept\" data-concept=\"frequency\">frequency</span> of vibration (number of oscillations per second, in Hertz, Hz). High frequency produces high-pitched shrill sounds (e.g. bird chirp), while low frequency produces low-pitched bass sounds (e.g. drum).",
                            easyExplanation: "How loud a sound is depends on how big the vibration waves are (amplitude). How sharp or squeaky a sound is depends on how many times it vibrates per second (frequency). A lion's roar has large amplitude (loud) but low frequency (deep roar); a whistle has high frequency (sharp squeak).",
                            visualScene: "sound-wave",
                            visualLabel: "3D Interactive Amplitude & Frequency Slider"
                        }
                    ],
                    underlinedCards: [
                        { id: "vibrations", word: "Vibrations", meaning: "Rapid back-and-forth periodic motion of an object about its mean central position.", simpleExplanation: "Rapid shaking that generates acoustic pressure waves.", example: "Strumming a tight guitar string.", visual: "🎸" },
                        { id: "amplitude", word: "Amplitude", meaning: "The maximum displacement of a vibrating particle from its mean position.", simpleExplanation: "The height of the sound wave that dictates loudness.", example: "Beating a drum softly vs hitting it with full force.", visual: "🔊" },
                        { id: "frequency", word: "Frequency", meaning: "The number of complete oscillations or wave cycles completed per second (Hertz, Hz).", simpleExplanation: "How many times a sound wave shakes every second, controlling pitch.", example: "Human vocal cords vibrating at 120 Hz (men) vs 220 Hz (women).", visual: "〰️" }
                    ],
                    remember: "Human hearing range is restricted to audible frequencies between 20 Hz and 20,000 Hz. Infrasonic sounds are below 20 Hz, and ultrasonic sounds are above 20,000 Hz.",
                    funFact: "Bats navigate and catch insects in total darkness using ultrasonic echolocation clicks above 100,000 Hz!",
                    realLife: "Doctors use ultrasound scanners (sound waves above 20 kHz) to view unborn babies and internal organs without painful radiation.",
                    vocabulary: [
                        { word: "Hertz (Hz)", meaning: "SI unit of frequency representing one oscillation cycle per second." },
                        { word: "Decibel (dB)", meaning: "Unit measuring the relative loudness of sound." },
                        { word: "Larynx", meaning: "The human voice box containing vocal cords that vibrate to produce speech." },
                        { word: "Tympanic Membrane", meaning: "The eardrum that vibrates upon receiving sound waves." }
                    ],
                    summary: [
                        "Sound is created by vibrating matter and travels as longitudinal pressure waves.",
                        "Sound requires a solid, liquid, or gaseous material medium and cannot travel in a vacuum.",
                        "Loudness is determined by amplitude (dB); pitch is determined by frequency (Hz).",
                        "Human audible range is strictly 20 Hz to 20,000 Hz.",
                        "Noise pollution is hazardous to health and can be minimized by planting trees and mufflers."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What is the normal human audible frequency range?", a: "20 Hz to 20,000 Hz." },
                        { level: "Understanding", q: "Why can't astronauts talk directly to each other on the Moon without radio communicators?", a: "Because the Moon has no atmosphere (vacuum) and sound cannot propagate without a medium." },
                        { level: "Applying", q: "If a pendulum oscillates 40 times in 4 seconds, calculate its frequency and time period.", a: "Frequency = 40 / 4 = 10 Hz; Time Period = 1 / 10 = 0.1 seconds." },
                        { level: "Analyzing", q: "Contrast the acoustic properties of a baby's cry with a lion's roar.", a: "A baby's cry has high frequency (high pitch/shrill) and moderate loudness; a lion's roar has high amplitude (loud) and low frequency." },
                        { level: "Evaluating", q: "Assess why planting trees along busy highways reduces city noise pollution.", a: "Foliage and tree trunks absorb, refract, and scatter acoustic waves, acting as a natural green muffler." },
                        { level: "Creating", q: "Design a simple string telephone using paper cups to demonstrate sound transmission in solids.", a: "Puncture two paper cups, thread a taut cotton string between them; speaking into one cup sends sound waves vibrating down the string." }
                    ],
                    quiz: [
                        { q: "Sound cannot travel through:", options: ["Water", "Steel", "Air", "A vacuum"], correct: 3, exp: "Sound is a mechanical wave requiring material particles; it cannot travel in a vacuum." },
                        { q: "The pitch of sound is determined by its:", options: ["Frequency", "Amplitude", "Speed", "Color"], correct: 0, exp: "Frequency determines how shrill or deep a pitch sounds." },
                        { q: "What is the SI unit of frequency?", options: ["Decibel", "Newton", "Hertz (Hz)", "Pascal"], correct: 2, exp: "Frequency is measured in Hertz (oscillations per second)." },
                        { q: "Which part of the human ear vibrates first when sound waves hit it?", options: ["Cochlea", "Auditory nerve", "Tympanum (eardrum)", "Stapes"], correct: 2, exp: "Sound waves travel down the ear canal and cause the eardrum (tympanum) to vibrate." },
                        { q: "Frequencies above 20,000 Hz are classified as:", options: ["Infrasonic", "Ultrasonic", "Supersonic", "Hypersonic"], correct: 1, exp: "Sound frequencies above the human upper limit of 20,000 Hz are ultrasonic." }
                    ],
                    flashcards: [
                        { q: "What produces sound?", a: "Vibrations of physical bodies." },
                        { q: "What determines loudness?", a: "The amplitude of vibration." },
                        { q: "What determines pitch?", a: "The frequency of vibration." },
                        { q: "What is the audible frequency range for humans?", a: "20 Hz to 20,000 Hz." },
                        { q: "Can sound travel through space vacuum?", a: "No, sound requires a material medium." }
                    ],
                    comparison: {
                        title: "Loudness vs. Pitch",
                        headers: ["Feature", "Loudness", "Pitch"],
                        rows: [
                            ["Governing Factor", "Amplitude of vibration", "Frequency of vibration"],
                            ["Unit of Measurement", "Decibels (dB)", "Hertz (Hz)"],
                            ["Acoustic Effect", "Soft sound vs. booming deafening roar", "Flat bass tone vs. piercing sharp squeak"]
                        ],
                        vsSummary: "Loudness depends on wave amplitude (energy), while pitch depends on wave frequency (vibration speed)."
                    }
                }
            ],
            exam: [
                { q: "The speed of sound is fastest in:", options: ["Solids (e.g. steel)", "Liquids (e.g. water)", "Gases (e.g. air)", "Vacuum"], correct: 0, exp: "Tightly packed atoms in solids transmit vibrational pressure waves fastest." },
                { q: "Sound waves are:", options: ["Transverse electromagnetic waves", "Longitudinal mechanical waves", "Stationary waves", "Light photons"], correct: 1, exp: "Sound waves propagate via longitudinal compressions and rarefactions." },
                { q: "The loudness of sound is proportional to the:", options: ["Square of the amplitude", "Frequency", "Time period", "Wavelength"], correct: 0, exp: "Loudness is proportional to amplitude squared: Loudness ∝ (Amplitude)²." },
                { q: "Sounds below 20 Hz are termed:", options: ["Ultrasonic", "Infrasonic", "Audible", "Supersonic"], correct: 1, exp: "Infrasonic frequencies lie below the lower human threshold of 20 Hz." },
                { q: "The human voice is produced by the vibration of:", options: ["Tongue", "Vocal cords in the larynx", "Teeth", "Windpipe"], correct: 1, exp: "Air from the lungs forces the stretched vocal cords in the larynx to vibrate." },
                { q: "Which animal communicates using infrasound over vast forest distances?", options: ["Bats", "Elephants", "Dogs", "Birds"], correct: 1, exp: "Elephants use low-frequency infrasound (<20 Hz) that travels miles through ground and air." },
                { q: "What is the time period of an oscillation with a frequency of 50 Hz?", options: ["50 s", "0.02 s", "2 s", "0.5 s"], correct: 1, exp: "Time period T = 1 / f = 1 / 50 = 0.02 seconds." },
                { q: "The three tiny bones in the middle ear are the malleus, incus, and:", options: ["Femur", "Stapes", "Tibia", "Radius"], correct: 1, exp: "The stapes (stirrup) is the smallest bone in the human body." },
                { q: "Noise pollution above what level can cause permanent hearing damage over time?", options: ["20 dB", "40 dB", "80 dB", "50 dB"], correct: 2, exp: "Continuous exposure to sound levels exceeding 80 dB causes progressive hearing impairment." },
                { q: "Echoes can be heard distinctly only if the reflecting surface is at least ________ away.", options: ["5 meters", "17.2 meters", "50 meters", "100 meters"], correct: 1, exp: "With persistence of hearing at 0.1s, the minimum distance for an echo in air is 17.2m." },
                { q: "Which property of sound changes when a singer moves from a bass note to a soprano note?", options: ["Velocity of sound", "Frequency (pitch)", "Color of sound", "Air density"], correct: 1, exp: "Changing musical notes changes their oscillation frequency (pitch)." },
                { q: "Sound travels in air at approximately:", options: ["300,000 km/s", "343 m/s", "1500 m/s", "5000 m/s"], correct: 1, exp: "At room temperature (20°C), sound travels in dry air at about 343 m/s." },
                { q: "Why do dogs respond to special dog whistles that humans cannot hear?", options: ["Dogs hear ultrasonic sounds above 20 kHz", "Dogs have larger eyes", "The whistle has no sound", "Dogs read magnetic fields"], correct: 0, exp: "Galton whistles emit ultrasonic tones audible to canines (up to 45 kHz)." },
                { q: "What converts mechanical sound vibrations into electrical nerve impulses in the inner ear?", options: ["Eardrum", "Pinna", "Cochlea", "Eustachian tube"], correct: 2, exp: "Hair cells inside the fluid-filled cochlea generate electrical impulses for the brain." },
                { q: "Unpleasant and unwanted sound is termed:", options: ["Music", "Noise", "Echo", "Resonance"], correct: 1, exp: "Noise is defined acoustically as unwanted, irregular, disturbing sound." },
                { q: "Sound absorbs best in materials that are:", options: ["Hard and polished like marble", "Porous and soft like curtains and acoustic foam", "Metallic", "Glass"], correct: 1, exp: "Soft porous materials trap sound waves and dissipate acoustic energy as heat." },
                { q: "If the amplitude of a sound vibration is tripled, its loudness increases by:", options: ["3 times", "6 times", "9 times", "Unchanged"], correct: 2, exp: "Loudness ∝ (Amplitude)², so 3² = 9 times increase." },
                { q: "Why is lightning seen before thunder is heard?", options: ["Lightning happens first", "Light travels at 300,000 km/s while sound travels at only 343 m/s", "Eyes are faster than ears", "Clouds absorb thunder"], correct: 1, exp: "Light travels almost a million times faster than sound in air." },
                { q: "Which instrument produces sound via a vibrating air column?", options: ["Guitar", "Flute", "Tabla", "Violin"], correct: 1, exp: "Flutes and clarinets produce music by vibrating air columns." },
                { q: "The outer visible funnel-shaped part of the human ear is called:", options: ["Cochlea", "Pinna", "Eardrum", "Tympanum"], correct: 1, exp: "The pinna collects sound waves from the surrounding environment." }
            ]
        },
        {
            chapterNum: 6,
            title: "Coal and Petroleum",
            summary: "Understand fossil fuel formation, carbonisation, petroleum fractional distillation, and PCRA energy conservation.",
            topics: [
                {
                    topicNum: 1,
                    title: "Fossil Fuels & Refining Operations",
                    visualScene: "fractional-distillation",
                    visualLabel: "3D Petroleum Fractional Distillation Tower",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Origin & Carbonisation of Coal",
                            textbookIdea: "Coal was formed about 300 million years ago from dense swamp forests buried under soil. Under extreme heat and pressure over geological eras, dead vegetation slowly converted into coal through <span class=\"underlined-concept\" data-concept=\"carbonisation\">carbonisation</span>. Destructive distillation of coal yields coke, coal tar, and coal gas.",
                            easyExplanation: "Hundreds of millions of years ago, prehistoric forests sank into swamps and got buried under layers of mud. High heat and pressure crushed them over millions of years, turning dead trees into coal rock!",
                            visualScene: "coal-formation",
                            visualLabel: "3D Prehistoric Swamp to Coal Seam Geological Cutaway"
                        },
                        {
                            num: 2,
                            heading: "Petroleum Extraction & Fractional Distillation",
                            textbookIdea: "Petroleum was formed from microscopic organisms buried in ocean beds. Crude petroleum is separated into useful fractions in a refinery by <span class=\"underlined-concept\" data-concept=\"fractional-distillation\">fractional distillation</span> based on differences in boiling points. Fractions include LPG, petrol, kerosene, diesel, lubricating oil, paraffin wax, and bitumen.",
                            easyExplanation: "Crude black petroleum is a soup of many oils. In a refinery, it is heated in a tall distillation tower. Lighter fuels with low boiling points (like petrol) boil off to the top, while thick fuels (like diesel and road bitumen) stay at the bottom.",
                            visualScene: "fractional-distillation",
                            visualLabel: "3D Distillation Column Temperature Trays"
                        }
                    ],
                    underlinedCards: [
                        { id: "carbonisation", word: "Carbonisation", meaning: "The slow geological process of conversion of dead organic vegetation into carbon-rich coal under immense subterranean pressure and heat.", simpleExplanation: "Nature's recipe for baking dead forests into coal over millions of years.", example: "Bituminous coal beds mined in Singareni Collieries of Telangana.", visual: "⛏️" },
                        { id: "fractional-distillation", word: "Fractional Distillation", meaning: "The process of separating a liquid mixture into chemical fractions by boiling at different boiling point temperatures in a fractionating column.", simpleExplanation: "Boiling crude oil to separate petrol, kerosene, and diesel into distinct layers.", example: "Crude oil refineries separating jet fuel from road tar.", visual: "🏭" }
                    ],
                    remember: "Bitumen, a heavy petroleum residue, has completely replaced coal tar for metalling road surfaces in modern civil engineering.",
                    funFact: "Petroleum is nicknamed 'Black Gold' because of its extraordinary commercial value and critical role in modern global transportation and petrochemicals!",
                    realLife: "CNG (Compressed Natural Gas) is stored under high pressure and used as a clean alternative fuel in auto-rickshaws and buses because it burns with negligible smoke.",
                    vocabulary: [
                        { word: "Fossil Fuel", meaning: "Exhaustible fuel derived from the ancient remains of prehistoric plants and animals." },
                        { word: "Coke", meaning: "Almost pure carbon residue obtained from destructive distillation of coal." },
                        { word: "Bitumen", meaning: "Heavy petroleum product used for surfacing roads." },
                        { word: "PCRA", meaning: "Petroleum Conservation Research Association advising fuel efficiency." }
                    ],
                    summary: [
                        "Coal, petroleum, and natural gas are exhaustible fossil fuels formed over millions of years.",
                        "Coal formation from plant remains through heat and pressure is called carbonisation.",
                        "Petroleum is separated into petrol, diesel, kerosene, and LPG by fractional distillation.",
                        "Natural gas is stored as clean-burning CNG.",
                        "Fossil fuels are finite and burning them drives global warming, demanding conservation."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What is carbonisation?", a: "The slow conversion of dead vegetation into coal under high pressure and heat." },
                        { level: "Understanding", q: "Why are coal and petroleum classified as exhaustible natural resources?", a: "Because their formation takes millions of years while human consumption exhausts them within centuries." },
                        { level: "Applying", q: "List three practical driving tips recommended by PCRA to save vehicle fuel.", a: "Drive at moderate constant speed, ensure correct tyre pressure, and switch off engine at traffic signals." },
                        { level: "Analyzing", q: "Explain how fractional distillation separates petrol from diesel.", a: "Petrol has a lower boiling point and condenses near the top of the tower; diesel boils higher and condenses lower." },
                        { level: "Evaluating", q: "Why is CNG preferred over diesel for public city transport buses?", a: "CNG burns completely without leaving ash or producing dark particulate soot, dramatically reducing city smog." },
                        { level: "Creating", q: "Propose a community renewable energy plan to reduce dependence on fossil fuel generators.", a: "Install rooftop solar photovoltaic panels with battery storage and solar water heating systems." }
                    ],
                    quiz: [
                        { q: "The slow conversion of dead vegetation into coal is called:", options: ["Carbonisation", "Fermentation", "Fractionation", "Condensation"], correct: 0, exp: "Carbonisation is the geological synthesis of coal from buried plants." },
                        { q: "Which petroleum fraction is used for surfacing roads?", options: ["Diesel", "Bitumen", "Paraffin wax", "Kerosene"], correct: 1, exp: "Bitumen is the heavy asphalt residue used for paving roads." },
                        { q: "Which is the purest form of carbon obtained from coal?", options: ["Coal tar", "Coke", "Coal gas", "Lignite"], correct: 1, exp: "Coke contains about 98% pure carbon." },
                        { q: "What is the main hydrocarbon constituent of natural gas?", options: ["Methane (CH4)", "Butane", "Propane", "Octane"], correct: 0, exp: "Natural gas consists predominantly of methane." },
                        { q: "Petroleum was formed from the remains of:", options: ["Terrestrial trees", "Microscopic sea organisms buried under ocean sediments", "Volcanic magma", "Meteorite dust"], correct: 1, exp: "Petroleum formed from marine plankton and algae compressed under ocean beds." }
                    ],
                    flashcards: [
                        { q: "Name three fossil fuels.", a: "Coal, petroleum, and natural gas." },
                        { q: "What is Black Gold?", a: "Petroleum, due to its immense commercial utility." },
                        { q: "What is CNG?", a: "Compressed Natural Gas." },
                        { q: "What is destructive distillation of coal?", a: "Heating coal strongly in the absence of air." },
                        { q: "What does PCRA stand for?", a: "Petroleum Conservation Research Association." }
                    ],
                    comparison: {
                        title: "Coal vs. Petroleum",
                        headers: ["Feature", "Coal", "Petroleum"],
                        rows: [
                            ["Origin", "Buried prehistoric swamp forests and trees", "Marine microorganisms on ocean beds"],
                            ["Physical State", "Solid black rock", "Viscous dark crude liquid"],
                            ["Key Byproducts", "Coke, Coal Tar, Coal Gas", "LPG, Petrol, Diesel, Kerosene, Bitumen"]
                        ],
                        vsSummary: "Coal originated from land vegetation producing solid coke and tar, whereas petroleum originated from marine life producing liquid transport fuels."
                    }
                }
            ],
            exam: [
                { q: "Which gas is released during destructive distillation of coal?", options: ["Oxygen", "Coal gas", "Chlorine", "Argon"], correct: 1, exp: "Coal gas is a combustible mixture produced during coal distillation." },
                { q: "Petroleum refining is carried out using:", options: ["Centrifugation", "Fractional distillation", "Filtration", "Electrolysis"], correct: 1, exp: "Fractional distillation separates hydrocarbons by boiling point." },
                { q: "Which of the following is an inexhaustible resource?", options: ["Coal", "Petroleum", "Sunlight", "Natural gas"], correct: 2, exp: "Sunlight is renewable and inexhaustible on human timescales." },
                { q: "The lowest temperature fraction that condenses at the top of a refinery tower is:", options: ["Bitumen", "Petroleum gas (LPG)", "Diesel", "Heavy fuel oil"], correct: 1, exp: "Petroleum gases have the lowest boiling points." },
                { q: "Which fossil fuel is known for leaving zero ash upon combustion?", options: ["Coal", "Natural gas", "Firewood", "Cow dung"], correct: 1, exp: "Gaseous methane burns cleanly without solid ash residue." },
                { q: "Naphthalene balls used to repel moths are derived from:", options: ["Coal tar", "Petroleum wax", "Wood pulp", "Diesel"], correct: 0, exp: "Naphthalene is an aromatic hydrocarbon extracted from coal tar." },
                { q: "What is the primary cause of acid rain linked to burning coal?", options: ["Release of SO2 and NO2 gases", "Release of oxygen", "Dust particles", "Water vapor"], correct: 0, exp: "Sulphur and nitrogen oxides dissolve in rain clouds to form acids." },
                { q: "In India, vast oil deposits are found in Assam, Mumbai High, and the deltas of:", options: ["Ganga and Yamuna", "Krishna and Godavari", "Kaveri and Periyar", "Narmada and Tapti"], correct: 1, exp: "The Krishna-Godavari (KG) basin is rich in offshore petroleum and natural gas." },
                { q: "Which organization in India promotes fuel conservation guidelines?", options: ["ISRO", "PCRA", "DRDO", "RBI"], correct: 1, exp: "PCRA (Petroleum Conservation Research Association)." },
                { q: "LPG stands for:", options: ["Low Pressure Gasoline", "Liquefied Petroleum Gas", "Liquid Paraffin Gas", "Light Plastic Gas"], correct: 1, exp: "LPG is liquefied petroleum gas composed mainly of butane and propane." },
                { q: "Coal was formed approximately how many years ago?", options: ["1,000 years", "300 million years", "50,000 years", "10 million years"], correct: 1, exp: "During the Carboniferous period about 300 million years ago." },
                { q: "Which fraction of petroleum is used as jet fuel for aircraft engines?", options: ["Asphalt", "Purified kerosene fraction", "Furnace oil", "Grease"], correct: 1, exp: "Aviation turbine fuel is a specialized high-grade kerosene fraction." },
                { q: "Paraffin wax is utilized in making:", options: ["Candles and vaseline ointments", "Road tarmac", "Car engines", "Steel alloys"], correct: 0, exp: "Paraffin wax is used for candles, cosmetics, and medical ointments." },
                { q: "Why are fossil fuels non-renewable?", options: ["They cost too much", "Their natural replenishment rate is millions of years slower than human consumption", "They pollute air", "They are synthetic"], correct: 1, exp: "Geological formation requires millions of years." },
                { q: "Which fuel is best suited for domestic cooking cylinders?", options: ["Coal", "LPG", "Diesel", "Wood"], correct: 1, exp: "LPG provides high calorific value with smokeless, controllable combustion." },
                { q: "What is an oil slick?", options: ["A lubricated engine", "Accidental crude oil spillage over oceans devastating marine ecosystems", "A paved highway", "An oil pipeline"], correct: 1, exp: "Marine oil spills coat ocean surfaces, killing seabirds and coral reefs." },
                { q: "Which coal grade has the highest percentage of carbon?", options: ["Peat", "Lignite", "Bituminous", "Anthracite"], correct: 3, exp: "Anthracite has over 90% carbon content." },
                { q: "What is the main chemical element present in all fossil fuels?", options: ["Silicon", "Carbon", "Aluminium", "Sulphur"], correct: 1, exp: "Fossil fuels are carbon-based organic compounds (hydrocarbons)." },
                { q: "Natural gas is called 'clean' because it produces:", options: ["Toxic fumes", "Substantially less carbon emissions and no ash", "Zero heat", "Soot"], correct: 1, exp: "Methane produces clean combustion products: CO2 and water vapor." },
                { q: "Excessive burning of fossil fuels is the primary driver of:", options: ["Ocean tides", "Global warming and climate change", "Solar flares", "Plate tectonics"], correct: 1, exp: "CO2 greenhouse emissions trap heat in the atmosphere." }
            ]
        },
        {
            chapterNum: 7,
            title: "Combustion, Fuels and Flame",
            summary: "Explore chemical combustion, ignition temperatures, flame zones, calorific values, and fire safety.",
            topics: [
                {
                    topicNum: 1,
                    title: "Principles of Combustion & Flame Structure",
                    visualScene: "combustion-flame",
                    visualLabel: "3D Labeled Candle Flame Zones & Thermal Profile",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Conditions for Combustion",
                            textbookIdea: "Combustion is a chemical process in which a substance reacts with oxygen to give off heat and light. Three conditions are mandatory: 1) Presence of a combustible fuel; 2) Constant supply of oxygen (supporter of combustion); 3) Heating the substance to its <span class=\"underlined-concept\" data-concept=\"ignition-temp\">ignition temperature</span>—the lowest temperature at which it catches fire.",
                            easyExplanation: "Fire needs three friends to exist (the fire triangle): fuel to burn, oxygen from the air, and enough heat to reach its ignition temperature. If you take away even one of these three, the fire goes out instantly!",
                            visualScene: "combustion-flame",
                            visualLabel: "3D Fire Triangle & Ignition Threshold"
                        },
                        {
                            num: 2,
                            heading: "Zones of a Flame",
                            textbookIdea: "A candle flame consists of three distinct concentric zones: 1) <span class=\"underlined-concept\" data-concept=\"outer-zone\">Outer non-luminous blue zone</span>: Complete combustion with maximum oxygen supply, hottest part of the flame; 2) <span class=\"underlined-concept\" data-concept=\"middle-zone\">Middle luminous yellow zone</span>: Partial incomplete combustion with carbon particles glowing yellow, moderately hot; 3) <span class=\"underlined-concept\" data-concept=\"inner-zone\">Innermost dark zone</span>: Unburnt wax vapors surrounding the wick, least hot.",
                            easyExplanation: "Look closely at a candle flame: the very outside has a faint blue halo where oxygen is plentiful—this is the hottest part! The middle glows bright yellow because tiny soot specks get white-hot. The dark shadow right around the thread is the coolest, containing unburnt wax gas.",
                            visualScene: "combustion-flame",
                            visualLabel: "3D Concentric Flame Zones with Temperature Readouts"
                        }
                    ],
                    underlinedCards: [
                        { id: "ignition-temp", word: "Ignition Temperature", meaning: "The minimum temperature to which a combustible substance must be heated before it will catch fire and sustain combustion.", simpleExplanation: "The starting spark temperature needed for something to catch fire.", example: "Kerosene catches fire at a lower ignition temperature than firewood.", visual: "🔥" },
                        { id: "outer-zone", word: "Outer Zone of Flame", meaning: "The blue, non-luminous outermost envelope of complete combustion, representing the hottest portion of a flame.", simpleExplanation: "The hottest blue rim where gas burns with plenty of air.", example: "Goldsmiths blowing through the outer blue flame to melt gold ornaments.", visual: "💙" },
                        { id: "middle-zone", word: "Middle Zone of Flame", meaning: "The bright yellow luminous zone of incomplete combustion containing glowing carbon particles.", simpleExplanation: "The bright yellow light-giving part of the flame.", example: "Yellow light cast by traditional wax candles.", visual: "💛" },
                        { id: "inner-zone", word: "Innermost Zone", meaning: "The dark zone immediately surrounding the wick containing unburnt fuel vapors.", simpleExplanation: "The coolest black center where vaporized wax hasn't burned yet.", example: "The dark area right around a candle's cotton wick.", visual: "🖤" }
                    ],
                    remember: "Goldsmiths blow the outer blue non-luminous zone of a flame onto gold with a metallic blowpipe because that zone is the hottest and cleanest.",
                    funFact: "In zero-gravity space aboard the space station, candle flames burn as tiny blue spheres because there are no gravity-driven convection currents!",
                    realLife: "Carbon dioxide fire extinguishers smother electrical and oil fires because CO2 is denser than air, blanketing the flames and cutting off oxygen supply.",
                    vocabulary: [
                        { word: "Combustion", meaning: "Chemical reaction with oxygen releasing heat and light." },
                        { word: "Calorific Value", meaning: "The heat energy produced by burning 1 kg of fuel completely (measured in kJ/kg)." },
                        { word: "Inflammable Substance", meaning: "Substances with low ignition temperature that catch fire easily (e.g. petrol, alcohol)." }
                    ],
                    summary: [
                        "Combustion requires fuel, oxygen supporter, and heat exceeding the ignition temperature.",
                        "Substances that vaporize during burning produce flames; charcoal burns without flame.",
                        "Flame has three zones: outer hottest blue zone, middle luminous yellow zone, inner dark vapor zone.",
                        "Calorific value measures fuel efficiency in kilojoules per kilogram (kJ/kg).",
                        "Water should never be used on electrical or oil fires; use carbon dioxide (CO2) instead."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What are the three essential requirements for producing fire?", a: "Fuel, oxygen (air), and heat to reach the ignition temperature." },
                        { level: "Understanding", q: "Why should water never be poured on an electrical fire?", a: "Water conducts electricity and could electrocute firefighters." },
                        { level: "Applying", q: "Why do goldsmiths use a blowpipe with the outermost zone of a flame?", a: "Because the outermost blue zone has complete combustion and reaches the highest temperature necessary to melt gold." },
                        { level: "Analyzing", q: "Why does a matchstick catch fire when struck against the side of a matchbox?", a: "Friction generates heat that raises red phosphorus to its ignition temperature, starting combustion." },
                        { level: "Evaluating", q: "Compare hydrogen gas with LPG as household cooking fuel.", a: "Hydrogen has higher calorific value (150,000 kJ/kg) but is dangerously explosive to store; LPG is safer for homes." },
                        { level: "Creating", q: "Design a household fire-escape and emergency protocol for an accidental LPG cylinder leak.", a: "Never turn on electrical switches, open all doors and windows to dissipate gas, turn off cylinder regulator valve, and call emergency helpline." }
                    ],
                    quiz: [
                        { q: "Which part of a candle flame is the hottest?", options: ["Innermost dark zone", "Middle luminous yellow zone", "Outermost blue non-luminous zone", "Wick itself"], correct: 2, exp: "The outermost zone receives maximum oxygen, undergoing complete combustion at highest temperature." },
                        { q: "What is the lowest temperature at which a substance catches fire?", options: ["Melting point", "Boiling point", "Ignition temperature", "Critical temperature"], correct: 2, exp: "Ignition temperature is the threshold temperature needed to initiate combustion." },
                        { q: "Which extinguisher is ideal for electrical equipment fires?", options: ["Water hose", "Carbon dioxide (CO2) extinguisher", "Sand only", "Foam extinguisher"], correct: 1, exp: "CO2 is an electrical non-conductor that cuts off oxygen without damaging circuitry." },
                        { q: "What is the unit used to express the calorific value of a fuel?", options: ["Watts/sec", "Kilojoules per kilogram (kJ/kg)", "Pascals", "Newtons"], correct: 1, exp: "Calorific value is expressed in kJ/kg." },
                        { q: "Why does charcoal burn without producing a flame?", options: ["It has no carbon", "It does not vaporize during burning", "It absorbs all light", "It is non-combustible"], correct: 1, exp: "Only substances that vaporize when heated generate flames; charcoal glows without vaporizing." }
                    ],
                    flashcards: [
                        { q: "What is combustion?", a: "A chemical reaction with oxygen that releases heat and light." },
                        { q: "What is ignition temperature?", a: "The minimum temperature at which a substance ignites." },
                        { q: "Which flame zone is the hottest?", a: "The outermost blue non-luminous zone." },
                        { q: "What is the calorific value unit?", a: "kJ/kg (Kilojoules per kilogram)." },
                        { q: "Why is water unsuitable for oil fires?", a: "Oil floats on water and continues burning, spreading the fire." }
                    ],
                    comparison: {
                        title: "Complete Combustion vs. Incomplete Combustion",
                        headers: ["Feature", "Complete Combustion", "Incomplete Combustion"],
                        rows: [
                            ["Oxygen Supply", "Plentiful / Excess oxygen", "Restricted / Insufficient oxygen"],
                            ["Products Formed", "Carbon dioxide (CO2) and water vapor", "Carbon monoxide (CO), soot, and water vapor"],
                            ["Flame Appearance", "Non-luminous blue flame", "Luminous yellow/orange sooty flame"],
                            ["Heat Output", "Maximum thermal efficiency", "Moderate heat; energy wasted as smoke"]
                        ],
                        vsSummary: "Complete combustion in excess oxygen burns clean blue with maximum heat, while incomplete combustion in limited air produces yellow soot and poisonous CO."
                    }
                }
            ],
            exam: [
                { q: "Which gas is a supporter of combustion?", options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Helium"], correct: 1, exp: "Oxygen is the universal atmospheric supporter of combustion." },
                { q: "Incomplete combustion of fuels produces which poisonous gas?", options: ["Carbon dioxide", "Carbon monoxide", "Nitrogen dioxide", "Methane"], correct: 1, exp: "Carbon monoxide (CO) binds irreversibly to hemoglobin, causing asphyxiation." },
                { q: "Substances that catch fire very easily at low temperatures are called:", options: ["Combustible only", "Inflammable substances", "Refractory materials", "Explosives"], correct: 1, exp: "Inflammable substances have low ignition points (e.g. petrol, alcohol)." },
                { q: "The chemical used on the head of a modern safety matchstick is:", options: ["Antimony trisulphide and potassium chlorate", "Sodium chloride", "Calcium carbonate", "Magnesium oxide"], correct: 0, exp: "Antimony trisulphide and potassium chlorate form the match head composition." },
                { q: "The rubbing surface of a safety matchbox contains:", options: ["White phosphorus", "Red phosphorus and powdered glass", "Sulphur and salt", "Charcoal powder"], correct: 1, exp: "Safe red phosphorus transforms into white phosphorus under friction." },
                { q: "When a blanket is wrapped around a person on fire, the fire extinguishes because:", options: ["The blanket cools the person", "It cuts off the supply of oxygen", "It absorbs the fuel", "It is wet"], correct: 1, exp: "The heavy blanket cuts off atmospheric oxygen." },
                { q: "Which fuel has the highest calorific value?", options: ["Wood", "Coal", "Hydrogen gas", "Petrol"], correct: 2, exp: "Hydrogen gas has an exceptional calorific value of 150,000 kJ/kg." },
                { q: "Spontaneous combustion occurs when:", options: ["A match is struck", "A substance bursts into flames without any external heat source", "Water is added", "Fuel cools down"], correct: 1, exp: "Slow internal oxidation accumulates heat until auto-ignition occurs (e.g. phosphorus)." },
                { q: "Explosion is an example of rapid combustion accompanied by:", options: ["Evolution of sound, large heat, and sudden gas expansion", "Only light", "Cooling", "Zero gas"], correct: 0, exp: "Explosions release sudden massive heat, gas, and pressure shockwaves." },
                { q: "The luminous yellow zone of a candle flame is yellow because of:", options: ["Burning hydrogen", "Glowing unburnt carbon particles (soot)", "Nitrogen ions", "Wax color"], correct: 1, exp: "Unburnt carbon nanoparticles glow incandescents in the hot zone." },
                { q: "What should you do first if an LPG cylinder leaks gas in the kitchen?", options: ["Turn on exhaust fan", "Light a candle to check leak", "Do not operate any electrical switch; open doors and windows", "Pour water"], correct: 2, exp: "Any electrical spark could ignite the gas-air mixture, causing an explosion." },
                { q: "Calorific value of cow dung cake is approximately:", options: ["6,000 to 8,000 kJ/kg", "45,000 kJ/kg", "150,000 kJ/kg", "1,000 kJ/kg"], correct: 0, exp: "Biomass cow dung has low calorific output between 6,000 and 8,000 kJ/kg." },
                { q: "Why is water effective in putting out firewood fires?", options: ["It provides oxygen", "It cools the fuel below its ignition temperature and steam shields air", "It burns the wood faster", "It dissolves the wood"], correct: 1, exp: "Water absorbs heat, bringing the temperature below ignition threshold." },
                { q: "Global warming is primarily attributed to rising atmospheric concentrations of:", options: ["Oxygen", "Carbon dioxide (CO2)", "Argon", "Nitrogen"], correct: 1, exp: "Excess CO2 from combustion traps infrared heat, warming the biosphere." },
                { q: "Which fuel is considered the cleanest for motor vehicles?", options: ["Diesel", "CNG", "Petrol", "Coal"], correct: 1, exp: "CNG produces minimal soot and harmful emissions." },
                { q: "Which flame zone is in direct contact with the atmosphere?", options: ["Outer non-luminous zone", "Middle zone", "Dark zone", "Base zone"], correct: 0, exp: "The outer zone interfaces directly with ambient air." },
                { q: "Why do dry leaves catch fire much faster than green leaves?", options: ["Green leaves have no carbon", "Green leaves contain moisture that keeps them below ignition temperature", "Dry leaves are radioactive", "Green leaves reflect all heat"], correct: 1, exp: "Moisture in green leaves must evaporate first, requiring substantial heat." },
                { q: "Which gas causes respiratory suffocation when charcoal is burned inside a closed room?", options: ["Carbon monoxide", "Carbon dioxide", "Oxygen", "Ozone"], correct: 0, exp: "Carbon monoxide from incomplete combustion in closed spaces is fatal." },
                { q: "A good fuel should have:", options: ["High calorific value and moderate ignition temperature", "Low calorific value", "Extremely low ignition temperature that explodes easily", "High ash content"], correct: 0, exp: "Ideal fuels release high energy safely without dangerous explosive volatility." },
                { q: "Rusting of iron can be considered as:", options: ["Rapid combustion", "Slow combustion without flame", "Spontaneous explosion", "Non-chemical process"], correct: 1, exp: "Rusting is an exothermic oxidation reaction, essentially very slow combustion." }
            ]
        },
        {
            chapterNum: 8,
            title: "Electrical Conductivity of Liquids",
            summary: "Investigate electrolyte ionization, chemical effects of electric current, and industrial electroplating.",
            topics: [
                {
                    topicNum: 1,
                    title: "Electrolytes and Electroplating",
                    visualScene: "electroplating-cell",
                    visualLabel: "3D Electrolytic Cell & Copper Electroplating Tank",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Electrical Conduction in Liquids",
                            textbookIdea: "Pure distilled water is an electrical insulator. However, when acids, bases, or mineral salts dissolve in water, they dissociate into mobile positive cations and negative anions, forming an <span class=\"underlined-concept\" data-concept=\"electrolyte\">electrolyte</span> that conducts electric current.",
                            easyExplanation: "Pure pure water does not carry electricity. But the moment you stir in salt, lemon juice, or vinegar, the molecules split into tiny charged electrical swimmers (ions) that carry electric current through the liquid!",
                            visualScene: "electrolyte-conduction",
                            visualLabel: "3D Ion Dissociation in Aqueous Solution"
                        },
                        {
                            num: 2,
                            heading: "Chemical Effects & Electroplating",
                            textbookIdea: "Passing an electric current through an electrolyte produces chemical changes (<span class=\"underlined-concept\" data-concept=\"electrolysis\">electrolysis</span>). In <span class=\"underlined-concept\" data-concept=\"electroplating\">electroplating</span>, a superior or corrosion-resistant metal (like copper, chromium, or gold) is deposited onto another metal object using an electric current.",
                            easyExplanation: "Electroplating is like magic metallic spray-painting with electricity! By dipping an iron spoon and copper plate into blue copper liquid and turning on a battery, copper atoms swim through the water and coat the iron spoon in a shiny copper layer.",
                            visualScene: "electroplating-cell",
                            visualLabel: "3D Copper Ion Migration onto Cathode"
                        }
                    ],
                    underlinedCards: [
                        { id: "electrolyte", word: "Electrolyte", meaning: "A liquid or solution containing free ions capable of conducting electric current.", simpleExplanation: "A liquid packed with charged ions that carries electric current.", example: "Copper sulphate solution, salt water, and battery acid.", visual: "🧪" },
                        { id: "electrolysis", word: "Electrolysis", meaning: "The chemical decomposition of an electrolyte caused by the passage of direct electric current.", simpleExplanation: "Splitting chemical compounds apart using electricity.", example: "Decomposing water into hydrogen and oxygen gases.", visual: "⚡" },
                        { id: "electroplating", word: "Electroplating", meaning: "The electrochemical process of depositing a thin protective or decorative layer of desired metal onto another conductive object.", simpleExplanation: "Coating a cheap metal with a shiny, rust-proof layer using electric current.", example: "Chromium plating on car bumpers and bicycle handlebars.", visual: "✨" }
                    ],
                    remember: "The object to be plated is always connected to the negative terminal (cathode), while the metal to be deposited is connected to the positive terminal (anode).",
                    funFact: "Electroplated chromium is not used to make entire bicycle handlebars because chromium is very expensive; plating a microscopic layer over cheap iron gives shine and rust protection at low cost!",
                    realLife: "Artificial fashion jewellery is made by electroplating a thin micro-layer of real gold or silver onto inexpensive brass or copper metal.",
                    vocabulary: [
                        { word: "Anode", meaning: "The positive electrode connected to the positive terminal of the power supply." },
                        { word: "Cathode", meaning: "The negative electrode where metal cations receive electrons and deposit." },
                        { word: "LED", meaning: "Light Emitting Diode that glows even with weak electrical currents." }
                    ],
                    summary: [
                        "Liquids containing dissolved acids, bases, or salts conduct electricity via free ions.",
                        "Pure distilled water is an electrical insulator.",
                        "Passing current through liquids causes chemical reactions (electrolysis).",
                        "Electroplating coats metals with protective or decorative metallic finishes.",
                        "Electroplating prevents rust, enhances appearance, and reduces manufacturing costs."
                    ],
                    blooms: [
                        { level: "Remembering", q: "Why is an LED tester preferred over an incandescent bulb to test liquid conductivity?", a: "Because an LED glows even when the electric current passing through the liquid is extremely weak." },
                        { level: "Understanding", q: "Why does tap water conduct electricity while distilled water does not?", a: "Tap water contains dissolved mineral salts that supply free ions, whereas distilled water lacks free ions." },
                        { level: "Applying", q: "Which electrode should you connect a steel spoon to if you want to coat it with silver?", a: "To the negative cathode terminal, so positive silver cations (Ag+) are attracted to deposit on it." },
                        { level: "Analyzing", q: "What happens to the copper sulphate solution concentration during electroplating with a copper anode?", a: "The concentration remains constant because copper dissolves from the anode at the exact same rate it deposits on the cathode." },
                        { level: "Evaluating", q: "Assess the ecological hazard of industrial electroplating factory effluents.", a: "Discharged effluents contain toxic heavy metal ions (cyanide, chromium) that poison river groundwater and aquatic life." },
                        { level: "Creating", q: "Design a lemon battery experiment capable of lighting a red LED.", a: "Insert a zinc screw and a copper coin into a juicy lemon; connect them to LED leads to harness fruit acid electrolyte voltage." }
                    ],
                    quiz: [
                        { q: "Which of the following is a good conductor of electricity?", options: ["Distilled water", "Sugar solution", "Salt solution", "Kerosene"], correct: 2, exp: "Salt dissolves into Na+ and Cl- ions that readily conduct electricity." },
                        { q: "During electroplating, the metal object to be coated must be connected to the:", options: ["Positive terminal (anode)", "Negative terminal (cathode)", "Earth ground", "Disconnected"], correct: 1, exp: "Positive metal cations migrate toward the negative cathode to deposit." },
                        { q: "What gas collects at the cathode during the electrolysis of water?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Chlorine"], correct: 1, exp: "Hydrogen ions (H+) receive electrons at the negative cathode, forming H2 gas." },
                        { q: "Chromium plating is widely used on car bumpers because chromium is:", options: ["Cheap", "Lustrous, scratch-resistant, and corrosion-proof", "Lightweight", "Liquid"], correct: 1, exp: "Chromium resists corrosion and scratches while displaying brilliant shine." },
                        { q: "What is an electrode called that is connected to the positive terminal of a battery?", options: ["Cathode", "Anode", "Neutron", "Electrolyte"], correct: 1, exp: "The positive electrode is the anode." }
                    ],
                    flashcards: [
                        { q: "What is an electrolyte?", a: "A liquid conducting electricity through mobile dissolved ions." },
                        { q: "Why does distilled water not conduct electricity?", a: "It has no dissolved mineral salts or free ions." },
                        { q: "What is electroplating?", a: "Depositing a metal layer onto another object using electric current." },
                        { q: "To which terminal is the electroplating target connected?", a: "Negative terminal (cathode)." },
                        { q: "What gas is produced at the anode during electrolysis of water?", a: "Oxygen gas (O2)." }
                    ],
                    comparison: {
                        title: "Conduction in Metals vs. Conduction in Liquids",
                        headers: ["Feature", "Metals", "Liquids (Electrolytes)"],
                        rows: [
                            ["Charge Carriers", "Free delocalized electrons", "Mobile positive cations and negative anions"],
                            ["Chemical Change", "No chemical change; purely physical", "Chemical decomposition occurs (electrolysis)"],
                            ["State of Matter", "Solid wires (copper, aluminium)", "Aqueous solutions or molten salts"]
                        ],
                        vsSummary: "Metals conduct via free electrons without chemical alteration, while liquid electrolytes conduct via charged ions that trigger chemical decomposition."
                    }
                }
            ],
            exam: [
                { q: "Which liquid does NOT conduct electricity?", options: ["Lemon juice", "Vinegar", "Pure distilled water", "Sea water"], correct: 2, exp: "Distilled water lacks free ions." },
                { q: "Who discovered that water decomposes into hydrogen and oxygen when current passes through it?", options: ["Michael Faraday", "William Nicholson", "Thomas Edison", "Isaac Newton"], correct: 1, exp: "British chemist William Nicholson discovered water electrolysis in 1800." },
                { q: "In the electrolysis of water, the volume ratio of hydrogen to oxygen gas produced is:", options: ["1 : 1", "2 : 1", "1 : 2", "3 : 1"], correct: 1, exp: "Water formula H2O yields 2 parts hydrogen to 1 part oxygen." },
                { q: "Why is tin plated onto iron food storage cans?", options: ["Tin looks golden", "Tin is less reactive than iron and prevents food spoilage", "Tin is magnetic", "Tin is cheaper than iron"], correct: 1, exp: "Tin prevents iron from reacting with food acids." },
                { q: "An electric current can produce:", options: ["Heating effect only", "Magnetic effect only", "Chemical effect only", "Heating, magnetic, and chemical effects"], correct: 3, exp: "Electricity exhibits thermal, magnetic, and electrochemical effects." },
                { q: "Which electrode loses mass during copper electroplating with copper electrodes?", options: ["Cathode", "Anode", "Both equally", "Neither"], correct: 1, exp: "The copper anode oxidizes and dissolves copper ions into the bath." },
                { q: "The chemical process of electroplating is based on which effect of electric current?", options: ["Magnetic effect", "Chemical effect", "Heating effect", "Nuclear effect"], correct: 1, exp: "Electroplating is an application of the chemical effect of current." },
                { q: "Which of the following is an electrolyte?", options: ["Molten sodium chloride", "Petrol", "Vegetable oil", "Alcohol"], correct: 0, exp: "Molten NaCl contains free Na+ and Cl- ions." },
                { q: "LED stands for:", options: ["Light Emitting Diode", "Low Energy Device", "Linear Electrical Driver", "Liquid Electronic Display"], correct: 0, exp: "Light Emitting Diode." },
                { q: "Why is zinc coated on iron bridge girders (galvanization)?", options: ["To prevent iron from rusting", "To make it heavier", "To conduct electricity", "For coloring"], correct: 0, exp: "Zinc protects iron from oxidation." },
                { q: "If you add common salt to distilled water, its electrical conductivity will:", options: ["Decrease", "Increase significantly", "Remain zero", "Disappear"], correct: 1, exp: "Salt dissolves into conducting Na+ and Cl- ions." },
                { q: "What color deposit forms on the negative carbon electrode during copper sulphate electrolysis?", options: ["Silver white", "Reddish-brown copper", "Bright yellow", "Green"], correct: 1, exp: "Pure elemental copper deposits as a reddish-brown coating." },
                { q: "Which acid is typically present in car lead-acid storage batteries?", options: ["Hydrochloric acid", "Sulphuric acid (H2SO4)", "Nitric acid", "Acetic acid"], correct: 1, exp: "Dilute sulphuric acid serves as the battery electrolyte." },
                { q: "A magnetic compass needle placed near a current-carrying wire deflects due to:", options: ["Electrostatic force", "Magnetic field generated by the current", "Gravitational pull", "Air currents"], correct: 1, exp: "Oersted's discovery: electric currents generate magnetic fields." },
                { q: "Why should you never touch working electrical switches with wet hands?", options: ["Water cools the switch", "Water on skin carries dissolved salts, dramatically lowering electrical resistance and risking electrocution", "The switch gets dirty", "It wastes power"], correct: 1, exp: "Wet skin conducts electricity easily, creating fatal shock hazards." },
                { q: "Which of the following solutions is a weak electrolyte?", options: ["Strong hydrochloric acid", "Dilute acetic acid (vinegar)", "Concentrated sulphuric acid", "Sodium hydroxide solution"], correct: 1, exp: "Acetic acid only partially ionizes in aqueous solution." },
                { q: "In electroplating, the electrolyte used must contain ions of the:", options: ["Base metal of the object", "Metal to be deposited", "Water only", "Plastic"], correct: 1, exp: "The bath must supply ions of the coating metal (e.g. CuSO4 for copper)." },
                { q: "What happens at the cathode during electrolysis?", options: ["Oxidation (loss of electrons)", "Reduction (gain of electrons)", "Neutralization only", "Combustion"], correct: 1, exp: "Cations gain electrons (reduction) at the cathode." },
                { q: "Gold ornaments that are '1-gram gold' are manufactured using:", options: ["Solid 24-carat gold", "Electroplating a thin gold layer over copper or brass", "Painting with yellow dye", "Clay molding"], correct: 1, exp: "Electroplating deposits a micro-layer of gold onto base metals." },
                { q: "What happens when electric current is passed through potato slices with copper wires?", options: ["It turns completely black", "A greenish-blue spot develops around the positive wire", "It catches fire", "It dissolves"], correct: 1, exp: "Copper ions react with potato chemical constituents to form a greenish spot at the positive wire." }
            ]
        },
        {
            chapterNum: 9,
            title: "Reflection of Light at Plane Surfaces",
            summary: "Master the laws of reflection, regular vs diffuse reflection, periscopes, kaleidoscopes, and plane mirror images.",
            topics: [
                {
                    topicNum: 1,
                    title: "Laws of Reflection and Image Geometry",
                    visualScene: "light-reflection",
                    visualLabel: "3D Plane Mirror Optical Bench & Angle Ray Tracer",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "The Laws of Reflection",
                            textbookIdea: "When light rays strike a smooth reflective boundary, they bounce back obeying the <span class=\"underlined-concept\" data-concept=\"laws-reflection\">Laws of Reflection</span>: 1) The angle of incidence equals the angle of reflection (∠i = ∠r); 2) The incident ray, the reflected ray, and the normal at the point of incidence all lie in the same geometric plane.",
                            easyExplanation: "Light bounces off a mirror just like a rubber ball bounces off a smooth floor! If you shine a laser at a 30-degree angle to the mirror's perpendicular line, the reflected beam bounces off at the exact same 30-degree angle.",
                            visualScene: "light-reflection",
                            visualLabel: "3D Incident Ray, Normal Line & Reflected Ray"
                        },
                        {
                            num: 2,
                            heading: "Characteristics of Plane Mirror Images",
                            textbookIdea: "The image formed by a plane mirror is: 1) Virtual (cannot be projected onto a screen); 2) Erect (upright); 3) Of the exact same size as the object; 4) Located at the same perpendicular distance behind the mirror as the object is in front; 5) Subject to <span class=\"underlined-concept\" data-concept=\"lateral-inversion\">lateral inversion</span> (left appears right and right appears left).",
                            easyExplanation: "When you look in your bathroom mirror, your reflection is the same height as you and stands just as far behind the glass. But raise your right hand, and your mirror reflection raises its left hand—that's lateral inversion!",
                            visualScene: "mirror-image",
                            visualLabel: "3D Virtual Image Tracing Behind Mirror Plane"
                        }
                    ],
                    underlinedCards: [
                        { id: "laws-reflection", word: "Laws of Reflection", meaning: "Fundamental optical principles stating that ∠i = ∠r, and incident ray, normal, and reflected ray are coplanar.", simpleExplanation: "The strict mathematical law governing how light bounces off surfaces.", example: "Laser beam striking a silvered flat mirror.", visual: "📐" },
                        { id: "lateral-inversion", word: "Lateral Inversion", meaning: "The optical phenomenon where the left side of an object appears as the right side in its plane mirror reflection.", simpleExplanation: "Mirror sideways reversal where your left becomes your reflection's right.", example: "The word 'AMBULANCE' printed backwards on emergency vehicles so drivers see it correctly in rear-view mirrors.", visual: "🪞" }
                    ],
                    remember: "The number of multiple images (n) formed by two plane mirrors inclined at an angle θ is given by the formula: n = (360° / θ) - 1.",
                    funFact: "Two mirrors placed at an exact 90-degree angle create a 'non-reversing mirror' where you can see yourself exactly as others see you without lateral inversion!",
                    realLife: "Submarines use periscopes equipped with two parallel plane mirrors inclined at 45 degrees to see enemy ships on the ocean surface while submerged underwater.",
                    vocabulary: [
                        { word: "Incident Ray", meaning: "The incoming ray of light striking a reflective surface." },
                        { word: "Reflected Ray", meaning: "The ray of light bouncing off the reflective surface." },
                        { word: "Normal", meaning: "An imaginary perpendicular line drawn at 90 degrees to the surface at the point of incidence." },
                        { word: "Virtual Image", meaning: "An image formed by apparent divergence of light rays that cannot be caught on a physical screen." }
                    ],
                    summary: [
                        "Reflection obeys two laws: angle of incidence equals angle of reflection (∠i = ∠r); all rays lie in one plane.",
                        "Smooth surfaces produce regular reflection; rough surfaces produce diffuse reflection.",
                        "Plane mirror images are virtual, erect, equal in size, equidistant behind mirror, and laterally inverted.",
                        "Two inclined mirrors form multiple images: n = (360° / θ) - 1.",
                        "Periscopes (45° mirrors) and kaleidoscopes (60° mirrors) utilize plane mirror reflection."
                    ],
                    blooms: [
                        { level: "Remembering", q: "What is the angle of reflection if an incident ray strikes a mirror at an angle of incidence of 45 degrees?", a: "The angle of reflection is exactly 45 degrees (∠r = ∠i)." },
                        { level: "Understanding", q: "Why is the word 'AMBULANCE' written in reverse lettering on the front of emergency vans?", a: "So that drivers ahead see the word laterally inverted in their rear-view mirrors and read it correctly as 'AMBULANCE'." },
                        { level: "Applying", q: "Calculate how many images are formed when two plane mirrors are placed at an angle of 60 degrees.", a: "n = (360° / 60°) - 1 = 6 - 1 = 5 images." },
                        { level: "Analyzing", q: "Why can you see your image clearly in a polished stainless steel plate, but not in a rough stone wall?", a: "The polished plate causes regular parallel reflection, while the rough stone causes diffuse scattering of light in all directions." },
                        { level: "Evaluating", q: "Can a virtual image formed by a plane mirror ever be captured on a paper screen? Explain.", a: "No, because light rays do not actually intersect behind the mirror; they only appear to diverge from behind it." },
                        { level: "Creating", q: "Design a simple optical periscope using cardboard tubes and two plane mirrors.", a: "Mount two mirrors inside a Z-shaped cardboard tube inclined at 45 degrees facing each other, allowing light to bounce twice." }
                    ],
                    quiz: [
                        { q: "According to the first law of reflection, the angle of incidence is ________ the angle of reflection.", options: ["Greater than", "Less than", "Equal to", "Double"], correct: 2, exp: "The angle of incidence always equals the angle of reflection (∠i = ∠r)." },
                        { q: "The image formed by a flat plane mirror is always:", options: ["Real and inverted", "Virtual and erect", "Real and magnified", "Virtual and inverted"], correct: 1, exp: "Plane mirrors always produce virtual, upright (erect) images." },
                        { q: "How many images are formed when two mirrors are kept parallel to each other (θ = 0°)?", options: ["1", "2", "4", "Infinite number of images"], correct: 3, exp: "Parallel mirrors cause infinite back-and-forth reflections." },
                        { q: "What is the phenomenon where your right hand appears as the left hand of your mirror reflection?", options: ["Diffraction", "Refraction", "Lateral inversion", "Dispersion"], correct: 2, exp: "Lateral inversion is sideways reversal in plane mirrors." },
                        { q: "In a submarine periscope, the two plane mirrors are positioned at an angle of:", options: ["30 degrees", "45 degrees", "90 degrees", "60 degrees"], correct: 1, exp: "Mirrors at 45 degrees turn the light beam through 90 degrees twice." }
                    ],
                    flashcards: [
                        { q: "State the first law of reflection.", a: "The angle of incidence equals the angle of reflection (∠i = ∠r)." },
                        { q: "What is lateral inversion?", a: "Sideways reversal where left appears right and right appears left in a mirror." },
                        { q: "What formula gives the number of images between inclined mirrors?", a: "n = (360° / θ) - 1." },
                        { q: "Is a plane mirror image real or virtual?", a: "Virtual (cannot be projected onto a screen)." },
                        { q: "What angle do mirrors have in a kaleidoscope?", a: "60 degrees, forming 5 symmetrical images." }
                    ],
                    comparison: {
                        title: "Regular Reflection vs. Diffuse (Irregular) Reflection",
                        headers: ["Feature", "Regular Reflection", "Diffuse Reflection"],
                        rows: [
                            ["Reflective Surface", "Extremely smooth, polished (plane mirror, still water)", "Rough, irregular, unpolished (paper, stone, wall)"],
                            ["Reflected Rays", "Parallel incident rays reflect as parallel rays", "Parallel incident rays scatter in random directions"],
                            ["Image Formation", "Clear, sharp, distinct image formed", "No image formed; surface is simply illuminated"]
                        ],
                        vsSummary: "Regular reflection from smooth surfaces preserves parallel rays to form clear images, while diffuse reflection from rough surfaces scatters rays."
                    }
                }
            ],
            exam: [
                { q: "An incident ray makes an angle of 35° with the normal. The angle of reflection is:", options: ["35°", "55°", "70°", "90°"], correct: 0, exp: "∠r = ∠i = 35°." },
                { q: "If an incident ray strikes a mirror at 30° to the mirror surface, the angle of incidence is:", options: ["30°", "60°", "90°", "0°"], correct: 1, exp: "Angle of incidence is measured from the normal: 90° - 30° = 60°." },
                { q: "The distance between an object and its image in a plane mirror is 10 m. How far is the object from the mirror?", options: ["10 m", "5 m", "20 m", "2.5 m"], correct: 1, exp: "Object distance = Image distance = 10 m / 2 = 5 m." },
                { q: "A person stands 3 m in front of a plane mirror. If they step 1 m backwards, the distance between them and their image becomes:", options: ["4 m", "6 m", "8 m", "2 m"], correct: 2, exp: "New object distance is 4 m; distance to image is 4 + 4 = 8 m." },
                { q: "Kaleidoscopes work on the principle of:", options: ["Multiple reflections between inclined mirrors", "Refraction", "Dispersion", "Total internal reflection"], correct: 0, exp: "Kaleidoscopes use three inclined mirrors to produce multiple symmetrical patterns." },
                { q: "A ray of light striking a plane mirror normally (along the normal line) is reflected back at an angle of:", options: ["90°", "0°", "180°", "45°"], correct: 1, exp: "For normal incidence, ∠i = 0°, hence ∠r = 0°." },
                { q: "Which of the following creates a real image?", options: ["Plane mirror", "Cinema projector lens on a theater screen", "Convex mirror", "Rear-view car mirror"], correct: 1, exp: "Real images can be focused onto a physical projection screen." },
                { q: "How many images are formed when two plane mirrors are held at right angles (90°)?", options: ["2", "3", "4", "Infinite"], correct: 1, exp: "n = (360° / 90°) - 1 = 4 - 1 = 3 images." },
                { q: "The normal to a surface is an imaginary line drawn at an angle of:", options: ["45°", "90°", "180°", "60°"], correct: 1, exp: "Normal means perpendicular (at 90 degrees)." },
                { q: "Diffuse reflection occurs on a book page because:", options: ["The page absorbs all light", "The paper surface has microscopic irregularities", "Paper is transparent", "Ink bends light"], correct: 1, exp: "Microscopic roughness scatters light in all directions." },
                { q: "To see your full height in a vertical plane mirror, the mirror must have a minimum height of:", options: ["Equal to your height", "Half your height", "One-third your height", "Double your height"], correct: 1, exp: "Geometric ray optics proves a mirror need only be half a person's height." },
                { q: "Which optical instrument enables soldiers in trenches to see above ground safely?", options: ["Microscope", "Periscope", "Telescope", "Spectroscope"], correct: 1, exp: "Periscopes provide safe elevated sightlines using 45° angled mirrors." },
                { q: "A plane mirror is rotated by an angle of 10°. The reflected ray rotates by:", options: ["10°", "20°", "5°", "0°"], correct: 1, exp: "When a mirror rotates by θ, the reflected ray rotates by 2θ (2 × 10° = 20°)." },
                { q: "What type of reflection enables us to see non-luminous objects around us in a room?", options: ["Regular reflection", "Diffuse reflection", "Total internal reflection", "Refraction"], correct: 1, exp: "Diffuse reflection scatters ambient light into our eyes from all angles." },
                { q: "In a plane mirror, the size of the image relative to the object is always:", options: ["Magnified", "Diminished", "Exactly equal", "Variable"], correct: 2, exp: "Plane mirrors have a magnification of exactly 1." },
                { q: "If you move toward a plane mirror at a speed of 2 m/s, your image approaches you at a relative speed of:", options: ["2 m/s", "4 m/s", "1 m/s", "0 m/s"], correct: 1, exp: "Both move toward each other at 2 m/s; relative speed is 2 + 2 = 4 m/s." },
                { q: "Silvering of glass mirrors is commonly protected by a coat of:", options: ["Red lead paint", "Wax", "Glue", "Chalk"], correct: 0, exp: "Red lead paint shields the reflective silver-aluminium coating from oxidation." },
                { q: "Which letter among these does NOT show lateral inversion in a plane mirror?", options: ["B", "C", "A", "E"], correct: 2, exp: "The letter 'A' is vertically symmetrical, so lateral inversion looks identical." },
                { q: "The bounce of light from a surface back into the same medium is called:", options: ["Refraction", "Reflection", "Dispersion", "Transmission"], correct: 1, exp: "Reflection is the bouncing back of light into the original medium." },
                { q: "Why does an unpolished wooden table NOT form a clear mirror image?", options: ["It does not reflect light", "It causes diffuse reflection scattering light rays randomly", "It absorbs 100% of light", "It is an insulator"], correct: 1, exp: "Microscopic roughness disrupts the ray paths necessary for coherent image formation." }
            ]
        },
        {
            chapterNum: 10,
            title: "Pollution of Air and Water",
            summary: "Examine air pollutants, greenhouse effect, acid rain, water contamination, eutrophication, and purification methods.",
            topics: [
                {
                    topicNum: 1,
                    title: "Atmospheric & Hydrological Pollution",
                    visualScene: "greenhouse-atmosphere",
                    visualLabel: "3D Earth Atmosphere & Greenhouse Heat Trap",
                    paragraphs: [
                        {
                            num: 1,
                            heading: "Air Pollutants, Acid Rain & Greenhouse Effect",
                            textbookIdea: "Air pollution is the contamination of air by harmful substances like carbon monoxide (CO), sulphur dioxide (SO2), nitrogen oxides (NO2), and particulate matter (PM2.5). SO2 and NO2 react with atmospheric water vapor to form <span class=\"underlined-concept\" data-concept=\"acid-rain\">acid rain</span> (H2SO4 and HNO3), causing marble cancer in the Taj Mahal. Excess greenhouse gases (CO2, methane) trap outgoing infrared radiation, driving <span class=\"underlined-concept\" data-concept=\"global-warming\">global warming</span>.",
                            easyExplanation: "Smoke from vehicles and coal factories fills the air with toxic gases. When sulfur smoke mixes with rain clouds, it turns rain into acid that corrodes stone buildings. Meanwhile, carbon dioxide traps solar heat around Earth like a giant car with closed windows on a hot sunny day!",
                            visualScene: "greenhouse-atmosphere",
                            visualLabel: "3D Trapped Infrared Heat Simulation"
                        },
                        {
                            num: 2,
                            heading: "Water Pollution, Eutrophication & Potable Water",
                            textbookIdea: "Water pollution is caused by untreated industrial effluents, sewage, and agricultural chemical runoff. Excessive fertilizer runoff leads to <span class=\"underlined-concept\" data-concept=\"eutrophication\">eutrophication</span>, causing dense algal blooms that deplete dissolved oxygen and suffocate aquatic life. Safe drinking water (<span class=\"underlined-concept\" data-concept=\"potable-water\">potable water</span>) is obtained through physical filtration, boiling, and chlorination.",
                            easyExplanation: "When chemical fertilizers wash into lakes, weeds and green algae explode in growth. When this algae dies, rotting bacteria consume all the oxygen in the water, killing fish. Clean, germ-free water suitable for drinking is called potable water.",
                            visualScene: "water-purification",
                            visualLabel: "3D Water Filtration & Chlorination Cycle"
                        }
                    ],
                    underlinedCards: [
                        { id: "acid-rain", word: "Acid Rain", meaning: "Precipitation made acidic by atmospheric pollution (sulfur dioxide and nitrogen oxides forming sulfuric and nitric acids).", simpleExplanation: "Corrosive rain that damages forests, soils, and marble monuments.", example: "Corrosion of the white marble facade of the Taj Mahal in Agra.", visual: "🌧️" },
                        { id: "global-warming", word: "Global Warming", meaning: "The gradual increase in overall Earth temperature caused by greenhouse gases trapping infrared heat.", simpleExplanation: "The worldwide rise in temperature melting glaciers and changing climates.", example: "Melting polar ice caps causing rising sea levels.", visual: "🌡️" },
                        { id: "eutrophication", word: "Eutrophication", meaning: "Excessive nutrient enrichment of water bodies leading to algal blooms and depletion of dissolved oxygen.", simpleExplanation: "Algae taking over a lake and choking aquatic life of oxygen.", example: "Green scum suffocating fish in village ponds after heavy fertilizer runoff.", visual: "🌿" },
                        { id: "potable-water", word: "Potable Water", meaning: "Water that is biologically and chemically purified, safe, and fit for human consumption.", simpleExplanation: "Clean, germ-free water safe to drink without boiling.", example: "Municipal tap water purified through sand filtration and chlorination.", visual: "🚰" }
                    ],
                    remember: "Boiling water kills all pathogenic disease-causing bacteria and cysts, making it the simplest, most effective household water purification method.",
                    funFact: "The ozone layer in the stratosphere shields Earth from ultraviolet (UV) radiation; international bans on CFCs under the Montreal Protocol are successfully healing the Antarctic ozone hole!",
                    realLife: "In Hyderabad, the state government undertook comprehensive Musi River rejuvenation initiatives to treat industrial and domestic sewage before discharge.",
                    vocabulary: [
                        { word: "Pollutant", meaning: "Any substance that contaminates air, water, or soil." },
                        { word: "CFCs", meaning: "Chlorofluorocarbons used in refrigerators that deplete the stratospheric ozone layer." },
                        { word: "Chlorination", meaning: "Adding chlorine tablets to water to kill harmful microorganisms." },
                        { word: "BOD", meaning: "Biological Oxygen Demand, a measure of organic pollution in water." }
                    ],
                    summary: [
                        "Air pollution is driven by vehicle exhausts, industrial emissions, and crop residue burning.",
                        "Acid rain results from SO2 and NO2 dissolving in atmospheric moisture.",
                        "Excess greenhouse gases trap heat, causing global warming and erratic climate change.",
                        "Agricultural fertilizer runoff causes eutrophication and suffocates fish.",
                        "Potable water is purified using filtration, boiling, UV treatment, and chlorination."
                    ],
                    blooms: [
                        { level: "Remembering", q: "Name two greenhouse gases responsible for global warming.", a: "Carbon dioxide (CO2) and Methane (CH4)." },
                        { level: "Understanding", q: "How do Chlorofluorocarbons (CFCs) damage the environment?", a: "CFCs rise to the stratosphere where UV rays break them down, releasing chlorine atoms that destroy ozone molecules." },
                        { level: "Applying", q: "Why is chlorine added in measured amounts to city water storage reservoirs?", a: "Chlorine acts as a disinfectant, killing pathogenic bacteria to make water safe and potable." },
                        { level: "Analyzing", q: "Explain how excessive use of chemical fertilizers leads to fish deaths in nearby ponds.", a: "Fertilizer runoff causes rapid algal bloom; decomposing algae deplete dissolved oxygen, suffocating fish." },
                        { level: "Evaluating", q: "Assess the effectiveness of odd-even vehicle traffic regulations in curbing city smog.", a: "It halves vehicular exhaust temporarily, but long-term air quality requires clean public transit and electric vehicles." },
                        { level: "Creating", q: "Design a 3-tier low-cost household water filter using plastic bottles, gravel, sand, and charcoal.", a: "Layer gravel at bottom, coarse sand in middle, and crushed active charcoal at top; water trickles through, filtering turbidity and odors." }
                    ],
                    quiz: [
                        { q: "Which gas is primarily responsible for the greenhouse effect and global warming?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"], correct: 1, exp: "Carbon dioxide traps terrestrial infrared radiation in the lower atmosphere." },
                        { q: "Which gases cause acid rain?", options: ["Sulphur dioxide and Nitrogen oxides", "Oxygen and Hydrogen", "Argon and Neon", "Carbon monoxide and Methane"], correct: 0, exp: "SO2 and NO2 form sulphuric and nitric acids in rainwater." },
                        { q: "Water that is suitable and safe for drinking is called:", options: ["Mineral water", "Potable water", "Distilled water", "Saline water"], correct: 1, exp: "Potable water is purified, safe drinking water." },
                        { q: "What chemical compound is responsible for depleting the stratospheric ozone layer?", options: ["Carbon dioxide", "Chlorofluorocarbons (CFCs)", "Methane", "Water vapor"], correct: 1, exp: "CFCs release reactive chlorine that catalytically destroys ozone." },
                        { q: "Excessive growth of algae in a water body due to nutrient enrichment is called:", options: ["Photosynthesis", "Eutrophication", "Distillation", "Sedimentation"], correct: 1, exp: "Eutrophication is nutrient enrichment leading to algal blooms." }
                    ],
                    flashcards: [
                        { q: "What is potable water?", a: "Water that is purified and safe for human drinking." },
                        { q: "What causes acid rain?", a: "Sulphur dioxide (SO2) and nitrogen oxides (NO2) dissolving in rain." },
                        { q: "What is eutrophication?", a: "Nutrient over-enrichment causing algal bloom that suffocates water life." },
                        { q: "What gas is destroyed by CFCs?", a: "Ozone (O3) in the stratosphere." },
                        { q: "Name two greenhouse gases.", a: "Carbon dioxide (CO2) and Methane (CH4)." }
                    ],
                    comparison: {
                        title: "Air Pollution vs. Water Pollution",
                        headers: ["Feature", "Air Pollution", "Water Pollution"],
                        rows: [
                            ["Major Sources", "Vehicle exhausts, power plants, factory smokestacks, burning trash", "Untreated industrial effluents, sewage, chemical pesticide runoff"],
                            ["Severe Impacts", "Respiratory asthma, acid rain, ozone depletion, global warming", "Waterborne diseases (cholera, typhoid), eutrophication, biomagnification"],
                            ["Mitigation", "CNG vehicles, industrial electrostatic precipitators, green buffers", "Sewage treatment plants (STPs), effluent treatment, rainwater harvesting"]
                        ],
                        vsSummary: "Air pollution affects atmospheric respiration and global climate, while water pollution contaminates freshwater ecosystems and drinking supplies."
                    }
                }
            ],
            exam: [
                { q: "The yellowing of the Taj Mahal's marble is caused by:", options: ["Sunlight bleaching", "Acid rain reacting with calcium carbonate (marble cancer)", "Dust storms", "River flooding"], correct: 1, exp: "Acid rain corrodes marble into powdered calcium sulphate." },
                { q: "Which method kills microorganisms in drinking water without adding chemicals?", options: ["Sedimentation", "Boiling", "Coagulation", "Decantation"], correct: 1, exp: "Boiling water destroys bacteria and viral pathogens." },
                { q: "The Kyoto Protocol and Paris Agreement are international treaties addressing:", options: ["Ozone hole", "Greenhouse gas emissions and global warming", "Maritime piracy", "Space debris"], correct: 1, exp: "These climate accords mandate reduction of greenhouse gas emissions." },
                { q: "Suspended particulate matter (PM2.5) in polluted air causes:", options: ["Skin cancer", "Deep lung penetration and severe respiratory ailments", "Liver failure", "Bone fractures"], correct: 1, exp: "Microscopic PM2.5 particles penetrate deep into alveoli and bloodstream." },
                { q: "Which disinfectant chemical is commonly added to municipal drinking water?", options: ["Bromine", "Chlorine", "Fluorine", "Iodine"], correct: 1, exp: "Chlorination is the global standard for public water disinfection." },
                { q: "The phenomenon where atmospheric gases trap solar heat is called the:", options: ["Thermal inversion", "Greenhouse effect", "Solar flare effect", "Coriolis effect"], correct: 1, exp: "Greenhouse gases trap heat, warming the planet." },
                { q: "Fluorosis disease common in parts of Nalgonda, Telangana is caused by high levels of ________ in groundwater.", options: ["Iron", "Fluoride", "Chloride", "Sulphate"], correct: 1, exp: "Excess fluoride in drinking water damages teeth and skeletal bones." },
                { q: "Smog is an atmospheric mixture of:", options: ["Smoke and fog", "Smoke and dust", "Fog and hail", "Snow and mist"], correct: 0, exp: "Smog = Smoke + Fog." },
                { q: "Which gas binds with hemoglobin in the blood 200 times faster than oxygen?", options: ["Carbon dioxide", "Carbon monoxide", "Nitrogen", "Helium"], correct: 1, exp: "Carbon monoxide forms carboxyhemoglobin, causing oxygen starvation." },
                { q: "The Ganga Action Plan was initiated by the Government of India in:", options: ["1970", "1985", "2005", "2015"], correct: 1, exp: "The Ganga Action Plan was launched in 1985 to clean the river." },
                { q: "Untreated sewage discharged into rivers causes outbreaks of:", options: ["Malaria", "Waterborne diseases like cholera, typhoid, and dysentery", "Tuberculosis", "Measles"], correct: 1, exp: "Sewage pathogens contaminate drinking sources, spreading gastrointestinal diseases." },
                { q: "Which device is fitted in factory chimneys to remove suspended soot particles?", options: ["Catalytic converter", "Electrostatic precipitator", "Barometer", "Centrifuge"], correct: 1, exp: "Electrostatic precipitators charge and collect airborne ash." },
                { q: "Biochemical Oxygen Demand (BOD) measures:", options: ["Level of organic pollution in water", "Water temperature", "Amount of fish", "Salt content"], correct: 0, exp: "High BOD indicates high organic pollution consuming dissolved oxygen." },
                { q: "Planting large numbers of trees to combat deforestation is called:", options: ["Deforestation", "Afforestation", "Agriculture", "Urbanization"], correct: 1, exp: "Afforestation is planting trees on barren or cleared land." },
                { q: "What does the 3Rs rule stand for in pollution control?", options: ["Read, Run, Rest", "Reduce, Reuse, Recycle", "Remove, Repair, Retain", "Refuel, Restart, Return"], correct: 1, exp: "Reduce, Reuse, Recycle." },
                { q: "Which layer of the atmosphere contains the beneficial protective ozone layer?", options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], correct: 1, exp: "The stratospheric ozone shield absorbs harmful solar ultraviolet rays." },
                { q: "Agricultural pesticides washing into rivers and accumulating up the food chain is called:", options: ["Biomagnification", "Eutrophication", "Sedimentation", "Biodegradation"], correct: 0, exp: "Biomagnification increases toxin concentration at higher trophic levels." },
                { q: "Which government body monitors National Ambient Air Quality in India?", options: ["CPCB (Central Pollution Control Board)", "RBI", "UGC", "NITI Aayog"], correct: 0, exp: "The Central Pollution Control Board (CPCB) tracks air and water quality." },
                { q: "Alum is added to muddy water during purification to:", options: ["Kill bacteria", "Speed up sedimentation of suspended particles (coagulation)", "Sweeten taste", "Remove dissolved salts"], correct: 1, exp: "Alum causes tiny suspended clay particles to clump together and settle." },
                { q: "Air quality index (AQI) of 0 to 50 is categorized as:", options: ["Hazardous", "Good", "Moderate", "Severe"], correct: 1, exp: "AQI between 0 and 50 denotes clean, healthy air." }
            ]
        }
    ]
};

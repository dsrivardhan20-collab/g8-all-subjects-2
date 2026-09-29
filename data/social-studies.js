/**
 * Telangana SCERT Class 8 - Social Studies Curriculum Data
 * Interactive Telangana SCERT Learning Platform
 * Official English Medium Textbook Structure
 */
window.SCERT_DATA = window.SCERT_DATA || {};
window.SCERT_DATA['social-studies'] = {
    id: 'social-studies',
    name: 'Social Studies',
    class: 'Class 8',
    icon: '🌍',
    accentColor: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    bgTheme: 'social-studies',
    tagline: 'Diversity on the Earth, History, and Democratic Governance',
    chapters: [
{
        chapterNum: 1,
        title: "Reading and Analysis of Maps",
        summary: "Introduction to historical cartography, projections, grids, scales, symbols, and contours.",
        topics: [
            {
                topicNum: 1,
                title: "Maps Down the Ages",
                youtubeId: "32Y2V23t6V0",
                explanation: `                    <p>The story of mapmaking begins thousands of years ago with the oldest known maps engraved on <strong>Sumerian clay tablets</strong> around 4,000 years ago. These early cartographers created drawings to record <span class="keyword-tooltip" data-tooltip="Real estate belonging to religious temples that was surveyed and mapped for tax purposes.">temple land ownership</span> for taxation purposes.</p>

                    <p>Later, about 2,600 years ago, the <strong>Babylonians</strong> designed a unique worldview on clay, depicting the Earth as a flat circular disc surrounded by a ring of salt water called the <span class="keyword-tooltip" data-tooltip="A circular salt-water ocean surrounding the known flat world in Babylonian geography.">Bitter River</span>, with Babylon proudly placed at the center.</p>

                    <p>The ancient <strong>Greeks</strong>, particularly scholars like Anaximander and Hecataeus, laid the mathematical foundation of geography by drawing world maps with Greece at the center, dividing the known world into three continents: Europe, Asi— and Libya. The famous Greco-Egyptian mathematician <strong>Ptolemy</strong> introduced the system of <span class="keyword-tooltip" data-tooltip="Coordinates used to find the exact location of any place on the Earth's surface.">latitudes and longitudes</span>, allowing cartographers to locate points on a coordinate grid.</p>

                    <p>During the middle ages, map orientations varied widely based on cultural perspectives. The medieval Arab scholar <strong>Al-Idrisi</strong> drew a detailed world map in 1154 AD that placed <strong>South at the top</strong>, while European <strong>T-O maps</strong> placed <strong>East (and Jerusalem) at the top</strong> due to religious beliefs. Furthermore, during the colonization er— European trading powers treated their oceanic maps as highly classified secrets to secure routes to colonies. When the British took control of Indi— they established the <strong>Survey of India</strong> led by <strong>James Rennell</strong> to systematically map the subcontinent and collect land revenue using <span class="keyword-tooltip" data-tooltip="A method of surveying where long steel chains are pulled across the ground to measure precise distances.">survey chains</span>.</p>

                    <div class="comparison-card">
                        <h4><i class="fa-solid fa-code-compare"></i> Map Orientations: Al-Idrisi vs. European T-O Maps</h4>
                        <div class="table-responsive">
                            <table class="comp-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Al-Idrisi World Map (1154 AD)</th>
                                        <th>European T-O Maps (Medieval)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Top Orientation</strong></td>
                                        <td>South is placed at the top of the map.</td>
                                        <td>East is placed at the top of the map.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Centerpoint</strong></td>
                                        <td>Arabian Peninsula (Mecca/Medina region).</td>
                                        <td>Jerusalem (due to Christian religious beliefs).</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Primary Influence</strong></td>
                                        <td>Scientific observations, trade reports, and Greek grids.</td>
                                        <td>Biblical scripture and theological worldviews.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: Clay Tablets vs. Survey Chains</div>
                        <div class="vs-content">
                            <span class="vs-highlight">Sumerian Clay Tablets</span> were small, hand-carved local maps used to record temple boundaries and local taxes, whereas <span class="vs-highlight">Survey Chains</span> were heavy steel tools used by the British in the 1700s to measure vast distances and systematically map all of India for national revenue.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge</div>
                            <span class="blooms-level-badge">Applying</span>
                        </div>
                        <div class="blooms-question">
                            If you were given a map drawn by Al-Idrisi in 1154 AD and told to navigate using a modern compass that points North, how would you orient it?
                        </div>
                        <div class="blooms-answer">
                            <strong>Answer:</strong> You must turn the map upside down (rotate it by 180 degrees).
                        </div>
                        <div class="blooms-explanation">
                            <strong>Explanation:</strong> Because Al-Idrisi placed South at the top of his map, the direction facing forward on his map is South. To align it with a modern map or compass which puts North at the top, you must rotate it so the bottom of his map faces your North heading.
                        </div>
                    </div>`,
                remember: "Sumerians made the oldest known maps on clay, but Greeks first used mathematical coordinates.",
                vocab: [
                    { word: "Cartography", meaning: "The scientific art of drawing and analyzing maps." },
                    { word: "Bitter River", meaning: "A circular salt ocean that Babylonians believed surrounded the flat Earth." },
                    { word: "T-O Map", meaning: "Medieval European maps shaped like a T inside an O, showing Asi— Europe, and Africa." },
                    { word: "Survey of India", meaning: "The mapping department established by the British to survey India." }
                ],
                summary: [
                    "Sumerians carved field maps on clay tablets for tax registry.",
                    "Babylonian maps represented the world as a circular flat disc.",
                    "Greek scholars Ptolemy and Hecataeus added grid systems to maps.",
                    "Al Idrisi made a famous map putting the South at the top.",
                    "Colonial empires treated maps as military secrets for conquest."
                ],
                funFact: "Ancient mapmakers often drew sea monsters (like Krakens) in blank ocean spots to warn sailors of danger.",
                realLife: "James Rennell surveyed Bengal using survey chains, establishing the basis for modern Indian revenue maps.",
                quiz: [
                    {
                        q: "Who were the earliest recorded mapmakers in history?",
                        options: ["Babylonians", "Sumerians", "Greeks", "Romans"],
                        correct: 1,
                        exp: "Sumerians engraved the oldest known maps on clay tablets 4,000 years ago to record land ownership."
                    },
                    {
                        q: "Where did the Babylonian world map place Babylon?",
                        options: ["At the southern edge", "At the very center", "Surrounding the Bitter River", "On a separate continent"],
                        correct: 1,
                        exp: "Babylonians placed Babylon at the center of their flat disc map of the world."
                    },
                    {
                        q: "Which cartographer first introduced coordinates using latitude and longitude?",
                        options: ["Anaximander", "Al Idrisi", "Ptolemy", "James Rennell"],
                        correct: 2,
                        exp: "Claudius Ptolemy first used latitude and longitude lines to locate places on early maps."
                    },
                    {
                        q: "In Al Idrisi's medieval map, which direction was placed at the top?",
                        options: ["North", "East", "South", "West"],
                        correct: 2,
                        exp: "Medieval Islamic geographer Al Idrisi placed South at the top of his 1154 AD map."
                    },
                    {
                        q: "Why did European powers keep maps highly secret in the colonial era?",
                        options: ["To avoid printing costs", "To prevent rivals from stealing trade routes", "Because map drawing was illegal", "To hide gold coordinates"],
                        correct: 1,
                        exp: "Naval routes and colonial resource maps were strategic military secrets. Stealing them helped rival empires capture colonies."
                    }
                ],
                flashcards: [
                    { q: "What is cartography?", a: "The science and art of drawing maps." },
                    { q: "Who made the earliest known maps?", a: "The Sumerians, on clay tablets around 4,000 years ago." },
                    { q: "Where was Jerusalem placed on T-O maps?", a: "At the center, reflecting medieval European religious beliefs." },
                    { q: "What top direction did Al Idrisi use?", a: "South." },
                    { q: "Who was James Rennell?", a: "The first Surveyor General of Bengal appointed by the British." }
                ]
            },
            {
                topicNum: 2,
                title: "Map Projections & Grid Systems",
                youtubeId: "kIID5FDi2JQ",
                explanation: `                    <p>The Earth is a three-dimensional <strong>sphere</strong>, but maps are flat, two-dimensional surfaces. It is mathematically impossible to flatten a sphere without stretching, shrinking, or tearing it, leading to inevitable <span class="keyword-tooltip" data-tooltip="The stretching, shrinking, or twisting of shapes, sizes, or distances when mapping a round globe onto flat paper.">distortion</span> in shape, size, or distance.</p>

                    <p>To solve this, cartographers use mathematical formulas called <strong>map projections</strong> to project the round globe's coordinates onto flat paper. In 1569, Dutch cartographer <strong>Gerardus Mercator</strong> developed the famous <strong>Mercator projection</strong>, which preserves straight lines of travel, making it the ultimate tool for marine navigation.</p>

                    <p>However, the Mercator projection has a major trade-off: it severely distorts the size of landmasses near the poles. For instance, Greenland appears to be the same size as Africa on a Mercator map, whereas Africa is actually <strong>14 times larger</strong> in reality! To address this, geographers developed other systems like the Arno Peters projection, which maintains correct size proportions at the expense of distorting shapes.</p>

                    <p>To locate positions accurately on these projections, geographers created a global grid of imaginary lines. <strong>Latitudes (parallels)</strong> are horizontal circles running parallel to the <strong>Equator (0°)</strong>, measuring degrees North or South. <strong>Longitudes (meridians)</strong> are vertical loops connecting the North and South poles, measuring degrees East or West of the <strong>Prime Meridian (0°)</strong> running through Greenwich, London. Together they form a global grid system.</p>

                    <div class="comparison-card">
                        <h4><i class="fa-solid fa-code-compare"></i> Projection Grid: Mercator vs. Arno Peters</h4>
                        <div class="table-responsive">
                            <table class="comp-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Gerardus Mercator Projection (1569)</th>
                                        <th>Arno Peters Projection (1973)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Primary Strength</strong></td>
                                        <td>Preserves accurate shapes, angles, and directions.</td>
                                        <td>Preserves accurate relative sizes (equal-area).</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Primary Weakness</strong></td>
                                        <td>Exaggerates land sizes near the poles (polar distortion).</td>
                                        <td>Distorts continental shapes (looks vertically stretched).</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Main Application</strong></td>
                                        <td>Marine navigation charts and modern digital web maps.</td>
                                        <td>Educational materials representing developing nations fairly.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: Latitudes vs. Longitudes</div>
                        <div class="vs-content">
                            <span class="vs-highlight">Latitudes</span> are parallel, horizontal circles that measure distances North or South of the Equator and never touch, whereas <span class="vs-highlight">Longitudes</span> are vertical semi-circles that measure distances East or West of the Prime Meridian and all meet at the poles.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge</div>
                            <span class="blooms-level-badge">Analyzing</span>
                        </div>
                        <div class="blooms-question">
                            Why does Google Maps use a variation of the cylindrical Mercator projection despite its extreme size distortion near the poles?
                        </div>
                        <div class="blooms-answer">
                            <strong>Answer:</strong> Because local angle and direction preservation is essential for navigation.
                        </div>
                        <div class="blooms-explanation">
                            <strong>Explanation:</strong> When you are zooming in to navigate streets, you need local intersections to remain at 90-degree angles and shapes to remain true. The Mercator projection preserves local angles perfectly, ensuring a square block looks square, even if high-latitude countries look oversized on a global view.
                        </div>
                    </div>`,
                remember: "Every flat map is distorted. Mercator's map is great for sailing directions but exaggerates polar land sizes.",
                vocab: [
                    { word: "Projection", meaning: "A method of showing the curved surface of Earth on a flat map." },
                    { word: "Distortion", meaning: "The stretching or shrinking of sizes, shapes, or distances on flat maps." },
                    { word: "Latitude", meaning: "Horizontal lines parallel to the Equator, measuring North or South." },
                    { word: "Longitude", meaning: "Vertical lines running from pole to pole, measuring East or West." }
                ],
                summary: [
                    "Spherical shapes cannot be flattened without stretching or tearing.",
                    "Projections project globe coordinate grids onto flat cylinders or planes.",
                    "Mercator's projection was designed to aid marine sailors in navigation.",
                    "Mercator maps make Greenland look as big as Afric— which is incorrect.",
                    "Latitude and longitude lines intersect to form a coordinate grid."
                ],
                funFact: "On a Mercator map, Greenland looks larger than South Americ— even though South America is actually 8 times larger!",
                realLife: "GPS receivers in smartphones use latitude and longitude coordinates to find your exact location on Google Maps.",
                quiz: [
                    {
                        q: "Why is it impossible to create a perfectly flat map without distortion?",
                        options: ["Earth is a sphere and paper is flat", "Cartographers make mistakes", "Gravity affects paper maps", "The continents are moving"],
                        correct: 0,
                        exp: "Stretching a 3D sphere onto a 2D flat paper mathematically forces distortion of size, shape, or distance."
                    },
                    {
                        q: "In what year did Mercator publish his famous navigation map projection?",
                        options: ["1492", "1569", "1620", "1776"],
                        correct: 1,
                        exp: "Gerardus Mercator published his cylindrical projection map in 1569."
                    },
                    {
                        q: "What is the main drawback of the Mercator projection?",
                        options: ["It bends travel directions", "It distorts land sizes near the poles", "It leaves out the oceans", "It has no coordinates"],
                        correct: 1,
                        exp: "Mercator projection preserves direction but exaggerates the size of areas near the poles."
                    },
                    {
                        q: "Which imaginary line splits the Earth into Northern and Southern halves?",
                        options: ["Prime Meridian", "Equator", "Tropic of Cancer", "Antarctic Circle"],
                        correct: 1,
                        exp: "The Equator ($0^\circ$ latitude) bisects the globe into Northern and Southern hemispheres."
                    },
                    {
                        q: "Where does the Prime Meridian ($0^\circ$ longitude) pass through?",
                        options: ["Greenwich, England", "New York, USA", "New Delhi, India", "Cairo, Egypt"],
                        correct: 0,
                        exp: "The Prime Meridian is internationally fixed to pass through Greenwich, London, England."
                    }
                ],
                flashcards: [
                    { q: "What is a map projection?", a: "A formula to draw the round Earth on flat paper." },
                    { q: "Who was Gerardus Mercator?", a: "A Dutch cartographer who created a famous navigational map in 1569." },
                    { q: "How are polar areas distorted in Mercator maps?", a: "They look far larger than their actual size." },
                    { q: "What is the Equator?", a: "The $0^\circ$ latitude line separating North and South hemispheres." },
                    { q: "What is longitude?", a: "Vertical lines connecting the poles, measuring East or West." }
                ]
            },
            {
                topicNum: 3,
                title: "Contour Lines & Elevation Relief",
                youtubeId: "pvw5ZM1OKcY",
                explanation: `                    <p>Maps are categorized based on their contents. <strong>Physical maps</strong> show natural features like mountains, rivers, and plateaus, while <strong>political maps</strong> depict administrative borders, cities, and states. <strong>Thematic maps</strong>, on the other hand, focus on a single subject, such as annual rainfall, soil types, forests, or population density.</p>

                    <p>To represent elevations on flat paper, geographers developed <strong>contour lines</strong>. A contour line is a type of <span class="keyword-tooltip" data-tooltip="An umbrella term for any map line connecting points that share the exact same value (like temperature or height).">isoline</span> that connects all locations on a map that share the exact same height above sea level. The vertical distance between two contour lines is called the <strong>contour interval</strong>.</p>

                    <p>The spacing between contour lines reveals the nature of the terrain's slope. When contour lines are drawn <strong>very close together</strong>, it indicates a <strong>steep slope</strong> or cliff. When they are spaced <strong>far apart</strong>, it represents a <strong>gentle slope</strong> or flat plain. Because a single point on Earth can only have one elevation at a time, contour lines never cross or branch.</p>

                    <p>Contour maps are invaluable planning tools. Engineers and urban planners analyze these lines to design safe roads, layout pipelines, build irrigation dams, and design terrace farms to control soil erosion.</p>

                    <div class="comparison-card">
                        <h4><i class="fa-solid fa-code-compare"></i> Map Types: Physical Maps vs. Thematic Maps</h4>
                        <div class="table-responsive">
                            <table class="comp-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Physical Maps</th>
                                        <th>Thematic Maps</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Primary Subject</strong></td>
                                        <td>Natural features (rivers, hills, plateaus).</td>
                                        <td>A single theme (rainfall, soils, population).</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Visual Shading</strong></td>
                                        <td>Elevation layers (green plains, brown mountains).</td>
                                        <td>Color gradients based on density or measurements.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Key Use Case</strong></td>
                                        <td>Understanding topography and terrain layout.</td>
                                        <td>Scientific study, agricultural and urban planning.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: Steep Slope vs. Gentle Slope</div>
                        <div class="vs-content">
                            On a topographic map, a <span class="vs-highlight">Steep Slope</span> is represented by tightly packed, crowded contour lines because the height changes rapidly over a short distance, whereas a <span class="vs-highlight">Gentle Slope</span> is shown by widely spaced contour lines.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge</div>
                            <span class="blooms-level-badge">Evaluating</span>
                        </div>
                        <div class="blooms-question">
                            You are a civil engineer planning a new road up a steep hill in Telangana. How will you use a contour map to choose the safest route for heavy trucks?
                        </div>
                        <div class="blooms-answer">
                            <strong>Answer:</strong> Trace the path along sections where the contour lines are spaced furthest apart.
                        </div>
                        <div class="blooms-explanation">
                            <strong>Explanation:</strong> Widely spaced contour lines indicate a gentle slope. Designing the road through these regions ensures the incline is gradual, preventing heavy vehicles from losing traction or tipping over on a steep climb.
                        </div>
                    </div>`,
                remember: "Contours never cross because a single location cannot have two different heights at the same time.",
                vocab: [
                    { word: "Contour Line", meaning: "A line on a map joining places of equal elevation above sea level." },
                    { word: "Contour Interval", meaning: "The fixed vertical height difference between two adjacent contour lines." },
                    { word: "Steep Slope", meaning: "A sharp incline where contours are drawn close together." },
                    { word: "Isoline", meaning: "A map line connecting points that have equal values of any measurement." }
                ],
                summary: [
                    "Contour lines represent three-dimensional terrain elevation on flat paper.",
                    "A single contour line connects points at the same height above sea level.",
                    "Contours packed close together indicate steep cliffs or hills.",
                    "Contours separated by wide spaces represent gentle, rolling land.",
                    "Isoline maps show patterns of height, temperature, or rainfall."
                ],
                funFact: "Military planners use contour maps to find flat paths for heavy vehicles to avoid tipping over on steep hills.",
                realLife: "Civil engineers consult contour maps of Telangana's hills to plan safe roads, pipelines, and agricultural dams.",
                quiz: [
                    {
                        q: "What do contour lines represent on a topographic map?",
                        options: ["Equal rainfall zones", "Equal height above sea level", "Equal population density", "Equal wind speeds"],
                        correct: 1,
                        exp: "Contour lines connect locations situated at the exact same elevation above sea level."
                    },
                    {
                        q: "If contour lines are packed tightly together, what does this tell us?",
                        options: ["The land is a flat plain", "The slope is very steep", "There is a river nearby", "The elevation is below sea level"],
                        correct: 1,
                        exp: "Closely spaced contours indicate that the height increases rapidly, representing a steep slope."
                    },
                    {
                        q: "Which of the following statements about contour lines is TRUE?",
                        options: ["They cross each other in valleys", "They branch out like tree roots", "They never cross or intersect", "They measure distance in kilometers"],
                        correct: 2,
                        exp: "Contour lines never cross because a single point cannot have two different heights."
                    },
                    {
                        q: "What is the general term for map lines connecting points of equal values?",
                        options: ["Equator lines", "Scales", "Isolines", "Meridians"],
                        correct: 2,
                        exp: "Isoline is the scientific umbrella term for any map line connecting equal measurements."
                    },
                    {
                        q: "Which isoline connects points experiencing the same temperature?",
                        options: ["Isobar", "Isohyet", "Isotherm", "Contour"],
                        correct: 2,
                        exp: "Isotherms connect points of equal temperature ('iso' means equal, 'therm' means temperature)."
                    }
                ],
                flashcards: [
                    { q: "What is a contour line?", a: "A line connecting points of equal height above sea level." },
                    { q: "What do close contour lines mean?", a: "A steep slope." },
                    { q: "What do wide contour lines mean?", a: "A gentle or flat slope." },
                    { q: "Can contour lines cross?", a: "No, they never cross." },
                    { q: "What is an isotherm?", a: "An isoline connecting places with equal temperatures." }
                ]
            }
        ]
    },
    {
        chapterNum: 2,
        title: "Energy from the Sun",
        summary: "Exploring solar insolation, temperature lapse rates, and factors heating our atmosphere.",
        topics: [
            {
                topicNum: 1,
                title: "Solar Insolation & Earth Curvature",
                youtubeId: null,
                explanation: `                    <p>The Sun is the primary source of light and heat energy for our planet. The solar energy received by the Earth's surface is known as <strong>solar insolation</strong> (incoming solar radiation).</p>

                    <p>Because the Earth is a <strong>sphere</strong>, sunrays strike different latitudes at different angles. This angle at which sunrays hit the Earth's surface is called the <span class="keyword-tooltip" data-tooltip="The angle at which solar rays strike the Earth's surface.">angle of incidence</span>.</p>

                    <p>At the <strong>Equator</strong>, sunrays hit vertically (90 degrees). Vertical rays are focused over a small surface are— and they travel a shorter distance through the atmosphere, meaning less heat is scattered. This makes equatorial regions extremely hot.</p>

                    <p>Moving toward the <strong>poles</strong>, the Earth's surface curves away, causing sunrays to hit at a slant. Slanting rays spread the same amount of solar energy over a much larger surface area. Additionally, they travel through a thicker layer of atmosphere, losing more heat to absorption and reflection. This creates the three primary <strong>thermal zones</strong>: Torrid (tropical), Temperate (moderate), and Frigid (polar) zones.</p>

                    <div class="comparison-card">
                        <h4><i class="fa-solid fa-code-compare"></i> Insolation Angle: Vertical vs. Slanting Rays</h4>
                        <div class="table-responsive">
                            <table class="comp-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Vertical Sunrays</th>
                                        <th>Slanting Sunrays</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Latitude Range</strong></td>
                                        <td>Equator and Torrid Zone (Low Latitudes).</td>
                                        <td>Poles and Frigid Zone (High Latitudes).</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Heat Intensity</strong></td>
                                        <td>Extremely high, focused on a small surface area.</td>
                                        <td>Very low, spread over a massive surface area.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Atmospheric Loss</strong></td>
                                        <td>Low; travels shorter path with less air interference.</td>
                                        <td>High; travels longer path losing heat to air layers.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: Insolation vs. Radiation</div>
                        <div class="vs-content">
                            <span class="vs-highlight">Solar Insolation</span> refers specifically to the incoming solar energy that actually reaches and is absorbed by the Earth's surface, while <span class="vs-highlight">Radiation</span> is the general transmission of energy in the form of electromagnetic waves from any heat source.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge</div>
                            <span class="blooms-level-badge">Analyzing</span>
                        </div>
                        <div class="blooms-question">
                            Why are polar regions freezing even during their summer seasons when the Sun remains visible in the sky for 24 hours a day?
                        </div>
                        <div class="blooms-answer">
                            <strong>Answer:</strong> The extreme slanting angle of the sunrays distributes the solar energy too sparsely.
                        </div>
                        <div class="blooms-explanation">
                            <strong>Explanation:</strong> Because the Earth's surface is curved at the poles, the sunrays hit at very low angles, spreading the heat over massive areas. Even with 24 hours of daylight, the intensity of heat per square meter is too low to melt the ice sheets.
                        </div>
                    </div>`,
                remember: "Sunrays are vertical at the Equator (hot) and slanting at the poles (cold) due to Earth's curvature.",
                vocab: [
                    { word: "Insolation", meaning: "Incoming Solar Radiation received by the Earth's surface." },
                    { word: "Angle of Incidence", meaning: "The angle at which solar rays strike the Earth's surface." },
                    { word: "Radiation", meaning: "Transmission of energy in the form of electromagnetic waves." },
                    { word: "Curvature", meaning: "The bending spherical shape of the Earth." }
                ],
                summary: [
                    "Insolation is solar radiation that reaches the Earth's atmosphere and surface.",
                    "Vertical sunbeams focus high heat onto small equatorial zones.",
                    "Slanted polar sunbeams distribute heat weakly over large zones.",
                    "Slanted rays pass through more atmosphere, scattering heat.",
                    "Curvature creates the primary temperature differences across latitudes."
                ],
                funFact: "The sun's energy hitting Earth in just one hour is enough to power the entire world's electricity needs for a year!",
                realLife: "Solar panels in India are tilted toward the south to capture the maximum amount of direct, high-angle sunlight.",
                quiz: [
                    {
                        q: "What is incoming solar radiation received by Earth called?",
                        options: ["Conduction", "Insolation", "Evaporation", "Greenhouse gas"],
                        correct: 1,
                        exp: "Solar Insolation is the term for incoming solar energy that strikes the Earth."
                    },
                    {
                        q: "Why do equatorial regions receive more intense heat than polar regions?",
                        options: ["The Equator is closer to the Sun", "Sunrays hit the Equator vertically", "The Equator has no atmosphere", "Poles have thicker landmasses"],
                        correct: 1,
                        exp: "Sunrays strike the Equator at a vertical $90^\circ$ angle, concentrating heat over a smaller area."
                    },
                    {
                        q: "What happens to the temperature of the Earth as you move from the Equator to the poles?",
                        options: ["It increases", "It decreases", "It stays exactly the same", "It fluctuates randomly"],
                        correct: 1,
                        exp: "Due to the increasing slant of sunrays, temperature decreases from the Equator toward the poles."
                    },
                    {
                        q: "How does the atmosphere affect slanted polar sunrays?",
                        options: ["It heats them up", "It absorbs/scatters more of their heat", "It bends them into circles", "It has no effect"],
                        correct: 1,
                        exp: "Slanted rays travel through a thicker layer of atmosphere, which scatters and absorbs more solar energy."
                    },
                    {
                        q: "What shape of the Earth causes sunrays to fall at different angles?",
                        options: ["Flat square", "Curved sphere", "Perfect cube", "Cylinder"],
                        correct: 1,
                        exp: "Earth's curved spherical shape causes sunbeams to hit different latitudes at varying angles."
                    }
                ],
                flashcards: [
                    { q: "What is insolation?", a: "Incoming solar radiation hitting Earth." },
                    { q: "Why is the Equator hot?", a: "Sunrays strike vertically, concentrating heat." },
                    { q: "Why are the poles cold?", a: "Sunrays strike at a slant, spreading heat." },
                    { q: "What is the angle of incidence?", a: "The angle at which sunbeams hit the ground." },
                    { q: "Where is insolation highest?", a: "At the Equator." }
                ]
            },
            {
                topicNum: 2,
                title: "Lapse Rates & Land-Water Differences",
                youtubeId: null,
                explanation: `                    <p>The atmosphere is not heated directly by the incoming sunrays. Instead, the Earth's surface absorbs solar insolation first and then radiates heat back into the air. This process is called <strong>terrestrial radiation</strong>.</p>

                    <p>Because the air is heated from the ground up, the temperature decreases as you go higher. In the troposphere, the temperature drops by approximately <strong>6.5°C for every 1,000 meters</strong> of altitude. This rate of cooling is known as the <span class="keyword-tooltip" data-tooltip="The typical cooling of air with altitude (drops 6.5°C per 1,000m) in the troposphere.">normal lapse rate</span>.</p>

                    <p>The heating of Earth's surface also depends on the material. Land and water heat up and cool down at different rates. Land is a solid conductor; it absorbs heat quickly and gets hot fast, but it also radiates that heat away rapidly when the sun sets.</p>

                    <p>In contrast, water is transparent and circulates heat. It takes much longer to heat up because solar rays penetrate deeper, but it also retains that heat for a much longer time. This difference in heating rates creates coastal <strong>sea breezes</strong> and <strong>land breezes</strong>, regulating temperatures in coastal areas.</p>

                    <div class="comparison-card">
                        <h4><i class="fa-solid fa-code-compare"></i> Thermal Properties: Land vs. Water</h4>
                        <div class="table-responsive">
                            <table class="comp-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Land Heating</th>
                                        <th>Water Heating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Rate of Heating</strong></td>
                                        <td>Heats up very quickly during the day.</td>
                                        <td>Heats up slowly due to depth penetration.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Rate of Cooling</strong></td>
                                        <td>Cools down very quickly at night.</td>
                                        <td>Cools down slowly, retaining heat longer.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Climate Effect</strong></td>
                                        <td>Creates extreme climates (hot days, cold nights).</td>
                                        <td>Moderates local temperatures via sea breezes.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: Normal Lapse Rate vs. Temperature Inversion</div>
                        <div class="vs-content">
                            <span class="vs-highlight">Normal Lapse Rate</span> is the typical cooling of air with altitude (drops 6.5°C per km), whereas <span class="vs-highlight">Temperature Inversion</span> is an unusual condition where cold air is trapped near the ground under a layer of warm air (temperature rises with altitude).
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge</div>
                            <span class="blooms-level-badge">Applying</span>
                        </div>
                        <div class="blooms-question">
                            The hill station of Ooty is at an altitude of 2,240 meters, while the nearby plains are at sea level. If the temperature in the plains is 30°C, estimate the temperature in Ooty using the normal lapse rate.
                        </div>
                        <div class="blooms-answer">
                            <strong>Answer:</strong> Approximately 15.4°C.
                        </div>
                        <div class="blooms-explanation">
                            <strong>Explanation:</strong> According to the normal lapse rate, temperature drops by 6.5°C per 1,000 meters. For 2.24 km, the temperature drop is 2.24 * 6.5 = 14.56°C. Subtracting this from the plains' temperature gives 30 - 14.56 = 15.44°C.
                        </div>
                    </div>`,
                remember: "Every 1,000m you go up a mountain, the temperature drops by $6.5^\circ\text{C}$ due to the Normal Lapse Rate.",
                vocab: [
                    { word: "Lapse Rate", meaning: "The rate at which atmospheric temperature drops as altitude increases." },
                    { word: "Altitude", meaning: "The vertical height of a place above sea level." },
                    { word: "Specific Heat", meaning: "The capacity of a substance (like land or water) to absorb heat." },
                    { word: "Terrestrial Radiation", meaning: "Heat radiated by the warm ground back into the atmosphere." }
                ],
                summary: [
                    "Sunlight heats the ground, and the warm ground heats the air.",
                    "Lapse rate causes high mountain peaks to remain cold.",
                    "Temperature falls $6.5^\circ\text{C}$ for every kilometer of altitude rise.",
                    "Land heats and cools rapidly compared to the slow heating of oceans.",
                    "Water's thermal inertia moderates temperatures in coastal cities."
                ],
                funFact: "Even at the hot Equator, mountain peaks like Mount Kilimanjaro are covered in snow because of high altitude cooling!",
                realLife: "People in Telangana travel to hill stations like Ooty or Shimla in summer because high altitudes are much cooler.",
                quiz: [
                    {
                        q: "How is the Earth's atmosphere primarily heated?",
                        options: ["Directly by incoming sunrays", "By heat radiated from the warm ground", "By volcanic activity", "By friction in the ozone layer"],
                        correct: 1,
                        exp: "Ground absorbs solar energy, then heats the atmosphere from below via terrestrial radiation."
                    },
                    {
                        q: "By how much does the temperature drop for every 1,000 meters of altitude rise?",
                        options: ["$1.5^\circ\\text{C}$", "$3.5^\circ\\text{C}$", "$6.5^\circ\\text{C}$", "$10^\circ\\text{C}$"],
                        correct: 2,
                        exp: "The Normal Lapse Rate states that temperature decreases by $6.5^\circ\\text{C}$ per kilometer of altitude."
                    },
                    {
                        q: "Why does land heat up and cool down much faster than water?",
                        options: ["Land is solid and opaque", "Water is closer to the sun", "Land has more trees", "Water contains salt"],
                        correct: 0,
                        exp: "Land is solid, opaque, and has a lower specific heat, absorbing heat only at the surface layer."
                    },
                    {
                        q: "Which city would experience a moderate climate year-round due to the sea?",
                        options: ["Hyderabad (Inland)", "Mumbai (Coastal)", "Delhi (Inland)", "Bhopal (Inland)"],
                        correct: 1,
                        exp: "Coastal cities like Mumbai benefit from ocean winds, which moderate temperatures."
                    },
                    {
                        q: "What is altitude?",
                        options: ["Distance from the Equator", "Height of a place above sea level", "Speed of wind", "Angle of sunrays"],
                        correct: 1,
                        exp: "Altitude is the vertical height of any point measured relative to mean sea level."
                    }
                ],
                flashcards: [
                    { q: "What is the Normal Lapse Rate?", a: "A $6.5^\circ\\text{C}$ temperature drop per 1,000m rise." },
                    { q: "Why are hills cooler than plains?", a: "Because temperature drops as altitude increases." },
                    { q: "Does land heat faster than water?", a: "Yes, land heats and cools much faster than water." },
                    { q: "What heats the atmosphere?", a: "Terrestrial radiation from the warm ground." },
                    { q: "What is a coastal climate?", a: "A moderate climate with small temperature changes." }
                ]
            },
            {
                topicNum: 3,
                title: "Temperature Belts & Heat Budgets",
                youtubeId: null,
                explanation: `                    <p>The Earth maintains a stable global temperature because of the balance between incoming solar energy and outgoing terrestrial radiation. This balance is known as the Earth's <strong>heat budget</strong>. If the Earth did not radiate back the energy it received, it would grow hotter every day.</p>

                    <p>Different regions experience varying heat budgets based on their latitude. The <strong>Torrid Zone</strong> (between the Tropics of Cancer and Capricorn) receives more insolation than it radiates back, leading to a surplus of heat.</p>

                    <p>The <strong>Frigid Zones</strong> (beyond the polar circles) experience a deficit, radiating away more heat than they receive. The global winds and ocean currents act as a planetary air conditioning system, transferring surplus heat from the equator to the cold poles.</p>

                    <p>Human activities, particularly burning fossil fuels, release greenhouse gases like carbon dioxide. These gases trap outgoing terrestrial radiation, disrupting the heat budget and causing <strong>global warming</strong>.</p>

                    <div class="comparison-card">
                        <h4><i class="fa-solid fa-code-compare"></i> Latitude Heat Balance: Torrid vs. Frigid</h4>
                        <div class="table-responsive">
                            <table class="comp-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Torrid Zone (Equatorial)</th>
                                        <th>Frigid Zone (Polar)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Heat Balance</strong></td>
                                        <td>Insolation exceeds outgoing radiation (surplus).</td>
                                        <td>Outgoing radiation exceeds insolation (deficit).</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Air Pressure</strong></td>
                                        <td>Leads to warm, rising air (low pressure belt).</td>
                                        <td>Leads to cold, sinking air (high pressure belt).</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Role in Climate</strong></td>
                                        <td>Sources heat carried away by planetary winds.</td>
                                        <td>Receives heat from warm ocean currents.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: Heat Budget vs. Global Warming</div>
                        <div class="vs-content">
                            <span class="vs-highlight">Heat Budget</span> is the natural equilibrium between incoming solar heat and outgoing earth radiation, while <span class="vs-highlight">Global Warming</span> is the rising global temperature caused when greenhouse gases trap extra outgoing heat.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge</div>
                            <span class="blooms-level-badge">Evaluating</span>
                        </div>
                        <div class="blooms-question">
                            Explain what would happen to life on Earth if planetary winds and ocean currents stopped transferring heat between latitudes.
                        </div>
                        <div class="blooms-answer">
                            <strong>Answer:</strong> The Equator would become extremely hot and uninhabitable, while the poles would freeze solid.
                        </div>
                        <div class="blooms-explanation">
                            <strong>Explanation:</strong> Without winds and ocean currents moving surplus heat from the equator to the polar deficit zones, the temperature difference between latitudes would escalate to extreme levels, destroying global ecosystems.
                        </div>
                    </div>`,
                remember: "The Torrid Zone is hot, Frigid Zone is frozen, and Temperate Zone lies comfortably in between.",
                vocab: [
                    { word: "Torrid Zone", meaning: "The hot tropical zone lying between the Tropic of Cancer and Tropic of Capricorn." },
                    { word: "Frigid Zone", meaning: "The extremely cold polar zones surrounding the North and South poles." },
                    { word: "Temperate Zone", meaning: "The mid-latitude zone with moderate climates and distinct seasons." },
                    { word: "Greenhouse Gas", meaning: "Gases like $CO_2$ that trap escaping heat in the atmosphere." }
                ],
                summary: [
                    "Earth is split into three heat zones based on solar angles.",
                    "The Torrid Zone receives high-intensity vertical rays.",
                    "Temperate Zones experience moderate, comfortable seasonal climates.",
                    "Frigid Zones receive highly slanted, weak rays, keeping them frozen.",
                    "Greenhouse gases trap heat, preventing Earth from freezing solid at night."
                ],
                funFact: "Without our atmosphere's natural greenhouse effect, Earth's average temperature would be a frozen $-18^\circ\text{C}$ instead of a comfortable $15^\circ\text{C}$!",
                realLife: "Telangana lies within the tropical Torrid Zone, which explains why we experience very hot summers and mild winters.",
                quiz: [
                    {
                        q: "Which heat zone receives direct, vertical sunrays year-round?",
                        options: ["Frigid Zone", "Temperate Zone", "Torrid Zone", "Subpolar Zone"],
                        correct: 2,
                        exp: "The Torrid Zone (between the Tropics) receives vertical sunrays, making it the hottest region."
                    },
                    {
                        q: "Which zone is located near the poles and remains frozen most of the year?",
                        options: ["Tropical Zone", "Temperate Zone", "Frigid Zone", "Equatorial Zone"],
                        correct: 2,
                        exp: "The Frigid Zone surrounds the North and South poles, receiving weak, highly slanted rays."
                    },
                    {
                        q: "What is the primary role of the Greenhouse Effect in Earth's atmosphere?",
                        options: ["To block all solar radiation", "To trap heat and keep the planet warm", "To produce oxygen", "To create wind currents"],
                        correct: 1,
                        exp: "Greenhouse gases trap terrestrial radiation, keeping Earth warm enough to support life."
                    },
                    {
                        q: "The Temperate Zone lies between which boundaries?",
                        options: ["Equator and the Tropics", "Tropics and the Polar Circles", "Polar Circles and the Poles", "Greenwich Meridian and the Equator"],
                        correct: 1,
                        exp: "Temperate zones lie between the tropical boundary lines and the cold polar circles."
                    },
                    {
                        q: "What would happen if the Earth had no atmosphere at all?",
                        options: ["It would be hot all the time", "It would freeze completely at night", "It would float away", "It would rain constantly"],
                        correct: 1,
                        exp: "Without greenhouse gases in the atmosphere, heat would escape into space, freezing Earth's surface at night."
                    }
                ],
                flashcards: [
                    { q: "What are the three global heat zones?", a: "Torrid (hot), Temperate (moderate), and Frigid (cold)." },
                    { q: "Where is the Torrid Zone?", a: "Between the Tropics of Cancer and Capricorn." },
                    { q: "Where is the Frigid Zone?", a: "Surrounding the North and South poles." },
                    { q: "What is the greenhouse effect?", a: "Atmospheric gases trapping escaping heat." },
                    { q: "Why is Telangana hot?", a: "Because it lies in the tropical Torrid Zone." }
                ]
            }
        ]
    },
    {
        chapterNum: 3,
        title: "Earth Movements and Seasons",
        summary: "Understanding Earth's rotation, revolution, axial tilt, solstices, and seasons.",
        topics: [
            {
                topicNum: 1,
                title: "Rotation & Day/Night Cycles",
                youtubeId: null,
                explanation: `                    <p>The Earth has two primary movements: rotation and revolution. The spinning of the Earth on its axis from West to East once every 24 hours is called <strong>rotation</strong>. This movement causes the cycle of <strong>day and night</strong>.</p>

                    <p>The axis of the Earth is an imaginary line passing through its center from the North Pole to the South Pole. This axis is tilted at an angle of <strong>23.5°</strong> from the perpendicular to the orbit plane, or <strong>66.5°</strong> to the orbital plane itself.</p>

                    <p>Because the Earth is a sphere, the Sun can only light up one half of the globe at a time. The boundary line that separates the lit day hemisphere from the dark night hemisphere is called the <span class="keyword-tooltip" data-tooltip="The imaginary boundary line separating the lit day side from the dark night side on the Earth's sphere.">circle of illumination</span>.</p>

                    <p>As the Earth rotates, points on the surface cross the circle of illumination, transitioning from dawn to noon, dusk, and midnight. The speed of rotation is fastest at the Equator and decreases to zero at the poles.</p>

                    <div class="comparison-card">
                        <h4><i class="fa-solid fa-code-compare"></i> Earth Movements: Rotation vs. Revolution</h4>
                        <div class="table-responsive">
                            <table class="comp-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Rotation</th>
                                        <th>Revolution</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Definition</strong></td>
                                        <td>Spinning of Earth on its axis.</td>
                                        <td>Movement of Earth around the Sun.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Duration</strong></td>
                                        <td>Takes exactly 24 hours (1 solar day).</td>
                                        <td>Takes 365.25 days (1 solar year).</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Principal Effect</strong></td>
                                        <td>Causes day/night cycles and wind deflection.</td>
                                        <td>Causes seasonal shifts and changes in day length.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: Rotation vs. Revolution</div>
                        <div class="vs-content">
                            <span class="vs-highlight">Rotation</span> is the Earth spinning like a top on its own axis, creating daily cycles, whereas <span class="vs-highlight">Revolution</span> is the Earth traveling in an oval path around the Sun, creating yearly seasonal cycles.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge</div>
                            <span class="blooms-level-badge">Understanding</span>
                        </div>
                        <div class="blooms-question">
                            Why do we experience sunrise in the East and sunset in the West?
                        </div>
                        <div class="blooms-answer">
                            <strong>Answer:</strong> Because the Earth rotates on its axis from West to East.
                        </div>
                        <div class="blooms-explanation">
                            <strong>Explanation:</strong> As the Earth spins eastward, objects in space (like the Sun) appear to rise over the eastern horizon and set in the West, similar to how scenery outside a moving train appears to rush backward.
                        </div>
                    </div>`,
                remember: "The Earth spins West to East once a day, which is why the Sun appears to rise in the East.",
                vocab: [
                    { word: "Rotation", meaning: "The spinning of the Earth on its own axis." },
                    { word: "Orbit", meaning: "The elliptical path the Earth takes around the Sun." },
                    { word: "Circle of Illumination", meaning: "The boundary line dividing the day side from the night side." },
                    { word: "Axis", meaning: "An imaginary line passing through the poles around which Earth spins." }
                ],
                summary: [
                    "Earth spins on its axis from West to East once every 24 hours.",
                    "Rotation creates the regular cycles of daylight and night.",
                    "The Circle of Illumination is the boundary line dividing day and night.",
                    "West-to-East rotation makes stars appear to move East-to-West.",
                    "Time zones are established because different longitudes face the Sun at different times."
                ],
                funFact: "At the equator, you are spinning around Earth's center at over 1,600 km/h, even though you feel completely still!",
                realLife: "The sun rises in Arunachal Pradesh (Eastern India) about two hours before it rises in Gujarat (Western India) due to rotation.",
                quiz: [
                    {
                        q: "How long does it take the Earth to complete one full rotation on its axis?",
                        options: ["1 hour", "12 hours", "24 hours", "365 days"],
                        correct: 2,
                        exp: "It takes the Earth approximately 24 hours (one day) to spin once on its axis."
                    },
                    {
                        q: "In which direction does the Earth rotate on its axis?",
                        options: ["East to West", "West to East", "North to South", "South to North"],
                        correct: 1,
                        exp: "The Earth rotates from West to East, causing the Sun to appear to rise in the East."
                    },
                    {
                        q: "What is the boundary dividing the day-lit side from the night-darkened side of Earth?",
                        options: ["Equator", "Circle of Illumination", "Prime Meridian", "Orbit Line"],
                        correct: 1,
                        exp: "The Circle of Illumination is the shifting line dividing day from night."
                    },
                    {
                        q: "What is the tilt angle of Earth's axis compared to the vertical perpendicular?",
                        options: ["$0^\circ$", "$23.5^\circ$", "$66.5^\circ$", "$90^\circ$"],
                        correct: 1,
                        exp: "The Earth's axis is tilted at an angle of $23.5^\circ$ to the vertical."
                    },
                    {
                        q: "Why does the Sun rise earlier in Kolkata than in Mumbai?",
                        options: ["Kolkata is closer to the Equator", "Earth rotates from West to East", "Mumbai is higher in altitude", "The Sun moves from North to South"],
                        correct: 1,
                        exp: "Because the Earth spins West to East, eastern locations like Kolkata turn to face the Sun first."
                    }
                ],
                flashcards: [
                    { q: "What is Earth's rotation?", a: "The spin of Earth on its axis once every 24 hours." },
                    { q: "Which way does Earth rotate?", a: "From West to East." },
                    { q: "What is the axis tilt?", a: "$23.5^\circ$ from vertical." },
                    { q: "What divides day and night?", a: "The Circle of Illumination." },
                    { q: "Why do we have day and night?", a: "Because of Earth's rotation." }
                ]
            },
            {
                topicNum: 2,
                title: "Revolution & Elliptical Orbit",
                youtubeId: null,
                explanation: `                    <p>While rotating on its axis, the Earth also travels around the Sun in a fixed oval path called an <strong>elliptical orbit</strong>. This movement is called <strong>revolution</strong> and takes 365 days and 6 hours (one year).</p>

                    <p>Because the orbit is elliptical, the distance between the Earth and the Sun changes throughout the year. The point where the Earth is closest to the Sun is called <span class="keyword-tooltip" data-tooltip="The point in Earth's elliptical orbit where it is closest to the Sun (in early January).">perihelion</span> (occurring in January), and the point where it is furthest is called <span class="keyword-tooltip" data-tooltip="The point in Earth's elliptical orbit where it is furthest from the Sun (in early July).">aphelion</span> (occurring in July).</p>

                    <p>The extra 6 hours accumulated each year are combined to add one extra day (24 hours) every four years. This year with 366 days is known as a <strong>leap year</strong>, where the extra day is added to the month of February.</p>

                    <p>Earth's revolution, combined with the tilt of its axis, is the direct cause of changing seasons. If the axis were perpendicular to the orbit, there would be no seasons, and day and night would be equal everywhere on Earth.</p>

                    <div class="comparison-card">
                        <h4><i class="fa-solid fa-code-compare"></i> Orbit States: Perihelion vs. Aphelion</h4>
                        <div class="table-responsive">
                            <table class="comp-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Perihelion</th>
                                        <th>Aphelion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Distance</strong></td>
                                        <td>Approximately 147 million kilometers.</td>
                                        <td>Approximately 152 million kilometers.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Month of Occurrence</strong></td>
                                        <td>Early January (during Southern hemisphere summer).</td>
                                        <td>Early July (during Northern hemisphere summer).</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Orbital Speed</strong></td>
                                        <td>Slightly faster due to stronger gravity.</td>
                                        <td>Slightly slower due to weaker gravity.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: Perihelion vs. Aphelion</div>
                        <div class="vs-content">
                            <span class="vs-highlight">Perihelion</span> is the orbital position where the Earth is closest to the Sun in January, whereas <span class="vs-highlight">Aphelion</span> is the orbital position where the Earth is furthest from the Sun in July.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge</div>
                            <span class="blooms-level-badge">Analyzing</span>
                        </div>
                        <div class="blooms-question">
                            Why does the Northern Hemisphere experience winter in January despite the Earth being at perihelion (closest to the Sun) during this month?
                        </div>
                        <div class="blooms-answer">
                            <strong>Answer:</strong> The axial tilt causes the Northern Hemisphere to lean away from the Sun in January.
                        </div>
                        <div class="blooms-explanation">
                            <strong>Explanation:</strong> Seasonal temperature changes are caused by the tilt of the Earth's axis, not its distance from the Sun. In January, the Northern Hemisphere tilts away from the Sun, receiving slanting sunrays that produce winter, overriding the small warming effect of perihelion.
                        </div>
                    </div>`,
                remember: "Revolution takes 365.25 days. The extra 0.25 day adds up every 4 years to make a Leap Year of 366 days.",
                vocab: [
                    { word: "Revolution", meaning: "The movement of the Earth around the Sun." },
                    { word: "Elliptical Orbit", meaning: "The oval-shaped path the Earth follows around the Sun." },
                    { word: "Leap Year", meaning: "A year with 366 days, occurring once every four years." },
                    { word: "Polarity of Tilt", meaning: "The Earth's axis remaining pointed in the same direction throughout its orbit." }
                ],
                summary: [
                    "Revolution is the Earth's year-long journey around the Sun.",
                    "An orbital cycle takes 365 days and 6 hours.",
                    "The oval elliptical path causes slight variations in distance to the Sun.",
                    "Polarity of tilt keeps the North Pole pointing toward Polaris.",
                    "The combination of tilt and revolution produces the seasonal cycles."
                ],
                funFact: "We are traveling around the Sun right now at 30 kilometers per second, faster than a speeding bullet!",
                realLife: "Leap years (like 2024, 2028) have 29 days in February to adjust our calendar to Earth's actual orbital time.",
                quiz: [
                    {
                        q: "How long does it take the Earth to complete one full revolution around the Sun?",
                        options: ["24 hours", "30 days", "365 1/4 days", "10 years"],
                        correct: 2,
                        exp: "Earth takes $365$ days and $6$ hours to complete one full orbit around the Sun."
                    },
                    {
                        q: "What is the shape of the path the Earth takes around the Sun?",
                        options: ["Perfect Circle", "Elliptical (Oval)", "Straight Line", "Spiral"],
                        correct: 1,
                        exp: "The Earth's orbit is elliptical, meaning it is slightly oval-shaped."
                    },
                    {
                        q: "How often does a Leap Year occur on our calendar?",
                        options: ["Every year", "Every 2 years", "Every 4 years", "Every 10 years"],
                        correct: 2,
                        exp: "The extra $\\frac{1}{4}$ day of orbit accumulates over 4 years to create an extra day (Leap Year)."
                    },
                    {
                        q: "What does the term 'Polarity of Tilt' mean?",
                        options: ["The magnetic poles swap places", "The Earth's axis always points toward the North Star", "The speed of spin changes", "The tilt angle changes back and forth"],
                        correct: 1,
                        exp: "Polarity of tilt means Earth's axis maintains its direction in space, pointing at the star Polaris."
                    },
                    {
                        q: "At what speed does the Earth travel along its orbital path?",
                        options: ["100 km/h", "5,000 km/h", "107,000 km/h", "1,000,000 km/h"],
                        correct: 2,
                        exp: "The Earth orbits the Sun at a speed of approximately $107,000$ km/h."
                    }
                ],
                flashcards: [
                    { q: "What is revolution?", a: "Earth's orbit around the sun once a year." },
                    { q: "What shape is Earth's orbit?", a: "Elliptical (oval)." },
                    { q: "How long is a true orbit year?", a: "365 days and 6 hours." },
                    { q: "Why do we have Leap Years?", a: "To catch up for the extra 6 hours of orbit each year." },
                    { q: "What is Polaris?", a: "The North Star, toward which Earth's axis points." }
                ]
            },
            {
                topicNum: 3,
                title: "Solstices, Equinoxes & Seasons",
                youtubeId: null,
                explanation: `                    <p>As the Earth orbits the Sun, the tilt of its axis causes the direct rays of the Sun to shift between latitudes. This solar movement defines <strong>solstices</strong> and <strong>equinoxes</strong>.</p>

                    <p>On <strong>June 21st (Summer Solstice)</strong>, the Northern Hemisphere is tilted toward the Sun, and direct sunrays strike the <strong>Tropic of Cancer (23.5°N)</strong>. This marks the longest day of the year in the Northern Hemisphere and the start of summer.</p>

                    <p>On <strong>December 22nd (Winter Solstice)</strong>, the Southern Hemisphere tilts toward the Sun, and sunrays strike the <strong>Tropic of Capricorn (23.5°S)</strong>. This is the shortest day in the Northern Hemisphere.</p>

                    <p>Twice a year, on <strong>March 21st and September 23rd (Equinoxes)</strong>, the Sun is directly overhead at the <strong>Equator</strong>. On these days, the circle of illumination passes directly through both poles, resulting in equal 12-hour days and nights all over the Earth.</p>

                    <div class="comparison-card">
                        <h4><i class="fa-solid fa-code-compare"></i> Year Markers: Solstice vs. Equinox</h4>
                        <div class="table-responsive">
                            <table class="comp-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Summer Solstice (June 21)</th>
                                        <th>Winter Solstice (Dec 22)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Overhead Sunlight</strong></td>
                                        <td>Tropic of Cancer (23.5° N).</td>
                                        <td>Tropic of Capricorn (23.5° S).</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Day Length</strong></td>
                                        <td>Longest day and shortest night of the year in North.</td>
                                        <td>Shortest day and longest night of the year in North.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Season Experienced</strong></td>
                                        <td>Summer in North / Winter in South.</td>
                                        <td>Winter in North / Summer in South.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: Solstice vs. Equinox</div>
                        <div class="vs-content">
                            <span class="vs-highlight">Solstices</span> occur when the Sun reaches its highest or lowest point relative to the celestial equator, hitting the Tropics and causing extreme day lengths, while <span class="vs-highlight">Equinoxes</span> occur when the Sun crosses the Equator, making day and night equal worldwide.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge</div>
                            <span class="blooms-level-badge">Evaluating</span>
                        </div>
                        <div class="blooms-question">
                            Explain how the seasons in Australia differ from those in Indi— and evaluate the cause of this difference.
                        </div>
                        <div class="blooms-answer">
                            <strong>Answer:</strong> Australia experiences winter when India has summer, due to their position in opposite hemispheres.
                        </div>
                        <div class="blooms-explanation">
                            <strong>Explanation:</strong> India is in the Northern Hemisphere, and Australia is in the Southern Hemisphere. When the Earth's axis tilts the Northern Hemisphere toward the Sun in June, India receives vertical rays (summer) while Australia tilts away, receiving slanting rays (winter).
                        </div>
                    </div>`,
                remember: "June 21 is Summer Solstice in the North. Dec 21 is Winter Solstice. Equinoxes have equal day and night.",
                vocab: [
                    { word: "Solstice", meaning: "Times of the year when the Sun is furthest north or south of the equator, creating extreme day lengths." },
                    { word: "Equinox", meaning: "Times of the year when day and night are of equal length everywhere on Earth." },
                    { word: "Summer Solstice", meaning: "June 21, when the sun is directly over the Tropic of Cancer." },
                    { word: "Winter Solstice", meaning: "December 21, when the sun is directly over the Tropic of Capricorn." }
                ],
                summary: [
                    "Seasons result from the combination of axial tilt and revolution.",
                    "During Summer Solstice in June, the North Pole tilts toward the Sun.",
                    "During Winter Solstice in December, the North Pole tilts away from the Sun.",
                    "Equinoxes occur in March and September when the Sun is directly over the Equator.",
                    "The Northern and Southern Hemispheres have opposite seasonal cycles."
                ],
                funFact: "During summer, the North Pole experiences the 'Midnight Sun', where the Sun never sets and shines for 24 hours a day for months!",
                realLife: "In Indi— the festival of Makara Sankranti in January marks the traditional transition of the Sun moving northward, ending winter.",
                quiz: [
                    {
                        q: "Which two factors combine to create seasons on Earth?",
                        options: ["Rotation and distance from the Sun", "Axial tilt and orbital revolution", "Ocean currents and wind speed", "Gravity and magnetic fields"],
                        correct: 1,
                        exp: "The tilt of the Earth's axis ($23.5^\circ$) combined with its revolution around the Sun causes changing seasons."
                    },
                    {
                        q: "On which day is the Northern Hemisphere tilted most toward the Sun, marking its longest day?",
                        options: ["March 21", "June 21", "September 23", "December 21"],
                        correct: 1,
                        exp: "June 21 is the Summer Solstice, when the Northern Hemisphere has its longest day and starts summer."
                    },
                    {
                        q: "What occurs on March 21 and September 23 when the Sun is directly over the Equator?",
                        options: ["Solstices", "Equinoxes", "Solar Eclipses", "Midsummer days"],
                        correct: 1,
                        exp: "On these dates, Equinoxes occur, resulting in equal day and night lengths across the globe."
                    },
                    {
                        q: "If it is summer in India (Northern Hemisphere), what season is it in Australia?",
                        options: ["Summer", "Autumn", "Winter", "Spring"],
                        correct: 2,
                        exp: "Northern and Southern Hemispheres always have opposite seasons; Australia is in winter when India is in summer."
                    },
                    {
                        q: "What is the day length at the Equator during an equinox?",
                        options: ["8 hours", "12 hours", "16 hours", "24 hours"],
                        correct: 1,
                        exp: "During an equinox, all latitudes, including the Equator, experience exactly 12 hours of day and 12 hours of night."
                    }
                ],
                flashcards: [
                    { q: "Why do we have seasons?", a: "Due to Earth's axial tilt and revolution." },
                    { q: "What is Summer Solstice?", a: "June 21, the longest day in the Northern Hemisphere." },
                    { q: "What is Winter Solstice?", a: "December 21, the shortest day in the Northern Hemisphere." },
                    { q: "What does Equinox mean?", a: "Equal day and night (12 hours each) worldwide." },
                    { q: "Do hemispheres have the same seasons?", a: "No, they have opposite seasons." }
                ]
            }
        ]
    },
    {
        chapterNum: 4,
        title: "The Polar Regions",
        summary: "Exploring tundra environments, Inuit adaptations, and changing polar ecosystems.",
        topics: [
            {
                topicNum: 1,
                title: "The Cold Tundra Landscape",
                youtubeId: null,
                explanation: `                    <p>The regions surrounding the North and South poles (within the Arctic and Antarctic circles) are the coldest places on Earth. The northern polar region is known as the <strong>Tundra</strong>, which means "cold desert" or "treeless plain."</p>

                    <p>The Tundra experiences an extremely harsh climate. Winters are long and freezing, with temperatures dropping below <strong>-40°C</strong>. During this time, the region is plunged into complete darkness for several months due to the tilt of the Earth's axis.</p>

                    <p>Summers are very short and cool, lasting only a few weeks. The sun remains low on the horizon, shining 24 hours a day but providing very little warmth. The heat is so weak that it only melts the top few inches of soil.</p>

                    <p>The deeper soil layers remain frozen solid year-round. This permanently frozen subsoil is called <strong>permafrost</strong>. Permafrost prevents plant roots from growing deep and keeps water from draining away, creating bogs and marshes in summer.</p>

                    <div class="comparison-card">
                        <h4><i class="fa-solid fa-code-compare"></i> Desert Landscapes: Polar Tundra vs. Hot Desert</h4>
                        <div class="table-responsive">
                            <table class="comp-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Polar Tundra</th>
                                        <th>Hot Desert</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Primary Limit</strong></td>
                                        <td>Extreme freezing temperatures (cannot grow trees).</td>
                                        <td>Extreme lack of water/rainfall.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Subsoil State</strong></td>
                                        <td>Frozen solid year-round (Permafrost).</td>
                                        <td>Sandy, porous, and dry.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Summer Vegetation</strong></td>
                                        <td>Mosses, lichens, and dwarf shrubs.</td>
                                        <td>Cacti, thorny bushes, and date palms.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: Ice Cap vs. Permafrost</div>
                        <div class="vs-content">
                            <span class="vs-highlight">Ice Cap</span> is a thick sheet of solid ice covering the surface of the land, while <span class="vs-highlight">Permafrost</span> is underground soil, gravel, and rock bound together by frozen ice beneath the surface.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge</div>
                            <span class="blooms-level-badge">Analyzing</span>
                        </div>
                        <div class="blooms-question">
                            Why are there no tall trees in the Tundra landscape?
                        </div>
                        <div class="blooms-answer">
                            <strong>Answer:</strong> The permafrost layer prevents deep root growth, and the summer is too short for wood formation.
                        </div>
                        <div class="blooms-explanation">
                            <strong>Explanation:</strong> Tree roots need soft, unfrozen soil to grow deep and anchor the tree. In the Tundr— the soil beneath the surface is frozen permafrost. The short summer only thaws a thin top layer, allowing only shallow-rooted mosses and lichens to grow.
                        </div>
                    </div>`,
                remember: "The Tundra is a cold desert. Its subsoil is permanently frozen (permafrost), preventing trees from growing.",
                vocab: [
                    { word: "Tundra", meaning: "A vast, flat, treeless Arctic region where the subsoil is permanently frozen." },
                    { word: "Permafrost", meaning: "Permanently frozen ground or subsoil beneath the Earth's surface." },
                    { word: "Lichen", meaning: "A slow-growing plant made of algae and fungi, key food in the tundra." },
                    { word: "Polar Circle", meaning: "The boundary lines of latitude ($66.5^\circ$ N and S) enclosing polar zones." }
                ],
                summary: [
                    "Polar zones experience extreme freezing, dry climates.",
                    "Permafrost blocks tree roots, creating a treeless landscape.",
                    "Summer lasts only 2 to 3 months with continuous weak daylight.",
                    "Vegetation is restricted to low-lying lichens, moss, and grass.",
                    "Polar animals possess blubber (fat) or double-fur layers to trap body heat."
                ],
                funFact: "During the Arctic winter, it is dark for 24 hours a day for nearly six months, with only the stars and northern lights to see!",
                realLife: "Climate scientists study the melting of Arctic permafrost because it releases trapped greenhouse gases like methane.",
                quiz: [
                    {
                        q: "Which type of landscape characterizes the treeless Arctic polar zone?",
                        options: ["Taiga", "Tundra", "Savanna", "Steppe"],
                        correct: 1,
                        exp: "The treeless Arctic plain with frozen subsoil is called the Tundra."
                    },
                    {
                        q: "What is permafrost?",
                        options: ["Frozen mountain glaciers", "Permanently frozen subsoil", "Winter snow storms", "Ice floating on the sea"],
                        correct: 1,
                        exp: "Permafrost refers to the underground soil layer that remains frozen solid year-round."
                    },
                    {
                        q: "Why are there no tall trees in the Tundra region?",
                        options: ["Adivasis cut them down", "Animal grazing is too high", "Permafrost prevents deep root growth", "There is too much rainfall"],
                        correct: 2,
                        exp: "Because the subsoil is frozen solid (permafrost), tree roots cannot grow deep enough to support trees."
                    },
                    {
                        q: "Which plant is a primary source of food for caribou in the tundra?",
                        options: ["Oak trees", "Lichen", "Cactus", "Lotus"],
                        correct: 1,
                        exp: "Lichens and mosses are the primary vegetation and food sources in this cold landscape."
                    },
                    {
                        q: "How do Arctic animals adapt to keep warm in freezing temperatures?",
                        options: ["By migrating to space", "Thick layers of fat (blubber) and double fur", "By changing color", "By sleeping in water"],
                        correct: 1,
                        exp: "Layers of fat (blubber) and heavy fur coats trap body heat in freezing weather."
                    }
                ],
                flashcards: [
                    { q: "What does Tundra mean?", a: "A flat, cold, treeless Arctic plain." },
                    { q: "What is permafrost?", a: "Permanently frozen subsoil." },
                    { q: "Can trees grow in the Tundra?", a: "No, because the ground is frozen solid." },
                    { q: "What are typical Tundra plants?", a: "Lichens, mosses, and dwarf shrubs." },
                    { q: "How do animals survive the cold?", a: "Using thick fur and fat (blubber) layers." }
                ]
            },
            {
                topicNum: 2,
                title: "Inuit Livelihoods & Culture",
                youtubeId: null,
                explanation: `                    <p>Despite the harsh climate, human groups have inhabited the Arctic for thousands of years. The native people of the Arctic are known as the <strong>Inuit</strong> (formerly called Eskimos, meaning "people of the snow").</p>

                    <p>The Inuit adapted to the cold by developing a nomadic hunting lifestyle. In winter, they lived in dome-shaped houses built from blocks of compacted snow, called <strong>igloos</strong>. The air trapped inside the snow blocks acts as an excellent insulator, trapping body heat.</p>

                    <p>In the summer, they migrated along coasts and lived in portable tents made from animal skins. They used animal fat (blubber) from seals and whales to fuel stone lamps for light and warmth.</p>

                    <p>The Inuit hunted seals, walruses, and caribou. They used light skin-covered boats called <strong>kayaks</strong> for hunting individual animals, and larger open boats called <strong>umiaks</strong> to transport families and hunt whales.</p>

                    <div class="comparison-card">
                        <h4><i class="fa-solid fa-code-compare"></i> Inuit Watercraft: Kayak vs. Umiak</h4>
                        <div class="table-responsive">
                            <table class="comp-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Kayak</th>
                                        <th>Umiak</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Deck Structure</strong></td>
                                        <td>Small, narrow, closed deck boat for one person.</td>
                                        <td>Large, open boat with flat bottom.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Materials</strong></td>
                                        <td>Seal skin stretched over light wood/bone frame.</td>
                                        <td>Sturdy wooden frame covered with walrus hides.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Usage</strong></td>
                                        <td>Fast, silent hunting of seals and birds.</td>
                                        <td>Transporting families, tents, and hunting whales.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: Igloo vs. Skin Tent</div>
                        <div class="vs-content">
                            <span class="vs-highlight">Igloo</span> is a winter shelter made of compacted snow blocks that traps heat, whereas <span class="vs-highlight">Skin Tent</span> is a summer shelter made of animal hides that is easy to dismantle and carry during hunting migrations.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge</div>
                            <span class="blooms-level-badge">Applying</span>
                        </div>
                        <div class="blooms-question">
                            Explain how the physics of an igloo allows humans to sleep comfortably inside without freezing, even when the outside temperature is -40°C.
                        </div>
                        <div class="blooms-answer">
                            <strong>Answer:</strong> Snow blocks contain pockets of trapped air, which acts as a thermal insulator.
                        </div>
                        <div class="blooms-explanation">
                            <strong>Explanation:</strong> Compacted snow blocks are poor conductors of heat because of the air trapped inside them. The igloo traps the body heat of the occupants and heat from small oil lamps, keeping the inside temperature near freezing (0°C), which is much warmer than the freezing -40°C outside.
                        </div>
                    </div>`,
                remember: "Traditional Inuits farmed nothing. They survived by hunting marine mammals and caribou, sharing resources.",
                vocab: [
                    { word: "Inuit", meaning: "The native people of the Arctic regions (means 'the people')." },
                    { word: "Igloo", meaning: "A traditional winter dome house built from compressed snow blocks." },
                    { word: "Kayak", meaning: "A light, narrow, seal-skin covered canoe used for hunting." },
                    { word: "Umiak", meaning: "A larger open skin boat used for transporting families and hunting whales." }
                ],
                summary: [
                    "Inuit populations adapted to survive without agricultural farming.",
                    "Diet consisted of protein-rich seal, fish, whale, and caribou meat.",
                    "Igloos use trapped air inside snow blocks as insulation.",
                    "Traditional transit relied on dog sledges and skin boats.",
                    "Strict communal sharing of food was vital for winter survival."
                ],
                funFact: "The word 'igloo' simply means 'house' in the Inuit language, and can refer to any home, not just snow domes!",
                realLife: "Snow block structures are still taught in Arctic survival courses because they are warm inside, even in blizzards.",
                quiz: [
                    {
                        q: "What is the traditional name of the native people of the Arctic?",
                        options: ["Adivasis", "Inuit", "Maoris", "Zulu"],
                        correct: 1,
                        exp: "Inuit is the native name for the Arctic inhabitants, replacing the colonial term 'Eskimo'."
                    },
                    {
                        q: "Why did the traditional Inuit NOT cultivate crops?",
                        options: ["They did not have seeds", "The soil was frozen year-round", "They preferred eating fish only", "Farming was forbidden"],
                        correct: 1,
                        exp: "Freezing temperatures and permafrost soil make agriculture impossible in the Arctic."
                    },
                    {
                        q: "How does a snow-block igloo keep its occupants warm?",
                        options: ["It has a fireplace built inside", "Snow blocks trap insulating air pocket layers", "It is painted black to absorb heat", "It is built deep underground"],
                        correct: 1,
                        exp: "Compressed snow blocks contain air bubbles that block body heat from escaping."
                    },
                    {
                        q: "What is a kayak?",
                        options: ["A dog-drawn sledge", "A narrow, seal-skin covered hunting canoe", "A type of winter coat", "A snow knife tool"],
                        correct: 1,
                        exp: "A kayak is a narrow, light boat covered in skin, used for hunting marine animals."
                    },
                    {
                        q: "Which value was most important in traditional Inuit society to survive winter?",
                        options: ["Individual competition", "Communal sharing of hunted food", "Amassing private property", "Building large stone cities"],
                        correct: 1,
                        exp: "Food sharing was a survival rule, ensuring everyone in the group survived winters."
                    }
                ],
                flashcards: [
                    { q: "Who are the Inuit?", a: "The indigenous people of the Arctic polar regions." },
                    { q: "What did traditional Inuits eat?", a: "Meat from seals, whales, fish, and caribou." },
                    { q: "What is an igloo?", a: "A dome-shaped winter house made of snow blocks." },
                    { q: "What is a kayak?", a: "A skin-covered boat for solo hunting." },
                    { q: "How did they travel over ice?", a: "Sleds pulled by husky dogs." }
                ]
            },
            {
                topicNum: 3,
                title: "Modern Changes & Arctic Wildlife",
                youtubeId: null,
                explanation: `                    <p>The traditional nomadic life of the Inuit changed significantly in the 20th century. Modern technology replaced historical tools: snowmobiles replaced dog sleds, and modern rifles replaced harpoons for hunting.</p>

                    <p>Today, most Inuit live in permanent wooden houses in established villages with schools and healthcare facilities, rather than migrating with seasonal animal herds.</p>

                    <p>The polar region is rich in mineral resources, leading to the discovery of oil and natural gas. This has brought large mining corporations to the Arctic, leading to conflicts over native land rights and causing environmental pollution.</p>

                    <p>The Arctic is also facing a severe threat from <strong>global warming</strong>. Rising temperatures are melting ice caps at an alarming rate, disrupting the migration of polar bears and seals, and threatening the entire polar ecosystem.</p>

                    <div class="comparison-card">
                        <h4><i class="fa-solid fa-code-compare"></i> Arctic Transition: Traditional vs. Modern Life</h4>
                        <div class="table-responsive">
                            <table class="comp-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Traditional Inuit Life</th>
                                        <th>Modern Arctic Life</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Housing</strong></td>
                                        <td>Snow igloos in winter, skin tents in summer.</td>
                                        <td>Permanent wooden houses with electric heating.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Transport</strong></td>
                                        <td>Dog sleds (qamutiks) and skin kayaks.</td>
                                        <td>Snowmobiles, motorboats, and airplanes.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Economy</strong></td>
                                        <td>Subsistence hunting, fishing, and gathering.</td>
                                        <td>Wage labor in mining, tourism, and services.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: Dog Sleds vs. Snowmobiles</div>
                        <div class="vs-content">
                            <span class="vs-highlight">Dog Sleds</span> are traditional transportation tools pulled by packs of huskies that rely on local feeding, while <span class="vs-highlight">Snowmobiles</span> are motorized gas-powered vehicles that travel much faster but require imported fuel and maintenance.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge</div>
                            <span class="blooms-level-badge">Evaluating</span>
                        </div>
                        <div class="blooms-question">
                            Evaluate the impact of modern oil exploration on the environment and indigenous communities of the Arctic.
                        </div>
                        <div class="blooms-answer">
                            <strong>Answer:</strong> It provides economic development but threatens ecosystems and traditional livelihoods.
                        </div>
                        <div class="blooms-explanation">
                            <strong>Explanation:</strong> Oil extraction brings jobs and infrastructure, but oil spills pollute the soil and water, destroying seal populations and forcing the Inuit to abandon their traditional subsistence lifestyle.
                        </div>
                    </div>`,
                remember: "Modern Arctic life uses snowmobiles and heated homes, but oil drilling and warming climates threaten the ecology.",
                vocab: [
                    { word: "Snowmobile", meaning: "A motorized vehicle designed for travel over snow and ice." },
                    { word: "Climate Change", meaning: "The warming of global temperatures, causing Arctic ice sheets to melt." },
                    { word: "Drilling", meaning: "Extracting liquid oil or natural gas from beneath the frozen Arctic tundra." },
                    { word: "Nomadic transition", meaning: "Shifting from seasonal movement to settled life in permanent towns." }
                ],
                summary: [
                    "Modern technologies replaced traditional hunting and travel tools.",
                    "Inuit groups transitioned from seasonal nomad tents to permanent towns.",
                    "Arctic lands face ecological stress from mining and drilling.",
                    "Warming climates melt sea ice, shrinking polar bear habitats.",
                    "Schools, internet, and global economies changed polar culture."
                ],
                funFact: "Due to melting sea ice, polar bears are forced to swim hundreds of miles without rest to find stable ice platforms.",
                realLife: "Alaska and northern Canada export crude oil globally via giant heated pipelines running through the tundra.",
                quiz: [
                    {
                        q: "Which machine has largely replaced traditional dog sledges in the Arctic?",
                        options: ["Kayaks", "Snowmobiles", "Steam engines", "Oxen carts"],
                        correct: 1,
                        exp: "Snowmobiles are modern motorized sledges now used for fast travel over ice."
                    },
                    {
                        q: "What major resource discovery brought industries to the Arctic tundra?",
                        options: ["Teak wood forests", "Coal and gold mines", "Oil and natural gas reserves", "Spices and cotton plantations"],
                        correct: 2,
                        exp: "Large reserves of oil and gas drew mining operations to northern Alaska and Russia."
                    },
                    {
                        q: "How does climate change directly impact polar bears?",
                        options: ["It makes them hibernate longer", "It melts sea ice, reducing their hunting grounds", "It burns their forests", "It freezes their drinking water"],
                        correct: 1,
                        exp: "Polar bears hunt seals on sea ice. Melting ice limits their ability to hunt and feed."
                    },
                    {
                        q: "Where do modern Inuit people live today?",
                        options: ["Only in igloos", "In modern heated wooden houses in settled towns", "In underground caves", "In fabric teepees"],
                        correct: 1,
                        exp: "Most Inuit families now live in modern communities with electricity, schools, and heating."
                    },
                    {
                        q: "What is a negative consequence of oil drilling in the Arctic?",
                        options: ["It makes the weather colder", "Risk of oil spills in delicate polar ecosystems", "It prevents snow from falling", "It increases dog populations"],
                        correct: 1,
                        exp: "Oil leaks in frozen waters are extremely difficult to clean and damage marine life."
                    }
                ],
                flashcards: [
                    { q: "What replaced dog sleds?", a: "Motorized snowmobiles." },
                    { q: "Do Inuits still live in igloos?", a: "No, they live in modern houses with heating." },
                    { q: "What resources are mined in the Arctic?", a: "Oil, natural gas, iron, and gold." },
                    { q: "How does warming affect the Arctic?", a: "It melts sea ice and thaws permafrost." },
                    { q: "Why is melting ice bad for polar bears?", a: "It deprives them of platforms to hunt seals." }
                ]
            }
        ]
    },
    {
        chapterNum: 5,
        title: "Forests: Using and Protecting Them",
        summary: "Analyzing forest classifications in Telangan— deforestation, and the Forest Rights Act.",
        topics: [
            {
                topicNum: 1,
                title: "Types of Forests in Telangana",
                youtubeId: null,
                explanation: `                    <p>Forests are areas with high tree density, playing a vital role in soil conservation, water cycles, and providing oxygen. In Telangan— forests are classified into different types based on rainfall and climate.</p>

                    <p><strong>Evergreen forests</strong> grow in areas with very high rainfall. These trees do not shed all their leaves at once, so the forest looks green throughout the year. The trees form a thick canopy that blocks sunlight from reaching the ground.</p>

                    <p><strong>Deciduous forests</strong> (both moist and dry) are found in moderate rainfall regions, like Adilabad and Mulugu. These trees shed their leaves during the hot, dry summer months to conserve moisture through transpiration.</p>

                    <p><strong>Thorny scrub forests</strong> are found in dry areas with low rainfall, such as Nalgonda and Mahabubnagar. These trees have small, thick leaves and sharp thorns to prevent water loss and protect themselves from grazing animals.</p>

                    <div class="comparison-card">
                        <h4><i class="fa-solid fa-code-compare"></i> Telangana Woodlands: Evergreen vs. Deciduous</h4>
                        <div class="table-responsive">
                            <table class="comp-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Evergreen Forests</th>
                                        <th>Deciduous Forests</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Rainfall Needs</strong></td>
                                        <td>High rainfall (exceeding 200 cm annually).</td>
                                        <td>Moderate rainfall (70 to 150 cm annually).</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Leaf Shedding</strong></td>
                                        <td>Shed leaves continuously; never bare.</td>
                                        <td>Shed all leaves together during the dry summer.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Key Species</strong></td>
                                        <td>Rosewood, Ebony, Mahogany, Bamboo.</td>
                                        <td>Teak, Neem, Sal, Maddi, Bamboo.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: Canopy vs. Undergrowth</div>
                        <div class="vs-content">
                            <span class="vs-highlight">Canopy</span> is the roof-like layer formed by the interlocking leaves and branches of tall trees, while <span class="vs-highlight">Undergrowth</span> refers to the small shrubs, herbs, and mosses growing on the dark forest floor beneath the canopy.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge</div>
                            <span class="blooms-level-badge">Analyzing</span>
                        </div>
                        <div class="blooms-question">
                            Why do thorny scrub forest plants have spines or thorns instead of broad leaves?
                        </div>
                        <div class="blooms-answer">
                            <strong>Answer:</strong> Thorns reduce water loss through transpiration in dry climates.
                        </div>
                        <div class="blooms-explanation">
                            <strong>Explanation:</strong> Broad leaves have many pores (stomata) that release water vapor. To survive in arid zones, scrub plants have modified their leaves into sharp spines, which minimize surface area and transpiration while protecting them from herbivores.
                        </div>
                    </div>`,
                remember: "Deciduous forests shed leaves in summer to stop evaporation, while Thorny scrub plants use thorns to survive dry land.",
                vocab: [
                    { word: "Deciduous", meaning: "Trees that shed their leaves annually during the dry winter or summer season." },
                    { word: "Evergreen", meaning: "Forests that remain green year-round because trees shed leaves at different times." },
                    { word: "Thorny Scrub", meaning: "Low, thorny bushes growing in semi-arid, low rainfall regions." },
                    { word: "Mangrove", meaning: "Salt-tolerant forest ecosystems growing in coastal tidal areas." }
                ],
                summary: [
                    "Forest distribution is determined by rainfall and temperature.",
                    "Evergreen forests remain dense and green throughout all seasons.",
                    "Deciduous trees shed leaves to conserve water during dry months.",
                    "Thorny forests use spines and thick bark to reduce moisture loss.",
                    "Mangroves grow breathing roots to absorb air in muddy delta water."
                ],
                funFact: "Deciduous forests are the most common forest type in Telangan— covering districts like Adilabad and Mulugu.",
                realLife: "The famous teakwood of Telangana comes from dry deciduous forests, valued globally for building durable furniture.",
                quiz: [
                    {
                        q: "Which forest type is found in regions with very high rainfall, keeping its leaves year-round?",
                        options: ["Thorny Scrub Forest", "Tropical Evergreen Forest", "Deciduous Forest", "Desert Oasis"],
                        correct: 1,
                        exp: "Evergreen forests grow in high rainfall areas and never shed leaves all at once."
                    },
                    {
                        q: "Why do deciduous forests shed their leaves during the dry summer season?",
                        options: ["To protect from pest attacks", "To prevent water loss through transpiration", "To let sunlight reach the ground", "Because they are dying"],
                        correct: 1,
                        exp: "Shedding leaves reduces transpiration, helping trees survive dry periods with limited groundwater."
                    },
                    {
                        q: "Which type of forest is most common in the dry, low-rainfall zones of Telangana?",
                        options: ["Evergreen Forest", "Mangrove Forest", "Thorny Scrub Forest", "Coniferous Forest"],
                        correct: 2,
                        exp: "Thorny scrub forests grow in dry areas with less than $70\text{ cm}$ of rain."
                    },
                    {
                        q: "What unique physical feature helps mangrove trees survive in waterlogged, muddy delta soils?",
                        options: ["Fleshy thorns", "Aerial breathing roots", "Broad fan leaves", "Thin papery bark"],
                        correct: 1,
                        exp: "Mangroves have aerial roots growing upward out of the mud to breathe oxygen."
                    },
                    {
                        q: "Where in Telangana would you typically find dry deciduous forests?",
                        options: ["Only on river deltas", "Adilabad and Bhadradri Kothagudem districts", "In the center of Hyderabad city", "In high mountain peaks"],
                        correct: 1,
                        exp: "Telangana's major forested districts have dry deciduous trees like Teak, Bamboo, and Maddi."
                    }
                ],
                flashcards: [
                    { q: "What is an evergreen forest?", a: "A wet forest that stays green all year." },
                    { q: "What is a deciduous forest?", a: "A forest where trees shed leaves in dry season." },
                    { q: "Why do plants have thorns in scrub forests?", a: "To prevent water loss and deter animals." },
                    { q: "Where do mangroves grow?", a: "In salty coastal deltas and swamps." },
                    { q: "What is Telangana's main forest type?", a: "Deciduous forest." }
                ]
            },
            {
                topicNum: 2,
                title: "Deforestation & State Reserve Reserves",
                youtubeId: null,
                explanation: `                    <p>Forest cover is shrinking globally due to human actions. The clearing of forest land for agriculture, urban development, and industries is called <strong>deforestation</strong>. This leads to soil erosion, loss of biodiversity, and global warming.</p>

                    <p>To protect forests, governments divide them into legal categories. <strong>Reserved Forests</strong> are strictly protected zones owned by the state. No local collection of wood, grazing, or hunting is allowed without permission.</p>

                    <p><strong>Protected Forests</strong> allow local communities to collect dry firewood and graze cattle, provided their activities do not cause damage to the trees.</p>

                    <p>The government established national parks and wildlife sanctuaries to protect endangered animals. However, these conservation programs often restrict tribal access to ancestral lands, leading to conflicts between forest departments and indigenous populations.</p>

                    <div class="comparison-card">
                        <h4><i class="fa-solid fa-code-compare"></i> Legal Protection: Reserved vs. Protected Forests</h4>
                        <div class="table-responsive">
                            <table class="comp-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Reserved Forests</th>
                                        <th>Protected Forests</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Protection Level</strong></td>
                                        <td>Strict; closed to public access and exploitation.</td>
                                        <td>Moderate; open for limited local usage.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Public Activities</strong></td>
                                        <td>Cutting wood, hunting, and grazing are strictly prohibited.</td>
                                        <td>Grazing and collecting dry wood are permitted for locals.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Ownership Status</strong></td>
                                        <td>Owned and managed completely by State Forest Department.</td>
                                        <td>Managed by state but local community rights are recognized.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: Reserved Forests vs. Protected Forests</div>
                        <div class="vs-content">
                            <span class="vs-highlight">Reserved Forests</span> allow absolutely no entry or resource collection to ensure maximum conservation, whereas <span class="vs-highlight">Protected Forests</span> allow surrounding villagers to collect dry timber and graze animals.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge</div>
                            <span class="blooms-level-badge">Applying</span>
                        </div>
                        <div class="blooms-question">
                            A tribal family living near a forest is arrested for gathering dry twigs to cook food. Which category of forest did they likely enter, and what rights did they violate?
                        </div>
                        <div class="blooms-answer">
                            <strong>Answer:</strong> They entered a Reserved Forest where all resource collection is prohibited.
                        </div>
                        <div class="blooms-explanation">
                            <strong>Explanation:</strong> In Protected Forests, collection of dry wood for domestic use is legally permitted for local forest-dwellers. However, in Reserved Forests, all human activity is banned by default to preserve the ecosystem.
                        </div>
                    </div>`,
                remember: "Colonial forest laws banned tribals from their lands to clear timber for railway tracks and British ships.",
                vocab: [
                    { word: "Podu", meaning: "Traditional shifting cultivation practiced by tribal farmers in hills." },
                    { word: "Reserved Forest", meaning: "State-protected forests where local entry, grazing, and farming are strictly banned." },
                    { word: "Deforestation", meaning: "The permanent clearing of trees and forest cover for non-forest uses." },
                    { word: "Paper Mill", meaning: "An industry that consumes massive amounts of bamboo and wood pulp to produce paper." }
                ],
                summary: [
                    "Tribal groups practiced sustainable shifting agriculture for generations.",
                    "Colonial rulers nationalized forests, declaring them state assets.",
                    "Reservation laws criminalized traditional forest collection and grazing.",
                    "Commercial logging destroyed large forest ecosystems.",
                    "JFM schemes attempt to involve villagers in forest conservation."
                ],
                funFact: "During the British rule, millions of teak and sal trees were cut down just to make wooden sleepers for laying railway tracks in India!",
                realLife: "Tribal communities in Adilabad protested for decades against forest guards to protect their right to collect honey and tendu leaves.",
                quiz: [
                    {
                        q: "What is the traditional shifting cultivation practiced by hill tribes in Telangana called?",
                        options: ["Terrace farming", "Podu", "Crop rotation", "Hydroponics"],
                        correct: 1,
                        exp: "Podu is the local name for shifting agriculture, where patches of forest are farmed and left to fallow."
                    },
                    {
                        q: "Why did the British colonial government create 'Reserved Forests'?",
                        options: ["To protect wildlife from hunting", "To control timber resources for navy ships and railways", "To build safari parks for tourists", "To give land to tribal farmers"],
                        correct: 1,
                        exp: "The British wanted monopoly control over valuable timber like teak and pine for industrial use."
                    },
                    {
                        q: "How did British forest laws affect tribal populations?",
                        options: ["They made them rich landlords", "They evicted them and banned traditional forest collection", "They hired them all as officers", "They built schools in every village"],
                        correct: 1,
                        exp: "Laws banned tribals from gathering fuel, grazing cattle, and farming, dividing communities from their ancestral land."
                    },
                    {
                        q: "What was a major cause of deforestation during the 19th and 20th centuries?",
                        options: ["Overplanting of tea gardens", "Clearing forests for railway tracks and industrial wood pulp", "Tribals planting fruit trees", "Low rainfall"],
                        correct: 1,
                        exp: "Commercial timber clearing for railways and industrial mills destroyed huge forest tracts."
                    },
                    {
                        q: "What is the main goal of Joint Forest Management (JFM)?",
                        options: ["To cut down more trees for export", "To protect and regrow forests by involving local villages", "To build highways through national parks", "To ban all humans from forests"],
                        correct: 1,
                        exp: "JFM partners government forestry departments with local communities to restore degraded forests."
                    }
                ],
                flashcards: [
                    { q: "What is Podu?", a: "Shifting cultivation practiced by tribal groups." },
                    { q: "What is a Reserved Forest?", a: "A state-owned forest where local use is illegal." },
                    { q: "Why did the British seize forests?", a: "To secure timber for railways and naval ships." },
                    { q: "How did tribals react to forest laws?", a: "They protested to defend their ancestral rights." },
                    { q: "What does JFM stand for?", a: "Joint Forest Management, protecting forests with communities." }
                ]
            },
            {
                topicNum: 3,
                title: "The Forest Rights Act (FRA) 2006",
                youtubeId: null,
                explanation: `                    <p>For generations, tribal communities (Adivasis) have lived in forests, managing resources sustainably. However, colonial laws declared them "encroachers" on their own land, leading to evictions and loss of livelihood.</p>

                    <p>To correct this historical injustice, the Indian government passed the <strong>Forest Rights Act (FRA) in 2006</strong>. The FRA recognizes the legal land rights of forest-dwelling tribes and traditional forest communities.</p>

                    <p>Under the FR— families who have farmed forest land before December 2005 can claim legal titles (Patta) for up to <strong>4 hectares</strong> of land. This ensures they cannot be evicted arbitrarily.</p>

                    <p>The Act also grants communities the right to protect and manage local forest resources, collect minor forest produce (like honey, bamboo, and tendu leaves), and manage local conservation programs through their <strong>Gram Sabhas</strong>.</p>

                    <div class="comparison-card">
                        <h4><i class="fa-solid fa-code-compare"></i> Legal Reform: Pre-FRA vs. Post-FRA Tribal Rights</h4>
                        <div class="table-responsive">
                            <table class="comp-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Before FRA (Colonial Forest Laws)</th>
                                        <th>After FRA (Post-2006)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Land Ownership</strong></td>
                                        <td>Tribals had no legal titles and were treated as occupiers.</td>
                                        <td>Families get legal land titles (Patta) up to 4 hectares.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Resource Gathering</strong></td>
                                        <td>Access to forests and minor produce was banned or taxed.</td>
                                        <td>Communities can legally gather and sell minor forest produce.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Management Power</strong></td>
                                        <td>Managed strictly by forest department officers.</td>
                                        <td>Gram Sabhas have the power to protect and manage forests.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: Individual Rights vs. Community Rights under FRA</div>
                        <div class="vs-content">
                            <span class="vs-highlight">Individual Rights</span> give specific families legal ownership over the plots of forest land they farm, while <span class="vs-highlight">Community Rights</span> give the entire village Gram Sabha authority to manage local water bodies, grazing grounds, and forests.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge</div>
                            <span class="blooms-level-badge">Evaluating</span>
                        </div>
                        <div class="blooms-question">
                            Evaluate the role of the Gram Sabha under the Forest Rights Act (FRA) in protecting local environments from corporate exploitation.
                        </div>
                        <div class="blooms-answer">
                            <strong>Answer:</strong> The Gram Sabha has the legal authority to reject or approve commercial projects on forest lands.
                        </div>
                        <div class="blooms-explanation">
                            <strong>Explanation:</strong> The FRA empowers the Gram Sabha (the village assembly) to manage forest conservation. Corporate entities wishing to mine or clear forest land must obtain consent from the Gram Sabha first, giving tribal communities a powerful legal shield to protect their environment.
                        </div>
                    </div>`,
                remember: "The FRA 2006 returned legal land rights to tribals, making the Gram Sabha the key authority for verifying land claims.",
                vocab: [
                    { word: "FRA 2006", meaning: "Scheduled Tribes and Other Traditional Forest Dwellers Act, recognizing forest land rights." },
                    { word: "Patta", meaning: "An official land ownership title deed document issued by the government." },
                    { word: "Minor Forest Produce", meaning: "Non-timber forest items like honey, wax, bamboo, and tendu leaves." },
                    { word: "Gram Sabha", meaning: "A village assembly consisting of all voting adults in a community." }
                ],
                summary: [
                    "FRA 2006 corrects historical injustices faced by forest-dwelling tribes.",
                    "The law grants formal land titles to tribal families farming forest plots.",
                    "Community ownership of minor forest produce was legally recognized.",
                    "The local Gram Sabha acts as the democratic body verifying land claims.",
                    "The act balances human rights with ecological forest conservation."
                ],
                funFact: "Tendu leaves, collected by tribals under FRA community rights, are used to wrap traditional Indian bidis, providing key seasonal income.",
                realLife: "In several districts of Telangan— hundreds of Koya and Gond families received 'FRA Pattas', securing their right to farm their land legally.",
                quiz: [
                    {
                        q: "In what year did the Government of India pass the historic Forest Rights Act?",
                        options: ["1947", "1980", "2000", "2006"],
                        correct: 3,
                        exp: "The Forest Rights Act was passed by the Parliament in 2006 to recognize tribal land claims."
                    },
                    {
                        q: "What is an individual right granted under the FRA 2006?",
                        options: ["Free electricity", "Land ownership deeds (patta) for up to 4 hectares of farmed forest land", "Government jobs in cities", "Free tractors"],
                        correct: 1,
                        exp: "Tribal families who farmed forest land before Dec 2005 can claim legal deeds up to 4 hectares."
                    },
                    {
                        q: "Which items are considered Minor Forest Produce (MFP) under the FRA?",
                        options: ["Heavy teak wood logs", "Honey, wax, bamboo, and tendu leaves", "Gold and iron ores", "Wild animals"],
                        correct: 1,
                        exp: "MFP covers non-timber forest resources that communities harvest for their livelihood."
                    },
                    {
                        q: "Which local body is responsible for first receiving and verifying forest land claims?",
                        options: ["High Court", "Gram Sabha (Village Assembly)", "Forest Department Office", "District Collector"],
                        correct: 1,
                        exp: "The Gram Sabha starts the process of mapping and approving individual and community land claims."
                    },
                    {
                        q: "Why is the FRA 2006 described as correcting a 'historical injustice'?",
                        options: ["It abolished taxes", "It recognized tribal rights ignored since colonial times", "It banned forest fires", "It created new national parks"],
                        correct: 1,
                        exp: "For generations, forest dwellers were treated as illegal trespassers on lands they occupied for centuries. The FRA resolved this."
                    }
                ],
                flashcards: [
                    { q: "What is the FRA 2006?", a: "A law recognizing the rights of forest-dwelling tribes to their land." },
                    { q: "What is a Patta?", a: "A government title deed proving land ownership." },
                    { q: "Give examples of Minor Forest Produce.", a: "Honey, tendu leaves, bamboo, medicinal herbs." },
                    { q: "Who verifies land claims first?", a: "The Gram Sabha (village assembly)." },
                    { q: "What land limit can a family claim?", a: "Up to 4 hectares of forest land they were farming." }
                ]
            }
        ]
    },
    {
        chapterNum: 6,
        title: "Minerals and Mining",
        summary: "Understanding mineral classifications, mining methods, and social-environmental impacts.",
        topics: [
            {
                topicNum: 1,
                title: "Mineral Types & Distribution",
                youtubeId: null,
                explanation: `                    <p>Minerals are naturally occurring inorganic chemical substances found in rocks within the Earth's crust. Rocks containing high concentrations of a particular mineral that can be extracted for profit are called <strong>ores</strong>.</p>

                    <p>Minerals are <strong>non-renewable resources</strong>. It takes millions of years of geological pressure and heat to form them, meaning once they are mined and used up, they are gone forever.</p>

                    <p>Minerals are divided into <strong>metallic minerals</strong> (which contain metals like iron ore, copper, and bauxite) and <strong>non-metallic minerals</strong> (which do not contain metals and are brittle, like limestone, gypsum, and mica).</p>

                    <p>Limestone is the crucial raw material used in manufacturing cement, which is abundant in Telangana districts like Suryapet and Vikarabad. Energy minerals, such as coal and petroleum, are fossil fuel minerals burned to generate electricity and fuel transport.</p>

                    <div class="comparison-card">
                        <h4><i class="fa-solid fa-code-compare"></i> Mineral Classes: Metallic vs. Non-Metallic</h4>
                        <div class="table-responsive">
                            <table class="comp-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Metallic Minerals</th>
                                        <th>Non-Metallic Minerals</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Physical Properties</strong></td>
                                        <td>Lustrous, ductile, and excellent conductors of electricity.</td>
                                        <td>Non-lustrous, brittle, and poor conductors.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Recycling</strong></td>
                                        <td>Can be melted down and recycled repeatedly.</td>
                                        <td>Cannot be recycled; consumed or broken upon use.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Examples</strong></td>
                                        <td>Iron Ore, Bauxite (Aluminum), Copper, and Manganese.</td>
                                        <td>Limestone, Mic— Gypsum, and Coal.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: Mineral vs. Ore</div>
                        <div class="vs-content">
                            <span class="vs-highlight">Mineral</span> is any naturally occurring chemical compound found in rocks, while <span class="vs-highlight">Ore</span> is a specific rock that contains enough concentrated mineral content to make mining it commercially profitable.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge</div>
                            <span class="blooms-level-badge">Analyzing</span>
                        </div>
                        <div class="blooms-question">
                            Why are minerals considered non-renewable resources even though new rocks are continuously formed on Earth?
                        </div>
                        <div class="blooms-answer">
                            <strong>Answer:</strong> The speed of human consumption far exceeds the millions of years required for mineral crystallization.
                        </div>
                        <div class="blooms-explanation">
                            <strong>Explanation:</strong> Geological processes like volcanic cooling and sedimentation take millions of years to accumulate and concentrate minerals into viable ores. Human mining extracts these deposits in decades, making them practically irreplaceable in human timeframes.
                        </div>
                    </div>`,
                remember: "Minerals are non-renewable resources. Metallic minerals can be recycled, but energy minerals (coal) are destroyed upon burning.",
                vocab: [
                    { word: "Mineral", meaning: "A natural chemical compound found in Earth's rocks." },
                    { word: "Ore", meaning: "A natural rock or sediment containing valuable minerals that can be mined for profit." },
                    { word: "Non-Renewable", meaning: "Resources that cannot be replenished naturally at the pace they are consumed." },
                    { word: "Limestone", meaning: "A non-metallic mineral used as the primary raw material to manufacture cement." }
                ],
                summary: [
                    "Minerals are natural, non-renewable chemical components of rocks.",
                    "Metallic minerals are tough and conduct electricity (e.g., iron, copper).",
                    "Non-metallic minerals are used in construction and chemical fields.",
                    "Fossil fuel minerals provide the primary energy sources for industries.",
                    "Uneven global distribution makes trade and conservation critical."
                ],
                funFact: "Coal is actually formed from the compressed remains of ancient swamp forests that died over 300 million years ago!",
                realLife: "The cement used to build houses in Telangana is made by crushing mined limestone, which is rich in Adilabad and Suryapet.",
                quiz: [
                    {
                        q: "Why are minerals classified as 'non-renewable' resources?",
                        options: ["They dissolve in water", "They take millions of years to form and cannot be easily replaced", "They are made of wood", "They are cheap to buy"],
                        correct: 1,
                        exp: "Mineral deposits are finite. Once mined, geological processes take millions of years to form new ones."
                    },
                    {
                        q: "Which of the following is a metallic mineral?",
                        options: ["Limestone", "Bauxite (Aluminum Ore)", "Coal", "Mica"],
                        correct: 1,
                        exp: "Bauxite is the primary metallic ore used to produce aluminum."
                    },
                    {
                        q: "Which mineral is the main ingredient used to manufacture cement?",
                        options: ["Iron ore", "Limestone", "Gold", "Granite"],
                        correct: 1,
                        exp: "Limestone is crushed and baked to make cement, a key construction material."
                    },
                    {
                        q: "What are energy minerals?",
                        options: ["Minerals that contain high salt", "Fossil fuels like Coal and Petroleum used for power", "Metallic ores like Copper", "Precious gems"],
                        correct: 1,
                        exp: "Coal, petroleum, and natural gas are energy minerals that release heat when burned."
                    },
                    {
                        q: "How does the distribution of minerals vary across the Earth?",
                        options: ["They are distributed equally in every country", "They are distributed unevenly based on rock types", "They are only found in oceans", "They are only found at the poles"],
                        correct: 1,
                        exp: "Minerals are found where specific geological processes occurred, leading to uneven deposits globally."
                    }
                ],
                flashcards: [
                    { q: "What is an ore?", a: "A rock containing extractable minerals." },
                    { q: "Are minerals renewable?", a: "No, they are non-renewable." },
                    { q: "Give an example of a metallic mineral.", a: "Iron ore, Bauxite, or Copper." },
                    { q: "Give an example of a non-metallic mineral.", a: "Limestone, Gypsum, or Mica." },
                    { q: "What is coal formed from?", a: "Compressed ancient swamp plants." }
                ]
            },
            {
                topicNum: 2,
                title: "Open-cast vs. Underground Mining",
                youtubeId: null,
                explanation: `                    <p>Mining is the process of extracting mineral ores from deep within the ground. The choice of mining method depends on the depth and layout of the mineral deposit.</p>

                    <p><strong>Open-cast mining</strong> (surface mining) is used for shallow mineral deposits lying close to the surface. The topsoil and rock layers are stripped off, and minerals are excavated from a massive open pit.</p>

                    <p>Open-cast mining is cheaper, safer, and allows rapid extraction, but it destroys large forest areas and leaves giant scars on the landscape.</p>

                    <p><strong>Underground mining</strong> (shaft mining) is used for deep mineral deposits. It involves drilling vertical tunnels called <strong>shafts</strong> and horizontal networks to reach deep ore veins. This method is highly expensive and dangerous, with risks of cave-ins, toxic gas leaks (like carbon monoxide), and underground flooding. It can also cause occupational lung diseases like pneumoconiosis (Black Lung) in coal miners.</p>

                    <div class="comparison-card">
                        <h4><i class="fa-solid fa-code-compare"></i> Mining Styles: Open-cast vs. Underground Shaft</h4>
                        <div class="table-responsive">
                            <table class="comp-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Open-cast Surface Mining</th>
                                        <th>Underground Shaft Mining</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Ore Depth</strong></td>
                                        <td>Shallow deposits close to the surface.</td>
                                        <td>Deep deposits located far underground.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Operational Cost</strong></td>
                                        <td>Lower cost; requires heavy earthmoving machinery.</td>
                                        <td>Very high cost; requires tunnel ventilation and shafts.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Safety Risks</strong></td>
                                        <td>Minimal; risk of slope collapse or dust inhalation.</td>
                                        <td>High; risk of gas explosions, flooding, and cave-ins.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: Surface Pit vs. Mine Shaft</div>
                        <div class="vs-content">
                            <span class="vs-highlight">Surface Pit</span> is a massive, wide-open excavation hole exposed to the sky in open-cast mining, while <span class="vs-highlight">Mine Shaft</span> is a deep, vertical elevator tunnel dug into the Earth to access underground galleries.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge</div>
                            <span class="blooms-level-badge">Evaluating</span>
                        </div>
                        <div class="blooms-question">
                            A coal company discovers a coal deposit at a depth of 600 meters. Select and justify the best mining method for this project.
                        </div>
                        <div class="blooms-answer">
                            <strong>Answer:</strong> Underground shaft mining is required because the deposit is too deep for surface excavation.
                        </div>
                        <div class="blooms-explanation">
                            <strong>Explanation:</strong> At 600 meters, stripping off all the overlying rock layers (overburden) to create an open pit is economically and environmentally impossible. A vertical mine shaft with elevator cages must be constructed to extract the coal safely from deep seams.
                        </div>
                    </div>`,
                remember: "Open-cast mining digs a wide surface pit, while underground mining uses deep elevators and tunnels to reach minerals.",
                vocab: [
                    { word: "Open-cast Mining", meaning: "A surface mining method of clearing top soil to dig minerals from an open pit." },
                    { word: "Underground Mining", meaning: "A method of digging vertical shafts and horizontal tunnels to reach deep ores." },
                    { word: "Black Lung", meaning: "A chronic lung disease caused by long-term inhalation of coal dust." },
                    { word: "Mining Shaft", meaning: "A vertical tunnel or elevator shaft used to carry miners and ore up and down." }
                ],
                summary: [
                    "Mining is the extraction of valuable minerals from the ground.",
                    "Open-cast mining digs minerals out from shallow open surface pits.",
                    "Underground mining uses deep tunnel networks to extract deep deposits.",
                    "Tunnel collapses and toxic gas leaks are major underground risks.",
                    "Inhaling mineral dust causes chronic occupational lung diseases."
                ],
                funFact: "Some deep underground gold mines in South Africa reach depths of over 4 kilometers beneath the surface, where temperatures exceed $50^\circ\text{C}$!",
                realLife: "Singareni Collieries Company Limited (SCCL) in Telangana operates both open-cast and deep underground coal mines to power the state.",
                quiz: [
                    {
                        q: "Which mining method is used when mineral deposits lie close to the Earth's surface?",
                        options: ["Underground shaft mining", "Open-cast surface mining", "Drilling", "Deep sea dredging"],
                        correct: 1,
                        exp: "Open-cast mining strips off topsoil to extract shallow mineral deposits directly from a surface pit."
                    },
                    {
                        q: "Why is underground mining more dangerous than open-cast mining?",
                        options: ["It is too hot on the surface", "Risk of tunnel collapses, toxic gas leaks, and flooding", "Wild animals live in tunnels", "Miners might float away"],
                        correct: 1,
                        exp: "Deep tunnels are prone to collapses, flooding, and explosions from trapped gases (like methane)."
                    },
                    {
                        q: "What occupational disease is commonly faced by coal miners due to inhaling coal dust?",
                        options: ["Malaria", "Black Lung Disease (Pneumoconiosis)", "Scurvy", "Cholera"],
                        correct: 1,
                        exp: "Breathing in coal dust damages lung tissue, leading to Black Lung disease."
                    },
                    {
                        q: "What is a vertical elevator tunnel used in deep mining called?",
                        options: ["Pit lane", "Mining Shaft", "Escalator", "Contour line"],
                        correct: 1,
                        exp: "A shaft is a vertical tunnel used to transport workers, equipment, and extracted ore."
                    },
                    {
                        q: "Which state-run company conducts large-scale coal mining in Telangana?",
                        options: ["Telangana Forest Department", "Singareni Collieries Company Limited (SCCL)", "Hyderabad Metro Rail", "Telangana State Road Transport"],
                        correct: 1,
                        exp: "SCCL is the primary public sector coal mining enterprise in Telangana."
                    }
                ],
                flashcards: [
                    { q: "What is open-cast mining?", a: "Surface mining by digging an open pit." },
                    { q: "What is underground mining?", a: "Mining via deep shafts and tunnels." },
                    { q: "Why is underground mining dangerous?", a: "Risk of cave-ins, toxic gases, and flooding." },
                    { q: "What causes Black Lung?", a: "Inhaling coal dust over a long period." },
                    { q: "Where does Telangana get coal?", a: "Singareni Collieries (SCCL)." }
                ]
            },
            {
                topicNum: 3,
                title: "Mining Policy & Tribal Rights",
                youtubeId: null,
                explanation: `                    <p>Under Indian law, the state owns all underground mineral wealth, regardless of who owns the surface land. This legal rule means the government can lease land to mining corporations, even if local communities live on it.</p>

                    <p>Most of India's mineral deposits lie beneath forests inhabited by tribal groups. Mining projects force these tribes off their ancestral lands, a process known as <strong>displacement</strong>.</p>

                    <p>Evicted tribes lose their self-sufficient hunting and farming livelihoods. Large-scale mining also pollutes local streams with toxic runoffs and chokes rivers with mud, a process called <strong>siltation</strong>.</p>

                    <p>To protect tribals, the PESA Act mandates that companies must consult tribal <strong>Gram Sabhas</strong> before starting mining operations in Scheduled Areas. In addition, policies require companies to pay compensation and implement <strong>rehabilitation</strong> plans to provide housing and jobs to displaced families.</p>

                    <div class="comparison-card">
                        <h4><i class="fa-solid fa-code-compare"></i> Mining Impact: Benefits vs. Social Costs</h4>
                        <div class="table-responsive">
                            <table class="comp-table">
                                <thead>
                                    <tr>
                                        <th>Impact Area</th>
                                        <th>Economic Benefits (To State/Industry)</th>
                                        <th>Social-Environmental Costs (To Local Tribes)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Financials</strong></td>
                                        <td>Generates high tax revenue and corporate profits.</td>
                                        <td>Displaces families, destroying self-sufficient local economies.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Environment</strong></td>
                                        <td>Creates minerals for manufacturing and infrastructure.</td>
                                        <td>Causes deforestation, air pollution, and river siltation.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Community</strong></td>
                                        <td>Develops local roads, schools, and utility lines.</td>
                                        <td>Destroys tribal culture, sacred hills, and ancestral lands.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: PESA Act vs. Mineral Policy</div>
                        <div class="vs-content">
                            <span class="vs-highlight">PESA Act</span> gives tribal assemblies (Gram Sabhas) the legal power to veto or approve mining leases in Scheduled Areas, while the national <span class="vs-highlight">Mineral Policy</span> asserts that the State owns all underground resources and prioritizes industrial mining leases.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge</div>
                            <span class="blooms-level-badge">Creating</span>
                        </div>
                        <div class="blooms-question">
                            Create a comprehensive rehabilitation and environmental management plan for a tribal village displaced by a new coal mine in Telangana.
                        </div>
                        <div class="blooms-answer">
                            <strong>Answer:</strong> The plan must include: 1) Constructing a new settlement with clean water and schools, 2) Providing vocational training and jobs at the mine, and 3) Refilling pits and planting native trees to restore streams.
                        </div>
                        <div class="blooms-explanation">
                            <strong>Explanation:</strong> A successful plan balances economic mining with social justice. It compensates the displaced community with equivalent land and skills, while restoring the degraded environment to prevent river siltation and pollution.
                        </div>
                    </div>`,
                remember: "Under Indian law, the government owns all minerals. Mining in tribal zones requires Gram Sabha consultation under PESA.",
                vocab: [
                    { word: "PESA Act", meaning: "Panchayats Extension to Scheduled Areas Act, giving tribal Gram Sabhas power over local resources." },
                    { word: "Displacement", meaning: "Forcing people to leave their homes and lands due to project development." },
                    { word: "Rehabilitation", meaning: "The process of restoring displaced people's livelihoods and homes." },
                    { word: "Siltation", meaning: "The choking of rivers and water bodies with mud and soil runoff from mining sites." }
                ],
                summary: [
                    "Mineral wealth is legally owned by the state, not the surface landowner.",
                    "Mining operations often displace tribal populations from their ancestral land.",
                    "Mining causes severe local air, soil, and water pollution.",
                    "PESA laws require consultation with tribal Gram Sabhas before mining.",
                    "Restoring mine pits and compensating displaced families are legal requirements."
                ],
                funFact: "Many mining companies plant fast-growing eucalyptus trees in filled pits, but environmentalists argue this does not restore the native forest.",
                realLife: "Tribal communities in Khammam protested bauxite mining on hills because they believed it would pollute their drinking streams.",
                quiz: [
                    {
                        q: "Under Indian law, who owns the minerals found deep underground?",
                        options: ["The surface landowner", "The local village panchayat", "The government", "The mining company"],
                        correct: 2,
                        exp: "All underground mineral wealth belongs to the state, regardless of who owns the surface land."
                    },
                    {
                        q: "Why does mining cause major social conflicts in tribal forest areas?",
                        options: ["It forces tribal communities off their land and destroys their environment", "It brings too many tourists", "It raises the temperature", "Tribals want to build factories"],
                        correct: 0,
                        exp: "Mining in forest zones displaces tribal populations, taking away their homes and traditional livelihoods."
                    },
                    {
                        q: "Which environmental issue is directly caused by mining runoff?",
                        options: ["Acid rain", "Water pollution in local streams and river siltation", "Earthquakes", "Desert sandstorms"],
                        correct: 1,
                        exp: "Wastes and mud runoff from mines wash into local rivers, polluting water and choking aquatic life."
                    },
                    {
                        q: "Which special law requires consulting tribal Gram Sabhas before mining in Scheduled Areas?",
                        options: ["Forest Rights Act", "PESA Act (Panchayats Extension to Scheduled Areas)", "Land Acquisition Act", "Mining Regulation Act"],
                        correct: 1,
                        exp: "The PESA Act gives tribal Gram Sabhas authority over mineral leasing and resource mining on their lands."
                    },
                    {
                        q: "What does the term 'Rehabilitation' mean in mining policy?",
                        options: ["Training miners to dig faster", "Helping displaced communities rebuild their homes and livelihoods", "Exporting mineral ores", "Filling pits with water"],
                        correct: 1,
                        exp: "Rehabilitation is the process of assisting displaced families in securing new homes and stable incomes."
                    }
                ],
                flashcards: [
                    { q: "Who owns mineral wealth in India?", a: "The government." },
                    { q: "Why is mining controversial for tribals?", a: "It causes land displacement and destroys forests." },
                    { q: "What environmental damage does mining cause?", a: "Soil erosion, water pollution, and deforested landscapes." },
                    { q: "What does PESA do for tribals?", a: "Requires consulting Gram Sabhas before mining Scheduled lands." },
                    { q: "What is land rehabilitation?", a: "Restoring mine sites and helping displaced families recover." }
                ]
            }
        ]
    },
{
        chapterNum: 7,
        title: "Money and Banking",
        summary: "Evolution of currency, barter exchanges, modern bank deposits, loans, and credit generation.",
        description: "Trace money from barter trade to digital coins, and explore how banks multiply credit.",
        topics: [
            {
                topicNum: 1,
                title: "Evolution of Money and Bank Credit",
                youtubeId: "kIID5FDi2JQ",
                explanation: `
                    <h3>1. The Barter System</h3>
                    <p>Before money, people used the <strong>barter system</strong>, directly exchanging goods for other goods (e.g. exchanging rice for cows). This required a <span class="underlined-concept">double coincidence of wants</span>Ã¢â‚¬â€where both parties wanted what the other was offering, which was a rare occurrence.</p>

                    <h3>2. Evolution of Coinage</h3>
                    <p>To simplify trade, societies introduced money. First came commodity money (shells, salt), then precious metals (gold, silver coins), paper money (promissory notes), and finally, modern digital money. The <strong>Reserve Bank of India (RBI)</strong> regulates and issues all currency notes in India.</p>

                    <h3>3. Commercial Banking & Loans</h3>
                    <p>Banks act as intermediaries. They accept deposits from savers and pay them a small interest rate. They then lend this money to borrowers at a higher interest rate. The difference between these rates is the bank's profit, or spread. Through this process, banks generate <span class="underlined-concept">credit creation</span>.</p>

                    <div class="underlined-explanations-card">
                        <h4><i class="fa-solid fa-pen-nib"></i> Explanations of Underlined Concepts</h4>
                        <ul class="underlined-list">
                            <li><strong>double coincidence of wants</strong>: The difficult requirement in barter where two traders must desire each other's specific products to complete an exchange.</li>
                            <li><strong>credit creation</strong>: The banking mechanism where a deposit is lent out repeatedly, generating new purchasing power across the economy.</li>
                        </ul>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: Barter vs. Monetary System</div>
                        <div class="vs-content">
                            The <span class="vs-highlight">Barter System</span> relies on directly swapping goods and requires a double coincidence of wants, while the <span class="vs-highlight">Monetary System</span> uses a standard medium of exchange (money) to buy any product instantly.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge Zone</div>
                        </div>
                        <div class="blooms-question-item">
                            <div class="blooms-q-meta"><span class="blooms-level-badge">Level 4: Analyzing</span></div>
                            <div class="blooms-q-text">How does the RBI maintain trust in paper currency notes that have no intrinsic value?</div>
                            <div class="blooms-a-text"><strong>Answer:</strong> RBI prints a legal guarantee signed by the Governor, making it legal tender that everyone is legally required to accept for debts.</div>
                        </div>
                    </div>
                `,
                remember: "The barter system failed due to the double coincidence of wants. Banks accept deposits and multiply money through credit loans.",
                vocab: [
                    { word: "Barter System", meaning: "Direct exchange of goods for goods without using money." },
                    { word: "Double Coincidence", meaning: "When two trade partners desire each other's goods." },
                    { word: "RBI", meaning: "Reserve Bank of IndiaÃ¢â‚¬â€the central banking authority of India." },
                    { word: "Credit Creation", meaning: "The expansion of bank deposits through loan multiplication." },
                    { word: "Cheque", meaning: "A paper document instructing a bank to pay a specific amount from an account." }
                ],
                summary: [
                    "Barter trade required a double coincidence of wants, which made trading difficult.",
                    "Money evolved from commodity goods to precious metal coins and paper currency.",
                    "The Reserve Bank of India acts as the central bank that prints notes.",
                    "Commercial banks borrow from savers at low interest and lend to borrowers at higher rates.",
                    "Banks multiply deposits into multiple loans, expanding credit across the economy."
                ],
                funFact: "Historically, salt was so valuable that Roman soldiers were paid in salt. The word 'salary' comes from the Latin word for salt, 'sal'!",
                realLife: "Using UPI on smartphones to scan QR codes transfers digital money directly between bank accounts without paper notes.",
                quiz: [
                    {
                        q: "Which system relies on exchanging goods directly for other goods?",
                        options: ["Monetary System", "Credit System", "Barter System", "Banking System"],
                        correct: 2,
                        exp: "The barter system is the direct exchange of products without using currency."
                    },
                    {
                        q: "What is the main limitation of barter trade?",
                        options: ["Money is too heavy", "Double coincidence of wants", "Lack of shops", "High taxes"],
                        correct: 1,
                        exp: "Barter requires both traders to want what the other is selling, which is difficult to find."
                    },
                    {
                        q: "Which institution issues all paper currency notes in India?",
                        options: ["State Bank of India", "Reserve Bank of India", "Ministry of Finance", "Panchayat Board"],
                        correct: 1,
                        exp: "The Reserve Bank of India (RBI) is the central authority that controls currency issue."
                    },
                    {
                        q: "How do commercial banks earn their primary profits?",
                        options: ["Charging account fees", "Government donations", "Interest spread between deposits and loans", "Printing notes"],
                        correct: 2,
                        exp: "Banks charge higher interest on loans than they pay on deposits, keeping the difference as profit."
                    },
                    {
                        q: "What is a paper document instructing a bank to pay money from a deposit called?",
                        options: ["Currency Note", "Cheque", "Receipt", "Bond"],
                        correct: 1,
                        exp: "A cheque is a direct written instruction to a bank to transfer funds between accounts."
                    }
                ],
                flashcards: [
                    { q: "What is the barter system?", a: "Exchanging goods directly for other goods." },
                    { q: "What is the double coincidence of wants?", a: "When both trading parties want each other's goods." },
                    { q: "What is RBI?", a: "Reserve Bank of Indi— the central bank of India." },
                    { q: "What is bank spread?", a: "The difference between interest charged on loans and interest paid on deposits." },
                    { q: "What is digital money?", a: "Electronic bank balances accessed via cards or phone apps." }
                ]
            }
        ]
    },
    {
        chapterNum: 8,
        title: "Impact of Technology on Livelihoods",
        summary: "Analysis of technology in agriculture, handlooms vs powerlooms, and changing job patterns.",
        description: "Examine how mechanization boosts production speed but alters employment and jobs.",
        topics: [
            {
                topicNum: 1,
                title: "Agricultural Mechanization and Industrial Shifts",
                youtubeId: "32Y2V23t6V0",
                explanation: `
                    <h3>1. Agricultural Mechanization</h3>
                    <p>In recent decades, new machines have transformed farming. Wooden plows and bullocks are replaced by tractors, harvesters, and irrigation pumps. This <span class="underlined-concept">agricultural mechanization</span> allows a single farmer to complete days of weeding, tilling, and harvesting in hours, reducing dependency on manual labor.</p>

                    <h3>2. The Job Displacement Trade-Off</h3>
                    <p>While machines lower production costs, they create a major social challenge. Landless agricultural laborers lose their seasonal harvesting jobs. This forces many rural workers to migrate to cities to work as daily wage laborers in construction or services.</p>

                    <h3>3. Handloom vs. Powerloom Weavers</h3>
                    <p>In the textile sector, traditional <strong>handlooms</strong> (manually operated weaving frames) face intense competition from automated <strong>powerlooms</strong>. Powerlooms produce fabrics much faster and cheaper, leaving handloom weavers in distress unless they produce specialized silks like Pochampally.</p>

                    <div class="underlined-explanations-card">
                        <h4><i class="fa-solid fa-pen-nib"></i> Explanations of Underlined Concepts</h4>
                        <ul class="underlined-list">
                            <li><strong>agricultural mechanization</strong>: The transition from manual farm tools to motorized machinery, raising crop output but reducing farm jobs.</li>
                        </ul>
                    </div>

                    <div class="comparison-card">
                        <h4><i class="fa-solid fa-code-compare"></i> Production: Handlooms vs. Powerlooms</h4>
                        <div class="table-responsive">
                            <table class="comp-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Handloom Weaving</th>
                                        <th>Powerloom Weaving</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Power Source</strong></td>
                                        <td>Manual human labor</td>
                                        <td>Electric power</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Production Speed</strong></td>
                                        <td>Slow (takes days per saree)</td>
                                        <td>Fast (multiple sarees per day)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge Zone</div>
                        </div>
                        <div class="blooms-question-item">
                            <div class="blooms-q-meta"><span class="blooms-level-badge">Level 5: Evaluating</span></div>
                            <div class="blooms-q-text">Is technology a net benefit or a net harm to traditional rural artisans?</div>
                            <div class="blooms-a-text"><strong>Answer:</strong> It is mixed. It increases cheap goods for consumers, but can destroy the livelihood security of manual artisans.</div>
                        </div>
                    </div>
                `,
                remember: "Farm machines increase crop output but displace landless farm laborers. Powerlooms produce cheaper cloth, creating challenges for handloom weavers.",
                vocab: [
                    { word: "Mechanization", meaning: "Replacing manual human labor with machines." },
                    { word: "Handloom", meaning: "A manually operated weaving frame that weaves cloth using human power." },
                    { word: "Powerloom", meaning: "An automated weaving frame powered by electricity." },
                    { word: "Migration", meaning: "The movement of people from rural areas to cities in search of jobs." },
                    { word: "Livelihood", meaning: "A secure way of earning money to afford life's basic needs." }
                ],
                summary: [
                    "Motorized tractors and harvesters have replaced traditional draft animals.",
                    "Mechanization speeds up harvesting but reduces manual farming jobs.",
                    "Rural laborers migrate to urban areas in search of construction wages.",
                    "Powerlooms produce cheap textiles that undercut handloom goods.",
                    "Artisans must specialize in unique products like silk to survive in the market."
                ],
                funFact: "A modern combine harvester can harvest, thresh, and clean grain from an acre of wheat in under 30 minutes, a task that once took a team of ten people several days!",
                realLife: "The famous Pochampally ikat weavers of Telangana use handlooms to weave traditional designs that are protected under geographic registration laws.",
                quiz: [
                    {
                        q: "What is the primary effect of using tractors and combined harvesters in agriculture?",
                        options: ["Increases soil water", "Reduces crop yield", "Speeds up work but decreases manual jobs", "Changes crop colors"],
                        correct: 2,
                        exp: "Machinery accelerates agricultural operations but displaces landless farm laborers."
                    },
                    {
                        q: "Which power source operates a powerloom?",
                        options: ["Human muscle power", "Steam engine", "Electricity", "Solar water heating"],
                        correct: 2,
                        exp: "Powerlooms run on electricity, automating the weaving of threads into cloth at high speed."
                    },
                    {
                        q: "Why do rural farm laborers migrate to cities?",
                        options: ["To buy farmland", "Because machines replaced seasonal farm work", "To avoid summer heat", "To become cartographers"],
                        correct: 1,
                        exp: "Displaced by farm machinery, workers move to urban construction zones to secure wages."
                    },
                    {
                        q: "Which Telangana handloom center is globally famous for its Ikat sarees?",
                        options: ["Nirmal", "Secunderabad", "Pochampally", "Kothagudem"],
                        correct: 2,
                        exp: "Pochampally is famous for its hand-woven Ikat sarees that carry geographical indicators."
                    },
                    {
                        q: "What is the process of replacing human labor with machines called?",
                        options: ["Afforestation", "Siltation", "Mechanization", "Urbanization"],
                        correct: 2,
                        exp: "Mechanization refers to replacing human manual work with automated machines."
                    }
                ],
                flashcards: [
                    { q: "What is mechanization?", a: "Replacing manual human work with machines." },
                    { q: "How does farming machinery affect workers?", a: "It speeds up crops but displaces landless laborers." },
                    { q: "What is a handloom?", a: "A weaving loom operated manually by human muscles." },
                    { q: "What is a powerloom?", a: "An automated weaving loom operated by electricity." },
                    { q: "Why do displaced laborers move to cities?", a: "To find work as daily wage earners in urban industries." }
                ]
            }
        ]
    },
    {
        chapterNum: 9,
        title: "Public Health and the Government",
        summary: "Analysis of clean water, sanitation, public vs private healthcare, and state welfare policies.",
        description: "Study state healthcare systems, public clinics, preventative care, and rural health challenges.",
        topics: [
            {
                topicNum: 1,
                title: "Public Healthcare and State Welfare",
                youtubeId: "vVqC3u2S7hU",
                explanation: `
                    <h3>1. Health as a Human Right</h3>
                    <p>According to the Indian Constitution, the right to health is a fundamental aspect of the Right to Life. Health is not just being free from disease, but includes access to clean drinking water, sanitation, safe housing, and proper nutrition.</p>

                    <h3>2. Public vs. Private Healthcare Systems</h3>
                    <p>Healthcare is split into two systems. <span class="underlined-concept">Public Health Services</span> are run by the government, consisting of Primary Health Centers (PHCs) in villages and Area Hospitals in cities, providing free or low-cost treatment. <span class="underlined-concept">Private Health Services</span> are owned by individuals or corporations, offering advanced equipment but at high costs that can be difficult for poor families to afford.</p>

                    <h3>3. Preventative vs. Curative Care</h3>
                    <p>Preventative care focuses on preventing diseases before they happen (e.g. clean drinking water, vaccinations, mosquito control). Curative care focuses on treating sick patients. Governments must invest in preventative care to reduce the overall burden on hospitals.</p>

                    <div class="underlined-explanations-card">
                        <h4><i class="fa-solid fa-pen-nib"></i> Explanations of Underlined Concepts</h4>
                        <ul class="underlined-list">
                            <li><strong>Public Health Services</strong>: Government clinic chains funded by taxpayer money to provide universal medical access to all citizens.</li>
                            <li><strong>Private Health Services</strong>: Corporate hospitals operated for profit, charging patient fees for diagnostic testing and surgeries.</li>
                        </ul>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: PHC vs. Private Hospital</div>
                        <div class="vs-content">
                            A <span class="vs-highlight">Primary Health Center (PHC)</span> is a free government village clinic focusing on basic treatments and vaccines, while a <span class="vs-highlight">Private Hospital</span> is a commercial facility offering specialized operations for high fees.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge Zone</div>
                        </div>
                        <div class="blooms-question-item">
                            <div class="blooms-q-meta"><span class="blooms-level-badge">Level 4: Analyzing</span></div>
                            <div class="blooms-q-text">Why does lack of clean drinking water lead to a severe crisis in public healthcare?</div>
                            <div class="blooms-a-text"><strong>Answer:</strong> Contaminated water spreads waterborne diseases like typhoid and choler— leading to preventable hospitalizations that strain public clinics.</div>
                        </div>
                    </div>
                `,
                remember: "The Constitution guarantees the right to health. Public health clinics are government-run and free, while private clinics are corporate and expensive.",
                vocab: [
                    { word: "PHC", meaning: "Primary Health CenterÃ¢â‚¬â€a government-run basic clinic in rural areas." },
                    { word: "Waterborne Disease", meaning: "Diseases like cholera or typhoid spread by drinking contaminated water." },
                    { word: "Public Service", meaning: "A service provided by the government and funded by tax revenues." },
                    { word: "Generic Medicine", meaning: "Medicines containing the same chemical formula as branded drugs but sold at much lower prices." },
                    { word: "Sanitation", meaning: "Public hygiene systems, including toilet access and clean waste disposal." }
                ],
                summary: [
                    "Health requires clean water, proper nutrition, and sanitation alongside hospitals.",
                    "Public health systems use taxpayer funds to offer free basic medical care.",
                    "Private health systems offer advanced care but charge high fees.",
                    "PHCs provide basic medical services and immunization programs in rural zones.",
                    "Preventative health measures, like clean water, reduce the spread of infectious diseases."
                ],
                funFact: "Washing hands with soap and clean water regularly can prevent up to 40% of diarrheal infections globally, making it a highly effective health measure!",
                realLife: "Telangana's 'Mission Bhagiratha' program delivers treated, piped drinking water to rural homes to reduce waterborne infections.",
                quiz: [
                    {
                        q: "Which constitutional right in India covers the right to health?",
                        options: ["Right to Property", "Right to Education", "Right to Life (Article 21)", "Right to Freedom of Speech"],
                        correct: 2,
                        exp: "The Supreme Court has ruled that the Right to Life under Article 21 includes the right to health care."
                    },
                    {
                        q: "What is a rural government-run medical clinic called?",
                        options: ["Private Hospital", "Super Specialty Center", "Primary Health Center (PHC)", "Corporate Dispensary"],
                        correct: 2,
                        exp: "Primary Health Centers (PHCs) are established in rural blocks to provide free basic medical services."
                    },
                    {
                        q: "How are public healthcare services funded?",
                        options: ["Private donations", "Bank loans", "Tax revenues collected from citizens", "Corporate sponsorships"],
                        correct: 2,
                        exp: "Government-run public services are funded by taxpayer money collected from the public."
                    },
                    {
                        q: "Which disease is directly spread by drinking contaminated water?",
                        options: ["Malaria", "Typhoid", "Tuberculosis", "Scurvy"],
                        correct: 1,
                        exp: "Typhoid is a waterborne bacterial infection spread through contaminated water or food."
                    },
                    {
                        q: "What is the program designed to deliver piped drinking water to all Telangana households?",
                        options: ["Arogyasri", "Rythu Bandhu", "Mission Bhagiratha", "Mission Kakatiya"],
                        correct: 2,
                        exp: "Mission Bhagiratha is Telangana's clean water program to supply treated tap water to rural homes."
                    }
                ],
                flashcards: [
                    { q: "Is health a fundamental right?", a: "Yes, included under the Right to Life in Article 21 of the Constitution." },
                    { q: "What is a PHC?", a: "Primary Health Center, a village government clinic." },
                    { q: "How are public hospitals paid for?", a: "By public taxes collected by the government." },
                    { q: "Give an example of waterborne disease.", a: "Choler— typhoid, or dysentery." },
                    { q: "What is preventative healthcare?", a: "Preventing illness through vaccinations, clean water, and sanitation." }
                ]
            }
        ]
    },
    {
        chapterNum: 10,
        title: "Landlords and Tenants under the Nizam and the British",
        summary: "Historical study of land systems, Zamindari, Ryotwari, Nizam's deshmukhs, and peasant revolts.",
        description: "Explore the historical land systems, high taxes, and peasant struggles in colonial Telangana.",
        topics: [
            {
                topicNum: 1,
                title: "Land Revenue Systems and Peasant Rebellions",
                youtubeId: "32Y2V23t6V0",
                explanation: `
                    <h3>1. Colonial Land Revenue Systems</h3>
                    <p>During the colonial er— the British and the Nizam introduced new land laws. The <strong>Zamindari System</strong> appointed landlords to collect taxes from entire districts. The <span class="underlined-concept">Ryotwari System</span> collected taxes directly from individual peasants (Ryots), though tax rates remained high.</p>

                    <h3>2. Oppression by Deshmukhs & Doras</h3>
                    <p>In the Hyderabad State under the Nizam, powerful local landlords called <strong>Deshmukhs</strong> or <strong>Doras</strong> controlled hundreds of villages. They acted as revenue collectors, judges, and security, forcing peasants to perform <span class="underlined-concept">Vetti (forced labor)</span> without pay.</p>

                    <h3>3. Peasant Resistances</h3>
                    <p>Oppressed by high taxes, debt, and eviction, peasants organized revolts. The historic <strong>Telangana Peasant Armed Struggle</strong> (1946-1951) was organized by rural communities to fight against the oppression of the Nizam's landlords (Doras), reclaiming land for local farmers.</p>

                    <div class="underlined-explanations-card">
                        <h4><i class="fa-solid fa-pen-nib"></i> Explanations of Underlined Concepts</h4>
                        <ul class="underlined-list">
                            <li><strong>Ryotwari System</strong>: Land tax system where the government registered land ownership directly to the farmer (Ryot) to collect taxes.</li>
                            <li><strong>Vetti (forced labor)</strong>: An exploitative practice where peasants were forced to work on the landlord's estate for free.</li>
                        </ul>
                    </div>

                    <div class="vs-container">
                        <div class="vs-title"><i class="fa-solid fa-circle-nodes"></i> Concept Check: Zamindari vs. Ryotwari</div>
                        <div class="vs-content">
                            In the <span class="vs-highlight">Zamindari System</span>, landlords acted as middlemen, owning the land and taxing peasants, while in the <span class="vs-highlight">Ryotwari System</span>, the state taxed individual peasants directly, bypassing intermediary landlords.
                        </div>
                    </div>

                    <div class="blooms-taxonomy-card">
                        <div class="blooms-header">
                            <div class="blooms-title"><i class="fa-solid fa-graduation-cap"></i> Bloom's Taxonomy Challenge Zone</div>
                        </div>
                        <div class="blooms-question-item">
                            <div class="blooms-q-meta"><span class="blooms-level-badge">Level 4: Analyzing</span></div>
                            <div class="blooms-q-text">Why did the colonial tax systems push peasants into permanent debt cycles?</div>
                            <div class="blooms-a-text"><strong>Answer:</strong> Taxes had to be paid in cash, forcing farmers to borrow money from moneylenders who charged high interest and seized land when loans failed.</div>
                        </div>
                    </div>
                `,
                remember: "Nizam's landlords (Doras) enforced forced unpaid labor (Vetti), which triggered the Telangana Peasant Armed Struggle in 1946.",
                vocab: [
                    { word: "Zamindar", meaning: "A landlord appointed to collect land revenues for the government." },
                    { word: "Ryot", meaning: "An individual farmer or peasant cultivator." },
                    { word: "Dora", meaning: "A powerful landlord in Telangana under the Nizam." },
                    { word: "Vetti", meaning: "Forced, unpaid labor extracted from peasants by landlords." },
                    { word: "Ryotwari System", meaning: "A direct land revenue settlement system between the state and the farmer." }
                ],
                summary: [
                    "Zamindars acted as tax collectors and landlords in colonial British India.",
                    "The Ryotwari system created direct tax settlements between the state and peasants.",
                    "Telangana Doras controlled village resources and extracted forced labor (Vetti).",
                    "High taxes and high interest rates pushed many farmers into debt and land loss.",
                    "The Telangana Peasant Armed Struggle (1946-1951) fought against the Doras and Nizam rule."
                ],
                funFact: "Some Telangana Doras lived in massive fortified mansions called 'Gadi' that had thick stone walls to defend against peasant attacks during revolts!",
                realLife: "Modern land registration systems in Indi— like Telangana's Dharani portal, digitize ownership records to protect farmers from land grabbing.",
                quiz: [
                    {
                        q: "Which land system collected tax directly from the cultivator (Ryot)?",
                        options: ["Zamindari System", "Ryotwari System", "Mahalwari System", "Jagirdari System"],
                        correct: 1,
                        exp: "The Ryotwari system settled taxes directly with the farmer, bypassing landlord middlemen."
                    },
                    {
                        q: "What were the powerful landlords in Telangana under the Nizam called?",
                        options: ["Zamindars", "Doras / Deshmukhs", "Ryots", "Subedars"],
                        correct: 1,
                        exp: "Local landlords in Hyderabad State were known as Doras or Deshmukhs, controlling entire villages."
                    },
                    {
                        q: "What was the system of forced, unpaid labor extracted by Telangana landlords called?",
                        options: ["Ryotwari", "Podu", "Vetti", "Dharani"],
                        correct: 2,
                        exp: "Vetti was the exploitative system of forced, unpaid labor imposed on low-caste peasants by Doras."
                    },
                    {
                        q: "In which year did the historic Telangana Peasant Armed Struggle begin?",
                        options: ["1919", "1942", "1946", "1957"],
                        correct: 2,
                        exp: "The armed rebellion against the oppressive Doras and Nizam rule began in 1946."
                    },
                    {
                        q: "Why did farmers lose land under colonial tax rules?",
                        options: ["They wanted to move to cities", "They traded land for gold", "High cash taxes forced them to borrow from moneylenders who seized land", "Tractors were too expensive"],
                        correct: 2,
                        exp: "Colonial taxes had to be paid in cash regardless of crop failure, forcing peasants into debt cycles."
                    }
                ],
                flashcards: [
                    { q: "What is a Ryot?", a: "A peasant farmer." },
                    { q: "What is the Zamindari system?", a: "A tax collection system where landlords collected revenues for the state." },
                    { q: "What is a Gadi?", a: "The fortified stone mansion of a Telangana Dora." },
                    { q: "What does Vetti mean?", a: "Forced unpaid labor extracted from peasants." },
                    { q: "When was the Telangana Peasant Struggle?", a: "From 1946 to 1951, fighting landlord oppression." }
                ]
            }
        ]
    }
    ]
};

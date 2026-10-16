/* New tests from Fischbach & Dunning, 9th ed. — rewritten (AR + EN). Group 3: Hormones, prenatal & genetic screening. */
window.TESTS_EXTRA = (window.TESTS_EXTRA || []).concat([
 {n:"Androstenedione",c:"Hormones",s:"Serum (Yellow), morning",r:"Women 75–205 | Men 85–275 ng/dL",u:"Hirsutism, PCOS, CAH monitoring"},
 {n:"ADH (Antidiuretic Hormone)",c:"Hormones",s:"Chilled EDTA (Purple), on ice",r:"1–5 pg/mL (interpret with osmolality)",u:"SIADH vs diabetes insipidus"},
 {n:"Dexamethasone Suppression Test (DST)",c:"Hormones",s:"Serum 8 AM after 1 mg at 11 PM",r:"Cortisol < 1.8 µg/dL (50 nmol/L)",u:"Cushing's syndrome screening"},
 {n:"ACTH (Cosyntropin) Stimulation Test",c:"Hormones",s:"Serum at 0, 30, 60 min",r:"Peak cortisol ≥ 18 µg/dL (assay-dependent)",u:"Adrenal insufficiency"},
 {n:"Gastrin",c:"Hormones",s:"Serum, fasting, frozen",r:"< 100 pg/mL fasting",u:"Zollinger–Ellison syndrome"},
 {n:"Glucagon",c:"Hormones",s:"Chilled EDTA + aprotinin, on ice",r:"20–100 pg/mL",u:"Glucagonoma, hypoglycemia work-up"},
 {n:"Total T4 (Thyroxine)",c:"Hormones",s:"Serum (Yellow)",r:"5.4–11.5 µg/dL",u:"Thyroid function (binding-protein dependent)"},
 {n:"Total T3 (Triiodothyronine)",c:"Hormones",s:"Serum (Yellow)",r:"80–200 ng/dL",u:"Hyperthyroidism, T3 toxicosis"},
 {n:"TBG (Thyroxine-Binding Globulin)",c:"Hormones",s:"Serum (Yellow)",r:"Men 1.2–2.5 | Women 1.4–3.0 mg/dL",u:"Discordant total vs free thyroid hormones"},
 {n:"Neonatal TSH Screen",c:"Genetic",s:"Dried blood spot (heel, day 2–3)",r:"< 20 mU/L (program cut-off)",u:"Congenital hypothyroidism screening"},
 {n:"Karyotype (Chromosome Analysis)",c:"Genetic",s:"Sodium heparin (Green), living cells",r:"46,XX or 46,XY",u:"Aneuploidy, recurrent miscarriage, infertility, leukemia"},
 {n:"Newborn Screening Panel (Dried Blood Spot)",c:"Genetic",s:"Heel-prick blood on filter card, 24–72 h",r:"All analytes within cut-offs",u:"PKU, hypothyroidism, CAH, G6PD, CF, metabolic disorders"},
 {n:"PKU (Phenylalanine)",c:"Genetic",s:"Dried blood spot / plasma",r:"< 2 mg/dL (< 120 µmol/L)",u:"Phenylketonuria screening & diet control"},
 {n:"Galactosemia (GALT Enzyme)",c:"Genetic",s:"Dried blood spot / EDTA (before transfusion)",r:"GALT 18.5–28.5 U/g Hb",u:"Classic galactosemia in newborns"},
 {n:"Maternal Serum Screening (AFP / Quad)",c:"Genetic",s:"Serum (Yellow) at 15–22 weeks",r:"Reported as MoM & risk; AFP < 2.5 MoM",u:"Neural tube defects, Down syndrome risk"}
]);

window.ENC = Object.assign(window.ENC || {}, {
"Androstenedione": {
 w:"أندروجين يُفرز من الكظر والمبيض والخصية، وهو سليفة للتستوستيرون والإسترون.",
 y:"تقييم الشعرانية وتكيّس المبايض، ومتابعة علاج فرط تنسّج الكظر الخلقي، والبلوغ المبكر.",
 p:"صباحاً (له إيقاع يومي)، وعند النساء في الطور الجريبي المبكر.",
 s:"مصل (أصفر).",
 h:["تكيّس المبايض","فرط تنسّج الكظر الخلقي","أورام الكظر أو المبيض أو الخصية المفرزة","متلازمة كوشينغ"],
 l:["قصور الكظر والمبيض","سن اليأس","العلاج بالكورتيزون"],
 i:["الطرق المناعية أقل دقة من LC-MS/MS","يتغير مع الدورة الشهرية"],
 r:["Total Testosterone","DHEA-S","17-OH Progesterone","LH (Luteinizing Hormone)"]},

"ADH (Antidiuretic Hormone)": {
 w:"هرمون (فازوبريسين) يُفرز من النخامية الخلفية ليحفظ الماء بالكلى استجابة لارتفاع الأسمولية أو نقص الحجم.",
 y:"تمييز البيلة التفهة المركزية (منخفض) عن الكلوية (مرتفع) و SIADH، ويُقرأ دائماً مع أسمولية المصل والبول. Copeptin بديل أكثر ثباتاً.",
 p:"صيام وجلوس قبل السحب، وتجنّب التدخين والكحول والأدوية المؤثرة حسب الطبيب.",
 s:"EDTA مبرّد على الثلج، يُفصل في جهاز مبرّد ويُجمّد فوراً — غير ثابت.",
 h:["SIADH: أورام الرئة، أمراض الدماغ، الأدوية (كاربامازيبين، SSRIs، سيكلوفوسفاميد)","البيلة التفهة الكلوية","الألم والإجهاد والغثيان"],
 l:["البيلة التفهة المركزية","فرط شرب الماء النفسي"],
 i:["غير ثابت ويرتبط بالصفائح ← أفضل استخدام Copeptin","وحده بلا قيمة دون الأسمولية"],
 r:["Serum Osmolality","Urine Osmolality","Sodium (Na⁺)","Urine Sodium & FENa"]},

"Dexamethasone Suppression Test (DST)": {
 w:"إعطاء 1 ملغ ديكساميثازون ليلاً ثم قياس الكورتيزول صباحاً: في الطبيعي يُثبط الإفراز، وفي كوشينغ لا يُثبط.",
 y:"أحد فحوصات التحري الأولى لمتلازمة كوشينغ (مع كورتيزول البول 24 ساعة وكورتيزول اللعاب الليلي)، والجرعة العالية لتحديد السبب.",
 p:"1 ملغ ديكساميثازون فموياً الساعة 11 ليلاً، والسحب 8 صباحاً. إيقاف حبوب منع الحمل الإستروجينية 6 أسابيع إن أمكن.",
 s:"مصل (أصفر) صباحاً، ويُفضّل قياس الديكساميثازون معه للتأكد من الامتصاص.",
 h:["كورتيزول > 1.8 µg/dL: عدم تثبيط — كوشينغ محتمل","الاكتئاب والكحول والسمنة الشديدة (Pseudo-Cushing)","الأدوية المحرّضة (فينيتوين، ريفامبيسين، كاربامازيبين) تسرّع استقلاب الديكساميثازون","الإستروجين (يرفع CBG)"],
 l:["تثبيط طبيعي"],
 i:["عدم تناول الحبة أو سوء امتصاصها ← قِس مستوى الديكساميثازون","الإجهاد والمرض الحاد"],
 r:["Cortisol (AM – 8AM)","Urine Free Cortisol (24h UFC)","ACTH (Adrenocorticotropin)"]},

"ACTH (Cosyntropin) Stimulation Test": {
 w:"حقن هرمون ACTH الصناعي (250 µg) وقياس استجابة الكورتيزول بعد 30 و60 دقيقة.",
 y:"تأكيد قصور الكظر الأولي (أديسون) أو الثانوي المزمن، وتحري فرط تنسّج الكظر الخلقي المتأخر (مع 17-OHP).",
 p:"يُفضّل صباحاً. إيقاف الهيدروكورتيزون 12–24 ساعة (بإشراف الطبيب؛ الديكساميثازون لا يتداخل مع القياس).",
 s:"مصل عند 0 و30 و60 دقيقة، مع تسجيل الأوقات بدقة.",
 h:["استجابة طبيعية: ذروة الكورتيزول ≥ 18 µg/dL (الحد يعتمد على الطريقة، أقل مع الطرق الحديثة)"],
 l:["استجابة ضعيفة: قصور الكظر الأولي، أو الثانوي المزمن (ضمور الكظر)","استخدام الكورتيزون المزمن"],
 i:["قصور النخامية الحديث (< 4–6 أسابيع) قد يعطي استجابة طبيعية كاذبة","حبوب الإستروجين ترفع الكورتيزول الكلي","الحد الفاصل يختلف حسب طريقة القياس"],
 r:["Cortisol (AM – 8AM)","ACTH (Adrenocorticotropin)","17-OH Progesterone","Sodium (Na⁺)","Potassium (K⁺)"]},

"Gastrin": {
 w:"هرمون تفرزه خلايا G في غار المعدة يحفّز إفراز الحمض.",
 y:"تشخيص متلازمة زولينغر-إليسون (ورم مفرز للغاسترين مع قرحات متعددة ومعاندة وإسهال)، وجزء من تقييم MEN1.",
 p:"صيام 12 ساعة. إيقاف مثبطات مضخة البروتون أسبوعاً على الأقل وحاصرات H2 يومين (بإشراف الطبيب لخطر النزف).",
 s:"مصل، يُفصل ويُجمّد بسرعة.",
 h:["زولينغر-إليسون (> 1000 pg/mL مع pH معدي < 2 تشخيصي)","مثبطات مضخة البروتون (أشيع سبب)","التهاب المعدة الضموري وفقر الدم الوبيل","الفشل الكلوي","عدوى الملوية البوابية"],
 l:["بعد استئصال الغار"],
 i:["مثبطات الحموضة أهم سبب للارتفاع الكاذب","يحتاج قياس حموضة المعدة للتفسير","اختبار تحفيز السيكريتين عند القيم المتوسطة"],
 r:["Chromogranin A (CgA)","H. pylori Stool Antigen","Calcium (Total)","Vitamin B12"]},

"Glucagon": {
 w:"هرمون تفرزه خلايا ألفا في البنكرياس يرفع سكر الدم.",
 y:"تشخيص ورم الغلوكاغون (طفح جلدي مهاجر نخري، سكري، نقص وزن)، وتقييم أسباب نقص السكر.",
 p:"صيام 10–12 ساعة.",
 s:"EDTA مبرّد مع مثبط بروتياز (Aprotinin)، على الثلج، يُفصل ويُجمّد فوراً.",
 h:["ورم الغلوكاغون (> 500 pg/mL)","الإجهاد والصدمة والحروق","السكري غير المسيطر عليه","الفشل الكلوي والكبدي","الصيام الطويل"],
 l:["التليف الكيسي واستئصال البنكرياس","التهاب البنكرياس المزمن"],
 i:["غير ثابت جداً ← يجب التبريد والمثبط","يرتفع بالإجهاد أثناء السحب"],
 r:["Glucose (Fasting)","Insulin (Fasting)","C-Peptide","Chromogranin A (CgA)"]},

"Total T4 (Thyroxine)": {
 w:"مجموع الثيروكسين الحر والمرتبط بالبروتينات الناقلة (أغلبه على TBG).",
 y:"تقييم وظيفة الدرق، لكنه يتأثر كثيراً بتغير البروتينات الناقلة؛ استُبدل غالباً بـ Free T4.",
 p:"لا يحتاج صياماً. سجّل الأدوية (الإستروجين، الثيروكسين).",
 s:"مصل (أصفر).",
 h:["فرط الدرق","ارتفاع TBG: الحمل، الإستروجين، التهاب الكبد (المريض سوي الدرق)","> 20 µg/dL: خطر عاصفة درقية"],
 l:["قصور الدرق","انخفاض TBG: الأندروجينات، المتلازمة الكلوية، الكورتيزون (سوي الدرق)","< 2 µg/dL: خطر غيبوبة الوذمة المخاطية"],
 i:["أي تغير في TBG يغيّره دون خلل حقيقي ← استخدم Free T4","الفينيتوين والساليسيلات تزيحه عن البروتين"],
 r:["Free T4 (Free Thyroxine)","TSH (Thyroid Stimulating Hormone)","TBG (Thyroxine-Binding Globulin)","Total T3 (Triiodothyronine)"]},

"Total T3 (Triiodothyronine)": {
 w:"مجموع الثلاثي يودوثيرونين الحر والمرتبط، الهرمون الدرقي الأكثر فعالية.",
 y:"تأكيد فرط الدرق وتشخيص التسمم بـ T3 عندما يكون T4 طبيعياً، ومتابعة علاج فرط الدرق.",
 p:"لا يحتاج صياماً.",
 s:"مصل (أصفر).",
 h:["فرط الدرق (غريفز، العقد السامة)","التسمم بـ T3","الحمل والإستروجين (TBG)"],
 l:["المرض الشديد والصيام (متلازمة المرض غير الدرقي)","الكورتيزون والبروبرانولول والأميودارون (تمنع تحويل T4)","قصور الدرق المتقدم"],
 i:["غير مفيد لتشخيص قصور الدرق","يتأثر بـ TBG مثل T4 الكلي"],
 r:["Free T3 (Free Triiodothyronine)","Total T4 (Thyroxine)","TSH (Thyroid Stimulating Hormone)"]},

"TBG (Thyroxine-Binding Globulin)": {
 w:"البروتين الناقل الأساسي لهرمونات الدرق في الدم، يصنعه الكبد.",
 y:"تفسير التعارض بين هرمونات الدرق الكلية والحرة، وتشخيص النقص أو الزيادة الوراثية لـ TBG.",
 p:"سجّل الحمل والأدوية الهرمونية.",
 s:"مصل (أصفر).",
 h:["الحمل وحبوب منع الحمل والإستروجين","التهاب الكبد الحاد","الزيادة الوراثية","الأفيونات والتاموكسيفين"],
 l:["الأندروجينات والكورتيزون","المتلازمة الكلوية وسوء التغذية","تشمع الكبد","النقص الوراثي (مرتبط بـ X)"],
 i:["المريض يبقى سوي الدرق رغم تغير الهرمونات الكلية"],
 r:["Total T4 (Thyroxine)","Free T4 (Free Thyroxine)","TSH (Thyroid Stimulating Hormone)"]},

"Neonatal TSH Screen": {
 w:"قياس TSH في بقعة دم مجففة من كعب المولود ضمن برنامج فحص حديثي الولادة.",
 y:"الكشف المبكر عن قصور الدرق الخلقي — من أهم أسباب الإعاقة الذهنية التي يمكن منعها بالعلاج المبكر (قبل أسبوعين).",
 p:"بعد 24–72 ساعة من الولادة (قبل ذلك يكون TSH مرتفعاً فيزيولوجياً).",
 s:"دم الكعب على بطاقة ترشيح خاصة، تُملأ الدوائر كاملة من جهة واحدة وتُجفف أفقياً 3 ساعات بعيداً عن الحرارة.",
 h:["قصور الدرق الخلقي (عدم تكوّن أو خلل تصنيع الهرمون)","السحب المبكر قبل 24 ساعة (إيجابي كاذب)","نقص اليود عند الأم"],
 l:["قصور الدرق المركزي (يُفوَّت بفحص TSH وحده)"],
 i:["الخدّج والمواليد المرضى يحتاجون إعادة الفحص بعد أسبوعين","البقعة غير المشبعة أو الملوثة مرفوضة","أي نتيجة إيجابية تُؤكد بـ TSH و Free T4 وريدياً فوراً"],
 r:["TSH (Thyroid Stimulating Hormone)","Free T4 (Free Thyroxine)","Newborn Screening Panel (Dried Blood Spot)"]},

"Karyotype (Chromosome Analysis)": {
 w:"زرع خلايا حية حتى طور الانقسام، ثم صبغها بطريقة G-banding وترتيب الكروموسومات لعدّها وفحص بنيتها.",
 y:"المواليد بتشوهات متعددة، الإجهاض المتكرر، العقم وانعدام النطاف، انقطاع الطمث الأولي (تيرنر)، التأخر الذهني، وابيضاض الدم (تصنيف وإنذار).",
 p:"استشارة وراثية. لا يحتاج صياماً.",
 s:"هيبارين صوديوم أخضر (وليس EDTA)، بحرارة الغرفة، يصل خلال 24–48 ساعة. نقي العظم للأورام، والسائل الأمنيوسي أو الزغابات قبل الولادة.",
 h:["تثلث صبغي 21 (داون)، 18 (إدواردز)، 13 (باتو)","47,XXY (كلاينفلتر)","انتقالات متوازنة (سبب للإجهاض المتكرر)","t(9;22) في CML، t(15;17) في APL"],
 l:["45,X (تيرنر)"],
 i:["EDTA والتبريد والتأخير تقتل الخلايا فيفشل الزرع","لا يكشف التغيرات الصغيرة (< 5–10 Mb) ← FISH أو المصفوفة الجينية (Microarray)","الفسيفساء المنخفضة قد تُفوَّت"],
 r:["NIPT (Cell-free Fetal DNA)","BCR-ABL (Philadelphia Chromosome)","Bone Marrow Aspiration & Biopsy","Maternal Serum Screening (AFP / Quad)"]},

"Newborn Screening Panel (Dried Blood Spot)": {
 w:"برنامج صحة عامة يفحص بقعة دم من كعب كل مولود لكشف أمراض وراثية واستقلابية وغدية قبل ظهور الأعراض، غالباً بقياس الطيف الكتلي الترادفي (MS/MS).",
 y:"كشف أمراض قابلة للعلاج مبكراً: بيلة الفينيل كيتون، قصور الدرق الخلقي، فرط تنسّج الكظر، نقص G6PD، الغالاكتوزيميا، التليف الكيسي، أمراض الهيموغلوبين، واضطرابات الأحماض الأمينية والعضوية والدهنية.",
 p:"بعد 24–72 ساعة من الولادة وبعد بدء الرضاعة، وقبل نقل الدم إن أمكن.",
 s:"دم الكعب على بطاقة ترشيح خاصة، الدوائر مشبعة كاملة، تجفف 3 ساعات أفقياً، وتُرسل خلال 24 ساعة.",
 h:["أي نتيجة خارج الحد: استدعاء فوري للتأكيد بفحوصات تشخيصية"],
 l:[],
 i:["السحب قبل 24 ساعة يفوّت بيلة الفينيل كيتون","نقل الدم يفسد فحوص الهيموغلوبين و GALT","التغذية الوريدية ترفع الأحماض الأمينية","البقعة المتداخلة أو غير المشبعة مرفوضة"],
 r:["PKU (Phenylalanine)","Neonatal TSH Screen","Galactosemia (GALT Enzyme)","17-OH Progesterone","G6PD (Glucose-6-Phosphate Dehydrogenase)","Sweat Chloride Test"]},

"PKU (Phenylalanine)": {
 w:"قياس الحمض الأميني فينيل ألانين، الذي يتراكم عند نقص إنزيم فينيل ألانين هيدروكسيلاز.",
 y:"تحري بيلة الفينيل كيتون عند المواليد (تسبب إعاقة ذهنية إن لم تُعالج بالحمية)، ومتابعة الحمية مدى الحياة، وخاصة قبل الحمل وأثناءه.",
 p:"للمواليد: بعد 24–48 ساعة من بدء الرضاعة.",
 s:"بقعة دم مجففة، أو بلازما للمتابعة الكمية.",
 h:["بيلة الفينيل كيتون الكلاسيكية (> 20 mg/dL)","فرط فينيل ألانين الدم الخفيف","نقص BH4","الخدّج والتغذية الوريدية (ارتفاع عابر)"],
 l:[],
 i:["السحب المبكر قبل التغذية يعطي سلبية كاذبة","أم مصابة غير منضبطة تؤذي الجنين (PKU الأمومي)"],
 r:["Newborn Screening Panel (Dried Blood Spot)","Urine Amino Acids (Chromatography)"]},

"Galactosemia (GALT Enzyme)": {
 w:"قياس نشاط إنزيم غالاكتوز-1-فوسفات يوريديل ترانسفيراز في الكريات الحمراء.",
 y:"تشخيص الغالاكتوزيميا الكلاسيكية عند المولود (قيء، يرقان، تضخم كبد، إنتان بالإشريكية القولونية، ساد) بعد بدء الحليب.",
 p:"قبل أي نقل دم (أو بعد 3 أشهر منه). يُوقف الحليب المحتوي على اللاكتوز فوراً عند الاشتباه دون انتظار النتيجة.",
 s:"بقعة دم مجففة أو EDTA/هيبارين دم كامل.",
 h:[],
 l:["الغالاكتوزيميا الكلاسيكية (نشاط غائب تقريباً)","متغير Duarte (نشاط جزئي، غالباً حميد)"],
 i:["نقل الدم يعطي نشاطاً طبيعياً كاذباً لأشهر","الحرارة العالية أثناء الشحن تُفقد الإنزيم نشاطه (إيجابي كاذب)"],
 r:["Newborn Screening Panel (Dried Blood Spot)","Stool Reducing Substances & pH","Neonatal Bilirubin (Total & Fractionated)","ALT (Alanine Aminotransferase)"]},

"Maternal Serum Screening (AFP / Quad)": {
 w:"قياس AFP و hCG و uE3 (الإستريول غير المقترن) و Inhibin-A في دم الحامل، وحساب الخطر بمضاعفات الوسيط (MoM) حسب العمر والوزن والأسبوع.",
 y:"تحري عيوب الأنبوب العصبي (AFP مرتفع) وخطر متلازمة داون والتثلث 18 في الثلث الثاني (الأسبوع 15–22).",
 p:"تحديد عمر الحمل بدقة بالأمواج فوق الصوتية، وتسجيل الوزن والسكري والتدخين وعدد الأجنة والعرق.",
 s:"مصل (أصفر).",
 h:["AFP ≥ 2.5 MoM: عيوب الأنبوب العصبي، عيوب جدار البطن، التوائم، خطأ في عمر الحمل، موت الجنين","hCG و Inhibin-A مرتفعان: خطر داون"],
 l:["AFP و uE3 منخفضان: خطر داون أو التثلث 18"],
 i:["خطأ عمر الحمل أهم سبب للنتائج الكاذبة","فحص تحرٍّ وليس تشخيصاً ← الخطر العالي يحتاج أمواجاً مفصلة وبزلاً أو NIPT","تلوث العينة بدم جنيني"],
 r:["AFP (Alpha-Fetoprotein)","hCG (Beta-hCG Quantitative)","NIPT (Cell-free Fetal DNA)","Karyotype (Chromosome Analysis)"]}
});

window.ENC_EN = Object.assign(window.ENC_EN || {}, {
"Androstenedione": {
 w:"An androgen secreted by the adrenals, ovaries and testes; a precursor of testosterone and estrone.",
 y:"Evaluation of hirsutism and PCOS, monitoring treatment of congenital adrenal hyperplasia, and precocious puberty.",
 p:"Morning sample (diurnal rhythm); in women, early follicular phase.",
 s:"Serum (yellow).",
 h:["PCOS","Congenital adrenal hyperplasia","Androgen-secreting adrenal, ovarian or testicular tumors","Cushing's syndrome"],
 l:["Adrenal and ovarian insufficiency","Menopause","Corticosteroid therapy"],
 i:["Immunoassays are less accurate than LC-MS/MS","Varies with the menstrual cycle"],
 r:["Total Testosterone","DHEA-S","17-OH Progesterone","LH (Luteinizing Hormone)"]},

"ADH (Antidiuretic Hormone)": {
 w:"A posterior-pituitary hormone (vasopressin) that conserves water in the kidney in response to high osmolality or low volume.",
 y:"Distinguishes central diabetes insipidus (low) from nephrogenic DI (high) and SIADH; always interpreted with serum and urine osmolality. Copeptin is a more stable surrogate.",
 p:"Fasting and seated before sampling; avoid smoking, alcohol and interfering drugs per the physician.",
 s:"Chilled EDTA on ice, separated in a refrigerated centrifuge and frozen immediately — unstable.",
 h:["SIADH: lung tumors, brain disease, drugs (carbamazepine, SSRIs, cyclophosphamide)","Nephrogenic diabetes insipidus","Pain, stress and nausea"],
 l:["Central diabetes insipidus","Primary (psychogenic) polydipsia"],
 i:["Unstable and platelet-bound → copeptin is preferable","Meaningless without osmolality"],
 r:["Serum Osmolality","Urine Osmolality","Sodium (Na⁺)","Urine Sodium & FENa"]},

"Dexamethasone Suppression Test (DST)": {
 w:"1 mg dexamethasone is given at night and cortisol measured next morning: normally secretion is suppressed; in Cushing's it is not.",
 y:"A first-line screening test for Cushing's syndrome (with 24-h urine free cortisol and late-night salivary cortisol); the high-dose version helps localize the cause.",
 p:"1 mg dexamethasone orally at 11 PM, sample at 8 AM. Stop estrogen contraceptives 6 weeks if possible.",
 s:"Morning serum (yellow); measuring dexamethasone alongside confirms absorption.",
 h:["Cortisol > 1.8 µg/dL: non-suppression — possible Cushing's","Depression, alcohol and severe obesity (pseudo-Cushing)","Enzyme inducers (phenytoin, rifampicin, carbamazepine) accelerate dexamethasone metabolism","Estrogens (raise CBG)"],
 l:["Normal suppression"],
 i:["Missed or poorly absorbed tablet → measure dexamethasone level","Stress and acute illness"],
 r:["Cortisol (AM – 8AM)","Urine Free Cortisol (24h UFC)","ACTH (Adrenocorticotropin)"]},

"ACTH (Cosyntropin) Stimulation Test": {
 w:"Injection of synthetic ACTH (250 µg) and measurement of the cortisol response at 30 and 60 min.",
 y:"Confirms primary adrenal insufficiency (Addison's) or chronic secondary insufficiency, and screens for late-onset congenital adrenal hyperplasia (with 17-OHP).",
 p:"Morning preferred. Hold hydrocortisone 12–24 h (under supervision; dexamethasone does not interfere with the assay).",
 s:"Serum at 0, 30 and 60 min, with exact times recorded.",
 h:["Normal response: peak cortisol ≥ 18 µg/dL (cut-off is assay-dependent, lower with newer assays)"],
 l:["Poor response: primary adrenal insufficiency, or chronic secondary insufficiency (adrenal atrophy)","Chronic steroid use"],
 i:["Recent pituitary insufficiency (< 4–6 weeks) may give a falsely normal response","Estrogen pills raise total cortisol","Cut-off varies with the assay"],
 r:["Cortisol (AM – 8AM)","ACTH (Adrenocorticotropin)","17-OH Progesterone","Sodium (Na⁺)","Potassium (K⁺)"]},

"Gastrin": {
 w:"A hormone secreted by G-cells of the gastric antrum that stimulates acid secretion.",
 y:"Diagnosis of Zollinger-Ellison syndrome (gastrin-secreting tumor with multiple refractory ulcers and diarrhea), and part of the MEN1 work-up.",
 p:"12-h fast. Stop PPIs at least 1 week and H2 blockers 2 days (under supervision because of bleeding risk).",
 s:"Serum, separated and frozen promptly.",
 h:["Zollinger-Ellison (> 1000 pg/mL with gastric pH < 2 is diagnostic)","Proton-pump inhibitors (commonest cause)","Atrophic gastritis and pernicious anemia","Kidney failure","H. pylori infection"],
 l:["After antrectomy"],
 i:["Acid suppressants are the main cause of false elevation","Gastric pH is needed for interpretation","Secretin stimulation test for intermediate values"],
 r:["Chromogranin A (CgA)","H. pylori Stool Antigen","Calcium (Total)","Vitamin B12"]},

"Glucagon": {
 w:"A hormone secreted by pancreatic alpha-cells that raises blood glucose.",
 y:"Diagnosis of glucagonoma (necrolytic migratory erythema, diabetes, weight loss), and evaluation of hypoglycemia.",
 p:"Fast 10–12 h.",
 s:"Chilled EDTA with a protease inhibitor (aprotinin), on ice, separated and frozen immediately.",
 h:["Glucagonoma (> 500 pg/mL)","Stress, shock and burns","Uncontrolled diabetes","Kidney and liver failure","Prolonged fasting"],
 l:["Cystic fibrosis and pancreatectomy","Chronic pancreatitis"],
 i:["Very unstable → chilling and inhibitor are essential","Rises with venipuncture stress"],
 r:["Glucose (Fasting)","Insulin (Fasting)","C-Peptide","Chromogranin A (CgA)"]},

"Total T4 (Thyroxine)": {
 w:"The sum of free and protein-bound thyroxine (mostly on TBG).",
 y:"Assesses thyroid function but is strongly affected by binding-protein changes; largely replaced by free T4.",
 p:"No fasting. Record drugs (estrogens, levothyroxine).",
 s:"Serum (yellow).",
 h:["Hyperthyroidism","Raised TBG: pregnancy, estrogens, hepatitis (patient euthyroid)","> 20 µg/dL: risk of thyroid storm"],
 l:["Hypothyroidism","Low TBG: androgens, nephrotic syndrome, corticosteroids (euthyroid)","< 2 µg/dL: risk of myxedema coma"],
 i:["Any TBG change alters it without true dysfunction → use free T4","Phenytoin and salicylates displace it from protein"],
 r:["Free T4 (Free Thyroxine)","TSH (Thyroid Stimulating Hormone)","TBG (Thyroxine-Binding Globulin)","Total T3 (Triiodothyronine)"]},

"Total T3 (Triiodothyronine)": {
 w:"The sum of free and bound triiodothyronine, the most potent thyroid hormone.",
 y:"Confirms hyperthyroidism, diagnoses T3 toxicosis when T4 is normal, and monitors antithyroid treatment.",
 p:"No fasting required.",
 s:"Serum (yellow).",
 h:["Hyperthyroidism (Graves', toxic nodules)","T3 toxicosis","Pregnancy and estrogens (TBG)"],
 l:["Severe illness and fasting (non-thyroidal illness syndrome)","Corticosteroids, propranolol and amiodarone (block T4→T3 conversion)","Advanced hypothyroidism"],
 i:["Not useful for diagnosing hypothyroidism","Affected by TBG like total T4"],
 r:["Free T3 (Free Triiodothyronine)","Total T4 (Thyroxine)","TSH (Thyroid Stimulating Hormone)"]},

"TBG (Thyroxine-Binding Globulin)": {
 w:"The main carrier protein of thyroid hormones in blood, made by the liver.",
 y:"Explains discordance between total and free thyroid hormones, and diagnoses inherited TBG deficiency or excess.",
 p:"Record pregnancy and hormonal drugs.",
 s:"Serum (yellow).",
 h:["Pregnancy, contraceptive pills and estrogens","Acute hepatitis","Inherited excess","Opioids and tamoxifen"],
 l:["Androgens and corticosteroids","Nephrotic syndrome and malnutrition","Cirrhosis","Inherited deficiency (X-linked)"],
 i:["The patient remains euthyroid despite changes in total hormones"],
 r:["Total T4 (Thyroxine)","Free T4 (Free Thyroxine)","TSH (Thyroid Stimulating Hormone)"]},

"Neonatal TSH Screen": {
 w:"TSH measured on a dried blood spot from the newborn's heel as part of the newborn screening program.",
 y:"Early detection of congenital hypothyroidism — a leading preventable cause of intellectual disability when treated early (within 2 weeks).",
 p:"24–72 h after birth (TSH is physiologically high before that).",
 s:"Heel blood on a dedicated filter card; circles filled completely from one side and dried horizontally for 3 h away from heat.",
 h:["Congenital hypothyroidism (dysgenesis or dyshormonogenesis)","Early collection before 24 h (false positive)","Maternal iodine deficiency"],
 l:["Central hypothyroidism (missed by TSH-only screening)"],
 i:["Premature and sick infants need repeat screening at 2 weeks","Unsaturated or contaminated spots are rejected","Every positive result is confirmed immediately with venous TSH and free T4"],
 r:["TSH (Thyroid Stimulating Hormone)","Free T4 (Free Thyroxine)","Newborn Screening Panel (Dried Blood Spot)"]},

"Karyotype (Chromosome Analysis)": {
 w:"Living cells are cultured to metaphase, G-banded, and chromosomes arranged to count them and examine their structure.",
 y:"Newborns with multiple anomalies, recurrent miscarriage, infertility and azoospermia, primary amenorrhea (Turner), developmental delay, and leukemia (classification and prognosis).",
 p:"Genetic counseling. No fasting.",
 s:"Sodium heparin green tube (not EDTA), at room temperature, arriving within 24–48 h. Bone marrow for neoplasia; amniotic fluid or chorionic villi prenatally.",
 h:["Trisomy 21 (Down), 18 (Edwards), 13 (Patau)","47,XXY (Klinefelter)","Balanced translocations (a cause of recurrent miscarriage)","t(9;22) in CML, t(15;17) in APL"],
 l:["45,X (Turner)"],
 i:["EDTA, refrigeration and delay kill cells and cause culture failure","Does not detect small changes (< 5–10 Mb) → FISH or chromosomal microarray","Low-level mosaicism may be missed"],
 r:["NIPT (Cell-free Fetal DNA)","BCR-ABL (Philadelphia Chromosome)","Bone Marrow Aspiration & Biopsy","Maternal Serum Screening (AFP / Quad)"]},

"Newborn Screening Panel (Dried Blood Spot)": {
 w:"A public-health program testing a heel-prick blood spot from every newborn for inherited, metabolic and endocrine diseases before symptoms appear, mostly by tandem mass spectrometry (MS/MS).",
 y:"Early detection of treatable disorders: PKU, congenital hypothyroidism, CAH, G6PD deficiency, galactosemia, cystic fibrosis, hemoglobinopathies, and amino-acid, organic-acid and fatty-acid oxidation disorders.",
 p:"24–72 h after birth, after feeding has started, and before transfusion if possible.",
 s:"Heel blood on a dedicated filter card, circles fully saturated, dried horizontally 3 h, sent within 24 h.",
 h:["Any result outside the cut-off: immediate recall for diagnostic confirmation"],
 l:[],
 i:["Collection before 24 h misses PKU","Transfusion invalidates hemoglobin and GALT testing","Parenteral nutrition raises amino acids","Layered or unsaturated spots are rejected"],
 r:["PKU (Phenylalanine)","Neonatal TSH Screen","Galactosemia (GALT Enzyme)","17-OH Progesterone","G6PD (Glucose-6-Phosphate Dehydrogenase)","Sweat Chloride Test"]},

"PKU (Phenylalanine)": {
 w:"Measurement of the amino acid phenylalanine, which accumulates when phenylalanine hydroxylase is deficient.",
 y:"Newborn screening for phenylketonuria (causes intellectual disability if not treated by diet), and lifelong diet monitoring, especially before and during pregnancy.",
 p:"Newborns: 24–48 h after feeding has started.",
 s:"Dried blood spot, or plasma for quantitative follow-up.",
 h:["Classic PKU (> 20 mg/dL)","Mild hyperphenylalaninemia","BH4 deficiency","Prematurity and parenteral nutrition (transient rise)"],
 l:[],
 i:["Sampling before feeding gives false negatives","An uncontrolled affected mother harms the fetus (maternal PKU)"],
 r:["Newborn Screening Panel (Dried Blood Spot)","Urine Amino Acids (Chromatography)"]},

"Galactosemia (GALT Enzyme)": {
 w:"Measurement of galactose-1-phosphate uridyltransferase activity in red cells.",
 y:"Diagnosis of classic galactosemia in newborns (vomiting, jaundice, hepatomegaly, E. coli sepsis, cataract) after milk feeding begins.",
 p:"Before any transfusion (or 3 months after). Stop lactose-containing milk immediately on suspicion without waiting for the result.",
 s:"Dried blood spot or EDTA/heparin whole blood.",
 h:[],
 l:["Classic galactosemia (nearly absent activity)","Duarte variant (partial activity, usually benign)"],
 i:["Transfusion gives falsely normal activity for months","High temperatures during shipping inactivate the enzyme (false positive)"],
 r:["Newborn Screening Panel (Dried Blood Spot)","Stool Reducing Substances & pH","Neonatal Bilirubin (Total & Fractionated)","ALT (Alanine Aminotransferase)"]},

"Maternal Serum Screening (AFP / Quad)": {
 w:"Measurement of AFP, hCG, unconjugated estriol (uE3) and inhibin-A in maternal blood, with risk calculated as multiples of the median (MoM) adjusted for age, weight and gestation.",
 y:"Second-trimester screening (weeks 15–22) for neural-tube defects (high AFP) and risk of Down syndrome and trisomy 18.",
 p:"Gestational age dated accurately by ultrasound; record weight, diabetes, smoking, number of fetuses and ethnicity.",
 s:"Serum (yellow).",
 h:["AFP ≥ 2.5 MoM: neural-tube defects, abdominal-wall defects, twins, wrong dates, fetal demise","High hCG and inhibin-A: Down syndrome risk"],
 l:["Low AFP and uE3: Down syndrome or trisomy 18 risk"],
 i:["Incorrect gestational age is the main cause of false results","A screening test, not diagnostic → high risk needs detailed ultrasound and amniocentesis or NIPT","Contamination with fetal blood"],
 r:["AFP (Alpha-Fetoprotein)","hCG (Beta-hCG Quantitative)","NIPT (Cell-free Fetal DNA)","Karyotype (Chromosome Analysis)"]}
});

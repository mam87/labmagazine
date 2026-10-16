/* New tests from Fischbach & Dunning, 9th ed. — rewritten (AR + EN). Group 5: Microbiology & urine studies. */
window.TESTS_EXTRA = (window.TESTS_EXTRA || []).concat([
 {n:"Tuberculin Skin Test (TST / Mantoux)",c:"Microbiology",s:"Intradermal PPD, read at 48–72 h",r:"Induration < 5–15 mm (risk-based)",u:"Latent TB infection screening"},
 {n:"Eye & Ear Culture",c:"Microbiology",s:"Swab / corneal scraping in transport medium",r:"Normal flora only",u:"Conjunctivitis, keratitis, otitis externa/media"},
 {n:"Tissue & Sterile Body Fluid Culture",c:"Microbiology",s:"Tissue / fluid in sterile container (no formalin)",r:"No growth",u:"Osteomyelitis, septic arthritis, empyema, peritonitis"},
 {n:"Group B Strep (GBS) Screening",c:"Microbiology",s:"Vaginal-rectal swab at 36–37 weeks",r:"GBS not isolated",u:"Intrapartum antibiotic prophylaxis decision"},
 {n:"Urine Nitrite",c:"Urinalysis",s:"First-morning urine (dipstick)",r:"Negative",u:"Gram-negative bacteriuria screen"},
 {n:"Urine Leukocyte Esterase",c:"Urinalysis",s:"Fresh urine (dipstick)",r:"Negative",u:"Pyuria / UTI screen"},
 {n:"Urine Bilirubin",c:"Urinalysis",s:"Fresh urine, protect from light",r:"Negative",u:"Conjugated hyperbilirubinemia"},
 {n:"Urine Urobilinogen",c:"Urinalysis",s:"Fresh urine (afternoon best)",r:"0.1–1.0 mg/dL (EU/dL)",u:"Hemolysis vs biliary obstruction"},
 {n:"Urine Blood / Hemoglobin",c:"Urinalysis",s:"Fresh urine (dipstick + microscopy)",r:"Negative (< 3 RBC/HPF)",u:"Hematuria, hemoglobinuria, myoglobinuria"},
 {n:"Urine Potassium (24h / Random)",c:"Urinalysis",s:"24-h or random urine",r:"25–125 mmol/day (diet-dependent)",u:"Renal vs extrarenal potassium loss"},
 {n:"Urine Chloride (24h)",c:"Urinalysis",s:"24-h or random urine",r:"110–250 mmol/day",u:"Metabolic alkalosis (saline-responsive?)"},
 {n:"Urine Magnesium (24h)",c:"Urinalysis",s:"24-h urine (acidified)",r:"75–150 mg/day (3–5 mmol/day)",u:"Renal Mg wasting vs GI loss"},
 {n:"Urine Oxalate (24h)",c:"Urinalysis",s:"24-h urine with HCl",r:"Men < 55 | Women < 50 mg/day",u:"Calcium oxalate stones, hyperoxaluria"},
 {n:"Urine VMA & Catecholamines (24h)",c:"Urinalysis",s:"24-h urine with HCl",r:"VMA < 9 mg/day",u:"Neuroblastoma, pheochromocytoma"},
 {n:"Urine Porphobilinogen & Porphyrins",c:"Urinalysis",s:"Random urine during attack, protect from light",r:"PBG < 2 mg/L",u:"Acute porphyria attacks"},
 {n:"Urine Amylase & Amylase/Creatinine Clearance",c:"Urinalysis",s:"Timed/random urine + serum",r:"ACCR 1–4%",u:"Macroamylasemia, late pancreatitis"},
 {n:"Creatinine Clearance (24h)",c:"Urinalysis",s:"24-h urine + serum creatinine",r:"Men 97–137 | Women 88–128 mL/min",u:"Measured GFR when eGFR unreliable"},
 {n:"Urine Cystine",c:"Urinalysis",s:"Random / 24-h urine",r:"< 38 mg/day (adult)",u:"Cystinuria (stones)"},
 {n:"Urine Amino Acids (Chromatography)",c:"Urinalysis",s:"Random urine, frozen",r:"Age-specific pattern",u:"Inborn errors, Fanconi syndrome"},
 {n:"D-Xylose Absorption Test",c:"Urinalysis",s:"5-h urine + 1–2 h blood after 25 g xylose",r:"Urine > 4 g/5 h | Blood > 25 mg/dL",u:"Mucosal malabsorption vs pancreatic"}
]);

window.ENC = Object.assign(window.ENC || {}, {
"Tuberculin Skin Test (TST / Mantoux)": {
 w:"حقن 0.1 مل من مشتق البروتين المنقى (PPD) داخل الجلد في الساعد، ثم قياس قطر التصلب (وليس الاحمرار) بعد 48–72 ساعة.",
 y:"تحري عدوى السل الكامنة عند المخالطين، العاملين الصحيين، قبل العلاج البيولوجي (مضادات TNF) وزرع الأعضاء، ومرضى HIV.",
 p:"سجّل لقاح BCG، والعلاج المثبط، واللقاحات الحية الحديثة (تؤجل الفحص 4 أسابيع). يجب أن يعود المريض للقراءة.",
 s:"حقن داخل الأدمة بإبرة صغيرة لتكوين فقاعة 6–10 مم، وتُقرأ النتيجة بالمسطرة عرضياً.",
 h:["≥ 5 مم: مرضى HIV، المخالطون، المثبطون مناعياً","≥ 10 مم: العاملون الصحيون، القادمون من مناطق موبوءة، السكري والفشل الكلوي","≥ 15 مم: الأشخاص بلا عوامل خطر","BCG والمتفطرات غير السلية (إيجابي كاذب)"],
 l:[],
 i:["سلبي كاذب: ضعف المناعة (Anergy)، السل المنتشر، الحصبة واللقاحات الحية، سوء التغذية، الحقن تحت الجلد","IGRA (QuantiFERON) أفضل عند الملقحين بـ BCG","فحص الخطوتين لتعزيز الاستجابة عند الكبار"],
 r:["AFB Smear (TB)","TB PCR – GeneXpert MTB/RIF","AFB Culture (TB Culture)","HIV Antibody/Ag (4th Gen combo)"]},

"Eye & Ear Culture": {
 w:"زرع مسحات أو كشاطات من الملتحمة أو القرنية أو الأذن لعزل البكتيريا أو الفطريات المسببة.",
 y:"التهاب الملتحمة الصديدي الشديد أو عند الرضع، التهاب القرنية (خاصة مع العدسات اللاصقة)، التهاب الأذن الخارجية المزمن أو الخبيث، والتهاب الأذن الوسطى المعاند.",
 p:"قبل القطرات المضادة الحيوية والتخدير الموضعي إن أمكن.",
 s:"مسحة من الملتحمة لكل عين على حدة. كشاطات القرنية يأخذها طبيب العيون وتُزرع مباشرة على الأوساط. سائل الأذن الوسطى بالبزل.",
 h:["العنقودية الذهبية، العقدية الرئوية، المستدمية","النيسرية البنية والمتدثرة عند الرضع (طارئ)","الزائفة الزنجارية (العدسات اللاصقة، الأذن الخبيثة عند السكري)","الأكانثاميبا والفطريات (القرنية)"],
 l:[],
 i:["المخدر الموضعي وقطرات المضاد يثبطان النمو","الجلد وحواف الجفن يلوثان المسحة","الأكانثاميبا تحتاج وسطاً خاصاً"],
 r:["Gram Stain","Antimicrobial Susceptibility Testing (AST)","Chlamydia NAAT/PCR","Gonorrhea NAAT/PCR","Fungal Culture"]},

"Tissue & Sterile Body Fluid Culture": {
 w:"زرع خزعات الأنسجة والعظم وسوائل الجسم المعقمة (الجنبي، البريتوني، المفصلي، التاموري) لعزل المسبب.",
 y:"التهاب العظم والنقي، المفصل الإنتاني، الدبيلة، التهاب الصفاق، عدوى الأطراف الصناعية، وعدوى الأنسجة العميقة.",
 p:"قبل المضاد الحيوي إن أمكن (إيقافه أسبوعين في عدوى المفاصل الصناعية المزمنة إذا كانت الحالة مستقرة).",
 s:"نسيج في وعاء معقّم مع قليل من المحلول الملحي — وليس فورمالين أبداً. السوائل في وعاء معقّم ± زجاجات زرع الدم بجانب السرير. 3–5 عينات نسيجية منفصلة لعدوى المفاصل الصناعية.",
 h:["العنقودية الذهبية، العقديات، الأمعائيات، اللاهوائيات، المتفطرات والفطريات"],
 l:[],
 i:["الفورمالين يقتل الكائنات — أرسل جزءاً منفصلاً طازجاً للزرع","المسحة أقل جودة بكثير من النسيج","العنقوديات سلبية المخثراز في عينة واحدة فقط غالباً تلوث"],
 r:["Gram Stain","Antimicrobial Susceptibility Testing (AST)","Synovial Fluid Analysis (Cells & Crystals)","Tissue Biopsy (Histopathology)"]},

"Group B Strep (GBS) Screening": {
 w:"زرع مسحة مهبلية-شرجية في وسط إغناء انتقائي (أو PCR) لكشف حمل المكورات العقدية من الزمرة B عند الحامل.",
 y:"تحديد الحوامل اللواتي يحتجن مضاداً حيوياً وريدياً أثناء الولادة لمنع إنتان المولود المبكر والتهاب السحايا.",
 p:"في الأسبوع 36–37 من الحمل. لا غسول مهبلي قبله.",
 s:"مسحة واحدة من أسفل المهبل ثم الشرج (عبر المصرة)، في وسط نقل، وتُذكر حساسية البنسلين لاختبار الحساسية.",
 h:["حاملة GBS (10–30% من الحوامل) ← مضاد وريدي أثناء المخاض"],
 l:[],
 i:["المسحة المهبلية وحدها تقلل الحساسية","النتيجة صالحة 5 أسابيع","البيلة الجرثومية بـ GBS في أي وقت من الحمل تعني الوقاية دون حاجة للمسح"],
 r:["Urine Culture","Antimicrobial Susceptibility Testing (AST)","Blood Culture (Aerobic)"]},

"Urine Nitrite": {
 w:"تكشف رقعة الشريط النتريت الذي تنتجه البكتيريا سلبية الغرام (الإشريكية القولونية وغيرها) بتحويل النترات الغذائية.",
 y:"تحري سريع لالتهاب المسالك البولية، ويُقرأ مع إستراز الكريات البيضاء.",
 p:"أول بول الصباح (يحتاج البول 4 ساعات في المثانة).",
 s:"بول طازج يُفحص خلال ساعة أو يُبرّد.",
 h:["إيجابي: بيلة جرثومية بأمعائيات غالباً (نوعية عالية > 90%)"],
 l:[],
 i:["سلبي كاذب: المكورات المعوية والعنقوديات والزائفة لا تنتجه، البول المخفّف، التبول المتكرر، فيتامين C، غذاء فقير بالنترات","إيجابي كاذب: التأخير بحرارة الغرفة (تكاثر البكتيريا)، صبغ البول الأحمر (فينازوبيريدين)","السلبية لا تستبعد الالتهاب"],
 r:["Urine Leukocyte Esterase","Urine Culture","Urinalysis – Dipstick (10-parameter)"]},

"Urine Leukocyte Esterase": {
 w:"تكشف الرقعة إنزيم الإستراز الموجود في حبيبات العدلات، فتدل على وجود الكريات البيضاء (حتى المتحللة) في البول.",
 y:"تحري البيلة القيحية والتهاب المسالك، ومع النتريت لرفع الحساسية.",
 p:"عينة نظيفة من منتصف التبول.",
 s:"بول طازج.",
 h:["التهاب المسالك البولية","التهاب الكلية الخلالي، الحصى، السل البولي (بيلة قيحية عقيمة)","المتدثرة والسيلان (التهاب الإحليل)","التلوث بالإفرازات المهبلية"],
 l:[],
 i:["سلبي كاذب: الغلوكوز والبروتين العاليان، الكثافة العالية، بعض المضادات (سيفالكسين، تتراسيكلين)","إيجابي كاذب: التلوث المهبلي، المؤكسدات"],
 r:["Urine Nitrite","Urine Microscopy (Sediment)","Urine Culture"]},

"Urine Bilirubin": {
 w:"البيليروبين المقترن (المباشر) الذائب في الماء، ولا يظهر في البول طبيعياً.",
 y:"دليل مبكر على اليرقان الكبدي أو الانسدادي قبل ظهوره سريرياً، ويميزه عن اليرقان الانحلالي (البيليروبين غير المقترن لا يمر بالبول).",
 p:"عينة طازجة.",
 s:"بول طازج محمي من الضوء، يُفحص خلال ساعة.",
 h:["التهاب الكبد","الانسداد الصفراوي (حصى، أورام)","الركود الصفراوي الدوائي","البول بلون الشاي مع رغوة صفراء"],
 l:[],
 i:["الضوء والتأخير يكسرانه (سلبي كاذب)","فيتامين C والنتريت العالي يخفضانه","الأدوية الملونة (كلوربرومازين) إيجابية كاذبة"],
 r:["Bilirubin (Direct)","Urine Urobilinogen","ALT (Alanine Aminotransferase)","ALP (Alkaline Phosphatase)"]},

"Urine Urobilinogen": {
 w:"مادة تتكون من البيليروبين بفعل بكتيريا الأمعاء، يُعاد امتصاص جزء منها ويُطرح قليل منها بالبول طبيعياً.",
 y:"مع بيليروبين البول للتمييز بين الانحلال (مرتفع، بلا بيليروبين) والانسداد الصفراوي الكامل (غائب) وأمراض الكبد (مرتفع مع بيليروبين).",
 p:"يُفضّل بعد الظهر (ذروة الإطراح بين 2–4 مساءً).",
 s:"بول طازج محمي من الضوء.",
 h:["انحلال الدم","التهاب الكبد وتشمعه","فشل القلب الاحتقاني (احتقان الكبد)"],
 l:["الانسداد الصفراوي الكامل (البراز فاتح اللون)","المضادات الحيوية الواسعة (تقتل بكتيريا الأمعاء)"],
 i:["الشريط لا يكشف الغياب التام بدقة","يتأكسد إلى يوروبيلين بالضوء والتأخير","البول القلوي يرفعه"],
 r:["Urine Bilirubin","Bilirubin (Total)","Reticulocyte Count","Haptoglobin"]},

"Urine Blood / Hemoglobin": {
 w:"تكشف رقعة الشريط نشاط البيروكسيداز للهيموغلوبين والميوغلوبين، وتُؤكد البيلة الدموية بعدّ الكريات الحمراء بالمجهر.",
 y:"تحري البيلة الدموية (الحصى، الالتهاب، الأورام، أمراض الكبيبات) والتمييز بين الكريات السليمة والهيموغلوبين الحر والميوغلوبين.",
 p:"تجنّب الجمع أثناء الدورة الشهرية والتمارين العنيفة قبل 48 ساعة.",
 s:"بول طازج من منتصف التبول.",
 h:["كريات حمراء بالمجهر: حصى، التهاب، أورام المثانة والكلية، أمراض الكبيبات (كريات مشوهة وأسطوانات)","شريط إيجابي بلا كريات: هيموغلوبين حر (انحلال داخل الأوعية) أو ميوغلوبين (تحلل العضلات)","التمارين العنيفة والدورة الشهرية"],
 l:[],
 i:["فيتامين C سلبي كاذب","المطهرات المؤكسدة (الكلور) إيجابي كاذب","البيلة الدموية المجهرية عند كبار السن والمدخنين تحتاج تقييماً للأورام"],
 r:["Urine Microscopy (Sediment)","Myoglobin","CK (Creatine Kinase, Total)","Haptoglobin","Urine Cytology"]},

"Urine Potassium (24h / Random)": {
 w:"كمية البوتاسيوم المطروحة بالبول، وتعكس مقدار طرحه الكلوي.",
 y:"تحديد سبب نقص البوتاسيوم: فقدان كلوي (> 20–30 mmol/يوم: المدرّات، فرط الألدوستيرون، الحماض الأنبوبي) أم خارج الكلى (< 15–20: الإسهال، الملينات).",
 p:"سجّل المدرّات والملينات والقيء.",
 s:"بول 24 ساعة (أو عشوائي مع حساب نسبة البوتاسيوم/الكرياتينين).",
 h:["المدرّات","فرط الألدوستيرون وكوشينغ","القيء (قلاء مع طرح كلوي)","الحماض الأنبوبي الكلوي","متلازمتا بارتر وجيتلمان"],
 l:["الإسهال والملينات","قصور الكظر","الفشل الكلوي","نقص الوارد"],
 i:["يعتمد بشدة على الغذاء","يُفسّر مع بوتاسيوم الدم دائماً"],
 r:["Potassium (K⁺)","Aldosterone","Plasma Renin Activity","Urine Chloride (24h)","Bicarbonate (Total CO₂)"]},

"Urine Chloride (24h)": {
 w:"كمية الكلورايد المطروحة بالبول، وتتبع الوارد من الملح.",
 y:"تصنيف القلاء الاستقلابي: مستجيب للمحلول الملحي (كلورايد البول < 20: القيء، الشفط المعدي) أم غير مستجيب (> 20: المدرّات الحالية، فرط الألدوستيرون، بارتر).",
 p:"سجّل المدرّات.",
 s:"بول 24 ساعة أو عشوائي.",
 h:["المدرّات","فرط الألدوستيرون","بارتر وجيتلمان","قصور الكظر","زيادة الملح"],
 l:["القيء والشفط المعدي","الإسهال المفرز للكلورايد","التعرق الشديد","نقص الحجم"],
 i:["أفضل من الصوديوم في القلاء الاستقلابي (البيكربونات المطروحة تجر الصوديوم)"],
 r:["Chloride (Cl⁻)","Urine Potassium (24h / Random)","Bicarbonate (Total CO₂)","Urine Sodium & FENa"]},

"Urine Magnesium (24h)": {
 w:"كمية المغنيسيوم المطروحة بالبول خلال يوم.",
 y:"تحديد سبب نقص المغنيسيوم: فقدان كلوي (> 24 mg/يوم مع نقص الدم) أم معوي (< 10 mg/يوم)، وتقييم الحصى.",
 p:"إيقاف مكملات المغنيسيوم والملينات المحتوية عليه حسب الطبيب.",
 s:"بول 24 ساعة في وعاء محمّض.",
 h:["المدرّات والسيسبلاتين والأمينوغليكوزيدات والسيكلوسبورين","الكحول","السكري غير المسيطر عليه","جيتلمان"],
 l:["الإسهال وسوء الامتصاص","مثبطات مضخة البروتون (فقدان معوي)","نقص الوارد"],
 i:["الجمع غير الكامل","يعتمد على الغذاء"],
 r:["Magnesium","Urine Potassium (24h / Random)","Urine Calcium (24h)"]},

"Urine Oxalate (24h)": {
 w:"كمية الأوكسالات المطروحة بالبول، وهي مكون أساسي لأشيع حصى الكلى (أوكسالات الكالسيوم).",
 y:"تقييم حصى الكلى المتكررة، فرط أوكسالات البول المعوي (بعد جراحات السمنة، مرض كرون) أو الأولي الوراثي.",
 p:"غذاء طبيعي. تجنّب فيتامين C بجرعات عالية 48 ساعة (يتحول إلى أوكسالات).",
 s:"بول 24 ساعة في وعاء يحتوي حمض HCl.",
 h:["فرط أوكسالات البول المعوي: جراحات السمنة، الأمعاء القصيرة، كرون، التهاب البنكرياس المزمن","الغذاء الغني (السبانخ، المكسرات، الشاي، الشوكولاتة)","فيتامين C بجرعات عالية","فرط أوكسالات البول الأولي","التسمم بالإيثيلين غلايكول"],
 l:[],
 i:["عدم تحميض العينة يسمح بتكوين أوكسالات من فيتامين C","الجمع غير الكامل"],
 r:["Urine Calcium (24h)","Urine Uric Acid (24h)","Urine Cystine","Creatinine"]},

"Urine VMA & Catecholamines (24h)": {
 w:"حمض الفانيليل مانديليك (VMA) ونواتج استقلاب الكاتيكولامينات الأخرى (HVA، الأدرينالين، النورأدرينالين، الدوبامين) في بول 24 ساعة.",
 y:"تشخيص ومتابعة ورم الأرومة العصبية عند الأطفال (VMA و HVA)، وتقييم ورم القواتم (الميتانفرينات أدق).",
 p:"قبل 2–3 أيام: تجنّب الفانيليا والموز والشوكولاتة والقهوة والحمضيات، ومراجعة الأدوية (ليفودوبا، مثبطات MAO، مضادات الضغط). تجنّب الإجهاد.",
 s:"بول 24 ساعة في وعاء يحتوي HCl، مبرّد ومحمي من الضوء. عند الأطفال عينة عشوائية مع نسبة الكرياتينين.",
 h:["ورم الأرومة العصبية (VMA و HVA، > 90%)","ورم القواتم","الإجهاد الشديد والأدوية والغذاء"],
 l:[],
 i:["الغذاء والأدوية أهم مصدر للإيجابية الكاذبة","البول غير المحمّض يتكسر"],
 r:["Urine Metanephrines (Fractionated, 24h)","Plasma Free Metanephrines","NSE (Neuron-Specific Enolase)"]},

"Urine Porphobilinogen & Porphyrins": {
 w:"البورفوبيلينوجين (PBG) وحمض الأمينوليفولينيك (ALA) والبورفيرينات — مواد وسيطة في تصنيع الهيم تتراكم في البورفيريا.",
 y:"تشخيص نوبة البورفيريا الحادة (ألم بطن شديد، اعتلال عصبي، أعراض نفسية، بول داكن يزداد لونه بالضوء)، والتسمم بالرصاص (ALA).",
 p:"أثناء النوبة (قبل علاج الهيمين). اذكر الأدوية المحرضة (باربيتورات، سلفوناميدات، إستروجين).",
 s:"بول عشوائي طازج محمي من الضوء تماماً (ورق ألمنيوم)، يُبرّد أو يُجمّد. بول 24 ساعة للبورفيرينات.",
 h:["PBG مرتفع جداً: بورفيريا متقطعة حادة، بورفيريا مختلطة، بورفيريا كوبروبورفيرين الوراثية","ALA وحده: التسمم بالرصاص، نقص ALA ديهيدراتاز","بورفيرينات البول: البورفيريا الجلدية المتأخرة"],
 l:[],
 i:["الضوء يكسّره بسرعة","بين النوبات قد يكون طبيعياً","العلاج بالهيمين يخفضه"],
 r:["Free Erythrocyte Protoporphyrin (FEP / ZPP)","Blood Lead Level","Sodium (Na⁺)"]},

"Urine Amylase & Amylase/Creatinine Clearance": {
 w:"الأميلاز المطروح بالبول، ونسبة تصفية الأميلاز إلى الكرياتينين (ACCR) المحسوبة من عينتي بول ومصل متزامنتين.",
 y:"تشخيص فرط أميلاز الدم الكبير (Macroamylasemia: أميلاز مصل مرتفع مع بول منخفض)، وتأكيد التهاب البنكرياس المتأخر (يبقى مرتفعاً في البول أياماً بعد عودة المصل).",
 p:"لا يحتاج تحضيراً.",
 s:"بول موقوت (2 أو 24 ساعة) أو عشوائي مع مصل بنفس الوقت.",
 h:["التهاب البنكرياس الحاد (يبقى 7–10 أيام)","أمراض الغدد اللعابية"],
 l:["Macroamylasemia (ACCR < 1%)","الفشل الكلوي"],
 i:["الفشل الكلوي يغير الحساب","الليباز أدق لتشخيص التهاب البنكرياس"],
 r:["Amylase","Lipase","Creatinine"]},

"Creatinine Clearance (24h)": {
 w:"حجم البلازما الذي تصفيه الكلى من الكرياتينين في الدقيقة، يُحسب من كرياتينين البول 24 ساعة وكرياتينين المصل وحجم البول.",
 y:"قياس GFR عندما تكون المعادلات غير دقيقة: الكتلة العضلية الشاذة، البتر، الحمل، الأنظمة الغذائية الخاصة، وقبل الأدوية السامة للكلى أو التبرع بالكلية.",
 p:"شرب كمية عادية من الماء، وتجنّب اللحوم المطبوخة والتمارين العنيفة أثناء الجمع.",
 s:"بول 24 ساعة مبرّد كامل مع عينة مصل أثناء الجمع. سجّل الطول والوزن.",
 h:["الحمل","فرط الترشيح في السكري المبكر"],
 l:["المرض الكلوي المزمن والحاد","قصور القلب والجفاف","التقدم بالعمر"],
 i:["الجمع غير الكامل أهم خطأ ← كرياتينين البول المتوقع 15–25 mg/kg/يوم","يبالغ في تقدير GFR بنحو 10–20% (إفراز أنبوبي) ويزداد ذلك في الفشل المتقدم","السيميتيدين والتريميثوبريم"],
 r:["Creatinine","eGFR (Estimated GFR)","Cystatin C","24-hour Urine Protein"]},

"Urine Cystine": {
 w:"الحمض الأميني السيستين في البول، ويترسب في البول الحامضي على شكل بلورات سداسية وحصى.",
 y:"تشخيص بيلة السيستين الوراثية (حصى متكررة منذ الطفولة)، ومتابعة العلاج بالقلونة والأدوية الرابطة.",
 p:"غذاء طبيعي.",
 s:"بول عشوائي (فحص النيتروبروسيد النوعي) أو 24 ساعة للقياس الكمي.",
 h:["بيلة السيستين (> 400 mg/يوم عند المتماثلين)","متلازمة فانكوني (بيلة أحماض أمينية عامة)"],
 l:[],
 i:["البلورات السداسية في الراسب علامة مميزة","الهدف العلاجي: تركيز < 250 mg/L مع pH بول > 7"],
 r:["Urine Amino Acids (Chromatography)","Urine pH","Urine Microscopy (Sediment)"]},

"Urine Amino Acids (Chromatography)": {
 w:"فصل وقياس الأحماض الأمينية في البول (بالكروماتوغرافيا أو الطيف الكتلي) ومقارنة النمط بالمرجع العمري.",
 y:"تشخيص الأمراض الاستقلابية الوراثية للأحماض الأمينية عند الرضع (قيء، خمول، تشنجات، رائحة غريبة)، ومتلازمة فانكوني والاعتلال الأنبوبي.",
 p:"يُفضّل بعد الصيام وبعيداً عن التغذية الوريدية.",
 s:"بول عشوائي يُجمّد فوراً.",
 h:["نمط معمم: فانكوني، الأذية الأنبوبية، السموم (الرصاص)","أحماض محددة: بيلة السيستين، هارتنب، بيلة الفينيل كيتون، داء شراب القيقب"],
 l:[],
 i:["الأحماض الأمينية في البلازما أدق لأغلب الاضطرابات","التغذية الوريدية والأدوية والبكتيريا تغير النمط"],
 r:["PKU (Phenylalanine)","Urine Cystine","Newborn Screening Panel (Dried Blood Spot)","Ammonia"]},

"D-Xylose Absorption Test": {
 w:"يشرب المريض 25 غرام من سكر الزيلوز الذي يُمتص في الأمعاء الدقيقة دون الحاجة لإنزيمات البنكرياس، ثم يُقاس في الدم والبول.",
 y:"تمييز سوء الامتصاص المخاطي (الداء البطني، فرط النمو البكتيري، الأمعاء القصيرة) عن سوء الهضم البنكرياسي (الزيلوز طبيعي).",
 p:"صيام 8 ساعات، تجنّب الأطعمة الغنية بالبنتوز (الفواكه) 24 ساعة، والأسبرين ومضادات الالتهاب. الراحة أثناء الفحص.",
 s:"بول 5 ساعات كامل + دم بعد ساعة إلى ساعتين من الجرعة.",
 h:[],
 l:["الداء البطني وأمراض الغشاء المخاطي","فرط نمو البكتيريا (تستهلك الزيلوز)","الأمعاء القصيرة","التأخر في إفراغ المعدة والقيء","الفشل الكلوي والاستسقاء (البول فقط)"],
 i:["الفشل الكلوي يخفض البول دون سوء امتصاص ← اعتمد على الدم","الجفاف وعدم الجمع الكامل","قلّ استخدامه مع توفر الفحوص المصلية والتنظير"],
 r:["tTG-IgA (Tissue Transglutaminase)","Fecal Fat (Qualitative / 72h)","Lactose Tolerance / Hydrogen Breath Test"]}
});

window.ENC_EN = Object.assign(window.ENC_EN || {}, {
"Tuberculin Skin Test (TST / Mantoux)": {
 w:"0.1 mL of purified protein derivative (PPD) is injected intradermally in the forearm and the diameter of induration (not redness) is measured after 48–72 h.",
 y:"Screening for latent TB infection in contacts, health-care workers, before biologics (anti-TNF) and transplantation, and in HIV.",
 p:"Record BCG vaccination, immunosuppression and recent live vaccines (delay testing 4 weeks). The patient must return for reading.",
 s:"Intradermal injection with a fine needle raising a 6–10 mm wheal; read transversely with a ruler.",
 h:["≥ 5 mm: HIV, close contacts, immunosuppressed","≥ 10 mm: health-care workers, migrants from endemic areas, diabetes and renal failure","≥ 15 mm: persons without risk factors","BCG and non-tuberculous mycobacteria (false positive)"],
 l:[],
 i:["False negatives: anergy, disseminated TB, measles and live vaccines, malnutrition, subcutaneous injection","IGRA (QuantiFERON) is preferable in BCG-vaccinated people","Two-step testing for boosting in older adults"],
 r:["AFB Smear (TB)","TB PCR – GeneXpert MTB/RIF","AFB Culture (TB Culture)","HIV Antibody/Ag (4th Gen combo)"]},

"Eye & Ear Culture": {
 w:"Culture of swabs or scrapings from the conjunctiva, cornea or ear to isolate the causative bacteria or fungi.",
 y:"Severe purulent conjunctivitis or conjunctivitis in neonates, keratitis (especially with contact lenses), chronic or malignant otitis externa, and refractory otitis media.",
 p:"Before antibiotic drops and topical anesthetic if possible.",
 s:"A separate conjunctival swab for each eye. Corneal scrapings are taken by the ophthalmologist and plated directly. Middle-ear fluid by tympanocentesis.",
 h:["Staphylococcus aureus, Streptococcus pneumoniae, Haemophilus","Neisseria gonorrhoeae and Chlamydia in neonates (emergency)","Pseudomonas aeruginosa (contact lenses, malignant otitis in diabetics)","Acanthamoeba and fungi (cornea)"],
 l:[],
 i:["Topical anesthetic and antibiotic drops inhibit growth","Skin and lid margins contaminate the swab","Acanthamoeba needs special media"],
 r:["Gram Stain","Antimicrobial Susceptibility Testing (AST)","Chlamydia NAAT/PCR","Gonorrhea NAAT/PCR","Fungal Culture"]},

"Tissue & Sterile Body Fluid Culture": {
 w:"Culture of tissue and bone biopsies and sterile body fluids (pleural, peritoneal, synovial, pericardial) to isolate the cause.",
 y:"Osteomyelitis, septic arthritis, empyema, peritonitis, prosthetic-joint infection and deep-tissue infection.",
 p:"Before antibiotics if possible (in stable chronic prosthetic-joint infection, stop them 2 weeks before sampling).",
 s:"Tissue in a sterile container with a little saline — never formalin. Fluids in a sterile container ± blood-culture bottles at the bedside. 3–5 separate tissue samples for prosthetic-joint infection.",
 h:["Staphylococcus aureus, streptococci, Enterobacterales, anaerobes, mycobacteria and fungi"],
 l:[],
 i:["Formalin kills organisms — send a separate fresh portion for culture","Swabs are far inferior to tissue","Coagulase-negative staphylococci in a single sample are usually contaminants"],
 r:["Gram Stain","Antimicrobial Susceptibility Testing (AST)","Synovial Fluid Analysis (Cells & Crystals)","Tissue Biopsy (Histopathology)"]},

"Group B Strep (GBS) Screening": {
 w:"Culture of a vaginal-rectal swab in selective enrichment broth (or PCR) to detect group B streptococcal carriage in pregnancy.",
 y:"Identifies pregnant women who need intrapartum IV antibiotics to prevent early-onset neonatal sepsis and meningitis.",
 p:"At 36–37 weeks. No douching beforehand.",
 s:"One swab of the lower vagina then the rectum (through the sphincter), in transport medium; note penicillin allergy for susceptibility testing.",
 h:["GBS carrier (10–30% of pregnant women) → IV antibiotics in labor"],
 l:[],
 i:["A vaginal-only swab lowers sensitivity","The result is valid for 5 weeks","GBS bacteriuria at any time in pregnancy means prophylaxis without screening"],
 r:["Urine Culture","Antimicrobial Susceptibility Testing (AST)","Blood Culture (Aerobic)"]},

"Urine Nitrite": {
 w:"The dipstick pad detects nitrite produced when Gram-negative bacteria (E. coli and others) reduce dietary nitrate.",
 y:"Rapid screening for urinary-tract infection, read together with leukocyte esterase.",
 p:"First morning urine (urine needs 4 h in the bladder).",
 s:"Fresh urine tested within 1 h or refrigerated.",
 h:["Positive: bacteriuria, usually Enterobacterales (specificity > 90%)"],
 l:[],
 i:["False negatives: enterococci, staphylococci and Pseudomonas do not produce it; dilute urine; frequent voiding; vitamin C; nitrate-poor diet","False positives: delay at room temperature (bacterial overgrowth), red urine dyes (phenazopyridine)","A negative result does not exclude infection"],
 r:["Urine Leukocyte Esterase","Urine Culture","Urinalysis – Dipstick (10-parameter)"]},

"Urine Leukocyte Esterase": {
 w:"The pad detects esterase from neutrophil granules, indicating white cells (even lysed ones) in urine.",
 y:"Screening for pyuria and UTI; combined with nitrite to increase sensitivity.",
 p:"Clean-catch midstream sample.",
 s:"Fresh urine.",
 h:["Urinary-tract infection","Interstitial nephritis, stones, renal TB (sterile pyuria)","Chlamydia and gonorrhea (urethritis)","Vaginal contamination"],
 l:[],
 i:["False negatives: high glucose and protein, high specific gravity, some antibiotics (cephalexin, tetracycline)","False positives: vaginal contamination, oxidizing agents"],
 r:["Urine Nitrite","Urine Microscopy (Sediment)","Urine Culture"]},

"Urine Bilirubin": {
 w:"Water-soluble conjugated (direct) bilirubin, normally absent from urine.",
 y:"Early evidence of hepatic or obstructive jaundice before it is clinically visible; distinguishes it from hemolytic jaundice (unconjugated bilirubin does not enter urine).",
 p:"Fresh sample.",
 s:"Fresh urine protected from light, tested within 1 h.",
 h:["Hepatitis","Biliary obstruction (stones, tumors)","Drug-induced cholestasis","Tea-colored urine with yellow foam"],
 l:[],
 i:["Light and delay degrade it (false negative)","Vitamin C and high nitrite lower it","Colored drugs (chlorpromazine) give false positives"],
 r:["Bilirubin (Direct)","Urine Urobilinogen","ALT (Alanine Aminotransferase)","ALP (Alkaline Phosphatase)"]},

"Urine Urobilinogen": {
 w:"Formed from bilirubin by gut bacteria; part is reabsorbed and a small amount is normally excreted in urine.",
 y:"With urine bilirubin, distinguishes hemolysis (high, no bilirubin), complete biliary obstruction (absent) and liver disease (high with bilirubin).",
 p:"Afternoon sample preferred (peak excretion 2–4 PM).",
 s:"Fresh urine protected from light.",
 h:["Hemolysis","Hepatitis and cirrhosis","Congestive heart failure (hepatic congestion)"],
 l:["Complete biliary obstruction (pale stools)","Broad-spectrum antibiotics (kill gut flora)"],
 i:["The dipstick does not reliably detect total absence","Oxidizes to urobilin with light and delay","Alkaline urine raises it"],
 r:["Urine Bilirubin","Bilirubin (Total)","Reticulocyte Count","Haptoglobin"]},

"Urine Blood / Hemoglobin": {
 w:"The dipstick pad detects the peroxidase activity of hemoglobin and myoglobin; hematuria is confirmed by counting red cells microscopically.",
 y:"Screening for hematuria (stones, infection, tumors, glomerular disease) and distinguishing intact red cells from free hemoglobin and myoglobin.",
 p:"Avoid collection during menstruation and strenuous exercise within 48 h.",
 s:"Fresh midstream urine.",
 h:["Red cells on microscopy: stones, infection, bladder and kidney tumors, glomerular disease (dysmorphic cells and casts)","Positive strip without cells: free hemoglobin (intravascular hemolysis) or myoglobin (rhabdomyolysis)","Strenuous exercise and menstruation"],
 l:[],
 i:["Vitamin C gives false negatives","Oxidizing disinfectants (bleach) give false positives","Microscopic hematuria in older adults and smokers needs evaluation for malignancy"],
 r:["Urine Microscopy (Sediment)","Myoglobin","CK (Creatine Kinase, Total)","Haptoglobin","Urine Cytology"]},

"Urine Potassium (24h / Random)": {
 w:"The amount of potassium excreted in urine, reflecting renal potassium handling.",
 y:"Identifies the cause of hypokalemia: renal loss (> 20–30 mmol/day: diuretics, hyperaldosteronism, RTA) or extrarenal (< 15–20: diarrhea, laxatives).",
 p:"Record diuretics, laxatives and vomiting.",
 s:"24-h urine (or random with potassium/creatinine ratio).",
 h:["Diuretics","Hyperaldosteronism and Cushing's","Vomiting (alkalosis with renal wasting)","Renal tubular acidosis","Bartter and Gitelman syndromes"],
 l:["Diarrhea and laxatives","Adrenal insufficiency","Kidney failure","Low intake"],
 i:["Strongly diet-dependent","Always interpret with serum potassium"],
 r:["Potassium (K⁺)","Aldosterone","Plasma Renin Activity","Urine Chloride (24h)","Bicarbonate (Total CO₂)"]},

"Urine Chloride (24h)": {
 w:"The amount of chloride excreted in urine, which follows salt intake.",
 y:"Classifies metabolic alkalosis: saline-responsive (urine Cl < 20: vomiting, gastric suction) or saline-resistant (> 20: current diuretics, hyperaldosteronism, Bartter).",
 p:"Record diuretics.",
 s:"24-h or random urine.",
 h:["Diuretics","Hyperaldosteronism","Bartter and Gitelman","Adrenal insufficiency","High salt intake"],
 l:["Vomiting and gastric suction","Chloride-losing diarrhea","Heavy sweating","Volume depletion"],
 i:["Better than sodium in metabolic alkalosis (excreted bicarbonate drags sodium with it)"],
 r:["Chloride (Cl⁻)","Urine Potassium (24h / Random)","Bicarbonate (Total CO₂)","Urine Sodium & FENa"]},

"Urine Magnesium (24h)": {
 w:"The amount of magnesium excreted in urine over one day.",
 y:"Identifies the cause of hypomagnesemia: renal loss (> 24 mg/day with low serum Mg) or gut loss (< 10 mg/day); also used in stone evaluation.",
 p:"Stop magnesium supplements and magnesium-containing laxatives per the physician.",
 s:"24-h urine in an acidified container.",
 h:["Diuretics, cisplatin, aminoglycosides and cyclosporine","Alcohol","Uncontrolled diabetes","Gitelman syndrome"],
 l:["Diarrhea and malabsorption","Proton-pump inhibitors (gut loss)","Low intake"],
 i:["Incomplete collection","Diet-dependent"],
 r:["Magnesium","Urine Potassium (24h / Random)","Urine Calcium (24h)"]},

"Urine Oxalate (24h)": {
 w:"The amount of oxalate excreted in urine — a key component of the commonest kidney stones (calcium oxalate).",
 y:"Evaluation of recurrent kidney stones, enteric hyperoxaluria (after bariatric surgery, Crohn's) or primary inherited hyperoxaluria.",
 p:"Normal diet. Avoid high-dose vitamin C for 48 h (converted to oxalate).",
 s:"24-h urine in a container with HCl.",
 h:["Enteric hyperoxaluria: bariatric surgery, short bowel, Crohn's, chronic pancreatitis","Oxalate-rich diet (spinach, nuts, tea, chocolate)","High-dose vitamin C","Primary hyperoxaluria","Ethylene glycol poisoning"],
 l:[],
 i:["Failure to acidify allows oxalate to form from vitamin C","Incomplete collection"],
 r:["Urine Calcium (24h)","Urine Uric Acid (24h)","Urine Cystine","Creatinine"]},

"Urine VMA & Catecholamines (24h)": {
 w:"Vanillylmandelic acid (VMA) and other catecholamine metabolites (HVA, epinephrine, norepinephrine, dopamine) in a 24-h urine.",
 y:"Diagnosis and follow-up of neuroblastoma in children (VMA and HVA), and evaluation of pheochromocytoma (metanephrines are more accurate).",
 p:"For 2–3 days: avoid vanilla, bananas, chocolate, coffee and citrus; review drugs (levodopa, MAO inhibitors, antihypertensives). Avoid stress.",
 s:"24-h urine in an HCl container, refrigerated and light-protected. In children, a random sample with creatinine ratio.",
 h:["Neuroblastoma (VMA and HVA, > 90%)","Pheochromocytoma","Severe stress, drugs and diet"],
 l:[],
 i:["Diet and drugs are the main sources of false positives","Non-acidified urine degrades"],
 r:["Urine Metanephrines (Fractionated, 24h)","Plasma Free Metanephrines","NSE (Neuron-Specific Enolase)"]},

"Urine Porphobilinogen & Porphyrins": {
 w:"Porphobilinogen (PBG), aminolevulinic acid (ALA) and porphyrins — heme-synthesis intermediates that accumulate in the porphyrias.",
 y:"Diagnosis of an acute porphyria attack (severe abdominal pain, neuropathy, psychiatric symptoms, dark urine that darkens in light), and lead poisoning (ALA).",
 p:"During the attack (before hemin therapy). Record triggering drugs (barbiturates, sulfonamides, estrogens).",
 s:"Fresh random urine completely protected from light (foil), refrigerated or frozen. 24-h urine for porphyrins.",
 h:["Very high PBG: acute intermittent, variegate or hereditary coproporphyria","Isolated ALA: lead poisoning, ALA-dehydratase deficiency","Urine porphyrins: porphyria cutanea tarda"],
 l:[],
 i:["Light degrades it quickly","May be normal between attacks","Hemin therapy lowers it"],
 r:["Free Erythrocyte Protoporphyrin (FEP / ZPP)","Blood Lead Level","Sodium (Na⁺)"]},

"Urine Amylase & Amylase/Creatinine Clearance": {
 w:"Amylase excreted in urine, and the amylase-to-creatinine clearance ratio (ACCR) calculated from simultaneous urine and serum samples.",
 y:"Diagnosis of macroamylasemia (high serum with low urine amylase), and confirmation of late pancreatitis (urine stays high for days after serum normalizes).",
 p:"No preparation needed.",
 s:"Timed (2- or 24-h) or random urine with simultaneous serum.",
 h:["Acute pancreatitis (persists 7–10 days)","Salivary gland disease"],
 l:["Macroamylasemia (ACCR < 1%)","Kidney failure"],
 i:["Kidney failure alters the calculation","Lipase is more accurate for pancreatitis"],
 r:["Amylase","Lipase","Creatinine"]},

"Creatinine Clearance (24h)": {
 w:"The plasma volume cleared of creatinine per minute, calculated from 24-h urine creatinine, serum creatinine and urine volume.",
 y:"Measures GFR when equations are unreliable: abnormal muscle mass, amputation, pregnancy, special diets, and before nephrotoxic drugs or kidney donation.",
 p:"Normal water intake; avoid cooked meat and strenuous exercise during the collection.",
 s:"Complete refrigerated 24-h urine with a serum sample during the collection. Record height and weight.",
 h:["Pregnancy","Hyperfiltration in early diabetes"],
 l:["Chronic and acute kidney disease","Heart failure and dehydration","Advancing age"],
 i:["Incomplete collection is the main error → expected urine creatinine 15–25 mg/kg/day","Overestimates GFR by ~10–20% (tubular secretion), more so in advanced failure","Cimetidine and trimethoprim"],
 r:["Creatinine","eGFR (Estimated GFR)","Cystatin C","24-hour Urine Protein"]},

"Urine Cystine": {
 w:"The amino acid cystine in urine; it precipitates in acidic urine as hexagonal crystals and stones.",
 y:"Diagnosis of inherited cystinuria (recurrent stones from childhood), and monitoring alkalinization and chelating therapy.",
 p:"Normal diet.",
 s:"Random urine (qualitative nitroprusside test) or 24-h urine for quantitation.",
 h:["Cystinuria (> 400 mg/day in homozygotes)","Fanconi syndrome (generalized aminoaciduria)"],
 l:[],
 i:["Hexagonal crystals in the sediment are characteristic","Treatment target: concentration < 250 mg/L with urine pH > 7"],
 r:["Urine Amino Acids (Chromatography)","Urine pH","Urine Microscopy (Sediment)"]},

"Urine Amino Acids (Chromatography)": {
 w:"Separation and quantification of urinary amino acids (chromatography or mass spectrometry) compared with an age-specific pattern.",
 y:"Diagnosis of inherited amino-acid disorders in infants (vomiting, lethargy, seizures, unusual odor), Fanconi syndrome and tubulopathies.",
 p:"Preferably fasting and away from parenteral nutrition.",
 s:"Random urine frozen immediately.",
 h:["Generalized pattern: Fanconi syndrome, tubular injury, toxins (lead)","Specific amino acids: cystinuria, Hartnup, PKU, maple syrup urine disease"],
 l:[],
 i:["Plasma amino acids are more accurate for most disorders","Parenteral nutrition, drugs and bacteria alter the pattern"],
 r:["PKU (Phenylalanine)","Urine Cystine","Newborn Screening Panel (Dried Blood Spot)","Ammonia"]},

"D-Xylose Absorption Test": {
 w:"The patient drinks 25 g of xylose, a sugar absorbed in the small bowel without pancreatic enzymes, which is then measured in blood and urine.",
 y:"Distinguishes mucosal malabsorption (celiac disease, bacterial overgrowth, short bowel) from pancreatic maldigestion (xylose normal).",
 p:"Fast 8 h; avoid pentose-rich foods (fruit) for 24 h, aspirin and NSAIDs. Rest during the test.",
 s:"Complete 5-h urine + blood 1–2 h after the dose.",
 h:[],
 l:["Celiac and other mucosal diseases","Bacterial overgrowth (bacteria consume xylose)","Short bowel","Delayed gastric emptying and vomiting","Kidney failure and ascites (urine only)"],
 i:["Kidney failure lowers urine xylose without malabsorption → rely on the blood level","Dehydration and incomplete collection","Used less now that serology and endoscopy are available"],
 r:["tTG-IgA (Tissue Transglutaminase)","Fecal Fat (Qualitative / 72h)","Lactose Tolerance / Hydrogen Breath Test"]}
});

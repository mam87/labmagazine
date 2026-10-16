/* New tests from Fischbach & Dunning, 9th ed. — rewritten (AR + EN). Group 2: Chemistry, nutrition & toxicology. */
window.TESTS_EXTRA = (window.TESTS_EXTRA || []).concat([
 {n:"Anion Gap",c:"Chemistry",s:"Serum (calculated)",r:"8–16 mmol/L (Na − [Cl + HCO₃])",u:"Metabolic acidosis classification"},
 {n:"Arterial Blood Gases (ABG)",c:"Chemistry",s:"Arterial blood, heparinized syringe, on ice",r:"pH 7.35–7.45 | PCO₂ 35–45 | PO₂ 80–100 mmHg | HCO₃ 22–26",u:"Acid–base, oxygenation, ventilation"},
 {n:"ALP Isoenzymes",c:"Chemistry",s:"Serum (Yellow)",r:"Liver & bone fractions predominate",u:"Source of raised ALP (liver/bone/intestine/placenta)"},
 {n:"LDH Isoenzymes",c:"Chemistry",s:"Serum (Yellow), no hemolysis",r:"LD2 > LD1 > LD3 > LD4 > LD5",u:"Tissue source of raised LDH"},
 {n:"ACE (Angiotensin-Converting Enzyme)",c:"Chemistry",s:"Serum (Yellow)",r:"8–53 U/L (method-dependent)",u:"Sarcoidosis activity"},
 {n:"Acid Phosphatase (Prostatic)",c:"TumorMarkers",s:"Serum, separated & frozen",r:"< 2.5 ng/mL",u:"Historic prostate marker; forensic semen"},
 {n:"Apolipoprotein A-I & B",c:"Chemistry",s:"Serum (Yellow)",r:"Apo A-I 110–205 | Apo B 45–110 mg/dL",u:"Atherogenic particle number, CV risk"},
 {n:"Neonatal Bilirubin (Total & Fractionated)",c:"Chemistry",s:"Heel-stick capillary, protected from light",r:"Plot on hour-specific nomogram (Bhutani)",u:"Neonatal jaundice, phototherapy decision"},
 {n:"Alpha-1 Antitrypsin",c:"Chemistry",s:"Serum (Yellow)",r:"100–200 mg/dL",u:"Early emphysema, neonatal cholestasis"},
 {n:"Osteocalcin",c:"Chemistry",s:"Serum, on ice, morning",r:"Men 3–13 | Women 0.4–11 ng/mL",u:"Bone turnover (formation)"},
 {n:"Sweat Chloride Test",c:"Chemistry",s:"Sweat by pilocarpine iontophoresis",r:"< 30 mmol/L normal | ≥ 60 CF",u:"Cystic fibrosis diagnosis"},
 {n:"Tryptase",c:"Immunology",s:"Serum within 1–4 h of event",r:"< 11.4 µg/L",u:"Anaphylaxis, mastocytosis"},
 {n:"Vitamin A (Retinol)",c:"Chemistry",s:"Serum, fasting, protect from light",r:"30–80 µg/dL",u:"Deficiency (night blindness), toxicity"},
 {n:"Vitamin B1 (Thiamine)",c:"Chemistry",s:"Whole blood EDTA, protect from light",r:"74–222 nmol/L (whole blood)",u:"Wernicke, beriberi, alcoholism, refeeding"},
 {n:"Vitamin B6 (Pyridoxal Phosphate)",c:"Chemistry",s:"Plasma EDTA, fasting, protect from light",r:"5–50 µg/L",u:"Neuropathy, isoniazid, sideroblastic anemia"},
 {n:"Vitamin C (Ascorbic Acid)",c:"Chemistry",s:"Plasma, on ice, protect from light",r:"0.4–2.0 mg/dL",u:"Scurvy, malnutrition"},
 {n:"Vitamin E (Tocopherol)",c:"Chemistry",s:"Serum, fasting, protect from light",r:"5.5–17 mg/L",u:"Fat malabsorption, neuropathy"},
 {n:"Zinc",c:"Chemistry",s:"Trace-element tube (Royal Blue), fasting AM",r:"70–120 µg/dL",u:"Deficiency, wound healing, Wilson therapy"},
 {n:"Copper (Serum)",c:"Chemistry",s:"Trace-element tube (Royal Blue)",r:"70–140 µg/dL",u:"Wilson disease, deficiency myeloneuropathy"},
 {n:"Selenium",c:"Chemistry",s:"Trace-element tube (Royal Blue)",r:"70–150 µg/L",u:"TPN, malabsorption, cardiomyopathy"},
 {n:"Lactose Tolerance / Hydrogen Breath Test",c:"Chemistry",s:"Breath samples ± Grey fluoride",r:"H₂ rise < 20 ppm | Glucose rise > 20 mg/dL",u:"Lactose intolerance, SIBO"},
 {n:"Cholinesterase (Pseudo- & RBC)",c:"Toxicology",s:"Serum (pseudo) / EDTA (RBC)",r:"Method-dependent (U/L)",u:"Organophosphate poisoning, succinylcholine apnea"},
 {n:"Arsenic",c:"Toxicology",s:"24-h urine (acid-washed) or whole blood",r:"Urine < 35 µg/L (inorganic)",u:"Occupational/water exposure, poisoning"},
 {n:"Cyclosporine (Trough)",c:"Toxicology",s:"Whole blood EDTA (Purple)",r:"Target depends on organ/time",u:"Transplant immunosuppression"},
 {n:"Methotrexate Level",c:"Toxicology",s:"Serum, protect from light",r:"< 0.1 µmol/L at 72 h (high-dose)",u:"Leucovorin rescue after high-dose MTX"},
 {n:"Phenobarbital Level",c:"Toxicology",s:"Serum (Yellow), trough",r:"15–40 µg/mL",u:"Seizure therapy, neonatal seizures"}
]);

window.ENC = Object.assign(window.ENC || {}, {
"Anion Gap": {
 w:"الفرق المحسوب بين الكاتيون الأساسي (الصوديوم) والأنيونات المقاسة (الكلورايد والبيكربونات)، ويمثل الأنيونات غير المقاسة كالألبومين والفوسفات.",
 y:"تصنيف الحماض الاستقلابي إلى مرتفع الفجوة (أحماض مضافة) وطبيعي الفجوة (فقدان بيكربونات).",
 p:"لا يحتاج تحضيراً.",
 s:"يُحسب من الصوديوم والكلورايد والبيكربونات في نفس العينة.",
 h:["الحماض الكيتوني السكري والكحولي","الحماض اللبني","الفشل الكلوي","التسممات: ميثانول، إيثيلين غلايكول، ساليسيلات (MUDPILES)"],
 l:["نقص الألبومين (كل 1 g/dL يخفضها ~2.5)","الورم النقوي IgG (بروتين موجب)","الليثيوم والبروميد"],
 i:["صحّح للألبومين دائماً","فتح الأنبوب يخفض البيكربونات فيرفع الفجوة كاذباً","احسب الفجوة في تبويب الحاسبات"],
 r:["Bicarbonate (Total CO₂)","Chloride (Cl⁻)","Sodium (Na⁺)","Lactate","Beta-Hydroxybutyrate (β-HB)","Serum Osmolality"]},

"Arterial Blood Gases (ABG)": {
 w:"قياس pH و PCO₂ و PO₂ في الدم الشرياني مع حساب البيكربونات وفائض القاعدة وإشباع الأكسجين.",
 y:"تقييم الأكسجة والتهوية والتوازن الحمضي القاعدي في العناية المركزة والطوارئ والتنفس الاصطناعي.",
 p:"سجّل نسبة الأكسجين المعطى (FiO₂) وحرارة المريض. اختبار ألن قبل سحب الشريان الكعبري.",
 s:"حقنة مهبرنة جافة، دون فقاعات هواء، تُغلق فوراً وتُفحص خلال 15 دقيقة (أو 30–60 دقيقة على الثلج).",
 h:["PCO₂ > 45: حماض تنفسي (نقص التهوية)","HCO₃ > 26: قلاء استقلابي (قيء، مدرّات)","pH > 7.45: قلاء"],
 l:["PO₂ < 60 mmHg: فشل تنفسي بنقص الأكسجة","PCO₂ < 35: قلاء تنفسي (فرط التهوية، القلق، الانصمام)","HCO₃ < 22: حماض استقلابي","pH < 7.35: حماض"],
 i:["فقاعات الهواء ترفع PO₂ وتخفض PCO₂","التأخير بحرارة الغرفة: الكريات البيضاء تستهلك الأكسجين","الهيبارين السائل الزائد يخفض PCO₂ والبيكربونات (تمديد)","العينة الوريدية بالخطأ: PO₂ منخفض جداً"],
 r:["Anion Gap","Lactate","Bicarbonate (Total CO₂)","Potassium (K⁺)","Carboxyhemoglobin","Methemoglobin"]},

"ALP Isoenzymes": {
 w:"فصل الفوسفاتاز القلوي إلى أجزائه حسب المصدر: الكبد، العظم، الأمعاء، والمشيمة (بالرحلان أو بالتثبيط الحراري).",
 y:"تحديد مصدر ALP المرتفع عندما لا يكفي GGT، خاصة عند الأطفال والحوامل وأمراض العظم المرافقة.",
 p:"صيام 8–12 ساعة (الوجبة الدهنية ترفع النوع المعوي، خاصة لفصيلة O و B).",
 s:"مصل (أصفر).",
 h:["الكبدي: انسداد صفراوي، نقائل كبدية","العظمي: باجيت، النقائل العظمية، فرط الجارات، النمو","المعوي: بعد الطعام، تشمع الكبد","المشيمي: الحمل، أورام (Regan isoenzyme)"],
 l:["نقص الفوسفاتاز الوراثي (كل الأجزاء)"],
 i:["الوجبة الدهنية","ALP العظمي النوعي (BAP) فحص مناعي أدق لمتابعة العظم"],
 r:["ALP (Alkaline Phosphatase)","GGT (Gamma-Glutamyl Transferase)","Osteocalcin","Calcium (Total)"]},

"LDH Isoenzymes": {
 w:"فصل LDH إلى خمسة أجزاء: LD1 و LD2 (القلب والكريات الحمراء والكلى)، LD3 (الرئة)، LD4 و LD5 (الكبد والعضلات).",
 y:"تحديد مصدر ارتفاع LDH عند عدم وضوح السبب، كانحلال الدم أو أذية الكبد أو العضلات.",
 p:"لا يحتاج تحضيراً.",
 s:"مصل (أصفر) بدون أي تحلل، ولا يُبرّد (LD5 يتأثر بالبرودة).",
 h:["LD1 > LD2 (Flipped): انحلال الدم، احتشاء القلب (قديماً)، أورام الخصية","LD3: الانصمام الرئوي، الالتهاب الرئوي، اللمفوما","LD5: أمراض الكبد، أذية العضلات"],
 l:[],
 i:["التحلل يرفع LD1 و LD2 كاذباً","التبريد يخفض LD5","التروبونين حلّ محله للقلب"],
 r:["LDH (Lactate Dehydrogenase)","Haptoglobin","ALT (Alanine Aminotransferase)","CK (Creatine Kinase, Total)"]},

"ACE (Angiotensin-Converting Enzyme)": {
 w:"إنزيم يحوّل الأنجيوتنسين I إلى II، تفرزه بطانة الأوعية الرئوية، وتنتجه بكثرة الأورام الحبيبية في الساركويد.",
 y:"دعم تشخيص الساركويد ومتابعة نشاطه والاستجابة للعلاج.",
 p:"صيام 12 ساعة يُفضّل. أوقف مثبطات ACE (تخفضه بشدة) حسب توجيه الطبيب.",
 s:"مصل (أصفر)، لا يُستخدم EDTA (يثبط الإنزيم).",
 h:["الساركويد النشط (60–80%)","داء غوشيه","فرط الدرق","السكري","داء الأسبستوس والسيليكا"],
 l:["مثبطات ACE (كابتوبريل، إنالابريل)","الساركويد المعالج"],
 i:["حساسيته ونوعيته محدودتان — لا يُشخّص به وحده","تعدد أشكال الجين (I/D) يؤثر على القيم الطبيعية","المرجع أعلى عند الأطفال"],
 r:["Calcium (Total)","Urine Calcium (24h)","Vitamin D (25-OH)"]},

"Acid Phosphatase (Prostatic)": {
 w:"إنزيم تفرزه البروستات بكميات كبيرة، كان واسماً لسرطان البروستات قبل PSA.",
 y:"قيمته السريرية اليوم محدودة (حلّ PSA محله)، لكنه ما زال يُستخدم في الطب الشرعي لكشف السائل المنوي في حالات الاعتداء.",
 p:"لا يُسحب خلال 48 ساعة من فحص المستقيم أو خزعة البروستات.",
 s:"مصل يُفصل ويُجمّد فوراً (غير ثابت). مسحات للطب الشرعي.",
 h:["سرطان البروستات المنتشر للعظم","بعد فحص المستقيم أو القسطرة","داء غوشيه وأمراض العظم","السائل المنوي (في المسحات الشرعية)"],
 l:[],
 i:["غير ثابت بحرارة الغرفة","التحلل يرفعه (الكريات تحتوي فوسفاتاز حمضي)"],
 r:["PSA (Total Prostate-Specific Antigen)","ALP (Alkaline Phosphatase)"]},

"Apolipoprotein A-I & B": {
 w:"Apo A-I البروتين الأساسي في HDL، و Apo B البروتين الموجود جزيء واحد منه على كل جسيم مسبب للتصلب (LDL، VLDL، Lp(a)).",
 y:"تقدير عدد الجسيمات الضارة بدقة أكبر من LDL، خاصة عند الدهون الثلاثية العالية والسكري ومتلازمة الأيض ومتابعة العلاج.",
 p:"لا يحتاج صياماً.",
 s:"مصل (أصفر).",
 h:["Apo B: فرط الدهون العائلي المشترك، السكري، قصور الدرق، المتلازمة الكلوية"],
 l:["Apo A-I: التدخين، السكري، السمنة، نقص HDL الوراثي (تانجير)","Apo B: فرط الدرق، العلاج بالستاتين"],
 i:["نسبة Apo B/Apo A-I المرتفعة مؤشر خطر قوي","أكثر توحيداً بين المختبرات من LDL المباشر"],
 r:["LDL Cholesterol","HDL Cholesterol","Lipoprotein(a) [Lp(a)]","Triglycerides"]},

"Neonatal Bilirubin (Total & Fractionated)": {
 w:"قياس البيليروبين الكلي والمباشر عند حديثي الولادة، ويُفسّر حسب عمر الطفل بالساعات على مخطط خاص.",
 y:"تقييم يرقان الولدان، تحديد الحاجة للعلاج الضوئي أو تبديل الدم، وكشف الركود الصفراوي (رتق القنوات الصفراوية).",
 p:"سجّل عمر الطفل بالساعات والأسبوع الحملي وعوامل الخطر (انحلال، G6PD).",
 s:"دم شعري من الكعب في أنبوب صغير محمي من الضوء، أو مقياس جلدي للتحري.",
 h:["غير المباشر: يرقان فيزيولوجي، انحلال (عدم توافق ABO أو Rh، G6PD)، يرقان حليب الأم، كدمات","المباشر > 1 mg/dL: ركود صفراوي، رتق القنوات، عدوى، أمراض استقلابية — حالة عاجلة"],
 l:[],
 i:["الضوء (حتى ضوء العلاج) يخفضه بسرعة","تحلل عينة الكعب","المقياس الجلدي غير دقيق بعد العلاج الضوئي"],
 r:["Bilirubin (Total)","Bilirubin (Direct)","G6PD (Glucose-6-Phosphate Dehydrogenase)","Direct Coombs Test (DAT)","ABO Blood Grouping"]},

"Alpha-1 Antitrypsin": {
 w:"بروتين يفرزه الكبد يثبط إنزيم الإيلاستاز الذي تفرزه العدلات في الرئة، وهو بروتين طور حاد.",
 y:"تحري النقص الوراثي عند انتفاخ الرئة المبكر (< 45 سنة أو عند غير المدخنين)، وأمراض الكبد غير المفسّرة والركود الصفراوي عند الرضع.",
 p:"لا يحتاج تحضيراً.",
 s:"مصل (أصفر).",
 h:["الالتهاب والعدوى (بروتين طور حاد)","الحمل والإستروجين"],
 l:["النقص الوراثي (النمط الظاهري PiZZ أو PiSZ)","المتلازمة الكلوية","سوء التغذية"],
 i:["الالتهاب قد يرفعه إلى الطبيعي عند الحامل للنقص ← اطلب النمط الظاهري أو الجيني","الرحلان الكهربائي: غياب شريط ألفا1 علامة"],
 r:["ALT (Alanine Aminotransferase)","Serum Protein Electrophoresis (SPEP)","CRP (C-Reactive Protein)"]},

"Osteocalcin": {
 w:"بروتين تصنعه بانيات العظم ويعتمد على فيتامين K، يعكس نشاط تكوين العظم.",
 y:"تقييم معدل دوران العظم في هشاشة العظام وباجيت، ومتابعة الاستجابة للعلاج المضاد للهشاشة.",
 p:"صباحاً صائماً (له تغير يومي، ذروته ليلاً).",
 s:"مصل أو EDTA على الثلج، يُفصل ويُجمّد بسرعة (غير ثابت).",
 h:["فرط الجارات","باجيت والنقائل العظمية","فرط الدرق","النمو عند الأطفال","سن اليأس (دوران مرتفع)"],
 l:["قصور الجارات والدرق","العلاج بالكورتيزون","مضادات الارتشاف (بيسفوسفونات)"],
 i:["غير ثابت ويتكسر في العينة","الفشل الكلوي يرفعه (يُطرح بالكلى)","P1NP و CTX أكثر استخداماً اليوم"],
 r:["ALP Isoenzymes","PTH (Parathyroid Hormone)","Vitamin D (25-OH)","Calcium (Total)"]},

"Sweat Chloride Test": {
 w:"قياس الكلورايد في العرق بعد تحفيز التعرق بالبيلوكاربين بالرحلان الأيوني (Iontophoresis).",
 y:"الفحص المرجعي لتشخيص التليف الكيسي عند الرضع الذين يكون فحص حديثي الولادة إيجابياً لديهم، أو بأعراض رئوية وهضمية مزمنة.",
 p:"بعد عمر 2 أسبوع ووزن > 2 كغ. لا كريمات على الجلد. الطفل بصحة مستقرة ومرطب جيداً.",
 s:"عرق ≥ 15 µL خلال 30 دقيقة (ماكرودكت)، يُحلل مباشرة.",
 h:["≥ 60 mmol/L: تليف كيسي","30–59: منطقة متوسطة ← فحص جيني CFTR","قصور الكظر وسوء التغذية وقصور الدرق (ارتفاع غير نوعي)"],
 l:[],
 i:["كمية العرق غير الكافية أهم سبب لفشل الفحص","الجفاف والوذمة تؤثر على النتيجة","يجب تأكيد النتيجة الإيجابية مرتين أو بالجينات"],
 r:["Newborn Screening Panel (Dried Blood Spot)","Fecal Fat (Qualitative / 72h)","Sputum Culture"]},

"Tryptase": {
 w:"إنزيم تفرزه الخلايا البدينة (Mast cells) عند تنشيطها، ويرتفع في الدم خلال 15–60 دقيقة من التفاعل التحسسي.",
 y:"تأكيد التأق (Anaphylaxis) بأثر رجعي، وتشخيص كثرة الخلايا البدينة الجهازية (قيمة قاعدية > 20 µg/L).",
 p:"خلال 1–4 ساعات من التفاعل، وعينة قاعدية بعد 24 ساعة أو أكثر للمقارنة.",
 s:"مصل (أصفر).",
 h:["التأق والتفاعل التحسسي الشديد (خاصة الدوائي وأثناء التخدير)","كثرة الخلايا البدينة الجهازية","فرط التريبتاز الوراثي (HαT)","أورام الدم النقوية"],
 l:[],
 i:["قد يكون طبيعياً في التأق الغذائي","التوقيت مهم: يعود للطبيعي بعد 24 ساعة","القاعدة: الارتفاع > 20% + 2 µg/L عن القاعدي يدعم التأق"],
 r:["IgE (Total)","Specific IgE (Allergen Panel)","CBC (Complete Blood Count)"]},

"Vitamin A (Retinol)": {
 w:"فيتامين ذائب بالدهون ضروري للرؤية الليلية وسلامة الظهارة والمناعة، يُخزّن في الكبد.",
 y:"تقييم النقص (العشى الليلي، جفاف الملتحمة) في سوء الامتصاص والتغذية، وكشف السمية من المكملات وأدوية الريتينويد.",
 p:"صيام ليلة، وإيقاف المكملات 24 ساعة.",
 s:"مصل محمي من الضوء (أنبوب ملفوف بورق ألمنيوم)، يُجمّد إذا تأخر.",
 h:["الإفراط في المكملات وزيت كبد الحوت","الفشل الكلوي المزمن","فرط الدهون"],
 l:["سوء التغذية","سوء امتصاص الدهون (الداء البطني، التليف الكيسي، الركود الصفراوي)","أمراض الكبد","نقص الزنك","الالتهاب الحاد (ينخفض مؤقتاً)"],
 i:["الضوء يكسّره","يُقرأ مع بروتين الربط (RBP) عند الالتهاب"],
 r:["Vitamin E (Tocopherol)","Zinc","Albumin","Prealbumin (Transthyretin)"]},

"Vitamin B1 (Thiamine)": {
 w:"فيتامين ضروري لاستقلاب الكربوهيدرات (مرافق إنزيمي على شكل ثيامين بيروفوسفات TPP).",
 y:"تشخيص النقص في الإدمان على الكحول، اعتلال الدماغ الفيرنيكي، البري بري، القيء الحملي، جراحات السمنة، ومتلازمة إعادة التغذية.",
 p:"صيام، وقبل إعطاء الثيامين أو المحاليل السكرية.",
 s:"دم كامل EDTA محمي من الضوء (لأن 80% منه داخل الكريات)، يُجمّد.",
 h:["المكملات"],
 l:["الكحول","سوء التغذية وجراحات السمنة","القيء المزمن والحملي","الغسيل الكلوي","المدرّات (فوروسيميد)"],
 i:["لا يُؤخر العلاج بانتظار النتيجة في الاشتباه بفيرنيكي","المصل غير دقيق ← الدم الكامل أفضل"],
 r:["Lactate","Magnesium","Phosphorus","Vitamin B6 (Pyridoxal Phosphate)"]},

"Vitamin B6 (Pyridoxal Phosphate)": {
 w:"الشكل الفعّال من فيتامين B6، مرافق إنزيمي لأكثر من 100 تفاعل في استقلاب الأحماض الأمينية وتصنيع الهيم.",
 y:"تقييم الاعتلال العصبي، فقر الدم الحديدي الأرومي، ومرضى الإيزونيازيد والغسيل الكلوي والكحول، وكشف السمية من المكملات.",
 p:"صيام ليلة، وإيقاف المكملات 24 ساعة.",
 s:"بلازما EDTA محمية من الضوء، تُجمّد.",
 h:["الإفراط في المكملات (اعتلال عصبي حسي)"],
 l:["الكحول","الإيزونيازيد والهيدرالازين وبنسيلامين","الغسيل الكلوي","سوء الامتصاص والحمل"],
 i:["الضوء يكسّره","ALP المرتفع يكسّره ويخفضه","الالتهاب يخفضه"],
 r:["Vitamin B1 (Thiamine)","ALT (Alanine Aminotransferase)","Homocysteine"]},

"Vitamin C (Ascorbic Acid)": {
 w:"فيتامين مضاد للأكسدة ضروري لتصنيع الكولاجين وامتصاص الحديد.",
 y:"تشخيص الإسقربوط (نزف اللثة، نزف حول الجريبات، تأخر التئام الجروح) عند سوء التغذية وكبار السن والإدمان.",
 p:"صيام، وإيقاف المكملات 24 ساعة.",
 s:"بلازما على الثلج محمية من الضوء، تُفصل وتُثبّت (بحمض الميتافوسفوريك) وتُجمّد فوراً — غير ثابت أبداً.",
 h:["المكملات بجرعات عالية"],
 l:["الإسقربوط (< 0.2 mg/dL)","التدخين","الكحول","الغسيل الكلوي","الحمل","الأمراض الحادة"],
 i:["أكثر الفيتامينات عدم ثباتاً","يتداخل بجرعاته العالية مع شريط البول (الدم، الغلوكوز، النتريت) وبعض فحوصات الغلوكوز"],
 r:["Iron (Fe)","CBC (Complete Blood Count)","Urinalysis – Dipstick (10-parameter)"]},

"Vitamin E (Tocopherol)": {
 w:"فيتامين ذائب بالدهون مضاد للأكسدة يحمي أغشية الخلايا والأعصاب.",
 y:"تقييم سوء امتصاص الدهون المزمن، الاعتلال العصبي والرنح، والخدّج (فقر دم انحلالي).",
 p:"صيام ليلة.",
 s:"مصل محمي من الضوء، يُجمّد.",
 h:["المكملات"],
 l:["سوء امتصاص الدهون (التليف الكيسي، الركود الصفراوي، الداء البطني)","الخدّج","انعدام البروتين الدهني بيتا الوراثي"],
 i:["يُفسّر بالنسبة للدهون الكلية (النسبة إلى الكوليسترول + الدهون الثلاثية) لأنه يُحمل عليها"],
 r:["Vitamin A (Retinol)","Fecal Fat (Qualitative / 72h)","Cholesterol (Total)"]},

"Zinc": {
 w:"معدن نادر ضروري لأكثر من 300 إنزيم، للنمو والمناعة والتئام الجروح والتذوق.",
 y:"تقييم النقص: تأخر النمو، الطفح حول الفم والأطراف (التهاب الجلد النهائي المعوي)، تساقط الشعر، بطء التئام الجروح، سوء الامتصاص والتغذية الوريدية، ومتابعة علاج ويلسون.",
 p:"صيام صباحاً (الطعام يخفضه).",
 s:"أنبوب خاص بالعناصر النادرة (كحلي) خالٍ من المعادن، دون تحلل، يُفصل خلال ساعتين.",
 h:["المكملات والتعرض المهني (حمى أبخرة المعادن)","التلوث من الأنبوب أو السدادة"],
 l:["سوء الامتصاص والإسهال المزمن","الكحول وأمراض الكبد","الحروق والتغذية الوريدية","التهاب الجلد النهائي المعوي الوراثي","الالتهاب الحاد ونقص الألبومين"],
 i:["التلوث من الأنابيب العادية والجلد شائع جداً","التحلل يرفعه (الكريات غنية بالزنك)","التغير اليومي والوجبات"],
 r:["Copper (Serum)","Albumin","ALP (Alkaline Phosphatase)","Vitamin A (Retinol)"]},

"Copper (Serum)": {
 w:"معدن نادر يُحمل 90% منه على السيرولوبلازمين، ضروري لإنزيمات عديدة ولتكوين الدم والأعصاب.",
 y:"تقييم داء ويلسون (مع السيرولوبلازمين ونحاس البول)، نقص النحاس (فقر دم وقلة عدلات واعتلال نخاعي يشبه نقص B12 بعد جراحات المعدة أو تناول الزنك الزائد).",
 p:"لا يحتاج تحضيراً خاصاً.",
 s:"أنبوب عناصر نادرة (كحلي) خالٍ من المعادن.",
 h:["الالتهاب والحمل وحبوب منع الحمل (ارتفاع السيرولوبلازمين)","التسمم بالنحاس","الركود الصفراوي"],
 l:["داء ويلسون (النحاس الكلي منخفض لكن الحر مرتفع)","نقص النحاس: جراحة المعدة، تناول الزنك الزائد، التغذية الوريدية","داء منكس","المتلازمة الكلوية"],
 i:["في ويلسون: نحاس البول 24 ساعة > 100 µg/يوم أهم","التلوث"],
 r:["Ceruloplasmin","Zinc","CBC (Complete Blood Count)","ALT (Alanine Aminotransferase)"]},

"Selenium": {
 w:"معدن نادر يدخل في إنزيمات مضادة للأكسدة (غلوتاثيون بيروكسيداز) وفي استقلاب هرمونات الدرق.",
 y:"تقييم النقص في التغذية الوريدية طويلة الأمد، سوء الامتصاص، الغسيل الكلوي، واعتلال عضلة القلب غير المفسّر، وكشف السمية من المكملات.",
 p:"لا يحتاج تحضيراً.",
 s:"أنبوب عناصر نادرة (كحلي).",
 h:["الإفراط في المكملات (رائحة ثوم بالنفس، تساقط الشعر والأظافر)","التعرض المهني"],
 l:["التغذية الوريدية دون إضافته","سوء الامتصاص","الغسيل الكلوي","المناطق الفقيرة بالسيلينيوم (داء كيشان)"],
 i:["الالتهاب يخفضه في المصل"],
 r:["Zinc","Copper (Serum)","TSH (Thyroid Stimulating Hormone)"]},

"Lactose Tolerance / Hydrogen Breath Test": {
 w:"بعد شرب جرعة من اللاكتوز، يُقاس الهيدروجين في النفس (ينتج عن تخمر السكر غير الممتص بالبكتيريا) أو ارتفاع غلوكوز الدم.",
 y:"تشخيص عدم تحمّل اللاكتوز (نقص اللاكتاز)، وفرط نمو البكتيريا في الأمعاء الدقيقة (باستخدام الغلوكوز أو اللاكتولوز).",
 p:"صيام 12 ساعة، حمية منخفضة الألياف يوماً قبله، لا تدخين ولا رياضة. إيقاف المضادات الحيوية 4 أسابيع والمليّنات أسبوعاً.",
 s:"عينات نفس كل 15–30 دقيقة لمدة 2–3 ساعات (± دم فلورايد لقياس الغلوكوز).",
 h:["ارتفاع الهيدروجين ≥ 20 ppm عن القاعدي: سوء امتصاص اللاكتوز","ارتفاع مبكر خلال 90 دقيقة: فرط نمو بكتيري"],
 l:["ارتفاع الغلوكوز < 20 mg/dL: نقص اللاكتاز (طريقة الدم)"],
 i:["المضادات الحيوية الحديثة تعطي سلبية كاذبة","10–15% من الناس لا ينتجون الهيدروجين (ينتجون الميثان) ← قِس الميثان أيضاً","التدخين يرفع الهيدروجين القاعدي"],
 r:["Stool Reducing Substances & pH","D-Xylose Absorption Test","tTG-IgA (Tissue Transglutaminase)"]},

"Cholinesterase (Pseudo- & RBC)": {
 w:"إنزيمان يحلّلان الأسيتيل كولين: الكاذب (البلازمي، يصنعه الكبد) وإنزيم الكريات الحمراء (الحقيقي، يعكس ما في الأعصاب).",
 y:"تشخيص التسمم بالمبيدات الفوسفورية العضوية والكارباماتية ومراقبة العمال المعرضين، وكشف نقص الإنزيم الكاذب الوراثي قبل التخدير بالسكسينيل كولين (انقطاع النفس المطوّل).",
 p:"للعاملين: قيمة قاعدية قبل موسم الرش للمقارنة.",
 s:"مصل للكاذب، EDTA للكريات الحمراء.",
 h:["المتلازمة الكلوية","فرط الدرق والسمنة"],
 l:["التسمم بالفوسفات العضوية (انخفاض > 30% عن القاعدي يستوجب الإبعاد عن العمل)","النقص الوراثي (Dibucaine number)","أمراض الكبد وسوء التغذية","الحمل"],
 i:["إنزيم الكريات أدق لتقدير التسمم المزمن","يعود الكاذب خلال أسابيع، والكريات خلال أشهر"],
 r:["ALT (Alanine Aminotransferase)","Albumin"]},

"Arsenic": {
 w:"عنصر سام يوجد بشكلين: غير عضوي (سام، من الماء والصناعة والمبيدات) وعضوي (غير سام نسبياً، من المأكولات البحرية).",
 y:"تقييم التعرض المهني (التعدين، الصهر، حفظ الخشب) أو من مياه الآبار، والتسمم الحاد أو المزمن (اعتلال عصبي، تصبغ الجلد، خطوط ميس على الأظافر).",
 p:"تجنّب المأكولات البحرية 3–5 أيام قبل الفحص.",
 s:"بول 24 ساعة في وعاء مغسول بالحمض (أفضل)، أو دم كامل للتسمم الحاد خلال يومين. الشعر والأظافر للتعرض المزمن.",
 h:["التعرض المهني","مياه الآبار الملوثة","التسمم المتعمد","المأكولات البحرية (الزرنيخ العضوي — يحتاج فصلاً للأنواع)"],
 l:[],
 i:["المأكولات البحرية ترفع الزرنيخ الكلي بشدة ← اطلب Speciation","الدم يبقى مرتفعاً لساعات فقط"],
 r:["Blood Lead Level","Blood Mercury Level","Creatinine"]},

"Cyclosporine (Trough)": {
 w:"مستوى السيكلوسبورين المثبط للمناعة (مثبط الكالسينورين)، يتركز في الكريات الحمراء.",
 y:"منع رفض العضو المزروع مع تجنب السمية الكلوية وارتفاع الضغط وفرط نمو اللثة، وفي الأمراض المناعية.",
 p:"قبل الجرعة الصباحية (C0)، أو بعد ساعتين (C2) حسب البروتوكول.",
 s:"دم كامل EDTA بنفسجي — ليس مصلاً.",
 h:["مثبطات CYP3A4: الماكروليدات، الآزولات، ديلتيازيم، عصير الجريب فروت","أمراض الكبد"],
 l:["المحرضات: ريفامبيسين، فينيتوين، كاربامازيبين، نبتة سانت جون","عدم الالتزام"],
 i:["السحب من خط التسريب يرفعه بشدة","الطرق المناعية تقيس مستقلبات (أعلى من LC-MS/MS)"],
 r:["Tacrolimus (Trough)","Creatinine","Potassium (K⁺)","Magnesium"]},

"Methotrexate Level": {
 w:"مستوى الميثوتركسات بعد العلاج بجرعات عالية في سرطانات الدم والعظم.",
 y:"توجيه جرعات الإنقاذ بالليوكوفورين (حمض الفولينيك) لمنع السمية الشديدة (الكلى، النقي، الأغشية المخاطية).",
 p:"توقيت دقيق: 24 و48 و72 ساعة بعد بدء التسريب.",
 s:"مصل محمي من الضوء، مع تسجيل وقت السحب.",
 h:["تأخر الإطراح: الفشل الكلوي، الانصبابات (الحبن، الجنب) التي تحتجز الدواء","أدوية تقلل إطراحه: مضادات الالتهاب، البنسلينات، مثبطات مضخة البروتون"],
 l:[],
 i:["Glucarpidase (دواء معاكس) يتداخل مع الطرق المناعية لأيام ← LC-MS/MS","الجرعات المنخفضة الأسبوعية (الروماتيزم) لا تحتاج مراقبة مستوى"],
 r:["Creatinine","CBC (Complete Blood Count)","ALT (Alanine Aminotransferase)"]},

"Phenobarbital Level": {
 w:"مستوى الفينوباربيتال المضاد للصرع، عمر نصفه طويل جداً (3–5 أيام).",
 y:"ضبط الجرعة في نوبات الولدان والصرع المعاند، والاشتباه بالسمية (نعاس، رنح، تثبيط تنفس).",
 p:"قبل الجرعة (Trough)، بعد أسبوعين على الأقل من البدء أو تغيير الجرعة (الحالة المستقرة).",
 s:"مصل (أصفر)؛ تجنّب أنابيب الجل لفترة طويلة.",
 h:["> 40 µg/mL: سمية","الفالبرويك (يرفعه)","الفشل الكبدي والكلوي"],
 l:["عدم الالتزام","حديثو الولادة (حرائك متغيرة)"],
 i:["البريميدون يتحول إلى فينوباربيتال فيرفع مستواه","يحرّض استقلاب أدوية أخرى كثيرة"],
 r:["Phenytoin Level","Valproic Acid Level","Carbamazepine Level"]}
});

window.ENC_EN = Object.assign(window.ENC_EN || {}, {
"Anion Gap": {
 w:"The calculated difference between the main cation (sodium) and the measured anions (chloride and bicarbonate), representing unmeasured anions such as albumin and phosphate.",
 y:"Classifies metabolic acidosis into high-gap (added acids) and normal-gap (bicarbonate loss).",
 p:"No preparation needed.",
 s:"Calculated from sodium, chloride and bicarbonate on the same sample.",
 h:["Diabetic and alcoholic ketoacidosis","Lactic acidosis","Kidney failure","Poisonings: methanol, ethylene glycol, salicylates (MUDPILES)"],
 l:["Hypoalbuminemia (each 1 g/dL lowers it ~2.5)","IgG myeloma (cationic protein)","Lithium and bromide"],
 i:["Always correct for albumin","An opened tube loses bicarbonate and falsely raises the gap","Calculate it in the Calculators tab"],
 r:["Bicarbonate (Total CO₂)","Chloride (Cl⁻)","Sodium (Na⁺)","Lactate","Beta-Hydroxybutyrate (β-HB)","Serum Osmolality"]},

"Arterial Blood Gases (ABG)": {
 w:"Measurement of pH, PCO₂ and PO₂ in arterial blood, with calculated bicarbonate, base excess and oxygen saturation.",
 y:"Assessment of oxygenation, ventilation and acid–base status in intensive care, emergencies and mechanical ventilation.",
 p:"Record the inspired oxygen (FiO₂) and patient temperature. Allen test before radial puncture.",
 s:"Dry heparinized syringe, free of air bubbles, capped immediately and analyzed within 15 min (or 30–60 min on ice).",
 h:["PCO₂ > 45: respiratory acidosis (hypoventilation)","HCO₃ > 26: metabolic alkalosis (vomiting, diuretics)","pH > 7.45: alkalemia"],
 l:["PO₂ < 60 mmHg: hypoxemic respiratory failure","PCO₂ < 35: respiratory alkalosis (hyperventilation, anxiety, embolism)","HCO₃ < 22: metabolic acidosis","pH < 7.35: acidemia"],
 i:["Air bubbles raise PO₂ and lower PCO₂","Delay at room temperature: leukocytes consume oxygen","Excess liquid heparin lowers PCO₂ and bicarbonate (dilution)","Accidental venous sample: very low PO₂"],
 r:["Anion Gap","Lactate","Bicarbonate (Total CO₂)","Potassium (K⁺)","Carboxyhemoglobin","Methemoglobin"]},

"ALP Isoenzymes": {
 w:"Separation of alkaline phosphatase into its fractions by source — liver, bone, intestine and placenta (by electrophoresis or heat inactivation).",
 y:"Identifies the source of a raised ALP when GGT is not enough, especially in children, pregnancy and coexisting bone disease.",
 p:"Fast 8–12 h (a fatty meal raises the intestinal fraction, especially in groups O and B).",
 s:"Serum (yellow).",
 h:["Liver: biliary obstruction, liver metastases","Bone: Paget's, bone metastases, hyperparathyroidism, growth","Intestinal: after meals, cirrhosis","Placental: pregnancy, tumors (Regan isoenzyme)"],
 l:["Hypophosphatasia (all fractions)"],
 i:["Fatty meal","Bone-specific ALP (BAP) immunoassay is more accurate for bone follow-up"],
 r:["ALP (Alkaline Phosphatase)","GGT (Gamma-Glutamyl Transferase)","Osteocalcin","Calcium (Total)"]},

"LDH Isoenzymes": {
 w:"Separation of LDH into five fractions: LD1 and LD2 (heart, red cells, kidney), LD3 (lung), LD4 and LD5 (liver and muscle).",
 y:"Identifies the source of a raised LDH when unclear — hemolysis, liver or muscle injury.",
 p:"No preparation needed.",
 s:"Serum (yellow), completely non-hemolyzed, not refrigerated (LD5 is cold-labile).",
 h:["LD1 > LD2 (flipped): hemolysis, myocardial infarction (historically), testicular tumors","LD3: pulmonary embolism, pneumonia, lymphoma","LD5: liver disease, muscle injury"],
 l:[],
 i:["Hemolysis falsely raises LD1 and LD2","Refrigeration lowers LD5","Troponin has replaced it for cardiac diagnosis"],
 r:["LDH (Lactate Dehydrogenase)","Haptoglobin","ALT (Alanine Aminotransferase)","CK (Creatine Kinase, Total)"]},

"ACE (Angiotensin-Converting Enzyme)": {
 w:"An enzyme converting angiotensin I to II, secreted by pulmonary endothelium and produced abundantly by the granulomas of sarcoidosis.",
 y:"Supports the diagnosis of sarcoidosis and monitors its activity and treatment response.",
 p:"12-h fast preferred. ACE inhibitors (which lower it markedly) may need stopping per the physician.",
 s:"Serum (yellow); not EDTA (inhibits the enzyme).",
 h:["Active sarcoidosis (60–80%)","Gaucher disease","Hyperthyroidism","Diabetes","Asbestosis and silicosis"],
 l:["ACE inhibitors (captopril, enalapril)","Treated sarcoidosis"],
 i:["Limited sensitivity and specificity — not diagnostic on its own","Gene polymorphism (I/D) affects normal values","Reference range is higher in children"],
 r:["Calcium (Total)","Urine Calcium (24h)","Vitamin D (25-OH)"]},

"Acid Phosphatase (Prostatic)": {
 w:"An enzyme secreted in large amounts by the prostate; it was a prostate-cancer marker before PSA.",
 y:"Little clinical use today (replaced by PSA), but still used in forensic medicine to detect seminal fluid in assault cases.",
 p:"Do not draw within 48 h of rectal examination or prostate biopsy.",
 s:"Serum separated and frozen immediately (unstable). Swabs for forensic work.",
 h:["Prostate cancer metastatic to bone","After rectal examination or catheterization","Gaucher disease and bone disease","Seminal fluid (on forensic swabs)"],
 l:[],
 i:["Unstable at room temperature","Hemolysis raises it (red cells contain acid phosphatase)"],
 r:["PSA (Total Prostate-Specific Antigen)","ALP (Alkaline Phosphatase)"]},

"Apolipoprotein A-I & B": {
 w:"Apo A-I is the main protein of HDL; Apo B is present as one molecule on every atherogenic particle (LDL, VLDL, Lp(a)).",
 y:"Estimates the number of harmful particles more accurately than LDL, especially with high triglycerides, diabetes, metabolic syndrome and on treatment.",
 p:"No fasting required.",
 s:"Serum (yellow).",
 h:["Apo B: familial combined hyperlipidemia, diabetes, hypothyroidism, nephrotic syndrome"],
 l:["Apo A-I: smoking, diabetes, obesity, inherited HDL deficiency (Tangier)","Apo B: hyperthyroidism, statin therapy"],
 i:["A high Apo B/Apo A-I ratio is a strong risk indicator","Better standardized between labs than direct LDL"],
 r:["LDL Cholesterol","HDL Cholesterol","Lipoprotein(a) [Lp(a)]","Triglycerides"]},

"Neonatal Bilirubin (Total & Fractionated)": {
 w:"Total and direct bilirubin in newborns, interpreted against the infant's age in hours on a dedicated nomogram.",
 y:"Evaluation of neonatal jaundice, the need for phototherapy or exchange transfusion, and detection of cholestasis (biliary atresia).",
 p:"Record age in hours, gestational age and risk factors (hemolysis, G6PD).",
 s:"Heel-stick capillary blood in a small light-protected tube, or transcutaneous meter for screening.",
 h:["Indirect: physiological jaundice, hemolysis (ABO or Rh incompatibility, G6PD), breast-milk jaundice, bruising","Direct > 1 mg/dL: cholestasis, biliary atresia, infection, metabolic disease — urgent"],
 l:[],
 i:["Light (including phototherapy lamps) lowers it rapidly","Hemolysis of heel-stick samples","Transcutaneous readings are unreliable after phototherapy"],
 r:["Bilirubin (Total)","Bilirubin (Direct)","G6PD (Glucose-6-Phosphate Dehydrogenase)","Direct Coombs Test (DAT)","ABO Blood Grouping"]},

"Alpha-1 Antitrypsin": {
 w:"A liver-made protein that inhibits neutrophil elastase in the lungs; also an acute-phase protein.",
 y:"Screening for inherited deficiency in early emphysema (< 45 y or in non-smokers), unexplained liver disease and infant cholestasis.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Inflammation and infection (acute-phase)","Pregnancy and estrogens"],
 l:["Inherited deficiency (PiZZ or PiSZ phenotype)","Nephrotic syndrome","Malnutrition"],
 i:["Inflammation may raise a deficient carrier's level into the normal range → request phenotype or genotype","On SPEP, an absent alpha-1 band is a clue"],
 r:["ALT (Alanine Aminotransferase)","Serum Protein Electrophoresis (SPEP)","CRP (C-Reactive Protein)"]},

"Osteocalcin": {
 w:"A vitamin K-dependent protein made by osteoblasts, reflecting bone formation.",
 y:"Assessing bone turnover in osteoporosis and Paget's disease, and monitoring response to anti-osteoporotic therapy.",
 p:"Fasting morning sample (diurnal variation, peaking at night).",
 s:"Serum or EDTA on ice, separated and frozen promptly (unstable).",
 h:["Hyperparathyroidism","Paget's disease and bone metastases","Hyperthyroidism","Growth in children","Menopause (high turnover)"],
 l:["Hypoparathyroidism and hypothyroidism","Corticosteroid therapy","Antiresorptives (bisphosphonates)"],
 i:["Unstable and degrades in the sample","Kidney failure raises it (renally cleared)","P1NP and CTX are more widely used today"],
 r:["ALP Isoenzymes","PTH (Parathyroid Hormone)","Vitamin D (25-OH)","Calcium (Total)"]},

"Sweat Chloride Test": {
 w:"Measurement of chloride in sweat after stimulating sweating with pilocarpine by iontophoresis.",
 y:"The reference test for diagnosing cystic fibrosis in infants with a positive newborn screen, or with chronic respiratory and digestive symptoms.",
 p:"After 2 weeks of age and > 2 kg. No creams on the skin. Child clinically stable and well hydrated.",
 s:"≥ 15 µL of sweat over 30 min (Macroduct), analyzed directly.",
 h:["≥ 60 mmol/L: cystic fibrosis","30–59: intermediate → CFTR genetic testing","Adrenal insufficiency, malnutrition and hypothyroidism (non-specific elevation)"],
 l:[],
 i:["Insufficient sweat is the main cause of test failure","Dehydration and edema affect the result","Positive results must be confirmed twice or genetically"],
 r:["Newborn Screening Panel (Dried Blood Spot)","Fecal Fat (Qualitative / 72h)","Sputum Culture"]},

"Tryptase": {
 w:"An enzyme released by activated mast cells; it rises in blood 15–60 min after an allergic reaction.",
 y:"Retrospective confirmation of anaphylaxis, and diagnosis of systemic mastocytosis (baseline > 20 µg/L).",
 p:"Within 1–4 h of the reaction, plus a baseline sample ≥ 24 h later for comparison.",
 s:"Serum (yellow).",
 h:["Anaphylaxis and severe allergic reactions (especially drug and perioperative)","Systemic mastocytosis","Hereditary alpha-tryptasemia (HαT)","Myeloid neoplasms"],
 l:[],
 i:["May be normal in food anaphylaxis","Timing matters: returns to baseline within 24 h","Rule: a rise > 20% + 2 µg/L over baseline supports anaphylaxis"],
 r:["IgE (Total)","Specific IgE (Allergen Panel)","CBC (Complete Blood Count)"]},

"Vitamin A (Retinol)": {
 w:"A fat-soluble vitamin essential for night vision, epithelial integrity and immunity, stored in the liver.",
 y:"Evaluating deficiency (night blindness, xerophthalmia) in malabsorption and malnutrition, and detecting toxicity from supplements and retinoid drugs.",
 p:"Overnight fast; stop supplements 24 h before.",
 s:"Serum protected from light (tube wrapped in foil), frozen if delayed.",
 h:["Excess supplements and cod-liver oil","Chronic kidney disease","Hyperlipidemia"],
 l:["Malnutrition","Fat malabsorption (celiac disease, cystic fibrosis, cholestasis)","Liver disease","Zinc deficiency","Acute inflammation (transiently low)"],
 i:["Light degrades it","Interpret with retinol-binding protein (RBP) during inflammation"],
 r:["Vitamin E (Tocopherol)","Zinc","Albumin","Prealbumin (Transthyretin)"]},

"Vitamin B1 (Thiamine)": {
 w:"A vitamin essential for carbohydrate metabolism (coenzyme as thiamine pyrophosphate, TPP).",
 y:"Diagnosing deficiency in alcohol use disorder, Wernicke encephalopathy, beriberi, hyperemesis, bariatric surgery and refeeding syndrome.",
 p:"Fasting, and before giving thiamine or glucose solutions.",
 s:"Whole blood EDTA protected from light (80% is inside red cells), frozen.",
 h:["Supplements"],
 l:["Alcohol","Malnutrition and bariatric surgery","Chronic and pregnancy-related vomiting","Dialysis","Diuretics (furosemide)"],
 i:["Never delay treatment waiting for the result when Wernicke is suspected","Serum is inaccurate → whole blood is preferred"],
 r:["Lactate","Magnesium","Phosphorus","Vitamin B6 (Pyridoxal Phosphate)"]},

"Vitamin B6 (Pyridoxal Phosphate)": {
 w:"The active form of vitamin B6, coenzyme for more than 100 reactions in amino-acid metabolism and heme synthesis.",
 y:"Evaluating neuropathy, sideroblastic anemia, patients on isoniazid, dialysis or alcohol, and detecting toxicity from supplements.",
 p:"Overnight fast; stop supplements 24 h before.",
 s:"EDTA plasma protected from light, frozen.",
 h:["Excess supplements (sensory neuropathy)"],
 l:["Alcohol","Isoniazid, hydralazine and penicillamine","Dialysis","Malabsorption and pregnancy"],
 i:["Light degrades it","High ALP breaks it down and lowers it","Inflammation lowers it"],
 r:["Vitamin B1 (Thiamine)","ALT (Alanine Aminotransferase)","Homocysteine"]},

"Vitamin C (Ascorbic Acid)": {
 w:"An antioxidant vitamin essential for collagen synthesis and iron absorption.",
 y:"Diagnosing scurvy (bleeding gums, perifollicular hemorrhage, poor wound healing) in malnutrition, the elderly and substance use.",
 p:"Fasting; stop supplements 24 h before.",
 s:"Plasma on ice, protected from light, separated, stabilized (metaphosphoric acid) and frozen immediately — highly unstable.",
 h:["High-dose supplements"],
 l:["Scurvy (< 0.2 mg/dL)","Smoking","Alcohol","Dialysis","Pregnancy","Acute illness"],
 i:["The least stable vitamin","High doses interfere with the urine dipstick (blood, glucose, nitrite) and some glucose assays"],
 r:["Iron (Fe)","CBC (Complete Blood Count)","Urinalysis – Dipstick (10-parameter)"]},

"Vitamin E (Tocopherol)": {
 w:"A fat-soluble antioxidant vitamin protecting cell and nerve membranes.",
 y:"Evaluating chronic fat malabsorption, neuropathy and ataxia, and premature infants (hemolytic anemia).",
 p:"Overnight fast.",
 s:"Serum protected from light, frozen.",
 h:["Supplements"],
 l:["Fat malabsorption (cystic fibrosis, cholestasis, celiac disease)","Prematurity","Inherited abetalipoproteinemia"],
 i:["Interpret relative to total lipids (ratio to cholesterol + triglycerides) because it is carried on them"],
 r:["Vitamin A (Retinol)","Fecal Fat (Qualitative / 72h)","Cholesterol (Total)"]},

"Zinc": {
 w:"A trace element essential for over 300 enzymes, growth, immunity, wound healing and taste.",
 y:"Evaluating deficiency — growth delay, perioral and acral rash (acrodermatitis enteropathica), hair loss, poor wound healing, malabsorption and parenteral nutrition — and monitoring Wilson therapy.",
 p:"Fasting morning sample (food lowers it).",
 s:"Metal-free trace-element tube (royal blue), non-hemolyzed, separated within 2 h.",
 h:["Supplements and occupational exposure (metal-fume fever)","Contamination from tube or stopper"],
 l:["Malabsorption and chronic diarrhea","Alcohol and liver disease","Burns and parenteral nutrition","Inherited acrodermatitis enteropathica","Acute inflammation and hypoalbuminemia"],
 i:["Contamination from ordinary tubes and skin is very common","Hemolysis raises it (red cells are zinc-rich)","Diurnal and meal-related variation"],
 r:["Copper (Serum)","Albumin","ALP (Alkaline Phosphatase)","Vitamin A (Retinol)"]},

"Copper (Serum)": {
 w:"A trace element, 90% carried on ceruloplasmin, essential for many enzymes, blood formation and nerves.",
 y:"Evaluating Wilson disease (with ceruloplasmin and urine copper) and copper deficiency (anemia, neutropenia and B12-like myelopathy after gastric surgery or excess zinc).",
 p:"No special preparation.",
 s:"Metal-free trace-element tube (royal blue).",
 h:["Inflammation, pregnancy and oral contraceptives (raised ceruloplasmin)","Copper poisoning","Cholestasis"],
 l:["Wilson disease (total copper low but free copper high)","Copper deficiency: gastric surgery, excess zinc, parenteral nutrition","Menkes disease","Nephrotic syndrome"],
 i:["In Wilson disease, 24-h urine copper > 100 µg/day is more important","Contamination"],
 r:["Ceruloplasmin","Zinc","CBC (Complete Blood Count)","ALT (Alanine Aminotransferase)"]},

"Selenium": {
 w:"A trace element in antioxidant enzymes (glutathione peroxidase) and in thyroid-hormone metabolism.",
 y:"Evaluating deficiency in long-term parenteral nutrition, malabsorption, dialysis and unexplained cardiomyopathy, and detecting supplement toxicity.",
 p:"No preparation needed.",
 s:"Trace-element tube (royal blue).",
 h:["Excess supplements (garlic breath, hair and nail loss)","Occupational exposure"],
 l:["Parenteral nutrition without supplementation","Malabsorption","Dialysis","Selenium-poor regions (Keshan disease)"],
 i:["Inflammation lowers serum selenium"],
 r:["Zinc","Copper (Serum)","TSH (Thyroid Stimulating Hormone)"]},

"Lactose Tolerance / Hydrogen Breath Test": {
 w:"After drinking a dose of lactose, hydrogen is measured in the breath (produced by bacterial fermentation of unabsorbed sugar), or the rise in blood glucose is measured.",
 y:"Diagnosis of lactose intolerance (lactase deficiency), and small-intestinal bacterial overgrowth (using glucose or lactulose).",
 p:"12-h fast, low-fiber diet the day before, no smoking or exercise. Stop antibiotics 4 weeks and laxatives 1 week.",
 s:"Breath samples every 15–30 min for 2–3 h (± fluoride blood for glucose).",
 h:["Hydrogen rise ≥ 20 ppm above baseline: lactose malabsorption","Early rise within 90 min: bacterial overgrowth"],
 l:["Glucose rise < 20 mg/dL: lactase deficiency (blood method)"],
 i:["Recent antibiotics give false negatives","10–15% of people produce methane instead of hydrogen → measure methane too","Smoking raises baseline hydrogen"],
 r:["Stool Reducing Substances & pH","D-Xylose Absorption Test","tTG-IgA (Tissue Transglutaminase)"]},

"Cholinesterase (Pseudo- & RBC)": {
 w:"Two enzymes that hydrolyze acetylcholine: pseudocholinesterase (plasma, liver-made) and red-cell (true) cholinesterase, which mirrors nerve-tissue activity.",
 y:"Diagnosing organophosphate and carbamate pesticide poisoning and monitoring exposed workers, and detecting inherited pseudocholinesterase deficiency before succinylcholine anesthesia (prolonged apnea).",
 p:"For workers: a baseline value before the spraying season for comparison.",
 s:"Serum for pseudocholinesterase, EDTA for red-cell enzyme.",
 h:["Nephrotic syndrome","Hyperthyroidism and obesity"],
 l:["Organophosphate poisoning (a fall > 30% from baseline requires removal from work)","Inherited deficiency (dibucaine number)","Liver disease and malnutrition","Pregnancy"],
 i:["Red-cell enzyme is more accurate for chronic exposure","Plasma enzyme recovers within weeks, red-cell within months"],
 r:["ALT (Alanine Aminotransferase)","Albumin"]},

"Arsenic": {
 w:"A toxic element existing in two forms: inorganic (toxic; from water, industry and pesticides) and organic (relatively non-toxic; from seafood).",
 y:"Evaluating occupational exposure (mining, smelting, wood preservation) or well-water exposure, and acute or chronic poisoning (neuropathy, skin pigmentation, Mees' lines on nails).",
 p:"Avoid seafood for 3–5 days before testing.",
 s:"24-h urine in an acid-washed container (preferred), or whole blood for acute poisoning within 2 days. Hair and nails for chronic exposure.",
 h:["Occupational exposure","Contaminated well water","Deliberate poisoning","Seafood (organic arsenic — needs speciation)"],
 l:[],
 i:["Seafood raises total arsenic markedly → request speciation","Blood levels stay high for only hours"],
 r:["Blood Lead Level","Blood Mercury Level","Creatinine"]},

"Cyclosporine (Trough)": {
 w:"Level of cyclosporine, a calcineurin-inhibitor immunosuppressant concentrated in red cells.",
 y:"Preventing graft rejection while avoiding nephrotoxicity, hypertension and gum hyperplasia; also used in autoimmune disease.",
 p:"Before the morning dose (C0), or 2 h after (C2) per protocol.",
 s:"Whole blood purple EDTA — not serum.",
 h:["CYP3A4 inhibitors: macrolides, azoles, diltiazem, grapefruit juice","Liver disease"],
 l:["Inducers: rifampicin, phenytoin, carbamazepine, St John's wort","Non-adherence"],
 i:["Drawing from the infusion line raises it markedly","Immunoassays measure metabolites (higher than LC-MS/MS)"],
 r:["Tacrolimus (Trough)","Creatinine","Potassium (K⁺)","Magnesium"]},

"Methotrexate Level": {
 w:"Methotrexate level after high-dose therapy for hematologic and bone cancers.",
 y:"Guides leucovorin (folinic acid) rescue to prevent severe toxicity (kidney, marrow, mucosa).",
 p:"Precise timing: 24, 48 and 72 h after the start of infusion.",
 s:"Serum protected from light, with sampling time recorded.",
 h:["Delayed clearance: kidney failure, third-space fluids (ascites, effusions) retaining the drug","Drugs reducing excretion: NSAIDs, penicillins, PPIs"],
 l:[],
 i:["Glucarpidase (antidote) interferes with immunoassays for days → LC-MS/MS","Low weekly doses (rheumatology) do not require level monitoring"],
 r:["Creatinine","CBC (Complete Blood Count)","ALT (Alanine Aminotransferase)"]},

"Phenobarbital Level": {
 w:"Level of phenobarbital, an antiepileptic with a very long half-life (3–5 days).",
 y:"Dose adjustment in neonatal seizures and refractory epilepsy, and suspected toxicity (drowsiness, ataxia, respiratory depression).",
 p:"Trough, at least 2 weeks after starting or changing the dose (steady state).",
 s:"Serum (yellow); avoid prolonged contact with gel tubes.",
 h:["> 40 µg/mL: toxicity","Valproate (raises it)","Liver and kidney failure"],
 l:["Non-adherence","Neonates (variable kinetics)"],
 i:["Primidone is converted to phenobarbital and raises its level","Induces the metabolism of many other drugs"],
 r:["Phenytoin Level","Valproic Acid Level","Carbamazepine Level"]}
});

/* New tests from Fischbach & Dunning, 9th ed. — rewritten (AR + EN). Group 4: Immunology, autoimmunity & serology. */
window.TESTS_EXTRA = (window.TESTS_EXTRA || []).concat([
 {n:"Anticentromere Antibody",c:"Immunology",s:"Serum (Yellow)",r:"Negative",u:"Limited systemic sclerosis (CREST)"},
 {n:"Anticardiolipin Antibodies (IgG/IgM)",c:"Immunology",s:"Serum (Yellow)",r:"< 15 GPL / < 12 MPL; > 40 significant",u:"Antiphospholipid syndrome"},
 {n:"AMA (Antimitochondrial Antibody)",c:"Immunology",s:"Serum (Yellow)",r:"Negative (< 1:20 IFA)",u:"Primary biliary cholangitis"},
 {n:"ASMA (Anti-Smooth Muscle Antibody)",c:"Immunology",s:"Serum (Yellow)",r:"Negative (< 1:20 IFA)",u:"Autoimmune hepatitis type 1"},
 {n:"Anti-LKM-1",c:"Immunology",s:"Serum (Yellow)",r:"Negative (< 20 U)",u:"Autoimmune hepatitis type 2"},
 {n:"Anti-Parietal Cell Antibody",c:"Immunology",s:"Serum (Yellow)",r:"Negative",u:"Pernicious anemia, atrophic gastritis"},
 {n:"Anti-GBM Antibody",c:"Immunology",s:"Serum (Yellow)",r:"< 20 EU/mL",u:"Goodpasture (anti-GBM) disease"},
 {n:"AChR Antibody (Acetylcholine Receptor)",c:"Immunology",s:"Serum (Yellow)",r:"< 0.02 nmol/L",u:"Myasthenia gravis"},
 {n:"Anti-Insulin Antibody",c:"Immunology",s:"Serum (Yellow)",r:"< 0.4 U/mL (method-dependent)",u:"Insulin resistance, insulin autoimmune hypoglycemia"},
 {n:"Deamidated Gliadin Peptide (DGP) Antibodies",c:"Immunology",s:"Serum (Yellow)",r:"< 20 U/mL",u:"Celiac disease (IgA deficiency, children < 2 y)"},
 {n:"Antisperm Antibodies",c:"Immunology",s:"Serum / semen",r:"< 20% sperm bound",u:"Immunologic infertility"},
 {n:"Specific IgE (Allergen Panel)",c:"Immunology",s:"Serum (Yellow)",r:"< 0.35 kU/L (class 0)",u:"Food, inhalant, drug & venom allergy"},
 {n:"Latex-Specific IgE",c:"Immunology",s:"Serum (Yellow)",r:"< 0.35 kU/L",u:"Latex allergy (health-care workers)"},
 {n:"Cryoglobulins",c:"Immunology",s:"Serum, kept at 37 °C until separated",r:"Negative after 72 h at 4 °C",u:"Vasculitis, hepatitis C, Raynaud"},
 {n:"CH50 (Total Hemolytic Complement)",c:"Immunology",s:"Serum, separated & frozen",r:"30–60 U/mL (method-dependent)",u:"Complement deficiency screen"},
 {n:"C1 Esterase Inhibitor",c:"Immunology",s:"Serum / citrate, frozen",r:"Level 14–40 mg/dL | Function > 67%",u:"Hereditary angioedema"},
 {n:"Immunofixation Electrophoresis (IFE)",c:"Immunology",s:"Serum (Yellow) or urine",r:"No monoclonal band",u:"Typing M-protein (myeloma, MGUS)"},
 {n:"ENA Panel (Jo-1, RNP, Sm, SSA, SSB, Scl-70)",c:"Immunology",s:"Serum (Yellow)",r:"Negative (< 20 U/mL)",u:"Specify ANA-positive connective tissue disease"},
 {n:"Lyme Disease Serology",c:"Immunology",s:"Serum (Yellow)",r:"Negative EIA / Western blot",u:"Borrelia burgdorferi infection"},
 {n:"H. pylori IgG Antibody",c:"Immunology",s:"Serum (Yellow)",r:"Negative",u:"Past/present exposure (not test of cure)"},
 {n:"HSV-1/HSV-2 IgG",c:"Immunology",s:"Serum (Yellow)",r:"Negative (index < 0.9)",u:"Herpes simplex exposure, type-specific"},
 {n:"Varicella-Zoster IgG",c:"Immunology",s:"Serum (Yellow)",r:"Positive = immune",u:"Immunity check (HCWs, pregnancy)"},
 {n:"Measles (Rubeola) IgG",c:"Immunology",s:"Serum (Yellow)",r:"Positive = immune",u:"Immunity, outbreak investigation"},
 {n:"Parvovirus B19 IgM / IgG",c:"Immunology",s:"Serum (Yellow)",r:"Negative IgM",u:"Fifth disease, aplastic crisis, hydrops"},
 {n:"HTLV-I/II Antibody",c:"Immunology",s:"Serum / plasma",r:"Non-reactive",u:"Donor screening, ATL, HAM/TSP"},
 {n:"Aspergillus Antibody / Galactomannan",c:"Immunology",s:"Serum (Yellow) or BAL",r:"GM index < 0.5",u:"Invasive aspergillosis, ABPA, aspergilloma"},
 {n:"Entamoeba histolytica Antibody",c:"Immunology",s:"Serum (Yellow)",r:"Negative (< 1:32 IFA)",u:"Amebic liver abscess"},
 {n:"TORCH Panel",c:"Immunology",s:"Serum (Yellow)",r:"IgM negative",u:"Congenital infection screen (Toxo, Rubella, CMV, HSV)"}
]);

window.ENC = Object.assign(window.ENC || {}, {
"Anticentromere Antibody": {
 w:"أضداد ضد بروتينات السنترومير، تعطي نمطاً منقطاً مميزاً (Discrete speckled) على خلايا HEp-2.",
 y:"تشخيص التصلب الجلدي المحدود (متلازمة CREST: تكلس، رينو، خلل المريء، تصلب الأصابع، توسع الشعيرات)، وتنبئ بخطر ارتفاع ضغط الشريان الرئوي.",
 p:"لا يحتاج تحضيراً.",
 s:"مصل (أصفر).",
 h:["التصلب الجلدي المحدود (50–90%)","التهاب الأقنية الصفراوية الأولي أحياناً","ظاهرة رينو المعزولة (خطر تطور المرض)"],
 l:[],
 i:["نادراً ما يجتمع مع Anti-Scl-70","النمط يُرى على ANA بالتألق ويُؤكد بالـ ELISA"],
 r:["ANA (Antinuclear Antibodies)","Anti-Scl-70 (Topoisomerase I)","ENA Panel (Jo-1, RNP, Sm, SSA, SSB, Scl-70)"]},

"Anticardiolipin Antibodies (IgG/IgM)": {
 w:"أضداد ضد الكارديوليبين (فوسفوليبيد) المرتبط بالبروتين β2-glycoprotein I.",
 y:"جزء من معايير متلازمة الأضداد الفوسفوليبيدية: جلطات وريدية أو شريانية، إجهاضات متكررة، أو مضاعفات حمل متأخرة.",
 p:"بعيداً عن العدوى الحادة إن أمكن.",
 s:"مصل (أصفر).",
 h:["> 40 GPL أو MPL: متلازمة الأضداد الفوسفوليبيدية (يُؤكد بعد 12 أسبوعاً)","الذئبة الحمامية","العدوى (الزهري، HIV، التهاب الكبد C) والأدوية — غالباً عابرة ومنخفضة"],
 l:[],
 i:["المستويات المنخفضة العابرة شائعة ولا تُعتبر تشخيصية","يُطلب مع مضاد التخثر الذئبي و Anti-β2GPI","لا يتأثر بمضادات التخثر بخلاف الذئبي"],
 r:["Lupus Anticoagulant","ANA (Antinuclear Antibodies)","Syphilis RPR/VDRL","Platelet Count"]},

"AMA (Antimitochondrial Antibody)": {
 w:"أضداد ضد إنزيمات الغشاء الداخلي للميتوكوندريا (خاصة M2).",
 y:"الواسم الأساسي لتشخيص التهاب الأقنية الصفراوية الأولي (PBC): حكة وإرهاق مع ALP مرتفع عند امرأة في منتصف العمر.",
 p:"لا يحتاج تحضيراً.",
 s:"مصل (أصفر).",
 h:["التهاب الأقنية الصفراوية الأولي (> 90–95%)","التهاب الكبد المناعي أحياناً","التصلب الجلدي المحدود"],
 l:[],
 i:["قد يظهر قبل الأعراض بسنوات — يحتاج متابعة ALP","Anti-M2 بالـ ELISA أكثر نوعية من التألق"],
 r:["ALP (Alkaline Phosphatase)","GGT (Gamma-Glutamyl Transferase)","IgM","ASMA (Anti-Smooth Muscle Antibody)"]},

"ASMA (Anti-Smooth Muscle Antibody)": {
 w:"أضداد ضد مكونات الهيكل الخلوي للعضلات الملساء (خاصة F-actin).",
 y:"تشخيص التهاب الكبد المناعي الذاتي من النوع الأول، مع ANA و IgG المرتفع.",
 p:"لا يحتاج تحضيراً.",
 s:"مصل (أصفر).",
 h:["التهاب الكبد المناعي النوع 1 (عيار ≥ 1:80)","التهاب الكبد الفيروسي والعدوى (عيار منخفض عابر)"],
 l:[],
 i:["العيار المنخفض غير نوعي","Anti-F-actin أكثر نوعية"],
 r:["ANA (Antinuclear Antibodies)","IgG","ALT (Alanine Aminotransferase)","Anti-LKM-1","AMA (Antimitochondrial Antibody)"]},

"Anti-LKM-1": {
 w:"أضداد ضد الميكروسومات الكبدية الكلوية، موجهة ضد إنزيم السيتوكروم CYP2D6.",
 y:"تشخيص التهاب الكبد المناعي من النوع الثاني (أكثر عند الأطفال والشابات، وأشد).",
 p:"لا يحتاج تحضيراً.",
 s:"مصل (أصفر).",
 h:["التهاب الكبد المناعي النوع 2","التهاب الكبد C المزمن (5%)","التهاب الكبد الدوائي"],
 l:[],
 i:["نمط التألق قد يُخلط مع AMA ← التأكيد بالـ ELISA"],
 r:["ASMA (Anti-Smooth Muscle Antibody)","ANA (Antinuclear Antibodies)","ALT (Alanine Aminotransferase)","Hepatitis C Antibody"]},

"Anti-Parietal Cell Antibody": {
 w:"أضداد ضد مضخة البروتون (H⁺/K⁺-ATPase) في الخلايا الجدارية للمعدة.",
 y:"دعم تشخيص فقر الدم الوبيل والتهاب المعدة الضموري المناعي، مع أضداد العامل الداخلي.",
 p:"لا يحتاج تحضيراً.",
 s:"مصل (أصفر).",
 h:["فقر الدم الوبيل (~90%)","التهاب المعدة الضموري","أمراض الدرق المناعية والسكري النوع 1","كبار السن (حتى 10%)"],
 l:[],
 i:["حساس لكنه غير نوعي ← أضداد العامل الداخلي أكثر نوعية","يقل مع تقدم ضمور المعدة"],
 r:["Intrinsic Factor Antibody","Vitamin B12","Gastrin","CBC (Complete Blood Count)"]},

"Anti-GBM Antibody": {
 w:"أضداد ضد الكولاجين النوع IV في الغشاء القاعدي للكبيبات والأسناخ الرئوية.",
 y:"تشخيص داء الأضداد ضد الغشاء القاعدي (غودباستشر): التهاب كبيبات سريع التقدم مع نزف رئوي — حالة طارئة تحتاج تبديل البلازما.",
 p:"لا يحتاج تحضيراً. يُطلب كفحص عاجل.",
 s:"مصل (أصفر).",
 h:["داء Anti-GBM / غودباستشر (> 95%)","بعض حالات ANCA المتزامنة (يُطلبان معاً)"],
 l:[],
 i:["الخزعة الكلوية بالتألق المناعي (ترسب خطي لـ IgG) تؤكد التشخيص","انخفاض العيار يتبع الاستجابة للعلاج"],
 r:["ANCA (MPO / PR3)","Creatinine","Urine Microscopy (Sediment)","Direct Immunofluorescence (Skin / Kidney Biopsy)"]},

"AChR Antibody (Acetylcholine Receptor)": {
 w:"أضداد ترتبط بمستقبلات الأسيتيل كولين في الوصل العصبي العضلي وتعيق نقل الإشارة.",
 y:"تأكيد الوهن العضلي الوبيل (ضعف متزايد مع الجهد، تدلي الجفن، ازدواج الرؤية).",
 p:"لا يحتاج تحضيراً. سجّل العلاج المثبط للمناعة.",
 s:"مصل (أصفر).",
 h:["الوهن العضلي المعمم (85–90%)","الوهن العيني (50%)","ورم التوتة (Thymoma)"],
 l:[],
 i:["السلبية لا تستبعد ← افحص أضداد MuSK و LRP4","المثبطات المناعية تخفضه"],
 r:["TSH (Thyroid Stimulating Hormone)","CK (Creatine Kinase, Total)"]},

"Anti-Insulin Antibody": {
 w:"أضداد ضد الإنسولين، تنشأ إما بعد العلاج بالإنسولين أو ذاتياً (قبل أي علاج).",
 y:"تقييم مقاومة الإنسولين الشديدة غير المفسّرة عند المعالجين، ونقص السكر المناعي الذاتي (متلازمة هيراتا)، وكواسم مبكر للسكري النوع 1 عند الأطفال.",
 p:"سجّل العلاج بالإنسولين ومدته.",
 s:"مصل (أصفر).",
 h:["العلاج بالإنسولين","متلازمة الإنسولين المناعية الذاتية (بعد أدوية فيها مجموعة SH مثل الميثيمازول)","السكري النوع 1 قبل العلاج"],
 l:[],
 i:["لا يُفرّق بين أضداد العلاج والأضداد الذاتية بعد بدء الإنسولين","يتداخل مع قياس الإنسولين"],
 r:["Insulin (Fasting)","C-Peptide","Glucose (Fasting)","HbA1c (Glycated Hemoglobin)"]},

"Deamidated Gliadin Peptide (DGP) Antibodies": {
 w:"أضداد IgA و IgG ضد ببتيدات الغليادين المعدلة (من الغلوتين)، وقد حلّت محل أضداد الغليادين القديمة الأقل نوعية.",
 y:"تحري الداء البطني عند مرضى نقص IgA (DGP-IgG) والأطفال تحت عمرين، ومتابعة الالتزام بالحمية.",
 p:"تناول الغلوتين بانتظام 6 أسابيع قبل الفحص.",
 s:"مصل (أصفر).",
 h:["الداء البطني","التهاب الجلد الحلئي الشكل"],
 l:[],
 i:["الحمية الخالية من الغلوتين تخفضه","IgA-DGP يكون سلبياً كاذباً عند نقص IgA ← استخدم IgG-DGP"],
 r:["tTG-IgA (Tissue Transglutaminase)","IgA","Ferritin","CBC (Complete Blood Count)"]},

"Antisperm Antibodies": {
 w:"أضداد ضد سطح الحيوانات المنوية في دم الرجل أو المرأة أو في السائل المنوي، تعيق الحركة والإخصاب.",
 y:"تقييم العقم غير المفسّر، تكتل النطاف في التحليل، أو بعد قطع القناة الدافقة أو رضوض الخصية.",
 p:"للسائل المنوي: امتناع 2–7 أيام.",
 s:"مصل، أو سائل منوي طازج (فحص MAR أو الكريات المناعية).",
 h:["> 50% من النطاف مرتبطة: عقم مناعي مرجح","بعد قطع القناة وإعادة وصلها","الرضوض والالتهابات والانسداد"],
 l:[],
 i:["الأضداد على رأس النطاف أكثر تأثيراً من الذيل","الفحص المباشر على النطاف أدق من المصل"],
 r:["Semen Analysis","FSH (Follicle Stimulating Hormone)","Total Testosterone"]},

"Specific IgE (Allergen Panel)": {
 w:"قياس كمي لأضداد IgE الموجهة ضد مسببات حساسية محددة (أغذية، غبار، حبوب طلع، فطريات، حيوانات، أدوية، سموم الحشرات).",
 y:"تحديد المسبب في الربو والتهاب الأنف والإكزيما والحساسية الغذائية، وبديل لاختبار وخز الجلد عند الأمراض الجلدية أو تناول مضادات الهيستامين.",
 p:"لا يحتاج إيقاف مضادات الهيستامين (بخلاف اختبار الجلد).",
 s:"مصل (أصفر).",
 h:["الصنف 1 (0.35–0.7) وأعلى: تحسس — والصنف الأعلى يعني احتمالاً أكبر للتفاعل السريري"],
 l:[],
 i:["التحسس لا يعني دائماً حساسية سريرية ← يُفسّر مع القصة المرضية","IgE الكلي العالي جداً يسبب ارتباطاً غير نوعي","التفاعل المتصالب (مثلاً حبوب الطلع والفواكه)"],
 r:["IgE (Total)","Tryptase","Latex-Specific IgE","WBC Differential (Absolute Counts)"]},

"Latex-Specific IgE": {
 w:"أضداد IgE ضد بروتينات اللاتكس (المطاط الطبيعي).",
 y:"تقييم حساسية اللاتكس عند العاملين الصحيين، مرضى السنسنة المشقوقة والعمليات المتكررة، وقبل الجراحة عند وجود قصة تفاعل.",
 p:"لا يحتاج تحضيراً.",
 s:"مصل (أصفر).",
 h:["≥ 0.35 kU/L: تحسس للاتكس","التفاعل المتصالب مع الموز والأفوكادو والكيوي والكستناء"],
 l:[],
 i:["حساسيته متوسطة ← السلبية مع قصة قوية تحتاج تقييماً إضافياً","لا يكشف التهاب الجلد التماسي المتأخر (النوع IV)"],
 r:["Specific IgE (Allergen Panel)","IgE (Total)","Tryptase"]},

"Cryoglobulins": {
 w:"بروتينات مناعية تترسب في البرودة (< 37 °C) وتذوب عند التدفئة، وتسبب التهاب الأوعية وانسدادها.",
 y:"تقييم الفرفرية والتهاب الأوعية الجلدي وآلام المفاصل والاعتلال العصبي والتهاب الكلى، خاصة مع التهاب الكبد C، ورينو الشديد.",
 p:"صيام 8 ساعات (الدهون تعكّر المصل).",
 s:"أنابيب مدفأة مسبقاً، تُنقل وتُخثّر وتُثفّل بـ 37 °C، ثم يُحفظ المصل بـ 4 °C ويُفحص يومياً حتى 7 أيام.",
 h:["النوع I: أحادي النسيلة (الورم النقوي، والدنستروم)","النوع II و III (مختلط): التهاب الكبد C، شوغرن، الذئبة"],
 l:[],
 i:["أهم خطأ: تبريد العينة قبل فصل المصل ← سلبية كاذبة","يرافقه غالباً C4 منخفض جداً و RF إيجابي"],
 r:["Hepatitis C Antibody","Complement C4","RF (Rheumatoid Factor)","Immunofixation Electrophoresis (IFE)"]},

"CH50 (Total Hemolytic Complement)": {
 w:"يقيس القدرة الوظيفية للمسار الكلاسيكي للمتممة كاملاً (C1 إلى C9) على تحليل كريات حمراء مغلفة بالأضداد.",
 y:"تحري نقص أحد مكونات المتممة (عدوى متكررة بالنيسيريا، ذئبة مبكرة)، ومتابعة النشاط في الذئبة والتهاب الكلى.",
 p:"لا يحتاج تحضيراً.",
 s:"مصل يُفصل خلال ساعة ويُجمّد فوراً (المتممة غير ثابتة).",
 h:["الالتهاب الحاد"],
 l:["النقص الوراثي لأحد المكونات (غالباً صفر)","الذئبة النشطة والتهاب الكبيبات","الغلوبولين البردي","أمراض الكبد الشديدة"],
 i:["التعامل الخاطئ مع العينة أهم سبب للانخفاض الكاذب","AH50 يقيس المسار البديل"],
 r:["Complement C3","Complement C4","C1 Esterase Inhibitor"]},

"C1 Esterase Inhibitor": {
 w:"بروتين ينظم المسار الكلاسيكي للمتممة ونظام الكينين (البراديكينين).",
 y:"تشخيص الوذمة الوعائية الوراثية: نوبات تورم متكررة بلا حكة ولا شرى في الوجه والحنجرة والأمعاء، لا تستجيب للكورتيزون ومضادات الهيستامين.",
 p:"بين النوبات أو أثناءها.",
 s:"مصل أو سترات، يُفصل ويُجمّد بسرعة (لقياس الوظيفة).",
 h:["الالتهاب (بروتين طور حاد)"],
 l:["النوع 1: الكمية والوظيفة منخفضتان","النوع 2: الكمية طبيعية والوظيفة منخفضة","النقص المكتسب: اللمفوما وأمراض المناعة (C1q منخفض أيضاً)"],
 i:["الكمية الطبيعية لا تستبعد النوع 2 ← اطلب الوظيفة دائماً","C4 المنخفض فحص تحرٍّ جيد","مثبطات ACE تسبب وذمة بآلية مشابهة مع فحوص طبيعية"],
 r:["Complement C4","CH50 (Total Hemolytic Complement)","Tryptase"]},

"Immunofixation Electrophoresis (IFE)": {
 w:"رحلان كهربائي يليه ترسيب بأضداد نوعية (IgG، IgA، IgM، كابا، لامدا) لتحديد نوع البروتين أحادي النسيلة.",
 y:"تأكيد وتنميط البروتين M الذي ظهر في SPEP أو المشتبه به، وكشف المستويات الصغيرة، وتقييم الاستجابة الكاملة في الورم النقوي.",
 p:"لا يحتاج تحضيراً.",
 s:"مصل (أصفر)، أو بول 24 ساعة (UIFE).",
 h:["بروتين أحادي النسيلة: الورم النقوي، MGUS، والدنستروم، الداء النشواني AL، اللمفوما"],
 l:[],
 i:["الأضداد العلاجية (داراتوموماب) تظهر كشريط IgG-κ كاذب","أكثر حساسية من SPEP لكنه نوعي (لا يعطي كمية)"],
 r:["Serum Protein Electrophoresis (SPEP)","Serum Free Light Chains (κ/λ)","Urine Bence Jones Protein","Beta-2 Microglobulin"]},

"ENA Panel (Jo-1, RNP, Sm, SSA, SSB, Scl-70)": {
 w:"لوحة أضداد ضد المستضدات النووية القابلة للاستخلاص، تحدد نوع مرض النسيج الضام بعد ANA إيجابي.",
 y:"Sm: الذئبة. RNP: مرض النسيج الضام المختلط. SSA/SSB: شوغرن والذئبة الوليدية. Scl-70: التصلب المنتشر. Jo-1: متلازمة مضاد الإنزيمات (التهاب العضلات مع تليف الرئة).",
 p:"لا يحتاج تحضيراً.",
 s:"مصل (أصفر).",
 h:["إيجابية أي ضد توجه التشخيص حسب الجدول أعلاه"],
 l:[],
 i:["يُطلب فقط بعد ANA إيجابي (إلا Jo-1 و SSA قد يكونان مع ANA ضعيف)","الطرق المتعددة (Line blot، ELISA) تختلف في الحساسية"],
 r:["ANA (Antinuclear Antibodies)","Anti-Smith (Sm)","Anti-SSA/Ro","Anti-Scl-70 (Topoisomerase I)","CK (Creatine Kinase, Total)"]},

"Lyme Disease Serology": {
 w:"أضداد ضد بكتيريا البورليا البورغدورفرية المنقولة بلدغة القراد، بفحص على مرحلتين (EIA ثم Western blot أو EIA ثانٍ).",
 y:"تشخيص داء لايم: الحمامى المهاجرة، التهاب المفاصل، شلل العصب الوجهي، أو حصار القلب بعد التعرض للقراد في المناطق الموبوءة.",
 p:"اذكر السفر والتعرض للقراد ومدة الأعراض.",
 s:"مصل (أصفر)؛ السائل الشوكي للحالات العصبية.",
 h:["داء لايم (IgM في أول شهر، IgG بعد ذلك)"],
 l:[],
 i:["سلبي في الأسابيع الأولى ← الحمامى المهاجرة تُشخص سريرياً","IgM وحده بعد 30 يوماً غالباً إيجابي كاذب","تفاعل متصالب مع الزهري و EBV والأمراض المناعية","يبقى إيجابياً بعد الشفاء"],
 r:["Syphilis RPR/VDRL","CSF Cell Count & Differential","Synovial Fluid Analysis (Cells & Crystals)"]},

"H. pylori IgG Antibody": {
 w:"أضداد IgG ضد الملوية البوابية في الدم.",
 y:"دليل على تعرض سابق أو حالي — مفيد في الدراسات الوبائية، أو عند تعذّر الفحوص الأخرى (نزف حاد، تناول مثبطات الحموضة).",
 p:"لا يحتاج إيقاف مثبطات الحموضة.",
 s:"مصل (أصفر).",
 h:["عدوى حالية أو سابقة"],
 l:[],
 i:["يبقى إيجابياً لأشهر وسنوات بعد العلاج ← لا يصلح لإثبات الشفاء","في المناطق عالية الانتشار قيمته التنبؤية منخفضة ← فحص النفس أو البراز أفضل"],
 r:["H. pylori Stool Antigen","H. pylori Urea Breath Test"]},

"HSV-1/HSV-2 IgG": {
 w:"أضداد IgG النوعية للنوعين الأول والثاني من فيروس الحلأ البسيط (بالاعتماد على البروتين G).",
 y:"تحديد التعرض السابق لكل نوع: الأزواج المختلفون في الحالة، الحوامل، والقرحات التناسلية الناكسة غير المؤكدة.",
 p:"لا يحتاج تحضيراً.",
 s:"مصل (أصفر).",
 h:["HSV-2 IgG: عدوى تناسلية سابقة غالباً","HSV-1 IgG: شائع جداً (فموي غالباً)"],
 l:[],
 i:["لا يُستخدم IgM (غير موثوق)","القرحة النشطة تُشخص بـ PCR من الآفة","القيم المنخفضة (index 1.1–3.5) لـ HSV-2 قد تكون إيجابية كاذبة"],
 r:["TORCH Panel","CSF Cell Count & Differential","Syphilis RPR/VDRL"]},

"Varicella-Zoster IgG": {
 w:"أضداد IgG ضد فيروس الحماق (جدري الماء) والهربس النطاقي.",
 y:"التأكد من المناعة عند العاملين الصحيين والحوامل والمرضى قبل زرع الأعضاء أو العلاج المثبط، وبعد التعرض لتقرير إعطاء الغلوبولين المناعي.",
 p:"لا يحتاج تحضيراً.",
 s:"مصل (أصفر).",
 h:["إيجابي: مناعة من عدوى سابقة أو لقاح"],
 l:["سلبي: غير محصّن ← لقاح (ممنوع أثناء الحمل) أو غلوبولين مناعي بعد التعرض"],
 i:["الطرق التجارية قد لا تكشف المناعة بعد اللقاح بدقة","العدوى الحالية تُشخص بـ PCR من الحويصلات"],
 r:["Measles (Rubeola) IgG","Rubella IgG","TORCH Panel"]},

"Measles (Rubeola) IgG": {
 w:"أضداد IgG ضد فيروس الحصبة.",
 y:"تأكيد المناعة عند العاملين الصحيين والمسافرين والطلاب، وأثناء التفشيات. IgM يُطلب لتشخيص العدوى الحادة.",
 p:"لا يحتاج تحضيراً.",
 s:"مصل (أصفر)؛ مسحة بلعوم وبول لـ PCR في العدوى الحادة.",
 h:["IgG إيجابي: مناعة","IgM إيجابي: عدوى حادة (من اليوم 3 للطفح) أو لقاح حديث"],
 l:["IgG سلبي: غير محصّن ← لقاح MMR"],
 i:["IgM إيجابي كاذب مع الفيروسة الصغيرة B19 والحصبة الألمانية","حالة يجب الإبلاغ عنها للصحة العامة"],
 r:["Rubella IgG","Varicella-Zoster IgG","Parvovirus B19 IgM / IgG"]},

"Parvovirus B19 IgM / IgG": {
 w:"أضداد ضد الفيروسة الصغيرة B19 التي تصيب أسلاف الكريات الحمراء في النقي.",
 y:"تشخيص الحمى الخامسة (الخد المصفوع)، التهاب المفاصل الحاد عند البالغين، النوبة اللاتنسجية عند مرضى الانحلال المزمن (المنجلي، الكروي)، واستسقاء الجنين عند الحامل المعرضة.",
 p:"لا يحتاج تحضيراً.",
 s:"مصل (أصفر)؛ PCR عند ضعيفي المناعة والجنين.",
 h:["IgM: عدوى حديثة (يبقى 2–3 أشهر)","IgG وحده: مناعة سابقة (50–80% من البالغين)"],
 l:["IgG سلبي عند الحامل: معرضة للعدوى"],
 i:["ضعيفو المناعة لا ينتجون أضداداً ← PCR","تفاعل متصالب مع الحصبة الألمانية في IgM"],
 r:["Reticulocyte Count","CBC (Complete Blood Count)","TORCH Panel","Rubella IgG"]},

"HTLV-I/II Antibody": {
 w:"أضداد ضد الفيروس اللمفاوي التائي البشري النوعين الأول والثاني.",
 y:"تحري المتبرعين بالدم والأعضاء، وتشخيص ابيضاض/لمفوما الخلايا التائية عند البالغين (ATL) والاعتلال النخاعي التشنجي (HAM/TSP).",
 p:"لا يحتاج تحضيراً.",
 s:"مصل أو بلازما.",
 h:["عدوى HTLV (متوطن في اليابان والكاريبي وإفريقيا وأمريكا الجنوبية)"],
 l:[],
 i:["النتيجة التفاعلية تُؤكد بـ Western blot أو PCR للتمييز بين النوعين","ينتقل بالرضاعة والجنس والدم"],
 r:["HIV Antibody/Ag (4th Gen combo)","Flow Cytometry (CD markers)","Calcium (Total)"]},

"Aspergillus Antibody / Galactomannan": {
 w:"الأضداد (IgG و IgE) ضد فطر الرشاشيات، ومستضد الغالاكتومانان من جدار الفطر في الدم أو غسل القصبات.",
 y:"الغالاكتومانان: تشخيص الرشاشيات الغازية عند ضعيفي المناعة (ابيضاض، زرع نقي). الأضداد: الورم الفطري (Aspergilloma) والرشاشيات القصبية الرئوية التحسسية (ABPA) والمزمنة.",
 p:"لا يحتاج تحضيراً.",
 s:"مصل (أصفر)، أو سائل غسل القصبات للغالاكتومانان.",
 h:["GM ≥ 0.5 في الدم أو ≥ 1.0 في الغسل: رشاشيات غازية محتملة","IgG مرتفع: الورم الفطري والرشاشيات المزمنة","IgE النوعي و IgE الكلي > 1000: ABPA"],
 l:[],
 i:["بيبيراسيلين-تازوباكتام (قديماً) والتغذية المعوية تعطي GM إيجابياً كاذباً","مضادات الفطريات المسبقة تخفض حساسية GM","ضعيفو المناعة قد لا ينتجون أضداداً"],
 r:["Fungal Culture","IgE (Total)","Specific IgE (Allergen Panel)","Sputum Culture"]},

"Entamoeba histolytica Antibody": {
 w:"أضداد ضد الأميبا الحالة للنسج في الدم.",
 y:"تشخيص خراج الكبد الأميبي (حمى وألم في الربع العلوي الأيمن بعد السفر لمنطقة موبوءة)، والزحار الأميبي الغازي.",
 p:"لا يحتاج تحضيراً.",
 s:"مصل (أصفر).",
 h:["خراج الكبد الأميبي (> 90%)","الزحار الأميبي الغازي","عدوى سابقة في المناطق الموبوءة (يبقى سنوات)"],
 l:[],
 i:["قد يكون سلبياً في أول 7–10 أيام ← أعد الفحص","لا يميز العدوى الحالية من السابقة في المناطق الموبوءة","فحص البراز لا يميز E. histolytica من E. dispar ← المستضد أو PCR"],
 r:["Stool Ova & Parasites (O&P)","ALT (Alanine Aminotransferase)","CBC (Complete Blood Count)"]},

"TORCH Panel": {
 w:"لوحة أضداد IgG و IgM لعدوى خلقية: التوكسوبلازما، الحصبة الألمانية، الفيروس المضخم للخلايا، والحلأ البسيط (وأحياناً الزهري والفيروسة B19).",
 y:"تقييم المولود المشتبه بعدوى خلقية (صغر الرأس، تكلسات دماغية، ساد، صمم، تضخم كبد وطحال)، أو الحامل عند ظهور تشوهات بالأمواج.",
 p:"لا يحتاج تحضيراً.",
 s:"مصل المولود والأم.",
 h:["IgM عند المولود: عدوى خلقية محتملة","IgG عند المولود: غالباً أمومي منقول عبر المشيمة"],
 l:[],
 i:["لا يُنصح به كفحص تحرٍّ روتيني للحامل — فحوص محددة أفضل","IgM إيجابي كاذب شائع","CMV الخلقي يُشخص بـ PCR للبول أو اللعاب خلال أول 3 أسابيع"],
 r:["Toxoplasma IgG / IgM","Rubella IgG","CMV IgM","HSV-1/HSV-2 IgG","Parvovirus B19 IgM / IgG"]}
});

window.ENC_EN = Object.assign(window.ENC_EN || {}, {
"Anticentromere Antibody": {
 w:"Antibodies against centromere proteins, producing a characteristic discrete-speckled pattern on HEp-2 cells.",
 y:"Diagnosis of limited systemic sclerosis (CREST: calcinosis, Raynaud, esophageal dysmotility, sclerodactyly, telangiectasia); predicts pulmonary arterial hypertension risk.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Limited systemic sclerosis (50–90%)","Sometimes primary biliary cholangitis","Isolated Raynaud phenomenon (risk of progression)"],
 l:[],
 i:["Rarely coexists with anti-Scl-70","The pattern is seen on ANA IFA and confirmed by ELISA"],
 r:["ANA (Antinuclear Antibodies)","Anti-Scl-70 (Topoisomerase I)","ENA Panel (Jo-1, RNP, Sm, SSA, SSB, Scl-70)"]},

"Anticardiolipin Antibodies (IgG/IgM)": {
 w:"Antibodies against cardiolipin (a phospholipid) bound to β2-glycoprotein I.",
 y:"Part of the criteria for antiphospholipid syndrome: venous or arterial thrombosis, recurrent miscarriage, or late pregnancy complications.",
 p:"Away from acute infection if possible.",
 s:"Serum (yellow).",
 h:["> 40 GPL or MPL: antiphospholipid syndrome (confirm after 12 weeks)","SLE","Infections (syphilis, HIV, hepatitis C) and drugs — usually transient and low"],
 l:[],
 i:["Low transient levels are common and not diagnostic","Order with lupus anticoagulant and anti-β2GPI","Unaffected by anticoagulants, unlike lupus anticoagulant"],
 r:["Lupus Anticoagulant","ANA (Antinuclear Antibodies)","Syphilis RPR/VDRL","Platelet Count"]},

"AMA (Antimitochondrial Antibody)": {
 w:"Antibodies against enzymes of the inner mitochondrial membrane (especially M2).",
 y:"The key marker of primary biliary cholangitis (PBC): itch and fatigue with raised ALP in a middle-aged woman.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Primary biliary cholangitis (> 90–95%)","Sometimes autoimmune hepatitis","Limited systemic sclerosis"],
 l:[],
 i:["May appear years before symptoms — follow ALP","Anti-M2 by ELISA is more specific than IFA"],
 r:["ALP (Alkaline Phosphatase)","GGT (Gamma-Glutamyl Transferase)","IgM","ASMA (Anti-Smooth Muscle Antibody)"]},

"ASMA (Anti-Smooth Muscle Antibody)": {
 w:"Antibodies against cytoskeletal components of smooth muscle (especially F-actin).",
 y:"Diagnosis of type 1 autoimmune hepatitis, together with ANA and raised IgG.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Type 1 autoimmune hepatitis (titer ≥ 1:80)","Viral hepatitis and infections (transient low titers)"],
 l:[],
 i:["Low titers are non-specific","Anti-F-actin is more specific"],
 r:["ANA (Antinuclear Antibodies)","IgG","ALT (Alanine Aminotransferase)","Anti-LKM-1","AMA (Antimitochondrial Antibody)"]},

"Anti-LKM-1": {
 w:"Liver–kidney microsomal antibodies directed against cytochrome CYP2D6.",
 y:"Diagnosis of type 2 autoimmune hepatitis (more common and more severe in children and young women).",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Type 2 autoimmune hepatitis","Chronic hepatitis C (5%)","Drug-induced hepatitis"],
 l:[],
 i:["The IFA pattern can be confused with AMA → confirm by ELISA"],
 r:["ASMA (Anti-Smooth Muscle Antibody)","ANA (Antinuclear Antibodies)","ALT (Alanine Aminotransferase)","Hepatitis C Antibody"]},

"Anti-Parietal Cell Antibody": {
 w:"Antibodies against the proton pump (H⁺/K⁺-ATPase) of gastric parietal cells.",
 y:"Supports the diagnosis of pernicious anemia and autoimmune atrophic gastritis, together with intrinsic-factor antibodies.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Pernicious anemia (~90%)","Atrophic gastritis","Autoimmune thyroid disease and type 1 diabetes","Elderly (up to 10%)"],
 l:[],
 i:["Sensitive but non-specific → intrinsic-factor antibodies are more specific","Declines as gastric atrophy progresses"],
 r:["Intrinsic Factor Antibody","Vitamin B12","Gastrin","CBC (Complete Blood Count)"]},

"Anti-GBM Antibody": {
 w:"Antibodies against type IV collagen in the glomerular and alveolar basement membranes.",
 y:"Diagnosis of anti-GBM (Goodpasture) disease: rapidly progressive glomerulonephritis with pulmonary hemorrhage — an emergency requiring plasma exchange.",
 p:"No preparation. Order as urgent.",
 s:"Serum (yellow).",
 h:["Anti-GBM / Goodpasture disease (> 95%)","Some concurrent ANCA cases (order both)"],
 l:[],
 i:["Kidney biopsy immunofluorescence (linear IgG) confirms the diagnosis","Falling titers track treatment response"],
 r:["ANCA (MPO / PR3)","Creatinine","Urine Microscopy (Sediment)","Direct Immunofluorescence (Skin / Kidney Biopsy)"]},

"AChR Antibody (Acetylcholine Receptor)": {
 w:"Antibodies binding acetylcholine receptors at the neuromuscular junction and impairing transmission.",
 y:"Confirms myasthenia gravis (fatigable weakness, ptosis, diplopia).",
 p:"No preparation. Record immunosuppressive therapy.",
 s:"Serum (yellow).",
 h:["Generalized myasthenia (85–90%)","Ocular myasthenia (50%)","Thymoma"],
 l:[],
 i:["A negative result does not exclude → test MuSK and LRP4 antibodies","Immunosuppressants lower it"],
 r:["TSH (Thyroid Stimulating Hormone)","CK (Creatine Kinase, Total)"]},

"Anti-Insulin Antibody": {
 w:"Antibodies against insulin, arising either after insulin therapy or spontaneously (before any treatment).",
 y:"Evaluating unexplained severe insulin resistance in treated patients, autoimmune insulin hypoglycemia (Hirata syndrome), and as an early type 1 diabetes marker in children.",
 p:"Record insulin therapy and its duration.",
 s:"Serum (yellow).",
 h:["Insulin therapy","Insulin autoimmune syndrome (after sulfhydryl drugs such as methimazole)","Type 1 diabetes before treatment"],
 l:[],
 i:["Cannot distinguish therapy-induced from autoantibodies once insulin is started","Interferes with insulin measurement"],
 r:["Insulin (Fasting)","C-Peptide","Glucose (Fasting)","HbA1c (Glycated Hemoglobin)"]},

"Deamidated Gliadin Peptide (DGP) Antibodies": {
 w:"IgA and IgG antibodies against deamidated gliadin (gluten) peptides; they have replaced the older, less specific gliadin antibodies.",
 y:"Celiac screening in IgA-deficient patients (DGP-IgG) and children under 2, and monitoring dietary adherence.",
 p:"Regular gluten intake for 6 weeks before testing.",
 s:"Serum (yellow).",
 h:["Celiac disease","Dermatitis herpetiformis"],
 l:[],
 i:["A gluten-free diet lowers it","IgA-DGP is falsely negative in IgA deficiency → use IgG-DGP"],
 r:["tTG-IgA (Tissue Transglutaminase)","IgA","Ferritin","CBC (Complete Blood Count)"]},

"Antisperm Antibodies": {
 w:"Antibodies against the sperm surface in male or female blood or in semen, impairing motility and fertilization.",
 y:"Evaluation of unexplained infertility, sperm agglutination on analysis, or after vasectomy reversal or testicular trauma.",
 p:"For semen: abstinence 2–7 days.",
 s:"Serum, or fresh semen (MAR or immunobead test).",
 h:["> 50% of sperm bound: immunologic infertility likely","After vasectomy and reversal","Trauma, infection and obstruction"],
 l:[],
 i:["Head-bound antibodies matter more than tail-bound","Direct testing on sperm is more accurate than serum"],
 r:["Semen Analysis","FSH (Follicle Stimulating Hormone)","Total Testosterone"]},

"Specific IgE (Allergen Panel)": {
 w:"Quantitative IgE antibodies against specific allergens (foods, dust mite, pollens, molds, animals, drugs, insect venoms).",
 y:"Identifies triggers in asthma, rhinitis, eczema and food allergy; an alternative to skin-prick testing with skin disease or antihistamine use.",
 p:"No need to stop antihistamines (unlike skin testing).",
 s:"Serum (yellow).",
 h:["Class 1 (0.35–0.7) and above: sensitization — higher classes mean a greater probability of clinical reaction"],
 l:[],
 i:["Sensitization does not always mean clinical allergy → interpret with history","Very high total IgE causes non-specific binding","Cross-reactivity (e.g. pollens and fruits)"],
 r:["IgE (Total)","Tryptase","Latex-Specific IgE","WBC Differential (Absolute Counts)"]},

"Latex-Specific IgE": {
 w:"IgE antibodies against natural rubber latex proteins.",
 y:"Evaluation of latex allergy in health-care workers, spina bifida and multiple-surgery patients, and before surgery with a history of reaction.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["≥ 0.35 kU/L: latex sensitization","Cross-reactivity with banana, avocado, kiwi and chestnut"],
 l:[],
 i:["Moderate sensitivity → a negative result with a strong history needs further evaluation","Does not detect delayed contact dermatitis (type IV)"],
 r:["Specific IgE (Allergen Panel)","IgE (Total)","Tryptase"]},

"Cryoglobulins": {
 w:"Immunoglobulins that precipitate in the cold (< 37 °C) and redissolve on warming, causing vasculitis and vessel occlusion.",
 y:"Evaluation of purpura, cutaneous vasculitis, arthralgia, neuropathy and nephritis, especially with hepatitis C, and severe Raynaud.",
 p:"Fast 8 h (lipids cloud the serum).",
 s:"Pre-warmed tubes, transported, clotted and centrifuged at 37 °C; serum then kept at 4 °C and inspected daily for up to 7 days.",
 h:["Type I: monoclonal (myeloma, Waldenström)","Types II and III (mixed): hepatitis C, Sjögren's, lupus"],
 l:[],
 i:["Main error: cooling the sample before serum separation → false negative","Usually accompanied by very low C4 and positive RF"],
 r:["Hepatitis C Antibody","Complement C4","RF (Rheumatoid Factor)","Immunofixation Electrophoresis (IFE)"]},

"CH50 (Total Hemolytic Complement)": {
 w:"Measures the functional capacity of the whole classical complement pathway (C1 to C9) to lyse antibody-coated red cells.",
 y:"Screens for deficiency of a complement component (recurrent Neisseria infection, early lupus) and monitors activity in lupus and nephritis.",
 p:"No preparation needed.",
 s:"Serum separated within 1 h and frozen immediately (complement is labile).",
 h:["Acute inflammation"],
 l:["Inherited deficiency of a component (often zero)","Active lupus and glomerulonephritis","Cryoglobulinemia","Severe liver disease"],
 i:["Poor sample handling is the main cause of false lows","AH50 measures the alternative pathway"],
 r:["Complement C3","Complement C4","C1 Esterase Inhibitor"]},

"C1 Esterase Inhibitor": {
 w:"A protein regulating the classical complement pathway and the kinin (bradykinin) system.",
 y:"Diagnosis of hereditary angioedema: recurrent non-itchy swelling without urticaria of face, larynx and gut, unresponsive to steroids and antihistamines.",
 p:"Between or during attacks.",
 s:"Serum or citrate, separated and frozen promptly (for function).",
 h:["Inflammation (acute-phase protein)"],
 l:["Type 1: low level and function","Type 2: normal level, low function","Acquired deficiency: lymphoma and autoimmune disease (C1q also low)"],
 i:["A normal level does not exclude type 2 → always request function","Low C4 is a good screening test","ACE inhibitors cause angioedema by a similar mechanism with normal tests"],
 r:["Complement C4","CH50 (Total Hemolytic Complement)","Tryptase"]},

"Immunofixation Electrophoresis (IFE)": {
 w:"Electrophoresis followed by precipitation with specific antisera (IgG, IgA, IgM, kappa, lambda) to type a monoclonal protein.",
 y:"Confirms and types an M-protein seen or suspected on SPEP, detects small levels, and assesses complete response in myeloma.",
 p:"No preparation needed.",
 s:"Serum (yellow), or 24-h urine (UIFE).",
 h:["Monoclonal protein: myeloma, MGUS, Waldenström, AL amyloidosis, lymphoma"],
 l:[],
 i:["Therapeutic antibodies (daratumumab) appear as a false IgG-κ band","More sensitive than SPEP but qualitative (no quantity)"],
 r:["Serum Protein Electrophoresis (SPEP)","Serum Free Light Chains (κ/λ)","Urine Bence Jones Protein","Beta-2 Microglobulin"]},

"ENA Panel (Jo-1, RNP, Sm, SSA, SSB, Scl-70)": {
 w:"A panel of antibodies against extractable nuclear antigens that specifies the connective-tissue disease after a positive ANA.",
 y:"Sm: lupus. RNP: mixed connective-tissue disease. SSA/SSB: Sjögren's and neonatal lupus. Scl-70: diffuse scleroderma. Jo-1: antisynthetase syndrome (myositis with lung fibrosis).",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Any positive antibody points to the diagnosis as listed above"],
 l:[],
 i:["Order only after a positive ANA (except Jo-1 and SSA, which may occur with weak ANA)","Methods (line blot, ELISA) differ in sensitivity"],
 r:["ANA (Antinuclear Antibodies)","Anti-Smith (Sm)","Anti-SSA/Ro","Anti-Scl-70 (Topoisomerase I)","CK (Creatine Kinase, Total)"]},

"Lyme Disease Serology": {
 w:"Antibodies against tick-borne Borrelia burgdorferi, tested in two tiers (EIA then Western blot or a second EIA).",
 y:"Diagnosis of Lyme disease: erythema migrans, arthritis, facial palsy or heart block after tick exposure in endemic areas.",
 p:"Record travel, tick exposure and symptom duration.",
 s:"Serum (yellow); CSF for neurological cases.",
 h:["Lyme disease (IgM in the first month, IgG thereafter)"],
 l:[],
 i:["Negative in the first weeks → erythema migrans is diagnosed clinically","Isolated IgM after 30 days is usually a false positive","Cross-reactivity with syphilis, EBV and autoimmune disease","Remains positive after cure"],
 r:["Syphilis RPR/VDRL","CSF Cell Count & Differential","Synovial Fluid Analysis (Cells & Crystals)"]},

"H. pylori IgG Antibody": {
 w:"IgG antibodies against Helicobacter pylori in blood.",
 y:"Evidence of past or present exposure — useful epidemiologically, or when other tests are impossible (acute bleeding, ongoing acid suppression).",
 p:"No need to stop acid suppressants.",
 s:"Serum (yellow).",
 h:["Current or past infection"],
 l:[],
 i:["Stays positive for months to years after treatment → not valid as a test of cure","Low predictive value in high-prevalence areas → breath or stool tests are better"],
 r:["H. pylori Stool Antigen","H. pylori Urea Breath Test"]},

"HSV-1/HSV-2 IgG": {
 w:"Type-specific IgG antibodies to herpes simplex virus types 1 and 2 (glycoprotein G-based).",
 y:"Determines past exposure to each type: discordant couples, pregnancy, and recurrent unconfirmed genital ulcers.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["HSV-2 IgG: usually past genital infection","HSV-1 IgG: very common (usually oral)"],
 l:[],
 i:["IgM is not used (unreliable)","Active lesions are diagnosed by PCR of the lesion","Low HSV-2 index values (1.1–3.5) may be false positives"],
 r:["TORCH Panel","CSF Cell Count & Differential","Syphilis RPR/VDRL"]},

"Varicella-Zoster IgG": {
 w:"IgG antibodies against varicella (chickenpox) and herpes-zoster virus.",
 y:"Confirms immunity in health-care workers, pregnant women and patients before transplantation or immunosuppression, and after exposure to decide on immunoglobulin.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Positive: immunity from past infection or vaccine"],
 l:["Negative: non-immune → vaccine (contraindicated in pregnancy) or post-exposure immunoglobulin"],
 i:["Commercial assays may not reliably detect vaccine-induced immunity","Active infection is diagnosed by PCR of vesicle fluid"],
 r:["Measles (Rubeola) IgG","Rubella IgG","TORCH Panel"]},

"Measles (Rubeola) IgG": {
 w:"IgG antibodies against measles virus.",
 y:"Confirms immunity in health-care workers, travelers and students, and during outbreaks. IgM is requested to diagnose acute infection.",
 p:"No preparation needed.",
 s:"Serum (yellow); throat swab and urine for PCR in acute infection.",
 h:["IgG positive: immune","IgM positive: acute infection (from day 3 of rash) or recent vaccination"],
 l:["IgG negative: non-immune → MMR vaccine"],
 i:["False-positive IgM with parvovirus B19 and rubella","A notifiable disease for public health"],
 r:["Rubella IgG","Varicella-Zoster IgG","Parvovirus B19 IgM / IgG"]},

"Parvovirus B19 IgM / IgG": {
 w:"Antibodies against parvovirus B19, which infects erythroid precursors in the marrow.",
 y:"Diagnosis of fifth disease (slapped cheek), acute arthritis in adults, aplastic crisis in chronic hemolysis (sickle cell, spherocytosis), and fetal hydrops after maternal exposure.",
 p:"No preparation needed.",
 s:"Serum (yellow); PCR in the immunocompromised and the fetus.",
 h:["IgM: recent infection (persists 2–3 months)","IgG alone: past immunity (50–80% of adults)"],
 l:["IgG negative in pregnancy: susceptible to infection"],
 i:["Immunocompromised patients may not produce antibodies → PCR","IgM cross-reactivity with rubella"],
 r:["Reticulocyte Count","CBC (Complete Blood Count)","TORCH Panel","Rubella IgG"]},

"HTLV-I/II Antibody": {
 w:"Antibodies against human T-lymphotropic virus types I and II.",
 y:"Screening of blood and organ donors, and diagnosis of adult T-cell leukemia/lymphoma (ATL) and HTLV-associated myelopathy (HAM/TSP).",
 p:"No preparation needed.",
 s:"Serum or plasma.",
 h:["HTLV infection (endemic in Japan, Caribbean, Africa and South America)"],
 l:[],
 i:["Reactive results are confirmed by Western blot or PCR to distinguish types","Transmitted by breastfeeding, sex and blood"],
 r:["HIV Antibody/Ag (4th Gen combo)","Flow Cytometry (CD markers)","Calcium (Total)"]},

"Aspergillus Antibody / Galactomannan": {
 w:"Antibodies (IgG and IgE) against Aspergillus, and the fungal cell-wall antigen galactomannan in blood or bronchoalveolar lavage.",
 y:"Galactomannan: invasive aspergillosis in the immunocompromised (leukemia, marrow transplant). Antibodies: aspergilloma, allergic bronchopulmonary aspergillosis (ABPA) and chronic aspergillosis.",
 p:"No preparation needed.",
 s:"Serum (yellow), or BAL fluid for galactomannan.",
 h:["GM ≥ 0.5 in serum or ≥ 1.0 in BAL: probable invasive aspergillosis","High IgG: aspergilloma and chronic aspergillosis","Specific IgE and total IgE > 1000: ABPA"],
 l:[],
 i:["Piperacillin-tazobactam (older lots) and enteral feeds give false-positive GM","Prior antifungals reduce GM sensitivity","Immunocompromised patients may not produce antibodies"],
 r:["Fungal Culture","IgE (Total)","Specific IgE (Allergen Panel)","Sputum Culture"]},

"Entamoeba histolytica Antibody": {
 w:"Antibodies against Entamoeba histolytica in blood.",
 y:"Diagnosis of amebic liver abscess (fever and right-upper-quadrant pain after travel to an endemic area) and invasive amebic dysentery.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Amebic liver abscess (> 90%)","Invasive amebic dysentery","Past infection in endemic areas (persists for years)"],
 l:[],
 i:["May be negative in the first 7–10 days → repeat","Does not separate current from past infection in endemic areas","Stool microscopy cannot distinguish E. histolytica from E. dispar → antigen or PCR"],
 r:["Stool Ova & Parasites (O&P)","ALT (Alanine Aminotransferase)","CBC (Complete Blood Count)"]},

"TORCH Panel": {
 w:"IgG and IgM antibodies for congenital infections: Toxoplasma, Rubella, Cytomegalovirus and Herpes simplex (sometimes syphilis and parvovirus B19).",
 y:"Evaluating a newborn with suspected congenital infection (microcephaly, intracranial calcification, cataract, deafness, hepatosplenomegaly), or a pregnancy with anomalies on ultrasound.",
 p:"No preparation needed.",
 s:"Newborn and maternal serum.",
 h:["IgM in the newborn: possible congenital infection","IgG in the newborn: usually maternal, transferred across the placenta"],
 l:[],
 i:["Not recommended as a routine pregnancy screen — targeted tests are better","False-positive IgM is common","Congenital CMV is diagnosed by urine or saliva PCR within the first 3 weeks"],
 r:["Toxoplasma IgG / IgM","Rubella IgG","CMV IgM","HSV-1/HSV-2 IgG","Parvovirus B19 IgM / IgG"]}
});

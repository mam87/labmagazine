/* New tests added from: Fischbach F, Dunning MB. A Manual of Laboratory and Diagnostic Tests, 9th ed.
   Content summarised and rewritten in our own words (AR + EN). Group 1: Hematology & Coagulation.
   Row keys: n name · c category · s specimen · r reference · u use. Encyclopedia keys as in encyclopedia.js */
window.TESTS_EXTRA = (window.TESTS_EXTRA || []).concat([
 {n:"Bone Marrow Aspiration & Biopsy",c:"Hematology",s:"Marrow aspirate (EDTA) + core in formalin",r:"M:E ratio 2:1–4:1 | Blasts < 5%",u:"Unexplained cytopenias, leukemia, lymphoma staging"},
 {n:"Leukocyte Alkaline Phosphatase (LAP) Score",c:"Hematology",s:"Fresh smear (heparin or capillary)",r:"40–100 units",u:"CML vs leukemoid reaction"},
 {n:"Sudan Black B (SBB) Stain",c:"Hematology",s:"Fresh marrow/blood smear",r:"Myeloid +, lymphoid −",u:"AML vs ALL cytochemistry"},
 {n:"PAS Stain (Periodic Acid–Schiff)",c:"Hematology",s:"Fresh marrow/blood smear",r:"Lymphoblasts block +, myeloblasts −",u:"ALL, erythroleukemia"},
 {n:"TdT (Terminal Deoxynucleotidyl Transferase)",c:"Hematology",s:"Marrow/blood (flow or IHC)",r:"Negative in mature cells",u:"Lymphoblastic leukemia/lymphoma"},
 {n:"TRAP Stain (Tartrate-Resistant Acid Phosphatase)",c:"Hematology",s:"Fresh blood/marrow smear",r:"No TRAP activity",u:"Hairy cell leukemia"},
 {n:"Pyruvate Kinase (PK)",c:"Hematology",s:"EDTA (Purple)",r:"2.8–8.8 U/g Hb",u:"Hereditary non-spherocytic hemolytic anemia"},
 {n:"Heinz Body Stain",c:"Hematology",s:"EDTA (Purple)",r:"Not seen",u:"Oxidative hemolysis, unstable Hb, G6PD"},
 {n:"Free Erythrocyte Protoporphyrin (FEP / ZPP)",c:"Hematology",s:"EDTA (Purple), protect from light",r:"< 100 µg/dL RBC",u:"Iron deficiency, lead poisoning, protoporphyria"},
 {n:"Sulfhemoglobin",c:"Hematology",s:"EDTA or heparin (CO-oximetry)",r:"0–1% of total Hb",u:"Cyanosis with drugs/sulfur exposure"},
 {n:"PNH Flow Cytometry (CD55/CD59/FLAER)",c:"Hematology",s:"EDTA (Purple)",r:"No PNH clone",u:"Paroxysmal nocturnal hemoglobinuria"},
 {n:"Lymphocyte Subsets (CD3/CD4/CD8/CD19/NK)",c:"Hematology",s:"EDTA (Purple), room temp",r:"CD4 589–1505/µL | CD4:CD8 > 1.0",u:"HIV, immunodeficiency"},
 {n:"Bone Marrow Iron Stain (Perls)",c:"Hematology",s:"Marrow aspirate smear",r:"Sideroblasts ~30–50%",u:"Iron stores, sideroblastic anemia"},
 {n:"Bleeding Time",c:"Coagulation",s:"In vivo (forearm template)",r:"2–9 min (Ivy template)",u:"Platelet function screen (largely obsolete)"},
 {n:"Platelet Aggregation Studies",c:"Coagulation",s:"Citrate (Blue), room temp, < 3 h",r:"Normal response to ADP, collagen, epinephrine, AA, ristocetin",u:"Inherited platelet disorders, vWD"},
 {n:"ACT (Activated Clotting Time)",c:"Coagulation",s:"Fresh whole blood (point-of-care)",r:"70–120 s | heparin target 180–240 s+",u:"High-dose heparin in surgery/cath lab"},
 {n:"Coagulation Factor Assays (II, V, VII, X, XI, XII)",c:"Coagulation",s:"Citrate (Blue)",r:"~50–150% of normal",u:"Prolonged PT/aPTT work-up"},
 {n:"Plasminogen",c:"Coagulation",s:"Citrate (Blue)",r:"75–150% activity",u:"Fibrinolysis, thrombolytic therapy"},
 {n:"FDP (Fibrin Degradation Products)",c:"Coagulation",s:"Citrate or special FDP tube",r:"< 10 µg/mL",u:"DIC, fibrinolysis"}
]);

window.ENC = Object.assign(window.ENC || {}, {
"Bone Marrow Aspiration & Biopsy": {
 w:"سحب عيّنة سائلة من نقي العظم (للطاخة والتدفق الخلوي والوراثة) وأسطوانة نسيجية (للخزعة) غالباً من عرف الحرقفة الخلفي.",
 y:"قلة الكريات غير المفسّرة، الاشتباه بابيضاض الدم أو خلل التنسج أو الورم النقوي، مرحلة اللمفوما، والحمى مجهولة السبب.",
 p:"موافقة خطية، فحص التخثر والصفائح قبله، وتسكين موضعي. الصيام غير لازم إلا مع التخدير.",
 s:"اللطاخات فوراً بجانب السرير، EDTA للتدفق، هيبارين للوراثة الخلوية، والخزعة في فورمالين 10% متعادل ثم إزالة الكلس.",
 h:["الخلايا الأرومية > 20%: ابيضاض حاد","خلايا البلازما > 10%: الورم النقوي","فرط الخلوية: أورام النقي التكاثرية"],
 l:["نقص الخلوية: فقر الدم اللاتنسجي، بعد الكيماوي","التليف: تليّف النقي (Dry tap)"],
 i:["الشفط الأول فقط يُستخدم للطاخة — الشفط المتأخر ممدد بالدم","إزالة الكلس الحمضية القوية تفسد الصبغ المناعي والفحوص الجزيئية","تحتاج CBC ولطاخة دم محيطي بنفس اليوم"],
 r:["CBC (Complete Blood Count)","Peripheral Blood Smear","Flow Cytometry (CD markers)","Bone Marrow Iron Stain (Perls)","Karyotype (Chromosome Analysis)"]},

"Leukocyte Alkaline Phosphatase (LAP) Score": {
 w:"صبغة كيميائية خلوية تقيس نشاط الفوسفاتاز القلوي داخل العدلات الناضجة، ويُحسب المجموع من 100 عدلة (0–4+ لكل خلية).",
 y:"التمييز بين ابيضاض الدم النقوي المزمن (منخفض) والتفاعل شبيه الابيضاض (مرتفع)، وأحياناً في كثرة الحمر الحقيقية.",
 p:"لا يحتاج تحضيراً.",
 s:"لطاخة طازجة من وخز الإصبع أو هيبارين خلال ساعات — EDTA يثبط الإنزيم.",
 h:["التفاعل شبيه الابيضاض والعدوى","كثرة الحمر الحقيقية وتليف النقي","الحمل والكورتيزون"],
 l:["ابيضاض الدم النقوي المزمن","PNH","فقر الدم اللاتنسجي"],
 i:["حلّ محله فحص BCR-ABL في تشخيص CML","التأخير أو EDTA يخفضه كاذباً"],
 r:["BCR-ABL (Philadelphia Chromosome)","CBC (Complete Blood Count)","WBC Differential (Absolute Counts)"]},

"Sudan Black B (SBB) Stain": {
 w:"صبغة تلوّن الدهون الفوسفورية في حبيبات الخلايا النقوية باللون الأسود، ولا تلوّن الخلايا اللمفاوية.",
 y:"تمييز ابيضاض الدم النقوي الحاد (إيجابي) عن اللمفاوي الحاد (سلبي) عند فحص النقي.",
 p:"لا يحتاج تحضيراً.",
 s:"لطاخة نقي أو دم طازجة غير مثبتة.",
 h:["إيجابي: AML (الأرومات النقوية)، العدلات والوحيدات وأسلافها"],
 l:["سلبي: ALL، الخلايا اللمفاوية والكريات الحمراء والصفائح"],
 i:["حلّ التدفق الخلوي محله إلى حد كبير","نادراً ما يكون إيجابياً في ALL"],
 r:["PAS Stain (Periodic Acid–Schiff)","TdT (Terminal Deoxynucleotidyl Transferase)","Flow Cytometry (CD markers)","Bone Marrow Aspiration & Biopsy"]},

"PAS Stain (Periodic Acid–Schiff)": {
 w:"صبغة تُظهر الغليكوجين داخل الخلايا باللون الأرجواني. تأخذ الأرومات اللمفاوية نمطاً كتلياً (Block) مميزاً.",
 y:"دعم تشخيص ابيضاض الدم اللمفاوي الحاد وابيضاض الكريات الحمراء (M6)، وفي الأنسجة لكشف الفطريات والمخاط.",
 p:"لا يحتاج تحضيراً.",
 s:"لطاخة نقي أو دم، أو مقاطع نسيجية.",
 h:["ALL (نمط كتلي)","ابيضاض الكريات الحمراء (أرومات حمراء إيجابية)","ثلاسيميا وفقر الدم الحديدي أحياناً"],
 l:["الأرومات النقوية سلبية عادة"],
 i:["النتيجة داعمة وليست تشخيصية منفردة","يُقرأ مع التدفق الخلوي"],
 r:["Sudan Black B (SBB) Stain","TdT (Terminal Deoxynucleotidyl Transferase)","Flow Cytometry (CD markers)"]},

"TdT (Terminal Deoxynucleotidyl Transferase)": {
 w:"إنزيم نووي موجود في الخلايا اللمفاوية غير الناضجة فقط (قبل B وقبل T)، ويُكشف بالتدفق الخلوي أو الصبغ المناعي.",
 y:"تأكيد ابيضاض الدم أو اللمفوما اللمفاوية الأرومية، وتمييزها عن الأورام اللمفاوية الناضجة.",
 p:"لا يحتاج تحضيراً.",
 s:"نقي أو دم في EDTA للتدفق، أو نسيج مثبت للصبغ المناعي.",
 h:["ALL و اللمفوما اللمفاوية الأرومية (> 90%)","بعض حالات AML","أزمة أرومية لمفاوية في CML"],
 l:["سلبي في الخلايا الناضجة واللمفوما الناضجة"],
 i:["الأرومات الطبيعية (Hematogones) عند الأطفال تكون إيجابية — لا تُخلط بالمرض"],
 r:["Flow Cytometry (CD markers)","PAS Stain (Periodic Acid–Schiff)","Bone Marrow Aspiration & Biopsy"]},

"TRAP Stain (Tartrate-Resistant Acid Phosphatase)": {
 w:"صبغة تكشف الفوسفاتاز الحمضي الذي لا يثبطه الطرطرات، ويتميز به نوع خاص من الخلايا اللمفاوية ذات الزوائد الشعرية.",
 y:"تشخيص ابيضاض الخلايا المشعرة (Hairy cell leukemia).",
 p:"لا يحتاج تحضيراً.",
 s:"لطاخة دم أو نقي طازجة، أو مقطع نسيجي (صبغ مناعي TRAP).",
 h:["ابيضاض الخلايا المشعرة","بعض اللمفوما وداء غوشيه والبلاعم العظمية"],
 l:[],
 i:["حلّ محله التدفق الخلوي (CD11c، CD25، CD103) وطفرة BRAF V600E"],
 r:["BRAF V600E Mutation","Flow Cytometry (CD markers)","Peripheral Blood Smear"]},

"Pyruvate Kinase (PK)": {
 w:"إنزيم في مسار التحلل السكري داخل الكريات الحمراء، ونقصه ثاني أشيع اعتلال إنزيمي بعد G6PD.",
 y:"تقييم فقر الدم الانحلالي الوراثي غير الكروي عند الأطفال، مع يرقان وتضخم طحال.",
 p:"قبل نقل الدم أو بعد 3 أشهر منه.",
 s:"EDTA بنفسجي، يُرسل مبرّداً خلال 48 ساعة.",
 h:["كثرة الشبكيات (الكريات الفتية غنية بالإنزيم)"],
 l:["نقص PK الوراثي (جسمي متنحٍ)","أمراض النقي المكتسبة أحياناً"],
 i:["نقل الدم الحديث يعطي نتيجة طبيعية كاذبة","يجب إزالة الكريات البيضاء (غنية بالإنزيم) قبل القياس"],
 r:["G6PD (Glucose-6-Phosphate Dehydrogenase)","Reticulocyte Count","Osmotic Fragility Test","Peripheral Blood Smear"]},

"Heinz Body Stain": {
 w:"صبغة فوق حيوية (بنفسجي الكريستال) تُظهر الهيموغلوبين المتمسخ المترسب داخل الكريات الحمراء كأجسام صغيرة.",
 y:"كشف انحلال الدم التأكسدي: نقص G6PD بعد الفول أو الأدوية، الهيموغلوبينات غير الثابتة، والتسمم بالمؤكسدات.",
 p:"لا يحتاج تحضيراً. اذكر الأدوية والتعرض الحديث.",
 s:"EDTA بنفسجي طازج.",
 h:["نقص G6PD أثناء النوبة","هيموغلوبين غير ثابت","أدوية مؤكسدة (دابسون، بريماكين، نيتروفورانتوين)","بعد استئصال الطحال"],
 l:[],
 i:["لا تظهر بصبغة رايت العادية","تختفي بعد أيام لأن الطحال يزيلها (Bite cells)"],
 r:["G6PD (Glucose-6-Phosphate Dehydrogenase)","Peripheral Blood Smear","Methemoglobin","Reticulocyte Count"]},

"Free Erythrocyte Protoporphyrin (FEP / ZPP)": {
 w:"البروتوبورفيرين الذي لم يدخل فيه الحديد لتكوين الهيم، فيرتبط بالزنك داخل الكريات.",
 y:"كشف نقص الحديد المبكر، والتسمم المزمن بالرصاص، وتشخيص البروتوبورفيريا المكوّنة للكريات الحمراء.",
 p:"لا يحتاج تحضيراً.",
 s:"EDTA بنفسجي محمي من الضوء.",
 h:["نقص الحديد","التسمم بالرصاص","فقر الدم المزمن","البروتوبورفيريا الوراثية (حساسية للضوء)"],
 l:[],
 i:["الضوء يكسّره","يرتفع في أي حالة تعيق إدخال الحديد، فهو غير نوعي"],
 r:["Ferritin","Blood Lead Level","Iron (Fe)","Urine Porphobilinogen & Porphyrins"]},

"Sulfhemoglobin": {
 w:"هيموغلوبين مرتبط بالكبريت بشكل غير عكوس، لا يحمل الأكسجين ويبقى طوال عمر الكرية.",
 y:"الزرقة المستمرة بعد أدوية (سلفوناميدات، فيناسيتين، ميتوكلوبراميد) أو تعرض لكبريتيد الهيدروجين، مع ميتهيموغلوبين طبيعي.",
 p:"يُسحب فوراً.",
 s:"EDTA أو هيبارين بجهاز CO-oximetry.",
 h:["الأدوية والمواد الكبريتية","الإمساك المزمن مع بكتيريا معوية منتجة للكبريت"],
 l:[],
 i:["لا يستجيب للميثيلين الأزرق بخلاف الميتهيموغلوبين","بعض الأجهزة تقرؤه كميتهيموغلوبين خطأً"],
 r:["Methemoglobin","Carboxyhemoglobin","CBC (Complete Blood Count)"]},

"PNH Flow Cytometry (CD55/CD59/FLAER)": {
 w:"فحص بالتدفق الخلوي يكشف غياب البروتينات المثبتة بـ GPI (CD55، CD59، FLAER) عن سطح الكريات الحمراء والبيضاء.",
 y:"تشخيص بيلة الهيموغلوبين الانتيابية الليلية: انحلال دم مع DAT سلبي، جلطات في أماكن غير عادية، قلة الكريات أو فقر الدم اللاتنسجي.",
 p:"لا يحتاج تحضيراً.",
 s:"EDTA بنفسجي بحرارة الغرفة، يصل خلال 48 ساعة.",
 h:["نسيلة PNH: يُبلّغ بحجمها في الكريات الحمراء والعدلات والوحيدات"],
 l:[],
 i:["نقل الدم يخفي النسيلة في الكريات الحمراء ← العدلات والوحيدات أدق","حلّ محل فحصي Ham والسكروز القديمين"],
 r:["Haptoglobin","LDH (Lactate Dehydrogenase)","Direct Coombs Test (DAT)","Flow Cytometry (CD markers)"]},

"Lymphocyte Subsets (CD3/CD4/CD8/CD19/NK)": {
 w:"عدّ نسب وأعداد الخلايا اللمفاوية التائية (CD3، CD4، CD8) والبائية (CD19) والقاتلة الطبيعية (CD16/56) بالتدفق الخلوي.",
 y:"متابعة عدوى HIV وتقرير الوقاية من الانتهازيات، وتقييم نقص المناعة الخلقي والمكتسب.",
 p:"يُفضّل السحب بنفس الوقت من اليوم (للتغير اليومي).",
 s:"EDTA بنفسجي بحرارة الغرفة (لا يُبرّد)، يُفحص خلال 24–48 ساعة.",
 h:["CD8: العدوى الفيروسية (EBV، CMV)","النسبة CD4:CD8 < 1: HIV، العدوى الفيروسية"],
 l:["CD4 < 200/µL: الإيدز وخطر المتكيسة الرئوية","نقص المناعة المشترك الشديد (SCID)","الكورتيزون والعلاج الكيماوي"],
 i:["العدد المطلق يعتمد على CBC بنفس العينة","الكورتيزون والتغير اليومي يخفضان CD4"],
 r:["HIV RNA (Viral Load)","Flow Cytometry (CD markers)","CBC (Complete Blood Count)","IgG"]},

"Bone Marrow Iron Stain (Perls)": {
 w:"صبغة أزرق بروسيا تُظهر الحديد المخزّن في بلاعم النقي والحبيبات الحديدية داخل الأرومات الحمراء.",
 y:"المعيار الذهبي لتقييم مخزون الحديد، وتشخيص فقر الدم الحديدي الأرومي (الخلايا الحلقية).",
 p:"جزء من بزل النقي.",
 s:"لطاخة نقي تحتوي جزيئات (Spicules).",
 h:["زيادة الحديد وفقر الدم المزمن (حديد البلاعم مرتفع)","الأرومات الحديدية الحلقية ≥ 15%: فقر الدم الحديدي الأرومي"],
 l:["غياب الحديد: نقص الحديد"],
 i:["اللطاخة بلا جزيئات لا يمكن تقييمها","الخزعة بعد إزالة الكلس تفقد الحديد"],
 r:["Ferritin","Bone Marrow Aspiration & Biopsy","Transferrin Saturation"]},

"Bleeding Time": {
 w:"قياس زمن توقف النزف بعد جرح صغير قياسي على الساعد مع ضغط 40 mmHg بكُمّ جهاز الضغط.",
 y:"فحص قديم لوظيفة الصفائح وجدار الوعاء؛ لم يعد يُوصى به قبل العمليات لضعف تكراريته، وحلّ محله PFA-100.",
 p:"إيقاف الأسبرين ومضادات الالتهاب 7–10 أيام. يُشرح للمريض أنه قد يترك ندبة صغيرة.",
 s:"فحص يُجرى على المريض نفسه بأداة قياسية.",
 h:["مطوّل: قلة الصفائح، الأسبرين، فون ويلبراند، الفشل الكلوي، اضطرابات وظيفة الصفائح","> 15 دقيقة: يوقف الفحص ويُضغط على الجرح"],
 l:[],
 i:["يعتمد كثيراً على مهارة الفاحص وسماكة الجلد","لا يتنبأ بالنزف أثناء الجراحة"],
 r:["PFA-100 (Platelet Function)","Platelet Count","Platelet Aggregation Studies","von Willebrand Factor Antigen"]},

"Platelet Aggregation Studies": {
 w:"قياس تكدس الصفائح في بلازما غنية بالصفائح بعد إضافة منشّطات (ADP، الكولاجين، الإبينفرين، حمض الأراكيدونيك، الريستوسيتين) بمقياس انتقال الضوء.",
 y:"تشخيص اضطرابات وظيفة الصفائح الوراثية (غلانزمان، برنارد-سولييه)، فون ويلبراند، ومقاومة الأسبرين أو كلوبيدوغريل.",
 p:"إيقاف الأسبرين ومضادات الالتهاب ومضادات الصفائح 7–10 أيام (إلا إذا كان الهدف قياس أثرها). الصيام وتجنّب الكافيين والدهون.",
 s:"سترات أزرق 3.2% بحرارة الغرفة، دون أنبوب هوائي، ويُفحص خلال 3–4 ساعات.",
 h:[],
 l:["غياب الاستجابة لكل المنشطات عدا الريستوسيتين: غلانزمان","غياب الاستجابة للريستوسيتين فقط: برنارد-سولييه أو فون ويلبراند","ضعف استجابة حمض الأراكيدونيك: الأسبرين","ضعف ADP: كلوبيدوغريل"],
 i:["قلة الصفائح < 100 أو الدهون العالية تفسد القراءة","التبريد ينشّط الصفائح","فحص مختص يحتاج مختبراً مرجعياً"],
 r:["PFA-100 (Platelet Function)","von Willebrand Factor Antigen","Platelet Count","Bleeding Time"]},

"ACT (Activated Clotting Time)": {
 w:"زمن تخثر الدم الكامل بعد تنشيطه بمادة (كاولين أو سيلايت) بجهاز بجانب السرير.",
 y:"متابعة الهيبارين بالجرعات العالية في جراحة القلب المفتوح، القسطرة، ECMO والغسيل، حيث لا يصلح aPTT.",
 p:"لا يحتاج تحضيراً.",
 s:"دم كامل طازج يُفحص فوراً بالجهاز.",
 h:["الهيبارين (الهدف حسب الإجراء، غالباً > 250–400 ثانية في المجازة القلبية)","قلة الصفائح الشديدة ونقص العوامل","انخفاض الحرارة والتمديد الدموي"],
 l:["فرط التخثر أو جرعة هيبارين غير كافية"],
 i:["انخفاض الحرارة والتمديد يطيلانه دون هيبارين","تختلف القيم بين الأجهزة والمنشطات"],
 r:["aPTT (Activated Partial Thromboplastin Time)","Anti-Xa (Heparin Level)","Platelet Count"]},

"Coagulation Factor Assays (II, V, VII, X, XI, XII)": {
 w:"قياس نشاط كل عامل تخثر على حدة بخلط بلازما المريض مع بلازما ناقصة لهذا العامل فقط.",
 y:"تحديد سبب إطالة PT أو aPTT غير المفسّرة بعد فحص الخلط، وتشخيص النقص الوراثي، وتقييم أمراض الكبد و DIC.",
 p:"سجّل الأدوية المضادة للتخثر وفيتامين K.",
 s:"سترات أزرق 9:1، يُفصل ويُجمّد إذا تأخر — العاملان V و VIII غير ثابتين.",
 h:["الحمل والالتهاب (بعض العوامل)"],
 l:["العوامل II، VII، IX، X: الوارفارين ونقص فيتامين K","كل العوامل عدا VIII: أمراض الكبد","V و VIII والفيبرينوجين: DIC","XII: نقص وراثي بلا نزف (aPTT مطوّل فقط)","XI: نزف بعد الجراحة"],
 i:["المثبطات (مضاد التخثر الذئبي) تخفض نتائج عدة عوامل كاذباً ← فحص بتخفيفات متعددة","العامل VII عمره قصير فينخفض أولاً في نقص فيتامين K"],
 r:["Mixing Study (1:1 PT/aPTT)","PT (Prothrombin Time)","aPTT (Activated Partial Thromboplastin Time)","Factor VIII Activity","Factor IX Activity"]},

"Plasminogen": {
 w:"السليفة غير الفعالة للبلازمين، الإنزيم الذي يذيب الفيبرين والخثرة.",
 y:"تقييم الانحلال الفيبريني المفرط، DIC، قبل العلاج المذيب للخثرة، والنقص الوراثي النادر (التهاب الملتحمة الخشبي).",
 p:"لا يحتاج تحضيراً.",
 s:"سترات أزرق.",
 h:["الحمل والالتهاب"],
 l:["DIC والانحلال الفيبريني","العلاج بالمذيبات (ستربتوكيناز، tPA)","أمراض الكبد","النقص الوراثي","حديثو الولادة (منخفض طبيعياً)"],
 i:["العلاج المذيب يستهلكه"],
 r:["FDP (Fibrin Degradation Products)","D-Dimer","Fibrinogen"]},

"FDP (Fibrin Degradation Products)": {
 w:"شظايا ناتجة عن تكسير البلازمين للفيبرين والفيبرينوجين معاً (X، Y، D، E).",
 y:"دعم تشخيص DIC والانحلال الفيبريني الأولي، ومتابعة العلاج المذيب للخثرة.",
 p:"لا يحتاج تحضيراً.",
 s:"سترات أزرق أو أنبوب FDP خاص يحتوي مثبط الانحلال.",
 h:["DIC","الجلطات والانصمام الرئوي","العلاج المذيب للخثرة","بعد الجراحة والرضوض","> 40 µg/mL: خطر نزف (الدم لا يتخثر جيداً)"],
 l:[],
 i:["العامل الروماتويدي يعطي إيجابية كاذبة","D-dimer أكثر نوعية للفيبرين المتصالب وأكثر استخداماً اليوم"],
 r:["D-Dimer","Fibrinogen","Plasminogen","Platelet Count","PT (Prothrombin Time)"]}
});

window.ENC_EN = Object.assign(window.ENC_EN || {}, {
"Bone Marrow Aspiration & Biopsy": {
 w:"Aspiration of liquid marrow (for smears, flow cytometry and genetics) and a tissue core (trephine biopsy), usually from the posterior iliac crest.",
 y:"Unexplained cytopenias, suspected leukemia, myelodysplasia or myeloma, lymphoma staging and fever of unknown origin.",
 p:"Written consent, coagulation and platelet check beforehand, local anesthesia. Fasting only if sedation is used.",
 s:"Smears made immediately at the bedside, EDTA for flow, heparin for cytogenetics, and the core in 10% neutral-buffered formalin followed by decalcification.",
 h:["Blasts > 20%: acute leukemia","Plasma cells > 10%: multiple myeloma","Hypercellularity: myeloproliferative neoplasms"],
 l:["Hypocellularity: aplastic anemia, post-chemotherapy","Fibrosis: myelofibrosis (dry tap)"],
 i:["Only the first pull is used for smears — later pulls are hemodiluted","Strong acid decalcification ruins immunostaining and molecular tests","Requires a same-day CBC and peripheral smear"],
 r:["CBC (Complete Blood Count)","Peripheral Blood Smear","Flow Cytometry (CD markers)","Bone Marrow Iron Stain (Perls)","Karyotype (Chromosome Analysis)"]},

"Leukocyte Alkaline Phosphatase (LAP) Score": {
 w:"A cytochemical stain measuring alkaline phosphatase activity in mature neutrophils; a score is summed from 100 neutrophils (0–4+ each).",
 y:"Distinguishes chronic myeloid leukemia (low) from a leukemoid reaction (high); sometimes used in polycythemia vera.",
 p:"No preparation needed.",
 s:"Fresh smear from finger prick or heparin within hours — EDTA inhibits the enzyme.",
 h:["Leukemoid reaction and infection","Polycythemia vera and myelofibrosis","Pregnancy and corticosteroids"],
 l:["Chronic myeloid leukemia","PNH","Aplastic anemia"],
 i:["Replaced by BCR-ABL testing for diagnosing CML","Delay or EDTA falsely lowers it"],
 r:["BCR-ABL (Philadelphia Chromosome)","CBC (Complete Blood Count)","WBC Differential (Absolute Counts)"]},

"Sudan Black B (SBB) Stain": {
 w:"A stain that colors phospholipids in myeloid granules black, while lymphoid cells stay unstained.",
 y:"Distinguishes acute myeloid leukemia (positive) from acute lymphoblastic leukemia (negative) on marrow examination.",
 p:"No preparation needed.",
 s:"Fresh, unfixed marrow or blood smear.",
 h:["Positive: AML (myeloblasts), neutrophils, monocytes and their precursors"],
 l:["Negative: ALL, lymphocytes, red cells and platelets"],
 i:["Largely replaced by flow cytometry","Rarely positive in ALL"],
 r:["PAS Stain (Periodic Acid–Schiff)","TdT (Terminal Deoxynucleotidyl Transferase)","Flow Cytometry (CD markers)","Bone Marrow Aspiration & Biopsy"]},

"PAS Stain (Periodic Acid–Schiff)": {
 w:"A stain showing intracellular glycogen in magenta. Lymphoblasts show a characteristic coarse 'block' pattern.",
 y:"Supports the diagnosis of ALL and erythroleukemia (M6); in tissue it highlights fungi and mucin.",
 p:"No preparation needed.",
 s:"Marrow or blood smear, or tissue sections.",
 h:["ALL (block positivity)","Erythroleukemia (positive erythroblasts)","Sometimes thalassemia and iron deficiency"],
 l:["Myeloblasts are usually negative"],
 i:["A supportive, not stand-alone, result","Interpret with flow cytometry"],
 r:["Sudan Black B (SBB) Stain","TdT (Terminal Deoxynucleotidyl Transferase)","Flow Cytometry (CD markers)"]},

"TdT (Terminal Deoxynucleotidyl Transferase)": {
 w:"A nuclear enzyme present only in immature lymphoid cells (pre-B and pre-T), detected by flow cytometry or immunohistochemistry.",
 y:"Confirms lymphoblastic leukemia/lymphoma and distinguishes it from mature lymphoid neoplasms.",
 p:"No preparation needed.",
 s:"Marrow or blood in EDTA for flow, or fixed tissue for IHC.",
 h:["ALL and lymphoblastic lymphoma (> 90%)","Some AML","Lymphoid blast crisis of CML"],
 l:["Negative in mature cells and mature lymphomas"],
 i:["Normal precursors (hematogones) in children are positive — do not mistake for disease"],
 r:["Flow Cytometry (CD markers)","PAS Stain (Periodic Acid–Schiff)","Bone Marrow Aspiration & Biopsy"]},

"TRAP Stain (Tartrate-Resistant Acid Phosphatase)": {
 w:"A stain detecting acid phosphatase that is not inhibited by tartrate, characteristic of lymphocytes with hair-like projections.",
 y:"Diagnosis of hairy-cell leukemia.",
 p:"No preparation needed.",
 s:"Fresh blood or marrow smear, or tissue section (TRAP immunostain).",
 h:["Hairy-cell leukemia","Some lymphomas, Gaucher disease and osteoclasts"],
 l:[],
 i:["Replaced by flow cytometry (CD11c, CD25, CD103) and BRAF V600E testing"],
 r:["BRAF V600E Mutation","Flow Cytometry (CD markers)","Peripheral Blood Smear"]},

"Pyruvate Kinase (PK)": {
 w:"A glycolytic enzyme in red cells; its deficiency is the second commonest red-cell enzymopathy after G6PD.",
 y:"Evaluation of hereditary non-spherocytic hemolytic anemia in children with jaundice and splenomegaly.",
 p:"Before transfusion or 3 months after.",
 s:"Purple EDTA, shipped chilled within 48 h.",
 h:["Reticulocytosis (young cells are enzyme-rich)"],
 l:["Inherited PK deficiency (autosomal recessive)","Occasionally acquired marrow disorders"],
 i:["Recent transfusion gives falsely normal results","Leukocytes (enzyme-rich) must be removed before assay"],
 r:["G6PD (Glucose-6-Phosphate Dehydrogenase)","Reticulocyte Count","Osmotic Fragility Test","Peripheral Blood Smear"]},

"Heinz Body Stain": {
 w:"A supravital stain (crystal violet) showing precipitated denatured hemoglobin inside red cells as small inclusions.",
 y:"Detects oxidative hemolysis: G6PD deficiency after fava beans or drugs, unstable hemoglobins and oxidant poisoning.",
 p:"No preparation. Record drugs and recent exposures.",
 s:"Fresh purple EDTA.",
 h:["G6PD deficiency during a crisis","Unstable hemoglobin","Oxidant drugs (dapsone, primaquine, nitrofurantoin)","Post-splenectomy"],
 l:[],
 i:["Not visible with routine Wright stain","Disappear within days as the spleen removes them (bite cells)"],
 r:["G6PD (Glucose-6-Phosphate Dehydrogenase)","Peripheral Blood Smear","Methemoglobin","Reticulocyte Count"]},

"Free Erythrocyte Protoporphyrin (FEP / ZPP)": {
 w:"Protoporphyrin that has not incorporated iron to form heme, so it binds zinc inside red cells.",
 y:"Detects early iron deficiency and chronic lead poisoning, and diagnoses erythropoietic protoporphyria.",
 p:"No preparation needed.",
 s:"Purple EDTA protected from light.",
 h:["Iron deficiency","Lead poisoning","Anemia of chronic disease","Hereditary protoporphyria (photosensitivity)"],
 l:[],
 i:["Light degrades it","Rises in any condition that impairs iron incorporation, so it is non-specific"],
 r:["Ferritin","Blood Lead Level","Iron (Fe)","Urine Porphobilinogen & Porphyrins"]},

"Sulfhemoglobin": {
 w:"Hemoglobin irreversibly bound to sulfur; it cannot carry oxygen and persists for the life of the red cell.",
 y:"Persistent cyanosis after drugs (sulfonamides, phenacetin, metoclopramide) or hydrogen-sulfide exposure, with normal methemoglobin.",
 p:"Draw immediately.",
 s:"EDTA or heparin on a CO-oximeter.",
 h:["Sulfur-containing drugs and chemicals","Chronic constipation with sulfide-producing gut bacteria"],
 l:[],
 i:["Does not respond to methylene blue, unlike methemoglobin","Some analyzers misread it as methemoglobin"],
 r:["Methemoglobin","Carboxyhemoglobin","CBC (Complete Blood Count)"]},

"PNH Flow Cytometry (CD55/CD59/FLAER)": {
 w:"Flow-cytometric detection of loss of GPI-anchored proteins (CD55, CD59, FLAER) from red and white cells.",
 y:"Diagnosis of paroxysmal nocturnal hemoglobinuria: DAT-negative hemolysis, thrombosis at unusual sites, cytopenias or aplastic anemia.",
 p:"No preparation needed.",
 s:"Purple EDTA at room temperature, arriving within 48 h.",
 h:["PNH clone: size reported in red cells, neutrophils and monocytes"],
 l:[],
 i:["Transfusion masks the red-cell clone → neutrophils and monocytes are more accurate","Replaced the old Ham and sucrose lysis tests"],
 r:["Haptoglobin","LDH (Lactate Dehydrogenase)","Direct Coombs Test (DAT)","Flow Cytometry (CD markers)"]},

"Lymphocyte Subsets (CD3/CD4/CD8/CD19/NK)": {
 w:"Flow-cytometric percentages and absolute counts of T cells (CD3, CD4, CD8), B cells (CD19) and natural-killer cells (CD16/56).",
 y:"Monitoring HIV infection and deciding on opportunistic-infection prophylaxis, and evaluating congenital and acquired immunodeficiency.",
 p:"Preferably drawn at the same time of day (diurnal variation).",
 s:"Purple EDTA at room temperature (not refrigerated), analyzed within 24–48 h.",
 h:["CD8: viral infections (EBV, CMV)","CD4:CD8 ratio < 1: HIV, viral infection"],
 l:["CD4 < 200/µL: AIDS and Pneumocystis risk","Severe combined immunodeficiency (SCID)","Corticosteroids and chemotherapy"],
 i:["Absolute counts depend on a CBC from the same sample","Steroids and diurnal variation lower CD4"],
 r:["HIV RNA (Viral Load)","Flow Cytometry (CD markers)","CBC (Complete Blood Count)","IgG"]},

"Bone Marrow Iron Stain (Perls)": {
 w:"A Prussian-blue stain showing storage iron in marrow macrophages and iron granules within erythroblasts.",
 y:"The gold standard for iron stores, and diagnosis of sideroblastic anemia (ring sideroblasts).",
 p:"Part of the marrow aspiration.",
 s:"Marrow aspirate smear containing spicules.",
 h:["Iron overload and anemia of chronic disease (high macrophage iron)","Ring sideroblasts ≥ 15%: sideroblastic anemia"],
 l:["Absent iron: iron deficiency"],
 i:["Smears without spicules cannot be assessed","Decalcified trephines lose iron"],
 r:["Ferritin","Bone Marrow Aspiration & Biopsy","Transferrin Saturation"]},

"Bleeding Time": {
 w:"Time for bleeding to stop after a standardized small incision on the forearm with a cuff inflated to 40 mmHg.",
 y:"An old test of platelet and vessel-wall function; no longer recommended pre-operatively because of poor reproducibility, largely replaced by PFA-100.",
 p:"Stop aspirin and NSAIDs 7–10 days. Warn the patient of a possible small scar.",
 s:"Performed on the patient with a standardized device.",
 h:["Prolonged: thrombocytopenia, aspirin, von Willebrand disease, uremia, platelet-function disorders","> 15 min: stop the test and apply pressure"],
 l:[],
 i:["Highly operator- and skin-dependent","Does not predict surgical bleeding"],
 r:["PFA-100 (Platelet Function)","Platelet Count","Platelet Aggregation Studies","von Willebrand Factor Antigen"]},

"Platelet Aggregation Studies": {
 w:"Light-transmission measurement of platelet aggregation in platelet-rich plasma after adding agonists (ADP, collagen, epinephrine, arachidonic acid, ristocetin).",
 y:"Diagnosis of inherited platelet-function disorders (Glanzmann, Bernard-Soulier), von Willebrand disease, and aspirin or clopidogrel resistance.",
 p:"Stop aspirin, NSAIDs and antiplatelets 7–10 days (unless measuring their effect). Fasting; avoid caffeine and fatty meals.",
 s:"Blue 3.2% citrate at room temperature, no pneumatic tube, tested within 3–4 h.",
 h:[],
 l:["No response to all agonists except ristocetin: Glanzmann thrombasthenia","Absent ristocetin response only: Bernard-Soulier or von Willebrand disease","Weak arachidonic-acid response: aspirin","Weak ADP response: clopidogrel"],
 i:["Platelets < 100 or lipemia invalidate the reading","Cooling activates platelets","A specialized test requiring a reference laboratory"],
 r:["PFA-100 (Platelet Function)","von Willebrand Factor Antigen","Platelet Count","Bleeding Time"]},

"ACT (Activated Clotting Time)": {
 w:"Clotting time of whole blood after activation (kaolin or celite) on a point-of-care device.",
 y:"Monitoring high-dose heparin during open-heart surgery, catheterization, ECMO and dialysis, where aPTT is unsuitable.",
 p:"No preparation needed.",
 s:"Fresh whole blood tested immediately on the device.",
 h:["Heparin (target procedure-dependent, often > 250–400 s on bypass)","Severe thrombocytopenia and factor deficiency","Hypothermia and hemodilution"],
 l:["Hypercoagulability or inadequate heparin dose"],
 i:["Hypothermia and hemodilution prolong it without heparin","Values differ between devices and activators"],
 r:["aPTT (Activated Partial Thromboplastin Time)","Anti-Xa (Heparin Level)","Platelet Count"]},

"Coagulation Factor Assays (II, V, VII, X, XI, XII)": {
 w:"Measurement of each clotting factor's activity by mixing patient plasma with plasma deficient in that single factor.",
 y:"Identifies the cause of an unexplained prolonged PT or aPTT after a mixing study, diagnoses inherited deficiencies, and assesses liver disease and DIC.",
 p:"Record anticoagulants and vitamin K therapy.",
 s:"Blue citrate 9:1, separated and frozen if delayed — factors V and VIII are labile.",
 h:["Pregnancy and inflammation (some factors)"],
 l:["Factors II, VII, IX, X: warfarin and vitamin K deficiency","All factors except VIII: liver disease","V, VIII and fibrinogen: DIC","XII: inherited deficiency without bleeding (isolated prolonged aPTT)","XI: post-surgical bleeding"],
 i:["Inhibitors (lupus anticoagulant) falsely lower several factors → test at multiple dilutions","Factor VII has the shortest half-life, so it falls first in vitamin K deficiency"],
 r:["Mixing Study (1:1 PT/aPTT)","PT (Prothrombin Time)","aPTT (Activated Partial Thromboplastin Time)","Factor VIII Activity","Factor IX Activity"]},

"Plasminogen": {
 w:"The inactive precursor of plasmin, the enzyme that dissolves fibrin and clots.",
 y:"Evaluating excessive fibrinolysis, DIC, before thrombolytic therapy, and rare inherited deficiency (ligneous conjunctivitis).",
 p:"No preparation needed.",
 s:"Blue citrate.",
 h:["Pregnancy and inflammation"],
 l:["DIC and fibrinolysis","Thrombolytic therapy (streptokinase, tPA)","Liver disease","Inherited deficiency","Newborns (physiologically low)"],
 i:["Thrombolytic therapy consumes it"],
 r:["FDP (Fibrin Degradation Products)","D-Dimer","Fibrinogen"]},

"FDP (Fibrin Degradation Products)": {
 w:"Fragments (X, Y, D, E) produced when plasmin degrades both fibrin and fibrinogen.",
 y:"Supports the diagnosis of DIC and primary fibrinolysis, and monitors thrombolytic therapy.",
 p:"No preparation needed.",
 s:"Blue citrate or a special FDP tube containing a fibrinolysis inhibitor.",
 h:["DIC","Thrombosis and pulmonary embolism","Thrombolytic therapy","After surgery and trauma","> 40 µg/mL: bleeding risk (blood clots poorly)"],
 l:[],
 i:["Rheumatoid factor causes false positives","D-dimer is more specific for cross-linked fibrin and more widely used today"],
 r:["D-Dimer","Fibrinogen","Plasminogen","Platelet Count","PT (Prothrombin Time)"]}
});

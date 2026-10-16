/* New tests from Fischbach & Dunning, 9th ed. — rewritten (AR + EN). Group 6: Stool, CSF, prenatal fluids & Cytology/Histopathology. */
window.TESTS_EXTRA = (window.TESTS_EXTRA || []).concat([
 {n:"Fecal Occult Blood (Guaiac gFOBT)",c:"BodyFluids",s:"3 stool samples on guaiac cards",r:"Negative",u:"GI bleeding (largely replaced by FIT)"},
 {n:"Apt Test (Fetal vs Maternal Blood)",c:"BodyFluids",s:"Bloody stool/vomitus of newborn",r:"Adult Hb (turns brown)",u:"Swallowed maternal blood vs neonatal GI bleed"},
 {n:"Stool Reducing Substances & pH",c:"BodyFluids",s:"Fresh liquid stool (< 1 h)",r:"< 0.25 g/dL | pH 7.0–7.5",u:"Carbohydrate malabsorption in infants"},
 {n:"Fecal Leukocytes",c:"BodyFluids",s:"Fresh stool (methylene blue smear)",r:"None seen",u:"Inflammatory vs non-inflammatory diarrhea"},
 {n:"Fecal Fat (Qualitative / 72h)",c:"BodyFluids",s:"Random stool (Sudan stain) or 72-h collection",r:"< 7 g/day (72 h)",u:"Steatorrhea, malabsorption, pancreatic insufficiency"},
 {n:"Stool Electrolytes & Osmotic Gap",c:"BodyFluids",s:"Liquid stool, fresh",r:"Gap < 50 secretory | > 100 osmotic",u:"Chronic diarrhea classification"},
 {n:"CSF IgG Index",c:"BodyFluids",s:"CSF + paired serum",r:"< 0.7",u:"Intrathecal IgG synthesis (MS)"},
 {n:"CSF VDRL",c:"BodyFluids",s:"CSF (not bloody)",r:"Non-reactive",u:"Neurosyphilis"},
 {n:"Amniotic Fluid L/S Ratio (Lung Maturity)",c:"BodyFluids",s:"Amniotic fluid, on ice, protect from light",r:"L/S ≥ 2.0 | PG present",u:"Fetal lung maturity"},
 {n:"Fetal Fibronectin (fFN)",c:"BodyFluids",s:"Posterior fornix swab (24–34 wk)",r:"< 50 ng/mL",u:"Preterm delivery risk"},
 {n:"Pap Smear (Conventional / Liquid-Based)",c:"Cytology",s:"Cervical brush/spatula in LBC vial or fixed slide",r:"NILM (Bethesda)",u:"Cervical cancer screening"},
 {n:"HPV DNA Test (High-Risk)",c:"Cytology",s:"Cervical sample in LBC vial",r:"hrHPV not detected",u:"Primary screening, ASC-US triage"},
 {n:"FNA Cytology (Fine-Needle Aspiration)",c:"Cytology",s:"Air-dried & alcohol-fixed smears ± cell block",r:"Benign / negative for malignancy",u:"Thyroid, breast, lymph node, salivary masses"},
 {n:"Urine Cytology",c:"Cytology",s:"Fresh voided urine (not first AM) in fixative",r:"Negative for HGUC (Paris)",u:"Hematuria, urothelial carcinoma follow-up"},
 {n:"CSF Cytology",c:"Cytology",s:"≥ 10 mL CSF, fresh, to lab within 1 h",r:"Negative for malignant cells",u:"Leptomeningeal metastasis, CNS lymphoma"},
 {n:"Serous Effusion Cytology (Pleural / Peritoneal)",c:"Cytology",s:"Fresh fluid (≥ 50–100 mL), heparinized",r:"Negative for malignancy",u:"Malignant effusion, staging"},
 {n:"Respiratory Cytology (Sputum / BAL / Brushings)",c:"Cytology",s:"Sputum ×3, BAL, bronchial brushings/washings",r:"Negative for malignancy",u:"Lung cancer, infections (PCP, fungi)"},
 {n:"Breast Cytology (Nipple Discharge / Cyst Fluid)",c:"Cytology",s:"Discharge smears / cyst aspirate",r:"Benign",u:"Bloody discharge, atypical cysts"},
 {n:"Anal Pap Smear",c:"Cytology",s:"Anal canal swab in LBC vial",r:"NILM",u:"Anal cancer screening (HIV, MSM, transplant)"},
 {n:"Tissue Biopsy (Histopathology)",c:"Cytology",s:"Tissue in 10% NBF (10:1 volume)",r:"No dysplasia / malignancy",u:"Definitive diagnosis, grading & staging"},
 {n:"Frozen Section (Intraoperative)",c:"Cytology",s:"Fresh unfixed tissue, sent immediately",r:"Report within ~20 min",u:"Margins, malignancy, adequacy during surgery"},
 {n:"Sentinel Lymph Node Biopsy",c:"Cytology",s:"Fresh/fixed node(s) after tracer mapping",r:"No metastatic tumor",u:"Breast cancer & melanoma staging"},
 {n:"ER / PR Receptors (IHC)",c:"Cytology",s:"FFPE tumor (NBF 6–72 h)",r:"Allred / % positive nuclei",u:"Breast cancer endocrine therapy"},
 {n:"Direct Immunofluorescence (Skin / Kidney Biopsy)",c:"Cytology",s:"Fresh tissue in Michel's medium (not formalin)",r:"No immune deposits",u:"Bullous diseases, lupus, glomerulonephritis"}
]);

window.ENC = Object.assign(window.ENC || {}, {
"Fecal Occult Blood (Guaiac gFOBT)": {
 w:"فحص كيميائي يكشف نشاط البيروكسيداز للهيم في البراز على بطاقات الغواياك.",
 y:"كشف النزف الهضمي الخفي؛ حلّ محله فحص FIT المناعي في تحري سرطان القولون لأنه أكثر نوعية ولا يحتاج حمية.",
 p:"3 أيام قبل وأثناء الجمع: تجنّب اللحوم الحمراء، الفجل، اللفت، البروكلي، الأسبرين ومضادات الالتهاب، وفيتامين C > 250 ملغ.",
 s:"عينتان من 3 حركات أمعاء متتالية على البطاقات، تُرسل خلال 14 يوماً.",
 h:["النزف من أي مكان في الجهاز الهضمي: القرحة، الأورام، السلائل، البواسير، التهاب الأمعاء","اللحوم الحمراء والخضار الغنية بالبيروكسيداز (إيجابي كاذب)"],
 l:[],
 i:["فيتامين C سلبي كاذب","العينة الواحدة من فحص المستقيم غير مقبولة","أقل حساسية لسرطان القولون من FIT"],
 r:["Fecal Immunochemical Test (FIT)","CBC (Complete Blood Count)","Ferritin"]},

"Apt Test (Fetal vs Maternal Blood)": {
 w:"فحص يميز الهيموغلوبين الجنيني (يقاوم القلوي فيبقى وردياً) عن هيموغلوبين البالغين (يتحول إلى البني) بإضافة هيدروكسيد الصوديوم.",
 y:"تحديد مصدر الدم في قيء أو براز المولود: دم الأم المبتلع أثناء الولادة أو من حلمة متشققة (حميد) أم نزف هضمي حقيقي عند الطفل.",
 p:"لا يحتاج تحضيراً.",
 s:"براز أو قيء دموي طازج (أو حفاض) يحتوي دماً أحمر.",
 h:["يبقى وردياً: دم جنيني ← نزف من الطفل نفسه يحتاج تقييماً"],
 l:["يتحول للبني الأصفر: دم أمومي مبتلع"],
 i:["الدم الأسود المتغير (الميلينا) غير صالح","الأم المصابة بالثلاسيميا أو ثبات HbF قد تعطي نتيجة مضللة"],
 r:["CBC (Complete Blood Count)","Kleihauer-Betke Acid Elution Test","PT (Prothrombin Time)"]},

"Stool Reducing Substances & pH": {
 w:"كشف السكريات غير الممتصة (الغلوكوز، اللاكتوز، الغالاكتوز) في البراز بطريقة Clinitest، مع قياس حموضة البراز.",
 y:"تقييم الإسهال عند الرضع: عدم تحمّل اللاكتوز أو سوء امتصاص السكريات (البراز حامضي pH < 5.5 مع سكريات مختزلة).",
 p:"يجب أن يكون الطفل يتناول السكر المشتبه به (حليب).",
 s:"براز سائل طازج (يُفحص خلال ساعة)؛ يُجمع على كيس بلاستيكي لا على الحفاض الماص.",
 h:["> 0.5 g/dL: سوء امتصاص السكريات (نقص اللاكتاز، بعد التهاب المعدة والأمعاء الفيروسي)","الغالاكتوزيميا"],
 l:[],
 i:["السكروز لا يُكشف (غير مختزل) إلا بعد الحلمهة بالحمض","التأخير يسمح للبكتيريا باستهلاك السكر","الحفاض الماص يفقد السائل"],
 r:["Lactose Tolerance / Hydrogen Breath Test","Galactosemia (GALT Enzyme)","Stool Electrolytes & Osmotic Gap"]},

"Fecal Leukocytes": {
 w:"فحص مجهري لمسحة براز بصبغة أزرق الميثيلين للبحث عن الكريات البيضاء.",
 y:"التمييز بين الإسهال الالتهابي/الغازي (الشيغيلا، السالمونيلا، الكامبيلوباكتر، التهاب القولون) والإسهال غير الالتهابي (الفيروسي، السموم).",
 p:"لا يحتاج تحضيراً.",
 s:"براز طازج يحتوي مخاطاً.",
 h:["الشيغيلا، السالمونيلا، الكامبيلوباكتر، E. coli الغازية","التهاب القولون التقرحي وكرون","المطثية العسيرة (أحياناً)"],
 l:["غائبة: الفيروسات، الكوليرا، الجيارديا، التسمم بالسموم الجاهزة"],
 i:["حساسيته متوسطة ← الكالبروتكتين البرازي أدق","التأخير يحلل الخلايا","الأميبا تحلل الكريات البيضاء فتغيب رغم الزحار"],
 r:["Fecal Calprotectin","Stool Culture","C. difficile Toxin A/B","Stool Ova & Parasites (O&P)"]},

"Fecal Fat (Qualitative / 72h)": {
 w:"كشف الدهون في البراز بصبغة سودان (نوعي) أو قياسها كمياً في جمع 72 ساعة.",
 y:"تأكيد الإسهال الدهني (Steatorrhea): براز دهني كريه الرائحة يطفو، في قصور البنكرياس الخارجي، التليف الكيسي، الداء البطني، والركود الصفراوي.",
 p:"للكمي: حمية تحتوي 100 غرام دهون يومياً لمدة 3 أيام قبل الجمع وأثناءه. تجنّب الملينات والزيوت المعدنية والباريوم.",
 s:"عينة عشوائية للنوعي، أو كل البراز خلال 72 ساعة في أوعية مبردة موزونة.",
 h:["> 7 g/24 h: إسهال دهني","قصور البنكرياس (دهون متعادلة)","أمراض الغشاء المخاطي (أحماض دهنية)","الركود الصفراوي"],
 l:[],
 i:["عدم الالتزام بالحمية أو الجمع غير الكامل","الملينات والتحاميل الزيتية","Elastase البرازي بديل أسهل لقصور البنكرياس"],
 r:["D-Xylose Absorption Test","Lipase","Sweat Chloride Test","tTG-IgA (Tissue Transglutaminase)","Vitamin E (Tocopherol)"]},

"Stool Electrolytes & Osmotic Gap": {
 w:"قياس الصوديوم والبوتاسيوم في البراز السائل وحساب الفجوة الأسمولية: 290 − 2 × (Na + K).",
 y:"تصنيف الإسهال المزمن: إفرازي (فجوة < 50: السموم، الأورام الهرمونية، الملينات المحفزة) أم أسموزي (فجوة > 100: اللاكتوز، المغنيسيوم، السوربيتول).",
 p:"تجنّب الملينات قبل الجمع (ما لم يكن الهدف كشف إساءة استخدامها).",
 s:"براز سائل طازج (لا يُقبل البراز المتماسك).",
 h:["فجوة > 100: إسهال أسموزي (سوء امتصاص السكريات، ملينات المغنيسيوم)"],
 l:["فجوة < 50: إسهال إفرازي (الكوليرا، VIPoma، السرطاوي، الملينات المحفزة)"],
 i:["استخدم 290 كأسمولية مفترضة لأن البكتيريا ترفع الأسمولية المقاسة بعد الجمع","الأسمولية < 250 تعني تلوثاً بالماء أو البول","مغنيسيوم البراز > 45 mmol/L يكشف إساءة الملينات"],
 r:["Stool Reducing Substances & pH","Potassium (K⁺)","Fecal Calprotectin","Chromogranin A (CgA)"]},

"CSF IgG Index": {
 w:"معادلة تقارن نسبة IgG إلى الألبومين في السائل الشوكي بنسبتها في المصل، لتمييز IgG المصنوع داخل الجهاز العصبي عن المتسرب من الدم.",
 y:"دعم تشخيص التصلب المتعدد والأمراض الالتهابية للجهاز العصبي، مع الأشرطة قليلة النسيلة.",
 p:"إجراء طبي، مع سحب دم بنفس اليوم.",
 s:"سائل شوكي ومصل مقترن.",
 h:["> 0.7: إنتاج IgG داخل القراب — التصلب المتعدد (~70–90%)، التهاب الدماغ، الزهري العصبي، التهاب الدماغ والنخاع الحاد"],
 l:[],
 i:["الوخز الرضّي (الدم) يفسد الحساب","تلف الحاجز الدموي الدماغي الشديد يغير النتيجة ← مؤشر الألبومين","الأشرطة قليلة النسيلة أكثر حساسية"],
 r:["CSF Oligoclonal Bands","CSF Protein","CSF Cell Count & Differential"]},

"CSF VDRL": {
 w:"فحص غير لولبي لأضداد الكارديوليبين في السائل الشوكي.",
 y:"تشخيص الزهري العصبي عند مريض مصله إيجابي للزهري ولديه أعراض عصبية أو عينية أو سمعية أو فشل علاج.",
 p:"إجراء طبي.",
 s:"سائل شوكي غير دموي.",
 h:["تفاعلي: الزهري العصبي (نوعي جداً)"],
 l:[],
 i:["حساسيته منخفضة (30–70%) ← السلبية لا تستبعد الزهري العصبي؛ ارتفاع الخلايا اللمفاوية والبروتين يدعم التشخيص","الوخز الدموي مع زهري نشط يعطي إيجابية كاذبة","FTA-ABS في السائل الشوكي السلبي يستبعده تقريباً"],
 r:["Syphilis RPR/VDRL","CSF Cell Count & Differential","CSF Protein","HIV Antibody/Ag (4th Gen combo)"]},

"Amniotic Fluid L/S Ratio (Lung Maturity)": {
 w:"نسبة الليسيثين إلى السفينغومايلين (مكونات السورفاكتانت) في السائل الأمنيوسي، مع كشف الفوسفاتيديل غليسيرول (PG) أو عدّ الأجسام الصفائحية.",
 y:"تقييم نضج رئة الجنين قبل الولادة المبكرة المخطط لها (أقل استخداماً اليوم بعد اعتماد الكورتيزون الوقائي ومعايير العمر الحملي).",
 p:"بزل السلى (إجراء طبي) أو تجمع مهبلي بعد تمزق الأغشية.",
 s:"سائل أمنيوسي على الثلج محمي من الضوء، يُرسل فوراً، دون تثفيل قوي.",
 h:["L/S ≥ 2.0 مع وجود PG: رئة ناضجة (خطر متلازمة الضائقة التنفسية منخفض)","عدد الأجسام الصفائحية > 50,000/µL: ناضج"],
 l:["L/S < 1.5: رئة غير ناضجة","السكري الأمومي يؤخر النضج (PG أدق)"],
 i:["التلوث بالدم أو العقي يفسد النتيجة","PG لا يتأثر بالدم أو العقي"],
 r:["Fetal Fibronectin (fFN)","Maternal Serum Screening (AFP / Quad)"]},

"Fetal Fibronectin (fFN)": {
 w:"بروتين لاصق بين الأغشية الجنينية وجدار الرحم، يظهر في الإفرازات المهبلية عند انفصال الأغشية قبل الولادة.",
 y:"تقييم خطر الولادة المبكرة عند الحامل بأعراض بين الأسبوع 24 و34: النتيجة السلبية تطمئن بقوة (احتمال الولادة خلال 14 يوماً < 1%).",
 p:"لا جماع ولا فحص مهبلي يدوي ولا تخطيط بالأمواج المهبلية ولا جل مهبلي خلال 24 ساعة.",
 s:"مسحة من القبو الخلفي للمهبل بمنظار، قبل أي فحص آخر، 10 ثوانٍ.",
 h:["≥ 50 ng/mL: خطر ولادة مبكرة خلال 7–14 يوماً ← الكورتيزون والتحويل"],
 l:["< 50: خطر منخفض جداً"],
 i:["الدم والجماع والجل والفحص اليدوي تعطي إيجابية كاذبة","قيمته الأساسية في النفي (قيمة تنبؤية سلبية > 99%)","لا يُستخدم مع تمزق الأغشية أو اتساع عنق الرحم ≥ 3 سم"],
 r:["Amniotic Fluid L/S Ratio (Lung Maturity)","Group B Strep (GBS) Screening"]},

"Pap Smear (Conventional / Liquid-Based)": {
 w:"أخذ خلايا من منطقة التحول في عنق الرحم وفحصها مجهرياً، إما كلطاخة مثبتة على شريحة أو في سائل حافظ (LBC) يسمح أيضاً بفحص HPV. يُبلّغ بنظام بيثيسدا.",
 y:"تحري سرطان عنق الرحم والآفات السابقة له من عمر 21 (كل 3 سنوات، أو كل 5 سنوات مع HPV من عمر 30)، ومتابعة النتائج الشاذة.",
 p:"بعيداً عن الدورة الشهرية. لا دش مهبلي ولا جماع ولا أدوية أو مزلقات مهبلية 48 ساعة قبله.",
 s:"فرشاة/ملعقة من الظاهر والباطن؛ تُشطف فوراً في قارورة LBC، أو تُفرد على الشريحة وتُثبت بالكحول خلال ثوانٍ (قبل الجفاف).",
 h:["ASC-US و ASC-H: خلايا حرشفية لا نمطية","LSIL: آفة منخفضة الدرجة (تأثير HPV، CIN1)","HSIL: آفة عالية الدرجة (CIN2–3) ← تنظير المهبل","AGC: خلايا غدية لا نمطية","السرطان الحرشفي أو الغدي","العوامل الممرضة: المشعرات، المبيضات، الحلأ، تغير الفلورا"],
 l:["غير كافية (Unsatisfactory): قلة الخلايا أو حجبها بالدم والالتهاب ← أعد بعد 2–4 أشهر"],
 i:["تأخر التثبيت يسبب تشوه الخلايا بالجفاف (Air-drying)","الدم والمخاط والالتهاب تحجب الخلايا","غياب خلايا منطقة التحول يُذكر في التقرير","نسبة السلبية الكاذبة 10–20% ← قيمة التكرار الدوري و HPV"],
 r:["HPV DNA Test (High-Risk)","Tissue Biopsy (Histopathology)","Chlamydia NAAT/PCR","Vaginal Wet Mount"]},

"HPV DNA Test (High-Risk)": {
 w:"كشف الحمض النووي لأنواع فيروس الورم الحليمي البشري عالية الخطورة (14 نوعاً، مع تحديد 16 و18) المسببة لأغلب سرطانات عنق الرحم.",
 y:"التحري الأولي من عمر 25–30 (كل 5 سنوات)، فرز نتيجة ASC-US، والمتابعة بعد علاج الآفات عالية الدرجة.",
 p:"مثل لطاخة عنق الرحم.",
 s:"عينة عنق الرحم في قارورة LBC (أو مسحة ذاتية مهبلية في بعض البرامج).",
 h:["HPV 16 أو 18: تنظير مهبل فوري بغض النظر عن الخلايا","أنواع أخرى عالية الخطورة: فحص خلوي فرز"],
 l:["سلبي: خطر منخفض جداً لـ 5 سنوات"],
 i:["العدوى العابرة شائعة جداً تحت 30 سنة (لذلك لا يُستخدم للتحري قبل 25)","الجل المهبلي وكثرة الدم قد تثبط التفاعل","لا يكشف الأنواع منخفضة الخطورة (الثآليل)"],
 r:["Pap Smear (Conventional / Liquid-Based)","Anal Pap Smear","Tissue Biopsy (Histopathology)"]},

"FNA Cytology (Fine-Needle Aspiration)": {
 w:"شفط خلايا من كتلة بإبرة رفيعة (22–27G)، بالجس أو بتوجيه الأمواج فوق الصوتية أو الطبقي، ثم عمل لطاخات وكتلة خلوية (Cell block) للصبغات المناعية.",
 y:"تشخيص عقد الدرق (نظام بيثيسدا)، كتل الثدي والغدد اللعابية والعقد اللمفاوية والكبد والرئة، بأقل تدخل وبسرعة.",
 p:"موافقة. إيقاف مضادات التخثر حسب الموقع وتوجيه الطبيب. لا يحتاج صياماً عادة.",
 s:"لطاخات مجففة بالهواء (لصبغة Diff-Quik/جيمزا) وأخرى مثبتة فوراً بالكحول (لصبغة بابانيكولاو)، وشطف الإبرة في سائل حافظ أو RPMI للتدفق الخلوي (اللمفوما)، وكتلة خلوية في الفورمالين. التقييم السريع بجانب المريض (ROSE) يرفع الكفاية.",
 h:["الدرق: Bethesda I غير تشخيصي … VI خبيث","خبيث: سرطانة نقيلية أو أولية، لمفوما","التهاب حبيبي: السل، الساركويد"],
 l:["غير كافية: قلة الخلايا أو الدم الكثير"],
 i:["النتيجة السلبية لا تستبعد الخبث إذا كانت العينة غير ممثلة للآفة","تأخر التثبيت يسبب تشوه الجفاف للطاخات الكحولية","الدم الكثير يخفف الخلايا ← إبرة أرفع وشفط أقل","تحتاج اللمفوما غالباً خزعة لتحديد البنية"],
 r:["Tissue Biopsy (Histopathology)","Flow Cytometry (CD markers)","Thyroglobulin","Calcitonin","Sentinel Lymph Node Biopsy"]},

"Urine Cytology": {
 w:"فحص الخلايا الظهارية المنسلخة في البول بعد التثفيل أو التحضير السائل، ويُبلّغ حسب نظام باريس.",
 y:"تقييم البيلة الدموية غير المفسرة (خاصة عند المدخنين وكبار السن)، متابعة سرطان الظهارة البولية بعد العلاج، والتعرض المهني للأصبغة.",
 p:"شرب الماء جيداً. ليس أول بول الصباح (الخلايا تتحلل ليلاً في المثانة). يُفضل 3 عينات بأيام مختلفة.",
 s:"بول تلقائي طازج 50–100 مل، أو غسيل مثانة أثناء التنظير، يُرسل فوراً أو يُضاف مثبت (كحول 50%).",
 h:["HGUC: سرطانة ظهارية بولية عالية الدرجة (حساسية جيدة)","SHGUC: مشتبه","AUC: خلايا ظهارية لا نمطية","فيروس BK (خلايا Decoy) عند زارعي الكلى"],
 l:[],
 i:["حساسيتها منخفضة للأورام منخفضة الدرجة","الحصى والقثطرة والالتهاب تسبب تغيرات لا نمطية تفاعلية","البول الصباحي الأول والتأخير يحللان الخلايا","العلاج داخل المثانة (BCG) يغير الخلايا"],
 r:["Urine Blood / Hemoglobin","Urine Microscopy (Sediment)","Tissue Biopsy (Histopathology)"]},

"CSF Cytology": {
 w:"فحص خلايا السائل الشوكي بالتثفيل الخلوي (Cytospin) للبحث عن خلايا خبيثة أو التهابية.",
 y:"كشف انتشار الأورام إلى السحايا (الثدي، الرئة، الميلانوما، ابيضاض الدم، اللمفوما)، ومتابعة علاج ALL داخل القراب.",
 p:"إجراء طبي (بزل قطني).",
 s:"≥ 10 مل سائل شوكي طازج يصل للمختبر خلال ساعة (الخلايا تتحلل بسرعة)، أو يُبرّد/يُضاف وسط حافظ إذا تأخر. أرسل عينة للتدفق الخلوي عند الاشتباه باللمفوما.",
 h:["خلايا خبيثة: سرطانة نقيلية، ابيضاض الدم، لمفوما","خلايا لمفاوية تفاعلية: التهاب السحايا الفيروسي"],
 l:[],
 i:["عينة واحدة تكشف ~50% من الحالات؛ تكرار الحجم الكبير (3 عينات) يرفعها إلى ~90%","الوخز الدموي يخفف الخلايا","التأخير يدمّر الخلايا"],
 r:["CSF Cell Count & Differential","CSF Protein","Flow Cytometry (CD markers)","CSF Glucose"]},

"Serous Effusion Cytology (Pleural / Peritoneal)": {
 w:"فحص خلايا السائل الجنبي أو البريتوني أو التاموري (لطاخات + كتلة خلوية مع صبغات مناعية) لتمييز الخلايا المتوسطة التفاعلية من الخبيثة.",
 y:"تشخيص الانصباب الخبيث (الرئة، الثدي، المبيض، المعدة، اللمفوما، الميزوثيليوما) وتحديد المرحلة، وغسل البريتون في جراحة الأورام النسائية والمعدية.",
 p:"إجراء طبي (بزل الصدر أو البطن).",
 s:"سائل طازج 50–100 مل على الأقل (مع هيبارين لمنع التخثر)، يُرسل بسرعة أو يُبرّد بـ 4 °C (لا فورمالين ولا كحول للسائل كاملاً).",
 h:["سرطانة نقيلية (الغدية الأكثر)","الميزوثيليوما","اللمفوما (تحتاج تدفقاً خلوياً)"],
 l:[],
 i:["الخلايا المتوسطة التفاعلية قد تحاكي الخبث ← صبغات مناعية (Calretinin، BerEP4، MOC31، Claudin-4)","الحجم الأكبر يرفع الحساسية، والعينة الأولى تكشف ~60%","يُفحص مع الكيمياء (معايير Light)"],
 r:["Pleural / Ascitic Fluid Protein & LDH","SAAG (Serum–Ascites Albumin Gradient)","CA 125","CEA (Carcinoembryonic Antigen)","Flow Cytometry (CD markers)"]},

"Respiratory Cytology (Sputum / BAL / Brushings)": {
 w:"فحص خلايا القشع العميق، غسل القصبات والأسناخ (BAL)، الفراشي والغسالات أثناء تنظير القصبات، أو الشفط عبر جدار القصبة (EBUS-TBNA).",
 y:"تشخيص سرطان الرئة وتحديد نوعه وإجراء الفحوص الجزيئية (EGFR، ALK، PD-L1)، وكشف العدوى الانتهازية (المتكيسة، الفطريات، الفيروسات).",
 p:"القشع: 3 عينات صباحية بعد المضمضة وسعال عميق. التنظير إجراء طبي بصيام.",
 s:"القشع والغسالات في مثبت (Saccomanno أو كحول 50%) أو طازجة تُرسل بسرعة؛ الفراشي تُفرد وتُثبت فوراً؛ BAL طازج لعدّ الخلايا والزرع.",
 h:["سرطانة حرشفية، غدية، صغيرة الخلايا","المتكيسة الرئوية (بصبغة GMS)، الرشاشيات، CMV","البلاعم المحملة بالهيموسيدرين (نزف سنخي)"],
 l:["القشع غير الكافي: لا بلاعم سنخية (لعاب)"],
 i:["القشع اللعابي غير صالح","التهاب الرئة والعلاج الكيماوي والإشعاعي يسبب تغيرات لا نمطية","الكتلة الخلوية مهمة للفحوص الجزيئية"],
 r:["EGFR Mutation (Exons 18-21)","ALK Gene Rearrangement (FISH/IHC)","PD-L1 Expression (IHC)","AFB Smear (TB)","Tissue Biopsy (Histopathology)"]},

"Breast Cytology (Nipple Discharge / Cyst Fluid)": {
 w:"فحص خلايا إفرازات الحلمة أو سائل كيس الثدي المشفوط.",
 y:"تقييم الإفرازات الدموية أو التلقائية من قناة واحدة (الورم الحليمي داخل القناة، السرطان)، وسائل الأكياس الدموي أو المتكرر.",
 p:"لا يحتاج تحضيراً.",
 s:"تُعصر الحلمة وتُفرد القطرات على شرائح وتُثبت فوراً بالكحول. سائل الكيس في وعاء طازج.",
 h:["خلايا ظهارية لا نمطية أو خبيثة","ورم حليمي داخل القناة"],
 l:[],
 i:["حساسيتها منخفضة — السلبية لا تستبعد الخبث ← التصوير والخزعة","سائل الكيس الأخضر أو الشفاف غير الدموي غالباً لا يحتاج فحصاً خلوياً","البلاعم الرغوية شائعة وحميدة"],
 r:["FNA Cytology (Fine-Needle Aspiration)","Tissue Biopsy (Histopathology)","Prolactin"]},

"Anal Pap Smear": {
 w:"لطاخة خلوية من القناة الشرجية للبحث عن الآفات داخل الظهارية المرتبطة بـ HPV، وتُبلّغ بنظام بيثيسدا.",
 y:"تحري سرطان الشرج عند الفئات عالية الخطورة: مرضى HIV، الرجال الذين يمارسون الجنس مع الرجال، زارعو الأعضاء، والنساء بسوابق آفات عنق الرحم أو الفرج عالية الدرجة.",
 p:"لا حقن شرجية ولا جماع شرجي ولا مزلقات 24 ساعة قبله.",
 s:"مسحة داكرون مبللة بالماء تُدخل 5–6 سم وتُسحب بالدوران مع الضغط، ثم تُشطف في قارورة LBC.",
 h:["ASC-US، LSIL، HSIL ← تنظير الشرج عالي الدقة (HRA) وخزعة"],
 l:[],
 i:["البراز والدم يحجبان الخلايا","مسحة القطن تحبس الخلايا ← استخدم الداكرون"],
 r:["HPV DNA Test (High-Risk)","Pap Smear (Conventional / Liquid-Based)","HIV Antibody/Ag (4th Gen combo)"]},

"Tissue Biopsy (Histopathology)": {
 w:"أخذ قطعة نسيج (بالإبرة، أو بالتنظير، أو بالاستئصال الجزئي أو الكامل) وتثبيتها ومعالجتها وطمرها بالبارافين وتقطيعها وصبغها (H&E ± صبغات خاصة ومناعية وفحوص جزيئية).",
 y:"المعيار الذهبي للتشخيص النهائي للأورام (النوع، الدرجة، الحواف، الغزو اللمفاوي الوعائي، المرحلة)، والأمراض الالتهابية والعدوائية.",
 p:"حسب الإجراء: موافقة، فحص التخثر، صيام عند التخدير.",
 s:"فورمالين 10% متعادل بحجم 10 أضعاف النسيج على الأقل، خلال ساعة من الاستئصال (زمن الإقفار البارد)، تثبيت 6–72 ساعة. ملصق بمعرّفين واتجاه العينة والموقع، ونموذج طلب بالمعلومات السريرية. أرسل جزءاً طازجاً للزرع أو الوراثة أو التألق المناعي عند الحاجة.",
 h:["خلل التنسج والسرطان الموضعي والغازي","الدرجة والمرحلة (TNM) والحواف الجراحية","الالتهاب الحبيبي والعدوى"],
 l:[],
 i:["تأخر التثبيت أو قلة الفورمالين يفسدان الشكل والصبغات المناعية (ER/PR، HER2)","التجفيف وسحق النسيج بالملقط (Crush artifact)","إزالة الكلس الحمضي تفسد DNA ← EDTA للعظم عند الحاجة للفحوص الجزيئية","خطأ التعريف أو التبديل أخطر الأخطاء ← معرّفان ومطابقة"],
 r:["Frozen Section (Intraoperative)","FNA Cytology (Fine-Needle Aspiration)","ER / PR Receptors (IHC)","HER2 Amplification (FISH)","PD-L1 Expression (IHC)"]},

"Frozen Section (Intraoperative)": {
 w:"تجميد سريع لنسيج طازج أثناء العملية بالـ Cryostat وتقطيعه وصبغه خلال دقائق لإعطاء تشخيص أولي للجراح.",
 y:"تقرير مسار الجراحة: هل الآفة خبيثة؟ هل الحواف سليمة؟ هل العقدة الحارسة مصابة؟ هل العينة كافية للتشخيص؟",
 p:"تنسيق مسبق مع قسم الأمراض، وإرسال المعلومات السريرية ورقم الاتصال بغرفة العمليات.",
 s:"نسيج طازج غير مثبت (بلا فورمالين ولا محلول ملحي كثير)، في وعاء جاف أو على شاش مبلل، يُرسل فوراً مع الاتجاه والخيوط المحددة.",
 h:["خبيث / حميد / مؤجل للمقاطع الدائمة"],
 l:[],
 i:["الدهون (الثدي) والعظم والنسيج المتكلس يصعب تقطيعها","دقة أقل من المقاطع الدائمة؛ بعض الحالات تُؤجل (الدرق الجريبي، اللمفوما)","تشوهات التجميد (Ice crystals) تغير الشكل","يجب أن تُطابق دائماً مع التشخيص النهائي (مؤشر جودة)"],
 r:["Tissue Biopsy (Histopathology)","Sentinel Lymph Node Biopsy"]},

"Sentinel Lymph Node Biopsy": {
 w:"تحديد أول عقدة لمفاوية تصرف الورم بحقن مادة مشعة (تكنيشيوم) و/أو صبغة زرقاء أو فلورية، ثم استئصالها وفحصها بالتقطيع المتسلسل والصبغ المناعي للسيتوكيراتين.",
 y:"تحديد مرحلة سرطان الثدي والميلانوما (وبعض الأورام الأخرى) وتجنّب الاستئصال الكامل للعقد الإبطية ومضاعفاته (الوذمة اللمفية) إذا كانت سليمة.",
 p:"حقن المادة قبل الجراحة بساعات أو يوم. أخبر عن الحساسية للصبغات.",
 s:"العقدة طازجة للفحص المجمد أو بالطبعة، أو في الفورمالين، مع تحديد عددها والعقد الحارة/الزرقاء.",
 h:["نقائل كبيرة (> 2 مم)","نقائل صغيرة (0.2–2 مم)","خلايا ورمية معزولة (< 0.2 مم)"],
 l:[],
 i:["العلاج الكيماوي قبل الجراحة يقلل دقة التحديد","الصبغة الزرقاء قد تسبب تفاعلاً تحسسياً وتلون البول","الفحص المجمد قد يفوّت النقائل الصغيرة"],
 r:["Tissue Biopsy (Histopathology)","Frozen Section (Intraoperative)","ER / PR Receptors (IHC)","HER2 Amplification (FISH)"]},

"ER / PR Receptors (IHC)": {
 w:"صبغ مناعي لنوى خلايا الورم يكشف مستقبلات الإستروجين والبروجسترون، ويُبلّغ بنسبة الخلايا الإيجابية وشدة الصبغ (Allred أو H-score).",
 y:"في كل سرطان ثدي غازي (وأحياناً بطانة الرحم): تحديد الاستفادة من العلاج الهرموني (تاموكسيفين، مثبطات الأروماتاز) والإنذار، مع HER2 و Ki-67.",
 p:"لا يحتاج تحضيراً.",
 s:"نسيج مثبت بالفورمالين 10% المتعادل خلال ساعة من الاستئصال، لمدة 6–72 ساعة (ASCO/CAP)، مع شاهد داخلي وخارجي.",
 h:["ER ≥ 10%: إيجابي — مؤهل للعلاج الهرموني","ER 1–10%: إيجابي منخفض (Low positive) — فائدة محدودة","PR الإيجابي يدعم الاستجابة والإنذار الأفضل"],
 l:["< 1%: سلبي (مع ER و PR و HER2 السلبية = ثلاثي السلبية)"],
 i:["تأخر التثبيت أو قصره أو إزالة الكلس الحمضي تعطي سلبية كاذبة","يجب وجود شاهد داخلي إيجابي (ظهارة طبيعية) قبل اعتماد السلبية","الخزعة الصغيرة قد لا تمثل الورم كاملاً"],
 r:["HER2 Amplification (FISH)","BRCA1/BRCA2 Gene Testing","Tissue Biopsy (Histopathology)","CA 15-3"]},

"Direct Immunofluorescence (Skin / Kidney Biopsy)": {
 w:"صبغ مقاطع مجمدة من نسيج طازج بأضداد موسومة بالفلورسنت ضد IgG و IgA و IgM و C3 والفيبرينوجين لكشف الترسبات المناعية ونمطها.",
 y:"الجلد: الفقاع، شبيه الفقاع، التهاب الجلد الحلئي الشكل، الذئبة الجلدية، التهاب الأوعية. الكلى: اعتلال IgA، الذئبة، الغشائي، Anti-GBM (خطي)، وغيرها.",
 p:"لا يحتاج تحضيراً. الخزعة الجلدية من جلد سليم بجانب الآفة (Perilesional) وليس من الفقاعة نفسها.",
 s:"نسيج طازج في وسط ميشيل (Michel's) أو على شاش مبلل بالملحي ويُرسل فوراً — ليس فورمالين أبداً.",
 h:["IgG و C3 بين الخلايا (شبكي): الفقاع","IgG و C3 خطي على الغشاء القاعدي: شبيه الفقاع","IgA حبيبي في الحليمات: التهاب الجلد الحلئي الشكل (الداء البطني)","IgG خطي على الكبيبات: Anti-GBM","IgA في الميزانجيوم: اعتلال IgA","Full house: الذئبة"],
 l:[],
 i:["الفورمالين يلغي الفحص — أكثر خطأ شائع","الخزعة من الفقاعة نفسها تعطي سلبية كاذبة","الكورتيزون الموضعي أو الجهازي يقلل الترسبات"],
 r:["Tissue Biopsy (Histopathology)","Anti-GBM Antibody","ANA (Antinuclear Antibodies)","tTG-IgA (Tissue Transglutaminase)","Complement C3"]}
});

window.ENC_EN = Object.assign(window.ENC_EN || {}, {
"Fecal Occult Blood (Guaiac gFOBT)": {
 w:"A chemical test detecting the peroxidase activity of heme in stool on guaiac cards.",
 y:"Detects occult GI bleeding; replaced by the immunochemical FIT for colorectal screening because FIT is more specific and needs no diet.",
 p:"For 3 days before and during collection: avoid red meat, radish, turnip, broccoli, aspirin and NSAIDs, and vitamin C > 250 mg.",
 s:"Two samples from each of 3 consecutive bowel movements on the cards, returned within 14 days.",
 h:["Bleeding anywhere in the GI tract: ulcer, tumors, polyps, hemorrhoids, IBD","Red meat and peroxidase-rich vegetables (false positive)"],
 l:[],
 i:["Vitamin C gives false negatives","A single sample from digital rectal exam is not acceptable","Less sensitive for colorectal cancer than FIT"],
 r:["Fecal Immunochemical Test (FIT)","CBC (Complete Blood Count)","Ferritin"]},

"Apt Test (Fetal vs Maternal Blood)": {
 w:"Distinguishes fetal hemoglobin (alkali-resistant, stays pink) from adult hemoglobin (turns brown) after adding sodium hydroxide.",
 y:"Identifies the source of blood in a newborn's vomit or stool: swallowed maternal blood at delivery or from a cracked nipple (benign) versus true neonatal GI bleeding.",
 p:"No preparation needed.",
 s:"Fresh bloody stool or vomit (or diaper) containing red blood.",
 h:["Stays pink: fetal blood → bleeding from the infant needs evaluation"],
 l:["Turns yellow-brown: swallowed maternal blood"],
 i:["Altered black blood (melena) is unsuitable","Maternal thalassemia or HPFH may mislead"],
 r:["CBC (Complete Blood Count)","Kleihauer-Betke Acid Elution Test","PT (Prothrombin Time)"]},

"Stool Reducing Substances & pH": {
 w:"Detection of unabsorbed sugars (glucose, lactose, galactose) in stool by the Clinitest method, with stool pH.",
 y:"Evaluating diarrhea in infants: lactose intolerance or carbohydrate malabsorption (acidic stool pH < 5.5 with reducing substances).",
 p:"The infant must be ingesting the suspected sugar (milk).",
 s:"Fresh liquid stool (tested within 1 h), collected on plastic rather than an absorbent diaper.",
 h:["> 0.5 g/dL: carbohydrate malabsorption (lactase deficiency, after viral gastroenteritis)","Galactosemia"],
 l:[],
 i:["Sucrose is not detected (non-reducing) unless hydrolyzed with acid first","Delay lets bacteria consume the sugar","Absorbent diapers lose the liquid"],
 r:["Lactose Tolerance / Hydrogen Breath Test","Galactosemia (GALT Enzyme)","Stool Electrolytes & Osmotic Gap"]},

"Fecal Leukocytes": {
 w:"Microscopic examination of a methylene-blue-stained stool smear for white cells.",
 y:"Distinguishes inflammatory/invasive diarrhea (Shigella, Salmonella, Campylobacter, colitis) from non-inflammatory diarrhea (viral, toxins).",
 p:"No preparation needed.",
 s:"Fresh stool containing mucus.",
 h:["Shigella, Salmonella, Campylobacter, invasive E. coli","Ulcerative colitis and Crohn's","C. difficile (sometimes)"],
 l:["Absent: viruses, cholera, Giardia, preformed-toxin food poisoning"],
 i:["Moderate sensitivity → fecal calprotectin is more accurate","Delay lyses cells","Amoebae destroy leukocytes, so they may be absent despite dysentery"],
 r:["Fecal Calprotectin","Stool Culture","C. difficile Toxin A/B","Stool Ova & Parasites (O&P)"]},

"Fecal Fat (Qualitative / 72h)": {
 w:"Detection of fat in stool by Sudan stain (qualitative) or quantitative measurement in a 72-h collection.",
 y:"Confirms steatorrhea (bulky, foul, floating stools) in exocrine pancreatic insufficiency, cystic fibrosis, celiac disease and cholestasis.",
 p:"For the quantitative test: a 100 g/day fat diet for 3 days before and during collection. Avoid laxatives, mineral oils and barium.",
 s:"Random sample for the qualitative test, or all stool over 72 h in pre-weighed refrigerated containers.",
 h:["> 7 g/24 h: steatorrhea","Pancreatic insufficiency (neutral fat)","Mucosal disease (fatty acids)","Cholestasis"],
 l:[],
 i:["Poor diet adherence or incomplete collection","Laxatives and oily suppositories","Fecal elastase is an easier alternative for pancreatic insufficiency"],
 r:["D-Xylose Absorption Test","Lipase","Sweat Chloride Test","tTG-IgA (Tissue Transglutaminase)","Vitamin E (Tocopherol)"]},

"Stool Electrolytes & Osmotic Gap": {
 w:"Measurement of sodium and potassium in liquid stool and calculation of the osmotic gap: 290 − 2 × (Na + K).",
 y:"Classifies chronic diarrhea: secretory (gap < 50: toxins, hormone-secreting tumors, stimulant laxatives) or osmotic (gap > 100: lactose, magnesium, sorbitol).",
 p:"Avoid laxatives before collection (unless screening for laxative abuse).",
 s:"Fresh liquid stool (formed stool not accepted).",
 h:["Gap > 100: osmotic diarrhea (carbohydrate malabsorption, magnesium laxatives)"],
 l:["Gap < 50: secretory diarrhea (cholera, VIPoma, carcinoid, stimulant laxatives)"],
 i:["Use 290 as the assumed osmolality because bacteria raise measured osmolality after collection","Osmolality < 250 indicates contamination with water or urine","Stool magnesium > 45 mmol/L reveals laxative abuse"],
 r:["Stool Reducing Substances & pH","Potassium (K⁺)","Fecal Calprotectin","Chromogranin A (CgA)"]},

"CSF IgG Index": {
 w:"A formula comparing the CSF IgG/albumin ratio with the serum ratio, distinguishing IgG made within the CNS from IgG leaking from blood.",
 y:"Supports the diagnosis of multiple sclerosis and inflammatory CNS disease, together with oligoclonal bands.",
 p:"Medical procedure, with a blood sample the same day.",
 s:"CSF and paired serum.",
 h:["> 0.7: intrathecal IgG synthesis — multiple sclerosis (~70–90%), encephalitis, neurosyphilis, ADEM"],
 l:[],
 i:["A traumatic (bloody) tap invalidates the calculation","Severe blood–brain barrier damage alters the result → albumin index","Oligoclonal bands are more sensitive"],
 r:["CSF Oligoclonal Bands","CSF Protein","CSF Cell Count & Differential"]},

"CSF VDRL": {
 w:"A non-treponemal test for anti-cardiolipin antibodies in CSF.",
 y:"Diagnosis of neurosyphilis in a seropositive patient with neurological, ocular or otic symptoms or treatment failure.",
 p:"Medical procedure.",
 s:"Non-bloody CSF.",
 h:["Reactive: neurosyphilis (highly specific)"],
 l:[],
 i:["Low sensitivity (30–70%) → a negative result does not exclude neurosyphilis; raised lymphocytes and protein support it","A bloody tap with active syphilis gives a false positive","A negative CSF FTA-ABS virtually excludes it"],
 r:["Syphilis RPR/VDRL","CSF Cell Count & Differential","CSF Protein","HIV Antibody/Ag (4th Gen combo)"]},

"Amniotic Fluid L/S Ratio (Lung Maturity)": {
 w:"The ratio of lecithin to sphingomyelin (surfactant components) in amniotic fluid, with phosphatidylglycerol (PG) detection or lamellar-body count.",
 y:"Assesses fetal lung maturity before planned preterm delivery (used less today since antenatal steroids and gestational-age criteria).",
 p:"Amniocentesis (medical procedure) or vaginal pool after membrane rupture.",
 s:"Amniotic fluid on ice, protected from light, sent immediately, without hard centrifugation.",
 h:["L/S ≥ 2.0 with PG present: mature lungs (low RDS risk)","Lamellar-body count > 50,000/µL: mature"],
 l:["L/S < 1.5: immature lungs","Maternal diabetes delays maturity (PG is more reliable)"],
 i:["Blood or meconium contamination invalidates the result","PG is unaffected by blood or meconium"],
 r:["Fetal Fibronectin (fFN)","Maternal Serum Screening (AFP / Quad)"]},

"Fetal Fibronectin (fFN)": {
 w:"An adhesive protein between the fetal membranes and uterine wall that appears in vaginal secretions when the membranes separate before labor.",
 y:"Assesses preterm-birth risk in symptomatic women at 24–34 weeks: a negative result is highly reassuring (< 1% chance of delivery within 14 days).",
 p:"No intercourse, digital exam, transvaginal ultrasound or vaginal gel within 24 h.",
 s:"Posterior fornix swab via speculum, before any other examination, held for 10 seconds.",
 h:["≥ 50 ng/mL: risk of preterm delivery within 7–14 days → steroids and transfer"],
 l:["< 50: very low risk"],
 i:["Blood, intercourse, gel and digital exam give false positives","Its main value is exclusion (negative predictive value > 99%)","Not used with ruptured membranes or cervical dilation ≥ 3 cm"],
 r:["Amniotic Fluid L/S Ratio (Lung Maturity)","Group B Strep (GBS) Screening"]},

"Pap Smear (Conventional / Liquid-Based)": {
 w:"Cells from the cervical transformation zone are examined microscopically, either as a fixed smear or in preservative fluid (LBC) that also allows HPV testing. Reported by the Bethesda System.",
 y:"Screening for cervical cancer and its precursors from age 21 (every 3 years, or every 5 years with HPV co-testing from 30), and follow-up of abnormal results.",
 p:"Away from menstruation. No douching, intercourse, vaginal medicines or lubricants for 48 h.",
 s:"Brush/spatula from ecto- and endocervix; rinsed immediately in the LBC vial, or spread on a slide and alcohol-fixed within seconds (before air-drying).",
 h:["ASC-US and ASC-H: atypical squamous cells","LSIL: low-grade lesion (HPV effect, CIN1)","HSIL: high-grade lesion (CIN2–3) → colposcopy","AGC: atypical glandular cells","Squamous carcinoma or adenocarcinoma","Organisms: Trichomonas, Candida, herpes, shift in flora"],
 l:["Unsatisfactory: scant cellularity or obscured by blood/inflammation → repeat in 2–4 months"],
 i:["Delayed fixation causes air-drying artefact","Blood, mucus and inflammation obscure cells","Absence of transformation-zone cells is noted in the report","10–20% false-negative rate → value of regular repeat and HPV testing"],
 r:["HPV DNA Test (High-Risk)","Tissue Biopsy (Histopathology)","Chlamydia NAAT/PCR","Vaginal Wet Mount"]},

"HPV DNA Test (High-Risk)": {
 w:"Detection of DNA from high-risk human papillomavirus types (14 types, with 16 and 18 genotyped) that cause most cervical cancers.",
 y:"Primary screening from age 25–30 (every 5 years), triage of ASC-US, and follow-up after treatment of high-grade lesions.",
 p:"As for the Pap smear.",
 s:"Cervical sample in an LBC vial (or vaginal self-sample in some programs).",
 h:["HPV 16 or 18: immediate colposcopy regardless of cytology","Other high-risk types: cytology triage"],
 l:["Negative: very low risk for 5 years"],
 i:["Transient infection is very common under 30 (hence not used for screening before 25)","Vaginal gel and heavy blood may inhibit the reaction","Does not detect low-risk (wart) types"],
 r:["Pap Smear (Conventional / Liquid-Based)","Anal Pap Smear","Tissue Biopsy (Histopathology)"]},

"FNA Cytology (Fine-Needle Aspiration)": {
 w:"Aspiration of cells from a mass with a fine needle (22–27G), by palpation or ultrasound/CT guidance, followed by smears and a cell block for immunostains.",
 y:"Rapid, minimally invasive diagnosis of thyroid nodules (Bethesda system), breast, salivary, lymph-node, liver and lung masses.",
 p:"Consent. Stop anticoagulants depending on site and physician advice. Fasting usually not required.",
 s:"Air-dried smears (Diff-Quik/Giemsa) and smears fixed immediately in alcohol (Papanicolaou), needle rinse in preservative or RPMI for flow (lymphoma), and a cell block in formalin. Rapid on-site evaluation (ROSE) improves adequacy.",
 h:["Thyroid: Bethesda I non-diagnostic … VI malignant","Malignant: metastatic or primary carcinoma, lymphoma","Granulomatous inflammation: TB, sarcoidosis"],
 l:["Inadequate: scant cells or excessive blood"],
 i:["A negative result does not exclude malignancy if the sample is not representative","Delayed fixation causes air-drying artefact in alcohol-fixed smears","Excess blood dilutes cells → finer needle and less suction","Lymphoma often needs a core biopsy for architecture"],
 r:["Tissue Biopsy (Histopathology)","Flow Cytometry (CD markers)","Thyroglobulin","Calcitonin","Sentinel Lymph Node Biopsy"]},

"Urine Cytology": {
 w:"Examination of exfoliated epithelial cells in urine after cytocentrifugation or liquid-based preparation, reported by the Paris System.",
 y:"Evaluation of unexplained hematuria (especially smokers and older adults), urothelial-carcinoma surveillance after treatment, and occupational dye exposure.",
 p:"Drink water well. Not the first morning void (cells degenerate overnight in the bladder). Three samples on different days are preferred.",
 s:"Fresh voided urine 50–100 mL, or bladder washing at cystoscopy, sent immediately or with fixative (50% alcohol).",
 h:["HGUC: high-grade urothelial carcinoma (good sensitivity)","SHGUC: suspicious","AUC: atypical urothelial cells","BK virus (decoy cells) in kidney transplant recipients"],
 l:[],
 i:["Low sensitivity for low-grade tumors","Stones, catheters and inflammation cause reactive atypia","First-morning urine and delay degenerate cells","Intravesical therapy (BCG) alters cells"],
 r:["Urine Blood / Hemoglobin","Urine Microscopy (Sediment)","Tissue Biopsy (Histopathology)"]},

"CSF Cytology": {
 w:"Cytocentrifuge (cytospin) examination of CSF cells for malignant or inflammatory cells.",
 y:"Detects leptomeningeal spread of tumors (breast, lung, melanoma, leukemia, lymphoma) and monitors intrathecal therapy in ALL.",
 p:"Medical procedure (lumbar puncture).",
 s:"≥ 10 mL fresh CSF reaching the lab within 1 h (cells degenerate rapidly), or refrigerated/preserved if delayed. Send a portion for flow cytometry when lymphoma is suspected.",
 h:["Malignant cells: metastatic carcinoma, leukemia, lymphoma","Reactive lymphocytes: viral meningitis"],
 l:[],
 i:["A single sample detects ~50%; repeating large volumes (3 samples) raises this to ~90%","A bloody tap dilutes cells","Delay destroys cells"],
 r:["CSF Cell Count & Differential","CSF Protein","Flow Cytometry (CD markers)","CSF Glucose"]},

"Serous Effusion Cytology (Pleural / Peritoneal)": {
 w:"Cytology of pleural, peritoneal or pericardial fluid (smears + cell block with immunostains) to distinguish reactive mesothelial cells from malignant cells.",
 y:"Diagnosis and staging of malignant effusion (lung, breast, ovary, stomach, lymphoma, mesothelioma), and peritoneal washings in gynecologic and gastric cancer surgery.",
 p:"Medical procedure (thoracentesis or paracentesis).",
 s:"At least 50–100 mL fresh fluid (heparinized to prevent clotting), sent promptly or refrigerated at 4 °C (no formalin or alcohol for the whole fluid).",
 h:["Metastatic carcinoma (adenocarcinoma most common)","Mesothelioma","Lymphoma (needs flow cytometry)"],
 l:[],
 i:["Reactive mesothelial cells can mimic malignancy → immunostains (calretinin, BerEP4, MOC31, claudin-4)","Larger volume increases sensitivity; the first sample detects ~60%","Interpret with chemistry (Light's criteria)"],
 r:["Pleural / Ascitic Fluid Protein & LDH","SAAG (Serum–Ascites Albumin Gradient)","CA 125","CEA (Carcinoembryonic Antigen)","Flow Cytometry (CD markers)"]},

"Respiratory Cytology (Sputum / BAL / Brushings)": {
 w:"Cytology of deep sputum, bronchoalveolar lavage (BAL), brushings and washings at bronchoscopy, or transbronchial aspiration (EBUS-TBNA).",
 y:"Diagnosis and typing of lung cancer with molecular testing (EGFR, ALK, PD-L1), and detection of opportunistic infections (Pneumocystis, fungi, viruses).",
 p:"Sputum: 3 early-morning samples after rinsing the mouth, deep cough. Bronchoscopy is a fasting medical procedure.",
 s:"Sputum and washings in fixative (Saccomanno or 50% alcohol) or fresh and sent promptly; brushings spread and fixed immediately; fresh BAL for cell count and culture.",
 h:["Squamous, adeno- and small-cell carcinoma","Pneumocystis (GMS stain), Aspergillus, CMV","Hemosiderin-laden macrophages (alveolar hemorrhage)"],
 l:["Inadequate sputum: no alveolar macrophages (saliva)"],
 i:["Salivary sputum is unsuitable","Pneumonia, chemotherapy and radiotherapy cause atypia","The cell block is important for molecular tests"],
 r:["EGFR Mutation (Exons 18-21)","ALK Gene Rearrangement (FISH/IHC)","PD-L1 Expression (IHC)","AFB Smear (TB)","Tissue Biopsy (Histopathology)"]},

"Breast Cytology (Nipple Discharge / Cyst Fluid)": {
 w:"Cytology of nipple discharge or aspirated breast-cyst fluid.",
 y:"Evaluation of bloody or spontaneous single-duct discharge (intraductal papilloma, carcinoma), and bloody or recurrent cyst fluid.",
 p:"No preparation needed.",
 s:"The nipple is expressed and drops spread on slides and alcohol-fixed immediately. Cyst fluid in a fresh container.",
 h:["Atypical or malignant epithelial cells","Intraductal papilloma"],
 l:[],
 i:["Low sensitivity — a negative result does not exclude malignancy → imaging and biopsy","Green or clear non-bloody cyst fluid usually needs no cytology","Foam macrophages are common and benign"],
 r:["FNA Cytology (Fine-Needle Aspiration)","Tissue Biopsy (Histopathology)","Prolactin"]},

"Anal Pap Smear": {
 w:"A cytology sample from the anal canal to look for HPV-related intraepithelial lesions, reported by the Bethesda System.",
 y:"Anal-cancer screening in high-risk groups: people with HIV, men who have sex with men, transplant recipients, and women with prior high-grade cervical or vulvar lesions.",
 p:"No enemas, receptive anal intercourse or lubricants for 24 h.",
 s:"A water-moistened Dacron swab inserted 5–6 cm and withdrawn with rotation and pressure, then rinsed in an LBC vial.",
 h:["ASC-US, LSIL, HSIL → high-resolution anoscopy (HRA) and biopsy"],
 l:[],
 i:["Stool and blood obscure cells","Cotton swabs trap cells → use Dacron"],
 r:["HPV DNA Test (High-Risk)","Pap Smear (Conventional / Liquid-Based)","HIV Antibody/Ag (4th Gen combo)"]},

"Tissue Biopsy (Histopathology)": {
 w:"A tissue sample (needle, endoscopic, incisional or excisional) is fixed, processed, paraffin-embedded, sectioned and stained (H&E ± special stains, immunohistochemistry and molecular tests).",
 y:"The gold standard for the definitive diagnosis of tumors (type, grade, margins, lymphovascular invasion, stage), and of inflammatory and infectious disease.",
 p:"Depends on the procedure: consent, coagulation check, fasting if sedated.",
 s:"10% neutral-buffered formalin at ≥ 10 times the tissue volume, within 1 h of excision (cold ischemia time), fixed 6–72 h. Label with two identifiers, orientation and site, with a request form giving clinical details. Send a fresh portion for culture, cytogenetics or immunofluorescence when needed.",
 h:["Dysplasia, carcinoma in situ and invasive carcinoma","Grade, stage (TNM) and surgical margins","Granulomatous inflammation and infection"],
 l:[],
 i:["Delayed or insufficient formalin ruins morphology and immunostains (ER/PR, HER2)","Drying and forceps crush artefact","Acid decalcification destroys DNA → EDTA for bone when molecular tests are needed","Misidentification or specimen swap is the most serious error → two identifiers and matching"],
 r:["Frozen Section (Intraoperative)","FNA Cytology (Fine-Needle Aspiration)","ER / PR Receptors (IHC)","HER2 Amplification (FISH)","PD-L1 Expression (IHC)"]},

"Frozen Section (Intraoperative)": {
 w:"Rapid freezing of fresh tissue during surgery on a cryostat, sectioned and stained within minutes to give the surgeon a preliminary diagnosis.",
 y:"Guides the operation: is the lesion malignant? Are the margins clear? Is the sentinel node involved? Is the sample adequate for diagnosis?",
 p:"Advance coordination with pathology; send clinical details and an operating-room contact number.",
 s:"Fresh unfixed tissue (no formalin, minimal saline), in a dry container or on moist gauze, sent immediately with orientation sutures.",
 h:["Malignant / benign / deferred to permanent sections"],
 l:[],
 i:["Fat (breast), bone and calcified tissue are hard to cut","Less accurate than permanent sections; some cases are deferred (follicular thyroid, lymphoma)","Freezing artefact (ice crystals) distorts morphology","Must always be correlated with the final diagnosis (a quality indicator)"],
 r:["Tissue Biopsy (Histopathology)","Sentinel Lymph Node Biopsy"]},

"Sentinel Lymph Node Biopsy": {
 w:"The first lymph node draining a tumor is mapped by injecting a radiotracer (technetium) and/or blue or fluorescent dye, excised and examined by serial sectioning and cytokeratin immunostaining.",
 y:"Staging of breast cancer and melanoma (and some other tumors), avoiding full axillary dissection and its complications (lymphedema) when negative.",
 p:"Tracer injected hours to a day before surgery. Report dye allergies.",
 s:"Node fresh for frozen section or touch imprint, or in formalin, with the number of hot/blue nodes recorded.",
 h:["Macrometastasis (> 2 mm)","Micrometastasis (0.2–2 mm)","Isolated tumor cells (< 0.2 mm)"],
 l:[],
 i:["Neoadjuvant chemotherapy reduces mapping accuracy","Blue dye may cause allergy and colors the urine","Frozen section may miss micrometastases"],
 r:["Tissue Biopsy (Histopathology)","Frozen Section (Intraoperative)","ER / PR Receptors (IHC)","HER2 Amplification (FISH)"]},

"ER / PR Receptors (IHC)": {
 w:"Nuclear immunostaining of tumor cells for estrogen and progesterone receptors, reported as percentage of positive cells and intensity (Allred or H-score).",
 y:"In every invasive breast cancer (and sometimes endometrial): predicts benefit from endocrine therapy (tamoxifen, aromatase inhibitors) and prognosis, together with HER2 and Ki-67.",
 p:"No preparation needed.",
 s:"Tissue fixed in 10% neutral-buffered formalin within 1 h of excision, for 6–72 h (ASCO/CAP), with internal and external controls.",
 h:["ER ≥ 10%: positive — eligible for endocrine therapy","ER 1–10%: low positive — limited benefit","PR positivity supports response and better prognosis"],
 l:["< 1%: negative (with ER, PR and HER2 negative = triple-negative)"],
 i:["Delayed, short or over-fixation and acid decalcification cause false negatives","An internal positive control (normal epithelium) must be present before accepting a negative result","Small biopsies may not represent the whole tumor"],
 r:["HER2 Amplification (FISH)","BRCA1/BRCA2 Gene Testing","Tissue Biopsy (Histopathology)","CA 15-3"]},

"Direct Immunofluorescence (Skin / Kidney Biopsy)": {
 w:"Frozen sections of fresh tissue stained with fluorescent antibodies to IgG, IgA, IgM, C3 and fibrinogen to detect immune deposits and their pattern.",
 y:"Skin: pemphigus, pemphigoid, dermatitis herpetiformis, cutaneous lupus, vasculitis. Kidney: IgA nephropathy, lupus nephritis, membranous nephropathy, anti-GBM (linear) and others.",
 p:"No preparation. Skin biopsy from perilesional intact skin, not from the blister itself.",
 s:"Fresh tissue in Michel's transport medium or on saline-moistened gauze, sent immediately — never formalin.",
 h:["Intercellular IgG and C3 (net-like): pemphigus","Linear IgG and C3 along the basement membrane: bullous pemphigoid","Granular IgA in dermal papillae: dermatitis herpetiformis (celiac)","Linear glomerular IgG: anti-GBM","Mesangial IgA: IgA nephropathy","'Full house': lupus"],
 l:[],
 i:["Formalin abolishes the test — the commonest error","Biopsy of the blister itself gives false negatives","Topical or systemic steroids reduce deposits"],
 r:["Tissue Biopsy (Histopathology)","Anti-GBM Antibody","ANA (Antinuclear Antibodies)","tTG-IgA (Tissue Transglutaminase)","Complement C3"]}
});

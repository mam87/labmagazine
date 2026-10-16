/* Lab test encyclopedia — ENGLISH edition, Batch 1.
   Mirrors encyclopedia.js (Arabic). Keys must match test names in index.html exactly.
   w: what it is · y: why ordered · p: patient preparation · s: specimen & handling
   h: causes of high/positive · l: causes of low · i: interferences · r: related tests */
window.ENC_EN = Object.assign(window.ENC_EN || {}, {

/* ───────── Hematology ───────── */
"CBC (Complete Blood Count)": {
 w:"A panel that measures the three cellular components of blood: red cells (count, hemoglobin, hematocrit, indices), white cells and their types, and platelets.",
 y:"The most frequently ordered test in medicine: routine check-ups, evaluation of anemia, infection and inflammation, bleeding, and monitoring of chemotherapy and blood disorders.",
 p:"No fasting required.",
 s:"Purple EDTA tube, filled to the line and inverted 8–10 times. Analyze within 24 h (ideally within 6 h if a smear is needed). Do not refrigerate if a smear will be made.",
 h:["WBC: bacterial infection, inflammation, stress, corticosteroids, leukemia","Hemoglobin: dehydration, polycythemia, smoking, high altitude","Platelets: iron deficiency, inflammation, post-splenectomy, myeloproliferative neoplasms"],
 l:["Hemoglobin: iron, B12 or folate deficiency, bleeding, hemolysis, chronic disease","WBC: viral infection, drugs, marrow failure, autoimmune disease","Platelets: ITP, infection, drugs (heparin), hypersplenism, DIC"],
 i:["A clotted sample falsely lowers platelets","EDTA-induced platelet clumping → redraw in citrate","Cold agglutinins falsely raise MCHC and lower RBC","Severe lipemia falsely raises hemoglobin","Nucleated RBCs raise the WBC count on some analyzers"],
 r:["Peripheral Blood Smear","Reticulocyte Count","Ferritin","Vitamin B12","WBC Differential (Absolute Counts)"]},

"Reticulocyte Count": {
 w:"The percentage of young red cells recently released from the bone marrow that still contain residual RNA.",
 y:"Measures marrow activity: is the anemia due to under-production or to loss/destruction? Also used to follow the response to iron or B12 therapy.",
 p:"No preparation needed.",
 s:"Purple EDTA. Stable 24–48 h refrigerated.",
 h:["Hemolysis","After acute bleeding","After starting iron, B12 or folate therapy (within 5–10 days)"],
 l:["Aplastic anemia","Untreated iron/B12 deficiency","Renal failure (low EPO)","Marrow suppression by drugs or chemotherapy"],
 i:["The percentage is misleading in severe anemia → use the corrected count and RPI (Calculators tab)","Howell-Jolly bodies or malaria parasites may be miscounted"],
 r:["CBC (Complete Blood Count)","Haptoglobin","LDH (Lactate Dehydrogenase)"]},

"ESR (Erythrocyte Sedimentation Rate)": {
 w:"The rate at which red cells settle in a vertical tube over one hour. It rises when inflammatory proteins (fibrinogen and globulins) increase.",
 y:"A general, non-specific marker of inflammation; especially useful in temporal arteritis, polymyalgia rheumatica and following some chronic diseases.",
 p:"No fasting required.",
 s:"Purple EDTA (or black 4:1 citrate for the Westergren method). Test within 4 h at room temperature, with the tube perfectly vertical and free of vibration.",
 h:["Infection and inflammation","Autoimmune diseases","Multiple myeloma","Anemia","Pregnancy and advancing age"],
 l:["Polycythemia","Sickle cell anemia and spherocytosis","Hypofibrinogenemia"],
 i:["Even a slight tilt accelerates sedimentation","High ambient temperature raises it","Delay beyond 4 h alters the result"],
 r:["CRP (C-Reactive Protein)","CBC (Complete Blood Count)","Serum Protein Electrophoresis (SPEP)"]},

"HbA1c (Glycated Hemoglobin)": {
 w:"The fraction of hemoglobin bound to glucose; it reflects average blood glucose over the previous 2–3 months (the red-cell lifespan).",
 y:"Diagnosis of diabetes (≥ 6.5%) and prediabetes (5.7–6.4%), and monitoring of glycemic control every 3 months.",
 p:"No fasting needed; can be drawn at any time.",
 s:"Purple EDTA. Stable one week refrigerated.",
 h:["Poorly controlled diabetes","Iron deficiency (mild increase)","Renal failure (method-dependent)"],
 l:["Any condition shortening red-cell survival: hemolysis, bleeding, recent transfusion","Pregnancy","Recently treated iron deficiency"],
 i:["Hemoglobin variants (S, C, E, raised F) interfere depending on method → use Fructosamine","Transfusion within 3 months makes the result unreliable"],
 r:["Glucose (Fasting)","Fructosamine","Glucose Tolerance Test (OGTT)"]},

"Ferritin": {
 w:"An intracellular iron-storage protein; its serum level reflects total body iron stores.",
 y:"The best single test to diagnose iron deficiency, and to evaluate iron overload (hemochromatosis).",
 p:"Morning sample preferred; fasting not required.",
 s:"Serum (yellow). Stable one week refrigerated.",
 h:["Iron overload and repeated transfusions","Inflammation and infection (acute-phase protein)","Liver disease","Malignancy","Hemophagocytic syndrome (very high values)"],
 l:["Iron deficiency — the most specific cause, even before hemoglobin falls"],
 i:["Inflammation can mask iron deficiency (falsely normal ferritin) → check CRP and transferrin saturation","Recent iron supplements"],
 r:["Iron (Fe)","TIBC (Total Iron Binding Capacity)","Transferrin Saturation","CBC (Complete Blood Count)"]},

"Vitamin B12": {
 w:"A vitamin essential for DNA synthesis and nerve integrity, absorbed in the terminal ileum with the help of intrinsic factor.",
 y:"Evaluation of macrocytic anemia, neurological symptoms (numbness, imbalance), vegans, patients on metformin and after gastric surgery.",
 p:"Fasting 6–8 h preferred.",
 s:"Serum (yellow), protected from light.",
 h:["B12 supplementation","Liver disease","Myeloproliferative neoplasms"],
 l:["Pernicious anemia","Malabsorption and gastric surgery","Strict vegan diet","Long-term metformin and acid suppressants"],
 i:["Borderline values (200–300 pg/mL) need confirmation with methylmalonic acid","Intrinsic-factor antibodies may falsely raise the result in some assays"],
 r:["Folic Acid","Intrinsic Factor Antibody","CBC (Complete Blood Count)","Homocysteine"]},

"Folic Acid": {
 w:"Vitamin B9, required for DNA synthesis and cell division.",
 y:"Evaluation of macrocytic anemia, malnutrition, alcohol use disorder and pregnancy.",
 p:"Fast 6–8 h, because a recent meal raises the level.",
 s:"Serum (yellow) protected from light. Hemolysis raises the result because red cells are rich in folate.",
 h:["Folate supplements","Recent meal"],
 l:["Low vegetable intake","Alcohol","Malabsorption (celiac disease)","Pregnancy","Methotrexate and phenytoin"],
 i:["Even slight hemolysis falsely raises it"],
 r:["Vitamin B12","CBC (Complete Blood Count)","Homocysteine"]},

"Iron (Fe)": {
 w:"The amount of iron carried on transferrin in serum.",
 y:"Interpreted with TIBC and ferritin to distinguish iron deficiency from anemia of chronic disease and iron overload.",
 p:"Fasting, morning sample — serum iron varies through the day (about 30% higher in the morning).",
 s:"Serum (yellow), non-hemolyzed. Stop iron supplements 24 h before sampling.",
 h:["Iron overload","Hemolysis","Acute hepatitis","Iron poisoning","Recent supplements"],
 l:["Iron deficiency","Chronic disease and inflammation","Late pregnancy"],
 i:["Hemolysis raises it","Large diurnal variation, so it should not be used alone"],
 r:["Ferritin","TIBC (Total Iron Binding Capacity)","Transferrin Saturation"]},

"Peripheral Blood Smear": {
 w:"A stained blood film (Wright/Giemsa) examined under the microscope to assess the morphology of all three cell lines.",
 y:"When CBC results or analyzer flags are abnormal, or when leukemia, hemolysis, malaria or platelet clumping is suspected.",
 p:"No preparation needed.",
 s:"Purple EDTA; prepare the smear within 2–3 h to avoid EDTA artefacts.",
 h:["Blasts: acute leukemia","Spherocytes: immune or hereditary hemolysis","Schistocytes: DIC, TTP, HUS","Target cells: thalassemia and liver disease"],
 l:[],
 i:["Delay causes artefactual morphological changes","Smears that are too thick or too thin mislead the assessment"],
 r:["CBC (Complete Blood Count)","Reticulocyte Count"]},

"G6PD (Glucose-6-Phosphate Dehydrogenase)": {
 w:"An enzyme that protects red cells from oxidative damage. Its deficiency is X-linked and common in our region.",
 y:"Screening after hemolysis triggered by fava beans or oxidant drugs, in neonatal jaundice, and before giving drugs such as primaquine and dapsone.",
 p:"No preparation needed.",
 s:"Purple EDTA, stable one week refrigerated.",
 h:["Reticulocytosis (young cells are enzyme-rich)"],
 l:["Inherited G6PD deficiency — more frequent in males"],
 i:["During or right after a hemolytic episode the result may be falsely normal → repeat after 2–3 months","Recent transfusion"],
 r:["CBC (Complete Blood Count)","Reticulocyte Count","Peripheral Blood Smear","Haptoglobin"]},

"Direct Coombs Test (DAT)": {
 w:"Detects antibodies or complement bound to the surface of the patient's red cells in vivo.",
 y:"Evaluation of immune hemolytic anemia, transfusion reactions and hemolytic disease of the fetus and newborn (HDFN).",
 p:"No preparation needed.",
 s:"Purple EDTA (prevents in-vitro complement binding).",
 h:["Autoimmune hemolytic anemia","Delayed transfusion reaction","HDFN","Drugs (methyldopa, cephalosporins)"],
 l:[],
 i:["A refrigerated red-top tube may give false-positive complement results","Recent IVIG"],
 r:["Indirect Coombs Test (IAT)","Reticulocyte Count","Haptoglobin","LDH (Lactate Dehydrogenase)"]},

"Platelet Count": {
 w:"The number of platelets, which form the primary plug that stops bleeding.",
 y:"Evaluation of bleeding and bruising, pre-operative assessment, and monitoring of heparin and chemotherapy.",
 p:"No preparation needed.",
 s:"Purple EDTA. Any micro-clot falsely lowers the count.",
 h:["Iron deficiency","Inflammation and acute bleeding","Post-splenectomy","Essential thrombocythemia"],
 l:["Immune thrombocytopenia (ITP)","Viral infection","Heparin-induced thrombocytopenia (HIT)","DIC and TTP","Hypersplenism","Marrow failure"],
 i:["EDTA-induced clumping → pseudothrombocytopenia; check the smear and redraw in citrate","Giant platelets may not be counted by the analyzer"],
 r:["CBC (Complete Blood Count)","Peripheral Blood Smear","PT (Prothrombin Time)","HIT Antibody (Anti-PF4/Heparin)"]},

/* ───────── Chemistry ───────── */
"Glucose (Fasting)": {
 w:"Blood glucose level after at least 8 hours of fasting.",
 y:"Diagnosis of diabetes (≥ 126 mg/dL on two occasions) and prediabetes (100–125), and monitoring of therapy.",
 p:"Fast 8–12 h (water allowed).",
 s:"Grey fluoride tube (stops glycolysis), or serum separated within 30 minutes.",
 h:["Diabetes","Stress and severe infection","Corticosteroids","Cushing's syndrome","Pancreatitis"],
 l:["Insulin or antidiabetic overdose","Prolonged fasting","Insulinoma","Adrenal insufficiency","Severe liver disease"],
 i:["Delay without fluoride lowers it 5–7% per hour","Drawing from the same arm as an IV infusion raises it"],
 r:["HbA1c (Glycated Hemoglobin)","Glucose Tolerance Test (OGTT)","Insulin (Fasting)","C-Peptide"]},

"Glucose Tolerance Test (OGTT)": {
 w:"Blood glucose measured fasting and after drinking 75 g of glucose (or 100 g in some pregnancy protocols).",
 y:"Diagnosis of gestational diabetes (usually at 24–28 weeks) and of diabetes when other results are borderline.",
 p:"Fast 8–14 h after 3 days of a normal diet (≥ 150 g carbohydrate/day); remain seated and at rest during the test, no smoking.",
 s:"Grey fluoride tube at each time point, with the exact time recorded.",
 h:["2-h ≥ 200 mg/dL: diabetes","2-h 140–199: impaired glucose tolerance","Gestational diabetes (75 g): fasting ≥ 92, 1-h ≥ 180, 2-h ≥ 153"],
 l:[],
 i:["Vomiting invalidates the test","Walking or smoking during the test","A strict diet beforehand gives a false result"],
 r:["Glucose (Fasting)","HbA1c (Glycated Hemoglobin)"]},

"Creatinine": {
 w:"A stable product of muscle metabolism excreted by the kidneys; the main routine marker of renal function.",
 y:"Assessing kidney function, calculating eGFR, adjusting drug doses, and before contrast media.",
 p:"Avoid large amounts of cooked meat and strenuous exercise the day before.",
 s:"Serum (yellow) or heparin.",
 h:["Acute and chronic kidney failure","Dehydration and urinary obstruction","Rhabdomyolysis","Large muscle mass"],
 l:["Low muscle mass (elderly, wasting)","Pregnancy"],
 i:["The Jaffe method is affected by ketones, cephalosporins and bilirubin","Drugs that block its secretion (trimethoprim, cimetidine) raise it without kidney injury"],
 r:["BUN (Blood Urea Nitrogen)","eGFR (Estimated GFR)","Cystatin C","Urine Albumin/Creatinine Ratio (ACR)"]},

"BUN (Blood Urea Nitrogen)": {
 w:"The nitrogen of urea produced by protein breakdown in the liver and excreted by the kidneys.",
 y:"Assessment of kidney function and hydration; interpreted with creatinine as the BUN/Cr ratio.",
 p:"No fasting required.",
 s:"Serum or heparin (not ammonium heparin).",
 h:["Dehydration","Upper GI bleeding","Kidney failure","High-protein diet","Corticosteroids","BUN/Cr ratio > 20: pre-renal cause"],
 l:["Severe liver disease","Malnutrition","Fluid overload","Pregnancy"],
 i:["Strongly influenced by nutrition and hydration status"],
 r:["Creatinine","eGFR (Estimated GFR)"]},

"Uric Acid": {
 w:"The end product of purine metabolism.",
 y:"Diagnosis and monitoring of gout, kidney stones and tumor lysis syndrome.",
 p:"Fasting preferred; avoid alcohol and red meat beforehand.",
 s:"Serum (yellow).",
 h:["Gout","Kidney failure","Tumor lysis and chemotherapy","Thiazide diuretics","Alcohol","Psoriasis","Pre-eclampsia"],
 l:["Allopurinol","Severe liver disease","SIADH"],
 i:["Rasburicase degrades it in the tube → transport on ice","High-dose vitamin C"],
 r:["Creatinine","Synovial Fluid Analysis (Cells & Crystals)","Urine Uric Acid (24h)"]},

"ALT (Alanine Aminotransferase)": {
 w:"An enzyme found mainly in hepatocytes; the most specific marker of hepatocellular injury.",
 y:"Screening for liver disease, following hepatitis and monitoring hepatotoxic drugs.",
 p:"No fasting needed; avoid strenuous exercise beforehand.",
 s:"Serum (yellow), non-hemolyzed.",
 h:["Viral hepatitis (> 10× upper limit)","Fatty liver","Drugs (paracetamol, statins)","Hepatic ischemia","Acute biliary obstruction"],
 l:["Vitamin B6 deficiency","Kidney failure (slightly low values)"],
 i:["Hemolysis raises it slightly","Strenuous exercise"],
 r:["AST (Aspartate Aminotransferase)","ALP (Alkaline Phosphatase)","GGT (Gamma-Glutamyl Transferase)","Bilirubin (Total)","Albumin"]},

"AST (Aspartate Aminotransferase)": {
 w:"An enzyme present in liver, heart, muscle and red cells, so it is less specific than ALT.",
 y:"Interpreted with ALT; an AST/ALT ratio > 2 suggests alcoholic liver injury.",
 p:"Avoid strenuous exercise.",
 s:"Serum (yellow). Hemolysis raises it markedly.",
 h:["Liver disease","Alcohol","Muscle injury and rhabdomyolysis","Myocardial infarction","Hemolysis"],
 l:["Vitamin B6 deficiency","Kidney failure"],
 i:["Hemolysis raises it strongly (red cells are rich in AST)","Recent intramuscular injections"],
 r:["ALT (Alanine Aminotransferase)","CK (Creatine Kinase, Total)","GGT (Gamma-Glutamyl Transferase)"]},

"ALP (Alkaline Phosphatase)": {
 w:"An enzyme derived mainly from the liver (bile ducts) and bone, and also from the placenta and intestine.",
 y:"Evaluation of biliary obstruction and bone disease.",
 p:"Fasting preferred, because a fatty meal raises the intestinal isoenzyme.",
 s:"Serum or heparin — not EDTA, citrate or oxalate (they inhibit the enzyme).",
 h:["Biliary obstruction and biliary cirrhosis","Bone disease: Paget's, bone metastases, osteomalacia","Hyperparathyroidism","Growth in children","Pregnancy (placental origin)"],
 l:["Hereditary hypophosphatasia","Zinc and magnesium deficiency","Hypothyroidism"],
 i:["An EDTA tube lowers it drastically, even to zero","Fatty meal"],
 r:["GGT (Gamma-Glutamyl Transferase)","Bilirubin (Total)","Calcium (Total)","Vitamin D (25-OH)"]},

"GGT (Gamma-Glutamyl Transferase)": {
 w:"A highly sensitive hepatobiliary enzyme.",
 y:"Determines the source of a raised ALP (liver if GGT rises too, bone if it doesn't) and serves as a marker of alcohol use.",
 p:"Avoid alcohol for 24 h.",
 s:"Serum (yellow).",
 h:["Biliary obstruction","Alcohol","Enzyme-inducing drugs (phenytoin, carbamazepine)","Fatty liver"],
 l:[],
 i:["Enzyme-inducing drugs raise it without liver disease"],
 r:["ALP (Alkaline Phosphatase)","ALT (Alanine Aminotransferase)","Bilirubin (Total)"]},

"Bilirubin (Total)": {
 w:"A yellow pigment from hemoglobin breakdown, processed by the liver and excreted in bile.",
 y:"Evaluation of jaundice: hemolysis, liver disease, biliary obstruction and neonatal jaundice.",
 p:"Fasting preferred.",
 s:"Serum (yellow) protected from light — light degrades bilirubin and lowers the result.",
 h:["Indirect: hemolysis, Gilbert syndrome, neonatal jaundice","Direct: hepatitis, biliary obstruction, cirrhosis"],
 l:[],
 i:["Light exposure lowers it by up to 50% within an hour","Hemolysis and lipemia affect colorimetric methods"],
 r:["Bilirubin (Direct)","ALT (Alanine Aminotransferase)","ALP (Alkaline Phosphatase)","Reticulocyte Count"]},

"Albumin": {
 w:"The most abundant serum protein, made by the liver; it maintains oncotic pressure and transports hormones, drugs and calcium.",
 y:"Assessment of hepatic synthetic function, nutritional status and nephrotic syndrome.",
 p:"No fasting required.",
 s:"Serum (yellow). Prolonged tourniquet use falsely raises it.",
 h:["Dehydration"],
 l:["Cirrhosis","Nephrotic syndrome","Malnutrition","Chronic inflammation (negative acute-phase protein)","Burns and protein-losing enteropathy"],
 i:["Posture effect: standing raises it ~10%","Tourniquet > 1 minute"],
 r:["Total Protein","Calcium (Total)","Prealbumin (Transthyretin)","ALT (Alanine Aminotransferase)"]},

"hs-Troponin I (hs-cTnI)": {
 w:"A cardiac-specific protein released into blood when myocytes are injured. High-sensitivity assays detect very low concentrations.",
 y:"Rapid diagnosis and rule-out of acute myocardial infarction using 0/1-h or 0/2-h protocols.",
 p:"No preparation; timing from symptom onset is important.",
 s:"Green heparin or serum depending on the analyzer.",
 h:["Myocardial infarction","Myocarditis","Pulmonary embolism","Heart failure","Sepsis","Chronic kidney disease (stable chronic elevation)"],
 l:[],
 i:["High-dose biotin in some assays","Heterophile antibodies and macrotroponin","Diagnosis relies on the change between two measurements, not a single value"],
 r:["hs-Troponin T (hs-cTnT)","CK-MB (Creatine Kinase-MB)","NT-proBNP"]},

"CRP (C-Reactive Protein)": {
 w:"An acute-phase protein made by the liver within hours of the onset of inflammation; it rises and falls quickly.",
 y:"Detection and monitoring of infection and inflammation, and of the response to antibiotics.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Bacterial infection (often > 100 mg/L)","Inflammatory and rheumatic diseases","After surgery and trauma","Myocardial infarction"],
 l:[],
 i:["Does not identify the cause of inflammation","Active lupus often does not raise it"],
 r:["ESR (Erythrocyte Sedimentation Rate)","Procalcitonin (PCT)","hs-CRP (High Sensitivity CRP)","CBC (Complete Blood Count)"]},

"Procalcitonin (PCT)": {
 w:"The precursor of calcitonin; it rises sharply in systemic bacterial infection but only modestly in viral infection.",
 y:"Distinguishing bacterial from viral infection, diagnosing sepsis, and safely stopping antibiotics early.",
 p:"No preparation needed.",
 s:"Serum or heparin.",
 h:["Bacterial sepsis (> 2 ng/mL)","Septic shock","Major trauma, burns and surgery","Medullary thyroid carcinoma"],
 l:[],
 i:["May be normal in localized infection","Rises after surgery without infection"],
 r:["CRP (C-Reactive Protein)","Blood Culture (Aerobic)","Lactate","CBC (Complete Blood Count)"]},

"Cholesterol (Total)": {
 w:"Total cholesterol carried on all lipoproteins.",
 y:"Assessment of cardiovascular risk; part of the lipid profile.",
 p:"Fasting not required for cholesterol alone, but 9–12 h preferred with a full lipid panel.",
 s:"Serum (yellow).",
 h:["Familial hypercholesterolemia","Hypothyroidism","Nephrotic syndrome","Cholestasis","Pregnancy"],
 l:["Hyperthyroidism","Severe liver disease","Malnutrition","Acute illness"],
 i:["Acute illness or MI lowers it for weeks","Standing vs sitting changes it by ~10%"],
 r:["LDL Cholesterol","HDL Cholesterol","Triglycerides","Lipoprotein(a) [Lp(a)]"]},

"Triglycerides": {
 w:"The main storage form of fat and energy.",
 y:"Cardiovascular risk assessment, LDL calculation, and pancreatitis risk at values > 1000 mg/dL.",
 p:"Fast 9–12 h.",
 s:"Serum (yellow). A milky sample indicates very high values.",
 h:["Obesity and uncontrolled diabetes","Alcohol","Hypothyroidism","Kidney failure","Drugs (estrogens, corticosteroids, retinoids)","Non-fasting sample"],
 l:["Hyperthyroidism","Malnutrition"],
 i:["Not fasting is the commonest cause of elevation","Severe lipemia interferes with other tests (sodium, hemoglobin)"],
 r:["Cholesterol (Total)","LDL Cholesterol","Amylase","Lipase"]},

"LDL Cholesterol": {
 w:"The 'bad' cholesterol that deposits in arterial walls; the primary target of therapy.",
 y:"Defining cardiovascular risk and statin treatment goals.",
 p:"Fast 9–12 h if calculated.",
 s:"Serum (yellow). Calculated by the Friedewald equation or measured directly.",
 h:["Familial hypercholesterolemia","Diet rich in saturated fat","Hypothyroidism","Nephrotic syndrome"],
 l:["Hyperthyroidism","Liver disease","Statin therapy"],
 i:["The Friedewald equation is invalid when triglycerides ≥ 400 mg/dL → request direct LDL","It underestimates very low LDL values"],
 r:["Cholesterol (Total)","HDL Cholesterol","Triglycerides","Lipoprotein(a) [Lp(a)]"]},

"Sodium (Na⁺)": {
 w:"The main extracellular cation; it determines water balance and osmolality.",
 y:"Evaluation of altered consciousness, dehydration, edema, and monitoring of IV fluids.",
 p:"No preparation needed.",
 s:"Serum or lithium heparin — not sodium heparin.",
 h:["Dehydration and inadequate water intake","Diabetes insipidus","IV sodium load"],
 l:["SIADH","Heart failure and cirrhosis","Diuretics","Vomiting and diarrhea","Adrenal and thyroid insufficiency"],
 i:["Very high lipids or proteins falsely lower it (pseudohyponatremia) with indirect methods","High glucose draws water and truly lowers it — correct by 1.6 mmol/L per 100 mg/dL glucose"],
 r:["Potassium (K⁺)","Chloride (Cl⁻)","Serum Osmolality","Urine Sodium & FENa"]},

"Potassium (K⁺)": {
 w:"The main intracellular cation; any disturbance directly affects cardiac rhythm.",
 y:"Monitoring of kidney disease, diuretics, cardiac patients, acidosis and IV fluids. Critical values: < 2.8 or > 6.2 mmol/L.",
 p:"Do not ask the patient to pump the fist repeatedly (raises K⁺ by 1–2 mmol/L).",
 s:"Serum or heparin, separated promptly and not refrigerated before separation.",
 h:["Kidney failure","ACE inhibitors and spironolactone","Acidosis","Rhabdomyolysis and tumor lysis","Adrenal insufficiency"],
 l:["Diuretics","Vomiting and diarrhea","Insulin","Alkalosis","Hyperaldosteronism"],
 i:["Hemolysis falsely raises it (red cells contain ~20× more K⁺)","EDTA contamination raises it markedly and lowers calcium","Marked thrombocytosis or leukocytosis","Refrigeration before separation"],
 r:["Sodium (Na⁺)","Creatinine","Bicarbonate (Total CO₂)","Magnesium"]},

"Calcium (Total)": {
 w:"The sum of free (ionized) and albumin-bound calcium.",
 y:"Evaluation of bone, parathyroid and kidney disease, malignancy and seizures.",
 p:"Fasting preferred.",
 s:"Serum (yellow) — not EDTA, citrate or oxalate (they bind calcium).",
 h:["Hyperparathyroidism","Malignancy and bone metastases","Vitamin D excess","Thiazide diuretics","Prolonged immobilization"],
 l:["Hypoalbuminemia (spurious)","Hypoparathyroidism","Vitamin D deficiency","Kidney failure","Hypomagnesemia","Pancreatitis"],
 i:["Correct for albumin: Ca + 0.8 × (4 − Albumin), or measure ionized calcium","EDTA contamination lowers it drastically"],
 r:["Ionized Calcium (iCa)","Albumin","PTH (Parathyroid Hormone)","Vitamin D (25-OH)","Phosphorus"]},

"Magnesium": {
 w:"A mineral essential for hundreds of enzymatic reactions and for muscle, nerve and cardiac rhythm.",
 y:"In arrhythmias, refractory hypokalemia or hypocalcemia, and pre-eclampsia treated with magnesium.",
 p:"No preparation needed.",
 s:"Serum (yellow), non-hemolyzed.",
 h:["Kidney failure","IV magnesium therapy","Laxatives and antacids"],
 l:["Diarrhea and malabsorption","Alcohol","Diuretics","Proton-pump inhibitors","Uncontrolled diabetes"],
 i:["Hemolysis raises it","Serum level does not always reflect intracellular stores"],
 r:["Potassium (K⁺)","Calcium (Total)","Phosphorus"]},

"Amylase": {
 w:"An enzyme that digests starch, derived from the pancreas and salivary glands.",
 y:"Diagnosis of acute pancreatitis (rises within 6–12 h and normalizes within 3–5 days).",
 p:"No fasting required.",
 s:"Serum or heparin.",
 h:["Acute pancreatitis","Mumps and salivary gland disease","Bowel obstruction and perforated ulcer","Ectopic pregnancy","Kidney failure","Macroamylasemia"],
 l:["Severe chronic pancreatic damage","Cystic fibrosis"],
 i:["High triglycerides may falsely lower it","Less specific than lipase"],
 r:["Lipase","Triglycerides","Calcium (Total)"]},

"Lipase": {
 w:"A fat-digesting enzyme of almost exclusively pancreatic origin.",
 y:"The preferred test for acute pancreatitis (> 3× upper limit); stays elevated longer than amylase.",
 p:"No fasting required.",
 s:"Serum (yellow).",
 h:["Acute pancreatitis","Pancreatic cancer","Kidney failure","Bowel obstruction"],
 l:[],
 i:["IV heparin raises it by releasing lipoprotein lipase","Reference range varies widely by method"],
 r:["Amylase","Triglycerides","ALT (Alanine Aminotransferase)","Calcium (Total)"]},

"CK (Creatine Kinase, Total)": {
 w:"An enzyme in skeletal muscle, heart and brain.",
 y:"Diagnosis and follow-up of rhabdomyolysis, myositis, statin myopathy and muscular dystrophy.",
 p:"Avoid strenuous exercise for 48 h beforehand.",
 s:"Serum (yellow), away from light.",
 h:["Rhabdomyolysis (> 5× upper limit)","Myositis","Statins","Muscular dystrophy","IM injections and exercise","Hypothyroidism"],
 l:["Low muscle mass"],
 i:["Exercise and IM injections raise it without disease","Hemolysis may interfere depending on method"],
 r:["Myoglobin","AST (Aspartate Aminotransferase)","Potassium (K⁺)","Creatinine"]},

"NT-proBNP": {
 w:"An inactive fragment released from the ventricles together with BNP when the myocardium is stretched.",
 y:"Diagnosis and exclusion of heart failure in breathlessness, risk stratification and follow-up.",
 p:"No preparation needed.",
 s:"EDTA or serum depending on the analyzer.",
 h:["Heart failure (age-adjusted cut-offs for acute cases: < 450 under 50 y, < 900 at 50–75 y, < 1800 over 75 y)","Kidney failure","Pulmonary embolism","Atrial fibrillation"],
 l:["Obesity (relatively low values)"],
 i:["Kidney failure raises it without heart failure","Sacubitril raises BNP but not NT-proBNP"],
 r:["BNP (B-Type Natriuretic Peptide)","hs-Troponin I (hs-cTnI)","Creatinine"]},

/* ───────── Hormones ───────── */
"TSH (Thyroid Stimulating Hormone)": {
 w:"A pituitary hormone that stimulates the thyroid. Small changes in thyroid hormones cause large changes in TSH.",
 y:"The best first-line test for thyroid disease and for monitoring the levothyroxine dose.",
 p:"Morning sample preferred. Patients on levothyroxine should be drawn before the dose. Stop biotin 48 h before.",
 s:"Serum (yellow).",
 h:["Primary hypothyroidism (Hashimoto)","Insufficient levothyroxine dose","Recovery phase of severe illness"],
 l:["Hyperthyroidism (Graves', toxic nodules)","Excess levothyroxine","Hypopituitarism","Early pregnancy","Corticosteroids and dopamine"],
 i:["Biotin falsely lowers it","Heterophile antibodies","Needs 6–8 weeks to stabilize after a dose change"],
 r:["Free T4 (Free Thyroxine)","Free T3 (Free Triiodothyronine)","Anti-TPO (Thyroid Peroxidase Ab)","TRAb (TSH Receptor Ab)"]},

"Free T4 (Free Thyroxine)": {
 w:"The free, active fraction of thyroxine not bound to proteins.",
 y:"Confirms and grades thyroid dysfunction when TSH is abnormal; essential in pituitary disease.",
 p:"Patients on levothyroxine should be drawn before the dose. Stop biotin 48 h before.",
 s:"Serum (yellow).",
 h:["Hyperthyroidism","Excess levothyroxine","Amiodarone","Heparin (in-vitro effect)"],
 l:["Hypothyroidism","Hypopituitarism"],
 i:["Biotin falsely raises it","Pregnancy and severe illness affect immunoassays"],
 r:["TSH (Thyroid Stimulating Hormone)","Free T3 (Free Triiodothyronine)"]},

"Prolactin": {
 w:"A pituitary hormone responsible for milk production.",
 y:"Evaluation of amenorrhea, infertility, galactorrhea, low libido and pituitary tumors.",
 p:"Draw in the morning 2–3 h after waking, after 20–30 min rest, with no breast examination or intercourse beforehand.",
 s:"Serum (yellow).",
 h:["Prolactin-secreting pituitary adenoma","Pregnancy and breastfeeding","Drugs (antipsychotics, metoclopramide)","Hypothyroidism","Kidney failure","Stress"],
 l:["Hypopituitarism","Dopamine agonists and bromocriptine"],
 i:["Macroprolactin raises it without clinical significance → request PEG precipitation","Hook effect with very large tumors → dilute the sample"],
 r:["TSH (Thyroid Stimulating Hormone)","FSH (Follicle Stimulating Hormone)","LH (Luteinizing Hormone)"]},

"Vitamin D (25-OH)": {
 w:"The storage form of vitamin D and the best indicator of body stores.",
 y:"Evaluation of vitamin D deficiency, osteoporosis and osteomalacia, and monitoring supplementation.",
 p:"No fasting required.",
 s:"Serum (yellow), protected from light.",
 h:["Excess supplementation (> 100 ng/mL risks toxicity)"],
 l:["Little sun exposure","Dark skin and covering clothing","Obesity","Malabsorption","Liver and kidney disease","Antiepileptic drugs"],
 i:["Immunoassays may not fully measure D2","Classification: < 20 deficient, 20–29 insufficient, ≥ 30 ng/mL sufficient"],
 r:["Calcium (Total)","PTH (Parathyroid Hormone)","ALP (Alkaline Phosphatase)","Phosphorus"]},

"PTH (Parathyroid Hormone)": {
 w:"The parathyroid hormone that regulates calcium and phosphate.",
 y:"Evaluation of abnormal calcium, chronic kidney disease and osteoporosis.",
 p:"Fasting preferred; draw in the morning.",
 s:"Purple EDTA (more stable) or serum separated promptly.",
 h:["Primary hyperparathyroidism (with high calcium)","Secondary: vitamin D deficiency, chronic kidney disease","Lithium"],
 l:["Hypoparathyroidism after thyroid surgery","Hypercalcemia of malignancy","Severe hypomagnesemia"],
 i:["Unstable in serum at room temperature","Biotin"],
 r:["Calcium (Total)","Vitamin D (25-OH)","Phosphorus","Creatinine"]},

"Cortisol (AM – 8AM)": {
 w:"The main stress hormone from the adrenal cortex. It peaks in the morning and is lowest at midnight.",
 y:"Screening for adrenal insufficiency (Addison's), and part of the Cushing's work-up.",
 p:"Draw between 7 and 9 AM. Record steroid medications and oral contraceptives.",
 s:"Serum (yellow).",
 h:["Cushing's syndrome","Stress and acute illness","Pregnancy and oral contraceptives (raise binding protein)"],
 l:["Primary and secondary adrenal insufficiency","Chronic steroid therapy (axis suppression)"],
 i:["Prednisolone cross-reacts in immunoassays","Timing is the most important factor in interpretation"],
 r:["ACTH (Adrenocorticotropin)","Urine Free Cortisol (24h UFC)","Sodium (Na⁺)","Potassium (K⁺)"]},

"AMH (Anti-Müllerian Hormone)": {
 w:"A hormone secreted by small ovarian follicles; it reflects the ovarian reserve.",
 y:"Fertility and reserve assessment before IVF, and polycystic ovary syndrome.",
 p:"Can be drawn on any day of the cycle.",
 s:"Serum (yellow).",
 h:["Polycystic ovary syndrome","Granulosa-cell tumors"],
 l:["Diminished ovarian reserve","Approaching menopause","After chemotherapy or ovarian surgery"],
 i:["Oral contraceptives lower it by up to 30%","Large between-method differences"],
 r:["FSH (Follicle Stimulating Hormone)","LH (Luteinizing Hormone)","Estradiol (E2)"]},

/* ───────── Coagulation ───────── */
"PT (Prothrombin Time)": {
 w:"Clotting time of plasma after adding tissue factor; it measures the extrinsic and common pathways (factors VII, X, V, II and fibrinogen).",
 y:"Monitoring warfarin, assessing liver function and vitamin K deficiency, and pre-operative screening.",
 p:"No fasting needed. Record warfarin dose and timing.",
 s:"Blue 3.2% citrate at 9:1, filled exactly to the line. Test within 24 h.",
 h:["Warfarin","Vitamin K deficiency","Liver disease","DIC","Factor VII deficiency"],
 l:[],
 i:["Under-filling the tube falsely prolongs it","Hematocrit > 55% requires adjusting the citrate volume","Heparin contamination from catheters"],
 r:["INR (International Normalized Ratio)","aPTT (Activated Partial Thromboplastin Time)","Fibrinogen","Mixing Study (1:1 PT/aPTT)"]},

"INR (International Normalized Ratio)": {
 w:"Conversion of the PT into a globally standardized number using the reagent sensitivity (ISI), so results are comparable between laboratories.",
 y:"Monitoring warfarin therapy. Target usually 2–3, and 2.5–3.5 for mechanical valves.",
 p:"Record the warfarin dose.",
 s:"Blue citrate 9:1.",
 h:["Warfarin","Liver disease","Vitamin K deficiency","Drugs potentiating warfarin (antibiotics, amiodarone)"],
 l:["Foods rich in vitamin K (leafy greens)","Enzyme inducers (rifampicin, carbamazepine)"],
 i:["Not valid for monitoring direct oral anticoagulants (DOACs)","Same pre-analytical issues as PT"],
 r:["PT (Prothrombin Time)"]},

"aPTT (Activated Partial Thromboplastin Time)": {
 w:"Clotting time via the intrinsic and common pathways (factors XII, XI, IX, VIII, X, V, II).",
 y:"Monitoring unfractionated heparin, screening for hemophilia and lupus anticoagulant, and pre-operative assessment.",
 p:"No fasting required.",
 s:"Blue citrate 9:1, test within 4 h (within 1 h if the patient is on heparin).",
 h:["Heparin","Hemophilia A and B","Von Willebrand disease","Lupus anticoagulant (thrombosis, not bleeding)","DIC and liver disease"],
 l:["Acute phase (raised factor VIII)"],
 i:["Under-filling and high hematocrit","Heparin from the line","Delay lowers factor VIII"],
 r:["PT (Prothrombin Time)","Mixing Study (1:1 PT/aPTT)","Anti-Xa (Heparin Level)","Lupus Anticoagulant","Factor VIII Activity"]},

"D-Dimer": {
 w:"A breakdown product of cross-linked fibrin, indicating that clotting and clot lysis have occurred.",
 y:"Excluding deep-vein thrombosis and pulmonary embolism when clinical probability is low, and diagnosing DIC.",
 p:"No preparation needed.",
 s:"Blue citrate.",
 h:["Venous thrombosis and pulmonary embolism","DIC","Pregnancy","Surgery and trauma","Infection and cancer","Advancing age (cut-off = age × 10 above 50 y)"],
 l:[],
 i:["Its main value is exclusion — a normal result rules out thrombosis; a raised one does not confirm it","Rheumatoid factor in some assays"],
 r:["Fibrinogen","PT (Prothrombin Time)","Platelet Count"]},

"Fibrinogen": {
 w:"Factor I, converted to fibrin to form the clot; also an acute-phase protein.",
 y:"Evaluation of bleeding, DIC, liver disease and severe postpartum hemorrhage.",
 p:"No preparation needed.",
 s:"Blue citrate 9:1.",
 h:["Inflammation and infection","Pregnancy","Smoking"],
 l:["DIC (< 100 mg/dL is dangerous)","Severe liver disease","Thrombolytic therapy","Congenital hypofibrinogenemia"],
 i:["High-dose heparin in the Clauss method"],
 r:["D-Dimer","PT (Prothrombin Time)","Thrombin Time","Platelet Count"]},

/* ───────── Immunology / Serology ───────── */
"ANA (Antinuclear Antibodies)": {
 w:"Autoantibodies directed against components of the cell nucleus, detected by immunofluorescence on HEp-2 cells with pattern and titer.",
 y:"Screening for systemic lupus erythematosus and connective-tissue diseases (Sjögren's, scleroderma, myositis).",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["SLE (> 95% positive)","Scleroderma and Sjögren's","Drugs (hydralazine, procainamide)","Chronic infections","3–15% of healthy people at low titer (especially women and the elderly)"],
 l:[],
 i:["Low titers (1:80) are common in healthy people — do not interpret without symptoms","A negative result usually excludes SLE"],
 r:["Anti-dsDNA","Anti-Smith (Sm)","Anti-SSA/Ro","Complement C3","Complement C4"]},

"RF (Rheumatoid Factor)": {
 w:"An antibody (usually IgM) directed against the Fc portion of IgG.",
 y:"Aids in the diagnosis of rheumatoid arthritis.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Rheumatoid arthritis (70–80%)","Sjögren's syndrome","Hepatitis C","Endocarditis","Advancing age"],
 l:[],
 i:["Low specificity → anti-CCP is more specific","May cause false positives in other immunoassays"],
 r:["Anti-CCP (Cyclic Citrullinated Peptide)","CRP (C-Reactive Protein)","ESR (Erythrocyte Sedimentation Rate)"]},

"ASO (Antistreptolysin O)": {
 w:"Antibodies against streptolysin O, an enzyme secreted by group A streptococci.",
 y:"Evidence of recent streptococcal infection in rheumatic fever and post-streptococcal glomerulonephritis.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Recent streptococcal infection (peaks after 3–5 weeks)","Rheumatic fever","Glomerulonephritis"],
 l:[],
 i:["Rises poorly after skin infection → use anti-DNase B","School-age children normally have higher values","Two sequential samples are better than a single value"],
 r:["Throat Culture","Rapid Strep A Antigen","Complement C3"]},

"HBsAg (Hepatitis B Surface Ag)": {
 w:"The surface antigen of hepatitis B virus, and the first marker to appear in blood.",
 y:"Diagnosis of acute or chronic infection, and screening of pregnant women, blood donors and health-care workers.",
 p:"No preparation needed.",
 s:"Serum or plasma.",
 h:["Acute infection","Chronic infection (positive > 6 months)"],
 l:[],
 i:["Transient positivity a few days after vaccination","Mutants may give false-negative results","Any positive result is confirmed by neutralization"],
 r:["Anti-HBs (Hepatitis B Surface Ab)","Anti-HBc Total","Anti-HBc IgM","HBeAg","HBV DNA (Viral Load)"]},

"Hepatitis C Antibody": {
 w:"Antibodies against hepatitis C virus.",
 y:"Screening for current or past hepatitis C infection.",
 p:"No preparation needed.",
 s:"Serum or plasma.",
 h:["Current or past infection"],
 l:[],
 i:["A positive result does not distinguish active infection from recovery → confirm with HCV RNA","Window period 8–11 weeks","May be falsely negative in severe immunodeficiency"],
 r:["Hepatitis C RNA (Viral Load)","ALT (Alanine Aminotransferase)"]},

"HIV Antibody/Ag (4th Gen combo)": {
 w:"Fourth-generation assay detecting HIV-1/2 antibodies and p24 antigen together.",
 y:"Screening for HIV infection; p24 antigen shortens the window period to about 2–4 weeks.",
 p:"Requires patient consent and confidentiality of results.",
 s:"Serum or plasma.",
 h:["HIV infection"],
 l:[],
 i:["Every reactive result needs confirmatory testing (antibody differentiation or RNA)","Rare false positives (pregnancy, autoimmune disease)"],
 r:["HIV RNA (Viral Load)"]},

"Brucella Antibodies (SAT / Coombs)": {
 w:"Antibodies against Brucella detected by the standard tube agglutination test (SAT) or the Coombs test for incomplete antibodies.",
 y:"Diagnosis of brucellosis (Malta fever) — endemic in Jordan and the region, transmitted by unpasteurized milk products and contact with livestock.",
 p:"No preparation. Note symptoms, their duration and any previous treatment.",
 s:"Serum (yellow); preferably two samples two weeks apart.",
 h:["Acute brucellosis (SAT ≥ 1:160 or a four-fold rise in titer)","Chronic infection (Coombs titer higher than SAT)"],
 l:[],
 i:["Prozone with very high titers → dilute up to 1:2560","Cross-reaction with Yersinia, Francisella and Vibrio cholerae","Titers stay high for months after treatment","Blood culture (needs longer incubation) confirms the diagnosis"],
 r:["Blood Culture (Aerobic)","CBC (Complete Blood Count)","ALT (Alanine Aminotransferase)"]},

/* ───────── Tumor markers ───────── */
"PSA (Total Prostate-Specific Antigen)": {
 w:"A protein secreted by the prostate gland.",
 y:"Aids prostate-cancer screening (after shared decision-making) and post-treatment follow-up.",
 p:"Avoid ejaculation for 48 h, cycling, and rectal examination or catheterization before sampling.",
 s:"Serum (yellow).",
 h:["Prostate cancer","Benign prostatic hyperplasia","Prostatitis","After rectal exam or cystoscopy","Advancing age"],
 l:["Finasteride and dutasteride (lower it ~50% → double the value)","After prostatectomy (should become undetectable)"],
 i:["Do not request during prostatitis or urinary retention","Grey zone 4–10 ng/mL → use the free PSA ratio"],
 r:["PSA Free/Total Ratio"]},

"hCG (Beta-hCG Quantitative)": {
 w:"A placental hormone that doubles every 48–72 h in a normal early pregnancy.",
 y:"Confirming and following pregnancy, evaluating ectopic pregnancy and miscarriage, and monitoring gestational trophoblastic and testicular tumors.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Pregnancy","Multiple pregnancy","Molar pregnancy","Germ-cell tumors"],
 l:["Ectopic pregnancy (slow rise)","Miscarriage"],
 i:["Heterophile antibodies give false positives (not seen in urine)","Hook effect at very high values","Low-level pituitary hCG around menopause"],
 r:["Urine hCG (Qualitative)","Progesterone"]},

/* ───────── Urinalysis ───────── */
"Urinalysis – Dipstick (10-parameter)": {
 w:"A chemical strip measuring specific gravity, pH, protein, glucose, ketones, blood, bilirubin, urobilinogen, nitrite and leukocyte esterase.",
 y:"Screening for urinary-tract infection, kidney disease, diabetes and liver disease.",
 p:"First morning, clean-catch midstream sample.",
 s:"Clean container; test within 2 h or refrigerate up to 24 h.",
 h:["Nitrite + esterase: bacterial infection","Blood: stones, infection, tumors, or hemoglobin/myoglobin","Protein: kidney disease","Glucose: diabetes (renal threshold ~180 mg/dL)","Ketones: fasting, DKA"],
 l:[],
 i:["Vitamin C falsely lowers blood, glucose and nitrite","Dilute urine masks findings","The strip detects albumin only, not Bence Jones protein","Nitrite needs 4 h bladder incubation and nitrate-reducing bacteria"],
 r:["Urine Microscopy (Sediment)","Urine Culture","Urine Albumin/Creatinine Ratio (ACR)"]},

"Urine Microscopy (Sediment)": {
 w:"Microscopic examination of centrifuged urine sediment for cells, casts, crystals and organisms.",
 y:"Confirms dipstick findings and distinguishes glomerular bleeding (dysmorphic RBCs and red-cell casts) from other causes.",
 p:"First morning midstream sample.",
 s:"Examine within 2 h — cells and casts lyse in alkaline or dilute urine.",
 h:["RBC > 3/HPF: hematuria","WBC > 5/HPF: inflammation","Red-cell casts: glomerulonephritis","Many squamous cells: contaminated sample"],
 l:[],
 i:["Menstrual blood","Delay and bacterial overgrowth","See the casts table in the Quick Reference tab"],
 r:["Urinalysis – Dipstick (10-parameter)","Urine Culture"]},

"Urine Albumin/Creatinine Ratio (ACR)": {
 w:"The ratio of albumin to creatinine in a random urine sample, replacing a 24-hour collection.",
 y:"Early detection of diabetic and hypertensive nephropathy, and staging of chronic kidney disease.",
 p:"First morning sample is best. Avoid strenuous exercise for 24 h.",
 s:"Random urine.",
 h:["30–300 mg/g: moderately increased (A2)","> 300 mg/g: severely increased (A3)","Also: fever, exercise, UTI, heart failure, menstruation"],
 l:[],
 i:["Two raised results out of three samples within 3–6 months are needed for confirmation","Muscle mass affects creatinine"],
 r:["Creatinine","eGFR (Estimated GFR)","HbA1c (Glycated Hemoglobin)"]},

/* ───────── Microbiology ───────── */
"Urine Culture": {
 w:"Culture of urine to identify and quantify bacteria, followed by antimicrobial susceptibility testing.",
 y:"Confirming UTI and choosing the right antibiotic; screening pregnant women for asymptomatic bacteriuria.",
 p:"Before starting antibiotics. Clean the area and collect a midstream sample.",
 s:"Sterile container; culture within 2 h or refrigerate up to 24 h (or use a boric-acid tube).",
 h:["≥ 10⁵ CFU/mL of a single organism: usually infection","Lower counts may be significant in catheter or needle-aspirated samples"],
 l:[],
 i:["Mixed growth means contamination","Delay without refrigeration multiplies bacteria","Prior antibiotics give false negatives"],
 r:["Urinalysis – Dipstick (10-parameter)","Antimicrobial Susceptibility Testing (AST)"]},

"Blood Culture (Aerobic)": {
 w:"Culture of blood in special bottles to detect bacteria and fungi in the circulation.",
 y:"Diagnosis of sepsis, endocarditis, fever of unknown origin and brucellosis.",
 p:"Before antibiotics. At least two sets from two different sites.",
 s:"Disinfect skin with chlorhexidine and let it dry. 8–10 mL per bottle for adults, aerobic bottle first with a syringe. Do not refrigerate.",
 h:["Bacteremia and sepsis"],
 l:[],
 i:["Blood volume is the most important factor for sensitivity","Coagulase-negative staphylococci in a single bottle are usually skin contaminants","Do not draw from a catheter unless line infection is suspected"],
 r:["Blood Culture (Anaerobic)","Procalcitonin (PCT)","Lactate","Antimicrobial Susceptibility Testing (AST)"]},

"H. pylori Stool Antigen": {
 w:"Detects Helicobacter pylori antigen in stool, indicating current infection.",
 y:"Diagnosis of infection and test of cure after treatment.",
 p:"Stop proton-pump inhibitors for 2 weeks, and antibiotics and bismuth for 4 weeks.",
 s:"Fresh stool in a clean container; refrigerate up to 72 h.",
 h:["Current H. pylori infection"],
 l:[],
 i:["Acid suppressants and antibiotics cause false negatives","Very watery stool may dilute the antigen","Test of cure at least 4 weeks after completing therapy"],
 r:["H. pylori Urea Breath Test","CBC (Complete Blood Count)"]},

"Stool Ova & Parasites (O&P)": {
 w:"Direct and concentrated stool examination for parasite eggs, cysts and trophozoites.",
 y:"Chronic diarrhea, eosinophilia, travel, and contacts of cases.",
 p:"Avoid barium, antacids and mineral-oil laxatives before collection.",
 s:"Three samples on different days. Liquid stool examined within 30 min for trophozoites, or preserved in fixative.",
 h:["Giardia, Entamoeba, hookworm, Ascaris, tapeworms and others"],
 l:[],
 i:["A single sample misses up to 40% of cases","Urine or water kills trophozoites","Cryptosporidium needs a special (modified acid-fast) stain"],
 r:["Stool Culture","CBC (Complete Blood Count)","Pinworm (Scotch Tape Test)"]},

/* ───────── Blood bank ───────── */
"ABO Blood Grouping": {
 w:"Determination of the blood group by testing red-cell antigens (forward) and serum antibodies (reverse).",
 y:"Before transfusion, in pregnancy, for donors and for organ transplantation.",
 p:"No preparation. Patient identification with two identifiers is mandatory.",
 s:"Purple EDTA, with a complete label written at the bedside.",
 h:[],
 l:[],
 i:["A forward/reverse discrepancy blocks reporting until resolved","Newborns lack antibodies (forward grouping only)","Marrow transplant or recent transfusion shows a mixed-field reaction","Cold agglutinins and rouleaux cause false agglutination"],
 r:["Rh(D) Typing","Irregular Antibody Screen (IAT)","Major Crossmatch"]}

});

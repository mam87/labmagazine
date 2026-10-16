/* Lab test encyclopedia — ENGLISH edition, Batch 3. Mirrors encyclopedia-3.js */
window.ENC_EN = Object.assign(window.ENC_EN || {}, {

/* ───────── Hematology ───────── */
"TIBC (Total Iron Binding Capacity)": {
 w:"The maximum amount of iron that serum transferrin can carry; it reflects the amount of transferrin.",
 y:"Read with iron and ferritin: high in iron deficiency, low in anemia of chronic disease.",
 p:"Fasting morning sample.",
 s:"Serum (yellow), non-hemolyzed.",
 h:["Iron deficiency","Pregnancy","Oral contraceptives"],
 l:["Anemia of chronic inflammation","Malnutrition and hypoproteinemia","Nephrotic syndrome","Iron overload and liver disease"],
 i:["Estrogens raise it"],
 r:["Iron (Fe)","Transferrin Saturation","Ferritin"]},

"Osmotic Fragility Test": {
 w:"Measures red-cell resistance to lysis in saline solutions of graded concentration.",
 y:"Diagnosis of hereditary spherocytosis (spherocytes lyse sooner).",
 p:"No preparation needed.",
 s:"Fresh green heparin blood with a normal control sample run at the same time.",
 h:["Increased fragility: hereditary spherocytosis, immune hemolytic anemia"],
 l:["Decreased fragility: thalassemia, iron deficiency, liver disease, target cells"],
 i:["24-h incubation increases sensitivity","The flow-cytometric EMA-binding test is newer and more accurate"],
 r:["Peripheral Blood Smear","Reticulocyte Count","Direct Coombs Test (DAT)","Bilirubin (Total)"]},

"Methemoglobin": {
 w:"Hemoglobin whose iron has been oxidized to the ferric state, so it cannot carry oxygen.",
 y:"Unexplained cyanosis with normal arterial PO₂, after oxidant drugs (dapsone, benzocaine, nitrates) or chemical exposure.",
 p:"No preparation; draw immediately.",
 s:"Heparin (blood gas) or EDTA, analyzed within 1 h by CO-oximetry.",
 h:["> 30%: severe symptoms; > 70%: lethal","Drugs, nitrates and well water in infants","Inherited cytochrome b5 reductase deficiency"],
 l:[],
 i:["Pulse oximetry reads a fixed, inaccurate ~85%","Blood appears chocolate-brown","Level decreases in the sample with delay"],
 r:["Carboxyhemoglobin","G6PD (Glucose-6-Phosphate Dehydrogenase)"]},

"Carboxyhemoglobin": {
 w:"Hemoglobin bound to carbon monoxide, which binds about 200 times more strongly than oxygen.",
 y:"Diagnosis of carbon-monoxide poisoning (heaters, fires, car exhaust) — common in winter.",
 p:"Draw immediately; record whether oxygen was given before sampling.",
 s:"Heparin or EDTA, tube full and capped, analyzed by CO-oximetry.",
 h:["Carbon-monoxide poisoning","Smokers (up to 10%)"],
 l:[],
 i:["Ordinary pulse oximetry gives falsely normal readings","Oxygen before sampling lowers it quickly → symptoms matter more than the number"],
 r:["Methemoglobin","Lactate","hs-Troponin I (hs-cTnI)"]},

"Erythropoietin (EPO)": {
 w:"A hormone secreted by the kidneys to stimulate red-cell production in response to hypoxia.",
 y:"Distinguishes polycythemia vera (low EPO) from secondary polycythemia (high EPO), and evaluates the anemia of kidney failure.",
 p:"Morning sample (diurnal rhythm).",
 s:"Serum (yellow).",
 h:["Hypoxia: lung disease, altitude, smoking","EPO-secreting kidney and liver tumors","Non-renal anemia"],
 l:["Polycythemia vera","Chronic kidney disease"],
 i:["Exogenous EPO injections","Recent transfusion"],
 r:["CBC (Complete Blood Count)","JAK2 Mutation","Creatinine"]},

"Flow Cytometry (CD markers)": {
 w:"Cell-by-cell analysis with fluorescent-labeled antibodies to identify surface antigens (CD markers).",
 y:"Diagnosis and classification of leukemia and lymphoma, CD4 counts in HIV, minimal residual disease, and PNH.",
 p:"No preparation. Send a CBC and smear with the sample.",
 s:"EDTA or heparin at room temperature (not refrigerated), arriving within 24–48 h. Bone marrow or fresh tissue in RPMI medium.",
 h:["Blast lineage (myeloid or lymphoid) and clonality (κ or λ)"],
 l:["CD4 < 200: AIDS"],
 i:["Refrigeration or delay kills cells","Hemodilute bone-marrow aspirates"],
 r:["CBC (Complete Blood Count)","Peripheral Blood Smear","BCR-ABL (Philadelphia Chromosome)"]},

"JAK2 Mutation": {
 w:"Detection of the JAK2 V617F mutation (and sometimes exon 12) in a gene controlling growth signaling.",
 y:"Diagnosis of myeloproliferative neoplasms: polycythemia vera (> 95%), essential thrombocythemia and myelofibrosis (~50–60%).",
 p:"No preparation needed.",
 s:"Purple EDTA (peripheral blood is usually sufficient).",
 h:["Positive: myeloproliferative neoplasm"],
 l:[],
 i:["A negative result does not exclude disease → test CALR and MPL","Low-level mutations may be found in the elderly (CHIP) without disease"],
 r:["CBC (Complete Blood Count)","Erythropoietin (EPO)","BCR-ABL (Philadelphia Chromosome)"]},

"BCR-ABL (Philadelphia Chromosome)": {
 w:"The fusion gene created by the t(9;22) translocation, detected by PCR or FISH.",
 y:"Diagnosis of chronic myeloid leukemia (CML) and quantitative monitoring of response to imatinib (IS%).",
 p:"No preparation needed.",
 s:"Purple EDTA, arriving within 48 h, not frozen.",
 h:["CML (> 95%)","Some adult ALL"],
 l:[],
 i:["Major molecular response = ≤ 0.1% IS","The lab must report on the International Scale (IS) for follow-up"],
 r:["CBC (Complete Blood Count)","Flow Cytometry (CD markers)","JAK2 Mutation"]},

"Intrinsic Factor Antibody": {
 w:"Antibodies against intrinsic factor, which is required for B12 absorption.",
 y:"Confirms pernicious anemia in B12 deficiency.",
 p:"Draw before B12 injection or at least 48 h afterwards.",
 s:"Serum (yellow).",
 h:["Pernicious anemia (specificity ~100%, sensitivity 50–70%)"],
 l:[],
 i:["B12 injection within 48 h gives false positives","A negative result does not exclude disease → parietal-cell antibodies are more sensitive but less specific"],
 r:["Vitamin B12","CBC (Complete Blood Count)","Homocysteine"]},

/* ───────── Chemistry ───────── */
"Glucose (Random)": {
 w:"Blood glucose at any time regardless of the last meal.",
 y:"A value ≥ 200 mg/dL with classic symptoms (thirst, polyuria, weight loss) is diagnostic of diabetes. Useful in emergencies.",
 p:"Record the time of the last meal.",
 s:"Grey fluoride or serum separated promptly.",
 h:["Diabetes","Stress and corticosteroids","Recent meal"],
 l:["Hypoglycemia: < 70 mg/dL; < 54 is serious"],
 i:["Delay without fluoride lowers it","Drawing above an IV infusion"],
 r:["Glucose (Fasting)","HbA1c (Glycated Hemoglobin)"]},

"hs-Troponin T (hs-cTnT)": {
 w:"Another cardiac troponin measured by a high-sensitivity assay (Roche platform).",
 y:"Diagnosis and rule-out of MI with 0/1-h algorithms. Upper reference limit 14 ng/L.",
 p:"No preparation needed.",
 s:"Heparin or serum.",
 h:["Myocardial infarction","Myocarditis","Heart failure","Chronic kidney disease (more than troponin I)","Chronic skeletal-muscle disease"],
 l:[],
 i:["Values are not interchangeable with troponin I","High-dose biotin","Judge the change between two measurements"],
 r:["hs-Troponin I (hs-cTnI)","NT-proBNP","CK-MB (Creatine Kinase-MB)"]},

"BNP (B-Type Natriuretic Peptide)": {
 w:"An active hormone secreted by the ventricles when the heart is stretched; it promotes sodium excretion and vasodilation.",
 y:"Diagnosis of heart failure in breathlessness (< 100 pg/mL usually excludes it).",
 p:"No preparation needed.",
 s:"Purple EDTA in a plastic tube, analyzed within 4 h (less stable than NT-proBNP).",
 h:["Heart failure","Kidney failure","Pulmonary embolism","Advancing age","Sacubitril/valsartan (blocks its breakdown)"],
 l:["Obesity"],
 i:["Sacubitril raises it → use NT-proBNP to follow these patients","Glass tubes reduce its stability"],
 r:["NT-proBNP","hs-Troponin I (hs-cTnI)","Creatinine"]},

"hs-CRP (High Sensitivity CRP)": {
 w:"High-sensitivity measurement of CRP to detect low-grade chronic inflammation.",
 y:"Cardiovascular risk assessment: < 1 low, 1–3 average, > 3 mg/L high.",
 p:"In a stable state of health, at least 2 weeks after any infection. Repeat twice and average.",
 s:"Serum (yellow).",
 h:["High cardiovascular risk","Obesity and smoking","Any inflammation or infection (values > 10 are not used for risk)"],
 l:["Statins, exercise and weight loss"],
 i:["Recent infection invalidates interpretation","Not used alone to make treatment decisions"],
 r:["CRP (C-Reactive Protein)","LDL Cholesterol","Lipoprotein(a) [Lp(a)]"]},

"Serum Osmolality": {
 w:"The number of dissolved particles per kilogram of serum water, determined mainly by sodium, glucose and urea.",
 y:"Evaluation of hyponatremia and screening for toxic alcohols (osmolal gap > 10).",
 p:"No preparation needed.",
 s:"Serum (yellow), measured by freezing-point depression.",
 h:["Dehydration and hypernatremia","Severe hyperglycemia","Toxic alcohols (methanol, ethylene glycol) and ethanol","Mannitol"],
 l:["SIADH","Excess water intake","True hyponatremia"],
 i:["Calculate the osmolal gap in the Calculators tab"],
 r:["Sodium (Na⁺)","Glucose (Fasting)","BUN (Blood Urea Nitrogen)","Urine Osmolality","Ethanol – Blood Alcohol Level"]},

"Myoglobin": {
 w:"An oxygen-carrying protein of muscle, released rapidly on injury and excreted by the kidneys.",
 y:"Evaluation of rhabdomyolysis and the risk of acute kidney injury.",
 p:"No preparation needed.",
 s:"Serum or heparin. Dark brown urine may contain myoglobin.",
 h:["Rhabdomyolysis (trauma, strenuous exercise, statins, seizures)","Myocardial infarction (non-specific)","Kidney failure"],
 l:[],
 i:["Rises and clears quickly (within 24 h) → CK is better for follow-up","Urine dipstick shows blood without red cells on microscopy"],
 r:["CK (Creatine Kinase, Total)","Creatinine","Potassium (K⁺)"]},

"Prealbumin (Transthyretin)": {
 w:"A protein that transports thyroxine and vitamin A, with a half-life of only 2 days.",
 y:"Short-term monitoring of the response to nutritional support.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Kidney failure","Corticosteroids"],
 l:["Malnutrition","Acute inflammation (negative acute-phase protein)","Liver disease"],
 i:["Inflammation lowers it regardless of nutrition → interpret with CRP"],
 r:["Albumin","CRP (C-Reactive Protein)"]},

"Ceruloplasmin": {
 w:"The main copper-carrying protein in blood.",
 y:"Screening for Wilson disease (copper accumulation) in unexplained liver disease in young people or neuropsychiatric symptoms.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Inflammation (acute-phase protein)","Pregnancy and oral contraceptives"],
 l:["Wilson disease (< 20 mg/dL)","Menkes disease","Malnutrition and copper deficiency","Nephrotic syndrome"],
 i:["Inflammation or pregnancy may raise it to normal in Wilson disease → check 24-h urine copper and Kayser-Fleischer rings"],
 r:["ALT (Alanine Aminotransferase)","Albumin"]},

/* ───────── Hormones ───────── */
"Thyroglobulin": {
 w:"A protein made only by thyroid cells.",
 y:"Tumor marker for following differentiated thyroid cancer after thyroidectomy — should be almost undetectable.",
 p:"Preferably the same laboratory and method each time.",
 s:"Serum (yellow).",
 h:["Recurrent or metastatic thyroid cancer (after thyroidectomy)","Gland present: nodules, Graves', thyroiditis"],
 l:["After total thyroidectomy and radioiodine ablation"],
 i:["Anti-thyroglobulin antibodies (anti-Tg) give falsely low results → always measure them together","No value for diagnosing thyroid cancer before surgery"],
 r:["Anti-Tg (Thyroglobulin Ab)","TSH (Thyroid Stimulating Hormone)"]},

"Anti-Tg (Thyroglobulin Ab)": {
 w:"Autoantibodies against thyroglobulin.",
 y:"Ordered mainly with thyroglobulin in thyroid-cancer follow-up, because their presence invalidates its measurement; sometimes in autoimmune thyroid disease.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Hashimoto's and Graves'","20–25% of thyroid-cancer patients"],
 l:[],
 i:["A rise after thyroidectomy may indicate recurrence (its trend can serve as a surrogate marker)"],
 r:["Thyroglobulin","Anti-TPO (Thyroid Peroxidase Ab)"]},

"DHEA-S": {
 w:"A weak androgen produced almost entirely by the adrenal gland.",
 y:"Identifies the source of androgen excess in women (hirsutism): adrenal or ovarian.",
 p:"No specific timing (stable through the day).",
 s:"Serum (yellow).",
 h:["Adrenal tumors (> 700 µg/dL)","Congenital adrenal hyperplasia","PCOS (mild rise)","Supplements"],
 l:["Adrenal insufficiency","Advancing age","Corticosteroid therapy"],
 i:["Reference range depends strongly on age and sex"],
 r:["Total Testosterone","17-OH Progesterone","Cortisol (AM – 8AM)"]},

"Aldosterone": {
 w:"An adrenal-cortex hormone that retains sodium and excretes potassium.",
 y:"Screening for primary hyperaldosteronism (Conn syndrome) in resistant hypertension or with hypokalemia — interpreted with renin as the ARR.",
 p:"Morning, 2 h after rising and after sitting 5–15 min. Correct potassium first. Stop spironolactone 4–6 weeks (under medical supervision).",
 s:"EDTA or serum at room temperature (do not chill before separation — cold activates renin).",
 h:["Primary hyperaldosteronism","Secondary: heart failure, cirrhosis, renal artery stenosis, diuretics"],
 l:["Addison's disease","High salt intake"],
 i:["Hypokalemia lowers it → correct first","Drugs (ACE inhibitors, beta-blockers, diuretics) alter the ratio"],
 r:["Plasma Renin Activity","Potassium (K⁺)","Sodium (Na⁺)"]},

"Plasma Renin Activity": {
 w:"A renal enzyme that starts the renin–angiotensin–aldosterone cascade.",
 y:"Used with aldosterone to calculate the ARR (> 20–30 suggests primary hyperaldosteronism).",
 p:"As for aldosterone: morning, seated, with potassium corrected.",
 s:"Purple EDTA at room temperature — not chilled or on ice (cold activates prorenin and falsely raises it).",
 h:["Renal artery stenosis","Diuretics and ACE inhibitors","Dehydration","Addison's disease"],
 l:["Primary hyperaldosteronism","Beta-blockers","High salt intake"],
 i:["Chilling before separation is the main error","Antihypertensive drugs change interpretation"],
 r:["Aldosterone","Potassium (K⁺)"]},

"GH (Growth Hormone)": {
 w:"The pituitary hormone responsible for growth, secreted in pulses.",
 y:"A single random value is not useful. Ordered within stimulation tests (growth failure) or glucose suppression (acromegaly).",
 p:"According to protocol, usually fasting and at rest.",
 s:"Serum (yellow).",
 h:["Acromegaly and gigantism (does not suppress < 1 ng/mL after glucose)","Stress, exercise and sleep","Fasting and anorexia"],
 l:["Growth-hormone deficiency (no rise on stimulation)","Obesity"],
 i:["Pulsatile secretion makes a single value meaningless","IGF-1 is better for screening"],
 r:["IGF-1","Glucose Tolerance Test (OGTT)"]},

"IGF-1": {
 w:"Insulin-like growth factor secreted by the liver in response to growth hormone; stable throughout the day.",
 y:"The best screening test for acromegaly, and helpful in assessing GH deficiency.",
 p:"No specific timing.",
 s:"Serum (yellow).",
 h:["Acromegaly","Puberty and pregnancy"],
 l:["Growth-hormone deficiency","Malnutrition","Liver disease","Hypothyroidism","Uncontrolled diabetes"],
 i:["Reference range depends greatly on age and sex","Oral estrogens lower it"],
 r:["GH (Growth Hormone)"]},

"Calcitonin": {
 w:"A hormone secreted by the C-cells of the thyroid.",
 y:"Tumor marker for medullary thyroid carcinoma (MTC) for diagnosis and follow-up, and screening of MEN2 families.",
 p:"Fasting preferred.",
 s:"Serum separated and frozen promptly (unstable).",
 h:["Medullary thyroid carcinoma","C-cell hyperplasia","Kidney failure","Proton-pump inhibitors","Other neuroendocrine tumors"],
 l:[],
 i:["Men have higher values","Delay without freezing lowers it"],
 r:["CEA (Carcinoembryonic Antigen)","Plasma Free Metanephrines"]},

"Plasma Free Metanephrines": {
 w:"Metabolites of epinephrine and norepinephrine, released continuously by pheochromocytomas.",
 y:"The most sensitive screening test for pheochromocytoma in paroxysmal hypertension with headache, sweating and palpitations.",
 p:"Lie supine for 30 min before sampling, fasting, no caffeine or smoking. Tricyclics and antidepressants may interfere.",
 s:"Chilled EDTA, on ice, separated within 1 h.",
 h:["Pheochromocytoma (> 3–4× upper limit strongly suggests it)","Stress and acute illness","Drugs (tricyclic antidepressants, acetaminophen in some methods)"],
 l:[],
 i:["Seated sampling increases false positives","Mild elevations are usually false → repeat the test"],
 r:["Urine Metanephrines (Fractionated, 24h)","Calcitonin"]},

/* ───────── Coagulation ───────── */
"Thrombin Time": {
 w:"Clotting time of plasma after adding thrombin directly; it measures conversion of fibrinogen to fibrin.",
 y:"Detects heparin or direct thrombin inhibitors (dabigatran), and evaluates low or dysfunctional fibrinogen.",
 p:"Record anticoagulant drugs.",
 s:"Blue citrate.",
 h:["Heparin (very sensitive)","Dabigatran","Low or dysfunctional fibrinogen","DIC and fibrinolysis"],
 l:[],
 i:["Extremely sensitive to trace heparin from catheters","A normal TT effectively excludes dabigatran"],
 r:["Fibrinogen","aPTT (Activated Partial Thromboplastin Time)","D-Dimer"]},

"Factor IX Activity": {
 w:"The activity of coagulation factor IX (vitamin K-dependent).",
 y:"Diagnosis and severity of hemophilia B (Christmas disease), and monitoring therapy.",
 p:"No preparation needed.",
 s:"Blue citrate.",
 h:[],
 l:["Hemophilia B","Vitamin K deficiency and warfarin","Liver disease","Acquired inhibitors"],
 i:["Newborns normally have low values","Warfarin makes interpretation impossible"],
 r:["aPTT (Activated Partial Thromboplastin Time)","Factor VIII Activity","Mixing Study (1:1 PT/aPTT)"]},

"von Willebrand Factor Antigen": {
 w:"The amount of von Willebrand factor, which binds platelets to the vessel wall and carries factor VIII.",
 y:"Diagnosis of von Willebrand disease — the most common inherited bleeding disorder (gum and nose bleeds, heavy menses).",
 p:"Away from stress, infection, pregnancy and oral contraceptives if possible.",
 s:"Blue citrate, separated and frozen promptly; do not refrigerate whole blood.",
 h:["Pregnancy","Inflammation, stress and exercise","Estrogen pills"],
 l:["Von Willebrand disease (< 30% confirmed, 30–50% low)","Blood group O (normally ~25% lower)","Hypothyroidism"],
 i:["Stress during venipuncture (in children) raises it and may mask disease","Order with an activity assay (vWF:RCo or GPIb) and factor VIII","May need repeating"],
 r:["Factor VIII Activity","PFA-100 (Platelet Function)","aPTT (Activated Partial Thromboplastin Time)"]},

"Protein C Activity": {
 w:"A natural vitamin K-dependent anticoagulant that inactivates factors V and VIII.",
 y:"Investigation of inherited thrombophilia in young or recurrent thrombosis, and warfarin skin necrosis.",
 p:"At least 3 months after the acute clot and 2 weeks after stopping warfarin (under medical supervision).",
 s:"Blue citrate.",
 h:[],
 l:["Inherited deficiency","Warfarin and vitamin K deficiency","Liver disease","DIC","Acute thrombosis"],
 i:["Do not test during acute thrombosis or on warfarin","Children normally have lower values"],
 r:["Protein S Activity","Antithrombin III","Factor V Leiden Mutation"]},

"Protein S Activity": {
 w:"A vitamin K-dependent cofactor of protein C.",
 y:"Part of the inherited thrombophilia work-up.",
 p:"As for protein C: away from thrombosis and warfarin.",
 s:"Blue citrate.",
 h:[],
 l:["Inherited deficiency","Pregnancy and oral contraceptives","Warfarin","Liver disease","Inflammation (binds C4bBP)"],
 i:["Pregnancy normally lowers it → do not diagnose deficiency during pregnancy","Factor V Leiden interferes with some activity assays"],
 r:["Protein C Activity","Antithrombin III","Factor V Leiden Mutation"]},

"Antithrombin III": {
 w:"The most important natural anticoagulant; it inhibits thrombin and factor Xa, and heparin works by enhancing it.",
 y:"Investigation of inherited thrombophilia and heparin resistance.",
 p:"Away from acute thrombosis and heparin.",
 s:"Blue citrate.",
 h:[],
 l:["Inherited deficiency","Heparin (consumes it)","DIC","Liver disease","Nephrotic syndrome (lost in urine)","L-asparaginase"],
 i:["Heparin lowers it 20–30%","Acute thrombosis consumes it"],
 r:["Protein C Activity","Protein S Activity","Anti-Xa (Heparin Level)"]},

"Factor V Leiden Mutation": {
 w:"An inherited mutation (R506Q) that makes factor V resistant to inactivation by protein C — the commonest inherited cause of thrombosis.",
 y:"Evaluation of venous thrombosis that is early-onset, recurrent, familial, or associated with pregnancy and oral contraceptives.",
 p:"No preparation; can be tested during thrombosis and on anticoagulants (genetic test).",
 s:"Purple EDTA.",
 h:["Heterozygous: thrombosis risk ×5–7","Homozygous: risk ×50–80"],
 l:[],
 i:["Unaffected by drugs or acute thrombosis","Bone-marrow transplantation changes the result"],
 r:["Protein C Activity","Protein S Activity","Antithrombin III","MTHFR C677T Polymorphism"]},

"PFA-100 (Platelet Function)": {
 w:"Simulates platelet adhesion and aggregation in a small aperture and measures the closure time.",
 y:"Rapid screening for von Willebrand disease and platelet-function disorders, and detection of aspirin effect.",
 p:"Stop aspirin and NSAIDs 7–10 days if possible, unless their effect is being measured.",
 s:"Blue 3.2% citrate at room temperature, tested within 4 h — not sent by pneumatic tube.",
 h:["Prolonged Col/EPI with normal Col/ADP: aspirin","Both prolonged: von Willebrand disease, platelet disorders"],
 l:[],
 i:["Platelets < 100 or hematocrit < 30% falsely prolong the time","Does not detect all platelet disorders (limited sensitivity for mild ones)"],
 r:["von Willebrand Factor Antigen","Platelet Count","CBC (Complete Blood Count)"]},

/* ───────── Urinalysis ───────── */
"Urine Specific Gravity": {
 w:"The density of urine compared with water; it reflects the kidney's concentrating ability.",
 y:"Assessment of hydration and renal concentrating capacity.",
 p:"The first morning sample is most concentrated.",
 s:"Fresh random urine.",
 h:["Dehydration","Glucose, protein and radiographic contrast","SIADH"],
 l:["High water intake","Diabetes insipidus","Kidney failure (fixed at 1.010)"],
 i:["The strip is unaffected by glucose whereas the refractometer is","Alkaline urine lowers the strip reading"],
 r:["Urine Osmolality","Urinalysis – Dipstick (10-parameter)"]},

"Urine pH": {
 w:"The acidity of urine (usually 4.5–8).",
 y:"Evaluation of kidney stones, renal tubular acidosis and urinary-tract infections.",
 p:"Fresh sample.",
 s:"Test within 1 h — bacteria convert urea to ammonia, making urine alkaline.",
 h:["Alkaline: infection with urease-producing bacteria (Proteus), renal tubular acidosis, vegetarians, after meals"],
 l:["Acidic: high-protein diet, metabolic acidosis, starvation"],
 i:["Delay makes it alkaline","Alkaline urine dissolves casts and cells"],
 r:["Urinalysis – Dipstick (10-parameter)","Urine Culture"]},

"Urine Glucose": {
 w:"Glucose in urine, appearing when blood glucose exceeds the renal threshold (~180 mg/dL).",
 y:"Indicator of uncontrolled diabetes or renal tubular dysfunction.",
 p:"No preparation needed.",
 s:"Fresh urine.",
 h:["Diabetes","Pregnancy (lower threshold)","SGLT2 inhibitors (intended effect)","Fanconi syndrome"],
 l:[],
 i:["Vitamin C gives false negatives","Delay allows bacteria to consume it"],
 r:["Glucose (Fasting)","HbA1c (Glycated Hemoglobin)","Urine Ketones"]},

"Urine Ketones": {
 w:"Ketone bodies in urine (the strip mainly detects acetoacetate).",
 y:"Screening for DKA, and fasting or repeated vomiting in children and pregnant women.",
 p:"No preparation needed.",
 s:"Fresh urine, tested promptly (acetone evaporates).",
 h:["DKA","Fasting and ketogenic diet","Hyperemesis gravidarum","Strenuous exercise"],
 l:[],
 i:["Does not detect beta-hydroxybutyrate → blood measurement is more accurate","Delay lowers it","Some drugs (captopril) give false positives"],
 r:["Beta-Hydroxybutyrate (β-HB)","Glucose (Fasting)","Bicarbonate (Total CO₂)"]},

"Urine Protein": {
 w:"Urine protein by dipstick (detects mainly albumin).",
 y:"Screening for kidney disease.",
 p:"First morning sample.",
 s:"Random urine.",
 h:["Glomerular disease","Hypertension and diabetes","Fever, exercise and prolonged standing (transient)","Urinary-tract infection"],
 l:[],
 i:["Highly alkaline or concentrated urine gives false positives","Does not detect light chains (Bence Jones)","Needs quantitative confirmation by PCR or ACR"],
 r:["Urine Protein/Creatinine Ratio (PCR)","Urine Albumin/Creatinine Ratio (ACR)","24-hour Urine Protein"]},

"Urine Protein/Creatinine Ratio (PCR)": {
 w:"The ratio of total protein to creatinine in a random urine sample, estimating daily protein without a 24-h collection.",
 y:"Quantifies proteinuria in kidney disease and pre-eclampsia (≥ 0.3 mg/mg).",
 p:"First morning sample preferred.",
 s:"Random urine.",
 h:["> 0.2 mg/mg: proteinuria","> 3.5: nephrotic range","≥ 0.3 in pregnancy: possible pre-eclampsia"],
 l:[],
 i:["Low muscle mass raises the ratio"],
 r:["24-hour Urine Protein","Urine Albumin/Creatinine Ratio (ACR)","Creatinine"]},

"Urine Osmolality": {
 w:"The concentration of dissolved solutes in urine.",
 y:"Evaluation of hyponatremia (> 100 in SIADH), polyuria (diabetes insipidus) and acute kidney injury.",
 p:"May be requested after water deprivation as part of a dedicated test.",
 s:"Fresh random urine with a simultaneous serum sample.",
 h:["Dehydration","SIADH","Pre-renal state (> 500)"],
 l:["Excess water intake","Central or nephrogenic diabetes insipidus","Acute tubular necrosis (close to serum ~300)"],
 i:["Always interpret with serum osmolality and sodium"],
 r:["Serum Osmolality","Sodium (Na⁺)","Urine Sodium & FENa"]},

"Urine Calcium (24h)": {
 w:"The amount of calcium excreted in urine over one day.",
 y:"Evaluation of recurrent kidney stones, and distinguishing hyperparathyroidism from familial hypocalciuric hypercalcemia.",
 p:"Normal diet. Complete 24-h collection.",
 s:"Container with acid (HCl) to prevent calcium precipitation.",
 h:["Idiopathic hypercalciuria (common stone cause)","Hyperparathyroidism","Vitamin D excess","Sarcoidosis"],
 l:["Familial hypocalciuric hypercalcemia","Thiazide diuretics","Vitamin D deficiency"],
 i:["Incomplete collection","Diet rich in calcium and salt"],
 r:["Calcium (Total)","PTH (Parathyroid Hormone)","Urine Uric Acid (24h)"]},

"Urine Uric Acid (24h)": {
 w:"The amount of uric acid excreted over one day.",
 y:"Evaluation of uric-acid stones and the cause of hyperuricemia (over-production or under-excretion).",
 p:"Low-purine diet for several days beforehand.",
 s:"24-h container with alkali (NaOH) to prevent precipitation.",
 h:["Over-production: gout, tumor lysis, hematologic disease","Purine-rich diet"],
 l:["Under-excretion: kidney failure, diuretics"],
 i:["Incomplete collection","Acidic urine precipitates uric acid"],
 r:["Uric Acid","Urine Calcium (24h)","Creatinine"]},

"Urine 5-HIAA (24h)": {
 w:"The metabolite of serotonin.",
 y:"Diagnosis and follow-up of carcinoid tumors and carcinoid syndrome (flushing, diarrhea).",
 p:"Avoid for 48–72 h: bananas, avocado, pineapple, kiwi, walnuts, tomatoes, eggplant, and drugs such as paracetamol and guaifenesin.",
 s:"24-h container with acid, protected from light.",
 h:["Carcinoid tumors (especially midgut)","Restricted foods","Malabsorption"],
 l:["Kidney failure","Some drugs"],
 i:["Diet is the main cause of false positives","Chromogranin A is a blood alternative"],
 r:["Chromogranin A (CgA)"]},

"Urine Free Cortisol (24h UFC)": {
 w:"Free cortisol excreted in urine over a full day, reflecting total cortisol secretion.",
 y:"Screening for Cushing's syndrome (at least two raised values needed).",
 p:"Avoid corticosteroids in any form (creams, inhalers). Normal water intake (excess raises it).",
 s:"Refrigerated 24-h container.",
 h:["Cushing's syndrome","Stress, depression, obesity and alcohol (pseudo-Cushing)","High water intake","Pregnancy"],
 l:["Adrenal insufficiency","Kidney failure"],
 i:["Incomplete collection → verify with urine creatinine","Immunoassays are affected by synthetic steroids"],
 r:["Cortisol (AM – 8AM)","ACTH (Adrenocorticotropin)"]},

"Urine Metanephrines (Fractionated, 24h)": {
 w:"Catecholamine metabolites in a 24-h urine collection.",
 y:"Screening for pheochromocytoma; an alternative to the plasma test.",
 p:"Avoid caffeine, smoking and stress. Review drugs (antidepressants, levodopa).",
 s:"24-h container with acid.",
 h:["Pheochromocytoma","Stress and drugs"],
 l:[],
 i:["Incomplete collection","Drugs are a common source of false positives"],
 r:["Plasma Free Metanephrines"]},

"Urine Bence Jones Protein": {
 w:"Monoclonal free light chains (kappa or lambda) in urine.",
 y:"Diagnosis and follow-up of multiple myeloma and plasma-cell disorders, especially light-chain-only myeloma.",
 p:"A 24-h urine is preferred.",
 s:"24-h or random urine, tested by electrophoresis and immunofixation (UPEP/UIFE).",
 h:["Multiple myeloma","AL amyloidosis","Waldenström macroglobulinemia"],
 l:[],
 i:["The urine dipstick never detects it","Serum free light chains are more sensitive"],
 r:["Serum Protein Electrophoresis (SPEP)","Serum Free Light Chains (κ/λ)","Creatinine","Calcium (Total)"]},

"Urine Sodium & FENa": {
 w:"Sodium in a random urine sample, and the fractional excretion of sodium: FENa = (urine Na × serum Cr) ÷ (serum Na × urine Cr) × 100.",
 y:"Identifies the cause of acute kidney injury — pre-renal (FENa < 1%) or tubular injury (> 2%) — and evaluates hyponatremia.",
 p:"Before diuretics if possible.",
 s:"Random urine with a simultaneous serum sample.",
 h:["FENa > 2%: acute tubular necrosis, diuretics","Urine Na > 30 with hyponatremia: SIADH, Addison's, diuretics"],
 l:["FENa < 1%: renal hypoperfusion (dehydration, heart failure, cirrhosis)","Urine Na < 20: volume depletion"],
 i:["Diuretics raise it → use FEUrea (< 35% pre-renal)","Some contrast and rhabdomyolysis ATN cases have low FENa"],
 r:["Sodium (Na⁺)","Creatinine","Urine Osmolality"]},

/* ───────── Body fluids ───────── */
"CSF Protein": {
 w:"Protein in cerebrospinal fluid; it rises when the blood–brain barrier is disrupted.",
 y:"Meningitis, Guillain-Barré syndrome, tumors and hemorrhage.",
 p:"Medical procedure.",
 s:"Tube 1 (chemistry), tested promptly.",
 h:["Bacterial and tuberculous meningitis","Guillain-Barré (high protein with normal cells)","Tumors and hemorrhage","Traumatic tap (each 1000 RBC adds ~1 mg/dL)"],
 l:["CSF leak","Idiopathic intracranial hypertension"],
 i:["A traumatic tap raises it","Newborns normally have higher values"],
 r:["CSF Glucose","CSF Cell Count & Differential","CSF Oligoclonal Bands"]},

"CSF Glucose": {
 w:"Glucose in cerebrospinal fluid, normally about ⅔ of blood glucose.",
 y:"Falls in bacterial, tuberculous and fungal meningitis; stays normal in viral meningitis.",
 p:"Draw blood glucose shortly before the puncture.",
 s:"Tube 1 or fluoride, tested immediately — cells and bacteria consume it.",
 h:["Hyperglycemia (follows blood)"],
 l:["Bacterial meningitis (ratio < 0.4)","Tuberculous and fungal meningitis","Meningeal carcinomatosis","Hypoglycemia"],
 i:["Delay falsely lowers it","Always interpret as a ratio to blood glucose → calculate in the Calculators tab"],
 r:["CSF Protein","CSF Cell Count & Differential","CSF Lactate","Glucose (Random)"]},

"CSF Lactate": {
 w:"Lactate in CSF, produced locally and independent of blood lactate.",
 y:"Distinguishes bacterial (> 25 mg/dL or > 3.5 mmol/L) from viral meningitis, especially after neurosurgery.",
 p:"Medical procedure.",
 s:"Tube 1 or fluoride, tested promptly.",
 h:["Bacterial, tuberculous and fungal meningitis","Cerebral ischemia, seizures and hemorrhage"],
 l:[],
 i:["Prior antibiotics lower it","Red cells keep producing it in bloody samples"],
 r:["CSF Glucose","CSF Cell Count & Differential","CSF Culture"]},

"CSF Oligoclonal Bands": {
 w:"IgG bands detected by isoelectric focusing in CSF but absent from serum — evidence of antibody production within the CNS.",
 y:"Supports the diagnosis of multiple sclerosis (> 90% of patients).",
 p:"Medical procedure, with a serum sample the same day.",
 s:"CSF and paired serum.",
 h:["Multiple sclerosis","CNS infections (neurosyphilis, encephalitis)","Sometimes Guillain-Barré"],
 l:[],
 i:["Bands also present in serum are not counted (mirror pattern)"],
 r:["CSF Protein","CSF Cell Count & Differential"]},

"Pleural / Ascitic Fluid Protein & LDH": {
 w:"Measurement of protein and LDH in the fluid together with simultaneous serum values.",
 y:"Applying Light's criteria to distinguish transudate from exudate.",
 p:"Medical procedure; draw blood at the same time.",
 s:"Fluid in a plain or heparin tube, with paired serum.",
 h:["Exudate: pneumonia, cancer, TB, embolism, autoimmune disease"],
 l:["Transudate: heart failure, cirrhosis, nephrotic syndrome"],
 i:["Diuretics can make a transudate look like an exudate → use the albumin gradient (> 1.2 g/dL = transudate)","See Light's criteria in Quick Reference"],
 r:["SAAG (Serum–Ascites Albumin Gradient)","Gram Stain","CSF Cell Count & Differential","Albumin"]},

"SAAG (Serum–Ascites Albumin Gradient)": {
 w:"The difference between serum albumin and ascitic-fluid albumin.",
 y:"The most accurate way to classify ascites: portal hypertension or not.",
 p:"Draw blood and ascitic fluid on the same day.",
 s:"Fluid and paired serum.",
 h:["≥ 1.1 g/dL: portal hypertension — cirrhosis, heart failure, Budd-Chiari syndrome"],
 l:["< 1.1 g/dL: peritoneal carcinomatosis, TB, pancreatitis, nephrotic syndrome"],
 i:["Accuracy ~97%","Severe hypoalbuminemia may narrow the gradient"],
 r:["Albumin","Ascitic Fluid Neutrophil Count","Pleural / Ascitic Fluid Protein & LDH"]},

"Ascitic Fluid Neutrophil Count": {
 w:"The number of neutrophils in ascitic fluid.",
 y:"Diagnosis of spontaneous bacterial peritonitis (SBP) in cirrhosis — treat immediately if ≥ 250/µL.",
 p:"Medical procedure.",
 s:"Purple EDTA for the count; blood-culture bottles inoculated at the bedside increase sensitivity.",
 h:["≥ 250/µL: SBP","Secondary peritonitis (bowel perforation): very high neutrophils with multiple organisms"],
 l:[],
 i:["Bloody ascites: subtract 1 neutrophil per 250 red cells","Delayed counting"],
 r:["SAAG (Serum–Ascites Albumin Gradient)","Blood Culture (Aerobic)","Gram Stain"]},

"Fecal Calprotectin": {
 w:"A neutrophil protein shed into stool when the bowel wall is inflamed.",
 y:"Distinguishes inflammatory bowel disease (Crohn's, ulcerative colitis) from irritable bowel syndrome, and monitors activity.",
 p:"Avoid NSAIDs for 2 weeks if possible.",
 s:"Fresh stool; the first morning sample is best.",
 h:["> 200 µg/g: likely active inflammation","50–200: grey zone needing repeat","Gut infection, NSAIDs, colorectal cancer"],
 l:["< 50: irritable bowel syndrome likely"],
 i:["NSAIDs and PPIs raise it","Varies between methods"],
 r:["Fecal Immunochemical Test (FIT)","CRP (C-Reactive Protein)","Stool Culture"]},

/* ───────── Blood bank ───────── */
"Antibody Identification Panel": {
 w:"Testing the patient's serum against 10–16 cells of known antigens to identify an antibody detected on screening.",
 y:"After a positive antibody screen, to provide antigen-negative blood and assess pregnancy risk.",
 p:"No preparation. Report transfusions, pregnancies and drugs.",
 s:"Adequate purple EDTA (usually two tubes).",
 h:["Antibody identity: anti-D, anti-K, anti-E, anti-Fyᵃ, anti-Jkᵃ…"],
 l:[],
 i:["Kidd antibodies weaken, may disappear, then return and cause delayed reactions","Daratumumab reacts with all cells → treat cells with DTT","Multiple antibodies require selected cells"],
 r:["Irregular Antibody Screen (IAT)","Extended RBC Phenotyping (Kell/Duffy/Kidd)","Major Crossmatch"]},

"Kleihauer-Betke Acid Elution Test": {
 w:"A stain that identifies fetal red cells (acid-resistant HbF) in maternal blood and estimates the volume of fetomaternal hemorrhage.",
 y:"Calculating the additional anti-D dose for an Rh-negative mother after delivery or trauma.",
 p:"Within 72 h of the event.",
 s:"Maternal purple EDTA.",
 h:["Large fetomaternal hemorrhage","Maternal hereditary persistence of HbF (false positive)"],
 l:[],
 i:["Limited precision, counter-dependent → flow cytometry is more accurate","Maternal sickle disease or thalassemia raises HbF"],
 r:["Rh(D) Typing","Irregular Antibody Screen (IAT)"]},

"HLA Typing (Class I & II)": {
 w:"Determination of tissue-compatibility antigens (HLA-A, B, C, DR, DQ, DP) by molecular testing.",
 y:"Donor–recipient matching for marrow and organ transplantation, and disease associations (HLA-B27, B*57:01 before abacavir).",
 p:"No preparation needed.",
 s:"Purple EDTA or buccal swab.",
 h:[],
 l:[],
 i:["Recent transfusion usually does not affect molecular typing","High resolution is required for marrow transplantation"],
 r:["Panel Reactive Antibody (PRA)"]},

"Panel Reactive Antibody (PRA)": {
 w:"A percentage estimating the presence of HLA antibodies in a patient against the general population.",
 y:"Assessing how difficult it will be to find a compatible donor before kidney transplantation (highly sensitized patients).",
 p:"Repeated periodically while waiting, and after transfusion or pregnancy.",
 s:"Serum (yellow).",
 h:["Previous pregnancy","Transfusion","Previous transplant"],
 l:[],
 i:["Modern methods identify antibodies precisely (single-antigen beads) and calculate cPRA"],
 r:["HLA Typing (Class I & II)"]},

"Extended RBC Phenotyping (Kell/Duffy/Kidd)": {
 w:"Determination of red-cell antigens beyond ABO and RhD: C, c, E, e, K, Fyᵃ/Fyᵇ, Jkᵃ/Jkᵇ, S/s.",
 y:"For chronically transfused patients (thalassemia, sickle disease) to provide matched blood and prevent alloimmunization, and to support antibody identification.",
 p:"Before the first transfusion or 3 months after the last one.",
 s:"Purple EDTA.",
 h:[],
 l:[],
 i:["Transfusion within 3 months gives mixed results → genotyping is an alternative","A positive DAT interferes with some reagents"],
 r:["Antibody Identification Panel","Irregular Antibody Screen (IAT)"]},

"Cold Agglutinin Titer": {
 w:"Antibodies (usually IgM) that agglutinate red cells in the cold.",
 y:"Diagnosis of cold agglutinin disease and hemolytic anemia after Mycoplasma pneumoniae or EBV infection.",
 p:"No preparation needed.",
 s:"Tube kept at 37 °C from collection until serum separation (cold makes antibodies bind to cells and be lost).",
 h:["≥ 1:64: cold agglutinin disease, Mycoplasma, EBV, lymphoma"],
 l:[],
 i:["Refrigerating the sample falsely lowers the titer","Causes CBC errors: high MCHC and low RBC → warm sample to 37 °C and rerun"],
 r:["Direct Coombs Test (DAT)","CBC (Complete Blood Count)","Haptoglobin"]},

"Antenatal Antibody Titer": {
 w:"Quantification of an antibody in a pregnant woman (usually anti-D) by serial dilutions.",
 y:"Monitoring the risk of fetal hemolysis. The critical anti-D titer is usually 16 → requires middle cerebral artery Doppler monitoring.",
 p:"Every 4 weeks until 28 weeks, then every 2 weeks.",
 s:"Serum, preferably tested in parallel with the previous sample to reduce method variation.",
 h:["Four-fold or greater rise: increasing sensitization"],
 l:[],
 i:["Anti-K is dangerous even at low titer (suppresses erythropoiesis)","Prophylactic anti-D gives a low titer (< 4) that is not treated as sensitization"],
 r:["Irregular Antibody Screen (IAT)","Antibody Identification Panel","Rh(D) Typing"]},

"Transfusion Reaction Work-up": {
 w:"A set of investigations after a suspected transfusion reaction: clerical and identity check, repeat grouping, DAT, serum check for hemolysis, and culture of the unit.",
 y:"Any fever, rigors, dyspnea, back pain, hypotension or dark urine during or after transfusion.",
 p:"Stop the transfusion immediately, keep the IV line open with saline, and notify the blood bank.",
 s:"Post-reaction EDTA, urine sample, and return of the bag with the giving set.",
 h:["Positive DAT, free hemoglobin, raised bilirubin and LDH: hemolysis","Positive unit culture: bacterial contamination"],
 l:["Low haptoglobin: hemolysis"],
 i:["The most dangerous cause is ABO incompatibility from an identification error","Compare pre- and post-transfusion samples"],
 r:["Direct Coombs Test (DAT)","ABO Blood Grouping","Haptoglobin","Bilirubin (Total)","Urinalysis – Dipstick (10-parameter)"]}

});
/* aliases: the same test listed under two specialties */
(function(E){
  const alias = {"Indirect Coombs Test (IAT)":"Irregular Antibody Screen (IAT)",
                 "Direct Antiglobulin Test (DAT)":"Direct Coombs Test (DAT)",
                 "Factor V Leiden (R506Q)":"Factor V Leiden Mutation"};
  for (const k in alias) if (!E[k] && E[alias[k]]) E[k] = E[alias[k]];
})(window.ENC_EN);

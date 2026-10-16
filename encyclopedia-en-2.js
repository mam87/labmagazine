/* Lab test encyclopedia — ENGLISH edition, Batch 2. Mirrors encyclopedia-2.js */
window.ENC_EN = Object.assign(window.ENC_EN || {}, {

/* ───────── Hematology ───────── */
"Transferrin Saturation": {
 w:"The percentage of transferrin binding sites occupied by iron, calculated as serum iron ÷ TIBC × 100.",
 y:"Screening for hereditary hemochromatosis (> 45%) and helping to assess iron deficiency.",
 p:"Fasting morning sample; stop iron supplements 24 h before.",
 s:"Serum (yellow), non-hemolyzed.",
 h:["Hemochromatosis","Repeated transfusions","Hemolytic anemia and thalassemia","Acute liver injury"],
 l:["Iron deficiency (< 16–20%)","Chronic inflammation"],
 i:["Diurnal variation of iron is reflected in it","Recent iron supplements falsely raise it"],
 r:["Iron (Fe)","TIBC (Total Iron Binding Capacity)","Ferritin"]},

"Hemoglobin Electrophoresis": {
 w:"Separation of hemoglobin types (A, A2, F, S, C and others) by electrical charge, or by HPLC.",
 y:"Diagnosis of thalassemia, sickle cell disease and carrier states; premarital screening.",
 p:"No preparation. Postpone for 3 months after transfusion.",
 s:"Purple EDTA, stable one week refrigerated.",
 h:["HbA2 > 3.5%: beta-thalassemia trait","HbS: sickle trait or disease","Raised HbF: beta-thalassemia major, hereditary persistence of HbF"],
 l:["Low HbA2: iron deficiency, alpha-thalassemia"],
 i:["Iron deficiency lowers HbA2 and can mask beta trait → treat iron then repeat","Alpha-thalassemia trait is usually not detected → needs DNA testing","Recent transfusion"],
 r:["HbA2 & HbF Quantitation (HPLC)","CBC (Complete Blood Count)","Ferritin","Alpha-Thalassemia (HBA1/HBA2) Deletions","Sickle Cell Test"]},

"HbA2 & HbF Quantitation (HPLC)": {
 w:"Precise measurement of HbA2 and HbF percentages by high-performance liquid chromatography.",
 y:"The most accurate method to diagnose beta-thalassemia trait; premarital screening.",
 p:"No preparation needed.",
 s:"Purple EDTA.",
 h:["HbA2 3.5–7%: beta-thalassemia trait","Raised HbF: beta-thalassemia, HPFH, pregnancy, sickle disease treated with hydroxyurea"],
 l:["HbA2 < 2%: iron deficiency, alpha-thalassemia, delta-thalassemia"],
 i:["Some variants (HbE, Lepore) co-elute with A2 and falsely raise it","Coexisting iron deficiency"],
 r:["Hemoglobin Electrophoresis","CBC (Complete Blood Count)","Ferritin"]},

"Sickle Cell Test": {
 w:"A rapid test (solubility or sickling test) that detects the presence of HbS.",
 y:"Quick screening before anesthesia or in regions where the disease is prevalent.",
 p:"No preparation needed.",
 s:"Purple EDTA.",
 h:["Positive: sickle trait or sickle disease (does not distinguish between them)"],
 l:[],
 i:["False negatives in infants (high HbF) or severe anemia","False positives with lipemia or high serum proteins","Every positive result is confirmed by electrophoresis"],
 r:["Hemoglobin Electrophoresis","CBC (Complete Blood Count)"]},

"Haptoglobin": {
 w:"A protein that binds and clears free hemoglobin from blood, so it falls in intravascular hemolysis.",
 y:"Confirming hemolysis, together with LDH, indirect bilirubin and reticulocytes.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Inflammation (acute-phase protein)","Malignancy","Corticosteroids"],
 l:["Intravascular and extravascular hemolysis","Severe liver disease","Congenital ahaptoglobinemia","Transfusion reaction"],
 i:["Coexisting inflammation can mask hemolysis","Estrogens lower it"],
 r:["LDH (Lactate Dehydrogenase)","Reticulocyte Count","Bilirubin (Total)","Direct Coombs Test (DAT)"]},

"LDH (Lactate Dehydrogenase)": {
 w:"An enzyme present in most body cells, especially red cells, liver, heart and muscle.",
 y:"A general marker of cell damage: hemolysis, tumors (lymphoma, testicular tumors) and tumor lysis syndrome.",
 p:"No preparation needed.",
 s:"Serum (yellow), separated promptly.",
 h:["Hemolysis and megaloblastic anemia","Lymphoma and germ-cell tumors","Liver disease","MI and pulmonary embolism","Rhabdomyolysis","Pneumocystis pneumonia"],
 l:[],
 i:["Any in-vitro hemolysis raises it markedly","Delay before separation"],
 r:["Haptoglobin","Reticulocyte Count","Uric Acid","Bilirubin (Total)"]},

"Blood Parasites (Malaria Smear)": {
 w:"Thick (for detection) and thin (for species and parasitemia) blood films stained with Giemsa.",
 y:"Diagnosis of malaria in fever after travel to an endemic area. An emergency test performed immediately.",
 p:"Draw immediately when suspected, preferably during a fever spike.",
 s:"Purple EDTA or finger prick. Prepare films within 1 h.",
 h:["Positive: Plasmodium species and parasitemia percentage"],
 l:[],
 i:["One negative film is not enough → repeat every 12–24 h up to 3 times","Delay alters parasite morphology","Platelets overlying red cells can mimic parasites"],
 r:["CBC (Complete Blood Count)","Peripheral Blood Smear","Bilirubin (Total)","Glucose (Fasting)"]},

"WBC Differential (Absolute Counts)": {
 w:"Distribution of white cells into their five types (neutrophils, lymphocytes, monocytes, eosinophils, basophils) as absolute counts.",
 y:"Identifies the cause of a high or low WBC. Absolute counts are more accurate than percentages.",
 p:"No preparation needed.",
 s:"Purple EDTA.",
 h:["Neutrophils: bacterial infection, steroids, stress","Lymphocytes: viral infection, CLL","Eosinophils: allergy, parasites, drugs","Monocytes: chronic infection and TB"],
 l:["Neutrophils < 1.5: drugs, viral infection, autoimmune disease (< 0.5 critical)","Lymphocytes: HIV, corticosteroids"],
 i:["Always calculate absolute counts (percentage × total WBC)","Neutrophils are normally lower in some people of African and Arab descent"],
 r:["CBC (Complete Blood Count)","Peripheral Blood Smear"]},

/* ───────── Chemistry ───────── */
"eGFR (Estimated GFR)": {
 w:"Estimated glomerular filtration rate, calculated from creatinine, age and sex with the CKD-EPI 2021 equation.",
 y:"Staging chronic kidney disease (G1–G5) and adjusting drug doses.",
 p:"Same preparation as creatinine.",
 s:"Serum (yellow) — calculated automatically.",
 h:[],
 l:["Chronic kidney disease (< 60 for three months)","Acute kidney injury (the equation is inaccurate here)"],
 i:["Not valid when creatinine changes rapidly, in pregnancy or in children","Very high or very low muscle mass → use cystatin C","Calculate it in the Calculators tab"],
 r:["Creatinine","Cystatin C","Urine Albumin/Creatinine Ratio (ACR)"]},

"Cystatin C": {
 w:"A small protein produced at a constant rate by all nucleated cells and filtered by the kidneys; unaffected by muscle mass.",
 y:"More accurate estimate of kidney function in the elderly, wasted patients, athletes, or when creatinine is doubtful.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Declining kidney function","High-dose corticosteroids","Hyperthyroidism","Inflammation"],
 l:["Hypothyroidism"],
 i:["Thyroid disease and steroids affect it independently of the kidneys"],
 r:["Creatinine","eGFR (Estimated GFR)"]},

"Bilirubin (Direct)": {
 w:"Conjugated bilirubin processed by the liver and made water-soluble.",
 y:"Identifying the cause of jaundice: if direct > 20–50% of total, the cause is hepatic or obstructive.",
 p:"Fasting preferred.",
 s:"Serum protected from light.",
 h:["Hepatitis","Biliary obstruction (stones, tumors)","Cirrhosis","Dubin-Johnson syndrome","Drug-induced cholestasis"],
 l:[],
 i:["Light degrades it","In neonates: any direct elevation (> 1 mg/dL) needs urgent evaluation"],
 r:["Bilirubin (Total)","ALP (Alkaline Phosphatase)","GGT (Gamma-Glutamyl Transferase)"]},

"Total Protein": {
 w:"The sum of albumin and globulins in serum.",
 y:"Assessment of nutrition, liver and kidney disease. A globulin gap (total protein − albumin) > 4 g/dL warrants SPEP.",
 p:"No fasting needed.",
 s:"Serum (yellow). Prolonged tourniquet raises it.",
 h:["Dehydration","Multiple myeloma and plasma-cell disorders","Chronic inflammation","Cirrhosis (raised globulins)"],
 l:["Malnutrition","Nephrotic syndrome","Liver disease","Protein-losing enteropathy","Burns"],
 i:["Standing and tourniquet raise it 5–10%"],
 r:["Albumin","Serum Protein Electrophoresis (SPEP)"]},

"Ammonia": {
 w:"A toxic product of protein metabolism that the liver converts into urea.",
 y:"Evaluation of altered consciousness in liver patients (hepatic encephalopathy), Reye syndrome and urea-cycle disorders in children.",
 p:"Fasting, no smoking, no fist clenching. Minimal tourniquet use.",
 s:"EDTA or lithium heparin, completely filled and capped, placed immediately on ice and analyzed within 30 min.",
 h:["Liver failure","Inherited urea-cycle disorders","Valproate","GI bleeding in liver patients"],
 l:[],
 i:["Main error is false elevation from delay at room temperature (rises ~20% every 30 min)","Smoking and contaminated room air","Hemolysis","Ammonium heparin tube"],
 r:["ALT (Alanine Aminotransferase)","Bilirubin (Total)","PT (Prothrombin Time)","Glucose (Fasting)"]},

"Lactate": {
 w:"A product of anaerobic glycolysis that rises with tissue hypoxia.",
 y:"Assessment of sepsis and shock (> 2 mmol/L requires action, > 4 is severe) and monitoring resuscitation.",
 p:"No tourniquet if possible and no fist clenching.",
 s:"Grey fluoride or heparin, on ice, analyzed within 15–30 min. Arterial or venous blood-gas samples are acceptable.",
 h:["Sepsis and shock","Hypoxia","Mesenteric ischemia","Metformin","Seizures and strenuous exercise","Liver disease"],
 l:[],
 i:["Delay without ice raises it (cells keep producing lactate)","Prolonged tourniquet"],
 r:["Procalcitonin (PCT)","Blood Culture (Aerobic)","Bicarbonate (Total CO₂)"]},

"HDL Cholesterol": {
 w:"The 'good' cholesterol that carries cholesterol from tissues back to the liver.",
 y:"Part of cardiovascular risk assessment; low values are an independent risk factor.",
 p:"Fast 9–12 h with the lipid panel.",
 s:"Serum (yellow).",
 h:["Exercise","Moderate alcohol","Estrogens","Genetic causes"],
 l:["Smoking","Obesity and metabolic syndrome","Type 2 diabetes","Physical inactivity","High triglycerides"],
 i:["Acute illness lowers it"],
 r:["Cholesterol (Total)","LDL Cholesterol","Triglycerides"]},

"Phosphorus": {
 w:"Inorganic phosphate in serum, essential for bone and cellular energy (ATP).",
 y:"Evaluation of kidney, bone and parathyroid disease, and refeeding syndrome.",
 p:"Fasting preferred, because carbohydrates lower it.",
 s:"Serum (yellow), separated promptly, non-hemolyzed.",
 h:["Kidney failure","Hypoparathyroidism","Tumor lysis and rhabdomyolysis","Vitamin D excess","In-vitro hemolysis"],
 l:["Refeeding syndrome","Hyperparathyroidism","Vitamin D deficiency","Alcohol","DKA during treatment","Antacids"],
 i:["Hemolysis and delayed separation raise it","A recent meal lowers it"],
 r:["Calcium (Total)","PTH (Parathyroid Hormone)","Vitamin D (25-OH)","Creatinine"]},

"Chloride (Cl⁻)": {
 w:"The main extracellular anion; it usually follows sodium.",
 y:"Assessment of acid-base balance and calculation of the anion gap.",
 p:"No preparation needed.",
 s:"Serum or heparin.",
 h:["Dehydration","Normal-anion-gap acidosis (diarrhea, renal tubular acidosis)","Large volumes of saline"],
 l:["Repeated vomiting","Metabolic alkalosis","Diuretics","SIADH"],
 i:["Bromide falsely raises it in some methods"],
 r:["Sodium (Na⁺)","Bicarbonate (Total CO₂)","Potassium (K⁺)"]},

"Bicarbonate (Total CO₂)": {
 w:"Reflects the base component of the buffer system; most serum CO₂ exists as bicarbonate.",
 y:"Assessment of metabolic acidosis and alkalosis, and calculation of the anion gap.",
 p:"No preparation needed.",
 s:"Serum or heparin, tube kept closed and full — exposure to air lowers it.",
 h:["Vomiting","Diuretics","Hyperaldosteronism","Compensation for chronic respiratory acidosis"],
 l:["DKA and lactic acidosis","Kidney failure","Diarrhea","Poisonings","Compensation for respiratory alkalosis"],
 i:["Opening or under-filling the tube falsely lowers it"],
 r:["Chloride (Cl⁻)","Sodium (Na⁺)","Potassium (K⁺)","Lactate","Beta-Hydroxybutyrate (β-HB)"]},

"Ionized Calcium (iCa)": {
 w:"The free, physiologically active calcium (about 50% of total calcium).",
 y:"More accurate than total calcium in intensive care, massive transfusion, hypoalbuminemia and major surgery.",
 p:"No prolonged tourniquet and no fist clenching.",
 s:"Calcium-balanced heparin, air-free syringe (anaerobic), analyzed quickly.",
 h:["Hyperparathyroidism","Malignancy","Vitamin D excess"],
 l:["Massive transfusion (citrate)","Sepsis","Pancreatitis","Hypoparathyroidism","Alkalosis"],
 i:["Air exposure raises pH and lowers iCa","Ordinary heparin binds calcium and lowers it"],
 r:["Calcium (Total)","Albumin","PTH (Parathyroid Hormone)","Magnesium"]},

"Homocysteine": {
 w:"An intermediate amino acid of methionine metabolism whose processing requires B12, folate and B6.",
 y:"Confirming B12 or folate deficiency at borderline values, and evaluating recurrent thrombosis.",
 p:"Fast 8–12 h.",
 s:"EDTA on ice, centrifuged within 1 h — red cells release it after collection.",
 h:["B12, folate or B6 deficiency","Kidney failure","Hypothyroidism","MTHFR variant with low folate","Inherited homocystinuria"],
 l:[],
 i:["Delay at room temperature raises it ~10% per hour","Methotrexate and metformin"],
 r:["Vitamin B12","Folic Acid","MTHFR C677T Polymorphism"]},

"CK-MB (Creatine Kinase-MB)": {
 w:"The cardiac isoenzyme of CK.",
 y:"Replaced by troponin for diagnosing MI, but still sometimes used to detect re-infarction because it normalizes within 48–72 h.",
 p:"No preparation needed.",
 s:"Serum or heparin.",
 h:["Myocardial infarction","Cardiac surgery and resuscitation","Severe skeletal-muscle injury"],
 l:[],
 i:["Skeletal-muscle injury raises it without cardiac damage → look at its percentage of total CK","Mass immunoassays are more accurate than activity methods"],
 r:["hs-Troponin I (hs-cTnI)","CK (Creatine Kinase, Total)"]},

"Fructosamine": {
 w:"Glycated serum proteins (mostly albumin); reflects average glucose over the previous 2–3 weeks.",
 y:"Alternative to HbA1c with hemoglobin variants, anemia, pregnancy, or to follow short-term treatment changes.",
 p:"No fasting needed.",
 s:"Serum (yellow).",
 h:["Uncontrolled diabetes","Hypothyroidism"],
 l:["Hypoalbuminemia (nephrotic syndrome, cirrhosis)","Hyperthyroidism"],
 i:["Any change in albumin affects it","Vitamin C and high bilirubin in some methods"],
 r:["HbA1c (Glycated Hemoglobin)","Glucose (Fasting)","Albumin"]},

"Beta-Hydroxybutyrate (β-HB)": {
 w:"The main ketone body in blood (over 75% of ketones in DKA).",
 y:"Diagnosis and monitoring of diabetic ketoacidosis — more accurate than urine ketones.",
 p:"No preparation needed.",
 s:"Serum or plasma, or a bedside meter.",
 h:["> 3 mmol/L: DKA","Prolonged fasting and ketogenic diet","Alcoholic ketoacidosis","SGLT2 inhibitors (euglycemic DKA)"],
 l:[],
 i:["The urine strip measures only acetoacetate and may seem to rise during treatment despite improvement"],
 r:["Glucose (Fasting)","Bicarbonate (Total CO₂)","Urine Ketones","Potassium (K⁺)"]},

"Lipoprotein(a) [Lp(a)]": {
 w:"An LDL-like lipoprotein with an extra protein, apo(a); its level is almost entirely genetically determined.",
 y:"Once-in-a-lifetime assessment of inherited cardiovascular risk, especially with a family history of premature heart disease.",
 p:"No fasting required.",
 s:"Serum (yellow).",
 h:["Genetic","Nephrotic syndrome","Menopause"],
 l:["Hormone therapy","PCSK9 inhibitors"],
 i:["Statins do not lower it and may raise it slightly","nmol/L and mg/dL units cannot be converted accurately"],
 r:["LDL Cholesterol","Cholesterol (Total)","hs-CRP (High Sensitivity CRP)"]},

/* ───────── Hormones ───────── */
"Free T3 (Free Triiodothyronine)": {
 w:"The most potent thyroid hormone, mostly produced in tissues from T4.",
 y:"Diagnosis of hyperthyroidism when TSH is low and free T4 is normal (T3 thyrotoxicosis).",
 p:"Stop biotin 48 h before.",
 s:"Serum (yellow).",
 h:["Hyperthyroidism (Graves', toxic nodules)","T3 thyrotoxicosis"],
 l:["Severe illness (non-thyroidal illness syndrome)","Fasting","Advanced hypothyroidism"],
 i:["Of little value in diagnosing hypothyroidism","Biotin"],
 r:["TSH (Thyroid Stimulating Hormone)","Free T4 (Free Thyroxine)"]},

"Anti-TPO (Thyroid Peroxidase Ab)": {
 w:"Autoantibodies against thyroid peroxidase.",
 y:"Confirms autoimmune hypothyroidism (Hashimoto) and predicts progression with mildly raised TSH or in pregnancy.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Hashimoto thyroiditis (> 90%)","Graves' disease (70%)","Postpartum thyroiditis","10% of healthy people, especially women"],
 l:[],
 i:["No need to repeat it for follow-up"],
 r:["TSH (Thyroid Stimulating Hormone)","Free T4 (Free Thyroxine)","Anti-Tg (Thyroglobulin Ab)"]},

"TRAb (TSH Receptor Ab)": {
 w:"Antibodies against the TSH receptor, mostly stimulating.",
 y:"Diagnoses Graves' disease and distinguishes it from other causes of hyperthyroidism; predicts fetal hyperthyroidism in pregnancy.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Graves' disease (> 95%)","Thyroid eye disease"],
 l:[],
 i:["A fall during treatment predicts remission","Blocking antibodies are rare and cause hypothyroidism"],
 r:["TSH (Thyroid Stimulating Hormone)","Free T4 (Free Thyroxine)","Anti-TPO (Thyroid Peroxidase Ab)"]},

"Total Testosterone": {
 w:"The main male hormone, secreted by the testes in men and by the ovaries and adrenals in women.",
 y:"Men: low libido and infertility. Women: hirsutism and polycystic ovary syndrome.",
 p:"Draw in the morning 7–10 AM (peak secretion), preferably fasting; repeat to confirm.",
 s:"Serum (yellow).",
 h:["Women: PCOS, ovarian or adrenal tumors, congenital adrenal hyperplasia","Men: hormone supplements"],
 l:["Men: primary or secondary hypogonadism, obesity, diabetes, chronic disease, opioids"],
 i:["Immunoassays are inaccurate at low female levels → LC-MS/MS preferred","Changes in SHBG"],
 r:["LH (Luteinizing Hormone)","FSH (Follicle Stimulating Hormone)","Prolactin","DHEA-S"]},

"Estradiol (E2)": {
 w:"The main estrogen in women of reproductive age, secreted by the ovary.",
 y:"Assessment of ovarian function and menstrual disorders, and monitoring ovulation induction in IVF.",
 p:"Depends on the question: usually cycle day 2–3. Record the cycle day.",
 s:"Serum (yellow).",
 h:["Ovulation induction","Estrogen-secreting ovarian tumors","Pregnancy","Precocious puberty"],
 l:["Menopause","Premature ovarian insufficiency","Hypopituitarism","Anorexia and intense exercise"],
 i:["Immunoassays are inaccurate at low levels (men, menopause)","Fulvestrant falsely raises it"],
 r:["FSH (Follicle Stimulating Hormone)","LH (Luteinizing Hormone)","AMH (Anti-Müllerian Hormone)","Progesterone"]},

"Progesterone": {
 w:"A hormone secreted by the corpus luteum after ovulation, and later by the placenta.",
 y:"Confirms ovulation (day 21 of a 28-day cycle, i.e. 7 days before the expected period) and evaluates early pregnancy.",
 p:"Define the cycle day precisely.",
 s:"Serum (yellow).",
 h:["> 3 ng/mL in the mid-luteal phase: ovulation has occurred","Pregnancy","Adrenal hyperplasia"],
 l:["Anovulation","Threatened or ectopic pregnancy"],
 i:["Wrong timing is the commonest cause of misinterpretation","Progesterone supplements"],
 r:["Estradiol (E2)","LH (Luteinizing Hormone)","hCG (Beta-hCG Quantitative)"]},

"FSH (Follicle Stimulating Hormone)": {
 w:"A pituitary hormone that stimulates ovarian follicle growth and sperm production.",
 y:"Evaluation of infertility, amenorrhea and menopause; distinguishes primary gonadal failure (high FSH) from secondary (low FSH).",
 p:"Women: cycle day 2–3.",
 s:"Serum (yellow).",
 h:["Menopause and premature ovarian insufficiency","Testicular failure","Turner and Klinefelter syndromes"],
 l:["Pituitary or hypothalamic insufficiency","Pregnancy","Oral contraceptives","Hyperprolactinemia"],
 i:["Pulsatile secretion → may need repeating","Biotin"],
 r:["LH (Luteinizing Hormone)","Estradiol (E2)","AMH (Anti-Müllerian Hormone)","Total Testosterone","Prolactin"]},

"LH (Luteinizing Hormone)": {
 w:"A pituitary hormone that triggers ovulation and testosterone production.",
 y:"Evaluation of infertility, PCOS (LH/FSH ratio sometimes > 2), and timing ovulation.",
 p:"Day 2–3 for baseline assessment, or mid-cycle to detect the surge.",
 s:"Serum (yellow).",
 h:["Mid-cycle surge (24–36 h before ovulation)","Menopause","PCOS","Testicular failure"],
 l:["Pituitary or hypothalamic insufficiency","Oral contraceptives","Hormone supplements"],
 i:["Pulsatile secretion"],
 r:["FSH (Follicle Stimulating Hormone)","Total Testosterone","Estradiol (E2)"]},

"Insulin (Fasting)": {
 w:"The pancreatic hormone that lowers blood glucose.",
 y:"Evaluation of recurrent hypoglycemia (with glucose and C-peptide) and estimation of insulin resistance (HOMA-IR).",
 p:"Fast 8–12 h. A sample during a hypoglycemic episode is most informative.",
 s:"Serum (yellow) separated promptly, non-hemolyzed.",
 h:["Insulin resistance and obesity","Insulinoma","Exogenous insulin (with low C-peptide)","Sulfonylureas"],
 l:["Type 1 diabetes","Pancreatic insufficiency"],
 i:["Hemolysis degrades insulin and falsely lowers it","Insulin antibodies in insulin-treated patients"],
 r:["C-Peptide","Glucose (Fasting)","HbA1c (Glycated Hemoglobin)"]},

"C-Peptide": {
 w:"A peptide secreted by the pancreas in equimolar amounts with insulin, but absent from pharmaceutical insulin.",
 y:"Assessing pancreatic insulin secretory capacity, and detecting surreptitious insulin injection in hypoglycemia.",
 p:"Fasting, or during hypoglycemia.",
 s:"Serum (yellow), separated within 1 h.",
 h:["Insulinoma","Sulfonylureas","Insulin resistance","Kidney failure (renally excreted)"],
 l:["Type 1 diabetes","Exogenous insulin injection (with high insulin)"],
 i:["Kidney failure raises it"],
 r:["Insulin (Fasting)","Glucose (Fasting)"]},

"ACTH (Adrenocorticotropin)": {
 w:"A pituitary hormone that stimulates cortisol secretion.",
 y:"Determines the cause of a cortisol disorder: primary (adrenal) or secondary (pituitary).",
 p:"Draw at 7–10 AM together with cortisol.",
 s:"Pre-chilled EDTA, on ice, centrifuged and frozen within 1 h — highly unstable.",
 h:["Addison's disease (primary adrenal insufficiency)","Pituitary Cushing's disease","Ectopic ACTH secretion by tumors"],
 l:["Hypopituitarism","Cortisol-secreting adrenal tumors","Corticosteroid therapy"],
 i:["Main error: no chilling and delay (degrades rapidly)","Adheres to glass → use plastic tubes"],
 r:["Cortisol (AM – 8AM)","Sodium (Na⁺)","Potassium (K⁺)"]},

"17-OH Progesterone": {
 w:"An intermediate in cortisol synthesis.",
 y:"Screening for congenital adrenal hyperplasia (21-hydroxylase deficiency) in newborns, and the late-onset form in hirsute women.",
 p:"Women: morning sample in the follicular phase (day 2–5).",
 s:"Serum, or dried blood spot in newborns.",
 h:["Congenital adrenal hyperplasia","Luteal phase and pregnancy","Premature and sick infants"],
 l:[],
 i:["Premature infants normally have high values","Timing and the menstrual cycle"],
 r:["Total Testosterone","DHEA-S","Cortisol (AM – 8AM)","ACTH (Adrenocorticotropin)"]},

/* ───────── Coagulation ───────── */
"Lupus Anticoagulant": {
 w:"Antiphospholipid antibodies that prolong clotting tests in vitro but cause thrombosis in vivo.",
 y:"Evaluation of unexplained thrombosis, recurrent miscarriage and unexplained prolonged aPTT — part of antiphospholipid syndrome.",
 p:"Away from the acute thrombotic event if possible. Record anticoagulants.",
 s:"Blue citrate, double-centrifuged to remove platelets (< 10×10⁹/L), frozen if delayed.",
 h:["Antiphospholipid syndrome","Lupus","Infections and drugs (transient)"],
 l:[],
 i:["Warfarin, DOACs and heparin give false positives","Residual platelets in plasma mask the result","Must be confirmed after at least 12 weeks"],
 r:["aPTT (Activated Partial Thromboplastin Time)","Mixing Study (1:1 PT/aPTT)","ANA (Antinuclear Antibodies)"]},

"Anti-Xa (Heparin Level)": {
 w:"Measures the ability of heparin in plasma to inhibit factor Xa.",
 y:"Monitoring low-molecular-weight heparin (pregnancy, kidney failure, obesity, children), and unfractionated heparin instead of aPTT.",
 p:"LMWH: draw 4 h after the dose (peak).",
 s:"Blue citrate, centrifuged within 1 h (platelets release PF4, which neutralizes heparin).",
 h:["Overdose","Kidney failure with LMWH"],
 l:["Insufficient dose"],
 i:["Delay before centrifugation falsely lowers it","The assay must be calibrated for the drug (UFH, LMWH or direct Xa inhibitors)","Lipemia and high bilirubin"],
 r:["aPTT (Activated Partial Thromboplastin Time)","Platelet Count","HIT Antibody (Anti-PF4/Heparin)"]},

"Mixing Study (1:1 PT/aPTT)": {
 w:"The patient's plasma is mixed 1:1 with normal plasma and the PT or aPTT is repeated.",
 y:"Distinguishes the cause of a prolonged clotting time: factor deficiency (corrects) or an inhibitor (does not correct).",
 p:"Record anticoagulant drugs.",
 s:"Double-centrifuged blue citrate.",
 h:["No immediate correction: lupus anticoagulant, heparin","No correction after 2-h incubation: acquired factor VIII inhibitor"],
 l:[],
 i:["Heparin gives false non-correction","The mix must be read immediately and after incubation"],
 r:["aPTT (Activated Partial Thromboplastin Time)","PT (Prothrombin Time)","Lupus Anticoagulant","Factor VIII Activity"]},

"Factor VIII Activity": {
 w:"The activity of coagulation factor VIII.",
 y:"Diagnosis and severity grading of hemophilia A, von Willebrand disease, and monitoring of therapy.",
 p:"Avoid stress and exercise beforehand (they raise it).",
 s:"Blue citrate, tested within 4 h or frozen.",
 h:["Pregnancy","Inflammation and stress (acute-phase protein)","Thrombosis risk factor"],
 l:["Hemophilia A: < 1% severe, 1–5% moderate, 5–40% mild","Von Willebrand disease","Acquired inhibitors","DIC"],
 i:["The acute phase can mask mild deficiency","Delay at room temperature lowers it"],
 r:["aPTT (Activated Partial Thromboplastin Time)","von Willebrand Factor Antigen","Factor IX Activity","Mixing Study (1:1 PT/aPTT)"]},

"HIT Antibody (Anti-PF4/Heparin)": {
 w:"Antibodies against the heparin–platelet factor 4 complex, causing thrombocytopenia with a high risk of thrombosis.",
 y:"When platelets fall > 50% 5–10 days after starting heparin. Ordered after calculating the clinical 4Ts score.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Heparin-induced thrombocytopenia (HIT)"],
 l:[],
 i:["High sensitivity, moderate specificity — a negative result usually excludes HIT","A positive result needs a functional assay (SRA)","Do not order when the 4Ts probability is low"],
 r:["Platelet Count","Anti-Xa (Heparin Level)","D-Dimer"]},

/* ───────── Immunology ───────── */
"Anti-dsDNA": {
 w:"Antibodies against double-stranded DNA.",
 y:"Highly specific for SLE and correlates with disease activity and renal involvement.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["SLE (70%) — rises with activity and lupus nephritis"],
 l:[],
 i:["Order only after a positive ANA","Results differ between methods (ELISA more sensitive, Crithidia more specific)"],
 r:["ANA (Antinuclear Antibodies)","Complement C3","Complement C4","Urine Protein/Creatinine Ratio (PCR)"]},

"Anti-CCP (Cyclic Citrullinated Peptide)": {
 w:"Antibodies against citrullinated peptides.",
 y:"Diagnoses rheumatoid arthritis with high specificity (> 95%); appears years before symptoms and predicts more erosive disease.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Rheumatoid arthritis","Occasionally in smokers"],
 l:[],
 i:["May be negative in 30% of patients → interpret with RF and symptoms"],
 r:["RF (Rheumatoid Factor)","CRP (C-Reactive Protein)","ESR (Erythrocyte Sedimentation Rate)"]},

"Complement C3": {
 w:"The central protein of the complement system.",
 y:"Assessment of lupus activity (falls with activity) and glomerulonephritis.",
 p:"No preparation needed.",
 s:"Serum separated and chilled promptly.",
 h:["Inflammation (acute-phase protein)"],
 l:["Active lupus","Post-streptococcal glomerulonephritis","Membranoproliferative glomerulonephritis","Severe sepsis"],
 i:["Delay at room temperature falsely lowers it"],
 r:["Complement C4","Anti-dsDNA","ASO (Antistreptolysin O)"]},

"IgE (Total)": {
 w:"The immunoglobulin responsible for immediate hypersensitivity and defense against parasites.",
 y:"Evaluation of allergic diseases, allergic bronchopulmonary aspergillosis and parasitic infection.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Asthma, allergic rhinitis and eczema","Parasites","Aspergillosis (> 1000 IU/mL)","Hyper-IgE syndrome"],
 l:[],
 i:["A normal value does not exclude a specific allergy → order specific IgE","Reference range varies greatly with age"],
 r:["WBC Differential (Absolute Counts)","Stool Ova & Parasites (O&P)"]},

"Anti-HBs (Hepatitis B Surface Ab)": {
 w:"Antibodies against hepatitis B surface antigen; they indicate immunity.",
 y:"Confirms immunity after vaccination (≥ 10 mIU/mL), especially for health-care workers and dialysis patients.",
 p:"1–2 months after the last vaccine dose.",
 s:"Serum (yellow).",
 h:["Immunity after vaccination (anti-HBc negative)","Immunity after recovery from infection (anti-HBc positive)"],
 l:["< 10: vaccine non-response or waning immunity"],
 i:["Antibodies decline over time in vaccinees without loss of protection","Transfusion or IVIG"],
 r:["HBsAg (Hepatitis B Surface Ag)","Anti-HBc Total"]},

"Anti-HBc Total": {
 w:"Antibodies against hepatitis B core antigen, indicating past or current exposure to the wild virus (not the vaccine).",
 y:"Distinguishes infection-acquired from vaccine-acquired immunity; blood-donor screening.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["With HBsAg: current infection","With anti-HBs: recovery and immunity","Isolated: occult infection, window period, or false positive"],
 l:[],
 i:["Isolated positivity needs evaluation (anti-HBc IgM and HBV DNA)","Risk of reactivation with immunosuppression (rituximab)"],
 r:["HBsAg (Hepatitis B Surface Ag)","Anti-HBs (Hepatitis B Surface Ab)","Anti-HBc IgM","HBV DNA (Viral Load)"]},

"Heterophile Antibody (Monospot)": {
 w:"Non-specific IgM antibodies that appear during Epstein-Barr virus infection.",
 y:"Rapid diagnosis of infectious mononucleosis (fever, pharyngitis, lymphadenopathy, atypical lymphocytes).",
 p:"No preparation needed.",
 s:"Serum or whole blood.",
 h:["Infectious mononucleosis"],
 l:[],
 i:["False negatives in the first week and in children under 4 → order EBV VCA IgM","Rare false positives (lymphoma, hepatitis)"],
 r:["EBV VCA IgM","CBC (Complete Blood Count)","Peripheral Blood Smear","ALT (Alanine Aminotransferase)"]},

"Rubella IgG": {
 w:"Antibodies to rubella, indicating immunity from vaccination or past infection.",
 y:"Confirms a woman's immunity before or during pregnancy, because infection in early pregnancy causes severe birth defects.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["≥ 10 IU/mL: immune"],
 l:["< 10: non-immune → vaccinate after delivery (live vaccine, contraindicated in pregnancy)"],
 i:["Diagnosing recent infection requires IgM and IgG avidity"],
 r:["Toxoplasma IgG / IgM","CMV IgM"]},

"Toxoplasma IgG / IgM": {
 w:"Antibodies to Toxoplasma gondii, transmitted by cats and undercooked meat.",
 y:"Screening of pregnant women and immunocompromised patients, and evaluation of chorioretinitis.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["IgG alone: past infection and immunity","IgM and IgG: possible recent infection → order avidity"],
 l:["Both negative: non-immune; avoid raw meat and cat litter"],
 i:["IgM may persist for months or years → high avidity excludes infection within 4 months","False-positive IgM is common"],
 r:["Rubella IgG","CMV IgM"]},

"tTG-IgA (Tissue Transglutaminase)": {
 w:"IgA antibodies against tissue transglutaminase.",
 y:"The best first-line screening test for celiac disease (gluten sensitivity).",
 p:"The patient must eat gluten (wheat) regularly for 6 weeks before testing.",
 s:"Serum (yellow).",
 h:["Celiac disease","Values > 10× upper limit strongly support the diagnosis"],
 l:[],
 i:["Total IgA deficiency (more common in celiac patients) gives false negatives → order total IgA with it","A gluten-free diet lowers it"],
 r:["IgA","CBC (Complete Blood Count)","Ferritin"]},

"Serum Protein Electrophoresis (SPEP)": {
 w:"Separation of serum proteins into albumin and alpha-1, alpha-2, beta and gamma globulins.",
 y:"Detection of a monoclonal protein (M-band) in multiple myeloma, MGUS and plasma-cell disorders.",
 p:"No preparation needed.",
 s:"Serum (not plasma — fibrinogen produces a false band).",
 h:["M-spike: myeloma, MGUS, Waldenström","Diffuse gamma increase: chronic inflammation and cirrhosis"],
 l:["Low gamma: immunodeficiency or light-chain-only myeloma"],
 i:["Plasma instead of serum gives a false band","Immunofixation is needed to type the protein","Order with free light chains to increase sensitivity"],
 r:["Serum Free Light Chains (κ/λ)","Total Protein","Calcium (Total)","Urine Bence Jones Protein","Beta-2 Microglobulin"]},

/* ───────── Microbiology ───────── */
"Throat Culture": {
 w:"Culture of a throat swab, mainly for group A streptococci.",
 y:"Diagnosis of streptococcal pharyngitis to prevent rheumatic fever, especially in children when the rapid test is negative.",
 p:"Before antibiotics and before mouthwash.",
 s:"Firm swab of both tonsils and the posterior pharyngeal wall without touching tongue or cheeks, in transport medium.",
 h:["Group A streptococci (Streptococcus pyogenes)"],
 l:[],
 i:["Touching the tongue contaminates the sample","Asymptomatic carriers"],
 r:["Rapid Strep A Antigen","ASO (Antistreptolysin O)"]},

"Stool Culture": {
 w:"Culture of stool for diarrheal bacterial pathogens: Salmonella, Shigella, Campylobacter, E. coli O157.",
 y:"Bloody diarrhea, fever, prolonged diarrhea or food-poisoning outbreaks.",
 p:"Before antibiotics.",
 s:"Fresh stool or in Cary-Blair medium, cultured within 2 h. Rectal swabs are of lower quality.",
 h:["Isolation of the pathogen and its antimicrobial susceptibility"],
 l:[],
 i:["Not indicated for inpatients after day 3 (test for C. difficile instead)","Delay kills Shigella"],
 r:["C. difficile Toxin A/B","Stool Ova & Parasites (O&P)","Antimicrobial Susceptibility Testing (AST)"]},

"Gram Stain": {
 w:"A rapid stain dividing bacteria into Gram-positive (purple) and Gram-negative (pink), with their morphology.",
 y:"Guides initial therapy within minutes and assesses specimen quality (e.g. sputum cells).",
 p:"Before antibiotics if possible.",
 s:"The specimen itself (sputum, CSF, pus, body fluids).",
 h:["Presence and morphology of bacteria, and inflammatory cells"],
 l:[],
 i:["Over-decolorization makes Gram-positives look negative","Sputum with > 10 squamous cells/LPF = saliva, unsuitable for culture","Antibiotics alter morphology and staining"],
 r:["Sputum Culture","CSF Culture","Wound Culture","Blood Culture (Aerobic)"]},

"AFB Smear (TB)": {
 w:"Ziehl-Neelsen or auramine stain for acid-fast bacilli (Mycobacterium tuberculosis).",
 y:"Diagnosis of pulmonary TB, monitoring therapy and assessing infectiousness.",
 p:"Three early-morning sputum samples 8–24 h apart.",
 s:"Deep sputum (not saliva) 5–10 mL in a sterile container, processed in a biosafety cabinet.",
 h:["Positive: usually infectious TB (or non-tuberculous mycobacteria)"],
 l:[],
 i:["Sensitivity only 50–60% → needs 5,000–10,000 bacilli/mL","A negative result does not exclude TB","Does not distinguish TB from other mycobacteria"],
 r:["TB PCR – GeneXpert MTB/RIF","AFB Culture (TB Culture)"]},

"TB PCR – GeneXpert MTB/RIF": {
 w:"A rapid molecular test detecting M. tuberculosis DNA and rifampicin resistance within 2 hours.",
 y:"Rapid diagnosis of TB and early detection of multidrug resistance.",
 p:"Early-morning sputum.",
 s:"Sputum or other fluids in a sterile container.",
 h:["MTB detected: tuberculosis","RIF resistance detected: rifampicin resistance (marker of MDR-TB)"],
 l:[],
 i:["Remains positive after treatment (dead DNA) → not used for follow-up","Culture is still required for full susceptibility testing"],
 r:["AFB Smear (TB)","AFB Culture (TB Culture)"]},

"C. difficile Toxin A/B": {
 w:"Detection of Clostridioides difficile toxins or toxin genes in stool.",
 y:"Diagnosis of antibiotic-associated diarrhea and pseudomembranous colitis.",
 p:"Only with true diarrhea (≥ 3 loose stools in 24 h) and no laxatives within 48 h.",
 s:"Liquid or soft stool (takes the shape of the container), tested within 2 h or refrigerated.",
 h:["C. difficile infection"],
 l:[],
 i:["Formed stool is rejected","PCR detects carriers without disease → a multistep approach (GDH then toxin) is preferred","Do not repeat as a test of cure"],
 r:["Stool Culture","CBC (Complete Blood Count)"]},

"Syphilis RPR/VDRL": {
 w:"A non-treponemal test detecting anti-cardiolipin antibodies that appear in syphilis.",
 y:"Screening for syphilis and monitoring treatment response (titer should fall four-fold within 6–12 months).",
 p:"No preparation needed.",
 s:"Serum (yellow). VDRL is used on CSF.",
 h:["Primary and secondary syphilis (high titer)"],
 l:[],
 i:["False positives: pregnancy, lupus, viral infections, vaccination, advancing age","Prozone in secondary syphilis → dilute","Confirm with a treponemal test (TPPA or FTA-ABS)"],
 r:["HIV Antibody/Ag (4th Gen combo)","CSF Cell Count & Differential"]},

"H. pylori Urea Breath Test": {
 w:"The patient drinks carbon-labeled urea; if H. pylori is present it splits the urea and labeled CO₂ appears in the breath.",
 y:"The most accurate non-invasive test for current infection and test of cure.",
 p:"Fast 6 h. Stop PPIs for 2 weeks, and antibiotics and bismuth for 4 weeks.",
 s:"Breath samples before and after drinking the solution.",
 h:["Current H. pylori infection"],
 l:[],
 i:["Acid suppressants and antibiotics cause false negatives","Previous gastric surgery"],
 r:["H. pylori Stool Antigen","CBC (Complete Blood Count)"]},

/* ───────── Tumor markers ───────── */
"AFP (Alpha-Fetoprotein)": {
 w:"A protein produced by the fetal liver and yolk sac.",
 y:"Surveillance of cirrhotic patients for liver cancer, germ-cell tumors, and prenatal screening for neural-tube defects.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Hepatocellular carcinoma","Non-seminomatous germ-cell tumors","Hepatitis and liver regeneration","Pregnancy and twins","Fetal neural-tube defects"],
 l:["Fetal Down syndrome (in prenatal screening)"],
 i:["Rises in hepatitis without a tumor","Not a population screening test"],
 r:["hCG (Beta-hCG Quantitative)","ALT (Alanine Aminotransferase)","LDH (Lactate Dehydrogenase)"]},

"CEA (Carcinoembryonic Antigen)": {
 w:"A glycoprotein produced in fetal tissues and some tumors.",
 y:"Follow-up of colorectal cancer after treatment to detect recurrence, and pre-operative prognosis.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Colorectal, pancreatic, lung and breast cancer","Smoking (up to 5 ng/mL)","Inflammatory bowel and liver disease","Pancreatitis"],
 l:[],
 i:["Not a screening or diagnostic test","Smokers have higher values","Use the same method during follow-up"],
 r:["CA 19-9","Fecal Immunochemical Test (FIT)"]},

"CA 19-9": {
 w:"A carbohydrate antigen related to the Lewis blood group.",
 y:"Follow-up of pancreatic and biliary cancer and response to therapy.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Pancreatic, biliary and gastric cancer","Benign biliary obstruction (may rise markedly)","Pancreatitis and liver disease"],
 l:[],
 i:["5–10% of people are Lewis-negative and never secrete it","Biliary obstruction falsely raises it → repeat after biliary drainage"],
 r:["CEA (Carcinoembryonic Antigen)","Bilirubin (Total)","ALP (Alkaline Phosphatase)","Lipase"]},

"CA 125": {
 w:"A glycoprotein produced by the epithelium lining the ovary, peritoneum and pleura.",
 y:"Evaluation of a pelvic mass after menopause, and follow-up of ovarian cancer and treatment response.",
 p:"Preferably away from menstruation.",
 s:"Serum (yellow).",
 h:["Epithelial ovarian cancer","Endometriosis and fibroids","Menstruation and pregnancy","Pelvic inflammatory disease","Ascites and pleural effusion of any cause"],
 l:[],
 i:["Limited value before menopause because of many benign causes","Interpret with HE4 and the ROMA index for better accuracy"],
 r:["HE4 (Human Epididymis Protein 4)","CEA (Carcinoembryonic Antigen)"]},

"CA 15-3": {
 w:"An antigen associated with breast cancer.",
 y:"Follow-up of metastatic breast cancer and treatment response.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Metastatic breast cancer","Liver disease","Other tumors"],
 l:[],
 i:["Not useful for diagnosis or early-stage disease","May rise transiently after starting effective therapy (flare)"],
 r:["CEA (Carcinoembryonic Antigen)","ALP (Alkaline Phosphatase)"]},

/* ───────── Blood bank ───────── */
"Rh(D) Typing": {
 w:"Determines whether the D antigen is present on red cells (positive or negative).",
 y:"Before transfusion, and for every pregnant woman to determine the need for anti-D prophylaxis.",
 p:"Patient identification with two identifiers.",
 s:"Purple EDTA.",
 h:[],
 l:[],
 i:["Weak or partial D may react weakly → test by IAT","Rh-negative patients need Rh-negative blood","A positive DAT may cause false positivity"],
 r:["ABO Blood Grouping","Irregular Antibody Screen (IAT)","Kleihauer-Betke Acid Elution Test"]},

"Irregular Antibody Screen (IAT)": {
 w:"Testing the patient's serum against reagent cells of known antigens to detect irregular antibodies (anti-D, Kell, Duffy, Kidd…).",
 y:"Before transfusion, at booking in pregnancy and at 28 weeks.",
 p:"The sample must be recent (within 72 h) if transfused or pregnant within 3 months.",
 s:"Purple EDTA or serum.",
 h:["Positive: an antibody is present → identify it and provide antigen-negative blood"],
 l:[],
 i:["Anti-D prophylaxis during pregnancy gives a positive result","Drug antibodies (daratumumab) react with all cells","Cold agglutinins"],
 r:["Antibody Identification Panel","Major Crossmatch","ABO Blood Grouping","Rh(D) Typing"]},

"Major Crossmatch": {
 w:"Mixing the patient's serum with red cells from the donor unit selected for them to confirm compatibility.",
 y:"The final step before red-cell transfusion.",
 p:"Recent sample (within 72 h if recent transfusion or pregnancy).",
 s:"Purple EDTA with a complete label.",
 h:["Incompatible: unexpected antibody, ABO error, or positive DAT in the unit"],
 l:[],
 i:["Always detects ABO incompatibility, but irregular antibodies require the AHG phase","ABO incompatibility = identification error until proven otherwise"],
 r:["ABO Blood Grouping","Irregular Antibody Screen (IAT)","Transfusion Reaction Work-up"]},

/* ───────── Toxicology / TDM ───────── */
"Digoxin Level": {
 w:"Blood level of digoxin, a drug with a very narrow therapeutic margin.",
 y:"Suspected toxicity (nausea, visual disturbance, arrhythmia), changing renal function, and interacting drugs.",
 p:"Draw at least 6–8 h after the last dose (to complete distribution).",
 s:"Serum (yellow).",
 h:["> 2 ng/mL: toxicity (therapeutic 0.5–2; in heart failure 0.5–0.9)","Kidney failure","Amiodarone and verapamil"],
 l:["Insufficient dose","Non-adherence"],
 i:["Sampling too soon after a dose gives misleadingly high values","Low potassium and magnesium increase toxicity at normal levels","Neutralizing antibodies (DigiFab) interfere with measurement"],
 r:["Potassium (K⁺)","Magnesium","Creatinine"]},

"Lithium Level": {
 w:"Blood level of lithium, used to treat bipolar disorder, with a narrow therapeutic range.",
 y:"Dose adjustment and monitoring for toxicity (tremor, vomiting, confusion).",
 p:"Draw 12 h after the last dose (before the morning dose).",
 s:"Serum (yellow) — never a lithium-heparin tube!",
 h:["> 1.2 mmol/L: toxicity (therapeutic 0.6–1.0)","Dehydration","Diuretics, ACE inhibitors and NSAIDs","Kidney failure"],
 l:["Non-adherence"],
 i:["A lithium-heparin tube falsely raises it dramatically","Incorrect timing"],
 r:["Creatinine","Sodium (Na⁺)","TSH (Thyroid Stimulating Hormone)","Calcium (Total)"]},

"Acetaminophen (Paracetamol) Level": {
 w:"Blood level of paracetamol (acetaminophen).",
 y:"Assessment of poisoning and the need for N-acetylcysteine using the Rumack-Matthew nomogram.",
 p:"Record the exact time of ingestion.",
 s:"Serum (yellow), drawn at least 4 h after ingestion.",
 h:["Overdose — risk of severe liver injury"],
 l:[],
 i:["Before 4 h it cannot be interpreted on the nomogram","The nomogram is not valid for repeated or extended-release ingestions","High bilirubin in some methods"],
 r:["ALT (Alanine Aminotransferase)","PT (Prothrombin Time)","Salicylate Level"]},

/* ───────── Body fluids ───────── */
"CSF Cell Count & Differential": {
 w:"Counting white and red cells in cerebrospinal fluid and identifying their types.",
 y:"Diagnosis of meningitis and subarachnoid hemorrhage — an emergency.",
 p:"Medical procedure (lumbar puncture).",
 s:"Tube 3 (least blood contamination). Examine within 1 h — cells lyse rapidly. Do not refrigerate.",
 h:["Neutrophils: bacterial meningitis","Lymphocytes: viral, tuberculous, fungal","Red cells: hemorrhage or traumatic tap"],
 l:[],
 i:["A traumatic tap adds WBCs: about 1 WBC per 500–1000 RBC","Delay destroys neutrophils","See the CSF table in Quick Reference"],
 r:["CSF Protein","CSF Glucose","CSF Culture","Gram Stain","CSF Lactate"]},

"Synovial Fluid Analysis (Cells & Crystals)": {
 w:"Examination of joint fluid: appearance, cell count, crystals under polarized microscopy, Gram stain and culture.",
 y:"Distinguishes gout and pseudogout from septic and inflammatory arthritis.",
 p:"Medical procedure (arthrocentesis).",
 s:"Green heparin for cells and crystals, sterile tube for culture. Examine promptly. Do not use EDTA or oxalate for crystals (they form artefactual crystals).",
 h:["WBC > 50,000 with > 90% neutrophils: septic until proven otherwise","Negatively birefringent needles: gout","Weakly positive rhomboid crystals: pseudogout (CPPD)"],
 l:[],
 i:["Glove powder and EDTA tubes form artefactual crystals","Crystals do not exclude concurrent infection","See the crystals table in Quick Reference"],
 r:["Uric Acid","Gram Stain","Blood Culture (Aerobic)","CRP (C-Reactive Protein)"]},

"Semen Analysis": {
 w:"Assessment of volume, sperm concentration, motility, morphology and vitality according to WHO 2021 criteria.",
 y:"First-line test for male infertility, and confirmation of vasectomy success.",
 p:"Abstinence 2–7 days. Collect the complete sample by masturbation into a sterile container (no ordinary condoms).",
 s:"Deliver within 1 h at body temperature (20–37 °C). Report any lost portion of the sample.",
 h:[],
 l:["Oligozoospermia (< 16 million/mL)","Asthenozoospermia (< 42% total motility)","Teratozoospermia (< 4% normal forms)","Azoospermia","Low volume: retrograde ejaculation or obstruction"],
 i:["A single abnormal sample needs repeating after 2–3 months","Fever, acute illness and smoking have temporary effects","Cold or delay kills motility"],
 r:["FSH (Follicle Stimulating Hormone)","LH (Luteinizing Hormone)","Total Testosterone","Prolactin"]},

"Fecal Immunochemical Test (FIT)": {
 w:"Detects human hemoglobin in stool with antibodies; specific for colonic bleeding.",
 y:"Annual colorectal-cancer screening from age 45–50.",
 p:"No dietary restriction (unlike the old guaiac test). Avoid collection during menstruation or hemorrhoidal bleeding.",
 s:"Small sample using the dedicated collection device, sent within the specified days.",
 h:["Positive: colonoscopy needed (tumors, polyps, inflammation, hemorrhoids)"],
 l:[],
 i:["A negative result does not replace colonoscopy when symptoms are present","High temperature degrades hemoglobin"],
 r:["CEA (Carcinoembryonic Antigen)","CBC (Complete Blood Count)","Ferritin","Fecal Calprotectin"]},

/* ───────── Urine ───────── */
"24-hour Urine Protein": {
 w:"The amount of protein excreted in urine over 24 hours.",
 y:"Quantifies proteinuria in nephrotic syndrome (> 3.5 g/day) and pre-eclampsia (≥ 300 mg/day).",
 p:"Discard the first morning void and record the time, then collect all urine until the same time next day, including the final void.",
 s:"Large container, kept refrigerated during collection.",
 h:["Glomerular disease","Diabetic nephropathy","Pre-eclampsia","Multiple myeloma","Fever and exercise"],
 l:[],
 i:["Incomplete collection is the main error → check daily urine creatinine","A random protein/creatinine ratio is a practical alternative"],
 r:["Urine Protein/Creatinine Ratio (PCR)","Urine Albumin/Creatinine Ratio (ACR)","Albumin","Creatinine"]},

"Urine hCG (Qualitative)": {
 w:"A rapid test detecting the pregnancy hormone in urine.",
 y:"Confirms pregnancy; required before imaging, drugs and surgery for every woman of reproductive age.",
 p:"First morning urine (most concentrated) in early pregnancy.",
 s:"Random urine in a clean container.",
 h:["Pregnancy (positive at about the time of the missed period)","Molar pregnancy","Secreting tumors"],
 l:[],
 i:["Dilute urine gives early false negatives → serum test is more sensitive","Hook effect in advanced or molar pregnancy","Stays positive for weeks after miscarriage"],
 r:["hCG (Beta-hCG Quantitative)"]}

});

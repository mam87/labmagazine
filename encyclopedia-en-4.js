/* Lab test encyclopedia — ENGLISH edition, Batch 4. Mirrors encyclopedia-4.js */
window.ENC_EN = Object.assign(window.ENC_EN || {}, {

/* ───────── Immunology ───────── */
"Anti-Smith (Sm)": {
 w:"Antibodies against small nuclear ribonucleoproteins (snRNP).",
 y:"The most specific antibody for SLE — its presence almost confirms the diagnosis.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["SLE (only 20–30% of patients, but specificity > 95%)"],
 l:[],
 i:["Low sensitivity → a negative result does not exclude lupus","Does not change with disease activity, so it is not repeated for follow-up"],
 r:["ANA (Antinuclear Antibodies)","Anti-dsDNA","Complement C3","Complement C4"]},

"Anti-SSA/Ro": {
 w:"Antibodies against the nuclear and cytoplasmic Ro proteins.",
 y:"Diagnosis of Sjögren's syndrome and cutaneous lupus, and assessing pregnant women for the risk of neonatal lupus and congenital heart block.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Sjögren's syndrome (70%)","SLE (30–40%)","Subacute cutaneous lupus"],
 l:[],
 i:["Positive pregnant women need fetal heart monitoring between weeks 16 and 26","ANA may be negative on some substrates despite its presence"],
 r:["Anti-SSB/La","ANA (Antinuclear Antibodies)","RF (Rheumatoid Factor)"]},

"Anti-SSB/La": {
 w:"Antibodies against the La protein, usually appearing together with anti-Ro.",
 y:"Supports the diagnosis of Sjögren's syndrome.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Sjögren's syndrome (40%)","SLE (10–15%)"],
 l:[],
 i:["Isolated anti-La without anti-Ro is usually of little significance"],
 r:["Anti-SSA/Ro","ANA (Antinuclear Antibodies)"]},

"Anti-Scl-70 (Topoisomerase I)": {
 w:"Antibodies against the enzyme topoisomerase I.",
 y:"Diagnosis of diffuse systemic sclerosis; predicts the risk of pulmonary fibrosis.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Diffuse systemic sclerosis (20–40%, high specificity)"],
 l:[],
 i:["Anticentromere antibodies are associated with the limited form (CREST) instead"],
 r:["ANA (Antinuclear Antibodies)","Anti-dsDNA"]},

"IgG": {
 w:"The most abundant immunoglobulin in blood, responsible for long-term immunity, and able to cross the placenta.",
 y:"Evaluation of immunodeficiency (recurrent infections), plasma-cell disorders and monitoring IVIG therapy.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Chronic infection and liver disease","Autoimmune disease","IgG myeloma","IgG4-related disease"],
 l:["Primary immunodeficiency (CVID)","Protein loss (nephrotic syndrome, gut)","Immunosuppressive therapy and rituximab","Myeloma of another type"],
 i:["Reference range depends on age (infants carry maternal IgG)"],
 r:["IgA","IgM","Serum Protein Electrophoresis (SPEP)"]},

"IgA": {
 w:"The main immunoglobulin of mucous membranes and secretions.",
 y:"Screening for IgA deficiency (the commonest primary immunodeficiency), essential with celiac testing, and evaluation of plasma-cell disorders.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Alcoholic liver disease","IgA nephropathy","IgA myeloma"],
 l:["Selective IgA deficiency (1:500)","Common variable immunodeficiency"],
 i:["Patients with severe IgA deficiency may have anaphylaxis with transfusion → IgA-deficient plasma","Causes false-negative tTG-IgA"],
 r:["IgG","IgM","tTG-IgA (Tissue Transglutaminase)"]},

"IgM": {
 w:"The first immunoglobulin to appear in the immune response to a new infection.",
 y:"Evaluation of immunodeficiency, plasma-cell disorders (Waldenström) and recent infection.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Acute infection","Primary biliary cholangitis","Waldenström macroglobulinemia (hyperviscosity)"],
 l:["Immunodeficiency","Hyper-IgM syndrome (IgM rises rather than falls)"],
 i:["IgM cold agglutinins and rheumatoid factors"],
 r:["IgG","IgA","Serum Protein Electrophoresis (SPEP)"]},

"Complement C4": {
 w:"A component of the classical complement pathway.",
 y:"With C3 to assess lupus activity, and diagnosis of hereditary angioedema (low even between attacks).",
 p:"No preparation needed.",
 s:"Serum separated and chilled promptly.",
 h:["Inflammation"],
 l:["Active lupus","Hereditary angioedema (C1-INH deficiency)","Cryoglobulinemia (hepatitis C)","Partial inherited deficiency"],
 i:["Delay at room temperature lowers it"],
 r:["Complement C3","Anti-dsDNA","ANA (Antinuclear Antibodies)"]},

"HIV RNA (Viral Load)": {
 w:"Quantitative measurement of HIV copies in plasma.",
 y:"Monitoring treatment efficacy (target: undetectable), and diagnosing very acute infection or infection in infants.",
 p:"No preparation needed.",
 s:"Purple EDTA, separated within 6 h, frozen if delayed.",
 h:["Untreated infection","Treatment failure or non-adherence","Drug resistance"],
 l:["Undetectable: successful therapy (no sexual transmission, U=U)"],
 i:["Small transient blips after vaccination and infections","Use the same method for follow-up"],
 r:["HIV Antibody/Ag (4th Gen combo)","Flow Cytometry (CD markers)"]},

"Hepatitis C RNA (Viral Load)": {
 w:"Detection and quantification of hepatitis C virus RNA.",
 y:"Confirms active infection after positive antibodies, and documents cure (SVR12: undetectable 12 weeks after the end of therapy).",
 p:"No preparation needed.",
 s:"Purple EDTA or serum, separated promptly.",
 h:["Active infection"],
 l:["Undetectable: spontaneous clearance or cure after treatment"],
 i:["Viral load does not correlate with the severity of liver injury"],
 r:["Hepatitis C Antibody","ALT (Alanine Aminotransferase)"]},

"CMV IgM": {
 w:"IgM antibodies against cytomegalovirus.",
 y:"Diagnosis of recent infection in pregnant women and immunocompromised patients, and EBV-negative mononucleosis.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Recent primary infection","Sometimes reactivation"],
 l:[],
 i:["IgM may persist for months and can be falsely positive → IgG avidity defines timing","PCR is better in the immunocompromised"],
 r:["Toxoplasma IgG / IgM","Rubella IgG","EBV VCA IgM"]},

"EBV VCA IgM": {
 w:"IgM antibodies against the Epstein-Barr virus viral capsid antigen.",
 y:"Diagnosis of infectious mononucleosis in young children or when the Monospot test is negative.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Recent primary EBV infection"],
 l:[],
 i:["Interpret with VCA IgG and EBNA: EBNA presence means past infection","Cross-reaction with CMV"],
 r:["Heterophile Antibody (Monospot)","CMV IgM","CBC (Complete Blood Count)"]},

"Anti-HAV IgM": {
 w:"IgM antibodies against hepatitis A virus.",
 y:"Diagnosis of acute hepatitis A (transmitted by contaminated food and water).",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Acute infection (persists 3–6 months)"],
 l:[],
 i:["IgG alone indicates immunity (vaccine or past infection)","Rare false positives after vaccination"],
 r:["ALT (Alanine Aminotransferase)","Bilirubin (Total)","HBsAg (Hepatitis B Surface Ag)"]},

"Anti-HBc IgM": {
 w:"IgM antibodies against the hepatitis B core antigen.",
 y:"The key marker of acute infection; it covers the window period when HBsAg has disappeared and anti-HBs has not yet appeared.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Acute hepatitis B","Acute flares of chronic infection (low titer)"],
 l:[],
 i:["Low titers during a chronic flare may be misinterpreted as a new infection"],
 r:["HBsAg (Hepatitis B Surface Ag)","Anti-HBc Total","ALT (Alanine Aminotransferase)"]},

"HBeAg": {
 w:"An antigen secreted during active hepatitis B virus replication.",
 y:"Assessing infectivity and replication, and monitoring therapy (seroconversion to anti-HBe is a good sign).",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Active replication and high infectivity (high risk of transmission to the newborn)"],
 l:[],
 i:["Precore mutants make it negative despite replication → HBV DNA is more accurate"],
 r:["HBV DNA (Viral Load)","HBsAg (Hepatitis B Surface Ag)","ALT (Alanine Aminotransferase)"]},

"HBV DNA (Viral Load)": {
 w:"The amount of hepatitis B virus DNA in blood, in IU/mL.",
 y:"Deciding when to start therapy, monitoring response, pregnancy (> 200,000 IU/mL warrants third-trimester prophylaxis), and before immunosuppression.",
 p:"No preparation needed.",
 s:"Purple EDTA, separated within 6 h.",
 h:["Active infection","Treatment failure or resistance"],
 l:["Undetectable: viral suppression"],
 i:["Use the same method and laboratory for follow-up"],
 r:["HBsAg (Hepatitis B Surface Ag)","HBeAg","ALT (Alanine Aminotransferase)"]},

"ANCA (MPO / PR3)": {
 w:"Anti-neutrophil cytoplasmic antibodies: PR3 (c-ANCA pattern) and MPO (p-ANCA pattern).",
 y:"Diagnosis of small-vessel vasculitis: granulomatosis with polyangiitis (PR3), microscopic polyangiitis (MPO), especially with rapidly progressive glomerulonephritis or pulmonary hemorrhage.",
 p:"No preparation. May be an emergency.",
 s:"Serum (yellow).",
 h:["PR3: granulomatosis with polyangiitis (GPA)","MPO: microscopic polyangiitis, Churg-Strauss (EGPA)","Drugs (hydralazine, propylthiouracil, levamisole-adulterated cocaine)"],
 l:[],
 i:["Atypical p-ANCA occurs in ulcerative colitis and liver disease → request MPO and PR3 by ELISA","A negative result does not exclude vasculitis"],
 r:["Creatinine","Urine Microscopy (Sediment)","CRP (C-Reactive Protein)"]},

"Serum Free Light Chains (κ/λ)": {
 w:"Measurement of free kappa and lambda light chains in serum and their ratio.",
 y:"Screening and follow-up of myeloma (especially light-chain and non-secretory types), AL amyloidosis, and MGUS progression risk.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Ratio > 1.65: kappa clone","Ratio < 0.26: lambda clone","Both raised with a normal ratio: kidney failure or inflammation"],
 l:[],
 i:["Kidney failure raises the normal ratio up to 3.1","Order with SPEP and immunofixation"],
 r:["Serum Protein Electrophoresis (SPEP)","Urine Bence Jones Protein","Beta-2 Microglobulin","Creatinine"]},

/* ───────── Microbiology ───────── */
"Blood Culture (Anaerobic)": {
 w:"The anaerobic bottle of a blood-culture set, detecting bacteria that do not grow in oxygen.",
 y:"Paired with the aerobic bottle in each set; especially important in abdominal, pelvic and deep wound infections.",
 p:"As for aerobic culture: before antibiotics, two sets.",
 s:"With a syringe fill the aerobic bottle first; with a butterfly set also fill the aerobic bottle first because the tubing contains air.",
 h:["Bacteroides, Clostridium, anaerobic cocci"],
 l:[],
 i:["Introducing air into the anaerobic bottle","Insufficient blood volume"],
 r:["Blood Culture (Aerobic)","Procalcitonin (PCT)"]},

"Sputum Culture": {
 w:"Culture of sputum to identify the cause of bacterial pneumonia.",
 y:"Severe or hospital-acquired pneumonia, bronchiectasis and cystic fibrosis.",
 p:"Morning, after rinsing the mouth with water; deep cough (not saliva); before antibiotics.",
 s:"Sterile container, cultured within 2 h.",
 h:["Streptococcus pneumoniae, Haemophilus influenzae, Pseudomonas, Staphylococcus aureus"],
 l:[],
 i:["Quality check by Gram stain: > 25 neutrophils and < 10 squamous cells per LPF","Salivary samples grow worthless oral flora"],
 r:["Gram Stain","Blood Culture (Aerobic)","Legionella Urinary Antigen","Procalcitonin (PCT)"]},

"Wound Culture": {
 w:"Culture of a wound specimen to identify the infecting bacteria.",
 y:"Clinically infected wounds (redness, pus, warmth), diabetic foot and surgical-site infections.",
 p:"Clean the surface with saline before sampling.",
 s:"Tissue or pus aspirated by syringe is better than a swab. Swabs are taken by the Levine technique from the clean wound base.",
 h:["Staphylococcus aureus and MRSA, streptococci, Enterobacterales, anaerobes"],
 l:[],
 i:["Superficial swabs collect colonizing, non-pathogenic bacteria","Do not culture non-inflamed wounds"],
 r:["Gram Stain","Antimicrobial Susceptibility Testing (AST)","MRSA Surveillance Screen"]},

"CSF Culture": {
 w:"Culture of cerebrospinal fluid to isolate the cause of meningitis.",
 y:"Suspected bacterial meningitis — an emergency.",
 p:"Before antibiotics if possible, but never delay treatment.",
 s:"Tube 2 (microbiology), sent immediately at room temperature — never refrigerate (meningococci and Haemophilus die in the cold).",
 h:["Pneumococci, meningococci, Haemophilus, Listeria, and group B streptococci in infants"],
 l:[],
 i:["Prior antibiotics greatly reduce yield → PCR is useful","Refrigeration"],
 r:["Gram Stain","CSF Cell Count & Differential","CSF Glucose","Blood Culture (Aerobic)"]},

"AFB Culture (TB Culture)": {
 w:"Culture of mycobacteria in liquid (MGIT) and solid (Löwenstein-Jensen) media; may take up to 6–8 weeks.",
 y:"The gold standard for diagnosing TB and for full drug-susceptibility testing.",
 p:"Three early-morning sputum samples.",
 s:"Sputum, fluids and tissues in sterile containers, processed in a BSL-3 laboratory or BSC.",
 h:["M. tuberculosis or non-tuberculous mycobacteria"],
 l:[],
 i:["Contamination requires alkali decontamination of the sample","Final negative result after 6–8 weeks"],
 r:["AFB Smear (TB)","TB PCR – GeneXpert MTB/RIF"]},

"KOH Preparation": {
 w:"Potassium hydroxide dissolves keratin so fungal hyphae and spores become visible under the microscope.",
 y:"Rapid diagnosis of dermatophyte infections of skin, nails and hair, and Candida.",
 p:"Stop topical antifungals one week before the test.",
 s:"Scrapings from the active edge of a skin lesion, or nail clippings from the proximal affected part.",
 h:["Septate hyphae: dermatophytes","Pseudohyphae and yeasts: Candida"],
 l:[],
 i:["Cell borders and fibers can mimic hyphae","A negative result does not exclude infection → fungal culture"],
 r:["Fungal Culture"]},

"Cryptococcal Antigen (CrAg)": {
 w:"Detects Cryptococcus capsular antigen in serum or CSF.",
 y:"Diagnosis of cryptococcal meningitis in AIDS and immunosuppressed patients, and screening when CD4 < 100.",
 p:"No preparation needed.",
 s:"Serum or CSF.",
 h:["Cryptococcosis (sensitivity > 95%)"],
 l:[],
 i:["Prozone with very high antigen loads in some methods","More sensitive than India ink"],
 r:["CSF Cell Count & Differential","CSF Culture","HIV RNA (Viral Load)"]},

"Chlamydia NAAT/PCR": {
 w:"Nucleic-acid amplification for Chlamydia trachomatis.",
 y:"Diagnosis of this sexually transmitted infection — often asymptomatic and a cause of infertility and ectopic pregnancy.",
 p:"Men: first-void urine (first 10–20 mL) with no voiding during the previous hour.",
 s:"First-catch urine for men, or vaginal/cervical swab for women in the dedicated transport medium.",
 h:["Chlamydia infection"],
 l:[],
 i:["Midstream urine reduces sensitivity","Remains positive up to 3 weeks after treatment (dead DNA) → do not retest earlier"],
 r:["Gonorrhea NAAT/PCR","Syphilis RPR/VDRL","HIV Antibody/Ag (4th Gen combo)"]},

"Gonorrhea NAAT/PCR": {
 w:"Nucleic-acid amplification for Neisseria gonorrhoeae.",
 y:"Diagnosis of gonorrhea; usually ordered with chlamydia on the same sample.",
 p:"As for chlamydia.",
 s:"First-catch urine or swabs (cervix, urethra, pharynx, rectum according to exposure).",
 h:["Gonococcal infection"],
 l:[],
 i:["Gives no antimicrobial susceptibility → culture is needed if treatment fails (rising resistance)"],
 r:["Chlamydia NAAT/PCR","Syphilis RPR/VDRL"]},

"MRSA Surveillance Screen": {
 w:"Screening for carriage of methicillin-resistant Staphylococcus aureus in the nose (sometimes axilla and perineum).",
 y:"Hospital infection control: before surgery, on ICU admission, and for contacts of cases.",
 p:"No preparation needed.",
 s:"One swab of both anterior nares, by selective culture or PCR.",
 h:["MRSA carrier → contact isolation and decolonization per policy"],
 l:[],
 i:["Intermittent carriage may give false negatives"],
 r:["Wound Culture","Antimicrobial Susceptibility Testing (AST)"]},

"Legionella Urinary Antigen": {
 w:"Detects Legionella pneumophila serogroup 1 antigen in urine.",
 y:"Rapid diagnosis of Legionnaires' disease in severe pneumonia, especially with diarrhea, hyponatremia or exposure to air-conditioning and water systems.",
 p:"No preparation needed.",
 s:"Random urine.",
 h:["Legionnaires' disease (serogroup 1 causes ~80% of cases)"],
 l:[],
 i:["Does not detect other serogroups → PCR or culture","May stay positive for weeks after infection"],
 r:["Sputum Culture","Sodium (Na⁺)","Respiratory Viral PCR (Flu/RSV/SARS-CoV-2)"]},

"Rapid Strep A Antigen": {
 w:"A rapid test detecting group A streptococcal antigen on a throat swab within minutes.",
 y:"Point-of-care diagnosis of streptococcal pharyngitis to start antibiotics immediately.",
 p:"Before antibiotics.",
 s:"Swab of tonsils and posterior pharyngeal wall.",
 h:["Group A streptococcal infection"],
 l:[],
 i:["Sensitivity 85–90% → negative results in children are confirmed by culture","Carriers without infection test positive"],
 r:["Throat Culture","ASO (Antistreptolysin O)"]},

"Respiratory Viral PCR (Flu/RSV/SARS-CoV-2)": {
 w:"A multiplex molecular test detecting influenza A and B, respiratory syncytial virus and SARS-CoV-2 (sometimes broader panels).",
 y:"Diagnosis of acute respiratory infection to guide antiviral therapy and hospital infection control.",
 p:"Within the first 3–5 days of symptoms.",
 s:"Deep nasopharyngeal swab in viral transport medium, refrigerated and tested within 72 h.",
 h:["Identification of the virus"],
 l:[],
 i:["A superficial swab is the main cause of false negatives","May remain positive for weeks after recovery (RNA)"],
 r:["Procalcitonin (PCT)","CRP (C-Reactive Protein)","CBC (Complete Blood Count)"]},

"Antimicrobial Susceptibility Testing (AST)": {
 w:"Testing an isolated organism against antibiotics and determining the MIC, interpreted as susceptible (S), susceptible-increased exposure (I) or resistant (R) per CLSI or EUCAST.",
 y:"Choosing the most suitable, narrowest-spectrum antibiotic and detecting resistance (ESBL, MRSA, CRE).",
 p:"Collect the specimen before antibiotics.",
 s:"Pure colony after culture (an additional 24–48 h).",
 h:["Resistance: requires a change of therapy and isolation measures"],
 l:[],
 i:["Contaminated or mixed specimens","Selective (cascade) reporting encourages rational use"],
 r:["Urine Culture","Blood Culture (Aerobic)","Wound Culture","MRSA Surveillance Screen"]},

"Fungal Culture": {
 w:"Culture of the specimen on fungal media (Sabouraud) for several weeks.",
 y:"Identifying the fungus in refractory skin and nail infections, and systemic infection in the immunocompromised.",
 p:"Stop antifungals beforehand if possible.",
 s:"Skin scrapings, nail clippings, hair with roots, sputum, or tissue.",
 h:["Dermatophytes, Candida, Aspergillus and others"],
 l:[],
 i:["Takes up to 4 weeks","Aspergillus may be an airborne contaminant"],
 r:["KOH Preparation","Cryptococcal Antigen (CrAg)"]},

"Vaginal Wet Mount": {
 w:"Direct microscopic examination of vaginal discharge in saline and KOH.",
 y:"Identifies the cause of vaginal discharge: trichomoniasis, bacterial vaginosis and candidiasis.",
 p:"Avoid douching, intercourse and vaginal medications for 24–48 h.",
 s:"Vaginal swab in saline, examined within 10–30 min (Trichomonas lose motility).",
 h:["Motile trichomonads","Clue cells: bacterial vaginosis","Yeasts and pseudohyphae: Candida"],
 l:[],
 i:["Delay sharply reduces Trichomonas sensitivity → NAAT is more accurate","The whiff test with KOH supports bacterial vaginosis"],
 r:["Chlamydia NAAT/PCR","Gonorrhea NAAT/PCR"]},

"Pinworm (Scotch Tape Test)": {
 w:"Clear adhesive tape applied to the perianal area to capture Enterobius (pinworm) eggs.",
 y:"Diagnosis of pinworm infection (nocturnal perianal itching in children).",
 p:"In the morning on waking, before bathing or using the toilet.",
 s:"Tape stuck onto a glass slide. Repeat on 3 consecutive days to increase sensitivity.",
 h:["Pinworm eggs"],
 l:[],
 i:["Stool examination usually does not detect them","A single sample detects only 50%"],
 r:["Stool Ova & Parasites (O&P)"]},

/* ───────── Tumor markers ───────── */
"PSA Free/Total Ratio": {
 w:"The percentage of free PSA in total PSA. Cancer produces more bound PSA, so the ratio falls.",
 y:"In the grey zone (total PSA 4–10 ng/mL) to estimate cancer probability and reduce unnecessary biopsies.",
 p:"As for total PSA; separate serum within 3 h.",
 s:"Serum (yellow).",
 h:["> 25%: low probability of cancer (usually benign hyperplasia)"],
 l:["< 10%: high probability (~50%)"],
 i:["Free PSA is unstable → separate and freeze promptly","Recent rectal examination"],
 r:["PSA (Total Prostate-Specific Antigen)"]},

"Beta-2 Microglobulin": {
 w:"A small protein on the surface of most cells; reflects tumor burden in hematologic malignancies.",
 y:"Staging and prognosis of myeloma (ISS), lymphoma and CLL.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Myeloma (> 5.5 mg/L = stage III)","Lymphoma and CLL","Kidney failure","Viral infections and immune diseases"],
 l:[],
 i:["Kidney failure raises it regardless of tumor"],
 r:["Serum Protein Electrophoresis (SPEP)","Albumin","Creatinine","LDH (Lactate Dehydrogenase)"]},

"Chromogranin A (CgA)": {
 w:"A protein in the secretory granules of neuroendocrine cells.",
 y:"Follow-up of neuroendocrine tumors (carcinoid, pancreatic NETs, pheochromocytoma).",
 p:"Fasting. Stop PPIs for 2 weeks if possible (under medical supervision).",
 s:"Serum (yellow).",
 h:["Neuroendocrine tumors","Proton-pump inhibitors (commonest cause)","Atrophic gastritis","Kidney and liver failure"],
 l:[],
 i:["Acid suppressants raise it markedly → the commonest cause of false positives"],
 r:["Urine 5-HIAA (24h)","NSE (Neuron-Specific Enolase)"]},

"NSE (Neuron-Specific Enolase)": {
 w:"An enzyme of neurons and neuroendocrine cells.",
 y:"Follow-up of small-cell lung cancer and neuroblastoma in children, and neurological prognosis after cardiac arrest.",
 p:"No preparation needed.",
 s:"Serum separated within 1 h, completely non-hemolyzed.",
 h:["Small-cell lung cancer","Neuroblastoma","Brain injury after cardiac arrest"],
 l:[],
 i:["Hemolysis raises it markedly (red cells and platelets contain it) → the main source of error"],
 r:["CYFRA 21-1","Chromogranin A (CgA)"]},

"CYFRA 21-1": {
 w:"A soluble fragment of cytokeratin 19 in blood.",
 y:"Follow-up of non-small-cell lung cancer (especially squamous), head-and-neck and bladder cancers.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Non-small-cell lung cancer","Benign lung disease and kidney failure (mild rise)"],
 l:[],
 i:["Not for screening or initial diagnosis"],
 r:["CEA (Carcinoembryonic Antigen)","SCC Antigen (Squamous Cell Carcinoma)","NSE (Neuron-Specific Enolase)"]},

"SCC Antigen (Squamous Cell Carcinoma)": {
 w:"An antigen associated with squamous-cell tumors.",
 y:"Follow-up of cervical, head-and-neck, esophageal and squamous lung cancer.",
 p:"No preparation. Avoid contaminating the sample with saliva or sweat.",
 s:"Serum (yellow).",
 h:["Squamous-cell carcinomas","Skin diseases (psoriasis, eczema)","Kidney failure"],
 l:[],
 i:["Contamination with saliva or skin falsely raises it markedly"],
 r:["CYFRA 21-1","CEA (Carcinoembryonic Antigen)"]},

"HE4 (Human Epididymis Protein 4)": {
 w:"A protein secreted by epithelial ovarian cancer; more specific than CA 125 because it does not rise in endometriosis.",
 y:"Evaluation of a pelvic mass with CA 125 by calculating the ROMA index for cancer risk.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Epithelial ovarian cancer","Kidney failure","Smoking and advancing age"],
 l:[],
 i:["Kidney failure raises it markedly","Reference range differs before and after menopause"],
 r:["CA 125"]},

"CA 72-4": {
 w:"A glycoprotein antigen associated with mucinous tumors.",
 y:"Follow-up of gastric cancer (with CEA and CA 19-9), and sometimes mucinous ovarian cancer.",
 p:"No preparation needed.",
 s:"Serum (yellow).",
 h:["Gastric and ovarian cancer","Gastritis, peptic ulcer and gout (mild rise)"],
 l:[],
 i:["Not for screening","Limited value on its own"],
 r:["CEA (Carcinoembryonic Antigen)","CA 19-9"]},

/* ───────── Genetic & molecular pathology ───────── */
"BRCA1/BRCA2 Gene Testing": {
 w:"Genetic analysis to detect pathogenic variants in BRCA1 and BRCA2, genes responsible for DNA repair.",
 y:"Assessing inherited predisposition to breast, ovarian, prostate and pancreatic cancer, and selecting patients for PARP inhibitors.",
 p:"Requires genetic counseling before and after testing.",
 s:"Purple EDTA or saliva (germline), or tumor tissue (somatic variants).",
 h:["Pathogenic variant: lifetime breast-cancer risk up to 70%, ovarian 17–44%"],
 l:[],
 i:["Variants of uncertain significance (VUS) should not drive decisions","Tumor testing does not distinguish germline from somatic → confirm on blood"],
 r:["HER2 Amplification (FISH)","CA 125"]},

"Lynch Syndrome Panel (MMR genes)": {
 w:"Testing of the mismatch-repair genes (MLH1, MSH2, MSH6, PMS2, EPCAM).",
 y:"Diagnosis of hereditary Lynch syndrome (early colorectal and endometrial cancer) after tumor screening by MMR immunohistochemistry or microsatellite instability (MSI).",
 p:"Genetic counseling.",
 s:"Purple EDTA.",
 h:["Pathogenic variant: lifetime colorectal-cancer risk 25–80% → colonoscopy every 1–2 years"],
 l:[],
 i:["Tumor MLH1 loss is often due to promoter methylation, not inheritance → test BRAF or methylation first","MSI-high tumors respond to immunotherapy"],
 r:["BRAF V600E Mutation","CEA (Carcinoembryonic Antigen)"]},

"KRAS Mutation Analysis": {
 w:"Detection of mutations in KRAS, a gene that drives cell growth.",
 y:"Colorectal cancer: a mutation predicts no benefit from anti-EGFR antibodies (cetuximab). Lung cancer: KRAS G12C has a targeted therapy (sotorasib).",
 p:"No preparation needed.",
 s:"Formalin-fixed paraffin-embedded tumor (FFPE) with adequate tumor content, or liquid biopsy (cfDNA).",
 h:["KRAS mutation (40% of colorectal cancer)"],
 l:[],
 i:["Low tumor fraction gives false negatives → mark the tumor area before extraction","Over-fixation in formalin fragments DNA"],
 r:["BRAF V600E Mutation","EGFR Mutation (Exons 18-21)","CEA (Carcinoembryonic Antigen)"]},

"BRAF V600E Mutation": {
 w:"A mutation in BRAF that activates a cell-growth pathway.",
 y:"Melanoma and lung (targeted BRAF/MEK inhibitors), colon (poor prognosis and exclusion of Lynch), thyroid, and hairy-cell leukemia.",
 p:"No preparation needed.",
 s:"FFPE or plasma. Can also be detected by VE1 immunohistochemistry.",
 h:["Melanoma (~50%)","Papillary thyroid carcinoma (~45%)","Hairy-cell leukemia (~100%)"],
 l:[],
 i:["In colorectal cancer with MLH1 loss, its presence suggests a sporadic (non-hereditary) tumor"],
 r:["KRAS Mutation Analysis","Lynch Syndrome Panel (MMR genes)"]},

"EGFR Mutation (Exons 18-21)": {
 w:"Detection of activating mutations in the epidermal growth factor receptor gene.",
 y:"Non-small-cell lung cancer (adenocarcinoma) to select tyrosine-kinase inhibitors (osimertinib).",
 p:"No preparation needed.",
 s:"FFPE, or liquid biopsy (plasma) if tissue is insufficient.",
 h:["Exon 19 deletion and L858R: sensitive to therapy","T790M: acquired resistance","Exon 20 insertion: resistant to classic inhibitors"],
 l:[],
 i:["A negative liquid biopsy does not exclude a mutation → test tissue","Poor preservation and fixation reduce DNA quality"],
 r:["ALK Gene Rearrangement (FISH/IHC)","PD-L1 Expression (IHC)","KRAS Mutation Analysis"]},

"ALK Gene Rearrangement (FISH/IHC)": {
 w:"Detection of ALK gene fusion (usually EML4-ALK) by fluorescent in-situ hybridization or immunohistochemistry (D5F3).",
 y:"Non-small-cell lung cancer (3–7%, often younger never-smokers) to select ALK inhibitors (alectinib).",
 p:"No preparation needed.",
 s:"FFPE.",
 h:["Positive: excellent response to ALK inhibitors","Anaplastic large-cell lymphoma"],
 l:[],
 i:["D5F3 immunohistochemistry is accepted as a stand-alone test","EGFR mutations and ALK fusions rarely coexist"],
 r:["EGFR Mutation (Exons 18-21)","PD-L1 Expression (IHC)"]},

"PD-L1 Expression (IHC)": {
 w:"Immunohistochemistry measuring PD-L1 expression on tumor cells (TPS) or tumor plus immune cells (CPS).",
 y:"Selecting patients for immunotherapy (pembrolizumab) in lung, gastric, head-and-neck and triple-negative breast cancers.",
 p:"No preparation needed.",
 s:"FFPE with at least 100 viable tumor cells.",
 h:["TPS ≥ 50% in lung: first-line single-agent immunotherapy","CPS ≥ 1 or ≥ 10 depending on tumor and drug"],
 l:["< 1%: less benefit from single-agent immunotherapy"],
 i:["Each drug has its own antibody clone and scoring system (22C3, SP263, 28-8, SP142)","Tumor heterogeneity and small biopsies","Delayed fixation (cold ischemia)"],
 r:["EGFR Mutation (Exons 18-21)","ALK Gene Rearrangement (FISH/IHC)"]},

"HER2 Amplification (FISH)": {
 w:"Fluorescent in-situ hybridization measuring HER2 gene copy number relative to chromosome 17.",
 y:"Breast and gastric cancer: confirms HER2 status when immunohistochemistry is equivocal (2+) to select trastuzumab.",
 p:"No preparation needed.",
 s:"FFPE: fixation in 10% neutral-buffered formalin within 1 h of excision, for 6–72 h (ASCO/CAP).",
 h:["HER2/CEP17 ratio ≥ 2 with ≥ 4 copies: amplified (positive)"],
 l:["Not amplified","HER2-low (IHC 1+ or 2+ without amplification): eligible for trastuzumab deruxtecan"],
 i:["Fixation outside the specified window or delay invalidates the result","Borderline cases need a second-reader count per ASCO/CAP 2018 guidelines"],
 r:["BRCA1/BRCA2 Gene Testing","PD-L1 Expression (IHC)"]},

"IDH1/IDH2 Mutation": {
 w:"Mutations in the isocitrate dehydrogenase enzymes that produce the oncometabolite 2-HG.",
 y:"Classification of gliomas (WHO 2021: glioblastoma is IDH-wildtype), and acute myeloid leukemia to select IDH inhibitors.",
 p:"No preparation needed.",
 s:"FFPE, or bone marrow / blood in AML.",
 h:["Astrocytomas and oligodendrogliomas (better prognosis)","AML (~20%)","Chondrosarcoma and cholangiocarcinoma"],
 l:[],
 i:["IDH1-R132H immunohistochemistry detects only the commonest mutation → sequence if negative in young patients"],
 r:["TP53 Mutation","Flow Cytometry (CD markers)"]},

"TP53 Mutation": {
 w:"Mutations in TP53, the tumor-suppressor 'guardian of the genome'.",
 y:"An important prognostic factor in CLL, AML and myelodysplastic syndrome (affects therapy choice), and Li-Fraumeni syndrome.",
 p:"Genetic counseling for germline testing.",
 s:"Blood, bone marrow or tumor tissue.",
 h:["In CLL: resistance to chemotherapy → targeted therapy","Germline variant: Li-Fraumeni (multiple early cancers)"],
 l:[],
 i:["Age-related somatic blood mutations (CHIP) may be mistaken for germline","Aberrant p53 immunostaining is a surrogate in some tumors"],
 r:["IDH1/IDH2 Mutation","Flow Cytometry (CD markers)","BRCA1/BRCA2 Gene Testing"]},

"CYP2C19 Genotyping": {
 w:"Determination of CYP2C19 genotypes; this enzyme metabolizes clopidogrel, PPIs and some antidepressants.",
 y:"Before clopidogrel after PCI: *2 or *3 carriers activate it poorly → alternative such as ticagrelor.",
 p:"Once in a lifetime.",
 s:"Purple EDTA or buccal swab.",
 h:["*17: ultra-rapid metabolism"],
 l:["*2 or *3: poor metabolism (common in East Asians)"],
 i:["Unaffected by drugs or disease","Liver transplantation may change the actual phenotype"],
 r:["CYP2D6 Genotyping"]},

"CYP2D6 Genotyping": {
 w:"Genotype of CYP2D6, which metabolizes 25% of drugs: codeine, tramadol, tamoxifen and antidepressants.",
 y:"Avoiding codeine toxicity in ultra-rapid metabolizers, and reduced tamoxifen efficacy in poor metabolizers.",
 p:"Once in a lifetime.",
 s:"Purple EDTA or buccal swab.",
 h:["Gene duplication: ultra-rapid metabolizer (relatively common in the Middle East and North Africa) → codeine is dangerous"],
 l:["Poor metabolizer: reduced efficacy of codeine and tamoxifen"],
 i:["Inhibiting drugs (fluoxetine, paroxetine) functionally convert the patient to a poor metabolizer"],
 r:["CYP2C19 Genotyping"]},

"MTHFR C677T Polymorphism": {
 w:"A common variant in the methylenetetrahydrofolate reductase gene that reduces enzyme activity.",
 y:"Limited clinical value: professional societies do not recommend testing it for thrombosis or recurrent miscarriage.",
 p:"No preparation needed.",
 s:"Purple EDTA.",
 h:["Homozygous TT: 10–15% of people; may raise homocysteine with low folate"],
 l:[],
 i:["Measuring homocysteine directly is more useful","Does not change anticoagulation decisions"],
 r:["Homocysteine","Folic Acid","Factor V Leiden Mutation"]},

"NIPT (Cell-free Fetal DNA)": {
 w:"Analysis of fetal (placental) DNA fragments circulating in maternal blood.",
 y:"Screening for trisomy 21 (Down), 18 and 13, and sex-chromosome aneuploidies, from 10 weeks of gestation.",
 p:"After 10 weeks. Pre-test counseling.",
 s:"Maternal blood in a dedicated Streck tube (stabilizes cells) or EDTA separated promptly.",
 h:["High risk: requires confirmation by amniocentesis or CVS before any decision"],
 l:["Low risk: excludes > 99% of Down syndrome cases"],
 i:["A screening test, not diagnostic","Low fetal fraction (obesity, early gestation) causes test failure","Placental mosaicism, vanishing twin and maternal tumors cause false results"],
 r:["hCG (Beta-hCG Quantitative)","AFP (Alpha-Fetoprotein)"]},

"Alpha-Thalassemia (HBA1/HBA2) Deletions": {
 w:"Genetic test detecting deletions or mutations of the four alpha-globin genes (e.g. -α3.7 and --MED, common in the Mediterranean).",
 y:"Confirming alpha-thalassemia carriers with microcytosis, normal iron and normal HbA2, and screening couples before marriage and pregnancy.",
 p:"No preparation needed.",
 s:"Purple EDTA.",
 h:["One gene deleted: silent carrier","Two: alpha-thalassemia trait","Three: HbH disease","Four: hydrops fetalis (lethal)"],
 l:[],
 i:["Electrophoresis usually misses carriers","Point mutations need sequencing"],
 r:["Hemoglobin Electrophoresis","HbA2 & HbF Quantitation (HPLC)","CBC (Complete Blood Count)","Ferritin"]},

/* ───────── Toxicology & TDM ───────── */
"Ethanol – Blood Alcohol Level": {
 w:"Concentration of ethyl alcohol in blood.",
 y:"Evaluation of altered consciousness in the ED, explaining the osmolal gap, and legal purposes (with chain of custody).",
 p:"No preparation. For legal purposes: consent, witness and documented chain of custody.",
 s:"Grey fluoride; disinfect skin with a non-alcohol antiseptic (povidone or aqueous chlorhexidine); tube full and capped.",
 h:["Alcohol intoxication (> 300 mg/dL life-threatening)"],
 l:[],
 i:["Alcohol skin prep contaminates the sample","Plasma or serum is 10–15% higher than whole blood","Enzymatic methods are affected by high LDH and lactate"],
 r:["Serum Osmolality","Glucose (Random)"]},

"Salicylate Level": {
 w:"Blood level of aspirin (salicylic acid).",
 y:"Assessment of poisoning: tinnitus, vomiting, tachypnea and mixed acid-base disorder (respiratory alkalosis + metabolic acidosis).",
 p:"Record the time of ingestion.",
 s:"Serum (yellow), repeated every 2–4 h until it starts to fall.",
 h:["> 30 mg/dL: toxicity","> 100 mg/dL: hemodialysis"],
 l:[],
 i:["Enteric-coated preparations delay absorption → serial levels are essential","Acidosis increases brain entry at lower levels"],
 r:["Bicarbonate (Total CO₂)","Acetaminophen (Paracetamol) Level","Glucose (Random)"]},

"Benzodiazepine Screen": {
 w:"A rapid immunoassay detecting benzodiazepines or their metabolites in urine.",
 y:"Evaluation of altered consciousness and poisoning, and adherence monitoring.",
 p:"Record prescribed medications.",
 s:"Random urine (preferred) or serum.",
 h:["Benzodiazepine use (diazepam, alprazolam…)","Sertraline and efavirenz (false positives)"],
 l:[],
 i:["Many drugs such as lorazepam and clonazepam may be missed by immunoassay","Presumptive result → confirm by LC-MS/MS"],
 r:["Opiate Drug Screen (Qualitative)"]},

"Opiate Drug Screen (Qualitative)": {
 w:"An immunoassay detecting morphine and codeine in urine.",
 y:"Evaluation of poisoning (pinpoint pupils, respiratory depression) and adherence monitoring.",
 p:"Record medications.",
 s:"Random urine with specimen-integrity checks (temperature, specific gravity).",
 h:["Morphine, codeine and heroin","Poppy seeds (true positive)","Some quinolones and rifampicin (false positives)"],
 l:[],
 i:["Does not detect synthetic opioids: fentanyl, methadone, tramadol, oxycodone → dedicated assays","Confirm by LC-MS/MS before any decision"],
 r:["Morphine (Quantitative)","Fentanyl Level","Benzodiazepine Screen"]},

"Morphine (Quantitative)": {
 w:"Quantitative measurement of the morphine level.",
 y:"Monitoring high-dose therapy, poisoning and legal purposes.",
 p:"Record dose and timing.",
 s:"Serum or plasma.",
 h:["Overdose","Kidney failure (accumulation of the active metabolite M6G)"],
 l:[],
 i:["No fixed relation between level and effect because of tolerance"],
 r:["Opiate Drug Screen (Qualitative)","Creatinine"]},

"Fentanyl Level": {
 w:"Measurement of fentanyl or its metabolite norfentanyl by chromatography.",
 y:"Suspected opioid poisoning with a negative opiate screen, and adherence monitoring.",
 p:"No preparation needed.",
 s:"Plasma or urine.",
 h:["Overdose (potent at ng/mL concentrations)"],
 l:[],
 i:["The routine opiate screen never detects it","Analogues may not be detected"],
 r:["Opiate Drug Screen (Qualitative)"]},

"Cocaine Metabolite (Benzoylecgonine)": {
 w:"The main metabolite of cocaine in urine.",
 y:"Evaluation of chest pain in young people, poisoning and monitoring.",
 p:"No preparation needed.",
 s:"Random urine.",
 h:["Cocaine use within 2–4 days (longer with chronic use)"],
 l:[],
 i:["The immunoassay is highly specific","Topical anesthetic used in nasal surgery may be the source"],
 r:["Amphetamine/Methamphetamine Screen","hs-Troponin I (hs-cTnI)","CK (Creatine Kinase, Total)"]},

"Amphetamine/Methamphetamine Screen": {
 w:"An immunoassay detecting amphetamines in urine (including Captagon, widespread in the region).",
 y:"Evaluation of agitation, psychosis and poisoning, and monitoring.",
 p:"Record medications.",
 s:"Random urine.",
 h:["Amphetamines, methamphetamine, Captagon and MDMA","Common false positives: pseudoephedrine, labetalol, trazodone, bupropion, metformin"],
 l:[],
 i:["False positives are very frequent → GC-MS or LC-MS/MS confirmation is essential before any action"],
 r:["Cocaine Metabolite (Benzoylecgonine)","Cannabinoids (THC metabolites)"]},

"Cannabinoids (THC metabolites)": {
 w:"Detection of the THC-COOH metabolite in urine.",
 y:"Assessment of use and monitoring.",
 p:"No preparation needed.",
 s:"Random urine.",
 h:["Cannabis use: ~3 days for occasional use, up to 30 days or more for chronic use","Efavirenz and PPIs (false positives)"],
 l:[],
 i:["A positive result does not mean current impairment","Synthetic cannabinoids (Spice) are not detected by the routine test"],
 r:["Amphetamine/Methamphetamine Screen"]},

"Blood Lead Level": {
 w:"Lead level in whole blood (mostly inside red cells).",
 y:"Screening exposed children (old paint, some kohl and folk remedies) and workers in battery and smelting industries.",
 p:"Clean the skin thoroughly before a finger prick; venous sampling is preferred.",
 s:"Metal-free EDTA (tan or royal-blue tube).",
 h:["≥ 3.5 µg/dL in children: above reference value (CDC 2021) → investigate the source","> 45 µg/dL: chelation therapy"],
 l:[],
 i:["Skin contamination in finger-prick samples falsely raises it → confirm with a venous sample","Ordinary tubes may contain metals"],
 r:["CBC (Complete Blood Count)","Peripheral Blood Smear"]},

"Blood Mercury Level": {
 w:"Mercury level in whole blood, reflecting recent exposure to organic mercury (fish).",
 y:"Evaluation of occupational or dietary exposure, or from skin-lightening products.",
 p:"Avoid seafood for 3 days beforehand.",
 s:"Trace-metal EDTA tube (royal blue).",
 h:["Frequent consumption of large fish (tuna, swordfish)","Occupational exposure","Adulterated skin-lightening creams"],
 l:[],
 i:["Inorganic (occupational) mercury is better measured in 24-h urine"],
 r:["Blood Lead Level","Creatinine"]},

"Valproic Acid Level": {
 w:"Level of valproic acid, an antiepileptic and mood stabilizer.",
 y:"Dose adjustment, suspected toxicity and changing liver function.",
 p:"Before the morning dose (trough).",
 s:"Serum (yellow).",
 h:["> 100 µg/mL: toxicity (drowsiness, hyperammonemia)","Hypoalbuminemia raises the free fraction"],
 l:["Non-adherence","Carbapenems lower it drastically"],
 i:["Hypoalbuminemia and kidney failure → measure the free level","Protein binding is concentration-dependent"],
 r:["Ammonia","ALT (Alanine Aminotransferase)","Platelet Count","Albumin"]},

"Carbamazepine Level": {
 w:"Level of carbamazepine, used for epilepsy and trigeminal neuralgia.",
 y:"Dose adjustment, suspected toxicity (dizziness, nystagmus, diplopia) and drug interactions.",
 p:"Trough, 2–4 weeks after starting because it induces its own metabolism.",
 s:"Serum (yellow); avoid prolonged contact with gel tubes.",
 h:["Macrolides, fluconazole, verapamil and grapefruit juice"],
 l:["Auto-induction after several weeks","Phenytoin and rifampicin"],
 i:["Gel tubes absorb some drugs → separate serum promptly","HLA-B*15:02 before starting in patients of Asian ancestry (Stevens-Johnson risk)"],
 r:["Sodium (Na⁺)","CBC (Complete Blood Count)","ALT (Alanine Aminotransferase)"]},

"Phenytoin Level": {
 w:"Level of phenytoin, an antiepileptic with non-linear kinetics: a small dose increase causes a large rise.",
 y:"Dose adjustment and suspected toxicity (nystagmus, ataxia, confusion).",
 p:"Trough. At least 2 h after an IV loading dose.",
 s:"Serum (yellow).",
 h:["> 20 µg/mL: toxicity","Hypoalbuminemia and kidney failure (raised free fraction)"],
 l:["Non-adherence","Enteral tube feeding reduces absorption"],
 i:["Correct for albumin or measure free phenytoin in hypoalbuminemia","Non-linear kinetics"],
 r:["Albumin","Creatinine","Carbamazepine Level"]},

"Vancomycin (Trough)": {
 w:"Vancomycin level before a dose.",
 y:"Achieving efficacy against MRSA while avoiding nephrotoxicity. Current guidelines (2020) prefer AUC-guided dosing (400–600 mg·h/L) over trough alone.",
 p:"30 min before the fourth dose (steady state).",
 s:"Serum (yellow), with sampling time and last dose time recorded precisely.",
 h:["> 20 mg/L: nephrotoxicity risk","Kidney failure","Concomitant nephrotoxins (piperacillin-tazobactam, aminoglycosides)"],
 l:["Insufficient dose","Augmented renal clearance (young patients and burns)"],
 i:["Wrong sampling time is the commonest cause of misinterpretation","Drawing from the same line used for the infusion"],
 r:["Creatinine","Gentamicin (Trough / Peak)","Antimicrobial Susceptibility Testing (AST)"]},

"Gentamicin (Trough / Peak)": {
 w:"Gentamicin level before the dose (trough) and after it (peak).",
 y:"The peak reflects efficacy; the trough reflects the risk of renal and ototoxicity.",
 p:"Trough: 30 min before the dose. Peak: 30 min after the end of infusion.",
 s:"Serum (yellow), with times recorded precisely.",
 h:["Trough > 1–2 mg/L: risk of renal and auditory toxicity","Kidney failure"],
 l:["Low peak: insufficient efficacy"],
 i:["Once-daily dosing is monitored with a random level and nomogram (Hartford)","Drawing from the infusion line falsely raises it"],
 r:["Creatinine","Vancomycin (Trough)"]},

"Tacrolimus (Trough)": {
 w:"Level of tacrolimus, an immunosuppressant concentrated inside red cells.",
 y:"Preventing graft rejection while avoiding nephrotoxicity, neurotoxicity and diabetes.",
 p:"Before the morning dose, 12 h after the previous one (trough).",
 s:"Purple EDTA — whole blood, not plasma.",
 h:["Macrolides, azole antifungals, diltiazem, grapefruit juice","Liver disease"],
 l:["Rifampicin, phenytoin, carbamazepine, St John's wort","Diarrhea (paradoxically may increase absorption)"],
 i:["Plasma instead of whole blood gives very low values","Target range depends on the organ and time since transplant","Immunoassays also measure metabolites (higher than LC-MS/MS)"],
 r:["Creatinine","Potassium (K⁺)","Magnesium","Glucose (Fasting)"]},

"Theophylline": {
 w:"Level of theophylline, a bronchodilator with a narrow therapeutic range.",
 y:"Dose adjustment and suspected toxicity (vomiting, tachycardia, seizures).",
 p:"Trough before the dose, or 4–6 h after an extended-release dose for the peak.",
 s:"Serum (yellow).",
 h:["> 20 mg/L: toxicity","Ciprofloxacin, erythromycin and cimetidine","Heart failure and liver disease","Fever and viral infections"],
 l:["Smoking (induces metabolism)","Phenytoin and rifampicin"],
 i:["Caffeine may interfere with some methods","Seizures may occur without warning symptoms"],
 r:["Potassium (K⁺)","Glucose (Random)"]}

});

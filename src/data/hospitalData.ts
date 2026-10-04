export interface Specialty {
  id: string;
  name: string;
  category: 'joint' | 'sports' | 'trauma' | 'spine' | 'pediatric' | 'general';
  tagline: string;
  description: string;
  commonConditions: string[];
  procedures: string[];
  recoveryTimeline: string;
  hospitalAdvantage: string;
}

export interface Doctor {
  name: string;
  credentials: string;
  title: string;
  specialization: string;
  experienceYears: number;
  about: string;
  fellowships: string[];
  opdTimings: {
    days: string;
    morning: string;
    evening: string;
    sunday: string;
  };
  surgeryDays: string;
  languages: string[];
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageKey: string;
}

export interface PatientStory {
  id: string;
  patientName: string;
  age: number;
  city: string;
  condition: string;
  treatment: string;
  recoveryOutcome: string;
  quote: string;
  doctor: string;
}

export interface RehabExercise {
  id: string;
  name: string;
  category: 'knee' | 'shoulder' | 'spine' | 'hip';
  target: string;
  durationSeconds: number;
  repsRecommended: string;
  frequency: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Gentle Post-Op';
  instructions: string[];
  precautions: string[];
}

export const HOSPITAL_INFO = {
  name: "Vishnu Priya Hospital & Orthopaedic Center",
  shortName: "Vishnu Priya Hospital",
  location: "Korutla, Jagtial District, Telangana",
  address: "Near Old Bus Stand, Mancherial - Nizamabad Highway (NH-63), Korutla, Telangana 505326",
  email: "vishnupriyahospitalortho@gmail.com",
  emergencyPhone: "+91 94401 23456",
  receptionPhone: "+91 8725 252345",
  whatsappNumber: "+91 94401 23456",
  workingHours: "24 Hours Emergency & Trauma Care",
  opdHours: "Mon - Sat: 10:00 AM - 5:00 PM & 6:00 PM - 8:00 PM (Sunday Emergency Only)",
  rating: "5.0",
  ratingCount: 180,
  yearsOfExcellence: 17,
  surgeriesPerformed: "12,000+",
  patientsServed: "45,000+",
};

export const CHIEF_DOCTOR: Doctor = {
  name: "Dr. Naresh Odnala",
  credentials: "MBBS, DNB (Orthopaedics)",
  title: "Chief Orthopaedic & Joint Replacement Surgeon",
  specialization: "Joint Replacement, Arthroscopy & Complex Trauma Care",
  experienceYears: 17,
  about: "Dr. Naresh Odnala is one of Northern Telangana's most trusted and experienced orthopedic surgeons with over 17 years of dedicated clinical and surgical expertise. Having performed thousands of successful joint replacement surgeries and trauma reconstructions, Dr. Naresh is renowned for his precise surgical outcomes, compassionate bedside manner, and rapid rehabilitation protocols.",
  fellowships: [
    "Fellowship in Joint Replacement Surgery (Total Knee & Total Hip Arthroplasty)",
    "Advanced Training in Arthroscopy & Sports Medicine",
    "Certification in Complex Pelvic & Polytrauma Reconstruction",
    "Member of Indian Orthopaedic Association (IOA) & Telangana Orthopaedic Association"
  ],
  opdTimings: {
    days: "Monday to Saturday",
    morning: "10:00 AM - 05:00 PM",
    evening: "06:00 PM - 08:00 PM",
    sunday: "Emergency Only / Pre-scheduled Surgeries"
  },
  surgeryDays: "Elective Surgeries: Tuesday, Thursday, Saturday mornings; Emergencies 24/7",
  languages: ["Telugu", "Hindi", "English"]
};

export const SPECIALTIES: Specialty[] = [
  {
    id: "joint-replacement",
    name: "Joint Replacement Surgery (Arthroplasty)",
    category: "joint",
    tagline: "Pain-free movement with computer-assisted precision implants",
    description: "State-of-the-art Total Knee Replacement (TKR), Total Hip Replacement (THR), and Partial Knee Arthroplasty utilizing ultra-low friction implants. Our patient-tailored approach minimizes tissue trauma, enabling early ambulation within 24–48 hours post-surgery.",
    commonConditions: [
      "Severe Knee Osteoarthritis (Stage 3 & 4)",
      "Avascular Necrosis (AVN) of the Hip",
      "Rheumatoid Arthritis joint degeneration",
      "Severe joint stiffness, bow-legs or knock-knees",
      "Failed previous joint operations"
    ],
    procedures: [
      "High-Flexion Total Knee Replacement (TKR)",
      "Total Hip Replacement (Cemented & Uncemented)",
      "Unicondylar (Partial) Knee Arthroplasty",
      "Revision Knee & Hip Arthroplasty",
      "Fast-Track Recovery Protocol with Local Infiltration Analgesia"
    ],
    recoveryTimeline: "Walking with support on Day 1; Independent stairs navigation by Week 2; Full regular activity in 4 to 6 weeks.",
    hospitalAdvantage: "Performed in ultra-sterile Modular Laminar Flow OT with zero-infection protocols and dedicated continuous passive motion (CPM) physiotherapy."
  },
  {
    id: "arthroscopy-sports",
    name: "Arthroscopy & Sports Medicine",
    category: "sports",
    tagline: "Minimally invasive keyhole surgery for ligament & cartilage tears",
    description: "Minimally invasive keyhole procedures for sports-related injuries, ligament tears, and joint instability using high-definition arthroscopic cameras. Small incisions mean minimal blood loss, minimal scarring, and quick athletic return.",
    commonConditions: [
      "Anterior Cruciate Ligament (ACL) tear",
      "Posterior Cruciate Ligament (PCL) injury",
      "Meniscus tear (bucket handle / radial)",
      "Recurrent shoulder dislocation & labral tear (Bankart lesion)",
      "Rotator cuff tendon tears & shoulder impingement"
    ],
    procedures: [
      "HD Arthroscopic ACL / PCL Reconstruction",
      "Meniscal Repair & Partial Meniscectomy",
      "Arthroscopic Bankart & Rotator Cuff Repair",
      "Subacromial Decompression & Shoulder Stabilization",
      "Platelet-Rich Plasma (PRP) joint injections"
    ],
    recoveryTimeline: "Day-care or 24-hr admission; Normal walking in 1-2 weeks; Return to sports/heavy work in 4-6 months with guided rehab.",
    hospitalAdvantage: "HD 4K Arthroscopy equipment, anatomical graft placement, and individualized rehabilitation protocols."
  },
  {
    id: "trauma-fractures",
    name: "Complex Trauma & Polytrauma Care",
    category: "trauma",
    tagline: "24/7 rapid response for high-speed highway injuries & complex fractures",
    description: "Strategically located along NH-63, our trauma team provides immediate life-saving care and precise biological fracture fixation for poly-trauma, open compound fractures, and pelvi-acetabular injuries.",
    commonConditions: [
      "Open compound fractures with soft-tissue injury",
      "Multi-fragment complex articular fractures",
      "Femur, tibia, and humerus shaft fractures",
      "Pelvic ring and acetabulum fractures",
      "Elderly osteoporotic hip & wrist fractures",
      "Non-union and mal-united old fractures"
    ],
    procedures: [
      "Closed Interlocking Nailing (Femur & Tibia)",
      "Low-Profile Anatomical Locking Plate Fixation",
      "External Fixation & Damage Control Orthopedics",
      "Minimally Invasive Percutaneous Osteosynthesis (MIPO)",
      "Tendon, nerve & vascular repair coordination"
    ],
    recoveryTimeline: "Immediate anatomical stabilization; Progressive weight bearing guided by C-Arm radiographic union.",
    hospitalAdvantage: "On-site 24/7 High-Frequency C-Arm, Digital X-Ray, blood bank access, and round-the-clock anesthesiology standby."
  },
  {
    id: "spine-back-care",
    name: "Spine & Intervertebral Disc Care",
    category: "spine",
    tagline: "Targeted solutions for debilitating back pain, sciatica & disc disease",
    description: "Comprehensive medical and surgical solutions for acute and chronic spinal disorders. We prioritize conservative therapies, targeted spinal injections, and minimally invasive decompression when surgery is indicated.",
    commonConditions: [
      "Lumbar Disc Herniation (Slip Disc)",
      "Sciatica & Radiculopathy (Leg pain, numbness)",
      "Cervical Spondylosis (Neck pain & arm numbness)",
      "Lumbar Canal Stenosis",
      "Spondylolisthesis (Spinal instability)",
      "Osteoporotic vertebral compression fractures"
    ],
    procedures: [
      "Targeted Epidural & Transforaminal Injections",
      "Micro-Lumbar Discectomy",
      "Spinal Canal Decompression & Pedicle Screw Stabilization",
      "Vertebroplasty for painful compression fractures",
      "Core Stabilization & Spinal Physiotherapy"
    ],
    recoveryTimeline: "Conservative care: 2-3 weeks; Surgical decompression: discharge in 48-72 hours, return to desk work in 3-4 weeks.",
    hospitalAdvantage: "High-precision fluoroscopy guidance, specialized spinal instruments, and ergonomic posture rehabilitation."
  },
  {
    id: "pediatric-ortho",
    name: "Pediatric Orthopaedics & Deformities",
    category: "pediatric",
    tagline: "Gentle corrective care for growing bones and congenital conditions",
    description: "Specialized care for children and adolescents suffering from congenital bone deformities, developmental hip problems, growth plate injuries, and childhood fractures.",
    commonConditions: [
      "Congenital Clubfoot (CTEV)",
      "Knock-knees (Genu Valgum) & Bow legs (Genu Varum)",
      "Developmental Dysplasia of the Hip (DDH)",
      "Pediatric greenstick fractures & growth plate trauma",
      "Cerebral palsy gait contractures"
    ],
    procedures: [
      "Ponseti Method Serial Casting for Clubfoot",
      "Guided Growth Surgery (8-plate hemiepiphysiodesis)",
      "Pediatric Elastic Stable Intramedullary Nailing (ESIN)",
      "Closed reduction and percutaneous K-wire pinning",
      "Tendon lengthening and tendon transfers"
    ],
    recoveryTimeline: "Children heal significantly faster than adults; most pediatric fractures unite securely within 3–4 weeks.",
    hospitalAdvantage: "Child-friendly clinical ambiance, painless casting materials, and long-term developmental follow-up."
  },
  {
    id: "arthritis-regenerative",
    name: "Arthritis & Regenerative Care",
    category: "general",
    tagline: "Preserving natural joints through advanced non-surgical modalities",
    description: "Non-surgical, evidence-based joint preservation therapies for active patients with early to mid-stage osteoarthritis, tendinitis, and degenerative cartilage loss.",
    commonConditions: [
      "Early stage knee & hip osteoarthritis",
      "Chronic plantar fasciitis (heel pain)",
      "Tennis elbow & Golfer's elbow tendinopathy",
      "Shoulder rotator cuff tendinopathy",
      "Severe osteoporosis and fragile bones"
    ],
    procedures: [
      "Autologous Platelet-Rich Plasma (PRP) Injections",
      "Viscosupplementation (Hyaluronic Acid) Joint Lubrication",
      "Intra-articular Corticosteroid Pain Block",
      "DEXA Bone Mineral Density assessment & anti-osteoporotic therapy",
      "Custom orthotics and unloader knee braces"
    ],
    recoveryTimeline: "Outpatient 15-minute procedure; resume everyday activity immediately or within 24 hours.",
    hospitalAdvantage: "Centrifuge-prepared high-concentration PRP, ultrasound or anatomical guidance for exact placement."
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "modular-ot",
    title: "Modular Laminar Flow Operation Theatre",
    subtitle: "Class 10,000 Ultra-Clean Air Quality for Zero Infection",
    description: "Engineered to international surgical standards with HEPA filtration, positive pressure laminar air flow, seamless antibacterial wall cladding, and high-intensity LED surgical illuminators.",
    features: [
      "Continuous laminar airflow with 99.97% HEPA filtration",
      "Integrated High-Frequency C-Arm Fluoroscope monitor",
      "Advanced multipara anesthetic workstation and defibrillators",
      "Strict surgical scrub and autoclave sterilization protocols"
    ],
    imageKey: "modular_operation_theatre"
  },
  {
    id: "radiology-xray",
    title: "Digital Radiography & Imaging Suite",
    subtitle: "Instant High-Resolution Bone & Joint Diagnostic Scans",
    description: "High-frequency Digital DR X-Ray and C-Arm fluoroscopy systems ensuring minimal radiation exposure while delivering crystal-clear images within seconds for rapid diagnosis.",
    features: [
      "High-frequency Digital X-Ray with high contrast imaging",
      "Immediate digital scan transmission to consultation monitors",
      "Real-time intra-operative C-Arm imaging during surgery",
      "Specialized joint alignment and stress views"
    ],
    imageKey: "advanced_joint_ortho_care"
  },
  {
    id: "physio-rehab",
    title: "Advanced Physiotherapy & Rehab Gymnasium",
    subtitle: "Accelerated Post-Op Mobilization & Pain Relief",
    description: "Fully equipped orthopedic rehabilitation department staffed with licensed physiotherapists. Equipped with parallel bars, traction units, ultrasonic therapy, and Continuous Passive Motion (CPM) devices.",
    features: [
      "Automated Continuous Passive Motion (CPM) for knee recovery",
      "Short Wave Diathermy (SWD), Ultrasound & TENS therapy",
      "Gait re-education walkways and balance stabilization trainers",
      "Personalized daily home exercise program charts"
    ],
    imageKey: "physiotherapy_rehab_center"
  },
  {
    id: "inpatient-emergency",
    title: "24/7 Trauma, ICU & Inpatient Wards",
    subtitle: "Comfortable recovery spaces tailored to patient needs",
    description: "Round-the-clock emergency casualty with dedicated trauma stretchers, emergency pharmacy, oxygen supply, and a range of accommodation from deluxe AC private suites to hygienic general wards.",
    features: [
      "24/7 Casualty with dedicated trauma resuscitation beds",
      "Deluxe private suites with attendant amenities and Wi-Fi",
      "Round-the-clock nursing supervision and pain management",
      "In-house emergency pharmacy and ambulance readiness"
    ],
    imageKey: "hospital_hero_exterior"
  }
];

export const PATIENT_STORIES: PatientStory[] = [
  {
    id: "story-1",
    patientName: "M. Laxmi Bai",
    age: 64,
    city: "Metpally",
    condition: "Severe Bilateral Osteoarthritis (Unable to walk for 3 years)",
    treatment: "Bilateral Total Knee Replacement (TKR)",
    recoveryOutcome: "Walked on Day 2 post-surgery; climbed stairs independently at Week 3",
    quote: "For years I couldn't even walk to the temple due to unbearable knee pain. Dr. Naresh gave me a new lease of life. Both my knee surgeries went smoothly and the staff took care of me like family. Today I walk with zero pain!",
    doctor: "Dr. Naresh Odnala"
  },
  {
    id: "story-2",
    patientName: "R. Venkatesh",
    age: 27,
    city: "Korutla",
    condition: "High-speed bike accident: Compound Femur Fracture",
    treatment: "Emergency Debridement + Closed Interlocking Nailing",
    recoveryOutcome: "Complete bone union in 10 weeks; full leg strength restored",
    quote: "When I met with an accident on NH63, I was brought to Vishnu Priya Hospital in critical pain. Dr. Naresh performed emergency interlocking nailing that very evening. Within 2 months I was walking normally without a limp.",
    doctor: "Dr. Naresh Odnala"
  },
  {
    id: "story-3",
    patientName: "K. Rajeshwar",
    age: 34,
    city: "Jagtial",
    condition: "Complete ACL & Meniscal Tear from Kabaddi tournament",
    treatment: "Arthroscopic 4K ACL Reconstruction & Meniscal Repair",
    recoveryOutcome: "Resumed active jogging in 3 months; returned to training",
    quote: "I thought my sports days were over. Dr. Naresh's keyhole arthroscopy technique left tiny incisions with no severe pain. The rehab protocol designed by their physiotherapy team was top-notch.",
    doctor: "Dr. Naresh Odnala"
  }
];

export const REHAB_EXERCISES: RehabExercise[] = [
  {
    id: "ex-quad-sets",
    name: "Isometric Quad Sets",
    category: "knee",
    target: "Quadriceps strength & knee extension stability",
    durationSeconds: 30,
    repsRecommended: "10 repetitions, hold each for 5-8 seconds",
    frequency: "3 times daily",
    difficulty: "Beginner",
    instructions: [
      "Lie flat on your back or sit upright with your operative leg straight out in front of you.",
      "Place a small rolled hand-towel under your ankle or knee.",
      "Tighten the muscles on top of your thigh by pressing the back of your knee downward firmly toward the bed.",
      "Hold the tight muscle contraction for 5 to 8 seconds while breathing smoothly.",
      "Slowly relax for 3 seconds, then repeat."
    ],
    precautions: [
      "Do not hold your breath during the muscle squeeze.",
      "Stop if you feel sharp anterior joint pain rather than muscular effort."
    ]
  },
  {
    id: "ex-ankle-pumps",
    name: "Circulatory Ankle Pumps",
    category: "knee",
    target: "Calf blood circulation & DVT (blood clot) prevention",
    durationSeconds: 45,
    repsRecommended: "20 to 30 repetitions every hour while awake",
    frequency: "Hourly post-op",
    difficulty: "Beginner",
    instructions: [
      "Lie comfortably with legs extended or elevated.",
      "Point your toes away from you as far as comfortable (like stepping on a gas pedal).",
      "Pull your toes and foot backward towards your shin as high as possible.",
      "Perform rhythmic, smooth pumping motions back and forth."
    ],
    precautions: [
      "Essential immediately after surgery to maintain healthy venous flow.",
      "Report any sudden calf redness, heat or swelling to the nursing team."
    ]
  },
  {
    id: "ex-straight-leg-raise",
    name: "Straight Leg Raise (SLR)",
    category: "knee",
    target: "Hip flexors and quadriceps co-activation",
    durationSeconds: 40,
    repsRecommended: "10 reps per set, 2-3 sets per day",
    frequency: "Twice daily",
    difficulty: "Intermediate",
    instructions: [
      "Lie flat on your back. Bend your non-operated knee so your foot rests flat on the bed.",
      "Keep your operated leg completely straight with toes pointing towards the ceiling.",
      "Tighten your thigh muscles, then lift the straight leg about 10-12 inches off the bed.",
      "Hold for 3 to 5 seconds at the peak without arching your lower back.",
      "Slowly and gently lower the leg back down."
    ],
    precautions: [
      "Do not allow the knee to sag or bend while raising the leg.",
      "If you cannot lift the leg without knee flexion, perform quad sets first."
    ]
  },
  {
    id: "ex-pendulum-shoulder",
    name: "Codman's Shoulder Pendulum",
    category: "shoulder",
    target: "Passive shoulder joint distraction & stiffness relief",
    durationSeconds: 60,
    repsRecommended: "Gentle swinging for 60 seconds",
    frequency: "3 times daily",
    difficulty: "Gentle Post-Op",
    instructions: [
      "Lean forward and support your non-injured arm on a sturdy table or chair.",
      "Let your injured arm dangle freely towards the floor.",
      "Gently sway your torso from side to side or in small circles to allow momentum to swing the arm.",
      "Do not actively use your shoulder muscles; let gravity and body sway move the arm."
    ],
    precautions: [
      "Avoid forcing the motion beyond comfortable boundaries.",
      "Keep back straight and knees slightly bent to prevent lumbar strain."
    ]
  },
  {
    id: "ex-cat-camel-spine",
    name: "Spinal Cat-Camel Mobilization",
    category: "spine",
    target: "Thoracolumbar spinal flexibility & facet joint easing",
    durationSeconds: 60,
    repsRecommended: "10 smooth cycles",
    frequency: "Morning and evening",
    difficulty: "Beginner",
    instructions: [
      "Start on all fours with hands under shoulders and knees directly below hips.",
      "Gently arch your back upwards towards the ceiling, tucking your chin toward your chest (Cat position). Hold for 3 seconds.",
      "Slowly let your abdomen dip toward the floor, looking gently upwards (Camel position). Hold for 3 seconds.",
      "Move smoothly between both positions without jerky transitions."
    ],
    precautions: [
      "Avoid extreme downward extension if you have active spinal stenosis.",
      "Never push into painful ranges."
    ]
  }
];

export const KNEE_ASSESSMENT_QUESTIONS = [
  {
    id: "q1",
    question: "How would you describe the pain in your knee during normal walking?",
    options: [
      { text: "No pain or very mild after long walks", points: 0 },
      { text: "Mild pain that comes and goes after 15-20 minutes", points: 1 },
      { text: "Moderate pain, limits walking to short errands", points: 2 },
      { text: "Severe pain, cannot walk more than 50 meters without resting", points: 3 }
    ]
  },
  {
    id: "q2",
    question: "Do you experience pain when climbing up or descending stairs?",
    options: [
      { text: "No difficulty or pain", points: 0 },
      { text: "Mild pain, manage without holding railing", points: 1 },
      { text: "Need handrail support, one step at a time", points: 2 },
      { text: "Unable to climb stairs or requires physical assistance", points: 3 }
    ]
  },
  {
    id: "q3",
    question: "Does your knee ache or disturb your sleep during the night?",
    options: [
      { text: "Never disturbs sleep", points: 0 },
      { text: "Only on days with excessive physical exertion", points: 1 },
      { text: "Wakes me up occasionally when changing sleeping positions", points: 2 },
      { text: "Constant night pain that severely disrupts sleep most nights", points: 3 }
    ]
  },
  {
    id: "q4",
    question: "How severe is morning stiffness in your knee upon waking?",
    options: [
      { text: "No stiffness", points: 0 },
      { text: "Brief stiffness lasting under 15 minutes that eases with movement", points: 1 },
      { text: "Stiffness lasting 30 to 60 minutes", points: 2 },
      { text: "Severe stiffness lasting over an hour or throughout the day", points: 3 }
    ]
  },
  {
    id: "q5",
    question: "Have you noticed any visible swelling, clicking sounds, or knee bowing?",
    options: [
      { text: "No swelling or visible change", points: 0 },
      { text: "Occasional clicking or mild swelling after exertion", points: 1 },
      { text: "Frequent swelling with knee feeling unstable or giving way", points: 2 },
      { text: "Visible bow-leg deformity, knee locked or swollen constantly", points: 3 }
    ]
  }
];

export const INSURANCE_PARTNERS = [
  "Star Health & Allied Insurance",
  "HDFC ERGO General Insurance",
  "ICICI Lombard",
  "Bajaj Allianz",
  "Care Health Insurance (Religare)",
  "New India Assurance",
  "United India Insurance",
  "National Insurance",
  "Medi Assist TPA",
  "Vidal Health TPA",
  "Paramount TPA",
  "Heritage Health TPA",
  "Government Health Schemes / Aarogyasri Assistance Desk"
];

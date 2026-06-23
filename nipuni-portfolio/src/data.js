// ─── All portfolio data in one place ─────────────────────────────────────────
// Edit this file to update your portfolio content.

export const personalInfo = {
  name: 'Nipuni Karunanayake',
  title: 'Data Science Undergraduate',
  subtitle: 'Aspiring Data Scientist · AI/ML Enthusiast',
  location: 'Kalugamuwa, Kurunegala, Sri Lanka',
  email: 'nipunikarunanayake2@gmail.com',
  phone: '+94 706 488 393',
  linkedin: 'https://www.linkedin.com/in/nipuni-karunanayake-2ab733392',
  github: 'https://github.com/IT24103084',
  bio: [
    "I'm a motivated second-year Data Science undergraduate at SLIIT, building a strong foundation in programming, machine learning, and analytical computing.",
    'My interests span machine learning, artificial intelligence, data analysis, and full-stack web development. I enjoy tackling real-world problems through hands-on projects — from training ML models to building complete web systems.',
    'I am passionate about leveraging data to create meaningful solutions and continuously growing my technical and professional skill set.',
  ],
}

export const skillCategories = [
  {
    icon: '💻',
    title: 'Programming Languages',
    color: 'rgba(124,106,247,0.12)',
    borderColor: 'rgba(124,106,247,0.2)',
    skills: ['Python', 'Java', 'C', 'JavaScript'],
  },
  {
    icon: '🤖',
    title: 'Data Science & ML',
    color: 'rgba(176,110,243,0.12)',
    borderColor: 'rgba(176,110,243,0.2)',
    skills: ['Machine Learning', 'Artificial Intelligence', 'Data Analysis', 'Scikit-learn', 'TensorFlow', 'Pandas', 'OOP'],
  },
  {
    icon: '🌐',
    title: 'Web Development',
    color: 'rgba(79,195,247,0.12)',
    borderColor: 'rgba(79,195,247,0.2)',
    skills: ['HTML', 'CSS', 'JavaScript', 'Spring Boot', 'JSP'],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    color: 'rgba(240,98,146,0.12)',
    borderColor: 'rgba(240,98,146,0.2)',
    skills: ['MySQL', 'MongoDB', 'SQL Server', 'SQL'],
  },
  {
    icon: '🛠️',
    title: 'Tools & Platforms',
    color: 'rgba(76,175,80,0.12)',
    borderColor: 'rgba(76,175,80,0.2)',
    skills: ['Google Colab', 'VS Code', 'PyCharm', 'Git', 'GitHub'],
  },
  {
    icon: '💡',
    title: 'Soft Skills',
    color: 'rgba(255,183,77,0.12)',
    borderColor: 'rgba(255,183,77,0.2)',
    skills: ['Problem Solving', 'Analytical Thinking', 'Leadership', 'Teamwork', 'Communication', 'Adaptability', 'Time Management', 'Critical Thinking'],
  },
]

export const softSkills = [
  'Problem Solving',
  'Analytical Thinking',
  'Leadership',
  'Teamwork',
  'Communication',
  'Adaptability',
  'Time Management',
  'Critical Thinking',
]

export const careerHighlights = [
  {
    title: 'Data-Driven Decision Making',
    description: 'Strong foundation in analyzing data and deriving actionable insights for informed decisions.',
  },
  {
    title: 'Full-Stack Development',
    description: 'Proficient in building end-to-end solutions from data analysis to web application deployment.',
  },
  {
    title: 'Machine Learning Expertise',
    description: 'Hands-on experience training, evaluating, and deploying ML models for real-world problems.',
  },
  {
    title: 'Collaborative Problem Solver',
    description: 'Excellent at working in teams to tackle complex technical and business challenges effectively.',
  },
]

export const projects = [
  {
    id: 1,
    icon: '🏋️',
    iconBg: 'rgba(124,106,247,0.12)',
    iconBorder: 'rgba(124,106,247,0.2)',
    title: 'Smart Gym Membership Management System with AI Churn Prediction',
    description:
      'A web-based system to manage gym memberships, attendance tracking, and payments. Trained ML models in Google Colab to predict member churn and integrated predictions into the system to support data-driven retention decisions. MongoDB used for data management.',
    timeline: 'february - may 2026',
    image: '/projects/gym.jpg',
    features: [
      'Membership management with automated billing and payment tracking',
      'Real-time attendance tracking and member statistics dashboard',
      'ML-powered churn prediction using member behavior data',
      'Data-driven insights to support retention strategies',
    ],
    tech: ['Python', 'Machine Learning', 'MongoDB', 'HTML/CSS/JS', 'Google Colab'],
    github: 'https://github.com/dinudisachithma/Gym-Management-System',
  },
  {
    id: 2,
    icon: '❤️',
    iconBg: 'rgba(240,98,146,0.12)',
    iconBorder: 'rgba(240,98,146,0.2)',
    title: 'Heart Disease Prediction System',
    description:
      'A machine learning web app to predict heart disease possibility using selected health features. Implemented a Random Forest model with prediction confidence scores and risk level classification. Added PDF/CSV report download, health tips, and prediction history functionality. Deployed using Streamlit and managed source code with GitHub.',
    timeline: 'May 2026',
    image: '/projects/heart-disease-placeholder.svg',
    features: [
      'Random Forest ML model with 95%+ accuracy for disease prediction',
      'Interactive UI for health parameter input and instant predictions',
      'PDF/CSV report generation for personalized health insights',
      'Streamlit deployment for live web application access',
    ],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Joblib', 'ReportLab', 'Machine Learning'],
    github: 'https://github.com/IT24103084/HeartDiseasePrediction',
    demo: 'https://heartdiseasepredictiongit-hfxo8fsd9tungesxsfwjhw.streamlit.app/',
  },
  {
    id: 3,
    icon: '💳',
    iconBg: 'rgba(79,195,247,0.12)',
    iconBorder: 'rgba(79,195,247,0.2)',
    title: 'Credit Risk Prediction System',
    description:
      'A credit risk prediction model to classify loan applicants as low-risk or high-risk. Performed data cleaning, EDA, visualization, and feature engineering using Jupyter Notebooks. Created a custom risk score feature based on income, loan percentage, interest rate, default history, and employment length. Trained and compared Logistic Regression and Random Forest models.',
    timeline: 'Jun 2026',
    image: '/projects/credit-risk-placeholder.svg',
    features: [
      'Comprehensive EDA with Matplotlib & Seaborn visualizations',
      'Custom risk scoring based on 5+ financial parameters',
      'Comparison of Logistic Regression and Random Forest models',
      'Feature engineering to improve prediction accuracy',
    ],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter Notebook', 'Matplotlib', 'Seaborn', 'Machine Learning'],
    github: 'https://github.com/IT24103084/DecodeLabs-Internship',
  },
  {
    id: 4,
    icon: '🫁',
    iconBg: 'rgba(176,110,243,0.12)',
    iconBorder: 'rgba(176,110,243,0.2)',
    title: 'Lung Cancer Survival Prediction System',
    description:
      'An ML system to predict lung cancer patient survival outcomes. Implemented SVM, Logistic Regression, Decision Tree, Random Forest, Naive Bayes, and k-NN. Performed data preprocessing, feature engineering, model evaluation, and handled class imbalance via class weighting.',
    timeline: 'Aug – Oct 2025',
    image: '/projects/lung-cancer-placeholder.svg',
    features: [
      'Comparison of 6 machine learning algorithms',
      'Data preprocessing and feature engineering for healthcare data',
      'Class imbalance handling using weighted training',
      'Model evaluation using multiple metrics (precision, recall, F1)',
    ],
    tech: ['Python', 'Scikit-learn', 'SVM', 'Random Forest', 'k-NN'],
    github: 'https://github.com/IT24103014/2025_Y2_S1_KUR_07',
  },
  {
    id: 5,
    icon: '🚗',
    iconBg: 'rgba(76,175,80,0.12)',
    iconBorder: 'rgba(76,175,80,0.2)',
    title: 'AutoCarePro Vehicle Service Management System',
    description:
      'A vehicle service tracking and maintenance management system. Built a responsive frontend with seamless backend integration. MongoDB used to store vehicle data and service history. Designed for service centers to manage vehicle records and maintenance workflows.',
    timeline: 'Feb – Jun 2025',
    image: '/projects/autocarepro.jpg',
    features: [
      'Vehicle registration and lifecycle tracking system',
      'Service history and maintenance record management',
      'Responsive UI with full backend integration',
      'MongoDB persistence for reliable data storage',
    ],
    tech: ['Java', 'Spring Boot', 'HTML/CSS/JS', 'MongoDB'],
    github: 'https://github.com/IT24103084/AutoCarePro',
  },
]

export const certifications = [
  {
    icon: '🔐',
    issuer: 'CompTIA',
    title: 'CompTIA Security+ (SY0-601 / SY0-701)',
    desc: 'Information Security Foundations — covering cybersecurity concepts, threats, and network security principles.',
    // Place your certificate image in /public/certificates/ and update the filename below.
    // Example: if you add cert1.jpg → image: '/certificates/cert1.jpg'
    image: '/certificates/comptia-security.jpg',
  },
  {
    icon: '🎨',
    issuer: 'University of Moratuwa',
    title: 'Web Design for Beginners',
    desc: 'Fundamentals of web design, UI principles, and creating visually appealing web pages.',
    image: '/certificates/uom-web-design.jpg',
  },
  {
    icon: '🌐',
    issuer: 'University of Moratuwa',
    title: 'Front-End Web Development',
    desc: 'Practical front-end development using HTML, CSS, and JavaScript for interactive web applications.',
    image: '/certificates/uom-frontend.jpg',
  },
  {
    icon: '🤖',
    issuer: 'SLIIT',
    title: 'AI/ML Engineer Stage 1',
    desc: 'Introduction to AI and ML concepts, algorithms, and practical implementation using Python.',
    issued: '2026-01-10',
    certId: 'n3td6bzest',
    image: '/certificates/sliit-aiml-1.jpg',
  },
  {
    icon: '🧠',
    issuer: 'SLIIT',
    title: 'AI/ML Engineer Stage 2',
    desc: 'Advanced AI/ML topics building on foundational concepts with hands-on model building exercises.',
    issued: '2026-01-14',
    certId: 've5spx3bbl',
    image: '/certificates/sliit-aiml-2.jpg',
  },
  {
    icon: '🏆',
    issuer: 'SLIIT',
    title: "Dean's List - Year 1 Semester 2",
    desc: 'Certificate of Excellence in recognition of academic excellence in the 1st Year 2nd Semester of 2025.',
    issued: '2025',
    certId: 'DL 11252',
    image: '/certificates/sliit-deans-y1s2.jpg',
  },
  {
    icon: '⭐',
    issuer: 'SLIIT',
    title: "Dean's List - Year 2 Semester 1",
    desc: 'Certificate of Excellence in recognition of academic excellence in the 2nd Year 1st Semester of 2025.',
    issued: '2025',
    certId: 'DL 12512',
    image: '/certificates/sliit-deans-y2s1.jpg',
  },
  {
    icon: '⭐',
    issuer: 'Simplilearn',
    title: "Introduction to Data Science",
    desc: 'Foundational course covering statistics, data analysis fundamentals, and an introduction to machine learning concepts within the data science workflow.',
    issued: '2026',
    certId: '10350175',
    image: '/certificates/simplilearn_certificate.jpg',
  },
]

export const education = [
  {
    period: '2024 – 2028',
    degree: 'BSc (Hons) in Data Science',
    school: 'Sri Lanka Institute of Information Technology (SLIIT)',
    desc: 'Specializing in data science, machine learning, artificial intelligence, software engineering, and analytical computing. Currently in Year 2 with hands-on project experience in ML and full-stack development.',
    badge: '🎓 Undergraduate · Year 2 of 4',
    accent: '#7c6af7',
  },
  {
    period: 'Completed',
    degree: 'GCE Advanced Level (A/L)',
    school: 'Maliyadeva Balika Vidyalaya',
    desc: 'Physical Science Stream — Combined Mathematics, Physics, and Chemistry. Built a strong analytical foundation for data science and computing studies.',
    badge: '📐 Physical Science Stream',
    accent: '#b06ef3',
  },
  {
    period: 'Completed',
    degree: 'GCE Ordinary Level (O/L)',
    school: 'Maliyadeva Balika Vidyalaya',
    desc: 'Completed secondary education with strong academic performance across core subjects.',
    badge: '🏫 Secondary Education',
    accent: '#4fc3f7',
  },
]

export const careerGoals = {
  vision: 'Aspiring Data Science professional focused on building practical ML solutions and AI applications. Specializing in predictive modeling, data analytics, and full-stack development with strong emphasis on cybersecurity and software engineering fundamentals.',
  focusAreas: ['Data Science & ML', 'Predictive Modeling', 'Data Analytics', 'Web Development'],
  milestones: [
    {
      id: 1,
      title: 'Build credible data science projects',
      desc: 'Create production-ready ML models and data analysis projects that demonstrate real-world problem-solving capabilities.',
      status: 'Ongoing',
      icon: '📊',
    },
    {
      id: 2,
      title: 'Complete internship readiness',
      desc: 'Strengthen technical foundation and prepare for professional internship opportunities in data science or software engineering.',
      status: 'In Progress',
      icon: '🚀',
    },
    {
      id: 3,
      title: 'Advance ML expertise',
      desc: 'Deepen knowledge in advanced machine learning techniques, deep learning, and AI implementation.',
      status: 'Planned',
      icon: '🧠',
    },
    {
      id: 4,
      title: 'Transition to professional role',
      desc: 'Secure a full-time position as a junior data scientist or software engineer post-graduation.',
      status: 'Future',
      icon: '💼',
    },
  ],
}

export const careerTimeline = [
  {
    year: '2024',
    title: 'Started IT degree at SLIIT',
    desc: 'Began BSc in Information Technology specialized in Data Science. Built foundation in programming, databases, and computer systems.',
    milestone: 'Phase 1',
  },
  {
    year: '2025',
    title: 'Strengthened technical skills',
    desc: 'Completed multiple ML projects, earned AI/ML certifications, improved Java, Python, and database skills through coursework and personal projects.',
    milestone: 'Phase 2',
  },
  {
    year: 'June 2026',
    title: 'Open to internships',
    desc: 'Ready for full-time internship opportunities in data science, cybersecurity, SOC, or software engineering roles.',
    milestone: 'Phase 3',
  },
  {
    year: 'Future',
    title: 'Continue professional growth',
    desc: 'Transition into full-time data science or software engineering role. Continue developing expertise in ML, data analytics, and system design.',
    milestone: 'Phase 4',
  },
]

export const learningPath = {
  stats: {
    certifications: 7,
    inProgress: 2,
    hoursLearning: '∞',
    platformsUsed: '8+',
  },
  platforms: [
    'Coursera',
    'Hack The Box',
    'TryHackMe',
    'LinkedIn Learning',
    'Udemy',
    'GitHub Learning',
  ],
  currentLearning: [
    {
      title: 'Advanced Machine Learning',
      platform: 'Coursera',
      status: 'In Progress',
      progress: 65,
    },
    {
      title: 'Cybersecurity Fundamentals',
      platform: 'Hack The Box',
      status: 'Active Learner',
      progress: 45,
    },
  ],
}


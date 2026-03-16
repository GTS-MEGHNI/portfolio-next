export interface Project {
    title: string
    description: string
    metric?: string
    stack: string[]
    badge?: 'Client work' | 'Research' | 'Freelance' | 'Academic' | 'Open Source'
    url?: string
}

export const projects: Project[] = [
    {
        title: 'TM Agency — Credit & Benefits Platform',
        description:
            'Developed the backend and backoffice dashboard for a platform managing credit allocation to beneficiaries through enterprise conventions. Beneficiaries can spend allocated credits on physical goods or services via a mobile app, while the backoffice provides tools for managing enterprises, conventions, beneficiaries, and transaction tracking.',
        stack: ['Laravel', 'PostgreSQL'],
        badge: 'Client work',
    },
    {
        title: 'QR Gift Management System',
        description:
            'Developed a QR-based gift management system allowing seamless generation, distribution, and redemption of gifts via QR codes. Includes an admin dashboard for managing gift campaigns, tracking redemptions, and overseeing distribution operations.',
        stack: ['Laravel', 'MySQL'],
        badge: 'Client work',
    },
    {
        title: 'Corporate Portal Deployment & DevOps',
        description:
            'Led deployment and DevOps for a corporate portal by architecting system infrastructure with a focus on firewalls and reverse proxies. Streamlined operations and improved consistency through automation of package installations and application deployments using shell scripts.',
        stack: ['Linux', 'Docker', 'Nginx', 'Bash'],
        badge: 'Client work',
    },
    {
        title: 'Digital Academy Deployment & DevOps',
        description:
            'Led deployment and DevOps for a digital academy platform by architecting system infrastructure with a focus on firewalls and reverse proxies. Streamlined operations and improved consistency through automation of package installations and application deployments using shell scripts.',
        stack: ['Linux', 'Docker', 'Nginx', 'Bash'],
        badge: 'Client work',
        url: 'https://mobilis.dz/',
    },
    {
        title: 'Quality Control Dashboard',
        description:
            'Full-stack Laravel application for an industrial quality control system built with multitenancy support, Redis caching, and designed for horizontal scaling with multiple app instances.',
        stack: ['Laravel', 'Nginx', 'SQL Server', 'Redis', 'Docker'],
        badge: 'Client work',
        url: 'https://www.sgt-pet.com/sgt-algerie',
    },
    {
        title: 'Loan Transactions & Backoffice API',
        description:
            'Developed a comprehensive API to handle daily online transactions and backoffice management operations. Supports secure transaction processing, user authentication, role-based access control, and seamless integration with front-end applications and third-party services.',
        stack: ['Laravel', 'Nginx', 'SQL Server', 'Docker', 'Redis', 'REST API'],
        badge: 'Client work',
        url: 'https://www.angem.dz',
    },
    {
        title: 'QHSE Management System',
        description:
            'Developed a RESTful API for a QHSE system enabling users to submit hazard reports via a mobile app, with an admin web interface for hazard management, monitoring, and reporting. Supports secure data handling, user authentication, and role-based access control.',
        stack: ['Laravel', 'Nginx', 'Linux', 'SQL Server', 'REST API'],
        badge: 'Client work',
        url: 'https://sarpi.dz',
    },
    {
        title: 'Clinic Meal Ticketing System',
        description:
            'Developed a system for clinic employees to scan QR codes and print meal tickets at self-service terminals. Included an admin dashboard for managing ticket records, generating usage statistics, and overseeing meal distribution operations.',
        stack: ['Laravel', 'MySQL', 'Node.js'],
        badge: 'Client work',
        url: 'https://www.cliniquekhentouche.com/',
    },
    {
        title: 'Student Medical Records Management System',
        description:
            'Continued development and enhancement of an existing full-stack application managing student medical files and records. Improved the secure admin dashboard with features for better data management, user role control, and compliance with privacy standards.',
        stack: ['Laravel', 'MySQL'],
        badge: 'Client work',
        url: 'https://www.ens-kouba.dz/arabic',
    },
    {
        title: 'Natural Beauty Products E-commerce',
        description:
            'Developed the full-stack customer website and admin dashboard for a natural beauty products brand, managing product listings and inventory. Delivered a responsive, SEO-friendly platform to enhance user experience and streamline business operations.',
        stack: ['Laravel', 'MySQL'],
        badge: 'Freelance',
        url: 'https://jf-larose.com',
    },
    {
        title: 'Bio Groupe Website & Backoffice System',
        description:
            'Built a full-stack website and backoffice system for a laboratory group, providing an online platform alongside an admin dashboard for managing content, operations, and business workflows efficiently.',
        stack: ['Laravel', 'MySQL'],
        badge: 'Freelance',
        url: 'https://laboratoiretarzaali.com',
    },
    {
        title: 'Future Power Store Website & Backoffice',
        description:
            'Developed a full-stack e-commerce website and backoffice system for an electrical equipment distributor. The platform enables online product browsing and purchase, complemented by an admin dashboard for inventory and order management.',
        stack: ['Laravel', 'MySQL'],
        badge: 'Freelance',
        url: 'https://www.futurepowerstore.com',
    },
    {
        title: 'Felhanout — Restaurant Deals Platform',
        description:
            'Developed the backend for B2B and B2C restaurant deal applications. The B2B side equips restaurant owners with tools to manage discounts, launch loyalty programs, and create group-buying offers. The customer-facing app offers discovery of restaurants, exclusive deals, and seamless ordering.',
        stack: ['Laravel', 'MySQL', 'REST API'],
        badge: 'Freelance',
        url: 'https://www.felhanout.dz',
    },
    {
        title: 'Sihaclub — Fitness & Wellness Platform',
        description:
            'Developed the backend for a web-based fitness platform serving clients and administrators. Offers personalised workout and nutrition programs across weight gain, weight loss, and maintenance categories. Backoffice enables management of user profiles, dietary plans, and program categories.',
        stack: ['Laravel', 'MySQL', 'Linux', 'REST API'],
        badge: 'Freelance',
        url: 'https://sihaclub.com',
    },
    {
        title: 'Jexury — Online Jewelry Platform',
        description:
            'Developed the backend for an online jewelry sales platform supporting both customers and administrators. The customer app allows browsing, searching, and purchasing jewelry items. The backoffice provides tools for managing product inventory, categories, orders, and promotions.',
        stack: ['Laravel', 'MySQL', 'Linux', 'REST API'],
        badge: 'Freelance',
        url: 'https://www.jexury.com',
    },
    {
        title: 'Numisky — Algeria Tourism Platform',
        description:
            'Developed the client-side of a web-based tourism platform focused on Algeria, enabling users to explore local destinations, discover attractions, and access travel information seamlessly.',
        stack: ['Laravel', 'MySQL', 'Linux'],
        badge: 'Freelance',
        url: 'https://www.numisky.org',
    },
    /*{
        title: 'AI Citation Prediction',
        description:
            'Developed a deep learning solution for a national research center to forecast future citation counts for scientific publications using neural networks and data analysis pipelines.',
        stack: ['Database Design'],
        badge: 'Research',
        url: 'https://www.cerist.dz',
    },
    {
        title: 'SAT-3 Solver',
        description:
            'Developed a SAT-3 solver using Java and JavaFX, focusing on efficient algorithm design and a user-friendly interface. The application allows users to input logical formulas and quickly determine satisfiability.',
        stack: [],
        badge: 'Academic',
        url: 'https://github.com/GTS-MEGHNI/3-SAT',
    },
    {
        title: 'SNDL Log Analyzer',
        description:
            'Developed a log analysis tool for a national digital library platform performing detailed information extraction from log files. Enables efficient identification of patterns, errors, and system insights to support monitoring and decision-making.',
        stack: ['MySQL'],
        badge: 'Open Source',
        url: 'https://github.com/GTS-MEGHNI/SNDL-LOG-ANALYZER',
    },
    /*{
        title: 'Compact Compiler',
        description:
            'Developed a compact compiler in C tailored for educational purposes, demonstrating understanding of programming language concepts, parsing, and code generation.',
        stack: [],
        badge: 'Academic',
        url: 'https://github.com/GTS-MEGHNI/small-compiler',
    },
    {
        title: 'Recipe Lookup',
        description:
            'Developed a recipe lookup application using Vue.js, integrating TheMealDB API to provide comprehensive recipe data. Users can search, browse, and view detailed recipes with an intuitive and responsive interface.',
        stack: [],
        badge: 'Open Source',
        url: 'https://github.com/GTS-MEGHNI/recipe-finder',
    },
    {
        title: 'Lychat — Real-Time Chat App',
        description:
            'Developed a real-time chat application with Vue.js on the front end and Laravel on the back end, enabling instant messaging with an intuitive interface and responsive design.',
        stack: ['Laravel', 'MySQL', 'WebSockets'],
        badge: 'Open Source',
        url: 'https://github.com/GTS-MEGHNI/lychat',
    },*/
]
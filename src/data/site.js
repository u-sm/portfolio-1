// All page content lives here. Facts come from Usman's resume (October 2026).

export const person = {
    name: 'Usman Ali Khan',
    role: 'Backend engineer',
    city: 'Kuala Lumpur',
    email: 'usmank+portfolio@outlook.in',
    github: 'https://github.com/u-sm',
    githubHandle: 'github.com/u-sm',
    linkedin: 'https://linkedin.com/in/usmank-x',
    linkedinHandle: 'linkedin.com/in/usmank-x',
    resume: '/Usman-Ali-Khan-Resume.pdf',
};

export const projects = [
    {
        id: 'cubesat',
        name: 'CubeSat Control',
        disciplines: 'Rust · real-time',
        period: 'Jul to Sep 2025',
        summary:
            'A satellite control simulation in Rust. An onboard control system and a ground station trade telemetry and commands over TCP.',
        detail:
            'Tasks run by priority, pinned to CPU cores and fed through lock-free queues, aiming for sub-millisecond jitter.',
        stack: 'Rust, Tokio, TCP, Cargo workspaces',
        links: [{ label: 'Source on GitHub', href: 'https://github.com/u-sm/sg-control-rts' }],
        media: {
            kind: 'video',
            src: '/found/cubesat-clip.mp4',
            poster: '/found/cubesat-clip-poster.jpg',
            alt: 'A shoebox-sized CubeSat drifting away from the International Space Station above the Earth.',
            caption: 'A CubeSat leaves the International Space Station, 2017.',
        },
    },
    {
        id: 'reservedesk',
        name: 'ReserveDesk',
        disciplines: 'Next.js · Postgres',
        period: 'Oct 2025 to Feb 2026',
        summary:
            'My final-year project: room and resource booking for a university, built solo and live today.',
        detail:
            'It catches clashing bookings before they reach an admin, keeps each club behind Postgres row-level security, and gives staff one place to approve requests. Try the clash check beside this.',
        stack: 'TypeScript, Next.js, Supabase, PostgreSQL',
        links: [
            { label: 'Open the live site', href: 'https://reservedesk.vercel.app' },
            { label: 'Source', href: 'https://github.com/u-sm/reservedesk' },
        ],
        media: { kind: 'live' },
    },
    {
        id: 'aspectly',
        name: 'Aspectly',
        disciplines: 'Python · Cloud Run',
        period: 'Dec 2025 to now',
        summary:
            'A video-creative product I am building now. People design branded videos in React, and a render pipeline turns them into files.',
        detail:
            'Remotion renders on dedicated workers on Google Cloud Run, which I monitor and debug. An AI agent drafts much of the code; I review every change before it ships.',
        stack: 'Python, FastAPI, React, Remotion, Google Cloud Run',
        links: [],
        media: {
            kind: 'image',
            src: '/found/film-joining-room-1914.jpg',
            w: 1862,
            h: 1286,
            alt: 'Women at long tables splicing reels of motion picture film by hand.',
            caption: 'Joining film by hand, Lubin studio, Philadelphia, 1914.',
            position: '60% 40%',
        },
    },
    {
        id: 'fruit',
        name: 'Fruit Factory',
        disciplines: 'Java · threads',
        period: 'Aug to Nov 2024',
        summary:
            'A factory line in Java where every stage runs on its own thread and hands fruit on through bounded buffers.',
        detail:
            'Locks and monitors keep it free of races and deadlocks. Simulated machine failures test whether the line recovers under contention.',
        stack: 'Java, concurrency, object-oriented design',
        links: [],
        media: {
            kind: 'image',
            src: '/found/fruit-packing-1912.jpg',
            w: 1920,
            h: 1258,
            alt: 'Workers packing fruit into wooden crates along a line in a barn-like packing house.',
            caption: 'A fruit packing line, Oregon, 1912.',
            position: '55% 50%',
        },
    },
    {
        id: 'defilance',
        name: 'DeFiLance',
        disciplines: 'Solidity · Ethereum',
        period: 'Team project',
        summary:
            'A freelancing marketplace with no broker in the middle. Contracts on Ethereum hold the payment in escrow.',
        detail:
            'Money is released milestone by milestone as work is accepted, and a TypeScript front end talks to the contracts.',
        stack: 'Solidity, Hardhat, TypeScript, Ethereum',
        links: [{ label: 'Source on GitHub', href: 'https://github.com/sqd2/Hardhat-DeFi-Freelance-Platform' }],
        media: {
            kind: 'image',
            src: '/found/trading-floor-1902.jpg',
            w: 1750,
            h: 1232,
            alt: 'Rows of empty wooden chairs facing the quotation board in a stockbroker’s customers’ room.',
            caption: 'A broker’s customers’ room, Broad Street, New York, 1902.',
            position: '50% 60%',
        },
    },
];

// Two-ended rows: name on the left, a short value on the right.
export const record = [
    {
        group: 'Bitlab Digital, backend engineer intern',
        tone: 'ochre',
        rows: [
            { name: 'Backend APIs in .NET Core, wired into Umbraco CMS', value: 'Jan to May 2025' },
            { name: 'JWT sign-in in front of every endpoint', value: 'C#' },
            { name: 'SQL Server schema with Entity Framework Core, soft deletes and ERDs', value: 'SQL Server' },
            { name: 'A second mail server that takes over when the first one fails', value: 'SMTP' },
            { name: 'Web content structured to train a university AI assistant', value: 'Data' },
        ],
    },
    {
        group: 'APU Red Hat Club, event coordinator lead',
        tone: 'olive',
        rows: [
            { name: 'Led a team of two', value: 'Oct 2024 to Dec 2025' },
            { name: 'Five events and more, 40 to 150 people each', value: 'Linux, DevOps' },
        ],
    },
    {
        group: 'Education',
        tone: 'bone',
        rows: [
            { name: 'BSc (Hons) Computer Science, Asia Pacific University', value: 'Jul 2026' },
            { name: 'Dual award with De Montfort University', value: 'UK' },
            { name: 'Operating systems, data structures, databases', value: 'Coursework' },
        ],
    },
    {
        group: 'Tools I reach for',
        tone: 'ochre',
        rows: [
            { name: 'C#, .NET Core, Entity Framework Core', value: 'Home' },
            { name: 'Rust and Tokio', value: 'Systems' },
            { name: 'TypeScript, Next.js, React', value: 'Web' },
            { name: 'Python and FastAPI', value: 'Services' },
            { name: 'SQL Server, PostgreSQL, Supabase', value: 'Data' },
            { name: 'Git, Docker, Google Cloud Run, Linux', value: 'Delivery' },
        ],
    },
    {
        group: 'Languages',
        tone: 'olive',
        rows: [
            { name: 'English', value: 'IELTS 7.5' },
            { name: 'Urdu, Hindi and Kashmiri', value: 'Native' },
        ],
    },
];

// Pictures found in open collections, credited in the footer.
export const credits = [
    { what: 'CubeSat clip', who: 'NASA Goddard', href: 'https://images.nasa.gov/details/GSFC_20170802_m12602_Dellingr_deployment' },
    { what: 'Mail room', who: 'National Photo Co., Library of Congress', href: 'https://commons.wikimedia.org/wiki/File:Mail_sorting_room,_U.S._Post_Office,_Washington,_D.C.)_-_National_Photo_Co.,_Washington,_D.C_LCCN90709842.jpg' },
    { what: 'Packing line', who: 'OSU Special Collections & Archives', href: 'https://commons.wikimedia.org/wiki/File:Packing_fruit_in_a_packing_house_(6355330089).jpg' },
    { what: 'Film room', who: 'Lubin Company, 1914', href: 'https://commons.wikimedia.org/wiki/File:A_Corner_of_the_Assembling_and_Joining_Room_at_the_Philadelphia_Studio_of_the_Lubin_Company.jpg' },
    { what: 'Broker’s room', who: 'J.L. McLean & Co., 1902', href: 'https://commons.wikimedia.org/wiki/File:Wall_Street_guide_-_(1902)_(14597749580).jpg' },
    { what: 'Kuala Lumpur river', who: 'G.R. Lambert & Co., KITLV', href: 'https://commons.wikimedia.org/wiki/File:KITLV_-_105898_-_Lambert_%26_Co.,_G.R._-_Singapore_-_River_in_Kuala_Lumpur_-_circa_1900.tif' },
];

// "UAK" in ASCII: U 01010101, A 01000001, K 01001011. Ink for 1, paper for 0.
export const stripeBits = ['U', 'A', 'K']
    .map((c) => c.charCodeAt(0).toString(2).padStart(8, '0'))
    .join('')
    .split('')
    .map(Number);

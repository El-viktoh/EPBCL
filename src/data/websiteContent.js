import businessForumPresentation from '../assets/photos/business-forum-presentation.jpg';
import catfishPond from '../assets/photos/catfish-pond.jpg';
import contractFormsReview from '../assets/photos/contract-forms-review.jpg';
import facilitatorWomenForum from '../assets/photos/facilitator-women-forum.jpg';
import farmerDataCapture from '../assets/photos/farmer-data-capture.jpg';
import farmerRegistrationDesks from '../assets/photos/farmer-registration-desks.jpg';
import fieldPlanting from '../assets/photos/field-planting.jpg';
import outdoorFishPond from '../assets/photos/outdoor-fish-pond.jpg';
import pineappleFieldVisit from '../assets/photos/pineapple-field-visit.jpg';
import planningWorkshopBoard from '../assets/photos/planning-workshop-board.jpg';
import pondIrrigationPump from '../assets/photos/pond-irrigation-pump.jpg';
import registrationCrowd from '../assets/photos/registration-crowd.jpg';
import stakeholderRoundtable from '../assets/photos/stakeholder-roundtable.jpg';
import tarpaulinFishTanks from '../assets/photos/tarpaulin-fish-tanks.jpg';
import trainingHallSession from '../assets/photos/training-hall-session.jpg';
import vegetableBedsIrrigation from '../assets/photos/vegetable-beds-irrigation.jpg';
import wateringCropBeds from '../assets/photos/watering-crop-beds.jpg';
import womenForumAudience from '../assets/photos/women-forum-audience.jpg';
import womenForumParticipant from '../assets/photos/women-forum-participant.jpg';
import womenForumPavilion from '../assets/photos/women-forum-pavilion.jpg';
import womensTrainingHall from '../assets/photos/womens-training-hall.jpg';

export const siteInfo = {
  name: "Eastern Prime Business Consult Limited",
  shortName: "EPBCL",
  tagline: "Innovating Solutions for a Sustainable Future",
  location: "Old estate ssnit traffic light, Koforidua and Kibi",
  locationShort: "Koforidua and Kibi, Eastern Region, Ghana",
  phone: "+233 20 197 5774",
  phoneLink: "+233201975774",
  email: "info@epbcl.com",
  copyright: `© ${new Date().getFullYear()} Eastern Prime Business Consult Ltd. All Rights Reserved.`,
  socialLinks: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  }
};

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    subServices: [
      { name: 'Access to Finance', href: '/services/access-to-finance' },
      { name: 'Agricultural Management Solutions', href: '/services/agricultural-management-solutions' },
      { name: 'Empowering Women and Youth', href: '/services/empowering-women-and-youth' },
      { name: 'Inclusive Contract Farming', href: '/services/inclusive-contract-farming-facilitation-and-coaching' },
      { name: 'Market Linkages', href: '/services/market-linkages' },
      { name: 'Business Development & Training', href: '/services/business-development-and-training' },
      { name: 'Climate-Friendly Initiatives', href: '/services/climate-friendly-initiatives' },
    ]
  },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export const servicesData = [
  {
    id: 'access-to-finance',
    slug: 'access-to-finance',
    title: 'Access to Finance',
    tagline: 'Fueling Business Growth Through Strategic Financial Support',
    shortDescription: 'Fueling business growth through strategic financial support.',
    description: 'EPBCL helps entrepreneurs, SMEs and established firms in any sector secure funding for expansion, technology upgrades, market entry and operational improvements.',
    iconName: 'Coins',
    color: '#FBC173',
    covers: [
      {
        title: 'Business Plan & Grant Proposal Development',
        detail: 'Professional business plans and funding proposals tailored to banks, investors and grant agencies.'
      },
      {
        title: 'Access to Capital Networks',
        detail: 'Connections to financial institutions, investment firms, donors and grant providers for debt, equity, working capital or startup funding.'
      },
      {
        title: 'Financial Strategy Advisory',
        detail: 'Financial planning, capital structuring, funding readiness, investor-meeting preparation and regulatory compliance advice.'
      },
      {
        title: 'Sector-Specific Expertise',
        detail: 'Deep expertise across Agriculture plus renewable energy, manufacturing, ICT, logistics and professional services.'
      }
    ],
    targetSectors: ['Agriculture', 'Renewable Energy', 'Manufacturing', 'ICT', 'Logistics', 'Professional Services'],
    highlights: [
      'Over 100 SMEs and agribusinesses facilitated with finance and technical assistance',
      'High success rate with competitive donor grants and concessionary debt facilities',
      'Complete end-to-end investor readiness packaging'
    ]
  },
  {
    id: 'agricultural-management-solutions',
    slug: 'agricultural-management-solutions',
    title: 'Agricultural Management Solutions',
    tagline: 'Empowering Farmers Through Modern, Sustainable Practices',
    shortDescription: 'Empowering farmers through modern, sustainable practices.',
    description: 'End-to-end support for smallholder and commercial farms to raise productivity, sustainability and profitability.',
    iconName: 'Sprout',
    color: '#2D5A50',
    covers: [
      {
        title: 'Training on Crop & Livestock Best Practices',
        detail: 'Sustainable crop production, pest/disease control, livestock nutrition, breeding, health and climate-smart agriculture.'
      },
      {
        title: 'Advisory for Resource Use & Yields',
        detail: 'On-site assessments; advice on soil health, irrigation, fertiliser and pest management; precision agriculture and integrated farm planning.'
      },
      {
        title: 'Sustainability & Climate Resilience Planning',
        detail: 'Conservation agriculture, agroforestry, regenerative farming and strategies against drought, flooding and changing conditions.'
      },
      {
        title: 'Digital Agriculture Integration',
        detail: 'Farm management software, remote sensing, agronomic apps, and mobile advisory platforms.'
      },
      {
        title: 'Market-Oriented Farm Management',
        detail: 'Crop selection, post-harvest handling, quality control and guaranteed links to off-takers.'
      }
    ],
    targetSectors: ['Smallholder Cooperatives', 'Commercial Grain & Tuber Farms', 'Horticulture & Greenhouses', 'Livestock & Poultry Producers', 'Agro-forestry Plantations'],
    highlights: [
      'Tailored crop management plans designed for local climatic zones',
      'Average yield increases of 25%+ with precision input management',
      'Sustainable pest & soil degradation mitigation strategies'
    ]
  },
  {
    id: 'empowering-women-and-youth',
    slug: 'empowering-women-and-youth',
    title: 'Empowering Women and Youth',
    tagline: 'Inclusive Growth Through Opportunity and Capacity Building',
    shortDescription: 'Inclusive growth through opportunity and capacity building.',
    description: 'Targeted programmes that help women and young people overcome barriers to resources, knowledge and opportunity, especially in smallholder farming and emerging enterprises.',
    iconName: 'Users',
    color: '#8A5A44',
    covers: [
      {
        title: 'Training & Skills Development',
        detail: 'Modern farming, business management, value addition, digital literacy and financial planning via workshops, demonstrations and peer learning.'
      },
      {
        title: 'Access to Inputs, Resources & Finance',
        detail: 'Partnerships for land, inputs, equipment, credit and startup grants.'
      },
      {
        title: 'Market Linkages & Value Chain Integration',
        detail: 'Contract farming, cooperatives, direct buyers, and moves into processing, packaging and export.'
      },
      {
        title: 'Leadership & Advocacy Support',
        detail: 'Participation in decision-making and advocacy for inclusive agricultural policy.'
      },
      {
        title: 'Mentorship & Networking',
        detail: 'Mentor matching and peer-to-peer learning platforms connecting emerging agri-entrepreneurs with established industry leaders.'
      }
    ],
    targetSectors: ['Rural Youth Associations', 'Women Farming Collectives', 'Agro-processing Startups', 'Community Youth Groups'],
    highlights: [
      'Hundreds of young agripreneurs equipped with commercial business skills',
      'Gender-inclusive access to micro-grants and processing tools',
      'Direct pathway from farming to value-added agro-processing'
    ]
  },
  {
    id: 'inclusive-contract-farming-facilitation-and-coaching',
    slug: 'inclusive-contract-farming-facilitation-and-coaching',
    title: 'Inclusive Contract Farming Facilitation & Coaching',
    tagline: 'Empowering Equitable Partnerships in Agriculture',
    shortDescription: 'Empowering equitable partnerships in agriculture.',
    description: "Inclusive Contract Farming (iCF) builds fair agreements between smallholder farmers and agribusinesses with shared responsibilities, risks and rewards. EPBCL's approach prioritises transparency, equity and sustainability.",
    iconName: 'Handshake',
    color: '#3B7A57',
    covers: [
      {
        title: 'Contract Design & Negotiation Support',
        detail: 'Fair, transparent contracts tailored to both farmers and buyers to prevent disputes and align incentives.'
      },
      {
        title: 'Capacity Building Workshops',
        detail: 'Contract management, quality standards compliance, good agricultural practices (GAP), and market requirements.'
      },
      {
        title: 'Market Linkage Facilitation',
        detail: 'Connecting smallholder producer groups directly to reliable commercial off-takers and industrial processors.'
      },
      {
        title: 'Monitoring & Evaluation',
        detail: 'Tracking contract performance, crop delivery, payment schedules, and mutual compliance.'
      }
    ],
    whyChoose: 'Over four years of dedicated agribusiness development experience, proven market-linkage impact, and tailored solutions built on mutual trust.',
    successStories: 'Over 2,000 smallholder farmers integrated into sustainable supply chains; better access to inputs, credit and technical support; stronger farmer–agribusiness trust.',
    targetSectors: ['Off-takers & Industrial Processors', 'Smallholder Farmer Outgrower Schemes', 'Exporters', 'Commodity Aggregators'],
    highlights: [
      'Over 2,000 smallholder farmers successfully integrated into supply chains',
      'Drastically reduced side-selling and dispute rates through transparent contracts',
      'Continuous coaching and field extension monitoring'
    ]
  },
  {
    id: 'market-linkages',
    slug: 'market-linkages',
    title: 'Market Linkages',
    tagline: 'Connecting Producers to Profitable and Sustainable Markets',
    shortDescription: 'Connecting producers to profitable and sustainable markets.',
    description: 'Helps producers overcome limited market information, buyer access and poor pricing, to raise income, cut post-harvest losses and build lasting buyer partnerships.',
    iconName: 'TrendingUp',
    color: '#FBC173',
    covers: [
      {
        title: 'Local, Regional & International Market Access',
        detail: 'Links to traders, supermarkets, wholesalers and export markets; help meeting quality and certification standards.'
      },
      {
        title: 'Product Positioning & Branding',
        detail: 'Packaging, branding, labelling and value addition to command premium retail and institutional pricing.'
      },
      {
        title: 'Networking Events & Trade Fairs',
        detail: 'Expos, B2B meetings and agricultural trade fairs that open direct business avenues.'
      },
      {
        title: 'Contract Farming & Aggregation Models',
        detail: 'Guaranteed markets and pricing; cooperatives and farmer groups for collective bargaining power.'
      },
      {
        title: 'Market Intelligence & Pricing',
        detail: 'Real-time price trends, buyer requirements and seasonal guidance for optimal sales timing.'
      },
      {
        title: 'Export Readiness Support',
        detail: 'Export documentation, GlobalG.A.P. and HACCP compliance, logistics, cold chain management, and customs.'
      }
    ],
    targetSectors: ['Commercial Fruit & Vegetable Producers', 'Grain Producers & Aggregators', 'Export-Ready Agribusinesses', 'Supermarket & Hospitality Suppliers'],
    highlights: [
      'Direct linkage to domestic supermarkets and regional West African markets',
      'Compliance support for GlobalG.A.P. and HACCP certifications',
      'Significantly reduced post-harvest losses via timely market off-take'
    ]
  },
  {
    id: 'business-development-and-training',
    slug: 'business-development-and-training',
    title: 'Business Development and Training',
    tagline: 'Building Stronger, Smarter, and More Resilient Agribusinesses',
    shortDescription: 'Building stronger, smarter and more resilient agribusinesses.',
    description: 'Management, financial and strategy support for cooperatives, growing agribusinesses and startups.',
    iconName: 'GraduationCap',
    color: '#1A3A34',
    covers: [
      {
        title: 'Record Keeping & Bookkeeping',
        detail: 'Systems for income, expenses, inventory and payroll records tailored for farm enterprises.'
      },
      {
        title: 'Financial Reporting & Compliance',
        detail: 'Balance sheets, income statements, cash-flow analyses; tax, audit and regulatory reporting compliance.'
      },
      {
        title: 'Business Health Checks & Diagnostics',
        detail: 'Identifying operational gaps, financial vulnerabilities and untapped growth areas.'
      },
      {
        title: 'Tailored Training Programmes',
        detail: 'Entrepreneurship, cost management, marketing, pricing, customer relations and supply chain – via workshops, coaching and digital platforms.'
      },
      {
        title: 'Strategic Planning & Growth Advisory',
        detail: 'Market research, SWOT analysis, value-chain positioning and investment readiness.'
      },
      {
        title: 'Enterprise Formalisation & Registration',
        detail: 'Legal registration, licensing, taxation compliance and corporate governance setup.'
      }
    ],
    targetSectors: ['Agri-SMEs', 'Farmer Based Organisations (FBOs)', 'Commodity Trading Startups', 'Food Processing Enterprises'],
    highlights: [
      'Comprehensive financial management tools for agricultural enterprises',
      'Formalisation of informal farm businesses into investable corporate entities',
      'Interactive modular workshops delivered both on-site and digitally'
    ]
  },
  {
    id: 'climate-friendly-initiatives',
    slug: 'climate-friendly-initiatives',
    title: 'Climate-Friendly Initiatives',
    tagline: 'Driving Sustainable Agriculture Through Innovation and Environmental Stewardship',
    shortDescription: 'Driving sustainable agriculture through innovation and environmental stewardship.',
    description: 'Supports low-emission technologies and climate-smart practices across the agricultural value chain to protect resources, cut greenhouse gases and adapt to climate change.',
    iconName: 'CloudRain',
    color: '#2A9D8F',
    covers: [
      {
        title: 'Africa Climate Change Fund (ACCF) Application',
        detail: 'Seeking funding for a gender-transformative methane reduction project in palm oil processing, helping women and marginalised groups adopt cleaner technology.'
      },
      {
        title: 'Eco-Friendly Machinery & Practices',
        detail: 'Biodigesters, improved processing systems, conservation equipment; livestock feed and manure management advice.'
      },
      {
        title: 'Climate-Smart Agriculture Training',
        detail: 'Sustainable land management, crop rotation, agroforestry, water harvesting and soil conservation.'
      },
      {
        title: 'Carbon Footprint Assessments & Environmental Audits',
        detail: 'Measuring emissions impact, identifying emission reduction levers, and preparing carbon-credit eligibility.'
      },
      {
        title: 'Green Innovation Partnerships',
        detail: 'Collaborative work with research institutions, tech providers and environmental organisations (e.g. remote sensing, mobile green-farming tips).'
      },
      {
        title: 'Policy Advocacy & Awareness',
        detail: 'Promoting supportive policies, green finance incentives and climate-resilient agricultural investment.'
      }
    ],
    targetSectors: ['Palm Oil & Cassava Processors', 'Smallholder Farmers in Vulnerable Ecosystems', 'Climate Funders & Environmental Donors', 'Agro-forestry Initiatives'],
    highlights: [
      'Flagship palm oil methane reduction and biodigester project concept under ACCF',
      'Promotion of regenerative agriculture and agroforestry across Ghana',
      'Active advocacy for green agricultural financing and carbon reduction'
    ]
  }
];

export const statisticsData = [
  {
    value: "2,000+",
    label: "Small Holder Farmers",
    detail: "Integrated into sustainable commercial supply chains"
  },
  {
    value: "100+",
    label: "MSMEs & Agribusinesses",
    detail: "Facilitated with finance and technical assistance"
  },
  {
    value: "10+",
    label: "Value Chains",
    detail: "Maize, rice, cocoa, palm oil, horticulture, poultry & aquaculture"
  },
  {
    value: "150+",
    label: "Farmer Associations",
    detail: "Empowered through coaching and contract management"
  }
];

export const testimonialData = {
  quote: "EPBCL helped me secure a COVID-19 grant. Their team's professionalism and expertise made the entire process seamless from start to finish. They truly exceeded our expectations, and we highly recommend their services and look forward to working with them again.",
  clientName: "Bender Owusu Antwi Bediako",
  clientTitle: "Director",
  company: "Coco Benz Ltd",
  tag: "COVID-19 Relief & Business Advisory Success"
};

export const investmentProgramData = {
  title: "Agribusiness Investment Made Simple",
  subtitle: "Farming & Agribusiness Investment Program",
  slogan: "You Invest. We Farm. You Profit.",
  description: "EPBCL invites individuals and organisations to invest in farmland and agricultural projects: the investor provides capital and EPBCL manages everything else – land acquisition, crop planning, planting, irrigation, harvesting and market distribution – using sustainable practices, smart technology and market-driven strategies.",
  pitch: "Pitched as a reliable, low-risk entry into agribusiness for both seasoned and new investors.",
  benefits: [
    {
      title: "Passive Income",
      description: "Earn regular, attractive returns without having to get your hands dirty doing the farming."
    },
    {
      title: "Transparency",
      description: "Detailed quarterly performance reports, digital farm updates, and field audit records."
    },
    {
      title: "Expert Management",
      description: "Experienced agronomists, soil specialists and farm managers oversee every operational detail."
    },
    {
      title: "Impactful Investment",
      description: "Directly supports regional food security, rural job creation, and sustainable community development."
    }
  ]
};

export const teamData = [
  {
    name: "Naydia Oduro-Awuku",
    role: "CEO",
    title: "Chief Executive Officer & Agribusiness Consultant",
    bio: "Agribusiness and business development consultant with over 7 years' experience strengthening agricultural value chains, rural livelihoods and enterprise development in Ghana and sub-Saharan Africa. Has worked with smallholder farmers, cooperatives, agribusinesses and SMEs across maize, rice, cocoa, pineapple, palm oil, horticulture, poultry and aquaculture, and with development partners, donors, financial institutions, government ministries, investors, NGOs and community groups.",
    expertise: [
      "Agribusiness development & value chain strengthening",
      "Inclusive business model design (e.g. contract farming, embedded services)",
      "Access to finance & agricultural credit facilitation",
      "Entrepreneurship & vocational skills training",
      "MSME support & enterprise growth strategies",
      "Market systems development & linkage facilitation",
      "Climate-smart & environmentally sustainable agriculture",
      "Gender and youth inclusion in agribusiness",
      "Project design, monitoring and evaluation",
      "Policy advocacy & stakeholder engagement"
    ],
    trackRecord: [
      "Designed and implemented a hybrid model supporting smallholder maize producers with inputs, training and market integration",
      "Facilitated finance and technical assistance for over 100 SMEs and agribusinesses",
      "Supported inclusive input-distribution supply models for high-value crops",
      "Delivered entrepreneurship and financial literacy training for rural youth and women"
    ],
    worksWith: "Development agencies, private-sector actors interested in sustainable sourcing, government institutions designing rural programmes, and cooperatives/SMEs.",
    email: "naydiaawuku@gmail.com",
    phone: "0546449099",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Tasiame Edwin",
    role: "Finance and Administration Manager",
    title: "Finance and Administration Manager",
    bio: "Chartered Accountant with over 9 years' experience in accounting, financial management and consultancy. Holds a BSc in Business Administration (Accounting option) from the University of Ghana, Legon, and is a member of the Institute of Chartered Accountants, Ghana. Provides strategic financial insight and advisory services that help businesses improve efficiency, compliance and profitability.",
    expertise: [
      "Strategic Financial Planning & Budgeting",
      "Accounting Systems Setup & Controls",
      "Audit & Tax Compliance Advisory",
      "Cash Flow Optimisation & Cost Engineering",
      "Agribusiness Investment Modeling"
    ],
    trackRecord: [
      "Streamlined financial operations and governance across multi-stakeholder agricultural projects",
      "Managed audit, compliance, and reporting structures for grant-funded initiatives",
      "Advised high-growth agribusinesses on capital structuring and tax efficiency"
    ],
    worksWith: "Agri-enterprises, commercial farms, investor consortia, and donor-backed funding facilities.",
    email: "info@epbcl.com",
    phone: "+233 20 197 5774",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
  }
];

export const focusAreas = [
  {
    title: "Agricultural Management Solutions",
    description: "End-to-end farm advisory, agronomy training, precision soil and crop health management.",
    slug: "agricultural-management-solutions"
  },
  {
    title: "Climate-Friendly Initiatives",
    description: "Low-emission tech, biodigesters, palm oil methane reduction, and climate-smart training.",
    slug: "climate-friendly-initiatives"
  },
  {
    title: "Empowering Women and Youth",
    description: "Breaking systemic barriers through skills, financial literacy, input access, and mentoring.",
    slug: "empowering-women-and-youth"
  },
  {
    title: "Market Linkages",
    description: "Connecting producers to profitable commercial buyers, trade fairs, and export channels.",
    slug: "market-linkages"
  },
  {
    title: "Business Development and Training",
    description: "Record keeping, financial health audits, formalisation, and strategic growth coaching.",
    slug: "business-development-and-training"
  },
  {
    title: "Access to Finance",
    description: "Facilitating debt, equity, startup grants, and institutional funding readiness.",
    slug: "access-to-finance"
  },
  {
    title: "Inclusive Contract Farming",
    description: "Equitable risk-sharing agreements connecting 2,000+ smallholder farmers to stable markets.",
    slug: "inclusive-contract-farming-facilitation-and-coaching"
  }
];

export const galleryItems = [
  {
    id: 1,
    title: "Women's Community Forum",
    category: "Women & Youth",
    image: womenForumPavilion,
    caption: "A large gathering of rural women in an open pavilion for an EPBCL empowerment and agribusiness session."
  },
  {
    id: 2,
    title: "Facilitator-Led Women's Session",
    category: "Women & Youth",
    image: facilitatorWomenForum,
    caption: "An EPBCL facilitator leading a discussion on livelihoods, savings and enterprise with women's groups."
  },
  {
    id: 3,
    title: "Participant Voices",
    category: "Women & Youth",
    image: womenForumParticipant,
    caption: "A participant shares her experience with the group during an interactive community session."
  },
  {
    id: 4,
    title: "Women's Group Engagement",
    category: "Women & Youth",
    image: womenForumAudience,
    caption: "Women farmers and traders taking part in a capacity-building forum."
  },
  {
    id: 5,
    title: "Farmer Training Hall Session",
    category: "Training & Workshops",
    image: trainingHallSession,
    caption: "A facilitator presenting to a full hall of farmers during a group training programme."
  },
  {
    id: 6,
    title: "Women's Training Programme",
    category: "Training & Workshops",
    image: womensTrainingHall,
    caption: "Hundreds of women attending a structured training session on agribusiness and financial literacy."
  },
  {
    id: 7,
    title: "Business Forum Presentation",
    category: "Training & Workshops",
    image: businessForumPresentation,
    caption: "Presenting local business opportunities to entrepreneurs at a district business forum."
  },
  {
    id: 8,
    title: "Strategic Planning Workshop",
    category: "Training & Workshops",
    image: planningWorkshopBoard,
    caption: "Mapping project priorities and activities with stakeholders during a planning workshop."
  },
  {
    id: 9,
    title: "Farmer Registration & Data Capture",
    category: "Market Linkages",
    image: farmerRegistrationDesks,
    caption: "Field officers registering farmers digitally to link them to programmes, inputs and buyers."
  },
  {
    id: 10,
    title: "Digital Profiling of Farmers",
    category: "Market Linkages",
    image: farmerDataCapture,
    caption: "Capturing farmer details on laptops to build reliable records for contract farming and finance."
  },
  {
    id: 11,
    title: "Community Registration Day",
    category: "Market Linkages",
    image: registrationCrowd,
    caption: "Farmers gathered under a shelter awaiting registration at a community outreach day."
  },
  {
    id: 12,
    title: "Contract Documentation Review",
    category: "Market Linkages",
    image: contractFormsReview,
    caption: "Farmer group leaders reviewing and completing programme documentation."
  },
  {
    id: 13,
    title: "Stakeholder Roundtable",
    category: "Training & Workshops",
    image: stakeholderRoundtable,
    caption: "Community members and leaders in a roundtable discussion on local development priorities."
  },
  {
    id: 14,
    title: "Pineapple Farm Visit",
    category: "Field Operations",
    image: pineappleFieldVisit,
    caption: "On-farm advisory visit to a pineapple field to assess crop establishment and husbandry."
  },
  {
    id: 15,
    title: "Vegetable Beds Under Irrigation",
    category: "Climate & Tech",
    image: vegetableBedsIrrigation,
    caption: "Vegetable beds supplied by irrigation lines, supporting dry-season production."
  },
  {
    id: 16,
    title: "Pond-Fed Irrigation Pumping",
    category: "Climate & Tech",
    image: pondIrrigationPump,
    caption: "Drawing water from a dugout with a motorised pump to irrigate nearby farmland."
  },
  {
    id: 17,
    title: "Watering Crop Beds",
    category: "Field Operations",
    image: wateringCropBeds,
    caption: "A farmer watering seedling beds on newly developed farmland."
  },
  {
    id: 18,
    title: "Field Establishment",
    category: "Field Operations",
    image: fieldPlanting,
    caption: "Planting and tending young crops on cleared land at the start of the season."
  },
  {
    id: 19,
    title: "Catfish Grow-Out Pond",
    category: "Agribusiness Investment",
    image: catfishPond,
    caption: "Mature catfish in a concrete grow-out pond under the EPBCL aquaculture model."
  },
  {
    id: 20,
    title: "Aquaculture Tank Facility",
    category: "Agribusiness Investment",
    image: tarpaulinFishTanks,
    caption: "Covered tarpaulin tanks used for raising catfish fingerlings to market size."
  },
  {
    id: 21,
    title: "Fish Farm Investment Site",
    category: "Agribusiness Investment",
    image: outdoorFishPond,
    caption: "An outdoor fish pond at an investor-backed farm: 'You Invest. We Farm. You Profit.'"
  }
];

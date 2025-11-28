import { Product, ProductCategory } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'PV Wire 10 AWG 2000V',
    category: ProductCategory.Cables,
    price: 0.45,
    unit: 'per ft',
    description: 'UL 4703 listed Photovoltaic Wire, rated for 2000V. UV resistant black jacket. Ideal for commercial and utility scale projects.',
    specs: ['10 AWG Copper', '2000V Rated', 'XLPE Insulation', 'UL 4703'],
    imageUrl: 'https://picsum.photos/400/400?random=1',
    inStock: true
  },
  {
    id: '2',
    name: 'MC4 Connector Pair (Male/Female)',
    category: ProductCategory.Cables,
    price: 2.50,
    unit: 'pair',
    description: 'Original Multi-Contact MC4 connectors. IP68 rated waterproof connection for harsh environments.',
    specs: ['1500V DC', '30A Rated', 'IP68 Protection', 'Snap-in Lock'],
    imageUrl: 'https://picsum.photos/400/400?random=2',
    inStock: true
  },
  {
    id: '3',
    name: '12-String Combiner Box',
    category: ProductCategory.Combiners,
    price: 450.00,
    unit: 'unit',
    description: 'NEMA 4X polycarbonate enclosure. Includes 15A fuses and integrated DC disconnect switch.',
    specs: ['12 Input Strings', '1500V DC', '250A Output', 'NEMA 4X'],
    imageUrl: 'https://picsum.photos/400/400?random=3',
    inStock: true
  },
  {
    id: '4',
    name: 'Rapid Shutdown Initiator Switch',
    category: ProductCategory.Protection,
    price: 85.00,
    unit: 'unit',
    description: 'Emergency stop button for rapid shutdown initiation. Compliant with NEC 2017/2020 690.12.',
    specs: ['Outdoor Rated', 'Lockable', 'Red/Yellow Visibility', 'UL Listed'],
    imageUrl: 'https://picsum.photos/400/400?random=4',
    inStock: true
  },
  {
    id: '5',
    name: 'Mid-Clamp Universal Black',
    category: ProductCategory.Mounting,
    price: 3.25,
    unit: 'unit',
    description: 'Universal mid-clamp for 30-40mm module frames. Integrated bonding pin for grounding.',
    specs: ['Black Anodized', 'Integrated Grounding', 'Stainless Hardware', '30-40mm Range'],
    imageUrl: 'https://picsum.photos/400/400?random=5',
    inStock: true
  },
  {
    id: '6',
    name: 'Grounding Lug (Lay-in)',
    category: ProductCategory.Mounting,
    price: 4.10,
    unit: 'unit',
    description: 'Tin-plated copper lay-in lug for grounding rail systems. Supports 4-14 AWG copper wire.',
    specs: ['Tin-Plated Copper', 'Stainless Set Screw', 'Direct Burial Rated', 'UL 467'],
    imageUrl: 'https://picsum.photos/400/400?random=6',
    inStock: true
  },
  {
    id: '7',
    name: 'DC Surge Protection Device (SPD) Type 2',
    category: ProductCategory.Protection,
    price: 120.00,
    unit: 'unit',
    description: 'Protect inverters and combiner boxes from lightning surges. DIN rail mount.',
    specs: ['1000V DC', '40kA Imax', 'Remote Signaling', 'DIN Rail'],
    imageUrl: 'https://picsum.photos/400/400?random=7',
    inStock: false
  },
  {
    id: '8',
    name: 'Solar Irradiance Sensor',
    category: ProductCategory.Monitoring,
    price: 299.00,
    unit: 'unit',
    description: 'High precision silicon pyranometer for performance monitoring. RS485 output.',
    specs: ['0-1500 W/m²', 'Modbus RTU', 'Class A Accuracy', 'IP65'],
    imageUrl: 'https://picsum.photos/400/400?random=8',
    inStock: true
  }
];

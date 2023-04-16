export interface IProductRes {
  code: number;
  result: Result;
}

interface Result {
  data: IProduct[];
  count: number;
}

export interface IProduct {
  _id: string;
  idc: string;
  business: Business;
  type: number;
  service: Service2;
  title: string;
  text: string;
  filters: any[];
  price: number;
  inventory: number;
  inventoryFilters: any[];
  regionName: string;
  offPrice?: any;
  media: Media2[];
  postAt: string;
  freeDelivery: boolean;
  isLiked: boolean;
  isBooked: boolean;
  shareLink: string;
  promoteAvailable: boolean;
  lkCount?: number;
}

interface Media2 {
  _id: string;
  hash: string;
  size: number;
  type: number;
  mimeType: string;
  i: I2;
  createdAt: string;
  updatedAt: string;
}

interface I2 {
  w: number;
  h: number;
  tag: string;
}

interface Service2 {
  _id: string;
  filters: string[];
  name: string;
  description: string;
  parent: string;
  type: number;
  hasChild: boolean;
  ic: string;
  cl: string;
  idc: string;
  c2c: boolean;
  buy: boolean;
}

interface Business {
  _id: string;
  services: Service[];
  media: Media[];
  dialogAvailable: boolean;
  isVerified: boolean;
  idc: string;
  name: string;
  description: string;
  isProv: boolean;
  status: number;
  place: string;
  city: City;
  region: Region;
  point: number[];
  address: string;
  phoneNumber: string;
  hasNumber: boolean;
  zoom: number;
  ipgAvailable: boolean;
  rate: number;
  rvCount: number;
  rvInfo: RvInfo;
  shareLink: string;
}

interface RvInfo {
  "5": number;
}

interface Region {
  _id: string;
  name: string;
  type: number;
  point: number[];
}

interface City {
  _id: string;
  name: string;
  type: number;
  point: number[];
  idc: string;
}

interface Media {
  _id: string;
  hash: string;
  size: number;
  type: number;
  mimeType: string;
  i: I;
}

interface I {
  w: number;
  h: number;
}

interface Service {
  _id: string;
  name: string;
  ic: string;
  cl: string;
}

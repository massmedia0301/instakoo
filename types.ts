export enum Platform {
  YOUTUBE = 'YOUTUBE',
  INSTAGRAM = 'INSTAGRAM',
  NAVER = 'NAVER',
  DANGGEUN = 'DANGGEUN'
}

export interface ServiceOption {
  id: string;
  name: string;
  pricePerUnit: number;
  minQuantity: number;
  description: string;
  platform: Platform;
}

export interface OrderFormState {
  platform: Platform;
  serviceId: string;
  url: string;
  quantity: number;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  content: string;
  platform: Platform;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}
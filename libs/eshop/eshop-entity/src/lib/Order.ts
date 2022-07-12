import { OrderItem } from './OrderItem';
import { PaymentStatus } from './Payment';
import { ShipmentStatus } from './Shipment';

export enum OrderStatus {
  Approved,
  Completed,
  Cancelled,
}

export interface OrderPayment {
  status: PaymentStatus;
}

export interface OrderShipment {
  status: ShipmentStatus;
}

export interface Order {
  orderNumber: string;
  orderItems: OrderItem[];
  payment: OrderPayment;
  shipment: OrderShipment;
  status: OrderStatus;
}

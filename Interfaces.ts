interface IUser {
    userId: number;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName?: string;
    birthDate?: Date;
    homeAdress?: string;
}

interface Product {
    productId: string;
    productName: string;
    productPrice: number;
    productDescription: string;
}

interface Supplier {
    supplierId: number;
    supplierName: string;
    supplierDescription?: string;
    deliveryDate?: Date;
    deliveryId?: string;
}

interface Order {
    orderId: string;
    orderDate: Date;
    userId?: number;
    productId?: string;
    deliveryId?: string;
}

interface OrderDetailDelivery {
    deliveryId: string;
    orderId: string;
    orderDetailId: string;
    deliveryDate: Date;
}

interface OrderDetail {
    OrderDetailId: string;
    productId: string;
    orderId: string;
    productQuantity: number;
}

interface Delivery {
    deliveryId: string;
    deliveryDate: Date;
    supplierId: number;
}






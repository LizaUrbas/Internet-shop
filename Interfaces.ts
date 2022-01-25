interface IUser {
    IUserId: number;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName?: string;
    birthDate?: Date;
    homeAdress?: string;
}

interface Order {
    orderId: string;
    orderDate: Date;
    IUserId?: number;
    productId?: string;
    deliveryId?: string;
}

interface OrderDetail {
    OrderDetailId: string;
    productId: string;
    orderId: string;
    productQuantity: number;
}







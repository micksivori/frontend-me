export interface Data {
    header: header;
    supplier: supplier;
    addresses: address[];

}

export interface header {
    number: number;
        serial: number;
        buyer: string;
        price: number;
        currency: string;
        createdAt: string;
        status: string;
        contact: {
            name: string;
            email: string;
            phone: number;
            fax: number;
    };
}

export interface supplier {
    code: number;
    name: string;
    readAt: string;
    lastReplyAt: string;
    document: {
        type: string;
        value: string;
    };
    address: string;
    contact: {
        name: string;
        email: string;
        phone: number;
        fax: number;
    };
}

export interface address {
    label: string;
    name: string;
    code: string;
    address: string;
    contact: {
        name: string;
        email: string;
        phone: number;
        fax: number;
    };
}
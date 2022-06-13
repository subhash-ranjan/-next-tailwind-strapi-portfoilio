export type ServiceItemType = {
    name: string;
    skills: JSON;
};

export type ServiceType = {
    attributes: ServiceItemType;
};

export type ServiceListType = {
    services: ServiceType[];
};

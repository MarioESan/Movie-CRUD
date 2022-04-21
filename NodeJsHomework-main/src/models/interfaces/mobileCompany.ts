import { Document } from 'mongoose';

export default interface IMobileCompany extends Document{
    name: string,
    slogan: string,
    birthday_date: string,
    sponsors:{
        company_name: string,
        money_given: number,
        has_contract: boolean,
    },
}
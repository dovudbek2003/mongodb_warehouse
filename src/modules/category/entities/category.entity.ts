// export class Category {}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
    @Prop({
        type: String,
        required: true
    })
    name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Cat);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Tag } from './tag.schema';


@Schema({ versionKey: false })
export class Product {
    @Prop()
    img: {
        small: {
            ref: string | null;
            id: string | null;
        };
        large: {
            ref: string | null;
            id: string | null;
        };
    };

    @Prop()
    title: string;

    @Prop()
    price: number;

    @Prop()
    totalQty: number;

    @Prop()
    description: string;

    @Prop({ type: Types.ObjectId, ref: Tag })
    tag: Types.ObjectId;

}

export const ProductSchema = SchemaFactory.createForClass(Product);
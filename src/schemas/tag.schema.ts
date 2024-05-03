import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Tag {
    @Prop()
    img: string | null;

    @Prop()
    imgId: string | null;

    @Prop()
    name: string;

}

export const TagSchema = SchemaFactory.createForClass(Tag);

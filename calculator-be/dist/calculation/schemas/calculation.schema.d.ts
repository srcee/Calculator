/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
export type CalculationDocument = Calculation & Document;
export declare class Calculation {
    id: string;
    equation: string;
    result: string;
}
export declare const CalculationSchema: import("mongoose").Schema<Calculation, import("mongoose").Model<Calculation, any, any, any>, any, any>;

import { IsString,Min,MinLength, IsPositive, IsInt } from "class-validator";

export class CreatePokemonDto {
    @IsPositive()
    @IsInt()
    @Min(1)
    no:number

    @IsString()
    @MinLength(1)
    name:string;
   
}
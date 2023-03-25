import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axion.adapter';

@Module({
    providers:[AxiosAdapter],
    exports:[AxiosAdapter]
})
export class CommonModule {}

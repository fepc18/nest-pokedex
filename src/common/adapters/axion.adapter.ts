import { HttpAdapter } from '../../../dist/common/interfaces/http-adapter.interface';
import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosAdapter implements HttpAdapter{
    private  axion: AxiosInstance = axios;
   
    async get<T>(url: string): Promise<T> {
      try {
        const {data}= await this.axion.get<T>(url);
        return data;
      } catch (error) {
        //500 Error
        throw new Error('This is an error - Check Logs')
      }
    }

}
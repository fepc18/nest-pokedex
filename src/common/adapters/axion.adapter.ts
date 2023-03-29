import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

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
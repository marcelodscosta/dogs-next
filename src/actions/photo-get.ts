'use server'

import { PhotoDTO } from '@/dtos/PhotoDTO';

export default async function photoGet(){

const response = await fetch('https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=6&_user=0');
const data = await response.json() as PhotoDTO[];

 return data;
};